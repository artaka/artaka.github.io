let button1 = document.getElementById("btn1")
let button2 = document.getElementById("btn2")
let form = document.getElementById("form")
let msgbox = document.getElementById("msgblock")

button1.addEventListener("click", function(){
    form.style.display = "none"
    msgbox.style.display = "block"
})

button2.addEventListener("click", function(){
    form.style.display = "none"
    msgbox.style.display = "block"
})