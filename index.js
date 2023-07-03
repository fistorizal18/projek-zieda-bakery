document.addEventListener("DOMContentLoaded", function () {
    const navbar = document.querySelector(".navbar");

    // Fungsi untuk menutup toggle list menu
    function closeToggle() {
      const toggle = document.querySelector(".navbar-toggler");
      const menu = document.querySelector(".navbar-collapse");

      if (toggle.getAttribute("aria-expanded") === "true") {
        toggle.click();
      }

      menu.classList.remove("show");
    }

    // Mendeteksi klik di luar elemen toggle dan menutupnya
    document.addEventListener("click", function (event) {
      const target = event.target;

      if (!target.closest(".navbar") && !target.closest(".navbar-toggler")) {
        closeToggle();
      }
    });
  });