"use client"

import { Button } from "@/components/ui/button"
import { Github, Linkedin, Download, ChevronDown } from "lucide-react"
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
    <section id="home" className="min-h-screen flex items-center justify-center pt-32 pb-16">
      <div className="container mx-auto px-8 sm:px-10 lg:px-16">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col items-center">
            <div className="flex flex-col md:flex-row items-center gap-16 mb-16">
              <div className="animate-fade-in-up">
                <div className="relative">
                  <div className="w-52 h-52 md:w-60 md:h-60 lg:w-72 lg:h-72 rounded-full overflow-hidden border-4 border-primary/20 shadow-2xl">
                    <Image
                      src="/images/profile.png"
                      alt="Arshad Mehmood - AI Language & Chatbot Developer"
                      width={288}
                      height={288}
                      className="w-full h-full object-cover object-center"
                      priority
                      quality={95}
                    />
                  </div>
                  <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-primary/10 to-transparent -z-10 blur-xl scale-110"></div>
                </div>
              </div>

              <div className="text-center md:text-left animate-fade-in-up animate-delay-100">
                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-4">
                  <span className="text-primary">
                    <Typewriter text="Arshad Mehmood's Profile" delay={500} speed={80} />
                  </span>
                </h1>
              </div>
            </div>

            <div className="text-center max-w-4xl">
              <div className="animate-fade-in-up animate-delay-200">
                <p className="text-xl sm:text-2xl text-foreground font-medium mb-8">
                  AI Language & Chatbot Developer | ReactJS Full Stack Developer
                </p>
              </div>

              <div className="animate-fade-in-up animate-delay-300">
                <p className="text-lg text-muted-foreground mb-12 leading-relaxed">
                  Innovative and results-driven developer specializing in AI-powered language models, chatbot
                  development, and full-stack web solutions from Toba Tek Singh, Pakistan.
                </p>
              </div>

              <div className="animate-fade-in-up animate-delay-400">
                <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-16">
                  <Button
                    onClick={handleDownloadCV}
                    size="lg"
                    className="transition-all duration-300 hover:scale-105 hover:shadow-lg"
                  >
                    <Download className="mr-2 h-5 w-5" />
                    View CV
                  </Button>

                  <Button
                    variant="outline"
                    size="lg"
                    onClick={() => window.open("https://github.com/arshadmehmood1?tab=repositories", "_blank")}
                    className="transition-all duration-300 hover:scale-105 hover:shadow-lg"
                  >
                    <Github className="mr-2 h-5 w-5" />
                    GitHub
                  </Button>

                  <Button
                    variant="outline"
                    size="lg"
                    onClick={() => window.open("https://www.linkedin.com/in/arshad-mehmood-a0075b375", "_blank")}
                    className="transition-all duration-300 hover:scale-105 hover:shadow-lg"
                  >
                    <Linkedin className="mr-2 h-5 w-5" />
                    LinkedIn
                  </Button>
                </div>
              </div>
            </div>
          </div>

          <div className="text-center mt-20">
            <div className="animate-fade-in-up animate-delay-500">
              <Button
                variant="ghost"
                onClick={scrollToAbout}
                className="animate-bounce hover:animate-none transition-all duration-300"
              >
                <ChevronDown className="h-6 w-6" />
                <span className="sr-only">Scroll to about section</span>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
