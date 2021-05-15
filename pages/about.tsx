import { Container, Row, Col, Image, Jumbotron } from 'react-bootstrap';

import Metadata from '../components/Metadata';
import Navigation from "../components/Navigation";
import Footer from "../components/Footer";

import CollapsibleCard from "../components/about/CollapsibleCard";

const AboutContent = () => {
    return (
        <Container fluid>
            <Row className={"p-0"}>
                <Col xs={2} sm={1} className={"p-0"}>
                    <Navigation/>
                </Col>

                <Col xs={10} sm={11} className={"p-0 mt-4"}>
                    <Container fluid>
                        <Row>
                            <Col>
                                <Row className={"d-flex flex-column align-items-center"}>
                                    <Col>
                                        <Jumbotron className={"text-center"}>
                                            <h3>Hobbies</h3>
                                        </Jumbotron>
                                    </Col>

                                    <Col>
                                        <CollapsibleCard
                                            title={"Investing"}
                                            imgSrc={"/images/about/stocks.webp"}
                                            imgDesc={"Stock Graph"}
                                        >
                                            Finance, along with business, has always been an interest of mine.
                                            I love to experiment with what the market has to offer, like stocks
                                            from some of my favorite companies and cryptocurrency. For the most part,
                                            I trade stocks with Robinhood.
                                        </CollapsibleCard>

                                        <CollapsibleCard
                                            title={"Learning & Teaching"}
                                            imgSrc={"/images/about/rocket.webp"}
                                            imgDesc={"Learning Art"}
                                        >
                                            I truly love to learn and can happily say I've learnt most of what
                                            I know through self teaching and experimentation. I also enjoy sharing
                                            my knowledge with my friends, as I end up understanding what I'm teaching
                                            on a deeper level.
                                        </CollapsibleCard>

                                        <CollapsibleCard
                                            title={"Reading"}
                                            imgSrc={"/images/about/reading.webp"}
                                            imgDesc={"Reading Book"}
                                        >
                                            I enjoy curling up with a good book when the rare opportunity arises.
                                            Some of my favorites are <i>Frankenstein</i> and books from the
                                            <i> Harry Potter</i> series. I also love to read programming books
                                            to pick up a new skill.
                                        </CollapsibleCard>

                                        <CollapsibleCard
                                            title={"Programming"}
                                            imgSrc={"/images/about/programming.webp"}
                                            imgDesc={"Programming"}
                                        >
                                            Of course, programming is also one of my favorite things to do. I
                                            tend to find myself at peace when I'm writing code. Even when I find
                                            myself stuck in a roadblock, I still enjoy finding my way around it.
                                        </CollapsibleCard>
                                    </Col>

                                    <Col>
                                        <Jumbotron className={"text-center"}>
                                            <h3>Meaningful Experiences</h3>
                                        </Jumbotron>
                                    </Col>

                                    <Col>
                                        <CollapsibleCard
                                            title={"Google Code Next"}
                                            imgSrc={"/images/about/codenext.webp"}
                                            imgDesc={"Code Next Lab NYC"}
                                            link={"https://codenext.withgoogle.com"}
                                        >
                                            Code Next is a program by Google that is designed to have high school
                                            students break into the field of computer science.
                                            I joined in the Fall of 2019, and can say this has been my most
                                            meaningful and influential experience. Joining has helped me grow as a person,
                                            and has helped me acquire valuable industry connections and knowledge.
                                            Participating in Code Next has even connected me to other great opportunities,
                                            like All Star Code. I only wish I had known of the program's existence sooner, as 2021 will be my last
                                            year within the program.
                                        </CollapsibleCard>

                                        <CollapsibleCard
                                            title={"All Star Code"}
                                            imgSrc={"/images/about/asc.webp"}
                                            imgDesc={"All Star Code logo"}
                                            link={"https://allstarcode.org"}
                                        >
                                            Like Code Next, All Star Code specializes in getting male high school students
                                            up to speed with computer science and entrepreneurship. I took part in All Star Code's
                                            Summer Intensive in the summer of 2020. I'm very grateful for having taken part in All
                                            Star Code, as this opportunity helped me find my niche within computer science, which is web development.
                                            Since then, I have remained active as an alumni, taking part in hackathons, conferences with
                                            important faces in tech, and even employment opportunities at All Star Code.
                                        </CollapsibleCard>
                                    </Col>
                                </Row>
                            </Col>

                            <Col md={12} lg={4} xl={6} className="order-first order-lg-0">
                                <Row className={"d-flex flex-column"}>
                                    <Col>
                                        <Jumbotron className={`d-flex flex-column align-items-center`}>
                                            <Image src={"/images/about/me.webp"} className={"w-100"} roundedCircle/>
                                            <Container className={"text-center mt-4"}>
                                                <h2>Deyby Rodriguez</h2>
                                                <h5 className={"font-italic"}>Natural Problem Solver</h5>
                                            </Container>

                                            <p className={"mt-2 px-3"}>
                                                Hi there! Welcome to my website!
                                                My name is Deyby Rodriguez, and I'm
                                                currently a student at New York Institute of
                                                Technology. Here you can learn a little bit
                                                more about who I am and what I'm into, as well
                                                as past meaningful experiences. Lastly, if
                                                you're looking to get in touch, all my contact
                                                information is readily available here!
                                            </p>
                                        </Jumbotron>
                                    </Col>

                                    <Col>
                                        <Jumbotron className={"d-flex flex-column align-items-center"}>
                                            <Image src={"/images/about/nyit.webp"} className={"w-100 bg-white p-3"} rounded/>
                                            <Image src={"/images/about/bears.webp"} className={"w-50 mt-5"}/>
                                            <Container className={"mt-4 text-center font-italic"}>
                                                <h2>Proud Bear</h2>
                                                <h4>Major in Computer Science</h4>
                                                <h4>Minor in Business</h4>
                                                <h2>2021-2025</h2>
                                            </Container>

                                            <p className={"mt-2 px-3"}>
                                                I'm studying computer science in hopes of having a professional career
                                                working in either Front-End, Back-End, or Full-Stack Web development.
                                                Whether I work with an established company or a startup, that is my end
                                                goal. I decided to pursue this with a business minor, as I aspire to
                                                one day have a tech-focused business of my own in the future. So far, I
                                                plan to build this business either around software consulting, or as an
                                                organization dedicated to computer science education within high school
                                                students.
                                            </p>
                                        </Jumbotron>
                                    </Col>
                                </Row>
                            </Col>

                            <Col>
                                <Row className={"d-flex flex-column align-items-center"}>
                                    <Col>
                                        <Jumbotron className={"text-center"}>
                                            <h3>Skills</h3>
                                        </Jumbotron>
                                    </Col>

                                    <Col>
                                        <CollapsibleCard
                                            title={"TypeScript"}
                                            imgSrc={"/images/about/typescript.webp"}
                                            imgDesc={"TypeScript"}
                                        >
                                            My language of choice for all projects and experiments,
                                            along with JavaScript. I have thorough experience working
                                            with ES6, along with various libraries, such as React.
                                        </CollapsibleCard>

                                        <CollapsibleCard
                                            title={"NodeJS"}
                                            imgSrc={"/images/about/nodejs.webp"}
                                            imgDesc={"NodeJS"}
                                        >
                                            The runtime behind all my projects. I use NodeJS in conjunction
                                            with other libraries/frameworks, and for some Back-End development
                                            as well.
                                        </CollapsibleCard>

                                        <CollapsibleCard
                                            title={"NextJS"}
                                            imgSrc={"/images/about/nextjs.webp"}
                                            imgDesc={"NextJS"}
                                        >
                                            My favorite Front-End JavaScript framework. I love NextJS because of how it
                                            builds upon my favorite library, React. NextJS is at the core of my
                                            more recent projects, like this website!
                                        </CollapsibleCard>

                                        <CollapsibleCard
                                            title={"Bootstrap"}
                                            imgSrc={"/images/about/bootstrap.webp"}
                                            imgDesc={"Bootstrap"}
                                        >
                                            For styling my websites and web apps. I love Bootstrap's easy to use
                                            responsive grid layout, along with it's variety of components. I stick to
                                            styling with Bootstrap for all of my projects, unless I have a more complex
                                            visual implemented.
                                        </CollapsibleCard>

                                        <CollapsibleCard
                                            title={"Firebase"}
                                            imgSrc={"/images/about/firebase.webp"}
                                            imgDesc={"Google Firebase"}
                                        >
                                            My go-to platform for development. I love how straight-forward and easy
                                            to use Firebase is as a whole. I've used Firebase Hosting for a majority of my projects,
                                            and use Firebase's Firestore as my preferred NoSQL database for my projects, such as this site!
                                            I also have experience working with other Firebase platform products, such as the Real-Time
                                            database, Firebase OAUTH, and Firebase Cloud Storage.
                                        </CollapsibleCard>
                                    </Col>

                                    <Col>
                                        <Jumbotron className={"text-center"}>
                                            <h3>Previous Sites</h3>
                                        </Jumbotron>
                                    </Col>

                                    <Col>
                                        <CollapsibleCard
                                            title={"deybyr647.com v2"}
                                            imgSrc={"/images/about/v2.webp"}
                                            imgDesc={"deybyr647.com v2"}
                                            link={"https://deybyr647.com"}
                                        >
                                            The second version of my personal website
                                        </CollapsibleCard>

                                        <CollapsibleCard
                                            title={"deybyr647.com v1"}
                                            imgSrc={"/images/about/v1.webp"}
                                            imgDesc={"deybyr647.com v1"}
                                            link={"https://deybyr647.github.io/personal-website-deprecated/"}
                                        >
                                            The first version of my personal website
                                        </CollapsibleCard>
                                    </Col>
                                </Row>
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