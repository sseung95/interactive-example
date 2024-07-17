'use client';
import ParallaxScroll from '@/components/ParallaxScroll';
import { motion } from 'framer-motion';

const page = () => {
  return (
    <main>
      <section className="h-[50vh]"></section>
      <ParallaxScroll />
      <ParallaxScroll />
      <section className="h-[50vh]"></section>
    </main>
  );
};

export default page;
