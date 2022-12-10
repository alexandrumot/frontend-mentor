const ratingState = document.querySelector(".rating-state");
const thankYouState = document.querySelector(".thank-you-state");
const form = document.querySelector(".rating-form");
const submitBtn = document.querySelector(".submit");

document.addEventListener("keypress", (e) => {
  const ratingKeys = ["1", "2", "3", "4", "5"];
  if (ratingKeys.includes(e.key)) {
    document.getElementById(`choice${e.key}`).checked = true;
  }
})
document.addEventListener("keypress", (e) => {
  console.log(e.key)
  if (e.key == "Enter") {
    submitBtn.click();
  }
})

form.addEventListener("submit", function(e) {
  e.preventDefault();
  const ratingChoice = document.querySelector('input[name="rating-choices"]:checked');
  
  if (ratingChoice) {
    const ratingSelected = document.querySelector(".rating-selected");
    ratingSelected.textContent = `You selected ${ratingChoice.value} out of 5`;
    ratingState.classList.add("hidden");
    thankYouState.classList.remove("hidden");
  }
})
