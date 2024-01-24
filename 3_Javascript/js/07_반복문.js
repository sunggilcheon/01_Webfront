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


// 입력 받은 단 출력하기
function executeFn3() {
    const input = Number(document.getElementById("input3").value);
    
    // 결과를 출력할 요소 ul태그
    const ul = document.getElementById("result3");

    ul.innerHTML = ""; //이전 내용 삭제

    // 입력 받은 단이 2~9 사이가 아닐 경우
    // "2~9 사이만 입력해주세요" 알림창 띄우기

    if(input < 2 || input > 9 ) {
        alert("2~9 사이만 입력해 주세요");
        return; // 함수를 종료하고 호출한 곳으로 돌아감
                // 함수 종료 정도로만 인식
    }

    for(let num = 1; num <= 9 ; num++) {

        ul.innerHTML += `<li>${input} x ${num} = ${input*num} </li>`;
    }


}

/* 다음 모양 출력하기
    12345
    12345
    12345
    12345
*/

function check8 () {
    
    // 4바퀴 반복하는 for문

    for(let y = 1; y <=4; y++) {
        
        // "12345" 출력하는 구문
        let str = "";
        for (let x =1; x<=5; x++) {
            str += x;
        }

        console.log(str);

    }
}

function check9 () {

    for(let y = 1; y <=5; y++) {

        let str2 = "";
        for (let x = 1; x<= y; x++) {

            str2 += x;
        } 
        
        console.log(str2);
    }
}

// while 문 확인

function check16() {
    

    // 변수를 선언만 해두기
    let val; // undefined

    // 취소를 누르기 전까지 반복
    // == 취소를 누르면 반복하지 않겠다

    while(val !== null) {

        // 동일 비교 연산자
        // A != B 값이 다른경우
        // !== -> 값, 자료형이 모두 다른경우 true 
        // === -> 값, 자료형이 모두 같은경우 true

        val = prompt("입력 후 확인"); // 변수에 prompt값 대입
        // 확인 -> 입력한 값
        // 취소 -> null

        console.log(val);

    }

}

//메뉴 주문하기

function check17() {
    

    // 메뉴 가격
    const gimbap = 3000;
    const ramen = 3500;
    const donkkaseu = 5000;

    //  주문 개수 카운트 변수
    let gCount = 0; //김밥
    let rCount = 0; //라면
    let dCount = 0; //돈까스

    // prompt로 입력한 값을 저장할 변수 선언
    let input; //undefined

    // 확인 -> 입력한 값
    // 취소 -> null

    while(input !== null) { // 취소 누르기 전까지 반복

        input = prompt("메뉴 번호를 입력하세요!");

        switch(input) {
            case "1" : gCount++; break;
            case "2" : rCount++; break;
            case "3" : dCount++; break;
            case null : alert("주문 완료!"); break;
            default : alert("메뉴에 작성된 번호만 입력해주세요"); break;
        }
        
    }

    alert(`김밥 : ${gCount}, 라면 : ${rCount}, 돈까스 : ${dCount}`);
    let sum = (gCount * gimbap) + (rCount * ramen) + (dCount * donkkaseu);

    alert(`총 가격 : ${sum} 원`);
}


//while을 for문 처럼 사용하기
function check18() {
    //1부터 10까지 출력

    let num = 1;
    while(num < 11) {
        console.log(num);
        
        num++;

    }

    console.log("-------------------------")

    // 10부터 1까지 1씩 감소 (while)

    let x = 10;
    while(x > 0 ) {
        console.log(x);
        x--;
    }
}