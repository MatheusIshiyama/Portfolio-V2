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
            <div className={styles.sections}>
                <div
                    className={
                        toggle
                            ? [styles.toggleButton, styles.active].join(" ")
                            : styles.toggleButton
                    }
                    onClick={handleToggle}
                />
                <ul className={toggle ? [styles.menu, styles.active].join(" ") : styles.menu}>
                    <li>
                        <a href="#banner" onClick={handleToggle}>
                            Home
                        </a>
                    </li>
                    <li>
                        <a href="#AboutMe" onClick={handleToggle}>
                            {t("about me")}
                        </a>
                    </li>
                    <li>
                        <a href="#" onClick={handleToggle}>
                            {t("services")}
                        </a>
                    </li>
                    <li>
                        <a href="#Skills" onClick={handleToggle}>
                            {t("skills")}
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
                </ul>
                <div>
                    <a className={styles.languageButton} onClick={handleChangeLanguage}>
                        {language}
                    </a>
                </div>
            </div>
        </header>
    );
}
