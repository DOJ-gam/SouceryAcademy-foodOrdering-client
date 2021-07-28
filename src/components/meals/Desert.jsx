import React from 'react';
import './Desert.css';
const Desert = () =>{
 
    return(
        <div className="desert text-center container">
            <h5 className="text-muted text-center text-uppercase">Choose Dessert</h5>
            <h2 className="text-center"><span className="text-danger">Popular </span> <span className="text-success">Desserts</span></h2>
            <div class="row d-flex justify-content-center mt-3">
                <div class="ms-2 col-md img-border d-flex align-items-center border shadow-lg border-danger border-4">
                    <img className="desert-img h-100 w-50 d-block" src="https://freesvg.org/img/Vanilla-Chocolate-Blue-Cupcake.png" alt=""/>
                    <div class="card-body">
                        <h5 class="card-title text-success fw-bolder fs-3">Cupcake</h5>
                        <p class="card-text text-secondary fw-bolder">Chocolate frosting</p><br />
                        <span className="text-muted fw-bolder d-block border border-success border-5">Price : D35</span>
                        <div className="m-2 d-grid gap-2">
                            <button className="btn btn-outline-success btn-block">Buy</button>
                        </div>
                    </div>
                </div>    
                <div class="ms-2 col-md img-border d-flex align-items-center border shadow-lg border-danger border-4">
                    <img className="desert-img h-100 w-50 d-block" src="https://freesvg.org/img/Vanilla-Chocolate-Blue-Cupcake.png" alt=""/>
                    <div class="card-body">
                        <h5 class="card-title text-success fw-bolder fs-3">Cupcake</h5>
                        <p class="card-text text-secondary fw-bolder">Chocolate frosting</p><br />
                        <span className="text-muted fw-bolder d-block border border-success border-5">Price : D35</span>
                        <div className="m-2 d-grid gap-2">
                            <button className="btn btn-outline-success btn-block">Buy</button>
                        </div>
                    </div>
                </div>    
                <div class=" ms-2 col-md img-border d-flex align-items-center border shadow-lg border-danger border-4">
                    <img className="desert-img h-100 w-50 d-block" src="https://freesvg.org/img/Vanilla-Chocolate-Blue-Cupcake.png" alt=""/>
                    <div class="card-body">
                        <h5 class="card-title text-success fw-bolder fs-3">Cupcake</h5>
                        <p class="card-text text-secondary fw-bolder">Chocolate frosting</p><br />
                        <span className="text-muted fw-bolder d-block border border-success border-5">Price : D35</span>
                        <div className="m-2 d-grid gap-2">
                            <button className="btn btn-outline-success btn-block">Buy</button>
                        </div>
                    </div>
                </div>    
                
             
            </div>
        </div>
    );
}

export default Desert;