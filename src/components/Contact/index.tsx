import React from "react";
import { useTranslation } from "react-i18next";
import { FiGithub, FiLinkedin, FiMail, FiMessageSquare } from "react-icons/fi";

import styles from "./styles.module.scss";

export function Contact() {
    const { t } = useTranslation();

    return (
        <section id="Contact" className={styles.container}>
            <h1>{t("contact")}</h1>
            <div className={styles.content}>
                <a href="http://www.github.com/MatheusIshiyama" target="blank">
                    <FiGithub size={32} className={styles.icon} />
                    <h2>Github: MatheusIshiyama</h2>
                </a>
                <a href="https://www.linkedin.com/in/matheusishiyama" target="blank">
                    <FiLinkedin size={32} className={styles.icon} />
                    <h2>LinkedIn: matheusishiyama</h2>
                </a>
                <a href="mailto:matheus.ishiyama@outlook.com">
                    <FiMail size={32} className={styles.icon} />
                    <h2>Email: matheus.ishiyama@outlook.com</h2>
                </a>
                <a>
                    <FiMessageSquare size={32} className={styles.icon} />
                    <h2>Discord: Matheus Ishiyama#4401</h2>
                </a>
            </div>
        </section>
    );
}
