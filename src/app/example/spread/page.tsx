'use client';

import { useEffect } from 'react';
import Lenis from 'lenis';
import Spread from '@/components/Spread';
import InfoChange from '@/components/InfoChange';

const SpreadPage = () => {
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

      <Spread />

      <InfoChange />
    </>
  );
};

export default SpreadPage;
