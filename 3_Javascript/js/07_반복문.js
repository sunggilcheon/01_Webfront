for (let num = 1; num <= 5; num++ ) {
    // 조건식이 True 인 경우 반복 수행할 코드
    console.log("통과");
}

function check1() {
    
    let result = ""; // 빈 문자열

    for(let num =1; num <=5; num++) {
        // console.log(num);

        result += num;
        // result = result + num;
        //   "1"  =   ""   +  1    (1번) 
        //   "12"  =   "1"   +  2    (2번) 
        //   "123" =   "12"   +  3    (3번) 
        //   "1234"  =   "123"   +  4    (4번) 
        //   "12345"  =   "1234"   +  5    (5번) 
    }

    console.log(result);
}

function check2() {
    //1부터 10까지 1씩 증가하며 출력

    for(let num=1; num <=10; num++) {

        console.log(num);

    }
}

function check3 () {

    for(let num=1; num <=20; num++) {

        console.log(num);
    }
}

function check4 () {

    for(let num=5; num <=15; num++) {

        console.log(num);
    }
}

function check5 () {

    for(let num=1; num <=30; num+= 2) {

        console.log(num);
    }
}
function check6 () {

    // 1부터 10까지 모든 정수의 합

    let sum = 0; // 합계를 저장하기 위한 변수
    for(let num=1; num <=10; num++) { //num 1~10 변함
        sum += num;
    }
    console.log(sum);
}


function sumFn() {

    const start = Number(document.getElementById("inputNumber1-1").value);
    const end = Number(document.getElementById("inputNumber1-2").value);
    
    //결과를 출력하기 위한 요소 얻어와 저장
    const result1 = document.getElementById("result1");

    // 합계를 저장할 변수
    let sum =0;

    // start부터 end까지 1씩 증가하는 for 문
    for(let num = start; num <= end; num++ ) {
        sum += num; // num 값을 sum 에 누적
    }

    result1.innerText = sum;

    
    
}
//입력 받은 범위 내에서 증감식 만큼 증가하며 모든 정수 출력하기
function executeFn2() {
    const start = Number(document.getElementById("inputNumber2-1").value);
    const end = Number(document.getElementById("inputNumber2-2").value);
    const val = Number(document.getElementById("inputNumber2-3").value);

    // 결과 출력할 ul 요소
    const ul = document.getElementById("result2"); //ul태그

    ul.innerHTML = ""; //이전 ul에 작성된 내용을 모두 삭제
    // start 부터 end 까지 val 씩 증가
    for(let num=start; num <= end; num += val){
        ul.innerHTML += `<li>${num}</li>`;
    }
    
}

// 요소 .innerText = `<li>$(num)</li>`;
// -> 요소의 내용으로 문자열을 대입
//  (HTML 태그를 해석하지 않고 문자열 그대로 보여줌)

// 요소.innerHTML = `<li>$(num)</li>`;
// -> HTML 태그를 해석해서 화면에 태그의 본 기능대로 출력