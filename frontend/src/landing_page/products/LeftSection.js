import React from 'react';
import { Link } from "react-router-dom";

function LeftSection({
    imageURL,
    productName, 
    productDescription, 
    tryDemo, 
    learnMore, 
    googlePlay, 
    appStore
}) {
    return ( 
        <div className="container">
            <div className="row text-muted">

                <div className="col-1"></div>

                <div className="col-4 p-3">
                    <Link><img src={imageURL}/></Link>
                </div>

                <div className="col-2"></div>

                <div className="col-4 p-5">

                    <h2>{productName}</h2>

                    <p style={{ lineHeight: "1.8", fontSize: "1.1rem" }}>{productDescription}</p>

                    <div>
                        <a href={tryDemo} className="text-decoration-none">
                            Try Demo <i class="fa fa-long-arrow-right" aria-hidden="true"></i>
                        </a> &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
                        <a href={learnMore} className="text-decoration-none">
                            Learn More <i class="fa fa-long-arrow-right" aria-hidden="true"></i>
                        </a>
                    </div>

                    &nbsp; &nbsp; &nbsp;

                    <div>
                        <a href={googlePlay}><img src="media/images/googlePlayBadge.svg" alt="Google Play Badge" style={{width: "40%"}}/></a>
                        &nbsp; &nbsp; &nbsp;
                        <a href={appStore}><img src="media/images/appstoreBadge.svg" alt="App Store Badge" style={{width: "40%"}} /></a>
                    </div>

                </div>

                <div className="col-1"></div>

            </div>

        </div>
    );
}

export default LeftSection;

