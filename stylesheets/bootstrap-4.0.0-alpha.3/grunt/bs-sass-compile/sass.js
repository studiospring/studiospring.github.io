module.exports=function(s){var c={loadPath:["scss"],precision:6,sourcemap:"auto",style:"expanded",trace:!0,bundleExec:!0};s.config.merge({sass:{core:{options:c,files:{"dist/css/<%= pkg.name %>.css":"scss/<%= pkg.name %>.scss"}},extras:{options:c,files:{"dist/css/<%= pkg.name %>-flex.css":"scss/<%= pkg.name %>-flex.scss","dist/css/<%= pkg.name %>-grid.css":"scss/<%= pkg.name %>-grid.scss","dist/css/<%= pkg.name %>-reboot.css":"scss/<%= pkg.name %>-reboot.scss"}},docs:{options:c,files:{"docs/assets/css/docs.min.css":"docs/assets/scss/docs.scss","docs/assets/css/docs-flexbox.min.css":"docs/assets/scss/flex-grid.scss"}}}}),s.loadNpmTasks("grunt-contrib-sass")};