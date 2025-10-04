// Import Express framework
const express = require('express');
const app = express();


// ------------------------------
// MIDDLEWARE DEFINITIONS
// ------------------------------

// 1. Global Logger Middleware
// Logs every incoming request method & URL
function simpleLogger(req, res, next) {
  console.log("-> Global Logger served");
  console.log(`-> Method: ${req.method}, URL: ${req.url}`);
  next(); // Pass control to next middleware or route
}

// 2. Timestamp Middleware
// Adds the current request time into the request object
function addTimestamp(req, res, next) {
  req.requestTime = new Date().toISOString();
  console.log("-> Timestamp middleware executed");
  next();
}

// 3. Terminating Middleware
// This one does NOT call next(), so it stops the request cycle early
function terminateEarly(req, res, next) {
  console.log("-> Terminating middleware triggered");
  res.status(503).send("Request stopped early - Service Unavailable");
  // Notice: no next() here
}

// 4. Error Handling Middleware (Special Type)
// Always has 4 parameters: (err, req, res, next)
// Used to catch errors thrown in other middlewares/routes
function errorHandler(err, req, res, next) {
  console.error("-> Error Handler caught:", err.message);
  res.status(500).send("Something broke! " + err.message);
}


// ------------------------------
// APPLY GLOBAL MIDDLEWARE
// ------------------------------

// These run on every single request (in order)
app.use(simpleLogger);
app.use(addTimestamp);


// ------------------------------
// ROUTES
// ------------------------------

// Basic route (uses global middlewares)
app.get('/', (req, res) => {
  res.send(`Welcome! Request Time: ${req.requestTime}`);
});

// Another simple route
app.get('/about', (req, res) => res.send("About Page"));

// Another one
app.get('/contact', (req, res) => res.send("Contact Page"));

// Another one
app.get('/service', (req, res) => res.send("Service Page"));


// Route-specific middleware usage
// Only for this route, 'addTimestamp' runs again before final response
app.get('/special', addTimestamp, (req, res) => {
  res.send(`Special Route. Timestamp: ${req.requestTime}`);
});


// Path-specific middleware
// Only triggers when the path matches '/submit-details'
app.post('/submit-details', 
  (req, res, next) => {
    console.log("-> Middleware triggered only on POST /submit-details");
    next(); // pass control to next handler
  }, 
  (req, res) => {
    res.send("Details submitted successfully!");
  }
);


// Route with terminating middleware
// Any request to /terminate will be blocked early
app.use('/terminate', terminateEarly);


// Example route that throws an error (to test errorHandler)
app.get('/cause-error', (req, res, next) => {
  // Simulate an error
  const err = new Error("Manual test error!");
  next(err); // Passes error to errorHandler
});


// ------------------------------
// APPLY ERROR HANDLER
// ------------------------------

// Must come LAST in the chain
app.use(errorHandler);


// ------------------------------
// START SERVER
// ------------------------------
const port = 3001;
app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
