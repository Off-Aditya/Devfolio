import Link from "next/link";
import React from "react";
import { CircularText } from "./Icons";

const HireMe = () => {
    return (
        <div className="fixed bottom-4 left-4 hidden items-center justify-center overflow-hidden xl:flex">

            <div className="w-48 h-48 flex items-center justify-center relative">
                <CircularText className="fill-light animate-spin-slow dark:text-light " />

                <Link
                    href="mailto:official.aditya.singh.343@gmail.com"
                    className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2
                        bg-dark text-light shadow-md border border-solid border-dark
                        w-20 h-20 rounded-full font-semibold
                        flex items-center justify-center
                        hover:bg-light hover:text-dark 
                        dark:bg-light dark:text-dark dark:hover:bg-dark dark:hover:text-light dark:border-light"
                >
                    Contact
                </Link>
            </div>
        </div>
    );
};

export default HireMe;
