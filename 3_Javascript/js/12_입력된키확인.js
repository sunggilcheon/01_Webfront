// 문자열.tolowerCase() : 영어를 모두 소문자로 변경 (A - a)
// 문자열.toUpperCase() : 영어를 모두 대문자로 변경 (a -> A)

// 화면에 존재하는 key 모두 얻어오기
const keys = document.querySelectorAll(".key");

// 문서(화면 전체)에서 키가 눌러지는걸 감지했을 때
document.addEventListener("keydown", function(e) {

    let idx; // 인덱스 값을 저장할 변수
  
    // 입력된 키를 소문자로 바꿔서 일치하는 case 실행
    switch(e.key.toLowerCase()) {
        case 'q' : idx = 0; break;
        case 'w' : idx = 1; break;
        case 'e' : idx = 2; break;
        case 'r' : idx = 3; break;
        default : return; // 함수 종료

    }

    // idx번호와 일치하는 keys 배열의 요소의 배경색을 변경
    keys[idx].style.backgroundColor = "deepPink"; 
})


// 키를 떼면 배경색 흰색으로 되돌리기
document.addEventListener("keyup" , function(e) {

    let idx; // 인덱스 값을 저장할 변수
  
    // 입력된 키를 소문자로 바꿔서 일치하는 case 실행
    switch(e.key.toLowerCase()) {
        case 'q' : idx = 0; break;
        case 'w' : idx = 1; break;
        case 'e' : idx = 2; break;
        case 'r' : idx = 3; break;
        default : return; // 함수 종료

    }

    // idx번호와 일치하는 keys 배열의 요소의 배경색을 변경
    keys[idx].style.backgroundColor = "white"; 
})