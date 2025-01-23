import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

const experienceData = [
  {
    position: "Solution Engineer",
    company: "EMATIC SOLUTIONS (THAILAND) COMPANY LIMITED",
    period: "March 2025 - Present",
    responsibilities: [
      "Analyzing Customer Needs: Collaborating with customers to understand their needs and challenges to propose suitable solutions",
      "Training and Supporting Customers: Providing support and training to customers in using the products or solutions",
      "Monitoring and Improving Solutions: Tracking the performance of solutions and making improvements based on needs or feedback",
      "Collaborating with Other Teams: Coordinating with marketing, development, and customer support teams to ensure smooth operations",
    ],
  },
  {
    position: "IT Support Technician",
    company: "ONE SIAMSOFT CO., LTD.",
    period: "October 2022 - Present",
    responsibilities: ["Provide technical support in services", "Develop the frontend of the website using Next.js"],
  },
  {
    position: "Solution Engineer internship",
    company: "EMATIC SOLUTIONS (THAILAND) COMPANY LIMITED",
    period: "July 2024 - March 2025",
    responsibilities: [
      "Analyzing Customer Needs: Collaborating with customers to understand their needs and challenges to propose suitable solutions",
      "Training and Supporting Customers: Providing support and training to customers in using the products or solutions",
      "Monitoring and Improving Solutions: Tracking solution performance and making improvements based on feedback",
      "Collaborating with Other Teams: Coordinating with marketing, development, and customer support teams",
    ],
  },
  {
    position: "IT Support internship",
    company: "AIRPORTELS INTERNATIONAL CO., LTD.",
    period: "April 2022 - July 2022",
    responsibilities: ["Develop a product claim website using PHP Laravel"],
  },
]

const Experience = () => {
  return (
    <section id="experience" className="py-16 animate-slideInFromLeft">
      <h2 className="text-3xl font-bold mb-8">Work Experience</h2>
      <div className="space-y-6">
        {experienceData.map((exp, index) => (
          <Card
            key={index}
            className="overflow-hidden transition-all duration-300 hover:shadow-lg hover:-translate-y-1"
          >
            <CardHeader>
              <CardTitle>{exp.position}</CardTitle>
              <p className="text-muted-foreground">{exp.company}</p>
              <p className="text-sm text-muted-foreground">{exp.period}</p>
            </CardHeader>
            <CardContent>
              <ul className="list-disc list-inside space-y-2">
                {exp.responsibilities.map((resp, respIndex) => (
                  <li key={respIndex} className="text-muted-foreground">
                    {resp}
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  )
}

export default Experience

