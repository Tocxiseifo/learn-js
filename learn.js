// function demo () {
//     document.write('my first function is called')
// }
// demo()

function greting(name) {
    document.write('hello' + name + 'welcome to our company.' + '<br>')
}

let user = ['mhamad' , 'seif' , 'youssef' , 'alaa']
let names = Math.floor(Math.random() * user.length)
let randomusers = user[names]

greting(randomusers)

// function getSum(a,b){
//     return a + b
// }
// x = getSum(3 , 5)

// document.write('x = ' + x)                       

function greeting(name , language = 'English') {
    switch (language) {
        case 'English':
            document.write(`hello ${name}, welcome to harmsh.com <br>`)
            break;
        case 'french': 
              document.write(`Bonjour ${name}, bienvenue sur harmash.com <br>`)
            break;
    }
}

greeting('mhamd')

greeting('mhamd' , 'french')
 
function printAll(...args) {
    for(let e of args) {
        document.write(e + '<br>')
    }
}
printAll(1,2,3,4,5,6,7,8,9,10)


function printSum(...values) {
    let total = 0
    for (let val of values) {
        total += val
    }
    document.write('total sum = ' + total)
}

printSum(1,2,3,4,5)

function printUserScore(user,...points) {
    let total = 0;

    for (let point of points) {
        total+= point;
    }
    
    document.write(`${user} score is: ${total}`)
}
printUserScore('mhamad' ,3,4,5,2,6)

let greet = function (name) {
    document.write('hello' + name + '<br>')
}

greet('mhamd')

declaration()

function declaration() {
    document.write('the declaration function is called. <br>');
}

// expression()

let expression = function() {
    document.write('the expression function is called.<br>')
}

let x = 1;

function printX() {
    document.write('global x =' + x)
} 

printX()
let y = 1;

function printY() {
    let y = 5;
    document.write('local y = '+ y + '<br>');
}

printY()
document.write('Global y = ' + x );

let e = 1;

function printBoth() {
    let _e = 5;
    document.write('Local e =' + _e + '<br>')
    document.write('Global e =' + e + '<br>')
}

printBoth()

//arrow function

demo = () => {
    document.write('my arrow function is called')
}
demo()


get = (name) => {
    document.write('hello ' + name +', welcome to our company')
}

get('mhamad')

getting = name => document.write('hello' + name +'welcome  to my company')

getting('seif')

getMassage = name => {
    return 'hello' + name
}
document.write(getMassage('alaa'))


great = (name , language = 'english') =>{
    switch (language) {
        case 'english':
            document.write(`hello ${name}, welcome here <br>`)
            break;
        case 'french':
            document.write(`Bonjour ${name}, bienvenue sur here <br>`)
            break;
    }
}
great('seif')

great('seif' , 'french')

// Objects
// to get any content in object we use objectName.propertyName
let person = {
    id: 1024,
    username: 'seif',
    isWorking: true
};

document.write('id = ' + person.id + '<br>')
document.write('username = ' + person.username + '<br>')
document.write('isWorking = ' + person.isWorking + '<br>')

let book = {
    author: ' seif ahmed',
    title: 'learn js',
    totalPages:340,
    'publication date':  '6 August 2023' 
}
document.write('author = ' + book.id + '<br>')
document.write('title = ' + book.title + '<br>')
document.write('totalPages= ' + book.totalPages + '<br>')
document.write('publication date = ' + book["publication date"]  + '<br>')


// using function through objects
let rectangle = {
    description: ' a rectangle is a quadrilateral with four right angles <br>',
    getPerimeter: function (length , width) {
        return length * width
    }
};

document.write('Rectangle description = ' +rectangle.description)
document.write('Rectangle getPerimeter = ' +rectangle.getPerimeter(4,6))

//nested object

let _user = {
    id: 1024,
    username: 'moataz',
    job: {
        title:'programmer',
        experienceYears: 3 
    }
};
document.write('username = ' + _user.username + '<br>')
document.write('job.title = ' + _user.job.title+ '<br>')

//this

