import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

const skillCategories = [
  {
    category: "Programming",
    skills: ["C", "C++", "Python", "SQL"],
    icon: "💻",
  },
  {
    category: "Web Development",
    skills: ["HTML", "CSS", "JavaScript", "Responsive Design"],
    icon: "🌐",
  },
  {
    category: "Backend",
    skills: ["Node.js (Basic)", "API Integration"],
    icon: "⚙️",
  },
  {
    category: "Cloud & Data",
    skills: ["Google Cloud", "IBM Cloud", "Big Data", "Data Science"],
    icon: "☁️",
  },
]

export default function SkillsSection() {
  return (
    <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
      {skillCategories.map((category) => (
        <Card
          key={category.category}
          className="group hover:shadow-lg transition-all duration-300 hover:border-blue-300 dark:hover:border-blue-600 overflow-hidden relative bg-white/80 dark:bg-slate-800/80 backdrop-blur border-slate-200 dark:border-slate-700"
        >
          <div className="absolute inset-0 bg-gradient-to-br from-blue-50/50 to-purple-50/50 dark:from-blue-900/20 dark:to-purple-900/20 translate-y-full group-hover:translate-y-0 transition-transform duration-500"></div>
          <CardHeader className="pb-3 relative z-10">
            <CardTitle className="flex items-center gap-2 text-lg group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-300 text-slate-900 dark:text-white">
              <span className="text-2xl transform group-hover:scale-125 transition-transform duration-300">
                {category.icon}
              </span>
              {category.category}
            </CardTitle>
          </CardHeader>
          <CardContent className="relative z-10">
            <div className="flex flex-wrap gap-2">
              {category.skills.map((skill) => (
                <Badge
                  key={skill}
                  variant="secondary"
                  className="text-xs transition-all duration-300 group-hover:bg-blue-100 dark:group-hover:bg-blue-900/50 group-hover:text-blue-800 dark:group-hover:text-blue-200 bg-slate-100 dark:bg-slate-700 text-slate-700 dark:text-slate-300"
                >
                  {skill}
                </Badge>
              ))}
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  )
}
