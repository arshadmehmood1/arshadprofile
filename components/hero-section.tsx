"use client"

import { Button } from "@/components/ui/button"
import { Github, Linkedin, Download, Sparkles, Terminal, ShieldCheck, Cpu, ChevronDown, ArrowRight } from "lucide-react"
import Image from "next/image"
import { Typewriter } from "./typewriter"

export function HeroSection() {
  const handleDownloadCV = () => {
    window.open("/cv", "_blank")
  }

  const scrollToAbout = () => {
    const aboutSection = document.querySelector("#about")
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: "smooth" })
    }
  }

  const scrollToProjects = () => {
    const projectsSection = document.querySelector("#projects")
    if (projectsSection) {
      projectsSection.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center pt-28 pb-16 overflow-hidden bg-grid-pattern">
      {/* Dynamic Glowing Ambient Orbs */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-tr from-indigo-500/20 via-cyan-500/15 to-emerald-400/15 rounded-full blur-[140px] pointer-events-none animate-pulse-glow" />
      <div className="absolute bottom-10 right-10 w-96 h-96 bg-blue-500/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute top-1/3 left-10 w-80 h-80 bg-indigo-500/10 rounded-full blur-[100px] pointer-events-none" />

      <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-12">
        <div className="max-w-5xl mx-auto">

          {/* Status Badge */}
          <div className="flex justify-center mb-8 animate-fade-in-up">
            <div className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full glass-card border-emerald-500/30 bg-emerald-500/10 shadow-sm">
              <span className="relative flex h-3 w-3">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-3 w-3 bg-emerald-500"></span>
              </span>
              <span className="text-xs font-bold tracking-wider text-emerald-700 dark:text-emerald-400 uppercase">
                Open to Software Engineering & AI Roles
              </span>
            </div>
          </div>

          <div className="flex flex-col items-center">
            {/* Profile Avatar & Hero Headline */}
            <div className="flex flex-col md:flex-row items-center gap-10 md:gap-14 mb-10 text-center md:text-left">

              {/* Profile Avatar with Dual Animated Ring */}
              <div className="relative animate-fade-in-up">
                <div className="relative w-48 h-48 sm:w-56 sm:h-56 lg:w-64 lg:h-64 rounded-full p-1.5 bg-gradient-to-tr from-indigo-500 via-cyan-400 to-emerald-400 shadow-2xl shadow-indigo-500/20 animate-float">
                  <div className="w-full h-full rounded-full overflow-hidden bg-background p-1">
                    <Image
                      src="/images/profile.png"
                      alt="Arshad Mehmood - Software & AI Developer"
                      width={256}
                      height={256}
                      className="w-full h-full object-cover object-center rounded-full transition-transform duration-500 hover:scale-105"
                      priority
                      quality={95}
                    />
                  </div>
                </div>
              </div>

              {/* Text Block */}
              <div className="animate-fade-in-up animate-delay-100 max-w-2xl">
                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight mb-4 leading-tight">
                  Hi, I'm <br className="hidden sm:inline" />
                  <span className="gradient-text">
                    <Typewriter text="Arshad Mehmood" delay={300} speed={75} />
                  </span>
                </h1>

                <p className="text-xl sm:text-2xl font-bold text-foreground mb-4 flex items-center justify-center md:justify-start gap-2.5">
                  <Terminal className="h-6 w-6 text-indigo-600 dark:text-cyan-400" />
                  Full-Stack & AI Software Engineer
                </p>

                <p className="text-base sm:text-lg text-muted-foreground leading-relaxed">
                  Specializing in autonomous AI pipelines, edge computer vision (TFLite), cross-platform mobile/desktop apps, and modern full-stack web solutions.
                </p>
              </div>
            </div>

            {/* Quick Tech Highlights Pills */}
            <div className="flex flex-wrap justify-center gap-3 mb-10 animate-fade-in-up animate-delay-200 max-w-3xl">
              {[
                { label: "Python & LLMs", icon: Sparkles },
                { label: "Edge AI (TFLite)", icon: Cpu },
                { label: "React / Next.js", icon: Terminal },
                { label: "Android & Electron", icon: ShieldCheck }
              ].map((item) => {
                const Icon = item.icon
                return (
                  <div
                    key={item.label}
                    className="flex items-center gap-2 px-3.5 py-1.5 rounded-full glass-card border-border hover:border-indigo-500/50 hover:bg-secondary transition-all duration-300 shadow-sm"
                  >
                    <Icon className="h-4 w-4 text-indigo-600 dark:text-cyan-400" />
                    <span className="text-xs font-semibold text-foreground">{item.label}</span>
                  </div>
                )
              })}
            </div>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center justify-center gap-4 animate-fade-in-up animate-delay-300">
              <Button
                onClick={scrollToProjects}
                size="lg"
                className="font-bold rounded-full bg-gradient-to-r from-indigo-600 to-cyan-600 dark:from-indigo-600 dark:to-cyan-500 hover:opacity-95 text-white shadow-xl shadow-indigo-500/20 px-8 py-6 transition-all duration-300 hover:scale-105 flex items-center gap-2"
              >
                Explore Projects
                <ArrowRight className="w-4 h-4" />
              </Button>

              <Button
                onClick={handleDownloadCV}
                variant="outline"
                size="lg"
                className="font-bold rounded-full glass-card border-border hover:bg-secondary text-foreground px-8 py-6 transition-all duration-300 hover:scale-105 flex items-center gap-2"
              >
                <Download className="w-4 h-4 text-indigo-600 dark:text-cyan-400" />
                Download CV
              </Button>
            </div>

            {/* Scroll Down Indicator */}
            <button
              onClick={scrollToAbout}
              className="mt-16 p-2 rounded-full text-muted-foreground hover:text-primary hover:bg-secondary transition-all duration-300 animate-bounce"
              aria-label="Scroll to About Section"
            >
              <ChevronDown className="h-6 w-6" />
            </button>
          </div>

        </div>
      </div>
    </section>
  )
}
