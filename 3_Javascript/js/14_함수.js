/* 매개변수, 전달인자 */

const input1 = document.querySelector("#input1");
const btn1 = document.querySelector("#btn1");

// 2개의 값을 전달 받아 출력하는 함수
function print1(num, str) { // 함수 선언
    // 함수 정의 
    console.log(`${num} 은/는 ${str} 입니다`);

}




/* #btn1 클릭 시 #input1의 값을 읽어와 print() 함수 호출 */
btn1.addEventListener("click", function() {

    const value = input1.value;

    if(!typeof Number || value.trim().length == 0 ) {
        console.log("숫자를 입력해주세요");
        return; // 함수 종료 + 호출한 곳으로 돌아감
    }

    let result;

    if(Number(value) == 0 )     result = "0";
    else if(Number(value) > 0)  result = "양수";
    else                        result = "음수";

    /* 함수 호출(값 전달) */
    /* 중요!! 전달되는 값의 순서가 중요합니다! */
    print1(value, result);
});


/* 매개변수로 배열 전달하기 */

function arrayTest(arr) {
    // 전달 받은 배열의 모든 요소 출력하기
    for(let i=0; i < arr.length; i++) {
       
        if(arr[i] == '멜론')    arr[i] ="딸기";
        console.log(`${i} 번 인덱스 값` , arr[i]);
    }
}

// #btn2a 클릭 되었을 때 arrayTest() 함수 호출
document.querySelector("#btn2a").addEventListener("click", function() {

    const arr1 = [10, 20, 30];
    const arr2 = ["사과", "바나나", "멜론"];


    
    arrayTest(arr2);


    console.log("arr3[2] : ", arr2[2]);

    // 왜 멜론이 아니라 딸기 출력될까?
    // -> arrayTest(arr)
    // arr2 배열을 통째로 복사해서 전달하는 것이 아닌
    // arr2에 저장된 주소만 보내서 함수를 수행.

    // arrayTest () 함수에서 arr2와 같은 배열을 참조해서 수정
    // -> 함수 수행 후 돌아와서도
    // 참조하고 있던 배열의 2번 인덱스 값이 변화되어 있음




    /**
     참조란?

     - 객체 지향 언어에서 
     배열, 객체 등 object는 값을 여러개 가지고 있는 자료형인데
     변수는 값을 1개만 저장할 수 있기 때문에 

     object를 메모리 다른곳에 저장하고
     저장된 곳의 주소를 변수에 저장해서 

     필요할때 마다 해당 주소를 찾아가
     원하는 값을 얻어오거나 수정할 수 있게 하는 것

     == 주소를 찾아 가는 것을 [참조] 라고 한다!!

     */

})

// 매개 변수로 요소 전달
function btn2bFn( el ) {
    // 매개변수 el (element) : 이벤트가 발생한 요소
    el.style.backgroundColor = "yellow";
 }



 // 매개변수로 함수 전달

 function print2(fn) {
    console.log(` a + b = ${fn(3,4)}`)
 }

 document.querySelector("#btn2c").addEventListener("click", function() {

    // 함수도 변수에 저장 가능! 변수명 == 함수명
    const sumFn = function(a, b) {
        return a + b; // 함수를 끝내고 호출한곳으로 되돌림
                    // + 값(a+b)을 가지고 호출한 곳으로 돌아감
    }

    // 전달인자로 함수를 전달
    print2(sumFn);

 })