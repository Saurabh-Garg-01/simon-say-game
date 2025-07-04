let gameseq=[];
let userseq=[];

let colorlist=["yellow", "red", "blue", "pink"];

let started= false;
let level=0;
let Highest=0;

document.addEventListener("keypress", function(){
    if(started== false){
        console.log("game started");
        started= true;

        levelup();
    }
});

function gameflash(btn){
   btn.classList.add("flash");
   setTimeout(function(){
    btn.classList.remove("flash");
   }, 250);
}

function userflash(btn){
   btn.classList.add("userflash");
   setTimeout(function(){
    btn.classList.remove("userflash");
   }, 250);
}
let h3= document.querySelector("h3");

function levelup(){
    userseq=[];
    level++;
    let h3= document.querySelector("h3");
    h3.innerText= `level ${level}`;

    let randidx= Math.floor(Math.random()*4);   
    let randcolor= colorlist[randidx];
    let randbtn= document.querySelector(`.${randcolor}`)
    gameseq.push(randcolor);
    console.log(gameseq);
    gameflash(randbtn); 
}

function check(idx){
    if(userseq[idx]===gameseq[idx]){
        if(userseq.length== gameseq.length){
            setTimeout(levelup, 1000);
        }
    }else{
        h3.innerHTML= `GAME OVER!! Your Score is <b>${level}</b> <br> press key to start game`;
        if(Highest<level){
            Highest=level;
            hightestscore(Highest);
        }
        // hightestscore(level);
        document.querySelector("body").style.backgroundColor="red";
        setTimeout(function(){
            document.querySelector("body").style.backgroundColor="white";
        },150);
        reset();
    }
}

function presskey(){
    let btn=this;
    console.log("press key");
    userflash(btn);
    usercolor= btn.getAttribute("id");
    userseq.push(usercolor);
    console.log(userseq);

    check(userseq.length-1);
}

let btn= document.querySelectorAll(".box");
for(let btns of btn){
    btns.addEventListener("click", presskey)
}

function reset(){
    gameseq=[];
    userseq=[];
    level=0;
    started=false;
}

function hightestscore(score){
    let h4= document.querySelector("h4");
    h4.innerText=`YOUR Hightest SCORE ${score}`;
}