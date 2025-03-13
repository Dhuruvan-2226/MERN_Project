import React from "react";
import "./Suggestions.css";
import { Link } from "react-router-dom";
const Suggestions = () => {
  return (
    <div className="suggestions-container">
      <nav className="navssbar">
        {/* css from agroup.css */}
        <div className="topic">Expense Splitter</div>
        <div className="navb">
          <Link to="/dashboard">Dashboard</Link>
          <Link to="/addexpense">Add Expenses</Link>
          <Link to="/balances">Balances</Link>
          <Link to="/groups">Groups</Link>
          <Link to="/suggestions">Suggestions</Link>
        </div>
      </nav>

      <h2 className="title">Suggestions & Issues.</h2>

      <div className="input-container">
        <textarea
          className="text-input"
          placeholder="E.g: User C noted an error in the Dinner expense split."
        ></textarea>
      </div>

      <button className="button">Send Suggestion</button>
      <hr></hr><br></br>
      <h3 className="proof-title">Proof of the payment</h3>

      <div className="file-upload">
        <button className="file-button">Choose a File</button>
        <span className="file-text">E.g - Image of the Payment</span>
      </div>

      <button className="button">Submit</button>
{/* Footer css in agroup.css */}
<footer className="footer">
        <div className="footer-section">
          <h2>Contact Us</h2>
          <p>"Have questions or need help? We're here for you!"</p>
          <p>Email: support@expensesplitter.com</p>
        </div>
        <div className="footer-section social-media">
          <h2>Social Media Links</h2>
          <p>Linkedin</p>
          <p>Twitter</p>
          <p>Facebook</p>
        </div>
      </footer>

      <div className="footer-bottom">
        "© 2025 Expense Splitter. All Rights Reserved."
      </div>
    </div>
  );
};

export default Suggestions;
