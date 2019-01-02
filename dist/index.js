!function(e,r){"object"==typeof exports&&"object"==typeof module?module.exports=r():"function"==typeof define&&define.amd?define([],r):"object"==typeof exports?exports.IndexDB=r():e.IndexDB=r()}(window,function(){return function(e){var r={};function t(n){if(r[n])return r[n].exports;var o=r[n]={i:n,l:!1,exports:{}};return e[n].call(o.exports,o,o.exports,t),o.l=!0,o.exports}return t.m=e,t.c=r,t.d=function(e,r,n){t.o(e,r)||Object.defineProperty(e,r,{enumerable:!0,get:n})},t.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},t.t=function(e,r){if(1&r&&(e=t(e)),8&r)return e;if(4&r&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(t.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&r&&"string"!=typeof e)for(var o in e)t.d(n,o,function(r){return e[r]}.bind(null,o));return n},t.n=function(e){var r=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(r,"a",r),r},t.o=function(e,r){return Object.prototype.hasOwnProperty.call(e,r)},t.p="",t(t.s=3)}([function(e,r,t){"use strict";r.__esModule=!0,r.showErrorMsg=r.timeStamp=void 0;r.timeStamp=function(){return(new Date).getTime()};r.showErrorMsg=function(e){console.error("[indexdb-api]: "+e)}},function(e,r,t){"use strict";r.__esModule=!0,r.openDB=function(e,r,t){void 0===r&&(r={});void 0===t&&(t=(0,n.timeStamp)());var o=r.onupgradeneeded;return i(e),new Promise(function(r,n){var i=indexedDB.open(e,t);i.onsuccess=function(t){u[e]=t.target.result,r(t.target.result)},i.onupgradeneeded=o,i.onerror=n})},r.closeDB=i,r.getDB=function(e){var r=u[e];return r?Promise.resolve(r):Promise.reject(new Error("please open "+e+" DB first"))},r.deleteDB=function(e){return a.apply(this,arguments)},r.DBs=void 0;var n=t(0);function o(e,r,t,n,o,u,i){try{var a=e[u](i),s=a.value}catch(e){return void t(e)}a.done?r(s):Promise.resolve(s).then(n,o)}var u={};function i(e){var r=u[e];return r?(r.close(),delete u[e],Promise.resolve(!0)):Promise.resolve()}function a(){var e;return e=regeneratorRuntime.mark(function e(r){return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,i(r);case 2:return e.abrupt("return",new Promise(function(e,t){var n=indexedDB.deleteDatabase(r);n.onsuccess=e,n.onerror=t}));case 3:case"end":return e.stop()}},e,this)}),(a=function(){var r=this,t=arguments;return new Promise(function(n,u){var i=e.apply(r,t);function a(e){o(i,n,u,a,s,"next",e)}function s(e){o(i,n,u,a,s,"throw",e)}a(void 0)})}).apply(this,arguments)}r.DBs=u},function(e,r,t){"use strict";r.__esModule=!0,r.getStore=s,r.createStore=function(e,r,t,n){return a.apply(this,arguments)},r.getStoreCount=function(e,r){return f.apply(this,arguments)},r.deleteStore=function(e,r,t){return p.apply(this,arguments)},r.clearStore=function(e,r){return d.apply(this,arguments)};var n=t(0),o=t(1);function u(e,r,t,n,o,u,i){try{var a=e[u](i),s=a.value}catch(e){return void t(e)}a.done?r(s):Promise.resolve(s).then(n,o)}function i(e){return function(){var r=this,t=arguments;return new Promise(function(n,o){var i=e.apply(r,t);function a(e){u(i,n,o,a,s,"next",e)}function s(e){u(i,n,o,a,s,"throw",e)}a(void 0)})}}function a(){return(a=i(regeneratorRuntime.mark(function e(r,t,u,i){var a,s,c,p,f;return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return a=u.keyOptions,s=void 0===a?{}:a,c=u.indexes,p=void 0===c?[]:c,void 0===i&&(i=(0,n.timeStamp)()),e.next=4,(0,o.openDB)(r,{onupgradeneeded:function(e){var r=e.target.result;r.objectStoreNames.contains(t)||(f=r.createObjectStore(t,s),p.forEach(function(e){return f.createIndex(e.indexName,e.indexKey,e.indexOptions)}))}},i);case 4:return e.abrupt("return",f);case 5:case"end":return e.stop()}},e,this)}))).apply(this,arguments)}function s(e,r){return c.apply(this,arguments)}function c(){return(c=i(regeneratorRuntime.mark(function e(r,t){var n;return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,(0,o.getDB)(r);case 2:return n=e.sent,e.abrupt("return",new Promise(function(e,r){n.objectStoreNames.contains(t)?e(n.transaction(t,"readwrite").objectStore(t)):r(new Error("no this store"))}));case 4:case"end":return e.stop()}},e,this)}))).apply(this,arguments)}function p(){return(p=i(regeneratorRuntime.mark(function e(r,t,u){return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return void 0===u&&(u=(0,n.timeStamp)()),e.next=3,(0,o.openDB)(r,{onupgradeneeded:function(e){var r=e.target.result;r.objectStoreNames.contains(t)&&r.deleteObjectStore(t)}},u);case 3:return e.abrupt("return",!0);case 4:case"end":return e.stop()}},e,this)}))).apply(this,arguments)}function f(){return(f=i(regeneratorRuntime.mark(function e(r,t){var n;return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,s(r,t);case 2:return n=e.sent,e.abrupt("return",new Promise(function(e,r){var t=n.count();t.onsuccess=function(r){var t=r.target.result;e(t)},t.onerror=r}));case 4:case"end":return e.stop()}},e,this)}))).apply(this,arguments)}function d(){return(d=i(regeneratorRuntime.mark(function e(r,t){var n;return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,s(r,t);case 2:if(!(n=e.sent)){e.next=6;break}return n.clear(),e.abrupt("return",!0);case 6:case"end":return e.stop()}},e,this)}))).apply(this,arguments)}},function(e,r,t){"use strict";r.__esModule=!0,r.default=void 0;var n=a(t(1)),o=a(t(4)),u=a(t(2)),i=t(0);function a(e){if(e&&e.__esModule)return e;var r={};if(null!=e)for(var t in e)if(Object.prototype.hasOwnProperty.call(e,t)){var n=Object.defineProperty&&Object.getOwnPropertyDescriptor?Object.getOwnPropertyDescriptor(e,t):{};n.get||n.set?Object.defineProperty(r,t,n):r[t]=e[t]}return r.default=e,r}function s(){return(s=Object.assign||function(e){for(var r=1;r<arguments.length;r++){var t=arguments[r];for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n])}return e}).apply(this,arguments)}self.indexedDB||(0,i.showErrorMsg)("Your browser doesnt support indexedDB.");var c=s({},n,o,u);r.default=c},function(e,r,t){"use strict";r.__esModule=!0,r.getAllData=function(e,r){return i.apply(this,arguments)},r.getDataByIndex=function(e,r,t,n){return a.apply(this,arguments)},r.getRangeDataByPrimaryKey=function(e,r,t,n){return s.apply(this,arguments)},r.addOneData=function(e,r,t){return c.apply(this,arguments)},r.putOneData=function(e,r,t){return p.apply(this,arguments)},r.deleteDataByPrimaKey=function(e,r,t){return f.apply(this,arguments)};var n=t(2);function o(e,r,t,n,o,u,i){try{var a=e[u](i),s=a.value}catch(e){return void t(e)}a.done?r(s):Promise.resolve(s).then(n,o)}function u(e){return function(){var r=this,t=arguments;return new Promise(function(n,u){var i=e.apply(r,t);function a(e){o(i,n,u,a,s,"next",e)}function s(e){o(i,n,u,a,s,"throw",e)}a(void 0)})}}function i(){return(i=u(regeneratorRuntime.mark(function e(r,t){var o;return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,(0,n.getStore)(r,t);case 2:return o=e.sent,e.abrupt("return",new Promise(function(e,r){var t=[],n=o.openCursor();n.onsuccess=function(r){var n=r.target.result;n?(t.push(n.value),n.continue()):e(t)},n.onerror=r}));case 4:case"end":return e.stop()}},e,this)}))).apply(this,arguments)}function a(){return(a=u(regeneratorRuntime.mark(function e(r,t,o,u){var i;return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,(0,n.getStore)(r,t);case 2:return i=e.sent,e.abrupt("return",new Promise(function(e,r){var t=i.index(o).get(u);t.onsuccess=function(r){e(r.target.result)},t.onerror=r}));case 4:case"end":return e.stop()}},e,this)}))).apply(this,arguments)}function s(){return(s=u(regeneratorRuntime.mark(function e(r,t,o,u){var i;return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,(0,n.getStore)(r,t);case 2:return i=e.sent,e.abrupt("return",new Promise(function(e,r){var t=IDBKeyRange.bound(o,u),n=[],a=i.openCursor(t);a.onsuccess=function(r){var t=r.target.result;t?(n.push(t.value),t.continue()):e(n)},a.onerror=r}));case 4:case"end":return e.stop()}},e,this)}))).apply(this,arguments)}function c(){return(c=u(regeneratorRuntime.mark(function e(r,t,o){var u;return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,(0,n.getStore)(r,t);case 2:return u=e.sent,e.abrupt("return",new Promise(function(e,r){var t=u.add(o);t.onsuccess=function(r){e(r.target.result)},t.onerror=r}));case 4:case"end":return e.stop()}},e,this)}))).apply(this,arguments)}function p(){return(p=u(regeneratorRuntime.mark(function e(r,t,o){var u;return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,(0,n.getStore)(r,t);case 2:return u=e.sent,e.abrupt("return",new Promise(function(e,r){var t=u.put(o);t.onsuccess=function(r){e(r.target.result)},t.onerror=r}));case 4:case"end":return e.stop()}},e,this)}))).apply(this,arguments)}function f(){return(f=u(regeneratorRuntime.mark(function e(r,t,o){var u;return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,(0,n.getStore)(r,t);case 2:if(!(u=e.sent)){e.next=6;break}return u.delete(o),e.abrupt("return",!0);case 6:case"end":return e.stop()}},e,this)}))).apply(this,arguments)}}]).default});