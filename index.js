

const generatePin = document.querySelector(".generatedPin")
const generateButton = document.querySelector(".generate-btn")
const submitBtn = document.querySelector(".submit-btn")

const showValue = document.querySelector(".showValue")

const wrong = document.querySelector(".wrong-pin")
const right = document.querySelector(".correct-pin")
const tryLeft = document.getElementById("try")
const action = document.querySelector(".action-left")


function pinGenerate (){
    
const randomPin =Math.floor(Math.random() *9000 +1000);
generatePin.value = randomPin;

generateButton.disabled = true;
generateButton.style.backgroundColor = "green";


}

generateButton.addEventListener("click", pinGenerate)


function showInput (number){

    if(generatePin.value === ""){
        alert("please fill the input");

       
       
    }
    else{
        showValue.value += number; 
        setAttribute("readOnly", "readOnly");
    }

  
}

function removeValue(){

        showValue.value = "";
    

}
   
    


function remove  ( ) {

    if(generatePin.value === ""){
        alert("please fill the input")
    }else{
        let newValue = showValue.value;

        showValue.value = newValue.slice(0, -1);
      
         
    }



}

function submit () {
    let newPin = generatePin.value;
    let oldPin = showValue.value;
 
if(newPin === oldPin){

    showRight();
}
else{
     showWrong();
     trydisit();
}
} 

function trydisit(){
    
    console.log(tryLeft.innerText)

    let chance = tryLeft.innerText;
    if(chance > 1){
        tryLeft.innerText = -- chance;
    
}
else{
    tryLeft.innerHTML = "please try after 30 minute"
    submitBtn.disabled = true;
}
}

submitBtn.addEventListener("click", submit )



function showWrong () {
  wrong.style.display = "block";
 right.style.display = "none";
 showValue.value = "";
 generateButton.style.backgroundColor = "red";
}
function showRight () {
  right.style.display = "block";
wrong.style.display = "none";
submitBtn.style.backgroundColor = "green";
}
hideNOtyfy()
function hideNOtyfy(){
  wrong.style.display = "none";
  right.style.display = "none";
}