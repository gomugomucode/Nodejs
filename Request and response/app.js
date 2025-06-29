const http = require('node:http');
const url = require('node:url');
const hostname = '127.0.0.1';
const port = 3000;

const server = http.createServer((req, res) => {
  console.log(req.url, req.method, req.headers);
  
  const parsedUrl = url.parse(req.url, true);
  const path = parsedUrl.pathname;
  const query = parsedUrl.query;
  
  res.statusCode = 200;

  if (path === '/') {
    res.setHeader('Content-Type', 'text/html');
    res.write(`
      <html>
        <head>
          <title>My Home Page</title>
          <style>
            body { font-family: Arial, sans-serif; margin: 40px; background-color: #f4f4f4; }
            .container { max-width: 800px; margin: 0 auto; background: white; padding: 30px; border-radius: 8px; box-shadow: 0 2px 10px rgba(0,0,0,0.1); }
            h1 { color: #333; border-bottom: 3px solid #007acc; padding-bottom: 10px; }
            nav { margin: 20px 0; }
            nav a { margin-right: 15px; color: #007acc; text-decoration: none; font-weight: bold; }
            nav a:hover { text-decoration: underline; }
            .welcome-text { line-height: 1.6; color: #666; }
          </style>
        </head>
        <body>
          <div class="container">
            <h1>Welcome to My Home Page</h1>
            <nav>
              <a href="/">Home</a>
              <a href="/about">About</a>
              <a href="/services">Services</a>
              <a href="/contact">Contact</a>
              <a href="/blog">Blog</a>
              <a href="/portfolio">Portfolio</a>
            </nav>
            <div class="welcome-text">
              <p>Hello! Welcome to my personal website. This is a simple Node.js HTTP server demonstrating basic routing and HTML responses.</p>
              <p>Feel free to explore the different sections using the navigation links above. Each page contains unique content and demonstrates different aspects of web development.</p>
              <p><strong>Current time:</strong> ${new Date().toLocaleString()}</p>
            </div>
          </div>
        </body>
      </html>
    `);
    res.end();
    
  } else if (path === '/about') {
    res.setHeader('Content-Type', 'text/html');
    res.write(`
      <html>
        <head>
          <title>About Me</title>
          <style>
            body { font-family: Arial, sans-serif; margin: 40px; background-color: #f4f4f4; }
            .container { max-width: 800px; margin: 0 auto; background: white; padding: 30px; border-radius: 8px; box-shadow: 0 2px 10px rgba(0,0,0,0.1); }
            h1 { color: #333; border-bottom: 3px solid #28a745; padding-bottom: 10px; }
            nav a { margin-right: 15px; color: #28a745; text-decoration: none; font-weight: bold; }
            nav a:hover { text-decoration: underline; }
            .profile { display: flex; align-items: center; margin: 20px 0; }
            .profile-text { flex: 1; }
            .skills { background: #f8f9fa; padding: 20px; border-radius: 5px; margin: 20px 0; }
            .skill-list { display: flex; flex-wrap: wrap; gap: 10px; }
            .skill { background: #28a745; color: white; padding: 5px 10px; border-radius: 15px; font-size: 12px; }
          </style>
        </head>
        <body>
          <div class="container">
            <nav>
              <a href="/">Home</a>
              <a href="/about">About</a>
              <a href="/services">Services</a>
              <a href="/contact">Contact</a>
              <a href="/blog">Blog</a>
              <a href="/portfolio">Portfolio</a>
            </nav>
            <h1>About Me</h1>
            <div class="profile">
              <div class="profile-text">
                <p>I'm a passionate web developer with experience in creating dynamic and responsive web applications. I love working with modern technologies and solving complex problems.</p>
                <p>My journey in web development started several years ago, and I've been continuously learning and improving my skills. I believe in writing clean, maintainable code and creating user-friendly experiences.</p>
              </div>
            </div>
            <div class="skills">
              <h3>Technical Skills</h3>
              <div class="skill-list">
                <span class="skill">JavaScript</span>
                <span class="skill">Node.js</span>
                <span class="skill">HTML/CSS</span>
                <span class="skill">React</span>
                <span class="skill">MongoDB</span>
                <span class="skill">Express.js</span>
                <span class="skill">Git</span>
                <span class="skill">REST APIs</span>
              </div>
            </div>
          </div>
        </body>
      </html>
    `);
    res.end();
    
  } else if (path === '/services') {
    res.setHeader('Content-Type', 'text/html');
    res.write(`
      <html>
        <head>
          <title>My Services</title>
          <style>
            body { font-family: Arial, sans-serif; margin: 40px; background-color: #f4f4f4; }
            .container { max-width: 800px; margin: 0 auto; background: white; padding: 30px; border-radius: 8px; box-shadow: 0 2px 10px rgba(0,0,0,0.1); }
            h1 { color: #333; border-bottom: 3px solid #dc3545; padding-bottom: 10px; }
            nav a { margin-right: 15px; color: #dc3545; text-decoration: none; font-weight: bold; }
            nav a:hover { text-decoration: underline; }
            .service { background: #f8f9fa; margin: 15px 0; padding: 20px; border-radius: 5px; border-left: 4px solid #dc3545; }
            .service h3 { margin-top: 0; color: #dc3545; }
          </style>
        </head>
        <body>
          <div class="container">
            <nav>
              <a href="/">Home</a>
              <a href="/about">About</a>
              <a href="/services">Services</a>
              <a href="/contact">Contact</a>
              <a href="/blog">Blog</a>
              <a href="/portfolio">Portfolio</a>
            </nav>
            <h1>My Services</h1>
            <div class="service">
              <h3>Web Development</h3>
              <p>Full-stack web development using modern technologies like Node.js, React, and MongoDB. Creating responsive and user-friendly web applications.</p>
            </div>
            <div class="service">
              <h3>API Development</h3>
              <p>RESTful API design and development for web and mobile applications. Ensuring scalable and secure backend solutions.</p>
            </div>
            <div class="service">
              <h3>Database Design</h3>
              <p>Database architecture and optimization for both SQL and NoSQL databases, ensuring efficient data storage and retrieval.</p>
            </div>
            <div class="service">
              <h3>Technical Consulting</h3>
              <p>Technology consultation for startups and businesses looking to implement modern web solutions and improve their digital presence.</p>
            </div>
          </div>
        </body>
      </html>
    `);
    res.end();
    
  } else if (path === '/contact') {
    res.setHeader('Content-Type', 'text/html');
    res.write(`
      <html>
        <head>
          <title>Contact Me</title>
          <style>
            body { font-family: Arial, sans-serif; margin: 40px; background-color: #f4f4f4; }
            .container { max-width: 800px; margin: 0 auto; background: white; padding: 30px; border-radius: 8px; box-shadow: 0 2px 10px rgba(0,0,0,0.1); }
            h1 { color: #333; border-bottom: 3px solid #ffc107; padding-bottom: 10px; }
            nav a { margin-right: 15px; color: #ffc107; text-decoration: none; font-weight: bold; }
            nav a:hover { text-decoration: underline; }
            .contact-info { background: #f8f9fa; padding: 20px; border-radius: 5px; margin: 20px 0; }
            .contact-item { margin: 10px 0; }
            .contact-form { margin: 20px 0; }
            .form-group { margin: 15px 0; }
            label { display: block; margin-bottom: 5px; font-weight: bold; }
            input, textarea { width: 100%; padding: 8px; border: 1px solid #ddd; border-radius: 4px; }
            button { background: #ffc107; color: #333; padding: 10px 20px; border: none; border-radius: 4px; cursor: pointer; font-weight: bold; }
          </style>
        </head>
        <body>
          <div class="container">
            <nav>
              <a href="/">Home</a>
              <a href="/about">About</a>
              <a href="/services">Services</a>
              <a href="/contact">Contact</a>
              <a href="/blog">Blog</a>
              <a href="/portfolio">Portfolio</a>
            </nav>
            <h1>Contact Me</h1>
            <div class="contact-info">
              <h3>Get in Touch</h3>
              <div class="contact-item"><strong>Email:</strong> developer@example.com</div>
              <div class="contact-item"><strong>Phone:</strong> +1 (555) 123-4567</div>
              <div class="contact-item"><strong>Location:</strong> San Francisco, CA</div>
              <div class="contact-item"><strong>LinkedIn:</strong> linkedin.com/in/developer</div>
            </div>
            <div class="contact-form">
              <h3>Send a Message</h3>
              <form>
                <div class="form-group">
                  <label for="name">Name:</label>
                  <input type="text" id="name" name="name" required>
                </div>
                <div class="form-group">
                  <label for="email">Email:</label>
                  <input type="email" id="email" name="email" required>
                </div>
                <div class="form-group">
                  <label for="message">Message:</label>
                  <textarea id="message" name="message" rows="5" required></textarea>
                </div>
                <button type="submit">Send Message</button>
              </form>
            </div>
          </div>
        </body>
      </html>
    `);
    res.end();
    
  } else if (path === '/blog') {
    res.setHeader('Content-Type', 'text/html');
    res.write(`
      <html>
        <head>
          <title>My Blog</title>
          <style>
            body { font-family: Arial, sans-serif; margin: 40px; background-color: #f4f4f4; }
            .container { max-width: 800px; margin: 0 auto; background: white; padding: 30px; border-radius: 8px; box-shadow: 0 2px 10px rgba(0,0,0,0.1); }
            h1 { color: #333; border-bottom: 3px solid #6f42c1; padding-bottom: 10px; }
            nav a { margin-right: 15px; color: #6f42c1; text-decoration: none; font-weight: bold; }
            nav a:hover { text-decoration: underline; }
            .blog-post { background: #f8f9fa; margin: 20px 0; padding: 20px; border-radius: 5px; border-left: 4px solid #6f42c1; }
            .blog-post h3 { margin-top: 0; color: #6f42c1; }
            .blog-meta { color: #666; font-size: 14px; margin-bottom: 10px; }
          </style>
        </head>
        <body>
          <div class="container">
            <nav>
              <a href="/">Home</a>
              <a href="/about">About</a>
              <a href="/services">Services</a>
              <a href="/contact">Contact</a>
              <a href="/blog">Blog</a>
              <a href="/portfolio">Portfolio</a>
            </nav>
            <h1>My Blog</h1>
            <div class="blog-post">
              <h3>Getting Started with Node.js HTTP Server</h3>
              <div class="blog-meta">Published on ${new Date().toDateString()} | 5 min read</div>
              <p>Node.js provides a simple yet powerful way to create HTTP servers. In this post, we'll explore how to build a basic server and handle different routes...</p>
            </div>
            <div class="blog-post">
              <h3>Understanding RESTful API Design</h3>
              <div class="blog-meta">Published on ${new Date(Date.now() - 7*24*60*60*1000).toDateString()} | 8 min read</div>
              <p>REST (Representational State Transfer) is an architectural style for designing networked applications. Let's dive into the principles of good API design...</p>
            </div>
            <div class="blog-post">
              <h3>Modern JavaScript ES6+ Features</h3>
              <div class="blog-meta">Published on ${new Date(Date.now() - 14*24*60*60*1000).toDateString()} | 6 min read</div>
              <p>JavaScript has evolved significantly with ES6 and later versions. Here are some essential features every developer should know...</p>
            </div>
          </div>
        </body>
      </html>
    `);
    res.end();
    
  } else if (path === '/portfolio') {
    res.setHeader('Content-Type', 'text/html');
    res.write(`
      <html>
        <head>
          <title>My Portfolio</title>
          <style>
            body { font-family: Arial, sans-serif; margin: 40px; background-color: #f4f4f4; }
            .container { max-width: 800px; margin: 0 auto; background: white; padding: 30px; border-radius: 8px; box-shadow: 0 2px 10px rgba(0,0,0,0.1); }
            h1 { color: #333; border-bottom: 3px solid #20c997; padding-bottom: 10px; }
            nav a { margin-right: 15px; color: #20c997; text-decoration: none; font-weight: bold; }
            nav a:hover { text-decoration: underline; }
            .project { background: #f8f9fa; margin: 20px 0; padding: 20px; border-radius: 5px; border-left: 4px solid #20c997; }
            .project h3 { margin-top: 0; color: #20c997; }
            .tech-stack { margin: 10px 0; }
            .tech { background: #20c997; color: white; padding: 3px 8px; border-radius: 10px; font-size: 12px; margin: 2px; display: inline-block; }
          </style>
        </head>
        <body>
          <div class="container">
            <nav>
              <a href="/">Home</a>
              <a href="/about">About</a>
              <a href="/services">Services</a>
              <a href="/contact">Contact</a>
              <a href="/blog">Blog</a>
              <a href="/portfolio">Portfolio</a>
            </nav>
            <h1>My Portfolio</h1>
            <div class="project">
              <h3>E-Commerce Platform</h3>
              <p>A full-stack e-commerce solution with user authentication, product catalog, shopping cart, and payment integration.</p>
              <div class="tech-stack">
                <span class="tech">Node.js</span>
                <span class="tech">React</span>
                <span class="tech">MongoDB</span>
                <span class="tech">Stripe API</span>
              </div>
            </div>
            <div class="project">
              <h3>Task Management App</h3>
              <p>A collaborative task management application with real-time updates, drag & drop functionality, and team collaboration features.</p>
              <div class="tech-stack">
                <span class="tech">Express.js</span>
                <span class="tech">Socket.io</span>
                <span class="tech">Vue.js</span>
                <span class="tech">PostgreSQL</span>
              </div>
            </div>
            <div class="project">
              <h3>Weather Dashboard</h3>
              <p>A responsive weather application that displays current conditions and forecasts using third-party weather APIs.</p>
              <div class="tech-stack">
                <span class="tech">JavaScript</span>
                <span class="tech">HTML/CSS</span>
                <span class="tech">Weather API</span>
                <span class="tech">Chart.js</span>
              </div>
            </div>
          </div>
        </body>
      </html>
    `);
    res.end();
    
  } else if (path === '/api/time') {
    // Simple API endpoint
    res.setHeader('Content-Type', 'application/json');
    res.write(JSON.stringify({
      timestamp: new Date().toISOString(),
      timezone: Intl.DateTimeFormat().resolvedOptions().timeZone,
      message: 'Current server time'
    }));
    res.end();
    
  } else {
    // Handle all other routes (404 page)
    res.statusCode = 404;
    res.setHeader('Content-Type', 'text/html');
    res.write(`
      <html>
        <head>
          <title>Page Not Found</title>
          <style>
            body { font-family: Arial, sans-serif; margin: 40px; background-color: #f4f4f4; text-align: center; }
            .container { max-width: 600px; margin: 0 auto; background: white; padding: 30px; border-radius: 8px; box-shadow: 0 2px 10px rgba(0,0,0,0.1); }
            h1 { color: #dc3545; font-size: 72px; margin: 0; }
            h2 { color: #333; margin: 10px 0; }
            p { color: #666; line-height: 1.6; }
            a { color: #007acc; text-decoration: none; font-weight: bold; }
            a:hover { text-decoration: underline; }
          </style>
        </head>
        <body>
          <div class="container">
            <h1>404</h1>
            <h2>Page Not Found</h2>
            <p>Sorry, the page you are looking for doesn't exist.</p>
            <p>You can go back to the <a href="/">home page</a> or try one of these links:</p>
            <p>
              <a href="/about">About</a> | 
              <a href="/services">Services</a> | 
              <a href="/contact">Contact</a> | 
              <a href="/blog">Blog</a> | 
              <a href="/portfolio">Portfolio</a>
            </p>
            <p><strong>Requested URL:</strong> ${req.url}</p>
          </div>
        </body>
      </html>
    `);
    res.end();
  }
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
  console.log('Available routes:');
  console.log('  - http://127.0.0.1:3000/ (Home)');
  console.log('  - http://127.0.0.1:3000/about (About)');
  console.log('  - http://127.0.0.1:3000/services (Services)');
  console.log('  - http://127.0.0.1:3000/contact (Contact)');
  console.log('  - http://127.0.0.1:3000/blog (Blog)');
  console.log('  - http://127.0.0.1:3000/portfolio (Portfolio)');
  console.log('  - http://127.0.0.1:3000/api/time (API endpoint)');
});