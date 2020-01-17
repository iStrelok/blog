import React from 'react';
import LoginForm from '../forms/LoginForm';
import RegisterForm from '../forms/RegisterForm';
import RecoverForm from '../forms/RecoverForm';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import '../../../../public/css/Presentation.css';
import '../../../../public/css/Form.css';

function MainModal(props) {

    const links = {
        firstLinkDescription        : props.firstLinkDescription,
        firstLinkName                   : props.firstLinkName,
        secondLinkDescription : props.secondLinkDescription,
        secondLinkName            : props.secondLinkName
    }

    return(
        <React.Fragment>
            <Router>
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
                                <Route exact path='/login'>
                                    <LoginForm
                                        title="¡Bienvenido!"
                                        description="Complete los campos para ingresar al blog"
                                        buttonName="Acceder"
                                    />
                                </Route>

                                <Route  exact path='/registro'>
                                    <RegisterForm
                                        title="¡Regístrate, es sencillo!"
                                        description="Por favor, complete los campos"
                                        buttonName="Registrarme"
                                    />
                                </Route>

                                <Route  exact path='/recuperar'>
                                    <RecoverForm
                                        title="¡No te preocupes!"
                                        description="Tranquilo/a, le ayudaremos. Solo ingrese su correo y le enviaremos información referente a la recuperación de su cuenta"
                                        buttonName="Enviar"
                                    />
                                </Route>

                            </div>
                            <div className="modal-footer justify-content-center">
                                <div className="row">
                                    <div className="col">
                                        <p>{ links.firstLinkDescription } <Link to='/registro'>{ links.firstLinkName }</Link></p>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col">
                                        <p>{ links.secondLinkDescription } <Link to='/recuperar'>{ links.secondLinkName }</Link></p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="d-flex justify-content-center">
                    <button className="text-center btn btn-primary"
                            data-toggle="modal"
                            data-target="#exampleModalCenter">
                            <Link to='/login' className='nameAccessButton'>Acceder</Link>
                    </button>
                </div>
            </Router>
        </React.Fragment>
    );
}

export default MainModal;