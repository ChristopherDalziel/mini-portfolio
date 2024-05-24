import Particles from "react-tsparticles"
import { AboutMeCard } from "./AboutMeCard"
import {
  particalsConfigDesktop,
  particalsConfigMobile,
} from "../Config/ParticalsConfig"
import { useIsMobile } from "../CustomHooks/useIsMobile"

const App = () => {
  const isMobile = useIsMobile()
  const particalConfig: {} = isMobile
    ? particalsConfigMobile
    : particalsConfigDesktop;

  return (
    <main>
      <AboutMeCard />
      <Particles id="tsparticles" options={particalConfig} />
    </main>
  );
};

export default App
