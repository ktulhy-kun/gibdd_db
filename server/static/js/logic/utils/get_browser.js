// Generated by CoffeeScript 1.10.0
(function() {
  window.getBrowser = function() {
    var bName, fbName, getVersion, ua, version;
    ua = navigator.userAgent;
    fbName = function() {
      if (ua.search(/MSIE/) > -1) {
        return "ie";
      }
      if (ua.search(/Firefox/) > -1) {
        return "firefox";
      }
      if (ua.search(/Opera/) > -1) {
        return "opera";
      }
      if (ua.search(/Chrome/) > -1) {
        return "chrome";
      }
      if (ua.search(/Safari/) > -1) {
        return "safari";
      }
      if (ua.search(/Konqueror/) > -1) {
        return "konqueror";
      }
      if (ua.search(/Iceweasel/) > -1) {
        return "iceweasel";
      }
      if (ua.search(/SeaMonkey/) > -1) {
        return "seamonkey";
      }
    };
    bName = fbName();
    getVersion = function(bName) {
      switch (bName) {
        case "ie":
          return (ua.split("MSIE ")[1]).split(";")[0];
        case "firefox":
          return ua.split("Firefox/")[1];
        case "opera":
          return ua.split("Version/")[1];
        case "chrome":
          return (ua.split("Chrome/")[1]).split(" ")[0];
        case "safari":
          return (ua.split("Version/")[1]).split(" ")[0];
        case "konqueror":
          return (ua.split("KHTML/")[1]).split(" ")[0];
        case "iceweasel":
          return (ua.split("Iceweasel/")[1]).split(" ")[0];
        case "seamonkey":
          return ua.split("SeaMonkey/")[1];
      }
    };
    version = getVersion(bName);
    return [bName, version.split(".")[0], version];
  };

  window.current_browser = getBrowser();

}).call(this);

//# sourceMappingURL=get_browser.js.map
