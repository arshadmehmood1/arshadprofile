import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Brain, Code, Server, Wrench, Layers } from "lucide-react"

export function SkillsSection() {
  const skillCategories = [
    {
      title: "AI & Machine Learning",
      skills: ["TensorFlow Lite", "PyTorch", "Edge AI", "OpenCV", "scikit-learn", "NLP & LLMs", "RunPod GPU Automation"],
      icon: Brain,
      color: "text-indigo-600 dark:text-indigo-400",
      iconBg: "bg-indigo-100/80 dark:bg-indigo-950/80 border-indigo-200/80 dark:border-indigo-800/60",
      gradient: "from-indigo-500/10 via-purple-500/5 to-transparent",
    },
    {
      title: "Frontend & Mobile",
      skills: ["ReactJS", "Next.js 16", "Android (Kotlin)", "Electron Desktop", "Tailwind CSS", "Vite", "TypeScript / ES6+"],
      icon: Code,
      color: "text-cyan-600 dark:text-cyan-400",
      iconBg: "bg-cyan-100/80 dark:bg-cyan-950/80 border-cyan-200/80 dark:border-cyan-800/60",
      gradient: "from-cyan-500/10 via-blue-500/5 to-transparent",
    },
    {
      title: "Backend & Cloud",
      skills: ["Node.js", "Express.js", "Python (Django/FastAPI)", "Supabase", "PostgreSQL", "SQLite", "MongoDB"],
      icon: Server,
      color: "text-emerald-600 dark:text-emerald-400",
      iconBg: "bg-emerald-100/80 dark:bg-emerald-950/80 border-emerald-200/80 dark:border-emerald-800/60",
      gradient: "from-emerald-500/10 via-teal-500/5 to-transparent",
    },
    {
      title: "Architecture & DevOps",
      skills: ["FFmpeg Pipelines", "WorkManager Sync", "REST APIs", "Git / GitHub CLI", "Docker", "Vercel Deployment"],
      icon: Wrench,
      color: "text-purple-600 dark:text-purple-400",
      iconBg: "bg-purple-100/80 dark:bg-purple-950/80 border-purple-200/80 dark:border-purple-800/60",
      gradient: "from-purple-500/10 via-pink-500/5 to-transparent",
    },
  ]

  return (
    <section id="skills" className="py-24 relative overflow-hidden bg-grid-pattern">
      <div className="container mx-auto px-4 sm:px-6 lg:px-12">
        <div className="max-w-5xl mx-auto">

          {/* Section Header */}
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full glass-card border-cyan-500/30 bg-cyan-500/10 mb-4">
              <Layers className="w-4 h-4 text-cyan-600 dark:text-cyan-400" />
              <span className="text-xs font-bold uppercase tracking-wider text-cyan-600 dark:text-cyan-400">Technical Expertise</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-foreground tracking-tight">
              Skills & <span className="gradient-text">Technologies</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {skillCategories.map((category) => {
              const Icon = category.icon
              return (
                <Card
                  key={category.title}
                  className={`glass-card glass-card-hover rounded-3xl border border-slate-200/80 dark:border-slate-800 overflow-hidden bg-gradient-to-br ${category.gradient}`}
                >
                  <CardHeader className="pb-4">
                    <CardTitle className="flex items-center gap-3 text-xl font-bold">
                      <div className={`p-2.5 rounded-xl border ${category.iconBg}`}>
                        <Icon className={`w-5 h-5 ${category.color}`} />
                      </div>
                      <span className="text-foreground">{category.title}</span>
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="flex flex-wrap gap-2">
                      {category.skills.map((skill) => (
                        <span
                          key={skill}
                          className="px-3.5 py-1.5 rounded-xl text-xs font-semibold bg-slate-100 dark:bg-slate-800/80 text-slate-800 dark:text-slate-200 border border-slate-200/80 dark:border-slate-700/60 hover:border-indigo-500/50 hover:bg-indigo-50 dark:hover:bg-indigo-950/40 hover:text-indigo-600 dark:hover:text-indigo-300 transition-all duration-300 shadow-sm cursor-default"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              )
            })}
          </div>

        </div>
      </div>
    </section>
  )
}
