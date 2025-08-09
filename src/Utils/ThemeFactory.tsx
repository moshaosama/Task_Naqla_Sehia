import { useThemeContext } from "../Context/useTheme";
import { cn } from "../lib/utils";

const ThemeFactory = (Component: any) => {
  return (...props: any) => {
    const { theme } = useThemeContext();
    return (
      <>
        <div
          className={cn(
            theme === "light" ? "bg-white text-black" : "bg-black text-white"
          )}
        >
          <Component {...props} />
        </div>
      </>
    );
  };
};

export default ThemeFactory;
