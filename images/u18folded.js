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
      };var element = document.getElementById("2b9a17cc-8338-4b65-976f-87b3e15fc131");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid '2b9a17cc-8338-4b65-976f-87b3e15fc131' but no matching script tag was found. ")
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
                    
                  var docs_json = '{"62618f9d-03f6-42b2-a6eb-4d87828cfd42":{"roots":{"references":[{"attributes":{"below":[{"id":"5302","type":"LinearAxis"}],"left":[{"id":"5307","type":"LinearAxis"}],"plot_height":500,"plot_width":900,"renderers":[{"id":"5302","type":"LinearAxis"},{"id":"5306","type":"Grid"},{"id":"5307","type":"LinearAxis"},{"id":"5311","type":"Grid"},{"id":"5320","type":"BoxAnnotation"},{"id":"5330","type":"Whisker"},{"id":"5335","type":"GlyphRenderer"},{"id":"5342","type":"GlyphRenderer"},{"id":"5338","type":"ColorBar"}],"right":[{"id":"5338","type":"ColorBar"}],"title":{"id":"5291","type":"Title"},"toolbar":{"id":"5318","type":"Toolbar"},"x_range":{"id":"5294","type":"DataRange1d"},"x_scale":{"id":"5298","type":"LinearScale"},"y_range":{"id":"5296","type":"DataRange1d"},"y_scale":{"id":"5300","type":"LinearScale"}},"id":"5292","subtype":"Figure","type":"Plot"},{"attributes":{},"id":"5317","type":"HelpTool"},{"attributes":{"source":{"id":"5332","type":"ColumnDataSource"}},"id":"5336","type":"CDSView"},{"attributes":{"axis_label":"F336W","formatter":{"id":"5563","type":"BasicTickFormatter"},"plot":{"id":"5292","subtype":"Figure","type":"Plot"},"ticker":{"id":"5308","type":"BasicTicker"}},"id":"5307","type":"LinearAxis"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"plot":null,"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"5320","type":"BoxAnnotation"},{"attributes":{"plot":null,"text":"U18 Period: 1.9831 days"},"id":"5291","type":"Title"},{"attributes":{"source":{"id":"5327","type":"ColumnDataSource"}},"id":"5343","type":"CDSView"},{"attributes":{"plot":{"id":"5292","subtype":"Figure","type":"Plot"},"ticker":{"id":"5303","type":"BasicTicker"}},"id":"5306","type":"Grid"},{"attributes":{"axis_label":"Phase","formatter":{"id":"5561","type":"BasicTickFormatter"},"plot":{"id":"5292","subtype":"Figure","type":"Plot"},"ticker":{"id":"5303","type":"BasicTicker"}},"id":"5302","type":"LinearAxis"},{"attributes":{},"id":"5308","type":"BasicTicker"},{"attributes":{},"id":"5563","type":"BasicTickFormatter"},{"attributes":{"callback":null,"data":{"x":{"__ndarray__":"AAAAAAAAAAA1J4G4UHOCPzUngbhQc5I/0LrBFPmsmz81J4G4UHOiPwJxoeYkEKc/0LrBFPmsqz9OAnGh5iSwPzUngbhQc7I/HEyRz7rBtD8CcaHmJBC3P+mVsf2OXrk/0LrBFPmsuz+239ErY/u9P04CcaHmJMA/whT5rBtMwT81J4G4UHPCP6g5CcSFmsM/HEyRz7rBxD+PXhnb7+jFPwJxoeYkEMc/doMp8lk3yD/plbH9jl7JP1yoOQnEhco/0LrBFPmsyz9DzUkgLtTMP7bf0Stj+80/KfJZN5gizz9OAnGh5iTQP4gLNSeBuNA/whT5rBtM0T/7Hb0ytt/RPzUngbhQc9I/bzBFPusG0z+oOQnEhZrTP+JCzUkgLtQ/HEyRz7rB1D9VVVVVVVXVP49eGdvv6NU/yWfdYIp81j8CcaHmJBDXPzx6ZWy/o9c/doMp8lk32D+vjO139MrYP+mVsf2OXtk/I591gyny2T9cqDkJxIXaP5ax/Y5eGds/0LrBFPms2z8JxIWak0DcP0PNSSAu1Nw/fNYNpshn3T+239ErY/vdP/DolbH9jt4/KfJZN5gi3z9j+x29MrbfP04CcaHmJOA/6wZT5LNu4D+ICzUngbjgPyUQF2pOAuE/whT5rBtM4T9fGdvv6JXhP/sdvTK23+E/mCKfdYMp4j81J4G4UHPiP9IrY/sdveI/bzBFPusG4z8LNSeBuFDjP6g5CcSFmuM/RT7rBlPk4z/iQs1JIC7kP39Hr4ztd+Q/HEyRz7rB5D+4UHMSiAvlP1VVVVVVVeU/8lk3mCKf5T+PXhnb7+jlPyxj+x29MuY/yWfdYIp85j9lbL+jV8bmPwJxoeYkEOc/n3WDKfJZ5z88emVsv6PnP9l+R6+M7ec/doMp8lk36D8SiAs1J4HoP6+M7Xf0yug/TJHPusEU6T/plbH9jl7pP4aak0BcqOk/I591gyny6T+/o1fG9jvqP1yoOQnEheo/+awbTJHP6j+Wsf2OXhnrPzO239ErY+s/0LrBFPms6z9sv6NXxvbrPwnEhZqTQOw/pshn3WCK7D9DzUkgLtTsP+DRK2P7He0/fNYNpshn7T8Z2+/olbHtP7bf0Stj++0/U+SzbjBF7j/w6JWx/Y7uP43td/TK2O4/KfJZN5gi7z/G9jt6ZWzvP2P7Hb0ytu8/AAAAAAAA8D8=","dtype":"float64","shape":[112]},"y":{"__ndarray__":"NaAlP3WPMUBG6eejh5AxQFv+lQOZkTFA8hcCfqiSMUB1XYw0tZMxQB912Uq+lDFA0DeH58KVMUC59N40wpYxQJOyhGG7lzFAwt4ioa2YMUCG3REtmJkxQOjx+kR6mjFAsPd1L1ObMUAmbqE6IpwxQORWtLzmnDFAEnGJFKCdMUDyXiOqTZ4xQFFJKe/unjFApZpbX4OfMUAvcgCBCqAxQB12R+WDoDFA3bKkKO+gMUAePSLzS6ExQIdTqPiZoTFA+cQ7+dihMUBDaDLBCKIxQCd6XSkpojFAEb8pFzqiMUAFTrV8O6IxQP/y2lgtojFAZR8ztw+iMUDDZwqw4qExQKaWTWimoTFA4GRrEVuhMUAc8CvpAKExQOkQfjmYoDFA5Lk6WCGgMUCakd6mnJ8xQPcAOpIKnzFAwvcXkmueMUBUsNsowJ0xQCHDFeMInTFAvOEQV0acMUDVl1YkeZsxQFF3LPOhmjFAwRoKdMGZMUBQbwhf2JgxQPK8SnPnlzFAhOhhdu+WMUB1cKoz8ZUxQNGopXvtlDFAcb9OI+WTMUCBFGwD2ZIxQJp23ffJkTFAOdTn3riQMUBn9n6Ypo8xQBTajQWUjjFAtT4+B4KNMUBwAUB+cYwxQDjcEEpjizFA9B9FSFiKMUAEANJTUYkxQBIEWkRPiDFAhjN87VKHMUCKiyYeXYYxQPtN7J9uhTFAaLRgNoiEMUCvjnaeqoMxQL5Q5Y3WgjFAgg6UsgyCMUBE4AqyTYExQFck6yiagDFAbQ1vqvJ/MUD15vC/V38xQGZyeujJfjFA+LlcmEl+MUAZrtA4130xQPDboCdzfTFAn4Pcth19MUBaTZQs13wxQJHUoMKffDFAKzhzpnd8MUDi1u/4XnwxQCRWU85VfDFAvQkiLlx8MUDKySETcnwxQBE8XmuXfDFAPo03GMx8MUDgjXvuD30xQKMeibZifTFAqc59LMR9MUCshm0ANH4xQCkTpNaxfjFA8lfwRz1/MUBk7/jh1X8xQOnvmSd7gDFA4IpLkSyBMUC6MJGN6YExQDjfcIGxgjFA4TfyyIODMUCI9qS3X4QxQJpZLplEhTFANQjdsTGGMUDO/EI/JocxQCH21HghiDFAtOuOkCKJMUAN/5yzKIoxQBFfCAszizFAw49nvECMMUDfhZHqUI0xQF0DU7ZijjFANaAlP3WPMUA=","dtype":"float64","shape":[112]}},"selected":{"id":"5572","type":"Selection"},"selection_policy":{"id":"5573","type":"UnionRenderers"}},"id":"5332","type":"ColumnDataSource"},{"attributes":{},"id":"5561","type":"BasicTickFormatter"},{"attributes":{"level":"underlay","plot":null,"size":10},"id":"5565","type":"TeeHead"},{"attributes":{"callback":null,"data":{"VEGAMAG":{"__ndarray__":"rBxaZDufMUCamZmZmZkxQOXQItv5njFAJzEIrByaMUBQjZduEoMxQNNNYhBYeTFAKVyPwvWoMUBI4XoUrqcxQESLbOf7iTFADAIrhxZ5MUDVeOkmMYgxQMP1KFyPgjFAMzMzMzOTMUDl0CLb+Z4xQFK4HoXrkTFAx0s3iUGgMUBEi2zn+6kxQH9qvHSTmDFABFYOLbJ9MUC28/3UeIkxQOF6FK5HgTFAdZMYBFauMUBg5dAi27kxQCUGgZVDqzFAWmQ730+tMUAdWmQ7368xQNejcD0KlzFATmIQWDmUMUArhxbZzpcxQB+F61G4njFAg8DKoUWWMUAGgZVDi4wxQF66SQwCizFAqMZLN4mBMUBQjZduEoMxQOF6FK5HgTFAx0s3iUGAMUAOLbKd74cxQDvfT42XjjFAtvP91HiJMUDpJjEIrHwxQEoMAiuHljFAQmDl0CKbMUC0yHa+n5oxQFTjpZvEoDFAO99PjZeuMUAK16NwPYoxQPhT46WbhDFAEoPAyqGFMUA5tMh2vn8xQDVeukkMgjFADAIrhxZ5MUC0yHa+n3oxQL6fGi/dhDFAL90kBoGVMUD+1HjpJpExQNNNYhBYmTFAXI/C9SicMUB56SYxCIwxQMHKoUW2czFA/Knx0k2CMUCBlUOLbIcxQIlBYOXQgjFAcT0K16NwMUAIrBxaZHsxQDEIrBxahDFAK4cW2c53MUDFILByaJExQMP1KFyPgjFABFYOLbJ9MUDdJAaBlYMxQMuhRbbzfTFAoBov3SSmMUArhxbZzpcxQEoMAiuHljFAaJHtfD+VMUAfhetRuJ4xQCGwcmiRjTFAQmDl0CJ7MUCgGi/dJIYxQKwcWmQ7fzFAGy/dJAahMUAMAiuHFpkxQHe+nxovnTFAarx0kxikMUDP91PjpZsxQFpkO99PrTFARIts5/upMUC0yHa+n3oxQARWDi2yfTFAexSuR+F6MUAhsHJokY0xQHnpJjEIjDFAarx0kxiEMUDP91PjpZsxQPhT46WbpDFA+FPjpZukMUDb+X5qvJQxQL6fGi/dpDFAmpmZmZmZMUC0yHa+n5oxQOXQItv5njFAGy/dJAahMUAtsp3vp4YxQNV46SYxiDFAy6FFtvN9MUAOLbKd74cxQDm0yHa+fzFAjZduEoOAMUD8qfHSTaIxQFg5tMh2njFAuB6F61GYMUA=","dtype":"float64","shape":[112]},"dmag":{"__ndarray__":"/Knx0k1igD/8qfHSTWKAPzvfT42XboI/O99PjZdugj/8qfHSTWKAP/yp8dJNYoA/O99PjZdugj8730+Nl26CPzvfT42XboI//Knx0k1igD/8qfHSTWKAP/yp8dJNYoA/O99PjZdugj/8qfHSTWKAP/yp8dJNYoA//Knx0k1igD8730+Nl26CPzvfT42XboI//Knx0k1igD/8qfHSTWKAP/yp8dJNYoA/exSuR+F6hD8730+Nl26CPzvfT42XboI/O99PjZdugj8730+Nl26CP/yp8dJNYoA//Knx0k1igD/8qfHSTWKAPzvfT42XboI//Knx0k1igD/8qfHSTWKAP/yp8dJNYoA//Knx0k1igD/8qfHSTWKAP/yp8dJNYoA//Knx0k1igD/8qfHSTWKAP/yp8dJNYoA//Knx0k1igD/8qfHSTWKAP/yp8dJNYoA//Knx0k1igD/8qfHSTWKAPzvfT42XboI/O99PjZdugj/8qfHSTWKAP/yp8dJNYoA//Knx0k1igD/8qfHSTWKAP/yp8dJNYoA//Knx0k1igD/8qfHSTWKAP/yp8dJNYoA//Knx0k1igD/8qfHSTWKAP/yp8dJNYoA//Knx0k1igD/8qfHSTWKAP/yp8dJNYoA//Knx0k1igD/8qfHSTWKAP/yp8dJNYoA//Knx0k1igD/8qfHSTWKAP/yp8dJNYoA//Knx0k1igD/8qfHSTWKAP/yp8dJNYoA//Knx0k1igD/8qfHSTWKAP/yp8dJNYoA/O99PjZdugj/8qfHSTWKAP/yp8dJNYoA//Knx0k1igD/8qfHSTWKAPzvfT42XboI//Knx0k1igD/8qfHSTWKAP/yp8dJNYoA/exSuR+F6hD/8qfHSTWKAP3sUrkfheoQ//Knx0k1igD97FK5H4XqEPzvfT42XboI/O99PjZdugj97FK5H4XqEP/yp8dJNYoA//Knx0k1igD97FK5H4XqEP/yp8dJNYoA//Knx0k1igD97FK5H4XqEPzvfT42XboI/O99PjZdugj97FK5H4XqEPzvfT42XboI//Knx0k1igD97FK5H4XqEPzvfT42XboI/O99PjZdugj97FK5H4XqEP/yp8dJNYoA//Knx0k1igD97FK5H4XqEP/yp8dJNYoA//Knx0k1igD97FK5H4XqEP/yp8dJNYoA//Knx0k1igD8=","dtype":"float64","shape":[112]},"lower":{"__ndarray__":"d76fGi+dMUBlO99PjZcxQOkmMQisnDFAK4cW2c6XMUAbL90kBoExQJ7vp8ZLdzFALbKd76emMUBMN4lBYKUxQEjhehSuhzFA16NwPQp3MUCgGi/dJIYxQI6XbhKDgDFAN4lBYOWQMUCwcmiR7ZwxQB1aZDvfjzFAku18PzWeMUBI4XoUrqcxQIPAyqFFljFAz/dT46V7MUCBlUOLbIcxQKwcWmQ7fzFAsp3vp8arMUBkO99PjbcxQClcj8L1qDFAXrpJDAKrMUAhsHJoka0xQKJFtvP9lDFAGQRWDi2SMUD2KFyPwpUxQCPb+X5qnDFATmIQWDmUMUDRItv5fooxQClcj8L1iDFAc2iR7Xx/MUAbL90kBoExQKwcWmQ7fzFAku18PzV+MUDZzvdT44UxQAaBlUOLjDFAgZVDi2yHMUC0yHa+n3oxQBWuR+F6lDFADQIrhxaZMUB/arx0k5gxQFg5tMh2njFAPzVeukmsMUDVeOkmMYgxQMP1KFyPgjFA3SQGgZWDMUAEVg4tsn0xQAAAAAAAgDFA16NwPQp3MUB/arx0k3gxQIlBYOXQgjFA+n5qvHSTMUDJdr6fGo8xQJ7vp8ZLlzFAJzEIrByaMUBEi2zn+4kxQIxs5/upcTFAx0s3iUGAMUBMN4lBYIUxQFTjpZvEgDFAPN9PjZduMUDTTWIQWHkxQPyp8dJNgjFA9ihcj8J1MUCQwvUoXI8xQI6XbhKDgDFAz/dT46V7MUCoxks3iYExQJZDi2znezFApHA9CtejMUD2KFyPwpUxQBWuR+F6lDFAMzMzMzOTMUDqJjEIrJwxQCUGgZVDizFADQIrhxZ5MUBrvHSTGIQxQHe+nxovfTFAWDm0yHaeMUDXo3A9CpcxQLTIdr6fmjFANV66SQyiMUAMAiuHFpkxQF66SQwCqzFASOF6FK6nMUDx0k1iEHgxQM/3U+OlezFARrbz/dR4MUBeukkMAosxQESLbOf7iTFANV66SQyCMUAMAiuHFpkxQPyp8dJNojFA/Knx0k2iMUAYBFYOLZIxQML1KFyPojFAZTvfT42XMUDx0k1iEJgxQOkmMQisnDFAH4XrUbieMUBqvHSTGIQxQKAaL90khjFAlkOLbOd7MUBLN4lBYIUxQARWDi2yfTFAWDm0yHZ+MUA5tMh2vp8xQCPb+X5qnDFAg8DKoUWWMUA=","dtype":"float64","shape":[112]},"mjd":{"__ndarray__":"lRLlDP0a6kC9j7c0/xrqQN+x2VYBG+pAbpUS5Zga6kCQtzQHmxrqQLLZVimdGupAc/DC6sUZ6kCKXIQByBnqQNT7eEufGupA9h2bbaEa6kAYQL2PoxrqQDUHL6ylGupAHpttlYMa6kBAvY+3hRrqQNT7eEs7GepAAtT7eL8Z6kAk9h2bwRnqQEYYQL3DGepAhAHU++cZ6kCsfqYjGxrqQM6gyEUdGupArH6mI04Y6kCy2VYpUBjqQNT7eEtSGOpA9h2bbVQY6kAYQL2PVhjqQPx4S3O/GOpA8MLqZ8EY6kD8eEtzwxjqQC+sfqbHGOpAhAHU+9gY6kCmI/Yd2xjqQM6gyEXdGOpA8MLqZ98Y6kBGGEC94RjqQDpi37HjGOpAXYQB1OUY6kChyEUY6hjqQL2PtzT7GOpA37HZVv0Y6kAC1Pt4/xjqQCT2HZsBGepAYt+x2QMZ6kBulRLlBRnqQJC3NAcIGepAstlWKQoZ6kDD6mc6GxnqQOtnOmIdGepADYpchB8Z6kAvrH6mIRnqQEYYQL1hGepAUc6gyGMZ6kBz8MLqZRnqQJUS5QxoGepA5QyKXH0Z6kAHL6x+fxnqQClRzqCBGepAS3PwwoMZ6kDOoMhFmxnqQOUMilydGepABy+sfp8Z6kApUc6goRnqQEtz8MKjGepA2lYpUd0Z6kD8eEtz3xnqQB6bbZXhGepAQL2Pt+MZ6kApUc6gFhvqQFHOoMgYG+pAc/DC6hob6kCVEuUMHRvqQLg0By8fG+pAeUtz8Hga6kCVEuUMexrqQLg0By99GupA2lYpUX8a6kD8eEtzgRrqQOUMilyUG+pAL6x+ppgb6kBRzqDImhvqQHPwwuqcG+pAS3Pwwjgb6kBoOmLfOhvqQKHIRRh/G+pAvY+3NIEb6kDOoMhFyhjqQHPwwurLGOpAlRLlDM4Y6kBoOmLfIxnqQHPwwuolGepAlRLlDCgZ6kDaVilRWxnqQOtnOmJdGepADYpchF8Z6kB5S3PwhRnqQJC3NAeIGepAstlWKYoZ6kC4NAcv+xnqQNT7eEv9GepA9h2bbf8Z6kAem22VARrqQDpi37EDGupAXYQB1AUa6kDOoMhF3xrqQOUMilzhGupABy+sfuMa6kBoOmLf2BrqQH+mI/baGupAochFGN0a6kA6Yt+x9hrqQFcpUc74GupAeUtz8Poa6kA=","dtype":"float64","shape":[112]},"obname":[["2005-04-03T21:47:16"],["2005-04-03T23:24:16"],["2005-04-04T01:00:16"],["2005-03-31T18:40:16"],["2005-03-31T20:16:16"],["2005-03-31T21:52:16"],["2005-03-25T04:26:16"],["2005-03-25T06:00:16"],["2005-03-31T23:28:16"],["2005-04-01T01:04:16"],["2005-04-01T02:40:16"],["2005-04-01T04:15:16"],["2005-03-31T02:41:16"],["2005-03-31T04:17:16"],["2005-03-20T20:28:16"],["2005-03-24T23:36:16"],["2005-03-25T01:12:16"],["2005-03-25T02:48:16"],["2005-03-26T05:59:16"],["2005-03-27T20:21:16"],["2005-03-27T21:57:16"],["2005-03-13T10:36:16"],["2005-03-13T12:07:16"],["2005-03-13T13:43:16"],["2005-03-13T15:19:16"],["2005-03-13T16:55:16"],["2005-03-16T23:35:16"],["2005-03-17T01:03:16"],["2005-03-17T02:35:16"],["2005-03-17T05:44:16"],["2005-03-17T18:44:16"],["2005-03-17T20:20:16"],["2005-03-17T21:57:16"],["2005-03-17T23:33:16"],["2005-03-18T01:18:16"],["2005-03-18T02:46:16"],["2005-03-18T04:22:16"],["2005-03-18T07:34:16"],["2005-03-18T20:24:16"],["2005-03-18T22:00:16"],["2005-03-18T23:36:16"],["2005-03-19T01:12:16"],["2005-03-19T02:53:16"],["2005-03-19T04:25:16"],["2005-03-19T06:01:16"],["2005-03-19T07:37:16"],["2005-03-19T20:25:16"],["2005-03-19T22:02:16"],["2005-03-19T23:38:16"],["2005-03-20T01:14:16"],["2005-03-22T01:18:16"],["2005-03-22T02:50:16"],["2005-03-22T04:26:16"],["2005-03-22T06:02:16"],["2005-03-22T22:01:16"],["2005-03-22T23:37:16"],["2005-03-23T01:13:16"],["2005-03-23T02:49:16"],["2005-03-23T20:27:16"],["2005-03-23T22:01:16"],["2005-03-23T23:37:16"],["2005-03-24T01:13:16"],["2005-03-24T02:49:16"],["2005-03-25T21:59:16"],["2005-03-25T23:35:16"],["2005-03-26T01:11:16"],["2005-03-26T02:47:16"],["2005-04-04T16:58:16"],["2005-04-04T18:35:16"],["2005-04-04T20:11:16"],["2005-04-04T21:47:16"],["2005-04-04T23:23:16"],["2005-03-30T18:42:16"],["2005-03-30T20:17:16"],["2005-03-30T21:53:16"],["2005-03-30T23:29:16"],["2005-03-31T01:05:16"],["2005-04-08T15:16:16"],["2005-04-08T18:29:16"],["2005-04-08T20:05:16"],["2005-04-08T21:41:16"],["2005-04-05T18:34:16"],["2005-04-05T20:09:16"],["2005-04-07T23:19:16"],["2005-04-08T00:54:16"],["2005-03-17T07:42:16"],["2005-03-17T08:56:16"],["2005-03-17T10:32:16"],["2005-03-20T02:54:16"],["2005-03-20T04:26:16"],["2005-03-20T06:02:16"],["2005-03-21T20:29:16"],["2005-03-21T22:02:16"],["2005-03-21T23:38:16"],["2005-03-23T04:27:16"],["2005-03-23T06:01:16"],["2005-03-23T07:37:16"],["2005-03-26T20:23:16"],["2005-03-26T21:58:16"],["2005-03-26T23:34:16"],["2005-03-27T01:11:16"],["2005-03-27T02:46:16"],["2005-03-27T04:22:16"],["2005-04-02T23:27:16"],["2005-04-03T01:01:16"],["2005-04-03T02:37:16"],["2005-04-02T18:39:16"],["2005-04-02T20:13:16"],["2005-04-02T21:49:16"],["2005-04-03T17:01:16"],["2005-04-03T18:36:16"],["2005-04-03T20:12:16"]],"phase":{"__ndarray__":"AABOAPUGxD8AAG69GGrIPwAABFGowcw/AADdbV8L4j8AgMJSQyHjPwAAqDcnN+Q/AADQQ8HEyj8AAFSEKAXPPwCAjRwLTeU/AABzAe9i5j8AgFjm0njnPwAA3MDRi+g/AAAiHXbNzD8AAFzYgpLQPwAAwLmjDnQ/AAD4a9RNuz8AAJLJef7BPwAAKF0JVsY/AAAlgL8G6D8AAOTgUg7iPwCAycU2JOM/AAAoh/HvzT8AAIglzgbRPwAAU++VMtM/AAAduV1e1T8AAOiCJYrXPwAAgHgjQKI/AADUSu4VsT8AALQlbGi5PwAAar2YQMU/AABGpgNE3D8AABFwy2/ePwAAUKeuUOA/AIA1jJJm4T8AAJHOg5biPwAAY2A/leM/AABJRSOr5D8AABQP69bmPwCABEvUi+8/AABA/QU3lD8AAABNwXmrPwAArM3/a7Y/AAA0lOiOvz8AAIo3s/DDPwAAIMtCSMg/AAC2XtKfzD8AALN9J67fPwCAIa7c7+A/AAAHk8AF4j8AgOx3pBvjPwAAW3Ttt+M/AAC3Lz3C5D8AgJwUIdjlPwAAgvkE7uY/AABoAW5grD8AAOAnVt+2PwAADE91jr8/AAAcO8oexD8AgGh5R/7gPwAAiUlhDuI/AIBuLkUk4z8AAFQTKTrkPwCAOfgMUOU/AICpB0yZ4j8AAI/sL6/jPwCAdNETxeQ/AABatvfa5T8AAHPwhgXiPwAAu99PHuM/AICgxDM05D8AAIapF0rlPwAAbI77X+Y/AADwkvGMrD8AAJCdb962PwAAwMSOjb8/AAD29VYexD8AAIyJ5nXIPwCACXOu/+E/AAA3R1su5D8AgBwsP0TlPwAAAhEjWuY/AABY9ikeuz8AADplENvBPwAA6ITatcw/AAB69+qA0D8AANDi45bKPwAAlOS3780/AAAVvKMj0T8AgFuGHD3kPwCAt0FsR+U/AICcJlBd5j8AgEi7XHPgPwCABoGRgOE/AADsZXWW4j8AAMYhgo3IPwAASmLpzcw/AADveryS0D8AAHDDKLysPwAAzDUL9rY/AAD4XCqlvz8AAJzruDXEPwAAqFW0gcg/AABA6UPZzD8AABDl2trlPwAAMbX06uY/AIAWmtgA6D8AgF82L5niPwCAgAZJqeM/AABm6yy/5D8AAHhiul2sPwAAWAXUxrY/AACELPN1vz8=","dtype":"float64","shape":[112]},"upper":{"__ndarray__":"4XoUrkehMUDP91PjpZsxQOF6FK5HoTFAI9v5fmqcMUCF61G4HoUxQAisHFpkezFAJQaBlUOrMUBEi2zn+6kxQEA1XrpJjDFAQWDl0CJ7MUAK16NwPYoxQPhT46WbhDFAL90kBoGVMUAaL90kBqExQIcW2c73kzFA/Knx0k2iMUBANV66SawxQHsUrkfhmjFAObTIdr5/MUDrUbgehYsxQBbZzvdTgzFAOIlBYOWwMUBcj8L1KLwxQCGwcmiRrTFAVg4tsp2vMUAZBFYOLbIxQAwCK4cWmTFAg8DKoUWWMUBg5dAi25kxQBsv3SQGoTFAuB6F61GYMUA730+Nl44xQJMYBFYOjTFA3SQGgZWDMUCF61G4HoUxQBbZzvdTgzFA/Knx0k2CMUBDi2zn+4kxQHA9CtejkDFA61G4HoWLMUAehetRuH4xQH9qvHSTmDFAd76fGi+dMUDpJjEIrJwxQFCNl24SozFAN4lBYOWwMUA/NV66SYwxQC2yne+nhjFAR+F6FK6HMUBuEoPAyoExQGq8dJMYhDFAQWDl0CJ7MUDpJjEIrHwxQPP91HjphjFAZDvfT42XMUAzMzMzM5MxQAisHFpkmzFAke18PzWeMUCuR+F6FI4xQPYoXI/CdTFAMQisHFqEMUC28/3UeIkxQL6fGi/dhDFAppvEILByMUA9CtejcH0xQGZmZmZmhjFAYOXQItt5MUD6fmq8dJMxQPhT46WbhDFAObTIdr5/MUASg8DKoYUxQAAAAAAAgDFAnMQgsHKoMUBg5dAi25kxQH9qvHSTmDFAne+nxkuXMUBU46WbxKAxQB1aZDvfjzFAd76fGi99MUDVeOkmMYgxQOF6FK5HgTFA3iQGgZWjMUBBYOXQIpsxQDq0yHa+nzFAnxov3SSmMUCS7Xw/NZ4xQFYOLbKdrzFAQDVeukmsMUB3vp8aL30xQDm0yHa+fzFAsHJoke18MUDkpZvEIJAxQK5H4XoUjjFAnxov3SSGMUCS7Xw/NZ4xQPT91HjppjFA9P3UeOmmMUCe76fGS5cxQLpJDAIrpzFAz/dT46WbMUB3vp8aL50xQOF6FK5HoTFAF9nO91OjMUDwp8ZLN4kxQArXo3A9ijFAAAAAAACAMUDRItv5fooxQG4Sg8DKgTFAwvUoXI+CMUC/nxov3aQxQI2XbhKDoDFA7Xw/NV6aMUA=","dtype":"float64","shape":[112]}},"selected":{"id":"5570","type":"Selection"},"selection_policy":{"id":"5571","type":"UnionRenderers"}},"id":"5327","type":"ColumnDataSource"},{"attributes":{"level":"underlay","plot":null,"size":10},"id":"5566","type":"TeeHead"},{"attributes":{},"id":"5567","type":"BasicTickFormatter"},{"attributes":{},"id":"5568","type":"BasicTicker"},{"attributes":{"data_source":{"id":"5332","type":"ColumnDataSource"},"glyph":{"id":"5333","type":"Line"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"5334","type":"Line"},"selection_glyph":null,"view":{"id":"5336","type":"CDSView"}},"id":"5335","type":"GlyphRenderer"},{"attributes":{},"id":"5570","type":"Selection"},{"attributes":{},"id":"5313","type":"WheelZoomTool"},{"attributes":{"data_source":{"id":"5327","type":"ColumnDataSource"},"glyph":{"id":"5340","type":"Circle"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"5341","type":"Circle"},"selection_glyph":null,"view":{"id":"5343","type":"CDSView"}},"id":"5342","type":"GlyphRenderer"},{"attributes":{},"id":"5571","type":"UnionRenderers"},{"attributes":{"dimension":1,"plot":{"id":"5292","subtype":"Figure","type":"Plot"},"ticker":{"id":"5308","type":"BasicTicker"}},"id":"5311","type":"Grid"},{"attributes":{"callback":null,"tooltips":[["Date","(@obname"]]},"id":"5328","type":"HoverTool"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"x":{"field":"phase"},"y":{"field":"VEGAMAG"}},"id":"5341","type":"Circle"},{"attributes":{},"id":"5572","type":"Selection"},{"attributes":{"callback":null,"flipped":true},"id":"5296","type":"DataRange1d"},{"attributes":{},"id":"5303","type":"BasicTicker"},{"attributes":{},"id":"5316","type":"ResetTool"},{"attributes":{"line_color":"#1f77b4","x":{"field":"x"},"y":{"field":"y"}},"id":"5333","type":"Line"},{"attributes":{"active_drag":{"id":"5312","type":"PanTool"},"active_inspect":"auto","active_multi":null,"active_scroll":{"id":"5313","type":"WheelZoomTool"},"active_tap":"auto","tools":[{"id":"5312","type":"PanTool"},{"id":"5313","type":"WheelZoomTool"},{"id":"5314","type":"BoxZoomTool"},{"id":"5315","type":"SaveTool"},{"id":"5316","type":"ResetTool"},{"id":"5317","type":"HelpTool"},{"id":"5328","type":"HoverTool"}]},"id":"5318","type":"Toolbar"},{"attributes":{"color_mapper":{"id":"5337","type":"LinearColorMapper"},"formatter":{"id":"5567","type":"BasicTickFormatter"},"location":[0,0.5],"plot":{"id":"5292","subtype":"Figure","type":"Plot"},"ticker":{"id":"5568","type":"BasicTicker"},"title":"MJD"},"id":"5338","type":"ColorBar"},{"attributes":{"callback":null},"id":"5294","type":"DataRange1d"},{"attributes":{"overlay":{"id":"5320","type":"BoxAnnotation"}},"id":"5314","type":"BoxZoomTool"},{"attributes":{"base":{"field":"phase","units":"data"},"lower":{"field":"lower","units":"data"},"lower_head":{"id":"5565","type":"TeeHead"},"plot":{"id":"5292","subtype":"Figure","type":"Plot"},"source":{"id":"5327","type":"ColumnDataSource"},"upper":{"field":"upper","units":"data"},"upper_head":{"id":"5566","type":"TeeHead"}},"id":"5330","type":"Whisker"},{"attributes":{},"id":"5315","type":"SaveTool"},{"attributes":{"line_alpha":0.1,"line_color":"#1f77b4","x":{"field":"x"},"y":{"field":"y"}},"id":"5334","type":"Line"},{"attributes":{"fill_color":{"field":"mjd","transform":{"id":"5337","type":"LinearColorMapper"}},"line_color":{"field":"mjd","transform":{"id":"5337","type":"LinearColorMapper"}},"x":{"field":"phase"},"y":{"field":"VEGAMAG"}},"id":"5340","type":"Circle"},{"attributes":{},"id":"5298","type":"LinearScale"},{"attributes":{},"id":"5573","type":"UnionRenderers"},{"attributes":{"high":53468.903657407405,"low":53442.44185185185,"palette":["#000003","#000006","#010109","#02010E","#040314","#050418","#07051D","#0A0723","#0D0828","#0F092D","#120A32","#160B39","#190B3E","#1C0C43","#200C4A","#240B4E","#270B52","#2D0A58","#300A5C","#34095F","#370961","#3C0965","#400966","#430A68","#480B6A","#4B0C6B","#4F0D6C","#530E6D","#570F6D","#5A116D","#5D126E","#62146E","#65156E","#68166E","#6D186E","#70196E","#731A6D","#781C6D","#7B1D6C","#7E1E6C","#811F6B","#86216A","#892269","#8D2369","#912567","#952666","#982765","#9B2864","#A02A62","#A32B61","#A62C5F","#AB2E5D","#AE305B","#B1315A","#B53357","#B83556","#BB3754","#BE3852","#C23B4F","#C53D4D","#C83E4B","#CC4148","#CF4446","#D14643","#D54940","#D74B3E","#DA4E3B","#DC5039","#DF5436","#E25733","#E45A31","#E65E2D","#E8612B","#EA6428","#ED6825","#EE6C22","#F06F1F","#F1721D","#F37719","#F47A16","#F57E14","#F78310","#F8870D","#F88A0B","#F98E08","#FA9306","#FA9706","#FB9B06","#FBA007","#FBA40A","#FBA80D","#FBAE12","#FBB116","#FBB51A","#FBB91E","#FABF25","#F9C32A","#F9C72F","#F8CD37","#F7D13C","#F6D542","#F4DB4B","#F3DE52","#F3E259","#F2E660","#F1EB6C","#F1EE74","#F1F27D","#F3F689","#F5F891","#F7FB99","#FCFEA4"]},"id":"5337","type":"LinearColorMapper"},{"attributes":{},"id":"5312","type":"PanTool"},{"attributes":{},"id":"5300","type":"LinearScale"}],"root_ids":["5292"]},"title":"Bokeh Application","version":"1.0.2"}}';
                  var render_items = [{"docid":"62618f9d-03f6-42b2-a6eb-4d87828cfd42","roots":{"5292":"2b9a17cc-8338-4b65-976f-87b3e15fc131"}}];
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