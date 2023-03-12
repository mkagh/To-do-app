const input = document.querySelector("input")
const add = document.querySelector(".add")
const see = document.querySelector(".see")
const addedItems = document.querySelector(".alert")
const modal = document.querySelector(".modal")
const items = []
add.disabled = true
let forReplace;
let toDisplay = false;

input.addEventListener("input", () => {
    add.disabled = false
})

add.addEventListener("click", () => {
    modal.innerHTML = ""
    if (add.innerHTML === "edit") {
        addedItems.className = "alert alert-warning"
        addedItems.innerHTML = input.value
        var index = items.indexOf(forReplace);
        if (index !== -1) {
            items[index] = input.value;
        }
        items.map((item) => {
            return modal.innerHTML += `   <div>
            <p>${item}</p>
            <i onclick="myFunction()" class="fa-solid fa-xmark x"></i>
            <i onclick="myEdit(event)" class="fa-solid fa-pen-to-square edit"></i>
            </div>`
        })
        input.value = ""
    }
    else {
        addedItems.innerHTML = input.value
        addedItems.className = "alert alert-success"
        items.push(input.value)
        input.value = ""
        items.map((item) => {
            return modal.innerHTML += `   <div>
            <p>${item}</p>
            <i onclick="myFunction()" class="fa-solid fa-xmark x"></i>
            <i onclick="myEdit(event)" class="fa-solid fa-pen-to-square edit"></i>
            </div>`
        })
    }
    add.textContent = "add"

})

function myFunction() {
    const x = document.querySelectorAll(".x")
    x.forEach((oneX) => {
        oneX.addEventListener("click", function click(e) {
            console.log(oneX)
            addedItems.className = 'alert alert-dark'
            addedItems.innerHTML = `obrisano ${e.target.parentElement.firstElementChild.textContent}`
            modal.innerHTML = ""
            console.log(e.target.parentElement.firstElementChild.textContent)
            var index = items.indexOf(e.target.parentElement.firstElementChild.textContent);
            input.value = ""
            if (index !== -1) {
                items.splice(index, 1);
                items.map((item) => {
                    return modal.innerHTML += `   <div>
                                           <p>${item}</p>
                                           <i onclick="myFunction()"  class="fa-solid fa-xmark x"></i>
                                           <i  onclick="myEdit(event)"  class="fa-solid fa-pen-to-square edit"></i>
                                           </div>`
                })
            }
        })
    })

}
function myEdit(event) {
    toDisplay = false;
    modal.style.display = /* `${toDisplay}` */toDisplay ? "block" : "none"
    see.innerHTML = toDisplay ? "close" : "see the list"
    input.focus()
    input.value = ""
    add.textContent = "edit"
    add.disabled = true
    console.log(event.target)
    forReplace = event.target.previousElementSibling.previousElementSibling.innerHTML
}
see.addEventListener("click", () => {
    toDisplay = !toDisplay
    console.log(toDisplay)
    modal.style.display = toDisplay ? "block" : "none"
    modal.style.animation = toDisplay ? "example 1s" : "none"
    see.innerHTML = toDisplay ? "close" : "see the list"
})