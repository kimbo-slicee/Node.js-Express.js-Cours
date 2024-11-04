 # What is query-string in the URL 
A query string is a part of a URL that allows data 📊 to be passed between 🚚 the client and server, typically used to 
filter, sort, or provide parameters to an HTTP request. It follows a ? symbol in the URL and consists of key-value pairs separated by &. Here’s a quick overview:
### Structure of a Query String
```bash
https://localhost:2000/api/v1/search?name=username&limit=10&pages=5
```
Base URL: https://localhost:2000/api/v1/search
**Query String:** ?search=name&limit=10
**Parameters:**
name with username 
limit with value 10
### How Query Strings Facilitate Data Exchange
When a client (like a web browser) sends an HTTP request with a query string, 
the server can extract this data and use it to customize the response. Here’s the general flow.
**Client-side:** The user interacts with the [frontend](), triggering a URL request with parameters in the query string.
**Server-side:** The server parses the query string parameters, processes them (e.g., filters database results), and 
generates a response.
**Response:** The server sends back data in response, [potentially as HTML or JSON.]()
### Advantages of Query Strings
Simple and Human-readable: Easy to create and debug.
Useful for GET Requests: Ideal for requests that don't alter server state, like search or filtering.
Supports Bookmarking: URLs with query strings can be bookmarked for quick access.
# What is Middleware 🤔
Middleware is software that sits between the client and the server, acting as a bridge to manage, modify, or facilitate the processing of requests and responses. In web development, middleware is typically a function or series of functions that intercepts requests in an application's request-response cycle. It can perform a range of tasks like logging, authentication, data parsing, error handling, and more.
### 🗝 Key Functions of Middleware
**Logging and Monitoring:** Middleware can log details about each request, such as the endpoint accessed, user 
information, request time, etc. This is useful for tracking usage, errors, and performance.

**👮‍♂️ Authentication and Authorization:**.
Middleware often handles checking if a user is authenticated (logged in) and 
authorized to access certain resources.

**Data Transformation and Parsing:**.
Middleware can parse incoming request data, such as JSON or form data, so that the 
server can more easily work with it.

**Error Handling:** . 
Middleware can catch and manage errors, returning appropriate responses to the client or 
redirecting the client to error-handling pages.

**Cross-Origin Resource Sharing (CORS):** . 
Middleware can enable CORS, allowing your application to define which domains 
can access its resources.
### Benefits of Middleware
**Modularity:** Middleware breaks down functionality into manageable pieces, improving code readability and maintenance.
**Reusability:** Common functionality (like authentication) can be reused across routes.
**Scalability:** Middleware can be added or removed easily to adapt to application changes or new requirements.
>[!NOTE]
>Overall, middleware provides a clean way to add functionality to web applications without embedding it directly in 
> route handlers.
### Built-in Middleware in Express.js
Express.js provides several built-in middleware functions that simplify common tasks in web applications, such as parsing request bodies, handling cookies, serving static files, and more. These middleware functions are provided out of the box, so you don’t need to write them from scratch.

<details>
<summary>1-express.json()</summary>

- Parses incoming requests with JSON payloads.
- Useful for handling POST and PUT requests where data is sent in JSON format.

```javascript
app.use(express.json());
```
</details>
<details>
<summary>2-express.urlencoded()</summary>

- Parses incoming requests with URL-encoded payloads, typically from HTML form submissions 
(application/x-www-form-urlencoded).
- Accepts options like { extended: true } to allow nested objects in the URL-encoded data.
```javascript
app.use(express.urlencoded({ extended: true }));
```
</details>

<details>
<summary>3-express.static()</summary>

- Serves static files (such as HTML, CSS, images, etc.) from a specified directory.
- Useful for frontend assets and serving resources without custom server logic.
```javascript
app.use(express.static('public')); // Serves static files from the 'public' folder

```
</details>
<details>
<summary>4-express.raw()</summary>

- Parses incoming requests with raw payloads, used for handling non-parsed binary or plain text data (e.g., 
  application/octet-stream).

```javascript
app.use(express.raw());

```
</details>
<details>
<summary>5-express.text()</summary>

- Parses incoming requests with plain text payloads (text/plain).
- Useful for handling raw text data as strings.
```javascript
app.use(express.text());
```
</details>







