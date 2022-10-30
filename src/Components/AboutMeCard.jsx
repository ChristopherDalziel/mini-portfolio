import React from "react";
import me from "../Assets/me.jpeg";

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
            I am motivated mid-level software engineer with a passion for
            developing solutions. I focus on improving efficiency and
            effectiveness resulting in organizational success with long term
            sustainable results.
            <br />
            <br />
            With my experience in the industry, I am well versed in a wide
            variety of software technologies. I am actively learning and
            upskilling with my current focus being on implementing solutions
            using{" "}
            <strong className="overlay__bold">ReactJS, Kotlin and Java</strong>.
            <br />
            <br />
            Check out the links below to view some of my work or to get in
            contact.
          </p>

          <div className="overlay__btns">
            <button
              aria-label="External gitHub page"
              className="overlay__btn overlay__btn--transparent"
            >
              <a
                aria-label="External gitHub page"
                href="https://github.com/ChristopherDalziel"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fa-brands fa-github" />
              </a>
            </button>

            <button
              aria-label="External LinkedIn page"
              className="overlay__btn overlay__btn--transparent"
            >
              <a
                aria-label="External LinkedIn page"
                href="https://www.linkedin.com/in/christopher-dalziel-129427187/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fa-brands fa-linkedin-in" />
              </a>
            </button>

            <button
              aria-label="External codepen page"
              className="overlay__btn overlay__btn--transparent"
            >
              <a
                aria-label="External codepen page"
                href="https://codepen.io/christopherdalziel/pens/public"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fa-brands fa-codepen" />
              </a>
            </button>

            <button
              aria-label="External twitter page"
              className="overlay__btn overlay__btn--transparent"
            >
              <a
                aria-label="External twitter page"
                href="https://twitter.com/dalziel_chris"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fa-brands fa-twitter" />
              </a>
            </button>
            <button
              aria-label="External twitter page"
              className="overlay__btn overlay__btn--transparent"
            >
              <a
                aria-label="External medium blog"
                href="https://medium.com/@christopherdalziel"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fa-brands fa-medium" />
              </a>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
