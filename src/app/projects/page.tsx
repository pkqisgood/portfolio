'use client';

import { motion } from 'framer-motion';
import ProjectItem from './../../components/ProjectItem';

export default function ProjectsPage() {
    return (
        <section id="projects" className="min-h-screen px-8 pt-50 pb-20 start-nav">
            <div className="container m-auto">
                <motion.h1
                    className='text-6xl md:text-7xl lg:text-8xl xl:text-9xl font-medium mb-20 text-center'
                    initial={{ opacity: 0, y: 40 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                >
                    Projects.&nbsp;
                    <motion.span
                        className="absolute"
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
                    initial="hidden"
                    animate="show"
                    variants={{
                        hidden: {},
                        show: {
                            transition: {
                                staggerChildren: 0.15,
                            },
                        },
                    }}
                >
                    <ProjectItem
                        title="Shandon Birdnest"
                        description="An e-commerce platform for bird's nest products. I developed the full frontend with Laravel backend integration."
                        imageSrc="/images/projects/shandon/summary.png"
                        techStack={['Laravel', 'jQuery', 'SCSS', 'MySQL', 'SCart']}
                        alias="shandon-birdnest"
                    />

                    <ProjectItem
                        title="Ping-U"
                        description="An warehouse management system."
                        imageSrc="/images/projects/shandon/summary.png"
                        techStack={['Laravel', 'jQuery', 'SCSS', 'MySQL']}
                        alias="pingu"
                    />

                    <ProjectItem
                        title="Rits Website"
                        description="One pager"
                        imageSrc="/images/projects/rits/summary.png"
                        techStack={['Laravel', 'jQuery', 'SCSS', 'MySQL']}
                        alias="rits"
                    />

                    <ProjectItem
                        title="Upstage - Interior Design"
                        description="One pager"
                        imageSrc="/images/projects/upstage/id-summary.png"
                        techStack={['Laravel', 'jQuery', 'SCSS', 'MySQL']}
                        alias="rits"
                    />

                    <ProjectItem
                        title="Upstage - Expo"
                        description="One pager"
                        imageSrc="/images/projects/upstage/expo-summary.png"
                        techStack={['Laravel', 'jQuery', 'SCSS', 'MySQL']}
                        alias="rits"
                    />

                    <ProjectItem
                        title="Azeo"
                        description="One pager"
                        imageSrc="/images/projects/azeo/summary.png"
                        techStack={['Laravel', 'jQuery', 'SCSS', 'MySQL']}
                        alias="rits"
                    />

                    <ProjectItem
                        title="Hellosmile"
                        description="One pager"
                        imageSrc="/images/projects/rits/summary.png"
                        techStack={['Laravel', 'jQuery', 'SCSS', 'MySQL']}
                        alias="rits"
                    />

                    <ProjectItem
                        title="Dcoeur"
                        description="One pager"
                        imageSrc="/images/projects/dcoeur/summary.png"
                        techStack={['Laravel', 'jQuery', 'SCSS', 'MySQL']}
                        alias="rits"
                    />
                </motion.div>
            </div>
        </section >
    )
}