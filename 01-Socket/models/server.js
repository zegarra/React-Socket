
//servidor de Express
const express   = require('express');
const http      = require('http');
const socketio  = require('socket.io');
const path      = require('path');
const Sockets   = require('./sockets');
const cors      = require('cors');
class Server {

    constructor(){
        this.app = express();
        this.port = process.env.port;

        //Http server
        this.server = http.createServer(this.app);
        //Configuración de sockets
        this.io = socketio( this.server, { /*configuraciones*/ });
    }

    middlewares(){
        //desplegar el directorio público
        this.app.use(express.static(path.resolve( __dirname , '../public')));
        this.app.use( cors() );
    }

    configurarSockets(){ 
        new Sockets(this.io);
    }
    
    execute(){
        //inicializar Middlewares 
        this.middlewares();

        //Inicializar sockets
        this.configurarSockets();

        //Inicializar Server
        this.server.listen(this.port, ()=>{
            console.log('Server corriendo en puerto: ', this.port);            
        });
    }
}
module.exports = Server;