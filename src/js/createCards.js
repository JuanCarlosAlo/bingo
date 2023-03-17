const bingoLength = 99

const randomNumber = () => {
    return Math.floor(Math.random() * 99 +1);
  };

const fillRandomNumber=(array,maxLength)=>{
    while (array.length<maxLength) {
        const randomNewNumber = randomNumber()
       if (!array.includes(randomNewNumber)) array.push(randomNewNumber)
    }
   
}
const createSpan =(number)=>{
    const newSpan = document.createElement('span')
    newSpan.textContent = number
    newSpan.dataset.number = number
    newSpan.classList.add('box')
    return newSpan
}
const createBingo=(constainer)=>{
    const fragment =document.createDocumentFragment()
    for (let index = 0; index < bingoLength; index++) {
        const newElement= createSpan(index+1)
        fragment.append(newElement)
        
    }
    constainer.append(fragment)
}



const createCards=(container,array)=>{
    const fragment = document.createDocumentFragment()
    array.forEach(element => {
         const newElement = createSpan(element)
         fragment.append(newElement)
         
    });
    container.append(fragment)
}


  export{createCards,fillRandomNumber ,createBingo}