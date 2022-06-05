/* class Buttons{
    constructor(id){
        this.id = id;
    }
    setType(type){
        this.type = type
    }
    setOutcome(outcome){
        this.outcome = outcome
    }
    getType(){
        return this.type
    }
    getOutcome(){
        return this.outcome
    }
}
let btn_1 = new Buttons(1);
let btn_2 = new Buttons(2);
let btn_3 = new Buttons(3);

const OUTCOMES = ["WIN", "LOSE"];
const TYPES = ["SELECTED", "SWITCH", "BAD"];
 */


const btn1 = document.getElementById("1")
const btn2 = document.getElementById("2")
const btn3 = document.getElementById("3")
const choice = document.getElementById("choice")
let buttonFlag = false;
choice.addEventListener("click", e=>{
    if(!buttonFlag){
        buttonFlag = true;
        e.target.classList.add("choice__button--selected")
        firstPhase(e.target.id)
    }else{
        console.log("pressed")
    }
})
/* 
    INPUT:      selected button number
    RETURN:     Void
    DOES:       add classes to the remaining buttons
    ->  randomly chooses between the two buttons, one gets switch class, one gets bad class
*/
function firstPhase(selected){


    const arrEl = [ btn1, btn2, btn3 ];
    const arr = [ 1, 2, 3 ];

    let filteredEl = arrEl.filter(e=>{
        return e.id != selected;
    })
    let filtered = arr.filter(e=>{
        return e != selected;
    })
    const luckyNumb = filtered[Math.floor(Math.random()*2)];

    console.log(filtered)
    console.log(filteredEl)
    console.log(luckyNumb)
}