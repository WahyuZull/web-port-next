import Link from "next/link";

export default function MenuLink() {
  return (
    <nav className="justify-around hidden md:flex">
      <Link
        className="p-3 hover:text-amber-600 transition duration-200 ease-in"
        href={"/"}
      >
        Beranda
      </Link>
      <Link
        className="p-3 hover:text-amber-600 transition duration-200 ease-in"
        href={"/portfolio"}
      >
        Portfolio
      </Link>
      <Link
        className="p-3 hover:text-amber-600 transition duration-200 ease-in"
        href={"/about"}
      >
        Tentang Saya
      </Link>
      <Link
        className="p-3 hover:text-amber-600 transition duration-200 ease-in"
        href={"/contact"}
      >
        Kontak
      </Link>
    </nav>
  );
}
