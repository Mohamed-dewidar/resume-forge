# Resume Forge

Local-first toolkit for writing ATS-friendly resumes in Markdown, exporting clean PDF/HTML, and tailoring applications with Cursor AI agent skills.

Write your resume once, iterate in your editor, export submission-ready PDFs, and use specialized agent skills for keyword optimization, job matching, cover letters, and interview prep — without committing personal data to git.

## Features

- **Markdown → PDF/HTML** — Build pipeline powered by [md-to-pdf](https://github.com/simonhaenisch/md-to-pdf) and Puppeteer
- **ATS-friendly styling** — Single-column layout, semantic HTML, and print-optimized CSS (`templates/resume.css`)
- **Private by default** — Resume sources, `.env`, and generated output are gitignored
- **Configurable PDF naming** — Output filename driven by `RESUME_FILE_SLUG` in `.env`
- **Cursor agent skills** — 22 resume and career skills in `.cursor/skills/` (based on [ResumeSkills](https://github.com/Paramchoudhary/ResumeSkills))
- **Tailored versions** — Keep job-specific variants under `tailored/` without polluting your master resume

## Prerequisites

- [Node.js](https://nodejs.org/) 18+
- [pnpm](https://pnpm.io/) 10+ (recommended; see `packageManager` in `package.json`)
- ~200 MB disk space for Puppeteer's bundled Chrome (installed automatically on `pnpm install`)

## Quick start

### 1. Clone and install

```bash
git clone <your-repo-url>
cd resume-forge   # or your local folder name
pnpm install
```

`pnpm install` runs `postinstall`, which downloads Chrome for Puppeteer. If that step fails, run:

```bash
pnpm run setup:chrome
```

### 2. Configure environment

```bash
cp .env.example .env
```

Edit `.env`:

```bash
RESUME_FILE_SLUG=Your_Name
```

This controls the default PDF filename: `output/Your_Name_Resume.pdf`.

### 3. Create your resume files (local only — not committed)

These files are **gitignored**. Create them on your machine:

| File               | Purpose                                                      |
| ------------------ | ------------------------------------------------------------ |
| `master-resume.md` | Full source of truth — all experience, projects, and bullets |
| `resume-export.md` | Polished export version used by the build scripts            |

Start from a header block like this in `resume-export.md`:

```markdown
<div class="resume-header">
  <h1>Your Name</h1>
  <p class="role-title">Your Title</p>
  <p class="contact-row">
    <a href="mailto:you@example.com">you@example.com</a>
    <a href="tel:+10000000000">+1 000 000 0000</a>
    <a href="https://github.com/your-handle">github.com/your-handle</a>
    <a href="https://linkedin.com/in/your-handle">linkedin.com/in/your-handle</a>
    <span>City, Country</span>
  </p>
</div>

## Professional Summary

Your summary here…
```

The build scripts support inline HTML for headers and structured entries, plus standard Markdown for sections and bullets.

### 4. Build

```bash
# PDF + HTML preview
pnpm run build

# PDF only → output/{RESUME_FILE_SLUG}_Resume.pdf
pnpm run build:pdf

# HTML preview only → output/resume-preview.html
pnpm run build:html
```

Open `output/resume-preview.html` in a browser to check layout before submitting the PDF.

## Scripts

| Command                     | Description                                   |
| --------------------------- | --------------------------------------------- |
| `pnpm install`              | Install dependencies and Chrome for Puppeteer |
| `pnpm run setup:chrome`     | Re-install Puppeteer's Chrome if missing      |
| `pnpm run build`            | Generate PDF and HTML from `resume-export.md` |
| `pnpm run build:pdf`        | Generate PDF only                             |
| `pnpm run build:html`       | Generate HTML preview only                    |
| `pnpm run build:pdf:custom` | Alias for custom input (see below)            |

### Custom input and output

Both build scripts accept optional CLI arguments:

```bash
# Build PDF from a tailored version
node scripts/build-pdf.js tailored/acme-senior-frontend.md

# Custom output filename
node scripts/build-pdf.js resume-export.md Custom_Output.pdf

# HTML from tailored file
node scripts/build-html.js tailored/acme-senior-frontend.md acme-preview.html
```

**Naming rules:**

| Input              | Default PDF output              | Default HTML output    |
| ------------------ | ------------------------------- | ---------------------- |
| `resume-export.md` | `{RESUME_FILE_SLUG}_Resume.pdf` | `resume-preview.html`  |
| Any other `.md`    | `{basename}.pdf`                | `{basename}.html`      |
| CLI arg 3          | Overrides default name          | Overrides default name |

## Project structure

```
.
├── .cursor/skills/          # Cursor agent skills (see Credits)
├── .env.example             # Template for local .env (committed)
├── .gitignore               # Keeps personal data out of git
├── master-resume.md         # Your full resume (gitignored — create locally)
├── resume-export.md         # Export-ready resume (gitignored — create locally)
├── tailored/                # Job-specific resume variants
├── templates/
│   └── resume.css           # ATS-friendly print stylesheet
├── scripts/
│   ├── build-pdf.js         # Markdown → PDF
│   └── build-html.js        # Markdown → HTML preview
├── output/                  # Generated PDFs/HTML (gitignored)
├── package.json
└── pnpm-lock.yaml
```

## Privacy and git

Personal files are excluded from version control:

```
node_modules/
output/*.pdf
output/*.docx
output/*.html
resume-export.md
master-resume.md
.env
```

**Before your first commit**, verify nothing private is staged:

```bash
git add -A
git diff --cached
```

Do not force-add ignored files (`git add -f resume-export.md`).

> **Tip:** If you add tailored resumes under `tailored/*.md`, consider adding `tailored/*.md` to `.gitignore` so job-specific versions stay local.

## Cursor agent skills

This repo ships with agent skills under `.cursor/skills/` so Cursor can help with resume writing, ATS optimization, and job search workflows out of the box.

### Skills included

| Skill                                                                              | Description                                                        |
| ---------------------------------------------------------------------------------- | ------------------------------------------------------------------ |
| [resume-ats-optimizer](.cursor/skills/resume-ats-optimizer/SKILL.md)               | Optimize for ATS, check compatibility, analyze keyword match       |
| [resume-bullet-writer](.cursor/skills/resume-bullet-writer/SKILL.md)               | Turn weak bullets into achievement-focused statements with metrics |
| [job-description-analyzer](.cursor/skills/job-description-analyzer/SKILL.md)       | Analyze postings, match scores, gaps, application strategy         |
| [resume-tailor](.cursor/skills/resume-tailor/SKILL.md)                             | Customize resume for a job posting while staying truthful          |
| [cover-letter-generator](.cursor/skills/cover-letter-generator/SKILL.md)           | Personalized cover letters from resume + job description           |
| [linkedin-profile-optimizer](.cursor/skills/linkedin-profile-optimizer/SKILL.md)   | Sync resume with LinkedIn, improve searchability                   |
| [interview-prep-generator](.cursor/skills/interview-prep-generator/SKILL.md)       | STAR stories, practice questions, talking points                   |
| [salary-negotiation-prep](.cursor/skills/salary-negotiation-prep/SKILL.md)         | Market rates, negotiation strategy, counter-offer scripts          |
| [tech-resume-optimizer](.cursor/skills/tech-resume-optimizer/SKILL.md)             | Software engineering, PM, and technical roles                      |
| [executive-resume-writer](.cursor/skills/executive-resume-writer/SKILL.md)         | C-suite and VP resumes with leadership focus                       |
| [career-changer-translator](.cursor/skills/career-changer-translator/SKILL.md)     | Transferable skills across industries                              |
| [resume-quantifier](.cursor/skills/resume-quantifier/SKILL.md)                     | Add metrics; estimate when exact numbers are unknown               |
| [resume-formatter](.cursor/skills/resume-formatter/SKILL.md)                       | ATS-friendly formatting and scannable layouts                      |
| [portfolio-case-study-writer](.cursor/skills/portfolio-case-study-writer/SKILL.md) | Expand bullets into portfolio case studies                         |
| [academic-cv-builder](.cursor/skills/academic-cv-builder/SKILL.md)                 | Academic CVs with publications, grants, teaching                   |
| [reference-list-builder](.cursor/skills/reference-list-builder/SKILL.md)           | Professional references and prep materials                         |
| [offer-comparison-analyzer](.cursor/skills/offer-comparison-analyzer/SKILL.md)     | Compare offers with total compensation analysis                    |
| [resume-version-manager](.cursor/skills/resume-version-manager/SKILL.md)           | Master resume + tailored version tracking                          |
| [creative-portfolio-resume](.cursor/skills/creative-portfolio-resume/SKILL.md)     | Visual design balanced with ATS compatibility                      |
| [resume-section-builder](.cursor/skills/resume-section-builder/SKILL.md)           | Targeted sections by experience level and role                     |
| [cold-email-writer](.cursor/skills/cold-email-writer/SKILL.md)                     | Personalized outreach to hiring managers and founders              |
| [application-form-filler](.cursor/skills/application-form-filler/SKILL.md)         | Tailored answers for job application forms                         |

### Example prompts in Cursor

- _"Analyze this job description against my resume and suggest keyword gaps."_
- _"Tailor my resume for this senior frontend role and save it to `tailored/`."_
- _"Rewrite these three bullets with metrics and impact."_
- _"Generate a cover letter from my resume and this posting."_

Skills activate automatically when your request matches their descriptions. Open any `SKILL.md` under `.cursor/skills/` to see triggers and workflows.

### Updating skills from upstream

The skills in this repo are adapted from the open-source [**ResumeSkills**](https://github.com/Paramchoudhary/ResumeSkills) project by [Paramchoudhary](https://github.com/Paramchoudhary).

To install or update skills globally via the upstream CLI:

```bash
# Install all skills globally
npx skills add Paramchoudhary/ResumeSkills -g -y

# Install to current project only
npx skills add Paramchoudhary/ResumeSkills -y

# List installed skills
npx skills list
```

See the [ResumeSkills README](https://github.com/Paramchoudhary/ResumeSkills#installation) for manual install, uninstall, and supported agents (Cursor, Claude Code, Windsurf, Codex, Gemini CLI, and others).

## Typical workflow

1. Maintain **`master-resume.md`** with everything you've done.
2. Copy or tailor into **`resume-export.md`** (or `tailored/company-role.md`).
3. Ask Cursor to optimize bullets, match keywords, or draft a cover letter using the agent skills.
4. Run **`pnpm run build`** and review `output/resume-preview.html`.
5. Submit **`output/{RESUME_FILE_SLUG}_Resume.pdf`**.

## Troubleshooting

### `Missing RESUME_FILE_SLUG in .env`

Create `.env` from `.env.example` and set `RESUME_FILE_SLUG=Your_Name`.

### `Error: input file not found: .../resume-export.md`

Create `resume-export.md` locally (it is gitignored and not included in the clone).

### Chrome / Puppeteer errors

```bash
pnpm run setup:chrome
```

On Linux CI or Docker, you may need to uncomment sandbox flags in `scripts/build-pdf.js`:

```javascript
const CHROME_ARGS = [
  "--no-sandbox",
  "--disable-setuid-sandbox",
  "--disable-dev-shm-usage",
];
```

### PDF layout looks wrong

- Preview HTML first: `pnpm run build:html`
- Adjust `templates/resume.css` for spacing, fonts, and print margins
- Keep headers as semantic HTML (`h1`, `h2`, lists) for ATS parsers

## Tech stack

| Tool                                                    | Role                              |
| ------------------------------------------------------- | --------------------------------- |
| [Markdown](https://commonmark.org/)                     | Resume source format              |
| [md-to-pdf](https://github.com/simonhaenisch/md-to-pdf) | Markdown → PDF/HTML conversion    |
| [Puppeteer](https://pptr.dev/)                          | Headless Chrome for PDF rendering |
| [dotenv](https://github.com/motdotla/dotenv)            | Local env config for PDF naming   |
| [pnpm](https://pnpm.io/)                                | Package manager                   |

## Credits

- **Agent skills** — Based on [Paramchoudhary/ResumeSkills](https://github.com/Paramchoudhary/ResumeSkills), a collection of AI agent skills for resume optimization, job applications, and career development. Licensed under MIT. Give the upstream repo a star if you find these skills useful.
- **PDF pipeline** — Built with [md-to-pdf](https://github.com/simonhaenisch/md-to-pdf) and [Puppeteer](https://pptr.dev/).

## License

This project's build tooling and templates are provided as-is for personal and open-source use. Agent skills inherit the [MIT license](https://github.com/Paramchoudhary/ResumeSkills/blob/main/LICENSE) from [ResumeSkills](https://github.com/Paramchoudhary/ResumeSkills). Add your own license file if you publish a fork.
