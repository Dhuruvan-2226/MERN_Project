import React from 'react';
import "./dashboard.css";
import {Link} from "react-router-dom";
const dashboard = () => {
  return (
    <div className="container">
      {/* navibar css in adashboard.css */}
      <header className="navibar">
        <h1 className="logos">Expense Splitter</h1>
        <nav>
          <ul>
            <li><Link to="/home">Home</Link></li>
            <li><Link to="/dashboard">Dashboard</Link></li>
            <li><Link to="/addexpense">Add Expenses</Link></li>
            <li><Link to="/balances">Balances</Link></li>
            <li><Link to="/groups">Groups</Link></li>
            <li><Link to="/suggestions">Suggestions</Link></li>
          </ul>
        </nav>
      </header>

      <section id="dashboard" className="section">
        <h2>"Welcome, [User Name]!"</h2>
      </section>

      <section id="balances" className="section">
        <h3>Display Balances</h3>
        <p>"You owe ₹500 to [Member]"</p>
        <p>"You are owed ₹300 by [Member]"</p>
      </section>

      <section id="expenses" className="section">
        <h3>Recent Activities</h3>
        <p>Dinner - ₹1,000 split with 4 members</p>
        <p>Cab Ride - ₹500 split with 2 members</p>
        <p>Office Supplies - ₹300 split with 3 members</p>
      </section>

      <section id="groups" className="section">
        <h3>View Groups</h3>
        <p>Groups where the user is in that group</p>
        <p><strong>Examples:</strong> Trip Planner, Transportation, Groceries</p>
      </section>
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
}

export default dashboard;
