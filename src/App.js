import './App.css';
import { Routes, Route } from "react-router-dom";
// import ResponsiveAppBar from "./components/Navbar"
import LandingPage from './components/LandingPage';
import Game from './components/Game';
import ErrorPage from './components/ErrorPage';
import Developer from './components/Developer';
import { useEffect, useState } from 'react';
import ResponsiveAppBar from './components/NavbarNew';

function App() {
  const [data,setData] = useState();


  const fetchData = async() => {
    try {
      const res = await fetch(process.env.REACT_APP_API_URL);
      const data = await res.json();
      setData(data.data);
    } catch (error) {
      console.log(error)
    }
  }
  useEffect(()=>{
    fetchData()
  },[])


  return (
    <div className="App">
      <ResponsiveAppBar />
      <Routes>
        {/* <Route path="/" element={<LandingPage />}/> */}
        <Route path="/" element={<Game data={data} />}/>
        <Route path="/Spiel" element={<Game data={data} />}/>
        <Route path="/Entwickler" element={<Developer />}/>
        <Route path="/About" element={<h2>This is the about page</h2>}/>

        <Route path="/*" element={<ErrorPage />}/>
      </Routes>
    </div>
  );
}

export default App;
