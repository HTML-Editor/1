# Editing guide - "I want to change X, which file?"

Every source file now has comments explaining each section. Look for **EDIT HERE** and **NOTE** in the comments.
Live site: https://html-editor.github.io/1/ (updates ~2 minutes after you commit to `main`; watch the **Actions** tab).

You can edit directly on GitHub: open a file -> pencil icon -> change -> **Commit changes**.

| I want to change... | File (all under `frontend/`) |
|---|---|
| **Any website text, in English or Hindi** | `src/i18n/translations.js` (find the line, edit the English and Hindi text) |
| Hindi version of a product's description / usage / features | `src/i18n/translations.js` -> `dataHi` list (English text on the left must match `data.js` exactly) |
| Browser tab title | `index.html` (`<title>`) |
| Company name / menu items | `src/components/Navbar.jsx` |
| Address, phone, email, social links, copyright year | `src/components/Footer.jsx` (phone/address also in `Home.jsx`, `ProductDetail.jsx`, `Contact.jsx`) |
| Home page text, buttons, featured products, customer logos, map | `src/pages/Home.jsx` |
| About page text, channel-partner logos | `src/pages/About.jsx` |
| **Add / edit / remove a product** | `src/data/data.js` (see the how-to at the top of that file) |
| Product page layout, WhatsApp message | `src/pages/ProductDetail.jsx` |
| Products page banner, search, filters | `src/pages/Products.jsx` |
| Award photos | `src/pages/Achievements.jsx` |
| Contact form, receiving email, contact details | `src/pages/Contact.jsx` |
| Brand colours, animations | `tailwind.config.js` |
| Font | `src/index.css` |
| Add a new page / change URLs | `src/App.jsx` |
| Images | `src/assets/` (replace a file with the same name, or add a new one and import it) |
| Repo name changed | `vite.config.js` (`base`) and then it is `https://<owner>.github.io/<repo>/` |

## Hindi / English language switch
- A button in the top bar (shows `हिन्दी` or `English`) switches the whole site. The choice is remembered in the visitor's browser.
- All page text is in `src/i18n/translations.js`; pages use `t("key")`. If you add new text to a page, add the same key in both the `en` and `hi` blocks.
- Product **names** (Enklo 46, HP Racer...), phone numbers, e-mail and social handles are intentionally not translated.
- When you add a product in `data.js`, add Hindi for its texts in `dataHi` (otherwise that product shows English text in Hindi mode).
- The Hindi font (Noto Sans Devanagari) is loaded in `src/index.css`.

## Known issues spotted (not changed - tell me if you want them fixed)
- `Contact.jsx`: phone link `tel:+9827003016` and WhatsApp link `wa.me/9827003016` lack the `91` country code.
- `Contact.jsx`: first form submission needs the owner to click an activation email from formsubmit.co.
- `ProductCard.jsx`: stray text `[cite: 5]` (file is unused, so not visible today).
- `data.js`: first product has two `category` lines; categories "Hyaduralic oils" / "Gear and Transmisson oils" are misspelled and create separate filter buttons.
- `About.jsx`: class typo `text-lgfont-medium`.
- `ProductDetail.jsx`: `useEffect` is after an early `return` (works, but not recommended).
- Root `package.json` is not valid JSON and `backend/server/server.js` is missing; neither affects the website.
- `frontend/package.json` still has `homepage` / `gh-pages` leftovers from another project (harmless).
- `Navbar.jsx`: between 768px and 1023px wide (tablets) neither the desktop menu nor the hamburger menu is shown (`md:hidden` vs `lg:flex`), so tablets have no navigation or language button. Changing the three `md:hidden` in the mobile parts to `lg:hidden` fixes it.
