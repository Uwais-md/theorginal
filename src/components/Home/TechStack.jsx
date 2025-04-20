"use client";
import {
  ReactJS,
  Gemini,
  OpenAI,
  Bootstrap,
  C,
  Css,
  Django,
  Flask,
  Html,
  Java,
  Javascript,
  Mariadb,
  Mongodb,
  Netlify,
  Mysql,
  MUI,
  NextJs,
  Node,
  PHP,
  PostgreSQL,
  Python,
  React,
  Redis,
  Shadcn,
  Tailwind,
  Vercel,
  Kotlin,
  Bash,
  Typescript,
  CPP,
  Docker,
  Laravel,
  MinIO,
  Git,
} from "../Stack/assets";
import { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Badge from "./Badge";

const frontend = [
  {
    items: [
      { name: "Next JS", link: "https://google.com", logo: NextJs },
      { name: "React", link: "https://google.com", logo: ReactJS },
      { name: "JavaFX", link: "https://google.com", logo: Java },
      { name: "Bootstrap", link: "https://google.com", logo: Bootstrap },
      { name: "Tailwind CSS", link: "https://google.com", logo: Tailwind },
      { name: "MUI", link: "https://google.com", logo: MUI },
      { name: "Shadcn", link: "https://google.com", logo: Shadcn },
    ],
  },
];
const backend = [
  {
    title: "Backend",
    items: [
      { name: "PHP", link: "https://google.com", logo: PHP },
      { name: "Python", link: "https://google.com", logo: Python },
      { name: "Javascript", link: "https://google.com", logo: Javascript },
      { name: "Java", link: "https://google.com", logo: Java },
      { name: "Kotlin", link: "https://google.com", logo: Kotlin },
      { name: "Bash", link: "https://google.com", logo: Bash },
      { name: "Typescript", link: "https://google.com", logo: Typescript },
      { name: "C++", link: "https://google.com", logo: CPP },
      { name: "Laravel", link: "https://google.com", logo: Laravel },
      { name: "Django", link: "https://google.com", logo: Django },
    ],
  },
];
const devops = [
  {
    items: [
      { name: "MySQL", link: "https://google.com", logo: Mysql },
      { name: "PostgreSQL", link: "https://google.com", logo: PostgreSQL },
      { name: "Mariadb", link: "https://google.com", logo: Mariadb },
      { name: "Docker", link: "https://google.com", logo: Docker },
      { name: "Redis", link: "https://google.com", logo: Redis },
      { name: "Git", link: "https://google.com", logo: Git },
      { name: "MiniIO", link: "https://google.com", logo: MinIO },
    ],
  },
];

const containerVariants = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      delay: 0.2,
      duration: 1,
      ease: "easeOut",
    },
  },
  exit: {
    opacity: 0,
    scale: 0.8,
    transition: {
      duration: 0.5,
    },
  },
};

const boxVariants = {
  initial: {
    opacity: 0,
    scale: 0.5,
    x: 0,
    y: 0,
    rotateY: 45,
  },
  animate: (position) => {
    let x = 0,
      y = 0;
    if (position === "top-left") {
      x = -200;
      y = -150;
    } else if (position === "middle") {
      x = 0;
      y = 0;
    } else if (position === "bottom-right") {
      x = 200;
      y = 150;
    }
    return {
      opacity: 1,
      scale: 1,
      x,
      y,
      rotateY: 0,
      transition: {
        type: "spring",
        stiffness: 70,
        damping: 15,
        delay: 2.0,
      },
    };
  },
};

const TechStack = () => {
  const ref = useRef(null);
  const [showSplit, setShowSplit] = useState(false);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          setTimeout(() => {
            setShowSplit(true);
          }, 2000);
        }
      },
      { threshold: 0.5 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <div className="min-h-screen flex items-center justify-center p-10">
      <AnimatePresence>
        {!showSplit && (
          <motion.div
            ref={ref}
            className="bg-white rounded-lg px-8 py-6 shadow-2xl text-3xl font-bold"
            variants={containerVariants}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            exit="exit"
          >
            Tech Stack
          </motion.div>
        )}
      </AnimatePresence>

      {showSplit && (
        <div className="absolute w-full h-full flex items-center justify-center pointer-events-none">
          <motion.div
            className="absolute bg-white  p-6 w-96 mr-[28rem] rounded-xl shadow-xl transform-gpu"
            custom="top-left"
            variants={boxVariants}
            initial="initial"
            animate="animate"
          >
            <h3 className="text-xl font-semibold mb-7">Frontend</h3>
            <div className="flex flex-wrap gap-2">
              {frontend.map((category, index) => (
                <div key={index} className="mb-8">
                  <div className="flex flex-wrap gap-5 mx-auto max-w-4xl">
                    {category.items.map((item, idx) => (
                      <Badge
                        link={item.link}
                        key={idx}
                        logo={item.logo}
                        name={item.name}
                      />
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </motion.div>


            
          <motion.div
            className="absolute bg-white p-6 w-96 rounded-xl shadow-xl transform-gpu"
            custom="middle"
            variants={boxVariants}
            initial="initial"
            animate="animate"
            >
            <h3 className="text-xl font-semibold mb-7">Backend</h3>
            <div className="flex flex-wrap gap-2">
              {backend.map((category, index) => (
                  <div key={index} className="mb-8">
                  <div className="flex flex-wrap gap-5 mx-auto max-w-4xl">
                    {category.items.map((item, idx) => (
                        <Badge
                        link={item.link}
                        key={idx}
                        logo={item.logo}
                        name={item.name}
                        />
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
       

          <motion.div
            className="absolute bg-white p-6 w-96 ml-[28rem]  rounded-xl shadow-xl transform-gpu"
            custom="bottom-right"
            variants={boxVariants}
            initial="initial"
            animate="animate"
            >
            <h3 className="text-xl  font-semibold mb-7">DevOps / Database</h3>
            <div className="flex flex-wrap gap-2">
              {devops.map((category, index) => (
                  <div key={index} className="mb-8">
                  <div className="flex flex-wrap gap-5 mx-auto max-w-4xl">
                    {category.items.map((item, idx) => (
                        <Badge
                        link={item.link}
                        key={idx}
                        logo={item.logo}
                        name={item.name}
                        />
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      )}
    </div>
  );
};

export default TechStack;
