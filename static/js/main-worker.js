['debug', 'info', 'log', 'warn', 'error'].forEach(function (verb) {
    console[verb] = (function (method, verb) {
        return function (text) {
            method(text);
            postMessage([verb, text]);
        };
    })(console[verb].bind(console), verb);
});

importScripts('bitwuzla.js');
importScripts('unisim.js');
importScripts('main.bc.wasm.js');

Unisim().then((unisim) => {
    self.unisim = unisim;
})

onmessage = async (e) => {
    switch (e.data[0]) {
        case 'version':
            postMessage(['version', binsec.version()]);
            return;
        case 'describe':
            postMessage(['describe', binsec.describe(e.data[1])]);
            return;
        case 'disasm':
            postMessage(['disasm', binsec.disasm(e.data[1])]);
            return;
        case 'run':
            binsec.run(e.data[1], e.data[2], e.data[3], e.data[4], e.data[5], e.data[6], e.data[7]);
            break;
        default:
    }
    postMessage(['finished']);
};
