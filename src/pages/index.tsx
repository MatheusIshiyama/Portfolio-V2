import React, { useState } from "react";
import Head from "next/head";
import "../locales";

import styles from "../styles/Home.module.scss";

import {
    Loading,
    NavBar,
    Banner,
    AboutMe,
    Skills,
    Services,
    Contact,
    Footer,
    Projects,
} from "../components";
import ScrollBar from "../components/ScrollBar";

export default function Home() {
    const [loading, setLoading] = useState(true);

    setTimeout(() => setLoading(false), 4500);

    return (
        <>
            <Head>
                <title>Matheus Ishiyama</title>
                <link rel="icon" href="./background.png" />
            </Head>
            <div className={styles.loading}>
                {loading && <Loading />}
                <NavBar />

                <ScrollBar>
                    <Banner />
                    {!loading && (
                        <>
                            <AboutMe />
                            <Skills />
                            <Services />
                            <Projects />
                            <Contact />
                            <Footer />
                        </>
                    )}
                </ScrollBar>
            </div>
        </>
    );
}
