import Video from "./components/Video";
import DynamicText from "./components/DynamicText";
import GenericCards from "./components/GenericCards";
import cardsInfo from "../app/data/cardsInfo.json";
import SvgComponents from "./components/SvgComponents";
import Banner from "./components/Banner";

export default function Home() {
  return (
    <div className="relative w-full">
      <div className="fixed top-0 left-0 w-full h-full min-h-screen -z-20 bg-black">
        <Video videoSource={"assets/88968-608446385_medium.mp4"} style={"h-full object-cover "}></Video>
      </div>
      <div className="fixed top-24 left-4 sm:top-24 sm:left-20 -z-10">
          <DynamicText
            description="TECNOLOGÍA A TU MEDIDA"
            style=" text-transparent text-stroke-2 text-4xl stroke-white font-extrabold sm:text-7xl md:text-7xl lg:text-7xl xl:text-8xl sm:w-52 sm:mb-20 md:mb-12 tracking-widest leading-loose"
          />
          <DynamicText
            description="Impulsá tu negocio con soluciones IT eficientes e integradas para transformar tu empresa simplificando operaciones y mejorando la productividad con un enfoque práctico, resultados medibles y soporte continuo de la mano de nuestros expertos"
            style="text-sm sm:text-xl w-full pr-16 md:w-3/4 font-base tracking-widest leading-loose"
          />
        </div>
        <div>
          
        </div>
        <div className="relative w-full mt-[600px] sm:mt-[700px] sm:h-92 bg-off-white dark:bg-main-black transition-colors duration-300 pt-2 pb-20">
          <div className=" mx-10 sm:mx-20 mt-12">
            <DynamicText
              description="NUESTROS SERVICIOS"
              style="text-main-orange font-extrabold text-lg mb-2 tracking-widest leading-loose"
            />
            <DynamicText
              description="Qué ofrecemos?"
              style="text-main-black dark:text-off-white font-extrabold text-4xl  mb-2 tracking-widest leading-loose"
            />
            <div className="max-w-[600px]">
              <DynamicText
                description="Impulsa tu negocio con nuestro enfoque integral: desde asesoramiento estratégico y herramientas digitales innovadoras hasta desarrollo personalizado y soporte técnico de alta calidad"
                style="text-main-black dark:text-off-white font-base text-md mb-6"
              />
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 justify-items-center">
              {cardsInfo.map((card, index) => {
                return (
                  <GenericCards
                    key={index}
                    SvgIcon={SvgComponents[card.imgPath]}
                    title={card.title}
                    description={card.description}
                  />
                );
              })}
            </div>
          </div>
        </div>

        <div className="w-full h-auto mb-44 bg-off-white dark:bg-main-black transition-colors duration-300">
            <Banner
              imgSrc="/assets/giphy-ezgif.com-gif-maker.gif"
              title="CAMBIA A DIGITAL"
              description="En nuestra hoguera tecnológica, te acompañamos con estrategias robustas y creativas para que siempre sientas la tranquilidad de estar en las mejores manos"
            />
        </div>
    </div>
  );
}
