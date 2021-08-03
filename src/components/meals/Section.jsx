import ProductCard from "./ProductCard";
import "./Section.css";
import bulleto from "./../Assets/images/bulleto.jpg";
const Section = (props) => {
  return (
    <div className="section mb-4">
      <div class="tab-content" id="nav-tabContent">
        <div
          class="tab-pane fade show active"
          id="list-home"
          role="tabpanel"
          aria-labelledby="list-home-list"
        >
          <div className="row breakfast mb-4">
            <h4 className="text-muted fs-3 fw-bolder">Breakfast</h4>
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />

            <div className="col-lg-4 col-md-6 mb-4 ">
              <div className="pro-box">
                <div className="pro-img card-img-top">
                 
                    <img src={bulleto} alt=""  style={{width:'100%',height:'200px'}}/>
                  
                </div>
                <div className="product-details-wrap">
                  <div className="product-details">
                    <h4>Bulleto</h4>

                    <p className="pro-pricing">D100.00</p>
                  </div>
                  <div className="product-details">
                    <p>
                    Bulleto get the traditional breakFast dish.
                    </p>
                  </div>
                  <a href="##" class="btn btn-success">
                  Order Food
                </a>
                </div>
              </div>
            </div>

            <div className="col-lg-4 col-md-6 mb-4">
              <div className="pro-box">
                <div className="pro-img card-img-top">
                 
                    <img src={bulleto} alt=""  style={{width:'100%',height:'200px'}}/>
                  
                </div>
                <div className="product-details-wrap">
                  <div className="product-details">
                    <h4>Bulleto</h4>

                    <p className="pro-pricing">D100.00</p>
                  </div>
                  <div className="product-details">
                    <p>
                    Bulleto get the traditional breakFast dish
                    </p>
                  </div>
                  <a href="##" class="btn btn-success">
                  Order Food
                </a>
                </div>
              </div>
            </div>

            <div className="col-lg-4 col-md-6 mb-4">
              <div className="pro-box">
                <div className="pro-img card-img-top">
                 
                    <img src={bulleto} alt=""  style={{width:'100%',height:'200px'}}/>
                  
                </div>
                <div className="product-details-wrap">
                  <div className="product-details">
                    <h4>Bulleto</h4>

                    <p className="pro-pricing">D100.00</p>
                  </div>
                  <div className="product-details">
                    <p>
                      Bulleto get the traditional breakFast dish
                    </p>
                  </div>
                  <a href="##" class="btn btn-success">
                  Order Food
                </a>
                </div>
              </div>
            </div>

            {/* <div className="col-md-4 ">
              <img
                className="img-fluid card-img-top h-40"
                src="https://images.unsplash.com/photo-1561651823-34feb02250e4?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=478&q=80"
                alt=""
              />
              <div class="card-block">
                <h4 class="card-title text-danger">Shawarma</h4>
                <p class="card-text">D250</p>
                <a href="##" class="btn btn-success">
                  Order Food
                </a>
              </div>
            </div> */}

            {/* <div className="col-md-4 ">
              <img
                className="img-fluid card-img-top h-40"
                src="https://images.unsplash.com/photo-1554280238-54bb925fc043?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80"
                alt=""
              />
              <div class="card-block">
                <h4 class="card-title text-danger">Scrambled Egges</h4>
                <p class="card-text">D150</p>
                <a href="##" class="btn btn-success">
                  Order Food
                </a>
              </div>
            </div> */}
          </div>

        </div>

        <div
          class="tab-pane fade"
          id="list-profile"
          role="tabpanel"
          aria-labelledby="list-profile-list"
        >
        

          <div className="row lunch mb-4">
            <h4 className="text-muted fs-3 fw-bolder">Lunch</h4>            

            <div className="col-lg-4 col-md-6 mb-4  ">
              <div className="pro-box">
                <div className="pro-img card-img-top">
                 
                    <img src="https://images.unsplash.com/photo-1611712142269-12b7433e28e9?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8YWZyaWNhbiUyMGZvb2R8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60 "
                 alt="yassa ganarr photo"  style={{width:'100%',height:'200px'}}/>
                    
                  
                </div>
                <div className="product-details-wrap">
                  <div className="product-details">
                    <h4>Yassa Ganarr</h4>

                    <p className="pro-pricing">D100.00</p>
                  </div>
                  <div className="product-details">
                    <p>
                    Bulleto get the traditional breakFast dish.
                    </p>
                  </div>
                  <a href="##" class="btn btn-success">
                  Order Food
                </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div
          class="tab-pane fade"
          id="list-messages"
          role="tabpanel"
          aria-labelledby="list-messages-list"
        >
          <div className="row dinner mb-4">
            <h4 className="text-muted fs-3 fw-bolder">Dinner</h4>

            <div className="col-lg-4 col-md-6 mb-4  ">
              <div className="pro-box">
                <div className="pro-img card-img-top">
                 
                    <img src="https://images.unsplash.com/photo-1578974721235-ecce3a0d8dcf?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=630&q=80"
                 alt="yassa ganarr photo"  style={{width:'100%',height:'200px'}}/>
                    
                  
                </div>
                <div className="product-details-wrap">
                  <div className="product-details">
                    <h4>Chicken and Chips</h4>

                    <p className="pro-pricing">D250.00</p>
                  </div>
                  <div className="product-details">
                    <p>
                    Bulleto get the traditional breakFast dish.
                    </p>
                  </div>
                  <a href="##" class="btn btn-success">
                  Order Food
                </a>
                </div>
              </div>
            </div>

          </div>
        </div>
        <div
          class="tab-pane fade"
          id="list-settings"
          role="tabpanel"
          aria-labelledby="list-settings-list"
        >
          <div className="row drinks mb-4">
            <h4 className="text-muted fs-3 fw-bolder">Drinks</h4>



            
            <div className="col-lg-4 col-md-6 mb-4  ">
              <div className="pro-box">
                <div className="pro-img card-img-top">
                 
                    <img src="https://images.unsplash.com/photo-1497534446932-c925b458314e?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=407&q=80"
                alt="yassa ganarr photo"  style={{width:'100%',height:'200px'}}/>
                    
                  
                </div>
                <div className="product-details-wrap">
                  <div className="product-details">
                    <h4>Cocktail Drinks</h4>

                    <p className="pro-pricing">D100.00</p>
                  </div>
                  <div className="product-details">
                    <p>
                    Freshing up
                    </p>
                  </div>
                  <a href="##" class="btn btn-success">
                  Order Food
                </a>
                </div>
              </div>
            </div>

            
            <div className="col-lg-4 col-md-6 mb-4 ">
              <div className="pro-box">
                <div className="pro-img card-img-top">
                 
                    <img src="https://images.unsplash.com/photo-1600271886742-f049cd451bba?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=334&q=80"
                alt="Orange juice "  style={{width:'100%',height:'200px'}}/>
                  
                </div>
                <div className="product-details-wrap">
                  <div className="product-details">
                    <h4>Orange Juice</h4>

                    <p className="pro-pricing">D75.00</p>
                  </div>
                  <div className="product-details">
                    <p>
                    Freshing up 
                    </p>
                  </div>
                  <a href="##" class="btn btn-success">
                  Buy Drink
                </a>
                </div>
              </div>
            </div>

            <div className="col-lg-4 col-md-6 mb-4 ">
              <div className="pro-box">
                <div className="pro-img card-img-top">
                 
                    <img src="https://images.unsplash.com/photo-1600271886742-f049cd451bba?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=334&q=80"
                alt="Orange juice "  style={{width:'100%',height:'200px'}}/>
                  
                </div>
                <div className="product-details-wrap">
                  <div className="product-details">
                    <h4>Orange Juice</h4>

                    <p className="pro-pricing">D100.00</p>
                  </div>
                  <div className="product-details">
                    <p>
                    Bulleto get the traditional breakFast dish.
                    </p>
                  </div>
                  <a href="##" class="btn btn-success">
                  Buy Drink
                </a>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
};

        export default Section;
