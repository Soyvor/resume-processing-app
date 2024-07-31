import React from 'react';

const SupportPage = () => {
  return (
    <div>
      <h1>Support</h1>
      <h2>FAQ</h2>
      <p>Q: How do I upload my resume?</p>
      <p>A: Click on "Upload Resume" and select your PDF file.</p>
      <h2>Contact Us</h2>
      <form>
        <label>
          Your Email:
          <input type="email" name="email" required />
        </label>
        <label>
          Your Message:
          <textarea name="message" required></textarea>
        </label>
        <button type="submit">Send Message</button>
      </form>
    </div>
  );
};

export default SupportPage;
