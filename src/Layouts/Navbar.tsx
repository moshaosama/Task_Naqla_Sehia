import { Moon, ShoppingCart, Sun } from "lucide-react";
import { Container } from "../Style/GlobalStyle";
import { useThemeContext } from "../Context/useTheme";
import { cn } from "../lib/utils";
const Navbar = () => {
  const { toggleTheme, theme } = useThemeContext();
  return (
    <>
      <div className="py-4">
        <div className={cn(Container, "flex justify-between")}>
          <div className="flex items-center gap-3">
            <ShoppingCart />
            <h1 className="text-xl font-bold">Shop Online</h1>
          </div>

          <div className="flex items-center gap-10">
            <div onClick={toggleTheme} className="cursor-pointer">
              {theme === "light" ? <Sun /> : <Moon />}
            </div>

            <div>
              <img
                src="eyJidWNrZXQiOiJjb250ZW50Lmhzd3N0YXRpYy5jb20iLCJrZXkiOiJnaWZcL3BsYXlcLzBiN2Y0ZTliLWY1OWMtNDAyNC05ZjA2LWIzZGMxMjg1MGFiNy0xO.webp"
                alt="Person.png"
                className="w-10 h-10 rounded-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
