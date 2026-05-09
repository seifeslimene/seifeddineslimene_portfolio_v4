import { Menu, X } from "lucide-react"
import { useState } from "react"

// Navigation component
function Navigation() {
    const [isOpen, setIsOpen] = useState(false)
  
    const scrollToSection = (id: string) => {
      document.getElementById(id)?.scrollIntoView({ behavior: "smooth" })
      setIsOpen(false)
    }
  
    return (
      <nav className="fixed top-0 left-0 right-0 z-50 bg-black/20 backdrop-blur-md border-b border-white/10">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">
              Slimene Seif Eddine
            </div>
  
            {/* Desktop Navigation */}
            <div className="hidden md:flex space-x-8">
              {["About", "Experience", "Projects", "Contact"].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item.toLowerCase())}
                  className="text-white/80 hover:text-white transition-colors duration-200"
                >
                  {item}
                </button>
              ))}
            </div>
  
            {/* Mobile Menu Button */}
            <button className="md:hidden text-white" onClick={() => setIsOpen(!isOpen)}>
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
  
          {/* Mobile Navigation */}
          {isOpen && (
            <div className="md:hidden mt-4 pb-4 border-t border-white/10">
              <div className="flex flex-col space-y-4 pt-4">
                {["About", "Experience", "Projects", "Contact"].map((item) => (
                  <button
                    key={item}
                    onClick={() => scrollToSection(item.toLowerCase())}
                    className="text-white/80 hover:text-white transition-colors duration-200 text-left"
                  >
                    {item}
                  </button>
                ))}
              </div>
            </div>
          )}
        </div>
      </nav>
    )
  }

export  default Navigation;  