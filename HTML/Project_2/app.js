// selecting elements to retrive data , for popup
let submit = document.querySelector("#submit");
let formData = document.querySelector("form");
let popup = document.querySelector(".popup");
let allSpan = popup.querySelectorAll("span");
let checkedGen = document.querySelectorAll(".inline")
let overlay = document.getElementById("overlay");
let closeP = document.querySelector(".close");


// get input data and put it into HTML dom
// Open popup and overlay
function openPopup(){
    for (let i = 0; i < 7; i++){
         allSpan[i].innerText = `${formData[i].value}`;
      }
    
    for(let i = 0; i < checkedGen.length; i++){
        if(checkedGen[i].checked){
            allSpan[7].innerText =  `${checkedGen[i].value}`
        }
      }
    overlay.style.display = "block";
    popup.style.display = "block";
}
 
// close popup and overlay
function closePopup() {
    overlay.style.display = "none";
    popup.style.display = "none";
}


//  Evenlisteners
submit.addEventListener("click" , function(e){
  if (formData.checkValidity()) {
      e.preventDefault(); 
      openPopup();
  }
})


closeP.addEventListener("click" , function(){
       closePopup();
})  