burger = document.querySelector('.burger')
menu = document.querySelector('.menu')
lists = document.querySelector('.lists')
contents = document.querySelector('.contents')




burger.addEventListener('click' , ()=>{
    menu.classList.toggle('hnav');
    lists.classList.toggle('vclass');
    contents.classList.toggle('vclass');



})


