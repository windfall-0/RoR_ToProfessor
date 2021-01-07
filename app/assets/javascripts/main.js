const form = document.querySelector(".content-form")
const inputPW = form.querySelector("#content-pw")
const howToUse = document.querySelector("#how-to-use")
const content = document.querySelector("#js-content")
const exit = howToUse.querySelector(".js-exit")
function handleOpen() {
    howToUse.classList.remove("hide")
}
function handleExit() {
    howToUse.classList.add("hide")
}
function handleHowTo() {
    content.addEventListener("click",handleOpen)
    exit.addEventListener("click",handleExit)
}
function init() {
    handleHowTo()
}
init()