(function(a){typeof
globalThis!=="object"&&(this?b():(a.defineProperty(a.prototype,"_T_",{configurable:true,get:b}),_T_));function
b(){var
b=this||self;b.globalThis=b;delete
a.prototype._T_}}(Object));(Y=>async a=>{"use strict";const{link:i,src:V,generated:J}=a,e=globalThis.process?.versions?.node,R={cos:Math.cos,sin:Math.sin,tan:Math.tan,acos:Math.acos,asin:Math.asin,atan:Math.atan,cosh:Math.cosh,sinh:Math.sinh,tanh:Math.tanh,acosh:Math.acosh,asinh:Math.asinh,atanh:Math.atanh,cbrt:Math.cbrt,exp:Math.exp,expm1:Math.expm1,log:Math.log,log1p:Math.log1p,log2:Math.log2,log10:Math.log10,atan2:Math.atan2,hypot:Math.hypot,pow:Math.pow,fmod:(a,b)=>a%b},x=[Float32Array,Float64Array,Int8Array,Uint8Array,Int16Array,Uint16Array,Int32Array,Int32Array,Int32Array,Int32Array,Float32Array,Float64Array,Uint8Array,Uint16Array,Uint8ClampedArray],f=e&&require("node:fs"),b=f?.constants,y=f?[b.R_OK,b.W_OK,b.X_OK,b.F_OK]:[],S=f?[b.O_RDONLY,b.O_WRONLY,b.O_RDWR,b.O_APPEND,b.O_CREAT,b.O_TRUNC,b.O_EXCL,b.O_NONBLOCK,b.O_NOCTTY,b.O_DSYNC,b.O_SYNC]:[];var
c={map:new
WeakMap(),set:new
Set(),finalization:new
FinalizationRegistry(a=>c.set.delete(a))};function
U(a){const
b=new
WeakRef(a);c.map.set(a,b);c.set.add(b);c.finalization.register(a,b,a)}function
W(a){const
b=c.map.get(a);if(b){c.map.delete(a);c.set.delete(b);c.finalization.unregister(a)}}function
G(){return[...c.set].map(a=>a.deref()).filter(a=>a)}var
w;function
Q(a){return WebAssembly?.Suspending?new
WebAssembly.Suspending(a):a}function
t(a){return WebAssembly?.promising&&a?WebAssembly.promising(a):a}const
m=new
TextDecoder("utf-8",{ignoreBOM:1}),H=new
TextEncoder();function
K(a,b){b=Math.imul(b,0xcc9e2d51|0);b=b<<15|b>>>17;b=Math.imul(b,0x1b873593);a^=b;a=a<<13|a>>>19;return(a+(a<<2)|0)+(0xe6546b64|0)|0}function
L(a,b){for(var
c=0;c<b.length;c++)a=K(a,b.charCodeAt(c));return a^b.length}function
s(a){if(e&&globalThis.process.env[a]!==undefined)return globalThis.process.env[a];return globalThis.jsoo_env?.[a]}let
j=0;for(const
a
of
s("OCAMLRUNPARAM")?.split(",")||[]){if(a==="b")j=1;if(a.startsWith("b="))j=+a.slice(2)?1:0}function
l(a,b){var
c;if(a.isFile())c=0;else if(a.isDirectory())c=1;else if(a.isCharacterDevice())c=2;else if(a.isBlockDevice())c=3;else if(a.isSymbolicLink())c=4;else if(a.isFIFO())c=5;else if(a.isSocket())c=6;return C(b,a.dev,a.ino|0,c,a.mode,a.nlink,a.uid,a.gid,a.rdev,BigInt(a.size),a.atimeMs/1000,a.mtimeMs/1000,a.ctimeMs/1000)}const
u=e&&globalThis.process.platform==="win32",z={jstag:WebAssembly.JSTag||new
WebAssembly.Tag({parameters:["externref"],results:[]}),identity:a=>a,from_bool:a=>!!a,get:(a,b)=>a[b],set:(a,b,c)=>a[b]=c,delete:(a,b)=>delete
a[b],instanceof:(a,b)=>a
instanceof
b,typeof:a=>typeof
a,equals:(a,b)=>a==b,strict_equals:(a,b)=>a===b,fun_call:(a,b,c)=>a.apply(b,c),meth_call:(a,b,c)=>a[b].apply(a,c),new_array:a=>new
Array(a),new_obj:()=>({}),new:(a,b)=>new
a(...b),global_this:globalThis,iter_props:(a,b)=>{for(var
c
in
a)if(Object.hasOwn(a,c))b(c)},array_length:a=>a.length,array_get:(a,b)=>a[b],array_set:(a,b,c)=>a[b]=c,read_string:a=>m.decode(new
Uint8Array(h,0,a)),read_string_stream:(a,b)=>m.decode(new
Uint8Array(h,0,a),{stream:b}),append_string:(a,b)=>a+b,write_string:a=>{var
c=0,b=a.length;for(;;){const{read:d,written:e}=H.encodeInto(a.slice(c),T);b-=d;if(!b)return e;E(e);c+=d}},ta_create:(a,b)=>new
x[a](b),ta_normalize:a=>a
instanceof
Uint32Array?new
Int32Array(a.buffer,a.byteOffset,a.length):a,ta_kind:b=>x.findIndex(a=>b
instanceof
a),ta_length:a=>a.length,ta_get_f64:(a,b)=>a[b],ta_get_f32:(a,b)=>a[b],ta_get_i32:(a,b)=>a[b],ta_get_i16:(a,b)=>a[b],ta_get_ui16:(a,b)=>a[b],ta_get_i8:(a,b)=>a[b],ta_get_ui8:(a,b)=>a[b],ta_get16_ui8:(a,b)=>a[b]|a[b+1]<<8,ta_get32_ui8:(a,b)=>a[b]|a[b+1]<<8|a[b+2]<<16|a[b+3]<<24,ta_set_f64:(a,b,c)=>a[b]=c,ta_set_f32:(a,b,c)=>a[b]=c,ta_set_i32:(a,b,c)=>a[b]=c,ta_set_i16:(a,b,c)=>a[b]=c,ta_set_ui16:(a,b,c)=>a[b]=c,ta_set_i8:(a,b,c)=>a[b]=c,ta_set_ui8:(a,b,c)=>a[b]=c,ta_set16_ui8:(a,b,c)=>{a[b]=c;a[b+1]=c>>8},ta_set32_ui8:(a,b,c)=>{a[b]=c;a[b+1]=c>>8;a[b+2]=c>>16;a[b+3]=c>>24},ta_fill:(a,b)=>a.fill(b),ta_blit:(a,b)=>b.set(a),ta_subarray:(a,b,c)=>a.subarray(b,c),ta_set:(a,b,c)=>a.set(b,c),ta_new:a=>new
Uint8Array(a),ta_copy:(a,b,c,d)=>a.copyWithin(b,c,d),ta_bytes:a=>new
Uint8Array(a.buffer,a.byteOffset,a.length*a.BYTES_PER_ELEMENT),ta_blit_from_bytes:(a,b,c,d,e)=>{for(let
f=0;f<e;f++)c[d+f]=A(a,b+f)},ta_blit_to_bytes:(a,b,c,d,e)=>{for(let
f=0;f<e;f++)B(c,d+f,a[b+f])},wrap_callback:b=>function(...a){if(a.length===0)a=[undefined];return d(b,a.length,a,1)},wrap_callback_args:b=>function(...a){return d(b,1,[a],0)},wrap_callback_strict:(c,b)=>function(...a){a.length=c;return d(b,c,a,0)},wrap_callback_unsafe:b=>function(...a){return d(b,a.length,a,2)},wrap_meth_callback:b=>function(...a){a.unshift(this);return d(b,a.length,a,1)},wrap_meth_callback_args:b=>function(...a){return d(b,2,[this,a],0)},wrap_meth_callback_strict:(c,b)=>function(...a){a.length=c;a.unshift(this);return d(b,a.length,a,0)},wrap_meth_callback_unsafe:b=>function(...a){a.unshift(this);return d(b,a.length,a,2)},wrap_fun_arguments:b=>function(...a){return b(a)},format_float:(a,b,c,d)=>{function
j(a,b){if(Math.abs(a)<1.0)return a.toFixed(b);else{var
c=Number.parseInt(a.toString().split("+")[1]);if(c>20){c-=20;a/=Math.pow(10,c);a+=new
Array(c+1).join("0");if(b>0)a=a+"."+new
Array(b+1).join("0");return a}else
return a.toFixed(b)}}switch(b){case
0:var
e=d.toExponential(a),f=e.length;if(e.charAt(f-3)==="e")e=e.slice(0,f-1)+"0"+e.slice(f-1);break;case
1:e=j(d,a);break;case
2:a=a?a:1;e=d.toExponential(a-1);var
i=e.indexOf("e"),h=+e.slice(i+1);if(h<-4||d>=1e21||d.toFixed(0).length>a){var
f=i-1;while(e.charAt(f)==="0")f--;if(e.charAt(f)===".")f--;e=e.slice(0,f+1)+e.slice(i);f=e.length;if(e.charAt(f-3)==="e")e=e.slice(0,f-1)+"0"+e.slice(f-1);break}else{var
g=a;if(h<0){g-=h+1;e=d.toFixed(g)}else
while(e=d.toFixed(g),e.length>a+1)g--;if(g){var
f=e.length-1;while(e.charAt(f)==="0")f--;if(e.charAt(f)===".")f--;e=e.slice(0,f+1)}}break}return c?" "+e:e},gettimeofday:()=>new
Date().getTime()/1000,times:()=>{if(globalThis.process?.cpuUsage){var
a=globalThis.process.cpuUsage();return o(a.user/1e6,a.system/1e6)}else{var
a=performance.now()/1000;return o(a,a)}},gmtime:a=>{var
b=new
Date(a*1000),c=b.getTime(),e=new
Date(Date.UTC(b.getUTCFullYear(),0,1)).getTime(),d=Math.floor((c-e)/86400000);return p(b.getUTCSeconds(),b.getUTCMinutes(),b.getUTCHours(),b.getUTCDate(),b.getUTCMonth(),b.getUTCFullYear()-1900,b.getUTCDay(),d,false)},localtime:a=>{var
b=new
Date(a*1000),c=b.getTime(),f=new
Date(b.getFullYear(),0,1).getTime(),d=Math.floor((c-f)/86400000),e=new
Date(b.getFullYear(),0,1),g=new
Date(b.getFullYear(),6,1),h=Math.max(e.getTimezoneOffset(),g.getTimezoneOffset());return p(b.getSeconds(),b.getMinutes(),b.getHours(),b.getDate(),b.getMonth(),b.getFullYear()-1900,b.getDay(),d,b.getTimezoneOffset()<h)},mktime:(a,b,c,d,e,f)=>new
Date(a,b,c,d,e,f).getTime(),random_seed:()=>crypto.getRandomValues(new
Int32Array(12)),access:(a,d)=>f.accessSync(a,y.reduce((a,b,c)=>d&1<<c?a|b:a,0)),open:(a,d,c)=>f.openSync(a,S.reduce((a,b,c)=>d&1<<c?a|b:a,0),c),close:a=>f.closeSync(a),write:(a,b,c,d,e)=>f?f.writeSync(a,b,c,d,e===null?e:Number(e)):(console[a===2?"error":"log"](typeof
b==="string"?b:m.decode(b.slice(c,c+d))),d),read:(a,b,c,d,e)=>f.readSync(a,b,c,d,e),fsync:a=>f.fsyncSync(a),file_size:a=>f.fstatSync(a,{bigint:true}).size,register_channel:U,unregister_channel:W,channel_list:G,exit:a=>e&&globalThis.process.exit(a),argv:()=>e?globalThis.process.argv.slice(1):["a.out"],on_windows:+u,getenv:s,backtrace_status:()=>j,record_backtrace:a=>j=a,system:a=>{var
b=require("node:child_process").spawnSync(a,{shell:true,stdio:"inherit"});if(b.error)throw b.error;return b.signal?255:b.status},isatty:a=>+require("node:tty").isatty(a),time:()=>performance.now(),getcwd:()=>e?globalThis.process.cwd():"/static",chdir:a=>globalThis.process.chdir(a),mkdir:(a,b)=>f.mkdirSync(a,b),rmdir:a=>f.rmdirSync(a),link:(a,b)=>f.linkSync(a,b),symlink:(a,b,c)=>f.symlinkSync(a,b,[null,"file","dir"][c]),readlink:a=>f.readlinkSync(a),unlink:a=>f.unlinkSync(a),read_dir:a=>f.readdirSync(a),opendir:a=>f.opendirSync(a),readdir:a=>{var
b=a.readSync()?.name;return b===undefined?null:b},closedir:a=>a.closeSync(),stat:(a,b)=>l(f.statSync(a),b),lstat:(a,b)=>l(f.lstatSync(a),b),fstat:(a,b)=>l(f.fstatSync(a),b),chmod:(a,b)=>f.chmodSync(a,b),fchmod:(a,b)=>f.fchmodSync(a,b),file_exists:a=>+f.existsSync(a),is_directory:a=>+f.lstatSync(a).isDirectory(),is_file:a=>+f.lstatSync(a).isFile(),utimes:(a,b,c)=>f.utimesSync(a,b,c),truncate:(a,b)=>f.truncateSync(a,b),ftruncate:(a,b)=>f.ftruncateSync(a,b),rename:(a,b)=>{var
c;if(u&&(c=f.statSync(b,{throwIfNoEntry:false}))&&f.statSync(a,{throwIfNoEntry:false})?.isDirectory())if(c.isDirectory()){if(!b.startsWith(a))try{f.rmdirSync(b)}catch{}}else{var
d=new
Error(`ENOTDIR: not a directory, rename '${a}' -> '${b}'`);throw Object.assign(d,{errno:-20,code:"ENOTDIR",syscall:"rename",path:b})}f.renameSync(a,b)},start_fiber:a=>w(a),suspend_fiber:Q((c,b)=>new
Promise(a=>c(a,b))),resume_fiber:(a,b)=>a(b),weak_new:a=>new
WeakRef(a),weak_deref:a=>{var
b=a.deref();return b===undefined?null:b},weak_map_new:()=>new
WeakMap(),map_new:()=>new
Map(),map_get:(a,b)=>{var
c=a.get(b);return c===undefined?null:c},map_set:(a,b,c)=>a.set(b,c),map_delete:(a,b)=>a.delete(b),hash_string:L,log:a=>console.log(a)},n={test:a=>+(typeof
a==="string"),compare:(a,b)=>a<b?-1:+(a>b),decodeStringFromUTF8Array:()=>"",encodeStringToUTF8Array:()=>0,fromCharCodeArray:()=>""},g=Object.assign({Math:R,bindings:z,js:Y,"wasm:js-string":n,"wasm:text-decoder":n,"wasm:text-encoder":n,env:{}},J),v={builtins:["js-string","text-decoder","text-encoder"]};function
P(a){const
b=require("node:path"),c=b.join(b.dirname(require.main.filename),a);return require("node:fs/promises").readFile(c)}const
r=globalThis?.document?.currentScript?.src;function
I(a){const
b=r?new
URL(a,r):a;return fetch(b)}const
O=e?P:I;async function
N(a){return e?WebAssembly.instantiate(await
a,g,v):WebAssembly.instantiateStreaming(a,g,v)}async function
M(){g.OCaml={};const
c=[];async function
b(a,b){const
f=a[1].constructor!==Array;async function
e(){const
d=O(V+"/"+a[0]+".wasm");await
Promise.all(f?c:a[1].map(a=>c[a]));const
e=await
N(d);Object.assign(b?g.env:g.OCaml,e.instance.exports)}const
d=e();c.push(d);return d}async function
a(a){for(const
c
of
a)await
b(c)}await
b(i[0],1);if(i.length>1){await
b(i[1]);const
c=new
Array(20).fill(i.slice(2).values()).map(a);await
Promise.all(c)}return{instance:{exports:Object.assign(g.env,g.OCaml)}}}const
X=await
M();var{caml_callback:d,caml_alloc_times:o,caml_alloc_tm:p,caml_alloc_stat:C,caml_start_fiber:F,caml_handle_uncaught_exception:q,caml_buffer:D,caml_extract_bytes:E,bytes_get:A,bytes_set:B,_initialize:k}=X.instance.exports,h=D?.buffer,T=h&&new
Uint8Array(h,0,h.length);w=t(F);var
k=t(k);if(globalThis.process?.on)globalThis.process.on("uncaughtException",(a,b)=>q(a));else if(globalThis.addEventListener)globalThis.addEventListener("error",a=>a.error&&q(a.error));await
k()})(function(a){"use strict";var
n=" ",e=32n,i="0",f="-",h="",o="+",b=["E2BIG","EACCES","EAGAIN","EBADF","EBUSY","ECHILD","EDEADLK","EDOM","EEXIST","EFAULT","EFBIG","EINTR","EINVAL","EIO","EISDIR","EMFILE","EMLINK","ENAMETOOLONG","ENFILE","ENODEV","ENOENT","ENOEXEC","ENOLCK","ENOMEM","ENOSPC","ENOSYS","ENOTDIR","ENOTEMPTY","ENOTTY","ENXIO","EPERM","EPIPE","ERANGE","EROFS","ESPIPE","ESRCH","EXDEV","EWOULDBLOCK","EINPROGRESS","EALREADY","ENOTSOCK","EDESTADDRREQ","EMSGSIZE","EPROTOTYPE","ENOPROTOOPT","EPROTONOSUPPORT","ESOCKTNOSUPPORT","EOPNOTSUPP","EPFNOSUPPORT","EAFNOSUPPORT","EADDRINUSE","EADDRNOTAVAIL","ENETDOWN","ENETUNREACH","ENETRESET","ECONNABORTED","ECONNRESET","ENOBUFS","EISCONN","ENOTCONN","ESHUTDOWN","ETOOMANYREFS","ETIMEDOUT","ECONNREFUSED","EHOSTDOWN","EHOSTUNREACH","ELOOP","EOVERFLOW"];function
c(a){const
c=require("node:util");if(a>=0){const
d=b[a];return c.getSystemErrorMap().entries().find(a=>a[1][0]===d)[1][1]}else
return c.getSystemErrorMessage(a)}function
d(a){return a==BigInt.asIntN(31,a)?Number(a):a}function
g(a,b){return d(BigInt(a)+BigInt(b))}function
j(a,b){return(a>b)-(a<b)}function
k(a,b,c,d){var
f=0n;for(var
g=0;g<d/4;g++){var
e=BigInt(a(b));e|=BigInt(a(b))<<8n;e|=BigInt(a(b))<<16n;e|=BigInt(a(b))<<24n;f|=e<<BigInt(32*g)}if(c)f=-f;return f}function
l(a,b){return d(BigInt(a)/BigInt(b))}function
m(a,b){return a==b}function
p(a,b,c){return d(BigInt.asUintN(c,BigInt(a)>>BigInt(b)))}function
q(a){return+(a==BigInt.asIntN(32,a))}function
r(a){return+(a==BigInt.asIntN(64,a))}function
s(a,b){b=BigInt(b);var
k=10,q=0,m=0,j=0,p=0,l=h,g=n,d=0,e=h;while(a[d]=="%")d++;for(;;d++)if(a[d]=="#")j=1;else if(a[d]==i)g=i;else if(a[d]==f)p=1;else if(a[d]==n||a[d]==o)l=a[d];else
break;if(b<0){l=f;b=-b}for(;a[d]>=i&&a[d]<="9";d++)m=10*m+
+a[d];switch(a[d]){case"i":case"d":case"u":break;case"b":k=2;if(j)e="0b";break;case"o":k=8;if(j)e="0o";break;case"x":k=16;if(j)e="0x";break;case"X":k=16;if(j)e="0X";q=1;break;default:return-1}if(p)g=n;var
c=b.toString(k);if(q===1)c=c.toUpperCase();var
s=c.length;if(g==n)if(p){c=l+e+c;for(;c.length<m;)c=c+g}else{c=l+e+c;for(;c.length<m;)c=g+c}else{var
r=l+e;for(;c.length+r.length<m;)c=g+c;c=r+c}return c}function
t(a,b){b=BigInt(b);var
f=b<0;if(f)b=-b;var
d=0,c=0;while(b){d++;c=a(c,Number(BigInt.asIntN(32,b)));b>>=e}if(d&1)c=a(c,0);if(f)c++;return c}function
u(a,b){return d(BigInt(a)&BigInt(b))}function
v(a){return d(~BigInt(a))}function
w(a,b){return d(BigInt(a)|BigInt(b))}function
x(a,b){return d(BigInt(a)^BigInt(b))}function
y(a,b){return d(BigInt(a)*BigInt(b))}function
z(a){return d(-BigInt(a))}function
A(a){a=BigInt(a);if(a<0)a=-a;var
b=0,c=1n;while(c<=a){b+=1;c<<=1n}return b}function
B(a){var
c=0n;for(var
b=a.length-1;b>=0;b--){var
e=a.charCodeAt(b);c=(c<<8n)+BigInt(e)}return d(c)}function
C(a){return BigInt(a)}function
D(a,b){if(a==0){a=10;var
c=0,m=1;if(b[c]==f){m=-1;c++}else if(b[c]==o)c++;if(b[c]==i){c++;if(b.length==c)return 0;else{var
g=b[c];if(g=="o"||g=="O")a=8;else if(g=="x"||g=="X")a=16;else if(g=="b"||g=="B")a=2;if(a!=10){b=b.substring(c+1);if(m==-1)b=f+b}}}}function
p(a){if(a>=48&&a<=57)return a-48;if(a>=97&&a<=102)return a-97+10;if(a>=65&&a<=70)return a-65+10;return 1000}var
l=false,e=0;if(b[e]==o)b=b.substring(1);else if(b[e]==f){l=true;e++}if(b[e]=="_")return null;b=b.replace(/_/g,h);if(b==f||b==h)b=i;var
j=0n,n=BigInt(a);for(;e<b.length;e++){var
k=p(b.charCodeAt(e));if(k>=a)return null;j=j*n+BigInt(k)}if(l)j=-j;return d(j)}function
E(a){if(a<0)return-1;for(var
b=0;a!=0n;b++)a=a&a-1n;return b}function
F(a){return a>=0}function
G(a,b){return d(BigInt(a)%BigInt(b))}function
H(a,b,c){if(c<0)c=-c;do{var
d=Number(BigInt.asIntN(32,c));a(b,d);a(b,d>>>8);a(b,d>>>16);a(b,d>>>24);c>>=e}while(c)}function
I(a,b){return d(BigInt(a)<<BigInt(b))}function
J(a,b){return d(BigInt(a)>>BigInt(b))}function
K(a){if(a<0)a=-a;var
b=0,c=1n;while(c<=a){b+=1;c<<=e}return b}function
L(a,b){return d(BigInt(a)-BigInt(b))}function
M(a,b){return+((a&1n<<BigInt(b))!=0)}function
N(a){a=BigInt(a);if(a<0)a=-a;var
b=h;while(a!=0){b+=String.fromCharCode(Number(a&255n));a>>=8n}while((b.length&3)!=0)b+=String.fromCharCode(0);return b}function
O(a){return Number(a)}function
P(a){return a}function
Q(a){if(a<0)a=-a;var
b=0;a=(a^a-1n)>>1n;for(b=0;a!=0;b++)a=a>>1n;return b}return{wasm_z_trailing_zeros:Q,wasm_z_to_int64:P,wasm_z_to_int32:O,wasm_z_to_bits:N,wasm_z_testbit:M,wasm_z_sub:L,wasm_z_size:K,wasm_z_shift_right:J,wasm_z_shift_left:I,wasm_z_serialize:H,wasm_z_rem:G,wasm_z_positive:F,wasm_z_popcount:E,wasm_z_of_js_string_base:D,wasm_z_of_int32:C,wasm_z_of_bits:B,wasm_z_numbits:A,wasm_z_normalize:d,wasm_z_neg:z,wasm_z_mul:y,wasm_z_logxor:x,wasm_z_logor:w,wasm_z_lognot:v,wasm_z_logand:u,wasm_z_hash:t,wasm_z_format:s,wasm_z_fits_int64:r,wasm_z_fits_int32:q,wasm_z_extract:p,wasm_z_equal:m,wasm_z_div:l,wasm_z_deserialize:k,wasm_z_compare:j,wasm_z_add:g,unix_error:b,caml_strerror:c}}(globalThis))({"link":[["code-35895a94613d7b159700",0]],"generated":(a=>{var
b=a,c=a?.module?.export||a;return{"env":{"unix_pipe":()=>{throw new
Error("unix_pipe not implemented")},"unix_clear_nonblock":()=>{throw new
Error("unix_clear_nonblock not implemented")},"unix_dup2":()=>{throw new
Error("unix_dup2 not implemented")},"unix_waitpid":()=>{throw new
Error("unix_waitpid not implemented")},"unix_kill":()=>{throw new
Error("unix_kill not implemented")},"unix_spawn":()=>{throw new
Error("unix_spawn not implemented")},"unix_set_nonblock":()=>{throw new
Error("unix_set_nonblock not implemented")},"unix_select":()=>{throw new
Error("unix_select not implemented")},"unix_getpid":()=>{throw new
Error("unix_getpid not implemented")},"unix_fork":()=>{throw new
Error("unix_fork not implemented")},"unix_execvp":()=>{throw new
Error("unix_execvp not implemented")},"unix_dup":()=>{throw new
Error("unix_dup not implemented")},"unix_alarm":()=>{throw new
Error("unix_alarm not implemented")},"sparcdba_decode":()=>{throw new
Error("sparcdba_decode not implemented")},"ppc64dba_decode":()=>{throw new
Error("ppc64dba_decode not implemented")},"caml_unix_map_file_bytecode":()=>{throw new
Error("caml_unix_map_file_bytecode not implemented")},"caml_subprocess_set_pdeathsig":()=>{throw new
Error("caml_subprocess_set_pdeathsig not implemented")},"caml_reify_bytecode":()=>{throw new
Error("caml_reify_bytecode not implemented")},"caml_realloc_global":()=>{throw new
Error("caml_realloc_global not implemented")},"caml_get_section_table":()=>{throw new
Error("caml_get_section_table not implemented")},"caml_dynlink_open_lib":()=>{throw new
Error("caml_dynlink_open_lib not implemented")},"caml_dynlink_lookup_symbol":()=>{throw new
Error("caml_dynlink_lookup_symbol not implemented")},"caml_dynlink_get_current_libs":()=>{throw new
Error("caml_dynlink_get_current_libs not implemented")},"caml_dynlink_add_primitive":()=>{throw new
Error("caml_dynlink_add_primitive not implemented")},"arm32dba_decode":()=>{throw new
Error("arm32dba_decode not implemented")},"amd64dba_decode":()=>{throw new
Error("amd64dba_decode not implemented")},"aarch64dba_decode":()=>{throw new
Error("aarch64dba_decode not implemented")}},"strings":["g","[$]","\\$&","+","\\+","^([Hh][Tt][Tt][Pp][Ss]?)://([0-9a-zA-Z.-]+|\\[[0-9a-zA-Z.-]+\\]|\\[[0-9A-Fa-f:.]+\\])?(:([0-9]+))?(/([^\\?#]*)(\\?([^#]*))?(#(.*))?)?$","^([Ff][Ii][Ll][Ee])://([^\\?#]*)(\\?([^#]*))?(#(.*))?$","","?","0.10.1-wasm"," "],"fragments":{"fun_call_1":(a,b)=>a(b),"get_Array":a=>a.Array,"get_ArrayBuffer":a=>a.ArrayBuffer,"get_Blob":a=>a.Blob,"get_Collator":a=>a.Collator,"get_DataView":a=>a.DataView,"get_Date":a=>a.Date,"get_DateTimeFormat":a=>a.DateTimeFormat,"get_Document":a=>a.Document,"get_Error":a=>a.Error,"get_EventSource":a=>a.EventSource,"get_FileReader":a=>a.FileReader,"get_Float32Array":a=>a.Float32Array,"get_Float64Array":a=>a.Float64Array,"get_FormData":a=>a.FormData,"get_HTMLElement":a=>a.HTMLElement,"get_Int16Array":a=>a.Int16Array,"get_Int32Array":a=>a.Int32Array,"get_Int8Array":a=>a.Int8Array,"get_IntersectionObserver":a=>a.IntersectionObserver,"get_Intl":a=>a.Intl,"get_JSON":a=>a.JSON,"get_Math":a=>a.Math,"get_Module":a=>a.Module,"get_MutationObserver":a=>a.MutationObserver,"get_NumberFormat":a=>a.NumberFormat,"get_Object":a=>a.Object,"get_PerformanceObserver":a=>a.PerformanceObserver,"get_PluralRules":a=>a.PluralRules,"get_RegExp":a=>a.RegExp,"get_ResizeObserver":a=>a.ResizeObserver,"get_SVGElement":a=>a.SVGElement,"get_Session":a=>a.Session,"get_String":a=>a.String,"get_Uint16Array":a=>a.Uint16Array,"get_Uint32Array":a=>a.Uint32Array,"get_Uint8Array":a=>a.Uint8Array,"get_WebSocket":a=>a.WebSocket,"get_Worker":a=>a.Worker,"get_document":a=>a.document,"get_geolocation":a=>a.geolocation,"get_hostname":a=>a.hostname,"get_href":a=>a.href,"get_length":a=>a.length,"get_location":a=>a.location,"get_navigator":a=>a.navigator,"get_pathname":a=>a.pathname,"get_port":a=>a.port,"get_protocol":a=>a.protocol,"get_search":a=>a.search,"get_unescape":a=>a.unescape,"get_unisim":a=>a.unisim,"js_expr_12c48ca8":()=>a,"js_expr_28647a4c":()=>false,"js_expr_34edcf72":()=>true,"js_expr_ba692c1":()=>undefined,"meth_call_0_delete":a=>a.delete(),"meth_call_0_toString":a=>a.toString(),"meth_call_1_charAt":(a,b)=>a.charAt(b),"meth_call_1_eval":(a,b)=>a.eval(b),"meth_call_1_indexOf":(a,b)=>a.indexOf(b),"meth_call_1_slice":(a,b)=>a.slice(b),"meth_call_1_split":(a,b)=>a.split(b),"meth_call_2_decode_aarch64":(a,b,c)=>a.decode_aarch64(b,c),"meth_call_2_decode_arm32":(a,b,c)=>a.decode_arm32(b,c),"meth_call_2_decode_x86_64":(a,b,c)=>a.decode_x86_64(b,c),"meth_call_2_replace":(a,b,c)=>a.replace(b,c),"meth_call_2_slice":(a,b,c)=>a.slice(b,c),"new_0":a=>new
a(),"new_1":(a,b)=>new
a(b),"new_2":(a,b,c)=>new
a(b,c),"obj_0":(a,b,c,d,e,f,g,h)=>({alpha:a,depth:b,stencil:c,antialias:d,premultipliedAlpha:e,preserveDrawingBuffer:f,preferLowPowerToHighPerformance:g,failIfMajorPerformanceCaveat:h}),"obj_1":(a,b,c,d,e,f,g,h,i,j,k,l)=>({href:a,protocol:b,host:c,hostname:d,port:e,pathname:f,search:g,hash:h,origin:i,reload:j,replace:k,assign:l}),"obj_2":(a,b,c,d,e)=>({version:a,describe:b,disasm:c,tokenize:d,run:e}),"set_binsec":(a,b)=>a.binsec=b,"set_lastIndex":(a,b)=>a.lastIndex=b}}})(globalThis),"src":"."});
