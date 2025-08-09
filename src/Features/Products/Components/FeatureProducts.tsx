import { Content } from "../../../Style/GlobalStyle";
import useGetProducts from "../Hooks/useGetProducts";

const FeatureProducts = () => {
  const { product } = useGetProducts();

  return (
    <>
      <div className={Content}>
        <div>
          <h1 className="text-3xl font-bold">Feature Products</h1>
        </div>

        <div className="grid grid-cols-4 gap-4 my-10">
          {product.map((product) => (
            <div className="border-[0.5px] border-[gray] cursor-pointer  hover:shadow-xl hover:shadow-[gray] transition-all duration-300 p-3 rounded-xl flex flex-col gap-2">
              <div>
                <img
                  src={product.image}
                  alt="productImage.png"
                  className="w-full h-40 object-contain py-5"
                />
              </div>

              <div className="flex flex-col gap-2">
                <h1 className="font-bold">{product.title}</h1>
                <p className="text-[gray] font-semibold">{product.category}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default FeatureProducts;
