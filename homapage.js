//instructions
const instructionsModal = document.querySelector("#instructions_modal");
const openInstructionsModal = document.querySelector("#instructions_btn");
const closeInstructions = document.querySelector("#instructions_close");

openInstructionsModal.addEventListener("click", () => {
  instructionsModal.showModal();
});

closeInstructions.addEventListener("click", () => {
  instructionsModal.close();
});

//credits
const creditsModal = document.querySelector("#credits_modal");
const openCreditsModal = document.querySelector("#credits_btn");
const closeCreditsModal = document.querySelector("#credits_close");

openCreditsModal.addEventListener("click", () => {
  creditsModal.showModal();
});

closeCreditsModal.addEventListener("click", () => {
  creditsModal.close();
});
