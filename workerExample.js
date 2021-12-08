const { parentPort } = require('worker_threads')

parentPort.postMessage({data: counter()});

function counter() {
    let counter = 0;

    while (counter < 1e9) {
        counter++;
    }

    return counter;
}

