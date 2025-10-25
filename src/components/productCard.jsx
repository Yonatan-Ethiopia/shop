import { Link } from "react-router-dom";

import ShimmerPlaceholder from "./ShimmerPlaceholder"
function ProductCard({ name, price, image, id}){
	

	return(
	<Link to={`/product/:${id}`} style={{textDecoration: 'none', color: 'inherit'}}>
	<div className = "card" >
		<div className="img-wrapper">
	    <img id="productImg" src={image} alt="" loading="lazy" />
	    </div>
	    <p>{name}</p>
	    <text>{price}</text> 
	</div>
	</Link>  );
}
export default ProductCard;
