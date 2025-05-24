'use client'

import ProjectLayout from "@/components/ProjectLayout";
import { projects } from "@/data/projects";
import Image from "next/image";

export default function AzeoPage() {
    const project = projects.find(p => p.id == 'azeo');
    return (
        <ProjectLayout
            title={project?.name as string}
            year={project?.year as string}
            role={project?.role as string}
            techStack={project?.techStack}
            link={project?.link}
        >
            <div className="mt-8">
                <div className="w-full rounded-lg overflow-hidden mt-8">
                    <Image
                        src="/images/projects/azeo/summary.png"
                        alt="azeo home"
                        width={800}
                        height={500}
                        className="w-full h-auto rounded-lg"
                    />
                </div>
                <p className="p1 mt-8">
                    A corporate website for a talent development company. Built based on Figma design with fully responsive support and a
                    custom Laravel CMS for content management.ging projects and other content.
                </p>
                <div className="w-3/4 lg:w-1/2 mx-auto overflow-hidden mt-8">
                    <video autoPlay muted loop playsInline className="w-full h-auto rounded-lg">
                        <source src="/images/projects/azeo/home.mp4" type="video/mp4" />
                    </video>
                </div>
                <ul className="p1 mt-8 body-font list-disc">
                    <li>
                        🔧 <b>Frontend</b>: Developed fully responsive layouts based on Figma designs, optimized for both desktop and mobile.
                    </li>
                    <li>
                        🛠️ <b>Backend CMS</b>: Built a Laravel-based content management system to manage review.
                    </li>
                    <li>
                        ✨ <b>UI Animation</b>: Added smooth scroll-triggered and hover animations using native JavaScript and CSS for improved interactivity.
                    </li>
                    <li>
                        🔄 <b>Reusable Elements</b>: Integrated and customized selected components from a purchased HTML template to align with the design.
                    </li>
                </ul>
                <div className="w-full mx-auto overflow-hidden mt-8">
                    <video autoPlay muted loop playsInline className="w-full h-auto rounded-lg">
                        <source src="/images/projects/azeo/about.mp4" type="video/mp4" />
                    </video>
                </div>
                <div className="w-full lg:w-3/4 xl:w-1/2 mx-auto px-4 rounded-lg overflow-hidden">
                    <Image
                        src="/images/projects/azeo/mobile-home.png"
                        alt="azeo-mobile-screens"
                        width={800}
                        height={500}
                        className="w-full h-auto rounded-lg"
                    />
                </div>
                <div className="w-full lg:w-3/4 mx-auto px-4 rounded-lg overflow-hidden">
                    <Image
                        src="/images/projects/azeo/mobile-screens.png"
                        alt="azeo-mobile-screens"
                        width={800}
                        height={500}
                        className="w-full h-auto rounded-lg"
                    />
                </div>
            </div>
        </ProjectLayout>
    )
}