'use client'

import ProjectLayout from "@/components/ProjectLayout";
import { projects } from "@/data/projects";
import Image from "next/image";

export default function IdPage() {
    const project = projects.find(p => p.id == 'id');
    return (
        <ProjectLayout
            title={project?.name as string}
            year={project?.year as string}
            role={project?.role as string}
            techStack={project?.techStack}
            link={project?.link}
        >
            <div className="mt-8">
                <div className="w-full overflow-hidden">
                    <video autoPlay muted loop playsInline className="w-full h-auto rounded-lg">
                        <source src="/images/projects/upstage/id.mp4" type="video/mp4" />
                    </video>
                </div>
                <p className="p1 mt-8">
                    Developed a responsive multi-page company website based on Adobe XD designs. Integrated GSAP animations for interactive transitions and dynamic effects. The site
                    includes a backend CMS for managing portfolios and other content. Some UI elements were adapted from a purchased HTML template for design consistency
                    and efficiency.
                </p>
                <div className="w-full rounded-lg overflow-hidden mt-8">
                    <Image
                        src="/images/projects/upstage/id-desktop-home.png"
                        alt="id desktop home"
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
                    <li>
                        Reused and customized selected components from a commercial HTML template
                    </li>
                </ul>
                <div className="w-full lg:w-1/2 mx-auto px-4 rounded-lg overflow-hidden">
                    <Image
                        src="/images/projects/upstage/id-mobile-home.png"
                        alt="id mobile home"
                        width={800}
                        height={500}
                        className="w-full h-auto rounded-lg"
                    />
                </div>
                <div className="w-full px-4 mt-5 lg:mt-0 rounded-lg overflow-hidden">
                    <Image
                        src="/images/projects/upstage/-id-mobile-screens.png"
                        alt="id-mobile-screens"
                        width={800}
                        height={500}
                        className="w-full h-auto rounded-lg"
                    />
                </div>
                {/* <div className="w-full lg:w-3/4 mx-auto rounded-lg overflow-hidden mt-5">
                    <picture>
                        <source
                            media="(max-width: 768px)"
                            srcSet="/images/projects/upstage/test.png"
                        />

                        <Image
                            src="/images/projects/upstage/h-min.png"
                            alt="Project screenshot"
                            width={800}
                            height={500}
                            className="w-full h-auto rounded-lg"
                            quality={80}
                        />
                    </picture>
                </div> */}
            </div>
        </ProjectLayout>
    )
}