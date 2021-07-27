import './Section.css';
const Section = (props) => {
  return (
    <div className="section">
      <div class="tab-content" id="nav-tabContent">
        <div
          class="tab-pane fade show active"
          id="list-home"
          role="tabpanel"
          aria-labelledby="list-home-list"
        >
          <div className="row">
              <div className="col-md-4 img-fluid text-center">
                    <img className="img-fluid" src="https://images.unsplash.com/photo-1513442542250-854d436a73f2?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=558&q=80" alt="" />
                    <span className="display-6 text-success">Food1</span> <br />
                    <span className="text-danger fw-6">D350</span>
              </div>
              <div className="col-md-4 img-fluid text-center">
                    <img className="img-fluid" src="https://images.unsplash.com/photo-1513442542250-854d436a73f2?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=558&q=80" alt="" />
                    <span className="display-6 text-success">Food1</span> <br />
                    <span className="text-danger fw-6">D350</span>
              </div>
              
              <div className="col-md-4 img-fluid text-center">
                    <img className="img-fluid" src="https://images.unsplash.com/photo-1513442542250-854d436a73f2?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=558&q=80" alt="" />
                    <span className="display-6 text-success">Food1</span> <br />
                    <span className="text-danger fw-6">D350</span>
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
            <div className="col-md-4 img-fluid text-center">
                    <img className="img-fluid" src="https://images.unsplash.com/photo-1576107290640-a68caf8256f1?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=375&q=80" alt="" />
                    <span className="display-6 text-success">Food2</span> <br />
                    <span className="text-danger fw-6">D150</span>
            </div>
            <div className="col-md-4 img-fluid text-center">
                    <img className="img-fluid" src="https://images.unsplash.com/photo-1576107290640-a68caf8256f1?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=375&q=80" alt="" />
                    <span className="display-6 text-success">Food2</span> <br />
                    <span className="text-danger fw-6">D150</span>
            </div>
            <div className="col-md-4 img-fluid text-center">
                    <img className="img-fluid" src="https://images.unsplash.com/photo-1576107290640-a68caf8256f1?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=375&q=80" alt="" />
                    <span className="display-6 text-success">Food2</span> <br />
                    <span className="text-danger fw-6">D150</span>
            </div>
        </div>
              
        </div>
        <div
          class="tab-pane fade"
          id="list-messages"
          role="tabpanel"
          aria-labelledby="list-messages-list"
        >
          ...
        </div>
        <div
          class="tab-pane fade"
          id="list-settings"
          role="tabpanel"
          aria-labelledby="list-settings-list"
        >
          ...
        </div>
      </div>
    </div>
  );
};

export default Section;
