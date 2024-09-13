import Image from "next/image";

interface Props {
  imgPath: string;
  imgWidth: number;
  imgHeight: number;
  title: string;
  description: string;
  link?: string;
}

export default function GenericCards({
  imgPath,
  imgWidth,
  imgHeight,
  title,
  description,
  link
}: Props) {
  return (
    <div className="max-w-sm p-6 bg-[#eff0ef] rounded-lg shadow mx-3 hover:bg-main-orange text-main-black hover:text-white">
      <Image
        src={imgPath}
        alt="logo"
        width={imgWidth}
        height={imgHeight}
        priority
      />
      <p className="mb-2 text-2xl font-semibold tracking-tight">
        {title}
      </p>
      <p className="mb-3 font-normal">
        {description}
      </p>
      <p className="inline-flex font-bold items-center">
        {link}
      </p>
    </div>
  );
}
