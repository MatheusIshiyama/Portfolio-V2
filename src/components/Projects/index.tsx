import React from "react";
import { useTranslation } from "react-i18next";

import ProjectCard from "./ProjectCard";

import { ProjectCardInterface } from "../../interfaces";

import styles from "./styles.module.scss";
import { FiGithub } from "react-icons/fi";

export function Projects() {
    const { t } = useTranslation();

    const projects: ProjectCardInterface[] = [
        {
            title: "Music Player",
            description: t("project description 1"),
            url: "https://github.com/MatheusIshiyama/music_player",
        },
        {
            title: "Alivio Landing Page",
            description: t("project description 2"),
            url: "https://github.com/MatheusIshiyama/alivio-landing-page-nextjs",
        },
        {
            title: 'Youtube Download API',
            description: t("project description 3"),
            url: "https://github.com/MatheusIshiyama/youtube-download-api",
        },
    ];

    const projectsCards = () => projects.map((project) => <ProjectCard {...project} />);

    return (
        <section id="Projects" className={styles.container}>
            <h1>{t("my projects")}</h1>
            <div className={styles.content}>{projectsCards()}</div>
            <a href="https://github.com/MatheusIshiyama?tab=repositories" target="blank" className={styles.githubProjects}>
                <FiGithub /> Mais projetos
            </a>
        </section>
    );
}
