import React from "react";
import { useTranslation } from "react-i18next";
import { FiChevronDown } from 'react-icons/fi';

import styles from "./styles.module.scss";

export function Banner() {
    const { t } = useTranslation();

    return (
        <section id="banner" className={styles.container}>
            <div className={styles.content}>
                <div className={styles.text}>
                    <h2>{t("hello, i'm")}</h2>
                    <h1>Matheus Ishiyama</h1>
                    <h2>{t("full stack developer")}</h2>
                </div>
                <a href="#AboutMe">{t("about me")}</a>
            </div>
            <div className={styles.more}>
                <p>{t('more info')}</p>
                <FiChevronDown className={styles.moreIcon} />
            </div>
        </section>
    );
}
