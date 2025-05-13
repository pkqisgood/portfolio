import ProjectLayout from "@/components/ProjectLayout";
import { projects } from "@/data/projects";
import Image from "next/image";

export default function ShandonBirdnestPage() {
    const project = projects.find(p => p.id === "shandon");
    return (
        <ProjectLayout
            title={project?.name as string}
            year={project?.year as string}
            role={project?.role as string}
            techStack={project?.techStack}
            link={project?.link}
        >
            <div className="mt-8">
                <p className="p1">
                    Shandon Birdnest is a fully customized ecommerce platform designed to streamline birdnest tradingwith custom delivery logic and backend management.
                    I handled both frontend and backend development, including payment gateway integration.
                </p>
                <br />
                <ul className="p1 mt-1 body-font list-disc">
                    <li>
                        Developed the user interface for the e-commerce website.
                        <div className="video-container mt-5">
                            <video autoPlay muted loop playsInline className="w-full h-auto">
                                <source src="/images/projects/shandon/video.webm" type="video/webm" />
                            </video>
                        </div>
                    </li>
                    <li className="mt-8">
                        Developed product ordering system with trip-based subscription delivery.
                    </li>
                    <li className="">
                        Implemented <b>postcode-based logic</b>:
                        <ul className="list-[circle] pl-5">
                            <li>
                                Valid delivery dates shown based on postcode
                            </li>
                            <li>
                                Packaging options vary by region
                            </li>
                        </ul>
                        <div className="w-full rounded-lg overflow-hidden mt-5">
                            <Image
                                src="/images/projects/shandon/trip-based-shipping.png"
                                alt="Shandon Birdnest"
                                width={800}
                                height={500}
                                className="w-full h-auto rounded-lg"
                            />
                        </div>
                    </li>
                    <li className="mt-8">
                        Designed <b>promotion engine</b>:
                        <ul className="list-[circle] pl-5">
                            <li>
                                Promo code engine with validation rules
                            </li>
                            <li>
                                Add-on product deals (e.g., Buy A + RMX → Get B)
                            </li>
                            <li>
                                Free gift logic (Buy 2 Get 1 Free, etc.)
                            </li>
                        </ul>
                        <div className="flex flex-wrap -mx-4 mt-5">
                            <div className="w-full lg:w-1/2 px-4 rounded-lg overflow-hidden">
                                <Image
                                    src="/images/projects/shandon/buy-free-promotion.png"
                                    alt="Shandon Birdnest"
                                    width={800}
                                    height={500}
                                    className="w-full h-auto rounded-lg"
                                />
                            </div>
                            <div className="w-full lg:w-1/2 px-4 mt-5 lg:mt-0 rounded-lg overflow-hidden">
                                <Image
                                    src="/images/projects/shandon/topup-promotion.png"
                                    alt="Shandon Birdnest"
                                    width={800}
                                    height={500}
                                    className="w-full h-auto rounded-lg"
                                />
                            </div>
                        </div>
                    </li>
                    <li className="mt-8">
                        Built <b>reward points system</b>: customers earn points from orders and redeem them via cart.
                    </li>
                    <li>
                        Integrated <b>payment gateway(PayPal)</b> and handled order workflows
                    </li>
                    <li>
                        Developed backend panel for admin to manage all the above:
                        <ul className="list-[circle] pl-5">
                            <li>
                                Promotions, rewards, products, delivery trips, etc.
                            </li>
                        </ul>
                    </li>
                </ul>
                {/* <div className="w-full rounded-lg overflow-hidden mt-8">
                    <Image
                        src="/images/projects/shandon/home-full.png"
                        alt="Shandon Birdnest"
                        width={800}
                        height={500}
                        className="w-full h-auto rounded-lg"
                    />
                </div> */}
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