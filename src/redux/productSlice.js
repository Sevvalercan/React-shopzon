import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { STATUS } from "../utils/status";

const initialState = {
    products: [],
    productStatus: STATUS.IDLE,
    categoryStatus: STATUS.IDLE, // Yeni kategori durumu
    productDetail: null, // Başlangıçta boş değer
    productDetailStatus: STATUS.IDLE,
};

// Ürünleri Getir
export const getProducts = createAsyncThunk('products/getProducts', async () => {
    const response = await fetch('https://fakestoreapi.com/products');
    const data = await response.json();
    return data;
});

// Belirli Bir Kategoriye Ait Ürünleri Getir
export const getCategoryProducts = createAsyncThunk('products/getCategoryProducts', async (category) => {
    const response = await fetch(`https://fakestoreapi.com/products/category/${category}`);
    const data = await response.json();
    return data;
});

// Belirli Bir Ürün Detayını Getir
export const getDetailProduct = createAsyncThunk('products/getDetailProduct', async (id) => {
    const response = await fetch(`https://fakestoreapi.com/products/${id}`);
    const data = await response.json();
    return data;
});

const productSlice = createSlice({
    name: "products",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            // Ürünleri Getir Asenkron Çağrısı
            .addCase(getProducts.pending, (state) => {
                state.productStatus = STATUS.LOADING;
            })
            .addCase(getProducts.fulfilled, (state, action) => {
                state.productStatus = STATUS.SUCCESS;
                state.products = action.payload; // API'den dönen ürünler
            })
            .addCase(getProducts.rejected, (state) => {
                state.productStatus = STATUS.FAIL;
            })

            // Belirli Ürün Detayını Getir Asenkron Çağrısı
            .addCase(getDetailProduct.pending, (state) => {
                state.productDetailStatus = STATUS.LOADING;
            })
            .addCase(getDetailProduct.fulfilled, (state, action) => {
                state.productDetailStatus = STATUS.SUCCESS;
                state.productDetail = action.payload; // API'den dönen ürün detayı
            })
            .addCase(getDetailProduct.rejected, (state) => {
                state.productDetailStatus = STATUS.FAIL;
            })

            // Belirli Kategorideki Ürünleri Getir Asenkron Çağrısı
            .addCase(getCategoryProducts.pending, (state) => {
                state.categoryStatus = STATUS.LOADING; // Kategori durumunu yükleniyor olarak ayarlıyoruz
            })
            .addCase(getCategoryProducts.fulfilled, (state, action) => {
                state.categoryStatus = STATUS.SUCCESS;
                state.products = action.payload; // API'den dönen ürünler
            })
            .addCase(getCategoryProducts.rejected, (state) => {
                state.categoryStatus = STATUS.FAIL; // Kategori yüklemesi başarısız olduysa durumu değiştirme
            });
    },
});

export default productSlice.reducer;
