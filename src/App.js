import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './components/Navbar';
import Header from './components/Header';
import AboutMe from './components/AboutMe'
import Projects from './components/Projects';
import Contacts from './components/Contacts';
import Footer from './components/Footer';
import { useState,useEffect} from "react"; 
import ClipLoader from "react-spinners/DotLoader";
import logo from './images/S1-logo.png';

function App() {
  const  [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true)
    setTimeout(() => {
      setLoading(false) 
    }, 4000)
  }, [])
  return (
    <div>
        { 
          loading ? 
          <div className='loader '>
            <div className='loader-logo '>
              <img src={logo} />
            </div>
            
            <ClipLoader 
              color={'#FF0004'} 
              loading={loading} 
              // css={override} 
              size={50} 
            />
          </div>

          :

        <>
          <Navbar />
          <Header />
          <AboutMe />
          <Projects />
          <Contacts />
          <Footer />
        </>
        }
    
    </div>
  );
}

export default App;
