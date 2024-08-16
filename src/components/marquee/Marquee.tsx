const Marquee = () => {
  return (
    <div className="flex pl-[4.8rem] gap-[4.8rem] w-max animate-[moveLeft_10s_linear_infinite_forwards]">
      <p className="border border-white bg-[#141414] rounded-full px-10 py-4">JavaScript</p>
      <p className="border border-white bg-[#141414] rounded-full px-10 py-4">TypeScript</p>
      <p className="border border-white bg-[#141414] rounded-full px-10 py-4">CSS</p>
      <p className="border border-white bg-[#141414] rounded-full px-10 py-4">TailwindCSS</p>
      <p className="border border-white bg-[#141414] rounded-full px-10 py-4">Accessibility</p>
      <p className="border border-white bg-[#141414] rounded-full px-10 py-4">React</p>
      <p className="border border-white bg-[#141414] rounded-full px-10 py-4">Angular</p>
      <p className="border border-white bg-[#141414] rounded-full px-10 py-4" aria-hidden="true">
        JavaScript
      </p>
      <p className="border border-white bg-[#141414] rounded-full px-10 py-4" aria-hidden="true">
        TypeScript
      </p>
      <p className="border border-white bg-[#141414] rounded-full px-10 py-4" aria-hidden="true">
        CSS
      </p>
      <p className="border border-white bg-[#141414] rounded-full px-10 py-4" aria-hidden="true">
        TailwindCSS
      </p>
      <p className="border border-white bg-[#141414] rounded-full px-10 py-4" aria-hidden="true">
        Accessibility
      </p>
      <p className="border border-white bg-[#141414] rounded-full px-10 py-4" aria-hidden="true">
        React
      </p>
      <p className="border border-white bg-[#141414] rounded-full px-10 py-4" aria-hidden="true">
        Angular
      </p>
    </div>
  );
};

export default Marquee;
