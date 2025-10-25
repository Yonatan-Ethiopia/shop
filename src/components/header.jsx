function Header({hImage}){
	return(
	    <div className="header" style={{ backgroundImage: `url(${hImage})`,backgroundSize: "contain", 
            backgroundRepeat: "no-repeat",backgroundPosition: "right",
  height: "80vh"}}>
            <div className="detail">
	        <text id="name">💎ÑD COLLCTÏON</text>
	        <text id="defination">💎 ND Collection Quality Never Questioned!</text>
	        <button id="shopNow">Shop Now</button>
	        </div>
	    </div>
	);
}
export default Header;
