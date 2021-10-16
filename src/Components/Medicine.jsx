import React from "react";

let img1 = 'https://www.aesop.com/u1nb1km7t5q7/LL8pUKUiuq1n8mKKpLdbb/b41e1d77b6dfeca7632d6677ee232fcb/Aesop-SkinParsley-Seed-Facial-Cleanser-100mL-large.png';
let img2 = 'https://www.aesop.com/u1nb1km7t5q7/5tohXrYPG52gI48cP9TbJR/c8fd45a7665745c81dffaf5c6b5895b2/Large-PNG-Aesop-Skin-Parsley-Seed-Anti-Oxidant-Facial-Toner-100mL-large.png';
let img3 = 'https://www.aesop.com/u1nb1km7t5q7/1BNbhQXF8YaNdESg5DDhZS/a41f260793399f1327d1782e213a3e81/Aesop_Skin_Parsley_Seed_Anti-Oxidant_Facial_Treatment_15mL_Web_Large_684x668px.png';
let img4 = 'https://www.aesop.com/u1nb1km7t5q7/2GJYUHiIHpEWKKoOt3VwZw/6a84b2a1d1b03cd7d66c310f5a579cd5/Aesop-Skin-Parsley-Seed-Anti-Oxidant-Eye-Serum-15mL-Large-684x668px.png';
let img5 = 'https://www.aesop.com/u1nb1km7t5q7/6MVPEkEMiRdQqfdFObezbL/5afc1ad73e9e0378ffa77add0af2edb8/Aesop-Skin-Parsley-Seed-Anti-Oxidant-Hydrator-60mL-large.png';
let img6 = 'https://www.aesop.com/u1nb1km7t5q7/18oCIrIJkaPhgw23dVa6xz/29244f678a3fc2b0308a0edac55b2171/Aesop_Skin_Parsley_Seed_Anti-Oxidant_Intense_Serum_60mL_Web_Large_684x668px.png';
let img7 = 'https://www.aesop.com/u1nb1km7t5q7/3jAkFhR5VOlYeWcODXQZlK/62d0ed98e029b7e6357eef16d33ad1ca/Aesop-Body-Petitgrain-Reviving-Body-Gel-150mL-large.png';

function Medicine() {
    return (
        <>
            <div className="carousel"
                data-flickity='{ "imagesLoaded": true, "percentPosition": false }'>
                <img src={img1} alt="Image1" />
                <img src={img2} alt="Image2" />
                <img src={img3} alt="Image3" />
                <img src={img4} alt="Image4" />
                <img src={img5} alt="Image5" />
                <img src={img6} alt="Image6" />
                <img src={img7} alt="Image7" />
            </div>
        </>
    )
}
export default Medicine;