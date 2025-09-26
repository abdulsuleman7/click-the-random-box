console.log("hey coders....")

function RandomColor() {
    let ran1 = Math.floor(Math.random() * 255);
    let ran2 = Math.floor(Math.random() * 255);
    let ran3 = Math.floor(Math.random() * 255);

    return `rgb(${ran1},${ran2},${ran3})`;
    
}

let total = document.querySelector(".total");
let boxes = document.querySelectorAll(".box");

let count = 0;
let active = null;

for (let i = 0; i < boxes.length; i++) {
    boxes[i].addEventListener("click", (e) => {
        if (e.currentTarget === active) {
            count++;
            total.innerText = "total score is :" + " " + count;
            console.log(count);
        } else {
            count--;
            total.innerText = "total score is :" + " " + count;
            if(count<0){
                total.innerText = "your score is in Negative :" + " "+ count;
            }else{
                  total.innerText = "total score is :" + " " + count;
            }
            
        }
    })

}

setInterval(() => {

    let random = Math.floor(Math.random() * boxes.length)
    let select = boxes[random]
    active = select;
    select.style.backgroundColor = RandomColor();
    setTimeout(() => {
        select.style.backgroundColor = "black";
        active = null;
    }, 1200);


}, 2000);

