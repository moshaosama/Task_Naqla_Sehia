import axios from "axios";
import { ParentService } from "../ParentService";

class ProductService extends ParentService {
  createData() {}
  async getData(_?: any, thunkApi?: any) {
    try {
      const response = await axios.get("https://fakestoreapi.com/products");
      return response.data;
    } catch (err) {
      return thunkApi.rejectWithValue(err);
    }
  }
}

export const productService = new ProductService();
