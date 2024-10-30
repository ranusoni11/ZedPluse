import React, { useState, useEffect } from 'react';
import './currentstatus.css';

const CurrentStatus = () => {
  const [vehicleLogs, setVehicleLogs] = useState([]);

  const vehicleDetails = {
    entryStatus: 'Successful',
    vehicleNumber: 'RJ07LS0618',
    vehicleType: 'Bike',
    vehicleModle: 'Meteor',
    vehicleImg: 'img',
    entryTime: '9:20',
  };

  useEffect(() => {
    setVehicleLogs([vehicleDetails]);
  }, []);
  return (
    <div className='container ccard-body'>
      {
        vehicleLogs.map((element, index) => (
          <div className="card card-style" key={index}>
            <div className="card-content">
              <div className="col-md-4">
                <img src={element.vehicleImg} className="card-img" alt="Vehicle" />
              </div>
              <div className="sub-content">
                <div className="text-content">
                  <h5 className="card-title">{element.vehicleNumber}</h5>
                  <p className="card-text">{element.vehicleType}</p>
                  <p className="card-text">{element.vehicleModle}</p>
                  <p className="card-text"><small className="text-body-secondary">{element.entryTime}</small></p>
                </div>
              </div>
            </div>
          </div>
        ))
      }
    </div>
  );
};



{/* <div className="card mb-3 card-style">
  <div className="row g-0 card-content">
  <div className="col-md-4">
            <img src={imageSrc} className="img-fluid rounded-start card-img" alt="..." />
            </div>
          <div className="col-md-8">
          <div className="card-body">
              <h5 className="card-title">Status: {entryStatus}</h5>
              <p className="card-text">Vehicle Number: {vehicleNumber}</p>
              <p className="card-text">Vehicle Type: {vehicleType}</p>
              <p className="card-text"><small className="text-body-secondary">Time: {time}</small></p>
            </div>
          </div>
        </div>
      </div>*/
}
export default CurrentStatus;