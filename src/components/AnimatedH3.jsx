import React from 'react'
import { motion } from 'framer-motion'

const AnimatedH3 = ({ text }) => {
    return (
        <h3 className="text-2xl font-semibold leading-tight md:text-3xl md:whitespace-nowrap">
            {text.split("").map((char, i) => (
                <motion.span
                    key={i}
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{
                        duration: 0.02,
                        delay: i * 0.04,
                    }}
                    viewport={{ once: true }}
                    className="inline-block"
                >
                    {char === " " ? "\u00A0" : char}
                </motion.span>
            ))}
        </h3>
    )
}

export default React.memo(AnimatedH3)
