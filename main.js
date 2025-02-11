let gameSeq=[];
let userSeq=[];
let level=0;
let started=false;
let btns=["yellow","red","green","blue"];
h2=document.querySelector("h2");
h3=document.querySelector("h3");

document.addEventListener("keypress",function(){
    if(started==false){
        console.log("game is started");
        started=true;
    }
    levelUp();

})

function gameFLash(btn){
    btn.classList.add("flash");

    setTimeout(function(){
        btn.classList.remove("flash");
    },250);
}
function userFLash(btn){
    btn.classList.add("userflash");

    setTimeout(function(){
        btn.classList.remove("userflash");
    },250);
}


function levelUp(){
    userSeq=[];
    level++;
    h2.innerText=`level ${level}`;
    let ranIdx=Math.floor(Math.random()*3);
    let ranColor=btns[ranIdx];
    let ranBtn=document.querySelector(`.${ranColor}`);
    gameSeq.push(ranColor);
    console.log(gameSeq)
    gameFLash(ranBtn);  
}
function checkAns(idx){
    if(gameSeq[idx]==userSeq[idx]){
        if(gameSeq.length==userSeq.length){
            setTimeout(levelUp,1000)
        }  
    }else{
        h2.innerText=`GAME OVER! Your score was ${level}.`
        h3.innerText="Press any key to restart"
        reset();
        document.querySelector("body").style.backgroundColor="red"
        setTimeout(function(){
            document.querySelector("body").style.backgroundColor="white"  
        },150)      
    }
}


function btnPress(){
    let btn=this;
    userFLash(btn);
    userColor=btn.getAttribute("id");
    userSeq.push(userColor)
    console.log(userSeq)
    checkAns(userSeq.length-1);
}

let allBtns=document.querySelectorAll(".btn");
for(btn of allBtns){
    btn.addEventListener("click",btnPress);
}

function reset(){
    gameSeq=[];
    userSeq=[];
    level=0;
    started=false;
}



