import React from "react";
let img1 = 'https://www.aesop.com/u1nb1km7t5q7/40xVxq4tBdXpyJLXVTQPvO/aa8ef7a4cca7a713e12b58f1ab8cc6ea/Aesop-HK-K11-Hero-Bleed-Desktop-2880x1620px.jpg';
let img2 = 'https://www.aesop.com/u1nb1km7t5q7/DqJCGx3tPeDqODieHw5uA/48f50fbd1758ee27990a600c131bd2ce/Aesop-HK-New-Town-Plaza-Hero-Bleed-Desktop-2880x1620px.jpg';
let img3 = 'https://www.aesop.com/u1nb1km7t5q7/3b6KRiDt3QpNut8LoYGgB9/1d62a7373daa8a6ba4dff6ea300b891e/Aesop-HK-Hollywood-Road-Hero-Desktop-2880x1620.jpg';
function meddleSection3() {
    return (
        <>
            <div className="container bottomSection">
                <div className="row">
                    <div className="col-sm-5 col-md-6 col-lg-6 middleDiv">
                        <p>The Athenaeum</p>
                        <h2>The science of skin care</h2>
                        <p>Our pocket-sized biology lesson is a speedy way to get to know your skin, pass the time between bus stops, or learn new Scrabble words.</p>
                        <button type="button" class="btn btn-outline-dark middleSectionBtn">Find a nearby store</button>
                    </div>
                    <div className="col-sm-5 col-md-6 col-lg-6">
                        <div className="carousel"
                            data-flickity='{ "imagesLoaded": false, "percentPosition": true }'>
                            <img src={img1} alt="Image1" />
                            <img src={img2} alt="Image2" />
                            <img src={img3} alt="Image3" />
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default meddleSection3;