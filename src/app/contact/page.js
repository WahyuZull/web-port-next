"use client";
import ContactForm from "@/Components/Molecules/ContactForm";
import BaseLayout from "@/Layouts/BaseLayout";
import { FaCircle, FaGithub, FaInstagram, FaWhatsapp } from "react-icons/fa6";
import { IoMailOutline } from "react-icons/io5";
import { RiHomeLine } from "react-icons/ri";
import { motion } from "framer-motion";

export default function Contact() {
  return (
    <BaseLayout>
      <section className="pt-24 pb-12 bg-slate-50 dark:bg-stone-900/90">
        <div className="container max-w-5xl">
          <section className="py-24 bg-slate-50 dark:bg-stone-900/90">
            <div className="container max-w-5xl grid grid-cols-1 md:grid-cols-2 gap-10">
              <div className="w-full container">
                <motion.h2
                  initial={{ translateY: 20, opacity: 0 }}
                  animate={{ translateY: 0, opacity: 1 }}
                  transition={{ duration: 0.75, ease: "easeInOut" }}
                  className="text-left flex gap-2 items-center mb-2 text-sm md:text-base font-bold bg-stone-900 text-slate-50 rounded-full max-w-fit px-4 py-1"
                >
                  <FaCircle size={10} className="animate-pulse" />
                  Kontak
                </motion.h2>
                <motion.p
                  initial={{ translateY: 20, opacity: 0 }}
                  animate={{ translateY: 0, opacity: 1 }}
                  transition={{
                    duration: 0.75,
                    ease: "easeInOut",
                    delay: 0.25,
                  }}
                  className="text-3xl mb-8 md:text-4xl"
                >
                  Hubungi Saya
                </motion.p>
                <motion.p
                  initial={{ translateX: 20, opacity: 0 }}
                  animate={{ translateX: 0, opacity: 1 }}
                  transition={{
                    duration: 0.75,
                    ease: "easeInOut",
                    delay: 0.45,
                  }}
                  className="text-base text-slate-700 dark:text-slate-300"
                >
                  Jika Anda memiliki pertanyaan atau ingin mendiskusikan sebuah
                  proyek, jangan ragu untuk menghubungi saya. Saya selalu
                  terbuka untuk peluang dan kolaborasi baru.
                </motion.p>

                <motion.div
                  initial={{ translateX: 20, opacity: 0 }}
                  animate={{ translateX: 0, opacity: 1 }}
                  transition={{
                    duration: 0.75,
                    ease: "easeInOut",
                    delay: 0.65,
                  }}
                  className="mt-4"
                >
                  <span className="flex items-center mb-2 text-slate-700 dark:text-slate-300">
                    <RiHomeLine size={22} className="inline-block mr-2" />
                    Kudus, Jawa Tengah, Indonesia
                  </span>
                  <span className="flex items-center mb-2 text-slate-700 dark:text-slate-300">
                    <IoMailOutline size={22} className="inline-block mr-2" />
                    wahyu.zuliyono@gmail.com
                  </span>
                  <span className="flex items-center mb-2 text-slate-700 dark:text-slate-300">
                    <FaInstagram size={22} className="inline-block mr-2" />
                    <a
                      href="https://instagram.com/wahyuzull"
                      target="_blank"
                      aria-label="Instagram Wahyu Zull"
                    >
                      @wahyuzull
                    </a>
                  </span>
                  <span className="flex items-center mb-2 text-slate-700 dark:text-slate-300">
                    <FaGithub size={22} className="inline-block mr-2" />
                    <a
                      href="https://github.com/WahyuZull"
                      target="_blank"
                      aria-label="Github Wahyu Zull"
                    >
                      WahyuZull
                    </a>
                  </span>
                  <span className="flex items-center mb-2 text-slate-700 dark:text-slate-300">
                    <FaWhatsapp size={22} className="inline-block mr-2" />
                    <a
                      href="https://wa.me/6285727084912"
                      target="_blank"
                      aria-label="WhatsApp Wahyu Zull"
                    >
                      62 857-2708-4912
                    </a>
                  </span>
                </motion.div>
              </div>

              <ContactForm />
            </div>
          </section>
        </div>
      </section>
    </BaseLayout>
  );
}
