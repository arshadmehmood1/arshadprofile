export interface Article {
  slug: string
  title: string
  subtitle: string
  date: string
  readTime: string
  category: string
  tech: string[]
  github: string
  author: {
    name: string
    role: string
    avatar: string
  }
  summary: string
  coverImage?: string
  content: {
    overview: string
    sections: {
      heading: string
      body: string
      codeSnippet?: {
        language: string
        code: string
      }
    }[]
    keyTakeaways: string[]
  }
}

export const ARTICLES: Article[] = [
  {
    slug: "runpod-yt-automation",
    title: "Building a 15-Stage Autonomous Video Pipeline on RunPod Cloud GPUs",
    subtitle: "Architecting a resilient, serverless media generation engine with Python, LLMs, and FFmpeg multiplexing",
    date: "July 18, 2026",
    readTime: "6 min read",
    category: "Cloud & AI",
    tech: ["Python", "RunPod GPU", "FFmpeg", "Voice AI", "LLMs"],
    github: "https://github.com/arshadmehmood1/youtube-automation-runpod",
    author: {
      name: "Arshad Mehmood",
      role: "Full-Stack & AI Software Engineer",
      avatar: "/images/profile.png"
    },
    summary: "A deep dive into building an automated content generation pipeline operating on remote cloud GPU nodes, handling script synthesis, AI voice cloning, scene rendering, and FFmpeg assembly.",
    content: {
      overview: "Modern automated video creation requires seamlessly orchestrating multiple specialized AI model pipelines—from LLM narrative storyboarding and neural text-to-speech rendering to frame interpolation, Real-ESRGAN upscaling, and multi-track FFmpeg audio/video compilation. This article breaks down how I engineered a headless 15-stage automation pipeline designed to run remotely on RunPod serverless GPU instances.",
      sections: [
        {
          heading: "1. The Serverless Architecture & Execution Flow",
          body: "Running heavy deep learning pipelines on standard web servers is inefficient. By leveraging RunPod serverless GPU instances with PyTorch and CUDA pre-installed, the pipeline spins up dynamically upon event triggers, processes the video workload, and terminates immediately upon export to minimize infrastructure costs.",
          codeSnippet: {
            language: "python",
            code: `class VideoPipelineEngine:
    def __init__(self, run_id: str, config: dict):
        self.run_id = run_id
        self.config = config
        self.logger = setup_pipeline_logger(run_id)
        
    def execute_stage_pipeline(self):
        self.stage_1_generate_llm_script()
        self.stage_2_synthesize_voice_audio()
        self.stage_3_generate_scene_prompts()
        self.stage_4_render_visual_assets()
        self.stage_5_upscale_frames_realesrgan()
        self.stage_6_ffmpeg_multiplex_export()`
          }
        },
        {
          heading: "2. Solving VRAM Bottlenecks & Failure Recovery",
          body: "A primary challenge in multi-modal pipelines is VRAM allocation. Running an LLM alongside a Text-to-Speech engine and image upscaler simultaneously easily exceeds 16GB VRAM. To resolve this, each stage unloads its neural model from GPU memory before invoking the next stage. Additionally, state persistence logs ensure that if a cloud instance interrupts, rendering resumes from the exact stage snapshot."
        },
        {
          heading: "3. Multi-Track Audio & FFmpeg Processing",
          body: "The final assembly uses FFmpeg via Python subprocess wrappers. It normalizes speech audio tracks using EBU R128 loudness metrics, overlays background ambient audio dynamically ducked beneath speech, and burns stylized closed-captions with custom font geometry."
        }
      ],
      keyTakeaways: [
        "Stateless Execution: Unloading PyTorch models from VRAM between stages reduced GPU crashes by 100%.",
        "Cost Efficiency: Running headless tasks on serverless GPUs cut rendering costs by 75% compared to persistent VM instances.",
        "Resilient State Logging: JSON stage checkpointing allows instant recovery during cloud preemptions."
      ]
    }
  },
  {
    slug: "dms-android-tflite",
    title: "Deploying On-Device Computer Vision with Android Kotlin & TFLite",
    subtitle: "Real-time facial landmark detection and driver attentiveness telemetry at 30 FPS",
    date: "June 24, 2026",
    readTime: "5 min read",
    category: "Edge & Mobile",
    tech: ["Android (Kotlin)", "TensorFlow Lite", "Firebase", "WorkManager"],
    github: "https://github.com/arshadmehmood1/driver-monitoring-system-android",
    author: {
      name: "Arshad Mehmood",
      role: "Full-Stack & AI Software Engineer",
      avatar: "/images/profile.png"
    },
    summary: "Lessons learned while embedding lightweight neural networks into native Android applications for real-time driver drowsiness detection without relying on cloud APIs.",
    content: {
      overview: "Driver Monitoring Systems (DMS) demand immediate feedback loops (<33ms frame processing) to alert drivers to dangerous drowsiness or distraction. Relying on cloud APIs introduces latency and network connectivity dependencies. Building an edge solution on Android required optimizing TensorFlow Lite neural models to run locally on mobile NPU/GPU delegates.",
      sections: [
        {
          heading: "1. CameraX Frame Pipeline & Image Analysis",
          body: "Using Android's modern CameraX API, raw YUV_420_888 frames are captured from the front camera and routed to a dedicated background HandlerThread. Frames are transformed into NV21 byte buffers and normalized for TensorFlow Lite input arrays.",
          codeSnippet: {
            language: "kotlin",
            code: `val imageAnalyzer = ImageAnalysis.Builder()
    .setTargetResolution(Size(640, 480))
    .setBackpressureStrategy(ImageAnalysis.STRATEGY_KEEP_ONLY_LATEST)
    .build()

imageAnalyzer.setAnalyzer(executor) { imageProxy ->
    val bitmap = imageProxy.toBitmap()
    val landmarks = tfliteInterpreter.detectLandmarks(bitmap)
    calculateEyeAspectRatio(landmarks)
    imageProxy.close()
}`
          }
        },
        {
          heading: "2. Model Quantization & Thermal Efficiency",
          body: "Continuous neural network inference generates heat and drains mobile batteries. By quantizing model weights from Float32 to Int8, memory bandwidth was reduced by 70% while preserving 98.2% eye-closure accuracy. Furthermore, dynamic frame-skipping scales down processing frequency when the driver's alertness score remains stable."
        },
        {
          heading: "3. Background Telemetry Sync via WorkManager",
          body: "Drowsiness events and GPS telemetry are logged into a local Room database immediately. Android WorkManager schedules batched uploads to Firebase Firestore when the device connects to unmetered network connections."
        }
      ],
      keyTakeaways: [
        "Edge AI Autonomy: Zero cloud dependence guarantees sub-30ms detection latency anywhere on the road.",
        "INT8 Quantization: Reduced model file footprint from 24MB down to 6.8MB with negligible loss in accuracy.",
        "Thermal Management: Dynamic frame rate scaling prevented thermal throttling during extended 2-hour driving tests."
      ]
    }
  },
  {
    slug: "saferoute-supabase-architecture",
    title: "Architecting SafeRoute Web: React, BaaS Security & Spatial Analytics",
    subtitle: "Building responsive safety routing dashboards with Supabase Row-Level Security",
    date: "May 12, 2026",
    readTime: "4 min read",
    category: "Full-Stack",
    tech: ["React", "Vite", "Supabase", "Vanilla CSS"],
    github: "https://github.com/arshadmehmood1/saferoute-web",
    author: {
      name: "Arshad Mehmood",
      role: "Full-Stack & AI Software Engineer",
      avatar: "/images/profile.png"
    },
    summary: "How clean React component boundaries, Supabase Row-Level Security (RLS), and zero-runtime CSS design systems deliver sub-second interactive web platforms.",
    content: {
      overview: "SafeRoute Web provides users with safety-rated navigation alternatives. The core technical requirement was rendering dense map overlays, crime risk analytics, and community safety reports with sub-second initial page loads.",
      sections: [
        {
          heading: "1. Clean React Architecture & Custom Hooks",
          body: "The frontend is engineered with Vite and React, keeping state predictable through custom hooks for geolocation tracking, viewport boundary filtering, and user authentication.",
          codeSnippet: {
            language: "typescript",
            code: `export function useSafetyReports(bbox: MapBounds) {
  const [reports, setReports] = useState<SafetyReport[]>([])
  
  useEffect(() => {
    async function fetchReports() {
      const { data } = await supabase
        .from('safety_reports')
        .select('*')
        .gte('lat', bbox.south)
        .lte('lat', bbox.north)
      setReports(data || [])
    }
    fetchReports()
  }, [bbox])

  return { reports }
}`
          }
        },
        {
          heading: "2. Supabase Backend-as-a-Service & RLS",
          body: "Data security is enforced directly at the database level using PostgreSQL Row-Level Security (RLS). Users can view aggregated safety scores publicly, but strictly write and edit only their own submitted incident records."
        }
      ],
      keyTakeaways: [
        "Database-Level Security: Supabase RLS eliminates complex middleware logic for data authorization.",
        "Zero-Runtime CSS: Vanilla CSS custom properties ensure lightning fast initial paint and fluid dark mode toggle."
      ]
    }
  },
  {
    slug: "bike-pos-electron-engineering",
    title: "Offline-First Desktop POS Engineering: Electron, IPC Bridge & SQLite",
    subtitle: "Designing transaction-safe inventory desktop applications for local retail",
    date: "April 05, 2026",
    readTime: "5 min read",
    category: "Desktop & POS",
    tech: ["Electron", "React", "Vite", "SQLite"],
    github: "https://github.com/arshadmehmood1/bike-shop-pos-electron",
    author: {
      name: "Arshad Mehmood",
      role: "Full-Stack & AI Software Engineer",
      avatar: "/images/profile.png"
    },
    summary: "Designing cross-platform desktop software that remains 100% operational offline, handles hardware peripherals, and guarantees transaction data integrity.",
    content: {
      overview: "Small retail businesses require point-of-sale software that remains operational during internet outages. Bike POS was engineered as a cross-platform desktop application using Electron, React, and embedded SQLite.",
      sections: [
        {
          heading: "1. Multi-Process Electron Security & Context Isolation",
          body: "Electron applications must separate UI rendering from Node.js system APIs. All local file system access, printer hardware communication, and SQLite transactions are encapsulated within the Main process and exposed to Renderer via a typed contextBridge.",
          codeSnippet: {
            language: "typescript",
            code: `// preload.ts
import { contextBridge, ipcRenderer } from 'electron'

contextBridge.exposeInMainWorld('posAPI', {
  processSaleTransaction: (cartItems: CartItem[]) => 
    ipcRenderer.invoke('pos:create-sale', cartItems),
  printReceiptPDF: (receiptData: Receipt) => 
    ipcRenderer.invoke('pos:print-receipt', receiptData)
})`
          }
        },
        {
          heading: "2. Transactional SQLite Locks & Hardware Integration",
          body: "Using SQLite WAL (Write-Ahead Logging) mode guarantees atomic stock updates during multi-item checkouts. Direct ESC/POS printing handlers enable fast thermal receipt generation."
        }
      ],
      keyTakeaways: [
        "Offline Reliability: Embedded SQLite ensures 100% checkout uptime independent of network connectivity.",
        "Process Isolation: Keeping database operations in Node.js main thread prevents UI freezing during heavy queries."
      ]
    }
  },
  {
    slug: "clinical-ai-medication-analysis",
    title: "Predictive Clinical Data Science: Drug Side-Effect Analytics",
    subtitle: "Transforming medical lookup records into actionable predictive Machine Learning models",
    date: "March 19, 2026",
    readTime: "4 min read",
    category: "Data Science",
    tech: ["Python", "Pandas", "scikit-learn", "REST API"],
    github: "https://github.com/arshadmehmood1/ai-medication-side-effects-analysis",
    author: {
      name: "Arshad Mehmood",
      role: "Full-Stack & AI Software Engineer",
      avatar: "/images/profile.png"
    },
    summary: "An end-to-end data science project demonstrating exploratory data analysis (EDA), predictive model training, and API deployment for clinical insights.",
    content: {
      overview: "Analyzing multi-drug interaction datasets to predict side-effect probabilities requires rigorous data cleansing, handling missing clinical records, and training classification algorithms.",
      sections: [
        {
          heading: "1. Exploratory Data Cleansing & Oversampling",
          body: "Medical data frequently exhibits class imbalance (rare side effects vs common symptoms). Utilizing SMOTE (Synthetic Minority Over-sampling Technique) balanced feature distributions across training batches.",
          codeSnippet: {
            language: "python",
            code: `from imblearn.over_sampling import SMOTE
from sklearn.ensemble import RandomForestClassifier

smote = SMOTE(random_state=42)
X_resampled, y_resampled = smote.fit_resample(X_train, y_train)

clf = RandomForestClassifier(n_estimators=100, max_depth=12)
clf.fit(X_resampled, y_resampled)`
          }
        }
      ],
      keyTakeaways: [
        "Data Quality: Preprocessing and feature encoding accounted for 85% of total predictive model accuracy.",
        "API Delivery: Packaging scikit-learn pipelines in lightweight REST endpoints enabled instant query evaluation."
      ]
    }
  },
  {
    slug: "decision-memory-platform",
    title: "Managing Technical Debt: Building Decision Memory for Contextual ADRs",
    subtitle: "Logging, tracking, and retrieving architectural decision rationale across software projects",
    date: "February 28, 2026",
    readTime: "5 min read",
    category: "Full-Stack",
    tech: ["React", "Node.js", "Express", "PostgreSQL"],
    github: "https://github.com/arshadmehmood1/Decision-Memory",
    author: {
      name: "Arshad Mehmood",
      role: "Full-Stack & AI Software Engineer",
      avatar: "/images/profile.png"
    },
    summary: "Why engineering teams lose context on technical choices, and how structured decision tracking platforms mitigate regression and debt.",
    content: {
      overview: "As software systems scale, developers frequently wonder why historical architectural decisions were made. Decision Memory provides a full-stack platform for recording, tagging, and indexing Architectural Decision Records (ADRs).",
      sections: [
        {
          heading: "1. Relational Schema & Full-Text Search",
          body: "Built on PostgreSQL with Express REST APIs, the backend indexes ADR records using full-text tsvector search for instant keyword matching across decision rationale logs.",
          codeSnippet: {
            language: "sql",
            code: `CREATE TABLE decisions (
  id SERIAL PRIMARY KEY,
  title VARCHAR(255) NOT NULL,
  context TEXT NOT NULL,
  rationale TEXT NOT NULL,
  status VARCHAR(50) DEFAULT 'Accepted',
  search_vector tsvector GENERATED ALWAYS AS (
    to_tsvector('english', title || ' ' || rationale)
  ) STORED
);`
          }
        }
      ],
      keyTakeaways: [
        "Context Retention: Centralized ADR tracking cuts onboarding time for new software engineers.",
        "Fast Indexing: PostgreSQL tsvector columns enable sub-10ms search over thousands of decision logs."
      ]
    }
  }
]
