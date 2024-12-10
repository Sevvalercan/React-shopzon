import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getSearchProducts } from "../redux/searchSlice";

const Search = () => {
  const [searchTerm, setSearchTerm] = useState(""); // Arama terimi için state
  const [filteredProducts, setFilteredProducts] = useState([]); // Filtrelenmiş ürünler
  const dispatch = useDispatch();
  const { products, productStatus } = useSelector((state) => state.search);

  useEffect(() => {
    dispatch(getSearchProducts()); // API'den ürünleri çek
  }, [dispatch]);

  useEffect(() => {
    // Arama terimine göre ürünleri filtrele
    const filtered = products.filter((product) =>
      product.title.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredProducts(filtered);
  }, [searchTerm, products]);

  return (
    <div className="p-5">
      <h1 className="text-3xl font-bold mb-5">Ürün Ara</h1>
      <div className="flex items-center gap-3 mb-5">
        <input
          type="text"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)} // Kullanıcı girişini al
          placeholder="Ürün ara..."
          className="border border-gray-300 p-2 rounded-md w-1/2"
        />
      </div>
      {productStatus === "loading" ? (
        <div>Yükleniyor...</div>
      ) : (
        <div className="grid grid-cols-4 gap-4">
          {filteredProducts.map((product) => (
            <div key={product.id} className="border p-3 rounded-md">
              <img
                src={product.image}
                alt={product.title}
                className="w-full h-32 object-cover mb-3"
              />
              <h3 className="text-lg font-bold">{product.title}</h3>
              <p>{product.price} TL</p>
            </div>
          ))}
          {filteredProducts.length === 0 && (
            <p className="text-red-500 col-span-4">Sonuç bulunamadı.</p>
          )}
        </div>
      )}
    </div>
  );
};

export default Search;
