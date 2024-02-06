let boxes = document.querySelectorAll(".box")
let resetButton = document.querySelector("#reset")

let playerO = true;
const winningPatterns=[
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,4,8],
    [2,4,6],
    [1,4,7],
    [2,5,8]
]
boxes.forEach((box) => {
    box.addEventListener("click", ()=>{
    console.log("box was clicked")
    if(playerO){ //player o
        box.innerText="O"
        playerO=false
    }else{// player x
        box.innerText="X"
        playerO=true
    }
    box.disabled=true;
    checkWin();
})
});

const checkWin=()=>{
    for(let pattern of winningPatterns){

        let posVal1=boxes[pattern[0]].innerText;
        let posVal2=boxes[pattern[1]].innerText;
        let posVal3=boxes[pattern[2]].innerText;

        if(posVal1 !="" &&posVal2 != ""&&posVal3!== ""){  
            if(posVal1===posVal2 && posVal1 === posVal3){ 
                alert(`Congratulations Player ${posVal1} you won the game`)
        }

}}}
resetButton.addEventListener('click', (e)=>{
    e.preventDefault();
    boxes.forEach((box)=>{
        box.innerHTML='';
        box.disabled=false; // re-enable the box
    });
    playerO=true; // reset the player
})
