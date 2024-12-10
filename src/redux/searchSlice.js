import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { STATUS } from "../utils/status";

const initialState = {
  products: [], // Ürünlerin listesi
  productStatus: STATUS.IDLE, // Ürünlerin yüklenme durumu
};

// API'den Ürünleri Çek
export const getSearchProducts = createAsyncThunk(
  "search/getSearchProducts",
  async () => {
    const response = await fetch(`https://fakestoreapi.com/products`);
    const data = await response.json();
    return data;
  }
);

const searchSlice = createSlice({
  name: "search",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getSearchProducts.pending, (state) => {
        state.productStatus = STATUS.LOADING;
      })
      .addCase(getSearchProducts.fulfilled, (state, action) => {
        state.productStatus = STATUS.SUCCEEDED;
        state.products = action.payload; // API'den gelen ürünler kaydediliyor
      })
      .addCase(getSearchProducts.rejected, (state) => {
        state.productStatus = STATUS.FAILED;
      });
  },
});

export default searchSlice.reducer;
