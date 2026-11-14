export default function SpecCard({ title, edge, className = "", children }) {
  return (
    <article
      className={`flex flex-col gap-4 rounded-[30px] px-6 pt-10 pb-8 text-maroon md:rounded-[54px] lg:pt-20 lg:pb-10 ${className}`}
      style={{
        background: `linear-gradient(90deg, rgba(255,248,221,0.9) 73.56%, ${edge} 95.19%)`,
      }}
    >
      <h3 className="text-4xl font-bold italic md:text-[64px] md:leading-[42px]">
        {title}
      </h3>
      <p className="text-xl leading-snug break-words text-[#27262B] md:text-[32px] md:leading-[40px]">
        {children}
      </p>
    </article>
  );
}