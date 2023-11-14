const modal=document.querySelector(".modal1")
const signup=document.querySelectorAll('.signup')

const cancel=document.querySelector('.cncl')
const submit=document.querySelector('.sm')

const nam=document.getElementById('name')

const btnli=document.querySelector('.btnli')
const list=document.querySelector('.nameli')


signup[0].addEventListener('click',()=>{
   modal.classList.add('act')
})
signup[1].addEventListener('click',()=>{
   modal.classList.add('act')
})

cancel.addEventListener('click',()=>{
    modal.classList.remove('act')
})

const notify=()=>{
    alert(`Dear ${nam.value},you have sign up seccessfully.`)
    modal.classList.remove('act')
    btnli.style.display="none"
    list.innerHTML=nam.value
    // signup[0].classList.add('act')
    
}
