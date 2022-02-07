import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './components/Navbar';
import Header from './components/Header';
import AboutMe from './components/AboutMe'
import Projects from './components/Projects';
import Contacts from './components/Contacts';
import Footer from './components/Footer';

function App() {
  return (
    <>
     {/* <h2>Portfolio in progress...</h2> */}
    <Navbar />
    <Header />
    <AboutMe />
    <Projects />
    <Contacts />
    <Footer />
    </>
  );
}

export default App;
