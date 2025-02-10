import { useState } from "react";
import { motion } from "framer-motion";
import { FaLinkedin, FaWhatsapp, FaYoutube, FaGithub } from "react-icons/fa";

const MyContact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [responseMessage, setResponseMessage] = useState("");

  // Validate Inputs
  const validate = () => {
    let errors = {};
    if (!formData.name.trim()) errors.name = "Name is required";
    if (!formData.email.trim()) errors.email = "Email is required";
    else if (!/\S+@\S+\.\S+/.test(formData.email)) errors.email = "Invalid email";
    if (!formData.subject.trim()) errors.subject = "Subject is required";
    if (!formData.message.trim()) errors.message = "Message cannot be empty";
    return errors;
  };

  // Handle Input Change
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setErrors({ ...errors, [e.target.name]: "" });
  };

  // Handle Form Submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    setIsSubmitting(true);
    setResponseMessage("");

    const API_URL = "https://api.web3forms.com/submit";
    const API_KEY = "b9e864b9-27ad-418e-a2ef-4c9df735bbfb"; // Replace with your API key

    const formDataToSend = new FormData();
    formDataToSend.append("name", formData.name);
    formDataToSend.append("email", formData.email);
    formDataToSend.append("subject", formData.subject);
    formDataToSend.append("message", formData.message);
    formDataToSend.append("access_key", API_KEY);

    try {
      const response = await fetch(API_URL, {
        method: "POST",
        body: formDataToSend,
      });
      const result = await response.json();

      if (result.success) {
        setResponseMessage("Message sent successfully!");
        setFormData({ name: "", email: "", subject: "", message: "" });
      } else {
        setResponseMessage("Failed to send message. Try again.");
      }
    } catch (error) {
      setResponseMessage("An error occurred. Please try again.");
    } finally {
      setIsSubmitting(false);
      setTimeout(() => setResponseMessage(""), 3000);
    }
  };

  return (
    <section id="contact" className="py-20 bg-gray-100 dark:bg-slate-900">
      <div className="max-w-4xl mx-auto px-6">
        {/* Title */}
        <motion.h2
          className="text-4xl font-bold text-gray-900 dark:text-gray-100 text-center"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          Contact Me
        </motion.h2>

        {/* Form */}
        <motion.form
          className="mt-10  shadow-lg rounded-lg p-8"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          onSubmit={handleSubmit}
        >
          {["name", "email", "subject", "message"].map((field) => (
            <div key={field} className="mb-6">
              <label className="block text-gray-700 dark:text-gray-300 font-semibold mb-2 capitalize">
                {field}
              </label>
              {field === "message" ? (
                <textarea
                  name={field}
                  rows="4"
                  className={`w-full py-3 pl-4 pr-4 rounded-lg border border-gray-300 dark:border-gray-700 focus:outline-none focus:ring-2 focus:ring-orange-500 dark:bg-gray-800 dark:text-white ${
                    errors[field] ? "border-red-500" : ""
                  }`}
                  placeholder={`Enter your ${field}`}
                  value={formData[field]}
                  onChange={handleChange}
                ></textarea>
              ) : (
                <input
                  type={field === "email" ? "email" : "text"}
                  name={field}
                  className={`w-full py-3 pl-4 pr-4 rounded-lg border border-gray-300 dark:border-gray-700 focus:outline-none focus:ring-2 focus:ring-orange-500 dark:bg-gray-800 dark:text-white ${
                    errors[field] ? "border-red-500" : ""
                  }`}
                  placeholder={`Enter your ${field}`}
                  value={formData[field]}
                  onChange={handleChange}
                />
              )}
              {errors[field] && <p className="text-red-500 text-sm mt-1">{errors[field]}</p>}
            </div>
          ))}

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full bg-orange-500 text-white py-3 rounded-lg text-lg font-semibold hover:bg-orange-600 transition-all disabled:opacity-50"
            disabled={isSubmitting}
          >
            {isSubmitting ? "Sending..." : "Send Message"}
          </button>

          {/* Response Message */}
          {responseMessage && (
            <p className="mt-4 text-center font-semibold text-lg text-gray-900 dark:text-gray-100">
              {responseMessage}
            </p>
          )}
        </motion.form>

        {/* Social Media Links */}
        <div className="mt-10 text-center">
          <p className="text-lg font-semibold text-gray-900 dark:text-gray-100">Let's Connect</p>
          <div className="mt-6 flex justify-center gap-6">
                    <motion.a
                      href="https://linkedin.com/in/jawad-khan-a28505326"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-900 dark:text-gray-100 text-2xl hover:text-blue-600"
                      whileHover={{ scale: 1.2 }}
                    >
                      <FaLinkedin size={35} />
                    </motion.a>
          
                    <motion.a
                      href="https://wa.me/+923057573688?text=Hello%2C%20I%20am%20interested%20in%20your%20services.
          "           target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-900 dark:text-gray-100 text-2xl hover:text-green-500"
                      whileHover={{ scale: 1.2 }}
                    >
                      <FaWhatsapp size={35}  />
                    </motion.a>
          
                    <motion.a
                      href="https://www.youtube.com/@Jawad_khan6686"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-900 dark:text-gray-100 text-2xl hover:text-red-600"
                      whileHover={{ scale: 1.2 }}
                    >
                      <FaYoutube size={35}  />
                    </motion.a>
          
                    <motion.a
                      href="https://github.com/jawadali6688"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-900 dark:text-gray-100 text-2xl hover:text-gray-600"
                      whileHover={{ scale: 1.2 }}
                    >
                      <FaGithub size={35}  />
                    </motion.a>
                  </div>
        </div>
      </div>
    </section>
  );
};

export default MyContact;
