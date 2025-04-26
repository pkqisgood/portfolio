'use client';

import { motion } from "framer-motion";
import Image from "next/image";

interface ProjectItemProps {
    title: string;
    description: string;
    imageSrc: string;
    techStack?: string[];
}

export default function ProjectItem({ title, description, imageSrc, techStack }: ProjectItemProps) {
    return (
        <motion.div
            className='p-8 project-item group rounded-2xl hover:shadow-lg transition relative overflow-hidden'
            whileHover={{ scale: 1.01 }}
            transition={{
                duration: 0.6,
                scale: { type: "spring", stiffness: 300 },
            }}
        >
            <h2 className="text-2xl font-semibold mb-2">{title}</h2>
            <p className="text-gray-600 dark:text-gray-400 mb-4">{description}</p>

            {techStack && (
                <div className="flex flex-wrap gap-2 mb-4">
                    {techStack.map((tech, index) => (
                        <span
                            key={index}
                            className="bg-[#f0f8fe] px-2 py-1 rounded text-sm"
                        >
                            {tech}
                        </span>
                    ))}
                </div>
            )}

            <div className="img-wrapper transition-transform duration-500 ease-in-out group-hover:-translate-y-2" >
                <Image
                    src={imageSrc}
                    alt={title}
                    width={600}
                    height={400}
                    className="rounded-xl"
                />
            </div>
        </motion.div>
    );
}
