# portfolio

A single-page static portfolio site (HTML, CSS and a little JavaScript) with sections for about, projects, certifications, skills, tools, resume download and contact.

## Context

I built this in December 2024 and January 2025, while I was focused on cybersecurity coursework and job searching in that field. The content reflects that period and has not been updated since.

## Stack

- Plain HTML (`index.html`), CSS (`styles.css`) and JavaScript (`script.js`), no build step
- Font Awesome 5.15.4 from cdnjs and Google Fonts
- Images in `logos/` and `background/`; resume PDF in `documents/`
- GitHub CodeQL workflow (`.github/workflows/codeql.yml`) for JavaScript

## Running it

Open `index.html` in a browser, or serve the directory:

```bash
python3 -m http.server 8080
```

## Status

Static and unmaintained since January 2025. The contact form does not send messages.

## Known gaps

- `script.js` posts the contact form to `/api/contact`, which does not exist on a static host. It also reads a `meta[name="csrf-token"]` tag that `index.html` does not define, and calls `showError`, `showSuccess` and `resetForm`, which are never declared, so submitting throws in the browser. A leftover `alert("JavaScript is running!")` debug line runs before that.
- `index.html` links `project1.html` from the first project card, but that file is not in the repo.
- The AWS logo is referenced as `logos/AWS-logo.png`, but the file is `logos/aws-logo.png`; it will 404 on case-sensitive hosts such as GitHub Pages.
- Markup: a stray `</section>` after the tools section, and the contact section is missing a closing `</div>`.
- Nine images in `logos/` are not used by the page (aws, elk-stack, greynoise, hashcat, osquery, shodan, tshark, volatility3, zaproxy; the AWS one only because of the case mismatch above).
- `<meta http-equiv="X-UA-Compatible">` and `.hintrc` are leftovers with no effect on modern browsers.

## What I'd do next

- Update the content to match where my work is now, and replace or remove the resume PDF.
- Either remove the contact form or point it at a form service; drop the debug `alert`.
- Fix the broken project link and the logo filename, and validate the HTML.
