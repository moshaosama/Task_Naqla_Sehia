import { createSlice } from "@reduxjs/toolkit";
import { FetchProducts } from "../Actions/ProdutActions";

interface ProductData {
  id: number;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
  rating: {
    rate: number;
    count: number;
  };
}

interface initialStateType {
  product: ProductData[];
  error: string;
  loading: boolean;
}

const initialState: initialStateType = {
  product: [],
  error: "",
  loading: false,
};

const ProductSlice = createSlice({
  initialState,
  name: "Products",
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(FetchProducts.pending, (state) => {
        state.loading = true;
        state.error = "";
      })
      .addCase(FetchProducts.fulfilled, (state, action) => {
        state.loading = false;
        state.product = action.payload;
      })
      .addCase(FetchProducts.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message || "Something went wrong";
      });
  },
});

export default ProductSlice.reducer; // ✅ Export reducer
