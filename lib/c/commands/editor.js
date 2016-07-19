	/**
		<pre></pre>
	*/
	var LatteObject = require("../../m/data.js")
		, latte_lib = require("latte_lib");
		var Command = {};
		(function() {
			this.after = function(data, dom, controller) {
				var editorClassName = dom.attr("latte-editor");
				var latteObject = LatteObject.create(data);
				if(editorClassName) {
					var editorClass = require("./editor/"+editorClassName);
					editorClass.create(data, dom, controller);
				}

			};
		}).call(Command);
	
	module.exports = Command;