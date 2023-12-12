// const webgazer = require('webgazer');
// webgazer.begin()
window.addEventListener('load', () => {

    //Open and connect socket
    let socket = io();
    //Listen for confirmation of connection
    socket.on('connect', ()=> {
        console.log("socket connected");
    });
    
    let canvas = document.createElement("canvas");
    let ctx = canvas.getContext("2d", { willReadFrequently: true });

    // Code to RECEIVE a socket message from the server
    let causticEllipse = document.getElementById('lil-ellipses');

    //Listen for messages named 'msg' from the server
    socket.on('caustic', function(data) {
        console.log("caustic detected");
        console.log(data);
       
    //Create a message string and page element
    // let receivedCaustic = data.name + ": " + data.msg;
    // let CausticEl = document.createElement('div');
    // CausticEl.innerHTML = receivedCaustic;
    //look through all the users and draw their ellipses at the x,y coordinates

    let xCoord = document.getElementById('lil-ellipses').style.left;
    xCoord = ((users[postion.x])-20)+'px';
    let yCoord = document.getElementById('lil-ellipses').style.top;
    yCoord = ((users[position.y])-25)+'px';

    let CausticEl = document.createElement('div');
    CausticEl.innerHTML = ellipse();
    
    //Add the element with the message to the page
    // chatBox.appendChild(CausticEl);
    });


});


// function startAudioRecording() {
//     //start recording using the audio recording API
//     audioRecorder.start()
//         .then(() => { //on success
//             console.log("Recording Audio...")    
//         })    
//         .catch(error => { //on error
//             //No Browser Support Error
//             if (error.message.includes("mediaDevices API or getUserMedia method is not supported in this browser.")) {       
//                 console.log("To record audio, use browsers like Chrome and Firefox.");
//             }
//         });
// }
