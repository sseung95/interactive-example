import Link from 'next/link';

export default function Home() {
  return (
    <div className="flex flex-col gap-24 h-screen bg-black p-20">
      <div className="flex flex-col gap-8">
        <h1 className="text-2xl font-medium text-slate-900 dark:text-slate-200">Framer Motion Practice</h1>
        <div className="flex items-start gap-4">
          <LinkButton label="animationControls" link="/tutorial/animationControls" />
          <LinkButton label="basic show/hide" link="/tutorial/basic" />
          <LinkButton label="gestures" link="/tutorial/gestures" />
          <LinkButton label="inView" link="/tutorial/inView" />
          <LinkButton label="page scroll percent" link="/tutorial/scroll" />
        </div>
      </div>
      <div className="flex flex-col gap-8">
        <h1 className="text-2xl font-medium text-slate-900 dark:text-slate-200">Framer Motion Components</h1>
        <div className="flex items-start gap-4">
          <LinkButton label="bubble text" link="/tutorial/bubbleText" />
          <LinkButton label="spotlight button" link="/tutorial/button" />
          <LinkButton label="horizontal scroll" link="/tutorial/horizontalScroll" />
        </div>
      </div>
    </div>
  );
}

const LinkButton = ({ label = '', link = '#' }) => {
  return (
    <Link
      href={link}
      className="group relative overflow-hidden rounded-lg border-[1px] border-neutral-500 bg-neutral-700 px-4 py-2 font-mono font-medium uppercase text-neutral-300 transition-colors hover:text-indigo-300"
    >
      {label}
    </Link>
  );
};
