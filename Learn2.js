// BOM 
//Alert, Confirm, Prompt

// let confirMsg = confirm('are you sure?')
// //confirm

// if (confirMsg === true) {
//     console.log('item Deleted')
// } else{
//     console.log('item not deleted')
// }
// //Prompt
// let promptMsg = prompt('good day to you')
// console.log(promptMsg)

// BOM setTimeout / clearTimeout

// setTimeout(sayMsg, 3000)
 
// function sayMsg() {
//     console.log(`i am message for`)
// }
let yy = setTimeout(sayMsg, 3000, 'seif')
 
function sayMsg(user) {
    console.log(`i am message for ${user}`)
}

let btn = document.querySelector('button')

btn.onclick = ()=> {
    clearTimeout(yy)
}

//BOM setInterval / clearInterval


let div = document.querySelector('div')
function countdown() {
    div.innerHTML -= 1
    if (div.innerHTML === '0') {
        clearInterval(count)
    }
}
let count = setInterval(countdown , 1000)

// BOM location
//BOM open and close
//BOM  Scroll, ScrollTo, ScrollBy, Focus, Print, Stop
// window.onload = setInterval(() => {
//     window.scrollTo({
//     left:2000,
//     top:1600,
//     behavior: 'smooth'
// })
// },3000);

//BOM localStorage
//set
window.localStorage.setItem('color' , 'red')
window.localStorage.fontWeight
//get
console.log(window.localStorage.getItem('color'))

// Remove one
// window.localStorage.removeItem('color' , 'red')

//remove all (clear)
// window.localStorage.clear()

//get key
console.log(window.localStorage.key(0))

// set color in page
// document.body.style.backgroundColor = window.localStorage.getItem('color')
console.log(window.localStorage)
console.log(typeof localStorage)

// BOM session storage


//function
function sayhallo(username, age) {
    console.log(`hello ${username} your age is ${age}`)
}

sayhallo("seif" , 20)
function showInfo(us = 'un' , age = 'un' , rt = 0 , show = 'yes', ...sk) {
    document.write(`<div>`)
    document.write(`<h2>welcome</h2>, ${us}`)
    document.write(`<P>Age:${age}</P>`)
    document.write(`<P>hour rate:$${rt}</P>`)
    if (show === "yes") {
        if (sk.length > 0) {
            
            document.write(`<p>${sk}</p>`)
        }else {
            document.write(`<p>skills: no skills</p>`)
        }
    }else{
        document.write(`<p>skills is hidden</p>`)
    }
    document.write(`</div>`)
}

showInfo('seif' , 17 , 20 , 'no' , 'html','css')
theAge =  20
theAge < 20 
? console.log(20) : theAge> 20 && theAge < 60 
? console.log("20 to 60")
:theAge > 60 
? console.log('lager than 60')
: console.log('unknown')
// function challenge
function showDetails(a , b , c) {
    // name
   let names,ages,stuts
   if (typeof a === "string") {
    names = a
   } else if(typeof b === "string") {
    names = b
   }else {
    names = c
   }
   if (typeof a === "number") {
    ages = a
   } else if(typeof b === "number") {
    ages = b
   }else {
    ages = c
   }
   if (typeof a === "boolean") {
    stuts = a
   } else if(typeof b === "boolean") {
    stuts = b
   }else{
    stuts = c
   }
   return `"Hello ${names}, Your Age Is ${ages}, You Are ${stuts?'':'Not'} Available For Hire"`
}
// let Name,Age,Status;
//     if (typeof a==="string") {
//         Name=a;
//     } else if ( typeof b==="string"){
//         Name=b;
//     } else{
//         Name=c;
//     };
//     if(typeof a==="number"){
//         Age=a;
//     }else if (typeof b==="number"){
//         Age=b;
//     } else {
//         Age=c;
//     }
//     if (typeof a==="boolean"){
//         Status=a;
//     } else if (typeof b==="boolean"){
//         Status=b;
//     }else {
//         Status=c;
//     }
console.log(showDetails("Osama", 38, true));
console.log(showDetails(38, "Osama", true));
console.log(showDetails(true, 38, "Osama"));
console.log(showDetails(false, "Osama",38))
// document.write(`<p>my age: ${age}</p>`) 
// document.write(`<p>my hire: ${hire}</p>`)
// document.write(`<p>my name: ${name}</p>`)
let aa = 'number'
console.log(typeof aa)
// high order function (map)
let myNums = [1,2,3,4,5,6]

