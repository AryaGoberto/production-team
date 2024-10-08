const carouselContainer = document.querySelector(".carousel-container");
const indicators = document.querySelectorAll(".indicator");

carouselContainer.addEventListener("scroll", () => {
  const index = Math.round(
    carouselContainer.scrollLeft / carouselContainer.clientWidth
  );

  indicators.forEach((indicator, i) => {
    if (i === index) {
      indicator.classList.add("bg-blue-500");
      indicator.classList.remove("bg-gray-400");
    } else {
      indicator.classList.remove("bg-blue-500");
      indicator.classList.add("bg-gray-400");
    }
  });
});

const toggleArrows = document.querySelectorAll(".toggleArrow");
const companyDetails = document.querySelectorAll(".companyDetails");

// Loop melalui setiap elemen toggleArrow dan tambahkan event listener
toggleArrows.forEach((arrow, index) => {
  arrow.addEventListener("click", function () {
    // Toggle class 'hidden' untuk elemen companyDetails yang sesuai
    companyDetails[index].classList.toggle("hidden");

    // Ganti gambar arrow berdasarkan kondisi
    const img = arrow.querySelector("img");
    if (companyDetails[index].classList.contains("hidden")) {
      img.src = "./img/down.svg"; // Kembali ke gambar arrow bawah
    } else {
      img.src = "./img/up.svg"; // Ganti ke gambar arrow atas
    }
  });
});

AOS.init();
