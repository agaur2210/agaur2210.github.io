# agaur2210.github.io

Personal profile page served at **https://apps.agaur.dev/**

## File structure

| File | Purpose |
|---|---|
| `index.html` | Page structure and all content (experience, skills, certs, education) |
| `translations.js` | English and Spanish translation strings + `setLang()` function |
| `app.js` | Page initialisation (years calculation, language default, dropdown close) |
| `style.css` | Print / `@media print` styles |

## Deploying

Push to `main` — GitHub Pages serves the site automatically within ~60 seconds.

```bash
git add .
git commit -m "your message"
git push origin main
```

---

## How to edit

### Update the About summary

Edit the `about_text` key in **both** the `en` and `es` blocks inside `translations.js`. Use `{years}` as the placeholder for the dynamically calculated years of experience.

### Add or edit an experience entry

Open `index.html` and find the relevant company block (search for the company name). Each entry follows this pattern:

```html
<div class="py-3 border-b border-slate-100">
  <p class="... uppercase ...">COMPANY NAME</p>          <!-- company label -->

  <div class="pl-3 border-l-2 border-blue-200 mb-3">    <!-- role sub-entry -->
    <div class="flex ...">
      <h3 ... data-i18n="job_KEY">Role Title</h3>
      <span ...>Start – End</span>
    </div>
    <p ... data-i18n="loc_KEY">Location</p>
    <ul ... data-i18n-html="BULLETS_KEY">
      <li>Bullet one.</li>
    </ul>
  </div>
</div>
```

Then add the matching Spanish translation keys in `translations.js` under both `en` and `es`.

### Add a new skill tag

Find the right category block in `index.html` (e.g. `data-i18n="skill_cloud"`) and add a `<span>`:

```html
<span class="bg-slate-100 text-slate-700 border border-slate-200 rounded-md px-2 py-0.5 text-[0.65rem] font-medium">New Skill</span>
```

Skill tag text is not translated (technology names stay in English).

### Add a certification

Find the certifications grid in `index.html` and copy an existing tile block, updating the name, issuer, date, credential ID, and verification URL:

```html
<div class="flex gap-2.5 items-start p-3 bg-slate-50 rounded-lg">
  <div class="w-8 h-8 rounded bg-slate-200 ... flex items-center justify-center ...">XX</div>
  <div class="min-w-0">
    <p class="text-xs font-semibold ...">Cert Name</p>
    <p class="text-[0.68rem] text-slate-400 ...">Issuer · Mon YYYY</p>
    <p class="text-[0.62rem] text-slate-300">ID: xxxxxxxx</p>
    <a href="https://verify.skilljar.com/c/xxxxxxxx" ... data-i18n="show_credential">Show credential ↗</a>
  </div>
</div>
```

### Add or update a translation string

Open `translations.js`. Add the key to **both** `en` and `es` objects:

```js
// in en:
my_new_key: 'English text',

// in es:
my_new_key: 'Texto en español',
```

Then add `data-i18n="my_new_key"` (plain text) or `data-i18n-html="my_new_key"` (HTML content) to the element in `index.html`.

### Change contact details

Search `index.html` for `gamit@outlook.com`, `linkedin.com/in/amit2210`, or `github.com/agaur2210` and update in place. The footer and header both reference the email.

### Dynamic years of experience

Calculated automatically as `currentYear - 2012` in `app.js`. No manual update needed.
