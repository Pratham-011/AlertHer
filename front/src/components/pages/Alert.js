import React, { useEffect, useState } from 'react';
import Navbar from '../Navbar';
import { Link } from 'react-router-dom';
import { FaInfoCircle, FaMapMarkerAlt, FaClock } from 'react-icons/fa';
import './Alert.css';

function Alert() {
  const [alerts, setAlerts] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const data = [
        { 
          ip: '42.111.114.8',
          city: 'Mumbai',
          region: 'Maharashtra',
          country: 'IN',
          loc: '19.0728,72.8826',
          org: 'AS38266 Vodafone Idea Ltd',
          postal: '400017',
          timezone: 'Asia/Kolkata',
          readme: 'https://ipinfo.io/missingauth'
        },
        { 
          ip: '192.168.1.1',
          city: 'New York',
          region: 'NY',
          country: 'US',
          loc: '-74.0060,40.7128',
          org: 'AS12345 Example ISP',
          postal: '10001',
          timezone: 'America/New_York',
          readme: 'https://ipinfo.io/missingauth'
        },
        { 
          ip: '203.0.113.1',
          city: 'Tokyo',
          region: 'Tokyo',
          country: 'JP',
          loc: '139.6919,35.6895',
          org: 'AS23456 Tokyo Network',
          postal: '1000001',
          timezone: 'Asia/Tokyo',
          readme: 'https://ipinfo.io/missingauth'
        },
      ];
      setAlerts(data);
    };
    fetchData();
  }, []);

  return (
    <div>
      <Navbar />
      <div className="container mt-5">
        <h2 className="text-center mb-4">IP Location Data</h2>
        
        <div className="row justify-content-center">
          {alerts.map((alert) => (
            <div key={alert.ip} className="col-md-4 col-sm-6 mb-4">
              <div className="card shadow-lg border-0 h-100">
                <div className="card-body p-4 d-flex flex-column">
                  <div className="d-flex justify-content-between align-items-center mb-2">
                    <h5 className="card-title mb-0">IP Information</h5>
                    <span className="badge bg-info text-white">
                      IP Address
                    </span>
                  </div>
                  
                  <div className="location-details mt-3">
                    <p className="text-muted"><FaMapMarkerAlt className="me-2 text-primary" /> {alert.city}, {alert.region}</p>
                    <p className="text-muted"><strong>Country:</strong> {alert.country}</p>
                    <p className="text-muted"><strong>Postal Code:</strong> {alert.postal}</p>
                    <p className="text-muted"><strong>Coordinates:</strong> {alert.loc}</p>
                  </div>
                  
                  <small className="text-muted time-stamp">
                    <FaClock className="me-1 text-secondary" /> {alert.timezone}
                  </small>
                  <Link to={`/ipdetails/${alert.ip}`} className="btn btn-primary mt-auto d-flex align-items-center justify-content-center">
                    <FaInfoCircle className="me-2" /> View Details
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Alert;
