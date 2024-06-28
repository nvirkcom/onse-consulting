import Link from "next/link";

export default function Button({
  children,
  href,
}: {
  children: React.ReactNode;
  href: string;
}) {
  return (
    <Link
      className="bg-[#ed1b24] hover:opacity-100 opacity-80 px-5 py-3 rounded self-center text-light text-white transition uppercase"
      href={href}
    >
      {children}
    </Link>
  );
}
