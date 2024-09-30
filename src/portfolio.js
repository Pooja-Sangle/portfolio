
import emoji from "react-easy-emoji";
import splashAnimation from "./assets/lottie/splashAnimation"; 

// Splash Screen

const splashScreen = {
  enabled: true, // set false to disable splash screen
  animation: splashAnimation,
  duration: 2000 // Set animation duration as per your animation
};

// Summary And Greeting Section

const illustration = {
  animated: true // Set to false to use static SVG
};

const greeting = {
  username: "Pooja Sangle",
  title: "Hi all, I'm Pooja",
  subTitle: emoji(
"A passionate Full Stack Developer 🚀 with experience in building web applications using technologies such as Python, React, Django, ASP.NET, and Node.js. Proficient in both frontend & backend development and database management."
  ),
  resumeLink:
    "https://docs.google.com/document/d/1uq52rlX40gAZ39GPwryXqMraK3BvcQoVamsy-y0_nFc/edit?usp=sharing", // You can replace this with a resume link (Google Drive or GitHub), set to empty if you don't want to show it
  displayGreeting: true // Set false to hide this section, defaults to true
};


// Social Media Links

const socialMediaLinks = {
  github: "https://github.com/Pooja-Sangle",
  linkedin: "https://www.linkedin.com/in/pooja-sangle-2bb642180/",
  gmail: "psangle.2611@gmail.com",
  display: true // Set true to display this section, defaults to false
};


// Skills Section

const skillsSection = {
  title: "What I Do",
  subTitle: "PASSIONATE FULL STACK DEVELOPER WITH EXTENSIVE EXPERIENCE IN FRONTEND AND BACKEND TECHNOLOGIES",
  skills: [
    emoji(
      "⚡ Develop responsive and interactive user interfaces using React for web applications"
    ),
    emoji(
      "⚡ Expertise in backend development using Django and ASP.NET for creating robust applications"
    ),
    emoji(
      "⚡ Strong skills in working with databases such as PostgreSQL, MySQL, and MongoDB"
    ),
    emoji(
      "⚡ Proficient in Python for data processing and automation tasks"
    ),
    emoji(
      "⚡ Integration of third-party services such as Firebase, AWS, and DigitalOcean for cloud-based solutions"
    ),
    emoji(
      "⚡ Experience with REST APIs, data visualization, and analytics using libraries like React chart.js"
    ),
    emoji(
      "⚡ Comfortable with using CI/CD pipelines, Git, and GitHub for streamlined development processes"
    )
  ],


  /* Make Sure to include correct Font Awesome Classname to view your icon
https://fontawesome.com/icons?d=gallery */

  softwareSkills: [
    {
      skillName: "html-5",
      fontAwesomeClassname: "fab fa-html5"
    },
    {
      skillName: "css3",
      fontAwesomeClassname: "fab fa-css3-alt"
    },
    {
      skillName: "JavaScript",
      fontAwesomeClassname: "fab fa-js"
    },
    {
      skillName: "reactjs",
      fontAwesomeClassname: "fab fa-react"
    },
    {
      skillName: "nodejs",
      fontAwesomeClassname: "fab fa-node"
    },
    {
      skillName: "npm",
      fontAwesomeClassname: "fab fa-npm"
    },
    {
      skillName: "sql-database",
      fontAwesomeClassname: "fas fa-database"
    },
    {
      skillName: "firebase",
      fontAwesomeClassname: "fas fa-fire"
    },
    {
      skillName: "python",
      fontAwesomeClassname: "fab fa-python"
    },
    {
      skillName: "docker",
      fontAwesomeClassname: "fab fa-docker"
    },
    {
      skillName: "asp.net",
      fontAwesomeClassname: "fas fa-project-diagram" // No official icon, using a relevant one
    },
    {
      skillName: "postgresql",
      fontAwesomeClassname: "fas fa-database" // Same database icon used
    },
    {
      skillName: "mongodb",
      fontAwesomeClassname: "fas fa-leaf" // MongoDB icon substitute
    },
    {
      skillName: "git",
      fontAwesomeClassname: "fab fa-git"
    },
    {
      skillName: "github",
      fontAwesomeClassname: "fab fa-github"
    },
  ],
  display: true // Set false to hide this section, defaults to true
};

// Education Section

