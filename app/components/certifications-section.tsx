import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Award } from "lucide-react"

const certifications = [
  { name: "IBM Cloud Essentials", provider: "IBM", category: "Cloud" },
  { name: "Python for Data Science", provider: "IBM", category: "Data Science" },
  { name: "Google Cloud Computing Foundations", provider: "Google", category: "Cloud" },
  { name: "Big Data Foundations", provider: "Industry", category: "Data" },
  { name: "Python Programming", provider: "Industry", category: "Programming" },
  { name: "Data Science", provider: "Industry", category: "Data Science" },
]

export default function CertificationsSection() {
  return (
    <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
      {certifications.map((cert, index) => (
        <Card
          key={index}
          className="group hover:shadow-lg transition-all duration-300 hover:border-blue-300 dark:hover:border-blue-600 overflow-hidden bg-white/80 dark:bg-slate-800/80 backdrop-blur border-slate-200 dark:border-slate-700"
        >
          <CardContent className="p-4 relative">
            <div className="absolute inset-0 bg-gradient-to-br from-blue-50/50 to-purple-50/50 dark:from-blue-900/20 dark:to-purple-900/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            <div className="flex items-start gap-3 relative z-10">
              <Award className="h-5 w-5 text-blue-600 dark:text-blue-400 mt-1 flex-shrink-0 group-hover:scale-125 transition-transform duration-300" />
              <div className="space-y-2">
                <h3 className="font-semibold text-sm leading-tight group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-300 text-slate-900 dark:text-white">
                  {cert.name}
                </h3>
                <p className="text-xs text-slate-600 dark:text-slate-400">{cert.provider}</p>
                <Badge
                  variant="outline"
                  className="text-xs group-hover:bg-blue-50 dark:group-hover:bg-blue-900/50 group-hover:text-blue-800 dark:group-hover:text-blue-200 group-hover:border-blue-300 dark:group-hover:border-blue-600 transition-all duration-300 border-slate-300 dark:border-slate-600 text-slate-600 dark:text-slate-300"
                >
                  {cert.category}
                </Badge>
              </div>
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  )
}
