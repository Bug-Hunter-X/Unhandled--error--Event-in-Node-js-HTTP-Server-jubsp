# Unhandled 'error' Event in Node.js HTTP Server

This repository demonstrates a common but easily missed error in Node.js: the lack of proper error handling for the 'error' event emitted by the `http.Server` object.

The `bug.js` file shows a server that crashes silently when an unexpected error occurs.  The `bugSolution.js` file demonstrates a robust solution.