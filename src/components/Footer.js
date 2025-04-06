import React from "react";
import { FaGithub, FaXTwitter, FaLinkedin } from "react-icons/fa6"; // FaXTwitter is from v6

function Footer() {
  return (
    <footer>
      <span>Made with ❤️ by Rohith</span>
      <div className="footer-links">
        <a href="https://github.com/RohithNair27" target="_blank">
          <FaGithub size={25} />
        </a>
        <a href="https://x.com/RohithNair_27" target="_blank">
          <FaXTwitter size={25} />
        </a>
        <a href="https://www.linkedin.com/in/rohithknair27/" target="_blank">
          <FaLinkedin size={25} />
        </a>
      </div>
    </footer>
  );
}

export default Footer;
