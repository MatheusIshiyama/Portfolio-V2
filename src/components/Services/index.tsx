import React from "react";
import { useTranslation } from "react-i18next";
import { FiCpu, FiMessageSquare, FiMonitor, FiSmartphone } from "react-icons/fi";

import { ServiceCardInterface } from "../../interfaces";

import ServiceCard from "./ServiceCard";

import styles from "./styles.module.scss";

export function Services() {
    const { t } = useTranslation();

    const services: ServiceCardInterface[] = [
        {
            icon: <FiMonitor size={38} />,
            title: t("service title 1"),
            description: t("service description 1"),
        },
        {
            icon: <FiSmartphone size={38} />,
            title: t("service title 2"),
            description: t("service description 2"),
        },
        {
            icon: <FiCpu size={38} />,
            title: t("service title 3"),
            description: t("service description 3"),
        },
        {
            icon: <FiMessageSquare size={38} />,
            title: t("service title 4"),
            description: t("service description 4"),
        },
    ];

    const serviceCards = () =>
        services.map((service, index) => <ServiceCard key={index} {...service} />);

    return (
        <section className={styles.container}>
            <h1>{t("services")}</h1>
            <div className={styles.content}>{serviceCards()}</div>
        </section>
    );
}
