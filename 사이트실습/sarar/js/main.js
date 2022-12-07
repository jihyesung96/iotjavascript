let sc =document.querySelector("section")
let imgstr = "";
for(let i = 0 ; i<=200; i++){
    imgstr = imgstr + `<img src="img/pic${i}.jpg">`;
}
sc.innerHTML = imgstr;
let imgs = document.querySelectorAll("section img")
sc.addEventListener("mousemove",function(e){
    let winW = window.innerWidth;
    let imgNum = Math.floor(e.pageX/winW*200);
    console.log(imgNum)
    //img매개변수에는 img태그가 차례차례 들어감
    //index매개변수에는 index번호가 들어감
    //<img src="img/pic0.jpg">
    imgs.forEach((img,index)=>{
        if(index != imgNum){
            img.style.display = "none";
        }else{
            img.style.display = "block";
        }
    })
})