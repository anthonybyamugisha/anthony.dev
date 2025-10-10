import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import anthonyImage from '/images/anthony.jpg'

const AboutMe = () => {
  const [isLoaded, setIsLoaded] = useState(true)
  const [currentWord, setCurrentWord] = useState(18) // All words visible
  
  // All sections are visible by default to prevent blank pages
  const visibleSections = [0, 1, 2, 3]
  
  const nameWords = ['BYAMUGISHA', 'ANTHONY']
  const taglineWords = ['Passionate', 'about', 'creating', 'innovative', 'digital', 'solutions', 'and', 'turning', 'ideas', 'into', 'reality.', 'Specializing', 'in', 'modern', 'web', 'technologies', 'and', 'user-centered', 'design.']
  const skills = [
    {
      title: 'Frontend Development',
      description: 'React, HTML, CSS',
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
      )
    },
    {
      title: 'Backend Development',
      description: 'Django',
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 12h14M5 12a2 2 0 01-2-2V5a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2" />
        </svg>
      )
    },
    {
      title: 'Mobile App Development',
      description: 'Flutter, Firebase',
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
        </svg>
      )
    },
    {
      title: 'Chatbot Development',
      description: 'Dialog Design, LLMs, Web Integration, Bot Training',
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
        </svg>
      )
    }
  ]

  const beyondCoding = [
    {
      title: 'Learning',
      description: 'Always exploring new technologies',
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
        </svg>
      )
    },
    {
      title: 'Community',
      description: 'Contributing to open source and mentoring',
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
        </svg>
      )
    },
    {
      title: 'Innovation',
      description: 'Finding creative solutions',
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
        </svg>
      )
    }
  ]

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="relative text-white overflow-hidden min-h-screen flex items-center bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600">
        {/* Background Image */}
        <div className="absolute inset-0 flex items-center justify-center">
          <div 
            className="w-96 h-96 md:w-[500px] md:h-[500px] lg:w-[600px] lg:h-[600px] rounded-full opacity-95 animate-float"
            style={{
              backgroundImage: `url(${anthonyImage})`,
              backgroundSize: 'contain',
              backgroundPosition: 'center',
              backgroundRepeat: 'no-repeat',
              boxShadow: '0 0 150px rgba(59, 130, 246, 0.6), 0 0 300px rgba(147, 51, 234, 0.5)'
            }}
          ></div>
        </div>
        
        {/* Multi-layered Overlay for Professional Look - Reduced top coverage */}
        <div className="absolute inset-0 bg-gradient-to-r from-blue-900/60 via-purple-800/50 to-indigo-900/60"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/40"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-blue-900/40 via-transparent to-transparent"></div>
        
        {/* Backdrop blur for depth - Reduced */}
        <div className="absolute inset-0 backdrop-blur-[0.2px]"></div>
        
        {/* Enhanced Animated background elements */}
        <div className="absolute inset-0">
          <div className="absolute top-10 left-10 w-32 h-32 bg-blue-400 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-float"></div>
          <div className="absolute top-20 right-20 w-40 h-40 bg-purple-400 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-float" style={{ animationDelay: '2s' }}></div>
          <div className="absolute bottom-20 left-20 w-36 h-36 bg-indigo-400 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-float" style={{ animationDelay: '4s' }}></div>
          <div className="absolute top-1/2 right-1/4 w-28 h-28 bg-pink-400 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-float" style={{ animationDelay: '1s' }}></div>
          <div className="absolute bottom-10 right-10 w-24 h-24 bg-cyan-400 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-float" style={{ animationDelay: '3s' }}></div>
          <div className="absolute top-1/3 left-1/3 w-20 h-20 bg-yellow-400 rounded-full mix-blend-multiply filter blur-xl opacity-15 animate-float" style={{ animationDelay: '5s' }}></div>
        </div>
        
        {/* Minimal depth gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-transparent via-transparent to-black/10"></div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24 lg:py-32 z-10">
          <div className="text-center">
            <div className="mb-6 sm:mb-8">
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold mb-4 sm:mb-6">
                <div className="flex flex-wrap justify-center gap-2 md:gap-4">
                  {nameWords.map((word, index) => (
                    <span 
                      key={index}
                      className="inline-block transform transition-all duration-1000 translate-x-0 translate-y-0 opacity-100 rotate-0"
                      style={{ 
                        transitionDelay: `${index * 0.3}s`,
                        color: '#fff', 
                        opacity: isLoaded ? 1 : 0,
                        textShadow: '2px 2px 8px rgba(0,0,0,0.8), 0 0 20px rgba(0,0,0,0.5)',
                        WebkitTextStroke: '1px rgba(255,255,255,0.1)'
                      }}
                    >
                      {word}
                    </span>
                  ))}
                </div>
              </h1>
              <div className="w-16 sm:w-24 h-1 bg-gradient-to-r from-white to-blue-200 mx-auto rounded-full transition-all duration-1000 shadow-lg scale-x-100 opacity-100" style={{ transitionDelay: '0.8s', boxShadow: '0 0 10px rgba(255,255,255,0.5)' }}></div>
            </div>
            <div className="mb-8 sm:mb-12">
              <p className="text-lg sm:text-xl md:text-2xl lg:text-3xl leading-relaxed max-w-5xl mx-auto">
                <span className="flex flex-wrap justify-center gap-1 sm:gap-2">
                  {taglineWords.map((word, index) => {
                    const isVisible = index <= currentWord
                    const direction = index % 4
                    let transformClass = ''
                    
                    if (!isVisible) {
                      switch(direction) {
                        case 0: transformClass = '-translate-x-20 -translate-y-10 opacity-0 rotate-12'; break
                        case 1: transformClass = 'translate-x-20 -translate-y-8 opacity-0 -rotate-12'; break
                        case 2: transformClass = '-translate-x-16 translate-y-12 opacity-0 rotate-6'; break
                        case 3: transformClass = 'translate-x-24 translate-y-8 opacity-0 -rotate-6'; break
                      }
                    }
                    
                    return (
                      <span 
                        key={index}
                        className={`inline-block transition-all duration-700 transform translate-x-0 translate-y-0 opacity-100 rotate-0 ${
                          ['innovative', 'digital', 'solutions'].includes(word) ? 'text-yellow-300 font-semibold' :
                          ['modern', 'web', 'technologies'].includes(word) ? 'text-blue-200 font-semibold' :
                          'text-white'
                        }`}
                        style={{ 
                          transitionDelay: `${index * 0.05}s`,
                          color: isVisible ? undefined : 'transparent',
                          textShadow: isVisible ? '1px 1px 6px rgba(0,0,0,0.8), 0 0 15px rgba(0,0,0,0.4)' : 'none'
                        }}
                      >
                        {word}
                        {index < taglineWords.length - 1 && ' '}
                      </span>
                    )
                  })}
                </span>
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center items-center transition-all duration-1000 transform translate-y-0 opacity-100" style={{ transitionDelay: '2.5s' }}>
              <Link
                to="/projects"
                className="w-full sm:w-auto group bg-white/95 hover:bg-white text-blue-600 font-semibold py-3 sm:py-4 px-6 sm:px-8 rounded-lg transition-all duration-500 transform hover:scale-110 hover:rotate-1 shadow-2xl hover:shadow-3xl border-2 border-transparent hover:border-blue-300 backdrop-blur-sm"
                style={{ boxShadow: '0 10px 30px rgba(0,0,0,0.3), 0 0 20px rgba(255,255,255,0.1)' }}
              >
                <span className="flex items-center justify-center">
                  <svg className="w-5 h-5 mr-2 group-hover:animate-bounce" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                  </svg>
                  View My Work
                </span>
              </Link>
              <Link
                to="/resume"
                className="w-full sm:w-auto group border-2 border-white/90 text-white hover:bg-white hover:text-blue-600 font-semibold py-3 sm:py-4 px-6 sm:px-8 rounded-lg transition-all duration-500 transform hover:scale-110 hover:-rotate-1 backdrop-blur-sm"
                style={{ 
                  boxShadow: '0 10px 30px rgba(0,0,0,0.3), inset 0 0 20px rgba(255,255,255,0.1)',
                  textShadow: '1px 1px 4px rgba(0,0,0,0.5)'
                }}
              >
                <span className="flex items-center justify-center">
                  <svg className="w-5 h-5 mr-2 group-hover:animate-pulse" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                  Visit my resume
                </span>
              </Link>
            </div>
            
            {/* Scroll indicator */}
            <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 transition-all duration-1000 translate-y-0 opacity-70" style={{ 
              transitionDelay: '3s',
              filter: 'drop-shadow(0 0 10px rgba(0,0,0,0.8))'
            }}>
              <div className="animate-bounce">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" style={{
                  textShadow: '0 0 10px rgba(0,0,0,0.8)',
                  filter: 'drop-shadow(0 2px 4px rgba(0,0,0,0.8))'
                }}>
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What I Do Section */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-blue-50 relative overflow-hidden transform transition-all duration-1000 translate-y-0 opacity-100">
        {/* Background pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000000' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
          }}></div>
        </div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-block">
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4 relative transform transition-all duration-1000 translate-y-0 opacity-100" style={{ transitionDelay: '200ms' }}>
                What I Do
                <div className="absolute -bottom-2 left-0 right-0 h-1 bg-gradient-to-r from-blue-600 to-purple-600 transform scale-x-0 transition-transform duration-700 group-hover:scale-x-100"></div>
              </h2>
            </div>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto transform transition-all duration-1000 hover:text-gray-800 translate-y-0 opacity-100" style={{ transitionDelay: '400ms' }}>
              I specialize in building modern, scalable solutions across multiple platforms
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {skills.map((skill, index) => (
              <div
                key={skill.title}
                className="group bg-white p-8 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-4 hover:rotate-2 card-hover border border-gray-100 hover:border-blue-200 relative overflow-hidden translate-y-0 opacity-100"
                style={{ 
                  animationDelay: `${index * 0.1}s`,
                  transitionDelay: `${600 + index * 100}ms`
                }}
              >
                {/* Animated background gradient */}
                <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-purple-50 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                
                <div className="relative z-10">
                  <div className="text-blue-600 mb-4 transform transition-all duration-300 group-hover:scale-110 group-hover:rotate-12">{skill.icon}</div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors duration-300">{skill.title}</h3>
                  <p className="text-gray-600 group-hover:text-gray-700 transition-colors duration-300">{skill.description}</p>
                  
                  {/* Animated bottom border */}
                  <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-600 to-purple-600 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500"></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Beyond Coding Section */}
      <section className="py-20 bg-white relative overflow-hidden transform transition-all duration-1000 translate-y-0 opacity-100">
        {/* Decorative elements */}
        <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600"></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4 relative inline-block transform transition-all duration-1000 translate-y-0 opacity-100" style={{ transitionDelay: '500ms' }}>
              Beyond Coding
              <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-16 h-1 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full"></div>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto transform transition-all duration-1000 hover:text-gray-800 translate-y-0 opacity-100" style={{ transitionDelay: '700ms' }}>
              My commitment to growth and community extends beyond writing code
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {beyondCoding.map((item, index) => (
              <div
                key={item.title}
                className="group text-center p-8 rounded-xl bg-gradient-to-br from-blue-50 to-indigo-50 hover:from-purple-50 hover:to-pink-50 hover:shadow-lg transition-all duration-500 card-hover transform hover:-translate-y-2 hover:scale-105 border border-transparent hover:border-purple-200 translate-y-0 opacity-100"
                style={{ 
                  animationDelay: `${index * 0.15}s`,
                  transitionDelay: `${900 + index * 100}ms`
                }}
              >
                <div className="text-blue-600 group-hover:text-purple-600 mb-4 flex justify-center transform transition-all duration-500 group-hover:scale-125 group-hover:rotate-6">{item.icon}</div>
                <h3 className="text-xl font-semibold text-gray-900 group-hover:text-purple-700 mb-3 transition-colors duration-300">{item.title}</h3>
                <p className="text-gray-600 group-hover:text-gray-700 transition-colors duration-300">{item.description}</p>
                
                {/* Hover glow effect */}
                <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-purple-400 to-pink-400 opacity-0 group-hover:opacity-10 transition-opacity duration-500 -z-10"></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call-to-Action Section */}
      <section className="py-20 bg-white relative overflow-hidden transform transition-all duration-1000 translate-y-0 opacity-100">

        {/* Animated background particles */}
        <div className="absolute inset-0">
          <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-blue-400 rounded-full animate-ping" style={{ animationDelay: '0s' }}></div>
          <div className="absolute top-3/4 right-1/4 w-2 h-2 bg-purple-400 rounded-full animate-ping" style={{ animationDelay: '1s' }}></div>
          <div className="absolute top-1/2 left-1/2 w-2 h-2 bg-indigo-400 rounded-full animate-ping" style={{ animationDelay: '2s' }}></div>
        </div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-2xl p-12 transform transition-all duration-1000 hover:scale-105 border border-blue-100 hover:border-purple-200 shadow-lg hover:shadow-2xl translate-y-0 opacity-100 scale-100" style={{ transitionDelay: '800ms' }}>
            <h2 className="text-3xl sm:text-4xl font-bold mb-6 text-gray-900 relative transform transition-all duration-1000 translate-y-0 opacity-100" style={{ transitionDelay: '1000ms' }}>
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                Ready to Start Your Project?
              </span>
            </h2>
            <p className="text-xl mb-8 max-w-3xl mx-auto text-gray-700 transform transition-all duration-1000 hover:text-gray-900 translate-y-0 opacity-100" style={{ transitionDelay: '1200ms' }}>
              Let's collaborate to bring your ideas to life with cutting-edge technology and innovative solutions.
            </p>
            <Link
              to="/contact"
              className="group inline-flex items-center bg-gradient-to-r from-blue-600 to-purple-600 hover:from-purple-600 hover:to-blue-600 text-white font-semibold py-4 px-8 rounded-lg transition-all duration-500 transform hover:scale-110 hover:-rotate-1 shadow-lg hover:shadow-2xl translate-y-0 opacity-100"
              style={{ transitionDelay: '1400ms' }}
            >
              <span className="mr-2">Let's Talk</span>
              <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}

export default AboutMe