const http = require('http');
const port = '3000';
const localhost = '127.0.0.1';

const server = http.createServer((req, res) => {
    console.log(req.headers, req.method, req.url);
    
    // Set content type to HTML
    res.setHeader('Content-Type', 'text/html');
    
    if (req.url === '/') {
        res.write(`
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Mintra</title>
    <style>
        nav ul { list-style: none; display: flex; gap: 20px; }
        nav a { text-decoration: none; }
        .welcome-text { margin: 20px 0; font-size: 18px; }
    </style>
</head>
<body>
    <nav>
        <ul>
            <a href='/'><li>Home</li></a>
            <a href='/men'><li>Men</li></a>
            <a href='/women'><li>Women</li></a>
            <a href='/kids'><li>Kids</li></a>
            <a href='/cart'><li>Cart</li></a>
        </ul>
    </nav>
    <div class='welcome-text'>
        Welcome to home page
    </div>
</body>
</html>
        `);
    }
    else if (req.url === '/men') {
        res.write(`
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Mintra - Men</title>
    <style>
        nav ul { list-style: none; display: flex; gap: 20px; }
        nav a { text-decoration: none; }
        .welcome-text { margin: 20px 0; font-size: 18px; }
    </style>
</head>
<body>
    <nav>
        <ul>
            <a href='/'><li>Home</li></a>
            <a href='/men'><li>Men</li></a>
            <a href='/women'><li>Women</li></a>
            <a href='/kids'><li>Kids</li></a>
            <a href='/cart'><li>Cart</li></a>
        </ul>
    </nav>
    <div class='welcome-text'>
        Welcome to men page
    </div>
</body>
</html>
        `);
    }
    else if (req.url === '/women') {
        res.write(`
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Mintra - Women</title>
    <style>
        nav ul { list-style: none; display: flex; gap: 20px; }
        nav a { text-decoration: none; }
        .welcome-text { margin: 20px 0; font-size: 18px; }
    </style>
</head>
<body>
    <nav>
        <ul>
            <a href='/'><li>Home</li></a>
            <a href='/men'><li>Men</li></a>
            <a href='/women'><li>Women</li></a>
            <a href='/kids'><li>Kids</li></a>
            <a href='/cart'><li>Cart</li></a>
        </ul>
    </nav>
    <div class='welcome-text'>
        Welcome to women page
    </div>
</body>
</html>
        `);
    }
    else if (req.url === '/kids') {
        res.write(`
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Mintra - Kids</title>
    <style>
        nav ul { list-style: none; display: flex; gap: 20px; }
        nav a { text-decoration: none; }
        .welcome-text { margin: 20px 0; font-size: 18px; }
    </style>
</head>
<body>
    <nav>
        <ul>
            <a href='/'><li>Home</li></a>
            <a href='/men'><li>Men</li></a>
            <a href='/women'><li>Women</li></a>
            <a href='/kids'><li>Kids</li></a>
            <a href='/cart'><li>Cart</li></a>
        </ul>
    </nav>
    <div class='welcome-text'>
        Welcome to kids page
    </div>
</body>
</html>
        `);
    }
    else if (req.url === '/cart') {
        res.write(`
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Mintra - Cart</title>
    <style>
        nav ul { list-style: none; display: flex; gap: 20px; }
        nav a { text-decoration: none; }
        .welcome-text { margin: 20px 0; font-size: 18px; }
    </style>
</head>
<body>
    <nav>
        <ul>
            <a href='/'><li>Home</li></a>
            <a href='/men'><li>Men</li></a>
            <a href='/women'><li>Women</li></a>
            <a href='/kids'><li>Kids</li></a>
            <a href='/cart'><li>Cart</li></a>
        </ul>
    </nav>
    <div class='welcome-text'>
        Welcome to cart page
    </div>
</body>
</html>
        `);
    }
    else {
        res.statusCode = 404;
        res.write(`
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>404 - Page Not Found</title>
</head>
<body>
    <h1>404 - Page Not Found</h1>
    <p>The page you're looking for doesn't exist.</p>
    <a href="/">Go back to home</a>
</body>
</html>
        `);
    }
    
    res.end();
});

server.listen(port, localhost, () => {
    console.log(`Server running at http://${localhost}:${port}/`);
});