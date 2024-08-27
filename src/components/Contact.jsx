import React, { useState } from 'react';
import emailjs from 'emailjs-com';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs.send(
      'YOUR_SERVICE_ID', // Replace with your EmailJS service ID
      'YOUR_TEMPLATE_ID', // Replace with your EmailJS template ID
      formData,
      'YOUR_USER_ID' // Replace with your EmailJS user ID
    ).then((response) => {
      console.log('SUCCESS!', response.status, response.text);
      alert('Message sent successfully!');
    }).catch((err) => {
      console.error('FAILED...', err);
      alert('Failed to send message. Please try again later.');
    });

    setFormData({
      name: '',
      email: '',
      message: ''
    });
  };

  return (
    <div id="contact" className="p-10 bg-black min-h-screen flex flex-col items-center"> {/* Set background to black */}
      <h2 className="text-5xl font-bold text-[#EAAA00] font-poppins text-center">Contact Me</h2> {/* Mustard yellow color */}
      <p className="text-2xl text-white mt-4 font-poppins text-center">
        I'd love to hear from you! Whether you have a project idea, a question, or just want to say hello, feel free to drop me a message.
      </p>
      <div className="mt-8 text-xl text-white">
        <p>Email: <a href="mailto:pachorikratika7@gmail.com" className="text-[#EAAA00]">pachorikratika7@gmail.com</a></p> {/* Mustard yellow color */}
        <p>LinkedIn: <a href="https://www.linkedin.com/in/kratika2610/" className="text-[#EAAA00]">linkedin.com/in/kratika2610</a></p> {/* Mustard yellow color */}
        <p>GitHub: <a href="https://github.com/Kratika2613" className="text-[#EAAA00]">github.com/Kratika2613</a></p> {/* Mustard yellow color */}
        <p>Twitter: <a href="https://twitter.com/KratikaPachori" className="text-[#EAAA00]">@KratikaPachori</a></p> {/* Mustard yellow color */}
      </div>
      <form className="mt-8 w-full max-w-lg" onSubmit={handleSubmit}>
        <div className="mb-4">
          <label className="block text-white text-sm font-bold mb-2" htmlFor="name">
            Name
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="name"
            name="name"
            type="text"
            placeholder="Your Name"
            value={formData.name}
            onChange={handleChange}
          />
        </div>
        <div className="mb-4">
          <label className="block text-white text-sm font-bold mb-2" htmlFor="email">
            Email
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="email"
            name="email"
            type="email"
            placeholder="Your Email"
            value={formData.email}
            onChange={handleChange}
          />
        </div>
        <div className="mb-4">
          <label className="block text-white text-sm font-bold mb-2" htmlFor="message">
            Message
          </label>
          <textarea
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="message"
            name="message"
            placeholder="Your Message"
            rows="5"
            value={formData.message}
            onChange={handleChange}
          ></textarea>
        </div>
        <div className="flex items-center justify-between">
          <button
            className="bg-[#EAAA00] hover:bg-[#d49400] text-black font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            type="submit"
          >
            Send
          </button> {/* Mustard yellow color */}
        </div>
      </form>
    </div>
  );
};

export default Contact;
