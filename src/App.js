import './App.css';
import Footer from './components/Footer';
import NavBar from './components/NavBar';


function App() {
  return (
    
      <div className="relative bg-gradient-to-r from-blue-800 to-blue-600  flex flex-col min-h-screen">
        
{/*NAVBAR */}
  <div className="">
  <NavBar/>
  </div>

  {/*FOOTER */}
  <div className="h-full bg-blue-500">
    <Footer/>
  </div>
  </div>
  );
}

export default App;
