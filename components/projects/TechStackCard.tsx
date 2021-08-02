import { Col, Container, Row } from "react-bootstrap";
import { SiBootstrap, SiNextDotJs, SiTypescript, SiHtml5, SiCss3, SiGooglemaps } from "react-icons/si";
import { SiJavascript, SiReact, SiNodeDotJs, SiPython, SiRust, SiZeit, SiFirebase } from "react-icons/si";
import { ReactNode } from "react";

interface TechStackCardProps {
    techArr: Array<ReactNode>
}

const strToComponent = (str: string): ReactNode => {
    if (str == "Bootstrap") return <SiBootstrap size={36} title={str}/>;
    else if (str == "TypeScript") return <SiTypescript size={36} title={str}/>;
    else if (str == "HTML") return <SiHtml5 size={36} title={str}/>;
    else if (str == "CSS") return <SiCss3 size={36} title={str}/>;
    else if (str == "JavaScript") return <SiJavascript size={36} title={str}/>;
    else if (str == "ReactJS") return <SiReact size={36} title={str}/>;
    else if (str == "NextJS") return <SiNextDotJs size={36} title={str}/>;
    else if (str == "NodeJS") return <SiNodeDotJs size={36} title={str}/>;
    else if (str == "Python") return <SiPython size={36} title={str}/>;
    else if (str == "Rust") return <SiRust size={36} title={str}/>;
    else if (str == "Vercel") return <SiZeit size={36} title={str}/>;
    else if (str == "Firebase") return <SiFirebase size={36} title={str}/>;
    else if (str == "Google Maps") return <SiGooglemaps size={36} title={str}/>;
    else return null;
}


const TechStackCard = ({ techArr }: TechStackCardProps) => {
    return (
        <Container className={"d-flex justify-content-center pt-4"}>
            <Row>
                {
                    techArr.map((component: ReactNode, ndx: number) => {
                        return (
                            <Col className={"mx-4 mb-4"} key={ ndx }>
                                { component }
                            </Col>
                        )
                    })
                }
            </Row>
        </Container>
    )
}

export { strToComponent };
export default TechStackCard;