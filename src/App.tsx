import './App.css';
import NavBar from './components/navBar/NavBar'
import AppRouter from './config/router';
import CertificateVerification from './containers/CertificateVerification';
import ContactUs from './containers/ContactUs';
import Home from './containers/Home';
import RegisterNow from './containers/RegisterNow';

const App: React.FC = () => {
  return (
    <>
      <NavBar />
      <CertificateVerification />
    </>
  );
}

export default App;
