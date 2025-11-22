const skillsData = [
  {
    category: "Frontend Development",
    skills: [
      { name: "Flutter", level: 90, experience: "Built 3 production apps, 6 months experience" },
      { name: "React", level: 70, experience: "Built 3 production apps, 6 months experience" },
      { name: "Next.js", level: 80, experience: "Built multiple SSR and static sites" },
      { name: "Tailwind CSS", level: 95, experience: "Designed responsive UIs for 5+ apps" },
      { name: "HTML & CSS", level: 95, experience: "Daily usage in all web projects" },
      { name: "JavaScript", level: 90, experience: "Advanced JS features used in projects" },
    ],
  },
  {
    category: "Backend Development",
    skills: [
      { name: "Node.js", level: 80, experience: "Built APIs and backend logic for multiple apps" },
      { name: "C#", level: 85, experience: "Developed Windows Forms apps and web backends" },
      { name: "Python", level: 75, experience: "Created REST APIs for web applications" },
    ],
  },
  {
    category: "Database Management",
    skills: [
      { name: "SQL Server", level: 90, experience: "Designed databases, queries, and stored procedures" },
      { name: "MySQL", level: 80, experience: "Implemented backend databases for web apps" },
      { name: "Firebase", level: 75, experience: "Used for real-time databases and authentication in projects" },
    ],
  },
  {
    category: "Tools & Platforms",
    skills: [
      { name: "Git & GitHub", level: 95, experience: "Version control for all projects" },
      { name: "Vercel", level: 85, experience: "Deployed Next.js apps" },
      { name: "Visual Studio Code", level: 95, experience: "Daily development IDE" },
      { name: "Postman", level: 80, experience: "Tested APIs and endpoints" },
    ],
  },
];

const SkillsandExpertise = () => {
  return (
    <div className="py-16 px-4 md:px-16 bg-transparent">
      <h2 className="text-4xl font-bold text-center mb-12">SKILLS & EXPERTISE</h2>
      <div className="grid gap-10 md:grid-cols-2">
        {skillsData.map((category, index) => (
          <div key={index}>
            <h3 className="text-2xl font-semibold mb-6">{category.category}</h3>
            <div className="space-y-4">
              {category.skills.map((skill, idx) => (
                <div key={idx}>
                  <div className="flex justify-between mb-1">
                    <span className="font-medium">{skill.name}</span>
                    <span className="text-sm text-gray-500">{skill.level}%</span>
                  </div>
                  <div className="w-full bg-gray-300 h-3 rounded-full">
                    <div
                      className="bg-blue-600 h-3 rounded-full"
                      style={{ width: `${skill.level}%` }}
                    ></div>
                  </div>
                  <p className="text-xs text-gray-500 mt-1">{skill.experience}</p>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SkillsandExpertise;
