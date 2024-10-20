import { LOGO_URL } from "../utilits/constants" 

const Header = () => {
    return(
    <div className = "Header_container" >
   
<img  className = "Logoimage" src = {LOGO_URL}/>
       
      
        
        <div className="SearchButton">  
            
            < input type = "text"  placeholder="Search Here"/>
        <button><img className="searchImg"src = "data:image/png;base64,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" /></button> </div>
        
         <ul>
            <li>Home</li>
            <li>About</li>
            <li>Contact Us</li>
            <li><img className="carticon" src = "https://static.vecteezy.com/system/resources/thumbnails/002/318/271/small/user-profile-icon-free-vector.jpg" /> <li className="myprofile">My Profile</li></li>

            <li><img className="carticon" src = "https://cdn-icons-png.flaticon.com/128/3144/3144456.png" /> <li>Cart</li></li>
         </ul>
    </div>)
}

export default Header