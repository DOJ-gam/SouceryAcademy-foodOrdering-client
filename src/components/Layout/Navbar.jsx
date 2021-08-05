import { Fragment } from "react";
import './Navbar.css'
import CartButton from '../Cart/CartButton'
import { green } from '@material-ui/core/colors';
import FastfoodIcon from '@material-ui/icons/Fastfood';

// import classess from './Navbar.module.css'

const Header = props => {
    return <Fragment>   
        <header className="navbar navbar-light bg-light">
            <div className="container-fluid mx-5">
                <FastfoodIcon style={{color: green[500]}} fontSize="large"/>
                <a href="/" className="navbar-brand">
                    <h3 className="text-danger fw-bolder fs-1 ls-2 ">
                        Senegambia
                        <span className="text-success ms-3">Foodie</span>
                    </h3>
                </a>
                <h6 className="text-muted text-center">Reminder!! Make other menu items and make link for all to view here(Router)</h6>
                <div className="ms-auto">
                    <CartButton/>
                </div>
            </div>
        </header> 
    </Fragment>
}

export default Header;