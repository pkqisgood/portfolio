'use client'

import { motion } from "framer-motion";
import { ReactNode } from "react";

interface ProjectLayoutProps {
    title: string;
    year: string;
    role: string;
    techStack?: string[];
    link?: string;
    children: ReactNode;
}

export default function ProjectLayout({ title, year, role, techStack, link, children }: ProjectLayoutProps) {
    return (
        <div className="project-main container m-auto min-h-screen px-8 pt-35 md:pt-50 pb-20 start-nav">
            <motion.h1
                className="project-title text-5xl md:text-7xl lg:text-8xl xl:text-9xl mb-14 md:mb-20 text-center font-bold"
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
            >
                {title}
            </motion.h1>

            <div className="details-info">
                {link && (
                    <motion.a
                        className="bouncy-element rounded-full flex w-fit m-auto live-link mb-4"
                        target="_blank"
                        href={link}
                        style={{ transformOrigin: "center" }}
                        initial={{opacity: 0, y: 20}}
                        animate={{
                            opacity: 1,
                            y: 0,
                            rotate: [0, -6, 6, -6, 6, 0], // Left-right-left-right-center
                        }}
                        transition={{
                            opacity: { duration: 0.6, ease: "easeOut" },
                            y: { duration: 0.6, ease: "easeOut" },
                            rotate: {
                                times: [0, 0.2, 0.4, 0.6, 0.8, 1],
                                duration: 1,
                                repeat: Infinity,
                                repeatDelay: 0.5,
                                ease: "easeInOut",
                            }
                        }}
                    >
                        🔗 Live link
                    </motion.a>
                )}
                <motion.div
                    className="flex sm:justify-center gap-2 xxl:gap-10 m-auto flex-wrap sm:flex-nowrap"
                    initial={{ opacity: 0, y: 40 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.5 }}
                >
                    <div className="p-2 md:p-4">
                        <h3 className="text-title p1">Year</h3>
                        <p className="description p1">{year}</p>
                    </div>
                    <div className="p-2 md:p-4">
                        <h3 className="text-title p1">Role</h3>
                        <p className="description p1">{role}</p>
                    </div>
                    <div className="p-2 md:p-4">
                        <h3 className="text-title p1">Tech</h3>
                        {techStack && (
                            <motion.div
                                className="flex flex-wrap gap-2 mb-4 tech-wrapper"
                                variants={{
                                    hidden: {},
                                    show: {
                                        transition: {
                                            delayChildren: 0.8,
                                            staggerChildren: 0.1
                                        }
                                    }
                                }}
                                initial="hidden"
                                animate="show"
                            >
                                {techStack.map((tech, index) => (
                                    <motion.span
                                        key={index}
                                        className="px-2 py-1 rounded-full body-font description p1 tech-item"
                                        variants={{
                                            hidden: { opacity: 0, y: 10 },
                                            show: { opacity: 1, y: 0 }
                                        }}
                                    >
                                        {tech}
                                    </motion.span>
                                ))}
                            </motion.div>
                        )}
                    </div>
                </motion.div>
            </div>
            <div className="project-content">
                {children}
            </div>
        </div>
    )
}