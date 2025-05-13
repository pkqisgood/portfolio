'use client';

import { motion } from "framer-motion";
import Image from "next/image";

interface ProjectItemProps {
    title: string;
    description: string;
    imageSrc: string;
    techStack?: string[];
    alias: string;
}

export default function ProjectItem({ title, description, imageSrc, techStack, alias }: ProjectItemProps) {
    return (
        <motion.a
            href={`/projects/${alias}`}
            className='pt-7 px-7 md:pt-8 md:px-8 project-item group rounded-2xl hover:shadow-lg transition relative overflow-hidden flex flex-col justify-between'
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, margin: "-50px 0px" }}
            whileHover={{ scale: 1.01 }}
            transition={{
                duration: 0.6,
                scale: { type: "spring", stiffness: 300 },
            }}
        >
            <div>
                <h2 className="text-2xl font-semibold mb-2">{title}</h2>
                <p className="text-(--secondary-color) mb-4">{description}</p>

                {techStack && (
                    <div className="flex flex-wrap gap-2 mb-4">
                        {techStack.map((tech, index) => (
                            <span
                                key={index}
                                className="bg-[#f0f8fe] px-2 py-1 rounded-xl text-sm"
                            >
                                {tech}
                            </span>
                        ))}
                    </div>
                )}
            </div>
            <div className="img-wrapper transition-transform duration-500 ease-in-out group-hover:translate-y-2" >
                <Image
                    src={imageSrc}
                    alt={title}
                    width={600}
                    height={400}
                    className="rounded-xl"
                />
            </div>
        </motion.a>
    );
}
