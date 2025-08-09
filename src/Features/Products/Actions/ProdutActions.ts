import { createAsyncThunk } from "@reduxjs/toolkit";
import { productService } from "../../../Api/Products/productService";

export const FetchProducts = createAsyncThunk("Products/FetchProducts", () => {
  return productService.getData();
});