let newArray = []

for (let i = 0; i < myNums.length; i++) {
    newArray.push(myNums[i] + myNums[i])
}
console.log(newArray)
// same idea with map using arrow fuction
let addSelf = myNums.map((element, index , arr)=> {
    return element + element
} ,10)
// same idea with map using named fuction
function additon(ele) {
 return   ele + ele
}

let add = newArray.map(additon)
console.log(add)
//Map Practice
let swappingCases = 'elZERo'
let invertedNumbers = [1,-10,-20,15,100,-30]
let ignoreBooleans = 'elz123er4o'

let sw = swappingCases.split('').map((ele)=>{
    //CONdition ? true : false
    return ele === ele.toUpperCase() ? ele.toLowerCase() : ele.toUpperCase() 
}).join('')

let inv = invertedNumbers.map((ele)=>{
    return -ele  
})
console.log(inv)

// high order function (filter)
let friends = ['ahmad' , 'sameh' , "sayed" , 'alaa' , "shady"]

let numbers = [11,20,2,5,17,10]
//test map vs filter
let addMap = numbers.map((ele)=> { 
    return ele + ele
})
console.log(addMap)

let filteredFriends = friends.filter((el)=>{
    return el.startsWith('s')
})
console.log(filteredFriends)
let evenNumbers = numbers.filter((el) => {
    return el % 2 === 0
})
console.log(evenNumbers)

// filter Practice
let sentence = ' I Love Foood Code Too Playing Much'

let smallword = sentence.split(' ').filter((ele) =>{
    return ele.length <= 4
}).join(' ')
console.log(smallword)

let mix = 'A13BS2ZX'

let news = mix.split('').filter((ele)=>{
    return !isNaN(parseInt(ele)) 
}).map((ele)=>{
    return ele * ele
}).join('')
console.log(news)

// high order function (reduce)
let myNumss = [10,20,15,30]

let addd = myNumss.reduce((acc , crr , index , arr)=>{ // acc == first value / current == current element
    console.log(`acc => ${acc}`)
    console.log(`current => ${crr}`)
    console.log(`index => ${index}`)
    console.log(`array => ${arr}`)
    console.log(acc + crr)
    console.log(`#########`)
    return acc + crr
})
console.log(addd)
//test in  filter
let love = 'I LOVE YOU MAYAR i hate you mayar'
let msg = love.split('').filter((ele)=> {
    return ele.toLowerCase
}).join('')
console.log(msg)

let removeChars = ['E', '@' , 'L' , 'Z' , '@' , '@' ,'E' , 'R' , '@' , 'O']

let finalString = removeChars.filter((ele) =>{
    return !ele.startsWith('@')
}).reduce((acc,curr)=>{
    return`${acc}${curr}`
})
console.log(finalString)

// high order function (forEach)
 
//high order function  challenge


let myString = "1,2,3,EE,l,z,e,r,o,_,W,e,b,_,S,c,h,o,o,l,2,0,Z";

let solution = myString.split(",").filter(function (ele) {
    return isNaN(parseInt(ele))
}).map(function (ele) {
    return ele[+false].split("_")
}).reduce(function (acc, curr, i, arr) {
    return acc + curr
}).split(",").join(" ").slice(+false, -true)

console.log(solution)
// Destructuring 
// let a = 1
// let b = 2
// let c = 3
// let d = 4

// let myFriends = ['ahmad' , 'seif' , "alaa" , "shady"]

// [a ,b ,c ,d] = myFriends;

// console.log(a)
// console.log(b)
// console.log(c)
// console.log(d)

let arrayy = ['ahmads','seif', 'yossef' , 'mazin' , 'moataz']

let newOne = arrayy.filter((names)=>{
    return names.length >= 5
}).join(' ')
arrayy.forEach((newOne) => {
    document.body.appendChild(document.createTextNode(`hello ${newOne}` + '<br>'))
});
console.log(newOne)

//Destructuring Arrays 

let friendss = ['ahamd','sayed','ali',['shady' , 'amr', ['mhamd' , 'gamal']]]
let [,,,[a , , [ , b]]] = friendss 


