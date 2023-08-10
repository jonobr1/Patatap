(() => {
  var __create = Object.create;
  var __defProp = Object.defineProperty;
  var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
  var __getOwnPropNames = Object.getOwnPropertyNames;
  var __getProtoOf = Object.getPrototypeOf;
  var __hasOwnProp = Object.prototype.hasOwnProperty;
  var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
  var __commonJS = (cb, mod2) => function __require() {
    return mod2 || (0, cb[__getOwnPropNames(cb)[0]])((mod2 = { exports: {} }).exports, mod2), mod2.exports;
  };
  var __copyProps = (to, from, except, desc) => {
    if (from && typeof from === "object" || typeof from === "function") {
      for (let key of __getOwnPropNames(from))
        if (!__hasOwnProp.call(to, key) && key !== except)
          __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
    }
    return to;
  };
  var __toESM = (mod2, isNodeMode, target) => (target = mod2 != null ? __create(__getProtoOf(mod2)) : {}, __copyProps(
    isNodeMode || !mod2 || !mod2.__esModule ? __defProp(target, "default", { value: mod2, enumerable: true }) : target,
    mod2
  ));
  var __publicField = (obj, key, value) => {
    __defNormalProp(obj, typeof key !== "symbol" ? key + "" : key, value);
    return value;
  };
  var __accessCheck = (obj, member, msg) => {
    if (!member.has(obj))
      throw TypeError("Cannot " + msg);
  };
  var __privateGet = (obj, member, getter) => {
    __accessCheck(obj, member, "read from private field");
    return getter ? getter.call(obj) : member.get(obj);
  };
  var __privateAdd = (obj, member, value) => {
    if (member.has(obj))
      throw TypeError("Cannot add the same private member more than once");
    member instanceof WeakSet ? member.add(obj) : member.set(obj, value);
  };
  var __privateSet = (obj, member, value, setter) => {
    __accessCheck(obj, member, "write to private field");
    setter ? setter.call(obj, value) : member.set(obj, value);
    return value;
  };
  var __privateMethod = (obj, member, method) => {
    __accessCheck(obj, member, "access private method");
    return method;
  };

  // node_modules/jquery/dist/jquery.js
  var require_jquery = __commonJS({
    "node_modules/jquery/dist/jquery.js"(exports, module) {
      (function(global2, factory) {
        "use strict";
        if (typeof module === "object" && typeof module.exports === "object") {
          module.exports = global2.document ? factory(global2, true) : function(w) {
            if (!w.document) {
              throw new Error("jQuery requires a window with a document");
            }
            return factory(w);
          };
        } else {
          factory(global2);
        }
      })(typeof window !== "undefined" ? window : exports, function(window2, noGlobal) {
        "use strict";
        var arr = [];
        var getProto = Object.getPrototypeOf;
        var slice2 = arr.slice;
        var flat = arr.flat ? function(array2) {
          return arr.flat.call(array2);
        } : function(array2) {
          return arr.concat.apply([], array2);
        };
        var push = arr.push;
        var indexOf = arr.indexOf;
        var class2type = {};
        var toString = class2type.toString;
        var hasOwn = class2type.hasOwnProperty;
        var fnToString = hasOwn.toString;
        var ObjectFunctionString = fnToString.call(Object);
        var support = {};
        var isFunction = function isFunction2(obj) {
          return typeof obj === "function" && typeof obj.nodeType !== "number" && typeof obj.item !== "function";
        };
        var isWindow = function isWindow2(obj) {
          return obj != null && obj === obj.window;
        };
        var document2 = window2.document;
        var preservedScriptAttributes = {
          type: true,
          src: true,
          nonce: true,
          noModule: true
        };
        function DOMEval(code, node, doc) {
          doc = doc || document2;
          var i, val, script = doc.createElement("script");
          script.text = code;
          if (node) {
            for (i in preservedScriptAttributes) {
              val = node[i] || node.getAttribute && node.getAttribute(i);
              if (val) {
                script.setAttribute(i, val);
              }
            }
          }
          doc.head.appendChild(script).parentNode.removeChild(script);
        }
        function toType(obj) {
          if (obj == null) {
            return obj + "";
          }
          return typeof obj === "object" || typeof obj === "function" ? class2type[toString.call(obj)] || "object" : typeof obj;
        }
        var version = "3.7.0", rhtmlSuffix = /HTML$/i, jQuery = function(selector, context) {
          return new jQuery.fn.init(selector, context);
        };
        jQuery.fn = jQuery.prototype = {
          jquery: version,
          constructor: jQuery,
          length: 0,
          toArray: function() {
            return slice2.call(this);
          },
          get: function(num) {
            if (num == null) {
              return slice2.call(this);
            }
            return num < 0 ? this[num + this.length] : this[num];
          },
          pushStack: function(elems) {
            var ret = jQuery.merge(this.constructor(), elems);
            ret.prevObject = this;
            return ret;
          },
          each: function(callback) {
            return jQuery.each(this, callback);
          },
          map: function(callback) {
            return this.pushStack(jQuery.map(this, function(elem, i) {
              return callback.call(elem, i, elem);
            }));
          },
          slice: function() {
            return this.pushStack(slice2.apply(this, arguments));
          },
          first: function() {
            return this.eq(0);
          },
          last: function() {
            return this.eq(-1);
          },
          even: function() {
            return this.pushStack(jQuery.grep(this, function(_elem, i) {
              return (i + 1) % 2;
            }));
          },
          odd: function() {
            return this.pushStack(jQuery.grep(this, function(_elem, i) {
              return i % 2;
            }));
          },
          eq: function(i) {
            var len = this.length, j = +i + (i < 0 ? len : 0);
            return this.pushStack(j >= 0 && j < len ? [this[j]] : []);
          },
          end: function() {
            return this.prevObject || this.constructor();
          },
          push,
          sort: arr.sort,
          splice: arr.splice
        };
        jQuery.extend = jQuery.fn.extend = function() {
          var options, name, src, copy, copyIsArray, clone, target = arguments[0] || {}, i = 1, length = arguments.length, deep = false;
          if (typeof target === "boolean") {
            deep = target;
            target = arguments[i] || {};
            i++;
          }
          if (typeof target !== "object" && !isFunction(target)) {
            target = {};
          }
          if (i === length) {
            target = this;
            i--;
          }
          for (; i < length; i++) {
            if ((options = arguments[i]) != null) {
              for (name in options) {
                copy = options[name];
                if (name === "__proto__" || target === copy) {
                  continue;
                }
                if (deep && copy && (jQuery.isPlainObject(copy) || (copyIsArray = Array.isArray(copy)))) {
                  src = target[name];
                  if (copyIsArray && !Array.isArray(src)) {
                    clone = [];
                  } else if (!copyIsArray && !jQuery.isPlainObject(src)) {
                    clone = {};
                  } else {
                    clone = src;
                  }
                  copyIsArray = false;
                  target[name] = jQuery.extend(deep, clone, copy);
                } else if (copy !== void 0) {
                  target[name] = copy;
                }
              }
            }
          }
          return target;
        };
        jQuery.extend({
          expando: "jQuery" + (version + Math.random()).replace(/\D/g, ""),
          isReady: true,
          error: function(msg) {
            throw new Error(msg);
          },
          noop: function() {
          },
          isPlainObject: function(obj) {
            var proto24, Ctor;
            if (!obj || toString.call(obj) !== "[object Object]") {
              return false;
            }
            proto24 = getProto(obj);
            if (!proto24) {
              return true;
            }
            Ctor = hasOwn.call(proto24, "constructor") && proto24.constructor;
            return typeof Ctor === "function" && fnToString.call(Ctor) === ObjectFunctionString;
          },
          isEmptyObject: function(obj) {
            var name;
            for (name in obj) {
              return false;
            }
            return true;
          },
          globalEval: function(code, options, doc) {
            DOMEval(code, { nonce: options && options.nonce }, doc);
          },
          each: function(obj, callback) {
            var length, i = 0;
            if (isArrayLike2(obj)) {
              length = obj.length;
              for (; i < length; i++) {
                if (callback.call(obj[i], i, obj[i]) === false) {
                  break;
                }
              }
            } else {
              for (i in obj) {
                if (callback.call(obj[i], i, obj[i]) === false) {
                  break;
                }
              }
            }
            return obj;
          },
          text: function(elem) {
            var node, ret = "", i = 0, nodeType = elem.nodeType;
            if (!nodeType) {
              while (node = elem[i++]) {
                ret += jQuery.text(node);
              }
            } else if (nodeType === 1 || nodeType === 9 || nodeType === 11) {
              return elem.textContent;
            } else if (nodeType === 3 || nodeType === 4) {
              return elem.nodeValue;
            }
            return ret;
          },
          makeArray: function(arr2, results) {
            var ret = results || [];
            if (arr2 != null) {
              if (isArrayLike2(Object(arr2))) {
                jQuery.merge(
                  ret,
                  typeof arr2 === "string" ? [arr2] : arr2
                );
              } else {
                push.call(ret, arr2);
              }
            }
            return ret;
          },
          inArray: function(elem, arr2, i) {
            return arr2 == null ? -1 : indexOf.call(arr2, elem, i);
          },
          isXMLDoc: function(elem) {
            var namespace = elem && elem.namespaceURI, docElem = elem && (elem.ownerDocument || elem).documentElement;
            return !rhtmlSuffix.test(namespace || docElem && docElem.nodeName || "HTML");
          },
          merge: function(first, second) {
            var len = +second.length, j = 0, i = first.length;
            for (; j < len; j++) {
              first[i++] = second[j];
            }
            first.length = i;
            return first;
          },
          grep: function(elems, callback, invert) {
            var callbackInverse, matches = [], i = 0, length = elems.length, callbackExpect = !invert;
            for (; i < length; i++) {
              callbackInverse = !callback(elems[i], i);
              if (callbackInverse !== callbackExpect) {
                matches.push(elems[i]);
              }
            }
            return matches;
          },
          map: function(elems, callback, arg) {
            var length, value, i = 0, ret = [];
            if (isArrayLike2(elems)) {
              length = elems.length;
              for (; i < length; i++) {
                value = callback(elems[i], i, arg);
                if (value != null) {
                  ret.push(value);
                }
              }
            } else {
              for (i in elems) {
                value = callback(elems[i], i, arg);
                if (value != null) {
                  ret.push(value);
                }
              }
            }
            return flat(ret);
          },
          guid: 1,
          support
        });
        if (typeof Symbol === "function") {
          jQuery.fn[Symbol.iterator] = arr[Symbol.iterator];
        }
        jQuery.each(
          "Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "),
          function(_i, name) {
            class2type["[object " + name + "]"] = name.toLowerCase();
          }
        );
        function isArrayLike2(obj) {
          var length = !!obj && "length" in obj && obj.length, type = toType(obj);
          if (isFunction(obj) || isWindow(obj)) {
            return false;
          }
          return type === "array" || length === 0 || typeof length === "number" && length > 0 && length - 1 in obj;
        }
        function nodeName(elem, name) {
          return elem.nodeName && elem.nodeName.toLowerCase() === name.toLowerCase();
        }
        var pop = arr.pop;
        var sort = arr.sort;
        var splice = arr.splice;
        var whitespace = "[\\x20\\t\\r\\n\\f]";
        var rtrimCSS = new RegExp(
          "^" + whitespace + "+|((?:^|[^\\\\])(?:\\\\.)*)" + whitespace + "+$",
          "g"
        );
        jQuery.contains = function(a, b) {
          var bup = b && b.parentNode;
          return a === bup || !!(bup && bup.nodeType === 1 && (a.contains ? a.contains(bup) : a.compareDocumentPosition && a.compareDocumentPosition(bup) & 16));
        };
        var rcssescape = /([\0-\x1f\x7f]|^-?\d)|^-$|[^\x80-\uFFFF\w-]/g;
        function fcssescape(ch, asCodePoint) {
          if (asCodePoint) {
            if (ch === "\0") {
              return "\uFFFD";
            }
            return ch.slice(0, -1) + "\\" + ch.charCodeAt(ch.length - 1).toString(16) + " ";
          }
          return "\\" + ch;
        }
        jQuery.escapeSelector = function(sel) {
          return (sel + "").replace(rcssescape, fcssescape);
        };
        var preferredDoc = document2, pushNative = push;
        (function() {
          var i, Expr, outermostContext, sortInput, hasDuplicate, push2 = pushNative, document3, documentElement2, documentIsHTML, rbuggyQSA, matches, expando = jQuery.expando, dirruns = 0, done = 0, classCache = createCache(), tokenCache = createCache(), compilerCache = createCache(), nonnativeSelectorCache = createCache(), sortOrder = function(a, b) {
            if (a === b) {
              hasDuplicate = true;
            }
            return 0;
          }, booleans = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped", identifier = "(?:\\\\[\\da-fA-F]{1,6}" + whitespace + "?|\\\\[^\\r\\n\\f]|[\\w-]|[^\0-\\x7f])+", attributes = "\\[" + whitespace + "*(" + identifier + ")(?:" + whitespace + "*([*^$|!~]?=)" + whitespace + `*(?:'((?:\\\\.|[^\\\\'])*)'|"((?:\\\\.|[^\\\\"])*)"|(` + identifier + "))|)" + whitespace + "*\\]", pseudos = ":(" + identifier + `)(?:\\((('((?:\\\\.|[^\\\\'])*)'|"((?:\\\\.|[^\\\\"])*)")|((?:\\\\.|[^\\\\()[\\]]|` + attributes + ")*)|.*)\\)|)", rwhitespace = new RegExp(whitespace + "+", "g"), rcomma = new RegExp("^" + whitespace + "*," + whitespace + "*"), rleadingCombinator = new RegExp("^" + whitespace + "*([>+~]|" + whitespace + ")" + whitespace + "*"), rdescend = new RegExp(whitespace + "|>"), rpseudo = new RegExp(pseudos), ridentifier = new RegExp("^" + identifier + "$"), matchExpr = {
            ID: new RegExp("^#(" + identifier + ")"),
            CLASS: new RegExp("^\\.(" + identifier + ")"),
            TAG: new RegExp("^(" + identifier + "|[*])"),
            ATTR: new RegExp("^" + attributes),
            PSEUDO: new RegExp("^" + pseudos),
            CHILD: new RegExp(
              "^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + whitespace + "*(even|odd|(([+-]|)(\\d*)n|)" + whitespace + "*(?:([+-]|)" + whitespace + "*(\\d+)|))" + whitespace + "*\\)|)",
              "i"
            ),
            bool: new RegExp("^(?:" + booleans + ")$", "i"),
            needsContext: new RegExp("^" + whitespace + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + whitespace + "*((?:-\\d)?\\d*)" + whitespace + "*\\)|)(?=[^-]|$)", "i")
          }, rinputs = /^(?:input|select|textarea|button)$/i, rheader = /^h\d$/i, rquickExpr2 = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/, rsibling = /[+~]/, runescape = new RegExp("\\\\[\\da-fA-F]{1,6}" + whitespace + "?|\\\\([^\\r\\n\\f])", "g"), funescape = function(escape, nonHex) {
            var high = "0x" + escape.slice(1) - 65536;
            if (nonHex) {
              return nonHex;
            }
            return high < 0 ? String.fromCharCode(high + 65536) : String.fromCharCode(high >> 10 | 55296, high & 1023 | 56320);
          }, unloadHandler = function() {
            setDocument();
          }, inDisabledFieldset = addCombinator(
            function(elem) {
              return elem.disabled === true && nodeName(elem, "fieldset");
            },
            { dir: "parentNode", next: "legend" }
          );
          function safeActiveElement() {
            try {
              return document3.activeElement;
            } catch (err) {
            }
          }
          try {
            push2.apply(
              arr = slice2.call(preferredDoc.childNodes),
              preferredDoc.childNodes
            );
            arr[preferredDoc.childNodes.length].nodeType;
          } catch (e) {
            push2 = {
              apply: function(target, els) {
                pushNative.apply(target, slice2.call(els));
              },
              call: function(target) {
                pushNative.apply(target, slice2.call(arguments, 1));
              }
            };
          }
          function find(selector, context, results, seed) {
            var m, i2, elem, nid, match, groups, newSelector, newContext = context && context.ownerDocument, nodeType = context ? context.nodeType : 9;
            results = results || [];
            if (typeof selector !== "string" || !selector || nodeType !== 1 && nodeType !== 9 && nodeType !== 11) {
              return results;
            }
            if (!seed) {
              setDocument(context);
              context = context || document3;
              if (documentIsHTML) {
                if (nodeType !== 11 && (match = rquickExpr2.exec(selector))) {
                  if (m = match[1]) {
                    if (nodeType === 9) {
                      if (elem = context.getElementById(m)) {
                        if (elem.id === m) {
                          push2.call(results, elem);
                          return results;
                        }
                      } else {
                        return results;
                      }
                    } else {
                      if (newContext && (elem = newContext.getElementById(m)) && find.contains(context, elem) && elem.id === m) {
                        push2.call(results, elem);
                        return results;
                      }
                    }
                  } else if (match[2]) {
                    push2.apply(results, context.getElementsByTagName(selector));
                    return results;
                  } else if ((m = match[3]) && context.getElementsByClassName) {
                    push2.apply(results, context.getElementsByClassName(m));
                    return results;
                  }
                }
                if (!nonnativeSelectorCache[selector + " "] && (!rbuggyQSA || !rbuggyQSA.test(selector))) {
                  newSelector = selector;
                  newContext = context;
                  if (nodeType === 1 && (rdescend.test(selector) || rleadingCombinator.test(selector))) {
                    newContext = rsibling.test(selector) && testContext(context.parentNode) || context;
                    if (newContext != context || !support.scope) {
                      if (nid = context.getAttribute("id")) {
                        nid = jQuery.escapeSelector(nid);
                      } else {
                        context.setAttribute("id", nid = expando);
                      }
                    }
                    groups = tokenize(selector);
                    i2 = groups.length;
                    while (i2--) {
                      groups[i2] = (nid ? "#" + nid : ":scope") + " " + toSelector(groups[i2]);
                    }
                    newSelector = groups.join(",");
                  }
                  try {
                    push2.apply(
                      results,
                      newContext.querySelectorAll(newSelector)
                    );
                    return results;
                  } catch (qsaError) {
                    nonnativeSelectorCache(selector, true);
                  } finally {
                    if (nid === expando) {
                      context.removeAttribute("id");
                    }
                  }
                }
              }
            }
            return select(selector.replace(rtrimCSS, "$1"), context, results, seed);
          }
          function createCache() {
            var keys2 = [];
            function cache(key, value) {
              if (keys2.push(key + " ") > Expr.cacheLength) {
                delete cache[keys2.shift()];
              }
              return cache[key + " "] = value;
            }
            return cache;
          }
          function markFunction(fn) {
            fn[expando] = true;
            return fn;
          }
          function assert(fn) {
            var el = document3.createElement("fieldset");
            try {
              return !!fn(el);
            } catch (e) {
              return false;
            } finally {
              if (el.parentNode) {
                el.parentNode.removeChild(el);
              }
              el = null;
            }
          }
          function createInputPseudo(type) {
            return function(elem) {
              return nodeName(elem, "input") && elem.type === type;
            };
          }
          function createButtonPseudo(type) {
            return function(elem) {
              return (nodeName(elem, "input") || nodeName(elem, "button")) && elem.type === type;
            };
          }
          function createDisabledPseudo(disabled) {
            return function(elem) {
              if ("form" in elem) {
                if (elem.parentNode && elem.disabled === false) {
                  if ("label" in elem) {
                    if ("label" in elem.parentNode) {
                      return elem.parentNode.disabled === disabled;
                    } else {
                      return elem.disabled === disabled;
                    }
                  }
                  return elem.isDisabled === disabled || elem.isDisabled !== !disabled && inDisabledFieldset(elem) === disabled;
                }
                return elem.disabled === disabled;
              } else if ("label" in elem) {
                return elem.disabled === disabled;
              }
              return false;
            };
          }
          function createPositionalPseudo(fn) {
            return markFunction(function(argument) {
              argument = +argument;
              return markFunction(function(seed, matches2) {
                var j, matchIndexes = fn([], seed.length, argument), i2 = matchIndexes.length;
                while (i2--) {
                  if (seed[j = matchIndexes[i2]]) {
                    seed[j] = !(matches2[j] = seed[j]);
                  }
                }
              });
            });
          }
          function testContext(context) {
            return context && typeof context.getElementsByTagName !== "undefined" && context;
          }
          function setDocument(node) {
            var subWindow, doc = node ? node.ownerDocument || node : preferredDoc;
            if (doc == document3 || doc.nodeType !== 9 || !doc.documentElement) {
              return document3;
            }
            document3 = doc;
            documentElement2 = document3.documentElement;
            documentIsHTML = !jQuery.isXMLDoc(document3);
            matches = documentElement2.matches || documentElement2.webkitMatchesSelector || documentElement2.msMatchesSelector;
            if (preferredDoc != document3 && (subWindow = document3.defaultView) && subWindow.top !== subWindow) {
              subWindow.addEventListener("unload", unloadHandler);
            }
            support.getById = assert(function(el) {
              documentElement2.appendChild(el).id = jQuery.expando;
              return !document3.getElementsByName || !document3.getElementsByName(jQuery.expando).length;
            });
            support.disconnectedMatch = assert(function(el) {
              return matches.call(el, "*");
            });
            support.scope = assert(function() {
              return document3.querySelectorAll(":scope");
            });
            support.cssHas = assert(function() {
              try {
                document3.querySelector(":has(*,:jqfake)");
                return false;
              } catch (e) {
                return true;
              }
            });
            if (support.getById) {
              Expr.filter.ID = function(id) {
                var attrId = id.replace(runescape, funescape);
                return function(elem) {
                  return elem.getAttribute("id") === attrId;
                };
              };
              Expr.find.ID = function(id, context) {
                if (typeof context.getElementById !== "undefined" && documentIsHTML) {
                  var elem = context.getElementById(id);
                  return elem ? [elem] : [];
                }
              };
            } else {
              Expr.filter.ID = function(id) {
                var attrId = id.replace(runescape, funescape);
                return function(elem) {
                  var node2 = typeof elem.getAttributeNode !== "undefined" && elem.getAttributeNode("id");
                  return node2 && node2.value === attrId;
                };
              };
              Expr.find.ID = function(id, context) {
                if (typeof context.getElementById !== "undefined" && documentIsHTML) {
                  var node2, i2, elems, elem = context.getElementById(id);
                  if (elem) {
                    node2 = elem.getAttributeNode("id");
                    if (node2 && node2.value === id) {
                      return [elem];
                    }
                    elems = context.getElementsByName(id);
                    i2 = 0;
                    while (elem = elems[i2++]) {
                      node2 = elem.getAttributeNode("id");
                      if (node2 && node2.value === id) {
                        return [elem];
                      }
                    }
                  }
                  return [];
                }
              };
            }
            Expr.find.TAG = function(tag, context) {
              if (typeof context.getElementsByTagName !== "undefined") {
                return context.getElementsByTagName(tag);
              } else {
                return context.querySelectorAll(tag);
              }
            };
            Expr.find.CLASS = function(className, context) {
              if (typeof context.getElementsByClassName !== "undefined" && documentIsHTML) {
                return context.getElementsByClassName(className);
              }
            };
            rbuggyQSA = [];
            assert(function(el) {
              var input;
              documentElement2.appendChild(el).innerHTML = "<a id='" + expando + "' href='' disabled='disabled'></a><select id='" + expando + "-\r\\' disabled='disabled'><option selected=''></option></select>";
              if (!el.querySelectorAll("[selected]").length) {
                rbuggyQSA.push("\\[" + whitespace + "*(?:value|" + booleans + ")");
              }
              if (!el.querySelectorAll("[id~=" + expando + "-]").length) {
                rbuggyQSA.push("~=");
              }
              if (!el.querySelectorAll("a#" + expando + "+*").length) {
                rbuggyQSA.push(".#.+[+~]");
              }
              if (!el.querySelectorAll(":checked").length) {
                rbuggyQSA.push(":checked");
              }
              input = document3.createElement("input");
              input.setAttribute("type", "hidden");
              el.appendChild(input).setAttribute("name", "D");
              documentElement2.appendChild(el).disabled = true;
              if (el.querySelectorAll(":disabled").length !== 2) {
                rbuggyQSA.push(":enabled", ":disabled");
              }
              input = document3.createElement("input");
              input.setAttribute("name", "");
              el.appendChild(input);
              if (!el.querySelectorAll("[name='']").length) {
                rbuggyQSA.push("\\[" + whitespace + "*name" + whitespace + "*=" + whitespace + `*(?:''|"")`);
              }
            });
            if (!support.cssHas) {
              rbuggyQSA.push(":has");
            }
            rbuggyQSA = rbuggyQSA.length && new RegExp(rbuggyQSA.join("|"));
            sortOrder = function(a, b) {
              if (a === b) {
                hasDuplicate = true;
                return 0;
              }
              var compare = !a.compareDocumentPosition - !b.compareDocumentPosition;
              if (compare) {
                return compare;
              }
              compare = (a.ownerDocument || a) == (b.ownerDocument || b) ? a.compareDocumentPosition(b) : 1;
              if (compare & 1 || !support.sortDetached && b.compareDocumentPosition(a) === compare) {
                if (a === document3 || a.ownerDocument == preferredDoc && find.contains(preferredDoc, a)) {
                  return -1;
                }
                if (b === document3 || b.ownerDocument == preferredDoc && find.contains(preferredDoc, b)) {
                  return 1;
                }
                return sortInput ? indexOf.call(sortInput, a) - indexOf.call(sortInput, b) : 0;
              }
              return compare & 4 ? -1 : 1;
            };
            return document3;
          }
          find.matches = function(expr, elements) {
            return find(expr, null, null, elements);
          };
          find.matchesSelector = function(elem, expr) {
            setDocument(elem);
            if (documentIsHTML && !nonnativeSelectorCache[expr + " "] && (!rbuggyQSA || !rbuggyQSA.test(expr))) {
              try {
                var ret = matches.call(elem, expr);
                if (ret || support.disconnectedMatch || elem.document && elem.document.nodeType !== 11) {
                  return ret;
                }
              } catch (e) {
                nonnativeSelectorCache(expr, true);
              }
            }
            return find(expr, document3, null, [elem]).length > 0;
          };
          find.contains = function(context, elem) {
            if ((context.ownerDocument || context) != document3) {
              setDocument(context);
            }
            return jQuery.contains(context, elem);
          };
          find.attr = function(elem, name) {
            if ((elem.ownerDocument || elem) != document3) {
              setDocument(elem);
            }
            var fn = Expr.attrHandle[name.toLowerCase()], val = fn && hasOwn.call(Expr.attrHandle, name.toLowerCase()) ? fn(elem, name, !documentIsHTML) : void 0;
            if (val !== void 0) {
              return val;
            }
            return elem.getAttribute(name);
          };
          find.error = function(msg) {
            throw new Error("Syntax error, unrecognized expression: " + msg);
          };
          jQuery.uniqueSort = function(results) {
            var elem, duplicates = [], j = 0, i2 = 0;
            hasDuplicate = !support.sortStable;
            sortInput = !support.sortStable && slice2.call(results, 0);
            sort.call(results, sortOrder);
            if (hasDuplicate) {
              while (elem = results[i2++]) {
                if (elem === results[i2]) {
                  j = duplicates.push(i2);
                }
              }
              while (j--) {
                splice.call(results, duplicates[j], 1);
              }
            }
            sortInput = null;
            return results;
          };
          jQuery.fn.uniqueSort = function() {
            return this.pushStack(jQuery.uniqueSort(slice2.apply(this)));
          };
          Expr = jQuery.expr = {
            cacheLength: 50,
            createPseudo: markFunction,
            match: matchExpr,
            attrHandle: {},
            find: {},
            relative: {
              ">": { dir: "parentNode", first: true },
              " ": { dir: "parentNode" },
              "+": { dir: "previousSibling", first: true },
              "~": { dir: "previousSibling" }
            },
            preFilter: {
              ATTR: function(match) {
                match[1] = match[1].replace(runescape, funescape);
                match[3] = (match[3] || match[4] || match[5] || "").replace(runescape, funescape);
                if (match[2] === "~=") {
                  match[3] = " " + match[3] + " ";
                }
                return match.slice(0, 4);
              },
              CHILD: function(match) {
                match[1] = match[1].toLowerCase();
                if (match[1].slice(0, 3) === "nth") {
                  if (!match[3]) {
                    find.error(match[0]);
                  }
                  match[4] = +(match[4] ? match[5] + (match[6] || 1) : 2 * (match[3] === "even" || match[3] === "odd"));
                  match[5] = +(match[7] + match[8] || match[3] === "odd");
                } else if (match[3]) {
                  find.error(match[0]);
                }
                return match;
              },
              PSEUDO: function(match) {
                var excess, unquoted = !match[6] && match[2];
                if (matchExpr.CHILD.test(match[0])) {
                  return null;
                }
                if (match[3]) {
                  match[2] = match[4] || match[5] || "";
                } else if (unquoted && rpseudo.test(unquoted) && (excess = tokenize(unquoted, true)) && (excess = unquoted.indexOf(")", unquoted.length - excess) - unquoted.length)) {
                  match[0] = match[0].slice(0, excess);
                  match[2] = unquoted.slice(0, excess);
                }
                return match.slice(0, 3);
              }
            },
            filter: {
              TAG: function(nodeNameSelector) {
                var expectedNodeName = nodeNameSelector.replace(runescape, funescape).toLowerCase();
                return nodeNameSelector === "*" ? function() {
                  return true;
                } : function(elem) {
                  return nodeName(elem, expectedNodeName);
                };
              },
              CLASS: function(className) {
                var pattern = classCache[className + " "];
                return pattern || (pattern = new RegExp("(^|" + whitespace + ")" + className + "(" + whitespace + "|$)")) && classCache(className, function(elem) {
                  return pattern.test(
                    typeof elem.className === "string" && elem.className || typeof elem.getAttribute !== "undefined" && elem.getAttribute("class") || ""
                  );
                });
              },
              ATTR: function(name, operator, check) {
                return function(elem) {
                  var result = find.attr(elem, name);
                  if (result == null) {
                    return operator === "!=";
                  }
                  if (!operator) {
                    return true;
                  }
                  result += "";
                  if (operator === "=") {
                    return result === check;
                  }
                  if (operator === "!=") {
                    return result !== check;
                  }
                  if (operator === "^=") {
                    return check && result.indexOf(check) === 0;
                  }
                  if (operator === "*=") {
                    return check && result.indexOf(check) > -1;
                  }
                  if (operator === "$=") {
                    return check && result.slice(-check.length) === check;
                  }
                  if (operator === "~=") {
                    return (" " + result.replace(rwhitespace, " ") + " ").indexOf(check) > -1;
                  }
                  if (operator === "|=") {
                    return result === check || result.slice(0, check.length + 1) === check + "-";
                  }
                  return false;
                };
              },
              CHILD: function(type, what, _argument, first, last) {
                var simple = type.slice(0, 3) !== "nth", forward = type.slice(-4) !== "last", ofType = what === "of-type";
                return first === 1 && last === 0 ? function(elem) {
                  return !!elem.parentNode;
                } : function(elem, _context, xml) {
                  var cache, outerCache, node, nodeIndex, start, dir2 = simple !== forward ? "nextSibling" : "previousSibling", parent = elem.parentNode, name = ofType && elem.nodeName.toLowerCase(), useCache = !xml && !ofType, diff = false;
                  if (parent) {
                    if (simple) {
                      while (dir2) {
                        node = elem;
                        while (node = node[dir2]) {
                          if (ofType ? nodeName(node, name) : node.nodeType === 1) {
                            return false;
                          }
                        }
                        start = dir2 = type === "only" && !start && "nextSibling";
                      }
                      return true;
                    }
                    start = [forward ? parent.firstChild : parent.lastChild];
                    if (forward && useCache) {
                      outerCache = parent[expando] || (parent[expando] = {});
                      cache = outerCache[type] || [];
                      nodeIndex = cache[0] === dirruns && cache[1];
                      diff = nodeIndex && cache[2];
                      node = nodeIndex && parent.childNodes[nodeIndex];
                      while (node = ++nodeIndex && node && node[dir2] || (diff = nodeIndex = 0) || start.pop()) {
                        if (node.nodeType === 1 && ++diff && node === elem) {
                          outerCache[type] = [dirruns, nodeIndex, diff];
                          break;
                        }
                      }
                    } else {
                      if (useCache) {
                        outerCache = elem[expando] || (elem[expando] = {});
                        cache = outerCache[type] || [];
                        nodeIndex = cache[0] === dirruns && cache[1];
                        diff = nodeIndex;
                      }
                      if (diff === false) {
                        while (node = ++nodeIndex && node && node[dir2] || (diff = nodeIndex = 0) || start.pop()) {
                          if ((ofType ? nodeName(node, name) : node.nodeType === 1) && ++diff) {
                            if (useCache) {
                              outerCache = node[expando] || (node[expando] = {});
                              outerCache[type] = [dirruns, diff];
                            }
                            if (node === elem) {
                              break;
                            }
                          }
                        }
                      }
                    }
                    diff -= last;
                    return diff === first || diff % first === 0 && diff / first >= 0;
                  }
                };
              },
              PSEUDO: function(pseudo, argument) {
                var args, fn = Expr.pseudos[pseudo] || Expr.setFilters[pseudo.toLowerCase()] || find.error("unsupported pseudo: " + pseudo);
                if (fn[expando]) {
                  return fn(argument);
                }
                if (fn.length > 1) {
                  args = [pseudo, pseudo, "", argument];
                  return Expr.setFilters.hasOwnProperty(pseudo.toLowerCase()) ? markFunction(function(seed, matches2) {
                    var idx, matched = fn(seed, argument), i2 = matched.length;
                    while (i2--) {
                      idx = indexOf.call(seed, matched[i2]);
                      seed[idx] = !(matches2[idx] = matched[i2]);
                    }
                  }) : function(elem) {
                    return fn(elem, 0, args);
                  };
                }
                return fn;
              }
            },
            pseudos: {
              not: markFunction(function(selector) {
                var input = [], results = [], matcher = compile(selector.replace(rtrimCSS, "$1"));
                return matcher[expando] ? markFunction(function(seed, matches2, _context, xml) {
                  var elem, unmatched = matcher(seed, null, xml, []), i2 = seed.length;
                  while (i2--) {
                    if (elem = unmatched[i2]) {
                      seed[i2] = !(matches2[i2] = elem);
                    }
                  }
                }) : function(elem, _context, xml) {
                  input[0] = elem;
                  matcher(input, null, xml, results);
                  input[0] = null;
                  return !results.pop();
                };
              }),
              has: markFunction(function(selector) {
                return function(elem) {
                  return find(selector, elem).length > 0;
                };
              }),
              contains: markFunction(function(text) {
                text = text.replace(runescape, funescape);
                return function(elem) {
                  return (elem.textContent || jQuery.text(elem)).indexOf(text) > -1;
                };
              }),
              lang: markFunction(function(lang) {
                if (!ridentifier.test(lang || "")) {
                  find.error("unsupported lang: " + lang);
                }
                lang = lang.replace(runescape, funescape).toLowerCase();
                return function(elem) {
                  var elemLang;
                  do {
                    if (elemLang = documentIsHTML ? elem.lang : elem.getAttribute("xml:lang") || elem.getAttribute("lang")) {
                      elemLang = elemLang.toLowerCase();
                      return elemLang === lang || elemLang.indexOf(lang + "-") === 0;
                    }
                  } while ((elem = elem.parentNode) && elem.nodeType === 1);
                  return false;
                };
              }),
              target: function(elem) {
                var hash = window2.location && window2.location.hash;
                return hash && hash.slice(1) === elem.id;
              },
              root: function(elem) {
                return elem === documentElement2;
              },
              focus: function(elem) {
                return elem === safeActiveElement() && document3.hasFocus() && !!(elem.type || elem.href || ~elem.tabIndex);
              },
              enabled: createDisabledPseudo(false),
              disabled: createDisabledPseudo(true),
              checked: function(elem) {
                return nodeName(elem, "input") && !!elem.checked || nodeName(elem, "option") && !!elem.selected;
              },
              selected: function(elem) {
                if (elem.parentNode) {
                  elem.parentNode.selectedIndex;
                }
                return elem.selected === true;
              },
              empty: function(elem) {
                for (elem = elem.firstChild; elem; elem = elem.nextSibling) {
                  if (elem.nodeType < 6) {
                    return false;
                  }
                }
                return true;
              },
              parent: function(elem) {
                return !Expr.pseudos.empty(elem);
              },
              header: function(elem) {
                return rheader.test(elem.nodeName);
              },
              input: function(elem) {
                return rinputs.test(elem.nodeName);
              },
              button: function(elem) {
                return nodeName(elem, "input") && elem.type === "button" || nodeName(elem, "button");
              },
              text: function(elem) {
                var attr;
                return nodeName(elem, "input") && elem.type === "text" && ((attr = elem.getAttribute("type")) == null || attr.toLowerCase() === "text");
              },
              first: createPositionalPseudo(function() {
                return [0];
              }),
              last: createPositionalPseudo(function(_matchIndexes, length) {
                return [length - 1];
              }),
              eq: createPositionalPseudo(function(_matchIndexes, length, argument) {
                return [argument < 0 ? argument + length : argument];
              }),
              even: createPositionalPseudo(function(matchIndexes, length) {
                var i2 = 0;
                for (; i2 < length; i2 += 2) {
                  matchIndexes.push(i2);
                }
                return matchIndexes;
              }),
              odd: createPositionalPseudo(function(matchIndexes, length) {
                var i2 = 1;
                for (; i2 < length; i2 += 2) {
                  matchIndexes.push(i2);
                }
                return matchIndexes;
              }),
              lt: createPositionalPseudo(function(matchIndexes, length, argument) {
                var i2;
                if (argument < 0) {
                  i2 = argument + length;
                } else if (argument > length) {
                  i2 = length;
                } else {
                  i2 = argument;
                }
                for (; --i2 >= 0; ) {
                  matchIndexes.push(i2);
                }
                return matchIndexes;
              }),
              gt: createPositionalPseudo(function(matchIndexes, length, argument) {
                var i2 = argument < 0 ? argument + length : argument;
                for (; ++i2 < length; ) {
                  matchIndexes.push(i2);
                }
                return matchIndexes;
              })
            }
          };
          Expr.pseudos.nth = Expr.pseudos.eq;
          for (i in { radio: true, checkbox: true, file: true, password: true, image: true }) {
            Expr.pseudos[i] = createInputPseudo(i);
          }
          for (i in { submit: true, reset: true }) {
            Expr.pseudos[i] = createButtonPseudo(i);
          }
          function setFilters() {
          }
          setFilters.prototype = Expr.filters = Expr.pseudos;
          Expr.setFilters = new setFilters();
          function tokenize(selector, parseOnly) {
            var matched, match, tokens, type, soFar, groups, preFilters, cached = tokenCache[selector + " "];
            if (cached) {
              return parseOnly ? 0 : cached.slice(0);
            }
            soFar = selector;
            groups = [];
            preFilters = Expr.preFilter;
            while (soFar) {
              if (!matched || (match = rcomma.exec(soFar))) {
                if (match) {
                  soFar = soFar.slice(match[0].length) || soFar;
                }
                groups.push(tokens = []);
              }
              matched = false;
              if (match = rleadingCombinator.exec(soFar)) {
                matched = match.shift();
                tokens.push({
                  value: matched,
                  type: match[0].replace(rtrimCSS, " ")
                });
                soFar = soFar.slice(matched.length);
              }
              for (type in Expr.filter) {
                if ((match = matchExpr[type].exec(soFar)) && (!preFilters[type] || (match = preFilters[type](match)))) {
                  matched = match.shift();
                  tokens.push({
                    value: matched,
                    type,
                    matches: match
                  });
                  soFar = soFar.slice(matched.length);
                }
              }
              if (!matched) {
                break;
              }
            }
            if (parseOnly) {
              return soFar.length;
            }
            return soFar ? find.error(selector) : tokenCache(selector, groups).slice(0);
          }
          function toSelector(tokens) {
            var i2 = 0, len = tokens.length, selector = "";
            for (; i2 < len; i2++) {
              selector += tokens[i2].value;
            }
            return selector;
          }
          function addCombinator(matcher, combinator, base) {
            var dir2 = combinator.dir, skip = combinator.next, key = skip || dir2, checkNonElements = base && key === "parentNode", doneName = done++;
            return combinator.first ? function(elem, context, xml) {
              while (elem = elem[dir2]) {
                if (elem.nodeType === 1 || checkNonElements) {
                  return matcher(elem, context, xml);
                }
              }
              return false;
            } : function(elem, context, xml) {
              var oldCache, outerCache, newCache = [dirruns, doneName];
              if (xml) {
                while (elem = elem[dir2]) {
                  if (elem.nodeType === 1 || checkNonElements) {
                    if (matcher(elem, context, xml)) {
                      return true;
                    }
                  }
                }
              } else {
                while (elem = elem[dir2]) {
                  if (elem.nodeType === 1 || checkNonElements) {
                    outerCache = elem[expando] || (elem[expando] = {});
                    if (skip && nodeName(elem, skip)) {
                      elem = elem[dir2] || elem;
                    } else if ((oldCache = outerCache[key]) && oldCache[0] === dirruns && oldCache[1] === doneName) {
                      return newCache[2] = oldCache[2];
                    } else {
                      outerCache[key] = newCache;
                      if (newCache[2] = matcher(elem, context, xml)) {
                        return true;
                      }
                    }
                  }
                }
              }
              return false;
            };
          }
          function elementMatcher(matchers) {
            return matchers.length > 1 ? function(elem, context, xml) {
              var i2 = matchers.length;
              while (i2--) {
                if (!matchers[i2](elem, context, xml)) {
                  return false;
                }
              }
              return true;
            } : matchers[0];
          }
          function multipleContexts(selector, contexts, results) {
            var i2 = 0, len = contexts.length;
            for (; i2 < len; i2++) {
              find(selector, contexts[i2], results);
            }
            return results;
          }
          function condense(unmatched, map2, filter, context, xml) {
            var elem, newUnmatched = [], i2 = 0, len = unmatched.length, mapped = map2 != null;
            for (; i2 < len; i2++) {
              if (elem = unmatched[i2]) {
                if (!filter || filter(elem, context, xml)) {
                  newUnmatched.push(elem);
                  if (mapped) {
                    map2.push(i2);
                  }
                }
              }
            }
            return newUnmatched;
          }
          function setMatcher(preFilter, selector, matcher, postFilter, postFinder, postSelector) {
            if (postFilter && !postFilter[expando]) {
              postFilter = setMatcher(postFilter);
            }
            if (postFinder && !postFinder[expando]) {
              postFinder = setMatcher(postFinder, postSelector);
            }
            return markFunction(function(seed, results, context, xml) {
              var temp2, i2, elem, matcherOut, preMap = [], postMap = [], preexisting = results.length, elems = seed || multipleContexts(
                selector || "*",
                context.nodeType ? [context] : context,
                []
              ), matcherIn = preFilter && (seed || !selector) ? condense(elems, preMap, preFilter, context, xml) : elems;
              if (matcher) {
                matcherOut = postFinder || (seed ? preFilter : preexisting || postFilter) ? [] : results;
                matcher(matcherIn, matcherOut, context, xml);
              } else {
                matcherOut = matcherIn;
              }
              if (postFilter) {
                temp2 = condense(matcherOut, postMap);
                postFilter(temp2, [], context, xml);
                i2 = temp2.length;
                while (i2--) {
                  if (elem = temp2[i2]) {
                    matcherOut[postMap[i2]] = !(matcherIn[postMap[i2]] = elem);
                  }
                }
              }
              if (seed) {
                if (postFinder || preFilter) {
                  if (postFinder) {
                    temp2 = [];
                    i2 = matcherOut.length;
                    while (i2--) {
                      if (elem = matcherOut[i2]) {
                        temp2.push(matcherIn[i2] = elem);
                      }
                    }
                    postFinder(null, matcherOut = [], temp2, xml);
                  }
                  i2 = matcherOut.length;
                  while (i2--) {
                    if ((elem = matcherOut[i2]) && (temp2 = postFinder ? indexOf.call(seed, elem) : preMap[i2]) > -1) {
                      seed[temp2] = !(results[temp2] = elem);
                    }
                  }
                }
              } else {
                matcherOut = condense(
                  matcherOut === results ? matcherOut.splice(preexisting, matcherOut.length) : matcherOut
                );
                if (postFinder) {
                  postFinder(null, results, matcherOut, xml);
                } else {
                  push2.apply(results, matcherOut);
                }
              }
            });
          }
          function matcherFromTokens(tokens) {
            var checkContext, matcher, j, len = tokens.length, leadingRelative = Expr.relative[tokens[0].type], implicitRelative = leadingRelative || Expr.relative[" "], i2 = leadingRelative ? 1 : 0, matchContext = addCombinator(function(elem) {
              return elem === checkContext;
            }, implicitRelative, true), matchAnyContext = addCombinator(function(elem) {
              return indexOf.call(checkContext, elem) > -1;
            }, implicitRelative, true), matchers = [function(elem, context, xml) {
              var ret = !leadingRelative && (xml || context != outermostContext) || ((checkContext = context).nodeType ? matchContext(elem, context, xml) : matchAnyContext(elem, context, xml));
              checkContext = null;
              return ret;
            }];
            for (; i2 < len; i2++) {
              if (matcher = Expr.relative[tokens[i2].type]) {
                matchers = [addCombinator(elementMatcher(matchers), matcher)];
              } else {
                matcher = Expr.filter[tokens[i2].type].apply(null, tokens[i2].matches);
                if (matcher[expando]) {
                  j = ++i2;
                  for (; j < len; j++) {
                    if (Expr.relative[tokens[j].type]) {
                      break;
                    }
                  }
                  return setMatcher(
                    i2 > 1 && elementMatcher(matchers),
                    i2 > 1 && toSelector(
                      tokens.slice(0, i2 - 1).concat({ value: tokens[i2 - 2].type === " " ? "*" : "" })
                    ).replace(rtrimCSS, "$1"),
                    matcher,
                    i2 < j && matcherFromTokens(tokens.slice(i2, j)),
                    j < len && matcherFromTokens(tokens = tokens.slice(j)),
                    j < len && toSelector(tokens)
                  );
                }
                matchers.push(matcher);
              }
            }
            return elementMatcher(matchers);
          }
          function matcherFromGroupMatchers(elementMatchers, setMatchers) {
            var bySet = setMatchers.length > 0, byElement = elementMatchers.length > 0, superMatcher = function(seed, context, xml, results, outermost) {
              var elem, j, matcher, matchedCount = 0, i2 = "0", unmatched = seed && [], setMatched = [], contextBackup = outermostContext, elems = seed || byElement && Expr.find.TAG("*", outermost), dirrunsUnique = dirruns += contextBackup == null ? 1 : Math.random() || 0.1, len = elems.length;
              if (outermost) {
                outermostContext = context == document3 || context || outermost;
              }
              for (; i2 !== len && (elem = elems[i2]) != null; i2++) {
                if (byElement && elem) {
                  j = 0;
                  if (!context && elem.ownerDocument != document3) {
                    setDocument(elem);
                    xml = !documentIsHTML;
                  }
                  while (matcher = elementMatchers[j++]) {
                    if (matcher(elem, context || document3, xml)) {
                      push2.call(results, elem);
                      break;
                    }
                  }
                  if (outermost) {
                    dirruns = dirrunsUnique;
                  }
                }
                if (bySet) {
                  if (elem = !matcher && elem) {
                    matchedCount--;
                  }
                  if (seed) {
                    unmatched.push(elem);
                  }
                }
              }
              matchedCount += i2;
              if (bySet && i2 !== matchedCount) {
                j = 0;
                while (matcher = setMatchers[j++]) {
                  matcher(unmatched, setMatched, context, xml);
                }
                if (seed) {
                  if (matchedCount > 0) {
                    while (i2--) {
                      if (!(unmatched[i2] || setMatched[i2])) {
                        setMatched[i2] = pop.call(results);
                      }
                    }
                  }
                  setMatched = condense(setMatched);
                }
                push2.apply(results, setMatched);
                if (outermost && !seed && setMatched.length > 0 && matchedCount + setMatchers.length > 1) {
                  jQuery.uniqueSort(results);
                }
              }
              if (outermost) {
                dirruns = dirrunsUnique;
                outermostContext = contextBackup;
              }
              return unmatched;
            };
            return bySet ? markFunction(superMatcher) : superMatcher;
          }
          function compile(selector, match) {
            var i2, setMatchers = [], elementMatchers = [], cached = compilerCache[selector + " "];
            if (!cached) {
              if (!match) {
                match = tokenize(selector);
              }
              i2 = match.length;
              while (i2--) {
                cached = matcherFromTokens(match[i2]);
                if (cached[expando]) {
                  setMatchers.push(cached);
                } else {
                  elementMatchers.push(cached);
                }
              }
              cached = compilerCache(
                selector,
                matcherFromGroupMatchers(elementMatchers, setMatchers)
              );
              cached.selector = selector;
            }
            return cached;
          }
          function select(selector, context, results, seed) {
            var i2, tokens, token, type, find2, compiled = typeof selector === "function" && selector, match = !seed && tokenize(selector = compiled.selector || selector);
            results = results || [];
            if (match.length === 1) {
              tokens = match[0] = match[0].slice(0);
              if (tokens.length > 2 && (token = tokens[0]).type === "ID" && context.nodeType === 9 && documentIsHTML && Expr.relative[tokens[1].type]) {
                context = (Expr.find.ID(
                  token.matches[0].replace(runescape, funescape),
                  context
                ) || [])[0];
                if (!context) {
                  return results;
                } else if (compiled) {
                  context = context.parentNode;
                }
                selector = selector.slice(tokens.shift().value.length);
              }
              i2 = matchExpr.needsContext.test(selector) ? 0 : tokens.length;
              while (i2--) {
                token = tokens[i2];
                if (Expr.relative[type = token.type]) {
                  break;
                }
                if (find2 = Expr.find[type]) {
                  if (seed = find2(
                    token.matches[0].replace(runescape, funescape),
                    rsibling.test(tokens[0].type) && testContext(context.parentNode) || context
                  )) {
                    tokens.splice(i2, 1);
                    selector = seed.length && toSelector(tokens);
                    if (!selector) {
                      push2.apply(results, seed);
                      return results;
                    }
                    break;
                  }
                }
              }
            }
            (compiled || compile(selector, match))(
              seed,
              context,
              !documentIsHTML,
              results,
              !context || rsibling.test(selector) && testContext(context.parentNode) || context
            );
            return results;
          }
          support.sortStable = expando.split("").sort(sortOrder).join("") === expando;
          setDocument();
          support.sortDetached = assert(function(el) {
            return el.compareDocumentPosition(document3.createElement("fieldset")) & 1;
          });
          jQuery.find = find;
          jQuery.expr[":"] = jQuery.expr.pseudos;
          jQuery.unique = jQuery.uniqueSort;
          find.compile = compile;
          find.select = select;
          find.setDocument = setDocument;
          find.escape = jQuery.escapeSelector;
          find.getText = jQuery.text;
          find.isXML = jQuery.isXMLDoc;
          find.selectors = jQuery.expr;
          find.support = jQuery.support;
          find.uniqueSort = jQuery.uniqueSort;
        })();
        var dir = function(elem, dir2, until) {
          var matched = [], truncate = until !== void 0;
          while ((elem = elem[dir2]) && elem.nodeType !== 9) {
            if (elem.nodeType === 1) {
              if (truncate && jQuery(elem).is(until)) {
                break;
              }
              matched.push(elem);
            }
          }
          return matched;
        };
        var siblings = function(n, elem) {
          var matched = [];
          for (; n; n = n.nextSibling) {
            if (n.nodeType === 1 && n !== elem) {
              matched.push(n);
            }
          }
          return matched;
        };
        var rneedsContext = jQuery.expr.match.needsContext;
        var rsingleTag = /^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i;
        function winnow(elements, qualifier, not) {
          if (isFunction(qualifier)) {
            return jQuery.grep(elements, function(elem, i) {
              return !!qualifier.call(elem, i, elem) !== not;
            });
          }
          if (qualifier.nodeType) {
            return jQuery.grep(elements, function(elem) {
              return elem === qualifier !== not;
            });
          }
          if (typeof qualifier !== "string") {
            return jQuery.grep(elements, function(elem) {
              return indexOf.call(qualifier, elem) > -1 !== not;
            });
          }
          return jQuery.filter(qualifier, elements, not);
        }
        jQuery.filter = function(expr, elems, not) {
          var elem = elems[0];
          if (not) {
            expr = ":not(" + expr + ")";
          }
          if (elems.length === 1 && elem.nodeType === 1) {
            return jQuery.find.matchesSelector(elem, expr) ? [elem] : [];
          }
          return jQuery.find.matches(expr, jQuery.grep(elems, function(elem2) {
            return elem2.nodeType === 1;
          }));
        };
        jQuery.fn.extend({
          find: function(selector) {
            var i, ret, len = this.length, self2 = this;
            if (typeof selector !== "string") {
              return this.pushStack(jQuery(selector).filter(function() {
                for (i = 0; i < len; i++) {
                  if (jQuery.contains(self2[i], this)) {
                    return true;
                  }
                }
              }));
            }
            ret = this.pushStack([]);
            for (i = 0; i < len; i++) {
              jQuery.find(selector, self2[i], ret);
            }
            return len > 1 ? jQuery.uniqueSort(ret) : ret;
          },
          filter: function(selector) {
            return this.pushStack(winnow(this, selector || [], false));
          },
          not: function(selector) {
            return this.pushStack(winnow(this, selector || [], true));
          },
          is: function(selector) {
            return !!winnow(
              this,
              typeof selector === "string" && rneedsContext.test(selector) ? jQuery(selector) : selector || [],
              false
            ).length;
          }
        });
        var rootjQuery, rquickExpr = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/, init = jQuery.fn.init = function(selector, context, root2) {
          var match, elem;
          if (!selector) {
            return this;
          }
          root2 = root2 || rootjQuery;
          if (typeof selector === "string") {
            if (selector[0] === "<" && selector[selector.length - 1] === ">" && selector.length >= 3) {
              match = [null, selector, null];
            } else {
              match = rquickExpr.exec(selector);
            }
            if (match && (match[1] || !context)) {
              if (match[1]) {
                context = context instanceof jQuery ? context[0] : context;
                jQuery.merge(this, jQuery.parseHTML(
                  match[1],
                  context && context.nodeType ? context.ownerDocument || context : document2,
                  true
                ));
                if (rsingleTag.test(match[1]) && jQuery.isPlainObject(context)) {
                  for (match in context) {
                    if (isFunction(this[match])) {
                      this[match](context[match]);
                    } else {
                      this.attr(match, context[match]);
                    }
                  }
                }
                return this;
              } else {
                elem = document2.getElementById(match[2]);
                if (elem) {
                  this[0] = elem;
                  this.length = 1;
                }
                return this;
              }
            } else if (!context || context.jquery) {
              return (context || root2).find(selector);
            } else {
              return this.constructor(context).find(selector);
            }
          } else if (selector.nodeType) {
            this[0] = selector;
            this.length = 1;
            return this;
          } else if (isFunction(selector)) {
            return root2.ready !== void 0 ? root2.ready(selector) : selector(jQuery);
          }
          return jQuery.makeArray(selector, this);
        };
        init.prototype = jQuery.fn;
        rootjQuery = jQuery(document2);
        var rparentsprev = /^(?:parents|prev(?:Until|All))/, guaranteedUnique = {
          children: true,
          contents: true,
          next: true,
          prev: true
        };
        jQuery.fn.extend({
          has: function(target) {
            var targets = jQuery(target, this), l = targets.length;
            return this.filter(function() {
              var i = 0;
              for (; i < l; i++) {
                if (jQuery.contains(this, targets[i])) {
                  return true;
                }
              }
            });
          },
          closest: function(selectors, context) {
            var cur, i = 0, l = this.length, matched = [], targets = typeof selectors !== "string" && jQuery(selectors);
            if (!rneedsContext.test(selectors)) {
              for (; i < l; i++) {
                for (cur = this[i]; cur && cur !== context; cur = cur.parentNode) {
                  if (cur.nodeType < 11 && (targets ? targets.index(cur) > -1 : cur.nodeType === 1 && jQuery.find.matchesSelector(cur, selectors))) {
                    matched.push(cur);
                    break;
                  }
                }
              }
            }
            return this.pushStack(matched.length > 1 ? jQuery.uniqueSort(matched) : matched);
          },
          index: function(elem) {
            if (!elem) {
              return this[0] && this[0].parentNode ? this.first().prevAll().length : -1;
            }
            if (typeof elem === "string") {
              return indexOf.call(jQuery(elem), this[0]);
            }
            return indexOf.call(
              this,
              elem.jquery ? elem[0] : elem
            );
          },
          add: function(selector, context) {
            return this.pushStack(
              jQuery.uniqueSort(
                jQuery.merge(this.get(), jQuery(selector, context))
              )
            );
          },
          addBack: function(selector) {
            return this.add(
              selector == null ? this.prevObject : this.prevObject.filter(selector)
            );
          }
        });
        function sibling(cur, dir2) {
          while ((cur = cur[dir2]) && cur.nodeType !== 1) {
          }
          return cur;
        }
        jQuery.each({
          parent: function(elem) {
            var parent = elem.parentNode;
            return parent && parent.nodeType !== 11 ? parent : null;
          },
          parents: function(elem) {
            return dir(elem, "parentNode");
          },
          parentsUntil: function(elem, _i, until) {
            return dir(elem, "parentNode", until);
          },
          next: function(elem) {
            return sibling(elem, "nextSibling");
          },
          prev: function(elem) {
            return sibling(elem, "previousSibling");
          },
          nextAll: function(elem) {
            return dir(elem, "nextSibling");
          },
          prevAll: function(elem) {
            return dir(elem, "previousSibling");
          },
          nextUntil: function(elem, _i, until) {
            return dir(elem, "nextSibling", until);
          },
          prevUntil: function(elem, _i, until) {
            return dir(elem, "previousSibling", until);
          },
          siblings: function(elem) {
            return siblings((elem.parentNode || {}).firstChild, elem);
          },
          children: function(elem) {
            return siblings(elem.firstChild);
          },
          contents: function(elem) {
            if (elem.contentDocument != null && getProto(elem.contentDocument)) {
              return elem.contentDocument;
            }
            if (nodeName(elem, "template")) {
              elem = elem.content || elem;
            }
            return jQuery.merge([], elem.childNodes);
          }
        }, function(name, fn) {
          jQuery.fn[name] = function(until, selector) {
            var matched = jQuery.map(this, fn, until);
            if (name.slice(-5) !== "Until") {
              selector = until;
            }
            if (selector && typeof selector === "string") {
              matched = jQuery.filter(selector, matched);
            }
            if (this.length > 1) {
              if (!guaranteedUnique[name]) {
                jQuery.uniqueSort(matched);
              }
              if (rparentsprev.test(name)) {
                matched.reverse();
              }
            }
            return this.pushStack(matched);
          };
        });
        var rnothtmlwhite = /[^\x20\t\r\n\f]+/g;
        function createOptions(options) {
          var object = {};
          jQuery.each(options.match(rnothtmlwhite) || [], function(_2, flag) {
            object[flag] = true;
          });
          return object;
        }
        jQuery.Callbacks = function(options) {
          options = typeof options === "string" ? createOptions(options) : jQuery.extend({}, options);
          var firing, memory, fired, locked, list2 = [], queue = [], firingIndex = -1, fire = function() {
            locked = locked || options.once;
            fired = firing = true;
            for (; queue.length; firingIndex = -1) {
              memory = queue.shift();
              while (++firingIndex < list2.length) {
                if (list2[firingIndex].apply(memory[0], memory[1]) === false && options.stopOnFalse) {
                  firingIndex = list2.length;
                  memory = false;
                }
              }
            }
            if (!options.memory) {
              memory = false;
            }
            firing = false;
            if (locked) {
              if (memory) {
                list2 = [];
              } else {
                list2 = "";
              }
            }
          }, self2 = {
            add: function() {
              if (list2) {
                if (memory && !firing) {
                  firingIndex = list2.length - 1;
                  queue.push(memory);
                }
                (function add2(args) {
                  jQuery.each(args, function(_2, arg) {
                    if (isFunction(arg)) {
                      if (!options.unique || !self2.has(arg)) {
                        list2.push(arg);
                      }
                    } else if (arg && arg.length && toType(arg) !== "string") {
                      add2(arg);
                    }
                  });
                })(arguments);
                if (memory && !firing) {
                  fire();
                }
              }
              return this;
            },
            remove: function() {
              jQuery.each(arguments, function(_2, arg) {
                var index;
                while ((index = jQuery.inArray(arg, list2, index)) > -1) {
                  list2.splice(index, 1);
                  if (index <= firingIndex) {
                    firingIndex--;
                  }
                }
              });
              return this;
            },
            has: function(fn) {
              return fn ? jQuery.inArray(fn, list2) > -1 : list2.length > 0;
            },
            empty: function() {
              if (list2) {
                list2 = [];
              }
              return this;
            },
            disable: function() {
              locked = queue = [];
              list2 = memory = "";
              return this;
            },
            disabled: function() {
              return !list2;
            },
            lock: function() {
              locked = queue = [];
              if (!memory && !firing) {
                list2 = memory = "";
              }
              return this;
            },
            locked: function() {
              return !!locked;
            },
            fireWith: function(context, args) {
              if (!locked) {
                args = args || [];
                args = [context, args.slice ? args.slice() : args];
                queue.push(args);
                if (!firing) {
                  fire();
                }
              }
              return this;
            },
            fire: function() {
              self2.fireWith(this, arguments);
              return this;
            },
            fired: function() {
              return !!fired;
            }
          };
          return self2;
        };
        function Identity(v) {
          return v;
        }
        function Thrower(ex) {
          throw ex;
        }
        function adoptValue(value, resolve, reject, noValue) {
          var method;
          try {
            if (value && isFunction(method = value.promise)) {
              method.call(value).done(resolve).fail(reject);
            } else if (value && isFunction(method = value.then)) {
              method.call(value, resolve, reject);
            } else {
              resolve.apply(void 0, [value].slice(noValue));
            }
          } catch (value2) {
            reject.apply(void 0, [value2]);
          }
        }
        jQuery.extend({
          Deferred: function(func) {
            var tuples = [
              [
                "notify",
                "progress",
                jQuery.Callbacks("memory"),
                jQuery.Callbacks("memory"),
                2
              ],
              [
                "resolve",
                "done",
                jQuery.Callbacks("once memory"),
                jQuery.Callbacks("once memory"),
                0,
                "resolved"
              ],
              [
                "reject",
                "fail",
                jQuery.Callbacks("once memory"),
                jQuery.Callbacks("once memory"),
                1,
                "rejected"
              ]
            ], state = "pending", promise = {
              state: function() {
                return state;
              },
              always: function() {
                deferred.done(arguments).fail(arguments);
                return this;
              },
              "catch": function(fn) {
                return promise.then(null, fn);
              },
              pipe: function() {
                var fns = arguments;
                return jQuery.Deferred(function(newDefer) {
                  jQuery.each(tuples, function(_i, tuple) {
                    var fn = isFunction(fns[tuple[4]]) && fns[tuple[4]];
                    deferred[tuple[1]](function() {
                      var returned = fn && fn.apply(this, arguments);
                      if (returned && isFunction(returned.promise)) {
                        returned.promise().progress(newDefer.notify).done(newDefer.resolve).fail(newDefer.reject);
                      } else {
                        newDefer[tuple[0] + "With"](
                          this,
                          fn ? [returned] : arguments
                        );
                      }
                    });
                  });
                  fns = null;
                }).promise();
              },
              then: function(onFulfilled, onRejected, onProgress) {
                var maxDepth = 0;
                function resolve(depth, deferred2, handler, special) {
                  return function() {
                    var that = this, args = arguments, mightThrow = function() {
                      var returned, then;
                      if (depth < maxDepth) {
                        return;
                      }
                      returned = handler.apply(that, args);
                      if (returned === deferred2.promise()) {
                        throw new TypeError("Thenable self-resolution");
                      }
                      then = returned && (typeof returned === "object" || typeof returned === "function") && returned.then;
                      if (isFunction(then)) {
                        if (special) {
                          then.call(
                            returned,
                            resolve(maxDepth, deferred2, Identity, special),
                            resolve(maxDepth, deferred2, Thrower, special)
                          );
                        } else {
                          maxDepth++;
                          then.call(
                            returned,
                            resolve(maxDepth, deferred2, Identity, special),
                            resolve(maxDepth, deferred2, Thrower, special),
                            resolve(
                              maxDepth,
                              deferred2,
                              Identity,
                              deferred2.notifyWith
                            )
                          );
                        }
                      } else {
                        if (handler !== Identity) {
                          that = void 0;
                          args = [returned];
                        }
                        (special || deferred2.resolveWith)(that, args);
                      }
                    }, process = special ? mightThrow : function() {
                      try {
                        mightThrow();
                      } catch (e) {
                        if (jQuery.Deferred.exceptionHook) {
                          jQuery.Deferred.exceptionHook(
                            e,
                            process.error
                          );
                        }
                        if (depth + 1 >= maxDepth) {
                          if (handler !== Thrower) {
                            that = void 0;
                            args = [e];
                          }
                          deferred2.rejectWith(that, args);
                        }
                      }
                    };
                    if (depth) {
                      process();
                    } else {
                      if (jQuery.Deferred.getErrorHook) {
                        process.error = jQuery.Deferred.getErrorHook();
                      } else if (jQuery.Deferred.getStackHook) {
                        process.error = jQuery.Deferred.getStackHook();
                      }
                      window2.setTimeout(process);
                    }
                  };
                }
                return jQuery.Deferred(function(newDefer) {
                  tuples[0][3].add(
                    resolve(
                      0,
                      newDefer,
                      isFunction(onProgress) ? onProgress : Identity,
                      newDefer.notifyWith
                    )
                  );
                  tuples[1][3].add(
                    resolve(
                      0,
                      newDefer,
                      isFunction(onFulfilled) ? onFulfilled : Identity
                    )
                  );
                  tuples[2][3].add(
                    resolve(
                      0,
                      newDefer,
                      isFunction(onRejected) ? onRejected : Thrower
                    )
                  );
                }).promise();
              },
              promise: function(obj) {
                return obj != null ? jQuery.extend(obj, promise) : promise;
              }
            }, deferred = {};
            jQuery.each(tuples, function(i, tuple) {
              var list2 = tuple[2], stateString = tuple[5];
              promise[tuple[1]] = list2.add;
              if (stateString) {
                list2.add(
                  function() {
                    state = stateString;
                  },
                  tuples[3 - i][2].disable,
                  tuples[3 - i][3].disable,
                  tuples[0][2].lock,
                  tuples[0][3].lock
                );
              }
              list2.add(tuple[3].fire);
              deferred[tuple[0]] = function() {
                deferred[tuple[0] + "With"](this === deferred ? void 0 : this, arguments);
                return this;
              };
              deferred[tuple[0] + "With"] = list2.fireWith;
            });
            promise.promise(deferred);
            if (func) {
              func.call(deferred, deferred);
            }
            return deferred;
          },
          when: function(singleValue) {
            var remaining = arguments.length, i = remaining, resolveContexts = Array(i), resolveValues = slice2.call(arguments), primary = jQuery.Deferred(), updateFunc = function(i2) {
              return function(value) {
                resolveContexts[i2] = this;
                resolveValues[i2] = arguments.length > 1 ? slice2.call(arguments) : value;
                if (!--remaining) {
                  primary.resolveWith(resolveContexts, resolveValues);
                }
              };
            };
            if (remaining <= 1) {
              adoptValue(
                singleValue,
                primary.done(updateFunc(i)).resolve,
                primary.reject,
                !remaining
              );
              if (primary.state() === "pending" || isFunction(resolveValues[i] && resolveValues[i].then)) {
                return primary.then();
              }
            }
            while (i--) {
              adoptValue(resolveValues[i], updateFunc(i), primary.reject);
            }
            return primary.promise();
          }
        });
        var rerrorNames = /^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;
        jQuery.Deferred.exceptionHook = function(error, asyncError) {
          if (window2.console && window2.console.warn && error && rerrorNames.test(error.name)) {
            window2.console.warn(
              "jQuery.Deferred exception: " + error.message,
              error.stack,
              asyncError
            );
          }
        };
        jQuery.readyException = function(error) {
          window2.setTimeout(function() {
            throw error;
          });
        };
        var readyList = jQuery.Deferred();
        jQuery.fn.ready = function(fn) {
          readyList.then(fn).catch(function(error) {
            jQuery.readyException(error);
          });
          return this;
        };
        jQuery.extend({
          isReady: false,
          readyWait: 1,
          ready: function(wait) {
            if (wait === true ? --jQuery.readyWait : jQuery.isReady) {
              return;
            }
            jQuery.isReady = true;
            if (wait !== true && --jQuery.readyWait > 0) {
              return;
            }
            readyList.resolveWith(document2, [jQuery]);
          }
        });
        jQuery.ready.then = readyList.then;
        function completed() {
          document2.removeEventListener("DOMContentLoaded", completed);
          window2.removeEventListener("load", completed);
          jQuery.ready();
        }
        if (document2.readyState === "complete" || document2.readyState !== "loading" && !document2.documentElement.doScroll) {
          window2.setTimeout(jQuery.ready);
        } else {
          document2.addEventListener("DOMContentLoaded", completed);
          window2.addEventListener("load", completed);
        }
        var access = function(elems, fn, key, value, chainable, emptyGet, raw) {
          var i = 0, len = elems.length, bulk = key == null;
          if (toType(key) === "object") {
            chainable = true;
            for (i in key) {
              access(elems, fn, i, key[i], true, emptyGet, raw);
            }
          } else if (value !== void 0) {
            chainable = true;
            if (!isFunction(value)) {
              raw = true;
            }
            if (bulk) {
              if (raw) {
                fn.call(elems, value);
                fn = null;
              } else {
                bulk = fn;
                fn = function(elem, _key, value2) {
                  return bulk.call(jQuery(elem), value2);
                };
              }
            }
            if (fn) {
              for (; i < len; i++) {
                fn(
                  elems[i],
                  key,
                  raw ? value : value.call(elems[i], i, fn(elems[i], key))
                );
              }
            }
          }
          if (chainable) {
            return elems;
          }
          if (bulk) {
            return fn.call(elems);
          }
          return len ? fn(elems[0], key) : emptyGet;
        };
        var rmsPrefix = /^-ms-/, rdashAlpha = /-([a-z])/g;
        function fcamelCase(_all, letter) {
          return letter.toUpperCase();
        }
        function camelCase(string) {
          return string.replace(rmsPrefix, "ms-").replace(rdashAlpha, fcamelCase);
        }
        var acceptData = function(owner) {
          return owner.nodeType === 1 || owner.nodeType === 9 || !+owner.nodeType;
        };
        function Data() {
          this.expando = jQuery.expando + Data.uid++;
        }
        Data.uid = 1;
        Data.prototype = {
          cache: function(owner) {
            var value = owner[this.expando];
            if (!value) {
              value = {};
              if (acceptData(owner)) {
                if (owner.nodeType) {
                  owner[this.expando] = value;
                } else {
                  Object.defineProperty(owner, this.expando, {
                    value,
                    configurable: true
                  });
                }
              }
            }
            return value;
          },
          set: function(owner, data, value) {
            var prop, cache = this.cache(owner);
            if (typeof data === "string") {
              cache[camelCase(data)] = value;
            } else {
              for (prop in data) {
                cache[camelCase(prop)] = data[prop];
              }
            }
            return cache;
          },
          get: function(owner, key) {
            return key === void 0 ? this.cache(owner) : owner[this.expando] && owner[this.expando][camelCase(key)];
          },
          access: function(owner, key, value) {
            if (key === void 0 || key && typeof key === "string" && value === void 0) {
              return this.get(owner, key);
            }
            this.set(owner, key, value);
            return value !== void 0 ? value : key;
          },
          remove: function(owner, key) {
            var i, cache = owner[this.expando];
            if (cache === void 0) {
              return;
            }
            if (key !== void 0) {
              if (Array.isArray(key)) {
                key = key.map(camelCase);
              } else {
                key = camelCase(key);
                key = key in cache ? [key] : key.match(rnothtmlwhite) || [];
              }
              i = key.length;
              while (i--) {
                delete cache[key[i]];
              }
            }
            if (key === void 0 || jQuery.isEmptyObject(cache)) {
              if (owner.nodeType) {
                owner[this.expando] = void 0;
              } else {
                delete owner[this.expando];
              }
            }
          },
          hasData: function(owner) {
            var cache = owner[this.expando];
            return cache !== void 0 && !jQuery.isEmptyObject(cache);
          }
        };
        var dataPriv = new Data();
        var dataUser = new Data();
        var rbrace = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/, rmultiDash = /[A-Z]/g;
        function getData(data) {
          if (data === "true") {
            return true;
          }
          if (data === "false") {
            return false;
          }
          if (data === "null") {
            return null;
          }
          if (data === +data + "") {
            return +data;
          }
          if (rbrace.test(data)) {
            return JSON.parse(data);
          }
          return data;
        }
        function dataAttr(elem, key, data) {
          var name;
          if (data === void 0 && elem.nodeType === 1) {
            name = "data-" + key.replace(rmultiDash, "-$&").toLowerCase();
            data = elem.getAttribute(name);
            if (typeof data === "string") {
              try {
                data = getData(data);
              } catch (e) {
              }
              dataUser.set(elem, key, data);
            } else {
              data = void 0;
            }
          }
          return data;
        }
        jQuery.extend({
          hasData: function(elem) {
            return dataUser.hasData(elem) || dataPriv.hasData(elem);
          },
          data: function(elem, name, data) {
            return dataUser.access(elem, name, data);
          },
          removeData: function(elem, name) {
            dataUser.remove(elem, name);
          },
          _data: function(elem, name, data) {
            return dataPriv.access(elem, name, data);
          },
          _removeData: function(elem, name) {
            dataPriv.remove(elem, name);
          }
        });
        jQuery.fn.extend({
          data: function(key, value) {
            var i, name, data, elem = this[0], attrs = elem && elem.attributes;
            if (key === void 0) {
              if (this.length) {
                data = dataUser.get(elem);
                if (elem.nodeType === 1 && !dataPriv.get(elem, "hasDataAttrs")) {
                  i = attrs.length;
                  while (i--) {
                    if (attrs[i]) {
                      name = attrs[i].name;
                      if (name.indexOf("data-") === 0) {
                        name = camelCase(name.slice(5));
                        dataAttr(elem, name, data[name]);
                      }
                    }
                  }
                  dataPriv.set(elem, "hasDataAttrs", true);
                }
              }
              return data;
            }
            if (typeof key === "object") {
              return this.each(function() {
                dataUser.set(this, key);
              });
            }
            return access(this, function(value2) {
              var data2;
              if (elem && value2 === void 0) {
                data2 = dataUser.get(elem, key);
                if (data2 !== void 0) {
                  return data2;
                }
                data2 = dataAttr(elem, key);
                if (data2 !== void 0) {
                  return data2;
                }
                return;
              }
              this.each(function() {
                dataUser.set(this, key, value2);
              });
            }, null, value, arguments.length > 1, null, true);
          },
          removeData: function(key) {
            return this.each(function() {
              dataUser.remove(this, key);
            });
          }
        });
        jQuery.extend({
          queue: function(elem, type, data) {
            var queue;
            if (elem) {
              type = (type || "fx") + "queue";
              queue = dataPriv.get(elem, type);
              if (data) {
                if (!queue || Array.isArray(data)) {
                  queue = dataPriv.access(elem, type, jQuery.makeArray(data));
                } else {
                  queue.push(data);
                }
              }
              return queue || [];
            }
          },
          dequeue: function(elem, type) {
            type = type || "fx";
            var queue = jQuery.queue(elem, type), startLength = queue.length, fn = queue.shift(), hooks = jQuery._queueHooks(elem, type), next = function() {
              jQuery.dequeue(elem, type);
            };
            if (fn === "inprogress") {
              fn = queue.shift();
              startLength--;
            }
            if (fn) {
              if (type === "fx") {
                queue.unshift("inprogress");
              }
              delete hooks.stop;
              fn.call(elem, next, hooks);
            }
            if (!startLength && hooks) {
              hooks.empty.fire();
            }
          },
          _queueHooks: function(elem, type) {
            var key = type + "queueHooks";
            return dataPriv.get(elem, key) || dataPriv.access(elem, key, {
              empty: jQuery.Callbacks("once memory").add(function() {
                dataPriv.remove(elem, [type + "queue", key]);
              })
            });
          }
        });
        jQuery.fn.extend({
          queue: function(type, data) {
            var setter = 2;
            if (typeof type !== "string") {
              data = type;
              type = "fx";
              setter--;
            }
            if (arguments.length < setter) {
              return jQuery.queue(this[0], type);
            }
            return data === void 0 ? this : this.each(function() {
              var queue = jQuery.queue(this, type, data);
              jQuery._queueHooks(this, type);
              if (type === "fx" && queue[0] !== "inprogress") {
                jQuery.dequeue(this, type);
              }
            });
          },
          dequeue: function(type) {
            return this.each(function() {
              jQuery.dequeue(this, type);
            });
          },
          clearQueue: function(type) {
            return this.queue(type || "fx", []);
          },
          promise: function(type, obj) {
            var tmp, count2 = 1, defer = jQuery.Deferred(), elements = this, i = this.length, resolve = function() {
              if (!--count2) {
                defer.resolveWith(elements, [elements]);
              }
            };
            if (typeof type !== "string") {
              obj = type;
              type = void 0;
            }
            type = type || "fx";
            while (i--) {
              tmp = dataPriv.get(elements[i], type + "queueHooks");
              if (tmp && tmp.empty) {
                count2++;
                tmp.empty.add(resolve);
              }
            }
            resolve();
            return defer.promise(obj);
          }
        });
        var pnum = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source;
        var rcssNum = new RegExp("^(?:([+-])=|)(" + pnum + ")([a-z%]*)$", "i");
        var cssExpand = ["Top", "Right", "Bottom", "Left"];
        var documentElement = document2.documentElement;
        var isAttached = function(elem) {
          return jQuery.contains(elem.ownerDocument, elem);
        }, composed = { composed: true };
        if (documentElement.getRootNode) {
          isAttached = function(elem) {
            return jQuery.contains(elem.ownerDocument, elem) || elem.getRootNode(composed) === elem.ownerDocument;
          };
        }
        var isHiddenWithinTree = function(elem, el) {
          elem = el || elem;
          return elem.style.display === "none" || elem.style.display === "" && isAttached(elem) && jQuery.css(elem, "display") === "none";
        };
        function adjustCSS(elem, prop, valueParts, tween2) {
          var adjusted, scale, maxIterations = 20, currentValue = tween2 ? function() {
            return tween2.cur();
          } : function() {
            return jQuery.css(elem, prop, "");
          }, initial = currentValue(), unit = valueParts && valueParts[3] || (jQuery.cssNumber[prop] ? "" : "px"), initialInUnit = elem.nodeType && (jQuery.cssNumber[prop] || unit !== "px" && +initial) && rcssNum.exec(jQuery.css(elem, prop));
          if (initialInUnit && initialInUnit[3] !== unit) {
            initial = initial / 2;
            unit = unit || initialInUnit[3];
            initialInUnit = +initial || 1;
            while (maxIterations--) {
              jQuery.style(elem, prop, initialInUnit + unit);
              if ((1 - scale) * (1 - (scale = currentValue() / initial || 0.5)) <= 0) {
                maxIterations = 0;
              }
              initialInUnit = initialInUnit / scale;
            }
            initialInUnit = initialInUnit * 2;
            jQuery.style(elem, prop, initialInUnit + unit);
            valueParts = valueParts || [];
          }
          if (valueParts) {
            initialInUnit = +initialInUnit || +initial || 0;
            adjusted = valueParts[1] ? initialInUnit + (valueParts[1] + 1) * valueParts[2] : +valueParts[2];
            if (tween2) {
              tween2.unit = unit;
              tween2.start = initialInUnit;
              tween2.end = adjusted;
            }
          }
          return adjusted;
        }
        var defaultDisplayMap = {};
        function getDefaultDisplay(elem) {
          var temp2, doc = elem.ownerDocument, nodeName2 = elem.nodeName, display = defaultDisplayMap[nodeName2];
          if (display) {
            return display;
          }
          temp2 = doc.body.appendChild(doc.createElement(nodeName2));
          display = jQuery.css(temp2, "display");
          temp2.parentNode.removeChild(temp2);
          if (display === "none") {
            display = "block";
          }
          defaultDisplayMap[nodeName2] = display;
          return display;
        }
        function showHide(elements, show2) {
          var display, elem, values = [], index = 0, length = elements.length;
          for (; index < length; index++) {
            elem = elements[index];
            if (!elem.style) {
              continue;
            }
            display = elem.style.display;
            if (show2) {
              if (display === "none") {
                values[index] = dataPriv.get(elem, "display") || null;
                if (!values[index]) {
                  elem.style.display = "";
                }
              }
              if (elem.style.display === "" && isHiddenWithinTree(elem)) {
                values[index] = getDefaultDisplay(elem);
              }
            } else {
              if (display !== "none") {
                values[index] = "none";
                dataPriv.set(elem, "display", display);
              }
            }
          }
          for (index = 0; index < length; index++) {
            if (values[index] != null) {
              elements[index].style.display = values[index];
            }
          }
          return elements;
        }
        jQuery.fn.extend({
          show: function() {
            return showHide(this, true);
          },
          hide: function() {
            return showHide(this);
          },
          toggle: function(state) {
            if (typeof state === "boolean") {
              return state ? this.show() : this.hide();
            }
            return this.each(function() {
              if (isHiddenWithinTree(this)) {
                jQuery(this).show();
              } else {
                jQuery(this).hide();
              }
            });
          }
        });
        var rcheckableType = /^(?:checkbox|radio)$/i;
        var rtagName = /<([a-z][^\/\0>\x20\t\r\n\f]*)/i;
        var rscriptType = /^$|^module$|\/(?:java|ecma)script/i;
        (function() {
          var fragment = document2.createDocumentFragment(), div = fragment.appendChild(document2.createElement("div")), input = document2.createElement("input");
          input.setAttribute("type", "radio");
          input.setAttribute("checked", "checked");
          input.setAttribute("name", "t");
          div.appendChild(input);
          support.checkClone = div.cloneNode(true).cloneNode(true).lastChild.checked;
          div.innerHTML = "<textarea>x</textarea>";
          support.noCloneChecked = !!div.cloneNode(true).lastChild.defaultValue;
          div.innerHTML = "<option></option>";
          support.option = !!div.lastChild;
        })();
        var wrapMap = {
          thead: [1, "<table>", "</table>"],
          col: [2, "<table><colgroup>", "</colgroup></table>"],
          tr: [2, "<table><tbody>", "</tbody></table>"],
          td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
          _default: [0, "", ""]
        };
        wrapMap.tbody = wrapMap.tfoot = wrapMap.colgroup = wrapMap.caption = wrapMap.thead;
        wrapMap.th = wrapMap.td;
        if (!support.option) {
          wrapMap.optgroup = wrapMap.option = [1, "<select multiple='multiple'>", "</select>"];
        }
        function getAll2(context, tag) {
          var ret;
          if (typeof context.getElementsByTagName !== "undefined") {
            ret = context.getElementsByTagName(tag || "*");
          } else if (typeof context.querySelectorAll !== "undefined") {
            ret = context.querySelectorAll(tag || "*");
          } else {
            ret = [];
          }
          if (tag === void 0 || tag && nodeName(context, tag)) {
            return jQuery.merge([context], ret);
          }
          return ret;
        }
        function setGlobalEval(elems, refElements) {
          var i = 0, l = elems.length;
          for (; i < l; i++) {
            dataPriv.set(
              elems[i],
              "globalEval",
              !refElements || dataPriv.get(refElements[i], "globalEval")
            );
          }
        }
        var rhtml = /<|&#?\w+;/;
        function buildFragment(elems, context, scripts, selection, ignored) {
          var elem, tmp, tag, wrap, attached, j, fragment = context.createDocumentFragment(), nodes = [], i = 0, l = elems.length;
          for (; i < l; i++) {
            elem = elems[i];
            if (elem || elem === 0) {
              if (toType(elem) === "object") {
                jQuery.merge(nodes, elem.nodeType ? [elem] : elem);
              } else if (!rhtml.test(elem)) {
                nodes.push(context.createTextNode(elem));
              } else {
                tmp = tmp || fragment.appendChild(context.createElement("div"));
                tag = (rtagName.exec(elem) || ["", ""])[1].toLowerCase();
                wrap = wrapMap[tag] || wrapMap._default;
                tmp.innerHTML = wrap[1] + jQuery.htmlPrefilter(elem) + wrap[2];
                j = wrap[0];
                while (j--) {
                  tmp = tmp.lastChild;
                }
                jQuery.merge(nodes, tmp.childNodes);
                tmp = fragment.firstChild;
                tmp.textContent = "";
              }
            }
          }
          fragment.textContent = "";
          i = 0;
          while (elem = nodes[i++]) {
            if (selection && jQuery.inArray(elem, selection) > -1) {
              if (ignored) {
                ignored.push(elem);
              }
              continue;
            }
            attached = isAttached(elem);
            tmp = getAll2(fragment.appendChild(elem), "script");
            if (attached) {
              setGlobalEval(tmp);
            }
            if (scripts) {
              j = 0;
              while (elem = tmp[j++]) {
                if (rscriptType.test(elem.type || "")) {
                  scripts.push(elem);
                }
              }
            }
          }
          return fragment;
        }
        var rtypenamespace = /^([^.]*)(?:\.(.+)|)/;
        function returnTrue() {
          return true;
        }
        function returnFalse() {
          return false;
        }
        function on(elem, types, selector, data, fn, one) {
          var origFn, type;
          if (typeof types === "object") {
            if (typeof selector !== "string") {
              data = data || selector;
              selector = void 0;
            }
            for (type in types) {
              on(elem, type, selector, data, types[type], one);
            }
            return elem;
          }
          if (data == null && fn == null) {
            fn = selector;
            data = selector = void 0;
          } else if (fn == null) {
            if (typeof selector === "string") {
              fn = data;
              data = void 0;
            } else {
              fn = data;
              data = selector;
              selector = void 0;
            }
          }
          if (fn === false) {
            fn = returnFalse;
          } else if (!fn) {
            return elem;
          }
          if (one === 1) {
            origFn = fn;
            fn = function(event) {
              jQuery().off(event);
              return origFn.apply(this, arguments);
            };
            fn.guid = origFn.guid || (origFn.guid = jQuery.guid++);
          }
          return elem.each(function() {
            jQuery.event.add(this, types, fn, data, selector);
          });
        }
        jQuery.event = {
          global: {},
          add: function(elem, types, handler, data, selector) {
            var handleObjIn, eventHandle, tmp, events, t, handleObj, special, handlers, type, namespaces, origType, elemData = dataPriv.get(elem);
            if (!acceptData(elem)) {
              return;
            }
            if (handler.handler) {
              handleObjIn = handler;
              handler = handleObjIn.handler;
              selector = handleObjIn.selector;
            }
            if (selector) {
              jQuery.find.matchesSelector(documentElement, selector);
            }
            if (!handler.guid) {
              handler.guid = jQuery.guid++;
            }
            if (!(events = elemData.events)) {
              events = elemData.events = /* @__PURE__ */ Object.create(null);
            }
            if (!(eventHandle = elemData.handle)) {
              eventHandle = elemData.handle = function(e) {
                return typeof jQuery !== "undefined" && jQuery.event.triggered !== e.type ? jQuery.event.dispatch.apply(elem, arguments) : void 0;
              };
            }
            types = (types || "").match(rnothtmlwhite) || [""];
            t = types.length;
            while (t--) {
              tmp = rtypenamespace.exec(types[t]) || [];
              type = origType = tmp[1];
              namespaces = (tmp[2] || "").split(".").sort();
              if (!type) {
                continue;
              }
              special = jQuery.event.special[type] || {};
              type = (selector ? special.delegateType : special.bindType) || type;
              special = jQuery.event.special[type] || {};
              handleObj = jQuery.extend({
                type,
                origType,
                data,
                handler,
                guid: handler.guid,
                selector,
                needsContext: selector && jQuery.expr.match.needsContext.test(selector),
                namespace: namespaces.join(".")
              }, handleObjIn);
              if (!(handlers = events[type])) {
                handlers = events[type] = [];
                handlers.delegateCount = 0;
                if (!special.setup || special.setup.call(elem, data, namespaces, eventHandle) === false) {
                  if (elem.addEventListener) {
                    elem.addEventListener(type, eventHandle);
                  }
                }
              }
              if (special.add) {
                special.add.call(elem, handleObj);
                if (!handleObj.handler.guid) {
                  handleObj.handler.guid = handler.guid;
                }
              }
              if (selector) {
                handlers.splice(handlers.delegateCount++, 0, handleObj);
              } else {
                handlers.push(handleObj);
              }
              jQuery.event.global[type] = true;
            }
          },
          remove: function(elem, types, handler, selector, mappedTypes) {
            var j, origCount, tmp, events, t, handleObj, special, handlers, type, namespaces, origType, elemData = dataPriv.hasData(elem) && dataPriv.get(elem);
            if (!elemData || !(events = elemData.events)) {
              return;
            }
            types = (types || "").match(rnothtmlwhite) || [""];
            t = types.length;
            while (t--) {
              tmp = rtypenamespace.exec(types[t]) || [];
              type = origType = tmp[1];
              namespaces = (tmp[2] || "").split(".").sort();
              if (!type) {
                for (type in events) {
                  jQuery.event.remove(elem, type + types[t], handler, selector, true);
                }
                continue;
              }
              special = jQuery.event.special[type] || {};
              type = (selector ? special.delegateType : special.bindType) || type;
              handlers = events[type] || [];
              tmp = tmp[2] && new RegExp("(^|\\.)" + namespaces.join("\\.(?:.*\\.|)") + "(\\.|$)");
              origCount = j = handlers.length;
              while (j--) {
                handleObj = handlers[j];
                if ((mappedTypes || origType === handleObj.origType) && (!handler || handler.guid === handleObj.guid) && (!tmp || tmp.test(handleObj.namespace)) && (!selector || selector === handleObj.selector || selector === "**" && handleObj.selector)) {
                  handlers.splice(j, 1);
                  if (handleObj.selector) {
                    handlers.delegateCount--;
                  }
                  if (special.remove) {
                    special.remove.call(elem, handleObj);
                  }
                }
              }
              if (origCount && !handlers.length) {
                if (!special.teardown || special.teardown.call(elem, namespaces, elemData.handle) === false) {
                  jQuery.removeEvent(elem, type, elemData.handle);
                }
                delete events[type];
              }
            }
            if (jQuery.isEmptyObject(events)) {
              dataPriv.remove(elem, "handle events");
            }
          },
          dispatch: function(nativeEvent) {
            var i, j, ret, matched, handleObj, handlerQueue, args = new Array(arguments.length), event = jQuery.event.fix(nativeEvent), handlers = (dataPriv.get(this, "events") || /* @__PURE__ */ Object.create(null))[event.type] || [], special = jQuery.event.special[event.type] || {};
            args[0] = event;
            for (i = 1; i < arguments.length; i++) {
              args[i] = arguments[i];
            }
            event.delegateTarget = this;
            if (special.preDispatch && special.preDispatch.call(this, event) === false) {
              return;
            }
            handlerQueue = jQuery.event.handlers.call(this, event, handlers);
            i = 0;
            while ((matched = handlerQueue[i++]) && !event.isPropagationStopped()) {
              event.currentTarget = matched.elem;
              j = 0;
              while ((handleObj = matched.handlers[j++]) && !event.isImmediatePropagationStopped()) {
                if (!event.rnamespace || handleObj.namespace === false || event.rnamespace.test(handleObj.namespace)) {
                  event.handleObj = handleObj;
                  event.data = handleObj.data;
                  ret = ((jQuery.event.special[handleObj.origType] || {}).handle || handleObj.handler).apply(matched.elem, args);
                  if (ret !== void 0) {
                    if ((event.result = ret) === false) {
                      event.preventDefault();
                      event.stopPropagation();
                    }
                  }
                }
              }
            }
            if (special.postDispatch) {
              special.postDispatch.call(this, event);
            }
            return event.result;
          },
          handlers: function(event, handlers) {
            var i, handleObj, sel, matchedHandlers, matchedSelectors, handlerQueue = [], delegateCount = handlers.delegateCount, cur = event.target;
            if (delegateCount && cur.nodeType && !(event.type === "click" && event.button >= 1)) {
              for (; cur !== this; cur = cur.parentNode || this) {
                if (cur.nodeType === 1 && !(event.type === "click" && cur.disabled === true)) {
                  matchedHandlers = [];
                  matchedSelectors = {};
                  for (i = 0; i < delegateCount; i++) {
                    handleObj = handlers[i];
                    sel = handleObj.selector + " ";
                    if (matchedSelectors[sel] === void 0) {
                      matchedSelectors[sel] = handleObj.needsContext ? jQuery(sel, this).index(cur) > -1 : jQuery.find(sel, this, null, [cur]).length;
                    }
                    if (matchedSelectors[sel]) {
                      matchedHandlers.push(handleObj);
                    }
                  }
                  if (matchedHandlers.length) {
                    handlerQueue.push({ elem: cur, handlers: matchedHandlers });
                  }
                }
              }
            }
            cur = this;
            if (delegateCount < handlers.length) {
              handlerQueue.push({ elem: cur, handlers: handlers.slice(delegateCount) });
            }
            return handlerQueue;
          },
          addProp: function(name, hook) {
            Object.defineProperty(jQuery.Event.prototype, name, {
              enumerable: true,
              configurable: true,
              get: isFunction(hook) ? function() {
                if (this.originalEvent) {
                  return hook(this.originalEvent);
                }
              } : function() {
                if (this.originalEvent) {
                  return this.originalEvent[name];
                }
              },
              set: function(value) {
                Object.defineProperty(this, name, {
                  enumerable: true,
                  configurable: true,
                  writable: true,
                  value
                });
              }
            });
          },
          fix: function(originalEvent) {
            return originalEvent[jQuery.expando] ? originalEvent : new jQuery.Event(originalEvent);
          },
          special: {
            load: {
              noBubble: true
            },
            click: {
              setup: function(data) {
                var el = this || data;
                if (rcheckableType.test(el.type) && el.click && nodeName(el, "input")) {
                  leverageNative(el, "click", true);
                }
                return false;
              },
              trigger: function(data) {
                var el = this || data;
                if (rcheckableType.test(el.type) && el.click && nodeName(el, "input")) {
                  leverageNative(el, "click");
                }
                return true;
              },
              _default: function(event) {
                var target = event.target;
                return rcheckableType.test(target.type) && target.click && nodeName(target, "input") && dataPriv.get(target, "click") || nodeName(target, "a");
              }
            },
            beforeunload: {
              postDispatch: function(event) {
                if (event.result !== void 0 && event.originalEvent) {
                  event.originalEvent.returnValue = event.result;
                }
              }
            }
          }
        };
        function leverageNative(el, type, isSetup) {
          if (!isSetup) {
            if (dataPriv.get(el, type) === void 0) {
              jQuery.event.add(el, type, returnTrue);
            }
            return;
          }
          dataPriv.set(el, type, false);
          jQuery.event.add(el, type, {
            namespace: false,
            handler: function(event) {
              var result, saved = dataPriv.get(this, type);
              if (event.isTrigger & 1 && this[type]) {
                if (!saved) {
                  saved = slice2.call(arguments);
                  dataPriv.set(this, type, saved);
                  this[type]();
                  result = dataPriv.get(this, type);
                  dataPriv.set(this, type, false);
                  if (saved !== result) {
                    event.stopImmediatePropagation();
                    event.preventDefault();
                    return result;
                  }
                } else if ((jQuery.event.special[type] || {}).delegateType) {
                  event.stopPropagation();
                }
              } else if (saved) {
                dataPriv.set(this, type, jQuery.event.trigger(
                  saved[0],
                  saved.slice(1),
                  this
                ));
                event.stopPropagation();
                event.isImmediatePropagationStopped = returnTrue;
              }
            }
          });
        }
        jQuery.removeEvent = function(elem, type, handle) {
          if (elem.removeEventListener) {
            elem.removeEventListener(type, handle);
          }
        };
        jQuery.Event = function(src, props) {
          if (!(this instanceof jQuery.Event)) {
            return new jQuery.Event(src, props);
          }
          if (src && src.type) {
            this.originalEvent = src;
            this.type = src.type;
            this.isDefaultPrevented = src.defaultPrevented || src.defaultPrevented === void 0 && src.returnValue === false ? returnTrue : returnFalse;
            this.target = src.target && src.target.nodeType === 3 ? src.target.parentNode : src.target;
            this.currentTarget = src.currentTarget;
            this.relatedTarget = src.relatedTarget;
          } else {
            this.type = src;
          }
          if (props) {
            jQuery.extend(this, props);
          }
          this.timeStamp = src && src.timeStamp || Date.now();
          this[jQuery.expando] = true;
        };
        jQuery.Event.prototype = {
          constructor: jQuery.Event,
          isDefaultPrevented: returnFalse,
          isPropagationStopped: returnFalse,
          isImmediatePropagationStopped: returnFalse,
          isSimulated: false,
          preventDefault: function() {
            var e = this.originalEvent;
            this.isDefaultPrevented = returnTrue;
            if (e && !this.isSimulated) {
              e.preventDefault();
            }
          },
          stopPropagation: function() {
            var e = this.originalEvent;
            this.isPropagationStopped = returnTrue;
            if (e && !this.isSimulated) {
              e.stopPropagation();
            }
          },
          stopImmediatePropagation: function() {
            var e = this.originalEvent;
            this.isImmediatePropagationStopped = returnTrue;
            if (e && !this.isSimulated) {
              e.stopImmediatePropagation();
            }
            this.stopPropagation();
          }
        };
        jQuery.each({
          altKey: true,
          bubbles: true,
          cancelable: true,
          changedTouches: true,
          ctrlKey: true,
          detail: true,
          eventPhase: true,
          metaKey: true,
          pageX: true,
          pageY: true,
          shiftKey: true,
          view: true,
          "char": true,
          code: true,
          charCode: true,
          key: true,
          keyCode: true,
          button: true,
          buttons: true,
          clientX: true,
          clientY: true,
          offsetX: true,
          offsetY: true,
          pointerId: true,
          pointerType: true,
          screenX: true,
          screenY: true,
          targetTouches: true,
          toElement: true,
          touches: true,
          which: true
        }, jQuery.event.addProp);
        jQuery.each({ focus: "focusin", blur: "focusout" }, function(type, delegateType) {
          function focusMappedHandler(nativeEvent) {
            if (document2.documentMode) {
              var handle = dataPriv.get(this, "handle"), event = jQuery.event.fix(nativeEvent);
              event.type = nativeEvent.type === "focusin" ? "focus" : "blur";
              event.isSimulated = true;
              handle(nativeEvent);
              if (event.target === event.currentTarget) {
                handle(event);
              }
            } else {
              jQuery.event.simulate(
                delegateType,
                nativeEvent.target,
                jQuery.event.fix(nativeEvent)
              );
            }
          }
          jQuery.event.special[type] = {
            setup: function() {
              var attaches;
              leverageNative(this, type, true);
              if (document2.documentMode) {
                attaches = dataPriv.get(this, delegateType);
                if (!attaches) {
                  this.addEventListener(delegateType, focusMappedHandler);
                }
                dataPriv.set(this, delegateType, (attaches || 0) + 1);
              } else {
                return false;
              }
            },
            trigger: function() {
              leverageNative(this, type);
              return true;
            },
            teardown: function() {
              var attaches;
              if (document2.documentMode) {
                attaches = dataPriv.get(this, delegateType) - 1;
                if (!attaches) {
                  this.removeEventListener(delegateType, focusMappedHandler);
                  dataPriv.remove(this, delegateType);
                } else {
                  dataPriv.set(this, delegateType, attaches);
                }
              } else {
                return false;
              }
            },
            _default: function(event) {
              return dataPriv.get(event.target, type);
            },
            delegateType
          };
          jQuery.event.special[delegateType] = {
            setup: function() {
              var doc = this.ownerDocument || this.document || this, dataHolder = document2.documentMode ? this : doc, attaches = dataPriv.get(dataHolder, delegateType);
              if (!attaches) {
                if (document2.documentMode) {
                  this.addEventListener(delegateType, focusMappedHandler);
                } else {
                  doc.addEventListener(type, focusMappedHandler, true);
                }
              }
              dataPriv.set(dataHolder, delegateType, (attaches || 0) + 1);
            },
            teardown: function() {
              var doc = this.ownerDocument || this.document || this, dataHolder = document2.documentMode ? this : doc, attaches = dataPriv.get(dataHolder, delegateType) - 1;
              if (!attaches) {
                if (document2.documentMode) {
                  this.removeEventListener(delegateType, focusMappedHandler);
                } else {
                  doc.removeEventListener(type, focusMappedHandler, true);
                }
                dataPriv.remove(dataHolder, delegateType);
              } else {
                dataPriv.set(dataHolder, delegateType, attaches);
              }
            }
          };
        });
        jQuery.each({
          mouseenter: "mouseover",
          mouseleave: "mouseout",
          pointerenter: "pointerover",
          pointerleave: "pointerout"
        }, function(orig, fix) {
          jQuery.event.special[orig] = {
            delegateType: fix,
            bindType: fix,
            handle: function(event) {
              var ret, target = this, related = event.relatedTarget, handleObj = event.handleObj;
              if (!related || related !== target && !jQuery.contains(target, related)) {
                event.type = handleObj.origType;
                ret = handleObj.handler.apply(this, arguments);
                event.type = fix;
              }
              return ret;
            }
          };
        });
        jQuery.fn.extend({
          on: function(types, selector, data, fn) {
            return on(this, types, selector, data, fn);
          },
          one: function(types, selector, data, fn) {
            return on(this, types, selector, data, fn, 1);
          },
          off: function(types, selector, fn) {
            var handleObj, type;
            if (types && types.preventDefault && types.handleObj) {
              handleObj = types.handleObj;
              jQuery(types.delegateTarget).off(
                handleObj.namespace ? handleObj.origType + "." + handleObj.namespace : handleObj.origType,
                handleObj.selector,
                handleObj.handler
              );
              return this;
            }
            if (typeof types === "object") {
              for (type in types) {
                this.off(type, selector, types[type]);
              }
              return this;
            }
            if (selector === false || typeof selector === "function") {
              fn = selector;
              selector = void 0;
            }
            if (fn === false) {
              fn = returnFalse;
            }
            return this.each(function() {
              jQuery.event.remove(this, types, fn, selector);
            });
          }
        });
        var rnoInnerhtml = /<script|<style|<link/i, rchecked = /checked\s*(?:[^=]|=\s*.checked.)/i, rcleanScript = /^\s*<!\[CDATA\[|\]\]>\s*$/g;
        function manipulationTarget(elem, content) {
          if (nodeName(elem, "table") && nodeName(content.nodeType !== 11 ? content : content.firstChild, "tr")) {
            return jQuery(elem).children("tbody")[0] || elem;
          }
          return elem;
        }
        function disableScript(elem) {
          elem.type = (elem.getAttribute("type") !== null) + "/" + elem.type;
          return elem;
        }
        function restoreScript(elem) {
          if ((elem.type || "").slice(0, 5) === "true/") {
            elem.type = elem.type.slice(5);
          } else {
            elem.removeAttribute("type");
          }
          return elem;
        }
        function cloneCopyEvent(src, dest) {
          var i, l, type, pdataOld, udataOld, udataCur, events;
          if (dest.nodeType !== 1) {
            return;
          }
          if (dataPriv.hasData(src)) {
            pdataOld = dataPriv.get(src);
            events = pdataOld.events;
            if (events) {
              dataPriv.remove(dest, "handle events");
              for (type in events) {
                for (i = 0, l = events[type].length; i < l; i++) {
                  jQuery.event.add(dest, type, events[type][i]);
                }
              }
            }
          }
          if (dataUser.hasData(src)) {
            udataOld = dataUser.access(src);
            udataCur = jQuery.extend({}, udataOld);
            dataUser.set(dest, udataCur);
          }
        }
        function fixInput(src, dest) {
          var nodeName2 = dest.nodeName.toLowerCase();
          if (nodeName2 === "input" && rcheckableType.test(src.type)) {
            dest.checked = src.checked;
          } else if (nodeName2 === "input" || nodeName2 === "textarea") {
            dest.defaultValue = src.defaultValue;
          }
        }
        function domManip(collection, args, callback, ignored) {
          args = flat(args);
          var fragment, first, scripts, hasScripts, node, doc, i = 0, l = collection.length, iNoClone = l - 1, value = args[0], valueIsFunction = isFunction(value);
          if (valueIsFunction || l > 1 && typeof value === "string" && !support.checkClone && rchecked.test(value)) {
            return collection.each(function(index) {
              var self2 = collection.eq(index);
              if (valueIsFunction) {
                args[0] = value.call(this, index, self2.html());
              }
              domManip(self2, args, callback, ignored);
            });
          }
          if (l) {
            fragment = buildFragment(args, collection[0].ownerDocument, false, collection, ignored);
            first = fragment.firstChild;
            if (fragment.childNodes.length === 1) {
              fragment = first;
            }
            if (first || ignored) {
              scripts = jQuery.map(getAll2(fragment, "script"), disableScript);
              hasScripts = scripts.length;
              for (; i < l; i++) {
                node = fragment;
                if (i !== iNoClone) {
                  node = jQuery.clone(node, true, true);
                  if (hasScripts) {
                    jQuery.merge(scripts, getAll2(node, "script"));
                  }
                }
                callback.call(collection[i], node, i);
              }
              if (hasScripts) {
                doc = scripts[scripts.length - 1].ownerDocument;
                jQuery.map(scripts, restoreScript);
                for (i = 0; i < hasScripts; i++) {
                  node = scripts[i];
                  if (rscriptType.test(node.type || "") && !dataPriv.access(node, "globalEval") && jQuery.contains(doc, node)) {
                    if (node.src && (node.type || "").toLowerCase() !== "module") {
                      if (jQuery._evalUrl && !node.noModule) {
                        jQuery._evalUrl(node.src, {
                          nonce: node.nonce || node.getAttribute("nonce")
                        }, doc);
                      }
                    } else {
                      DOMEval(node.textContent.replace(rcleanScript, ""), node, doc);
                    }
                  }
                }
              }
            }
          }
          return collection;
        }
        function remove2(elem, selector, keepData) {
          var node, nodes = selector ? jQuery.filter(selector, elem) : elem, i = 0;
          for (; (node = nodes[i]) != null; i++) {
            if (!keepData && node.nodeType === 1) {
              jQuery.cleanData(getAll2(node));
            }
            if (node.parentNode) {
              if (keepData && isAttached(node)) {
                setGlobalEval(getAll2(node, "script"));
              }
              node.parentNode.removeChild(node);
            }
          }
          return elem;
        }
        jQuery.extend({
          htmlPrefilter: function(html) {
            return html;
          },
          clone: function(elem, dataAndEvents, deepDataAndEvents) {
            var i, l, srcElements, destElements, clone = elem.cloneNode(true), inPage = isAttached(elem);
            if (!support.noCloneChecked && (elem.nodeType === 1 || elem.nodeType === 11) && !jQuery.isXMLDoc(elem)) {
              destElements = getAll2(clone);
              srcElements = getAll2(elem);
              for (i = 0, l = srcElements.length; i < l; i++) {
                fixInput(srcElements[i], destElements[i]);
              }
            }
            if (dataAndEvents) {
              if (deepDataAndEvents) {
                srcElements = srcElements || getAll2(elem);
                destElements = destElements || getAll2(clone);
                for (i = 0, l = srcElements.length; i < l; i++) {
                  cloneCopyEvent(srcElements[i], destElements[i]);
                }
              } else {
                cloneCopyEvent(elem, clone);
              }
            }
            destElements = getAll2(clone, "script");
            if (destElements.length > 0) {
              setGlobalEval(destElements, !inPage && getAll2(elem, "script"));
            }
            return clone;
          },
          cleanData: function(elems) {
            var data, elem, type, special = jQuery.event.special, i = 0;
            for (; (elem = elems[i]) !== void 0; i++) {
              if (acceptData(elem)) {
                if (data = elem[dataPriv.expando]) {
                  if (data.events) {
                    for (type in data.events) {
                      if (special[type]) {
                        jQuery.event.remove(elem, type);
                      } else {
                        jQuery.removeEvent(elem, type, data.handle);
                      }
                    }
                  }
                  elem[dataPriv.expando] = void 0;
                }
                if (elem[dataUser.expando]) {
                  elem[dataUser.expando] = void 0;
                }
              }
            }
          }
        });
        jQuery.fn.extend({
          detach: function(selector) {
            return remove2(this, selector, true);
          },
          remove: function(selector) {
            return remove2(this, selector);
          },
          text: function(value) {
            return access(this, function(value2) {
              return value2 === void 0 ? jQuery.text(this) : this.empty().each(function() {
                if (this.nodeType === 1 || this.nodeType === 11 || this.nodeType === 9) {
                  this.textContent = value2;
                }
              });
            }, null, value, arguments.length);
          },
          append: function() {
            return domManip(this, arguments, function(elem) {
              if (this.nodeType === 1 || this.nodeType === 11 || this.nodeType === 9) {
                var target = manipulationTarget(this, elem);
                target.appendChild(elem);
              }
            });
          },
          prepend: function() {
            return domManip(this, arguments, function(elem) {
              if (this.nodeType === 1 || this.nodeType === 11 || this.nodeType === 9) {
                var target = manipulationTarget(this, elem);
                target.insertBefore(elem, target.firstChild);
              }
            });
          },
          before: function() {
            return domManip(this, arguments, function(elem) {
              if (this.parentNode) {
                this.parentNode.insertBefore(elem, this);
              }
            });
          },
          after: function() {
            return domManip(this, arguments, function(elem) {
              if (this.parentNode) {
                this.parentNode.insertBefore(elem, this.nextSibling);
              }
            });
          },
          empty: function() {
            var elem, i = 0;
            for (; (elem = this[i]) != null; i++) {
              if (elem.nodeType === 1) {
                jQuery.cleanData(getAll2(elem, false));
                elem.textContent = "";
              }
            }
            return this;
          },
          clone: function(dataAndEvents, deepDataAndEvents) {
            dataAndEvents = dataAndEvents == null ? false : dataAndEvents;
            deepDataAndEvents = deepDataAndEvents == null ? dataAndEvents : deepDataAndEvents;
            return this.map(function() {
              return jQuery.clone(this, dataAndEvents, deepDataAndEvents);
            });
          },
          html: function(value) {
            return access(this, function(value2) {
              var elem = this[0] || {}, i = 0, l = this.length;
              if (value2 === void 0 && elem.nodeType === 1) {
                return elem.innerHTML;
              }
              if (typeof value2 === "string" && !rnoInnerhtml.test(value2) && !wrapMap[(rtagName.exec(value2) || ["", ""])[1].toLowerCase()]) {
                value2 = jQuery.htmlPrefilter(value2);
                try {
                  for (; i < l; i++) {
                    elem = this[i] || {};
                    if (elem.nodeType === 1) {
                      jQuery.cleanData(getAll2(elem, false));
                      elem.innerHTML = value2;
                    }
                  }
                  elem = 0;
                } catch (e) {
                }
              }
              if (elem) {
                this.empty().append(value2);
              }
            }, null, value, arguments.length);
          },
          replaceWith: function() {
            var ignored = [];
            return domManip(this, arguments, function(elem) {
              var parent = this.parentNode;
              if (jQuery.inArray(this, ignored) < 0) {
                jQuery.cleanData(getAll2(this));
                if (parent) {
                  parent.replaceChild(elem, this);
                }
              }
            }, ignored);
          }
        });
        jQuery.each({
          appendTo: "append",
          prependTo: "prepend",
          insertBefore: "before",
          insertAfter: "after",
          replaceAll: "replaceWith"
        }, function(name, original) {
          jQuery.fn[name] = function(selector) {
            var elems, ret = [], insert = jQuery(selector), last = insert.length - 1, i = 0;
            for (; i <= last; i++) {
              elems = i === last ? this : this.clone(true);
              jQuery(insert[i])[original](elems);
              push.apply(ret, elems.get());
            }
            return this.pushStack(ret);
          };
        });
        var rnumnonpx = new RegExp("^(" + pnum + ")(?!px)[a-z%]+$", "i");
        var rcustomProp = /^--/;
        var getStyles = function(elem) {
          var view = elem.ownerDocument.defaultView;
          if (!view || !view.opener) {
            view = window2;
          }
          return view.getComputedStyle(elem);
        };
        var swap = function(elem, options, callback) {
          var ret, name, old = {};
          for (name in options) {
            old[name] = elem.style[name];
            elem.style[name] = options[name];
          }
          ret = callback.call(elem);
          for (name in options) {
            elem.style[name] = old[name];
          }
          return ret;
        };
        var rboxStyle = new RegExp(cssExpand.join("|"), "i");
        (function() {
          function computeStyleTests() {
            if (!div) {
              return;
            }
            container2.style.cssText = "position:absolute;left:-11111px;width:60px;margin-top:1px;padding:0;border:0";
            div.style.cssText = "position:relative;display:block;box-sizing:border-box;overflow:scroll;margin:auto;border:1px;padding:1px;width:60%;top:1%";
            documentElement.appendChild(container2).appendChild(div);
            var divStyle = window2.getComputedStyle(div);
            pixelPositionVal = divStyle.top !== "1%";
            reliableMarginLeftVal = roundPixelMeasures(divStyle.marginLeft) === 12;
            div.style.right = "60%";
            pixelBoxStylesVal = roundPixelMeasures(divStyle.right) === 36;
            boxSizingReliableVal = roundPixelMeasures(divStyle.width) === 36;
            div.style.position = "absolute";
            scrollboxSizeVal = roundPixelMeasures(div.offsetWidth / 3) === 12;
            documentElement.removeChild(container2);
            div = null;
          }
          function roundPixelMeasures(measure) {
            return Math.round(parseFloat(measure));
          }
          var pixelPositionVal, boxSizingReliableVal, scrollboxSizeVal, pixelBoxStylesVal, reliableTrDimensionsVal, reliableMarginLeftVal, container2 = document2.createElement("div"), div = document2.createElement("div");
          if (!div.style) {
            return;
          }
          div.style.backgroundClip = "content-box";
          div.cloneNode(true).style.backgroundClip = "";
          support.clearCloneStyle = div.style.backgroundClip === "content-box";
          jQuery.extend(support, {
            boxSizingReliable: function() {
              computeStyleTests();
              return boxSizingReliableVal;
            },
            pixelBoxStyles: function() {
              computeStyleTests();
              return pixelBoxStylesVal;
            },
            pixelPosition: function() {
              computeStyleTests();
              return pixelPositionVal;
            },
            reliableMarginLeft: function() {
              computeStyleTests();
              return reliableMarginLeftVal;
            },
            scrollboxSize: function() {
              computeStyleTests();
              return scrollboxSizeVal;
            },
            reliableTrDimensions: function() {
              var table, tr, trChild, trStyle;
              if (reliableTrDimensionsVal == null) {
                table = document2.createElement("table");
                tr = document2.createElement("tr");
                trChild = document2.createElement("div");
                table.style.cssText = "position:absolute;left:-11111px;border-collapse:separate";
                tr.style.cssText = "border:1px solid";
                tr.style.height = "1px";
                trChild.style.height = "9px";
                trChild.style.display = "block";
                documentElement.appendChild(table).appendChild(tr).appendChild(trChild);
                trStyle = window2.getComputedStyle(tr);
                reliableTrDimensionsVal = parseInt(trStyle.height, 10) + parseInt(trStyle.borderTopWidth, 10) + parseInt(trStyle.borderBottomWidth, 10) === tr.offsetHeight;
                documentElement.removeChild(table);
              }
              return reliableTrDimensionsVal;
            }
          });
        })();
        function curCSS(elem, name, computed) {
          var width, minWidth, maxWidth, ret, isCustomProp = rcustomProp.test(name), style = elem.style;
          computed = computed || getStyles(elem);
          if (computed) {
            ret = computed.getPropertyValue(name) || computed[name];
            if (isCustomProp && ret) {
              ret = ret.replace(rtrimCSS, "$1") || void 0;
            }
            if (ret === "" && !isAttached(elem)) {
              ret = jQuery.style(elem, name);
            }
            if (!support.pixelBoxStyles() && rnumnonpx.test(ret) && rboxStyle.test(name)) {
              width = style.width;
              minWidth = style.minWidth;
              maxWidth = style.maxWidth;
              style.minWidth = style.maxWidth = style.width = ret;
              ret = computed.width;
              style.width = width;
              style.minWidth = minWidth;
              style.maxWidth = maxWidth;
            }
          }
          return ret !== void 0 ? ret + "" : ret;
        }
        function addGetHookIf(conditionFn, hookFn) {
          return {
            get: function() {
              if (conditionFn()) {
                delete this.get;
                return;
              }
              return (this.get = hookFn).apply(this, arguments);
            }
          };
        }
        var cssPrefixes = ["Webkit", "Moz", "ms"], emptyStyle = document2.createElement("div").style, vendorProps = {};
        function vendorPropName(name) {
          var capName = name[0].toUpperCase() + name.slice(1), i = cssPrefixes.length;
          while (i--) {
            name = cssPrefixes[i] + capName;
            if (name in emptyStyle) {
              return name;
            }
          }
        }
        function finalPropName(name) {
          var final = jQuery.cssProps[name] || vendorProps[name];
          if (final) {
            return final;
          }
          if (name in emptyStyle) {
            return name;
          }
          return vendorProps[name] = vendorPropName(name) || name;
        }
        var rdisplayswap = /^(none|table(?!-c[ea]).+)/, cssShow = { position: "absolute", visibility: "hidden", display: "block" }, cssNormalTransform = {
          letterSpacing: "0",
          fontWeight: "400"
        };
        function setPositiveNumber(_elem, value, subtract) {
          var matches = rcssNum.exec(value);
          return matches ? Math.max(0, matches[2] - (subtract || 0)) + (matches[3] || "px") : value;
        }
        function boxModelAdjustment(elem, dimension, box, isBorderBox, styles, computedVal) {
          var i = dimension === "width" ? 1 : 0, extra = 0, delta = 0, marginDelta = 0;
          if (box === (isBorderBox ? "border" : "content")) {
            return 0;
          }
          for (; i < 4; i += 2) {
            if (box === "margin") {
              marginDelta += jQuery.css(elem, box + cssExpand[i], true, styles);
            }
            if (!isBorderBox) {
              delta += jQuery.css(elem, "padding" + cssExpand[i], true, styles);
              if (box !== "padding") {
                delta += jQuery.css(elem, "border" + cssExpand[i] + "Width", true, styles);
              } else {
                extra += jQuery.css(elem, "border" + cssExpand[i] + "Width", true, styles);
              }
            } else {
              if (box === "content") {
                delta -= jQuery.css(elem, "padding" + cssExpand[i], true, styles);
              }
              if (box !== "margin") {
                delta -= jQuery.css(elem, "border" + cssExpand[i] + "Width", true, styles);
              }
            }
          }
          if (!isBorderBox && computedVal >= 0) {
            delta += Math.max(0, Math.ceil(
              elem["offset" + dimension[0].toUpperCase() + dimension.slice(1)] - computedVal - delta - extra - 0.5
            )) || 0;
          }
          return delta + marginDelta;
        }
        function getWidthOrHeight(elem, dimension, extra) {
          var styles = getStyles(elem), boxSizingNeeded = !support.boxSizingReliable() || extra, isBorderBox = boxSizingNeeded && jQuery.css(elem, "boxSizing", false, styles) === "border-box", valueIsBorderBox = isBorderBox, val = curCSS(elem, dimension, styles), offsetProp = "offset" + dimension[0].toUpperCase() + dimension.slice(1);
          if (rnumnonpx.test(val)) {
            if (!extra) {
              return val;
            }
            val = "auto";
          }
          if ((!support.boxSizingReliable() && isBorderBox || !support.reliableTrDimensions() && nodeName(elem, "tr") || val === "auto" || !parseFloat(val) && jQuery.css(elem, "display", false, styles) === "inline") && elem.getClientRects().length) {
            isBorderBox = jQuery.css(elem, "boxSizing", false, styles) === "border-box";
            valueIsBorderBox = offsetProp in elem;
            if (valueIsBorderBox) {
              val = elem[offsetProp];
            }
          }
          val = parseFloat(val) || 0;
          return val + boxModelAdjustment(
            elem,
            dimension,
            extra || (isBorderBox ? "border" : "content"),
            valueIsBorderBox,
            styles,
            val
          ) + "px";
        }
        jQuery.extend({
          cssHooks: {
            opacity: {
              get: function(elem, computed) {
                if (computed) {
                  var ret = curCSS(elem, "opacity");
                  return ret === "" ? "1" : ret;
                }
              }
            }
          },
          cssNumber: {
            animationIterationCount: true,
            aspectRatio: true,
            borderImageSlice: true,
            columnCount: true,
            flexGrow: true,
            flexShrink: true,
            fontWeight: true,
            gridArea: true,
            gridColumn: true,
            gridColumnEnd: true,
            gridColumnStart: true,
            gridRow: true,
            gridRowEnd: true,
            gridRowStart: true,
            lineHeight: true,
            opacity: true,
            order: true,
            orphans: true,
            scale: true,
            widows: true,
            zIndex: true,
            zoom: true,
            fillOpacity: true,
            floodOpacity: true,
            stopOpacity: true,
            strokeMiterlimit: true,
            strokeOpacity: true
          },
          cssProps: {},
          style: function(elem, name, value, extra) {
            if (!elem || elem.nodeType === 3 || elem.nodeType === 8 || !elem.style) {
              return;
            }
            var ret, type, hooks, origName = camelCase(name), isCustomProp = rcustomProp.test(name), style = elem.style;
            if (!isCustomProp) {
              name = finalPropName(origName);
            }
            hooks = jQuery.cssHooks[name] || jQuery.cssHooks[origName];
            if (value !== void 0) {
              type = typeof value;
              if (type === "string" && (ret = rcssNum.exec(value)) && ret[1]) {
                value = adjustCSS(elem, name, ret);
                type = "number";
              }
              if (value == null || value !== value) {
                return;
              }
              if (type === "number" && !isCustomProp) {
                value += ret && ret[3] || (jQuery.cssNumber[origName] ? "" : "px");
              }
              if (!support.clearCloneStyle && value === "" && name.indexOf("background") === 0) {
                style[name] = "inherit";
              }
              if (!hooks || !("set" in hooks) || (value = hooks.set(elem, value, extra)) !== void 0) {
                if (isCustomProp) {
                  style.setProperty(name, value);
                } else {
                  style[name] = value;
                }
              }
            } else {
              if (hooks && "get" in hooks && (ret = hooks.get(elem, false, extra)) !== void 0) {
                return ret;
              }
              return style[name];
            }
          },
          css: function(elem, name, extra, styles) {
            var val, num, hooks, origName = camelCase(name), isCustomProp = rcustomProp.test(name);
            if (!isCustomProp) {
              name = finalPropName(origName);
            }
            hooks = jQuery.cssHooks[name] || jQuery.cssHooks[origName];
            if (hooks && "get" in hooks) {
              val = hooks.get(elem, true, extra);
            }
            if (val === void 0) {
              val = curCSS(elem, name, styles);
            }
            if (val === "normal" && name in cssNormalTransform) {
              val = cssNormalTransform[name];
            }
            if (extra === "" || extra) {
              num = parseFloat(val);
              return extra === true || isFinite(num) ? num || 0 : val;
            }
            return val;
          }
        });
        jQuery.each(["height", "width"], function(_i, dimension) {
          jQuery.cssHooks[dimension] = {
            get: function(elem, computed, extra) {
              if (computed) {
                return rdisplayswap.test(jQuery.css(elem, "display")) && (!elem.getClientRects().length || !elem.getBoundingClientRect().width) ? swap(elem, cssShow, function() {
                  return getWidthOrHeight(elem, dimension, extra);
                }) : getWidthOrHeight(elem, dimension, extra);
              }
            },
            set: function(elem, value, extra) {
              var matches, styles = getStyles(elem), scrollboxSizeBuggy = !support.scrollboxSize() && styles.position === "absolute", boxSizingNeeded = scrollboxSizeBuggy || extra, isBorderBox = boxSizingNeeded && jQuery.css(elem, "boxSizing", false, styles) === "border-box", subtract = extra ? boxModelAdjustment(
                elem,
                dimension,
                extra,
                isBorderBox,
                styles
              ) : 0;
              if (isBorderBox && scrollboxSizeBuggy) {
                subtract -= Math.ceil(
                  elem["offset" + dimension[0].toUpperCase() + dimension.slice(1)] - parseFloat(styles[dimension]) - boxModelAdjustment(elem, dimension, "border", false, styles) - 0.5
                );
              }
              if (subtract && (matches = rcssNum.exec(value)) && (matches[3] || "px") !== "px") {
                elem.style[dimension] = value;
                value = jQuery.css(elem, dimension);
              }
              return setPositiveNumber(elem, value, subtract);
            }
          };
        });
        jQuery.cssHooks.marginLeft = addGetHookIf(
          support.reliableMarginLeft,
          function(elem, computed) {
            if (computed) {
              return (parseFloat(curCSS(elem, "marginLeft")) || elem.getBoundingClientRect().left - swap(elem, { marginLeft: 0 }, function() {
                return elem.getBoundingClientRect().left;
              })) + "px";
            }
          }
        );
        jQuery.each({
          margin: "",
          padding: "",
          border: "Width"
        }, function(prefix, suffix) {
          jQuery.cssHooks[prefix + suffix] = {
            expand: function(value) {
              var i = 0, expanded = {}, parts = typeof value === "string" ? value.split(" ") : [value];
              for (; i < 4; i++) {
                expanded[prefix + cssExpand[i] + suffix] = parts[i] || parts[i - 2] || parts[0];
              }
              return expanded;
            }
          };
          if (prefix !== "margin") {
            jQuery.cssHooks[prefix + suffix].set = setPositiveNumber;
          }
        });
        jQuery.fn.extend({
          css: function(name, value) {
            return access(this, function(elem, name2, value2) {
              var styles, len, map2 = {}, i = 0;
              if (Array.isArray(name2)) {
                styles = getStyles(elem);
                len = name2.length;
                for (; i < len; i++) {
                  map2[name2[i]] = jQuery.css(elem, name2[i], false, styles);
                }
                return map2;
              }
              return value2 !== void 0 ? jQuery.style(elem, name2, value2) : jQuery.css(elem, name2);
            }, name, value, arguments.length > 1);
          }
        });
        function Tween2(elem, options, prop, end, easing) {
          return new Tween2.prototype.init(elem, options, prop, end, easing);
        }
        jQuery.Tween = Tween2;
        Tween2.prototype = {
          constructor: Tween2,
          init: function(elem, options, prop, end, easing, unit) {
            this.elem = elem;
            this.prop = prop;
            this.easing = easing || jQuery.easing._default;
            this.options = options;
            this.start = this.now = this.cur();
            this.end = end;
            this.unit = unit || (jQuery.cssNumber[prop] ? "" : "px");
          },
          cur: function() {
            var hooks = Tween2.propHooks[this.prop];
            return hooks && hooks.get ? hooks.get(this) : Tween2.propHooks._default.get(this);
          },
          run: function(percent) {
            var eased, hooks = Tween2.propHooks[this.prop];
            if (this.options.duration) {
              this.pos = eased = jQuery.easing[this.easing](
                percent,
                this.options.duration * percent,
                0,
                1,
                this.options.duration
              );
            } else {
              this.pos = eased = percent;
            }
            this.now = (this.end - this.start) * eased + this.start;
            if (this.options.step) {
              this.options.step.call(this.elem, this.now, this);
            }
            if (hooks && hooks.set) {
              hooks.set(this);
            } else {
              Tween2.propHooks._default.set(this);
            }
            return this;
          }
        };
        Tween2.prototype.init.prototype = Tween2.prototype;
        Tween2.propHooks = {
          _default: {
            get: function(tween2) {
              var result;
              if (tween2.elem.nodeType !== 1 || tween2.elem[tween2.prop] != null && tween2.elem.style[tween2.prop] == null) {
                return tween2.elem[tween2.prop];
              }
              result = jQuery.css(tween2.elem, tween2.prop, "");
              return !result || result === "auto" ? 0 : result;
            },
            set: function(tween2) {
              if (jQuery.fx.step[tween2.prop]) {
                jQuery.fx.step[tween2.prop](tween2);
              } else if (tween2.elem.nodeType === 1 && (jQuery.cssHooks[tween2.prop] || tween2.elem.style[finalPropName(tween2.prop)] != null)) {
                jQuery.style(tween2.elem, tween2.prop, tween2.now + tween2.unit);
              } else {
                tween2.elem[tween2.prop] = tween2.now;
              }
            }
          }
        };
        Tween2.propHooks.scrollTop = Tween2.propHooks.scrollLeft = {
          set: function(tween2) {
            if (tween2.elem.nodeType && tween2.elem.parentNode) {
              tween2.elem[tween2.prop] = tween2.now;
            }
          }
        };
        jQuery.easing = {
          linear: function(p) {
            return p;
          },
          swing: function(p) {
            return 0.5 - Math.cos(p * Math.PI) / 2;
          },
          _default: "swing"
        };
        jQuery.fx = Tween2.prototype.init;
        jQuery.fx.step = {};
        var fxNow, inProgress, rfxtypes = /^(?:toggle|show|hide)$/, rrun = /queueHooks$/;
        function schedule() {
          if (inProgress) {
            if (document2.hidden === false && window2.requestAnimationFrame) {
              window2.requestAnimationFrame(schedule);
            } else {
              window2.setTimeout(schedule, jQuery.fx.interval);
            }
            jQuery.fx.tick();
          }
        }
        function createFxNow() {
          window2.setTimeout(function() {
            fxNow = void 0;
          });
          return fxNow = Date.now();
        }
        function genFx(type, includeWidth) {
          var which, i = 0, attrs = { height: type };
          includeWidth = includeWidth ? 1 : 0;
          for (; i < 4; i += 2 - includeWidth) {
            which = cssExpand[i];
            attrs["margin" + which] = attrs["padding" + which] = type;
          }
          if (includeWidth) {
            attrs.opacity = attrs.width = type;
          }
          return attrs;
        }
        function createTween(value, prop, animation) {
          var tween2, collection = (Animation.tweeners[prop] || []).concat(Animation.tweeners["*"]), index = 0, length = collection.length;
          for (; index < length; index++) {
            if (tween2 = collection[index].call(animation, prop, value)) {
              return tween2;
            }
          }
        }
        function defaultPrefilter(elem, props, opts) {
          var prop, value, toggle, hooks, oldfire, propTween, restoreDisplay, display, isBox = "width" in props || "height" in props, anim = this, orig = {}, style = elem.style, hidden = elem.nodeType && isHiddenWithinTree(elem), dataShow = dataPriv.get(elem, "fxshow");
          if (!opts.queue) {
            hooks = jQuery._queueHooks(elem, "fx");
            if (hooks.unqueued == null) {
              hooks.unqueued = 0;
              oldfire = hooks.empty.fire;
              hooks.empty.fire = function() {
                if (!hooks.unqueued) {
                  oldfire();
                }
              };
            }
            hooks.unqueued++;
            anim.always(function() {
              anim.always(function() {
                hooks.unqueued--;
                if (!jQuery.queue(elem, "fx").length) {
                  hooks.empty.fire();
                }
              });
            });
          }
          for (prop in props) {
            value = props[prop];
            if (rfxtypes.test(value)) {
              delete props[prop];
              toggle = toggle || value === "toggle";
              if (value === (hidden ? "hide" : "show")) {
                if (value === "show" && dataShow && dataShow[prop] !== void 0) {
                  hidden = true;
                } else {
                  continue;
                }
              }
              orig[prop] = dataShow && dataShow[prop] || jQuery.style(elem, prop);
            }
          }
          propTween = !jQuery.isEmptyObject(props);
          if (!propTween && jQuery.isEmptyObject(orig)) {
            return;
          }
          if (isBox && elem.nodeType === 1) {
            opts.overflow = [style.overflow, style.overflowX, style.overflowY];
            restoreDisplay = dataShow && dataShow.display;
            if (restoreDisplay == null) {
              restoreDisplay = dataPriv.get(elem, "display");
            }
            display = jQuery.css(elem, "display");
            if (display === "none") {
              if (restoreDisplay) {
                display = restoreDisplay;
              } else {
                showHide([elem], true);
                restoreDisplay = elem.style.display || restoreDisplay;
                display = jQuery.css(elem, "display");
                showHide([elem]);
              }
            }
            if (display === "inline" || display === "inline-block" && restoreDisplay != null) {
              if (jQuery.css(elem, "float") === "none") {
                if (!propTween) {
                  anim.done(function() {
                    style.display = restoreDisplay;
                  });
                  if (restoreDisplay == null) {
                    display = style.display;
                    restoreDisplay = display === "none" ? "" : display;
                  }
                }
                style.display = "inline-block";
              }
            }
          }
          if (opts.overflow) {
            style.overflow = "hidden";
            anim.always(function() {
              style.overflow = opts.overflow[0];
              style.overflowX = opts.overflow[1];
              style.overflowY = opts.overflow[2];
            });
          }
          propTween = false;
          for (prop in orig) {
            if (!propTween) {
              if (dataShow) {
                if ("hidden" in dataShow) {
                  hidden = dataShow.hidden;
                }
              } else {
                dataShow = dataPriv.access(elem, "fxshow", { display: restoreDisplay });
              }
              if (toggle) {
                dataShow.hidden = !hidden;
              }
              if (hidden) {
                showHide([elem], true);
              }
              anim.done(function() {
                if (!hidden) {
                  showHide([elem]);
                }
                dataPriv.remove(elem, "fxshow");
                for (prop in orig) {
                  jQuery.style(elem, prop, orig[prop]);
                }
              });
            }
            propTween = createTween(hidden ? dataShow[prop] : 0, prop, anim);
            if (!(prop in dataShow)) {
              dataShow[prop] = propTween.start;
              if (hidden) {
                propTween.end = propTween.start;
                propTween.start = 0;
              }
            }
          }
        }
        function propFilter(props, specialEasing) {
          var index, name, easing, value, hooks;
          for (index in props) {
            name = camelCase(index);
            easing = specialEasing[name];
            value = props[index];
            if (Array.isArray(value)) {
              easing = value[1];
              value = props[index] = value[0];
            }
            if (index !== name) {
              props[name] = value;
              delete props[index];
            }
            hooks = jQuery.cssHooks[name];
            if (hooks && "expand" in hooks) {
              value = hooks.expand(value);
              delete props[name];
              for (index in value) {
                if (!(index in props)) {
                  props[index] = value[index];
                  specialEasing[index] = easing;
                }
              }
            } else {
              specialEasing[name] = easing;
            }
          }
        }
        function Animation(elem, properties, options) {
          var result, stopped, index = 0, length = Animation.prefilters.length, deferred = jQuery.Deferred().always(function() {
            delete tick.elem;
          }), tick = function() {
            if (stopped) {
              return false;
            }
            var currentTime = fxNow || createFxNow(), remaining = Math.max(0, animation.startTime + animation.duration - currentTime), temp2 = remaining / animation.duration || 0, percent = 1 - temp2, index2 = 0, length2 = animation.tweens.length;
            for (; index2 < length2; index2++) {
              animation.tweens[index2].run(percent);
            }
            deferred.notifyWith(elem, [animation, percent, remaining]);
            if (percent < 1 && length2) {
              return remaining;
            }
            if (!length2) {
              deferred.notifyWith(elem, [animation, 1, 0]);
            }
            deferred.resolveWith(elem, [animation]);
            return false;
          }, animation = deferred.promise({
            elem,
            props: jQuery.extend({}, properties),
            opts: jQuery.extend(true, {
              specialEasing: {},
              easing: jQuery.easing._default
            }, options),
            originalProperties: properties,
            originalOptions: options,
            startTime: fxNow || createFxNow(),
            duration: options.duration,
            tweens: [],
            createTween: function(prop, end) {
              var tween2 = jQuery.Tween(
                elem,
                animation.opts,
                prop,
                end,
                animation.opts.specialEasing[prop] || animation.opts.easing
              );
              animation.tweens.push(tween2);
              return tween2;
            },
            stop: function(gotoEnd) {
              var index2 = 0, length2 = gotoEnd ? animation.tweens.length : 0;
              if (stopped) {
                return this;
              }
              stopped = true;
              for (; index2 < length2; index2++) {
                animation.tweens[index2].run(1);
              }
              if (gotoEnd) {
                deferred.notifyWith(elem, [animation, 1, 0]);
                deferred.resolveWith(elem, [animation, gotoEnd]);
              } else {
                deferred.rejectWith(elem, [animation, gotoEnd]);
              }
              return this;
            }
          }), props = animation.props;
          propFilter(props, animation.opts.specialEasing);
          for (; index < length; index++) {
            result = Animation.prefilters[index].call(animation, elem, props, animation.opts);
            if (result) {
              if (isFunction(result.stop)) {
                jQuery._queueHooks(animation.elem, animation.opts.queue).stop = result.stop.bind(result);
              }
              return result;
            }
          }
          jQuery.map(props, createTween, animation);
          if (isFunction(animation.opts.start)) {
            animation.opts.start.call(elem, animation);
          }
          animation.progress(animation.opts.progress).done(animation.opts.done, animation.opts.complete).fail(animation.opts.fail).always(animation.opts.always);
          jQuery.fx.timer(
            jQuery.extend(tick, {
              elem,
              anim: animation,
              queue: animation.opts.queue
            })
          );
          return animation;
        }
        jQuery.Animation = jQuery.extend(Animation, {
          tweeners: {
            "*": [function(prop, value) {
              var tween2 = this.createTween(prop, value);
              adjustCSS(tween2.elem, prop, rcssNum.exec(value), tween2);
              return tween2;
            }]
          },
          tweener: function(props, callback) {
            if (isFunction(props)) {
              callback = props;
              props = ["*"];
            } else {
              props = props.match(rnothtmlwhite);
            }
            var prop, index = 0, length = props.length;
            for (; index < length; index++) {
              prop = props[index];
              Animation.tweeners[prop] = Animation.tweeners[prop] || [];
              Animation.tweeners[prop].unshift(callback);
            }
          },
          prefilters: [defaultPrefilter],
          prefilter: function(callback, prepend) {
            if (prepend) {
              Animation.prefilters.unshift(callback);
            } else {
              Animation.prefilters.push(callback);
            }
          }
        });
        jQuery.speed = function(speed, easing, fn) {
          var opt = speed && typeof speed === "object" ? jQuery.extend({}, speed) : {
            complete: fn || !fn && easing || isFunction(speed) && speed,
            duration: speed,
            easing: fn && easing || easing && !isFunction(easing) && easing
          };
          if (jQuery.fx.off) {
            opt.duration = 0;
          } else {
            if (typeof opt.duration !== "number") {
              if (opt.duration in jQuery.fx.speeds) {
                opt.duration = jQuery.fx.speeds[opt.duration];
              } else {
                opt.duration = jQuery.fx.speeds._default;
              }
            }
          }
          if (opt.queue == null || opt.queue === true) {
            opt.queue = "fx";
          }
          opt.old = opt.complete;
          opt.complete = function() {
            if (isFunction(opt.old)) {
              opt.old.call(this);
            }
            if (opt.queue) {
              jQuery.dequeue(this, opt.queue);
            }
          };
          return opt;
        };
        jQuery.fn.extend({
          fadeTo: function(speed, to, easing, callback) {
            return this.filter(isHiddenWithinTree).css("opacity", 0).show().end().animate({ opacity: to }, speed, easing, callback);
          },
          animate: function(prop, speed, easing, callback) {
            var empty = jQuery.isEmptyObject(prop), optall = jQuery.speed(speed, easing, callback), doAnimation = function() {
              var anim = Animation(this, jQuery.extend({}, prop), optall);
              if (empty || dataPriv.get(this, "finish")) {
                anim.stop(true);
              }
            };
            doAnimation.finish = doAnimation;
            return empty || optall.queue === false ? this.each(doAnimation) : this.queue(optall.queue, doAnimation);
          },
          stop: function(type, clearQueue, gotoEnd) {
            var stopQueue = function(hooks) {
              var stop = hooks.stop;
              delete hooks.stop;
              stop(gotoEnd);
            };
            if (typeof type !== "string") {
              gotoEnd = clearQueue;
              clearQueue = type;
              type = void 0;
            }
            if (clearQueue) {
              this.queue(type || "fx", []);
            }
            return this.each(function() {
              var dequeue = true, index = type != null && type + "queueHooks", timers = jQuery.timers, data = dataPriv.get(this);
              if (index) {
                if (data[index] && data[index].stop) {
                  stopQueue(data[index]);
                }
              } else {
                for (index in data) {
                  if (data[index] && data[index].stop && rrun.test(index)) {
                    stopQueue(data[index]);
                  }
                }
              }
              for (index = timers.length; index--; ) {
                if (timers[index].elem === this && (type == null || timers[index].queue === type)) {
                  timers[index].anim.stop(gotoEnd);
                  dequeue = false;
                  timers.splice(index, 1);
                }
              }
              if (dequeue || !gotoEnd) {
                jQuery.dequeue(this, type);
              }
            });
          },
          finish: function(type) {
            if (type !== false) {
              type = type || "fx";
            }
            return this.each(function() {
              var index, data = dataPriv.get(this), queue = data[type + "queue"], hooks = data[type + "queueHooks"], timers = jQuery.timers, length = queue ? queue.length : 0;
              data.finish = true;
              jQuery.queue(this, type, []);
              if (hooks && hooks.stop) {
                hooks.stop.call(this, true);
              }
              for (index = timers.length; index--; ) {
                if (timers[index].elem === this && timers[index].queue === type) {
                  timers[index].anim.stop(true);
                  timers.splice(index, 1);
                }
              }
              for (index = 0; index < length; index++) {
                if (queue[index] && queue[index].finish) {
                  queue[index].finish.call(this);
                }
              }
              delete data.finish;
            });
          }
        });
        jQuery.each(["toggle", "show", "hide"], function(_i, name) {
          var cssFn = jQuery.fn[name];
          jQuery.fn[name] = function(speed, easing, callback) {
            return speed == null || typeof speed === "boolean" ? cssFn.apply(this, arguments) : this.animate(genFx(name, true), speed, easing, callback);
          };
        });
        jQuery.each({
          slideDown: genFx("show"),
          slideUp: genFx("hide"),
          slideToggle: genFx("toggle"),
          fadeIn: { opacity: "show" },
          fadeOut: { opacity: "hide" },
          fadeToggle: { opacity: "toggle" }
        }, function(name, props) {
          jQuery.fn[name] = function(speed, easing, callback) {
            return this.animate(props, speed, easing, callback);
          };
        });
        jQuery.timers = [];
        jQuery.fx.tick = function() {
          var timer, i = 0, timers = jQuery.timers;
          fxNow = Date.now();
          for (; i < timers.length; i++) {
            timer = timers[i];
            if (!timer() && timers[i] === timer) {
              timers.splice(i--, 1);
            }
          }
          if (!timers.length) {
            jQuery.fx.stop();
          }
          fxNow = void 0;
        };
        jQuery.fx.timer = function(timer) {
          jQuery.timers.push(timer);
          jQuery.fx.start();
        };
        jQuery.fx.interval = 13;
        jQuery.fx.start = function() {
          if (inProgress) {
            return;
          }
          inProgress = true;
          schedule();
        };
        jQuery.fx.stop = function() {
          inProgress = null;
        };
        jQuery.fx.speeds = {
          slow: 600,
          fast: 200,
          _default: 400
        };
        jQuery.fn.delay = function(time, type) {
          time = jQuery.fx ? jQuery.fx.speeds[time] || time : time;
          type = type || "fx";
          return this.queue(type, function(next, hooks) {
            var timeout = window2.setTimeout(next, time);
            hooks.stop = function() {
              window2.clearTimeout(timeout);
            };
          });
        };
        (function() {
          var input = document2.createElement("input"), select = document2.createElement("select"), opt = select.appendChild(document2.createElement("option"));
          input.type = "checkbox";
          support.checkOn = input.value !== "";
          support.optSelected = opt.selected;
          input = document2.createElement("input");
          input.value = "t";
          input.type = "radio";
          support.radioValue = input.value === "t";
        })();
        var boolHook, attrHandle = jQuery.expr.attrHandle;
        jQuery.fn.extend({
          attr: function(name, value) {
            return access(this, jQuery.attr, name, value, arguments.length > 1);
          },
          removeAttr: function(name) {
            return this.each(function() {
              jQuery.removeAttr(this, name);
            });
          }
        });
        jQuery.extend({
          attr: function(elem, name, value) {
            var ret, hooks, nType = elem.nodeType;
            if (nType === 3 || nType === 8 || nType === 2) {
              return;
            }
            if (typeof elem.getAttribute === "undefined") {
              return jQuery.prop(elem, name, value);
            }
            if (nType !== 1 || !jQuery.isXMLDoc(elem)) {
              hooks = jQuery.attrHooks[name.toLowerCase()] || (jQuery.expr.match.bool.test(name) ? boolHook : void 0);
            }
            if (value !== void 0) {
              if (value === null) {
                jQuery.removeAttr(elem, name);
                return;
              }
              if (hooks && "set" in hooks && (ret = hooks.set(elem, value, name)) !== void 0) {
                return ret;
              }
              elem.setAttribute(name, value + "");
              return value;
            }
            if (hooks && "get" in hooks && (ret = hooks.get(elem, name)) !== null) {
              return ret;
            }
            ret = jQuery.find.attr(elem, name);
            return ret == null ? void 0 : ret;
          },
          attrHooks: {
            type: {
              set: function(elem, value) {
                if (!support.radioValue && value === "radio" && nodeName(elem, "input")) {
                  var val = elem.value;
                  elem.setAttribute("type", value);
                  if (val) {
                    elem.value = val;
                  }
                  return value;
                }
              }
            }
          },
          removeAttr: function(elem, value) {
            var name, i = 0, attrNames = value && value.match(rnothtmlwhite);
            if (attrNames && elem.nodeType === 1) {
              while (name = attrNames[i++]) {
                elem.removeAttribute(name);
              }
            }
          }
        });
        boolHook = {
          set: function(elem, value, name) {
            if (value === false) {
              jQuery.removeAttr(elem, name);
            } else {
              elem.setAttribute(name, name);
            }
            return name;
          }
        };
        jQuery.each(jQuery.expr.match.bool.source.match(/\w+/g), function(_i, name) {
          var getter = attrHandle[name] || jQuery.find.attr;
          attrHandle[name] = function(elem, name2, isXML) {
            var ret, handle, lowercaseName = name2.toLowerCase();
            if (!isXML) {
              handle = attrHandle[lowercaseName];
              attrHandle[lowercaseName] = ret;
              ret = getter(elem, name2, isXML) != null ? lowercaseName : null;
              attrHandle[lowercaseName] = handle;
            }
            return ret;
          };
        });
        var rfocusable = /^(?:input|select|textarea|button)$/i, rclickable = /^(?:a|area)$/i;
        jQuery.fn.extend({
          prop: function(name, value) {
            return access(this, jQuery.prop, name, value, arguments.length > 1);
          },
          removeProp: function(name) {
            return this.each(function() {
              delete this[jQuery.propFix[name] || name];
            });
          }
        });
        jQuery.extend({
          prop: function(elem, name, value) {
            var ret, hooks, nType = elem.nodeType;
            if (nType === 3 || nType === 8 || nType === 2) {
              return;
            }
            if (nType !== 1 || !jQuery.isXMLDoc(elem)) {
              name = jQuery.propFix[name] || name;
              hooks = jQuery.propHooks[name];
            }
            if (value !== void 0) {
              if (hooks && "set" in hooks && (ret = hooks.set(elem, value, name)) !== void 0) {
                return ret;
              }
              return elem[name] = value;
            }
            if (hooks && "get" in hooks && (ret = hooks.get(elem, name)) !== null) {
              return ret;
            }
            return elem[name];
          },
          propHooks: {
            tabIndex: {
              get: function(elem) {
                var tabindex = jQuery.find.attr(elem, "tabindex");
                if (tabindex) {
                  return parseInt(tabindex, 10);
                }
                if (rfocusable.test(elem.nodeName) || rclickable.test(elem.nodeName) && elem.href) {
                  return 0;
                }
                return -1;
              }
            }
          },
          propFix: {
            "for": "htmlFor",
            "class": "className"
          }
        });
        if (!support.optSelected) {
          jQuery.propHooks.selected = {
            get: function(elem) {
              var parent = elem.parentNode;
              if (parent && parent.parentNode) {
                parent.parentNode.selectedIndex;
              }
              return null;
            },
            set: function(elem) {
              var parent = elem.parentNode;
              if (parent) {
                parent.selectedIndex;
                if (parent.parentNode) {
                  parent.parentNode.selectedIndex;
                }
              }
            }
          };
        }
        jQuery.each([
          "tabIndex",
          "readOnly",
          "maxLength",
          "cellSpacing",
          "cellPadding",
          "rowSpan",
          "colSpan",
          "useMap",
          "frameBorder",
          "contentEditable"
        ], function() {
          jQuery.propFix[this.toLowerCase()] = this;
        });
        function stripAndCollapse(value) {
          var tokens = value.match(rnothtmlwhite) || [];
          return tokens.join(" ");
        }
        function getClass(elem) {
          return elem.getAttribute && elem.getAttribute("class") || "";
        }
        function classesToArray(value) {
          if (Array.isArray(value)) {
            return value;
          }
          if (typeof value === "string") {
            return value.match(rnothtmlwhite) || [];
          }
          return [];
        }
        jQuery.fn.extend({
          addClass: function(value) {
            var classNames, cur, curValue, className, i, finalValue;
            if (isFunction(value)) {
              return this.each(function(j) {
                jQuery(this).addClass(value.call(this, j, getClass(this)));
              });
            }
            classNames = classesToArray(value);
            if (classNames.length) {
              return this.each(function() {
                curValue = getClass(this);
                cur = this.nodeType === 1 && " " + stripAndCollapse(curValue) + " ";
                if (cur) {
                  for (i = 0; i < classNames.length; i++) {
                    className = classNames[i];
                    if (cur.indexOf(" " + className + " ") < 0) {
                      cur += className + " ";
                    }
                  }
                  finalValue = stripAndCollapse(cur);
                  if (curValue !== finalValue) {
                    this.setAttribute("class", finalValue);
                  }
                }
              });
            }
            return this;
          },
          removeClass: function(value) {
            var classNames, cur, curValue, className, i, finalValue;
            if (isFunction(value)) {
              return this.each(function(j) {
                jQuery(this).removeClass(value.call(this, j, getClass(this)));
              });
            }
            if (!arguments.length) {
              return this.attr("class", "");
            }
            classNames = classesToArray(value);
            if (classNames.length) {
              return this.each(function() {
                curValue = getClass(this);
                cur = this.nodeType === 1 && " " + stripAndCollapse(curValue) + " ";
                if (cur) {
                  for (i = 0; i < classNames.length; i++) {
                    className = classNames[i];
                    while (cur.indexOf(" " + className + " ") > -1) {
                      cur = cur.replace(" " + className + " ", " ");
                    }
                  }
                  finalValue = stripAndCollapse(cur);
                  if (curValue !== finalValue) {
                    this.setAttribute("class", finalValue);
                  }
                }
              });
            }
            return this;
          },
          toggleClass: function(value, stateVal) {
            var classNames, className, i, self2, type = typeof value, isValidValue = type === "string" || Array.isArray(value);
            if (isFunction(value)) {
              return this.each(function(i2) {
                jQuery(this).toggleClass(
                  value.call(this, i2, getClass(this), stateVal),
                  stateVal
                );
              });
            }
            if (typeof stateVal === "boolean" && isValidValue) {
              return stateVal ? this.addClass(value) : this.removeClass(value);
            }
            classNames = classesToArray(value);
            return this.each(function() {
              if (isValidValue) {
                self2 = jQuery(this);
                for (i = 0; i < classNames.length; i++) {
                  className = classNames[i];
                  if (self2.hasClass(className)) {
                    self2.removeClass(className);
                  } else {
                    self2.addClass(className);
                  }
                }
              } else if (value === void 0 || type === "boolean") {
                className = getClass(this);
                if (className) {
                  dataPriv.set(this, "__className__", className);
                }
                if (this.setAttribute) {
                  this.setAttribute(
                    "class",
                    className || value === false ? "" : dataPriv.get(this, "__className__") || ""
                  );
                }
              }
            });
          },
          hasClass: function(selector) {
            var className, elem, i = 0;
            className = " " + selector + " ";
            while (elem = this[i++]) {
              if (elem.nodeType === 1 && (" " + stripAndCollapse(getClass(elem)) + " ").indexOf(className) > -1) {
                return true;
              }
            }
            return false;
          }
        });
        var rreturn = /\r/g;
        jQuery.fn.extend({
          val: function(value) {
            var hooks, ret, valueIsFunction, elem = this[0];
            if (!arguments.length) {
              if (elem) {
                hooks = jQuery.valHooks[elem.type] || jQuery.valHooks[elem.nodeName.toLowerCase()];
                if (hooks && "get" in hooks && (ret = hooks.get(elem, "value")) !== void 0) {
                  return ret;
                }
                ret = elem.value;
                if (typeof ret === "string") {
                  return ret.replace(rreturn, "");
                }
                return ret == null ? "" : ret;
              }
              return;
            }
            valueIsFunction = isFunction(value);
            return this.each(function(i) {
              var val;
              if (this.nodeType !== 1) {
                return;
              }
              if (valueIsFunction) {
                val = value.call(this, i, jQuery(this).val());
              } else {
                val = value;
              }
              if (val == null) {
                val = "";
              } else if (typeof val === "number") {
                val += "";
              } else if (Array.isArray(val)) {
                val = jQuery.map(val, function(value2) {
                  return value2 == null ? "" : value2 + "";
                });
              }
              hooks = jQuery.valHooks[this.type] || jQuery.valHooks[this.nodeName.toLowerCase()];
              if (!hooks || !("set" in hooks) || hooks.set(this, val, "value") === void 0) {
                this.value = val;
              }
            });
          }
        });
        jQuery.extend({
          valHooks: {
            option: {
              get: function(elem) {
                var val = jQuery.find.attr(elem, "value");
                return val != null ? val : stripAndCollapse(jQuery.text(elem));
              }
            },
            select: {
              get: function(elem) {
                var value, option, i, options = elem.options, index = elem.selectedIndex, one = elem.type === "select-one", values = one ? null : [], max5 = one ? index + 1 : options.length;
                if (index < 0) {
                  i = max5;
                } else {
                  i = one ? index : 0;
                }
                for (; i < max5; i++) {
                  option = options[i];
                  if ((option.selected || i === index) && !option.disabled && (!option.parentNode.disabled || !nodeName(option.parentNode, "optgroup"))) {
                    value = jQuery(option).val();
                    if (one) {
                      return value;
                    }
                    values.push(value);
                  }
                }
                return values;
              },
              set: function(elem, value) {
                var optionSet, option, options = elem.options, values = jQuery.makeArray(value), i = options.length;
                while (i--) {
                  option = options[i];
                  if (option.selected = jQuery.inArray(jQuery.valHooks.option.get(option), values) > -1) {
                    optionSet = true;
                  }
                }
                if (!optionSet) {
                  elem.selectedIndex = -1;
                }
                return values;
              }
            }
          }
        });
        jQuery.each(["radio", "checkbox"], function() {
          jQuery.valHooks[this] = {
            set: function(elem, value) {
              if (Array.isArray(value)) {
                return elem.checked = jQuery.inArray(jQuery(elem).val(), value) > -1;
              }
            }
          };
          if (!support.checkOn) {
            jQuery.valHooks[this].get = function(elem) {
              return elem.getAttribute("value") === null ? "on" : elem.value;
            };
          }
        });
        var location = window2.location;
        var nonce = { guid: Date.now() };
        var rquery = /\?/;
        jQuery.parseXML = function(data) {
          var xml, parserErrorElem;
          if (!data || typeof data !== "string") {
            return null;
          }
          try {
            xml = new window2.DOMParser().parseFromString(data, "text/xml");
          } catch (e) {
          }
          parserErrorElem = xml && xml.getElementsByTagName("parsererror")[0];
          if (!xml || parserErrorElem) {
            jQuery.error("Invalid XML: " + (parserErrorElem ? jQuery.map(parserErrorElem.childNodes, function(el) {
              return el.textContent;
            }).join("\n") : data));
          }
          return xml;
        };
        var rfocusMorph = /^(?:focusinfocus|focusoutblur)$/, stopPropagationCallback = function(e) {
          e.stopPropagation();
        };
        jQuery.extend(jQuery.event, {
          trigger: function(event, data, elem, onlyHandlers) {
            var i, cur, tmp, bubbleType, ontype, handle, special, lastElement, eventPath = [elem || document2], type = hasOwn.call(event, "type") ? event.type : event, namespaces = hasOwn.call(event, "namespace") ? event.namespace.split(".") : [];
            cur = lastElement = tmp = elem = elem || document2;
            if (elem.nodeType === 3 || elem.nodeType === 8) {
              return;
            }
            if (rfocusMorph.test(type + jQuery.event.triggered)) {
              return;
            }
            if (type.indexOf(".") > -1) {
              namespaces = type.split(".");
              type = namespaces.shift();
              namespaces.sort();
            }
            ontype = type.indexOf(":") < 0 && "on" + type;
            event = event[jQuery.expando] ? event : new jQuery.Event(type, typeof event === "object" && event);
            event.isTrigger = onlyHandlers ? 2 : 3;
            event.namespace = namespaces.join(".");
            event.rnamespace = event.namespace ? new RegExp("(^|\\.)" + namespaces.join("\\.(?:.*\\.|)") + "(\\.|$)") : null;
            event.result = void 0;
            if (!event.target) {
              event.target = elem;
            }
            data = data == null ? [event] : jQuery.makeArray(data, [event]);
            special = jQuery.event.special[type] || {};
            if (!onlyHandlers && special.trigger && special.trigger.apply(elem, data) === false) {
              return;
            }
            if (!onlyHandlers && !special.noBubble && !isWindow(elem)) {
              bubbleType = special.delegateType || type;
              if (!rfocusMorph.test(bubbleType + type)) {
                cur = cur.parentNode;
              }
              for (; cur; cur = cur.parentNode) {
                eventPath.push(cur);
                tmp = cur;
              }
              if (tmp === (elem.ownerDocument || document2)) {
                eventPath.push(tmp.defaultView || tmp.parentWindow || window2);
              }
            }
            i = 0;
            while ((cur = eventPath[i++]) && !event.isPropagationStopped()) {
              lastElement = cur;
              event.type = i > 1 ? bubbleType : special.bindType || type;
              handle = (dataPriv.get(cur, "events") || /* @__PURE__ */ Object.create(null))[event.type] && dataPriv.get(cur, "handle");
              if (handle) {
                handle.apply(cur, data);
              }
              handle = ontype && cur[ontype];
              if (handle && handle.apply && acceptData(cur)) {
                event.result = handle.apply(cur, data);
                if (event.result === false) {
                  event.preventDefault();
                }
              }
            }
            event.type = type;
            if (!onlyHandlers && !event.isDefaultPrevented()) {
              if ((!special._default || special._default.apply(eventPath.pop(), data) === false) && acceptData(elem)) {
                if (ontype && isFunction(elem[type]) && !isWindow(elem)) {
                  tmp = elem[ontype];
                  if (tmp) {
                    elem[ontype] = null;
                  }
                  jQuery.event.triggered = type;
                  if (event.isPropagationStopped()) {
                    lastElement.addEventListener(type, stopPropagationCallback);
                  }
                  elem[type]();
                  if (event.isPropagationStopped()) {
                    lastElement.removeEventListener(type, stopPropagationCallback);
                  }
                  jQuery.event.triggered = void 0;
                  if (tmp) {
                    elem[ontype] = tmp;
                  }
                }
              }
            }
            return event.result;
          },
          simulate: function(type, elem, event) {
            var e = jQuery.extend(
              new jQuery.Event(),
              event,
              {
                type,
                isSimulated: true
              }
            );
            jQuery.event.trigger(e, null, elem);
          }
        });
        jQuery.fn.extend({
          trigger: function(type, data) {
            return this.each(function() {
              jQuery.event.trigger(type, data, this);
            });
          },
          triggerHandler: function(type, data) {
            var elem = this[0];
            if (elem) {
              return jQuery.event.trigger(type, data, elem, true);
            }
          }
        });
        var rbracket = /\[\]$/, rCRLF = /\r?\n/g, rsubmitterTypes = /^(?:submit|button|image|reset|file)$/i, rsubmittable = /^(?:input|select|textarea|keygen)/i;
        function buildParams(prefix, obj, traditional, add2) {
          var name;
          if (Array.isArray(obj)) {
            jQuery.each(obj, function(i, v) {
              if (traditional || rbracket.test(prefix)) {
                add2(prefix, v);
              } else {
                buildParams(
                  prefix + "[" + (typeof v === "object" && v != null ? i : "") + "]",
                  v,
                  traditional,
                  add2
                );
              }
            });
          } else if (!traditional && toType(obj) === "object") {
            for (name in obj) {
              buildParams(prefix + "[" + name + "]", obj[name], traditional, add2);
            }
          } else {
            add2(prefix, obj);
          }
        }
        jQuery.param = function(a, traditional) {
          var prefix, s = [], add2 = function(key, valueOrFunction) {
            var value = isFunction(valueOrFunction) ? valueOrFunction() : valueOrFunction;
            s[s.length] = encodeURIComponent(key) + "=" + encodeURIComponent(value == null ? "" : value);
          };
          if (a == null) {
            return "";
          }
          if (Array.isArray(a) || a.jquery && !jQuery.isPlainObject(a)) {
            jQuery.each(a, function() {
              add2(this.name, this.value);
            });
          } else {
            for (prefix in a) {
              buildParams(prefix, a[prefix], traditional, add2);
            }
          }
          return s.join("&");
        };
        jQuery.fn.extend({
          serialize: function() {
            return jQuery.param(this.serializeArray());
          },
          serializeArray: function() {
            return this.map(function() {
              var elements = jQuery.prop(this, "elements");
              return elements ? jQuery.makeArray(elements) : this;
            }).filter(function() {
              var type = this.type;
              return this.name && !jQuery(this).is(":disabled") && rsubmittable.test(this.nodeName) && !rsubmitterTypes.test(type) && (this.checked || !rcheckableType.test(type));
            }).map(function(_i, elem) {
              var val = jQuery(this).val();
              if (val == null) {
                return null;
              }
              if (Array.isArray(val)) {
                return jQuery.map(val, function(val2) {
                  return { name: elem.name, value: val2.replace(rCRLF, "\r\n") };
                });
              }
              return { name: elem.name, value: val.replace(rCRLF, "\r\n") };
            }).get();
          }
        });
        var r20 = /%20/g, rhash = /#.*$/, rantiCache = /([?&])_=[^&]*/, rheaders = /^(.*?):[ \t]*([^\r\n]*)$/mg, rlocalProtocol = /^(?:about|app|app-storage|.+-extension|file|res|widget):$/, rnoContent = /^(?:GET|HEAD)$/, rprotocol = /^\/\//, prefilters = {}, transports = {}, allTypes = "*/".concat("*"), originAnchor = document2.createElement("a");
        originAnchor.href = location.href;
        function addToPrefiltersOrTransports(structure) {
          return function(dataTypeExpression, func) {
            if (typeof dataTypeExpression !== "string") {
              func = dataTypeExpression;
              dataTypeExpression = "*";
            }
            var dataType, i = 0, dataTypes = dataTypeExpression.toLowerCase().match(rnothtmlwhite) || [];
            if (isFunction(func)) {
              while (dataType = dataTypes[i++]) {
                if (dataType[0] === "+") {
                  dataType = dataType.slice(1) || "*";
                  (structure[dataType] = structure[dataType] || []).unshift(func);
                } else {
                  (structure[dataType] = structure[dataType] || []).push(func);
                }
              }
            }
          };
        }
        function inspectPrefiltersOrTransports(structure, options, originalOptions, jqXHR) {
          var inspected = {}, seekingTransport = structure === transports;
          function inspect(dataType) {
            var selected;
            inspected[dataType] = true;
            jQuery.each(structure[dataType] || [], function(_2, prefilterOrFactory) {
              var dataTypeOrTransport = prefilterOrFactory(options, originalOptions, jqXHR);
              if (typeof dataTypeOrTransport === "string" && !seekingTransport && !inspected[dataTypeOrTransport]) {
                options.dataTypes.unshift(dataTypeOrTransport);
                inspect(dataTypeOrTransport);
                return false;
              } else if (seekingTransport) {
                return !(selected = dataTypeOrTransport);
              }
            });
            return selected;
          }
          return inspect(options.dataTypes[0]) || !inspected["*"] && inspect("*");
        }
        function ajaxExtend(target, src) {
          var key, deep, flatOptions = jQuery.ajaxSettings.flatOptions || {};
          for (key in src) {
            if (src[key] !== void 0) {
              (flatOptions[key] ? target : deep || (deep = {}))[key] = src[key];
            }
          }
          if (deep) {
            jQuery.extend(true, target, deep);
          }
          return target;
        }
        function ajaxHandleResponses(s, jqXHR, responses) {
          var ct, type, finalDataType, firstDataType, contents = s.contents, dataTypes = s.dataTypes;
          while (dataTypes[0] === "*") {
            dataTypes.shift();
            if (ct === void 0) {
              ct = s.mimeType || jqXHR.getResponseHeader("Content-Type");
            }
          }
          if (ct) {
            for (type in contents) {
              if (contents[type] && contents[type].test(ct)) {
                dataTypes.unshift(type);
                break;
              }
            }
          }
          if (dataTypes[0] in responses) {
            finalDataType = dataTypes[0];
          } else {
            for (type in responses) {
              if (!dataTypes[0] || s.converters[type + " " + dataTypes[0]]) {
                finalDataType = type;
                break;
              }
              if (!firstDataType) {
                firstDataType = type;
              }
            }
            finalDataType = finalDataType || firstDataType;
          }
          if (finalDataType) {
            if (finalDataType !== dataTypes[0]) {
              dataTypes.unshift(finalDataType);
            }
            return responses[finalDataType];
          }
        }
        function ajaxConvert(s, response, jqXHR, isSuccess) {
          var conv2, current2, conv, tmp, prev, converters = {}, dataTypes = s.dataTypes.slice();
          if (dataTypes[1]) {
            for (conv in s.converters) {
              converters[conv.toLowerCase()] = s.converters[conv];
            }
          }
          current2 = dataTypes.shift();
          while (current2) {
            if (s.responseFields[current2]) {
              jqXHR[s.responseFields[current2]] = response;
            }
            if (!prev && isSuccess && s.dataFilter) {
              response = s.dataFilter(response, s.dataType);
            }
            prev = current2;
            current2 = dataTypes.shift();
            if (current2) {
              if (current2 === "*") {
                current2 = prev;
              } else if (prev !== "*" && prev !== current2) {
                conv = converters[prev + " " + current2] || converters["* " + current2];
                if (!conv) {
                  for (conv2 in converters) {
                    tmp = conv2.split(" ");
                    if (tmp[1] === current2) {
                      conv = converters[prev + " " + tmp[0]] || converters["* " + tmp[0]];
                      if (conv) {
                        if (conv === true) {
                          conv = converters[conv2];
                        } else if (converters[conv2] !== true) {
                          current2 = tmp[0];
                          dataTypes.unshift(tmp[1]);
                        }
                        break;
                      }
                    }
                  }
                }
                if (conv !== true) {
                  if (conv && s.throws) {
                    response = conv(response);
                  } else {
                    try {
                      response = conv(response);
                    } catch (e) {
                      return {
                        state: "parsererror",
                        error: conv ? e : "No conversion from " + prev + " to " + current2
                      };
                    }
                  }
                }
              }
            }
          }
          return { state: "success", data: response };
        }
        jQuery.extend({
          active: 0,
          lastModified: {},
          etag: {},
          ajaxSettings: {
            url: location.href,
            type: "GET",
            isLocal: rlocalProtocol.test(location.protocol),
            global: true,
            processData: true,
            async: true,
            contentType: "application/x-www-form-urlencoded; charset=UTF-8",
            accepts: {
              "*": allTypes,
              text: "text/plain",
              html: "text/html",
              xml: "application/xml, text/xml",
              json: "application/json, text/javascript"
            },
            contents: {
              xml: /\bxml\b/,
              html: /\bhtml/,
              json: /\bjson\b/
            },
            responseFields: {
              xml: "responseXML",
              text: "responseText",
              json: "responseJSON"
            },
            converters: {
              "* text": String,
              "text html": true,
              "text json": JSON.parse,
              "text xml": jQuery.parseXML
            },
            flatOptions: {
              url: true,
              context: true
            }
          },
          ajaxSetup: function(target, settings) {
            return settings ? ajaxExtend(ajaxExtend(target, jQuery.ajaxSettings), settings) : ajaxExtend(jQuery.ajaxSettings, target);
          },
          ajaxPrefilter: addToPrefiltersOrTransports(prefilters),
          ajaxTransport: addToPrefiltersOrTransports(transports),
          ajax: function(url2, options) {
            if (typeof url2 === "object") {
              options = url2;
              url2 = void 0;
            }
            options = options || {};
            var transport, cacheURL, responseHeadersString, responseHeaders, timeoutTimer, urlAnchor, completed2, fireGlobals, i, uncached, s = jQuery.ajaxSetup({}, options), callbackContext = s.context || s, globalEventContext = s.context && (callbackContext.nodeType || callbackContext.jquery) ? jQuery(callbackContext) : jQuery.event, deferred = jQuery.Deferred(), completeDeferred = jQuery.Callbacks("once memory"), statusCode = s.statusCode || {}, requestHeaders = {}, requestHeadersNames = {}, strAbort = "canceled", jqXHR = {
              readyState: 0,
              getResponseHeader: function(key) {
                var match;
                if (completed2) {
                  if (!responseHeaders) {
                    responseHeaders = {};
                    while (match = rheaders.exec(responseHeadersString)) {
                      responseHeaders[match[1].toLowerCase() + " "] = (responseHeaders[match[1].toLowerCase() + " "] || []).concat(match[2]);
                    }
                  }
                  match = responseHeaders[key.toLowerCase() + " "];
                }
                return match == null ? null : match.join(", ");
              },
              getAllResponseHeaders: function() {
                return completed2 ? responseHeadersString : null;
              },
              setRequestHeader: function(name, value) {
                if (completed2 == null) {
                  name = requestHeadersNames[name.toLowerCase()] = requestHeadersNames[name.toLowerCase()] || name;
                  requestHeaders[name] = value;
                }
                return this;
              },
              overrideMimeType: function(type) {
                if (completed2 == null) {
                  s.mimeType = type;
                }
                return this;
              },
              statusCode: function(map2) {
                var code;
                if (map2) {
                  if (completed2) {
                    jqXHR.always(map2[jqXHR.status]);
                  } else {
                    for (code in map2) {
                      statusCode[code] = [statusCode[code], map2[code]];
                    }
                  }
                }
                return this;
              },
              abort: function(statusText) {
                var finalText = statusText || strAbort;
                if (transport) {
                  transport.abort(finalText);
                }
                done(0, finalText);
                return this;
              }
            };
            deferred.promise(jqXHR);
            s.url = ((url2 || s.url || location.href) + "").replace(rprotocol, location.protocol + "//");
            s.type = options.method || options.type || s.method || s.type;
            s.dataTypes = (s.dataType || "*").toLowerCase().match(rnothtmlwhite) || [""];
            if (s.crossDomain == null) {
              urlAnchor = document2.createElement("a");
              try {
                urlAnchor.href = s.url;
                urlAnchor.href = urlAnchor.href;
                s.crossDomain = originAnchor.protocol + "//" + originAnchor.host !== urlAnchor.protocol + "//" + urlAnchor.host;
              } catch (e) {
                s.crossDomain = true;
              }
            }
            if (s.data && s.processData && typeof s.data !== "string") {
              s.data = jQuery.param(s.data, s.traditional);
            }
            inspectPrefiltersOrTransports(prefilters, s, options, jqXHR);
            if (completed2) {
              return jqXHR;
            }
            fireGlobals = jQuery.event && s.global;
            if (fireGlobals && jQuery.active++ === 0) {
              jQuery.event.trigger("ajaxStart");
            }
            s.type = s.type.toUpperCase();
            s.hasContent = !rnoContent.test(s.type);
            cacheURL = s.url.replace(rhash, "");
            if (!s.hasContent) {
              uncached = s.url.slice(cacheURL.length);
              if (s.data && (s.processData || typeof s.data === "string")) {
                cacheURL += (rquery.test(cacheURL) ? "&" : "?") + s.data;
                delete s.data;
              }
              if (s.cache === false) {
                cacheURL = cacheURL.replace(rantiCache, "$1");
                uncached = (rquery.test(cacheURL) ? "&" : "?") + "_=" + nonce.guid++ + uncached;
              }
              s.url = cacheURL + uncached;
            } else if (s.data && s.processData && (s.contentType || "").indexOf("application/x-www-form-urlencoded") === 0) {
              s.data = s.data.replace(r20, "+");
            }
            if (s.ifModified) {
              if (jQuery.lastModified[cacheURL]) {
                jqXHR.setRequestHeader("If-Modified-Since", jQuery.lastModified[cacheURL]);
              }
              if (jQuery.etag[cacheURL]) {
                jqXHR.setRequestHeader("If-None-Match", jQuery.etag[cacheURL]);
              }
            }
            if (s.data && s.hasContent && s.contentType !== false || options.contentType) {
              jqXHR.setRequestHeader("Content-Type", s.contentType);
            }
            jqXHR.setRequestHeader(
              "Accept",
              s.dataTypes[0] && s.accepts[s.dataTypes[0]] ? s.accepts[s.dataTypes[0]] + (s.dataTypes[0] !== "*" ? ", " + allTypes + "; q=0.01" : "") : s.accepts["*"]
            );
            for (i in s.headers) {
              jqXHR.setRequestHeader(i, s.headers[i]);
            }
            if (s.beforeSend && (s.beforeSend.call(callbackContext, jqXHR, s) === false || completed2)) {
              return jqXHR.abort();
            }
            strAbort = "abort";
            completeDeferred.add(s.complete);
            jqXHR.done(s.success);
            jqXHR.fail(s.error);
            transport = inspectPrefiltersOrTransports(transports, s, options, jqXHR);
            if (!transport) {
              done(-1, "No Transport");
            } else {
              jqXHR.readyState = 1;
              if (fireGlobals) {
                globalEventContext.trigger("ajaxSend", [jqXHR, s]);
              }
              if (completed2) {
                return jqXHR;
              }
              if (s.async && s.timeout > 0) {
                timeoutTimer = window2.setTimeout(function() {
                  jqXHR.abort("timeout");
                }, s.timeout);
              }
              try {
                completed2 = false;
                transport.send(requestHeaders, done);
              } catch (e) {
                if (completed2) {
                  throw e;
                }
                done(-1, e);
              }
            }
            function done(status, nativeStatusText, responses, headers) {
              var isSuccess, success, error, response, modified, statusText = nativeStatusText;
              if (completed2) {
                return;
              }
              completed2 = true;
              if (timeoutTimer) {
                window2.clearTimeout(timeoutTimer);
              }
              transport = void 0;
              responseHeadersString = headers || "";
              jqXHR.readyState = status > 0 ? 4 : 0;
              isSuccess = status >= 200 && status < 300 || status === 304;
              if (responses) {
                response = ajaxHandleResponses(s, jqXHR, responses);
              }
              if (!isSuccess && jQuery.inArray("script", s.dataTypes) > -1 && jQuery.inArray("json", s.dataTypes) < 0) {
                s.converters["text script"] = function() {
                };
              }
              response = ajaxConvert(s, response, jqXHR, isSuccess);
              if (isSuccess) {
                if (s.ifModified) {
                  modified = jqXHR.getResponseHeader("Last-Modified");
                  if (modified) {
                    jQuery.lastModified[cacheURL] = modified;
                  }
                  modified = jqXHR.getResponseHeader("etag");
                  if (modified) {
                    jQuery.etag[cacheURL] = modified;
                  }
                }
                if (status === 204 || s.type === "HEAD") {
                  statusText = "nocontent";
                } else if (status === 304) {
                  statusText = "notmodified";
                } else {
                  statusText = response.state;
                  success = response.data;
                  error = response.error;
                  isSuccess = !error;
                }
              } else {
                error = statusText;
                if (status || !statusText) {
                  statusText = "error";
                  if (status < 0) {
                    status = 0;
                  }
                }
              }
              jqXHR.status = status;
              jqXHR.statusText = (nativeStatusText || statusText) + "";
              if (isSuccess) {
                deferred.resolveWith(callbackContext, [success, statusText, jqXHR]);
              } else {
                deferred.rejectWith(callbackContext, [jqXHR, statusText, error]);
              }
              jqXHR.statusCode(statusCode);
              statusCode = void 0;
              if (fireGlobals) {
                globalEventContext.trigger(
                  isSuccess ? "ajaxSuccess" : "ajaxError",
                  [jqXHR, s, isSuccess ? success : error]
                );
              }
              completeDeferred.fireWith(callbackContext, [jqXHR, statusText]);
              if (fireGlobals) {
                globalEventContext.trigger("ajaxComplete", [jqXHR, s]);
                if (!--jQuery.active) {
                  jQuery.event.trigger("ajaxStop");
                }
              }
            }
            return jqXHR;
          },
          getJSON: function(url2, data, callback) {
            return jQuery.get(url2, data, callback, "json");
          },
          getScript: function(url2, callback) {
            return jQuery.get(url2, void 0, callback, "script");
          }
        });
        jQuery.each(["get", "post"], function(_i, method) {
          jQuery[method] = function(url2, data, callback, type) {
            if (isFunction(data)) {
              type = type || callback;
              callback = data;
              data = void 0;
            }
            return jQuery.ajax(jQuery.extend({
              url: url2,
              type: method,
              dataType: type,
              data,
              success: callback
            }, jQuery.isPlainObject(url2) && url2));
          };
        });
        jQuery.ajaxPrefilter(function(s) {
          var i;
          for (i in s.headers) {
            if (i.toLowerCase() === "content-type") {
              s.contentType = s.headers[i] || "";
            }
          }
        });
        jQuery._evalUrl = function(url2, options, doc) {
          return jQuery.ajax({
            url: url2,
            type: "GET",
            dataType: "script",
            cache: true,
            async: false,
            global: false,
            converters: {
              "text script": function() {
              }
            },
            dataFilter: function(response) {
              jQuery.globalEval(response, options, doc);
            }
          });
        };
        jQuery.fn.extend({
          wrapAll: function(html) {
            var wrap;
            if (this[0]) {
              if (isFunction(html)) {
                html = html.call(this[0]);
              }
              wrap = jQuery(html, this[0].ownerDocument).eq(0).clone(true);
              if (this[0].parentNode) {
                wrap.insertBefore(this[0]);
              }
              wrap.map(function() {
                var elem = this;
                while (elem.firstElementChild) {
                  elem = elem.firstElementChild;
                }
                return elem;
              }).append(this);
            }
            return this;
          },
          wrapInner: function(html) {
            if (isFunction(html)) {
              return this.each(function(i) {
                jQuery(this).wrapInner(html.call(this, i));
              });
            }
            return this.each(function() {
              var self2 = jQuery(this), contents = self2.contents();
              if (contents.length) {
                contents.wrapAll(html);
              } else {
                self2.append(html);
              }
            });
          },
          wrap: function(html) {
            var htmlIsFunction = isFunction(html);
            return this.each(function(i) {
              jQuery(this).wrapAll(htmlIsFunction ? html.call(this, i) : html);
            });
          },
          unwrap: function(selector) {
            this.parent(selector).not("body").each(function() {
              jQuery(this).replaceWith(this.childNodes);
            });
            return this;
          }
        });
        jQuery.expr.pseudos.hidden = function(elem) {
          return !jQuery.expr.pseudos.visible(elem);
        };
        jQuery.expr.pseudos.visible = function(elem) {
          return !!(elem.offsetWidth || elem.offsetHeight || elem.getClientRects().length);
        };
        jQuery.ajaxSettings.xhr = function() {
          try {
            return new window2.XMLHttpRequest();
          } catch (e) {
          }
        };
        var xhrSuccessStatus = {
          0: 200,
          1223: 204
        }, xhrSupported = jQuery.ajaxSettings.xhr();
        support.cors = !!xhrSupported && "withCredentials" in xhrSupported;
        support.ajax = xhrSupported = !!xhrSupported;
        jQuery.ajaxTransport(function(options) {
          var callback, errorCallback;
          if (support.cors || xhrSupported && !options.crossDomain) {
            return {
              send: function(headers, complete) {
                var i, xhr2 = options.xhr();
                xhr2.open(
                  options.type,
                  options.url,
                  options.async,
                  options.username,
                  options.password
                );
                if (options.xhrFields) {
                  for (i in options.xhrFields) {
                    xhr2[i] = options.xhrFields[i];
                  }
                }
                if (options.mimeType && xhr2.overrideMimeType) {
                  xhr2.overrideMimeType(options.mimeType);
                }
                if (!options.crossDomain && !headers["X-Requested-With"]) {
                  headers["X-Requested-With"] = "XMLHttpRequest";
                }
                for (i in headers) {
                  xhr2.setRequestHeader(i, headers[i]);
                }
                callback = function(type) {
                  return function() {
                    if (callback) {
                      callback = errorCallback = xhr2.onload = xhr2.onerror = xhr2.onabort = xhr2.ontimeout = xhr2.onreadystatechange = null;
                      if (type === "abort") {
                        xhr2.abort();
                      } else if (type === "error") {
                        if (typeof xhr2.status !== "number") {
                          complete(0, "error");
                        } else {
                          complete(
                            xhr2.status,
                            xhr2.statusText
                          );
                        }
                      } else {
                        complete(
                          xhrSuccessStatus[xhr2.status] || xhr2.status,
                          xhr2.statusText,
                          (xhr2.responseType || "text") !== "text" || typeof xhr2.responseText !== "string" ? { binary: xhr2.response } : { text: xhr2.responseText },
                          xhr2.getAllResponseHeaders()
                        );
                      }
                    }
                  };
                };
                xhr2.onload = callback();
                errorCallback = xhr2.onerror = xhr2.ontimeout = callback("error");
                if (xhr2.onabort !== void 0) {
                  xhr2.onabort = errorCallback;
                } else {
                  xhr2.onreadystatechange = function() {
                    if (xhr2.readyState === 4) {
                      window2.setTimeout(function() {
                        if (callback) {
                          errorCallback();
                        }
                      });
                    }
                  };
                }
                callback = callback("abort");
                try {
                  xhr2.send(options.hasContent && options.data || null);
                } catch (e) {
                  if (callback) {
                    throw e;
                  }
                }
              },
              abort: function() {
                if (callback) {
                  callback();
                }
              }
            };
          }
        });
        jQuery.ajaxPrefilter(function(s) {
          if (s.crossDomain) {
            s.contents.script = false;
          }
        });
        jQuery.ajaxSetup({
          accepts: {
            script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"
          },
          contents: {
            script: /\b(?:java|ecma)script\b/
          },
          converters: {
            "text script": function(text) {
              jQuery.globalEval(text);
              return text;
            }
          }
        });
        jQuery.ajaxPrefilter("script", function(s) {
          if (s.cache === void 0) {
            s.cache = false;
          }
          if (s.crossDomain) {
            s.type = "GET";
          }
        });
        jQuery.ajaxTransport("script", function(s) {
          if (s.crossDomain || s.scriptAttrs) {
            var script, callback;
            return {
              send: function(_2, complete) {
                script = jQuery("<script>").attr(s.scriptAttrs || {}).prop({ charset: s.scriptCharset, src: s.url }).on("load error", callback = function(evt) {
                  script.remove();
                  callback = null;
                  if (evt) {
                    complete(evt.type === "error" ? 404 : 200, evt.type);
                  }
                });
                document2.head.appendChild(script[0]);
              },
              abort: function() {
                if (callback) {
                  callback();
                }
              }
            };
          }
        });
        var oldCallbacks = [], rjsonp = /(=)\?(?=&|$)|\?\?/;
        jQuery.ajaxSetup({
          jsonp: "callback",
          jsonpCallback: function() {
            var callback = oldCallbacks.pop() || jQuery.expando + "_" + nonce.guid++;
            this[callback] = true;
            return callback;
          }
        });
        jQuery.ajaxPrefilter("json jsonp", function(s, originalSettings, jqXHR) {
          var callbackName, overwritten, responseContainer, jsonProp = s.jsonp !== false && (rjsonp.test(s.url) ? "url" : typeof s.data === "string" && (s.contentType || "").indexOf("application/x-www-form-urlencoded") === 0 && rjsonp.test(s.data) && "data");
          if (jsonProp || s.dataTypes[0] === "jsonp") {
            callbackName = s.jsonpCallback = isFunction(s.jsonpCallback) ? s.jsonpCallback() : s.jsonpCallback;
            if (jsonProp) {
              s[jsonProp] = s[jsonProp].replace(rjsonp, "$1" + callbackName);
            } else if (s.jsonp !== false) {
              s.url += (rquery.test(s.url) ? "&" : "?") + s.jsonp + "=" + callbackName;
            }
            s.converters["script json"] = function() {
              if (!responseContainer) {
                jQuery.error(callbackName + " was not called");
              }
              return responseContainer[0];
            };
            s.dataTypes[0] = "json";
            overwritten = window2[callbackName];
            window2[callbackName] = function() {
              responseContainer = arguments;
            };
            jqXHR.always(function() {
              if (overwritten === void 0) {
                jQuery(window2).removeProp(callbackName);
              } else {
                window2[callbackName] = overwritten;
              }
              if (s[callbackName]) {
                s.jsonpCallback = originalSettings.jsonpCallback;
                oldCallbacks.push(callbackName);
              }
              if (responseContainer && isFunction(overwritten)) {
                overwritten(responseContainer[0]);
              }
              responseContainer = overwritten = void 0;
            });
            return "script";
          }
        });
        support.createHTMLDocument = function() {
          var body = document2.implementation.createHTMLDocument("").body;
          body.innerHTML = "<form></form><form></form>";
          return body.childNodes.length === 2;
        }();
        jQuery.parseHTML = function(data, context, keepScripts) {
          if (typeof data !== "string") {
            return [];
          }
          if (typeof context === "boolean") {
            keepScripts = context;
            context = false;
          }
          var base, parsed, scripts;
          if (!context) {
            if (support.createHTMLDocument) {
              context = document2.implementation.createHTMLDocument("");
              base = context.createElement("base");
              base.href = document2.location.href;
              context.head.appendChild(base);
            } else {
              context = document2;
            }
          }
          parsed = rsingleTag.exec(data);
          scripts = !keepScripts && [];
          if (parsed) {
            return [context.createElement(parsed[1])];
          }
          parsed = buildFragment([data], context, scripts);
          if (scripts && scripts.length) {
            jQuery(scripts).remove();
          }
          return jQuery.merge([], parsed.childNodes);
        };
        jQuery.fn.load = function(url2, params, callback) {
          var selector, type, response, self2 = this, off = url2.indexOf(" ");
          if (off > -1) {
            selector = stripAndCollapse(url2.slice(off));
            url2 = url2.slice(0, off);
          }
          if (isFunction(params)) {
            callback = params;
            params = void 0;
          } else if (params && typeof params === "object") {
            type = "POST";
          }
          if (self2.length > 0) {
            jQuery.ajax({
              url: url2,
              type: type || "GET",
              dataType: "html",
              data: params
            }).done(function(responseText) {
              response = arguments;
              self2.html(selector ? jQuery("<div>").append(jQuery.parseHTML(responseText)).find(selector) : responseText);
            }).always(callback && function(jqXHR, status) {
              self2.each(function() {
                callback.apply(this, response || [jqXHR.responseText, status, jqXHR]);
              });
            });
          }
          return this;
        };
        jQuery.expr.pseudos.animated = function(elem) {
          return jQuery.grep(jQuery.timers, function(fn) {
            return elem === fn.elem;
          }).length;
        };
        jQuery.offset = {
          setOffset: function(elem, options, i) {
            var curPosition, curLeft, curCSSTop, curTop, curOffset, curCSSLeft, calculatePosition, position = jQuery.css(elem, "position"), curElem = jQuery(elem), props = {};
            if (position === "static") {
              elem.style.position = "relative";
            }
            curOffset = curElem.offset();
            curCSSTop = jQuery.css(elem, "top");
            curCSSLeft = jQuery.css(elem, "left");
            calculatePosition = (position === "absolute" || position === "fixed") && (curCSSTop + curCSSLeft).indexOf("auto") > -1;
            if (calculatePosition) {
              curPosition = curElem.position();
              curTop = curPosition.top;
              curLeft = curPosition.left;
            } else {
              curTop = parseFloat(curCSSTop) || 0;
              curLeft = parseFloat(curCSSLeft) || 0;
            }
            if (isFunction(options)) {
              options = options.call(elem, i, jQuery.extend({}, curOffset));
            }
            if (options.top != null) {
              props.top = options.top - curOffset.top + curTop;
            }
            if (options.left != null) {
              props.left = options.left - curOffset.left + curLeft;
            }
            if ("using" in options) {
              options.using.call(elem, props);
            } else {
              curElem.css(props);
            }
          }
        };
        jQuery.fn.extend({
          offset: function(options) {
            if (arguments.length) {
              return options === void 0 ? this : this.each(function(i) {
                jQuery.offset.setOffset(this, options, i);
              });
            }
            var rect, win, elem = this[0];
            if (!elem) {
              return;
            }
            if (!elem.getClientRects().length) {
              return { top: 0, left: 0 };
            }
            rect = elem.getBoundingClientRect();
            win = elem.ownerDocument.defaultView;
            return {
              top: rect.top + win.pageYOffset,
              left: rect.left + win.pageXOffset
            };
          },
          position: function() {
            if (!this[0]) {
              return;
            }
            var offsetParent, offset, doc, elem = this[0], parentOffset = { top: 0, left: 0 };
            if (jQuery.css(elem, "position") === "fixed") {
              offset = elem.getBoundingClientRect();
            } else {
              offset = this.offset();
              doc = elem.ownerDocument;
              offsetParent = elem.offsetParent || doc.documentElement;
              while (offsetParent && (offsetParent === doc.body || offsetParent === doc.documentElement) && jQuery.css(offsetParent, "position") === "static") {
                offsetParent = offsetParent.parentNode;
              }
              if (offsetParent && offsetParent !== elem && offsetParent.nodeType === 1) {
                parentOffset = jQuery(offsetParent).offset();
                parentOffset.top += jQuery.css(offsetParent, "borderTopWidth", true);
                parentOffset.left += jQuery.css(offsetParent, "borderLeftWidth", true);
              }
            }
            return {
              top: offset.top - parentOffset.top - jQuery.css(elem, "marginTop", true),
              left: offset.left - parentOffset.left - jQuery.css(elem, "marginLeft", true)
            };
          },
          offsetParent: function() {
            return this.map(function() {
              var offsetParent = this.offsetParent;
              while (offsetParent && jQuery.css(offsetParent, "position") === "static") {
                offsetParent = offsetParent.offsetParent;
              }
              return offsetParent || documentElement;
            });
          }
        });
        jQuery.each({ scrollLeft: "pageXOffset", scrollTop: "pageYOffset" }, function(method, prop) {
          var top = "pageYOffset" === prop;
          jQuery.fn[method] = function(val) {
            return access(this, function(elem, method2, val2) {
              var win;
              if (isWindow(elem)) {
                win = elem;
              } else if (elem.nodeType === 9) {
                win = elem.defaultView;
              }
              if (val2 === void 0) {
                return win ? win[prop] : elem[method2];
              }
              if (win) {
                win.scrollTo(
                  !top ? val2 : win.pageXOffset,
                  top ? val2 : win.pageYOffset
                );
              } else {
                elem[method2] = val2;
              }
            }, method, val, arguments.length);
          };
        });
        jQuery.each(["top", "left"], function(_i, prop) {
          jQuery.cssHooks[prop] = addGetHookIf(
            support.pixelPosition,
            function(elem, computed) {
              if (computed) {
                computed = curCSS(elem, prop);
                return rnumnonpx.test(computed) ? jQuery(elem).position()[prop] + "px" : computed;
              }
            }
          );
        });
        jQuery.each({ Height: "height", Width: "width" }, function(name, type) {
          jQuery.each({
            padding: "inner" + name,
            content: type,
            "": "outer" + name
          }, function(defaultExtra, funcName) {
            jQuery.fn[funcName] = function(margin, value) {
              var chainable = arguments.length && (defaultExtra || typeof margin !== "boolean"), extra = defaultExtra || (margin === true || value === true ? "margin" : "border");
              return access(this, function(elem, type2, value2) {
                var doc;
                if (isWindow(elem)) {
                  return funcName.indexOf("outer") === 0 ? elem["inner" + name] : elem.document.documentElement["client" + name];
                }
                if (elem.nodeType === 9) {
                  doc = elem.documentElement;
                  return Math.max(
                    elem.body["scroll" + name],
                    doc["scroll" + name],
                    elem.body["offset" + name],
                    doc["offset" + name],
                    doc["client" + name]
                  );
                }
                return value2 === void 0 ? jQuery.css(elem, type2, extra) : jQuery.style(elem, type2, value2, extra);
              }, type, chainable ? margin : void 0, chainable);
            };
          });
        });
        jQuery.each([
          "ajaxStart",
          "ajaxStop",
          "ajaxComplete",
          "ajaxError",
          "ajaxSuccess",
          "ajaxSend"
        ], function(_i, type) {
          jQuery.fn[type] = function(fn) {
            return this.on(type, fn);
          };
        });
        jQuery.fn.extend({
          bind: function(types, data, fn) {
            return this.on(types, null, data, fn);
          },
          unbind: function(types, fn) {
            return this.off(types, null, fn);
          },
          delegate: function(selector, types, data, fn) {
            return this.on(types, selector, data, fn);
          },
          undelegate: function(selector, types, fn) {
            return arguments.length === 1 ? this.off(selector, "**") : this.off(types, selector || "**", fn);
          },
          hover: function(fnOver, fnOut) {
            return this.mouseenter(fnOver).mouseleave(fnOut || fnOver);
          }
        });
        jQuery.each(
          "blur focus focusin focusout resize scroll click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup contextmenu".split(" "),
          function(_i, name) {
            jQuery.fn[name] = function(data, fn) {
              return arguments.length > 0 ? this.on(name, null, data, fn) : this.trigger(name);
            };
          }
        );
        var rtrim = /^[\s\uFEFF\xA0]+|([^\s\uFEFF\xA0])[\s\uFEFF\xA0]+$/g;
        jQuery.proxy = function(fn, context) {
          var tmp, args, proxy;
          if (typeof context === "string") {
            tmp = fn[context];
            context = fn;
            fn = tmp;
          }
          if (!isFunction(fn)) {
            return void 0;
          }
          args = slice2.call(arguments, 2);
          proxy = function() {
            return fn.apply(context || this, args.concat(slice2.call(arguments)));
          };
          proxy.guid = fn.guid = fn.guid || jQuery.guid++;
          return proxy;
        };
        jQuery.holdReady = function(hold) {
          if (hold) {
            jQuery.readyWait++;
          } else {
            jQuery.ready(true);
          }
        };
        jQuery.isArray = Array.isArray;
        jQuery.parseJSON = JSON.parse;
        jQuery.nodeName = nodeName;
        jQuery.isFunction = isFunction;
        jQuery.isWindow = isWindow;
        jQuery.camelCase = camelCase;
        jQuery.type = toType;
        jQuery.now = Date.now;
        jQuery.isNumeric = function(obj) {
          var type = jQuery.type(obj);
          return (type === "number" || type === "string") && !isNaN(obj - parseFloat(obj));
        };
        jQuery.trim = function(text) {
          return text == null ? "" : (text + "").replace(rtrim, "$1");
        };
        if (typeof define === "function" && define.amd) {
          define("jquery", [], function() {
            return jQuery;
          });
        }
        var _jQuery = window2.jQuery, _$ = window2.$;
        jQuery.noConflict = function(deep) {
          if (window2.$ === jQuery) {
            window2.$ = _$;
          }
          if (deep && window2.jQuery === jQuery) {
            window2.jQuery = _jQuery;
          }
          return jQuery;
        };
        if (typeof noGlobal === "undefined") {
          window2.jQuery = window2.$ = jQuery;
        }
        return jQuery;
      });
    }
  });

  // src/index.js
  var import_jquery2 = __toESM(require_jquery());

  // src/underscore.js
  function each(list2, func) {
    return Array.prototype.forEach.call(list2, func);
  }
  function clamp(v, a, b) {
    return Math.min(Math.max(v, a), b);
  }
  function range(n) {
    return [...Array(n).keys()];
  }
  function defaults(base) {
    if (arguments.length < 2) {
      return base;
    }
    for (var i = 1; i < arguments.length; i++) {
      var obj = arguments[i];
      for (var k in obj) {
        if (typeof base[k] == "undefined") {
          base[k] = obj[k];
        }
      }
    }
    return base;
  }
  function debounce(func, timeout) {
    var timer;
    return function() {
      if (timer) {
        clearTimeout(timer);
      }
      var scope = this;
      var args = arguments;
      timer = setTimeout(function() {
        timer = null;
        func.apply(scope, args);
      }, timeout);
    };
  }
  function once(func) {
    let fired = false;
    return function() {
      if (!fired) {
        func.apply(this, arguments);
        fired = true;
      }
    };
  }
  function after(times, func) {
    let invocations = 0;
    return function() {
      if (invocations++ <= times - 1) {
        func.apply(this, arguments);
      }
    };
  }

  // node_modules/two.js/build/two.module.js
  var __defProp2 = Object.defineProperty;
  var __defNormalProp2 = (obj, key, value) => key in obj ? __defProp2(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
  var __export = (target, all) => {
    for (var name in all)
      __defProp2(target, name, { get: all[name], enumerable: true });
  };
  var __publicField2 = (obj, key, value) => {
    __defNormalProp2(obj, typeof key !== "symbol" ? key + "" : key, value);
    return value;
  };
  var Commands = {
    move: "M",
    line: "L",
    curve: "C",
    arc: "A",
    close: "Z"
  };
  var math_exports = {};
  __export(math_exports, {
    HALF_PI: () => HALF_PI,
    NumArray: () => NumArray,
    TWO_PI: () => TWO_PI,
    decomposeMatrix: () => decomposeMatrix,
    getComputedMatrix: () => getComputedMatrix,
    getPoT: () => getPoT,
    lerp: () => lerp,
    mod: () => mod,
    setMatrix: () => setMatrix,
    toFixed: () => toFixed
  });
  var root;
  if (typeof window !== "undefined") {
    root = window;
  } else if (typeof global !== "undefined") {
    root = global;
  } else if (typeof self !== "undefined") {
    root = self;
  }
  var Matrix;
  var TWO_PI = Math.PI * 2;
  var HALF_PI = Math.PI * 0.5;
  function decomposeMatrix(matrix, b, c, d, e, f) {
    let a;
    if (arguments.length <= 1) {
      a = matrix.a;
      b = matrix.b;
      c = matrix.c;
      d = matrix.d;
      e = matrix.e;
      f = matrix.f;
    } else {
      a = matrix;
    }
    return {
      translateX: e,
      translateY: f,
      scaleX: Math.sqrt(a * a + b * b),
      scaleY: Math.sqrt(c * c + d * d),
      rotation: 180 * Math.atan2(b, a) / Math.PI
    };
  }
  function setMatrix(matrix) {
    Matrix = matrix;
  }
  function getComputedMatrix(object, matrix) {
    matrix = matrix && matrix.identity() || new Matrix();
    let parent = object;
    const matrices = [];
    while (parent && parent._matrix) {
      matrices.push(parent._matrix);
      parent = parent.parent;
    }
    matrices.reverse();
    for (let i = 0; i < matrices.length; i++) {
      const m = matrices[i];
      const e = m.elements;
      matrix.multiply(
        e[0],
        e[1],
        e[2],
        e[3],
        e[4],
        e[5],
        e[6],
        e[7],
        e[8],
        e[9]
      );
    }
    return matrix;
  }
  function lerp(a, b, t) {
    return t * (b - a) + a;
  }
  var pots = [2, 4, 8, 16, 32, 64, 128, 256, 512, 1024, 2048, 4096];
  function getPoT(value) {
    let i = 0;
    while (pots[i] && pots[i] < value) {
      i++;
    }
    return pots[i];
  }
  function mod(v, l) {
    while (v < 0) {
      v += l;
    }
    return v % l;
  }
  var NumArray = root.Float32Array || Array;
  var floor = Math.floor;
  function toFixed(v) {
    return floor(v * 1e6) / 1e6;
  }
  var curves_exports = {};
  __export(curves_exports, {
    Curve: () => Curve,
    getAnchorsFromArcData: () => getAnchorsFromArcData,
    getComponentOnCubicBezier: () => getComponentOnCubicBezier,
    getControlPoints: () => getControlPoints,
    getCurveBoundingBox: () => getCurveBoundingBox,
    getCurveFromPoints: () => getCurveFromPoints,
    getCurveLength: () => getCurveLength,
    getReflection: () => getReflection,
    integrate: () => integrate,
    subdivide: () => subdivide
  });
  var Events = class {
    constructor() {
      __publicField2(this, "_events", {});
      __publicField2(this, "_bound", false);
    }
    addEventListener(name, handler) {
      const list2 = this._events[name] || (this._events[name] = []);
      list2.push(handler);
      this._bound = true;
      return this;
    }
    on() {
      return this.addEventListener.apply(this, arguments);
    }
    bind() {
      return this.addEventListener.apply(this, arguments);
    }
    removeEventListener(name, handler) {
      if (!this._events) {
        return this;
      }
      if (!name && !handler) {
        this._events = {};
        this._bound = false;
        return this;
      }
      const names = name ? [name] : Object.keys(this._events);
      for (let i = 0, l = names.length; i < l; i++) {
        name = names[i];
        let list2 = this._events[name];
        if (list2) {
          let events = [];
          if (handler) {
            for (let j = 0, k = list2.length; j < k; j++) {
              let e = list2[j];
              e = e.handler ? e.handler : e;
              if (handler !== e) {
                events.push(e);
              }
            }
          }
          this._events[name] = events;
        }
      }
      return this;
    }
    off() {
      return this.removeEventListener.apply(this, arguments);
    }
    unbind() {
      return this.removeEventListener.apply(this, arguments);
    }
    dispatchEvent(name) {
      if (!this._events) {
        return this;
      }
      const args = Array.prototype.slice.call(arguments, 1);
      const events = this._events[name];
      if (events) {
        for (let i = 0; i < events.length; i++) {
          events[i].call(this, ...args);
        }
      }
      return this;
    }
    trigger() {
      return this.dispatchEvent.apply(this, arguments);
    }
    listen(obj, name, handler) {
      const scope = this;
      if (obj) {
        e.obj = obj;
        e.name = name;
        e.handler = handler;
        obj.on(name, e);
      }
      function e() {
        handler.apply(scope, arguments);
      }
      return scope;
    }
    ignore(obj, name, handler) {
      obj.off(name, handler);
      return this;
    }
  };
  __publicField2(Events, "Types", {
    play: "play",
    pause: "pause",
    update: "update",
    render: "render",
    resize: "resize",
    change: "change",
    remove: "remove",
    insert: "insert",
    order: "order",
    load: "load"
  });
  __publicField2(Events, "Methods", [
    "addEventListener",
    "on",
    "removeEventListener",
    "off",
    "unbind",
    "dispatchEvent",
    "trigger",
    "listen",
    "ignore"
  ]);
  var proto = {
    x: {
      enumerable: true,
      get: function() {
        return this._x;
      },
      set: function(v) {
        if (this._x !== v) {
          this._x = v;
          if (this._bound) {
            this.dispatchEvent(Events.Types.change);
          }
        }
      }
    },
    y: {
      enumerable: true,
      get: function() {
        return this._y;
      },
      set: function(v) {
        if (this._y !== v) {
          this._y = v;
          if (this._bound) {
            this.dispatchEvent(Events.Types.change);
          }
        }
      }
    }
  };
  var _Vector = class extends Events {
    constructor(x = 0, y = 0) {
      super();
      __publicField2(this, "_x", 0);
      __publicField2(this, "_y", 0);
      for (let prop in proto) {
        Object.defineProperty(this, prop, proto[prop]);
      }
      this.x = x;
      this.y = y;
    }
    static add(v1, v2) {
      return new _Vector(v1.x + v2.x, v1.y + v2.y);
    }
    static sub(v1, v2) {
      return new _Vector(v1.x - v2.x, v1.y - v2.y);
    }
    static subtract(v1, v2) {
      return _Vector.sub(v1, v2);
    }
    static ratioBetween(v1, v2) {
      return (v1.x * v2.x + v1.y * v2.y) / (v1.length() * v2.length());
    }
    static angleBetween(v1, v2) {
      if (arguments.length >= 4) {
        const dx2 = arguments[0] - arguments[2];
        const dy2 = arguments[1] - arguments[3];
        return Math.atan2(dy2, dx2);
      }
      const dx = v1.x - v2.x;
      const dy = v1.y - v2.y;
      return Math.atan2(dy, dx);
    }
    static distanceBetween(v1, v2) {
      return Math.sqrt(_Vector.distanceBetweenSquared(v1, v2));
    }
    static distanceBetweenSquared(v1, v2) {
      const dx = v1.x - v2.x;
      const dy = v1.y - v2.y;
      return dx * dx + dy * dy;
    }
    set(x, y) {
      this.x = x;
      this.y = y;
      return this;
    }
    copy(v) {
      this.x = v.x;
      this.y = v.y;
      return this;
    }
    clear() {
      this.x = 0;
      this.y = 0;
      return this;
    }
    clone() {
      return new _Vector(this.x, this.y);
    }
    add(x, y) {
      if (arguments.length <= 0) {
        return this;
      } else if (arguments.length <= 1) {
        if (typeof x === "number") {
          this.x += x;
          this.y += x;
        } else if (x && typeof x.x === "number" && typeof x.y === "number") {
          this.x += x.x;
          this.y += x.y;
        }
      } else {
        this.x += x;
        this.y += y;
      }
      return this;
    }
    addSelf(v) {
      return this.add.apply(this, arguments);
    }
    sub(x, y) {
      if (arguments.length <= 0) {
        return this;
      } else if (arguments.length <= 1) {
        if (typeof x === "number") {
          this.x -= x;
          this.y -= x;
        } else if (x && typeof x.x === "number" && typeof x.y === "number") {
          this.x -= x.x;
          this.y -= x.y;
        }
      } else {
        this.x -= x;
        this.y -= y;
      }
      return this;
    }
    subtract() {
      return this.sub.apply(this, arguments);
    }
    subSelf(v) {
      return this.sub.apply(this, arguments);
    }
    subtractSelf(v) {
      return this.sub.apply(this, arguments);
    }
    multiply(x, y) {
      if (arguments.length <= 0) {
        return this;
      } else if (arguments.length <= 1) {
        if (typeof x === "number") {
          this.x *= x;
          this.y *= x;
        } else if (x && typeof x.x === "number" && typeof x.y === "number") {
          this.x *= x.x;
          this.y *= x.y;
        }
      } else {
        this.x *= x;
        this.y *= y;
      }
      return this;
    }
    multiplySelf(v) {
      return this.multiply.apply(this, arguments);
    }
    multiplyScalar(s) {
      return this.multiply(s);
    }
    divide(x, y) {
      if (arguments.length <= 0) {
        return this;
      } else if (arguments.length <= 1) {
        if (typeof x === "number") {
          this.x /= x;
          this.y /= x;
        } else if (x && typeof x.x === "number" && typeof x.y === "number") {
          this.x /= x.x;
          this.y /= x.y;
        }
      } else {
        this.x /= x;
        this.y /= y;
      }
      if (isNaN(this.x)) {
        this.x = 0;
      }
      if (isNaN(this.y)) {
        this.y = 0;
      }
      return this;
    }
    divideSelf(v) {
      return this.divide.apply(this, arguments);
    }
    divideScalar(s) {
      return this.divide(s);
    }
    negate() {
      return this.multiply(-1);
    }
    dot(v) {
      return this.x * v.x + this.y * v.y;
    }
    length() {
      return Math.sqrt(this.lengthSquared());
    }
    lengthSquared() {
      return this.x * this.x + this.y * this.y;
    }
    normalize() {
      return this.divideScalar(this.length());
    }
    distanceTo(v) {
      return Math.sqrt(this.distanceToSquared(v));
    }
    distanceToSquared(v) {
      const dx = this.x - v.x;
      const dy = this.y - v.y;
      return dx * dx + dy * dy;
    }
    setLength(l) {
      return this.normalize().multiplyScalar(l);
    }
    equals(v, eps) {
      eps = typeof eps === "undefined" ? 1e-4 : eps;
      return this.distanceTo(v) < eps;
    }
    lerp(v, t) {
      const x = (v.x - this.x) * t + this.x;
      const y = (v.y - this.y) * t + this.y;
      return this.set(x, y);
    }
    isZero(eps) {
      eps = typeof eps === "undefined" ? 1e-4 : eps;
      return this.length() < eps;
    }
    toString() {
      return this.x + ", " + this.y;
    }
    toObject() {
      return { x: this.x, y: this.y };
    }
    rotate(radians) {
      const x = this.x;
      const y = this.y;
      const cos7 = Math.cos(radians);
      const sin7 = Math.sin(radians);
      this.x = x * cos7 - y * sin7;
      this.y = x * sin7 + y * cos7;
      return this;
    }
  };
  var Vector = _Vector;
  __publicField2(Vector, "zero", new _Vector());
  __publicField2(Vector, "left", new _Vector(-1, 0));
  __publicField2(Vector, "right", new _Vector(1, 0));
  __publicField2(Vector, "up", new _Vector(0, -1));
  __publicField2(Vector, "down", new _Vector(0, 1));
  var Anchor = class extends Vector {
    constructor(x = 0, y = 0, ax = 0, ay = 0, bx = 0, by = 0, command = Commands.move) {
      super(x, y);
      __publicField2(this, "controls", {
        left: new Vector(),
        right: new Vector()
      });
      __publicField2(this, "_command", Commands.move);
      __publicField2(this, "_relative", true);
      __publicField2(this, "_rx", 0);
      __publicField2(this, "_ry", 0);
      __publicField2(this, "_xAxisRotation", 0);
      __publicField2(this, "_largeArcFlag", 0);
      __publicField2(this, "_sweepFlag", 1);
      for (let prop in proto2) {
        Object.defineProperty(this, prop, proto2[prop]);
      }
      this.command = command;
      this.relative = true;
      const broadcast = Anchor.makeBroadcast(this);
      this.controls.left.set(ax, ay).addEventListener(Events.Types.change, broadcast);
      this.controls.right.set(bx, by).addEventListener(Events.Types.change, broadcast);
    }
    static makeBroadcast(scope) {
      return broadcast;
      function broadcast() {
        if (scope._bound) {
          scope.dispatchEvent(Events.Types.change);
        }
      }
    }
    copy(v) {
      this.x = v.x;
      this.y = v.y;
      if (typeof v.command === "string") {
        this.command = v.command;
      }
      if (v.controls) {
        if (v.controls.left) {
          this.controls.left.copy(v.controls.left);
        }
        if (v.controls.right) {
          this.controls.right.copy(v.controls.right);
        }
      }
      if (typeof v.relative === "boolean") {
        this.relative = v.relative;
      }
      if (typeof v.rx === "number") {
        this.rx = v.rx;
      }
      if (typeof v.ry === "number") {
        this.ry = v.ry;
      }
      if (typeof v.xAxisRotation === "number") {
        this.xAxisRotation = v.xAxisRotation;
      }
      if (typeof v.largeArcFlag === "number") {
        this.largeArcFlag = v.largeArcFlag;
      }
      if (typeof v.sweepFlag === "number") {
        this.sweepFlag = v.sweepFlag;
      }
      return this;
    }
    clone() {
      return new Anchor().copy(this);
    }
    toObject() {
      return {
        x: this.x,
        y: this.y,
        command: this.command,
        relative: this.relative,
        controls: {
          left: this.controls.left.toObject(),
          right: this.controls.right.toObject()
        },
        rx: this.rx,
        ry: this.ry,
        xAxisRotation: this.xAxisRotation,
        largeArcFlag: this.largeArcFlag,
        sweepFlag: this.sweepFlag
      };
    }
    toString() {
      return JSON.stringify(this.toObject());
    }
  };
  var proto2 = {
    command: {
      enumerable: true,
      get: function() {
        return this._command;
      },
      set: function(command) {
        if (this._command !== command) {
          this._command = command;
          if (this._bound) {
            this.dispatchEvent(Events.Types.change);
          }
        }
      }
    },
    relative: {
      enumerable: true,
      get: function() {
        return this._relative;
      },
      set: function(relative) {
        if (this._relative !== !!relative) {
          this._relative = !!relative;
          if (this._bound) {
            this.dispatchEvent(Events.Types.change);
          }
        }
      }
    },
    rx: {
      enumerable: true,
      get: function() {
        return this._rx;
      },
      set: function(rx) {
        if (this._rx !== rx) {
          this._rx = rx;
          if (this._bound) {
            this.dispatchEvent(Events.Types.change);
          }
        }
      }
    },
    ry: {
      enumerable: true,
      get: function() {
        return this._ry;
      },
      set: function(ry) {
        if (this._ry !== ry) {
          this._ry = ry;
          if (this._bound) {
            this.dispatchEvent(Events.Types.change);
          }
        }
      }
    },
    xAxisRotation: {
      enumerable: true,
      get: function() {
        return this._xAxisRotation;
      },
      set: function(xAxisRotation) {
        if (this._xAxisRotation !== xAxisRotation) {
          this._xAxisRotation = xAxisRotation;
          if (this._bound) {
            this.dispatchEvent(Events.Types.change);
          }
        }
      }
    },
    largeArcFlag: {
      enumerable: true,
      get: function() {
        return this._largeArcFlag;
      },
      set: function(largeArcFlag) {
        if (this._largeArcFlag !== largeArcFlag) {
          this._largeArcFlag = largeArcFlag;
          if (this._bound) {
            this.dispatchEvent(Events.Types.change);
          }
        }
      }
    },
    sweepFlag: {
      get: function() {
        return this._sweepFlag;
      },
      set: function(sweepFlag) {
        if (this._sweepFlag !== sweepFlag) {
          this._sweepFlag = sweepFlag;
          if (this._bound) {
            this.dispatchEvent(Events.Types.change);
          }
        }
      }
    }
  };
  var count = 0;
  var Constants = {
    nextFrameID: null,
    Types: {
      webgl: "WebGLRenderer",
      svg: "SVGRenderer",
      canvas: "CanvasRenderer"
    },
    Version: "v0.8.11",
    PublishDate: "2023-08-07T18:08:18.689Z",
    Identifier: "two-",
    Resolution: 12,
    AutoCalculateImportedMatrices: true,
    Instances: [],
    uniqueId: function() {
      return count++;
    }
  };
  var Curve = {
    CollinearityEpsilon: Math.pow(10, -30),
    RecursionLimit: 16,
    CuspLimit: 0,
    Tolerance: {
      distance: 0.25,
      angle: 0,
      epsilon: Number.EPSILON
    },
    abscissas: [
      [0.5773502691896257],
      [0, 0.7745966692414834],
      [0.33998104358485626, 0.8611363115940526],
      [0, 0.5384693101056831, 0.906179845938664],
      [0.2386191860831969, 0.6612093864662645, 0.932469514203152],
      [0, 0.4058451513773972, 0.7415311855993945, 0.9491079123427585],
      [0.1834346424956498, 0.525532409916329, 0.7966664774136267, 0.9602898564975363],
      [0, 0.3242534234038089, 0.6133714327005904, 0.8360311073266358, 0.9681602395076261],
      [0.14887433898163122, 0.4333953941292472, 0.6794095682990244, 0.8650633666889845, 0.9739065285171717],
      [0, 0.26954315595234496, 0.5190961292068118, 0.7301520055740494, 0.8870625997680953, 0.978228658146057],
      [0.1252334085114689, 0.3678314989981802, 0.5873179542866175, 0.7699026741943047, 0.9041172563704749, 0.9815606342467192],
      [0, 0.2304583159551348, 0.44849275103644687, 0.6423493394403402, 0.8015780907333099, 0.9175983992229779, 0.9841830547185881],
      [0.10805494870734367, 0.31911236892788974, 0.5152486363581541, 0.6872929048116855, 0.827201315069765, 0.9284348836635735, 0.9862838086968123],
      [0, 0.20119409399743451, 0.3941513470775634, 0.5709721726085388, 0.7244177313601701, 0.8482065834104272, 0.937273392400706, 0.9879925180204854],
      [0.09501250983763744, 0.2816035507792589, 0.45801677765722737, 0.6178762444026438, 0.755404408355003, 0.8656312023878318, 0.9445750230732326, 0.9894009349916499]
    ],
    weights: [
      [1],
      [0.8888888888888888, 0.5555555555555556],
      [0.6521451548625461, 0.34785484513745385],
      [0.5688888888888889, 0.47862867049936647, 0.23692688505618908],
      [0.46791393457269104, 0.3607615730481386, 0.17132449237917036],
      [0.4179591836734694, 0.3818300505051189, 0.27970539148927664, 0.1294849661688697],
      [0.362683783378362, 0.31370664587788727, 0.22238103445337448, 0.10122853629037626],
      [0.3302393550012598, 0.31234707704000286, 0.26061069640293544, 0.1806481606948574, 0.08127438836157441],
      [0.29552422471475287, 0.26926671930999635, 0.21908636251598204, 0.1494513491505806, 0.06667134430868814],
      [0.2729250867779006, 0.26280454451024665, 0.23319376459199048, 0.18629021092773426, 0.1255803694649046, 0.05566856711617366],
      [0.24914704581340277, 0.2334925365383548, 0.20316742672306592, 0.16007832854334622, 0.10693932599531843, 0.04717533638651183],
      [0.2325515532308739, 0.22628318026289723, 0.2078160475368885, 0.17814598076194574, 0.13887351021978725, 0.09212149983772845, 0.04048400476531588],
      [0.2152638534631578, 0.2051984637212956, 0.18553839747793782, 0.15720316715819355, 0.12151857068790319, 0.08015808715976021, 0.03511946033175186],
      [0.2025782419255613, 0.19843148532711158, 0.1861610000155622, 0.16626920581699392, 0.13957067792615432, 0.10715922046717194, 0.07036604748810812, 0.03075324199611727],
      [0.1894506104550685, 0.18260341504492358, 0.16915651939500254, 0.14959598881657674, 0.12462897125553388, 0.09515851168249279, 0.062253523938647894, 0.027152459411754096]
    ]
  };
  function getComponentOnCubicBezier(t, a, b, c, d) {
    const k = 1 - t;
    return k * k * k * a + 3 * k * k * t * b + 3 * k * t * t * c + t * t * t * d;
  }
  function subdivide(x1, y1, x2, y2, x3, y3, x4, y4, limit) {
    limit = limit || Curve.RecursionLimit;
    const amount2 = limit + 1;
    if (Math.abs(x1 - x4) < 1e-3 && Math.abs(y1 - y4) < 1e-3) {
      return [new Anchor(x4, y4)];
    }
    const result = [];
    for (let i = 0; i < amount2; i++) {
      const t = i / amount2;
      const x = getComponentOnCubicBezier(t, x1, x2, x3, x4);
      const y = getComponentOnCubicBezier(t, y1, y2, y3, y4);
      result.push(new Anchor(x, y));
    }
    return result;
  }
  function getCurveLength(x1, y1, x2, y2, x3, y3, x4, y4, limit) {
    if (x1 === x2 && y1 === y2 && x3 === x4 && y3 === y4) {
      const dx = x4 - x1;
      const dy = y4 - y1;
      return Math.sqrt(dx * dx + dy * dy);
    }
    const ax = 9 * (x2 - x3) + 3 * (x4 - x1), bx = 6 * (x1 + x3) - 12 * x2, cx = 3 * (x2 - x1), ay = 9 * (y2 - y3) + 3 * (y4 - y1), by = 6 * (y1 + y3) - 12 * y2, cy = 3 * (y2 - y1);
    function integrand(t) {
      const dx = (ax * t + bx) * t + cx, dy = (ay * t + by) * t + cy;
      return Math.sqrt(dx * dx + dy * dy);
    }
    return integrate(
      integrand,
      0,
      1,
      limit || Curve.RecursionLimit
    );
  }
  function getCurveBoundingBox(x1, y1, x2, y2, x3, y3, x4, y4) {
    const tvalues = [];
    const bounds = [[], []];
    let a, b, c, t, t1, t2, b2ac, sqrtb2ac;
    for (let i = 0; i < 2; ++i) {
      if (i == 0) {
        b = 6 * x1 - 12 * x2 + 6 * x3;
        a = -3 * x1 + 9 * x2 - 9 * x3 + 3 * x4;
        c = 3 * x2 - 3 * x1;
      } else {
        b = 6 * y1 - 12 * y2 + 6 * y3;
        a = -3 * y1 + 9 * y2 - 9 * y3 + 3 * y4;
        c = 3 * y2 - 3 * y1;
      }
      if (Math.abs(a) < 1e-12) {
        if (Math.abs(b) < 1e-12) {
          continue;
        }
        t = -c / b;
        if (0 < t && t < 1) {
          tvalues.push(t);
        }
        continue;
      }
      b2ac = b * b - 4 * c * a;
      sqrtb2ac = Math.sqrt(b2ac);
      if (b2ac < 0) {
        continue;
      }
      t1 = (-b + sqrtb2ac) / (2 * a);
      if (0 < t1 && t1 < 1) {
        tvalues.push(t1);
      }
      t2 = (-b - sqrtb2ac) / (2 * a);
      if (0 < t2 && t2 < 1) {
        tvalues.push(t2);
      }
    }
    let j = tvalues.length;
    let jlen = j;
    let mt;
    while (j--) {
      t = tvalues[j];
      mt = 1 - t;
      bounds[0][j] = mt * mt * mt * x1 + 3 * mt * mt * t * x2 + 3 * mt * t * t * x3 + t * t * t * x4;
      bounds[1][j] = mt * mt * mt * y1 + 3 * mt * mt * t * y2 + 3 * mt * t * t * y3 + t * t * t * y4;
    }
    bounds[0][jlen] = x1;
    bounds[1][jlen] = y1;
    bounds[0][jlen + 1] = x4;
    bounds[1][jlen + 1] = y4;
    bounds[0].length = bounds[1].length = jlen + 2;
    return {
      min: { x: Math.min.apply(0, bounds[0]), y: Math.min.apply(0, bounds[1]) },
      max: { x: Math.max.apply(0, bounds[0]), y: Math.max.apply(0, bounds[1]) }
    };
  }
  function integrate(f, a, b, n) {
    let x = Curve.abscissas[n - 2], w = Curve.weights[n - 2], A = 0.5 * (b - a), B = A + a, i = 0, m = n + 1 >> 1, sum = n & 1 ? w[i++] * f(B) : 0;
    while (i < m) {
      const Ax = A * x[i];
      sum += w[i++] * (f(B + Ax) + f(B - Ax));
    }
    return A * sum;
  }
  function getCurveFromPoints(points, closed2) {
    const l = points.length, last = l - 1;
    for (let i = 0; i < l; i++) {
      const point = points[i];
      const prev = closed2 ? mod(i - 1, l) : Math.max(i - 1, 0);
      const next = closed2 ? mod(i + 1, l) : Math.min(i + 1, last);
      const a = points[prev];
      const b = point;
      const c = points[next];
      getControlPoints(a, b, c);
      b.command = i === 0 ? Commands.move : Commands.curve;
    }
  }
  function getControlPoints(a, b, c) {
    const a1 = Vector.angleBetween(a, b);
    const a2 = Vector.angleBetween(c, b);
    let d1 = Vector.distanceBetween(a, b);
    let d2 = Vector.distanceBetween(c, b);
    let mid = (a1 + a2) / 2;
    if (d1 < 1e-4 || d2 < 1e-4) {
      if (typeof b.relative === "boolean" && !b.relative) {
        b.controls.left.copy(b);
        b.controls.right.copy(b);
      }
      return b;
    }
    d1 *= 0.33;
    d2 *= 0.33;
    if (a2 < a1) {
      mid += HALF_PI;
    } else {
      mid -= HALF_PI;
    }
    b.controls.left.x = Math.cos(mid) * d1;
    b.controls.left.y = Math.sin(mid) * d1;
    mid -= Math.PI;
    b.controls.right.x = Math.cos(mid) * d2;
    b.controls.right.y = Math.sin(mid) * d2;
    if (typeof b.relative === "boolean" && !b.relative) {
      b.controls.left.x += b.x;
      b.controls.left.y += b.y;
      b.controls.right.x += b.x;
      b.controls.right.y += b.y;
    }
    return b;
  }
  function getReflection(a, b, relative) {
    return new Vector(
      2 * a.x - (b.x + a.x) - (relative ? a.x : 0),
      2 * a.y - (b.y + a.y) - (relative ? a.y : 0)
    );
  }
  function getAnchorsFromArcData(center2, xAxisRotation, rx, ry, ts, td, ccw) {
    const resolution = Constants.Resolution;
    const anchors = [];
    for (let i = 0; i < resolution; i++) {
      let pct = (i + 1) / resolution;
      if (ccw) {
        pct = 1 - pct;
      }
      const theta = pct * td + ts;
      const x = rx * Math.cos(theta);
      const y = ry * Math.sin(theta);
      const anchor2 = new Anchor(x, y);
      anchor2.command = Commands.line;
      anchors.push(anchor2);
    }
  }
  var devicePixelRatio = root.devicePixelRatio || 1;
  function getBackingStoreRatio(ctx2) {
    return ctx2.webkitBackingStorePixelRatio || ctx2.mozBackingStorePixelRatio || ctx2.msBackingStorePixelRatio || ctx2.oBackingStorePixelRatio || ctx2.backingStorePixelRatio || 1;
  }
  function getRatio(ctx2) {
    return devicePixelRatio / getBackingStoreRatio(ctx2);
  }
  var slice = Array.prototype.slice;
  function isArrayLike(collection) {
    if (collection === null || collection === void 0)
      return false;
    const length = collection.length;
    return typeof length == "number" && length >= 0 && length < 4294967296;
  }
  var _ = {
    isNaN: function(obj) {
      return typeof obj === "number" && obj !== +obj;
    },
    isElement: function(obj) {
      return !!(obj && obj.nodeType === 1);
    },
    isObject: function(obj) {
      const type = typeof obj;
      return type === "function" || type === "object" && !!obj;
    },
    extend: function(base) {
      const sources = slice.call(arguments, 1);
      for (let i = 0; i < sources.length; i++) {
        const obj = sources[i];
        for (let k in obj) {
          base[k] = obj[k];
        }
      }
      return base;
    },
    defaults: function(base) {
      const sources = slice.call(arguments, 1);
      for (let i = 0; i < sources.length; i++) {
        const obj = sources[i];
        for (let k in obj) {
          if (base[k] === void 0) {
            base[k] = obj[k];
          }
        }
      }
      return base;
    },
    each: function(obj, iteratee, context) {
      const ctx2 = context || this;
      const keys2 = !isArrayLike(obj) && Object.keys(obj);
      const length = (keys2 || obj).length;
      for (let i = 0; i < length; i++) {
        const k = keys2 ? keys2[i] : i;
        iteratee.call(ctx2, obj[k], k, obj);
      }
      return obj;
    },
    performance: root.performance && root.performance.now ? root.performance : Date
  };
  var Element = class extends Events {
    constructor() {
      super();
      __publicField2(this, "_flagId", false);
      __publicField2(this, "_flagClassName", false);
      __publicField2(this, "_renderer", {});
      __publicField2(this, "_id", "");
      __publicField2(this, "_className", "");
      __publicField2(this, "classList", []);
      for (let prop in proto3) {
        Object.defineProperty(this, prop, proto3[prop]);
      }
    }
    flagReset() {
      this._flagId = this._flagClassName = false;
    }
  };
  var proto3 = {
    renderer: {
      enumerable: false,
      get: function() {
        return this._renderer;
      }
    },
    id: {
      enumerable: true,
      get: function() {
        return this._id;
      },
      set: function(v) {
        const id = this._id;
        if (v === this._id) {
          return;
        }
        this._id = v;
        this._flagId = true;
        if (this.parent) {
          delete this.parent.children.ids[id];
          this.parent.children.ids[this._id] = this;
        }
      }
    },
    className: {
      enumerable: true,
      get: function() {
        return this._className;
      },
      set: function(v) {
        if (this._className !== v) {
          this._flagClassName = true;
          this.classList = v.split(/\s+?/);
          this._className = v;
        }
      }
    }
  };
  var cos = Math.cos;
  var sin = Math.sin;
  var tan = Math.tan;
  var array = [];
  var _Matrix = class extends Events {
    constructor(a, b, c, d, e, f) {
      super();
      __publicField2(this, "elements", new NumArray(9));
      __publicField2(this, "manual", false);
      let elements = a;
      if (!Array.isArray(elements)) {
        elements = Array.prototype.slice.call(arguments);
      }
      this.identity();
      if (elements.length > 0) {
        this.set(elements);
      }
    }
    static Multiply(A, B, C) {
      if (B.length <= 3) {
        const e = A;
        let x, y, z;
        const a = B[0] || 0, b = B[1] || 0, c = B[2] || 0;
        x = e[0] * a + e[1] * b + e[2] * c;
        y = e[3] * a + e[4] * b + e[5] * c;
        z = e[6] * a + e[7] * b + e[8] * c;
        return [x, y, z];
      }
      const A0 = A[0], A1 = A[1], A2 = A[2];
      const A3 = A[3], A4 = A[4], A5 = A[5];
      const A6 = A[6], A7 = A[7], A8 = A[8];
      const B0 = B[0], B1 = B[1], B2 = B[2];
      const B3 = B[3], B4 = B[4], B5 = B[5];
      const B6 = B[6], B7 = B[7], B8 = B[8];
      C = C || new NumArray(9);
      C[0] = A0 * B0 + A1 * B3 + A2 * B6;
      C[1] = A0 * B1 + A1 * B4 + A2 * B7;
      C[2] = A0 * B2 + A1 * B5 + A2 * B8;
      C[3] = A3 * B0 + A4 * B3 + A5 * B6;
      C[4] = A3 * B1 + A4 * B4 + A5 * B7;
      C[5] = A3 * B2 + A4 * B5 + A5 * B8;
      C[6] = A6 * B0 + A7 * B3 + A8 * B6;
      C[7] = A6 * B1 + A7 * B4 + A8 * B7;
      C[8] = A6 * B2 + A7 * B5 + A8 * B8;
      return C;
    }
    set(a, b, c, d, e, f, g, h, i) {
      if (typeof b === "undefined") {
        const elements = a;
        a = elements[0];
        b = elements[1];
        c = elements[2];
        d = elements[3];
        e = elements[4];
        f = elements[5];
        g = elements[6];
        h = elements[7];
        i = elements[8];
      }
      this.elements[0] = a;
      this.elements[1] = b;
      this.elements[2] = c;
      this.elements[3] = d;
      this.elements[4] = e;
      this.elements[5] = f;
      this.elements[6] = g;
      this.elements[7] = h;
      this.elements[8] = i;
      return this.trigger(Events.Types.change);
    }
    copy(m) {
      this.elements[0] = m.elements[0];
      this.elements[1] = m.elements[1];
      this.elements[2] = m.elements[2];
      this.elements[3] = m.elements[3];
      this.elements[4] = m.elements[4];
      this.elements[5] = m.elements[5];
      this.elements[6] = m.elements[6];
      this.elements[7] = m.elements[7];
      this.elements[8] = m.elements[8];
      this.manual = m.manual;
      return this.trigger(Events.Types.change);
    }
    identity() {
      this.elements[0] = _Matrix.Identity[0];
      this.elements[1] = _Matrix.Identity[1];
      this.elements[2] = _Matrix.Identity[2];
      this.elements[3] = _Matrix.Identity[3];
      this.elements[4] = _Matrix.Identity[4];
      this.elements[5] = _Matrix.Identity[5];
      this.elements[6] = _Matrix.Identity[6];
      this.elements[7] = _Matrix.Identity[7];
      this.elements[8] = _Matrix.Identity[8];
      return this.trigger(Events.Types.change);
    }
    multiply(a, b, c, d, e, f, g, h, i) {
      if (typeof b === "undefined") {
        this.elements[0] *= a;
        this.elements[1] *= a;
        this.elements[2] *= a;
        this.elements[3] *= a;
        this.elements[4] *= a;
        this.elements[5] *= a;
        this.elements[6] *= a;
        this.elements[7] *= a;
        this.elements[8] *= a;
        return this.trigger(Events.Types.change);
      }
      if (typeof c === "undefined") {
        c = 1;
      }
      if (typeof d === "undefined") {
        a = a || 0;
        b = b || 0;
        c = c || 0;
        e = this.elements;
        const x = e[0] * a + e[1] * b + e[2] * c;
        const y = e[3] * a + e[4] * b + e[5] * c;
        const z = e[6] * a + e[7] * b + e[8] * c;
        return [x, y, z];
      }
      const A = this.elements;
      const B = [a, b, c, d, e, f, g, h, i];
      const A0 = A[0], A1 = A[1], A2 = A[2];
      const A3 = A[3], A4 = A[4], A5 = A[5];
      const A6 = A[6], A7 = A[7], A8 = A[8];
      const B0 = B[0], B1 = B[1], B2 = B[2];
      const B3 = B[3], B4 = B[4], B5 = B[5];
      const B6 = B[6], B7 = B[7], B8 = B[8];
      this.elements[0] = A0 * B0 + A1 * B3 + A2 * B6;
      this.elements[1] = A0 * B1 + A1 * B4 + A2 * B7;
      this.elements[2] = A0 * B2 + A1 * B5 + A2 * B8;
      this.elements[3] = A3 * B0 + A4 * B3 + A5 * B6;
      this.elements[4] = A3 * B1 + A4 * B4 + A5 * B7;
      this.elements[5] = A3 * B2 + A4 * B5 + A5 * B8;
      this.elements[6] = A6 * B0 + A7 * B3 + A8 * B6;
      this.elements[7] = A6 * B1 + A7 * B4 + A8 * B7;
      this.elements[8] = A6 * B2 + A7 * B5 + A8 * B8;
      return this.trigger(Events.Types.change);
    }
    inverse(out) {
      const a = this.elements;
      out = out || new _Matrix();
      const a00 = a[0], a01 = a[1], a02 = a[2];
      const a10 = a[3], a11 = a[4], a12 = a[5];
      const a20 = a[6], a21 = a[7], a22 = a[8];
      const b01 = a22 * a11 - a12 * a21;
      const b11 = -a22 * a10 + a12 * a20;
      const b21 = a21 * a10 - a11 * a20;
      let det = a00 * b01 + a01 * b11 + a02 * b21;
      if (!det) {
        return null;
      }
      det = 1 / det;
      out.elements[0] = b01 * det;
      out.elements[1] = (-a22 * a01 + a02 * a21) * det;
      out.elements[2] = (a12 * a01 - a02 * a11) * det;
      out.elements[3] = b11 * det;
      out.elements[4] = (a22 * a00 - a02 * a20) * det;
      out.elements[5] = (-a12 * a00 + a02 * a10) * det;
      out.elements[6] = b21 * det;
      out.elements[7] = (-a21 * a00 + a01 * a20) * det;
      out.elements[8] = (a11 * a00 - a01 * a10) * det;
      return out;
    }
    scale(sx, sy) {
      const l = arguments.length;
      if (l <= 1) {
        sy = sx;
      }
      return this.multiply(sx, 0, 0, 0, sy, 0, 0, 0, 1);
    }
    rotate(Number2) {
      const c = cos(Number2);
      const s = sin(Number2);
      return this.multiply(c, -s, 0, s, c, 0, 0, 0, 1);
    }
    translate(x, y) {
      return this.multiply(1, 0, x, 0, 1, y, 0, 0, 1);
    }
    skewX(Number2) {
      const a = tan(Number2);
      return this.multiply(1, a, 0, 0, 1, 0, 0, 0, 1);
    }
    skewY(Number2) {
      const a = tan(Number2);
      return this.multiply(1, 0, 0, a, 1, 0, 0, 0, 1);
    }
    toString(fullMatrix) {
      array.length = 0;
      this.toTransformArray(fullMatrix, array);
      return array.map(toFixed).join(" ");
    }
    toTransformArray(fullMatrix, output) {
      const elements = this.elements;
      const hasOutput = !!output;
      const a = elements[0];
      const b = elements[1];
      const c = elements[2];
      const d = elements[3];
      const e = elements[4];
      const f = elements[5];
      if (fullMatrix) {
        const g = elements[6];
        const h = elements[7];
        const i = elements[8];
        if (hasOutput) {
          output[0] = a;
          output[1] = d;
          output[2] = g;
          output[3] = b;
          output[4] = e;
          output[5] = h;
          output[6] = c;
          output[7] = f;
          output[8] = i;
          return;
        }
        return [
          a,
          d,
          g,
          b,
          e,
          h,
          c,
          f,
          i
        ];
      }
      if (hasOutput) {
        output[0] = a;
        output[1] = d;
        output[2] = b;
        output[3] = e;
        output[4] = c;
        output[5] = f;
        return;
      }
      return [
        a,
        d,
        b,
        e,
        c,
        f
      ];
    }
    toArray(fullMatrix, output) {
      const elements = this.elements;
      const hasOutput = !!output;
      const a = elements[0];
      const b = elements[1];
      const c = elements[2];
      const d = elements[3];
      const e = elements[4];
      const f = elements[5];
      if (fullMatrix) {
        const g = elements[6];
        const h = elements[7];
        const i = elements[8];
        if (hasOutput) {
          output[0] = a;
          output[1] = b;
          output[2] = c;
          output[3] = d;
          output[4] = e;
          output[5] = f;
          output[6] = g;
          output[7] = h;
          output[8] = i;
          return;
        }
        return [
          a,
          b,
          c,
          d,
          e,
          f,
          g,
          h,
          i
        ];
      }
      if (hasOutput) {
        output[0] = a;
        output[1] = b;
        output[2] = c;
        output[3] = d;
        output[4] = e;
        output[5] = f;
        return;
      }
      return [
        a,
        b,
        c,
        d,
        e,
        f
      ];
    }
    toObject() {
      return {
        elements: this.toArray(true),
        manual: !!this.manual
      };
    }
    clone() {
      return new _Matrix().copy(this);
    }
  };
  var Matrix2 = _Matrix;
  __publicField2(Matrix2, "Identity", [
    1,
    0,
    0,
    0,
    1,
    0,
    0,
    0,
    1
  ]);
  setMatrix(Matrix2);
  var Shape = class extends Element {
    constructor() {
      super();
      __publicField2(this, "_flagMatrix", true);
      __publicField2(this, "_flagScale", false);
      __publicField2(this, "_matrix", null);
      __publicField2(this, "_worldMatrix", null);
      __publicField2(this, "_position", null);
      __publicField2(this, "_rotation", 0);
      __publicField2(this, "_scale", 1);
      __publicField2(this, "_skewX", 0);
      __publicField2(this, "_skewY", 0);
      for (let prop in proto4) {
        Object.defineProperty(this, prop, proto4[prop]);
      }
      this._renderer.flagMatrix = FlagMatrix.bind(this);
      this.isShape = true;
      this.id = Constants.Identifier + Constants.uniqueId();
      this.matrix = new Matrix2();
      this.worldMatrix = new Matrix2();
      this.position = new Vector();
      this.rotation = 0;
      this.scale = 1;
      this.skewX = 0;
      this.skewY = 0;
    }
    get renderer() {
      return this._renderer;
    }
    set renderer(v) {
      this._renderer = v;
    }
    get translation() {
      return proto4.position.get.apply(this, arguments);
    }
    set translation(v) {
      proto4.position.set.apply(this, arguments);
    }
    addTo(group) {
      group.add(this);
      return this;
    }
    remove() {
      if (!this.parent) {
        return this;
      }
      this.parent.remove(this);
      return this;
    }
    clone(parent) {
      const clone = new Shape();
      clone.position.copy(this.position);
      clone.rotation = this.rotation;
      clone.scale = this.scale;
      clone.skewX = this.skewX;
      clone.skewY = this.skewY;
      if (this.matrix.manual) {
        clone.matrix.copy(this.matrix);
      }
      if (parent) {
        parent.add(clone);
      }
      return clone._update();
    }
    _update(bubbles) {
      if (!this._matrix.manual && this._flagMatrix) {
        this._matrix.identity().translate(this.position.x, this.position.y);
        if (this._scale instanceof Vector) {
          this._matrix.scale(this._scale.x, this._scale.y);
        } else {
          this._matrix.scale(this._scale);
        }
        this._matrix.rotate(this.rotation);
        this._matrix.skewX(this.skewX);
        this._matrix.skewY(this.skewY);
      }
      if (bubbles) {
        if (this.parent && this.parent._update) {
          this.parent._update();
        }
      }
      return this;
    }
    flagReset() {
      this._flagMatrix = this._flagScale = false;
      super.flagReset.call(this);
      return this;
    }
  };
  var proto4 = {
    position: {
      enumerable: true,
      get: function() {
        return this._position;
      },
      set: function(v) {
        if (this._position) {
          this._position.unbind(Events.Types.change, this._renderer.flagMatrix);
        }
        this._position = v;
        this._position.bind(Events.Types.change, this._renderer.flagMatrix);
        FlagMatrix.call(this);
      }
    },
    rotation: {
      enumerable: true,
      get: function() {
        return this._rotation;
      },
      set: function(v) {
        this._rotation = v;
        this._flagMatrix = true;
      }
    },
    scale: {
      enumerable: true,
      get: function() {
        return this._scale;
      },
      set: function(v) {
        if (this._scale instanceof Vector) {
          this._scale.unbind(Events.Types.change, this._renderer.flagMatrix);
        }
        this._scale = v;
        if (this._scale instanceof Vector) {
          this._scale.bind(Events.Types.change, this._renderer.flagMatrix);
        }
        this._flagMatrix = true;
        this._flagScale = true;
      }
    },
    skewX: {
      enumerable: true,
      get: function() {
        return this._skewX;
      },
      set: function(v) {
        this._skewX = v;
        this._flagMatrix = true;
      }
    },
    skewY: {
      enumerable: true,
      get: function() {
        return this._skewY;
      },
      set: function(v) {
        this._skewY = v;
        this._flagMatrix = true;
      }
    },
    matrix: {
      enumerable: true,
      get: function() {
        return this._matrix;
      },
      set: function(v) {
        this._matrix = v;
        this._flagMatrix = true;
      }
    },
    worldMatrix: {
      enumerable: true,
      get: function() {
        getComputedMatrix(this, this._worldMatrix);
        return this._worldMatrix;
      },
      set: function(v) {
        this._worldMatrix = v;
      }
    }
  };
  function FlagMatrix() {
    this._flagMatrix = true;
  }
  var Collection = class extends Array {
    constructor() {
      super();
      __publicField2(this, "_events", new Events());
      if (arguments[0] && Array.isArray(arguments[0])) {
        if (arguments[0].length > 0) {
          this.push.apply(this, arguments[0]);
        }
      } else if (arguments.length > 0) {
        this.push.apply(this, arguments);
      }
    }
    get _bound() {
      return this._events._bound;
    }
    set _bound(v) {
      this._events._bound = v;
    }
    addEventListener() {
      return this._events.addEventListener.apply(this, arguments);
    }
    on() {
      return this._events.on.apply(this, arguments);
    }
    bind() {
      return this._events.bind.apply(this, arguments);
    }
    removeEventListener() {
      return this._events.removeEventListener.apply(this, arguments);
    }
    off() {
      return this._events.off.apply(this, arguments);
    }
    unbind() {
      return this._events.unbind.apply(this, arguments);
    }
    dispatchEvent() {
      return this._events.dispatchEvent.apply(this, arguments);
    }
    trigger() {
      return this._events.trigger.apply(this, arguments);
    }
    listen() {
      return this._events.listen.apply(this, arguments);
    }
    ignore() {
      return this._events.ignore.apply(this, arguments);
    }
    pop() {
      const popped = super.pop.apply(this, arguments);
      this.trigger(Events.Types.remove, [popped]);
      return popped;
    }
    shift() {
      const shifted = super.shift.apply(this, arguments);
      this.trigger(Events.Types.remove, [shifted]);
      return shifted;
    }
    push() {
      const pushed = super.push.apply(this, arguments);
      this.trigger(Events.Types.insert, arguments);
      return pushed;
    }
    unshift() {
      const unshifted = super.unshift.apply(this, arguments);
      this.trigger(Events.Types.insert, arguments);
      return unshifted;
    }
    splice() {
      const spliced = super.splice.apply(this, arguments);
      this.trigger(Events.Types.remove, spliced);
      if (arguments.length > 2) {
        const inserted = this.slice(arguments[0], arguments[0] + arguments.length - 2);
        this.trigger(Events.Types.insert, inserted);
        this.trigger(Events.Types.order);
      }
      return spliced;
    }
    sort() {
      super.sort.apply(this, arguments);
      this.trigger(Events.Types.order);
      return this;
    }
    reverse() {
      super.reverse.apply(this, arguments);
      this.trigger(Events.Types.order);
      return this;
    }
    indexOf() {
      return super.indexOf.apply(this, arguments);
    }
    map(func, scope) {
      const results = [];
      for (let key = 0; key < this.length; key++) {
        const value = this[key];
        let result;
        if (scope) {
          result = func.call(scope, value, key);
        } else {
          result = func(value, key);
        }
        results.push(result);
      }
      return results;
    }
  };
  var Children = class extends Collection {
    constructor(children) {
      children = Array.isArray(children) ? children : Array.prototype.slice.call(arguments);
      super(children);
      __publicField2(this, "ids", {});
      this.attach(children);
      this.on(Events.Types.insert, this.attach);
      this.on(Events.Types.remove, this.detach);
    }
    attach(children) {
      for (let i = 0; i < children.length; i++) {
        const child = children[i];
        if (child && child.id) {
          this.ids[child.id] = child;
        }
      }
      return this;
    }
    detach(children) {
      for (let i = 0; i < children.length; i++) {
        delete this.ids[children[i].id];
      }
      return this;
    }
  };
  var min = Math.min;
  var max = Math.max;
  var _Group = class extends Shape {
    constructor(children) {
      super();
      __publicField2(this, "_flagAdditions", false);
      __publicField2(this, "_flagSubtractions", false);
      __publicField2(this, "_flagOrder", false);
      __publicField2(this, "_flagOpacity", true);
      __publicField2(this, "_flagBeginning", false);
      __publicField2(this, "_flagEnding", false);
      __publicField2(this, "_flagLength", false);
      __publicField2(this, "_flagMask", false);
      __publicField2(this, "_fill", "#fff");
      __publicField2(this, "_stroke", "#000");
      __publicField2(this, "_linewidth", 1);
      __publicField2(this, "_opacity", 1);
      __publicField2(this, "_visible", true);
      __publicField2(this, "_cap", "round");
      __publicField2(this, "_join", "round");
      __publicField2(this, "_miter", 4);
      __publicField2(this, "_closed", true);
      __publicField2(this, "_curved", false);
      __publicField2(this, "_automatic", true);
      __publicField2(this, "_beginning", 0);
      __publicField2(this, "_ending", 1);
      __publicField2(this, "_length", 0);
      __publicField2(this, "_mask", null);
      for (let prop in proto5) {
        Object.defineProperty(this, prop, proto5[prop]);
      }
      this._renderer.type = "group";
      this.additions = [];
      this.subtractions = [];
      this.children = Array.isArray(children) ? children : Array.prototype.slice.call(arguments);
    }
    static InsertChildren(children) {
      for (let i = 0; i < children.length; i++) {
        replaceParent.call(this, children[i], this);
      }
    }
    static RemoveChildren(children) {
      for (let i = 0; i < children.length; i++) {
        replaceParent.call(this, children[i]);
      }
    }
    static OrderChildren(children) {
      this._flagOrder = true;
    }
    clone(parent) {
      const clone = new _Group();
      const children = this.children.map(function(child) {
        return child.clone();
      });
      clone.add(children);
      clone.opacity = this.opacity;
      if (this.mask) {
        clone.mask = this.mask;
      }
      clone.translation.copy(this.translation);
      clone.rotation = this.rotation;
      clone.scale = this.scale;
      clone.className = this.className;
      if (this.matrix.manual) {
        clone.matrix.copy(this.matrix);
      }
      if (parent) {
        parent.add(clone);
      }
      return clone._update();
    }
    toObject() {
      const result = {
        children: [],
        translation: this.translation.toObject(),
        rotation: this.rotation,
        scale: this.scale instanceof Vector ? this.scale.toObject() : this.scale,
        opacity: this.opacity,
        className: this.className,
        mask: this.mask ? this.mask.toObject() : null
      };
      if (this.matrix.manual) {
        result.matrix = this.matrix.toObject();
      }
      _.each(this.children, function(child, i) {
        result.children[i] = child.toObject();
      }, this);
      return result;
    }
    corner() {
      const rect = this.getBoundingClientRect(true);
      for (let i = 0; i < this.children.length; i++) {
        const child = this.children[i];
        child.translation.x -= rect.left;
        child.translation.y -= rect.top;
      }
      if (this.mask) {
        this.mask.translation.x -= rect.left;
        this.mask.translation.y -= rect.top;
      }
      return this;
    }
    center() {
      const rect = this.getBoundingClientRect(true);
      const cx = rect.left + rect.width / 2 - this.translation.x;
      const cy = rect.top + rect.height / 2 - this.translation.y;
      for (let i = 0; i < this.children.length; i++) {
        const child = this.children[i];
        if (child.isShape) {
          child.translation.x -= cx;
          child.translation.y -= cy;
        }
      }
      if (this.mask) {
        this.mask.translation.x -= cx;
        this.mask.translation.y -= cy;
      }
      return this;
    }
    getById(id) {
      let found = null;
      function search(node) {
        if (node.id === id) {
          return node;
        } else if (node.children) {
          for (let i = 0; i < node.children.length; i++) {
            found = search(node.children[i]);
            if (found) {
              return found;
            }
          }
        }
        return null;
      }
      return search(this);
    }
    getByClassName(className) {
      const found = [];
      function search(node) {
        if (Array.prototype.indexOf.call(node.classList, className) >= 0) {
          found.push(node);
        }
        if (node.children) {
          for (let i = 0; i < node.children.length; i++) {
            const child = node.children[i];
            search(child);
          }
        }
        return found;
      }
      return search(this);
    }
    getByType(type) {
      const found = [];
      function search(node) {
        if (node instanceof type) {
          found.push(node);
        }
        if (node.children) {
          for (let i = 0; i < node.children.length; i++) {
            const child = node.children[i];
            search(child);
          }
        }
        return found;
      }
      return search(this);
    }
    add(objects) {
      if (!(objects instanceof Array)) {
        objects = Array.prototype.slice.call(arguments);
      } else {
        objects = objects.slice();
      }
      for (let i = 0; i < objects.length; i++) {
        const child = objects[i];
        if (!(child && child.id)) {
          continue;
        }
        const index = Array.prototype.indexOf.call(this.children, child);
        if (index >= 0) {
          this.children.splice(index, 1);
        }
        this.children.push(child);
      }
      return this;
    }
    remove(objects) {
      const l = arguments.length, grandparent = this.parent;
      if (l <= 0 && grandparent) {
        grandparent.remove(this);
        return this;
      }
      if (!(objects instanceof Array)) {
        objects = Array.prototype.slice.call(arguments);
      } else {
        objects = objects.slice();
      }
      for (let i = 0; i < objects.length; i++) {
        const object = objects[i];
        if (!object || !this.children.ids[object.id]) {
          continue;
        }
        const index = this.children.indexOf(object);
        if (index >= 0) {
          this.children.splice(index, 1);
        }
      }
      return this;
    }
    getBoundingClientRect(shallow) {
      let rect, matrix, tc, lc, rc, bc;
      this._update(true);
      let left = Infinity, right = -Infinity, top = Infinity, bottom = -Infinity;
      const regex3 = /texture|gradient/i;
      matrix = shallow ? this.matrix : this.worldMatrix;
      for (let i = 0; i < this.children.length; i++) {
        const child = this.children[i];
        if (!child.visible || regex3.test(child._renderer.type)) {
          continue;
        }
        rect = child.getBoundingClientRect(shallow);
        tc = typeof rect.top !== "number" || _.isNaN(rect.top) || !isFinite(rect.top);
        lc = typeof rect.left !== "number" || _.isNaN(rect.left) || !isFinite(rect.left);
        rc = typeof rect.right !== "number" || _.isNaN(rect.right) || !isFinite(rect.right);
        bc = typeof rect.bottom !== "number" || _.isNaN(rect.bottom) || !isFinite(rect.bottom);
        if (tc || lc || rc || bc) {
          continue;
        }
        if (shallow) {
          const [ax, ay] = matrix.multiply(rect.left, rect.top);
          const [bx, by] = matrix.multiply(rect.right, rect.top);
          const [cx, cy] = matrix.multiply(rect.left, rect.bottom);
          const [dx, dy] = matrix.multiply(rect.right, rect.bottom);
          top = min(ay, by, cy, dy);
          left = min(ax, bx, cx, dx);
          right = max(ax, bx, cx, dx);
          bottom = max(ay, by, cy, dy);
        } else {
          top = min(rect.top, top);
          left = min(rect.left, left);
          right = max(rect.right, right);
          bottom = max(rect.bottom, bottom);
        }
      }
      return {
        top,
        left,
        right,
        bottom,
        width: right - left,
        height: bottom - top
      };
    }
    noFill() {
      this.children.forEach(function(child) {
        child.noFill();
      });
      return this;
    }
    noStroke() {
      this.children.forEach(function(child) {
        child.noStroke();
      });
      return this;
    }
    subdivide() {
      const args = arguments;
      this.children.forEach(function(child) {
        child.subdivide.apply(child, args);
      });
      return this;
    }
    _update() {
      let i, l, child;
      if (this._flagBeginning || this._flagEnding) {
        const beginning = Math.min(this._beginning, this._ending);
        const ending = Math.max(this._beginning, this._ending);
        const length = this.length;
        let sum = 0;
        const bd = beginning * length;
        const ed = ending * length;
        for (i = 0; i < this.children.length; i++) {
          child = this.children[i];
          l = child.length;
          if (bd > sum + l) {
            child.beginning = 1;
            child.ending = 1;
          } else if (ed < sum) {
            child.beginning = 0;
            child.ending = 0;
          } else if (bd > sum && bd < sum + l) {
            child.beginning = (bd - sum) / l;
            child.ending = 1;
          } else if (ed > sum && ed < sum + l) {
            child.beginning = 0;
            child.ending = (ed - sum) / l;
          } else {
            child.beginning = 0;
            child.ending = 1;
          }
          sum += l;
        }
      }
      return super._update.apply(this, arguments);
    }
    flagReset() {
      if (this._flagAdditions) {
        this.additions.length = 0;
        this._flagAdditions = false;
      }
      if (this._flagSubtractions) {
        this.subtractions.length = 0;
        this._flagSubtractions = false;
      }
      this._flagOrder = this._flagMask = this._flagOpacity = this._flagBeginning = this._flagEnding = false;
      super.flagReset.call(this);
      return this;
    }
  };
  var Group = _Group;
  __publicField2(Group, "Children", Children);
  __publicField2(Group, "Properties", [
    "fill",
    "stroke",
    "linewidth",
    "cap",
    "join",
    "miter",
    "closed",
    "curved",
    "automatic"
  ]);
  var proto5 = {
    visible: {
      enumerable: true,
      get: function() {
        return this._visible;
      },
      set: function(v) {
        this._flagVisible = this._visible !== v || this._flagVisible;
        this._visible = v;
      }
    },
    opacity: {
      enumerable: true,
      get: function() {
        return this._opacity;
      },
      set: function(v) {
        this._flagOpacity = this._opacity !== v || this._flagOpacity;
        this._opacity = v;
      }
    },
    beginning: {
      enumerable: true,
      get: function() {
        return this._beginning;
      },
      set: function(v) {
        this._flagBeginning = this._beginning !== v || this._flagBeginning;
        this._beginning = v;
      }
    },
    ending: {
      enumerable: true,
      get: function() {
        return this._ending;
      },
      set: function(v) {
        this._flagEnding = this._ending !== v || this._flagEnding;
        this._ending = v;
      }
    },
    length: {
      enumerable: true,
      get: function() {
        if (this._flagLength || this._length <= 0) {
          this._length = 0;
          if (!this.children) {
            return this._length;
          }
          for (let i = 0; i < this.children.length; i++) {
            const child = this.children[i];
            this._length += child.length;
          }
        }
        return this._length;
      }
    },
    fill: {
      enumerable: true,
      get: function() {
        return this._fill;
      },
      set: function(v) {
        this._fill = v;
        for (let i = 0; i < this.children.length; i++) {
          const child = this.children[i];
          child.fill = v;
        }
      }
    },
    stroke: {
      enumerable: true,
      get: function() {
        return this._stroke;
      },
      set: function(v) {
        this._stroke = v;
        for (let i = 0; i < this.children.length; i++) {
          const child = this.children[i];
          child.stroke = v;
        }
      }
    },
    linewidth: {
      enumerable: true,
      get: function() {
        return this._linewidth;
      },
      set: function(v) {
        this._linewidth = v;
        for (let i = 0; i < this.children.length; i++) {
          const child = this.children[i];
          child.linewidth = v;
        }
      }
    },
    join: {
      enumerable: true,
      get: function() {
        return this._join;
      },
      set: function(v) {
        this._join = v;
        for (let i = 0; i < this.children.length; i++) {
          const child = this.children[i];
          child.join = v;
        }
      }
    },
    miter: {
      enumerable: true,
      get: function() {
        return this._miter;
      },
      set: function(v) {
        this._miter = v;
        for (let i = 0; i < this.children.length; i++) {
          const child = this.children[i];
          child.miter = v;
        }
      }
    },
    cap: {
      enumerable: true,
      get: function() {
        return this._cap;
      },
      set: function(v) {
        this._cap = v;
        for (let i = 0; i < this.children.length; i++) {
          const child = this.children[i];
          child.cap = v;
        }
      }
    },
    closed: {
      enumerable: true,
      get: function() {
        return this._closed;
      },
      set: function(v) {
        this._closed = v;
        for (let i = 0; i < this.children.length; i++) {
          const child = this.children[i];
          child.closed = v;
        }
      }
    },
    curved: {
      enumerable: true,
      get: function() {
        return this._curved;
      },
      set: function(v) {
        this._curved = v;
        for (let i = 0; i < this.children.length; i++) {
          const child = this.children[i];
          child.curved = v;
        }
      }
    },
    automatic: {
      enumerable: true,
      get: function() {
        return this._automatic;
      },
      set: function(v) {
        this._automatic = v;
        for (let i = 0; i < this.children.length; i++) {
          const child = this.children[i];
          child.automatic = v;
        }
      }
    },
    children: {
      enumerable: true,
      get: function() {
        return this._children;
      },
      set: function(children) {
        const insertChildren = Group.InsertChildren.bind(this);
        const removeChildren = Group.RemoveChildren.bind(this);
        const orderChildren = Group.OrderChildren.bind(this);
        if (this._children) {
          this._children.unbind();
          if (this._children.length > 0) {
            removeChildren(this._children);
          }
        }
        this._children = new Children(children);
        this._children.bind(Events.Types.insert, insertChildren);
        this._children.bind(Events.Types.remove, removeChildren);
        this._children.bind(Events.Types.order, orderChildren);
        if (children.length > 0) {
          insertChildren(children);
        }
      }
    },
    mask: {
      enumerable: true,
      get: function() {
        return this._mask;
      },
      set: function(v) {
        this._mask = v;
        this._flagMask = true;
        if (_.isObject(v) && !v.clip) {
          v.clip = true;
        }
      }
    }
  };
  function replaceParent(child, newParent) {
    const parent = child.parent;
    let index;
    if (parent === newParent) {
      add2();
      return;
    }
    if (parent && parent.children.ids[child.id]) {
      index = Array.prototype.indexOf.call(parent.children, child);
      parent.children.splice(index, 1);
      splice();
    }
    if (newParent) {
      add2();
      return;
    }
    splice();
    if (parent._flagAdditions && parent.additions.length === 0) {
      parent._flagAdditions = false;
    }
    if (parent._flagSubtractions && parent.subtractions.length === 0) {
      parent._flagSubtractions = false;
    }
    delete child.parent;
    function add2() {
      if (newParent.subtractions.length > 0) {
        index = Array.prototype.indexOf.call(newParent.subtractions, child);
        if (index >= 0) {
          newParent.subtractions.splice(index, 1);
        }
      }
      if (newParent.additions.length > 0) {
        index = Array.prototype.indexOf.call(newParent.additions, child);
        if (index >= 0) {
          newParent.additions.splice(index, 1);
        }
      }
      child.parent = newParent;
      newParent.additions.push(child);
      newParent._flagAdditions = true;
    }
    function splice() {
      index = Array.prototype.indexOf.call(parent.additions, child);
      if (index >= 0) {
        parent.additions.splice(index, 1);
      }
      index = Array.prototype.indexOf.call(parent.subtractions, child);
      if (index < 0) {
        parent.subtractions.push(child);
        parent._flagSubtractions = true;
      }
    }
  }
  var emptyArray = [];
  var max2 = Math.max;
  var min2 = Math.min;
  var abs = Math.abs;
  var sin2 = Math.sin;
  var cos2 = Math.cos;
  var acos = Math.acos;
  var sqrt = Math.sqrt;
  var canvas = {
    isHidden: /(undefined|none|transparent)/i,
    alignments: {
      left: "start",
      middle: "center",
      right: "end"
    },
    shim: function(elem, name) {
      elem.tagName = elem.nodeName = name || "canvas";
      elem.nodeType = 1;
      elem.getAttribute = function(prop) {
        return this[prop];
      };
      elem.setAttribute = function(prop, val) {
        this[prop] = val;
        return this;
      };
      return elem;
    },
    group: {
      renderChild: function(child) {
        canvas[child._renderer.type].render.call(child, this.ctx, true, this.clip);
      },
      render: function(ctx2) {
        if (!this._visible) {
          return this;
        }
        this._update();
        const matrix = this._matrix.elements;
        const parent = this.parent;
        this._renderer.opacity = this._opacity * (parent && parent._renderer ? parent._renderer.opacity : 1);
        const mask = this._mask;
        const defaultMatrix = isDefaultMatrix(matrix);
        const shouldIsolate = !defaultMatrix || !!mask;
        if (!this._renderer.context) {
          this._renderer.context = {};
        }
        this._renderer.context.ctx = ctx2;
        if (shouldIsolate) {
          ctx2.save();
          if (!defaultMatrix) {
            ctx2.transform(
              matrix[0],
              matrix[3],
              matrix[1],
              matrix[4],
              matrix[2],
              matrix[5]
            );
          }
        }
        if (mask) {
          canvas[mask._renderer.type].render.call(mask, ctx2, true);
        }
        if (this._opacity > 0 && this._scale !== 0) {
          for (let i = 0; i < this.children.length; i++) {
            const child = this.children[i];
            canvas[child._renderer.type].render.call(child, ctx2);
          }
        }
        if (shouldIsolate) {
          ctx2.restore();
        }
        return this.flagReset();
      }
    },
    path: {
      render: function(ctx2, forced, parentClipped) {
        let matrix, stroke, linewidth, fill, opacity, visible, cap, join, miter, closed2, commands, length, last, prev, a, b, c, d, ux, uy, vx, vy, ar, bl, br, cl, x, y, mask, clip, defaultMatrix, isOffset, dashes, po;
        po = this.parent && this.parent._renderer ? this.parent._renderer.opacity : 1;
        mask = this._mask;
        clip = this._clip;
        opacity = this._opacity * (po || 1);
        visible = this._visible;
        if (!forced && (!visible || clip || opacity === 0)) {
          return this;
        }
        this._update();
        matrix = this._matrix.elements;
        stroke = this._stroke;
        linewidth = this._linewidth;
        fill = this._fill;
        cap = this._cap;
        join = this._join;
        miter = this._miter;
        closed2 = this._closed;
        commands = this._renderer.vertices;
        length = commands.length;
        last = length - 1;
        defaultMatrix = isDefaultMatrix(matrix);
        dashes = this.dashes;
        if (!defaultMatrix) {
          ctx2.save();
          ctx2.transform(matrix[0], matrix[3], matrix[1], matrix[4], matrix[2], matrix[5]);
        }
        if (mask) {
          canvas[mask._renderer.type].render.call(mask, ctx2, true);
        }
        if (fill) {
          if (typeof fill === "string") {
            ctx2.fillStyle = fill;
          } else {
            canvas[fill._renderer.type].render.call(fill, ctx2, this);
            ctx2.fillStyle = fill._renderer.effect;
          }
        }
        if (stroke) {
          if (typeof stroke === "string") {
            ctx2.strokeStyle = stroke;
          } else {
            canvas[stroke._renderer.type].render.call(stroke, ctx2, this);
            ctx2.strokeStyle = stroke._renderer.effect;
          }
          if (linewidth) {
            ctx2.lineWidth = linewidth;
          }
          if (miter) {
            ctx2.miterLimit = miter;
          }
          if (join) {
            ctx2.lineJoin = join;
          }
          if (!closed2 && cap) {
            ctx2.lineCap = cap;
          }
        }
        if (typeof opacity === "number") {
          ctx2.globalAlpha = opacity;
        }
        if (dashes && dashes.length > 0) {
          ctx2.lineDashOffset = dashes.offset || 0;
          ctx2.setLineDash(dashes);
        }
        ctx2.beginPath();
        let rx, ry, xAxisRotation, largeArcFlag, sweepFlag, ax, ay;
        for (let i = 0; i < length; i++) {
          b = commands[i];
          x = b.x;
          y = b.y;
          switch (b.command) {
            case Commands.close:
              ctx2.closePath();
              break;
            case Commands.arc:
              rx = b.rx;
              ry = b.ry;
              xAxisRotation = b.xAxisRotation;
              largeArcFlag = b.largeArcFlag;
              sweepFlag = b.sweepFlag;
              prev = closed2 ? mod(i - 1, length) : max2(i - 1, 0);
              a = commands[prev];
              ax = a.x;
              ay = a.y;
              canvas.renderSvgArcCommand(
                ctx2,
                ax,
                ay,
                rx,
                ry,
                largeArcFlag,
                sweepFlag,
                xAxisRotation,
                x,
                y
              );
              break;
            case Commands.curve:
              prev = closed2 ? mod(i - 1, length) : Math.max(i - 1, 0);
              a = commands[prev];
              ar = a.controls && a.controls.right || Vector.zero;
              bl = b.controls && b.controls.left || Vector.zero;
              if (a._relative) {
                vx = ar.x + a.x;
                vy = ar.y + a.y;
              } else {
                vx = ar.x;
                vy = ar.y;
              }
              if (b._relative) {
                ux = bl.x + b.x;
                uy = bl.y + b.y;
              } else {
                ux = bl.x;
                uy = bl.y;
              }
              ctx2.bezierCurveTo(vx, vy, ux, uy, x, y);
              if (i >= last && closed2) {
                c = d;
                br = b.controls && b.controls.right || Vector.zero;
                cl = c.controls && c.controls.left || Vector.zero;
                if (b._relative) {
                  vx = br.x + b.x;
                  vy = br.y + b.y;
                } else {
                  vx = br.x;
                  vy = br.y;
                }
                if (c._relative) {
                  ux = cl.x + c.x;
                  uy = cl.y + c.y;
                } else {
                  ux = cl.x;
                  uy = cl.y;
                }
                x = c.x;
                y = c.y;
                ctx2.bezierCurveTo(vx, vy, ux, uy, x, y);
              }
              break;
            case Commands.line:
              ctx2.lineTo(x, y);
              break;
            case Commands.move:
              d = b;
              ctx2.moveTo(x, y);
              break;
          }
        }
        if (closed2) {
          ctx2.closePath();
        }
        if (!clip && !parentClipped) {
          if (!canvas.isHidden.test(fill)) {
            isOffset = fill._renderer && fill._renderer.offset;
            if (isOffset) {
              ctx2.save();
              ctx2.translate(
                -fill._renderer.offset.x,
                -fill._renderer.offset.y
              );
              ctx2.scale(fill._renderer.scale.x, fill._renderer.scale.y);
            }
            ctx2.fill();
            if (isOffset) {
              ctx2.restore();
            }
          }
          if (!canvas.isHidden.test(stroke)) {
            isOffset = stroke._renderer && stroke._renderer.offset;
            if (isOffset) {
              ctx2.save();
              ctx2.translate(
                -stroke._renderer.offset.x,
                -stroke._renderer.offset.y
              );
              ctx2.scale(stroke._renderer.scale.x, stroke._renderer.scale.y);
              ctx2.lineWidth = linewidth / stroke._renderer.scale.x;
            }
            ctx2.stroke();
            if (isOffset) {
              ctx2.restore();
            }
          }
        }
        if (!defaultMatrix) {
          ctx2.restore();
        }
        if (clip && !parentClipped) {
          ctx2.clip();
        }
        if (dashes && dashes.length > 0) {
          ctx2.setLineDash(emptyArray);
        }
        return this.flagReset();
      }
    },
    points: {
      render: function(ctx2, forced, parentClipped) {
        let me, stroke, linewidth, fill, opacity, visible, size, commands, length, b, x, y, defaultMatrix, isOffset, dashes, po;
        po = this.parent && this.parent._renderer ? this.parent._renderer.opacity : 1;
        opacity = this._opacity * (po || 1);
        visible = this._visible;
        if (!forced && (!visible || opacity === 0)) {
          return this;
        }
        this._update();
        me = this._matrix.elements;
        stroke = this._stroke;
        linewidth = this._linewidth;
        fill = this._fill;
        commands = this._renderer.collection;
        length = commands.length;
        defaultMatrix = isDefaultMatrix(me);
        dashes = this.dashes;
        size = this._size;
        if (!defaultMatrix) {
          ctx2.save();
          ctx2.transform(me[0], me[3], me[1], me[4], me[2], me[5]);
        }
        if (fill) {
          if (typeof fill === "string") {
            ctx2.fillStyle = fill;
          } else {
            canvas[fill._renderer.type].render.call(fill, ctx2, this);
            ctx2.fillStyle = fill._renderer.effect;
          }
        }
        if (stroke) {
          if (typeof stroke === "string") {
            ctx2.strokeStyle = stroke;
          } else {
            canvas[stroke._renderer.type].render.call(stroke, ctx2, this);
            ctx2.strokeStyle = stroke._renderer.effect;
          }
          if (linewidth) {
            ctx2.lineWidth = linewidth;
          }
        }
        if (typeof opacity === "number") {
          ctx2.globalAlpha = opacity;
        }
        if (dashes && dashes.length > 0) {
          ctx2.lineDashOffset = dashes.offset || 0;
          ctx2.setLineDash(dashes);
        }
        ctx2.beginPath();
        let radius = size * 0.5, m;
        if (!this._sizeAttenuation) {
          m = this.worldMatrix.elements;
          m = decomposeMatrix(m[0], m[3], m[1], m[4], m[2], m[5]);
          radius /= Math.max(m.scaleX, m.scaleY);
        }
        for (let i = 0; i < length; i++) {
          b = commands[i];
          x = b.x;
          y = b.y;
          ctx2.moveTo(x + radius, y);
          ctx2.arc(x, y, radius, 0, TWO_PI);
        }
        if (!parentClipped) {
          if (!canvas.isHidden.test(fill)) {
            isOffset = fill._renderer && fill._renderer.offset;
            if (isOffset) {
              ctx2.save();
              ctx2.translate(
                -fill._renderer.offset.x,
                -fill._renderer.offset.y
              );
              ctx2.scale(fill._renderer.scale.x, fill._renderer.scale.y);
            }
            ctx2.fill();
            if (isOffset) {
              ctx2.restore();
            }
          }
          if (!canvas.isHidden.test(stroke)) {
            isOffset = stroke._renderer && stroke._renderer.offset;
            if (isOffset) {
              ctx2.save();
              ctx2.translate(
                -stroke._renderer.offset.x,
                -stroke._renderer.offset.y
              );
              ctx2.scale(stroke._renderer.scale.x, stroke._renderer.scale.y);
              ctx2.lineWidth = linewidth / stroke._renderer.scale.x;
            }
            ctx2.stroke();
            if (isOffset) {
              ctx2.restore();
            }
          }
        }
        if (!defaultMatrix) {
          ctx2.restore();
        }
        if (dashes && dashes.length > 0) {
          ctx2.setLineDash(emptyArray);
        }
        return this.flagReset();
      }
    },
    text: {
      render: function(ctx2, forced, parentClipped) {
        const po = this.parent && this.parent._renderer ? this.parent._renderer.opacity : 1;
        const opacity = this._opacity * po;
        const visible = this._visible;
        const mask = this._mask;
        const clip = this._clip;
        if (!forced && (!visible || clip || opacity === 0)) {
          return this;
        }
        this._update();
        const matrix = this._matrix.elements;
        const stroke = this._stroke;
        const linewidth = this._linewidth;
        const fill = this._fill;
        const decoration = this._decoration;
        const defaultMatrix = isDefaultMatrix(matrix);
        const isOffset = fill._renderer && fill._renderer.offset && stroke._renderer && stroke._renderer.offset;
        const dashes = this.dashes;
        const alignment = canvas.alignments[this._alignment] || this._alignment;
        const baseline = this._baseline;
        let a, b, c, d, e, sx, sy, x1, y1, x2, y2;
        if (!defaultMatrix) {
          ctx2.save();
          ctx2.transform(matrix[0], matrix[3], matrix[1], matrix[4], matrix[2], matrix[5]);
        }
        if (mask) {
          canvas[mask._renderer.type].render.call(mask, ctx2, true);
        }
        if (!isOffset) {
          ctx2.font = [this._style, this._weight, this._size + "px/" + this._leading + "px", this._family].join(" ");
        }
        ctx2.textAlign = alignment;
        ctx2.textBaseline = baseline;
        if (fill) {
          if (typeof fill === "string") {
            ctx2.fillStyle = fill;
          } else {
            canvas[fill._renderer.type].render.call(fill, ctx2, this);
            ctx2.fillStyle = fill._renderer.effect;
          }
        }
        if (stroke) {
          if (typeof stroke === "string") {
            ctx2.strokeStyle = stroke;
          } else {
            canvas[stroke._renderer.type].render.call(stroke, ctx2, this);
            ctx2.strokeStyle = stroke._renderer.effect;
          }
          if (linewidth) {
            ctx2.lineWidth = linewidth;
          }
        }
        if (typeof opacity === "number") {
          ctx2.globalAlpha = opacity;
        }
        if (dashes && dashes.length > 0) {
          ctx2.lineDashOffset = dashes.offset || 0;
          ctx2.setLineDash(dashes);
        }
        if (!clip && !parentClipped) {
          if (!canvas.isHidden.test(fill)) {
            if (fill._renderer && fill._renderer.offset) {
              sx = fill._renderer.scale.x;
              sy = fill._renderer.scale.y;
              ctx2.save();
              ctx2.translate(
                -fill._renderer.offset.x,
                -fill._renderer.offset.y
              );
              ctx2.scale(sx, sy);
              a = this._size / fill._renderer.scale.y;
              b = this._leading / fill._renderer.scale.y;
              ctx2.font = [
                this._style,
                this._weight,
                a + "px/",
                b + "px",
                this._family
              ].join(" ");
              c = fill._renderer.offset.x / fill._renderer.scale.x;
              d = fill._renderer.offset.y / fill._renderer.scale.y;
              ctx2.fillText(this.value, c, d);
              ctx2.restore();
            } else {
              ctx2.fillText(this.value, 0, 0);
            }
          }
          if (!canvas.isHidden.test(stroke)) {
            if (stroke._renderer && stroke._renderer.offset) {
              sx = stroke._renderer.scale.x;
              sy = stroke._renderer.scale.y;
              ctx2.save();
              ctx2.translate(
                -stroke._renderer.offset.x,
                -stroke._renderer.offset.y
              );
              ctx2.scale(sx, sy);
              a = this._size / stroke._renderer.scale.y;
              b = this._leading / stroke._renderer.scale.y;
              ctx2.font = [
                this._style,
                this._weight,
                a + "px/",
                b + "px",
                this._family
              ].join(" ");
              c = stroke._renderer.offset.x / stroke._renderer.scale.x;
              d = stroke._renderer.offset.y / stroke._renderer.scale.y;
              e = linewidth / stroke._renderer.scale.x;
              ctx2.lineWidth = e;
              ctx2.strokeText(this.value, c, d);
              ctx2.restore();
            } else {
              ctx2.strokeText(this.value, 0, 0);
            }
          }
        }
        if (/(underline|strikethrough)/i.test(decoration)) {
          const metrics = ctx2.measureText(this.value);
          let scalar = 1;
          switch (decoration) {
            case "underline":
              y1 = metrics.actualBoundingBoxAscent;
              y2 = metrics.actualBoundingBoxAscent;
              break;
            case "strikethrough":
              y1 = 0;
              y2 = 0;
              scalar = 0.5;
              break;
          }
          switch (baseline) {
            case "top":
              y1 += this._size * scalar;
              y2 += this._size * scalar;
              break;
            case "baseline":
            case "bottom":
              y1 -= this._size * scalar;
              y2 -= this._size * scalar;
              break;
          }
          switch (alignment) {
            case "left":
            case "start":
              x1 = 0;
              x2 = metrics.width;
              break;
            case "right":
            case "end":
              x1 = -metrics.width;
              x2 = 0;
              break;
            default:
              x1 = -metrics.width / 2;
              x2 = metrics.width / 2;
          }
          ctx2.lineWidth = Math.max(Math.floor(this._size / 15), 1);
          ctx2.strokeStyle = ctx2.fillStyle;
          ctx2.beginPath();
          ctx2.moveTo(x1, y1);
          ctx2.lineTo(x2, y2);
          ctx2.stroke();
        }
        if (!defaultMatrix) {
          ctx2.restore();
        }
        if (clip && !parentClipped) {
          ctx2.clip();
        }
        if (dashes && dashes.length > 0) {
          ctx2.setLineDash(emptyArray);
        }
        return this.flagReset();
      }
    },
    "linear-gradient": {
      render: function(ctx2, parent) {
        if (!parent) {
          return;
        }
        this._update();
        if (!this._renderer.effect || this._flagEndPoints || this._flagStops || this._flagUnits) {
          let rect;
          let lx = this.left._x;
          let ly = this.left._y;
          let rx = this.right._x;
          let ry = this.right._y;
          if (/objectBoundingBox/i.test(this._units)) {
            rect = parent.getBoundingClientRect(true);
            lx = (lx - 0.5) * rect.width;
            ly = (ly - 0.5) * rect.height;
            rx = (rx - 0.5) * rect.width;
            ry = (ry - 0.5) * rect.height;
          }
          this._renderer.effect = ctx2.createLinearGradient(lx, ly, rx, ry);
          for (let i = 0; i < this.stops.length; i++) {
            const stop = this.stops[i];
            this._renderer.effect.addColorStop(stop._offset, stop._color);
          }
        }
        return this.flagReset();
      }
    },
    "radial-gradient": {
      render: function(ctx2, parent) {
        if (!parent) {
          return;
        }
        this._update();
        if (!this._renderer.effect || this._flagCenter || this._flagFocal || this._flagRadius || this._flagStops || this._flagUnits) {
          let rect;
          let cx = this.center._x;
          let cy = this.center._y;
          let fx = this.focal._x;
          let fy = this.focal._y;
          let radius = this._radius;
          if (/objectBoundingBox/i.test(this._units)) {
            rect = parent.getBoundingClientRect(true);
            cx = cx * rect.width * 0.5;
            cy = cy * rect.height * 0.5;
            fx = fx * rect.width * 0.5;
            fy = fy * rect.height * 0.5;
            radius *= Math.min(rect.width, rect.height) * 0.5;
          }
          this._renderer.effect = ctx2.createRadialGradient(
            cx,
            cy,
            0,
            fx,
            fy,
            radius
          );
          for (let i = 0; i < this.stops.length; i++) {
            const stop = this.stops[i];
            this._renderer.effect.addColorStop(stop._offset, stop._color);
          }
        }
        return this.flagReset();
      }
    },
    texture: {
      render: function(ctx2) {
        this._update();
        const image = this.image;
        if (!this._renderer.effect || (this._flagLoaded || this._flagImage || this._flagVideo || this._flagRepeat) && this.loaded) {
          this._renderer.effect = ctx2.createPattern(this.image, this._repeat);
        }
        if (this._flagOffset || this._flagLoaded || this._flagScale) {
          if (!(this._renderer.offset instanceof Vector)) {
            this._renderer.offset = new Vector();
          }
          this._renderer.offset.x = -this._offset.x;
          this._renderer.offset.y = -this._offset.y;
          if (image) {
            this._renderer.offset.x += image.width / 2;
            this._renderer.offset.y += image.height / 2;
            if (this._scale instanceof Vector) {
              this._renderer.offset.x *= this._scale.x;
              this._renderer.offset.y *= this._scale.y;
            } else {
              this._renderer.offset.x *= this._scale;
              this._renderer.offset.y *= this._scale;
            }
          }
        }
        if (this._flagScale || this._flagLoaded) {
          if (!(this._renderer.scale instanceof Vector)) {
            this._renderer.scale = new Vector();
          }
          if (this._scale instanceof Vector) {
            this._renderer.scale.copy(this._scale);
          } else {
            this._renderer.scale.set(this._scale, this._scale);
          }
        }
        return this.flagReset();
      }
    },
    renderSvgArcCommand: function(ctx2, ax, ay, rx, ry, largeArcFlag, sweepFlag, xAxisRotation, x, y) {
      xAxisRotation = xAxisRotation * Math.PI / 180;
      rx = abs(rx);
      ry = abs(ry);
      const dx2 = (ax - x) / 2;
      const dy2 = (ay - y) / 2;
      const x1p = cos2(xAxisRotation) * dx2 + sin2(xAxisRotation) * dy2;
      const y1p = -sin2(xAxisRotation) * dx2 + cos2(xAxisRotation) * dy2;
      const x1ps = x1p * x1p;
      const y1ps = y1p * y1p;
      let rxs = rx * rx;
      let rys = ry * ry;
      const cr = x1ps / rxs + y1ps / rys;
      if (cr > 1) {
        const s = sqrt(cr);
        rx = s * rx;
        ry = s * ry;
        rxs = rx * rx;
        rys = ry * ry;
      }
      const dq = rxs * y1ps + rys * x1ps;
      const pq = (rxs * rys - dq) / dq;
      let q = sqrt(max2(0, pq));
      if (largeArcFlag === sweepFlag)
        q = -q;
      const cxp = q * rx * y1p / ry;
      const cyp = -q * ry * x1p / rx;
      const cx = cos2(xAxisRotation) * cxp - sin2(xAxisRotation) * cyp + (ax + x) / 2;
      const cy = sin2(xAxisRotation) * cxp + cos2(xAxisRotation) * cyp + (ay + y) / 2;
      const startAngle = svgAngle(1, 0, (x1p - cxp) / rx, (y1p - cyp) / ry);
      const delta = svgAngle(
        (x1p - cxp) / rx,
        (y1p - cyp) / ry,
        (-x1p - cxp) / rx,
        (-y1p - cyp) / ry
      ) % TWO_PI;
      const endAngle = startAngle + delta;
      const clockwise = sweepFlag === 0;
      renderArcEstimate(
        ctx2,
        cx,
        cy,
        rx,
        ry,
        startAngle,
        endAngle,
        clockwise,
        xAxisRotation
      );
    }
  };
  var Renderer = class extends Events {
    constructor(params) {
      super();
      const smoothing = params.smoothing !== false;
      this.domElement = params.domElement || document.createElement("canvas");
      this.ctx = this.domElement.getContext("2d");
      this.overdraw = params.overdraw || false;
      if (typeof this.ctx.imageSmoothingEnabled !== "undefined") {
        this.ctx.imageSmoothingEnabled = smoothing;
      }
      this.scene = new Group();
      this.scene.parent = this;
    }
    setSize(width, height, ratio) {
      this.width = width;
      this.height = height;
      this.ratio = typeof ratio === "undefined" ? getRatio(this.ctx) : ratio;
      this.domElement.width = width * this.ratio;
      this.domElement.height = height * this.ratio;
      if (this.domElement.style) {
        _.extend(this.domElement.style, {
          width: width + "px",
          height: height + "px"
        });
      }
      return this.trigger(Events.Types.resize, width, height, ratio);
    }
    render() {
      const isOne = this.ratio === 1;
      if (!isOne) {
        this.ctx.save();
        this.ctx.scale(this.ratio, this.ratio);
      }
      if (!this.overdraw) {
        this.ctx.clearRect(0, 0, this.width, this.height);
      }
      canvas.group.render.call(this.scene, this.ctx);
      if (!isOne) {
        this.ctx.restore();
      }
      return this;
    }
  };
  __publicField2(Renderer, "Utils", canvas);
  function renderArcEstimate(ctx2, ox, oy, rx, ry, startAngle, endAngle, clockwise, xAxisRotation) {
    const delta = endAngle - startAngle;
    const epsilon = Curve.Tolerance.epsilon;
    const samePoints = Math.abs(delta) < epsilon;
    let deltaAngle = mod(delta, TWO_PI);
    if (deltaAngle < epsilon) {
      if (samePoints) {
        deltaAngle = 0;
      } else {
        deltaAngle = TWO_PI;
      }
    }
    if (clockwise === true && !samePoints) {
      if (deltaAngle === TWO_PI) {
        deltaAngle = -TWO_PI;
      } else {
        deltaAngle = deltaAngle - TWO_PI;
      }
    }
    for (let i = 0; i < Constants.Resolution; i++) {
      const t = i / (Constants.Resolution - 1);
      const angle = startAngle + t * deltaAngle;
      let x = ox + rx * Math.cos(angle);
      let y = oy + ry * Math.sin(angle);
      if (xAxisRotation !== 0) {
        const cos7 = Math.cos(xAxisRotation);
        const sin7 = Math.sin(xAxisRotation);
        const tx = x - ox;
        const ty = y - oy;
        x = tx * cos7 - ty * sin7 + ox;
        y = tx * sin7 + ty * cos7 + oy;
      }
      ctx2.lineTo(x, y);
    }
  }
  function svgAngle(ux, uy, vx, vy) {
    const dot = ux * vx + uy * vy;
    const len = sqrt(ux * ux + uy * uy) * sqrt(vx * vx + vy * vy);
    let ang = acos(max2(-1, min2(1, dot / len)));
    if (ux * vy - uy * vx < 0) {
      ang = -ang;
    }
    return ang;
  }
  function isDefaultMatrix(m) {
    return m[0] == 1 && m[3] == 0 && m[1] == 0 && m[4] == 1 && m[2] == 0 && m[5] == 0;
  }
  var CanvasShim = {
    Image: null,
    isHeadless: false,
    shim: function(canvas3, Image) {
      Renderer.Utils.shim(canvas3);
      if (typeof Image !== "undefined") {
        CanvasShim.Image = Image;
      }
      CanvasShim.isHeadless = true;
      return canvas3;
    }
  };
  var dom = {
    hasEventListeners: typeof root.addEventListener === "function",
    bind: function(elem, event, func, bool) {
      if (this.hasEventListeners) {
        elem.addEventListener(event, func, !!bool);
      } else {
        elem.attachEvent("on" + event, func);
      }
      return dom;
    },
    unbind: function(elem, event, func, bool) {
      if (dom.hasEventListeners) {
        elem.removeEventListeners(event, func, !!bool);
      } else {
        elem.detachEvent("on" + event, func);
      }
      return dom;
    },
    getRequestAnimationFrame: function() {
      const vendors = ["ms", "moz", "webkit", "o"];
      let lastTime = 0;
      let request = root.requestAnimationFrame;
      if (!request) {
        for (let i = 0; i < vendors.length; i++) {
          request = root[vendors[i] + "RequestAnimationFrame"] || request;
        }
        request = request || fallbackRequest;
      }
      function fallbackRequest(callback, element) {
        const currTime = new Date().getTime();
        const timeToCall = Math.max(0, 16 - (currTime - lastTime));
        const id = root.setTimeout(nextRequest, timeToCall);
        lastTime = currTime + timeToCall;
        function nextRequest() {
          callback(currTime + timeToCall);
        }
        return id;
      }
      return request;
    }
  };
  var temp = root.document ? root.document.createElement("div") : {};
  temp.id = "help-two-load";
  Object.defineProperty(dom, "temp", {
    enumerable: true,
    get: function() {
      if (_.isElement(temp) && !root.document.head.contains(temp)) {
        temp.style.display = "none";
        root.document.head.appendChild(temp);
      }
      return temp;
    }
  });
  var TwoError = class extends Error {
    constructor(message) {
      super();
      __publicField2(this, "name", "Two.js");
      __publicField2(this, "message");
      this.message = message;
    }
  };
  var Registry = class {
    constructor() {
      __publicField2(this, "map", {});
    }
    add(id, obj) {
      this.map[id] = obj;
      return this;
    }
    remove(id) {
      delete this.map[id];
      return this;
    }
    get(id) {
      return this.map[id];
    }
    contains(id) {
      return id in this.map;
    }
  };
  function contains(path2, t) {
    if (t === 0 || t === 1) {
      return true;
    }
    const length = path2._length;
    const target = length * t;
    let elapsed = 0;
    for (let i = 0; i < path2._lengths.length; i++) {
      const dist = path2._lengths[i];
      if (elapsed >= target) {
        return target - elapsed >= 0;
      }
      elapsed += dist;
    }
    return false;
  }
  function getIdByLength(path2, target) {
    const total = path2._length;
    if (target <= 0) {
      return 0;
    } else if (target >= total) {
      return path2._lengths.length - 1;
    }
    for (let i = 0, sum = 0; i < path2._lengths.length; i++) {
      if (sum + path2._lengths[i] >= target) {
        target -= sum;
        return Math.max(i - 1, 0) + target / path2._lengths[i];
      }
      sum += path2._lengths[i];
    }
    return -1;
  }
  function getCurveLength2(a, b, limit) {
    let x1, x2, x3, x4, y1, y2, y3, y4;
    const right = b.controls && b.controls.right;
    const left = a.controls && a.controls.left;
    x1 = b.x;
    y1 = b.y;
    x2 = (right || b).x;
    y2 = (right || b).y;
    x3 = (left || a).x;
    y3 = (left || a).y;
    x4 = a.x;
    y4 = a.y;
    if (right && b._relative) {
      x2 += b.x;
      y2 += b.y;
    }
    if (left && a._relative) {
      x3 += a.x;
      y3 += a.y;
    }
    return getCurveLength(x1, y1, x2, y2, x3, y3, x4, y4, limit);
  }
  function getSubdivisions(a, b, limit) {
    let x1, x2, x3, x4, y1, y2, y3, y4;
    const right = b.controls && b.controls.right;
    const left = a.controls && a.controls.left;
    x1 = b.x;
    y1 = b.y;
    x2 = (right || b).x;
    y2 = (right || b).y;
    x3 = (left || a).x;
    y3 = (left || a).y;
    x4 = a.x;
    y4 = a.y;
    if (right && b._relative) {
      x2 += b.x;
      y2 += b.y;
    }
    if (left && a._relative) {
      x3 += a.x;
      y3 += a.y;
    }
    return subdivide(x1, y1, x2, y2, x3, y3, x4, y4, limit);
  }
  var _Stop = class extends Element {
    constructor(offset, color, opacity) {
      super();
      __publicField2(this, "_flagOffset", true);
      __publicField2(this, "_flagOpacity", true);
      __publicField2(this, "_flagColor", true);
      __publicField2(this, "_offset", 0);
      __publicField2(this, "_opacity", 1);
      __publicField2(this, "_color", "#fff");
      for (let prop in proto6) {
        Object.defineProperty(this, prop, proto6[prop]);
      }
      this._renderer.type = "stop";
      this.offset = typeof offset === "number" ? offset : _Stop.Index <= 0 ? 0 : 1;
      this.opacity = typeof opacity === "number" ? opacity : 1;
      this.color = typeof color === "string" ? color : _Stop.Index <= 0 ? "#fff" : "#000";
      _Stop.Index = (_Stop.Index + 1) % 2;
    }
    clone(parent) {
      const clone = new _Stop();
      _.each(_Stop.Properties, function(property) {
        clone[property] = this[property];
      }, this);
      if (parent && parent.stops) {
        parent.stops.push(clone);
      }
      return clone;
    }
    toObject() {
      const result = {};
      _.each(_Stop.Properties, function(k) {
        result[k] = this[k];
      }, this);
      return result;
    }
    flagReset() {
      this._flagOffset = this._flagColor = this._flagOpacity = false;
      super.flagReset.call(this);
      return this;
    }
  };
  var Stop = _Stop;
  __publicField2(Stop, "Index", 0);
  __publicField2(Stop, "Properties", ["offset", "opacity", "color"]);
  var proto6 = {
    offset: {
      enumerable: true,
      get: function() {
        return this._offset;
      },
      set: function(v) {
        this._offset = v;
        this._flagOffset = true;
        if (this.parent) {
          this.parent._flagStops = true;
        }
      }
    },
    opacity: {
      enumerable: true,
      get: function() {
        return this._opacity;
      },
      set: function(v) {
        this._opacity = v;
        this._flagOpacity = true;
        if (this.parent) {
          this.parent._flagStops = true;
        }
      }
    },
    color: {
      enumerable: true,
      get: function() {
        return this._color;
      },
      set: function(v) {
        this._color = v;
        this._flagColor = true;
        if (this.parent) {
          this.parent._flagStops = true;
        }
      }
    }
  };
  var _Gradient = class extends Element {
    constructor(stops) {
      super();
      __publicField2(this, "_flagStops", false);
      __publicField2(this, "_flagSpread", false);
      __publicField2(this, "_flagUnits", false);
      __publicField2(this, "_spread", "");
      __publicField2(this, "_units", "");
      for (let prop in proto7) {
        Object.defineProperty(this, prop, proto7[prop]);
      }
      this._renderer.type = "gradient";
      this.id = Constants.Identifier + Constants.uniqueId();
      this.classList = [];
      this._renderer.flagStops = FlagStops.bind(this);
      this._renderer.bindStops = BindStops.bind(this);
      this._renderer.unbindStops = UnbindStops.bind(this);
      this.spread = "pad";
      this.units = "objectBoundingBox";
      if (stops) {
        this.stops = stops;
      }
    }
    clone(parent) {
      const stops = this.stops.map(function(s) {
        return s.clone();
      });
      const clone = new _Gradient(stops);
      _.each(_Gradient.Properties, function(k) {
        clone[k] = this[k];
      }, this);
      if (parent) {
        parent.add(clone);
      }
      return clone;
    }
    toObject() {
      const result = {
        stops: this.stops.map(function(s) {
          return s.toObject();
        })
      };
      _.each(_Gradient.Properties, function(k) {
        result[k] = this[k];
      }, this);
      return result;
    }
    _update() {
      if (this._flagSpread || this._flagStops) {
        this.trigger(Events.Types.change);
      }
      return this;
    }
    flagReset() {
      this._flagSpread = this._flagUnits = this._flagStops = false;
      super.flagReset.call(this);
      return this;
    }
  };
  var Gradient = _Gradient;
  __publicField2(Gradient, "Stop", Stop);
  __publicField2(Gradient, "Properties", ["spread", "stops", "renderer", "units"]);
  var proto7 = {
    spread: {
      enumerable: true,
      get: function() {
        return this._spread;
      },
      set: function(v) {
        this._spread = v;
        this._flagSpread = true;
      }
    },
    units: {
      enumerable: true,
      get: function() {
        return this._units;
      },
      set: function(v) {
        this._units = v;
        this._flagUnits = true;
      }
    },
    stops: {
      enumerable: true,
      get: function() {
        return this._stops;
      },
      set: function(stops) {
        const bindStops = this._renderer.bindStops;
        const unbindStops = this._renderer.unbindStops;
        if (this._stops) {
          this._stops.unbind(Events.Types.insert, bindStops).unbind(Events.Types.remove, unbindStops);
        }
        this._stops = new Collection((stops || []).slice(0));
        this._stops.bind(Events.Types.insert, bindStops).bind(Events.Types.remove, unbindStops);
        bindStops(this._stops);
      }
    }
  };
  function FlagStops() {
    this._flagStops = true;
  }
  function BindStops(items) {
    let i = items.length;
    while (i--) {
      items[i].bind(Events.Types.change, this._renderer.flagStops);
      items[i].parent = this;
    }
    this._renderer.flagStops();
  }
  function UnbindStops(items) {
    let i = items.length;
    while (i--) {
      items[i].unbind(Events.Types.change, this._renderer.flagStops);
      delete items[i].parent;
    }
    this._renderer.flagStops();
  }
  var _LinearGradient = class extends Gradient {
    constructor(x1, y1, x2, y2, stops) {
      super(stops);
      __publicField2(this, "_flagEndPoints", false);
      __publicField2(this, "_left", null);
      __publicField2(this, "_right", null);
      for (let prop in proto8) {
        Object.defineProperty(this, prop, proto8[prop]);
      }
      this._renderer.type = "linear-gradient";
      this._renderer.flagEndPoints = FlagEndPoints.bind(this);
      this.left = new Vector();
      this.right = new Vector();
      if (typeof x1 === "number") {
        this.left.x = x1;
      }
      if (typeof y1 === "number") {
        this.left.y = y1;
      }
      if (typeof x2 === "number") {
        this.right.x = x2;
      }
      if (typeof y2 === "number") {
        this.right.y = y2;
      }
    }
    clone(parent) {
      const stops = this.stops.map(function(stop) {
        return stop.clone();
      });
      const clone = new _LinearGradient(
        this.left._x,
        this.left._y,
        this.right._x,
        this.right._y,
        stops
      );
      _.each(Gradient.Properties, function(k) {
        clone[k] = this[k];
      }, this);
      if (parent) {
        parent.add(clone);
      }
      return clone;
    }
    toObject() {
      const result = super.toObject.call(this);
      result.left = this.left.toObject();
      result.right = this.right.toObject();
      return result;
    }
    _update() {
      if (this._flagEndPoints || this._flagSpread || this._flagStops) {
        this.trigger(Events.Types.change);
      }
      return this;
    }
    flagReset() {
      this._flagEndPoints = false;
      super.flagReset.call(this);
      return this;
    }
  };
  var LinearGradient = _LinearGradient;
  __publicField2(LinearGradient, "Properties", ["left", "right"]);
  __publicField2(LinearGradient, "Stop", Stop);
  var proto8 = {
    left: {
      enumerable: true,
      get: function() {
        return this._left;
      },
      set: function(v) {
        if (this._left instanceof Vector) {
          this._left.unbind(Events.Types.change, this._renderer.flagEndPoints);
        }
        this._left = v;
        this._left.bind(Events.Types.change, this._renderer.flagEndPoints);
        this._flagEndPoints = true;
      }
    },
    right: {
      enumerable: true,
      get: function() {
        return this._right;
      },
      set: function(v) {
        if (this._right instanceof Vector) {
          this._right.unbind(Events.Types.change, this._renderer.flagEndPoints);
        }
        this._right = v;
        this._right.bind(Events.Types.change, this._renderer.flagEndPoints);
        this._flagEndPoints = true;
      }
    }
  };
  function FlagEndPoints() {
    this._flagEndPoints = true;
  }
  var _RadialGradient = class extends Gradient {
    constructor(cx, cy, r, stops, fx, fy) {
      super(stops);
      __publicField2(this, "_flagRadius", false);
      __publicField2(this, "_flagCenter", false);
      __publicField2(this, "_flagFocal", false);
      __publicField2(this, "_radius", 0);
      __publicField2(this, "_center", null);
      __publicField2(this, "_focal", null);
      for (let prop in proto9) {
        Object.defineProperty(this, prop, proto9[prop]);
      }
      this._renderer.type = "radial-gradient";
      this._renderer.flagCenter = FlagCenter.bind(this);
      this._renderer.flagFocal = FlagFocal.bind(this);
      this.center = new Vector();
      this.radius = typeof r === "number" ? r : 1;
      this.focal = new Vector();
      if (typeof cx === "number") {
        this.center.x = cx;
      }
      if (typeof cy === "number") {
        this.center.y = cy;
      }
      this.focal.copy(this.center);
      if (typeof fx === "number") {
        this.focal.x = fx;
      }
      if (typeof fy === "number") {
        this.focal.y = fy;
      }
    }
    clone(parent) {
      const stops = this.stops.map(function(stop) {
        return stop.clone();
      });
      const clone = new _RadialGradient(
        this.center._x,
        this.center._y,
        this._radius,
        stops,
        this.focal._x,
        this.focal._y
      );
      _.each(Gradient.Properties.concat(_RadialGradient.Properties), function(k) {
        clone[k] = this[k];
      }, this);
      if (parent) {
        parent.add(clone);
      }
      return clone;
    }
    toObject() {
      const result = super.toObject.call(this);
      _.each(_RadialGradient.Properties, function(k) {
        result[k] = this[k];
      }, this);
      result.center = this.center.toObject();
      result.focal = this.focal.toObject();
      return result;
    }
    _update() {
      if (this._flagRadius || this._flatCenter || this._flagFocal || this._flagSpread || this._flagStops) {
        this.trigger(Events.Types.change);
      }
      return this;
    }
    flagReset() {
      this._flagRadius = this._flagCenter = this._flagFocal = false;
      super.flagReset.call(this);
      return this;
    }
  };
  var RadialGradient = _RadialGradient;
  __publicField2(RadialGradient, "Stop", Stop);
  __publicField2(RadialGradient, "Properties", ["center", "radius", "focal"]);
  var proto9 = {
    radius: {
      enumerable: true,
      get: function() {
        return this._radius;
      },
      set: function(v) {
        this._radius = v;
        this._flagRadius = true;
      }
    },
    center: {
      enumerable: true,
      get: function() {
        return this._center;
      },
      set: function(v) {
        if (this._center) {
          this._center.unbind(Events.Types.change, this._renderer.flagCenter);
        }
        this._center = v;
        this._center.bind(Events.Types.change, this._renderer.flagCenter);
        this._flagCenter = true;
      }
    },
    focal: {
      enumerable: true,
      get: function() {
        return this._focal;
      },
      set: function(v) {
        if (this._focal) {
          this._focal.unbind(Events.Types.change, this._renderer.flagFocal);
        }
        this._focal = v;
        this._focal.bind(Events.Types.change, this._renderer.flagFocal);
        this._flagFocal = true;
      }
    }
  };
  function FlagCenter() {
    this._flagCenter = true;
  }
  function FlagFocal() {
    this._flagFocal = true;
  }
  var anchor;
  var regex = {
    video: /\.(mp4|webm|ogg)$/i,
    image: /\.(jpe?g|png|gif|tiff|webp)$/i,
    effect: /texture|gradient/i
  };
  if (root.document) {
    anchor = document.createElement("a");
  }
  var _Texture = class extends Element {
    constructor(src, callback) {
      super();
      __publicField2(this, "_flagSrc", false);
      __publicField2(this, "_flagImage", false);
      __publicField2(this, "_flagVideo", false);
      __publicField2(this, "_flagLoaded", false);
      __publicField2(this, "_flagRepeat", false);
      __publicField2(this, "_flagOffset", false);
      __publicField2(this, "_flagScale", false);
      __publicField2(this, "_src", "");
      __publicField2(this, "_image", null);
      __publicField2(this, "_loaded", false);
      __publicField2(this, "_repeat", "no-repeat");
      __publicField2(this, "_scale", 1);
      __publicField2(this, "_offset", null);
      this._renderer = {};
      for (let prop in proto10) {
        Object.defineProperty(this, prop, proto10[prop]);
      }
      this._renderer.type = "texture";
      this._renderer.flagOffset = FlagOffset.bind(this);
      this._renderer.flagScale = FlagScale.bind(this);
      this.id = Constants.Identifier + Constants.uniqueId();
      this.classList = [];
      this.loaded = false;
      this.repeat = "no-repeat";
      this.offset = new Vector();
      if (typeof callback === "function") {
        const loaded = function() {
          this.unbind(Events.Types.load, loaded);
          if (typeof callback === "function") {
            callback();
          }
        }.bind(this);
        this.bind(Events.Types.load, loaded);
      }
      if (typeof src === "string") {
        this.src = src;
      } else if (typeof src === "object") {
        const elemString = Object.prototype.toString.call(src);
        if (elemString === "[object HTMLImageElement]" || elemString === "[object HTMLCanvasElement]" || elemString === "[object HTMLVideoElement]" || elemString === "[object Image]") {
          this.image = src;
        }
      }
      this._update();
    }
    static getAbsoluteURL(path2) {
      if (!anchor) {
        return path2;
      }
      anchor.href = path2;
      return anchor.href;
    }
    static loadHeadlessBuffer(texture, loaded) {
      texture.image.onload = loaded;
      texture.image.src = texture.src;
    }
    static getTag(image) {
      return image && image.nodeName && image.nodeName.toLowerCase() || "img";
    }
    static getImage(src) {
      const absoluteSrc = _Texture.getAbsoluteURL(src);
      if (_Texture.ImageRegistry.contains(absoluteSrc)) {
        return _Texture.ImageRegistry.get(absoluteSrc);
      }
      let image;
      if (CanvasShim.Image) {
        image = new CanvasShim.Image();
        Renderer.Utils.shim(image, "img");
      } else if (root.document) {
        if (regex.video.test(absoluteSrc)) {
          image = document.createElement("video");
        } else {
          image = document.createElement("img");
        }
      } else {
        console.warn("Two.js: no prototypical image defined for Two.Texture");
      }
      image.crossOrigin = "anonymous";
      return image;
    }
    static load(texture, callback) {
      let image = texture.image;
      let tag = _Texture.getTag(image);
      if (texture._flagImage) {
        if (/canvas/i.test(tag)) {
          _Texture.Register.canvas(texture, callback);
        } else {
          texture._src = !CanvasShim.isHeadless && image.getAttribute("two-src") || image.src;
          _Texture.Register[tag](texture, callback);
        }
      }
      if (texture._flagSrc) {
        if (!image) {
          image = _Texture.getImage(texture.src);
          texture.image = image;
        }
        tag = _Texture.getTag(image);
        _Texture.Register[tag](texture, callback);
      }
    }
    clone() {
      const clone = new _Texture(this.src);
      clone.repeat = this.repeat;
      clone.offset.copy(this.origin);
      clone.scale = this.scale;
      return clone;
    }
    toObject() {
      return {
        src: this.src,
        repeat: this.repeat,
        origin: this.origin.toObject(),
        scale: typeof this.scale === "number" ? this.scale : this.scale.toObject()
      };
    }
    _update() {
      if (this._flagSrc || this._flagImage) {
        this.trigger(Events.Types.change);
        if (this._flagSrc || this._flagImage) {
          this.loaded = false;
          _Texture.load(this, function() {
            this.loaded = true;
            this.trigger(Events.Types.change).trigger(Events.Types.load);
          }.bind(this));
        }
      }
      if (this._image && this._image.readyState >= 4) {
        this._flagVideo = true;
      }
      return this;
    }
    flagReset() {
      this._flagSrc = this._flagImage = this._flagLoaded = this._flagRepeat = this._flagVideo = this._flagScale = this._flagOffset = false;
      super.flagReset.call(this);
      return this;
    }
  };
  var Texture = _Texture;
  __publicField2(Texture, "Properties", [
    "src",
    "loaded",
    "repeat",
    "scale",
    "offset",
    "image"
  ]);
  __publicField2(Texture, "RegularExpressions", regex);
  __publicField2(Texture, "ImageRegistry", new Registry());
  __publicField2(Texture, "Register", {
    canvas: function(texture, callback) {
      texture._src = "#" + texture.id;
      _Texture.ImageRegistry.add(texture.src, texture.image);
      if (typeof callback === "function") {
        callback();
      }
    },
    img: function(texture, callback) {
      const image = texture.image;
      const loaded = function(e) {
        if (!CanvasShim.isHeadless && image.removeEventListener && typeof image.removeEventListener === "function") {
          image.removeEventListener("load", loaded, false);
          image.removeEventListener("error", error, false);
        }
        if (typeof callback === "function") {
          callback();
        }
      };
      const error = function(e) {
        if (!CanvasShim.isHeadless && typeof image.removeEventListener === "function") {
          image.removeEventListener("load", loaded, false);
          image.removeEventListener("error", error, false);
        }
        throw new TwoError("unable to load " + texture.src);
      };
      if (typeof image.width === "number" && image.width > 0 && typeof image.height === "number" && image.height > 0) {
        loaded();
      } else if (!CanvasShim.isHeadless && typeof image.addEventListener === "function") {
        image.addEventListener("load", loaded, false);
        image.addEventListener("error", error, false);
      }
      texture._src = _Texture.getAbsoluteURL(texture._src);
      if (!CanvasShim.isHeadless && image && image.getAttribute("two-src")) {
        return;
      }
      if (!CanvasShim.isHeadless) {
        image.setAttribute("two-src", texture.src);
      }
      _Texture.ImageRegistry.add(texture.src, image);
      if (CanvasShim.isHeadless) {
        _Texture.loadHeadlessBuffer(texture, loaded);
      } else {
        texture.image.src = texture.src;
      }
    },
    video: function(texture, callback) {
      if (CanvasShim.isHeadless) {
        throw new TwoError("video textures are not implemented in headless environments.");
      }
      const loaded = function(e) {
        texture.image.removeEventListener("canplaythrough", loaded, false);
        texture.image.removeEventListener("error", error, false);
        texture.image.width = texture.image.videoWidth;
        texture.image.height = texture.image.videoHeight;
        if (typeof callback === "function") {
          callback();
        }
      };
      const error = function(e) {
        texture.image.removeEventListener("canplaythrough", loaded, false);
        texture.image.removeEventListener("error", error, false);
        throw new TwoError("unable to load " + texture.src);
      };
      texture._src = _Texture.getAbsoluteURL(texture._src);
      if (!texture.image.getAttribute("two-src")) {
        texture.image.setAttribute("two-src", texture.src);
        _Texture.ImageRegistry.add(texture.src, texture.image);
      }
      if (texture.image.readyState >= 4) {
        loaded();
      } else {
        texture.image.addEventListener("canplaythrough", loaded, false);
        texture.image.addEventListener("error", error, false);
        texture.image.src = texture.src;
        texture.image.load();
      }
    }
  });
  var proto10 = {
    src: {
      enumerable: true,
      get: function() {
        return this._src;
      },
      set: function(v) {
        this._src = v;
        this._flagSrc = true;
      }
    },
    loaded: {
      enumerable: true,
      get: function() {
        return this._loaded;
      },
      set: function(v) {
        this._loaded = v;
        this._flagLoaded = true;
      }
    },
    repeat: {
      enumerable: true,
      get: function() {
        return this._repeat;
      },
      set: function(v) {
        this._repeat = v;
        this._flagRepeat = true;
      }
    },
    image: {
      enumerable: true,
      get: function() {
        return this._image;
      },
      set: function(image) {
        const tag = Texture.getTag(image);
        let index;
        switch (tag) {
          case "canvas":
            index = "#" + image.id;
            break;
          default:
            index = image.src;
        }
        if (Texture.ImageRegistry.contains(index)) {
          this._image = Texture.ImageRegistry.get(image.src);
        } else {
          this._image = image;
        }
        this._flagImage = true;
      }
    },
    offset: {
      enumerable: true,
      get: function() {
        return this._offset;
      },
      set: function(v) {
        if (this._offset) {
          this._offset.unbind(Events.Types.change, this._renderer.flagOffset);
        }
        this._offset = v;
        this._offset.bind(Events.Types.change, this._renderer.flagOffset);
        this._flagOffset = true;
      }
    },
    scale: {
      enumerable: true,
      get: function() {
        return this._scale;
      },
      set: function(v) {
        if (this._scale instanceof Vector) {
          this._scale.unbind(Events.Types.change, this._renderer.flagScale);
        }
        this._scale = v;
        if (this._scale instanceof Vector) {
          this._scale.bind(Events.Types.change, this._renderer.flagScale);
        }
        this._flagScale = true;
      }
    }
  };
  function FlagOffset() {
    this._flagOffset = true;
  }
  function FlagScale() {
    this._flagScale = true;
  }
  var min3 = Math.min;
  var max3 = Math.max;
  var ceil = Math.ceil;
  var floor2 = Math.floor;
  var vector = new Vector();
  var _Path = class extends Shape {
    constructor(vertices, closed2, curved, manual) {
      super();
      __publicField2(this, "_flagVertices", true);
      __publicField2(this, "_flagLength", true);
      __publicField2(this, "_flagFill", true);
      __publicField2(this, "_flagStroke", true);
      __publicField2(this, "_flagLinewidth", true);
      __publicField2(this, "_flagOpacity", true);
      __publicField2(this, "_flagVisible", true);
      __publicField2(this, "_flagCap", true);
      __publicField2(this, "_flagJoin", true);
      __publicField2(this, "_flagMiter", true);
      __publicField2(this, "_flagMask", false);
      __publicField2(this, "_flagClip", false);
      __publicField2(this, "_length", 0);
      __publicField2(this, "_fill", "#fff");
      __publicField2(this, "_stroke", "#000");
      __publicField2(this, "_linewidth", 1);
      __publicField2(this, "_opacity", 1);
      __publicField2(this, "_visible", true);
      __publicField2(this, "_cap", "round");
      __publicField2(this, "_join", "round");
      __publicField2(this, "_miter", 4);
      __publicField2(this, "_closed", true);
      __publicField2(this, "_curved", false);
      __publicField2(this, "_automatic", true);
      __publicField2(this, "_beginning", 0);
      __publicField2(this, "_ending", 1);
      __publicField2(this, "_mask", null);
      __publicField2(this, "_clip", false);
      __publicField2(this, "_dashes", null);
      for (let prop in proto11) {
        Object.defineProperty(this, prop, proto11[prop]);
      }
      this._renderer.type = "path";
      this._renderer.flagVertices = FlagVertices.bind(this);
      this._renderer.bindVertices = BindVertices.bind(this);
      this._renderer.unbindVertices = UnbindVertices.bind(this);
      this._renderer.flagFill = FlagFill.bind(this);
      this._renderer.flagStroke = FlagStroke.bind(this);
      this._renderer.vertices = [];
      this._renderer.collection = [];
      this.closed = !!closed2;
      this.curved = !!curved;
      this.beginning = 0;
      this.ending = 1;
      this.fill = "#fff";
      this.stroke = "#000";
      this.linewidth = 1;
      this.opacity = 1;
      this.className = "";
      this.visible = true;
      this.cap = "butt";
      this.join = "miter";
      this.miter = 4;
      this.vertices = vertices;
      this.automatic = !manual;
      this.dashes = [];
      this.dashes.offset = 0;
    }
    clone(parent) {
      const clone = new _Path();
      for (let j = 0; j < this.vertices.length; j++) {
        clone.vertices.push(this.vertices[j].clone());
      }
      for (let i = 0; i < _Path.Properties.length; i++) {
        const k = _Path.Properties[i];
        clone[k] = this[k];
      }
      clone.className = this.className;
      clone.translation.copy(this.translation);
      clone.rotation = this.rotation;
      clone.scale = this.scale;
      clone.skewX = this.skewX;
      clone.skewY = this.skewY;
      if (this.matrix.manual) {
        clone.matrix.copy(this.matrix);
      }
      if (parent) {
        parent.add(clone);
      }
      return clone._update();
    }
    toObject() {
      const result = {
        vertices: this.vertices.map(function(v) {
          return v.toObject();
        })
      };
      _.each(_Path.Properties, function(k) {
        if (typeof this[k] !== "undefined") {
          if (this[k].toObject) {
            result[k] = this[k].toObject();
          } else {
            result[k] = this[k];
          }
        }
      }, this);
      result.className = this.className;
      result.translation = this.translation.toObject();
      result.rotation = this.rotation;
      result.scale = this.scale instanceof Vector ? this.scale.toObject() : this.scale;
      result.skewX = this.skewX;
      result.skewY = this.skewY;
      if (this.matrix.manual) {
        result.matrix = this.matrix.toObject();
      }
      return result;
    }
    noFill() {
      this.fill = "transparent";
      return this;
    }
    noStroke() {
      this.stroke = void 0;
      return this;
    }
    corner() {
      const rect = this.getBoundingClientRect(true);
      const hw = rect.width / 2;
      const hh = rect.height / 2;
      const cx = rect.left + rect.width / 2;
      const cy = rect.top + rect.height / 2;
      for (let i = 0; i < this.vertices.length; i++) {
        const v = this.vertices[i];
        v.x -= cx;
        v.y -= cy;
        v.x += hw;
        v.y += hh;
      }
      if (this.mask) {
        this.mask.translation.x -= cx;
        this.mask.translation.x += hw;
        this.mask.translation.y -= cy;
        this.mask.translation.y += hh;
      }
      return this;
    }
    center() {
      const rect = this.getBoundingClientRect(true);
      const cx = rect.left + rect.width / 2 - this.translation.x;
      const cy = rect.top + rect.height / 2 - this.translation.y;
      for (let i = 0; i < this.vertices.length; i++) {
        const v = this.vertices[i];
        v.x -= cx;
        v.y -= cy;
      }
      if (this.mask) {
        this.mask.translation.x -= cx;
        this.mask.translation.y -= cy;
      }
      return this;
    }
    getBoundingClientRect(shallow) {
      let matrix, border, l, i, v0, v1;
      let left = Infinity, right = -Infinity, top = Infinity, bottom = -Infinity;
      this._update(true);
      matrix = shallow ? this.matrix : this.worldMatrix;
      border = (this.linewidth || 0) / 2;
      l = this._renderer.vertices.length;
      if (this.linewidth > 0 || this.stroke && this.stroke !== "transparent") {
        if (this.matrix.manual) {
          const { scaleX, scaleY } = decomposeMatrix(
            matrix.elements[0],
            matrix.elements[3],
            matrix.elements[1],
            matrix.elements[4],
            matrix.elements[2],
            matrix.elements[5]
          );
          if (typeof scaleX === "number" && typeof scaleY === "number") {
            border = Math.max(scaleX, scaleY) * (this.linewidth || 0) / 2;
          }
        } else {
          border *= typeof this.scale === "number" ? this.scale : Math.max(this.scale.x, this.scale.y);
        }
      }
      if (l <= 0) {
        return {
          width: 0,
          height: 0
        };
      }
      for (i = 0; i < l; i++) {
        v1 = this._renderer.vertices[i];
        v0 = this._renderer.vertices[(i + l - 1) % l];
        const [v0x, v0y] = matrix.multiply(v0.x, v0.y);
        const [v1x, v1y] = matrix.multiply(v1.x, v1.y);
        if (v0.controls && v1.controls) {
          let rx = v0.controls.right.x;
          let ry = v0.controls.right.y;
          if (v0.relative) {
            rx += v0.x;
            ry += v0.y;
          }
          let [c0x, c0y] = matrix.multiply(rx, ry);
          let lx = v1.controls.left.x;
          let ly = v1.controls.left.y;
          if (v1.relative) {
            lx += v1.x;
            ly += v1.y;
          }
          let [c1x, c1y] = matrix.multiply(lx, ly);
          const bb = getCurveBoundingBox(
            v0x,
            v0y,
            c0x,
            c0y,
            c1x,
            c1y,
            v1x,
            v1y
          );
          top = min3(bb.min.y - border, top);
          left = min3(bb.min.x - border, left);
          right = max3(bb.max.x + border, right);
          bottom = max3(bb.max.y + border, bottom);
        } else {
          if (i <= 1) {
            top = min3(v0y - border, top);
            left = min3(v0x - border, left);
            right = max3(v0x + border, right);
            bottom = max3(v0y + border, bottom);
          }
          top = min3(v1y - border, top);
          left = min3(v1x - border, left);
          right = max3(v1x + border, right);
          bottom = max3(v1y + border, bottom);
        }
      }
      return {
        top,
        left,
        right,
        bottom,
        width: right - left,
        height: bottom - top
      };
    }
    getPointAt(t, obj) {
      let ia, ib, result;
      let x, x1, x2, x3, x4, y, y1, y2, y3, y4, left, right;
      let target = this.length * Math.min(Math.max(t, 0), 1);
      const length = this.vertices.length;
      const last = length - 1;
      let a = null;
      let b = null;
      for (let i = 0, l = this._lengths.length, sum = 0; i < l; i++) {
        if (sum + this._lengths[i] >= target) {
          if (this._closed) {
            ia = mod(i, length);
            ib = mod(i - 1, length);
            if (i === 0) {
              ia = ib;
              ib = i;
            }
          } else {
            ia = i;
            ib = Math.min(Math.max(i - 1, 0), last);
          }
          a = this.vertices[ia];
          b = this.vertices[ib];
          target -= sum;
          if (this._lengths[i] !== 0) {
            t = target / this._lengths[i];
          } else {
            t = 0;
          }
          break;
        }
        sum += this._lengths[i];
      }
      if (a === null || b === null) {
        return null;
      }
      if (!a) {
        return b;
      } else if (!b) {
        return a;
      }
      right = b.controls && b.controls.right;
      left = a.controls && a.controls.left;
      x1 = b.x;
      y1 = b.y;
      x2 = (right || b).x;
      y2 = (right || b).y;
      x3 = (left || a).x;
      y3 = (left || a).y;
      x4 = a.x;
      y4 = a.y;
      if (right && b.relative) {
        x2 += b.x;
        y2 += b.y;
      }
      if (left && a.relative) {
        x3 += a.x;
        y3 += a.y;
      }
      x = getComponentOnCubicBezier(t, x1, x2, x3, x4);
      y = getComponentOnCubicBezier(t, y1, y2, y3, y4);
      const t1x = lerp(x1, x2, t);
      const t1y = lerp(y1, y2, t);
      const t2x = lerp(x2, x3, t);
      const t2y = lerp(y2, y3, t);
      const t3x = lerp(x3, x4, t);
      const t3y = lerp(y3, y4, t);
      const brx = lerp(t1x, t2x, t);
      const bry = lerp(t1y, t2y, t);
      const alx = lerp(t2x, t3x, t);
      const aly = lerp(t2y, t3y, t);
      if (_.isObject(obj)) {
        obj.x = x;
        obj.y = y;
        if (obj instanceof Anchor) {
          obj.controls.left.x = brx;
          obj.controls.left.y = bry;
          obj.controls.right.x = alx;
          obj.controls.right.y = aly;
          if (!(typeof obj.relative === "boolean") || obj.relative) {
            obj.controls.left.x -= x;
            obj.controls.left.y -= y;
            obj.controls.right.x -= x;
            obj.controls.right.y -= y;
          }
        }
        obj.t = t;
        return obj;
      }
      result = new Anchor(
        x,
        y,
        brx - x,
        bry - y,
        alx - x,
        aly - y,
        this._curved ? Commands.curve : Commands.line
      );
      result.t = t;
      return result;
    }
    plot() {
      if (this.curved) {
        getCurveFromPoints(this._collection, this.closed);
        return this;
      }
      for (let i = 0; i < this._collection.length; i++) {
        this._collection[i].command = i === 0 ? Commands.move : Commands.line;
      }
      return this;
    }
    subdivide(limit) {
      this._update();
      const last = this.vertices.length - 1;
      const closed2 = this._closed || this.vertices[last]._command === Commands.close;
      let b = this.vertices[last];
      let points = [], verts;
      _.each(this.vertices, function(a, i) {
        if (i <= 0 && !closed2) {
          b = a;
          return;
        }
        if (a.command === Commands.move) {
          points.push(new Anchor(b.x, b.y));
          if (i > 0) {
            points[points.length - 1].command = Commands.line;
          }
          b = a;
          return;
        }
        verts = getSubdivisions(a, b, limit);
        points = points.concat(verts);
        _.each(verts, function(v, i2) {
          if (i2 <= 0 && b.command === Commands.move) {
            v.command = Commands.move;
          } else {
            v.command = Commands.line;
          }
        });
        if (i >= last) {
          if (this._closed && this._automatic) {
            b = a;
            verts = getSubdivisions(a, b, limit);
            points = points.concat(verts);
            _.each(verts, function(v, i2) {
              if (i2 <= 0 && b.command === Commands.move) {
                v.command = Commands.move;
              } else {
                v.command = Commands.line;
              }
            });
          } else if (closed2) {
            points.push(new Anchor(a.x, a.y));
          }
          points[points.length - 1].command = closed2 ? Commands.close : Commands.line;
        }
        b = a;
      }, this);
      this._automatic = false;
      this._curved = false;
      this.vertices = points;
      return this;
    }
    _updateLength(limit, silent) {
      if (!silent) {
        this._update();
      }
      const length = this.vertices.length;
      const last = length - 1;
      const closed2 = false;
      let b = this.vertices[last];
      let sum = 0;
      if (typeof this._lengths === "undefined") {
        this._lengths = [];
      }
      _.each(this.vertices, function(a, i) {
        if (i <= 0 && !closed2 || a.command === Commands.move) {
          b = a;
          this._lengths[i] = 0;
          return;
        }
        this._lengths[i] = getCurveLength2(a, b, limit);
        sum += this._lengths[i];
        if (i >= last && closed2) {
          b = this.vertices[(i + 1) % length];
          this._lengths[i + 1] = getCurveLength2(a, b, limit);
          sum += this._lengths[i + 1];
        }
        b = a;
      }, this);
      this._length = sum;
      this._flagLength = false;
      return this;
    }
    _update() {
      if (this._flagVertices) {
        if (this._automatic) {
          this.plot();
        }
        if (this._flagLength) {
          this._updateLength(void 0, true);
        }
        const l = this._collection.length;
        const closed2 = this._closed;
        const beginning = Math.min(this._beginning, this._ending);
        const ending = Math.max(this._beginning, this._ending);
        const bid = getIdByLength(this, beginning * this._length);
        const eid = getIdByLength(this, ending * this._length);
        const low = ceil(bid);
        const high = floor2(eid);
        let left, right, prev, next, v, i;
        this._renderer.vertices.length = 0;
        for (i = 0; i < l; i++) {
          if (this._renderer.collection.length <= i) {
            this._renderer.collection.push(new Anchor());
          }
          if (i > high && !right) {
            v = this._renderer.collection[i].copy(this._collection[i]);
            this.getPointAt(ending, v);
            v.command = this._renderer.collection[i].command;
            this._renderer.vertices.push(v);
            right = v;
            prev = this._collection[i - 1];
            if (prev && prev.controls) {
              if (v.relative) {
                v.controls.right.clear();
              } else {
                v.controls.right.copy(v);
              }
              if (prev.relative) {
                this._renderer.collection[i - 1].controls.right.copy(prev.controls.right).lerp(Vector.zero, 1 - v.t);
              } else {
                this._renderer.collection[i - 1].controls.right.copy(prev.controls.right).lerp(prev, 1 - v.t);
              }
            }
          } else if (i >= low && i <= high) {
            v = this._renderer.collection[i].copy(this._collection[i]);
            this._renderer.vertices.push(v);
            if (i === high && contains(this, ending)) {
              right = v;
              if (!closed2 && right.controls) {
                if (right.relative) {
                  right.controls.right.clear();
                } else {
                  right.controls.right.copy(right);
                }
              }
            } else if (i === low && contains(this, beginning)) {
              left = v;
              left.command = Commands.move;
              if (!closed2 && left.controls) {
                if (left.relative) {
                  left.controls.left.clear();
                } else {
                  left.controls.left.copy(left);
                }
              }
            }
          }
        }
        if (low > 0 && !left) {
          i = low - 1;
          v = this._renderer.collection[i].copy(this._collection[i]);
          this.getPointAt(beginning, v);
          v.command = Commands.move;
          this._renderer.vertices.unshift(v);
          next = this._collection[i + 1];
          if (next && next.controls) {
            v.controls.left.clear();
            if (next.relative) {
              this._renderer.collection[i + 1].controls.left.copy(next.controls.left).lerp(Vector.zero, v.t);
            } else {
              vector.copy(next);
              this._renderer.collection[i + 1].controls.left.copy(next.controls.left).lerp(next, v.t);
            }
          }
        }
      }
      Shape.prototype._update.apply(this, arguments);
      return this;
    }
    flagReset() {
      this._flagVertices = this._flagLength = this._flagFill = this._flagStroke = this._flagLinewidth = this._flagOpacity = this._flagVisible = this._flagCap = this._flagJoin = this._flagMiter = this._flagClip = false;
      Shape.prototype.flagReset.call(this);
      return this;
    }
  };
  var Path = _Path;
  __publicField2(Path, "Properties", [
    "fill",
    "stroke",
    "linewidth",
    "opacity",
    "visible",
    "cap",
    "join",
    "miter",
    "closed",
    "curved",
    "automatic",
    "beginning",
    "ending"
  ]);
  __publicField2(Path, "Utils", {
    getCurveLength: getCurveLength2
  });
  var proto11 = {
    linewidth: {
      enumerable: true,
      get: function() {
        return this._linewidth;
      },
      set: function(v) {
        this._linewidth = v;
        this._flagLinewidth = true;
      }
    },
    opacity: {
      enumerable: true,
      get: function() {
        return this._opacity;
      },
      set: function(v) {
        this._opacity = v;
        this._flagOpacity = true;
      }
    },
    visible: {
      enumerable: true,
      get: function() {
        return this._visible;
      },
      set: function(v) {
        this._visible = v;
        this._flagVisible = true;
      }
    },
    cap: {
      enumerable: true,
      get: function() {
        return this._cap;
      },
      set: function(v) {
        this._cap = v;
        this._flagCap = true;
      }
    },
    join: {
      enumerable: true,
      get: function() {
        return this._join;
      },
      set: function(v) {
        this._join = v;
        this._flagJoin = true;
      }
    },
    miter: {
      enumerable: true,
      get: function() {
        return this._miter;
      },
      set: function(v) {
        this._miter = v;
        this._flagMiter = true;
      }
    },
    fill: {
      enumerable: true,
      get: function() {
        return this._fill;
      },
      set: function(f) {
        if (this._fill instanceof Gradient || this._fill instanceof LinearGradient || this._fill instanceof RadialGradient || this._fill instanceof Texture) {
          this._fill.unbind(Events.Types.change, this._renderer.flagFill);
        }
        this._fill = f;
        this._flagFill = true;
        if (this._fill instanceof Gradient || this._fill instanceof LinearGradient || this._fill instanceof RadialGradient || this._fill instanceof Texture) {
          this._fill.bind(Events.Types.change, this._renderer.flagFill);
        }
      }
    },
    stroke: {
      enumerable: true,
      get: function() {
        return this._stroke;
      },
      set: function(f) {
        if (this._stroke instanceof Gradient || this._stroke instanceof LinearGradient || this._stroke instanceof RadialGradient || this._stroke instanceof Texture) {
          this._stroke.unbind(Events.Types.change, this._renderer.flagStroke);
        }
        this._stroke = f;
        this._flagStroke = true;
        if (this._stroke instanceof Gradient || this._stroke instanceof LinearGradient || this._stroke instanceof RadialGradient || this._stroke instanceof Texture) {
          this._stroke.bind(Events.Types.change, this._renderer.flagStroke);
        }
      }
    },
    length: {
      get: function() {
        if (this._flagLength) {
          this._updateLength();
        }
        return this._length;
      }
    },
    closed: {
      enumerable: true,
      get: function() {
        return this._closed;
      },
      set: function(v) {
        this._closed = !!v;
        this._flagVertices = true;
      }
    },
    curved: {
      enumerable: true,
      get: function() {
        return this._curved;
      },
      set: function(v) {
        this._curved = !!v;
        this._flagVertices = true;
      }
    },
    automatic: {
      enumerable: true,
      get: function() {
        return this._automatic;
      },
      set: function(v) {
        if (v === this._automatic) {
          return;
        }
        this._automatic = !!v;
        const method = this._automatic ? "ignore" : "listen";
        _.each(this.vertices, function(v2) {
          v2[method]();
        });
      }
    },
    beginning: {
      enumerable: true,
      get: function() {
        return this._beginning;
      },
      set: function(v) {
        this._beginning = v;
        this._flagVertices = true;
      }
    },
    ending: {
      enumerable: true,
      get: function() {
        return this._ending;
      },
      set: function(v) {
        this._ending = v;
        this._flagVertices = true;
      }
    },
    vertices: {
      enumerable: true,
      get: function() {
        return this._collection;
      },
      set: function(vertices) {
        const bindVertices = this._renderer.bindVertices;
        const unbindVertices = this._renderer.unbindVertices;
        if (this._collection) {
          this._collection.unbind(Events.Types.insert, bindVertices).unbind(Events.Types.remove, unbindVertices);
        }
        if (vertices instanceof Collection) {
          this._collection = vertices;
        } else {
          this._collection = new Collection(vertices || []);
        }
        this._collection.bind(Events.Types.insert, bindVertices).bind(Events.Types.remove, unbindVertices);
        bindVertices(this._collection);
      }
    },
    mask: {
      enumerable: true,
      get: function() {
        return this._mask;
      },
      set: function(v) {
        this._mask = v;
        this._flagMask = true;
        if (_.isObject(v) && !v.clip) {
          v.clip = true;
        }
      }
    },
    clip: {
      enumerable: true,
      get: function() {
        return this._clip;
      },
      set: function(v) {
        this._clip = v;
        this._flagClip = true;
      }
    },
    dashes: {
      enumerable: true,
      get: function() {
        return this._dashes;
      },
      set: function(v) {
        if (typeof v.offset !== "number") {
          v.offset = this.dashes && this._dashes.offset || 0;
        }
        this._dashes = v;
      }
    }
  };
  function FlagVertices() {
    this._flagVertices = true;
    this._flagLength = true;
    if (this.parent) {
      this.parent._flagLength = true;
    }
  }
  function BindVertices(items) {
    let i = items.length;
    while (i--) {
      items[i].bind(Events.Types.change, this._renderer.flagVertices);
    }
    this._renderer.flagVertices();
  }
  function UnbindVertices(items) {
    let i = items.length;
    while (i--) {
      items[i].unbind(Events.Types.change, this._renderer.flagVertices);
    }
    this._renderer.flagVertices();
  }
  function FlagFill() {
    this._flagFill = true;
  }
  function FlagStroke() {
    this._flagStroke = true;
  }
  var _Rectangle = class extends Path {
    constructor(x, y, width, height) {
      const points = [
        new Anchor(),
        new Anchor(),
        new Anchor(),
        new Anchor()
      ];
      super(points, true, false, true);
      __publicField2(this, "_flagWidth", 0);
      __publicField2(this, "_flagHeight", 0);
      __publicField2(this, "_width", 0);
      __publicField2(this, "_height", 0);
      __publicField2(this, "_origin", null);
      for (let prop in proto12) {
        Object.defineProperty(this, prop, proto12[prop]);
      }
      this.width = typeof width === "number" ? width : 1;
      this.height = typeof height === "number" ? height : 1;
      this.origin = new Vector();
      if (typeof x === "number") {
        this.translation.x = x;
      }
      if (typeof y === "number") {
        this.translation.y = y;
      }
      this._update();
    }
    _update() {
      if (this._flagVertices || this._flagWidth || this._flagHeight) {
        const xr = this._width / 2;
        const yr = this._height / 2;
        if (!this._closed && this.vertices.length === 4) {
          this.vertices.push(new Anchor());
        }
        this.vertices[0].set(-xr, -yr).sub(this._origin).command = Commands.move;
        this.vertices[1].set(xr, -yr).sub(this._origin).command = Commands.line;
        this.vertices[2].set(xr, yr).sub(this._origin).command = Commands.line;
        this.vertices[3].set(-xr, yr).sub(this._origin).command = Commands.line;
        if (this.vertices[4]) {
          this.vertices[4].set(-xr, -yr).sub(this._origin).command = Commands.line;
        }
      }
      super._update.call(this);
      return this;
    }
    flagReset() {
      this._flagWidth = this._flagHeight = false;
      super.flagReset.call(this);
      return this;
    }
    clone(parent) {
      const clone = new _Rectangle(0, 0, this.width, this.height);
      clone.translation.copy(this.translation);
      clone.rotation = this.rotation;
      clone.scale = this.scale;
      clone.skewX = this.skewX;
      clone.skewY = this.skewY;
      if (this.matrix.manual) {
        clone.matrix.copy(this.matrix);
      }
      for (let i = 0; i < Path.Properties.length; i++) {
        const k = Path.Properties[i];
        clone[k] = this[k];
      }
      if (parent) {
        parent.add(clone);
      }
      return clone;
    }
    toObject() {
      const object = super.toObject.call(this);
      object.width = this.width;
      object.height = this.height;
      object.origin = this.origin.toObject();
      return object;
    }
  };
  var Rectangle = _Rectangle;
  __publicField2(Rectangle, "Properties", ["width", "height"]);
  var proto12 = {
    width: {
      enumerable: true,
      get: function() {
        return this._width;
      },
      set: function(v) {
        this._width = v;
        this._flagWidth = true;
      }
    },
    height: {
      enumerable: true,
      get: function() {
        return this._height;
      },
      set: function(v) {
        this._height = v;
        this._flagHeight = true;
      }
    },
    origin: {
      enumerable: true,
      get: function() {
        return this._origin;
      },
      set: function(v) {
        if (this._origin) {
          this._origin.unbind(Events.Types.change, this._renderer.flagVertices);
        }
        this._origin = v;
        this._origin.bind(Events.Types.change, this._renderer.flagVertices);
        this._renderer.flagVertices();
      }
    }
  };
  var _Sprite = class extends Rectangle {
    constructor(path2, ox, oy, cols, rows, frameRate) {
      super(ox, oy, 0, 0);
      __publicField2(this, "_flagTexture", false);
      __publicField2(this, "_flagColumns", false);
      __publicField2(this, "_flagRows", false);
      __publicField2(this, "_flagFrameRate", false);
      __publicField2(this, "_flagIndex", false);
      __publicField2(this, "_amount", 1);
      __publicField2(this, "_duration", 0);
      __publicField2(this, "_startTime", 0);
      __publicField2(this, "_playing", false);
      __publicField2(this, "_firstFrame", 0);
      __publicField2(this, "_lastFrame", 0);
      __publicField2(this, "_loop", true);
      __publicField2(this, "_texture", null);
      __publicField2(this, "_columns", 1);
      __publicField2(this, "_rows", 1);
      __publicField2(this, "_frameRate", 0);
      __publicField2(this, "_index", 0);
      __publicField2(this, "_origin", null);
      for (let prop in proto13) {
        Object.defineProperty(this, prop, proto13[prop]);
      }
      this.noStroke();
      this.noFill();
      if (path2 instanceof Texture) {
        this.texture = path2;
      } else if (typeof path2 === "string") {
        this.texture = new Texture(path2);
      }
      this.origin = new Vector();
      this._update();
      if (typeof cols === "number") {
        this.columns = cols;
      }
      if (typeof rows === "number") {
        this.rows = rows;
      }
      if (typeof frameRate === "number") {
        this.frameRate = frameRate;
      }
      this.index = 0;
    }
    play(firstFrame, lastFrame, onLastFrame) {
      this._playing = true;
      this._firstFrame = 0;
      this._lastFrame = this.amount - 1;
      this._startTime = _.performance.now();
      if (typeof firstFrame === "number") {
        this._firstFrame = firstFrame;
      }
      if (typeof lastFrame === "number") {
        this._lastFrame = lastFrame;
      }
      if (typeof onLastFrame === "function") {
        this._onLastFrame = onLastFrame;
      } else {
        delete this._onLastFrame;
      }
      if (this._index !== this._firstFrame) {
        this._startTime -= 1e3 * Math.abs(this._index - this._firstFrame) / this._frameRate;
      }
      return this;
    }
    pause() {
      this._playing = false;
      return this;
    }
    stop() {
      this._playing = false;
      this._index = 0;
      return this;
    }
    clone(parent) {
      const clone = new _Sprite(
        this.texture,
        this.translation.x,
        this.translation.y,
        this.columns,
        this.rows,
        this.frameRate
      );
      if (this.playing) {
        clone.play(this._firstFrame, this._lastFrame);
        clone._loop = this._loop;
      }
      if (parent) {
        parent.add(clone);
      }
      return clone;
    }
    toObject() {
      const object = super.toObject.call(this);
      object.texture = this.texture.toObject();
      object.columns = this.columns;
      object.rows = this.rows;
      object.frameRate = this.frameRate;
      object.index = this.index;
      object._firstFrame = this._firstFrame;
      object._lastFrame = this._lastFrame;
      object._loop = this._loop;
      return object;
    }
    _update() {
      const effect = this._texture;
      const cols = this._columns;
      const rows = this._rows;
      let width, height, elapsed, amount2, duration;
      let index, iw, ih, frames;
      if (effect) {
        if (this._flagColumns || this._flagRows) {
          this._amount = this._columns * this._rows;
        }
        if (this._flagFrameRate) {
          this._duration = 1e3 * this._amount / this._frameRate;
        }
        if (this._flagTexture) {
          this.fill = effect;
        }
        if (effect.loaded) {
          iw = effect.image.width;
          ih = effect.image.height;
          width = iw / cols;
          height = ih / rows;
          amount2 = this._amount;
          if (this.width !== width) {
            this.width = width;
          }
          if (this.height !== height) {
            this.height = height;
          }
          if (this._playing && this._frameRate > 0) {
            if (_.isNaN(this._lastFrame)) {
              this._lastFrame = amount2 - 1;
            }
            elapsed = _.performance.now() - this._startTime;
            frames = this._lastFrame + 1;
            duration = 1e3 * (frames - this._firstFrame) / this._frameRate;
            if (this._loop) {
              elapsed = elapsed % duration;
            } else {
              elapsed = Math.min(elapsed, duration);
            }
            index = lerp(this._firstFrame, frames, elapsed / duration);
            index = Math.floor(index);
            if (index !== this._index) {
              this._index = index;
              if (index >= this._lastFrame - 1 && this._onLastFrame) {
                this._onLastFrame();
              }
            }
          }
          const col = this._index % cols;
          const row = Math.floor(this._index / cols);
          const ox = -width * col + (iw - width) / 2;
          const oy = -height * row + (ih - height) / 2;
          if (ox !== effect.offset.x) {
            effect.offset.x = ox;
          }
          if (oy !== effect.offset.y) {
            effect.offset.y = oy;
          }
        }
      }
      super._update.call(this);
      return this;
    }
    flagReset() {
      this._flagTexture = this._flagColumns = this._flagRows = this._flagFrameRate = false;
      super.flagReset.call(this);
      return this;
    }
  };
  var Sprite = _Sprite;
  __publicField2(Sprite, "Properties", [
    "texture",
    "columns",
    "rows",
    "frameRate",
    "index"
  ]);
  var proto13 = {
    texture: {
      enumerable: true,
      get: function() {
        return this._texture;
      },
      set: function(v) {
        this._texture = v;
        this._flagTexture = true;
      }
    },
    columns: {
      enumerable: true,
      get: function() {
        return this._columns;
      },
      set: function(v) {
        this._columns = v;
        this._flagColumns = true;
      }
    },
    rows: {
      enumerable: true,
      get: function() {
        return this._rows;
      },
      set: function(v) {
        this._rows = v;
        this._flagRows = true;
      }
    },
    frameRate: {
      enumerable: true,
      get: function() {
        return this._frameRate;
      },
      set: function(v) {
        this._frameRate = v;
        this._flagFrameRate = true;
      }
    },
    index: {
      enumerable: true,
      get: function() {
        return this._index;
      },
      set: function(v) {
        this._index = v;
        this._flagIndex = true;
      }
    }
  };
  var cos3 = Math.cos;
  var sin3 = Math.sin;
  var _Circle = class extends Path {
    constructor(ox, oy, r, resolution) {
      const amount2 = resolution ? Math.max(resolution, 2) : 4;
      const points = [];
      for (let i = 0; i < amount2; i++) {
        points.push(new Anchor(0, 0, 0, 0, 0, 0));
      }
      super(points, true, true, true);
      __publicField2(this, "_flagRadius", false);
      __publicField2(this, "_radius", 0);
      for (let prop in proto14) {
        Object.defineProperty(this, prop, proto14[prop]);
      }
      if (typeof r === "number") {
        this.radius = r;
      }
      this._update();
      if (typeof ox === "number") {
        this.translation.x = ox;
      }
      if (typeof oy === "number") {
        this.translation.y = oy;
      }
    }
    _update() {
      if (this._flagVertices || this._flagRadius) {
        let length = this.vertices.length;
        if (!this._closed && length > 2) {
          length -= 1;
        }
        const c = 4 / 3 * Math.tan(Math.PI / (length * 2));
        const radius = this._radius;
        const rc = radius * c;
        for (let i = 0; i < this.vertices.length; i++) {
          const pct = i / length;
          const theta = pct * TWO_PI;
          const x = radius * cos3(theta);
          const y = radius * sin3(theta);
          const lx = rc * cos3(theta - HALF_PI);
          const ly = rc * sin3(theta - HALF_PI);
          const rx = rc * cos3(theta + HALF_PI);
          const ry = rc * sin3(theta + HALF_PI);
          const v = this.vertices[i];
          v.command = i === 0 ? Commands.move : Commands.curve;
          v.set(x, y);
          v.controls.left.set(lx, ly);
          v.controls.right.set(rx, ry);
        }
      }
      super._update.call(this);
      return this;
    }
    flagReset() {
      this._flagRadius = false;
      super.flagReset.call(this);
      return this;
    }
    clone(parent) {
      const clone = new _Circle(0, 0, this.radius, this.vertices.length);
      clone.translation.copy(this.translation);
      clone.rotation = this.rotation;
      clone.scale = this.scale;
      clone.skewX = this.skewX;
      clone.skewY = this.skewY;
      if (this.matrix.manual) {
        clone.matrix.copy(this.matrix);
      }
      for (let i = 0; i < Path.Properties.length; i++) {
        const k = Path.Properties[i];
        clone[k] = this[k];
      }
      if (parent) {
        parent.add(clone);
      }
      return clone;
    }
    toObject() {
      const object = super.toObject.call(this);
      for (let i = 0; i < _Circle.Properties.length; i++) {
        const k = _Circle.Properties[i];
        object[k] = this[k];
      }
      return object;
    }
  };
  var Circle = _Circle;
  __publicField2(Circle, "Properties", ["radius"]);
  var proto14 = {
    radius: {
      enumerable: true,
      get: function() {
        return this._radius;
      },
      set: function(v) {
        this._radius = v;
        this._flagRadius = true;
      }
    }
  };
  var cos4 = Math.cos;
  var sin4 = Math.sin;
  var _Ellipse = class extends Path {
    constructor(x, y, rx, ry, resolution) {
      if (typeof ry !== "number" && typeof rx === "number") {
        ry = rx;
      }
      const amount2 = resolution ? Math.max(resolution, 2) : 4;
      const points = [];
      for (let i = 0; i < amount2; i++) {
        points.push(new Anchor());
      }
      super(points, true, true, true);
      __publicField2(this, "_flagWidth", false);
      __publicField2(this, "_flagHeight", false);
      __publicField2(this, "_width", 0);
      __publicField2(this, "_height", 0);
      for (let prop in proto15) {
        Object.defineProperty(this, prop, proto15[prop]);
      }
      if (typeof rx === "number") {
        this.width = rx * 2;
      }
      if (typeof ry === "number") {
        this.height = ry * 2;
      }
      this._update();
      if (typeof x === "number") {
        this.translation.x = x;
      }
      if (typeof y === "number") {
        this.translation.y = y;
      }
    }
    _update() {
      if (this._flagVertices || this._flagWidth || this._flagHeight) {
        let length = this.vertices.length;
        if (!this._closed && length > 2) {
          length -= 1;
        }
        const c = 4 / 3 * Math.tan(Math.PI / (this.vertices.length * 2));
        const radiusX = this._width / 2;
        const radiusY = this._height / 2;
        for (let i = 0; i < this.vertices.length; i++) {
          const pct = i / length;
          const theta = pct * TWO_PI;
          const x = radiusX * cos4(theta);
          const y = radiusY * sin4(theta);
          const lx = radiusX * c * cos4(theta - HALF_PI);
          const ly = radiusY * c * sin4(theta - HALF_PI);
          const rx = radiusX * c * cos4(theta + HALF_PI);
          const ry = radiusY * c * sin4(theta + HALF_PI);
          const v = this.vertices[i];
          v.command = i === 0 ? Commands.move : Commands.curve;
          v.set(x, y);
          v.controls.left.set(lx, ly);
          v.controls.right.set(rx, ry);
        }
      }
      super._update.call(this);
      return this;
    }
    flagReset() {
      this._flagWidth = this._flagHeight = false;
      super.flagReset.call(this);
      return this;
    }
    clone(parent) {
      const rx = this.width / 2;
      const ry = this.height / 2;
      const resolution = this.vertices.length;
      const clone = new _Ellipse(0, 0, rx, ry, resolution);
      clone.translation.copy(this.translation);
      clone.rotation = this.rotation;
      clone.scale = this.scale;
      clone.skewX = this.skewX;
      clone.skewY = this.skewY;
      if (this.matrix.manual) {
        clone.matrix.copy(this.matrix);
      }
      for (let i = 0; i < Path.Properties.length; i++) {
        const k = Path.Properties[i];
        clone[k] = this[k];
      }
      if (parent) {
        parent.add(clone);
      }
      return clone;
    }
    toObject() {
      const object = super.toObject.call(this);
      for (let i = 0; i < _Ellipse.Properties.length; i++) {
        const k = _Ellipse.Properties[i];
        object[k] = this[k];
      }
      return object;
    }
  };
  var Ellipse = _Ellipse;
  __publicField2(Ellipse, "Properties", ["width", "height"]);
  var proto15 = {
    width: {
      enumerable: true,
      get: function() {
        return this._width;
      },
      set: function(v) {
        this._width = v;
        this._flagWidth = true;
      }
    },
    height: {
      enumerable: true,
      get: function() {
        return this._height;
      },
      set: function(v) {
        this._height = v;
        this._flagHeight = true;
      }
    }
  };
  var Line = class extends Path {
    constructor(x1, y1, x2, y2) {
      const points = [
        new Anchor(x1, y1),
        new Anchor(x2, y2)
      ];
      super(points);
      for (let prop in proto16) {
        Object.defineProperty(this, prop, proto16[prop]);
      }
      this.vertices[0].command = Commands.move;
      this.vertices[1].command = Commands.line;
      this.automatic = false;
    }
  };
  var proto16 = {
    left: {
      enumerable: true,
      get: function() {
        return this.vertices[0];
      },
      set: function(v) {
        if (_.isObject(v)) {
          this.vertices.splice(0, 1, v);
        } else {
          const error = new TwoError("Two.Line.x argument is not an object.");
          console.warn(error.name, error.message);
        }
      }
    },
    right: {
      enumerable: true,
      get: function() {
        return this.vertices[1];
      },
      set: function(v) {
        if (_.isObject(v)) {
          this.vertices.splice(1, 1, v);
        } else {
          const error = new TwoError("Two.Line.y argument is not an object.");
          console.warn(error.name, error.message);
        }
      }
    }
  };
  var _RoundedRectangle = class extends Path {
    constructor(x, y, width, height, radius) {
      if (typeof radius === "undefined" && typeof width === "number" && typeof height === "number") {
        radius = Math.floor(Math.min(width, height) / 12);
      }
      const points = [];
      for (let i = 0; i < 10; i++) {
        points.push(
          new Anchor(
            0,
            0,
            0,
            0,
            0,
            0,
            i === 0 ? Commands.move : Commands.curve
          )
        );
      }
      super(points);
      __publicField2(this, "_flagWidth", false);
      __publicField2(this, "_flagHeight", false);
      __publicField2(this, "_flagRadius", false);
      __publicField2(this, "_width", 0);
      __publicField2(this, "_height", 0);
      __publicField2(this, "_radius", 12);
      for (let prop in proto17) {
        Object.defineProperty(this, prop, proto17[prop]);
      }
      this.closed = true;
      this.automatic = false;
      this._renderer.flagRadius = FlagRadius.bind(this);
      if (typeof width === "number") {
        this.width = width;
      }
      if (typeof height === "number") {
        this.height = height;
      }
      if (typeof radius === "number") {
        this.radius = radius;
      }
      this._update();
      if (typeof x === "number") {
        this.translation.x = x;
      }
      if (typeof y === "number") {
        this.translation.y = y;
      }
    }
    _update() {
      if (this._flagVertices || this._flagWidth || this._flagHeight || this._flagRadius) {
        const width = this._width;
        const height = this._height;
        let rx, ry;
        if (this._radius instanceof Vector) {
          rx = this._radius.x;
          ry = this._radius.y;
        } else {
          rx = this._radius;
          ry = this._radius;
        }
        let v;
        let w = width / 2;
        let h = height / 2;
        v = this.vertices[0];
        v.x = -(w - rx);
        v.y = -h;
        v = this.vertices[1];
        v.x = w - rx;
        v.y = -h;
        v.controls.left.clear();
        v.controls.right.x = rx;
        v.controls.right.y = 0;
        v = this.vertices[2];
        v.x = w;
        v.y = -(h - ry);
        v.controls.right.clear();
        v.controls.left.clear();
        v = this.vertices[3];
        v.x = w;
        v.y = h - ry;
        v.controls.left.clear();
        v.controls.right.x = 0;
        v.controls.right.y = ry;
        v = this.vertices[4];
        v.x = w - rx;
        v.y = h;
        v.controls.right.clear();
        v.controls.left.clear();
        v = this.vertices[5];
        v.x = -(w - rx);
        v.y = h;
        v.controls.left.clear();
        v.controls.right.x = -rx;
        v.controls.right.y = 0;
        v = this.vertices[6];
        v.x = -w;
        v.y = h - ry;
        v.controls.left.clear();
        v.controls.right.clear();
        v = this.vertices[7];
        v.x = -w;
        v.y = -(h - ry);
        v.controls.left.clear();
        v.controls.right.x = 0;
        v.controls.right.y = -ry;
        v = this.vertices[8];
        v.x = -(w - rx);
        v.y = -h;
        v.controls.left.clear();
        v.controls.right.clear();
        v = this.vertices[9];
        v.copy(this.vertices[8]);
      }
      super._update.call(this);
      return this;
    }
    flagReset() {
      this._flagWidth = this._flagHeight = this._flagRadius = false;
      super.flagReset.call(this);
      return this;
    }
    clone(parent) {
      const width = this.width;
      const height = this.height;
      const radius = this.radius;
      const clone = new _RoundedRectangle(0, 0, width, height, radius);
      clone.translation.copy(this.translation);
      clone.rotation = this.rotation;
      clone.scale = this.scale;
      clone.skewX = this.skewX;
      clone.skewY = this.skewY;
      if (this.matrix.manual) {
        clone.matrix.copy(this.matrix);
      }
      for (let i = 0; i < Path.Properties.length; i++) {
        const k = Path.Properties[i];
        clone[k] = this[k];
      }
      if (parent) {
        parent.add(clone);
      }
      return clone;
    }
    toObject() {
      const object = super.toObject.call(this);
      for (let i = 0; i < _RoundedRectangle.Properties.length; i++) {
        const k = _RoundedRectangle.Properties[i];
        object[k] = this[k];
      }
      object.radius = typeof this.radius === "number" ? this.radius : this.radius.toObject();
      return object;
    }
  };
  var RoundedRectangle = _RoundedRectangle;
  __publicField2(RoundedRectangle, "Properties", ["width", "height", "radius"]);
  var proto17 = {
    width: {
      enumerable: true,
      get: function() {
        return this._width;
      },
      set: function(v) {
        this._width = v;
        this._flagWidth = true;
      }
    },
    height: {
      enumerable: true,
      get: function() {
        return this._height;
      },
      set: function(v) {
        this._height = v;
        this._flagHeight = true;
      }
    },
    radius: {
      enumerable: true,
      get: function() {
        return this._radius;
      },
      set: function(v) {
        if (this._radius instanceof Vector) {
          this._radius.unbind(Events.Types.change, this._renderer.flagRadius);
        }
        this._radius = v;
        if (this._radius instanceof Vector) {
          this._radius.bind(Events.Types.change, this._renderer.flagRadius);
        }
        this._flagRadius = true;
      }
    }
  };
  function FlagRadius() {
    this._flagRadius = true;
  }
  var canvas2;
  var min4 = Math.min;
  var max4 = Math.max;
  if (root.document) {
    canvas2 = document.createElement("canvas");
  }
  var _Text = class extends Shape {
    constructor(message, x, y, styles) {
      super();
      __publicField2(this, "_flagValue", true);
      __publicField2(this, "_flagFamily", true);
      __publicField2(this, "_flagSize", true);
      __publicField2(this, "_flagLeading", true);
      __publicField2(this, "_flagAlignment", true);
      __publicField2(this, "_flagBaseline", true);
      __publicField2(this, "_flagStyle", true);
      __publicField2(this, "_flagWeight", true);
      __publicField2(this, "_flagDecoration", true);
      __publicField2(this, "_flagFill", true);
      __publicField2(this, "_flagStroke", true);
      __publicField2(this, "_flagLinewidth", true);
      __publicField2(this, "_flagOpacity", true);
      __publicField2(this, "_flagVisible", true);
      __publicField2(this, "_flagMask", false);
      __publicField2(this, "_flagClip", false);
      __publicField2(this, "_value", "");
      __publicField2(this, "_family", "sans-serif");
      __publicField2(this, "_size", 13);
      __publicField2(this, "_leading", 17);
      __publicField2(this, "_alignment", "center");
      __publicField2(this, "_baseline", "middle");
      __publicField2(this, "_style", "normal");
      __publicField2(this, "_weight", 500);
      __publicField2(this, "_decoration", "none");
      __publicField2(this, "_fill", "#000");
      __publicField2(this, "_stroke", "transparent");
      __publicField2(this, "_linewidth", 1);
      __publicField2(this, "_opacity", 1);
      __publicField2(this, "_visible", true);
      __publicField2(this, "_mask", null);
      __publicField2(this, "_clip", false);
      __publicField2(this, "_dashes", null);
      for (let prop in proto18) {
        Object.defineProperty(this, prop, proto18[prop]);
      }
      this._renderer.type = "text";
      this._renderer.flagFill = FlagFill2.bind(this);
      this._renderer.flagStroke = FlagStroke2.bind(this);
      this.value = message;
      if (typeof x === "number") {
        this.translation.x = x;
      }
      if (typeof y === "number") {
        this.translation.y = y;
      }
      this.dashes = [];
      this.dashes.offset = 0;
      if (!_.isObject(styles)) {
        return this;
      }
      for (let i = 0; i < _Text.Properties.length; i++) {
        const property = _Text.Properties[i];
        if (property in styles) {
          this[property] = styles[property];
        }
      }
    }
    static Measure(text) {
      if (canvas2) {
        const ctx2 = canvas2.getContext("2d");
        ctx2.font = [
          text._style,
          text._weight,
          `${text._size}px/${text._leading}px`,
          text._family
        ].join(" ");
        const metrics = ctx2.measureText(text.value, 0, 0);
        const height = metrics.actualBoundingBoxDescent + metrics.actualBoundingBoxAscent;
        return {
          width: metrics.width,
          height
        };
      } else {
        const width = this.value.length * this.size * _Text.Ratio;
        const height = this.leading;
        console.warn("Two.Text: unable to accurately measure text, so using an approximation.");
        return {
          width,
          height
        };
      }
    }
    clone(parent) {
      const clone = new _Text(this.value);
      clone.translation.copy(this.translation);
      clone.rotation = this.rotation;
      clone.scale = this.scale;
      for (let i = 0; i < _Text.Properties.length; i++) {
        const prop = _Text.Properties[i];
        clone[prop] = this[prop];
      }
      if (this.matrix.manual) {
        clone.matrix.copy(this.matrix);
      }
      if (parent) {
        parent.add(clone);
      }
      return clone._update();
    }
    toObject() {
      const result = {
        translation: this.translation.toObject(),
        rotation: this.rotation,
        scale: this.scale
      };
      if (this.matrix.manual) {
        result.matrix = this.matrix.toObject();
      }
      for (let i = 0; i < _Text.Properties.length; i++) {
        const prop = _Text.Properties[i];
        result[prop] = this[prop];
      }
      return result;
    }
    noFill() {
      this.fill = "transparent";
      return this;
    }
    noStroke() {
      this.stroke = void 0;
      this.linewidth = void 0;
      return this;
    }
    getBoundingClientRect(shallow) {
      let matrix;
      let left, right, top, bottom;
      this._update(true);
      matrix = shallow ? this.matrix : this.worldMatrix;
      const { width, height } = _Text.Measure(this);
      const border = (this._linewidth || 0) / 2;
      switch (this.alignment) {
        case "left":
          left = -border;
          right = width + border;
          break;
        case "right":
          left = -(width + border);
          right = border;
          break;
        default:
          left = -(width / 2 + border);
          right = width / 2 + border;
      }
      switch (this.baseline) {
        case "middle":
          top = -(height / 2 + border);
          bottom = height / 2 + border;
          break;
        default:
          top = -(height + border);
          bottom = border;
      }
      const [ax, ay] = matrix.multiply(left, top);
      const [bx, by] = matrix.multiply(left, bottom);
      const [cx, cy] = matrix.multiply(right, top);
      const [dx, dy] = matrix.multiply(right, bottom);
      top = min4(ay, by, cy, dy);
      left = min4(ax, bx, cx, dx);
      right = max4(ax, bx, cx, dx);
      bottom = max4(ay, by, cy, dy);
      return {
        top,
        left,
        right,
        bottom,
        width: right - left,
        height: bottom - top
      };
    }
    flagReset() {
      super.flagReset.call(this);
      this._flagValue = this._flagFamily = this._flagSize = this._flagLeading = this._flagAlignment = this._flagFill = this._flagStroke = this._flagLinewidth = this._flagOpacity = this._flagVisible = this._flagClip = this._flagDecoration = this._flagClassName = this._flagBaseline = this._flagWeight = this._flagStyle = false;
      return this;
    }
  };
  var Text = _Text;
  __publicField2(Text, "Ratio", 0.6);
  __publicField2(Text, "Properties", [
    "value",
    "family",
    "size",
    "leading",
    "alignment",
    "linewidth",
    "style",
    "weight",
    "decoration",
    "baseline",
    "opacity",
    "visible",
    "fill",
    "stroke"
  ]);
  var proto18 = {
    value: {
      enumerable: true,
      get: function() {
        return this._value;
      },
      set: function(v) {
        this._value = v;
        this._flagValue = true;
      }
    },
    family: {
      enumerable: true,
      get: function() {
        return this._family;
      },
      set: function(v) {
        this._family = v;
        this._flagFamily = true;
      }
    },
    size: {
      enumerable: true,
      get: function() {
        return this._size;
      },
      set: function(v) {
        this._size = v;
        this._flagSize = true;
      }
    },
    leading: {
      enumerable: true,
      get: function() {
        return this._leading;
      },
      set: function(v) {
        this._leading = v;
        this._flagLeading = true;
      }
    },
    alignment: {
      enumerable: true,
      get: function() {
        return this._alignment;
      },
      set: function(v) {
        this._alignment = v;
        this._flagAlignment = true;
      }
    },
    linewidth: {
      enumerable: true,
      get: function() {
        return this._linewidth;
      },
      set: function(v) {
        this._linewidth = v;
        this._flagLinewidth = true;
      }
    },
    style: {
      enumerable: true,
      get: function() {
        return this._style;
      },
      set: function(v) {
        this._style = v;
        this._flagStyle = true;
      }
    },
    weight: {
      enumerable: true,
      get: function() {
        return this._weight;
      },
      set: function(v) {
        this._weight = v;
        this._flagWeight = true;
      }
    },
    decoration: {
      enumerable: true,
      get: function() {
        return this._decoration;
      },
      set: function(v) {
        this._decoration = v;
        this._flagDecoration = true;
      }
    },
    baseline: {
      enumerable: true,
      get: function() {
        return this._baseline;
      },
      set: function(v) {
        this._baseline = v;
        this._flagBaseline = true;
      }
    },
    opacity: {
      enumerable: true,
      get: function() {
        return this._opacity;
      },
      set: function(v) {
        this._opacity = v;
        this._flagOpacity = true;
      }
    },
    visible: {
      enumerable: true,
      get: function() {
        return this._visible;
      },
      set: function(v) {
        this._visible = v;
        this._flagVisible = true;
      }
    },
    fill: {
      enumerable: true,
      get: function() {
        return this._fill;
      },
      set: function(f) {
        if (this._fill instanceof Gradient || this._fill instanceof LinearGradient || this._fill instanceof RadialGradient || this._fill instanceof Texture) {
          this._fill.unbind(Events.Types.change, this._renderer.flagFill);
        }
        this._fill = f;
        this._flagFill = true;
        if (this._fill instanceof Gradient || this._fill instanceof LinearGradient || this._fill instanceof RadialGradient || this._fill instanceof Texture) {
          this._fill.bind(Events.Types.change, this._renderer.flagFill);
        }
      }
    },
    stroke: {
      enumerable: true,
      get: function() {
        return this._stroke;
      },
      set: function(f) {
        if (this._stroke instanceof Gradient || this._stroke instanceof LinearGradient || this._stroke instanceof RadialGradient || this._stroke instanceof Texture) {
          this._stroke.unbind(Events.Types.change, this._renderer.flagStroke);
        }
        this._stroke = f;
        this._flagStroke = true;
        if (this._stroke instanceof Gradient || this._stroke instanceof LinearGradient || this._stroke instanceof RadialGradient || this._stroke instanceof Texture) {
          this._stroke.bind(Events.Types.change, this._renderer.flagStroke);
        }
      }
    },
    mask: {
      enumerable: true,
      get: function() {
        return this._mask;
      },
      set: function(v) {
        this._mask = v;
        this._flagMask = true;
        if (_.isObject(v) && !v.clip) {
          v.clip = true;
        }
      }
    },
    clip: {
      enumerable: true,
      get: function() {
        return this._clip;
      },
      set: function(v) {
        this._clip = v;
        this._flagClip = true;
      }
    },
    dashes: {
      enumerable: true,
      get: function() {
        return this._dashes;
      },
      set: function(v) {
        if (typeof v.offset !== "number") {
          v.offset = this.dashes && this._dashes.offset || 0;
        }
        this._dashes = v;
      }
    }
  };
  function FlagFill2() {
    this._flagFill = true;
  }
  function FlagStroke2() {
    this._flagStroke = true;
  }
  var regex2 = {
    path: /[+-]?(?:\d*\.\d+|\d+)(?:[eE][+-]\d+)?/g,
    cssBackgroundImage: /url\(['"]?#([\w\d-_]*)['"]?\)/i,
    unitSuffix: /[a-zA-Z%]*/i
  };
  var alignments = {
    start: "left",
    middle: "center",
    end: "right"
  };
  var reservedAttributesToRemove = ["id", "class", "transform", "xmlns", "viewBox"];
  var overwriteAttrs = ["x", "y", "width", "height", "href", "xlink:href"];
  function getAlignment(anchor2) {
    return alignments[anchor2];
  }
  function getBaseline(node) {
    const a = node.getAttribute("dominant-baseline");
    const b = node.getAttribute("alignment-baseline");
    return a || b;
  }
  function getTagName(tag) {
    return tag.replace(/svg:/ig, "").toLowerCase();
  }
  function applyTransformsToVector(transforms, vector2) {
    vector2.x += transforms.translateX;
    vector2.y += transforms.translateY;
    vector2.x *= transforms.scaleX;
    vector2.y *= transforms.scaleY;
    if (transforms.rotation !== 0) {
      const l = vector2.length();
      vector2.x = l * Math.cos(transforms.rotation);
      vector2.y = l * Math.sin(transforms.rotation);
    }
  }
  function extractCSSText(text, styles) {
    if (!styles) {
      styles = {};
    }
    const commands = text.split(";");
    for (let i = 0; i < commands.length; i++) {
      const command = commands[i].split(":");
      const name = command[0];
      const value = command[1];
      if (typeof name === "undefined" || typeof value === "undefined") {
        continue;
      }
      styles[name] = value.replace(/\s/, "");
    }
    return styles;
  }
  function getSvgStyles(node) {
    const styles = {};
    const attributes = getSvgAttributes(node);
    const length = Math.max(attributes.length, node.style.length);
    for (let i = 0; i < length; i++) {
      const command = node.style[i];
      const attribute = attributes[i];
      if (command) {
        styles[command] = node.style[command];
      }
      if (attribute) {
        styles[attribute] = node.getAttribute(attribute);
      }
    }
    return styles;
  }
  function getSvgAttributes(node) {
    const attributes = node.getAttributeNames();
    for (let i = 0; i < reservedAttributesToRemove.length; i++) {
      const keyword = reservedAttributesToRemove[i];
      const index = Array.prototype.indexOf.call(attributes, keyword);
      if (index >= 0) {
        attributes.splice(index, 1);
      }
    }
    return attributes;
  }
  function applySvgViewBox(node, value) {
    const elements = value.split(/[\s,]/);
    const x = -parseFloat(elements[0]);
    const y = -parseFloat(elements[1]);
    const width = parseFloat(elements[2]);
    const height = parseFloat(elements[3]);
    if (x && y) {
      for (let i = 0; i < node.children.length; i++) {
        const child = node.children[i];
        if ("translation" in child) {
          child.translation.add(x, y);
        } else if ("x" in child) {
          child.x = x;
        } else if ("y" in child) {
          child.y = y;
        }
      }
    }
    const xExists = typeof node.x === "number";
    const yExists = typeof node.y === "number";
    const widthExists = typeof node.width === "number";
    const heightExists = typeof node.height === "number";
    if (xExists) {
      node.translation.x += node.x;
    }
    if (yExists) {
      node.translation.y += node.y;
    }
    if (widthExists || heightExists) {
      node.scale = new Vector(1, 1);
    }
    if (widthExists) {
      node.scale.x = node.width / width;
    }
    if (heightExists) {
      node.scale.y = node.height / height;
    }
    node.mask = new Rectangle(0, 0, width, height);
    node.mask.origin.set(-width / 2, -height / 2);
    return node;
  }
  function applySvgAttributes(node, elem, parentStyles) {
    const styles = {}, attributes = {}, extracted = {};
    let i, m, key, value, prop, attr;
    let transforms, x, y;
    let id, scene, ref, tagName;
    let ca, cb, cc, error;
    if (node === null) {
      return styles;
    }
    if (root.getComputedStyle) {
      const computedStyles = root.getComputedStyle(node);
      i = computedStyles.length;
      while (i--) {
        key = computedStyles[i];
        value = computedStyles[key];
        if (typeof value !== "undefined") {
          styles[key] = value;
        }
      }
    }
    for (i = 0; i < node.attributes.length; i++) {
      attr = node.attributes[i];
      if (/style/i.test(attr.nodeName)) {
        extractCSSText(attr.value, extracted);
      } else {
        attributes[attr.nodeName] = attr.value;
      }
    }
    if (typeof styles.opacity !== "undefined") {
      styles["stroke-opacity"] = styles.opacity;
      styles["fill-opacity"] = styles.opacity;
      delete styles.opacity;
    }
    if (parentStyles) {
      _.defaults(styles, parentStyles);
    }
    _.extend(styles, extracted, attributes);
    styles.visible = !(typeof styles.display === "undefined" && /none/i.test(styles.display)) || typeof styles.visibility === "undefined" && /hidden/i.test(styles.visibility);
    for (key in styles) {
      value = styles[key];
      switch (key) {
        case "gradientTransform":
          if (/none/i.test(value))
            break;
          m = node.gradientTransform && node.gradientTransform.baseVal && node.gradientTransform.baseVal.length > 0 ? node.gradientTransform.baseVal[0].matrix : node.getCTM ? node.getCTM() : null;
          if (m === null)
            break;
          transforms = decomposeMatrix(m);
          switch (elem._renderer.type) {
            case "linear-gradient":
              applyTransformsToVector(transforms, elem.left);
              applyTransformsToVector(transforms, elem.right);
              break;
            case "radial-gradient":
              elem.center.x += transforms.translateX;
              elem.center.y += transforms.translateY;
              elem.focal.x += transforms.translateX;
              elem.focal.y += transforms.translateY;
              elem.radius *= Math.max(transforms.scaleX, transforms.scaleY);
              break;
          }
          break;
        case "transform":
          if (/none/i.test(value))
            break;
          m = node.transform && node.transform.baseVal && node.transform.baseVal.length > 0 ? node.transform.baseVal[0].matrix : node.getCTM ? node.getCTM() : null;
          if (m === null)
            break;
          if (Constants.AutoCalculateImportedMatrices) {
            transforms = decomposeMatrix(m);
            elem.translation.set(transforms.translateX, transforms.translateY);
            elem.rotation = Math.PI * (transforms.rotation / 180);
            elem.scale = new Vector(transforms.scaleX, transforms.scaleY);
            x = parseFloat((styles.x + "").replace("px"));
            y = parseFloat((styles.y + "").replace("px"));
            if (x) {
              elem.translation.x = x;
            }
            if (y) {
              elem.translation.y = y;
            }
          } else {
            m = node.getCTM();
            elem._matrix.manual = true;
            elem._matrix.set(m.a, m.b, m.c, m.d, m.e, m.f);
          }
          break;
        case "visible":
          if (elem instanceof Group) {
            elem._visible = value;
            break;
          }
          elem.visible = value;
          break;
        case "stroke-linecap":
          if (elem instanceof Group) {
            elem._cap = value;
            break;
          }
          elem.cap = value;
          break;
        case "stroke-linejoin":
          if (elem instanceof Group) {
            elem._join = value;
            break;
          }
          elem.join = value;
          break;
        case "stroke-miterlimit":
          if (elem instanceof Group) {
            elem._miter = value;
            break;
          }
          elem.miter = value;
          break;
        case "stroke-width":
          if (elem instanceof Group) {
            elem._linewidth = parseFloat(value);
            break;
          }
          elem.linewidth = parseFloat(value);
          break;
        case "opacity":
        case "stroke-opacity":
        case "fill-opacity":
          if (elem instanceof Group) {
            elem._opacity = parseFloat(value);
            break;
          }
          elem.opacity = parseFloat(value);
          break;
        case "clip-path":
          if (regex2.cssBackgroundImage.test(value)) {
            id = value.replace(regex2.cssBackgroundImage, "$1");
            if (read.defs.current && read.defs.current.contains(id)) {
              ref = read.defs.current.get(id);
              if (ref && ref.childNodes.length > 0) {
                ref = ref.childNodes[0];
                tagName = getTagName(ref.nodeName);
                elem.mask = read[tagName].call(this, ref, {});
                switch (elem._renderer.type) {
                  case "text":
                  case "path":
                    elem.position.add(elem.mask.position);
                    elem.mask.position.clear();
                    break;
                }
              }
            }
          }
          break;
        case "fill":
        case "stroke":
          prop = (elem instanceof Group ? "_" : "") + key;
          if (regex2.cssBackgroundImage.test(value)) {
            id = value.replace(regex2.cssBackgroundImage, "$1");
            if (read.defs.current && read.defs.current.contains(id)) {
              ref = read.defs.current.get(id);
              if (!ref.object) {
                tagName = getTagName(ref.nodeName);
                ref.object = read[tagName].call(this, ref, {});
              }
              ref = ref.object;
            } else {
              scene = getScene(this);
              ref = scene.getById(id);
            }
            elem[prop] = ref;
          } else {
            elem[prop] = /none/i.test(value) ? "transparent" : value;
          }
          break;
        case "id":
          elem.id = value;
          break;
        case "class":
        case "className":
          elem.classList = value.split(" ");
          elem._flagClassName = true;
          break;
        case "x":
        case "y":
          ca = elem instanceof Gradient;
          cb = elem instanceof LinearGradient;
          cc = elem instanceof RadialGradient;
          if (ca || cb || cc) {
            break;
          }
          if (value.match("[a-z%]$") && !value.endsWith("px")) {
            error = new TwoError(
              "only pixel values are supported with the " + key + " attribute."
            );
            console.warn(error.name, error.message);
          }
          elem.translation[key] = parseFloat(value);
          break;
        case "font-family":
          if (elem instanceof Text) {
            elem.family = value;
          }
          break;
        case "font-size":
          if (elem instanceof Text) {
            elem.size = value;
          }
          break;
        case "font-weight":
          if (elem instanceof Text) {
            elem.weight = value;
          }
          break;
        case "font-style":
          if (elem instanceof Text) {
            elem.style = value;
          }
          break;
        case "text-decoration":
          if (elem instanceof Text) {
            elem.decoration = value;
          }
          break;
        case "line-height":
          if (elem instanceof Text) {
            elem.leading = value;
          }
          break;
      }
    }
    if (Object.keys(node.dataset).length)
      elem.dataset = node.dataset;
    return styles;
  }
  function updateDefsCache(node, defsCache) {
    for (let i = 0, l = node.childNodes.length; i < l; i++) {
      const n = node.childNodes[i];
      if (!n.id)
        continue;
      const tagName = getTagName(node.nodeName);
      if (tagName === "#text")
        continue;
      defsCache.add(n.id, n);
    }
  }
  function getScene(node) {
    while (node.parent) {
      node = node.parent;
    }
    return node.scene;
  }
  var read = {
    svg: function(node) {
      const defs = read.defs.current = new Registry();
      const elements = node.getElementsByTagName("defs");
      for (let i = 0; i < elements.length; i++) {
        updateDefsCache(elements[i], defs);
      }
      const svg2 = read.g.call(this, node);
      const viewBox = node.getAttribute("viewBox");
      const x = node.getAttribute("x");
      const y = node.getAttribute("y");
      const width = node.getAttribute("width");
      const height = node.getAttribute("height");
      svg2.defs = defs;
      const viewBoxExists = viewBox !== null;
      const xExists = x !== null;
      const yExists = y !== null;
      const widthExists = width !== null;
      const heightExists = height !== null;
      if (xExists) {
        svg2.x = parseFloat(x.replace(regex2.unitSuffix, ""));
      }
      if (yExists) {
        svg2.y = parseFloat(y.replace(regex2.unitSuffix, ""));
      }
      if (widthExists) {
        svg2.width = parseFloat(width.replace(regex2.unitSuffix, ""));
      }
      if (heightExists) {
        svg2.height = parseFloat(height.replace(regex2.unitSuffix, ""));
      }
      if (viewBoxExists) {
        applySvgViewBox(svg2, viewBox);
      }
      delete read.defs.current;
      return svg2;
    },
    defs: function(node) {
      return null;
    },
    use: function(node, styles) {
      let error;
      const href = node.getAttribute("href") || node.getAttribute("xlink:href");
      if (!href) {
        error = new TwoError("encountered <use /> with no href.");
        console.warn(error.name, error.message);
        return null;
      }
      const id = href.slice(1);
      if (!read.defs.current.contains(id)) {
        error = new TwoError(
          "unable to find element for reference " + href + "."
        );
        console.warn(error.name, error.message);
        return null;
      }
      const template = read.defs.current.get(id);
      const fullNode = template.cloneNode(true);
      for (let i = 0; i < node.attributes.length; i++) {
        const attr = node.attributes[i];
        const ca = overwriteAttrs.includes(attr.nodeName);
        const cb = !fullNode.hasAttribute(attr.nodeName);
        if (ca || cb) {
          fullNode.setAttribute(attr.nodeName, attr.value);
        }
      }
      const tagName = getTagName(fullNode.nodeName);
      return read[tagName].call(this, fullNode, styles);
    },
    g: function(node, parentStyles) {
      const group = new Group();
      applySvgAttributes.call(this, node, group, parentStyles);
      this.add(group);
      const styles = getSvgStyles.call(this, node);
      for (let i = 0, l = node.childNodes.length; i < l; i++) {
        const n = node.childNodes[i];
        const tag = n.nodeName;
        if (!tag)
          return;
        const tagName = getTagName(tag);
        if (tagName in read) {
          const o = read[tagName].call(group, n, styles);
          if (!!o && !o.parent) {
            group.add(o);
          }
        }
      }
      return group;
    },
    polygon: function(node, parentStyles) {
      let points;
      if (typeof node === "string") {
        points = node;
      } else {
        points = node.getAttribute("points");
      }
      const verts = [];
      points.replace(/(-?[\d.eE-]+)[,|\s](-?[\d.eE-]+)/g, function(match, p1, p2) {
        verts.push(new Anchor(parseFloat(p1), parseFloat(p2)));
      });
      const poly = new Path(verts, true).noStroke();
      poly.fill = "black";
      applySvgAttributes.call(this, node, poly, parentStyles);
      return poly;
    },
    polyline: function(node, parentStyles) {
      const poly = read.polygon.call(this, node, parentStyles);
      poly.closed = false;
      return poly;
    },
    path: function(node, parentStyles) {
      let path2;
      if (typeof node === "string") {
        path2 = node;
        node = null;
      } else {
        path2 = node.getAttribute("d");
      }
      let points = [];
      let closed2 = false, relative = false;
      if (path2) {
        let coord = new Anchor();
        let control, coords;
        let commands = path2.match(/[a-df-z][^a-df-z]*/ig);
        const last = commands.length - 1;
        _.each(commands.slice(0), function(command, i) {
          const items = command.slice(1).trim().match(regex2.path);
          const type = command[0];
          const lower = type.toLowerCase();
          let bin, j, l, ct, times;
          const result = [];
          if (i === 0) {
            commands = [];
          }
          switch (lower) {
            case "h":
            case "v":
              if (items.length > 1) {
                bin = 1;
              }
              break;
            case "m":
            case "l":
            case "t":
              if (items.length > 2) {
                bin = 2;
              }
              break;
            case "s":
            case "q":
              if (items.length > 4) {
                bin = 4;
              }
              break;
            case "c":
              if (items.length > 6) {
                bin = 6;
              }
              break;
            case "a":
              if (items.length > 7) {
                bin = 7;
              }
              break;
          }
          if (bin) {
            for (j = 0, l = items.length, times = 0; j < l; j += bin) {
              ct = type;
              if (times > 0) {
                switch (type) {
                  case "m":
                    ct = "l";
                    break;
                  case "M":
                    ct = "L";
                    break;
                }
              }
              result.push(ct + items.slice(j, j + bin).join(" "));
              times++;
            }
            commands = Array.prototype.concat.apply(commands, result);
          } else {
            commands.push(command);
          }
        });
        _.each(commands, function(command, i) {
          let result, x, y;
          const type = command[0];
          const lower = type.toLowerCase();
          coords = command.slice(1).trim().match(regex2.path);
          relative = type === lower;
          let x1, y1, x2, y2, x3, y3, x4, y4, reflection;
          let a, b;
          let anchor2, rx, ry, xAxisRotation, largeArcFlag, sweepFlag;
          switch (lower) {
            case "z":
              if (i >= last) {
                closed2 = true;
              } else {
                x = coord.x;
                y = coord.y;
                result = new Anchor(
                  x,
                  y,
                  void 0,
                  void 0,
                  void 0,
                  void 0,
                  Commands.close
                );
                for (let j = points.length - 1; j >= 0; j--) {
                  const point = points[j];
                  if (/m/i.test(point.command)) {
                    coord = point;
                    break;
                  }
                }
              }
              break;
            case "m":
            case "l":
              control = void 0;
              x = parseFloat(coords[0]);
              y = parseFloat(coords[1]);
              result = new Anchor(
                x,
                y,
                void 0,
                void 0,
                void 0,
                void 0,
                /m/i.test(lower) ? Commands.move : Commands.line
              );
              if (relative) {
                result.addSelf(coord);
              }
              coord = result;
              break;
            case "h":
            case "v":
              a = /h/i.test(lower) ? "x" : "y";
              b = /x/i.test(a) ? "y" : "x";
              result = new Anchor(
                void 0,
                void 0,
                void 0,
                void 0,
                void 0,
                void 0,
                Commands.line
              );
              result[a] = parseFloat(coords[0]);
              result[b] = coord[b];
              if (relative) {
                result[a] += coord[a];
              }
              coord = result;
              break;
            case "c":
            case "s":
              x1 = coord.x;
              y1 = coord.y;
              if (!control) {
                control = new Vector();
              }
              if (/c/i.test(lower)) {
                x2 = parseFloat(coords[0]);
                y2 = parseFloat(coords[1]);
                x3 = parseFloat(coords[2]);
                y3 = parseFloat(coords[3]);
                x4 = parseFloat(coords[4]);
                y4 = parseFloat(coords[5]);
              } else {
                reflection = getReflection(coord, control, relative);
                x2 = reflection.x;
                y2 = reflection.y;
                x3 = parseFloat(coords[0]);
                y3 = parseFloat(coords[1]);
                x4 = parseFloat(coords[2]);
                y4 = parseFloat(coords[3]);
              }
              if (relative) {
                x2 += x1;
                y2 += y1;
                x3 += x1;
                y3 += y1;
                x4 += x1;
                y4 += y1;
              }
              coord.controls.right.set(x2 - coord.x, y2 - coord.y);
              result = new Anchor(
                x4,
                y4,
                x3 - x4,
                y3 - y4,
                void 0,
                void 0,
                Commands.curve
              );
              coord = result;
              control = result.controls.left;
              break;
            case "t":
            case "q":
              x1 = coord.x;
              y1 = coord.y;
              if (!control) {
                control = new Vector();
              }
              if (/q/i.test(lower)) {
                x2 = parseFloat(coords[0]);
                y2 = parseFloat(coords[1]);
                x3 = parseFloat(coords[0]);
                y3 = parseFloat(coords[1]);
                x4 = parseFloat(coords[2]);
                y4 = parseFloat(coords[3]);
              } else {
                reflection = getReflection(coord, control, relative);
                x2 = reflection.x;
                y2 = reflection.y;
                x3 = reflection.x;
                y3 = reflection.y;
                x4 = parseFloat(coords[0]);
                y4 = parseFloat(coords[1]);
              }
              if (relative) {
                x2 += x1;
                y2 += y1;
                x3 += x1;
                y3 += y1;
                x4 += x1;
                y4 += y1;
              }
              coord.controls.right.set(
                (x2 - coord.x) * 0.33,
                (y2 - coord.y) * 0.33
              );
              result = new Anchor(
                x4,
                y4,
                x3 - x4,
                y3 - y4,
                void 0,
                void 0,
                Commands.curve
              );
              coord = result;
              control = result.controls.left;
              break;
            case "a":
              x1 = coord.x;
              y1 = coord.y;
              rx = parseFloat(coords[0]);
              ry = parseFloat(coords[1]);
              xAxisRotation = parseFloat(coords[2]);
              largeArcFlag = parseFloat(coords[3]);
              sweepFlag = parseFloat(coords[4]);
              x4 = parseFloat(coords[5]);
              y4 = parseFloat(coords[6]);
              if (relative) {
                x4 += x1;
                y4 += y1;
              }
              anchor2 = new Anchor(x4, y4);
              anchor2.command = Commands.arc;
              anchor2.rx = rx;
              anchor2.ry = ry;
              anchor2.xAxisRotation = xAxisRotation;
              anchor2.largeArcFlag = largeArcFlag;
              anchor2.sweepFlag = sweepFlag;
              result = anchor2;
              coord = anchor2;
              control = void 0;
              break;
          }
          if (result) {
            if (Array.isArray(result)) {
              points = points.concat(result);
            } else {
              points.push(result);
            }
          }
        });
      }
      path2 = new Path(points, closed2, void 0, true).noStroke();
      path2.fill = "black";
      const rect = path2.getBoundingClientRect(true);
      rect.centroid = {
        x: rect.left + rect.width / 2,
        y: rect.top + rect.height / 2
      };
      _.each(path2.vertices, function(v) {
        v.subSelf(rect.centroid);
      });
      applySvgAttributes.call(this, node, path2, parentStyles);
      path2.translation.addSelf(rect.centroid);
      return path2;
    },
    circle: function(node, parentStyles) {
      const x = parseFloat(node.getAttribute("cx"));
      const y = parseFloat(node.getAttribute("cy"));
      const r = parseFloat(node.getAttribute("r"));
      const circle = new Circle(0, 0, r).noStroke();
      circle.fill = "black";
      applySvgAttributes.call(this, node, circle, parentStyles);
      circle.translation.x = x;
      circle.translation.y = y;
      return circle;
    },
    ellipse: function(node, parentStyles) {
      const x = parseFloat(node.getAttribute("cx"));
      const y = parseFloat(node.getAttribute("cy"));
      const width = parseFloat(node.getAttribute("rx"));
      const height = parseFloat(node.getAttribute("ry"));
      const ellipse = new Ellipse(0, 0, width, height).noStroke();
      ellipse.fill = "black";
      applySvgAttributes.call(this, node, ellipse, parentStyles);
      ellipse.translation.x = x;
      ellipse.translation.y = y;
      return ellipse;
    },
    rect: function(node, parentStyles) {
      const rx = parseFloat(node.getAttribute("rx"));
      const ry = parseFloat(node.getAttribute("ry"));
      if (!_.isNaN(rx) || !_.isNaN(ry)) {
        return read["rounded-rect"](node);
      }
      const width = parseFloat(node.getAttribute("width"));
      const height = parseFloat(node.getAttribute("height"));
      const w2 = width / 2;
      const h2 = height / 2;
      const rect = new Rectangle(0, 0, width, height).noStroke();
      rect.fill = "black";
      applySvgAttributes.call(this, node, rect, parentStyles);
      rect.translation.x += w2;
      rect.translation.y += h2;
      return rect;
    },
    "rounded-rect": function(node, parentStyles) {
      const rx = parseFloat(node.getAttribute("rx")) || 0;
      const ry = parseFloat(node.getAttribute("ry")) || 0;
      const width = parseFloat(node.getAttribute("width"));
      const height = parseFloat(node.getAttribute("height"));
      const w2 = width / 2;
      const h2 = height / 2;
      const radius = new Vector(rx, ry);
      const rect = new RoundedRectangle(0, 0, width, height, radius).noStroke();
      rect.fill = "black";
      applySvgAttributes.call(this, node, rect, parentStyles);
      rect.translation.x += w2;
      rect.translation.y += h2;
      return rect;
    },
    line: function(node, parentStyles) {
      const x1 = parseFloat(node.getAttribute("x1"));
      const y1 = parseFloat(node.getAttribute("y1"));
      const x2 = parseFloat(node.getAttribute("x2"));
      const y2 = parseFloat(node.getAttribute("y2"));
      const line = new Line(x1, y1, x2, y2).noFill();
      applySvgAttributes.call(this, node, line, parentStyles);
      return line;
    },
    lineargradient: function(node, parentStyles) {
      let units = node.getAttribute("gradientUnits");
      let spread = node.getAttribute("spreadMethod");
      if (!units) {
        units = "objectBoundingBox";
      }
      if (!spread) {
        spread = "pad";
      }
      let x1 = parseFloat(node.getAttribute("x1") || 0);
      let y1 = parseFloat(node.getAttribute("y1") || 0);
      let x2 = parseFloat(node.getAttribute("x2") || 0);
      let y2 = parseFloat(node.getAttribute("y2") || 0);
      const ox = (x2 + x1) / 2;
      const oy = (y2 + y1) / 2;
      if (/userSpaceOnUse/i.test(units)) {
        x1 -= ox;
        y1 -= oy;
        x2 -= ox;
        y2 -= oy;
      }
      const stops = [];
      for (let i = 0; i < node.children.length; i++) {
        const child = node.children[i];
        let offset = child.getAttribute("offset");
        if (/%/ig.test(offset)) {
          offset = parseFloat(offset.replace(/%/ig, "")) / 100;
        }
        offset = parseFloat(offset);
        let color = child.getAttribute("stop-color");
        let opacity = child.getAttribute("stop-opacity");
        let style = child.getAttribute("style");
        let matches;
        if (color === null) {
          matches = style ? style.match(/stop-color:\s?([#a-fA-F0-9]*)/) : false;
          color = matches && matches.length > 1 ? matches[1] : void 0;
        }
        if (opacity === null) {
          matches = style ? style.match(/stop-opacity:\s?([0-9.-]*)/) : false;
          opacity = matches && matches.length > 1 ? parseFloat(matches[1]) : 1;
        } else {
          opacity = parseFloat(opacity);
        }
        stops.push(new Stop(offset, color, opacity));
      }
      const gradient = new LinearGradient(x1, y1, x2, y2, stops);
      gradient.spread = spread;
      gradient.units = units;
      applySvgAttributes.call(this, node, gradient, parentStyles);
      return gradient;
    },
    radialgradient: function(node, parentStyles) {
      let units = node.getAttribute("gradientUnits");
      let spread = node.getAttribute("spreadMethod");
      if (!units) {
        units = "objectBoundingBox";
      }
      if (!spread) {
        spread = "pad";
      }
      let cx = parseFloat(node.getAttribute("cx")) || 0;
      let cy = parseFloat(node.getAttribute("cy")) || 0;
      let r = parseFloat(node.getAttribute("r"));
      let fx = parseFloat(node.getAttribute("fx"));
      let fy = parseFloat(node.getAttribute("fy"));
      if (_.isNaN(fx)) {
        fx = cx;
      }
      if (_.isNaN(fy)) {
        fy = cy;
      }
      const ox = Math.abs(cx + fx) / 2;
      const oy = Math.abs(cy + fy) / 2;
      if (/userSpaceOnUse/i.test(units)) {
        cx -= ox;
        cy -= oy;
        fx -= ox;
        fy -= oy;
      }
      const stops = [];
      for (let i = 0; i < node.children.length; i++) {
        const child = node.children[i];
        let offset = child.getAttribute("offset");
        if (/%/ig.test(offset)) {
          offset = parseFloat(offset.replace(/%/ig, "")) / 100;
        }
        offset = parseFloat(offset);
        let color = child.getAttribute("stop-color");
        let opacity = child.getAttribute("stop-opacity");
        let style = child.getAttribute("style");
        let matches;
        if (color === null) {
          matches = style ? style.match(/stop-color:\s?([#a-fA-F0-9]*)/) : false;
          color = matches && matches.length > 1 ? matches[1] : void 0;
        }
        if (opacity === null) {
          matches = style ? style.match(/stop-opacity:\s?([0-9.-]*)/) : false;
          opacity = matches && matches.length > 1 ? parseFloat(matches[1]) : 1;
        } else {
          opacity = parseFloat(opacity);
        }
        stops.push(new Stop(offset, color, opacity));
      }
      const gradient = new RadialGradient(cx, cy, r, stops, fx, fy);
      gradient.spread = spread;
      gradient.units = units;
      applySvgAttributes.call(this, node, gradient, parentStyles);
      return gradient;
    },
    text: function(node, parentStyles) {
      const alignment = getAlignment(node.getAttribute("text-anchor")) || "left";
      const baseline = getBaseline(node) || "baseline";
      const message = node.textContent;
      const text = new Text(message);
      applySvgAttributes.call(this, node, text, parentStyles);
      text.alignment = alignment;
      text.baseline = baseline;
      return text;
    },
    clippath: function(node, parentStyles) {
      if (read.defs.current && !read.defs.current.contains(node.id)) {
        read.defs.current.add(node.id, node);
      }
      return null;
    },
    image: function(node, parentStyles) {
      let error;
      const href = node.getAttribute("href") || node.getAttribute("xlink:href");
      if (!href) {
        error = new TwoError("encountered <image /> with no href.");
        console.warn(error.name, error.message);
        return null;
      }
      const x = parseFloat(node.getAttribute("x")) || 0;
      const y = parseFloat(node.getAttribute("y")) || 0;
      const width = parseFloat(node.getAttribute("width"));
      const height = parseFloat(node.getAttribute("height"));
      const sprite = new Sprite(href, x, y);
      if (!_.isNaN(width)) {
        sprite.width = width;
      }
      if (!_.isNaN(height)) {
        sprite.height = height;
      }
      applySvgAttributes.call(this, node, sprite, parentStyles);
      return sprite;
    }
  };
  function xhr(path2, callback) {
    const xhr2 = new XMLHttpRequest();
    xhr2.open("GET", path2);
    xhr2.onreadystatechange = function() {
      if (xhr2.readyState === 4 && xhr2.status === 200) {
        callback(xhr2.responseText);
      }
    };
    xhr2.send();
    return xhr2;
  }
  var _ImageSequence = class extends Rectangle {
    constructor(paths, ox, oy, frameRate) {
      super(ox, oy, 0, 0);
      __publicField2(this, "_flagTextures", false);
      __publicField2(this, "_flagFrameRate", false);
      __publicField2(this, "_flagIndex", false);
      __publicField2(this, "_amount", 1);
      __publicField2(this, "_duration", 0);
      __publicField2(this, "_index", 0);
      __publicField2(this, "_startTime", 0);
      __publicField2(this, "_playing", false);
      __publicField2(this, "_firstFrame", 0);
      __publicField2(this, "_lastFrame", 0);
      __publicField2(this, "_loop", true);
      __publicField2(this, "_textures", null);
      __publicField2(this, "_frameRate", 0);
      __publicField2(this, "_origin", null);
      for (let prop in proto19) {
        Object.defineProperty(this, prop, proto19[prop]);
      }
      this._renderer.flagTextures = FlagTextures.bind(this);
      this._renderer.bindTextures = BindTextures.bind(this);
      this._renderer.unbindTextures = UnbindTextures.bind(this);
      this.noStroke();
      this.noFill();
      if (Array.isArray(paths)) {
        this.textures = paths.map(GenerateTexture.bind(this));
      } else {
        this.textures = [GenerateTexture(paths)];
      }
      this.origin = new Vector();
      this._update();
      if (typeof frameRate === "number") {
        this.frameRate = frameRate;
      } else {
        this.frameRate = _ImageSequence.DefaultFrameRate;
      }
      this.index = 0;
    }
    play(firstFrame, lastFrame, onLastFrame) {
      this._playing = true;
      this._firstFrame = 0;
      this._lastFrame = this.amount - 1;
      this._startTime = _.performance.now();
      if (typeof firstFrame === "number") {
        this._firstFrame = firstFrame;
      }
      if (typeof lastFrame === "number") {
        this._lastFrame = lastFrame;
      }
      if (typeof onLastFrame === "function") {
        this._onLastFrame = onLastFrame;
      } else {
        delete this._onLastFrame;
      }
      if (this._index !== this._firstFrame) {
        this._startTime -= 1e3 * Math.abs(this._index - this._firstFrame) / this._frameRate;
      }
      return this;
    }
    pause() {
      this._playing = false;
      return this;
    }
    stop() {
      this._playing = false;
      this._index = this._firstFrame;
      return this;
    }
    clone(parent) {
      const clone = new _ImageSequence(
        this.textures,
        this.translation.x,
        this.translation.y,
        this.frameRate
      );
      clone._loop = this._loop;
      if (this._playing) {
        clone.play();
      }
      if (parent) {
        parent.add(clone);
      }
      return clone;
    }
    toObject() {
      const object = super.toObject.call(this);
      object.textures = this.textures.map(function(texture) {
        return texture.toObject();
      });
      object.frameRate = this.frameRate;
      object.index = this.index;
      object._firstFrame = this._firstFrame;
      object._lastFrame = this._lastFrame;
      object._loop = this._loop;
      return object;
    }
    _update() {
      const effect = this._textures;
      let width, height, elapsed, amount2, duration, texture;
      let index, frames;
      if (effect) {
        if (this._flagTextures) {
          this._amount = effect.length;
        }
        if (this._flagFrameRate) {
          this._duration = 1e3 * this._amount / this._frameRate;
        }
        if (this._playing && this._frameRate > 0) {
          amount2 = this._amount;
          if (_.isNaN(this._lastFrame)) {
            this._lastFrame = amount2 - 1;
          }
          elapsed = _.performance.now() - this._startTime;
          frames = this._lastFrame + 1;
          duration = 1e3 * (frames - this._firstFrame) / this._frameRate;
          if (this._loop) {
            elapsed = elapsed % duration;
          } else {
            elapsed = Math.min(elapsed, duration);
          }
          index = lerp(this._firstFrame, frames, elapsed / duration);
          index = Math.floor(index);
          if (index !== this._index) {
            this._index = index;
            texture = effect[this._index];
            if (texture.loaded) {
              width = texture.image.width;
              height = texture.image.height;
              if (this.width !== width) {
                this.width = width;
              }
              if (this.height !== height) {
                this.height = height;
              }
              this.fill = texture;
              if (index >= this._lastFrame - 1 && this._onLastFrame) {
                this._onLastFrame();
              }
            }
          }
        } else if (this._flagIndex || !(this.fill instanceof Texture)) {
          texture = effect[this._index];
          if (texture.loaded) {
            width = texture.image.width;
            height = texture.image.height;
            if (this.width !== width) {
              this.width = width;
            }
            if (this.height !== height) {
              this.height = height;
            }
          }
          this.fill = texture;
        }
      }
      super._update.call(this);
      return this;
    }
    flagReset() {
      this._flagTextures = this._flagFrameRate = false;
      super.flagReset.call(this);
      return this;
    }
  };
  var ImageSequence = _ImageSequence;
  __publicField2(ImageSequence, "Properties", [
    "textures",
    "frameRate",
    "index"
  ]);
  __publicField2(ImageSequence, "DefaultFrameRate", 30);
  var proto19 = {
    frameRate: {
      enumerable: true,
      get: function() {
        return this._frameRate;
      },
      set: function(v) {
        this._frameRate = v;
        this._flagFrameRate = true;
      }
    },
    index: {
      enumerable: true,
      get: function() {
        return this._index;
      },
      set: function(v) {
        this._index = v;
        this._flagIndex = true;
      }
    },
    textures: {
      enumerable: true,
      get: function() {
        return this._textures;
      },
      set: function(textures) {
        const bindTextures = this._renderer.bindTextures;
        const unbindTextures = this._renderer.unbindTextures;
        if (this._textures) {
          this._textures.unbind(Events.Types.insert, bindTextures).unbind(Events.Types.remove, unbindTextures);
        }
        this._textures = new Collection((textures || []).slice(0));
        this._textures.bind(Events.Types.insert, bindTextures).bind(Events.Types.remove, unbindTextures);
        bindTextures(this._textures);
      }
    }
  };
  function FlagTextures() {
    this._flagTextures = true;
  }
  function BindTextures(items) {
    let i = items.length;
    while (i--) {
      items[i].bind(Events.Types.change, this._renderer.flagTextures);
    }
    this._renderer.flagTextures();
  }
  function UnbindTextures(items) {
    let i = items.length;
    while (i--) {
      items[i].unbind(Events.Types.change, this._renderer.flagTextures);
    }
    this._renderer.flagTextures();
  }
  function GenerateTexture(obj) {
    if (obj instanceof Texture) {
      return obj;
    } else if (typeof obj === "string") {
      return new Texture(obj);
    }
  }
  var _ArcSegment = class extends Path {
    constructor(x, y, ir, or, sa, ea, res) {
      const amount2 = res || Constants.Resolution * 3;
      const points = [];
      for (let i = 0; i < amount2; i++) {
        points.push(new Anchor());
      }
      super(points, true, false, true);
      __publicField2(this, "_flagStartAngle", false);
      __publicField2(this, "_flagEndAngle", false);
      __publicField2(this, "_flagInnerRadius", false);
      __publicField2(this, "_flagOuterRadius", false);
      __publicField2(this, "_startAngle", 0);
      __publicField2(this, "_endAngle", TWO_PI);
      __publicField2(this, "_innerRadius", 0);
      __publicField2(this, "_outerRadius", 0);
      for (let prop in proto20) {
        Object.defineProperty(this, prop, proto20[prop]);
      }
      if (typeof ir === "number") {
        this.innerRadius = ir;
      }
      if (typeof or === "number") {
        this.outerRadius = or;
      }
      if (typeof sa === "number") {
        this.startAngle = sa;
      }
      if (typeof ea === "number") {
        this.endAngle = ea;
      }
      this._update();
      if (typeof x === "number") {
        this.translation.x = x;
      }
      if (typeof y === "number") {
        this.translation.y = y;
      }
    }
    _update() {
      if (this._flagVertices || this._flagStartAngle || this._flagEndAngle || this._flagInnerRadius || this._flagOuterRadius) {
        const sa = this._startAngle;
        const ea = this._endAngle;
        const ir = this._innerRadius;
        const or = this._outerRadius;
        const connected = mod(sa, TWO_PI) === mod(ea, TWO_PI);
        const punctured = ir > 0;
        const vertices = this.vertices;
        let length = punctured ? vertices.length / 2 : vertices.length;
        let command, id = 0;
        let i, last, pct, v, theta, step, x, y, amp;
        if (connected) {
          length--;
        } else if (!punctured) {
          length -= 2;
        }
        for (i = 0, last = length - 1; i < length; i++) {
          pct = i / last;
          v = vertices[id];
          theta = pct * (ea - sa) + sa;
          step = (ea - sa) / length;
          x = or * Math.cos(theta);
          y = or * Math.sin(theta);
          switch (i) {
            case 0:
              command = Commands.move;
              break;
            default:
              command = Commands.curve;
          }
          v.command = command;
          v.x = x;
          v.y = y;
          v.controls.left.clear();
          v.controls.right.clear();
          if (v.command === Commands.curve) {
            amp = or * step / Math.PI;
            v.controls.left.x = amp * Math.cos(theta - HALF_PI);
            v.controls.left.y = amp * Math.sin(theta - HALF_PI);
            v.controls.right.x = amp * Math.cos(theta + HALF_PI);
            v.controls.right.y = amp * Math.sin(theta + HALF_PI);
            if (i === 1) {
              v.controls.left.multiplyScalar(2);
            }
            if (i === last) {
              v.controls.right.multiplyScalar(2);
            }
          }
          id++;
        }
        if (punctured) {
          if (connected) {
            vertices[id].command = Commands.close;
            id++;
          } else {
            length--;
            last = length - 1;
          }
          for (i = 0; i < length; i++) {
            pct = i / last;
            v = vertices[id];
            theta = (1 - pct) * (ea - sa) + sa;
            step = (ea - sa) / length;
            x = ir * Math.cos(theta);
            y = ir * Math.sin(theta);
            command = Commands.curve;
            if (i <= 0) {
              command = connected ? Commands.move : Commands.line;
            }
            v.command = command;
            v.x = x;
            v.y = y;
            v.controls.left.clear();
            v.controls.right.clear();
            if (v.command === Commands.curve) {
              amp = ir * step / Math.PI;
              v.controls.left.x = amp * Math.cos(theta + HALF_PI);
              v.controls.left.y = amp * Math.sin(theta + HALF_PI);
              v.controls.right.x = amp * Math.cos(theta - HALF_PI);
              v.controls.right.y = amp * Math.sin(theta - HALF_PI);
              if (i === 1) {
                v.controls.left.multiplyScalar(2);
              }
              if (i === last) {
                v.controls.right.multiplyScalar(2);
              }
            }
            id++;
          }
          vertices[id].copy(vertices[0]);
          vertices[id].command = Commands.line;
        } else if (!connected) {
          vertices[id].command = Commands.line;
          vertices[id].x = 0;
          vertices[id].y = 0;
          id++;
          vertices[id].copy(vertices[0]);
          vertices[id].command = Commands.line;
        }
      }
      super._update.call(this);
      return this;
    }
    flagReset() {
      super.flagReset.call(this);
      this._flagStartAngle = this._flagEndAngle = this._flagInnerRadius = this._flagOuterRadius = false;
      return this;
    }
    clone(parent) {
      const ir = this.innerRadius;
      const or = this.outerRadius;
      const sa = this.startAngle;
      const ea = this.endAngle;
      const resolution = this.vertices.length;
      const clone = new _ArcSegment(0, 0, ir, or, sa, ea, resolution);
      clone.translation.copy(this.translation);
      clone.rotation = this.rotation;
      clone.scale = this.scale;
      clone.skewX = this.skewX;
      clone.skewY = this.skewY;
      if (this.matrix.manual) {
        clone.matrix.copy(this.matrix);
      }
      for (let i = 0; i < Path.Properties.length; i++) {
        const k = Path.Properties[i];
        clone[k] = this[k];
      }
      if (parent) {
        parent.add(clone);
      }
      return clone;
    }
    toObject() {
      const object = super.toObject.call(this);
      for (let i = 0; i < _ArcSegment.Properties.length; i++) {
        const k = _ArcSegment.Properties[i];
        object[k] = this[k];
      }
      return object;
    }
  };
  var ArcSegment = _ArcSegment;
  __publicField2(ArcSegment, "Properties", ["startAngle", "endAngle", "innerRadius", "outerRadius"]);
  var proto20 = {
    startAngle: {
      enumerable: true,
      get: function() {
        return this._startAngle;
      },
      set: function(v) {
        this._startAngle = v;
        this._flagStartAngle = true;
      }
    },
    endAngle: {
      enumerable: true,
      get: function() {
        return this._endAngle;
      },
      set: function(v) {
        this._endAngle = v;
        this._flagEndAngle = true;
      }
    },
    innerRadius: {
      enumerable: true,
      get: function() {
        return this._innerRadius;
      },
      set: function(v) {
        this._innerRadius = v;
        this._flagInnerRadius = true;
      }
    },
    outerRadius: {
      enumerable: true,
      get: function() {
        return this._outerRadius;
      },
      set: function(v) {
        this._outerRadius = v;
        this._flagOuterRadius = true;
      }
    }
  };
  var ceil2 = Math.ceil;
  var floor3 = Math.floor;
  var _Points = class extends Shape {
    constructor(vertices) {
      super();
      __publicField2(this, "_flagVertices", true);
      __publicField2(this, "_flagLength", true);
      __publicField2(this, "_flagFill", true);
      __publicField2(this, "_flagStroke", true);
      __publicField2(this, "_flagLinewidth", true);
      __publicField2(this, "_flagOpacity", true);
      __publicField2(this, "_flagVisible", true);
      __publicField2(this, "_flagSize", true);
      __publicField2(this, "_flagSizeAttenuation", true);
      __publicField2(this, "_length", 0);
      __publicField2(this, "_fill", "#fff");
      __publicField2(this, "_stroke", "#000");
      __publicField2(this, "_linewidth", 1);
      __publicField2(this, "_opacity", 1);
      __publicField2(this, "_visible", true);
      __publicField2(this, "_size", 1);
      __publicField2(this, "_sizeAttenuation", false);
      __publicField2(this, "_beginning", 0);
      __publicField2(this, "_ending", 1);
      __publicField2(this, "_dashes", null);
      __publicField2(this, "noFill", Path.prototype.noFill);
      __publicField2(this, "noStroke", Path.prototype.noStroke);
      __publicField2(this, "corner", Path.prototype.corner);
      __publicField2(this, "center", Path.prototype.center);
      __publicField2(this, "getBoundingClientRect", Path.prototype.getBoundingClientRect);
      __publicField2(this, "_updateLength", Path.prototype._updateLength);
      for (let prop in proto21) {
        Object.defineProperty(this, prop, proto21[prop]);
      }
      this._renderer.type = "points";
      this._renderer.flagVertices = FlagVertices.bind(this);
      this._renderer.bindVertices = BindVertices.bind(this);
      this._renderer.unbindVertices = UnbindVertices.bind(this);
      this._renderer.flagFill = FlagFill.bind(this);
      this._renderer.flagStroke = FlagStroke.bind(this);
      this._renderer.vertices = null;
      this._renderer.collection = null;
      this.sizeAttenuation = false;
      this.beginning = 0;
      this.ending = 1;
      this.fill = "#fff";
      this.stroke = "#000";
      this.className = "";
      this.visible = true;
      this.vertices = vertices;
      this.dashes = [];
      this.dashes.offset = 0;
    }
    clone(parent) {
      const clone = new _Points();
      for (let j = 0; j < this.vertices.length; j++) {
        clone.vertices.push(this.vertices[j].clone());
      }
      for (let i = 0; i < _Points.Properties.length; i++) {
        const k = _Points.Properties[i];
        clone[k] = this[k];
      }
      clone.className = this.className;
      clone.translation.copy(this.translation);
      clone.rotation = this.rotation;
      clone.scale = this.scale;
      clone.skewX = this.skewX;
      clone.skewY = this.skewY;
      if (this.matrix.manual) {
        clone.matrix.copy(this.matrix);
      }
      if (parent) {
        parent.add(clone);
      }
      return clone._update();
    }
    toObject() {
      const result = {
        vertices: this.vertices.map(function(v) {
          return v.toObject();
        })
      };
      _.each(_Points.Properties, function(k) {
        result[k] = this[k];
      }, this);
      result.className = this.className;
      result.translation = this.translation.toObject();
      result.rotation = this.rotation;
      result.scale = this.scale instanceof Vector ? this.scale.toObject() : this.scale;
      result.skewX = this.skewX;
      result.skewY = this.skewY;
      if (this.matrix.manual) {
        result.matrix = this.matrix.toObject();
      }
      return result;
    }
    subdivide(limit) {
      this._update();
      let points = [];
      for (let i = 0; i < this.vertices.length; i++) {
        const a = this.vertices[i];
        const b = this.vertices[i - 1];
        if (!b) {
          continue;
        }
        const x1 = a.x;
        const y1 = a.y;
        const x2 = b.x;
        const y2 = b.y;
        const subdivisions = subdivide(x1, y1, x1, y1, x2, y2, x2, y2, limit);
        points = points.concat(subdivisions);
      }
      this.vertices = points;
      return this;
    }
    _update() {
      if (this._flagVertices) {
        if (this._flagLength) {
          this._updateLength(void 0, true);
        }
        const beginning = Math.min(this._beginning, this._ending);
        const ending = Math.max(this._beginning, this._ending);
        const bid = getIdByLength(this, beginning * this._length);
        const eid = getIdByLength(this, ending * this._length);
        const low = ceil2(bid);
        const high = floor3(eid);
        let j = 0, v;
        this._renderer.vertices = [];
        this._renderer.collection = [];
        for (let i = 0; i < this._collection.length; i++) {
          if (i >= low && i <= high) {
            v = this._collection[i];
            this._renderer.collection.push(v);
            this._renderer.vertices[j * 2 + 0] = v.x;
            this._renderer.vertices[j * 2 + 1] = v.y;
            j++;
          }
        }
      }
      super._update.apply(this, arguments);
      return this;
    }
    flagReset() {
      this._flagVertices = this._flagLength = this._flagFill = this._flagStroke = this._flagLinewidth = this._flagOpacity = this._flagVisible = this._flagSize = this._flagSizeAttenuation = false;
      super.flagReset.call(this);
      return this;
    }
  };
  var Points = _Points;
  __publicField2(Points, "Properties", [
    "fill",
    "stroke",
    "linewidth",
    "opacity",
    "visible",
    "size",
    "sizeAttenuation",
    "beginning",
    "ending"
  ]);
  var proto21 = {
    linewidth: {
      enumerable: true,
      get: function() {
        return this._linewidth;
      },
      set: function(v) {
        this._linewidth = v;
        this._flagLinewidth = true;
      }
    },
    opacity: {
      enumerable: true,
      get: function() {
        return this._opacity;
      },
      set: function(v) {
        this._opacity = v;
        this._flagOpacity = true;
      }
    },
    visible: {
      enumerable: true,
      get: function() {
        return this._visible;
      },
      set: function(v) {
        this._visible = v;
        this._flagVisible = true;
      }
    },
    size: {
      enumerable: true,
      get: function() {
        return this._size;
      },
      set: function(v) {
        this._size = v;
        this._flagSize = true;
      }
    },
    sizeAttenuation: {
      enumerable: true,
      get: function() {
        return this._sizeAttenuation;
      },
      set: function(v) {
        this._sizeAttenuation = v;
        this._flagSizeAttenuation = true;
      }
    },
    fill: {
      enumerable: true,
      get: function() {
        return this._fill;
      },
      set: function(f) {
        if (this._fill instanceof Gradient || this._fill instanceof LinearGradient || this._fill instanceof RadialGradient || this._fill instanceof Texture) {
          this._fill.unbind(Events.Types.change, this._renderer.flagFill);
        }
        this._fill = f;
        this._flagFill = true;
        if (this._fill instanceof Gradient || this._fill instanceof LinearGradient || this._fill instanceof RadialGradient || this._fill instanceof Texture) {
          this._fill.bind(Events.Types.change, this._renderer.flagFill);
        }
      }
    },
    stroke: {
      enumerable: true,
      get: function() {
        return this._stroke;
      },
      set: function(f) {
        if (this._stroke instanceof Gradient || this._stroke instanceof LinearGradient || this._stroke instanceof RadialGradient || this._stroke instanceof Texture) {
          this._stroke.unbind(Events.Types.change, this._renderer.flagStroke);
        }
        this._stroke = f;
        this._flagStroke = true;
        if (this._stroke instanceof Gradient || this._stroke instanceof LinearGradient || this._stroke instanceof RadialGradient || this._stroke instanceof Texture) {
          this._stroke.bind(Events.Types.change, this._renderer.flagStroke);
        }
      }
    },
    length: {
      get: function() {
        if (this._flagLength) {
          this._updateLength();
        }
        return this._length;
      }
    },
    beginning: {
      enumerable: true,
      get: function() {
        return this._beginning;
      },
      set: function(v) {
        this._beginning = v;
        this._flagVertices = true;
      }
    },
    ending: {
      enumerable: true,
      get: function() {
        return this._ending;
      },
      set: function(v) {
        this._ending = v;
        this._flagVertices = true;
      }
    },
    vertices: {
      enumerable: true,
      get: function() {
        return this._collection;
      },
      set: function(vertices) {
        const bindVertices = this._renderer.bindVertices;
        const unbindVertices = this._renderer.unbindVertices;
        if (this._collection) {
          this._collection.unbind(Events.Types.insert, bindVertices).unbind(Events.Types.remove, unbindVertices);
        }
        if (vertices instanceof Collection) {
          this._collection = vertices;
        } else {
          this._collection = new Collection(vertices || []);
        }
        this._collection.bind(Events.Types.insert, bindVertices).bind(Events.Types.remove, unbindVertices);
        bindVertices(this._collection);
      }
    },
    dashes: {
      enumerable: true,
      get: function() {
        return this._dashes;
      },
      set: function(v) {
        if (typeof v.offset !== "number") {
          v.offset = this.dashes && this._dashes.offset || 0;
        }
        this._dashes = v;
      }
    }
  };
  var cos5 = Math.cos;
  var sin5 = Math.sin;
  var _Polygon = class extends Path {
    constructor(x, y, radius, sides) {
      sides = Math.max(sides || 0, 3);
      super();
      __publicField2(this, "_flagWidth", false);
      __publicField2(this, "_flagHeight", false);
      __publicField2(this, "_flagSides", false);
      __publicField2(this, "_radius", 0);
      __publicField2(this, "_width", 0);
      __publicField2(this, "_height", 0);
      __publicField2(this, "_sides", 0);
      for (let prop in proto22) {
        Object.defineProperty(this, prop, proto22[prop]);
      }
      this.closed = true;
      this.automatic = false;
      if (typeof radius === "number") {
        this.radius = radius;
      }
      if (typeof sides === "number") {
        this.sides = sides;
      }
      this._update();
      if (typeof x === "number") {
        this.translation.x = x;
      }
      if (typeof y === "number") {
        this.translation.y = y;
      }
    }
    _update() {
      if (this._flagVertices || this._flagWidth || this._flagHeight || this._flagSides) {
        const sides = this._sides;
        const amount2 = sides + 1;
        let length = this.vertices.length;
        if (length > sides) {
          this.vertices.splice(sides - 1, length - sides);
          length = sides;
        }
        for (let i = 0; i < amount2; i++) {
          const pct = (i + 0.5) / sides;
          const theta = TWO_PI * pct + Math.PI / 2;
          const x = this._width * cos5(theta) / 2;
          const y = this._height * sin5(theta) / 2;
          if (i >= length) {
            this.vertices.push(new Anchor(x, y));
          } else {
            this.vertices[i].set(x, y);
          }
          this.vertices[i].command = i === 0 ? Commands.move : Commands.line;
        }
      }
      super._update.call(this);
      return this;
    }
    flagReset() {
      this._flagWidth = this._flagHeight = this._flagSides = false;
      super.flagReset.call(this);
      return this;
    }
    clone(parent) {
      const clone = new _Polygon(0, 0, 0, this.sides);
      clone.translation.copy(this.translation);
      clone.rotation = this.rotation;
      clone.scale = this.scale;
      clone.skewX = this.skewX;
      clone.skewY = this.skewY;
      clone.width = this.width;
      clone.height = this.height;
      if (this.matrix.manual) {
        clone.matrix.copy(this.matrix);
      }
      for (let i = 0; i < Path.Properties.length; i++) {
        const k = Path.Properties[i];
        clone[k] = this[k];
      }
      if (parent) {
        parent.add(clone);
      }
      return clone;
    }
    toObject() {
      const object = super.toObject.call(this);
      for (let i = 0; i < _Polygon.Properties.length; i++) {
        const k = _Polygon.Properties[i];
        object[k] = this[k];
      }
      return object;
    }
  };
  var Polygon = _Polygon;
  __publicField2(Polygon, "Properties", ["width", "height", "sides"]);
  var proto22 = {
    radius: {
      enumerable: true,
      get: function() {
        return this._radius;
      },
      set: function(v) {
        this._radius = v;
        this.width = v * 2;
        this.height = v * 2;
      }
    },
    width: {
      enumerable: true,
      get: function() {
        return this._width;
      },
      set: function(v) {
        this._width = v;
        this._flagWidth = true;
        this._radius = Math.max(this.width, this.height) / 2;
      }
    },
    height: {
      enumerable: true,
      get: function() {
        return this._height;
      },
      set: function(v) {
        this._height = v;
        this._flagHeight = true;
        this._radius = Math.max(this.width, this.height) / 2;
      }
    },
    sides: {
      enumerable: true,
      get: function() {
        return this._sides;
      },
      set: function(v) {
        this._sides = v;
        this._flagSides = true;
      }
    }
  };
  var cos6 = Math.cos;
  var sin6 = Math.sin;
  var _Star = class extends Path {
    constructor(x, y, innerRadius, outerRadius, sides) {
      if (arguments.length <= 3) {
        outerRadius = innerRadius;
        innerRadius = outerRadius / 2;
      }
      if (typeof sides !== "number" || sides <= 0) {
        sides = 5;
      }
      super();
      __publicField2(this, "_flagInnerRadius", false);
      __publicField2(this, "_flagOuterRadius", false);
      __publicField2(this, "_flagSides", false);
      __publicField2(this, "_innerRadius", 0);
      __publicField2(this, "_outerRadius", 0);
      __publicField2(this, "_sides", 0);
      for (let prop in proto23) {
        Object.defineProperty(this, prop, proto23[prop]);
      }
      this.closed = true;
      this.automatic = false;
      if (typeof innerRadius === "number") {
        this.innerRadius = innerRadius;
      }
      if (typeof outerRadius === "number") {
        this.outerRadius = outerRadius;
      }
      if (typeof sides === "number") {
        this.sides = sides;
      }
      this._update();
      if (typeof x === "number") {
        this.translation.x = x;
      }
      if (typeof y === "number") {
        this.translation.y = y;
      }
    }
    _update() {
      if (this._flagVertices || this._flagInnerRadius || this._flagOuterRadius || this._flagSides) {
        const sides = this._sides * 2;
        const amount2 = sides + 1;
        let length = this.vertices.length;
        if (length > sides) {
          this.vertices.splice(sides - 1, length - sides);
          length = sides;
        }
        for (let i = 0; i < amount2; i++) {
          const pct = (i + 0.5) / sides;
          const theta = TWO_PI * pct;
          const r = (!(i % 2) ? this._innerRadius : this._outerRadius) / 2;
          const x = r * cos6(theta);
          const y = r * sin6(theta);
          if (i >= length) {
            this.vertices.push(new Anchor(x, y));
          } else {
            this.vertices[i].set(x, y);
          }
          this.vertices[i].command = i === 0 ? Commands.move : Commands.line;
        }
      }
      super._update.call(this);
      return this;
    }
    flagReset() {
      this._flagInnerRadius = this._flagOuterRadius = this._flagSides = false;
      super.flagReset.call(this);
      return this;
    }
    clone(parent) {
      const ir = this.innerRadius;
      const or = this.outerRadius;
      const sides = this.sides;
      const clone = new _Star(0, 0, ir, or, sides);
      clone.translation.copy(this.translation);
      clone.rotation = this.rotation;
      clone.scale = this.scale;
      clone.skewX = this.skewX;
      clone.skewY = this.skewY;
      if (this.matrix.manual) {
        clone.matrix.copy(this.matrix);
      }
      for (let i = 0; i < Path.Properties.length; i++) {
        const k = Path.Properties[i];
        clone[k] = this[k];
      }
      if (parent) {
        parent.add(clone);
      }
      return clone;
    }
    toObject() {
      const object = super.toObject.call(this);
      for (let i = 0; i < _Star.Properties.length; i++) {
        const k = _Star.Properties[i];
        object[k] = this[k];
      }
      return object;
    }
  };
  var Star = _Star;
  __publicField2(Star, "Properties", ["innerRadius", "outerRadius", "sides"]);
  var proto23 = {
    innerRadius: {
      enumerable: true,
      get: function() {
        return this._innerRadius;
      },
      set: function(v) {
        this._innerRadius = v;
        this._flagInnerRadius = true;
      }
    },
    outerRadius: {
      enumerable: true,
      get: function() {
        return this._outerRadius;
      },
      set: function(v) {
        this._outerRadius = v;
        this._flagOuterRadius = true;
      }
    },
    sides: {
      enumerable: true,
      get: function() {
        return this._sides;
      },
      set: function(v) {
        this._sides = v;
        this._flagSides = true;
      }
    }
  };
  var svg = {
    version: 1.1,
    ns: "http://www.w3.org/2000/svg",
    xlink: "http://www.w3.org/1999/xlink",
    alignments: {
      left: "start",
      center: "middle",
      right: "end"
    },
    createElement: function(name, attrs) {
      const tag = name;
      const elem = document.createElementNS(svg.ns, tag);
      if (tag === "svg") {
        attrs = _.defaults(attrs || {}, {
          version: svg.version
        });
      }
      if (attrs && Object.keys(attrs).length > 0) {
        svg.setAttributes(elem, attrs);
      }
      return elem;
    },
    setAttributes: function(elem, attrs) {
      const keys2 = Object.keys(attrs);
      for (let i = 0; i < keys2.length; i++) {
        if (/href/.test(keys2[i])) {
          elem.setAttributeNS(svg.xlink, keys2[i], attrs[keys2[i]]);
        } else {
          elem.setAttribute(keys2[i], attrs[keys2[i]]);
        }
      }
      return this;
    },
    removeAttributes: function(elem, attrs) {
      for (let key in attrs) {
        elem.removeAttribute(key);
      }
      return this;
    },
    toString: function(points, closed2) {
      let l = points.length, last = l - 1, d, string = "";
      for (let i = 0; i < l; i++) {
        const b = points[i];
        const prev = closed2 ? mod(i - 1, l) : Math.max(i - 1, 0);
        const a = points[prev];
        let command, c;
        let vx, vy, ux, uy, ar, bl, br, cl;
        let rx, ry, xAxisRotation, largeArcFlag, sweepFlag;
        let x = toFixed(b.x);
        let y = toFixed(b.y);
        switch (b.command) {
          case Commands.close:
            command = Commands.close;
            break;
          case Commands.arc:
            rx = b.rx;
            ry = b.ry;
            xAxisRotation = b.xAxisRotation;
            largeArcFlag = b.largeArcFlag;
            sweepFlag = b.sweepFlag;
            command = Commands.arc + " " + rx + " " + ry + " " + xAxisRotation + " " + largeArcFlag + " " + sweepFlag + " " + x + " " + y;
            break;
          case Commands.curve:
            ar = a.controls && a.controls.right || Vector.zero;
            bl = b.controls && b.controls.left || Vector.zero;
            if (a.relative) {
              vx = toFixed(ar.x + a.x);
              vy = toFixed(ar.y + a.y);
            } else {
              vx = toFixed(ar.x);
              vy = toFixed(ar.y);
            }
            if (b.relative) {
              ux = toFixed(bl.x + b.x);
              uy = toFixed(bl.y + b.y);
            } else {
              ux = toFixed(bl.x);
              uy = toFixed(bl.y);
            }
            command = (i === 0 ? Commands.move : Commands.curve) + " " + vx + " " + vy + " " + ux + " " + uy + " " + x + " " + y;
            break;
          case Commands.move:
            d = b;
            command = Commands.move + " " + x + " " + y;
            break;
          default:
            command = b.command + " " + x + " " + y;
        }
        if (i >= last && closed2) {
          if (b.command === Commands.curve) {
            c = d;
            br = b.controls && b.controls.right || b;
            cl = c.controls && c.controls.left || c;
            if (b.relative) {
              vx = toFixed(br.x + b.x);
              vy = toFixed(br.y + b.y);
            } else {
              vx = toFixed(br.x);
              vy = toFixed(br.y);
            }
            if (c.relative) {
              ux = toFixed(cl.x + c.x);
              uy = toFixed(cl.y + c.y);
            } else {
              ux = toFixed(cl.x);
              uy = toFixed(cl.y);
            }
            x = toFixed(c.x);
            y = toFixed(c.y);
            command += " C " + vx + " " + vy + " " + ux + " " + uy + " " + x + " " + y;
          }
          if (b.command !== Commands.close) {
            command += " Z";
          }
        }
        string += command + " ";
      }
      return string;
    },
    pointsToString: function(points, size) {
      let string = "";
      const r = size * 0.5;
      for (let i = 0; i < points.length; i++) {
        const x = points[i].x;
        const y = points[i].y - r;
        string += Commands.move + " " + x + " " + y + " ";
        string += "a " + r + " " + r + " 0 1 0 0.001 0 Z";
      }
      return string;
    },
    getClip: function(shape, domElement2) {
      let clip = shape._renderer.clip;
      if (!clip) {
        clip = shape._renderer.clip = svg.createElement("clipPath", {
          "clip-rule": "nonzero"
        });
      }
      if (clip.parentNode === null) {
        domElement2.defs.appendChild(clip);
      }
      return clip;
    },
    defs: {
      update: function(domElement2) {
        const { defs } = domElement2;
        if (defs._flagUpdate) {
          const children = Array.prototype.slice.call(
            defs.children,
            0
          );
          for (let i = 0; i < children.length; i++) {
            const child = children[i];
            const id = child.id;
            const selector = `[fill="url(#${id})"],[stroke="url(#${id})"],[clip-path="url(#${id})"]`;
            const exists = domElement2.querySelector(selector);
            if (!exists) {
              defs.removeChild(child);
            }
          }
          defs._flagUpdate = false;
        }
      }
    },
    group: {
      appendChild: function(object) {
        const elem = object._renderer.elem;
        if (!elem) {
          return;
        }
        const tag = elem.nodeName;
        if (!tag || /(radial|linear)gradient/i.test(tag) || object._clip) {
          return;
        }
        this.elem.appendChild(elem);
      },
      removeChild: function(object) {
        const elem = object._renderer.elem;
        if (!elem || elem.parentNode != this.elem) {
          return;
        }
        const tag = elem.nodeName;
        if (!tag) {
          return;
        }
        if (object._clip) {
          return;
        }
        this.elem.removeChild(elem);
      },
      orderChild: function(object) {
        this.elem.appendChild(object._renderer.elem);
      },
      renderChild: function(child) {
        svg[child._renderer.type].render.call(child, this);
      },
      render: function(domElement2) {
        if (!this._visible && !this._flagVisible || this._opacity === 0 && !this._flagOpacity) {
          return this;
        }
        this._update();
        if (!this._renderer.elem) {
          this._renderer.elem = svg.createElement("g", {
            id: this.id
          });
          domElement2.appendChild(this._renderer.elem);
        }
        const flagMatrix = this._matrix.manual || this._flagMatrix;
        const context = {
          domElement: domElement2,
          elem: this._renderer.elem
        };
        if (flagMatrix) {
          this._renderer.elem.setAttribute("transform", "matrix(" + this._matrix.toString() + ")");
        }
        for (let i = 0; i < this.children.length; i++) {
          const child = this.children[i];
          svg[child._renderer.type].render.call(child, domElement2);
        }
        if (this._flagId) {
          this._renderer.elem.setAttribute("id", this._id);
        }
        if (this._flagOpacity) {
          this._renderer.elem.setAttribute("opacity", this._opacity);
        }
        if (this._flagVisible) {
          this._renderer.elem.setAttribute("display", this._visible ? "inline" : "none");
        }
        if (this._flagClassName) {
          this._renderer.elem.setAttribute("class", this.classList.join(" "));
        }
        if (this._flagAdditions) {
          this.additions.forEach(svg.group.appendChild, context);
        }
        if (this._flagSubtractions) {
          this.subtractions.forEach(svg.group.removeChild, context);
        }
        if (this._flagOrder) {
          this.children.forEach(svg.group.orderChild, context);
        }
        if (this._flagMask) {
          if (this._mask) {
            svg[this._mask._renderer.type].render.call(this._mask, domElement2);
            this._renderer.elem.setAttribute("clip-path", "url(#" + this._mask.id + ")");
          } else {
            this._renderer.elem.removeAttribute("clip-path");
          }
        }
        if (this.dataset) {
          Object.assign(this._renderer.elem.dataset, this.dataset);
        }
        return this.flagReset();
      }
    },
    path: {
      render: function(domElement2) {
        if (this._opacity === 0 && !this._flagOpacity) {
          return this;
        }
        this._update();
        const changed = {};
        const flagMatrix = this._matrix.manual || this._flagMatrix;
        if (flagMatrix) {
          changed.transform = "matrix(" + this._matrix.toString() + ")";
        }
        if (this._flagId) {
          changed.id = this._id;
        }
        if (this._flagVertices) {
          const vertices = svg.toString(this._renderer.vertices, this._closed);
          changed.d = vertices;
        }
        if (this._fill && this._fill._renderer) {
          this._renderer.hasFillEffect = true;
          this._fill._update();
          svg[this._fill._renderer.type].render.call(this._fill, domElement2, true);
        }
        if (this._flagFill) {
          changed.fill = this._fill && this._fill.id ? "url(#" + this._fill.id + ")" : this._fill;
          if (this._renderer.hasFillEffect && typeof this._fill.id === "undefined") {
            domElement2.defs._flagUpdate = true;
            delete this._renderer.hasFillEffect;
          }
        }
        if (this._stroke && this._stroke._renderer) {
          this._renderer.hasStrokeEffect = true;
          this._stroke._update();
          svg[this._stroke._renderer.type].render.call(this._stroke, domElement2, true);
        }
        if (this._flagStroke) {
          changed.stroke = this._stroke && this._stroke.id ? "url(#" + this._stroke.id + ")" : this._stroke;
          if (this._renderer.hasStrokeEffect && typeof this._stroke.id === "undefined") {
            domElement2.defs._flagUpdate = true;
            delete this._renderer.hasStrokeEffect;
          }
        }
        if (this._flagLinewidth) {
          changed["stroke-width"] = this._linewidth;
        }
        if (this._flagOpacity) {
          changed["stroke-opacity"] = this._opacity;
          changed["fill-opacity"] = this._opacity;
        }
        if (this._flagClassName) {
          changed["class"] = this.classList.join(" ");
        }
        if (this._flagVisible) {
          changed.visibility = this._visible ? "visible" : "hidden";
        }
        if (this._flagCap) {
          changed["stroke-linecap"] = this._cap;
        }
        if (this._flagJoin) {
          changed["stroke-linejoin"] = this._join;
        }
        if (this._flagMiter) {
          changed["stroke-miterlimit"] = this._miter;
        }
        if (this.dashes && this.dashes.length > 0) {
          changed["stroke-dasharray"] = this.dashes.join(" ");
          changed["stroke-dashoffset"] = this.dashes.offset || 0;
        }
        if (!this._renderer.elem) {
          changed.id = this._id;
          this._renderer.elem = svg.createElement("path", changed);
          domElement2.appendChild(this._renderer.elem);
        } else {
          svg.setAttributes(this._renderer.elem, changed);
        }
        if (this._flagClip) {
          const clip = svg.getClip(this, domElement2);
          const elem = this._renderer.elem;
          if (this._clip) {
            elem.removeAttribute("id");
            clip.setAttribute("id", this.id);
            clip.appendChild(elem);
          } else {
            clip.removeAttribute("id");
            elem.setAttribute("id", this.id);
            this.parent._renderer.elem.appendChild(elem);
          }
        }
        if (this._flagMask) {
          if (this._mask) {
            svg[this._mask._renderer.type].render.call(this._mask, domElement2);
            this._renderer.elem.setAttribute("clip-path", "url(#" + this._mask.id + ")");
          } else {
            this._renderer.elem.removeAttribute("clip-path");
          }
        }
        return this.flagReset();
      }
    },
    points: {
      render: function(domElement2) {
        if (this._opacity === 0 && !this._flagOpacity) {
          return this;
        }
        this._update();
        const changed = {};
        const flagMatrix = this._matrix.manual || this._flagMatrix;
        if (flagMatrix) {
          changed.transform = "matrix(" + this._matrix.toString() + ")";
        }
        if (this._flagId) {
          changed.id = this._id;
        }
        if (this._flagVertices || this._flagSize || this._flagSizeAttenuation) {
          let size = this._size;
          if (!this._sizeAttenuation) {
            const me = this.worldMatrix.elements;
            const m = decomposeMatrix(me[0], me[3], me[1], me[4], me[2], me[5]);
            size /= Math.max(m.scaleX, m.scaleY);
          }
          const vertices = svg.pointsToString(this._renderer.collection, size);
          changed.d = vertices;
        }
        if (this._fill && this._fill._renderer) {
          this._renderer.hasFillEffect = true;
          this._fill._update();
          svg[this._fill._renderer.type].render.call(this._fill, domElement2, true);
        }
        if (this._flagFill) {
          changed.fill = this._fill && this._fill.id ? "url(#" + this._fill.id + ")" : this._fill;
          if (this._renderer.hasFillEffect && typeof this._fill.id === "undefined") {
            domElement2.defs._flagUpdate = true;
            delete this._renderer.hasFillEffect;
          }
        }
        if (this._stroke && this._stroke._renderer) {
          this._renderer.hasStrokeEffect = true;
          this._stroke._update();
          svg[this._stroke._renderer.type].render.call(this._stroke, domElement2, true);
        }
        if (this._flagStroke) {
          changed.stroke = this._stroke && this._stroke.id ? "url(#" + this._stroke.id + ")" : this._stroke;
          if (this._renderer.hasStrokeEffect && typeof this._stroke.id === "undefined") {
            domElement2.defs._flagUpdate = true;
            delete this._renderer.hasStrokeEffect;
          }
        }
        if (this._flagLinewidth) {
          changed["stroke-width"] = this._linewidth;
        }
        if (this._flagOpacity) {
          changed["stroke-opacity"] = this._opacity;
          changed["fill-opacity"] = this._opacity;
        }
        if (this._flagClassName) {
          changed["class"] = this.classList.join(" ");
        }
        if (this._flagVisible) {
          changed.visibility = this._visible ? "visible" : "hidden";
        }
        if (this.dashes && this.dashes.length > 0) {
          changed["stroke-dasharray"] = this.dashes.join(" ");
          changed["stroke-dashoffset"] = this.dashes.offset || 0;
        }
        if (!this._renderer.elem) {
          changed.id = this._id;
          this._renderer.elem = svg.createElement("path", changed);
          domElement2.appendChild(this._renderer.elem);
        } else {
          svg.setAttributes(this._renderer.elem, changed);
        }
        return this.flagReset();
      }
    },
    text: {
      render: function(domElement2) {
        this._update();
        const changed = {};
        const flagMatrix = this._matrix.manual || this._flagMatrix;
        if (flagMatrix) {
          changed.transform = "matrix(" + this._matrix.toString() + ")";
        }
        if (this._flagId) {
          changed.id = this._id;
        }
        if (this._flagFamily) {
          changed["font-family"] = this._family;
        }
        if (this._flagSize) {
          changed["font-size"] = this._size;
        }
        if (this._flagLeading) {
          changed["line-height"] = this._leading;
        }
        if (this._flagAlignment) {
          changed["text-anchor"] = svg.alignments[this._alignment] || this._alignment;
        }
        if (this._flagBaseline) {
          changed["alignment-baseline"] = changed["dominant-baseline"] = this._baseline;
        }
        if (this._flagStyle) {
          changed["font-style"] = this._style;
        }
        if (this._flagWeight) {
          changed["font-weight"] = this._weight;
        }
        if (this._flagDecoration) {
          changed["text-decoration"] = this._decoration;
        }
        if (this._fill && this._fill._renderer) {
          this._renderer.hasFillEffect = true;
          this._fill._update();
          svg[this._fill._renderer.type].render.call(this._fill, domElement2, true);
        }
        if (this._flagFill) {
          changed.fill = this._fill && this._fill.id ? "url(#" + this._fill.id + ")" : this._fill;
          if (this._renderer.hasFillEffect && typeof this._fill.id === "undefined") {
            domElement2.defs._flagUpdate = true;
            delete this._renderer.hasFillEffect;
          }
        }
        if (this._stroke && this._stroke._renderer) {
          this._renderer.hasStrokeEffect = true;
          this._stroke._update();
          svg[this._stroke._renderer.type].render.call(this._stroke, domElement2, true);
        }
        if (this._flagStroke) {
          changed.stroke = this._stroke && this._stroke.id ? "url(#" + this._stroke.id + ")" : this._stroke;
          if (this._renderer.hasStrokeEffect && typeof this._stroke.id === "undefined") {
            domElement2.defs._flagUpdate = true;
            delete this._renderer.hasStrokeEffect;
          }
        }
        if (this._flagLinewidth) {
          changed["stroke-width"] = this._linewidth;
        }
        if (this._flagOpacity) {
          changed.opacity = this._opacity;
        }
        if (this._flagClassName) {
          changed["class"] = this.classList.join(" ");
        }
        if (this._flagVisible) {
          changed.visibility = this._visible ? "visible" : "hidden";
        }
        if (this.dashes && this.dashes.length > 0) {
          changed["stroke-dasharray"] = this.dashes.join(" ");
          changed["stroke-dashoffset"] = this.dashes.offset || 0;
        }
        if (!this._renderer.elem) {
          changed.id = this._id;
          this._renderer.elem = svg.createElement("text", changed);
          domElement2.appendChild(this._renderer.elem);
        } else {
          svg.setAttributes(this._renderer.elem, changed);
        }
        if (this._flagClip) {
          const clip = svg.getClip(this, domElement2);
          const elem = this._renderer.elem;
          if (this._clip) {
            elem.removeAttribute("id");
            clip.setAttribute("id", this.id);
            clip.appendChild(elem);
          } else {
            clip.removeAttribute("id");
            elem.setAttribute("id", this.id);
            this.parent._renderer.elem.appendChild(elem);
          }
        }
        if (this._flagMask) {
          if (this._mask) {
            svg[this._mask._renderer.type].render.call(this._mask, domElement2);
            this._renderer.elem.setAttribute("clip-path", "url(#" + this._mask.id + ")");
          } else {
            this._renderer.elem.removeAttribute("clip-path");
          }
        }
        if (this._flagValue) {
          this._renderer.elem.textContent = this._value;
        }
        return this.flagReset();
      }
    },
    "linear-gradient": {
      render: function(domElement2, silent) {
        if (!silent) {
          this._update();
        }
        const changed = {};
        if (this._flagId) {
          changed.id = this._id;
        }
        if (this._flagEndPoints) {
          changed.x1 = this.left._x;
          changed.y1 = this.left._y;
          changed.x2 = this.right._x;
          changed.y2 = this.right._y;
        }
        if (this._flagSpread) {
          changed.spreadMethod = this._spread;
        }
        if (this._flagUnits) {
          changed.gradientUnits = this._units;
        }
        if (!this._renderer.elem) {
          changed.id = this._id;
          this._renderer.elem = svg.createElement("linearGradient", changed);
        } else {
          svg.setAttributes(this._renderer.elem, changed);
        }
        if (this._renderer.elem.parentNode === null) {
          domElement2.defs.appendChild(this._renderer.elem);
        }
        if (this._flagStops) {
          const lengthChanged = this._renderer.elem.childNodes.length !== this.stops.length;
          if (lengthChanged) {
            while (this._renderer.elem.lastChild) {
              this._renderer.elem.removeChild(this._renderer.elem.lastChild);
            }
          }
          for (let i = 0; i < this.stops.length; i++) {
            const stop = this.stops[i];
            const attrs = {};
            if (stop._flagOffset) {
              attrs.offset = 100 * stop._offset + "%";
            }
            if (stop._flagColor) {
              attrs["stop-color"] = stop._color;
            }
            if (stop._flagOpacity) {
              attrs["stop-opacity"] = stop._opacity;
            }
            if (!stop._renderer.elem) {
              stop._renderer.elem = svg.createElement("stop", attrs);
            } else {
              svg.setAttributes(stop._renderer.elem, attrs);
            }
            if (lengthChanged) {
              this._renderer.elem.appendChild(stop._renderer.elem);
            }
            stop.flagReset();
          }
        }
        return this.flagReset();
      }
    },
    "radial-gradient": {
      render: function(domElement2, silent) {
        if (!silent) {
          this._update();
        }
        const changed = {};
        if (this._flagId) {
          changed.id = this._id;
        }
        if (this._flagCenter) {
          changed.cx = this.center._x;
          changed.cy = this.center._y;
        }
        if (this._flagFocal) {
          changed.fx = this.focal._x;
          changed.fy = this.focal._y;
        }
        if (this._flagRadius) {
          changed.r = this._radius;
        }
        if (this._flagSpread) {
          changed.spreadMethod = this._spread;
        }
        if (this._flagUnits) {
          changed.gradientUnits = this._units;
        }
        if (!this._renderer.elem) {
          changed.id = this._id;
          this._renderer.elem = svg.createElement("radialGradient", changed);
        } else {
          svg.setAttributes(this._renderer.elem, changed);
        }
        if (this._renderer.elem.parentNode === null) {
          domElement2.defs.appendChild(this._renderer.elem);
        }
        if (this._flagStops) {
          const lengthChanged = this._renderer.elem.childNodes.length !== this.stops.length;
          if (lengthChanged) {
            while (this._renderer.elem.lastChild) {
              this._renderer.elem.removeChild(this._renderer.elem.lastChild);
            }
          }
          for (let i = 0; i < this.stops.length; i++) {
            const stop = this.stops[i];
            const attrs = {};
            if (stop._flagOffset) {
              attrs.offset = 100 * stop._offset + "%";
            }
            if (stop._flagColor) {
              attrs["stop-color"] = stop._color;
            }
            if (stop._flagOpacity) {
              attrs["stop-opacity"] = stop._opacity;
            }
            if (!stop._renderer.elem) {
              stop._renderer.elem = svg.createElement("stop", attrs);
            } else {
              svg.setAttributes(stop._renderer.elem, attrs);
            }
            if (lengthChanged) {
              this._renderer.elem.appendChild(stop._renderer.elem);
            }
            stop.flagReset();
          }
        }
        return this.flagReset();
      }
    },
    texture: {
      render: function(domElement2, silent) {
        if (!silent) {
          this._update();
        }
        const changed = {};
        const styles = { x: 0, y: 0 };
        const image = this.image;
        if (this._flagId) {
          changed.id = this._id;
        }
        if (this._flagLoaded && this.loaded) {
          switch (image.nodeName.toLowerCase()) {
            case "canvas":
              styles.href = styles["xlink:href"] = image.toDataURL("image/png");
              break;
            case "img":
            case "image":
              styles.href = styles["xlink:href"] = this.src;
              break;
          }
        }
        if (this._flagOffset || this._flagLoaded || this._flagScale) {
          changed.x = this._offset.x;
          changed.y = this._offset.y;
          if (image) {
            changed.x -= image.width / 2;
            changed.y -= image.height / 2;
            if (this._scale instanceof Vector) {
              changed.x *= this._scale.x;
              changed.y *= this._scale.y;
            } else {
              changed.x *= this._scale;
              changed.y *= this._scale;
            }
          }
          if (changed.x > 0) {
            changed.x *= -1;
          }
          if (changed.y > 0) {
            changed.y *= -1;
          }
        }
        if (this._flagScale || this._flagLoaded || this._flagRepeat) {
          changed.width = 0;
          changed.height = 0;
          if (image) {
            styles.width = changed.width = image.width;
            styles.height = changed.height = image.height;
            switch (this._repeat) {
              case "no-repeat":
                changed.width += 1;
                changed.height += 1;
                break;
            }
            if (this._scale instanceof Vector) {
              changed.width *= this._scale.x;
              changed.height *= this._scale.y;
            } else {
              changed.width *= this._scale;
              changed.height *= this._scale;
            }
          }
        }
        if (this._flagScale || this._flagLoaded) {
          if (!this._renderer.image) {
            this._renderer.image = svg.createElement("image", styles);
          } else {
            svg.setAttributes(this._renderer.image, styles);
          }
        }
        if (!this._renderer.elem) {
          changed.id = this._id;
          changed.patternUnits = "userSpaceOnUse";
          this._renderer.elem = svg.createElement("pattern", changed);
        } else if (Object.keys(changed).length !== 0) {
          svg.setAttributes(this._renderer.elem, changed);
        }
        if (this._renderer.elem.parentNode === null) {
          domElement2.defs.appendChild(this._renderer.elem);
        }
        if (this._renderer.elem && this._renderer.image && !this._renderer.appended) {
          this._renderer.elem.appendChild(this._renderer.image);
          this._renderer.appended = true;
        }
        return this.flagReset();
      }
    }
  };
  var Renderer2 = class extends Events {
    constructor(params) {
      super();
      this.domElement = params.domElement || svg.createElement("svg");
      this.scene = new Group();
      this.scene.parent = this;
      this.defs = svg.createElement("defs");
      this.defs._flagUpdate = false;
      this.domElement.appendChild(this.defs);
      this.domElement.defs = this.defs;
      this.domElement.style.overflow = "hidden";
    }
    setSize(width, height) {
      this.width = width;
      this.height = height;
      svg.setAttributes(this.domElement, {
        width,
        height
      });
      return this.trigger(Events.Types.resize, width, height);
    }
    render() {
      svg.group.render.call(this.scene, this.domElement);
      svg.defs.update(this.domElement);
      return this;
    }
  };
  __publicField2(Renderer2, "Utils", svg);
  var shaders = {
    create: function(gl, source, type) {
      const shader = gl.createShader(gl[type]);
      gl.shaderSource(shader, source);
      gl.compileShader(shader);
      const compiled = gl.getShaderParameter(shader, gl.COMPILE_STATUS);
      if (!compiled) {
        const error = gl.getShaderInfoLog(shader);
        gl.deleteShader(shader);
        throw new TwoError("unable to compile shader " + shader + ": " + error);
      }
      return shader;
    },
    types: {
      vertex: "VERTEX_SHADER",
      fragment: "FRAGMENT_SHADER"
    },
    path: {
      vertex: `
      precision mediump float;
      attribute vec2 a_position;

      uniform mat3 u_matrix;
      uniform vec2 u_resolution;
      uniform vec4 u_rect;

      varying vec2 v_textureCoords;

      void main() {
        vec2 rectCoords = (a_position * (u_rect.zw - u_rect.xy)) + u_rect.xy;
        vec2 projected = (u_matrix * vec3(rectCoords, 1.0)).xy;
        vec2 normal = projected / u_resolution;
        vec2 clipspace = (normal * 2.0) - 1.0;

        gl_Position = vec4(clipspace * vec2(1.0, -1.0), 0.0, 1.0);
        v_textureCoords = a_position;
      }
    `,
      fragment: `
      precision mediump float;

      uniform sampler2D u_image;
      varying vec2 v_textureCoords;

      void main() {
        vec4 texel = texture2D(u_image, v_textureCoords);
        if (texel.a == 0.0) {
          discard;
        }
        gl_FragColor = texel;
      }
    `
    },
    points: {
      vertex: `
      precision mediump float;
      attribute vec2 a_position;

      uniform float u_size;
      uniform mat3 u_matrix;
      uniform vec2 u_resolution;

      varying vec2 v_textureCoords;

      void main() {
        vec2 projected = (u_matrix * vec3(a_position, 1.0)).xy;
        vec2 normal = projected / u_resolution;
        vec2 clipspace = (normal * 2.0) - 1.0;

        gl_PointSize = u_size;
        gl_Position = vec4(clipspace * vec2(1.0, -1.0), 0.0, 1.0);
        v_textureCoords = a_position;
      }
    `,
      fragment: `
      precision mediump float;

      uniform sampler2D u_image;

      void main() {
        vec4 texel = texture2D(u_image, gl_PointCoord);
        if (texel.a == 0.0) {
          discard;
        }
        gl_FragColor = texel;
      }
    `
    }
  };
  var multiplyMatrix = Matrix2.Multiply;
  var identity = [1, 0, 0, 0, 1, 0, 0, 0, 1];
  var transformation = new NumArray(9);
  var CanvasUtils = Renderer.Utils;
  var quad = new NumArray([
    0,
    0,
    1,
    0,
    0,
    1,
    0,
    1,
    1,
    0,
    1,
    1
  ]);
  var webgl = {
    precision: 0.9,
    isHidden: /(undefined|none|transparent)/i,
    canvas: root.document ? root.document.createElement("canvas") : { getContext: function() {
    } },
    alignments: {
      left: "start",
      middle: "center",
      right: "end"
    },
    matrix: new Matrix2(),
    group: {
      removeChild: function(child, gl) {
        if (child.children) {
          for (let i = 0; i < child.children.length; i++) {
            webgl.group.removeChild(child.children[i], gl);
          }
        }
        if (child._renderer.texture) {
          gl.deleteTexture(child._renderer.texture);
          delete child._renderer.texture;
        }
        if (child._renderer.positionBuffer) {
          gl.deleteBuffer(child._renderer.positionBuffer);
          delete child._renderer.positionBuffer;
        }
      },
      render: function(gl, programs) {
        if (!this._visible) {
          return;
        }
        this._update();
        const parent = this.parent;
        const flagParentMatrix = parent._matrix && parent._matrix.manual || parent._flagMatrix;
        const flagMatrix = this._matrix.manual || this._flagMatrix;
        if (flagParentMatrix || flagMatrix) {
          if (!this._renderer.matrix) {
            this._renderer.matrix = new NumArray(9);
          }
          this._matrix.toTransformArray(true, transformation);
          multiplyMatrix(transformation, parent._renderer.matrix, this._renderer.matrix);
          if (!(this._renderer.scale instanceof Vector)) {
            this._renderer.scale = new Vector();
          }
          if (this._scale instanceof Vector) {
            this._renderer.scale.x = this._scale.x;
            this._renderer.scale.y = this._scale.y;
          } else {
            this._renderer.scale.x = this._scale;
            this._renderer.scale.y = this._scale;
          }
          if (!/renderer/i.test(parent._renderer.type)) {
            this._renderer.scale.x *= parent._renderer.scale.x;
            this._renderer.scale.y *= parent._renderer.scale.y;
          }
          if (flagParentMatrix) {
            this._flagMatrix = true;
          }
        }
        if (this._mask) {
          gl.clear(gl.STENCIL_BUFFER_BIT);
          gl.enable(gl.STENCIL_TEST);
          gl.stencilFunc(gl.ALWAYS, 1, 0);
          gl.stencilOp(gl.KEEP, gl.KEEP, gl.REPLACE);
          gl.colorMask(false, false, false, false);
          webgl[this._mask._renderer.type].render.call(this._mask, gl, programs, this);
          gl.stencilFunc(gl.EQUAL, 1, 255);
          gl.stencilOp(gl.KEEP, gl.KEEP, gl.KEEP);
          gl.colorMask(true, true, true, true);
        }
        this._flagOpacity = parent._flagOpacity || this._flagOpacity;
        this._renderer.opacity = this._opacity * (parent && parent._renderer ? parent._renderer.opacity : 1);
        let i;
        if (this._flagSubtractions) {
          for (i = 0; i < this.subtractions.length; i++) {
            webgl.group.removeChild(this.subtractions[i], gl);
          }
        }
        for (i = 0; i < this.children.length; i++) {
          const child = this.children[i];
          webgl[child._renderer.type].render.call(child, gl, programs);
        }
        if (this._mask) {
          gl.disable(gl.STENCIL_TEST);
        }
        return this.flagReset();
      }
    },
    path: {
      updateCanvas: function(elem) {
        let prev, a, c, ux, uy, vx, vy, ar, bl, br, cl, x, y;
        let isOffset;
        const commands = elem._renderer.vertices;
        const canvas3 = this.canvas;
        const ctx2 = this.ctx;
        const scale = elem._renderer.scale;
        const stroke = elem._stroke;
        const linewidth = elem._linewidth;
        const fill = elem._fill;
        const opacity = elem._renderer.opacity || elem._opacity;
        const cap = elem._cap;
        const join = elem._join;
        const miter = elem._miter;
        const closed2 = elem._closed;
        const dashes = elem.dashes;
        const length = commands.length;
        const last = length - 1;
        canvas3.width = Math.max(Math.ceil(elem._renderer.rect.width * scale.x), 1);
        canvas3.height = Math.max(Math.ceil(elem._renderer.rect.height * scale.y), 1);
        const centroid = elem._renderer.rect.centroid;
        const cx = centroid.x;
        const cy = centroid.y;
        ctx2.clearRect(0, 0, canvas3.width, canvas3.height);
        if (fill) {
          if (typeof fill === "string") {
            ctx2.fillStyle = fill;
          } else {
            webgl[fill._renderer.type].render.call(fill, ctx2, elem);
            ctx2.fillStyle = fill._renderer.effect;
          }
        }
        if (stroke) {
          if (typeof stroke === "string") {
            ctx2.strokeStyle = stroke;
          } else {
            webgl[stroke._renderer.type].render.call(stroke, ctx2, elem);
            ctx2.strokeStyle = stroke._renderer.effect;
          }
          if (linewidth) {
            ctx2.lineWidth = linewidth;
          }
          if (miter) {
            ctx2.miterLimit = miter;
          }
          if (join) {
            ctx2.lineJoin = join;
          }
          if (!closed2 && cap) {
            ctx2.lineCap = cap;
          }
        }
        if (typeof opacity === "number") {
          ctx2.globalAlpha = opacity;
        }
        if (dashes && dashes.length > 0) {
          ctx2.lineDashOffset = dashes.offset || 0;
          ctx2.setLineDash(dashes);
        }
        let d, rx, ry, xAxisRotation, largeArcFlag, sweepFlag, ax, ay;
        ctx2.save();
        ctx2.scale(scale.x, scale.y);
        ctx2.translate(cx, cy);
        ctx2.beginPath();
        for (let i = 0; i < commands.length; i++) {
          const b = commands[i];
          x = b.x;
          y = b.y;
          switch (b.command) {
            case Commands.close:
              ctx2.closePath();
              break;
            case Commands.arc:
              rx = b.rx;
              ry = b.ry;
              xAxisRotation = b.xAxisRotation;
              largeArcFlag = b.largeArcFlag;
              sweepFlag = b.sweepFlag;
              prev = closed2 ? mod(i - 1, length) : Math.max(i - 1, 0);
              a = commands[prev];
              ax = a.x;
              ay = a.y;
              CanvasUtils.renderSvgArcCommand(ctx2, ax, ay, rx, ry, largeArcFlag, sweepFlag, xAxisRotation, x, y);
              break;
            case Commands.curve:
              prev = closed2 ? mod(i - 1, length) : Math.max(i - 1, 0);
              a = commands[prev];
              ar = a.controls && a.controls.right || Vector.zero;
              bl = b.controls && b.controls.left || Vector.zero;
              if (a._relative) {
                vx = ar.x + a.x;
                vy = ar.y + a.y;
              } else {
                vx = ar.x;
                vy = ar.y;
              }
              if (b._relative) {
                ux = bl.x + b.x;
                uy = bl.y + b.y;
              } else {
                ux = bl.x;
                uy = bl.y;
              }
              ctx2.bezierCurveTo(vx, vy, ux, uy, x, y);
              if (i >= last && closed2) {
                c = d;
                br = b.controls && b.controls.right || Vector.zero;
                cl = c.controls && c.controls.left || Vector.zero;
                if (b._relative) {
                  vx = br.x + b.x;
                  vy = br.y + b.y;
                } else {
                  vx = br.x;
                  vy = br.y;
                }
                if (c._relative) {
                  ux = cl.x + c.x;
                  uy = cl.y + c.y;
                } else {
                  ux = cl.x;
                  uy = cl.y;
                }
                x = c.x;
                y = c.y;
                ctx2.bezierCurveTo(vx, vy, ux, uy, x, y);
              }
              break;
            case Commands.line:
              ctx2.lineTo(x, y);
              break;
            case Commands.move:
              d = b;
              ctx2.moveTo(x, y);
              break;
          }
        }
        if (closed2) {
          ctx2.closePath();
        }
        if (!webgl.isHidden.test(fill)) {
          isOffset = fill._renderer && fill._renderer.offset;
          if (isOffset) {
            ctx2.save();
            ctx2.translate(
              -fill._renderer.offset.x,
              -fill._renderer.offset.y
            );
            ctx2.scale(fill._renderer.scale.x, fill._renderer.scale.y);
          }
          ctx2.fill();
          if (isOffset) {
            ctx2.restore();
          }
        }
        if (!webgl.isHidden.test(stroke)) {
          isOffset = stroke._renderer && stroke._renderer.offset;
          if (isOffset) {
            ctx2.save();
            ctx2.translate(
              -stroke._renderer.offset.x,
              -stroke._renderer.offset.y
            );
            ctx2.scale(stroke._renderer.scale.x, stroke._renderer.scale.y);
            ctx2.lineWidth = linewidth / stroke._renderer.scale.x;
          }
          ctx2.stroke();
          if (isOffset) {
            ctx2.restore();
          }
        }
        ctx2.restore();
      },
      getBoundingClientRect: function(vertices, border, rect) {
        let left = Infinity, right = -Infinity, top = Infinity, bottom = -Infinity, width, height;
        vertices.forEach(function(v) {
          const x = v.x, y = v.y, controls = v.controls;
          let a, b, c, d, cl, cr;
          top = Math.min(y, top);
          left = Math.min(x, left);
          right = Math.max(x, right);
          bottom = Math.max(y, bottom);
          if (!v.controls) {
            return;
          }
          cl = controls.left;
          cr = controls.right;
          if (!cl || !cr) {
            return;
          }
          a = v._relative ? cl.x + x : cl.x;
          b = v._relative ? cl.y + y : cl.y;
          c = v._relative ? cr.x + x : cr.x;
          d = v._relative ? cr.y + y : cr.y;
          if (!a || !b || !c || !d) {
            return;
          }
          top = Math.min(b, d, top);
          left = Math.min(a, c, left);
          right = Math.max(a, c, right);
          bottom = Math.max(b, d, bottom);
        });
        if (typeof border === "number") {
          top -= border;
          left -= border;
          right += border;
          bottom += border;
        }
        width = right - left;
        height = bottom - top;
        rect.top = top;
        rect.left = left;
        rect.right = right;
        rect.bottom = bottom;
        rect.width = width;
        rect.height = height;
        if (!rect.centroid) {
          rect.centroid = {};
        }
        rect.centroid.x = -left;
        rect.centroid.y = -top;
      },
      render: function(gl, programs, forcedParent) {
        if (!this._visible || !this._opacity) {
          return this;
        }
        this._update();
        const parent = forcedParent || this.parent;
        const program = programs[this._renderer.type];
        const flagParentMatrix = parent._matrix.manual || parent._flagMatrix;
        const flagMatrix = this._matrix.manual || this._flagMatrix;
        const parentChanged = this._renderer.parent !== parent;
        const flagTexture = this._flagVertices || this._flagFill || this._fill instanceof LinearGradient && (this._fill._flagSpread || this._fill._flagStops || this._fill._flagEndPoints) || this._fill instanceof RadialGradient && (this._fill._flagSpread || this._fill._flagStops || this._fill._flagRadius || this._fill._flagCenter || this._fill._flagFocal) || this._fill instanceof Texture && (this._fill._flagLoaded && this._fill.loaded || this._fill._flagImage || this._fill._flagVideo || this._fill._flagRepeat || this._fill._flagOffset || this._fill._flagScale) || this._stroke instanceof LinearGradient && (this._stroke._flagSpread || this._stroke._flagStops || this._stroke._flagEndPoints) || this._stroke instanceof RadialGradient && (this._stroke._flagSpread || this._stroke._flagStops || this._stroke._flagRadius || this._stroke._flagCenter || this._stroke._flagFocal) || this._stroke instanceof Texture && (this._stroke._flagLoaded && this._stroke.loaded || this._stroke._flagImage || this._stroke._flagVideo || this._stroke._flagRepeat || this._stroke._flagOffset || this._fill._flagScale) || this._flagStroke || this._flagLinewidth || this._flagOpacity || parent._flagOpacity || this._flagVisible || this._flagCap || this._flagJoin || this._flagMiter || this._flagScale || this.dashes && this.dashes.length > 0 || !this._renderer.texture;
        if (flagParentMatrix || flagMatrix || parentChanged) {
          if (!this._renderer.matrix) {
            this._renderer.matrix = new NumArray(9);
          }
          this._matrix.toTransformArray(true, transformation);
          multiplyMatrix(transformation, parent._renderer.matrix, this._renderer.matrix);
          if (!(this._renderer.scale instanceof Vector)) {
            this._renderer.scale = new Vector();
          }
          if (this._scale instanceof Vector) {
            this._renderer.scale.x = this._scale.x * parent._renderer.scale.x;
            this._renderer.scale.y = this._scale.y * parent._renderer.scale.y;
          } else {
            this._renderer.scale.x = this._scale * parent._renderer.scale.x;
            this._renderer.scale.y = this._scale * parent._renderer.scale.y;
          }
          if (parentChanged) {
            this._renderer.parent = parent;
          }
        }
        if (this._mask) {
          gl.clear(gl.STENCIL_BUFFER_BIT);
          gl.enable(gl.STENCIL_TEST);
          gl.stencilFunc(gl.ALWAYS, 1, 0);
          gl.stencilOp(gl.KEEP, gl.KEEP, gl.REPLACE);
          gl.colorMask(false, false, false, false);
          webgl[this._mask._renderer.type].render.call(this._mask, gl, programs, this);
          gl.stencilFunc(gl.EQUAL, 1, 255);
          gl.stencilOp(gl.KEEP, gl.KEEP, gl.KEEP);
          gl.colorMask(true, true, true, true);
        }
        if (flagTexture) {
          if (!this._renderer.rect) {
            this._renderer.rect = {};
          }
          this._renderer.opacity = this._opacity * parent._renderer.opacity;
          webgl.path.getBoundingClientRect(
            this._renderer.vertices,
            this._linewidth,
            this._renderer.rect
          );
          webgl.updateTexture.call(webgl, gl, this);
        } else {
          if (this._fill && this._fill._update) {
            this._fill._update();
          }
          if (this._stroke && this._stroke._update) {
            this._stroke._update();
          }
        }
        if (this._clip && !forcedParent || !this._renderer.texture) {
          return this;
        }
        if (programs.current !== program) {
          gl.useProgram(program);
          gl.bindBuffer(gl.ARRAY_BUFFER, programs.buffers.position);
          gl.vertexAttribPointer(program.position, 2, gl.FLOAT, false, 0, 0);
          gl.enableVertexAttribArray(program.position);
          gl.bufferData(gl.ARRAY_BUFFER, quad, gl.STATIC_DRAW);
          if (!programs.resolution.flagged) {
            gl.uniform2f(
              gl.getUniformLocation(program, "u_resolution"),
              programs.resolution.width,
              programs.resolution.height
            );
          }
          programs.current = program;
        }
        if (programs.resolution.flagged) {
          gl.uniform2f(
            gl.getUniformLocation(program, "u_resolution"),
            programs.resolution.width,
            programs.resolution.height
          );
        }
        gl.bindTexture(gl.TEXTURE_2D, this._renderer.texture);
        const rect = this._renderer.rect;
        gl.uniformMatrix3fv(program.matrix, false, this._renderer.matrix);
        gl.uniform4f(program.rect, rect.left, rect.top, rect.right, rect.bottom);
        gl.drawArrays(gl.TRIANGLES, 0, 6);
        if (this._mask) {
          gl.disable(gl.STENCIL_TEST);
        }
        return this.flagReset();
      }
    },
    points: {
      updateCanvas: function(elem) {
        let isOffset;
        const canvas3 = this.canvas;
        const ctx2 = this.ctx;
        const stroke = elem._stroke;
        const linewidth = elem._linewidth;
        const fill = elem._fill;
        const opacity = elem._renderer.opacity || elem._opacity;
        const dashes = elem.dashes;
        const size = elem._size;
        let dimension = size;
        if (!webgl.isHidden.test(stroke)) {
          dimension += linewidth;
        }
        canvas3.width = getPoT(dimension);
        canvas3.height = canvas3.width;
        const aspect = dimension / canvas3.width;
        const cx = canvas3.width / 2;
        const cy = canvas3.height / 2;
        ctx2.clearRect(0, 0, canvas3.width, canvas3.height);
        if (fill) {
          if (typeof fill === "string") {
            ctx2.fillStyle = fill;
          } else {
            webgl[fill._renderer.type].render.call(fill, ctx2, elem);
            ctx2.fillStyle = fill._renderer.effect;
          }
        }
        if (stroke) {
          if (typeof stroke === "string") {
            ctx2.strokeStyle = stroke;
          } else {
            webgl[stroke._renderer.type].render.call(stroke, ctx2, elem);
            ctx2.strokeStyle = stroke._renderer.effect;
          }
          if (linewidth) {
            ctx2.lineWidth = linewidth / aspect;
          }
        }
        if (typeof opacity === "number") {
          ctx2.globalAlpha = opacity;
        }
        if (dashes && dashes.length > 0) {
          ctx2.lineDashOffset = dashes.offset || 0;
          ctx2.setLineDash(dashes);
        }
        ctx2.save();
        ctx2.translate(cx, cy);
        ctx2.scale(webgl.precision, webgl.precision);
        ctx2.beginPath();
        ctx2.arc(0, 0, size / aspect * 0.5, 0, TWO_PI);
        ctx2.restore();
        if (closed) {
          ctx2.closePath();
        }
        if (!webgl.isHidden.test(fill)) {
          isOffset = fill._renderer && fill._renderer.offset;
          if (isOffset) {
            ctx2.save();
            ctx2.translate(
              -fill._renderer.offset.x,
              -fill._renderer.offset.y
            );
            ctx2.scale(fill._renderer.scale.x, fill._renderer.scale.y);
          }
          ctx2.fill();
          if (isOffset) {
            ctx2.restore();
          }
        }
        if (!webgl.isHidden.test(stroke)) {
          isOffset = stroke._renderer && stroke._renderer.offset;
          if (isOffset) {
            ctx2.save();
            ctx2.translate(
              -stroke._renderer.offset.x,
              -stroke._renderer.offset.y
            );
            ctx2.scale(stroke._renderer.scale.x, stroke._renderer.scale.y);
            ctx2.lineWidth = linewidth / stroke._renderer.scale.x;
          }
          ctx2.stroke();
          if (isOffset) {
            ctx2.restore();
          }
        }
      },
      render: function(gl, programs, forcedParent) {
        if (!this._visible || !this._opacity) {
          return this;
        }
        this._update();
        let size = this._size;
        const parent = forcedParent || this.parent;
        const program = programs[this._renderer.type];
        const sizeAttenuation = this._sizeAttenuation;
        const stroke = this._stroke;
        const linewidth = this._linewidth;
        const flagParentMatrix = parent._matrix.manual || parent._flagMatrix;
        const flagMatrix = this._matrix.manual || this._flagMatrix;
        const parentChanged = this._renderer.parent !== parent;
        const commands = this._renderer.vertices;
        const length = this._renderer.collection.length;
        const flagVertices = this._flagVertices;
        const flagTexture = this._flagFill || this._fill instanceof LinearGradient && (this._fill._flagSpread || this._fill._flagStops || this._fill._flagEndPoints) || this._fill instanceof RadialGradient && (this._fill._flagSpread || this._fill._flagStops || this._fill._flagRadius || this._fill._flagCenter || this._fill._flagFocal) || this._fill instanceof Texture && (this._fill._flagLoaded && this._fill.loaded || this._fill._flagImage || this._fill._flagVideo || this._fill._flagRepeat || this._fill._flagOffset || this._fill._flagScale) || this._stroke instanceof LinearGradient && (this._stroke._flagSpread || this._stroke._flagStops || this._stroke._flagEndPoints) || this._stroke instanceof RadialGradient && (this._stroke._flagSpread || this._stroke._flagStops || this._stroke._flagRadius || this._stroke._flagCenter || this._stroke._flagFocal) || this._stroke instanceof Texture && (this._stroke._flagLoaded && this._stroke.loaded || this._stroke._flagImage || this._stroke._flagVideo || this._stroke._flagRepeat || this._stroke._flagOffset || this._fill._flagScale) || this._flagStroke || this._flagLinewidth || this._flagOpacity || parent._flagOpacity || this._flagVisible || this._flagScale || this.dashes && this.dashes.length > 0 || !this._renderer.texture;
        if (flagParentMatrix || flagMatrix || parentChanged) {
          if (!this._renderer.matrix) {
            this._renderer.matrix = new NumArray(9);
          }
          this._matrix.toTransformArray(true, transformation);
          multiplyMatrix(transformation, parent._renderer.matrix, this._renderer.matrix);
          if (!(this._renderer.scale instanceof Vector)) {
            this._renderer.scale = new Vector();
          }
          if (this._scale instanceof Vector) {
            this._renderer.scale.x = this._scale.x * parent._renderer.scale.x;
            this._renderer.scale.y = this._scale.y * parent._renderer.scale.y;
          } else {
            this._renderer.scale.x = this._scale * parent._renderer.scale.x;
            this._renderer.scale.y = this._scale * parent._renderer.scale.y;
          }
          if (parentChanged) {
            this._renderer.parent = parent;
          }
        }
        if (flagVertices) {
          const positionBuffer = this._renderer.positionBuffer;
          if (positionBuffer) {
            gl.deleteBuffer(positionBuffer);
          }
          this._renderer.positionBuffer = gl.createBuffer();
          gl.bindBuffer(gl.ARRAY_BUFFER, this._renderer.positionBuffer);
          gl.vertexAttribPointer(program.position, 2, gl.FLOAT, false, 0, 0);
          gl.enableVertexAttribArray(program.position);
          gl.bufferData(gl.ARRAY_BUFFER, commands, gl.STATIC_DRAW);
        }
        if (flagTexture) {
          this._renderer.opacity = this._opacity * parent._renderer.opacity;
          webgl.updateTexture.call(webgl, gl, this);
        } else {
          if (this._fill && this._fill._update) {
            this._fill._update();
          }
          if (this._stroke && this._stroke._update) {
            this._stroke._update();
          }
        }
        if (this._clip && !forcedParent || !this._renderer.texture) {
          return this;
        }
        if (!webgl.isHidden.test(stroke)) {
          size += linewidth;
        }
        size /= webgl.precision;
        if (sizeAttenuation) {
          size *= Math.max(this._renderer.scale.x, this._renderer.scale.y);
        }
        if (programs.current !== program) {
          gl.useProgram(program);
          if (!programs.resolution.flagged) {
            gl.uniform2f(
              gl.getUniformLocation(program, "u_resolution"),
              programs.resolution.width,
              programs.resolution.height
            );
          }
          programs.current = program;
        }
        if (programs.resolution.flagged) {
          gl.uniform2f(
            gl.getUniformLocation(program, "u_resolution"),
            programs.resolution.width,
            programs.resolution.height
          );
        }
        gl.bindTexture(gl.TEXTURE_2D, this._renderer.texture);
        gl.uniformMatrix3fv(program.matrix, false, this._renderer.matrix);
        gl.uniform1f(program.size, size * programs.resolution.ratio);
        gl.drawArrays(gl.POINTS, 0, length);
        return this.flagReset();
      }
    },
    text: {
      updateCanvas: function(elem) {
        const canvas3 = this.canvas;
        const ctx2 = this.ctx;
        const scale = elem._renderer.scale;
        const stroke = elem._stroke;
        const linewidth = elem._linewidth * scale;
        const fill = elem._fill;
        const opacity = elem._renderer.opacity || elem._opacity;
        const dashes = elem.dashes;
        const decoration = elem._decoration;
        canvas3.width = Math.max(Math.ceil(elem._renderer.rect.width * scale.x), 1);
        canvas3.height = Math.max(Math.ceil(elem._renderer.rect.height * scale.y), 1);
        const centroid = elem._renderer.rect.centroid;
        const cx = centroid.x;
        const cy = centroid.y;
        let a, b, c, d, e, sx, sy, x1, y1, x2, y2;
        const isOffset = fill._renderer && fill._renderer.offset && stroke._renderer && stroke._renderer.offset;
        ctx2.clearRect(0, 0, canvas3.width, canvas3.height);
        if (!isOffset) {
          ctx2.font = [elem._style, elem._weight, elem._size + "px/" + elem._leading + "px", elem._family].join(" ");
        }
        ctx2.textAlign = "center";
        ctx2.textBaseline = "middle";
        if (fill) {
          if (typeof fill === "string") {
            ctx2.fillStyle = fill;
          } else {
            webgl[fill._renderer.type].render.call(fill, ctx2, elem);
            ctx2.fillStyle = fill._renderer.effect;
          }
        }
        if (stroke) {
          if (typeof stroke === "string") {
            ctx2.strokeStyle = stroke;
          } else {
            webgl[stroke._renderer.type].render.call(stroke, ctx2, elem);
            ctx2.strokeStyle = stroke._renderer.effect;
          }
          if (linewidth) {
            ctx2.lineWidth = linewidth;
          }
        }
        if (typeof opacity === "number") {
          ctx2.globalAlpha = opacity;
        }
        if (dashes && dashes.length > 0) {
          ctx2.lineDashOffset = dashes.offset || 0;
          ctx2.setLineDash(dashes);
        }
        ctx2.save();
        ctx2.scale(scale.x, scale.y);
        ctx2.translate(cx, cy);
        if (!webgl.isHidden.test(fill)) {
          if (fill._renderer && fill._renderer.offset) {
            sx = fill._renderer.scale.x;
            sy = fill._renderer.scale.y;
            ctx2.save();
            ctx2.translate(
              -fill._renderer.offset.x,
              -fill._renderer.offset.y
            );
            ctx2.scale(sx, sy);
            a = elem._size / fill._renderer.scale.y;
            b = elem._leading / fill._renderer.scale.y;
            ctx2.font = [
              elem._style,
              elem._weight,
              a + "px/",
              b + "px",
              elem._family
            ].join(" ");
            c = fill._renderer.offset.x / fill._renderer.scale.x;
            d = fill._renderer.offset.y / fill._renderer.scale.y;
            ctx2.fillText(elem.value, c, d);
            ctx2.restore();
          } else {
            ctx2.fillText(elem.value, 0, 0);
          }
        }
        if (!webgl.isHidden.test(stroke)) {
          if (stroke._renderer && stroke._renderer.offset) {
            sx = stroke._renderer.scale.x;
            sy = stroke._renderer.scale.y;
            ctx2.save();
            ctx2.translate(
              -stroke._renderer.offset.x,
              -stroke._renderer.offset.y
            );
            ctx2.scale(sx, sy);
            a = elem._size / stroke._renderer.scale.y;
            b = elem._leading / stroke._renderer.scale.y;
            ctx2.font = [
              elem._style,
              elem._weight,
              a + "px/",
              b + "px",
              elem._family
            ].join(" ");
            c = stroke._renderer.offset.x / stroke._renderer.scale.x;
            d = stroke._renderer.offset.y / stroke._renderer.scale.y;
            e = linewidth / stroke._renderer.scale.x;
            ctx2.lineWidth = e;
            ctx2.strokeText(elem.value, c, d);
            ctx2.restore();
          } else {
            ctx2.strokeText(elem.value, 0, 0);
          }
        }
        if (/(underline|strikethrough)/i.test(decoration)) {
          const metrics = ctx2.measureText(elem.value);
          switch (decoration) {
            case "underline":
              y1 = metrics.actualBoundingBoxAscent;
              y2 = metrics.actualBoundingBoxAscent;
              break;
            case "strikethrough":
              y1 = 0;
              y2 = 0;
              break;
          }
          x1 = -metrics.width / 2;
          x2 = metrics.width / 2;
          ctx2.lineWidth = Math.max(Math.floor(elem._size / 15), 1);
          ctx2.strokeStyle = ctx2.fillStyle;
          ctx2.beginPath();
          ctx2.moveTo(x1, y1);
          ctx2.lineTo(x2, y2);
          ctx2.stroke();
        }
        ctx2.restore();
      },
      getBoundingClientRect: function(elem, rect) {
        const ctx2 = webgl.ctx;
        ctx2.font = [elem._style, elem._weight, elem._size + "px/" + elem._leading + "px", elem._family].join(" ");
        ctx2.textAlign = "center";
        ctx2.textBaseline = elem._baseline;
        let width = ctx2.measureText(elem._value).width * 1.25;
        let height = Math.max(elem._size, elem._leading) * 1.25;
        if (this._linewidth && !webgl.isHidden.test(this._stroke)) {
          width += this._linewidth * 2;
          height += this._linewidth * 2;
        }
        const w = width / 2;
        const h = height / 2;
        switch (webgl.alignments[elem._alignment] || elem._alignment) {
          case webgl.alignments.left:
            rect.left = 0;
            rect.right = width;
            break;
          case webgl.alignments.right:
            rect.left = -width;
            rect.right = 0;
            break;
          default:
            rect.left = -w;
            rect.right = w;
        }
        switch (elem._baseline) {
          case "bottom":
            rect.top = -height;
            rect.bottom = 0;
            break;
          case "top":
            rect.top = 0;
            rect.bottom = height;
            break;
          default:
            rect.top = -h;
            rect.bottom = h;
        }
        rect.width = width;
        rect.height = height;
        if (!rect.centroid) {
          rect.centroid = {};
        }
        rect.centroid.x = w;
        rect.centroid.y = h;
      },
      render: function(gl, programs, forcedParent) {
        if (!this._visible || !this._opacity) {
          return this;
        }
        this._update();
        const parent = forcedParent || this.parent;
        const program = programs[this._renderer.type];
        const flagParentMatrix = parent._matrix.manual || parent._flagMatrix;
        const flagMatrix = this._matrix.manual || this._flagMatrix;
        const parentChanged = this._renderer.parent !== parent;
        const flagTexture = this._flagVertices || this._flagFill || this._fill instanceof LinearGradient && (this._fill._flagSpread || this._fill._flagStops || this._fill._flagEndPoints) || this._fill instanceof RadialGradient && (this._fill._flagSpread || this._fill._flagStops || this._fill._flagRadius || this._fill._flagCenter || this._fill._flagFocal) || this._fill instanceof Texture && (this._fill._flagLoaded && this._fill.loaded || this._fill._flagImage || this._fill._flagVideo || this._fill._flagRepeat || this._fill._flagOffset || this._fill._flagScale) || this._stroke instanceof LinearGradient && (this._stroke._flagSpread || this._stroke._flagStops || this._stroke._flagEndPoints) || this._stroke instanceof RadialGradient && (this._stroke._flagSpread || this._stroke._flagStops || this._stroke._flagRadius || this._stroke._flagCenter || this._stroke._flagFocal) || this._stroke instanceof Texture && (this._stroke._flagLoaded && this._stroke.loaded || this._stroke._flagImage || this._stroke._flagVideo || this._stroke._flagRepeat || this._stroke._flagOffset || this._fill._flagScale) || this._flagStroke || this._flagLinewidth || this._flagOpacity || parent._flagOpacity || this._flagVisible || this._flagScale || this._flagValue || this._flagFamily || this._flagSize || this._flagLeading || this._flagAlignment || this._flagBaseline || this._flagStyle || this._flagWeight || this._flagDecoration || this.dashes && this.dashes.length > 0 || !this._renderer.texture;
        if (flagParentMatrix || flagMatrix || parentChanged) {
          if (!this._renderer.matrix) {
            this._renderer.matrix = new NumArray(9);
          }
          this._matrix.toTransformArray(true, transformation);
          multiplyMatrix(transformation, parent._renderer.matrix, this._renderer.matrix);
          if (!(this._renderer.scale instanceof Vector)) {
            this._renderer.scale = new Vector();
          }
          if (this._scale instanceof Vector) {
            this._renderer.scale.x = this._scale.x * parent._renderer.scale.x;
            this._renderer.scale.y = this._scale.y * parent._renderer.scale.y;
          } else {
            this._renderer.scale.x = this._scale * parent._renderer.scale.x;
            this._renderer.scale.y = this._scale * parent._renderer.scale.y;
          }
          if (parentChanged) {
            this._renderer.parent = parent;
          }
        }
        if (this._mask) {
          gl.clear(gl.STENCIL_BUFFER_BIT);
          gl.enable(gl.STENCIL_TEST);
          gl.stencilFunc(gl.ALWAYS, 1, 0);
          gl.stencilOp(gl.KEEP, gl.KEEP, gl.REPLACE);
          gl.colorMask(false, false, false, false);
          webgl[this._mask._renderer.type].render.call(this._mask, gl, programs, this);
          gl.stencilFunc(gl.EQUAL, 1, 255);
          gl.stencilOp(gl.KEEP, gl.KEEP, gl.KEEP);
          gl.colorMask(true, true, true, true);
        }
        if (flagTexture) {
          if (!this._renderer.rect) {
            this._renderer.rect = {};
          }
          this._renderer.opacity = this._opacity * parent._renderer.opacity;
          webgl.text.getBoundingClientRect(this, this._renderer.rect);
          webgl.updateTexture.call(webgl, gl, this);
        } else {
          if (this._fill && this._fill._update) {
            this._fill._update();
          }
          if (this._stroke && this._stroke._update) {
            this._stroke._update();
          }
        }
        if (this._clip && !forcedParent || !this._renderer.texture) {
          return this;
        }
        if (programs.current !== program) {
          gl.useProgram(program);
          gl.bindBuffer(gl.ARRAY_BUFFER, programs.buffers.position);
          gl.vertexAttribPointer(program.position, 2, gl.FLOAT, false, 0, 0);
          gl.enableVertexAttribArray(program.position);
          gl.bufferData(gl.ARRAY_BUFFER, quad, gl.STATIC_DRAW);
          if (!programs.resolution.flagged) {
            gl.uniform2f(
              gl.getUniformLocation(program, "u_resolution"),
              programs.resolution.width,
              programs.resolution.height
            );
          }
          programs.current = program;
        }
        if (programs.resolution.flagged) {
          gl.uniform2f(
            gl.getUniformLocation(program, "u_resolution"),
            programs.resolution.width,
            programs.resolution.height
          );
        }
        gl.bindTexture(gl.TEXTURE_2D, this._renderer.texture);
        const rect = this._renderer.rect;
        gl.uniformMatrix3fv(program.matrix, false, this._renderer.matrix);
        gl.uniform4f(program.rect, rect.left, rect.top, rect.right, rect.bottom);
        gl.drawArrays(gl.TRIANGLES, 0, 6);
        if (this._mask) {
          gl.disable(gl.STENCIL_TEST);
        }
        return this.flagReset();
      }
    },
    "linear-gradient": {
      render: function(ctx2, parent) {
        if (!ctx2.canvas.getContext("2d") || !parent) {
          return;
        }
        this._update();
        if (!this._renderer.effect || this._flagEndPoints || this._flagStops || this._flagUnits) {
          let rect;
          let lx = this.left._x;
          let ly = this.left._y;
          let rx = this.right._x;
          let ry = this.right._y;
          if (/objectBoundingBox/i.test(this._units)) {
            rect = parent.getBoundingClientRect(true);
            lx = (lx - 0.5) * rect.width;
            ly = (ly - 0.5) * rect.height;
            rx = (rx - 0.5) * rect.width;
            ry = (ry - 0.5) * rect.height;
          }
          this._renderer.effect = ctx2.createLinearGradient(lx, ly, rx, ry);
          for (let i = 0; i < this.stops.length; i++) {
            const stop = this.stops[i];
            this._renderer.effect.addColorStop(stop._offset, stop._color);
          }
        }
        return this.flagReset();
      }
    },
    "radial-gradient": {
      render: function(ctx2, parent) {
        if (!ctx2.canvas.getContext("2d") || !parent) {
          return;
        }
        this._update();
        if (!this._renderer.effect || this._flagCenter || this._flagFocal || this._flagRadius || this._flagStops || this._flagUnits) {
          let rect;
          let cx = this.center._x;
          let cy = this.center._y;
          let fx = this.focal._x;
          let fy = this.focal._y;
          let radius = this._radius;
          if (/objectBoundingBox/i.test(this._units)) {
            rect = parent.getBoundingClientRect(true);
            cx = cx * rect.width * 0.5;
            cy = cy * rect.height * 0.5;
            fx = fx * rect.width * 0.5;
            fy = fy * rect.height * 0.5;
            radius *= Math.min(rect.width, rect.height) * 0.5;
          }
          this._renderer.effect = ctx2.createRadialGradient(
            cx,
            cy,
            0,
            fx,
            fy,
            radius
          );
          for (let i = 0; i < this.stops.length; i++) {
            const stop = this.stops[i];
            this._renderer.effect.addColorStop(stop._offset, stop._color);
          }
        }
        return this.flagReset();
      }
    },
    texture: {
      render: function(ctx2, elem) {
        if (!ctx2.canvas.getContext("2d")) {
          return;
        }
        this._update();
        const image = this.image;
        if ((this._flagLoaded || this._flagImage || this._flagVideo || this._flagRepeat) && this.loaded) {
          this._renderer.effect = ctx2.createPattern(image, this._repeat);
        } else if (!this._renderer.effect) {
          return this.flagReset();
        }
        if (this._flagOffset || this._flagLoaded || this._flagScale) {
          if (!(this._renderer.offset instanceof Vector)) {
            this._renderer.offset = new Vector();
          }
          this._renderer.offset.x = -this._offset.x;
          this._renderer.offset.y = -this._offset.y;
          if (image) {
            this._renderer.offset.x += image.width / 2;
            this._renderer.offset.y += image.height / 2;
            if (this._scale instanceof Vector) {
              this._renderer.offset.x *= this._scale.x;
              this._renderer.offset.y *= this._scale.y;
            } else {
              this._renderer.offset.x *= this._scale;
              this._renderer.offset.y *= this._scale;
            }
          }
        }
        if (this._flagScale || this._flagLoaded) {
          if (!(this._renderer.scale instanceof Vector)) {
            this._renderer.scale = new Vector();
          }
          if (this._scale instanceof Vector) {
            this._renderer.scale.copy(this._scale);
          } else {
            this._renderer.scale.set(this._scale, this._scale);
          }
        }
        return this.flagReset();
      }
    },
    updateTexture: function(gl, elem) {
      this[elem._renderer.type].updateCanvas.call(webgl, elem);
      if (this.canvas.width <= 0 || this.canvas.height <= 0) {
        if (elem._renderer.texture) {
          gl.deleteTexture(elem._renderer.texture);
        }
        delete elem._renderer.texture;
        return;
      }
      if (!elem._renderer.texture) {
        elem._renderer.texture = gl.createTexture();
      }
      gl.bindTexture(gl.TEXTURE_2D, elem._renderer.texture);
      gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_S, gl.CLAMP_TO_EDGE);
      gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_T, gl.CLAMP_TO_EDGE);
      gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MIN_FILTER, gl.LINEAR);
      gl.texImage2D(gl.TEXTURE_2D, 0, gl.RGBA, gl.RGBA, gl.UNSIGNED_BYTE, this.canvas);
    },
    program: {
      create: function(gl, shaders2) {
        let program, linked, error;
        program = gl.createProgram();
        _.each(shaders2, function(s) {
          gl.attachShader(program, s);
        });
        gl.linkProgram(program);
        linked = gl.getProgramParameter(program, gl.LINK_STATUS);
        if (!linked) {
          error = gl.getProgramInfoLog(program);
          gl.deleteProgram(program);
          throw new TwoError("unable to link program: " + error);
        }
        return program;
      }
    },
    TextureRegistry: new Registry()
  };
  webgl.ctx = webgl.canvas.getContext("2d");
  var Renderer3 = class extends Events {
    constructor(params) {
      super();
      let gl, program, vs, fs;
      this.domElement = params.domElement || document.createElement("canvas");
      if (typeof params.offscreenElement !== "undefined") {
        webgl.canvas = params.offscreenElement;
        webgl.ctx = webgl.canvas.getContext("2d");
      }
      this.scene = new Group();
      this.scene.parent = this;
      this._renderer = {
        type: "renderer",
        matrix: new NumArray(identity),
        scale: 1,
        opacity: 1
      };
      this._flagMatrix = true;
      params = _.defaults(params || {}, {
        antialias: false,
        alpha: true,
        premultipliedAlpha: true,
        stencil: true,
        preserveDrawingBuffer: true,
        overdraw: false
      });
      this.overdraw = params.overdraw;
      gl = this.ctx = this.domElement.getContext("webgl", params) || this.domElement.getContext("experimental-webgl", params);
      if (!this.ctx) {
        throw new TwoError(
          "unable to create a webgl context. Try using another renderer."
        );
      }
      vs = shaders.create(gl, shaders.path.vertex, shaders.types.vertex);
      fs = shaders.create(gl, shaders.path.fragment, shaders.types.fragment);
      this.programs = {
        current: null,
        buffers: {
          position: gl.createBuffer()
        },
        resolution: {
          width: 0,
          height: 0,
          ratio: 1,
          flagged: false
        }
      };
      program = this.programs.path = webgl.program.create(gl, [vs, fs]);
      this.programs.text = this.programs.path;
      program.position = gl.getAttribLocation(program, "a_position");
      program.matrix = gl.getUniformLocation(program, "u_matrix");
      program.rect = gl.getUniformLocation(program, "u_rect");
      const positionBuffer = gl.createBuffer();
      gl.bindBuffer(gl.ARRAY_BUFFER, positionBuffer);
      gl.vertexAttribPointer(program.position, 2, gl.FLOAT, false, 0, 0);
      gl.enableVertexAttribArray(program.position);
      gl.bufferData(gl.ARRAY_BUFFER, quad, gl.STATIC_DRAW);
      vs = shaders.create(gl, shaders.points.vertex, shaders.types.vertex);
      fs = shaders.create(gl, shaders.points.fragment, shaders.types.fragment);
      program = this.programs.points = webgl.program.create(gl, [vs, fs]);
      program.position = gl.getAttribLocation(program, "a_position");
      program.matrix = gl.getUniformLocation(program, "u_matrix");
      program.size = gl.getUniformLocation(program, "u_size");
      gl.enable(gl.BLEND);
      gl.pixelStorei(gl.UNPACK_PREMULTIPLY_ALPHA_WEBGL, true);
      gl.blendEquation(gl.FUNC_ADD);
      gl.blendFunc(gl.ONE, gl.ONE_MINUS_SRC_ALPHA);
    }
    setSize(width, height, ratio) {
      let w, h;
      const ctx2 = this.ctx;
      this.width = width;
      this.height = height;
      this.ratio = typeof ratio === "undefined" ? getRatio(ctx2) : ratio;
      this.domElement.width = width * this.ratio;
      this.domElement.height = height * this.ratio;
      if (_.isObject(this.domElement.style)) {
        _.extend(this.domElement.style, {
          width: width + "px",
          height: height + "px"
        });
      }
      this._renderer.matrix[0] = this._renderer.matrix[4] = this._renderer.scale = this.ratio;
      this._flagMatrix = true;
      w = width * this.ratio;
      h = height * this.ratio;
      ctx2.viewport(0, 0, w, h);
      this.programs.resolution.width = w;
      this.programs.resolution.height = h;
      this.programs.resolution.ratio = this.ratio;
      this.programs.resolution.flagged = true;
      return this.trigger(Events.Types.resize, width, height, ratio);
    }
    render() {
      const gl = this.ctx;
      if (!this.overdraw) {
        gl.clear(gl.COLOR_BUFFER_BIT);
      }
      webgl.group.render.call(this.scene, gl, this.programs);
      this._flagMatrix = false;
      this.programs.resolution.flagged = true;
      return this;
    }
  };
  __publicField2(Renderer3, "Utils", webgl);
  var Utils = _.extend({
    Error: TwoError,
    getRatio,
    read,
    xhr
  }, _, CanvasShim, curves_exports, math_exports);
  var _Two = class {
    constructor(options) {
      __publicField2(this, "_events", new Events());
      __publicField2(this, "type", "");
      __publicField2(this, "renderer", null);
      __publicField2(this, "scene", null);
      __publicField2(this, "width", 0);
      __publicField2(this, "height", 0);
      __publicField2(this, "frameCount", 0);
      __publicField2(this, "timeDelta", 0);
      __publicField2(this, "playing", false);
      const params = _.defaults(options || {}, {
        fullscreen: false,
        fitted: false,
        width: 640,
        height: 480,
        type: _Two.Types.svg,
        autostart: false
      });
      _.each(params, function(v, k) {
        if (/fullscreen/i.test(k) || /autostart/i.test(k)) {
          return;
        }
        this[k] = v;
      }, this);
      if (_.isElement(params.domElement)) {
        const tagName = params.domElement.tagName.toLowerCase();
        if (!/^(CanvasRenderer-canvas|WebGLRenderer-canvas|SVGRenderer-svg)$/.test(this.type + "-" + tagName)) {
          this.type = _Two.Types[tagName];
        }
      }
      this.renderer = new _Two[this.type](this);
      this.setPlaying(params.autostart);
      this.frameCount = 0;
      if (params.fullscreen) {
        this.fit = fitToWindow.bind(this);
        this.fit.domElement = window;
        this.fit.attached = true;
        _.extend(document.body.style, {
          overflow: "hidden",
          margin: 0,
          padding: 0,
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          position: "fixed"
        });
        _.extend(this.renderer.domElement.style, {
          display: "block",
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          position: "fixed"
        });
        dom.bind(this.fit.domElement, "resize", this.fit);
        this.fit();
      } else if (params.fitted) {
        this.fit = fitToParent.bind(this);
        _.extend(this.renderer.domElement.style, {
          display: "block"
        });
      } else if (!_.isElement(params.domElement)) {
        this.renderer.setSize(params.width, params.height, this.ratio);
        this.width = params.width;
        this.height = params.height;
      }
      this.renderer.bind(Events.Types.resize, updateDimensions.bind(this));
      this.scene = this.renderer.scene;
      _Two.Instances.push(this);
      if (params.autostart) {
        raf.init();
      }
    }
    get _bound() {
      return this._events._bound;
    }
    set _bound(v) {
      this._events._bound = v;
    }
    addEventListener() {
      return this._events.addEventListener.apply(this, arguments);
    }
    on() {
      return this._events.addEventListener.apply(this, arguments);
    }
    bind() {
      return this._events.addEventListener.apply(this, arguments);
    }
    removeEventListener() {
      return this._events.removeEventListener.apply(this, arguments);
    }
    off() {
      return this._events.removeEventListener.apply(this, arguments);
    }
    unbind() {
      return this._events.removeEventListener.apply(this, arguments);
    }
    dispatchEvent() {
      return this._events.dispatchEvent.apply(this, arguments);
    }
    trigger() {
      return this._events.dispatchEvent.apply(this, arguments);
    }
    listen() {
      return this._events.listen.apply(this, arguments);
    }
    ignore() {
      return this._events.ignore.apply(this, arguments);
    }
    appendTo(elem) {
      elem.appendChild(this.renderer.domElement);
      if (this.fit) {
        if (this.fit.domElement !== window) {
          this.fit.domElement = elem;
          this.fit.attached = false;
        }
        this.update();
      }
      return this;
    }
    play() {
      this.playing = true;
      raf.init();
      return this.trigger(Events.Types.play);
    }
    pause() {
      this.playing = false;
      return this.trigger(Events.Types.pause);
    }
    setPlaying(p) {
      this.playing = p;
    }
    release(obj) {
      let i, v, child;
      if (!_.isObject(obj)) {
        return this.release(this.scene);
      }
      if (typeof obj.unbind === "function") {
        obj.unbind();
      }
      if (obj.vertices) {
        if (typeof obj.vertices.unbind === "function") {
          obj.vertices.unbind();
        }
        for (i = 0; i < obj.vertices.length; i++) {
          v = obj.vertices[i];
          if (typeof v.unbind === "function") {
            v.unbind();
          }
          if (v.controls) {
            if (v.controls.left && typeof v.controls.left.unbind === "function") {
              v.controls.left.unbind();
            }
            if (v.controls.right && typeof v.controls.right.unbind === "function") {
              v.controls.right.unbind();
            }
          }
        }
      }
      if (obj.children) {
        for (i = 0; i < obj.children.length; i++) {
          child = obj.children[i];
          this.release(child);
        }
        if (typeof obj.children.unbind === "function") {
          obj.children.unbind();
        }
      }
      return obj;
    }
    update() {
      const animated = !!this._lastFrame;
      const now2 = _.performance.now();
      if (animated) {
        this.timeDelta = parseFloat((now2 - this._lastFrame).toFixed(3));
      }
      this._lastFrame = now2;
      if (this.fit && this.fit.domElement && !this.fit.attached) {
        dom.bind(this.fit.domElement, "resize", this.fit);
        this.fit.attached = true;
        this.fit();
      }
      const width = this.width;
      const height = this.height;
      const renderer = this.renderer;
      if (width !== renderer.width || height !== renderer.height) {
        renderer.setSize(width, height, this.ratio);
      }
      this.trigger(Events.Types.update, this.frameCount, this.timeDelta);
      return this.render();
    }
    render() {
      this.renderer.render();
      return this.trigger(Events.Types.render, this.frameCount++);
    }
    add(objects) {
      if (!(objects instanceof Array)) {
        objects = Array.prototype.slice.call(arguments);
      }
      this.scene.add(objects);
      return this;
    }
    remove(objects) {
      if (!(objects instanceof Array)) {
        objects = Array.prototype.slice.call(arguments);
      }
      this.scene.remove(objects);
      return this;
    }
    clear() {
      this.scene.remove(this.scene.children);
      return this;
    }
    makeLine(x1, y1, x2, y2) {
      const line = new Line(x1, y1, x2, y2);
      this.scene.add(line);
      return line;
    }
    makeArrow(x1, y1, x2, y2, size) {
      const headlen = typeof size === "number" ? size : 10;
      const angle = Math.atan2(y2 - y1, x2 - x1);
      const vertices = [
        new Anchor(x1, y1, void 0, void 0, void 0, void 0, Commands.move),
        new Anchor(x2, y2, void 0, void 0, void 0, void 0, Commands.line),
        new Anchor(
          x2 - headlen * Math.cos(angle - Math.PI / 4),
          y2 - headlen * Math.sin(angle - Math.PI / 4),
          void 0,
          void 0,
          void 0,
          void 0,
          Commands.line
        ),
        new Anchor(x2, y2, void 0, void 0, void 0, void 0, Commands.move),
        new Anchor(
          x2 - headlen * Math.cos(angle + Math.PI / 4),
          y2 - headlen * Math.sin(angle + Math.PI / 4),
          void 0,
          void 0,
          void 0,
          void 0,
          Commands.line
        )
      ];
      const path2 = new Path(vertices, false, false, true);
      path2.noFill();
      path2.cap = "round";
      path2.join = "round";
      this.scene.add(path2);
      return path2;
    }
    makeRectangle(x, y, width, height) {
      const rect = new Rectangle(x, y, width, height);
      this.scene.add(rect);
      return rect;
    }
    makeRoundedRectangle(x, y, width, height, sides) {
      const rect = new RoundedRectangle(x, y, width, height, sides);
      this.scene.add(rect);
      return rect;
    }
    makeCircle(x, y, radius, resolution) {
      const circle = new Circle(x, y, radius, resolution);
      this.scene.add(circle);
      return circle;
    }
    makeEllipse(x, y, rx, ry, resolution) {
      const ellipse = new Ellipse(x, y, rx, ry, resolution);
      this.scene.add(ellipse);
      return ellipse;
    }
    makeStar(x, y, outerRadius, innerRadius, sides) {
      const star = new Star(x, y, outerRadius, innerRadius, sides);
      this.scene.add(star);
      return star;
    }
    makeCurve(points) {
      const l = arguments.length;
      if (!Array.isArray(points)) {
        points = [];
        for (let i = 0; i < l; i += 2) {
          const x = arguments[i];
          if (typeof x !== "number") {
            break;
          }
          const y = arguments[i + 1];
          points.push(new Anchor(x, y));
        }
      }
      const last = arguments[l - 1];
      const curve = new Path(points, !(typeof last === "boolean" ? last : void 0), true);
      const rect = curve.getBoundingClientRect();
      curve.center().translation.set(rect.left + rect.width / 2, rect.top + rect.height / 2);
      this.scene.add(curve);
      return curve;
    }
    makePolygon(x, y, radius, sides) {
      const poly = new Polygon(x, y, radius, sides);
      this.scene.add(poly);
      return poly;
    }
    makeArcSegment(x, y, innerRadius, outerRadius, startAngle, endAngle, resolution) {
      const arcSegment = new ArcSegment(
        x,
        y,
        innerRadius,
        outerRadius,
        startAngle,
        endAngle,
        resolution
      );
      this.scene.add(arcSegment);
      return arcSegment;
    }
    makePoints(p) {
      const l = arguments.length;
      let vertices = p;
      if (!Array.isArray(p)) {
        vertices = [];
        for (let i = 0; i < l; i += 2) {
          const x = arguments[i];
          if (typeof x !== "number") {
            break;
          }
          const y = arguments[i + 1];
          vertices.push(new Vector(x, y));
        }
      }
      const points = new Points(vertices);
      this.scene.add(points);
      return points;
    }
    makePath(p) {
      const l = arguments.length;
      let points = p;
      if (!Array.isArray(p)) {
        points = [];
        for (let i = 0; i < l; i += 2) {
          const x = arguments[i];
          if (typeof x !== "number") {
            break;
          }
          const y = arguments[i + 1];
          points.push(new Anchor(x, y));
        }
      }
      const last = arguments[l - 1];
      const path2 = new Path(points, !(typeof last === "boolean" ? last : void 0));
      const rect = path2.getBoundingClientRect();
      if (typeof rect.top === "number" && typeof rect.left === "number" && typeof rect.right === "number" && typeof rect.bottom === "number") {
        path2.center().translation.set(rect.left + rect.width / 2, rect.top + rect.height / 2);
      }
      this.scene.add(path2);
      return path2;
    }
    makeText(message, x, y, styles) {
      const text = new Text(message, x, y, styles);
      this.add(text);
      return text;
    }
    makeLinearGradient(x1, y1, x2, y2) {
      const stops = Array.prototype.slice.call(arguments, 4);
      const gradient = new LinearGradient(x1, y1, x2, y2, stops);
      this.add(gradient);
      return gradient;
    }
    makeRadialGradient(x1, y1, radius) {
      const stops = Array.prototype.slice.call(arguments, 3);
      const gradient = new RadialGradient(x1, y1, radius, stops);
      this.add(gradient);
      return gradient;
    }
    makeSprite(pathOrTexture, x, y, columns, rows, frameRate, autostart) {
      const sprite = new Sprite(pathOrTexture, x, y, columns, rows, frameRate);
      if (autostart) {
        sprite.play();
      }
      this.add(sprite);
      return sprite;
    }
    makeImageSequence(pathsOrTextures, x, y, frameRate, autostart) {
      const imageSequence = new ImageSequence(pathsOrTextures, x, y, frameRate);
      if (autostart) {
        imageSequence.play();
      }
      this.add(imageSequence);
      return imageSequence;
    }
    makeTexture(pathOrSource, callback) {
      const texture = new Texture(pathOrSource, callback);
      return texture;
    }
    makeGroup(objects) {
      if (!(objects instanceof Array)) {
        objects = Array.prototype.slice.call(arguments);
      }
      const group = new Group();
      this.scene.add(group);
      group.add(objects);
      return group;
    }
    interpret(svg2, shallow, add2) {
      const tag = svg2.tagName.toLowerCase();
      add2 = typeof add2 !== "undefined" ? add2 : true;
      if (!(tag in read)) {
        return null;
      }
      const node = read[tag].call(this, svg2);
      if (add2) {
        this.add(shallow && node instanceof Group ? node.children : node);
      } else if (node.parent) {
        node.remove();
      }
      return node;
    }
    load(pathOrSVGContent, callback) {
      const group = new Group();
      let elem, i, child;
      const attach = function(data) {
        dom.temp.innerHTML = data;
        for (i = 0; i < dom.temp.children.length; i++) {
          elem = dom.temp.children[i];
          child = this.interpret(elem, false, false);
          if (child !== null) {
            group.add(child);
          }
        }
        if (typeof callback === "function") {
          const svg2 = dom.temp.children.length <= 1 ? dom.temp.children[0] : dom.temp.children;
          callback(group, svg2);
        }
      }.bind(this);
      if (/\.svg$/i.test(pathOrSVGContent)) {
        xhr(pathOrSVGContent, attach);
        return group;
      }
      attach(pathOrSVGContent);
      return group;
    }
  };
  var Two = _Two;
  __publicField2(Two, "nextFrameID", Constants.nextFrameID);
  __publicField2(Two, "Types", Constants.Types);
  __publicField2(Two, "Version", Constants.Version);
  __publicField2(Two, "PublishDate", Constants.PublishDate);
  __publicField2(Two, "Identifier", Constants.Identifier);
  __publicField2(Two, "Resolution", Constants.Resolution);
  __publicField2(Two, "AutoCalculateImportedMatrices", Constants.AutoCalculateImportedMatrices);
  __publicField2(Two, "Instances", Constants.Instances);
  __publicField2(Two, "uniqueId", Constants.uniqueId);
  __publicField2(Two, "Anchor", Anchor);
  __publicField2(Two, "Collection", Collection);
  __publicField2(Two, "Events", Events);
  __publicField2(Two, "Group", Group);
  __publicField2(Two, "Matrix", Matrix2);
  __publicField2(Two, "Path", Path);
  __publicField2(Two, "Registry", Registry);
  __publicField2(Two, "Shape", Shape);
  __publicField2(Two, "Text", Text);
  __publicField2(Two, "Vector", Vector);
  __publicField2(Two, "Gradient", Gradient);
  __publicField2(Two, "ImageSequence", ImageSequence);
  __publicField2(Two, "LinearGradient", LinearGradient);
  __publicField2(Two, "RadialGradient", RadialGradient);
  __publicField2(Two, "Sprite", Sprite);
  __publicField2(Two, "Stop", Stop);
  __publicField2(Two, "Texture", Texture);
  __publicField2(Two, "ArcSegment", ArcSegment);
  __publicField2(Two, "Circle", Circle);
  __publicField2(Two, "Ellipse", Ellipse);
  __publicField2(Two, "Line", Line);
  __publicField2(Two, "Points", Points);
  __publicField2(Two, "Polygon", Polygon);
  __publicField2(Two, "Rectangle", Rectangle);
  __publicField2(Two, "RoundedRectangle", RoundedRectangle);
  __publicField2(Two, "Star", Star);
  __publicField2(Two, "CanvasRenderer", Renderer);
  __publicField2(Two, "SVGRenderer", Renderer2);
  __publicField2(Two, "WebGLRenderer", Renderer3);
  __publicField2(Two, "Commands", Commands);
  __publicField2(Two, "Utils", Utils);
  function fitToWindow() {
    const wr = document.body.getBoundingClientRect();
    const width = this.width = wr.width;
    const height = this.height = wr.height;
    this.renderer.setSize(width, height, this.ratio);
  }
  function fitToParent() {
    const parent = this.renderer.domElement.parentElement;
    if (!parent) {
      console.warn("Two.js: Attempting to fit to parent, but no parent found.");
      return;
    }
    const wr = parent.getBoundingClientRect();
    const width = this.width = wr.width;
    const height = this.height = wr.height;
    this.renderer.setSize(width, height, this.ratio);
  }
  function updateDimensions(width, height) {
    this.width = width;
    this.height = height;
    this.trigger(Events.Types.resize, width, height);
  }
  var raf = dom.getRequestAnimationFrame();
  function loop() {
    for (let i = 0; i < Two.Instances.length; i++) {
      const t = Two.Instances[i];
      if (t.playing) {
        t.update();
      }
    }
    Two.nextFrameID = raf(loop);
  }
  raf.init = function() {
    loop();
    raf.init = function() {
    };
  };

  // node_modules/@tweenjs/tween.js/dist/tween.esm.js
  var Easing = Object.freeze({
    Linear: Object.freeze({
      None: function(amount2) {
        return amount2;
      },
      In: function(amount2) {
        return this.None(amount2);
      },
      Out: function(amount2) {
        return this.None(amount2);
      },
      InOut: function(amount2) {
        return this.None(amount2);
      }
    }),
    Quadratic: Object.freeze({
      In: function(amount2) {
        return amount2 * amount2;
      },
      Out: function(amount2) {
        return amount2 * (2 - amount2);
      },
      InOut: function(amount2) {
        if ((amount2 *= 2) < 1) {
          return 0.5 * amount2 * amount2;
        }
        return -0.5 * (--amount2 * (amount2 - 2) - 1);
      }
    }),
    Cubic: Object.freeze({
      In: function(amount2) {
        return amount2 * amount2 * amount2;
      },
      Out: function(amount2) {
        return --amount2 * amount2 * amount2 + 1;
      },
      InOut: function(amount2) {
        if ((amount2 *= 2) < 1) {
          return 0.5 * amount2 * amount2 * amount2;
        }
        return 0.5 * ((amount2 -= 2) * amount2 * amount2 + 2);
      }
    }),
    Quartic: Object.freeze({
      In: function(amount2) {
        return amount2 * amount2 * amount2 * amount2;
      },
      Out: function(amount2) {
        return 1 - --amount2 * amount2 * amount2 * amount2;
      },
      InOut: function(amount2) {
        if ((amount2 *= 2) < 1) {
          return 0.5 * amount2 * amount2 * amount2 * amount2;
        }
        return -0.5 * ((amount2 -= 2) * amount2 * amount2 * amount2 - 2);
      }
    }),
    Quintic: Object.freeze({
      In: function(amount2) {
        return amount2 * amount2 * amount2 * amount2 * amount2;
      },
      Out: function(amount2) {
        return --amount2 * amount2 * amount2 * amount2 * amount2 + 1;
      },
      InOut: function(amount2) {
        if ((amount2 *= 2) < 1) {
          return 0.5 * amount2 * amount2 * amount2 * amount2 * amount2;
        }
        return 0.5 * ((amount2 -= 2) * amount2 * amount2 * amount2 * amount2 + 2);
      }
    }),
    Sinusoidal: Object.freeze({
      In: function(amount2) {
        return 1 - Math.sin((1 - amount2) * Math.PI / 2);
      },
      Out: function(amount2) {
        return Math.sin(amount2 * Math.PI / 2);
      },
      InOut: function(amount2) {
        return 0.5 * (1 - Math.sin(Math.PI * (0.5 - amount2)));
      }
    }),
    Exponential: Object.freeze({
      In: function(amount2) {
        return amount2 === 0 ? 0 : Math.pow(1024, amount2 - 1);
      },
      Out: function(amount2) {
        return amount2 === 1 ? 1 : 1 - Math.pow(2, -10 * amount2);
      },
      InOut: function(amount2) {
        if (amount2 === 0) {
          return 0;
        }
        if (amount2 === 1) {
          return 1;
        }
        if ((amount2 *= 2) < 1) {
          return 0.5 * Math.pow(1024, amount2 - 1);
        }
        return 0.5 * (-Math.pow(2, -10 * (amount2 - 1)) + 2);
      }
    }),
    Circular: Object.freeze({
      In: function(amount2) {
        return 1 - Math.sqrt(1 - amount2 * amount2);
      },
      Out: function(amount2) {
        return Math.sqrt(1 - --amount2 * amount2);
      },
      InOut: function(amount2) {
        if ((amount2 *= 2) < 1) {
          return -0.5 * (Math.sqrt(1 - amount2 * amount2) - 1);
        }
        return 0.5 * (Math.sqrt(1 - (amount2 -= 2) * amount2) + 1);
      }
    }),
    Elastic: Object.freeze({
      In: function(amount2) {
        if (amount2 === 0) {
          return 0;
        }
        if (amount2 === 1) {
          return 1;
        }
        return -Math.pow(2, 10 * (amount2 - 1)) * Math.sin((amount2 - 1.1) * 5 * Math.PI);
      },
      Out: function(amount2) {
        if (amount2 === 0) {
          return 0;
        }
        if (amount2 === 1) {
          return 1;
        }
        return Math.pow(2, -10 * amount2) * Math.sin((amount2 - 0.1) * 5 * Math.PI) + 1;
      },
      InOut: function(amount2) {
        if (amount2 === 0) {
          return 0;
        }
        if (amount2 === 1) {
          return 1;
        }
        amount2 *= 2;
        if (amount2 < 1) {
          return -0.5 * Math.pow(2, 10 * (amount2 - 1)) * Math.sin((amount2 - 1.1) * 5 * Math.PI);
        }
        return 0.5 * Math.pow(2, -10 * (amount2 - 1)) * Math.sin((amount2 - 1.1) * 5 * Math.PI) + 1;
      }
    }),
    Back: Object.freeze({
      In: function(amount2) {
        var s = 1.70158;
        return amount2 === 1 ? 1 : amount2 * amount2 * ((s + 1) * amount2 - s);
      },
      Out: function(amount2) {
        var s = 1.70158;
        return amount2 === 0 ? 0 : --amount2 * amount2 * ((s + 1) * amount2 + s) + 1;
      },
      InOut: function(amount2) {
        var s = 1.70158 * 1.525;
        if ((amount2 *= 2) < 1) {
          return 0.5 * (amount2 * amount2 * ((s + 1) * amount2 - s));
        }
        return 0.5 * ((amount2 -= 2) * amount2 * ((s + 1) * amount2 + s) + 2);
      }
    }),
    Bounce: Object.freeze({
      In: function(amount2) {
        return 1 - Easing.Bounce.Out(1 - amount2);
      },
      Out: function(amount2) {
        if (amount2 < 1 / 2.75) {
          return 7.5625 * amount2 * amount2;
        } else if (amount2 < 2 / 2.75) {
          return 7.5625 * (amount2 -= 1.5 / 2.75) * amount2 + 0.75;
        } else if (amount2 < 2.5 / 2.75) {
          return 7.5625 * (amount2 -= 2.25 / 2.75) * amount2 + 0.9375;
        } else {
          return 7.5625 * (amount2 -= 2.625 / 2.75) * amount2 + 0.984375;
        }
      },
      InOut: function(amount2) {
        if (amount2 < 0.5) {
          return Easing.Bounce.In(amount2 * 2) * 0.5;
        }
        return Easing.Bounce.Out(amount2 * 2 - 1) * 0.5 + 0.5;
      }
    }),
    generatePow: function(power) {
      if (power === void 0) {
        power = 4;
      }
      power = power < Number.EPSILON ? Number.EPSILON : power;
      power = power > 1e4 ? 1e4 : power;
      return {
        In: function(amount2) {
          return Math.pow(amount2, power);
        },
        Out: function(amount2) {
          return 1 - Math.pow(1 - amount2, power);
        },
        InOut: function(amount2) {
          if (amount2 < 0.5) {
            return Math.pow(amount2 * 2, power) / 2;
          }
          return (1 - Math.pow(2 - amount2 * 2, power)) / 2 + 0.5;
        }
      };
    }
  });
  var now = function() {
    return performance.now();
  };
  var Group2 = function() {
    function Group3() {
      this._tweens = {};
      this._tweensAddedDuringUpdate = {};
    }
    Group3.prototype.getAll = function() {
      var _this = this;
      return Object.keys(this._tweens).map(function(tweenId) {
        return _this._tweens[tweenId];
      });
    };
    Group3.prototype.removeAll = function() {
      this._tweens = {};
    };
    Group3.prototype.add = function(tween2) {
      this._tweens[tween2.getId()] = tween2;
      this._tweensAddedDuringUpdate[tween2.getId()] = tween2;
    };
    Group3.prototype.remove = function(tween2) {
      delete this._tweens[tween2.getId()];
      delete this._tweensAddedDuringUpdate[tween2.getId()];
    };
    Group3.prototype.update = function(time, preserve) {
      if (time === void 0) {
        time = now();
      }
      if (preserve === void 0) {
        preserve = false;
      }
      var tweenIds = Object.keys(this._tweens);
      if (tweenIds.length === 0) {
        return false;
      }
      while (tweenIds.length > 0) {
        this._tweensAddedDuringUpdate = {};
        for (var i = 0; i < tweenIds.length; i++) {
          var tween2 = this._tweens[tweenIds[i]];
          var autoStart = !preserve;
          if (tween2 && tween2.update(time, autoStart) === false && !preserve) {
            delete this._tweens[tweenIds[i]];
          }
        }
        tweenIds = Object.keys(this._tweensAddedDuringUpdate);
      }
      return true;
    };
    return Group3;
  }();
  var Interpolation = {
    Linear: function(v, k) {
      var m = v.length - 1;
      var f = m * k;
      var i = Math.floor(f);
      var fn = Interpolation.Utils.Linear;
      if (k < 0) {
        return fn(v[0], v[1], f);
      }
      if (k > 1) {
        return fn(v[m], v[m - 1], m - f);
      }
      return fn(v[i], v[i + 1 > m ? m : i + 1], f - i);
    },
    Bezier: function(v, k) {
      var b = 0;
      var n = v.length - 1;
      var pw = Math.pow;
      var bn = Interpolation.Utils.Bernstein;
      for (var i = 0; i <= n; i++) {
        b += pw(1 - k, n - i) * pw(k, i) * v[i] * bn(n, i);
      }
      return b;
    },
    CatmullRom: function(v, k) {
      var m = v.length - 1;
      var f = m * k;
      var i = Math.floor(f);
      var fn = Interpolation.Utils.CatmullRom;
      if (v[0] === v[m]) {
        if (k < 0) {
          i = Math.floor(f = m * (1 + k));
        }
        return fn(v[(i - 1 + m) % m], v[i], v[(i + 1) % m], v[(i + 2) % m], f - i);
      } else {
        if (k < 0) {
          return v[0] - (fn(v[0], v[0], v[1], v[1], -f) - v[0]);
        }
        if (k > 1) {
          return v[m] - (fn(v[m], v[m], v[m - 1], v[m - 1], f - m) - v[m]);
        }
        return fn(v[i ? i - 1 : 0], v[i], v[m < i + 1 ? m : i + 1], v[m < i + 2 ? m : i + 2], f - i);
      }
    },
    Utils: {
      Linear: function(p0, p1, t) {
        return (p1 - p0) * t + p0;
      },
      Bernstein: function(n, i) {
        var fc = Interpolation.Utils.Factorial;
        return fc(n) / fc(i) / fc(n - i);
      },
      Factorial: function() {
        var a = [1];
        return function(n) {
          var s = 1;
          if (a[n]) {
            return a[n];
          }
          for (var i = n; i > 1; i--) {
            s *= i;
          }
          a[n] = s;
          return s;
        };
      }(),
      CatmullRom: function(p0, p1, p2, p3, t) {
        var v0 = (p2 - p0) * 0.5;
        var v1 = (p3 - p1) * 0.5;
        var t2 = t * t;
        var t3 = t * t2;
        return (2 * p1 - 2 * p2 + v0 + v1) * t3 + (-3 * p1 + 3 * p2 - 2 * v0 - v1) * t2 + v0 * t + p1;
      }
    }
  };
  var Sequence = function() {
    function Sequence2() {
    }
    Sequence2.nextId = function() {
      return Sequence2._nextId++;
    };
    Sequence2._nextId = 0;
    return Sequence2;
  }();
  var mainGroup = new Group2();
  var Tween = function() {
    function Tween2(_object, _group) {
      if (_group === void 0) {
        _group = mainGroup;
      }
      this._object = _object;
      this._group = _group;
      this._isPaused = false;
      this._pauseStart = 0;
      this._valuesStart = {};
      this._valuesEnd = {};
      this._valuesStartRepeat = {};
      this._duration = 1e3;
      this._isDynamic = false;
      this._initialRepeat = 0;
      this._repeat = 0;
      this._yoyo = false;
      this._isPlaying = false;
      this._reversed = false;
      this._delayTime = 0;
      this._startTime = 0;
      this._easingFunction = Easing.Linear.None;
      this._interpolationFunction = Interpolation.Linear;
      this._chainedTweens = [];
      this._onStartCallbackFired = false;
      this._onEveryStartCallbackFired = false;
      this._id = Sequence.nextId();
      this._isChainStopped = false;
      this._propertiesAreSetUp = false;
      this._goToEnd = false;
    }
    Tween2.prototype.getId = function() {
      return this._id;
    };
    Tween2.prototype.isPlaying = function() {
      return this._isPlaying;
    };
    Tween2.prototype.isPaused = function() {
      return this._isPaused;
    };
    Tween2.prototype.to = function(target, duration) {
      if (duration === void 0) {
        duration = 1e3;
      }
      if (this._isPlaying)
        throw new Error("Can not call Tween.to() while Tween is already started or paused. Stop the Tween first.");
      this._valuesEnd = target;
      this._propertiesAreSetUp = false;
      this._duration = duration;
      return this;
    };
    Tween2.prototype.duration = function(duration) {
      if (duration === void 0) {
        duration = 1e3;
      }
      this._duration = duration;
      return this;
    };
    Tween2.prototype.dynamic = function(dynamic) {
      if (dynamic === void 0) {
        dynamic = false;
      }
      this._isDynamic = dynamic;
      return this;
    };
    Tween2.prototype.start = function(time, overrideStartingValues) {
      if (time === void 0) {
        time = now();
      }
      if (overrideStartingValues === void 0) {
        overrideStartingValues = false;
      }
      if (this._isPlaying) {
        return this;
      }
      this._group && this._group.add(this);
      this._repeat = this._initialRepeat;
      if (this._reversed) {
        this._reversed = false;
        for (var property in this._valuesStartRepeat) {
          this._swapEndStartRepeatValues(property);
          this._valuesStart[property] = this._valuesStartRepeat[property];
        }
      }
      this._isPlaying = true;
      this._isPaused = false;
      this._onStartCallbackFired = false;
      this._onEveryStartCallbackFired = false;
      this._isChainStopped = false;
      this._startTime = time;
      this._startTime += this._delayTime;
      if (!this._propertiesAreSetUp || overrideStartingValues) {
        this._propertiesAreSetUp = true;
        if (!this._isDynamic) {
          var tmp = {};
          for (var prop in this._valuesEnd)
            tmp[prop] = this._valuesEnd[prop];
          this._valuesEnd = tmp;
        }
        this._setupProperties(this._object, this._valuesStart, this._valuesEnd, this._valuesStartRepeat, overrideStartingValues);
      }
      return this;
    };
    Tween2.prototype.startFromCurrentValues = function(time) {
      return this.start(time, true);
    };
    Tween2.prototype._setupProperties = function(_object, _valuesStart, _valuesEnd, _valuesStartRepeat, overrideStartingValues) {
      for (var property in _valuesEnd) {
        var startValue = _object[property];
        var startValueIsArray = Array.isArray(startValue);
        var propType = startValueIsArray ? "array" : typeof startValue;
        var isInterpolationList = !startValueIsArray && Array.isArray(_valuesEnd[property]);
        if (propType === "undefined" || propType === "function") {
          continue;
        }
        if (isInterpolationList) {
          var endValues = _valuesEnd[property];
          if (endValues.length === 0) {
            continue;
          }
          var temp2 = [startValue];
          for (var i = 0, l = endValues.length; i < l; i += 1) {
            var value = this._handleRelativeValue(startValue, endValues[i]);
            if (isNaN(value)) {
              isInterpolationList = false;
              console.warn("Found invalid interpolation list. Skipping.");
              break;
            }
            temp2.push(value);
          }
          if (isInterpolationList) {
            _valuesEnd[property] = temp2;
          }
        }
        if ((propType === "object" || startValueIsArray) && startValue && !isInterpolationList) {
          _valuesStart[property] = startValueIsArray ? [] : {};
          var nestedObject = startValue;
          for (var prop in nestedObject) {
            _valuesStart[property][prop] = nestedObject[prop];
          }
          _valuesStartRepeat[property] = startValueIsArray ? [] : {};
          var endValues = _valuesEnd[property];
          if (!this._isDynamic) {
            var tmp = {};
            for (var prop in endValues)
              tmp[prop] = endValues[prop];
            _valuesEnd[property] = endValues = tmp;
          }
          this._setupProperties(nestedObject, _valuesStart[property], endValues, _valuesStartRepeat[property], overrideStartingValues);
        } else {
          if (typeof _valuesStart[property] === "undefined" || overrideStartingValues) {
            _valuesStart[property] = startValue;
          }
          if (!startValueIsArray) {
            _valuesStart[property] *= 1;
          }
          if (isInterpolationList) {
            _valuesStartRepeat[property] = _valuesEnd[property].slice().reverse();
          } else {
            _valuesStartRepeat[property] = _valuesStart[property] || 0;
          }
        }
      }
    };
    Tween2.prototype.stop = function() {
      if (!this._isChainStopped) {
        this._isChainStopped = true;
        this.stopChainedTweens();
      }
      if (!this._isPlaying) {
        return this;
      }
      this._group && this._group.remove(this);
      this._isPlaying = false;
      this._isPaused = false;
      if (this._onStopCallback) {
        this._onStopCallback(this._object);
      }
      return this;
    };
    Tween2.prototype.end = function() {
      this._goToEnd = true;
      this.update(Infinity);
      return this;
    };
    Tween2.prototype.pause = function(time) {
      if (time === void 0) {
        time = now();
      }
      if (this._isPaused || !this._isPlaying) {
        return this;
      }
      this._isPaused = true;
      this._pauseStart = time;
      this._group && this._group.remove(this);
      return this;
    };
    Tween2.prototype.resume = function(time) {
      if (time === void 0) {
        time = now();
      }
      if (!this._isPaused || !this._isPlaying) {
        return this;
      }
      this._isPaused = false;
      this._startTime += time - this._pauseStart;
      this._pauseStart = 0;
      this._group && this._group.add(this);
      return this;
    };
    Tween2.prototype.stopChainedTweens = function() {
      for (var i = 0, numChainedTweens = this._chainedTweens.length; i < numChainedTweens; i++) {
        this._chainedTweens[i].stop();
      }
      return this;
    };
    Tween2.prototype.group = function(group) {
      if (group === void 0) {
        group = mainGroup;
      }
      this._group = group;
      return this;
    };
    Tween2.prototype.delay = function(amount2) {
      if (amount2 === void 0) {
        amount2 = 0;
      }
      this._delayTime = amount2;
      return this;
    };
    Tween2.prototype.repeat = function(times) {
      if (times === void 0) {
        times = 0;
      }
      this._initialRepeat = times;
      this._repeat = times;
      return this;
    };
    Tween2.prototype.repeatDelay = function(amount2) {
      this._repeatDelayTime = amount2;
      return this;
    };
    Tween2.prototype.yoyo = function(yoyo) {
      if (yoyo === void 0) {
        yoyo = false;
      }
      this._yoyo = yoyo;
      return this;
    };
    Tween2.prototype.easing = function(easingFunction) {
      if (easingFunction === void 0) {
        easingFunction = Easing.Linear.None;
      }
      this._easingFunction = easingFunction;
      return this;
    };
    Tween2.prototype.interpolation = function(interpolationFunction) {
      if (interpolationFunction === void 0) {
        interpolationFunction = Interpolation.Linear;
      }
      this._interpolationFunction = interpolationFunction;
      return this;
    };
    Tween2.prototype.chain = function() {
      var tweens = [];
      for (var _i = 0; _i < arguments.length; _i++) {
        tweens[_i] = arguments[_i];
      }
      this._chainedTweens = tweens;
      return this;
    };
    Tween2.prototype.onStart = function(callback) {
      this._onStartCallback = callback;
      return this;
    };
    Tween2.prototype.onEveryStart = function(callback) {
      this._onEveryStartCallback = callback;
      return this;
    };
    Tween2.prototype.onUpdate = function(callback) {
      this._onUpdateCallback = callback;
      return this;
    };
    Tween2.prototype.onRepeat = function(callback) {
      this._onRepeatCallback = callback;
      return this;
    };
    Tween2.prototype.onComplete = function(callback) {
      this._onCompleteCallback = callback;
      return this;
    };
    Tween2.prototype.onStop = function(callback) {
      this._onStopCallback = callback;
      return this;
    };
    Tween2.prototype.update = function(time, autoStart) {
      if (time === void 0) {
        time = now();
      }
      if (autoStart === void 0) {
        autoStart = true;
      }
      if (this._isPaused)
        return true;
      var property;
      var elapsed;
      var endTime = this._startTime + this._duration;
      if (!this._goToEnd && !this._isPlaying) {
        if (time > endTime)
          return false;
        if (autoStart)
          this.start(time, true);
      }
      this._goToEnd = false;
      if (time < this._startTime) {
        return true;
      }
      if (this._onStartCallbackFired === false) {
        if (this._onStartCallback) {
          this._onStartCallback(this._object);
        }
        this._onStartCallbackFired = true;
      }
      if (this._onEveryStartCallbackFired === false) {
        if (this._onEveryStartCallback) {
          this._onEveryStartCallback(this._object);
        }
        this._onEveryStartCallbackFired = true;
      }
      elapsed = (time - this._startTime) / this._duration;
      elapsed = this._duration === 0 || elapsed > 1 ? 1 : elapsed;
      var value = this._easingFunction(elapsed);
      this._updateProperties(this._object, this._valuesStart, this._valuesEnd, value);
      if (this._onUpdateCallback) {
        this._onUpdateCallback(this._object, elapsed);
      }
      if (elapsed === 1) {
        if (this._repeat > 0) {
          if (isFinite(this._repeat)) {
            this._repeat--;
          }
          for (property in this._valuesStartRepeat) {
            if (!this._yoyo && typeof this._valuesEnd[property] === "string") {
              this._valuesStartRepeat[property] = this._valuesStartRepeat[property] + parseFloat(this._valuesEnd[property]);
            }
            if (this._yoyo) {
              this._swapEndStartRepeatValues(property);
            }
            this._valuesStart[property] = this._valuesStartRepeat[property];
          }
          if (this._yoyo) {
            this._reversed = !this._reversed;
          }
          if (this._repeatDelayTime !== void 0) {
            this._startTime = time + this._repeatDelayTime;
          } else {
            this._startTime = time + this._delayTime;
          }
          if (this._onRepeatCallback) {
            this._onRepeatCallback(this._object);
          }
          this._onEveryStartCallbackFired = false;
          return true;
        } else {
          if (this._onCompleteCallback) {
            this._onCompleteCallback(this._object);
          }
          for (var i = 0, numChainedTweens = this._chainedTweens.length; i < numChainedTweens; i++) {
            this._chainedTweens[i].start(this._startTime + this._duration, false);
          }
          this._isPlaying = false;
          return false;
        }
      }
      return true;
    };
    Tween2.prototype._updateProperties = function(_object, _valuesStart, _valuesEnd, value) {
      for (var property in _valuesEnd) {
        if (_valuesStart[property] === void 0) {
          continue;
        }
        var start = _valuesStart[property] || 0;
        var end = _valuesEnd[property];
        var startIsArray = Array.isArray(_object[property]);
        var endIsArray = Array.isArray(end);
        var isInterpolationList = !startIsArray && endIsArray;
        if (isInterpolationList) {
          _object[property] = this._interpolationFunction(end, value);
        } else if (typeof end === "object" && end) {
          this._updateProperties(_object[property], start, end, value);
        } else {
          end = this._handleRelativeValue(start, end);
          if (typeof end === "number") {
            _object[property] = start + (end - start) * value;
          }
        }
      }
    };
    Tween2.prototype._handleRelativeValue = function(start, end) {
      if (typeof end !== "string") {
        return end;
      }
      if (end.charAt(0) === "+" || end.charAt(0) === "-") {
        return start + parseFloat(end);
      }
      return parseFloat(end);
    };
    Tween2.prototype._swapEndStartRepeatValues = function(property) {
      var tmp = this._valuesStartRepeat[property];
      var endValue = this._valuesEnd[property];
      if (typeof endValue === "string") {
        this._valuesStartRepeat[property] = this._valuesStartRepeat[property] + parseFloat(endValue);
      } else {
        this._valuesStartRepeat[property] = this._valuesEnd[property];
      }
      this._valuesEnd[property] = tmp;
    };
    return Tween2;
  }();
  var nextId = Sequence.nextId;
  var TWEEN = mainGroup;
  var getAll = TWEEN.getAll.bind(TWEEN);
  var removeAll = TWEEN.removeAll.bind(TWEEN);
  var add = TWEEN.add.bind(TWEEN);
  var remove = TWEEN.remove.bind(TWEEN);
  var update = TWEEN.update.bind(TWEEN);

  // src/common.js
  var two = new Two({
    type: Two.Types.canvas,
    fullscreen: true
  });
  two.renderer.domElement.id = "stage";
  var TWO_PI2 = Math.PI * 2;
  var drag = 0.125;
  var mouse = new Two.Vector();
  var container = document.querySelector("#container");
  var isLocal = url.boolean("local") || window.location.href.match(/localhost/i);
  var path = isLocal ? "assets/" : "//storage.googleapis.com/cdn.patatap.com/";

  // src/animations/palette.js
  var keys = ["background", "middleground", "foreground", "highlight", "accent", "white", "black"];
  var palette = [
    {
      background: { r: 181, g: 181, b: 181 },
      middleground: { r: 141, g: 164, b: 170 },
      foreground: { r: 227, g: 79, b: 12 },
      highlight: { r: 163, g: 141, b: 116 },
      accent: { r: 255, g: 197, b: 215 },
      white: { r: 255, g: 255, b: 255 },
      black: { r: 0, g: 0, b: 0 },
      isDark: false
    },
    {
      background: { r: 255, g: 230, b: 255 },
      middleground: { r: 151, g: 41, b: 164 },
      foreground: { r: 1, g: 120, b: 186 },
      highlight: { r: 255, g: 255, b: 0 },
      accent: { r: 255, g: 51, b: 148 },
      white: { r: 255, g: 255, b: 255 },
      black: { r: 255, g: 255, b: 255 },
      isDark: false
    },
    {
      background: { r: 217, g: 82, b: 31 },
      middleground: { r: 143, g: 74, b: 45 },
      foreground: { r: 255, g: 108, b: 87 },
      highlight: { r: 255, g: 126, b: 138 },
      accent: { r: 227, g: 190, b: 141 },
      white: { r: 255, g: 255, b: 255 },
      black: { r: 0, g: 0, b: 0 },
      isDark: false
    },
    {
      background: { r: 57, g: 109, b: 193 },
      middleground: { r: 186, g: 60, b: 223 },
      foreground: { r: 213, g: 255, b: 93 },
      highlight: { r: 213, g: 160, b: 255 },
      accent: { r: 36, g: 221, b: 165 },
      white: { r: 215, g: 236, b: 255 },
      black: { r: 0, g: 0, b: 0 },
      isDark: true
    },
    {
      background: { r: 255, g: 244, b: 211 },
      middleground: { r: 207, g: 145, b: 79 },
      foreground: { r: 38, g: 83, b: 122 },
      highlight: { r: 178, g: 87, b: 53 },
      accent: { r: 235, g: 192, b: 92 },
      white: { r: 226, g: 82, b: 87 },
      black: { r: 0, g: 0, b: 0 },
      isDark: false
    },
    {
      background: { r: 39, g: 6, b: 54 },
      middleground: { r: 69, g: 26, b: 87 },
      foreground: { r: 252, g: 25, b: 246 },
      highlight: { r: 52, g: 255, b: 253 },
      accent: { r: 133, g: 102, b: 193 },
      white: { r: 253, g: 228, b: 252 },
      black: { r: 255, g: 255, b: 255 },
      isDark: true
    }
  ];
  var current = url.int("palette", 0);
  var changing = false;
  var _onStart;
  var _onUpdate;
  var _onComplete;
  var _colors = {};
  var colors = {};
  keys.forEach((key) => {
    _colors[key] = { r: 0, g: 0, b: 0 };
    colors[key] = { r: 0, g: 0, b: 0 };
  });
  set(palette[current]);
  function getRandomKey() {
    return keys[Math.floor(Math.random() * keys.length)];
  }
  function get() {
    return palette[current];
  }
  function set(palette2) {
    amount = 0;
    for (let k in _colors) {
      const prev = _colors[k];
      const dest = palette2[k];
      prev.r = dest.r;
      prev.g = dest.g;
      prev.b = dest.b;
      amount++;
      colors[k] = toRGB(prev);
    }
    return amount;
  }
  function tween(palette2) {
    let amount2 = 0;
    for (let k in _colors) {
      const prev = _colors[k];
      const dest = palette2[k];
      if (equals(prev, dest)) {
        amount2++;
      }
      prev.r = ease(prev.r, dest.r, drag);
      prev.g = ease(prev.g, dest.g, drag);
      prev.b = ease(prev.b, dest.b, drag);
      colors[k] = toRGB(prev);
    }
    return amount2;
  }
  function ease(cur, dest, t) {
    const d = dest - cur;
    if (Math.abs(d) <= 1e-4) {
      return dest;
    } else {
      return cur + d * t;
    }
  }
  function equals(c1, c2, t) {
    const threshold = t || 0.25;
    return Math.abs(c1.r - c2.r) < threshold && Math.abs(c1.g - c2.g) < threshold && Math.abs(c1.b - c2.b) < threshold;
  }
  function toRGB({ r, g, b }) {
    return `rgb(${Math.round(r)},${Math.round(g)},${Math.round(b)})`;
  }
  function onStart(func) {
    _onStart = func;
  }
  function onUpdate(func) {
    _onUpdate = func;
  }
  function onComplete(func) {
    _onComplete = func;
  }
  function update2() {
    if (!changing) {
      return;
    }
    const amount2 = tween(palette[current]);
    if (_onUpdate) {
      _onUpdate();
    }
    if (amount2 >= keys.length) {
      if (changing) {
        changing = false;
        if (_onComplete) {
          _onComplete(current);
        }
      }
    }
  }
  var palette_default = {
    keys,
    list: palette,
    colors,
    get current() {
      return current;
    },
    set current(v) {
      current = v % palette.length;
      changing = true;
      if (_onStart) {
        _onStart(current);
      }
    },
    get changing() {
      return changing;
    },
    equals,
    getRandomKey,
    get,
    onStart,
    onUpdate,
    onComplete,
    set,
    tween,
    update: update2
  };

  // src/animations/index.js
  var import_jquery = __toESM(require_jquery());

  // src/sound.js
  var identity2 = function(v) {
    return v;
  };
  var has;
  try {
    has = !!AudioContext;
  } catch (e) {
    has = false;
  }
  function load({ context, uri, callback }) {
    return new Promise(function(resolve, reject) {
      var r = new XMLHttpRequest();
      r.open("GET", uri, true);
      r.responseType = "arraybuffer";
      r.onerror = reject;
      r.onload = function() {
        resolve({
          context,
          data: r.response,
          callback
        });
      };
      r.send();
    });
  }
  function decode({ context, data, callback }) {
    return new Promise(function(resolve, reject) {
      var success = function(buffer) {
        resolve(buffer, data);
        if (callback) {
          callback(buffer, data);
        }
      };
      context.decodeAudioData(data, success, reject);
    });
  }
  var _loop, _volume, _speed, _startTime, _offset, _ended, ended_fn;
  var Sound = class {
    constructor(context, uri, callback) {
      __privateAdd(this, _ended);
      __privateAdd(this, _loop, false);
      __privateAdd(this, _volume, 1);
      __privateAdd(this, _speed, 1);
      __privateAdd(this, _startTime, 0);
      __privateAdd(this, _offset, 0);
      __publicField(this, "playing", false);
      __publicField(this, "filter", null);
      __publicField(this, "buffer", null);
      __publicField(this, "data", null);
      __publicField(this, "gain", null);
      __publicField(this, "src", null);
      __publicField(this, "ctx", null);
      var scope = this;
      this.ctx = context;
      switch (typeof uri) {
        case "string":
          this.src = uri;
          load({ context, uri, callback: assignBuffer }).then(decode);
          break;
        case "object":
          decode({
            context,
            data: uri,
            callback: assignBuffer
          });
          break;
      }
      function assignBuffer(buffer, data) {
        scope.buffer = buffer;
        scope.data = data;
        scope.gain = scope.filter = context.createGain();
        scope.gain.connect(context.destination);
        scope.gain.gain.value = Math.max(Math.min(__privateGet(scope, _volume), 1), 0);
        if (callback) {
          callback(this);
        }
      }
    }
    applyFilter(node) {
      if (this.filter && this.filter !== this.gain) {
        this.filter.disconnect(this.gain);
      }
      this.filter = node;
      this.filter.connect(this.gain);
      return this;
    }
    play(options) {
      var params = defaults(options || {}, {
        time: this.ctx.currentTime,
        loop: this._loop,
        offset: this._offset,
        duration: this.buffer.duration - this._offset
      });
      if (this.ctx && /suspended/i.test(this.ctx.state)) {
        this.ctx.resume();
      }
      if (this.source) {
        this.stop();
      }
      __privateSet(this, _startTime, params.time);
      __privateSet(this, _loop, params.loop);
      this.playing = true;
      this.source = this.ctx.createBufferSource();
      this.source.onended = __privateMethod(this, _ended, ended_fn);
      this.source.buffer = this.buffer;
      this.source.loop = params.loop;
      this.source.playbackRate.value = __privateGet(this, _speed);
      this.source.connect(this.filter);
      if (this.source.start) {
        this.source.start(params.time, params.offset);
      } else if (this.source.noteOn) {
        this.source.noteOn(params.time, params.offset);
      }
      return this;
    }
    pause(options) {
      if (!this.source || !this.playing) {
        return this;
      }
      var params = defaults(options || {}, {
        time: this.ctx.currentTime
      });
      this.source.onended = identity2;
      if (this.source.stop) {
        this.source.stop(params.time);
      } else if (this.source.noteOff) {
        this.source.noteOff(params.time);
      }
      this.playing = false;
      var currentTime = this.ctx.currentTime;
      if (params.time != "undefined") {
        currentTime = params.time;
      }
      __privateSet(this, _offset, currentTime - __privateGet(this, _startTime) + (__privateGet(this, _offset) || 0));
      if (__privateGet(this, _loop)) {
        __privateSet(this, _offset, Math.max(__privateGet(this, _offset), 0) % this.buffer.duration);
      } else {
        __privateSet(this, _offset, Math.min(Math.max(__privateGet(this, _offset), 0), this.buffer.duration));
      }
      return this;
    }
    stop(options) {
      if (!this.source || !this.playing) {
        return this;
      }
      var params = defaults(options || {}, {
        time: this.ctx.currentTime
      });
      this.source.onended = identity2;
      if (this.source.stop) {
        this.source.stop(params.time);
      } else if (this.source.noteOff) {
        this.source.noteOff(params.time);
      }
      this.playing = false;
      __privateSet(this, _offset, 0);
      return this;
    }
    get volume() {
      return __privateGet(this, _volume);
    }
    set volume(v) {
      __privateSet(this, _volume, v);
      if (this.gain) {
        this.gain.gain.value = Math.max(Math.min(__privateGet(this, _volume), 1), 0);
      }
    }
    get speed() {
      return __privateGet(this, _speed);
    }
    set speed(s) {
      __privateSet(this, _speed, s);
      if (this.playing) {
        this.play();
      }
    }
    get currentTime() {
      return this.playing ? (this.ctx.currentTime - __privateGet(this, _startTime) + __privateGet(this, _offset)) * __privateGet(this, _speed) : __privateGet(this, _offset);
    }
    set currentTime(t) {
      var time;
      if (!this.buffer) {
        return;
      }
      if (__privateGet(this, _loop)) {
        time = Math.max(t, 0) % this.buffer.duration;
      } else {
        time = Math.min(Math.max(t, 0), this.buffer.duration);
      }
      __privateSet(this, _offset, time);
      if (this.playing) {
        this.play();
      }
    }
    get millis() {
      return Math.floor(this.currentTime * 1e3);
    }
    get duration() {
      if (!this.buffer) {
        return 0;
      }
      return this.buffer.duration;
    }
  };
  _loop = new WeakMap();
  _volume = new WeakMap();
  _speed = new WeakMap();
  _startTime = new WeakMap();
  _offset = new WeakMap();
  _ended = new WeakSet();
  ended_fn = function() {
    this.playing = false;
  };
  __publicField(Sound, "has", has);

  // src/animations/index.js
  var ctx;
  var map = {};
  var list = [];
  var center = new Two.Vector(two.width / 2, two.height / 2);
  var domElement = two.renderer.domElement;
  var min_dimension = Math.min(two.width, two.height);
  domElement.style.background = palette_default.colors.background;
  two.bind("resize", () => {
    center.x = two.width / 2;
    center.y = two.height / 2;
    min_dimension = Math.min(two.width, two.height);
    list.forEach((animation) => animation.resize());
  });
  palette_default.onStart(updateAudio);
  palette_default.onUpdate(() => {
    list.forEach(({ update: update3 }) => update3());
    domElement.style.background = palette_default.colors.background;
  });
  function updateAudio() {
    const current2 = palette_default.current;
    const letters = ["A", "B", "C", "D", "E", "F"];
    const filetype = ".mp3";
    const sounds = list.filter(({ sounds: sounds2 }) => Array.isArray(sounds2));
    var type = letters[current2];
    var $lobby = (0, import_jquery.default)("#lobby");
    var $loaded = $lobby.find("#loaded").html(0);
    var $totalAssets = $lobby.find("#total-assets");
    const show2 = once(function() {
      $loaded.index = 0;
      $loaded.html($loaded.index);
      $totalAssets.html(sounds.length);
      $lobby.fadeIn();
    });
    return new Promise((resolve) => {
      const onLoad = () => {
        update3();
        buffered();
      };
      const buffered = after(sounds.length, function() {
        resolve();
        $lobby.fadeOut();
      });
      sounds.forEach((animation) => {
        if (!ctx) {
          ctx = new AudioContext();
        }
        let sound = animation.sounds[current2];
        if (!sound) {
          show2();
          const uri = `${path}${type}/${animation.name}${filetype}`;
          sound = new Sound(ctx, uri, onLoad);
          animation.sounds.push(sound);
        }
        animation.sound = sound;
      });
    });
    function update3() {
      $loaded.index++;
      $loaded.html($loaded.index);
    }
  }
  var animations_default = {
    updateAudio,
    map,
    get min_dimension() {
      return min_dimension;
    },
    list
  };

  // src/index.js
  (0, import_jquery2.default)(() => {
    const $container = (0, import_jquery2.default)("#content"), $hint = (0, import_jquery2.default)("#hint"), $credits = (0, import_jquery2.default)("#credits"), $embed = (0, import_jquery2.default)("#embed"), $merchandise = (0, import_jquery2.default)("#merchandise"), $window = (0, import_jquery2.default)(window);
    let ui, buttons, width, height, landscape, embedding = false, playing = false, merchandising = false;
    const showHint = debounce(function() {
      if (embedding) {
        showHint();
        return;
      }
      $hint.fadeIn();
    }, 2e4);
    const hideCredits = debounce(function() {
      if (mouse.y > height - 64) {
        hideCredits();
        return;
      }
      $container.css("top", 0);
    }, 1e3);
    const silent = document.createElement("audio");
    silent.addEventListener("canplay", loaded, false);
    silent.src = `${path}silent.mp3`;
    silent.preload = "auto";
    silent.load();
    function loaded() {
      $window.bind("click", enableAudio).bind("visibilitychange", listenToEnableAudio);
      silent.removeEventListener("canplay", loaded, false);
      initialize();
    }
    function enableAudio(e) {
      playing = true;
      silent.play();
      $window.unbind("click", enableAudio);
    }
    function listenToEnableAudio() {
      if (/hidden/i.test(document.visibilityState) && playing) {
        playing = false;
        $window.unbind("click", enableAudio).bind("click", enableAudio);
      }
    }
    function initialize() {
      two.appendTo($container[0]);
      animations_default.updateAudio();
      (0, import_jquery2.default)("#embed-button").click((e) => {
        e.preventDefault();
        $hint.fadeOut();
        $merchandise.fadeOut();
        $embed.fadeIn(selectEmbed);
      });
      let firstRun = true;
      (0, import_jquery2.default)("#merchandise-button").click((e) => {
        e.preventDefault();
        if (firstRun) {
          $merchandise.css({
            opacity: 1,
            display: "none",
            zIndex: 0
          });
          firstRun = false;
        }
        $hint.fadeOut();
        $embed.fadeOut();
        $merchandise.fadeIn(() => {
          embedding = true;
          merchandising = true;
        });
      });
      (0, import_jquery2.default)("#close-merchandise").click((e) => {
        e.preventDefault();
        embedding = false;
        merchandising = false;
        $merchandise.fadeOut();
      });
      $window.bind("resize", function(e) {
        width = $window.width();
        height = $window.height();
      }).bind("mousemove", function(e) {
        if (embedding || url.boolean("kiosk")) {
          return;
        }
        mouse.set(e.clientX, e.clientY);
        showCredits();
      }).bind("keydown", function(e, data) {
        if (e.metaKey || e.ctrlKey) {
          return;
        }
        e.preventDefault();
        const code = e.which || data;
        let index;
        switch (code) {
          case 81:
            index = "0,0";
            break;
          case 87:
            index = "0,1";
            break;
          case 69:
            index = "0,2";
            break;
          case 82:
            index = "0,3";
            break;
          case 84:
            index = "0,4";
            break;
          case 89:
            index = "0,5";
            break;
          case 85:
            index = "0,6";
            break;
          case 73:
            index = "0,7";
            break;
          case 79:
            index = "0,8";
            break;
          case 80:
            index = "0,9";
            break;
          case 65:
            index = "1,0";
            break;
          case 83:
            index = "1,1";
            break;
          case 68:
            index = "1,2";
            break;
          case 70:
            index = "1,3";
            break;
          case 71:
            index = "1,4";
            break;
          case 72:
            index = "1,5";
            break;
          case 74:
            index = "1,6";
            break;
          case 75:
            index = "1,7";
            break;
          case 76:
            index = "1,8";
            break;
          case 90:
            index = "2,0";
            break;
          case 88:
            index = "2,1";
            break;
          case 67:
            index = "2,2";
            break;
          case 86:
            index = "2,3";
            break;
          case 66:
            index = "2,4";
            break;
          case 78:
            index = "2,5";
            break;
          case 77:
            index = "2,6";
            break;
          case 32:
            index = "3,0";
            break;
        }
        trigger(index);
        triggered();
      });
      if (navigator.maxTouchPoints > 0) {
        $hint.find(".message").html("Press anywhere on the screen and turn up speakers");
        createMobileUI();
        orientUserInterface();
      } else {
        $credits.css("display", "block");
        $hint.find(".message").html("Press any key, A to Z or spacebar, and turn up speakers");
      }
      two.bind("update", function() {
        update();
        palette_default.update();
        if (!ui) {
          return;
        }
        for (let k in buttons.needsUpdate) {
          const button = buttons.needsUpdate[k];
          if (button) {
            updateButton(button);
          }
        }
        ui.update();
      }).play();
      $window.trigger("resize");
      if (navigator.requestMIDIAccess) {
        navigator.requestMIDIAccess().then(onMIDISuccess, onMIDIFailure);
      }
      setTimeout(() => {
        (0, import_jquery2.default)("#lobby").fadeOut(triggerLogo);
        if (url.boolean("kiosk")) {
          (0, import_jquery2.default)(document.body).addClass("kiosk");
          triggered();
          $hint.fadeIn();
          return;
        } else if (/merchandise/ig.test(url.hash)) {
          (0, import_jquery2.default)("#merchandise-button").trigger("click");
          return;
        }
        $hint.fadeIn();
      }, 1e3);
    }
    function hideEmbed(e) {
      if (!!$embed.has(e.target).length) {
        return;
      }
      $embed.fadeOut(function() {
        embedding = false;
      });
      $window.unbind("click", hideEmbed);
    }
    function selectEmbed() {
      embedding = true;
      $embed.find("textarea").select();
      $window.bind("click", hideEmbed);
    }
    function orientUserInterface() {
      if (!ui) {
        return;
      }
      width = $window.width();
      height = $window.height();
      landscape = width >= height;
      const size = buttons.length;
      buttons.forEach((group, i) => {
        const length = group.length;
        let w, h, x, y;
        if (landscape) {
          w = width / length;
          h = height / size;
        } else {
          w = width / size;
          h = height / length;
        }
        group.width = w;
        group.height = h;
        group.forEach((button, j) => {
          if (landscape) {
            x = width * (j + 0.5) / length;
            y = height * (i + 0.5) / size;
          } else {
            x = width * (i + 0.5) / size;
            y = height * (j + 0.5) / length;
          }
          button.width = w;
          button.height = h;
          button.translation.set(x, y);
          button.visible = true;
        });
      });
    }
    function updateButton(button) {
      button.opacity += -button.opacity * 0.2;
      if (button.opacity <= 0.1) {
        button.opacity = 0;
        delete buttons.needsUpdate[button.id];
      }
    }
    function triggerLogo() {
      if (window.localStorage && window.localStorage.getItem("visited")) {
        return;
      }
      trigger("0,9");
      trigger("2,6");
      trigger("1,7");
      trigger("2,1");
      if (window.localStorage) {
        window.localStorage.setItem("visited", true);
      }
    }
    function onMIDISuccess(midi) {
      const inputs = [];
      const outputs = [];
      const names = [];
      const $midi = (0, import_jquery2.default)(".midi-connections");
      const notesToIndices = {
        21: "2,0",
        23: "2,1",
        24: "2,2",
        26: "2,3",
        28: "2,4",
        29: "2,5",
        31: "2,6",
        33: "1,0",
        35: "1,1",
        36: "1,2",
        38: "1,3",
        40: "1,4",
        41: "1,5",
        43: "1,6",
        45: "1,7",
        47: "1,8",
        48: "0,0",
        50: "0,1",
        52: "0,2",
        53: "0,3",
        55: "0,4",
        57: "0,5",
        59: "0,6",
        60: "0,7",
        62: "0,8",
        64: "0,9",
        65: "2,0",
        67: "2,1",
        69: "2,2",
        71: "2,3",
        72: "2,4",
        74: "2,5",
        76: "2,6",
        77: "1,0",
        79: "1,1",
        81: "1,2",
        83: "1,3",
        84: "1,4",
        86: "1,5",
        88: "1,6",
        89: "1,7",
        91: "1,8",
        93: "0,0",
        95: "0,1",
        96: "0,2",
        98: "0,3",
        100: "0,4",
        101: "0,5",
        103: "0,6",
        105: "0,7",
        107: "0,8",
        108: "0,9",
        22: "3,0",
        106: "3,0"
      };
      const indicesToNotes = {};
      for (let k in notesToIndices) {
        const v = notesToIndices[k];
        indicesToNotes[v] = k;
      }
      window.onmidistatechange = init;
      window.onmidimessage = messageReceived;
      midi.addEventListener("statechange", init);
      init({ target: midi });
      onMIDISuccess.dispatch = function(index) {
        const duration = 100;
        const note = indicesToNotes[index];
        const velocity = 100;
        if (!note) {
          return;
        }
        const on = [144, note, velocity];
        const off = [128, note, 0];
        for (let i = 0; i < outputs.length; i++) {
          const output = outputs[i];
          output.send(on);
          output.send(off, Date.now() + duration);
        }
        if (window.webkit) {
          window.webkit.messageHandlers.midi.postMessage(on);
          setTimeout(function() {
            window.webkit.messageHandlers.midi.postMessage(off);
          }, duration);
        }
      };
      function init(e) {
        const midi2 = e.target;
        let deviceString;
        inputs.length = names.length = 0;
        for (let input of midi2.inputs.values()) {
          if (!containsById(inputs, input)) {
            inputs.push(input);
            names.push(input.name);
          }
          input.onmidimessage = messageReceived;
        }
        for (let output of midi2.outputs.values()) {
          if (!containsById(outputs, output)) {
            outputs.push(output);
          }
        }
        if (names.length <= 0) {
          $midi.html("Disconnected from all MIDI devices");
          return;
        } else if (names.length <= 1) {
          deviceString = names[0];
        } else if (names.length <= 2) {
          deviceString = names[0] + " and " + names[1];
        } else {
          const lastName = names.pop();
          deviceString = `${names.join(", ")}, and ${lastName}`;
          names.push(lastName);
        }
        $midi.html(
          `Connected to these MIDI devices:, ${deviceString}`
        );
        show();
      }
      function messageReceived(message) {
        const command = message.data[0];
        const note = message.data[1];
        const velocity = message.data.length > 2 ? message.data[2] : 0;
        switch (command) {
          case 144:
            if (velocity > 0) {
              noteOn(note, velocity);
            }
            break;
        }
      }
      function noteOn(note) {
        const index = notesToIndices[note];
        if (index) {
          onMIDISuccess.receiving = true;
          trigger(index);
          triggered();
          onMIDISuccess.receiving = false;
        }
      }
    }
    function onMIDIFailure() {
      if (window.console && window.console.log) {
        window.console.log("Unable to connect to MIDI");
      }
    }
    function containsById(list2, elem) {
      for (let i = 0; i < list2.length; i++) {
        const item = list2[i];
        if (item.id === elem.id) {
          return true;
        }
      }
      return false;
    }
    function createMobileUI() {
      ui = new Two({
        fullscreen: true
      }).appendTo($container[0]);
      ui.renderer.domElement.id = "ui";
      buttons = new Array(3);
      buttons.width = buttons.height = 32;
      buttons.needsUpdate = {};
      buttons.map = {};
      buttons[0] = range(10).map(createButton);
      buttons[1] = range(9).map(createButton);
      buttons[2] = range(8).map(createButton);
      ui.update();
      const touches = [];
      let e, x, y, l, row, col, index;
      $container.bind("touchstart", function(event) {
        e = event.originalEvent;
        each(e.touches, startTouchEnter);
      }).bind("touchmove", function(event) {
        e = event.originalEvent;
        each(e.touches, updateTouchEnter);
      }).bind("touchstart touchmove touchend touchcancel", function(e2) {
        if (playing && !(merchandising || (0, import_jquery2.default)(e2.target).hasClass("ios-app-store"))) {
          e2.preventDefault();
          return false;
        }
      });
      buttons.forEach((group, i) => {
        group.forEach(function(button, j) {
          const elem = button._renderer.elem;
          const index2 = `${i},${j}`;
          buttons.map[index2] = button;
          (0, import_jquery2.default)(elem).css({
            cursor: "pointer"
          }).bind("mousedown touchstart", function(event) {
            e = event.originalEvent;
            triggerButton(index2, button);
          });
        });
      });
      function createButton() {
        const shape = ui.makeRectangle(0, 0, buttons.width, buttons.height);
        shape.noFill().noStroke();
        shape.opacity = 0;
        shape.visible = false;
        return shape;
      }
      function getIndex(x2, y2) {
        l = buttons.length;
        if (landscape) {
          row = clamp(Math.floor(l * y2 / height), 0, l - 1);
          l = buttons[row].length;
          col = clamp(Math.floor(l * x2 / width), 0, l - 1);
        } else {
          row = clamp(Math.floor(l * x2 / width), 0, l - 1);
          l = buttons[row].length;
          col = clamp(Math.floor(l * y2 / height), 0, l - 1);
        }
        return `${row},${col}`;
      }
      function startTouchEnter(touch) {
        x = touch.clientX;
        y = touch.clientY;
        touches[touch.identifier] = {
          id: getIndex(x, y, x, y),
          x,
          y
        };
      }
      function updateTouchEnter(touch) {
        x = touch.clientX;
        y = touch.clientY;
        index = getIndex(x, y, touches[touch.identifier].x, touches[touch.identifier].y);
        if (touches[touch.identifier] && touches[touch.identifier].id !== index) {
          triggerButton(index, buttons.map[index]);
          touches[touch.identifier].id = index;
        }
        touches[touch.identifier].x = x;
        touches[touch.identifier].y = y;
      }
      function triggerButton(index2, button) {
        trigger(index2);
        triggered();
        if (palette_default.get().isDark) {
          button.fill = "rgba(255, 255, 255, 0.3)";
        } else {
          button.fill = "rgba(0, 0, 0, 0.3)";
        }
        button.opacity = 1;
        buttons.needsUpdate[button.id] = button;
      }
    }
    function trigger(hash, silent2) {
      const animation = animations_default.map[hash];
      if (animation) {
        if (animation.playing) {
          animation.clear();
        }
        animation.start(silent2);
        if (window.gtag) {
          window.gtag("event", "animation", {
            trigger: hash
          });
        }
      }
      if (!onMIDISuccess.receiving && onMIDISuccess.dispatch) {
        onMIDISuccess.dispatch(hash);
      }
    }
    function triggered() {
      $hint.fadeOut();
      showHint();
    }
    function showCredits() {
      $container.css("top", `${-64}px`);
      hideCredits();
    }
  });
  if (window.console && window.console.log) {
    window.console.log("Check out the code at http://github.com/jonobr1/Patatap");
  }
})();
/*!
 * jQuery JavaScript Library v3.7.0
 * https://jquery.com/
 *
 * Copyright OpenJS Foundation and other contributors
 * Released under the MIT license
 * https://jquery.org/license
 *
 * Date: 2023-05-11T18:29Z
 */
