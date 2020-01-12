import React from 'react';
import LoginForm from './forms/LoginForm';
import '../../../public/css/Presentation.css';
import '../../../public/css/Form.css';

function MainModal(props) {

    const links = {
        firstLinkDescription : props.firstLinkDescription,
        firstLinkName        : props.firstLinkName,
        secondLinkDescription: props.secondLinkDescription,
        secondLinkName       : props.seconLinkName
    }

    return(
        <React.Fragment>
            <div className="modal fade" id="exampleModalCenter" tabIndex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
                <div className="modal-dialog modal-dialog-centered" role="document">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="exampleModalLongTitle"></h5>
                            <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">&times;</span>
                            </button>
                        </div>
                        <div className="modal-body">
                            <LoginForm 
                                title="¡Bienvenido!"
                                description="Complete los campos para ingresar al blog"
                                linkOne="Regístrate"
                                descriptionLinkOne="¿Eres nuevo?"
                                linkTwo="Recupérala"
                                descriptionLinkTwo="¿Cuenta olvidada?"
                                buttonName="Acceder"
                            />
                        </div>
                        <div className="modal-footer justify-content-center">
                            <div className="row">
                                <div className="col">
                                    <p>{ links.firstLinkDescription } <a href="#">{ links.firstLinkName }</a></p>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col">
                                    <p>{ links.secondLinkDescription } <a href="#">{ links.secondLinkName }</a></p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="d-flex justify-content-center">
                <button className="text-center btn btn-primary" 
                        data-toggle="modal" 
                        data-target="#exampleModalCenter">Acceder
                </button>
            </div>
        </React.Fragment>
    );
}

export default MainModal;