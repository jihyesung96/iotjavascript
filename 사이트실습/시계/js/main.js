//윈도우 높이
let winh = window.innerHeight;
const lis = document.querySelectorAll("#menu li");
let sections =document.querySelectorAll("section");

lis.forEach((li ,index) =>{
    li.addEventListener("click",function(e){
        //기존 이벤트 제거
        e.preventDefault();
        window.scrollTo({top:index*winh ,behavior:"smooth"})
       
    })
    lis[0].classList.add("on");
    //스크롤 이벤트 발생했을때
    document.addEventListener("scroll",function(){
        let sct = document.documentElement.scrollTop;
        console.log(sct);
         //스크롤 값이 0~1*winh 까지면
        //첫번째 li에 클래스 on은 붙임
        //스크롤값이 1*winh 같거나 크면서 ~2*winh 보다 작을때
        //두번째 li에 클래스 on은 붙임
        //lis[0].classList.add("on");
        if(sct>=0 && sct<1*winh){
            lis[0].classList.add("on");
            lis[1].classList.remove("on");
            lis[2].classList.remove("on");
            lis[3].classList.remove("on");
        }
        if(sct>=1*winh && sct<2*winh){
            lis[0].classList.remove("on");
            lis[1].classList.add("on");
            lis[2].classList.remove("on");
            lis[3].classList.remove("on");
        }
        if(sct>=2*winh && sct<3*winh){
            lis[0].classList.remove("on");
            lis[1].classList.remove("on");
            lis[2].classList.add("on");
            lis[3].classList.remove("on");
        }
        if(sct>=3*winh && sct<4*winh){
            lis[0].classList.remove("on");
            lis[1].classList.remove("on");
            lis[2].classList.remove("on");
            lis[3].classList.add("on");
        }
    })
})

//마우스 무브이벤트
sections[0].addEventListener("mousemove",function(e){
    let x = e.pageX;
    let y = e.pageY;
    document.querySelector(".img11").style.right = 20+(x/30)+"px";
    document.querySelector(".img12").style.right = 20-(x/30)+"px";
})