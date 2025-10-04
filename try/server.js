const http = require('node:http');
const path = require('node:path');
const hostname = '127.0.0.1';
const port = 3000;

const server = http.createServer((req, res) => {
  console.log(req.url, req.method)

  if (path === '/' || path === '/home') {
    res.setHeader('Content-Type', 'text/html');
    res.send(`
<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Home</title>
</head>

<body>
  <div>
    Home page
  </div>

  <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Omnis aliquam ullam reiciendis cupiditate mollitia
    voluptatum quis quam magni repellat non, odit id illum aliquid debitis alias similique delectus dignissimos error!
  </p>
  <br />
  <p>
    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Explicabo aliquid, vero maxime velit, architecto optio
    facilis aliquam ratione, nihil fugiat tenetur cumque doloribus et minima? Ad perspiciatis, nihil ipsa veritatis,
    obcaecati, aperiam veniam corrupti atque itaque vero officia assumenda. Repellat voluptatibus laudantium dolores
    inventore architecto voluptatum delectus? Quia quae maxime exercitationem fuga nisi commodi rem ipsam, quisquam quos
    excepturi quaerat eligendi deleniti dolor ea, quidem error illum natus temporibus!
  </p>
  <br />
  <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Omnis aliquam ullam reiciendis cupiditate mollitia
    voluptatum quis quam magni repellat non, odit id illum aliquid debitis alias similique delectus dignissimos error!
  </p>


</body>

</html>
`
    )
    res.end();
  }
  else if (path === '/about') {
    res.setHeader('Content-Type', 'text/html');
    res.send(`
<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>About</title>
</head>

<body>
  <div>
    About page
  </div>
  <img src="photo.png" alt="about-photo>
           <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Omnis aliquam ullam reiciendis cupiditate mollitia voluptatum quis quam magni repellat non, odit id illum aliquid debitis alias similique delectus dignissimos error!</p>
        <br/>
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Explicabo aliquid, vero maxime velit, architecto optio facilis aliquam ratione, nihil fugiat tenetur cumque doloribus et minima? Ad perspiciatis, nihil ipsa veritatis, obcaecati, aperiam veniam corrupti atque itaque vero officia assumenda. Repellat voluptatibus laudantium dolores inventore architecto voluptatum delectus? Quia quae maxime exercitationem fuga nisi commodi rem ipsam, quisquam quos excepturi quaerat eligendi deleniti dolor ea, quidem error illum natus temporibus!
        </p>
        <br/>
        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Omnis aliquam ullam reiciendis cupiditate mollitia voluptatum quis quam magni repellat non, odit id illum aliquid debitis alias similique delectus dignissimos error!</p>



        
      </body>
      </html>
      `
    )
    res.end();
  }
  else if (path === '/contact') {
    res.setHeader('Content-Type', 'text/html');
    res.send(`
      <!DOCTYPE html>
      <html lang=" en">

  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Contact</title>
  </head>

  <body>
    <div>
      Contact page
    </div>

    <form>

      <label for="name">Name</label>
      <input type="text" placeholder="enter name">
      <br/>
      <label for="address">Address</label>
      <input type="text" placeholder="enter address">
      <br/>
      <label for="phone">Phone</label>
      <input type="text" placeholder="enter phone">
      <br/>
      <label for="email">Email</label>
      <input type="text" placeholder="enter email">
      <br/>
      <br/>
      <label for="message">Message</label>
      <input type="text" placeholder="tell about yourself">
      <br/>
      <button type="submit">Send Message </button>
    

      </form>
  </body>
</html>  `
    )
    res.end();
  }
  else {
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