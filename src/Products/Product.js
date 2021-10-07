/* eslint-disable no-unused-vars */
import React from 'react';

const Product = (props) => {
    const {
      flight_number,
      mission_name,
      launch_year,
      launch_date_local,
      upcoming,
      launch_success,
      rocket,
    } = props.product;
    return (
      <div>
        <div className="col">
          <div className="card border border-danger">
            <div className="card-body">
              <h4 className="card-title">Flight Number: {flight_number}</h4>
              <h4 className="card-title">
                Rocket Name: {rocket.rocket_name}
              </h4>
              <h4 className="card-title">Mission: {mission_name}</h4>
              <h5>
                Mission Status:
                {!upcoming ? (
                  <span> Mission Finished</span>
                ) : (
                  <span> Up Comming</span>
                )}
              </h5>
              <h5>
                Launch Status:
                {!launch_success ? (
                  <span className="text-danger"> Failure</span>
                ) : (
                  <span className="text-success"> Success </span>
                )}
              </h5>
              <p className="card-text">Launch Time: {launch_date_local}</p>
              <h6 className="card-text">Launch Year: {launch_year}</h6>
            </div>
          </div>
        </div>
      </div>
    );
};

export default Product;