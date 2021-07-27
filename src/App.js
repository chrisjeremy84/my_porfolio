import './App.css';
import Footer from './components/Footer';
import NavBar from './components/NavBar';
import Home from './pages/Home';
import Project from './pages/Project';
import Skill from './pages/Skill';


function App() {
  return (
    
      <div className="relative bg-gradient-to-r from-blue-800 to-blue-600  flex flex-col min-h-screen">
        
{/*NAVBAR */}
  <div className="">
    <div className="z-10 fixed m-8 md:mt-60">
    <NavBar/>
    </div>
  

  {/*Body */}
  </div>
    <Home/>
    <Project/>
    <Skill/>
    <div>

    </div>
  {/*FOOTER */}
  <div >
    <Footer/>
  </div>
  </div>
  );
}

export default App;
