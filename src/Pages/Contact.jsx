import { useState } from "react";
import '../Styles/Contact.css';


const Contact = () => {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const validate = () => {
    const newErrors = {};
    if (form.name.trim() === "") newErrors.name = "Name is required";
    if (!form.email.includes("@")) newErrors.email = "Email must contain @";
    return newErrors;
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    const newErrors = validate();
    setErrors(newErrors);

    if (Object.keys(newErrors).length === 0) {
      setForm({ name: "", email: "", message: "" });
      setSubmitted(true);
    }else{
        setSubmitted(false);  
    }
  };

  return (
    <div className="contact-page">
      <h2>Contact Us</h2>
      <form onSubmit={handleSubmit}>
        <input
          name="name"
          value={form.name}
          onChange={handleChange}
          placeholder="Name"
        />
        {errors.name && <p className="error">{errors.name}</p>}

        <input
          name="email"
          type="email"
          value={form.email}
          onChange={handleChange}
          placeholder="Email"
        />
        {errors.email && <p className="error">{errors.email}</p>}

        <textarea
          name="message"
          value={form.message}
          onChange={handleChange}
          placeholder="Message"
        />

        <button type="submit">Send Message</button>
      </form>
      {submitted && <p>Thank you for your feedback!</p>}
    </div>
  );
};

export default Contact;
