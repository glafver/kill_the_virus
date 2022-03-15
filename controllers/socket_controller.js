/**
 * Socket Controller
 */

const debug = require('debug')('kill-the-virus:socket_controller');

// list of socket-ids and their username
const players = {};

module.exports = function(socket) {
	debug('a new client has connected', socket.id);

	// socket.emit('serverToClient', "Hello Client");
	// socket.on('clientToServer', data => {
	// 	console.log(data);
	// })
	// socket.on('clientToClient', data => {
	// 	socket.broadcast.emit('serverToClient', data);
	// })

	socket.on('player:joined', username => {
		players[socket.id] = username;

		debug(`User ${username} with socket id ${socket.id} joined`);

		console.log(`Current number of players:`, Object.keys(players).length);

		console.log(`Players object:` , players);
	})

	// handle user disconnect
	socket.on('disconnect', function() {
		debug(`Client ${socket.id} disconnected`);

		// remove user from list of connected users
		delete players[socket.id];
	});

}
