import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function NewLocationForm() {
  const navigate = useNavigate();
  const [location, setLocation] = useState({
    propertyimage: "",
    address: "",
    state: "",
    zipcode: "",
    bedroomsandbathrooms: "",
    price: "",
  });

  const handleChange = (e) => {
    setLocation({
      ...location,
      [e.target.name]: e.target.value,
    });
  };

  async function handleSubmit(e) {
    e.preventDefault();

    await fetch("http://localhost:4000/locations", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(location),
    });

    navigate("/");
  }

  return (
    <main>
      <h1>Add a New Location</h1>
      <form onSubmit={handleSubmit}>
        <label>
          Property Image URL:
          <input
            type="text"
            name="propertyimage"
            value={location.propertyimage}
            onChange={handleChange}
          />
        </label>
        <br />
        <label>
          Address:
          <input
            type="text"
            name="address"
            value={location.address}
            onChange={handleChange}
          />
        </label>
        <br />
        <label>
          State:
          <input
            type="text"
            name="state"
            value={location.state}
            onChange={handleChange}
          />
        </label>
        <br />
        <label>
          Zip Code:
          <input
            type="text"
            name="zipcode"
            value={location.zipcode}
            onChange={handleChange}
          />
        </label>
        <br />
        <label>
          Bedrooms and Bathrooms:
          <input
            type="text"
            name="bedroomsandbathrooms"
            value={location.bedroomsandbathrooms}
            onChange={handleChange}
          />
        </label>
        <br />
        <label>
          Price:
          <input
            type="text"
            name="price"
            value={location.price}
            onChange={handleChange}
          />
        </label>
        <br />
        <button type="submit">Add Location</button>
      </form>
    </main>
  );
}

export default NewLocationForm;
