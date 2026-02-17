import { caption } from "framer-motion/client";
import App from "../App";

export const projects = [
    {
        slug: "fresho-career",
        title: "Fresho Career Job Board",
        description:
            "A full-stack job board platform built to help freshers find entry-level jobs.",
        tech: [
            "React",
            "React Router",
            "Tailwind CSS",
            "Flask",
            "REST APIs",
            "PostgreSQL",
            "Render Deployment",
            "Git & GitHub"
        ],

        problem:
            "Freshers struggle to find verified and structured job listings.",

        features: [
            "Job listing and filtering system",
            "Admin dashboard to manage jobs",
            "REST API integration",
            "Full deployment with PostgreSQL database"
        ],

        implementation: [
            "Built frontend using React and Tailwind CSS",
            "Developed backend using Flask REST APIs",
            "Integrated PostgreSQL database",
            "Deployed full-stack application on Render"
        ],

        challenges: [
            "Handling CORS between frontend and backend",
            "Managing environment variables securely",
            "Debugging database connection issues during deployment"
        ],

        learned: [
            "Improved full-stack development skills",
            "Understood API architecture deeply",
            "Learned real-world deployment process",
            "Improved debugging and problem-solving ability"
        ],

        skills: [
            "React",
            "Flask",
            "PostgreSQL",
            "REST APIs",
            "Deployment",
            "State Management"
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
        metrics: [
            { label: "Core Features Built", value: "8+" },
            { label: "API Endpoints Created", value: "6+" },
            { label: "Database Tables", value: "3+" },
            { label: "Pages Developed", value: "10+" },
            { label: "Deployment Environment", value: "Full Stack" }
        ],

        github: "https://github.com/Ajay-paka/fresho-career-job-board",
        live: "https://fresho-career-job-board.onrender.com",
    },

    {
        slug: "expense-tracker",
        title: "Python Expense Tracker",
        description:
            "A desktop-based expense management application built using Python, Tkinter, and SQLite.",
        tech: [
            "Python",
            "Tkinter",
            "SQLite",
            "Matplotlib",
            "PyInstaller",
            "Object-Oriented Programming"
        ],

        problem:
            "Managing daily expenses manually is inefficient and lacks structured tracking and visualization.",

        features: [
            "Add, update and delete expense entries",
            "Category-based tracking",
            "SQLite database integration",
            "Monthly summary calculations",
            "Data visualization using Matplotlib",
            "Desktop executable packaging using PyInstaller"
        ],

        implementation: [
            "Designed GUI using Tkinter",
            "Implemented CRUD operations with SQLite",
            "Integrated Matplotlib charts",
            "Structured modular Python code",
            "Packaged application using PyInstaller"
        ],

        challenges: [
            "Database connection management",
            "Tkinter layout alignment issues",
            "Matplotlib dependency errors",
            "PyInstaller packaging configuration problems"
        ],

        learned: [
            "Understanding of CRUD operations",
            "GUI and database integration",
            "Event-driven programming",
            "Application packaging and debugging"
        ],

        skills: [
            "Python",
            "Tkinter",
            "SQLite",
            "Matplotlib",
            "Debugging",
            "Application Packaging"
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

        metrics: [
            { label: "Features Implemented", value: "6+" },
            { label: "Database Operations", value: "Add / Edit / Delete " },
            { label: "Visual Reports", value: "Charts + Summary" },
            { label: "Application Type", value: "Standalone Desktop App" }
        ],


        github: "https://github.com/Ajay-paka/expense-tracker-desktop",
        App: "https://github.com/Ajay-paka/expense-tracker-desktop/releases"
    },
];
