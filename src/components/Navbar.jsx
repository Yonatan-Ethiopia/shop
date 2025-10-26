import menuIcon from "../assets/icons/menu.svg";
import search from "../assets/icons/search.svg";
import cancle from "../assets/icons/cancle.svg";
function Navbar( {onMenuClick, isOpen, onSearchClick} ){
	return(
	    <div className="navbar">
	        <div className="menu" onClick={onMenuClick}>
	            { isOpen ? (<img src={cancle} alt="cancle" className="icon" id="cancle" style={{ width: 30 }}/>):(<img src={menuIcon} alt="cancle" className="icon" id="humberg" style={{ width: 30 }}/>)}
	        </div>
	        <div className="topText">
	           <text id="title2">Nadiel's shop</text> 
	        </div>
	        <div className="searchB" onClick={onSearchClick}>
	           <img src={search} alt="search" className="icon" style={{ width: 30 }}/>
	        </div>
	    </div>
	);
}
export default Navbar;
