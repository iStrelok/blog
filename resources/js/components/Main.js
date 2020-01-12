import React from 'react';
import ReactDOM from 'react-dom';
import Navbar from './Navbar';
import MainModal from './MainModal';
import '../../../public/css/Presentation.css';

function Main() {
    return(
        <React.Fragment>
            <div className="row">
                <div className="col-12">
                    <Navbar />
                </div>
            </div>
            <div className="row minh align-items-center mb-0">
                <div className="col-12">
                    <p className="text-center title mb-0">Blogserify</p><br></br>
                    <p className="text-center">Crea y administra blog's de manera fácil y rápida junto a nosotros.</p>
                    <div className="d-flex justify-content-center">
                        <MainModal
                            firstLinkDescription="¿Eres nuevo?"
                            firstLinkName="Regístrate"
                            secondLinkDescription="¿Cuenta olvidada?"
                            secondLinkName="Recupérala"
                        />
                    </div>
                </div>
            </div>
                     
        </React.Fragment>
    );
}

if(document.getElementById('Main')){
    ReactDOM.render(<Main />, document.getElementById('Main'));
}