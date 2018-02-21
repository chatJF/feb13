import React, {Component} from 'react';
import { Link } from 'react-router-dom';

class Navigation extends Component{

    render(){
        return(
        <nav className="navbar navbar-expand-sm navbar-dark bg-dark">
            <Link to="/" className="navbar-brand">CJF</Link>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
              <ul className="navbar-nav">
                <li className="nav-item active">
                    <Link className="nav-link" to="/">Home</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/products">Products</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/contact">Contact Us</Link>
                </li>
              </ul>
            </div>
          </nav>
        )
    }

}
export default Navigation;