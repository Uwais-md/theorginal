import Logo from '../../../public/assets/final-logo.png';
import Image from 'next/image';
import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-black text-white py-10">
      

      <div className="flex justify-center">
        <ul className="flex gap-10 text-xl">
          <li className="cursor-pointer underline-offset-8 hover:underline">
            Our Story
          </li>
          <Link href="/oss">
            <li className="cursor-pointer duration-500 transition-transform underline-offset-8 transform hover:underline">
              Our OSS Friends
            </li>
          </Link>
        </ul>
      </div>
      <div className="flex justify-center mb-6">
        <Image src={Logo} alt="Logo" width={500} height={500} />
      </div>

      <div className="mt-6 text-center text-sm opacity-70">
        <p>&copy; {new Date().getFullYear()} The Original. All Rights Reserved.</p>
      </div>
    </footer>
  );
}
