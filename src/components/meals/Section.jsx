import "./Section.css";
const Section = (props) => {
  return (
    <div className="section p-2">
      <div class="tab-content" id="nav-tabContent">
        <div
          class="tab-pane fade show active"
          id="list-home"
          role="tabpanel"
          aria-labelledby="list-home-list"
        >
          <div className="row">
            <h4 className="text-muted fs-3 fw-bolder">Breakfast</h4>
            <div className="col-md-4">
              <img
                className="img-fluid card-img-top h-50"
                src="https://images.unsplash.com/photo-1568901346375-23c9450c58cd?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=602&q=80"
                alt=""
              />
              <div class="card-block">
                <h4 class="card-title text-danger">Burger</h4>
                <p class="card-text">D350</p>
                <a href="##" class="btn btn-success">
                  Order Food
                </a>
              </div>
            </div>

            <div className="col-md-4 col-sm-12">
              <img
                className="img-fluid card-img-top h-50"
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
            </div>

            <div className="col-md-4 ">
              <img
                className="img-fluid card-img-top h-50"
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
            </div>
          </div>
        </div>
        <div
          class="tab-pane fade"
          id="list-profile"
          role="tabpanel"
          aria-labelledby="list-profile-list"
        >
          <div className="row">
          <h4 className="text-muted fs-3 fw-bolder">Lunch</h4>
            <div className="col-md-4 ">
                  <img className="img-fluid card-img-top h-50" src="https://images.unsplash.com/photo-1611712142269-12b7433e28e9?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8YWZyaWNhbiUyMGZvb2R8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60" alt="" />
                  <div class="card-block">
                    <h4 class="card-title text-danger">Yassa Ganarr</h4>
                    <p class="card-text">130</p>
                    <a href="##" class="btn btn-success">Order Food</a>
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
          <div className="row">
          <h4 className="text-muted fs-3 fw-bolder">Dinner</h4>
            <div className="col-md-4 ">
                  <img className="img-fluid card-img-top h-50" src="https://images.unsplash.com/photo-1578974721235-ecce3a0d8dcf?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=630&q=80" alt="" />
                  <div class="card-block">
                    <h4 class="card-title text-danger">CHicken and Chips</h4>
                    <p class="card-text">D200</p>
                    <a href="##" class="btn btn-success">Order Food</a>
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
          <div className="row">
          <h4 className="text-muted fs-3 fw-bolder">Drinks</h4>
            <div className="col-md-4 ">
                  <img className="img-fluid card-img-top h-25" src="https://images.unsplash.com/photo-1551024709-8f23befc6f87?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=825&q=80" alt="" />
                  <div class="card-block">
                    <h4 class="card-title text-danger">Fruits Mojitos</h4>
                    <p class="card-text">190</p>
                    <a href="##" class="btn btn-success">Buy Drink</a>
                  </div>
            </div>
            <div className="col-md-4 ">
                  <img className="img-fluid card-img-top h-25" src="https://images.unsplash.com/photo-1497534446932-c925b458314e?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=407&q=80" alt="" />
                  <div class="card-block">
                    <h4 class="card-title text-danger">Cocktail Drinks</h4>
                    <p class="card-text">D200</p>
                    <a href="##" class="btn btn-success">Buy Drink</a>
                  </div>
            </div>
            <div className="col-md-4 ">
                  <img className="img-fluid card-img-top h-25" src="https://images.unsplash.com/photo-1600271886742-f049cd451bba?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=334&q=80" alt="" />
                  <div class="card-block">
                    <h4 class="card-title text-danger">Orange Juice</h4>
                    <p class="card-text">D100</p>
                    <a href="##" class="btn btn-success">Buy Drink</a>
                  </div>
            </div>
            {/* <div className="col-md-4 ">
                  <img className="img-fluid card-img-top h-25" src="https://images.unsplash.com/photo-1597306691225-69ef217a43cc?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=324&q=80" alt="" />
                  <div class="card-block">
                    <h4 class="card-title text-danger">Watermelon Juice</h4>
                    <p class="card-text">D150</p>
                    <a href="##" class="btn btn-success">Buy Drink</a>
                  </div>
            </div> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Section;
