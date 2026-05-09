import { Github, Linkedin, Code, Database, Cloud, Globe } from 'lucide-react'
import React from 'react'
import { Button } from './ui/button'
import { Badge } from './ui/badge'

const SkillsSection = () => {
    const skills = [
        {
          name: "TypeScript",
          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg",
          color: "from-blue-300 to-blue-500"
        },
        {
          name: "React",
          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
          color: "from-sky-700 to-blue-900"
        },
        {
          name: "Node.js",
          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",
          color: "from-green-300 to-emerald-500"
        },
        {
          name: "Docker",
          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg",
          color: "from-sky-300 to-sky-500"
        },
        {
          name: "PostgreSQL",
          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg",
          color: "from-indigo-300 to-blue-700"
        },
        {
          name: "TailwindCSS",
          icon: "https://tailwindcss.com/_next/static/media/tailwindcss-mark.d52e9897.svg",
          color: "from-teal-700 to-cyan-900"
        },
        {
          name: "MongoDB",
          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg",
          color: "from-green-200 to-green-500"
        },
        {
          name: "Next.js",
          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg",
          color: "from-neutral-300 to-neutral-600"
        },
        {
          name: "Express.js",
          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg",
          color: "from-zinc-400 to-gray-600"
        },
        {
          name: "GraphQL",
          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/graphql/graphql-plain.svg",
          color: "from-pink-300 to-fuchsia-500"
        },
        {
          name: "Linux",
          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linux/linux-original.svg",
          color: "from-stone-400 to-neutral-700"
        },
        {
          name: "Git",
          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg",
          color: "from-orange-300 to-red-500"
        },
        {
          name: "GitHub",
          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg",
          color: "from-gray-400 to-gray-800"
        },
        {
          name: "Vite",
          icon: "https://upload.wikimedia.org/wikipedia/commons/f/f1/Vitejs-logo.svg",
          color: "from-purple-300 to-yellow-400"
        },
        {
          name: "Redis",
          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redis/redis-original.svg",
          color: "from-red-300 to-rose-500"
        },
        {
          name: "Prisma",
          icon: "https://www.svgrepo.com/show/373776/light-prisma.svg",
          color: "from-indigo-300 to-indigo-600"
        }
      ];
      
      

  return (
    <div className="relative max-w-6xl mx-auto px-4 py-20">
      {/* Background decorative elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-purple-900/20 to-cyan-900/20 rounded-3xl blur-3xl -z-10"></div>
      
      {/* Main content container */}
      <div className="relative bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 md:p-12">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-cyan-400 bg-clip-text text-transparent">
              Technology Stack
            </span>
          </h2>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto">
            Crafting digital experiences with cutting-edge technologies and best practices
          </p>
        </div>

        {/* Skills grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mb-12">
          {skills.map((skill, index) => (
            <div 
              key={skill.name}
              className="group relative bg-white/5 border border-white/10 rounded-xl p-6 hover:bg-white/10 transition-all duration-300 hover:scale-[1.05] hover:shadow-2xl hover:shadow-purple-500/20 flex flex-col items-center text-center"
              style={{
                animation: `slideInUp 0.6s ease-out ${index * 0.1}s both`
              }}
            >
              {/* Icon */}
              <div className={`text-4xl mb-4 p-3 rounded-full bg-gradient-to-r ${skill.color} shadow-lg flex items-center justify-center w-20 h-20`}>
                <img src={skill.icon}  alt=""  />
              </div>

              {/* Skill name */}
              <h3 className="text-lg font-semibold text-white mb-2">{skill.name}</h3>

              {/* Hover glow effect */}
              <div className={`absolute inset-0 rounded-xl bg-gradient-to-r ${skill.color} opacity-0 group-hover:opacity-20 transition-opacity duration-300 pointer-events-none`}></div>
            </div>
          ))}
        </div>

        {/* Social links */}
        <div className="flex justify-center gap-6">
          <Button
            variant="outline"
            size="lg"
            className="group relative border-white/20 text-white hover:bg-white/10 bg-transparent hover:border-white/40 transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-purple-500/25"
            onClick={() => window.open("https://github.com/seifeslimene", "_blank")}
         >
            <Github className="mr-3 group-hover:rotate-12 transition-transform duration-300" size={20} />
            <span className="relative">GitHub</span>
            <div className="absolute inset-0 bg-gradient-to-r from-purple-400/20 to-cyan-400/20 rounded-md opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          </Button>
          
          <Button
            variant="outline"
            size="lg"
            className="group relative border-white/20 text-white hover:bg-white/10 bg-transparent hover:border-white/40 transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-blue-500/25"
            onClick={() => window.open("https://www.linkedin.com/in/seifeslimene", "_blank")}

        >
            <Linkedin className="mr-3 group-hover:rotate-12 transition-transform duration-300" size={20} />
            <span className="relative">LinkedIn</span>
            <div className="absolute inset-0 bg-gradient-to-r from-blue-400/20 to-cyan-400/20 rounded-md opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          </Button>
        </div>
      </div>

      {/* CSS animations */}
      <style jsx>{`
        @keyframes slideInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes fadeInScale {
          from {
            opacity: 0;
            transform: scale(0.8);
          }
          to {
            opacity: 1;
            transform: scale(1);
          }
        }

        @keyframes float {
          0%, 100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-10px);
          }
        }
      `}</style>
    </div>
  )
}

export default SkillsSection