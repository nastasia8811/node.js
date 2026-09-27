import { createServer } from 'node:http';

let requestCount = 0;
let port = 3000;

const args = process.argv.slice(2);

args.forEach(arg => {
    if (arg.startsWith('--port=')) {
        port = parseInt(arg.split('=')[1], 10);
    }
});

const server = createServer((req, res) => {
    requestCount++;

    res.writeHead(200, { 'Content-Type': 'application/json' });
    res.end(JSON.stringify({
        message: 'Request handled successfully',
        requestCount: requestCount
    }));
});

server.listen(port, '127.0.0.1', () => {
    console.log(`Listening on 127.0.0.1:${port}`);
});


// Варіант 2 - Користувач при запуску програми може вказати інший порт для запуску сервера,
// передавши номер порту в аргументах командної строки у наступному вигляді:npm start -- --port=1337.


//import { parseArgs } from 'node:util';

// const { values } = parseArgs({
//     options: {
//         port: { type: 'string', default: '3000' }
//     }
// });
//
// const port = parseInt(values.port, 10);
