"use client"

import { Button } from "@/components/ui/button"
import { Download, Mail, Phone, MapPin, Github, Linkedin, ArrowLeft, Globe, Briefcase, GraduationCap, Code2, Sparkles, CheckCircle2 } from "lucide-react"

export default function CVPage() {
  const handlePrint = () => {
    window.print()
  }

  return (
    <div className="min-h-screen bg-slate-100 dark:bg-slate-950 text-slate-900 dark:text-slate-100 py-8 px-4 font-sans transition-colors duration-300">
      
      {/* Top Header Bar - Hidden in Print */}
      <div className="print:hidden max-w-4xl mx-auto mb-6 flex flex-col sm:flex-row justify-between items-center gap-4 bg-white dark:bg-slate-900 p-4 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-lg">
        <Button 
          variant="outline" 
          onClick={() => window.location.href = "/"} 
          className="rounded-xl border-slate-300 dark:border-slate-700 text-xs font-semibold"
        >
          <ArrowLeft className="mr-2 h-4 w-4" />
          Back to Portfolio
        </Button>
        
        <div className="flex items-center gap-3">
          <Button 
            onClick={handlePrint} 
            className="bg-indigo-600 hover:bg-indigo-700 text-white font-bold rounded-xl px-6 text-xs shadow-md shadow-indigo-500/20"
          >
            <Download className="mr-2 h-4 w-4" />
            Download ATS Resume / Print PDF
          </Button>
        </div>
      </div>

      {/* CV Document Container - Clean ATS Single-Column Document */}
      <div className="max-w-4xl mx-auto bg-white text-slate-900 p-8 sm:p-12 rounded-2xl shadow-xl print:shadow-none print:rounded-none print:p-0 print:m-0 border border-slate-200 print:border-none">
        
        {/* ATS Standard Resume Header */}
        <header className="border-b-2 border-slate-900 pb-6 mb-6 text-center md:text-left">
          <div className="flex flex-col md:flex-row justify-between items-center md:items-start gap-4">
            <div>
              <h1 className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight uppercase mb-1">
                Arshad Mehmood
              </h1>
              <p className="text-base sm:text-lg font-bold text-indigo-700 tracking-wide uppercase">
                Full-Stack & AI Software Engineer
              </p>
            </div>

            {/* Contact Line - Single line formatted for ATS parsers */}
            <div className="flex flex-col gap-1 text-xs text-slate-700 font-medium text-center md:text-right">
              <div className="flex items-center justify-center md:justify-end gap-2">
                <Phone className="h-3.5 w-3.5 text-indigo-600 print:hidden" />
                <span>+92 334 0698153</span>
              </div>
              <div className="flex items-center justify-center md:justify-end gap-2">
                <Mail className="h-3.5 w-3.5 text-indigo-600 print:hidden" />
                <a href="mailto:arshadmehm3273@gmail.com" className="hover:underline">arshadmehm3273@gmail.com</a>
              </div>
              <div className="flex items-center justify-center md:justify-end gap-2">
                <MapPin className="h-3.5 w-3.5 text-indigo-600 print:hidden" />
                <span>Toba Tek Singh / Lahore, Pakistan</span>
              </div>
              <div className="flex items-center justify-center md:justify-end gap-3 mt-1 text-indigo-700 font-semibold print:text-slate-800">
                <a href="https://github.com/arshadmehmood1" target="_blank" rel="noopener noreferrer" className="hover:underline flex items-center gap-1">
                  <Github className="h-3.5 w-3.5 print:hidden" /> github.com/arshadmehmood1
                </a>
                <span>|</span>
                <a href="https://www.linkedin.com/in/arshad-mehmood-a0075b375" target="_blank" rel="noopener noreferrer" className="hover:underline flex items-center gap-1">
                  <Linkedin className="h-3.5 w-3.5 print:hidden" /> linkedin.com/in/arshad-mehmood
                </a>
              </div>
            </div>
          </div>
        </header>

        {/* Section 1: Professional Summary */}
        <section className="mb-6">
          <h2 className="text-sm font-black text-slate-900 uppercase tracking-wider border-b border-slate-300 pb-1 mb-2.5">
            Professional Summary
          </h2>
          <p className="text-xs sm:text-sm text-slate-800 leading-relaxed text-justify">
            Results-driven Software Engineer specializing in autonomous AI cloud pipelines, edge computer vision (TensorFlow Lite), cross-platform desktop/mobile applications, and modern full-stack web architectures. Experienced in integrating machine learning models with responsive user interfaces (React, Next.js 16, Android Kotlin, Electron) and robust backends (Node.js, Express, Python, PostgreSQL, Supabase). Proven track record of optimizing VRAM memory footprints, building offline-first desktop POS systems, and deploying low-latency edge AI models.
          </p>
        </section>

        {/* Section 2: Technical Skills Matrix (ATS Categorized Format) */}
        <section className="mb-6">
          <h2 className="text-sm font-black text-slate-900 uppercase tracking-wider border-b border-slate-300 pb-1 mb-2.5">
            Technical Skills & Core Competencies
          </h2>
          <div className="space-y-1.5 text-xs text-slate-800">
            <div>
              <span className="font-bold text-slate-900">Languages & Frameworks: </span>
              <span>Python, JavaScript (ES6+), TypeScript, Kotlin, ReactJS, Next.js 16, Electron, Node.js, Express.js, Django, FastAPI, HTML5, CSS3, Tailwind CSS</span>
            </div>
            <div>
              <span className="font-bold text-slate-900">AI & Machine Learning: </span>
              <span>TensorFlow Lite, PyTorch, Edge AI, OpenCV, scikit-learn, NLP & LLMs, RunPod Cloud GPU Automation, Real-ESRGAN</span>
            </div>
            <div>
              <span className="font-bold text-slate-900">Databases & BaaS: </span>
              <span>Supabase BaaS, SQLite (WAL), PostgreSQL, MongoDB, Firebase Firestore / WorkManager</span>
            </div>
            <div>
              <span className="font-bold text-slate-900">Tools, Protocols & DevOps: </span>
              <span>FFmpeg Video Processing Pipelines, REST APIs, Git, GitHub CLI, Docker, Vercel Deployment, Hardware Peripheral ESC/POS Thermal Printing</span>
            </div>
          </div>
        </section>

        {/* Section 3: Key Software Projects & Case Studies */}
        <section className="mb-6">
          <h2 className="text-sm font-black text-slate-900 uppercase tracking-wider border-b border-slate-300 pb-1 mb-3">
            Featured Software Engineering Projects
          </h2>
          
          <div className="space-y-4 text-xs sm:text-sm text-slate-800">

            {/* Project 1 */}
            <div>
              <div className="flex justify-between items-baseline mb-1">
                <h3 className="font-bold text-slate-900 text-sm">
                  RunPod Autonomous Cloud Video Pipeline
                </h3>
                <span className="text-xs font-semibold text-slate-600">Python | Cloud GPU | FFmpeg | LLMs</span>
              </div>
              <ul className="list-disc list-outside ml-4 space-y-1 text-slate-700 text-xs leading-relaxed">
                <li>Engineered a 15-stage autonomous media generation pipeline operating on remote RunPod GPU instances, automating topic generation, LLM scripting, voice synthesis, image upscaling, and FFmpeg multiplexing.</li>
                <li>Optimized VRAM memory allocation by dynamically unloading PyTorch models between pipeline stages, eliminating GPU OOM crashes and reducing cloud rendering execution costs by 75%.</li>
                <li>Implemented resilient JSON stage checkpointing to ensure stateless pipeline recovery during cloud instance preemptions.</li>
              </ul>
            </div>

            {/* Project 2 */}
            <div>
              <div className="flex justify-between items-baseline mb-1">
                <h3 className="font-bold text-slate-900 text-sm">
                  Driver Monitoring System (DMS) — Edge AI Native Mobile App
                </h3>
                <span className="text-xs font-semibold text-slate-600">Android (Kotlin) | TensorFlow Lite | Firebase</span>
              </div>
              <ul className="list-disc list-outside ml-4 space-y-1 text-slate-700 text-xs leading-relaxed">
                <li>Developed a native Android application executing real-time 68-point facial landmark and eye-closure detection at 30+ FPS directly on mobile device hardware.</li>
                <li>Applied INT8 model quantization to TensorFlow Lite neural networks, reducing binary footprint by 70% (from 24MB to 6.8MB) while maintaining 98.2% detection accuracy.</li>
                <li>Integrated Android CameraX frame streaming with background WorkManager telemetry sync to log incidents offline in Room SQLite before uploading to Firebase.</li>
              </ul>
            </div>

            {/* Project 3 */}
            <div>
              <div className="flex justify-between items-baseline mb-1">
                <h3 className="font-bold text-slate-900 text-sm">
                  Bike POS — Cross-Platform Offline-First Desktop Application
                </h3>
                <span className="text-xs font-semibold text-slate-600">Electron | React | Vite | SQLite</span>
              </div>
              <ul className="list-disc list-outside ml-4 space-y-1 text-slate-700 text-xs leading-relaxed">
                <li>Architected an offline-first desktop POS application for retail spare parts inventory, leveraging embedded SQLite Write-Ahead Logging (WAL) for atomic transaction safety.</li>
                <li>Enforced strict Electron IPC contextBridge isolation between Node.js main process and React renderer, integrating ESC/POS thermal receipt printer hardware.</li>
              </ul>
            </div>

            {/* Project 4 */}
            <div>
              <div className="flex justify-between items-baseline mb-1">
                <h3 className="font-bold text-slate-900 text-sm">
                  SafeRoute Web & StudySuite Platform
                </h3>
                <span className="text-xs font-semibold text-slate-600">React | Supabase BaaS | Tailwind CSS</span>
              </div>
              <ul className="list-disc list-outside ml-4 space-y-1 text-slate-700 text-xs leading-relaxed">
                <li>Built full-stack spatial navigation and educational management web applications utilizing Supabase Row-Level Security (RLS) for database access control and modular React state.</li>
              </ul>
            </div>

          </div>
        </section>

        {/* Section 4: Education */}
        <section className="mb-4">
          <h2 className="text-sm font-black text-slate-900 uppercase tracking-wider border-b border-slate-300 pb-1 mb-2.5">
            Education
          </h2>
          <div className="space-y-2 text-xs text-slate-800">
            <div className="flex justify-between items-start">
              <div>
                <h3 className="font-bold text-slate-900 text-sm">Bachelor of Science in Software Engineering (BS SE)</h3>
                <p className="text-slate-700 font-medium">University of Management and Technology — Lahore, Pakistan</p>
                <p className="text-slate-600 text-[11px] mt-0.5">Core Focus: AI Architectures, Web Systems, Edge Computing, and Data Structures</p>
              </div>
              <span className="font-bold text-slate-900 bg-slate-100 px-2 py-0.5 rounded border border-slate-200 text-[11px]">2022 – Present (Ongoing)</span>
            </div>

            <div className="flex justify-between items-start pt-1">
              <div>
                <h3 className="font-bold text-slate-900">Intermediate in Computer Science (ICS)</h3>
                <p className="text-slate-700 font-medium">Standard College — Toba Tek Singh, Pakistan</p>
              </div>
              <span className="text-slate-600 text-[11px] font-semibold">Completed</span>
            </div>

            <div className="flex justify-between items-start pt-1">
              <div>
                <h3 className="font-bold text-slate-900">Matriculation (Science)</h3>
                <p className="text-slate-700 font-medium">Dar-e-Arqam High School — Toba Tek Singh, Pakistan</p>
              </div>
              <span className="text-slate-600 text-[11px] font-semibold">Completed</span>
            </div>
          </div>
        </section>

      </div>

      {/* Strict ATS PDF Print Overrides */}
      <style jsx global>{`
        @media print {
          @page {
            margin: 12mm 15mm;
            size: A4 portrait;
          }
          body { 
            background: white !important;
            color: black !important;
            font-size: 11pt !important;
            -webkit-print-color-adjust: exact !important;
            print-color-adjust: exact !important;
          }
          .print\\:hidden { display: none !important; }
          .max-w-4xl { max-width: 100% !important; margin: 0 !important; }
          .shadow-xl { box-shadow: none !important; }
          .rounded-2xl { border-radius: 0 !important; }
          .border { border: none !important; }
          a { text-decoration: none !important; color: black !important; }
        }
      `}</style>
    </div>
  )
}
