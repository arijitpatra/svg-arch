/* eslint-disable no-unsafe-finally */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable default-case */
/* eslint-disable eqeqeq */
/* eslint-disable no-cond-assign */
/* eslint-disable no-sequences */
/* eslint-disable no-undef */
/* eslint-disable no-restricted-globals */
/* eslint-disable no-unused-expressions */
/* eslint-disable no-mixed-operators */
/*! Warp.js v1.0.8 (MIT) */
// eslint-disable-next-line strict
!(function (e, t) {
  "object" == typeof exports && "object" == typeof module
    ? (module.exports = t())
    : "function" == typeof define && define.amd
    ? define([], t)
    : "object" == typeof exports
    ? (exports.Warp = t())
    : (e.Warp = t());
})("undefined" != typeof self ? self : this, function () {
  return (function (e) {
    function t(n) {
      if (r[n]) return r[n].exports;
      var a = (r[n] = { i: n, l: !1, exports: {} });
      return e[n].call(a.exports, a, a.exports, t), (a.l = !0), a.exports;
    }
    var r = {};
    return (
      (t.m = e),
      (t.c = r),
      (t.d = function (e, r, n) {
        t.o(e, r) ||
          Object.defineProperty(e, r, {
            configurable: !1,
            enumerable: !0,
            get: n,
          });
      }),
      (t.n = function (e) {
        var r =
          e && e.__esModule
            ? function () {
                return e.default;
              }
            : function () {
                return e;
              };
        return t.d(r, "a", r), r;
      }),
      (t.o = function (e, t) {
        return Object.prototype.hasOwnProperty.call(e, t);
      }),
      (t.p = ""),
      t((t.s = 6))
    );
  })([
    function (e, t, r) {
      "use strict";
      function n(e) {
        return u[e.toLowerCase()];
      }
      function a(e) {
        return f.test(e.type);
      }
      function i(e) {
        var t = { relative: !1 };
        switch (e.length) {
          case 2:
            t.type = "l";
            break;
          case 3:
            t.type = "q";
            break;
          case 4:
            t.type = "c";
            break;
          default:
            return !1;
        }
        for (var r = 1; r < e.length; r++) {
          var n = (r < e.length - 1 ? r : y.length) - 1,
            a = l(y[n], 2),
            i = a[0],
            o = a[1];
          (t[i] = e[r][0]),
            (t[o] = e[r][1]),
            e[r].length > 2 &&
              ((t.extended = t.extended || {}),
              (t.extended[n] = e[r].slice(2)));
        }
        return t;
      }
      function o(e, t) {
        if (e.type === t.type && e.relative === t.relative) {
          var r = function (e, t, r) {
              if (e && t) {
                for (
                  var n = [], a = Math.min(e.length, t.length), i = 0;
                  i < a;
                  i++
                )
                  n.push((e[i] + t[i]) / 2);
                y.extended[r] = n;
              }
            },
            n = t.type,
            a = t.relative,
            i = t.x,
            o = t.y,
            l = !!e.extended && !!t.extended,
            u = {},
            y = { type: n, relative: a, x: i, y: o, extended: u };
          switch (n) {
            case "l":
              break;
            case "q":
              (y.x1 = (e.x1 + t.x1) / 2),
                (y.y1 = (e.y1 + t.y1) / 2),
                l && r(e.extended[0], t.extended[0], 0);
              break;
            case "c":
              (y.x1 = (e.x1 + e.x2) / 2),
                (y.y1 = (e.y1 + e.y2) / 2),
                (y.x2 = (t.x1 + t.x2) / 2),
                (y.y2 = (t.y1 + t.y2) / 2),
                l &&
                  (r(e.extended[0], e.extended[1], 0),
                  r(t.extended[0], t.extended[1], 1));
              break;
            default:
              return !1;
          }
          return t.extended && t.extended[2] && (u[2] = t.extended[2]), y;
        }
        return !1;
      }
      Object.defineProperty(t, "__esModule", { value: !0 });
      var l = (function () {
        function e(e, t) {
          var r = [],
            n = !0,
            a = !1,
            i = void 0;
          try {
            for (
              var o, l = e[Symbol.iterator]();
              !(n = (o = l.next()).done) &&
              (r.push(o.value), !t || r.length !== t);
              n = !0
            );
          } catch (e) {
            (a = !0), (i = e);
          } finally {
            try {
              !n && l.return && l.return();
            } finally {
              if (a) throw i;
            }
          }
          return r;
        }
        return function (t, r) {
          if (Array.isArray(t)) return t;
          if (Symbol.iterator in Object(t)) return e(t, r);
          throw new TypeError(
            "Invalid attempt to destructure non-iterable instance"
          );
        };
      })();
      (t.getSegmentSchema = n),
        (t.isDrawingSegment = a),
        (t.createLineSegment = i),
        (t.joinSegments = o);
      var u = {
          m: ["x", "y"],
          z: [],
          l: ["x", "y"],
          h: ["x"],
          v: ["y"],
          c: ["x1", "y1", "x2", "y2", "x", "y"],
          s: ["x2", "y2", "x", "y"],
          q: ["x1", "y1", "x", "y"],
          t: ["x", "y"],
          a: ["rx", "ry", "xRotation", "largeArc", "sweep", "x", "y"],
        },
        y = (t.pointGroups = [
          ["x1", "y1"],
          ["x2", "y2"],
          ["x", "y"],
        ]),
        f = /[lhvcsqta]/;
    },
    function (e, t, r) {
      "use strict";
      function n(e) {
        if (Array.isArray(e)) {
          for (var t = 0, r = Array(e.length); t < e.length; t++) r[t] = e[t];
          return r;
        }
        return Array.from(e);
      }
      function a(e, t) {
        for (var r = [], a = 0; a < e.length; a++) {
          var i = JSON.parse(JSON.stringify(e[a])),
            o = t(i, a, e, r);
          Array.isArray(o) ? r.push.apply(r, n(o)) : o && r.push(o);
        }
        return r;
      }
      Object.defineProperty(t, "__esModule", { value: !0 }), (t.default = a);
    },
    function (e, t, r) {
      "use strict";
      function n(e) {
        var t = [],
          r = void 0;
        for (i.lastIndex = 0; (r = i.exec(e)); ) {
          var n = r[1].toLowerCase(),
            l = (r[2].match(o) || []).map(parseFloat),
            u = n === r[1],
            y = (0, a.getSegmentSchema)(n);
          if (l.length < y.length)
            throw new Error(
              'Malformed path data: type "' +
                n +
                '" has ' +
                l.length +
                " arguments, expected " +
                scheme.length
            );
          if (y.length > 0) {
            if (l.length % y.length != 0)
              throw new Error(
                'Malformed path data: type "' +
                  n +
                  '" has ' +
                  l.length +
                  " arguments, " +
                  (l.length % y.length) +
                  " too many"
              );
            for (var f = 0; f < l.length / y.length; f++) {
              for (var c = { type: n, relative: u }, v = 0; v < y.length; v++)
                c[y[v]] = l[f * y.length + v];
              t.push(c);
            }
          } else t.push({ type: n, relative: u });
        }
        return t;
      }
      Object.defineProperty(t, "__esModule", { value: !0 }), (t.default = n);
      var a = r(0),
        i = /([mzlhvcsqta])([^mzlhvcsqta]*)/gi,
        o = /-?[0-9]*\.?[0-9]+(?:e[-+]?\d+)?/gi;
    },
    function (e, t, r) {
      "use strict";
      function n(e) {
        var t =
            arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 2,
          r = !1,
          n = Math.pow(10, t);
        return e
          .map(function (e) {
            var t = [],
              o = e.relative ? e.type : e.type.toUpperCase(),
              l = r !== o,
              u = (0, i.getSegmentSchema)(e.type);
            l && (t.push(o), (r = o));
            var y = !0,
              f = !1,
              c = void 0;
            try {
              for (
                var v, p = u[Symbol.iterator]();
                !(y = (v = p.next()).done);
                y = !0
              ) {
                var s = v.value,
                  d = e[s],
                  h = void 0;
                switch (void 0 === d ? "undefined" : a(d)) {
                  case "boolean":
                    h = 0 | d;
                    break;
                  case "number":
                    h = ((d * n) | 0) / n;
                    break;
                  default:
                    throw new Error("Invalid path data");
                }
                l || t.push(" "), t.push(h), (l = !1);
              }
            } catch (e) {
              (f = !0), (c = e);
            } finally {
              try {
                !y && p.return && p.return();
              } finally {
                if (f) throw c;
              }
            }
            return t.join("");
          })
          .join("");
      }
      Object.defineProperty(t, "__esModule", { value: !0 });
      var a =
        "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
          ? function (e) {
              return typeof e;
            }
          : function (e) {
              return e &&
                "function" == typeof Symbol &&
                e.constructor === Symbol &&
                e !== Symbol.prototype
                ? "symbol"
                : typeof e;
            };
      t.default = n;
      var i = r(0);
    },
    function (e, t, r) {
      "use strict";
      function n(e) {
        var t =
            arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
          r = document.createElementNS("http://www.w3.org/2000/svg", e),
          n = !0,
          a = !1,
          o = void 0;
        try {
          for (
            var l, u = Object.keys(t)[Symbol.iterator]();
            !(n = (l = u.next()).done);
            n = !0
          ) {
            var y = l.value;
            i(r, y, t[y]);
          }
        } catch (e) {
          (a = !0), (o = e);
        } finally {
          try {
            !n && u.return && u.return();
          } finally {
            if (a) throw o;
          }
        }
        return r;
      }
      function a(e, t) {
        return e[t] instanceof SVGAnimatedLength
          ? e[t].baseVal.value
          : e.getAttribute(t);
      }
      function i(e, t, r) {
        e.setAttribute(t, r);
      }
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.createElement = n),
        (t.getProperty = a),
        (t.setProperty = i);
    },
    function (e, t, r) {
      "use strict";
      function n(e) {
        for (
          var t =
              arguments.length > 1 && void 0 !== arguments[1]
                ? arguments[1]
                : 0.5,
            r = [],
            n = [],
            a = [e];
          a.length < e.length;

        ) {
          for (var i = a[a.length - 1], o = [], l = 1; l < i.length; l++) {
            for (
              var u = i[l - 1],
                y = i[l],
                f = [],
                c = Math.max(u.length, y.length),
                v = 0;
              v < c;
              v++
            ) {
              var p = u[v] || 0,
                s = y[v] || 0;
              f.push(p + (s - p) * t);
            }
            o.push(f);
          }
          a.push(o);
        }
        for (var d = 0; d < a.length; d++)
          r.push(a[d][0]), n.push(a[a.length - 1 - d][d]);
        return [r, n];
      }
      function a(e, t) {
        for (
          var r =
              arguments.length > 2 && void 0 !== arguments[2]
                ? arguments[2]
                : i,
            a = [e],
            o = [];
          a.length > 0;

        ) {
          var l = a.pop();
          if (r(l) > t)
            for (var u = n(l), y = u.length - 1; y >= 0; y--) a.push(u[y]);
          else o.push(l);
        }
        return o;
      }
      function i(e) {
        for (
          var t = e[0], r = e[e.length - 1], n = 0, a = 0;
          a < t.length;
          a++
        ) {
          var i = r[a] - t[a];
          n += Math.pow(i, 2);
        }
        return Math.sqrt(n);
      }
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.split = n),
        (t.until = a),
        (t.euclideanDistance = i);
    },
    function (e, t, r) {
      "use strict";
      var n = r(7),
        a = (function (e) {
          return e && e.__esModule ? e : { default: e };
        })(n);
      e.exports = a.default;
    },
    function (e, t, r) {
      "use strict";
      function n(e) {
        return e && e.__esModule ? e : { default: e };
      }
      function a(e) {
        if (Array.isArray(e)) {
          for (var t = 0, r = Array(e.length); t < e.length; t++) r[t] = e[t];
          return r;
        }
        return Array.from(e);
      }
      function i(e, t) {
        if (!(e instanceof t))
          throw new TypeError("Cannot call a class as a function");
      }
      Object.defineProperty(t, "__esModule", { value: !0 });
      var o = (function () {
          function e(e, t) {
            for (var r = 0; r < t.length; r++) {
              var n = t[r];
              (n.enumerable = n.enumerable || !1),
                (n.configurable = !0),
                "value" in n && (n.writable = !0),
                Object.defineProperty(e, n.key, n);
            }
          }
          return function (t, r, n) {
            return r && e(t.prototype, r), n && e(t, n), t;
          };
        })(),
        l = r(8),
        u = r(4),
        y = r(2),
        f = n(y),
        c = r(3),
        v = n(c),
        p = r(5),
        s = r(15),
        d = n(s),
        h = r(16),
        x = n(h),
        g = r(17),
        m = n(g),
        b = (function () {
          function e(t) {
            var r =
              arguments.length > 1 && void 0 !== arguments[1]
                ? arguments[1]
                : "q";
            i(this, e),
              (this.element = t),
              (0, l.shapesToPaths)(t),
              (0, l.preparePaths)(t, r);
            var n = Array.from(t.querySelectorAll("path"));
            this.paths = n.map(function (e) {
              var t = (0, u.getProperty)(e, "d");
              return { pathElement: e, pathData: (0, f.default)(t) };
            });
          }
          return (
            o(e, [
              {
                key: "update",
                value: function () {
                  var e = !0,
                    t = !1,
                    r = void 0;
                  try {
                    for (
                      var n, a = this.paths[Symbol.iterator]();
                      !(e = (n = a.next()).done);
                      e = !0
                    ) {
                      var i = n.value,
                        o = i.pathElement,
                        l = i.pathData,
                        y = (0, v.default)(l);
                      (0, u.setProperty)(o, "d", y);
                    }
                  } catch (e) {
                    (t = !0), (r = e);
                  } finally {
                    try {
                      !e && a.return && a.return();
                    } finally {
                      if (t) throw r;
                    }
                  }
                },
              },
              {
                key: "transform",
                value: function (e) {
                  e = Array.isArray(e) ? e : [e];
                  var t = !0,
                    r = !1,
                    n = void 0;
                  try {
                    for (
                      var a, i = this.paths[Symbol.iterator]();
                      !(t = (a = i.next()).done);
                      t = !0
                    ) {
                      var o = a.value;
                      o.pathData = (0, d.default)(o.pathData, e);
                    }
                  } catch (e) {
                    (r = !0), (n = e);
                  } finally {
                    try {
                      !t && i.return && i.return();
                    } finally {
                      if (r) throw n;
                    }
                  }
                  this.update();
                },
              },
              {
                key: "interpolate",
                value: function (e) {
                  function t(t) {
                    var n = [t[0].slice(0, 2), t[t.length - 1].slice(0, 2)],
                      a = (0, p.euclideanDistance)(n);
                    return (r = r || a > e), a;
                  }
                  var r = !1,
                    n = !0,
                    a = !1,
                    i = void 0;
                  try {
                    for (
                      var o, l = this.paths[Symbol.iterator]();
                      !(n = (o = l.next()).done);
                      n = !0
                    ) {
                      var u = o.value;
                      u.pathData = (0, x.default)(u.pathData, e, t);
                    }
                  } catch (e) {
                    (a = !0), (i = e);
                  } finally {
                    try {
                      !n && l.return && l.return();
                    } finally {
                      if (a) throw i;
                    }
                  }
                  return r;
                },
              },
              {
                key: "extrapolate",
                value: function (e) {
                  function t(t) {
                    var n = [t[0].slice(0, 2), t[t.length - 1].slice(0, 2)],
                      a = (0, p.euclideanDistance)(n);
                    return (r = r || a <= e), a;
                  }
                  var r = !1,
                    n = !0,
                    a = !1,
                    i = void 0;
                  try {
                    for (
                      var o, l = this.paths[Symbol.iterator]();
                      !(n = (o = l.next()).done);
                      n = !0
                    ) {
                      var u = o.value;
                      u.pathData = (0, m.default)(u.pathData, e, t);
                    }
                  } catch (e) {
                    (a = !0), (i = e);
                  } finally {
                    try {
                      !n && l.return && l.return();
                    } finally {
                      if (a) throw i;
                    }
                  }
                  return r;
                },
              },
              {
                key: "preInterpolate",
                value: function (e, t) {
                  function r(e) {
                    var r = [e[0].slice(0, 2), e[e.length - 1].slice(0, 2)],
                      a = (0, p.euclideanDistance)(r);
                    return (n = n || a > t), a;
                  }
                  var n = !1,
                    i = !0,
                    o = !1,
                    l = void 0;
                  try {
                    for (
                      var u, y = this.paths[Symbol.iterator]();
                      !(i = (u = y.next()).done);
                      i = !0
                    ) {
                      var f = u.value,
                        c = (0, d.default)(f.pathData, function (t) {
                          var r = e(t.slice(0, 2));
                          return r.push.apply(r, a(t)), r;
                        }),
                        v = (0, x.default)(c, t, r);
                      f.pathData = (0, d.default)(v, function (e) {
                        return e.slice(2);
                      });
                    }
                  } catch (e) {
                    (o = !0), (l = e);
                  } finally {
                    try {
                      !i && y.return && y.return();
                    } finally {
                      if (o) throw l;
                    }
                  }
                  return n;
                },
              },
              {
                key: "preExtrapolate",
                value: function (e, t) {
                  function r(e) {
                    var r = [e[0].slice(0, 2), e[e.length - 1].slice(0, 2)],
                      a = (0, p.euclideanDistance)(r);
                    return (n = n || a <= t), a;
                  }
                  var n = !1,
                    i = !0,
                    o = !1,
                    l = void 0;
                  try {
                    for (
                      var u, y = this.paths[Symbol.iterator]();
                      !(i = (u = y.next()).done);
                      i = !0
                    ) {
                      var f = u.value,
                        c = (0, d.default)(f.pathData, function (t) {
                          var r = e(t.slice(0, 2));
                          return r.push.apply(r, a(t)), r;
                        }),
                        v = (0, m.default)(c, t, r);
                      f.pathData = (0, d.default)(v, function (e) {
                        return e.slice(2);
                      });
                    }
                  } catch (e) {
                    (o = !0), (l = e);
                  } finally {
                    try {
                      !i && y.return && y.return();
                    } finally {
                      if (o) throw l;
                    }
                  }
                  return n;
                },
              },
            ]),
            e
          );
        })();
      t.default = b;
    },
    function (e, t, r) {
      "use strict";
      function n(e) {
        return e && e.__esModule ? e : { default: e };
      }
      function a(e) {
        if (Array.isArray(e)) {
          for (var t = 0, r = Array(e.length); t < e.length; t++) r[t] = e[t];
          return r;
        }
        return Array.from(e);
      }
      function i(e) {
        var t = {
            line: function (e) {
              return M.line(
                (0, _.getProperty)(e, "x1"),
                (0, _.getProperty)(e, "y1"),
                (0, _.getProperty)(e, "x2"),
                (0, _.getProperty)(e, "y2")
              );
            },
            polyline: function (e) {
              return M.polyline.apply(M, a(e.points));
            },
            polygon: function (e) {
              return M.polygon.apply(M, a(e.points));
            },
            rect: function (e) {
              return M.rectangle(
                (0, _.getProperty)(e, "x"),
                (0, _.getProperty)(e, "y"),
                (0, _.getProperty)(e, "width"),
                (0, _.getProperty)(e, "height"),
                (0, _.getProperty)(e, "rx"),
                (0, _.getProperty)(e, "ry")
              );
            },
            ellipse: function (e) {
              return M.ellipse(
                (0, _.getProperty)(e, "cx"),
                (0, _.getProperty)(e, "cy"),
                (0, _.getProperty)(e, "rx"),
                (0, _.getProperty)(e, "ry")
              );
            },
            circle: function (e) {
              return M.circle(
                (0, _.getProperty)(e, "cx"),
                (0, _.getProperty)(e, "cy"),
                (0, _.getProperty)(e, "r")
              );
            },
          },
          r = e.querySelectorAll(Object.keys(t).join(",")),
          n = !0,
          i = !1,
          o = void 0;
        try {
          for (
            var l, u = r[Symbol.iterator]();
            !(n = (l = u.next()).done);
            n = !0
          ) {
            var y = l.value,
              c = y.tagName.toLowerCase();
            if (c in t) {
              var v = t[c](y),
                p = (0, f.default)(v),
                s = { d: p },
                d = !0,
                h = !1,
                x = void 0;
              try {
                for (
                  var g, m = Array.from(y.attributes)[Symbol.iterator]();
                  !(d = (g = m.next()).done);
                  d = !0
                ) {
                  var b = g.value,
                    N = b.nodeName,
                    w = b.nodeValue;
                  /^(x|y|x1|y1|x2|y2|width|height|r|rx|ry|cx|cy|points|d)$/.test(
                    N
                  ) || (s[N] = w);
                }
              } catch (e) {
                (h = !0), (x = e);
              } finally {
                try {
                  !d && m.return && m.return();
                } finally {
                  if (h) throw x;
                }
              }
              var P = (0, _.createElement)("path", s);
              y.parentNode.replaceChild(P, y);
            }
          }
        } catch (e) {
          (i = !0), (o = e);
        } finally {
          try {
            !n && u.return && u.return();
          } finally {
            if (i) throw o;
          }
        }
      }
      function o(e) {
        var t =
            arguments.length > 1 && void 0 !== arguments[1]
              ? arguments[1]
              : "q",
          r = Array.from(e.querySelectorAll("path")),
          n = !0,
          a = !1,
          i = void 0;
        try {
          for (
            var o, l = r[Symbol.iterator]();
            !(n = (o = l.next()).done);
            n = !0
          ) {
            var y = o.value,
              c = (0, _.getProperty)(y, "d"),
              p = (0, u.default)(c);
            (p = (0, v.default)(p, (0, s.default)())),
              (p = (0, v.default)(p, (0, h.default)())),
              (p = (0, v.default)(p, (0, g.default)())),
              (p = (0, v.default)(p, (0, b.default)(t))),
              (p = (0, v.default)(p, (0, w.default)())),
              (c = (0, f.default)(p)),
              (0, _.setProperty)(y, "d", c);
          }
        } catch (e) {
          (a = !0), (i = e);
        } finally {
          try {
            !n && l.return && l.return();
          } finally {
            if (a) throw i;
          }
        }
      }
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.shapesToPaths = i),
        (t.preparePaths = o);
      var l = r(2),
        u = n(l),
        y = r(3),
        f = n(y),
        c = r(1),
        v = n(c),
        p = r(9),
        s = n(p),
        d = r(10),
        h = n(d),
        x = r(11),
        g = n(x),
        m = r(12),
        b = n(m),
        N = r(13),
        w = n(N),
        P = r(14),
        M = (function (e) {
          if (e && e.__esModule) return e;
          var t = {};
          if (null != e)
            for (var r in e)
              Object.prototype.hasOwnProperty.call(e, r) && (t[r] = e[r]);
          return (t.default = e), t;
        })(P),
        _ = r(4);
    },
    function (e, t, r) {
      "use strict";
      function n() {
        var e = ["x", "x1", "x2"],
          t = ["y", "y1", "y2"],
          r = 0,
          n = 0,
          i = NaN,
          o = NaN;
        return function (l) {
          if (
            (isNaN(i) && (0, a.isDrawingSegment)(l) && ((i = r), (o = n)),
            "z" !== l.type ||
              isNaN(i) ||
              ((r = i), (n = o), (i = NaN), (o = NaN)),
            l.relative)
          ) {
            var u = !0,
              y = !1,
              f = void 0;
            try {
              for (
                var c, v = e[Symbol.iterator]();
                !(u = (c = v.next()).done);
                u = !0
              ) {
                var p = c.value;
                p in l && (l[p] += r);
              }
            } catch (e) {
              (y = !0), (f = e);
            } finally {
              try {
                !u && v.return && v.return();
              } finally {
                if (y) throw f;
              }
            }
            var s = !0,
              d = !1,
              h = void 0;
            try {
              for (
                var x, g = t[Symbol.iterator]();
                !(s = (x = g.next()).done);
                s = !0
              ) {
                var m = x.value;
                m in l && (l[m] += n);
              }
            } catch (e) {
              (d = !0), (h = e);
            } finally {
              try {
                !s && g.return && g.return();
              } finally {
                if (d) throw h;
              }
            }
            l.relative = !1;
          }
          return (
            (r = "x" in l ? l.x : r),
            (n = "y" in l ? l.y : n),
            "m" === l.type && ((i = r), (o = n)),
            l
          );
        };
      }
      Object.defineProperty(t, "__esModule", { value: !0 }), (t.default = n);
      var a = r(0);
    },
    function (e, t, r) {
      "use strict";
      function n() {
        var e = 0,
          t = 0,
          r = NaN,
          n = NaN,
          a = NaN,
          i = NaN,
          o = NaN,
          l = NaN;
        return function (u) {
          if (isNaN(r) && "m" !== u.type)
            throw new Error(
              'Transform path error: path must start with "moveto"'
            );
          return (
            "s" === u.type &&
              ((a = isNaN(a) ? e : a),
              (i = isNaN(i) ? t : i),
              (u.type = "c"),
              (u.x1 = (u.relative ? 1 : 2) * e - a),
              (u.y1 = (u.relative ? 1 : 2) * t - i)),
            "c" === u.type
              ? ((a = (u.relative ? e : 0) + u.x2),
                (i = (u.relative ? t : 0) + u.y2))
              : ((a = NaN), (i = NaN)),
            "t" === u.type &&
              ((o = isNaN(o) ? e : o),
              (l = isNaN(l) ? t : l),
              (u.type = "q"),
              (u.x1 = (u.relative ? 1 : 2) * e - o),
              (u.y1 = (u.relative ? 1 : 2) * t - l)),
            "q" === u.type
              ? ((o = (u.relative ? e : 0) + u.x1),
                (l = (u.relative ? t : 0) + u.y1))
              : ((o = NaN), (l = NaN)),
            "z" === u.type && ((e = r), (t = n)),
            (e = "x" in u ? (u.relative ? e : 0) + u.x : e),
            (t = "y" in u ? (u.relative ? t : 0) + u.y : t),
            "m" === u.type && ((r = e), (n = t)),
            u
          );
        };
      }
      Object.defineProperty(t, "__esModule", { value: !0 }), (t.default = n);
    },
    function (e, t, r) {
      "use strict";
      function n() {
        var e = 0,
          t = 0,
          r = NaN,
          n = NaN;
        return function (a) {
          if (isNaN(r) && "m" !== a.type)
            throw new Error(
              'Transform path error: path must start with "moveto"'
            );
          switch (a.type) {
            case "h":
              (a.type = "l"), (a.y = a.relative ? 0 : t);
              break;
            case "v":
              (a.type = "l"), (a.x = a.relative ? 0 : e);
              break;
            case "z":
              (a.type = "l"),
                (a.x = r - (a.relative ? e : 0)),
                (a.y = n - (a.relative ? t : 0));
              break;
            case "a":
              (0 !== a.rx && 0 !== a.ry) ||
                ((a.type = "l"),
                delete a.rx,
                delete a.ry,
                delete a.xRotation,
                delete a.largeArc,
                delete a.sweep);
          }
          return (
            (e = (a.relative ? e : 0) + a.x),
            (t = (a.relative ? t : 0) + a.y),
            "m" === a.type && ((r = e), (n = t)),
            a
          );
        };
      }
      Object.defineProperty(t, "__esModule", { value: !0 }), (t.default = n);
    },
    function (e, t, r) {
      "use strict";
      function n() {
        var e =
            arguments.length > 0 && void 0 !== arguments[0]
              ? arguments[0]
              : "q",
          t = 0,
          r = 0,
          n = NaN,
          i = NaN;
        return function (o) {
          if (
            (isNaN(n) && (0, a.isDrawingSegment)(o.type) && ((n = t), (i = r)),
            "z" !== o.type ||
              isNaN(n) ||
              ((t = n), (r = i), (n = NaN), (i = NaN)),
            "l" === o.type)
          ) {
            var l = o.relative ? 0 : t,
              u = o.relative ? 0 : r;
            switch (((o.type = e), e)) {
              case "q":
                (o.x1 = (l + o.x) / 2), (o.y1 = (u + o.y) / 2);
                break;
              case "c":
                var y = (o.x - l) / 3,
                  f = (o.y - u) / 3;
                (o.x1 = l + y),
                  (o.y1 = u + f),
                  (o.x2 = l + 2 * y),
                  (o.y2 = u + 2 * f);
                break;
              default:
                throw new Error('Invalid curve type "' + e + '"');
            }
          }
          return (
            (t = "x" in o ? (o.relative ? t : 0) + o.x : t),
            (r = "y" in o ? (o.relative ? r : 0) + o.y : r),
            "m" === o.type && ((n = t), (i = r)),
            o
          );
        };
      }
      Object.defineProperty(t, "__esModule", { value: !0 }), (t.default = n);
      var a = r(0);
    },
    function (e, t, r) {
      "use strict";
      function n() {
        var e = 0,
          t = 0,
          r = NaN,
          n = NaN;
        return function (i) {
          var l = i;
          if (
            (isNaN(r) && (0, o.isDrawingSegment)(i.type) && ((r = e), (n = t)),
            "z" !== i.type ||
              isNaN(r) ||
              ((e = r), (t = n), (r = NaN), (n = NaN)),
            "a" === i.type)
          ) {
            var u = i.relative ? 0 : e,
              y = i.relative ? 0 : t,
              f = i.rx,
              c = i.ry,
              v = i.xRotation,
              p = i.largeArc,
              s = i.sweep,
              d = i.x,
              h = i.y,
              x = a(u, y, f, c, v, p, s, d, h),
              g = 0,
              m = 0,
              b = !0,
              N = !1,
              w = void 0;
            try {
              for (
                var P, M = x[Symbol.iterator]();
                !(b = (P = M.next()).done);
                b = !0
              ) {
                var _ = P.value;
                (_.relative = i.relative),
                  i.relative &&
                    "c" === _.type &&
                    ((_.x -= g),
                    (_.x1 -= g),
                    (_.x2 -= g),
                    (_.y -= m),
                    (_.y1 -= m),
                    (_.y2 -= m)),
                  (g = _.x),
                  (m = _.y);
              }
            } catch (e) {
              (N = !0), (w = e);
            } finally {
              try {
                !b && M.return && M.return();
              } finally {
                if (N) throw w;
              }
            }
            l = x;
          }
          return (
            (e = "x" in i ? (i.relative ? e : 0) + i.x : e),
            (t = "y" in i ? (i.relative ? t : 0) + i.y : t),
            "m" === i.type && ((r = e), (n = t)),
            l
          );
        };
      }
      function a(e, t, r, n, a, o, l, u, y) {
        if (e === u && t === y) return [];
        if (!r && !n) return [{ type: "l", x: u, y: y }];
        var f = Math.sin((a * Math.PI) / 180),
          c = Math.cos((a * Math.PI) / 180),
          v = (c * (e - u)) / 2 + (f * (t - y)) / 2,
          p = (-f * (e - u)) / 2 + (c * (t - y)) / 2,
          s = r * r,
          d = n * n,
          h = v * v,
          x = p * p,
          g = 0,
          m = s * d - s * x - d * h;
        if (m < 0) {
          var b = Math.sqrt(1 - m / (s * d));
          (r *= b), (n *= b);
        } else
          g =
            ((o && l) || (!o && !l) ? -1 : 1) * Math.sqrt(m / (s * x + d * h));
        var N = (g * r * p) / n,
          w = (-g * n * v) / r,
          P = c * N - f * w + (e + u) / 2,
          M = f * N + c * w + (t + y) / 2,
          _ = i(1, 0, (v - N) / r, (p - w) / n),
          A = i((v - N) / r, (p - w) / n, (-v - N) / r, (-p - w) / n);
        !l && A > 0 ? (A -= 2 * Math.PI) : l && A < 0 && (A += 2 * Math.PI);
        for (
          var S = [],
            j = Math.ceil(Math.abs(A / (Math.PI / 2))),
            O = A / j,
            k = ((8 / 3) * Math.sin(O / 4) * Math.sin(O / 4)) / Math.sin(O / 2),
            D = 0;
          D < j;
          D++
        ) {
          var q = Math.cos(_),
            E = Math.sin(_),
            I = _ + O,
            z = Math.cos(I),
            R = Math.sin(I),
            T = c * r * z - f * n * R + P,
            C = f * r * z + c * n * R + M,
            G = k * (-c * r * E - f * n * q),
            L = k * (-f * r * E + c * n * q),
            V = k * (c * r * R + f * n * z),
            J = k * (f * r * R - c * n * z);
          S.push({
            type: "c",
            x: T,
            y: C,
            x1: e + G,
            y1: t + L,
            x2: T + V,
            y2: C + J,
          }),
            (_ = I),
            (e = T),
            (t = C);
        }
        return S;
      }
      function i(e, t, r, n) {
        var a = Math.atan2(t, e),
          i = Math.atan2(n, r);
        return i >= a ? i - a : 2 * Math.PI - (a - i);
      }
      Object.defineProperty(t, "__esModule", { value: !0 }), (t.default = n);
      var o = r(0);
    },
    function (e, t, r) {
      "use strict";
      function n(e, t, r, n) {
        return [
          { type: "m", relative: !1, x: e, y: t },
          { type: "l", relative: !1, x: r, y: n },
        ];
      }
      function a() {
        for (var e = arguments.length, t = Array(e), r = 0; r < e; r++)
          t[r] = arguments[r];
        return t.map(function (e, t) {
          return {
            type: 0 === t ? "m" : "l",
            relative: !1,
            x: e.x || e[0],
            y: e.y || e[1],
          };
        });
      }
      function i() {
        var e = a.apply(void 0, arguments);
        return e.append({ type: "z", relative: !1 }), e;
      }
      function o(e, t, r, n) {
        var a =
            arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 0,
          i =
            arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : 0,
          o = void 0;
        if (a > 0 || i > 0) {
          (a = a || i), (i = i || a);
          o = [
            { type: "m", relative: !1, x: e + a, y: t },
            { type: "h", relative: !1, x: e + r - a },
            {
              type: "a",
              relative: !1,
              rx: a,
              ry: i,
              xRotation: 0,
              largeArc: !1,
              sweep: !0,
              x: e + r,
              y: t + i,
            },
            { type: "v", relative: !1, y: t + n - i },
            {
              type: "a",
              relative: !1,
              rx: a,
              ry: i,
              xRotation: 0,
              largeArc: !1,
              sweep: !0,
              x: e + r - a,
              y: t + n,
            },
            { type: "h", relative: !1, x: e + a },
            {
              type: "a",
              relative: !1,
              rx: a,
              ry: i,
              xRotation: 0,
              largeArc: !1,
              sweep: !0,
              x: e,
              y: t + n - i,
            },
            { type: "v", relative: !1, y: t + i },
            {
              type: "a",
              relative: !1,
              rx: a,
              ry: i,
              xRotation: 0,
              largeArc: !1,
              sweep: !0,
              x: e + a,
              y: t,
            },
          ];
        } else
          o = [
            { type: "m", relative: !1, x: e, y: t },
            { type: "h", relative: !1, x: e + r },
            { type: "v", relative: !1, y: t + n },
            { type: "h", relative: !1, x: e },
            { type: "v", relative: !1, y: t },
          ];
        return o;
      }
      function l(e, t, r, n) {
        return [
          { type: "m", relative: !1, x: e, y: t - n },
          {
            type: "a",
            relative: !1,
            rx: r,
            ry: n,
            xRotation: 0,
            largeArc: !1,
            sweep: !0,
            x: e,
            y: t + n,
          },
          {
            type: "a",
            relative: !1,
            rx: r,
            ry: n,
            xRotation: 0,
            largeArc: !1,
            sweep: !0,
            x: e,
            y: t - n,
          },
        ];
      }
      function u(e, t, r) {
        return l(e, t, r, r);
      }
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.line = n),
        (t.polyline = a),
        (t.polygon = i),
        (t.rectangle = o),
        (t.ellipse = l),
        (t.circle = u);
    },
    function (e, t, r) {
      "use strict";
      function n(e) {
        if (Array.isArray(e)) {
          for (var t = 0, r = Array(e.length); t < e.length; t++) r[t] = e[t];
          return r;
        }
        return Array.from(e);
      }
      function a(e, t) {
        return (0, l.default)(e, function (e) {
          for (var r = 0; r < u.pointGroups.length; r++) {
            var a = i(u.pointGroups[r], 2),
              o = a[0],
              l = a[1];
            if (o in e && l in e) {
              var y = (e.extended ? e.extended[r] : null) || [],
                f = [e[o], e[l]].concat(n(y)),
                c = t.reduce(function (e, t) {
                  return t(e);
                }, f);
              if (c.length < 2)
                throw new Error("Transformer must return at least 2 points");
              (e[o] = c[0]),
                (e[l] = c[1]),
                c.length > 2 &&
                  ((e.extended = e.extended || {}),
                  (e.extended[r] = c.slice(2)));
            }
          }
          return e;
        });
      }
      Object.defineProperty(t, "__esModule", { value: !0 });
      var i = (function () {
        function e(e, t) {
          var r = [],
            n = !0,
            a = !1,
            i = void 0;
          try {
            for (
              var o, l = e[Symbol.iterator]();
              !(n = (o = l.next()).done) &&
              (r.push(o.value), !t || r.length !== t);
              n = !0
            );
          } catch (e) {
            (a = !0), (i = e);
          } finally {
            try {
              !n && l.return && l.return();
            } finally {
              if (a) throw i;
            }
          }
          return r;
        }
        return function (t, r) {
          if (Array.isArray(t)) return t;
          if (Symbol.iterator in Object(t)) return e(t, r);
          throw new TypeError(
            "Invalid attempt to destructure non-iterable instance"
          );
        };
      })();
      t.default = a;
      var o = r(1),
        l = (function (e) {
          return e && e.__esModule ? e : { default: e };
        })(o),
        u = r(0);
    },
    function (e, t, r) {
      "use strict";
      function n(e) {
        if (Array.isArray(e)) {
          for (var t = 0, r = Array(e.length); t < e.length; t++) r[t] = e[t];
          return r;
        }
        return Array.from(e);
      }
      function a(e, t, r) {
        var a = [];
        return (0, l.default)(e, function (e) {
          var o = e;
          if (f.test(e.type)) {
            for (var l = [a], c = 0; c < y.pointGroups.length; c++) {
              var v = i(y.pointGroups[c], 2),
                p = v[0],
                s = v[1];
              if (p in e && s in e) {
                var d = (e.extended ? e.extended[c] : null) || [],
                  h = [e[p], e[s]].concat(n(d));
                l.push(h);
              }
            }
            var x = (0, u.until)(l, t, r);
            x.length > 1 &&
              (o = x.map(function (e) {
                return (0, y.createLineSegment)(e);
              }));
          }
          if ("x" in e && "y" in e) {
            var g = (e.extended ? e.extended[2] : null) || [],
              m = [e.x, e.y].concat(n(g));
            a = m;
          }
          return o;
        });
      }
      Object.defineProperty(t, "__esModule", { value: !0 });
      var i = (function () {
        function e(e, t) {
          var r = [],
            n = !0,
            a = !1,
            i = void 0;
          try {
            for (
              var o, l = e[Symbol.iterator]();
              !(n = (o = l.next()).done) &&
              (r.push(o.value), !t || r.length !== t);
              n = !0
            );
          } catch (e) {
            (a = !0), (i = e);
          } finally {
            try {
              !n && l.return && l.return();
            } finally {
              if (a) throw i;
            }
          }
          return r;
        }
        return function (t, r) {
          if (Array.isArray(t)) return t;
          if (Symbol.iterator in Object(t)) return e(t, r);
          throw new TypeError(
            "Invalid attempt to destructure non-iterable instance"
          );
        };
      })();
      t.default = a;
      var o = r(1),
        l = (function (e) {
          return e && e.__esModule ? e : { default: e };
        })(o),
        u = r(5),
        y = r(0),
        f = /[lqc]/;
    },
    function (e, t, r) {
      "use strict";
      function n(e, t, r) {
        return (0, i.default)(e, function (e, n, a, i) {
          if (n > 1) {
            var u = i[i.length - 1],
              y = i[i.length - 2];
            if (l.test(e.type) && u.type === e.type) {
              var f = [
                [y.x, y.y],
                [e.x, e.y],
              ];
              if (r(f) <= t) {
                var c = (0, o.joinSegments)(u, e);
                if (c) return (i[i.length - 1] = c), !1;
              }
            }
          }
          return e;
        });
      }
      Object.defineProperty(t, "__esModule", { value: !0 }), (t.default = n);
      var a = r(1),
        i = (function (e) {
          return e && e.__esModule ? e : { default: e };
        })(a),
        o = r(0),
        l = /[lqc]/;
    },
  ]);
});
//# sourceMappingURL=warp.js.map
