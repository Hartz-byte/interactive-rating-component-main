const mainContainer = document.querySelector("#main-container")
const thanksContainer = document.querySelector(".thanks-container")
const submitBtn = document.getElementById("btn")

const rating = document.getElementById("rate")
const rates = document.querySelectorAll(".number")

submitBtn.addEventListener("click", () => {
    thanksContainer.classList.remove("hidden")
    mainContainer.style.display = "none"
})

rates.forEach((rate) => {
    rate.addEventListener("click", () => {
        rating.innerHTML = rate.innerHTML
    })
})