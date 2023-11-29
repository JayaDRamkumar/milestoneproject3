import React, { useState } from 'react';

const NewLocationForm = () => {
  const [formData, setFormData] = useState({
    propertyName: '',
    address: '',
    bedrooms: '',
    bathrooms: '',
    image: '',
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
      <h2>New Location Form</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Property Name:
          <input
            type="text"
            name="propertyName"
            value={formData.propertyName}
            onChange={handleChange}
          />
        </label>
        <br />
        <label>
          Address:
          <input
            type="text"
            name="address"
            value={formData.address}
            onChange={handleChange}
          />
        </label>
        <br />
        <label>
          Number of Bedrooms:
          <input
            type="number"
            name="bedrooms"
            value={formData.bedrooms}
            onChange={handleChange}
          />
        </label>
        <br />
        <label>
          Number of Bathrooms:
          <input
            type="number"
            name="bathrooms"
            value={formData.bathrooms}
            onChange={handleChange}
          />
        </label>
        <br />
        <label>
          Property Photos:
          <input
            type="image"
            name="propertyimage"
            value={formData.image}
            onChange={handleChange}
          />
        </label>
        <br />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default NewLocationForm;