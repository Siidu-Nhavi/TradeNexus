// ============================================================================
// MENU COMPONENT - Navigation Menu and User Profile
// ============================================================================
// This component provides navigation menu for different dashboard sections:
// Dashboard, Orders, Holdings, Positions, Funds, and Apps.
// It tracks the active menu item and shows user profile section with logo.

import React, { useState } from "react";
import { Link } from "react-router-dom";

/**
 * Menu Component
 * Displays navigation menu with:
 * - Logo image
 * - Navigation links for different dashboard sections
 * - Active menu highlighting based on current route
 * - User profile section with avatar and user ID
 */
function Menu() {
  // Track which menu item is currently active (0-5)
  const [activeMenu, setActiveMenu] = useState(0);
  
  // Track if user profile dropdown is open
  const [isProfileOpen, setProfileOpen] = useState(false);

  /**
   * Handle menu item click - updates active menu state
   * @param {number} index - Index of clicked menu item
   */
  const handleMenuClick = (index) => {
    setActiveMenu(index);
  };

  /**
   * Handle profile click - toggles profile dropdown visibility
   */
  const handleProfileClick = () => {
    setProfileOpen(!isProfileOpen); 
  };

  // CSS class names for styling
  const menuItems = "menu"; // Default menu item style
  const activeMenuClass = "menu Selected"; // Active/highlighted menu item style

  return (
    <div className="menu-container">
      {/* Logo image */}
      <img src="/logo%20.png" style={{ width: "50px" }} alt="menulogo" />
      
      <div className="menus">
        {/* Navigation menu items */}
        <ul>
          {/* Dashboard / Summary link */}
          <li>
            <Link style={{textDecoration:"none"}}
            to="/" onClick={() => handleMenuClick(0)}
            >
              <p className={activeMenu === 0 ? activeMenuClass : menuItems}>Dashboard</p>
            </Link>
          </li>

          {/* Orders link - shows all placed orders */}
          <li>
            <Link style={{textDecoration:"none"}}
            to="/orders" onClick={() => handleMenuClick(1)}
            >
              <p className={activeMenu === 1 ? activeMenuClass : menuItems}>Orders</p>
            </Link>
          </li>

          {/* Holdings link - shows stock holdings */}
          <li>
            <Link style={{textDecoration:"none"}}
            to="/holdings" onClick={() => handleMenuClick(2)}
            >
              <p className={activeMenu === 2 ? activeMenuClass : menuItems}>Holdings</p>
            </Link>
          </li>

          {/* Positions link - shows open trading positions */}
          <li>
            <Link style={{textDecoration:"none"}}
            to="/positions" onClick={() => handleMenuClick(3)}
            >
              <p className={activeMenu === 3 ? activeMenuClass : menuItems}>Positions</p>
            </Link>
          </li>

          {/* Funds link - manage account funds */}
          <li>
            <Link style={{textDecoration:"none"}}
            to="/funds" onClick={() => handleMenuClick(4)}
            >
              <p className={activeMenu === 4 ? activeMenuClass : menuItems}>Funds</p>
            </Link>
          </li>

          {/* Apps link - third-party integrations */}
          <li>
            <Link style={{textDecoration:"none"}}
            to="/apps" onClick={() => handleMenuClick(5)}
            >
              <p className={activeMenu === 5 ? activeMenuClass : menuItems}>Apps</p>
            </Link>
          </li>
        </ul>

        <hr />

        {/* User profile section with avatar and user ID */}
        <div className="profile" onClick={handleProfileClick}>
          <div className="avatar">ZU</div>
          <p className="username">USERID</p>
        </div>
      </div>
    </div>
  );
};

export default Menu;