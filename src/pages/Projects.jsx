import React, { useState, useEffect } from 'react';

const Projects = () => {
  const [visibleSections, setVisibleSections] = useState({
    header: false,
    projects: [],
    cta: false
  });
  const [filter, setFilter] = useState('All');

  useEffect(() => {
    // Initialize all projects as visible from the start
    const initialVisibleProjects = getFilteredProjects().map((_, index) => index);
    
    const timeouts = [
      setTimeout(() => setVisibleSections(prev => ({ ...prev, header: true })), 100),
      setTimeout(() => setVisibleSections(prev => ({ ...prev, projects: initialVisibleProjects })), 300),
      setTimeout(() => setVisibleSections(prev => ({ ...prev, cta: true })), 800)
    ];
    
    return () => timeouts.forEach(clearTimeout);
  }, []);

  // Reset visibility when filter changes
  useEffect(() => {
    const filtered = getFilteredProjects();
    const visibleProjects = filtered.map((_, index) => index);
    
    setVisibleSections(prev => ({
      ...prev,
      projects: visibleProjects
    }));
  }, [filter]);

  const projects = [
    {
      id: 1,
      title: 'VendorSync - Inventory Management System',
      description: 'A comprehensive inventory management solution for vendors with real-time stock tracking, automated ordering, and predictive analytics.',
      longDescription: 'VendorSync is a sophisticated inventory management platform designed for vendors to streamline their operations. Built with Flutter and Firebase, it provides real-time stock monitoring, automated replenishment orders, and predictive analytics to optimize inventory levels. The system integrates with supplier networks to ensure seamless ordering processes and prevent stockouts. The mobile-first approach ensures vendors can manage their inventory from anywhere.',
      techStack: ['Flutter', 'Dart', 'Firebase Firestore', 'Firebase Auth'],
      features: [
        'Real-time stock level monitoring',
        'Automated reorder suggestions',
        'Sales prediction engine',
        'Supplier integration',
        'Analytics dashboard',
        'Cross-platform mobile app',
        'Vendor confirmation workflow'
      ],
      github: 'https://github.com/anthonybyamugisha',
      image: '/images/Vendor sync.jpeg',
      category: 'Mobile App'
    },
    {
      id: 2,
      title: 'Forex Giants Mobile App',
      description: 'A comprehensive forex trading education application designed to teach people forex trading free of charge.',
      longDescription: 'Forex Giants is an innovative forex trading education application developed by Algo FX, designed to teach people forex trading completely free of charge. Built with Flutter, this app provides an intuitive and engaging learning experience for both beginners and experienced traders. The application features interactive lessons, real-time market analysis, trading simulations, and a community of traders to enhance the learning experience. With its beautiful interface and user-friendly design, Forex Giants makes forex education accessible to everyone.',
      techStack: ['Flutter', 'Dart'],
      features: [
        'Comprehensive forex trading courses',
        'Progress tracking and achievements',
        'Beautiful and intuitive UI/UX design'
      ],
      github: 'https://github.com/anthonybyamugisha',
      image: '/images/forex giants mobile app.jpeg',
      category: 'Mobile App'
    },
    {
      id: 3,
      title: 'E-Commerce Frontend',
      description: 'A modern e-commerce frontend built with React and Redux for a seamless shopping experience.',
      longDescription: 'A responsive e-commerce frontend solution built with React, Redux, and Tailwind CSS. This project features a modern UI/UX design with smooth animations, product filtering, cart functionality, and user authentication. The application is optimized for performance and provides an intuitive shopping experience across all device sizes.',
      techStack: ['React', 'Redux', 'Tailwind CSS', 'JavaScript'],
      features: [
        'Responsive design for all devices',
        'Product filtering and search',
        'Shopping cart functionality',
        'User authentication',
        'Wishlist management',
        'Order history tracking'
      ],
      github: 'https://github.com/anthonybyamugisha',
      image: 'https://placehold.co/600x400/3b82f6/ffffff?text=E-Commerce+Frontend',
      category: 'Frontend'
    },
    {
      id: 4,
      title: 'Task Management API',
      description: 'A RESTful API for task management with user authentication and real-time updates.',
      longDescription: 'A robust backend API built with Node.js, Express, and MongoDB for task management applications. Features include user authentication with JWT, real-time updates with WebSockets, task categorization, due date reminders, and team collaboration features. The API follows RESTful principles and includes comprehensive documentation.',
      techStack: ['Node.js', 'Express', 'MongoDB', 'JWT'],
      features: [
        'User authentication with JWT',
        'RESTful API design',
        'Real-time updates with WebSockets',
        'Task categorization and tagging',
        'Due date reminders',
        'Team collaboration features'
      ],
      github: 'https://github.com/anthonybyamugisha',
      image: 'https://placehold.co/600x400/10b981/ffffff?text=Task+API',
      category: 'Backend'
    },
    {
      id: 5,
      title: 'Social Media Platform',
      description: 'A full-stack social media application with real-time messaging and content sharing.',
      longDescription: 'A comprehensive social media platform built with the MERN stack (MongoDB, Express, React, Node.js). Features include user profiles, friend connections, real-time messaging, content sharing with reactions, notifications, and a news feed algorithm. The application is designed for scalability and includes both frontend and backend components.',
      techStack: ['React', 'Node.js', 'Express', 'MongoDB', 'Socket.io'],
      features: [
        'User profiles and authentication',
        'Friend connections and messaging',
        'Content sharing with reactions',
        'Real-time notifications',
        'News feed algorithm',
        'Media upload and storage'
      ],
      github: 'https://github.com/anthonybyamugisha',
      image: 'https://placehold.co/600x400/8b5cf6/ffffff?text=Social+Platform',
      category: 'Full Stack'
    }
  ];

  const categories = ['All', 'Mobile App', 'Frontend', 'Backend', 'Full Stack'];
  
  const getFilteredProjects = () => {
    if (filter === 'All') {
      return projects;
    }
    return projects.filter(project => project.category === filter);
  };

  const getCategoryCount = (category) => {
    if (category === 'All') {
      return projects.length;
    }
    return projects.filter(project => project.category === category).length;
  };

  const filteredProjects = getFilteredProjects();

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
          }`}>My Projects</h1>
          <p className={`text-xl max-w-3xl mx-auto transition-all duration-1000 delay-400 ${
            visibleSections.header ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'
          }`}>
            Each project represents a unique challenge and learning experience. From mobile applications 
            to innovative solutions, explore how I turn ideas into reality.
          </p>
        </div>
      </section>

      {/* Projects Filter */}
      <section className="py-8 bg-gradient-to-r from-gray-50 to-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setFilter(category)}
                className={`px-6 py-3 rounded-full text-sm font-semibold transition-all duration-300 transform hover:scale-105 flex items-center space-x-2 ${
                  filter === category
                    ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg'
                    : 'bg-white text-gray-700 hover:bg-gray-100 shadow-md'
                }`}
              >
                <span>{category}</span>
                <span className={`text-xs px-2 py-1 rounded-full min-w-[24px] text-center ${
                  filter === category
                    ? 'bg-white text-blue-600 font-bold'
                    : 'bg-gray-200 text-gray-700'
                }`}>
                  {getCategoryCount(category)}
                </span>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-blue-50 relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-20 left-10 w-40 h-40 bg-blue-200 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-float"></div>
          <div className="absolute bottom-20 right-10 w-32 h-32 bg-purple-200 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-float" style={{ animationDelay: '3s' }}></div>
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {filteredProjects.length === 0 ? (
            <div className="text-center py-20">
              <h3 className="text-2xl font-semibold text-gray-700 mb-4">No projects found</h3>
              <p className="text-gray-500">There are no projects in this category yet. Check back soon!</p>
            </div>
          ) : (
            <div className="grid gap-16">
              {filteredProjects.map((project, index) => (
                <React.Fragment key={project.id}>
                  <div
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
                          <div className="bg-white rounded-xl overflow-hidden">
                            <img 
                              src={project.image}
                              alt={project.title}
                              className="w-full h-80 object-contain transition-transform duration-500 hover:scale-110 bg-white p-4"
                              onError={(e) => {
                                e.target.onerror = null;
                                e.target.src = 'https://placehold.co/600x400/3b82f6/ffffff?text=Project+Image';
                              }}
                            />
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

                      </div>
                    </div>
                  </div>
                
                  {/* Separator between projects (except after the last project) */}
                  {index < filteredProjects.length - 1 && (
                    <div className="relative py-8">
                      <div className="absolute inset-0 flex items-center" aria-hidden="true">
                        <div className="w-full border-t border-gray-300"></div>
                      </div>
                      <div className="relative flex justify-center">
                        <span className="bg-gradient-to-br from-gray-50 to-blue-50 px-4 text-sm text-gray-500">
                          <div className="w-8 h-8 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 flex items-center justify-center">
                            <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                            </svg>
                          </div>
                        </span>
                      </div>
                    </div>
                  )}
                </React.Fragment>
              ))}
            </div>
          )}
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
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">Let's Work Together</h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            I'm always excited to collaborate on new projects and bring innovative ideas to life.
          </p>
          <a href="/contact" className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-xl hover:from-blue-700 hover:to-purple-700 transition-all duration-300 font-semibold shadow-lg transform hover:scale-105 inline-block">
            Get In Touch
          </a>
        </div>
      </section>
    </div>
  );
};

export default Projects;