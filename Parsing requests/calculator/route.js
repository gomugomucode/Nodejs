const querystring = require('querystring');

const route = (req, res) => {
    if (req.url === '/') {
        res.setHeader('Content-Type', 'text/html');
        res.write(`<!DOCTYPE html><html><head><meta charset="UTF-8"><title>Home page</title></head><body><p><strong>Welcome to the home page.</strong></p><a href="/calculator">Calculator</a></body></html>`);
    }
    else if (req.url === '/calculator') {
        res.setHeader('Content-Type', 'text/html');
        res.write(`<!DOCTYPE html>
<html>

<head>
  <meta charset="UTF-8">
  <title>Calculator</title>
  <style>
    body {
      font-family: Arial, sans-serif;
      max-width: 500px;
      margin: 50px auto;
      padding: 20px;
      background-color: #f5f5f5;
    }

    .calculator-form {
      background: white;
      padding: 30px;
      border-radius: 10px;
      box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
    }

    h1 {
      text-align: center;
      color: #333;
      margin-bottom: 30px;
    }

    .form-group {
      margin-bottom: 20px;
    }

    label {
      display: block;
      margin-bottom: 5px;
      color: #555;
      font-weight: bold;
    }

    input[type="number"] {
      width: 100%;
      padding: 12px;
      border: 2px solid #ddd;
      border-radius: 5px;
      font-size: 16px;
      box-sizing: border-box;
    }

    input[type="number"]:focus {
      border-color: #007bff;
      outline: none;
    }

    .calculate-btn {
      width: 100%;
      padding: 15px;
      background-color: #007bff;
      color: white;
      border: none;
      border-radius: 5px;
      font-size: 18px;
      cursor: pointer;
      margin-top: 10px;
    }

    .calculate-btn:hover {
      background-color: #0056b3;
    }
  </style>
</head>

<body>
  <div class="calculator-form">
    <h1>Number Calculator</h1>
    <form id="calculatorForm" action="/calculate-result" method="POST">
      <div class="form-group"><label for="number1">First Number:</label><input type="number" id="number1" name="number1"
          step="any" required></div>
      <div class="form-group"><label for="number2">Second Number:</label><input type="number" id="number2"
          name="number2" step="any" required></div><button type="submit" class="calculate-btn">Sum</button>
    </form>
  </div>
</body>

</html>`);
res.end();
    }
    else if (req.url === '/calculate-result' && req.method === 'POST') {
        let body = '';
        req.on('data', chunk => {
            body += chunk.toString();
        });
        req.on('end', () => {
            const data = querystring.parse(body);
            const num1 = parseFloat(data.number1) || 0;
            const num2 = parseFloat(data.number2) || 0;
            const { add } = require('./calculator'); 
            const sum = add(num1, num2); // Use the module function
            res.setHeader('Content-Type', 'text/html');
            res.write(`<!DOCTYPE html>
<html>

<head>
  <meta charset="UTF-8">
  <title>Result</title>
</head>

<body>
  <p>The sum of two numbers is ${sum}</p>
</body>

</html>`);
            res.end();
        });
    }
    else {
       res.statusCode = 404;
        res.setHeader('Content-Type', 'text/html');
        res.write('<!DOCTYPE html><html><head><meta charset="UTF-8"><title>404</title></head><body><p>Page not found</p></body></html>');
        res.end();
    }
    
};

module.exports = route;