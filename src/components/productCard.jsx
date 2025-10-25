import { Link } from "react-router-dom";
import { useState } from "react";
import ShimmerPlaceholder from "./ShimmerPlaceholder"
function ProductCard({ name, price, image, id}){
	const [loaded, setLoaded] = useState(false);

	return(
	<Link to={`/product/:${id}`} style={{textDecoration: 'none', color: 'inherit'}}>
	<div className = "card" >
		{!loaded && <ShimmerPlaceholder />}
	    <img id="productImg" src={image} alt={name} loading="lazy"  onLoad={() => setLoaded(true)} />
	    <p>{name}</p>
	    <text>{price}</text> 
	</div>
	</Link>  );
}
export default ProductCard;
