"use client"

import { Button } from "@/components/ui/button"
import { Download, Mail, Phone, MapPin, Globe, Github, Linkedin, ArrowLeft } from "lucide-react"

export default function CVPage() {
  const handlePrint = () => {
    window.print()
  }

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 py-6 px-4">
      {/* Top Header Bar - Hidden in Print */}
      <div className="print:hidden max-w-4xl mx-auto mb-6 flex justify-between items-center bg-slate-900/80 backdrop-blur-md p-4 rounded-2xl border border-slate-800 shadow-xl">
        <Button 
          variant="ghost" 
          onClick={() => window.location.href = "/"} 
          className="text-slate-300 hover:text-white hover:bg-slate-800"
        >
          <ArrowLeft className="mr-2 h-4 w-4" />
          Back to Portfolio
        </Button>
        
        <div className="flex items-center gap-3">
          <Button onClick={handlePrint} className="bg-blue-600 hover:bg-blue-500 text-white font-semibold rounded-xl px-5">
            <Download className="mr-2 h-4 w-4" />
            Print / Save as PDF
          </Button>
        </div>
      </div>

      {/* CV Document Container */}
      <div className="max-w-4xl mx-auto bg-white text-slate-900 rounded-2xl shadow-2xl overflow-hidden print:shadow-none print:rounded-none">
        
        {/* Header Banner */}
        <div className="bg-gradient-to-r from-slate-900 via-indigo-950 to-slate-900 text-white p-8 border-b-4 border-blue-600">
          <div className="text-center md:text-left flex flex-col md:flex-row justify-between items-center gap-6">
            <div>
              <h1 className="text-4xl font-extrabold tracking-tight mb-1 text-white">Arshad Mehmood</h1>
              <p className="text-lg text-blue-400 font-semibold mb-3">
                Full-Stack & AI Software Engineer
              </p>
              <p className="text-xs text-slate-300 max-w-xl">
                Specializing in AI pipelines, edge computer vision (TFLite), cross-platform desktop/mobile apps, and scalable web architectures.
              </p>
            </div>

            <div className="flex flex-col gap-2 text-xs text-slate-300 font-medium">
              <div className="flex items-center gap-2">
                <Phone className="h-3.5 w-3.5 text-blue-400" />
                <span>0334-0698153</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="h-3.5 w-3.5 text-blue-400" />
                <span>arshadmehm3273@gmail.com</span>
              </div>
              <div className="flex items-center gap-2">
                <MapPin className="h-3.5 w-3.5 text-blue-400" />
                <span>Toba Tek Singh, Pakistan</span>
              </div>
              <div className="flex items-center gap-2">
                <Github className="h-3.5 w-3.5 text-blue-400" />
                <span>github.com/arshadmehmood1</span>
              </div>
            </div>
          </div>
        </div>

        {/* Professional Summary */}
        <div className="p-8 pb-6 border-b border-slate-100">
          <h2 className="text-lg font-bold text-slate-900 uppercase tracking-wider mb-3 flex items-center gap-2 text-blue-600">
            Professional Summary
          </h2>
          <p className="text-sm text-slate-700 leading-relaxed">
            Innovative and results-driven Software Engineer with expertise in building edge AI applications, automated cloud pipelines, and full-stack web/mobile platforms. Proficient in integrating machine learning models (TensorFlow Lite, PyTorch, scikit-learn) with responsive user interfaces (React, Next.js, Android Kotlin, Electron). Passionate about high-performance software engineering, modern user experience, and secure architecture.
          </p>
        </div>

        {/* Technical Skills */}
        <div className="p-8 pb-6 border-b border-slate-100 bg-slate-50/50">
          <h2 className="text-lg font-bold text-slate-900 uppercase tracking-wider mb-4 text-blue-600">
            Technical Skills & Expertise
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs">
            <div className="bg-white p-3 rounded-lg border border-slate-200">
              <span className="font-bold text-slate-900 block mb-1">AI & Machine Learning:</span>
              <span className="text-slate-700">TensorFlow Lite, PyTorch, Edge AI, OpenCV, scikit-learn, NLP & LLMs, RunPod Cloud GPU Automation</span>
            </div>
            <div className="bg-white p-3 rounded-lg border border-slate-200">
              <span className="font-bold text-slate-900 block mb-1">Frontend & Cross-Platform:</span>
              <span className="text-slate-700">ReactJS, Next.js, Android (Kotlin), Electron Desktop, Vite, Tailwind CSS, JavaScript (ES6+)</span>
            </div>
            <div className="bg-white p-3 rounded-lg border border-slate-200">
              <span className="font-bold text-slate-900 block mb-1">Backend & Databases:</span>
              <span className="text-slate-700">Node.js, Express.js, Python (Django/FastAPI), Supabase BaaS, SQLite, PostgreSQL, MongoDB</span>
            </div>
            <div className="bg-white p-3 rounded-lg border border-slate-200">
              <span className="font-bold text-slate-900 block mb-1">Tools & Media Architecture:</span>
              <span className="text-slate-700">FFmpeg Video Processing, WorkManager Sync, REST APIs, Git, GitHub CLI, Vercel</span>
            </div>
          </div>
        </div>

        {/* Major Featured Projects */}
        <div className="p-8 pb-6 border-b border-slate-100">
          <h2 className="text-lg font-bold text-slate-900 uppercase tracking-wider mb-4 text-blue-600">
            Featured Portfolio Projects
          </h2>
          
          <div className="space-y-4 text-xs">
            <div className="p-3 bg-slate-50 rounded-lg border border-slate-200">
              <div className="flex justify-between items-center mb-1">
                <span className="font-bold text-sm text-slate-900">RunPod Full YouTube Automation Pipeline</span>
                <span className="text-blue-600 font-semibold">Python | Cloud GPU | FFmpeg</span>
              </div>
              <p className="text-slate-700">
                15-stage autonomous video generation pipeline operating on remote RunPod instances. Automates topic generation, LLM scripting, voice synthesis, image upscaling, and FFmpeg multiplexing.
              </p>
            </div>

            <div className="p-3 bg-slate-50 rounded-lg border border-slate-200">
              <div className="flex justify-between items-center mb-1">
                <span className="font-bold text-sm text-slate-900">Driver Monitoring System (DMS)</span>
                <span className="text-blue-600 font-semibold">Android (Kotlin) | TensorFlow Lite | Firebase</span>
              </div>
              <p className="text-slate-700">
                Native Android app monitoring driver attentiveness in real-time using on-device TFLite models, background location mapping, and Firebase incident syncing.
              </p>
            </div>

            <div className="p-3 bg-slate-50 rounded-lg border border-slate-200">
              <div className="flex justify-between items-center mb-1">
                <span className="font-bold text-sm text-slate-900">Bike POS (Point of Sale Desktop App)</span>
                <span className="text-blue-600 font-semibold">Electron | React | SQLite</span>
              </div>
              <p className="text-slate-700">
                Cross-platform desktop POS application tailored for spare parts inventory management, featuring local SQLite storage, IPC IPC bridge, and PDF receipt printing.
              </p>
            </div>

            <div className="p-3 bg-slate-50 rounded-lg border border-slate-200">
              <div className="flex justify-between items-center mb-1">
                <span className="font-bold text-sm text-slate-900">SafeRoute Web & StudySuite Platform</span>
                <span className="text-blue-600 font-semibold">React | Supabase | Full Stack</span>
              </div>
              <p className="text-slate-700">
                Full-stack web applications featuring interactive routing analytics (SafeRoute) and modular educational management workflows (StudySuite).
              </p>
            </div>
          </div>
        </div>

        {/* Education */}
        <div className="p-8">
          <h2 className="text-lg font-bold text-slate-900 uppercase tracking-wider mb-4 text-blue-600">
            Education
          </h2>
          <div className="space-y-3 text-xs">
            <div className="flex justify-between items-start">
              <div>
                <h3 className="font-bold text-slate-900 text-sm">BS Software Engineering (Ongoing)</h3>
                <p className="text-slate-600">University of Management and Technology</p>
              </div>
              <span className="bg-blue-50 text-blue-700 font-medium px-2.5 py-1 rounded-md border border-blue-200">2022 – Present</span>
            </div>
            <div className="flex justify-between items-start">
              <div>
                <h3 className="font-bold text-slate-900">Intermediate in Computer Science</h3>
                <p className="text-slate-600">Standard College, Toba Tek Singh</p>
              </div>
              <span className="text-slate-500">Completed</span>
            </div>
          </div>
        </div>

      </div>

      {/* Print Specific Overrides */}
      <style jsx global>{`
        @media print {
          body { 
            background: white !important;
            color: black !important;
            -webkit-print-color-adjust: exact !important;
            color-adjust: exact !important;
          }
          .print\\:hidden { display: none !important; }
          .max-w-4xl { max-width: 100% !important; margin: 0 !important; }
          .shadow-2xl { box-shadow: none !important; }
          .rounded-2xl { border-radius: 0 !important; }
        }
      `}</style>
    </div>
  )
}

