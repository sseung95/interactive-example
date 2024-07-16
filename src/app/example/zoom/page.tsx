'use client';
import { motion, useInView, useScroll, useTransform } from 'framer-motion';
import { useEffect, useRef } from 'react';

const page = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { amount: 0.5 });

  return (
    <>
      <section className="flex items-center justify-center h-[100vh] bg-slate-200 ">
        <p className="text-black text-4xl font-bold">SCROLL</p>
      </section>
      <section className="h-[100vh] bg-slate-200 "></section>
      <section ref={ref} className="h-[150vh]">
        <motion.section
          className="h-[100vh] bg-lime-100 sticky top-0"
          initial={{ scale: 1 }}
          animate={{ scale: isInView ? 0.8 : 1 }}
          transition={{ duration: 0.25 }}
        ></motion.section>
      </section>
      <section className="h-[200vh] bg-slate-400"></section>
    </>
  );
};

export default page;
