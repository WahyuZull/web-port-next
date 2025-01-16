"use client";
import Link from "next/link";
import MenuLink from "../Molecules/MenuLink";
import { useEffect, useState } from "react";
import { FaHamburger } from "react-icons/fa";
import { CgClose } from "react-icons/cg";
import MenuLinkMobile from "../Molecules/MenuLinkMobile";

export default function Header() {
  const [mobileMenu, setMobileMenu] = useState(false);
  const [header, setHeader] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [showHeader, setShowHeader] = useState(true);

  const handleMobileMenu = () => {
    mobileMenu ? setMobileMenu(false) : setMobileMenu(true);
  };

  useEffect(() => {
    window.addEventListener("scroll", () => {
      window.scrollY > 0 ? setHeader(true) : setHeader(false);
    });
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > lastScrollY) {
        setShowHeader(false);
      } else {
        setShowHeader(true);
      }
      setLastScrollY(window.scrollY);
      window.scrollY > 0 ? setHeader(true) : setHeader(false);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [lastScrollY]);

  return (
    <header
      className={`${
        header ? "bg-white shadow-sm" : "bg-transparent"
      } w-screen fixed top-0 left-0 transition duration-500 ease-in-out  dark:bg-stone-900/90 z-50 ${
        showHeader ? "translate-y-0" : "-translate-y-full"
      }`}
    >
      <div className="container flex justify-between md:justify-center items-center px-4 py-2">
        <div className="flex items-center gap-12">
          <Link href={"/"} className="btn btn-ghost">
            <img
              src="/next.svg"
              alt="Web Portfolio"
              className="w-24 h-10"
            />
          </Link>

          <MenuLink />
        </div>

        {/* Mobile Menu */}
        <div className="btn btn-ghost swap swap-rotate md:hidden">
          <FaHamburger size={24} onClick={handleMobileMenu} />
        </div>

        <div
          className={`${
            mobileMenu ? "translate-x-0" : "translate-x-full"
          } fixed top-0 right-0 h-screen w-full bg-white dark:bg-stone-900/90 transition-transform duration-200 ease-in`}
        >
          <div className="btn btn-ghost swap swap-rotate block justify-self-end mt-4 ">
            <CgClose size={24} onClick={handleMobileMenu} />
          </div>

          <MenuLinkMobile />
        </div>
      </div>
    </header>
  );
}
