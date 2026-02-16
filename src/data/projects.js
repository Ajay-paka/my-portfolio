import { caption } from "framer-motion/client";
import App from "../App";

export const projects = [
    {
        slug: "fresho-career",
        title: "Fresho Career Job Board",
        description: "A curated job board platform for freshers.",
        tech: ["React", "Flask", "PostgreSQL"],
        problem:
            "Freshers struggle to find verified entry-level job opportunities.",
        solution:
            "Built a curated platform with filtering, admin dashboard and deployment.",
        impact:
            "Improved job discovery experience with structured listing system.",
        metrics: [
            { label: "Core Features", value: "6+" },
            { label: "Pages Built", value: "10+" },
            { label: "Deployment", value: "Render" }
        ],
        screenshots: [

            {
                image: "/SS/FCRegister.PNG",
                caption: "Registration page for new Recruiters and Job Seekers."
            },
            {
                image: "/SS/FCLogin.PNG",
                caption: "Login page for user authentication."
            },
            {
                image: "/SS/FCRecruiter.PNG",
                caption: "Home page for users who login as a Recruiter, A recruiter can post jobs and manage their own applications, but can't changes other recruiters' jobs."
            },
            {
                image: "/SS/FCHome.PNG",
                caption: "Home page for users who login as a Job Seeker."
            },
            {
                image: "/SS/FCAddJob.PNG",
                caption: "Add job page for recruiters."
            },
            {
                image: "/SS/FCJobdetails.PNG",
                caption: "Overview of job details page / Job description page."
            }
        ],
        github: "https://github.com/Ajay-paka/fresho-career-job-board",
        live: "https://fresho-career-job-board.onrender.com",
    },
    {
        slug: "expense-tracker",
        title: "Python Expense Tracker",
        description: "Desktop expense management app.",
        tech: ["Python", "Tkinter", "SQLite"],
        problem:
            "Managing daily expenses manually is inefficient.",
        solution:
            "Created a GUI-based desktop app with analytics.",
        impact:
            "Improved financial awareness and tracking.",
        metrics: [
            { label: "Reports Generated", value: "Charts + Tables" },
            { label: "Database", value: "SQLite" },
            { label: "Packaging", value: "PyInstaller" }
        ],
        screenshots: [
            {
                image: "/SS/Desktop - 1.png",
                caption: "Expense entry form with validation."
            },

            {
                image: "/SS/ETmain.PNG",
                caption: "Analytics dashboard with charts and tables."
            },

            {
                image: "/SS/Desktop2.png",
                caption: "Pie chart showing expense distribution."
            },

            {
                image: "/SS/ETexcel.PNG",
                caption: "Exported data to Excel."
            }
        ],

        github: "https://github.com/Ajay-paka/expense-tracker-desktop",
        App: "https://github.com/Ajay-paka/expense-tracker-desktop/releases"
    },
];
