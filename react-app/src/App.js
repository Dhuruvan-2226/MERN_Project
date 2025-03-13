// import logo from './logo.svg';
// import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LoginForm from './Components/User/LoginForm/LoginForm';
import Signup from './Components/User/Signup/Signup';
import HomePage from "./Components/User/HomePage/homepage";
import Dashboard from "./Components/User/Dashboard/dashboard";
import AddExpense from './Components/User/AddExpense/AddExpense';
import Balances from './Components/User/Balances/Balances';
import Groups from './Components/User/Groups/Groups';
import Suggestions from './Components/User/Suggestions/Suggestions';
import Ahomepage from './Components/Admin/AHomePage/Ahomepage';
import ALoginForm from './Components/Admin/ALoginForm/ALoginForm';
import ASignup from './Components/Admin/ASignup/ASignup';
import ADashboard from './Components/Admin/ADashboard/ADashboard';
import AExpense from './Components/Admin/AExpenses/AExpenses';
import ABalances from './Components/Admin/ABalances/ABalances';
import AGroups from './Components/Admin/AGroups/AGroups';
import Disputes from './Components/Admin/Disputes/Disputes';
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/home" element={<HomePage />} />
        <Route path="/login" element={<LoginForm />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/addexpense" element={<AddExpense />} />
        <Route path="/balances" element={<Balances />} />
        <Route path="/groups" element={<Groups />} />
        <Route path="/suggestions" element={<Suggestions />} />

        {/* <Route path="/" element={<Ahomepage />} />
        <Route path="/a-home" element={<Ahomepage />} />
        <Route path="/a-login" element={<ALoginForm />} />
        <Route path="/a-signup" element={<ASignup />} />
        <Route path="/a-dashboard" element={<ADashboard />} />
        <Route path="/a-addexpense" element={<AExpense />} />
        <Route path="/a-balances" element={<ABalances />} />
        <Route path="/a-groups" element={<AGroups />} />
        <Route path="/disputes" element={<Disputes />} /> */}
      </Routes>
    </Router>
  );
}

export default App;