console.log(a);
console.log(b);
//swapping

let book = 'Video';
let video = 'book';

//before use Destructuring
// let stash = book // video

// book = video
// video = stash

//after use Destructuring

[book , video] = [video , book];

console.log(book);
console.log(video);

//Destructuring objects
const user = {
  theName : 'seif',
  theAge : 16
};

({theName:a , theAge, theColor = 'red'} = user);

console.log(a);
console.log(theAge);
console.log(theColor);

// Destructuring Challenge 

let chosen = 2;

let myFriends = [
  { title: "Osama", age: 39, available: true, skills: ["HTML", "CSS"] },
  { title: "Ahmed", age: 25, available: false, skills: ["Python", "Django"] },
  { title: "Sayed", age: 33, available: true, skills: ["PHP", "Laravel"] },
];

let myFriend = myFriends[chosen-1];

function showIno({title, age, available, skills:[ ,skills]}) {
   console.log(`Title: ${title}`);
   console.log(`Age: ${age}`);
   console.log(
     `Available: ${available == true ? "availbale" : "Not availbale"}`
   );
   console.log(`Skills: ${skills}`);
}

showIno(myFriend)


// Set Data Types And Methods

let Data = [1,1,1,2,3, 'a']
let newData = new Set(Data)
console.log(Data);
console.log(newData);
newData.delete(2)
console.log(newData);
console.log(newData.has('a'));

// Set vs WeakSet And Garbage Collector

// type of data

let iu = new Set([1,1,2,3,4,'a','a'])

console.log(iu)

let iterator = iu.keys()

console.log(iterator)

//Regular Expressions
//Ranges 

let tld = 'Con Net Org Info Code Io'

let tldRe = /(org|info|io)/i
console.log(tld.match(tldRe));

let nums = '12345678910'
let numsRe = /[0-9]/g
console.log(nums.match(numsRe));
let notNums = '12345678910'
let notNumsRe = /[^0-2]/g
console.log(notNums.match(notNumsRe));

let practices = 'os1 os12 os8s os8os'
let practicesRe =/os[5-9]os/
console.log(practices.match(practicesRe));
let namees = 'sayed 1Spam 2Spam 3Spam spam4 osama ahmad Aspamo'
let re =/(\bspam|spam\b)/ig
console.log(namees.match(re));
/*
  Regular Expression
  Character Classes
  . => matches any character, except newline or other line terminators.
  \w => matches word characters. [a-z, A-Z, 0-9 And Underscore]
  \W => matches Non word characters
  \d => matches digits from 0 to 9.
  \D => matches non-digit characters.
  \s => matches whitespace character.
  \S => matches non whitespace character.
  \b => matches at the beginning or end of a word.
  \B => matches NOT at the beginning/end of a word.
*/

//Quantifiers 
/*
 Quantifiers
  n+    => One Or More
  n*    => zero or more
  n?    => zero or one
  $  => End With Something
  ^  => Start With Something
  ?= => Followed By Something
  ?! => Not Followed By Something
 */
let dig = '0110 10 150 05120 360 00'
let diGre = /0\d*0/ig
console.log(dig.match(diGre))
let serials = 'S100S s3000s s50000s s950000s'

console.log(serials.match(/s\d{3}s/ig)); //s[three numbers]s
console.log(serials.match(/s\d{4,5}s/ig)); //s[four or five number]s
console.log(serials.match(/s\d{4,}s/ig)); //s[at least four]s

/*
  Regular Expression

  - replace
  - replaceAll
*/
// TEST in Regular Expression
document.getElementById('re').onsubmit = ()=> {
    let phoneInput = document.getElementById('phone').value
    let phoneRe = /\d{5}\s\d{4}\s\d{3}/
    let rr = phoneRe.test(phoneInput)
    if (rr === false) {
        return false
    }
    return true
}
// Regular Expressions - Challenge

let url1 = 'elzero.org';
let url2 = 'http://elzero.org';
let url3 = 'https://elzero.org';
let url4 = 'https://www.elzero.org';
let url5 = 'https://www.elzero.org:8080/articles.php?id=100&cat=topics';

let rer =  /(^\w+:?)(\/\/)?(\w+.)?\S+/ig; 

