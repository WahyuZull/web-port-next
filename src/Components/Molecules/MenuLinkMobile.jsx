import Link from "next/link";

export default function MenuLinkMobile() {
  return (
    <div className="flex flex-col items-end justify-center gap-1 px-3">
      <Link
        className="p-3 text-xl hover:text-amber-600 transition duration-200 ease-in"
        href={"/"}
      >
        Beranda
      </Link>
      <Link
        className="p-3 text-xl hover:text-amber-600 transition duration-200 ease-in"
        href={"/portfolio"}
      >
        Portfolio
      </Link>
      <Link
        className="p-3 text-xl hover:text-amber-600 transition duration-200 ease-in"
        href={"/about"}
      >
        Tentang Saya
      </Link>
      <Link
        className="p-3 text-xl hover:text-amber-600 transition duration-200 ease-in"
        href={"/contact"}
      >
        Kontak
      </Link>
    </div>
  );
}
