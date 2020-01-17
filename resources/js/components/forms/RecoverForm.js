import React from 'react';

function Recover(props) {

    const elements = {
        title                                  : props.title,
        description                   : props.description,
        buttonName                : props.buttonName
    }

    return(
        <form className="">
            <h2 className="text-center">{ elements.title }</h2>
            <p className="text-center">{ elements.description }</p>
            <div className="form-group">
                <input className="form-control" placeholder="email"></input>
            </div>
            <div className="d-flex justify-content-center">
                <input className="btn btn-primary" defaultValue={ elements.buttonName }></input>
            </div>
        </form>
    );
}

export default Recover;