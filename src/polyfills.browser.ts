// Polyfills
// (these modules are what are in 'angular2/bundles/angular2-polyfills' so don't use that here)

// import 'ie-shim'; // Internet Explorer
// import 'es6-shim';
// import 'es6-promise';
// import 'es7-reflect-metadata';

// Prefer CoreJS over the polyfills above

// Commented out the whole es6.
//  NOTE: More correct solution is to exclude only one polyfill, which causes the issue: core-js/es6/promise.
// import "core-js/es6";

// Added parts of es6 which are necessary for your project or your browser support requirements.
import "core-js/es6/array";
import "core-js/es6/object";
// (the rest is omitted)
import "core-js/es6/string";

import 'core-js/es7/reflect';
import 'zone.js/dist/zone';

// Typescript emit helpers polyfill
import 'ts-helpers';

if ('production' === ENV) {
  // Production


} else {
  // Development

  Error.stackTraceLimit = Infinity;

  require('zone.js/dist/long-stack-trace-zone');

}
