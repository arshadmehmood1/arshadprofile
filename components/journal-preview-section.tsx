import Link from "next/link"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ARTICLES } from "@/lib/blog-data"
import { BookOpen, Calendar, Clock, ArrowRight, ArrowUpRight } from "lucide-react"

export function JournalPreviewSection() {
  // Take top 3 featured articles for homepage preview
  const featuredArticles = ARTICLES.slice(0, 3)

  return (
    <section id="journal" className="py-24 relative overflow-hidden bg-dots-pattern border-t border-border/50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-12">
        <div className="max-w-5xl mx-auto">
          
          {/* Section Header */}
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full glass-card border-indigo-500/30 bg-indigo-500/10 mb-4">
              <BookOpen className="w-4 h-4 text-indigo-600 dark:text-indigo-400" />
              <span className="text-xs font-bold uppercase tracking-wider text-indigo-600 dark:text-indigo-400">
                Engineering Journal & Articles
              </span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-foreground tracking-tight mb-4">
              Latest <span className="gradient-text">Journal & Articles</span>
            </h2>
            <p className="text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto">
              Architectural deep dives, engineering post-mortems, and technical writeups from my software projects.
            </p>
          </div>

          {/* 3 Featured Articles Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            {featuredArticles.map((article) => (
              <Card
                key={article.slug}
                className="glass-card glass-card-hover rounded-3xl p-6 border border-slate-200/80 dark:border-slate-800 flex flex-col justify-between transition-all duration-300 group"
              >
                <div>
                  {/* Category & Read Time */}
                  <div className="flex items-center justify-between text-xs text-muted-foreground mb-4">
                    <span className="px-2.5 py-0.5 rounded-md text-[11px] font-bold bg-indigo-50 dark:bg-indigo-950/60 text-indigo-700 dark:text-indigo-300 border border-indigo-200/60 dark:border-indigo-800/50">
                      {article.category}
                    </span>
                    <span className="flex items-center gap-1">
                      <Clock className="w-3 h-3 text-cyan-600 dark:text-cyan-400" />
                      {article.readTime}
                    </span>
                  </div>

                  {/* Title & Subtitle */}
                  <Link href={`/journal/${article.slug}`}>
                    <h3 className="text-base font-bold text-foreground mb-2 leading-snug group-hover:text-primary transition-colors line-clamp-2">
                      {article.title}
                    </h3>
                  </Link>
                  <p className="text-xs font-semibold text-primary mb-3 line-clamp-1">
                    {article.subtitle}
                  </p>

                  {/* Excerpt */}
                  <p className="text-xs text-muted-foreground leading-relaxed mb-5 line-clamp-3">
                    {article.summary}
                  </p>
                </div>

                <div>
                  {/* Tech Chips */}
                  <div className="flex flex-wrap gap-1 mb-5">
                    {article.tech.slice(0, 3).map((t) => (
                      <span
                        key={t}
                        className="px-2 py-0.5 bg-slate-100 dark:bg-slate-800/80 text-slate-700 dark:text-slate-300 rounded-md text-[10px] font-semibold border border-slate-200/80 dark:border-slate-700/60"
                      >
                        {t}
                      </span>
                    ))}
                  </div>

                  {/* Read Link */}
                  <Button
                    asChild
                    variant="outline"
                    className="w-full font-semibold rounded-xl border-border bg-background hover:bg-secondary text-xs py-2 flex items-center justify-center gap-2 group-hover:border-primary/40 transition-colors"
                  >
                    <Link href={`/journal/${article.slug}`}>
                      Read Article
                      <ArrowUpRight className="w-3.5 h-3.5" />
                    </Link>
                  </Button>
                </div>
              </Card>
            ))}
          </div>

          {/* View All Articles Link Button */}
          <div className="text-center">
            <Button
              asChild
              size="lg"
              className="font-bold rounded-full bg-primary text-primary-foreground hover:opacity-90 px-8 py-6 shadow-lg shadow-indigo-500/20 flex items-center justify-center gap-2 mx-auto"
            >
              <Link href="/journal">
                Explore All Journal Articles & Case Studies
                <ArrowRight className="w-4 h-4" />
              </Link>
            </Button>
          </div>

        </div>
      </div>
    </section>
  )
}
