import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

export function SkillsSection() {
  const skillCategories = [
    {
      title: "Frontend",
      skills: ["ReactJS", "Vite", "HTML", "CSS", "Tailwind CSS", "JavaScript (ES6+)"],
      icon: "🎨",
    },
    {
      title: "Backend",
      skills: ["Node.js", "Express.js", "MongoDB", "PostgreSQL"],
      icon: "⚙️",
    },
    {
      title: "AI Development",
      skills: ["OpenAI API", "LangChain", "Chatbot Architecture", "NLP"],
      icon: "🤖",
    },
    {
      title: "Other Skills",
      skills: [
        "REST APIs",
        "Authentication (JWT)",
        "Payment Integration",
        "File Handling",
        "Deployment (Vercel, Render)",
      ],
      icon: "🛠️",
    },
  ]

  return (
    <section id="skills" className="py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold text-center text-foreground mb-12">Skills & Technologies</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {skillCategories.map((category, index) => (
              <Card key={category.title} className="transition-transform duration-200 hover:scale-105">
                <CardHeader>
                  <CardTitle className="flex items-center gap-3 text-xl">
                    <span className="text-2xl">{category.icon}</span>
                    {category.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {category.skills.map((skill) => (
                      <Badge
                        key={skill}
                        variant="secondary"
                        className="transition-colors duration-200 hover:bg-primary hover:text-primary-foreground"
                      >
                        {skill}
                      </Badge>
                    ))}
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
