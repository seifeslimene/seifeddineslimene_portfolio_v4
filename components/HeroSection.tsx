// Hero section
import { Button } from "./ui/button"
import { Badge } from "./ui/badge"
import { MapPin, ChevronDown } from "lucide-react"

function HeroSection() {
  return (
    <section className="min-h-screen flex items-center justify-center px-4 pt-20">
      <div className="text-center max-w-4xl mx-auto">
        <div className="mb-6">
          <div className="w-32 h-32 mx-auto mb-6 rounded-full bg-gradient-to-r from-purple-500 to-cyan-500 p-1">
            <div className="w-full h-full rounded-full bg-black flex items-center justify-center text-4xl font-bold text-white">
              SS
            </div>
          </div>
        </div>

        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6">
          <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-cyan-400 bg-clip-text text-transparent">
            Slimene Seif Eddine
          </span>
        </h1>

        <p className="text-xl md:text-2xl text-white/80 mb-4">Fullstack Web & Mobile Developer</p>

        <p className="text-lg text-white/60 mb-8 max-w-2xl mx-auto">
          Software engineer passionate about modern web and mobile technologies, and building fast, beautiful, and secure apps.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
          <Badge variant="secondary" className="bg-green-500/20 text-green-400 border-green-500/30">
            <div className="w-2 h-2 bg-green-400 rounded-full mr-2 animate-pulse"></div>
            Available for freelance & collaboration
          </Badge>
          <div className="flex items-center text-white/60">
            <MapPin size={16} className="mr-1" />
            Tunis, Tunisia
          </div>
        </div>

        <div className="flex flex-wrap gap-4 justify-center">
          <Button
            onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
            className="bg-gradient-to-r from-purple-500 to-cyan-500 hover:from-purple-600 hover:to-cyan-600"
          >
            Get In Touch
          </Button>
          <Button
            variant="outline"
            className="border-white/20 text-white hover:bg-white/10 bg-transparent"
            onClick={() => window.open("/SlimeneSeifEddine_Resume.pdf", "_blank")}
          >
            Download Resume
          </Button>
        </div>

        <div className="mt-12 animate-bounce">
          <ChevronDown className="mx-auto text-white/40" size={32} />
        </div>
      </div>
    </section>
  )
}

export default HeroSection;
