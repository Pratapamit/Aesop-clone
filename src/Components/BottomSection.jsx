import React from "react";

const arry=["Aesop Hollywood Road","Aesop New Town Plazza","Aesop K11 Musea"];
let a=arry[0];

function BottomSection() {

    return (
        <>
            <div className="container text-center bottomSection2">
            {a}
            <p className=" bottompara">‘It is not down in any map; true places never are.’<br /><b>Herman Melville</b></p>            
        </div>
        </>
    )
}

export default BottomSection;