// About section
import { Card, CardContent } from "./ui/card"

function AboutSection() {
  const stats = [
    { label: "Years of Experience", value: "5+" },
    { label: "Projects Built", value: "10+" },
    { label: "Tech Stack Mastery", value: "15+" },
  ]

  return (
    <section id="about" className="py-20 px-4">
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
          <span className="bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">
            About Me
          </span>
        </h2>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <p className="text-white/80 text-lg leading-relaxed mb-6">
              I'm a fullstack developer from Tunisia. I build modern, scalable apps using
              tools like React, TypeScript, Node.js, Docker, and Prisma.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-6">
            {stats.map((stat, index) => (
              <Card key={index} className="bg-white/5 border-white/10 backdrop-blur-sm">
                <CardContent className="p-6 text-center">
                  <div className="text-2xl md:text-3xl font-bold text-white mb-2">{stat.value}</div>
                  <div className="text-white/60 text-sm">{stat.label}</div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default AboutSection;
