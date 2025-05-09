import ProjectLayout from "@/components/ProjectLayout";
import Image from "next/image";

export default function ShandonBirdnestPage() {
    return (
        <ProjectLayout
            title="Shandon Birdnest"
            year="2022 ~ 2024"
            role="Full stack developer"
            techStack={['Laravel', 'jQuery', 'SCSS', 'MySQL', 'SCart']}
            link="https://shandonbirdnest.com"
        >
            <div className="mt-8">
                <p className="text-lg">
                    Shandon Birdnest is a fully customized ecommerce platform designed to streamline birdnest trading.
                    Features include real-time inventory, custom order processing, and multi-currency payment gateways.
                    
                </p>
                <div className="video-container mt-8">
                    <video autoPlay muted loop playsInline className="w-full h-auto">
                        <source src="/images/projects/shandon/video.webm" type="video/webm" />
                    </video>
                </div>
                <div className="w-full rounded-lg overflow-hidden mt-8">
                    <Image
                        src="/images/projects/shandon/home-full.png"
                        alt="Shandon Birdnest"
                        width={800}
                        height={500}
                        className="w-full h-auto rounded-lg"
                    />
                </div>
                <div className="w-fit m-auto rounded-lg overflow-hidden mt-8">
                    <Image
                        src="/images/projects/shandon/mobile-home.png"
                        alt="Shandon Birdnest"
                        width={800}
                        height={500}
                        className="w-full h-auto rounded-lg"
                    />
                </div>
            </div>
        </ProjectLayout>
    );
}