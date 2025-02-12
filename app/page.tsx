"use client"
import { useState } from "react"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Progress } from "@/components/ui/progress"
import Image from "next/image"
import { Github, Linkedin, Mail, ExternalLink } from "lucide-react"

export default function ModernSimplePortfolio() {
  const [activeTab, setActiveTab] = useState("about")

  console.log(activeTab)

  return (
    <div className="min-h-screen bg-gray-100 text-gray-800 p-8">
      <div className="max-w-6xl mx-auto bg-white rounded-2xl shadow-xl overflow-hidden">
        <div className="grid grid-cols-1 lg:grid-cols-3 min-h-[calc(100vh-4rem)]">
          {/* Left Column - Profile */}
          <div className="lg:col-span-1 bg-gray-50 p-8 border-r border-gray-200">
            <div className="flex flex-col items-center space-y-6">
              <Image
                src="/placeholder.svg?height=200&width=200"
                alt="Profile Picture"
                width={200}
                height={200}
                className="rounded-full border-4 border-white shadow-lg"
              />
              <h1 className="text-3xl font-bold">Your Name</h1>
              <p className="text-xl text-gray-600">Web Developer</p>
              <div className="flex space-x-4">
                <a href="#" className="text-gray-600 hover:text-gray-800 transition-colors">
                  <Github size={24} />
                </a>
                <a href="#" className="text-gray-600 hover:text-gray-800 transition-colors">
                  <Linkedin size={24} />
                </a>
                <a href="#" className="text-gray-600 hover:text-gray-800 transition-colors">
                  <Mail size={24} />
                </a>
              </div>
              <Button className="w-full bg-blue-600 hover:bg-blue-700 text-white">Download CV</Button>
            </div>
            <div className="mt-12">
              <h2 className="text-2xl font-semibold mb-4">Skills</h2>
              <div className="space-y-4">
                {[
                  { name: "React", level: 90 },
                  { name: "Node.js", level: 85 },
                  { name: "TypeScript", level: 80 },
                  { name: "UI/UX Design", level: 75 },
                ].map((skill, index) => (
                  <div key={index}>
                    <div className="flex justify-between mb-1">
                      <span>{skill.name}</span>
                      <span>{skill.level}%</span>
                    </div>
                    <Progress value={skill.level} className="h-2" />
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column - Tabs */}
          <div className="lg:col-span-2 p-8">
            <Tabs defaultValue="about" className="w-full" onValueChange={setActiveTab}>
              <TabsList className="grid w-full grid-cols-5 bg-gray-100 rounded-xl p-1">
                <TabsTrigger value="about" className="rounded-lg">
                  About
                </TabsTrigger>
                <TabsTrigger value="experience" className="rounded-lg">
                  Experience
                </TabsTrigger>
                <TabsTrigger value="education" className="rounded-lg">
                  Education
                </TabsTrigger>
                <TabsTrigger value="projects" className="rounded-lg">
                  Projects
                </TabsTrigger>
                <TabsTrigger value="contact" className="rounded-lg">
                  Contact
                </TabsTrigger>
              </TabsList>
              <div className="mt-8 h-[calc(100vh-20rem)] overflow-y-auto pr-4">
                <TabsContent value="about">
                  <h2 className="text-3xl font-bold mb-4">About Me</h2>
                  <p className="text-lg leading-relaxed mb-6">
                    I`m a passionate web developer with a keen eye for design and a love for creating seamless user
                    experiences. With expertise in modern web technologies, I bring ideas to life through clean,
                    efficient code and intuitive interfaces.
                  </p>
                  <p className="text-lg leading-relaxed">
                    When I`m not coding, you can find me exploring new technologies, contributing to open-source
                    projects, or sharing my knowledge through tech blogs and community meetups. I believe in continuous
                    learning and staying up-to-date with the latest industry trends to deliver cutting-edge solutions.
                  </p>
                </TabsContent>
                <TabsContent value="experience">
                  <h2 className="text-3xl font-bold mb-6">Work Experience</h2>
                  <div className="space-y-8">
                    {[
                      {
                        title: "Senior Web Developer",
                        company: "Tech Innovators Inc.",
                        period: "2020 - Present",
                        description:
                          "Lead development of complex web applications, mentor junior developers, and implement best practices.",
                      },
                      {
                        title: "Frontend Developer",
                        company: "Creative Solutions Ltd.",
                        period: "2018 - 2020",
                        description: "Developed responsive and accessible user interfaces for various client projects.",
                      },
                      {
                        title: "Junior Developer",
                        company: "StartUp Ventures",
                        period: "2016 - 2018",
                        description:
                          "Assisted in the development of web applications and gained experience in full-stack development.",
                      },
                    ].map((job, index) => (
                      <Card key={index} className="border-l-4 border-blue-500">
                        <CardContent className="p-6">
                          <h3 className="text-xl font-semibold">{job.title}</h3>
                          <p className="text-gray-600">{job.company}</p>
                          <p className="text-sm text-gray-500 mt-1">{job.period}</p>
                          <p className="mt-2">{job.description}</p>
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                </TabsContent>
                <TabsContent value="education">
                  <h2 className="text-3xl font-bold mb-6">Education</h2>
                  <div className="space-y-6">
                    <Card>
                      <CardContent className="p-6">
                        <h3 className="text-xl font-semibold">Master of Computer Science</h3>
                        <p className="text-gray-600">University of Technology</p>
                        <p className="text-sm text-gray-500">Graduated: 2016</p>
                      </CardContent>
                    </Card>
                    <Card>
                      <CardContent className="p-6">
                        <h3 className="text-xl font-semibold">Bachelor of Software Engineering</h3>
                        <p className="text-gray-600">State University</p>
                        <p className="text-sm text-gray-500">Graduated: 2014</p>
                      </CardContent>
                    </Card>
                  </div>
                </TabsContent>
                <TabsContent value="projects">
                  <h2 className="text-3xl font-bold mb-6">Projects</h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {[
                      { name: "E-commerce Platform", tech: "React, Node.js, MongoDB" },
                      { name: "Task Management App", tech: "Vue.js, Firebase" },
                      { name: "Social Media Dashboard", tech: "React, D3.js, Express" },
                      { name: "Fitness Tracker", tech: "React Native, GraphQL" },
                    ].map((project, index) => (
                      <Card key={index}>
                        <CardContent className="p-6">
                          <h3 className="text-xl font-semibold mb-2">{project.name}</h3>
                          <p className="text-sm text-gray-600 mb-4">{project.tech}</p>
                          <Button variant="outline" className="text-blue-600 border-blue-600 hover:bg-blue-50">
                            View Project <ExternalLink size={16} className="ml-2" />
                          </Button>
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                </TabsContent>
                <TabsContent value="contact">
                  <h2 className="text-3xl font-bold mb-6">Contact Me</h2>
                  <form className="space-y-4">
                    <input
                      type="text"
                      placeholder="Your Name"
                      className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                    <input
                      type="email"
                      placeholder="Your Email"
                      className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                    <textarea
                      placeholder="Your Message"
                      rows={4}
                      className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    ></textarea>
                    <Button type="submit" className="w-full bg-blue-600 hover:bg-blue-700 text-white">
                      Send Message
                    </Button>
                  </form>
                </TabsContent>
              </div>
            </Tabs>
          </div>
        </div>
      </div>
    </div>
  )
}

