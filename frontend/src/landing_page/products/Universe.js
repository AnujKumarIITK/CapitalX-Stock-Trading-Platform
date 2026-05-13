import React from 'react';

function Universe() {
    return ( 
        <div className="container">

            <div className="row text-center text-muted">
                <h1 className="mb-4">The Zerodha Universe</h1>
                <p>Extend your trading and investment experience even further with our partner platforms</p>
            </div>

            <div className="row text-center mt-5">

                <div className="col-1"></div>

                <div className="col-3 text-center p-5">
                    <a href=""><img style={{width: "70%"}} src="/media/images/zerodhaFundhouse.png" alt="Zerodha Fundhouse"/></a>
                    <p className="text-muted mt-3" style={{fontSize: "0.8rem"}}>
                        Our asset management venture
                        that is creating simple and transparent index
                        funds to help you save for your goals.
                    </p>
                </div>

                <div className="col-4 text-center p-5">
                    <a href=""><img style={{width: "70%"}} src="/media/images/sensibullLogo.svg" alt="Sensibull"/></a>
                    <p className="text-muted mt-3" style={{fontSize: "0.8rem"}}>
                        Options trading platform that lets you
                        create strategies, analyze positions, and examine
                        data points like open interest, FII/DII, and more.

                    </p>
                </div>

                <div className="col-3 text-center p-5">
                    <a href=""><img style={{width: "50%"}} src="/media/images/tijori.svg" alt="Tijori"/></a>
                    <p className="text-muted mt-3" style={{fontSize: "0.8rem"}}>
                        Investment research platform
                        that offers detailed insights on stocks,
                        sectors, supply chains, and more.
                    </p>
                </div>

                <div className="col-1"></div>

            </div>

            <div className="row text-center">

                <div className="col-1"></div>

                <div className="col-3 text-center p-5">
                    <a href=""><img style={{width: "60%"}} src="/media/images/streakLogo.png" alt="Streak Logo"/></a>
                    <p className="text-muted mt-3" style={{fontSize: "0.8rem"}}>
                        Systematic trading platform
                        that allows you to create and backtest
                        strategies without coding.
                    </p>
                </div>

                <div className="col-4 text-center p-5">
                    <a href=""><img style={{width: "55%"}} src="/media/images/smallcaseLogo.png" alt="Smallcase Logo"/></a>
                    <p className="text-muted mt-3" style={{fontSize: "0.8rem"}}>
                        Thematic investing platform
                        that helps you invest in diversified
                        baskets of stocks on ETFs.

                    </p>
                </div>

                <div className="col-3 text-center p-5">
                    <a href=""><img style={{width: "50%"}} src="/media/images/dittoLogo.png" alt="Ditto Logo"/></a>
                    <p className="text-muted mt-3" style={{fontSize: "0.8rem"}}>
                        Personalized advice on life
                        and health insurance. No spam
                        and no mis-selling.
                        Sign up for free
                    </p>
                </div>

                <div className="col-1"></div>

            </div>

        </div>

    );
}

export default Universe;




