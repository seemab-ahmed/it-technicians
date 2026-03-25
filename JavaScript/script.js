// *** NavBar Menu ***
const menuBtn = document.getElementById("menuBtn");
const mobileMenu = document.getElementById("mobileMenu");
const closeMenu = document.getElementById("closeMenu");

menuBtn.addEventListener("click", () => {
  mobileMenu.classList.remove("hidden");
  mobileMenu.classList.add("flex");
});

closeMenu.addEventListener("click", () => {
  mobileMenu.classList.add("hidden");
  mobileMenu.classList.remove("flex");
});

mobileMenu.addEventListener("click", (e) => {
  if (e.target === mobileMenu) {
    mobileMenu.classList.add("hidden");
    mobileMenu.classList.remove("flex");
  }
});

//****  Form submit ***

const dropArea = document.getElementById("dropArea");
const fileInput = document.getElementById("fileUpload");
const uploadText = document.getElementById("uploadText");

dropArea.addEventListener("click", () => fileInput.click());

fileInput.addEventListener("change", () => {
  if (fileInput.files.length > 0) {
    uploadText.innerHTML = "File Attached: " + fileInput.files[0].name + " ✅";
  }
});

dropArea.addEventListener("dragover", (e) => {
  e.preventDefault();
  dropArea.classList.add("border-blue-500");
});

dropArea.addEventListener("dragleave", () => {
  dropArea.classList.remove("border-blue-500");
});

dropArea.addEventListener("drop", (e) => {
  e.preventDefault();
  fileInput.files = e.dataTransfer.files;
  uploadText.innerHTML =
    "File Attached: " + e.dataTransfer.files[0].name + " ✅";
});
