import { Navbar, Nav, Image as BsImage } from 'react-bootstrap';

const Navigation = () => {
    return (
        <Navbar expand={"md"} variant={"dark"} className={"bg-dark d-flex flex-column h-100"}>
            <Navbar.Brand>DR</Navbar.Brand>

            <Nav className={"d-flex text-center d-flex flex-column"}>
                <Nav.Link href={"https://deybyr647.com"}>
                    Home
                </Nav.Link>

                <Nav.Link href={"https://deybyr647.com"}>
                    About
                </Nav.Link>

                <Nav.Link href={"https://deybyr647.com"}>
                    Resume
                </Nav.Link>

                <Nav.Link href={"https://deybyr647.com"}>
                    Projects
                </Nav.Link>
            </Nav>
        </Navbar>
    )
}

export default Navigation;