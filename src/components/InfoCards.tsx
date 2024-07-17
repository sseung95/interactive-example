'use client';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';

const InfoCards = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref });
  const opacity = useTransform(scrollYProgress, [0.15, 0.25], [1, 0.2]);
  const fontSize = useTransform(scrollYProgress, [0.15, 0.25], ['80px', '60px']);
  const height = useTransform(scrollYProgress, [0.15, 0.25], ['120px', '0px']);

  // TODO: 특정지점에 도달하면 fade in/out ?? 으로 보여줄 수 있는 방법 찾아보기

  return (
    <div ref={ref} className="flex flex-col gap-24 h-[600vh] bg-black p-20">
      <div className="sticky top-[50%] -translate-y-[50%] flex gap-[80px]">
        <div className="flex-1 place-self-end text-right">
          <div>
            <motion.h2 className="text-[90px] text-[#efece6]" style={{ opacity, fontSize }}>
              이것저것 없이
            </motion.h2>
            <motion.div className="overflow-hidden" style={{ height }}>
              <p className="text-[20px] text-[#efece6] font-light">우리는 어쩌구 저쩌구 우리는 어쩌구 저쩌구</p>
              <p className="text-[20px] text-[#efece6] font-light">우리는 어쩌구 저쩌구 우리는 어쩌구 저쩌구</p>
              <p className="text-[20px] text-[#efece6] font-light">우리는 어쩌구 저쩌구 우리는 어쩌구 저쩌구</p>
              <p className="text-[20px] text-[#efece6] font-light">우리는 어쩌구 저쩌구 우리는 어쩌구 저쩌구</p>
            </motion.div>
          </div>
          <div>
            <h2 className="text-[60px] text-[#efece6] opacity-20">삼것저것 없이</h2>
          </div>
          <div>
            <h2 className="text-[60px] text-[#efece6] opacity-20">사것저것 없이</h2>
          </div>
          <div>
            <h2 className="text-[60px] text-[#efece6] opacity-20">오것저것 없이</h2>
          </div>
        </div>
        <div className="h-[80vh] w-[40vw] min-w-[400px] max-w-[800px] bg-[#efece6] rounded-[32px]"></div>
      </div>
    </div>
  );
};

export default InfoCards;
