import React, { useState } from "react";
import "./ContactForm.css"; 

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    mobile: "",
    message: "",
  });

  const [success, setSuccess] = useState("");
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  
  const handleSubmit = (e) => {
    e.preventDefault();

    const { name, email, mobile, message } = formData;

    if (!name || !email || !mobile || !message) {
      alert("All fields are required!");
      return;
    }

    if (!email.includes("@") || !email.includes(".")) {
      alert("Invalid email format! Example: admin@gmail.com");
      return;
    }

    if (mobile.length !== 10 || isNaN(mobile)) {
      alert("Mobile number must be 10 digits!");
      return;
    }

    console.log("Form Data:", formData);
    setSuccess("Form submitted successfully!");
    setFormData({ name: "", email: "", mobile: "", message: "" });
  };

  return (
    <div className="contact-container">
      <h2>Contact Form</h2>
      {success && <p className="success-message">{success}</p>}
      <form onSubmit={handleSubmit}>
        {["name", "email", "mobile", "message"].map((field) => (
          <input key={field} type={field === "message" ? "textarea" : "text"} name={field} 
           placeholder={field.charAt(0).toUpperCase() + field.slice(1)} value={formData[field]} onChange={handleChange} required />
        ))}
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default ContactForm;
