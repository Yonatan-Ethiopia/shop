import Section from "../components/section";



function Home(){
	
	const shein = [ {id:1 , name:"Mauve purple", image:"https://uvvfxecxirwxnefamcpt.supabase.co/storage/v1/object/public/productImages/shein1.jpg?width=500&quality=70&format=webp", price:"Br4,300.00 ETB"},
	                   { id: 2, name:"Mesh Panel Square Neck Tops", image:"https://uvvfxecxirwxnefamcpt.supabase.co/storage/v1/object/public/productImages/shein2.jpg?width=500&quality=70&format=webp", price:"Br1,800.00 ETB"},
	                   { id: 3, name:"High-Waist Bodycon Maxi Skirt (Cow Print)", image:"https://uvvfxecxirwxnefamcpt.supabase.co/storage/v1/object/public/productImages/shein3.jpg?width=500&quality=70&format=webp", price:"Br3,000.00 ETB"},
	                   { id: 4, name:"Floral & Plain Crop Tanks", image:"https://uvvfxecxirwxnefamcpt.supabase.co/storage/v1/object/public/productImages/shirt4.png?width=500&quality=70&format=webp", price:"Br1,900.00 ETB"} ]

	const elec = [ { id:15, name: "Samsung S22 Ultra - 256GB", image:"https://uvvfxecxirwxnefamcpt.supabase.co/storage/v1/object/public/productImages/elec.jpg?width=500&quality=70&format=webp", price: "Br63,000.00 ETB", category: "electronics"},
  { id:16, name: "Iphone 11 Pro", image: "https://uvvfxecxirwxnefamcpt.supabase.co/storage/v1/object/public/productImages/elec2.jpg?width=500&quality=70&format=webp", price: "Br95,000.00 ETB", category:"electronics"},
  { id:17, name: "Samsung galaxy A55 5G", image: "https://uvvfxecxirwxnefamcpt.supabase.co/storage/v1/object/public/productImages/elec3.jpg?width=500&quality=70&format=webp", price: "Br51,000.00 ETB", category:"electronics"},
  { id:18, name: "iPhone 13 – 128GB", image: "https://uvvfxecxirwxnefamcpt.supabase.co/storage/v1/object/public/productImages/elec4.jpg?width=500&quality=70&format=webp", price: "Br96,000.00 ETB", category: "electronics"} ]
	const sup = [{ id:20, name: "OPTIMUM NUTRITION GOLD STANDARD WHEY", image: "https://uvvfxecxirwxnefamcpt.supabase.co/storage/v1/object/public/productImages/sup1.jpg", price: "Br16,400.00 ETB", category: "supplements"},
  { id:21, name: "OPTIMUM NUTRITION MICRONIZED CREATINE", image:"https://uvvfxecxirwxnefamcpt.supabase.co/storage/v1/object/public/productImages/sup2.jpg", price: "Br7,500.00 ETB", category:"supplements"},
  { id:22, name: "100% WHEY platinum standard", image: "https://uvvfxecxirwxnefamcpt.supabase.co/storage/v1/object/public/productImages/sup3.jpg", price: "Br9,000.00 ETB", category:"supplements"},
  { id:23, name: "Snickers", image: "https://uvvfxecxirwxnefamcpt.supabase.co/storage/v1/object/public/productImages/sup4.jpg", price: "Br2000.00 ETB", category: "supplements"}]
	                   
	
	
	return(
	    <div className="home">
	        <Section title="Shein" collection="shein" products={shein}/>
			<Section title="Mobile and Electronics" collection ="electronics" products={elec}/>
			<Section title="Supplmenets" collection ="supplements" products={sup}/>
			
	    </div>
	);
}
export default Home;
