import { Navbar, Nav } from "react-bootstrap";
import styles from "../styles/etc.module.css";

const Footer = () => (
    <Navbar variant={"dark"} className={`sticky-bottom justify-content-center ${ styles.footer }`}>
        <Nav>
            <Nav.Link
                href={"https://deybyr647.com"}
                target={"_blank"}
                rel={"noopener noreferrer"}
            >
                &copy; 2021 | Deyby Rodriguez
            </Nav.Link>
        </Nav>
    </Navbar>
)

export default Footer;