"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import Logo from "../../../public/assets/final-logo.png";
import Image from "next/image";

export default function Hero() {
  const words = ["Startups", "Founders", "Entrepreneurs", "Agency", "Concys"];
  const [currentWord, setCurrentWord] = useState(words[0]);
  const [index, setIndex] = useState(0);
  const [follow, showFollow] = useState(false);

  const handleFollow = () => {
    showFollow((prevFollow) => !prevFollow); 
  };

  useEffect(() => {
    const intervalId = setInterval(() => {
      setIndex((prevIndex) => {
        const nextIndex = (prevIndex + 1) % words.length;
        setCurrentWord(words[nextIndex]);
        return nextIndex;
      });
    }, 4000);

    return () => clearInterval(intervalId); 
  }, []);

  return (
    <main className="p-20 mt-44 flex gap-20">
      <div>
        <Image className="w-72 -ml-5" src={Logo} alt="Logo" />
        <div className="w-3/5 text-4xl leading-relaxed">
          Seamlessly blending freedom and creativity while sticking with
          projects and contributing to
          <span
            className="font-bold transition-opacity duration-1000 opacity-0 animate-word-change"
            style={{
              animation: "fadeInOut 3s ease-in-out infinite",
            }}
          >
            {" "}
            {currentWord}
          </span>
        </div>

        <div className="flex gap-3 mt-10">
          <Link href={"/"}>
            <button className="sm:px-7 px-5 py-4 bg-black text-white text-sm sm:text-lg rounded-full">
              Book a call
            </button>
          </Link>
          <button
            onClick={handleFollow}
            className="sm:px-7 px-5 py-4 bg-white text-sm sm:text-lg rounded-full"
          >
            Follow
          </button>
        </div>
      </div>

      {follow && (
        <div className="w-2/5 items-center justify-start mt-20 flex flex-col gap-4">
          <div className="flex gap-5 align-middle hover:bg-white cursor-pointer duration-300 min-w-96 max-w-96 px-8 py-3 rounded-full group">
            <div className="text-xl mt-2 group-hover:text-blue-500 duration-300">
              <ion-icon name="logo-twitter"></ion-icon>
            </div>

            <div>
              <p className="text-base">Twitter</p>
              <p className="opacity-50">Follow our journey & thoughts</p>
            </div>
          </div>
          <div className="flex gap-5 align-middle hover:bg-white cursor-pointer duration-300 min-w-96 max-w-96 px-8 py-3 rounded-full group">
            <div className="text-xl mt-2 group-hover:text-gray-600 duration-300">
              <ion-icon name="logo-github"></ion-icon>
            </div>

            <div>
              <p className="text-base">GitHub</p>
              <p className="opacity-50">Check out our open source network</p>
            </div>
          </div>
          <div className="flex gap-5 align-middle hover:bg-white cursor-pointer duration-300 min-w-96 max-w-96 px-8 py-3 rounded-full group">
            <div className="text-xl mt-2 group-hover:text-blue-500 duration-300">
              <ion-icon name="logo-linkedin"></ion-icon>
            </div>

            <div>
              <p className="text-base">Linkedin</p>
              <p className="opacity-50">Connect with our team</p>
            </div>
          </div>
          <div className="flex gap-5 align-middle hover:bg-white cursor-pointer duration-300 min-w-96 max-w-96 px-8 py-3 rounded-full group">
            <div className="text-xl mt-2 group-hover:text-red-500 duration-300">
              <ion-icon name="logo-instagram"></ion-icon>
            </div>

            <div>
              <p className="text-base">Instagram</p>
              <p className="opacity-50">See behind the scenes</p>
            </div>
          </div>
        </div>
      )}
    </main>
  );
}
