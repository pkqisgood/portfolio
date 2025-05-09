'use client';

import { motion } from 'framer-motion';
import ProjectItem from '@/components/ProjectItem';
import { projects } from '@/data/projects';

export default function ProjectsPage() {
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

                <motion.div
                    className="grid md:grid-cols-2 gap-8"
                >
                    {projects.map((project) => (
                        <ProjectItem key={project.id}
                            title={project.name}
                            description={project.description}
                            imageSrc={project.imageSrc}
                            techStack={project.techStack}
                            alias={project.alias}
                        />
                    ))}
                </motion.div>
            </div>
        </section >
    )
}