let boxes = document.querySelectorAll(".box");
let restBtn = document.querySelector("#reset-btn");
let newGameBtn = document.querySelector("#new-btn");
let msgContainer = document.querySelector(".msg-container")
let msg =document.querySelector("#msg")




let turnO = true;//playerX, playerO

const winPatterns=[
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8],

];


const resetGame = () =>{
    turnO =true;
    enableBoxes();
    msgContainer.classList.add("hide");

}



boxes.forEach((box)=>{
    box.addEventListener("click",()=>{
        console.log("box was clicked");
        if(turnO){
            // playerO
            box.innerText="O";
            box.style.color ="yellow"
            turnO =false;
        }else{
            //playerX
            box.innerText = "X";
            turnO = true;
        }
        box.disabled = true;

        checkWiner();
    })
})


const disableBoxes = ()=>{
    for(let box of boxes){
        box.disabled = true;
    }
}


const enableBoxes = ()=>{
    for(let box of boxes){
        box.disabled = false;
        box.innerText = "";
    }
}


const showWinner =(winner)=>{
    msg.innerText = `congraculations, winner is ${winner}`;
    msgContainer.classList.remove("hide");
    disableBoxes();
}


const checkWiner = () =>{
    for(let pattern of winPatterns){
    //   console.log(boxes[pattern[0]].innerText,boxes[pattern[1]].innerText,boxes[pattern[2]].innerText);

    let post1Val = boxes[pattern[0]].innerText;
    let post2Val = boxes[pattern[1]].innerText;
    let post3Val = boxes[pattern[2]].innerText;

      if(post1Val != "" && post2Val != "" && post3Val != ""){
        if(post1Val === post2Val && post2Val === post3Val){
            console.log("winner",post1Val )
            showWinner(post1Val);
        }
      }
    }
}





newGameBtn.addEventListener("click",resetGame);
restBtn.addEventListener("click",resetGame);



// let arr = ["apple","banana","litchi"];

// //2D Array
// let arr2 = [["apple","litchi"],["patato","mushroom"],["pants","shirts"]];