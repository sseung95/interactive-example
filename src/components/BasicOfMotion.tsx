'use client';
import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';

const BasicOfMotion = () => {
  const [isVisible, setIsVisible] = useState<boolean>(true);

  return (
    <div
      style={{
        display: 'grid',
        placeContent: 'center',
        height: '100vh',
        gap: '0.8rem',
      }}
    >
      <motion.button
        className="example-button"
        onClick={() => setIsVisible(!isVisible)}
        // 렌더링될 때 레이아웃 변경 애니메이션 적용
        layout
      >
        Show/Hide
      </motion.button>
      {/* AnimatePresence 는 React 트리에서 제거될 때 구성 요소가 애니메이션으로 표시되도록 함 */}
      {/* mode popLayout 은 요소가 exit 애니메이션이 다 끝날때까지 기다리지 않고 공간은 차지하지 않되 애니메이션은 화면에 보여준다. */}
      <AnimatePresence mode="popLayout">
        {isVisible && (
          <motion.div
            initial={{
              rotate: '0deg',
              scale: 0,
              y: 0,
            }}
            animate={{
              rotate: '180deg',
              scale: 1,
              y: [0, 150, -150, -150, 0],
            }}
            // 마운트 해제되기 전 애니메이션 적용
            exit={{
              rotate: '0deg',
              scale: 0,
              y: 0,
            }}
            transition={{
              duration: 1,
              ease: 'backInOut',
              times: [0, 0.25, 0.5, 0.85, 1],
              // times: [1, 1, 1, 1, 1],
            }}
            style={{
              width: 150,
              height: 150,
              background: 'black',
            }}
          ></motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default BasicOfMotion;
