import React from 'react';

function Brokerage() {
    return ( 
        <div class="container">

            <div className="row p-5 mt-5 border-top">

                <div className="col-8 p-4">

                    <a href="" className="text-decoration-none">
                        <h4 className="mb-5 text-center">Brokerage Calculator</h4>
                    </a>

                    <ul style={{ lineHeight: "2.5", fontSize: "0.9rem" }} className="text-muted">
                        <li>
                            Call & Trade and RMS auto-squareoff: Additional charges of ₹50+ GST per order.
                        </li>
                        <li>
                            Digital contract notes will be sent via e-mail
                        </li>
                        <li>
                            Physical copies of contract notes, if required, shall be charged 20 per contract note. Courier charges apply.
                        </li>
                        <li>
                            For NRI account (non-PIS), 0.5% or ₹100 per executed order for equity (whichever is lower).
                        </li>
                        <li>
                            For NRI account (PIS), 0.5% or ₹200 per executed order for equity (whichever is lower).
                        </li>
                        <li>
                            If the account is in debit balance, any order placed will be charged 240 per executed order instead of 220 per executed order.
                        </li>
                    </ul>

                </div>

                <div className="col-4 p-4 text-center">
                    <a href="" className="text-decoration-none">
                        <h4>List of Charges</h4>
                    </a>
                </div>

            </div>

        </div>
    );
}

export default Brokerage;




