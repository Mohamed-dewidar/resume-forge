<!--
  Resume structure template — dummy data for PDF/HTML styling.
  Build preview: pnpm run build:html -- templates/resume-structure-template.md
  Build PDF:     pnpm run build:pdf -- templates/resume-structure-template.md
-->

<!-- ═══════════════════════════════════════════════════════════════
     HEADER — must be HTML (not plain markdown)
     Classes: resume-header, role-title, contact-row, contact-link
     Icons (SVG) are optional; links can be text-only.
     ═══════════════════════════════════════════════════════════════ -->
<div class="resume-header">
  <h1>Lorem Ipsum</h1>
  <p class="role-title">Dolor Sit Amet Specialist</p>
  <p class="contact-row">
    <a href="mailto:lorem.ipsum@example.com" class="contact-link">
      <svg class="contact-icon" viewBox="0 0 24 24" aria-hidden="true"><path fill="currentColor" d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4-8 5-8-5V6l8 5 8-5v2z"/></svg>
      lorem.ipsum@example.com
    </a>
    <a href="tel:+15551234567" class="contact-link">
      <svg class="contact-icon" viewBox="0 0 24 24" aria-hidden="true"><path fill="currentColor" d="M1.5 4.5a3 3 0 013-3h1.372c.86 0 1.61.586 1.819 1.42l1.105 4.423a1.875 1.875 0 01-.694 1.954l-1.293.97c-.135.101-.164.249-.123.352a11.285 11.285 0 006.697 6.697c.103.041.25.012.352-.123l.97-1.293a1.875 1.875 0 011.954-.694l4.423 1.105c.834.209 1.42.959 1.42 1.82V19.5a3 3 0 01-3 3h-2.25C8.552 22.5 1.5 15.448 1.5 6.75V4.5z"/></svg>
      +1 555 123 4567
    </a>
    <a href="#" class="contact-link">
      <svg class="contact-icon" viewBox="0 0 24 24" aria-hidden="true"><path fill="currentColor" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"/></svg>
      github.com/lorem-ipsum
    </a>
    <a href="#" class="contact-link">
      <svg class="contact-icon" viewBox="0 0 24 24" aria-hidden="true"><path fill="currentColor" d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 114.126 0 2.063 2.063 0 01-2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
      linkedin.com/in/lorem-ipsum
    </a>
    <span class="contact-link">
      <svg class="contact-icon" viewBox="0 0 24 24" aria-hidden="true"><path fill="currentColor" d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5a2.5 2.5 0 110-5 2.5 2.5 0 010 5z"/></svg>
      Consectetur, Adipiscing
    </span>
  </p>
</div>

<!-- ═══════════════════════════════════════════════════════════════
     PROFESSIONAL SUMMARY — plain markdown paragraph
     Use **bold** for keywords/metrics (renders as font-weight: 600)
     ═══════════════════════════════════════════════════════════════ -->

## Professional Summary

Lorem ipsum dolor sit amet, **consectetur adipiscing elit**, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. **Duis aute irure dolor** in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. **Sed ut perspiciatis** unde omnis iste natus error sit voluptatem accusantium doloremque laudantium.

<!-- ═══════════════════════════════════════════════════════════════
     SKILLS — HTML <ul class="skills-list">
     Pattern: <strong>Category:</strong> comma-separated items
     Use &amp; for & in HTML attributes/text
     ═══════════════════════════════════════════════════════════════ -->

## Skills

<ul class="skills-list">
  <li><strong>Design:</strong> Figma, Adobe Illustrator, typography, color theory, wireframing</li>
  <li><strong>Marketing:</strong> SEO, Google Analytics, content strategy, A/B testing, email campaigns</li>
  <li><strong>Finance:</strong> Excel modeling, budgeting, forecasting, QuickBooks, variance analysis</li>
  <li><strong>Healthcare:</strong> HIPAA compliance, EHR systems, patient intake, medical coding (ICD-10)</li>
  <li><strong>Operations:</strong> supply chain, inventory management, Lean Six Sigma, vendor negotiation</li>
</ul>

<!-- ═══════════════════════════════════════════════════════════════
     PROFESSIONAL EXPERIENCE — repeat <div class="entry"> per job
     entry-title: <strong>Company</strong>, Job Title (Type)
     entry-meta:  dates | location  (right-aligned)
     exp-list: achievement bullets (NOT markdown -)
     ═══════════════════════════════════════════════════════════════ -->

## Professional Experience

<div class="entry">
  <div class="entry-header">
    <span class="entry-title"><strong>Vestibulum Ltd</strong>, Magna Coordinator (Full-time)</span>
    <span class="entry-meta">03/2021 – Present | Dolor, Sit</span>
  </div>
  <ul class="exp-list">
    <li>Lorem ipsum dolor sit amet, <strong>consectetur adipiscing</strong> elit, sed do eiusmod tempor incididunt ut labore.</li>
    <li>Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut <strong>aliquip ex ea</strong> commodo consequat.</li>
    <li>Duis aute irure dolor in reprehenderit in voluptate velit esse <strong>cillum dolore</strong> eu fugiat nulla pariatur.</li>
  </ul>
