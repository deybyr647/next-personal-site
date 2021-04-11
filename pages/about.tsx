import { Container, Row, Col, Image, Jumbotron } from 'react-bootstrap';

import Metadata from '../components/Metadata';
import Navigation from "../components/Navigation";
import Footer from "../components/Footer";

const AboutContent = () => {
    return (
        <Container fluid>
            <Row className={"p-0"}>
                <Col xs={2} sm={1} className={"p-0"}>
                    <Navigation/>
                </Col>

                <Col className={"p-0"}>
                    <Container fluid>
                        <Row>
                            <Col>
                                <Jumbotron>
                                    <h1>About Page</h1>
                                </Jumbotron>
                            </Col>

                            <Col md={12} lg={4} xl={6} className="mb-4 order-first order-lg-0">
                                <Jumbotron>
                                    <h1>About Page 1</h1>
                                </Jumbotron>
                            </Col>

                            <Col>
                                <Jumbotron>
                                    <h1>About Page 2</h1>
                                </Jumbotron>
                            </Col>
                        </Row>
                    </Container>

                    <Footer/>
                </Col>
            </Row>
        </Container>
    )
}

const AboutPage = () => {
    return (
        <>
            <Metadata title={"About"}/>
            <AboutContent/>
        </>
    )
}

export default AboutPage;