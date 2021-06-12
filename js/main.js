// Xử lý show more của New
const showMoreNew = document.querySelector(".showMoreNew");
const hiddenPictureNew = document.querySelectorAll(".hidden-picture-new");

showMoreNew.addEventListener("click", (e) => {
  showMoreNew.classList.add("d-none");
  for (var i = 0; i < hiddenPictureNew.length; ++i) {
    hiddenPictureNew[i].classList.remove("d-none");
  }
});

// Xử lý show more của Popular
const showMorePopular = document.querySelector(".showMore-popular");
const hiddenPicturePopular = document.querySelectorAll(
  ".hidden-picture-popular"
);

showMorePopular.addEventListener("click", (e) => {
  showMorePopular.classList.add("d-none");
  for (var i = 0; i < hiddenPicturePopular.length; ++i) {
    hiddenPicturePopular[i].classList.remove("d-none");
  }
});

// Xử lý show more của Videos
const showMoreVideos = document.querySelector(".showMore-videos");
const hiddenPictureVideos = document.querySelectorAll(".hidden-picture-videos");

showMoreVideos.addEventListener("click", (e) => {
  showMoreVideos.classList.add("d-none");
  for (var i = 0; i < hiddenPictureVideos.length; ++i) {
    hiddenPictureVideos[i].classList.remove("d-none");
  }
});

//Xử lý ấn nút top thì sẽ scroll top
const topBtn = document.querySelector(".top");
topBtn.addEventListener("click", (e) => {
  window.scrollTo({ top: 0 });
});

// Sử dungj thư viện AOS
AOS.init({ duration: 2000 });
// Close btn
document.getElementById("btnClose").onclick = function () {
  document.getElementById("showVehicle").style.display = "none";
  document.getElementById("Hide").style.display = "block";
};
document.getElementById("clickVehicle").onclick = function () {
  document.getElementById("showVehicle").style.display = "block";
  document.getElementById("Hide").style.display = "none";
};
