import React from "react";
import { FaFacebook, FaTwitter, FaInstagram } from "react-icons/fa"; // Icons for social media

const Footer = () => {
  return (
    <footer className="p-6 ">
      <div className="text-center mb-4">
        <span className="font-bold"> &copy; Rohit Kumar Amdahl, </span>
        <span>{new Date().getFullYear()}</span>
      </div>

      {/* Social Media Icons */}
      <div className="flex justify-center space-x-4 mb-6">
        <a
          href="https://www.facebook.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaFacebook size={30} />
        </a>
        <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
          <FaTwitter size={30} />
        </a>
        <a
          href="https://www.instagram.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaInstagram size={30} />
        </a>
      </div>
      <div className="text-center">
        <span> Privacy Policy</span>
        <span> Terms of Service </span>
      </div>
    </footer>
  );
};

export default Footer;
