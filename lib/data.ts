import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import corpcommentImg from "@/public/corpcomment.png";
import rmtdevImg from "@/public/rmtdev.png";
import wordanalyticsImg from "@/public/wordanalytics.png";

export const links = [
  {
    name: "Início",
    hash: "#home",
  },
  {
    name: "Sobre",
    hash: "#about",
  },
  {
    name: "Projetos",
    hash: "#project",
  },
  {
    name: "Habilidades",
    hash: "#skills",
  },
  {
    name: "Experiências",
    hash: "#experience",
  },
  {
    name: "Contato",
    hash: "#contact",
  },
] as const;

export const experiencesData = [
  {
    title: "Estagiário",
    location: "Voetur Turismo",
    description:
      "Inicei minha carreira como estagiário realizando tarefas administrativas, criando relatórios, rotinas e diversas ações.",
    icon: React.createElement(CgWorkAlt),
    date: "2006",
  },
  {
    title: "Programador Júnior | Analista de Sistemas",
    location: "Fenae Corretora de Seguros (atual: WIZ Tecnologia)",
    description:
      "Trabalhei como desenvolvedor Web, onde desenvolvi minhas habilidades iniciando a minha carreira em programação e sendo promovido a Analista de Sistemas.",
    icon: React.createElement(CgWorkAlt),
    date: "2006 - 2009",
  },
  {
    title: "Analista de Sistemas",
    location: "Montreal Informática",
    description:
      "Tive oportunidade de aumentar mais meu conhecimento em programação atuando em empresa pública INFRAERO participando de sistemas em construção e diversos sistemas legados da empresa.",
    icon: React.createElement(CgWorkAlt),
    date: "2009 - 2011",
  },
  {
    title: "Analista de Sistemas",
    location: "Wooba Soluções de Tecnologia e Sistemas",
    description:
      "Trabalhei como desenvolvedor Web, onde consegui aprimorar o conhecimento de .NET e ajudar bastante com manutenção de sistemas.",
    icon: React.createElement(CgWorkAlt),
    date: "2011",
  },
  {
    title: "Analista de Sistemas",
    location: "ITSA Telecomunicações",
    description:
      "Oportunidade única de poder atuar no projeto piloto 4G de internet em Brasília. Nosso cliente SKY Banda Larga.",
    icon: React.createElement(CgWorkAlt),
    date: "2011 - 2012",
  },
  {
    title: "Analista de Sistemas",
    location: "TechBiz Informática",
    description:
      "Atuando terceirizado pela TechBiz dentro da empresa INFRAERO executando tarefas de análise de sistemas.",
    icon: React.createElement(CgWorkAlt),
    date: "2012",
  },
  {
    title: "Analista de Sistemas",
    location: "CAST Informática",
    description:
      "Atuando terceirizado pela CAST Informática dentro do Itamaraty executando tarefas de análise de sistemas.",
    icon: React.createElement(CgWorkAlt),
    date: "2012 - 2013",
  },
  {
    title: "Analista Devops",
    location: "Vamos Parcelar",
    description:
      "Oportunidade única de trabalhar voltado para Analista Devops criando automação de ambientes Cloud e diversas tarefas para nuvem AWS.",
    icon: React.createElement(CgWorkAlt),
    date: "2022 - 2023",
  },
  {
    title: "Analista de Sistemas Sênior",
    location: "BRB Serviços",
    description:
      "Atualmente sou um desenvolvedor Full Stack, minhas habilidades incluem C#, .NET, JavaScript, AngularJS, NodeJS, PostgreSQL, SQL Server e também React.",
    icon: React.createElement(FaReact),
    date: "2014 - até o momento",
  },
] as const;

export const projectsData = [
  {
    title: "AWS Infra",
    description:
      "Eu trabalhei como Devops por 1 ano na empresa Vamos Parcelar e participei de diversos projetos, entre eles a criação de pipelines e automação de ambiente Cloud AWS utilizando terraform.",
    tags: ["Terraform", "Visual Studio Code", "EC2", "ECS", "RabbitMQ"],
    imageUrl: corpcommentImg,
  },
  {
    title: "Integrador",
    description:
      "Solução robusta criada em C# que permite a integração entre ERP TOTVS e sistemas da empresa de forma automática, tais como: Active Directory, bancos de dados e outros criando contas de rede e automatizando processo de contratação de colaboradores.",
    tags: ["C#", ".NET", "MySQL", "SQL Server", "LDAP"],
    imageUrl: rmtdevImg,
  },
  {
    title: "Cetus",
    description:
      "Aplicativo web que projetado para realização de monitoria de atendimento de ligações de call center. Permite medir se o atendimento está de acordo com os parâmetros de excelência da empresa.",
    tags: ["C#", ".NET", "ASP .NET CORE", "Sql server"],
    imageUrl: wordanalyticsImg,
  },
] as const;

export const skillsData = [
  "HTML",
  "CSS",
  "JavaScript",
  "TypeScript",
  "React",
  "Next.js",
  "Node.js",
  "Git",
  "Docker",
  "Azure",
  "Grafana",
  "Bit Bucket",
  "Jenkins",
  "Terraform",
  "Npm",
  "Yarn",
  "GitLab",
  "GitHub",
  "C#",
  "ASP .NET Core",
  ".NET",
  "Linux",
  "PL SQL",
  "ASP Clássico",
  "PERL",
  "Pipeline",
  "YAML",
  "Micro Serviços",
  "RabbitMQ",
  "EC2 AWS",
  "ECS AWS",
  "SQL Server",
  "MongoDB",
  "MySql",
  "Postgres",
] as const;
