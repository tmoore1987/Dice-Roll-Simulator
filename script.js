const btn1 = document.getElementById('roll-btn');
const dice1 = document.getElementById('dice');
const rollHistory = document.getElementById('roll-history');

let historyList = [];

const rollDice = () => {
    //generate random number with math.floor and math.random. 
    //+1 to keep dice 1-6 and avoid the 0 index.
    const rollResult = Math.floor(Math.random() * 6) + 1;
    const diceFace = getDiceFace(rollResult);
    dice1.innerHTML = diceFace;
    historyList.push(rollResult);
    updateRollHistory();  
    
}


const updateRollHistory = () => {
    rollHistory.innerHTML = '';
    for (let i = 0; i < historyList.length; i++) {
        const listItem = document.createElement('li');
        listItem.innerHTML = `Roll ${i + 1}: <span> ${getDiceFace(
            historyList[i]
        )}</span>`
        rollHistory.appendChild(listItem)
    }
    
}
    


const getDiceFace = (rollResult) =>{
switch (rollResult) {
    case 1:
        return '&#9856;';
    case 2:
        return '&#9857;';
    case 3:
        return '&#9858;';
    case 4:
        return '&#9859;';
    case 5:
        return '&#9860;';
    case 6:
        return '&#9861;';
    default:
        return '';

}
}



//event listener
btn1.addEventListener('click', () =>{
    dice1.classList.add('roll-animation');
    setTimeout(() => {
        dice1.classList.remove('roll-animation');
        rollDice()
    }, 1000)
})