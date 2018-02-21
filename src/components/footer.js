import React, {Component} from 'react';
import '../assets/css/Footer-with-button-logo.css';
import tron from '../assets/images/tron.png';
import hoppa from '../assets/images/hoppa_logo_main.png';
import {Link} from 'react-router-dom';

class Footer extends Component{
    render(){
        
        var Style_GetConnected = {
            'background-color': '#21d192'
        };

        var Style_hrWidth = {
            width: '60px'
        };
        

        return(
        <footer id="myFooter">
        <div className="container">
            <div className="row">
                <div className="col-sm-3">
                    <img  className="img-fluid" src={hoppa} alt="Hoppa" />
                </div>
                <div className="col-sm-2">
                    <h5>Get started</h5>
                    <ul>
                        <li><Link to="/">Home</Link></li>
                        <li><Link to="/sign-up">Sign up</Link></li>
                        <li><Link to="/downloads">Downloads</Link></li>
                    </ul>
                </div>
                <div className="col-sm-2">
                    <h5>About us</h5>
                    <ul>
                        <li><Link to="/company-info">Company Information</Link></li>
                        <li><Link to="/contact">Contact Us</Link></li>
                        <li><Link to="/reviews">Reviews</Link></li>
                    </ul>
                </div>
                <div className="col-sm-2">
                    <h5>Support</h5>
                    <ul>
                        <li><Link to="/faq">FAQ</Link></li>
                        <li><Link to="/help">Help desk</Link></li>
                        <li><Link to="/forum">Home</Link></li>
                    </ul>
                </div>
                <div className="col-sm-3">
                    <button type="button" className="btn btn-default">Contact us</button>
                </div>
            </div>
        </div>
        <div className="footer-copyright">
            <p>© 2016 Copyright Text</p>
        </div>
    </footer>
        )
    }

}
export default Footer;