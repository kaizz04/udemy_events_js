const button = document.querySelector('button');
// button.onclick = function(){};

const buttonHandler = () =>{
    alert('Button was clicked!!');

};

// button.onclick  = buttonHandler;

button.addEventListener('click',buttonHandler);
// button.removeEventListener('click', buttonClickHandler)

setTimeout(()=>{
    button.removeEventListener('click',buttonHandler);
},2000);