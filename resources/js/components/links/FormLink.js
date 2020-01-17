import React from 'react';
import { BrowserRouter as Router, Link } from 'react-router-dom';

function FormLink(props) {

	const linkProps = {
		description : props.description,
		route 			: props.route,
		name            : props.name
	}

	return(
		<React.Fragment>
			<Router>
				<p>{ linkProps.description }<Link to={ linkProps.route }>{ linkProps.name }</Link></p>
			</Router>
		</React.Fragment>
	);
}

export default FormLink;