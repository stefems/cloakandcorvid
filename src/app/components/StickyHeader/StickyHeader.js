"use client"
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

import styles from "./StickyHeader.module.css";

export default function StickyHeader() {
    const [linkShown, showLink] = useState(null);
    return (
        <div className={styles.container}>
            <a
                className={styles.logoLink}
                href=""
                target="_blank"
                rel="noopener noreferrer"
            >
                <Image
                    className={styles.logo}
                    src="/logo.png"
                    alt="Cload & Corvid Logo"
                    width={248}
                    height={248}
                />
                <span className={styles.logoName}>Cloak<br />& Corvid</span>
            </a>
            <div className={styles.navContainer}>
                <hr className={styles.navLine} />
                <nav className={styles.nav}>
                    <a
                        href="#about"
                        onMouseLeave={() => showLink(null)}
                        onMouseOver={() => showLink(0)}>
                            about
                            <span className={`${styles.linkShadow} ${linkShown === 0 ? styles.shown : ''}`}>about</span>
                    </a>
                    <a
                        href="#projects"
                        onMouseLeave={() => showLink(null)}
                        onMouseOver={() => showLink(1)}>
                            projects
                            <span className={`${styles.linkShadow} ${linkShown === 1 ? styles.shown : ''}`}>projects</span>
                    </a>
                    <a
                        href="#team"
                        onMouseLeave={() => showLink(null)}
                        onMouseOver={() => showLink(2)}>
                            team
                            <span className={`${styles.linkShadow} ${linkShown === 2 ? styles.shown : ''}`}>team</span>
                    </a>
                    {/* todo confirm the email */}
                    <a
                        href="mailto:info@cloakandcorvid.com"
                        onMouseLeave={() => showLink(null)}
                        onMouseOver={() => showLink(3)}>
                            say hi
                            <span className={`${styles.linkShadow} ${linkShown === 3 ? styles.shown : ''}`}>say hi</span>
                    </a>
                </nav>
            </div>
        </div>
    )
}