const socket = io();

const startEl = document.querySelector('#start');
const gameWrapperEl = document.querySelector('#game-wrapper');
const usernameForm = document.querySelector('#username-form');
const opponentUsernameEl = document.querySelector('#opponent-username')

let username = null;

// socket.on('serverToClient', data => {
// 	alert(data);
// })

// socket.emit('clientToServer', "Hello server");

// get username from form and show game
usernameForm.addEventListener('submit', e => {
	e.preventDefault();

	username = usernameForm.username.value;

	// hide start view
	startEl.classList.add('hide');

	// show chat view
	gameWrapperEl.classList.remove('hide');

	socket.emit('player:joined', username);

	// socket.emit('clientToClient', "Hello fellow clients");
});