//변수설정
//컴퓨터 점수, 사람점수, 남은 슛 횟수
//html변경되는 요소
let comScore = 0;
let userScore = 0;
let shotLeft =3;
let isComputerTurn = true;
//html 요소
let shotleftElem = document.querySelector("#shot-left");
let comScoreElem = document.querySelector("#computer-score");
let userScoreElem = document.querySelector("#user-score");
let textElem = document.querySelector("#text");
let comBtn = document.querySelector(".btn-computer");
let userBtns = document.querySelectorAll(".btn-user");
//컴퓨터가 먼저 슛을 한다.
//2점슛인지 3점슛인지 랜덤으로 결정
//2점슛 50%확률로 성공, 3점슛은 30%확률로 성공
//컴퓨터가 슛을 할때 동작하는 함수
shotleftElem.innerHTML = shotLeft
function onComputerShoot(){
    //2점인지 3점인지 랜덤지정
    let shootType = Math.random()>0.5? 2 : 3;
    //2점슛일때
    if(shootType == 2){
        //성공했을때
        if(Math.random() <0.5){
            //컴퓨터의 점수를 올린다.
            //글자를 변경
            //컴퓨터가 2점슛을 성공시켰습니다.
            comScore += 2;
            comScoreElem.innerHTML = comScore;
            textElem.innerHTML = "컴퓨터가 2점슛을 성공시켰습니다."
        }else{
            textElem.innerHTML = "실패했습니다."
        }
    }else{ //3점슛일때
        if(Math.random() <0.3){
            comScore += 3;
            comScoreElem.innerHTML = comScore;
            textElem.innerHTML = "컴퓨터가 3점슛을 성공시켰습니다."
        }else{
            textElem.innerHTML = "실패했습니다."
        }
    }
    //버튼의 비활성화 부분
    isComputerTurn = false;
    userBtns.forEach(btn =>{
        btn.disabled = false;
    })
    comBtn.disabled =true;
}

//사용자가 2점슛을 클릭했을때
function onUserShoot2(){
    if(Math.random() <0.5){
        //사용자의 점수를 올린다.
        //글자를 변경
        //사용자가 2점슛을 성공시켰습니다.
        userScore += 2;
        userScoreElem.innerHTML = userScore;
        textElem.innerHTML = "당신이 2점슛을 성공시켰습니다."
    }else{
        textElem.innerHTML = "실패했습니다."
    }
    userBtns.forEach(btn =>{
        btn.disabled = true;
    })
    comBtn.disabled =false;
    //남은 횟수를 1씩 빼기
    --shotLeft;
    //슛횟수 화면 변경하기
    shotleftElem.innerHTML = shotLeft;
    if(shotLeft==0){
        gameOver();
    }
}
function onUserShoot3(){
    if(Math.random() <0.3){
        //사용자의 점수를 올린다.
        //글자를 변경
        //사용자가 3점슛을 성공시켰습니다.
        userScore += 3;
        userScoreElem.innerHTML = userScore;
        textElem.innerHTML = "당신이 3점슛을 성공시켰습니다."
    }else{
        textElem.innerHTML = "실패했습니다."
    }
    userBtns.forEach(btn =>{
        btn.disabled = true;
    })
    comBtn.disabled =false;
    --shotLeft;
    shotleftElem.innerHTML = shotLeft;
    if(shotLeft==0){
        gameOver();
    }
}

//슛횟수가 0이되면 승자를 결정하는 함수
function gameOver(){
    if(userScore>comScore){
        textElem.innerHTML = "승리했습니다."
    }else if(userScore == comScore){
        textElem.innerHTML = "비겼습니다"
    }else{
        textElem.innerHTML = "졌습니다"
    }
    userBtns.forEach(btn =>{
        btn.disabled = true;
    })
    comBtn.disabled =true;
}