export default function SectionTitle({ children, align = "center" }) {
  const alignment = align === "left" ? "items-start text-left" : "items-center text-center";

  return (
    <div className={`flex flex-col gap-1 ${alignment}`}>
      <h2 className="text-4xl leading-none font-bold italic md:text-5xl lg:text-[64px]">
        {children}
      </h2>
      <div className="title-bar" />
    </div>
  );
}