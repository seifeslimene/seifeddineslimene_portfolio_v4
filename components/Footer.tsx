import { Github, Linkedin, Mail } from "lucide-react"
import { Button } from "./ui/button"

export default function Footer() {
  return (
    <footer className="py-8 px-4 border-t border-white/10">
      <div className="container mx-auto max-w-6xl">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <div className="text-white/60 mb-4 md:mb-0">
            © {new Date().getFullYear()} Slimene Seif Eddine. All rights reserved.
          </div>
          <div className="flex gap-4">
            <Button
              variant="ghost"
              size="sm"
              className="text-white/60 hover:text-white"
              onClick={() => window.open("https://github.com/seifeslimene", "_blank")}
              aria-label="GitHub"
            >
              <Github size={16} />
            </Button>
            <Button
              variant="ghost"
              size="sm"
              className="text-white/60 hover:text-white"
              onClick={() => window.open("https://www.linkedin.com/in/seifeslimene", "_blank")}
              aria-label="LinkedIn"
            >
              <Linkedin size={16} />
            </Button>
            <Button
              variant="ghost"
              size="sm"
              className="text-white/60 hover:text-white"
              onClick={() => (window.location.href = "mailto:s.slimene19@gmail.com")}
              aria-label="Email"
            >
              <Mail size={16} />
            </Button>
          </div>
        </div>
      </div>
    </footer>
  )
}
