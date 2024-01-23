let 이름 :string = 'choi';
let 나이 = 24;
let 고향 = "광주광역시";

let 가수 = { songName: "newday", singer: "폴킴"}

let project :{ member : [string, string], days : number, started : boolean } = {
    member : ['kim', 'park'],
    days : 30,
    started : true,
}

let user :string = 'kim';
let age :(undefined | number) = undefined;
let married :boolean = false; 
let 철수 :(string | undefined | number | boolean)[] = [user, age, married];

let 학교 :{ score : (number | boolean)[], teacher : string, friend : string | string[] } = {
    score : [100, 97, 84],
    teacher : 'Phil',
    friend : 'John'
}
학교.score[4] = false;
학교.friend = ['Lee' , 학교.teacher]

function double(x : number) : number {
    return x * 2;
}

double(2);

function hello(name?: string) : void {
    if (name) {
        console.log(`안녕하세요 ${name}님`);
    } else {
        console.log('이름이 없습니다.');
    }
}

hello('최윤영')

// 함수에 숫자 또는 문자를 집어넣으면 자릿수를 세어 출력해주는 함수를 만들어보십시오.
function numLength(num: (string | number)) : number {
    if (typeof num === "number") {
        return num.toString().length;
    }
    return num.length;
}

// 결혼 가능 확률을 알려주는 함수를 만들어봅시다.
// 1. 함수의 파라미터로 월소득(만원단위), 집보유여부(true/false), 매력점수 ('상' or '중' or '하') 를 입력할 수 있어야합니다. 
// 2. 월소득은 만원 당 1점, 집보유시 500점 & 미보유시 0점, 매력점수는 '상'일 때만 100점으로 계산합니다. 
// 3. 총 점수가 600점 이상일 경우 "결혼가능"을 return 해줘야합니다. 그 외엔 아무것도 return하지 않습니다.
// (예시)
// 결혼가능하냐(700, false, '중') 이렇게 사용할 경우 "결혼가능"을 return 해줍니다.
// 결혼가능하냐(100, false, '상') 이렇게 사용할 경우 아무것도 return되지 않습니다.
function 결혼가능하냐(money :number, house :boolean, charm :string) :string | void {
    let score :number = 0;
    score += money;
    if (house === true){
        score += 500
    }
    if (charm === '상'){
        score += 100
    }
    if (score >= 600){
        return '결혼가능'
    } 
}

결혼가능하냐(700, false, '중')