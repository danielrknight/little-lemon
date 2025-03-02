function Footer() {
    return(
        <footer className="footer">
            <div>
                <img src="../logomark.png" />
            </div>
            <div>
                <h4>Doormat Navigation</h4>
                <ul className="footer-list">
                    <li><a className="footer-link" href="/">Home</a></li>
                    <li><a className="footer-link" href="/">About</a></li>
                    <li><a className="footer-link" href="/">Menu</a></li>
                    <li><a className="footer-link" href="/">Reservations</a></li>
                    <li><a className="footer-link" href="/">Deliveries</a></li>
                    <li><a className="footer-link" href="/">Login</a></li>
                </ul>
            </div>
            <div>
                <h4>Contact us</h4>
                <ul className="footer-list">
                    <li>Address</li>
                    <li>Phone number</li>
                    <li>Email address</li>

                </ul>
            </div>
            <div>
                <h4>Social media</h4>
                <ul className="footer-list">
                    <li>Address</li>
                    <li>Phone number</li>
                    <li>Email address</li>
                </ul>
            </div>
        </footer>
    )
}

export default Footer;