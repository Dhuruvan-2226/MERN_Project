import React from "react";
import "./Disputes.css";
import { Link } from "react-router-dom";
const Disputes = () => {
  return (
    <div className="container">
      <header className="navisbar">
        <div className="topic">Expense Splitter</div>
        <nav className="navb">
          <Link to="/a-dashboard">Dashboard</Link>
          <Link to="/a-addexpense">Add Expenses</Link>
          <Link to="/a-balances">Balances</Link>
          <Link to="/a-groups">Groups</Link>
          <Link to="/disputes">Disputes</Link>
        </nav>
      </header>

      <h2 className="title">Solving Disputes</h2>
      <hr></hr><br></br>
      <h3 className="sub-title">Pending Payments</h3>
      <p className="payment-info">E.g: User C wants to paid 500 rupees to User A.</p>

      <div className="box">
        <p>E.g: User C noted an error in the Dinner expense split.</p>
        <p>E.g: User C wants to paid 500 rupees to User A.</p>
      </div>

      <button className="send-button">Send Suggestion</button><br></br>
      <br></br>
      <hr></hr><br></br>

      <h3 className="sub-title">Proof of the pending payements</h3>

      <div className="table-container">
        <table>
          <thead>
            <tr>
              <th>File</th>
              <th>Person paid this</th>
              <th>Amount</th>
              <th>to this person</th>
              <th>Final Amount</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Payment proof of image</td>
              <td>Person1's name Eg-kirito</td>
              <td>Amount Eg-200</td>
              <td>Person2's name Eg-Ash</td>
              <td>Original amount to be paid Eg-400</td>
              <td>Partially or fully paid</td>
            </tr>
          </tbody>
        </table>
      </div>
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

export default Disputes;
