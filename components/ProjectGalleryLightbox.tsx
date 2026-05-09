"use client"

import { useCallback, useEffect, useState } from "react"
import Image from "next/image"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { Dialog, DialogContent, DialogTitle } from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

type ProjectGalleryLightboxProps = {
  open: boolean
  onOpenChange: (open: boolean) => void
  title: string
  images: string[]
  initialIndex?: number
}

export function ProjectGalleryLightbox({
  open,
  onOpenChange,
  title,
  images,
  initialIndex = 0,
}: ProjectGalleryLightboxProps) {
  const [index, setIndex] = useState(initialIndex)

  useEffect(() => {
    if (open) setIndex(Math.min(initialIndex, Math.max(0, images.length - 1)))
  }, [open, initialIndex, images.length])

  const goPrev = useCallback(() => {
    setIndex((i) => (i <= 0 ? images.length - 1 : i - 1))
  }, [images.length])

  const goNext = useCallback(() => {
    setIndex((i) => (i >= images.length - 1 ? 0 : i + 1))
  }, [images.length])

  useEffect(() => {
    if (!open || images.length === 0) return
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "ArrowLeft") {
        e.preventDefault()
        goPrev()
      } else if (e.key === "ArrowRight") {
        e.preventDefault()
        goNext()
      }
    }
    window.addEventListener("keydown", onKey)
    return () => window.removeEventListener("keydown", onKey)
  }, [open, images.length, goPrev, goNext])

  const current = images[index]

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent
        className={cn(
          "max-h-[92vh] w-[min(100vw-1.5rem,56rem)] max-w-[calc(100vw-1.5rem)] translate-x-[-50%] translate-y-[-50%]",
          "gap-0 border-white/10 bg-zinc-950/95 p-3 shadow-2xl sm:rounded-xl"
        )}
        onOpenAutoFocus={(e) => e.preventDefault()}
      >
        <DialogTitle className="sr-only">{title} — photo gallery</DialogTitle>
        {images.length > 0 && current ? (
          <div className="flex flex-col gap-3">
            <div className="relative flex min-h-[200px] items-center justify-center rounded-lg bg-black/40">
              {images.length > 1 && (
                <Button
                  type="button"
                  variant="ghost"
                  size="icon"
                  className="absolute left-1 z-10 h-10 w-10 rounded-full border border-white/15 bg-black/50 text-white hover:bg-white/10"
                  onClick={goPrev}
                  aria-label="Previous image"
                >
                  <ChevronLeft className="h-6 w-6" />
                </Button>
              )}
              <div className="flex w-full max-h-[min(70vh,720px)] items-center justify-center px-2 py-4">
                <Image
                  src={current}
                  alt={`${title} screenshot ${index + 1} of ${images.length}`}
                  width={800}
                  height={450}
                  className="h-auto max-h-[min(65vh,680px)] w-full max-w-full object-contain"
                  unoptimized
                  priority={open}
                />
              </div>
              {images.length > 1 && (
                <Button
                  type="button"
                  variant="ghost"
                  size="icon"
                  className="absolute right-1 z-10 h-10 w-10 rounded-full border border-white/15 bg-black/50 text-white hover:bg-white/10"
                  onClick={goNext}
                  aria-label="Next image"
                >
                  <ChevronRight className="h-6 w-6" />
                </Button>
              )}
            </div>

            {images.length > 1 && (
              <div
                className="flex gap-2 overflow-x-auto pb-1 pt-1 scrollbar-thin"
                role="tablist"
                aria-label="Gallery thumbnails"
              >
                {images.map((src, i) => (
                  <button
                    key={`${src}-${i}`}
                    type="button"
                    role="tab"
                    aria-selected={i === index}
                    aria-label={`Image ${i + 1}`}
                    className={cn(
                      "relative h-14 w-24 shrink-0 overflow-hidden rounded-md border-2 transition-all",
                      i === index
                        ? "border-cyan-400 ring-2 ring-cyan-400/30"
                        : "border-transparent opacity-70 hover:opacity-100"
                    )}
                    onClick={() => setIndex(i)}
                  >
                    <Image
                      src={src}
                      alt=""
                      width={96}
                      height={56}
                      className="h-full w-full object-cover"
                      unoptimized
                    />
                  </button>
                ))}
              </div>
            )}

            <p className="text-center text-xs text-white/50">
              {index + 1} / {images.length}
              {images.length > 1 ? " · Arrow keys to navigate" : ""}
            </p>
          </div>
        ) : null}
      </DialogContent>
    </Dialog>
  )
}
