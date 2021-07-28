import React from 'react';
import {Fragment} from "react";
import SideNav from './SideNAv'
import Section from './Section'
import './Meals.css'
import Desert from './Desert'

const Meals = props => {
  return (
    <Fragment>
      <div className="meals py-3 px-3">
        <div className="row">
          <div className="col-md-3">
            <SideNav/>
          </div>
          <div className="col-md-8 offset-md-1">
            <Section/>
          </div>
          <div className="des col-md-12 py-5">
            <Desert/>
          </div>
        </div>
      </div>
    </Fragment>
  );
}

export default Meals;