import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

function Applications() {
  const [applications, setApplications] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('http://localhost:4000/applications');
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const resData = await response.json();
        setApplications(resData);
        setLoading(false);
      } catch (err) {
        setError(err);
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  let applicationsFormatted = null;

  if (loading) {
    applicationsFormatted = <p>Loading...</p>;
  } else if (error) {
    applicationsFormatted = <p>Error: {error.message}</p>;
  } else {
    applicationsFormatted = applications?.map((application) => (
      <div className="col-sm-6 application-box" key={application._id}>
        <h2 className="no-underline">
          <Link to={`/application/${application._id}`}>{application.applicantsname}</Link>
        </h2>
        <p className="text">Phone Number: {application.phonenumber}</p>
        <p className="text">Over 18: {application.over18}</p>
        {/* You can add more details here as needed */}
      </div>
    ));
  }

  const handleApplyNow = () => {
    // Navigate to the apply now page
    navigate('/apply-now');
  };

  return (
    <main>
      <div className="row">
        {applicationsFormatted}
        <div className="col-sm-6 application-box">
          <Link to="/apply-now">
            <button>
              Apply Now
            </button>
          </Link>
        </div>
      </div>
    </main>
  );
}

export default Applications;
