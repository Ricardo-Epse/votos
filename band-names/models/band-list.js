const Band = require('./band');


class BandList {
    constructor(name){

        this.bands = [
            new Band('Foo fighters'),
            new Band('The Lumineers'),
            new Band('Imagine Ddragons'),
        ]
    
    }

    addBand( name ){
        const newBand = new Band(name);
        this.bands.push(newBand);
        return this.bands;
    }

    removeBand( id ){
        this.bands = this.bands.filter(band => band.id !== id);
    }

    getBands(){
        return this.bands;
    }

    incrementarVotes(id){
        this.bands = this.bands.map( band => {

            if(band.id === id){
                band.votes += 1;
            }

            return band;

        })
    }

    changeBandName(id,newName){

        this.bands = this.bands.map(band => {
            
            if(band.id === id){
                band.name = newName;
            }

            return band;
        
        });


    }
}

module.exports = BandList;