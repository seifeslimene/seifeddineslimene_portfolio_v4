// Experience section
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "./ui/card"
import { Badge } from "./ui/badge"
import { Calendar, MapPin, Award } from "lucide-react"

function ExperienceSection() {
  const experiences = [
    {
      company: "Apprentus",
      role: "Frontend Developer",
      period: "2021 - Present",
      location: "Hybrid / Tunis, Tunisia",
      achievements: [
        "maintain the frontend of the Apprentus platform using React, Kea.js, and Scss",
        "Collaborated with the backend team to integrate the frontend with the backend APIs",
        "Implemented responsive design and user-friendly interfaces for the Apprentus platform",
      ],
      technologies: ["React", "Kea.js", "Scss", "JavaScript"],
    },
    {
      company: "Freelance / Self-Initiated Projects",
      role: "Fullstack Developer",
      period: "2019 - 2021",
      location: "Remote",
      achievements: [
        "Developed multiple web apps and dashboards for small clients and personal use",
        "Built REST APIs, dashboards, and mobile-friendly UIs using Vite + React",
        "Practiced clean architecture and deployment using Docker and VPS",
      ],
      technologies: ["Vite", "React", "Express", "MongoDB", "Docker"],
    },
    {
      company: "La Soie S.A.R.L.",
      role: "Microsoft Navision ERP Functional",
      period: "2017 - 2019",
      location: "Monastir, Tunisia",
      achievements: [
        "Functioning the ERP system for the company using Microsoft Navision and doing necessary routines, reports and tasks",
        'Coordination with the BU (Business Unit) team to implement the Necessary Changes in the ERP system for the company',
        'Integration api with other systems like SAP, Oracle, etc. for data exchange and synchronization',
        'Training and documentation for the users of the ERP system',
      ],
      technologies: ["Microsoft Navision", "SQL Server", "Windows Server", "Power BI"],
    },
  ]

  return (
    <section id="experience" className="py-20 px-4">
      <div className="container mx-auto max-w-4xl">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
          <span className="bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">Experience</span>
        </h2>

        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <Card
              key={index}
              className="bg-white/5 border-white/10 backdrop-blur-sm hover:bg-white/10 transition-all duration-300"
            >
              <CardHeader>
                <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2">
                  <div>
                    <CardTitle className="text-white text-xl">{exp.role}</CardTitle>
                    <CardDescription className="text-purple-400 font-semibold text-lg">{exp.company}</CardDescription>
                  </div>
                  <div className="text-right">
                    <div className="text-white/60 flex items-center">
                      <Calendar size={16} className="mr-1" />
                      {exp.period}
                    </div>
                    <div className="text-white/60 flex items-center mt-1">
                      <MapPin size={16} className="mr-1" />
                      {exp.location}
                    </div>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 mb-4">
                  {exp.achievements.map((achievement, i) => (
                    <li key={i} className="text-white/80 flex items-start">
                      <span className="text-cyan-400 mr-2 mt-1">•</span>
                      {achievement}
                    </li>
                  ))}
                </ul>
                <div className="flex flex-wrap gap-2">
                  {exp.technologies.map((tech) => (
                    <Badge
                      key={tech}
                      variant="secondary"
                      className="bg-purple-500/20 text-purple-300 border-purple-500/30"
                    >
                      {tech}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-12 text-center">
          <h3 className="text-xl font-semibold text-white mb-6">Certifications</h3>
          <div className="flex flex-wrap justify-center gap-4">
            <Badge className="bg-green-500/20 text-green-300 border-green-500/30 px-4 py-2">
              {/* <Award className="mr-2" size={16} />
              TryHackMe: Offensive Pentesting Path */} Coming Soon
            </Badge>
            <Badge className="bg-purple-500/20 text-purple-300 border-purple-500/30 px-4 py-2">
              {/* <Award className="mr-2" size={16} />
              JavaScript Algorithms & Data Structures */} Coming Soon
            </Badge>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ExperienceSection
