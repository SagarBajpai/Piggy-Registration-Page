import React from 'react';

import '../css/navbar.css';
import logo from '../images/logo.png';

class Navbar extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return(
            <nav className="navbar navbar-light">
                <a className="navbar-brand" href="javascript:void(0);">
                    <img src={logo} alt="Piggy" height="48" width="48" />
                </a>
            </nav>
        );
    }
}

export default Navbar;