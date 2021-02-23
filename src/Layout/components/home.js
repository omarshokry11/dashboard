import React from "react";
import HomeNavbar from "./Block/homeNavbar";
import TapChartBlock from "./Block/tapChartBlock";
import LineChartBlock from "./Block/lineChartBlock";
import HomeWeather from "./Block/homeWeather";
import HomeUser from "./Block/homeUser";
import HomeFeed from "./Block/homeFeed";
import TaxBlock from "./Block/taxBlock";
import ShipBlock from "./Block/shipBlock";
import RevenueBlock from "./Block/revenueBlock";
import OrderBlock from "./Block/orderBlock";
import TableBlock from "./Block/tableBlock";
import HomeFooter from "./Block/homeFooter";
import "./style/home.scss";

export default function Home(){

    return(
       <div className="home-box">
           <div className="home-navbar">
               <HomeNavbar />
           </div>
           <div className="main-home">
               <div className="tap-chart">
                   <TapChartBlock />
               </div>
               <div className="line-chart">
                   <LineChartBlock />
               </div>
           </div>
           <div className="item-box">
               <div>
                   <HomeWeather />
               </div>
               <div className="margin">
                   <HomeUser />
               </div>
               <div>
                   <HomeFeed />
               </div>
           </div>
           <div className="tax-order-box">
               <div>
                   <TaxBlock />
               </div>
               <div>
                   <ShipBlock />
               </div>
               <div>
                   <RevenueBlock />
               </div>
               <div>
                   <OrderBlock />
               </div>
           </div>
           <div className="table-box">
               <TableBlock />
           </div>
          <div className="home-footer">
              <HomeFooter />
          </div>
       </div>
    )
}