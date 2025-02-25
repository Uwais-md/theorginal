import { ReactJS, Gemini, OpenAI , Bootstrap, C, Css, Django, Flask, Html, Java, Javascript, Mariadb,Mongodb, Netlify, Mysql, MUI, NextJs, Node, PHP, PostgreSQL, Python, React, Redis, Shadcn, Tailwind, Vercel, Kotlin, Bash, Typescript, CPP, Docker, Laravel, MinIO, Git} from './assets';
import Badge from './Badge';
import Link from 'next/link'

const categories = [
  {
    title: "Database",
    items: [
      { name: "MySQL", link: 'https://google.com',logo: Mysql },
      { name: "PostgreSQL", link: 'https://google.com',logo: PostgreSQL },
      { name: "Redis", link: 'https://google.com',logo: Redis },
    ],
  },
  {
    title: "Languages",
    items: [
      { name: "PHP", link: 'https://google.com',logo: PHP  },
      { name: "Python", link: 'https://google.com',logo: Python },
      { name: "Javascript", link: 'https://google.com',logo: Javascript },
      { name: "Java", link: 'https://google.com',logo: Java },
      { name: "Kotlin", link: 'https://google.com',logo: Kotlin },
      { name: "Bash", link: 'https://google.com',logo: Bash },
      { name: "Typescript", link: 'https://google.com',logo: Typescript },
      { name: "C++", link: 'https://google.com',logo: CPP },
    ],
  },
  {
    title: "UI Design",
    items: [
      { name: "Bootstrap", link: 'https://google.com',logo: Bootstrap },
      { name: "Tailwind CSS", link: 'https://google.com',logo: Tailwind },
      { name: "MUI", link: 'https://google.com',logo: MUI },
      { name: "Shadcn", link: 'https://google.com',logo: Shadcn },
    ],
  },
  {
    title: "Development",
    items: [
      { name: "Docker", link: 'https://google.com',logo: Docker },
      { name: "Next JS", link: 'https://google.com',logo: NextJs },
      { name: "React", link: 'https://google.com',logo: ReactJS },
      { name: "JavaFX", link: 'https://google.com',logo: Java },
      { name: "Laravel", link: 'https://google.com',logo: Laravel },
      { name: "Django", link: 'https://google.com',logo: Django },
      { name: "MiniIO", link: 'https://google.com',logo: MinIO },
      { name: "Git", link: 'https://google.com',logo: Git },
    ],
  },
];

export default function BadgeLayout() {
  return (
    <main>
       <header className=' mx-5 sm:max-w-md pl-10 lg:max-w-lg flex justify-center mt-20 sm:mt-28 sm:mx-auto'>
            {/* <LogoText /> */}
            <div className=' flex flex-col gap-5 '>
            <div className=' flex flex-col gap-3'>
                <p className=' lowercase font-medium text-2xl'>Our Tech Stack</p>
                <p className=' text-xl opacity-45 font-medium'>we nail what we work on with these tools & frameworks</p>
            </div>

            <div className=' flex gap-3'>
                <Link href={'/'}><button className='sm:px-5 px-3 py-2 bg-black text-white text-sm rounded-full'>book a call</button></Link>
                <Link href={'/'}><button className='sm:px-5 px-3 py-2 bg-white text-sm rounded-full'>email</button></Link>
                <Link href={'/follow'}><button className='sm:px-5 px-3 py-2 bg-white text-sm rounded-full'>follow</button></Link>
            </div>
            </div>
        </header>
    <div className="p-4 pl-10 sm:max-w-md lg:max-w-lg flex flex-col  gap-5 mt-10 justify-center items-center sm:items-start place-self-center mx-auto">
      {categories.map((category, index) => (
        <div key={index} className="mb-8">
          <h2 className="text-base mb-4 font-semibold lowercase opacity-45 text-left">{category.title}</h2>
          <div className=" flex flex-wrap gap-5 mx-auto max-w-4xl">
            {category.items.map((item, idx) => (
              <Badge link={item.link} key={idx} logo={item.logo} name={item.name} />
            ))}
          </div>
        </div>
      ))}
    </div>
      </main>
  );
}
