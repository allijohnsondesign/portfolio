// let textileThumbs = document.getElementsByClassName("textile-thumb")

// textileThumbs.forEach((element) => {
//     element.addEventListener("click", changeTextilePhoto(this.id))
// })

//textileThumbs.addEventListener("click", changeTextilePhoto(this.id))

//console.log(textileThumbs[3].id.charAt(textileThumbs[3].id.length-1))



let textileThumb0 = document.getElementById("textile-0");
let textileThumb1 = document.getElementById("textile-1");
let textileThumb2 = document.getElementById("textile-2");
let textileThumb3 = document.getElementById("textile-3");

let textilePhoto = document.getElementById("textile-main-img");

textileThumb0.addEventListener("click", function(){changeTextilePhoto(this)});
textileThumb1.addEventListener("click", function(){changeTextilePhoto(this)});
textileThumb2.addEventListener("click", function(){changeTextilePhoto(this)});
textileThumb3.addEventListener("click", function(){changeTextilePhoto(this)});

function changeTextilePhoto(item){
    textilePhoto.src="./assets/images/" + item.id + ".png";
    textileThumb0.classList.remove("selected-thumb")
    textileThumb1.classList.remove("selected-thumb")
    textileThumb2.classList.remove("selected-thumb")
    textileThumb3.classList.remove("selected-thumb")
    item.classList.add("selected-thumb")
}

let monkeyThumb0 = document.getElementById("monkey-0");
let monkeyThumb1 = document.getElementById("monkey-1");
let monkeyThumb2 = document.getElementById("monkey-2");
let monkeyThumb3 = document.getElementById("monkey-3");

let monkeyPhoto = document.getElementById("monkey-main-img");

monkeyThumb0.addEventListener("click", function(){changeMonkeyPhoto(this)});
monkeyThumb1.addEventListener("click", function(){changeMonkeyPhoto(this)});
monkeyThumb2.addEventListener("click", function(){changeMonkeyPhoto(this)});
monkeyThumb3.addEventListener("click", function(){changeMonkeyPhoto(this)});

function changeMonkeyPhoto(item){
    monkeyPhoto.src="./assets/images/" + item.id + ".png";
    monkeyThumb0.classList.remove("selected-thumb")
    monkeyThumb1.classList.remove("selected-thumb")
    monkeyThumb2.classList.remove("selected-thumb")
    monkeyThumb3.classList.remove("selected-thumb")
    item.classList.add("selected-thumb")
}