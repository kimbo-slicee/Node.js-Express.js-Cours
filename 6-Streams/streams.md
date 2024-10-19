# 1 What Are Streams in Node.js ❓
Streams are a fundamental concept in Node.js, used to handle asynchronous data flow. They allow you to process 
data in chunks 🧩 rather than all at once, making it efficient for handling large data sets (e.g., files, network 
requests) without using a lot of memory.
Streams work by reading or writing data piece by piece, rather than loading an entire dataset into memory. This is particularly useful when dealing with I/O-bound operations (such as reading/writing files or network communication).
# 2 Types of Streams in Node.js 
**There are four main types of streams in Node.js:**
- **Readable Streams:** These streams allow you to read data (e.g., from a file).
Example: fs.createReadStream() reads data from a file.
**Writable Streams:** These streams allow you to write data (e.g., to a file).
Example: fs.createWriteStream() writes data to a file.
- **Duplex Streams:** These streams allow you to both read and write data.
Example: A TCP socket connection.
**Transform Streams:** These streams allow you to modify or transform data while it's being read or written.
Example: zlib.createGzip() compresses the data as it's streamed.
# 3 Why Node.js Uses Streams ❓
**Streams are widely used in Node.js for the following reasons:**
1. Efficient Memory Usage 🚀:
Instead of loading 💱 an entire file 🗂 or response into memory, Node.js streams read or write data in chunks. This 
   allows the program to handle large files or data sources without consuming a lot of memory ✔.
2. Non-Blocking I/O ⏯ :
Node.js uses streams to handle I/O-bound tasks [e.g., reading/writing files, HTTP requests]() in a non-blocking 
   manner, improving performance and scalability.
3. Piping Operations 🔗:
Streams can be piped together, which means you can pass data from one stream directly to another. For example, reading a file stream and piping it to a network response, making the data flow from the file to the user efficiently.
4. Handling Large Datasets 📊:
Streams are ideal for applications dealing with large files (e.g., video streaming, audio processing, logs) because they don’t load the entire dataset into memory at once, improving efficiency.
