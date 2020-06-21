const loginForm = document.getElementById('welcome-form');
const  messagesSection = document.getElementById('messages-section');
const messagesList = document.getElementById('messages-list');
const addMessageForm = document.getElementById('add-messages-form');
const userNameInput = document.getElementById('username');
const messageContentInput = document.getElementById('message-content');

let userName;

function addMessage(author, content) {
    const message = document.createElement('li');
    message.classList.add('message');
    message.classList.add('message--received');
    if(author === userName) message.classList.add('message--self');
    message.innerHTML = `
      <h3 class="message__author">${userName === author ? 'You' : author }</h3>
      <div class="message__content">
        ${content}
      </div>
    `;
    messagesList.appendChild(message);
}

function login(event) {
    event.preventDefault();

    let fullName = userNameInput.value;
    if (fullName.trim() === '') {
        alert('Name is required');
    }
    else{
        userName = fullName
        loginForm.classList.remove('show');
        messagesSection.classList.add('show');
    }
}

function sendMessage(event){
    event.preventDefault();
    console.log(messageContentInput.value);
    let message = messageContentInput.value;
    if (message.trim() === ''){
        alert('Message is required');
    }
    else{
        addMessage(userName, message);
        addMessageForm.reset();
    }
}

loginForm.addEventListener('submit', login); 
addMessageForm.addEventListener('submit', sendMessage);
    
