// .intro is splash screen we created in html
let intro = document.querySelector('.intro');
let logo = document.querySelector('.logo-header');
// use querySelectorALL because theres more than one element 
let logoSpan = document.querySelectorAll('.logo');

// this will trigger when the page has been fully loaded
window.addEventListener('DOMContentLoaded', ()=>{
        setTimeout(()=> {

          // add 1 beacuse the 0 index would be nothing, multiply by 400 milliseconds
          logoSpan.forEach((span, idx)=>{
            setTimeout(()=>{
              span.classList.add('active');
            }, (idx + 1) * 400)
          })
          
          setTimeout(()=>{
            logoSpan.forEach((span, idx)=>{
              setTimeout(()=>{
                span.classList.remove('active');
                span.classList.add('fade');
              }, (idx + 1) * 50)
            })
          }, 2000)
          
          setTimeout(()=>{
            intro.style.top = '-100vh';
          }, 2000)


        })
})

