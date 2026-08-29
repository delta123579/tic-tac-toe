let boxes = document.querySelectorAll(".box");
let resetbtn = document.querySelector("#btn1");
let newBtn = document.querySelector("#btn2");
let msgcontainer = document.querySelector(".msg-container")
let msg = document.querySelector("#msg")

let turnO = true;
let count = 0;
const winPattern = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
];
  const resetgame =()=>{
    turnO = true;
    count = 0;
    msgcontainer.classList.add("hide");
   enableBoxes();
  }
const showWinner = (winner)=> {
        msg.innerText = `congratulation, winner is ${winner}`;
        msgcontainer.classList.remove("hide");
        disableBoxes();
    };
    const disableBoxes = ()=>{
        for(let box of boxes)
        box.disabled = true;
    };
    const enableBoxes = ()=>{
        for(let box of boxes){
        box.disabled = false;
        box.innerText = "";
        box.classList.remove("o-color" , "x-color");
        }
    };
    const gameDraw = () => {
        msg.innerText = `Game is Draw.`;
        msgcontainer.classList.remove("hide");
        disableBoxes();
    }
const checkWinner = ()=> {
   for (let pattern of winPattern){
    let pos1Val = boxes[pattern[0]].innerText;
    let pos2Val = boxes[pattern[1]].innerText;
    let pos3Val = boxes[pattern[2]].innerText;

    if(pos1Val != "" && pos2Val != "" && pos3Val != "") {
        if(pos1Val === pos2Val && pos2Val === pos3Val){
        showWinner(pos1Val);
        return  true;
        }
    }
    }
    return false;
   };
boxes.forEach((box) => {
    box.addEventListener("click", () => {
        if(turnO){
            box.innerText = "O";
            box.classList.remove("x-color");
            box.classList.add("o-color");
            turnO = false;
        }else{
            box.innerText = "X";
            box.classList.remove("o-color");
            box.classList.add("x-color");
            turnO = true;
        }
        box.disabled = true;
        count++;
        

        let winner = checkWinner();
        if (!winner && count === 9) {
            gameDraw();
        }
    });
 
});
newBtn.addEventListener("click", resetgame);
resetbtn.addEventListener("click", resetgame);
