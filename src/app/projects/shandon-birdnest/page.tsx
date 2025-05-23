'use client'

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
                <div className="w-full mx-auto overflow-hidden mt-8">
                    <video autoPlay muted loop playsInline className="w-full h-auto rounded-lg">
                        <source src="/images/projects/shandon/video.webm" type="video/webm" />
                    </video>
                </div>
                <p className="p1 mt-8">
                    Shandon Birdnest is a fully customized ecommerce platform designed to streamline birdnest trading with custom delivery logic and backend management.
                    I handled both frontend and backend development, including advanced subscription-style ordering, payment gateway integration, and a dynamic rewards and promotions system.
                    The platform also supports multilingual and multicurrency configurations, with a custom CMS for product and order management.
                </p>
                <ul className="p1 mt-1 body-font list-disc mt-8">
                    <li>
                        Developed the user interface for the e-commerce website.
                        {/* <div className="video-container mt-5">
                            <video autoPlay muted loop playsInline className="w-full h-auto">
                                <source src="/images/projects/shandon/video.webm" type="video/webm" />
                            </video>
                        </div> */}
                        <div className="w-full lg:w-3/4 mx-auto rounded-lg overflow-hidden">
                            <Image
                                src="/images/projects/shandon/home.png"
                                alt="Shandon Birdnest"
                                width={2760}
                                height={1720}
                                className="w-full h-auto rounded-lg"
                            />
                        </div>
                        <div className="w-full lg:w-3/4 mx-auto rounded-lg overflow-hidden">
                            <Image
                                src="/images/projects/shandon/hero-section.png"
                                alt="Shandon Birdnest"
                                width={2760}
                                height={1720}
                                className="w-full h-auto rounded-lg"
                            />
                        </div>
                    </li>
                    <li className="mt-5">
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
                        <div className="w-full lg:w-3/4 mx-auto rounded-lg overflow-hidden mt-8">
                            <Image
                                src="/images/projects/shandon/trip-based-shipping.png"
                                alt="Shandon Birdnest"
                                width={800}
                                height={500}
                                className="w-full h-auto rounded-lg"
                            />
                            <p className="body-font p1 text-(--secondary-color) mt-2">Trip details section ⤴︎</p>
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
                                    width={1800}
                                    height={1200}
                                    className="w-full h-auto rounded-lg"
                                />
                                <p className="body-font p1 text-(--secondary-color) mt-2">Cart (Buy X Free X) ⤴︎</p>
                            </div>
                            <div className="w-full lg:w-1/2 px-4 mt-5 lg:mt-0 rounded-lg overflow-hidden">
                                <Image
                                    src="/images/projects/shandon/topup-promotion.png"
                                    alt="Shandon Birdnest"
                                    width={800}
                                    height={500}
                                    className="w-full h-auto rounded-lg"
                                />
                                <p className="body-font p1 text-(--secondary-color) mt-2">Cart (Topup RMX to get A) ⤴︎</p>
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
                {/* <div className="w-fit m-auto rounded-lg overflow-hidden mt-8">
                    <Image
                        src="/images/projects/shandon/screens.png"
                        alt="Shandon Birdnest"
                        width={800}
                        height={500}
                        className="w-full h-auto rounded-lg"
                    />
                </div> */}
                <div className="w-full lg:w-3/4 mx-auto rounded-lg overflow-hidden mt-8">
                    <Image
                        src="/images/projects/shandon/product-list.png"
                        alt="Shandon Birdnest"
                        width={2760}
                        height={1720}
                        className="w-full h-auto rounded-lg"
                    />
                </div>
                <div className="w-full lg:w-3/4 mx-auto rounded-lg overflow-hidden mt-8">
                    <Image
                        src="/images/projects/shandon/product-details-1.png"
                        alt="Shandon Birdnest"
                        width={2760}
                        height={1720}
                        className="w-full h-auto rounded-lg"
                    />
                </div>
                <div className="flex flex-wrap -mx-4 mt-8">
                    {/* <div className="w-full lg:w-1/2 mx-auto px-4 rounded-lg overflow-hidden mt-8">
                        <Image
                            src="/images/projects/shandon/rewards.png"
                            alt="shandon"
                            width={841}
                            height={1699}
                            className="w-full h-auto rounded-lg"
                        />
                    </div>
                    <div className="w-full lg:w-1/2 mx-auto px-4 rounded-lg overflow-hidden mt-8">
                        <Image
                            src="/images/projects/shandon/product-details-2.png"
                            alt="shandon"
                            width={841}
                            height={1699}
                            className="w-full h-auto rounded-lg"
                        />
                    </div> */}
                    <div className="w-3/4 md:w-1/2 lg:w-1/3 xl:w-1/4 mx-auto px-4 rounded-lg overflow-hidden mt-8">
                        <Image
                            src="/images/projects/shandon/mobile-1.png"
                            alt="shandon"
                            width={841}
                            height={1699}
                            className="w-full h-auto rounded-lg"
                        />
                    </div>
                    <div className="w-3/4 md:w-1/2 lg:w-1/3 xl:w-1/4 mx-auto px-4 rounded-lg overflow-hidden mt-8">
                        <Image
                            src="/images/projects/shandon/mobile-2.png"
                            alt="shandon"
                            width={841}
                            height={1699}
                            className="w-full h-auto rounded-lg"
                        />
                    </div>
                    <div className="w-3/4 md:w-1/2 lg:w-1/3 xl:w-1/4 mx-auto px-4 rounded-lg overflow-hidden mt-8">
                        <Image
                            src="/images/projects/shandon/mobile-3.png"
                            alt="shandon"
                            width={841}
                            height={1699}
                            className="w-full h-auto rounded-lg"
                        />
                    </div>
                    <div className="w-3/4 md:w-1/2 lg:w-1/3 xl:w-1/4 mx-auto px-4 rounded-lg overflow-hidden mt-8">
                        <Image
                            src="/images/projects/shandon/mobile-4.png"
                            alt="shandon"
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