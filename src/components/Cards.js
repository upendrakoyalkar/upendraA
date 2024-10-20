import { CDN_URL } from "../utilits/constants";

 
const Cards = (props) =>  {
    const {resData} = props

    return(
    <div className = "Card_container">
        
     <img className="card_image" src = {CDN_URL+resData.info.cloudinaryImageId} />
    
     <h4 className="name">{resData.info.name}</h4>
     <h4>{resData.info.features.join(" ,")}</h4>
     <h4>{resData.info.costForTwo}</h4>
     <h4>star rating{resData.info.avgRating}  ✦✦✦✦</h4>
     <button className="addtocard">Add to Cart + </button>
   </div>
    )
}

export default Cards