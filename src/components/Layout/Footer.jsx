import React from 'react'
import './Footer.css'

const Footer = props => {
    return(
        <div className="footer bg-dark">
        <div className="container">   
            <div className="row">
                <div className="col footer-col-1">
                    <h3>Download our app</h3>
                    <p>Lorem ipsum dolor sit amet consectetur </p>
                </div>

                <div className=" col footer-col-2">
                <h3 className="text-danger fw-bold fs-1 ls-2 ">
                        Senegambia
                        <span className="text-success ms-2">Foodie</span>
                    </h3>
                    <p>Our vision is to provide you with food any time</p>
                </div>
                
                <div className="col footer-col-3">
                    <h3>Location</h3>
                    <li>Banjul</li>
                    <li>Serrekunda</li>
                    <li>Brufut</li>
                </div>
                <div className=" col footer-col-4">
                    <h3>Follows</h3>
                    <ul>
                        <li>Facebook</li>
                        <li>Instagram</li>
                        <li>Twitter</li>
                        <li>Youtube</li>
                    </ul>
                </div>
            </div>
            <hr />
        <p className="copyRight">CopyRight  2021 - Sourcery Academy</p>
        </div>
        
        </div>
    );
}

export default Footer;