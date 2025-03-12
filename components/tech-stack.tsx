import Image from "next/image"

interface TechItem {
  name: string
  icon: string
  color: string
}

export default function TechStack() {
  const technologies: TechItem[] = [
    // Frontend
    { name: "TypeScript", icon: "/icons/typescript.svg", color: "bg-blue-900" },
    { name: "JavaScript", icon: "/icons/javascript.svg", color: "bg-yellow-700" },
    { name: "HTML", icon: "/icons/html.svg", color: "bg-orange-700" },
    { name: "CSS", icon: "/icons/css.svg", color: "bg-blue-700" },

    // Backend & Databases
    { name: "MongoDB", icon: "/icons/mongodb.svg", color: "bg-green-800" },
    { name: "Express", icon: "/icons/express.svg", color: "bg-gray-800" },
    { name: "React", icon: "/icons/react.svg", color: "bg-blue-800" },
    { name: "Node.js", icon: "/icons/nodejs.svg", color: "bg-green-700" },

    // DevOps & Tools
    { name: "Nginx", icon: "/icons/nginx.svg", color: "bg-green-900" },
    { name: "MySQL", icon: "/icons/mysql.svg", color: "bg-blue-900" },
    { name: "Django", icon: "/icons/django.svg", color: "bg-green-800" },
    { name: "Python", icon: "/icons/python.svg", color: "bg-blue-800" },

    // Languages & Tools
    { name: "C", icon: "/icons/c.svg", color: "bg-blue-900" },
    { name: "Postman", icon: "/icons/postman.svg", color: "bg-orange-700" },
    { name: "GitHub", icon: "/icons/github.svg", color: "bg-gray-800" },
    { name: "Git", icon: "/icons/git.svg", color: "bg-red-700" },

    // More Databases & Tools
    { name: "SQLite", icon: "/icons/sqlite.svg", color: "bg-blue-800" },
    { name: "PostgreSQL", icon: "/icons/postgresql.svg", color: "bg-blue-900" },
    { name: "Kafka", icon: "/icons/kafka.svg", color: "bg-gray-800" },
    { name: "C++", icon: "/icons/cpp.svg", color: "bg-blue-800" },

    // Design Tools
    { name: "Photoshop", icon: "/icons/photoshop.svg", color: "bg-blue-900" },
    { name: "InDesign", icon: "/icons/indesign.svg", color: "bg-pink-900" },
    { name: "Figma", icon: "/icons/figma.svg", color: "bg-purple-900" },
    { name: "Tailwind CSS", icon: "/icons/tailwind.svg", color: "bg-blue-800" },
  ]

  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
      {technologies.map((tech) => (
        <div
          key={tech.name}
          className="flex flex-col items-center p-4 bg-zinc-900 rounded-lg hover:bg-zinc-800 transition-colors"
        >
          <div className="relative w-12 h-12 mb-2">
            <Image
              src={tech.icon || "/placeholder.svg"}
              alt={tech.name}
              width={48}
              height={48}
              className="object-contain"
            />
          </div>
          <span className="text-sm text-center">{tech.name}</span>
        </div>
      ))}
    </div>
  )
}

