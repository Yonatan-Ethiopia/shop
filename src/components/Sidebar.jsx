import cancle from "../assets/icons/cancle.svg";
import { Link } from "react-router-dom";
function Sidebar({cats,className, onMenuClick}){
	return(
	
	<div className={className} onClick={onMenuClick}>
	<img src={cancle} alt="cancle" className="icon" id="cancle" style={{ width: 30 }}/>
	     {cats.map((c) => <Link to={c.link} id="lnk" style={{textDecoration: 'none', color: 'inherit'}}>{c.title}</Link>)}
	</div>
	)
}
export default Sidebar;
