import React from "react";
import img from './divImg1.webp';

function meddleSection2() {
    return (
        <>
            <div className="container bottomSection">
                <div className="row">
                <div className="col-sm-5 col-md-6 col-lg-6 middleDiv">
                        <p>The Athenaeum</p>
                        <h2>The science of skin care</h2>
                        <p>Our pocket-sized biology lesson is a speedy way to get to know your skin, pass the time between bus stops, or learn new Scrabble words.</p>
                        <button type="button" class="btn btn-outline-dark middleSectionBtn">Discover the range</button>
                    </div>
                    <div className="col-sm-5 col-md-6 col-lg-6">
                        <img src={img} alt="Img" className="video"/>
                    </div>
                </div>
            </div>
        </>
    )
}

export default meddleSection2;