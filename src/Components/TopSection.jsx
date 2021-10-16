import React from "react";
import video from './media.mp4';

let img = "https://images.ctfassets.net/u1nb1km7t5q7/1CT25CcvFle4zBVIBZQ7U7/06907ca7f36f8521dc6221359570968c/Aesop_PSAOIS_2021_Web_Homepage_Primary_Product_Overlay_Desktop_Tablet_640x640px.png";

function TopSection() {
    return (
        <>
            <div className="topSection">
                <div className="row">
                    <div className="col-sm-3 col-md-4 col-lg-2 AesopLink">
                        <a href="#">Aesop</a>
                    </div>
                    <div className="col-sm-3 offset-sm-2 col-md-4 offset-md-0 col-lg-4 middleDiv">
                        <p>For devotees of the metropolis</p>
                        <h2>Introducing Parsley Seed Anti-Oxidant Intense Serum</h2>
                        <p>Potent fortification with a weightless texture: a barely-there film to guard against airborne particulates.</p>
                        <button type="button" class="btn btn-outline-dark middleSectionBtn">Discover the formulation</button>
                    </div>
                    <div className="col-sm-3 col-md-4 col-lg-6 amit">
                      <video src={video} autoPlay loop className="video"></video>                        
                        <img src={img} alt="Image" className="topSectionImg"/>
                    </div>
                </div>
            </div>

        </>
    )
}
export default TopSection;