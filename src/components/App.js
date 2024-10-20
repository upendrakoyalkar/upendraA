import React from "react";
import ReactDOM from "react-dom/client"
import Header from "./Headre";
import Body from "./Body";
import Fotter from "./Fotter";
import ThankYou from "./ThankYou";



    





const AppLayout = () => {
    return(
        <div className="app">
          <Header/>
          <Body/>
          <Fotter/>
          <ThankYou/>
        </div>
    )
}





const rootEl = ReactDOM.createRoot(document.getElementById("root"))
rootEl.render(<AppLayout/>)