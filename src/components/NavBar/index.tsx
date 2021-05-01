import React, { useState } from "react";
import styles from "./styles.module.scss";

export default function NavBar() {
    const [scroll, setScroll] = useState(false);
    const [toggle, setToggle] = useState(false);

    return (
        <header className={[styles.headerContainer, scroll && styles.sticky].join(' ')}>
            <h1>Matheus Ishiyama</h1>
        </header>
    );
}
