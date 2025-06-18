let log = [];

let append = (text) => log.push(text);

['log', 'warn', 'error'].forEach(function (verb) {
    console[verb] = (function (method, verb, log) {
        return function (text) {
            method(text);
            append(text);
        };
    })(console[verb].bind(console), verb, log);
});

importScripts('bitwuzla.js');
importScripts('unisim.js');
importScripts('main.bc.wasm.js');

Unisim().then((unisim) => {
  self.unisim = unisim;
})

onmessage = async (e) => {
    log.length = 0;
    let buf = e.data[0];
    let script = e.data[1];
    binsec.run('bin', buf, script, 1000, 2);
    postMessage([buf, log], [buf]);
};
