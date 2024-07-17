'use client';
import { motion, useMotionValueEvent, useScroll, useTransform } from 'framer-motion';
import { useEffect, useRef, useState } from 'react';
import Lenis from 'lenis';

const InfoCards = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref });
  const [curSection, setCurSection] = useState<number>(1);

  useMotionValueEvent(scrollYProgress, 'change', (latest: any) => {
    const percentage = latest * 100;
    const section = Math.floor(percentage / 25) + 1;
    setCurSection(section);
  });

  const visibleTitleStyle = 'text-[90px] opacity-1';
  const hiddenTitleStyle = 'text-[60px] opacity-20';

  const visibleDescriptStyle = 'h-[120px] overflow-hidden';
  const hiddenDescriptStyle = 'h-[0px] overflow-hidden';

  useEffect(() => {
    const lenis = new Lenis();

    function raf(time: any) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);
  }, []);

  useEffect(() => {
    console.log(curSection);
  }, [curSection]);

  return (
    <div ref={ref} className="flex flex-col gap-24 h-[700vh] bg-black p-20">
      <div className="sticky top-[50%] -translate-y-[50%] flex gap-[80px]">
        <div className="flex-1 place-self-end text-right">
          <div>
            <motion.h2 className={`text-[#efece6] ${curSection === 1 ? visibleTitleStyle : hiddenTitleStyle}`}>
              이것저것 없이
            </motion.h2>
            <motion.div className={`${curSection <= 1 ? visibleDescriptStyle : hiddenDescriptStyle}`}>
              <p className="text-[20px] text-[#efece6] font-light">우리는 어쩌구 저쩌구 우리는 어쩌구 저쩌구</p>
              <p className="text-[20px] text-[#efece6] font-light">우리는 어쩌구 저쩌구 우리는 어쩌구 저쩌구</p>
              <p className="text-[20px] text-[#efece6] font-light">우리는 어쩌구 저쩌구 우리는 어쩌구 저쩌구</p>
              <p className="text-[20px] text-[#efece6] font-light">우리는 어쩌구 저쩌구 우리는 어쩌구 저쩌구</p>
            </motion.div>
          </div>
          <div>
            <motion.h2 className={`text-[#efece6] ${curSection === 2 ? visibleTitleStyle : hiddenTitleStyle}`}>
              삼것저것 없이
            </motion.h2>
            <motion.div className={`${curSection === 2 ? visibleDescriptStyle : hiddenDescriptStyle}`}>
              <p className="text-[20px] text-[#efece6] font-light">우리는 어쩌구 저쩌구 우리는 어쩌구 저쩌구</p>
              <p className="text-[20px] text-[#efece6] font-light">우리는 어쩌구 저쩌구 우리는 어쩌구 저쩌구</p>
              <p className="text-[20px] text-[#efece6] font-light">우리는 어쩌구 저쩌구 우리는 어쩌구 저쩌구</p>
              <p className="text-[20px] text-[#efece6] font-light">우리는 어쩌구 저쩌구 우리는 어쩌구 저쩌구</p>
            </motion.div>
          </div>
          <div>
            <motion.h2 className={`text-[#efece6] ${curSection === 3 ? visibleTitleStyle : hiddenTitleStyle}`}>
              사것저것 없이
            </motion.h2>
            <motion.div className={`${curSection === 3 ? visibleDescriptStyle : hiddenDescriptStyle}`}>
              <p className="text-[20px] text-[#efece6] font-light">우리는 어쩌구 저쩌구 우리는 어쩌구 저쩌구</p>
              <p className="text-[20px] text-[#efece6] font-light">우리는 어쩌구 저쩌구 우리는 어쩌구 저쩌구</p>
              <p className="text-[20px] text-[#efece6] font-light">우리는 어쩌구 저쩌구 우리는 어쩌구 저쩌구</p>
              <p className="text-[20px] text-[#efece6] font-light">우리는 어쩌구 저쩌구 우리는 어쩌구 저쩌구</p>
            </motion.div>
          </div>
          <div>
            <motion.h2 className={`text-[#efece6] ${curSection >= 4 ? visibleTitleStyle : hiddenTitleStyle}`}>
              오것저것 없이
            </motion.h2>
            <motion.div className={`${curSection >= 4 ? visibleDescriptStyle : hiddenDescriptStyle}`}>
              <p className="text-[20px] text-[#efece6] font-light">우리는 어쩌구 저쩌구 우리는 어쩌구 저쩌구</p>
              <p className="text-[20px] text-[#efece6] font-light">우리는 어쩌구 저쩌구 우리는 어쩌구 저쩌구</p>
              <p className="text-[20px] text-[#efece6] font-light">우리는 어쩌구 저쩌구 우리는 어쩌구 저쩌구</p>
              <p className="text-[20px] text-[#efece6] font-light">우리는 어쩌구 저쩌구 우리는 어쩌구 저쩌구</p>
            </motion.div>
          </div>
        </div>
        <div className="h-[80vh] w-[40vw] min-w-[400px] max-w-[800px] bg-[#efece6] rounded-[32px]"></div>
      </div>
    </div>
  );
};

export default InfoCards;
