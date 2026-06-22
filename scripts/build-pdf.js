#!/usr/bin/env node

const { mdToPdf } = require("md-to-pdf");
const puppeteer = require("puppeteer");
const { execSync } = require("child_process");
const path = require("path");
const fs = require("fs");
require("dotenv").config({ path: path.join(__dirname, "..", ".env") });

const root = path.join(__dirname, "..");
const inputArg = process.argv[2] || "resume-export.md";
const inputPath = path.isAbsolute(inputArg)
  ? inputArg
  : path.join(root, inputArg);

if (!fs.existsSync(inputPath)) {
  console.error(`Error: input file not found: ${inputPath}`);
  process.exit(1);
}

const baseName = path.basename(inputPath, path.extname(inputPath));

const resumeSlug = process.env.RESUME_FILE_SLUG;
if (baseName === "resume-export" && !process.argv[3] && !resumeSlug) {
  console.error("Missing RESUME_FILE_SLUG in .env (see .env.example)");
  process.exit(1);
}

const outputName =
  process.argv[3] ||
  (baseName === "resume-export"
    ? `${resumeSlug}_Resume.pdf`
    : `${baseName}.pdf`);

const outputDir = path.join(root, "output");
const dest = path.join(outputDir, outputName);
const cssPath = path.join(root, "templates", "resume.css");

const CHROME_ARGS = [
  // "--no-sandbox",
  // "--disable-setuid-sandbox",
  // "--disable-dev-shm-usage",
];

function resolveChromePath() {
  try {
    const chromePath = puppeteer.executablePath();
    if (chromePath && fs.existsSync(chromePath)) {
      return chromePath;
    }
  } catch (_) {
    // Fall through to install.
  }
  return null;
}

function installChrome() {
  console.log("Chrome not found. Installing via Puppeteer (one-time setup)...");
  const puppeteerCli = path.join(root, "node_modules", ".bin", "puppeteer");
  execSync(`"${puppeteerCli}" browsers install chrome`, {
    cwd: root,
    stdio: "inherit",
    env: process.env,
  });
}

function getChromePath() {
  let chromePath = resolveChromePath();
  if (chromePath) {
    return chromePath;
  }

  installChrome();
  chromePath = resolveChromePath();

  if (!chromePath) {
    throw new Error("Chrome install failed. Run: pnpm run setup:chrome");
  }

  return chromePath;
}

fs.mkdirSync(outputDir, { recursive: true });

async function build() {
  try {
    const executablePath = getChromePath();

    await mdToPdf(
      { path: inputPath },
      {
        dest,
        basedir: root,
        stylesheet: [cssPath],
        wait_for: 5000,
        pdf_options: {
          format: "Letter",
          margin: {
            top: "10mm",
            right: "10mm",
            bottom: "10mm",
            left: "10mm",
          },
          printBackground: true,
        },
        launch_options: {
          executablePath,
          args: CHROME_ARGS,
        },
      },
    );

    console.log(`PDF generated: ${dest}`);
  } catch (error) {
    console.error("PDF generation failed:", error.message);
    process.exit(1);
  }
}

build();
