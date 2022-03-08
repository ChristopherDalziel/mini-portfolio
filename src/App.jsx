import Particles from "react-tsparticles";
import {AboutMeCard} from "./AboutMeCard";
import {particalsConfig} from "./ParticalsConfig";

const App = () => {
    return (
      <main>
        <AboutMeCard />
        <Particles
          id="tsparticles"
          options={particalsConfig}
        />
      </main>
    );
};

export default App;
