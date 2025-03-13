import React from "react";
import "./homepage.css";
import aboutIcon from "./information-button.png";
import howItWorksIcon from "./guide-book.png";
import featuresIcon from "./new-features.png";
import moneyIcon from "./bill.png";
import {Link} from "react-router-dom";
const homepage = () => {
  return (
    <div className="homepage">
      {/* Navbar css in Ahomepage.css */}
      <nav className="navi">
        <h2 className="topics">Expense Splitter</h2>
        <ul>
          <li><a href="#home">Home</a></li>
          <li><a href="#about">About</a></li>
          <li><a href="#how-it-works">How it works</a></li>
          <li><a href="#features">Features</a></li>
          <li><a href="#contact">Contact</a></li>
          <li><Link to="/login">Get Started</Link></li>
        </ul>
      </nav>

      {/* Hero Section */}
      <section id="home" className="hero">
        <div className="section-content">
          <div className="text">
            <h3>Lost track of your money?</h3>
            <p>Log expenses, split bills, and stay in control of your spending.</p>
          </div>
          <img src={moneyIcon} alt="Money Icon" className="section-image" />
        </div>
      </section>
      {/* Separator Line */}
      <hr></hr>
      {/* About Us */}
      <section id="about" className="section">
        <h3>About Us</h3>
        <div className="section-content">
          <img src={aboutIcon} alt="About Us Icon" className="section-image" />
          <div className="text">
            <p>
              Expense Splitter helps groups manage and divide shared expenses effortlessly. 
              Whether it's for trips, roommates, or shared activities, our app ensures fairness and transparency.
            </p>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section id="how-it-works" className="section">
        <h3>How It Works</h3>
        <div className="section-content reverse">
          <img src={howItWorksIcon} alt="How it Works Icon" className="section-image" />
          <div className="text">
            <p>
              Users sign up, create or join a group, and add shared expenses. 
              The app calculates who owes whom, making settling up easy. 
              Admins can monitor payments and resolve disputes.
            </p>
          </div>
        </div>
      </section>

      {/* Features */}
      <section id="features" className="section">
        <h3>Features</h3>
        <div className="section-content">
          <img src={featuresIcon} alt="Features Icon" className="section-image" />
          <div className="text">
            <p>✔ Track and split expenses.</p>
            <p>✔ Admins can monitor payments.</p>
            <p>✔ View and settle balances in real-time.</p>
          </div>
        </div>
      </section>

     {/* Footer css in agroup.css */}
     <footer className="footer">
        <div className="footer-section">
          <h2 id="contact">Contact Us</h2>
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

export default homepage;
