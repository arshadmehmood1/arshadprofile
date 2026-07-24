"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Github, ExternalLink, Sparkles, Cpu, Globe, BookOpen, Sun, Pill, Bike, Bot, Brain } from "lucide-react"

export function ProjectsSection() {
  const projects = [
    {
      title: "RunPod Full YouTube Automation",
      subtitle: "Autonomous Cloud Video Generation Pipeline",
      description: "A 15-stage automated video generation engine operating on remote RunPod cloud instances. Integrates LLM scripting, voice synthesis, scene building, upscaling, and FFmpeg multiplexing.",
      category: "Cloud & Automation",
      tech: ["Python", "RunPod Cloud GPU", "FFmpeg", "Voice AI", "LLMs"],
      github: "https://github.com/arshadmehmood1/youtube-automation-runpod",
      icon: Sparkles,
      featured: true
    },
    {
      title: "Driver Monitoring System (DMS)",
      subtitle: "Edge AI Native Android Application",
      description: "Production-grade native Android app for road safety monitoring driver attentiveness using on-device TensorFlow Lite, background WorkManager sync, and Firebase Firestore.",
      category: "Mobile & Edge AI",
      tech: ["Android (Kotlin)", "TensorFlow Lite", "Firebase", "WorkManager"],
      github: "https://github.com/arshadmehmood1/driver-monitoring-system-android",
      icon: Cpu,
      featured: true
    },
    {
      title: "SafeRoute Web",
      subtitle: "Interactive Safety Routing Platform",
      description: "Modern web application for route planning and safety analysis built with a clean React architecture and Supabase Backend-as-a-Service for row-level security and authentication.",
      category: "Full-Stack Web",
      tech: ["React", "Vite", "Supabase", "Vanilla CSS"],
      github: "https://github.com/arshadmehmood1/saferoute-web",
      icon: Globe,
      featured: false
    },
    {
      title: "StudySuite Platform",
      subtitle: "Scalable EdTech Architecture",
      description: "Comprehensive EdTech platform built with clean client-server architecture separation, handling educational resource management and market intelligence workflows.",
      category: "Full-Stack Web",
      tech: ["Full Stack", "React", "Node.js", "REST API"],
      github: "https://github.com/arshadmehmood1/studysuite-platform",
      icon: BookOpen,
      featured: false
    },
    {
      title: "Weather Outfit Predictor ML",
      subtitle: "Real-time Machine Learning API & Web Service",
      description: "Predictive ML app connecting live meteorological APIs with trained scikit-learn models to deliver personalized real-time clothing recommendations.",
      category: "Data Science & ML",
      tech: ["Python", "scikit-learn", "Weather API", "Web UI"],
      github: "https://github.com/arshadmehmood1/weather-outfit-predictor-ml",
      icon: Sun,
      featured: false
    },
    {
      title: "AI Medication Side Effects Analysis",
      subtitle: "Clinical Data Science & Web App",
      description: "End-to-end clinical data science project featuring exploratory data analysis in Jupyter Notebooks, predictive model APIs, and an interactive side-effect lookup portal.",
      category: "Data Science & ML",
      tech: ["Python", "Pandas", "scikit-learn", "Jupyter", "REST API"],
      github: "https://github.com/arshadmehmood1/ai-medication-side-effects-analysis",
      icon: Pill,
      featured: false
    },
    {
      title: "Bike POS (Point of Sale)",
      subtitle: "Cross-Platform Desktop Application",
      description: "Desktop POS system designed for bike spare parts inventory management. Features local SQLite database integration, secure IPC bridge, and PDF receipt printing.",
      category: "Desktop Software",
      tech: ["Electron", "React", "Vite", "SQLite"],
      github: "https://github.com/arshadmehmood1/bike-shop-pos-electron",
      icon: Bike,
      featured: false
    },
    {
      title: "AI Complaint & Feedback Bot",
      subtitle: "NLP Customer Intelligence Bot",
      description: "AI-driven customer feedback analyzer that classifies complaint urgency, parses intent, and automates support triage routing.",
      category: "AI & NLP",
      tech: ["Python", "AI / NLP", "Django", "React"],
      github: "https://github.com/arshadmehmood1/ai_analyst_bot",
      icon: Bot,
      featured: false
    },
    {
      title: "Decision Memory Platform",
      subtitle: "Contextual Decision Management",
      description: "Full-stack decision tracking tool designed to log, categorize, and analyze technical and strategic decisions with historical context retrieval.",
      category: "Full-Stack Web",
      tech: ["React", "Node.js", "Express", "PostgreSQL"],
      github: "https://github.com/arshadmehmood1/Decision-Memory",
      icon: Brain,
      featured: false
    }
  ]

  return (
    <section id="projects" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">Featured GitHub Projects</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              A collection of open-source applications, AI pipelines, edge models, and full-stack web solutions.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((project) => {
              const Icon = project.icon
              return (
                <Card 
                  key={project.title} 
                  className={`flex flex-col justify-between glass-card glass-card-hover rounded-2xl p-2 transition-all duration-300 ${
                    project.featured ? "border-primary/50 shadow-lg shadow-indigo-500/10" : ""
                  }`}
                >
                  <CardHeader>
                    <div className="flex items-center justify-between mb-3">
                      <span className="px-3 py-1 rounded-full text-xs font-semibold bg-primary/10 text-primary border border-primary/20">
                        {project.category}
                      </span>
                      <div className="p-2 rounded-xl bg-primary/10 text-primary">
                        <Icon className="h-5 w-5" />
                      </div>
                    </div>
                    <CardTitle className="text-xl font-bold text-foreground leading-tight">
                      {project.title}
                    </CardTitle>
                    <CardDescription className="text-sm font-medium text-muted-foreground mt-1">
                      {project.subtitle}
                    </CardDescription>
                  </CardHeader>

                  <CardContent className="flex-1 flex flex-col justify-between">
                    <p className="text-sm text-muted-foreground leading-relaxed mb-6">
                      {project.description}
                    </p>

                    <div>
                      <div className="flex flex-wrap gap-1.5 mb-6">
                        {project.tech.map((t) => (
                          <span 
                            key={t} 
                            className="px-2.5 py-0.5 bg-secondary/80 text-foreground/90 rounded-md text-xs font-medium border border-border/40"
                          >
                            {t}
                          </span>
                        ))}
                      </div>

                      <Button
                        onClick={() => window.open(project.github, "_blank")}
                        variant="default"
                        size="sm"
                        className="w-full font-semibold rounded-xl bg-primary hover:bg-primary/90 text-primary-foreground shadow-md transition-all duration-300 hover:scale-[1.02]"
                      >
                        <Github className="mr-2 h-4 w-4" />
                        View Repository
                      </Button>
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

