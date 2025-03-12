import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Github, ExternalLink } from "lucide-react"

interface ProjectCardProps {
  title: string
  description: string
  technologies: string[]
  points: string[]
  githubLink?: string
  demoLink?: string
}

export default function ProjectCard({
  title,
  description,
  technologies,
  points,
  githubLink,
  demoLink,
}: ProjectCardProps) {
  return (
    <Card className="bg-zinc-900 border-zinc-800 overflow-hidden hover:border-zinc-700 transition-all">
      <CardHeader>
        <CardTitle className="text-xl">{title}</CardTitle>
        <CardDescription>{description}</CardDescription>
        <div className="flex flex-wrap gap-2 mt-2">
          {technologies.map((tech) => (
            <Badge key={tech} variant="secondary" className="bg-zinc-800 hover:bg-zinc-700">
              {tech}
            </Badge>
          ))}
        </div>
      </CardHeader>
      <CardContent>
        <ul className="space-y-2 text-sm text-zinc-400">
          {points.map((point, index) => (
            <li key={index} className="flex items-start">
              <span className="mr-2">•</span>
              <span>{point}</span>
            </li>
          ))}
        </ul>
      </CardContent>
      <CardFooter className="flex gap-2">
        {githubLink && (
          <Button variant="outline" size="sm" className="border-zinc-700 hover:bg-zinc-800" asChild>
            <a href={githubLink} target="_blank" rel="noopener noreferrer">
              <Github className="mr-2 h-4 w-4" />
              GitHub
            </a>
          </Button>
        )}
        {demoLink && (
          <Button size="sm" className="bg-zinc-800 hover:bg-zinc-700" asChild>
            <a href={demoLink} target="_blank" rel="noopener noreferrer">
              <ExternalLink className="mr-2 h-4 w-4" />
              Live Demo
            </a>
          </Button>
        )}
      </CardFooter>
    </Card>
  )
}

