"use client";

import Image from "next/image";
import React from "react";
import SectionHeading from "./section-heading";
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";
import { sendEmail } from "@/actions/sendEmail";
import zapImg from "@/public/zapImg.PNG";
import SubmitBtn from "./submit-btn";
import toast from "react-hot-toast";

export default function Contact() {
  const { ref } = useSectionInView("Contato");

  return (
    <motion.section
      id="contact"
      ref={ref}
      className="mb-20 sm:mb-28 w-[min(100%,38rem)] text-center"
      initial={{
        opacity: 0,
      }}
      whileInView={{
        opacity: 1,
      }}
      transition={{
        duration: 1,
      }}
      viewport={{
        once: true,
      }}
    >
      <SectionHeading>Fale comigo</SectionHeading>

      <p className="text-gray-700 -mt-6 dark:text-white/80">
        Para me contatar diretamente, use o e-mail{" "}
        <a className="underline" href="mailto:filmixgeovane@gmail.com">
          filmixgeovane@gmail.com
        </a>{" "}
        ou pode me chamar pelo número de whatts app <a className="underline" target="_blank" href='https://wa.me/5561982657312'>61982657312</a>.
      </p>
      
      <div className="col-lg-1 col-centered">      
        <Image
              src={zapImg}
              alt="61982657312"
              width="50"
              height="59"
              quality="50"
            />
            </div>


      {/* <form
        className="mt-10 flex flex-col dark:text-black"
        action={async (formData) => {
          const { data, error } = await sendEmail(formData);

          if (error) {
            toast.error(error);
            return;
          }

          toast.success("E-mail enviado com sucesso!");
        }}
      >
        <input
          className="h-14 px-4 rounded-lg borderBlack dark:bg-white dark:bg-opacity-80 dark:focus:bg-opacity-100 transition-all dark:outline-none"
          name="senderEmail"
          type="email"
          required
          maxLength={500}
          placeholder="Seu e-mail"
        />
        <textarea
          className="h-52 my-3 rounded-lg borderBlack p-4 dark:bg-white dark:bg-opacity-80 dark:focus:bg-opacity-100 transition-all dark:outline-none"
          name="message"
          placeholder="Escreva uma mensagem"
          required
          maxLength={5000}
        />
        <SubmitBtn />
      </form> */}
    </motion.section>
  );
}
