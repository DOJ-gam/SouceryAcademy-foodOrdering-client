import './SideNav.css';

const SideNav = (props) => {
  return (
    <div className="side px-5 py-5">
        <h1 className="fs-6 w-100">SELECT YOUR MEAL</h1>
        <h6 className="fw-bold display-6 text-danger">Popular</h6>
        <h6 className="fw-bold display-6 text-success">Foods</h6>
      <div class="list-group" id="list-tab" role="tablist">
        <a
          class="list-group-item-action active"
          id="list-home-list"
          data-bs-toggle="list"
          href="#list-home"
          role="tab"
          aria-controls="list-home"
        >
          Breaksfast
        </a>
        <a
          class="list-group-item-action"
          id="list-profile-list"
          data-bs-toggle="list"
          href="#list-profile"
          role="tab"
          aria-controls="list-profile"
        >
          Lunch
        </a>
        <a
          class="list-group-item-action"
          id="list-messages-list"
          data-bs-toggle="list"
          href="#list-messages"
          role="tab"
          aria-controls="list-messages"
        >
          Dinner
        </a>
        <a
          class="list-group-item-action"
          id="list-settings-list"
          data-bs-toggle="list"
          href="#list-settings"
          role="tab"
          aria-controls="list-settings"
        >
          Drinks
        </a>
      </div>
    </div>
  );
};

export default SideNav;
