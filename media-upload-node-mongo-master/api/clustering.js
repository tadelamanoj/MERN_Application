const cluster = require('cluster');
const http = require('http');
const numCPUs = require('os').cpus().length;


console.log(1)
if (cluster.isMaster) {
  // Fork workers for each CPU
  console.log("length",numCPUs)
  for (let i = 0; i < numCPUs; i++) {
    const worker = cluster.fork();

    // After a certain condition is met, send a message to kill a worker
    // if (i === 1) {
    //   setTimeout(() => {
    //     console.log(`Sending kill message to worker ${worker.process.pid}`);
    //     worker.send('killMe');
    //     cluster.fork();
    //   }, 5000);
    // }
  }

  // Listen for workers being online
  cluster.on('online', (worker) => {
    console.log(`Worker ${worker.process.pid} is online`);
  });

  // Listen for messages from workers
  cluster.on('message', (worker, message) => {
    if (message === 'killMe') {
      console.log(`Killing worker ${worker.process.pid}`);
      worker.kill();
    }
  });
} else {
  // This is the worker process, start your server here
  http.createServer((req, res) => {
    res.writeHead(200);
    res.end(`Hello, World! I'm worker ${process.pid}\n`);
  }).listen(8000);

  // Send a message to master process indicating readiness
  process.send('ready');
}
