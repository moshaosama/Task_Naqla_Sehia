import { Search } from "lucide-react";
import { cn } from "../../../lib/utils";
import { Content } from "../../../Style/GlobalStyle";
import { useThemeContext } from "../../../Context/useTheme";
import { useFilteraionContext } from "../../../Context/useFilteration";

const FilterationInput = () => {
  const { theme } = useThemeContext();
  const { handleSetFilteration, handleSubmit, register } =
    useFilteraionContext();
  return (
    <>
      <form
        onChange={handleSubmit(handleSetFilteration)}
        className={cn("relative", Content)}
      >
        <div className="absolute top-7 left-[25.7pc] max-sm:left-[2.6pc] max-2xl:left-[14.7pc] max-xl:left-[7.6pc]">
          <Search color="#a3a3a3" />
        </div>
        <input
          type="text"
          placeholder="Search for products"
          className={cn(
            "  rounded-xl focus:outline-0 font-bold w-full py-3 px-10",
            theme == "light" ? "bg-[#d1d1d1]" : "bg-black border"
          )}
          {...register("Category")}
        />
      </form>
    </>
  );
};

export default FilterationInput;
