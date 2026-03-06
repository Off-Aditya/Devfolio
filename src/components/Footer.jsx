import React from "react";
import Layout from "./Layout";
import Link from "next/link";

const Footer = () => {
    return (
        <footer className="w-full border-t-2 border-solid border-dark dark:border-light text-dark dark:text-light">

            <Layout className="py-10 flex flex-col items-center justify-center gap-4 text-center md:flex-row md:justify-between">

                <span className="text-lg font-semibold md:text-xl">
                    {new Date().getFullYear()} © All Rights Reserved.
                </span>

                <span className="flex items-center gap-1 text-lg font-semibold md:text-xl">
                    Built with
                    <span className="text-primary dark:text-primaryDark text-2xl px-1">
                        ♡
                    </span>
                    by{" "}
                    <Link
                        href="https://github.com/Off-Aditya"
                        target="_blank"
                        className="underline underline-offset-4 font-bold"
                    >
                        Aditya Singh
                    </Link>
                </span>

                <Link
                    href="https://github.com/Off-Aditya"
                    target="_blank"
                    className="text-lg font-semibold underline underline-offset-4 md:text-xl"
                >
                    Say Hello
                </Link>

            </Layout>
        </footer>
    );
};

export default Footer;