import { FilterationProvider } from "./Context/useFilteration";
import { ThemeProvider } from "./Context/useTheme";
import FilterationInput from "./Features/Filteration/Components/FilterationInput";
import FeatureProducts from "./Features/Products/Components/FeatureProducts";
import Navbar from "./Layouts/Navbar";
import ThemeFactory from "./Utils/ThemeFactory";

const NavbarTheme = ThemeFactory(Navbar);
const FilterationInputTheme = ThemeFactory(FilterationInput);
const FeatureProductsTheme = ThemeFactory(FeatureProducts);

function App() {
  return (
    <>
      <FilterationProvider>
        <ThemeProvider>
          <NavbarTheme />
          <FilterationInputTheme />
          <FeatureProductsTheme />
        </ThemeProvider>
      </FilterationProvider>
    </>
  );
}

export default App;
