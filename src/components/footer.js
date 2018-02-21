import React, {Component} from 'react';
import '../assets/css/Footer-with-button-logo.css';
import tron from '../assets/images/tron.png';
import hoppa from '../assets/images/hoppa_logo_main.png';

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
                        <li><a href="#">Home</a></li>
                        <li><a href="#">Sign up</a></li>
                        <li><a href="#">Downloads</a></li>
                    </ul>
                </div>
                <div className="col-sm-2">
                    <h5>About us</h5>
                    <ul>
                        <li><a href="#">Company Information</a></li>
                        <li><a href="#">Contact us</a></li>
                        <li><a href="#">Reviews</a></li>
                    </ul>
                </div>
                <div className="col-sm-2">
                    <h5>Support</h5>
                    <ul>
                        <li><a href="#">FAQ</a></li>
                        <li><a href="#">Help desk</a></li>
                        <li><a href="#">Forums</a></li>
                    </ul>
                </div>
                <div className="col-sm-3">
                    <div className="social-networks">
                        <a href="#" className="twitter"><i className="fa fa-twitter"></i></a>
                        <a href="#" className="facebook"><i className="fa fa-facebook"></i></a>
                        <a href="#" className="google"><i className="fa fa-google-plus"></i></a>
                    </div>
                    <button type="button" className="btn btn-default">Contact us</button>
                </div>
            </div>
        </div>
        <div className="footer-copyright">
            <p>© 2016 Copyright Text </p>
        </div>
    </footer>
        )
    }

}
export default Footer;