const choiceField = document.getElementById("choice")
const winDisplay = document.querySelector(".display__wins");
const loseDisplay = document.querySelector(".display__loses");
const automateBtn = document.querySelector('.auto__button--start')
const resetBtn = document.querySelector('.auto__button--reset')
const select = document.querySelector("#auto__select")
const input = document.querySelector(".auto__input")
const percentage = document.querySelector(".display__percentage")

const btn1 = document.getElementById("1")
const btn2 = document.getElementById("2")
const btn3 = document.getElementById("3")
const elArray = [ btn1, btn2, btn3 ];

let winner = 0;
let bad = 0;
let switchChoice = 0;
let winScore = 0;
let loseScore = 0;
let percentageValue = 0;
let selectedValue = "stay";
let inputValue = 1;
let choiceFlag = false

choiceField.addEventListener("click", e=>{
    if(e.target.id == "choice") return;
    monty(e.target, true)
})

automateBtn.addEventListener("click", e=>{
    e.preventDefault()
    automatePlay(inputValue,selectedValue)
})

resetBtn.addEventListener("click", e=>{
    e.preventDefault()
    winScore = 0;
    loseScore = 0;
    percentageValue = 0;
    updateDisplay()
})

select.addEventListener("change", e=>{
    selectedValue = e.target.value;
})

input.addEventListener("change", e=>{
    inputValue = e.target.value
})

function monty(selected, showDisplay = false){
    if(!choiceFlag){
        winner = Math.ceil(Math.random()*3);  
        
        let remainingTwo = elArray.filter(el=>{
            return el.id != selected.id;
        });
        if(selected.id == winner){
            bad = remainingTwo[Math.floor(Math.random()*2)];
        }else{
            bad = remainingTwo[0].id == winner ? remainingTwo[1] : remainingTwo[0]
        }
        switchChoice = remainingTwo[0] == bad ? remainingTwo[1] : remainingTwo[0];
        
        if(showDisplay){
            selected.classList.add("choice__button--selected");
            bad.classList.add("choice__button--wrong");
            bad.disabled = true;
            switchChoice.classList.add("choice__button--switch")
        }

        choiceFlag = true;
        return switchChoice;
    }else{
        if(selected.id == winner){
            winScore++
            updateDisplay()
        }else{
            loseScore++
            updateDisplay("Lose")
        }
        percentageValue = (winScore / (winScore + loseScore)) * 100
        resetClasses()
        choiceFlag = false
    }
}

function automatePlay(numbOfTimes, choice){
    for(let i = 0; i < numbOfTimes; i++){
        const choosen = elArray[Math.floor(Math.random()*3)]
        const switchChoice = monty(choosen);
        if(choice == "stay"){
            monty(choosen)
        }else{
            monty(switchChoice)
        }
    }
}

function resetClasses(){
    btn1.classList.remove("choice__button--switch")
    btn1.classList.remove("choice__button--selected")
    btn1.classList.remove("choice__button--wrong")
    btn2.classList.remove("choice__button--switch")
    btn2.classList.remove("choice__button--selected")
    btn2.classList.remove("choice__button--wrong")
    btn3.classList.remove("choice__button--switch")
    btn3.classList.remove("choice__button--selected")
    btn3.classList.remove("choice__button--wrong")
    btn1.disabled = false
    btn2.disabled = false
    btn3.disabled = false
}

function updateDisplay(){
    loseDisplay.innerHTML = loseScore;
    winDisplay.innerHTML = winScore;
    percentage.innerHTML = percentageValue.toFixed(2);
}

/* 
step 1:
    generate a winner on selection.
step 2:
    choose randomly a bad and a switch, between the remaining two button

Winner cant be Bad.
The bad one is not selectable.
Switch is selectable

*/

/* 

I select one.
The bad one cant be the selected or the winner.
if selected is winner:
    choose randomly from the remaining two.
if selected is not winner:
    choose the remaining one.


*/