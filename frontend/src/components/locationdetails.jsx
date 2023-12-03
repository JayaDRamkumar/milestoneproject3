// LocationDetails.jsx
import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';

function LocationDetails() {
  const { locationId } = useParams();
  const [locationDetails, setLocationDetails] = useState({});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchLocationDetails = async () => {
      try {
        const response = await fetch(`http://localhost:4000/locations/${locationId}`);
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const resData = await response.json();
        setLocationDetails(resData);
        setLoading(false);
      } catch (err) {
        setError(err);
        setLoading(false);
      }
    };

    fetchLocationDetails();
  }, [locationId]);

  const handleApplyNow = () => {
    // Navigate to the apply-now route
    navigate('/apply-now');
  };

  let detailsFormatted = null;

  if (loading) {
    detailsFormatted = <p>Loading...</p>;
  } else if (error) {
    detailsFormatted = <p>Error: {error.message}</p>;
  } else {
    detailsFormatted = (
      <div className="details-container">
        <div className="details-card">
          <div className="details-circle">
            <img src={locationDetails.propertyimage} alt={locationDetails.address} />
          </div>
          <div className="details-text">
            <h2>{locationDetails.address}</h2>
            <p className="text">{locationDetails.state}, {locationDetails.zipcode}</p>

            <p className="text">{locationDetails.bedroomsandbathrooms}</p>
            <button onClick={handleApplyNow}>Apply Now</button>
          </div>
        </div>
      </div>
    );
  }

  return <main>{detailsFormatted}</main>;
}

export default LocationDetails;
