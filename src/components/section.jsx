import { Link } from "react-router-dom";
import ProductCard from "./productCard";
function Section({ title, collection, products}){
	return(
	    <div className="section">
	        <text id="title">{title}</text>
	        
	        <div className="grid">
	            {Array.isArray(products) && products.map((p)=>(
				    <ProductCard key={p.id} {...p}/>
			    ))}
	        </div>
	        <div className="button">
	        <Link to={`/collections/${collection}`}>
	            <button id="button">View all</button>
	        </Link>
	        </div>
	    </div>
	);
}
export default Section;
