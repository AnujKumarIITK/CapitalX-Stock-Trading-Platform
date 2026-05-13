import React from 'react';

function Hero() {
    return ( 
        <section className="container-fluid p-5" id="supportHero">

            <div className="p-1 mt-2" id="supportWrapper">
                <h4>Support Portal</h4>
                <p><a href="" style={{ color: 'white' }}>Track Tickets</a></p>
            </div>

            <div className="row p-5">
                
                <div className="col-1"></div>

                <div className="col-5">

                    <h3>Search for an answer or browse help topics to create a ticket</h3>

                    <input 
                    placeholder="Eg: how do i activate F&O, why is my order getting rejected..." 
                    className="p-3 mt-3 mb-3" 
                    style={{height: '50px', width: '85%', borderRadius: '5px', border: '1px solid #ccc'}}
                    />

                    <br /> <br />

                    <a href="" style={{ fontSize: '15px' }}>Track account opening</a> &nbsp; &nbsp;
                    <a href="" style={{ fontSize: '15px' }}>Track segment activation</a> &nbsp; &nbsp; &nbsp;
                    <a href="" style={{ fontSize: '15px' }}>Intraday.margins</a> &nbsp; &nbsp; &nbsp;
                    <a href="" style={{ fontSize: '15px' }}>Kite user manual</a>

                </div>

                <div className="col-1"></div>

                <div className="col-4">

                    <h3>Featured</h3>
                    <br />

                    <ol>
                        <li>
                            <a href="" style={{ fontSize: '15px' }} className="p-4">Current Takeovers and Delisting - January 2024</a>
                        </li>
                        <br />
                        <li>
                            <a href="" style={{ fontSize: '15px' }} className="p-4">Latest Intraday leverages-MIS & CO</a>
                        </li>
                    </ol>
                    
                </div>

                <div className="col-1"></div>
            </div>
            
        </section>
    );
}

export default Hero;



