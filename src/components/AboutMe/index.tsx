import React from "react";
import Image from "next/image";

import { useTranslation } from "react-i18next";

import styles from "./styles.module.scss";

export default function AboutMe() {
    const { t } = useTranslation();

    return (
        <section className={styles.container}>
            <h1>{t("about me")}</h1>
            <div className={styles.content}>
                <div className={styles.about}>
                    <div>
                        <h2>💡 {t("about me")}</h2>
                        <p>🌟 {t("about me text 1")}</p>
                        <p>🌐 {t("about me text 2")}</p>
                        <p>🎓 {t("about me text 3")}</p>
                        <p>📚 {t("about me text 4")}</p>
                    </div>
                    <div>
                        <h2>🔝 {t("experiences")}</h2>
                        <div>
                            <h3>- 💻 {t("experience 1 title")}</h3>
                            <h4>{t("experience 1 location")}</h4>
                            <p className={styles.tecnologies}>
                                <img
                                    src="https://img.shields.io/badge/-Node.js-339933?style=flat-square&logo=Node.js&logoColor=white"
                                    alt="Node.js"
                                />{" "}
                                <img
                                    src="https://img.shields.io/badge/-JavaScript-F7DF1E?style=flat-square&logo=javascript&logoColor=black"
                                    alt="Javascript"
                                />{" "}
                                <img
                                    src="https://img.shields.io/badge/-React-1572B6?style=flat-square&logo=react&logoColor=white"
                                    alt="React"
                                />{" "}
                                <img
                                    src="https://img.shields.io/badge/-Bootstrap-7952b3?style=flat-square&logo=bootstrap&logoColor=white"
                                    alt="React"
                                />{" "}
                                <img
                                    src="https://img.shields.io/badge/-Jest-fa383e?style=flat-square&logo=jest&logoColor=white"
                                    alt="Jest"
                                />{" "}
                                <img
                                    src="https://img.shields.io/badge/-Jenkins-d24939?style=flat-square&logo=jenkins&logoColor=white"
                                    alt="Jenkins"
                                />{" "}
                                <img
                                    src="https://img.shields.io/badge/-Docker-2496ed?style=flat-square&logo=docker&logoColor=white"
                                    alt="Docker"
                                />{" "}
                                <img
                                    src="https://img.shields.io/badge/-PostgreSQL-336791?style=flat-square&logo=postgresql&logoColor=white"
                                    alt="PostgreSQL"
                                />{" "}
                            </p>
                        </div>
                        <div>
                            <h3>- 💻 {t("experience 2 title")}</h3>
                            <h4>{t("experience 2 location")}</h4>
                            <p className={styles.tecnologies}>
                                <img
                                    src="https://img.shields.io/badge/-C_/_C++-blue?style=flat-square&logo=c&logoColor=white"
                                    alt="C"
                                />{" "}
                                <img
                                    src="https://img.shields.io/badge/-Arduino-008184?style=flat-square&logo=arduino&logoColor=white"
                                    alt="Arduino"
                                />{" "}
                            </p>
                        </div>
                    </div>
                </div>
                <div className={styles.profileImage}>
                    <Image
                        src="/profile.jpg"
                        alt="Matheus Ishiyama"
                        layout="responsive"
                        height={50}
                        width={50}
                        className={styles.image}
                    />
                </div>
            </div>
        </section>
    );
}
