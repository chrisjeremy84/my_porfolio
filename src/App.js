import './App.css';
import Footer from './components/Footer';
import NavBar from './components/NavBar';


function App() {
  return (
      <div className=" bg-blue-400 flex flex-col min-h-screen">
        <div className="Header">
  <NavBar/>
  </div>
  <div className="h-full bg-blue-500">
    <Footer/>
  </div>
  </div>
  );
}

export default App;
