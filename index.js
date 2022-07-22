
// Select some elements...
let header = document.querySelector("#page-header")
header.style.textAlign = "left"

let dogImages = document.querySelectorAll(".dog-image")
for (let i=0; i< dogImages.length; i++){
    dogImages[i].style.borderRadius = "50px"
}

let footer = document.querySelector(".footer")
footer.style.color = "purple"

let dogNames = document.querySelectorAll(".dog-name")
for (let i=0; i<dogNames.length;i++){
    dogNames[i].style.color = "red"
    if(dogNames[i].textContent === "Pip") {
        dogNames[i].style.color = "Black"
    }
}







