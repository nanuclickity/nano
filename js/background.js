chrome.app.runtime.onLaunched.addListener(function() {
  chrome.app.window.create('index.html', {
    "bounds": {
      "width": 285,
      "height": 341,
      "left": (screen.width / 2) - 500,
      "top": (screen.height / 2) - 270
    },
    "frame": "none",
  }, function(win){ win.console.log("NANO: Ready");  });
});
