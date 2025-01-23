import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

const educationData = [
  {
    degree: "Bachelor of Science in Technical Education",
    school: "King Mongkut's University of Technology North Bangkok",
    year: "2020-Present",
    details: "Major in Computer Education (GPA 2.60)",
  },
  {
    degree: "Certificate in Business Computer",
    school: "Nakhonsawan Vocational College",
    year: "2017-2020",
  },
  {
    degree: "Junior High School (Grade 7-9)",
    school: "Thepsalaprachasan School",
    year: "2015-2017",
  },
]

const Education = () => {
  return (
    <section id="education" className="py-16 animate-slideInFromRight">
      <h2 className="text-3xl font-bold mb-8">Education</h2>
      <div className="space-y-6">
        {educationData.map((edu, index) => (
          <Card
            key={index}
            className="overflow-hidden transition-all duration-300 hover:shadow-lg hover:-translate-y-1"
          >
            <CardHeader>
              <CardTitle>{edu.degree}</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">{edu.school}</p>
              <p className="text-sm text-muted-foreground">{edu.year}</p>
              {edu.details && <p className="text-sm text-muted-foreground mt-1">{edu.details}</p>}
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  )
}

export default Education

