const btn = document.querySelector("#openModalButton");
const goBtn = document.querySelector(".goBtn");
const modalContent = document.getElementById("modalContent");
const modal = document.querySelector("#modalMain");

// For the mainQuiz page and the continueButton

const continueButton = document.querySelector(".continueButton");

const openModal = () => {
  modal.style.display = "flex";
};

const closeModal = () => {
  modal.style.display = "none";
};

modalContent.addEventListener("click", (e) => {
  e.stopPropagation();
});

// For the Continue Page

const continueBtn = () => {
  window.location.href = "mainQuizPage.html";
};

continueButton.addEventListener("click", continueBtn);

const handleModal = () => {
  if (modal.classList.contains("hidden")) {
    modal.classList.remove("hidden");
  } else {
    modal.classList.add("hidden");
  }

  modal.classList.toggle("modal");
};

goBtn.addEventListener("click", handleModal);
btn.addEventListener("click", handleModal);

//
//
//
//
