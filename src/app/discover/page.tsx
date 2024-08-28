import Image from "next/image";

export default function Discover() {
  return (
    <main className="flex min-h-screen flex-col items-center p-24">
      <div className="w-full max-w-5xl flex-col items-center font-mono text-sm lg:flex">
        <p className="top-20 mb-10 flex w-full justify-center">
          Sitio en construcción !.
        </p>
        <Image
          src="/images/h600-2-bonfirelogowithtext.png"
          alt="Vercel Logo"
          className="white"
          width={500}
          height={600}
          quality={100}
          priority
        />
      </div>
    </main>
  );
}
