import { useState, useEffect } from "react";
import { Link } from "@tanstack/react-router";
import { NAVIGATION } from "../../lib/constants";
import ThemeSwitch from "../darklightmode";

export default function Navigation() {
  const [isDropdownVisible, setDropdownVisible] = useState(false);
  const [isLargeScreen, setIsLargeScreen] = useState(window.innerWidth >= 768);

  const toggleDropdown = () => {
    setDropdownVisible(!isDropdownVisible);
  };

  useEffect(() => {
    const handleResize = () => {
      setIsLargeScreen(window.innerWidth >= 768);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div className="navbar">
      <div className="navbar-start">
        <div
          className={`dropdown ${
            isLargeScreen
              ? "dropdown-open"
              : isDropdownVisible
              ? "dropdown-open"
              : ""
          }`}
        >
          <label
            tabIndex={0}
            className={`btn btn-ghost btn-circle ${
              isLargeScreen ? "hidden" : "block"
            }`}
            onClick={toggleDropdown}
          >
            {/* SVG for hamburger icon */}
          </label>
          <ul
            tabIndex={0}
            className={`menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow rounded-box w-10/12 ${
              isLargeScreen
                ? "visible"
                : isDropdownVisible
                ? "visible"
                : "hidden"
            }`}
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
        <input
          type="text"
          placeholder="Search here"
          className="input w-full max-w-xs"
        />
      </div>
      <div className="navbar-end">
        <ThemeSwitch />
      </div>
    </div>
  );
}
