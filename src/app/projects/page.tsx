'use client';

import { motion } from 'framer-motion';
import ProjectItem from '@/components/ProjectItem';
import { projects } from '@/data/projects';
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useRef } from 'react';

gsap.registerPlugin(ScrollTrigger);

export default function ProjectsPage() {
    const itemsRef = useRef<(HTMLAnchorElement | null)[]>([]);

    // useEffect(() => {
    //     gsap.from(itemsRef.current, {
    //         scrollTrigger: {
    //             trigger: ".projects-wrapper", // Trigger the scroll animation for the entire wrapper
    //             start: "top 100%",
    //             end: "bottom 50%", // Adjust this to your preference
    //             scrub: true, // Scroll-based animation
    //             markers: true, // Keep this to debug
    //         },
    //         duration: 0.4,
    //         ease: "circ.out",
    //         yPercent: 100,
    //         opacity: 0,
    //         stagger: 0.1, // Stagger delay between each item
    //     });
    // }, [projects]);

    return (
        <section id="projects" className="min-h-screen px-8 pt-40 md:pt-50 pb-20 start-nav">
            <div className="container m-auto">
                <motion.h1
                    className='text-5xl md:text-7xl lg:text-8xl xl:text-9xl font-medium mb-14 md:mb-20 text-center'
                    initial={{ opacity: 0, y: 40 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                >
                    Projects.&nbsp;
                    <motion.span
                        className="absolute hidden md:inline-block"
                        initial={{ opacity: 0, scale: 0 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{
                            duration: 0.4,
                            scale: { type: "spring", visualDuration: 0.4, bounce: 0.5 },
                        }}
                    >
                        🚀
                    </motion.span>
                </motion.h1>

                <div
                    className="grid md:grid-cols-2 gap-8 projects-wrapper"
                >
                    {projects.map((project, i) => (
                        <ProjectItem
                            key={project.id}
                            ref={(el) => {
                                itemsRef.current[i] = el;
                            }}
                            title={project.name}
                            {...project}
                        />
                    ))}
                </div>
            </div>
        </section >
    )
}