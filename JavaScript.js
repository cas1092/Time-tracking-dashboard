const li = document.querySelectorAll('li')
const tab = document.getElementsByClassName('tab')
li.forEach((e, i) => {
   
    li[i].addEventListener('click', () => {

        li.forEach((e, i) => {
           
            li[i].classList.remove('active')
            tab[i].classList.remove('active_tab')
        })

        li[i].classList.add('active')
        tab[i].classList.add('active_tab')
        


    })
})