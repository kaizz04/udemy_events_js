const button = document.querySelector("button");
// button.onclick = function(){};

const buttonHandler = (event) => {
  console.log(event);
};

// button.onclick  = buttonHandler;

// button.addEventListener('click',buttonHandler);
// button.removeEventListener('click', buttonClickHandler)

// setTimeout(()=>{
//     button.removeEventListener('click',buttonHandler);
// },2000);

// buttons.forEach(btn=>{
//     btn.addEventListener('mouseenter',buttonHandler);
// });

// window.addEventListener('scroll',buttonHandler );

const form = document.querySelector("form");
form.addEventListener("submit", (event) => {
  event.preventDefault();
  console.log(event);
});

const div = document.querySelector("div");
div.addEventListener("click", (event) => {
  console.log("CLICKED DIV");
  console.log(event);
});
button.addEventListener("click", function(event) {
  event.stopPropagation();
  //event.stopImmediatePropagation();
  console.log("CLICKED BUTTON");
  console.log(event);
  console.log(this); // use regular function to get element
});

const listItems = document.querySelectorAll('li');
const list = document.querySelector('ul');

// listItems.forEach(li=>{
// li.addEventListener('click',event=>{
//     event.target.classList.toggle('highlight');
// })
// });

list.addEventListener('click',event =>{
    // event.target.classList.toggle('highlight');
    event.target.closest('li').classList.toggle('highlight');
    //form.submit();
    button.click();
});






