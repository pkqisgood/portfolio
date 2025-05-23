'use client';

import { motion } from 'framer-motion';

export default function HomePage() {
  return (
    <section id='home' className="min-h-screen flex flex-col justify-center items-center text-center space-y-6">
      <motion.h1
        className="text-5xl sm:text-7xl lg:text-8xl xl:text-9xl font-medium mb-3 md:mb-6 w-9/10"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        Hi, I&apos;m <br className='md:hidden' />Pang Kai Qing

        <motion.span
          className="absolute hidden md:inline-block"
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{
            duration: 0.4,
            scale: { type: "spring", visualDuration: 0.4, bounce: 0.5 },
          }}
        >
          👋
        </motion.span>
        <br />
      </motion.h1>

      <motion.p
        className="text-lg sm:text-2xl md:text-3xl max-w-xl leading-6 md:leading-10"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3, duration: 0.8 }}
      >
        People called me&nbsp;
        <span className='pkq'>
          PKQ
        </span><br />
        A full stack developer
      </motion.p>

      {/* <motion.div
        className="space-x-4 mt-4"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.6, duration: 0.8 }}
      >
        <a href="/projects" className="px-6 py-2 bg-black text-white rounded-full hover:bg-gray-800 transition">
          View My Work
        </a>
        <a href="/contact" className="px-6 py-2 border border-black rounded-full hover:bg-black hover:text-white transition">
          Get in Touch
        </a>
      </motion.div> */}
      <motion.div
        className="social-links-wrapper text-2xl font-medium max-w-xl text-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.6, duration: 0.8 }}
      >
        <div className="flex flex-wrap gap-x-2 gap-y-1 p1 body-font">
          <a className="text-(--pink-text) text-glow" href="...">linkedIn</a> •
          <a className="text-(--orange-text) text-glow" href="...">resume</a> •
          <a className="text-(--blue-text) text-glow" href="...">github</a> •
          <a className="text-(--green-text) text-glow" href="...">letterboxd</a> •
          <a className="text-(--purple-text) text-glow" href="...">books</a>
        </div>
      </motion.div>
    </section>
  );
}
