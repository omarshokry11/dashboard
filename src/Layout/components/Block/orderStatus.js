import React from "react";
import "./style/OrderStatusBlock.scss";

export default function OrderStatusBlock() {
    return (
        <div className="order-status-box">
            <div className="order-card-title">
                <h5>ORDER STATUS</h5>
            </div>
            <div className="table-box">
                <div className="table-head text-center">
                    <div className="title-head">Invoice</div>
                    <div className="title-head">User</div>
                    <div className="title-head">Order date</div>
                    <div className="title-head">Amount</div>
                    <div className="title-head">Status</div>
                    <div className="title-head">Tracking Number</div>
                </div>
                <div className="table-body">
                    <div className="table-body-item text-center" style={{backgroundColor: '#F8F9FA'}}>
                        <div className="title-body">
                            <a href="/">Order #53431</a>
                        </div>
                        <div className="title-body">Steve N. Horton</div>
                        <div className="title-body" style={{color: '#ADB5BD'}}>Oct 22, 2014</div>
                        <div className="title-body">$45.00</div>
                        <div className="title-body">
                            <span style={{
                                background: '#36BEA6',
                                color: '#FFF',
                                display: 'inline-block',
                                padding: '1px 5px',
                                borderRadius: '5px',
                                fontSize: '12px'
                            }}>Paid</span>
                        </div>
                        <div className="title-body"> -</div>
                    </div>
                    <div className="table-body-item text-center">
                        <div className="title-body">
                            <a href="/">Order #53432</a>
                        </div>
                        <div className="title-body">Charles S Boyle</div>
                        <div className="title-body" style={{color: '#ADB5BD'}}>Oct 24, 2014</div>
                        <div className="title-body">$245.30</div>
                        <div className="title-body">
                            <span style={{
                                background: '#009EFB',
                                color: '#FFF',
                                display: 'inline-block',
                                padding: '1px 5px',
                                borderRadius: '5px',
                                fontSize: '12px'
                            }}>Shipped</span>
                        </div>
                        <div className="title-body">
                            <i className="fas fa-plane" style={{marginRight: '5px'}}> </i>
                            <span>CGX0089734531</span>
                        </div>
                    </div>
                    <div className="table-body-item text-center" style={{backgroundColor: '#F8F9FA'}}>
                        <div className="title-body">
                            <a href="/">Order #53433</a>
                        </div>
                        <div className="title-body">Lucy Doe</div>
                        <div className="title-body" style={{color: '#ADB5BD'}}>Oct 24, 2014</div>
                        <div className="title-body">$38.00</div>
                        <div className="title-body">
                            <span style={{
                                background: '#009EFB',
                                color: '#FFF',
                                display: 'inline-block',
                                padding: '1px 5px',
                                borderRadius: '5px',
                                fontSize: '12px'
                            }}>Shipped</span>
                        </div>
                        <div className="title-body">
                            <i className="fas fa-plane" style={{marginRight: '5px'}}> </i>
                            <span>CGX0089934571</span>
                        </div>
                    </div>
                    <div className="table-body-item text-center">
                        <div className="title-body">
                            <a href="/">Order #53434</a>
                        </div>
                        <div className="title-body">Teresa L. Doe</div>
                        <div className="title-body" style={{color: '#ADB5BD'}}>Oct 15, 2014</div>
                        <div className="title-body">$77.99</div>
                        <div className="title-body">
                            <span style={{
                                background: '#009EFB',
                                color: '#FFF',
                                display: 'inline-block',
                                padding: '1px 5px',
                                borderRadius: '5px',
                                fontSize: '12px'
                            }}>Shipped</span>
                        </div>
                        <div className="title-body">
                            <i className="fas fa-plane" style={{marginRight: '5px'}}> </i>
                            <span>CGX0089734574</span>
                        </div>
                    </div>
                    <div className="table-body-item text-center" style={{backgroundColor: '#F8F9FA'}}>
                        <div className="title-body">
                            <a href="/">Order #53435</a>
                        </div>
                        <div className="title-body">Teresa L. Doe</div>
                        <div className="title-body" style={{color: '#ADB5BD'}}>Oct 12, 2014</div>
                        <div className="title-body">$18.00</div>
                        <div className="title-body">
                            <span style={{
                                background: '#36BEA6',
                                color: '#FFF',
                                display: 'inline-block',
                                padding: '1px 5px',
                                borderRadius: '5px',
                                fontSize: '12px'
                            }}>Paid</span>
                        </div>
                        <div className="title-body"> -</div>
                    </div>
                    <div className="table-body-item text-center">
                        <div className="title-body">
                            <a href="/">Order #53437</a>
                        </div>
                        <div className="title-body">Charles S Boyle</div>
                        <div className="title-body" style={{color: '#ADB5BD'}}>Oct 17, 2014</div>
                        <div className="title-body">$658.00</div>
                        <div className="title-body">
                            <span style={{
                                background: '#F62D51',
                                color: '#FFF',
                                display: 'inline-block',
                                padding: '1px 5px',
                                borderRadius: '5px',
                                fontSize: '12px'
                            }}>Refunded</span>
                        </div>
                        <div className="title-body"> -</div>
                    </div>
                    <div className="table-body-item text-center" style={{backgroundColor: '#F8F9FA'}}>
                        <div className="title-body">
                            <a href="/">Order #536584</a>
                        </div>
                        <div className="title-body">Scott S. Calabrese</div>
                        <div className="title-body" style={{color: '#ADB5BD'}}>Oct 19, 2014</div>
                        <div className="title-body">$45.58</div>
                        <div className="title-body">
                            <span style={{
                                background: '#FFBC34',
                                color: '#FFF',
                                display: 'inline-block',
                                padding: '1px 5px',
                                borderRadius: '5px',
                                fontSize: '12px'
                            }}>Unpaid</span>
                        </div>
                        <div className="title-body"> -</div>
                    </div>
                </div>
            </div>
        </div>
    )
}