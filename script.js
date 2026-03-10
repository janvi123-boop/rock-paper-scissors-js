let event =-1;
let ans =document.querySelector("#ans");
let u= document.querySelector(".u");
let opp= document.querySelector(".opp");
let rock =document.querySelector("#rock");
let choice =document.querySelector("#choice");
let win= document.querySelector("#win");
let m=0;
let n=0;
rock.addEventListener("click",()=>{
    let x=Math.floor(Math.random()*3);
    event=0;
    if(x===0){
        choice.innerText="computer choose rock";
        ans.innerText="draw";
        win.innerText="its a tie";
    }
    if(x===1){
        choice.innerText="computer choose paper";
        ans.innerText="paper wraps the rock";
        win.innerText="computer wins";
        n++;
    }
    if(x===2){
        choice.innerText="computer choose scissors";
        ans.innerText="rock crushes scissors";
        win.innerText="you win";
        m++;
    }
    u.innerText=m;
    opp.innerText=n;
})
let paper =document.querySelector("#paper");
paper.addEventListener("click",()=>{
    let x=Math.floor(Math.random()*3);
    event=1;
    if(x===1){
        choice.innerText="computer choose paper";
        ans.innerText="draw";
        win.innerText="its a tie";
    }
    if(x===0){
        choice.innerText="computer choose rock";
        ans.innerText="paper wraps the rock";
        win.innerText="you win";
        m++;
    }
    if(x===2){
        choice.innerText="computer choose scissors";
        ans.innerText="scissors slice the paper";
        win.innerText="computer wins";
        n++;
    }
    u.innerText=m;
    opp.innerText=n;

})
let scissors =document.querySelector("#scissors");
scissors.addEventListener("click",()=>{
    let x=Math.floor(Math.random()*3);
    event=2;
    if(x===2){
        choice.innerText="computer choose scissors";
        ans.innerText="draw";
        win.innerText="its a tie";
    }
    if(x===1){
        choice.innerText="computer choose paper";
        ans.innerText="scissors slice the paper";
        win.innerText="you win";
        m++;
    }
    if(x===0){
        choice.innerText="computer choose rock";
        ans.innerText="rock crushes scissors";
        win.innerText="computer wins";
        n++;
    }
    u.innerText=m;
    opp.innerText=n;
})
let btn=document.querySelector(".btn");
let body=document.querySelector("body");
let currmode="light";
btn.addEventListener("click",()=>{
    if(currmode==="light"){
        currmode="dark";
        body.style.backgroundColor="black";
        body.style.color="white";
    }
    else {
        currmode="light";
        body.style.backgroundColor="white";
        body.style.color="black";
    }
})
let reset=document.querySelector("#reset");
reset.addEventListener("click",()=>{
    u.innerText=0;
    opp.innerText=0;
    ans.innerText="Choose your weapon";
    choice.innerText="  ";
    win.innerText=" ";
})
