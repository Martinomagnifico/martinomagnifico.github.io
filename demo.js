(function (factory) {
	typeof define === 'function' && define.amd ? define(factory) :
	factory();
}((function () { 'use strict';

	var fullscreenchange = function fullscreenchange(event, element) {
	  if (screenfull.isFullscreen) {
	    document.body.classList.add("fullscreen");
	    element.layout();
	    element.configure({
	      keyboardCondition: null
	    });
	  }

	  if (!screenfull.isFullscreen) {
	    document.body.classList.remove("fullscreen");
	    element.layout();
	    element.configure({
	      keyboardCondition: "focused"
	    });
	  }
	};

	var viewdemos = document.querySelectorAll("[data-viewdemo]");
	viewdemos.forEach(function (viewdemo) {
	  var toBeFSed = viewdemo.getAttribute("data-viewdemo");
	  toBeFSed = document.getElementById(toBeFSed);
	  viewdemo.addEventListener('click', function (e) {
	    if (screenfull.isEnabled) {
	      e.preventDefault();
	      screenfull.request(toBeFSed);
	    }
	  });
	});
	var mainconfig = {
	  transition: "convex",
	  embedded: true,
	  keyboardCondition: "focused",
	  overview: false
	};
	var plugs = [{
	  name: "appearance",
	  config: {
	    plugins: [Appearance]
	  }
	}, {
	  name: "internation",
	  config: {
	    internation: {
	      switchselector: ".langchooser",
	      languages: {
	        fr: {
	          name: "Français",
	          dictionary: "reveal.js-internation/fr.json"
	        },
	        se: {
	          name: "Svenska",
	          dictionary: "reveal.js-internation/se.json"
	        },
	        cn: {
	          name: "中文",
	          dictionary: "reveal.js-internation/cn.json"
	        }
	      }
	    },
	    plugins: [Internation]
	  }
	}, {
	  name: "verticator",
	  config: {
	    verticator: {
	      darktheme: true
	    },
	    plugins: [Verticator]
	  }
	}, {
	  name: "fsfx",
	  config: {
	    plugins: [FsFx]
	  }
	}, {
	  name: "simplemenu",
	  config: {
	    plugins: [Simplemenu]
	  }
	}, {
	  name: "relativenumber",
	  config: {
	    slideNumber: "c/t",
	    plugins: [RelativeNumber]
	  }
	}, {
	  name: "copycode",
	  config: {
	    plugins: [CopyCode, RevealHighlight]
	  }
	}, {
	  name: "fontsfirst",
	  config: {
	    fontsfirst: {
	      modules: {
	        google: {
	          families: ['Roboto Slab:300,400:latin']
	        }
	      },
	      timeout: 1500,
	      selfhostcss: "reveal.js-fontsfirst/css/robotoslab.css"
	    },
	    plugins: [FontsFirst]
	  }
	}, {
	  name: "doghouse",
	  config: {
	    plugins: [Doghouse, RevealHighlight]
	  }
	}, {
	  name: "smallcontrol",
	  config: {
	    smallcontrol: {
	      smalltouch: false,
	      thisdeckonly: true
	    },
	    plugins: [Smallcontrol]
	  }
	}];
	var decks = [];
	plugs.forEach(function (plug) {
	  var thisconfig = {};

	  for (var attribute in mainconfig) {
	    thisconfig[attribute] = mainconfig[attribute];
	  }

	  for (var _attribute in plug.config) {
	    thisconfig[_attribute] = plug.config[_attribute];
	  }

	  var name = plug.name;

	  if (document.getElementById(name)) {
	    decks[name] = new Reveal(document.getElementById(name), thisconfig);
	    decks[name].on(screenfull.raw.fullscreenchange, function (e) {
	      fullscreenchange(e, decks[name]);
	    });
	    decks[name].initialize();
	  }
	}); // Internation dropdown

	var dropdown = document.querySelector('.menubar .langchooser');
	var label = document.querySelector('.menubar .dropdown > label');
	dropdown.addEventListener("click", function (e) {
	  label.click();
	}, false);

})));
