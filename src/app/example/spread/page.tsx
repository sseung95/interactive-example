'use client';

import { MotionConfig, motion, useInView } from 'framer-motion';
import { useEffect, useRef } from 'react';
import Lenis from 'lenis';

const page = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { amount: 0.5, once: true });

  useEffect(() => {
    const lenis = new Lenis();

    function raf(time: any) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);
  }, []);

  return (
    <>
      <section className="h-[100vh] bg-slate-200 "></section>

      <div className="h-screen flex items-center justify-center">
        <div className="relative">
          <h2 ref={ref} className="text-[60px] font-bold">
            어쩌구 저쩌구
          </h2>
          <ul className="absolute left-[50%] top-[50%] -translate-x-[50%] -translate-y-[50%]">
            <MotionConfig
              transition={{
                duration: 1,
                ease: 'easeInOut',
                delay: 0.2,
              }}
            >
              <motion.li
                className="absolute top-[-38px] left-[-340px] h-[160px] w-[160px] bg-slate-200 rounded-[32px]"
                animate={{
                  top: isInView ? -341 : -38,
                  left: isInView ? -684 : -340,
                }}
              ></motion.li>
              <motion.li
                className="absolute top-[-120px] left-[-244px] h-[160px] w-[160px] bg-slate-300 rounded-[32px]"
                animate={{
                  top: isInView ? -260 : -120,
                  left: isInView ? -304 : -244,
                }}
              ></motion.li>
              <motion.li
                className="absolute top-[20px] left-[-186px] h-[160px] w-[160px] bg-slate-400 rounded-[32px]"
                animate={{
                  top: isInView ? 144 : 20,
                  left: isInView ? -506 : -186,
                }}
              ></motion.li>
              <motion.li
                className="absolute top-[-70px] left-[-95px] h-[160px] w-[160px] bg-slate-500 rounded-[32px]"
                animate={{
                  top: isInView ? -298 : -70,
                  left: isInView ? 80 : -95,
                }}
              ></motion.li>
              <motion.li
                className="absolute top-[-98px] left-[44px] h-[160px] w-[160px] bg-slate-600 rounded-[32px]"
                animate={{
                  top: isInView ? -166 : -98,
                  left: isInView ? 485 : 44,
                }}
              ></motion.li>
              <motion.li
                className="absolute top-[-40px] left-[150px] h-[160px] w-[160px] bg-slate-700 rounded-[32px]"
                animate={{
                  top: isInView ? 200 : -40,
                  left: isInView ? 370 : 150,
                }}
              ></motion.li>
              <motion.li
                className="absolute top-[0px] left-[15px] h-[160px] w-[160px] bg-slate-800 rounded-[32px]"
                animate={{
                  top: isInView ? 107 : 0,
                  left: isInView ? -75 : 15,
                }}
              ></motion.li>
            </MotionConfig>
          </ul>
        </div>
      </div>
    </>
  );
};

export default page;
