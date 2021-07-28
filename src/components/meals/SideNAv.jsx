import  React, { useState } from 'react';
import './SideNav.css';

const SideNav = (props) => {

  const [myactive, setactive] = useState("");
  const toggleAcive = ()=>{
    setactive(myactive === "" ? "my-active" : "")
    console.log('object');
  }
  const changeTab = ()=>{
    
    const sideTabs = document.querySelectorAll('.side-tabs');
    sideTabs.forEach(sideTab =>{
      sideTab.addEventListener('click', ()=>{
        removeActive();
        sideTab.classList.add('my-active');
        // console.log(sideTab.classList);
        // console.log('smethig')
      })
    })
    
    function removeActive(){
      sideTabs.forEach(sideTab =>{
        sideTab.classList.remove('my-active')
        sideTab.classList.remove('active')
      })
    }
}
  return (
    <div className="side px-5 py-3">
        {/* <h1 className="fs-6 w-100">SELECT YOUR MEAL</h1> */}
        <h6 className="fw-bold display-6 text-danger">Popular</h6>
        <h6 className="fw-bold display-6 text-success">Foods</h6>
      <div class="list-group" id="list-tab" role="tablist">
        <a
          onclick={toggleAcive}
          className={`${myactive}`}
          id="list-home-list"
          data-bs-toggle="list"
          href="#list-home"
          role="tab"
          aria-controls="list-home"
          >
          Breaksfast
        </a>
        <a
          className={`${myactive}`}
          id="list-profile-list"
          data-bs-toggle="list"
          href="#list-profile"
          role="tab"
          aria-controls="list-profile"
          onclick={toggleAcive}        >
          Lunch
        </a>
        <a
          className={`${myactive}`}
          id="list-messages-list"
          data-bs-toggle="list"
          href="#list-messages"
          role="tab"
          aria-controls="list-messages"
          onclick={toggleAcive}        >
          Dinner
        </a>
        <a
          className={`${myactive}`}
          id="list-settings-list"
          data-bs-toggle="list"
          href="#list-settings"
          role="tab"
          aria-controls="list-settings"
          onclick={toggleAcive}        >
          Drinks
        </a>
      </div>
    </div>
  );
};

export default SideNav;
