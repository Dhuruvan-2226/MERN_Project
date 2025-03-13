import React from 'react';
import './ADashboard.css';
import { Link } from 'react-router-dom';
const ADashboard = () => {
  return (
    <div className="dashboard-container">
      <nav className="navibar">
        <div className="topic">Expense Splitter</div>
        <ul>
            <li><Link to="/a-home">Home</Link></li>
            <li><Link to="/a-dashboard">Dashboard</Link></li>
            <li><Link to="/a-addexpense">Add Expenses</Link></li>
            <li><Link to="/a-balances">Balances</Link></li>
            <li><Link to="/a-groups">Groups</Link></li>
            <li><Link to="/disputes">Disputes</Link></li>
        </ul>
      </nav>

      <div className="content">
        <h2>Welcome, Admin!</h2><br></br>
        <hr></hr><br></br>
        <p>“Total Groups”</p>
        <p>“Total Group Members”</p>
        <p>“Total Expenses”</p>
        <p>“Total Pending Fees”</p>
       <hr></hr><br></br>
        <h3>Select Group</h3>
        <select className="group-dropdown">
          <option>Select the group</option>
        </select><br></br><br></br>
        <hr></hr><br></br>
        <p>“Total no:of group members”</p>
        <p>“Total Expenses”</p>
        <p>“Total Pending Fees”</p>
        <p>Eg: User A paid ₹500 to User B for Dinner.</p>
      </div>

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

export default ADashboard;
