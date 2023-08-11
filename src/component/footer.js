function Footer(){
    return(
      <>
        <div className="footerContainer">
                <div>
                    <h1>Jobs Inn</h1>
                    <div className="list">
                        <a href="#">About Us</a>
                        <a href="#">Contact Us</a>
                        <a href="#">Privacy</a>
                        <a href="#">Terms and Condition</a>
                    </div>
                </div>
                <div>
                    <h1>Social Media</h1>
                    <div className="list">
                        <a href="https://www.instagram.com/" target="_blank">Instagram</a>
                        <a href="https://twitter.com/" target="_blank">Twitter</a>
                        <a href="https://www.facebook.com/" target="_blank">Facebook</a>
                    </div>
                </div>
                <div>
                    <h1>Office Address</h1>
                    <p>
                        London Office: 
                        <br />
                        50 Bank Street, Canary wharf, London E14 5NR.
                        <br />
                        Telephone: 0208 800 5000
                    </p>
                    <p>New York Office:
                    <br />
                     12345 Downtown Street, NY 50102.
                    <br />
                     Telephone: +1(516) 234 56789
                     </p>
                </div>

        </div>
       
      </>
    )
}

export default Footer;