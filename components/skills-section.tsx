import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

export function SkillsSection() {
  const skillCategories = [
    {
      title: "AI & Machine Learning",
      skills: ["TensorFlow Lite", "PyTorch", "Edge AI", "OpenCV", "scikit-learn", "NLP & LLMs", "RunPod Automation"],
      icon: "🤖",
    },
    {
      title: "Frontend & Mobile",
      skills: ["ReactJS", "Vite", "Android (Kotlin)", "Electron Desktop", "Tailwind CSS", "Next.js", "JavaScript (ES6+)"],
      icon: "🎨",
    },
    {
      title: "Backend & Cloud",
      skills: ["Node.js", "Express.js", "Python (Django/FastAPI)", "Supabase", "SQLite", "PostgreSQL", "MongoDB"],
      icon: "⚙️",
    },
    {
      title: "Architecture & DevOps",
      skills: ["FFmpeg Video Pipelines", "WorkManager Sync", "REST APIs", "Git / GitHub CLI", "Docker", "Vercel"],
      icon: "🛠️",
    },
  ]

  return (
    <section id="skills" className="py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold text-center text-foreground mb-12">Skills & Technologies</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {skillCategories.map((category) => (
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
                        className="transition-colors duration-200 hover:bg-primary hover:text-primary-foreground font-medium text-sm py-1 px-3"
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

