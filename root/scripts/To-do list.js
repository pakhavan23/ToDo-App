const input = document.querySelector('input');
const button = document.querySelector('button');
const list = document.querySelector('ul');
const items = document.querySelector('li');
const remove = document.getElementById("remove");

button.addEventListener('click' , function(){
    if(!input.value){
        input.focus();
    }
    else{
        const note = input.value;
        const item = document.createElement('li');
        item.innerHTML = note + '<i class="fa fa-times remove" id="remove" aria-hidden="true"></i>';
        list.appendChild(item);
        input.value = '';
    }
})

list.addEventListener('click' , function(event){
    if( event.target && event.target.nodeName === "I"){
        list.removeChild(event.target.parentNode);
    }
})