/* eslint-disable @next/next/no-img-element */
'use client'

import { motion } from "framer-motion"

export default function AboutPage() {
    return (
        <section id='about' className="min-h-screen px-8 pt-40 md:pt-50 pb-20 start-nav">

            <div className="container m-auto">
                <div className="title-wrapper relative">
                    <motion.h1
                        className='text-5xl md:text-7xl lg:text-8xl xl:text-9xl font-medium mb-14 md:mb-20 text-center'
                        initial={{ opacity: 0, y: 40 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                        I&apos;m&nbsp;
                        <div className="inline-block relative">
                            <div>PKQ.</div>
                            <img src='/images/wave.png' alt="wave" className="img-wave"/>
                        </div>
                    </motion.h1>
                </div>
                <div className="content-wrapper">
                    <div className="flex flex-wrap -mx-4 align-center">
                        <div className="w-full lg:w-1/2 px-4">
                            <img src='/images/me.png' alt="me" className="img-me w-3/4 md:w-1/2 lg:w-3/4 xl:w-3/5 mx-auto" loading="lazy"/>
                        </div>
                        <div className="w-full lg:w-1/2 px-4">
                            <h3 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-medium relative mt-8">
                                A full-stack developer who just likes to make things work.
                            </h3>
                            <br />
                            <p className="p1 body-font">
                                I like building things that look simple and feel nice to use.
                                Not too flashy, not too complicated. Just stuff that works.
                                <br /><br />
                                I work across frontend and backend, figuring things out as I go. It’s not always glamorous, but it gets done.
                                {/* I won’t claim to be the most organized or detail-obsessed person, but I do care about making things that feel smooth, usable, and sometimes a little fun. */}
                                <br /><br />
                                Outside of work, I’m still usually at my computer — watching something random, or just chilling.
                                If you’re here, feel free to explore. Quiet design, loud energy—that’s me.
                            </p>
                            <div className="social-links-wrapper mt-14 text-2xl font-medium">
                                <h4 className="relative w-fit py-4 text-xl lg:text-2xl">
                                    <div>elsewhere on the internet:</div>
                                    <img src='/images/highlight-long.png' alt="circle" className="img-circle -z-1" />
                                </h4>
                                <div className="flex flex-wrap gap-x-2 md:gap-x-4 gap-y-1 p1 body-font mt-1 md:mt-2 xxl:mt-3">
                                    <a className="text-(--pink-text) text-glow" href="...">resume</a> •
                                    <a className="text-(--orange-text) text-glow" href="...">linkedIn</a> •
                                    <a className="text-(--blue-text) text-glow" href="...">github</a> •
                                    <a className="text-(--green-text) text-glow" href="...">letterboxd</a> •
                                    <a className="text-(--purple-text) text-glow" href="...">books</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}