import React, { useContext } from 'react';
import { BandAdd} from '../components/BandAdd';
import { BandList } from '../components/BandList';
import { SocketContext } from '../context/SocketContext';
import '../App.css'
import { BandChart } from '../components/BandChart';

function HomePage() {

  const { online } = useContext( SocketContext )
  
  
  return (
    <div className="container">
        <div className = "alert">
              <h1>Estado :
                {
                  online ? <span className="text-success"> Online </span> : <span className="text-danger"> Offline</span> 
                }
                
                </h1>
        </div>



    <h1> Aplicación - Votos </h1>
    <hr/>

        <div className="row">
          <div className="col">

          <BandAdd />

          <hr/>

          <BandList />
              
          <hr/>

          <BandChart /> 
          </div>

        </div>

    </div>
  );
}

export default HomePage;
