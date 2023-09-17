const btn=document.querySelector('.mobile-navbar-btn');

const header=document.querySelector('.header');
btn.addEventListener('click',function()
{
    header.classList.toggle('active');

})