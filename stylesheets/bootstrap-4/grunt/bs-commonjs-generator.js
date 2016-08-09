/*!
 * Bootstrap Grunt task for the CommonJS module generation
 * http://getbootstrap.com
 * Copyright 2014-2015 Twitter, Inc.
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
 */
"use strict";var fs=require("fs"),path=require("path"),COMMONJS_BANNER="// This file is autogenerated via the `commonjs` Grunt task. You can require() this file in a CommonJS environment.\n";module.exports=function(e,r,i){function n(e){return"require('"+e.replace(/\\/g,"/")+"')"}var t=(path.dirname(i),COMMONJS_BANNER+r.map(n).join("\n"));try{fs.writeFileSync(i,t)}catch(r){e.fail.warn(r)}e.log.writeln("File "+i.cyan+" created.")};