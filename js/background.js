chrome.app.runtime.onLaunched.addListener(function() {
  chrome.app.window.create('index.html', {
    "bounds": {
      "width": 1000,
      "height": 540,
      "left": (screen.width / 2) - 500,
      "top": (screen.height / 2) - 270
    }
  }, function(win){ win.console.log("NANO: Ready");  });
});
