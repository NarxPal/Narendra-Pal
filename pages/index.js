import Link from "next/link";
import Image from "next/image";

export default function Index() {
  return (
    <>
      <h2 className="text-white text-4xl font-extrabold m-6">Narendra Pal</h2>

      <p className="flex m-auto w-full justify-center mt-10">
        so grateful! to have you here
      </p>

      <Image
        src="/vector.png"
        height={500}
        width={500}
        alt="vecotr"
        priority={true}
        className="flex justify-center m-auto mt-40"
      />

      <footer className="flex flex-row space-x-56 justify-center absolute bottom-12 m-auto w-full">
        <div>
          <h3 className="mb-5">Skills</h3>

          <ul className="ml-2">
            <li>Python</li>
            <li>Java Script</li>
            <li>Typescript</li>
            <li>SQL</li>
            <li>REACT</li>
            <li>numpy</li>
            <li>pandas</li>
          </ul>
        </div>

        <div>
          <h3 className="mb-5">Projects</h3>

          <ul className="ml-2">
            <Link href="">
              <li>Nosidian</li>
            </Link>

            <Link href="">
              <li>patch_Ups</li>
            </Link>

            <Link href="https://motion-wine.vercel.app/">
              <li>motion</li>
            </Link>

            <Link href="https://subtle-tulumba-48ae03.netlify.app/">
              <li>Quizzical Trivia</li>
            </Link>

            <Link href="https://ubiquitous-sorbet-8c6ddc.netlify.app/">
              <li>TextUtils</li>
            </Link>

            <Link href="https://coruscating-heliotrope-fd1671.netlify.app/">
              <li>Portfolio</li>
            </Link>

            <Link href="https://verdant-nougat-078cf8.netlify.app/">
              <li>Sport Garage</li>
            </Link>
          </ul>
        </div>

        <div>
          <h3 className="mb-5">Socials</h3>

          <ul className="ml-2">
            <Link href="https://twitter.com/Narendra8Pal">
              <li>X</li>
            </Link>
            <Link href="https://github.com/Narendra8Pal">
              <li>Git Hub</li>
            </Link>
            <Link href="https://read.cv/narendrapal">
              <li>read.cv</li>
            </Link>
          </ul>
        </div>
      </footer>
    </>
  );
}
