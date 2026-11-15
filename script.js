
/* =====================================
   S&B APPLIANCES — WEBSITE FUNCTIONS
===================================== */

// MOBILE NAVIGATION

const menuToggle = document.getElementById("menuToggle");
const mainNav = document.getElementById("mainNav");

if (menuToggle && mainNav) {

  menuToggle.addEventListener("click", () => {

    const isOpen = mainNav.classList.toggle("open");

    menuToggle.setAttribute("aria-expanded", String(isOpen));
    menuToggle.setAttribute(
      "aria-label",
      isOpen ? "Close navigation" : "Open navigation"
    );

    menuToggle.textContent = isOpen ? "×" : "☰";

  });

  mainNav.querySelectorAll("a").forEach(link => {

    link.addEventListener("click", () => {

      mainNav.classList.remove("open");

      menuToggle.setAttribute("aria-expanded", "false");
      menuToggle.setAttribute("aria-label", "Open navigation");

      menuToggle.textContent = "☰";

    });

  });

  document.addEventListener("click", event => {

    if (
      !mainNav.contains(event.target) &&
      !menuToggle.contains(event.target)
    ) {

      mainNav.classList.remove("open");

      menuToggle.setAttribute("aria-expanded", "false");
      menuToggle.setAttribute("aria-label", "Open navigation");

      menuToggle.textContent = "☰";

    }

  });

}


// PHOTO UPLOAD DISPLAY

const photoInput = document.getElementById("photos");
const fileNames = document.getElementById("fileNames");

const MAX_UPLOAD_SIZE = 10 * 1024 * 1024;

if (photoInput && fileNames) {

  photoInput.addEventListener("change", () => {

    const files = Array.from(photoInput.files || []);

    if (!files.length) {

      fileNames.textContent = "No photos selected yet.";
      fileNames.style.color = "#43ff00";

      return;

    }

    const totalBytes = files.reduce(
      (sum, file) => sum + file.size, 0
    );

    const totalMB = (totalBytes / (1024 * 1024)).toFixed(2);

    fileNames.textContent =
      `${files.length} photo(s) selected: ` +
      `${files.map(file => file.name).join(", ")} ` +
      `— ${totalMB} MB total`;

    if (totalBytes > MAX_UPLOAD_SIZE) {

      fileNames.textContent +=
        " — TOO LARGE! Please choose smaller photos (10 MB maximum).";

      fileNames.style.color = "#ff5555";

    } else {

      fileNames.style.color = "#43ff00";

    }

  });

}


// PREVENT OVERSIZED FORM SUBMISSIONS

const enquiryForm = document.querySelector(".enquiry-form");

if (enquiryForm && photoInput) {

  enquiryForm.addEventListener("submit", event => {

    const files = Array.from(photoInput.files || []);

    const totalBytes = files.reduce(
      (sum, file) => sum + file.size, 0
    );

    if (files.length && totalBytes > MAX_UPLOAD_SIZE) {

      event.preventDefault();

      fileNames.textContent =
        "Your photos exceed 10 MB. Please select smaller photos.";

      fileNames.style.color = "#ff5555";

      photoInput.scrollIntoView({
        behavior: "smooth",
        block: "center"
      });

    }

  });

}


// AUTOMATIC COPYRIGHT YEAR

const year = document.getElementById("year");

if (year) {
  year.textContent = new Date().getFullYear();
}

