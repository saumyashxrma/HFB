// import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
// import NavBar from "./components/NavBar";
// import Footer from "./components/Footer";
// import HomePage from "./pages/HomePage";
// import AccountsPage from "./pages/AccountsPage";
// import ContactPage from "./pages/ContactPage";
// import LoginPage from "./pages/LoginPage";
// import RegisterPage from "./pages/RegisterPage";
// import DashboardPage from "./pages/DashboardPage";
// import ManageAccounts from "./pages/ManageAccounts";
// import FundTransfer from "./pages/FundTransfer"; 

// function App() {
//   return (
//     <Router>
//       <div className="app-container">
//         <NavBar />
//         <div className="content">
//           <Routes>
//             <Route path="/" element={<HomePage />} />
//             <Route path="/accounts" element={<AccountsPage />} />
//             <Route path="/contact" element={<ContactPage />} />
//             <Route path="/manage-accounts" element={<ManageAccounts />} />
//             <Route path="/fund-transfer" element={<FundTransfer />} />
//             <Route path="/login" element={<LoginPage />} />
//             <Route path="/register" element={<RegisterPage />} />
//             <Route path="/dashboard" element={<DashboardPage />} />
//           </Routes>
//         </div>
//         <Footer />
//       </div>
//     </Router>
//   );
// }

// export default App;
// src/App.jsx
import { BrowserRouter as Router, Route, Routes, Navigate } from "react-router-dom";
import { useState } from "react";
import NavBar from "./components/NavBar";
import HomePage from "./pages/HomePage";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";
import DashboardPage from "./pages/DashboardPage";
import FundTransfer from "./pages/FundTransfer";
import ManageAccounts from "./pages/ManageAccounts";
import PersonalBanking from "./pages/PersonalBanking";
import Investment from "./pages/Investment";
import Loan from "./pages/Loan";
import "./App.css";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userData, setUserData] = useState(null);

  const handleLogin = (user) => {
    setIsLoggedIn(true);
    setUserData(user);
    // Store user data in localStorage for persistence
    localStorage.setItem('user', JSON.stringify(user));
    localStorage.setItem('isLoggedIn', 'true');
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
    setUserData(null);
    localStorage.removeItem('user');
    localStorage.removeItem('isLoggedIn');
  };

  // Check localStorage for existing login on app load
  useState(() => {
    const loggedIn = localStorage.getItem('isLoggedIn') === 'true';
    const user = JSON.parse(localStorage.getItem('user'));
    if (loggedIn && user) {
      setIsLoggedIn(true);
      setUserData(user);
    }
  }, []);

  return (
    <Router>
      <div className="app-container">
        <NavBar isLoggedIn={isLoggedIn} onLogout={handleLogout} />
        <div className="main-content">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route 
              path="/login" 
              element={isLoggedIn ? <Navigate to="/dashboard" /> : <LoginPage onLogin={handleLogin} />} 
            />
            <Route 
              path="/register" 
              element={isLoggedIn ? <Navigate to="/dashboard" /> : <RegisterPage onLogin={handleLogin} />} 
            />
            <Route 
              path="/dashboard" 
              element={isLoggedIn ? <DashboardPage user={userData} /> : <Navigate to="/login" />} 
            />
            <Route 
              path="/fund-transfer" 
              element={isLoggedIn ? <FundTransfer user={userData} /> : <Navigate to="/login" />} 
            />
            <Route 
              path="/manage-accounts" 
              element={isLoggedIn ? <ManageAccounts user={userData} /> : <Navigate to="/login" />} 
            />
            <Route 
              path="/personal-banking" 
              element={isLoggedIn ? <PersonalBanking user={userData} /> : <Navigate to="/login" />} 
            />
            <Route 
              path="/investment" 
              element={isLoggedIn ? <Investment user={userData} /> : <Navigate to="/login" />} 
            />
            <Route 
              path="/loan" 
              element={isLoggedIn ? <Loan user={userData} /> : <Navigate to="/login" />} 
            />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;