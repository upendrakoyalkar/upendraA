import Cards from "./Cards";
import resList from "../utilits/Mockdata";
import { useState } from "react";

    
    

const Body = () => {
 
  const [ListofResturent,setListofResturent] = useState(resList)

  
return(
    <div>
      
        <button className="Top_rated_button" onClick = { () => {
             filterd = ListofResturent.filter((e) => e.info.avgRating > 4);
             setListofResturent(filterd)
        }}>Top Rated Products</button>
        
    <div className="body_container">
    {ListofResturent.map((i) =>(
    <Cards resData = {i}/>))}
        
</div>
    </div>)
}

export default Body