const inputList = document.querySelectorAll(".color-input");
const boxList = document.querySelectorAll(".box")

document.querySelector("#changeButton").addEventListener("click" , function(e){

    for(let i=0; i<boxList.length; i++) {
        boxList[i].style.backgroundColor = inputList[i].value;
    }
});

