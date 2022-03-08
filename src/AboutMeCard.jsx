import React from 'react';
import me from "./logo512.png"

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
                        I'm a mid-level software engineer with a passion for developing solutions that improve efficiency and effectiveness of organizational success. <br />
                        I'm well versed in many software technologies but am currently working in <strong> ReactJS, Kotlin and Java</strong>. <br /><br />
                        If you'd like to see some of my existing work or get in contact with me checkout the links below.
                    </p>

                    <div className="overlay__btns">
                        <button aria-label="External gitHub page" className="overlay__btn overlay__btn--transparent">
                            <a aria-label="External gitHub page" href="https://github.com/ChristopherDalziel" target="_blank" rel="noopener noreferrer">
                                <i className="fa-brands fa-github" />
                            </a>
                        </button>

                        <button aria-label="External LinkedIn page" className="overlay__btn overlay__btn--transparent">
                            <a aria-label="External LinkedIn page" href="https://www.linkedin.com/in/christopher-dalziel-129427187/" target="_blank" rel="noopener noreferrer">
                                <i className="fa-brands fa-linkedin-in" />
                            </a>
                        </button>

                        <button aria-label="External codepen page" className="overlay__btn overlay__btn--transparent">
                            <a aria-label="External codepen page" href="https://codepen.io/christopherdalziel/pens/public" target="_blank" rel="noopener noreferrer">
                                <i className="fa-brands fa-codepen" />
                            </a>
                        </button>

                        <button aria-label="External twitter page" className="overlay__btn overlay__btn--transparent">
                            <a aria-label="External twitter page" href="https://twitter.com/dalziel_chris" target="_blank" rel="noopener noreferrer">
                                <i className="fa-brands fa-twitter" />
                            </a>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
};
