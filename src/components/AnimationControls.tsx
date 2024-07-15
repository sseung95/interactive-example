'use client';
import React from 'react';
import { motion, useAnimationControls } from 'framer-motion';

const AnimationControls = () => {
  const controls = useAnimationControls();

  const handleClick = () => {
    // variants 로 전달했던 flip 속성을 문자열로 접근하여 적용
    controls.start('flip');
  };

  return (
    <div
      style={{
        display: 'grid',
        placeContent: 'center',
        height: '100vh',
        gap: '0.8rem',
      }}
    >
      <button onClick={handleClick} className="example-button">
        Flip it!
      </button>
      <motion.div
        style={{ width: 150, height: 150, backgroundColor: 'black' }}
        // 객체로 속성 전달하면 문자열로 접근가능
        variants={{
          initial: {
            rotate: '0deg',
          },
          flip: {
            rotate: '360deg',
          },
        }}
        // variants 로 전달했던 initial 속성을 문자열로 접근하여 적용
        initial="initial"
        // animate 에 useAnimationControls 에 반환받은 controls 를 적용하여 애니메이션 실행될 수 있게 함
        animate={controls}
      ></motion.div>
    </div>
  );
};

export default AnimationControls;
