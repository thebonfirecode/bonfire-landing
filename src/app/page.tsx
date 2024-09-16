import Video from "./components/Video";
import DinamicText from "./components/DinamicText"
import GenericCards from "./components/GenericCards";

export default function Home() {
  return (
    <div>
      <div className="static">
        <Video videoSource={"assets/88968-608446385_medium.mp4"}></Video>
        <div className="absolute top-1/4 left-14">
          <DinamicText description="TECNOLOGÍA A TU MEDIDA" style="font-extrabold text-5xl w-52 mb-6 tracking-widest leading-loose"/>
          <DinamicText description="Impulsá tu negocio con soluciones IT eficientes e integradas para transformar tu empresa simplificando operaciones y mejorando la productividad con un enfoque práctico, resultados medibles y soporte continuo de la mano de nuestros expertos" style="w-2/4 font-base tracking-widest leading-loose"/>
        </div>
        <div className="flex justify-center my-10">
        <GenericCards
            imgPath="/images/safe-lock.svg"
            imgWidth={60}
            imgHeight={60}
            title="Consultoría IT"
            description="Te asesoramos en cada paso para implementar soluciones robustas y escalables"
            link="Ver más →"
          />
          <GenericCards
            imgPath="/images/service.svg"
            imgWidth={60}
            imgHeight={60}
            title="Consultoría IT"
            description="Te asesoramos en cada paso para implementar soluciones robustas y escalables"
            link="Ver más →"
          />
          <GenericCards
            imgPath="/images/rocket.svg"
            imgWidth={60}
            imgHeight={60}
            title="Consultoría IT"
            description="Te asesoramos en cada paso para implementar soluciones robustas y escalables"
            link="Ver más →"
          />
        </div>
      </div>
    </div>
  );
}
