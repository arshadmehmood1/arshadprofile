import { Card, CardContent } from "@/components/ui/card"
import { Code2, Cpu, Globe, Rocket, Sparkles, UserCheck } from "lucide-react"

export function AboutSection() {
  const stats = [
    { label: "GitHub Repositories", value: "9+", icon: Code2, color: "text-indigo-600 dark:text-indigo-400" },
    { label: "Specialization", value: "AI & Edge", icon: Cpu, color: "text-cyan-600 dark:text-cyan-400" },
    { label: "Core Stack", value: "Next.js / Python", icon: Globe, color: "text-emerald-600 dark:text-emerald-400" },
    { label: "Degree", value: "BS SE (Ongoing)", icon: Rocket, color: "text-purple-600 dark:text-purple-400" },
  ]

  const pillars = [
    {
      title: "Autonomous AI & Cloud Automation",
      description: "Building 15-stage serverless video generation engines, LLM scripting pipelines, and automated cloud workflows on RunPod GPU instances.",
      icon: Sparkles,
      color: "from-indigo-500/10 to-blue-500/5 dark:from-indigo-500/20 dark:to-blue-500/10 border-indigo-500/30",
      iconColor: "text-indigo-600 dark:text-indigo-400",
    },
    {
      title: "Edge Computer Vision & Mobile",
      description: "Developing native Android apps with on-device TensorFlow Lite models, background WorkManager sync, and real-time telemetry processing.",
      icon: Cpu,
      color: "from-cyan-500/10 to-teal-500/5 dark:from-cyan-500/20 dark:to-teal-500/10 border-cyan-500/30",
      iconColor: "text-cyan-600 dark:text-cyan-400",
    },
    {
      title: "Modern Full-Stack & Desktop Apps",
      description: "Architecting React/Next.js platforms with Supabase/PostgreSQL backends, as well as cross-platform Electron desktop POS systems.",
      icon: Globe,
      color: "from-emerald-500/10 to-teal-500/5 dark:from-emerald-500/20 dark:to-teal-500/10 border-emerald-500/30",
      iconColor: "text-emerald-600 dark:text-emerald-400",
    },
  ]

  return (
    <section id="about" className="py-24 relative overflow-hidden bg-dots-pattern">
      <div className="container mx-auto px-4 sm:px-6 lg:px-12">
        <div className="max-w-5xl mx-auto">

          {/* Section Header */}
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full glass-card border-indigo-500/30 bg-indigo-500/10 mb-4">
              <UserCheck className="w-4 h-4 text-indigo-600 dark:text-indigo-400" />
              <span className="text-xs font-bold uppercase tracking-wider text-indigo-600 dark:text-indigo-400">About Me</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-foreground tracking-tight">
              Engineering <span className="gradient-text">Intelligent Solutions</span>
            </h2>
          </div>

          {/* Stats Bar Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
            {stats.map((stat, i) => {
              const Icon = stat.icon
              return (
                <div
                  key={i}
                  className="glass-card glass-card-hover p-5 rounded-2xl border border-border text-center flex flex-col items-center justify-center"
                >
                  <div className="p-2.5 rounded-xl bg-secondary mb-2">
                    <Icon className={`w-5 h-5 ${stat.color}`} />
                  </div>
                  <span className="text-2xl sm:text-3xl font-extrabold text-foreground">{stat.value}</span>
                  <span className="text-xs font-medium text-muted-foreground mt-1">{stat.label}</span>
                </div>
              )
            })}
          </div>

          {/* Bio Overview Card */}
          <div className="glass-card glass-card-hover rounded-3xl p-8 mb-12 border border-border shadow-lg relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-indigo-500/10 rounded-full blur-[80px] pointer-events-none" />
            <p className="text-base sm:text-lg text-foreground/90 leading-relaxed relative z-10">
              Innovative and results-driven software engineer specializing in AI-powered language models, edge computer vision, cloud automation, and full-stack web & desktop architecture. Skilled at building intelligent, high-performance applications that seamlessly integrate React, Next.js, Node.js, Python, and on-device machine learning APIs. Passionate about delivering secure, scalable, and beautifully engineered software products.
            </p>
          </div>

          {/* Core Pillars */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {pillars.map((pillar, i) => {
              const Icon = pillar.icon
              return (
                <Card
                  key={i}
                  className={`glass-card glass-card-hover rounded-2xl border bg-gradient-to-b ${pillar.color} p-6 transition-all duration-300`}
                >
                  <CardContent className="p-0">
                    <div className="p-3 rounded-2xl bg-secondary/80 w-fit mb-4 border border-border">
                      <Icon className={`w-6 h-6 ${pillar.iconColor}`} />
                    </div>
                    <h3 className="text-lg font-bold text-foreground mb-2 leading-snug">{pillar.title}</h3>
                    <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">{pillar.description}</p>
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
