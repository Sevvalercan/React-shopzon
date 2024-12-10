import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getProducts, getCategoryProducts } from "../../redux/productSlice";
import Loading from "../Loading";
import Product from "./Product";
import ReactPaginate from "react-paginate";

const Products = ({ category, sort }) => {
  const dispatch = useDispatch();
  const { products, productStatus } = useSelector((state) => state.products);

  const [itemOffset, setItemOffset] = useState(0);

  const itemsPerPage = 6;
  const endOffset = itemOffset + itemsPerPage;
  const currentItems = products.slice(itemOffset, endOffset);
  const pageCount = Math.ceil(products.length / itemsPerPage);

  const handlePageClick = (event) => {
    const newOffset = (event.selected * itemsPerPage) % products.length;
    setItemOffset(newOffset);
  };

  useEffect(() => {
    if (category) {
      dispatch(getCategoryProducts(category));
    } else {
      dispatch(getProducts());
    }
  }, [dispatch, category]);

  return (
    <div>
      {productStatus === "LOADING" ? (
        <Loading />
      ) : (
        <div>
          <div className="flex flex-wrap justify-center">
            {
              // Sort products based on the selected 'sort' prop
              currentItems
                ?.sort((a, b) => 
                  sort === "inc" ? a.price - b.price : 
                  sort === "dec" ? b.price - a.price : ""
                )
                ?.map((product, i) => (
                  <Product key={i} product={product} />
                ))
            }
          </div>
          <ReactPaginate
            className="paginate flex justify-center mt-4"
            breakLabel="..."
            nextLabel=">"
            onPageChange={handlePageClick}
            pageRangeDisplayed={5}
            pageCount={pageCount}
            previousLabel="<"
            renderOnZeroPageCount={null}
            containerClassName="flex gap-2"
            activeClassName="text-white bg-blue-500 px-3 py-1 rounded"
            pageClassName="border px-3 py-1 rounded hover:bg-gray-200"
            previousClassName="border px-3 py-1 rounded hover:bg-gray-200"
            nextClassName="border px-3 py-1 rounded hover:bg-gray-200"
            disabledClassName="opacity-50 cursor-not-allowed"
          />
        </div>
      )}
    </div>
  );
};

export default Products;
