'use client';
import { motion } from 'framer-motion';
import { useEffect, useRef } from 'react';

const SpotlightButton = () => {
  const btnRef = useRef<HTMLButtonElement>(null);
  const spanRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const { width, height } = (e.target as HTMLElement)?.getBoundingClientRect();
      const offsetX = e.offsetX;
      const offsetY = e.offsetY;
      const left = `${(offsetX / width) * 100}%`;
      const top = `${(offsetY / height) * 100}%`;

      // animation-fill-mode: 애니메이션이 끝난 후 설정 / forwards -> 애니메이션이 끝난 후 그 지점에 그대로 있음
      spanRef.current?.animate({ left, top }, { duration: 250, fill: 'forwards' });
    };

    const handleMouseLeave = (e: MouseEvent) => {
      // 마우스가 버튼을 벗어나면 span 위치 중앙으로 되돌려 놓는다.
      spanRef.current?.animate({ left: '50%', top: '50%' }, { duration: 100, fill: 'forwards' });
    };

    btnRef.current?.addEventListener('mousemove', handleMouseMove);
    btnRef.current?.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      btnRef.current?.removeEventListener('mousemove', handleMouseMove);
      btnRef.current?.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, []);

  return (
    <motion.button
      whileTap={{ scale: 0.985, rotate: '2.5deg' }}
      ref={btnRef}
      className="relative w-full max-w-xs overflow-hidden rounded-lg bg-slate-950 px-4 py-6 text-lg font-medium text-white"
    >
      <span className="pointer-events-none relative z-10 mix-blend-difference">Hover me</span>
      <span
        ref={spanRef}
        className="pointer-events-none absolute left-[50%] top-[50%] h-28 w-28 -translate-x-[50%] -translate-y-[50%] rounded-full bg-slate-100"
      ></span>
    </motion.button>
  );
};

export default SpotlightButton;
