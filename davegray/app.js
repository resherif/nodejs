const logEvents = require('./logEvents');
const EventEmitters = require('events');
class MyEmitter extends EventEmitters { }
const myEmitter = new MyEmitter();
myEmitter.on('log', (msg) => logEvents(msg));
setTimeout(() => {
    myEmitter.emit('log', 'Log event emitted!');
}, 2000);