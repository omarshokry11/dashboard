import React from "react";
import HomeNavbar from "./Block/HomeNavbar.js";
import TapChartBlock from "./Block/TapChartBlock.js";
import LineChartBlock from "./Block/LineChartBlock.js";
import HomeWeather from "./Block/HomeWeather.js";
import HomeUser from "./Block/HomeUser.js";
import HomeFeed from "./Block/HomeFeed.js";
import TaxBlock from "./Block/TaxBlock.js";
import ShipBlock from "./Block/ShipBlock.js";
import RevenueBlock from "./Block/RevenueBlock.js";
import OrderBlock from "./Block/OrderBlock.js";
import TableBlock from "./Block/TableBlock.js";
import HomeFooter from "./Block/HomeFooter.js";
import "./style/Home.scss";

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