//Initialize the express 'app' object
let express = require('express');
let app = express();

//Initialize socket
let { Server } = require('socket.io');

//Initialize the actual HTTP server
let http = require('http');
let server = http.createServer(app);

let io = new Server(server);

app.use(express.static('public'));

//create object userObject variable to store all users and their with key value pairs storing user name and x coord and y coord
//Let object = {
// ‘Ieaujaeoiae’: {x: 0, y:0}
//}

let users = {
    user: "user",
    position: {
        x: data.x,
        y: data.y
    }
};
//Listen for individual clients/users to connect
io.on('connection', (socket) => {
    console.log('user ' + socket.id + ' has connected');
    users[socket.id] = {}; //adds a new user to userObject
    //Listen for a message named 'msg' from this client
    socket.on('caustic', (data) => {
        //Data can be numbers, strings, object
        console.log("Received a caustic event");
        console.log(data);
        users[socket.id] = data; //data is position

        //Send user data to all users, including this one
        io.sockets.emit('caustic', users);
    });

    //Listen for this client to disconnect
    socket.on('disconnect', () => {
        console.log('user ' + socket.id + ' has disconnected');
        delete users[socket.id];
    });
});

let port = process.env.PORT || 3000;
server.listen(port, () => {
    console.log('server listening at port: http://localhost:' + port);
});
