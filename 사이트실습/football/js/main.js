
let arts =document.querySelectorAll('article'); //노드리스트 유사배열
let lis = document.querySelectorAll(".leftnav li");//노드리스트 유사배열
//스크롤 이벤트
document.addEventListener("scroll",function(){
    let sct = document.documentElement.scrollTop;
    arts.forEach((ar,index) => {
        let zoomNum = (index*-5000)+sct
        ar.style.transform = `translateZ(${zoomNum}px)`
        // if(sct > 1000 + (4000*index)){
        //     ar.classList.add('on');
        //     arts.forEach((ar,index2)=>{
        //         if(index != index2){
        //             ar.classList.remove('on');
        //         }
        //     })
        // }

        //0번째 아티클은 sct값이 1000보다 커지면 on index0
        if(sct >= 1000){
            arts[0].classList.add('on');
            arts[1].classList.remove('on');
            arts[2].classList.remove('on');
            arts[3].classList.remove('on');
            arts[4].classList.remove('on');
        }
        //1번째 아티클은 sct값이 6000보다 커지면 on index1
        if(sct >= 5000){
            arts[1].classList.add('on');
            arts[0].classList.remove('on');
            arts[2].classList.remove('on');
            arts[3].classList.remove('on');
            arts[4].classList.remove('on');
        }
        //2번째 아티클은 sct값이 11000보다 커지면 on index2
        if(sct >= 10000){
            arts[2].classList.add('on');
            arts[0].classList.remove('on');
            arts[1].classList.remove('on');
            arts[3].classList.remove('on');
            arts[4].classList.remove('on');
        }
        //3번째 아티클은 sct값이 16000보다 커지면 on index3
        if(sct >= 15000){
            arts[3].classList.add('on');
            arts[0].classList.remove('on');
            arts[1].classList.remove('on');
            arts[2].classList.remove('on');
            arts[4].classList.remove('on');
        }
        //4번째 아티클은 sct값이 21000보다 커지면 on index4
        if(sct >= 20000){
            arts[4].classList.add('on');
            arts[0].classList.remove('on');
            arts[1].classList.remove('on');
            arts[2].classList.remove('on');
            arts[3].classList.remove('on');
        }
    })
    
})
//li를 클릭했을때
//0번째 li 0
//1번째 5000
//2번째 10000
//3번째 15000
//4번째 20000
// lis[0].addEventListener("click",this.fullscreenElement(){

// })

lis.forEach((li,index) =>{
    li.addEventListener("click",function(e){
        //이벤트 제거
        e.preventDefault();
        window.scrollTo({top: index*5000, behavior:"smooth"})
    })
})