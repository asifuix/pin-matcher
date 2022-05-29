// Generate random 4 digit pin
function getPin(){
    const pin = Math.round(Math.random() * 10000);
    const pinString = pin + '';
    if(pinString.length == 4){
        return pin;
    }
    else{
        // console.log("Not 4 digit", pin);
        return getPin();
    }
}
function generatePin(){
    const pin = getPin();
    document.getElementById('display-pin').value = pin;
}

// Display typed number 
document.getElementById('key-pad').addEventListener('click', function(event){

    const number = event.target.innerText;
    const calcInput = document.getElementById('typed-numbers');
    if (isNaN(number)){
        if(number == 'C'){
            calcInput.value = '';
        }
    }
    else{
        const previousNumber = calcInput.value;
        const newNumber = previousNumber + number;
        calcInput.value = newNumber;
    }

})

// Pin matched/ Unmatched
document.getElementById('typed-submit').addEventListener('click', function(){

    const pinNumber = document.getElementById('display-pin').value;
    const typedNumber = document.getElementById('typed-numbers').value;
    
    const notifySuccess = document.getElementById('notify-success');
    const notifyFailed = document.getElementById('notify-failed');
    

    if (pinNumber == typedNumber){

        notifySuccess.style.display = 'block';
        notifyFailed.style.display = 'none';
    }
    else {

        notifySuccess.style.display = 'none';
        notifyFailed.style.display = 'block';
    }
})