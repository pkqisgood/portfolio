'use client'

import ProjectLayout from "@/components/ProjectLayout";
import { projects } from "@/data/projects";
import Image from "next/image";

export default function DcoeurPage() {
    const project = projects.find(p => p.id == 'dcoeur');
    return (
        <ProjectLayout
            title={project?.name as string}
            year={project?.year as string}
            role={project?.role as string}
            techStack={project?.techStack}
            link={project?.link}
        >
            <div className="mt-8">
                <div className="w-full mx-auto rounded-lg overflow-hidden mt-5">
                    <Image
                        src="/images/projects/dcoeur/browser-home.png"
                        alt="Browser home"
                        width={2760}
                        height={1768}
                        className="w-full h-auto rounded-lg"
                    />
                </div>
                <p className="p1 mt-8">
                    A multilingual, responsive product showcase website for a luxury haircare brand. I developed key pages and layout components based on Figma designs,
                    implemented a custom CMS, and designed the backend database structure.
                </p>
                <div className="w-full mx-auto rounded-lg overflow-hidden mt-8">
                    <Image
                        src="/images/projects/dcoeur/desktop-screens.png"
                        alt="dcoeur-mobile-screens"
                        width={6400}
                        height={4800}
                        className="w-full h-auto rounded-lg"
                    />
                </div>
                <ul className="p1 mt-8 body-font list-disc">
                    <li>
                        Developed <b>homepage, product listing, about us,</b> and shared layout components (header, footer, mobile navbar)
                    </li>
                    <li>
                        Fully responsive across <b>desktop and mobile</b>
                    </li>
                    <li>
                        Followed <b>Figma designs</b> precisely for visual consistency
                    </li>
                    <li>
                        Implemented <b>multilingual support</b>
                    </li>
                    <li>
                        Integrated with a <b>custom CMS</b> for managing content and products
                    </li>
                    <li>
                        Designed and structured the <b>database schema</b>
                    </li>
                </ul>
                <div className="w-full mx-auto px-4 rounded-lg overflow-hidden mt-8">
                    <picture>
                        <source
                            media="(max-width: 1023px)"
                            srcSet="/images/projects/dcoeur/mobile-screens-small.png"
                        />
                        <Image
                            src="/images/projects/dcoeur/mobile-screens.png"
                            alt="dcoeur-mobile-screens"
                            width={1920}
                            height={1080}
                            className="w-full h-auto rounded-lg"
                        />
                    </picture>
                </div>
            </div>
        </ProjectLayout>
    );
}