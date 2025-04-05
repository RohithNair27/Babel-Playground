import React from "react";
import { FaGithub, FaXTwitter, FaLinkedin } from "react-icons/fa6"; // FaXTwitter is from v6

function Footer() {
  return (
    <footer>
      <span>Made with ❤️ by Rohith</span>
      <div className="footer-links">
        <a>
          <FaGithub size={25} />
        </a>
        <a>
          <FaXTwitter size={25} />
        </a>
        <a>
          <FaLinkedin size={25} />
        </a>
      </div>
    </footer>
  );
}

export default Footer;
