'use client';
import { motion, useInView, useScroll, useTransform } from 'framer-motion';
import { useEffect, useRef } from 'react';

const page = () => {
  const zoomRef = useRef(null);
  const isInViewZoomRef = useInView(zoomRef, { amount: 0.5 });

  const bgRef = useRef(null);
  const isInViewBgRef = useInView(bgRef, { amount: 0.5 });

  const nextRef = useRef(null);
  const isInViewNextRef = useInView(nextRef);

  const isExpansion = isInViewBgRef && !isInViewNextRef;

  return (
    <>
      <section className="flex items-center justify-center h-[100vh] bg-slate-200 ">
        <p className="text-black text-4xl font-bold">SCROLL</p>
      </section>
      <section className="h-[100vh] bg-slate-200 "></section>

      {/* zoom out 되는 섹션 */}
      <section ref={zoomRef} className="h-[150vh]">
        <motion.div
          className="h-[100vh] bg-lime-100 sticky top-0"
          initial={{ scale: 1 }}
          animate={{ scale: isInViewZoomRef ? 0.8 : 1 }}
          transition={{ duration: 0.25 }}
        ></motion.div>
      </section>
      <section className="h-[200vh] bg-slate-400"></section>

      {/* 배경 100vh, 100vw 로 변하는 섹션 */}
      <section className="h-[150vh] flex justify-center">
        <motion.div
          ref={bgRef}
          className="h-[70vh] w-[80vw] bg-black flex justify-center pt-[200px] sticky top-0"
          initial={{ width: '70vw', height: '70vh' }}
          animate={{ width: isExpansion ? '100vw' : '70vw', height: isExpansion ? '100vh' : '70vh' }}
          transition={{ duration: 0.25 }}
        >
          <motion.div
            className="h-[400px] w-[400px] rounded-[32px] text-white flex justify-center items-center bg-slate-800"
            initial={{ scale: 0.9 }}
            animate={{ scale: isExpansion ? 1 : 0.8 }}
            transition={{ duration: 0.35 }}
          >
            안녕하세요
          </motion.div>
        </motion.div>
      </section>

      <section className="h-[50vh] bg-slate-400"></section>
      <section ref={nextRef} className="h-[50vh] bg-red-100"></section>
    </>
  );
};

export default page;
