"use client";

import React from "react";
import { useTheme } from "../context/ThemeContext";

export default function BodyWrapper({ children }) {
  const { darkMode } = useTheme();

  return (
    <div className={darkMode ? "dark" : ""}>
      {children}
    </div>
  );
}