import React from "react";
import "./style/tableBlock.scss";

export default function TableBlock(){
    return(
        <div className="paddingBottom">
            <div className="table-title">
                <h5>ORDER STATUS</h5>
            </div>
            <div className="table-item-box">
               <div className="table-box">
                   <div className="table-head-item">
                       <div className="item">
                           <h6>Invoice</h6>
                       </div>
                       <div className="item">
                           <h6>User</h6>
                       </div>
                       <div className="item">
                           <h6>Order date</h6>
                       </div>
                       <div className="item">
                           <h6>Amount</h6>
                       </div>
                       <div className="item">
                           <h6>Status</h6>
                       </div>
                       <div className="item">
                           <h6>Tracking Number</h6>
                       </div>
                   </div>
                   <div className="table-body-item">
                       <div className="item-body" style={{backgroundColor: '#F8F9FA'}}>
                          <div>
                              <a href="/">Order #53431</a>
                          </div>
                          <div>
                              <span>Steve N. Horton</span>
                          </div>
                          <div>
                              <span className="date">Oct 22, 2014</span>
                          </div>
                          <div>
                              <span>$45.00</span>
                          </div>
                          <div>
                              <span className="status" style={{backgroundColor: '#36BEA6'}}>Paid</span>
                          </div>
                          <div>
                              <span>-</span>
                          </div>
                       </div>
                       <div className="item-body">
                          <div>
                              <a href="/">Order #53432</a>
                          </div>
                          <div>
                              <span>Charles S Boyle</span>
                          </div>
                          <div>
                              <span className="date"> Oct 24, 2014</span>
                          </div>
                          <div>
                              <span>$245.30</span>
                          </div>
                          <div>
                              <span className="status" style={{backgroundColor: '#009EFB'}}>Shipped</span>
                          </div>
                          <div>
                              <span> <i className="fas fa-plane"> </i> CGX0089734531</span>
                          </div>
                       </div>
                       <div className="item-body" style={{backgroundColor: '#F8F9FA'}}>
                          <div>
                              <a href="/">Order #53433</a>
                          </div>
                          <div>
                              <span>Lucy Doe</span>
                          </div>
                          <div>
                              <span className="date"> Oct 24, 2014</span>
                          </div>
                          <div>
                              <span>$38.00</span>
                          </div>
                          <div>
                              <span className="status" style={{backgroundColor: '#009EFB'}}>Shipped</span>
                          </div>
                          <div>
                              <span> <i className="fas fa-plane"> </i>  CGX0089934571</span>
                          </div>
                       </div>
                       <div className="item-body">
                          <div>
                              <a href="/">Order #53434</a>
                          </div>
                          <div>
                              <span>Teresa L. Doe</span>
                          </div>
                          <div>
                              <span className="date"> Oct 15, 2014</span>
                          </div>
                          <div>
                              <span>$77.99</span>
                          </div>
                          <div>
                              <span className="status" style={{backgroundColor: '#009EFB'}}>Shipped</span>
                          </div>
                          <div>
                              <span> <i className="fas fa-plane"> </i>  CGX0089734574</span>
                          </div>
                       </div>
                       <div className="item-body" style={{backgroundColor: '#F8F9FA'}}>
                           <div>
                               <a href="/">Order #53435</a>
                           </div>
                           <div>
                               <span>Teresa L. Doe</span>
                           </div>
                           <div>
                               <span className="date">Oct 12, 2014</span>
                           </div>
                           <div>
                               <span>$18.00</span>
                           </div>
                           <div>
                               <span className="status" style={{backgroundColor: '#36BEA6'}}>Paid</span>
                           </div>
                           <div>
                               <span>-</span>
                           </div>
                       </div>
                       <div className="item-body">
                           <div>
                               <a href="/">Order #53437</a>
                           </div>
                           <div>
                               <span>Charles S Boyle</span>
                           </div>
                           <div>
                               <span className="date">Oct 17, 2014</span>
                           </div>
                           <div>
                               <span>$658.00</span>
                           </div>
                           <div>
                               <span className="status" style={{backgroundColor: '#F62D51'}}>Refunded</span>
                           </div>
                           <div>
                               <span>-</span>
                           </div>
                       </div>
                       <div className="item-body" style={{backgroundColor: '#F8F9FA'}}>
                           <div>
                               <a href="/">Order #536584</a>
                           </div>
                           <div>
                               <span>Scott S. Calabrese</span>
                           </div>
                           <div>
                               <span className="date">Oct 19, 2014</span>
                           </div>
                           <div>
                               <span>$45.58</span>
                           </div>
                           <div>
                               <span className="status" style={{backgroundColor: '#FFBC34'}}>Unpaid</span>
                           </div>
                           <div>
                               <span>-</span>
                           </div>
                       </div>
                   </div>
               </div>
            </div>
        </div>
    )
}