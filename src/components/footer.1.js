import React, {Component} from 'react';

class Footer extends Component{
    render(){
        
        var Style_GetConnected = {
            'background-color': '#21d192'
        };

        var Style_hrWidth = {
            width: '60px'
        };
        

        return(
            <footer className="page-footer center-on-small-only blue-grey lighten-5 pt-0">
            
                <div style={Style_GetConnected}>
                    <div className="container">
                        <div className="row py-4 d-flex align-items-center">
                            <div className="col-12 col-md-5 text-left mb-4 mb-md-0">
                                <h6 className="mb-0 white-text text-center text-md-left"><strong>Get connected with us on social networks!</strong></h6>
                            </div>
                            <div className="col-12 col-md-7 text-center text-md-right">
                                <a className="icons-sm fb-ic ml-0"><i className="fa fa-facebook white-text mr-lg-4"> </i></a>
                                <a className="icons-sm tw-ic"><i className="fa fa-twitter white-text mr-lg-4"> </i></a>
                                <a className="icons-sm gplus-ic"><i className="fa fa-google-plus white-text mr-lg-4"> </i></a>
                                <a className="icons-sm li-ic"><i className="fa fa-linkedin white-text mr-lg-4"> </i></a>
                                <a className="icons-sm ins-ic"><i className="fa fa-instagram white-text mr-lg-4"> </i></a>
                            </div>
            
                        </div>
                    </div>
                </div>
            
                <div className="container mt-5 mb-4 text-center text-md-left">
                    <div className="row mt-3">
                        <div className="col-md-3 col-lg-4 col-xl-3 mb-r dark-grey-text">
                            <h6 className="title font-bold"><strong>Company name</strong></h6>
                            <hr className="teal accent-3 mb-4 mt-0 d-inline-block mx-auto" style={Style_hrWidth} />
                            <p>Here you can use rows and columns here to organize your footer content. Lorem ipsum dolor sit
                                amet, consectetur adipisicing elit.</p>
                        </div>
                        <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mb-r dark-grey-text">
                            <h6 className="title font-bold"><strong>Products</strong></h6>
                            <hr className="teal accent-3 mb-4 mt-0 d-inline-block mx-auto" style={Style_hrWidth}  />
                            <p><a href="#!" className="dark-grey-text">MDBootstrap</a></p>
                            <p><a href="#!" className="dark-grey-text">MDWordPress</a></p>
                            <p><a href="#!" className="dark-grey-text">BrandFlow</a></p>
                            <p><a href="#!" className="dark-grey-text">Bootstrap Angular</a></p>
                        </div>
                        <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mb-r dark-grey-text">
                            <h6 className="title font-bold"><strong>Useful links</strong></h6>
                            <hr className="teal accent-3 mb-4 mt-0 d-inline-block mx-auto" style={Style_hrWidth}  />
                            <p><a href="#!" className="dark-grey-text">Your Account</a></p>
                            <p><a href="#!" className="dark-grey-text">Become an Affiliate</a></p>
                            <p><a href="#!" className="dark-grey-text">Shipping Rates</a></p>
                            <p><a href="#!" className="dark-grey-text">Help</a></p>
                        </div>
                        <div className="col-md-4 col-lg-3 col-xl-3 dark-grey-text">
                            <h6 className="title font-bold"><strong>Contact</strong></h6>
                            <hr className="teal accent-3 mb-4 mt-0 d-inline-block mx-auto" style={Style_hrWidth}  />
                            <p><i className="fa fa-home mr-3"></i> New York, NY 10012, US</p>
                            <p><i className="fa fa-envelope mr-3"></i> info@example.com</p>
                            <p><i className="fa fa-phone mr-3"></i> + 01 234 567 88</p>
                            <p><i className="fa fa-print mr-3"></i> + 01 234 567 89</p>
                        </div>
                    </div>
                </div>
                <div className="footer-copyright">
                    <div className="container-fluid">
                        © 2017 Copyright: <a href="https://www.MDBootstrap.com"><strong> MDBootstrap.com</strong></a>
                    </div>
                </div>
            </footer>
        )
    }

}
export default Footer;