"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Moon, Sun, Menu, X, Github, Linkedin, FileText, Sparkles } from "lucide-react"
import { useTheme } from "@/components/theme-provider"

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [activeSection, setActiveSection] = useState("home")
  const [mounted, setMounted] = useState(false)
  const pathname = usePathname()
  const { theme, toggleTheme } = useTheme()

  useEffect(() => {
    setMounted(true)
  }, [])

  useEffect(() => {
    if (pathname !== "/") return

    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40)

      const sections = ["home", "about", "skills", "projects", "education", "contact"]
      const scrollPosition = window.scrollY + 200

      for (const section of sections) {
        const element = document.getElementById(section)
        if (element) {
          const top = element.offsetTop
          const height = element.offsetHeight
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(section)
            break
          }
        }
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [pathname])

  const navItems = [
    { href: "/#home", label: "Home", id: "home" },
    { href: "/#about", label: "About", id: "about" },
    { href: "/#skills", label: "Skills", id: "skills" },
    { href: "/#projects", label: "Projects", id: "projects" },
    { href: "/journal", label: "Journal", id: "journal", isPage: true },
    { href: "/#education", label: "Education", id: "education" },
    { href: "/#contact", label: "Contact", id: "contact" },
  ]

  const handleNavClick = (href: string, isPage?: boolean) => {
    setIsMobileMenuOpen(false)
    if (isPage) {
      window.location.href = href
      return
    }

    if (pathname === "/") {
      const hash = href.replace("/", "")
      const element = document.querySelector(hash)
      if (element) {
        element.scrollIntoView({ behavior: "smooth" })
      }
    } else {
      window.location.href = href
    }
  }

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 py-4 ${
        isScrolled ? "py-3" : "py-5"
      }`}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-12">
        <div
          className={`flex items-center justify-between mx-auto px-5 py-2.5 rounded-full transition-all duration-500 ${
            isScrolled
              ? "glass-panel border-border shadow-xl shadow-indigo-500/10 backdrop-blur-xl"
              : "bg-background/60 backdrop-blur-md border border-border/40"
          }`}
        >
          {/* Logo */}
          <Link 
            href="/" 
            className="flex items-center gap-2 group text-left"
          >
            <div className="w-9 h-9 rounded-xl bg-gradient-to-tr from-indigo-600 via-blue-500 to-cyan-400 p-0.5 flex items-center justify-center shadow-lg shadow-indigo-500/20 group-hover:scale-105 transition-transform duration-300">
              <div className="w-full h-full bg-background rounded-[10px] flex items-center justify-center">
                <Sparkles className="w-4 h-4 text-cyan-500 dark:text-cyan-400 group-hover:rotate-12 transition-transform duration-300" />
              </div>
            </div>
            <span className="font-extrabold text-lg text-foreground tracking-tight group-hover:text-primary transition-colors">
              Arshad<span className="gradient-text">.dev</span>
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-1 bg-secondary/60 p-1.5 rounded-full border border-border/40">
            {navItems.map((item) => {
              const isActive = item.isPage 
                ? pathname.startsWith("/journal") 
                : pathname === "/" && activeSection === item.id

              return (
                <button
                  key={item.href}
                  onClick={() => handleNavClick(item.href, item.isPage)}
                  className={`px-4 py-1.5 rounded-full text-sm font-medium transition-all duration-300 relative ${
                    isActive
                      ? "text-primary-foreground bg-primary shadow-md shadow-indigo-500/25 font-semibold"
                      : "text-muted-foreground hover:text-foreground hover:bg-secondary"
                  }`}
                >
                  {item.label}
                </button>
              )
            })}
          </nav>

          {/* Action Buttons */}
          <div className="flex items-center gap-2">
            <Button
              variant="outline"
              size="sm"
              onClick={() => window.open("/cv", "_blank")}
              className="hidden lg:flex items-center gap-2 text-xs font-semibold rounded-full border-primary/40 bg-primary/10 hover:bg-primary hover:text-primary-foreground transition-all duration-300 shadow-sm"
            >
              <FileText className="w-3.5 h-3.5" />
              CV / Resume
            </Button>

            <Button
              variant="ghost"
              size="icon"
              asChild
              className="rounded-full hover:bg-secondary text-muted-foreground hover:text-foreground transition-transform hover:scale-110"
            >
              <a
                href="https://github.com/arshadmehmood1"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub Profile"
              >
                <Github className="h-4 w-4" />
              </a>
            </Button>

            <Button
              variant="ghost"
              size="icon"
              asChild
              className="rounded-full hover:bg-secondary text-muted-foreground hover:text-foreground transition-transform hover:scale-110"
            >
              <a
                href="https://www.linkedin.com/in/arshad-mehmood-a0075b375"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn Profile"
              >
                <Linkedin className="h-4 w-4" />
              </a>
            </Button>

            {mounted && (
              <Button
                variant="ghost"
                size="icon"
                onClick={toggleTheme}
                className="rounded-full hover:bg-secondary text-muted-foreground hover:text-foreground transition-transform hover:scale-110"
                aria-label="Toggle theme"
              >
                {theme === "dark" ? <Sun className="h-4 w-4 text-amber-400" /> : <Moon className="h-4 w-4 text-indigo-600" />}
              </Button>
            )}

            {/* Mobile Menu Button */}
            <Button
              variant="ghost"
              size="icon"
              className="md:hidden rounded-full hover:bg-secondary"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation Drawer */}
        {isMobileMenuOpen && (
          <div className="md:hidden mt-3 p-4 glass-panel rounded-2xl border border-border shadow-2xl animate-fade-in-up">
            <nav className="flex flex-col space-y-2">
              {navItems.map((item) => {
                const isActive = item.isPage 
                  ? pathname.startsWith("/journal") 
                  : pathname === "/" && activeSection === item.id

                return (
                  <button
                    key={item.href}
                    onClick={() => handleNavClick(item.href, item.isPage)}
                    className={`w-full text-left px-4 py-2.5 rounded-xl text-sm font-medium transition-colors ${
                      isActive
                        ? "bg-primary text-primary-foreground font-semibold"
                        : "text-muted-foreground hover:text-foreground hover:bg-secondary"
                    }`}
                  >
                    {item.label}
                  </button>
                )
              })}
              <Button
                onClick={() => {
                  window.open("/cv", "_blank")
                  setIsMobileMenuOpen(false)
                }}
                className="w-full mt-2 font-semibold rounded-xl bg-primary text-primary-foreground flex items-center justify-center gap-2"
              >
                <FileText className="w-4 h-4" />
                View CV / Resume
              </Button>
            </nav>
          </div>
        )}
      </div>
    </header>
  )
}
