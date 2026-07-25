import { Card, CardContent } from "@/components/ui/card"
import { GraduationCap, Calendar, MapPin } from "lucide-react"

export function EducationSection() {
  const education = [
    {
      degree: "BS Software Engineering",
      status: "Ongoing",
      institution: "University of Management and Technology",
      period: "2022 – Present",
      location: "Lahore, Pakistan",
      current: true,
      highlights: "Focus on AI Architectures, Web Systems, Edge Computing, and Data Structures."
    },
    {
      degree: "Intermediate (FSc Pre-Engineering)",
      institution: "Standard College",
      period: "Completed",
      location: "Toba Tek Singh, Pakistan",
      current: false,
      highlights: "Strong foundational mathematics, physics, and computer logic."
    },
    {
      degree: "Matriculation (Science)",
      institution: "Dar-e-Arqam High School",
      period: "Completed",
      location: "Toba Tek Singh, Pakistan",
      current: false,
      highlights: "Graduated with High Academic Distinction."
    },
  ]

  return (
    <section id="education" className="py-24 relative overflow-hidden bg-grid-pattern">
      <div className="container mx-auto px-4 sm:px-6 lg:px-12">
        <div className="max-w-4xl mx-auto">

          {/* Section Header */}
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full glass-card border-purple-500/30 bg-purple-500/10 mb-4">
              <GraduationCap className="w-4 h-4 text-purple-600 dark:text-purple-400" />
              <span className="text-xs font-bold uppercase tracking-wider text-purple-600 dark:text-purple-400">Academic Background</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-foreground tracking-tight">
              Education & <span className="gradient-text">Qualifications</span>
            </h2>
          </div>

          {/* Timeline Layout */}
          <div className="relative border-l-2 border-indigo-500/30 ml-4 sm:ml-8 pl-6 sm:pl-10 space-y-10">
            {education.map((edu, index) => (
              <div key={index} className="relative group">

                {/* Glowing Node Indicator */}
                <div
                  className={`absolute -left-[31px] sm:-left-[47px] top-1.5 w-6 h-6 rounded-full border-4 ${edu.current
                      ? "bg-emerald-500 border-background shadow-lg shadow-emerald-500/40 animate-pulse"
                      : "bg-indigo-500 border-background shadow-md shadow-indigo-500/30"
                    }`}
                />

                <Card
                  className={`glass-card glass-card-hover rounded-3xl p-6 border transition-all duration-300 ${edu.current ? "border-indigo-500/50 shadow-xl shadow-indigo-500/10" : "border-border"
                    }`}
                >
                  <CardContent className="p-0">
                    <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-3">
                      <div>
                        <div className="flex items-center gap-3 mb-1">
                          <h3 className="text-xl font-bold text-foreground">
                            {edu.degree}
                          </h3>
                          {edu.status && (
                            <span className="px-2.5 py-0.5 rounded-full text-xs font-extrabold bg-emerald-500/15 text-emerald-700 dark:text-emerald-400 border border-emerald-500/30">
                              {edu.status}
                            </span>
                          )}
                        </div>
                        <p className="text-sm font-semibold text-indigo-600 dark:text-cyan-400">{edu.institution}</p>
                      </div>

                      <div className="flex items-center gap-3 text-xs font-medium text-muted-foreground bg-secondary px-3.5 py-1.5 rounded-full border border-border w-fit">
                        <Calendar className="w-3.5 h-3.5 text-indigo-600 dark:text-indigo-400" />
                        {edu.period}
                      </div>
                    </div>

                    <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
                      {edu.highlights}
                    </p>

                    <div className="mt-4 pt-3 border-t border-border/50 flex items-center gap-2 text-xs text-muted-foreground">
                      <MapPin className="w-3.5 h-3.5 text-indigo-600 dark:text-indigo-400" />
                      <span>{edu.location}</span>
                    </div>
                  </CardContent>
                </Card>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  )
}
