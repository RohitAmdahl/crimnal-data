import React from "react";
import { FaFacebook, FaTwitter, FaInstagram, FaPhoneAlt } from "react-icons/fa"; // Icons for social media
import { BsFillShieldLockFill } from "react-icons/bs"; // For police
import { IoIosCall } from "react-icons/io"; // For ambulance

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

      {/* Important Emergency Numbers */}
      <div className="flex justify-center space-x-8 mb-6">
        <a href="tel:+4723003000" className="flex items-center text-white">
          <IoIosCall size={24} className="mr-2" /> Ambulance: 113
        </a>
        <a href="tel:+4723005000" className="flex items-center text-white">
          <BsFillShieldLockFill size={24} className="mr-2" /> Police: 112
        </a>
      </div>

      {/* Additional Useful Links */}
      <div className="text-center">
        <a href="/privacy-policy" className="text-white mr-4">
          Privacy Policy
        </a>
        <a href="/terms-of-service" className="text-white">
          Terms of Service
        </a>
      </div>
    </footer>
  );
};

export default Footer;
