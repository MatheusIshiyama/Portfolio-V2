import React from "react";
import { useTranslation } from "react-i18next";

import SkillCard from "./SkillCard";

import { SkillCardInterface } from "../../interfaces";

import styles from "./styles.module.scss";

export function Skills() {
    const { t } = useTranslation();

    const skills: SkillCardInterface[] = [
        {
            title: "Node.js",
            color: "339933",
            logo: "node.js",
            logoColor: "white",
            skillPercent: 85,
        },
        {
            title: "Javascript",
            color: "F7DF1E",
            logo: "javascript",
            logoColor: "black",
            skillPercent: 85,
        },
        {
            title: "Typescript",
            color: "1572B6",
            logo: "typescript",
            logoColor: "white",
            skillPercent: 80,
        },
        {
            title: "HTML5",
            color: "E34F26",
            logo: "html5",
            logoColor: "white",
            skillPercent: 70,
        },
        {
            title: "CSS3",
            color: "1572B6",
            logo: "css3",
            logoColor: "white",
            skillPercent: 70,
        },
    ];

    const skillsCards = () => {
        return skills.map((skill) => <SkillCard {...skill} />);
    };

    return (
        <section id="Skills" className={styles.container}>
            <h1>{t("my skills")}</h1>
            <div className={styles.content}>
                <div className={styles.skills}>
                    <h2>{t("top skills domain")}</h2>
                    {skillsCards()}
                </div>
                <div className={styles.text}>
                    <p>{t("skills text 1")}</p>
                    <p>{t("skills text 2")}</p>
                    <p>{t("skills text 3")}</p>
                </div>
            </div>
        </section>
    );
}
