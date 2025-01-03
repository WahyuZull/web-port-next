import { FaGithub, FaInstagram, FaLinkedin, FaWhatsapp } from "react-icons/fa6";

export default function Footer() {
  return (
    <footer>
      <div
        className="container py-24"
        style={{
          backgroundImage: "url('/bg-footer.webp')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backdropFilter: "blur(10px)",
        }}
      >
        <div className="block place-items-center">
          <h2 className="text-2xl font-bold text-white">
            Let's Build Something Together
          </h2>
          <p className="text-white mt-2">
            Punya ide-ide menarik? Hubungi saya di WhatsApp dan mari kita
            wujudkan ide-ide Anda.
          </p>
          <a
            href="https://wa.me/6285727084912"
            target="_blank"
            aria-label="WhatsApp"
            className="inline-block mt-4 px-6 py-2 text-white bg-green-600 rounded-full hover:bg-green-700"
          >
            Hubungi Saya di WhatsApp
          </a>
        </div>
      </div>
      <div className="container p-10 border-t border-slate-200 dark:border-stone-800">
        <div className="flex flex-col md:flex-row justify-between items-center gap-2">
          <p className="text-sm text-slate-700">
            &copy; {new Date().getFullYear()} Wahyu Zuliyono. All right
            reserved.
          </p>
          <div className="flex flex-row gap-2">
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
              href="https://www.linkedin.com/in/wahyu-zuliyono"
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
          </div>
        </div>
      </div>
    </footer>
  );
}
