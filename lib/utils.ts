import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

/**
 * Prefix for `/public` asset paths when the app is deployed with a `basePath`
 * (set `NEXT_PUBLIC_BASE_PATH` in env to match, e.g. `/my-repo`).
 *
 * In **development** (`next dev`), the prefix is skipped so assets load from the
 * site root (`http://localhost:3000/projects/...`) even if `NEXT_PUBLIC_BASE_PATH`
 * is present in `.env` from production.
 */
export function publicUrl(path: string) {
  const p = path.startsWith("/") ? path : `/${path}`

  if (process.env.NODE_ENV === "development") {
    return p
  }

  let base = process.env.NEXT_PUBLIC_BASE_PATH ?? ""
  if (base && !base.startsWith("/")) base = `/${base}`
  base = base.replace(/\/$/, "")
  return `${base}${p}`
}
