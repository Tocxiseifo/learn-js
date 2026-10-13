let lis = document.querySelectorAll("ul li")

let exp = document.querySelector('.experiment')
if (window.localStorage.getItem('color')) { // if there is color
    // add color to div
    exp.style.backgroundColor = window.localStorage.getItem('color')
    // remove active class
    lis.forEach((li) => {
        li.classList.remove("active")
    })
    // add active class to current color 
    document.querySelector(`[data-color='${window.localStorage.getItem('color')}']`).classList.add('active')
}else { // if no color in local storage 
    
}
lis.forEach((li) => {
    li.addEventListener('click',(e) => {
        // console.lof(e.target.dataset.color)
        //Remove Active Class From all lis
        lis.forEach((li) => {
            li.classList.remove("active")
        })
        //add active class current element
        e.currentTarget.classList.add('active')
        // add current color to local storage
        window.localStorage.setItem('color' , e.target.dataset.color),
        // change div background color
        exp.style.backgroundColor = e.target.dataset.color
    })
})
