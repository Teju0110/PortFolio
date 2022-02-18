import React, { useContext } from 'react'
import './Toggle.css'
import sun from '../Images/sun.jpg'
import moon from '../Images/moon.png'
import { ThemeContext } from '../Context/Context'

const Toggle = () => {

    const theme=useContext(ThemeContext);

    const handleClick =()=>{
        theme.dispatch({type:"TOGGLE"})
    }


  return (
    <div className='toggle'>
        <img src={sun} alt="" className='toggle_icon'/>        
        <img src={moon} alt="" className='toggle_icon'/>

        <div className='toggle_btn' onClick={handleClick}
            style={{
                left :theme.state.darkMode ? 0 : 25
            }}
        ></div>


    </div>
  )
}

export default Toggle