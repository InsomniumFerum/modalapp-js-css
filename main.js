let modalBtn = document.querySelector(".modal-btn");
let modalOverlay = document.querySelector(".modal-overlay");
let closeBtn = document.querySelector(".close-btn");

modalBtn.addEventListener("click", function () {
  modalOverlay.classList.add("open-modal");
});

closeBtn.addEventListener("click", function () {
   modalOverlay.classList.remove("open-modal");
}); 
