import React, { useState } from "react";
import "./Groups.css";
import { Link } from "react-router-dom";

const Groups = () => {
  const [showForm, setShowForm] = useState(false); // State to toggle form visibility

  const handleCreateGroup = () => {
    setShowForm(true); // Show the form when button is clicked
  };

  return (
    <div className="groups-container">
      {/* Navbar */}
      <header className="navisbar">
        <div className="topic">Expense Splitter</div>
        <nav className="navb">
          <Link to="/dashboard">Dashboard</Link>
          <Link to="/addexpense">Add Expenses</Link>
          <Link to="/balances">Balances</Link>
          <Link to="/groups">Groups</Link>
          <Link to="/suggestions">Suggestions</Link>
        </nav>
      </header><br />

      {/* Create Group Button */}
      <h2 className="create">Create a Group</h2><br></br><br></br>
      <button onClick={handleCreateGroup}>Create a Group</button><br></br><br></br>

      {/* Form (Hidden by Default, Visible on Button Click) */}
      {showForm && (
        <div className="form-containers">
          <label>
            <span>Group:</span>
            <input type="text" placeholder="Enter Group's name" />
          </label>
          <label>
            <span>Role:</span>
            <select>
              <option value="Admin">Admin</option>
            </select>
          </label>
          <div className="buttonsss">
            <button>Ok</button>
            <button>Clear</button>
          </div>
        </div>
      )}

      <hr /><br />

      <h2 className="section-title"><u>Your Groups</u></h2><br /><br />
      <h3 className="sub-title">List of Groups</h3>

      {/* Group List Table */}
      <div className="table-container">
        <table>
          <thead>
            <tr>
              <th>Group id</th>
              <th>Group Names</th>
              <th>Count of Members in each group</th>
              <th>Joining</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td></td>
              <td></td>
              <td></td>
              <td><button>Join</button></td>
            </tr>
          </tbody>
        </table>
      </div>

      <hr /><br />
      <h3 className="sub-title">Select the Group</h3>
      <div className="dropdown-container">
        <select>
          <option>Select the group</option>
        </select>
      </div>

      {/* Group Members Table */}
      <div className="table-container">
        <table>
          <thead>
            <tr>
              <th>Group id</th>
              <th>Group Name</th>
              <th>Group Members</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td></td>
              <td></td>
              <td></td>
            </tr>
          </tbody>
        </table>
      </div>

      <hr /><br />
      <h3 className="sub-title">Selected Group Name and Id:</h3>
      <h3 className="sub-title">Total Expenses:</h3>

      {/* Expenses Table */}
      <div className="table-container">
        <table>
          <thead>
            <tr>
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
      </div>

      {/* Footer */}
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

export default Groups;
