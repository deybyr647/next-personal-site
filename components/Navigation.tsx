import Link from "next/link";
import Image from "next/image";
import { useSession, signIn, signOut } from "next-auth/react";

import { Navbar, Nav } from "react-bootstrap";
import {
  BsArrowRightSquare,
  BsPerson,
  BsFileEarmarkText,
  BsPersonBadge,
  BsGrid,
  BsEnvelope,
} from "react-icons/bs";

import styles from "../styles/etc.module.css";
import logo from "../public/logo.svg";

const Navigation = () => {
  const { data: session } = useSession();
  return (
    <Navbar
      variant={"dark"}
      className={`h-100 d-flex align-items-start justify-content-center ${styles.navigation}`}
    >
      <Nav className={"d-flex text-center flex-column"}>
        <Navbar.Brand className={"mx-0 p-0 my-3"}>
          <Link href={"/"}>
            <a>
              <Image src={logo} className={styles.logo} alt={"Logo"} />
            </a>
          </Link>
        </Navbar.Brand>

        <Link href={"/about"}>
          <a className={"nav-link my-3"}>
            <BsPerson size={"1.2em"} />
            <br />
            <span className={"d-none d-lg-inline"}>About</span>
          </a>
        </Link>

        <Link href={"/Resume.pdf"}>
          <a
            className={"nav-link my-3"}
            rel={"noopener noreferrer"}
            target={"_blank"}
          >
            <BsFileEarmarkText size={"1.2em"} />
            <br />
            <span className={"d-none d-lg-inline"}>Resume</span>
          </a>
        </Link>

        <Link href={"/projects"}>
          <a className={"nav-link my-3"}>
            <BsGrid size={"1.2em"} />
            <br />
            <span className={"d-none d-lg-inline"}>Projects</span>
          </a>
        </Link>

        <Link href={"/contact"}>
          <a className={"nav-link my-3"}>
            <BsEnvelope size={"1.2em"} />
            <br />
            <span className={"d-none d-lg-inline"}>Contact</span>
          </a>
        </Link>

        {session ? (
          <>
            <Link href={"/admin"}>
              <a className={"nav-link my-3"}>
                <BsPersonBadge size={"1.2em"} />
                <br />
                <span className={"d-none d-lg-inline"}>Admin</span>
              </a>
            </Link>

            <a
              className={"nav-link my-3"}
              onClick={() => signOut({ callbackUrl: "/" })}
            >
              <BsArrowRightSquare size={"1.2em"} />
              <br />
              <span className={"d-none d-lg-inline"}>Log Out</span>
            </a>
          </>
        ) : (
          <a
            className={"nav-link my-3"}
            onClick={() => signIn("google", { callbackUrl: "/admin" })}
          >
            <BsPersonBadge size={"1.2em"} />
            <br />
            <span className={"d-none d-lg-inline"}>Admin</span>
          </a>
        )}
      </Nav>
    </Navbar>
  );
};

export default Navigation;
