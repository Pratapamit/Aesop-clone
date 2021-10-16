import React from "react";

const arry = ["Aesop Hollywood Road", "Aesop New Town Plazza", "Aesop K11 Musea"];

function Footer() {
    return (
        <>
            <div className="row bg-dark footerDiv">
                <div className="col-sm-3 col-md-3 col-lg-5">
                    <p className="emailPara">Email address<i class="fa fa-long-arrow-right" aria-hidden="true"></i></p>
                    <input type="checkbox" id="checkbox" />
                    <label htmlFor="checkbox">Subscribe to receive communications from Aesop about our products and services. By subscribing, you confirm you have read and accept our</label>
                    <a href="#">privacy policy</a>
                </div>
                <div className="col-sm-3 col-md-3 col-lg-2">
                    <p>Orders and support</p>
                    <ol>
                        <li>Contact us</li>
                        <li>FAQs</li>
                        <li>Shipping</li>
                        <li>Returns</li>
                        <li>Terms and conditions</li>
                    </ol>
                </div>
                <div className="col-sm-3 col-md-3 col-lg-2">
                    <p>Services</p>
                    <ol>
                        <li>Live assistance</li>
                        <li>Conporate gifts</li>
                        <li>Facial appointments</li>
                    </ol>
                </div>
                <div className="col-sm-3 col-md-3 col-lg-2">
                    <p>Orders and support</p>
                    <ol>
                        <li>Shipping: Hong Kong (S.A.R)</li>
                        <li>Language: English</li>
                    </ol>
                </div>
            </div>

            <div className="row bg-dark footerDiv">
                <div className="col-sm-3 col-md-4 col-lg-5">
                    <p>Sustainability</p>
                    <span>All Aesop products are vegan, and we do not test our formulations or ingredients on animals. We are Leaping Bunny approved and a Certified B Corporation. Learn more</span>
                </div>
                <div className="col-sm-3 col-md-4 col-lg-2">
                    <p>About</p>
                    <ol>
                        <li>Our story</li>
                        <li>Foundation</li>
                        <li>Careers</li>
                        <li>Privacy policy</li>
                        <li>Accessibility</li>
                    </ol>
                </div>
                <div className="col-sm-3 col-md-4 col-lg-2">
                    <p>Social media</p>
                    <ol>
                        <li>Instagram</li>
                        <li>Twitter</li>
                        <li>LinkedIn</li>
                        <li>WeChat</li>
                        <li>Weibo</li>
                    </ol>
                </div>
            </div>
            <p className="bg-dark copyright">© Aesop</p>
        </>
    )
}
export default Footer;