</div>

<div class="entry">
  <div class="entry-header">
    <span class="entry-title"><strong>Curabitur Industries</strong>, Amet Analyst (Part-time)</span>
    <span class="entry-meta">09/2018 – 02/2021 | Amet, Elit</span>
  </div>
  <ul class="exp-list">
    <li>Excepteur sint occaecat cupidatat non proident, sunt in culpa qui <strong>officia deserunt</strong> mollit anim id est laborum.</li>
    <li>Sed ut perspiciatis unde omnis iste natus error sit <strong>voluptatem accusantium</strong> doloremque laudantium.</li>
  </ul>
</div>

<div class="entry">
  <div class="entry-header">
    <span class="entry-title"><strong>Nulla Consulting</strong>, Tempor Associate (Contract)</span>
    <span class="entry-meta">01/2016 – 08/2018 | Remote</span>
  </div>
  <ul class="exp-list">
    <li>Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut <strong>fugit sed quia</strong> consequuntur magni dolores.</li>
    <li>Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, <strong>consectetur adipisci</strong> velit.</li>
  </ul>
</div>

<!-- ═══════════════════════════════════════════════════════════════
     CERTIFICATIONS — <p class="cert-block">
     Title on first line (<strong>), description after <br>
     ═══════════════════════════════════════════════════════════════ -->

## Certifications

<p class="cert-block"><strong>Certified Lorem Professional</strong><br>Demonstrated proficiency in <strong>ipsum dolor, sit amet,</strong> and consectetur adipiscing across multi-team initiatives.</p>

<p class="cert-block"><strong>Adipiscing Elit Associate</strong><br>Completed advanced coursework in <strong>tempor incididunt</strong> and ut labore et dolore magna aliqua.</p>

<p class="cert-block"><strong>Magna Aliqua Practitioner</strong><br>Validated skills in <strong>veniam quis nostrud</strong> exercitation and ullamco laboris nisi ut aliquip.</p>

<!-- ═══════════════════════════════════════════════════════════════
     EDUCATION — <div class="entry"> per school
     Option A: bullets with exp-list compact (tighter spacing)
     Option B: plain text with edu-detail (no bullets)
     ═══════════════════════════════════════════════════════════════ -->

## Education

<div class="entry">
  <div class="entry-header">
    <span class="entry-title"><strong>Universitas Lorem</strong>, Master of Ipsum Studies</span>
    <span class="entry-meta">11/2019 | Dolor, Sit</span>
  </div>
  <ul class="exp-list compact">
    <li>Dissertation on <strong>consectetur adipiscing</strong> and sed do eiusmod tempor incididunt</li>
    <li>Relevant coursework: Lorem Ipsum, Dolor Sit, Amet Consectetur, Elit Magna</li>
  </ul>
</div>

<div class="entry">
  <div class="entry-header">
    <span class="entry-title"><strong>College of Adipiscing</strong>, Bachelor of Tempor Arts</span>
    <span class="entry-meta">06/2017 | Amet, Elit</span>
  </div>
  <p class="edu-detail">Relevant Courses: Ut Labore, Dolore Magna, Veniam Quis, Nostrud Exercitation. Honors: <strong>summa cum laude</strong></p>
</div>

<!-- ═══════════════════════════════════════════════════════════════
     PROJECTS — same entry block as experience
     Optional: entry-link with SVG icon inside entry-title
     Use exp-list compact for shorter project bullets
     ═══════════════════════════════════════════════════════════════ -->

## Projects

<div class="entry">
  <div class="entry-header">
    <span class="entry-title"><strong>Project Consectetur</strong> — Voluptatem accusantium platform (Lorem, Ipsum)<a href="#" class="entry-link" aria-label="Project Consectetur link"><svg class="entry-link-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"/><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"/></svg></a></span>
  </div>
  <ul class="exp-list compact">
    <li>Quis autem vel eum iure reprehenderit qui in ea <strong>voluptate velit</strong> esse quam nihil molestiae consequatur.</li>
    <li>At vero eos et accusamus et iusto odio dignissimos ducimus qui <strong>blanditiis praesentium</strong> voluptatum deleniti.</li>
  </ul>
</div>

<div class="entry">
  <div class="entry-header">
    <span class="entry-title"><strong>Project Dolorem</strong> — Nemo enim ipsam toolkit (Dolor, Sit)</span>
  </div>
  <ul class="exp-list compact">
    <li>Et harum quidem rerum facilis est et expedita distinctio nam <strong>libero tempore</strong> cum soluta nobis est eligendi.</li>
    <li>Temporibus autem quibusdam et aut officiis debitis aut rerum <strong>necessitatibus saepe</strong> eveniet ut et voluptates.</li>
  </ul>
</div>

<div class="entry">
  <div class="entry-header">
    <span class="entry-title"><strong>Project Mollit</strong> — Anim id est laborum archive</span>
  </div>
  <ul class="exp-list compact">
    <li>Itaque earum rerum hic tenetur a sapiente delectus, ut aut <strong>reiciendis voluptatibus</strong> maiores alias consequatur.</li>
  </ul>
</div>
