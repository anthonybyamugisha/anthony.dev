import React, { useState, useEffect } from 'react'

const Projects = () => {
  const [visibleSections, setVisibleSections] = useState({
    header: false,
    projects: [],
    cta: false
  })

  useEffect(() => {
    const timeouts = [
      setTimeout(() => setVisibleSections(prev => ({ ...prev, header: true })), 100),
      setTimeout(() => setVisibleSections(prev => ({ ...prev, cta: true })), 800)
    ]
    projects.forEach((_, index) => {
      timeouts.push(setTimeout(() => {
        setVisibleSections(prev => ({
          ...prev,
          projects: [...prev.projects, index]
        }))
      }, 300 + index * 200))
    })
    return () => timeouts.forEach(clearTimeout)
  }, [])

  const projects = [
    {
      id: 1,
      title: 'E-Commerce Platform',
      description: 'A full-stack e-commerce solution with modern features including user authentication, product management, shopping cart functionality, and secure payment integration.',
      longDescription: 'This comprehensive e-commerce platform demonstrates my ability to build scalable web applications. The project includes a responsive frontend built with React, a robust backend API using Node.js and Express, and a MongoDB database for data persistence. Key features include user registration and authentication, product catalog with search and filtering, shopping cart management, and secure payment processing through Stripe integration.',
      techStack: ['React', 'Node.js', 'MongoDB', 'Express', 'Stripe'],
      features: [
        'User authentication and authorization',
        'Product management system',
        'Shopping cart functionality',
        'Payment integration with Stripe',
        'Responsive design',
        'Order management',
        'Admin dashboard'
      ],
      github: 'https://github.com/anthonybyamugisha',
      demo: '#',
      image: '/api/placeholder/600/400',
      category: 'Full Stack'
    },
    {
      id: 2,
      title: 'Task Management App',
      description: 'An intuitive task management application with drag-and-drop functionality, real-time updates, and a beautiful Material-UI interface.',
      longDescription: 'This task management application showcases my frontend development skills and understanding of modern React patterns. Built with React and Firebase, it features a clean Material-UI design with drag-and-drop functionality powered by React DnD. The app includes real-time synchronization, task categorization, priority management, and collaborative features.',
      techStack: ['React', 'Firebase', 'Material-UI', 'React DnD'],
      features: [
        'Drag-and-drop task organization',
        'Real-time updates',
        'Task categorization and priorities',
        'Collaborative workspace',
        'Progress tracking',
        'Material-UI design system',
        'Mobile responsive'
      ],
      github: 'https://github.com/anthonybyamugisha',
      demo: '#',
      image: '/api/placeholder/600/400',
      category: 'Frontend'
    }
  ]

  return (
    <div className="bg-white min-h-screen">
      {/* Header Section */}
      <section className={`bg-gradient-to-br from-blue-600 via-purple-600 to-indigo-600 text-white py-20 relative overflow-hidden transition-all duration-1000 ${
        visibleSections.header ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
      }`}>
        {/* Animated background elements */}
        <div className="absolute inset-0">
          <div className="absolute top-10 left-10 w-32 h-32 bg-blue-400 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-float"></div>
          <div className="absolute top-20 right-20 w-40 h-40 bg-purple-400 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-float" style={{ animationDelay: '2s' }}></div>
          <div className="absolute bottom-20 left-20 w-36 h-36 bg-indigo-400 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-float" style={{ animationDelay: '4s' }}></div>
          <div className="absolute top-1/2 right-1/4 w-28 h-28 bg-pink-400 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-float" style={{ animationDelay: '1s' }}></div>
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className={`text-4xl sm:text-6xl font-bold mb-6 transition-all duration-1000 delay-200 ${
            visibleSections.header ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'
          }`} style={{ color: '#fff' }}>My Projects</h1>
          <p className={`text-xl max-w-3xl mx-auto transition-all duration-1000 delay-400 ${
            visibleSections.header ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'
          }`} style={{ color: '#fff' }}>
            Each project represents a unique challenge and learning experience. From full-stack applications 
            to innovative solutions, explore how I turn ideas into reality.
          </p>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-blue-50 relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-20 left-10 w-40 h-40 bg-blue-200 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-float"></div>
          <div className="absolute bottom-20 right-10 w-32 h-32 bg-purple-200 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-float" style={{ animationDelay: '3s' }}></div>
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid gap-16">
            {projects.map((project, index) => (
              <div
                key={project.id}
                className={`flex flex-col ${
                  index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'
                } items-center gap-8 lg:gap-16 transition-all duration-1000 ${
                  visibleSections.projects.includes(index) 
                    ? 'opacity-100 translate-y-0' 
                    : 'opacity-0 translate-y-20'
                }`}
              >
                {/* Project Image */}
                <div className="w-full lg:w-1/2">
                  <div className="relative group transform transition-all duration-500 hover:scale-105">
                    <div className="absolute inset-0 bg-gradient-to-br from-blue-400 to-purple-500 rounded-2xl transform rotate-3 opacity-20 group-hover:rotate-6 transition-all duration-500"></div>
                    <div className="relative bg-gradient-to-br from-blue-400 via-purple-500 to-indigo-500 rounded-2xl p-1 shadow-2xl hover:shadow-3xl transition-all duration-500">
                      <div className="bg-white rounded-xl p-8 h-80 flex items-center justify-center">
                        <div className="text-center">
                          <div className="w-24 h-24 bg-gradient-to-br from-blue-100 to-purple-100 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg transform group-hover:scale-110 transition-all duration-300">
                            <svg className="w-12 h-12 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                            </svg>
                          </div>
                          <p className="text-gray-600 font-medium">Project Preview</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Project Content */}
                <div className="w-full lg:w-1/2">
                  <div className={`space-y-6 transition-all duration-1000 ${
                    visibleSections.projects.includes(index)
                      ? 'opacity-100 translate-x-0'
                      : `opacity-0 ${index % 2 === 0 ? 'translate-x-10' : '-translate-x-10'}`
                  }`}>
                    {/* Category Badge */}
                    <div className="transform transition-all duration-500 hover:scale-105">
                      <span className="inline-block bg-gradient-to-r from-blue-100 to-purple-100 text-blue-800 text-sm font-semibold px-4 py-2 rounded-full shadow-md">
                        {project.category}
                      </span>
                    </div>

                    {/* Title and Description */}
                    <div>
                      <h3 className="text-3xl lg:text-4xl font-bold bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent mb-4 hover:from-blue-600 hover:to-purple-600 transition-all duration-500">{project.title}</h3>
                      <p className="text-gray-600 text-lg leading-relaxed mb-4">
                        {project.longDescription}
                      </p>
                    </div>

                    {/* Tech Stack */}
                    <div>
                      <h4 className="text-lg font-semibold text-gray-900 mb-3">Tech Stack:</h4>
                      <div className="flex flex-wrap gap-3">
                        {project.techStack.map((tech, techIndex) => (
                          <span
                            key={tech}
                            className={`bg-gradient-to-r from-gray-100 to-gray-50 text-gray-800 px-4 py-2 rounded-full text-sm font-medium shadow-md hover:shadow-lg transform hover:scale-105 transition-all duration-300 hover:from-blue-100 hover:to-purple-100 ${
                              visibleSections.projects.includes(index)
                                ? 'opacity-100 translate-y-0'
                                : 'opacity-0 translate-y-3'
                            }`}
                            style={{ transitionDelay: `${400 + techIndex * 100}ms` }}
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Key Features */}
                    <div>
                      <h4 className="text-lg font-semibold text-gray-900 mb-4">Key Features:</h4>
                      <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                        {project.features.map((feature, featureIndex) => (
                          <li 
                            key={featureIndex} 
                            className={`flex items-start p-2 rounded-lg hover:bg-gradient-to-r hover:from-blue-50 hover:to-purple-50 transition-all duration-300 transform hover:scale-102 ${
                              visibleSections.projects.includes(index)
                                ? 'opacity-100 translate-x-0'
                                : 'opacity-0 -translate-x-3'
                            }`}
                            style={{ transitionDelay: `${600 + featureIndex * 100}ms` }}
                          >
                            <div className="w-6 h-6 bg-gradient-to-br from-green-400 to-emerald-500 rounded-full flex items-center justify-center mr-3 mt-0.5 flex-shrink-0 shadow-md">
                              <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                              </svg>
                            </div>
                            <span className="text-gray-700 text-sm font-medium">{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Action Buttons */}
                    <div className={`flex flex-col sm:flex-row gap-4 transition-all duration-1000 ${
                      visibleSections.projects.includes(index) ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'
                    }`}>
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center justify-center bg-gradient-to-r from-gray-900 to-gray-800 text-white px-6 py-3 rounded-xl hover:from-gray-800 hover:to-gray-700 transition-all duration-300 font-medium shadow-lg transform hover:scale-105"
                      >
                        <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M10 0C4.477 0 0 4.484 0 10.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0110 4.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.203 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.942.359.31.678.921.678 1.856 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0020 10.017C20 4.484 15.522 0 10 0z" clipRule="evenodd" />
                        </svg>
                        View Code
                      </a>
                      <a
                        href={project.demo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center justify-center bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-3 rounded-xl hover:from-blue-700 hover:to-purple-700 transition-all duration-300 font-medium shadow-lg transform hover:scale-105"
                      >
                        <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                        </svg>
                        Live Demo
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className={`py-20 bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900 relative overflow-hidden transition-all duration-1000 ${
        visibleSections.cta ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
      }`}>
        <div className="absolute inset-0">
          <div className="absolute top-10 left-10 w-32 h-32 bg-blue-400 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-float"></div>
          <div className="absolute bottom-20 right-20 w-40 h-40 bg-purple-400 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-float" style={{ animationDelay: '2s' }}></div>
        </div>
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className={`text-3xl sm:text-4xl font-bold text-white mb-6 transition-all duration-1000 delay-200 ${
            visibleSections.cta ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'
          }`}>Interested in Working Together?</h2>
          <p className={`text-xl text-gray-300 mb-8 max-w-2xl mx-auto transition-all duration-1000 delay-400 ${
            visibleSections.cta ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'
          }`}>
            I'm always excited to take on new challenges and bring innovative ideas to life. 
            Let's discuss how we can collaborate on your next project.
          </p>
          <div className={`flex flex-col sm:flex-row gap-4 justify-center transition-all duration-1000 delay-600 ${
            visibleSections.cta ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'
          }`}>
            <a
              href="/contact"
              className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-xl hover:from-blue-700 hover:to-purple-700 transition-all duration-300 font-semibold shadow-lg transform hover:scale-105 inline-block"
            >
              Get In Touch
            </a>
            <a
              href="/resume"
              className="border-2 border-white/30 text-white px-8 py-4 rounded-xl hover:border-white/50 hover:bg-white/10 transition-all duration-300 font-semibold backdrop-blur-sm transform hover:scale-105 inline-block"
            >
              View Resume
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Projects