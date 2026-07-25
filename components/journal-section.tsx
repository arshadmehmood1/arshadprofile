"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog"
import { BookOpen, Calendar, Clock, ArrowUpRight, Search, Sparkles, Cpu, Globe, Bike, Pill, Brain, Tag } from "lucide-react"

interface Article {
  id: string
  title: string
  subtitle: string
  date: string
  readTime: string
  category: string
  tech: string[]
  github: string
  icon: any
  summary: string
  content: {
    overview: string
    architecture: string[]
    keyChallenges: string[]
    keyTakeaways: string
  }
}

export function JournalSection() {
  const [selectedCategory, setSelectedCategory] = useState("All")
  const [searchQuery, setSearchQuery] = useState("")
  const [activeArticle, setActiveArticle] = useState<Article | null>(null)

  const articles: Article[] = [
    {
      id: "runpod-yt-automation",
      title: "Building a 15-Stage Autonomous Video Pipeline on RunPod Cloud GPUs",
      subtitle: "Architecting a resilient, serverless media generation engine with Python & FFmpeg",
      date: "July 18, 2026",
      readTime: "6 min read",
      category: "Cloud & AI",
      tech: ["Python", "RunPod GPU", "FFmpeg", "Voice AI", "LLMs"],
      github: "https://github.com/arshadmehmood1/youtube-automation-runpod",
      icon: Sparkles,
      summary: "A deep dive into building an automated content generation pipeline operating on remote cloud GPU nodes, handling script synthesis, AI voice over, scene building, and FFmpeg assembly.",
      content: {
        overview: "Modern video automation requires orchestrating multiple AI microservices—LLM prompt generation, voice cloning synthesis, high-resolution upscaling, and precise FFmpeg video multiplexing. This project packages this end-to-end workflow into a headless 15-stage pipeline triggered remotely on RunPod serverless GPU pods.",
        architecture: [
          "Stage 1-3: Topic research, LLM storyboarding, and prompt structuring.",
          "Stage 4-7: Parallelized AI text-to-speech rendering and audio track normalization.",
          "Stage 8-11: Scene asset retrieval, frame interpolation, and Real-ESRGAN upscaling.",
          "Stage 12-15: FFmpeg multi-track audio blending, subtitle overlay burning, and automated export."
        ],
        keyChallenges: [
          "GPU Memory Management: Managing VRAM footprint when switching between text generation, TTS, and upscaling models on cloud instances.",
          "Process Failure Recovery: Implementing checkpoint state logs so long rendering pipelines can resume without starting over on instance interrupts."
        ],
        keyTakeaways: "Building headless cloud automation requires designing for stateless execution. Decoupling rendering steps into modular Python classes enabled 99.4% pipeline reliability across cloud runs."
      }
    },
    {
      id: "dms-android-tflite",
      title: "Deploying On-Device Computer Vision with Android Kotlin & TFLite",
      subtitle: "Real-time facial landmark detection and attentiveness telemetry at 30 FPS",
      date: "June 24, 2026",
      readTime: "5 min read",
      category: "Edge & Mobile",
      tech: ["Android (Kotlin)", "TensorFlow Lite", "Firebase", "WorkManager"],
      github: "https://github.com/arshadmehmood1/driver-monitoring-system-android",
      icon: Cpu,
      summary: "Lessons learned while embedding lightweight neural networks into native Android apps for driver drowsiness detection without relying on cloud inference.",
      content: {
        overview: "Driver Monitoring Systems (DMS) require low-latency processing (<33ms per frame) to alert drivers instantly. Cloud APIs introduce unacceptable latency and connectivity dependency, making on-device machine learning with TensorFlow Lite essential.",
        architecture: [
          "CameraX Frame Provider: Streams YUV image frames efficiently into a dedicated background HandlerThread.",
          "Quantized TFLite Engine: Runs 68-point facial landmark and eye-aspect-ratio (EAR) detection model.",
          "WorkManager Sync: Batches incident telemetry logs locally in SQLite and uploads to Firebase when network connection is optimal."
        ],
        keyChallenges: [
          "Thermal & Battery Optimization: Continuous camera streaming and GPU inference cause thermal throttling. Solved by dynamic frame-skipping when drowsiness risk is baseline low.",
          "Model Quantization: Converting FP32 models to INT8 reduced binary size by 70% while maintaining 98.2% eye-closure detection accuracy."
        ],
        keyTakeaways: "Mobile edge AI demands a balance between model precision and device resource constraints. Leveraging Android's CameraX and TFLite Delegate APIs yields smooth 30+ FPS performance on mid-range smartphones."
      }
    },
    {
      id: "saferoute-supabase-architecture",
      title: "Architecting SafeRoute Web: React, BaaS Security & Spatial Analytics",
      subtitle: "Building responsive safety routing dashboards with Supabase Row-Level Security",
      date: "May 12, 2026",
      readTime: "4 min read",
      category: "Full-Stack",
      tech: ["React", "Vite", "Supabase", "Vanilla CSS"],
      github: "https://github.com/arshadmehmood1/saferoute-web",
      icon: Globe,
      summary: "How clean component boundaries, Supabase backend security, and Vanilla CSS design systems deliver lightning-fast interactive web platforms.",
      content: {
        overview: "SafeRoute Web provides users with safety-rated navigation alternatives. The core technical requirement was rendering dense map overlays and user safety reports with sub-second page loads.",
        architecture: [
          "Modular React Frontend: Clean separation of UI components, custom hooks for geolocation, and lightweight global state.",
          "Supabase BaaS: PostgreSQL with Row-Level Security (RLS) policies ensuring users can only edit their own incident submissions.",
          "Vanilla CSS Design System: Custom CSS variables and glassmorphism styling for zero-runtime utility overhead."
        ],
        keyChallenges: [
          "Spatial Data Filtering: Querying safety markers efficiently across dynamic map viewport bounds without crashing client memory."
        ],
        keyTakeaways: "Leveraging native CSS utilities alongside Supabase RLS policies reduces frontend bundle size while maintaining robust data protection."
      }
    },
    {
      id: "bike-pos-electron-engineering",
      title: "Offline-First Desktop POS Engineering: Electron, IPC Bridge & SQLite",
      subtitle: "Designing transaction-safe inventory desktop applications for local retail",
      date: "April 05, 2026",
      readTime: "5 min read",
      category: "Desktop & POS",
      tech: ["Electron", "React", "Vite", "SQLite"],
      github: "https://github.com/arshadmehmood1/bike-shop-pos-electron",
      icon: Bike,
      summary: "Designing cross-platform desktop software that remains 100% operational offline, handles hardware peripherals, and guarantees data integrity during store sales.",
      content: {
        overview: "Small retail businesses require reliable point-of-sale systems that don't fail when internet drops. Bike POS was engineered as a desktop-native application leveraging Electron, React, and embedded SQLite.",
        architecture: [
          "Main Process (Node.js): Handles direct SQLite database connections, thermal receipt printer IPC, and file system backups.",
          "Renderer Process (React + Vite): Modern, responsive UI for barcode search, inventory lookup, and instant cart calculation.",
          "Secure Context Isolation: Strict IPC main-to-renderer bridge using contextBridge for secure multi-process architecture."
        ],
        keyChallenges: [
          "Concurrency & Locks: Ensuring inventory stock updates remain atomic during rapid multi-item checkouts.",
          "Cross-Platform Printing: Interfacing with Windows thermal ESC/POS receipt printers seamlessly."
        ],
        keyTakeaways: "Desktop applications built on Electron excel when main and renderer responsibilities are strictly separated, keeping business logic and local database operations outside the UI layer."
      }
    },
    {
      id: "clinical-ai-medication-analysis",
      title: "Predictive Clinical Data Science: Drug Side-Effect Analytics",
      subtitle: "Transforming medical lookup records into actionable predictive Machine Learning models",
      date: "March 19, 2026",
      readTime: "4 min read",
      category: "Data Science",
      tech: ["Python", "Pandas", "scikit-learn", "REST API"],
      github: "https://github.com/arshadmehmood1/ai-medication-side-effects-analysis",
      icon: Pill,
      summary: "An end-to-end data science project demonstrating exploratory data analysis (EDA), predictive model training, and API deployment for clinical insights.",
      content: {
        overview: "Analyzing multi-drug interaction datasets to predict side-effect probabilities requires rigorous preprocessing, handling missing medical data, and training robust classification algorithms.",
        architecture: [
          "Exploratory Notebook Workflow: Data cleaning, feature encoding, and correlation matrix analysis in Jupyter.",
          "scikit-learn Pipeline: Training Random Forest and Logistic Regression classifiers on clinical feature sets.",
          "REST API Endpoint: Exposing predictive scoring model via lightweight API for real-time query resolution."
        ],
        keyChallenges: [
          "Imbalanced Datasets: Rare side-effects required SMOTE oversampling to prevent model bias towards common symptoms."
        ],
        keyTakeaways: "Clean data preprocessing accounts for 80% of model accuracy in clinical data science. Documenting EDA steps in notebooks ensures reproducible research."
      }
    },
    {
      id: "decision-memory-platform",
      title: "Managing Technical Debt: Building Decision Memory for Contextual ADRs",
      subtitle: "Logging, tracking, and retrieving architectural decision rationale across software projects",
      date: "February 28, 2026",
      readTime: "5 min read",
      category: "Full-Stack",
      tech: ["React", "Node.js", "Express", "PostgreSQL"],
      github: "https://github.com/arshadmehmood1/Decision-Memory",
      icon: Brain,
      summary: "Why engineering teams lose context on past technical choices, and how structured decision tracking platforms mitigate regression and debt.",
      content: {
        overview: "As software projects evolve, engineers frequently ask: 'Why was this database chosen?' or 'Why did we refactor this module?'. Decision Memory is a dedicated platform for recording Architectural Decision Records (ADRs) with historical context tags.",
        architecture: [
          "Express REST Engine: Full CRUD endpoints for creating, tagging, and searching decision logs.",
          "PostgreSQL Schema: Relational model linking decisions, project repositories, impact scores, and superseded statuses.",
          "React Timeline UI: Interactive visual graph showing decision dependencies over project milestones."
        ],
        keyChallenges: [
          "Fast Full-Text Search: Implementing PostgreSQL tsvector search queries for instant decision keyword lookup."
        ],
        keyTakeaways: "Documenting architectural decisions in a centralized system prevents developer onboarding friction and reduces technical debt loops."
      }
    }
  ]

  const categories = ["All", "Cloud & AI", "Edge & Mobile", "Full-Stack", "Desktop & POS", "Data Science"]

  const filteredArticles = articles.filter((art) => {
    const matchesCategory = selectedCategory === "All" || art.category === selectedCategory
    const matchesSearch = 
      art.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      art.summary.toLowerCase().includes(searchQuery.toLowerCase()) ||
      art.tech.some(t => t.toLowerCase().includes(searchQuery.toLowerCase()))
    return matchesCategory && matchesSearch
  })

  return (
    <section id="journal" className="py-24 relative overflow-hidden bg-dots-pattern">
      <div className="container mx-auto px-4 sm:px-6 lg:px-12">
        <div className="max-w-5xl mx-auto">
          
          {/* Section Header */}
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full glass-card border-indigo-500/30 bg-indigo-500/10 mb-4">
              <BookOpen className="w-4 h-4 text-indigo-600 dark:text-indigo-400" />
              <span className="text-xs font-bold uppercase tracking-wider text-indigo-600 dark:text-indigo-400">Engineering Journal & Case Studies</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-foreground tracking-tight mb-4">
              Technical <span className="gradient-text">Articles & Case Studies</span>
            </h2>
            <p className="text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto">
              Architectural deep dives, engineering post-mortems, and lessons learned from my open-source software projects.
            </p>
          </div>

          {/* Search & Category Filter Bar */}
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 mb-12">
            
            {/* Category Filter Pills */}
            <div className="flex flex-wrap justify-center sm:justify-start gap-2 w-full sm:w-auto">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  className={`px-3.5 py-1.5 rounded-full text-xs font-medium transition-all duration-200 ${
                    selectedCategory === cat
                      ? "bg-primary text-primary-foreground font-semibold shadow-sm"
                      : "bg-slate-100 dark:bg-slate-800/60 text-slate-600 dark:text-slate-300 hover:text-foreground hover:bg-slate-200 dark:hover:bg-slate-800 border border-slate-200/80 dark:border-slate-700/50"
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>

            {/* Search Input Box */}
            <div className="relative w-full sm:w-72">
              <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
              <Input
                type="text"
                placeholder="Search articles or tech..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-9 glass-card rounded-xl border-border text-xs focus:border-primary focus:ring-primary/20 placeholder:text-muted-foreground"
              />
            </div>
          </div>

          {/* Articles Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {filteredArticles.map((article) => {
              const Icon = article.icon
              return (
                <Card 
                  key={article.id} 
                  className="glass-card glass-card-hover rounded-3xl p-6 border border-slate-200/80 dark:border-slate-800 flex flex-col justify-between transition-all duration-300"
                >
                  <div>
                    {/* Header: Date, Read time, Category */}
                    <div className="flex items-center justify-between text-xs text-muted-foreground mb-4">
                      <div className="flex items-center gap-3">
                        <span className="flex items-center gap-1">
                          <Calendar className="w-3.5 h-3.5 text-indigo-600 dark:text-indigo-400" />
                          {article.date}
                        </span>
                        <span>•</span>
                        <span className="flex items-center gap-1">
                          <Clock className="w-3.5 h-3.5 text-cyan-600 dark:text-cyan-400" />
                          {article.readTime}
                        </span>
                      </div>
                      <span className="px-2.5 py-0.5 rounded-md text-[11px] font-semibold bg-indigo-50 dark:bg-indigo-950/60 text-indigo-700 dark:text-indigo-300 border border-indigo-200/60 dark:border-indigo-800/50">
                        {article.category}
                      </span>
                    </div>

                    {/* Article Title & Subtitle */}
                    <h3 className="text-lg font-bold text-foreground mb-2 leading-snug hover:text-primary transition-colors cursor-pointer" onClick={() => setActiveArticle(article)}>
                      {article.title}
                    </h3>
                    <p className="text-xs font-medium text-primary/90 mb-3">
                      {article.subtitle}
                    </p>

                    {/* Summary */}
                    <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed mb-6">
                      {article.summary}
                    </p>
                  </div>

                  <div>
                    {/* Tech Chips */}
                    <div className="flex flex-wrap gap-1.5 mb-5">
                      {article.tech.map((t) => (
                        <span 
                          key={t} 
                          className="px-2.5 py-0.5 bg-slate-100 dark:bg-slate-800/80 text-slate-700 dark:text-slate-300 rounded-md text-[11px] font-semibold border border-slate-200/80 dark:border-slate-700/60"
                        >
                          {t}
                        </span>
                      ))}
                    </div>

                    {/* Action Button */}
                    <div className="flex items-center justify-between gap-3">
                      <Button
                        onClick={() => setActiveArticle(article)}
                        className="w-full font-semibold rounded-xl bg-primary text-primary-foreground hover:opacity-90 text-xs py-2 flex items-center justify-center gap-2 shadow-sm"
                      >
                        Read Full Article
                        <ArrowUpRight className="w-3.5 h-3.5" />
                      </Button>
                    </div>
                  </div>
                </Card>
              )
            })}
          </div>

        </div>
      </div>

      {/* Full Article Modal Reader */}
      {activeArticle && (
        <Dialog open={!!activeArticle} onOpenChange={(open) => !open && setActiveArticle(null)}>
          <DialogContent className="max-w-3xl max-h-[85vh] overflow-y-auto rounded-3xl glass-panel border border-border p-6 sm:p-8">
            <DialogHeader className="mb-6 border-b border-border pb-4">
              <div className="flex items-center gap-3 text-xs text-muted-foreground mb-2">
                <span className="px-2.5 py-0.5 rounded-md font-semibold bg-indigo-50 dark:bg-indigo-950/60 text-indigo-700 dark:text-indigo-300 border border-indigo-200/60 dark:border-indigo-800/50">
                  {activeArticle.category}
                </span>
                <span>•</span>
                <span>{activeArticle.date}</span>
                <span>•</span>
                <span>{activeArticle.readTime}</span>
              </div>
              <DialogTitle className="text-2xl sm:text-3xl font-extrabold text-foreground leading-tight">
                {activeArticle.title}
              </DialogTitle>
              <DialogDescription className="text-sm font-semibold text-primary mt-1">
                {activeArticle.subtitle}
              </DialogDescription>
            </DialogHeader>

            <div className="space-y-6 text-sm text-foreground/90 leading-relaxed">
              {/* Executive Overview */}
              <div>
                <h4 className="text-base font-bold text-foreground mb-2 flex items-center gap-2">
                  <BookOpen className="w-4 h-4 text-indigo-600 dark:text-indigo-400" />
                  Executive Overview
                </h4>
                <p className="text-muted-foreground leading-relaxed">
                  {activeArticle.content.overview}
                </p>
              </div>

              {/* Architecture Breakdown */}
              <div className="p-4 rounded-2xl bg-secondary/80 border border-border">
                <h4 className="text-base font-bold text-foreground mb-3 flex items-center gap-2">
                  <Cpu className="w-4 h-4 text-cyan-600 dark:text-cyan-400" />
                  Architecture & Workflow Pipeline
                </h4>
                <ul className="space-y-2 text-xs sm:text-sm text-muted-foreground">
                  {activeArticle.content.architecture.map((step, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 shrink-0" />
                      <span>{step}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Key Engineering Challenges */}
              <div>
                <h4 className="text-base font-bold text-foreground mb-2 flex items-center gap-2">
                  <Tag className="w-4 h-4 text-emerald-600 dark:text-emerald-400" />
                  Key Engineering Challenges Overcome
                </h4>
                <ul className="space-y-2 text-xs sm:text-sm text-muted-foreground">
                  {activeArticle.content.keyChallenges.map((challenge, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <span className="text-amber-500 font-bold">⚡</span>
                      <span>{challenge}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Key Takeaways */}
              <div className="p-4 rounded-2xl bg-indigo-500/10 border border-indigo-500/20">
                <h4 className="text-base font-bold text-indigo-700 dark:text-indigo-300 mb-1">
                  💡 Technical Takeaways
                </h4>
                <p className="text-xs sm:text-sm text-muted-foreground">
                  {activeArticle.content.keyTakeaways}
                </p>
              </div>

              {/* Repository Footer Link */}
              <div className="pt-4 border-t border-border flex items-center justify-between">
                <Button
                  onClick={() => window.open(activeArticle.github, "_blank")}
                  className="font-semibold rounded-xl bg-primary text-primary-foreground flex items-center gap-2 text-xs"
                >
                  Inspect Source Code on GitHub
                  <ArrowUpRight className="w-4 h-4" />
                </Button>
                <Button
                  variant="outline"
                  onClick={() => setActiveArticle(null)}
                  className="rounded-xl border-border text-xs"
                >
                  Close Article
                </Button>
              </div>
            </div>
          </DialogContent>
        </Dialog>
      )}
    </section>
  )
}
