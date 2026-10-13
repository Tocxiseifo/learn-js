// nav-bar
let container = document.createElement("div")
let nav = document.createElement("nav")
let ul = document.createElement("ul")
let li = document.createElement("li")
let txt = document.createElement("h3")
let _li = document.createElement("li")
let __li = document.createElement("li")
let _lil = document.createElement("li")
let a = document.createElement('a')
let tit = document.createTextNode('Tayf')
let __1 = document.createTextNode('Home')
let __2 = document.createTextNode('About')
let __3 = document.createTextNode('Service')
let __4 = document.createTextNode('Content')
txt.appendChild(tit)
container.appendChild(nav)
container.appendChild(txt)
nav.appendChild(ul)
ul.appendChild(li)
ul.appendChild(_li)
ul.appendChild(__li)
ul.appendChild(_lil)
container.appendChild(nav)
document.body.appendChild(container)
container.className = 'nav'
container.style.cssText = 'display: flex; flex-direction: row; margin: 0px;  justify-content:space-between ; align-Items: center;'
ul.style.cssText = 'display: flex;  list-style-type: none; flex-direction: row; color: gray; padding-right: 15px; cursor: pointer; margin: 5px'
txt.style.cssText = 'color: black; font-size: 25px; margin-left: 15px; cursor: pointer;'
document.body.style.cssText = 'margin: 0px; padding: 0px; box-sizing: border-box; font-family: sans-serif; overflow: hidden;'
li.appendChild(__1)
_li.appendChild(__2)
__li.appendChild(__3)
_lil.appendChild(__4)
li.style.marginRight = '17px'
_li.style.marginRight = '8px'
__li.style.marginRight = '15px'
li.style.marginRight = '5px'
li.addEventListener('mouseover', ()=> {
    li.style.cssText = 'color: green; text-decoration: underline; margin-right: 15px'
})

li.addEventListener('mouseout', ()=> {
    li.style.cssText = 'color: gray; text-decoration: none; margin-right: 15px'
})
_li.addEventListener('mouseover', ()=> {
    _li.style.cssText = 'color: green; text-decoration: underline; margin-right: 15px'
})

_li.addEventListener('mouseout', ()=> {
    _li.style.cssText = 'color: gray; text-decoration: none; margin-right: 15px'
})
__li.addEventListener('mouseover', ()=> {
    __li.style.cssText = 'color: green; text-decoration: underline; margin-right: 15px'
})

__li.addEventListener('mouseout', ()=> {
    __li.style.cssText = 'color: gray; text-decoration: none; margin-right: 15px'
})
_lil.addEventListener('mouseover', ()=> {
    _lil.style.cssText = 'color: green; text-decoration: underline; margin-right: 15px'
})

_lil.addEventListener('mouseout', ()=> {
    _lil.style.cssText = 'color: gray; text-decoration: none; margin-right: 15px'
})
txt.addEventListener('mouseover', ()=> {
    txt.style.cssText = 'color:  rgb(35, 169, 110); font-size: 30px; margin-left: 15px; cursor: pointer; transition: ease-in-out, 0.5s;'
    fot.style.marginBottom = '10px'
})
txt.addEventListener('mouseout', ()=> {
    txt.style.cssText = 'color: black; font-size: 25px; margin-left: 15px; cursor: pointer; transition: ease-in-out, 0.5s;'
})
let cont = document.createElement('div')
for (let index = 1; index < 16; index++) {
    //content
    let prod1 = document.createElement('div')
    let span1 = document.createElement('span')
    let ttt = document.createTextNode(index.toString())
    let txtp = document.createTextNode('Product')
    cont.appendChild(prod1)
    prod1.appendChild(span1)
    span1.appendChild(ttt)
    prod1.appendChild(txtp)
    document.body.appendChild(cont)
    prod1.className = 'product'
    cont.className = 'content'
    cont.style.cssText = 'display:flex; padding: 20px; flex-wrap: wrap; justify-content: center; gap: 20px; min-height: calc(100vh - 142px); box-sizing: border-box;'
    prod1.style.cssText = 'padding: 20px; background-color: rgb(255, 255, 255); border: 1px solid rgb(221,221,211); width:calc((100% - 40px) / 3); box-sizing: border-box; text-align: center; color: rgb(136,136,136); border-radius: 6px;'
    span1.style.cssText = 'font-size: 40px; color: black; font-weight: normal; display: block; margin-bottom: 10px; margin-top: 10px;'
}
// footer
let fot = document.createElement('footer')
document.body.appendChild(fot)
fot.style.cssText = 'background-color: rgb(35, 169, 110); font-size: 26px; text-align: center; padding: 20px; color: rgb(255,255,255);'
let fotTxt = document.createTextNode('@Copytight 2025') 
fot.appendChild(fotTxt)
console.log(container)    
