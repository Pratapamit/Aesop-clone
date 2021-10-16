import React from "react";
import video from './media2.mp4';

function meddleSection() {
    return (
        <>
        <div className="container bottomSection">
                <div className="row">
                <div className="col-sm-5 col-md-6 col-lg-6 middleDiv">
                        <p>The Athenaeum</p>
                        <h2>The science of skin care</h2>
                        <p>Our pocket-sized biology lesson is a speedy way to get to know your skin, pass the time between bus stops, or learn new Scrabble words.</p>
                        <button type="button" class="btn btn-outline-dark middleSectionBtn">Read more</button>
                    </div>
                    <div className="col-sm-5 col-md-6 col-lg-6">
                        <video src={video} autoPlay loop className="video"></video>                        
                    </div>
                </div>
            </div>
        </>
    )
}

export default meddleSection;