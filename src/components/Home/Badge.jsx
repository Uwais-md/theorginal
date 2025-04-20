"use client"
import Image from "next/image";

export default function Badge({ logo, name, link }) {
  return (
    <div onClick={()=> {
      window.open(link, '_blank').focus();
    }} className=" flex gap-3  bg-white rounded-full cursor-pointer  sm:px-4 px-2 py-1 sm:py-2">

        <Image className="  object-contain w-5 h-5" src={logo} alt={name}></Image>
        <p className=" align-middle text-sm">{name}</p>

    </div>
  );
}
