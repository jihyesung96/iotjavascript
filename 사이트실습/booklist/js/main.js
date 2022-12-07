fetch("data/data.json")
.then((response) => response.json())
.then(data =>{ 
    setEventItems(data.lists)
    displayItems(data.lists)
     //데이터를 받아와서 호출
})

function setEventItems(lists){
    const btns = document.querySelector(".buttonDiv");
    btns.addEventListener("click",function(e){
        const{key, value} = e.target.dataset;  //객체 구조 분해할당 value , key
        let filterd = lists.filter(list => list[key] === value)
        console.log(filterd);
        displayItems(filterd)
    })
}

function displayItems(lists){
    const ul = document.querySelector(".lists");
    let str = "";
    str = lists.map(list=>{ //map 구문이해 배열을 순차적으로 돌면서 원본배열을 다른 배열로 만들어준다
        return `<li class = "list">
            <span>${list.writer}</span>
            <span>${list.title}</span>
            <span>${list.year}</span>
        </li>`;
    }).join("")//배열을 문자열로 변경
    ul.innerHTML = str; 
}