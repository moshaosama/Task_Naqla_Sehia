import { useThemeContext } from "../../../Context/useTheme";
import { Content } from "../../../Style/GlobalStyle";
import useGetProducts from "../Hooks/useGetProducts";
import { ClockLoader } from "react-spinners";

const FeatureProducts = () => {
  const { filteredProducts, isLoading } = useGetProducts();
  const { theme } = useThemeContext();

  if (filteredProducts?.length === 0 && !isLoading) {
    return (
      <>
        <div className="flex justify-center">
          <h1 className="text-4xl font-bold text-red-700">No products</h1>
        </div>
      </>
    );
  }

  return (
    <>
      <div className={Content}>
        <div>
          <h1 className="text-3xl font-bold">Feature Products</h1>
        </div>

        <div className="grid grid-cols-4 max-sm:grid-cols-2 gap-4 my-10">
          {isLoading ? (
            <div className="py-[15.9pc] max-sm:py-5 max-sm:px-5 px-[30pc]">
              <ClockLoader
                color={theme === "light" ? "black" : "white"}
                size={100}
              />
            </div>
          ) : (
            filteredProducts.map((product) => (
              <div
                key={product.id}
                className="border-[0.5px] border-[gray] cursor-pointer  hover:shadow-xl hover:shadow-[gray] transition-all duration-300 p-3 rounded-xl flex flex-col gap-2"
              >
                <div>
                  <img
                    src={product.image}
                    alt="productImage.png"
                    className="w-full h-40 object-contain py-5"
                  />
                </div>

                <div className="flex flex-col gap-2">
                  <h1 className="font-bold">{product.title}</h1>
                  <p className="text-[gray] font-semibold">
                    {product.category}
                  </p>
                </div>
              </div>
            ))
          )}
        </div>
      </div>
    </>
  );
};

export default FeatureProducts;
