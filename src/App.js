import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AuthProvider } from './context/AuthContext';
import Login from './components/Login';
// import Profile from './components/Profile';
import Activities from './components/Activities';

function App() {
  return (
    <Router>
      <AuthProvider>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/login" element={<Login />} />
          {/* <Route path="/profile" element={<Profile />} /> */}
          <Route path="/activities" element={<Activities />} />
        </Routes>
      </AuthProvider>
    </Router>
  );
}

export default App;
