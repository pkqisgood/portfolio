'use client'

import ProjectLayout from "@/components/ProjectLayout";
import { projects } from "@/data/projects";
import Image from "next/image";

export default function RitsPage() {
    const project = projects.find(p => p.id == 'rits');
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
                        <source src="/images/projects/rits/video.mp4" type="video/mp4" />
                    </video>
                </div>
                <p className="p1 mt-8">
                    A simple, responsive one-page company website built during my internship. Developed based on Adobe XD design with multilingual support and clean UI implementation.
                </p>
                <div className="w-full mx-auto rounded-lg overflow-hidden mt-8">
                    <Image
                        src="/images/projects/rits/browser-home.png"
                        alt="rits"
                        width={2760}
                        height={1720}
                        className="w-full h-auto rounded-lg"
                    />
                </div>
                <div className="w-full mx-auto rounded-lg overflow-hidden mt-8">
                    <Image
                        src="/images/projects/rits/browser-ingredients.png"
                        alt="rits"
                        width={2760}
                        height={1720}
                        className="w-full h-auto rounded-lg"
                    />
                </div>
                <ul className="p1 mt-8 body-font list-disc">
                    <li>
                        Fully responsive one-page layout (desktop & mobile)
                    </li>
                    <li>
                        Followed Adobe XD design precisely
                    </li>
                    <li>
                        Implemented multilanguage support
                    </li>
                    <li>
                        My first production project during internship — sharpened frontend skills and attention to detail
                    </li>
                </ul>
                <div className="w-full mx-auto rounded-lg overflow-hidden mt-8">
                    <Image
                        src="/images/projects/rits/device.png"
                        alt="rits"
                        width={2016}
                        height={1270}
                        className="w-full h-auto rounded-lg"
                    />
                </div>
                <div className="flex flex-wrap -mx-4 mt-8">
                    <div className="w-3/4 md:w-1/2 lg:w-1/3 xl:w-1/4 mx-auto px-4 rounded-lg overflow-hidden">
                        <Image
                            src="/images/projects/rits/mobile-1.png"
                            alt="rits"
                            width={841}
                            height={1699}
                            className="w-full h-auto rounded-lg"
                        />
                    </div>
                    <div className="w-3/4 md:w-1/2 lg:w-1/3 xl:w-1/4 mx-auto px-4 rounded-lg overflow-hidden mt-8 md:mt-0">
                        <Image
                            src="/images/projects/rits/mobile-2.png"
                            alt="rits"
                            width={841}
                            height={1699}
                            className="w-full h-auto rounded-lg"
                        />
                    </div>
                    <div className="w-3/4 md:w-1/2 lg:w-1/3 xl:w-1/4 mx-auto px-4 rounded-lg overflow-hidden mt-8 lg:mt-0">
                        <Image
                            src="/images/projects/rits/mobile-3.png"
                            alt="rits"
                            width={841}
                            height={1699}
                            className="w-full h-auto rounded-lg"
                        />
                    </div>
                    <div className="w-3/4 md:w-1/2 lg:w-1/3 xl:w-1/4 mx-auto px-4 rounded-lg overflow-hidden mt-8 xl:mt-0">
                        <Image
                            src="/images/projects/rits/mobile-4.png"
                            alt="rits"
                            width={841}
                            height={1699}
                            className="w-full h-auto rounded-lg"
                        />
                    </div>
                </div>
            </div>
        </ProjectLayout>
    );
}