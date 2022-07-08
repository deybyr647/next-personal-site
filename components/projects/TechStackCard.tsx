import { Col, Container, Row } from "react-bootstrap";
import {
  SiBootstrap,
  SiNextdotjs,
  SiTypescript,
  SiHtml5,
  SiCss3,
  SiGooglemaps,
} from "react-icons/si";
import {
  SiJavascript,
  SiReact,
  SiNodedotjs,
  SiPython,
  SiRust,
  SiVercel,
  SiFirebase,
} from "react-icons/si";
import { ReactNode } from "react";

import styles from "../../styles/etc.module.scss";

interface TechStackCardProps {
  techArr: Array<ReactNode>;
}

const strToComponent = (str: string): ReactNode => {
  if (str == "Bootstrap")
    return <SiBootstrap size={36} title={str} className={styles.icon} />;
  else if (str == "TypeScript")
    return <SiTypescript size={36} title={str} className={styles.icon} />;
  else if (str == "HTML")
    return <SiHtml5 size={36} title={str} className={styles.icon} />;
  else if (str == "CSS")
    return <SiCss3 size={36} title={str} className={styles.icon} />;
  else if (str == "JavaScript")
    return <SiJavascript size={36} title={str} className={styles.icon} />;
  else if (str == "ReactJS")
    return <SiReact size={36} title={str} className={styles.icon} />;
  else if (str == "NextJS")
    return <SiNextdotjs size={36} title={str} className={styles.icon} />;
  else if (str == "NodeJS")
    return <SiNodedotjs size={36} title={str} className={styles.icon} />;
  else if (str == "Python")
    return <SiPython size={36} title={str} className={styles.icon} />;
  else if (str == "Rust")
    return <SiRust size={36} title={str} className={styles.icon} />;
  else if (str == "Vercel")
    return <SiVercel size={36} title={str} className={styles.icon} />;
  else if (str == "Firebase")
    return <SiFirebase size={36} title={str} className={styles.icon} />;
  else if (str == "Google Maps")
    return <SiGooglemaps size={36} title={str} className={styles.icon} />;
  else return null;
};

const TechStackCard = ({ techArr }: TechStackCardProps) => {
  return (
    <Container className={"d-flex justify-content-center pt-4"}>
      <Row>
        {techArr.map((component: ReactNode, ndx: number) => {
          return (
            <Col className={"mx-4 mb-4"} key={ndx}>
              {component}
            </Col>
          );
        })}
      </Row>
    </Container>
  );
};

export { strToComponent };
export default TechStackCard;
