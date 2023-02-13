import React from "react";
import "./contact.css";

import { MdOutlineEmail } from "react-icons/md";
import { AiOutlineLinkedin } from "react-icons/ai";
import { RiMessengerLine } from "react-icons/ri";

const Contact = () => {
  return (
    <section id="contact">
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>

      <div className="container contact_container">
        <div className="contact_options">
          <article className="contact_option">
            <MdOutlineEmail className="contact_option-icon" />
            <h4>Email</h4>
            <h5>hxueqitao@gmail.com</h5>
            <a href="mailto:hxueqitao@gmail.com" target="_blank">
              Send a message
            </a>
          </article>
          <article className="contact_option">
            <AiOutlineLinkedin className="contact_option-icon" />
            <h4>LinkedIn</h4>
            <h5>Xueqi Huang</h5>
            <a href="https://www.linkedin.com/in/xue-qi-huang/" target="_blank">
              Send a message
            </a>
          </article>
          <article className="contact_option">
            <RiMessengerLine className="contact_option-icon" />
            <h4>Messenger</h4>
            <h5>Tao Tao</h5>
            <a href="https://m.me/qihuanpaoyin" target="_blank">
              Send a message
            </a>
          </article>
        </div>
        {/* END OF CONTACT OPTIONS */}
        <form action="https://api.web3forms.com/submit" method="POST">
          <input
            type="hidden"
            name="access_key"
            value="cde33b64-4c0f-4f26-a331-a14cb5152a62"
          ></input>
          <input
            type="text"
            name="name"
            placeholder="Your Full Name"
            required
          />
          <input type="email" name="email" placeholder="Your Email" required />
          <textarea
            name="message"
            rows="7"
            placeholder="Your Message"
          ></textarea>
          <input
            type="hidden"
            name="redirect"
            value="https://web3forms.com/success"
          ></input>
          <button type="submit" className="btn btn-primary">
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
