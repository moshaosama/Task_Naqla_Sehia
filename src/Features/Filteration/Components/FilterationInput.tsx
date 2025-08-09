import { Search } from "lucide-react";
import { cn } from "../../../lib/utils";
import { Content } from "../../../Style/GlobalStyle";
import { useThemeContext } from "../../../Context/useTheme";

const FilterationInput = () => {
  const { theme } = useThemeContext();
  return (
    <>
      <form className={cn("relative", Content)}>
        <div className="absolute top-7 left-[25.7pc]">
          <Search color="#a3a3a3" />
        </div>
        <input
          type="text"
          placeholder="Search for products"
          className={cn(
            "  rounded-xl focus:outline-0 font-bold w-full py-3 px-10",
            theme == "light" ? "bg-[#d1d1d1]" : "bg-black border"
          )}
        />
      </form>
    </>
  );
};

export default FilterationInput;
