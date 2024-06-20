let score1=0;
let showScore1=document.getElementById('screen1');

let score2=0;
let showScore2=document.getElementById('screen2');

//Home player
function addOnePoint(){
    score1+=1;
    showScore1.innerHTML=score1;
}
function addTwoPoints(){
    score1+=2;
    showScore1.textContent=score1;
}
function addThreePoints(){
    score1+=3;
    showScore1.textContent=score1;
}

//Guest player
function addOnePoint2(){
    score2+=1;
    showScore2.textContent=score2;
}
function addTwoPoints2(){
    score2+=2;
    showScore2.textContent=score2;
}
function addThreePoints2(){
    score2+=3;
    showScore2.textContent=score2;
}