const educationInfo = {
  display: true, // Set false to hide this section, defaults to true
  schools: [
    {
      schoolName: "Technical University of Kaiserslautern",
      logo: require("./assets/images/kaiserslauternLogo.png"), 
      subHeader: "Master of Science in Computer Science",
      duration: "October 2022 - October 2024",
      desc: "Currently pursuing a Master's degree in Computer Science.",
      descBullets: [
        "CGPA: 2.3 / 5"
      ]
    },
    {
      schoolName: "Sardar Patel Institute of Technology",
      logo: require("./assets/images/sardarPatelLogo.png"), 
      subHeader: "Bachelor of Technology in Computer Science",
      duration: "June 2017 - June 2021",
      desc: "Completed Bachelor's degree in Computer Science.",
      descBullets: [
        "CGPA: 8.98 / 10"
      ]
    },
    {
      schoolName: "Thakur Vidya Mandir",
      logo: require("./assets/images/thakurVidyaMandirLogo.png"), 
      subHeader: "Higher Secondary Certificate (HSC)",
      duration: "June 2015 - May 2017",
      desc: "Completed Higher Secondary education with a specialization in Science.",
      descBullets: [
        "Percentage: 89.38%"
      ]
    },
    {
      schoolName: "Yashodham High School",
      logo: require("./assets/images/yashodhamHighLogo.png"), 
      subHeader: "Secondary School Certificate (SSC)",
      duration: "June 2000 - May 2015",
      desc: "Completed Secondary School education.",
      descBullets: [
        "Percentage: 95.20%"
      ]
    }
  ]
};



const techStack = {
  viewSkillBars: true, // Set it to true to show Proficiency Section
  experience: [
    {
      Stack: "Python", // Programming language
      progressPercentage: "98%"
    },
    {
      Stack: "React", // Frontend library
      progressPercentage: "98%"
    },
    {
      Stack: "SQL", // Database query language
      progressPercentage: "98%"
    },
    {
      Stack: "PostgreSQL", // Relational database
      progressPercentage: "98%"
    },
    {
      Stack: "MySQL", // Relational database
      progressPercentage: "98%"
    },
    {
      Stack: "Django", // Python web framework
      progressPercentage: "90%"
    },
    {
      Stack: "HTML/CSS", // Markup and styling languages
      progressPercentage: "85%"
    },
    {
      Stack: "Java", // Programming language
      progressPercentage: "85%"
    },
    {
      Stack: "ASP.NET", // .NET framework for web applications
      progressPercentage: "85%"
    },
    {
      Stack: "MongoDB", // NoSQL database
      progressPercentage: "80%"
    },
    {
      Stack: "C#", // Programming language
      progressPercentage: "75%"
    }
  ],
  
  displayCodersrank: false // Set true to display codersrank badges section need to changes your username in src/containers/skillProgress/skillProgress.js:17:62, defaults to false
};


// Work experience section

const workExperiences = {
  display: true, // Set it to true to show workExperiences Section
  experience: [
    {
      role: "Research Assistant",
      company: "Fraunhofer IEE",
      companylogo: require("./assets/images/fraunhoferIEELogo.png"), 
      date: "July 2024 – Present",
      desc: "Utilized Python to extract, clean, and process climate data for detailed analysis.",
      descBullets: [
        "Extracted and processed climate data from Earth System Grid Federation (ESGF) and Deutscher Wetterdienst (DWD).",
        "Conducted comparative analysis of ESGF and DWD datasets to identify best fit for organizational use."
      ]
    },
    {
      role: "Research Assistant",
      company: "Fraunhofer FHR",
      companylogo: require("./assets/images/fraunhoferFHRLogo.png"), 
      date: "February 2023 – June 2024",
      desc: "Developed a React web app and backend for material data management.",
      descBullets: [
        "Created a web app using React for user registration and material data visualization.",
        "Integrated React chart.js library for visual analytics and used Django for backend development.",
        "Utilized PostgreSQL for storing material data and integrated it into the web app."
      ]
    },
    {
      role: "Software Developer",
      company: "Versor Investments",
      companylogo: require("./assets/images/versorLogo.png"), 
      date: "June 2021 – October 2022",
      desc: "Developed dashboards and automation systems for portfolio management.",
      descBullets: [
        "Developed ASP.NET dashboards to automate portfolio implementation tasks.",
        "Created Python processes to un-pickle log files from Portfolio Model runs."
      ]
    },
    {
      role: "SDE Intern",
      company: "Versor Investments",
      companylogo: require("./assets/images/versorLogo.png"), 
      date: "January 2021 – June 2021",
      desc: "Built the Position Limits Checker system to monitor internal positions.",
      descBullets: [
        "Developed using Python and SQL to monitor internal positions against CFTC limits.",
        "Automated the system to run daily, generating reports to highlight potential breaches."
      ]
    }
  ]
};


const openSource = {
  showGithubProfile: "true", // Set true or false to show Contact profile using Github, defaults to true
  display: true // Set false to hide this section, defaults to true
};



