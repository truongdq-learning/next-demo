"use client";
import { useTheme } from "next-themes";

import { Button } from "antd";
export const ToggleTheme = () => {
  const { setTheme, theme } = useTheme();

  const handleChangeTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  return <Button onClick={handleChangeTheme}>Change Theme</Button>;
};
