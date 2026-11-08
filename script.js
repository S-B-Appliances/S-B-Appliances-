const menuButton = document.querySelector('.menu-toggle');
const nav = document.querySelector('.nav');
menuButton?.addEventListener('click', () => {
  const open = nav.classList.toggle('open');
  menuButton.setAttribute('aria-expanded', String(open));
});
nav?.querySelectorAll('a').forEach(link => link.addEventListener('click', () => {
  nav.classList.remove('open');
  menuButton?.setAttribute('aria-expanded', 'false');
}));
document.getElementById('year').textContent = new Date().getFullYear();

document.getElementById('enquiry-form')?.addEventListener('submit', event => {
  event.preventDefault();
  const data = new FormData(event.currentTarget);
  const subject = encodeURIComponent('S&B Appliances - new selling enquiry');
  const body = encodeURIComponent(
    `Name: ${data.get('name')}\nContact: ${data.get('contact')}\nCategory: ${data.get('category')}\nDetails: ${data.get('details')}\nAsking price: ${data.get('price') || 'Not specified'}`
  );
  // Replace this placeholder with the confirmed business email before launch.
  const businessEmail = '';
  const status = document.getElementById('form-status');
  if (!businessEmail) {
    status.textContent = 'The enquiry form is designed. Add the business email address in script.js to enable sending.';
    return;
  }
  window.location.href = `mailto:${businessEmail}?subject=${subject}&body=${body}`;
});
