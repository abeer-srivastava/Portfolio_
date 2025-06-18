import { Button } from "@/components/ui/button"
import { Github, Linkedin, Mail, Phone, MapPin, Download } from "lucide-react"
import Link from "next/link"
import ContactForm from "./components/contact-form"
import ProjectCard from "./components/project-card"
import SkillsSection from "./components/skills-section"
import CertificationsSection from "./components/certifications-section"
import ExperienceSection from "./components/experience-section"
import { ThemeToggle } from "@/components/theme-toggle"

export default function Page() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100 dark:from-slate-900 dark:via-slate-800 dark:to-slate-900">
      {/* Background Pattern */}
      <div className="fixed inset-0 bg-[url('data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fillRule='evenodd'%3E%3Cg fill='%23e2e8f0' fillOpacity='0.4'%3E%3Ccircle cx='30' cy='30' r='1.5'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] dark:bg-[url('data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fillRule='evenodd'%3E%3Cg fill='%23334155' fillOpacity='0.4'%3E%3Ccircle cx='30' cy='30' r='1.5'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')]"></div>

      <header className="sticky top-0 z-50 w-full border-b bg-white/80 dark:bg-slate-900/80 backdrop-blur supports-[backdrop-filter]:bg-white/60 dark:supports-[backdrop-filter]:bg-slate-900/60">
        <div className="container flex h-16 items-center">
          <div className="mr-4 hidden md:flex">
            <Link className="mr-6 flex items-center space-x-2" href="/">
              <span className="hidden font-bold sm:inline-block text-lg bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                Abeer.dev
              </span>
            </Link>
            <nav className="flex items-center space-x-6 text-sm font-medium">
              <Link href="#about" className="transition-colors hover:text-blue-600 dark:hover:text-blue-400">
                About
              </Link>
              <Link href="#skills" className="transition-colors hover:text-blue-600 dark:hover:text-blue-400">
                Skills
              </Link>
              <Link href="#projects" className="transition-colors hover:text-blue-600 dark:hover:text-blue-400">
                Projects
              </Link>
              <Link href="#experience" className="transition-colors hover:text-blue-600 dark:hover:text-blue-400">
                Experience
              </Link>
              <Link href="#contact" className="transition-colors hover:text-blue-600 dark:hover:text-blue-400">
                Contact
              </Link>
            </nav>
          </div>
          <div className="ml-auto flex items-center space-x-2">
            <ThemeToggle />
            <Button
              variant="outline"
              className="border-blue-200 hover:bg-blue-50 dark:border-slate-700 dark:hover:bg-slate-800"
            >
              <Download className="h-4 w-4 mr-2" />
              Resume
            </Button>
          </div>
        </div>
      </header>

      <main className="container px-4 md:px-6 relative z-10">
        {/* Hero Section */}
        <section id="about" className="py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-6 text-center">
              <div className="space-y-4">
                <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl/none bg-gradient-to-r from-slate-900 via-blue-900 to-slate-900 dark:from-white dark:via-blue-100 dark:to-white bg-clip-text text-transparent">
                  Abeer Srivastava
                </h1>
                <p className="text-xl md:text-2xl font-medium bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                  Full Stack Developer | Cloud Enthusiast | Data Science Learner
                </p>
                <p className="mx-auto max-w-[800px] text-slate-600 dark:text-slate-300 md:text-lg leading-relaxed">
                  A passionate Computer Science Engineering student with expertise in Full Stack Development, Cloud
                  Computing, and Data Science. Proven ability to deliver projects with clean, user-centric designs and a
                  strong foundation in problem-solving.
                </p>
              </div>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="#projects">
                  <Button
                    size="lg"
                    className="w-full sm:w-auto bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white border-0"
                  >
                    View Projects
                  </Button>
                </Link>
                <Link href="#contact">
                  <Button
                    variant="outline"
                    size="lg"
                    className="w-full sm:w-auto border-blue-200 hover:bg-blue-50 dark:border-slate-700 dark:hover:bg-slate-800"
                  >
                    Contact Me
                  </Button>
                </Link>
              </div>
              <div className="flex items-center space-x-4 pt-4">
                <Link href="https://github.com/abeer-srivastava" target="_blank">
                  <Button
                    variant="outline"
                    size="icon"
                    className="border-blue-200 hover:bg-blue-50 dark:border-slate-700 dark:hover:bg-slate-800"
                  >
                    <Github className="h-5 w-5" />
                    <span className="sr-only">GitHub</span>
                  </Button>
                </Link>
                <Link href="https://www.linkedin.com/in/abeer-srivastava-a90797290" target="_blank">
                  <Button
                    variant="outline"
                    size="icon"
                    className="border-blue-200 hover:bg-blue-50 dark:border-slate-700 dark:hover:bg-slate-800"
                  >
                    <Linkedin className="h-5 w-5" />
                    <span className="sr-only">LinkedIn</span>
                  </Button>
                </Link>
                <Link href="mailto:abeersrivastava16@gmail.com">
                  <Button
                    variant="outline"
                    size="icon"
                    className="border-blue-200 hover:bg-blue-50 dark:border-slate-700 dark:hover:bg-slate-800"
                  >
                    <Mail className="h-5 w-5" />
                    <span className="sr-only">Email</span>
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Skills Section */}
        <section id="skills" className="py-12 md:py-24">
          <div className="container px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-12 text-center bg-gradient-to-r from-slate-900 to-blue-900 dark:from-white dark:to-blue-100 bg-clip-text text-transparent">
              Skills & Technologies
            </h2>
            <SkillsSection />
          </div>
        </section>

        {/* Projects Section */}
        <section id="projects" className="py-12 md:py-24">
          <div className="container px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-12 text-center bg-gradient-to-r from-slate-900 to-blue-900 dark:from-white dark:to-blue-100 bg-clip-text text-transparent">
              Featured Projects
            </h2>
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              <ProjectCard
                title="Stock Trading Platform"
                description="Full-stack trading simulator with React.js, Node.js, real-time stock API, user authentication, and portfolio tracking. Achieved 10,000+ virtual trades with 99% accuracy."
                image="/placeholder.svg?height=400&width=600"
                link="https://github.com/abeer-srivastava"
                tags={["React.js", "Node.js", "API Integration", "Authentication"]}
                metrics="10,000+ trades, 99% accuracy"
              />
              <ProjectCard
                title="E-Commerce Website Clone"
                description="Functional store with product listings, cart, checkout system. Achieved 90% similarity to industry standards with optimized load time."
                image="/placeholder.svg?height=400&width=600"
                link="https://github.com/abeer-srivastava"
                tags={["HTML", "CSS", "JavaScript", "Responsive Design"]}
                metrics="90% industry similarity"
              />
              <ProjectCard
                title="Portfolio Website"
                description="Responsive personal site using HTML, CSS, JS with 95% cross-browser compatibility and 15% improved load time."
                image="/placeholder.svg?height=400&width=600"
                link="https://github.com/abeer-srivastava"
                tags={["HTML", "CSS", "JavaScript", "Responsive"]}
                metrics="95% compatibility, 15% faster"
              />
            </div>
          </div>
        </section>

        {/* Certifications Section */}
        <section className="py-12 md:py-24 relative">
          <div className="absolute inset-0 bg-white/50 dark:bg-slate-800/50 backdrop-blur-sm"></div>
          <div className="container px-4 md:px-6 relative z-10">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-12 text-center bg-gradient-to-r from-slate-900 to-blue-900 dark:from-white dark:to-blue-100 bg-clip-text text-transparent">
              Certifications
            </h2>
            <CertificationsSection />
          </div>
        </section>

        {/* Experience Section */}
        <section id="experience" className="py-12 md:py-24">
          <div className="container px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-12 text-center bg-gradient-to-r from-slate-900 to-blue-900 dark:from-white dark:to-blue-100 bg-clip-text text-transparent">
              Experience & Extracurriculars
            </h2>
            <ExperienceSection />
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="py-12 md:py-24 relative">
          <div className="absolute inset-0 bg-white/50 dark:bg-slate-800/50 backdrop-blur-sm"></div>
          <div className="container px-4 md:px-6 relative z-10">
            <div className="mx-auto max-w-4xl">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-12 text-center bg-gradient-to-r from-slate-900 to-blue-900 dark:from-white dark:to-blue-100 bg-clip-text text-transparent">
                Get in Touch
              </h2>
              <div className="grid gap-8 md:grid-cols-2">
                <div className="space-y-6">
                  <div className="flex items-center space-x-3">
                    <Mail className="h-5 w-5 text-blue-600 dark:text-blue-400" />
                    <span className="text-slate-700 dark:text-slate-300">abeersrivastava16@gmail.com</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Phone className="h-5 w-5 text-blue-600 dark:text-blue-400" />
                    <span className="text-slate-700 dark:text-slate-300">+91 7355336760</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <MapPin className="h-5 w-5 text-blue-600 dark:text-blue-400" />
                    <span className="text-slate-700 dark:text-slate-300">Lucknow, Uttar Pradesh, India (226028)</span>
                  </div>
                </div>
                <ContactForm />
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t border-slate-200 dark:border-slate-700 bg-white/80 dark:bg-slate-900/80 backdrop-blur relative z-10">
        <div className="container flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6">
          <p className="text-xs text-slate-500 dark:text-slate-400">© 2024 Abeer Srivastava. All rights reserved.</p>
          <nav className="sm:ml-auto flex gap-4 sm:gap-6">
            <Link
              className="text-xs hover:underline underline-offset-4 text-slate-500 dark:text-slate-400 hover:text-blue-600 dark:hover:text-blue-400"
              href="#"
            >
              Terms of Service
            </Link>
            <Link
              className="text-xs hover:underline underline-offset-4 text-slate-500 dark:text-slate-400 hover:text-blue-600 dark:hover:text-blue-400"
              href="#"
            >
              Privacy
            </Link>
          </nav>
        </div>
      </footer>
    </div>
  )
}
