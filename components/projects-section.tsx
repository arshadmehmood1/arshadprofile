"use client"

import { useState } from "react"
import Image from "next/image"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Github, Sparkles, Cpu, Globe, BookOpen, Sun, Pill, Bike, Bot, Brain, FolderGit2, ArrowUpRight } from "lucide-react"

export function ProjectsSection() {
  const [selectedCategory, setSelectedCategory] = useState("All")

  const projects = [
    {
      title: "RunPod YouTube Automation",
      subtitle: "Autonomous Cloud Video Generation Engine",
      description: "A 15-stage automated video generation pipeline operating on remote RunPod cloud instances. Integrates LLM scripting, voice synthesis, scene building, upscaling, and FFmpeg multiplexing.",
      category: "Cloud & Automation",
      tech: ["Python", "RunPod GPU", "FFmpeg", "Voice AI", "LLMs"],
      github: "https://github.com/arshadmehmood1/youtube-automation-runpod",
      image: "/images/projects/yt_automation.png",
      icon: Sparkles,
      featured: true
    },
    {
      title: "Driver Monitoring System (DMS)",
      subtitle: "Edge AI Native Android Application",
      description: "Production-grade native Android application monitoring driver attentiveness using on-device TensorFlow Lite, background WorkManager sync, and Firebase telemetry.",
      category: "Mobile & Edge AI",
      tech: ["Android (Kotlin)", "TensorFlow Lite", "Firebase", "WorkManager"],
      github: "https://github.com/arshadmehmood1/driver-monitoring-system-android",
      image: "/images/projects/dms_android.png",
      icon: Cpu,
      featured: true
    },
    {
      title: "SafeRoute Web",
      subtitle: "Interactive Safety Routing Platform",
      description: "Modern web application for route planning and safety analysis built with a clean React architecture and Supabase Backend-as-a-Service for row-level security.",
      category: "Full-Stack Web",
      tech: ["React", "Vite", "Supabase", "Vanilla CSS"],
      github: "https://github.com/arshadmehmood1/saferoute-web",
      image: "/images/projects/saferoute_web.png",
      icon: Globe,
      featured: true
    },
    {
      title: "StudySuite Platform",
      subtitle: "Scalable EdTech Architecture",
      description: "Comprehensive EdTech platform built with clean client-server architecture separation, handling educational resource management and student analytics.",
      category: "Full-Stack Web",
      tech: ["React", "Node.js", "REST API", "Express"],
      github: "https://github.com/arshadmehmood1/studysuite-platform",
      image: "/images/projects/studysuite.png",
      icon: BookOpen,
      featured: true
    },
    {
      title: "Weather Outfit Predictor ML",
      subtitle: "Real-time Machine Learning API & Web Service",
      description: "Predictive ML app connecting live meteorological APIs with trained scikit-learn models to deliver personalized real-time clothing recommendations.",
      category: "Data Science & ML",
      tech: ["Python", "scikit-learn", "Weather API", "Web UI"],
      github: "https://github.com/arshadmehmood1/weather-outfit-predictor-ml",
      image: "/images/projects/weather_outfit.png",
      icon: Sun,
      featured: false
    },
    {
      title: "AI Medication Side Effects",
      subtitle: "Clinical Data Science & Lookup Portal",
      description: "End-to-end clinical data science project featuring exploratory data analysis in Jupyter Notebooks, predictive model APIs, and an interactive side-effect lookup portal.",
      category: "Data Science & ML",
      tech: ["Python", "Pandas", "scikit-learn", "REST API"],
      github: "https://github.com/arshadmehmood1/ai-medication-side-effects-analysis",
      image: "/images/projects/medication_side_effects.png",
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
      image: "/images/projects/bike_pos.png",
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
      image: "/images/projects/ai_complaint_bot.png",
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
      image: "/images/projects/decision_memory.png",
      icon: Brain,
      featured: false
    }
  ]

  const categories = ["All", "Cloud & Automation", "Mobile & Edge AI", "Full-Stack Web", "Desktop Software", "Data Science & ML"]

  const filteredProjects = selectedCategory === "All" 
    ? projects 
    : projects.filter(p => p.category === selectedCategory || (selectedCategory === "Cloud & Automation" && p.category === "AI & NLP"))

  return (
    <section id="projects" className="py-24 relative bg-background border-t border-border/50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-12">
        <div className="max-w-6xl mx-auto">
          
          {/* Section Header */}
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-secondary text-secondary-foreground text-xs font-semibold mb-3 border border-border">
              <FolderGit2 className="w-3.5 h-3.5 text-primary" />
              <span>Project Portfolio</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-foreground tracking-tight mb-3">
              Featured Software & AI Projects
            </h2>
            <p className="text-base text-muted-foreground max-w-2xl mx-auto">
              Open-source applications, autonomous cloud pipelines, edge ML models, and full-stack solutions.
            </p>
          </div>

          {/* Category Filter Bar */}
          <div className="flex flex-wrap justify-center gap-2 mb-12">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-4 py-1.5 rounded-full text-xs font-medium transition-all duration-200 ${
                  selectedCategory === cat
                    ? "bg-primary text-primary-foreground font-semibold shadow-sm"
                    : "bg-slate-100 dark:bg-slate-800/60 text-slate-600 dark:text-slate-300 hover:text-foreground hover:bg-slate-200 dark:hover:bg-slate-800 border border-slate-200/80 dark:border-slate-700/50"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Projects Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredProjects.map((project) => {
              const Icon = project.icon
              return (
                <Card 
                  key={project.title} 
                  className="flex flex-col justify-between classic-card classic-card-hover rounded-2xl overflow-hidden border border-border"
                >
                  <div>
                    {/* Project Image Banner */}
                    {project.image ? (
                      <div className="relative w-full h-48 bg-secondary overflow-hidden border-b border-border">
                        <Image
                          src={project.image}
                          alt={project.title}
                          fill
                          className="object-cover object-top transition-transform duration-500 hover:scale-105"
                          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                          priority={project.featured}
                        />
                        <div className="absolute top-3 left-3 z-10">
                          <span className="px-2.5 py-1 rounded-md text-[11px] font-bold bg-background/90 text-foreground border border-border shadow-sm backdrop-blur-sm">
                            {project.category}
                          </span>
                        </div>
                      </div>
                    ) : (
                      <div className="p-6 pb-0 flex items-center justify-between">
                        <span className="px-2.5 py-1 rounded-md text-[11px] font-semibold bg-secondary text-secondary-foreground border border-border">
                          {project.category}
                        </span>
                        <div className="p-2 rounded-lg bg-secondary text-foreground">
                          <Icon className="h-4 w-4" />
                        </div>
                      </div>
                    )}

                    <CardHeader className="p-6 pb-2">
                      <CardTitle className="text-lg font-bold text-foreground leading-snug flex items-center justify-between">
                        <span>{project.title}</span>
                      </CardTitle>
                      <CardDescription className="text-xs font-medium text-primary mt-0.5">
                        {project.subtitle}
                      </CardDescription>
                    </CardHeader>

                    <CardContent className="px-6 pb-4">
                      <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
                        {project.description}
                      </p>
                    </CardContent>
                  </div>

                  <div className="px-6 pb-6">
                    {/* Tech Chips */}
                    <div className="flex flex-wrap gap-1.5 mb-5">
                      {project.tech.map((t) => (
                        <span 
                          key={t} 
                          className="px-2.5 py-0.5 bg-slate-100 dark:bg-slate-800/80 text-slate-700 dark:text-slate-300 rounded-md text-[11px] font-semibold border border-slate-200/80 dark:border-slate-700/60"
                        >
                          {t}
                        </span>
                      ))}
                    </div>

                    {/* Action Button */}
                    <Button
                      onClick={() => window.open(project.github, "_blank")}
                      variant="outline"
                      size="sm"
                      className="w-full font-semibold rounded-xl border-border bg-background hover:bg-secondary text-foreground transition-all duration-200 flex items-center justify-center gap-2"
                    >
                      <Github className="h-4 w-4" />
                      View Code on GitHub
                      <ArrowUpRight className="h-3.5 w-3.5 text-muted-foreground" />
                    </Button>
                  </div>
                </Card>
              )
            })}
          </div>

        </div>
      </div>
    </section>
  )
}
