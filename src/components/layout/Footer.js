import React, {Component} from 'react';
import Config from '../../config/default';

class Footer extends Component {
    render() {
        return (
            <footer className="navbar fixed-bottom py-3 bg-dark text-white">
                <div className="mr-auto ml-auto text-center">
                    <p className="mb-1">Copyright {new Date().getFullYear() + ' ' + Config.CLIENT_NAME}</p>
                    <small>App Developed by{' '}
                        <a href={Config.APP_AUTHOR.WEBSITE || Config.APP_AUTHOR.EMAIL}>{Config.APP_AUTHOR.NAME_FIRST + ' ' + Config.APP_AUTHOR.NAME_LAST}</a>
                    </small>
                </div>
            </footer>
        );
    }
}

export default Footer;
