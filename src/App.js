import './App.css';
import Main from './components/Main';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import About from './components/About';
import Menu from './components/Menu';
import Reservations from './components/Reservations';
import OrderOnline from './components/OrderOnline';
import Login from './components/Login';
import logo from './images/Logo.png';

function App() {
  return (
    <>
    <header className="header">
      <img src={logo} alt="Company Logo" />
      <nav>
        <ul>
          <li><BrowserRouter to="/"><a href="/">Home</a></BrowserRouter></li>
          <li><BrowserRouter to="/about"><a href="/about">About</a></BrowserRouter></li>
          <li><BrowserRouter to="/menu"><a href="/menu">Menu</a></BrowserRouter></li>
          <li><BrowserRouter to="/reservations"><a href="/reservations">Reservations</a></BrowserRouter></li>
          <li><BrowserRouter to="/order-online"><a href="/order-online">Order Online</a></BrowserRouter></li>
          <li><BrowserRouter to="/login"><a href="/login">Login</a></BrowserRouter></li>
        </ul>
      </nav>
    </header>
    <BrowserRouter>
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/about" element={<About />} />
          <Route path="/menu" element={<Menu />} />
          <Route path="/reservations" element={<Reservations />} />
          <Route path="/order-online" element={<OrderOnline />} />
          <Route path="/login" element={<Login />} />
        </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
