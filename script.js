const sendBTn = document.querySelector('#sendBtn');
const messageIn = document.querySelector('#messageIn');
const messageOut = document.querySelector('#messageOut');


sendBTn.addEventListener('click',getBtn);

function getBtn() {
    let content = messageIn.value;
    if(content === '') {
        alert('Please must be content enter!!!');
    } else {
        messageOut.innerHTML = content;
        messageIn.value = '';
    }
}