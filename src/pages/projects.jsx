import React from "react";
import Head from "next/head";
import Layout from "@/components/Layout";
import AnimatedText from "@/components/AnimatedText";
import Link from "next/link";
import Image from "next/image";
import { GithubIcon } from "@/components/Icons";

import featuredProject1 from "../../public/images/projects/guvi-ml.jpeg";
import project1 from "../../public/images/projects/oneflow.jpeg";
import project2 from "../../public/images/projects/vision-aid.png";
import featuredProject2 from "../../public/images/projects/dark-web-monitoring.jpeg";
import project3 from "../../public/images/projects/vulnerability-detection.jpeg";
import project4 from "../../public/images/projects/notion-clone.jpg";
import TransitionEffect from "@/components/TransitionEffect";

const CardWrapper = ({ children, rounded = "rounded-3xl" }) => (
    <article
        className={`relative flex w-full flex-col rounded-2xl border border-dark bg-light p-5 shadow-2xl dark:border-light dark:bg-dark sm:p-6 ${rounded}`}
    >
        <div className="absolute top-0 -right-3 -z-10 h-[103%] w-[101%] rounded-[2.5rem] rounded-br-3xl bg-dark dark:bg-light" />
        {children}
    </article>
);

const FeaturedProject = ({ type, title, summary, img, link, github }) => (
    <CardWrapper>
        <div className="flex flex-col gap-6 lg:flex-row lg:items-center">

            {/* Image */}
            <Link
                href={link}
                target="_blank"
                className="w-full overflow-hidden rounded-lg lg:w-1/2"
                passHref
            >
                <Image
                    src={img}
                    alt={title}
                    className="h-auto w-full"
                    priority
                    sizes="(max-width:768px)100vw,(max-width:1200px)50vw,50vw"
                />
            </Link>

            {/* Content */}
            <div className="flex w-full flex-col lg:w-1/2 lg:pl-6">
                <span className="text-base font-medium text-primary dark:text-primaryDark sm:text-xl">
                    {type}
                </span>

                <Link href={link} target="_blank" className="hover:underline" passHref>
                    <h2 className="my-2 text-2xl font-bold sm:text-3xl lg:text-4xl">
                        {title}
                    </h2>
                </Link>

                <p className="my-2 text-justify font-medium">{summary}</p>

                <div className="mt-2 flex flex-wrap items-center gap-4">
                    <Link href={github} target="_blank" className="w-9 sm:w-10" passHref>
                        <GithubIcon />
                    </Link>

                    <Link
                        href={link}
                        target="_blank"
                        className="rounded-lg border border-dark bg-dark px-5 py-2 text-base font-semibold text-light hover:bg-light hover:text-dark dark:border-light dark:bg-light dark:text-dark dark:hover:bg-dark dark:hover:text-light sm:px-6 sm:text-lg"
                    >
                        Visit Project
                    </Link>
                </div>
            </div>
        </div>
    </CardWrapper>
);

const Project = ({ title, type, img, link, github }) => (
    <CardWrapper rounded="rounded-2xl">

        <Link href={link} target="_blank" className="w-full" passHref>
            <div className="relative aspect-[16/10] w-full overflow-hidden rounded-lg">
                <Image
                    src={img}
                    alt={title}
                    fill
                    className="object-cover"
                    sizes="(max-width:768px)100vw,(max-width:1200px)50vw,33vw"
                />
            </div>
        </Link>

        <div className="mt-4 flex w-full flex-col">
            <span className="text-base font-medium text-primary dark:text-primaryDark sm:text-xl">
                {type}
            </span>

            <Link href={link} target="_blank" className="hover:underline" passHref>
                <h2 className="my-2 text-2xl font-bold sm:text-3xl">{title}</h2>
            </Link>

            <div className="mt-2 flex items-center justify-between">
                <Link href={link} target="_blank" className="text-base font-semibold underline sm:text-lg">
                    Visit
                </Link>

                <Link href={github} target="_blank" className="w-7 sm:w-8" passHref>
                    <GithubIcon />
                </Link>
            </div>
        </div>
    </CardWrapper>
);

const Projects = () => {
    return (
        <>
            <Head>
                <title>Projects | Aditya Singh</title>
                <meta name="description" content="Portfolio projects of Aditya Singh" />
            </Head>

            <TransitionEffect />
            <main className="mb-16 flex w-full flex-col items-center dark:text-light">
                <Layout className="pt-10 md:pt-16">

                    <AnimatedText
                        text="Imagination Trumps Knowledge!"
                        className="mb-10 md:mb-16"
                    />

                    <div className="grid grid-cols-1 gap-8 md:grid-cols-12 md:gap-12 lg:gap-20">

                        <div className="md:col-span-12">
                            <FeaturedProject
                                type="Featured Project"
                                title="Guvi ML Dashboard"
                                summary="A machine learning dashboard that enables users to upload datasets, run inference models, and visualize prediction results with confidence scores."
                                img={featuredProject1}
                                link="https://github.com/Off-Aditya/final-guvi/tree/main"
                                github="https://github.com/Off-Aditya/final-guvi/tree/main"
                            />
                        </div>

                        <div className="md:col-span-6">
                            <Project
                                type="Full-Stack SaaS Application"
                                title="OneFlow - Project Management"
                                img={project1}
                                link="https://github.com/Ankit19102004/odoo-final"
                                github="https://github.com/Ankit19102004/odoo-final"
                            />
                        </div>

                        <div className="md:col-span-6">
                            <Project
                                type="AI Computer Vision Project"
                                title="Vision Aid for Blind People"
                                img={project2}
                                link="https://github.com/Off-Aditya/Object_Detection"
                                github="https://github.com/Off-Aditya/Object_Detection"
                            />
                        </div>

                        <div className="md:col-span-12">
                            <FeaturedProject
                                type="Featured Project"
                                title="Dark Web Monitoring System"
                                summary="A monitoring system that tracks sensitive keywords, collects related links, records IP data, and compares live website versions to detect changes."
                                img={featuredProject2}
                                link="https://github.com/Off-Aditya/dark_web_monitoring_system"
                                github="https://github.com/Off-Aditya/dark_web_monitoring_system"
                            />
                        </div>

                        <div className="md:col-span-6">
                            <Project
                                type="Security Automation Tool"
                                title="Vulnerability Detection System"
                                img={project3}
                                link="https://github.com/Off-Aditya/Malware_Detection"
                                github="https://github.com/Off-Aditya/Malware_Detection"
                            />
                        </div>

                        <div className="md:col-span-6">
                            <Project
                                type="Full-Stack Productivity App"
                                title="NoteCraft"
                                img={project4}
                                link="https://github.com/Off-Aditya/Neon-Notion"
                                github="https://github.com/Off-Aditya/Neon-Notion"
                            />
                        </div>

                    </div>
                </Layout>
            </main>
        </>
    );
};

export default Projects;