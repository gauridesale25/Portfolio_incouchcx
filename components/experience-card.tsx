import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

interface ExperienceCardProps {
  title: string
  company: string
  period: string
  description: string
  responsibilities: string[]
  technologies?: string[]
}

export default function ExperienceCard({
  title,
  company,
  period,
  description,
  responsibilities,
  technologies,
}: ExperienceCardProps) {
  return (
    <Card className="bg-zinc-900 border-zinc-800 overflow-hidden hover:border-zinc-700 transition-all">
      <CardHeader>
        <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-2">
          <div>
            <CardTitle className="text-xl">{title}</CardTitle>
            <CardDescription className="text-lg font-medium text-zinc-400">{company}</CardDescription>
          </div>
          <Badge variant="outline" className="border-zinc-700 text-zinc-400 self-start">
            {period}
          </Badge>
        </div>
      </CardHeader>
      <CardContent className="space-y-4">
        <p className="text-zinc-400">{description}</p>
        <div>
          <h4 className="font-medium mb-2">Key Responsibilities:</h4>
          <ul className="space-y-2 text-sm text-zinc-400">
            {responsibilities.map((responsibility, index) => (
              <li key={index} className="flex items-start">
                <span className="mr-2">•</span>
                <span>{responsibility}</span>
              </li>
            ))}
          </ul>
        </div>
        {technologies && technologies.length > 0 && (
          <div>
            <h4 className="font-medium mb-2">Technologies Used:</h4>
            <div className="flex flex-wrap gap-2">
              {technologies.map((tech) => (
                <Badge key={tech} variant="secondary" className="bg-zinc-800 hover:bg-zinc-700">
                  {tech}
                </Badge>
              ))}
            </div>
          </div>
        )}
      </CardContent>
    </Card>
  )
}

