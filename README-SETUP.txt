# S&B Appliances website

## Files
- `index.html` — website structure and enquiry form
- `styles.css` — black/neon-green styling
- `script.js` — mobile menu and photo filename preview

## Image filenames
The HTML currently expects these images in the **repository root** (same level as `index.html`):
- `sb-logo.jpeg`
- `sb-buying-flyer.jpeg`
- `bike-for-sale-1.jpeg` (optional stock image)

This is deliberate because the logo and flyer were uploaded to the repository root, not the `assets` folder. The bike image has a designed fallback if it has not been uploaded yet.

## Enquiry email
The form is configured to send to `Charliecampbell2018@icloud.com` using FormSubmit and includes image attachments. On the first real submission, FormSubmit may send a confirmation email to the recipient address. The recipient must confirm/activate the form before enquiries can be delivered.

The form uses `multipart/form-data` for photo attachments. Keep the combined photo size under 10 MB. Test with a small image first. FormSubmit is a third-party service; its own delivery, attachment limits and spam checks apply.

## After submission
FormSubmit displays its own confirmation page after a successful submission. A custom thank-you page can be added later if wanted.

## GitHub Pages
In the repository, open Settings → Pages and set the deployment source to Deploy from a branch, branch `main`, folder `/ (root)`. Save. Allow a few minutes for deployment.
