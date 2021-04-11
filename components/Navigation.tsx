import Link from 'next/link';

import styles from '../styles/etc.module.css';
import { Navbar, Nav, Image } from 'react-bootstrap';
import { BsPerson, BsFileEarmarkText, BsGrid, BsEnvelope } from 'react-icons/bs';

const Navigation = () => {
    return (
        <Navbar variant={"dark"} className={`h-100 d-flex align-items-start justify-content-center ${styles.navigation}`}>
            <Nav className={"d-flex text-center flex-column sticky-top"}>
                <Navbar.Brand className={"mx-0 p-0 my-3"}>
                    <Link href={"/"}>
                        <a>
                            <Image src={"/logo.svg"} className={`w-100 ${styles.logo}`} width={"100px"} alt={"Logo"}/>
                        </a>
                    </Link>
                </Navbar.Brand>

                <Link href={"/about"}>
                    <a className={"nav-link"}>
                        <BsPerson size={"1.2em"}/>
                        <br/>
                        <span className={"d-none d-lg-inline"}>About</span>
                    </a>
                </Link>

                <Link href={"/Resume.pdf"}>
                    <a className={"nav-link"} rel={"noopener noreferrer"} target={"_blank"}>
                        <BsFileEarmarkText size={"1.2em"}/>
                        <br/>
                        <span className={"d-none d-lg-inline"}>Resume</span>
                    </a>
                </Link>

                <Link href={"/projects"}>
                    <a className={"nav-link"}>
                        <BsGrid size={"1.2em"}/>
                        <br/>
                        <span className={"d-none d-lg-inline"}>Portfolio</span>
                    </a>
                </Link>

                <Link href={"/contact"}>
                    <a className={"nav-link"}>
                        <BsEnvelope size={"1.2em"}/>
                        <br/>
                        <span className={"d-none d-lg-inline"}>Contact</span>
                    </a>
                </Link>
            </Nav>
        </Navbar>
    )
}

export default Navigation;