import DynamicText from "./DynamicText";

interface BannerProps {
  title: string;
  description: string;
  imgSrc: string;
}

const Banner: React.FC<BannerProps> = ({ title, description, imgSrc }) => {
  return (
    <div className="flex flex-col md:flex-row items-center px-8 pb-28">
      <div className="max-w-auto text-center">
        <DynamicText
          description={title}
          style="text-main-orange font-sans font-black text-3xl sm:text-4xl mb-4 tracking-widest leading-loose"
        />
        <DynamicText
          description={description}
          style="text-main-black dark:text-off-white font-sm text-lg mb-2"
        />
      </div>
      <div className="my-2">
        <img src={imgSrc} alt="Img" className="w-auto h-auto" />
      </div>
    </div>
  );
};

export default Banner;
