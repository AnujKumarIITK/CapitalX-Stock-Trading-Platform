import React from 'react';

function Hero() {
    return ( 
        <div className="container">

            <div className="row p-5 mt-5 mb-5 text-center text-muted border-bottom">
                <h2>Charges</h2>
                <br /> <br />
                <h4 style={{fontWeight: "lighter"}}>List of all charges and taxes</h4>
            </div>

            <div className="row p-5 mt-5 text-center" style={{ lineHeight: "1.8", fontSize: "1.1rem" }}>

                <div className="col-4">
                    <img src="/media/images/pricing0.svg" alt="Pricing 0" style={{width: "65%"}}/>
                    <br /> <br />
                    <h3>Free equity delivery</h3>
                    <br />
                    <p className="text-muted">All equity delivery investments (NSE, BSE), are absolutely free — ₹ 0 brokerage.</p>
                </div>

                <div className="col-4">
                    <img src="/media/images/intradayTrades.svg" alt="Intraday Trades" style={{width: "65%"}}/>
                    <br /> <br />
                    <h3>Intraday and F&O trades</h3>
                    <br />
                    <p className="text-muted">
                        Flat ₹ 20 or 0.03% (whichever is lower) per executed order on intraday trades across equity, currency, and commodity trades. Flat ₹20 on all option trades.
                    </p>

                </div>

                <div className="col-4">
                    <img src="/media/images/pricing0.svg" alt="Pricing 0" style={{width: "65%"}}/>
                    <br /> <br />
                    <h3>Free direct MF</h3>
                    <br />
                    <p className="text-muted">All direct mutual fund investments are absolutely free — ₹ 0 commissions & DP charges.</p>

                </div>

            </div>
            
        </div>
    );
}

export default Hero;





