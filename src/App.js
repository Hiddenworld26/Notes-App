//import logo from './logo.svg';
import "./bootstrap.min.css"
import './App.css';

import Header from './Header/Header';
import Footer from './Footer/Footer';
import LandingPage from "./screens/LandingPage/LandingPage";

function App() {
  return (
    <div className="App">
      {
        <>
        
        <Header/>
        <main >
        <LandingPage/>
        </main>
       
        <Footer/>
        
        </>
        
      }
    </div>
  );
}

export default App;
