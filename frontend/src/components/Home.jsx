// Home.js
import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Login from './Login';

function Home() {
  const [locations, setLocations] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [isLoggedIn, setLoggedIn] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('http://localhost:4000/locations');
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const resData = await response.json();
        setLocations(resData);
        setLoading(false);
      } catch (err) {
        setError(err);
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  const handleLogin = (credentials) => {
    // Add authentication logic here, e.g., make an API call to verify credentials
    if (credentials.username === 'Jaya' && credentials.password === 'Ramkumar') {
      setLoggedIn(true);
    } else {
      alert('Invalid username or password');
    }
  };

  const handleAddLocation = () => {
    // Navigate to the add location page
    navigate('/add-location');
  };

  return (
    <main>
      {isLoggedIn ? (
        <div className="row">
          {locations?.map((location) => (
            <div className="col-sm-6 location-box" key={location._id}>
              <img style={{ width: '100%' }} src={location.propertyimage} alt={location.address} />
              
              <h2 className="no-underline">
                <Link to={`/location/${location._id}`}>{location.address}</Link>
              </h2>
              <p className="text">{location.state}, {location.zipcode}</p>
              <p className="text">{location.bedroomsandbathrooms}</p>
            </div>
          ))}
          <div className="col-sm-6 location-box">
            <Link to="/add-location">
              <button>
                Add a New Location
              </button>
            </Link>
          </div>
        </div>
      ) : (
        <Login onLogin={handleLogin} />
      )}
    </main>
  );
}

export default Home;
