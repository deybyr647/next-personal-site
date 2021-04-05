import { Navbar, Nav } from 'react-bootstrap';

const Footer = () => (
    <Navbar variant={"dark"} className={"bg-dark sticky-bottom justify-content-center"}>
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