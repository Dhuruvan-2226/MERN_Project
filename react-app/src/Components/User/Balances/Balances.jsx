import React from "react";
import "./Balances.css";
import {Link} from "react-router-dom";
const Balances = () => {
  return (
    <div className="balances-container">
      {/* Navbar */}
      <nav className="navbarss">
        <div className="logos">Expense Splitter</div>
        <ul>
            <li><Link to="/dashboard">Dashboard</Link></li>
            <li><Link to="/addexpense">Add Expenses</Link></li>
            <li><Link to="/balances">Balances</Link></li>
            <li><Link to="/groups">Groups</Link></li>
            <li><Link to="/suggestions">Suggestions</Link></li>
        </ul>
      </nav>

      {/* Header */}
      <h2 className="balances-header">Your Balances</h2>
    <hr></hr>
    <div className="form-containers">
    <label>
        <span>Person:</span>
        <input type="text" placeholder="Enter person's name" />
      </label>
      <label>
        <span>Amount:</span>
        <input type="text" placeholder="Enter the amount" />
      </label>
      <label>
        <span>Payment To:</span>
        <input type="text" placeholder="Enter recipient's name" />
      </label>
      <div className="buttonsss">
        <button>Submit</button>
        <button>Clear</button>
      </div>
    </div>
      {/* Group Selection */}
      <div className="group-selection">
        <p className="group-text">Select the Group</p>
        <select className="group-dropdown">
          <option>Select the group</option>
        </select>
      </div>
    <hr></hr><br></br>
      {/* Expenses Table */}
      <p className="group-name">Selected Group Name :</p>
      <p className="expenses-text">Total Expenses:</p>

      <table className="expense-table">
        <thead>
          <tr>
            <th>Person</th>
            <th>Amount</th>
            <th>Payment to</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
          </tr>
        </tbody>
      </table>

      {/* Save Button */}
      <button className="save-button">Save</button>

      {/* Notification */}
      <p className="notification-text">“You received ₹300 from [Member]”</p>

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

export default Balances;
