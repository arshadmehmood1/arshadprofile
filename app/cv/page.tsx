"use client"

import { Button } from "@/components/ui/button"
import { Download, Mail, Phone, MapPin } from "lucide-react"

export default function CVPage() {
  const handlePrint = () => {
    window.print()
  }

  return (
    <div className="min-h-screen bg-background">
      {/* Print/Download Header - Hidden in print */}
      <div className="print:hidden bg-card border-b border-border py-4 sticky top-0 z-10">
        <div className="container mx-auto px-4 flex justify-between items-center">
          <h1 className="text-xl font-bold">Arshad Mehmood - CV</h1>
          <Button onClick={handlePrint} className="flex items-center gap-2">
            <Download className="h-4 w-4" />
            Download PDF
          </Button>
        </div>
      </div>

      {/* CV Content */}
      <div className="container mx-auto px-4 py-8 max-w-4xl">
        <div className="bg-white text-black print:shadow-none shadow-lg">
          {/* Header Section */}
          <div className="bg-slate-50 p-8 border-b-2 border-blue-600">
            <div className="text-center">
              <h1 className="text-4xl font-bold text-gray-900 mb-2">Arshad Mehmood</h1>
              <p className="text-xl text-blue-600 font-semibold mb-4">
                AI Language & Chatbot Developer | ReactJS Full Stack Developer
              </p>

              <div className="flex flex-wrap justify-center gap-6 text-sm text-gray-600">
                <div className="flex items-center gap-1">
                  <Phone className="h-4 w-4" />
                  <span>0334-0698153</span>
                </div>
                <div className="flex items-center gap-1">
                  <Mail className="h-4 w-4" />
                  <span>arshadmehm3273@gmail.com</span>
                </div>
                <div className="flex items-center gap-1">
                  <MapPin className="h-4 w-4" />
                  <span>Toba Tek Singh, Pakistan</span>
                </div>
              </div>
            </div>
          </div>

          {/* Professional Summary */}
          <div className="p-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4 border-b-2 border-blue-600 pb-2">
              PROFESSIONAL SUMMARY
            </h2>
            <p className="text-gray-700 leading-relaxed">
              Innovative and results-driven developer specializing in AI-powered language models, chatbot development,
              and full-stack web solutions. Skilled at building intelligent, user-friendly applications that integrate
              ReactJS, Node.js, and AI APIs. Passionate about delivering high-performance products with modern design,
              secure architecture, and scalability. Proficient in English and Urdu, enabling effective communication
              with diverse teams and clients.
            </p>
          </div>

          {/* Core Skills */}
          <div className="px-8 pb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4 border-b-2 border-blue-600 pb-2">CORE SKILLS</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h3 className="font-semibold text-gray-900 mb-2">Frontend Development</h3>
                <p className="text-gray-700 text-sm">ReactJS, Vite, HTML, CSS, Tailwind CSS, JavaScript (ES6+)</p>
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 mb-2">Backend Development</h3>
                <p className="text-gray-700 text-sm">Node.js, Express.js, MongoDB, PostgreSQL</p>
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 mb-2">AI Development</h3>
                <p className="text-gray-700 text-sm">OpenAI API, LangChain, Chatbot Architecture, NLP</p>
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 mb-2">Other Technologies</h3>
                <p className="text-gray-700 text-sm">
                  REST APIs, Authentication (JWT), Payment Integration, File Handling, Deployment (Vercel, Render)
                </p>
              </div>
            </div>
            <div className="mt-4">
              <h3 className="font-semibold text-gray-900 mb-2">Languages</h3>
              <p className="text-gray-700 text-sm">English, Urdu</p>
            </div>
          </div>

          {/* Education */}
          <div className="px-8 pb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4 border-b-2 border-blue-600 pb-2">EDUCATION</h2>
            <div className="space-y-4">
              <div className="flex justify-between items-start">
                <div>
                  <h3 className="font-semibold text-gray-900">BS Software Engineering (Ongoing)</h3>
                  <p className="text-gray-700">University of Management and Technology</p>
                </div>
                <span className="text-sm text-gray-600 bg-blue-100 px-2 py-1 rounded">2022 – Present</span>
              </div>
              <div className="flex justify-between items-start">
                <div>
                  <h3 className="font-semibold text-gray-900">Intermediate</h3>
                  <p className="text-gray-700">Standard College, Toba Tek Singh</p>
                </div>
                <span className="text-sm text-gray-600">Completed</span>
              </div>
              <div className="flex justify-between items-start">
                <div>
                  <h3 className="font-semibold text-gray-900">Matriculation</h3>
                  <p className="text-gray-700">Dar-e-Arqam</p>
                </div>
                <span className="text-sm text-gray-600">Completed</span>
              </div>
            </div>
          </div>

          {/* Featured Project */}
          <div className="px-8 pb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4 border-b-2 border-blue-600 pb-2">FEATURED PROJECT</h2>
            <div className="bg-gray-50 p-4 rounded-lg">
              <h3 className="font-semibold text-gray-900 mb-2">CompetitionCentral</h3>
              <p className="text-gray-700 text-sm leading-relaxed">
                Full-stack competition hosting platform with secure user authentication, PDF uploads, voting system,
                leaderboard, admin dashboard, and ad monetization. Built using modern web technologies with focus on
                security, scalability, and user experience.
              </p>
              <div className="mt-2">
                <span className="text-xs text-blue-600 font-medium">
                  Technologies: ReactJS, Node.js, MongoDB, JWT Authentication, File Upload, Admin Dashboard
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Print Styles */}
      <style jsx global>{`
        @media print {
          body { 
            -webkit-print-color-adjust: exact !important;
            color-adjust: exact !important;
          }
          .print\\:hidden { display: none !important; }
          .container { max-width: none !important; padding: 0 !important; }
          .shadow-lg { box-shadow: none !important; }
        }
      `}</style>
    </div>
  )
}
