import { useState } from "react";

const Contact = () => {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const confirm = () => {
    const newErrors = {};
    if (form.name.trim() === "") newErrors.name = "Name is required";
    if (!form.email.includes("@")) newErrors.email = "Email must contain @";
    return newErrors;
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    const newErrors = confirm();
    setErrors(newErrors);

    if (Object.keys(newErrors).length === 0) {
      setForm({ name: "", email: "", message: "" });
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
      {<p>Thank you for your feedback!</p>}
    </div>
  );
};

export default Contact;
