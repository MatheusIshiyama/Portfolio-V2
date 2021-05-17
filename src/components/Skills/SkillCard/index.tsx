import React from "react";

import { SkillCardInterface } from "../../../interfaces";

import styles from "./styles.module.scss";

export default function SkillCard(skillInfo: SkillCardInterface) {
    const { title, skillPercent } = skillInfo;

    function generateLogo(skillInfo: SkillCardInterface): string {
        const { title, color, logo, logoColor } = skillInfo;
        return `https://img.shields.io/badge/-${title}-${color}?style=for-the-badge&logo=${logo}&logoColor=${logoColor}`;
    }

    return (
        <div className={styles.container}>
            <div className={styles.skillLogo}>
                <div>
                    <img src={generateLogo(skillInfo)} alt={title} />
                </div>
                <h3>{skillPercent}%</h3>
            </div>
            <div className={styles.skillInfo}>
                <div
                    style={{ width: `${skillPercent}%` }}
                    className={styles.skillInfoProgressBar}
                />
            </div>
        </div>
    );
}
