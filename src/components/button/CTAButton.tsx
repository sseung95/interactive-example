'use client';
import React, { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';

const CTAButton = () => {
  const [isShowCursor, setIsShowCursor] = useState(false);
  const [cursorLeft, setCursorLeft] = useState(0);
  const [cursorTop, setCursorTop] = useState(0);
  const btnRef = useRef<HTMLDivElement>(null);
  const spanRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const offsetX = e.offsetX;
      const offsetY = e.offsetY;

      setCursorLeft(offsetX);
      setCursorTop(offsetY);
      setIsShowCursor(true);
    };

    const handleMouseLeave = (e: MouseEvent) => {
      setIsShowCursor(false);
    };

    btnRef.current?.addEventListener('mousemove', handleMouseMove);
    btnRef.current?.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      btnRef.current?.removeEventListener('mousemove', handleMouseMove);
      btnRef.current?.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, []);

  return (
    <motion.div
      ref={btnRef}
      className="relative overflow-hidden w-[1180px] h-[284px] flex items-center justify-center"
      style={{
        borderRadius: '200px',
        border: '0.1px solid rgb(157, 66, 251)',
      }}
      initial="initial"
      whileHover="hovered"
    >
      <Link
        href="#"
        className="text-white font-bold text-[56px] flex items-center justify-center"
        style={{
          width: '100%',
          height: '100%',
          backgroundColor: 'rgb(157, 66, 251)',
          borderRadius: '200px',
          boxShadow: 'rgb(0, 0, 0) 0px 32px 50px 0px, rgba(255, 255, 255, 0.4) -24px -16px 48px 0px inset',
          cursor: 'none',
        }}
      >
        <div className="relative overflow-hidden" style={{ pointerEvents: 'none', zIndex: 2 }}>
          <motion.div
            // className="inline-block"
            variants={{
              initial: { y: 0 },
              hovered: { y: '-100%' },
            }}
            transition={{
              duration: 0.5,
              ease: 'circOut',
            }}
          >
            무료로 시작하기
          </motion.div>
          <motion.div
            className="absolute top-0 left-0"
            variants={{
              initial: { y: '100%' },
              hovered: { y: 0 },
            }}
            transition={{
              duration: 0.5,
              ease: 'circOut',
            }}
          >
            무료로 시작하기
          </motion.div>
        </div>
        <div
          ref={spanRef}
          className="pointer-events-none absolute -translate-x-[50%] -translate-y-[50%] h-[250px] w-[250px] rounded-full bg-black text-white flex items-center justify-center text-[80px] font-light"
          style={{ visibility: isShowCursor ? 'visible' : 'hidden', top: cursorTop, left: cursorLeft }}
        >
          {`->`}
        </div>
      </Link>
    </motion.div>
  );
};

export default CTAButton;