console.log(url1.match(rer));
console.log(url2.match(rer));
console.log(url3.match(rer));
console.log(url4.match(rer));
console.log(url5.match(rer));

//OOP 
// Class Inheritance
class User {
    constructor(id, username){
        this.i = id
        this.u = username
    }
    sayhallo() {
        return `hello ${this.u}`
    }
}

class Admin extends User{
    constructor(id,username,premassion){
        super(id,username)// to Inheritance from any object
        this.p = premassion
    }
}

let userOne = new User(100, 'seif')
let adminOne = new Admin(110 , 'seifo',1)
console.log(userOne);
console.log(adminOne);

// Class Encapsulation
// to make private property add # before name of property

class superer extends Admin {
    #e;
    constructor(id,username,salary ,premassion) {
        super(id,username,premassion)
        this.#e = salary
    }
    getSalary(){
        return parseInt(this.#e)
    }
}
let userThree = new superer(120,"ahmad",'5000 gneh', 1 )
console.log(userThree);
console.log(userThree.getSalary() * 0.3);
// prototype
User.prototype.saywelcome = ()=>{
    return `welcome ${this.u}`
}

Object.prototype.love = 'seif ahmad' // to add anyThing to prototype to all objacts

// Object Meta Data And Descriptor
const myObject = {
    a:1,
    b:2
}
Object.defineProperty(myObject, 'c', {
    writable: true,
    enumerable: true,
    configurable: true,
    value: 3
})
console.log(myObject.c);
console.log(myObject);

/*
  Generators
  - Generator Function Run Its Code When Required.
  - Generator Function Return Special Object [Generator Object]
  - Generators Are Iterable
*/

function* generateNumbers() {
  yield 1;
  console.log("Hello After Yield 1");
  yield 2;
  yield 3;
  yield 4;
}

let generator = generateNumbers();

console.log(typeof generator);
console.log(generator);

console.log(generator.next());
console.log(generator.next());
console.log(generator.next());
console.log(generator.next());
console.log(generator.next());

// for (let value of generateNumbers()) {
//   console.log(value);
// }

// for (let value of generator) {
//   console.log(value);
// }

/*
  Generators
  - Delegate Generator
*/

function* generateNums() {
  yield 1;
  yield 2;
  yield 3;
}

function* generateLetters() {
  yield "A";
  yield "B";
  yield "C";
}

function* generateAll() {
  yield* generateNums();
  yield* generateLetters();
  yield* [4, 5, 6];
}

let generatorr = generateAll();

console.log(generatorr.next());
console.log(generatorr.next());
console.log(generatorr.next());
console.log(generatorr.next());
console.log(generatorr.next());
console.log(generatorr.next());
console.log(generatorr.return("Z"));
console.log(generatorr.next());
console.log(generatorr.next());
console.log(generatorr.next());

/*
  Generators
  - Generate Infinite Numbers
  - Use Return Inside Generators
*/

function* generateNumbers() {
  // yield 1;
  // yield 2;
  // return "A";
  // yield 3;
  // yield 4;
  let index = 0;

  while (true) {
    yield index++;
  }
}

let generatoer = generateNumbers();

console.log(generatoer.next());
console.log(generatoer.next());
console.log(generatoer.next());
console.log(generatoer.next());

//Modules Import And Export
// import { a, arr, saySomething as s } from "./main.js";

// console.log(a);
// console.log(arr);
// console.log(s());

//JSON Parse And Stringify
/*
  JSON
  - JSON.parse => Convert Text Data To JS Object
  - JSON.stringify => Convert JS Object To JSON
*/

// Get From Server
const myJsonObjectFromServer = '{"Username": "Osama", "Age": 39}';
console.log(typeof myJsonObjectFromServer);
console.log(myJsonObjectFromServer);

// Convert To JS Object
const myJsObject = JSON.parse(myJsonObjectFromServer);
console.log(typeof myJsObject);
console.log(myJsObject);

// Update Data
myJsObject["Username"] = "Elzero";
myJsObject["Age"] = 40;

// Send To Server
const myJsonObjectToServer = JSON.stringify(myJsObject);
console.log(typeof myJsonObjectToServer);
console.log(myJsonObjectToServer);

//Promise 

const myPromise = new Promise((succes, rejacted)=> {
    let connect = false
    if (connect) {
        succes('connect established')
    }else{
        rejacted(Error('connecation field'))
    }
}).then(
    (succes) => console.log(`good ${succes}`),
    (rejacted) => console.log(`bad ${rejacted}`)
)

console.log(myPromise);

//Promise - Then, Catch And Finally

/*
  Promise Training

  We Will Go To The Meeting, Promise Me That We Will Find The 4 Employees
  .then(We Will Choose Two People)
  .then(We Will Test Them Then Get One Of Them)
  .catch(No One Came)

  Then    => Promise Is Successfull Use The Resolved Data
  Catch   => Promise Is Failed, Catch The Error
  Finally => Promise Successfull Or Failed Finally Do Something
*/

const myPromisee = new Promise((resolveFunction, rejectFunction) => {
  let employees = ['seif' ,'shady' , 'ahmad' , 'ahmad'];
  if (employees.length === 4) {
    resolveFunction(employees);
  } else {
    rejectFunction(Error("Number Of Employees Is Not 4"));
  }
});

myPromise
  .then((resolveValue) => {
    resolveValue.length = 2;
    return resolveValue;
  })
  .then((resolveValue) => {
    resolveValue.length = 1;
    return resolveValue;
  })
  .then((resolveValue) => {
    console.log(`The Choosen Emplyee Is ${resolveValue}`);
  })
  .catch((rejectedReason) => console.log(rejectedReason))
  .finally(console.log("The Operation Is Done"));



/*
  Promise And XHR
*/

let getData = (apiLink) => {
  return new Promise((resolve, reject) =>{
  let myRequest = new XMLHttpRequest();
     myRequest.onload = function () {
      if (this.readyState === 4 && this.status === 200) {
        resolve(JSON.parse(this.responseText));
      } else {
        reject(Error("No Data Found"));
      }
    }
    myRequest.open("Get" , apiLink)
    myRequest.send()
  })
}
getData("https://api.github.com/users/TocxiSeifo/repos")
  .then((result) => {
    result.length = 10;
    return result;
  }).then((result) => console.log(result[0].name))
  .catch((rej) => console.log(rej));

