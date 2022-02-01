import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './components/Navbar';
import Header from './components/Header';
import AboutMe from './components/AboutMe'

function App() {
  return (
    <>
     {/* <h2>Portfolio in progress...</h2> */}
    <Navbar />
    <Header />
    <AboutMe />
    </>
  );
}

export default App;
