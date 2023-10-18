let username = prompt ("Введите имя:")

let myTitle = document.getElementById("title")

if (username) {
    myTitle.innerHTML = "Привет, " + username
} else {
    myTitle.innerHTML = "Привет, анонимный пользователь)"
}

let count = 0

function add() {
    let myConteiner = document.getElementById("conteiner")
    let myTitle = document.getElementById("title")
    let myInput = document.getElementById("input")

    let value = myInput.value

    console.log(myInput)
    console.log(value)

    myTitle.innerHTML = "Ваш список дел,"

    count = count + 1

    myConteiner.innerHTML = myConteiner.innerHTML + "<p> " + value + "</p>"
}
 