'use client';
import React from 'react';
import { motion, MotionConfig } from 'framer-motion';

const Gestures = () => {
  return (
    <div
      style={{
        display: 'grid',
        placeContent: 'center',
        height: '100vh',
        gap: '0.8rem',
      }}
    >
      {/* MotionConfig 는 motion 요소에서 공통으로 사용할 props 정보를 한번에 적용해줄 수 있음 */}
      <MotionConfig
        transition={{
          duration: 0.125,
          ease: 'easeInOut',
        }}
      >
        <motion.button
          className="example-button"
          // 마우스 올렸을 때
          whileHover={{
            scale: 1.05,
          }}
          // 클릭했을 때
          whileTap={{
            scale: 0.95,
            rotate: '2.5deg',
          }}
        >
          Click me!
        </motion.button>
        <motion.button
          className="example-button"
          // 마우스 올렸을 때
          whileHover={{
            scale: 1.05,
          }}
          // 클릭했을 때
          whileTap={{
            scale: 0.95,
            rotate: '-2.5deg',
          }}
          style={{
            backgroundColor: 'red',
          }}
        >
          Click me!
        </motion.button>
      </MotionConfig>
    </div>
  );
};

export default Gestures;
