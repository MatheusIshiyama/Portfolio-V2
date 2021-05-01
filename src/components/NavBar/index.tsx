import React, { ChangeEvent, useEffect, useState } from "react";
import { useTranslation } from "react-i18next";

import styles from "./styles.module.scss";

export default function NavBar() {
    const [toggle, setToggle] = useState<boolean>(false);
    const [language, setLanguage] = useState<"en" | "ptbr">("en");

    const { t, i18n } = useTranslation();

    useEffect(() => {
        i18n.changeLanguage(language);
    }, [language]);

    function handleChangeLanguage(event: ChangeEvent<HTMLSelectElement>) {
        setLanguage(event.target.value as "en" | "ptbr");
    }

    return (
        <header className={styles.headerContainer}>
            <a href="#banner">
                <h1>Matheus Ishiyama</h1>
            </a>
            <div className={styles.anchors}>
                <a href="#">{t("about me")}</a>
                <a href="#">{t("tecnologies")}</a>
                <a href="#">{t("my projects")}</a>
                <a href="#">{t("contact")}</a>
            </div>
            <div className={styles.languageSelect}>
                <select
                    name="language"
                    id="language"
                    defaultValue="en"
                    onChange={(event) => handleChangeLanguage(event)}
                >
                    <option value="en">{t("english")}</option>
                    <option value="ptbr">{t("portuguese")}</option>
                </select>
            </div>
        </header>
    );
}
