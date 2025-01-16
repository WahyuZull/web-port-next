"use client";
import BaseLayout from "@/Layouts/BaseLayout";
import {
  FaCircle,
  FaElementor,
  FaLaravel,
  FaReact,
  FaSass,
  FaWordpress,
} from "react-icons/fa6";
import { RiNextjsLine } from "react-icons/ri";
import {
  SiInertia,
  SiJavascript,
  SiNetlify,
  SiNodedotjs,
} from "react-icons/si";
import { motion } from "framer-motion";

export default function Portfolio() {
  return (
    <BaseLayout>
      <section className="pt-24 pb-12 bg-slate-50 dark:bg-stone-900/90">
        <div className="container max-w-5xl">
          <motion.h2
            initial={{ translateX: 20, opacity: 0 }}
            animate={{ translateX: 0, opacity: 1 }}
            transition={{ duration: 0.75, ease: "easeInOut" }}
            className="flex gap-2 items-center mb-2 text-sm md:text-base font-bold text-center bg-stone-900 text-slate-50 rounded-full max-w-fit px-4 py-1"
          >
            <FaCircle size={10} className="animate-pulse" />
            Portfolio
          </motion.h2>
          <motion.p
            initial={{ translateX: 20, opacity: 0 }}
            animate={{ translateX: 0, opacity: 1 }}
            transition={{ duration: 0.75, ease: "easeInOut", delay: 0.25 }}
            className="text-3xl font-bold mb-8"
          >
            Here it's my work
          </motion.p>

          <div className="space-y-16 mb-24">
            {/* Proyek 1 */}
            <div className="flex flex-wrap gap-4 lg:gap-8">
              <div className="md:flex-1">
                <motion.div
                  initial={{ translateY: 20, opacity: 0 }}
                  animate={{ translateY: 0, opacity: 1 }}
                  transition={{ duration: 0.75, ease: "easeInOut" }}
                  className="overflow-hidden rounded-xl shadow-md"
                >
                  <img
                    alt="proyek terbaru satu"
                    src="/back-end-notes-api.png"
                    className="object-cover object-center"
                  />
                </motion.div>
              </div>
              <div className="md:flex-1 p-5">
                <motion.div
                  initial={{ translateX: 20, opacity: 0 }}
                  animate={{ translateX: 0, opacity: 1 }}
                  transition={{
                    duration: 0.75,
                    ease: "easeInOut",
                    delay: 0.25,
                  }}
                  className="mb-4"
                >
                  <a
                    href="https://notes-app-back-end.netlify.app"
                    target="_blank"
                  >
                    <p className="card-title mb-3">
                      Notes App Back End - API dengan Node.js
                    </p>
                  </a>
                  <p className="text-base text-slate-700">
                    Notes App Back End adalah API sederhana untuk aplikasi
                    catatan. Aplikasi memiliki fitur seperti create, read,
                    update, dan menghapus catatan. API ini dibangun dengan
                    Javascript dan Node.js. Aplikasi ini di-hosting di Netlify.
                  </p>
                  <a
                    href="https://notes-app-back-end.netlify.app"
                    target="_blank"
                    className="btn btn-ghost btn-sm mt-4"
                  >
                    Lihat Proyek &rarr;
                  </a>
                </motion.div>
                <motion.div
                  initial={{ translateX: 20, opacity: 0 }}
                  animate={{ translateX: 0, opacity: 1 }}
                  transition={{ duration: 0.75, ease: "easeInOut", delay: 0.4 }}
                  className="flex flex-wrap gap-4 lg:gap-8"
                >
                  <div className="flex flex-col justify-center items-center text-center mask mask-squircle bg-white w-20 h-20 p-2.5 hover:shadow-md hover:scale-125 hover:cursor-pointer transition duration-150 ease-in">
                    <SiJavascript size={32} className="text-[#F7DF1E]" />
                    <span className="text-xs mt-2">JavaScript</span>
                  </div>
                  <div className="flex flex-col justify-center items-center text-center mask mask-squircle bg-white w-20 h-20 p-2.5 hover:shadow-md hover:scale-125 hover:cursor-pointer transition duration-150 ease-in">
                    <SiNodedotjs size={32} className="text-[#5FA04E]" />
                    <span className="text-xs mt-2">Node.js</span>
                  </div>
                  <div className="flex flex-col justify-center items-center text-center mask mask-squircle bg-white w-20 h-20 p-2.5 hover:shadow-md hover:scale-125 hover:cursor-pointer transition duration-150 ease-in">
                    <SiNetlify size={32} className="text-[#00C7B7]" />
                    <span className="text-xs mt-2">Netlify</span>
                  </div>
                </motion.div>
              </div>
            </div>

            {/* Proyek 2 */}
            <div className="flex flex-wrap-reverse gap-4 lg:gap-8">
              <div className="md:flex-1 p-5">
                <motion.div
                  initial={{ translateX: -20, opacity: 0 }}
                  whileInView={{ translateX: 0, opacity: 1 }}
                  transition={{
                    duration: 0.75,
                    ease: "easeInOut",
                    delay: 0.25,
                  }}
                  className="mb-4"
                >
                  <a
                    href="https://doyanmakan-restocatalogue.netlify.app/"
                    target="_blank"
                  >
                    <p className="card-title mb-3">
                      Doyan Makan - Restaurant Catalogue
                    </p>
                  </a>
                  <p className="text-base text-slate-700">
                    Doyan Makan adalah aplikasi katalog restoran. Aplikasi ini
                    memiliki fitur seperti melihat daftar restoran, melihat
                    detail restoran, dan menambahkan restoran ke favorit.
                    Aplikasi ini dibangun dengan Javascript dan Sass. Aplikasi
                    ini di-hosting di Netlify.
                  </p>
                  <a
                    href="https://doyanmakan-restocatalogue.netlify.app/"
                    target="_blank"
                    className="btn btn-ghost btn-sm mt-4"
                  >
                    Lihat Proyek &rarr;
                  </a>
                </motion.div>
                <motion.div
                  initial={{ translateX: -20, opacity: 0 }}
                  whileInView={{ translateX: 0, opacity: 1 }}
                  transition={{
                    duration: 0.75,
                    ease: "easeInOut",
                    delay: 0.4,
                  }}
                  className="flex flex-wrap gap-4 lg:gap-8"
                >
                  <div className="flex flex-col justify-center items-center text-center mask mask-squircle bg-white w-20 h-20 p-2.5 hover:shadow-md hover:scale-125 hover:cursor-pointer transition duration-150 ease-in">
                    <SiJavascript size={32} className="text-[#F7DF1E]" />
                    <span className="text-xs mt-2">JavaScript</span>
                  </div>
                  <div className="flex flex-col justify-center items-center text-center mask mask-squircle bg-white w-20 h-20 p-2.5 hover:shadow-md hover:scale-125 hover:cursor-pointer transition duration-150 ease-in">
                    <FaSass size={32} className="text-[#CC6699]" />
                    <span className="text-xs mt-2">Sass</span>
                  </div>
                  <div className="flex flex-col justify-center items-center text-center mask mask-squircle bg-white w-20 h-20 p-2.5 hover:shadow-md hover:scale-125 hover:cursor-pointer transition duration-150 ease-in">
                    <SiNetlify size={32} className="text-[#00C7B7]" />
                    <span className="text-xs mt-2">Netlify</span>
                  </div>
                </motion.div>
              </div>
              <div className="md:flex-1">
                <motion.div
                  initial={{ translateY: 20, opacity: 0 }}
                  whileInView={{ translateY: 0, opacity: 1 }}
                  transition={{
                    duration: 0.75,
                    ease: "easeInOut",
                  }}
                  className="overflow-hidden rounded-xl shadow-md"
                >
                  <img
                    alt="latest project one"
                    src="/doyan-makan.png"
                    className="object-cover object-center"
                  />
                </motion.div>
              </div>
            </div>

            {/* Project 3 */}
            <div className="flex flex-wrap gap-4 lg:gap-8">
              <div className="md:flex-1">
                <motion.div
                  initial={{ translateY: 20, opacity: 0 }}
                  whileInView={{ translateY: 0, opacity: 1 }}
                  transition={{ duration: 0.75, ease: "easeInOut" }}
                  className="overflow-hidden rounded-xl shadow-md"
                >
                  <img
                    alt="latest project one"
                    src="/minuhida-web.png"
                    className="object-cover object-center"
                  />
                </motion.div>
              </div>
              <div className="md:flex-1 p-5">
                <motion.div
                  initial={{ translateX: 20, opacity: 0 }}
                  whileInView={{ translateX: 0, opacity: 1 }}
                  transition={{
                    duration: 0.75,
                    ease: "easeInOut",
                    delay: 0.25,
                  }}
                  className="mb-4"
                >
                  <p className="card-title mb-3">
                  MI NU Hidayatul Athfal Kudus Official Web - Website Sekolah
                  </p>
                  <p className="text-base text-slate-700">
                    Website resmi MI NU Hidayatul Athfal Kudus adalah website
                    sekolah yang dibangun dengan Wordpress dan Elementor.
                    Website ini memiliki fitur seperti menampilkan informasi
                    sekolah, informasi guru, dan informasi kegiatan sekolah.
                  </p>
                  <a
                    href="https://minuhidayatulathfalkudus.sch.id/"
                    target="_blank"
                    className="btn btn-ghost btn-sm mt-4"
                  >
                    Lihat Proyek &rarr;
                  </a>
                </motion.div>
                <motion.div
                  initial={{ translateX: 20, opacity: 0 }}
                  whileInView={{ translateX: 0, opacity: 1 }}
                  transition={{
                    duration: 0.75,
                    ease: "easeInOut",
                    delay: 0.4,
                  }}
                  className="flex flex-wrap gap-4 lg:gap-8"
                >
                  <div className="flex flex-col justify-center items-center text-center mask mask-squircle bg-white w-20 h-20 p-2.5 hover:shadow-md hover:scale-125 hover:cursor-pointer transition duration-150 ease-in">
                    <FaWordpress size={32} className="text-[#21759B]" />
                    <span className="text-xs mt-2">Wordpress</span>
                  </div>
                  <div className="flex flex-col justify-center items-center text-center mask mask-squircle bg-white w-20 h-20 p-2.5 hover:shadow-md hover:scale-125 hover:cursor-pointer transition duration-150 ease-in">
                    <FaElementor size={32} className="text-[#92003B]" />
                    <span className="text-xs mt-2">Elementor</span>
                  </div>
                </motion.div>
              </div>
            </div>

            {/* Project 4 */}
            <div className="flex flex-wrap-reverse gap-4 lg:gap-8">
              <div className="md:flex-1 p-5">
                <motion.div
                  initial={{ translateX: -20, opacity: 0 }}
                  whileInView={{ translateX: 0, opacity: 1 }}
                  transition={{
                    duration: 0.75,
                    ease: "easeInOut",
                    delay: 0.25,
                  }}
                  className="mb-4"
                >
                  <p className="card-title mb-3">
                    SiInforMan - Dashboard Manajemen Anggota Organisasi
                    Kemasyarakatan
                  </p>
                  <p className="text-base text-slate-700">
                    Aplikasi ini adalah dashboard manajemen anggota organisasi
                    kemasyarakatan. Aplikasi ini memiliki fitur seperti
                    menampilkan daftar anggota, menambahkan anggota, mengubah
                    anggota, dan menghapus anggota. Aplikasi ini juga memiliki
                    fitur manajemen surat. Aplikasi ini dibangun dengan Laravel,
                    React.js dan Inertia.js.
                  </p>
                  <a
                    href="https://notes-app-back-end.netlify.app"
                    target="_blank"
                    className="btn btn-ghost btn-sm mt-4"
                  >
                    Lihat Demo &rarr;
                  </a>
                </motion.div>
                <motion.div
                  initial={{ translateX: -20, opacity: 0 }}
                  whileInView={{ translateX: 0, opacity: 1 }}
                  transition={{
                    duration: 0.75,
                    ease: "easeInOut",
                    delay: 0.4,
                  }}
                  className="flex flex-wrap gap-4 lg:gap-8"
                >
                  <div className="flex flex-col justify-center items-center text-center mask mask-squircle bg-white w-20 h-20 p-2.5 hover:shadow-md hover:scale-125 hover:cursor-pointer transition duration-150 ease-in">
                    <FaLaravel size={32} className="text-[#FF2D20]" />
                    <span className="text-xs mt-2">Laravel</span>
                  </div>
                  <div className="flex flex-col justify-center items-center text-center mask mask-squircle bg-white w-20 h-20 p-2.5 hover:shadow-md hover:scale-125 hover:cursor-pointer transition duration-150 ease-in">
                    <SiInertia size={32} className="text-[#9553E9]" />
                    <span className="text-xs mt-2">Inertia.js</span>
                  </div>
                  <div className="flex flex-col justify-center items-center text-center mask mask-squircle bg-white w-20 h-20 p-2.5 hover:shadow-md hover:scale-125 hover:cursor-pointer transition duration-150 ease-in">
                    <FaReact size={32} className="text-[#61DAFB]" />
                    <span className="text-xs mt-2">React.js</span>
                  </div>
                </motion.div>
              </div>
              <div className="md:flex-1">
                <motion.div
                  initial={{ translateY: 20, opacity: 0 }}
                  whileInView={{ translateY: 0, opacity: 1 }}
                  transition={{
                    duration: 0.75,
                    ease: "easeInOut",
                  }}
                  className="overflow-hidden rounded-xl shadow-md"
                >
                  <img
                    alt="latest project one"
                    src="/dashboard-sim-2.png"
                    className="object-cover object-center"
                  />
                </motion.div>
              </div>
            </div>

            {/* Project 5 */}
            <div className="flex flex-wrap gap-4 lg:gap-8">
              <div className="md:flex-1">
                <motion.div
                  initial={{ translateY: 20, opacity: 0 }}
                  whileInView={{ translateY: 0, opacity: 1 }}
                  transition={{
                    duration: 0.75,
                    ease: "easeInOut",
                  }}
                  className="overflow-hidden rounded-xl shadow-md"
                >
                  <img
                    alt="latest project one"
                    src="/web-porto-next.png"
                    className="object-cover object-center"
                  />
                </motion.div>
              </div>
              <div className="md:flex-1 p-5">
                <motion.div
                  initial={{ translateX: 20, opacity: 0 }}
                  whileInView={{ translateX: 0, opacity: 1 }}
                  transition={{
                    duration: 0.75,
                    ease: "easeInOut",
                    delay: 0.25,
                  }}
                  className="mb-4"
                >
                  <a href="https://wahyuzull.my.id" target="_blank">
                    <p className="card-title mb-3">Web Profile with Next.JS</p>
                  </a>
                  <p className="text-base text-slate-700">
                    Website ini adalah website profil pribadi saya. Website ini
                    dibangun dengan Next.js. Website ini memiliki fitur seperti
                    menampilkan informasi diri, portofolio, dan kontak.
                  </p>
                  <a
                    href="https://wahyuzull.my.id"
                    target="_blank"
                    className="btn btn-ghost btn-sm mt-4"
                  >
                    Lihat Proyek &rarr;
                  </a>
                </motion.div>
                <motion.div
                  initial={{ translateX: 20, opacity: 0 }}
                  whileInView={{ translateX: 0, opacity: 1 }}
                  transition={{
                    duration: 0.75,
                    ease: "easeInOut",
                    delay: 0.4,
                  }}
                  className="flex flex-wrap gap-4 lg:gap-8"
                >
                  <div className="flex flex-col justify-center items-center text-center mask mask-squircle bg-white w-20 h-20 p-2.5 hover:shadow-sm hover:scale-125 hover:cursor-pointer transition duration-150 ease-in">
                    <FaReact size={32} className="text-[#61DAFB]" />
                    <span className="text-xs mt-2">React.js</span>
                  </div>
                  <div className="flex flex-col justify-center items-center text-center mask mask-squircle bg-white w-20 h-20 p-2.5 hover:shadow-sm hover:scale-125 hover:cursor-pointer transition duration-150 ease-in">
                    <RiNextjsLine size={32} className="text-black" />
                    <span className="text-xs mt-2">Next.js</span>
                  </div>
                </motion.div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </BaseLayout>
  );
}
