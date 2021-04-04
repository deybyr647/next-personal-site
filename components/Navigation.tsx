import { Container, Navbar, Nav, Image as BsImage } from 'react-bootstrap';

const Navigation = () => {
    return (
        <Navbar expand={"md"} variant={"dark"} className={"d-flex flex-column bg-dark"}>
            <Container className={"justify-content-center"}>
                <Navbar.Brand>
                    DR
                </Navbar.Brand>

                <Navbar.Toggle aria-controls={"nav"}/>
            </Container>

            <Navbar.Collapse id={"nav"}>
                <Nav className={"d-flex flex-column"}>
                    <Nav.Item className={"nav-link"}>
                        <a href={"https://deybyr647.com"}>Home</a>
                    </Nav.Item>

                    <Nav.Item className={"nav-link"}>
                        <a href={"https://deybyr647.com"}>About</a>
                    </Nav.Item>

                    <Nav.Item className={"nav-link"}>
                        <a href={"https://deybyr647.com"}>Portfolio</a>
                    </Nav.Item>

                    <Nav.Item className={"nav-link"}>
                        <a href={"https://deybyr647.com"}>Resume</a>
                    </Nav.Item>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    )
}

export default Navigation;