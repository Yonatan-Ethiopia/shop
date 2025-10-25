import ProductCard from "./productCard";
function SectionT({ title, products}){
	return(
	    <div className="section2">
	        <div className="grid2">
	            {Array.isArray(products) && products.map((p)=>(
				    <ProductCard key={p.id} {...p}/>
			    ))}
	        </div>
	        
	    </div>
	);
}
export default SectionT;
