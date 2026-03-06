import React from 'react'
import Head from 'next/head'
import AnimatedText from '@/components/AnimatedText'
import Layout from '@/components/Layout'
import AnimatedH3 from '@/components/AnimatedH3'
import profilePic from "../../public/images/profile/developer-pic-2.jpg"
import Image from 'next/image'
import Skills from '@/components/Skills'
import Experience from '@/components/Experience'
import Education from '@/components/Education'
import TransitionEffect from '@/components/TransitionEffect'

const About = () => {
    return (
        <>
            <Head>
                <title>About | Aditya Singh</title>
                <meta name='description' content='Full-stack developer specializing in React, Machine Learning, AI, and Generative AI. Leveraging modern technologies to build scalable web applications and intelligent systems.' />
            </Head>

            <TransitionEffect />
            <main className='flex w-full flex-col items-center justify-center dark:text-light'>
                <Layout className='pt-10 md:pt-16'>
                    <AnimatedText text='Passion Fuels Purpose!' className='mb-10 md:mb-16' />
                    <div className="grid w-full grid-cols-1 gap-10 md:grid-cols-8 md:gap-12 lg:gap-16">
                        <div className="flex flex-col items-start justify-start md:col-span-4 lg:col-span-3">
                            <h2 className="mb-4 text-lg font-bold uppercase text-dark/75 dark:text-light/75">Biography</h2>
                            <p className="font-medium text-justify">
                                Hi, I&apos;m Aditya Singh, a full-stack developer specializing in React, Machine Learning, AI, and Generative AI. I&apos;m passionate about building scalable web applications and intelligent systems that solve real-world problems through clean architecture and modern technologies.
                            </p>

                            <p className="my-4 font-medium text-justify">
                                I believe impactful software is built at the intersection of strong frontend engineering and smart backend logic. From developing responsive React applications to integrating ML models and AI-driven features, I focus on creating efficient, high-performance digital solutions.
                            </p>

                            <p className="font-medium text-justify">
                                Whether it&apos;s a dynamic web platform or an AI-powered application, I bring a problem-solving mindset, continuous learning attitude, and commitment to technical excellence to every project I work on.
                            </p>
                        </div>

                        <div className="relative h-max rounded-2xl border-2 border-solid border-dark bg-light p-5 dark:border-light dark:bg-dark sm:p-8 md:col-span-4 lg:col-span-3">
                            <div className="absolute top-0 -right-3 -z-10 h-[103%] w-[102%] rounded-[2rem] bg-dark dark:bg-light" />
                            <Image
                                src={profilePic}
                                alt="Aditya Singh"
                                className="h-auto w-full rounded-2xl"
                                priority
                                sizes='(max-width: 768px) 100vw,
                                    (max-width: 1200px) 50vw, 50vw'
                            />
                        </div>

                        <div className="flex flex-col items-center justify-center gap-10 md:col-span-8 md:flex-row md:flex-wrap md:justify-center lg:col-span-2 lg:flex-col lg:items-end lg:gap-0 lg:justify-between">
                            <div className="flex flex-col items-center text-center lg:items-end lg:text-right">
                                <AnimatedH3 text="Frontend" />
                                <p className="text-base text-dark/70 dark:text-light/70">
                                    React - Tailwind
                                </p>
                            </div>

                            <div className="flex flex-col items-center text-center lg:items-end lg:text-right">
                                <AnimatedH3 text="Machine Learning" />
                                <p className="text-base text-dark/70 dark:text-light/70">
                                    Model Development - Deployment
                                </p>
                            </div>

                            <div className="flex flex-col items-center text-center lg:items-end lg:text-right">
                                <AnimatedH3 text="AI Engineering" />
                                <p className="text-base text-dark/70 dark:text-light/70">
                                    Generative AI - Automation
                                </p>
                            </div>
                        </div>
                    </div>
                    <Skills />
                    <Education />
                    <Experience />
                </Layout>
            </main>
        </>
    )
}

export default About
