"use client"

import { Button } from "@/components/ui/button"
import { Github, Linkedin, Download, ChevronDown, Sparkles, Terminal, ShieldCheck } from "lucide-react"
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

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center pt-28 pb-16 overflow-hidden bg-grid-pattern">
      {/* Dynamic Glowing Ambient Orbs */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-gradient-to-tr from-indigo-600/20 via-blue-500/15 to-cyan-400/20 rounded-full blur-[120px] pointer-events-none animate-pulse-glow" />
      <div className="absolute bottom-10 right-10 w-96 h-96 bg-cyan-500/10 rounded-full blur-[100px] pointer-events-none" />

      <div className="container relative z-10 mx-auto px-6 sm:px-10 lg:px-16">
        <div className="max-w-5xl mx-auto text-center">
          
          {/* Status Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-card border-primary/30 mb-8 animate-fade-in-up">
            <span className="relative flex h-2.5 w-2.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500"></span>
            </span>
            <span className="text-xs font-semibold tracking-wide text-foreground uppercase">
              Open to Software Engineering & AI Roles
            </span>
          </div>

          <div className="flex flex-col items-center">
            {/* Profile Avatar & Hero Headline */}
            <div className="flex flex-col md:flex-row items-center gap-10 md:gap-14 mb-10 text-center md:text-left">
              
              <div className="relative animate-fade-in-up">
                <div className="relative w-48 h-48 sm:w-56 sm:h-56 lg:w-64 lg:h-64 rounded-full p-1 bg-gradient-to-tr from-indigo-500 via-blue-500 to-cyan-400 shadow-2xl animate-float">
                  <div className="w-full h-full rounded-full overflow-hidden bg-background">
                    <Image
                      src="/images/profile.png"
                      alt="Arshad Mehmood - Software & AI Developer"
                      width={256}
                      height={256}
                      className="w-full h-full object-cover object-center transition-transform duration-500 hover:scale-110"
                      priority
                      quality={95}
                    />
                  </div>
                </div>
              </div>

              <div className="animate-fade-in-up animate-delay-100 max-w-xl">
                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight mb-4 leading-tight">
                  Hi, I'm <br className="hidden sm:inline" />
                  <span className="gradient-text">
                    <Typewriter text="Arshad Mehmood" delay={400} speed={70} />
                  </span>
                </h1>

                <p className="text-xl sm:text-2xl font-semibold text-foreground/90 mb-3 flex items-center justify-center md:justify-start gap-2">
                  <Terminal className="h-6 w-6 text-primary" />
                  Full-Stack & AI Software Engineer
                </p>

                <p className="text-base sm:text-lg text-muted-foreground leading-relaxed">
                  Specializing in AI pipelines, edge computer vision (TFLite), cross-platform mobile/desktop apps, and modern full-stack web architectures.
                </p>
              </div>
            </div>

            {/* Quick Tech Highlights Pills */}
            <div className="flex flex-wrap justify-center gap-3 mb-12 animate-fade-in-up animate-delay-300 max-w-3xl">
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
                    className="flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-secondary/80 border border-border/60 text-xs font-semibold text-foreground/90 backdrop-blur-sm"
                  >
                    <Icon className="h-3.5 w-3.5 text-primary" />
                    <span>{item.label}</span>
                  </div>
                )
              })}
            </div>

            {/* Action Buttons */}
            <div className="animate-fade-in-up animate-delay-400">
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <Button
                  onClick={handleDownloadCV}
                  size="lg"
                  className="w-full sm:w-auto font-semibold px-8 py-6 rounded-xl bg-gradient-to-r from-indigo-600 via-blue-600 to-cyan-500 hover:from-indigo-500 hover:to-cyan-400 text-white shadow-lg shadow-indigo-500/25 transition-all duration-300 hover:scale-105"
                >
                  <Download className="mr-2.5 h-5 w-5" />
                  View & Download CV
                </Button>

                <Button
                  variant="outline"
                  size="lg"
                  onClick={() => window.open("https://github.com/arshadmehmood1?tab=repositories", "_blank")}
                  className="w-full sm:w-auto font-semibold px-8 py-6 rounded-xl glass-card glass-card-hover border-border"
                >
                  <Github className="mr-2.5 h-5 w-5 text-primary" />
                  Explore GitHub Repos
                </Button>

                <Button
                  variant="outline"
                  size="lg"
                  onClick={() => window.open("https://www.linkedin.com/in/arshad-mehmood-a0075b375", "_blank")}
                  className="w-full sm:w-auto font-semibold px-8 py-6 rounded-xl glass-card glass-card-hover border-border"
                >
                  <Linkedin className="mr-2.5 h-5 w-5 text-blue-500" />
                  LinkedIn Profile
                </Button>
              </div>
            </div>

            {/* Scroll Indicator */}
            <div className="mt-16 animate-fade-in-up animate-delay-500">
              <Button
                variant="ghost"
                onClick={scrollToAbout}
                className="rounded-full p-3 hover:bg-primary/10 transition-all duration-300 text-muted-foreground hover:text-primary"
              >
                <ChevronDown className="h-6 w-6 animate-bounce" />
                <span className="sr-only">Scroll down</span>
              </Button>
            </div>

          </div>
        </div>
      </div>
    </section>
  )
}

