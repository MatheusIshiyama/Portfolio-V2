import React from "react";
import { useTranslation } from "react-i18next";

import styles from "./styles.module.scss";

export default function Banner() {
    const { t } = useTranslation();

    return (
        <section id="banner" className={styles.container}>
            <div className={styles.content}>
                <div className={styles.text}>
                    <h2>{t("hello, i'm")}</h2>
                    <h1>Matheus Ishiyama</h1>
                    <h2>{t("full stack developer")}</h2>
                </div>
                <a href="#">{t("about me")}</a>
            </div>
        </section>
    );
}
