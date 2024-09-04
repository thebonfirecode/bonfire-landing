import Image from "next/image";
import MotionWrapper from "../components/MotionWrapper";

const SiteUnderConstruction = () => {
  return (
    <MotionWrapper>
    <main className="flex min-h-screen flex-col items-center p-24">
      <div className="w-full max-w-5xl flex-col items-center font-mono text-sm lg:flex">
        <p className="top-20 mb-10 flex w-full justify-center">
          Sitio en construcción.
        </p>
        <Image
          src="/images/bonfirelogofulltext-white-square.svg"
          alt="Bonfire Code Logo"
          width={800}
          height={800}
          quality={100}
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw"
          style={{
            height: '70vh',
          }}
          priority
        />
      </div>
    </main>
    </MotionWrapper>
  );
};

export default SiteUnderConstruction;
