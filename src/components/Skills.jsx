import React, { useEffect, useState } from 'react'
import { motion } from 'framer-motion'

const skillItems = [
    { name: "Machine Learning", x: "-14vw", y: "-2vw", mx: "-28vw", my: "-6vw" },
    { name: "Python", x: "3vw", y: "-11vw", mx: "6vw", my: "-22vw" },
    { name: "Data Analysis", x: "13vw", y: "3vw", mx: "26vw", my: "4vw" },
    { name: "Model Training", x: "-2vw", y: "12vw", mx: "-4vw", my: "26vw" },
    { name: "ReactJS", x: "21vw", y: "-7vw", mx: "30vw", my: "-12vw" },
    { name: "JavaScript", x: "26vw", y: "6vw", mx: "34vw", my: "16vw" },
    { name: "Next.js", x: "-23vw", y: "-9vw", mx: "-34vw", my: "-18vw" },
    { name: "Tailwind CSS", x: "-26vw", y: "9vw", mx: "-36vw", my: "12vw" },
    { name: "Generative AI", x: "-6vw", y: "-22vw", mx: "-8vw", my: "-34vw" },
    { name: "LLM APIs", x: "11vw", y: "21vw", mx: "16vw", my: "40vw" },
];

const Skill = ({ name, x, y }) => {
    return (
        <motion.div
            className="absolute flex cursor-pointer items-center justify-center rounded-full bg-dark px-3 py-1.5 text-[11px] font-semibold text-light shadow-dark dark:bg-light dark:text-dark sm:px-4 sm:py-2 sm:text-sm md:px-5 md:py-2.5 md:text-base"
            whileHover={{ scale: 1.05 }}
            initial={{ x: 0, y: 0 }}
            whileInView={{ x: x, y: y, transition: { duration: 1.5 } }}
            viewport={{ once: true }}
        >
            {name}
        </motion.div>
    )
}

const Skills = () => {

    const [isMobile, setIsMobile] = useState(false)

    useEffect(() => {
        const check = () => setIsMobile(window.innerWidth < 768)
        check()
        window.addEventListener("resize", check)
        return () => window.removeEventListener("resize", check)
    }, [])

    return (
        <>
            <h2 className="mt-20 w-full text-center text-4xl font-bold sm:mt-24 sm:text-6xl lg:mt-40 lg:text-8xl">
                Skills
            </h2>

            <div className="relative mt-12 flex h-[32rem] w-full items-center justify-center rounded-full bg-circularLight sm:h-[36rem] md:h-[40rem] lg:mt-16 lg:h-[42rem] dark:bg-circularDark">

                <motion.div
                    className="flex cursor-pointer items-center justify-center rounded-full bg-dark px-4 py-2 text-xs font-semibold text-light shadow-dark dark:bg-light dark:text-dark sm:px-5 sm:py-2.5 sm:text-sm md:px-6 md:py-3 md:text-base"
                    whileHover={{ scale: 1.05 }}
                >
                    Core
                </motion.div>

                {skillItems.map((skill) => (
                    <Skill
                        key={skill.name}
                        name={skill.name}
                        x={isMobile ? skill.mx : skill.x}
                        y={isMobile ? skill.my : skill.y}
                    />
                ))}

            </div>
        </>
    )
}

export default Skills