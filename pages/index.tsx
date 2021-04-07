import { Container, Row, Col, Image, Jumbotron } from 'react-bootstrap';
import styles from '../styles/Landing.module.css'

import Metadata from '../components/Metadata';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

const LandingContent = () => {
    return (
        <Container fluid>
            <Row className={"p-0"}>
                <Col xs={2} sm={1} className={"p-0"}>
                    <Navigation/>
                </Col>

                <Col className={"p-0"}>
                    <Container fluid>
                        <Row className={"d-flex flex-column"}>
                            <Col>
                                <Jumbotron className={"d-flex flex-column align-items-center h-100 bg-transparent"}>
                                    <Image src={"/images/IMG_0013.jpg"} className={"w-50"} roundedCircle/>
                                    <Container className={"text-center mt-4"}>
                                        <h1>Deyby Rodriguez</h1>
                                        <h5>Web Developer</h5>
                                    </Container>

                                    <p className={"mt-2 px-3 text-center"}>
                                        Welcome to my website! <br/>
                                        Feel free to take a look around to
                                        learn more about myself, what I'm into, and
                                        what I do!
                                    </p>
                                </Jumbotron>
                            </Col>

                            <Col>
                                <Row>
                                    <Col>
                                        <Jumbotron>
                                            <h1>Hello World</h1>
                                        </Jumbotron>
                                    </Col>

                                    <Col>
                                        <Jumbotron>
                                            <h1>Hello World</h1>
                                        </Jumbotron>
                                    </Col>
                                </Row>
                            </Col>
                        </Row>
                    </Container>
                </Col>
            </Row>
        </Container>
    )
}

const LandingPage = () => {
    return (
        <>
            <Metadata title={"Deyby Rodriguez"}/>
            <LandingContent/>
            <Footer/>
        </>
    )
}

export default LandingPage;