let ana = {
    firstname:'seif',
    lastname: 'ahmed',
    fullname: function() {
        return this.firstname + ' ' + this.lastname
    }
};

document.write('fullName = ' + ana.fullname())
document.write(this.location.href) // this == window

// try,catch,finally and throw

let u = 10

try{
    document.write(u.toUpperCase())
}
catch(error) {
    // سيتم طباعة نوع الخطأ و رسالة الخطأ try إذا حصل أي خطأ في الكود الموضوع في الجملة
    document.write('Error-type: ' + error.name + '.<br>');
    document.write('Error-message: ' + error.message + '.<br>');
}

document.write('The rest of code will be executed');

let l = 10;

try {
    // لأحرف كبيرة الأمر الذي سيسبب خطأ x هنا حاولنا تحويل قيمة 
    document.write(l.toUpperCase());
}
catch(error) {
    // سيتم تنفيذ الأمر التالي try إذا حصل أي خطأ في الكود الموضوع في الجملة
    document.write('Failed to convert the value of l.<br>');
}
finally {
    // أو لم يحصل try الأمر التالي سيتم تنفيذه سواء حصل خطأ في الجملة
    document.write('Finally code is executed now.<br>');
}

// الأمر التالي سيتنفذ بشكل طبيعي لأن الخطأ الذي وقع قبله تم معالجته
document.write('The rest of code will be executed.');

let _x = -3

try {
    if (_x < 0) {
        throw '_x value cannot be negative'
    }else{
        document.write('_x value is accepted.<br>');

    }
} catch (error) {
    document.write('Error: ' + error + '<br>')
}

document.write('the rest of code will be executed')

// OOP
// class Person{
//     name;
//     job;
//     age;
//     // constructor
//     // must use *this* while using constructor inside object
//     constructor(name, job , age) {
//     this.name = name
//     this.job = job
//     this.age = age
//     }
//     // must use *this* while using function inside object
//     printInfo() {
//         document.write('Name: ' + this.name + '<br>');
//         document.write('Job: ' + this.job + '<br>');
//         document.write('Age: ' + this.age + '<br>');
//     }
// } 

// p = new Person()

// p.name = 'seif';
// p.job = 'programmer';
// p.age = 29

// p.printInfo()

class Person {
			// هنا قمنا بتعريف كونستركتور الكلاس و قد وضعنا قيمة إفتراضية لكل باراميتر فيه
			constructor(name = 'unknown', job = 'unknown', age = 0) {
				this.name = name; // name سيتم وضعها في الخاصية name القيمة التي يتم تمريرها في الباراميتر
				this.job = job;  // job سيتم وضعها في الخاصية job القيمة التي يتم تمريرها في الباراميتر
				this.age = age;  // age سيتم وضعها في الخاصية age القيمة التي يتم تمريرها في الباراميتر
			}

			// مهمتها طباعة قيم الخصائص عندما يتم استدعائها printInfo هنا قمنا بتعريف دالة إسمها
			printInfo() {
				document.write('Name: ' + this.name + '<br>');
				document.write('Job: ' + this.job + '<br>');
				document.write('Age: ' + this.age + '<br><hr>');
			}
		}

		// p1 إسمه Person هنا قمنا بإنشاء كائن من الكلاس
		p1 = new Person();

		// p2 إسمه Person هنا قمنا بإنشاء كائن من الكلاس
		p2 = new Person('Mhamad', 'Programmer', 29);

		// لطباعة قيم خصائصهما p2 و p1 من الكائنين printInfo() هنا قمنا باستدعاء الدالة
		p1.printInfo();
		p2.printInfo();

// oop static function

class physics {
    static calcSpeed(distance , time) {
        return distance/time
    }
}

document.write('speed =' + physics.calcSpeed(210 , 3) + '<br>')

// canot get the static function from the object inside the class but you can calling from the class itself

//calling static function from another static function

class mathh {
    static calcoSpeed(distance , time) {
        return distance/time
    }
    static printSpeed(distance , time) {
        document.write('speeded = ' + mathh.calcoSpeed(distance , time) + '<br>')
    }
}

