import { Container, Row, Col, Image, Jumbotron } from 'react-bootstrap';
import styles from '../styles/Landing.module.css'

import Metadata from '../components/Metadata';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

const LandingContent = () => {
    return (
        <Container fluid>
            <Row>
                <Col xs={2} sm={1} className={"p-0"}>
                    <Navigation/>
                </Col>

                <Col className={"p-0"}>
                    <Jumbotron className={"d-flex flex-column align-items-center h-100"}>
                        <Image src={"/images/IMG_6754.jpg"} className={"w-50"} roundedCircle/>
                        <div className={"text-center mt-3"}>
                            <h1>Deyby Rodriguez</h1>
                            <p>Web Developer</p>
                        </div>
                    </Jumbotron>
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