import React from 'react';

import './Desert.css';
import bulleto from './../Assets/images/bulleto.jpg'
import sourcee from './../Assets/images/sourcee.jpg'
const Desert = () =>{
 
    return (
      <div className="desert text-center container mt-4 product-container">
        <h5 className="text-muted text-center text-uppercase">
          Choose Dessert
        </h5>
        <h2 className="text-center">
          <span className="text-danger">Popular </span>{" "}
          <span className="text-success">Desserts</span>
        </h2>

        <div className="row gap-4 justify-content-center mt-4 ">

        <div class="card col-4" style={{ width: "18rem" }}>
            <img src={bulleto} class="card-img-top" alt="..."  />
            <div class="card-body">
            <h4 className="card-title">CupCake</h4>
            <p class="card-text">
                A desert that can help you enzymes to the fullest power.
            <div className="rating mt-2">
                
                <i class="fa fa-star"></i>
                <i class="fa fa-star"></i>
                <i class="fa fa-star"></i>
                <i class="fa fa-star"></i>
                <i class="fa fa-star-o"></i>
              </div>
              
              <p>D50</p>
              </p>
            </div>
          </div>

          <div class="card col-4" >
            <img src={sourcee} class="card-img-top" alt="..." />
            <div class="card-body">
            <h4 className="card-title">CupCake</h4>
            <p class="card-text">
                A desert that can help you enzymes to the fullest power.
            <div className="rating mt-2">
                
                <i class="fa fa-star"></i>
                <i class="fa fa-star"></i>
                <i class="fa fa-star"></i>
                <i class="fa fa-star"></i>
                <i class="fa fa-star-o"></i>
              </div>
              
              <p>D50</p>
              </p>
            </div>
          </div>

          <div className="card  col-4" style={{ width: "18rem" }}>
            <img src={sourcee} className="card-img-top" alt="..." />
            <div class="card-body">
            <h4 className="card-title">CupCake</h4>
            <p className="card-text">
                A desert that can help you enzymes to the fullest power.
            <div className="rating mt-2">
                
                <i class="fa fa-star"></i>
                <i class="fa fa-star"></i>
                <i class="fa fa-star"></i>
                <i class="fa fa-star"></i>
                <i class="fa fa-star-o"></i>
              </div>
              
              <p>D50</p>
              </p>
            </div>

        
        </div>
        </div>

        {/* <div class="row d-flex justify-content-center mt-3">
                <div class="ms-2 col-md img-border d-flex align-items-center border shadow-lg border-danger ">
                    <img className="desert-img h-100 w-50 d-block" src="https://freesvg.org/img/Vanilla-Chocolate-Blue-Cupcake.png" alt=""/>
                    <div class="card-body">
                        <h5 class="card-title text-success fw-bolder fs-3">Cupcake</h5>
                        <p class="card-text text-secondary fw-bolder">Chocolate frosting</p><br />
                        <span className="text-muted fw-bolder d-block border border-success">Price : D35</span>
                        <div className="m-2 d-grid gap-2">
                            <button className="btn btn-outline-success btn-block">Buy</button>
                        </div>
                    </div>
                </div>    
                <div class="ms-2 col-md img-border d-flex align-items-center border shadow-lg border-danger ">
                    <img className="desert-img h-100 w-50 d-block" src="https://freesvg.org/img/Vanilla-Chocolate-Blue-Cupcake.png" alt=""/>
                    <div class="card-body">
                        <h5 class="card-title text-success fw-bolder fs-3">Cupcake</h5>
                        <p class="card-text text-secondary fw-bolder">Chocolate frosting</p><br />
                        <span className="text-muted fw-bolder d-block border border-success ">Price : D35</span>
                        <div className="m-2 d-grid gap-2">
                            <button className="btn btn-outline-success btn-block">Buy</button>
                        </div>
                    </div>
                </div>    
                <div class=" ms-2 col-md img-border d-flex align-items-center border shadow-lg border-danger">
                    <img className="desert-img h-100 w-50 d-block" src="https://freesvg.org/img/Vanilla-Chocolate-Blue-Cupcake.png" alt=""/>
                    <div class="card-body">
                        <h5 class="card-title text-success fw-bolder fs-3">Cupcake</h5>
                        <p class="card-text text-secondary fw-bolder">Chocolate frosting</p><br />
                        <span className="text-muted fw-bolder d-block border border-success ">Price : D35</span>
                        <div className="m-2 d-grid gap-2">
                            <button className="btn btn-outline-success btn-block">Buy</button>
                        </div>
                    </div>
                </div>    
                 
             
            </div>
    */}
      </div>
    );
}

export default Desert;