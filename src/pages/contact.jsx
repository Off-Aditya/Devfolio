import React, { useRef, useState } from "react";
import Head from "next/head";
import Link from "next/link";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";
import AnimatedText from "@/components/AnimatedText";
import Layout from "@/components/Layout";
import { GithubIcon, LinkedInIcon, TwitterIcon } from "@/components/Icons";
import TransitionEffect from "@/components/TransitionEffect";

const contactPoints = [
    {
        label: "Email",
        value: "official.aditya.singh.343@gmail.com",
        href: "mailto:official.aditya.singh.343@gmail.com",
    },
    {
        label: "Location",
        value: "Lucknow, Uttar Pradesh, India",
        href: null,
    },
    {
        label: "Availability",
        value: "Open to internships, freelance, and collaboration",
        href: null,
    },
];

const socialLinks = [
    { href: "https://github.com/Off-Aditya", icon: GithubIcon, label: "GitHub" },
    { href: "https://www.linkedin.com/in/aditya-singh-959a31330/", icon: LinkedInIcon, label: "LinkedIn" },
    { href: "https://x.com/singh_343", icon: TwitterIcon, label: "X (Twitter)" },
];

const sectionAnimation = {
    initial: { y: 24, opacity: 0 },
    whileInView: { y: 0, opacity: 1 },
    transition: { duration: 0.6, ease: "easeOut" },
    viewport: { once: true },
};

