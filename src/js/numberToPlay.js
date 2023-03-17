const leftContainer = document.getElementById("container-left");
const centerContainer = document.getElementById("container-center");
const rightContainer = document.getElementById("container-right");
const currentNumber = document.getElementById("current-number");
let timeoutId;
let currentNumberToPlay



const numbersToPLayArray = Array(99).fill().map((_,index)=>index+1)
const currentRandomNumber =()=>{
    return Math.floor(Math.random()*numbersToPLayArray.length)
}
const setNumberToPlay=()=>{
    const index = currentRandomNumber()
    const number = numbersToPLayArray[index]
    currentNumberToPlay = number
    numbersToPLayArray.splice(index,1);
    

}

const compareResults=(array)=>{
    const boxesArray = [...array]
    
    boxesArray.forEach(element => {
    
        if (Number(element.dataset.number) === currentNumberToPlay) {
           
            element.classList.add("box--checked")
            currentNumber.textContent = currentNumberToPlay
        }
        
    });
}

const start =()=>{
    clearTimeout(timeoutId)
   
    if (rightContainer.querySelectorAll('.box--checked').length===15){
       
        currentNumber.textContent = 'YOU LOSE!'
        clearTimeout(timeoutId)
        return
    }
    if (leftContainer.querySelectorAll('.box--checked').length===15){
        currentNumber.textContent = 'YOU WIN!'
        clearTimeout(timeoutId)
        return
    }
    else{
        timeoutId = setTimeout(()=>start(),200)
        setNumberToPlay()
        
        compareResults(centerContainer.children)
        compareResults(leftContainer.children)
        compareResults(rightContainer.children)
    }

    
}



export{start}