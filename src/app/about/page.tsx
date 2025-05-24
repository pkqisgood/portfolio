/* eslint-disable @next/next/no-img-element */
'use client'

import { useLayoutEffect } from 'react';
import gsap from "gsap";
import { SplitText } from 'gsap/SplitText';
import { motion } from "framer-motion"


export default function AboutPage() {
    useLayoutEffect(() => {
        gsap.registerPlugin(SplitText);

        const splitInstances: SplitText[] = [];

        document.querySelectorAll<HTMLElement>('.split-text-lines').forEach((el) => {
            const delay = parseFloat(el.dataset.delay || '0');
            const split = new SplitText(el, { type: 'lines', linesClass: 'line' });
            splitInstances.push(split);
            gsap.from(split.lines, {
                y: 50,
                opacity: 0,
                stagger: 0.05,
                ease: 'back.out',
                delay,
            });
        });

        document.querySelectorAll<HTMLElement>('.split-text-words').forEach((el) => {
            const delay = parseFloat(el.dataset.delay || '0');
            const split = new SplitText(el, { type: 'words', wordsClass: 'word' });
            splitInstances.push(split);
            gsap.from(split.words, {
                y: 20,
                opacity: 0,
                stagger: 0.03,
                ease: 'power2.out',
                delay,
            });
        });

        return () => {
            splitInstances.forEach((split) => split.revert());
        };
    }, []);


    return (
        <section id='about' className="min-h-screen px-8 pt-35 md:pt-50 pb-20 start-nav">
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
                            <img src='/images/wave.png' alt="wave" className="img-wave" />
                        </div>
                    </motion.h1>
                </div>
                <div className="content-wrapper">
                    <div className="flex flex-wrap -mx-4 align-center">
                        <motion.div
                            className="w-full lg:w-1/2 px-4"
                            initial={{ opacity: 0, y: 40 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.2 }}
                        >
                            <img src='/images/me.png' alt="me" className="img-me w-3/4 md:w-1/2 lg:w-3/4 xl:w-3/5 mx-auto" loading="lazy" />
                        </motion.div>
                        <div className="w-full lg:w-1/2 px-4">
                            <h3 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-medium relative mt-8 split-text-lines">
                                A full-stack developer who just likes to make things work.
                            </h3>
                            <br />
                            <div className="p1 body-font split-text-lines" data-delay="0.3">
                                <div className="mb-6">
                                    <p>
                                        I like building things that look simple and feel nice to use.
                                        Not too flashy, not too complicated. Just stuff that works.
                                    </p>
                                </div>
                                <div className="mb-6">
                                    <p>
                                        I work across frontend and backend, figuring things out as I go. It’s not always glamorous, but it gets done.
                                        {/* I won’t claim to be the most organized or detail-obsessed person, but I do care about making things that feel smooth, usable, and sometimes a little fun. */}
                                    </p>
                                </div>
                                <div className="mb-6">
                                    <p>
                                        Outside of work, I’m still usually at my computer — watching something random, or just chilling.
                                        If you’re here, feel free to explore. Quiet design, loud energy—that’s me.
                                    </p>
                                </div>
                            </div>
                            <div className="social-links-wrapper mt-14 text-2xl font-medium">
                                <h4 className="relative w-fit py-4 text-xl lg:text-2xl split-text-lines" data-delay="0.6">
                                    <div>elsewhere on the internet:</div>
                                    <img src='/images/highlight-long.png' alt="circle" className="img-circle -z-1" />
                                </h4>
                                <div className="flex flex-wrap gap-x-2 md:gap-x-4 gap-y-1 p1 body-font mt-1 md:mt-2 xxl:mt-3 split-text-words" data-delay="0.9">
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