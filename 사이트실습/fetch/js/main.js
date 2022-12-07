fetch("data/data.json")
.then(response => response.json())
.then(data =>{ 
    displayItems(data.items)
    setEventItems(data.items) //데이터를 받아와서 호출
})

// function mapStudy(){
//     let students = [
//         {name:"green",score : 70},
//         {name:"blue",score : 80},
//         {name:"yellow",score : 90},
//     ]
//     let stu2 = students.map(stu=>{
//         return stu.score;
//     })
//     console.log(stu2);
// }


//이벤트 설정하기
function setEventItems(items){
    const btns = document.querySelector(".buttonDiv");
    btns.addEventListener("click",function(e){
        const{key, value} = e.target.dataset;  //객체 구조 분해할당 value , key
        // console.log(e);
        // dataset
        //     {
        //         key: "type"
        //         value : "tshirt"
        //     }
        // const dataset = e.target.dataset;
        // const key = dataset.key;
        // const value = dataset.value;//객체 구조 접근

        // {
        //     "type":"skirt",
        //     "gender":"여성",
        //     "size":"large",
        //     "color":"yellow",
        //     "image":"imgs/yellow_s.png"
        // }
        let filterd = items.filter(item => item[key] === value)
        console.log(filterd);
        displayItems(filterd)
    })
}


//화면 나타내기
function displayItems(items){
    const ul = document.querySelector(".items");
    let str = "";
    str = items.map(item=>{ //map 구문이해 배열을 순차적으로 돌면서 원본배열을 다른 배열로 만들어준다
        return `<li class = "item">
            <img src = "${item.image}" >
            <span>${item.gender}, ${item.size}</span>
        </li>`;
    }).join("")//배열을 문자열로 변경
    ul.innerHTML = str; 
}