const contactForm = document.querySelector('button'),
 contactInput = document.querySelector('#contactInput'),
 contacts = document.querySelector('#contacts');

function delButtonHandler(event){
    event.preventDefault();
    const ET=event.target;
    if(ET.classList.contains('delete')){
        const li = ET.parentElement;
        const ul = li.parentElement;
        ul.removeChild(li);
        if(ul.lastElementChild.tagName==='SPAN'){
            ul.classList.remove('show');
        }
    }

}

function setItemOrder(text){
    const ul=document.querySelector(`#${text}`);
    let textList = document.querySelectorAll(`#${text} .item span`); //lis
    const liArray=[];
    textList.forEach(lis=>liArray.push(lis.innerText));
    liArray.sort((a,b)=>a>b?1:-1)
    textList.forEach((lis,index)=>{
            lis.innerText=liArray[index];
    })
}
function checkV(inputV){ 
    const alphabet = document.querySelectorAll('.alphabet');
    let firstV ='';
    alphabet.forEach((alph) => {
        if(alph.id.toLowerCase() === inputV[0].toLowerCase()){
            firstV = alph.id;
        }
    });
    return firstV;
}

function clickHandler(event){
    event.preventDefault();
    const inputV = contactInput.value;
    const firstV=checkV(inputV);
    const ul = document.querySelector(`#${firstV}`);
    const li=document.createElement('li');
    const span = document.createElement('span');
    const delButton = document.createElement('button');

    li.classList.add('item');
    span.innerText = inputV;
    delButton.innerText = 'X';
    delButton.classList.add('delete');
    li.addEventListener('click',delButtonHandler)

    ul.appendChild(li);
    li.appendChild(span);
    li.appendChild(delButton);
    ul.classList.add('show')
    contactInput.value="";
    setItemOrder(inputV[0].toUpperCase());
}

function init(){
    const list_LS=localStorage.getItem('list'); 
    contactForm.addEventListener('click', clickHandler);
    if(list_LS){
        //if exist
    }

}

init();