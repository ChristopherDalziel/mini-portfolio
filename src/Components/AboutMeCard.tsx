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
            As a motivated mid-level software engineer, I am passionate about developing solutions that enhance organizational efficiency and effectiveness. With 4 years of hands-on experience and a diverse skill set spanning <strong className="overlay__bold">ReactJS, Kotlin, Groovy, and Python</strong>, I thrive in dynamic team environments.
            <br />
            <br />
            My journey began with an intensive boot camp in Melbourne, reflecting my commitment to continuous learning and adaptation. In my current role, I excel in delivering exceptional outcomes for products and contributing to strategic shifts in technology.  My effective communication skills and problem-solving abilities enable me to contribute towards delivering excellence and innovation.
            <br />
            <br />
            I am eager to contribute to driving team culture, technological advancement and pushing the boundaries of innovation, leading to business success.
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