const Contact = () => {
    const formRef = useRef(null);
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitStatus, setSubmitStatus] = useState(null);

    const handleSubmit = (e) => {
        e.preventDefault();
        setIsSubmitting(true);

        emailjs
            .sendForm(
                process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID,
                process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID,
                formRef.current,
                process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY
            )
            .then(
                () => {
                    setSubmitStatus({
                        type: "success",
                        message: "Message sent successfully! I'll get back to you soon.",
                    });
                    formRef.current.reset();
                    setIsSubmitting(false);
                },
                (error) => {
                    console.error(error);
                    setSubmitStatus({
                        type: "error",
                        message: "Failed to send message. Please try again.",
                    });
                    setIsSubmitting(false);
                }
            );
    };

    return (
        <>
            <Head>
                <title>Contact | Aditya Singh</title>
                <meta
                    name="description"
                    content="Contact Aditya Singh for frontend, AI/ML, and full-stack collaboration."
                />
            </Head>

            <TransitionEffect />
            <main className="w-full mb-16 flex flex-col items-center justify-center bg-light text-dark dark:bg-dark dark:text-light">
                <Layout className="pt-10 md:pt-16">
                    <AnimatedText
                        text="Let's Build Something Meaningful."
                        className="mb-10 !text-4xl sm:!text-6xl md:mb-14 lg:!text-7xl"
                    />

                    <div className="grid w-full grid-cols-12 gap-6 md:gap-10">
                        <motion.section
                            {...sectionAnimation}
                            className="col-span-12 rounded-3xl border border-dark bg-light p-6 shadow-[8px_8px_0_#1b1b1b] dark:border-light dark:bg-dark dark:shadow-[8px_8px_0_#f5f5f5] md:p-8 lg:col-span-7 lg:p-10"
                        >
                            <h2 className="text-3xl font-bold text-dark dark:text-light sm:text-4xl">
                                Get In Touch
                            </h2>

                            <p className="mt-4 text-base leading-relaxed text-dark/80 dark:text-light/80 sm:text-lg">
                                I enjoy building modern web applications and AI-enabled products.
                                If you have a project, role, or collaboration idea, send a
                                message and I will get back as soon as possible.
                            </p>

                            <ul className="mt-8 space-y-5">
                                {contactPoints.map((point) => (
                                    <li key={point.label}>
                                        <p className="text-sm uppercase tracking-wide text-dark/60 dark:text-light/60">
                                            {point.label}
                                        </p>

                                        {point.href ? (
                                            <Link
                                                href={point.href}
                                                className="break-all text-lg font-semibold underline underline-offset-4 transition-colors hover:text-primary dark:hover:text-primaryDark sm:break-normal"
                                            >
                                                {point.value}
                                            </Link>
                                        ) : (
                                            <p className="text-lg font-semibold text-dark dark:text-light">
                                                {point.value}
                                            </p>
                                        )}
                                    </li>
                                ))}
                            </ul>

                            <div className="mt-10 flex flex-wrap items-center gap-5">
                                {socialLinks.map((item) => {
                                    const Icon = item.icon;
                                    return (
                                        <motion.a
                                            key={item.label}
                                            href={item.href}
                                            target="_blank"
                                            rel="noreferrer"
                                            whileHover={{ y: -2 }}
                                            whileTap={{ scale: 0.95 }}
                                            className="w-7 text-dark hover:text-primary transition-colors dark:text-light dark:hover:text-primaryDark"
                                        >
                                            <Icon />
                                        </motion.a>
                                    );
                                })}
                            </div>
                        </motion.section>

                        <motion.section
                            {...sectionAnimation}
                            className="col-span-12 rounded-3xl border border-dark bg-light p-6 shadow-[8px_8px_0_#1b1b1b] dark:border-light dark:bg-dark dark:shadow-[8px_8px_0_#f5f5f5] md:p-8 lg:col-span-5 lg:p-10"
                        >
                            <h3 className="text-2xl font-bold text-dark dark:text-light sm:text-3xl">
                                What I Can Help With
                            </h3>

                            <ul className="mt-6 space-y-3 text-dark/80 dark:text-light/80">
                                <li>Frontend apps with React.js and Next.js</li>
                                <li>AI/ML dashboards and data-driven interfaces</li>
                                <li>Full-stack product features and integrations</li>
                                <li>Hackathon and MVP-focused rapid builds</li>
                            </ul>

                            <div className="mt-10 flex flex-col gap-4">
                                <Link
                                    href="mailto:official.aditya.singh.343@gmail.com"
                                    className="inline-flex w-full items-center justify-center rounded-lg border-2 border-dark bg-dark px-6 py-3 text-base font-semibold text-light transition-colors hover:bg-light hover:text-dark dark:border-light dark:bg-light dark:text-dark dark:hover:bg-dark dark:hover:text-light sm:text-lg"
                                >
                                    Send an Email
                                </Link>

                                <Link
                                    href="/projects"
                                    className="inline-flex w-full items-center justify-center rounded-lg border-2 border-dark px-6 py-3 text-base font-semibold text-dark transition-colors hover:bg-dark hover:text-light dark:border-light dark:text-light dark:hover:bg-light dark:hover:text-dark sm:text-lg"
                                >
                                    View Projects
                                </Link>
                            </div>
                        </motion.section>
                    </div>

                    <motion.section className="mt-16 w-full rounded-3xl border border-solid border-dark bg-light p-6 shadow-[8px_8px_0_#1b1b1b] dark:border-light dark:bg-dark dark:shadow-[8px_8px_0_#f5f5f5] md:p-8 lg:p-10">
                        <h2 className="mb-8 text-3xl font-bold text-dark dark:text-light sm:text-4xl">
                            Send Me a Message
                        </h2>

                        <form ref={formRef} onSubmit={handleSubmit} className="w-full">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                                <div className="flex flex-col">
                                    <label className="text-sm uppercase tracking-wide text-dark/60 mb-2 dark:text-light/60">
                                        Name
                                    </label>
                                    <input
                                        type="text"
                                        name="name"
                                        required
                                        placeholder="Your Name"
                                        className="px-4 py-3 bg-light border border-dark rounded-lg dark:bg-dark dark:border-light"
                                    />
                                </div>

                                <div className="flex flex-col">
                                    <label className="text-sm uppercase tracking-wide text-dark/60 mb-2 dark:text-light/60">
                                        Email
                                    </label>
                                    <input
                                        type="email"
                                        name="email"
                                        required
                                        placeholder="your.email@example.com"
                                        className="px-4 py-3 bg-light border border-dark rounded-lg dark:bg-dark dark:border-light"
                                    />
                                </div>
                            </div>

                            <div className="flex flex-col mb-6">
                                <label className="text-sm uppercase tracking-wide text-dark/60 mb-2 dark:text-light/60">
                                    Subject
                                </label>
                                <input
                                    type="text"
                                    name="subject"
                                    required
                                    placeholder="What is this about?"
                                    className="px-4 py-3 bg-light border border-dark rounded-lg dark:bg-dark dark:border-light"
                                />
                            </div>

                            <div className="flex flex-col mb-6">
                                <label className="text-sm uppercase tracking-wide text-dark/60 mb-2 dark:text-light/60">
                                    Message
                                </label>
                                <textarea
                                    name="message"
                                    required
                                    rows="6"
                                    placeholder="Tell me more about your project..."
                                    className="px-4 py-3 bg-light border border-dark rounded-lg resize-none dark:bg-dark dark:border-light"
                                />
                            </div>

                            {submitStatus && (
                                <div
                                    className={`mb-6 p-4 rounded-lg text-center font-semibold ${submitStatus.type === "success"
                                        ? "bg-green-100 text-green-800 dark:bg-green-900/40 dark:text-green-300"
                                        : "bg-red-100 text-red-800 dark:bg-red-900/40 dark:text-red-300"
                                        }`}
                                >
                                    {submitStatus.message}
                                </div>
                            )}

                            <motion.button
                                type="submit"
                                disabled={isSubmitting}
                                whileHover={{ scale: 1.02 }}
                                whileTap={{ scale: 0.98 }}
                                className="w-full md:w-auto px-8 py-3 rounded-lg bg-dark text-light font-semibold border-2 border-dark hover:bg-light hover:text-dark transition-colors disabled:opacity-50 dark:bg-light dark:text-dark dark:border-light dark:hover:bg-dark dark:hover:text-light"
                            >
                                {isSubmitting ? "Sending..." : "Send Message"}
                            </motion.button>
                        </form>
                    </motion.section>
                </Layout>
            </main>
        </>
    );
};

export default Contact;
