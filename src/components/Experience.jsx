import React, { useRef } from 'react'
import { motion, useScroll } from 'framer-motion';
import LiIcon from './LiIcon';

const Details = ({
    title,
    organizer,
    organizerLink,
    time,
    address,
    problem,
    work
}) => {
    const ref = useRef(null);
    return (
        <li ref={ref} className="relative my-10 first:mt-0 last:mb-0 w-full pl-10 sm:pl-12 md:pl-14 lg:my-12">

            <LiIcon reference={ref} />
            <motion.div
                initial={{y:50}}
                whileInView={{y:0}}    
                transition={{duration:0.5, type:"spring"}}
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

                <span className="mt-1 block text-sm text-dark/75 dark:text-light/75">
                    {time} | {address}
                </span>

                <p className="mt-3">
                    <span className="font-semibold">Problem Statement:</span> {problem}
                </p>

                <p className="text-dark/80 mt-1 dark:text-light/80">
                    {work}
                </p>
            </motion.div>
        </li>
    );
};

const Experience = () => {

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
                Timeline
            </h2>

            <div ref={ref} className="relative mx-auto w-full md:w-[90%] lg:w-[75%] mb-14">
                <motion.div style={{scaleY: scrollYProgress}} className='absolute left-[13px] top-5 h-full w-[3px] origin-top bg-dark dark:bg-light sm:left-[15px] sm:w-[4px]' />

                <ul className="flex w-full flex-col items-start justify-between">

                    <Details
                        title="RACCAM Rajasthan Police Hackathon"
                        organizer="Rajasthan Police"
                        organizerLink="https://www.police.rajasthan.gov.in/old/hackathon/"
                        time="January 2024"
                        address="Rajasthan, India"
                        problem="Dark Web Monitoring"
                        work="Developed a monitoring system to analyze dark web activities and identify potential cyber threats."
                    />

                    <Details
                        title="Smart India Hackathon (SIH)"
                        organizer="Government of India"
                        organizerLink="https://sih.gov.in/"
                        time="December 2024"
                        address="India"
                        problem="De-anonymizing the Dark Web"
                        work="Worked on intelligence correlation techniques to identify underground operators and suspicious activity."
                    />

                    <Details
                        title="Odoo Hackathon – IIT Gandhinagar"
                        organizer="IIT Gandhinagar"
                        organizerLink="https://amalthea.iitgn.ac.in/pages/events.html"
                        time="November 2025"
                        address="Gujarat, India"
                        problem="OneFlow – Team Workflow Management"
                        work="Built a workflow management system to streamline collaboration, task tracking, and productivity."
                    />

                    <Details
                        title="AI Summit – HCL × GUVI Hackathon"
                        organizer="HCL & GUVI"
                        organizerLink="https://www.guvi.in/mlp/india_AI_impact_buildathon"
                        time="February 2026"
                        address="India"
                        problem="Honeypot System"
                        work="Developed an AI-powered honeypot system to detect and analyze malicious cyber activities."
                    />

                </ul>
            </div>
        </>
    );
};

export default Experience;
