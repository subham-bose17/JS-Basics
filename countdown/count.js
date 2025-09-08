let count = 0;
let counter = document.getElementById("count");

function updateDisplay() {
    counter.textContent=count;
}

function increase(){
    if (count < 10){
        count++;
        updateDisplay();
        if(count === 10){
            alert("Maximum card value reached 10 items!");
        }
    }else{
            alert("You can't add more than 10 items");
    }

}
function decrease(){
    if(count > 0){
        count--;
        updateDisplay();
        if( count === 0){
            alert("Cart is now empty!");
        }
    }else{
            alert("Cart is already empty!");
    }
    
}

window.onload = () => {
    updateDisplay();
}