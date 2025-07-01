import React from "react";
import { Mail, Phone, Smile } from "lucide-react"; // Optional icons

const Contact = () => {
  return (
    <div className="max-w-2xl mx-auto px-4 py-10 text-center">
      <h1 className="text-4xl font-extrabold text-gray-800 mb-6">📞 Contact Us</h1>

      <p className="text-lg text-gray-600 mb-6">
        Got questions, feedback, or just really strong opinions about biryani?
        We’re all ears — and taste buds. 😋
      </p>

      <div className="bg-white shadow-md rounded-lg p-6 space-y-4 text-left">
        <div className="flex items-center gap-3">
          <Mail className="text-blue-500" size={20} />
          <span className="text-gray-700">
            <strong>Email:</strong>{" "}
            <a href="mailto:support@foodiehub.com" className="underline text-blue-600 hover:text-blue-800">
              support@foodiehub.com
            </a>{" "}
– yes, we actually read them.
          </span>
        </div>

        <div className="flex items-center gap-3">
          <Phone className="text-green-500" size={20} />
          <span className="text-gray-700">
            <strong>Phone:</strong> 1800-FOOD-PLZ{" "}
            <span className="italic text-sm text-gray-500">(just kidding, we don’t have one… yet)</span>
          </span>
        </div>

        <div className="flex items-center gap-3">
          <Smile className="text-yellow-500" size={20} />
          <span className="text-gray-700">
            Or send us a message via food delivery app — just write{" "}
            <em>"I ❤️ Foodie Hub"</em> on a pizza box and hope for the best. 🍕🛵
          </span>
        </div>
      </div>
    </div>
  );
};

export default Contact;
