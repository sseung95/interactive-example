'use client';
import { motion, MotionConfig, useMotionValueEvent, useScroll, useTransform } from 'framer-motion';
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

  return (
    <div ref={ref} className="flex flex-col gap-24 h-[400vh] bg-black p-20">
      <div className="sticky top-[50%] -translate-y-[50%] flex gap-[80px]">
        <div className="flex-1 place-self-end text-right">
          <MotionConfig
            transition={{
              duration: 0.35,
            }}
          >
            <div>
              <motion.h2
                className={`text-[#efece6] ${hiddenTitleStyle}`}
                animate={{
                  fontSize: curSection === 1 ? '90px' : '60px',
                  opacity: curSection === 1 ? 1 : 0.2,
                }}
              >
                이것저것 없이
              </motion.h2>
              <motion.div
                className={hiddenDescriptStyle}
                animate={{
                  height: curSection === 1 ? '120px' : '0px',
                  opacity: curSection === 1 ? 1 : 0.2,
                }}
              >
                <p className="text-[20px] text-[#efece6] font-light">우리는 어쩌구 저쩌구 우리는 어쩌구 저쩌구</p>
                <p className="text-[20px] text-[#efece6] font-light">우리는 어쩌구 저쩌구 우리는 어쩌구 저쩌구</p>
                <p className="text-[20px] text-[#efece6] font-light">우리는 어쩌구 저쩌구 우리는 어쩌구 저쩌구</p>
                <p className="text-[20px] text-[#efece6] font-light">우리는 어쩌구 저쩌구 우리는 어쩌구 저쩌구</p>
              </motion.div>
            </div>
            <div>
              <motion.h2
                className={`text-[#efece6] ${hiddenTitleStyle}`}
                animate={{
                  fontSize: curSection === 2 ? '90px' : '60px',
                  opacity: curSection === 2 ? 1 : 0.2,
                }}
              >
                이것저것 없이
              </motion.h2>
              <motion.div
                className={hiddenDescriptStyle}
                animate={{
                  height: curSection === 2 ? '120px' : '0px',
                  opacity: curSection === 2 ? 1 : 0.2,
                }}
              >
                <p className="text-[20px] text-[#efece6] font-light">우리는 어쩌구 저쩌구 우리는 어쩌구 저쩌구</p>
                <p className="text-[20px] text-[#efece6] font-light">우리는 어쩌구 저쩌구 우리는 어쩌구 저쩌구</p>
                <p className="text-[20px] text-[#efece6] font-light">우리는 어쩌구 저쩌구 우리는 어쩌구 저쩌구</p>
                <p className="text-[20px] text-[#efece6] font-light">우리는 어쩌구 저쩌구 우리는 어쩌구 저쩌구</p>
              </motion.div>
            </div>
            <div>
              <motion.h2
                className={`text-[#efece6] ${hiddenTitleStyle}`}
                animate={{
                  fontSize: curSection === 3 ? '90px' : '60px',
                  opacity: curSection === 3 ? 1 : 0.2,
                }}
              >
                이것저것 없이
              </motion.h2>
              <motion.div
                className={hiddenDescriptStyle}
                animate={{
                  height: curSection === 3 ? '120px' : '0px',
                  opacity: curSection === 3 ? 1 : 0.2,
                }}
              >
                <p className="text-[20px] text-[#efece6] font-light">우리는 어쩌구 저쩌구 우리는 어쩌구 저쩌구</p>
                <p className="text-[20px] text-[#efece6] font-light">우리는 어쩌구 저쩌구 우리는 어쩌구 저쩌구</p>
                <p className="text-[20px] text-[#efece6] font-light">우리는 어쩌구 저쩌구 우리는 어쩌구 저쩌구</p>
                <p className="text-[20px] text-[#efece6] font-light">우리는 어쩌구 저쩌구 우리는 어쩌구 저쩌구</p>
              </motion.div>
            </div>
            <div>
              <motion.h2
                className={`text-[#efece6] ${hiddenTitleStyle}`}
                animate={{
                  fontSize: curSection >= 4 ? '90px' : '60px',
                  opacity: curSection >= 4 ? 1 : 0.2,
                }}
              >
                이것저것 없이
              </motion.h2>
              <motion.div
                className={hiddenDescriptStyle}
                animate={{
                  height: curSection >= 4 ? '120px' : '0px',
                  opacity: curSection >= 4 ? 1 : 0.2,
                }}
              >
                <p className="text-[20px] text-[#efece6] font-light">우리는 어쩌구 저쩌구 우리는 어쩌구 저쩌구</p>
                <p className="text-[20px] text-[#efece6] font-light">우리는 어쩌구 저쩌구 우리는 어쩌구 저쩌구</p>
                <p className="text-[20px] text-[#efece6] font-light">우리는 어쩌구 저쩌구 우리는 어쩌구 저쩌구</p>
                <p className="text-[20px] text-[#efece6] font-light">우리는 어쩌구 저쩌구 우리는 어쩌구 저쩌구</p>
              </motion.div>
            </div>
          </MotionConfig>
        </div>
        <div className="h-[80vh] w-[40vw] min-w-[400px] max-w-[800px] bg-[#efece6] rounded-[32px]"></div>
      </div>
    </div>
  );
};

export default InfoCards;
