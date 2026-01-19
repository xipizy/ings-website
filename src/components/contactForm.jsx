import { useState } from 'react';

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    store: 'Auckland Store',
    email: '',
    message: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    alert('Thank you for your inquiry! We will get back to you soon.');
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div className="space-y-4">
      {/* Name Input */}
      <input
        type="text"
        name="name"
        placeholder="Name"
        value={formData.name}
        onChange={handleChange}
        className="w-full px-6 py-4 bg-gray-300 text-gray-700 placeholder-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500 transition-all"
      />

      {/* Store Dropdown */}
      <select
        name="store"
        value={formData.store}
        onChange={handleChange}
        className="w-full px-6 py-4 bg-gray-300 text-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500 transition-all appearance-none cursor-pointer"
      >
        <option value="Auckland Store">Auckland Store</option>
        <option value="Hamilton Store">Hamilton Store</option>
      </select>

      {/* Email Input */}
      <input
        type="email"
        name="email"
        placeholder="Email"
        value={formData.email}
        onChange={handleChange}
        className="w-full px-6 py-4 bg-gray-300 text-gray-700 placeholder-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500 transition-all"
      />

      {/* Message Textarea */}
      <textarea
        name="message"
        placeholder="Message"
        value={formData.message}
        onChange={handleChange}
        rows="6"
        className="w-full px-6 py-4 bg-gray-300 text-gray-700 placeholder-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500 transition-all resize-none"
      ></textarea>

      {/* Submit Button */}
      <div className="flex justify-center pt-4">
        <button
          onClick={handleSubmit}
          className="bg-red-600 hover:bg-red-700 text-white font-bold text-lg px-16 py-4 rounded-full transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105"
        >
          Submit
        </button>
      </div>
    </div>
  );
}