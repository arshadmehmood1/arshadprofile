"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Github, ExternalLink, Sparkles, Cpu, Globe, BookOpen, Sun, Pill, Bike, Bot, Brain, FolderGit2, Star } from "lucide-react"

export function ProjectsSection() {
  const [selectedCategory, setSelectedCategory] = useState("All")

  const projects = [
    {
      title: "RunPod Full YouTube Automation",
      subtitle: "Autonomous Cloud Video Generation Pipeline",
      description: "A 15-stage automated video generation engine operating on remote RunPod cloud instances. Integrates LLM scripting, voice synthesis, scene building, upscaling, and FFmpeg multiplexing.",
      category: "Cloud & Automation",
      tech: ["Python", "RunPod GPU", "FFmpeg", "Voice AI", "LLMs"],
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
      tech: ["React", "Node.js", "REST API", "Express"],
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
      tech: ["Python", "Pandas", "scikit-learn", "REST API"],
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

  const categories = ["All", "Cloud & Automation", "Mobile & Edge AI", "Full-Stack Web", "Desktop Software", "Data Science & ML"]

  const filteredProjects = selectedCategory === "All" 
    ? projects 
    : projects.filter(p => p.category === selectedCategory || (selectedCategory === "Cloud & Automation" && p.category === "AI & NLP"))

  return (
    <section id="projects" className="py-24 relative overflow-hidden bg-dots-pattern">
      <div className="container mx-auto px-4 sm:px-6 lg:px-12">
        <div className="max-w-6xl mx-auto">
          
          {/* Section Header */}
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full glass-card border-indigo-500/30 mb-4">
              <FolderGit2 className="w-4 h-4 text-indigo-400" />
              <span className="text-xs font-bold uppercase tracking-wider text-indigo-400">Featured Showcase</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-foreground tracking-tight mb-4">
              Open-Source <span className="gradient-text">GitHub Projects</span>
            </h2>
            <p className="text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto">
              A curated collection of autonomous AI pipelines, edge models, native apps, and full-stack web solutions.
            </p>
          </div>

          {/* Category Filter Bar */}
          <div className="flex flex-wrap justify-center gap-2 mb-12">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-4 py-2 rounded-full text-xs font-semibold transition-all duration-300 ${
                  selectedCategory === cat
                    ? "bg-primary text-white shadow-lg shadow-indigo-500/25 scale-105"
                    : "glass-card text-muted-foreground hover:text-foreground hover:bg-white/10"
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
                  className={`flex flex-col justify-between glass-card glass-card-hover rounded-3xl p-6 transition-all duration-300 relative border ${
                    project.featured 
                      ? "border-indigo-500/50 shadow-xl shadow-indigo-500/10" 
                      : "border-white/10"
                  }`}
                >
                  <div>
                    {/* Header Row */}
                    <div className="flex items-center justify-between mb-4">
                      <span className="px-3 py-1 rounded-full text-[11px] font-bold bg-indigo-500/10 text-indigo-400 border border-indigo-500/20">
                        {project.category}
                      </span>

                      <div className="flex items-center gap-2">
                        {project.featured && (
                          <span className="flex items-center gap-1 px-2.5 py-0.5 rounded-full text-[10px] font-extrabold bg-amber-500/15 text-amber-300 border border-amber-500/30">
                            <Star className="w-3 h-3 fill-amber-400 text-amber-400" />
                            Flagship
                          </span>
                        )}
                        <div className="p-2 rounded-xl bg-slate-950/70 border border-white/10 text-cyan-400">
                          <Icon className="h-4 w-4" />
                        </div>
                      </div>
                    </div>

                    <CardTitle className="text-xl font-bold text-foreground leading-tight mb-1">
                      {project.title}
                    </CardTitle>
                    <CardDescription className="text-xs font-semibold text-cyan-400/90 mb-4">
                      {project.subtitle}
                    </CardDescription>

                    <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed mb-6">
                      {project.description}
                    </p>
                  </div>

                  <div>
                    {/* Tech Chips */}
                    <div className="flex flex-wrap gap-1.5 mb-6">
                      {project.tech.map((t) => (
                        <span 
                          key={t} 
                          className="px-2.5 py-1 bg-slate-950/80 text-foreground/80 rounded-lg text-[11px] font-medium border border-white/5"
                        >
                          {t}
                        </span>
                      ))}
                    </div>

                    {/* Action Button */}
                    <Button
                      onClick={() => window.open(project.github, "_blank")}
                      variant="default"
                      size="sm"
                      className="w-full font-bold rounded-xl bg-gradient-to-r from-indigo-600 to-cyan-600 hover:from-indigo-500 hover:to-cyan-500 text-white shadow-md shadow-indigo-500/20 transition-all duration-300 hover:scale-[1.02] flex items-center justify-center gap-2"
                    >
                      <Github className="h-4 w-4" />
                      View Repository
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
