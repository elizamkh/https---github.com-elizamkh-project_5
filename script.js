
let username = prompt ("Введите имя:")

let title = document.getElementById("title")

if (username) {
    title.innerHTML = "Ваш список дел, " + username
} else {
    title.innerHTML = "Ваш список дел, анонимный пользователь)"
}

let count = 0

function addCase() {
    count = count + 1
    let error = document.getElementById('error')
    if (count > 5) {
        error.innerHTML = "Можно ввести до 5 дел"
        return    }
        
    let cases = document.getElementById("cases")
    let title = document.getElementById("title")
    let input = document.getElementById("input")
    let value = input.value
 
    cases.innerHTML = cases.innerHTML + "<li> " + value + "</li>"}
   


