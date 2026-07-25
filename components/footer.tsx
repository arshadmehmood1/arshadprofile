"use client"

import { Github, Linkedin, Mail, ArrowUp, Sparkles } from "lucide-react"
import { Button } from "@/components/ui/button"

export function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" })
  }

  const currentYear = new Date().getFullYear()

  return (
    <footer className="relative border-t border-border bg-background/80 backdrop-blur-xl py-12">
      <div className="container mx-auto px-4 sm:px-6 lg:px-12">
        <div className="max-w-5xl mx-auto flex flex-col items-center gap-8">
          
          {/* Top Row: Logo & Back to top button */}
          <div className="w-full flex items-center justify-between">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-xl bg-gradient-to-tr from-indigo-600 via-blue-500 to-cyan-400 p-0.5 flex items-center justify-center">
                <div className="w-full h-full bg-background rounded-[10px] flex items-center justify-center">
                  <Sparkles className="w-3.5 h-3.5 text-cyan-600 dark:text-cyan-400" />
                </div>
              </div>
              <span className="font-extrabold text-base text-foreground tracking-tight">
                Arshad<span className="gradient-text">.dev</span>
              </span>
            </div>

            <Button
              onClick={scrollToTop}
              size="icon"
              variant="outline"
              className="rounded-full glass-card border-border hover:bg-secondary text-muted-foreground hover:text-foreground transition-transform hover:scale-110"
              aria-label="Back to Top"
            >
              <ArrowUp className="w-4 h-4" />
            </Button>
          </div>

          {/* Social Links */}
          <div className="flex items-center gap-4">
            <a
              href="https://github.com/arshadmehmood1"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-2xl glass-card border-border hover:border-primary/50 hover:bg-secondary text-muted-foreground hover:text-foreground transition-all duration-300 hover:scale-110"
              aria-label="GitHub Profile"
            >
              <Github className="w-5 h-5" />
            </a>
            <a
              href="https://www.linkedin.com/in/arshad-mehmood-a0075b375"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-2xl glass-card border-border hover:border-primary/50 hover:bg-secondary text-muted-foreground hover:text-foreground transition-all duration-300 hover:scale-110"
              aria-label="LinkedIn Profile"
            >
              <Linkedin className="w-5 h-5" />
            </a>
            <a
              href="mailto:arshadmehm3273@gmail.com"
              className="p-3 rounded-2xl glass-card border-border hover:border-primary/50 hover:bg-secondary text-muted-foreground hover:text-foreground transition-all duration-300 hover:scale-110"
              aria-label="Send Email"
            >
              <Mail className="w-5 h-5" />
            </a>
          </div>

          {/* Copyright & Tagline */}
          <div className="text-center">
            <p className="text-xs sm:text-sm text-muted-foreground">
              © {currentYear} <span className="font-semibold text-foreground">Arshad Mehmood</span>. Built with Next.js 16, React 19 & Tailwind CSS.
            </p>
          </div>

        </div>
      </div>
    </footer>
  )
}
