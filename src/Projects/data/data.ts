import type { Project } from "../model/Project";

export const wapp: Project = {
    title: "Full stack wedding app",
    dates: "Nov 2021 - May 2022",
    link: "https://pandala.edpacca.co.uk",
    technologies: [ "TypeScript", "React/Redux", "Express", "MongoDb" ],
    experiences: [
        "Developed from scratch with JWT secured login and cookie authentication.",
        "Learned about advanced state management and component based archicture.",
        "Deployed on Digital ocean droplet on Ubuntu server with Docker-compose",
        "Deployed behind Traefik reverse proxy to handle incoming traffic.",
        "Currently live with active userbase - getting feedback to focus on UX.",
    ]
}

export const wizardGrenade: Project = {
    title: "Wizard Grenade 2D Game",
    dates: "Nov 2021 - May 2022",
    link: "https://github.com/Edpacca/WizardGrenade2",
    technologies: [ "C#", "XNA framework" ],
    experiences: [
        "First major project to learn and implement Object Oriented principles",
        "Developed physics engine from scratch. Created all artwork and music",
    ]
}
