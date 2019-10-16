(function() {
  var fn = function() {
    
    (function(root) {
      function now() {
        return new Date();
      }
    
      var force = false;
    
      if (typeof (root._bokeh_onload_callbacks) === "undefined" || force === true) {
        root._bokeh_onload_callbacks = [];
        root._bokeh_is_loading = undefined;
      }
    
      
      
    
      
      
    
      function run_callbacks() {
        try {
          root._bokeh_onload_callbacks.forEach(function(callback) { callback() });
        }
        finally {
          delete root._bokeh_onload_callbacks
        }
        console.info("Bokeh: all callbacks have finished");
      }
    
      function load_libs(js_urls, callback) {
        root._bokeh_onload_callbacks.push(callback);
        if (root._bokeh_is_loading > 0) {
          console.log("Bokeh: BokehJS is being loaded, scheduling callback at", now());
          return null;
        }
        if (js_urls == null || js_urls.length === 0) {
          run_callbacks();
          return null;
        }
        console.log("Bokeh: BokehJS not loaded, scheduling load and callback at", now());
        root._bokeh_is_loading = js_urls.length;
        for (var i = 0; i < js_urls.length; i++) {
          var url = js_urls[i];
          var s = document.createElement('script');
          s.src = url;
          s.async = false;
          s.onreadystatechange = s.onload = function() {
            root._bokeh_is_loading--;
            if (root._bokeh_is_loading === 0) {
              console.log("Bokeh: all BokehJS libraries loaded");
              run_callbacks()
            }
          };
          s.onerror = function() {
            console.warn("failed to load library " + url);
          };
          console.log("Bokeh: injecting script tag for BokehJS library: ", url);
          document.getElementsByTagName("head")[0].appendChild(s);
        }
      };var element = document.getElementById("fc18a2c7-8fad-42ad-9c2c-a66f5856e740");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid 'fc18a2c7-8fad-42ad-9c2c-a66f5856e740' but no matching script tag was found. ")
        return false;
      }
    
      var js_urls = ["https://cdn.pydata.org/bokeh/release/bokeh-1.0.2.min.js", "https://cdn.pydata.org/bokeh/release/bokeh-widgets-1.0.2.min.js", "https://cdn.pydata.org/bokeh/release/bokeh-tables-1.0.2.min.js", "https://cdn.pydata.org/bokeh/release/bokeh-gl-1.0.2.min.js"];
    
      var inline_js = [
        function(Bokeh) {
          Bokeh.set_log_level("info");
        },
        
        function(Bokeh) {
          
        },
        
        function(Bokeh) {
          (function() {
            var fn = function() {
              Bokeh.safely(function() {
                (function(root) {
                  function embed_document(root) {
                    
                  var docs_json = '{"3b40876d-7495-4340-b79d-5605e42bbf20":{"roots":{"references":[{"attributes":{"below":[{"id":"5042","type":"LinearAxis"}],"left":[{"id":"5047","type":"LinearAxis"}],"plot_height":500,"plot_width":900,"renderers":[{"id":"5042","type":"LinearAxis"},{"id":"5046","type":"Grid"},{"id":"5047","type":"LinearAxis"},{"id":"5051","type":"Grid"},{"id":"5060","type":"BoxAnnotation"},{"id":"5070","type":"Whisker"},{"id":"5077","type":"GlyphRenderer"},{"id":"5073","type":"ColorBar"}],"right":[{"id":"5073","type":"ColorBar"}],"title":{"id":"5031","type":"Title"},"toolbar":{"id":"5058","type":"Toolbar"},"x_range":{"id":"5034","type":"DataRange1d"},"x_scale":{"id":"5038","type":"LinearScale"},"y_range":{"id":"5036","type":"DataRange1d"},"y_scale":{"id":"5040","type":"LinearScale"}},"id":"5032","subtype":"Figure","type":"Plot"},{"attributes":{"overlay":{"id":"5060","type":"BoxAnnotation"}},"id":"5054","type":"BoxZoomTool"},{"attributes":{},"id":"5043","type":"BasicTicker"},{"attributes":{},"id":"5052","type":"PanTool"},{"attributes":{},"id":"5055","type":"SaveTool"},{"attributes":{},"id":"5056","type":"ResetTool"},{"attributes":{"callback":null,"tooltips":[["Date","(@obname"]]},"id":"5068","type":"HoverTool"},{"attributes":{},"id":"5289","type":"Selection"},{"attributes":{"axis_label":"Phase","formatter":{"id":"5281","type":"BasicTickFormatter"},"plot":{"id":"5032","subtype":"Figure","type":"Plot"},"ticker":{"id":"5043","type":"BasicTicker"}},"id":"5042","type":"LinearAxis"},{"attributes":{},"id":"5287","type":"BasicTickFormatter"},{"attributes":{},"id":"5057","type":"HelpTool"},{"attributes":{"dimension":1,"plot":{"id":"5032","subtype":"Figure","type":"Plot"},"ticker":{"id":"5048","type":"BasicTicker"}},"id":"5051","type":"Grid"},{"attributes":{},"id":"5286","type":"BasicTicker"},{"attributes":{"active_drag":{"id":"5052","type":"PanTool"},"active_inspect":"auto","active_multi":null,"active_scroll":{"id":"5053","type":"WheelZoomTool"},"active_tap":"auto","tools":[{"id":"5052","type":"PanTool"},{"id":"5053","type":"WheelZoomTool"},{"id":"5054","type":"BoxZoomTool"},{"id":"5055","type":"SaveTool"},{"id":"5056","type":"ResetTool"},{"id":"5057","type":"HelpTool"},{"id":"5068","type":"HoverTool"}]},"id":"5058","type":"Toolbar"},{"attributes":{"callback":null,"data":{"VEGAMAG":{"__ndarray__":"UrgehesxMkApXI/C9SgyQGq8dJMYBDJA7nw/NV5aMkAX2c73U2MyQDm0yHa+fzJAsp3vp8ZLMkAAAAAAAGAyQEjhehSuRzJAokW28/1UMkC6SQwCK4cyQIGVQ4tsRzJA001iEFg5MkAdWmQ7348yQHe+nxovXTJAoBov3SRGMkDZzvdT42UyQN0kBoGVgzJAjZduEoOgMkD+1HjpJlEyQFK4HoXrcTJAnu+nxkuXMkCJQWDl0IIyQBBYObTIdjJAXrpJDAJrMkBmZmZmZgYzQB1aZDvfTzJARIts5/tJMkDNzMzMzGwyQD81XrpJLDJA1XjpJjFIMkCkcD0K10MyQHE9CtejEDJAkxgEVg5NMkCkcD0K10MyQClcj8L1aDJAL90kBoFVMkAfhetRuB4yQH9qvHSTODJAJzEIrBw6MkCkcD0K1yMyQKRwPQrXQzJAYhBYObRoMkAOLbKd7wcyQLbz/dR4STJAlkOLbOc7MkB3vp8aL30yQDVeukkMYjJAXI/C9Sg8MkBSuB6F63EyQKAaL90kZjJAgZVDi2wnMkA9CtejcD0yQFyPwvUofDJAhetRuB5FMkBvEoPAyqEyQBkEVg4tcjJAF9nO91NDMkBOYhBYOXQyQNnO91PjZTJABFYOLbJdMkDXo3A9CpcyQJ7vp8ZLdzJArkfhehRuMkD+1HjpJlEyQPyp8dJNAjNAc2iR7XyfMkCWQ4ts51syQHe+nxovfTJABFYOLbK9MkAK16NwPYoyQIGVQ4tsZzJAy6FFtvN9MkAxCKwcWqQyQEw3iUFgZTJA/Knx0k1iMkAv3SQGgVUyQHE9CtejcDJASgwCK4dWMkCoxks3iUEyQK5H4XoULjJAmG4Sg8BKMkCF61G4HiUyQEJg5dAi+zFAaJHtfD9VMkDhehSuR0EyQOF6FK5HgTJAGy/dJAZhMkDHSzeJQUAyQB1aZDvfTzJAlkOLbOdbMkASg8DKoSUyQKRwPQrXIzJAAAAAAABAMkDNzMzMzCwyQM/3U+OlWzJAxSCwcmgRMkDn+6nx0g0yQJqZmZmZGTJASgwCK4dWMkD2KFyPwvUxQHNoke18PzJAz/dT46W7MkBSuB6F61EyQAwCK4cWeTJArkfhehROMkAUrkfhenQyQDVeukkMAjNAVOOlm8SgMkDfT42XbnIyQMl2vp8abzJAN4lBYOVwMkDdJAaBlYMyQKjGSzeJgTJAyXa+nxpvMkA3iUFg5XAyQM/3U+OlmzJAWmQ7309tMkC+nxov3WQyQFpkO99PLTJADi2yne9nMkBQjZduEkMyQNejcD0KNzJAnMQgsHLIMkCBlUOLbCcyQFK4HoXrETJA","dtype":"float64","shape":[126]},"dmag":{"__ndarray__":"ukkMAiuHhj+6SQwCK4eGP3sUrkfheoQ/ObTIdr6fij/6fmq8dJOIPzm0yHa+n4o/+n5qvHSTiD/6fmq8dJOIP/p+arx0k4g/+n5qvHSTiD85tMh2vp+KP7pJDAIrh4Y/+n5qvHSTiD85tMh2vp+KP/p+arx0k4g/ukkMAiuHhj85tMh2vp+KPzm0yHa+n4o/eekmMQisjD/6fmq8dJOIP3npJjEIrIw/ObTIdr6fij85tMh2vp+KPzm0yHa+n4o/eekmMQisjD+cxCCwcmiRP/p+arx0k4g/ukkMAiuHhj/6fmq8dJOIP7pJDAIrh4Y/ukkMAiuHhj+6SQwCK4eGP3sUrkfheoQ/+n5qvHSTiD/6fmq8dJOIP/p+arx0k4g/+n5qvHSTiD+6SQwCK4eGP7pJDAIrh4Y/ukkMAiuHhj+6SQwCK4eGP7pJDAIrh4Y/+n5qvHSTiD97FK5H4XqEP/p+arx0k4g/ukkMAiuHhj85tMh2vp+KP/p+arx0k4g/ukkMAiuHhj/6fmq8dJOIP/p+arx0k4g/ukkMAiuHhj+6SQwCK4eGPzm0yHa+n4o/+n5qvHSTiD956SYxCKyMP/p+arx0k4g/ukkMAiuHhj85tMh2vp+KP/p+arx0k4g/+n5qvHSTiD956SYxCKyMPzm0yHa+n4o/+n5qvHSTiD85tMh2vp+KP5zEILByaJE/eekmMQisjD/6fmq8dJOIPzm0yHa+n4o/eekmMQisjD85tMh2vp+KP/p+arx0k4g/ObTIdr6fij956SYxCKyMPzm0yHa+n4o/+n5qvHSTiD/6fmq8dJOIP/p+arx0k4g/+n5qvHSTiD+6SQwCK4eGP7pJDAIrh4Y/ukkMAiuHhj+6SQwCK4eGP3sUrkfheoQ/ObTIdr6fij+6SQwCK4eGPzm0yHa+n4o/+n5qvHSTiD+6SQwCK4eGPzm0yHa+n4o/+n5qvHSTiD+6SQwCK4eGP7pJDAIrh4Y/ukkMAiuHhj85tMh2vp+KP/p+arx0k4g/exSuR+F6hD/6fmq8dJOIP3sUrkfheoQ/eekmMQisjD97FK5H4XqEP7pJDAIrh4Y/nMQgsHJokT/6fmq8dJOIPzm0yHa+n4o/eekmMQisjD85tMh2vp+KP5zEILByaJE//Knx0k1ikD/6fmq8dJOIP/p+arx0k4g/uB6F61G4jj85tMh2vp+KPzm0yHa+n4o/uB6F61G4jj/6fmq8dJOIP3npJjEIrIw/uB6F61G4jj/6fmq8dJOIP7pJDAIrh4Y/uB6F61G4jj+6SQwCK4eGP7pJDAIrh4Y/O99PjZdukj+6SQwCK4eGP3sUrkfheoQ/","dtype":"float64","shape":[126]},"lower":{"__ndarray__":"yXa+nxovMkCgGi/dJCYyQKfGSzeJATJA16NwPQpXMkDHSzeJQWAyQCLb+X5qfDJAYhBYObRIMkCwcmiR7VwyQPhT46WbRDJAUrgehetRMkCjcD0K14MyQPhT46WbRDJAg8DKoUU2MkAGgZVDi4wyQCcxCKwcWjJAF9nO91NDMkDC9Shcj2IyQMZLN4lBgDJAsHJoke2cMkCuR+F6FE4yQHWTGARWbjJAhxbZzveTMkByaJHtfH8yQPl+arx0czJAgZVDi2xnMkA1XrpJDAIzQM3MzMzMTDJAu0kMAitHMkB9PzVeumkyQLbz/dR4KTJATDeJQWBFMkAbL90kBkEyQK5H4XoUDjJAQ4ts5/tJMkBU46WbxEAyQNnO91PjZTJA30+Nl25SMkCWQ4ts5xsyQPYoXI/CNTJAnu+nxks3MkAbL90kBiEyQBsv3SQGQTJAEoPAyqFlMkBLN4lBYAUyQGZmZmZmRjJADQIrhxY5MkBg5dAi23kyQOXQItv5XjJA001iEFg5MkACK4cW2W4yQFCNl24SYzJA+FPjpZskMkC0yHa+nzoyQEW28/3UeDJANV66SQxCMkCS7Xw/NZ4yQMl2vp8abzJAjpduEoNAMkA3iUFg5XAyQIlBYOXQYjJAtMh2vp9aMkD6fmq8dJMyQIcW2c73czJAXrpJDAJrMkDn+6nx0k0yQMuhRbbz/TJAlkOLbOebMkBGtvP91FgyQGDl0CLbeTJAJzEIrBy6MkDz/dR46YYyQDEIrBxaZDJAtMh2vp96MkBU46WbxKAyQDVeukkMYjJArBxaZDtfMkDfT42XblIyQCGwcmiRbTJA+n5qvHRTMkAfhetRuD4yQCUGgZVDKzJADy2yne9HMkD8qfHSTSIyQH9qvHST+DFAUbgehetRMkBYObTIdj4yQMqhRbbzfTJAy6FFtvNdMkA+CtejcD0yQAaBlUOLTDJARrbz/dRYMkCJQWDl0CIyQBsv3SQGITJAd76fGi89MkC28/3UeCkyQH9qvHSTWDJAAiuHFtkOMkCXbhKDwAoyQNejcD0KFzJAbef7qfFSMkAzMzMzM/MxQOomMQisPDJAnu+nxku3MkACK4cW2U4yQPUoXI/CdTJA0SLb+X5KMkD91HjpJnEyQARWDi2y/TJA6iYxCKycMkCPwvUoXG8yQHnpJjEIbDJAkxgEVg5tMkDGSzeJQYAyQJHtfD81fjJAJQaBlUNrMkDn+6nx0m0yQPLSTWIQmDJAtvP91HhpMkBuEoPAymEyQNEi2/l+KjJAarx0kxhkMkDHSzeJQUAyQE5iEFg5NDJApHA9CtfDMkD4U+OlmyQyQI/C9ShcDzJA","dtype":"float64","shape":[126]},"mjd":{"__ndarray__":"lRLlDP0a6kC9j7c0/xrqQN+x2VYBG+pAbpUS5Zga6kCQtzQHmxrqQLLZVimdGupAc/DC6sUZ6kCKXIQByBnqQNT7eEufGupA9h2bbaEa6kAYQL2PoxrqQDUHL6ylGupAHpttlYMa6kBAvY+3hRrqQNT7eEs7GepA62c6Yj0Z6kDaVilRvRnqQALU+3i/GepAJPYdm8EZ6kBGGEC9wxnqQF2EAdTlGepAhAHU++cZ6kCsfqYjGxrqQM6gyEUdGupArH6mI04Y6kCy2VYpUBjqQNT7eEtSGOpA9h2bbVQY6kAYQL2PVhjqQPx4S3O/GOpA8MLqZ8EY6kD8eEtzwxjqQA2KXITFGOpAL6x+pscY6kBi37HZ1hjqQIQB1PvYGOpApiP2HdsY6kDOoMhF3RjqQPDC6mffGOpARhhAveEY6kA6Yt+x4xjqQF2EAdTlGOpAf6Yj9ucY6kChyEUY6hjqQKHIRRj5GOpAvY+3NPsY6kDfsdlW/RjqQALU+3j/GOpAJPYdmwEZ6kBi37HZAxnqQG6VEuUFGepAkLc0BwgZ6kCy2VYpChnqQNT7eEsMGepAochFGBkZ6kDD6mc6GxnqQOtnOmIdGepADYpchB8Z6kAvrH6mIRnqQEYYQL1hGepAUc6gyGMZ6kBz8MLqZRnqQJUS5QxoGepAuDQHL2oZ6kDaVilRexnqQOUMilx9GepABy+sfn8Z6kApUc6ggRnqQEtz8MKDGepAzqDIRZsZ6kDlDIpcnRnqQAcvrH6fGepAKVHOoKEZ6kBLc/DCoxnqQL2PtzTbGepA2lYpUd0Z6kD8eEtz3xnqQB6bbZXhGepAQL2Pt+MZ6kApUc6gFhvqQFHOoMgYG+pAc/DC6hob6kCVEuUMHRvqQLg0By8fG+pAeUtz8Hga6kCVEuUMexrqQLg0By99GupA2lYpUX8a6kD8eEtzgRrqQOUMilyUG+pADYpchJYb6kAvrH6mmBvqQFHOoMiaG+pAc/DC6pwb6kBLc/DCOBvqQGg6Yt86G+pAilyEAT0b6kChyEUYfxvqQL2PtzSBG+pAzqDIRcoY6kBz8MLqyxjqQJUS5QzOGOpAaDpi3yMZ6kBz8MLqJRnqQJUS5QwoGepA2lYpUVsZ6kDrZzpiXRnqQA2KXIRfGepAeUtz8IUZ6kCQtzQHiBnqQLLZVimKGepAuDQHL/sZ6kDU+3hL/RnqQPYdm23/GepAHpttlQEa6kA6Yt+xAxrqQF2EAdQFGupAzqDIRd8a6kDlDIpc4RrqQAcvrH7jGupAaDpi39ga6kB/piP22hrqQKHIRRjdGupAOmLfsfYa6kBXKVHO+BrqQHlLc/D6GupA","dtype":"float64","shape":[126]},"obname":[["2005-04-03T21:47:16"],["2005-04-03T23:24:16"],["2005-04-04T01:00:16"],["2005-03-31T18:40:16"],["2005-03-31T20:16:16"],["2005-03-31T21:52:16"],["2005-03-25T04:26:16"],["2005-03-25T06:00:16"],["2005-03-31T23:28:16"],["2005-04-01T01:04:16"],["2005-04-01T02:40:16"],["2005-04-01T04:15:16"],["2005-03-31T02:41:16"],["2005-03-31T04:17:16"],["2005-03-20T20:28:16"],["2005-03-20T22:02:16"],["2005-03-24T21:59:16"],["2005-03-24T23:36:16"],["2005-03-25T01:12:16"],["2005-03-25T02:48:16"],["2005-03-26T04:22:16"],["2005-03-26T05:59:16"],["2005-03-27T20:21:16"],["2005-03-27T21:57:16"],["2005-03-13T10:36:16"],["2005-03-13T12:07:16"],["2005-03-13T13:43:16"],["2005-03-13T15:19:16"],["2005-03-13T16:55:16"],["2005-03-16T23:35:16"],["2005-03-17T01:03:16"],["2005-03-17T02:35:16"],["2005-03-17T04:08:16"],["2005-03-17T05:44:16"],["2005-03-17T17:08:16"],["2005-03-17T18:44:16"],["2005-03-17T20:20:16"],["2005-03-17T21:57:16"],["2005-03-17T23:33:16"],["2005-03-18T01:18:16"],["2005-03-18T02:46:16"],["2005-03-18T04:22:16"],["2005-03-18T05:58:16"],["2005-03-18T07:34:16"],["2005-03-18T18:49:16"],["2005-03-18T20:24:16"],["2005-03-18T22:00:16"],["2005-03-18T23:36:16"],["2005-03-19T01:12:16"],["2005-03-19T02:53:16"],["2005-03-19T04:25:16"],["2005-03-19T06:01:16"],["2005-03-19T07:37:16"],["2005-03-19T09:13:16"],["2005-03-19T18:49:16"],["2005-03-19T20:25:16"],["2005-03-19T22:02:16"],["2005-03-19T23:38:16"],["2005-03-20T01:14:16"],["2005-03-22T01:18:16"],["2005-03-22T02:50:16"],["2005-03-22T04:26:16"],["2005-03-22T06:02:16"],["2005-03-22T07:38:16"],["2005-03-22T20:29:16"],["2005-03-22T22:01:16"],["2005-03-22T23:37:16"],["2005-03-23T01:13:16"],["2005-03-23T02:49:16"],["2005-03-23T20:27:16"],["2005-03-23T22:01:16"],["2005-03-23T23:37:16"],["2005-03-24T01:13:16"],["2005-03-24T02:49:16"],["2005-03-25T20:24:16"],["2005-03-25T21:59:16"],["2005-03-25T23:35:16"],["2005-03-26T01:11:16"],["2005-03-26T02:47:16"],["2005-04-04T16:58:16"],["2005-04-04T18:35:16"],["2005-04-04T20:11:16"],["2005-04-04T21:47:16"],["2005-04-04T23:23:16"],["2005-03-30T18:42:16"],["2005-03-30T20:17:16"],["2005-03-30T21:53:16"],["2005-03-30T23:29:16"],["2005-03-31T01:05:16"],["2005-04-08T15:16:16"],["2005-04-08T16:53:16"],["2005-04-08T18:29:16"],["2005-04-08T20:05:16"],["2005-04-08T21:41:16"],["2005-04-05T18:34:16"],["2005-04-05T20:09:16"],["2005-04-05T21:45:16"],["2005-04-07T23:19:16"],["2005-04-08T00:54:16"],["2005-03-17T07:42:16"],["2005-03-17T08:56:16"],["2005-03-17T10:32:16"],["2005-03-20T02:54:16"],["2005-03-20T04:26:16"],["2005-03-20T06:02:16"],["2005-03-21T20:29:16"],["2005-03-21T22:02:16"],["2005-03-21T23:38:16"],["2005-03-23T04:27:16"],["2005-03-23T06:01:16"],["2005-03-23T07:37:16"],["2005-03-26T20:23:16"],["2005-03-26T21:58:16"],["2005-03-26T23:34:16"],["2005-03-27T01:11:16"],["2005-03-27T02:46:16"],["2005-03-27T04:22:16"],["2005-04-02T23:27:16"],["2005-04-03T01:01:16"],["2005-04-03T02:37:16"],["2005-04-02T18:39:16"],["2005-04-02T20:13:16"],["2005-04-02T21:49:16"],["2005-04-03T17:01:16"],["2005-04-03T18:36:16"],["2005-04-03T20:12:16"]],"phase":{"__ndarray__":"AAAg+jPS3j8AAPTWsvzjPwAADKQ3hOg/AADclRzE6j8AAPJioUvvPwAAUIAxmb4/AAD8xYnU6j8AAHh55kPvPwAAQPpVtdA/AABslF/E2T8AAE6XtGnhPwAAmFcl5eU/AACEPwEK2z8AANpshQziPwAAwMz5g+Q/AAA8gFbz6D8AAHDWdCTRPwAAPIqmS9o/AAA0Elit4T8AAEzf3DTmPwAAIJcBle4/AAAgiNNEuT8AACAjy4nfPwAAqF5qTOQ/AADsEiQA7T8AAAAASrSkPwAAYLQlS8c/AABcdJy01D8AAIgOpsPdPwAADCv+Jts/AAAwfGO64T8AABIWmBHmPwAAwLzgdOo/AADWiWX87j8AABq/90HvPwAAgGHkS74/AACQsgKi0D8AAFhmNMnZPwAAQgAfbOE/AACWQFhg5j8AAD6nPIfqPwAAWHTBDu8/AABwCzKyvD8AAAgdljvQPwAAOEKj2s8/AACwITPk2D8AAO5dnvngPwAABisjgeU/AAAe+KcI6j8AADgFkczuPwAA0PgsHrk/AADAsCmtzj8AAIxynmXYPwAAXgZUuuA/AADQqeHO1z8AAP6h9W7gPwAA5HuOAuU/AAD6SBOK6T8AABAWmBHuPwAA6Efhjcg/AAC011n11D8AAOBxYwTePwAACIa2ieM/AAAgUzsR6D8AAEDinXHsPwAAAIRPGpk/AADgJF1BxT8AAJwsuK/TPwAAyMbBvtw/AACAP3OPgj8AAOgBaubCPwAAIJs+gtI/AABQNUiR2z8AAL7nKFDiPwAAkF4jD9A/AAAk3wQG2T8AAKg8hwrhPwAAwAkMkuU/AADW1pAZ6j8AAFg1/tzGPwAAeM6wldQ/AACkaLqk3T8AAGgB4lnjPwAAgs5m4ec/AAAcq3zr5j8AAGZr7WbrPwAAfjhy7u8/AABQFtzXwT8AAFil9/rRPwAA0oRiquA/AAC4Xvs95T8AAM4rgMXpPwAA5vgETe4/AADgL06ktj8AAIy9GF/cPwAAEB/9quI/AAAo7IEy5z8AALBCdRu8PwAAeKJ9+88/AABgwo02wj8AAAhI3hbQPwAANOLnJdk/AADwsmhLtj8AAPjAhoLMPwAArPpMUNc/AADo3dWA6D8AAJaEHuTsPwAAwBo1uqY/AAAYyg3/4j8AAJR9am7nPwAArErv9es/AACoTYvY1z8AABxntmfgPwAANDQ77+Q/AAAYDtSC6T8AAGDORP7tPwAA0NtMLrQ/AAAE+SYw4D8AAICsg5/kPwAAmHkIJ+k/AAAAjsTMtD8AAPAU1SPMPwAApCT0INc/AABg9jqrrj8AAMC+kZjJPwAAkHlS29U/","dtype":"float64","shape":[126]},"upper":{"__ndarray__":"2/l+arw0MkCyne+nxisyQC2yne+nBjJABVYOLbJdMkBnZmZmZmYyQFCNl24SgzJAAiuHFtlOMkBQjZduEmMyQJhuEoPASjJA8tJNYhBYMkDRItv5fooyQArXo3A9SjJAI9v5fmo8MkA0MzMzM5MyQMdLN4lBYDJAKVyPwvVIMkDwp8ZLN2kyQPT91HjphjJAarx0kxikMkBOYhBYOVQyQC/dJAaBdTJAtch2vp+aMkCgGi/dJIYyQCcxCKwcejJAO99PjZduMkCXbhKDwAozQG3n+6nxUjJAzczMzMxMMkAdWmQ7328yQMh2vp8aLzJAXrpJDAJLMkAtsp3vp0YyQDQzMzMzEzJA46WbxCBQMkD0/dR46UYyQHnpJjEIbDJAf2q8dJNYMkCoxks3iSEyQAisHFpkOzJAsHJoke08MkAtsp3vpyYyQC2yne+nRjJAsp3vp8ZrMkDRItv5fgoyQAaBlUOLTDJAH4XrUbg+MkCOl24Sg4AyQIXrUbgeZTJA5dAi2/k+MkCiRbbz/XQyQPCnxks3aTJACtejcD0qMkDGSzeJQUAyQHNoke18fzJA1XjpJjFIMkBMN4lBYKUyQGmR7Xw/dTJAoBov3SRGMkBlO99PjXcyQClcj8L1aDJAVOOlm8RgMkC0yHa+n5oyQLXIdr6fejJA/tR46SZxMkAVrkfhelQyQC2yne+nBjNAUI2XbhKjMkDm0CLb+V4yQI6XbhKDgDJA4XoUrkfBMkAhsHJokY0yQNEi2/l+ajJA4noUrkeBMkAOLbKd76cyQGMQWDm0aDJATDeJQWBlMkB/arx0k1gyQMHKoUW2czJAmpmZmZlZMkAxCKwcWkQyQDeJQWDlMDJAIbByaJFNMkAOLbKd7ycyQAVWDi2y/TFAf2q8dJNYMkBqvHSTGEQyQPhT46WbhDJAa7x0kxhkMkBQjZduEkMyQDQzMzMzUzJA5tAi2/leMkCbxCCwcigyQC2yne+nJjJAiUFg5dBCMkDkpZvEIDAyQB+F61G4XjJAiBbZzvcTMkA3iUFg5RAyQF2PwvUoHDJAJzEIrBxaMkC5HoXrUfgxQPyp8dJNQjJAAAAAAADAMkCiRbbz/VQyQCPb+X5qfDJAi2zn+6lRMkArhxbZzncyQGZmZmZmBjNAvp8aL92kMkAv3SQGgXUyQBkEVg4tcjJA2/l+arx0MkD0/dR46YYyQL+fGi/dhDJAbef7qfFyMkCHFtnO93MyQKwcWmQ7nzJA/tR46SZxMkAOLbKd72cyQOOlm8QgMDJAsp3vp8ZrMkDZzvdT40UyQGDl0CLbOTJAlBgEVg7NMkAK16NwPSoyQBWuR+F6FDJA","dtype":"float64","shape":[126]}},"selected":{"id":"5289","type":"Selection"},"selection_policy":{"id":"5290","type":"UnionRenderers"}},"id":"5067","type":"ColumnDataSource"},{"attributes":{},"id":"5048","type":"BasicTicker"},{"attributes":{"color_mapper":{"id":"5072","type":"LinearColorMapper"},"formatter":{"id":"5287","type":"BasicTickFormatter"},"location":[0,0.5],"plot":{"id":"5032","subtype":"Figure","type":"Plot"},"ticker":{"id":"5286","type":"BasicTicker"},"title":"MJD"},"id":"5073","type":"ColorBar"},{"attributes":{"level":"underlay","plot":null,"size":10},"id":"5285","type":"TeeHead"},{"attributes":{},"id":"5290","type":"UnionRenderers"},{"attributes":{},"id":"5040","type":"LinearScale"},{"attributes":{},"id":"5281","type":"BasicTickFormatter"},{"attributes":{},"id":"5283","type":"BasicTickFormatter"},{"attributes":{"fill_color":{"field":"mjd","transform":{"id":"5072","type":"LinearColorMapper"}},"line_color":{"field":"mjd","transform":{"id":"5072","type":"LinearColorMapper"}},"x":{"field":"phase"},"y":{"field":"VEGAMAG"}},"id":"5075","type":"Circle"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"plot":null,"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"5060","type":"BoxAnnotation"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"x":{"field":"phase"},"y":{"field":"VEGAMAG"}},"id":"5076","type":"Circle"},{"attributes":{"data_source":{"id":"5067","type":"ColumnDataSource"},"glyph":{"id":"5075","type":"Circle"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"5076","type":"Circle"},"selection_glyph":null,"view":{"id":"5078","type":"CDSView"}},"id":"5077","type":"GlyphRenderer"},{"attributes":{"plot":null,"text":"U23 Period: 0.471 days"},"id":"5031","type":"Title"},{"attributes":{},"id":"5038","type":"LinearScale"},{"attributes":{"source":{"id":"5067","type":"ColumnDataSource"}},"id":"5078","type":"CDSView"},{"attributes":{"level":"underlay","plot":null,"size":10},"id":"5284","type":"TeeHead"},{"attributes":{"callback":null,"flipped":true},"id":"5036","type":"DataRange1d"},{"attributes":{"base":{"field":"phase","units":"data"},"lower":{"field":"lower","units":"data"},"lower_head":{"id":"5284","type":"TeeHead"},"plot":{"id":"5032","subtype":"Figure","type":"Plot"},"source":{"id":"5067","type":"ColumnDataSource"},"upper":{"field":"upper","units":"data"},"upper_head":{"id":"5285","type":"TeeHead"}},"id":"5070","type":"Whisker"},{"attributes":{},"id":"5053","type":"WheelZoomTool"},{"attributes":{"callback":null},"id":"5034","type":"DataRange1d"},{"attributes":{"high":53468.903657407405,"low":53442.44185185185,"palette":["#000003","#000006","#010109","#02010E","#030212","#040316","#06041B","#08061F","#0A0723","#0D0828","#0F092D","#120A32","#140B36","#170B3B","#1A0B40","#1D0C45","#200C4A","#240B4E","#270B52","#2B0A56","#2E0A5A","#32095D","#350960","#390962","#3C0965","#410967","#450A69","#480B6A","#4B0C6B","#4F0D6C","#520E6C","#550F6D","#58106D","#5B116E","#5F126E","#62146E","#65156E","#68166E","#6B176E","#6E186E","#72196D","#751B6D","#781C6D","#7B1D6C","#7E1E6C","#811F6B","#85206A","#88216A","#8B2269","#8E2468","#932567","#962666","#992864","#9C2963","#A02A62","#A32B61","#A62C5F","#A92E5E","#AC2F5C","#AF315B","#B23259","#B53357","#B83556","#BB3754","#BE3852","#C13A50","#C43C4E","#C73E4C","#C93F4A","#CC4148","#CF4446","#D14643","#D44841","#D64A3F","#D94D3D","#DC5039","#DE5337","#E05634","#E35832","#E55B30","#E65E2D","#E8612B","#EA6428","#EC6726","#ED6A23","#EF6D21","#F0701E","#F2741C","#F37719","#F47A16","#F57E14","#F68111","#F7850E","#F8880C","#F98C09","#F99008","#FA9306","#FA9706","#FB9B06","#FB9E07","#FBA40A","#FBA80D","#FBAC10","#FBB014","#FBB318","#FBB71C","#FABB21","#FABF25","#F9C32A","#F9C72F","#F8CB34","#F7CF3A","#F6D33F","#F5D745","#F4DB4B","#F3DE52","#F3E259","#F2E660","#F1E968","#F1ED70","#F1F079","#F2F381","#F3F689","#F5F891","#F7FB99","#FCFEA4"]},"id":"5072","type":"LinearColorMapper"},{"attributes":{"axis_label":"F336W","formatter":{"id":"5283","type":"BasicTickFormatter"},"plot":{"id":"5032","subtype":"Figure","type":"Plot"},"ticker":{"id":"5048","type":"BasicTicker"}},"id":"5047","type":"LinearAxis"},{"attributes":{"plot":{"id":"5032","subtype":"Figure","type":"Plot"},"ticker":{"id":"5043","type":"BasicTicker"}},"id":"5046","type":"Grid"}],"root_ids":["5032"]},"title":"Bokeh Application","version":"1.0.2"}}';
                  var render_items = [{"docid":"3b40876d-7495-4340-b79d-5605e42bbf20","roots":{"5032":"fc18a2c7-8fad-42ad-9c2c-a66f5856e740"}}];
                  root.Bokeh.embed.embed_items(docs_json, render_items);
                
                  }
                  if (root.Bokeh !== undefined) {
                    embed_document(root);
                  } else {
                    var attempts = 0;
                    var timer = setInterval(function(root) {
                      if (root.Bokeh !== undefined) {
                        embed_document(root);
                        clearInterval(timer);
                      }
                      attempts++;
                      if (attempts > 100) {
                        console.log("Bokeh: ERROR: Unable to run BokehJS code because BokehJS library is missing");
                        clearInterval(timer);
                      }
                    }, 10, root)
                  }
                })(window);
              });
            };
            if (document.readyState != "loading") fn();
            else document.addEventListener("DOMContentLoaded", fn);
          })();
        },
        function(Bokeh) {
          console.log("Bokeh: injecting CSS: https://cdn.pydata.org/bokeh/release/bokeh-1.0.2.min.css");
          Bokeh.embed.inject_css("https://cdn.pydata.org/bokeh/release/bokeh-1.0.2.min.css");
          console.log("Bokeh: injecting CSS: https://cdn.pydata.org/bokeh/release/bokeh-widgets-1.0.2.min.css");
          Bokeh.embed.inject_css("https://cdn.pydata.org/bokeh/release/bokeh-widgets-1.0.2.min.css");
          console.log("Bokeh: injecting CSS: https://cdn.pydata.org/bokeh/release/bokeh-tables-1.0.2.min.css");
          Bokeh.embed.inject_css("https://cdn.pydata.org/bokeh/release/bokeh-tables-1.0.2.min.css");
        }
      ];
    
      function run_inline_js() {
        
        for (var i = 0; i < inline_js.length; i++) {
          inline_js[i].call(root, root.Bokeh);
        }
        
      }
    
      if (root._bokeh_is_loading === 0) {
        console.log("Bokeh: BokehJS loaded, going straight to plotting");
        run_inline_js();
      } else {
        load_libs(js_urls, function() {
          console.log("Bokeh: BokehJS plotting callback run at", now());
          run_inline_js();
        });
      }
    }(window));
  };
  if (document.readyState != "loading") fn();
  else document.addEventListener("DOMContentLoaded", fn);
})();