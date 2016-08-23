!function(dataAndEvents, b) {
  /**
   * @param {Array} items
   * @param {Function} callback
   * @return {undefined}
   */
  function getItems(items, callback) {
    var copies;
    /** @type {Array} */
    var out = [];
    /** @type {number} */
    var i = 0;
    for (;i < items.length;++i) {
      if (copies = obj[items[i]] || filter(items[i]), !copies) {
        throw "module definition dependecy not found: " + items[i];
      }
      out.push(copies);
    }
    callback.apply(null, out);
  }
  /**
   * @param {string} array
   * @param {Array} recurring
   * @param {Function} matcherFunction
   * @return {undefined}
   */
  function expect(array, recurring, matcherFunction) {
    if ("string" != typeof array) {
      throw "invalid module definition, module id must be defined and be a string";
    }
    if (recurring === b) {
      throw "invalid module definition, dependencies must be specified";
    }
    if (matcherFunction === b) {
      throw "invalid module definition, definition function must be specified";
    }
    getItems(recurring, function() {
      obj[array] = matcherFunction.apply(null, arguments);
    });
  }
  /**
   * @param {?} val
   * @return {?}
   */
  function lit(val) {
    return!!obj[val];
  }
  /**
   * @param {string} expr
   * @return {?}
   */
  function filter(expr) {
    /** @type {global this} */
    var found = dataAndEvents;
    var codeSegments = expr.split(/[.\/]/);
    /** @type {number} */
    var i = 0;
    for (;i < codeSegments.length;++i) {
      if (!found[codeSegments[i]]) {
        return;
      }
      found = found[codeSegments[i]];
    }
    return found;
  }
  /**
   * @param {Array} codeSegments
   * @return {undefined}
   */
  function makeKeywords(codeSegments) {
    /** @type {number} */
    var i = 0;
    for (;i < codeSegments.length;i++) {
      /** @type {global this} */
      var el = dataAndEvents;
      var param = codeSegments[i];
      var translated = param.split(/[.\/]/);
      /** @type {number} */
      var key = 0;
      for (;key < translated.length - 1;++key) {
        if (el[translated[key]] === b) {
          el[translated[key]] = {};
        }
        el = el[translated[key]];
      }
      el[translated[translated.length - 1]] = obj[param];
    }
  }
  var obj = {};
  /** @type {string} */
  var versions = "moxie/core/utils/Basic";
  /** @type {string} */
  var elems = "moxie/core/I18n";
  /** @type {string} */
  var iter = "moxie/core/utils/Mime";
  /** @type {string} */
  var before = "moxie/core/utils/Env";
  /** @type {string} */
  var changes = "moxie/core/utils/Dom";
  /** @type {string} */
  var input = "moxie/core/Exceptions";
  /** @type {string} */
  var selector = "moxie/core/EventTarget";
  /** @type {string} */
  var target = "moxie/core/utils/Encode";
  /** @type {string} */
  var newValue = "moxie/runtime/Runtime";
  /** @type {string} */
  var checkSet = "moxie/runtime/RuntimeClient";
  /** @type {string} */
  var values = "moxie/file/Blob";
  /** @type {string} */
  var result = "moxie/file/File";
  /** @type {string} */
  var progressValues = "moxie/file/FileInput";
  /** @type {string} */
  var array = "moxie/file/FileDrop";
  /** @type {string} */
  var ids = "moxie/runtime/RuntimeTarget";
  /** @type {string} */
  var gotData = "moxie/file/FileReader";
  /** @type {string} */
  var files = "moxie/core/utils/Url";
  /** @type {string} */
  var args = "moxie/file/FileReaderSync";
  /** @type {string} */
  var entry = "moxie/xhr/FormData";
  /** @type {string} */
  var method = "moxie/xhr/XMLHttpRequest";
  /** @type {string} */
  var results = "moxie/runtime/Transporter";
  /** @type {string} */
  var reversed = "moxie/image/Image";
  /** @type {string} */
  var f = "moxie/runtime/html5/Runtime";
  /** @type {string} */
  var fn = "moxie/runtime/html5/file/Blob";
  /** @type {string} */
  var clone = "moxie/core/utils/Events";
  /** @type {string} */
  var buffer = "moxie/runtime/html5/file/FileInput";
  /** @type {string} */
  var visited = "moxie/runtime/html5/file/FileDrop";
  /** @type {string} */
  var scale = "moxie/runtime/html5/file/FileReader";
  /** @type {string} */
  var string = "moxie/runtime/html5/xhr/XMLHttpRequest";
  /** @type {string} */
  var item = "moxie/runtime/html5/utils/BinaryReader";
  /** @type {string} */
  var re = "moxie/runtime/html5/image/JPEGHeaders";
  /** @type {string} */
  var stack = "moxie/runtime/html5/image/ExifParser";
  /** @type {string} */
  var content = "moxie/runtime/html5/image/JPEG";
  /** @type {string} */
  var guesses = "moxie/runtime/html5/image/PNG";
  /** @type {string} */
  var bewit = "moxie/runtime/html5/image/ImageInfo";
  /** @type {string} */
  var parsed = "moxie/runtime/html5/image/MegaPixel";
  /** @type {string} */
  var body = "moxie/runtime/html5/image/Image";
  /** @type {string} */
  var err = "moxie/runtime/flash/Runtime";
  /** @type {string} */
  var element = "moxie/runtime/flash/file/Blob";
  /** @type {string} */
  var me = "moxie/runtime/flash/file/FileInput";
  /** @type {string} */
  var n = "moxie/runtime/flash/file/FileReader";
  /** @type {string} */
  var value = "moxie/runtime/flash/file/FileReaderSync";
  /** @type {string} */
  var set = "moxie/runtime/flash/xhr/XMLHttpRequest";
  /** @type {string} */
  var i = "moxie/runtime/flash/runtime/Transporter";
  /** @type {string} */
  var displayStyle = "moxie/runtime/flash/image/Image";
  /** @type {string} */
  var options = "moxie/runtime/silverlight/Runtime";
  /** @type {string} */
  var gotError = "moxie/runtime/silverlight/file/Blob";
  /** @type {string} */
  var expected = "moxie/runtime/silverlight/file/FileInput";
  /** @type {string} */
  var normalized = "moxie/runtime/silverlight/file/FileDrop";
  /** @type {string} */
  var flattened = "moxie/runtime/silverlight/file/FileReader";
  /** @type {string} */
  var fromIndex = "moxie/runtime/silverlight/file/FileReaderSync";
  /** @type {string} */
  var sortFn = "moxie/runtime/silverlight/xhr/XMLHttpRequest";
  /** @type {string} */
  var fired = "moxie/runtime/silverlight/runtime/Transporter";
  /** @type {string} */
  var ret = "moxie/runtime/silverlight/image/Image";
  /** @type {string} */
  var listeners = "moxie/runtime/html4/Runtime";
  /** @type {string} */
  var index = "moxie/runtime/html4/file/FileInput";
  /** @type {string} */
  var patterns = "moxie/runtime/html4/file/FileReader";
  /** @type {string} */
  var arr = "moxie/runtime/html4/xhr/XMLHttpRequest";
  /** @type {string} */
  var arrays = "moxie/runtime/html4/image/Image";
  expect(versions, [], function() {
    /**
     * @param {Object} obj
     * @return {?}
     */
    var type = function(obj) {
      var element;
      return obj === element ? "undefined" : null === obj ? "null" : obj.nodeType ? "node" : {}.toString.call(obj).match(/\s([a-z|A-Z]+)/)[1].toLowerCase();
    };
    /**
     * @param {?} opt_attributes
     * @return {?}
     */
    var extend = function(opt_attributes) {
      var skip;
      return each(arguments, function(elems, dataAndEvents) {
        if (dataAndEvents > 0) {
          each(elems, function(val, key) {
            if (val !== skip) {
              if (type(opt_attributes[key]) === type(val) && ~inArray(type(val), ["array", "object"])) {
                extend(opt_attributes[key], val);
              } else {
                /** @type {Object} */
                opt_attributes[key] = val;
              }
            }
          });
        }
      }), opt_attributes;
    };
    /**
     * @param {Object} object
     * @param {Function} callback
     * @return {undefined}
     */
    var each = function(object, callback) {
      var type;
      var key;
      var index;
      var fx;
      if (object) {
        try {
          type = object.length;
        } catch (a) {
          type = fx;
        }
        if (type === fx) {
          for (key in object) {
            if (object.hasOwnProperty(key) && callback(object[key], key) === false) {
              return;
            }
          }
        } else {
          /** @type {number} */
          index = 0;
          for (;type > index;index++) {
            if (callback(object[index], index) === false) {
              return;
            }
          }
        }
      }
    };
    /**
     * @param {Object} b
     * @return {?}
     */
    var deepEqual = function(b) {
      var prop;
      if (!b || "object" !== type(b)) {
        return true;
      }
      for (prop in b) {
        return false;
      }
      return true;
    };
    /**
     * @param {number} a
     * @param {Function} b
     * @return {undefined}
     */
    var e = function(a, b) {
      /**
       * @param {number} key
       * @return {undefined}
       */
      function s(key) {
        if ("function" === type(a[key])) {
          a[key](function(v) {
            if (++key < al && !v) {
              s(key);
            } else {
              b(v);
            }
          });
        }
      }
      /** @type {number} */
      var camelKey = 0;
      var al = a.length;
      if ("function" !== type(b)) {
        /**
         * @return {undefined}
         */
        b = function() {
        };
      }
      if (!(a && a.length)) {
        b();
      }
      s(camelKey);
    };
    /**
     * @param {string} elems
     * @param {Function} cb
     * @return {undefined}
     */
    var map = function(elems, cb) {
      /** @type {number} */
      var next = 0;
      var l = elems.length;
      /** @type {Array} */
      var res = new Array(l);
      each(elems, function(fun, key) {
        fun(function(outErr) {
          if (outErr) {
            return cb(outErr);
          }
          /** @type {Array.<?>} */
          var val = [].slice.call(arguments);
          val.shift();
          /** @type {Array.<?>} */
          res[key] = val;
          next++;
          if (next === l) {
            res.unshift(null);
            cb.apply(this, res);
          }
        });
      });
    };
    /**
     * @param {string} node
     * @param {Array} opt_attributes
     * @return {?}
     */
    var inArray = function(node, opt_attributes) {
      if (opt_attributes) {
        if (Array.prototype.indexOf) {
          return Array.prototype.indexOf.call(opt_attributes, node);
        }
        /** @type {number} */
        var i = 0;
        var l = opt_attributes.length;
        for (;l > i;i++) {
          if (opt_attributes[i] === node) {
            return i;
          }
        }
      }
      return-1;
    };
    /**
     * @param {Object} a
     * @param {Array} opt_attributes
     * @return {?}
     */
    var equal = function(a, opt_attributes) {
      /** @type {Array} */
      var errors = [];
      if ("array" !== type(a)) {
        /** @type {Array} */
        a = [a];
      }
      if ("array" !== type(opt_attributes)) {
        /** @type {Array} */
        opt_attributes = [opt_attributes];
      }
      var i;
      for (i in a) {
        if (-1 === inArray(a[i], opt_attributes)) {
          errors.push(a[i]);
        }
      }
      return errors.length ? errors : false;
    };
    /**
     * @param {Object} object
     * @param {Array} v12
     * @return {?}
     */
    var getProperties = function(object, v12) {
      /** @type {Array} */
      var errors = [];
      return each(object, function(key) {
        if (-1 !== inArray(key, v12)) {
          errors.push(key);
        }
      }), errors.length ? errors : null;
    };
    /**
     * @param {Array} ar
     * @return {?}
     */
    var toArray = function(ar) {
      var i;
      /** @type {Array} */
      var a = [];
      /** @type {number} */
      i = 0;
      for (;i < ar.length;i++) {
        a[i] = ar[i];
      }
      return a;
    };
    var guid = function() {
      /** @type {number} */
      var UID = 0;
      return function(type) {
        /** @type {string} */
        var queue = (new Date).getTime().toString(32);
        var i;
        /** @type {number} */
        i = 0;
        for (;5 > i;i++) {
          queue += Math.floor(65535 * Math.random()).toString(32);
        }
        return(type || "o_") + queue + (UID++).toString(32);
      };
    }();
    /**
     * @param {?} string
     * @return {?}
     */
    var trim = function(string) {
      return string ? String.prototype.trim ? String.prototype.trim.call(string) : string.toString().replace(/^\s*/, "").replace(/\s*$/, "") : string;
    };
    /**
     * @param {number} v
     * @return {?}
     */
    var set = function(v) {
      if ("string" != typeof v) {
        return v;
      }
      var methods = {
        t : 1099511627776,
        g : 1073741824,
        m : 1048576,
        k : 1024
      };
      var method;
      return v = /^([0-9]+)([mgk]?)$/.exec(v.toLowerCase().replace(/[^0-9mkg]/g, "")), method = v[2], v = +v[1], methods.hasOwnProperty(method) && (v *= methods[method]), v;
    };
    return{
      guid : guid,
      /** @type {function (Object): ?} */
      typeOf : type,
      /** @type {function (?): ?} */
      extend : extend,
      /** @type {function (Object, Function): undefined} */
      each : each,
      /** @type {function (Object): ?} */
      isEmptyObj : deepEqual,
      /** @type {function (number, Function): undefined} */
      inSeries : e,
      /** @type {function (string, Function): undefined} */
      inParallel : map,
      /** @type {function (string, Array): ?} */
      inArray : inArray,
      /** @type {function (Object, Array): ?} */
      arrayDiff : equal,
      /** @type {function (Object, Array): ?} */
      arrayIntersect : getProperties,
      /** @type {function (Array): ?} */
      toArray : toArray,
      /** @type {function (?): ?} */
      trim : trim,
      /** @type {function (number): ?} */
      parseSizeStr : set
    };
  });
  expect(elems, [versions], function($) {
    var attributes = {};
    return{
      /**
       * @param {?} items
       * @return {?}
       */
      addI18n : function(items) {
        return $.extend(attributes, items);
      },
      /**
       * @param {string} name
       * @return {?}
       */
      translate : function(name) {
        return attributes[name] || name;
      },
      /**
       * @param {string} n
       * @return {?}
       */
      _ : function(n) {
        return this.translate(n);
      },
      /**
       * @param {string} fmt
       * @return {?}
       */
      sprintf : function(fmt) {
        /** @type {Array.<?>} */
        var args = [].slice.call(arguments, 1);
        return fmt.replace(/%[a-z]/g, function() {
          var actual = args.shift();
          return "undefined" !== $.typeOf(actual) ? actual : "";
        });
      }
    };
  });
  expect(iter, [versions, elems], function($, projection) {
    /** @type {string} */
    var value = "application/msword,doc dot,application/pdf,pdf,application/pgp-signature,pgp,application/postscript,ps ai eps,application/rtf,rtf,application/vnd.ms-excel,xls xlb,application/vnd.ms-powerpoint,ppt pps pot,application/zip,zip,application/x-shockwave-flash,swf swfl,application/vnd.openxmlformats-officedocument.wordprocessingml.document,docx,application/vnd.openxmlformats-officedocument.wordprocessingml.template,dotx,application/vnd.openxmlformats-officedocument.spreadsheetml.sheet,xlsx,application/vnd.openxmlformats-officedocument.presentationml.presentation,pptx,application/vnd.openxmlformats-officedocument.presentationml.template,potx,application/vnd.openxmlformats-officedocument.presentationml.slideshow,ppsx,application/x-javascript,js,application/json,json,audio/mpeg,mp3 mpga mpega mp2,audio/x-wav,wav,audio/x-m4a,m4a,audio/ogg,oga ogg,audio/aiff,aiff aif,audio/flac,flac,audio/aac,aac,audio/ac3,ac3,audio/x-ms-wma,wma,image/bmp,bmp,image/gif,gif,image/jpeg,jpg jpeg jpe,image/photoshop,psd,image/png,png,image/svg+xml,svg svgz,image/tiff,tiff tif,text/plain,asc txt text diff log,text/html,htm html xhtml,text/css,css,text/csv,csv,text/rtf,rtf,video/mpeg,mpeg mpg mpe m2v,video/quicktime,qt mov,video/mp4,mp4,video/x-m4v,m4v,video/x-flv,flv,video/x-ms-wmv,wmv,video/avi,avi,video/webm,webm,video/3gpp,3gpp 3gp,video/3gpp2,3g2,video/vnd.rn-realvideo,rv,video/ogg,ogv,video/x-matroska,mkv,application/vnd.oasis.opendocument.formula-template,otf,application/octet-stream,exe";
    var result = {
      mimes : {},
      extensions : {},
      /**
       * @param {string} ok
       * @return {undefined}
       */
      addMimeType : function(ok) {
        var chunks = ok.split(/,/);
        var chunkIndex;
        var i;
        var codeSegments;
        /** @type {number} */
        chunkIndex = 0;
        for (;chunkIndex < chunks.length;chunkIndex += 2) {
          codeSegments = chunks[chunkIndex + 1].split(/ /);
          /** @type {number} */
          i = 0;
          for (;i < codeSegments.length;i++) {
            this.mimes[codeSegments[i]] = chunks[chunkIndex];
          }
          this.extensions[chunks[chunkIndex]] = codeSegments;
        }
      },
      /**
       * @param {Array} codeSegments
       * @param {?} dataAndEvents
       * @return {?}
       */
      extList2mimes : function(codeSegments, dataAndEvents) {
        var options = this;
        var values;
        var i;
        var j;
        var node;
        /** @type {Array} */
        var elems = [];
        /** @type {number} */
        i = 0;
        for (;i < codeSegments.length;i++) {
          values = codeSegments[i].extensions.split(/\s*,\s*/);
          /** @type {number} */
          j = 0;
          for (;j < values.length;j++) {
            if ("*" === values[j]) {
              return[];
            }
            if (node = options.mimes[values[j]]) {
              if (-1 === $.inArray(node, elems)) {
                elems.push(node);
              }
            } else {
              if (!dataAndEvents || !/^\w+$/.test(values[j])) {
                return[];
              }
              elems.push("." + values[j]);
            }
          }
        }
        return elems;
      },
      /**
       * @param {Object} which
       * @return {?}
       */
      mimes2exts : function(which) {
        var self = this;
        /** @type {Array} */
        var newArgs = [];
        return $.each(which, function(ext) {
          if ("*" === ext) {
            return newArgs = [], false;
          }
          var r = ext.match(/^(\w+)\/(\*|\w+)$/);
          if (r) {
            if ("*" === r[2]) {
              $.each(self.extensions, function(dataAndEvents, key) {
                if ((new RegExp("^" + r[1] + "/")).test(key)) {
                  [].push.apply(newArgs, self.extensions[key]);
                }
              });
            } else {
              if (self.extensions[ext]) {
                [].push.apply(newArgs, self.extensions[ext]);
              }
            }
          }
        }), newArgs;
      },
      /**
       * @param {string} source
       * @return {?}
       */
      mimes2extList : function(source) {
        /** @type {Array} */
        var details = [];
        /** @type {Array} */
        var dig = [];
        return "string" === $.typeOf(source) && (source = $.trim(source).split(/\s*,\s*/)), dig = this.mimes2exts(source), details.push({
          title : projection.translate("Files"),
          extensions : dig.length ? dig.join(",") : "*"
        }), details.mimes = source, details;
      },
      /**
       * @param {string} deepDataAndEvents
       * @return {?}
       */
      getFileExtension : function(deepDataAndEvents) {
        var group = deepDataAndEvents && deepDataAndEvents.match(/\.([^.]+)$/);
        return group ? group[1].toLowerCase() : "";
      },
      /**
       * @param {?} deepDataAndEvents
       * @return {?}
       */
      getFileMime : function(deepDataAndEvents) {
        return this.mimes[this.getFileExtension(deepDataAndEvents)] || "";
      }
    };
    return result.addMimeType(value), result;
  });
  expect(before, [versions], function($) {
    /**
     * @param {(Array|string)} a
     * @param {(Array|string)} b
     * @param {string} operator
     * @return {?}
     */
    function cmp(a, b, operator) {
      /** @type {number} */
      var i = 0;
      /** @type {number} */
      var l = 0;
      /** @type {number} */
      var d = 0;
      var out = {
        dev : -6,
        alpha : -5,
        a : -5,
        beta : -4,
        b : -4,
        RC : -3,
        rc : -3,
        "#" : -2,
        p : 1,
        pl : 1
      };
      /**
       * @param {string} string
       * @return {?}
       */
      var parsePath = function(string) {
        return string = ("" + string).replace(/[_\-+]/g, "."), string = string.replace(/([^.\d]+)/g, ".$1.").replace(/\.{2,}/g, "."), string.length ? string.split(".") : [-8];
      };
      /**
       * @param {(Object|string)} n
       * @return {?}
       */
      var f = function(n) {
        return n ? isNaN(n) ? out[n] || -7 : parseInt(n, 10) : 0;
      };
      a = parsePath(a);
      b = parsePath(b);
      /** @type {number} */
      l = Math.max(a.length, b.length);
      /** @type {number} */
      i = 0;
      for (;l > i;i++) {
        if (a[i] != b[i]) {
          if (a[i] = f(a[i]), b[i] = f(b[i]), a[i] < b[i]) {
            /** @type {number} */
            d = -1;
            break;
          }
          if (a[i] > b[i]) {
            /** @type {number} */
            d = 1;
            break;
          }
        }
      }
      if (!operator) {
        return d;
      }
      switch(operator) {
        case ">":
        ;
        case "gt":
          return d > 0;
        case ">=":
        ;
        case "ge":
          return d >= 0;
        case "<=":
        ;
        case "le":
          return 0 >= d;
        case "==":
        ;
        case "=":
        ;
        case "eq":
          return 0 === d;
        case "<>":
        ;
        case "!=":
        ;
        case "ne":
          return 0 !== d;
        case "":
        ;
        case "<":
        ;
        case "lt":
          return 0 > d;
        default:
          return null;
      }
    }
    var userAgent = function(value) {
      /** @type {string} */
      var EMPTY = "";
      /** @type {string} */
      var string = "?";
      /** @type {string} */
      var ret = "function";
      /** @type {string} */
      var UNDEF_TYPE = "undefined";
      /** @type {string} */
      var OBJ_TYPE = "object";
      /** @type {string} */
      var MAJOR = "major";
      /** @type {string} */
      var attrs = "model";
      /** @type {string} */
      var info = "name";
      /** @type {string} */
      var t = "type";
      /** @type {string} */
      var VENDOR = "vendor";
      /** @type {string} */
      var _version = "version";
      /** @type {string} */
      var ARCHITECTURE = "architecture";
      /** @type {string} */
      var CONSOLE = "console";
      /** @type {string} */
      var $param = "mobile";
      /** @type {string} */
      var TABLET = "tablet";
      var util = {
        /**
         * @param {Object} item
         * @param {Object} property
         * @return {?}
         */
        has : function(item, property) {
          return-1 !== property.toLowerCase().indexOf(item.toLowerCase());
        },
        /**
         * @param {Object} str
         * @return {?}
         */
        lowerize : function(str) {
          return str.toLowerCase();
        }
      };
      var mapper = {
        /**
         * @return {?}
         */
        rgx : function() {
          var result;
          /** @type {number} */
          var bi = 0;
          var i;
          var x;
          var j;
          var q;
          var tret;
          var match;
          /** @type {Arguments} */
          var b = arguments;
          for (;bi < b.length;bi += 2) {
            var codeSegments = b[bi];
            var list = b[bi + 1];
            if (typeof result === UNDEF_TYPE) {
              result = {};
              for (j in list) {
                q = list[j];
                if (typeof q === OBJ_TYPE) {
                  /** @type {string} */
                  result[q[0]] = value;
                } else {
                  /** @type {string} */
                  result[q] = value;
                }
              }
            }
            /** @type {number} */
            i = x = 0;
            for (;i < codeSegments.length;i++) {
              if (tret = codeSegments[i].exec(this.getUA())) {
                /** @type {number} */
                j = 0;
                for (;j < list.length;j++) {
                  match = tret[++x];
                  q = list[j];
                  if (typeof q === OBJ_TYPE && q.length > 0) {
                    if (2 == q.length) {
                      result[q[0]] = typeof q[1] == ret ? q[1].call(this, match) : q[1];
                    } else {
                      if (3 == q.length) {
                        result[q[0]] = typeof q[1] !== ret || q[1].exec && q[1].test ? match ? match.replace(q[1], q[2]) : value : match ? q[1].call(this, match, q[2]) : value;
                      } else {
                        if (4 == q.length) {
                          result[q[0]] = match ? q[3].call(this, match.replace(q[1], q[2])) : value;
                        }
                      }
                    }
                  } else {
                    result[q] = match ? match : value;
                  }
                }
                break;
              }
            }
            if (tret) {
              break;
            }
          }
          return result;
        },
        /**
         * @param {Object} s
         * @param {Object} map
         * @return {?}
         */
        str : function(s, map) {
          var type;
          for (type in map) {
            if (typeof map[type] === OBJ_TYPE && map[type].length > 0) {
              /** @type {number} */
              var j = 0;
              for (;j < map[type].length;j++) {
                if (util.has(map[type][j], s)) {
                  return type === string ? value : type;
                }
              }
            } else {
              if (util.has(map[type], s)) {
                return type === string ? value : type;
              }
            }
          }
          return s;
        }
      };
      var maps = {
        browser : {
          oldsafari : {
            major : {
              1 : ["/8", "/1", "/3"],
              2 : "/4",
              "?" : "/"
            },
            version : {
              "1.0" : "/8",
              "1.2" : "/1",
              "1.3" : "/3",
              "2.0" : "/412",
              "2.0.2" : "/416",
              "2.0.3" : "/417",
              "2.0.4" : "/419",
              "?" : "/"
            }
          }
        },
        device : {
          sprint : {
            model : {
              "Evo Shift 4G" : "7373KT"
            },
            vendor : {
              HTC : "APA",
              Sprint : "Sprint"
            }
          }
        },
        os : {
          windows : {
            version : {
              ME : "4.90",
              "NT 3.11" : "NT3.51",
              "NT 4.0" : "NT4.0",
              2E3 : "NT 5.0",
              XP : ["NT 5.1", "NT 5.2"],
              Vista : "NT 6.0",
              7 : "NT 6.1",
              8 : "NT 6.2",
              "8.1" : "NT 6.3",
              RT : "ARM"
            }
          }
        }
      };
      var params = {
        browser : [[/(opera\smini)\/((\d+)?[\w\.-]+)/i, /(opera\s[mobiletab]+).+version\/((\d+)?[\w\.-]+)/i, /(opera).+version\/((\d+)?[\w\.]+)/i, /(opera)[\/\s]+((\d+)?[\w\.]+)/i], [info, _version, MAJOR], [/\s(opr)\/((\d+)?[\w\.]+)/i], [[info, "Opera"], _version, MAJOR], [/(kindle)\/((\d+)?[\w\.]+)/i, /(lunascape|maxthon|netfront|jasmine|blazer)[\/\s]?((\d+)?[\w\.]+)*/i, /(avant\s|iemobile|slim|baidu)(?:browser)?[\/\s]?((\d+)?[\w\.]*)/i, /(?:ms|\()(ie)\s((\d+)?[\w\.]+)/i, /(rekonq)((?:\/)[\w\.]+)*/i, 
        /(chromium|flock|rockmelt|midori|epiphany|silk|skyfire|ovibrowser|bolt|iron)\/((\d+)?[\w\.-]+)/i], [info, _version, MAJOR], [/(trident).+rv[:\s]((\d+)?[\w\.]+).+like\sgecko/i], [[info, "IE"], _version, MAJOR], [/(yabrowser)\/((\d+)?[\w\.]+)/i], [[info, "Yandex"], _version, MAJOR], [/(comodo_dragon)\/((\d+)?[\w\.]+)/i], [[info, /_/g, " "], _version, MAJOR], [/(chrome|omniweb|arora|[tizenoka]{5}\s?browser)\/v?((\d+)?[\w\.]+)/i], [info, _version, MAJOR], [/(dolfin)\/((\d+)?[\w\.]+)/i], [[info, 
        "Dolphin"], _version, MAJOR], [/((?:android.+)crmo|crios)\/((\d+)?[\w\.]+)/i], [[info, "Chrome"], _version, MAJOR], [/((?:android.+))version\/((\d+)?[\w\.]+)\smobile\ssafari/i], [[info, "Android Browser"], _version, MAJOR], [/version\/((\d+)?[\w\.]+).+?mobile\/\w+\s(safari)/i], [_version, MAJOR, [info, "Mobile Safari"]], [/version\/((\d+)?[\w\.]+).+?(mobile\s?safari|safari)/i], [_version, MAJOR, info], [/webkit.+?(mobile\s?safari|safari)((\/[\w\.]+))/i], [info, [MAJOR, mapper.str, maps.browser.oldsafari.major], 
        [_version, mapper.str, maps.browser.oldsafari.version]], [/(konqueror)\/((\d+)?[\w\.]+)/i, /(webkit|khtml)\/((\d+)?[\w\.]+)/i], [info, _version, MAJOR], [/(navigator|netscape)\/((\d+)?[\w\.-]+)/i], [[info, "Netscape"], _version, MAJOR], [/(swiftfox)/i, /(icedragon|iceweasel|camino|chimera|fennec|maemo\sbrowser|minimo|conkeror)[\/\s]?((\d+)?[\w\.\+]+)/i, /(firefox|seamonkey|k-meleon|icecat|iceape|firebird|phoenix)\/((\d+)?[\w\.-]+)/i, /(mozilla)\/((\d+)?[\w\.]+).+rv\:.+gecko\/\d+/i, /(uc\s?browser|polaris|lynx|dillo|icab|doris|amaya|w3m|netsurf|qqbrowser)[\/\s]?((\d+)?[\w\.]+)/i, 
        /(links)\s\(((\d+)?[\w\.]+)/i, /(gobrowser)\/?((\d+)?[\w\.]+)*/i, /(ice\s?browser)\/v?((\d+)?[\w\._]+)/i, /(mosaic)[\/\s]((\d+)?[\w\.]+)/i], [info, _version, MAJOR]],
        engine : [[/(presto)\/([\w\.]+)/i, /(webkit|trident|netfront|netsurf|amaya|lynx|w3m)\/([\w\.]+)/i, /(khtml|tasman|links)[\/\s]\(?([\w\.]+)/i, /(icab)[\/\s]([23]\.[\d\.]+)/i], [info, _version], [/rv\:([\w\.]+).*(gecko)/i], [_version, info]],
        os : [[/(windows)\snt\s6\.2;\s(arm)/i, /(windows\sphone(?:\sos)*|windows\smobile|windows)[\s\/]?([ntce\d\.\s]+\w)/i], [info, [_version, mapper.str, maps.os.windows.version]], [/(win(?=3|9|n)|win\s9x\s)([nt\d\.]+)/i], [[info, "Windows"], [_version, mapper.str, maps.os.windows.version]], [/\((bb)(10);/i], [[info, "BlackBerry"], _version], [/(blackberry)\w*\/?([\w\.]+)*/i, /(tizen)\/([\w\.]+)/i, /(android|webos|palm\os|qnx|bada|rim\stablet\sos|meego)[\/\s-]?([\w\.]+)*/i], [info, _version], [/(symbian\s?os|symbos|s60(?=;))[\/\s-]?([\w\.]+)*/i], 
        [[info, "Symbian"], _version], [/mozilla.+\(mobile;.+gecko.+firefox/i], [[info, "Firefox OS"], _version], [/(nintendo|playstation)\s([wids3portablevu]+)/i, /(mint)[\/\s\(]?(\w+)*/i, /(joli|[kxln]?ubuntu|debian|[open]*suse|gentoo|arch|slackware|fedora|mandriva|centos|pclinuxos|redhat|zenwalk)[\/\s-]?([\w\.-]+)*/i, /(hurd|linux)\s?([\w\.]+)*/i, /(gnu)\s?([\w\.]+)*/i], [info, _version], [/(cros)\s[\w]+\s([\w\.]+\w)/i], [[info, "Chromium OS"], _version], [/(sunos)\s?([\w\.]+\d)*/i], [[info, "Solaris"], 
        _version], [/\s([frentopc-]{0,4}bsd|dragonfly)\s?([\w\.]+)*/i], [info, _version], [/(ip[honead]+)(?:.*os\s*([\w]+)*\slike\smac|;\sopera)/i], [[info, "iOS"], [_version, /_/g, "."]], [/(mac\sos\sx)\s?([\w\s\.]+\w)*/i], [info, [_version, /_/g, "."]], [/(haiku)\s(\w+)/i, /(aix)\s((\d)(?=\.|\)|\s)[\w\.]*)*/i, /(macintosh|mac(?=_powerpc)|plan\s9|minix|beos|os\/2|amigaos|morphos|risc\sos)/i, /(unix)\s?([\w\.]+)*/i], [info, _version]]
      };
      /**
       * @param {string} uastring
       * @return {undefined}
       */
      var UAParser = function(uastring) {
        var ua = uastring || (window && (window.navigator && window.navigator.userAgent) ? window.navigator.userAgent : EMPTY);
        /**
         * @return {?}
         */
        this.getBrowser = function() {
          return mapper.rgx.apply(this, params.browser);
        };
        /**
         * @return {?}
         */
        this.getEngine = function() {
          return mapper.rgx.apply(this, params.engine);
        };
        /**
         * @return {?}
         */
        this.getOS = function() {
          return mapper.rgx.apply(this, params.os);
        };
        /**
         * @return {?}
         */
        this.getResult = function() {
          return{
            ua : this.getUA(),
            browser : this.getBrowser(),
            engine : this.getEngine(),
            os : this.getOS()
          };
        };
        /**
         * @return {?}
         */
        this.getUA = function() {
          return ua;
        };
        /**
         * @param {string} uastring
         * @return {?}
         */
        this.setUA = function(uastring) {
          return ua = uastring, this;
        };
        this.setUA(ua);
      };
      return(new UAParser).getResult();
    }();
    var baseName = function() {
      var target = {
        define_property : function() {
          return false;
        }(),
        create_canvas : function() {
          /** @type {Element} */
          var test_canvas = document.createElement("canvas");
          return!(!test_canvas.getContext || !test_canvas.getContext("2d"));
        }(),
        /**
         * @param {?} item
         * @return {?}
         */
        return_response_type : function(item) {
          try {
            if (-1 !== $.inArray(item, ["", "text", "document"])) {
              return true;
            }
            if (window.XMLHttpRequest) {
              /** @type {XMLHttpRequest} */
              var req = new XMLHttpRequest;
              if (req.open("get", "/"), "responseType" in req) {
                return req.responseType = item, req.responseType !== item ? false : true;
              }
            }
          } catch (i) {
          }
          return false;
        },
        use_data_uri : function() {
          /** @type {Image} */
          var im = new Image;
          return im.onload = function() {
            /** @type {boolean} */
            target.use_data_uri = 1 === im.width && 1 === im.height;
          }, setTimeout(function() {
            /** @type {string} */
            im.src = "data:image/gif;base64,R0lGODlhAQABAIAAAP8AAAAAACH5BAAAAAAALAAAAAABAAEAAAICRAEAOw==";
          }, 1), false;
        }(),
        /**
         * @return {?}
         */
        use_data_uri_over32kb : function() {
          return target.use_data_uri && ("IE" !== data.browser || data.version >= 9);
        },
        /**
         * @param {number} dataAndEvents
         * @return {?}
         */
        use_data_uri_of : function(dataAndEvents) {
          return target.use_data_uri && 33E3 > dataAndEvents || target.use_data_uri_over32kb();
        },
        /**
         * @return {?}
         */
        use_fileinput : function() {
          /** @type {Element} */
          var input = document.createElement("input");
          return input.setAttribute("type", "file"), !input.disabled;
        }
      };
      return function(method) {
        /** @type {Array.<?>} */
        var args = [].slice.call(arguments);
        return args.shift(), "function" === $.typeOf(target[method]) ? target[method].apply(this, args) : !!target[method];
      };
    }();
    var data = {
      can : baseName,
      browser : userAgent.browser.name,
      version : parseFloat(userAgent.browser.major),
      os : userAgent.os.name,
      osVersion : userAgent.os.version,
      /** @type {function ((Array|string), (Array|string), string): ?} */
      verComp : cmp,
      swf_url : "../flash/Moxie.swf",
      xap_url : "../silverlight/Moxie.xap",
      global_event_dispatcher : "moxie.core.EventTarget.instance.dispatchEvent"
    };
    return data.OS = data.os, data;
  });
  expect(changes, [before], function(b) {
    /**
     * @param {?} string
     * @return {?}
     */
    var get = function(string) {
      return "string" != typeof string ? string : document.getElementById(string);
    };
    /**
     * @param {Element} node
     * @param {string} selector
     * @return {?}
     */
    var hasClass = function(node, selector) {
      if (!node.className) {
        return false;
      }
      /** @type {RegExp} */
      var nocode = new RegExp("(^|\\s+)" + selector + "(\\s+|$)");
      return nocode.test(node.className);
    };
    /**
     * @param {Element} el
     * @param {string} className
     * @return {undefined}
     */
    var addClass = function(el, className) {
      if (!hasClass(el, className)) {
        el.className = el.className ? el.className.replace(/\s+$/, "") + " " + className : className;
      }
    };
    /**
     * @param {Node} el
     * @param {string} classNames
     * @return {undefined}
     */
    var removeClass = function(el, classNames) {
      if (el.className) {
        /** @type {RegExp} */
        var re = new RegExp("(^|\\s+)" + classNames + "(\\s+|$)");
        el.className = el.className.replace(re, function(ignoreMethodDoesntExist, dataAndEvents, deepDataAndEvents) {
          return " " === dataAndEvents && " " === deepDataAndEvents ? " " : "";
        });
      }
    };
    /**
     * @param {?} elem
     * @param {string} name
     * @return {?}
     */
    var getStyle = function(elem, name) {
      return elem.currentStyle ? elem.currentStyle[name] : window.getComputedStyle ? window.getComputedStyle(elem, null)[name] : void 0;
    };
    /**
     * @param {HTMLElement} node
     * @param {HTMLElement} root
     * @return {?}
     */
    var update = function(node, root) {
      /**
       * @param {Object} node
       * @return {?}
       */
      function getIEPos(node) {
        var b;
        var p;
        /** @type {number} */
        var moveX = 0;
        /** @type {number} */
        var moveY = 0;
        return node && (p = node.getBoundingClientRect(), b = "CSS1Compat" === doc.compatMode ? doc.documentElement : doc.body, moveX = p.left + b.scrollLeft, moveY = p.top + b.scrollTop), {
          x : moveX,
          y : moveY
        };
      }
      /** @type {number} */
      var moveX = 0;
      /** @type {number} */
      var moveY = 0;
      var parent;
      /** @type {HTMLDocument} */
      var doc = document;
      var nodeRect;
      var rootRect;
      if (node = node, root = root || doc.body, node && (node.getBoundingClientRect && ("IE" === b.browser && (!doc.documentMode || doc.documentMode < 8)))) {
        return nodeRect = getIEPos(node), rootRect = getIEPos(root), {
          x : nodeRect.x - rootRect.x,
          y : nodeRect.y - rootRect.y
        };
      }
      /** @type {HTMLElement} */
      parent = node;
      for (;parent && (parent != root && parent.nodeType);) {
        moveX += parent.offsetLeft || 0;
        moveY += parent.offsetTop || 0;
        parent = parent.offsetParent;
      }
      parent = node.parentNode;
      for (;parent && (parent != root && parent.nodeType);) {
        moveX -= parent.scrollLeft || 0;
        moveY -= parent.scrollTop || 0;
        parent = parent.parentNode;
      }
      return{
        x : moveX,
        y : moveY
      };
    };
    /**
     * @param {HTMLElement} element
     * @return {?}
     */
    var getSize = function(element) {
      return{
        w : element.offsetWidth || element.clientWidth,
        h : element.offsetHeight || element.clientHeight
      };
    };
    return{
      /** @type {function (?): ?} */
      get : get,
      /** @type {function (Element, string): ?} */
      hasClass : hasClass,
      /** @type {function (Element, string): undefined} */
      addClass : addClass,
      /** @type {function (Node, string): undefined} */
      removeClass : removeClass,
      /** @type {function (?, string): ?} */
      getStyle : getStyle,
      /** @type {function (HTMLElement, HTMLElement): ?} */
      getPos : update,
      /** @type {function (HTMLElement): ?} */
      getSize : getSize
    };
  });
  expect(input, [versions], function(util) {
    /**
     * @param {?} prop
     * @param {string} name
     * @return {?}
     */
    function test(prop, name) {
      var n;
      for (n in prop) {
        if (prop[n] === name) {
          return n;
        }
      }
      return null;
    }
    return{
      RuntimeError : function() {
        /**
         * @param {string} node
         * @return {undefined}
         */
        function ctor(node) {
          /** @type {string} */
          this.code = node;
          this.name = test(name, node);
          /** @type {string} */
          this.message = this.name + ": RuntimeError " + this.code;
        }
        var name = {
          NOT_INIT_ERR : 1,
          NOT_SUPPORTED_ERR : 9,
          JS_ERR : 4
        };
        return util.extend(ctor, name), ctor.prototype = Error.prototype, ctor;
      }(),
      OperationNotAllowedException : function() {
        /**
         * @param {string} code
         * @return {undefined}
         */
        function ctor(code) {
          /** @type {string} */
          this.code = code;
          /** @type {string} */
          this.name = "OperationNotAllowedException";
        }
        return util.extend(ctor, {
          NOT_ALLOWED_ERR : 1
        }), ctor.prototype = Error.prototype, ctor;
      }(),
      ImageError : function() {
        /**
         * @param {string} node
         * @return {undefined}
         */
        function ctor(node) {
          /** @type {string} */
          this.code = node;
          this.name = test(name, node);
          /** @type {string} */
          this.message = this.name + ": ImageError " + this.code;
        }
        var name = {
          WRONG_FORMAT : 1,
          MAX_RESOLUTION_ERR : 2
        };
        return util.extend(ctor, name), ctor.prototype = Error.prototype, ctor;
      }(),
      FileException : function() {
        /**
         * @param {string} name
         * @return {undefined}
         */
        function ctor(name) {
          /** @type {string} */
          this.code = name;
          this.name = test(FILE_ERROR_CONST_NAME_TO_STR_MSG_MAP, name);
          /** @type {string} */
          this.message = this.name + ": FileException " + this.code;
        }
        var FILE_ERROR_CONST_NAME_TO_STR_MSG_MAP = {
          NOT_FOUND_ERR : 1,
          SECURITY_ERR : 2,
          ABORT_ERR : 3,
          NOT_READABLE_ERR : 4,
          ENCODING_ERR : 5,
          NO_MODIFICATION_ALLOWED_ERR : 6,
          INVALID_STATE_ERR : 7,
          SYNTAX_ERR : 8
        };
        return util.extend(ctor, FILE_ERROR_CONST_NAME_TO_STR_MSG_MAP), ctor.prototype = Error.prototype, ctor;
      }(),
      DOMException : function() {
        /**
         * @param {(Object|string)} name
         * @return {undefined}
         */
        function ctor(name) {
          /** @type {(Object|string)} */
          this.code = name;
          this.name = test(prop, name);
          /** @type {string} */
          this.message = this.name + ": DOMException " + this.code;
        }
        var prop = {
          INDEX_SIZE_ERR : 1,
          DOMSTRING_SIZE_ERR : 2,
          HIERARCHY_REQUEST_ERR : 3,
          WRONG_DOCUMENT_ERR : 4,
          INVALID_CHARACTER_ERR : 5,
          NO_DATA_ALLOWED_ERR : 6,
          NO_MODIFICATION_ALLOWED_ERR : 7,
          NOT_FOUND_ERR : 8,
          NOT_SUPPORTED_ERR : 9,
          INUSE_ATTRIBUTE_ERR : 10,
          INVALID_STATE_ERR : 11,
          SYNTAX_ERR : 12,
          INVALID_MODIFICATION_ERR : 13,
          NAMESPACE_ERR : 14,
          INVALID_ACCESS_ERR : 15,
          VALIDATION_ERR : 16,
          TYPE_MISMATCH_ERR : 17,
          SECURITY_ERR : 18,
          NETWORK_ERR : 19,
          ABORT_ERR : 20,
          URL_MISMATCH_ERR : 21,
          QUOTA_EXCEEDED_ERR : 22,
          TIMEOUT_ERR : 23,
          INVALID_NODE_TYPE_ERR : 24,
          DATA_CLONE_ERR : 25
        };
        return util.extend(ctor, prop), ctor.prototype = Error.prototype, ctor;
      }(),
      EventException : function() {
        /**
         * @param {string} code
         * @return {undefined}
         */
        function ctor(code) {
          /** @type {string} */
          this.code = code;
          /** @type {string} */
          this.name = "EventException";
        }
        return util.extend(ctor, {
          UNSPECIFIED_EVENT_TYPE_ERR : 0
        }), ctor.prototype = Error.prototype, ctor;
      }()
    };
  });
  expect(selector, [input, versions], function(dataAndEvents, $) {
    /**
     * @return {undefined}
     */
    function init() {
      var converts = {};
      $.extend(this, {
        uid : null,
        /**
         * @return {undefined}
         */
        init : function() {
          if (!this.uid) {
            this.uid = $.guid("uid_");
          }
        },
        /**
         * @param {string} type
         * @param {Function} handler
         * @param {number} useCapture
         * @param {Object} scope
         * @return {?}
         */
        addEventListener : function(type, handler, useCapture, scope) {
          var elm = this;
          var queue;
          return type = $.trim(type), /\s/.test(type) ? void $.each(type.split(/\s+/), function(eventName) {
            elm.addEventListener(eventName, handler, useCapture, scope);
          }) : (type = type.toLowerCase(), useCapture = parseInt(useCapture, 10) || 0, queue = converts[this.uid] && converts[this.uid][type] || [], queue.push({
            /** @type {Function} */
            fn : handler,
            priority : useCapture,
            scope : scope || this
          }), converts[this.uid] || (converts[this.uid] = {}), void(converts[this.uid][type] = queue));
        },
        /**
         * @param {boolean} type
         * @return {?}
         */
        hasEventListener : function(type) {
          return type ? !(!converts[this.uid] || !converts[this.uid][type]) : !!converts[this.uid];
        },
        /**
         * @param {string} type
         * @param {?} callback
         * @return {undefined}
         */
        removeEventListener : function(type, callback) {
          type = type.toLowerCase();
          var fns = converts[this.uid] && converts[this.uid][type];
          var i;
          if (fns) {
            if (callback) {
              /** @type {number} */
              i = fns.length - 1;
              for (;i >= 0;i--) {
                if (fns[i].fn === callback) {
                  fns.splice(i, 1);
                  break;
                }
              }
            } else {
              /** @type {Array} */
              fns = [];
            }
            if (!fns.length) {
              delete converts[this.uid][type];
              if ($.isEmptyObj(converts[this.uid])) {
                delete converts[this.uid];
              }
            }
          }
        },
        /**
         * @return {undefined}
         */
        removeAllEventListeners : function() {
          if (converts[this.uid]) {
            delete converts[this.uid];
          }
        },
        /**
         * @param {string} type
         * @return {?}
         */
        dispatchEvent : function(type) {
          var prevType;
          var scripts;
          var args;
          var data;
          var e = {};
          /** @type {boolean} */
          var evt = true;
          var ln;
          if ("string" !== $.typeOf(type)) {
            if (data = type, "string" !== $.typeOf(data.type)) {
              throw new dataAndEvents.EventException(dataAndEvents.EventException.UNSPECIFIED_EVENT_TYPE_ERR);
            }
            type = data.type;
            if (data.total !== ln) {
              if (data.loaded !== ln) {
                e.total = data.total;
                e.loaded = data.loaded;
              }
            }
            e.async = data.async || false;
          }
          if (-1 !== type.indexOf("::") ? !function(events) {
            prevType = events[0];
            type = events[1];
          }(type.split("::")) : prevType = this.uid, type = type.toLowerCase(), scripts = converts[prevType] && converts[prevType][type]) {
            scripts.sort(function(b, a) {
              return a.priority - b.priority;
            });
            /** @type {Array.<?>} */
            args = [].slice.call(arguments);
            args.shift();
            e.type = type;
            args.unshift(e);
            /** @type {Array} */
            var classNames = [];
            $.each(scripts, function(ev) {
              args[0].target = ev.scope;
              classNames.push(e.async ? function($sanitize) {
                setTimeout(function() {
                  $sanitize(ev.fn.apply(ev.scope, args) === false);
                }, 1);
              } : function($sanitize) {
                $sanitize(ev.fn.apply(ev.scope, args) === false);
              });
            });
            if (classNames.length) {
              $.inSeries(classNames, function(dataAndEvents) {
                /** @type {boolean} */
                evt = !dataAndEvents;
              });
            }
          }
          return evt;
        },
        /**
         * @return {undefined}
         */
        bind : function() {
          this.addEventListener.apply(this, arguments);
        },
        /**
         * @return {undefined}
         */
        unbind : function() {
          this.removeEventListener.apply(this, arguments);
        },
        /**
         * @return {undefined}
         */
        unbindAll : function() {
          this.removeAllEventListeners.apply(this, arguments);
        },
        /**
         * @return {?}
         */
        trigger : function() {
          return this.dispatchEvent.apply(this, arguments);
        },
        /**
         * @param {Array} events
         * @return {undefined}
         */
        convertEventPropsToHandlers : function(events) {
          var event;
          if ("array" !== $.typeOf(events)) {
            /** @type {Array} */
            events = [events];
          }
          /** @type {number} */
          var e = 0;
          for (;e < events.length;e++) {
            event = "on" + events[e];
            if ("function" === $.typeOf(this[event])) {
              this.addEventListener(events[e], this[event]);
            } else {
              if ("undefined" === $.typeOf(this[event])) {
                /** @type {null} */
                this[event] = null;
              }
            }
          }
        }
      });
    }
    return init.instance = new init, init;
  });
  expect(target, [], function() {
    /**
     * @param {?} key
     * @return {?}
     */
    var compile = function(key) {
      return unescape(encodeURIComponent(key));
    };
    /**
     * @param {string} str
     * @return {?}
     */
    var log = function(str) {
      return decodeURIComponent(escape(str));
    };
    /**
     * @param {string} data
     * @param {boolean} callback
     * @return {?}
     */
    var write = function(data, callback) {
      if ("function" == typeof window.atob) {
        return callback ? log(window.atob(data)) : window.atob(data);
      }
      /** @type {string} */
      var excludes = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";
      var value;
      var surrogate2;
      var r;
      var o1;
      var o2;
      var object;
      var string;
      var mask;
      /** @type {number} */
      var i = 0;
      /** @type {number} */
      var ac = 0;
      /** @type {string} */
      var result = "";
      /** @type {Array} */
      var tmp_arr = [];
      if (!data) {
        return data;
      }
      data += "";
      do {
        /** @type {number} */
        o1 = excludes.indexOf(data.charAt(i++));
        /** @type {number} */
        o2 = excludes.indexOf(data.charAt(i++));
        /** @type {number} */
        object = excludes.indexOf(data.charAt(i++));
        /** @type {number} */
        string = excludes.indexOf(data.charAt(i++));
        /** @type {number} */
        mask = o1 << 18 | o2 << 12 | object << 6 | string;
        /** @type {number} */
        value = mask >> 16 & 255;
        /** @type {number} */
        surrogate2 = mask >> 8 & 255;
        /** @type {number} */
        r = 255 & mask;
        /** @type {string} */
        tmp_arr[ac++] = 64 == object ? String.fromCharCode(value) : 64 == string ? String.fromCharCode(value, surrogate2) : String.fromCharCode(value, surrogate2, r);
      } while (i < data.length);
      return result = tmp_arr.join(""), callback ? log(result) : result;
    };
    /**
     * @param {string} input
     * @param {(Node|string)} execResult
     * @return {?}
     */
    var parse = function(input, execResult) {
      if (execResult && compile(input), "function" == typeof window.btoa) {
        return window.btoa(input);
      }
      /** @type {string} */
      var extendedVals = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";
      var o1;
      var o2;
      var o3;
      var index2;
      var h3;
      var index1;
      var h4;
      var bits;
      /** @type {number} */
      var index = 0;
      /** @type {number} */
      var ac = 0;
      /** @type {string} */
      var word = "";
      /** @type {Array} */
      var tmp_arr = [];
      if (!input) {
        return input;
      }
      do {
        o1 = input.charCodeAt(index++);
        o2 = input.charCodeAt(index++);
        o3 = input.charCodeAt(index++);
        /** @type {number} */
        bits = o1 << 16 | o2 << 8 | o3;
        /** @type {number} */
        index2 = bits >> 18 & 63;
        /** @type {number} */
        h3 = bits >> 12 & 63;
        /** @type {number} */
        index1 = bits >> 6 & 63;
        /** @type {number} */
        h4 = 63 & bits;
        /** @type {string} */
        tmp_arr[ac++] = extendedVals.charAt(index2) + extendedVals.charAt(h3) + extendedVals.charAt(index1) + extendedVals.charAt(h4);
      } while (index < input.length);
      /** @type {string} */
      word = tmp_arr.join("");
      /** @type {number} */
      var i = input.length % 3;
      return(i ? word.slice(0, i - 3) : word) + "===".slice(i || 3);
    };
    return{
      /** @type {function (?): ?} */
      utf8_encode : compile,
      /** @type {function (string): ?} */
      utf8_decode : log,
      /** @type {function (string, boolean): ?} */
      atob : write,
      /** @type {function (string, (Node|string)): ?} */
      btoa : parse
    };
  });
  expect(newValue, [versions, changes, selector], function($, container, o) {
    /**
     * @param {string} options
     * @param {string} src
     * @param {Text} opts
     * @param {Object} config
     * @param {string} page
     * @return {undefined}
     */
    function init(options, src, opts, config, page) {
      var natives = this;
      var $cookies;
      var id = $.guid(src + "_");
      var data = page || "browser";
      options = options || {};
      rec[id] = this;
      opts = $.extend({
        access_binary : false,
        access_image_binary : false,
        display_media : false,
        do_cors : false,
        drag_and_drop : false,
        filter_by_extension : true,
        resize_image : false,
        report_upload_progress : false,
        return_response_headers : false,
        return_response_type : false,
        return_status_code : true,
        send_custom_headers : false,
        select_file : false,
        select_folder : false,
        select_multiple : true,
        send_binary_string : false,
        send_browser_cookies : true,
        send_multipart : true,
        slice_blob : false,
        stream_upload : false,
        summon_file_dialog : false,
        upload_filesize : true,
        use_http_method : true
      }, opts);
      if (options.preferred_caps) {
        data = init.getMode(config, options.preferred_caps, data);
      }
      $cookies = function() {
        var scripts = {};
        return{
          /**
           * @param {?} name
           * @param {?} key
           * @param {?} arg
           * @param {Array} args
           * @return {?}
           */
          exec : function(name, key, arg, args) {
            return $cookies[key] && (scripts[name] || (scripts[name] = {
              context : this,
              instance : new $cookies[key]
            }), scripts[name].instance[arg]) ? scripts[name].instance[arg].apply(this, args) : void 0;
          },
          /**
           * @param {?} path
           * @return {undefined}
           */
          removeInstance : function(path) {
            delete scripts[path];
          },
          /**
           * @return {undefined}
           */
          removeAllInstances : function() {
            var r = this;
            $.each(scripts, function(client, e) {
              if ("function" === $.typeOf(client.instance.destroy)) {
                client.instance.destroy.call(client.context);
              }
              r.removeInstance(e);
            });
          }
        };
      }();
      $.extend(this, {
        initialized : false,
        uid : id,
        type : src,
        mode : init.getMode(config, options.required_caps, data),
        shimid : id + "_container",
        clients : 0,
        options : options,
        /**
         * @param {string} method
         * @param {string} val
         * @return {?}
         */
        can : function(method, val) {
          var obj = arguments[2] || opts;
          if ("string" === $.typeOf(method) && ("undefined" === $.typeOf(val) && (method = init.parseCaps(method))), "object" === $.typeOf(method)) {
            var key;
            for (key in method) {
              if (!this.can(key, method[key], obj)) {
                return false;
              }
            }
            return true;
          }
          return "function" === $.typeOf(obj[method]) ? obj[method].call(this, val) : val === obj[method];
        },
        /**
         * @return {?}
         */
        getShimContainer : function() {
          var fragment;
          var elem = container.get(this.shimid);
          return elem || (fragment = this.options.container ? container.get(this.options.container) : document.body, elem = document.createElement("div"), elem.id = this.shimid, elem.className = "moxie-shim moxie-shim-" + this.type, $.extend(elem.style, {
            position : "absolute",
            top : "0px",
            left : "0px",
            width : "1px",
            height : "1px",
            overflow : "hidden"
          }), fragment.appendChild(elem), fragment = null), elem;
        },
        /**
         * @return {?}
         */
        getShim : function() {
          return $cookies;
        },
        /**
         * @param {?} graphics
         * @param {?} capture
         * @return {?}
         */
        shimExec : function(graphics, capture) {
          /** @type {Array.<?>} */
          var list = [].slice.call(arguments, 2);
          return natives.getShim().exec.call(this, this.uid, graphics, capture, list);
        },
        /**
         * @param {?} str
         * @param {?} arg
         * @return {?}
         */
        exec : function(str, arg) {
          /** @type {Array.<?>} */
          var args = [].slice.call(arguments, 2);
          return natives[str] && natives[str][arg] ? natives[str][arg].apply(this, args) : natives.shimExec.apply(this, arguments);
        },
        /**
         * @return {undefined}
         */
        destroy : function() {
          if (natives) {
            var tabPage = container.get(this.shimid);
            if (tabPage) {
              tabPage.parentNode.removeChild(tabPage);
            }
            if ($cookies) {
              $cookies.removeAllInstances();
            }
            this.unbindAll();
            delete rec[this.uid];
            /** @type {null} */
            this.uid = null;
            /** @type {null} */
            id = natives = $cookies = tabPage = null;
          }
        }
      });
      if (this.mode) {
        if (options.required_caps) {
          if (!this.can(options.required_caps)) {
            /** @type {boolean} */
            this.mode = false;
          }
        }
      }
    }
    var clt = {};
    var rec = {};
    return init.order = "html5,flash,silverlight,html4", init.getRuntime = function(item) {
      return rec[item] ? rec[item] : false;
    }, init.addConstructor = function(value, node) {
      node.prototype = o.instance;
      /** @type {Function} */
      clt[value] = node;
    }, init.getConstructor = function(value) {
      return clt[value] || null;
    }, init.getInfo = function(args) {
      var self = init.getRuntime(args);
      return self ? {
        uid : self.uid,
        type : self.type,
        mode : self.mode,
        /**
         * @return {?}
         */
        can : function() {
          return self.can.apply(self, arguments);
        }
      } : null;
    }, init.parseCaps = function(string) {
      var buf = {};
      return "string" !== $.typeOf(string) ? string || {} : ($.each(string.split(","), function(off) {
        /** @type {boolean} */
        buf[off] = true;
      }), buf);
    }, init.can = function(method, var_args) {
      var result;
      var subject = init.getConstructor(method);
      var n;
      return subject ? (result = new subject({
        required_caps : var_args
      }), n = result.mode, result.destroy(), !!n) : false;
    }, init.thatCan = function(opt_e, classNames) {
      var map = (classNames || init.order).split(/\s*,\s*/);
      var letter;
      for (letter in map) {
        if (init.can(map[letter], opt_e)) {
          return map[letter];
        }
      }
      return null;
    }, init.getMode = function(options, which, fn) {
      /** @type {null} */
      var elems = null;
      if ("undefined" === $.typeOf(fn) && (fn = "browser"), which && !$.isEmptyObj(options)) {
        if ($.each(which, function(obj, key) {
          if (options.hasOwnProperty(key)) {
            var b = options[key](obj);
            if ("string" == typeof b && (b = [b]), elems) {
              if (!(elems = $.arrayIntersect(elems, b))) {
                return elems = false;
              }
            } else {
              elems = b;
            }
          }
        }), elems) {
          return-1 !== $.inArray(fn, elems) ? fn : elems[0];
        }
        if (elems === false) {
          return false;
        }
      }
      return fn;
    }, init.capTrue = function() {
      return true;
    }, init.capFalse = function() {
      return false;
    }, init.capTest = function(dataAndEvents) {
      return function() {
        return!!dataAndEvents;
      };
    }, init;
  });
  expect(checkSet, [input, versions, newValue], function(dataAndEvents, _, hash) {
    return function cycle() {
      var self;
      _.extend(this, {
        /**
         * @param {string} file
         * @return {?}
         */
        connectRuntime : function(file) {
          /**
           * @param {Array} errors
           * @return {?}
           */
          function done(errors) {
            var source;
            var sourceKeys;
            return errors.length ? (source = errors.shift(), (sourceKeys = hash.getConstructor(source)) ? (self = new sourceKeys(file), self.bind("Init", function() {
              /** @type {boolean} */
              self.initialized = true;
              setTimeout(function() {
                self.clients++;
                collection.trigger("RuntimeInit", self);
              }, 1);
            }), self.bind("Error", function() {
              self.destroy();
              done(errors);
            }), self.mode ? void self.init() : void self.trigger("Error")) : void done(errors)) : (collection.trigger("RuntimeError", new dataAndEvents.RuntimeError(dataAndEvents.RuntimeError.NOT_INIT_ERR)), void(self = null));
          }
          var collection = this;
          var string;
          if ("string" === _.typeOf(file) ? string = file : "string" === _.typeOf(file.ruid) && (string = file.ruid), string) {
            if (self = hash.getRuntime(string)) {
              return self.clients++, self;
            }
            throw new dataAndEvents.RuntimeError(dataAndEvents.RuntimeError.NOT_INIT_ERR);
          }
          done((file.runtime_order || hash.order).split(/\s*,\s*/));
        },
        /**
         * @return {?}
         */
        getRuntime : function() {
          return self && self.uid ? self : (self = null, null);
        },
        /**
         * @return {undefined}
         */
        disconnectRuntime : function() {
          if (self) {
            if (--self.clients <= 0) {
              self.destroy();
              /** @type {null} */
              self = null;
            }
          }
        }
      });
    };
  });
  expect(values, [versions, target, checkSet], function($, $window, next_callback) {
    /**
     * @param {Function} f
     * @param {Object} data
     * @return {undefined}
     */
    function init(f, data) {
      /**
       * @param {number} left
       * @param {number} right
       * @param {string} type
       * @return {?}
       */
      function init(left, right, type) {
        var d;
        var val = row[this.uid];
        return "string" === $.typeOf(val) && val.length ? (d = new init(null, {
          type : type,
          size : right - left
        }), d.detach(val.substr(left, d.size)), d) : null;
      }
      next_callback.call(this);
      if (f) {
        this.connectRuntime(f);
      }
      if (data) {
        if ("string" === $.typeOf(data)) {
          data = {
            data : data
          };
        }
      } else {
        data = {};
      }
      $.extend(this, {
        uid : data.uid || $.guid("uid_"),
        /** @type {Function} */
        ruid : f,
        size : data.size || 0,
        type : data.type || "",
        /**
         * @param {number} start
         * @param {number} e
         * @param {?} callback
         * @return {?}
         */
        slice : function(start, e, callback) {
          return this.isDetached() ? init.apply(this, arguments) : this.getRuntime().exec.call(this, "Blob", "slice", this.getSource(), start, e, callback);
        },
        /**
         * @return {?}
         */
        getSource : function() {
          return row[this.uid] ? row[this.uid] : null;
        },
        /**
         * @param {string} line
         * @return {undefined}
         */
        detach : function(line) {
          if (this.ruid) {
            this.getRuntime().exec.call(this, "Blob", "destroy");
            this.disconnectRuntime();
            /** @type {null} */
            this.ruid = null;
          }
          line = line || "";
          var arr = line.match(/^data:([^;]*);base64,/);
          if (arr) {
            this.type = arr[1];
            line = $window.atob(line.substring(line.indexOf("base64,") + 7));
          }
          this.size = line.length;
          /** @type {string} */
          row[this.uid] = line;
        },
        /**
         * @return {?}
         */
        isDetached : function() {
          return!this.ruid && "string" === $.typeOf(row[this.uid]);
        },
        /**
         * @return {undefined}
         */
        destroy : function() {
          this.detach();
          delete row[this.uid];
        }
      });
      if (data.data) {
        this.detach(data.data);
      } else {
        /** @type {Object} */
        row[this.uid] = data;
      }
    }
    var row = {};
    return init;
  });
  expect(result, [versions, iter, values], function(Y, exports, matcherFunction) {
    /**
     * @param {?} allBindingsAccessor
     * @param {Object} file
     * @return {undefined}
     */
    function init(allBindingsAccessor, file) {
      var name;
      var type;
      if (file || (file = {}), type = file.type && "" !== file.type ? file.type : exports.getFileMime(file.name), file.name) {
        name = file.name.replace(/\\/g, "/");
        name = name.substr(name.lastIndexOf("/") + 1);
      } else {
        var g = type.split("/")[0];
        name = Y.guid(("" !== g ? g : "file") + "_");
        if (exports.extensions[type]) {
          name += "." + exports.extensions[type][0];
        }
      }
      matcherFunction.apply(this, arguments);
      Y.extend(this, {
        type : type || "",
        name : name || Y.guid("file_"),
        lastModifiedDate : file.lastModifiedDate || (new Date).toLocaleString()
      });
    }
    return init.prototype = matcherFunction.prototype, init;
  });
  expect(progressValues, [versions, iter, changes, input, selector, elems, result, newValue, checkSet], function($, fn, view, global, c, projection, Project, Backbone, getter) {
    /**
     * @param {Object} options
     * @return {undefined}
     */
    function init(options) {
      var self = this;
      var body;
      var config;
      var data;
      if (-1 !== $.inArray($.typeOf(options), ["string", "node"]) && (options = {
        browse_button : options
      }), config = view.get(options.browse_button), !config) {
        throw new global.DOMException(global.DOMException.NOT_FOUND_ERR);
      }
      data = {
        accept : [{
          title : projection.translate("All Files"),
          extensions : "*"
        }],
        name : "file",
        multiple : false,
        required_caps : false,
        container : config.parentNode || document.body
      };
      options = $.extend({}, data, options);
      if ("string" == typeof options.required_caps) {
        options.required_caps = Backbone.parseCaps(options.required_caps);
      }
      if ("string" == typeof options.accept) {
        options.accept = fn.mimes2extList(options.accept);
      }
      body = view.get(options.container);
      if (!body) {
        /** @type {(HTMLElement|null)} */
        body = document.body;
      }
      if ("static" === view.getStyle(body, "position")) {
        /** @type {string} */
        body.style.position = "relative";
      }
      /** @type {null} */
      body = config = null;
      getter.call(self);
      $.extend(self, {
        uid : $.guid("uid_"),
        ruid : null,
        shimid : null,
        files : null,
        /**
         * @return {undefined}
         */
        init : function() {
          self.convertEventPropsToHandlers(events);
          self.bind("RuntimeInit", function(dataAndEvents, el) {
            self.ruid = el.uid;
            self.shimid = el.shimid;
            self.bind("Ready", function() {
              self.trigger("Refresh");
            }, 999);
            self.bind("Change", function() {
              var which = el.exec.call(self, "FileInput", "getFiles");
              /** @type {Array} */
              self.files = [];
              $.each(which, function(d) {
                return 0 === d.size ? true : void self.files.push(new Project(self.ruid, d));
              });
            }, 999);
            self.bind("Refresh", function() {
              var pos;
              var vp;
              var body;
              var doc;
              body = view.get(options.browse_button);
              doc = view.get(el.shimid);
              if (body) {
                pos = view.getPos(body, view.get(options.container));
                vp = view.getSize(body);
                if (doc) {
                  $.extend(doc.style, {
                    top : pos.y + "px",
                    left : pos.x + "px",
                    width : vp.w + "px",
                    height : vp.h + "px"
                  });
                }
              }
              /** @type {null} */
              doc = body = null;
            });
            el.exec.call(self, "FileInput", "init", options);
          });
          self.connectRuntime($.extend({}, options, {
            required_caps : {
              select_file : true
            }
          }));
        },
        /**
         * @param {boolean} val
         * @return {undefined}
         */
        disable : function(val) {
          var commandDefinition = this.getRuntime();
          if (commandDefinition) {
            commandDefinition.exec.call(this, "FileInput", "disable", "undefined" === $.typeOf(val) ? true : val);
          }
        },
        /**
         * @return {undefined}
         */
        refresh : function() {
          self.trigger("Refresh");
        },
        /**
         * @return {undefined}
         */
        destroy : function() {
          var commandDefinition = this.getRuntime();
          if (commandDefinition) {
            commandDefinition.exec.call(this, "FileInput", "destroy");
            this.disconnectRuntime();
          }
          if ("array" === $.typeOf(this.files)) {
            $.each(this.files, function(todo) {
              todo.destroy();
            });
          }
          /** @type {null} */
          this.files = null;
        }
      });
    }
    /** @type {Array} */
    var events = ["ready", "change", "cancel", "mouseenter", "mouseleave", "mousedown", "mouseup"];
    return init.prototype = c.instance, init;
  });
  expect(array, [elems, changes, input, versions, result, checkSet, selector, iter], function(projection, el, dataAndEvents, $, Sprite, getter, c, fn) {
    /**
     * @param {Object} options
     * @return {undefined}
     */
    function init(options) {
      var self = this;
      var object;
      if ("string" == typeof options) {
        options = {
          drop_zone : options
        };
      }
      object = {
        accept : [{
          title : projection.translate("All Files"),
          extensions : "*"
        }],
        required_caps : {
          drag_and_drop : true
        }
      };
      options = "object" == typeof options ? $.extend({}, object, options) : object;
      options.container = el.get(options.drop_zone) || document.body;
      if ("static" === el.getStyle(options.container, "position")) {
        /** @type {string} */
        options.container.style.position = "relative";
      }
      if ("string" == typeof options.accept) {
        options.accept = fn.mimes2extList(options.accept);
      }
      getter.call(self);
      $.extend(self, {
        uid : $.guid("uid_"),
        ruid : null,
        files : null,
        /**
         * @return {undefined}
         */
        init : function() {
          self.convertEventPropsToHandlers(events);
          self.bind("RuntimeInit", function(dataAndEvents, task) {
            self.ruid = task.uid;
            self.bind("Drop", function() {
              var which = task.exec.call(self, "FileDrop", "getFiles");
              /** @type {Array} */
              self.files = [];
              $.each(which, function(src) {
                self.files.push(new Sprite(self.ruid, src));
              });
            }, 999);
            task.exec.call(self, "FileDrop", "init", options);
            self.dispatchEvent("ready");
          });
          self.connectRuntime(options);
        },
        /**
         * @return {undefined}
         */
        destroy : function() {
          var commandDefinition = this.getRuntime();
          if (commandDefinition) {
            commandDefinition.exec.call(this, "FileDrop", "destroy");
            this.disconnectRuntime();
          }
          /** @type {null} */
          this.files = null;
        }
      });
    }
    /** @type {Array} */
    var events = ["ready", "dragenter", "dragleave", "drop", "error"];
    return init.prototype = c.instance, init;
  });
  expect(ids, [versions, checkSet, selector], function(handler, next_callback, c) {
    /**
     * @return {undefined}
     */
    function init() {
      this.uid = handler.guid("uid_");
      next_callback.call(this);
      /**
       * @return {undefined}
       */
      this.destroy = function() {
        this.disconnectRuntime();
        this.unbindAll();
      };
    }
    return init.prototype = c.instance, init;
  });
  expect(gotData, [versions, target, input, selector, values, result, ids], function($, $window, global, self, Stream, dataAndEvents, subject) {
    /**
     * @return {undefined}
     */
    function xhr() {
      /**
       * @param {?} token
       * @param {Object} file
       * @return {?}
       */
      function handler(token, file) {
        /**
         * @param {Object} error
         * @return {undefined}
         */
        function callback(error) {
          /** @type {number} */
          res.readyState = xhr.DONE;
          /** @type {Object} */
          res.error = error;
          res.trigger("error");
          done();
        }
        /**
         * @return {undefined}
         */
        function done() {
          result.destroy();
          /** @type {null} */
          result = null;
          res.trigger("loadend");
        }
        /**
         * @param {RegExp} pattern
         * @return {undefined}
         */
        function next(pattern) {
          result.bind("Error", function(dataAndEvents, err) {
            callback(err);
          });
          result.bind("Progress", function(type) {
            res.result = pattern.exec.call(result, "FileReader", "getResult");
            res.trigger(type);
          });
          result.bind("Load", function(type) {
            /** @type {number} */
            res.readyState = xhr.DONE;
            res.result = pattern.exec.call(result, "FileReader", "getResult");
            res.trigger(type);
            done();
          });
          pattern.exec.call(result, "FileReader", "read", token, file);
        }
        if (result = new subject, this.convertEventPropsToHandlers(fileReaderEvents), this.readyState === xhr.LOADING) {
          return callback(new global.DOMException(global.DOMException.INVALID_STATE_ERR));
        }
        if (this.readyState = xhr.LOADING, this.trigger("loadstart"), file instanceof Stream) {
          if (file.isDetached()) {
            var val = file.getSource();
            switch(token) {
              case "readAsText":
              ;
              case "readAsBinaryString":
                this.result = val;
                break;
              case "readAsDataURL":
                this.result = "data:" + file.type + ";base64," + $window.btoa(val);
            }
            /** @type {number} */
            this.readyState = xhr.DONE;
            this.trigger("load");
            done();
          } else {
            next(result.connectRuntime(file.ruid));
          }
        } else {
          callback(new global.DOMException(global.DOMException.NOT_FOUND_ERR));
        }
      }
      var res = this;
      var result;
      $.extend(this, {
        uid : $.guid("uid_"),
        readyState : xhr.EMPTY,
        result : null,
        error : null,
        /**
         * @param {?} res
         * @return {undefined}
         */
        readAsBinaryString : function(res) {
          handler.call(this, "readAsBinaryString", res);
        },
        /**
         * @param {?} file
         * @return {undefined}
         */
        readAsDataURL : function(file) {
          handler.call(this, "readAsDataURL", file);
        },
        /**
         * @param {?} callback
         * @return {undefined}
         */
        readAsText : function(callback) {
          handler.call(this, "readAsText", callback);
        },
        /**
         * @return {undefined}
         */
        abort : function() {
          /** @type {null} */
          this.result = null;
          if (-1 === $.inArray(this.readyState, [xhr.EMPTY, xhr.DONE])) {
            if (this.readyState === xhr.LOADING) {
              /** @type {number} */
              this.readyState = xhr.DONE;
            }
            if (result) {
              result.getRuntime().exec.call(this, "FileReader", "abort");
            }
            this.trigger("abort");
            this.trigger("loadend");
          }
        },
        /**
         * @return {undefined}
         */
        destroy : function() {
          this.abort();
          if (result) {
            result.getRuntime().exec.call(this, "FileReader", "destroy");
            result.disconnectRuntime();
          }
          /** @type {null} */
          res = result = null;
        }
      });
    }
    /** @type {Array} */
    var fileReaderEvents = ["loadstart", "progress", "load", "abort", "error", "loadend"];
    return xhr.EMPTY = 0, xhr.LOADING = 1, xhr.DONE = 2, xhr.prototype = self.instance, xhr;
  });
  expect(files, [], function() {
    /**
     * @param {string} str
     * @param {string} base
     * @return {?}
     */
    var URI = function(str, base) {
      /** @type {Array} */
      var key = ["source", "scheme", "authority", "userInfo", "user", "pass", "host", "port", "relative", "path", "directory", "file", "query", "fragment"];
      /** @type {number} */
      var i = key.length;
      var slashedProtocol = {
        http : 80,
        https : 443
      };
      var result = {};
      /** @type {RegExp} */
      var re = /^(?:([^:\/?#]+):)?(?:\/\/()(?:(?:()(?:([^:@]*):?([^:@]*))?@)?([^:\/?#]*)(?::(\d*))?))?()(?:(()(?:(?:[^?#\/]*\/)*)()(?:[^?#]*))(?:\\?([^#]*))?(?:#(.*))?)/;
      /** @type {(Array.<string>|null)} */
      var items = re.exec(str || "");
      for (;i--;) {
        if (items[i]) {
          /** @type {string} */
          result[key[i]] = items[i];
        }
      }
      if (!result.scheme) {
        if (!(base && "string" != typeof base)) {
          base = URI(base || document.location.href);
        }
        result.scheme = base.scheme;
        result.host = base.host;
        result.port = base.port;
        /** @type {string} */
        var path = "";
        if (/^[^\/]/.test(result.path)) {
          path = base.path;
          if (/(\/|\/[^\.]+)$/.test(path)) {
            path += "/";
          } else {
            path = path.replace(/\/[^\/]+$/, "/");
          }
        }
        result.path = path + (result.path || "");
      }
      return result.port || (result.port = slashedProtocol[result.scheme] || 80), result.port = parseInt(result.port, 10), result.path || (result.path = "/"), delete result.source, result;
    };
    /**
     * @param {string} path
     * @return {?}
     */
    var Test = function(path) {
      var pathedProtocol = {
        http : 80,
        https : 443
      };
      var options = URI(path);
      return options.scheme + "://" + options.host + (options.port !== pathedProtocol[options.scheme] ? ":" + options.port : "") + options.path + (options.query ? options.query : "");
    };
    /**
     * @param {string} url
     * @return {?}
     */
    var request = function(url) {
      /**
       * @param {?} aParsedUrl
       * @return {?}
       */
      function urlGenerate(aParsedUrl) {
        return[aParsedUrl.scheme, aParsedUrl.host, aParsedUrl.port].join("/");
      }
      return "string" == typeof url && (url = URI(url)), urlGenerate(URI()) === urlGenerate(url);
    };
    return{
      /** @type {function (string, string): ?} */
      parseUrl : URI,
      /** @type {function (string): ?} */
      resolveUrl : Test,
      /** @type {function (string): ?} */
      hasSameOrigin : request
    };
  });
  expect(args, [versions, checkSet, target], function($, next_callback, gridStore) {
    return function() {
      /**
       * @param {?} obj
       * @param {Event} file
       * @return {?}
       */
      function read(obj, file) {
        if (!file.isDetached()) {
          var key = this.connectRuntime(file.ruid).exec.call(this, "FileReaderSync", "read", obj, file);
          return this.disconnectRuntime(), key;
        }
        var data = file.getSource();
        switch(obj) {
          case "readAsBinaryString":
            return data;
          case "readAsDataURL":
            return "data:" + file.type + ";base64," + gridStore.btoa(data);
          case "readAsText":
            /** @type {string} */
            var features = "";
            /** @type {number} */
            var i = 0;
            var l = data.length;
            for (;l > i;i++) {
              features += String.fromCharCode(data[i]);
            }
            return features;
        }
      }
      next_callback.call(this);
      $.extend(this, {
        uid : $.guid("uid_"),
        /**
         * @param {?} filename
         * @return {?}
         */
        readAsBinaryString : function(filename) {
          return read.call(this, "readAsBinaryString", filename);
        },
        /**
         * @param {?} file
         * @return {?}
         */
        readAsDataURL : function(file) {
          return read.call(this, "readAsDataURL", file);
        },
        /**
         * @param {?} encoding
         * @return {?}
         */
        readAsText : function(encoding) {
          return read.call(this, "readAsText", encoding);
        }
      });
    };
  });
  expect(entry, [input, versions, values], function(dataAndEvents, $, Stream) {
    /**
     * @return {undefined}
     */
    function exports() {
      var data;
      /** @type {Array} */
      var events = [];
      $.extend(this, {
        /**
         * @param {string} key
         * @param {?} val
         * @return {undefined}
         */
        append : function(key, val) {
          var element = this;
          var type = $.typeOf(val);
          if (val instanceof Stream) {
            data = {
              name : key,
              value : val
            };
          } else {
            if ("array" === type) {
              key += "[]";
              $.each(val, function(doc) {
                element.append(key, doc);
              });
            } else {
              if ("object" === type) {
                $.each(val, function(doc, value) {
                  element.append(key + "[" + value + "]", doc);
                });
              } else {
                if ("null" === type || ("undefined" === type || "number" === type && isNaN(val))) {
                  element.append(key, "false");
                } else {
                  events.push({
                    name : key,
                    value : val.toString()
                  });
                }
              }
            }
          }
        },
        /**
         * @return {?}
         */
        hasBlob : function() {
          return!!this.getBlob();
        },
        /**
         * @return {?}
         */
        getBlob : function() {
          return data && data.value || null;
        },
        /**
         * @return {?}
         */
        getBlobName : function() {
          return data && data.name || null;
        },
        /**
         * @param {Object} callback
         * @return {undefined}
         */
        each : function(callback) {
          $.each(events, function(remote) {
            callback(remote.value, remote.name);
          });
          if (data) {
            callback(data.value, data.name);
          }
        },
        /**
         * @return {undefined}
         */
        destroy : function() {
          /** @type {null} */
          data = null;
          /** @type {Array} */
          events = [];
        }
      });
    }
    return exports;
  });
  expect(method, [versions, input, selector, target, files, newValue, ids, values, args, entry, before, iter], function($, global, self, actual, utils, fn, Async, Data, dataAndEvents, HTMLElement, roles, o) {
    /**
     * @return {undefined}
     */
    function BasicObject() {
      this.uid = $.guid("uid_");
    }
    /**
     * @return {undefined}
     */
    function xhr() {
      /**
       * @param {string} name
       * @param {number} fn
       * @return {?}
       */
      function callback(name, fn) {
        return params.hasOwnProperty(name) ? 1 === arguments.length ? roles.can("define_property") ? params[name] : normalized[name] : void(roles.can("define_property") ? params[name] = fn : normalized[name] = fn) : void 0;
      }
      /**
       * @param {?} e
       * @return {undefined}
       */
      function run(e) {
        /**
         * @return {undefined}
         */
        function cb() {
          if (self) {
            self.destroy();
            /** @type {null} */
            self = null;
          }
          that.dispatchEvent("loadend");
          /** @type {null} */
          that = null;
        }
        /**
         * @param {RegExp} config
         * @return {undefined}
         */
        function load(config) {
          self.bind("LoadStart", function(e) {
            callback("readyState", xhr.LOADING);
            that.dispatchEvent("readystatechange");
            that.dispatchEvent(e);
            if (I) {
              that.upload.dispatchEvent(e);
            }
          });
          self.bind("Progress", function(e) {
            if (callback("readyState") !== xhr.LOADING) {
              callback("readyState", xhr.LOADING);
              that.dispatchEvent("readystatechange");
            }
            that.dispatchEvent(e);
          });
          self.bind("UploadProgress", function(event) {
            if (I) {
              that.upload.dispatchEvent({
                type : "progress",
                lengthComputable : false,
                total : event.total,
                loaded : event.loaded
              });
            }
          });
          self.bind("Load", function(e) {
            callback("readyState", xhr.DONE);
            callback("status", Number(config.exec.call(self, "XMLHttpRequest", "getStatus") || 0));
            callback("statusText", segmentMatch[callback("status")] || "");
            callback("response", config.exec.call(self, "XMLHttpRequest", "getResponse", callback("responseType")));
            if (~$.inArray(callback("responseType"), ["text", ""])) {
              callback("responseText", callback("response"));
            } else {
              if ("document" === callback("responseType")) {
                callback("responseXML", callback("response"));
              }
            }
            classes = config.exec.call(self, "XMLHttpRequest", "getAllResponseHeaders");
            that.dispatchEvent("readystatechange");
            if (callback("status") > 0) {
              if (I) {
                that.upload.dispatchEvent(e);
              }
              that.dispatchEvent(e);
            } else {
              /** @type {boolean} */
              N = true;
              that.dispatchEvent("error");
            }
            cb();
          });
          self.bind("Abort", function(e) {
            that.dispatchEvent(e);
            cb();
          });
          self.bind("Error", function(e) {
            /** @type {boolean} */
            N = true;
            callback("readyState", xhr.DONE);
            that.dispatchEvent("readystatechange");
            /** @type {boolean} */
            capture = true;
            that.dispatchEvent(e);
            cb();
          });
          config.exec.call(self, "XMLHttpRequest", "send", {
            url : include,
            method : name,
            async : compareResult,
            user : res,
            password : pss,
            headers : metadata,
            mimeType : mimeType,
            encoding : encoding,
            responseType : that.responseType,
            withCredentials : that.withCredentials,
            options : options
          }, e);
        }
        var that = this;
        /** @type {number} */
        stack = (new Date).getTime();
        self = new Async;
        if ("string" == typeof options.required_caps) {
          options.required_caps = fn.parseCaps(options.required_caps);
        }
        options.required_caps = $.extend({}, options.required_caps, {
          return_response_type : that.responseType
        });
        if (e instanceof HTMLElement) {
          /** @type {boolean} */
          options.required_caps.send_multipart = true;
        }
        if (!result) {
          /** @type {boolean} */
          options.required_caps.do_cors = true;
        }
        if (options.ruid) {
          load(self.connectRuntime(options));
        } else {
          self.bind("RuntimeInit", function(dataAndEvents, value) {
            load(value);
          });
          self.bind("RuntimeError", function(dataAndEvents, e) {
            that.dispatchEvent("RuntimeError", e);
          });
          self.connectRuntime(options);
        }
      }
      /**
       * @return {undefined}
       */
      function install() {
        callback("responseText", "");
        callback("responseXML", null);
        callback("response", null);
        callback("status", 0);
        callback("statusText", "");
        /** @type {null} */
        stack = memory = null;
      }
      var normalized = this;
      var params = {
        timeout : 0,
        readyState : xhr.UNSENT,
        withCredentials : false,
        status : 0,
        statusText : "",
        responseType : "",
        responseXML : null,
        responseText : null,
        response : null
      };
      /** @type {boolean} */
      var compareResult = true;
      var include;
      var name;
      var metadata = {};
      var res;
      var pss;
      /** @type {null} */
      var encoding = null;
      /** @type {null} */
      var mimeType = null;
      /** @type {boolean} */
      var found = false;
      /** @type {boolean} */
      var readyState = false;
      /** @type {boolean} */
      var I = false;
      /** @type {boolean} */
      var capture = false;
      /** @type {boolean} */
      var N = false;
      /** @type {boolean} */
      var result = false;
      var stack;
      var memory;
      /** @type {null} */
      var msg = null;
      /** @type {null} */
      var maxLine = null;
      var options = {};
      var self;
      /** @type {string} */
      var classes = "";
      var headers;
      $.extend(this, params, {
        uid : $.guid("uid_"),
        upload : new BasicObject,
        /**
         * @param {string} a
         * @param {string} path
         * @param {boolean} dataAndEvents
         * @param {string} err
         * @param {string} user
         * @return {undefined}
         */
        open : function(a, path, dataAndEvents, err, user) {
          var test;
          if (!a || !path) {
            throw new global.DOMException(global.DOMException.SYNTAX_ERR);
          }
          if (/[\u0100-\uffff]/.test(a) || actual.utf8_encode(a) !== a) {
            throw new global.DOMException(global.DOMException.SYNTAX_ERR);
          }
          if (~$.inArray(a.toUpperCase(), ["CONNECT", "DELETE", "GET", "HEAD", "OPTIONS", "POST", "PUT", "TRACE", "TRACK"]) && (name = a.toUpperCase()), ~$.inArray(name, ["CONNECT", "TRACE", "TRACK"])) {
            throw new global.DOMException(global.DOMException.SECURITY_ERR);
          }
          if (path = actual.utf8_encode(path), test = utils.parseUrl(path), result = utils.hasSameOrigin(test), include = utils.resolveUrl(path), (err || user) && !result) {
            throw new global.DOMException(global.DOMException.INVALID_ACCESS_ERR);
          }
          if (res = err || test.user, pss = user || test.pass, compareResult = dataAndEvents || true, compareResult === false && (callback("timeout") || (callback("withCredentials") || "" !== callback("responseType")))) {
            throw new global.DOMException(global.DOMException.INVALID_ACCESS_ERR);
          }
          /** @type {boolean} */
          found = !compareResult;
          /** @type {boolean} */
          readyState = false;
          metadata = {};
          install.call(this);
          callback("readyState", xhr.OPENED);
          this.convertEventPropsToHandlers(["readystatechange"]);
          this.dispatchEvent("readystatechange");
        },
        /**
         * @param {?} key
         * @param {string} value
         * @return {?}
         */
        setRequestHeader : function(key, value) {
          /** @type {Array} */
          var UNSAFE_HEADERS = ["accept-charset", "accept-encoding", "access-control-request-headers", "access-control-request-method", "connection", "content-length", "cookie", "cookie2", "content-transfer-encoding", "date", "expect", "host", "keep-alive", "origin", "referer", "te", "trailer", "transfer-encoding", "upgrade", "user-agent", "via"];
          if (callback("readyState") !== xhr.OPENED || readyState) {
            throw new global.DOMException(global.DOMException.INVALID_STATE_ERR);
          }
          if (/[\u0100-\uffff]/.test(key) || actual.utf8_encode(key) !== key) {
            throw new global.DOMException(global.DOMException.SYNTAX_ERR);
          }
          return key = $.trim(key).toLowerCase(), ~$.inArray(key, UNSAFE_HEADERS) || /^(proxy\-|sec\-)/.test(key) ? false : (metadata[key] ? metadata[key] += ", " + value : metadata[key] = value, true);
        },
        /**
         * @return {?}
         */
        getAllResponseHeaders : function() {
          return classes || "";
        },
        /**
         * @param {string} name
         * @return {?}
         */
        getResponseHeader : function(name) {
          return name = name.toLowerCase(), N || ~$.inArray(name, ["set-cookie", "set-cookie2"]) ? null : classes && ("" !== classes && (headers || (headers = {}, $.each(classes.split(/\r\n/), function(pair) {
            var splits = pair.split(/:\s+/);
            if (2 === splits.length) {
              splits[0] = $.trim(splits[0]);
              headers[splits[0].toLowerCase()] = {
                header : splits[0],
                value : $.trim(splits[1])
              };
            }
          })), headers.hasOwnProperty(name))) ? headers[name].header + ": " + headers[name].value : null;
        },
        /**
         * @param {string} type
         * @return {undefined}
         */
        overrideMimeType : function(type) {
          var lines;
          var line;
          if (~$.inArray(callback("readyState"), [xhr.LOADING, xhr.DONE])) {
            throw new global.DOMException(global.DOMException.INVALID_STATE_ERR);
          }
          if (type = $.trim(type.toLowerCase()), /;/.test(type) && ((lines = type.match(/^([^;]+)(?:;\scharset\=)?(.*)$/)) && (type = lines[1], lines[2] && (line = lines[2]))), !o.mimes[type]) {
            throw new global.DOMException(global.DOMException.SYNTAX_ERR);
          }
          /** @type {string} */
          msg = type;
          maxLine = line;
        },
        /**
         * @param {?} data
         * @param {string} string
         * @return {undefined}
         */
        send : function(data, string) {
          if (options = "string" === $.typeOf(string) ? {
            ruid : string
          } : string ? string : {}, this.convertEventPropsToHandlers(events), this.upload.convertEventPropsToHandlers(events), this.readyState !== xhr.OPENED || readyState) {
            throw new global.DOMException(global.DOMException.INVALID_STATE_ERR);
          }
          if (data instanceof Data) {
            options.ruid = data.ruid;
            mimeType = data.type || "application/octet-stream";
          } else {
            if (data instanceof HTMLElement) {
              if (data.hasBlob()) {
                var file = data.getBlob();
                options.ruid = file.ruid;
                mimeType = file.type || "application/octet-stream";
              }
            } else {
              if ("string" == typeof data) {
                /** @type {string} */
                encoding = "UTF-8";
                /** @type {string} */
                mimeType = "text/plain;charset=UTF-8";
                data = actual.utf8_encode(data);
              }
            }
          }
          if (!this.withCredentials) {
            this.withCredentials = options.required_caps && (options.required_caps.send_browser_cookies && !result);
          }
          I = !found && this.upload.hasEventListener();
          /** @type {boolean} */
          N = false;
          /** @type {boolean} */
          capture = !data;
          if (!found) {
            /** @type {boolean} */
            readyState = true;
          }
          run.call(this, data);
        },
        /**
         * @return {undefined}
         */
        abort : function() {
          if (N = true, found = false, ~$.inArray(callback("readyState"), [xhr.UNSENT, xhr.OPENED, xhr.DONE])) {
            callback("readyState", xhr.UNSENT);
          } else {
            if (callback("readyState", xhr.DONE), readyState = false, !self) {
              throw new global.DOMException(global.DOMException.INVALID_STATE_ERR);
            }
            self.getRuntime().exec.call(self, "XMLHttpRequest", "abort", capture);
            /** @type {boolean} */
            capture = true;
          }
        },
        /**
         * @return {undefined}
         */
        destroy : function() {
          if (self) {
            if ("function" === $.typeOf(self.destroy)) {
              self.destroy();
            }
            /** @type {null} */
            self = null;
          }
          this.unbindAll();
          if (this.upload) {
            this.upload.unbindAll();
            /** @type {null} */
            this.upload = null;
          }
        }
      });
    }
    var segmentMatch = {
      100 : "Continue",
      101 : "Switching Protocols",
      102 : "Processing",
      200 : "OK",
      201 : "Created",
      202 : "Accepted",
      203 : "Non-Authoritative Information",
      204 : "No Content",
      205 : "Reset Content",
      206 : "Partial Content",
      207 : "Multi-Status",
      226 : "IM Used",
      300 : "Multiple Choices",
      301 : "Moved Permanently",
      302 : "Found",
      303 : "See Other",
      304 : "Not Modified",
      305 : "Use Proxy",
      306 : "Reserved",
      307 : "Temporary Redirect",
      400 : "Bad Request",
      401 : "Unauthorized",
      402 : "Payment Required",
      403 : "Forbidden",
      404 : "Not Found",
      405 : "Method Not Allowed",
      406 : "Not Acceptable",
      407 : "Proxy Authentication Required",
      408 : "Request Timeout",
      409 : "Conflict",
      410 : "Gone",
      411 : "Length Required",
      412 : "Precondition Failed",
      413 : "Request Entity Too Large",
      414 : "Request-URI Too Long",
      415 : "Unsupported Media Type",
      416 : "Requested Range Not Satisfiable",
      417 : "Expectation Failed",
      422 : "Unprocessable Entity",
      423 : "Locked",
      424 : "Failed Dependency",
      426 : "Upgrade Required",
      500 : "Internal Server Error",
      501 : "Not Implemented",
      502 : "Bad Gateway",
      503 : "Service Unavailable",
      504 : "Gateway Timeout",
      505 : "HTTP Version Not Supported",
      506 : "Variant Also Negotiates",
      507 : "Insufficient Storage",
      510 : "Not Extended"
    };
    BasicObject.prototype = self.instance;
    /** @type {Array} */
    var events = ["loadstart", "progress", "abort", "error", "load", "timeout", "loadend"];
    /** @type {number} */
    var g = 1;
    /** @type {number} */
    var v = 2;
    return xhr.UNSENT = 0, xhr.OPENED = 1, xhr.HEADERS_RECEIVED = 2, xhr.LOADING = 3, xhr.DONE = 4, xhr.prototype = self.instance, xhr;
  });
  expect(results, [versions, target, checkSet, selector], function($, graph, next_callback, self) {
    /**
     * @return {undefined}
     */
    function xhr() {
      /**
       * @return {undefined}
       */
      function run() {
        /** @type {number} */
        max = min = 0;
        /** @type {null} */
        ret = this.result = null;
      }
      /**
       * @param {string} total
       * @param {string} end
       * @return {undefined}
       */
      function done(total, end) {
        var _this = this;
        /** @type {string} */
        next = end;
        _this.bind("TransportingProgress", function(event) {
          min = event.loaded;
          if (max > min) {
            if (-1 === $.inArray(_this.state, [xhr.IDLE, xhr.DONE])) {
              open.call(_this);
            }
          }
        }, 999);
        _this.bind("TransportingComplete", function() {
          min = max;
          /** @type {number} */
          _this.state = xhr.DONE;
          /** @type {null} */
          ret = null;
          _this.result = next.exec.call(_this, "Transporter", "getAsBlob", total || "");
        }, 999);
        /** @type {number} */
        _this.state = xhr.BUSY;
        _this.trigger("TransportingStarted");
        open.call(_this);
      }
      /**
       * @return {undefined}
       */
      function open() {
        var uniqs = this;
        var capture;
        /** @type {number} */
        var total = max - min;
        if (index > total) {
          /** @type {number} */
          index = total;
        }
        capture = graph.btoa(ret.substr(min, index));
        next.exec.call(uniqs, "Transporter", "receive", capture, max);
      }
      var chunk_size;
      var next;
      var ret;
      var max;
      var min;
      var index;
      next_callback.call(this);
      $.extend(this, {
        uid : $.guid("uid_"),
        state : xhr.IDLE,
        result : null,
        /**
         * @param {Object} array
         * @param {?} callback
         * @param {Object} options
         * @return {undefined}
         */
        transport : function(array, callback, options) {
          var _this = this;
          if (options = $.extend({
            chunk_size : 204798
          }, options), (chunk_size = options.chunk_size % 3) && (options.chunk_size += 3 - chunk_size), index = options.chunk_size, run.call(this), ret = array, max = array.length, "string" === $.typeOf(options) || options.ruid) {
            done.call(_this, callback, this.connectRuntime(options));
          } else {
            /**
             * @param {?} stats
             * @param {?} stdout
             * @return {undefined}
             */
            var cb = function(stats, stdout) {
              _this.unbind("RuntimeInit", cb);
              done.call(_this, callback, stdout);
            };
            this.bind("RuntimeInit", cb);
            this.connectRuntime(options);
          }
        },
        /**
         * @return {undefined}
         */
        abort : function() {
          var self = this;
          /** @type {number} */
          self.state = xhr.IDLE;
          if (next) {
            next.exec.call(self, "Transporter", "clear");
            self.trigger("TransportingAborted");
          }
          run.call(self);
        },
        /**
         * @return {undefined}
         */
        destroy : function() {
          this.unbindAll();
          /** @type {null} */
          next = null;
          this.disconnectRuntime();
          run.call(this);
        }
      });
    }
    return xhr.IDLE = 0, xhr.BUSY = 1, xhr.DONE = 2, xhr.prototype = self.instance, xhr;
  });
  expect(reversed, [versions, changes, input, args, method, newValue, checkSet, results, before, selector, values, result, target], function($, parent, ax, ignoreMethodDoesntExist, Logger, dataAndEvents, next_callback, deepDataAndEvents, assert, c, File, Event, $window) {
    /**
     * @return {undefined}
     */
    function init() {
      /**
       * @param {Object} data
       * @return {undefined}
       */
      function draw(data) {
        if (!data) {
          data = this.getRuntime().exec.call(this, "Image", "getInfo");
        }
        this.size = data.size;
        this.width = data.width;
        this.height = data.height;
        this.type = data.type;
        this.meta = data.meta;
        if ("" === this.name) {
          this.name = data.name;
        }
      }
      /**
       * @param {Object} data
       * @return {undefined}
       */
      function handler(data) {
        var n = $.typeOf(data);
        try {
          if (data instanceof init) {
            if (!data.size) {
              throw new ax.DOMException(ax.DOMException.INVALID_STATE_ERR);
            }
            send.apply(this, arguments);
          } else {
            if (data instanceof File) {
              if (!~$.inArray(data.type, ["image/jpeg", "image/png"])) {
                throw new ax.ImageError(ax.ImageError.WRONG_FORMAT);
              }
              initialize.apply(this, arguments);
            } else {
              if (-1 !== $.inArray(n, ["blob", "file"])) {
                handler.call(this, new Event(null, data), arguments[1]);
              } else {
                if ("string" === n) {
                  if (/^data:[^;]*;base64,/.test(data)) {
                    handler.call(this, new File(null, {
                      data : data
                    }), arguments[1]);
                  } else {
                    load.apply(this, arguments);
                  }
                } else {
                  if ("node" !== n || "img" !== data.nodeName.toLowerCase()) {
                    throw new ax.DOMException(ax.DOMException.TYPE_MISMATCH_ERR);
                  }
                  handler.call(this, data.src, arguments[1]);
                }
              }
            }
          }
        } catch (response) {
          this.trigger("error", response.code);
        }
      }
      /**
       * @param {?} file
       * @param {boolean} parent
       * @return {undefined}
       */
      function send(file, parent) {
        var config = this.connectRuntime(file.ruid);
        this.ruid = config.uid;
        config.exec.call(this, "Image", "loadFromImage", file, "undefined" === $.typeOf(parent) ? true : parent);
      }
      /**
       * @param {Function} file
       * @param {?} methods
       * @return {undefined}
       */
      function initialize(file, methods) {
        /**
         * @param {Object} obj
         * @return {undefined}
         */
        function get(obj) {
          self.ruid = obj.uid;
          obj.exec.call(self, "Image", "loadFromBlob", file);
        }
        var self = this;
        self.name = file.name || "";
        if (file.isDetached()) {
          this.bind("RuntimeInit", function(dataAndEvents, walkers) {
            get(walkers);
          });
          if (methods) {
            if ("string" == typeof methods.required_caps) {
              methods.required_caps = dataAndEvents.parseCaps(methods.required_caps);
            }
          }
          this.connectRuntime($.extend({
            required_caps : {
              access_image_binary : true,
              resize_image : true
            }
          }, methods));
        } else {
          get(this.connectRuntime(file.ruid));
        }
      }
      /**
       * @param {string} filename
       * @param {string} response
       * @return {undefined}
       */
      function load(filename, response) {
        var $this = this;
        var req;
        req = new Logger;
        req.open("get", filename);
        /** @type {string} */
        req.responseType = "blob";
        /**
         * @param {?} e
         * @return {undefined}
         */
        req.onprogress = function(e) {
          $this.trigger(e);
        };
        /**
         * @return {undefined}
         */
        req.onload = function() {
          initialize.call($this, req.response, true);
        };
        /**
         * @param {?} e
         * @return {undefined}
         */
        req.onerror = function(e) {
          $this.trigger(e);
        };
        /**
         * @return {undefined}
         */
        req.onloadend = function() {
          req.destroy();
        };
        req.bind("RuntimeError", function(dataAndEvents, data) {
          $this.trigger("RuntimeError", data);
        });
        req.send(null, response);
      }
      next_callback.call(this);
      $.extend(this, {
        uid : $.guid("uid_"),
        ruid : null,
        name : "",
        size : 0,
        width : 0,
        height : 0,
        type : "",
        meta : {},
        /**
         * @return {undefined}
         */
        clone : function() {
          this.load.apply(this, arguments);
        },
        /**
         * @return {undefined}
         */
        load : function() {
          this.bind("Load Resize", function() {
            draw.call(this);
          }, 999);
          this.convertEventPropsToHandlers(events);
          handler.apply(this, arguments);
        },
        /**
         * @param {Object} options
         * @return {undefined}
         */
        downsize : function(options) {
          var attributes = {
            width : this.width,
            height : this.height,
            crop : false,
            preserveHeaders : true
          };
          options = "object" == typeof options ? $.extend(attributes, options) : $.extend(attributes, {
            width : arguments[0],
            height : arguments[1],
            crop : arguments[2],
            preserveHeaders : arguments[3]
          });
          try {
            if (!this.size) {
              throw new ax.DOMException(ax.DOMException.INVALID_STATE_ERR);
            }
            if (this.width > init.MAX_RESIZE_WIDTH || this.height > init.MAX_RESIZE_HEIGHT) {
              throw new ax.ImageError(ax.ImageError.MAX_RESOLUTION_ERR);
            }
            this.getRuntime().exec.call(this, "Image", "downsize", options.width, options.height, options.crop, options.preserveHeaders);
          } catch (response) {
            this.trigger("error", response.code);
          }
        },
        /**
         * @param {Object} percent
         * @param {?} maxChars
         * @param {?} append
         * @return {undefined}
         */
        crop : function(percent, maxChars, append) {
          this.downsize(percent, maxChars, true, append);
        },
        /**
         * @return {?}
         */
        getAsCanvas : function() {
          if (!assert.can("create_canvas")) {
            throw new ax.RuntimeError(ax.RuntimeError.NOT_SUPPORTED_ERR);
          }
          var info = this.connectRuntime(this.ruid);
          return info.exec.call(this, "Image", "getAsCanvas");
        },
        /**
         * @param {string} list
         * @param {number} fragment
         * @return {?}
         */
        getAsBlob : function(list, fragment) {
          if (!this.size) {
            throw new ax.DOMException(ax.DOMException.INVALID_STATE_ERR);
          }
          return list || (list = "image/jpeg"), "image/jpeg" !== list || (fragment || (fragment = 90)), this.getRuntime().exec.call(this, "Image", "getAsBlob", list, fragment);
        },
        /**
         * @param {number} idx
         * @param {number} e
         * @return {?}
         */
        getAsDataURL : function(idx, e) {
          if (!this.size) {
            throw new ax.DOMException(ax.DOMException.INVALID_STATE_ERR);
          }
          return this.getRuntime().exec.call(this, "Image", "getAsDataURL", idx, e);
        },
        /**
         * @param {number} start
         * @param {number} index
         * @return {?}
         */
        getAsBinaryString : function(start, index) {
          var current = this.getAsDataURL(start, index);
          return $window.atob(current.substring(current.indexOf("base64,") + 7));
        },
        /**
         * @param {HTMLElement} element
         * @return {?}
         */
        embed : function(element) {
          /**
           * @return {?}
           */
          function ready() {
            if (assert.can("create_canvas")) {
              var clone = that.getAsCanvas();
              if (clone) {
                return element.appendChild(clone), clone = null, that.destroy(), void $t.trigger("embedded");
              }
            }
            var cookie = that.getAsDataURL(start, end);
            if (!cookie) {
              throw new ax.ImageError(ax.ImageError.WRONG_FORMAT);
            }
            if (assert.can("use_data_uri_of", cookie.length)) {
              /** @type {string} */
              element.innerHTML = '<img src="' + cookie + '" width="' + that.width + '" height="' + that.height + '" />';
              that.destroy();
              $t.trigger("embedded");
            } else {
              var self = new deepDataAndEvents;
              self.bind("TransportingComplete", function() {
                commandDefinition = $t.connectRuntime(this.result.ruid);
                $t.bind("Embedded", function() {
                  $.extend(commandDefinition.getShimContainer().style, {
                    top : "0px",
                    left : "0px",
                    width : that.width + "px",
                    height : that.height + "px"
                  });
                  /** @type {null} */
                  commandDefinition = null;
                }, 999);
                commandDefinition.exec.call($t, "ImageView", "display", this.result.uid, width, height);
                that.destroy();
              });
              self.transport($window.atob(cookie.substring(cookie.indexOf("base64,") + 7)), start, $.extend({}, options, {
                required_caps : {
                  display_media : true
                },
                runtime_order : "flash,silverlight",
                container : element
              }));
            }
          }
          var $t = this;
          var that;
          var start;
          var end;
          var rtt;
          var options = arguments[1] || {};
          var width = this.width;
          var height = this.height;
          var commandDefinition;
          try {
            if (!(element = parent.get(element))) {
              throw new ax.DOMException(ax.DOMException.INVALID_NODE_TYPE_ERR);
            }
            if (!this.size) {
              throw new ax.DOMException(ax.DOMException.INVALID_STATE_ERR);
            }
            if (this.width > init.MAX_RESIZE_WIDTH || this.height > init.MAX_RESIZE_HEIGHT) {
              throw new ax.ImageError(ax.ImageError.MAX_RESOLUTION_ERR);
            }
            if (start = options.type || (this.type || "image/jpeg"), end = options.quality || 90, rtt = "undefined" !== $.typeOf(options.crop) ? options.crop : false, options.width) {
              width = options.width;
              height = options.height || width;
            } else {
              var bb = parent.getSize(element);
              if (bb.w) {
                if (bb.h) {
                  width = bb.w;
                  height = bb.h;
                }
              }
            }
            return that = new init, that.bind("Resize", function() {
              ready.call($t);
            }), that.bind("Load", function() {
              that.downsize(width, height, rtt, false);
            }), that.clone(this, false), that;
          } catch (response) {
            this.trigger("error", response.code);
          }
        },
        /**
         * @return {undefined}
         */
        destroy : function() {
          if (this.ruid) {
            this.getRuntime().exec.call(this, "Image", "destroy");
            this.disconnectRuntime();
          }
          this.unbindAll();
        }
      });
    }
    /** @type {Array} */
    var events = ["progress", "load", "error", "resize", "embedded"];
    return init.MAX_RESIZE_WIDTH = 6500, init.MAX_RESIZE_HEIGHT = 6500, init.prototype = c.instance, init;
  });
  expect(f, [versions, input, newValue, before], function($, dataAndEvents, proceed, obj) {
    /**
     * @param {?} options
     * @return {undefined}
     */
    function init(options) {
      var elem = this;
      var extendNative = proceed.capTest;
      var capTrue = proceed.capTrue;
      var shift = $.extend({
        access_binary : extendNative(window.FileReader || window.File && window.File.getAsDataURL),
        /**
         * @return {?}
         */
        access_image_binary : function() {
          return elem.can("access_binary") && !!_this.Image;
        },
        display_media : extendNative(obj.can("create_canvas") || obj.can("use_data_uri_over32kb")),
        do_cors : extendNative(window.XMLHttpRequest && "withCredentials" in new XMLHttpRequest),
        drag_and_drop : extendNative(function() {
          /** @type {Element} */
          var div = document.createElement("div");
          return("draggable" in div || "ondragstart" in div && "ondrop" in div) && ("IE" !== obj.browser || obj.version > 9);
        }()),
        filter_by_extension : extendNative(function() {
          return "Chrome" === obj.browser && obj.version >= 28 || "IE" === obj.browser && obj.version >= 10;
        }()),
        return_response_headers : capTrue,
        /**
         * @param {string} opt_e
         * @return {?}
         */
        return_response_type : function(opt_e) {
          return "json" === opt_e && window.JSON ? true : obj.can("return_response_type", opt_e);
        },
        return_status_code : capTrue,
        report_upload_progress : extendNative(window.XMLHttpRequest && (new XMLHttpRequest).upload),
        /**
         * @return {?}
         */
        resize_image : function() {
          return elem.can("access_binary") && obj.can("create_canvas");
        },
        /**
         * @return {?}
         */
        select_file : function() {
          return obj.can("use_fileinput") && window.File;
        },
        /**
         * @return {?}
         */
        select_folder : function() {
          return elem.can("select_file") && ("Chrome" === obj.browser && obj.version >= 21);
        },
        /**
         * @return {?}
         */
        select_multiple : function() {
          return!(!elem.can("select_file") || ("Safari" === obj.browser && "Windows" === obj.os || "iOS" === obj.os && obj.verComp(obj.osVersion, "7.0.4", "<")));
        },
        send_binary_string : extendNative(window.XMLHttpRequest && ((new XMLHttpRequest).sendAsBinary || window.Uint8Array && window.ArrayBuffer)),
        send_custom_headers : extendNative(window.XMLHttpRequest),
        /**
         * @return {?}
         */
        send_multipart : function() {
          return!!(window.XMLHttpRequest && ((new XMLHttpRequest).upload && window.FormData)) || elem.can("send_binary_string");
        },
        slice_blob : extendNative(window.File && (File.prototype.mozSlice || (File.prototype.webkitSlice || File.prototype.slice))),
        /**
         * @return {?}
         */
        stream_upload : function() {
          return elem.can("slice_blob") && elem.can("send_multipart");
        },
        summon_file_dialog : extendNative(function() {
          return "Firefox" === obj.browser && obj.version >= 4 || ("Opera" === obj.browser && obj.version >= 12 || ("IE" === obj.browser && obj.version >= 10 || !!~$.inArray(obj.browser, ["Chrome", "Safari"])));
        }()),
        upload_filesize : capTrue
      }, arguments[2]);
      proceed.call(this, options, arguments[1] || udataCur, shift);
      $.extend(this, {
        /**
         * @return {undefined}
         */
        init : function() {
          this.trigger("Init");
        },
        destroy : function(tmp) {
          return function() {
            tmp.call(elem);
            /** @type {null} */
            tmp = elem = null;
          };
        }(this.destroy)
      });
      $.extend(this.getShim(), _this);
    }
    /** @type {string} */
    var udataCur = "html5";
    var _this = {};
    return proceed.addConstructor(udataCur, init), _this;
  });
  expect(fn, [f, values], function(global, XHRBlob) {
    /**
     * @return {undefined}
     */
    function instantiateSizzle() {
      /**
       * @param {Object} a
       * @param {number} start
       * @param {number} end
       * @return {?}
       */
      function slice(a, start, end) {
        var parser;
        if (!window.File.prototype.slice) {
          return(parser = window.File.prototype.webkitSlice || window.File.prototype.mozSlice) ? parser.call(a, start, end) : null;
        }
        try {
          return a.slice(), a.slice(start, end);
        } catch (r) {
          return a.slice(start, end - start);
        }
      }
      /**
       * @return {?}
       */
      this.slice = function() {
        return new XHRBlob(this.getRuntime().uid, slice.apply(this, arguments));
      };
    }
    return global.Blob = instantiateSizzle;
  });
  expect(clone, [versions], function(plupload) {
    /**
     * @return {undefined}
     */
    function preventDefault() {
      /** @type {boolean} */
      this.returnValue = false;
    }
    /**
     * @return {undefined}
     */
    function stopPropagation() {
      /** @type {boolean} */
      this.cancelBubble = true;
    }
    var eventhash = {};
    var uid = "moxie_" + plupload.guid();
    /**
     * @param {Object} obj
     * @param {string} type
     * @param {Function} callback
     * @param {?} name
     * @return {undefined}
     */
    var addEvent = function(obj, type, callback, name) {
      var handler;
      var pending;
      type = type.toLowerCase();
      if (obj.addEventListener) {
        /** @type {Function} */
        handler = callback;
        obj.addEventListener(type, handler, false);
      } else {
        if (obj.attachEvent) {
          /**
           * @return {undefined}
           */
          handler = function() {
            var e = window.event;
            if (!e.target) {
              e.target = e.srcElement;
            }
            /** @type {function (): undefined} */
            e.preventDefault = preventDefault;
            /** @type {function (): undefined} */
            e.stopPropagation = stopPropagation;
            callback(e);
          };
          obj.attachEvent("on" + type, handler);
        }
      }
      if (!obj[uid]) {
        obj[uid] = plupload.guid();
      }
      if (!eventhash.hasOwnProperty(obj[uid])) {
        eventhash[obj[uid]] = {};
      }
      pending = eventhash[obj[uid]];
      if (!pending.hasOwnProperty(type)) {
        /** @type {Array} */
        pending[type] = [];
      }
      pending[type].push({
        func : handler,
        /** @type {Function} */
        orig : callback,
        key : name
      });
    };
    /**
     * @param {Object} obj
     * @param {string} name
     * @param {?} deepDataAndEvents
     * @return {undefined}
     */
    var unbind = function(obj, name, deepDataAndEvents) {
      var list;
      var res;
      if (name = name.toLowerCase(), obj[uid] && (eventhash[obj[uid]] && eventhash[obj[uid]][name])) {
        list = eventhash[obj[uid]][name];
        /** @type {number} */
        var i = list.length - 1;
        for (;i >= 0 && (list[i].orig !== deepDataAndEvents && list[i].key !== deepDataAndEvents || (obj.removeEventListener ? obj.removeEventListener(name, list[i].func, false) : obj.detachEvent && obj.detachEvent("on" + name, list[i].func), list[i].orig = null, list[i].func = null, list.splice(i, 1), deepDataAndEvents === res));i--) {
        }
        if (list.length || delete eventhash[obj[uid]][name], plupload.isEmptyObj(eventhash[obj[uid]])) {
          delete eventhash[obj[uid]];
          try {
            delete obj[uid];
          } catch (c) {
            obj[uid] = res;
          }
        }
      }
    };
    /**
     * @param {Object} obj
     * @param {?} deepDataAndEvents
     * @return {undefined}
     */
    var clone = function(obj, deepDataAndEvents) {
      if (obj) {
        if (obj[uid]) {
          plupload.each(eventhash[obj[uid]], function(dataAndEvents, optgroup) {
            unbind(obj, optgroup, deepDataAndEvents);
          });
        }
      }
    };
    return{
      /** @type {function (Object, string, Function, ?): undefined} */
      addEvent : addEvent,
      /** @type {function (Object, string, ?): undefined} */
      removeEvent : unbind,
      /** @type {function (Object, ?): undefined} */
      removeAllEvents : clone
    };
  });
  expect(buffer, [f, versions, changes, clone, iter, before], function(ajaxOptions, $, util, dojo, scope, b) {
    /**
     * @return {undefined}
     */
    function create() {
      /** @type {Array} */
      var ret = [];
      var self;
      $.extend(this, {
        /**
         * @param {Function} depMaps
         * @return {undefined}
         */
        init : function(depMaps) {
          var _this = this;
          var info = _this.getRuntime();
          var element;
          var e;
          var queryString;
          var n;
          var newIndex;
          var c;
          /** @type {Function} */
          self = depMaps;
          /** @type {Array} */
          ret = [];
          queryString = self.accept.mimes || scope.extList2mimes(self.accept, info.can("filter_by_extension"));
          e = info.getShimContainer();
          /** @type {string} */
          e.innerHTML = '<input id="' + info.uid + '" type="file" style="font-size:999px;opacity:0;"' + (self.multiple && info.can("select_multiple") ? "multiple" : "") + (self.directory && info.can("select_folder") ? "webkitdirectory directory" : "") + (queryString ? ' accept="' + queryString.join(",") + '"' : "") + " />";
          element = util.get(info.uid);
          $.extend(element.style, {
            position : "absolute",
            top : 0,
            left : 0,
            width : "100%",
            height : "100%"
          });
          n = util.get(self.browse_button);
          if (info.can("summon_file_dialog")) {
            if ("static" === util.getStyle(n, "position")) {
              /** @type {string} */
              n.style.position = "relative";
            }
            /** @type {number} */
            newIndex = parseInt(util.getStyle(n, "z-index"), 10) || 1;
            /** @type {number} */
            n.style.zIndex = newIndex;
            /** @type {number} */
            e.style.zIndex = newIndex - 1;
            dojo.addEvent(n, "click", function(types) {
              var target = util.get(info.uid);
              if (target) {
                if (!target.disabled) {
                  target.click();
                }
              }
              types.preventDefault();
            }, _this.uid);
          }
          c = info.can("summon_file_dialog") ? n : e;
          dojo.addEvent(c, "mouseover", function() {
            _this.trigger("mouseenter");
          }, _this.uid);
          dojo.addEvent(c, "mouseout", function() {
            _this.trigger("mouseleave");
          }, _this.uid);
          dojo.addEvent(c, "mousedown", function() {
            _this.trigger("mousedown");
          }, _this.uid);
          dojo.addEvent(util.get(self.container), "mouseup", function() {
            _this.trigger("mouseup");
          }, _this.uid);
          /**
           * @return {undefined}
           */
          element.onchange = function init() {
            if (ret = [], self.directory ? $.each(this.files, function(part) {
              if ("." !== part.name) {
                ret.push(part);
              }
            }) : ret = [].slice.call(this.files), "IE" !== b.browser && "IEMobile" !== b.browser) {
              /** @type {string} */
              this.value = "";
            } else {
              var element = this.cloneNode(true);
              this.parentNode.replaceChild(element, this);
              /** @type {function (): undefined} */
              element.onchange = init;
            }
            _this.trigger("change");
          };
          _this.trigger({
            type : "ready",
            async : true
          });
          /** @type {null} */
          e = null;
        },
        /**
         * @return {?}
         */
        getFiles : function() {
          return ret;
        },
        /**
         * @param {boolean} keepData
         * @return {undefined}
         */
        disable : function(keepData) {
          var el = this.getRuntime();
          var cur;
          if (cur = util.get(el.uid)) {
            /** @type {boolean} */
            cur.disabled = !!keepData;
          }
        },
        /**
         * @return {undefined}
         */
        destroy : function() {
          var getRuntime = this.getRuntime();
          var dateElem = getRuntime.getShim();
          var form = getRuntime.getShimContainer();
          dojo.removeAllEvents(form, this.uid);
          dojo.removeAllEvents(self && util.get(self.container), this.uid);
          dojo.removeAllEvents(self && util.get(self.browse_button), this.uid);
          if (form) {
            /** @type {string} */
            form.innerHTML = "";
          }
          dateElem.removeInstance(this.uid);
          /** @type {null} */
          ret = self = form = dateElem = null;
        }
      });
    }
    return ajaxOptions.FileInput = create;
  });
  expect(visited, [f, versions, changes, clone, iter], function(shim, $, client, self, that) {
    /**
     * @return {undefined}
     */
    function exports() {
      /**
       * @param {Object} evt
       * @return {?}
       */
      function init(evt) {
        if (!evt.dataTransfer || !evt.dataTransfer.types) {
          return false;
        }
        var elems = $.toArray(evt.dataTransfer.types || []);
        return-1 !== $.inArray("Files", elems) || (-1 !== $.inArray("public.file-url", elems) || -1 !== $.inArray("application/x-moz-file", elems));
      }
      /**
       * @param {Array} codeSegments
       * @return {?}
       */
      function render(codeSegments) {
        /** @type {Array} */
        var attributes = [];
        /** @type {number} */
        var i = 0;
        for (;i < codeSegments.length;i++) {
          [].push.apply(attributes, codeSegments[i].extensions.split(/\s*,\s*/));
        }
        return-1 === $.inArray("*", attributes) ? attributes : [];
      }
      /**
       * @param {Function} file
       * @return {?}
       */
      function normalize(file) {
        if (!elems.length) {
          return true;
        }
        var propName = that.getFileExtension(file.name);
        return!propName || -1 !== $.inArray(propName, elems);
      }
      /**
       * @param {Object} which
       * @param {Function} callback
       * @return {undefined}
       */
      function show(which, callback) {
        /** @type {Array} */
        var matched = [];
        $.each(which, function(item) {
          var cur = item.webkitGetAsEntry();
          if (cur) {
            if (cur.isFile) {
              var name = item.getAsFile();
              if (normalize(name)) {
                configList.push(name);
              }
            } else {
              matched.push(cur);
            }
          }
        });
        if (matched.length) {
          success(matched, callback);
        } else {
          callback();
        }
      }
      /**
       * @param {Object} elems
       * @param {Function} callback
       * @return {undefined}
       */
      function success(elems, callback) {
        /** @type {Array} */
        var QUnit = [];
        $.each(elems, function(node) {
          QUnit.push(function(next_callback) {
            getChildren(node, next_callback);
          });
        });
        $.inSeries(QUnit, function() {
          callback();
        });
      }
      /**
       * @param {Entry} stat
       * @param {?} callback
       * @return {undefined}
       */
      function getChildren(stat, callback) {
        if (stat.isFile) {
          stat.file(function(name) {
            if (normalize(name)) {
              configList.push(name);
            }
            callback();
          }, function() {
            callback();
          });
        } else {
          if (stat.isDirectory) {
            request(stat, callback);
          } else {
            callback();
          }
        }
      }
      /**
       * @param {Entry} var_args
       * @param {Function} callback
       * @return {undefined}
       */
      function request(var_args, callback) {
        /**
         * @param {Function} array
         * @return {undefined}
         */
        function flatten(array) {
          map.readEntries(function(checkSet) {
            if (checkSet.length) {
              [].push.apply(ret, checkSet);
              flatten(array);
            } else {
              array();
            }
          }, array);
        }
        /** @type {Array} */
        var ret = [];
        var map = var_args.createReader();
        flatten(function() {
          success(ret, callback);
        });
      }
      /** @type {Array} */
      var configList = [];
      /** @type {Array} */
      var elems = [];
      var options;
      $.extend(this, {
        /**
         * @param {Function} depMaps
         * @return {undefined}
         */
        init : function(depMaps) {
          var el = this;
          var container;
          /** @type {Function} */
          options = depMaps;
          elems = render(options.accept);
          container = options.container;
          self.addEvent(container, "dragover", function(event) {
            if (init(event)) {
              event.preventDefault();
              /** @type {string} */
              event.dataTransfer.dropEffect = "copy";
            }
          }, el.uid);
          self.addEvent(container, "drop", function(input) {
            if (init(input)) {
              input.preventDefault();
              /** @type {Array} */
              configList = [];
              if (input.dataTransfer.items && input.dataTransfer.items[0].webkitGetAsEntry) {
                show(input.dataTransfer.items, function() {
                  el.trigger("drop");
                });
              } else {
                $.each(input.dataTransfer.files, function(name) {
                  if (normalize(name)) {
                    configList.push(name);
                  }
                });
                el.trigger("drop");
              }
            }
          }, el.uid);
          self.addEvent(container, "dragenter", function(dataAndEvents) {
            el.trigger("dragenter");
          }, el.uid);
          self.addEvent(container, "dragleave", function(dataAndEvents) {
            el.trigger("dragleave");
          }, el.uid);
        },
        /**
         * @return {?}
         */
        getFiles : function() {
          return configList;
        },
        /**
         * @return {undefined}
         */
        destroy : function() {
          self.removeAllEvents(options && client.get(options.container), this.uid);
          /** @type {null} */
          configList = elems = options = null;
        }
      });
    }
    return shim.FileDrop = exports;
  });
  expect(scale, [f, target, versions], function($window, global, $) {
    /**
     * @return {undefined}
     */
    function exports() {
      /**
       * @param {string} token
       * @return {?}
       */
      function onSuccess(token) {
        return global.atob(token.substring(token.indexOf("base64,") + 7));
      }
      var res;
      /** @type {boolean} */
      var selector = false;
      $.extend(this, {
        /**
         * @param {string} name
         * @param {?} file
         * @return {undefined}
         */
        read : function(name, file) {
          var promise = this;
          res = new window.FileReader;
          res.addEventListener("progress", function(completeEvent) {
            promise.trigger(completeEvent);
          });
          res.addEventListener("load", function(completeEvent) {
            promise.trigger(completeEvent);
          });
          res.addEventListener("error", function(completeEvent) {
            promise.trigger(completeEvent, res.error);
          });
          res.addEventListener("loadend", function() {
            /** @type {null} */
            res = null;
          });
          if ("function" === $.typeOf(res[name])) {
            /** @type {boolean} */
            selector = false;
            res[name](file.getSource());
          } else {
            if ("readAsBinaryString" === name) {
              /** @type {boolean} */
              selector = true;
              res.readAsDataURL(file.getSource());
            }
          }
        },
        /**
         * @return {?}
         */
        getResult : function() {
          return res && res.result ? selector ? onSuccess(res.result) : res.result : null;
        },
        /**
         * @return {undefined}
         */
        abort : function() {
          if (res) {
            res.abort();
          }
        },
        /**
         * @return {undefined}
         */
        destroy : function() {
          /** @type {null} */
          res = null;
        }
      });
    }
    return $window.FileReader = exports;
  });
  expect(string, [f, versions, iter, files, result, values, entry, input, before], function(exports, _, nv, rquery, Player, Blob, Data, dataAndEvents, info) {
    /**
     * @return {undefined}
     */
    function init() {
      /**
       * @param {?} reporter
       * @param {Object} wrapper
       * @return {undefined}
       */
      function init(reporter, wrapper) {
        var uniqs = this;
        var file;
        var reader;
        file = wrapper.getBlob().getSource();
        reader = new window.FileReader;
        /**
         * @return {undefined}
         */
        reader.onload = function() {
          wrapper.append(wrapper.getBlobName(), new Blob(null, {
            type : file.type,
            data : reader.result
          }));
          res.send.call(uniqs, reporter, wrapper);
        };
        reader.readAsBinaryString(file);
      }
      /**
       * @return {?}
       */
      function initialize() {
        return!window.XMLHttpRequest || "IE" === info.browser && info.version < 8 ? function() {
          /** @type {Array} */
          var codeSegments = ["Msxml2.XMLHTTP.6.0", "Microsoft.XMLHTTP"];
          /** @type {number} */
          var i = 0;
          for (;i < codeSegments.length;i++) {
            try {
              return new ActiveXObject(codeSegments[i]);
            } catch (n) {
            }
          }
        }() : new window.XMLHttpRequest;
      }
      /**
       * @param {Object} xhr
       * @return {?}
       */
      function fGetDocument(xhr) {
        var doc = xhr.responseXML;
        var xmlString = xhr.responseText;
        return "IE" === info.browser && (xmlString && (doc && (!doc.documentElement && (/[^\/]+\/[^\+]+\+xml/.test(xhr.getResponseHeader("Content-Type")) && (doc = new window.ActiveXObject("Microsoft.XMLDOM"), doc.async = false, doc.validateOnParse = false, doc.loadXML(xmlString)))))), doc && ("IE" === info.browser && 0 !== doc.parseError || (!doc.documentElement || "parsererror" === doc.documentElement.tagName)) ? null : doc;
      }
      /**
       * @param {?} elem
       * @return {?}
       */
      function next(elem) {
        /** @type {string} */
        var base64 = "----moxieboundary" + (new Date).getTime();
        /** @type {string} */
        var prefix = "--";
        /** @type {string} */
        var name = "\r\n";
        /** @type {string} */
        var ret = "";
        var me = this.getRuntime();
        if (!me.can("send_binary_string")) {
          throw new dataAndEvents.RuntimeError(dataAndEvents.RuntimeError.NOT_SUPPORTED_ERR);
        }
        return xhr.setRequestHeader("Content-Type", "multipart/form-data; boundary=" + base64), elem.each(function(file, dataAndEvents) {
          ret += file instanceof Blob ? prefix + base64 + name + 'Content-Disposition: form-data; name="' + dataAndEvents + '"; filename="' + unescape(encodeURIComponent(file.name || "blob")) + '"' + name + "Content-Type: " + (file.type || "application/octet-stream") + name + name + file.getSource() + name : prefix + base64 + name + 'Content-Disposition: form-data; name="' + dataAndEvents + '"' + name + name + unescape(encodeURIComponent(file)) + name;
        }), ret += prefix + base64 + prefix + name;
      }
      var res = this;
      var xhr;
      var v;
      _.extend(this, {
        /**
         * @param {Object} opts
         * @param {Object} data
         * @return {?}
         */
        send : function(opts, data) {
          var self = this;
          /** @type {boolean} */
          var program = "Mozilla" === info.browser && (info.version >= 4 && info.version < 7);
          /** @type {boolean} */
          var inverse = "Android Browser" === info.browser;
          /** @type {boolean} */
          var m = false;
          if (v = opts.url.replace(/^.+?\/([\w\-\.]+)$/, "$1").toLowerCase(), xhr = initialize(), xhr.open(opts.method, opts.url, opts.async, opts.user, opts.password), data instanceof Blob) {
            if (data.isDetached()) {
              /** @type {boolean} */
              m = true;
            }
            data = data.getSource();
          } else {
            if (data instanceof Data) {
              if (data.hasBlob()) {
                if (data.getBlob().isDetached()) {
                  data = next.call(self, data);
                  /** @type {boolean} */
                  m = true;
                } else {
                  if ((program || inverse) && ("blob" === _.typeOf(data.getBlob().getSource()) && window.FileReader)) {
                    return void init.call(self, opts, data);
                  }
                }
              }
              if (data instanceof Data) {
                var result = new window.FormData;
                data.each(function(item, input) {
                  if (item instanceof Blob) {
                    result.append(input, item.getSource());
                  } else {
                    result.append(input, item);
                  }
                });
                data = result;
              }
            }
          }
          if (xhr.upload) {
            if (opts.withCredentials) {
              /** @type {boolean} */
              xhr.withCredentials = true;
            }
            xhr.addEventListener("load", function(type) {
              self.trigger(type);
            });
            xhr.addEventListener("error", function(type) {
              self.trigger(type);
            });
            xhr.addEventListener("progress", function(type) {
              self.trigger(type);
            });
            xhr.upload.addEventListener("progress", function(event) {
              self.trigger({
                type : "UploadProgress",
                loaded : event.loaded,
                total : event.total
              });
            });
          } else {
            /**
             * @return {undefined}
             */
            xhr.onreadystatechange = function load() {
              switch(xhr.readyState) {
                case 1:
                  break;
                case 2:
                  break;
                case 3:
                  var cDigit;
                  var total;
                  try {
                    if (rquery.hasSameOrigin(opts.url)) {
                      cDigit = xhr.getResponseHeader("Content-Length") || 0;
                    }
                    if (xhr.responseText) {
                      total = xhr.responseText.length;
                    }
                  } catch (r) {
                    /** @type {number} */
                    cDigit = total = 0;
                  }
                  self.trigger({
                    type : "progress",
                    lengthComputable : !!cDigit,
                    total : parseInt(cDigit, 10),
                    loaded : total
                  });
                  break;
                case 4:
                  /**
                   * @return {undefined}
                   */
                  xhr.onreadystatechange = function() {
                  };
                  self.trigger(0 === xhr.status ? "error" : "load");
              }
            };
          }
          if (!_.isEmptyObj(opts.headers)) {
            _.each(opts.headers, function(value, key) {
              xhr.setRequestHeader(key, value);
            });
          }
          if ("" !== opts.responseType) {
            if ("responseType" in xhr) {
              xhr.responseType = "json" !== opts.responseType || info.can("return_response_type", "json") ? opts.responseType : "text";
            }
          }
          if (m) {
            if (xhr.sendAsBinary) {
              xhr.sendAsBinary(data);
            } else {
              !function() {
                /** @type {Uint8Array} */
                var ui8a = new Uint8Array(data.length);
                /** @type {number} */
                var i = 0;
                for (;i < data.length;i++) {
                  /** @type {number} */
                  ui8a[i] = 255 & data.charCodeAt(i);
                }
                xhr.send(ui8a.buffer);
              }();
            }
          } else {
            xhr.send(data);
          }
          self.trigger("loadstart");
        },
        /**
         * @return {?}
         */
        getStatus : function() {
          try {
            if (xhr) {
              return xhr.status;
            }
          } catch (e) {
          }
          return 0;
        },
        /**
         * @param {?} req
         * @return {?}
         */
        getResponse : function(req) {
          var data = this.getRuntime();
          try {
            switch(req) {
              case "blob":
                var player = new Player(data.uid, xhr.response);
                var disposition = xhr.getResponseHeader("Content-Disposition");
                if (disposition) {
                  var css = disposition.match(/filename=([\'\"'])([^\1]+)\1/);
                  if (css) {
                    v = css[2];
                  }
                }
                return player.name = v, player.type || (player.type = nv.getFileMime(v)), player;
              case "json":
                return info.can("return_response_type", "json") ? xhr.response : 200 === xhr.status && window.JSON ? JSON.parse(xhr.responseText) : null;
              case "document":
                return fGetDocument(xhr);
              default:
                return "" !== xhr.responseText ? xhr.responseText : null;
            }
          } catch (s) {
            return null;
          }
        },
        /**
         * @return {?}
         */
        getAllResponseHeaders : function() {
          try {
            return xhr.getAllResponseHeaders();
          } catch (e) {
          }
          return "";
        },
        /**
         * @return {undefined}
         */
        abort : function() {
          if (xhr) {
            xhr.abort();
          }
        },
        /**
         * @return {undefined}
         */
        destroy : function() {
          /** @type {null} */
          res = v = null;
        }
      });
    }
    return exports.XMLHttpRequest = init;
  });
  expect(item, [], function() {
    return function() {
      /**
       * @param {number} idx
       * @param {number} expectedNumberOfNonCommentArgs
       * @return {?}
       */
      function read(idx, expectedNumberOfNonCommentArgs) {
        /** @type {number} */
        var y = p ? 0 : -8 * (expectedNumberOfNonCommentArgs - 1);
        /** @type {number} */
        var features = 0;
        var i;
        /** @type {number} */
        i = 0;
        for (;expectedNumberOfNonCommentArgs > i;i++) {
          features |= bin.charCodeAt(idx + i) << Math.abs(y + 8 * i);
        }
        return features;
      }
      /**
       * @param {string} segment
       * @param {number} idx
       * @param {number} length
       * @return {undefined}
       */
      function putstr(segment, idx, length) {
        length = 3 === arguments.length ? length : bin.length - idx - 1;
        bin = bin.substr(0, idx) + segment + bin.substr(length + idx);
      }
      /**
       * @param {number} idx
       * @param {number} arg1
       * @param {number} length
       * @return {undefined}
       */
      function write(idx, arg1, length) {
        /** @type {string} */
        var segment = "";
        /** @type {number} */
        var n = p ? 0 : -8 * (length - 1);
        var pi3;
        /** @type {number} */
        pi3 = 0;
        for (;length > pi3;pi3++) {
          segment += String.fromCharCode(arg1 >> Math.abs(n + 8 * pi3) & 255);
        }
        putstr(segment, idx, length);
      }
      /** @type {boolean} */
      var p = false;
      var bin;
      return{
        /**
         * @param {string} c
         * @return {?}
         */
        II : function(c) {
          return c === b ? p : void(p = c);
        },
        /**
         * @param {Function} depMaps
         * @return {undefined}
         */
        init : function(depMaps) {
          /** @type {boolean} */
          p = false;
          /** @type {Function} */
          bin = depMaps;
        },
        /**
         * @param {number} idx
         * @param {number} length
         * @param {string} segment
         * @return {?}
         */
        SEGMENT : function(idx, length, segment) {
          switch(arguments.length) {
            case 1:
              return bin.substr(idx, bin.length - idx - 1);
            case 2:
              return bin.substr(idx, length);
            case 3:
              putstr(segment, idx, length);
              break;
            default:
              return bin;
          }
        },
        /**
         * @param {number} idx
         * @return {?}
         */
        BYTE : function(idx) {
          return read(idx, 1);
        },
        /**
         * @param {number} idx
         * @return {?}
         */
        SHORT : function(idx) {
          return read(idx, 2);
        },
        /**
         * @param {number} idx
         * @param {number} a
         * @return {?}
         */
        LONG : function(idx, a) {
          return a === b ? read(idx, 4) : void write(idx, a, 4);
        },
        /**
         * @param {?} idx
         * @return {?}
         */
        SLONG : function(idx) {
          var num = read(idx, 4);
          return num > 2147483647 ? num - 4294967296 : num;
        },
        /**
         * @param {number} idx
         * @param {number} opt_attributes
         * @return {?}
         */
        STRING : function(idx, opt_attributes) {
          /** @type {string} */
          var str = "";
          opt_attributes += idx;
          for (;opt_attributes > idx;idx++) {
            str += String.fromCharCode(read(idx, 1));
          }
          return str;
        }
      };
    };
  });
  expect(re, [item], function(BinaryReader) {
    return function JPEG_Headers(deps) {
      /** @type {Array} */
      var headers = [];
      var read;
      var idx;
      var code;
      /** @type {number} */
      var length = 0;
      if (read = new BinaryReader, read.init(deps), 65496 === read.SHORT(0)) {
        /** @type {number} */
        idx = 2;
        for (;idx <= deps.length;) {
          if (code = read.SHORT(idx), code >= 65488 && 65495 >= code) {
            idx += 2;
          } else {
            if (65498 === code || 65497 === code) {
              break;
            }
            length = read.SHORT(idx + 2) + 2;
            if (code >= 65505) {
              if (65519 >= code) {
                headers.push({
                  hex : code,
                  name : "APP" + (15 & code),
                  start : idx,
                  length : length,
                  segment : read.SEGMENT(idx, length)
                });
              }
            }
            idx += length;
          }
        }
        return read.init(null), {
          headers : headers,
          /**
           * @param {Object} depMaps
           * @return {?}
           */
          restore : function(depMaps) {
            var l;
            var i;
            read.init(depMaps);
            idx = 65504 == read.SHORT(2) ? 4 + read.SHORT(4) : 2;
            /** @type {number} */
            i = 0;
            l = headers.length;
            for (;l > i;i++) {
              read.SEGMENT(idx, 0, headers[i].segment);
              idx += headers[i].length;
            }
            return depMaps = read.SEGMENT(), read.init(null), depMaps;
          },
          /**
           * @param {Object} depMaps
           * @return {?}
           */
          strip : function(depMaps) {
            var p;
            var o;
            var l;
            o = new JPEG_Headers(depMaps);
            p = o.headers;
            o.purge();
            read.init(depMaps);
            l = p.length;
            for (;l--;) {
              read.SEGMENT(p[l].start, p[l].length, "");
            }
            return depMaps = read.SEGMENT(), read.init(null), depMaps;
          },
          /**
           * @param {?} key
           * @return {?}
           */
          get : function(key) {
            /** @type {Array} */
            var array = [];
            /** @type {number} */
            var i = 0;
            var l = headers.length;
            for (;l > i;i++) {
              if (headers[i].name === key.toUpperCase()) {
                array.push(headers[i].segment);
              }
            }
            return array;
          },
          /**
           * @param {string} part
           * @param {Array} val
           * @return {undefined}
           */
          set : function(part, val) {
            /** @type {Array} */
            var matches = [];
            var i;
            var k;
            var l;
            if ("string" == typeof val) {
              matches.push(val);
            } else {
              /** @type {Array} */
              matches = val;
            }
            /** @type {number} */
            i = k = 0;
            l = headers.length;
            for (;l > i && (headers[i].name === part.toUpperCase() && (headers[i].segment = matches[k], headers[i].length = matches[k].length, k++), !(k >= matches.length));i++) {
            }
          },
          /**
           * @return {undefined}
           */
          purge : function() {
            /** @type {Array} */
            headers = [];
            read.init(null);
            /** @type {null} */
            read = null;
          }
        };
      }
    };
  });
  expect(stack, [versions, item], function(plupload, BinaryReader) {
    return function ExifParser() {
      /**
       * @param {number} IFD_offset
       * @param {?} tags2extract
       * @return {?}
       */
      function extractTags(IFD_offset, tags2extract) {
        var length = data.SHORT(IFD_offset);
        var i;
        var index;
        var tag;
        var u;
        var array;
        var tagOffset;
        var offset;
        var value;
        /** @type {Array} */
        var content = [];
        var hash = {};
        /** @type {number} */
        i = 0;
        for (;length > i;i++) {
          if (offset = tagOffset = IFD_offset + 12 * i + 2, tag = tags2extract[data.SHORT(offset)], tag !== b) {
            switch(u = data.SHORT(offset += 2), array = data.LONG(offset += 2), offset += 4, content = [], u) {
              case 1:
              ;
              case 7:
                if (array > 4) {
                  offset = data.LONG(offset) + offsets.tiffHeader;
                }
                /** @type {number} */
                index = 0;
                for (;array > index;index++) {
                  content[index] = data.BYTE(offset + index);
                }
                break;
              case 2:
                if (array > 4) {
                  offset = data.LONG(offset) + offsets.tiffHeader;
                }
                hash[tag] = data.STRING(offset, array - 1);
                continue;
              case 3:
                if (array > 2) {
                  offset = data.LONG(offset) + offsets.tiffHeader;
                }
                /** @type {number} */
                index = 0;
                for (;array > index;index++) {
                  content[index] = data.SHORT(offset + 2 * index);
                }
                break;
              case 4:
                if (array > 1) {
                  offset = data.LONG(offset) + offsets.tiffHeader;
                }
                /** @type {number} */
                index = 0;
                for (;array > index;index++) {
                  content[index] = data.LONG(offset + 4 * index);
                }
                break;
              case 5:
                offset = data.LONG(offset) + offsets.tiffHeader;
                /** @type {number} */
                index = 0;
                for (;array > index;index++) {
                  /** @type {number} */
                  content[index] = data.LONG(offset + 4 * index) / data.LONG(offset + 4 * index + 4);
                }
                break;
              case 9:
                offset = data.LONG(offset) + offsets.tiffHeader;
                /** @type {number} */
                index = 0;
                for (;array > index;index++) {
                  content[index] = data.SLONG(offset + 4 * index);
                }
                break;
              case 10:
                offset = data.LONG(offset) + offsets.tiffHeader;
                /** @type {number} */
                index = 0;
                for (;array > index;index++) {
                  /** @type {number} */
                  content[index] = data.SLONG(offset + 4 * index) / data.SLONG(offset + 4 * index + 4);
                }
                break;
              default:
                continue;
            }
            value = 1 == array ? content[0] : content;
            hash[tag] = tagDescs.hasOwnProperty(tag) && "object" != typeof value ? tagDescs[tag][value] : value;
          }
        }
        return hash;
      }
      /**
       * @return {?}
       */
      function getIFDOffsets() {
        var idx = offsets.tiffHeader;
        return data.II(18761 == data.SHORT(idx)), 42 !== data.SHORT(idx += 2) ? false : (offsets.IFD0 = offsets.tiffHeader + data.LONG(idx += 2), Tiff = extractTags(offsets.IFD0, tags.tiff), "ExifIFDPointer" in Tiff && (offsets.exifIFD = offsets.tiffHeader + Tiff.ExifIFDPointer, delete Tiff.ExifIFDPointer), "GPSInfoIFDPointer" in Tiff && (offsets.gpsIFD = offsets.tiffHeader + Tiff.GPSInfoIFDPointer, delete Tiff.GPSInfoIFDPointer), true);
      }
      /**
       * @param {string} ifd
       * @param {string} name
       * @param {number} value
       * @return {?}
       */
      function setTag(ifd, name, value) {
        var offset;
        var val;
        var tagOffset;
        /** @type {number} */
        var valueOffset = 0;
        if ("string" == typeof name) {
          var expr = tags[ifd.toLowerCase()];
          var key;
          for (key in expr) {
            if (expr[key] === name) {
              /** @type {string} */
              name = key;
              break;
            }
          }
        }
        offset = offsets[ifd.toLowerCase() + "IFD"];
        val = data.SHORT(offset);
        /** @type {number} */
        var i = 0;
        for (;val > i;i++) {
          if (tagOffset = offset + 12 * i + 2, data.SHORT(tagOffset) == name) {
            valueOffset = tagOffset + 8;
            break;
          }
        }
        return valueOffset ? (data.LONG(valueOffset, value), true) : false;
      }
      var data;
      var tags;
      var Tiff;
      var offsets = {};
      var tagDescs;
      return data = new BinaryReader, tags = {
        tiff : {
          274 : "Orientation",
          270 : "ImageDescription",
          271 : "Make",
          272 : "Model",
          305 : "Software",
          34665 : "ExifIFDPointer",
          34853 : "GPSInfoIFDPointer"
        },
        exif : {
          36864 : "ExifVersion",
          40961 : "ColorSpace",
          40962 : "PixelXDimension",
          40963 : "PixelYDimension",
          36867 : "DateTimeOriginal",
          33434 : "ExposureTime",
          33437 : "FNumber",
          34855 : "ISOSpeedRatings",
          37377 : "ShutterSpeedValue",
          37378 : "ApertureValue",
          37383 : "MeteringMode",
          37384 : "LightSource",
          37385 : "Flash",
          37386 : "FocalLength",
          41986 : "ExposureMode",
          41987 : "WhiteBalance",
          41990 : "SceneCaptureType",
          41988 : "DigitalZoomRatio",
          41992 : "Contrast",
          41993 : "Saturation",
          41994 : "Sharpness"
        },
        gps : {
          0 : "GPSVersionID",
          1 : "GPSLatitudeRef",
          2 : "GPSLatitude",
          3 : "GPSLongitudeRef",
          4 : "GPSLongitude"
        }
      }, tagDescs = {
        ColorSpace : {
          1 : "sRGB",
          0 : "Uncalibrated"
        },
        MeteringMode : {
          0 : "Unknown",
          1 : "Average",
          2 : "CenterWeightedAverage",
          3 : "Spot",
          4 : "MultiSpot",
          5 : "Pattern",
          6 : "Partial",
          255 : "Other"
        },
        LightSource : {
          1 : "Daylight",
          2 : "Fliorescent",
          3 : "Tungsten",
          4 : "Flash",
          9 : "Fine weather",
          10 : "Cloudy weather",
          11 : "Shade",
          12 : "Daylight fluorescent (D 5700 - 7100K)",
          13 : "Day white fluorescent (N 4600 -5400K)",
          14 : "Cool white fluorescent (W 3900 - 4500K)",
          15 : "White fluorescent (WW 3200 - 3700K)",
          17 : "Standard light A",
          18 : "Standard light B",
          19 : "Standard light C",
          20 : "D55",
          21 : "D65",
          22 : "D75",
          23 : "D50",
          24 : "ISO studio tungsten",
          255 : "Other"
        },
        Flash : {
          0 : "Flash did not fire.",
          1 : "Flash fired.",
          5 : "Strobe return light not detected.",
          7 : "Strobe return light detected.",
          9 : "Flash fired, compulsory flash mode",
          13 : "Flash fired, compulsory flash mode, return light not detected",
          15 : "Flash fired, compulsory flash mode, return light detected",
          16 : "Flash did not fire, compulsory flash mode",
          24 : "Flash did not fire, auto mode",
          25 : "Flash fired, auto mode",
          29 : "Flash fired, auto mode, return light not detected",
          31 : "Flash fired, auto mode, return light detected",
          32 : "No flash function",
          65 : "Flash fired, red-eye reduction mode",
          69 : "Flash fired, red-eye reduction mode, return light not detected",
          71 : "Flash fired, red-eye reduction mode, return light detected",
          73 : "Flash fired, compulsory flash mode, red-eye reduction mode",
          77 : "Flash fired, compulsory flash mode, red-eye reduction mode, return light not detected",
          79 : "Flash fired, compulsory flash mode, red-eye reduction mode, return light detected",
          89 : "Flash fired, auto mode, red-eye reduction mode",
          93 : "Flash fired, auto mode, return light not detected, red-eye reduction mode",
          95 : "Flash fired, auto mode, return light detected, red-eye reduction mode"
        },
        ExposureMode : {
          0 : "Auto exposure",
          1 : "Manual exposure",
          2 : "Auto bracket"
        },
        WhiteBalance : {
          0 : "Auto white balance",
          1 : "Manual white balance"
        },
        SceneCaptureType : {
          0 : "Standard",
          1 : "Landscape",
          2 : "Portrait",
          3 : "Night scene"
        },
        Contrast : {
          0 : "Normal",
          1 : "Soft",
          2 : "Hard"
        },
        Saturation : {
          0 : "Normal",
          1 : "Low saturation",
          2 : "High saturation"
        },
        Sharpness : {
          0 : "Normal",
          1 : "Soft",
          2 : "Hard"
        },
        GPSLatitudeRef : {
          N : "North latitude",
          S : "South latitude"
        },
        GPSLongitudeRef : {
          E : "East longitude",
          W : "West longitude"
        }
      }, {
        /**
         * @param {Object} depMaps
         * @return {?}
         */
        init : function(depMaps) {
          return offsets = {
            tiffHeader : 10
          }, depMaps !== b && depMaps.length ? (data.init(depMaps), 65505 === data.SHORT(0) && "EXIF\x00" === data.STRING(4, 5).toUpperCase() ? getIFDOffsets() : false) : false;
        },
        /**
         * @return {?}
         */
        TIFF : function() {
          return Tiff;
        },
        /**
         * @return {?}
         */
        EXIF : function() {
          var Exif;
          if (Exif = extractTags(offsets.exifIFD, tags.exif), Exif.ExifVersion && "array" === plupload.typeOf(Exif.ExifVersion)) {
            /** @type {number} */
            var i = 0;
            /** @type {string} */
            var exifVersion = "";
            for (;i < Exif.ExifVersion.length;i++) {
              exifVersion += String.fromCharCode(Exif.ExifVersion[i]);
            }
            /** @type {string} */
            Exif.ExifVersion = exifVersion;
          }
          return Exif;
        },
        /**
         * @return {?}
         */
        GPS : function() {
          var Exif;
          return Exif = extractTags(offsets.gpsIFD, tags.gps), Exif.GPSVersionID && ("array" === plupload.typeOf(Exif.GPSVersionID) && (Exif.GPSVersionID = Exif.GPSVersionID.join("."))), Exif;
        },
        /**
         * @param {string} tag
         * @param {number} value
         * @return {?}
         */
        setExif : function(tag, value) {
          return "PixelXDimension" !== tag && "PixelYDimension" !== tag ? false : setTag("exif", tag, value);
        },
        /**
         * @return {?}
         */
        getBinary : function() {
          return data.SEGMENT();
        },
        /**
         * @return {undefined}
         */
        purge : function() {
          data.init(null);
          /** @type {null} */
          data = Tiff = null;
          offsets = {};
        }
      };
    };
  });
  expect(content, [versions, input, re, item, stack], function($, dataAndEvents, View, AppRouter, FooterView) {
    /**
     * @param {Object} name
     * @return {undefined}
     */
    function initialize(name) {
      /**
       * @return {?}
       */
      function successCallback() {
        /** @type {number} */
        var idx = 0;
        var l;
        var n;
        for (;idx <= deps.length;) {
          if (l = data.SHORT(idx += 2), l >= 65472 && 65475 >= l) {
            return idx += 5, {
              height : data.SHORT(idx),
              width : data.SHORT(idx += 2)
            };
          }
          n = data.SHORT(idx += 2);
          idx += n - 2;
        }
        return null;
      }
      /**
       * @return {undefined}
       */
      function remove() {
        if (exifParser) {
          if (self) {
            if (data) {
              exifParser.purge();
              self.purge();
              data.init(null);
              /** @type {null} */
              deps = dim = self = exifParser = data = null;
            }
          }
        }
      }
      var deps;
      var data;
      var self;
      var exifParser;
      var dim;
      var h;
      if (deps = name, data = new AppRouter, data.init(deps), 65496 !== data.SHORT(0)) {
        throw new dataAndEvents.ImageError(dataAndEvents.ImageError.WRONG_FORMAT);
      }
      self = new View(name);
      exifParser = new FooterView;
      /** @type {boolean} */
      h = !!exifParser.init(self.get("app1")[0]);
      dim = successCallback.call(this);
      $.extend(this, {
        type : "image/jpeg",
        size : deps.length,
        width : dim && dim.width || 0,
        height : dim && dim.height || 0,
        /**
         * @param {Object} object
         * @param {number} height
         * @return {?}
         */
        setExif : function(object, height) {
          return h ? ("object" === $.typeOf(object) ? $.each(object, function(height, tagName) {
            exifParser.setExif(tagName, height);
          }) : exifParser.setExif(object, height), void self.set("app1", exifParser.getBinary())) : false;
        },
        /**
         * @return {?}
         */
        writeHeaders : function() {
          return arguments.length ? self.restore(arguments[0]) : deps = self.restore(deps);
        },
        /**
         * @param {Object} str
         * @return {?}
         */
        stripHeaders : function(str) {
          return self.strip(str);
        },
        /**
         * @return {undefined}
         */
        purge : function() {
          remove.call(this);
        }
      });
      if (h) {
        this.meta = {
          tiff : exifParser.TIFF(),
          exif : exifParser.EXIF(),
          gps : exifParser.GPS()
        };
      }
    }
    return initialize;
  });
  expect(guesses, [input, versions, item], function(dataAndEvents, hex, Exception) {
    /**
     * @param {Error} callback
     * @return {undefined}
     */
    function merge(callback) {
      /**
       * @return {?}
       */
      function toString() {
        var self;
        var offset;
        return self = read.call(this, 8), "IHDR" == self.type ? (offset = self.start, {
          width : data.LONG(offset),
          height : data.LONG(offset += 4)
        }) : null;
      }
      /**
       * @return {undefined}
       */
      function onLoad() {
        if (data) {
          data.init(null);
          /** @type {null} */
          deps = tmp = elem = layer = data = null;
        }
      }
      /**
       * @param {number} offset
       * @return {?}
       */
      function read(offset) {
        var i;
        var k;
        var minIdx;
        var CRC;
        return i = data.LONG(offset), k = data.STRING(offset += 4, 4), minIdx = offset += 4, CRC = data.LONG(offset + i), {
          length : i,
          type : k,
          start : minIdx,
          CRC : CRC
        };
      }
      var deps;
      var data;
      var elem;
      var layer;
      var tmp;
      /** @type {Error} */
      deps = callback;
      data = new Exception;
      data.init(deps);
      (function() {
        /** @type {number} */
        var offset = 0;
        /** @type {number} */
        var i = 0;
        /** @type {Array} */
        var codeSegments = [35152, 20039, 3338, 6666];
        /** @type {number} */
        i = 0;
        for (;i < codeSegments.length;i++, offset += 2) {
          if (codeSegments[i] != data.SHORT(offset)) {
            throw new dataAndEvents.ImageError(dataAndEvents.ImageError.WRONG_FORMAT);
          }
        }
      })();
      tmp = toString.call(this);
      hex.extend(this, {
        type : "image/png",
        size : deps.length,
        width : tmp.width,
        height : tmp.height,
        /**
         * @return {undefined}
         */
        purge : function() {
          onLoad.call(this);
        }
      });
      onLoad.call(this);
    }
    return merge;
  });
  expect(bewit, [versions, input, content, guesses], function(hex, dataAndEvents, ignoreMethodDoesntExist, textAlt) {
    return function(deepDataAndEvents) {
      /** @type {Array} */
      var codeSegments = [ignoreMethodDoesntExist, textAlt];
      var e;
      e = function() {
        /** @type {number} */
        var i = 0;
        for (;i < codeSegments.length;i++) {
          try {
            return new codeSegments[i](deepDataAndEvents);
          } catch (n) {
          }
        }
        throw new dataAndEvents.ImageError(dataAndEvents.ImageError.WRONG_FORMAT);
      }();
      hex.extend(this, {
        type : "",
        size : 0,
        width : 0,
        height : 0,
        /**
         * @return {undefined}
         */
        setExif : function() {
        },
        /**
         * @param {Array} keepData
         * @return {?}
         */
        writeHeaders : function(keepData) {
          return keepData;
        },
        /**
         * @param {Array} keepData
         * @return {?}
         */
        stripHeaders : function(keepData) {
          return keepData;
        },
        /**
         * @return {undefined}
         */
        purge : function() {
        }
      });
      hex.extend(this, e);
      /**
       * @return {undefined}
       */
      this.purge = function() {
        e.purge();
        /** @type {null} */
        e = null;
      };
    };
  });
  expect(parsed, [], function() {
    /**
     * @param {Object} img
     * @param {HTMLCanvasElement} dataAndEvents
     * @param {Object} size
     * @return {undefined}
     */
    function renderImageToCanvas(img, dataAndEvents, size) {
      var iw = img.naturalWidth;
      var ih = img.naturalHeight;
      var width = size.width;
      var height = size.height;
      var c = size.x || 0;
      var l = size.y || 0;
      var ctx = dataAndEvents.getContext("2d");
      if (detectSubsampling(img)) {
        iw /= 2;
        ih /= 2;
      }
      /** @type {number} */
      var d = 1024;
      /** @type {Element} */
      var tmpCanvas = document.createElement("canvas");
      /** @type {number} */
      tmpCanvas.width = tmpCanvas.height = d;
      var tmpCtx = tmpCanvas.getContext("2d");
      var vertSquashRatio = detectVerticalSquash(img, iw, ih);
      /** @type {number} */
      var sy = 0;
      for (;ih > sy;) {
        /** @type {number} */
        var sh = sy + d > ih ? ih - sy : d;
        /** @type {number} */
        var sx = 0;
        for (;iw > sx;) {
          /** @type {number} */
          var sw = sx + d > iw ? iw - sx : d;
          tmpCtx.clearRect(0, 0, d, d);
          tmpCtx.drawImage(img, -sx, -sy);
          /** @type {number} */
          var dx = sx * width / iw + c << 0;
          /** @type {number} */
          var dw = Math.ceil(sw * width / iw);
          /** @type {number} */
          var dy = sy * height / ih / vertSquashRatio + l << 0;
          /** @type {number} */
          var dh = Math.ceil(sh * height / ih / vertSquashRatio);
          ctx.drawImage(tmpCanvas, 0, 0, sw, sh, dx, dy, dw, dh);
          sx += d;
        }
        sy += d;
      }
      /** @type {null} */
      tmpCanvas = tmpCtx = null;
    }
    /**
     * @param {Object} img
     * @return {?}
     */
    function detectSubsampling(img) {
      var iw = img.naturalWidth;
      var ih = img.naturalHeight;
      if (iw * ih > 1048576) {
        /** @type {Element} */
        var cnv = document.createElement("canvas");
        /** @type {number} */
        cnv.width = cnv.height = 1;
        var ctx = cnv.getContext("2d");
        return ctx.drawImage(img, -iw + 1, 0), 0 === ctx.getImageData(0, 0, 1, 1).data[3];
      }
      return false;
    }
    /**
     * @param {Object} img
     * @param {?} iw
     * @param {number} ih
     * @return {?}
     */
    function detectVerticalSquash(img, iw, ih) {
      /** @type {Element} */
      var canvas = document.createElement("canvas");
      /** @type {number} */
      canvas.width = 1;
      /** @type {number} */
      canvas.height = ih;
      var ctx = canvas.getContext("2d");
      ctx.drawImage(img, 0, 0);
      var params = ctx.getImageData(0, 0, 1, ih).data;
      /** @type {number} */
      var sy = 0;
      /** @type {number} */
      var ey = ih;
      /** @type {number} */
      var py = ih;
      for (;py > sy;) {
        var param = params[4 * (py - 1) + 3];
        if (0 === param) {
          ey = py;
        } else {
          sy = py;
        }
        /** @type {number} */
        py = ey + sy >> 1;
      }
      /** @type {null} */
      canvas = null;
      /** @type {number} */
      var ratio = py / ih;
      return 0 === ratio ? 1 : ratio;
    }
    return{
      /** @type {function (Object): ?} */
      isSubsampled : detectSubsampling,
      /** @type {function (Object, HTMLCanvasElement, Object): undefined} */
      renderTo : renderImageToCanvas
    };
  });
  expect(body, [f, versions, input, target, result, bewit, parsed, iter, before], function(c, d, global, view, Node, Type, $, assert, BrowserDetect) {
    /**
     * @return {undefined}
     */
    function exports() {
      /**
       * @return {?}
       */
      function getInfo() {
        if (!canvas && !image) {
          throw new global.ImageError(global.DOMException.INVALID_STATE_ERR);
        }
        return canvas || image;
      }
      /**
       * @param {string} target
       * @return {?}
       */
      function getName(target) {
        return view.atob(target.substring(target.indexOf("base64,") + 7));
      }
      /**
       * @param {string} input
       * @param {string} classNames
       * @return {?}
       */
      function remove(input, classNames) {
        return "data:" + (classNames || "") + ";base64," + view.btoa(input);
      }
      /**
       * @param {string} path
       * @return {undefined}
       */
      function add(path) {
        var fm = this;
        /** @type {Image} */
        image = new Image;
        /**
         * @return {undefined}
         */
        image.onerror = function() {
          close.call(this);
          fm.trigger("error", global.ImageError.WRONG_FORMAT);
        };
        /**
         * @return {undefined}
         */
        image.onload = function() {
          fm.trigger("load");
        };
        image.src = /^data:[^;]*;base64,/.test(path) ? path : remove(path, v.type);
      }
      /**
       * @param {?} file
       * @param {?} callback
       * @return {?}
       */
      function loadFile(file, callback) {
        var originalModel = this;
        var reader;
        return window.FileReader ? (reader = new FileReader, reader.onload = function() {
          callback(this.result);
        }, reader.onerror = function() {
          originalModel.trigger("error", global.ImageError.WRONG_FORMAT);
        }, reader.readAsDataURL(file), void 0) : callback(file.getAsDataURL());
      }
      /**
       * @param {number} width
       * @param {number} height
       * @param {boolean} contentHTML
       * @param {Object} attrs
       * @return {?}
       */
      function initialize(width, height, contentHTML, attrs) {
        var self = this;
        var percentage;
        var u;
        /** @type {number} */
        var slipForce = 0;
        /** @type {number} */
        var l = 0;
        var bounds;
        var totalWidth;
        var h;
        var n;
        if (result = attrs, n = this.meta && (this.meta.tiff && this.meta.tiff.Orientation) || 1, -1 !== d.inArray(n, [5, 6, 7, 8])) {
          /** @type {number} */
          var temp = width;
          /** @type {number} */
          width = height;
          height = temp;
        }
        return bounds = getInfo(), contentHTML ? (width = Math.min(width, bounds.width), height = Math.min(height, bounds.height), percentage = Math.max(width / bounds.width, height / bounds.height)) : percentage = Math.min(width / bounds.width, height / bounds.height), percentage > 1 && (!contentHTML && attrs) ? void this.trigger("Resize") : (canvas || (canvas = document.createElement("canvas")), totalWidth = Math.round(bounds.width * percentage), h = Math.round(bounds.height * percentage), contentHTML ? 
        (canvas.width = width, canvas.height = height, totalWidth > width && (slipForce = Math.round((totalWidth - width) / 2)), h > height && (l = Math.round((h - height) / 2))) : (canvas.width = totalWidth, canvas.height = h), result || render(canvas.width, canvas.height, n), init.call(this, bounds, canvas, -slipForce, -l, totalWidth, h), this.width = canvas.width, this.height = canvas.height, projectName = true, void self.trigger("Resize"));
      }
      /**
       * @param {Object} image
       * @param {HTMLCanvasElement} node
       * @param {number} x
       * @param {number} offsetY
       * @param {number} width
       * @param {number} height
       * @return {undefined}
       */
      function init(image, node, x, offsetY, width, height) {
        if ("iOS" === BrowserDetect.OS) {
          $.renderTo(image, node, {
            width : width,
            height : height,
            x : x,
            y : offsetY
          });
        } else {
          var ctx = node.getContext("2d");
          ctx.drawImage(image, x, offsetY, width, height);
        }
      }
      /**
       * @param {number} width
       * @param {?} size
       * @param {?} node
       * @return {undefined}
       */
      function render(width, size, node) {
        switch(node) {
          case 5:
          ;
          case 6:
          ;
          case 7:
          ;
          case 8:
            canvas.width = size;
            /** @type {number} */
            canvas.height = width;
            break;
          default:
            /** @type {number} */
            canvas.width = width;
            canvas.height = size;
        }
        var ctx = canvas.getContext("2d");
        switch(node) {
          case 2:
            ctx.translate(width, 0);
            ctx.scale(-1, 1);
            break;
          case 3:
            ctx.translate(width, size);
            ctx.rotate(Math.PI);
            break;
          case 4:
            ctx.translate(0, size);
            ctx.scale(1, -1);
            break;
          case 5:
            ctx.rotate(0.5 * Math.PI);
            ctx.scale(1, -1);
            break;
          case 6:
            ctx.rotate(0.5 * Math.PI);
            ctx.translate(0, -size);
            break;
          case 7:
            ctx.rotate(0.5 * Math.PI);
            ctx.translate(width, -size);
            ctx.scale(-1, 1);
            break;
          case 8:
            ctx.rotate(-0.5 * Math.PI);
            ctx.translate(-width, 0);
        }
      }
      /**
       * @return {undefined}
       */
      function close() {
        if (object) {
          object.purge();
          /** @type {null} */
          object = null;
        }
        /** @type {null} */
        name = image = canvas = v = null;
        /** @type {boolean} */
        projectName = false;
      }
      var parent = this;
      var image;
      var object;
      var canvas;
      var name;
      var v;
      /** @type {boolean} */
      var projectName = false;
      /** @type {boolean} */
      var result = true;
      d.extend(this, {
        /**
         * @param {Blob} file
         * @return {?}
         */
        loadFromBlob : function(file) {
          var model = this;
          var me = model.getRuntime();
          var r = arguments.length > 1 ? arguments[1] : true;
          if (!me.can("access_binary")) {
            throw new global.RuntimeError(global.RuntimeError.NOT_SUPPORTED_ERR);
          }
          return v = file, file.isDetached() ? (name = file.getSource(), void add.call(this, name)) : void loadFile.call(this, file.getSource(), function(value) {
            if (r) {
              name = getName(value);
            }
            add.call(model, value);
          });
        },
        /**
         * @param {Object} file
         * @param {?} opt_reverse
         * @return {undefined}
         */
        loadFromImage : function(file, opt_reverse) {
          this.meta = file.meta;
          v = new Node(null, {
            name : file.name,
            size : file.size,
            type : file.type
          });
          add.call(this, opt_reverse ? name = file.getAsBinaryString() : file.getAsDataURL());
        },
        /**
         * @return {?}
         */
        getInfo : function() {
          var me = this.getRuntime();
          var result;
          return!object && (name && (me.can("access_image_binary") && (object = new Type(name)))), result = {
            width : getInfo().width || 0,
            height : getInfo().height || 0,
            type : v.type || assert.getFileMime(v.name),
            size : name && name.length || (v.size || 0),
            name : v.name || "",
            meta : object && object.meta || (this.meta || {})
          };
        },
        /**
         * @return {undefined}
         */
        downsize : function() {
          initialize.apply(this, arguments);
        },
        /**
         * @return {?}
         */
        getAsCanvas : function() {
          return canvas && (canvas.id = this.uid + "_canvas"), canvas;
        },
        /**
         * @param {string} type
         * @param {?} data
         * @return {?}
         */
        getAsBlob : function(type, data) {
          return type !== this.type && initialize.call(this, this.width, this.height, false), new Node(null, {
            name : v.name || "",
            type : type,
            data : parent.getAsBinaryString.call(this, type, data)
          });
        },
        /**
         * @param {number} from
         * @return {?}
         */
        getAsDataURL : function(from) {
          var toDataURL = arguments[1] || 90;
          if (!projectName) {
            return image.src;
          }
          if ("image/jpeg" !== from) {
            return canvas.toDataURL("image/png");
          }
          try {
            return canvas.toDataURL("image/jpeg", toDataURL / 100);
          } catch (n) {
            return canvas.toDataURL("image/jpeg");
          }
        },
        /**
         * @param {number} start
         * @param {number} e2
         * @return {?}
         */
        getAsBinaryString : function(start, e2) {
          if (!projectName) {
            return name || (name = getName(parent.getAsDataURL(start, e2))), name;
          }
          if ("image/jpeg" !== start) {
            name = getName(parent.getAsDataURL(start, e2));
          } else {
            var value;
            if (!e2) {
              /** @type {number} */
              e2 = 90;
            }
            try {
              value = canvas.toDataURL("image/jpeg", e2 / 100);
            } catch (i) {
              value = canvas.toDataURL("image/jpeg");
            }
            name = getName(value);
            if (object) {
              name = object.stripHeaders(name);
              if (result) {
                if (object.meta) {
                  if (object.meta.exif) {
                    object.setExif({
                      PixelXDimension : this.width,
                      PixelYDimension : this.height
                    });
                  }
                }
                name = object.writeHeaders(name);
              }
              object.purge();
              /** @type {null} */
              object = null;
            }
          }
          return projectName = false, name;
        },
        /**
         * @return {undefined}
         */
        destroy : function() {
          /** @type {null} */
          parent = null;
          close.call(this);
          this.getRuntime().getShim().removeInstance(this.uid);
        }
      });
    }
    return c.Image = exports;
  });
  expect(err, [versions, before, changes, input, newValue], function($, b, output, dataAndEvents, dojo) {
    /**
     * @return {?}
     */
    function getFlashVersion() {
      var version;
      try {
        version = navigator.plugins["Shockwave Flash"];
        version = version.description;
      } catch (t) {
        try {
          version = (new ActiveXObject("ShockwaveFlash.ShockwaveFlash")).GetVariable("$version");
        } catch (n) {
          /** @type {string} */
          version = "0.0";
        }
      }
      return version = version.match(/\d+/g), parseFloat(version[0] + "." + version[1]);
    }
    /**
     * @param {(Function|number)} props
     * @return {undefined}
     */
    function init(props) {
      var self = this;
      var tref;
      props = $.extend({
        swf_url : b.swf_url
      }, props);
      dojo.call(this, props, _this, {
        /**
         * @param {boolean} dataAndEvents
         * @return {?}
         */
        access_binary : function(dataAndEvents) {
          return dataAndEvents && "browser" === self.mode;
        },
        /**
         * @param {boolean} dataAndEvents
         * @return {?}
         */
        access_image_binary : function(dataAndEvents) {
          return dataAndEvents && "browser" === self.mode;
        },
        display_media : dojo.capTrue,
        do_cors : dojo.capTrue,
        drag_and_drop : false,
        /**
         * @return {?}
         */
        report_upload_progress : function() {
          return "client" === self.mode;
        },
        resize_image : dojo.capTrue,
        return_response_headers : false,
        /**
         * @param {string} defs
         * @return {?}
         */
        return_response_type : function(defs) {
          return "json" === defs && window.JSON ? true : !$.arrayDiff(defs, ["", "text", "document"]) || "browser" === self.mode;
        },
        /**
         * @param {Object} defs
         * @return {?}
         */
        return_status_code : function(defs) {
          return "browser" === self.mode || !$.arrayDiff(defs, [200, 404]);
        },
        select_file : dojo.capTrue,
        select_multiple : dojo.capTrue,
        /**
         * @param {boolean} dataAndEvents
         * @return {?}
         */
        send_binary_string : function(dataAndEvents) {
          return dataAndEvents && "browser" === self.mode;
        },
        /**
         * @param {boolean} dataAndEvents
         * @return {?}
         */
        send_browser_cookies : function(dataAndEvents) {
          return dataAndEvents && "browser" === self.mode;
        },
        /**
         * @param {boolean} dataAndEvents
         * @return {?}
         */
        send_custom_headers : function(dataAndEvents) {
          return dataAndEvents && "browser" === self.mode;
        },
        send_multipart : dojo.capTrue,
        /**
         * @param {boolean} dataAndEvents
         * @return {?}
         */
        slice_blob : function(dataAndEvents) {
          return dataAndEvents && "browser" === self.mode;
        },
        /**
         * @param {boolean} res
         * @return {?}
         */
        stream_upload : function(res) {
          return res && "browser" === self.mode;
        },
        summon_file_dialog : false,
        /**
         * @param {number} array
         * @return {?}
         */
        upload_filesize : function(array) {
          return $.parseSizeStr(array) <= 2097152 || "client" === self.mode;
        },
        /**
         * @param {Object} defs
         * @return {?}
         */
        use_http_method : function(defs) {
          return!$.arrayDiff(defs, ["GET", "POST"]);
        }
      }, {
        /**
         * @param {boolean} dataAndEvents
         * @return {?}
         */
        access_binary : function(dataAndEvents) {
          return dataAndEvents ? "browser" : "client";
        },
        /**
         * @param {boolean} dataAndEvents
         * @return {?}
         */
        access_image_binary : function(dataAndEvents) {
          return dataAndEvents ? "browser" : "client";
        },
        /**
         * @param {boolean} dataAndEvents
         * @return {?}
         */
        report_upload_progress : function(dataAndEvents) {
          return dataAndEvents ? "browser" : "client";
        },
        /**
         * @param {Object} defs
         * @return {?}
         */
        return_response_type : function(defs) {
          return $.arrayDiff(defs, ["", "text", "json", "document"]) ? "browser" : ["client", "browser"];
        },
        /**
         * @param {Object} defs
         * @return {?}
         */
        return_status_code : function(defs) {
          return $.arrayDiff(defs, [200, 404]) ? "browser" : ["client", "browser"];
        },
        /**
         * @param {boolean} dataAndEvents
         * @return {?}
         */
        send_binary_string : function(dataAndEvents) {
          return dataAndEvents ? "browser" : "client";
        },
        /**
         * @param {boolean} dataAndEvents
         * @return {?}
         */
        send_browser_cookies : function(dataAndEvents) {
          return dataAndEvents ? "browser" : "client";
        },
        /**
         * @param {boolean} dataAndEvents
         * @return {?}
         */
        send_custom_headers : function(dataAndEvents) {
          return dataAndEvents ? "browser" : "client";
        },
        /**
         * @param {boolean} res
         * @return {?}
         */
        stream_upload : function(res) {
          return res ? "client" : "browser";
        },
        /**
         * @param {number} array
         * @return {?}
         */
        upload_filesize : function(array) {
          return $.parseSizeStr(array) >= 2097152 ? "client" : "browser";
        }
      }, "client");
      if (getFlashVersion() < 10) {
        /** @type {boolean} */
        this.mode = false;
      }
      $.extend(this, {
        /**
         * @return {?}
         */
        getShim : function() {
          return output.get(this.uid);
        },
        /**
         * @param {?} until
         * @param {?} opt_key
         * @return {?}
         */
        shimExec : function(until, opt_key) {
          /** @type {Array.<?>} */
          var args = [].slice.call(arguments, 2);
          return self.getShim().exec(this.uid, until, opt_key, args);
        },
        /**
         * @return {undefined}
         */
        init : function() {
          var html;
          var el;
          var tip;
          tip = this.getShimContainer();
          $.extend(tip.style, {
            position : "absolute",
            top : "-8px",
            left : "-8px",
            width : "9px",
            height : "9px",
            overflow : "hidden"
          });
          /** @type {string} */
          html = '<object id="' + this.uid + '" type="application/x-shockwave-flash" data="' + props.swf_url + '" ';
          if ("IE" === b.browser) {
            html += 'classid="clsid:d27cdb6e-ae6d-11cf-96b8-444553540000" ';
          }
          html += 'width="100%" height="100%" style="outline:0"><param name="movie" value="' + props.swf_url + '" /><param name="flashvars" value="uid=' + escape(this.uid) + "&target=" + b.global_event_dispatcher + '" /><param name="wmode" value="transparent" /><param name="allowscriptaccess" value="always" /></object>';
          if ("IE" === b.browser) {
            /** @type {Element} */
            el = document.createElement("div");
            tip.appendChild(el);
            /** @type {string} */
            el.outerHTML = html;
            /** @type {null} */
            el = tip = null;
          } else {
            /** @type {string} */
            tip.innerHTML = html;
          }
          /** @type {number} */
          tref = setTimeout(function() {
            if (self) {
              if (!self.initialized) {
                self.trigger("Error", new dataAndEvents.RuntimeError(dataAndEvents.RuntimeError.NOT_INIT_ERR));
              }
            }
          }, 5E3);
        },
        destroy : function(promise) {
          return function() {
            promise.call(self);
            clearTimeout(tref);
            /** @type {null} */
            props = tref = promise = self = null;
          };
        }(this.destroy)
      }, copy);
    }
    /** @type {string} */
    var _this = "flash";
    var copy = {};
    return dojo.addConstructor(_this, init), copy;
  });
  expect(element, [err, values], function(o, File) {
    var lvl = {
      /**
       * @param {number} value
       * @param {number} end
       * @param {number} start
       * @param {string} a
       * @return {?}
       */
      slice : function(value, end, start, a) {
        var f = this.getRuntime();
        return 0 > end ? end = Math.max(value.size + end, 0) : end > 0 && (end = Math.min(end, value.size)), 0 > start ? start = Math.max(value.size + start, 0) : start > 0 && (start = Math.min(start, value.size)), value = f.shimExec.call(this, "Blob", "slice", end, start, a || ""), value && (value = new File(f.uid, value)), value;
      }
    };
    return o.Blob = lvl;
  });
  expect(me, [err], function(o) {
    var proto = {
      /**
       * @param {Object} depMaps
       * @return {undefined}
       */
      init : function(depMaps) {
        this.getRuntime().shimExec.call(this, "FileInput", "init", {
          name : depMaps.name,
          accept : depMaps.accept,
          multiple : depMaps.multiple
        });
        this.trigger("ready");
      }
    };
    return o.FileInput = proto;
  });
  expect(n, [err, target], function($window, stream) {
    /**
     * @param {string} data
     * @param {string} onSuccess
     * @return {?}
     */
    function readFile(data, onSuccess) {
      switch(onSuccess) {
        case "readAsText":
          return stream.atob(data, "utf8");
        case "readAsBinaryString":
          return stream.atob(data);
        case "readAsDataURL":
          return data;
      }
      return null;
    }
    /** @type {string} */
    var _result = "";
    var helper = {
      /**
       * @param {string} callback
       * @param {Object} f
       * @return {?}
       */
      read : function(callback, f) {
        var func = this;
        var parent = func.getRuntime();
        return "readAsDataURL" === callback && (_result = "data:" + (f.type || "") + ";base64,"), func.bind("Progress", function(dataAndEvents, inplace) {
          if (inplace) {
            _result += readFile(inplace, callback);
          }
        }), parent.shimExec.call(this, "FileReader", "readAsBase64", f.uid);
      },
      /**
       * @return {?}
       */
      getResult : function() {
        return _result;
      },
      /**
       * @return {undefined}
       */
      destroy : function() {
        /** @type {null} */
        _result = null;
      }
    };
    return $window.FileReader = helper;
  });
  expect(value, [err, target], function(exports, stream) {
    /**
     * @param {string} data
     * @param {string} req
     * @return {?}
     */
    function get(data, req) {
      switch(req) {
        case "readAsText":
          return stream.atob(data, "utf8");
        case "readAsBinaryString":
          return stream.atob(data);
        case "readAsDataURL":
          return data;
      }
      return null;
    }
    var helper = {
      /**
       * @param {string} callback
       * @param {Object} f
       * @return {?}
       */
      read : function(callback, f) {
        var dep;
        var parent = this.getRuntime();
        return(dep = parent.shimExec.call(this, "FileReaderSync", "readAsBase64", f.uid)) ? ("readAsDataURL" === callback && (dep = "data:" + (f.type || "") + ";base64," + dep), get(dep, callback, f.type)) : null;
      }
    };
    return exports.FileReaderSync = helper;
  });
  expect(set, [err, versions, values, result, args, entry, results], function(o, $, _, File, Decoder, Circle, dataAndEvents) {
    var lvl = {
      /**
       * @param {Object} data
       * @param {string} a
       * @return {undefined}
       */
      send : function(data, a) {
        /**
         * @return {undefined}
         */
        function send() {
          data.transport = props.mode;
          props.shimExec.call(uniqs, "XMLHttpRequest", "send", data, a);
        }
        /**
         * @param {?} time
         * @param {Object} item
         * @return {undefined}
         */
        function next(time, item) {
          props.shimExec.call(uniqs, "XMLHttpRequest", "appendBlob", time, item.uid);
          /** @type {null} */
          a = null;
          send();
        }
        /**
         * @param {Event} data
         * @param {Function} success
         * @return {undefined}
         */
        function callback(data, success) {
          var options = new dataAndEvents;
          options.bind("TransportingComplete", function() {
            success(this.result);
          });
          options.transport(data.getSource(), data.type, {
            ruid : props.uid
          });
        }
        var uniqs = this;
        var props = uniqs.getRuntime();
        if ($.isEmptyObj(data.headers) || $.each(data.headers, function(dstUri, capture) {
          props.shimExec.call(uniqs, "XMLHttpRequest", "setRequestHeader", capture, dstUri.toString());
        }), a instanceof Circle) {
          var name;
          if (a.each(function(a, list) {
            if (a instanceof _) {
              name = list;
            } else {
              props.shimExec.call(uniqs, "XMLHttpRequest", "append", list, a);
            }
          }), a.hasBlob()) {
            var file = a.getBlob();
            if (file.isDetached()) {
              callback(file, function(result) {
                file.destroy();
                next(name, result);
              });
            } else {
              next(name, file);
            }
          } else {
            /** @type {null} */
            a = null;
            send();
          }
        } else {
          if (a instanceof _) {
            if (a.isDetached()) {
              callback(a, function(data) {
                a.destroy();
                a = data.uid;
                send();
              });
            } else {
              a = a.uid;
              send();
            }
          } else {
            send();
          }
        }
      },
      /**
       * @param {string} propName
       * @return {?}
       */
      getResponse : function(propName) {
        var reader;
        var file;
        var f = this.getRuntime();
        if (file = f.shimExec.call(this, "XMLHttpRequest", "getResponseAsBlob")) {
          if (file = new File(f.uid, file), "blob" === propName) {
            return file;
          }
          try {
            if (reader = new Decoder, ~$.inArray(propName, ["", "text"])) {
              return reader.readAsText(file);
            }
            if ("json" === propName && window.JSON) {
              return JSON.parse(reader.readAsText(file));
            }
          } finally {
            file.destroy();
          }
        }
        return null;
      },
      /**
       * @param {?} message
       * @return {undefined}
       */
      abort : function(message) {
        var parent = this.getRuntime();
        parent.shimExec.call(this, "XMLHttpRequest", "abort");
        this.dispatchEvent("readystatechange");
        this.dispatchEvent("abort");
      }
    };
    return o.XMLHttpRequest = lvl;
  });
  expect(i, [err, values], function(eventHandle, RegExp) {
    var elem = {
      /**
       * @param {?} capture
       * @return {?}
       */
      getAsBlob : function(capture) {
        var item = this.getRuntime();
        var flags = item.shimExec.call(this, "Transporter", "getAsBlob", capture);
        return flags ? new RegExp(item.uid, flags) : null;
      }
    };
    return eventHandle.Transporter = elem;
  });
  expect(displayStyle, [err, versions, results, values, args], function(Canvas, deepDataAndEvents, dataAndEvents, RegExp, DataView) {
    var Image = {
      /**
       * @param {Event} event
       * @return {undefined}
       */
      loadFromBlob : function(event) {
        /**
         * @param {Object} args
         * @return {undefined}
         */
        function runLoggingCallbacks(args) {
          b.shimExec.call(g, "Image", "loadFromBlob", args.uid);
          /** @type {null} */
          g = b = null;
        }
        var g = this;
        var b = g.getRuntime();
        if (event.isDetached()) {
          var options = new dataAndEvents;
          options.bind("TransportingComplete", function() {
            runLoggingCallbacks(options.result.getSource());
          });
          options.transport(event.getSource(), event.type, {
            ruid : b.uid
          });
        } else {
          runLoggingCallbacks(event.getSource());
        }
      },
      /**
       * @param {Object} f
       * @return {?}
       */
      loadFromImage : function(f) {
        var parent = this.getRuntime();
        return parent.shimExec.call(this, "Image", "loadFromImage", f.uid);
      },
      /**
       * @param {?} capture
       * @param {?} opt_coordHeight
       * @return {?}
       */
      getAsBlob : function(capture, opt_coordHeight) {
        var item = this.getRuntime();
        var flags = item.shimExec.call(this, "Image", "getAsBlob", capture, opt_coordHeight);
        return flags ? new RegExp(item.uid, flags) : null;
      },
      /**
       * @return {?}
       */
      getAsDataURL : function() {
        var tile = this.getRuntime();
        var file = tile.Image.getAsBlob.apply(this, arguments);
        var reader;
        return file ? (reader = new DataView, reader.readAsDataURL(file)) : null;
      }
    };
    return Canvas.Image = Image;
  });
  expect(options, [versions, before, changes, input, newValue], function(lang, exports, output, dataAndEvents, dojo) {
    /**
     * @param {string} ok
     * @return {?}
     */
    function next(ok) {
      /** @type {boolean} */
      var rv = false;
      /** @type {null} */
      var parser = null;
      var fullName;
      var actualVerArray;
      var reqVerArray;
      var requiredVersionPart;
      var actualVersionPart;
      /** @type {number} */
      var index = 0;
      try {
        try {
          parser = new ActiveXObject("AgControl.AgControl");
          if (parser.IsVersionSupported(ok)) {
            /** @type {boolean} */
            rv = true;
          }
          /** @type {null} */
          parser = null;
        } catch (c) {
          var map = navigator.plugins["Silverlight Plug-In"];
          if (map) {
            fullName = map.description;
            if ("1.0.30226.2" === fullName) {
              /** @type {string} */
              fullName = "2.0.30226.2";
            }
            actualVerArray = fullName.split(".");
            for (;actualVerArray.length > 3;) {
              actualVerArray.pop();
            }
            for (;actualVerArray.length < 4;) {
              actualVerArray.push(0);
            }
            reqVerArray = ok.split(".");
            for (;reqVerArray.length > 4;) {
              reqVerArray.pop();
            }
            do {
              /** @type {number} */
              requiredVersionPart = parseInt(reqVerArray[index], 10);
              /** @type {number} */
              actualVersionPart = parseInt(actualVerArray[index], 10);
              index++;
            } while (index < reqVerArray.length && requiredVersionPart === actualVersionPart);
            if (actualVersionPart >= requiredVersionPart) {
              if (!isNaN(requiredVersionPart)) {
                /** @type {boolean} */
                rv = true;
              }
            }
          }
        }
      } catch (d) {
        /** @type {boolean} */
        rv = false;
      }
      return rv;
    }
    /**
     * @param {(Function|number)} params
     * @return {undefined}
     */
    function init(params) {
      var self = this;
      var tref;
      params = lang.extend({
        xap_url : exports.xap_url
      }, params);
      dojo.call(this, params, _this, {
        access_binary : dojo.capTrue,
        access_image_binary : dojo.capTrue,
        display_media : dojo.capTrue,
        do_cors : dojo.capTrue,
        drag_and_drop : false,
        report_upload_progress : dojo.capTrue,
        resize_image : dojo.capTrue,
        /**
         * @param {boolean} dataAndEvents
         * @return {?}
         */
        return_response_headers : function(dataAndEvents) {
          return dataAndEvents && "client" === self.mode;
        },
        /**
         * @param {string} dataAndEvents
         * @return {?}
         */
        return_response_type : function(dataAndEvents) {
          return "json" !== dataAndEvents ? true : !!window.JSON;
        },
        /**
         * @param {Object} exports
         * @return {?}
         */
        return_status_code : function(exports) {
          return "client" === self.mode || !lang.arrayDiff(exports, [200, 404]);
        },
        select_file : dojo.capTrue,
        select_multiple : dojo.capTrue,
        send_binary_string : dojo.capTrue,
        /**
         * @param {boolean} dataAndEvents
         * @return {?}
         */
        send_browser_cookies : function(dataAndEvents) {
          return dataAndEvents && "browser" === self.mode;
        },
        /**
         * @param {boolean} dataAndEvents
         * @return {?}
         */
        send_custom_headers : function(dataAndEvents) {
          return dataAndEvents && "client" === self.mode;
        },
        send_multipart : dojo.capTrue,
        slice_blob : dojo.capTrue,
        stream_upload : true,
        summon_file_dialog : false,
        upload_filesize : dojo.capTrue,
        /**
         * @param {Object} exports
         * @return {?}
         */
        use_http_method : function(exports) {
          return "client" === self.mode || !lang.arrayDiff(exports, ["GET", "POST"]);
        }
      }, {
        /**
         * @param {boolean} dataAndEvents
         * @return {?}
         */
        return_response_headers : function(dataAndEvents) {
          return dataAndEvents ? "client" : "browser";
        },
        /**
         * @param {Object} exports
         * @return {?}
         */
        return_status_code : function(exports) {
          return lang.arrayDiff(exports, [200, 404]) ? "client" : ["client", "browser"];
        },
        /**
         * @param {boolean} dataAndEvents
         * @return {?}
         */
        send_browser_cookies : function(dataAndEvents) {
          return dataAndEvents ? "browser" : "client";
        },
        /**
         * @param {boolean} dataAndEvents
         * @return {?}
         */
        send_custom_headers : function(dataAndEvents) {
          return dataAndEvents ? "client" : "browser";
        },
        /**
         * @param {Object} exports
         * @return {?}
         */
        use_http_method : function(exports) {
          return lang.arrayDiff(exports, ["GET", "POST"]) ? "client" : ["client", "browser"];
        }
      });
      if (!(next("2.0.31005.0") && "Opera" !== exports.browser)) {
        /** @type {boolean} */
        this.mode = false;
      }
      lang.extend(this, {
        /**
         * @return {?}
         */
        getShim : function() {
          return output.get(this.uid).content.Moxie;
        },
        /**
         * @param {?} opt_key
         * @param {?} until
         * @return {?}
         */
        shimExec : function(opt_key, until) {
          /** @type {Array.<?>} */
          var args = [].slice.call(arguments, 2);
          return self.getShim().exec(this.uid, opt_key, until, args);
        },
        /**
         * @return {undefined}
         */
        init : function() {
          var msgElm;
          msgElm = this.getShimContainer();
          /** @type {string} */
          msgElm.innerHTML = '<object id="' + this.uid + '" data="data:application/x-silverlight," type="application/x-silverlight-2" width="100%" height="100%" style="outline:none;"><param name="source" value="' + params.xap_url + '"/><param name="background" value="Transparent"/><param name="windowless" value="true"/><param name="enablehtmlaccess" value="true"/><param name="initParams" value="uid=' + this.uid + ",target=" + exports.global_event_dispatcher + '"/></object>';
          /** @type {number} */
          tref = setTimeout(function() {
            if (self) {
              if (!self.initialized) {
                self.trigger("Error", new dataAndEvents.RuntimeError(dataAndEvents.RuntimeError.NOT_INIT_ERR));
              }
            }
          }, "Windows" !== exports.OS ? 1E4 : 5E3);
        },
        destroy : function(promise) {
          return function() {
            promise.call(self);
            clearTimeout(tref);
            /** @type {null} */
            params = tref = promise = self = null;
          };
        }(this.destroy)
      }, override);
    }
    /** @type {string} */
    var _this = "silverlight";
    var override = {};
    return dojo.addConstructor(_this, init), override;
  });
  expect(gotError, [options, versions, element], function(global, _, protoProps) {
    return global.Blob = _.extend({}, protoProps);
  });
  expect(expected, [options], function(o) {
    var proto = {
      /**
       * @param {Object} depMaps
       * @return {undefined}
       */
      init : function(depMaps) {
        /**
         * @param {Array} rows
         * @return {?}
         */
        function render(rows) {
          /** @type {string} */
          var buffer = "";
          /** @type {number} */
          var i = 0;
          for (;i < rows.length;i++) {
            buffer += ("" !== buffer ? "|" : "") + rows[i].title + " | *." + rows[i].extensions.replace(/,/g, ";*.");
          }
          return buffer;
        }
        this.getRuntime().shimExec.call(this, "FileInput", "init", render(depMaps.accept), depMaps.name, depMaps.multiple);
        this.trigger("ready");
      }
    };
    return o.FileInput = proto;
  });
  expect(normalized, [options, changes, clone], function(exports, res, self) {
    var Users = {
      /**
       * @return {?}
       */
      init : function() {
        var item = this;
        var s = item.getRuntime();
        var c;
        return c = s.getShimContainer(), self.addEvent(c, "dragover", function(event) {
          event.preventDefault();
          event.stopPropagation();
          /** @type {string} */
          event.dataTransfer.dropEffect = "copy";
        }, item.uid), self.addEvent(c, "dragenter", function(e) {
          e.preventDefault();
          var coord = res.get(s.uid).dragEnter(e);
          if (coord) {
            e.stopPropagation();
          }
        }, item.uid), self.addEvent(c, "drop", function(event) {
          event.preventDefault();
          var events = res.get(s.uid).dragDrop(event);
          if (events) {
            event.stopPropagation();
          }
        }, item.uid), s.shimExec.call(this, "FileDrop", "init");
      }
    };
    return exports.FileDrop = Users;
  });
  expect(flattened, [options, versions, n], function($window, _, protoProps) {
    return $window.FileReader = _.extend({}, protoProps);
  });
  expect(fromIndex, [options, versions, value], function(dataAndEvents, _, protoProps) {
    return dataAndEvents.FileReaderSync = _.extend({}, protoProps);
  });
  expect(sortFn, [options, versions, set], function(xmlhttprequest, _, protoProps) {
    return xmlhttprequest.XMLHttpRequest = _.extend({}, protoProps);
  });
  expect(fired, [options, versions, i], function(dataAndEvents, _, protoProps) {
    return dataAndEvents.Transporter = _.extend({}, protoProps);
  });
  expect(ret, [options, versions, displayStyle], function($window, jQuery, descriptor) {
    return $window.Image = jQuery.extend({}, descriptor, {
      /**
       * @return {?}
       */
      getInfo : function() {
        var parent = this.getRuntime();
        /** @type {Array} */
        var which = ["tiff", "exif", "gps"];
        var info = {
          meta : {}
        };
        var file = parent.shimExec.call(this, "Image", "getInfo");
        return file.meta && jQuery.each(which, function(name) {
          var config = file.meta[name];
          var i;
          var key;
          var valsLength;
          var prop;
          if (config && config.keys) {
            info.meta[name] = {};
            /** @type {number} */
            key = 0;
            valsLength = config.keys.length;
            for (;valsLength > key;key++) {
              i = config.keys[key];
              prop = config[i];
              if (prop) {
                if (/^(\d|[1-9]\d+)$/.test(prop)) {
                  /** @type {number} */
                  prop = parseInt(prop, 10);
                } else {
                  if (/^\d*\.\d+$/.test(prop)) {
                    /** @type {number} */
                    prop = parseFloat(prop);
                  }
                }
                info.meta[name][i] = prop;
              }
            }
          }
        }), info.width = parseInt(file.width, 10), info.height = parseInt(file.height, 10), info.size = parseInt(file.size, 10), info.type = file.type, info.name = file.name, info;
      }
    });
  });
  expect(listeners, [versions, input, newValue, before], function($, dataAndEvents, proceed, obj) {
    /**
     * @param {?} options
     * @return {undefined}
     */
    function init(options) {
      var elem = this;
      var valueAccessor = proceed.capTest;
      var capTrue = proceed.capTrue;
      proceed.call(this, options, computed, {
        access_binary : valueAccessor(window.FileReader || window.File && File.getAsDataURL),
        access_image_binary : false,
        display_media : valueAccessor(_this.Image && (obj.can("create_canvas") || obj.can("use_data_uri_over32kb"))),
        do_cors : false,
        drag_and_drop : false,
        filter_by_extension : valueAccessor(function() {
          return "Chrome" === obj.browser && obj.version >= 28 || "IE" === obj.browser && obj.version >= 10;
        }()),
        /**
         * @return {?}
         */
        resize_image : function() {
          return _this.Image && (elem.can("access_binary") && obj.can("create_canvas"));
        },
        report_upload_progress : false,
        return_response_headers : false,
        /**
         * @param {string} propName
         * @return {?}
         */
        return_response_type : function(propName) {
          return "json" === propName && window.JSON ? true : !!~$.inArray(propName, ["text", "document", ""]);
        },
        /**
         * @param {Object} defs
         * @return {?}
         */
        return_status_code : function(defs) {
          return!$.arrayDiff(defs, [200, 404]);
        },
        /**
         * @return {?}
         */
        select_file : function() {
          return obj.can("use_fileinput");
        },
        select_multiple : false,
        send_binary_string : false,
        send_custom_headers : false,
        send_multipart : true,
        slice_blob : false,
        /**
         * @return {?}
         */
        stream_upload : function() {
          return elem.can("select_file");
        },
        summon_file_dialog : valueAccessor(function() {
          return "Firefox" === obj.browser && obj.version >= 4 || ("Opera" === obj.browser && obj.version >= 12 || !!~$.inArray(obj.browser, ["Chrome", "Safari"]));
        }()),
        upload_filesize : capTrue,
        /**
         * @param {Object} defs
         * @return {?}
         */
        use_http_method : function(defs) {
          return!$.arrayDiff(defs, ["GET", "POST"]);
        }
      });
      $.extend(this, {
        /**
         * @return {undefined}
         */
        init : function() {
          this.trigger("Init");
        },
        destroy : function(tmp) {
          return function() {
            tmp.call(elem);
            /** @type {null} */
            tmp = elem = null;
          };
        }(this.destroy)
      });
      $.extend(this.getShim(), _this);
    }
    /** @type {string} */
    var computed = "html4";
    var _this = {};
    return proceed.addConstructor(computed, init), _this;
  });
  expect(index, [listeners, versions, changes, clone, iter, before], function(ajaxOptions, $, self, utils, Selector, b) {
    /**
     * @return {undefined}
     */
    function create() {
      /**
       * @return {undefined}
       */
      function init() {
        var obj = this;
        var me = obj.getRuntime();
        var node;
        var c;
        var element;
        var form;
        var input;
        var i;
        i = $.guid("uid_");
        node = me.getShimContainer();
        if (key) {
          element = self.get(key + "_form");
          if (element) {
            $.extend(element.style, {
              top : "100%"
            });
          }
        }
        /** @type {Element} */
        form = document.createElement("form");
        form.setAttribute("id", i + "_form");
        form.setAttribute("method", "post");
        form.setAttribute("enctype", "multipart/form-data");
        form.setAttribute("encoding", "multipart/form-data");
        $.extend(form.style, {
          overflow : "hidden",
          position : "absolute",
          top : 0,
          left : 0,
          width : "100%",
          height : "100%"
        });
        /** @type {Element} */
        input = document.createElement("input");
        input.setAttribute("id", i);
        input.setAttribute("type", "file");
        input.setAttribute("name", p.name || "Filedata");
        input.setAttribute("accept", r.join(","));
        $.extend(input.style, {
          fontSize : "999px",
          opacity : 0
        });
        form.appendChild(input);
        node.appendChild(form);
        $.extend(input.style, {
          position : "absolute",
          top : 0,
          left : 0,
          width : "100%",
          height : "100%"
        });
        if ("IE" === b.browser) {
          if (b.version < 10) {
            $.extend(input.style, {
              filter : "progid:DXImageTransform.Microsoft.Alpha(opacity=0)"
            });
          }
        }
        /**
         * @return {undefined}
         */
        input.onchange = function() {
          var b;
          if (this.value) {
            b = this.files ? this.files[0] : {
              name : this.value
            };
            /** @type {Array} */
            ret = [b];
            /**
             * @return {undefined}
             */
            this.onchange = function() {
            };
            init.call(obj);
            obj.bind("change", function update() {
              var item = self.get(i);
              var form = self.get(i + "_form");
              var config;
              obj.unbind("change", update);
              if (obj.files.length) {
                if (item) {
                  if (form) {
                    config = obj.files[0];
                    item.setAttribute("id", config.uid);
                    form.setAttribute("id", config.uid + "_form");
                    form.setAttribute("target", config.uid + "_iframe");
                  }
                }
              }
              /** @type {null} */
              item = form = null;
            }, 998);
            /** @type {null} */
            input = form = null;
            obj.trigger("change");
          }
        };
        if (me.can("summon_file_dialog")) {
          c = self.get(p.browse_button);
          utils.removeEvent(c, "click", obj.uid);
          utils.addEvent(c, "click", function(types) {
            if (input) {
              if (!input.disabled) {
                input.click();
              }
            }
            types.preventDefault();
          }, obj.uid);
        }
        key = i;
        /** @type {null} */
        node = element = c = null;
      }
      var key;
      /** @type {Array} */
      var ret = [];
      /** @type {Array} */
      var r = [];
      var p;
      $.extend(this, {
        /**
         * @param {Object} depMaps
         * @return {undefined}
         */
        init : function(depMaps) {
          var _this = this;
          var me = _this.getRuntime();
          var bar;
          /** @type {Object} */
          p = depMaps;
          r = depMaps.accept.mimes || Selector.extList2mimes(depMaps.accept, me.can("filter_by_extension"));
          bar = me.getShimContainer();
          (function() {
            var parent;
            var newIndex;
            var form;
            parent = self.get(depMaps.browse_button);
            if (me.can("summon_file_dialog")) {
              if ("static" === self.getStyle(parent, "position")) {
                /** @type {string} */
                parent.style.position = "relative";
              }
              /** @type {number} */
              newIndex = parseInt(self.getStyle(parent, "z-index"), 10) || 1;
              /** @type {number} */
              parent.style.zIndex = newIndex;
              /** @type {number} */
              bar.style.zIndex = newIndex - 1;
            }
            form = me.can("summon_file_dialog") ? parent : bar;
            utils.addEvent(form, "mouseover", function() {
              _this.trigger("mouseenter");
            }, _this.uid);
            utils.addEvent(form, "mouseout", function() {
              _this.trigger("mouseleave");
            }, _this.uid);
            utils.addEvent(form, "mousedown", function() {
              _this.trigger("mousedown");
            }, _this.uid);
            utils.addEvent(self.get(depMaps.container), "mouseup", function() {
              _this.trigger("mouseup");
            }, _this.uid);
            /** @type {null} */
            parent = null;
          })();
          init.call(this);
          /** @type {null} */
          bar = null;
          _this.trigger({
            type : "ready",
            async : true
          });
        },
        /**
         * @return {?}
         */
        getFiles : function() {
          return ret;
        },
        /**
         * @param {boolean} keepData
         * @return {undefined}
         */
        disable : function(keepData) {
          var field;
          if (field = self.get(key)) {
            /** @type {boolean} */
            field.disabled = !!keepData;
          }
        },
        /**
         * @return {undefined}
         */
        destroy : function() {
          var getRuntime = this.getRuntime();
          var dateElem = getRuntime.getShim();
          var form = getRuntime.getShimContainer();
          utils.removeAllEvents(form, this.uid);
          utils.removeAllEvents(p && self.get(p.container), this.uid);
          utils.removeAllEvents(p && self.get(p.browse_button), this.uid);
          if (form) {
            /** @type {string} */
            form.innerHTML = "";
          }
          dateElem.removeInstance(this.uid);
          /** @type {null} */
          key = ret = r = p = form = dateElem = null;
        }
      });
    }
    return ajaxOptions.FileInput = create;
  });
  expect(patterns, [listeners, scale], function($window, pageYOffsetAfterScroll) {
    return $window.FileReader = pageYOffsetAfterScroll;
  });
  expect(arr, [listeners, versions, changes, files, input, clone, values, entry], function(exports, $, $templateCache, rquery, global, _, type, HTMLElement) {
    /**
     * @return {undefined}
     */
    function Request() {
      /**
       * @param {?} done
       * @return {undefined}
       */
      function init(done) {
        var data = this;
        var id;
        var tb;
        var ret;
        var idx;
        /** @type {boolean} */
        var u = false;
        if (iframe) {
          if (id = iframe.id.replace(/_iframe$/, ""), tb = $templateCache.get(id + "_form")) {
            ret = tb.getElementsByTagName("input");
            idx = ret.length;
            for (;idx--;) {
              switch(ret[idx].getAttribute("type")) {
                case "hidden":
                  ret[idx].parentNode.removeChild(ret[idx]);
                  break;
                case "file":
                  /** @type {boolean} */
                  u = true;
              }
            }
            /** @type {Array} */
            ret = [];
            if (!u) {
              tb.parentNode.removeChild(tb);
            }
            /** @type {null} */
            tb = null;
          }
          setTimeout(function() {
            _.removeEvent(iframe, "load", data.uid);
            if (iframe.parentNode) {
              iframe.parentNode.removeChild(iframe);
            }
            var t = data.getRuntime().getShimContainer();
            if (!t.children.length) {
              t.parentNode.removeChild(t);
            }
            /** @type {null} */
            t = iframe = null;
            done();
          }, 1);
        }
      }
      var tagname;
      var result;
      var iframe;
      $.extend(this, {
        /**
         * @param {Object} s
         * @param {(Array|string)} object
         * @return {undefined}
         */
        send : function(s, object) {
          /**
           * @return {undefined}
           */
          function load() {
            var parent = getShimContainer.getShimContainer() || document.body;
            /** @type {Element} */
            var temp = document.createElement("div");
            /** @type {string} */
            temp.innerHTML = '<iframe id="' + value + '_iframe" name="' + value + '_iframe" src="javascript:&quot;&quot;" style="display:none"></iframe>';
            /** @type {(Node|null)} */
            iframe = temp.firstChild;
            parent.appendChild(iframe);
            _.addEvent(iframe, "load", function() {
              var win;
              try {
                win = iframe.contentWindow.document || (iframe.contentDocument || window.frames[iframe.id].document);
                if (/^4(0[0-9]|1[0-7]|2[2346])\s/.test(win.title)) {
                  tagname = win.title.replace(/^(\d+).*$/, "$1");
                } else {
                  /** @type {number} */
                  tagname = 200;
                  result = $.trim(win.body.innerHTML);
                  self.trigger({
                    type : "progress",
                    loaded : result.length,
                    total : result.length
                  });
                  if (header) {
                    self.trigger({
                      type : "uploadprogress",
                      loaded : header.size || 1025,
                      total : header.size || 1025
                    });
                  }
                }
              } catch (r) {
                if (!rquery.hasSameOrigin(s.url)) {
                  return void init.call(self, function() {
                    self.trigger("error");
                  });
                }
                /** @type {number} */
                tagname = 404;
              }
              init.call(self, function() {
                self.trigger("load");
              });
            }, self.uid);
          }
          var self = this;
          var getShimContainer = self.getRuntime();
          var value;
          var form;
          var target;
          var header;
          if (tagname = result = null, object instanceof HTMLElement && object.hasBlob()) {
            if (header = object.getBlob(), value = header.uid, target = $templateCache.get(value), form = $templateCache.get(value + "_form"), !form) {
              throw new global.DOMException(global.DOMException.NOT_FOUND_ERR);
            }
          } else {
            value = $.guid("uid_");
            /** @type {Element} */
            form = document.createElement("form");
            form.setAttribute("id", value + "_form");
            form.setAttribute("method", s.method);
            form.setAttribute("enctype", "multipart/form-data");
            form.setAttribute("encoding", "multipart/form-data");
            form.setAttribute("target", value + "_iframe");
            getShimContainer.getShimContainer().appendChild(form);
          }
          if (object instanceof HTMLElement) {
            object.each(function(value, filename) {
              if (value instanceof type) {
                if (target) {
                  target.setAttribute("name", filename);
                }
              } else {
                /** @type {Element} */
                var output = document.createElement("input");
                $.extend(output, {
                  type : "hidden",
                  name : filename,
                  value : value
                });
                if (target) {
                  form.insertBefore(output, target);
                } else {
                  form.appendChild(output);
                }
              }
            });
          }
          form.setAttribute("action", s.url);
          load();
          form.submit();
          self.trigger("loadstart");
        },
        /**
         * @return {?}
         */
        getStatus : function() {
          return tagname;
        },
        /**
         * @param {string} req
         * @return {?}
         */
        getResponse : function(req) {
          if ("json" === req && ("string" === $.typeOf(result) && window.JSON)) {
            try {
              return JSON.parse(result.replace(/^\s*<pre[^>]*>/, "").replace(/<\/pre>\s*$/, ""));
            } catch (n) {
              return null;
            }
          }
          return result;
        },
        /**
         * @return {undefined}
         */
        abort : function() {
          var element = this;
          if (iframe) {
            if (iframe.contentWindow) {
              if (iframe.contentWindow.stop) {
                iframe.contentWindow.stop();
              } else {
                if (iframe.contentWindow.document.execCommand) {
                  iframe.contentWindow.document.execCommand("Stop");
                } else {
                  /** @type {string} */
                  iframe.src = "about:blank";
                }
              }
            }
          }
          init.call(this, function() {
            element.dispatchEvent("abort");
          });
        }
      });
    }
    return exports.XMLHttpRequest = Request;
  });
  expect(arrays, [listeners, body], function(Canvas, Image) {
    return Canvas.Image = Image;
  });
  makeKeywords([versions, elems, iter, before, changes, input, selector, target, newValue, checkSet, values, result, progressValues, array, ids, gotData, files, args, entry, method, results, reversed, clone]);
}(this);
console.log('this.mOxie', this.mOxie);
(function(t) {
  var o = {};
  var func = t.moxie.core.utils.Basic.inArray;
  return function visit(obj) {
    var name;
    var s;
    for (name in obj) {
      /** @type {string} */
      s = typeof obj[name];
      if (s === "object" && !~func(name, ["Exceptions", "Env", "Mime"])) {
        visit(obj[name]);
      } else {
        if (s === "function") {
          o[name] = obj[name];
        }
      }
    }
  }(t.moxie), o.Env = t.moxie.core.utils.Env, o.Mime = t.moxie.core.utils.Mime, o.Exceptions = t.moxie.core.Exceptions, t.mOxie = o, t.o || (t.o = o), o;
})(this);
(function(w, $, undef) {
  /**
   * @param {Object} settings
   * @return {?}
   */
  function normalizeCaps(settings) {
    /**
     * @param {?} feature
     * @param {boolean} dataAndEvents
     * @param {boolean} deepDataAndEvents
     * @return {undefined}
     */
    function resolve(feature, dataAndEvents, deepDataAndEvents) {
      var map = {
        chunks : "slice_blob",
        jpgresize : "send_binary_string",
        pngresize : "send_binary_string",
        progress : "report_upload_progress",
        multi_selection : "select_multiple",
        dragdrop : "drag_and_drop",
        drop_element : "drag_and_drop",
        headers : "send_custom_headers",
        urlstream_upload : "send_binary_string",
        canSendBinary : "send_binary",
        triggerDialog : "summon_file_dialog"
      };
      if (map[feature]) {
        /** @type {boolean} */
        caps[map[feature]] = dataAndEvents;
      } else {
        if (!deepDataAndEvents) {
          /** @type {boolean} */
          caps[feature] = dataAndEvents;
        }
      }
    }
    var which = settings.required_features;
    var caps = {};
    if (typeof which == "string") {
      plupload.each(which.split(/\s*,\s*/), function(feature) {
        resolve(feature, true);
      });
    } else {
      if (typeof which == "object") {
        plupload.each(which, function(dataAndEvents, feature) {
          resolve(feature, dataAndEvents);
        });
      } else {
        if (which === true) {
          if (settings.chunk_size > 0) {
            /** @type {boolean} */
            caps.slice_blob = true;
          }
          if (settings.resize.enabled || !settings.multipart) {
            /** @type {boolean} */
            caps.send_binary_string = true;
          }
          plupload.each(settings, function(dataAndEvents, feature) {
            resolve(feature, !!dataAndEvents, true);
          });
        }
      }
    }
    return caps;
  }
  /** @type {function (this:Window, (Function|null|string), number, ...[*]): number} */
  var delay = w.setTimeout;
  var handlers = {};
  var plupload = {
    VERSION : "2.1.2",
    STOPPED : 1,
    STARTED : 2,
    QUEUED : 1,
    UPLOADING : 2,
    FAILED : 4,
    DONE : 5,
    GENERIC_ERROR : -100,
    HTTP_ERROR : -200,
    IO_ERROR : -300,
    SECURITY_ERROR : -400,
    INIT_ERROR : -500,
    FILE_SIZE_ERROR : -600,
    FILE_EXTENSION_ERROR : -601,
    FILE_DUPLICATE_ERROR : -602,
    IMAGE_FORMAT_ERROR : -700,
    MEMORY_ERROR : -701,
    IMAGE_DIMENSIONS_ERROR : -702,
    mimeTypes : $.mimes,
    ua : $.ua,
    typeOf : $.typeOf,
    extend : $.extend,
    guid : $.guid,
    /**
     * @param {?} target
     * @return {?}
     */
    get : function(target) {
      /** @type {Array} */
      var errors = [];
      var e;
      if ($.typeOf(target) !== "array") {
        /** @type {Array} */
        target = [target];
      }
      var j = target.length;
      for (;j--;) {
        e = $.get(target[j]);
        if (e) {
          errors.push(e);
        }
      }
      return errors.length ? errors : null;
    },
    each : $.each,
    getPos : $.getPos,
    getSize : $.getSize,
    /**
     * @param {?} s
     * @return {?}
     */
    xmlEncode : function(s) {
      var xmlEncodeChars = {
        "<" : "lt",
        ">" : "gt",
        "&" : "amp",
        '"' : "quot",
        "'" : "#39"
      };
      /** @type {RegExp} */
      var r20 = /[<>&\"\']/g;
      return s ? ("" + s).replace(r20, function(chr) {
        return xmlEncodeChars[chr] ? "&" + xmlEncodeChars[chr] + ";" : chr;
      }) : s;
    },
    toArray : $.toArray,
    inArray : $.inArray,
    addI18n : $.addI18n,
    translate : $.translate,
    isEmptyObj : $.isEmptyObj,
    hasClass : $.hasClass,
    addClass : $.addClass,
    removeClass : $.removeClass,
    getStyle : $.getStyle,
    addEvent : $.addEvent,
    removeEvent : $.removeEvent,
    removeAllEvents : $.removeAllEvents,
    /**
     * @param {string} name
     * @return {?}
     */
    cleanName : function(name) {
      var i;
      var lookup;
      /** @type {Array} */
      lookup = [/[\300-\306]/g, "A", /[\340-\346]/g, "a", /\307/g, "C", /\347/g, "c", /[\310-\313]/g, "E", /[\350-\353]/g, "e", /[\314-\317]/g, "I", /[\354-\357]/g, "i", /\321/g, "N", /\361/g, "n", /[\322-\330]/g, "O", /[\362-\370]/g, "o", /[\331-\334]/g, "U", /[\371-\374]/g, "u"];
      /** @type {number} */
      i = 0;
      for (;i < lookup.length;i += 2) {
        name = name.replace(lookup[i], lookup[i + 1]);
      }
      return name = name.replace(/\s+/g, "_"), name = name.replace(/[^a-z0-9_\-\.]+/gi, ""), name;
    },
    /**
     * @param {string} uri
     * @param {Object} which
     * @return {?}
     */
    buildUrl : function(uri, which) {
      /** @type {string} */
      var query = "";
      return plupload.each(which, function(sectionName, name) {
        query += (query ? "&" : "") + encodeURIComponent(name) + "=" + encodeURIComponent(sectionName);
      }), query && (uri += (uri.indexOf("?") > 0 ? "&" : "?") + query), uri;
    },
    /**
     * @param {number} size
     * @return {?}
     */
    formatSize : function(size) {
      /**
       * @param {number} num
       * @param {number} dec
       * @return {?}
       */
      function round(num, dec) {
        return Math.round(num * Math.pow(10, dec)) / Math.pow(10, dec);
      }
      if (size === undef || /\D/.test(size)) {
        return plupload.translate("N/A");
      }
      /** @type {number} */
      var pixelRatio = Math.pow(1024, 4);
      return size > pixelRatio ? round(size / pixelRatio, 1) + " " + plupload.translate("tb") : size > (pixelRatio /= 1024) ? round(size / pixelRatio, 1) + " " + plupload.translate("gb") : size > (pixelRatio /= 1024) ? round(size / pixelRatio, 1) + " " + plupload.translate("mb") : size > 1024 ? Math.round(size / 1024) + " " + plupload.translate("kb") : size + " " + plupload.translate("b");
    },
    parseSize : $.parseSizeStr,
    /**
     * @param {Object} config
     * @param {string} runtimes
     * @return {?}
     */
    predictRuntime : function(config, runtimes) {
      var up;
      var i;
      return up = new plupload.Uploader(config), i = $.Runtime.thatCan(up.getOption().required_features, runtimes || config.runtimes), up.destroy(), i;
    },
    /**
     * @param {string} name
     * @param {Function} cb
     * @return {undefined}
     */
    addFileFilter : function(name, cb) {
      /** @type {Function} */
      handlers[name] = cb;
    }
  };
  plupload.addFileFilter("mime_types", function(filters, file, $sanitize) {
    if (filters.length && !filters.regexp.test(file.name)) {
      this.trigger("Error", {
        code : plupload.FILE_EXTENSION_ERROR,
        message : plupload.translate("File extension error."),
        file : file
      });
      $sanitize(false);
    } else {
      $sanitize(true);
    }
  });
  plupload.addFileFilter("max_file_size", function(maxSize, file, $sanitize) {
    var undef;
    maxSize = plupload.parseSize(maxSize);
    if (file.size !== undef && (maxSize && file.size > maxSize)) {
      this.trigger("Error", {
        code : plupload.FILE_SIZE_ERROR,
        message : plupload.translate("File size error."),
        file : file
      });
      $sanitize(false);
    } else {
      $sanitize(true);
    }
  });
  plupload.addFileFilter("prevent_duplicates", function(dataAndEvents, file, $sanitize) {
    if (dataAndEvents) {
      var ii = this.files.length;
      for (;ii--;) {
        if (file.name === this.files[ii].name && file.size === this.files[ii].size) {
          this.trigger("Error", {
            code : plupload.FILE_DUPLICATE_ERROR,
            message : plupload.translate("Duplicate file error."),
            file : file
          });
          $sanitize(false);
          return;
        }
      }
    }
    $sanitize(true);
  });
  /**
   * @param {?} options
   * @return {undefined}
   */
  plupload.Uploader = function(options) {
    /**
     * @return {undefined}
     */
    function uploadNext() {
      var file;
      /** @type {number} */
      var files_done = 0;
      var i;
      if (this.state == plupload.STARTED) {
        /** @type {number} */
        i = 0;
        for (;i < files.length;i++) {
          if (!file && files[i].status == plupload.QUEUED) {
            file = files[i];
            if (this.trigger("BeforeUpload", file)) {
              /** @type {number} */
              file.status = plupload.UPLOADING;
              this.trigger("UploadFile", file);
            }
          } else {
            files_done++;
          }
        }
        if (files_done == files.length) {
          if (this.state !== plupload.STOPPED) {
            /** @type {number} */
            this.state = plupload.STOPPED;
            this.trigger("StateChanged");
          }
          this.trigger("UploadComplete", files);
        }
      }
    }
    /**
     * @param {Object} file
     * @return {undefined}
     */
    function calcFile(file) {
      /** @type {number} */
      file.percent = file.size > 0 ? Math.ceil(file.loaded / file.size * 100) : 100;
      calc();
    }
    /**
     * @return {undefined}
     */
    function calc() {
      var f;
      var file;
      total.reset();
      /** @type {number} */
      f = 0;
      for (;f < files.length;f++) {
        file = files[f];
        if (file.size !== undef) {
          total.size += file.origSize;
          total.loaded += file.loaded * file.origSize / file.size;
        } else {
          /** @type {number} */
          total.size = undef;
        }
        if (file.status == plupload.DONE) {
          total.uploaded++;
        } else {
          if (file.status == plupload.FAILED) {
            total.failed++;
          } else {
            total.queued++;
          }
        }
      }
      if (total.size === undef) {
        /** @type {number} */
        total.percent = files.length > 0 ? Math.ceil(total.uploaded / files.length * 100) : 0;
      } else {
        /** @type {number} */
        total.bytesPerSec = Math.ceil(total.loaded / ((+new Date - startTime || 1) / 1E3));
        /** @type {number} */
        total.percent = total.size > 0 ? Math.ceil(total.loaded / total.size * 100) : 0;
      }
    }
    /**
     * @return {?}
     */
    function getRUID() {
      var options = scripts[0] || which[0];
      return options ? options.getRuntime().uid : false;
    }
    /**
     * @param {Array} file
     * @param {string} cap
     * @return {?}
     */
    function runtimeCan(file, cap) {
      if (file.ruid) {
        var info = $.Runtime.getInfo(file.ruid);
        if (info) {
          return info.can(cap);
        }
      }
      return false;
    }
    /**
     * @return {undefined}
     */
    function bindEventListeners() {
      this.bind("FilesAdded FilesRemoved", function(up) {
        up.trigger("QueueChanged");
        up.refresh();
      });
      this.bind("CancelUpload", onCancelUpload);
      this.bind("BeforeUpload", onBeforeUpload);
      this.bind("UploadFile", onUploadFile);
      this.bind("UploadProgress", onUploadProgress);
      this.bind("StateChanged", onStateChanged);
      this.bind("QueueChanged", calc);
      this.bind("Error", onError);
      this.bind("FileUploaded", onFileUploaded);
      this.bind("Destroy", onDestroy);
    }
    /**
     * @param {Object} settings
     * @param {?} cb
     * @return {undefined}
     */
    function initControls(settings, cb) {
      var self = this;
      /** @type {number} */
      var er = 0;
      /** @type {Array} */
      var QUnit = [];
      var options = {
        runtime_order : settings.runtimes,
        required_caps : settings.required_features,
        preferred_caps : preferred_caps,
        swf_url : settings.flash_swf_url,
        xap_url : settings.silverlight_xap_url
      };
      plupload.each(settings.runtimes.split(/\s*,\s*/), function(runtime) {
        if (settings[runtime]) {
          options[runtime] = settings[runtime];
        }
      });
      if (settings.browse_button) {
        plupload.each(settings.browse_button, function(el) {
          QUnit.push(function(cb) {
            var self = new $.FileInput(plupload.extend({}, options, {
              accept : settings.filters.mime_types,
              name : settings.file_data_name,
              multiple : settings.multi_selection,
              container : settings.container,
              browse_button : el
            }));
            /**
             * @return {undefined}
             */
            self.onready = function() {
              var info = $.Runtime.getInfo(this.ruid);
              $.extend(self.features, {
                chunks : info.can("slice_blob"),
                multipart : info.can("send_multipart"),
                multi_selection : info.can("select_multiple")
              });
              er++;
              scripts.push(this);
              cb();
            };
            /**
             * @return {undefined}
             */
            self.onchange = function() {
              self.addFile(this.files);
            };
            self.bind("mouseenter mouseleave mousedown mouseup", function(e) {
              if (!key) {
                if (settings.browse_button_hover) {
                  if ("mouseenter" === e.type) {
                    $.addClass(el, settings.browse_button_hover);
                  } else {
                    if ("mouseleave" === e.type) {
                      $.removeClass(el, settings.browse_button_hover);
                    }
                  }
                }
                if (settings.browse_button_active) {
                  if ("mousedown" === e.type) {
                    $.addClass(el, settings.browse_button_active);
                  } else {
                    if ("mouseup" === e.type) {
                      $.removeClass(el, settings.browse_button_active);
                    }
                  }
                }
              }
            });
            self.bind("mousedown", function() {
              self.trigger("Browse");
            });
            self.bind("error runtimeerror", function() {
              /** @type {null} */
              self = null;
              cb();
            });
            self.init();
          });
        });
      }
      if (settings.drop_element) {
        plupload.each(settings.drop_element, function(el) {
          QUnit.push(function(cb) {
            var fileDrop = new $.FileDrop(plupload.extend({}, options, {
              /** @type {Function} */
              drop_zone : el
            }));
            /**
             * @return {undefined}
             */
            fileDrop.onready = function() {
              var info = $.Runtime.getInfo(this.ruid);
              self.features.dragdrop = info.can("drag_and_drop");
              er++;
              which.push(this);
              cb();
            };
            /**
             * @return {undefined}
             */
            fileDrop.ondrop = function() {
              self.addFile(this.files);
            };
            fileDrop.bind("error runtimeerror", function() {
              /** @type {null} */
              fileDrop = null;
              cb();
            });
            fileDrop.init();
          });
        });
      }
      $.inSeries(QUnit, function() {
        if (typeof cb == "function") {
          cb(er);
        }
      });
    }
    /**
     * @param {Event} blob
     * @param {Object} params
     * @param {?} cb
     * @return {undefined}
     */
    function resizeImage(blob, params, cb) {
      var img = new $.Image;
      try {
        /**
         * @return {?}
         */
        img.onload = function() {
          if (params.width > this.width && (params.height > this.height && (params.quality === undef && (params.preserve_headers && !params.crop)))) {
            return this.destroy(), cb(blob);
          }
          img.downsize(params.width, params.height, params.crop, params.preserve_headers);
        };
        /**
         * @return {undefined}
         */
        img.onresize = function() {
          cb(this.getAsBlob(blob.type, params.quality));
          this.destroy();
        };
        /**
         * @return {undefined}
         */
        img.onerror = function() {
          cb(blob);
        };
        img.load(blob);
      } catch (o) {
        cb(blob);
      }
    }
    /**
     * @param {Object} option
     * @param {?} value
     * @param {?} init
     * @return {undefined}
     */
    function setOption(option, value, init) {
      /**
       * @param {Object} option
       * @param {?} value
       * @param {?} init
       * @return {undefined}
       */
      function _setOption(option, value, init) {
        var oldValue = settings[option];
        switch(option) {
          case "max_file_size":
            if (option === "max_file_size") {
              settings.max_file_size = settings.filters.max_file_size = value;
            }
            break;
          case "chunk_size":
            if (value = plupload.parseSize(value)) {
              settings[option] = value;
              /** @type {boolean} */
              settings.send_file_name = true;
            }
            break;
          case "multipart":
            settings[option] = value;
            if (!value) {
              /** @type {boolean} */
              settings.send_file_name = true;
            }
            break;
          case "unique_names":
            settings[option] = value;
            if (value) {
              /** @type {boolean} */
              settings.send_file_name = true;
            }
            break;
          case "filters":
            if (plupload.typeOf(value) === "array") {
              value = {
                mime_types : value
              };
            }
            if (init) {
              plupload.extend(settings.filters, value);
            } else {
              settings.filters = value;
            }
            if (value.mime_types) {
              settings.filters.mime_types.regexp = function(which) {
                /** @type {Array} */
                var tagNameArr = [];
                return plupload.each(which, function(m) {
                  plupload.each(m.extensions.split(/,/), function(tmpl) {
                    if (/^\s*\*\s*$/.test(tmpl)) {
                      tagNameArr.push("\\.*");
                    } else {
                      tagNameArr.push("\\." + tmpl.replace(new RegExp("[" + "/^$.*+?|()[]{}\\".replace(/./g, "\\$&") + "]", "g"), "\\$&"));
                    }
                  });
                }), new RegExp("(" + tagNameArr.join("|") + ")$", "i");
              }(settings.filters.mime_types);
            }
            break;
          case "resize":
            if (init) {
              plupload.extend(settings.resize, value, {
                enabled : true
              });
            } else {
              settings.resize = value;
            }
            break;
          case "prevent_duplicates":
            /** @type {boolean} */
            settings.prevent_duplicates = settings.filters.prevent_duplicates = !!value;
            break;
          case "browse_button":
          ;
          case "drop_element":
            value = plupload.get(value);
          case "container":
          ;
          case "runtimes":
          ;
          case "multi_selection":
          ;
          case "flash_swf_url":
          ;
          case "silverlight_xap_url":
            settings[option] = value;
            if (!init) {
              /** @type {boolean} */
              u = true;
            }
            break;
          default:
            settings[option] = value;
        }
        if (!init) {
          self.trigger("OptionChanged", option, value, oldValue);
        }
      }
      var self = this;
      /** @type {boolean} */
      var u = false;
      if (typeof option == "object") {
        plupload.each(option, function(isXML, option) {
          _setOption(option, isXML, init);
        });
      } else {
        _setOption(option, value, init);
      }
      if (init) {
        settings.required_features = normalizeCaps(plupload.extend({}, settings));
        preferred_caps = normalizeCaps(plupload.extend({}, settings, {
          required_features : true
        }));
      } else {
        if (u) {
          self.trigger("Destroy");
          initControls.call(self, settings, function(dataAndEvents) {
            if (dataAndEvents) {
              self.runtime = $.Runtime.getInfo(getRUID()).type;
              self.trigger("Init", {
                runtime : self.runtime
              });
              self.trigger("PostInit");
            } else {
              self.trigger("Error", {
                code : plupload.INIT_ERROR,
                message : plupload.translate("Init error.")
              });
            }
          });
        }
      }
    }
    /**
     * @param {Function} up
     * @param {Object} file
     * @return {undefined}
     */
    function onBeforeUpload(up, file) {
      if (up.settings.unique_names) {
        var _ref = file.name.match(/\.([^.]+)$/);
        /** @type {string} */
        var ext = "part";
        if (_ref) {
          ext = _ref[1];
        }
        /** @type {string} */
        file.target_name = file.id + "." + ext;
      }
    }
    /**
     * @param {Object} up
     * @param {Object} file
     * @return {undefined}
     */
    function onUploadFile(up, file) {
      /**
       * @return {undefined}
       */
      function handleError() {
        if (retries-- > 0) {
          delay(uploadNextChunk, 1E3);
        } else {
          file.loaded = offset;
          up.trigger("Error", {
            code : plupload.HTTP_ERROR,
            message : plupload.translate("HTTP Error."),
            file : file,
            response : xhr.responseText,
            status : xhr.status,
            responseHeaders : xhr.getAllResponseHeaders()
          });
        }
      }
      /**
       * @return {undefined}
       */
      function uploadNextChunk() {
        var d;
        var query;
        var args = {};
        var curChunkSize;
        if (file.status !== plupload.UPLOADING || up.state === plupload.STOPPED) {
          return;
        }
        if (up.settings.send_file_name) {
          args.name = file.target_name || file.name;
        }
        if (chunkSize && (features.chunks && blob.size > chunkSize)) {
          /** @type {number} */
          curChunkSize = Math.min(chunkSize, blob.size - offset);
          d = blob.slice(offset, offset + curChunkSize);
        } else {
          curChunkSize = blob.size;
          d = blob;
        }
        if (chunkSize) {
          if (features.chunks) {
            if (up.settings.send_chunk_number) {
              /** @type {number} */
              args.chunk = Math.ceil(offset / chunkSize);
              /** @type {number} */
              args.chunks = Math.ceil(blob.size / chunkSize);
            } else {
              args.offset = offset;
              args.total = blob.size;
            }
          }
        }
        xhr = new $.XMLHttpRequest;
        if (xhr.upload) {
          /**
           * @param {Object} e
           * @return {undefined}
           */
          xhr.upload.onprogress = function(e) {
            /** @type {number} */
            file.loaded = Math.min(file.size, offset + e.loaded);
            up.trigger("UploadProgress", file);
          };
        }
        /**
         * @return {undefined}
         */
        xhr.onload = function() {
          if (xhr.status >= 400) {
            handleError();
            return;
          }
          retries = up.settings.max_retries;
          if (curChunkSize < blob.size) {
            d.destroy();
            offset += curChunkSize;
            /** @type {number} */
            file.loaded = Math.min(offset, blob.size);
            up.trigger("ChunkUploaded", file, {
              offset : file.loaded,
              total : blob.size,
              response : xhr.responseText,
              status : xhr.status,
              responseHeaders : xhr.getAllResponseHeaders()
            });
            if ($.Env.browser === "Android Browser") {
              up.trigger("UploadProgress", file);
            }
          } else {
            file.loaded = file.size;
          }
          /** @type {null} */
          d = query = null;
          if (!offset || offset >= blob.size) {
            if (file.size != file.origSize) {
              blob.destroy();
              /** @type {null} */
              blob = null;
            }
            up.trigger("UploadProgress", file);
            /** @type {number} */
            file.status = plupload.DONE;
            up.trigger("FileUploaded", file, {
              response : xhr.responseText,
              status : xhr.status,
              responseHeaders : xhr.getAllResponseHeaders()
            });
          } else {
            delay(uploadNextChunk, 1);
          }
        };
        /**
         * @return {undefined}
         */
        xhr.onerror = function() {
          handleError();
        };
        /**
         * @return {undefined}
         */
        xhr.onloadend = function() {
          this.destroy();
          /** @type {null} */
          xhr = null;
        };
        if (up.settings.multipart && features.multipart) {
          xhr.open("post", url, true);
          plupload.each(up.settings.headers, function(value, key) {
            xhr.setRequestHeader(key, value);
          });
          query = new $.FormData;
          plupload.each(plupload.extend(args, up.settings.multipart_params), function(b, part) {
            query.append(part, b);
          });
          query.append(up.settings.file_data_name, d);
          xhr.send(query, {
            runtime_order : up.settings.runtimes,
            required_caps : up.settings.required_features,
            preferred_caps : preferred_caps,
            swf_url : up.settings.flash_swf_url,
            xap_url : up.settings.silverlight_xap_url
          });
        } else {
          url = plupload.buildUrl(up.settings.url, plupload.extend(args, up.settings.multipart_params));
          xhr.open("post", url, true);
          xhr.setRequestHeader("Content-Type", "application/octet-stream");
          plupload.each(up.settings.headers, function(value, key) {
            xhr.setRequestHeader(key, value);
          });
          xhr.send(d, {
            runtime_order : up.settings.runtimes,
            required_caps : up.settings.required_features,
            preferred_caps : preferred_caps,
            swf_url : up.settings.flash_swf_url,
            xap_url : up.settings.silverlight_xap_url
          });
        }
      }
      var url = up.settings.url;
      var chunkSize = up.settings.chunk_size;
      var retries = up.settings.max_retries;
      var features = up.features;
      /** @type {number} */
      var offset = 0;
      var blob;
      if (file.loaded) {
        /** @type {number} */
        offset = file.loaded = chunkSize ? chunkSize * Math.floor(file.loaded / chunkSize) : 0;
      }
      blob = file.getSource();
      if (up.settings.resize.enabled && (runtimeCan(blob, "send_binary_string") && !!~$.inArray(blob.type, ["image/jpeg", "image/png"]))) {
        resizeImage.call(this, blob, up.settings.resize, function(resizedBlob) {
          /** @type {Object} */
          blob = resizedBlob;
          file.size = resizedBlob.size;
          uploadNextChunk();
        });
      } else {
        uploadNextChunk();
      }
    }
    /**
     * @param {?} up
     * @param {Object} file
     * @return {undefined}
     */
    function onUploadProgress(up, file) {
      calcFile(file);
    }
    /**
     * @param {Object} up
     * @return {undefined}
     */
    function onStateChanged(up) {
      if (up.state == plupload.STARTED) {
        /** @type {number} */
        startTime = +new Date;
      } else {
        if (up.state == plupload.STOPPED) {
          /** @type {number} */
          var i = up.files.length - 1;
          for (;i >= 0;i--) {
            if (up.files[i].status == plupload.UPLOADING) {
              /** @type {number} */
              up.files[i].status = plupload.QUEUED;
              calc();
            }
          }
        }
      }
    }
    /**
     * @return {undefined}
     */
    function onCancelUpload() {
      if (xhr) {
        xhr.abort();
      }
    }
    /**
     * @param {?} up
     * @return {undefined}
     */
    function onFileUploaded(up) {
      calc();
      delay(function() {
        uploadNext.call(up);
      }, 1);
    }
    /**
     * @param {Object} up
     * @param {Object} err
     * @return {undefined}
     */
    function onError(up, err) {
      if (err.code === plupload.INIT_ERROR) {
        up.destroy();
      } else {
        if (err.file) {
          /** @type {number} */
          err.file.status = plupload.FAILED;
          calcFile(err.file);
          if (up.state == plupload.STARTED) {
            up.trigger("CancelUpload");
            delay(function() {
              uploadNext.call(up);
            }, 1);
          }
        }
      }
    }
    /**
     * @param {Object} e
     * @return {undefined}
     */
    function onDestroy(e) {
      e.stop();
      plupload.each(files, function(todo) {
        todo.destroy();
      });
      /** @type {Array} */
      files = [];
      if (scripts.length) {
        plupload.each(scripts, function(todo) {
          todo.destroy();
        });
        /** @type {Array} */
        scripts = [];
      }
      if (which.length) {
        plupload.each(which, function(todo) {
          todo.destroy();
        });
        /** @type {Array} */
        which = [];
      }
      preferred_caps = {};
      /** @type {boolean} */
      key = false;
      /** @type {null} */
      startTime = xhr = null;
      total.reset();
    }
    var uid = plupload.guid();
    var settings;
    /** @type {Array} */
    var files = [];
    var preferred_caps = {};
    /** @type {Array} */
    var scripts = [];
    /** @type {Array} */
    var which = [];
    var startTime;
    var total;
    /** @type {boolean} */
    var key = false;
    var xhr;
    settings = {
      runtimes : $.Runtime.order,
      max_retries : 0,
      chunk_size : 0,
      multipart : true,
      multi_selection : true,
      file_data_name : "file",
      flash_swf_url : "js/Moxie.swf",
      silverlight_xap_url : "js/Moxie.xap",
      filters : {
        mime_types : [],
        prevent_duplicates : false,
        max_file_size : 0
      },
      resize : {
        enabled : false,
        preserve_headers : true,
        crop : false
      },
      send_file_name : true,
      send_chunk_number : true
    };
    setOption.call(this, options, null, true);
    total = new plupload.QueueProgress;
    plupload.extend(this, {
      id : uid,
      uid : uid,
      state : plupload.STOPPED,
      features : {},
      runtime : null,
      files : files,
      settings : settings,
      total : total,
      /**
       * @return {undefined}
       */
      init : function() {
        var self = this;
        if (typeof settings.preinit == "function") {
          settings.preinit(self);
        } else {
          plupload.each(settings.preinit, function(method, eventName) {
            self.bind(eventName, method);
          });
        }
        bindEventListeners.call(this);
        if (!settings.browse_button || !settings.url) {
          this.trigger("Error", {
            code : plupload.INIT_ERROR,
            message : plupload.translate("Init error.")
          });
          return;
        }
        initControls.call(this, settings, function(dataAndEvents) {
          if (typeof settings.init == "function") {
            settings.init(self);
          } else {
            plupload.each(settings.init, function(method, eventName) {
              self.bind(eventName, method);
            });
          }
          if (dataAndEvents) {
            self.runtime = $.Runtime.getInfo(getRUID()).type;
            self.trigger("Init", {
              runtime : self.runtime
            });
            self.trigger("PostInit");
          } else {
            self.trigger("Error", {
              code : plupload.INIT_ERROR,
              message : plupload.translate("Init error.")
            });
          }
        });
      },
      /**
       * @param {?} options
       * @param {?} value
       * @return {undefined}
       */
      setOption : function(options, value) {
        setOption.call(this, options, value, !this.runtime);
      },
      /**
       * @param {?} name
       * @return {?}
       */
      getOption : function(name) {
        return name ? settings[name] : settings;
      },
      /**
       * @return {undefined}
       */
      refresh : function() {
        if (scripts.length) {
          plupload.each(scripts, function(fileInput) {
            fileInput.trigger("Refresh");
          });
        }
        this.trigger("Refresh");
      },
      /**
       * @return {undefined}
       */
      start : function() {
        if (this.state != plupload.STARTED) {
          /** @type {number} */
          this.state = plupload.STARTED;
          this.trigger("StateChanged");
          uploadNext.call(this);
        }
      },
      /**
       * @return {undefined}
       */
      stop : function() {
        if (this.state != plupload.STOPPED) {
          /** @type {number} */
          this.state = plupload.STOPPED;
          this.trigger("StateChanged");
          this.trigger("CancelUpload");
        }
      },
      /**
       * @return {undefined}
       */
      disableBrowse : function() {
        key = arguments[0] !== undef ? arguments[0] : true;
        if (scripts.length) {
          plupload.each(scripts, function(field) {
            field.disable(key);
          });
        }
        this.trigger("DisableBrowse", key);
      },
      /**
       * @param {?} id
       * @return {?}
       */
      getFile : function(id) {
        var i;
        /** @type {number} */
        i = files.length - 1;
        for (;i >= 0;i--) {
          if (files[i].id === id) {
            return files[i];
          }
        }
      },
      /**
       * @param {Object} file
       * @param {(Function|string)} name
       * @return {undefined}
       */
      addFile : function(file, name) {
        /**
         * @param {Object} file
         * @param {Function} cb
         * @return {undefined}
         */
        function filterFile(file, cb) {
          /** @type {Array} */
          var QUnit = [];
          $.each(self.settings.filters, function(mapper, idx) {
            if (handlers[idx]) {
              QUnit.push(function($sanitize) {
                handlers[idx].call(self, mapper, file, function(dataAndEvents) {
                  $sanitize(!dataAndEvents);
                });
              });
            }
          });
          $.inSeries(QUnit, cb);
        }
        /**
         * @param {Object} file
         * @return {?}
         */
        function resolveFile(file) {
          var type = $.typeOf(file);
          if (file instanceof $.File) {
            if (!file.ruid && !file.isDetached()) {
              if (!ruid) {
                return false;
              }
              file.ruid = ruid;
              file.connectRuntime(ruid);
            }
            resolveFile(new plupload.File(file));
          } else {
            if (file instanceof $.Blob) {
              resolveFile(file.getSource());
              file.destroy();
            } else {
              if (file instanceof plupload.File) {
                if (name) {
                  /** @type {(Function|string)} */
                  file.name = name;
                }
                classNames.push(function(next_callback) {
                  filterFile(file, function(dataAndEvents) {
                    if (!dataAndEvents) {
                      files.push(file);
                      results.push(file);
                      self.trigger("FileFiltered", file);
                    }
                    delay(next_callback, 1);
                  });
                });
              } else {
                if ($.inArray(type, ["file", "blob"]) !== -1) {
                  resolveFile(new $.File(null, file));
                } else {
                  if (type === "node" && $.typeOf(file.files) === "filelist") {
                    $.each(file.files, resolveFile);
                  } else {
                    if (type === "array") {
                      /** @type {null} */
                      name = null;
                      $.each(file, resolveFile);
                    }
                  }
                }
              }
            }
          }
        }
        var self = this;
        /** @type {Array} */
        var classNames = [];
        /** @type {Array} */
        var results = [];
        var ruid;
        ruid = getRUID();
        resolveFile(file);
        if (classNames.length) {
          $.inSeries(classNames, function() {
            if (results.length) {
              self.trigger("FilesAdded", results);
            }
          });
        }
      },
      /**
       * @param {Object} file
       * @return {?}
       */
      removeFile : function(file) {
        var id = typeof file == "string" ? file : file.id;
        /** @type {number} */
        var i = files.length - 1;
        for (;i >= 0;i--) {
          if (files[i].id === id) {
            return this.splice(i, 1)[0];
          }
        }
      },
      /**
       * @param {number} start
       * @param {number} length
       * @return {?}
       */
      splice : function(start, length) {
        var which = files.splice(start === undef ? 0 : start, length === undef ? files.length : length);
        /** @type {boolean} */
        var stop = false;
        return this.state == plupload.STARTED && (plupload.each(which, function(file) {
          if (file.status === plupload.UPLOADING) {
            return stop = true, false;
          }
        }), stop && this.stop()), this.trigger("FilesRemoved", which), plupload.each(which, function(todo) {
          todo.destroy();
        }), stop && this.start(), which;
      },
      /**
       * @param {string} name
       * @param {Function} func
       * @param {number} opt_attributes
       * @return {undefined}
       */
      bind : function(name, func, opt_attributes) {
        var NULL = this;
        plupload.Uploader.prototype.bind.call(this, name, function() {
          /** @type {Array.<?>} */
          var args = [].slice.call(arguments);
          return args.splice(0, 1, NULL), func.apply(this, args);
        }, 0, opt_attributes);
      },
      /**
       * @return {undefined}
       */
      destroy : function() {
        this.trigger("Destroy");
        /** @type {null} */
        settings = total = null;
        this.unbindAll();
      }
    });
  };
  plupload.Uploader.prototype = $.EventTarget.instance;
  plupload.File = function() {
    /**
     * @param {Object} file
     * @return {undefined}
     */
    function PluploadFile(file) {
      plupload.extend(this, {
        id : plupload.guid(),
        name : file.name || file.fileName,
        type : file.type || "",
        size : file.size || file.fileSize,
        origSize : file.size || file.fileSize,
        loaded : 0,
        percent : 0,
        status : plupload.QUEUED,
        lastModifiedDate : file.lastModifiedDate || (new Date).toLocaleString(),
        /**
         * @return {?}
         */
        getNative : function() {
          var file = this.getSource().getSource();
          return $.inArray($.typeOf(file), ["blob", "file"]) !== -1 ? file : null;
        },
        /**
         * @return {?}
         */
        getSource : function() {
          return cache[this.id] ? cache[this.id] : null;
        },
        /**
         * @return {undefined}
         */
        destroy : function() {
          var src = this.getSource();
          if (src) {
            src.destroy();
            delete cache[this.id];
          }
        }
      });
      /** @type {Object} */
      cache[this.id] = file;
    }
    var cache = {};
    return PluploadFile;
  }();
  /**
   * @return {undefined}
   */
  plupload.QueueProgress = function() {
    var self = this;
    /** @type {number} */
    self.size = 0;
    /** @type {number} */
    self.loaded = 0;
    /** @type {number} */
    self.uploaded = 0;
    /** @type {number} */
    self.failed = 0;
    /** @type {number} */
    self.queued = 0;
    /** @type {number} */
    self.percent = 0;
    /** @type {number} */
    self.bytesPerSec = 0;
    /**
     * @return {undefined}
     */
    self.reset = function() {
      /** @type {number} */
      self.size = self.loaded = self.uploaded = self.failed = self.queued = self.percent = self.bytesPerSec = 0;
    };
  };
  w.plupload = plupload;
})(this, this.mOxie);
console.log('this.mOxie', this.mOxie);