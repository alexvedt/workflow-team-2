import { useState } from "react";
import { Link } from "@tanstack/react-router";
import { NAVIGATION } from "../../lib/constants";
import ThemeSwitch from "../darklightmode";

export default function Navigation() {
  // Declare a state variable to control visibility
  const [isDropdownVisible, setDropdownVisible] = useState(true);

  const toggleDropdown = () => {
    setDropdownVisible(!isDropdownVisible);
  };

  return (
    <div className="navbar bg-base-100">
      <div className="navbar-start">
        <div className={`dropdown ${isDropdownVisible ? "dropdown-open" : ""}`}>
          <label tabIndex={0} className="btn btn-ghost btn-circle" onClick={toggleDropdown}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h7"
              />
            </svg>
          </label>
          <ul
            tabIndex={0}
            className={`menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-10/12 ${isDropdownVisible ? 'visible' : 'hidden'}`}
          >
            {NAVIGATION.map((item) => (
              <li key={item.href}>
                <Link to={item.href}>{item.label}</Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className="navbar-center">
        <input type="text" placeholder="Search here" className="input w-full max-w-xs" />
      </div>
      <div className="navbar-end">
        <ThemeSwitch />
      </div>
    </div>
  );
}
