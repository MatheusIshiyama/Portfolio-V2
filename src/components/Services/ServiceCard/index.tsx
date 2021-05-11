import React from "react";

import { ServiceCardInterface } from "../../../interfaces";

import styles from "./styles.module.scss";

export default function ServiceCard({ icon, title, description }: ServiceCardInterface) {
    return (
        <div className={styles.container}>
            <div className={styles.icon}>{icon}</div>
            <div className={styles.content}>
                <h3>{title}</h3>
                <p>{description}</p>
            </div>
        </div>
    );
}
