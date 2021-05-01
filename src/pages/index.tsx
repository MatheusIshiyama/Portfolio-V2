import React from "react";
import { GetStaticProps } from "next";
import "../locales";

import { Loading, NavBar, Banner } from "../components";

export default function Home() {
    return (
        <>
            <Loading />
            <NavBar />
            <Banner />
        </>
    );
}

export const getStaticProps: GetStaticProps = async () => {
    return {
        props: {
            revalidate: 60 * 60 * 24, //* update once a day.
        },
    };
};
