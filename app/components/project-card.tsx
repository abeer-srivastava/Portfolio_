import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Github, ExternalLink } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

interface ProjectCardProps {
  title: string
  description: string
  image: string
  link: string
  tags: string[]
  metrics?: string
}

export default function ProjectCard({ title, description, image, link, tags, metrics }: ProjectCardProps) {
  return (
    <Card className="group overflow-hidden border-2 border-slate-200 dark:border-slate-700 hover:border-blue-300 dark:hover:border-blue-600 transition-all duration-300 hover:shadow-[0_0_15px_rgba(59,130,246,0.15)] dark:hover:shadow-[0_0_15px_rgba(59,130,246,0.25)] bg-white/80 dark:bg-slate-800/80 backdrop-blur">
      <div className="relative aspect-video overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10"></div>
        <Image
          src={image || "/placeholder.svg"}
          alt={title}
          fill
          className="object-cover transition-transform duration-700 group-hover:scale-110"
        />
      </div>
      <CardContent className="p-6 relative z-20 bg-gradient-to-b from-transparent to-white/90 dark:to-slate-800/90 transition-all duration-300 group-hover:-translate-y-2">
        <h3 className="font-semibold text-xl mb-3 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-300 text-slate-900 dark:text-white">
          {title}
        </h3>
        <p className="text-sm text-slate-600 dark:text-slate-300 mb-4 leading-relaxed">{description}</p>
        {metrics && (
          <div className="mb-4">
            <Badge
              variant="secondary"
              className="text-xs bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200"
            >
              {metrics}
            </Badge>
          </div>
        )}
        <div className="flex flex-wrap gap-2">
          {tags.map((tag) => (
            <Badge
              key={tag}
              variant="outline"
              className="text-xs group-hover:bg-blue-50 dark:group-hover:bg-blue-900/50 group-hover:border-blue-300 dark:group-hover:border-blue-600 transition-colors duration-300 border-slate-300 dark:border-slate-600"
            >
              {tag}
            </Badge>
          ))}
        </div>
      </CardContent>
      <CardFooter className="p-6 pt-0 flex gap-3 opacity-70 group-hover:opacity-100 transition-opacity duration-300">
        <Link
          href={link}
          target="_blank"
          className="inline-flex items-center gap-2 text-sm hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-300 text-slate-600 dark:text-slate-300"
        >
          <Github className="h-4 w-4" />
          View Code
        </Link>
        <Link
          href="#"
          className="inline-flex items-center gap-2 text-sm hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-300 text-slate-600 dark:text-slate-300"
        >
          <ExternalLink className="h-4 w-4" />
          Live Demo
        </Link>
      </CardFooter>
    </Card>
  )
}
