var form = document.querySelector(".content-form")
var inputPW = form.querySelector("#content-pw")
var howToUse = document.querySelector("#how-to-use")
var content = document.querySelector("#js-content")
var exit = howToUse.querySelector(".js-exit")
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