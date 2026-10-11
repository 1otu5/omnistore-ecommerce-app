import "./footer.css"

function Footer() {
    return (
        <footer className="footer-content">
            <img className="blue-circle" src="/assets/pictures/category/circles/blue-circle.png" alt="" />

            <div className="footer-columns">
                <div className="footer-column">
                    <p className="footer-brand">MegaMart</p>
                    <h2 className="footer-title">Contact Us</h2>

                    <ul className="footer-contact-list">
                        <li className="footer-contact-item">
                            <img className="footer-icon" src="/assets/pictures/category/icons/whats-app-outlined.png" alt="" />
                            <div className="footer-contact-text">
                                <p className="footer-contact-label">Whats App</p>
                                <p className="footer-contact-value">+1 202-918-2132</p>
                            </div>
                        </li>

                        <li className="footer-contact-item">
                            <img className="footer-icon" src="/assets/pictures/category/icons/call.png" alt="" />
                            <div className="footer-contact-text">
                                <p className="footer-contact-label">Call Us</p>
                                <p className="footer-contact-value">+1 202-918-2132</p>
                            </div>
                        </li>
                    </ul>

                    <p className="footer-subtitle">Download App</p>

                    <div className="footer-app-links">
                        <a href="#" className="footer-app-link">
                            <img src="/assets/pictures/category/icons/app-store.png" alt="" />
                        </a>
                        <a href="#" className="footer-app-link">
                            <img src="/assets/pictures/category/icons/google-play.png" alt="" />
                        </a>
                    </div>
                </div>

                <div>
                    <h2 className="footer-title">Most Popular Categories</h2>
                    <ul className="footer-list">
                        <li>Staples</li>
                        <li>Beverages</li>
                        <li>Personal Care</li>
                        <li>Home Care</li>
                        <li>Baby Care</li>
                        <li>Vegetables & Fruits</li>
                        <li>Snacks & Foods</li>
                        <li>Dairy & Bakery</li>
                    </ul>
                </div>

                <div>
                    <h2 className="footer-title">Customer Services</h2>
                    <ul className="footer-list">
                        <li>About Us</li>
                        <li>Terms & Conditions</li>
                        <li>FAQ</li>
                        <li>Privacy Policy</li>
                        <li>E-waste Policy</li>
                        <li>Cancellation & Return Policy</li>
                    </ul>
                </div>
            </div>

            <div className="footer-bottom">
                <p>© 2022 All rights reserved. Reliance Retail Ltd.</p>
            </div>
        </footer>
    )
}


export default Footer