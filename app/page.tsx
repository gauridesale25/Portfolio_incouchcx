import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Github, Linkedin, Mail } from "lucide-react"
import TechStack from "@/components/tech-stack"
import ProjectCard from "@/components/project-card"
import ExperienceCard from "@/components/experience-card"

export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white">
      <div className="container mx-auto px-4 py-8 max-w-5xl">
        {/* Hero Section */}
        <section className="grid md:grid-cols-[1fr_2fr] gap-8 mb-16 pt-8">
          <div className="flex flex-col items-center gap-4">
            <div className="relative w-48 h-48 overflow-hidden rounded-lg border-2 border-zinc-700">
              <Image src="/profile-dragon.png" alt="Gauri Desale" fill className="object-cover" priority />
            </div>
            <div className="w-full p-4 bg-zinc-900 rounded-lg">
              <h3 className="text-center font-medium mb-2">Connect with me</h3>
              <div className="flex justify-center gap-2">
                <Button
                  variant="outline"
                  size="icon"
                  className="rounded-full bg-zinc-800 border-zinc-700 hover:bg-zinc-700"
                >
                  <Linkedin className="h-5 w-5" />
                  <span className="sr-only">LinkedIn</span>
                </Button>
                <Button
                  variant="outline"
                  size="icon"
                  className="rounded-full bg-zinc-800 border-zinc-700 hover:bg-zinc-700"
                >
                  <Mail className="h-5 w-5" />
                  <span className="sr-only">Email</span>
                </Button>
                <Button
                  variant="outline"
                  size="icon"
                  className="rounded-full bg-zinc-800 border-zinc-700 hover:bg-zinc-700"
                >
                  <Github className="h-5 w-5" />
                  <span className="sr-only">GitHub</span>
                </Button>
              </div>
            </div>
          </div>

          <div className="flex flex-col justify-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Hey! I'm Gauri Desale</h1>
            <p className="text-zinc-400 mb-6">
              I'm passionate about technology and love diving deep behind the scenes. I love learning more about the
              systems that make everything run.
            </p>
            <p className="text-zinc-400 mb-6">
              I build web applications with Django and the MERN stack. Always eager to explore how technology works
              behind the scenes.
            </p>
            <p className="text-zinc-400 mb-6">
              When it comes to interfaces I like the especially creating simple and user friendly web applications.
            </p>
          </div>
        </section>

        {/* Technologies and Tools */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold mb-8 text-center">Technologies and Tools</h2>
          <TechStack />
        </section>

        {/* Projects Section */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold mb-8 text-center">Projects</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <ProjectCard
              title="Competitive coding platform (PSB-Credenz)"
              description="Developed an online competitive coding platform using Django and React"
              technologies={["Django", "SQLite", "React"]}
              points={[
                "Designed and built a dynamic web application featuring a gamified leaderboard for the competitive coding event",
                "Implemented secure authentication and authorization for participants",
                "Created a real-time judging system for evaluating code submissions",
              ]}
              githubLink="https://github.com/username/psb-credenz"
              demoLink="https://psb-credenz.vercel.app"
            />

            <ProjectCard
              title="E-commerce Platform"
              description="Full-featured online shopping platform with payment integration"
              technologies={["Next.js", "TypeScript", "MongoDB", "Stripe"]}
              points={[
                "Built a responsive e-commerce site with product catalog and search functionality",
                "Implemented secure payment processing with Stripe integration",
                "Created an admin dashboard for inventory and order management",
              ]}
              githubLink="https://github.com/username/ecommerce"
              demoLink="https://ecommerce-demo.vercel.app"
            />

            <ProjectCard
              title="Task Management System"
              description="Collaborative project management tool for teams"
              technologies={["React", "Node.js", "Express", "MongoDB"]}
              points={[
                "Developed a Kanban-style task management system with drag-and-drop functionality",
                "Implemented real-time updates using Socket.io",
                "Created user authentication and team collaboration features",
              ]}
              githubLink="https://github.com/username/task-manager"
            />

            <ProjectCard
              title="Personal Finance Tracker"
              description="Application to track expenses and visualize spending habits"
              technologies={["Django", "PostgreSQL", "Chart.js", "Tailwind CSS"]}
              points={[
                "Built a dashboard with interactive charts for expense visualization",
                "Implemented budget planning and goal tracking features",
                "Created data export functionality for financial reporting",
              ]}
              githubLink="https://github.com/username/finance-tracker"
              demoLink="https://finance-tracker-demo.vercel.app"
            />
          </div>
        </section>

        {/* Experience Section */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold mb-8 text-center">Experience</h2>

          <Tabs defaultValue="tech" className="w-full">
            <TabsList className="grid w-full grid-cols-2 mb-8">
              <TabsTrigger value="tech">Technical Experience</TabsTrigger>
              <TabsTrigger value="nontech">Non-Technical Experience</TabsTrigger>
            </TabsList>

            <TabsContent value="tech" className="space-y-6">
              <ExperienceCard
                title="Full Stack Developer"
                company="Tech Innovations Inc."
                period="Jan 2022 - Present"
                description="Working on enterprise web applications using modern technologies"
                responsibilities={[
                  "Developed and maintained RESTful APIs using Node.js and Express",
                  "Built responsive front-end interfaces with React and TypeScript",
                  "Implemented CI/CD pipelines for automated testing and deployment",
                  "Collaborated with cross-functional teams to deliver features on schedule",
                ]}
                technologies={["React", "TypeScript", "Node.js", "MongoDB", "Docker"]}
              />

              <ExperienceCard
                title="Web Developer Intern"
                company="Digital Solutions Ltd."
                period="May 2021 - Dec 2021"
                description="Assisted in the development of client websites and web applications"
                responsibilities={[
                  "Contributed to front-end development using HTML, CSS, and JavaScript",
                  "Assisted in building and maintaining WordPress websites",
                  "Participated in code reviews and team meetings",
                  "Learned and applied best practices for web development",
                ]}
                technologies={["HTML", "CSS", "JavaScript", "WordPress", "PHP"]}
              />
            </TabsContent>

            <TabsContent value="nontech" className="space-y-6">
              <ExperienceCard
                title="Event Coordinator"
                company="University Tech Club"
                period="Aug 2020 - Apr 2021"
                description="Organized technical workshops and hackathons for university students"
                responsibilities={[
                  "Coordinated and managed technical workshops with 50+ attendees",
                  "Led a team of 5 volunteers to organize the annual hackathon",
                  "Secured sponsorships from local tech companies",
                  "Created promotional materials and managed social media campaigns",
                ]}
              />

              <ExperienceCard
                title="Volunteer Teacher"
                company="Code for Community"
                period="Jun 2019 - Jul 2020"
                description="Taught basic programming concepts to underprivileged children"
                responsibilities={[
                  "Developed curriculum for teaching basic programming concepts",
                  "Conducted weekly classes for children aged 10-14",
                  "Created interactive learning materials and exercises",
                  "Mentored students on small coding projects",
                ]}
              />
            </TabsContent>
          </Tabs>
        </section>

        {/* Contact Section */}
        <section className="mb-16">
          <div className="bg-zinc-900 rounded-lg p-8 text-center">
            <h2 className="text-2xl font-bold mb-4">Let's Work Together</h2>
            <p className="text-zinc-400 mb-6 max-w-2xl mx-auto">
              I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision.
            </p>
            <div className="flex justify-center gap-4">
              <Button className="bg-zinc-800 hover:bg-zinc-700">
                <Mail className="mr-2 h-4 w-4" />
                Contact Me
              </Button>
              <Button variant="outline" className="border-zinc-700 hover:bg-zinc-700">
                <Github className="mr-2 h-4 w-4" />
                View GitHub
              </Button>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="text-center text-zinc-500 py-6">
          <p>© {new Date().getFullYear()} Gauri Desale. All rights reserved.</p>
        </footer>
      </div>
    </main>
  )
}

