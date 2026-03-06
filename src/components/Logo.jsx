import Link from "next/link";
import { motion } from "framer-motion";

const MotionA = motion("a");

const Logo = () => {
    return (
        <div className="flex items-center justify-center">
            <Link href="/" passHref legacyBehavior>
                <MotionA
                    className="flex h-16 w-16 items-center justify-center rounded-full border border-solid border-transparent bg-black text-3xl font-bold text-light dark:border-light sm:h-20 sm:w-20"
                    whileHover={{
                        backgroundColor: [
                            "#121212",
                            "rgba(131,58,180,1)",
                            "rgba(253,29,29,1)",
                            "rgba(252,176,69,1)",
                            "rgba(131,58,180,1)",
                            "#121212",
                        ],
                    }}
                    transition={{
                        duration: 1.2,
                        repeat:Infinity,
                    }}
                >
                    AS
                </MotionA>
            </Link>
        </div>
    );
};

export default Logo;
