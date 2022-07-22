
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
    if(dogNames[i].textContent === "Rizzo"){
        dogNames[i].style.fontSize = "15px"
    }
}

let dogDesc = document.querySelectorAll(".dog-description")
for (let i=0; i < dogDesc.length; i++){
    dogDesc[i].style.color = "purple"
}

let button = document.createElement('button')
//add text to the button
button.append('Click This Button')
//update the button size
button.style.fontSize='25px'
//add the button to the page
footer.append(button)
//add event listener? first thing is the action. the second is what happens after
button.addEventListener("click", function(){
    //when the button is clicked get rid of the header
    header.remove()

})






