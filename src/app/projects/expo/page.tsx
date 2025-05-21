'use client'

import ProjectLayout from "@/components/ProjectLayout";
import { projects } from "@/data/projects";
import Image from "next/image";

export default function ExpoPage() {
    const project = projects.find(p => p.id == 'expo');
    return (
        <ProjectLayout
            title={project?.name as string}
            year={project?.year as string}
            role={project?.role as string}
            techStack={project?.techStack}
            link={project?.link}
        >
            <div className="mt-8">
                <div className="w-full rounded-lg overflow-hidden">
                    <video autoPlay muted loop playsInline className="w-full h-auto">
                        <source src="/images/projects/upstage/expo.mp4" type="video/mp4" />
                    </video>
                </div>
                <p className="p1 mt-8">
                    Developed a responsive multi-page company website based on Adobe XD designs. Integrated GSAP animations for interactive transitions and dynamic effects. The site
                    includes a backend CMS for managing projects and other content.
                </p>
                <div className="w-full rounded-lg overflow-hidden mt-8">
                    <Image
                        src="/images/projects/upstage/expo-desktop-home.png"
                        alt="expo desktop home"
                        width={800}
                        height={500}
                        className="w-full h-auto rounded-lg"
                    />
                </div>
                <ul className="p1 mt-8 body-font list-disc">
                    <li>
                        Translated Adobe XD designs into responsive frontend (desktop + mobile)
                    </li>
                    <li>
                        Implemented animations using GSAP for smooth scroll, fade-ins, and element transitions
                    </li>
                    <li>
                        Built backend CRUD functionalities for portfolio and other content modules
                    </li>
                </ul>
                <div className="w-full lg:w-3/4 xl:w-1/2 mx-auto px-4 rounded-lg overflow-hidden">
                    <Image
                        src="/images/projects/upstage/expo-mobile-screens.png"
                        alt="expo-mobile-screens"
                        width={800}
                        height={500}
                        className="w-full h-auto rounded-lg"
                    />
                </div>
            </div>
        </ProjectLayout>
    )
}