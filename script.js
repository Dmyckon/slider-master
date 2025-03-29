

var sections = ["female", "male"]
var index = 0

// function showSection() {
//     sections.forEach((id,i) => {
//         document.getElementById(id).style.display = i === index ? "block": "none" 
//     })
// }

// function nextSwitch() {
//     index = (index + 1) % sections.length
//     showSection()
// }

// function prevSwitch() {
//     index = (index - 1 + sections.length) % sections.length
//     showSection()
// }

// function nextSwitch() {
//         if (index >= sections.length) {
//             document.getElementById("male").style.display =  "block"
//         } else {
//             document.getElementById("female").style.display = "none" 
//         }
// }

function nextSwitch() {
    document.getElementById("male").style.display = "block"
    document.getElementById("female").style.display = "none"
}

function prevSwitch() {
    document.getElementById("male").style.display = "none"
    document.getElementById("female").style.display = "block"
}