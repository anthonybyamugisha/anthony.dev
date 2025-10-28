import React, { useEffect, useState } from 'react'
import anthonyImage from '/images/anthony.jpg'

const Resume = () => {
  const [isLoaded, setIsLoaded] = useState(false)
  const [currentWord, setCurrentWord] = useState(18) // All words visible
  const [animatedSections, setAnimatedSections] = useState({})
  
  // All sections are visible by default to prevent blank pages
  const visibleSections = [0, 1, 2, 3, 4, 5]
  
  const nameWords = ['BYAMUGISHA', 'ANTHONY']
  const titleWords = ['Aspiring', 'Computer', 'Scientist', 'and', 'Data', 'Enthusiast']
  
  const education = [
    {
      period: '2024-Present',
      institution: 'Makerere University',
      degree: 'Bachelor of Science in Computer Science',
      status: 'Current'
    },
    {
      period: '2021-2023',
      institution: 'Buddo Secondary School',
      degree: 'UACE (20/20 points, all Distinctions)',
      status: 'Completed'
    },
    {
      period: '2017-2020',
      institution: 'Mwizi Secondary School',
      degree: 'UCE (14 aggregates in 8 subjects)',
      status: 'Completed'
    },
    {
      period: '2009-2016',
      institution: 'Akashabo Primary School',
      degree: 'PLE (8 aggregates)',
      status: 'Completed'
    }
  ]

  const awards = [
    {
      title: 'Best Student Overall Award',
      year: '2024',
      institution: 'Buddo Secondary School',
      description: 'Recognized as the Best Student Overall in the Uganda Advanced Certificate of Education (UACE) examinations at Buddo S.S. Scored the maximum 20/20 points (all Distinctions, including ICT D1 and General Paper D2). Earned the prestigious title of "Achiever", an honor reserved exclusively for students attaining the highest academic distinction at Buddo S.S. Featured among the top students in Uganda (New Vision, March 2024).'
    },
    {
      title: 'Outstanding Academic Performance Award',
      year: '2021',
      institution: 'Mwizi Secondary School',
      description: 'Recognized as the Best Student Overall at Mwizi Secondary School in the Uganda Certificate of Education (UCE) examinations. Scored 14 aggregates in 8 subjects, the highest performance in the school and across the county. Ranked 2nd in Rwampara District and among the top students.'
    },
    {
      title: 'Best Student Overall Award',
      year: '2017',
      institution: 'Akashabo Primary School',
      description: 'Awarded for being the best student in the school during Primary Leaving Examination (PLE). Scored 8 aggregates, getting D2 in each paper.'
    }
  ]

  const skills = {
    programming: ['Python', 'JavaScript', 'Dart'],
    frameworks: ['Django', 'React', 'Flutter', 'Pandas', 'NumPy', 'Matplotlib'],
    methodologies: ['Agile']
  }

  const languages = [
    { language: 'English', proficiency: 'Proficient', level: 4 },
    { language: 'Runyankole, Rukiga', proficiency: 'Native', level: 5 },
    { language: 'Luganda', proficiency: 'Proficient', level: 4 }
  ]

  // Handle scroll animations
  useEffect(() => {
    setIsLoaded(true)
    
    // Animate title words sequentially (similar to About page)
    const wordTimer = setTimeout(() => {
      let wordIndex = -1
      const wordInterval = setInterval(() => {
        wordIndex++
        setCurrentWord(wordIndex)
        if (wordIndex >= titleWords.length - 1) {
          clearInterval(wordInterval)
        }
      }, 150)
    }, 1000)
    
    // Handle section animations on scroll
    const handleScroll = () => {
      const sections = document.querySelectorAll('section')
      sections.forEach((section, index) => {
        const rect = section.getBoundingClientRect()
        const isVisible = rect.top < window.innerHeight * 0.75 && rect.bottom >= 0
        if (isVisible && !animatedSections[index]) {
          setAnimatedSections(prev => ({ ...prev, [index]: true }))
        }
      })
    }
    
    window.addEventListener('scroll', handleScroll)
    handleScroll() // Check initial positions
    
    return () => {
      clearTimeout(wordTimer)
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

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
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Professional Circular Image - Top Right */}
          <div className="absolute top-4 -right-2 md:-right-8 lg:-right-12 z-20">
            <div 
              className="w-20 h-20 md:w-28 md:h-28 lg:w-36 lg:h-36 rounded-full bg-cover bg-center border-4 border-white shadow-2xl transform hover:scale-105 transition-all duration-500 animate-float"
              style={{
                backgroundImage: `url(${anthonyImage})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                boxShadow: '0 10px 30px rgba(0,0,0,0.3), 0 0 20px rgba(255,255,255,0.5)'
              }}
            ></div>
            {/* Glowing ring effect */}
            <div className="absolute inset-0 rounded-full border-2 border-blue-300 opacity-50 animate-ping" style={{ animationDelay: '1s' }}></div>
          </div>
          
          <div className="text-center pr-16 md:pr-20 lg:pr-24">
            <h1 className="text-4xl sm:text-5xl font-bold mb-4 transform transition-all duration-1000 translate-y-0 opacity-100 scale-100" style={{ 
              color: '#fff', 
              opacity: isLoaded ? 1 : 0,
              textShadow: '2px 2px 8px rgba(0,0,0,0.3)'
            }}>
              <div className="flex flex-wrap justify-center gap-2 md:gap-4">
                {nameWords.map((word, index) => (
                  <span 
                    key={index}
                    className={`inline-block transform transition-all duration-1000 ${isLoaded ? 'translate-x-0 translate-y-0 opacity-100 rotate-0' : 'translate-y-10 opacity-0'}`}
                    style={{ 
                      transitionDelay: `${0.5 + index * 0.3}s`,
                      color: '#fff', 
                      textShadow: '2px 2px 8px rgba(0,0,0,0.8), 0 0 20px rgba(0,0,0,0.5)',
                      WebkitTextStroke: '1px rgba(255,255,255,0.1)'
                    }}
                  >
                    {word}
                  </span>
                ))}
              </div>
            </h1>
            <h2 className="text-xl sm:text-2xl mb-6 transform transition-all duration-1000 translate-y-0 opacity-100" style={{ 
              color: '#fff', 
              opacity: isLoaded ? 1 : 0,
              transitionDelay: '1.3s',
              textShadow: '1px 1px 4px rgba(0,0,0,0.3)'
            }}>
              <span className="flex flex-wrap justify-center gap-1 sm:gap-2">
                {titleWords.map((word, index) => {
                  const isVisible = index <= currentWord
                  
                  return (
                    <span 
                      key={index}
                      className={`inline-block transition-all duration-700 transform translate-x-0 translate-y-0 opacity-100 rotate-0 ${
                        ['Computer', 'Scientist'].includes(word) ? 'text-yellow-300 font-semibold' :
                        ['Data', 'Enthusiast'].includes(word) ? 'text-blue-200 font-semibold' :
                        'text-white'
                      }`}
                      style={{ 
                        transitionDelay: `${index * 0.1}s`,
                        color: isVisible ? undefined : 'transparent',
                        textShadow: isVisible ? '1px 1px 6px rgba(0,0,0,0.8), 0 0 15px rgba(0,0,0,0.4)' : 'none'
                      }}
                    >
                      {word}
                      {index < titleWords.length - 1 && ' '}
                    </span>
                  )
                })}
              </span>
            </h2>
            <div className="flex flex-col sm:flex-row justify-center items-center space-y-2 sm:space-y-0 sm:space-x-6 transform transition-all duration-1000 translate-y-0 opacity-100" style={{ 
              color: '#fff', 
              opacity: isLoaded ? 1 : 0,
              transitionDelay: '2.5s'
            }}>
              <div className="flex items-center space-x-2 transform transition-all duration-500 hover:scale-105 translate-x-0 opacity-100" style={{ transitionDelay: '2.7s' }}>
                <svg className="w-5 h-5 animate-pulse" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                </svg>
                <span>Makerere, Kampala Uganda</span>
              </div>
              <div className={`flex items-center space-x-2 transform transition-all duration-500 hover:scale-105 ${
                isLoaded ? 'translate-x-0 opacity-100' : '-translate-x-10 opacity-0'
              }`} style={{ transitionDelay: '2.9s' }}>
                <svg className="w-5 h-5 animate-pulse" fill="currentColor" viewBox="0 0 20 20" style={{ animationDelay: '0.5s' }}>
                  <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                </svg>
                <span>+256748161708 / +256769864032</span>
              </div>
              <div className={`flex items-center space-x-2 transform transition-all duration-500 hover:scale-105 ${
                isLoaded ? 'translate-x-0 opacity-100' : '-translate-x-10 opacity-0'
              }`} style={{ transitionDelay: '3.1s' }}>
                <svg className="w-5 h-5 animate-pulse" fill="currentColor" viewBox="0 0 20 20" style={{ animationDelay: '1s' }}>
                  <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                  <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                </svg>
                <a href="mailto:byamugishanthony@gmail.com" className="hover:text-blue-300 transition-all duration-300 hover:underline" style={{ color: '#fff', opacity: 1 }}>
                  byamugishanthony@gmail.com
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Personal Statement */}
        <section className="mb-12 transform transition-all duration-1000 translate-y-0 opacity-100">
          <h3 className="text-2xl font-bold text-gray-900 mb-6 border-b-2 border-blue-600 pb-2 relative group">
            Personal Statement
            <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-purple-600 to-blue-600 group-hover:w-full transition-all duration-500"></div>
          </h3>
          <div className="bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 p-6 rounded-lg shadow-sm hover:shadow-xl transition-all duration-500 transform hover:-translate-y-1 border border-blue-100 hover:border-blue-200 relative overflow-hidden group">
            {/* Animated background elements */}
            <div className="absolute inset-0 opacity-10">
              <div className="absolute top-2 right-2 w-8 h-8 bg-blue-400 rounded-full blur-md animate-pulse"></div>
              <div className="absolute bottom-2 left-2 w-6 h-6 bg-purple-400 rounded-full blur-sm animate-bounce" style={{ animationDelay: '1s' }}></div>
            </div>
            <p className="text-gray-700 leading-relaxed text-lg relative z-10 group-hover:text-gray-800 transition-colors duration-300">
              Second-year Computer Science student at Makerere University with a strong passion for data science and analytics. 
              Demonstrated exceptional academic performance throughout my educational journey, coupled with strong problem-solving 
              skills and an eagerness to learn and apply cutting-edge technologies in real-world scenarios.
            </p>
          </div>
        </section>

        {/* Education Timeline */}
        <section className="mb-12 transform transition-all duration-1000 translate-y-0 opacity-100">
          <h3 className="text-2xl font-bold text-gray-900 mb-6 border-b-2 border-blue-600 pb-2 relative group">
            Education Timeline
            <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-purple-600 to-blue-600 group-hover:w-full transition-all duration-500"></div>
          </h3>
          <div className="space-y-6">
            {education.map((edu, index) => (
              <div 
                key={index} 
                className="flex flex-col md:flex-row md:items-center bg-white border border-gray-200 rounded-lg p-6 shadow-sm hover:shadow-xl transition-all duration-500 transform hover:-translate-y-2 hover:scale-105 group relative overflow-hidden"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                {/* Animated background gradient */}
                <div className="absolute inset-0 bg-gradient-to-r from-blue-50 to-purple-50 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                
                <div className="md:w-32 mb-2 md:mb-0 relative z-10">
                  <span className={`inline-block px-3 py-1 text-sm font-medium rounded-full transition-all duration-300 transform group-hover:scale-110 ${
                    edu.status === 'Current' ? 'bg-green-100 text-green-800 group-hover:bg-green-200' : 'bg-blue-100 text-blue-800 group-hover:bg-blue-200'
                  }`}>
                    {edu.period}
                  </span>
                </div>
                <div className="md:ml-6 flex-1 relative z-10">
                  <h4 className="text-lg font-semibold text-gray-900 group-hover:text-blue-600 transition-colors duration-300">{edu.institution}</h4>
                  <p className="text-gray-600 group-hover:text-gray-700 transition-colors duration-300">{edu.degree}</p>
                </div>
                
                {/* Animated border */}
                <div className="absolute bottom-0 left-0 w-0 h-1 bg-gradient-to-r from-blue-600 to-purple-600 group-hover:w-full transition-all duration-500"></div>
              </div>
            ))}
          </div>
        </section>

        {/* Awards and Honors */}
        <section className="mb-12 transform transition-all duration-1000 translate-y-0 opacity-100">
          <h3 className="text-2xl font-bold text-gray-900 mb-6 border-b-2 border-blue-600 pb-2 relative group">
            Outstanding Academic Achievements
            <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-purple-600 to-blue-600 group-hover:w-full transition-all duration-500"></div>
          </h3>
          <div className="grid gap-8">
            {awards.map((award, index) => (
              <div key={index} className="relative bg-gradient-to-br from-amber-50 via-yellow-50 to-orange-50 border border-amber-200 rounded-xl p-6 hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 hover:scale-105 overflow-hidden group">
                {/* Animated background elements */}
                <div className="absolute inset-0 opacity-20">
                  <div className="absolute top-2 right-2 w-16 h-16 bg-gradient-to-br from-yellow-300 to-amber-400 rounded-full blur-xl animate-pulse"></div>
                  <div className="absolute bottom-2 left-2 w-12 h-12 bg-gradient-to-br from-orange-300 to-red-400 rounded-full blur-lg animate-bounce" style={{ animationDelay: '1s' }}></div>
                  <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-8 h-8 bg-gradient-to-br from-amber-400 to-yellow-500 rounded-full blur-md animate-ping" style={{ animationDelay: '2s' }}></div>
                </div>
                
                {/* Gradient overlay that appears on hover */}
                <div className="absolute inset-0 bg-gradient-to-r from-yellow-200/20 to-amber-300/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-xl"></div>
                
                <div className="relative z-10 flex items-start">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 bg-gradient-to-br from-yellow-400 to-amber-500 rounded-full flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
                      <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    </div>
                  </div>
                  <div className="ml-4 flex-1">
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-2">
                      <h4 className="text-xl font-semibold text-gray-900 group-hover:text-amber-700 transition-colors duration-300">{award.title}</h4>
                      <div className="flex flex-col md:items-end">
                        <span className="text-sm font-medium text-white bg-gradient-to-r from-amber-500 to-yellow-600 px-3 py-1 rounded-full shadow-sm">{award.year}</span>
                        <span className="text-sm text-gray-600 mt-1 font-medium">{award.institution}</span>
                      </div>
                    </div>
                    <p className="text-gray-700 leading-relaxed group-hover:text-gray-800 transition-colors duration-300">{award.description}</p>
                  </div>
                </div>
                
                {/* Animated border */}
                <div className="absolute inset-0 rounded-xl border-2 border-transparent bg-gradient-to-r from-yellow-400 via-amber-500 to-orange-500 opacity-0 group-hover:opacity-100 transition-opacity duration-500" style={{ padding: '2px' }}>
                  <div className="w-full h-full bg-white rounded-lg"></div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Skills */}
        <section className="mb-12 transform transition-all duration-1000 translate-y-0 opacity-100">
          <h3 className="text-2xl font-bold text-gray-900 mb-6 border-b-2 border-blue-600 pb-2 relative group">
            Technical Expertise
            <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-purple-600 to-blue-600 group-hover:w-full transition-all duration-500"></div>
          </h3>
          <div className="space-y-6">
            <div className="relative bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 rounded-xl p-6 border border-blue-200 hover:shadow-xl transition-all duration-500 transform hover:-translate-y-1 group overflow-hidden">
              {/* Animated background elements */}
              <div className="absolute inset-0 opacity-20">
                <div className="absolute top-2 right-2 w-12 h-12 bg-gradient-to-br from-blue-400 to-indigo-500 rounded-full blur-lg animate-pulse"></div>
                <div className="absolute bottom-2 left-2 w-8 h-8 bg-gradient-to-br from-purple-400 to-blue-500 rounded-full blur-md animate-bounce" style={{ animationDelay: '0.5s' }}></div>
              </div>
              
              <div className="relative z-10">
                <h4 className="text-lg font-semibold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors duration-300">Programming Languages</h4>
                <div className="flex flex-wrap gap-2">
                  {skills.programming.map((skill) => (
                    <span key={skill} className="bg-gradient-to-r from-blue-500 to-indigo-600 text-white px-3 py-1 rounded-full text-sm font-medium shadow-sm hover:shadow-md transform hover:scale-105 transition-all duration-300">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
            
            <div className="relative bg-gradient-to-br from-green-50 via-emerald-50 to-teal-50 rounded-xl p-6 border border-green-200 hover:shadow-xl transition-all duration-500 transform hover:-translate-y-1 group overflow-hidden">
              {/* Animated background elements */}
              <div className="absolute inset-0 opacity-20">
                <div className="absolute top-2 left-2 w-10 h-10 bg-gradient-to-br from-green-400 to-emerald-500 rounded-full blur-lg animate-ping" style={{ animationDelay: '1s' }}></div>
                <div className="absolute bottom-2 right-2 w-14 h-14 bg-gradient-to-br from-teal-400 to-green-500 rounded-full blur-xl animate-pulse" style={{ animationDelay: '1.5s' }}></div>
              </div>
              
              <div className="relative z-10">
                <h4 className="text-lg font-semibold text-gray-900 mb-3 group-hover:text-green-600 transition-colors duration-300">Frameworks & Libraries</h4>
                <div className="flex flex-wrap gap-2">
                  {skills.frameworks.map((skill) => (
                    <span key={skill} className="bg-gradient-to-r from-green-500 to-emerald-600 text-white px-3 py-1 rounded-full text-sm font-medium shadow-sm hover:shadow-md transform hover:scale-105 transition-all duration-300">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
            
            <div className="relative bg-gradient-to-br from-purple-50 via-violet-50 to-fuchsia-50 rounded-xl p-6 border border-purple-200 hover:shadow-xl transition-all duration-500 transform hover:-translate-y-1 group overflow-hidden">
              {/* Animated background elements */}
              <div className="absolute inset-0 opacity-20">
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-16 h-16 bg-gradient-to-br from-purple-400 to-fuchsia-500 rounded-full blur-xl animate-bounce" style={{ animationDelay: '2s' }}></div>
              </div>
              
              <div className="relative z-10">
                <h4 className="text-lg font-semibold text-gray-900 mb-3 group-hover:text-purple-600 transition-colors duration-300">Methodologies</h4>
                <div className="flex flex-wrap gap-2">
                  {skills.methodologies.map((skill) => (
                    <span key={skill} className="bg-gradient-to-r from-purple-500 to-fuchsia-600 text-white px-3 py-1 rounded-full text-sm font-medium shadow-sm hover:shadow-md transform hover:scale-105 transition-all duration-300">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Languages */}
        <section className="mb-12 transform transition-all duration-1000 translate-y-0 opacity-100">
          <h3 className="text-2xl font-bold text-gray-900 mb-6 border-b-2 border-blue-600 pb-2 relative group">
            Languages
            <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-purple-600 to-blue-600 group-hover:w-full transition-all duration-500"></div>
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {languages.map((lang, index) => (
              <div key={index} className="relative bg-gradient-to-br from-indigo-50 via-blue-50 to-cyan-50 rounded-xl p-6 border border-indigo-200 hover:shadow-xl transition-all duration-500 transform hover:-translate-y-1 group overflow-hidden mobile-card">
                {/* Animated background elements */}
                <div className="absolute inset-0 opacity-20">
                  <div className="absolute top-2 right-2 w-10 h-10 bg-gradient-to-br from-indigo-400 to-blue-500 rounded-full blur-lg animate-pulse" style={{ animationDelay: `${index * 0.3}s` }}></div>
                  <div className="absolute bottom-2 left-2 w-8 h-8 bg-gradient-to-br from-blue-400 to-cyan-500 rounded-full blur-md animate-bounce" style={{ animationDelay: `${index * 0.5 + 0.5}s` }}></div>
                </div>
                
                <div className="relative z-10 text-center">
                  <h4 className="font-semibold text-gray-900 group-hover:text-indigo-600 transition-colors duration-300 mb-2">{lang.language}</h4>
                  <p className="text-sm text-gray-600 mb-4">{lang.proficiency}</p>
                  <div className="flex items-center justify-center space-x-1">
                    {[...Array(5)].map((_, dotIndex) => (
                      <div
                        key={dotIndex}
                        className={`w-3 h-3 rounded-full transition-all duration-500 transform hover:scale-125 ${
                          dotIndex < lang.level
                            ? 'bg-gradient-to-r from-indigo-500 to-blue-600 shadow-md'
                            : 'bg-gray-200 hover:bg-gray-300'
                        }`}
                        style={{ 
                          animationDelay: `${dotIndex * 0.1}s`,
                          boxShadow: dotIndex < lang.level ? '0 2px 4px rgba(99, 102, 241, 0.3)' : 'none'
                        }}
                      ></div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
};

export default Resume;