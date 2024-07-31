import React, { useState } from 'react';
import { useTheme } from '../../ThemeContext';
import Social from './Social'; // Import the Social component

export default function Contact() {
  const { isSun } = useTheme();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log('Form submitted:', formData);
    // Reset form after submission
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <div
      className="min-h-screen flex flex-col items-center px-8 transition-colors duration-300"
      style={{ backgroundColor: isSun ? '#FFD700' : '#FFFACD' }}
    >
      <h1 className={`text-6xl font-bold text-center mb-16 mt-16 ${
        isSun ? 'text-black' : 'text-black'
      }`}>
        Contact Me
      </h1>

      <div
        className={`w-full max-w-lg p-8 rounded-lg shadow-lg ${
          isSun ? 'bg-white' : 'bg-gray-700'
        }`}
      >
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label htmlFor="name" className={`block mb-2 ${isSun ? 'text-gray-700' : 'text-white'}`}>Name</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              className={`w-full px-3 py-2 border rounded-md ${
                isSun ? 'border-gray-300 text-black' : 'border-gray-600 bg-gray-800 text-white'
              }`}
            />
          </div>
          <div>
            <label htmlFor="email" className={`block mb-2 ${isSun ? 'text-gray-700' : 'text-white'}`}>Email</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className={`w-full px-3 py-2 border rounded-md ${
                isSun ? 'border-gray-300 text-black' : 'border-gray-600 bg-gray-800 text-white'
              }`}
            />
          </div>
          <div>
            <label htmlFor="message" className={`block mb-2 ${isSun ? 'text-gray-700' : 'text-white'}`}>Message</label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
              rows="4"
              className={`w-full px-3 py-2 border rounded-md ${
                isSun ? 'border-gray-300 text-black' : 'border-gray-600 bg-gray-800 text-white'
              }`}
            ></textarea>
          </div>
          <button
            type="submit"
            className={`w-full py-2 px-4 bg-blue-600 text-white font-semibold rounded-lg shadow-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-75`}
          >
            Send Message
          </button>
        </form>
      </div>

      <div className="mt-12 text-center mb-10">
        <p className={`text-xl ${isSun ? 'text-gray-700' : 'text-black'}`}>
          Or reach out directly:
        </p>
        <p className={`text-lg mt-2 ${isSun ? 'text-gray-600' : 'text-gray-400'}`}>
          Email: example@email.com
        </p>
        <p className={`text-lg ${isSun ? 'text-gray-600' : 'text-gray-400'}`}>
          Phone: (123) 456-7890
        </p>
      </div>


    </div>
  );
}
