import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

function Home() {
    const [locations, setLocations] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

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

    let locationFormatted = null;

    if (loading) {
        locationFormatted = <p>Loading...</p>;
    } else if (error) {
        locationFormatted = <p>Error: {error.message}</p>;
    } else {

        locationFormatted = locations?.map((location) => (
            <div className="col-sm-6 location-box" key={location._id}>
              <img style={{ width: '100%' }} src={location.propertyimage} alt={location.address} />
             
                <h2 className="no-underline">
                    <Link to={`/location/${location._id}`}>{location.address}</Link>
                </h2>

              <p className="text">{location.state}, {location.zipcode}</p>
              <p className="text">{location.bedroomsandbathrooms}</p>
            </div>
          ));
          
          

    }

    return (
        <main>
        
            <div className="row">{locationFormatted}</div>
        </main>
    );
}

export default Home;
