"use client"

import type React from "react"
import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Mail, Send, Phone, MapPin, MessageSquare, Check, Copy } from "lucide-react"
import { useToast } from "@/hooks/use-toast"

export function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  })
  const [copiedEmail, setCopiedEmail] = useState(false)
  const [copiedPhone, setCopiedPhone] = useState(false)
  const { toast } = useToast()

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()

    toast({
      title: "Message sent!",
      description: "Thank you for getting in touch. I'll respond within 24 hours.",
    })

    setFormData({ name: "", email: "", message: "" })
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }))
  }

  const copyToClipboard = (text: string, type: "email" | "phone") => {
    navigator.clipboard.writeText(text)
    if (type === "email") {
      setCopiedEmail(true)
      setTimeout(() => setCopiedEmail(false), 2000)
    } else {
      setCopiedPhone(true)
      setTimeout(() => setCopiedPhone(false), 2000)
    }
    toast({
      title: "Copied to clipboard!",
      description: text,
    })
  }

  return (
    <section id="contact" className="py-24 relative overflow-hidden bg-dots-pattern">
      <div className="container mx-auto px-4 sm:px-6 lg:px-12">
        <div className="max-w-5xl mx-auto">
          
          {/* Section Header */}
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full glass-card border-indigo-500/30 bg-indigo-500/10 mb-4">
              <MessageSquare className="w-4 h-4 text-indigo-600 dark:text-indigo-400" />
              <span className="text-xs font-bold uppercase tracking-wider text-indigo-600 dark:text-indigo-400">Get In Touch</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-foreground tracking-tight mb-4">
              Let's Build Something <span className="gradient-text">Great Together</span>
            </h2>
            <p className="text-base sm:text-lg text-muted-foreground max-w-xl mx-auto">
              Open for full-stack engineering, AI development, edge deployment, and technical collaborations.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            
            {/* Form Card */}
            <Card className="glass-card glass-card-hover rounded-3xl p-6 border border-border shadow-lg">
              <CardHeader className="p-0 mb-6">
                <CardTitle className="flex items-center gap-3 text-xl font-bold text-foreground">
                  <div className="p-2.5 rounded-xl bg-secondary border border-border text-indigo-600 dark:text-indigo-400">
                    <Mail className="h-5 w-5" />
                  </div>
                  Send a Direct Message
                </CardTitle>
              </CardHeader>
              <CardContent className="p-0">
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <Input 
                      name="name" 
                      placeholder="Your Name" 
                      value={formData.name} 
                      onChange={handleChange} 
                      required 
                      className="glass-card rounded-xl border-border focus:border-primary focus:ring-primary/20 py-3 text-foreground placeholder:text-muted-foreground"
                    />
                  </div>
                  <div>
                    <Input
                      name="email"
                      type="email"
                      placeholder="Your Email Address"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="glass-card rounded-xl border-border focus:border-primary focus:ring-primary/20 py-3 text-foreground placeholder:text-muted-foreground"
                    />
                  </div>
                  <div>
                    <Textarea
                      name="message"
                      placeholder="Project details, inquiries, or greetings..."
                      rows={5}
                      value={formData.message}
                      onChange={handleChange}
                      required
                      className="glass-card rounded-xl border-border focus:border-primary focus:ring-primary/20 text-foreground placeholder:text-muted-foreground resize-none"
                    />
                  </div>
                  <Button 
                    type="submit" 
                    className="w-full font-bold rounded-xl bg-gradient-to-r from-indigo-600 to-cyan-600 dark:from-indigo-600 dark:to-cyan-500 hover:opacity-95 text-white shadow-xl shadow-indigo-500/20 py-6 transition-all duration-300 hover:scale-[1.02] flex items-center justify-center gap-2"
                  >
                    <Send className="h-4 w-4" />
                    Send Message
                  </Button>
                </form>
              </CardContent>
            </Card>

            {/* Quick Contact & Info Card */}
            <Card className="glass-card glass-card-hover rounded-3xl p-6 border border-border shadow-lg flex flex-col justify-between">
              <div>
                <CardHeader className="p-0 mb-6">
                  <CardTitle className="text-xl font-bold text-foreground">Contact Details & Channels</CardTitle>
                </CardHeader>
                
                <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed mb-6">
                  Whether you have a question about AI pipeline architecture, desktop/mobile app development, or potential engineering roles, feel free to reach out directly.
                </p>

                <div className="space-y-4 mb-6">
                  
                  {/* Email Button */}
                  <div className="flex items-center justify-between p-3.5 rounded-2xl bg-secondary border border-border">
                    <div className="flex items-center gap-3 overflow-hidden">
                      <div className="p-2 rounded-xl bg-indigo-500/10 text-indigo-600 dark:text-indigo-400">
                        <Mail className="h-4 w-4" />
                      </div>
                      <div className="truncate">
                        <p className="text-[11px] font-medium text-muted-foreground">Email Address</p>
                        <p className="text-xs font-semibold text-foreground truncate">arshadmehm3273@gmail.com</p>
                      </div>
                    </div>
                    <Button
                      size="sm"
                      variant="ghost"
                      onClick={() => copyToClipboard("arshadmehm3273@gmail.com", "email")}
                      className="rounded-xl hover:bg-background text-muted-foreground hover:text-foreground"
                    >
                      {copiedEmail ? <Check className="w-4 h-4 text-emerald-600 dark:text-emerald-400" /> : <Copy className="w-4 h-4" />}
                    </Button>
                  </div>

                  {/* Phone Button */}
                  <div className="flex items-center justify-between p-3.5 rounded-2xl bg-secondary border border-border">
                    <div className="flex items-center gap-3">
                      <div className="p-2 rounded-xl bg-cyan-500/10 text-cyan-600 dark:text-cyan-400">
                        <Phone className="h-4 w-4" />
                      </div>
                      <div>
                        <p className="text-[11px] font-medium text-muted-foreground">Phone / WhatsApp</p>
                        <p className="text-xs font-semibold text-foreground">+92 334 0698153</p>
                      </div>
                    </div>
                    <Button
                      size="sm"
                      variant="ghost"
                      onClick={() => copyToClipboard("+923340698153", "phone")}
                      className="rounded-xl hover:bg-background text-muted-foreground hover:text-foreground"
                    >
                      {copiedPhone ? <Check className="w-4 h-4 text-emerald-600 dark:text-emerald-400" /> : <Copy className="w-4 h-4" />}
                    </Button>
                  </div>

                  {/* Location Info */}
                  <div className="flex items-center gap-3 p-3.5 rounded-2xl bg-secondary border border-border">
                    <div className="p-2 rounded-xl bg-emerald-500/10 text-emerald-600 dark:text-emerald-400">
                      <MapPin className="h-4 w-4" />
                    </div>
                    <div>
                      <p className="text-[11px] font-medium text-muted-foreground">Location</p>
                      <p className="text-xs font-semibold text-foreground">Toba Tek Singh / Lahore, Pakistan</p>
                    </div>
                  </div>

                </div>
              </div>

              <div className="p-4 rounded-2xl bg-indigo-500/10 border border-indigo-500/20 text-center">
                <p className="text-xs font-semibold text-indigo-700 dark:text-indigo-300">
                  ⚡ Response Time: Typically within 2-4 hours.
                </p>
              </div>
            </Card>

          </div>

        </div>
      </div>
    </section>
  )
}
