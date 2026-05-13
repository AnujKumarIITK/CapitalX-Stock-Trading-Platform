import React from 'react';

function Education() {
    return ( 
        <div className="container mb-5">
            <div className="row mt-5 mb-5">

                <div className="col-5">
                    <img src="media/images/education.svg" alt="Education" style={{ width: "85%"}}/>
                </div>

                <div className="col-1"></div>

                <div className="col-6 mt-5 mb-5">

                    <h1 className="mb-3 text-muted fs-3">Free and open market education</h1>
                    <p>
                        Varsity, the largest online stock market education book in the world covering everything from the basics to advanced trading.
                    </p>
                    <a href="" style={{ textDecoration: "none" }}>
                        Varsity  &nbsp;
                        <i class="fa fa-long-arrow-right" aria-hidden="true"></i>
                    </a> <br /><br/>

                    <p>
                        TradingQ&A, the most active trading and investment community in India for all your market related queries.
                    </p>
                    <a href="" style={{ textDecoration: "none" }}>
                        TradingQ&A  &nbsp;
                        <i class="fa fa-long-arrow-right" aria-hidden="true"></i>
                    </a>
                    <br /><br/>

                </div>
            </div>
        </div>
    );
}

export default Education;




