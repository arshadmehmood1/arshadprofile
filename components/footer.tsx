"use client"

import { Github, Linkedin, Mail } from "lucide-react"
import { Button } from "@/components/ui/button"

export function Footer() {
  return (
    <footer className="bg-card border-t border-border py-12">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <div className="mb-8">
            <h3 className="text-2xl font-bold text-foreground mb-4">Arshad Mehmood</h3>
            <p className="text-muted-foreground">AI Language & Chatbot Developer | ReactJS Full Stack Developer</p>
          </div>

          <div className="flex justify-center space-x-4 mb-8">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => window.open("https://github.com/arshadmehmood", "_blank")}
              className="transition-transform duration-200 hover:scale-110"
            >
              <Github className="h-5 w-5" />
              <span className="sr-only">GitHub</span>
            </Button>

            <Button
              variant="ghost"
              size="icon"
              onClick={() => window.open("https://linkedin.com/in/arshadmehmood", "_blank")}
              className="transition-transform duration-200 hover:scale-110"
            >
              <Linkedin className="h-5 w-5" />
              <span className="sr-only">LinkedIn</span>
            </Button>

            <Button
              variant="ghost"
              size="icon"
              onClick={() => window.open("mailto:arshadmehm3273@gmail.com")}
              className="transition-transform duration-200 hover:scale-110"
            >
              <Mail className="h-5 w-5" />
              <span className="sr-only">Email</span>
            </Button>
          </div>

          <div className="border-t border-border pt-8">
            <p className="text-sm text-muted-foreground">
              © {new Date().getFullYear()} Arshad Mehmood. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}
