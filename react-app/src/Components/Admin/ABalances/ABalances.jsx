import React from "react";
import "./ABalances.css";
import { Link } from "react-router-dom";
const ABalances = () => {
  return (
    <div className="container">
      {/* Navbar */}
      <nav className="navibar">
        <div className="topic">Expense Splitter</div>
        <ul>
            <li><Link to="/a-dashboard">Dashboard</Link></li>
            <li><Link to="/a-addexpense">Add Expenses</Link></li>
            <li><Link to="/a-balances">Balances</Link></li>
            <li><Link to="/a-groups">Groups</Link></li>
            <li><Link to="/disputes">Disputes</Link></li>
        </ul>
      </nav>

      {/* Header */}
      <h2 className="header">Group Balances Overview</h2>
      <hr></hr><br></br>
      <h2>Add Group Balances</h2>
      <div className="form-containers">
      <label>
        <span>Group:</span>
        <input type="text" placeholder="Enter the Group" />
      </label>
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
      <label>
        <span>Status:</span>
        <select>
          <option>Paid</option>
          <option>Partially Paid</option>
          <option>Not Paid</option>
        </select>
      </label>
      <div className="twobuttons">
        <button>Submit</button>
        <button>Clear</button>
      </div>
    </div><hr></hr><br></br>
      {/* Group Selection */}
      <div className="group-section">
        <h2>Select the Group</h2>
        <select className="dropdown">
          <option>Select the group</option>
        </select>
      </div><br></br>
    <br></br>
      {/* Expenses Table */}
      <div className="expenses-section">
        <h3>Selected Group Name and Id :</h3>
        <h3>Total Expenses:</h3>
        <table className="expense-table">
          <thead>
            <tr>
              <th>Group</th>
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
      </div>

      {/* Buttons */}
      <div className="buttons-container">
        <button>Edit</button>
        <button>Save</button>
      </div>

      {/* Footer its css in agroup.css*/}
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
      <div className="footer-bottom">© 2025 Expense Splitter. All Rights Reserved.</div>
    </div>
  );
};

export default ABalances;
