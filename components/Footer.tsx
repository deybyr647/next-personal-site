import { Navbar, Nav } from "react-bootstrap";
import styles from "../styles/etc.module.scss";

enum FooterVariant {
  Fixed = "fixed-bottom",
  Sticky = "sticky-bottom",
}

interface FooterProps {
  variant?: FooterVariant;
}

const Footer = ({ variant }: FooterProps) => (
  <Navbar
    variant={"dark"}
    className={`${variant || FooterVariant.Sticky} justify-content-center ${
      styles.footer
    }`}
  >
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
);

export { type FooterProps, FooterVariant };
export default Footer;
