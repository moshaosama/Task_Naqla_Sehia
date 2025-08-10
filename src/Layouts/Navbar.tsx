import { Moon, ShoppingCart, Sun } from "lucide-react";
import { Container } from "../Style/GlobalStyle";
import { useThemeContext } from "../Context/useTheme";
import { cn } from "../lib/utils";
import useChangeLanguages from "../Hooks/useChangeLanguages";
const Navbar = () => {
  const { toggleTheme, theme } = useThemeContext();
  const { ChangeLanuage, t } = useChangeLanguages();

  return (
    <>
      <div className="py-4">
        <div className={cn(Container, "flex justify-between")}>
          <div className="flex items-center gap-3">
            <ShoppingCart />
            <h1 className="text-xl font-bold">{t("BrandName")}</h1>
          </div>

          <div className="flex items-center gap-10">
            <div onClick={toggleTheme} className="cursor-pointer">
              {theme === "light" ? <Moon /> : <Sun />}
            </div>

            <div>
              <button
                onClick={() => ChangeLanuage("en")}
                className="border py-1 px-5 rounded-2xl hover:bg-[gray] transition-all duration-700 cursor-pointer"
              >
                en
              </button>
              <button
                onClick={() => ChangeLanuage("ar")}
                className="border py-1 px-5 hover:bg-[gray] transition-all duration-700 rounded-2xl cursor-pointer"
              >
                ar
              </button>
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
