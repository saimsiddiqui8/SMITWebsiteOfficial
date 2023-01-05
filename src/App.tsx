import { Route, Routes } from 'react-router-dom';
import './App.css';
import About from './components/About/About';
import ContactUs from './components/Contact/ContactUs';
import Home from './components/Home/Home';
import Navbar from './components/NavBar/Navbar';
import RegisterNow from './components/registerNow/RegisterNow';
import Courses from './components/courses/Courses';
import Admin from './components/ADMIN/Admin';
import Error404 from './components/Error404';
import 'mdb-react-ui-kit/dist/css/mdb.min.css';
import Footer from './components/footer/Footer';
import { BounceLoader } from 'react-spinners';
import { useEffect, useState } from 'react';
import Login from './components/ADMIN/Login';
function App() {
  let [Loading, setLoading] = useState(false)
 const loggedIn = window.localStorage.getItem("isLoggedIn")


  useEffect(() => {
    setLoading(true)

    setInterval(() => {
      setLoading(false)
    }, 1000)

  }, [])
  return (
    <>
      {Loading
        ?
      ( <div id='spinner' className="">
          <BounceLoader loading={Loading} color="#0D6DB7" />
        </div>)
        :
        (<>
          <Navbar />
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/about' element={<About />} />
            <Route path='/admissions' element={<RegisterNow />} />
            <Route path='/contact' element={<ContactUs />} />
            <Route path='/courses' element={<Courses />} />
            <Route path="*" element={<Error404 />} />
            <Route path='/admin' element={<Admin />} />
            <Route path='/adminDashboard' element={ <Login />} />
          </Routes>
          <Footer />
        </>)

      }

    </>
  );
}

export default App;
