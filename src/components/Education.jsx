import React, { useRef } from 'react'
import { motion, useScroll } from 'framer-motion';
import LiIcon from './LiIcon';

const Details = ({
    title,
    organizer,
    organizerLink,
    time,
    address,
    percentage,
    work
}) => {
    const ref = useRef(null);
    return (
        <li ref={ref} className="relative my-10 first:mt-0 last:mb-0 w-full pl-10 sm:pl-12 md:pl-14 lg:my-12">

            <LiIcon reference={ref} />
            <motion.div
                initial={{ y: 50 }}
                whileInView={{ y: 0 }}
                transition={{ duration: 0.5, type: "spring" }}
            >
                <h3 className="text-lg font-bold sm:text-xl lg:text-2xl">
                    {title}{" "}
                    <a
                        href={organizerLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="break-words text-primary dark:text-primaryDark"
                    >
                        @{organizer}
                    </a>
                </h3>

                <span className="block text-dark/75 text-sm mt-1 dark:text-light/75">
                    {time} | {address}
                </span>

                <p className="mt-3">
                    <span className="font-semibold">Percentage:</span> {percentage}
                </p>

                <p className="text-dark/80 mt-1 dark:text-light/80">
                    {work}
                </p>
            </motion.div>
        </li>
    );
};

const Education = () => {

    const ref = useRef(null);
    const { scrollYProgress } = useScroll(
        {
            target: ref,
            offset: ["start end", "center start"],
        }
    )

    return (
        <>
            <h2 className="mt-20 mb-12 w-full text-center text-4xl font-bold sm:mt-24 sm:text-6xl lg:mb-24 lg:text-8xl">
                Education
            </h2>

            <div ref={ref} className="relative mx-auto h-full w-full mb-12 md:w-[90%] lg:w-[75%]">
                <motion.div style={{ scaleY: scrollYProgress }} className='absolute left-[13px] top-5 h-full w-[3px] origin-top bg-dark dark:bg-light sm:left-[15px] sm:w-[4px]' />

                <ul className="flex w-full flex-col items-start justify-between">

                    <Details
                        title="Bachelor of Technology | Computer Science & Engg."
                        organizer="Babu Banarasi Das Northern India Institute of Technology"
                        organizerLink="https://bbdniit.ac.in/"
                        time="2022 – 2026"
                        address="Lucknow, Uttar Pradesh, India"
                        percentage=" 7.76 CGPA"
                        work="Studied fundamental and advanced computer science concepts including Data Structures and Algorithms, Computer Systems Engineering, and Artificial Intelligence, building a strong theoretical and practical foundation."
                    />

                    <Details
                        title="Intermediate School | Class 12 "
                        organizer="Jagran Public School"
                        organizerLink="https://www.jpslucknow.com/"
                        time="2021"
                        address="Lucknow, Uttar Pradesh, India"
                        percentage=" 81.4 %"
                        work="Completed higher secondary education with specialization in Physics, Chemistry, and Mathematics (PCM), building a strong base for engineering and computer science studies."
                    />

                    <Details
                        title="High School | Class 10"
                        organizer="Jagran Public School"
                        organizerLink="https://www.jpslucknow.com/"
                        time="2019"
                        address="Lucknow, Uttar Pradesh, India"
                        percentage=" 85.83 %"
                        work="Completed secondary education with a strong academic foundation across all core subjects, developing analytical thinking, problem-solving skills, and discipline for higher studies."
                    />

                </ul>
            </div>
        </>
    );
};

export default Education;
