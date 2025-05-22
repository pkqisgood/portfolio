'use client'

import ProjectLayout from "@/components/ProjectLayout";
import { projects } from "@/data/projects";
import Image from "next/image";

export default function HellomilePage() {
    const project = projects.find(p => p.id == 'hellosmile');
    return (
        <ProjectLayout
            title={project?.name as string}
            year={project?.year as string}
            role={project?.role as string}
            techStack={project?.techStack}
            link={project?.link}
        >
            <div className="mt-8">
                <div className="w-full mx-auto overflow-hidden mt-8">
                    <video autoPlay muted loop playsInline className="w-full h-auto rounded-lg">
                        <source src="/images/projects/hellosmile/video.webm" type="video/webm" />
                    </video>
                </div>
                <p className="p1 mt-8">
                    Developed a responsive, multi-language website for Hello Smile Hong Kong, a non-profit organization dedicated to
                    improving oral health among underserved communities in Hong Kong. The website provides information on their mission,
                    programs, events, and offers a platform for community engagement.
                </p>
                <div className="w-full mx-auto rounded-lg overflow-hidden mt-5">
                    <Image
                        src="/images/projects/hellosmile/group.png"
                        alt="Desktop screens"
                        width={800}
                        height={500}
                        className="w-full h-auto rounded-lg"
                    />
                </div>
                <ul className="p1 mt-8 body-font list-disc">
                    <li>
                        <b>Frontend Development</b>: Implemented responsive layouts based on Figma designs, ensuring optimal viewing across devices.
                    </li>
                    <li>
                        <b>Multi-language Support</b>: Integrated English, Simplified Chinese, and Traditional Chinese language options.
                    </li>
                    <li>
                        <b>Backend CMS</b>: Developed a custom Laravel-based content management system to manage blog posts, events, and news.
                    </li>
                    <li>
                        <b>Template Integration</b>: Customized selected components from a purchased HTML template to align with the organization&apos;s branding.
                    </li>
                </ul>
                <div className="w-full lg:w-3/4 mx-auto px-4 rounded-lg overflow-hidden mt-8">
                    <picture>
                        <source
                            media="(max-width: 1023px)"
                            srcSet="/images/projects/hellosmile/mobile-screens-small.png"
                        />
                        <Image
                            src="/images/projects/hellosmile/mobile-screens.png"
                            alt="hellosmile-mobile-screens"
                            width={800}
                            height={500}
                            className="w-full h-auto rounded-lg"
                        />
                    </picture>
                </div>
            </div>
        </ProjectLayout>
    );
}