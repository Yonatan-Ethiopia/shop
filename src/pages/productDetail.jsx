import { useParams } from "react-router-dom";

import "./ProductDetail.css";
import allProducts from "../data/products"
import ProductCard from "../components/productCard"
import OrderOverlay from "../components/OrderOverlay"
import ShimmerPlaceholder from "../components/ShimmerPlaceholder"
import "../components/ShimmerPlaceholder.css"
const products = allProducts

function ProductDetail() {
	

  const { id } = useParams();
  const cleanId = id.replace(':', '');
  const numericId = parseInt(cleanId, 10);
  console.log(numericId)
  const product = allProducts.find(p => p.id === numericId);
  const [showOrder, setShowOrder] = useState(false);
  if (!product) return <p>Product not found.</p>;

  const related = products.filter(
    p => p.category === product.category && p.id !== product.id
  ).slice(0, 4);

  return (
    <div className="product-detail">
      <div className="detail-left">
      
		 
        <img src={product.image} loading="lazy"   />
      </div>

      <div className="detail-right">
        <h2>{product.name}</h2>
        <p className="price">{product.price}</p>

        <button className="order-btn" onClick={() => setShowOrder(true)}>Order Now</button>
		 {showOrder && (
  <OrderOverlay 
    product={product} 
    onClose={() => setShowOrder(false)} 
  />
)}
        <p className="description">{product.description}</p>
      </div>

      <div className="related-section">
        <h3>Related Products</h3>
        <div className="related-products">
          {related.map(r => (
            <ProductCard key={r.id} {...r}/>
          ))}
        </div>
      </div>
    </div>
  );
}

export default ProductDetail;

