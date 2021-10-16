import React from "react";

function Header() {
    return (
        <>
            <div className="bg-dark text-center topTitle" data-bs-toggle="offcanvas" data-bs-target="#offcanvasWithBothOptions" aria-controls="offcanvasWithBothOptions">
                Enjoy complimentary carbon neutral shipping on orders over $400 ➕
            </div>
            <nav className="navbar navbar-expand-lg navbar-light headingBg">
                <div className="container-fluid">
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav headingList">
                            <li className="nav-item">
                                <a className="nav-link active" aria-current="page" href="#">Shop</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">Read</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">Stores</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">Search</a>
                            </li>
                        </ul>
                    </div>
                    <form class="d-flex">
                        <ul className="navbar-nav headingList">
                            <a className="nav-link" href="#">Login</a>
                            <a className="nav-link" href="#">Cart</a>
                        </ul>
                    </form>
                </div>
            </nav>

            <div className="offcanvas offcanvas-start sidePanel" data-bs-scroll="true" tabindex="-1" id="offcanvasWithBothOptions" aria-labelledby="offcanvasWithBothOptionsLabel">
                <div className="offcanvas-header">                  
                <h5 class="offcanvas-title" id="offcanvasWithBothOptionsLabel"></h5>  
                    <button type="button" className="btn-close text-reset" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                </div>
                <div className="offcanvas-body">
                <p className="shippingPara">Shipping fees and delivery times</p>
                    <p>Crown Logistics (Hong Kong)</p>
                    <div className="container">
                        <div class="row row2">
                            <div className="col-6 col-sm-4">Orders $400 and over</div>
                            <div className="col-6 col-sm-4">Complimentary</div>
                        </div>
                        <div className="row row2">
                            <div className="col-6 col-sm-4">Orders below $400</div>
                            <div className="col-6 col-sm-4">$40</div>
                        </div>
                        <div className="row row2 row3">
                            <div className="col-6 col-sm-4">All orders</div>
                            <div className="col-6 col-sm-4">2-3 business days</div>
                        </div>
                    </div>
                    <p>Carbon neutral shipping</p>
                    <p className="shippingPara2">We offset operational emissions to ensure the delivery of every order is carbon neutral.</p>
                </div>
            </div>
        </>
    )
}
export default Header;