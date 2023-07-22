import { FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa';

const Footer = () => {
    return (
        <footer id="footer" className="footer">
            <div className="footer-contact-info">
                <h1 className="footer-heading">Connect With Me</h1>
                <p className="footer-contact-access">Email: souryabhattacharyav3@gmail.com</p>
                <p className="footer-contact-access">Mobile: +91 97403 75575</p>
                <p><a href="https://www.freepik.com/free-vector/cute-cat-working-laptop-cartoon-icon-illustration_13149230.htm#query=cat%20laptop&position=3&from_view=search&track=ais">Image by catalyststuff</a> on Freepik</p>
            </div>
            <div>
                <h1>Social Links</h1>
                <div className="social-icons">
                    <a href="https://www.educative.io/"><i><FaFacebook /></i></a>
                    <a href="https://www.educative.io/"><i><FaInstagram /></i></a>
                    <a href="https://www.educative.io/"><i><FaTwitter /></i></a>
                </div>
            </div>
        </footer>
    )
}

export default Footer;