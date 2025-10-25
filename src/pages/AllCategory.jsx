import allProducts from "../data/products";
import ProductCard from "../components/productCard";
import React, { useState, useEffect } from "react";
function AllCategories(){
	const [page, setPage] = useState(1);
    const perPage = 16;
    const totalPages = Math.ceil(allProducts.length / perPage);
    const paginated = allProducts.slice((page - 1) * perPage, page * perPage);
    return(
    <div className="category-page">
    
      <h2>All Products</h2>

      <div className="products-grid">
        {paginated.map((item) => (
          <ProductCard key={item.id} {...item} />
        ))}
      </div>

      <div className="pagination">
        {Array.from({ length: totalPages }, (_, i) => (
          <button
            key={i}
            onClick={() => setPage(i + 1)}
            className={page === i + 1 ? "active" : ""}
          >
            {i + 1}
          </button>
        ))}
      </div>
    </div>
  );
    

}
export default AllCategories;
