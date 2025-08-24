"use client";

import { useState } from "react";
import { Mail, Phone, MessageCircle, Instagram, Facebook } from "lucide-react";

const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    // Handle form submission here
  };

  return (
    <div className="min-h-screen bg-white relative overflow-hidden">
      <div className="container mx-auto px-6 py-16">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-[#1D5DAA] mb-2">
            We&apos;d love to hear from you
          </h1>
        </div>

        {/* Main Content */}
        <div className="grid lg:grid-cols-2 gap-12 max-w-5xl mx-auto">
          {/* Left Side - Contact Form */}
          <div className="space-y-6">
            {/* Your Name */}
            <div>
              <label
                htmlFor="name"
                className="block text-black text-sm font-medium mb-2"
              >
                Your Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
                placeholder="Full Name"
                className="w-full px-4 py-3 rounded-2xl border border-gray-300 hover:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent placeholder-gray-400"
                required
              />
            </div>

            {/* Your Email */}
            <div>
              <label
                htmlFor="email"
                className="block text-black text-sm font-medium mb-2"
              >
                Your Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                placeholder="Email Address"
                className="w-full px-4 py-3 rounded-2xl border border-gray-300 hover:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent placeholder-gray-400"
                required
              />
            </div>

            {/* Subject */}
            <div>
              <label
                htmlFor="subject"
                className="block text-black text-sm font-medium mb-2"
              >
                Subject
              </label>
              <input
                type="text"
                id="subject"
                name="subject"
                value={formData.subject}
                onChange={handleInputChange}
                placeholder="Subject"
                className="w-full px-4 py-3 rounded-2xl border border-gray-300 hover:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent placeholder-gray-400"
                required
              />
            </div>

            {/* Your Message */}
            <div>
              <label
                htmlFor="message"
                className="block text-black text-sm font-medium mb-2"
              >
                Your Message
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleInputChange}
                placeholder="Message"
                rows={4}
                className="w-full px-4 py-3 rounded-2xl border border-gray-300 hover:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent placeholder-gray-400 resize-none"
                required
              />
            </div>

            {/* Submit Button */}
            <button
              onClick={handleSubmit}
              className="bg-white w-full border-2 border-[#4A90E2] hover:bg-[#4A90E2] text-[#4A90E2] hover:border-[#4A90E2] hover:text-white px-5 py-2 rounded-2xl text-sm font-medium transition-colors duration-400"
            >
              Send Message
            </button>
          </div>

          {/* Right Side - Contact Info */}
          <div className="bg-[#1D5DAA] rounded-2xl p-8 text-white shadow-lg">
            <div className="mb-8">
              <h3 className="text-2xl font-bold mb-2">
                Hi! We Are Always Here
              </h3>
              <h4 className="text-xl font-semibold">To Help You</h4>
            </div>

            <div className="space-y-6">
              {/* Email */}
              <div className="flex items-center space-x-4">
                <div className="bg-white/20 p-3 rounded-lg">
                  <Mail className="w-6 h-6" />
                </div>
                <div>
                  <p className="font-semibold">Email</p>
                  <p className="text-sm opacity-90">hello@yourwebsite.com</p>
                </div>
              </div>

              {/* WhatsApp */}
              <div className="flex items-center space-x-4">
                <div className="bg-white/20 p-3 rounded-lg">
                  <Phone className="w-6 h-6" />
                </div>
                <div>
                  <p className="font-semibold">WhatsApp</p>
                  <p className="text-sm opacity-90">+62 823 xxxx xxxx</p>
                </div>
              </div>

              {/* Telegram */}
              <div className="flex items-center space-x-4">
                <div className="bg-white/20 p-3 rounded-lg">
                  <MessageCircle className="w-6 h-6" />
                </div>
                <div>
                  <p className="font-semibold">Telegram</p>
                  <p className="text-sm opacity-90">+62 823 xxxx xxxx</p>
                </div>
              </div>
            </div>

            {/* Connect With Us */}
            <div className="mt-8">
              <p className="font-semibold mb-4">Connect With Us</p>
              <div className="flex space-x-4">
                <div className="bg-white/20 p-3 rounded-lg hover:bg-white/30 transition-colors cursor-pointer">
                  <Instagram className="w-5 h-5" />
                </div>
                <div className="bg-white/20 p-3 rounded-lg hover:bg-white/30 transition-colors cursor-pointer">
                  <Facebook className="w-5 h-5" />
                </div>
                <div className="bg-white/20 p-3 rounded-lg hover:bg-white/30 transition-colors cursor-pointer">
                  <svg
                    className="w-5 h-5"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
