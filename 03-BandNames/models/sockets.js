const BandList = require("./band-list");

class Sockets {
    constructor(io){
        this.io = io;
        this.bandList = new BandList();
        this.socketsEvents();
    }
    socketsEvents(){
        //On connection
        this.io.on('connection',( socket )=>{ 
                console.log('Cliente conectado');
                socket.emit('current-bands', this.bandList.getBands());
                //votar por la banda
                socket.on('votar-banda', (id)=>{
                    this.bandList.increaseVotes(id);
                    this.io.emit('current-bands', this.bandList.getBands());
                    // socket.emit solo emite a una pagina
                    //this.io emite a todos
                });

                //Borrar-banda
                socket.on('borrar-banda', (id)=>{
                    this.bandList.removeBand(id);
                    this.io.emit('current-bands', this.bandList.getBands());
                });

                  //Borrar-banda
                  socket.on('name-banda', ({id,nombre})=>{
                    this.bandList.changeName(id, nombre);
                    this.io.emit('current-bands', this.bandList.getBands());
                });

                //new-banda
                socket.on('nueva-banda', ({nombre})=>{
                    this.bandList.addBand(nombre);
                    this.io.emit('current-bands', this.bandList.getBands());
                });


            // //Escuchar el evento
            //     socket.on('mensaje-to-server', (data)=>{
            //         console.log(data);
            //         this.io.emit('mensaje-from-server', data);
            //     });
            });
    }
}
module.exports = Sockets;