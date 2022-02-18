import { useContext } from 'react';
import './App.css';
import About from './Components/About';
import Contact from './Components/Contact';
import Profile from './Components/Profile';
import ProductList from './Components/ProductList';
import Toggle from './Components/Toggle';
import { ThemeContext } from './Context/Context';

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
      <Profile/>
      <About/>
      <ProductList/>
      <Contact/>
      
    </div>
  );
}

export default App;
