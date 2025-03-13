import React from 'react';
import './AExpenses.css';
import { Link } from 'react-router-dom';
const AExpense = () => {
  return (
    <div className="add-expense-container">
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

      <div className="content">
        <h2>Add a New Expense</h2><br></br>
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
        <input type="text" placeholder="Enter the person who paid" />
      </label>
      <label>
        <span>Split Between:</span>
        <textarea placeholder="Enter members to split between"></textarea>
      </label>
      <div className="buttonss">
        <button>Submit</button>
        <button>Clear</button>
      </div>
    </div><hr></hr><br></br>
        <h3>Select the Group</h3>
        <select className="group-dropdown">
          <option>Select the group</option>
        </select><br></br><br></br>
        
        <h3>Selected Group Name:</h3>
        <h3>Total Expenses:</h3>

        <table className="expense-table">
          <thead>
            <tr>
              <th>Group</th>
              <th>Title</th>
              <th>Price</th>
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
            </tr>
          </tbody>
        </table>

        <div className="buttons">
          <button>Edit</button>
          <button>Remove</button>
          <button>Save</button>
        </div>
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
      <div className="footer-bottom">© 2025 Expense Splitter. All Rights Reserved.</div>
    </div>
  );
};

export default AExpense;
