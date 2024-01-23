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