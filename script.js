// S&B Appliances mobile navigation and enquiry form helpers
const menuToggle = document.getElementById("menuToggle");
const mainNav = document.getElementById("mainNav");

if (menuToggle && mainNav) {
  menuToggle.addEventListener("click", () => {
    const isOpen = mainNav.classList.toggle("open");
    menuToggle.setAttribute("aria-expanded", String(isOpen));
    menuToggle.textContent = isOpen ? "×" : "☰";
  });

  mainNav.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => {
      mainNav.classList.remove("open");
      menuToggle.setAttribute("aria-expanded", "false");
      menuToggle.textContent = "☰";
    });
  });
}

// Show selected photo filenames before the customer submits the form.
const photoInput = document.getElementById("photos");
const fileNames = document.getElementById("fileNames");

if (photoInput && fileNames) {
  photoInput.addEventListener("change", () => {
    const files = Array.from(photoInput.files || []);
    if (!files.length) {
      fileNames.textContent = "No photos selected yet.";
      return;
    }

    const totalBytes = files.reduce((sum, file) => sum + file.size, 0);
    const totalMB = (totalBytes / (1024 * 1024)).toFixed(1);
    fileNames.textContent = `${files.length} photo(s) selected: ${files.map(file => file.name).join(", ")} — ${totalMB} MB total`;

    if (totalBytes > 10 * 1024 * 1024) {
      fileNames.textContent += " — Please choose fewer/smaller photos (10 MB maximum recommended).";
      fileNames.style.color = "#ff8c8c";
    } else {
      fileNames.style.color = "#43ff00";
    }
  });
}

const year = document.getElementById("year");
if (year) year.textContent = new Date().getFullYear();
