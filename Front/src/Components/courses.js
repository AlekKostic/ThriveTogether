const courses = [
  // IT and Programming
  { title: "Responsive Web Design", description: "Learn responsive web design using HTML and CSS.", url: "https://www.freecodecamp.org/learn/responsive-web-design/" },
  { title: "JavaScript Algorithms and Data Structures", description: "Master JavaScript algorithms and data structures.", url: "https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/" },
  { title: "Python for Data Science", description: "Learn Python for data science and machine learning.", url: "https://www.coursera.org/learn/python-for-data-science" },
  { title: "CS50's Introduction to Computer Science", description: "An introductory computer science course from Harvard University.", url: "https://www.edx.org/course/cs50s-introduction-to-computer-science" },
  { title: "Intro to Artificial Intelligence", description: "Start learning about artificial intelligence and its real-world applications.", url: "https://www.edx.org/course/intro-to-artificial-intelligence" },
  { title: "Machine Learning with Python", description: "Learn the basics of machine learning using Python.", url: "https://www.coursera.org/learn/machine-learning-with-python" },
  { title: "Data Science with R", description: "Learn data science concepts and techniques using R programming.", url: "https://www.coursera.org/learn/data-science-with-r" },
  { title: "Blockchain for Beginners", description: "Understand the basics of blockchain technology and its applications.", url: "https://www.edx.org/course/blockchain-for-beginners" },
  { title: "SQL for Data Science", description: "Master SQL for extracting and analyzing data.", url: "https://www.coursera.org/learn/sql-for-data-science" },
  { title: "Web Development with JavaScript", description: "Learn full-stack web development using JavaScript.", url: "https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/" },

  // IT and Web Development
  { title: "Git and GitHub Basics", description: "Learn how to use Git and GitHub for version control.", url: "https://www.coursera.org/learn/git-and-github" },
  { title: "Building Web Applications with React", description: "Learn to build web applications using React.js.", url: "https://www.freecodecamp.org/learn/front-end-development-libraries/react/" },
  { title: "Web Accessibility", description: "Learn about web accessibility standards and make websites inclusive.", url: "https://www.freecodecamp.org/learn/front-end-development-libraries/web-accessibility/" },
  { title: "Backend Development and APIs", description: "Learn backend development and APIs with Node.js.", url: "https://www.freecodecamp.org/learn/back-end-development-and-apis/" },
  { title: "Full Stack Web Development", description: "Learn front-end and back-end web development.", url: "https://www.freecodecamp.org/learn/full-stack-development/" },
  { title: "Cloud Computing with AWS", description: "Learn cloud computing and Amazon Web Services (AWS).", url: "https://www.coursera.org/learn/aws-fundamentals" },
  { title: "Database Management with SQL", description: "Learn SQL and how to work with relational databases.", url: "https://www.coursera.org/learn/sql-for-data-science" },
  { title: "DevOps for Beginners", description: "Learn about DevOps, CI/CD pipelines, and automation tools.", url: "https://www.udemy.com/course/devops-for-beginners/" },

  // Digital Marketing
  { title: "Digital Marketing Fundamentals", description: "Get introduced to digital marketing and online business strategies.", url: "https://www.edx.org/course/digital-marketing" },
  { title: "Introduction to SEO", description: "Learn how to optimize websites for search engines.", url: "https://www.coursera.org/learn/seo" },
  { title: "Social Media Marketing", description: "Learn how to create and execute a social media marketing strategy.", url: "https://www.coursera.org/learn/social-media-marketing" },
  { title: "Content Marketing for Beginners", description: "Learn how to create and distribute content effectively.", url: "https://www.udemy.com/course/content-marketing-for-beginners/" },
  { title: "Google Analytics for Beginners", description: "Learn how to use Google Analytics to track and analyze website data.", url: "https://analytics.google.com/analytics/academy/course/6" },
  { title: "Email Marketing", description: "Learn email marketing strategies for growing your business.", url: "https://www.coursera.org/learn/email-marketing" },

  // Business
  { title: "Business Fundamentals", description: "Learn the basics of business, including strategy and management.", url: "https://www.coursera.org/learn/business-strategy" },
  { title: "Entrepreneurship 101", description: "A practical guide to starting your own business.", url: "https://www.edx.org/course/entrepreneurship-101" },
  { title: "Financial Markets", description: "Learn about financial markets, stocks, and bonds.", url: "https://www.coursera.org/learn/financial-markets" },
  { title: "Leadership and Management", description: "Learn key concepts in leadership and management.", url: "https://www.coursera.org/learn/leadership" },

  // Graphic Design
  { title: "Introduction to Graphic Design", description: "Learn the basics of graphic design using popular software.", url: "https://www.coursera.org/learn/graphic-design" },
  { title: "Logo Design", description: "Learn how to design logos and create a unique brand identity.", url: "https://www.udemy.com/course/logo-design-masterclass/" },
  { title: "Adobe Photoshop for Beginners", description: "Learn the basics of Adobe Photoshop for photo editing and graphic design.", url: "https://www.udemy.com/course/adobe-photoshop-for-beginners/" },
  { title: "Web Design for Beginners", description: "Learn the basics of designing websites with HTML, CSS, and JavaScript.", url: "https://www.udemy.com/course/web-design-for-beginners/" },

  // Photography
  { title: "Photography Basics", description: "Learn essential photography techniques and principles.", url: "https://www.udemy.com/course/photography-masterclass/" },
  { title: "Digital Photography", description: "Master the art of digital photography, from basic to advanced techniques.", url: "https://www.coursera.org/learn/photography-basics" },
  { title: "Photo Editing with Lightroom", description: "Learn how to use Adobe Lightroom to edit photos like a professional.", url: "https://www.udemy.com/course/lightroom-photo-editing-for-beginners/" },

  // UX/UI Design
  { title: "Introduction to UX Design", description: "Learn the basics of UX design and its importance in web and app development.", url: "https://www.coursera.org/learn/ux-design" },
  { title: "UI/UX Design for Beginners", description: "Learn to create user interfaces and enhance user experiences.", url: "https://www.udemy.com/course/ui-ux-design-for-beginners/" },
  { title: "Prototyping and Wireframing", description: "Learn how to create prototypes and wireframes for web and mobile applications.", url: "https://www.coursera.org/learn/ux-prototyping" },

  // Soft Skills and Personal Development
  { title: "Time Management", description: "Learn how to manage your time effectively and improve productivity.", url: "https://www.udemy.com/course/time-management-for-entrepreneurs/" },
  { title: "Public Speaking", description: "Master the art of public speaking and effective communication.", url: "https://www.udemy.com/course/public-speaking-for-beginners/" },
  { title: "Emotional Intelligence", description: "Learn about emotional intelligence and its impact on personal and professional growth.", url: "https://www.coursera.org/learn/emotional-intelligence" },

  // AI and Data Science
  { title: "AI for Everyone", description: "An introduction to artificial intelligence and its applications.", url: "https://www.coursera.org/learn/ai-for-everyone" },
  { title: "Data Science and Machine Learning Bootcamp", description: "Learn the fundamentals of machine learning and data science.", url: "https://www.udemy.com/course/python-for-data-science-and-machine-learning-bootcamp/" },
  { title: "Introduction to Data Visualization", description: "Learn how to create data visualizations with Python.", url: "https://www.coursera.org/learn/data-visualization-with-python" },

  // More IT Courses
  { title: "Android App Development", description: "Learn to build Android applications with Java and Kotlin.", url: "https://www.udemy.com/course/android-development-for-beginners/" },
  { title: "iOS App Development", description: "Master the basics of iOS development and Swift programming.", url: "https://www.udemy.com/course/ios-development-for-beginners/" },
  { title: "Cybersecurity Basics", description: "Learn the basics of cybersecurity and how to protect your digital assets.", url: "https://www.coursera.org/learn/cyber-security-basics" }
];
export default courses;