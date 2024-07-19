export interface Employment {
   title: string,
   company: string,
   iconPath: string,
   dates: string,
   description: string[]
}

export const CAREER: Employment[] = [
    {
        title: "Software Engineer",
        company: "Cydar Medical",
        iconPath: "icons/cydar.webp",
        dates: "2023 - present",
        description: [
         "Now well integrated into Cydar, heavily involved in developing new features as the company undergoes an increased rate of growth."
        ]
    },
    {
        title: "Jr. Software Engineer",
        company: "Cydar Medical",
        iconPath: "icons/cydar.webp",
        dates: "2022",
        description: [
         "Working with new techstack, first major solo project was to rebuild the In-Theatre-Gui browser based surgical interface, using Svelte."
        ]
    },
    {
        title: "Associate Developer",
        company: "Scott Logic",
        iconPath: "icons/scotlogic.webp",
        dates: "2022",
        description: [
         "Full stack development of 'green fields' Single Sign On application for Scottish Government. Working to meet demanding client requirements via AGILE delivery principles.",
         "Delivered graduate CI/CD training to newer graduates"
        ]
    },
    {
        title: "Graduate Developer",
        company: "Scott Logic",
        iconPath: "icons/scotlogic.webp",
        dates: "2021",
        description: [
         "Recognised as a fast learner, transfered early to client project.",
         "Developed Full stack training app with React/Redux front-end and Java backend (Springboot).",
         "Worked within large team of graduates on internal project - demonstrated strong communication and leadership skills coordinating group."
        ]
    },
    {
        title: "Postdoctoral Researcher",
        company: "University of Edinburgh",
        iconPath: "icons/uoe.webp",
        dates: "2018 - 2020",
        description: [
            "Postdoc under Prof. Malcolm McMahon at Centre for Science at Extreme conditions - working on compression and study of materials at extraordinary densities.",
            "Mentoring PhD students within prestigious high-pressure research group.",
            "Planning and coordinating multi-day experiments, gathering data at international facilities with highly specialised instrumentation.",
            "Strong writing skills - published first author in high-impact journals.",
            "Proficient in processing, interpreting and presenting data.",
            "Delivered talks to high calibre audiences at international conferences."
        ]
    },
]