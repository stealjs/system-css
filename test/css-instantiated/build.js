var stealTools = require("steal-tools");

module.exports = stealTools.build({
	main: "main",
	config: __dirname+"/stealconfig.js"
},{
	minify: false,
	debug: true
});
