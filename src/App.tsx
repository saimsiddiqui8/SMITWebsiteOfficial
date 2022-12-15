
import { Route, Routes } from 'react-router-dom';
import './App.css';
import About from './components/About/About';
import ContactUs from './components/Contact/ContactUs';
import Home from './components/Home/Home';
import Navbar from './components/NavBar/Navbar';
import RegisterNow from './components/registerNow/RegisterNow';
function App() {
  return (
    <>
      <Navbar />
      <div className="container">
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/registerNow' element={<RegisterNow />} />
          <Route path='/contact' element={<ContactUs />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
