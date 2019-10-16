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
      };var element = document.getElementById("6d0f9f4c-f1fb-4d3c-8726-552ac186b9b4");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid '6d0f9f4c-f1fb-4d3c-8726-552ac186b9b4' but no matching script tag was found. ")
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
                    
                  var docs_json = '{"59a3976a-d559-4ad1-99b2-f4437e789ccc":{"roots":{"references":[{"attributes":{"below":[{"id":"2517","type":"DatetimeAxis"}],"left":[{"id":"2522","type":"LinearAxis"}],"plot_height":200,"plot_width":950,"renderers":[{"id":"2517","type":"DatetimeAxis"},{"id":"2521","type":"Grid"},{"id":"2522","type":"LinearAxis"},{"id":"2526","type":"Grid"},{"id":"2534","type":"BoxAnnotation"},{"id":"2564","type":"Legend"},{"id":"2544","type":"GlyphRenderer"},{"id":"2566","type":"Whisker"}],"title":{"id":"2506","type":"Title"},"toolbar":{"id":"2531","type":"Toolbar"},"x_range":{"id":"2509","type":"DataRange1d"},"x_scale":{"id":"2513","type":"LinearScale"},"y_range":{"id":"2511","type":"DataRange1d"},"y_scale":{"id":"2515","type":"LinearScale"}},"id":"2507","subtype":"Figure","type":"Plot"},{"attributes":{},"id":"2527","type":"ResetTool"},{"attributes":{"base":24,"mantissas":[1,2,4,6,8,12],"max_interval":43200000.0,"min_interval":3600000.0,"num_minor_ticks":0},"id":"2553","type":"AdaptiveTicker"},{"attributes":{"callback":null},"id":"2509","type":"DataRange1d"},{"attributes":{},"id":"2528","type":"PanTool"},{"attributes":{"base":60,"mantissas":[1,2,5,10,15,20,30],"max_interval":1800000.0,"min_interval":1000.0,"num_minor_ticks":0},"id":"2552","type":"AdaptiveTicker"},{"attributes":{"items":[{"id":"2565","type":"LegendItem"}],"plot":{"id":"2507","subtype":"Figure","type":"Plot"}},"id":"2564","type":"Legend"},{"attributes":{},"id":"2529","type":"WheelZoomTool"},{"attributes":{"label":{"value":"U23"},"renderers":[{"id":"2544","type":"GlyphRenderer"}]},"id":"2565","type":"LegendItem"},{"attributes":{"fill_color":{"value":"#1f77b4"},"line_color":{"value":"#1f77b4"},"x":{"field":"time"},"y":{"field":"VEGAMAG"}},"id":"2542","type":"Circle"},{"attributes":{},"id":"2515","type":"LinearScale"},{"attributes":{"overlay":{"id":"2534","type":"BoxAnnotation"}},"id":"2530","type":"BoxZoomTool"},{"attributes":{"days":[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31]},"id":"2554","type":"DaysTicker"},{"attributes":{"callback":null,"flipped":true},"id":"2511","type":"DataRange1d"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"plot":null,"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"2534","type":"BoxAnnotation"},{"attributes":{"days":[1,4,7,10,13,16,19,22,25,28]},"id":"2555","type":"DaysTicker"},{"attributes":{"days":[1,8,15,22]},"id":"2556","type":"DaysTicker"},{"attributes":{"active_drag":{"id":"2530","type":"BoxZoomTool"},"active_inspect":"auto","active_multi":null,"active_scroll":{"id":"2529","type":"WheelZoomTool"},"active_tap":"auto","tools":[{"id":"2527","type":"ResetTool"},{"id":"2528","type":"PanTool"},{"id":"2529","type":"WheelZoomTool"},{"id":"2530","type":"BoxZoomTool"},{"id":"2539","type":"HoverTool"},{"id":"2539","type":"HoverTool"}]},"id":"2531","type":"Toolbar"},{"attributes":{"num_minor_ticks":5,"tickers":[{"id":"2551","type":"AdaptiveTicker"},{"id":"2552","type":"AdaptiveTicker"},{"id":"2553","type":"AdaptiveTicker"},{"id":"2554","type":"DaysTicker"},{"id":"2555","type":"DaysTicker"},{"id":"2556","type":"DaysTicker"},{"id":"2557","type":"DaysTicker"},{"id":"2558","type":"MonthsTicker"},{"id":"2559","type":"MonthsTicker"},{"id":"2560","type":"MonthsTicker"},{"id":"2561","type":"MonthsTicker"},{"id":"2562","type":"YearsTicker"}]},"id":"2518","type":"DatetimeTicker"},{"attributes":{"days":[1,15]},"id":"2557","type":"DaysTicker"},{"attributes":{"months":[0,1,2,3,4,5,6,7,8,9,10,11]},"id":"2558","type":"MonthsTicker"},{"attributes":{"axis_label":"Time","formatter":{"id":"2547","type":"DatetimeTickFormatter"},"plot":{"id":"2507","subtype":"Figure","type":"Plot"},"ticker":{"id":"2518","type":"DatetimeTicker"}},"id":"2517","type":"DatetimeAxis"},{"attributes":{},"id":"2746","type":"Selection"},{"attributes":{"plot":{"id":"2507","subtype":"Figure","type":"Plot"},"ticker":{"id":"2518","type":"DatetimeTicker"}},"id":"2521","type":"Grid"},{"attributes":{"months":[0,2,4,6,8,10]},"id":"2559","type":"MonthsTicker"},{"attributes":{"axis_label":"F336W","formatter":{"id":"2549","type":"BasicTickFormatter"},"plot":{"id":"2507","subtype":"Figure","type":"Plot"},"ticker":{"id":"2523","type":"BasicTicker"}},"id":"2522","type":"LinearAxis"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"x":{"field":"time"},"y":{"field":"VEGAMAG"}},"id":"2543","type":"Circle"},{"attributes":{"months":[0,4,8]},"id":"2560","type":"MonthsTicker"},{"attributes":{},"id":"2747","type":"UnionRenderers"},{"attributes":{"data_source":{"id":"2538","type":"ColumnDataSource"},"glyph":{"id":"2542","type":"Circle"},"hover_glyph":null,"muted_glyph":null,"name":"U23","nonselection_glyph":{"id":"2543","type":"Circle"},"selection_glyph":null,"view":{"id":"2545","type":"CDSView"}},"id":"2544","type":"GlyphRenderer"},{"attributes":{"callback":null,"data":{"VEGAMAG":{"__ndarray__":"UrgehesxMkApXI/C9SgyQGq8dJMYBDJA7nw/NV5aMkAX2c73U2MyQDm0yHa+fzJAsp3vp8ZLMkAAAAAAAGAyQEjhehSuRzJAokW28/1UMkC6SQwCK4cyQIGVQ4tsRzJA001iEFg5MkAdWmQ7348yQHe+nxovXTJAoBov3SRGMkDZzvdT42UyQN0kBoGVgzJAjZduEoOgMkD+1HjpJlEyQFK4HoXrcTJAnu+nxkuXMkCJQWDl0IIyQBBYObTIdjJAXrpJDAJrMkBmZmZmZgYzQB1aZDvfTzJARIts5/tJMkDNzMzMzGwyQD81XrpJLDJA1XjpJjFIMkCkcD0K10MyQHE9CtejEDJAkxgEVg5NMkCkcD0K10MyQClcj8L1aDJAL90kBoFVMkAfhetRuB4yQH9qvHSTODJAJzEIrBw6MkCkcD0K1yMyQKRwPQrXQzJAYhBYObRoMkAOLbKd7wcyQLbz/dR4STJAlkOLbOc7MkB3vp8aL30yQDVeukkMYjJAXI/C9Sg8MkBSuB6F63EyQKAaL90kZjJAgZVDi2wnMkA9CtejcD0yQFyPwvUofDJAhetRuB5FMkBvEoPAyqEyQBkEVg4tcjJAF9nO91NDMkBOYhBYOXQyQNnO91PjZTJABFYOLbJdMkDXo3A9CpcyQJ7vp8ZLdzJArkfhehRuMkD+1HjpJlEyQPyp8dJNAjNAc2iR7XyfMkCWQ4ts51syQHe+nxovfTJABFYOLbK9MkAK16NwPYoyQIGVQ4tsZzJAy6FFtvN9MkAxCKwcWqQyQEw3iUFgZTJA/Knx0k1iMkAv3SQGgVUyQHE9CtejcDJASgwCK4dWMkCoxks3iUEyQK5H4XoULjJAmG4Sg8BKMkCF61G4HiUyQEJg5dAi+zFAaJHtfD9VMkDhehSuR0EyQOF6FK5HgTJAGy/dJAZhMkDHSzeJQUAyQB1aZDvfTzJAlkOLbOdbMkASg8DKoSUyQKRwPQrXIzJAAAAAAABAMkDNzMzMzCwyQM/3U+OlWzJAxSCwcmgRMkDn+6nx0g0yQJqZmZmZGTJASgwCK4dWMkD2KFyPwvUxQHNoke18PzJAz/dT46W7MkBSuB6F61EyQAwCK4cWeTJArkfhehROMkAUrkfhenQyQDVeukkMAjNAVOOlm8SgMkDfT42XbnIyQMl2vp8abzJAN4lBYOVwMkDdJAaBlYMyQKjGSzeJgTJAyXa+nxpvMkA3iUFg5XAyQM/3U+OlmzJAWmQ7309tMkC+nxov3WQyQFpkO99PLTJADi2yne9nMkBQjZduEkMyQNejcD0KNzJAnMQgsHLIMkCBlUOLbCcyQFK4HoXrETJA","dtype":"float64","shape":[126]},"dmag":{"__ndarray__":"ukkMAiuHhj+6SQwCK4eGP3sUrkfheoQ/ObTIdr6fij/6fmq8dJOIPzm0yHa+n4o/+n5qvHSTiD/6fmq8dJOIP/p+arx0k4g/+n5qvHSTiD85tMh2vp+KP7pJDAIrh4Y/+n5qvHSTiD85tMh2vp+KP/p+arx0k4g/ukkMAiuHhj85tMh2vp+KPzm0yHa+n4o/eekmMQisjD/6fmq8dJOIP3npJjEIrIw/ObTIdr6fij85tMh2vp+KPzm0yHa+n4o/eekmMQisjD+cxCCwcmiRP/p+arx0k4g/ukkMAiuHhj/6fmq8dJOIP7pJDAIrh4Y/ukkMAiuHhj+6SQwCK4eGP3sUrkfheoQ/+n5qvHSTiD/6fmq8dJOIP/p+arx0k4g/+n5qvHSTiD+6SQwCK4eGP7pJDAIrh4Y/ukkMAiuHhj+6SQwCK4eGP7pJDAIrh4Y/+n5qvHSTiD97FK5H4XqEP/p+arx0k4g/ukkMAiuHhj85tMh2vp+KP/p+arx0k4g/ukkMAiuHhj/6fmq8dJOIP/p+arx0k4g/ukkMAiuHhj+6SQwCK4eGPzm0yHa+n4o/+n5qvHSTiD956SYxCKyMP/p+arx0k4g/ukkMAiuHhj85tMh2vp+KP/p+arx0k4g/+n5qvHSTiD956SYxCKyMPzm0yHa+n4o/+n5qvHSTiD85tMh2vp+KP5zEILByaJE/eekmMQisjD/6fmq8dJOIPzm0yHa+n4o/eekmMQisjD85tMh2vp+KP/p+arx0k4g/ObTIdr6fij956SYxCKyMPzm0yHa+n4o/+n5qvHSTiD/6fmq8dJOIP/p+arx0k4g/+n5qvHSTiD+6SQwCK4eGP7pJDAIrh4Y/ukkMAiuHhj+6SQwCK4eGP3sUrkfheoQ/ObTIdr6fij+6SQwCK4eGPzm0yHa+n4o/+n5qvHSTiD+6SQwCK4eGPzm0yHa+n4o/+n5qvHSTiD+6SQwCK4eGP7pJDAIrh4Y/ukkMAiuHhj85tMh2vp+KP/p+arx0k4g/exSuR+F6hD/6fmq8dJOIP3sUrkfheoQ/eekmMQisjD97FK5H4XqEP7pJDAIrh4Y/nMQgsHJokT/6fmq8dJOIPzm0yHa+n4o/eekmMQisjD85tMh2vp+KP5zEILByaJE//Knx0k1ikD/6fmq8dJOIP/p+arx0k4g/uB6F61G4jj85tMh2vp+KPzm0yHa+n4o/uB6F61G4jj/6fmq8dJOIP3npJjEIrIw/uB6F61G4jj/6fmq8dJOIP7pJDAIrh4Y/uB6F61G4jj+6SQwCK4eGP7pJDAIrh4Y/O99PjZdukj+6SQwCK4eGP3sUrkfheoQ/","dtype":"float64","shape":[126]},"lower":{"__ndarray__":"yXa+nxovMkCgGi/dJCYyQKfGSzeJATJA16NwPQpXMkDHSzeJQWAyQCLb+X5qfDJAYhBYObRIMkCwcmiR7VwyQPhT46WbRDJAUrgehetRMkCjcD0K14MyQPhT46WbRDJAg8DKoUU2MkAGgZVDi4wyQCcxCKwcWjJAF9nO91NDMkDC9Shcj2IyQMZLN4lBgDJAsHJoke2cMkCuR+F6FE4yQHWTGARWbjJAhxbZzveTMkByaJHtfH8yQPl+arx0czJAgZVDi2xnMkA1XrpJDAIzQM3MzMzMTDJAu0kMAitHMkB9PzVeumkyQLbz/dR4KTJATDeJQWBFMkAbL90kBkEyQK5H4XoUDjJAQ4ts5/tJMkBU46WbxEAyQNnO91PjZTJA30+Nl25SMkCWQ4ts5xsyQPYoXI/CNTJAnu+nxks3MkAbL90kBiEyQBsv3SQGQTJAEoPAyqFlMkBLN4lBYAUyQGZmZmZmRjJADQIrhxY5MkBg5dAi23kyQOXQItv5XjJA001iEFg5MkACK4cW2W4yQFCNl24SYzJA+FPjpZskMkC0yHa+nzoyQEW28/3UeDJANV66SQxCMkCS7Xw/NZ4yQMl2vp8abzJAjpduEoNAMkA3iUFg5XAyQIlBYOXQYjJAtMh2vp9aMkD6fmq8dJMyQIcW2c73czJAXrpJDAJrMkDn+6nx0k0yQMuhRbbz/TJAlkOLbOebMkBGtvP91FgyQGDl0CLbeTJAJzEIrBy6MkDz/dR46YYyQDEIrBxaZDJAtMh2vp96MkBU46WbxKAyQDVeukkMYjJArBxaZDtfMkDfT42XblIyQCGwcmiRbTJA+n5qvHRTMkAfhetRuD4yQCUGgZVDKzJADy2yne9HMkD8qfHSTSIyQH9qvHST+DFAUbgehetRMkBYObTIdj4yQMqhRbbzfTJAy6FFtvNdMkA+CtejcD0yQAaBlUOLTDJARrbz/dRYMkCJQWDl0CIyQBsv3SQGITJAd76fGi89MkC28/3UeCkyQH9qvHSTWDJAAiuHFtkOMkCXbhKDwAoyQNejcD0KFzJAbef7qfFSMkAzMzMzM/MxQOomMQisPDJAnu+nxku3MkACK4cW2U4yQPUoXI/CdTJA0SLb+X5KMkD91HjpJnEyQARWDi2y/TJA6iYxCKycMkCPwvUoXG8yQHnpJjEIbDJAkxgEVg5tMkDGSzeJQYAyQJHtfD81fjJAJQaBlUNrMkDn+6nx0m0yQPLSTWIQmDJAtvP91HhpMkBuEoPAymEyQNEi2/l+KjJAarx0kxhkMkDHSzeJQUAyQE5iEFg5NDJApHA9CtfDMkD4U+OlmyQyQI/C9ShcDzJA","dtype":"float64","shape":[126]},"mjd":{"__ndarray__":"lRLlDP0a6kC9j7c0/xrqQN+x2VYBG+pAbpUS5Zga6kCQtzQHmxrqQLLZVimdGupAc/DC6sUZ6kCKXIQByBnqQNT7eEufGupA9h2bbaEa6kAYQL2PoxrqQDUHL6ylGupAHpttlYMa6kBAvY+3hRrqQNT7eEs7GepA62c6Yj0Z6kDaVilRvRnqQALU+3i/GepAJPYdm8EZ6kBGGEC9wxnqQF2EAdTlGepAhAHU++cZ6kCsfqYjGxrqQM6gyEUdGupArH6mI04Y6kCy2VYpUBjqQNT7eEtSGOpA9h2bbVQY6kAYQL2PVhjqQPx4S3O/GOpA8MLqZ8EY6kD8eEtzwxjqQA2KXITFGOpAL6x+pscY6kBi37HZ1hjqQIQB1PvYGOpApiP2HdsY6kDOoMhF3RjqQPDC6mffGOpARhhAveEY6kA6Yt+x4xjqQF2EAdTlGOpAf6Yj9ucY6kChyEUY6hjqQKHIRRj5GOpAvY+3NPsY6kDfsdlW/RjqQALU+3j/GOpAJPYdmwEZ6kBi37HZAxnqQG6VEuUFGepAkLc0BwgZ6kCy2VYpChnqQNT7eEsMGepAochFGBkZ6kDD6mc6GxnqQOtnOmIdGepADYpchB8Z6kAvrH6mIRnqQEYYQL1hGepAUc6gyGMZ6kBz8MLqZRnqQJUS5QxoGepAuDQHL2oZ6kDaVilRexnqQOUMilx9GepABy+sfn8Z6kApUc6ggRnqQEtz8MKDGepAzqDIRZsZ6kDlDIpcnRnqQAcvrH6fGepAKVHOoKEZ6kBLc/DCoxnqQL2PtzTbGepA2lYpUd0Z6kD8eEtz3xnqQB6bbZXhGepAQL2Pt+MZ6kApUc6gFhvqQFHOoMgYG+pAc/DC6hob6kCVEuUMHRvqQLg0By8fG+pAeUtz8Hga6kCVEuUMexrqQLg0By99GupA2lYpUX8a6kD8eEtzgRrqQOUMilyUG+pADYpchJYb6kAvrH6mmBvqQFHOoMiaG+pAc/DC6pwb6kBLc/DCOBvqQGg6Yt86G+pAilyEAT0b6kChyEUYfxvqQL2PtzSBG+pAzqDIRcoY6kBz8MLqyxjqQJUS5QzOGOpAaDpi3yMZ6kBz8MLqJRnqQJUS5QwoGepA2lYpUVsZ6kDrZzpiXRnqQA2KXIRfGepAeUtz8IUZ6kCQtzQHiBnqQLLZVimKGepAuDQHL/sZ6kDU+3hL/RnqQPYdm23/GepAHpttlQEa6kA6Yt+xAxrqQF2EAdQFGupAzqDIRd8a6kDlDIpc4RrqQAcvrH7jGupAaDpi39ga6kB/piP22hrqQKHIRRjdGupAOmLfsfYa6kBXKVHO+BrqQHlLc/D6GupA","dtype":"float64","shape":[126]},"obnames":[["2005-04-03T21:47:16"],["2005-04-03T23:24:16"],["2005-04-04T01:00:16"],["2005-03-31T18:40:16"],["2005-03-31T20:16:16"],["2005-03-31T21:52:16"],["2005-03-25T04:26:16"],["2005-03-25T06:00:16"],["2005-03-31T23:28:16"],["2005-04-01T01:04:16"],["2005-04-01T02:40:16"],["2005-04-01T04:15:16"],["2005-03-31T02:41:16"],["2005-03-31T04:17:16"],["2005-03-20T20:28:16"],["2005-03-20T22:02:16"],["2005-03-24T21:59:16"],["2005-03-24T23:36:16"],["2005-03-25T01:12:16"],["2005-03-25T02:48:16"],["2005-03-26T04:22:16"],["2005-03-26T05:59:16"],["2005-03-27T20:21:16"],["2005-03-27T21:57:16"],["2005-03-13T10:36:16"],["2005-03-13T12:07:16"],["2005-03-13T13:43:16"],["2005-03-13T15:19:16"],["2005-03-13T16:55:16"],["2005-03-16T23:35:16"],["2005-03-17T01:03:16"],["2005-03-17T02:35:16"],["2005-03-17T04:08:16"],["2005-03-17T05:44:16"],["2005-03-17T17:08:16"],["2005-03-17T18:44:16"],["2005-03-17T20:20:16"],["2005-03-17T21:57:16"],["2005-03-17T23:33:16"],["2005-03-18T01:18:16"],["2005-03-18T02:46:16"],["2005-03-18T04:22:16"],["2005-03-18T05:58:16"],["2005-03-18T07:34:16"],["2005-03-18T18:49:16"],["2005-03-18T20:24:16"],["2005-03-18T22:00:16"],["2005-03-18T23:36:16"],["2005-03-19T01:12:16"],["2005-03-19T02:53:16"],["2005-03-19T04:25:16"],["2005-03-19T06:01:16"],["2005-03-19T07:37:16"],["2005-03-19T09:13:16"],["2005-03-19T18:49:16"],["2005-03-19T20:25:16"],["2005-03-19T22:02:16"],["2005-03-19T23:38:16"],["2005-03-20T01:14:16"],["2005-03-22T01:18:16"],["2005-03-22T02:50:16"],["2005-03-22T04:26:16"],["2005-03-22T06:02:16"],["2005-03-22T07:38:16"],["2005-03-22T20:29:16"],["2005-03-22T22:01:16"],["2005-03-22T23:37:16"],["2005-03-23T01:13:16"],["2005-03-23T02:49:16"],["2005-03-23T20:27:16"],["2005-03-23T22:01:16"],["2005-03-23T23:37:16"],["2005-03-24T01:13:16"],["2005-03-24T02:49:16"],["2005-03-25T20:24:16"],["2005-03-25T21:59:16"],["2005-03-25T23:35:16"],["2005-03-26T01:11:16"],["2005-03-26T02:47:16"],["2005-04-04T16:58:16"],["2005-04-04T18:35:16"],["2005-04-04T20:11:16"],["2005-04-04T21:47:16"],["2005-04-04T23:23:16"],["2005-03-30T18:42:16"],["2005-03-30T20:17:16"],["2005-03-30T21:53:16"],["2005-03-30T23:29:16"],["2005-03-31T01:05:16"],["2005-04-08T15:16:16"],["2005-04-08T16:53:16"],["2005-04-08T18:29:16"],["2005-04-08T20:05:16"],["2005-04-08T21:41:16"],["2005-04-05T18:34:16"],["2005-04-05T20:09:16"],["2005-04-05T21:45:16"],["2005-04-07T23:19:16"],["2005-04-08T00:54:16"],["2005-03-17T07:42:16"],["2005-03-17T08:56:16"],["2005-03-17T10:32:16"],["2005-03-20T02:54:16"],["2005-03-20T04:26:16"],["2005-03-20T06:02:16"],["2005-03-21T20:29:16"],["2005-03-21T22:02:16"],["2005-03-21T23:38:16"],["2005-03-23T04:27:16"],["2005-03-23T06:01:16"],["2005-03-23T07:37:16"],["2005-03-26T20:23:16"],["2005-03-26T21:58:16"],["2005-03-26T23:34:16"],["2005-03-27T01:11:16"],["2005-03-27T02:46:16"],["2005-03-27T04:22:16"],["2005-04-02T23:27:16"],["2005-04-03T01:01:16"],["2005-04-03T02:37:16"],["2005-04-02T18:39:16"],["2005-04-02T20:13:16"],["2005-04-02T21:49:16"],["2005-04-03T17:01:16"],["2005-04-03T18:36:16"],["2005-04-03T20:12:16"]],"time":{"__ndarray__":"AABqgqAwcEIAAFAPpjBwQgAAkI2rMHBCAADonZ4vcEIAACgcpC9wQgAAaJqpL3BCAACkXX8tcEIAAJi+hC1wQgAAqBivL3BCAADolrQvcEIAACgVui9wQgAAwoS/L3BCAAAOvmcvcEIAAE48bS9wQgAAsGwaLHBCAACkzR8scEIAALI4aS1wQgAAmMVuLXBCAADYQ3QtcEIAABjCeS1wQgAAzIjRLXBCAACyFdctcEIAAGbOWi5wQgAApkxgLnBCAACQxLcpcEIAAJL5vClwQgAA0nfCKXBCAAAS9scpcEIAAFJ0zSlwQgAA8ojbKnBCAAACkuAqcEIAAKrV5SpwQgAA+CfrKnBCAAA4pvAqcEIAAMDJFytwQgAAAEgdK3BCAABAxiIrcEIAACZTKCtwQgAAZtEtK3BCAAB80zMrcEIAAIzcOCtwQgAAzFo+K3BCAAAM2UMrcEIAAExXSStwQgAA/vZvK3BCAACYZnUrcEIAANjkeitwQgAAGGOAK3BCAABY4YUrcEIAANaoiytwQgAAfuyQK3BCAAC+apYrcEIAAP7omytwQgAAPmehK3BCAAC+XMIrcEIAAP7axytwQgAA5GfNK3BCAAAk5tIrcEIAAGRk2CtwQgAAfGp9LHBCAAAkroIscEIAAGQsiCxwQgAApKqNLHBCAADkKJMscEIAANZGvyxwQgAAforELHBCAAC+CMoscEIAAP6GzyxwQgAAPgXVLHBCAABKjxEtcEIAAD7wFi1wQgAAfm4cLXBCAAC+7CEtcEIAAP5qJy1wQgAA2C62LXBCAABynrstcEIAALIcwS1wQgAA8prGLXBCAAAyGcwtcEIAAMRe4jBwQgAAquvnMHBCAADqae0wcEIAACro8jBwQgAAamb4MHBCAAB0VUwvcEIAAA7FUS9wQgAATkNXL3BCAACOwVwvcEIAAM4/Yi9wQgAAoB8mMnBCAACGrCsycEIAAMYqMTJwQgAABqk2MnBCAABGJzwycEIAAMRCOjFwQgAAXrI/MXBCAACeMEUxcEIAABJd7zFwQgAArMz0MXBCAAC8ZvcqcEIAALii+ypwQgAA+CABK3BCAAA8Hd4rcEIAAORg4ytwQgAAJN/oK3BCAAAW4WwscEIAAGQzcixwQgAApLF3LHBCAADKoNoscEIAAL4B4CxwQgAA/n/lLHBCAADyhQgucEIAAIz1DS5wQgAAzHMTLnBCAACyABkucEIAAExwHi5wQgAAjO4jLnBCAACC1VMwcEIAAHY2WTBwQgAAtrReMHBCAADCWkMwcEIAALa7SDBwQgAA9jlOMHBCAAD2JJAwcEIAAJCUlTBwQgAA0BKbMHBC","dtype":"float64","shape":[126]},"upper":{"__ndarray__":"2/l+arw0MkCyne+nxisyQC2yne+nBjJABVYOLbJdMkBnZmZmZmYyQFCNl24SgzJAAiuHFtlOMkBQjZduEmMyQJhuEoPASjJA8tJNYhBYMkDRItv5fooyQArXo3A9SjJAI9v5fmo8MkA0MzMzM5MyQMdLN4lBYDJAKVyPwvVIMkDwp8ZLN2kyQPT91HjphjJAarx0kxikMkBOYhBYOVQyQC/dJAaBdTJAtch2vp+aMkCgGi/dJIYyQCcxCKwcejJAO99PjZduMkCXbhKDwAozQG3n+6nxUjJAzczMzMxMMkAdWmQ7328yQMh2vp8aLzJAXrpJDAJLMkAtsp3vp0YyQDQzMzMzEzJA46WbxCBQMkD0/dR46UYyQHnpJjEIbDJAf2q8dJNYMkCoxks3iSEyQAisHFpkOzJAsHJoke08MkAtsp3vpyYyQC2yne+nRjJAsp3vp8ZrMkDRItv5fgoyQAaBlUOLTDJAH4XrUbg+MkCOl24Sg4AyQIXrUbgeZTJA5dAi2/k+MkCiRbbz/XQyQPCnxks3aTJACtejcD0qMkDGSzeJQUAyQHNoke18fzJA1XjpJjFIMkBMN4lBYKUyQGmR7Xw/dTJAoBov3SRGMkBlO99PjXcyQClcj8L1aDJAVOOlm8RgMkC0yHa+n5oyQLXIdr6fejJA/tR46SZxMkAVrkfhelQyQC2yne+nBjNAUI2XbhKjMkDm0CLb+V4yQI6XbhKDgDJA4XoUrkfBMkAhsHJokY0yQNEi2/l+ajJA4noUrkeBMkAOLbKd76cyQGMQWDm0aDJATDeJQWBlMkB/arx0k1gyQMHKoUW2czJAmpmZmZlZMkAxCKwcWkQyQDeJQWDlMDJAIbByaJFNMkAOLbKd7ycyQAVWDi2y/TFAf2q8dJNYMkBqvHSTGEQyQPhT46WbhDJAa7x0kxhkMkBQjZduEkMyQDQzMzMzUzJA5tAi2/leMkCbxCCwcigyQC2yne+nJjJAiUFg5dBCMkDkpZvEIDAyQB+F61G4XjJAiBbZzvcTMkA3iUFg5RAyQF2PwvUoHDJAJzEIrBxaMkC5HoXrUfgxQPyp8dJNQjJAAAAAAADAMkCiRbbz/VQyQCPb+X5qfDJAi2zn+6lRMkArhxbZzncyQGZmZmZmBjNAvp8aL92kMkAv3SQGgXUyQBkEVg4tcjJA2/l+arx0MkD0/dR46YYyQL+fGi/dhDJAbef7qfFyMkCHFtnO93MyQKwcWmQ7nzJA/tR46SZxMkAOLbKd72cyQOOlm8QgMDJAsp3vp8ZrMkDZzvdT40UyQGDl0CLbOTJAlBgEVg7NMkAK16NwPSoyQBWuR+F6FDJA","dtype":"float64","shape":[126]}},"selected":{"id":"2746","type":"Selection"},"selection_policy":{"id":"2747","type":"UnionRenderers"}},"id":"2538","type":"ColumnDataSource"},{"attributes":{"source":{"id":"2538","type":"ColumnDataSource"}},"id":"2545","type":"CDSView"},{"attributes":{"level":"underlay","plot":null,"size":10},"id":"2712","type":"TeeHead"},{"attributes":{"months":[0,6]},"id":"2561","type":"MonthsTicker"},{"attributes":{"plot":null,"text":""},"id":"2506","type":"Title"},{"attributes":{"mantissas":[1,2,5],"max_interval":500.0,"num_minor_ticks":0},"id":"2551","type":"AdaptiveTicker"},{"attributes":{},"id":"2562","type":"YearsTicker"},{"attributes":{},"id":"2547","type":"DatetimeTickFormatter"},{"attributes":{"dimension":1,"plot":{"id":"2507","subtype":"Figure","type":"Plot"},"ticker":{"id":"2523","type":"BasicTicker"}},"id":"2526","type":"Grid"},{"attributes":{},"id":"2523","type":"BasicTicker"},{"attributes":{"level":"underlay","plot":null,"size":10},"id":"2711","type":"TeeHead"},{"attributes":{},"id":"2513","type":"LinearScale"},{"attributes":{"base":{"field":"time","units":"data"},"lower":{"field":"lower","units":"data"},"lower_head":{"id":"2711","type":"TeeHead"},"plot":{"id":"2507","subtype":"Figure","type":"Plot"},"source":{"id":"2538","type":"ColumnDataSource"},"upper":{"field":"upper","units":"data"},"upper_head":{"id":"2712","type":"TeeHead"}},"id":"2566","type":"Whisker"},{"attributes":{},"id":"2549","type":"BasicTickFormatter"},{"attributes":{"callback":null,"tooltips":[["Date","(@obnames)"]]},"id":"2539","type":"HoverTool"}],"root_ids":["2507"]},"title":"Bokeh Application","version":"1.0.2"}}';
                  var render_items = [{"docid":"59a3976a-d559-4ad1-99b2-f4437e789ccc","roots":{"2507":"6d0f9f4c-f1fb-4d3c-8726-552ac186b9b4"}}];
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