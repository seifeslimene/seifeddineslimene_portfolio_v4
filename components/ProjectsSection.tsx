"use client"

import { useState } from "react"
import Image from "next/image"
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "./ui/card"
import { Badge } from "./ui/badge"
import { Button } from "./ui/button"
import { Github, ExternalLink, Star, GitFork, Images } from "lucide-react"
import { ProjectGalleryLightbox } from "./ProjectGalleryLightbox"
import { publicUrl } from "@/lib/utils"

type Project = {
  title: string
  description: string
  technologies: string[]
  metrics: Record<string, string>
  github: string
  live: string
  stars: number
  forks: number
  /** First image is the card cover; all images appear in the lightbox. */
  images: string[]
}

const projects: Project[] = [
  {
    title: "Devex Learning Platform",
    description:
      "Collaborative education platform with course upload, authentication, and custom dashboards for students.",
    technologies: ["React", "Node.js", "PostgreSQL", "TailwindCSS", "JWT"],
    metrics: { users: "200+", features: "Dashboard, Upload, Auth", status: "In Progress" },
    github: "https://github.com/seifeslimene/devex",
    live: "#",
    stars: 18,
    forks: 6,
    images: ["/projects/devex-1.svg", "/projects/devex-2.svg", "/projects/devex-3.svg"],
  },
  {
    title: "Tarjum Translator App",
    description:
      "Cross-platform translation app with real-time language detection and offline support, built with friends.",
    technologies: ["React Native", "Expo", "TypeScript", "Google Translate API"],
    metrics: { downloads: "150+", languages: "100+", mode: "Offline/Online" },
    github: "https://github.com/seifeslimene/tarjum",
    live: "#",
    stars: 12,
    forks: 3,
    images: ["/projects/tarjum-1.svg", "/projects/tarjum-2.svg", "/projects/tarjum-3.svg"],
  },
  {
    title: "RIS – Radiology Information System",
    description:
      "Fullstack healthcare system for managing patient radiology records, appointments, and reports locally.",
    technologies: ["Vite", "React", "SQLite", "Node.js", "Express"],
    metrics: { clinics: "3", features: "Admin Panel, Secure Login", status: "Prototype" },
    github: "https://github.com/seifeslimene/ris-app",
    live: "#",
    stars: 9,
    forks: 2,
    images: ["/projects/ris-1.svg", "/projects/ris-2.svg", "/projects/ris-3.svg"],
  },
]

