# S&B Appliances website starter

This is the first front-end version of the S&B Appliances website, styled to match the supplied black/neon-green branding.

## Files
- `index.html` — public homepage, categories, enquiry form and stock placeholder
- `styles.css` — responsive black/neon-green styling
- `script.js` — mobile menu and enquiry-form starter behavior
- `assets/` — supplied S&B logo and buying flyer, included unchanged

## Preview locally
Open `index.html` in a browser.

## Publish with GitHub Pages
1. Create a public GitHub repository named `sb-appliances`.
2. Upload the contents of this folder (not the outer folder itself) to the repository root.
3. In GitHub, open **Settings → Pages**.
4. Under **Build and deployment**, choose **Deploy from a branch**.
5. Select branch `main` and folder `/ (root)`, then Save.
6. GitHub will show the published website address on the Pages settings screen.

## Before public launch
- Add the business phone number, email address, service area and WhatsApp link.
- Replace the placeholder email in `script.js` with the confirmed business email.
- Connect Supabase for secure admin login, product catalogue, image uploads and stored enquiries. The current stock area is a placeholder; it is not yet connected to a database.
- Do not collect customer details publicly until the live enquiry endpoint and privacy information are configured.
