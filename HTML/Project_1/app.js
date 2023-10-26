let displayValue = '';

// selecting button element
let button = document.getElementsByTagName("button")

// adding eventlistner to every button accn to value
for(let i = 0; i < button.length; i++){
    if(button[i].value == "c") button[i].addEventListener("click" , ()=> clearDisplay());
    else if(button[i].value == "=") button[i].addEventListener("click" , ()=> calculate());
    else button[i].addEventListener("click" , ()=> appendToDisplay(button[i].value));
}


// concatenate the string
function appendToDisplay(value) {
    displayValue += value;
    document.getElementById('display').value = displayValue;
    document.getElementById('display').style.backgroundColor = 'white';
}

// empty the display after we hit clear
function clearDisplay() {
    displayValue = '';
    document.getElementById('display').value = displayValue;
    document.getElementById('display').style.backgroundColor = 'white';
}

//calculate the string math value by using eval function 
function calculate() {
    try {
        displayValue = eval(displayValue);
        document.getElementById('display').value = displayValue;
        document.getElementById('display').style.backgroundColor = 'rgba(104, 255, 104, 0.7)';

    } catch (error) {
        document.getElementById('display').value = 'Error';
    }
}
