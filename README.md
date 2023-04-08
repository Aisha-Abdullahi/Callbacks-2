# Async Callback

Write a function called repeatHello which takes a callback as it's parameter. The callback function will simply print "Hello". The repeatHello function will have to execute the callback function with an interval of 1 second. The callback function must be an arrow function, can you also explain why?

Tips:

- The `setInterval` method will be useful
- The callback function must be an arrow function, can you also explain why? // Not sure. Tried the normal function too and it worked.


<!-- setInterval(() => console.log("Hello") && callback(), 1000); --> single line arrow function