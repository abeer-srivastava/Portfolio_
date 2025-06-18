import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Users, TrendingUp, Target } from "lucide-react"

const experiences = [
  {
    role: "Technical Member",
    organization: "Computer Society of India (CSI), SRMCEM",
    achievements: [
      "Organized 5+ tech workshops with a 30% participation boost",
      "Led a subgroup to develop a web project, increasing team productivity by 20%",
    ],
    skills: ["Leadership", "Event Management", "Web Development", "Team Collaboration"],
  },
]

export default function ExperienceSection() {
  return (
    <div className="space-y-6">
      {experiences.map((exp, index) => (
        <Card
          key={index}
          className="group hover:shadow-lg transition-all duration-300 hover:border-blue-300 dark:hover:border-blue-600 overflow-hidden bg-white/80 dark:bg-slate-800/80 backdrop-blur border-slate-200 dark:border-slate-700"
        >
          <CardContent className="p-6 relative">
            <div className="absolute inset-0 bg-gradient-to-br from-blue-50/50 to-purple-50/50 dark:from-blue-900/20 dark:to-purple-900/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            <div className="space-y-4 relative z-10">
              <div className="flex items-start gap-3">
                <Users className="h-6 w-6 text-blue-600 dark:text-blue-400 mt-1 flex-shrink-0 group-hover:scale-125 transition-transform duration-300" />
                <div>
                  <h3 className="font-semibold text-lg group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-300 text-slate-900 dark:text-white">
                    {exp.role}
                  </h3>
                  <p className="text-slate-600 dark:text-slate-300">{exp.organization}</p>
                </div>
              </div>

              <div className="space-y-3">
                <h4 className="font-medium flex items-center gap-2 text-slate-900 dark:text-white">
                  <Target className="h-4 w-4 text-blue-600 dark:text-blue-400 group-hover:rotate-12 transition-transform duration-300" />
                  Key Achievements
                </h4>
                <ul className="space-y-2">
                  {exp.achievements.map((achievement, i) => (
                    <li
                      key={i}
                      className="flex items-start gap-2 text-sm group-hover:translate-x-1 transition-transform duration-300 text-slate-600 dark:text-slate-300"
                    >
                      <TrendingUp className="h-4 w-4 text-green-500 dark:text-green-400 mt-0.5 flex-shrink-0" />
                      {achievement}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="space-y-2">
                <h4 className="font-medium text-sm text-slate-900 dark:text-white">Skills Developed</h4>
                <div className="flex flex-wrap gap-2">
                  {exp.skills.map((skill) => (
                    <Badge
                      key={skill}
                      variant="secondary"
                      className="text-xs group-hover:bg-blue-100 dark:group-hover:bg-blue-900/50 group-hover:text-blue-800 dark:group-hover:text-blue-200 transition-all duration-300 bg-slate-100 dark:bg-slate-700 text-slate-700 dark:text-slate-300"
                    >
                      {skill}
                    </Badge>
                  ))}
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  )
}
