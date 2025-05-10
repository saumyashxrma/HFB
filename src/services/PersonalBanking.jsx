// src/pages/PersonalBanking.jsx
import '../styles/ServicesPage.css';

const PersonalBanking = () => {
  return (
    <div className="services-container">
      <h2>Personal Banking Services</h2>
      <div className="services-grid">
        <div className="service-card">
          <h3>Savings Accounts</h3>
          <p>Earn interest on your deposits with our competitive rates.</p>
        </div>
        <div className="service-card">
          <h3>Checking Accounts</h3>
          <p>Easy access to your funds with debit cards and online banking.</p>
        </div>
        <div className="service-card">
          <h3>Certificates of Deposit</h3>
          <p>Higher interest rates for fixed-term deposits.</p>
        </div>
        <div className="service-card">
          <h3>Online Banking</h3>
          <p>24/7 access to your accounts from anywhere.</p>
        </div>
      </div>
    </div>
  );
};

export default PersonalBanking;