import { useParams } from "react-router-dom";
import { useState } from "react";
import allProducts from "../data/products"; // your product array
import ProductCard from "../components/productCard";
function CategoryPage() {
  const { categoryName } = useParams();
  console.log(categoryName)
  const [page, setPage] = useState(1);
  const perPage = 8;

  const filtered = allProducts.filter(
    (p) => p.category.toLowerCase() === categoryName.toLowerCase()
 );

  const totalPages = Math.ceil(filtered.length / perPage);
  const paginated = filtered.slice((page - 1) * perPage, page * perPage);
   console.log(allProducts)
  return (
    <div className="category-page">
    
      <h2>{categoryName.toUpperCase()}</h2>

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

export default CategoryPage;
