import React from 'react';
import {Fragment} from "react";
import SideNav from './SideNAv'
import Section from './Section'

const Meals = props => {
  return (
    <Fragment>
      <div className="row">
        <div className="col-md-4">
          <SideNav/>
        </div>
        <div className="col-md-8">
          <Section/>
        </div>
      </div>
    </Fragment>
  );
}

export default Meals;