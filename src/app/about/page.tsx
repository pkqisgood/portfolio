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
                        I&apos;m PKQ.
                    </motion.h1>
                    <img src='/images/wave.png' alt="wave" className="img-wave" />
                </div>
                <div className="content-wrapper">
                    <div className="flex flex-wrap -mx-4">
                        <div className="w-full lg:w-1/2 px-4">
                        </div>
                        <div className="w-full lg:w-1/2 px-4">
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}