import React from 'react';
import { Link, useParams } from 'react-router-dom';

const ProjectDetail = () => {
  // This would typically come from a data source or API
  const { projectId } = useParams();
  
  // For now, we'll use the same project data from Projects.jsx
  // In a real implementation, this would be fetched based on the projectId
  const projects = [
    {
      id: 1,
      title: 'VendorSync - Inventory Management System',
      description: 'A comprehensive inventory management solution for vendors with real-time stock tracking, automated ordering, and predictive analytics.',
      longDescription: 'VendorSync is a data driven inventory management platform designed for vendors to streamline their operations. Built with Flutter and Firebase, it provides real-time stock monitoring, automated replenishment orders, and predictive analytics to optimize inventory levels. The system integrates with supplier networks to ensure seamless ordering processes and prevent stockouts. The mobile-first approach ensures vendors can manage their inventory from anywhere.',
      detailedDescription: `<h3>Executive Summary</h3>
<p>[Brief overview of the project highlighting key engineering achievements and business impact]</p>

<h3>Problem Analysis & Discovery</h3>
<p><strong>The Core Challenge</strong></p>
<p>[Description of the primary problem being solved]</p>

<p><strong>Technical Problems:</strong></p>
<ul>
  <li>[Technical challenge 1]</li>
  <li>[Technical challenge 2]</li>
  <li>[Technical challenge 3]</li>
</ul>

<p><strong>Business Problems:</strong></p>
<ul>
  <li>[Business challenge 1]</li>
  <li>[Business challenge 2]</li>
  <li>[Business challenge 3]</li>
</ul>

<h3>Engineering Solution & Architecture</h3>
<p><strong>System Design Decisions</strong></p>

<p><strong>1. [Key Architecture Decision]</strong></p>
<p>Problem: [Brief description of the problem]</p>
<p>Solution: [Brief description of the solution]</p>

<p><strong>Trade-off Analysis:</strong></p>
<ul>
  <li>✅ [Benefit 1]</li>
  <li>✅ [Benefit 2]</li>
  <li>❌ [Drawback 1]</li>
  <li>❌ [Drawback 2]</li>
</ul>

<h3>Tools & Technologies (With Justification)</h3>
<table>
  <tr>
    <th>Technology</th>
    <th>Engineering Reason</th>
  </tr>
  <tr>
    <td>[Technology 1]</td>
    <td>[Reason for choosing this technology]</td>
  </tr>
  <tr>
    <td>[Technology 2]</td>
    <td>[Reason for choosing this technology]</td>
  </tr>
</table>

<h3>Measurable Impact & Validation</h3>
<p><strong>Performance Metrics:</strong></p>
<ul>
  <li>📊 [Metric 1]</li>
  <li>📊 [Metric 2]</li>
</ul>

<p><strong>Business Impact:</strong></p>
<ul>
  <li>📈 [Business impact 1]</li>
  <li>📈 [Business impact 2]</li>
</ul>

<h3>Key Engineering Takeaways</h3>
<ol>
  <li>[Key learning 1]</li>
  <li>[Key learning 2]</li>
  <li>[Key learning 3]</li>
</ol>`,
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
      github: 'https://github.com/anthonybyamugisha/',
      image: '/images/Vendor sync.jpeg',
      category: 'Mobile App'
    },
    {
      id: 2,
      title: 'Forex Giants Mobile App',
      description: 'A comprehensive forex trading education application designed to teach people forex trading free of charge.',
      longDescription: 'Forex Giants is an innovative forex trading education application developed by Algo FX, designed to teach people forex trading completely free of charge. Built with Flutter, this app provides an intuitive and engaging learning experience for both beginners and experienced traders. The application features interactive lessons, real-time market analysis, trading simulations, and a community of traders to enhance the learning experience. With its beautiful interface and user-friendly design, Forex Giants makes forex education accessible to everyone.',
      detailedDescription: `Forex Giants revolutionizes forex education by making it accessible, engaging, and completely free. Key aspects of the application include:

• Comprehensive curriculum covering beginner to advanced trading concepts
• Interactive lessons with quizzes and progress tracking
• Real-time market data integration for practical learning
• Trading simulators with virtual funds to practice without risk
• Community features for peer interaction and mentor support
• Personalized learning paths based on user skill level
• Regular market updates and analysis from industry experts
• Multi-language support for global accessibility

The app has helped thousands of users understand forex trading principles, with many progressing to successful live trading. The clean, intuitive interface ensures that even complete beginners can navigate the platform with ease.`,
      techStack: ['Flutter', 'Dart'],
      features: [
        'Comprehensive forex trading courses',
        'Progress tracking and achievements',
        'Beautiful and intuitive UI/UX design'
      ],
      github: 'https://github.com/anthonybyamugisha/',
      image: '/images/forex giants mobile app.jpeg',
      category: 'Mobile App'
    },
    {
      id: 3,
      title: 'All Organic Honey Website',
      description: 'A responsive website for All Organic Honey built with React, HTML, and Tailwind CSS.',
      longDescription: 'A beautiful and responsive website for All Organic Honey. Built with React for the frontend, HTML for structure, and Tailwind CSS for styling. The site showcases organic honey products with detailed descriptions, nutritional information, and ordering options. Designed with a nature-inspired color palette to reflect the organic and natural qualities of the honey products.',
      detailedDescription: `The All Organic Honey website serves as both an informational resource and e-commerce platform for honey enthusiasts. The site features:

• Beautiful product showcase with high-quality images of each honey variety
• Detailed product descriptions including sourcing information and flavor profiles
• Nutritional information and health benefits for each honey type
• Easy-to-use ordering system with multiple payment options
• Blog section with honey recipes and health tips
• Contact form for customer inquiries and custom orders
• Responsive design that works seamlessly on all devices
• SEO optimization for better search engine visibility

The website's design incorporates warm, earthy tones and natural imagery to create an authentic brand experience that reflects the purity and quality of the organic honey products.`,
      techStack: ['React', 'HTML', 'Tailwind CSS'],
      features: [
        'Responsive design for all devices',
        'Product showcase with detailed descriptions',
        'Nutritional information display',
        'Online ordering system',
        'Contact form for inquiries',
        'Nature-inspired UI/UX design'
      ],
      github: 'https://github.com/anthonybyamugisha/',
      image: '/images/all organic  honey.jpeg',
      category: 'Frontend'
    },
    {
      id: 5,
      title: 'Hotel Management System',
      description: 'A comprehensive hotel management system built with Django, HTML, CSS, and MySQL.',
      longDescription: 'A comprehensive hotel management system designed to streamline hotel operations. Built with Django for the backend, HTML and CSS for the frontend, and MySQL for the database. The system features room booking management, guest check-in/check-out processes, billing and payment tracking, staff management, inventory control, and reporting capabilities. The intuitive interface makes it easy for hotel staff to manage daily operations efficiently.',
      detailedDescription: `The Hotel Management System is a robust solution designed with a strong focus on comprehensive reporting capabilities. The system excels at generating detailed reports that provide valuable insights for hotel management:

• Financial Reports - Revenue summaries, daily/weekly/monthly income tracking, payment method breakdowns, and expense reports
• Occupancy Reports - Room utilization statistics, peak booking periods, average stay duration, and occupancy rate trends
• Guest Analytics - Guest demographics, repeat customer tracking, booking source analysis, and customer satisfaction metrics
• Staff Performance Reports - Employee productivity metrics, shift scheduling effectiveness, and task completion tracking
• Inventory Reports - Stock level monitoring, supplier performance tracking, and consumption pattern analysis
• Reservation Reports - Booking trends, cancellation rates, and seasonal demand forecasting
• Maintenance Reports - Equipment status tracking, maintenance schedules, and repair cost analysis

The reporting engine features customizable date ranges, export capabilities (PDF, Excel, CSV), and real-time data visualization through interactive charts and graphs. Managers can generate comprehensive dashboards that provide at-a-glance insights into all critical hotel operations, enabling data-driven decision making for improved profitability and guest satisfaction.`,
      techStack: ['Django', 'HTML', 'CSS', 'MySQL'],
      features: [
        'Advanced Reporting Engine',
        'Financial Performance Analytics',
        'Occupancy Rate Monitoring',
        'Guest Behavior Analysis',
        'Staff Performance Tracking',
        'Inventory Management Reports',
        'Reservation Trend Analysis'
      ],
      github: 'https://github.com/anthonybyamugisha/',
      image: '/images/hotel management system.jpeg',
      category: 'Full Stack'
    },
    {
      id: 6,
      title: 'AI Chatbot Solutions',
      description: 'Intelligent chatbots built and trained on specific information to respond to user questions and embedded in websites.',
      longDescription: 'Custom AI chatbot solutions designed and developed to understand and respond to user queries based on specific domain knowledge. These chatbots are trained on targeted information sources to provide accurate and relevant responses. The chatbots can be seamlessly embedded into websites to enhance user experience, provide 24/7 customer support, and automate common inquiries. Built with natural language processing and machine learning technologies.',
      detailedDescription: `Our AI Chatbot Solutions provide businesses with intelligent, automated customer support that understands and responds to user queries with remarkable accuracy. The implementation process includes:

• Domain-specific training using proprietary business information
• Natural language processing for human-like conversation flows
• Website integration with customizable appearance and behavior
• 24/7 availability for consistent customer support
• Analytics dashboard for monitoring performance and user interactions
• Multi-language support for global businesses
• Seamless handoff to human agents when needed
• Continuous learning capabilities for improved responses over time

These chatbots have successfully reduced customer service response times by up to 80% while maintaining high satisfaction rates. The solution is particularly effective for FAQ automation, lead qualification, and basic troubleshooting.`,
      techStack: ['Jotform', 'Web Integration'],
      features: [
        'Custom chatbot training on domain-specific data',
        'Natural language understanding and processing',
        'Website integration capabilities',
        '24/7 automated customer support',
        'Conversation flow design',
        'Analytics and usage reporting',
        'Multi-platform deployment'
      ],
      github: 'https://github.com/anthonybyamugisha/',
      image: '/images/ai chat bot.jpeg',
      category: 'Chatbots'
    }
  ];

  const project = projects.find(p => p.id === parseInt(projectId)) || projects[0];

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
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link to="/projects" className="inline-flex items-center text-blue-200 hover:text-white mb-6 transition-colors duration-300">
            <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 19l-7-7m0 0l7-7m-7 7h18"></path>
            </svg>
            Back to Projects
          </Link>
          <h1 className="text-4xl sm:text-5xl font-bold mb-4">{project.title}</h1>
          <p className="text-xl max-w-3xl">{project.description}</p>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Project Image */}
          <div className="lg:col-span-1">
            <div className="sticky top-8">
              <div className="bg-white rounded-xl shadow-lg overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-64 object-contain p-4 bg-white mobile-card"
                  onError={(e) => {
                    e.target.onerror = null;
                    e.target.src = 'https://placehold.co/600x400/3b82f6/ffffff?text=Project+Image';
                  }}
                />
              </div>
              
              {/* Tech Stack */}
              <div className="mt-6 bg-gradient-to-br from-blue-50 to-indigo-50 p-6 rounded-xl shadow-sm">
                <h3 className="text-xl font-bold text-gray-900 mb-4">Technologies Used</h3>
                <div className="flex flex-wrap gap-2">
                  {project.techStack.map((tech, index) => (
                    <span 
                      key={index} 
                      className="bg-white text-gray-700 px-3 py-1 rounded-full text-sm font-medium border border-gray-200 transition-all duration-300 hover:scale-105"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
              
              {/* GitHub Link */}
              <div className="mt-6 bg-gradient-to-br from-blue-50 to-indigo-50 p-6 rounded-xl shadow-sm">
                <h3 className="text-xl font-bold text-gray-900 mb-4">Repository</h3>
                <a 
                  href={project.github} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex items-center text-blue-600 hover:text-purple-600 font-semibold transition-colors duration-300"
                >
                  View on GitHub
                  <svg className="w-5 h-5 ml-2" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                  </svg>
                </a>
              </div>
            </div>
          </div>
          
          {/* Project Details */}
          <div className="lg:col-span-2">
            {/* Detailed Description */}
            <div className="bg-gradient-to-br from-blue-50 to-indigo-50 p-8 rounded-xl shadow-sm mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Project Overview</h2>
              <div className="prose max-w-none text-gray-700">
                {project.detailedDescription ? (
                  <div dangerouslySetInnerHTML={{ __html: project.detailedDescription.replace(/\n/g, '<br>') }} />
                ) : (
                  <p>{project.longDescription}</p>
                )}
              </div>
            </div>
            
            {/* Features */}
            <div className="bg-gradient-to-br from-blue-50 to-indigo-50 p-6 sm:p-8 rounded-xl shadow-sm mobile-card">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Key Features</h2>
              <ul className="space-y-3">
                {project.features.map((feature, index) => (
                  <li key={index} className="flex items-start">
                    <svg className="w-5 h-5 text-blue-500 mt-0.5 mr-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                    <span className="text-gray-700">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectDetail;