import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import ApplyNowForm from './ApplyNowForm'; // Import your ApplyNowForm component

function LocationDetails() {
    const { locationId } = useParams();
    const [locationDetails, setLocationDetails] = useState({});
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [showApplyForm, setShowApplyForm] = useState(false);

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
        setShowApplyForm(true);
    };

    let detailsFormatted = null;

    if (loading) {
        detailsFormatted = <p>Loading...</p>;
    } else if (error) {
        detailsFormatted = <p>Error: {error.message}</p>;
    } else {
        detailsFormatted = (
            <div>
                <h2>{locationDetails.address}</h2>
                <p className="text">{locationDetails.state}</p>
                <p className="text">{locationDetails.zipcode}</p>
                <img style={{ width: '200px' }} src={locationDetails.propertyimage} alt={locationDetails.address} />
                <p className="text">{locationDetails.bedroomsandbathrooms}</p>
                <button onClick={handleApplyNow}>Apply Now</button>
                {showApplyForm && <ApplyNowForm />} {/* Conditionally render the ApplyNowForm */}
            </div>
        );
    }

    return (
        <main>
            {detailsFormatted}
        </main>
    );
}

export default LocationDetails;
