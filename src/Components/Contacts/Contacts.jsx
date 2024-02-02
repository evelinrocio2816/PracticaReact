import React, { useState } from "react";
import emailjs from "emailjs-com";
import './Contacts.css'

const ContactForm = () => {
  const [name, setName] = useState("");
  const [last, setLast] = useState("");
  const [dni, setDni] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [date, setDate] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    // You need to set up your own email template and service on emailJS
    const templateParams = {
      name,
      last,
      dni,
      phone,
      email,
      date,
    };

    // Replace 'your_service_id', 'your_template_id', and 'your_user_id' with your actual values
    emailjs
      .send("service_noqcitr", "template_os577xj", templateParams, "Qwl7mdKxyJU1uLKHt")
      .then(
        (response) => {
          alert("Email sent successfully:", response);
          // Optionally, reset form fields after successful submission
          setName("");
          setLast("");
          setDni("");
          setPhone("");
          setEmail("");
          setDate("");
        },
        (error) => {
          console.log("Email sending failed:", error);
        }
      );
  };

  return (
    <form className="contact-form" onSubmit={handleSubmit}>
    <label>
      Nombre:
      <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
    </label>
    <br />
    <label>
      Apellido:
      <input type="text" value={last} onChange={(e) => setLast(e.target.value)} />
    </label>
    <br />
    <label>
      DNI:
      <input type="number" value={dni} onChange={(e) => setDni(e.target.value)} />
    </label>
    <br />
    <label>
      Teléfono:
      <input type="tel" value={phone} onChange={(e) => setPhone(e.target.value)} />
    </label>
    <br />
    <label>
      Correo electrónico:
      <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
    </label>
    <br />
    <label>
      Fecha:
      <input type="date" value={date} onChange={(e) => setDate(e.target.value)} />
    </label>
    <br />
    <button type="submit">Enviar</button>
  </form>
  );
};

export default ContactForm;
