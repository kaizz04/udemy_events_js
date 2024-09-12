const buttons = document.querySelectorAll('button');
// button.onclick = function(){};

const buttonHandler = event =>{
   console.log(event);


};

// button.onclick  = buttonHandler;

// button.addEventListener('click',buttonHandler);
// button.removeEventListener('click', buttonClickHandler)

// setTimeout(()=>{
//     button.removeEventListener('click',buttonHandler);
// },2000);

buttons.forEach(btn=>{
    btn.addEventListener('mouseenter',buttonHandler);
});

window.addEventListener('scroll',buttonHandler );





