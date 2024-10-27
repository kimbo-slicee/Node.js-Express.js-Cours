![node.js and Express.js repo!](images/node-image.png "node Image")

![Static Badge](https://img.shields.io/badge/course-js?style=plastic&logo=nodedotjs&logoColor=%23145a32&logoSize=18px&label=node.js&labelColor=%230000&color=%23145a32&cacheSeconds=https%3A%2F%2Fnodejs.org) ![Static Badge](https://img.shields.io/badge/%20%20%F0%9F%93%9ACourse-js?style=plastic&logo=express&logoColor=%23ffff&logoSize=18px&label=Express.js&labelColor=%230000&color=%230000&cacheSeconds=https%3A%2F%2Fnodejs.org)

# Course Structure

```graphql
./node.js/* 
  ├─ node.js/1-Intro - # Intro
  ├─ node.js/2-Modules - # Individual smaller components
  ├─ node.js/3-Event-Loop - # Larger chunks of a page composed of multiple components
  ├─ node.js/4-Events - # Page layouts used for different types of pages composed of components and fragments
  ├─ node.js/6-Streams - # 
  ├─ src/pages/* - # Next.js file based routing
  │  ├─ _app.js - # next.js app entry point
  │  ├─ _document.js - # next.js document wrapper
  │  ├─ global.css - #  Global CSS styles
  │  └─ Everything else... - # File based routing
  └─ node.js/images - # Utility functions used in various places
```

# What is Node.js and why it's used for🤔

Node.js is a runtime environment that allows you to run JavaScript code on the server side. It’s built on Chrome’s V8 JavaScript engine, enabling fast, scalable, and event-driven programming, ideal for building web servers, APIs, and real-time applications. Node.js allows you to use JavaScript beyond just the browser, making it a great choice for full-stack development.

# What is Express.js Framework 🖼

Express.js is a minimalist web application framework for Node.js. It simplifies tasks like routing, handling HTTP requests and responses, and working with middleware. Express is widely used for building APIs and web applications due to its simplicity and flexibility.

# Topics to Cover for Learning Node.js and Express.js:

**1. Core 📍 Node.js Concepts:**
Node.js Overview: Understanding the V8 engine 🚀, event-driven 🧟‍♂ ️architecture, and non-blocking I/O.
Node.js Modules: Using core modules (fs, path, http, events) and working with custom modules.
File System Module: Reading, writing, updating, and deleting files.
Event-driven Architecture: Event loop, event emitters, handling callbacks, and promises.
Streams and Buffers: Working with data streams for I/O operations.
Asynchronous Programming: Callbacks, Promises, async/await.
Error Handling: Managing synchronous and asynchronous errors.
Working with JSON: Parsing and generating JSON.
NPM (Node Package Manager): Managing dependencies, scripts, and project configuration.<br>
**2. Web Development 💻 with Node.js:**
HTTP Module: Creating an HTTP server, handling requests and responses.
Routing: Directing traffic to specific endpoints based on HTTP methods (GET, POST, etc.).
Working with APIs: Fetching data from external APIs or creating your own REST API.
Template Engines: Using template engines like EJS, Pug, or Handlebars for dynamic HTML.
File Uploads and Downloads: Handling file uploads and serving files to clients.<br>
**3. Introduction 🚀 to Express.js 🖥:**
Setting up Express: Installing and configuring an Express application.
Routing in Express: Handling different HTTP methods (GET, POST, PUT, DELETE) and defining routes.
Middleware: Understanding and using middleware for request processing, error handling, and authentication.
Static Files: Serving static assets (CSS, JS, images) with Express.
Express Generators: Using express-generator to scaffold applications.
Express Routers: Organizing routes with Express routers for better code structure.
Error Handling in Express: Custom error handling middleware.<br>
**4. Working with Databases 🧮🛢 :**
Connecting to Databases: Using MongoDB, MySQL, or PostgreSQL with Node.js (using libraries like Mongoose or Sequelize).
CRUD Operations: Implementing Create, Read, Update, and Delete operations with databases.
ORMs/ODM: Working with Object-Relational Mappers (Sequelize) or Object-Document Mappers (Mongoose) for interacting
with databases.<br>
**5. Authentication & Security 🔐👮‍♂️:**
User Authentication: Implementing authentication using JWT (JSON Web Tokens) or sessions.
OAuth: Third-party authentication strategies (Google, Facebook, etc.).
Input Validation: Validating user inputs to prevent security vulnerabilities.
Security Best Practices: Protecting against SQL injection, cross-site scripting (XSS), and cross-site request
forgery (CSRF).<br>
**6. Real-time Communication 🗨:**
WebSockets: Building real-time communication features with WebSockets (e.g., chat apps) using libraries like Socket.io.
**7. Testing in Node.js 🔋:**
Unit Testing: Testing Node.js apps with frameworks like Mocha, Jest, or Chai.
Integration Testing: Testing HTTP requests and database interactions.<br>
**8. Deployment 🗄📬:**
Environment Variables: Handling configuration and secrets using environment variables.
Hosting: Deploying Node.js apps on platforms like Heroku, AWS, or DigitalOcean.
Process Management: Using tools like PM2 for running and managing Node.js applications.

# Nodemon

nodemon is a tool that helps develop Node.js based applications by automatically restarting 💱 the node application
when file 🗂 changes in the directory are detected.
nodemon does not require any additional changes to your code or method of development. nodemon is a replacement wrapper for node. To use nodemon, replace the word node on the command line when executing your script.

# An overview of HTTP  ![Http protocol](https://img.shields.io/badge/References_%F0%9F%9A%80-h?style=social&logo=mdnwebdocs&logoColor=%232e86c1&logoSize=100&label=DN%20&labelColor=%23f1c40f&color=%23f1c40f)
HTTP is a protocol for fetching resources such as HTML documents. It is the foundation of any data exchange on the Web and it is a client-server protocol, which means requests are initiated by the recipient, usually the Web browser. A complete document is typically constructed from resources such as text content, layout instructions, images, videos, scripts, and more.
### Components of HTTP-based systems
HTTP is a client-server protocol: requests are sent by one entity, the user-agent (or a proxy on behalf of it). Most of the time the user-agent is a Web browser, but it can be anything, for example, a robot that crawls the Web to populate and maintain a search engine index.
Each individual request is sent to a server, which handles it and provides an answer called the response. Between the client and the server there are numerous entities, collectively called proxies, which perform different operations and act as gateways or caches, for example.
# API vs SSR (serveer side rendring )
### 1. API (Application Programming Interface)
*API (Application Programming Interface)*
An API is a set of rules and protocols that allows software applications to communicate with each other. In web development, APIs often help front-end applications (like websites) retrieve data from a server or perform specific actions.
- Types of APIs: Common types include REST, GraphQL, and SOAP.
- How APIs work: An API request is sent to a server, which processes it and returns a response with data, often in 
  JSON format.
- Example use case: A weather website might use an API to get real-time weather data from a weather service and 
  display it on the page.
### 2. SSR (Server-Side Rendering)
SSR is a method of rendering web pages on the server instead of the client’s browser. With SSR, the HTML for a webpage is generated on the server, then sent to the client. This process allows users to see content more quickly and can help with SEO.
- How SSR works: The server processes requests and renders the complete HTML for a page. When a user accesses the 
site, they receive a fully rendered HTML page.
- Example use case: News websites often use SSR to ensure that content loads quickly and is SEO-friendly.
### 3.Key Differences Between API and SSR
| Feature | 	API                                        |  SSR                                   |
|---------|---------------------------------------------|----------------------------------------|
| Purpose | 	Facilitates data exchange between apps	    | Renders HTML on the server             |
| Primary Role | 	Provides data for front-end apps	          | Generates HTML for full web pages      |
| SEO Benefits | 	Limited, depends on client-side rendering	 | High, as full HTML is provided to bots |
| Use Cases | 	Mobile apps, single-page applications	     | Content-heavy websites, blogs          |

### Which Is Better?
*The choice depends on the use case:*
- For performance and SEO: SSR is typically better since it loads pages faster and is more SEO-friendly.
- For flexibility and interactivity: APIs are ideal, especially if you’re building a dynamic single-page application 
(SPA) where parts of the page update without a full reload.