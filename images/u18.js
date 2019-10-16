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
      };var element = document.getElementById("5fa85403-d713-4cfe-ba96-e8af81c2bc49");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid '5fa85403-d713-4cfe-ba96-e8af81c2bc49' but no matching script tag was found. ")
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
                    
                  var docs_json = '{"7d479403-4bab-44f3-928c-f9230d6a9008":{"roots":{"references":[{"attributes":{"below":[{"id":"2580","type":"DatetimeAxis"}],"left":[{"id":"2585","type":"LinearAxis"}],"plot_height":200,"plot_width":950,"renderers":[{"id":"2580","type":"DatetimeAxis"},{"id":"2584","type":"Grid"},{"id":"2585","type":"LinearAxis"},{"id":"2589","type":"Grid"},{"id":"2597","type":"BoxAnnotation"},{"id":"2627","type":"Legend"},{"id":"2607","type":"GlyphRenderer"},{"id":"2629","type":"Whisker"}],"title":{"id":"2569","type":"Title"},"toolbar":{"id":"2594","type":"Toolbar"},"x_range":{"id":"2572","type":"DataRange1d"},"x_scale":{"id":"2576","type":"LinearScale"},"y_range":{"id":"2574","type":"DataRange1d"},"y_scale":{"id":"2578","type":"LinearScale"}},"id":"2570","subtype":"Figure","type":"Plot"},{"attributes":{},"id":"2592","type":"WheelZoomTool"},{"attributes":{},"id":"2761","type":"Selection"},{"attributes":{"overlay":{"id":"2597","type":"BoxAnnotation"}},"id":"2593","type":"BoxZoomTool"},{"attributes":{"days":[1,4,7,10,13,16,19,22,25,28]},"id":"2618","type":"DaysTicker"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"plot":null,"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"2597","type":"BoxAnnotation"},{"attributes":{"callback":null,"flipped":true},"id":"2574","type":"DataRange1d"},{"attributes":{},"id":"2578","type":"LinearScale"},{"attributes":{"days":[1,8,15,22]},"id":"2619","type":"DaysTicker"},{"attributes":{"days":[1,15]},"id":"2620","type":"DaysTicker"},{"attributes":{},"id":"2576","type":"LinearScale"},{"attributes":{"num_minor_ticks":5,"tickers":[{"id":"2614","type":"AdaptiveTicker"},{"id":"2615","type":"AdaptiveTicker"},{"id":"2616","type":"AdaptiveTicker"},{"id":"2617","type":"DaysTicker"},{"id":"2618","type":"DaysTicker"},{"id":"2619","type":"DaysTicker"},{"id":"2620","type":"DaysTicker"},{"id":"2621","type":"MonthsTicker"},{"id":"2622","type":"MonthsTicker"},{"id":"2623","type":"MonthsTicker"},{"id":"2624","type":"MonthsTicker"},{"id":"2625","type":"YearsTicker"}]},"id":"2581","type":"DatetimeTicker"},{"attributes":{"months":[0,1,2,3,4,5,6,7,8,9,10,11]},"id":"2621","type":"MonthsTicker"},{"attributes":{"axis_label":"Time","formatter":{"id":"2610","type":"DatetimeTickFormatter"},"plot":{"id":"2570","subtype":"Figure","type":"Plot"},"ticker":{"id":"2581","type":"DatetimeTicker"}},"id":"2580","type":"DatetimeAxis"},{"attributes":{"axis_label":"F336W","formatter":{"id":"2612","type":"BasicTickFormatter"},"plot":{"id":"2570","subtype":"Figure","type":"Plot"},"ticker":{"id":"2586","type":"BasicTicker"}},"id":"2585","type":"LinearAxis"},{"attributes":{"fill_color":{"value":"#1f77b4"},"line_color":{"value":"#1f77b4"},"x":{"field":"time"},"y":{"field":"VEGAMAG"}},"id":"2605","type":"Circle"},{"attributes":{"months":[0,4,8]},"id":"2623","type":"MonthsTicker"},{"attributes":{"plot":{"id":"2570","subtype":"Figure","type":"Plot"},"ticker":{"id":"2581","type":"DatetimeTicker"}},"id":"2584","type":"Grid"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"x":{"field":"time"},"y":{"field":"VEGAMAG"}},"id":"2606","type":"Circle"},{"attributes":{},"id":"2591","type":"PanTool"},{"attributes":{"months":[0,2,4,6,8,10]},"id":"2622","type":"MonthsTicker"},{"attributes":{"data_source":{"id":"2601","type":"ColumnDataSource"},"glyph":{"id":"2605","type":"Circle"},"hover_glyph":null,"muted_glyph":null,"name":"U18","nonselection_glyph":{"id":"2606","type":"Circle"},"selection_glyph":null,"view":{"id":"2608","type":"CDSView"}},"id":"2607","type":"GlyphRenderer"},{"attributes":{"level":"underlay","plot":null,"size":10},"id":"2718","type":"TeeHead"},{"attributes":{"base":60,"mantissas":[1,2,5,10,15,20,30],"max_interval":1800000.0,"min_interval":1000.0,"num_minor_ticks":0},"id":"2615","type":"AdaptiveTicker"},{"attributes":{"plot":null,"text":""},"id":"2569","type":"Title"},{"attributes":{"source":{"id":"2601","type":"ColumnDataSource"}},"id":"2608","type":"CDSView"},{"attributes":{"label":{"value":"U18"},"renderers":[{"id":"2607","type":"GlyphRenderer"}]},"id":"2628","type":"LegendItem"},{"attributes":{"mantissas":[1,2,5],"max_interval":500.0,"num_minor_ticks":0},"id":"2614","type":"AdaptiveTicker"},{"attributes":{"months":[0,6]},"id":"2624","type":"MonthsTicker"},{"attributes":{},"id":"2610","type":"DatetimeTickFormatter"},{"attributes":{},"id":"2625","type":"YearsTicker"},{"attributes":{"items":[{"id":"2628","type":"LegendItem"}],"plot":{"id":"2570","subtype":"Figure","type":"Plot"}},"id":"2627","type":"Legend"},{"attributes":{"callback":null,"data":{"VEGAMAG":{"__ndarray__":"rBxaZDufMUCamZmZmZkxQOXQItv5njFAJzEIrByaMUBQjZduEoMxQNNNYhBYeTFAKVyPwvWoMUBI4XoUrqcxQESLbOf7iTFADAIrhxZ5MUDVeOkmMYgxQMP1KFyPgjFAMzMzMzOTMUDl0CLb+Z4xQFK4HoXrkTFAx0s3iUGgMUBEi2zn+6kxQH9qvHSTmDFABFYOLbJ9MUC28/3UeIkxQOF6FK5HgTFAdZMYBFauMUBg5dAi27kxQCUGgZVDqzFAWmQ730+tMUAdWmQ7368xQNejcD0KlzFATmIQWDmUMUArhxbZzpcxQB+F61G4njFAg8DKoUWWMUAGgZVDi4wxQF66SQwCizFAqMZLN4mBMUBQjZduEoMxQOF6FK5HgTFAx0s3iUGAMUAOLbKd74cxQDvfT42XjjFAtvP91HiJMUDpJjEIrHwxQEoMAiuHljFAQmDl0CKbMUC0yHa+n5oxQFTjpZvEoDFAO99PjZeuMUAK16NwPYoxQPhT46WbhDFAEoPAyqGFMUA5tMh2vn8xQDVeukkMgjFADAIrhxZ5MUC0yHa+n3oxQL6fGi/dhDFAL90kBoGVMUD+1HjpJpExQNNNYhBYmTFAXI/C9SicMUB56SYxCIwxQMHKoUW2czFA/Knx0k2CMUCBlUOLbIcxQIlBYOXQgjFAcT0K16NwMUAIrBxaZHsxQDEIrBxahDFAK4cW2c53MUDFILByaJExQMP1KFyPgjFABFYOLbJ9MUDdJAaBlYMxQMuhRbbzfTFAoBov3SSmMUArhxbZzpcxQEoMAiuHljFAaJHtfD+VMUAfhetRuJ4xQCGwcmiRjTFAQmDl0CJ7MUCgGi/dJIYxQKwcWmQ7fzFAGy/dJAahMUAMAiuHFpkxQHe+nxovnTFAarx0kxikMUDP91PjpZsxQFpkO99PrTFARIts5/upMUC0yHa+n3oxQARWDi2yfTFAexSuR+F6MUAhsHJokY0xQHnpJjEIjDFAarx0kxiEMUDP91PjpZsxQPhT46WbpDFA+FPjpZukMUDb+X5qvJQxQL6fGi/dpDFAmpmZmZmZMUC0yHa+n5oxQOXQItv5njFAGy/dJAahMUAtsp3vp4YxQNV46SYxiDFAy6FFtvN9MUAOLbKd74cxQDm0yHa+fzFAjZduEoOAMUD8qfHSTaIxQFg5tMh2njFAuB6F61GYMUA=","dtype":"float64","shape":[112]},"dmag":{"__ndarray__":"/Knx0k1igD/8qfHSTWKAPzvfT42XboI/O99PjZdugj/8qfHSTWKAP/yp8dJNYoA/O99PjZdugj8730+Nl26CPzvfT42XboI//Knx0k1igD/8qfHSTWKAP/yp8dJNYoA/O99PjZdugj/8qfHSTWKAP/yp8dJNYoA//Knx0k1igD8730+Nl26CPzvfT42XboI//Knx0k1igD/8qfHSTWKAP/yp8dJNYoA/exSuR+F6hD8730+Nl26CPzvfT42XboI/O99PjZdugj8730+Nl26CP/yp8dJNYoA//Knx0k1igD/8qfHSTWKAPzvfT42XboI//Knx0k1igD/8qfHSTWKAP/yp8dJNYoA//Knx0k1igD/8qfHSTWKAP/yp8dJNYoA//Knx0k1igD/8qfHSTWKAP/yp8dJNYoA//Knx0k1igD/8qfHSTWKAP/yp8dJNYoA//Knx0k1igD/8qfHSTWKAPzvfT42XboI/O99PjZdugj/8qfHSTWKAP/yp8dJNYoA//Knx0k1igD/8qfHSTWKAP/yp8dJNYoA//Knx0k1igD/8qfHSTWKAP/yp8dJNYoA//Knx0k1igD/8qfHSTWKAP/yp8dJNYoA//Knx0k1igD/8qfHSTWKAP/yp8dJNYoA//Knx0k1igD/8qfHSTWKAP/yp8dJNYoA//Knx0k1igD/8qfHSTWKAP/yp8dJNYoA//Knx0k1igD/8qfHSTWKAP/yp8dJNYoA//Knx0k1igD/8qfHSTWKAP/yp8dJNYoA/O99PjZdugj/8qfHSTWKAP/yp8dJNYoA//Knx0k1igD/8qfHSTWKAPzvfT42XboI//Knx0k1igD/8qfHSTWKAP/yp8dJNYoA/exSuR+F6hD/8qfHSTWKAP3sUrkfheoQ//Knx0k1igD97FK5H4XqEPzvfT42XboI/O99PjZdugj97FK5H4XqEP/yp8dJNYoA//Knx0k1igD97FK5H4XqEP/yp8dJNYoA//Knx0k1igD97FK5H4XqEPzvfT42XboI/O99PjZdugj97FK5H4XqEPzvfT42XboI//Knx0k1igD97FK5H4XqEPzvfT42XboI/O99PjZdugj97FK5H4XqEP/yp8dJNYoA//Knx0k1igD97FK5H4XqEP/yp8dJNYoA//Knx0k1igD97FK5H4XqEP/yp8dJNYoA//Knx0k1igD8=","dtype":"float64","shape":[112]},"lower":{"__ndarray__":"d76fGi+dMUBlO99PjZcxQOkmMQisnDFAK4cW2c6XMUAbL90kBoExQJ7vp8ZLdzFALbKd76emMUBMN4lBYKUxQEjhehSuhzFA16NwPQp3MUCgGi/dJIYxQI6XbhKDgDFAN4lBYOWQMUCwcmiR7ZwxQB1aZDvfjzFAku18PzWeMUBI4XoUrqcxQIPAyqFFljFAz/dT46V7MUCBlUOLbIcxQKwcWmQ7fzFAsp3vp8arMUBkO99PjbcxQClcj8L1qDFAXrpJDAKrMUAhsHJoka0xQKJFtvP9lDFAGQRWDi2SMUD2KFyPwpUxQCPb+X5qnDFATmIQWDmUMUDRItv5fooxQClcj8L1iDFAc2iR7Xx/MUAbL90kBoExQKwcWmQ7fzFAku18PzV+MUDZzvdT44UxQAaBlUOLjDFAgZVDi2yHMUC0yHa+n3oxQBWuR+F6lDFADQIrhxaZMUB/arx0k5gxQFg5tMh2njFAPzVeukmsMUDVeOkmMYgxQMP1KFyPgjFA3SQGgZWDMUAEVg4tsn0xQAAAAAAAgDFA16NwPQp3MUB/arx0k3gxQIlBYOXQgjFA+n5qvHSTMUDJdr6fGo8xQJ7vp8ZLlzFAJzEIrByaMUBEi2zn+4kxQIxs5/upcTFAx0s3iUGAMUBMN4lBYIUxQFTjpZvEgDFAPN9PjZduMUDTTWIQWHkxQPyp8dJNgjFA9ihcj8J1MUCQwvUoXI8xQI6XbhKDgDFAz/dT46V7MUCoxks3iYExQJZDi2znezFApHA9CtejMUD2KFyPwpUxQBWuR+F6lDFAMzMzMzOTMUDqJjEIrJwxQCUGgZVDizFADQIrhxZ5MUBrvHSTGIQxQHe+nxovfTFAWDm0yHaeMUDXo3A9CpcxQLTIdr6fmjFANV66SQyiMUAMAiuHFpkxQF66SQwCqzFASOF6FK6nMUDx0k1iEHgxQM/3U+OlezFARrbz/dR4MUBeukkMAosxQESLbOf7iTFANV66SQyCMUAMAiuHFpkxQPyp8dJNojFA/Knx0k2iMUAYBFYOLZIxQML1KFyPojFAZTvfT42XMUDx0k1iEJgxQOkmMQisnDFAH4XrUbieMUBqvHSTGIQxQKAaL90khjFAlkOLbOd7MUBLN4lBYIUxQARWDi2yfTFAWDm0yHZ+MUA5tMh2vp8xQCPb+X5qnDFAg8DKoUWWMUA=","dtype":"float64","shape":[112]},"mjd":{"__ndarray__":"lRLlDP0a6kC9j7c0/xrqQN+x2VYBG+pAbpUS5Zga6kCQtzQHmxrqQLLZVimdGupAc/DC6sUZ6kCKXIQByBnqQNT7eEufGupA9h2bbaEa6kAYQL2PoxrqQDUHL6ylGupAHpttlYMa6kBAvY+3hRrqQNT7eEs7GepAAtT7eL8Z6kAk9h2bwRnqQEYYQL3DGepAhAHU++cZ6kCsfqYjGxrqQM6gyEUdGupArH6mI04Y6kCy2VYpUBjqQNT7eEtSGOpA9h2bbVQY6kAYQL2PVhjqQPx4S3O/GOpA8MLqZ8EY6kD8eEtzwxjqQC+sfqbHGOpAhAHU+9gY6kCmI/Yd2xjqQM6gyEXdGOpA8MLqZ98Y6kBGGEC94RjqQDpi37HjGOpAXYQB1OUY6kChyEUY6hjqQL2PtzT7GOpA37HZVv0Y6kAC1Pt4/xjqQCT2HZsBGepAYt+x2QMZ6kBulRLlBRnqQJC3NAcIGepAstlWKQoZ6kDD6mc6GxnqQOtnOmIdGepADYpchB8Z6kAvrH6mIRnqQEYYQL1hGepAUc6gyGMZ6kBz8MLqZRnqQJUS5QxoGepA5QyKXH0Z6kAHL6x+fxnqQClRzqCBGepAS3PwwoMZ6kDOoMhFmxnqQOUMilydGepABy+sfp8Z6kApUc6goRnqQEtz8MKjGepA2lYpUd0Z6kD8eEtz3xnqQB6bbZXhGepAQL2Pt+MZ6kApUc6gFhvqQFHOoMgYG+pAc/DC6hob6kCVEuUMHRvqQLg0By8fG+pAeUtz8Hga6kCVEuUMexrqQLg0By99GupA2lYpUX8a6kD8eEtzgRrqQOUMilyUG+pAL6x+ppgb6kBRzqDImhvqQHPwwuqcG+pAS3Pwwjgb6kBoOmLfOhvqQKHIRRh/G+pAvY+3NIEb6kDOoMhFyhjqQHPwwurLGOpAlRLlDM4Y6kBoOmLfIxnqQHPwwuolGepAlRLlDCgZ6kDaVilRWxnqQOtnOmJdGepADYpchF8Z6kB5S3PwhRnqQJC3NAeIGepAstlWKYoZ6kC4NAcv+xnqQNT7eEv9GepA9h2bbf8Z6kAem22VARrqQDpi37EDGupAXYQB1AUa6kDOoMhF3xrqQOUMilzhGupABy+sfuMa6kBoOmLf2BrqQH+mI/baGupAochFGN0a6kA6Yt+x9hrqQFcpUc74GupAeUtz8Poa6kA=","dtype":"float64","shape":[112]},"obnames":[["2005-04-03T21:47:16"],["2005-04-03T23:24:16"],["2005-04-04T01:00:16"],["2005-03-31T18:40:16"],["2005-03-31T20:16:16"],["2005-03-31T21:52:16"],["2005-03-25T04:26:16"],["2005-03-25T06:00:16"],["2005-03-31T23:28:16"],["2005-04-01T01:04:16"],["2005-04-01T02:40:16"],["2005-04-01T04:15:16"],["2005-03-31T02:41:16"],["2005-03-31T04:17:16"],["2005-03-20T20:28:16"],["2005-03-24T23:36:16"],["2005-03-25T01:12:16"],["2005-03-25T02:48:16"],["2005-03-26T05:59:16"],["2005-03-27T20:21:16"],["2005-03-27T21:57:16"],["2005-03-13T10:36:16"],["2005-03-13T12:07:16"],["2005-03-13T13:43:16"],["2005-03-13T15:19:16"],["2005-03-13T16:55:16"],["2005-03-16T23:35:16"],["2005-03-17T01:03:16"],["2005-03-17T02:35:16"],["2005-03-17T05:44:16"],["2005-03-17T18:44:16"],["2005-03-17T20:20:16"],["2005-03-17T21:57:16"],["2005-03-17T23:33:16"],["2005-03-18T01:18:16"],["2005-03-18T02:46:16"],["2005-03-18T04:22:16"],["2005-03-18T07:34:16"],["2005-03-18T20:24:16"],["2005-03-18T22:00:16"],["2005-03-18T23:36:16"],["2005-03-19T01:12:16"],["2005-03-19T02:53:16"],["2005-03-19T04:25:16"],["2005-03-19T06:01:16"],["2005-03-19T07:37:16"],["2005-03-19T20:25:16"],["2005-03-19T22:02:16"],["2005-03-19T23:38:16"],["2005-03-20T01:14:16"],["2005-03-22T01:18:16"],["2005-03-22T02:50:16"],["2005-03-22T04:26:16"],["2005-03-22T06:02:16"],["2005-03-22T22:01:16"],["2005-03-22T23:37:16"],["2005-03-23T01:13:16"],["2005-03-23T02:49:16"],["2005-03-23T20:27:16"],["2005-03-23T22:01:16"],["2005-03-23T23:37:16"],["2005-03-24T01:13:16"],["2005-03-24T02:49:16"],["2005-03-25T21:59:16"],["2005-03-25T23:35:16"],["2005-03-26T01:11:16"],["2005-03-26T02:47:16"],["2005-04-04T16:58:16"],["2005-04-04T18:35:16"],["2005-04-04T20:11:16"],["2005-04-04T21:47:16"],["2005-04-04T23:23:16"],["2005-03-30T18:42:16"],["2005-03-30T20:17:16"],["2005-03-30T21:53:16"],["2005-03-30T23:29:16"],["2005-03-31T01:05:16"],["2005-04-08T15:16:16"],["2005-04-08T18:29:16"],["2005-04-08T20:05:16"],["2005-04-08T21:41:16"],["2005-04-05T18:34:16"],["2005-04-05T20:09:16"],["2005-04-07T23:19:16"],["2005-04-08T00:54:16"],["2005-03-17T07:42:16"],["2005-03-17T08:56:16"],["2005-03-17T10:32:16"],["2005-03-20T02:54:16"],["2005-03-20T04:26:16"],["2005-03-20T06:02:16"],["2005-03-21T20:29:16"],["2005-03-21T22:02:16"],["2005-03-21T23:38:16"],["2005-03-23T04:27:16"],["2005-03-23T06:01:16"],["2005-03-23T07:37:16"],["2005-03-26T20:23:16"],["2005-03-26T21:58:16"],["2005-03-26T23:34:16"],["2005-03-27T01:11:16"],["2005-03-27T02:46:16"],["2005-03-27T04:22:16"],["2005-04-02T23:27:16"],["2005-04-03T01:01:16"],["2005-04-03T02:37:16"],["2005-04-02T18:39:16"],["2005-04-02T20:13:16"],["2005-04-02T21:49:16"],["2005-04-03T17:01:16"],["2005-04-03T18:36:16"],["2005-04-03T20:12:16"]],"time":{"__ndarray__":"AABqgqAwcEIAAFAPpjBwQgAAkI2rMHBCAADonZ4vcEIAACgcpC9wQgAAaJqpL3BCAACkXX8tcEIAAJi+hC1wQgAAqBivL3BCAADolrQvcEIAACgVui9wQgAAwoS/L3BCAAAOvmcvcEIAAE48bS9wQgAAsGwaLHBCAACYxW4tcEIAANhDdC1wQgAAGMJ5LXBCAACyFdctcEIAAGbOWi5wQgAApkxgLnBCAACQxLcpcEIAAJL5vClwQgAA0nfCKXBCAAAS9scpcEIAAFJ0zSlwQgAA8ojbKnBCAAACkuAqcEIAAKrV5SpwQgAAOKbwKnBCAAAASB0rcEIAAEDGIitwQgAAJlMoK3BCAABm0S0rcEIAAHzTMytwQgAAjNw4K3BCAADMWj4rcEIAAExXSStwQgAAmGZ1K3BCAADY5HorcEIAABhjgCtwQgAAWOGFK3BCAADWqIsrcEIAAH7skCtwQgAAvmqWK3BCAAD+6JsrcEIAAP7axytwQgAA5GfNK3BCAAAk5tIrcEIAAGRk2CtwQgAAfGp9LHBCAAAkroIscEIAAGQsiCxwQgAApKqNLHBCAAB+isQscEIAAL4IyixwQgAA/obPLHBCAAA+BdUscEIAAEqPES1wQgAAPvAWLXBCAAB+bhwtcEIAAL7sIS1wQgAA/monLXBCAABynrstcEIAALIcwS1wQgAA8prGLXBCAAAyGcwtcEIAAMRe4jBwQgAAquvnMHBCAADqae0wcEIAACro8jBwQgAAamb4MHBCAAB0VUwvcEIAAA7FUS9wQgAATkNXL3BCAACOwVwvcEIAAM4/Yi9wQgAAoB8mMnBCAADGKjEycEIAAAapNjJwQgAARic8MnBCAADEQjoxcEIAAF6yPzFwQgAAEl3vMXBCAACszPQxcEIAALxm9ypwQgAAuKL7KnBCAAD4IAErcEIAADwd3itwQgAA5GDjK3BCAAAk3+grcEIAABbhbCxwQgAAZDNyLHBCAACksXcscEIAAMqg2ixwQgAAvgHgLHBCAAD+f+UscEIAAPKFCC5wQgAAjPUNLnBCAADMcxMucEIAALIAGS5wQgAATHAeLnBCAACM7iMucEIAAILVUzBwQgAAdjZZMHBCAAC2tF4wcEIAAMJaQzBwQgAAtrtIMHBCAAD2OU4wcEIAAPYkkDBwQgAAkJSVMHBCAADQEpswcEI=","dtype":"float64","shape":[112]},"upper":{"__ndarray__":"4XoUrkehMUDP91PjpZsxQOF6FK5HoTFAI9v5fmqcMUCF61G4HoUxQAisHFpkezFAJQaBlUOrMUBEi2zn+6kxQEA1XrpJjDFAQWDl0CJ7MUAK16NwPYoxQPhT46WbhDFAL90kBoGVMUAaL90kBqExQIcW2c73kzFA/Knx0k2iMUBANV66SawxQHsUrkfhmjFAObTIdr5/MUDrUbgehYsxQBbZzvdTgzFAOIlBYOWwMUBcj8L1KLwxQCGwcmiRrTFAVg4tsp2vMUAZBFYOLbIxQAwCK4cWmTFAg8DKoUWWMUBg5dAi25kxQBsv3SQGoTFAuB6F61GYMUA730+Nl44xQJMYBFYOjTFA3SQGgZWDMUCF61G4HoUxQBbZzvdTgzFA/Knx0k2CMUBDi2zn+4kxQHA9CtejkDFA61G4HoWLMUAehetRuH4xQH9qvHSTmDFAd76fGi+dMUDpJjEIrJwxQFCNl24SozFAN4lBYOWwMUA/NV66SYwxQC2yne+nhjFAR+F6FK6HMUBuEoPAyoExQGq8dJMYhDFAQWDl0CJ7MUDpJjEIrHwxQPP91HjphjFAZDvfT42XMUAzMzMzM5MxQAisHFpkmzFAke18PzWeMUCuR+F6FI4xQPYoXI/CdTFAMQisHFqEMUC28/3UeIkxQL6fGi/dhDFAppvEILByMUA9CtejcH0xQGZmZmZmhjFAYOXQItt5MUD6fmq8dJMxQPhT46WbhDFAObTIdr5/MUASg8DKoYUxQAAAAAAAgDFAnMQgsHKoMUBg5dAi25kxQH9qvHSTmDFAne+nxkuXMUBU46WbxKAxQB1aZDvfjzFAd76fGi99MUDVeOkmMYgxQOF6FK5HgTFA3iQGgZWjMUBBYOXQIpsxQDq0yHa+nzFAnxov3SSmMUCS7Xw/NZ4xQFYOLbKdrzFAQDVeukmsMUB3vp8aL30xQDm0yHa+fzFAsHJoke18MUDkpZvEIJAxQK5H4XoUjjFAnxov3SSGMUCS7Xw/NZ4xQPT91HjppjFA9P3UeOmmMUCe76fGS5cxQLpJDAIrpzFAz/dT46WbMUB3vp8aL50xQOF6FK5HoTFAF9nO91OjMUDwp8ZLN4kxQArXo3A9ijFAAAAAAACAMUDRItv5fooxQG4Sg8DKgTFAwvUoXI+CMUC/nxov3aQxQI2XbhKDoDFA7Xw/NV6aMUA=","dtype":"float64","shape":[112]}},"selected":{"id":"2761","type":"Selection"},"selection_policy":{"id":"2762","type":"UnionRenderers"}},"id":"2601","type":"ColumnDataSource"},{"attributes":{"dimension":1,"plot":{"id":"2570","subtype":"Figure","type":"Plot"},"ticker":{"id":"2586","type":"BasicTicker"}},"id":"2589","type":"Grid"},{"attributes":{},"id":"2586","type":"BasicTicker"},{"attributes":{},"id":"2612","type":"BasicTickFormatter"},{"attributes":{"callback":null},"id":"2572","type":"DataRange1d"},{"attributes":{"base":{"field":"time","units":"data"},"lower":{"field":"lower","units":"data"},"lower_head":{"id":"2717","type":"TeeHead"},"plot":{"id":"2570","subtype":"Figure","type":"Plot"},"source":{"id":"2601","type":"ColumnDataSource"},"upper":{"field":"upper","units":"data"},"upper_head":{"id":"2718","type":"TeeHead"}},"id":"2629","type":"Whisker"},{"attributes":{"active_drag":{"id":"2593","type":"BoxZoomTool"},"active_inspect":"auto","active_multi":null,"active_scroll":{"id":"2592","type":"WheelZoomTool"},"active_tap":"auto","tools":[{"id":"2590","type":"ResetTool"},{"id":"2591","type":"PanTool"},{"id":"2592","type":"WheelZoomTool"},{"id":"2593","type":"BoxZoomTool"},{"id":"2602","type":"HoverTool"}]},"id":"2594","type":"Toolbar"},{"attributes":{"days":[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31]},"id":"2617","type":"DaysTicker"},{"attributes":{},"id":"2590","type":"ResetTool"},{"attributes":{},"id":"2762","type":"UnionRenderers"},{"attributes":{"callback":null,"tooltips":[["Date","(@obnames)"]]},"id":"2602","type":"HoverTool"},{"attributes":{"base":24,"mantissas":[1,2,4,6,8,12],"max_interval":43200000.0,"min_interval":3600000.0,"num_minor_ticks":0},"id":"2616","type":"AdaptiveTicker"},{"attributes":{"level":"underlay","plot":null,"size":10},"id":"2717","type":"TeeHead"}],"root_ids":["2570"]},"title":"Bokeh Application","version":"1.0.2"}}';
                  var render_items = [{"docid":"7d479403-4bab-44f3-928c-f9230d6a9008","roots":{"2570":"5fa85403-d713-4cfe-ba96-e8af81c2bc49"}}];
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