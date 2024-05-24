import me from "../Assets/me.jpeg"
import { CodePenButton, GitHubButton, LinkedInButton, MediumButton } from "./SocialMediaLinks"

export const AboutMeCard = () => {
  return (
    <div className="overlay-container">
      <div className="overlay">
        <div className="overlay__inner">
          <img src={me} alt="me" className="overlay__picture" />

          <h1 className="overlay__title">
            Hello. <br /> My name's Chris.
          </h1>

          <p className="overlay__description">
            I am a motivated mid-level software engineer with a passion for
            developing solutions. I focus on improving efficiency and
            effectiveness resulting in organizational success with long term
            sustainable results.
            <br />
            <br />
            With my industry experience, I possess a diverse skill set encompassing various software technologies, 
            allowing me to thrive in diverse team environments. Continuously learning and upskilling, 
            my expertise lies primarily in<strong className="overlay__bold"> ReactJS, Kotlin, Groovy, and Python</strong>.
            <br />
            <br />
            Check out the links below to view some of my work or to get in
            contact.
          </p>

          <div className="overlay__btns">
            <GitHubButton />
            <LinkedInButton />
            <CodePenButton />
            <MediumButton />
          </div>
        </div>
      </div>
    </div>
  )
};
