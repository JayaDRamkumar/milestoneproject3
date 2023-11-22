import React from 'react';
import { useParams } from 'react-router-dom';

const LocationDetails = () => {
  const { id } = useParams();

  const locationData = {
    id: id,
    propertyName: 'Sample Property',
    address: '123 Main St, Cityville',
    bedrooms: 3,
    bathrooms: 2,
  };

  return (
    <div>
      <h2>Location Details</h2>
      <p>
        <strong>Property Name:</strong> {locationData.propertyName}
      </p>
      <p>
        <strong>Address:</strong> {locationData.address}
      </p>
      <p>
        <strong>Bedrooms:</strong> {locationData.bedrooms}
      </p>
      <p>
        <strong>Bathrooms:</strong> {locationData.bathrooms}
      </p>
    </div>
  );
};

export default LocationDetails;