import React from "react";

import { ProjectCardInterface } from "../../../interfaces";

import styles from "./styles.module.scss";

export default function ProjectCard({ title, description, url }: ProjectCardInterface) {
    return (
        <a href={url} target="blank" className={styles.container}>
            <h3>{title}</h3>
            <p>{description}</p>
            <div>
                <h4>Link:</h4>
                <a href={url} target="blank">
                    {url}
                </a>
            </div>
        </a>
    );
}
