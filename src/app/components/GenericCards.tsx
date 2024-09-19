import { FC } from 'react';


interface Props {
  SvgIcon: FC<React.SVGProps<SVGSVGElement>>;
  title: string;
  description: string;
  link?: string;
}

export default function GenericCards({
  SvgIcon,
  title,
  description
}: Props) {
  return (
    <div className="p-8 bg-[#eff0ef] rounded-lg shadow hover:bg-main-orange text-main-black hover:text-white w-full group transition-colors duration-500 hover:scale-105">
      <SvgIcon className="text-main-orange group-hover:text-white w-14 h-14"/>
      <p className="mt-4 mb-2 text-xl font-bold tracking-tight">{title}</p>
      <p className="mb-3 text-sm font-normal">{description}</p>
    </div>
  );
}
