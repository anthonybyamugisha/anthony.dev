import React from 'react'

const Projects = () => {
  const projects = [
    {
      id: 1,
      title: 'E-Commerce Platform',
      description: 'A full-stack e-commerce solution with modern features including user authentication, product management, shopping cart functionality, and secure payment integration.',
      longDescription: 'This comprehensive e-commerce platform demonstrates my ability to build scalable web applications. The project includes a responsive frontend built with React, a robust backend API using Node.js and Express, and a MongoDB database for data persistence. Key features include user registration and authentication, product catalog with search and filtering, shopping cart management, and secure payment processing through Stripe integration.',
      techStack: ['React',, 'Express', 'Stripe'],
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
      <section className="bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 text-white py-16 relative overflow-hidden">
        {/* Animated background elements */}
        <div className="absolute inset-0">
          <div className="absolute top-10 left-10 w-32 h-32 bg-blue-400 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-float"></div>
          <div className="absolute top-20 right-20 w-40 h-40 bg-purple-400 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-float" style={{ animationDelay: '2s' }}></div>
          <div className="absolute bottom-20 left-20 w-36 h-36 bg-indigo-400 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-float" style={{ animationDelay: '4s' }}></div>
          <div className="absolute top-1/2 right-1/4 w-28 h-28 bg-pink-400 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-float" style={{ animationDelay: '1s' }}></div>
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl sm:text-5xl font-bold mb-6" style={{ color: '#fff', opacity: 1 }}>My Projects</h1>
          <p className="text-xl max-w-3xl mx-auto" style={{ color: '#fff', opacity: 1 }}>
            Each project represents a unique challenge and learning experience. From full-stack applications 
            to innovative solutions, explore how I turn ideas into reality.
          </p>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid gap-12">
            {projects.map((project, index) => (
              <div
                key={project.id}
                className={`flex flex-col ${
                  index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'
                } items-center gap-8 lg:gap-12`}
              >
                {/* Project Image */}
                <div className="w-full lg:w-1/2">
                  <div className="relative group">
                    <div className="bg-gradient-to-br from-blue-400 to-purple-500 rounded-xl p-1">
                      <div className="bg-white rounded-lg p-8 h-80 flex items-center justify-center">
                        <div className="text-center">
                          <div className="w-20 h-20 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                            <svg className="w-10 h-10 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                            </svg>
                          </div>
                          <p className="text-gray-500">Project Screenshot</p>
                        </div>
                      </div>
                    </div>
                    <div className="absolute inset-0 bg-blue-600 bg-opacity-0 hover:bg-opacity-10 rounded-xl transition-all duration-300"></div>
                  </div>
                </div>

                {/* Project Content */}
                <div className="w-full lg:w-1/2">
                  <div className="space-y-6">
                    {/* Category Badge */}
                    <div>
                      <span className="inline-block bg-blue-100 text-blue-800 text-sm font-medium px-3 py-1 rounded-full">
                        {project.category}
                      </span>
                    </div>

                    {/* Title and Description */}
                    <div>
                      <h3 className="text-3xl font-bold text-gray-900 mb-4">{project.title}</h3>
                      <p className="text-gray-600 text-lg leading-relaxed mb-4">
                        {project.longDescription}
                      </p>
                    </div>

                    {/* Tech Stack */}
                    <div>
                      <h4 className="text-lg font-semibold text-gray-900 mb-3">Tech Stack:</h4>
                      <div className="flex flex-wrap gap-2">
                        {project.techStack.map((tech) => (
                          <span
                            key={tech}
                            className="bg-gray-100 text-gray-800 px-3 py-1 rounded-full text-sm font-medium"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Key Features */}
                    <div>
                      <h4 className="text-lg font-semibold text-gray-900 mb-3">Key Features:</h4>
                      <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                        {project.features.map((feature, featureIndex) => (
                          <li key={featureIndex} className="flex items-start">
                            <svg className="w-5 h-5 text-green-500 mt-0.5 mr-2 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                              <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                            </svg>
                            <span className="text-gray-600 text-sm">{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Action Buttons */}
                    <div className="flex space-x-4">
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center bg-gray-900 text-white px-6 py-3 rounded-lg hover:bg-gray-800 transition-colors duration-200"
                      >
                        <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M10 0C4.477 0 0 4.484 0 10.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0110 4.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.203 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.942.359.31.678.921.678 1.856 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0020 10.017C20 4.484 15.522 0 10 0z" clipRule="evenodd" />
                        </svg>
                        GitHub
                      </a>
                      <a
                        href={project.demo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors duration-200"
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
      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Interested in Working Together?</h2>
          <p className="text-xl text-gray-600 mb-8">
            I'm always excited to take on new challenges and bring innovative ideas to life. 
            Let's discuss how we can collaborate on your next project.
          </p>
          <div className="space-x-4">
            <a
              href="/contact"
              className="bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition-colors duration-200 inline-block"
            >
              Get In Touch
            </a>
            <a
              href="/resume"
              className="border border-gray-300 text-gray-700 px-8 py-3 rounded-lg hover:border-gray-400 transition-colors duration-200 inline-block"
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