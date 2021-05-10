import React from "react";
import { useTranslation } from "react-i18next";

import styles from "./styles.module.scss";

export function Footer() {
    const { t } = useTranslation();

    return (
        <div className={styles.container}>
            <h2>{t("developed by")} Matheus Ishiyama</h2>
        </div>
    );
}
