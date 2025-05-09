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
        <div className="project-main container m-auto min-h-screen px-8 pt-60 pb-20 start-nav">
            <motion.h1
                className="project-title text-9xl mb-20 text-center font-bold"
            >
                {title}
            </motion.h1>

            <div className="details-info">
                {link && (

                    <motion.a
                        className="bouncy-element rounded-full flex w-fit m-auto live-link mb-4"
                        target="_blank"
                        href={link}
                        animate={{
                            y: [0, -10, 0],
                        }}
                        transition={{
                            duration: 0.6,
                            repeat: Infinity,
                            repeatType: "loop",
                            ease: "easeInOut",
                        }}
                    >
                        🔗 Live link
                    </motion.a>
                )}
                <div className="flex justify-center gap-10 m-auto">
                    <div className="p-4">
                        <h3 className="text-title">Year</h3>
                        <p className="description">{year}</p>
                    </div>
                    <div className="p-4">
                        <h3 className="text-title">Role</h3>
                        <p className="description">{role}</p>
                    </div>
                    <div className="p-4">
                        <h3 className="text-title">Tech</h3>
                        {techStack && (
                            <div className="flex flex-wrap gap-2 mb-4 tech-wrapper">
                                {techStack.map((tech, index) => (
                                    <span
                                        key={index}
                                        className="px-2 py-1 rounded-full body-font description tech-item"
                                    >
                                        {tech}
                                    </span>
                                ))}
                            </div>
                        )}
                    </div>
                </div>
            </div>
            <div className="project-content">
                {children}
            </div>
        </div>
    )
}