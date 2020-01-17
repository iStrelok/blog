import React from 'react';

function RegisterForm(props) {

    const elements = {
        title              					  : props.title,
        description         		  : props.description,
        buttonName                : props.buttonName
    }

    return(
        <React.Fragment>
            <form className="">
	            <h2 className="text-center">{ elements.title }</h2>
	            <p className="text-center">{ elements.description }</p>
	            <div className="form-group">
	                <input className="form-control" placeholder="Usuario"></input>
	            </div>
	            <div className="form-group">
	                <input className="form-control" placeholder="Contraseña"></input>
	            </div>
	            <div className="form-group">
	                <input className="form-control" placeholder="Confirmar contraseña"></input>
	            </div>
	            <div className="d-flex justify-content-center">
	                <input className="btn btn-primary" defaultValue={ elements.buttonName }></input>
	            </div>
	        </form>
        </React.Fragment>
    );
}

export default RegisterForm;