### What is Node.js Modules 🗃

In Node.js, a module is a reusable block of code that encapsulates functionality. You can think of it as a file or
collection of files that export specific objects, functions, or values. These modules help keep the code organized and maintainable by breaking larger applications into smaller, reusable components.

> [!NOTE]  
> when we call a module inside our main module all the functions inside this modules will be invoiced.
> when we called build in modules such as os and fs we don't need to install nothing but when we want to use
> external modules we need to install them

### Wait is Common Built-in Node.js Modules:

**1:File 🗂 System (fs)**
Used to interact with the file system (read/write files, create directories, etc.).

```javascript
const fs = require('fs');
fs.readFile('FilName.txt', 'utf8', (err, data) => {
    if (err) throw err;
    console.log(data);
});
```

**2:http💱Module**
Used to create an HTTP server to handle requests and responses...

```javascript
const http = require('http');
const server = http.createServer((req, res) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    res.end('Hello World\n');
});
server.listen(3000, () => {
    console.log('Server running at http://localhost:3000/');
});
```

**3:path**
Used for handling and transforming file paths.

```javascript
const path = require('path');
const filePath = path.join(__dirname, 'example.txt');
console.log(filePath);  // Outputs the absolute file path to example.txt
```

**4:OS(Operating System)**
Provides information about the operating system (e.g., CPU, memory, platform).

```javascript
const os = require('os');
console.log(os.platform());  // Output: 'win32', 'linux', etc.
console.log(os.cpus());  // Output: CPU details
```

**5:events**
Used for working with event-driven programming. It allows creating and handling custom events.

```javascript
const EventEmitter = require('events');
const eventEmitter = new EventEmitter();

eventEmitter.on('sayHello', () => {
    console.log('Hello, World!');
});

eventEmitter.emit('sayHello');
```

**6:crypto**
Provides cryptographic functionality (e.g., hashing, encryption).

```javascript
const crypto = require('crypto');
const hash = crypto.createHash('sha256').update('password').digest('hex');
console.log(hash);  // Outputs a hashed version of 'password'
```

**7:URL(Uniform Resource Locator)**
Used to parse and format URL strings.

```javascript
const url = require('url');
const myUrl = new URL('https://example.com/path?name=John');
console.log(myUrl.hostname);  // Output: 'example.com'
console.log(myUrl.searchParams.get('name'));  // Output: 'John'
```

> Note:📌
>> Key 🔑 Points About Node.js Modules:
>> Modularization: Breaking your code into small, reusable components (modules).
>> Scope: Variables and functions in a module are private by default unless exported.
>> **require():** Used to import modules.
>> **module.exports:** Used to export functionality from a module.
