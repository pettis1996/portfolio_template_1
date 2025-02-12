"use client"
import { useState } from "react"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Image from "next/image"
import { Github, Linkedin, Mail, ExternalLink } from "lucide-react"

export default function ModernPortfolio() {
  const [activeTab, setActiveTab] = useState("about")

  console.log(activeTab);

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 text-gray-800 p-8">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <header className="mb-12 flex justify-between items-center">
          <h1 className="text-3xl font-bold">Your Name</h1>
          <nav className="flex space-x-4">
            <a href="#" className="text-purple-600 hover:text-purple-800">
              <Github size={24} />
            </a>
            <a href="#" className="text-purple-600 hover:text-purple-800">
              <Linkedin size={24} />
            </a>
            <a href="#" className="text-purple-600 hover:text-purple-800">
              <Mail size={24} />
            </a>
          </nav>
        </header>

        {/* Main Content */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Left Column - Profile */}
          <Card className="lg:col-span-1 shadow-lg">
            <CardContent className="p-6">
              <div className="flex flex-col items-center space-y-4">
                <Image
                  src="/placeholder.svg?height=200&width=200"
                  alt="Profile Picture"
                  width={200}
                  height={200}
                  className="rounded-full shadow-md"
                />
                <h2 className="text-2xl font-bold">Your Name</h2>
                <p className="text-purple-600 font-medium">Web Developer</p>
                <Button className="w-full">Download CV</Button>
              </div>
            </CardContent>
          </Card>

          {/* Right Column - Tabs */}
          <Card className="lg:col-span-2 shadow-lg">
            <CardContent className="p-6">
              <Tabs defaultValue="about" className="w-full" onValueChange={setActiveTab}>
                <TabsList className="grid w-full grid-cols-5 bg-gray-100">
                  <TabsTrigger value="about">About</TabsTrigger>
                  <TabsTrigger value="education">Education</TabsTrigger>
                  <TabsTrigger value="experience">Experience</TabsTrigger>
                  <TabsTrigger value="projects">Projects</TabsTrigger>
                  <TabsTrigger value="contact">Contact</TabsTrigger>
                </TabsList>
                <div className="mt-6">
                  <TabsContent value="about">
                    <h2 className="text-2xl font-bold mb-4">About Me</h2>
                    <p className="text-gray-600 leading-relaxed">
                      Your introduction goes here. Describe yourself, your passion, and your goals. Make it engaging and
                      highlight your unique qualities.
                    </p>
                  </TabsContent>
                  <TabsContent value="education">
                    <h2 className="text-2xl font-bold mb-4">Education</h2>
                    <ul className="space-y-4">
                      <li>
                        <h3 className="text-xl font-semibold">Degree, Major</h3>
                        <p className="text-purple-600">University Name</p>
                        <p className="text-gray-600">Graduation Year</p>
                      </li>
                      <li>
                        <h3 className="text-xl font-semibold">Certification</h3>
                        <p className="text-purple-600">Institution</p>
                        <p className="text-gray-600">Year</p>
                      </li>
                    </ul>
                  </TabsContent>
                  <TabsContent value="experience">
                    <h2 className="text-2xl font-bold mb-4">Experience</h2>
                    <div className="space-y-6">
                      <div>
                        <h3 className="text-xl font-semibold">Job Title</h3>
                        <p className="text-purple-600">Company Name</p>
                        <p className="text-gray-600">Start Date - End Date</p>
                        <ul className="list-disc list-inside mt-2 text-gray-600">
                          <li>Key responsibility or achievement</li>
                          <li>Another significant contribution</li>
                        </ul>
                      </div>
                      {/* Add more job experiences here */}
                    </div>
                  </TabsContent>
                  <TabsContent value="projects">
                    <h2 className="text-2xl font-bold mb-4">Projects</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <Card className="shadow-md hover:shadow-lg transition-shadow duration-300">
                        <CardContent className="p-4">
                          <h3 className="text-xl font-semibold mb-2">Project Name</h3>
                          <p className="text-gray-600 mb-4">Brief description of the project and its impact.</p>
                          <div className="flex justify-between items-center">
                            <p className="text-sm text-purple-600">Technologies used</p>
                            <a href="#" className="text-purple-600 hover:text-purple-800">
                              <ExternalLink size={20} />
                            </a>
                          </div>
                        </CardContent>
                      </Card>
                      {/* Add more project cards here */}
                    </div>
                  </TabsContent>
                  <TabsContent value="contact">
                    <h2 className="text-2xl font-bold mb-4">Contact Me</h2>
                    <form className="space-y-4">
                      <input
                        type="text"
                        placeholder="Your Name"
                        className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-purple-600"
                      />
                      <input
                        type="email"
                        placeholder="Your Email"
                        className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-purple-600"
                      />
                      <textarea
                        placeholder="Your Message"
                        rows={4}
                        className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-purple-600"
                      ></textarea>
                      <Button type="submit" className="w-full">
                        Send Message
                      </Button>
                    </form>
                  </TabsContent>
                </div>
              </Tabs>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}