let gameSeq = [];
let userSeq = [];

let btns = ["yellow", "red", "green", "purple"];

let body = document.querySelector("body");

let started = false;
let level = 0;

let h2 = document.querySelector("h2");

document.addEventListener("keypress", function(){
    if(started == false){ //* ---> we need to start the game only ones
        console.log("game is started");
        started = true;
        levelUp();
    }
});

function levelUp(){
    userSeq = []; //* -> user have to enter all the seq again
    level++;
    h2.innerText = `Level ${level}`;

    let randIdx = Math.floor(Math.random() * 3);
    let randColor = btns[randIdx]; //* -> these 3 line are for flasing random button
    let randombtn = document.querySelector(`.${randColor}`);

    gameSeq.push(randColor);// put color name into array to match with user
    btnFlash(randombtn);
};

function btnFlash(btn){
    btn.classList.add("flash");
    setTimeout(function(){
        btn.classList.remove("flash");
    }, 250);
};

function userFlash(btn){
    btn.classList.add("userFlash");
    setTimeout(function(){
        btn.classList.remove("userFlash");
    }, 200);
};

function checkAns(idx){

    if(userSeq[idx] === gameSeq[idx]){
        if(userSeq.length == gameSeq.length){
            setTimeout(levelUp, 500);
        }
    } else {
        h2.innerHTML = `Game Over, your score: <b>${level}</b> <br> Press any key to start`;
        body.classList.add("gameOver");
        setTimeout(function(){
            body.classList.remove("gameOver");
        }, 200);
        reset();
    }
}

function btnPress() {
    let btn = this; // jo btn press hua hoga wo store hogayega
    userFlash(btn); // click karne pe wo flash krega

    userColor = btn.getAttribute("id");
    userSeq.push(userColor);
    checkAns(userSeq.length - 1);
};

let allbtns = document.querySelectorAll(".btn");

for(btn of allbtns) {
    btn.addEventListener("click", btnPress);
}

function reset(){
    started = false;
    gameSeq = [];
    userSeq = [];
    level = 0;
}