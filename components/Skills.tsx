import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

const skillsData = {
  programming: {
    title: "Programming & Web Development",
    skills: [
      "ReactJS",
      "NextJS",
      "NodeJS",
      "PHP",
      "Laravel",
      "HTML",
      "CSS",
      "JavaScript",
      "C Programming",
      "Python",
      "WordPress",
      "Shopify",
    ],
  },
  database: {
    title: "Database",
    skills: ["MySQL", "PostgreSQL" ,"MongoDB"],
  },
  tools: {
    title: "Tools & Platforms",
    skills: ["Docker", "Postman", "Git", "Figma", "Jira", "Visual Studio Code", "Cloudflare", "Firebase" , "Trello"],
  },
}

const Skills = () => {
  return (
    <section id="skills" className="py-16 animate-slideInFromRight">
      <h2 className="text-3xl font-bold mb-8">Skills</h2>
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {Object.entries(skillsData).map(([key, category]) => (
          <Card key={key} className="overflow-hidden">
            <CardHeader>
              <CardTitle>{category.title}</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill) => (
                  <Badge key={skill} variant="secondary" className="text-sm">
                    {skill}
                  </Badge>
                ))}
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  )
}

export default Skills

