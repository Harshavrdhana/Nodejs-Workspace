import fs from 'fs'


//READABLE STREAM
// const stream =createReadStream('./data.txt', {encoding:'utf8'});

// stream.on('data', (data)=>{
//   console.log(data.toString())
// })


// const stream =fs.createReadStream('./data.txt');

// stream.on('data', (chunk)=>{
//   console.log(chunk.toString())
// });

//WRITABLE STREAM

const writeStream =fs.createWriteStream('output.txt');
writeStream.write('Hello From Node.js','utf-8')
writeStream.end();


// In Node.js, streams are objects that allow you to read data from a source or write data to a destination continuously in chunks. They are particularly useful when dealing with large amounts of data or when processing data sequentially. Node.js provides a built-in stream module that offers several types of streams, such as Readable, Writable, Duplex, and Transform streams. Let's dive into each type with code examples:

// Readable Streams:
// Readable streams are used for reading data from a source. They provide an interface for reading data chunk by chunk.

// javascript
// Copy code
// const fs = require('fs');

// // Create a readable stream from a file
// const readableStream = fs.createReadStream('example.txt');

// // Listen for 'data' event to handle data chunks
// readableStream.on('data', (chunk) => {
//   console.log('Received chunk:', chunk.toString());
// });

// // Listen for 'end' event to know when the stream has ended
// readableStream.on('end', () => {
//   console.log('End of stream');
// });
// Writable Streams:
// Writable streams are used for writing data to a destination. They provide an interface for writing data chunk by chunk.

// javascript
// Copy code
// const fs = require('fs');

// // Create a writable stream to a file
// const writableStream = fs.createWriteStream('output.txt');

// // Write data to the stream
// writableStream.write('Hello, World!', 'utf8');

// // End the stream
// writableStream.end();
// Duplex Streams:
// Duplex streams implement both Readable and Writable interfaces. They allow both reading from and writing to a stream.

// javascript
// Copy code
// const { Duplex } = require('stream');

// // Create a Duplex stream
// const duplexStream = new Duplex({
//   read(size) {
//     // Implement reading logic
//   },
//   write(chunk, encoding, callback) {
//     // Implement writing logic
//     callback();
//   }
// });
// Transform Streams:
// Transform streams are a type of duplex stream where the output is computed based on the input. They allow data to be modified as it is being read from or written to.

// javascript
// Copy code
// const { Transform } = require('stream');

// // Create a Transform stream to uppercase incoming data
// const upperCaseTransform = new Transform({
//   transform(chunk, encoding, callback) {
//     this.push(chunk.toString().toUpperCase());
//     callback();
//   }
// });
// These are the main types of streams in Node.js. You can use them to efficiently handle data processing, especially when dealing with large datasets, network communication, or file system operations. By working with streams, you can avoid loading large amounts of data into memory at once, leading to more efficient and scalable applications.


//=======================GEMINI================================

// I'd be glad to explain streams in Node.js comprehensively, incorporating code examples and insights from previous responses and addressing potential shortcomings:

// Streams in Node.js

// Streams are a fundamental concept in Node.js that enable efficient handling of large or continuous data sources. They provide an asynchronous, event-driven mechanism for processing data in chunks rather than loading everything into memory at once. This is particularly beneficial for:

// Large datasets: Streams prevent memory exhaustion by processing data incrementally.
// Real-time data: They facilitate working with continuous data flows from network connections, sensors, or APIs.
// Scalability: Node.js's non-blocking nature aligns perfectly with streams, making applications scalable for handling high-volume data.
// Key Concepts

// Abstract Interface: Streams provide a unified way to work with various data sources, regardless of their origin.
// Event-Driven: They leverage events to signal data availability, processing completion, and errors.
// Chunking: Data is broken down into manageable pieces for efficient memory usage and processing.
// Types of Streams: Node.js offers four primary stream types:
// Readable: Used for reading data from a source (e.g., fs.createReadStream(), network sockets).
// Writable: Used for writing data to a destination (e.g., fs.createWriteStream(), network sockets).
// Duplex: Streams that can be both Readable and Writable (e.g., TCP sockets).
// Transform: Duplex streams that modify or transform data as it passes through (e.g., zlib.createGzip() for compression).
// Creating Readable and Writable Streams

// Node.js offers built-in modules like fs (file system) and http (HTTP server) that provide methods for creating Readable and Writable streams. Here are examples:

// JavaScript
// const fs = require('fs');

// // Readable Stream (reading a file)
// const readStream = fs.createReadStream('data.txt');

// // Writable Stream (writing to a file)
// const writeStream = fs.createWriteStream('output.txt');

// // Handle data events for the Readable stream
// readStream.on('data', (chunk) => {
//   console.log('Received data chunk:', chunk.toString());

//   // Write the received chunk to the Writable stream
//   writeStream.write(chunk);
// });

// // Handle errors for both streams
// readStream.on('error', (err) => {
//   console.error('Error reading file:', err);
// });

// writeStream.on('error', (err) => {
//   console.error('Error writing file:', err);
// });

// // Handle stream completion events (optional)
// readStream.on('end', () => {
//   console.log('Finished reading data');
//   writeStream.end(); // Close the Writable stream as well
// });

// writeStream.on('finish', () => {
//   console.log('Finished writing data');
// });
// Use code with caution.
// Piping Streams

// A powerful feature of Node.js streams is piping, which allows you to connect the output of one stream to the input of another. This creates a data pipeline where data flows from one stream to the next without explicit manipulation.

// JavaScript
// readStream.pipe(writeStream); // Data from 'data.txt' will be written to 'output.txt'
// Use code with caution.
// Transform Streams (Example with Compression)

// Transform streams are a versatile type that allows you to modify data as it passes through. Here's an example using zlib.createGzip() for compression:

// JavaScript
// const zlib = require('zlib');

// const readStream = fs.createReadStream('large_file.txt');
// const compressedStream = zlib.createGzip();
// const writeStream = fs.createWriteStream('large_file.txt.gz');

// readStream
//   .pipe(compressedStream)
//   .pipe(writeStream)
//   .on('finish', () => console.log('File compressed successfully'));
// Use code with caution.
// Error Handling

// It's crucial to handle potential errors that may occur during stream operations. Each stream object emits an error event whenever an error is encountered. Here's how to handle errors in the previous examples:

// JavaScript
// readStream.on('error', (err) => {
//   console.error('Error reading file:', err);
// });

// compressedStream.on('error', (err) => {
//   console.error('Error compressing data:', err);
// });

// writeStream.on('error', (err) => {
//   console.error('Error writing to file:', err);
// });






