module.exports=function(s){s.config.merge({sass:{options:{includePaths:["scss"],precision:6,sourceComments:!1,sourceMap:!0,outputStyle:"expanded"},core:{files:{"dist/css/<%= pkg.name %>.css":"scss/<%= pkg.name %>.scss"}},extras:{files:{"dist/css/<%= pkg.name %>-flex.css":"scss/<%= pkg.name %>-flex.scss","dist/css/<%= pkg.name %>-grid.css":"scss/<%= pkg.name %>-grid.scss","dist/css/<%= pkg.name %>-reboot.css":"scss/<%= pkg.name %>-reboot.scss"}},docs:{files:{"docs/assets/css/docs.min.css":"docs/assets/scss/docs.scss"}}}}),s.loadNpmTasks("grunt-sass")};