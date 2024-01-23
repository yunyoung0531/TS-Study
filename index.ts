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

function 내함수(x :number | string){
    if (typeof x === 'number') {
        return x + 1
    } 
    else if (typeof x === 'string') {
        return x + 1
    }
    else {
        return 0
    }
}

// 숫자여러개를 array 자료에 저장해놨는데
// 가끔 '4', '5' 이런 식의 문자타입의 숫자가 발견되고 있습니다.
// 이걸 클리닝해주는 함수가 필요합니다. 
// 클리닝함수( ['1', 2, '3'] ) 이렇게 숫자와 문자가 섞인 array를 입력하면
// [1,2,3] 이렇게 숫자로 깔끔하게 변환되어 나오는 클리닝함수를 만들어오고 타입지정까지 확실히 해보십시오.
function 클리닝(arr : (string | number)[]) {
    let result : number[] = [];
    for (let i = 0; i < arr.length; i++) {
        if (typeof arr[i] === 'string') {
            result.push(+arr[i]); 
        } else result.push(arr[i] as number);
    }
    return result;
}
console.log(클리닝([123,'3']));

let 철수쌤 = { subject : 'math' }
let 영희쌤 = { subject : ['science', 'english'] }
let 민수쌤 = { subject : ['science', 'art', 'korean'] }

function 과목(x: { subject : string | string[] }) {
    if (typeof x.subject === 'string') {
        return x.subject;
    } else if (Array.isArray(x.subject)){
        return x.subject[x.subject.length - 1];
    } else {
        return '없음';
    }
}
console.log(과목(민수쌤));



type 사람 = {
    name : string,
    age : number,
}

let teacher :사람 = { name : 'john', age : 20 } 

// 1. 이 타입은 object 자료형이어야합니다.
// 2. 이 타입은 color 라는 속성을 가질 수도 있으며 항상 문자가 들어와야합니다. 
// 3. 이 타입은 size 라는 속성이 있어야하며 항상 숫자가 들어와야합니다.
// 4. 이 타입은 position 이라는 변경불가능한 속성이 있어야하며 항상 숫자가 담긴 array 자료가 들어와야합니다.  
// type alias로 만들어보셈 

type 타입 = {
    color? : string,
    size : number,
    readonly position : number[]
}

// 1. 대충 이렇게 생긴 object 자료를 다룰 일이 많습니다. { name : 'kim', phone : 123, email : 'abc@naver.com' }
// 2. object 안에 있는 이름, 전화번호, 이메일 속성이 옳은 타입인지 검사하는 type alias를 만들어봅시다.
// 3. 각 속성이 어떤 타입일지는 자유롭게 정하십시오. 

type 사용자정보 = {
    name : string,
    phone : number,
    email? : string
}

let 정보 : 사용자정보 = {
    name : 'kim',
    phone : 123 
}

// 1. 숙제2와 똑같은데 이번엔 이름, 전화번호, 이메일, 미성년자여부 속성을 옳은 타입인지 검사하는 type alias를 만들어봅시다.
// 2. 미성년자 여부 속성은 true/false만 들어올 수 있습니다. 
// 3. 멋있게 숙제3에서 만들어둔 type alias를 재활용해봅시다.

type 어른 = { adult : boolean }

type newUser = 사용자정보 & 어른;

let 정보2 : newUser = {
    name : 'kim',
    phone: 123,
    adult : true
}