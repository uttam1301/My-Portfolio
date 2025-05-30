import htmlLogo from './assets/html-logo.png';
import cssLogo from './assets/css-logo.png';
import jsLogo from './assets/javascript-logo.png';
import reactLogo from './assets/react-logo.png';
import tailwindlLogo from './assets/tailwind-css-logo.png';
import bootstraplLogo from './assets/bootstrap-logo.png';
import materialuiLogo from './assets/material-ui-logo.png';
import nodejsLogo from './assets/nodejs-logo.png';
import expressjsLogo from './assets/expressjs-logo.png';
import postgresLogo from './assets/postgresql-logo.png';
import mongodbLogo from './assets/mongodb-logo.png';
import mysqlLogo from './assets/mysql-logo.png';
import firebaseLogo from './assets/firebase-logo.png';
import cLogo from './assets/c.png';
import cppLogo from './assets/cpp.png';
import javaLogo from './assets/java.png';
import sqlLogo from './assets/sql.png';
import kotlinLogo from './assets/kotlin.png';
import gitLogo from './assets/git.png';
import githubLogo from './assets/github.png';
import vscodeLogo from './assets/vscode.png';
import androidLogo from './assets/android-studio.png';
import postmanLogo from './assets/postman.png';
import figmaLogo from './assets/figma.png';
import portfolio from './assets/portfolio.png';
import newsNest from './assets/news-nest.png';
import rollReveal from './assets/roll-reveal.png';
import tickIt from './assets/tick-it.png';
import gift from './assets/giftt.png';
import scs from './assets/scs.jpeg';
import jac from './assets/jac.jpeg';

export const SkillsInfo = [
    {
        title: 'Frontend',
        skills: [
            { name: 'HTML', logo: htmlLogo },
            { name: 'CSS', logo: cssLogo },
            { name: 'JavaScript', logo: jsLogo },
            { name: 'React JS', logo: reactLogo },
            { name: 'Tailwind CSS', logo: tailwindlLogo },
            { name: 'Bootstrap', logo: bootstraplLogo },
            { name: 'Material UI', logo: materialuiLogo },
        ],
    },
    {
        title: 'Backend',
        skills:[
            { name: 'Node JS', logo: nodejsLogo },
            { name: 'Express JS', logo: expressjsLogo },
            { name: 'Mongodb', logo: mongodbLogo },
            { name: 'PostgreSQL', logo: postgresLogo },
            { name: 'MySQL', logo: mysqlLogo},
            { name: 'Firebase', logo: firebaseLogo },
        ],
    },
    {
        title: 'Languages',
        skills:[
            { name: 'C', logo: cLogo },
            { name: 'C++', logo: cppLogo },
            { name: 'Java', logo: javaLogo },
            { name: 'JavaScript', logo: jsLogo },
            { name: 'SQL', logo: sqlLogo},
            { name: 'Kotlin', logo: kotlinLogo },
        ],
    },
    {
        title: 'Tools',
        skills:[
            { name: 'Git', logo: gitLogo },
            { name: 'Github', logo: githubLogo },
            { name: 'VS Code', logo: vscodeLogo },
            { name: 'Android Studio', logo: androidLogo },
            { name: 'Postman', logo: postmanLogo},
            { name: 'Figma', logo: figmaLogo },
        ],
    },
];

export const projectList = [
    {
        id: 0,
        title: "News Nest",
        description: "Developed a responsive web application that fetches and displays real-time news articles using a public News API.",
        image: newsNest,
        tags: ["HTML", "CSS", "JavaScript", "API"],
        sourceCode: "https://github.com/uttam1301/News-Nest",
        viewApp: "https://uttam1301-news-nest.netlify.app/",
    },
    {
        id: 1,
        title: "Roll & Reveal",
        description: "Developed an interactive dice game using React.js, featuring real-time dice roll simulation and game logic.",
        image: rollReveal,
        tags: ["HTML", "CSS", "JavaScript", "React JS"],
        sourceCode: "https://github.com/uttam1301/Roll-Reveal",
        viewApp: "https://uttam1301-roll-reveal.netlify.app/",
    },
    {
        id: 2,
        title: "Tick-It",
        description: "Built a fully functional To-Do list application using React.js, enabling users to add, edit, delete, and mark tasks as complete.",
        image: tickIt,
        tags: ["HTML", "CSS", "JavaScript", "React JS"],
        sourceCode: "https://github.com/uttam1301/Tick-It",
        viewApp: "https://uttam1301-tick-it.netlify.app/",
    },
    {
        id: 3,
        title: "Personal Portfolio",
        description: "A portfolio website whcih contains all my professional details which can be customized later",
        image: portfolio,
        tags: ["HTML", "CSS", "JavaScript", "React JS"],
        sourceCode: "https://github.com/uttam1301",
        viewApp: "http://localhost:5173/",
    },
];

export const educationList = [
    {
        id: 0,
        img: gift,
        school: "Gandhi Institute For Technology",
        date: "Aug 2019 - Jul 2023",
        grade: "8.31 CGPA",
        desc: "I have completed my BTech in Computer Scienece & Enginnering from Gandhi Institute For Technology (GIFT), Bhubaneswar (Odisha). During my time at GIFT, I gained a strong foundation in programming, software development, and computer science principles. I have studied courses such as Data Structures & Algorithms, Object-Oriented Programming, Database Management Systems, Web Development, and Software Engineering. I actively participated in various workshops and technical events, which enhanced my skills and knowledge. My experience at GIFT college has been instrumental in shaping my technical abilities and professional growth.",
        degree: "Bachelor of Technology in CSE",
    },
    {
        id: 1,
        img: scs,
        school: "Surendranath Centenary School, Ranchi",
        date: "Apr 2016 - March 2018",
        grade: "69.80%",
        desc: "I completed my senior secondary education from Surendranath Centenary School, Ranchi under the CBSE board, where I studied Physics, Chemistry, Mathematics with Computer Science.",
        degree: "Senior Secondary Education",
    },
    {
        id: 2,
        img: jac,
        school: "High School Kotal Pokhar",
        date: "Apr 2015 - March 2016",
        grade: "85.60%",
        desc: "I completed my class 10 from High School Kotal Pokhar, Sahibganj (Jharkhand) under the JAC board.",
        degree: "Matriculation",
    },
];
