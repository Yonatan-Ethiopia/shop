import { useState } from "react";
import { Link } from "react-router-dom";
import search from "../assets/icons/search.svg";
function SearchBar({ products }) {
  const [query, setQuery] = useState("");
  const [showResults, setShowResults] = useState(true);

  const filteredProducts = products.filter(p =>
    p.name.toLowerCase().includes(query.toLowerCase())
  );

  
  return (
  showResults && (
    <div className="search-overlay" onClick={() => setShowResults(false)}>
      <div
        className="search-box"
        onClick={(e) => e.stopPropagation()}
      >
        <input
          type="text"
          placeholder="Search products..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          autoFocus
        />

        <div className="results-dropdown">
          {query.length > 0 && filteredProducts.length === 0 && (
            <div className="no-result">No products found</div>
          )}

          {filteredProducts.slice(0, 8).map((item) => (
			  <Link to={`/product/:${item.id}`} style={{textDecoration: 'none', color: 'inherit'}}>
            <div className="result-item" key={item.id} onClick={()=>setShowResults(false)}>
              <img src={item.image} alt={item.name} />
              <div className="result-info">
                <p>{item.name}</p>
                <p className="price">{item.price} ETB</p>
              </div>
            </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  )
);


}
export default SearchBar;
