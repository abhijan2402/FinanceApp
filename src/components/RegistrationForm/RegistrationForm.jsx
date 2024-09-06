import React, { useState } from "react";
import "./RegistrationForm.css";

const RegistrationForm = ({ closeModal }) => {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    phone: "",
    query: "",
  });

  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const validateForm = () => {
    let errors = {};
    if (!formData.username) errors.username = "Username is required";
    if (!formData.email) errors.email = "Email is required";
    if (!formData.phone) errors.phone = "Phone number is required";
    if (!formData.query) errors.query = "Query is required";

    setErrors(errors);
    return Object.keys(errors).length === 0;
  };

  return (
    <div className="modal-overlay" onClick={closeModal}>
      <div className="modal-container" onClick={(e) => e.stopPropagation()}>
        <span className="close-button" onClick={closeModal}>
          &times;
        </span>
        <h1>Generate Query</h1>
        <p>Please fill in this form to send a query.</p>
        {submitted && (
          <p style={{ color: "green" }}>Query sent successfully!</p>
        )}

        <form action="https://formspree.io/f/mblrbpyb" method="POST">
          <label>
            <b>Name</b>
          </label>
          <input
            type="text"
            name="username"
            placeholder="Enter name"
            value={formData.username}
            onChange={handleChange}
            required
          />
          {errors.username && (
            <p style={{ color: "red" }}>{errors.username}</p>
          )}

          <label>
            <b>Email</b>
          </label>
          <input
            type="text"
            name="email"
            placeholder="Enter Email"
            value={formData.email}
            onChange={handleChange}
            required
          />
          {errors.email && <p style={{ color: "red" }}>{errors.email}</p>}

          <label>
            <b>Phone Number</b>
          </label>
          <input
            type="tel"
            name="phone"
            placeholder="812345678"
            value={formData.phone}
            onChange={handleChange}
            required
          />
          {errors.phone && <p style={{ color: "red" }}>{errors.phone}</p>}

          <label>
            <b>Query</b>
          </label>
          <textarea
            name="query"
            placeholder="Enter your query"
            value={formData.query}
            onChange={handleChange}
            rows="4"
            required
          />
          {errors.query && <p style={{ color: "red" }}>{errors.query}</p>}

          <button type="submit" className="btn">
            Send
          </button>
        </form>
      </div>
    </div>
  );
};

export default RegistrationForm;
