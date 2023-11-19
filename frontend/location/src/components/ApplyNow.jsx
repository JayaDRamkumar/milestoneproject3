import React, { useState } from 'react';

const ApplyNowForm = () => {
  const [formData, setFormData] = useState({
    applicantsname: '',
    phonenumber: '',
    over18: '',
    socialsecurity: '',
  });


  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
  };

  return (
    <div>
      <h2>Apply Now Form</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Applicant's Name:
          <input
            type="text"
            name="applicantsname"
            value={formData.applicantsname}
            onChange={handleChange}
          />
        </label>
       

        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default ApplyNowForm;
