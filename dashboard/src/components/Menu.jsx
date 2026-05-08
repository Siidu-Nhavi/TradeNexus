import React, { useState } from "react";
import { Link } from "react-router-dom";

function Menu() {
  const [activeMenu, setActiveMenu] = useState(0);
  const [isProfileOpen, setProfileOpen] = useState(false);

  const handleMenuClick = (index) => {
    setActiveMenu(index);
  };


  const handleProfileClick = () => {
    //if profile is open then close it and if it is closed then open it
    setProfileOpen(!isProfileOpen); 
  };

  const menuItems = "menu";
  const activeMenuClass = "menu Selected"; // to track which menu is active and apply different styles to it

  return (
    <div className="menu-container">
      <img src="/logo%20.png" style={{ width: "50px" }} alt="menulogo" />
      <div className="menus">
        <ul>
          <li>
            <Link style={{textDecoration:"none"}}
            to="/" onClick={() => handleMenuClick(0)}
            >
              <p className={activeMenu === 0 ? activeMenuClass : menuItems}>Dashboard</p>
            </Link>
          </li>
          <li>
            <Link style={{textDecoration:"none"}}
            to="/orders" onClick={() => handleMenuClick(1)}
            >
              {/* // when the menu item is clicked, the activeMenu state is updated to the index of the clicked menu item and the class of the clicked menu item is updated to activeMenuClass which applies different styles to it */}
              <p className={activeMenu === 1 ? activeMenuClass : menuItems}>Orders</p>
            </Link>
          </li>
          <li>
            <Link style={{textDecoration:"none"}}
            to="/holdings" onClick={() => handleMenuClick(2)}
            >
             
              <p className={activeMenu === 2 ? activeMenuClass : menuItems}>Holdings</p>
            </Link>
          </li>
          <li>
            <Link style={{textDecoration:"none"}}
            to="/positions" onClick={() => handleMenuClick(3)}
            >
              <p className={activeMenu === 3 ? activeMenuClass : menuItems}>Positions</p>
            </Link>
          </li>
          <li>
            <Link style={{textDecoration:"none"}}
            to="/funds" onClick={() => handleMenuClick(4)}
            >
              <p className={activeMenu === 4 ? activeMenuClass : menuItems}>Funds</p>
            </Link>
          </li>
          <li>
            <Link style={{textDecoration:"none"}}
            to="/apps" onClick={() => handleMenuClick(5)}
            >
              <p className={activeMenu === 5 ? activeMenuClass : menuItems}>Apps</p>
            </Link>
          </li>
        </ul>
        <hr />
        <div className="profile" onClick={handleProfileClick}>
          <div className="avatar">ZU</div>
          <p className="username">USERID</p>
        </div>
      </div>
    </div>
  );
};

export default Menu;