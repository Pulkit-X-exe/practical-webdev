let body = document.querySelector("body")

function btn(){
    alert("The button was clicked!")
}

let button = document.createElement("button")
button.innerText = "Like"
body.appendChild(button)

button.addEventListener("click",btn)

body.style.backgroundColor = "blue"
button.style.backgroundColor = "red"
