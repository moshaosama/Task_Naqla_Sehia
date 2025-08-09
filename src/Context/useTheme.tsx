import {
  createContext,
  useContext,
  useState,
  useEffect,
  type ReactNode,
} from "react";

interface ThemeContextData {
  theme: string;
  toggleTheme: () => void;
}

interface ThemeContextProps {
  children: ReactNode;
}

const ThemeContext = createContext<null | ThemeContextData>(null);

export const ThemeProvider = ({ children }: ThemeContextProps) => {
  const [theme, setTheme] = useState(
    window.localStorage.getItem("theme") || "light"
  );

  useEffect(() => {
    window.localStorage.setItem("theme", theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prev) => (prev === "light" ? "dark" : "light"));
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useThemeContext = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error("useThemeContext must be used within an ThemeContext");
  }
  return context;
};
