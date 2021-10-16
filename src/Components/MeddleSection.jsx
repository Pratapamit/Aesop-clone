import React from "react";

let video='https://player.vimeo.com/external/525931930.hd.mp4?s=63966b7af23dd5eca091e6d77aeb8b6ce6d81635&profile_id=175';

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