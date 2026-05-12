import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

/**
 * Menu Component
 * Displays navigation menu with:
 * - Logo image
 * - Navigation links for different dashboard sections
 * - Active menu highlighting based on current route
 * - User profile section with avatar and user ID
 * - Logout functionality
 */
function Menu() {
  // Track which menu item is currently active (0-5)
  const [activeMenu, setActiveMenu] = useState(0);
  
  // Track if user profile dropdown is open
  const [isProfileOpen, setProfileOpen] = useState(false);

  const { user, logout } = useAuth();
  const navigate = useNavigate();

  const handleMenuClick = (index) => {
    setActiveMenu(index);
  };

  /**
   * Handle profile click - toggles profile dropdown visibility
   */
  const handleProfileClick = () => {
    setProfileOpen(!isProfileOpen); 
  };

  /**
   * Handle logout - clears auth state and redirects to login
   */
  const handleLogout = () => {
    logout();
    navigate('/');
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
          <div className="avatar">{user?.username?.substring(0, 2).toUpperCase() || "ZU"}</div>
          <p className="username">{user?.username || "USERID"}</p>
        </div>

        {/* Logout button - only visible to logged in users */}
        {isProfileOpen && (
          <div className="profile-dropdown" style={{
            marginTop: "10px",
            padding: "10px",
            backgroundColor: "#f5f5f5",
            borderRadius: "5px",
            cursor: "pointer"
          }}>
            <button
              onClick={handleLogout}
              style={{
                width: "100%",
                padding: "8px",
                border: "none",
                backgroundColor: "#dc3545",
                color: "white",
                borderRadius: "3px",
                cursor: "pointer",
                fontSize: "14px",
                fontWeight: "600"
              }}
            >
              Logout
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Menu;