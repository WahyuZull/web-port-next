"use client";
import BaseLayout from "@/Layouts/BaseLayout";
import Image from "next/image";
import {
  FaCircle,
  FaElementor,
  FaGithub,
  FaInstagram,
  FaLaravel,
  FaLinkedin,
  FaReact,
  FaWhatsapp,
  FaWordpress,
} from "react-icons/fa6";
import { RiNextjsLine } from "react-icons/ri";
import {
  SiCss3,
  SiHtml5,
  SiJavascript,
  SiNodedotjs,
  SiTailwindcss,
  SiInertia,
} from "react-icons/si";
import { motion } from "framer-motion";

export default function About() {
  return (
    <BaseLayout>
      {/* About Section */}
      <section className="pt-32 bg-slate-50">
        <div className="container max-w-5xl flex flex-col md:flex-row gap-14">
          <div>
            <motion.div
              initial={{ translateY: 20, opacity: 0 }}
              animate={{ translateY: 0, opacity: 1 }}
              transition={{ duration: 0.75, ease: "easeInOut", delay: 0.2 }}
            >
              <h2 className="flex gap-2 items-center mb-2 text-sm md:text-base font-bold text-center bg-stone-900 text-slate-50 rounded-full max-w-fit px-4 py-1">
                <FaCircle size={10} className="animate-pulse" />
                About Me
              </h2>
              <p className="text-3xl font-bold mb-3">What About Me?</p>
            </motion.div>
            <motion.div
              initial={{ translateY: 20, opacity: 0, rotate: 0 }}
              animate={{ translateY: 0, opacity: 1, rotate: 8 }}
              transition={{ duration: 0.75, ease: "easeInOut", delay: 0.3 }}
              className="mt-12 bg-stone-900 rounded-lg shadow-md justify-self-center md:justify-self-start h-52 w-52 md:h-60 md:w-60 cursor-pointer transition duration-500 ease-in-out"
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
              animate={{ translateY: 0, opacity: 1 }}
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

          {/* About Me */}
          <motion.div
            initial={{ translateX: 20, opacity: 0 }}
            animate={{ translateX: 0, opacity: 1 }}
            transition={{
              duration: 0.75,
              ease: "easeInOut",
              delayChildren: 0.75,
            }}
            className="md:mt-20 space-y-6"
          >
            <p className="text-base text-slate-700">
              Hai! Saya Wahyu Zuliyono. Biasa dipanggil wahyu zull. Saya adalah
              seorang Website Developer yang bersemangat dalam menciptakan
              pengalaman pengguna yang luar biasa. Domisili saya di Kudus, Jawa
              Tengah. Lulusan dari SMK jurusan Teknik Komputer dan Jaringan.
            </p>
            <p className="text-base text-slate-700">
              Saya baru memulai karir saya sebagai Website Developer. Saya
              memiliki pengalaman dalam menggunakan React.JS dan Laravel untuk
              membangun aplikasi web yang responsif dan dinamis. Saya sangat
              antusias untuk terus belajar dan mengembangkan keterampilan saya
              dalam pengembangan web. Saya percaya bahwa kombinasi dari
              kemampuan teknis saya dan semangat untuk belajar akan membuat saya
              menjadi Website Developer yang handal.
            </p>
            <p className="text-base text-slate-700">
              Saya telah terlibat dalam beberapa proyek yang menggunakan
              teknologi Laravel, Inertia.js, dan React.js. Dalam proyek-proyek
              tersebut, saya berhasil membangun aplikasi web yang efisien dan
              user-friendly. Salah satu proyek yang saya banggakan adalah
              pengembangan sistem manajemen keanggotaan organisasi yang
              memungkinkan pengguna untuk mengelola manajerial mereka dengan
              mudah dan cepat. Selain itu, saya juga mencoba mengembangkan
              aplikasi web menggunakan Next.js, termasuk situs web ini. Saya
              sangat antusias untuk bergabung dengan proyek baru dan
              berkontribusi dengan keterampilan dan pengalaman saya.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Skills */}
      <section className="pt-24 pb-12 bg-slate-50 dark:bg-stone-900/90">
        <div className="container max-w-5xl">
          <motion.div
            initial={{ translateY: 20, opacity: 0 }}
            whileInView={{ translateY: 0, opacity: 1 }}
            transition={{ duration: 0.75, ease: "easeInOut" }}
            className="place-items-center mb-8"
          >
            <h2 className="flex gap-2 items-center mb-2 text-sm md:text-base font-bold text-center bg-stone-900 text-slate-50 rounded-full max-w-fit px-4 py-1">
              <FaCircle size={10} className="animate-pulse" />
              <span>Skills</span>
            </h2>
            <p className="text-3xl text-center font-bold">Tech Stack</p>
          </motion.div>

          {/* Technical Skills */}
          <div className="container max-w-5xl">
            <div className="flex flex-col justify-between gap-4 md:gap-8 md:flex-row">
              <motion.div
                initial={{ translateX: -20, opacity: 0 }}
                whileInView={{ translateX: 0, opacity: 1 }}
                transition={{ duration: 0.75, ease: "easeInOut", delay: 0.25 }}
                className="grid grid-cols-2 gap-4 place-items-center md:grid-cols-3 lg:grid-cols-4"
              >
                <div className="flex flex-col justify-center items-center text-center mask mask-squircle bg-white w-20 h-20 p-2.5 hover:shadow-sm hover:scale-125 hover:cursor-pointer transition duration-150 ease-in">
                  <SiHtml5 size={32} className="text-[#E34F26]" />
                  <span className="text-xs mt-2">HTML</span>
                </div>
                <div className="flex flex-col justify-center items-center text-center mask mask-squircle bg-white w-20 h-20 p-2.5 hover:shadow-sm hover:scale-125 hover:cursor-pointer transition duration-150 ease-in">
                  <SiCss3 size={32} className="text-[#1572B6]" />
                  <span className="text-xs mt-2">CSS</span>
                </div>
                <div className="flex flex-col justify-center items-center text-center mask mask-squircle bg-white w-20 h-20 p-2.5 hover:shadow-sm hover:scale-125 hover:cursor-pointer transition duration-150 ease-in">
                  <SiJavascript size={32} className="text-[#F7DF1E]" />
                  <span className="text-xs mt-2">JavaScript</span>
                </div>
                <div className="flex flex-col justify-center items-center text-center mask mask-squircle bg-white w-20 h-20 p-2.5 hover:shadow-sm hover:scale-125 hover:cursor-pointer transition duration-150 ease-in">
                  <SiNodedotjs size={32} className="text-[#5FA04E]" />
                  <span className="text-xs mt-2">Node.js</span>
                </div>
                <div className="flex flex-col justify-center items-center text-center mask mask-squircle bg-white w-20 h-20 p-2.5 hover:shadow-sm hover:scale-125 hover:cursor-pointer transition duration-150 ease-in">
                  <SiTailwindcss size={32} className="text-[#06B6D4]" />
                  <span className="text-xs mt-2">TailwindCSS</span>
                </div>
                <div className="flex flex-col justify-center items-center text-center mask mask-squircle bg-white w-20 h-20 p-2.5 hover:shadow-sm hover:scale-125 hover:cursor-pointer transition duration-150 ease-in">
                  <FaReact size={32} className="text-[#61DAFB]" />
                  <span className="text-xs mt-2">React.js</span>
                </div>
                <div className="flex flex-col justify-center items-center text-center mask mask-squircle bg-white w-20 h-20 p-2.5 hover:shadow-sm hover:scale-125 hover:cursor-pointer transition duration-150 ease-in">
                  <FaLaravel size={32} className="text-[#FF2D20]" />
                  <span className="text-xs mt-2">Laravel</span>
                </div>
                <div className="flex flex-col justify-center items-center text-center mask mask-squircle bg-white w-20 h-20 p-2.5 hover:shadow-sm hover:scale-125 hover:cursor-pointer transition duration-150 ease-in">
                  <SiInertia size={32} className="text-[#9553E9]" />
                  <span className="text-xs mt-2">Inertia.js</span>
                </div>
                <div className="flex flex-col justify-center items-center text-center mask mask-squircle bg-white w-20 h-20 p-2.5 hover:shadow-sm hover:scale-125 hover:cursor-pointer transition duration-150 ease-in">
                  <RiNextjsLine size={32} className="text-black" />
                  <span className="text-xs mt-2">Next.js</span>
                </div>
                <div className="flex flex-col justify-center items-center text-center mask mask-squircle bg-white w-20 h-20 p-2.5 hover:shadow-sm hover:scale-125 hover:cursor-pointer transition duration-150 ease-in">
                  <FaWordpress size={32} className="text-[#21759B]" />
                  <span className="text-xs mt-2">Wordpress</span>
                </div>
                <div className="flex flex-col justify-center items-center text-center mask mask-squircle bg-white w-20 h-20 p-2.5 hover:shadow-sm hover:scale-125 hover:cursor-pointer transition duration-150 ease-in">
                  <FaElementor size={32} className="text-[#92003B]" />
                  <span className="text-xs mt-2">Elementor</span>
                </div>
              </motion.div>

              <div className="flex-1">
                <motion.div
                  initial={{ translateY: 20, opacity: 0 }}
                  whileInView={{ translateY: 0, opacity: 1 }}
                  transition={{ duration: 0.75, ease: "easeInOut", delay: 0.4 }}
                  className="overflow-hidden rounded-lg shadow-md"
                >
                  <div className="h-96 w-full">
                    <Image
                      src={"/tech-image.webp"}
                      alt="Tech Image"
                      width={400}
                      height={200}
                      className="w-full h-full object-cover object-center"
                      loading="lazy"
                    />
                  </div>
                </motion.div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Certificate */}
      <section className="py-24 bg-slate-50 dark:bg-stone-900/90">
        <div className="container max-w-5xl">
          <motion.h2
            initial={{ translateX: 20, opacity: 0 }}
            whileInView={{ translateX: 0, opacity: 1 }}
            transition={{ duration: 0.75, ease: "easeInOut" }}
            className="flex gap-2 items-center mb-2 text-sm md:text-base font-bold text-center bg-stone-900 text-slate-50 rounded-full max-w-fit px-4 py-1"
          >
            <FaCircle size={10} className="animate-pulse" />
            Certificate
          </motion.h2>
          <motion.p
            initial={{ translateX: 20, opacity: 0 }}
            whileInView={{ translateX: 0, opacity: 1 }}
            transition={{ duration: 0.75, ease: "easeInOut", delay: 0.25 }}
            className="text-3xl font-bold mb-8"
          >
            Achievement
          </motion.p>

          <div>
            <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:gap-8">
              <motion.div
                initial={{ translateY: 20, opacity: 0 }}
                whileInView={{ translateY: 0, opacity: 1 }}
                transition={{ duration: 0.75, ease: "easeInOut", delay: 0.45 }}
                className="overflow-hidden rounded-lg shadow-sm bg-white hover:shadow-lg hover:scale-105 transition duration-150 ease-in"
              >
                <div className="h-64 w-full">
                  <img
                    src="https://loremflickr.com/400/400?random=1"
                    className="h-full w-full object-cover object-center"
                    alt="image-certificate-1"
                    loading="lazy"
                  />
                </div>
              </motion.div>
              <motion.div
                initial={{ translateY: 20, opacity: 0 }}
                whileInView={{ translateY: 0, opacity: 1 }}
                transition={{ duration: 0.75, ease: "easeInOut", delay: 0.55 }}
                className="overflow-hidden rounded-lg shadow-sm bg-white hover:shadow-lg hover:scale-105 transition duration-150 ease-in"
              >
                <div className="h-64 w-full">
                  <img
                    src="https://loremflickr.com/400/400?random=2"
                    className="h-full w-full object-cover object-center"
                    alt="image-certificate-2"
                    loading="lazy"
                  />
                </div>
              </motion.div>
              <motion.div
                initial={{ translateY: 20, opacity: 0 }}
                whileInView={{ translateY: 0, opacity: 1 }}
                transition={{ duration: 0.75, ease: "easeInOut", delay: 0.65 }}
                className="overflow-hidden rounded-lg shadow-sm bg-white hover:shadow-lg hover:scale-105 transition duration-150 ease-in"
              >
                <div className="h-64 w-full">
                  <img
                    src="https://loremflickr.com/400/400?random=3"
                    className="h-full w-full object-cover object-center"
                    alt="image-certificate-3"
                    loading="lazy"
                  />
                </div>
              </motion.div>
              <motion.div
                initial={{ translateY: 20, opacity: 0 }}
                whileInView={{ translateY: 0, opacity: 1 }}
                transition={{ duration: 0.75, ease: "easeInOut", delay: 0.75 }}
                className="overflow-hidden rounded-lg shadow-sm bg-white hover:shadow-lg hover:scale-105 transition duration-150 ease-in"
              >
                <div className="h-64 w-full">
                  <img
                    src="https://loremflickr.com/400/400?random=4"
                    className="h-full w-full object-cover object-center"
                    alt="image-certificate-4"
                    loading="lazy"
                  />
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>
    </BaseLayout>
  );
}