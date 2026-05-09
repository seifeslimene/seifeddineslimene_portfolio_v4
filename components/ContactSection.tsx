import { useState } from "react"
import { Button } from "./ui/button"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "./ui/card"
import { Input } from "./ui/input"
import { Textarea } from "./ui/textarea"
import { Label } from "./ui/label"
import { Mail, Briefcase, MapPin, Send, Github, Linkedin } from "lucide-react"

function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  })

  const handleSubmit = async  (e: React.FormEvent) => {
    e.preventDefault()
    
    const res = await fetch("/api/contact", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formData),
    })
    

    setFormData({ name: "", email: "", subject: "", message: "" })
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }))
  }

  return (
    <section id="contact" className="py-20 px-4">
      <div className="container mx-auto max-w-4xl">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
          <span className="bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">
            Get In Touch
          </span>
        </h2>

        <div className="grid md:grid-cols-2 gap-12">
          <div>
            <h3 className="text-2xl font-semibold text-white mb-6">Let's Connect</h3>
            <p className="text-white/80 text-lg mb-8">
              I’m currently exploring new opportunities and building creative tools. Feel free to reach out for
              collaboration or freelance projects!
            </p>

            <div className="space-y-4">
              <div className="flex items-center text-white/80">
                <Mail className="mr-3 text-purple-400" size={20} />
                <a href="mailto:s.slimene19@gmail.com" className="hover:underline">
                  s.slimene19@gmail.com
                </a>
                
              </div>
              <div className="flex items-center text-white/80">
                <MapPin className="mr-3 text-purple-400" size={20} />
                Tunis, Tunisia
              </div>
              <div className="flex items-center text-white/80">
                <Briefcase className="mr-3 text-purple-400" size={20} />
                Available for new opportunities
              </div>
            </div>

            <div className="flex gap-4 mt-8">
              <Button
                variant="outline"
                size="sm"
                onClick={() => window.open("https://github.com/seifeslimene", "_blank")}
                className="border-white/20 text-white hover:bg-white/10 bg-transparent"
              >
                <Github className="mr-2" size={16} />
                GitHub
              </Button>
              <Button
                variant="outline"
                size="sm"
                onClick={() => window.open("https://www.linkedin.com/in/seifeslimene", "_blank")}
                className="border-white/20 text-white hover:bg-white/10 bg-transparent"
              >
                <Linkedin className="mr-2" size={16} />
                LinkedIn
              </Button>
            </div>
          </div>

          <Card className="bg-white/5 border-white/10 backdrop-blur-sm">
            <CardHeader>
              <CardTitle className="text-white">Send a Message</CardTitle>
              <CardDescription className="text-white/60">I’ll get back to you within 24 hours</CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="name" className="text-white/80">Name</Label>
                    <Input
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      className="bg-white/10 border-white/20 text-white placeholder:text-white/40"
                      placeholder="Your name"
                      required
                    />
                  </div>
                  <div>
                    <Label htmlFor="email" className="text-white/80">Email</Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleChange}
                      className="bg-white/10 border-white/20 text-white placeholder:text-white/40"
                      placeholder="your@email.com"
                      required
                    />
                  </div>
                </div>
                <div>
                  <Label htmlFor="subject" className="text-white/80">Subject</Label>
                  <Input
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    className="bg-white/10 border-white/20 text-white placeholder:text-white/40"
                    placeholder="What's this about?"
                    required
                  />
                </div>
                <div>
                  <Label htmlFor="message" className="text-white/80">Message</Label>
                  <Textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    className="bg-white/10 border-white/20 text-white placeholder:text-white/40 min-h-[120px]"
                    placeholder="Tell me about your project or opportunity..."
                    required
                  />
                </div>
                <Button
                  type="submit"
                  className="w-full bg-gradient-to-r from-purple-500 to-cyan-500 hover:from-purple-600 hover:to-cyan-600"
                >
                  <Send className="mr-2" size={16} />
                  Send Message
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}

export default ContactSection
