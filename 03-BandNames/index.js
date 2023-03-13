const Server    = require('./models/server');
require('dotenv').config();

const server    = new Server();
server.execute();

//servidor de Express
// const app = require('express')();
// const express = require('express');
// const app = express();

// //servidor de sockets
// const server = require('http').createServer(app);

// //Configuración del socket server
// // const io = require('socket.io')(server);

// //desplegar el directorio publico
// app.use(express.static( __dirname + '/public'));
// io.on('connection',( socket )=>{ 
//     // console.log( socket.id );
//     // socket.emit('mensaje-bienvenida',{
//     //     msg: 'Bienvenido al server',
//     //     fecha: new Date()
//     // });
//     socket.on('mensaje-to-server', (data)=>{
//         console.log(data);
//         io.emit('mensaje-from-server', data);
//     });
//     // socket.on('mensaje-cliente', (data)=>{
//     //     console.log(data);
//     // });


// });

// server.listen(8080, ()=>{
//     console.log('Server corriendo en puerto: 8080');
// });

