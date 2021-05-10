import React, { useState } from "react";
import { GetStaticProps } from "next";
import "../locales";

import styles from "../styles/Home.module.scss";

import { Loading, NavBar, Banner, AboutMe } from "../components";
import ScrollBar from "../components/ScrollBar";

export default function Home() {
    const [loading, setLoading] = useState(true);

    setTimeout(() => setLoading(false), 4500);

    return (
        <div className={styles.loading}>
            {loading && <Loading />}
            <NavBar />

            <ScrollBar>
                <Banner />
                {!loading && <AboutMe />}
            </ScrollBar>
        </div>
    );
}

export const getStaticProps: GetStaticProps = async () => {
    return {
        props: {
            revalidate: 60 * 60 * 24, //* update once a day.
        },
    };
};
