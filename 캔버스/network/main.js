import util from "./util.js";

//1.캔버스 불러오기
const canvas = document.querySelector("canvas");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
const ctx = canvas.getContext("2d");

//파티클 클래스
class Particle {
    constructor(x,y,radius,velocity){
        this.x = x;
        this.y = y;
        this.radius = radius;
        this.velocity = velocity;
    }
    draw(){
        //펜시작
        ctx.beginPath();
        //호그리기
        ctx.arc(this.x, this.y, this.radius, 0 , 2*Math.PI);
        ctx.fillStyle = "#fff";
        ctx.fill();
        ctx.closePath();
    }
    animate(){
        //파티클의 좌표가 canvas의 크기를 벗어날때
        //0이 되거나 canvas크기보다 커질때
        if(this.x <= 0 || this.x >= window.innerWidth
            || this.y <=0 || this.y >= window.innerHeight){
                this.x = util.randomFloat(0 , window.innerWidth);
                this.y = util.randomFloat(0 , window.innerHeight);
            }
            this.x += this.velocity.x;
            this.y += this.velocity.y;
            //선객체 생성
            particles.forEach(particle=>{
                let distance = util.distance(particle.x ,particle.y, this.x, this.y);
                if(distance < 300){
                    let from = { x : this.x, y: this.y};
                    let to = { x: particle.x, y:particle.y};
                    new Line(from, to, distance).draw();
                }
            })
            this.draw(); 
    }
}
//선클래스 정의하기
class Line {
    constructor(from, to, distance){
        this.from = from;
        this.to = to;
        this.distance = distance;
    }
    draw(){
        ctx.beginPath();
        ctx.moveTo(this.from.x,this.from.y);
        ctx.lineTo(this.to.x, this.to.y);
        ctx.strokeStyle = "rgba(215,205,0,0.4)";
        ctx.lineWidth = 1;
        ctx.stroke();
        ctx.closePath();
    }
}
//마우스 객체
let mouse = {
    x : 0,
    y : 0,
    isActive : false,
    radius : 5
}
//파티클 만들기
const TOTAL = 50;
let particles = [];
for(let i=0; i<TOTAL; i++){
    let x = util.randomFloat(0, window.innerWidth)
    let y = util.randomFloat(0, window.innerHeight)
    let radius = util.randomFloat(0.5,2);
    let velocity = {
        x: util.randomFloat(-2,2),
        y: util.randomFloat(-2,2)
    }
    particles.push(new Particle(x,y,radius,velocity));
}
//매 프레임마다 실행되는 재귀함수
function render(){
    ctx.clearRect(0,0,canvas.width,canvas.height);
    requestAnimationFrame(render);
    if(mouse.isActive){
        let velocity = {
            x : 0,
            y : 0
        }
        new Particle(mouse.x, mouse.y, mouse.radius, velocity).animate();
    }
    particles.forEach(particle => particle.animate());
}
render();

//이벤트 연결하기
 canvas.addEventListener("mouseenter",function(){
    mouse.isActive = true;
 })
 canvas.addEventListener("mouseleave",function(){
    mouse.isActive = false;
 })
 canvas.addEventListener("mousemove",function(e){
    mouse.x = e.pageX
    mouse.y = e.pageY
 })