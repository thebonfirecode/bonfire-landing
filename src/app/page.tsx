import Video from "./components/Video";
import DinamicText from "./components/DinamicText"

export default function Home() {
  return (
    <div>
      <div className="static">
        <Video videoSource={"assets/88968-608446385_medium.mp4"}></Video>
        <div className="absolute top-1/4 left-14">
          <DinamicText description="TECNOLOGÍA A TU MEDIDA" style="font-extrabold text-5xl w-52 mb-6 tracking-widest leading-loose"/>
          <DinamicText description="Impulsá tu negocio con soluciones IT eficientes e integradas para transformar tu empresa simplificando operaciones y mejorando la productividad con un enfoque práctico, resultados medibles y soporte continuo de la mano de nuestros expertos" style="w-2/4 font-base tracking-widest leading-loose"/>
        </div>
      </div>
    </div>
  );
}
