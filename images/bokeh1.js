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
      };var element = document.getElementById("aac970fe-ea89-4752-8910-36e949aaa854");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid 'aac970fe-ea89-4752-8910-36e949aaa854' but no matching script tag was found. ")
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
                    
                  var docs_json = '{"617c689f-6cf7-411e-8767-9871b42d3f91":{"roots":{"references":[{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"x":{"field":"x"},"y":{"field":"y"}},"id":"20825","type":"Circle"},{"attributes":{"plot":null,"text":""},"id":"20829","type":"Title"},{"attributes":{"dimension":1,"plot":{"id":"20789","subtype":"Figure","type":"Plot"},"ticker":{"id":"20804","type":"BasicTicker"}},"id":"20807","type":"Grid"},{"attributes":{"fill_color":{"value":"#1f77b4"},"line_color":{"value":"#1f77b4"},"x":{"field":"x"},"y":{"field":"y"}},"id":"20824","type":"Circle"},{"attributes":{},"id":"20831","type":"BasicTickFormatter"},{"attributes":{"data_source":{"id":"20823","type":"ColumnDataSource"},"glyph":{"id":"20824","type":"Circle"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"20825","type":"Circle"},"selection_glyph":null,"view":{"id":"20827","type":"CDSView"}},"id":"20826","type":"GlyphRenderer"},{"attributes":{},"id":"20799","type":"BasicTicker"},{"attributes":{"plot":{"id":"20789","subtype":"Figure","type":"Plot"},"ticker":{"id":"20799","type":"BasicTicker"}},"id":"20802","type":"Grid"},{"attributes":{"callback":null},"id":"20790","type":"DataRange1d"},{"attributes":{},"id":"20808","type":"PanTool"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"plot":null,"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"20816","type":"BoxAnnotation"},{"attributes":{"source":{"id":"20823","type":"ColumnDataSource"}},"id":"20827","type":"CDSView"},{"attributes":{},"id":"20836","type":"Selection"},{"attributes":{"callback":null},"id":"20792","type":"DataRange1d"},{"attributes":{},"id":"20811","type":"SaveTool"},{"attributes":{},"id":"20812","type":"ResetTool"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_multi":null,"active_scroll":"auto","active_tap":"auto","tools":[{"id":"20808","type":"PanTool"},{"id":"20809","type":"WheelZoomTool"},{"id":"20810","type":"BoxZoomTool"},{"id":"20811","type":"SaveTool"},{"id":"20812","type":"ResetTool"},{"id":"20813","type":"HelpTool"}]},"id":"20814","type":"Toolbar"},{"attributes":{},"id":"20794","type":"LinearScale"},{"attributes":{},"id":"20813","type":"HelpTool"},{"attributes":{},"id":"20809","type":"WheelZoomTool"},{"attributes":{"formatter":{"id":"20833","type":"BasicTickFormatter"},"plot":{"id":"20789","subtype":"Figure","type":"Plot"},"ticker":{"id":"20804","type":"BasicTicker"}},"id":"20803","type":"LinearAxis"},{"attributes":{},"id":"20833","type":"BasicTickFormatter"},{"attributes":{"below":[{"id":"20798","type":"LinearAxis"}],"left":[{"id":"20803","type":"LinearAxis"}],"renderers":[{"id":"20798","type":"LinearAxis"},{"id":"20802","type":"Grid"},{"id":"20803","type":"LinearAxis"},{"id":"20807","type":"Grid"},{"id":"20816","type":"BoxAnnotation"},{"id":"20826","type":"GlyphRenderer"}],"title":{"id":"20829","type":"Title"},"toolbar":{"id":"20814","type":"Toolbar"},"x_range":{"id":"20790","type":"DataRange1d"},"x_scale":{"id":"20794","type":"LinearScale"},"y_range":{"id":"20792","type":"DataRange1d"},"y_scale":{"id":"20796","type":"LinearScale"}},"id":"20789","subtype":"Figure","type":"Plot"},{"attributes":{},"id":"20804","type":"BasicTicker"},{"attributes":{},"id":"20796","type":"LinearScale"},{"attributes":{"formatter":{"id":"20831","type":"BasicTickFormatter"},"plot":{"id":"20789","subtype":"Figure","type":"Plot"},"ticker":{"id":"20799","type":"BasicTicker"}},"id":"20798","type":"LinearAxis"},{"attributes":{},"id":"20835","type":"UnionRenderers"},{"attributes":{"overlay":{"id":"20816","type":"BoxAnnotation"}},"id":"20810","type":"BoxZoomTool"},{"attributes":{"callback":null,"data":{"x":[1,2],"y":[3,4]},"selected":{"id":"20836","type":"Selection"},"selection_policy":{"id":"20835","type":"UnionRenderers"}},"id":"20823","type":"ColumnDataSource"}],"root_ids":["20789"]},"title":"Bokeh Application","version":"1.0.2"}}';
                  var render_items = [{"docid":"617c689f-6cf7-411e-8767-9871b42d3f91","roots":{"20789":"aac970fe-ea89-4752-8910-36e949aaa854"}}];
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