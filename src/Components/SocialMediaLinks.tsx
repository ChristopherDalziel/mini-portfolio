type props = {
    ariaLabel: string,
    link: string,
    icon: string
}

const ExternalLinkButton = ({ ariaLabel, link, icon}: props) => {
  return (
    <button aria-label={ariaLabel} className="overlay__btn overlay__btn--transparent">
      <a aria-label={ariaLabel} href={link} target="_blank" rel="noopener noreferrer">
        <i className={icon} />
      </a>
    </button>
  )
}

export const GitHubButton = () => (
    <ExternalLinkButton
      ariaLabel="External GitHub page"
      link="https://github.com/ChristopherDalziel"
      icon="fa-brands fa-github"
    />
  )
  
  export const LinkedInButton = () => (
    <ExternalLinkButton
      ariaLabel="External LinkedIn page"
      link="https://www.linkedin.com/in/christopher-dalziel-129427187/"
      icon="fa-brands fa-linkedin-in"
    />
  )
  
  export const CodePenButton = () => (
    <ExternalLinkButton
      ariaLabel="External CodePen page"
      link="https://codepen.io/christopherdalziel/pens/public"
      icon="fa-brands fa-codepen"
    />
  )
  
  export const MediumButton = () => (
    <ExternalLinkButton
      ariaLabel="External Medium blog page"
      link="https://medium.com/@christopherdalziel"
      icon="fa-brands fa-medium"
    />
  )
