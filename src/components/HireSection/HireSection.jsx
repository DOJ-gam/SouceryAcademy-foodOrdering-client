import { Fragment } from "react";
import {Fastfood} from '@material-ui/icons'


const HireSection = props =>{
    return(
        <Fragment>
            <div className="container my-5">
                <div className="row align-items-center">
                    <div className="col-md-7">
                        <div className="hire-content text-center">
                            <p className="text-success fs-3 fw-bolder text-uppercase">Work with us</p>
                            <p className="text-dark fw-bolder fs-2 text-capitalize text-center">Work with us as a restaurant owner <br/> or a delivery agent</p>
                            <p>Are you a restaurant owner, a Fastfood owner a transportation company or someone who just wants to earn extra cash by delivering food to our customers?</p>
                            <p> 
                                then
                                <span className="text-danger fs-5 fw-bolder"> Senegambia </span>
                                <span className="text-success fs-5 fw-bolder">Foodie </span>
                                is the right company to contact. We are a Gambian based online food ordering 
                                company that enables people to come online, order foods and drinks, and get
                                them<strong> delivered </strong>to your choice of delivery!
                            </p>
                        </div>
                    </div>
                    <div className="col-md-5">
                        <div className="hire-form bg-danger rounded p-3">
                            <form>
                                <div class="form-group mb-3">
                                    <div class="input-group input-group-lg">
                                        <div class="input-group-prepend">
                                            <span class="input-group-text bg-success text-white"><i class="fa fa-user fa-2x fa-spin"></i></span>
                                        </div>
                                        <input type="text" class="form-control bg-dark text-white input-lg" placeholder="Name" required="required" />
                                    </div>
                                </div>
                                <div class="form-group mb-3">
                                    <div class="input-group input-group-lg">
                                        <div class="input-group-prepend">
                                            <span class="input-group-text bg-success text-white"><i class="fa fa-envelope fa-2x fa-spin p-1"></i></span>
                                        </div>
                                        <input type="email" class="form-control bg-dark text-white input-lg" placeholder="Email" required="required" />
                                    </div>
                                </div>
                                <div class="form-group mb-3">
                                    <div class="input-group input-group-lg">
                                        <div class="input-group-prepend">
                                            <span class="input-group-text bg-success text-white"><i class="fa fa-mobile fa-spin fa-2x p-2"></i></span>
                                        </div>
                                        <input type="text" class="form-control bg-dark text-white input-lg" placeholder="Mobile" required="required" />
                                    </div>
                                </div>
                                <div class="form-group mb-3">
                                    <div class="input-group input-group-lg">
                                        <div class="input-group-prepend">
                                            <span class="input-group-text bg-success text-white"><i class="fas fa-location-arrow fa-pulse fa-spin fa-2x p-1"></i></span>
                                        </div>
                                        <input type="text" class="form-control bg-dark text-white input-lg" placeholder="Address" required="required" />
                                    </div>
                                </div>
                                <div class="form-group mb-3">
                                <div class="input-group input-group-lg">
                                    <div class="input-group-prepend" htmlFor="#select">
                                        <span class="input-group-text bg-success text-white"><i class="fa fa-chevron-down fa-2x p-1 fa-spin"></i></span>
                                    </div>
                                    <select class="custom-select form-control bg-dark text-white" id="select">
                                        <option selected>Who are you?</option>
                                        <option value="1">Restaurant Owner</option>
                                        <option value="2">Job Seeker</option>
                                        <option value="3">Other</option>
                                    </select>
                                </div>
                                </div>
                                <div class="form-group mb-3">
                                    <div class="input-group input-group-lg">
                                        <div class="input-group-prepend">
                                            <span class="input-group-text bg-success text-white">
                                                <i class="fas fa-pencil-alt fa-3x fa-spin"></i>
                                            </span>
                                        </div>
                                        <textarea class="form-control bg-dark text-white" 
                                            placeholder="Enter your Message here.. ..." 
                                            rows="1"> </textarea>
                                    </div>
                                </div>
                                <div className="form-group">
                                <input type="submit" value="Contact Us" class="form-control btn btn-success btn-block btn-lg"></input>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </Fragment>
    );
}

export default HireSection;