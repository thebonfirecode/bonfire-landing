import Image from "next/image";
import MotionWrapper from "./components/MotionWrapper";

export default function Home() {
  return (
    <MotionWrapper>
    <main className="flex min-h-screen flex-col items-center p-24">
      <div className="w-full max-w-5xl flex-col items-center font-mono text-sm lg:flex">
        <p className="top-20 mb-10 flex w-full justify-center">
          Sitio en construcción.
        </p>
        <Image
          src="/images/bonfirelogofulltext-white-square.svg"
          alt="Vercel Logo"
          className="white"
          width={500}
          height={600}
          quality={100}
          priority
        />
      </div>
    </main>
    </MotionWrapper>
  );
}
