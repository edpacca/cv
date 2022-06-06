import type { Employment } from "../model/Employment";

export const associateDev: Employment = {
    title: "Associate Developer",
    company: "Scott Logic",
    dates: "Feb 2022 - present",
    experiences: [
        "Full stack development of \'green-fields\' SSO application - working to meet demanding client requirements using AGILE delivery principles.",
        "Writing and maintaining code, and producing documentation across the stack.",
        "Adhering to strict version control policies (git), working in small dev team.",
        "Presenting and demonstrating work to different groups of clients, modifying level of presentation to suit audience knowledge.",
        "Deploying codebase to different AWS environments - regular use of Docker, occassional use of kubectl, helm and CDK for managing deployments.",
        "Continually working and communicating with testers to fix bugs.",
        "Delivered graduate CI/CD training to last intake of graduates, worked hard to learn and pass on knowledge of an unfamiliar area."
    ]
}

export const graduateDev: Employment = {
    title: "Graduate Developer",
    company: "Scott Logic",
    dates: "Aug 2021 - Feb 2022",
    experiences: [
        "Recognised as a fast learner - transfered early to client project.",
        "Developed full stack training app in JS (React/Redux), and Java (SpringBoot).",
        "Worked within large team of graduates on internal project - demonstrated strong communication and leadership skills coordinating group.",
    ]
}

export const postdoc: Employment = {
    title: "Postdoctoral Researcher",
    company: "University of Edinburgh",
    subCompany: "Centre for Science at Extreme Conditions",
    dates: "Oct 2018 - Oct 2020",
    experiences: [
        "Mentoring PhD students within prestigious high-pressure research group.",
        "Planning and leading multi-day experiments, gathering data at international facilities - using bespoke, highly specialised instrumentation.", 
        "Strong writing skills - published first author in high-impact academic journals.", 
        "Proficient in processing, interpreting and presenting many different data types.",
        "Delivered talks to large audiences at international conferences.",
    ]
}

export const phd: Employment = {
    title: "Ph.D Student",
    company: "University of Edinburgh",
    subCompany: "Centre for Science at Extreme Conditions",
    dates: "Sept 2015 - Sept 2018",
    experiences: [
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.", 
        "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.", 
        "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    ]
}
