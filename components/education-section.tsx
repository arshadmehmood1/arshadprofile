import { Card, CardContent } from "@/components/ui/card"

export function EducationSection() {
  const education = [
    {
      degree: "BS Software Engineering",
      status: "Ongoing",
      institution: "University of Management and Technology",
      period: "2022 – Present",
      current: true,
    },
    {
      degree: "Intermediate",
      institution: "Standard College, Toba Tek Singh",
      period: "Completed",
      current: false,
    },
    {
      degree: "Matriculation",
      institution: "Dar-e-Arqam",
      period: "Completed",
      current: false,
    },
  ]

  return (
    <section id="education" className="py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold text-center text-foreground mb-12">Education</h2>

          <div className="space-y-6">
            {education.map((edu, index) => (
              <Card
                key={index}
                className={`transition-all duration-200 hover:scale-105 ${
                  edu.current ? "border-primary shadow-lg" : ""
                }`}
              >
                <CardContent className="p-6">
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
                    <div className="flex-1">
                      <h3 className="text-xl font-semibold text-foreground mb-1">
                        {edu.degree}
                        {edu.status && <span className="ml-2 text-sm text-primary font-medium">({edu.status})</span>}
                      </h3>
                      <p className="text-muted-foreground">{edu.institution}</p>
                    </div>
                    <div className="mt-2 sm:mt-0">
                      <span className="text-sm text-muted-foreground bg-muted px-3 py-1 rounded-full">
                        {edu.period}
                      </span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
