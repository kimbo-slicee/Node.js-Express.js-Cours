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
