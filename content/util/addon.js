(function(window, undefined){
    var self = {};

    // c.f. http://stackoverflow.com/questions/3772788/how-to-load-file-from-inside-firefox-plugin
    self.read_file = function(file){
        var ioService = Components
            .classes["@mozilla.org/network/io-service;1"]
            .getService(Components.interfaces.nsIIOService);
        var scriptableStream = Components
            .classes["@mozilla.org/scriptableinputstream;1"]
            .getService(Components.interfaces.nsIScriptableInputStream);
        var channel = ioService.newChannel(file,null,null);
        var input = channel.open();
        scriptableStream.init(input);
        var str = scriptableStream.read(input.available());
        scriptableStream.close();
        input.close();
        return str;
    };

    if(!window.ADDON_UTIL){
        window.ADDON_UTIL = self;
    }

}(window));
