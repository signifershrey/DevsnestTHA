import React from "react";
import {ThemeContext} from "./ThemeContext";

const ThemeToggler = () => {
  const { theme, setTheme } = ThemeContext();

  return (
    <button className="theme-toggle-btn" onClick={() => setTheme(!theme)}>
      {theme ? "Dark" : "Light"}
    </button>
  );
};

export default ThemeToggler;
