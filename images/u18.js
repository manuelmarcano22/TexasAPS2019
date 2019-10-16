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
      };var element = document.getElementById("b11b7e08-cbe1-46e4-b0df-377e7d5fb18b");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid 'b11b7e08-cbe1-46e4-b0df-377e7d5fb18b' but no matching script tag was found. ")
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
                    
                  var docs_json = '{"69f80f6a-1f14-467e-8f97-14d9467faff3":{"roots":{"references":[{"attributes":{"below":[{"id":"17696","type":"DatetimeAxis"}],"left":[{"id":"17701","type":"LinearAxis"}],"plot_height":200,"plot_width":950,"renderers":[{"id":"17696","type":"DatetimeAxis"},{"id":"17700","type":"Grid"},{"id":"17701","type":"LinearAxis"},{"id":"17705","type":"Grid"},{"id":"17713","type":"BoxAnnotation"},{"id":"17743","type":"Legend"},{"id":"17723","type":"GlyphRenderer"},{"id":"17745","type":"Whisker"}],"title":{"id":"17685","type":"Title"},"toolbar":{"id":"17710","type":"Toolbar"},"x_range":{"id":"17688","type":"DataRange1d"},"x_scale":{"id":"17692","type":"LinearScale"},"y_range":{"id":"17690","type":"DataRange1d"},"y_scale":{"id":"17694","type":"LinearScale"}},"id":"17686","subtype":"Figure","type":"Plot"},{"attributes":{"level":"underlay","plot":null,"size":10},"id":"18820","type":"TeeHead"},{"attributes":{},"id":"17694","type":"LinearScale"},{"attributes":{"base":60,"mantissas":[1,2,5,10,15,20,30],"max_interval":1800000.0,"min_interval":1000.0,"num_minor_ticks":0},"id":"17732","type":"AdaptiveTicker"},{"attributes":{"plot":{"id":"17686","subtype":"Figure","type":"Plot"},"ticker":{"id":"17697","type":"DatetimeTicker"}},"id":"17700","type":"Grid"},{"attributes":{"base":24,"mantissas":[1,2,4,6,8,12],"max_interval":43200000.0,"min_interval":3600000.0,"num_minor_ticks":0},"id":"17733","type":"AdaptiveTicker"},{"attributes":{"dimension":1,"plot":{"id":"17686","subtype":"Figure","type":"Plot"},"ticker":{"id":"17702","type":"BasicTicker"}},"id":"17705","type":"Grid"},{"attributes":{"num_minor_ticks":5,"tickers":[{"id":"17731","type":"AdaptiveTicker"},{"id":"17732","type":"AdaptiveTicker"},{"id":"17733","type":"AdaptiveTicker"},{"id":"17734","type":"DaysTicker"},{"id":"17735","type":"DaysTicker"},{"id":"17736","type":"DaysTicker"},{"id":"17737","type":"DaysTicker"},{"id":"17738","type":"MonthsTicker"},{"id":"17739","type":"MonthsTicker"},{"id":"17740","type":"MonthsTicker"},{"id":"17741","type":"MonthsTicker"},{"id":"17742","type":"YearsTicker"}]},"id":"17697","type":"DatetimeTicker"},{"attributes":{"days":[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31]},"id":"17734","type":"DaysTicker"},{"attributes":{},"id":"17702","type":"BasicTicker"},{"attributes":{"level":"underlay","plot":null,"size":10},"id":"18819","type":"TeeHead"},{"attributes":{"days":[1,8,15,22]},"id":"17736","type":"DaysTicker"},{"attributes":{},"id":"17706","type":"ResetTool"},{"attributes":{"axis_label":"F336W","formatter":{"id":"17729","type":"BasicTickFormatter"},"plot":{"id":"17686","subtype":"Figure","type":"Plot"},"ticker":{"id":"17702","type":"BasicTicker"}},"id":"17701","type":"LinearAxis"},{"attributes":{"callback":null,"tooltips":[["Date","(@obnames)"]]},"id":"17718","type":"HoverTool"},{"attributes":{"days":[1,15]},"id":"17737","type":"DaysTicker"},{"attributes":{"months":[0,1,2,3,4,5,6,7,8,9,10,11]},"id":"17738","type":"MonthsTicker"},{"attributes":{"callback":null,"data":{"VEGAMAG":{"__ndarray__":"YOXQItt5M0D6fmq8dNMzQMuhRbbzvTNAaJHtfD/VNEAdWmQ73880QM/3U+OluzRAjZduEoMgNEDl0CLb+R40QA4tsp3vxzRAJQaBlUPrNEDByqFFtrM0QE5iEFg5lDRAarx0kxhENEBoke18P/UzQMl2vp8ajzNAke18PzUeM0Bcj8L1KPwzQGDl0CLb+TNAN4lBYOWQM0BGtvP91JgzQMdLN4lBIDRAPQrXo3A9NEDb+X5qvPQzQHWTGARWTjRA/Knx0k1iM0BEi2zn+8kzQEoMAiuH9jNAiUFg5dDCM0AfhetRuL4zQPT91HjpRjRAbef7qfHyM0AzMzMzM1M0QH0/NV666TNAIbByaJENNEAv3SQGgRU0QMP1KFyPojNA7FG4HoUrNEC+nxov3WQ0QAisHFpkWzRAvHSTGAS2M0ApXI/C9cgzQFg5tMh2HjRASOF6FK5nNED4U+Olm0Q0QKRwPQrXwzRA2/l+ary0NEDb+X5qvPQ0QGq8dJMYxDRAJQaBlUPLNEDdJAaBleM0QIXrUbgexTRA3SQGgZUDNUCe76fGS/c0QAaBlUOL7DRA/tR46SZRNECe76fGS9czQDeJQWDl0DNAwcqhRbYTNECmm8QgsBI0QAwCK4cWOTRAvHSTGATWM0DjpZvEIBA0QHE9Ctej0DNAd76fGi99M0Coxks3iUE0QPT91HjpJjRA/tR46SYxNEAj2/l+ahw0QAwCK4cWuTNA2/l+ary0M0AOLbKd7wc0QMHKoUW2MzRAaJHtfD8VNEBYObTIdt4zQESLbOf7STRAvHSTGAT2M0DpJjEIrDw0QJhuEoPACjRA1XjpJjEoNEB9PzVeuokzQJ7vp8ZLlzNA46WbxCAQNEC+nxov3WQzQI2XbhKDoDNARrbz/dRYNEDXo3A9Cjc0QMUgsHJokTRAEoPAyqGFNEArhxbZznc0QJMYBFYOzTNA16NwPQr3M0BaZDvfTw00QG3n+6nx8jNAoBov3STmM0Cyne+nxis0QDvfT42XTjRAK4cW2c43NEBWDi2yne8zQM/3U+OlGzRAAiuHFtluNEBQjZduEiM0QIcW2c73MzRAK4cW2c7XM0DNzMzMzCw0QJqZmZmZmTNAVOOlm8QANECPwvUoXA80QNNNYhBYGTRATmIQWDkUNECR7Xw/NR40QGQ730+NFzRAQmDl0CJbNEDufD81Xro0QAaBlUOLjDRAwcqhRbZzNEAMAiuHFrk0QIlBYOXQojRADi2yne9HNEAtsp3vpwY0QHnpJjEILDRAgZVDi2wnNEBI4XoUric0QN0kBoGVQzRAg8DKoUW2M0BGtvP91LgzQNV46SYxKDNA","dtype":"float64","shape":[126]},"dmag":{"__ndarray__":"Gy/dJAaBlT85tMh2vp+aP5qZmZmZmZk/iUFg5dAiqz+q8dJNYhCoPwrXo3A9Cqc/WDm0yHa+nz9YObTIdr6fP+kmMQisHKo/6SYxCKwcqj9qvHSTGASmP8uhRbbz/aQ/i2zn+6nxoj956SYxCKycP1pkO99PjZc/O99PjZdukj/8qfHSTWKgPxkEVg4tsp0/WmQ730+Nlz9aZDvfT42XP+xRuB6F66E/nMQgsHJooT956SYxCKycP+xRuB6F66E/ukkMAiuHlj+amZmZmZmZP3npJjEIrJw/mpmZmZmZmT+amZmZmZmZP5zEILByaKE/eekmMQisnD/sUbgeheuhP9nO91PjpZs/uB6F61G4nj9MN4lBYOWgP1pkO99PjZc//Knx0k1ioD8730+Nl26iP+xRuB6F66E/+n5qvHSTmD+amZmZmZmZP1g5tMh2vp8/O99PjZduoj+cxCCwcmihP+kmMQisHKo/CtejcD0Kpz85tMh2vp+qP1pkO99Pjac/qvHSTWIQqD+amZmZmZmpP1pkO99Pjac/2c73U+Olqz85tMh2vp+qP5qZmZmZmak/K4cW2c73oz85tMh2vp+aPzm0yHa+n5o/uB6F61G4nj+4HoXrUbieP5zEILByaKE/2c73U+Olmz+4HoXrUbiePzm0yHa+n5o/ukkMAiuHlj+LbOf7qfGiP/yp8dJNYqA//Knx0k1ioD9YObTIdr6fP5qZmZmZmZk/+n5qvHSTmD+4HoXrUbieP0w3iUFg5aA/uB6F61G4nj85tMh2vp+aP9v5fmq8dKM/eekmMQisnD9MN4lBYOWgP7gehetRuJ4/WDm0yHa+nz+6SQwCK4eWP1pkO99PjZc/uB6F61G4nj97FK5H4XqUP1pkO99PjZc/K4cW2c73oz/8qfHSTWKgP3sUrkfheqQ/exSuR+F6pD/b+X5qvHSjP3npJjEIrJw/eekmMQisnD+4HoXrUbieP3npJjEIrJw/2c73U+Olmz97FK5H4XqkP5zEILByaKE/TDeJQWDloD+cxCCwcmihP7gehetRuJ4/qvHSTWIQqD9YObTIdr6fP/yp8dJNYqA//Knx0k1ioD/8qfHSTWKgP7pJDAIrh5Y/i2zn+6nxoj9YObTIdr6fP1g5tMh2vp8/i2zn+6nxoj9YObTIdr6fP7gehetRuJ4/CtejcD0Kpz8K16NwPQqnP3sUrkfheqQ/qvHSTWIQqD8K16NwPQqnPxsv3SQGgaU/Gy/dJAaBpT8ZBFYOLbKdP/yp8dJNYqA/2/l+arx0oz/8qfHSTWKgP0w3iUFg5aA/uB6F61G4nj+amZmZmZmZPzvfT42XbpI/","dtype":"float64","shape":[126]},"lower":{"__ndarray__":"FK5H4Xp0M0DNzMzMzMwzQGU730+NtzNAR+F6FK7HNECkcD0K18M0QOOlm8QgsDRAf2q8dJMYNEDXo3A9Chc0QHsUrkfhujRAku18PzXeNEBjEFg5tKg0QH0/NV66iTRAtMh2vp86NECuR+F6FO4zQPCnxks3iTNAmZmZmZkZM0CHFtnO9/MzQN9PjZdu8jNAXrpJDAKLM0Bt5/up8ZIzQJ7vp8ZLFzRA2/l+arw0NEAhsHJoke0zQEw3iUFgRTRA6iYxCKxcM0DeJAaBlcMzQJDC9Shc7zNAI9v5fmq8M0C5HoXrUbgzQJLtfD81PjRAs53vp8brM0AK16NwPUo0QIlBYOXQ4jNA2c73U+MFNECTGARWDg00QOomMQisnDNAF9nO91MjNEDO91PjpVs0QN9PjZduUjRAHFpkO9+vM0DD9Shcj8IzQEoMAiuHFjRAWDm0yHZeNECWQ4ts5zs0QBFYObTItjRA76fGSzepNECBlUOLbOc0QLgehetRuDRArBxaZDu/NEAQWDm0yNY0QNNNYhBYuTRA9ihcj8L1NEBEi2zn++k0QDm0yHa+3zRAukkMAitHNEBxPQrXo9AzQArXo3A9yjNAeekmMQgMNEBeukkMAgs0QKrx0k1iMDRAyHa+nxrPM0CbxCCwcgg0QESLbOf7yTNAZTvfT413M0Dy0k1iEDg0QB+F61G4HjRAKVyPwvUoNEAVrkfhehQ0QKabxCCwsjNAO99PjZeuM0DGSzeJQQA0QCUGgZVDKzRAILByaJENNEArhxbZztczQMdLN4lBQDRAAiuHFtnuM0BNYhBYOTQ0QFCNl24SAzRAx0s3iUEgNEBrvHSTGIQzQMUgsHJokTNAm8QgsHIINEA5tMh2vl8zQLTIdr6fmjNAAiuHFtlONEACK4cW2S40QLtJDAIrhzRACKwcWmR7NECuR+F6FG40QNnO91PjxTNAHVpkO9/vM0ASg8DKoQU0QLOd76fG6zNArBxaZDvfM0Coxks3iSE0QNnO91PjRTRAj8L1KFwvNED0/dR46eYzQIcW2c73EzRAiUFg5dBiNEBCYOXQIhs0QLKd76fGKzRAVg4tsp3PM0D4U+OlmyQ0QIgW2c73kzNAnu+nxkv3M0CBlUOLbAc0QMUgsHJoETRAmG4Sg8AKNECDwMqhRRY0QBxaZDvfDzRAVg4tsp1PNEACK4cW2a40QPyp8dJNgjRASOF6FK5nNEAgsHJoka00QPHSTWIQmDRAdr6fGi89NECsHFpkO/8zQKRwPQrXIzRABFYOLbIdNEBzaJHtfB80QEFg5dAiOzRAO99PjZeuM0DgT42XbrIzQN0kBoGVIzNA","dtype":"float64","shape":[126]},"mjd":{"__ndarray__":"lRLlDP0a6kC9j7c0/xrqQN+x2VYBG+pAbpUS5Zga6kCQtzQHmxrqQLLZVimdGupAc/DC6sUZ6kCKXIQByBnqQNT7eEufGupA9h2bbaEa6kAYQL2PoxrqQDUHL6ylGupAHpttlYMa6kBAvY+3hRrqQNT7eEs7GepA62c6Yj0Z6kDaVilRvRnqQALU+3i/GepAJPYdm8EZ6kBGGEC9wxnqQF2EAdTlGepAhAHU++cZ6kCsfqYjGxrqQM6gyEUdGupArH6mI04Y6kCy2VYpUBjqQNT7eEtSGOpA9h2bbVQY6kAYQL2PVhjqQPx4S3O/GOpA8MLqZ8EY6kD8eEtzwxjqQA2KXITFGOpAL6x+pscY6kBi37HZ1hjqQIQB1PvYGOpApiP2HdsY6kDOoMhF3RjqQPDC6mffGOpARhhAveEY6kA6Yt+x4xjqQF2EAdTlGOpAf6Yj9ucY6kChyEUY6hjqQKHIRRj5GOpAvY+3NPsY6kDfsdlW/RjqQALU+3j/GOpAJPYdmwEZ6kBi37HZAxnqQG6VEuUFGepAkLc0BwgZ6kCy2VYpChnqQNT7eEsMGepAochFGBkZ6kDD6mc6GxnqQOtnOmIdGepADYpchB8Z6kAvrH6mIRnqQEYYQL1hGepAUc6gyGMZ6kBz8MLqZRnqQJUS5QxoGepAuDQHL2oZ6kDaVilRexnqQOUMilx9GepABy+sfn8Z6kApUc6ggRnqQEtz8MKDGepAzqDIRZsZ6kDlDIpcnRnqQAcvrH6fGepAKVHOoKEZ6kBLc/DCoxnqQL2PtzTbGepA2lYpUd0Z6kD8eEtz3xnqQB6bbZXhGepAQL2Pt+MZ6kApUc6gFhvqQFHOoMgYG+pAc/DC6hob6kCVEuUMHRvqQLg0By8fG+pAeUtz8Hga6kCVEuUMexrqQLg0By99GupA2lYpUX8a6kD8eEtzgRrqQOUMilyUG+pADYpchJYb6kAvrH6mmBvqQFHOoMiaG+pAc/DC6pwb6kBLc/DCOBvqQGg6Yt86G+pAilyEAT0b6kChyEUYfxvqQL2PtzSBG+pAzqDIRcoY6kBz8MLqyxjqQJUS5QzOGOpAaDpi3yMZ6kBz8MLqJRnqQJUS5QwoGepA2lYpUVsZ6kDrZzpiXRnqQA2KXIRfGepAeUtz8IUZ6kCQtzQHiBnqQLLZVimKGepAuDQHL/sZ6kDU+3hL/RnqQPYdm23/GepAHpttlQEa6kA6Yt+xAxrqQF2EAdQFGupAzqDIRd8a6kDlDIpc4RrqQAcvrH7jGupAaDpi39ga6kB/piP22hrqQKHIRRjdGupAOmLfsfYa6kBXKVHO+BrqQHlLc/D6GupA","dtype":"float64","shape":[126]},"obnames":[["2005-04-03T21:47:16"],["2005-04-03T23:24:16"],["2005-04-04T01:00:16"],["2005-03-31T18:40:16"],["2005-03-31T20:16:16"],["2005-03-31T21:52:16"],["2005-03-25T04:26:16"],["2005-03-25T06:00:16"],["2005-03-31T23:28:16"],["2005-04-01T01:04:16"],["2005-04-01T02:40:16"],["2005-04-01T04:15:16"],["2005-03-31T02:41:16"],["2005-03-31T04:17:16"],["2005-03-20T20:28:16"],["2005-03-20T22:02:16"],["2005-03-24T21:59:16"],["2005-03-24T23:36:16"],["2005-03-25T01:12:16"],["2005-03-25T02:48:16"],["2005-03-26T04:22:16"],["2005-03-26T05:59:16"],["2005-03-27T20:21:16"],["2005-03-27T21:57:16"],["2005-03-13T10:36:16"],["2005-03-13T12:07:16"],["2005-03-13T13:43:16"],["2005-03-13T15:19:16"],["2005-03-13T16:55:16"],["2005-03-16T23:35:16"],["2005-03-17T01:03:16"],["2005-03-17T02:35:16"],["2005-03-17T04:08:16"],["2005-03-17T05:44:16"],["2005-03-17T17:08:16"],["2005-03-17T18:44:16"],["2005-03-17T20:20:16"],["2005-03-17T21:57:16"],["2005-03-17T23:33:16"],["2005-03-18T01:18:16"],["2005-03-18T02:46:16"],["2005-03-18T04:22:16"],["2005-03-18T05:58:16"],["2005-03-18T07:34:16"],["2005-03-18T18:49:16"],["2005-03-18T20:24:16"],["2005-03-18T22:00:16"],["2005-03-18T23:36:16"],["2005-03-19T01:12:16"],["2005-03-19T02:53:16"],["2005-03-19T04:25:16"],["2005-03-19T06:01:16"],["2005-03-19T07:37:16"],["2005-03-19T09:13:16"],["2005-03-19T18:49:16"],["2005-03-19T20:25:16"],["2005-03-19T22:02:16"],["2005-03-19T23:38:16"],["2005-03-20T01:14:16"],["2005-03-22T01:18:16"],["2005-03-22T02:50:16"],["2005-03-22T04:26:16"],["2005-03-22T06:02:16"],["2005-03-22T07:38:16"],["2005-03-22T20:29:16"],["2005-03-22T22:01:16"],["2005-03-22T23:37:16"],["2005-03-23T01:13:16"],["2005-03-23T02:49:16"],["2005-03-23T20:27:16"],["2005-03-23T22:01:16"],["2005-03-23T23:37:16"],["2005-03-24T01:13:16"],["2005-03-24T02:49:16"],["2005-03-25T20:24:16"],["2005-03-25T21:59:16"],["2005-03-25T23:35:16"],["2005-03-26T01:11:16"],["2005-03-26T02:47:16"],["2005-04-04T16:58:16"],["2005-04-04T18:35:16"],["2005-04-04T20:11:16"],["2005-04-04T21:47:16"],["2005-04-04T23:23:16"],["2005-03-30T18:42:16"],["2005-03-30T20:17:16"],["2005-03-30T21:53:16"],["2005-03-30T23:29:16"],["2005-03-31T01:05:16"],["2005-04-08T15:16:16"],["2005-04-08T16:53:16"],["2005-04-08T18:29:16"],["2005-04-08T20:05:16"],["2005-04-08T21:41:16"],["2005-04-05T18:34:16"],["2005-04-05T20:09:16"],["2005-04-05T21:45:16"],["2005-04-07T23:19:16"],["2005-04-08T00:54:16"],["2005-03-17T07:42:16"],["2005-03-17T08:56:16"],["2005-03-17T10:32:16"],["2005-03-20T02:54:16"],["2005-03-20T04:26:16"],["2005-03-20T06:02:16"],["2005-03-21T20:29:16"],["2005-03-21T22:02:16"],["2005-03-21T23:38:16"],["2005-03-23T04:27:16"],["2005-03-23T06:01:16"],["2005-03-23T07:37:16"],["2005-03-26T20:23:16"],["2005-03-26T21:58:16"],["2005-03-26T23:34:16"],["2005-03-27T01:11:16"],["2005-03-27T02:46:16"],["2005-03-27T04:22:16"],["2005-04-02T23:27:16"],["2005-04-03T01:01:16"],["2005-04-03T02:37:16"],["2005-04-02T18:39:16"],["2005-04-02T20:13:16"],["2005-04-02T21:49:16"],["2005-04-03T17:01:16"],["2005-04-03T18:36:16"],["2005-04-03T20:12:16"]],"time":{"__ndarray__":"AABqgqAwcEIAAFAPpjBwQgAAkI2rMHBCAADonZ4vcEIAACgcpC9wQgAAaJqpL3BCAACkXX8tcEIAAJi+hC1wQgAAqBivL3BCAADolrQvcEIAACgVui9wQgAAwoS/L3BCAAAOvmcvcEIAAE48bS9wQgAAsGwaLHBCAACkzR8scEIAALI4aS1wQgAAmMVuLXBCAADYQ3QtcEIAABjCeS1wQgAAzIjRLXBCAACyFdctcEIAAGbOWi5wQgAApkxgLnBCAACQxLcpcEIAAJL5vClwQgAA0nfCKXBCAAAS9scpcEIAAFJ0zSlwQgAA8ojbKnBCAAACkuAqcEIAAKrV5SpwQgAA+CfrKnBCAAA4pvAqcEIAAMDJFytwQgAAAEgdK3BCAABAxiIrcEIAACZTKCtwQgAAZtEtK3BCAAB80zMrcEIAAIzcOCtwQgAAzFo+K3BCAAAM2UMrcEIAAExXSStwQgAA/vZvK3BCAACYZnUrcEIAANjkeitwQgAAGGOAK3BCAABY4YUrcEIAANaoiytwQgAAfuyQK3BCAAC+apYrcEIAAP7omytwQgAAPmehK3BCAAC+XMIrcEIAAP7axytwQgAA5GfNK3BCAAAk5tIrcEIAAGRk2CtwQgAAfGp9LHBCAAAkroIscEIAAGQsiCxwQgAApKqNLHBCAADkKJMscEIAANZGvyxwQgAAforELHBCAAC+CMoscEIAAP6GzyxwQgAAPgXVLHBCAABKjxEtcEIAAD7wFi1wQgAAfm4cLXBCAAC+7CEtcEIAAP5qJy1wQgAA2C62LXBCAABynrstcEIAALIcwS1wQgAA8prGLXBCAAAyGcwtcEIAAMRe4jBwQgAAquvnMHBCAADqae0wcEIAACro8jBwQgAAamb4MHBCAAB0VUwvcEIAAA7FUS9wQgAATkNXL3BCAACOwVwvcEIAAM4/Yi9wQgAAoB8mMnBCAACGrCsycEIAAMYqMTJwQgAABqk2MnBCAABGJzwycEIAAMRCOjFwQgAAXrI/MXBCAACeMEUxcEIAABJd7zFwQgAArMz0MXBCAAC8ZvcqcEIAALii+ypwQgAA+CABK3BCAAA8Hd4rcEIAAORg4ytwQgAAJN/oK3BCAAAW4WwscEIAAGQzcixwQgAApLF3LHBCAADKoNoscEIAAL4B4CxwQgAA/n/lLHBCAADyhQgucEIAAIz1DS5wQgAAzHMTLnBCAACyABkucEIAAExwHi5wQgAAjO4jLnBCAACC1VMwcEIAAHY2WTBwQgAAtrReMHBCAADCWkMwcEIAALa7SDBwQgAA9jlOMHBCAAD2JJAwcEIAAJCUlTBwQgAA0BKbMHBC","dtype":"float64","shape":[126]},"upper":{"__ndarray__":"rBxaZDt/M0AnMQisHNozQDEIrBxaxDNAiUFg5dDiNECWQ4ts59s0QLtJDAIrxzRAm8QgsHIoNEDz/dR46SY0QKFFtvP91DRAuB6F61H4NEAfhetRuL40QB+F61G4njRAILByaJFNNEAi2/l+avwzQKJFtvP9lDNAiUFg5dAiM0AxCKwcWgQ0QOF6FK5HATRAEFg5tMiWM0AfhetRuJ4zQPCnxks3KTRAnxov3SRGNECVQ4ts5/szQJ7vp8ZLVzRADi2yne9nM0Cq8dJNYtAzQARWDi2y/TNA76fGSzfJM0CF61G4HsUzQFYOLbKdTzRAJzEIrBz6M0Bcj8L1KFw0QHE9Ctej8DNAaZHtfD8VNEDLoUW28x00QJzEILByqDNAwcqhRbYzNECuR+F6FG40QDEIrBxaZDRAXI/C9Si8M0CPwvUoXM8zQGZmZmZmJjRAOIlBYOVwNEBaZDvfT000QDeJQWDl0DRAx0s3iUHANEA1XrpJDAI1QBxaZDvfzzRAnu+nxkvXNECq8dJNYvA0QDeJQWDl0DRAxCCwcmgRNUD4U+OlmwQ1QNNNYhBY+TRAQmDl0CJbNEDLoUW2890zQGQ730+N1zNACawcWmQbNEDufD81Xho0QG4Sg8DKQTRAsHJoke3cM0ArhxbZzhc0QJ7vp8ZL1zNAiUFg5dCCM0BeukkMAks0QMl2vp8aLzRA001iEFg5NEAxCKwcWiQ0QHJoke18vzNAexSuR+G6M0BWDi2ynQ80QF2PwvUoPDRAsHJoke0cNECF61G4HuUzQMHKoUW2UzRAdr6fGi/9M0CF61G4HkU0QOBPjZduEjRA46WbxCAwNECPwvUoXI8zQHe+nxovnTNAK4cW2c4XNEBDi2zn+2kzQGZmZmZmpjNAikFg5dBiNECsHFpkOz80QM/3U+OlmzRAHFpkO9+PNECoxks3iYE0QE1iEFg51DNAke18PzX+M0CiRbbz/RQ0QCcxCKwc+jNAlBgEVg7tM0C8dJMYBDY0QJ3vp8ZLVzRAx0s3iUFANEC4HoXrUfgzQBfZzvdTIzRAexSuR+F6NEBeukkMAis0QFyPwvUoPDRAAAAAAADgM0CiRbbz/TQ0QKwcWmQ7nzNACtejcD0KNECd76fGSxc0QOF6FK5HITRABFYOLbIdNECfGi/dJCY0QKwcWmQ7HzRALrKd76dmNEDazvdT48U0QBBYObTIljRAOrTIdr5/NED4U+Olm8Q0QCGwcmiRrTRAppvEILBSNECuR+F6FA40QE5iEFg5NDRA/tR46SYxNEAdWmQ73y80QHnpJjEITDRAy6FFtvO9M0CsHFpkO78zQM3MzMzMLDNA","dtype":"float64","shape":[126]}},"selected":{"id":"18847","type":"Selection"},"selection_policy":{"id":"18846","type":"UnionRenderers"}},"id":"17717","type":"ColumnDataSource"},{"attributes":{"label":{"value":"U21"},"renderers":[{"id":"17723","type":"GlyphRenderer"}]},"id":"17744","type":"LegendItem"},{"attributes":{"months":[0,2,4,6,8,10]},"id":"17739","type":"MonthsTicker"},{"attributes":{},"id":"17727","type":"DatetimeTickFormatter"},{"attributes":{"months":[0,4,8]},"id":"17740","type":"MonthsTicker"},{"attributes":{"months":[0,6]},"id":"17741","type":"MonthsTicker"},{"attributes":{"source":{"id":"17717","type":"ColumnDataSource"}},"id":"17724","type":"CDSView"},{"attributes":{},"id":"17729","type":"BasicTickFormatter"},{"attributes":{"active_drag":{"id":"17709","type":"BoxZoomTool"},"active_inspect":"auto","active_multi":null,"active_scroll":{"id":"17708","type":"WheelZoomTool"},"active_tap":"auto","tools":[{"id":"17706","type":"ResetTool"},{"id":"17707","type":"PanTool"},{"id":"17708","type":"WheelZoomTool"},{"id":"17709","type":"BoxZoomTool"},{"id":"17718","type":"HoverTool"}]},"id":"17710","type":"Toolbar"},{"attributes":{},"id":"17742","type":"YearsTicker"},{"attributes":{"fill_color":{"value":"#1f77b4"},"line_color":{"value":"#1f77b4"},"x":{"field":"time"},"y":{"field":"VEGAMAG"}},"id":"17721","type":"Circle"},{"attributes":{"callback":null,"flipped":true},"id":"17690","type":"DataRange1d"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"plot":null,"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"17713","type":"BoxAnnotation"},{"attributes":{"items":[{"id":"17744","type":"LegendItem"}],"plot":{"id":"17686","subtype":"Figure","type":"Plot"}},"id":"17743","type":"Legend"},{"attributes":{},"id":"17707","type":"PanTool"},{"attributes":{"base":{"field":"time","units":"data"},"lower":{"field":"lower","units":"data"},"lower_head":{"id":"18819","type":"TeeHead"},"plot":{"id":"17686","subtype":"Figure","type":"Plot"},"source":{"id":"17717","type":"ColumnDataSource"},"upper":{"field":"upper","units":"data"},"upper_head":{"id":"18820","type":"TeeHead"}},"id":"17745","type":"Whisker"},{"attributes":{"axis_label":"Time","formatter":{"id":"17727","type":"DatetimeTickFormatter"},"plot":{"id":"17686","subtype":"Figure","type":"Plot"},"ticker":{"id":"17697","type":"DatetimeTicker"}},"id":"17696","type":"DatetimeAxis"},{"attributes":{"days":[1,4,7,10,13,16,19,22,25,28]},"id":"17735","type":"DaysTicker"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"x":{"field":"time"},"y":{"field":"VEGAMAG"}},"id":"17722","type":"Circle"},{"attributes":{"mantissas":[1,2,5],"max_interval":500.0,"num_minor_ticks":0},"id":"17731","type":"AdaptiveTicker"},{"attributes":{"plot":null,"text":""},"id":"17685","type":"Title"},{"attributes":{"data_source":{"id":"17717","type":"ColumnDataSource"},"glyph":{"id":"17721","type":"Circle"},"hover_glyph":null,"muted_glyph":null,"name":"U21","nonselection_glyph":{"id":"17722","type":"Circle"},"selection_glyph":null,"view":{"id":"17724","type":"CDSView"}},"id":"17723","type":"GlyphRenderer"},{"attributes":{"callback":null},"id":"17688","type":"DataRange1d"},{"attributes":{},"id":"17708","type":"WheelZoomTool"},{"attributes":{},"id":"18846","type":"UnionRenderers"},{"attributes":{},"id":"17692","type":"LinearScale"},{"attributes":{"overlay":{"id":"17713","type":"BoxAnnotation"}},"id":"17709","type":"BoxZoomTool"},{"attributes":{},"id":"18847","type":"Selection"}],"root_ids":["17686"]},"title":"Bokeh Application","version":"1.0.2"}}';
                  var render_items = [{"docid":"69f80f6a-1f14-467e-8f97-14d9467faff3","roots":{"17686":"b11b7e08-cbe1-46e4-b0df-377e7d5fb18b"}}];
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