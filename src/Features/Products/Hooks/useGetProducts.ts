import { useEffect, useMemo, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import type { AppDispatch, RootState } from "../../../Store/store";
import { FetchProducts } from "../Actions/ProdutActions";
import { useFilteraionContext } from "../../../Context/useFilteration";

const useGetProducts = () => {
  const { product } = useSelector((state: RootState) => state.Products);
  const { Category } = useFilteraionContext();
  const dispatch = useDispatch<AppDispatch>();
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const handleFetchProduct = async () => {
      setIsLoading(true);
      await new Promise((resolve) => setTimeout(resolve, 1000));
      setIsLoading(false);
      await dispatch(FetchProducts());
    };
    handleFetchProduct();
  }, [dispatch]);

  const filteredProducts = useMemo(() => {
    if (!product || product.length === 0) return [];
    if (Category === "all" || Category === "") return product;
    return product.filter((p) => p.category === Category);
  }, [product, Category]);

  return { filteredProducts, Category, isLoading };
};

export default useGetProducts;
