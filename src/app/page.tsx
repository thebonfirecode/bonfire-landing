import SiteUnderConstruction from "./components/SiteUnderConstruction";
import Video from "./components/Video";
export default function Home() {
  return (
    <div>
      <Video videoSource={"assets/88968-608446385_medium.mp4"}></Video>
      <SiteUnderConstruction/>
    </div>
  );
}
