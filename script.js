let event =-1;
let ans =document.querySelector("#ans");
let u= document.querySelector(".u");
let opp= document.querySelector(".opp");
let rock =document.querySelector("#rock");
let m=0;
let n=0;
rock.addEventListener("click",()=>{
    let x=Math.floor(Math.random()*3);
    event=0;
    if(x===0){
        ans.innerText="draw";
    }
    if(x===1){
        ans.innerText="paper wraps the rock";
        n++;
    }
    if(x===2){
        ans.innerText="rock crushes scissors";
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
        ans.innerText="draw";
    }
    if(x===0){
        ans.innerText="paper wraps the rock";
        m++;
    }
    if(x===2){
        ans.innerText="scissors slice the paper";
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
        ans.innerText="draw";
    }
    if(x===1){
        ans.innerText="scissors slice the paper";
        m++;
    }
    if(x===0){
        ans.innerText="rock crushes scissors";
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

