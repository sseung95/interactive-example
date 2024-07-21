'use client';

const StickyFooter = () => {
  return (
    <div className="relative h-[800px] bg-slate-100" style={{ clipPath: 'polygon(0% 0, 100% 0%, 100% 100%, 0 100%)' }}>
      <div className="fixed bottom-0 h-[800px] w-full">
        <Content />
      </div>
    </div>
  );
};

export default StickyFooter;

function Content() {
  return (
    <div className="bg-[#4E4E5A] py-8 px-12 h-full w-full flex flex-col justify-end">
      <Section2 />
    </div>
  );
}

const Section2 = () => {
  return (
    <div className="flex justify-between items-end">
      <h1 className="text-[14vw] leading-[0.8] mt-10">Sticky Footer</h1>
      <p>©copyright</p>
    </div>
  );
};