mathh.printSpeed(210 , 3)

// calling static function from constructor
class Demo {
    constructor() {
        // any syntax inside constructor is properties
        Demo.ana()
    }
    static ana() {
        document.write('ana() is executed' + '<br>');

    }
}
new Demo()

class anaa {
    #name;
    #job;
    #age;


    getName(){
        return this.#name
    }

    setName(name){
        this.#name = name
    }
    getJob(){
        return this.#job
    }

    setJob(job) {
        this.#job = job
    }

    getAge() {
        return  this.#age
    }

    setAge(age) {
        this.#age = age
    }
}

p = new anaa()

p.setName('seif ahmad')
p.setJob('Full stack developer')
p.setAge(29)
document.write('Name: ' + p.getName() + '<br>');
document.write('Job: ' + p.getJob() + '<br>');
document.write('Age: ' + p.getAge() + '<br>');


// oop update ex

class User {
    constructor(id , username , salary) {
        this.i = id
        this.u = username
        this.s = salary
    }
    updateName(newName){
        this.u = newName
    }
}

let userone = new User(100, 'Tayf' , 6500)
console.log(userone.u)
userone.updateName('seif')
console.log(userone.u)

class You {
    #name;
    #job;
    #age;

     get name() {
                return this.#name;
            }
            
            // #name هنا قمنا بتجهيز دالة يمكن من خلالها تعيين قيمة الخاصية
            set name(name) {
                this.#name = name;
            }

    get job() {
        return this.#job
    }

    set job(job) {
        this.#job = job
    }

    get age() {
        return this.#age
    }

    set age(age) {
        this.#age = age
    }
}

p = new You()

p.name = 'Mhamad';
p.job = "fornt-end"
p.age = 19

document.write('Name: ' + p.name + '<br>');
document.write('Job: ' + p.job + '<br>');
document.write('Age: ' + p.age + '<br>');
console.log(You)


//oop inheritance
// TO inheritance we must use *extend* next to the name of class and use *super()* we typing it inside the objact

class Admin extends User {
    constructor(id , username , salary , permissions) {
        super(id , username ,salary)
        this.p = permissions
    }
}

//oop Encapsulation
// To Encapsulation we use *#* ex= this.#e = .... 