const bigProjects = {
  title: "Projects",
  subtitle: "MY PROJECT EXPERIENCE",
  projects: [
    {
      image: require("./assets/images/ExpenseTracker.png"),
      projectName: "Budget Tracker WebApp",
      projectDesc: "Created a React web application to manage budgets, visualize expenses, and track progress with CSS progress bars.",
      footerLink: [
        {
          name: "View on GitHub",
          url: "https://github.com/Pooja-Sangle/budget-management-app"
        }
      ]
    },
    {
      image: require("./assets/images/TodoApp.png"),
      projectName: "ToDo WebApp",
      projectDesc: "Developed a ToDo web application using Django and MySQL to manage task lists and display user-specific details based on login.",
      footerLink: [
        {
          name: "View on GitHub",
          url: "https://github.com/Pooja-Sangle/The-Todo-App"
        }
      ]
    },
    {
      image: require("./assets/images/resortBooking.png"),
      projectName: "Resort Booking App",
      projectDesc: "Developed an Android app allowing users to book resorts by selecting desired rooms and locations, using DatePickerDialog for date selection.",
      footerLink: [
        {
          name: "View on GitHub",
          url: "https://github.com/Pooja-Sangle/Resort-Booking-App"
        }
      ]
    }
  ],
  display: true
};


// Achievement Section
// Include certificates, talks etc
const achievementSection = {
  title: emoji("Achievements And Certifications 🏆 "),
  subtitle: "Achievements and notable Certifications I've Accomplished!",

  achievementsCards: [
    {
      title: "M001: MongoDB Basics",
      subtitle: "Completed an online course on the basics of MongoDB.",
      image: require("./assets/images/mongodbLogo.png"), 
      imageAlt: "MongoDB Logo",
      footerLink: [
        {
          name: "",
          url: "" 
        }
      ]
    },
    {
      title: "Data Structures and Problem Solving",
      subtitle: "Completed a course on different data structures at Suven Consultants.",
      image: require("./assets/images/dataStructuresLogo.png"), 
      imageAlt: "Data Structures Logo",
      footerLink: [
        {
          name: "",
          url: "" 
        }
      ]
    },
    {
      title: "Machine Learning",
      subtitle: "Completed a course on various machine learning algorithms at Suven Consultants.",
      image: require("./assets/images/machineLearningLogo.png"), 
      imageAlt: "Machine Learning Logo",
      footerLink: [
        {
          name: "",
          url: "" 
        }
      ]
    }
  ],
  display: true // Set false to hide this section, defaults to true
};


// Blogs Section

const blogSection = {
  title: "Blogs",
  subtitle:
    "With Love for Developing cool stuff, I love to write and teach others what I have learnt.",
  displayMediumBlogs: "true", // Set true to display fetched medium blogs instead of hardcoded ones
  blogs: [
    {
      url: "https://blog.usejournal.com/create-a-google-assistant-action-and-win-a-google-t-shirt-and-cloud-credits-4a8d86d76eae",
      title: "Win a Google Assistant Tshirt and $200 in Google Cloud Credits",
      description:
        "Do you want to win $200 and Google Assistant Tshirt by creating a Google Assistant Action in less then 30 min?"
    },
    {
      url: "https://medium.com/@saadpasta/why-react-is-the-best-5a97563f423e",
      title: "Why REACT is The Best?",
      description:
        "React is a JavaScript library for building User Interface. It is maintained by Facebook and a community of individual developers and companies."
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Talks Sections

const talkSection = {
  title: "TALKS",
  subtitle: emoji(
    "I LOVE TO SHARE MY LIMITED KNOWLEDGE AND GET A SPEAKER BADGE 😅"
  ),

  talks: [
    {
      title: "Build Actions For Google Assistant",
      subtitle: "Codelab at GDG DevFest Karachi 2019",
      slides_url: "https://bit.ly/saadpasta-slides",
      event_url: "https://www.facebook.com/events/2339906106275053/"
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Podcast Section

const podcastSection = {
  title: emoji("Podcast 🎙️"),
  subtitle: "I LOVE TO TALK ABOUT MYSELF AND TECHNOLOGY",

  // Please Provide with Your Podcast embeded Link
  podcast: [
    "https://anchor.fm/codevcast/embed/episodes/DevStory---Saad-Pasta-from-Karachi--Pakistan-e9givv/a-a15itvo"
  ],
  display: true // Set false to hide this section, defaults to true
};

// Resume Section
const resumeSection = {
  title: "Resume",
  subtitle: "Feel free to download my resume",

  // Please Provide with Your Podcast embeded Link
  display: true // Set false to hide this section, defaults to true
};

const contactInfo = {
  title: emoji("Contact Me ☎️"),
  subtitle: "Discuss a project or just want to say hi? My inbox is open for all inquiries.",
  number: "+49-17673246375", // Your phone number based on resume
  email_address: "psangle.2611@gmail.com" // Your email address from the resume
};


// Twitter Section

// const twitterDetails = {
//   userName: "twitter", //Replace "twitter" with your twitter username without @
//   display: true // Set true to display this section, defaults to false
// };

const isHireable = true; // Set false if you are not looking for a job. Also isHireable will be display as Open for opportunities: Yes/No in the GitHub footer

export {
  illustration,
  greeting,
  socialMediaLinks,
  splashScreen,
  skillsSection,
  educationInfo,
  techStack,
  workExperiences,
  openSource,
  bigProjects,
  achievementSection,
  blogSection,
  talkSection,
  podcastSection,
  contactInfo,
  // twitterDetails,
  isHireable,
  resumeSection
};
