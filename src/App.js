import { useContext } from 'react';
import './App.css';
import About from './Components/About';
import Contact from './Components/Contact';
import Profile from './Components/Profile';
import Toggle from './Components/Toggle';
import { ThemeContext } from './Context/Context';
import Experience from './Components/Experience';
import Projects from './Components/Projects';
import NavBar from './Components/NavBar';

function App() {

  const theme=useContext(ThemeContext);
  const darkMode=theme.state.darkMode;

  return (
    <div className="App" 
        style={{
          backgroundColor: darkMode ? "#222":"white",
          color:darkMode && "white",
        }}
    >
      <Toggle/>
      <NavBar/>
      <Profile/>
      <About/>
      <Experience/>
      <Projects/>
      <Contact/>
      
    </div>
  );
}

export default App;
