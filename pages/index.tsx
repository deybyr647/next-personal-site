import Head from 'next/head'

import { Container, Row, Col, Image, Jumbotron } from 'react-bootstrap';
import styles from '../styles/Landing.module.css'

import Metadata from '../components/Metadata';
import Navigation from '../components/Navigation';

const LandingContent = () => {
    return (
        <Container fluid>
            <Row>
                <Col className={"p-0"}>
                    <Jumbotron>
                        <h1>Hello World!</h1>
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
            <Row>
                <Col sm={2} md={2} lg={2} xl={2} className={"d-flex flex-column p-0"}>
                    <Navigation/>
                </Col>

                <Col className={"p-0"}>
                    <LandingContent/>
                </Col>
            </Row>
        </>
    )
}

export default LandingPage;