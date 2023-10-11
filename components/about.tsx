"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";

export default function About() {
  const { ref } = useSectionInView("Sobre");

  return (
    <motion.section
      ref={ref}
      className="mb-28 max-w-[45rem] text-center leading-8 sm:mb-40 scroll-mt-28"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
      id="about"
    >
      <SectionHeading>Sobre mim</SectionHeading>
      <p className="mb-3" style={{ textAlign: 'justify' }}>
        <span>Sou graduado em Bacharel de Sistemas de Informação, onde desenvolvi experiência em análise de dados e programação de sistemas. Tenho ampla experiência, desde estagiário quando iniciei minha carreira e recebendo diversas promoções ao longo da carreira. Iniciei com linguagem ASP Clássico migrando depois para C# e hoje além dessa linguagem estou programando em react com diversos frameworks de mercado.</span>
        {/* Sou formado em{" "}
        <span className="font-medium">Administração de Empresas</span> onde trabalhei com analise de dados e BI, após isso, eu decidi migrar para a área que eu mais me identifico que é programação. Aprendi desenvolvimento web com cursos online em plataformas como Alura e Udemy, e também iniciei minha graduação em {" "}
        <span className="font-medium">Análise e Desenvolvimento de Sistemas</span>.{" "}
        <span className="font-medium">O que eu mais gosto na programação</span> é
        descobrir uma solução para um problema. Gosto muito de lógica e de análisar dados. 
        Minhas principais habilidades são <span className="font-medium"> React, Node.js PostgreSQL, SQL Server e C#</span>. Também estou familiarizado com TypeScript e NextJS. Estou sempre em busca de aprender novas tecnologias. Atualmente estou procurando uma posição em tempo integral como desenvolvedor de software. */}
       </p>
       <p className="mb-3" style={{ textAlign: 'justify' }}>
       <span>Tenho grande afinidade com lógica e análise de dados. Minhas principais competências incluem React, Node.js, PostgreSQL, SQL Server e C#. Também possuo familiaridade com TypeScript e NextJS. Estou constantemente em busca de aprender novas tecnologias.</span>
       </p>
       <p className="mb-3" style={{ textAlign: 'justify' }}>
       <span>Atualmente, estou em busca de mais conhecimento e habilidades como desenvolvedor de software, onde possa expandir minhas habilidades e conhecimentos.</span>
       </p >
    </motion.section>
  );
}
