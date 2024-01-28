import React,{useState} from "react";
import { RiMenu3Line, RiCloseLine } from "react-icons/ri";
import './NavBar.css'

const Menu = () => (
  <>
    <p>
      <a href="#profile">Profile</a>
    </p>
    <p>
      <a href="#about">About</a>
    </p>
    <p>
      <a href="#experience">Experience</a>
    </p>
    <p>
      <a href="#project">Project</a>
    </p>
    <p>
      <a href="#contact">Contact</a>
    </p>
  </>
);

const NavBar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);
  return (
    <div className="navBar">
      <div className="navBar_row_menu">
        <div className="navBar_links">
          <div className="navBar_links_logo">
           <h1 style={{color:"#1F51FF"}}>TS</h1>
          </div>
          <div className="navBar_links_container">
            <Menu />
          </div>
        </div>
      </div>
      <div className="navBar_menu">
        <div className="navBar_links_logo">
          <h1 style={{color:"#1F51FF"}}>TS</h1>
        </div>
        {toggleMenu == false ? (
          <RiMenu3Line
            className="menuIcon"
            onClick={() => setToggleMenu(true)}
          />
        ) : (
          <>
            <RiCloseLine
              color="#1F51FF"
              size={27}
              onClick={() => setToggleMenu(false)}
              className="menuIcon"
            />

            <div className="navBar_menu_container">
              <div className="navBar_menu_items">
                <Menu />
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default NavBar;
