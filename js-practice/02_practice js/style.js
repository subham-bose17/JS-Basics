let count = 0;
let counter = document.getElementById("count");

function updateDisplay(){
    counter.textContent=count;

}

function increase(){
    if(count<10){
        
        count++;
        updateDisplay();
        if(count === 10){
            alert("Maximum 10 items add!");
        }
    }else{
        alert("Maximum 10!");
    }
}

function decrease(){
     if(count>0){
        count--;
        updateDisplay();
        if(count === 0){
            alert("min!");
        }
    }else{
        alert("Min!");
    }
}

window.onload = () => {
    updateDisplay();
}

