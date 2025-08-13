"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Github, ExternalLink } from "lucide-react"

export function ProjectsSection() {
  return (
    <section id="projects" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold text-center text-foreground mb-12">Featured Project</h2>

          <Card className="transition-transform duration-200 hover:scale-105 shadow-lg">
            <CardHeader>
              <CardTitle className="text-2xl text-primary">CompetitionCentral</CardTitle>
              <CardDescription className="text-lg">Full-Stack Competition Hosting Platform</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                Full-stack competition hosting platform with secure user authentication, PDF uploads, voting system,
                leaderboard, admin dashboard, and ad monetization. Built with modern web technologies focusing on
                security, scalability, and user experience.
              </p>

              <div className="mb-4">
                <h4 className="font-semibold text-foreground mb-2">Technologies Used:</h4>
                <div className="flex flex-wrap gap-2">
                  {["ReactJS", "Node.js", "MongoDB", "JWT Auth", "File Upload", "Admin Dashboard"].map((tech) => (
                    <span key={tech} className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm font-medium">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Button
                  onClick={() => window.open("https://github.com/arshadmehmood/competitioncentral", "_blank")}
                  className="transition-transform duration-200 hover:scale-105"
                >
                  <Github className="mr-2 h-4 w-4" />
                  View on GitHub
                </Button>
                <Button
                  variant="outline"
                  onClick={() => window.open("#", "_blank")}
                  className="transition-transform duration-200 hover:scale-105"
                >
                  <ExternalLink className="mr-2 h-4 w-4" />
                  Live Demo
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
