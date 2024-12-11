"use client";

import { ThemeProvider, useTheme } from "@/components/ThemeContext";
import { useState } from "react";

export function ThemeToggleButton() {
  const { toggleTheme } = useTheme();
  const [isChecked, setIsChecked] = useState(false);

  const handleToggle = () => {
    setIsChecked(!isChecked);
    toggleTheme();
  };

  return (
    <label
      style={{
        position: "absolute",
        top: "10px",
        right: "10px",
        display: "inline-block",
        width: "60px",
        height: "34px",
      }}
    >
      <input
        type="checkbox"
        checked={isChecked}
        onChange={handleToggle}
        style={{ display: "none" }}
      />
      <span
        style={{
          position: "absolute",
          cursor: "pointer",
          top: "0",
          left: "0",
          right: "0",
          bottom: "0",
          backgroundColor: isChecked ? "#2196F3" : "#ccc",
          transition: ".4s",
          borderRadius: "34px",
        }}
      >
        <span
          style={{
            position: "absolute",
            height: "26px",
            width: "26px",
            left: isChecked ? "26px" : "4px",
            bottom: "4px",
            backgroundColor: "white",
            transition: ".4s",
            borderRadius: "50%",
          }}
        />
      </span>
    </label>
  );
}