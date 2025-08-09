import { useDispatch, useSelector } from "react-redux";
import type { AppDispatch, RootState } from "../../../Store/store";
import { useEffect } from "react";
import { FetchProducts } from "../Actions/ProdutActions";

const useGetProducts = () => {
  const { product } = useSelector((state: RootState) => state.Products);
  const Dispatch = useDispatch<AppDispatch>();
  useEffect(() => {
    Dispatch(FetchProducts());
  }, []);
  return { product };
};

export default useGetProducts;
