"use client";
import { useState } from "react";
import { motion } from "framer-motion";

export default function ContactForm() {
  const [emailMesssage, setEmailMessage] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleSendEmail = (e) => {
    e.preventDefault();
    window.location.href = `mailto:wahyu.zuliyono@gmail.com&subject=Mail from ${emailMesssage.name}&body=${emailMesssage.message}`;
    setEmailMessage({
      name: "",
      email: "",
      message: "",
    });
  };

  return (
    <motion.form
      initial={{ translateY: 20, opacity: 0 }}
      animate={{ translateY: 0, opacity: 1 }}
      transition={{ duration: 0.75, ease: "easeInOut", delay: 0.25 }}
      id="form"
      onSubmit={handleSendEmail}
      className="mt-12 w-full space-y-6 bg-white dark:bg-stone-800 rounded-lg p-6 shadow-md"
    >
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <input
          type="text"
          placeholder="Nama"
          className="w-full p-3 border border-gray-300 rounded-md"
          value={emailMesssage.name}
          onChange={(e) =>
            setEmailMessage({
              ...emailMesssage,
              name: e.target.value,
            })
          }
          onBlur={(e) =>
            setEmailMessage({
              ...emailMesssage,
              name: e.target.value,
            })
          }
        />
        <input
          type="email"
          placeholder="Email"
          className="w-full p-3 border border-gray-300 rounded-md"
          value={emailMesssage.email}
          onChange={(e) =>
            setEmailMessage({
              ...emailMesssage,
              email: e.target.value,
            })
          }
          onBlur={(e) =>
            setEmailMessage({
              ...emailMesssage,
              email: e.target.value,
            })
          }
        />
      </div>
      <textarea
        placeholder="Pesan"
        className="w-full p-3 border border-gray-300 rounded-md"
        value={emailMesssage.message}
        onChange={(e) =>
          setEmailMessage({
            ...emailMesssage,
            message: e.target.value,
          })
        }
        onBlur={(e) =>
          setEmailMessage({
            ...emailMesssage,
            message: e.target.value,
          })
        }
        rows="6"
      ></textarea>
      <button
        type="submit"
        className="w-full py-3 bg-stone-900 text-white rounded-md hover:bg-stone-700 transition-colors"
      >
        Kirim Pesan
      </button>
    </motion.form>
  );
}
