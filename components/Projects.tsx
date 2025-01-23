import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"

const projects = [
  {
    title: "Auth-Nextjs-MongoDB",
    description: "Login-Register with NextJS, MongoDB",
    technologies: ["Nextjs", "MongoDB"],
    link: "https://github.com/kkornkub/Login-Nextjs-MongoDB",
  },
  {
    title: "Detection-PHP-Python",
    description: "Website Detection with PHP, Python",
    technologies: ["Python", "PHP"],
    link: "https://github.com/kkornkub/check-detection-php-python",
  },
  {
    title: "IOT-RFID-PHP",
    description: "Website",
    technologies: ["HTML", "JS", "PHP", "bootstrap"],
    link: "https://github.com/kkornkub/IOT-RFID-PHP",
  },
  {
    title: "Mailchimp-api",
    description: "Website",
    technologies: ["PHP"],
    link: "https://github.com/kkornkub/mailchimp_api",
  },
  // Add more projects as needed
]

const Projects = () => {
  return (
    <section id="projects" className="py-16 animate-slideInFromLeft">
      <h2 className="text-3xl font-bold mb-8">My Projects</h2>
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {projects.map((project, index) => (
          <Card key={index} className="overflow-hidden transition-all duration-300 hover:shadow-lg hover:scale-105">
            <CardHeader>
              <CardTitle>{project.title}</CardTitle>
              <CardDescription>{project.description}</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex flex-wrap gap-2">
                {project.technologies.map((tech, techIndex) => (
                  <Badge key={techIndex} variant="secondary">
                    {tech}
                  </Badge>
                ))}
              </div>
            </CardContent>
            <CardFooter>
              <Button asChild>
                <a href={project.link} target="_blank" rel="noopener noreferrer">
                  View Project
                </a>
              </Button>
            </CardFooter>
          </Card>
        ))}
      </div>
    </section>
  )
}

export default Projects

