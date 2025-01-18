"use client";
import { ParallexText } from "@/Components/Atoms/ParallexText";
import {
  FaCircle,
  FaGithub,
  FaInstagram,
  FaLaravel,
  FaLinkedin,
  FaNodeJs,
  FaReact,
  FaWhatsapp,
} from "react-icons/fa6";
import Link from "next/link";
import BaseLayout from "@/Layouts/BaseLayout";
import Image from "next/image";
import { motion } from "framer-motion";
import { SiInertia } from "react-icons/si";
import TypingText from "@/Components/Atoms/TypingText";

export default function Home() {
  return (
    <BaseLayout>
      <main>
        {/* Hero Section */}
        <section className="relative bg-slate-50 dark:bg-stone-900/90">
          <svg
            className="absolute inset-0 h-full w-full stroke-slate-300/60 [mask-image:radial-gradient(100%_100%_at_top_right,white,transparent)]"
            aria-hidden="true"
          >
            <defs>
              <pattern
                id="0787a7c5-978c-4f66-83c7-11c213f99cb7"
                width="100"
                height="100"
                x="50%"
                y="-1"
                patternUnits="userSpaceOnUse"
              >
                <path d="M.5 200V.5H200" fill="none"></path>
              </pattern>
            </defs>
            <rect
              width="100%"
              height="100%"
              strokeWidth="0"
              fill="url(#0787a7c5-978c-4f66-83c7-11c213f99cb7)"
            ></rect>
          </svg>
          <div className="relative z-20 container max-w-5xl mx-auto">
            <div className="py-40 flex flex-col items-center h-screen gap-24 md:gap-0 md:flex-row">
              <div className="w-full md:p-10">
                <h1 className="text-5xl font-bold dark:text-white">
                  Hai! Selamat datang
                </h1>
                <h2 className="text-2xl text-slate-700 dark:text-slate-50">
                  di Web Profile saya
                </h2>
                <p className="mt-10 text-lg text-slate-700 dark:text-slate-50">
                  Saya Wahyu Zuliyono dan saya adalah seorang{" "}
                  <code className="text-slate-900 dark:text-slate-50 bg-white rounded-lg px-2 py-1 border border-slate-300/80">
                    <TypingText text={"Web Developer"} />
                    <span className="animate-pulse duration-50">_</span>
                  </code>
                </p>

                <div className="flex gap-3 mt-2">
                  <div className="border border-slate-300/80 rounded-lg p-2 grayscale hover:grayscale-0 hover:border-[#5FA04E] transition-all duration-300">
                    <FaNodeJs size={32} className="text-[#5FA04E]" />
                  </div>
                  <div className="border border-slate-300/80 rounded-lg p-2 grayscale hover:grayscale-0 hover:border-[#61DAFB] transition-all duration-300">
                    <FaReact size={32} className="text-[#61DAFB]" />
                  </div>
                  <div className="border border-slate-300/80 rounded-lg p-2 grayscale hover:grayscale-0 hover:border-[#FF2D20] transition-all duration-300">
                    <FaLaravel size={32} className="text-[#FF2D20]" />
                  </div>
                  <div className="border border-slate-300/80 rounded-lg p-2 grayscale hover:grayscale-0 hover:border-[#9553E9] transition-all duration-300">
                    <SiInertia size={32} className="text-[#9553E9]" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* About Section */}
        <section className="pt-32 pb-24 bg-slate-50 dark:bg-stone-900/90">
          <div className="">
            <div className="rotate-5">
              <ParallexText baseVelocity={5}>React.JS</ParallexText>
            </div>
            <div className="rotate-6">
              <ParallexText baseVelocity={-5}>Next.JS</ParallexText>
            </div>
            <div className="-rotate-[8deg]">
              <ParallexText baseVelocity={5}>Laravel</ParallexText>
            </div>
          </div>

          <div className="mt-16 md:mt-40 container max-w-5xl">
            <div className="flex flex-col md:flex-row  dark:bg-stone-900/90 p-5 gap-10 ">
              <div className="">
                <motion.div
                  initial={{ translateY: 20, opacity: 0, rotate: 0 }}
                  whileInView={{ translateY: 0, opacity: 1, rotate: 8 }}
                  transition={{ duration: 0.75, ease: "easeInOut", delay: 0.3 }}
                  className="bg-stone-900 rounded-lg shadow-md justify-self-center md:justify-self-start h-52 w-52 md:h-60 md:w-60 cursor-pointer transition duration-500 ease-in-out"
                >
                  <Image
                    src="/hero-profile.webp"
                    width={200}
                    height={200}
                    className="w-full h-full object-center object-cover"
                    alt="Profile Picture"
                    loading="lazy"
                  />
                </motion.div>

                <motion.div
                  initial={{ translateY: 20, opacity: 0 }}
                  whileInView={{ translateY: 0, opacity: 1 }}
                  transition={{ duration: 0.75, ease: "easeInOut", delay: 0.5 }}
                  className="flex flex-row items-center gap-2 pt-8"
                >
                  <a
                    aria-label="Instagram"
                    href="https://www.instagram.com/wahyu.zull"
                    target="_blank"
                  >
                    <FaInstagram size={24} />
                  </a>
                  <a
                    aria-label="Github"
                    href="https://github.com/WahyuZull/"
                    target="_blank"
                  >
                    <FaGithub size={24} />
                  </a>
                  <a
                    aria-label="LinkedIn"
                    href="https://www.linkedin.com/in/wahyu-z-3a66b7b5/"
                    target="_blank"
                  >
                    <FaLinkedin size={24} />
                  </a>
                  <a
                    aria-label="Whatsapp"
                    href="https://wa.me/6285727084912"
                    target="_blank"
                  >
                    <FaWhatsapp size={24} />
                  </a>
                  <span className="flex items-center gap-2">
                    <hr className="border border-stone-900/80 w-[40px]" />
                    <span className="text-sm text-slate-500 dark:text-slate-50">
                      find me!
                    </span>
                  </span>
                </motion.div>
              </div>

              {/* Short Description */}
              <div>
                <Link href="/about" aria-label="Tentang Saya">
                  <motion.h2
                    initial={{ translateY: 20, opacity: 0 }}
                    whileInView={{ translateY: 0, opacity: 1 }}
                    transition={{
                      duration: 0.75,
                      ease: "easeInOut",
                      delay: 0.2,
                    }}
                    className="text-3xl md:text-4xl mb-6"
                  >
                    Tentang Saya
                  </motion.h2>
                </Link>
                <motion.p
                  initial={{ translateY: 20, opacity: 0 }}
                  whileInView={{ translateY: 0, opacity: 1 }}
                  transition={{
                    duration: 0.75,
                    ease: "easeInOut",
                    delay: 0.4,
                  }}
                  className="mb-6 text-base text-slate-700"
                >
                  Saya baru memulai karir saya sebagai Website Developer. Saya
                  memiliki pengalaman dalam menggunakan React.JS dan Laravel
                  untuk membangun aplikasi web yang responsif dan dinamis. Saya
                  sangat antusias untuk terus belajar dan mengembangkan
                  keterampilan saya dalam pengembangan web. Saya percaya bahwa
                  kombinasi dari kemampuan teknis saya dan semangat untuk
                  belajar akan membuat saya menjadi Website Developer yang
                  handal.
                </motion.p>
              </div>
            </div>
          </div>

          <div className="mt-12">
            <div className="rotate-3">
              <ParallexText baseVelocity={-5}>Front-End Web Dev</ParallexText>
            </div>
            <div className="rotate-1">
              <ParallexText baseVelocity={5}>Back-End Web Dev</ParallexText>
            </div>
          </div>
        </section>
        {/* Portfolio Section */}
        <section className="py-24 bg-white dark:bg-stone-900">
          <div className="place-items-center place-content-center mb-12">
            <motion.h2
              initial={{ translateY: 20, opacity: 0 }}
              whileInView={{ translateY: 0, opacity: 1 }}
              transition={{ duration: 0.75, ease: "easeInOut" }}
              className="flex gap-2 items-center mb-2 text-sm md:text-base font-bold text-center bg-stone-900 text-slate-50 rounded-full max-w-fit px-4 py-1"
            >
              <FaCircle size={10} className="animate-pulse" />
              <span>Portfolio</span>
            </motion.h2>
            <Link href="/portfolio">
              <motion.p
                initial={{ translateY: 20, opacity: 0 }}
                whileInView={{ translateY: 0, opacity: 1 }}
                transition={{ duration: 0.75, ease: "easeInOut", delay: 0.25 }}
                className="text-3xl md:text-4xl"
              >
                Proyek Saya
              </motion.p>
            </Link>
          </div>
          <div className="container max-w-5xl">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
              {/* Projek 1 */}
              <div className="">
                <motion.div
                  initial={{ translateY: 20, opacity: 0 }}
                  whileInView={{ translateY: 0, opacity: 1 }}
                  transition={{ duration: 0.75, ease: "easeInOut" }}
                  className="rounded-lg shadow-md overflow-hidden"
                >
                  <div className="block">
                    <img
                      src="/fe-gpn.png"
                      alt="Portfolio"
                      className="w-full h-full object-cover"
                    />
                  </div>
                </motion.div>
                <motion.div
                  initial={{ translateX: 20, opacity: 0 }}
                  whileInView={{ translateX: 0, opacity: 1 }}
                  transition={{ duration: 0.75, ease: "easeInOut", delay: 0.2 }}
                  className="p-5"
                >
                  <a
                    href="https://web-gpn-percobaan.netlify.app/"
                    target="_blank"
                  >
                    <h3 className="text-2xl font-bold mb-2">Fashion Store</h3>
                  </a>
                  <p className="text-slate-700 dark:text-slate-300 mb-4">
                    Fashion Store adalah aplikasi e-commerce yang dibangun
                    menggunakan React.js dan Tailwind CSS. Aplikasi ini memiliki
                    fitur seperti menampilkan produk, menambahkan produk ke
                    keranjang, dan menghapus produk dari keranjang. Aplikasi ini
                    juga memiliki fitur manajemen akun pengguna.
                  </p>
                  <a
                    href="https://web-gpn-percobaan.netlify.app/"
                    target="_blank"
                    className="font-bold text-slate-700 hover:underline"
                  >
                    Lihat Demo &rarr;
                  </a>
                </motion.div>
              </div>
              {/* Projek 2 */}
              <div className="">
                <motion.div
                  initial={{ translateY: 20, opacity: 0 }}
                  whileInView={{ translateY: 0, opacity: 1 }}
                  transition={{ duration: 0.75, ease: "easeInOut", delay: 0.4 }}
                  className="rounded-lg shadow-md overflow-hidden"
                >
                  <div className="block">
                    <img
                      src="/dashboard-sim-2.png"
                      alt="Portfolio"
                      className="w-full h-full object-cover"
                    />
                  </div>
                </motion.div>
                <motion.div
                  initial={{ translateX: 20, opacity: 0 }}
                  whileInView={{ translateX: 0, opacity: 1 }}
                  transition={{ duration: 0.75, ease: "easeInOut", delay: 0.6 }}
                  className="p-5"
                >
                  <a href="/portfolio/">
                    <h3 className="text-2xl font-bold mb-2">SiInforMan</h3>
                  </a>
                  <p className="text-slate-700 dark:text-slate-300 mb-4">
                    SiInforMan adalah dashboard manajemen anggota organisasi
                    kemasyarakatan. Aplikasi ini memiliki fitur seperti
                    menampilkan daftar anggota, menambahkan anggota, mengubah
                    anggota, dan menghapus anggota. Aplikasi ini juga memiliki
                    fitur manajemen surat. Aplikasi ini dibangun dengan Laravel,
                    React.js dan Inertia.js.
                  </p>
                  <a
                    href="https://notes-app-back-end.netlify.app"
                    target="_blank"
                    className="font-bold text-slate-700 hover:underline"
                  >
                    Lihat Demo &rarr;
                  </a>
                </motion.div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </BaseLayout>
  );
}
