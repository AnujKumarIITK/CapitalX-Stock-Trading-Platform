import React from 'react';
import { Link } from "react-router-dom";

function RightSection({  
    imageURL,
    productName, 
    productDescription, 
    learnMore, 
}) {
    return ( 
        <div className="container">
            <div className="row text-muted mt-5 mb-5">

                <div className="col-1"></div>

                <div className="col-4 p-5 mt-5">

                    <h2 className="mt-5">{productName}</h2>

                    <p style={{ lineHeight: "1.8", fontSize: "1.1rem" }}>{productDescription}</p>

                    <div>
                        <a href={learnMore} className="text-decoration-none">
                            Learn More <i class="fa fa-long-arrow-right" aria-hidden="true"></i>
                        </a>
                    </div>

                    &nbsp; &nbsp; &nbsp;

                </div>

                <div className="col-1"></div>

                <div className="col-5">
                    <Link><img src={imageURL}/></Link>
                </div>


            </div>

        </div>
    );
}

export default RightSection;




