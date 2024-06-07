export default function Figure({
  caption,
  children,
}: Readonly<{
  caption: { english: String; native: String };
  children: React.ReactNode;
}>) {
  return (
    <figure className="relative">
      {children}
      <figcaption className="absolute bg-black/20 bottom-0 flex justify-between left-0 md:p-2 p-1 rounded-b text-[8px] text-white w-full">
        <p>{caption.native}</p>
        <p>{caption.english}</p>
      </figcaption>
    </figure>
  );
}
