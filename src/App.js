import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router } from 'react-router-dom'; 
import { AuthProvider } from './context/AuthContext';
import Login from './components/Login';
import Profile from './components/Profile';

function App() {
  return (
    <Router>
      <AuthProvider>
        <Login />
      </AuthProvider>
    </Router>
  );
}

export default App;