function ProjectsSection() {
  const [gallery, setGallery] = useState<{ title: string; images: string[] } | null>(null)

  return (
    <section id="projects" className="py-20 px-4">
      <ProjectGalleryLightbox
        open={gallery !== null}
        onOpenChange={(open) => {
          if (!open) setGallery(null)
        }}
        title={gallery?.title ?? ""}
        images={gallery?.images ?? []}
      />

      <div className="container mx-auto max-w-6xl">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
          <span className="bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">
            Featured Projects
          </span>
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {projects.map((project) => {
            const coverSrc = project.images[0] ?? "/placeholder.svg"
            const galleryImages = project.images.map(publicUrl)

            return (
              <Card
                key={project.title}
                className="flex h-full min-h-0 flex-col overflow-hidden rounded-xl border-white/10 bg-white/5 backdrop-blur-sm transition-colors duration-300 hover:bg-white/10 group min-w-0"
              >
                <CardHeader className="flex flex-shrink-0 flex-col gap-4 space-y-0 p-5 sm:p-6 pb-4">
                  <div className="flex min-h-[3.25rem] items-start justify-between gap-3">
                    <CardTitle className="line-clamp-2 min-h-[3.25rem] flex-1 text-left text-lg font-semibold leading-snug tracking-tight text-white transition-colors group-hover:text-purple-400 sm:text-xl">
                      {project.title}
                    </CardTitle>
                    <div className="flex shrink-0 gap-1">
                      <Button
                        size="sm"
                        variant="ghost"
                        className="h-9 w-9 shrink-0 p-0 text-white/70 hover:bg-white/10 hover:text-white"
                        onClick={() => window.open(project.github, "_blank")}
                        aria-label="GitHub repository"
                      >
                        <Github size={18} />
                      </Button>
                      {project.live !== "#" && (
                        <Button
                          size="sm"
                          variant="ghost"
                          className="h-9 w-9 shrink-0 p-0 text-white/70 hover:bg-white/10 hover:text-white"
                          onClick={() => window.open(project.live, "_blank")}
                          aria-label="Live demo"
                        >
                          <ExternalLink size={18} />
                        </Button>
                      )}
                    </div>
                  </div>
                  <CardDescription className="line-clamp-4 min-h-[6rem] text-left text-sm leading-relaxed text-white/70">
                    {project.description}
                  </CardDescription>

                  <div className="relative aspect-video w-full shrink-0 overflow-hidden rounded-lg bg-black/20 ring-1 ring-white/10">
                    <Image
                      src={publicUrl(coverSrc)}
                      alt={`${project.title} preview`}
                      width={800}
                      height={450}
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 400px"
                      className="h-full w-full object-cover transition-transform duration-300 ease-out group-hover:scale-[1.02]"
                      unoptimized
                    />
                    <button
                      type="button"
                      className="absolute inset-0 z-20 cursor-pointer border-0 bg-transparent p-0 outline-none ring-offset-2 ring-offset-zinc-950 focus-visible:ring-2 focus-visible:ring-cyan-400/70"
                      onClick={() =>
                        setGallery({
                          title: project.title,
                          images: galleryImages,
                        })
                      }
                      aria-label={`Open ${project.title} photo gallery`}
                    />
                    <span className="pointer-events-none absolute inset-0 z-10 bg-gradient-to-t from-black/75 via-black/15 to-transparent" />
                    <span className="pointer-events-none absolute inset-x-3 bottom-3 z-10 flex items-center justify-between gap-2">
                      <span className="inline-flex items-center gap-1.5 rounded-full bg-black/50 px-2.5 py-1 text-xs font-medium text-white backdrop-blur-sm sm:text-sm">
                        <Images className="h-3.5 w-3.5 shrink-0 text-cyan-300 sm:h-4 sm:w-4" aria-hidden />
                        {project.images.length} photos
                      </span>
                      <span className="rounded-full bg-black/50 px-2.5 py-1 text-[11px] font-medium text-white/95 backdrop-blur-sm sm:text-xs">
                        View gallery
                      </span>
                    </span>
                  </div>
                </CardHeader>

                <CardContent className="flex flex-1 flex-col gap-4 p-5 pt-0 sm:p-6 sm:pt-0">
                  <div className="flex min-h-[5rem] flex-wrap content-start gap-2">
                    {project.technologies.map((tech) => (
                      <Badge
                        key={tech}
                        variant="secondary"
                        className="border border-cyan-500/25 bg-cyan-500/15 px-2 py-0.5 text-[11px] font-medium leading-tight text-cyan-200 sm:text-xs"
                      >
                        {tech}
                      </Badge>
                    ))}
                  </div>

                  <div className="grid grid-cols-3 gap-2">
                    {Object.entries(project.metrics).map(([key, value]) => (
                      <div
                        key={key}
                        className="flex min-h-[4.25rem] flex-col items-center justify-center rounded-lg bg-white/[0.06] px-1.5 py-2.5 ring-1 ring-white/[0.06]"
                      >
                        <div className="line-clamp-2 min-h-[2.25rem] max-w-[95%] text-center text-sm font-semibold tabular-nums leading-tight text-white sm:text-[15px]">
                          {value}
                        </div>
                        <div className="mt-1 line-clamp-2 text-center text-[10px] font-medium capitalize leading-tight text-white/55 sm:text-[11px]">
                          {key.replace("_", " ")}
                        </div>
                      </div>
                    ))}
                  </div>

                  <div className="mt-auto flex items-center border-t border-white/10 pt-4 text-sm tabular-nums text-white/55">
                    <div className="flex items-center gap-5">
                      <span className="inline-flex items-center gap-1.5">
                        <Star size={15} className="text-amber-400/90" aria-hidden />
                        {project.stars}
                      </span>
                      <span className="inline-flex items-center gap-1.5">
                        <GitFork size={15} className="text-white/45" aria-hidden />
                        {project.forks}
                      </span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            )
          })}
        </div>

        <div className="text-center mt-12">
          <Button
            variant="outline"
            className="border-white/20 text-white hover:bg-white/10 bg-transparent"
            onClick={() => window.open("https://github.com/seifeslimene", "_blank")}
          >
            <Github className="mr-2" size={16} />
            View All Projects on GitHub
          </Button>
        </div>
      </div>
    </section>
  )
}

export default ProjectsSection
