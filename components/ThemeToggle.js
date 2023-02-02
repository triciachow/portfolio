import { Moon, Sun } from "lucide-react";
import { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";

export default function Toggle() {
  const { theme, setTheme } = useContext(ThemeContext);

  return (
    <>
      <div className="transition duration-200 ease-in-out">
        {theme == "dark" ? (
          <Sun
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
            className="text-slate-900 dark:text-gray-300 cursor-pointer"
          />
        ) : (
          <Moon
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
            className="text-slate-900 dark:text-gray-300 cursor-pointer"
          />
        )}
      </div>
    </>
  );
}
