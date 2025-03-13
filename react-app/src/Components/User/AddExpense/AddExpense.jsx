import React from "react";
import "./AddExpense.css";
import {Link} from "react-router-dom";
const AddExpense = () => {
  return (
    <div className="add-expense-page">
      {/* Navbar */}
      <nav className="navbars">
        <h2 className="logos">Expense Splitter</h2>
        <ul>
            <li><Link to="/dashboard">Dashboard</Link></li>
            <li><Link to="/addexpense">Add Expenses</Link></li>
            <li><Link to="/balances">Balances</Link></li>
            <li><Link to="/groups">Groups</Link></li>
            <li><Link to="/suggestions">Suggestions</Link></li>
        </ul>
      </nav>

      {/* Header */}
      <h1 className="title">Add a New Expense</h1>
      <hr></hr><br></br>
      <h2>Add a Expense</h2>
      <div className="form-containers">
      <label>
        <span>Group:</span>
        <input type="text" placeholder="Enter the group" />
      </label>
      <label>
        <span>Title:</span>
        <input type="text" placeholder="Enter the title" />
      </label>
      <label>
        <span>Amount:</span>
        <input type="text" placeholder="Enter the price amount" />
      </label>
      <label>
        <span>Paid By:</span>
        <input type="text" placeholder="Enter the members who paid the amount" />
      </label>
      <label>
        <span>Split Between:</span>
        <textarea placeholder="Enter members to split between the amount"></textarea>
      </label>
      <div className="buttonss">
        <button>Submit</button>
        <button>Clear</button>
      </div>
    </div>
    <hr></hr>
      {/* Group Selection */}
      <div className="group-selection">
        <h3>Select the Group</h3>
        <select className="dropdown">
          <option>Select the group</option>
        </select>
      </div>
      <hr></hr>
      {/* Expense Table */}
      <div className="expense-section">
        <h3>Selected Group Name and Id :</h3>
        <h3>Total Expenses:</h3>

        <table className="expense-table">
          <thead>
            <tr>
              <th>Group</th>
              <th>Title</th>
              <th>Amount</th>
              <th>Paid By</th>
              <th>Split Between</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
            </tr>
          </tbody>
        </table>
      </div>

      {/* Buttons */}
      <div className="buttons">
        <button className="btn">Add</button>
        <button className="btn">Save</button>
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

export default AddExpense;
