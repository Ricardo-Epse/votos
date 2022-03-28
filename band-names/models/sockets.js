const BandList = require("./band-list");


class Sockets {

    constructor( io ) {

        this.io = io;

        this.bandList = new BandList();   

        this.socketEvents();
    }

    socketEvents() {
        // Conexión
        this.io.on('connection', ( socket ) => {

            console.log('cliente conectado');

            //emitir al cliente conectado, todas las bandas actuales.

            socket.emit('current-bands',this.bandList.getBands());

            // Escuchar evento: mensaje-to-server
            socket.on('votar-banda', ( id ) => {
                
                this.bandList.incrementarVotes( id );
                this.io.emit('current-bands',this.bandList.getBands()); //this.io sirve para que se emitan los cambios a todos.

            });

            socket.on('borrar-banda', ( id ) => {
                
                this.bandList.removeBand( id );
                this.io.emit('current-bands',this.bandList.getBands()); //this.io sirve para que se emitan los cambios a todos.

            });


            socket.on('cambiar-banda', ( {id,nombre} ) => {
                
                this.bandList.changeBandName( id,nombre );
                this.io.emit('current-bands',this.bandList.getBands()); //this.io sirve para que se emitan los cambios a todos.

            });

            socket.on('crear-banda', ( {nombre}) => {
                
                this.bandList.addBand( nombre );
                this.io.emit('current-bands',this.bandList.getBands()); //this.io sirve para que se emitan los cambios a todos.

            });

            
        
        });
    }


}


module.exports = Sockets;