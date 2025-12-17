/**
 * data.js v3
 * ---
 * JSON-like structure containing all editable content for the portfolio website.
 */

const portfolioData = {
    personalInfo: {
        name: "Chitresh Sharma",
        tagline: "Bridging the gap between software logic and silicon performance.",
        role: "Aspiring VLSI & Embedded Systems Engineer | RTL Design & FPGA Prototyping Expert",
        email: "chitreshsharma2311@gmail.com",
        githubURL: "https://github.com/YourGitHubUsername",
        linkedinURL: "https://www.linkedin.com/in/chitresh-sharma-electronics",
        // REMOVED: twitterURL
        
        // REMOVED: heroCTA and heroSubtext
    },

    navLinks: [
        { label: "About", targetId: "about" },
        { label: "Projects", targetId: "projects" },
        { label: "Achievements", targetId: "achievements" },
        { label: "Skills", targetId: "skills" },
        { label: "Contact", targetId: "contact" }
    ],

    aboutMe: {
        bioSummary: `I'm Chitresh Sharma, an aspiring **VLSI and Embedded Systems Engineer** dedicated to creating robust and efficient hardware solutions. My technical expertise lies in **RTL Design (Verilog)**, **FPGA prototyping (Xilinx Vivado)**, and **Embedded C programming**. I am currently pursuing my B.Tech in ECE with a strong academic standing (9.24 CGPA). Beyond the lab, I bring proven leadership from organizing large-scale events and leading media teams, ensuring projects are not just technically sound, but also well-coordinated and impactful.`,
        keyStats: [
            //{ value: "9.24", unit: "CGPA" },
            //{ value: "1 Month", unit: "VLSI Internship" }
        ],
        keySkills: [
            { name: "VLSI Design", level: 90 },
            { name: "RTL Design", level: 88 },
            { name: "Verilog HDL", level: 85 },
            { name: "FPGA Prototyping", level: 82 },
            { name: "Embedded C", level: 80 },
            { name: "Python", level: 75 },
            { name: "Problem Solving", level: 92 },
            { name: "Team Leadership", level: 88 }
        ],
        // NEW: Journey highlights for About Me section
        journeyHighlights: [
            { icon: "circuit-board", title: "VLSI Expertise", description: "1 month implementing cryptographic cores on Xilinx Artix-7 FPGA during a rigorous corporate internship." },
            { icon: "graduation-cap", title: "Academic Excellence", description: "B.Tech in ECE with a 9.24 CGPA, specializing in Electronics & Communication." },
            { icon: "users", title: "Leadership & Strategy", description: "Directed media and coordinated 10+ major campus events, leading to enhanced student engagement." },
            { icon: "zap", title: "Technical Proficiency", description: "Certified NPTEL Elite Python programmer, proficient in Verilog HDL, Vivado, and Embedded C." }
        ]
    },

    projects: [
        // ... (projects remain the same)
        {
    title: "High-Performance SHA-256 Cryptographic Core on FPGA",
    shortDescription: "VLSI internship project at ECIL focused on implementing the secure SHA-256 hashing algorithm on a Xilinx Artix-7 FPGA...",
    techStack: ["Verilog HDL", "RTL Design", "Xilinx Vivado", "FPGA (Artix-7)", "Embedded C"],
    imageUrl: "assets/images/project-sha256.jpg", 
    // Change liveDemoUrl to an array of objects
    links: [
        { label: "View Certificate", url: "assets/documents/certificate_ecil.pdf" },
        { label: "View Report", url: "assets/documents/ecil_report.pdf" }
    ],
    githubRepoUrl: "https://github.com/YourUsername/SHA256-FPGA-Project",
    featured: true
},,
        {
            title: "Leading Event Media & Student Engagement Strategy",
            shortDescription: "Case study in leadership and digital strategy. As President of the Photography Club and Media Coordinator for a National Hackathon, I directed media coverage for 10+ major events, resulting in a 30% increase in student engagement.",
            techStack: ["Leadership", "Team Coordination", "Social Media Marketing", "Photography", "Figma"],
            imageUrl: "assets/images/project-media.jpg", 
	    links: [
        { label: "View Instagrm", url: "https://www.instagram.com/shutter_clicks_sb?igsh=cDdpN3ljcmFzaHYz" }
    ],
            
            githubRepoUrl: "#",
            featured: false
        },
        {
            title: "Campus-Scale Event Management (Yuvnix Cultural Festival)",
            shortDescription: "Successfully managed and executed the annual cultural festival (1200+ attendees). My role as Head Organizer focused on facilitating clear communication and collaboration between 12 student committees.",
            techStack: ["Event Planning", "Team Coordination", "Problem Solving", "Process Streamlining"],
            imageUrl: "assets/images/project-event.jpg", 
            liveDemoUrl: "#",
            githubRepoUrl: "#",
            featured: false
        },
        {
            title: "Python-Based Computational Projects & Scripting",
            shortDescription: "Leveraging Python skills (certified NPTEL Elite) for various automation, data analysis, and scripting tasks, demonstrating strong logical and computational thinking necessary for advanced hardware verification.",
            techStack: ["Python", "NPTEL", "Data Structures", "TCL Scripting"],
            imageUrl: "assets/images/project-python.jpg", 
	    links: [
        { label: "View Certificate", url: "assets/documents/Nptel_Python_certificate.pdf"}
    ],
            githubRepoUrl: "https://github.com/YourUsername/Python-Scripts-Repository",
            featured: false
        }
    ],

    achievements: [
        {
            title: "VLSI Internship Excellence",
            organization: "ECIL - Corporate R&D Division",
            description: "Received 'Excellent' rating for implementing SHA-256 cryptographic core on Xilinx Artix-7 FPGA with MicroBlaze integration.",
            date: "June 2024",
            proofType: "Certificate",
            proofUrl: "assets/documents/certificate_ecil.pdf", // Replace with actual certificate link
            iconClass: "award" // Corresponds to lucide-react name, used as a data-attribute for JS to select the correct icon
        },
        {
            title: "Batch Topper - First Rank",
            organization: "Guru Nanak Institutions Technical Campus",
            description: "Achieved First Rank with CGPA of 9.24 out of 60+ students in Electronics and Communication Engineering.",
            date: "2021-2025",
            proofType: "Academic Transcript",
            proofUrl: "assets/documents/1st_topper_certificate.pdf",
            iconClass: "trophy"
        },
        {
            title: "NPTEL Elite Certificate - Python",
            organization: "NPTEL (IIT/IISC Initiative)",
            description: "Completed 'The Joy of Computing Using Python' course, ranking in the top 25% of all participants nationwide.",
            date: "2023",
            proofType: "Certificate",
            proofUrl: "assets/documents/Nptel_Python_certificate.pdf",
            iconClass: "star"
        },
        {
            title: "Best Class Representative Award",
            organization: "ECE Department, GNITC",
            description: "Awarded Best Class Representative among all class representatives for excellence in student coordination and communication.",
            date: "2023",
            proofType: "Award Certificate",
            proofUrl: "assets/documents/class_representative_certificate.pdf",
            iconClass: "award"
        },
        {
            title: "Photography Club President",
            organization: "Shutter Clicks - Photogrphy Club",
            description: "Led media coverage for 10+ major events, increasing student engagement by 30% and event registrations by 40%.",
            date: "2023-Active",
            proofType: "Appointment Letter",
            proofUrl: "#",
            iconClass: "star"
	    
        },
        {
            title: "National Hackathon Media Coordinator",
            organization: "Hack Arena - National Hackathon",
            description: "Managed comprehensive media strategy and coverage for national-level technical event with participation from multiple states.",
            date: "2024",
            proofType: "Event Certificate",
            proofUrl: "assets/documents/hackarena_certificate.pdf",
            iconClass: "trophy"
        }
    ],

    testimonials: [
        {
            quote: "Chitresh's performance during his VLSI internship was rated as 'Excellent.' He demonstrated strong fundamentals in RTL design and dedication to the SHA-256 implementation project.",
            clientName: "VLSI Internship Mentor",
            clientTitle: "Corporate R&D Division, ECIL",
            avatarUrl: "assets/images/avatar-mentor.jpg", 
            // ADDED: Logo property for testimonials
            logoUrl: "assets/images/logo-ecil.png" 
        },
        {
            quote: "Awarded Best Class Representative among all class reps for his excellence in student coordination and communication, reflecting high leadership and problem-solving skills.",
            clientName: "Department Head",
            clientTitle: "ECE Department, GNITC",
            avatarUrl: "assets/images/avatar-faculty.jpg",
            logoUrl: "assets/images/logo-gintc.png"
        }
    ],
    
    isAvailable: true 
};