class Moaz {
    #e // we declared here
    constructor(id , username , eSalary) {
        this.i = id
        this.u = username
        this.#e = eSalary // to prevant errors we must  declared out the constractor
    }
    getSalary() {
        return parseInt(this.#e)
    }
}

let UserTwo = new Moaz(251 , "moaz" , "5650 Gneh")

console.log(UserTwo.getSalary() * 3)
//example about Encapsulation and inheritance

class Monetor extends Moaz{
    constructor(id , username , exparinece , esalary) {
        super(id , username , esalary)
        this.ex = exparinece
    }
    getex() {
        return this.getSalary()
    }
}
let UserTHree = new Monetor(168 , "seif" , '4 years' , '5500 gneh')
console.log(UserTHree.getex() *2)

// Prototype

// Add To Prototype Chain And Extend Constructors Features
// syntax is *method.prototype.propartyname*

// Object Meta Data And Descriptor
// syntax *objact.defineProparty(objact name ,'' )*

let myObject = {
    a: 1,
    b:2
}

Object.defineProperty(myObject, "c",{
    writable: false,
    enumerable:true,
    configurable:false,
    value:3,
})
// Object.defineProperty(myObject, "c",{
//     writable: false,
//     enumerable:true,
//     configurable:true, // Cannot redefine property  
//     value:3,
// })

myObject.c = 150

console.log(myObject);

for (let prop in myObject) {
   console.log(prop, myObject[prop]);
}
console.log(myObject)

youobjact = {
    a:1,
    b:6
}
Object.defineProperties(youobjact, {
    c: {
        configurable: true,
        value: 3
    },
    d: {
        configurable: true,
        value: 4
    },
    e: {
        configurable: true,
        value: 5
    }
})
console.log(youobjact)

console.log(Object.getOwnPropertyDescriptor(youobjact,"d"))
console.log(Object.getOwnPropertyDescriptors(youobjact))

// date and time
let dateNow = new Date()
console.log(dateNow)

// get and set Date And Time methods

let birthday =  new Date("nov 6, 2008")
let datediff = dateNow - birthday
console.log(datediff /1000 / 60 / 60 / 24)
let mine = birthday / 365
 console.log(mine)
console.log(dateNow.getTime()) // give you the time by mili sac
console.log(dateNow.getDate()) // give you the current day
console.log(dateNow.getFullYear()) // give you the current year
console.log(dateNow.getMonth()) // give you the current month this method start from index zero
console.log(dateNow.getDay()) // give you the current day this method start from index zero

// Formatting Date And Time
// start Time
let start = new Date()

//operation

// for (let i = 0; i < 1001; i++) {
//     let div = document.createElement("div")
//     div.appendChild(document.createTextNode(i))
//     document.body.appendChild(div)
// }

// end time
let end = new Date()

let delay = end - start
console.log(delay)

// Generator Function Introduction

function* generatNumbers() {
    yield 1
    // alert('hello there')
    yield 2
    yield 3
    yield 4
}
let generator = generatNumbers()

console.log(typeof generator)
console.log(generator)
console.log(generator.next())
console.log(generator.next())
//DOM

// console.log(document.getElementsByTagName("p")[0].attributes)

// let myp = document.getElementsByTagName("p")[0]

// if(myp.hasAttribute('data-src')) {
//     if (myp.getAttribute('data-src') === '') {
//         myp.removeAttribute("data-src")
//     }else{
//         myp.setAttribute("data-src",'new va;ue')
//     }
// }else{
    
//     console.log("not found")
// }


// if(myp.hasAttributes()) {
// console.log(`has attributes`)
// }
// dom create/ appendchild
let myelemant = document.createElement('div')
let myattr = document.createAttribute('data-custom')
let mytext = document.createTextNode('product one')

let mycomm = document.createComment('this is div')
myelemant.setAttributeNode(myattr)
myelemant.className = 'product'
myelemant.setAttribute("name" , 'seif ahmad')
//append text

myelemant.appendChild(mytext)




if(myelemant.hasAttributes()) {
    console.log(`has attributes ${myattr}`)
}

console.log(myelemant)

let seif = document.createElement('p')
console.log(seif)

// for (let i = 0; i < 1001; i++) {
//     let you = document.write('i love yoou ya yorty' + '<br>')
// }

myelemant.appendChild(mycomm)
// append element to body
document.body.appendChild(myelemant)



let div = document.createElement('div')
let heading = document.createElement('h2')
let para = document.createElement('p')
let mytextt = document.createTextNode('i did itttttt')
let mytexttt = document.createTextNode('i did itttttt')
div.className = 'product'
div.appendChild(heading)
div.appendChild(para)
heading.appendChild(mytextt)
para.appendChild(mytexttt)
console.log(div)
// let namess = 'seif' 
// let me = document.createElement('div')
// let meet = document.createElement('h2')
// let rnet = Math.floor(Math.random() * namess.length)
// let rr = namess[rnet]
// let massat = document.createTextNode(`hi i am sesso and i want to say something to my buetiful princess`)
// me.appendChild(meet)
// meet.appendChild(massat)
// me.style.color = 'red'
// document.body.appendChild(me)
// meet.style.display = 'flex'
// meet.style.alignItems = 'center'
// meet.style.justifyContent = 'center'
// for (let i = 0; i < 101; i++) {
//     let may = document.createElement("div")
//     let love = document.createElement("h2")
//     let lovemassege = document.createTextNode('I Love you ya a7ly Mayar') 
//     may.appendChild(love)
//     love.appendChild(lovemassege)
//     document.body.appendChild(may)
//     may.style.display = 'flex'
//     may.style.justifyContent = 'center'
//     may.style.color = 'red'
//     may.style.fontSize = '25px'
// }


// DOM EVENT

let userInput = document.querySelector('[name = "username"') 
let AGEInput = document.querySelector('[name = "age"') 
document.forms[0].onsubmit = (e)=> {
  let uservalid = false
  let agevalid = false
    console.log(userInput.value)
    console.log(userInput.value.length)

  if (userInput.value !== '' && userInput.value.length <= 10) {
    console.log("valid")
    uservalid = true
  }
  if (AGEInput.value !== '') {
    agevalid = true
  }

  if (uservalid === false || agevalid === false) {
    e.preventDefault()
  }
}

document.links[0].onclick = (event)=>{
    console.log(event)
    event.preventDefault()
} 

// DOM focus bluer click
let one = document.querySelector('.one')
let two = document.querySelector('.two')

window.onload = ()=> {
    two.focus()
}

one.onblur = ()=> {
    document.links[0].click()
}

// DOM classlist

let elemant = document.getElementById('my-div')


// DOM classlist

console.log(elemant.classList)
console.log(typeof elemant.classList)
console.log(elemant.classList.contains('one'))
console.log(elemant.classList.item('one'))

elemant.onclick = ()=> {
    elemant.classList.add('ADD-ONE' , 'add-two')
    elemant.classList.toggle('ADD-ONEE') // TOGGLE add and remove
}
console.log(elemant)
//
document.body.appendChild(elemant)

let maya = document.createElement('div')
let lovolyh = document.createElement("h2")
let lovolyhh = document.createElement("h2")
let lovoly = document.createTextNode('yes i loooooove my beuteful princessss')
let nlovoly = document.createTextNode(' no i donot love mayar')
maya.appendChild(lovolyh)
maya.appendChild(lovolyhh)
lovolyh.appendChild(lovoly)
lovolyhh.appendChild(nlovoly)
maya.style.display = 'flex'
maya.style.justifyContent = 'center'
maya.style.alignItems = 'center'
maya.style.textAlign = 'center'
lovolyh.style.marginRight = '50px'
lovolyhh.onclick = ()=> {
    if (lovolyhh.onclick = true) {
        let lier = document.createElement('h1')
        let liermass = document.createTextNode('nooooo you are a big lier you love your princess mayar donot lied agein you hear')
        lier.appendChild(liermass)
        document.body.appendChild(lier)
        lovolyhh.style.color = 'red'
        lier.style.display = 'flex'
        lier.style.justifyContent = 'center'
        lier.style.marginLeft = '150px'
        lier.style.alignItems = 'center'
        lier.style.color = 'red'
    }
}
lovolyh.onclick = ()=> {
    if(lovoly.onclick = true ){
        let truee = document.createElement('h1')
        let truemass = document.createTextNode( )
        truee.appendChild(truemass)
        document.body.appendChild(truee)
        lovolyh.style.color = 'green'
        truee.style.display = 'flex'
        truee.style.justifyContent = 'center'
        truee.style.marginLeft = '150px'
        truee.style.alignItems = 'center'
        truee.style.color = 'green'
    }
}
console.log(maya)
document.body.appendChild(maya)
//DOM style
maya.style.cssText ='' // all css can wrote here
document.body.style.setProperty('background-Color' , 'black')
document.body.style.removeProperty('background-Color' , 'black')

let createdp = document.createElement('p')
//DOM append /prepend /remove /before/after
elemant.append('helloo')// put item at the end
elemant.prepend('helloo')// put item at the start
// elemant.remove()// remove item completly

// DOM travlling
//nextsibling / previoussibling /nextsiblingelemant / previoussiblingelemnt / perantelemnt

//DOM cloning

//DOM addeventlistener

let pp = document.querySelector('p')

pp.onclick = ()=> {
    let newp = pp.cloneNode(true) // cloneNode() using to new version from the same item 
    newp.className = 'cloned'
    document.body.appendChild(newp)
}

let clonned = document.querySelector('.cloned')

document.addEventListener('click' , (e)=> {
    if (e.target.className === 'cloned') {
        console.log(e.target)
        
    }
})

//completion in learn2.js