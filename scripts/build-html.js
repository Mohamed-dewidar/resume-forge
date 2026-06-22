#!/usr/bin/env node

const { mdToPdf } = require("md-to-pdf");
const path = require("path");
const fs = require("fs");

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
const outputName =
  process.argv[3] ||
  (baseName === "resume-export" ? "resume-preview.html" : `${baseName}.html`);

const outputDir = path.join(root, "output");
const dest = path.join(outputDir, outputName);
const cssPath = path.join(root, "templates", "resume.css");
const css = fs.readFileSync(cssPath, "utf8");

fs.mkdirSync(outputDir, { recursive: true });

async function build() {
  try {
    const result = await mdToPdf(
      { path: inputPath },
      {
        basedir: root,
        stylesheet: [cssPath],
        css: css,
        as_html: true,
      },
    );

    if (!result?.content) {
      throw new Error("HTML generation returned empty content");
    }

    fs.writeFileSync(dest, result.content);
    console.log(`HTML preview: ${dest}`);
  } catch (error) {
    console.error("HTML generation failed:", error.message);
    process.exit(1);
  }
}

build();
