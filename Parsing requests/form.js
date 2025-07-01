const http = require('node:http');
const fs = require('fs');
const url = require('node:url');
const querystring = require('querystring');

const hostname = '127.0.0.1';
const port = 3000;

const server = http.createServer((req, res) => {
  const parsedUrl = url.parse(req.url, true);
  const path = parsedUrl.pathname;
  console.log(path)

  if (path === '/' || path === '/form') {
    // Display the form
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/html');
    res.write(`
      <!DOCTYPE html>
      <html>
        <head>
          <title>Contact Form</title>
          <style>
            body { font-family: Arial, sans-serif; max-width: 600px; margin: 50px auto; padding: 20px; }
            .form-group { margin-bottom: 15px; }
            label { display: block; margin-bottom: 5px; font-weight: bold; }
            input, textarea { width: 100%; padding: 8px; border: 1px solid #ddd; border-radius: 4px; box-sizing: border-box; }
            button { background: #007bff; color: white; padding: 10px 20px; border: none; border-radius: 4px; cursor: pointer; }
            button:hover { background: #0056b3; }
          </style>
        </head>
        <body>
          <h2>Contact Form</h2>
          <form action="/submit" method="POST">
            <div class="form-group">
              <label for="name">Name:</label>
              <input type="text" id="name" name="name" required>
            </div>
            
            <div class="form-group">
              <label for="email">Email:</label>
              <input type="email" id="email" name="email" required>
            </div>
            
            <div class="form-group">
              <label for="phone">Phone:</label>
              <input type="tel" id="phone" name="phone">
            </div>
            
            <div class="form-group">
              <label for="message">Message:</label>
              <textarea id="message" name="message" rows="5" required></textarea>
            </div>
            
            <button type="submit">Submit</button>
          </form>
        </body>
      </html>
    `);
    res.end();

  } else if (path === '/submit' && req.method === 'POST') {
    // Handle form submission
    let body = [];

    req.on('data', chunk => {
      console.log(chunk);
      body.push(chunk);
    });

    req.on('end', () => {
      try {
        const fullbody = Buffer.concat(body).toString();

        // Parse the form data
        const parsedData = querystring.parse(fullbody);
        console.log(parsedData)

        // another way of parsing the requests
        

        const params = new URLSearchParams(parsedData)
        // const bodyObj={}
        // for(const[key,val] of params.entries()){
        //   bodyObj[key]=val
        // }

        // another way of doing the above urlsearch parms is below
        const bodyObj = Object.fromEntries(parsedData)


        console.log(bodyObj)


        
        // Create submission object with current date/time
        const now = new Date();
        const submission = {
          name: parsedData.name || '',
          email: parsedData.email || '',
          phone: parsedData.phone || '',
          message: parsedData.message || '',
          date: now.toLocaleDateString(),
          time: now.toLocaleTimeString()
        };

        // Prepare data to save to file
        const dataToSave = `
Submission Date: ${submission.date} ${submission.time}
Name: ${submission.name}
Email: ${submission.email}
Phone: ${submission.phone}
Message: ${submission.message}
${'='.repeat(50)}
`;

        // Save to file
        fs.appendFileSync('form_submissions.txt', dataToSave);

        // Send success response
        res.statusCode = 200;
        res.setHeader('Content-Type', 'text/html');
        res.write(`
          <!DOCTYPE html>
          <html>
            <head>
              <title>Form Submitted</title>
              <style>
                body { font-family: Arial, sans-serif; max-width: 600px; margin: 50px auto; padding: 20px; text-align: center; }
                .success { background: #d4edda; color: #155724; padding: 20px; border-radius: 5px; margin: 20px 0; }
                .details { background: #f8f9fa; padding: 15px; border-radius: 5px; margin: 20px 0; text-align: left; }
                a { color: #007bff; text-decoration: none; }
                a:hover { text-decoration: underline; }
              </style>
            </head>
            <body>
              <h2>✅ Form Submitted Successfully!</h2>
              <div class="success">
                <p>Thank you for your submission. Your message has been received.</p>
              </div>
              
              <div class="details">
                <h3>Submission Details:</h3>
                <p><strong>Name:</strong> ${submission.name}</p>
                <p><strong>Email:</strong> ${submission.email}</p>
                <p><strong>Phone:</strong> ${submission.phone}</p>
                <p><strong>Submitted:</strong> ${submission.date} at ${submission.time}</p>
              </div>
              
              <p><a href="/"> ← Submit Another Form</a></p>
            </body>
          </html>
        `);
        res.end();

      } catch (error) {
        console.error('Error processing form:', error);
        res.statusCode = 500;
        res.setHeader('Content-Type', 'text/html');
        res.write(`
          <!DOCTYPE html>
          <html>
            <head><title>Error</title></head>
            <body>
              <h2>Error</h2>
              <p>There was an error processing your form. Please try again.</p>
              <p><a href="/">← Back to Form</a></p>
            </body>
          </html>
        `);
        res.end();
      }
    });

  } else {
    // 404 for any other routes
    res.statusCode = 404;
    res.setHeader('Content-Type', 'text/html');
    res.write(`
      <!DOCTYPE html>
      <html>
        <head><title>404 Not Found</title></head>
        <body>
          <h2>404 - Page Not Found</h2>
          <p><a href="/">← Go to Form</a></p>
        </body>
      </html>
    `);
    res.end();
  }
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});