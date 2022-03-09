import React from 'react';
import Particles from "react-tsparticles";
import {AboutMeCard} from "./AboutMeCard";
import {particalsConfig, particalsConfigMobile} from "../Config/ParticalsConfig";
import {useHandleResize} from "../CustomHooks/IsMobile";

const App = () => {
    const isMobile = useHandleResize()

    const particalConfig = isMobile ? particalsConfigMobile : particalsConfig

    return (
      <main>
        <AboutMeCard />
        <Particles
          id="tsparticles"
          options={particalConfig}
        />
      </main>
    );
};

export default App;
