const li = document.querySelectorAll('li');
const day = document.querySelectorAll('.daily');
const week = document.querySelectorAll('.weekly');
const month = document.querySelectorAll('.monthly');


li.forEach((e, i) => {
   
    li[i].addEventListener('click', () => {

        li.forEach((e, i) => {
           
            li[i].classList.remove('active')
            day[i].classList.remove('active')
            week[i].classList.remove('active')
            month[i].classList.remove('active')
        })

        
        li[i].classList.add('active')
        day[i].classList.add('active')
        week[i].classList.add('active') 
        month[i].classList.add('active')

    })
})
