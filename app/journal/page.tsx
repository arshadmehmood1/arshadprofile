"use client"

import { useState } from "react"
import Link from "next/link"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { ARTICLES } from "@/lib/blog-data"
import { BookOpen, Calendar, Clock, ArrowRight, Search, Sparkles } from "lucide-react"

export default function JournalPage() {
  const [selectedCategory, setSelectedCategory] = useState("All")
  const [searchQuery, setSearchQuery] = useState("")

  const categories = ["All", "Cloud & AI", "Edge & Mobile", "Full-Stack", "Desktop & POS", "Data Science"]

  const filteredArticles = ARTICLES.filter((art) => {
    const matchesCategory = selectedCategory === "All" || art.category === selectedCategory
    const matchesSearch =
      art.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      art.summary.toLowerCase().includes(searchQuery.toLowerCase()) ||
      art.tech.some((t) => t.toLowerCase().includes(searchQuery.toLowerCase()))
    return matchesCategory && matchesSearch
  })

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header />

      <main className="pt-28 pb-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-12">
          <div className="max-w-5xl mx-auto">
            
            {/* Page Header */}
            <div className="text-center mb-14 animate-fade-in-up">
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass-card border-indigo-500/30 bg-indigo-500/10 mb-4">
                <BookOpen className="w-4 h-4 text-indigo-600 dark:text-indigo-400" />
                <span className="text-xs font-bold uppercase tracking-wider text-indigo-600 dark:text-indigo-400">
                  Engineering Journal & Articles
                </span>
              </div>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-foreground tracking-tight mb-4">
                Software & AI <span className="gradient-text">Tech Blog</span>
              </h1>
              <p className="text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto">
                Architectural deep dives, engineering post-mortems, and technical tutorials from my open-source software projects.
              </p>
            </div>

            {/* Search and Category Filter */}
            <div className="flex flex-col sm:flex-row items-center justify-between gap-4 mb-12 animate-fade-in-up animate-delay-100">
              
              {/* Category Pills */}
              <div className="flex flex-wrap justify-center sm:justify-start gap-2 w-full sm:w-auto">
                {categories.map((cat) => (
                  <button
                    key={cat}
                    onClick={() => setSelectedCategory(cat)}
                    className={`px-4 py-1.5 rounded-full text-xs font-semibold transition-all duration-200 ${
                      selectedCategory === cat
                        ? "bg-primary text-primary-foreground font-bold shadow-sm"
                        : "bg-slate-100 dark:bg-slate-800/60 text-slate-600 dark:text-slate-300 hover:text-foreground hover:bg-slate-200 dark:hover:bg-slate-800 border border-slate-200/80 dark:border-slate-700/50"
                    }`}
                  >
                    {cat}
                  </button>
                ))}
              </div>

              {/* Search Box */}
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
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {filteredArticles.map((article) => (
                <Card
                  key={article.slug}
                  className="glass-card glass-card-hover rounded-3xl p-6 sm:p-7 border border-slate-200/80 dark:border-slate-800 flex flex-col justify-between transition-all duration-300 group"
                >
                  <div>
                    {/* Meta bar */}
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
                      <span className="px-2.5 py-0.5 rounded-md text-[11px] font-bold bg-indigo-50 dark:bg-indigo-950/60 text-indigo-700 dark:text-indigo-300 border border-indigo-200/60 dark:border-indigo-800/50">
                        {article.category}
                      </span>
                    </div>

                    {/* Title & Subtitle */}
                    <Link href={`/journal/${article.slug}`}>
                      <h2 className="text-xl font-bold text-foreground mb-2 leading-snug group-hover:text-primary transition-colors cursor-pointer">
                        {article.title}
                      </h2>
                    </Link>
                    <p className="text-xs font-semibold text-primary mb-3">
                      {article.subtitle}
                    </p>

                    {/* Summary */}
                    <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed mb-6">
                      {article.summary}
                    </p>
                  </div>

                  <div>
                    {/* Tech Chips */}
                    <div className="flex flex-wrap gap-1.5 mb-6">
                      {article.tech.map((t) => (
                        <span
                          key={t}
                          className="px-2.5 py-0.5 bg-slate-100 dark:bg-slate-800/80 text-slate-700 dark:text-slate-300 rounded-md text-[11px] font-semibold border border-slate-200/80 dark:border-slate-700/60"
                        >
                          {t}
                        </span>
                      ))}
                    </div>

                    {/* Read Article Link Button */}
                    <Button
                      asChild
                      className="w-full font-bold rounded-xl bg-primary text-primary-foreground hover:opacity-90 text-xs py-2.5 flex items-center justify-center gap-2 shadow-sm transition-transform duration-200 group-hover:translate-x-0.5"
                    >
                      <Link href={`/journal/${article.slug}`}>
                        Read Full Article
                        <ArrowRight className="w-3.5 h-3.5" />
                      </Link>
                    </Button>
                  </div>
                </Card>
              ))}
            </div>

          </div>
        </div>
      </main>

      <Footer />
    </div>
  )
}
