import React, {Component} from 'react';

import Config from '../../config/default';
import Sitemap from '../../types/sitemap';
import {Link} from "react-router-dom";

class Landing extends Component {
    render() {
        const {LANDING: {TITLE, HEADER}} = Config;
        const {ROUTE_SIGNIN, ROUTE_REGISTER} = Sitemap;
        return (
            <div className="landing-backdrop">
                <div className="dark-overlay">
                    <div className="container text-center text-white">
                        <div className="container-gutters">
                            <h1 className="display-3">{TITLE}</h1>
                            <div className="landing-body pt-3">
                                <p>{HEADER}</p>
                                <div className="landing-buttons">
                                    <Link to={ROUTE_SIGNIN} className="btn btn-outline-info m-2">
                                        Sign In
                                    </Link>
                                    <Link to={ROUTE_REGISTER} className="btn btn-outline-danger m-2">
                                        Register
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Landing;
