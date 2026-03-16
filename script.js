



let buttons = document.querySelector('.buttons');

buttons.addEventListener('click', (e) => {
    if(e.target.tagName === 'BUTTON'){
       alert('I am button');
    }
})

