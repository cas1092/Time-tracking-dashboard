const li = document.querySelectorAll('li')
const daily = document.getElementsByClassName('.daily')
const weekly = document.getElementsByClassName('.weekly')
const monthly = document.getElementsByClassName('.monthly')


li.forEach((e, i) => {
   
    li[i].addEventListener('click', () => {

        li.forEach((e, i) => {
           
            li[i].classList.remove('active')
            daily[i].classList.add('hidden')
            monthly[i].classList.add('hidden')
            weekly[i].classList.add('hidden')
        })

        li[i].classList.add('active')


    })
})