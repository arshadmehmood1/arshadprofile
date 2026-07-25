import { notFound } from "next/navigation"
import Link from "next/link"
import Image from "next/image"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { ARTICLES } from "@/lib/blog-data"
import { Calendar, Clock, ArrowLeft, Github, BookOpen, Sparkles, Cpu, CheckCircle2, Share2, Tag } from "lucide-react"

export async function generateStaticParams() {
  return ARTICLES.map((article) => ({
    slug: article.slug,
  }))
}

export default async function BlogPostPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const article = ARTICLES.find((a) => a.slug === slug)

  if (!article) {
    notFound()
  }

  const relatedArticles = ARTICLES.filter((a) => a.slug !== slug).slice(0, 2)

  return (
    <div className="min-h-screen bg-background text-foreground transition-colors duration-300">
      <Header />

      <main className="pt-28 pb-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-12">
          <article className="max-w-4xl mx-auto">
            
            {/* Back Button & Breadcrumbs */}
            <div className="mb-8 flex items-center justify-between">
              <Button
                variant="outline"
                size="sm"
                asChild
                className="rounded-full border-border bg-background hover:bg-secondary text-xs font-semibold"
              >
                <Link href="/journal" className="flex items-center gap-2">
                  <ArrowLeft className="w-3.5 h-3.5" />
                  Back to All Articles
                </Link>
              </Button>

              <div className="flex items-center gap-2 text-xs text-muted-foreground">
                <Link href="/" className="hover:text-foreground">Home</Link>
                <span>/</span>
                <Link href="/journal" className="hover:text-foreground">Journal</Link>
                <span>/</span>
                <span className="text-foreground font-semibold truncate max-w-[150px] sm:max-w-[250px]">{article.category}</span>
              </div>
            </div>

            {/* Article Title & Subtitle Banner */}
            <div className="mb-10 p-8 sm:p-10 rounded-3xl glass-card border border-border shadow-xl relative overflow-hidden">
              <div className="flex flex-wrap items-center gap-3 text-xs text-muted-foreground mb-4">
                <span className="px-3 py-1 rounded-md font-bold bg-indigo-50 dark:bg-indigo-950/60 text-indigo-700 dark:text-indigo-300 border border-indigo-200/60 dark:border-indigo-800/50">
                  {article.category}
                </span>
                <span>•</span>
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

              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-foreground tracking-tight leading-tight mb-4">
                {article.title}
              </h1>
              <p className="text-base sm:text-xl font-semibold text-primary leading-relaxed">
                {article.subtitle}
              </p>

              {/* Author & Repository Bar */}
              <div className="mt-8 pt-6 border-t border-border flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div className="flex items-center gap-3">
                  <div className="w-11 h-11 rounded-full overflow-hidden border border-border bg-secondary shrink-0">
                    <Image
                      src={article.author.avatar}
                      alt={article.author.name}
                      width={44}
                      height={44}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-foreground leading-none mb-1">{article.author.name}</h4>
                    <p className="text-xs text-muted-foreground">{article.author.role}</p>
                  </div>
                </div>

                <Button
                  onClick={undefined}
                  asChild
                  variant="outline"
                  size="sm"
                  className="rounded-xl border-border bg-background hover:bg-secondary text-xs font-semibold flex items-center gap-2"
                >
                  <a href={article.github} target="_blank" rel="noopener noreferrer">
                    <Github className="w-4 h-4" />
                    View Repository on GitHub
                  </a>
                </Button>
              </div>
            </div>

            {/* Main Article Body Content */}
            <div className="glass-card rounded-3xl p-8 sm:p-12 border border-border shadow-lg space-y-8 text-base text-foreground/90 leading-relaxed">
              
              {/* Executive Overview */}
              <div className="prose prose-indigo dark:prose-invert max-w-none">
                <h2 className="text-xl sm:text-2xl font-bold text-foreground mb-3 flex items-center gap-2">
                  <BookOpen className="w-5 h-5 text-indigo-600 dark:text-indigo-400" />
                  Executive Overview
                </h2>
                <p className="text-muted-foreground text-sm sm:text-base leading-relaxed">
                  {article.content.overview}
                </p>
              </div>

              {/* Dynamic Content Sections */}
              {article.content.sections.map((section, idx) => (
                <div key={idx} className="space-y-4 pt-4 border-t border-border/60">
                  <h3 className="text-lg sm:text-xl font-bold text-foreground flex items-center gap-2">
                    <Cpu className="w-5 h-5 text-cyan-600 dark:text-cyan-400" />
                    {section.heading}
                  </h3>
                  <p className="text-muted-foreground text-sm sm:text-base leading-relaxed">
                    {section.body}
                  </p>

                  {/* Code Snippet Box */}
                  {section.codeSnippet && (
                    <div className="my-4 rounded-2xl bg-slate-950 text-slate-100 p-5 overflow-x-auto border border-slate-800 text-xs sm:text-sm font-mono shadow-md">
                      <div className="flex items-center justify-between text-[11px] text-slate-400 border-b border-slate-800 pb-2 mb-3">
                        <span className="uppercase tracking-wider font-semibold">{section.codeSnippet.language}</span>
                        <span>Snippet</span>
                      </div>
                      <pre className="leading-relaxed">
                        <code>{section.codeSnippet.code}</code>
                      </pre>
                    </div>
                  )}
                </div>
              ))}

              {/* Key Technical Takeaways */}
              <div className="p-6 rounded-2xl bg-indigo-500/10 border border-indigo-500/20 space-y-3">
                <h3 className="text-lg font-bold text-indigo-700 dark:text-indigo-300 flex items-center gap-2">
                  <CheckCircle2 className="w-5 h-5 text-indigo-600 dark:text-indigo-400" />
                  Key Engineering Takeaways
                </h3>
                <ul className="space-y-2 text-xs sm:text-sm text-muted-foreground">
                  {article.content.keyTakeaways.map((takeaway, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 shrink-0" />
                      <span>{takeaway}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Tech Stack Chips */}
              <div className="pt-6 border-t border-border flex flex-wrap items-center justify-between gap-4">
                <div className="flex items-center gap-2">
                  <Tag className="w-4 h-4 text-muted-foreground" />
                  <span className="text-xs font-semibold text-muted-foreground">Tech Stack:</span>
                  <div className="flex flex-wrap gap-1.5">
                    {article.tech.map((t) => (
                      <span
                        key={t}
                        className="px-2.5 py-0.5 bg-slate-100 dark:bg-slate-800/80 text-slate-700 dark:text-slate-300 rounded-md text-[11px] font-semibold border border-slate-200/80 dark:border-slate-700/60"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>

                <Button
                  asChild
                  className="font-bold rounded-xl bg-primary text-primary-foreground text-xs"
                >
                  <a href={article.github} target="_blank" rel="noopener noreferrer">
                    View on GitHub
                  </a>
                </Button>
              </div>

            </div>

            {/* Related Articles Footer */}
            <div className="mt-14 pt-10 border-t border-border">
              <h3 className="text-xl font-bold text-foreground mb-6 flex items-center gap-2">
                <Sparkles className="w-5 h-5 text-indigo-600 dark:text-indigo-400" />
                More Articles & Project Writeups
              </h3>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {relatedArticles.map((rel) => (
                  <Link
                    key={rel.slug}
                    href={`/journal/${rel.slug}`}
                    className="glass-card glass-card-hover rounded-2xl p-5 border border-border block transition-all"
                  >
                    <span className="text-[11px] font-semibold text-primary block mb-1">{rel.category}</span>
                    <h4 className="font-bold text-foreground text-sm leading-snug mb-2 hover:text-primary transition-colors">
                      {rel.title}
                    </h4>
                    <p className="text-xs text-muted-foreground line-clamp-2">{rel.summary}</p>
                  </Link>
                ))}
              </div>
            </div>

          </article>
        </div>
      </main>

      <Footer />
    </div>
  )
}
