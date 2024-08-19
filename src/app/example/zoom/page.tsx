'use client';
import { useEffect, useRef } from 'react';
import { motion, useInView, useScroll, useTransform } from 'framer-motion';
import Lenis from 'lenis';

const ZoomPage = () => {
  const zoomRef = useRef(null);
  const { scrollYProgress: zoomScrollYProgress } = useScroll({ target: zoomRef });
  const zoomScale = useTransform(zoomScrollYProgress, [0, 0.5], [1, 0.8]);

  const bgRef = useRef(null);
  const isInViewBgRef = useInView(bgRef, { amount: 0.5 });

  const nextRef = useRef(null);
  const isInViewNextRef = useInView(nextRef);

  const isExpansion = isInViewBgRef && !isInViewNextRef;

  useEffect(() => {
    const lenis = new Lenis();

    function raf(time: any) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);
  }, []);

  return (
    <div className="relative">
      <section className="relative flex items-center justify-center h-[100vh] bg-slate-200">
        <p className="text-black text-4xl font-bold">SCROLL</p>
      </section>
      <section className="h-[100vh] bg-slate-200 "></section>

      {/* zoom out 되는 섹션 */}
      <section ref={zoomRef} className="h-[150vh]">
        <motion.div
          className="h-[100vh] bg-lime-100 sticky top-0"
          style={{ scale: zoomScale }}
          transition={{ duration: 0.25 }}
        ></motion.div>
      </section>

      <section className="relative h-[200vh] bg-slate-400">
        <p>안녕하세요</p>
        <motion.div
          className="absolute h-[100%] w-[100%] bg-black"
          initial={{ opacity: 0 }}
          animate={{ opacity: isExpansion ? 0.3 : 0 }}
        ></motion.div>
      </section>

      {/* 배경 크기 변하는 섹션 */}
      <section className="relative h-[100vh] flex justify-center mt-[128px] mb-[128px]">
        <div ref={bgRef} className="absolute top-0">
          <motion.div
            className="h-[100vh] w-[1100px] bg-orange-200 rounded-[38px]"
            initial={{ scale: 1 }}
            animate={{ scale: isExpansion ? 1.5 : 1 }}
            transition={{
              type: 'tween',
            }}
          ></motion.div>
        </div>
        <div className="relative mt-[50px]">
          <p>안녕하세요</p>
        </div>
      </section>

      <section className="h-[50vh] bg-slate-400"></section>
      <section ref={nextRef} className="h-[50vh] bg-red-100"></section>

      <div className="absolute top-0 left-0 h-[100%] w-[100%]"></div>
    </div>
  );
};

export default ZoomPage;