  /*
  Fetch API
  - Return A Representation Of the Entire HTTP Response
*/

fetch("https://api.github.com/users/TocxiSeifo/repos")
  .then((result) => {
    console.log(result);
    let myData = result.json();
    console.log(myData);
    return myData;
  })
  .then((full) => {
    full.length = 10;
    return full;
  })
  .then((ten) => {
    console.log(ten[0].name);
  });

  /*
  Promise
  - All
  - All Settled
  - Race
*/

const myFirstPromise = new Promise((res, rej) => {
  setTimeout(() => {
    res("Iam The First Promise");
  }, 5000);
});

const mySecondPromise = new Promise((res, rej) => {
  setTimeout(() => {
    rej("Iam The Second Promise");
  }, 1000);
});

const myThirdPromise = new Promise((res, rej) => {
  setTimeout(() => {
    res("Iam The Third Promise");
  }, 2000);
});

// Promise.all([myFirstPromise, mySecondPromise, myThirdPromise]).then(
//   (resolvedValues) => console.log(resolvedValues),
//   (rejectedValue) => console.log(`Rejected: ${rejectedValue}`)
// );

// Promise.allSettled([myFirstPromise, mySecondPromise, myThirdPromise]).then(
//   (resolvedValues) => console.log(resolvedValues),
//   (rejectedValue) => console.log(`Rejected: ${rejectedValue}`)
// );

Promise.race([myFirstPromise, mySecondPromise, myThirdPromise]).then(
  (resolvedValues) => console.log(resolvedValues),
  (rejectedValue) => console.log(`Rejected: ${rejectedValue}`)
);

// Async And Training 
// asynce return promise form any function

async function iAm() {
  let users = ['seif']
  if (users.length > 0) {
    return 'Users found'
  }else{
    return Error('no users found')
  }
}
console.log(iAm());

// Await And Training

let myPromises = new Promise((succes , reject)=>{
  setTimeout(() => {
    reject(Error('i am a bad promise'))
  }, 3000);
})

async function readData() {
  console.log('Before promise');
  console.log(await myPromises.catch((err) => err));
  console.log('after promise');
}
readData()