import React from 'react'
import { motion, useScroll } from "framer-motion"

const LiIcon = ({reference}) => {

    const { scrollYProgress } = useScroll(
        {
            target: reference,
            offset: ["center end", "center center"]
        }
    )

    return (
        <figure className='absolute left-0 top-1 stroke-dark dark:stroke-light'>
            <svg className='-rotate-90 h-7 w-7 sm:h-8 sm:w-8' viewBox="0 0 100 100">
                <circle cx="50" cy="50" r="32" className='stroke-primary dark:stroke-primaryDark stroke-1 fill-none' />
                <motion.circle
                    cx="50"
                    cy="50"
                    r="32"
                    className='stroke-[5px] fill-light dark:fill-dark'
                    style={{
                        pathLength: scrollYProgress
                    }}
                />
                <circle cx="50" cy="50" r="12" className='animate-pulse stroke-1 fill-primary dark:fill-primaryDark ' />
            </svg>
        </figure>
    )
}

export default LiIcon
