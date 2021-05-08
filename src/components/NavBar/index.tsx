import React, { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";

import styles from "./styles.module.scss";

export default function NavBar() {
    const [toggle, setToggle] = useState<boolean>(false);
    const [language, setLanguage] = useState<"en" | "ptbr">("en");

    const { t, i18n } = useTranslation();

    useEffect(() => {
        i18n.changeLanguage(language);
    }, [language]);

    function handleToggle() {
        setToggle(!toggle);
    }

    function handleChangeLanguage() {
        if (language === "en") return setLanguage("ptbr");
        return setLanguage("en");
    }

    return (
        <header className={styles.headerContainer}>
            <a href="#banner" className={styles.logo}>
                Matheus Ishiyama
            </a>
            <div
                className={
                    toggle ? [styles.toggleButton, styles.active].join(" ") : styles.toggleButton
                }
                onClick={handleToggle}
            />
            <ul className={toggle ? [styles.menu, styles.active].join(" ") : styles.menu}>
                <li>
                    <a href="#About me" onClick={handleToggle}>
                        {t("about me")}
                    </a>
                </li>
                <li>
                    <a href="#" onClick={handleToggle}>
                        {t("tecnologies")}
                    </a>
                </li>
                <li>
                    <a href="#" onClick={handleToggle}>
                        {t("my projects")}
                    </a>
                </li>
                <li>
                    <a href="#" onClick={handleToggle}>
                        {t("contact")}
                    </a>
                </li>
                <li>
                    <a className={styles.languageButton} onClick={handleChangeLanguage}>
                        {language}
                    </a>
                </li>
            </ul>
        </header>
    );
}
