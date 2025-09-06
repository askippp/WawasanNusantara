"use client";

import { useState } from "react";
import {
  Mail,
  Phone,
  MessageCircle,
  Instagram,
  Facebook,
  CheckCircle,
  X,
} from "lucide-react";

const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<
    "idle" | "success" | "error"
  >("idle");
  const [errors, setErrors] = useState<{ [key: string]: string }>({});

  const validateForm = () => {
    const newErrors: { [key: string]: string } = {};

    if (!formData.name.trim()) newErrors.name = "Name is required";
    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Please enter a valid email address";
    }
    if (!formData.subject.trim()) newErrors.subject = "Subject is required";
    if (!formData.message.trim()) {
      newErrors.message = "Message is required";
    } else if (formData.message.trim().length < 10) {
      newErrors.message = "Message must be at least 10 characters long";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));

    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: "" }));
    }
  };

  const simulateApiCall = () => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        Math.random() > 0.1
          ? resolve("Message sent successfully!")
          : reject("Failed to send message.");
      }, 2000);
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validateForm()) return;

    setIsSubmitting(true);
    setSubmitStatus("idle");

    try {
      await simulateApiCall();
      setSubmitStatus("success");
      setTimeout(() => {
        setFormData({ name: "", email: "", subject: "", message: "" });
        setSubmitStatus("idle");
      }, 3000);
    } catch {
      setSubmitStatus("error");
      setTimeout(() => setSubmitStatus("idle"), 5000);
    } finally {
      setIsSubmitting(false);
    }
  };

  const getInputClassName = (fieldName: string) => {
    const baseClassName =
      "w-full px-4 py-3 rounded-2xl border text-black transition-all duration-200 placeholder-gray-400"; // <-- text-black
    if (errors[fieldName]) {
      return `${baseClassName} border-red-500 focus:ring-2 focus:ring-red-500 focus:border-transparent`;
    }
    return `${baseClassName} border-gray-300 hover:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent`;
  };

  return (
    <div className="min-h-screen bg-white relative overflow-hidden">
      <div className="container mx-auto px-6 py-16">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl mt-16 font-bold text-[#1D5DAA] mb-2">
            We&apos;d love to hear from you
          </h1>
        </div>

        {/* Success/Error Messages */}
        {submitStatus === "success" && (
          <div className="max-w-5xl mx-auto mb-6">
            <div className="bg-green-50 border border-green-200 rounded-lg p-4 flex items-center space-x-3">
              <CheckCircle className="w-5 h-5 text-green-600" />
              <p className="text-green-800 font-medium">
                Thank you! Your message has been sent successfully. We'll get
                back to you soon.
              </p>
            </div>
          </div>
        )}

        {submitStatus === "error" && (
          <div className="max-w-5xl mx-auto mb-6">
            <div className="bg-red-50 border border-red-200 rounded-lg p-4 flex items-center space-x-3">
              <X className="w-5 h-5 text-red-600" />
              <p className="text-red-800 font-medium">
                Sorry, there was an error sending your message. Please try again
                later.
              </p>
            </div>
          </div>
        )}

        {/* Main Content */}
        <div className="grid lg:grid-cols-2 gap-12 max-w-5xl mx-auto">
          {/* Left Side - Contact Form */}
          <div className="space-y-6">
            <form onSubmit={handleSubmit}>
              {/* Name */}
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
                  className={getInputClassName("name")}
                  disabled={isSubmitting}
                />
                {errors.name && (
                  <p className="text-red-500 text-sm mt-1">{errors.name}</p>
                )}
              </div>

              {/* Email */}
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
                  className={getInputClassName("email")}
                  disabled={isSubmitting}
                />
                {errors.email && (
                  <p className="text-red-500 text-sm mt-1">{errors.email}</p>
                )}
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
                  className={getInputClassName("subject")}
                  disabled={isSubmitting}
                />
                {errors.subject && (
                  <p className="text-red-500 text-sm mt-1">{errors.subject}</p>
                )}
              </div>

              {/* Message */}
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
                  placeholder="Tell us how we can help you..."
                  rows={4}
                  className={`${getInputClassName("message")} resize-none`}
                  disabled={isSubmitting}
                />
                {errors.message && (
                  <p className="text-red-500 text-sm mt-1">{errors.message}</p>
                )}
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                disabled={isSubmitting}
                className={`w-full px-5 py-3 rounded-2xl text-sm font-medium transition-all duration-300 ${
                  isSubmitting
                    ? "bg-gray-300 text-gray-500 cursor-not-allowed"
                    : "bg-white border-2 border-[#4A90E2] hover:bg-[#4A90E2] text-[#4A90E2] hover:text-white"
                }`}
              >
                {isSubmitting ? (
                  <div className="flex items-center justify-center space-x-2">
                    <div className="w-4 h-4 border-2 border-gray-400 border-t-transparent rounded-full animate-spin"></div>
                    <span>Sending...</span>
                  </div>
                ) : (
                  "Send Message"
                )}
              </button>
            </form>
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
                  <p className="text-sm opacity-90">
                    aPangkat3@gmail.com
                  </p>
                </div>
              </div>

              {/* WhatsApp */}
              <div className="flex items-center space-x-4">
                <div className="bg-white/20 p-3 rounded-lg">
                  <Phone className="w-6 h-6" />
                </div>
                <div>
                  <p className="font-semibold">WhatsApp</p>
                  <p className="text-sm opacity-90">+62 821 2345 6789</p>
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
