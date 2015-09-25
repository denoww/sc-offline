! function(e, t) {
  function n(e) {
    var t = e.length,
      n = lt.type(e);
    return lt.isWindow(e) ? !1 : 1 === e.nodeType && t ? !0 : "array" === n || "function" !== n && (0 === t || "number" == typeof t && t > 0 && t - 1 in e)
  }

  function r(e) {
    var t = St[e] = {};
    return lt.each(e.match(dt) || [], function(e, n) {
      t[n] = !0
    }), t
  }

  function i(e, n, r, i) {
    if (lt.acceptData(e)) {
      var o, a, s = lt.expando,
        u = e.nodeType,
        c = u ? lt.cache : e,
        l = u ? e[s] : e[s] && s;
      if (l && c[l] && (i || c[l].data) || r !== t || "string" != typeof n) return l || (l = u ? e[s] = tt.pop() || lt.guid++ : s), c[l] || (c[l] = u ? {} : {
        toJSON: lt.noop
      }), ("object" == typeof n || "function" == typeof n) && (i ? c[l] = lt.extend(c[l], n) : c[l].data = lt.extend(c[l].data, n)), a = c[l], i || (a.data || (a.data = {}), a = a.data), r !== t && (a[lt.camelCase(n)] = r), "string" == typeof n ? (o = a[n], null == o && (o = a[lt.camelCase(n)])) : o = a, o
    }
  }

  function o(e, t, n) {
    if (lt.acceptData(e)) {
      var r, i, o = e.nodeType,
        a = o ? lt.cache : e,
        u = o ? e[lt.expando] : lt.expando;
      if (a[u]) {
        if (t && (r = n ? a[u] : a[u].data)) {
          lt.isArray(t) ? t = t.concat(lt.map(t, lt.camelCase)) : t in r ? t = [t] : (t = lt.camelCase(t), t = t in r ? [t] : t.split(" ")), i = t.length;
          for (; i--;) delete r[t[i]];
          if (n ? !s(r) : !lt.isEmptyObject(r)) return
        }(n || (delete a[u].data, s(a[u]))) && (o ? lt.cleanData([e], !0) : lt.support.deleteExpando || a != a.window ? delete a[u] : a[u] = null)
      }
    }
  }

  function a(e, n, r) {
    if (r === t && 1 === e.nodeType) {
      var i = "data-" + n.replace(Tt, "-$1").toLowerCase();
      if (r = e.getAttribute(i), "string" == typeof r) {
        try {
          r = "true" === r ? !0 : "false" === r ? !1 : "null" === r ? null : +r + "" === r ? +r : Ct.test(r) ? lt.parseJSON(r) : r
        } catch (o) {}
        lt.data(e, n, r)
      } else r = t
    }
    return r
  }

  function s(e) {
    var t;
    for (t in e)
      if (("data" !== t || !lt.isEmptyObject(e[t])) && "toJSON" !== t) return !1;
    return !0
  }

  function u() {
    return !0
  }

  function c() {
    return !1
  }

  function l() {
    try {
      return X.activeElement
    } catch (e) {}
  }

  function f(e, t) {
    do e = e[t]; while (e && 1 !== e.nodeType);
    return e
  }

  function d(e, t, n) {
    if (lt.isFunction(t)) return lt.grep(e, function(e, r) {
      return !!t.call(e, r, e) !== n
    });
    if (t.nodeType) return lt.grep(e, function(e) {
      return e === t !== n
    });
    if ("string" == typeof t) {
      if (Ut.test(t)) return lt.filter(t, e, n);
      t = lt.filter(t, e)
    }
    return lt.grep(e, function(e) {
      return lt.inArray(e, t) >= 0 !== n
    })
  }

  function h(e) {
    var t = Vt.split("|"),
      n = e.createDocumentFragment();
    if (n.createElement)
      for (; t.length;) n.createElement(t.pop());
    return n
  }

  function p(e, t) {
    return lt.nodeName(e, "table") && lt.nodeName(1 === t.nodeType ? t : t.firstChild, "tr") ? e.getElementsByTagName("tbody")[0] || e.appendChild(e.ownerDocument.createElement("tbody")) : e
  }

  function m(e) {
    return e.type = (null !== lt.find.attr(e, "type")) + "/" + e.type, e
  }

  function g(e) {
    var t = on.exec(e.type);
    return t ? e.type = t[1] : e.removeAttribute("type"), e
  }

  function v(e, t) {
    for (var n, r = 0; null != (n = e[r]); r++) lt._data(n, "globalEval", !t || lt._data(t[r], "globalEval"))
  }

  function y(e, t) {
    if (1 === t.nodeType && lt.hasData(e)) {
      var n, r, i, o = lt._data(e),
        a = lt._data(t, o),
        s = o.events;
      if (s) {
        delete a.handle, a.events = {};
        for (n in s)
          for (r = 0, i = s[n].length; i > r; r++) lt.event.add(t, n, s[n][r])
      }
      a.data && (a.data = lt.extend({}, a.data))
    }
  }

  function $(e, t) {
    var n, r, i;
    if (1 === t.nodeType) {
      if (n = t.nodeName.toLowerCase(), !lt.support.noCloneEvent && t[lt.expando]) {
        i = lt._data(t);
        for (r in i.events) lt.removeEvent(t, r, i.handle);
        t.removeAttribute(lt.expando)
      }
      "script" === n && t.text !== e.text ? (m(t).text = e.text, g(t)) : "object" === n ? (t.parentNode && (t.outerHTML = e.outerHTML), lt.support.html5Clone && e.innerHTML && !lt.trim(t.innerHTML) && (t.innerHTML = e.innerHTML)) : "input" === n && tn.test(e.type) ? (t.defaultChecked = t.checked = e.checked, t.value !== e.value && (t.value = e.value)) : "option" === n ? t.defaultSelected = t.selected = e.defaultSelected : ("input" === n || "textarea" === n) && (t.defaultValue = e.defaultValue)
    }
  }

  function b(e, n) {
    var r, i, o = 0,
      a = typeof e.getElementsByTagName !== G ? e.getElementsByTagName(n || "*") : typeof e.querySelectorAll !== G ? e.querySelectorAll(n || "*") : t;
    if (!a)
      for (a = [], r = e.childNodes || e; null != (i = r[o]); o++) !n || lt.nodeName(i, n) ? a.push(i) : lt.merge(a, b(i, n));
    return n === t || n && lt.nodeName(e, n) ? lt.merge([e], a) : a
  }

  function w(e) {
    tn.test(e.type) && (e.defaultChecked = e.checked)
  }

  function x(e, t) {
    if (t in e) return t;
    for (var n = t.charAt(0).toUpperCase() + t.slice(1), r = t, i = Sn.length; i--;)
      if (t = Sn[i] + n, t in e) return t;
    return r
  }

  function _(e, t) {
    return e = t || e, "none" === lt.css(e, "display") || !lt.contains(e.ownerDocument, e)
  }

  function k(e, t) {
    for (var n, r, i, o = [], a = 0, s = e.length; s > a; a++) r = e[a], r.style && (o[a] = lt._data(r, "olddisplay"), n = r.style.display, t ? (o[a] || "none" !== n || (r.style.display = ""), "" === r.style.display && _(r) && (o[a] = lt._data(r, "olddisplay", M(r.nodeName)))) : o[a] || (i = _(r), (n && "none" !== n || !i) && lt._data(r, "olddisplay", i ? n : lt.css(r, "display"))));
    for (a = 0; s > a; a++) r = e[a], r.style && (t && "none" !== r.style.display && "" !== r.style.display || (r.style.display = t ? o[a] || "" : "none"));
    return e
  }

  function S(e, t, n) {
    var r = yn.exec(t);
    return r ? Math.max(0, r[1] - (n || 0)) + (r[2] || "px") : t
  }

  function C(e, t, n, r, i) {
    for (var o = n === (r ? "border" : "content") ? 4 : "width" === t ? 1 : 0, a = 0; 4 > o; o += 2) "margin" === n && (a += lt.css(e, n + kn[o], !0, i)), r ? ("content" === n && (a -= lt.css(e, "padding" + kn[o], !0, i)), "margin" !== n && (a -= lt.css(e, "border" + kn[o] + "Width", !0, i))) : (a += lt.css(e, "padding" + kn[o], !0, i), "padding" !== n && (a += lt.css(e, "border" + kn[o] + "Width", !0, i)));
    return a
  }

  function T(e, t, n) {
    var r = !0,
      i = "width" === t ? e.offsetWidth : e.offsetHeight,
      o = fn(e),
      a = lt.support.boxSizing && "border-box" === lt.css(e, "boxSizing", !1, o);
    if (0 >= i || null == i) {
      if (i = dn(e, t, o), (0 > i || null == i) && (i = e.style[t]), $n.test(i)) return i;
      r = a && (lt.support.boxSizingReliable || i === e.style[t]), i = parseFloat(i) || 0
    }
    return i + C(e, t, n || (a ? "border" : "content"), r, o) + "px"
  }

  function M(e) {
    var t = X,
      n = wn[e];
    return n || (n = A(e, t), "none" !== n && n || (ln = (ln || lt("<iframe frameborder='0' width='0' height='0'/>").css("cssText", "display:block !important")).appendTo(t.documentElement), t = (ln[0].contentWindow || ln[0].contentDocument).document, t.write("<!doctype html><html><body>"), t.close(), n = A(e, t), ln.detach()), wn[e] = n), n
  }

  function A(e, t) {
    var n = lt(t.createElement(e)).appendTo(t.body),
      r = lt.css(n[0], "display");
    return n.remove(), r
  }

  function E(e, t, n, r) {
    var i;
    if (lt.isArray(t)) lt.each(t, function(t, i) {
      n || Tn.test(e) ? r(e, i) : E(e + "[" + ("object" == typeof i ? t : "") + "]", i, n, r)
    });
    else if (n || "object" !== lt.type(t)) r(e, t);
    else
      for (i in t) E(e + "[" + i + "]", t[i], n, r)
  }

  function D(e) {
    return function(t, n) {
      "string" != typeof t && (n = t, t = "*");
      var r, i = 0,
        o = t.toLowerCase().match(dt) || [];
      if (lt.isFunction(n))
        for (; r = o[i++];) "+" === r[0] ? (r = r.slice(1) || "*", (e[r] = e[r] || []).unshift(n)) : (e[r] = e[r] || []).push(n)
    }
  }

  function O(e, n, r, i) {
    function o(u) {
      var c;
      return a[u] = !0, lt.each(e[u] || [], function(e, u) {
        var l = u(n, r, i);
        return "string" != typeof l || s || a[l] ? s ? !(c = l) : t : (n.dataTypes.unshift(l), o(l), !1)
      }), c
    }
    var a = {},
      s = e === zn;
    return o(n.dataTypes[0]) || !a["*"] && o("*")
  }

  function N(e, n) {
    var r, i, o = lt.ajaxSettings.flatOptions || {};
    for (i in n) n[i] !== t && ((o[i] ? e : r || (r = {}))[i] = n[i]);
    return r && lt.extend(!0, e, r), e
  }

  function P(e, n, r) {
    for (var i, o, a, s, u = e.contents, c = e.dataTypes;
      "*" === c[0];) c.shift(), o === t && (o = e.mimeType || n.getResponseHeader("Content-Type"));
    if (o)
      for (s in u)
        if (u[s] && u[s].test(o)) {
          c.unshift(s);
          break
        }
    if (c[0] in r) a = c[0];
    else {
      for (s in r) {
        if (!c[0] || e.converters[s + " " + c[0]]) {
          a = s;
          break
        }
        i || (i = s)
      }
      a = a || i
    }
    return a ? (a !== c[0] && c.unshift(a), r[a]) : t
  }

  function j(e, t, n, r) {
    var i, o, a, s, u, c = {},
      l = e.dataTypes.slice();
    if (l[1])
      for (a in e.converters) c[a.toLowerCase()] = e.converters[a];
    for (o = l.shift(); o;)
      if (e.responseFields[o] && (n[e.responseFields[o]] = t), !u && r && e.dataFilter && (t = e.dataFilter(t, e.dataType)), u = o, o = l.shift())
        if ("*" === o) o = u;
        else if ("*" !== u && u !== o) {
      if (a = c[u + " " + o] || c["* " + o], !a)
        for (i in c)
          if (s = i.split(" "), s[1] === o && (a = c[u + " " + s[0]] || c["* " + s[0]])) {
            a === !0 ? a = c[i] : c[i] !== !0 && (o = s[0], l.unshift(s[1]));
            break
          }
      if (a !== !0)
        if (a && e["throws"]) t = a(t);
        else try {
          t = a(t)
        } catch (f) {
          return {
            state: "parsererror",
            error: a ? f : "No conversion from " + u + " to " + o
          }
        }
    }
    return {
      state: "success",
      data: t
    }
  }

  function F() {
    try {
      return new e.XMLHttpRequest
    } catch (t) {}
  }

  function I() {
    try {
      return new e.ActiveXObject("Microsoft.XMLHTTP")
    } catch (t) {}
  }

  function q() {
    return setTimeout(function() {
      Jn = t
    }), Jn = lt.now()
  }

  function R(e, t, n) {
    for (var r, i = (or[t] || []).concat(or["*"]), o = 0, a = i.length; a > o; o++)
      if (r = i[o].call(n, t, e)) return r
  }

  function L(e, t, n) {
    var r, i, o = 0,
      a = ir.length,
      s = lt.Deferred().always(function() {
        delete u.elem
      }),
      u = function() {
        if (i) return !1;
        for (var t = Jn || q(), n = Math.max(0, c.startTime + c.duration - t), r = n / c.duration || 0, o = 1 - r, a = 0, u = c.tweens.length; u > a; a++) c.tweens[a].run(o);
        return s.notifyWith(e, [c, o, n]), 1 > o && u ? n : (s.resolveWith(e, [c]), !1)
      },
      c = s.promise({
        elem: e,
        props: lt.extend({}, t),
        opts: lt.extend(!0, {
          specialEasing: {}
        }, n),
        originalProperties: t,
        originalOptions: n,
        startTime: Jn || q(),
        duration: n.duration,
        tweens: [],
        createTween: function(t, n) {
          var r = lt.Tween(e, c.opts, t, n, c.opts.specialEasing[t] || c.opts.easing);
          return c.tweens.push(r), r
        },
        stop: function(t) {
          var n = 0,
            r = t ? c.tweens.length : 0;
          if (i) return this;
          for (i = !0; r > n; n++) c.tweens[n].run(1);
          return t ? s.resolveWith(e, [c, t]) : s.rejectWith(e, [c, t]), this
        }
      }),
      l = c.props;
    for (H(l, c.opts.specialEasing); a > o; o++)
      if (r = ir[o].call(c, e, l, c.opts)) return r;
    return lt.map(l, R, c), lt.isFunction(c.opts.start) && c.opts.start.call(e, c), lt.fx.timer(lt.extend(u, {
      elem: e,
      anim: c,
      queue: c.opts.queue
    })), c.progress(c.opts.progress).done(c.opts.done, c.opts.complete).fail(c.opts.fail).always(c.opts.always)
  }

  function H(e, t) {
    var n, r, i, o, a;
    for (n in e)
      if (r = lt.camelCase(n), i = t[r], o = e[n], lt.isArray(o) && (i = o[1], o = e[n] = o[0]), n !== r && (e[r] = o, delete e[n]), a = lt.cssHooks[r], a && "expand" in a) {
        o = a.expand(o), delete e[r];
        for (n in o) n in e || (e[n] = o[n], t[n] = i)
      } else t[r] = i
  }

  function U(e, t, n) {
    var r, i, o, a, s, u, c = this,
      l = {},
      f = e.style,
      d = e.nodeType && _(e),
      h = lt._data(e, "fxshow");
    n.queue || (s = lt._queueHooks(e, "fx"), null == s.unqueued && (s.unqueued = 0, u = s.empty.fire, s.empty.fire = function() {
      s.unqueued || u()
    }), s.unqueued++, c.always(function() {
      c.always(function() {
        s.unqueued--, lt.queue(e, "fx").length || s.empty.fire()
      })
    })), 1 === e.nodeType && ("height" in t || "width" in t) && (n.overflow = [f.overflow, f.overflowX, f.overflowY], "inline" === lt.css(e, "display") && "none" === lt.css(e, "float") && (lt.support.inlineBlockNeedsLayout && "inline" !== M(e.nodeName) ? f.zoom = 1 : f.display = "inline-block")), n.overflow && (f.overflow = "hidden", lt.support.shrinkWrapBlocks || c.always(function() {
      f.overflow = n.overflow[0], f.overflowX = n.overflow[1], f.overflowY = n.overflow[2]
    }));
    for (r in t)
      if (i = t[r], tr.exec(i)) {
        if (delete t[r], o = o || "toggle" === i, i === (d ? "hide" : "show")) continue;
        l[r] = h && h[r] || lt.style(e, r)
      }
    if (!lt.isEmptyObject(l)) {
      h ? "hidden" in h && (d = h.hidden) : h = lt._data(e, "fxshow", {}), o && (h.hidden = !d), d ? lt(e).show() : c.done(function() {
        lt(e).hide()
      }), c.done(function() {
        var t;
        lt._removeData(e, "fxshow");
        for (t in l) lt.style(e, t, l[t])
      });
      for (r in l) a = R(d ? h[r] : 0, r, c), r in h || (h[r] = a.start, d && (a.end = a.start, a.start = "width" === r || "height" === r ? 1 : 0))
    }
  }

  function Y(e, t, n, r, i) {
    return new Y.prototype.init(e, t, n, r, i)
  }

  function z(e, t) {
    var n, r = {
        height: e
      },
      i = 0;
    for (t = t ? 1 : 0; 4 > i; i += 2 - t) n = kn[i], r["margin" + n] = r["padding" + n] = e;
    return t && (r.opacity = r.width = e), r
  }

  function B(e) {
    return lt.isWindow(e) ? e : 9 === e.nodeType ? e.defaultView || e.parentWindow : !1
  }
  var V, W, G = typeof t,
    Q = e.location,
    X = e.document,
    Z = X.documentElement,
    K = e.jQuery,
    J = e.$,
    et = {},
    tt = [],
    nt = "1.10.2",
    rt = tt.concat,
    it = tt.push,
    ot = tt.slice,
    at = tt.indexOf,
    st = et.toString,
    ut = et.hasOwnProperty,
    ct = nt.trim,
    lt = function(e, t) {
      return new lt.fn.init(e, t, W)
    },
    ft = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,
    dt = /\S+/g,
    ht = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,
    pt = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]*))$/,
    mt = /^<(\w+)\s*\/?>(?:<\/\1>|)$/,
    gt = /^[\],:{}\s]*$/,
    vt = /(?:^|:|,)(?:\s*\[)+/g,
    yt = /\\(?:["\\\/bfnrt]|u[\da-fA-F]{4})/g,
    $t = /"[^"\\\r\n]*"|true|false|null|-?(?:\d+\.|)\d+(?:[eE][+-]?\d+|)/g,
    bt = /^-ms-/,
    wt = /-([\da-z])/gi,
    xt = function(e, t) {
      return t.toUpperCase()
    },
    _t = function(e) {
      (X.addEventListener || "load" === e.type || "complete" === X.readyState) && (kt(), lt.ready())
    },
    kt = function() {
      X.addEventListener ? (X.removeEventListener("DOMContentLoaded", _t, !1), e.removeEventListener("load", _t, !1)) : (X.detachEvent("onreadystatechange", _t), e.detachEvent("onload", _t))
    };
  lt.fn = lt.prototype = {
      jquery: nt,
      constructor: lt,
      init: function(e, n, r) {
        var i, o;
        if (!e) return this;
        if ("string" == typeof e) {
          if (i = "<" === e.charAt(0) && ">" === e.charAt(e.length - 1) && e.length >= 3 ? [null, e, null] : pt.exec(e), !i || !i[1] && n) return !n || n.jquery ? (n || r).find(e) : this.constructor(n).find(e);
          if (i[1]) {
            if (n = n instanceof lt ? n[0] : n, lt.merge(this, lt.parseHTML(i[1], n && n.nodeType ? n.ownerDocument || n : X, !0)), mt.test(i[1]) && lt.isPlainObject(n))
              for (i in n) lt.isFunction(this[i]) ? this[i](n[i]) : this.attr(i, n[i]);
            return this
          }
          if (o = X.getElementById(i[2]), o && o.parentNode) {
            if (o.id !== i[2]) return r.find(e);
            this.length = 1, this[0] = o
          }
          return this.context = X, this.selector = e, this
        }
        return e.nodeType ? (this.context = this[0] = e, this.length = 1, this) : lt.isFunction(e) ? r.ready(e) : (e.selector !== t && (this.selector = e.selector, this.context = e.context), lt.makeArray(e, this))
      },
      selector: "",
      length: 0,
      toArray: function() {
        return ot.call(this)
      },
      get: function(e) {
        return null == e ? this.toArray() : 0 > e ? this[this.length + e] : this[e]
      },
      pushStack: function(e) {
        var t = lt.merge(this.constructor(), e);
        return t.prevObject = this, t.context = this.context, t
      },
      each: function(e, t) {
        return lt.each(this, e, t)
      },
      ready: function(e) {
        return lt.ready.promise().done(e), this
      },
      slice: function() {
        return this.pushStack(ot.apply(this, arguments))
      },
      first: function() {
        return this.eq(0)
      },
      last: function() {
        return this.eq(-1)
      },
      eq: function(e) {
        var t = this.length,
          n = +e + (0 > e ? t : 0);
        return this.pushStack(n >= 0 && t > n ? [this[n]] : [])
      },
      map: function(e) {
        return this.pushStack(lt.map(this, function(t, n) {
          return e.call(t, n, t)
        }))
      },
      end: function() {
        return this.prevObject || this.constructor(null)
      },
      push: it,
      sort: [].sort,
      splice: [].splice
    }, lt.fn.init.prototype = lt.fn, lt.extend = lt.fn.extend = function() {
      var e, n, r, i, o, a, s = arguments[0] || {},
        u = 1,
        c = arguments.length,
        l = !1;
      for ("boolean" == typeof s && (l = s, s = arguments[1] || {}, u = 2), "object" == typeof s || lt.isFunction(s) || (s = {}), c === u && (s = this, --u); c > u; u++)
        if (null != (o = arguments[u]))
          for (i in o) e = s[i], r = o[i], s !== r && (l && r && (lt.isPlainObject(r) || (n = lt.isArray(r))) ? (n ? (n = !1, a = e && lt.isArray(e) ? e : []) : a = e && lt.isPlainObject(e) ? e : {}, s[i] = lt.extend(l, a, r)) : r !== t && (s[i] = r));
      return s
    }, lt.extend({
      expando: "jQuery" + (nt + Math.random()).replace(/\D/g, ""),
      noConflict: function(t) {
        return e.$ === lt && (e.$ = J), t && e.jQuery === lt && (e.jQuery = K), lt
      },
      isReady: !1,
      readyWait: 1,
      holdReady: function(e) {
        e ? lt.readyWait++ : lt.ready(!0)
      },
      ready: function(e) {
        if (e === !0 ? !--lt.readyWait : !lt.isReady) {
          if (!X.body) return setTimeout(lt.ready);
          lt.isReady = !0, e !== !0 && --lt.readyWait > 0 || (V.resolveWith(X, [lt]), lt.fn.trigger && lt(X).trigger("ready").off("ready"))
        }
      },
      isFunction: function(e) {
        return "function" === lt.type(e)
      },
      isArray: Array.isArray || function(e) {
        return "array" === lt.type(e)
      },
      isWindow: function(e) {
        return null != e && e == e.window
      },
      isNumeric: function(e) {
        return !isNaN(parseFloat(e)) && isFinite(e)
      },
      type: function(e) {
        return null == e ? e + "" : "object" == typeof e || "function" == typeof e ? et[st.call(e)] || "object" : typeof e
      },
      isPlainObject: function(e) {
        var n;
        if (!e || "object" !== lt.type(e) || e.nodeType || lt.isWindow(e)) return !1;
        try {
          if (e.constructor && !ut.call(e, "constructor") && !ut.call(e.constructor.prototype, "isPrototypeOf")) return !1
        } catch (r) {
          return !1
        }
        if (lt.support.ownLast)
          for (n in e) return ut.call(e, n);
        for (n in e);
        return n === t || ut.call(e, n)
      },
      isEmptyObject: function(e) {
        var t;
        for (t in e) return !1;
        return !0
      },
      error: function(e) {
        throw Error(e)
      },
      parseHTML: function(e, t, n) {
        if (!e || "string" != typeof e) return null;
        "boolean" == typeof t && (n = t, t = !1), t = t || X;
        var r = mt.exec(e),
          i = !n && [];
        return r ? [t.createElement(r[1])] : (r = lt.buildFragment([e], t, i), i && lt(i).remove(), lt.merge([], r.childNodes))
      },
      parseJSON: function(n) {
        return e.JSON && e.JSON.parse ? e.JSON.parse(n) : null === n ? n : "string" == typeof n && (n = lt.trim(n), n && gt.test(n.replace(yt, "@").replace($t, "]").replace(vt, ""))) ? Function("return " + n)() : (lt.error("Invalid JSON: " + n), t)
      },
      parseXML: function(n) {
        var r, i;
        if (!n || "string" != typeof n) return null;
        try {
          e.DOMParser ? (i = new DOMParser, r = i.parseFromString(n, "text/xml")) : (r = new ActiveXObject("Microsoft.XMLDOM"), r.async = "false", r.loadXML(n))
        } catch (o) {
          r = t
        }
        return r && r.documentElement && !r.getElementsByTagName("parsererror").length || lt.error("Invalid XML: " + n), r
      },
      noop: function() {},
      globalEval: function(t) {
        t && lt.trim(t) && (e.execScript || function(t) {
          e.eval.call(e, t)
        })(t)
      },
      camelCase: function(e) {
        return e.replace(bt, "ms-").replace(wt, xt)
      },
      nodeName: function(e, t) {
        return e.nodeName && e.nodeName.toLowerCase() === t.toLowerCase()
      },
      each: function(e, t, r) {
        var i, o = 0,
          a = e.length,
          s = n(e);
        if (r) {
          if (s)
            for (; a > o && (i = t.apply(e[o], r), i !== !1); o++);
          else
            for (o in e)
              if (i = t.apply(e[o], r), i === !1) break
        } else if (s)
          for (; a > o && (i = t.call(e[o], o, e[o]), i !== !1); o++);
        else
          for (o in e)
            if (i = t.call(e[o], o, e[o]), i === !1) break; return e
      },
      trim: ct && !ct.call("\ufeff\xa0") ? function(e) {
        return null == e ? "" : ct.call(e)
      } : function(e) {
        return null == e ? "" : (e + "").replace(ht, "")
      },
      makeArray: function(e, t) {
        var r = t || [];
        return null != e && (n(Object(e)) ? lt.merge(r, "string" == typeof e ? [e] : e) : it.call(r, e)), r
      },
      inArray: function(e, t, n) {
        var r;
        if (t) {
          if (at) return at.call(t, e, n);
          for (r = t.length, n = n ? 0 > n ? Math.max(0, r + n) : n : 0; r > n; n++)
            if (n in t && t[n] === e) return n
        }
        return -1
      },
      merge: function(e, n) {
        var r = n.length,
          i = e.length,
          o = 0;
        if ("number" == typeof r)
          for (; r > o; o++) e[i++] = n[o];
        else
          for (; n[o] !== t;) e[i++] = n[o++];
        return e.length = i, e
      },
      grep: function(e, t, n) {
        var r, i = [],
          o = 0,
          a = e.length;
        for (n = !!n; a > o; o++) r = !!t(e[o], o), n !== r && i.push(e[o]);
        return i
      },
      map: function(e, t, r) {
        var i, o = 0,
          a = e.length,
          s = n(e),
          u = [];
        if (s)
          for (; a > o; o++) i = t(e[o], o, r), null != i && (u[u.length] = i);
        else
          for (o in e) i = t(e[o], o, r), null != i && (u[u.length] = i);
        return rt.apply([], u)
      },
      guid: 1,
      proxy: function(e, n) {
        var r, i, o;
        return "string" == typeof n && (o = e[n], n = e, e = o), lt.isFunction(e) ? (r = ot.call(arguments, 2), i = function() {
          return e.apply(n || this, r.concat(ot.call(arguments)))
        }, i.guid = e.guid = e.guid || lt.guid++, i) : t
      },
      access: function(e, n, r, i, o, a, s) {
        var u = 0,
          c = e.length,
          l = null == r;
        if ("object" === lt.type(r)) {
          o = !0;
          for (u in r) lt.access(e, n, u, r[u], !0, a, s)
        } else if (i !== t && (o = !0, lt.isFunction(i) || (s = !0), l && (s ? (n.call(e, i), n = null) : (l = n, n = function(e, t, n) {
            return l.call(lt(e), n)
          })), n))
          for (; c > u; u++) n(e[u], r, s ? i : i.call(e[u], u, n(e[u], r)));
        return o ? e : l ? n.call(e) : c ? n(e[0], r) : a
      },
      now: function() {
        return (new Date).getTime()
      },
      swap: function(e, t, n, r) {
        var i, o, a = {};
        for (o in t) a[o] = e.style[o], e.style[o] = t[o];
        i = n.apply(e, r || []);
        for (o in t) e.style[o] = a[o];
        return i
      }
    }), lt.ready.promise = function(t) {
      if (!V)
        if (V = lt.Deferred(), "complete" === X.readyState) setTimeout(lt.ready);
        else if (X.addEventListener) X.addEventListener("DOMContentLoaded", _t, !1), e.addEventListener("load", _t, !1);
      else {
        X.attachEvent("onreadystatechange", _t), e.attachEvent("onload", _t);
        var n = !1;
        try {
          n = null == e.frameElement && X.documentElement
        } catch (r) {}
        n && n.doScroll && function i() {
          if (!lt.isReady) {
            try {
              n.doScroll("left")
            } catch (e) {
              return setTimeout(i, 50)
            }
            kt(), lt.ready()
          }
        }()
      }
      return V.promise(t)
    }, lt.each("Boolean Number String Function Array Date RegExp Object Error".split(" "), function(e, t) {
      et["[object " + t + "]"] = t.toLowerCase()
    }), W = lt(X),
    function(e, t) {
      function n(e, t, n, r) {
        var i, o, a, s, u, c, l, f, p, m;
        if ((t ? t.ownerDocument || t : L) !== O && D(t), t = t || O, n = n || [], !e || "string" != typeof e) return n;
        if (1 !== (s = t.nodeType) && 9 !== s) return [];
        if (P && !r) {
          if (i = $t.exec(e))
            if (a = i[1]) {
              if (9 === s) {
                if (o = t.getElementById(a), !o || !o.parentNode) return n;
                if (o.id === a) return n.push(o), n
              } else if (t.ownerDocument && (o = t.ownerDocument.getElementById(a)) && q(t, o) && o.id === a) return n.push(o), n
            } else {
              if (i[2]) return et.apply(n, t.getElementsByTagName(e)), n;
              if ((a = i[3]) && _.getElementsByClassName && t.getElementsByClassName) return et.apply(n, t.getElementsByClassName(a)), n
            }
          if (_.qsa && (!j || !j.test(e))) {
            if (f = l = R, p = t, m = 9 === s && e, 1 === s && "object" !== t.nodeName.toLowerCase()) {
              for (c = d(e), (l = t.getAttribute("id")) ? f = l.replace(xt, "\\$&") : t.setAttribute("id", f), f = "[id='" + f + "'] ", u = c.length; u--;) c[u] = f + h(c[u]);
              p = ht.test(e) && t.parentNode || t, m = c.join(",")
            }
            if (m) try {
              return et.apply(n, p.querySelectorAll(m)), n
            } catch (g) {} finally {
              l || t.removeAttribute("id")
            }
          }
        }
        return w(e.replace(ct, "$1"), t, n, r)
      }

      function r() {
        function e(n, r) {
          return t.push(n += " ") > S.cacheLength && delete e[t.shift()], e[n] = r
        }
        var t = [];
        return e
      }

      function i(e) {
        return e[R] = !0, e
      }

      function o(e) {
        var t = O.createElement("div");
        try {
          return !!e(t)
        } catch (n) {
          return !1
        } finally {
          t.parentNode && t.parentNode.removeChild(t), t = null
        }
      }

      function a(e, t) {
        for (var n = e.split("|"), r = e.length; r--;) S.attrHandle[n[r]] = t
      }

      function s(e, t) {
        var n = t && e,
          r = n && 1 === e.nodeType && 1 === t.nodeType && (~t.sourceIndex || Q) - (~e.sourceIndex || Q);
        if (r) return r;
        if (n)
          for (; n = n.nextSibling;)
            if (n === t) return -1;
        return e ? 1 : -1
      }

      function u(e) {
        return function(t) {
          var n = t.nodeName.toLowerCase();
          return "input" === n && t.type === e
        }
      }

      function c(e) {
        return function(t) {
          var n = t.nodeName.toLowerCase();
          return ("input" === n || "button" === n) && t.type === e
        }
      }

      function l(e) {
        return i(function(t) {
          return t = +t, i(function(n, r) {
            for (var i, o = e([], n.length, t), a = o.length; a--;) n[i = o[a]] && (n[i] = !(r[i] = n[i]))
          })
        })
      }

      function f() {}

      function d(e, t) {
        var r, i, o, a, s, u, c, l = z[e + " "];
        if (l) return t ? 0 : l.slice(0);
        for (s = e, u = [], c = S.preFilter; s;) {
          (!r || (i = ft.exec(s))) && (i && (s = s.slice(i[0].length) || s), u.push(o = [])), r = !1, (i = dt.exec(s)) && (r = i.shift(), o.push({
            value: r,
            type: i[0].replace(ct, " ")
          }), s = s.slice(r.length));
          for (a in S.filter) !(i = vt[a].exec(s)) || c[a] && !(i = c[a](i)) || (r = i.shift(), o.push({
            value: r,
            type: a,
            matches: i
          }), s = s.slice(r.length));
          if (!r) break
        }
        return t ? s.length : s ? n.error(e) : z(e, u).slice(0)
      }

      function h(e) {
        for (var t = 0, n = e.length, r = ""; n > t; t++) r += e[t].value;
        return r
      }

      function p(e, t, n) {
        var r = t.dir,
          i = n && "parentNode" === r,
          o = U++;
        return t.first ? function(t, n, o) {
          for (; t = t[r];)
            if (1 === t.nodeType || i) return e(t, n, o)
        } : function(t, n, a) {
          var s, u, c, l = H + " " + o;
          if (a) {
            for (; t = t[r];)
              if ((1 === t.nodeType || i) && e(t, n, a)) return !0
          } else
            for (; t = t[r];)
              if (1 === t.nodeType || i)
                if (c = t[R] || (t[R] = {}), (u = c[r]) && u[0] === l) {
                  if ((s = u[1]) === !0 || s === k) return s === !0
                } else if (u = c[r] = [l], u[1] = e(t, n, a) || k, u[1] === !0) return !0
        }
      }

      function m(e) {
        return e.length > 1 ? function(t, n, r) {
          for (var i = e.length; i--;)
            if (!e[i](t, n, r)) return !1;
          return !0
        } : e[0]
      }

      function g(e, t, n, r, i) {
        for (var o, a = [], s = 0, u = e.length, c = null != t; u > s; s++)(o = e[s]) && (!n || n(o, r, i)) && (a.push(o), c && t.push(s));
        return a
      }

      function v(e, t, n, r, o, a) {
        return r && !r[R] && (r = v(r)), o && !o[R] && (o = v(o, a)), i(function(i, a, s, u) {
          var c, l, f, d = [],
            h = [],
            p = a.length,
            m = i || b(t || "*", s.nodeType ? [s] : s, []),
            v = !e || !i && t ? m : g(m, d, e, s, u),
            y = n ? o || (i ? e : p || r) ? [] : a : v;
          if (n && n(v, y, s, u), r)
            for (c = g(y, h), r(c, [], s, u), l = c.length; l--;)(f = c[l]) && (y[h[l]] = !(v[h[l]] = f));
          if (i) {
            if (o || e) {
              if (o) {
                for (c = [], l = y.length; l--;)(f = y[l]) && c.push(v[l] = f);
                o(null, y = [], c, u)
              }
              for (l = y.length; l--;)(f = y[l]) && (c = o ? nt.call(i, f) : d[l]) > -1 && (i[c] = !(a[c] = f))
            }
          } else y = g(y === a ? y.splice(p, y.length) : y), o ? o(null, a, y, u) : et.apply(a, y)
        })
      }

      function y(e) {
        for (var t, n, r, i = e.length, o = S.relative[e[0].type], a = o || S.relative[" "], s = o ? 1 : 0, u = p(function(e) {
            return e === t
          }, a, !0), c = p(function(e) {
            return nt.call(t, e) > -1
          }, a, !0), l = [function(e, n, r) {
            return !o && (r || n !== A) || ((t = n).nodeType ? u(e, n, r) : c(e, n, r))
          }]; i > s; s++)
          if (n = S.relative[e[s].type]) l = [p(m(l), n)];
          else {
            if (n = S.filter[e[s].type].apply(null, e[s].matches), n[R]) {
              for (r = ++s; i > r && !S.relative[e[r].type]; r++);
              return v(s > 1 && m(l), s > 1 && h(e.slice(0, s - 1).concat({
                value: " " === e[s - 2].type ? "*" : ""
              })).replace(ct, "$1"), n, r > s && y(e.slice(s, r)), i > r && y(e = e.slice(r)), i > r && h(e))
            }
            l.push(n)
          }
        return m(l)
      }

      function $(e, t) {
        var r = 0,
          o = t.length > 0,
          a = e.length > 0,
          s = function(i, s, u, c, l) {
            var f, d, h, p = [],
              m = 0,
              v = "0",
              y = i && [],
              $ = null != l,
              b = A,
              w = i || a && S.find.TAG("*", l && s.parentNode || s),
              x = H += null == b ? 1 : Math.random() || .1;
            for ($ && (A = s !== O && s, k = r); null != (f = w[v]); v++) {
              if (a && f) {
                for (d = 0; h = e[d++];)
                  if (h(f, s, u)) {
                    c.push(f);
                    break
                  }
                $ && (H = x, k = ++r)
              }
              o && ((f = !h && f) && m--, i && y.push(f))
            }
            if (m += v, o && v !== m) {
              for (d = 0; h = t[d++];) h(y, p, s, u);
              if (i) {
                if (m > 0)
                  for (; v--;) y[v] || p[v] || (p[v] = K.call(c));
                p = g(p)
              }
              et.apply(c, p), $ && !i && p.length > 0 && m + t.length > 1 && n.uniqueSort(c)
            }
            return $ && (H = x, A = b), y
          };
        return o ? i(s) : s
      }

      function b(e, t, r) {
        for (var i = 0, o = t.length; o > i; i++) n(e, t[i], r);
        return r
      }

      function w(e, t, n, r) {
        var i, o, a, s, u, c = d(e);
        if (!r && 1 === c.length) {
          if (o = c[0] = c[0].slice(0), o.length > 2 && "ID" === (a = o[0]).type && _.getById && 9 === t.nodeType && P && S.relative[o[1].type]) {
            if (t = (S.find.ID(a.matches[0].replace(_t, kt), t) || [])[0], !t) return n;
            e = e.slice(o.shift().value.length)
          }
          for (i = vt.needsContext.test(e) ? 0 : o.length; i-- && (a = o[i], !S.relative[s = a.type]);)
            if ((u = S.find[s]) && (r = u(a.matches[0].replace(_t, kt), ht.test(o[0].type) && t.parentNode || t))) {
              if (o.splice(i, 1), e = r.length && h(o), !e) return et.apply(n, r), n;
              break
            }
        }
        return M(e, c)(r, t, !P, n, ht.test(e)), n
      }
      var x, _, k, S, C, T, M, A, E, D, O, N, P, j, F, I, q, R = "sizzle" + -new Date,
        L = e.document,
        H = 0,
        U = 0,
        Y = r(),
        z = r(),
        B = r(),
        V = !1,
        W = function(e, t) {
          return e === t ? (V = !0, 0) : 0
        },
        G = typeof t,
        Q = 1 << 31,
        X = {}.hasOwnProperty,
        Z = [],
        K = Z.pop,
        J = Z.push,
        et = Z.push,
        tt = Z.slice,
        nt = Z.indexOf || function(e) {
          for (var t = 0, n = this.length; n > t; t++)
            if (this[t] === e) return t;
          return -1
        },
        rt = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",
        it = "[\\x20\\t\\r\\n\\f]",
        ot = "(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+",
        at = ot.replace("w", "w#"),
        st = "\\[" + it + "*(" + ot + ")" + it + "*(?:([*^$|!~]?=)" + it + "*(?:(['\"])((?:\\\\.|[^\\\\])*?)\\3|(" + at + ")|)|)" + it + "*\\]",
        ut = ":(" + ot + ")(?:\\(((['\"])((?:\\\\.|[^\\\\])*?)\\3|((?:\\\\.|[^\\\\()[\\]]|" + st.replace(3, 8) + ")*)|.*)\\)|)",
        ct = RegExp("^" + it + "+|((?:^|[^\\\\])(?:\\\\.)*)" + it + "+$", "g"),
        ft = RegExp("^" + it + "*," + it + "*"),
        dt = RegExp("^" + it + "*([>+~]|" + it + ")" + it + "*"),
        ht = RegExp(it + "*[+~]"),
        pt = RegExp("=" + it + "*([^\\]'\"]*)" + it + "*\\]", "g"),
        mt = RegExp(ut),
        gt = RegExp("^" + at + "$"),
        vt = {
          ID: RegExp("^#(" + ot + ")"),
          CLASS: RegExp("^\\.(" + ot + ")"),
          TAG: RegExp("^(" + ot.replace("w", "w*") + ")"),
          ATTR: RegExp("^" + st),
          PSEUDO: RegExp("^" + ut),
          CHILD: RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + it + "*(even|odd|(([+-]|)(\\d*)n|)" + it + "*(?:([+-]|)" + it + "*(\\d+)|))" + it + "*\\)|)", "i"),
          bool: RegExp("^(?:" + rt + ")$", "i"),
          needsContext: RegExp("^" + it + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + it + "*((?:-\\d)?\\d*)" + it + "*\\)|)(?=[^-]|$)", "i")
        },
        yt = /^[^{]+\{\s*\[native \w/,
        $t = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,
        bt = /^(?:input|select|textarea|button)$/i,
        wt = /^h\d$/i,
        xt = /'|\\/g,
        _t = RegExp("\\\\([\\da-f]{1,6}" + it + "?|(" + it + ")|.)", "ig"),
        kt = function(e, t, n) {
          var r = "0x" + t - 65536;
          return r !== r || n ? t : 0 > r ? String.fromCharCode(r + 65536) : String.fromCharCode(55296 | r >> 10, 56320 | 1023 & r)
        };
      try {
        et.apply(Z = tt.call(L.childNodes), L.childNodes), Z[L.childNodes.length].nodeType
      } catch (St) {
        et = {
          apply: Z.length ? function(e, t) {
            J.apply(e, tt.call(t))
          } : function(e, t) {
            for (var n = e.length, r = 0; e[n++] = t[r++];);
            e.length = n - 1
          }
        }
      }
      T = n.isXML = function(e) {
        var t = e && (e.ownerDocument || e).documentElement;
        return t ? "HTML" !== t.nodeName : !1
      }, _ = n.support = {}, D = n.setDocument = function(e) {
        var n = e ? e.ownerDocument || e : L,
          r = n.defaultView;
        return n !== O && 9 === n.nodeType && n.documentElement ? (O = n, N = n.documentElement, P = !T(n), r && r.attachEvent && r !== r.top && r.attachEvent("onbeforeunload", function() {
          D()
        }), _.attributes = o(function(e) {
          return e.className = "i", !e.getAttribute("className")
        }), _.getElementsByTagName = o(function(e) {
          return e.appendChild(n.createComment("")), !e.getElementsByTagName("*").length
        }), _.getElementsByClassName = o(function(e) {
          return e.innerHTML = "<div class='a'></div><div class='a i'></div>", e.firstChild.className = "i", 2 === e.getElementsByClassName("i").length
        }), _.getById = o(function(e) {
          return N.appendChild(e).id = R, !n.getElementsByName || !n.getElementsByName(R).length
        }), _.getById ? (S.find.ID = function(e, t) {
          if (typeof t.getElementById !== G && P) {
            var n = t.getElementById(e);
            return n && n.parentNode ? [n] : []
          }
        }, S.filter.ID = function(e) {
          var t = e.replace(_t, kt);
          return function(e) {
            return e.getAttribute("id") === t
          }
        }) : (delete S.find.ID, S.filter.ID = function(e) {
          var t = e.replace(_t, kt);
          return function(e) {
            var n = typeof e.getAttributeNode !== G && e.getAttributeNode("id");
            return n && n.value === t
          }
        }), S.find.TAG = _.getElementsByTagName ? function(e, n) {
          return typeof n.getElementsByTagName !== G ? n.getElementsByTagName(e) : t
        } : function(e, t) {
          var n, r = [],
            i = 0,
            o = t.getElementsByTagName(e);
          if ("*" === e) {
            for (; n = o[i++];) 1 === n.nodeType && r.push(n);
            return r
          }
          return o
        }, S.find.CLASS = _.getElementsByClassName && function(e, n) {
          return typeof n.getElementsByClassName !== G && P ? n.getElementsByClassName(e) : t
        }, F = [], j = [], (_.qsa = yt.test(n.querySelectorAll)) && (o(function(e) {
          e.innerHTML = "<select><option selected=''></option></select>", e.querySelectorAll("[selected]").length || j.push("\\[" + it + "*(?:value|" + rt + ")"), e.querySelectorAll(":checked").length || j.push(":checked")
        }), o(function(e) {
          var t = n.createElement("input");
          t.setAttribute("type", "hidden"), e.appendChild(t).setAttribute("t", ""), e.querySelectorAll("[t^='']").length && j.push("[*^$]=" + it + "*(?:''|\"\")"), e.querySelectorAll(":enabled").length || j.push(":enabled", ":disabled"), e.querySelectorAll("*,:x"), j.push(",.*:")
        })), (_.matchesSelector = yt.test(I = N.webkitMatchesSelector || N.mozMatchesSelector || N.oMatchesSelector || N.msMatchesSelector)) && o(function(e) {
          _.disconnectedMatch = I.call(e, "div"), I.call(e, "[s!='']:x"), F.push("!=", ut)
        }), j = j.length && RegExp(j.join("|")), F = F.length && RegExp(F.join("|")), q = yt.test(N.contains) || N.compareDocumentPosition ? function(e, t) {
          var n = 9 === e.nodeType ? e.documentElement : e,
            r = t && t.parentNode;
          return e === r || !(!r || 1 !== r.nodeType || !(n.contains ? n.contains(r) : e.compareDocumentPosition && 16 & e.compareDocumentPosition(r)))
        } : function(e, t) {
          if (t)
            for (; t = t.parentNode;)
              if (t === e) return !0;
          return !1
        }, W = N.compareDocumentPosition ? function(e, t) {
          if (e === t) return V = !0, 0;
          var r = t.compareDocumentPosition && e.compareDocumentPosition && e.compareDocumentPosition(t);
          return r ? 1 & r || !_.sortDetached && t.compareDocumentPosition(e) === r ? e === n || q(L, e) ? -1 : t === n || q(L, t) ? 1 : E ? nt.call(E, e) - nt.call(E, t) : 0 : 4 & r ? -1 : 1 : e.compareDocumentPosition ? -1 : 1
        } : function(e, t) {
          var r, i = 0,
            o = e.parentNode,
            a = t.parentNode,
            u = [e],
            c = [t];
          if (e === t) return V = !0, 0;
          if (!o || !a) return e === n ? -1 : t === n ? 1 : o ? -1 : a ? 1 : E ? nt.call(E, e) - nt.call(E, t) : 0;
          if (o === a) return s(e, t);
          for (r = e; r = r.parentNode;) u.unshift(r);
          for (r = t; r = r.parentNode;) c.unshift(r);
          for (; u[i] === c[i];) i++;
          return i ? s(u[i], c[i]) : u[i] === L ? -1 : c[i] === L ? 1 : 0
        }, n) : O
      }, n.matches = function(e, t) {
        return n(e, null, null, t)
      }, n.matchesSelector = function(e, t) {
        if ((e.ownerDocument || e) !== O && D(e), t = t.replace(pt, "='$1']"), !(!_.matchesSelector || !P || F && F.test(t) || j && j.test(t))) try {
          var r = I.call(e, t);
          if (r || _.disconnectedMatch || e.document && 11 !== e.document.nodeType) return r
        } catch (i) {}
        return n(t, O, null, [e]).length > 0
      }, n.contains = function(e, t) {
        return (e.ownerDocument || e) !== O && D(e), q(e, t)
      }, n.attr = function(e, n) {
        (e.ownerDocument || e) !== O && D(e);
        var r = S.attrHandle[n.toLowerCase()],
          i = r && X.call(S.attrHandle, n.toLowerCase()) ? r(e, n, !P) : t;
        return i === t ? _.attributes || !P ? e.getAttribute(n) : (i = e.getAttributeNode(n)) && i.specified ? i.value : null : i
      }, n.error = function(e) {
        throw Error("Syntax error, unrecognized expression: " + e)
      }, n.uniqueSort = function(e) {
        var t, n = [],
          r = 0,
          i = 0;
        if (V = !_.detectDuplicates, E = !_.sortStable && e.slice(0), e.sort(W), V) {
          for (; t = e[i++];) t === e[i] && (r = n.push(i));
          for (; r--;) e.splice(n[r], 1)
        }
        return e
      }, C = n.getText = function(e) {
        var t, n = "",
          r = 0,
          i = e.nodeType;
        if (i) {
          if (1 === i || 9 === i || 11 === i) {
            if ("string" == typeof e.textContent) return e.textContent;
            for (e = e.firstChild; e; e = e.nextSibling) n += C(e)
          } else if (3 === i || 4 === i) return e.nodeValue
        } else
          for (; t = e[r]; r++) n += C(t);
        return n
      }, S = n.selectors = {
        cacheLength: 50,
        createPseudo: i,
        match: vt,
        attrHandle: {},
        find: {},
        relative: {
          ">": {
            dir: "parentNode",
            first: !0
          },
          " ": {
            dir: "parentNode"
          },
          "+": {
            dir: "previousSibling",
            first: !0
          },
          "~": {
            dir: "previousSibling"
          }
        },
        preFilter: {
          ATTR: function(e) {
            return e[1] = e[1].replace(_t, kt), e[3] = (e[4] || e[5] || "").replace(_t, kt), "~=" === e[2] && (e[3] = " " + e[3] + " "), e.slice(0, 4)
          },
          CHILD: function(e) {
            return e[1] = e[1].toLowerCase(), "nth" === e[1].slice(0, 3) ? (e[3] || n.error(e[0]), e[4] = +(e[4] ? e[5] + (e[6] || 1) : 2 * ("even" === e[3] || "odd" === e[3])), e[5] = +(e[7] + e[8] || "odd" === e[3])) : e[3] && n.error(e[0]), e
          },
          PSEUDO: function(e) {
            var n, r = !e[5] && e[2];
            return vt.CHILD.test(e[0]) ? null : (e[3] && e[4] !== t ? e[2] = e[4] : r && mt.test(r) && (n = d(r, !0)) && (n = r.indexOf(")", r.length - n) - r.length) && (e[0] = e[0].slice(0, n), e[2] = r.slice(0, n)), e.slice(0, 3))
          }
        },
        filter: {
          TAG: function(e) {
            var t = e.replace(_t, kt).toLowerCase();
            return "*" === e ? function() {
              return !0
            } : function(e) {
              return e.nodeName && e.nodeName.toLowerCase() === t
            }
          },
          CLASS: function(e) {
            var t = Y[e + " "];
            return t || (t = RegExp("(^|" + it + ")" + e + "(" + it + "|$)")) && Y(e, function(e) {
              return t.test("string" == typeof e.className && e.className || typeof e.getAttribute !== G && e.getAttribute("class") || "")
            })
          },
          ATTR: function(e, t, r) {
            return function(i) {
              var o = n.attr(i, e);
              return null == o ? "!=" === t : t ? (o += "", "=" === t ? o === r : "!=" === t ? o !== r : "^=" === t ? r && 0 === o.indexOf(r) : "*=" === t ? r && o.indexOf(r) > -1 : "$=" === t ? r && o.slice(-r.length) === r : "~=" === t ? (" " + o + " ").indexOf(r) > -1 : "|=" === t ? o === r || o.slice(0, r.length + 1) === r + "-" : !1) : !0
            }
          },
          CHILD: function(e, t, n, r, i) {
            var o = "nth" !== e.slice(0, 3),
              a = "last" !== e.slice(-4),
              s = "of-type" === t;
            return 1 === r && 0 === i ? function(e) {
              return !!e.parentNode
            } : function(t, n, u) {
              var c, l, f, d, h, p, m = o !== a ? "nextSibling" : "previousSibling",
                g = t.parentNode,
                v = s && t.nodeName.toLowerCase(),
                y = !u && !s;
              if (g) {
                if (o) {
                  for (; m;) {
                    for (f = t; f = f[m];)
                      if (s ? f.nodeName.toLowerCase() === v : 1 === f.nodeType) return !1;
                    p = m = "only" === e && !p && "nextSibling"
                  }
                  return !0
                }
                if (p = [a ? g.firstChild : g.lastChild], a && y) {
                  for (l = g[R] || (g[R] = {}), c = l[e] || [], h = c[0] === H && c[1], d = c[0] === H && c[2], f = h && g.childNodes[h]; f = ++h && f && f[m] || (d = h = 0) || p.pop();)
                    if (1 === f.nodeType && ++d && f === t) {
                      l[e] = [H, h, d];
                      break
                    }
                } else if (y && (c = (t[R] || (t[R] = {}))[e]) && c[0] === H) d = c[1];
                else
                  for (;
                    (f = ++h && f && f[m] || (d = h = 0) || p.pop()) && ((s ? f.nodeName.toLowerCase() !== v : 1 !== f.nodeType) || !++d || (y && ((f[R] || (f[R] = {}))[e] = [H, d]), f !== t)););
                return d -= i, d === r || 0 === d % r && d / r >= 0
              }
            }
          },
          PSEUDO: function(e, t) {
            var r, o = S.pseudos[e] || S.setFilters[e.toLowerCase()] || n.error("unsupported pseudo: " + e);
            return o[R] ? o(t) : o.length > 1 ? (r = [e, e, "", t], S.setFilters.hasOwnProperty(e.toLowerCase()) ? i(function(e, n) {
              for (var r, i = o(e, t), a = i.length; a--;) r = nt.call(e, i[a]), e[r] = !(n[r] = i[a])
            }) : function(e) {
              return o(e, 0, r)
            }) : o
          }
        },
        pseudos: {
          not: i(function(e) {
            var t = [],
              n = [],
              r = M(e.replace(ct, "$1"));
            return r[R] ? i(function(e, t, n, i) {
              for (var o, a = r(e, null, i, []), s = e.length; s--;)(o = a[s]) && (e[s] = !(t[s] = o))
            }) : function(e, i, o) {
              return t[0] = e, r(t, null, o, n), !n.pop()
            }
          }),
          has: i(function(e) {
            return function(t) {
              return n(e, t).length > 0
            }
          }),
          contains: i(function(e) {
            return function(t) {
              return (t.textContent || t.innerText || C(t)).indexOf(e) > -1
            }
          }),
          lang: i(function(e) {
            return gt.test(e || "") || n.error("unsupported lang: " + e), e = e.replace(_t, kt).toLowerCase(),
              function(t) {
                var n;
                do
                  if (n = P ? t.lang : t.getAttribute("xml:lang") || t.getAttribute("lang")) return n = n.toLowerCase(), n === e || 0 === n.indexOf(e + "-");
                while ((t = t.parentNode) && 1 === t.nodeType);
                return !1
              }
          }),
          target: function(t) {
            var n = e.location && e.location.hash;
            return n && n.slice(1) === t.id
          },
          root: function(e) {
            return e === N
          },
          focus: function(e) {
            return e === O.activeElement && (!O.hasFocus || O.hasFocus()) && !!(e.type || e.href || ~e.tabIndex)
          },
          enabled: function(e) {
            return e.disabled === !1
          },
          disabled: function(e) {
            return e.disabled === !0
          },
          checked: function(e) {
            var t = e.nodeName.toLowerCase();
            return "input" === t && !!e.checked || "option" === t && !!e.selected
          },
          selected: function(e) {
            return e.parentNode && e.parentNode.selectedIndex, e.selected === !0
          },
          empty: function(e) {
            for (e = e.firstChild; e; e = e.nextSibling)
              if (e.nodeName > "@" || 3 === e.nodeType || 4 === e.nodeType) return !1;
            return !0
          },
          parent: function(e) {
            return !S.pseudos.empty(e)
          },
          header: function(e) {
            return wt.test(e.nodeName)
          },
          input: function(e) {
            return bt.test(e.nodeName)
          },
          button: function(e) {
            var t = e.nodeName.toLowerCase();
            return "input" === t && "button" === e.type || "button" === t
          },
          text: function(e) {
            var t;
            return "input" === e.nodeName.toLowerCase() && "text" === e.type && (null == (t = e.getAttribute("type")) || t.toLowerCase() === e.type)
          },
          first: l(function() {
            return [0]
          }),
          last: l(function(e, t) {
            return [t - 1]
          }),
          eq: l(function(e, t, n) {
            return [0 > n ? n + t : n]
          }),
          even: l(function(e, t) {
            for (var n = 0; t > n; n += 2) e.push(n);
            return e
          }),
          odd: l(function(e, t) {
            for (var n = 1; t > n; n += 2) e.push(n);
            return e
          }),
          lt: l(function(e, t, n) {
            for (var r = 0 > n ? n + t : n; --r >= 0;) e.push(r);
            return e
          }),
          gt: l(function(e, t, n) {
            for (var r = 0 > n ? n + t : n; t > ++r;) e.push(r);
            return e
          })
        }
      }, S.pseudos.nth = S.pseudos.eq;
      for (x in {
          radio: !0,
          checkbox: !0,
          file: !0,
          password: !0,
          image: !0
        }) S.pseudos[x] = u(x);
      for (x in {
          submit: !0,
          reset: !0
        }) S.pseudos[x] = c(x);
      f.prototype = S.filters = S.pseudos, S.setFilters = new f, M = n.compile = function(e, t) {
        var n, r = [],
          i = [],
          o = B[e + " "];
        if (!o) {
          for (t || (t = d(e)), n = t.length; n--;) o = y(t[n]), o[R] ? r.push(o) : i.push(o);
          o = B(e, $(i, r))
        }
        return o
      }, _.sortStable = R.split("").sort(W).join("") === R, _.detectDuplicates = V, D(), _.sortDetached = o(function(e) {
        return 1 & e.compareDocumentPosition(O.createElement("div"))
      }), o(function(e) {
        return e.innerHTML = "<a href='#'></a>", "#" === e.firstChild.getAttribute("href")
      }) || a("type|href|height|width", function(e, n, r) {
        return r ? t : e.getAttribute(n, "type" === n.toLowerCase() ? 1 : 2)
      }), _.attributes && o(function(e) {
        return e.innerHTML = "<input/>", e.firstChild.setAttribute("value", ""), "" === e.firstChild.getAttribute("value")
      }) || a("value", function(e, n, r) {
        return r || "input" !== e.nodeName.toLowerCase() ? t : e.defaultValue
      }), o(function(e) {
        return null == e.getAttribute("disabled")
      }) || a(rt, function(e, n, r) {
        var i;
        return r ? t : (i = e.getAttributeNode(n)) && i.specified ? i.value : e[n] === !0 ? n.toLowerCase() : null
      }), lt.find = n, lt.expr = n.selectors, lt.expr[":"] = lt.expr.pseudos, lt.unique = n.uniqueSort, lt.text = n.getText, lt.isXMLDoc = n.isXML, lt.contains = n.contains
    }(e);
  var St = {};
  lt.Callbacks = function(e) {
    e = "string" == typeof e ? St[e] || r(e) : lt.extend({}, e);
    var n, i, o, a, s, u, c = [],
      l = !e.once && [],
      f = function(t) {
        for (i = e.memory && t, o = !0, s = u || 0, u = 0, a = c.length, n = !0; c && a > s; s++)
          if (c[s].apply(t[0], t[1]) === !1 && e.stopOnFalse) {
            i = !1;
            break
          }
        n = !1, c && (l ? l.length && f(l.shift()) : i ? c = [] : d.disable())
      },
      d = {
        add: function() {
          if (c) {
            var t = c.length;
            ! function r(t) {
              lt.each(t, function(t, n) {
                var i = lt.type(n);
                "function" === i ? e.unique && d.has(n) || c.push(n) : n && n.length && "string" !== i && r(n)
              })
            }(arguments), n ? a = c.length : i && (u = t, f(i))
          }
          return this
        },
        remove: function() {
          return c && lt.each(arguments, function(e, t) {
            for (var r;
              (r = lt.inArray(t, c, r)) > -1;) c.splice(r, 1), n && (a >= r && a--, s >= r && s--)
          }), this
        },
        has: function(e) {
          return e ? lt.inArray(e, c) > -1 : !(!c || !c.length)
        },
        empty: function() {
          return c = [], a = 0, this
        },
        disable: function() {
          return c = l = i = t, this
        },
        disabled: function() {
          return !c
        },
        lock: function() {
          return l = t, i || d.disable(), this
        },
        locked: function() {
          return !l
        },
        fireWith: function(e, t) {
          return !c || o && !l || (t = t || [], t = [e, t.slice ? t.slice() : t], n ? l.push(t) : f(t)), this
        },
        fire: function() {
          return d.fireWith(this, arguments), this
        },
        fired: function() {
          return !!o
        }
      };
    return d
  }, lt.extend({
    Deferred: function(e) {
      var t = [
          ["resolve", "done", lt.Callbacks("once memory"), "resolved"],
          ["reject", "fail", lt.Callbacks("once memory"), "rejected"],
          ["notify", "progress", lt.Callbacks("memory")]
        ],
        n = "pending",
        r = {
          state: function() {
            return n
          },
          always: function() {
            return i.done(arguments).fail(arguments), this
          },
          then: function() {
            var e = arguments;
            return lt.Deferred(function(n) {
              lt.each(t, function(t, o) {
                var a = o[0],
                  s = lt.isFunction(e[t]) && e[t];
                i[o[1]](function() {
                  var e = s && s.apply(this, arguments);
                  e && lt.isFunction(e.promise) ? e.promise().done(n.resolve).fail(n.reject).progress(n.notify) : n[a + "With"](this === r ? n.promise() : this, s ? [e] : arguments)
                })
              }), e = null
            }).promise()
          },
          promise: function(e) {
            return null != e ? lt.extend(e, r) : r
          }
        },
        i = {};
      return r.pipe = r.then, lt.each(t, function(e, o) {
        var a = o[2],
          s = o[3];
        r[o[1]] = a.add, s && a.add(function() {
          n = s
        }, t[1 ^ e][2].disable, t[2][2].lock), i[o[0]] = function() {
          return i[o[0] + "With"](this === i ? r : this, arguments), this
        }, i[o[0] + "With"] = a.fireWith
      }), r.promise(i), e && e.call(i, i), i
    },
    when: function(e) {
      var t, n, r, i = 0,
        o = ot.call(arguments),
        a = o.length,
        s = 1 !== a || e && lt.isFunction(e.promise) ? a : 0,
        u = 1 === s ? e : lt.Deferred(),
        c = function(e, n, r) {
          return function(i) {
            n[e] = this, r[e] = arguments.length > 1 ? ot.call(arguments) : i, r === t ? u.notifyWith(n, r) : --s || u.resolveWith(n, r)
          }
        };
      if (a > 1)
        for (t = Array(a), n = Array(a), r = Array(a); a > i; i++) o[i] && lt.isFunction(o[i].promise) ? o[i].promise().done(c(i, r, o)).fail(u.reject).progress(c(i, n, t)) : --s;
      return s || u.resolveWith(r, o), u.promise()
    }
  }), lt.support = function(t) {
    var n, r, i, o, a, s, u, c, l, f = X.createElement("div");
    if (f.setAttribute("className", "t"), f.innerHTML = "  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>", n = f.getElementsByTagName("*") || [], r = f.getElementsByTagName("a")[0], !r || !r.style || !n.length) return t;
    o = X.createElement("select"), s = o.appendChild(X.createElement("option")), i = f.getElementsByTagName("input")[0], r.style.cssText = "top:1px;float:left;opacity:.5", t.getSetAttribute = "t" !== f.className, t.leadingWhitespace = 3 === f.firstChild.nodeType, t.tbody = !f.getElementsByTagName("tbody").length, t.htmlSerialize = !!f.getElementsByTagName("link").length, t.style = /top/.test(r.getAttribute("style")), t.hrefNormalized = "/a" === r.getAttribute("href"), t.opacity = /^0.5/.test(r.style.opacity), t.cssFloat = !!r.style.cssFloat, t.checkOn = !!i.value, t.optSelected = s.selected, t.enctype = !!X.createElement("form").enctype, t.html5Clone = "<:nav></:nav>" !== X.createElement("nav").cloneNode(!0).outerHTML, t.inlineBlockNeedsLayout = !1, t.shrinkWrapBlocks = !1, t.pixelPosition = !1, t.deleteExpando = !0, t.noCloneEvent = !0, t.reliableMarginRight = !0, t.boxSizingReliable = !0, i.checked = !0, t.noCloneChecked = i.cloneNode(!0).checked, o.disabled = !0, t.optDisabled = !s.disabled;
    try {
      delete f.test
    } catch (d) {
      t.deleteExpando = !1
    }
    i = X.createElement("input"), i.setAttribute("value", ""), t.input = "" === i.getAttribute("value"), i.value = "t", i.setAttribute("type", "radio"), t.radioValue = "t" === i.value, i.setAttribute("checked", "t"), i.setAttribute("name", "t"), a = X.createDocumentFragment(), a.appendChild(i), t.appendChecked = i.checked, t.checkClone = a.cloneNode(!0).cloneNode(!0).lastChild.checked, f.attachEvent && (f.attachEvent("onclick", function() {
      t.noCloneEvent = !1
    }), f.cloneNode(!0).click());
    for (l in {
        submit: !0,
        change: !0,
        focusin: !0
      }) f.setAttribute(u = "on" + l, "t"), t[l + "Bubbles"] = u in e || f.attributes[u].expando === !1;
    f.style.backgroundClip = "content-box", f.cloneNode(!0).style.backgroundClip = "", t.clearCloneStyle = "content-box" === f.style.backgroundClip;
    for (l in lt(t)) break;
    return t.ownLast = "0" !== l, lt(function() {
      var n, r, i, o = "padding:0;margin:0;border:0;display:block;box-sizing:content-box;-moz-box-sizing:content-box;-webkit-box-sizing:content-box;",
        a = X.getElementsByTagName("body")[0];
      a && (n = X.createElement("div"), n.style.cssText = "border:0;width:0;height:0;position:absolute;top:0;left:-9999px;margin-top:1px", a.appendChild(n).appendChild(f), f.innerHTML = "<table><tr><td></td><td>t</td></tr></table>", i = f.getElementsByTagName("td"), i[0].style.cssText = "padding:0;margin:0;border:0;display:none", c = 0 === i[0].offsetHeight, i[0].style.display = "", i[1].style.display = "none", t.reliableHiddenOffsets = c && 0 === i[0].offsetHeight, f.innerHTML = "", f.style.cssText = "box-sizing:border-box;-moz-box-sizing:border-box;-webkit-box-sizing:border-box;padding:1px;border:1px;display:block;width:4px;margin-top:1%;position:absolute;top:1%;", lt.swap(a, null != a.style.zoom ? {
        zoom: 1
      } : {}, function() {
        t.boxSizing = 4 === f.offsetWidth
      }), e.getComputedStyle && (t.pixelPosition = "1%" !== (e.getComputedStyle(f, null) || {}).top, t.boxSizingReliable = "4px" === (e.getComputedStyle(f, null) || {
        width: "4px"
      }).width, r = f.appendChild(X.createElement("div")), r.style.cssText = f.style.cssText = o, r.style.marginRight = r.style.width = "0", f.style.width = "1px", t.reliableMarginRight = !parseFloat((e.getComputedStyle(r, null) || {}).marginRight)), typeof f.style.zoom !== G && (f.innerHTML = "", f.style.cssText = o + "width:1px;padding:1px;display:inline;zoom:1", t.inlineBlockNeedsLayout = 3 === f.offsetWidth, f.style.display = "block", f.innerHTML = "<div></div>", f.firstChild.style.width = "5px", t.shrinkWrapBlocks = 3 !== f.offsetWidth, t.inlineBlockNeedsLayout && (a.style.zoom = 1)), a.removeChild(n), n = f = i = r = null)
    }), n = o = a = s = r = i = null, t
  }({});
  var Ct = /(?:\{[\s\S]*\}|\[[\s\S]*\])$/,
    Tt = /([A-Z])/g;
  lt.extend({
    cache: {},
    noData: {
      applet: !0,
      embed: !0,
      object: "clsid:D27CDB6E-AE6D-11cf-96B8-444553540000"
    },
    hasData: function(e) {
      return e = e.nodeType ? lt.cache[e[lt.expando]] : e[lt.expando], !!e && !s(e)
    },
    data: function(e, t, n) {
      return i(e, t, n)
    },
    removeData: function(e, t) {
      return o(e, t)
    },
    _data: function(e, t, n) {
      return i(e, t, n, !0)
    },
    _removeData: function(e, t) {
      return o(e, t, !0)
    },
    acceptData: function(e) {
      if (e.nodeType && 1 !== e.nodeType && 9 !== e.nodeType) return !1;
      var t = e.nodeName && lt.noData[e.nodeName.toLowerCase()];
      return !t || t !== !0 && e.getAttribute("classid") === t
    }
  }), lt.fn.extend({
    data: function(e, n) {
      var r, i, o = null,
        s = 0,
        u = this[0];
      if (e === t) {
        if (this.length && (o = lt.data(u), 1 === u.nodeType && !lt._data(u, "parsedAttrs"))) {
          for (r = u.attributes; r.length > s; s++) i = r[s].name, 0 === i.indexOf("data-") && (i = lt.camelCase(i.slice(5)), a(u, i, o[i]));
          lt._data(u, "parsedAttrs", !0)
        }
        return o
      }
      return "object" == typeof e ? this.each(function() {
        lt.data(this, e)
      }) : arguments.length > 1 ? this.each(function() {
        lt.data(this, e, n)
      }) : u ? a(u, e, lt.data(u, e)) : null
    },
    removeData: function(e) {
      return this.each(function() {
        lt.removeData(this, e)
      })
    }
  }), lt.extend({
    queue: function(e, n, r) {
      var i;
      return e ? (n = (n || "fx") + "queue", i = lt._data(e, n), r && (!i || lt.isArray(r) ? i = lt._data(e, n, lt.makeArray(r)) : i.push(r)), i || []) : t
    },
    dequeue: function(e, t) {
      t = t || "fx";
      var n = lt.queue(e, t),
        r = n.length,
        i = n.shift(),
        o = lt._queueHooks(e, t),
        a = function() {
          lt.dequeue(e, t)
        };
      "inprogress" === i && (i = n.shift(), r--), i && ("fx" === t && n.unshift("inprogress"), delete o.stop, i.call(e, a, o)), !r && o && o.empty.fire()
    },
    _queueHooks: function(e, t) {
      var n = t + "queueHooks";
      return lt._data(e, n) || lt._data(e, n, {
        empty: lt.Callbacks("once memory").add(function() {
          lt._removeData(e, t + "queue"), lt._removeData(e, n)
        })
      })
    }
  }), lt.fn.extend({
    queue: function(e, n) {
      var r = 2;
      return "string" != typeof e && (n = e, e = "fx", r--), r > arguments.length ? lt.queue(this[0], e) : n === t ? this : this.each(function() {
        var t = lt.queue(this, e, n);
        lt._queueHooks(this, e), "fx" === e && "inprogress" !== t[0] && lt.dequeue(this, e)
      })
    },
    dequeue: function(e) {
      return this.each(function() {
        lt.dequeue(this, e)
      })
    },
    delay: function(e, t) {
      return e = lt.fx ? lt.fx.speeds[e] || e : e, t = t || "fx", this.queue(t, function(t, n) {
        var r = setTimeout(t, e);
        n.stop = function() {
          clearTimeout(r)
        }
      })
    },
    clearQueue: function(e) {
      return this.queue(e || "fx", [])
    },
    promise: function(e, n) {
      var r, i = 1,
        o = lt.Deferred(),
        a = this,
        s = this.length,
        u = function() {
          --i || o.resolveWith(a, [a])
        };
      for ("string" != typeof e && (n = e, e = t), e = e || "fx"; s--;) r = lt._data(a[s], e + "queueHooks"), r && r.empty && (i++, r.empty.add(u));
      return u(), o.promise(n)
    }
  });
  var Mt, At, Et = /[\t\r\n\f]/g,
    Dt = /\r/g,
    Ot = /^(?:input|select|textarea|button|object)$/i,
    Nt = /^(?:a|area)$/i,
    Pt = /^(?:checked|selected)$/i,
    jt = lt.support.getSetAttribute,
    Ft = lt.support.input;
  lt.fn.extend({
    attr: function(e, t) {
      return lt.access(this, lt.attr, e, t, arguments.length > 1)
    },
    removeAttr: function(e) {
      return this.each(function() {
        lt.removeAttr(this, e)
      })
    },
    prop: function(e, t) {
      return lt.access(this, lt.prop, e, t, arguments.length > 1)
    },
    removeProp: function(e) {
      return e = lt.propFix[e] || e, this.each(function() {
        try {
          this[e] = t, delete this[e]
        } catch (n) {}
      })
    },
    addClass: function(e) {
      var t, n, r, i, o, a = 0,
        s = this.length,
        u = "string" == typeof e && e;
      if (lt.isFunction(e)) return this.each(function(t) {
        lt(this).addClass(e.call(this, t, this.className))
      });
      if (u)
        for (t = (e || "").match(dt) || []; s > a; a++)
          if (n = this[a], r = 1 === n.nodeType && (n.className ? (" " + n.className + " ").replace(Et, " ") : " ")) {
            for (o = 0; i = t[o++];) 0 > r.indexOf(" " + i + " ") && (r += i + " ");
            n.className = lt.trim(r)
          }
      return this
    },
    removeClass: function(e) {
      var t, n, r, i, o, a = 0,
        s = this.length,
        u = 0 === arguments.length || "string" == typeof e && e;
      if (lt.isFunction(e)) return this.each(function(t) {
        lt(this).removeClass(e.call(this, t, this.className))
      });
      if (u)
        for (t = (e || "").match(dt) || []; s > a; a++)
          if (n = this[a], r = 1 === n.nodeType && (n.className ? (" " + n.className + " ").replace(Et, " ") : "")) {
            for (o = 0; i = t[o++];)
              for (; r.indexOf(" " + i + " ") >= 0;) r = r.replace(" " + i + " ", " ");
            n.className = e ? lt.trim(r) : ""
          }
      return this
    },
    toggleClass: function(e, t) {
      var n = typeof e;
      return "boolean" == typeof t && "string" === n ? t ? this.addClass(e) : this.removeClass(e) : this.each(lt.isFunction(e) ? function(n) {
        lt(this).toggleClass(e.call(this, n, this.className, t), t)
      } : function() {
        if ("string" === n)
          for (var t, r = 0, i = lt(this), o = e.match(dt) || []; t = o[r++];) i.hasClass(t) ? i.removeClass(t) : i.addClass(t);
        else(n === G || "boolean" === n) && (this.className && lt._data(this, "__className__", this.className), this.className = this.className || e === !1 ? "" : lt._data(this, "__className__") || "")
      })
    },
    hasClass: function(e) {
      for (var t = " " + e + " ", n = 0, r = this.length; r > n; n++)
        if (1 === this[n].nodeType && (" " + this[n].className + " ").replace(Et, " ").indexOf(t) >= 0) return !0;
      return !1
    },
    val: function(e) {
      var n, r, i, o = this[0];
      return arguments.length ? (i = lt.isFunction(e), this.each(function(n) {
        var o;
        1 === this.nodeType && (o = i ? e.call(this, n, lt(this).val()) : e, null == o ? o = "" : "number" == typeof o ? o += "" : lt.isArray(o) && (o = lt.map(o, function(e) {
          return null == e ? "" : e + ""
        })), r = lt.valHooks[this.type] || lt.valHooks[this.nodeName.toLowerCase()], r && "set" in r && r.set(this, o, "value") !== t || (this.value = o))
      })) : o ? (r = lt.valHooks[o.type] || lt.valHooks[o.nodeName.toLowerCase()], r && "get" in r && (n = r.get(o, "value")) !== t ? n : (n = o.value, "string" == typeof n ? n.replace(Dt, "") : null == n ? "" : n)) : void 0
    }
  }), lt.extend({
    valHooks: {
      option: {
        get: function(e) {
          var t = lt.find.attr(e, "value");
          return null != t ? t : e.text
        }
      },
      select: {
        get: function(e) {
          for (var t, n, r = e.options, i = e.selectedIndex, o = "select-one" === e.type || 0 > i, a = o ? null : [], s = o ? i + 1 : r.length, u = 0 > i ? s : o ? i : 0; s > u; u++)
            if (n = r[u], !(!n.selected && u !== i || (lt.support.optDisabled ? n.disabled : null !== n.getAttribute("disabled")) || n.parentNode.disabled && lt.nodeName(n.parentNode, "optgroup"))) {
              if (t = lt(n).val(), o) return t;
              a.push(t)
            }
          return a
        },
        set: function(e, t) {
          for (var n, r, i = e.options, o = lt.makeArray(t), a = i.length; a--;) r = i[a], (r.selected = lt.inArray(lt(r).val(), o) >= 0) && (n = !0);
          return n || (e.selectedIndex = -1), o
        }
      }
    },
    attr: function(e, n, r) {
      var i, o, a = e.nodeType;
      return e && 3 !== a && 8 !== a && 2 !== a ? typeof e.getAttribute === G ? lt.prop(e, n, r) : (1 === a && lt.isXMLDoc(e) || (n = n.toLowerCase(), i = lt.attrHooks[n] || (lt.expr.match.bool.test(n) ? At : Mt)), r === t ? i && "get" in i && null !== (o = i.get(e, n)) ? o : (o = lt.find.attr(e, n), null == o ? t : o) : null !== r ? i && "set" in i && (o = i.set(e, r, n)) !== t ? o : (e.setAttribute(n, r + ""), r) : (lt.removeAttr(e, n), t)) : void 0
    },
    removeAttr: function(e, t) {
      var n, r, i = 0,
        o = t && t.match(dt);
      if (o && 1 === e.nodeType)
        for (; n = o[i++];) r = lt.propFix[n] || n, lt.expr.match.bool.test(n) ? Ft && jt || !Pt.test(n) ? e[r] = !1 : e[lt.camelCase("default-" + n)] = e[r] = !1 : lt.attr(e, n, ""), e.removeAttribute(jt ? n : r)
    },
    attrHooks: {
      type: {
        set: function(e, t) {
          if (!lt.support.radioValue && "radio" === t && lt.nodeName(e, "input")) {
            var n = e.value;
            return e.setAttribute("type", t), n && (e.value = n), t
          }
        }
      }
    },
    propFix: {
      "for": "htmlFor",
      "class": "className"
    },
    prop: function(e, n, r) {
      var i, o, a, s = e.nodeType;
      return e && 3 !== s && 8 !== s && 2 !== s ? (a = 1 !== s || !lt.isXMLDoc(e), a && (n = lt.propFix[n] || n, o = lt.propHooks[n]), r !== t ? o && "set" in o && (i = o.set(e, r, n)) !== t ? i : e[n] = r : o && "get" in o && null !== (i = o.get(e, n)) ? i : e[n]) : void 0
    },
    propHooks: {
      tabIndex: {
        get: function(e) {
          var t = lt.find.attr(e, "tabindex");
          return t ? parseInt(t, 10) : Ot.test(e.nodeName) || Nt.test(e.nodeName) && e.href ? 0 : -1
        }
      }
    }
  }), At = {
    set: function(e, t, n) {
      return t === !1 ? lt.removeAttr(e, n) : Ft && jt || !Pt.test(n) ? e.setAttribute(!jt && lt.propFix[n] || n, n) : e[lt.camelCase("default-" + n)] = e[n] = !0, n
    }
  }, lt.each(lt.expr.match.bool.source.match(/\w+/g), function(e, n) {
    var r = lt.expr.attrHandle[n] || lt.find.attr;
    lt.expr.attrHandle[n] = Ft && jt || !Pt.test(n) ? function(e, n, i) {
      var o = lt.expr.attrHandle[n],
        a = i ? t : (lt.expr.attrHandle[n] = t) != r(e, n, i) ? n.toLowerCase() : null;
      return lt.expr.attrHandle[n] = o, a
    } : function(e, n, r) {
      return r ? t : e[lt.camelCase("default-" + n)] ? n.toLowerCase() : null
    }
  }), Ft && jt || (lt.attrHooks.value = {
    set: function(e, n, r) {
      return lt.nodeName(e, "input") ? (e.defaultValue = n, t) : Mt && Mt.set(e, n, r)
    }
  }), jt || (Mt = {
    set: function(e, n, r) {
      var i = e.getAttributeNode(r);
      return i || e.setAttributeNode(i = e.ownerDocument.createAttribute(r)), i.value = n += "", "value" === r || n === e.getAttribute(r) ? n : t
    }
  }, lt.expr.attrHandle.id = lt.expr.attrHandle.name = lt.expr.attrHandle.coords = function(e, n, r) {
    var i;
    return r ? t : (i = e.getAttributeNode(n)) && "" !== i.value ? i.value : null
  }, lt.valHooks.button = {
    get: function(e, n) {
      var r = e.getAttributeNode(n);
      return r && r.specified ? r.value : t
    },
    set: Mt.set
  }, lt.attrHooks.contenteditable = {
    set: function(e, t, n) {
      Mt.set(e, "" === t ? !1 : t, n)
    }
  }, lt.each(["width", "height"], function(e, n) {
    lt.attrHooks[n] = {
      set: function(e, r) {
        return "" === r ? (e.setAttribute(n, "auto"), r) : t
      }
    }
  })), lt.support.hrefNormalized || lt.each(["href", "src"], function(e, t) {
    lt.propHooks[t] = {
      get: function(e) {
        return e.getAttribute(t, 4)
      }
    }
  }), lt.support.style || (lt.attrHooks.style = {
    get: function(e) {
      return e.style.cssText || t
    },
    set: function(e, t) {
      return e.style.cssText = t + ""
    }
  }), lt.support.optSelected || (lt.propHooks.selected = {
    get: function(e) {
      var t = e.parentNode;
      return t && (t.selectedIndex, t.parentNode && t.parentNode.selectedIndex), null
    }
  }), lt.each(["tabIndex", "readOnly", "maxLength", "cellSpacing", "cellPadding", "rowSpan", "colSpan", "useMap", "frameBorder", "contentEditable"], function() {
    lt.propFix[this.toLowerCase()] = this
  }), lt.support.enctype || (lt.propFix.enctype = "encoding"), lt.each(["radio", "checkbox"], function() {
    lt.valHooks[this] = {
      set: function(e, n) {
        return lt.isArray(n) ? e.checked = lt.inArray(lt(e).val(), n) >= 0 : t
      }
    }, lt.support.checkOn || (lt.valHooks[this].get = function(e) {
      return null === e.getAttribute("value") ? "on" : e.value
    })
  });
  var It = /^(?:input|select|textarea)$/i,
    qt = /^key/,
    Rt = /^(?:mouse|contextmenu)|click/,
    Lt = /^(?:focusinfocus|focusoutblur)$/,
    Ht = /^([^.]*)(?:\.(.+)|)$/;
  lt.event = {
    global: {},
    add: function(e, n, r, i, o) {
      var a, s, u, c, l, f, d, h, p, m, g, v = lt._data(e);
      if (v) {
        for (r.handler && (c = r, r = c.handler, o = c.selector), r.guid || (r.guid = lt.guid++), (s = v.events) || (s = v.events = {}), (f = v.handle) || (f = v.handle = function(e) {
            return typeof lt === G || e && lt.event.triggered === e.type ? t : lt.event.dispatch.apply(f.elem, arguments)
          }, f.elem = e), n = (n || "").match(dt) || [""], u = n.length; u--;) a = Ht.exec(n[u]) || [], p = g = a[1], m = (a[2] || "").split(".").sort(), p && (l = lt.event.special[p] || {}, p = (o ? l.delegateType : l.bindType) || p, l = lt.event.special[p] || {}, d = lt.extend({
          type: p,
          origType: g,
          data: i,
          handler: r,
          guid: r.guid,
          selector: o,
          needsContext: o && lt.expr.match.needsContext.test(o),
          namespace: m.join(".")
        }, c), (h = s[p]) || (h = s[p] = [], h.delegateCount = 0, l.setup && l.setup.call(e, i, m, f) !== !1 || (e.addEventListener ? e.addEventListener(p, f, !1) : e.attachEvent && e.attachEvent("on" + p, f))), l.add && (l.add.call(e, d), d.handler.guid || (d.handler.guid = r.guid)), o ? h.splice(h.delegateCount++, 0, d) : h.push(d), lt.event.global[p] = !0);
        e = null
      }
    },
    remove: function(e, t, n, r, i) {
      var o, a, s, u, c, l, f, d, h, p, m, g = lt.hasData(e) && lt._data(e);
      if (g && (l = g.events)) {
        for (t = (t || "").match(dt) || [""], c = t.length; c--;)
          if (s = Ht.exec(t[c]) || [], h = m = s[1], p = (s[2] || "").split(".").sort(), h) {
            for (f = lt.event.special[h] || {}, h = (r ? f.delegateType : f.bindType) || h, d = l[h] || [], s = s[2] && RegExp("(^|\\.)" + p.join("\\.(?:.*\\.|)") + "(\\.|$)"), u = o = d.length; o--;) a = d[o], !i && m !== a.origType || n && n.guid !== a.guid || s && !s.test(a.namespace) || r && r !== a.selector && ("**" !== r || !a.selector) || (d.splice(o, 1), a.selector && d.delegateCount--, f.remove && f.remove.call(e, a));
            u && !d.length && (f.teardown && f.teardown.call(e, p, g.handle) !== !1 || lt.removeEvent(e, h, g.handle), delete l[h])
          } else
            for (h in l) lt.event.remove(e, h + t[c], n, r, !0);
        lt.isEmptyObject(l) && (delete g.handle, lt._removeData(e, "events"))
      }
    },
    trigger: function(n, r, i, o) {
      var a, s, u, c, l, f, d, h = [i || X],
        p = ut.call(n, "type") ? n.type : n,
        m = ut.call(n, "namespace") ? n.namespace.split(".") : [];
      if (u = f = i = i || X, 3 !== i.nodeType && 8 !== i.nodeType && !Lt.test(p + lt.event.triggered) && (p.indexOf(".") >= 0 && (m = p.split("."), p = m.shift(), m.sort()), s = 0 > p.indexOf(":") && "on" + p, n = n[lt.expando] ? n : new lt.Event(p, "object" == typeof n && n), n.isTrigger = o ? 2 : 3, n.namespace = m.join("."), n.namespace_re = n.namespace ? RegExp("(^|\\.)" + m.join("\\.(?:.*\\.|)") + "(\\.|$)") : null, n.result = t, n.target || (n.target = i), r = null == r ? [n] : lt.makeArray(r, [n]), l = lt.event.special[p] || {}, o || !l.trigger || l.trigger.apply(i, r) !== !1)) {
        if (!o && !l.noBubble && !lt.isWindow(i)) {
          for (c = l.delegateType || p, Lt.test(c + p) || (u = u.parentNode); u; u = u.parentNode) h.push(u), f = u;
          f === (i.ownerDocument || X) && h.push(f.defaultView || f.parentWindow || e)
        }
        for (d = 0;
          (u = h[d++]) && !n.isPropagationStopped();) n.type = d > 1 ? c : l.bindType || p, a = (lt._data(u, "events") || {})[n.type] && lt._data(u, "handle"), a && a.apply(u, r), a = s && u[s], a && lt.acceptData(u) && a.apply && a.apply(u, r) === !1 && n.preventDefault();
        if (n.type = p, !o && !n.isDefaultPrevented() && (!l._default || l._default.apply(h.pop(), r) === !1) && lt.acceptData(i) && s && i[p] && !lt.isWindow(i)) {
          f = i[s], f && (i[s] = null), lt.event.triggered = p;
          try {
            i[p]()
          } catch (g) {}
          lt.event.triggered = t, f && (i[s] = f)
        }
        return n.result
      }
    },
    dispatch: function(e) {
      e = lt.event.fix(e);
      var n, r, i, o, a, s = [],
        u = ot.call(arguments),
        c = (lt._data(this, "events") || {})[e.type] || [],
        l = lt.event.special[e.type] || {};
      if (u[0] = e, e.delegateTarget = this, !l.preDispatch || l.preDispatch.call(this, e) !== !1) {
        for (s = lt.event.handlers.call(this, e, c), n = 0;
          (o = s[n++]) && !e.isPropagationStopped();)
          for (e.currentTarget = o.elem, a = 0;
            (i = o.handlers[a++]) && !e.isImmediatePropagationStopped();)(!e.namespace_re || e.namespace_re.test(i.namespace)) && (e.handleObj = i, e.data = i.data, r = ((lt.event.special[i.origType] || {}).handle || i.handler).apply(o.elem, u), r !== t && (e.result = r) === !1 && (e.preventDefault(), e.stopPropagation()));
        return l.postDispatch && l.postDispatch.call(this, e), e.result
      }
    },
    handlers: function(e, n) {
      var r, i, o, a, s = [],
        u = n.delegateCount,
        c = e.target;
      if (u && c.nodeType && (!e.button || "click" !== e.type))
        for (; c != this; c = c.parentNode || this)
          if (1 === c.nodeType && (c.disabled !== !0 || "click" !== e.type)) {
            for (o = [], a = 0; u > a; a++) i = n[a], r = i.selector + " ", o[r] === t && (o[r] = i.needsContext ? lt(r, this).index(c) >= 0 : lt.find(r, this, null, [c]).length), o[r] && o.push(i);
            o.length && s.push({
              elem: c,
              handlers: o
            })
          }
      return n.length > u && s.push({
        elem: this,
        handlers: n.slice(u)
      }), s
    },
    fix: function(e) {
      if (e[lt.expando]) return e;
      var t, n, r, i = e.type,
        o = e,
        a = this.fixHooks[i];
      for (a || (this.fixHooks[i] = a = Rt.test(i) ? this.mouseHooks : qt.test(i) ? this.keyHooks : {}), r = a.props ? this.props.concat(a.props) : this.props, e = new lt.Event(o), t = r.length; t--;) n = r[t], e[n] = o[n];
      return e.target || (e.target = o.srcElement || X), 3 === e.target.nodeType && (e.target = e.target.parentNode), e.metaKey = !!e.metaKey, a.filter ? a.filter(e, o) : e
    },
    props: "altKey bubbles cancelable ctrlKey currentTarget eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),
    fixHooks: {},
    keyHooks: {
      props: "char charCode key keyCode".split(" "),
      filter: function(e, t) {
        return null == e.which && (e.which = null != t.charCode ? t.charCode : t.keyCode), e
      }
    },
    mouseHooks: {
      props: "button buttons clientX clientY fromElement offsetX offsetY pageX pageY screenX screenY toElement".split(" "),
      filter: function(e, n) {
        var r, i, o, a = n.button,
          s = n.fromElement;
        return null == e.pageX && null != n.clientX && (i = e.target.ownerDocument || X, o = i.documentElement, r = i.body, e.pageX = n.clientX + (o && o.scrollLeft || r && r.scrollLeft || 0) - (o && o.clientLeft || r && r.clientLeft || 0), e.pageY = n.clientY + (o && o.scrollTop || r && r.scrollTop || 0) - (o && o.clientTop || r && r.clientTop || 0)), !e.relatedTarget && s && (e.relatedTarget = s === e.target ? n.toElement : s), e.which || a === t || (e.which = 1 & a ? 1 : 2 & a ? 3 : 4 & a ? 2 : 0), e
      }
    },
    special: {
      load: {
        noBubble: !0
      },
      focus: {
        trigger: function() {
          if (this !== l() && this.focus) try {
            return this.focus(), !1
          } catch (e) {}
        },
        delegateType: "focusin"
      },
      blur: {
        trigger: function() {
          return this === l() && this.blur ? (this.blur(), !1) : t
        },
        delegateType: "focusout"
      },
      click: {
        trigger: function() {
          return lt.nodeName(this, "input") && "checkbox" === this.type && this.click ? (this.click(), !1) : t
        },
        _default: function(e) {
          return lt.nodeName(e.target, "a")
        }
      },
      beforeunload: {
        postDispatch: function(e) {
          e.result !== t && (e.originalEvent.returnValue = e.result)
        }
      }
    },
    simulate: function(e, t, n, r) {
      var i = lt.extend(new lt.Event, n, {
        type: e,
        isSimulated: !0,
        originalEvent: {}
      });
      r ? lt.event.trigger(i, null, t) : lt.event.dispatch.call(t, i), i.isDefaultPrevented() && n.preventDefault()
    }
  }, lt.removeEvent = X.removeEventListener ? function(e, t, n) {
    e.removeEventListener && e.removeEventListener(t, n, !1)
  } : function(e, t, n) {
    var r = "on" + t;
    e.detachEvent && (typeof e[r] === G && (e[r] = null), e.detachEvent(r, n))
  }, lt.Event = function(e, n) {
    return this instanceof lt.Event ? (e && e.type ? (this.originalEvent = e, this.type = e.type, this.isDefaultPrevented = e.defaultPrevented || e.returnValue === !1 || e.getPreventDefault && e.getPreventDefault() ? u : c) : this.type = e, n && lt.extend(this, n), this.timeStamp = e && e.timeStamp || lt.now(), this[lt.expando] = !0, t) : new lt.Event(e, n)
  }, lt.Event.prototype = {
    isDefaultPrevented: c,
    isPropagationStopped: c,
    isImmediatePropagationStopped: c,
    preventDefault: function() {
      var e = this.originalEvent;
      this.isDefaultPrevented = u, e && (e.preventDefault ? e.preventDefault() : e.returnValue = !1)
    },
    stopPropagation: function() {
      var e = this.originalEvent;
      this.isPropagationStopped = u, e && (e.stopPropagation && e.stopPropagation(), e.cancelBubble = !0)
    },
    stopImmediatePropagation: function() {
      this.isImmediatePropagationStopped = u, this.stopPropagation()
    }
  }, lt.each({
    mouseenter: "mouseover",
    mouseleave: "mouseout"
  }, function(e, t) {
    lt.event.special[e] = {
      delegateType: t,
      bindType: t,
      handle: function(e) {
        var n, r = this,
          i = e.relatedTarget,
          o = e.handleObj;
        return (!i || i !== r && !lt.contains(r, i)) && (e.type = o.origType, n = o.handler.apply(this, arguments), e.type = t), n
      }
    }
  }), lt.support.submitBubbles || (lt.event.special.submit = {
    setup: function() {
      return lt.nodeName(this, "form") ? !1 : (lt.event.add(this, "click._submit keypress._submit", function(e) {
        var n = e.target,
          r = lt.nodeName(n, "input") || lt.nodeName(n, "button") ? n.form : t;
        r && !lt._data(r, "submitBubbles") && (lt.event.add(r, "submit._submit", function(e) {
          e._submit_bubble = !0
        }), lt._data(r, "submitBubbles", !0))
      }), t)
    },
    postDispatch: function(e) {
      e._submit_bubble && (delete e._submit_bubble, this.parentNode && !e.isTrigger && lt.event.simulate("submit", this.parentNode, e, !0))
    },
    teardown: function() {
      return lt.nodeName(this, "form") ? !1 : (lt.event.remove(this, "._submit"), t)
    }
  }), lt.support.changeBubbles || (lt.event.special.change = {
    setup: function() {
      return It.test(this.nodeName) ? (("checkbox" === this.type || "radio" === this.type) && (lt.event.add(this, "propertychange._change", function(e) {
        "checked" === e.originalEvent.propertyName && (this._just_changed = !0)
      }), lt.event.add(this, "click._change", function(e) {
        this._just_changed && !e.isTrigger && (this._just_changed = !1), lt.event.simulate("change", this, e, !0)
      })), !1) : (lt.event.add(this, "beforeactivate._change", function(e) {
        var t = e.target;
        It.test(t.nodeName) && !lt._data(t, "changeBubbles") && (lt.event.add(t, "change._change", function(e) {
          !this.parentNode || e.isSimulated || e.isTrigger || lt.event.simulate("change", this.parentNode, e, !0)
        }), lt._data(t, "changeBubbles", !0))
      }), t)
    },
    handle: function(e) {
      var n = e.target;
      return this !== n || e.isSimulated || e.isTrigger || "radio" !== n.type && "checkbox" !== n.type ? e.handleObj.handler.apply(this, arguments) : t
    },
    teardown: function() {
      return lt.event.remove(this, "._change"), !It.test(this.nodeName)
    }
  }), lt.support.focusinBubbles || lt.each({
    focus: "focusin",
    blur: "focusout"
  }, function(e, t) {
    var n = 0,
      r = function(e) {
        lt.event.simulate(t, e.target, lt.event.fix(e), !0)
      };
    lt.event.special[t] = {
      setup: function() {
        0 === n++ && X.addEventListener(e, r, !0)
      },
      teardown: function() {
        0 === --n && X.removeEventListener(e, r, !0)
      }
    }
  }), lt.fn.extend({
    on: function(e, n, r, i, o) {
      var a, s;
      if ("object" == typeof e) {
        "string" != typeof n && (r = r || n, n = t);
        for (a in e) this.on(a, n, r, e[a], o);
        return this
      }
      if (null == r && null == i ? (i = n, r = n = t) : null == i && ("string" == typeof n ? (i = r, r = t) : (i = r, r = n, n = t)), i === !1) i = c;
      else if (!i) return this;
      return 1 === o && (s = i, i = function(e) {
        return lt().off(e), s.apply(this, arguments)
      }, i.guid = s.guid || (s.guid = lt.guid++)), this.each(function() {
        lt.event.add(this, e, i, r, n)
      })
    },
    one: function(e, t, n, r) {
      return this.on(e, t, n, r, 1)
    },
    off: function(e, n, r) {
      var i, o;
      if (e && e.preventDefault && e.handleObj) return i = e.handleObj, lt(e.delegateTarget).off(i.namespace ? i.origType + "." + i.namespace : i.origType, i.selector, i.handler), this;
      if ("object" == typeof e) {
        for (o in e) this.off(o, n, e[o]);
        return this
      }
      return (n === !1 || "function" == typeof n) && (r = n, n = t), r === !1 && (r = c), this.each(function() {
        lt.event.remove(this, e, r, n)
      })
    },
    trigger: function(e, t) {
      return this.each(function() {
        lt.event.trigger(e, t, this)
      })
    },
    triggerHandler: function(e, n) {
      var r = this[0];
      return r ? lt.event.trigger(e, n, r, !0) : t
    }
  });
  var Ut = /^.[^:#\[\.,]*$/,
    Yt = /^(?:parents|prev(?:Until|All))/,
    zt = lt.expr.match.needsContext,
    Bt = {
      children: !0,
      contents: !0,
      next: !0,
      prev: !0
    };
  lt.fn.extend({
    find: function(e) {
      var t, n = [],
        r = this,
        i = r.length;
      if ("string" != typeof e) return this.pushStack(lt(e).filter(function() {
        for (t = 0; i > t; t++)
          if (lt.contains(r[t], this)) return !0
      }));
      for (t = 0; i > t; t++) lt.find(e, r[t], n);
      return n = this.pushStack(i > 1 ? lt.unique(n) : n), n.selector = this.selector ? this.selector + " " + e : e, n
    },
    has: function(e) {
      var t, n = lt(e, this),
        r = n.length;
      return this.filter(function() {
        for (t = 0; r > t; t++)
          if (lt.contains(this, n[t])) return !0
      })
    },
    not: function(e) {
      return this.pushStack(d(this, e || [], !0))
    },
    filter: function(e) {
      return this.pushStack(d(this, e || [], !1))
    },
    is: function(e) {
      return !!d(this, "string" == typeof e && zt.test(e) ? lt(e) : e || [], !1).length
    },
    closest: function(e, t) {
      for (var n, r = 0, i = this.length, o = [], a = zt.test(e) || "string" != typeof e ? lt(e, t || this.context) : 0; i > r; r++)
        for (n = this[r]; n && n !== t; n = n.parentNode)
          if (11 > n.nodeType && (a ? a.index(n) > -1 : 1 === n.nodeType && lt.find.matchesSelector(n, e))) {
            n = o.push(n);
            break
          }
      return this.pushStack(o.length > 1 ? lt.unique(o) : o)
    },
    index: function(e) {
      return e ? "string" == typeof e ? lt.inArray(this[0], lt(e)) : lt.inArray(e.jquery ? e[0] : e, this) : this[0] && this[0].parentNode ? this.first().prevAll().length : -1
    },
    add: function(e, t) {
      var n = "string" == typeof e ? lt(e, t) : lt.makeArray(e && e.nodeType ? [e] : e),
        r = lt.merge(this.get(), n);
      return this.pushStack(lt.unique(r))
    },
    addBack: function(e) {
      return this.add(null == e ? this.prevObject : this.prevObject.filter(e))
    }
  }), lt.each({
    parent: function(e) {
      var t = e.parentNode;
      return t && 11 !== t.nodeType ? t : null
    },
    parents: function(e) {
      return lt.dir(e, "parentNode")
    },
    parentsUntil: function(e, t, n) {
      return lt.dir(e, "parentNode", n)
    },
    next: function(e) {
      return f(e, "nextSibling")
    },
    prev: function(e) {
      return f(e, "previousSibling")
    },
    nextAll: function(e) {
      return lt.dir(e, "nextSibling")
    },
    prevAll: function(e) {
      return lt.dir(e, "previousSibling")
    },
    nextUntil: function(e, t, n) {
      return lt.dir(e, "nextSibling", n)
    },
    prevUntil: function(e, t, n) {
      return lt.dir(e, "previousSibling", n)
    },
    siblings: function(e) {
      return lt.sibling((e.parentNode || {}).firstChild, e)
    },
    children: function(e) {
      return lt.sibling(e.firstChild)
    },
    contents: function(e) {
      return lt.nodeName(e, "iframe") ? e.contentDocument || e.contentWindow.document : lt.merge([], e.childNodes)
    }
  }, function(e, t) {
    lt.fn[e] = function(n, r) {
      var i = lt.map(this, t, n);
      return "Until" !== e.slice(-5) && (r = n), r && "string" == typeof r && (i = lt.filter(r, i)), this.length > 1 && (Bt[e] || (i = lt.unique(i)), Yt.test(e) && (i = i.reverse())), this.pushStack(i)
    }
  }), lt.extend({
    filter: function(e, t, n) {
      var r = t[0];
      return n && (e = ":not(" + e + ")"), 1 === t.length && 1 === r.nodeType ? lt.find.matchesSelector(r, e) ? [r] : [] : lt.find.matches(e, lt.grep(t, function(e) {
        return 1 === e.nodeType
      }))
    },
    dir: function(e, n, r) {
      for (var i = [], o = e[n]; o && 9 !== o.nodeType && (r === t || 1 !== o.nodeType || !lt(o).is(r));) 1 === o.nodeType && i.push(o), o = o[n];
      return i
    },
    sibling: function(e, t) {
      for (var n = []; e; e = e.nextSibling) 1 === e.nodeType && e !== t && n.push(e);
      return n
    }
  });
  var Vt = "abbr|article|aside|audio|bdi|canvas|data|datalist|details|figcaption|figure|footer|header|hgroup|mark|meter|nav|output|progress|section|summary|time|video",
    Wt = / jQuery\d+="(?:null|\d+)"/g,
    Gt = RegExp("<(?:" + Vt + ")[\\s/>]", "i"),
    Qt = /^\s+/,
    Xt = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi,
    Zt = /<([\w:]+)/,
    Kt = /<tbody/i,
    Jt = /<|&#?\w+;/,
    en = /<(?:script|style|link)/i,
    tn = /^(?:checkbox|radio)$/i,
    nn = /checked\s*(?:[^=]|=\s*.checked.)/i,
    rn = /^$|\/(?:java|ecma)script/i,
    on = /^true\/(.*)/,
    an = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g,
    sn = {
      option: [1, "<select multiple='multiple'>", "</select>"],
      legend: [1, "<fieldset>", "</fieldset>"],
      area: [1, "<map>", "</map>"],
      param: [1, "<object>", "</object>"],
      thead: [1, "<table>", "</table>"],
      tr: [2, "<table><tbody>", "</tbody></table>"],
      col: [2, "<table><tbody></tbody><colgroup>", "</colgroup></table>"],
      td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
      _default: lt.support.htmlSerialize ? [0, "", ""] : [1, "X<div>", "</div>"]
    },
    un = h(X),
    cn = un.appendChild(X.createElement("div"));
  sn.optgroup = sn.option, sn.tbody = sn.tfoot = sn.colgroup = sn.caption = sn.thead, sn.th = sn.td, lt.fn.extend({
    text: function(e) {
      return lt.access(this, function(e) {
        return e === t ? lt.text(this) : this.empty().append((this[0] && this[0].ownerDocument || X).createTextNode(e))
      }, null, e, arguments.length)
    },
    append: function() {
      return this.domManip(arguments, function(e) {
        if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
          var t = p(this, e);
          t.appendChild(e)
        }
      })
    },
    prepend: function() {
      return this.domManip(arguments, function(e) {
        if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
          var t = p(this, e);
          t.insertBefore(e, t.firstChild)
        }
      })
    },
    before: function() {
      return this.domManip(arguments, function(e) {
        this.parentNode && this.parentNode.insertBefore(e, this)
      })
    },
    after: function() {
      return this.domManip(arguments, function(e) {
        this.parentNode && this.parentNode.insertBefore(e, this.nextSibling)
      })
    },
    remove: function(e, t) {
      for (var n, r = e ? lt.filter(e, this) : this, i = 0; null != (n = r[i]); i++) t || 1 !== n.nodeType || lt.cleanData(b(n)), n.parentNode && (t && lt.contains(n.ownerDocument, n) && v(b(n, "script")), n.parentNode.removeChild(n));
      return this
    },
    empty: function() {
      for (var e, t = 0; null != (e = this[t]); t++) {
        for (1 === e.nodeType && lt.cleanData(b(e, !1)); e.firstChild;) e.removeChild(e.firstChild);
        e.options && lt.nodeName(e, "select") && (e.options.length = 0)
      }
      return this
    },
    clone: function(e, t) {
      return e = null == e ? !1 : e, t = null == t ? e : t, this.map(function() {
        return lt.clone(this, e, t)
      })
    },
    html: function(e) {
      return lt.access(this, function(e) {
        var n = this[0] || {},
          r = 0,
          i = this.length;
        if (e === t) return 1 === n.nodeType ? n.innerHTML.replace(Wt, "") : t;
        if (!("string" != typeof e || en.test(e) || !lt.support.htmlSerialize && Gt.test(e) || !lt.support.leadingWhitespace && Qt.test(e) || sn[(Zt.exec(e) || ["", ""])[1].toLowerCase()])) {
          e = e.replace(Xt, "<$1></$2>");
          try {
            for (; i > r; r++) n = this[r] || {}, 1 === n.nodeType && (lt.cleanData(b(n, !1)), n.innerHTML = e);
            n = 0
          } catch (o) {}
        }
        n && this.empty().append(e)
      }, null, e, arguments.length)
    },
    replaceWith: function() {
      var e = lt.map(this, function(e) {
          return [e.nextSibling, e.parentNode]
        }),
        t = 0;
      return this.domManip(arguments, function(n) {
        var r = e[t++],
          i = e[t++];
        i && (r && r.parentNode !== i && (r = this.nextSibling), lt(this).remove(), i.insertBefore(n, r))
      }, !0), t ? this : this.remove()
    },
    detach: function(e) {
      return this.remove(e, !0)
    },
    domManip: function(e, t, n) {
      e = rt.apply([], e);
      var r, i, o, a, s, u, c = 0,
        l = this.length,
        f = this,
        d = l - 1,
        h = e[0],
        p = lt.isFunction(h);
      if (p || !(1 >= l || "string" != typeof h || lt.support.checkClone) && nn.test(h)) return this.each(function(r) {
        var i = f.eq(r);
        p && (e[0] = h.call(this, r, i.html())), i.domManip(e, t, n)
      });
      if (l && (u = lt.buildFragment(e, this[0].ownerDocument, !1, !n && this), r = u.firstChild, 1 === u.childNodes.length && (u = r), r)) {
        for (a = lt.map(b(u, "script"), m), o = a.length; l > c; c++) i = u, c !== d && (i = lt.clone(i, !0, !0), o && lt.merge(a, b(i, "script"))), t.call(this[c], i, c);
        if (o)
          for (s = a[a.length - 1].ownerDocument, lt.map(a, g), c = 0; o > c; c++) i = a[c], rn.test(i.type || "") && !lt._data(i, "globalEval") && lt.contains(s, i) && (i.src ? lt._evalUrl(i.src) : lt.globalEval((i.text || i.textContent || i.innerHTML || "").replace(an, "")));
        u = r = null
      }
      return this
    }
  }), lt.each({
    appendTo: "append",
    prependTo: "prepend",
    insertBefore: "before",
    insertAfter: "after",
    replaceAll: "replaceWith"
  }, function(e, t) {
    lt.fn[e] = function(e) {
      for (var n, r = 0, i = [], o = lt(e), a = o.length - 1; a >= r; r++) n = r === a ? this : this.clone(!0), lt(o[r])[t](n), it.apply(i, n.get());
      return this.pushStack(i)
    }
  }), lt.extend({
    clone: function(e, t, n) {
      var r, i, o, a, s, u = lt.contains(e.ownerDocument, e);
      if (lt.support.html5Clone || lt.isXMLDoc(e) || !Gt.test("<" + e.nodeName + ">") ? o = e.cloneNode(!0) : (cn.innerHTML = e.outerHTML, cn.removeChild(o = cn.firstChild)), !(lt.support.noCloneEvent && lt.support.noCloneChecked || 1 !== e.nodeType && 11 !== e.nodeType || lt.isXMLDoc(e)))
        for (r = b(o), s = b(e), a = 0; null != (i = s[a]); ++a) r[a] && $(i, r[a]);
      if (t)
        if (n)
          for (s = s || b(e), r = r || b(o), a = 0; null != (i = s[a]); a++) y(i, r[a]);
        else y(e, o);
      return r = b(o, "script"), r.length > 0 && v(r, !u && b(e, "script")), r = s = i = null, o
    },
    buildFragment: function(e, t, n, r) {
      for (var i, o, a, s, u, c, l, f = e.length, d = h(t), p = [], m = 0; f > m; m++)
        if (o = e[m], o || 0 === o)
          if ("object" === lt.type(o)) lt.merge(p, o.nodeType ? [o] : o);
          else if (Jt.test(o)) {
        for (s = s || d.appendChild(t.createElement("div")), u = (Zt.exec(o) || ["", ""])[1].toLowerCase(), l = sn[u] || sn._default, s.innerHTML = l[1] + o.replace(Xt, "<$1></$2>") + l[2], i = l[0]; i--;) s = s.lastChild;
        if (!lt.support.leadingWhitespace && Qt.test(o) && p.push(t.createTextNode(Qt.exec(o)[0])), !lt.support.tbody)
          for (o = "table" !== u || Kt.test(o) ? "<table>" !== l[1] || Kt.test(o) ? 0 : s : s.firstChild, i = o && o.childNodes.length; i--;) lt.nodeName(c = o.childNodes[i], "tbody") && !c.childNodes.length && o.removeChild(c);
        for (lt.merge(p, s.childNodes), s.textContent = ""; s.firstChild;) s.removeChild(s.firstChild);
        s = d.lastChild
      } else p.push(t.createTextNode(o));
      for (s && d.removeChild(s), lt.support.appendChecked || lt.grep(b(p, "input"), w), m = 0; o = p[m++];)
        if ((!r || -1 === lt.inArray(o, r)) && (a = lt.contains(o.ownerDocument, o), s = b(d.appendChild(o), "script"), a && v(s), n))
          for (i = 0; o = s[i++];) rn.test(o.type || "") && n.push(o);
      return s = null, d
    },
    cleanData: function(e, t) {
      for (var n, r, i, o, a = 0, s = lt.expando, u = lt.cache, c = lt.support.deleteExpando, l = lt.event.special; null != (n = e[a]); a++)
        if ((t || lt.acceptData(n)) && (i = n[s], o = i && u[i])) {
          if (o.events)
            for (r in o.events) l[r] ? lt.event.remove(n, r) : lt.removeEvent(n, r, o.handle);
          u[i] && (delete u[i], c ? delete n[s] : typeof n.removeAttribute !== G ? n.removeAttribute(s) : n[s] = null, tt.push(i))
        }
    },
    _evalUrl: function(e) {
      return lt.ajax({
        url: e,
        type: "GET",
        dataType: "script",
        async: !1,
        global: !1,
        "throws": !0
      })
    }
  }), lt.fn.extend({
    wrapAll: function(e) {
      if (lt.isFunction(e)) return this.each(function(t) {
        lt(this).wrapAll(e.call(this, t))
      });
      if (this[0]) {
        var t = lt(e, this[0].ownerDocument).eq(0).clone(!0);
        this[0].parentNode && t.insertBefore(this[0]), t.map(function() {
          for (var e = this; e.firstChild && 1 === e.firstChild.nodeType;) e = e.firstChild;
          return e
        }).append(this)
      }
      return this
    },
    wrapInner: function(e) {
      return this.each(lt.isFunction(e) ? function(t) {
        lt(this).wrapInner(e.call(this, t))
      } : function() {
        var t = lt(this),
          n = t.contents();
        n.length ? n.wrapAll(e) : t.append(e)
      })
    },
    wrap: function(e) {
      var t = lt.isFunction(e);
      return this.each(function(n) {
        lt(this).wrapAll(t ? e.call(this, n) : e)
      })
    },
    unwrap: function() {
      return this.parent().each(function() {
        lt.nodeName(this, "body") || lt(this).replaceWith(this.childNodes)
      }).end()
    }
  });
  var ln, fn, dn, hn = /alpha\([^)]*\)/i,
    pn = /opacity\s*=\s*([^)]*)/,
    mn = /^(top|right|bottom|left)$/,
    gn = /^(none|table(?!-c[ea]).+)/,
    vn = /^margin/,
    yn = RegExp("^(" + ft + ")(.*)$", "i"),
    $n = RegExp("^(" + ft + ")(?!px)[a-z%]+$", "i"),
    bn = RegExp("^([+-])=(" + ft + ")", "i"),
    wn = {
      BODY: "block"
    },
    xn = {
      position: "absolute",
      visibility: "hidden",
      display: "block"
    },
    _n = {
      letterSpacing: 0,
      fontWeight: 400
    },
    kn = ["Top", "Right", "Bottom", "Left"],
    Sn = ["Webkit", "O", "Moz", "ms"];
  lt.fn.extend({
    css: function(e, n) {
      return lt.access(this, function(e, n, r) {
        var i, o, a = {},
          s = 0;
        if (lt.isArray(n)) {
          for (o = fn(e), i = n.length; i > s; s++) a[n[s]] = lt.css(e, n[s], !1, o);
          return a
        }
        return r !== t ? lt.style(e, n, r) : lt.css(e, n)
      }, e, n, arguments.length > 1)
    },
    show: function() {
      return k(this, !0)
    },
    hide: function() {
      return k(this)
    },
    toggle: function(e) {
      return "boolean" == typeof e ? e ? this.show() : this.hide() : this.each(function() {
        _(this) ? lt(this).show() : lt(this).hide()
      })
    }
  }), lt.extend({
    cssHooks: {
      opacity: {
        get: function(e, t) {
          if (t) {
            var n = dn(e, "opacity");
            return "" === n ? "1" : n
          }
        }
      }
    },
    cssNumber: {
      columnCount: !0,
      fillOpacity: !0,
      fontWeight: !0,
      lineHeight: !0,
      opacity: !0,
      order: !0,
      orphans: !0,
      widows: !0,
      zIndex: !0,
      zoom: !0
    },
    cssProps: {
      "float": lt.support.cssFloat ? "cssFloat" : "styleFloat"
    },
    style: function(e, n, r, i) {
      if (e && 3 !== e.nodeType && 8 !== e.nodeType && e.style) {
        var o, a, s, u = lt.camelCase(n),
          c = e.style;
        if (n = lt.cssProps[u] || (lt.cssProps[u] = x(c, u)), s = lt.cssHooks[n] || lt.cssHooks[u], r === t) return s && "get" in s && (o = s.get(e, !1, i)) !== t ? o : c[n];
        if (a = typeof r, "string" === a && (o = bn.exec(r)) && (r = (o[1] + 1) * o[2] + parseFloat(lt.css(e, n)), a = "number"), !(null == r || "number" === a && isNaN(r) || ("number" !== a || lt.cssNumber[u] || (r += "px"), lt.support.clearCloneStyle || "" !== r || 0 !== n.indexOf("background") || (c[n] = "inherit"), s && "set" in s && (r = s.set(e, r, i)) === t))) try {
          c[n] = r
        } catch (l) {}
      }
    },
    css: function(e, n, r, i) {
      var o, a, s, u = lt.camelCase(n);
      return n = lt.cssProps[u] || (lt.cssProps[u] = x(e.style, u)), s = lt.cssHooks[n] || lt.cssHooks[u], s && "get" in s && (a = s.get(e, !0, r)), a === t && (a = dn(e, n, i)), "normal" === a && n in _n && (a = _n[n]), "" === r || r ? (o = parseFloat(a), r === !0 || lt.isNumeric(o) ? o || 0 : a) : a
    }
  }), e.getComputedStyle ? (fn = function(t) {
    return e.getComputedStyle(t, null)
  }, dn = function(e, n, r) {
    var i, o, a, s = r || fn(e),
      u = s ? s.getPropertyValue(n) || s[n] : t,
      c = e.style;
    return s && ("" !== u || lt.contains(e.ownerDocument, e) || (u = lt.style(e, n)), $n.test(u) && vn.test(n) && (i = c.width, o = c.minWidth, a = c.maxWidth, c.minWidth = c.maxWidth = c.width = u, u = s.width, c.width = i, c.minWidth = o, c.maxWidth = a)), u
  }) : X.documentElement.currentStyle && (fn = function(e) {
    return e.currentStyle
  }, dn = function(e, n, r) {
    var i, o, a, s = r || fn(e),
      u = s ? s[n] : t,
      c = e.style;
    return null == u && c && c[n] && (u = c[n]), $n.test(u) && !mn.test(n) && (i = c.left, o = e.runtimeStyle, a = o && o.left, a && (o.left = e.currentStyle.left), c.left = "fontSize" === n ? "1em" : u, u = c.pixelLeft + "px", c.left = i, a && (o.left = a)), "" === u ? "auto" : u
  }), lt.each(["height", "width"], function(e, n) {
    lt.cssHooks[n] = {
      get: function(e, r, i) {
        return r ? 0 === e.offsetWidth && gn.test(lt.css(e, "display")) ? lt.swap(e, xn, function() {
          return T(e, n, i)
        }) : T(e, n, i) : t
      },
      set: function(e, t, r) {
        var i = r && fn(e);
        return S(e, t, r ? C(e, n, r, lt.support.boxSizing && "border-box" === lt.css(e, "boxSizing", !1, i), i) : 0)
      }
    }
  }), lt.support.opacity || (lt.cssHooks.opacity = {
    get: function(e, t) {
      return pn.test((t && e.currentStyle ? e.currentStyle.filter : e.style.filter) || "") ? .01 * parseFloat(RegExp.$1) + "" : t ? "1" : ""
    },
    set: function(e, t) {
      var n = e.style,
        r = e.currentStyle,
        i = lt.isNumeric(t) ? "alpha(opacity=" + 100 * t + ")" : "",
        o = r && r.filter || n.filter || "";
      n.zoom = 1, (t >= 1 || "" === t) && "" === lt.trim(o.replace(hn, "")) && n.removeAttribute && (n.removeAttribute("filter"), "" === t || r && !r.filter) || (n.filter = hn.test(o) ? o.replace(hn, i) : o + " " + i)
    }
  }), lt(function() {
    lt.support.reliableMarginRight || (lt.cssHooks.marginRight = {
      get: function(e, n) {
        return n ? lt.swap(e, {
          display: "inline-block"
        }, dn, [e, "marginRight"]) : t
      }
    }), !lt.support.pixelPosition && lt.fn.position && lt.each(["top", "left"], function(e, n) {
      lt.cssHooks[n] = {
        get: function(e, r) {
          return r ? (r = dn(e, n), $n.test(r) ? lt(e).position()[n] + "px" : r) : t
        }
      }
    })
  }), lt.expr && lt.expr.filters && (lt.expr.filters.hidden = function(e) {
    return 0 >= e.offsetWidth && 0 >= e.offsetHeight || !lt.support.reliableHiddenOffsets && "none" === (e.style && e.style.display || lt.css(e, "display"))
  }, lt.expr.filters.visible = function(e) {
    return !lt.expr.filters.hidden(e)
  }), lt.each({
    margin: "",
    padding: "",
    border: "Width"
  }, function(e, t) {
    lt.cssHooks[e + t] = {
      expand: function(n) {
        for (var r = 0, i = {}, o = "string" == typeof n ? n.split(" ") : [n]; 4 > r; r++) i[e + kn[r] + t] = o[r] || o[r - 2] || o[0];
        return i
      }
    }, vn.test(e) || (lt.cssHooks[e + t].set = S)
  });
  var Cn = /%20/g,
    Tn = /\[\]$/,
    Mn = /\r?\n/g,
    An = /^(?:submit|button|image|reset|file)$/i,
    En = /^(?:input|select|textarea|keygen)/i;
  lt.fn.extend({
    serialize: function() {
      return lt.param(this.serializeArray())
    },
    serializeArray: function() {
      return this.map(function() {
        var e = lt.prop(this, "elements");
        return e ? lt.makeArray(e) : this
      }).filter(function() {
        var e = this.type;
        return this.name && !lt(this).is(":disabled") && En.test(this.nodeName) && !An.test(e) && (this.checked || !tn.test(e))
      }).map(function(e, t) {
        var n = lt(this).val();
        return null == n ? null : lt.isArray(n) ? lt.map(n, function(e) {
          return {
            name: t.name,
            value: e.replace(Mn, "\r\n")
          }
        }) : {
          name: t.name,
          value: n.replace(Mn, "\r\n")
        }
      }).get()
    }
  }), lt.param = function(e, n) {
    var r, i = [],
      o = function(e, t) {
        t = lt.isFunction(t) ? t() : null == t ? "" : t, i[i.length] = encodeURIComponent(e) + "=" + encodeURIComponent(t)
      };
    if (n === t && (n = lt.ajaxSettings && lt.ajaxSettings.traditional), lt.isArray(e) || e.jquery && !lt.isPlainObject(e)) lt.each(e, function() {
      o(this.name, this.value)
    });
    else
      for (r in e) E(r, e[r], n, o);
    return i.join("&").replace(Cn, "+")
  }, lt.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "), function(e, t) {
    lt.fn[t] = function(e, n) {
      return arguments.length > 0 ? this.on(t, null, e, n) : this.trigger(t)
    }
  }), lt.fn.extend({
    hover: function(e, t) {
      return this.mouseenter(e).mouseleave(t || e)
    },
    bind: function(e, t, n) {
      return this.on(e, null, t, n)
    },
    unbind: function(e, t) {
      return this.off(e, null, t)
    },
    delegate: function(e, t, n, r) {
      return this.on(t, e, n, r)
    },
    undelegate: function(e, t, n) {
      return 1 === arguments.length ? this.off(e, "**") : this.off(t, e || "**", n)
    }
  });
  var Dn, On, Nn = lt.now(),
    Pn = /\?/,
    jn = /#.*$/,
    Fn = /([?&])_=[^&]*/,
    In = /^(.*?):[ \t]*([^\r\n]*)\r?$/gm,
    qn = /^(?:about|app|app-storage|.+-extension|file|res|widget):$/,
    Rn = /^(?:GET|HEAD)$/,
    Ln = /^\/\//,
    Hn = /^([\w.+-]+:)(?:\/\/([^\/?#:]*)(?::(\d+)|)|)/,
    Un = lt.fn.load,
    Yn = {},
    zn = {},
    Bn = "*/".concat("*");
  try {
    On = Q.href
  } catch (Vn) {
    On = X.createElement("a"), On.href = "", On = On.href
  }
  Dn = Hn.exec(On.toLowerCase()) || [], lt.fn.load = function(e, n, r) {
    if ("string" != typeof e && Un) return Un.apply(this, arguments);
    var i, o, a, s = this,
      u = e.indexOf(" ");
    return u >= 0 && (i = e.slice(u, e.length), e = e.slice(0, u)), lt.isFunction(n) ? (r = n, n = t) : n && "object" == typeof n && (a = "POST"), s.length > 0 && lt.ajax({
      url: e,
      type: a,
      dataType: "html",
      data: n
    }).done(function(e) {
      o = arguments, s.html(i ? lt("<div>").append(lt.parseHTML(e)).find(i) : e)
    }).complete(r && function(e, t) {
      s.each(r, o || [e.responseText, t, e])
    }), this
  }, lt.each(["ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend"], function(e, t) {
    lt.fn[t] = function(e) {
      return this.on(t, e)
    }
  }), lt.extend({
    active: 0,
    lastModified: {},
    etag: {},
    ajaxSettings: {
      url: On,
      type: "GET",
      isLocal: qn.test(Dn[1]),
      global: !0,
      processData: !0,
      async: !0,
      contentType: "application/x-www-form-urlencoded; charset=UTF-8",
      accepts: {
        "*": Bn,
        text: "text/plain",
        html: "text/html",
        xml: "application/xml, text/xml",
        json: "application/json, text/javascript"
      },
      contents: {
        xml: /xml/,
        html: /html/,
        json: /json/
      },
      responseFields: {
        xml: "responseXML",
        text: "responseText",
        json: "responseJSON"
      },
      converters: {
        "* text": String,
        "text html": !0,
        "text json": lt.parseJSON,
        "text xml": lt.parseXML
      },
      flatOptions: {
        url: !0,
        context: !0
      }
    },
    ajaxSetup: function(e, t) {
      return t ? N(N(e, lt.ajaxSettings), t) : N(lt.ajaxSettings, e)
    },
    ajaxPrefilter: D(Yn),
    ajaxTransport: D(zn),
    ajax: function(e, n) {
      function r(e, n, r, i) {
        var o, f, y, $, w, _ = n;
        2 !== b && (b = 2, u && clearTimeout(u), l = t, s = i || "", x.readyState = e > 0 ? 4 : 0, o = e >= 200 && 300 > e || 304 === e, r && ($ = P(d, x, r)), $ = j(d, $, x, o), o ? (d.ifModified && (w = x.getResponseHeader("Last-Modified"), w && (lt.lastModified[a] = w), w = x.getResponseHeader("etag"), w && (lt.etag[a] = w)), 204 === e || "HEAD" === d.type ? _ = "nocontent" : 304 === e ? _ = "notmodified" : (_ = $.state, f = $.data, y = $.error, o = !y)) : (y = _, (e || !_) && (_ = "error", 0 > e && (e = 0))), x.status = e, x.statusText = (n || _) + "", o ? m.resolveWith(h, [f, _, x]) : m.rejectWith(h, [x, _, y]), x.statusCode(v), v = t, c && p.trigger(o ? "ajaxSuccess" : "ajaxError", [x, d, o ? f : y]), g.fireWith(h, [x, _]), c && (p.trigger("ajaxComplete", [x, d]), --lt.active || lt.event.trigger("ajaxStop")))
      }
      "object" == typeof e && (n = e, e = t), n = n || {};
      var i, o, a, s, u, c, l, f, d = lt.ajaxSetup({}, n),
        h = d.context || d,
        p = d.context && (h.nodeType || h.jquery) ? lt(h) : lt.event,
        m = lt.Deferred(),
        g = lt.Callbacks("once memory"),
        v = d.statusCode || {},
        y = {},
        $ = {},
        b = 0,
        w = "canceled",
        x = {
          readyState: 0,
          getResponseHeader: function(e) {
            var t;
            if (2 === b) {
              if (!f)
                for (f = {}; t = In.exec(s);) f[t[1].toLowerCase()] = t[2];
              t = f[e.toLowerCase()]
            }
            return null == t ? null : t
          },
          getAllResponseHeaders: function() {
            return 2 === b ? s : null
          },
          setRequestHeader: function(e, t) {
            var n = e.toLowerCase();
            return b || (e = $[n] = $[n] || e, y[e] = t), this
          },
          overrideMimeType: function(e) {
            return b || (d.mimeType = e), this
          },
          statusCode: function(e) {
            var t;
            if (e)
              if (2 > b)
                for (t in e) v[t] = [v[t], e[t]];
              else x.always(e[x.status]);
            return this
          },
          abort: function(e) {
            var t = e || w;
            return l && l.abort(t), r(0, t), this
          }
        };
      if (m.promise(x).complete = g.add, x.success = x.done, x.error = x.fail, d.url = ((e || d.url || On) + "").replace(jn, "").replace(Ln, Dn[1] + "//"), d.type = n.method || n.type || d.method || d.type, d.dataTypes = lt.trim(d.dataType || "*").toLowerCase().match(dt) || [""], null == d.crossDomain && (i = Hn.exec(d.url.toLowerCase()), d.crossDomain = !(!i || i[1] === Dn[1] && i[2] === Dn[2] && (i[3] || ("http:" === i[1] ? "80" : "443")) === (Dn[3] || ("http:" === Dn[1] ? "80" : "443")))), d.data && d.processData && "string" != typeof d.data && (d.data = lt.param(d.data, d.traditional)), O(Yn, d, n, x), 2 === b) return x;
      c = d.global, c && 0 === lt.active++ && lt.event.trigger("ajaxStart"), d.type = d.type.toUpperCase(), d.hasContent = !Rn.test(d.type), a = d.url, d.hasContent || (d.data && (a = d.url += (Pn.test(a) ? "&" : "?") + d.data, delete d.data), d.cache === !1 && (d.url = Fn.test(a) ? a.replace(Fn, "$1_=" + Nn++) : a + (Pn.test(a) ? "&" : "?") + "_=" + Nn++)), d.ifModified && (lt.lastModified[a] && x.setRequestHeader("If-Modified-Since", lt.lastModified[a]), lt.etag[a] && x.setRequestHeader("If-None-Match", lt.etag[a])), (d.data && d.hasContent && d.contentType !== !1 || n.contentType) && x.setRequestHeader("Content-Type", d.contentType), x.setRequestHeader("Accept", d.dataTypes[0] && d.accepts[d.dataTypes[0]] ? d.accepts[d.dataTypes[0]] + ("*" !== d.dataTypes[0] ? ", " + Bn + "; q=0.01" : "") : d.accepts["*"]);
      for (o in d.headers) x.setRequestHeader(o, d.headers[o]);
      if (d.beforeSend && (d.beforeSend.call(h, x, d) === !1 || 2 === b)) return x.abort();
      w = "abort";
      for (o in {
          success: 1,
          error: 1,
          complete: 1
        }) x[o](d[o]);
      if (l = O(zn, d, n, x)) {
        x.readyState = 1, c && p.trigger("ajaxSend", [x, d]), d.async && d.timeout > 0 && (u = setTimeout(function() {
          x.abort("timeout")
        }, d.timeout));
        try {
          b = 1, l.send(y, r)
        } catch (_) {
          if (!(2 > b)) throw _;
          r(-1, _)
        }
      } else r(-1, "No Transport");
      return x
    },
    getJSON: function(e, t, n) {
      return lt.get(e, t, n, "json")
    },
    getScript: function(e, n) {
      return lt.get(e, t, n, "script")
    }
  }), lt.each(["get", "post"], function(e, n) {
    lt[n] = function(e, r, i, o) {
      return lt.isFunction(r) && (o = o || i, i = r, r = t), lt.ajax({
        url: e,
        type: n,
        dataType: o,
        data: r,
        success: i
      })
    }
  }), lt.ajaxSetup({
    accepts: {
      script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"
    },
    contents: {
      script: /(?:java|ecma)script/
    },
    converters: {
      "text script": function(e) {
        return lt.globalEval(e), e
      }
    }
  }), lt.ajaxPrefilter("script", function(e) {
    e.cache === t && (e.cache = !1), e.crossDomain && (e.type = "GET", e.global = !1)
  }), lt.ajaxTransport("script", function(e) {
    if (e.crossDomain) {
      var n, r = X.head || lt("head")[0] || X.documentElement;
      return {
        send: function(t, i) {
          n = X.createElement("script"), n.async = !0, e.scriptCharset && (n.charset = e.scriptCharset), n.src = e.url, n.onload = n.onreadystatechange = function(e, t) {
            (t || !n.readyState || /loaded|complete/.test(n.readyState)) && (n.onload = n.onreadystatechange = null, n.parentNode && n.parentNode.removeChild(n), n = null, t || i(200, "success"))
          }, r.insertBefore(n, r.firstChild)
        },
        abort: function() {
          n && n.onload(t, !0)
        }
      }
    }
  });
  var Wn = [],
    Gn = /(=)\?(?=&|$)|\?\?/;
  lt.ajaxSetup({
    jsonp: "callback",
    jsonpCallback: function() {
      var e = Wn.pop() || lt.expando + "_" + Nn++;
      return this[e] = !0, e
    }
  }), lt.ajaxPrefilter("json jsonp", function(n, r, i) {
    var o, a, s, u = n.jsonp !== !1 && (Gn.test(n.url) ? "url" : "string" == typeof n.data && !(n.contentType || "").indexOf("application/x-www-form-urlencoded") && Gn.test(n.data) && "data");
    return u || "jsonp" === n.dataTypes[0] ? (o = n.jsonpCallback = lt.isFunction(n.jsonpCallback) ? n.jsonpCallback() : n.jsonpCallback, u ? n[u] = n[u].replace(Gn, "$1" + o) : n.jsonp !== !1 && (n.url += (Pn.test(n.url) ? "&" : "?") + n.jsonp + "=" + o), n.converters["script json"] = function() {
      return s || lt.error(o + " was not called"), s[0]
    }, n.dataTypes[0] = "json", a = e[o], e[o] = function() {
      s = arguments
    }, i.always(function() {
      e[o] = a, n[o] && (n.jsonpCallback = r.jsonpCallback, Wn.push(o)), s && lt.isFunction(a) && a(s[0]), s = a = t
    }), "script") : t
  });
  var Qn, Xn, Zn = 0,
    Kn = e.ActiveXObject && function() {
      var e;
      for (e in Qn) Qn[e](t, !0)
    };
  lt.ajaxSettings.xhr = e.ActiveXObject ? function() {
    return !this.isLocal && F() || I()
  } : F, Xn = lt.ajaxSettings.xhr(), lt.support.cors = !!Xn && "withCredentials" in Xn, Xn = lt.support.ajax = !!Xn, Xn && lt.ajaxTransport(function(n) {
    if (!n.crossDomain || lt.support.cors) {
      var r;
      return {
        send: function(i, o) {
          var a, s, u = n.xhr();
          if (n.username ? u.open(n.type, n.url, n.async, n.username, n.password) : u.open(n.type, n.url, n.async), n.xhrFields)
            for (s in n.xhrFields) u[s] = n.xhrFields[s];
          n.mimeType && u.overrideMimeType && u.overrideMimeType(n.mimeType), n.crossDomain || i["X-Requested-With"] || (i["X-Requested-With"] = "XMLHttpRequest");
          try {
            for (s in i) u.setRequestHeader(s, i[s])
          } catch (c) {}
          u.send(n.hasContent && n.data || null), r = function(e, i) {
            var s, c, l, f;
            try {
              if (r && (i || 4 === u.readyState))
                if (r = t, a && (u.onreadystatechange = lt.noop, Kn && delete Qn[a]), i) 4 !== u.readyState && u.abort();
                else {
                  f = {}, s = u.status, c = u.getAllResponseHeaders(), "string" == typeof u.responseText && (f.text = u.responseText);
                  try {
                    l = u.statusText
                  } catch (d) {
                    l = ""
                  }
                  s || !n.isLocal || n.crossDomain ? 1223 === s && (s = 204) : s = f.text ? 200 : 404
                }
            } catch (h) {
              i || o(-1, h)
            }
            f && o(s, l, f, c)
          }, n.async ? 4 === u.readyState ? setTimeout(r) : (a = ++Zn, Kn && (Qn || (Qn = {}, lt(e).unload(Kn)), Qn[a] = r), u.onreadystatechange = r) : r()
        },
        abort: function() {
          r && r(t, !0)
        }
      }
    }
  });
  var Jn, er, tr = /^(?:toggle|show|hide)$/,
    nr = RegExp("^(?:([+-])=|)(" + ft + ")([a-z%]*)$", "i"),
    rr = /queueHooks$/,
    ir = [U],
    or = {
      "*": [function(e, t) {
        var n = this.createTween(e, t),
          r = n.cur(),
          i = nr.exec(t),
          o = i && i[3] || (lt.cssNumber[e] ? "" : "px"),
          a = (lt.cssNumber[e] || "px" !== o && +r) && nr.exec(lt.css(n.elem, e)),
          s = 1,
          u = 20;
        if (a && a[3] !== o) {
          o = o || a[3], i = i || [], a = +r || 1;
          do s = s || ".5", a /= s, lt.style(n.elem, e, a + o); while (s !== (s = n.cur() / r) && 1 !== s && --u)
        }
        return i && (a = n.start = +a || +r || 0, n.unit = o, n.end = i[1] ? a + (i[1] + 1) * i[2] : +i[2]), n
      }]
    };
  lt.Animation = lt.extend(L, {
    tweener: function(e, t) {
      lt.isFunction(e) ? (t = e, e = ["*"]) : e = e.split(" ");
      for (var n, r = 0, i = e.length; i > r; r++) n = e[r], or[n] = or[n] || [], or[n].unshift(t)
    },
    prefilter: function(e, t) {
      t ? ir.unshift(e) : ir.push(e)
    }
  }), lt.Tween = Y, Y.prototype = {
    constructor: Y,
    init: function(e, t, n, r, i, o) {
      this.elem = e, this.prop = n, this.easing = i || "swing", this.options = t, this.start = this.now = this.cur(), this.end = r, this.unit = o || (lt.cssNumber[n] ? "" : "px")
    },
    cur: function() {
      var e = Y.propHooks[this.prop];
      return e && e.get ? e.get(this) : Y.propHooks._default.get(this)
    },
    run: function(e) {
      var t, n = Y.propHooks[this.prop];
      return this.pos = t = this.options.duration ? lt.easing[this.easing](e, this.options.duration * e, 0, 1, this.options.duration) : e, this.now = (this.end - this.start) * t + this.start, this.options.step && this.options.step.call(this.elem, this.now, this), n && n.set ? n.set(this) : Y.propHooks._default.set(this), this
    }
  }, Y.prototype.init.prototype = Y.prototype, Y.propHooks = {
    _default: {
      get: function(e) {
        var t;
        return null == e.elem[e.prop] || e.elem.style && null != e.elem.style[e.prop] ? (t = lt.css(e.elem, e.prop, ""), t && "auto" !== t ? t : 0) : e.elem[e.prop]
      },
      set: function(e) {
        lt.fx.step[e.prop] ? lt.fx.step[e.prop](e) : e.elem.style && (null != e.elem.style[lt.cssProps[e.prop]] || lt.cssHooks[e.prop]) ? lt.style(e.elem, e.prop, e.now + e.unit) : e.elem[e.prop] = e.now
      }
    }
  }, Y.propHooks.scrollTop = Y.propHooks.scrollLeft = {
    set: function(e) {
      e.elem.nodeType && e.elem.parentNode && (e.elem[e.prop] = e.now)
    }
  }, lt.each(["toggle", "show", "hide"], function(e, t) {
    var n = lt.fn[t];
    lt.fn[t] = function(e, r, i) {
      return null == e || "boolean" == typeof e ? n.apply(this, arguments) : this.animate(z(t, !0), e, r, i)
    }
  }), lt.fn.extend({
    fadeTo: function(e, t, n, r) {
      return this.filter(_).css("opacity", 0).show().end().animate({
        opacity: t
      }, e, n, r)
    },
    animate: function(e, t, n, r) {
      var i = lt.isEmptyObject(e),
        o = lt.speed(t, n, r),
        a = function() {
          var t = L(this, lt.extend({}, e), o);
          (i || lt._data(this, "finish")) && t.stop(!0)
        };
      return a.finish = a, i || o.queue === !1 ? this.each(a) : this.queue(o.queue, a)
    },
    stop: function(e, n, r) {
      var i = function(e) {
        var t = e.stop;
        delete e.stop, t(r)
      };
      return "string" != typeof e && (r = n, n = e, e = t), n && e !== !1 && this.queue(e || "fx", []), this.each(function() {
        var t = !0,
          n = null != e && e + "queueHooks",
          o = lt.timers,
          a = lt._data(this);
        if (n) a[n] && a[n].stop && i(a[n]);
        else
          for (n in a) a[n] && a[n].stop && rr.test(n) && i(a[n]);
        for (n = o.length; n--;) o[n].elem !== this || null != e && o[n].queue !== e || (o[n].anim.stop(r), t = !1, o.splice(n, 1));
        (t || !r) && lt.dequeue(this, e)
      })
    },
    finish: function(e) {
      return e !== !1 && (e = e || "fx"), this.each(function() {
        var t, n = lt._data(this),
          r = n[e + "queue"],
          i = n[e + "queueHooks"],
          o = lt.timers,
          a = r ? r.length : 0;
        for (n.finish = !0, lt.queue(this, e, []), i && i.stop && i.stop.call(this, !0), t = o.length; t--;) o[t].elem === this && o[t].queue === e && (o[t].anim.stop(!0), o.splice(t, 1));
        for (t = 0; a > t; t++) r[t] && r[t].finish && r[t].finish.call(this);
        delete n.finish
      })
    }
  }), lt.each({
    slideDown: z("show"),
    slideUp: z("hide"),
    slideToggle: z("toggle"),
    fadeIn: {
      opacity: "show"
    },
    fadeOut: {
      opacity: "hide"
    },
    fadeToggle: {
      opacity: "toggle"
    }
  }, function(e, t) {
    lt.fn[e] = function(e, n, r) {
      return this.animate(t, e, n, r)
    }
  }), lt.speed = function(e, t, n) {
    var r = e && "object" == typeof e ? lt.extend({}, e) : {
      complete: n || !n && t || lt.isFunction(e) && e,
      duration: e,
      easing: n && t || t && !lt.isFunction(t) && t
    };
    return r.duration = lt.fx.off ? 0 : "number" == typeof r.duration ? r.duration : r.duration in lt.fx.speeds ? lt.fx.speeds[r.duration] : lt.fx.speeds._default, (null == r.queue || r.queue === !0) && (r.queue = "fx"), r.old = r.complete, r.complete = function() {
      lt.isFunction(r.old) && r.old.call(this), r.queue && lt.dequeue(this, r.queue)
    }, r
  }, lt.easing = {
    linear: function(e) {
      return e
    },
    swing: function(e) {
      return .5 - Math.cos(e * Math.PI) / 2
    }
  }, lt.timers = [], lt.fx = Y.prototype.init, lt.fx.tick = function() {
    var e, n = lt.timers,
      r = 0;
    for (Jn = lt.now(); n.length > r; r++) e = n[r], e() || n[r] !== e || n.splice(r--, 1);
    n.length || lt.fx.stop(), Jn = t
  }, lt.fx.timer = function(e) {
    e() && lt.timers.push(e) && lt.fx.start()
  }, lt.fx.interval = 13, lt.fx.start = function() {
    er || (er = setInterval(lt.fx.tick, lt.fx.interval))
  }, lt.fx.stop = function() {
    clearInterval(er), er = null
  }, lt.fx.speeds = {
    slow: 600,
    fast: 200,
    _default: 400
  }, lt.fx.step = {}, lt.expr && lt.expr.filters && (lt.expr.filters.animated = function(e) {
    return lt.grep(lt.timers, function(t) {
      return e === t.elem
    }).length
  }), lt.fn.offset = function(e) {
    if (arguments.length) return e === t ? this : this.each(function(t) {
      lt.offset.setOffset(this, e, t)
    });
    var n, r, i = {
        top: 0,
        left: 0
      },
      o = this[0],
      a = o && o.ownerDocument;
    return a ? (n = a.documentElement, lt.contains(n, o) ? (typeof o.getBoundingClientRect !== G && (i = o.getBoundingClientRect()), r = B(a), {
      top: i.top + (r.pageYOffset || n.scrollTop) - (n.clientTop || 0),
      left: i.left + (r.pageXOffset || n.scrollLeft) - (n.clientLeft || 0)
    }) : i) : void 0
  }, lt.offset = {
    setOffset: function(e, t, n) {
      var r = lt.css(e, "position");
      "static" === r && (e.style.position = "relative");
      var i, o, a = lt(e),
        s = a.offset(),
        u = lt.css(e, "top"),
        c = lt.css(e, "left"),
        l = ("absolute" === r || "fixed" === r) && lt.inArray("auto", [u, c]) > -1,
        f = {},
        d = {};
      l ? (d = a.position(), i = d.top, o = d.left) : (i = parseFloat(u) || 0, o = parseFloat(c) || 0), lt.isFunction(t) && (t = t.call(e, n, s)), null != t.top && (f.top = t.top - s.top + i), null != t.left && (f.left = t.left - s.left + o), "using" in t ? t.using.call(e, f) : a.css(f)
    }
  }, lt.fn.extend({
    position: function() {
      if (this[0]) {
        var e, t, n = {
            top: 0,
            left: 0
          },
          r = this[0];
        return "fixed" === lt.css(r, "position") ? t = r.getBoundingClientRect() : (e = this.offsetParent(), t = this.offset(), lt.nodeName(e[0], "html") || (n = e.offset()), n.top += lt.css(e[0], "borderTopWidth", !0), n.left += lt.css(e[0], "borderLeftWidth", !0)), {
          top: t.top - n.top - lt.css(r, "marginTop", !0),
          left: t.left - n.left - lt.css(r, "marginLeft", !0)
        }
      }
    },
    offsetParent: function() {
      return this.map(function() {
        for (var e = this.offsetParent || Z; e && !lt.nodeName(e, "html") && "static" === lt.css(e, "position");) e = e.offsetParent;
        return e || Z
      })
    }
  }), lt.each({
    scrollLeft: "pageXOffset",
    scrollTop: "pageYOffset"
  }, function(e, n) {
    var r = /Y/.test(n);
    lt.fn[e] = function(i) {
      return lt.access(this, function(e, i, o) {
        var a = B(e);
        return o === t ? a ? n in a ? a[n] : a.document.documentElement[i] : e[i] : (a ? a.scrollTo(r ? lt(a).scrollLeft() : o, r ? o : lt(a).scrollTop()) : e[i] = o, t)
      }, e, i, arguments.length, null)
    }
  }), lt.each({
    Height: "height",
    Width: "width"
  }, function(e, n) {
    lt.each({
      padding: "inner" + e,
      content: n,
      "": "outer" + e
    }, function(r, i) {
      lt.fn[i] = function(i, o) {
        var a = arguments.length && (r || "boolean" != typeof i),
          s = r || (i === !0 || o === !0 ? "margin" : "border");
        return lt.access(this, function(n, r, i) {
          var o;
          return lt.isWindow(n) ? n.document.documentElement["client" + e] : 9 === n.nodeType ? (o = n.documentElement, Math.max(n.body["scroll" + e], o["scroll" + e], n.body["offset" + e], o["offset" + e], o["client" + e])) : i === t ? lt.css(n, r, s) : lt.style(n, r, i, s)
        }, n, a ? i : t, a, null)
      }
    })
  }), lt.fn.size = function() {
    return this.length
  }, lt.fn.andSelf = lt.fn.addBack, "object" == typeof module && module && "object" == typeof module.exports ? module.exports = lt : (e.jQuery = e.$ = lt, "function" == typeof define && define.amd && define("jquery", [], function() {
    return lt
  }))
}(window),
function() {
  var e, t;
  jQuery.uaMatch = function(e) {
    e = e.toLowerCase();
    var t = /(chrome)[ \/]([\w.]+)/.exec(e) || /(webkit)[ \/]([\w.]+)/.exec(e) || /(opera)(?:.*version|)[ \/]([\w.]+)/.exec(e) || /(msie) ([\w.]+)/.exec(e) || e.indexOf("compatible") < 0 && /(mozilla)(?:.*? rv:([\w.]+)|)/.exec(e) || [];
    return {
      browser: t[1] || "",
      version: t[2] || "0"
    }
  }, e = jQuery.uaMatch(navigator.userAgent), t = {}, e.browser && (t[e.browser] = !0, t.version = e.version), t.chrome ? t.webkit = !0 : t.webkit && (t.safari = !0), jQuery.browser = t, jQuery.sub = function() {
    function e(t, n) {
      return new e.fn.init(t, n)
    }
    jQuery.extend(!0, e, this), e.superclass = this, e.fn = e.prototype = this(), e.fn.constructor = e, e.sub = this.sub, e.fn.init = function(n, r) {
      return r && r instanceof jQuery && !(r instanceof e) && (r = e(r)), jQuery.fn.init.call(this, n, r, t)
    }, e.fn.init.prototype = e.fn;
    var t = e(document);
    return e
  }
}(),
function(e) {
  e.extend(e.fn, {
    livequery: function(t, n, r) {
      var i, o = this;
      return e.isFunction(t) && (r = n, n = t, t = void 0), e.each(e.livequery.queries, function(e, a) {
        return o.selector != a.selector || o.context != a.context || t != a.type || n && n.$lqguid != a.fn.$lqguid || r && r.$lqguid != a.fn2.$lqguid ? void 0 : (i = a) && !1
      }), i = i || new e.livequery(this.selector, this.context, t, n, r), i.stopped = !1, i.run(), this
    },
    expire: function(t, n, r) {
      var i = this;
      return e.isFunction(t) && (r = n, n = t, t = void 0), e.each(e.livequery.queries, function(o, a) {
        i.selector != a.selector || i.context != a.context || t && t != a.type || n && n.$lqguid != a.fn.$lqguid || r && r.$lqguid != a.fn2.$lqguid || this.stopped || e.livequery.stop(a.id)
      }), this
    }
  }), e.livequery = function(t, n, r, i, o) {
    return this.selector = t, this.context = n, this.type = r, this.fn = i, this.fn2 = o, this.elements = [], this.stopped = !1, this.id = e.livequery.queries.push(this) - 1, i.$lqguid = i.$lqguid || e.livequery.guid++, o && (o.$lqguid = o.$lqguid || e.livequery.guid++), this
  }, e.livequery.prototype = {
    stop: function() {
      var e = this;
      this.type ? this.elements.unbind(this.type, this.fn) : this.fn2 && this.elements.each(function(t, n) {
        e.fn2.apply(n)
      }), this.elements = [], this.stopped = !0
    },
    run: function() {
      if (!this.stopped) {
        var t = this,
          n = this.elements,
          r = e(this.selector, this.context),
          i = r.not(n);
        this.elements = r, this.type ? (i.bind(this.type, this.fn), n.length > 0 && e.each(n, function(n, i) {
          e.inArray(i, r) < 0 && e.event.remove(i, t.type, t.fn)
        })) : (i.each(function() {
          t.fn.apply(this)
        }), this.fn2 && n.length > 0 && e.each(n, function(n, i) {
          e.inArray(i, r) < 0 && t.fn2.apply(i)
        }))
      }
    }
  }, e.extend(e.livequery, {
    guid: 0,
    queries: [],
    queue: [],
    running: !1,
    timeout: null,
    checkQueue: function() {
      if (e.livequery.running && e.livequery.queue.length)
        for (var t = e.livequery.queue.length; t--;) e.livequery.queries[e.livequery.queue.shift()].run()
    },
    pause: function() {
      e.livequery.running = !1
    },
    play: function() {
      e.livequery.running = !0, e.livequery.run()
    },
    registerPlugin: function() {
      e.each(arguments, function(t, n) {
        if (e.fn[n]) {
          var r = e.fn[n];
          e.fn[n] = function() {
            var t = r.apply(this, arguments);
            return e.livequery.run(), t
          }
        }
      })
    },
    run: function(t) {
      void 0 != t ? e.inArray(t, e.livequery.queue) < 0 && e.livequery.queue.push(t) : e.each(e.livequery.queries, function(t) {
        e.inArray(t, e.livequery.queue) < 0 && e.livequery.queue.push(t)
      }), e.livequery.timeout && clearTimeout(e.livequery.timeout), e.livequery.timeout = setTimeout(e.livequery.checkQueue, 20)
    },
    stop: function(t) {
      void 0 != t ? e.livequery.queries[t].stop() : e.each(e.livequery.queries, function(t) {
        e.livequery.queries[t].stop()
      })
    }
  }), e.livequery.registerPlugin("append", "prepend", "after", "before", "wrap", "attr", "removeAttr", "addClass", "removeClass", "toggleClass", "empty", "remove", "html"), e(function() {
    e.livequery.play()
  })
}(jQuery),
function(e) {
  function t() {
    var e = document.createElement("input"),
      t = "onpaste";
    return e.setAttribute(t, ""), "function" == typeof e[t] ? "paste" : "input"
  }
  var n, r = t() + ".mask",
    i = navigator.userAgent,
    o = /iphone/i.test(i),
    a = /chrome/i.test(i),
    s = /android/i.test(i);
  e.mask = {
    definitions: {
      9: "[0-9]",
      a: "[A-Za-z]",
      "*": "[A-Za-z0-9]"
    },
    autoclear: !0,
    dataName: "rawMaskFn",
    placeholder: "_"
  }, e.fn.extend({
    caret: function(e, t) {
      var n;
      if (0 !== this.length && !this.is(":hidden")) return "number" == typeof e ? (t = "number" == typeof t ? t : e, this.each(function() {
        this.setSelectionRange ? this.setSelectionRange(e, t) : this.createTextRange && (n = this.createTextRange(), n.collapse(!0), n.moveEnd("character", t), n.moveStart("character", e), n.select())
      })) : (this[0].setSelectionRange ? (e = this[0].selectionStart, t = this[0].selectionEnd) : document.selection && document.selection.createRange && (n = document.selection.createRange(), e = 0 - n.duplicate().moveStart("character", -1e5), t = e + n.text.length), {
        begin: e,
        end: t
      })
    },
    unmask: function() {
      return this.trigger("unmask")
    },
    mask: function(t, i) {
      var u, c, l, f, d, h;
      return !t && this.length > 0 ? (u = e(this[0]), u.data(e.mask.dataName)()) : (i = e.extend({
        autoclear: e.mask.autoclear,
        placeholder: e.mask.placeholder,
        completed: null
      }, i), c = e.mask.definitions, l = [], f = h = t.length, d = null, e.each(t.split(""), function(e, t) {
        "?" == t ? (h--, f = e) : c[t] ? (l.push(new RegExp(c[t])), null === d && (d = l.length - 1)) : l.push(null)
      }), this.trigger("unmask").each(function() {
        function u(e) {
          for (; ++e < h && !l[e];);
          return e
        }

        function p(e) {
          for (; --e >= 0 && !l[e];);
          return e
        }

        function m(e, t) {
          var n, r;
          if (!(0 > e)) {
            for (n = e, r = u(t); h > n; n++)
              if (l[n]) {
                if (!(h > r && l[n].test(k[r]))) break;
                k[n] = k[r], k[r] = i.placeholder, r = u(r)
              }
            w(), _.caret(Math.max(d, e))
          }
        }

        function g(e) {
          var t, n, r, o;
          for (t = e, n = i.placeholder; h > t; t++)
            if (l[t]) {
              if (r = u(t), o = k[t], k[t] = n, !(h > r && l[r].test(o))) break;
              n = o
            }
        }

        function v() {
          x(), _.val() != C && _.change()
        }

        function y(e) {
          var t, n, r, i = e.which;
          8 === i || 46 === i || o && 127 === i ? (t = _.caret(), n = t.begin, r = t.end, r - n === 0 && (n = 46 !== i ? p(n) : r = u(n - 1), r = 46 === i ? u(r) : r), b(n, r), m(n, r - 1), e.preventDefault()) : 13 === i ? v.call(this, e) : 27 === i && (_.val(C), _.caret(0, x()), e.preventDefault())
        }

        function $(t) {
          var n, r, o, a = t.which,
            c = _.caret();
          if (0 == a) {
            if (c.begin >= h) return _.val(_.val().substr(0, h)), t.preventDefault(), !1;
            c.begin == c.end && (a = _.val().charCodeAt(c.begin - 1), c.begin--, c.end--)
          }
          if (!(t.ctrlKey || t.altKey || t.metaKey || 32 > a) && a && 13 !== a) {
            if (c.end - c.begin !== 0 && (b(c.begin, c.end), m(c.begin, c.end - 1)), n = u(c.begin - 1), h > n && (r = String.fromCharCode(a), l[n].test(r))) {
              if (g(n), k[n] = r, w(), o = u(n), s) {
                var f = function() {
                  e.proxy(e.fn.caret, _, o)()
                };
                setTimeout(f, 0)
              } else _.caret(o);
              i.completed && o >= h && i.completed.call(_)
            }
            t.preventDefault()
          }
        }

        function b(e, t) {
          var n;
          for (n = e; t > n && h > n; n++) l[n] && (k[n] = i.placeholder)
        }

        function w() {
          _.val(k.join(""))
        }

        function x(e) {
          var t, n, r, o = _.val(),
            a = -1;
          for (t = 0, r = 0; h > t; t++)
            if (l[t]) {
              for (k[t] = i.placeholder; r++ < o.length;)
                if (n = o.charAt(r - 1), l[t].test(n)) {
                  k[t] = n, a = t;
                  break
                }
              if (r > o.length) break
            } else k[t] === o.charAt(r) && t !== f && (r++, a = t);
          return e ? w() : f > a + 1 ? i.autoclear || k.join("") === S ? (_.val() && _.val(""), b(0, h)) : w() : (w(), _.val(_.val().substring(0, a + 1))), f ? t : d
        }
        var _ = e(this),
          k = e.map(t.split(""), function(e) {
            return "?" != e ? c[e] ? i.placeholder : e : void 0
          }),
          S = k.join(""),
          C = _.val();
        _.data(e.mask.dataName, function() {
          return e.map(k, function(e, t) {
            return l[t] && e != i.placeholder ? e : null
          }).join("")
        }), _.attr("readonly") || _.one("unmask", function() {
          _.off(".mask").removeData(e.mask.dataName)
        }).on("focus.mask", function() {
          clearTimeout(n);
          var e;
          C = _.val(), e = x(), n = setTimeout(function() {
            w(), e == t.replace("?", "").length ? _.caret(0, e) : _.caret(e)
          }, 10)
        }).on("blur.mask", v).on("keydown.mask", y).on("keypress.mask", $).on(r, function() {
          setTimeout(function() {
            var e = x(!0);
            _.caret(e), i.completed && e == _.val().length && i.completed.call(_)
          }, 0)
        }), a && s && _.on("keyup.mask", $), x()
      }))
    }
  })
}(jQuery), $(document).ready(function() {
    Modernizr.inputtypes.date || $('input[type="date"]').livequery(function() {
      $(this).addClass("data")
    }), Modernizr.inputtypes.time || $('input[type="time"]').livequery(function() {
      $(this).addClass("hora")
    }), $('input[type="text"].data, .data_passado_futuro, .data-nascimento, .data_nascimento, input.nascimento').livequery(function() {
      $(this).mask("99/99/9999")
    }), $(".hora").livequery(function() {
      $(this).mask("99:99")
    }), $(".data_hora").livequery(function() {
      $(this).mask("99/99/9999 99:99")
    }), $(".mes_ano").livequery(function() {
      $(this).mask("99/9999")
    }), $(".placa_veiculo").livequery(function() {
      $(this).mask("aaa-9999")
    }), $(".cnpj").livequery(function() {
      $(this).mask("99.999.999/9999-99")
    }), $(".cpf").livequery(function() {
      $(this).mask("999.999.999-99")
    }), $(".cep_auto_complete, .cep").livequery(function() {
      var e = $(this);
      e.mask("99999-999", {
        completed: function() {
          preencherEndereco && preencherEndereco(e, e.val())
        }
      })
    })
  }), $("body").attr("data-utc-time-now", (new Date).toISOString()), $("body").attr("data-offset-from-utc", "-10800"),
  function(e) {
    e.browser || (e.browser = {}, e.browser.mozilla = /mozilla/.test(navigator.userAgent.toLowerCase()) && !/webkit/.test(navigator.userAgent.toLowerCase()), e.browser.webkit = /webkit/.test(navigator.userAgent.toLowerCase()), e.browser.opera = /opera/.test(navigator.userAgent.toLowerCase()), e.browser.msie = /msie/.test(navigator.userAgent.toLowerCase()));
    var t = {
      destroy: function() {
        var t = e(this);
        return t.unbind(".maskMoney"), e.browser.msie && (this.onpaste = null), this
      },
      mask: function() {
        return this.trigger("mask")
      },
      init: function(t) {
        return t = e.extend({
          symbol: "",
          symbolStay: !1,
          thousands: ",",
          decimal: ".",
          precision: 2,
          defaultZero: !0,
          allowZero: !1,
          allowNegative: !1
        }, t), this.each(function() {
          function n() {
            $ = !0
          }

          function r() {
            $ = !1
          }

          function i(t) {
            t = t || window.event;
            var i = t.which || t.charCode || t.keyCode;
            if (void 0 == i) return !1;
            if (48 > i || i > 57) return 45 == i ? (n(), y.val(m(y)), !1) : 43 == i ? (n(), y.val(y.val().replace("-", "")), !1) : 13 == i || 9 == i ? ($ && (r(), e(this).change()), !0) : !e.browser.mozilla || 37 != i && 39 != i || 0 != t.charCode ? (c(t), !0) : !0;
            if (o(y)) return !1;
            c(t);
            var a = String.fromCharCode(i),
              s = y.get(0),
              u = v(s),
              f = u.start,
              d = u.end;
            return s.value = s.value.substring(0, f) + a + s.value.substring(d, s.value.length), l(s, f + 1), n(), !1
          }

          function o(e) {
            var t = e.val().length >= e.attr("maxlength") && e.attr("maxlength") >= 0,
              n = v(e.get(0)),
              r = n.start,
              i = n.end,
              o = n.start != n.end && e.val().substring(r, i).match(/\d/) ? !0 : !1;
            return t && !o
          }

          function a(t) {
            t = t || window.event;
            var i = t.which || t.charCode || t.keyCode;
            if (void 0 == i) return !1;
            var o = y.get(0),
              a = v(o),
              s = a.start,
              u = a.end;
            return 8 == i ? (c(t), s == u ? (o.value = o.value.substring(0, s - 1) + o.value.substring(u, o.value.length), s -= 1) : o.value = o.value.substring(0, s) + o.value.substring(u, o.value.length), l(o, s), n(), !1) : 9 == i ? ($ && (e(this).change(), r()), !0) : 46 == i || 63272 == i ? (c(t), o.value = o.selectionStart == o.selectionEnd ? o.value.substring(0, s) + o.value.substring(u + 1, o.value.length) : o.value.substring(0, s) + o.value.substring(u, o.value.length), l(o, s), n(), !1) : !0
          }

          function s() {
            var e = h();
            if (y.val(y.val() == e ? "" : p("" == y.val() && t.defaultZero ? e : y.val())), this.createTextRange) {
              var n = this.createTextRange();
              n.collapse(!1), n.select()
            }
          }

          function u(n) {
            e.browser.msie && i(n), "" == y.val() || y.val() == p(h()) || y.val() == t.symbol ? y.val(t.allowZero ? t.symbolStay ? p(h()) : h() : "") : t.symbolStay ? t.symbolStay && y.val() == t.symbol && y.val(p(h())) : y.val(y.val().replace(t.symbol, ""))
          }

          function c(e) {
            e.preventDefault ? e.preventDefault() : e.returnValue = !1
          }

          function l(e, t) {
            var n = y.val().length;
            y.val(d(e.value));
            var r = y.val().length;
            t -= n - r, g(y, t)
          }

          function f() {
            var e = y.val();
            y.val(d(e))
          }

          function d(e) {
            e = e.replace(t.symbol, "");
            var n = "0123456789",
              r = e.length,
              i = "",
              o = "",
              a = "";
            if (0 != r && "-" == e.charAt(0) && (e = e.replace("-", ""), t.allowNegative && (a = "-")), 0 == r) {
              if (!t.defaultZero) return o;
              o = "0.00"
            }
            for (var s = 0; r > s && ("0" == e.charAt(s) || e.charAt(s) == t.decimal); s++);
            for (; r > s; s++) - 1 != n.indexOf(e.charAt(s)) && (i += e.charAt(s));
            var u = parseFloat(i);
            u = isNaN(u) ? 0 : u / Math.pow(10, t.precision), o = u.toFixed(t.precision), s = 0 == t.precision ? 0 : 1;
            var c, l = (o = o.split("."))[s].substr(0, t.precision);
            for (c = (o = o[0]).length;
              (c -= 3) >= 1;) o = o.substr(0, c) + t.thousands + o.substr(c);
            return p(t.precision > 0 ? a + o + t.decimal + l + Array(t.precision + 1 - l.length).join(0) : a + o)
          }

          function h() {
            var e = parseFloat("0") / Math.pow(10, t.precision);
            return e.toFixed(t.precision).replace(new RegExp("\\.", "g"), t.decimal)
          }

          function p(e) {
            if ("" != t.symbol) {
              var n = "";
              0 != e.length && "-" == e.charAt(0) && (e = e.replace("-", ""), n = "-"), e.substr(0, t.symbol.length) != t.symbol && (e = n + t.symbol + e)
            }
            return e
          }

          function m(e) {
            var n = e.val();
            return t.allowNegative ? "" != n && "-" == n.charAt(0) ? n.replace("-", "") : "-" + n : n
          }

          function g(t, n) {
            return e(t).each(function(e, t) {
              if (t.setSelectionRange) t.focus(), t.setSelectionRange(n, n);
              else if (t.createTextRange) {
                var r = t.createTextRange();
                r.collapse(!0), r.moveEnd("character", n), r.moveStart("character", n), r.select()
              }
            }), this
          }

          function v(e) {
            var t, n, r, i, o, a = 0,
              s = 0;
            return "number" == typeof e.selectionStart && "number" == typeof e.selectionEnd ? (a = e.selectionStart, s = e.selectionEnd) : (n = document.selection.createRange(), n && n.parentElement() == e && (i = e.value.length, t = e.value.replace(/\r\n/g, "\n"), r = e.createTextRange(), r.moveToBookmark(n.getBookmark()), o = e.createTextRange(), o.collapse(!1), r.compareEndPoints("StartToEnd", o) > -1 ? a = s = i : (a = -r.moveStart("character", -i), a += t.slice(0, a).split("\n").length - 1, r.compareEndPoints("EndToEnd", o) > -1 ? s = i : (s = -r.moveEnd("character", -i), s += t.slice(0, s).split("\n").length - 1)))), {
              start: a,
              end: s
            }
          }
          var y = e(this),
            $ = !1;
          y.attr("readonly") || (y.unbind(".maskMoney"), y.bind("keypress.maskMoney", i), y.bind("keydown.maskMoney", a), y.bind("blur.maskMoney", u), y.bind("focus.maskMoney", s), y.bind("mask.maskMoney", f))
        })
      }
    };
    e.fn.maskMoney = function(n) {
      return t[n] ? t[n].apply(this, Array.prototype.slice.call(arguments, 1)) : "object" != typeof n && n ? void e.error("Method " + n + " does not exist on jQuery.maskMoney") : t.init.apply(this, arguments)
    }
  }(window.jQuery || window.Zepto), this.dinheiro_bd = function(e) {
    var t, n;
    return e ? (t = e, ("string" == typeof e || "object" == typeof e) && (n = /,/, n.test(t) && (t = t.replace(/\./g, "").replace(",", ".")), t = parseFloat(t.replace("R$", ""))), t) : e
  }, this.dinheiro = function(e, t) {
    var n, r, i, o, a;
    for (e = dinheiro_bd(e), i = {
        se_zero_retorna_vazio: !1,
        unidade: "R$ ",
        prefixo: !0
      }, t && $.extend(i, t), a = 0, 0 > e && (e = Math.abs(e), a = 1), isNaN(e) && (e = "0"), n = Math.floor((100 * e + .5) % 100), e = Math.floor((100 * e + .5) / 100).toString(), 10 > n && (n = "0" + n), r = 0; r < Math.floor((e.length - (1 + r)) / 3);) e = e.substring(0, e.length - (4 * r + 3)) + "." + e.substring(e.length - (4 * r + 3)), r++;
    return o = e + "," + n, 1 === a && (o = " - " + o), i.se_zero_retorna_vazio && "0,00" === o ? o = "" : i.prefixo && (o = i.unidade + "" + o), o
  },
  function(e) {
    e.fn.toInputMoneyPtBr = function(t) {
      var n = {
        symbol: "R$ ",
        allowNegative: !1,
        clearValueOnBlurIfZero: !1,
        thousands: ".",
        decimal: ","
      };
      t && e.extend(n, t);
      var r = e(this);
      return r.maskMoney({
        thousands: n.thousands,
        decimal: n.decimal,
        symbol: n.symbol,
        allowNegative: n.allowNegative,
        allowZero: !n.clearValueOnBlurIfZero,
        symbolStay: !0
      }), r.attr("maxLength", "17"), r
    }
  }($),
  function() {
    var e, t;
    this.trace = function(e) {
      return window.console && console.log(e)
    }, this.compactFullArray = function(e) {
      var t, n;
      for (t = 0; t < e.length;) n = e[t], ("" === n || null === n || void 0 === n) && (e.splice(t, 1), t--), t++;
      return e
    }, this.idUnico = function(e) {
      var t, n;
      return n = {
        prefixo: "item_"
      }, e && $.extend(n, e), t = n.prefixo + Math.random() * Math.pow(10, 17) + Math.random() * Math.pow(10, 17) + Math.random() * Math.pow(10, 17) + Math.random() * Math.pow(10, 17), t.replace(/\./g, "")
    }, this.guid = function() {
      var e;
      return e = function() {
          return Math.floor(65536 * (1 + Math.random())).toString(16).substring(1)
        },
        function() {
          return [e() + e(), e(), e(), e(), e() + e() + e()].join("-")
        }
    }(), this.currentDominioEPortaServerSocket = function() {
      return $("body").data("dominio-e-porta-server-socket")
    }, this.currentEnviroment = function() {
      return $("body").data("enviroment")
    }, this.redirect = {
      login: function() {
        return redirect.url("/logar?save_current_url=" + encodeURIComponent(document.URL))
      },
      accessDenied: function() {
        return redirect.url("/access_denied?save_current_url=" + encodeURIComponent(document.URL))
      },
      url: function(e) {
        return $(".carregando-universal").show(), window.location = e, null
      }
    }, this.redirectTo = function(e) {
      return redirect.url(e)
    }, this.refresh = function() {
      return redirectTo(window.location.href)
    }, this.bool = function(e) {
      return "false" === e || 0 === e || e === !1 || null == e ? !1 : !0
    }, this.bool_null = function(e) {
      return null == e || "" === e ? null : "false" === e || 0 === e || e === !1 ? !1 : "true" === e || 1 === e || e === !0 || "" !== e ? !0 : void 0
    }, this.ucfirst = function(e) {
      var t;
      return e += "", t = e.charAt(0).toUpperCase(), t + e.substr(1)
    }, this.ano_bissexto = function(e) {
      return e % 4 !== 0 || e % 400 !== 0 && e % 100 === 0 ? !1 : !0
    }, this.diferencaEntreDatas = function(e, t, n) {
      var r, i, o, a, s, u, c, l, f, d, h;
      if (l = 1e3, u = 60 * l, s = 60 * u, a = 24 * s, d = 7 * a, c = 30 * a, h = 12 * c, i = scTimezone["new"](inverter_dia_mes_data(e)), o = scTimezone["new"](inverter_dia_mes_data(t)), f = o - i, isNaN(f)) return 0 / 0;
      switch (r = 0, n) {
        case "years":
          r = o.getFullYear() - i.getFullYear();
          break;
        case "months":
          r = 12 * o.getFullYear() + o.getMonth() - (12 * i.getFullYear() + i.getMonth());
          break;
        case "years":
          r = Math.floor(f / h);
          break;
        case "months":
          r = Math.floor(f / c);
          break;
        case "weeks":
          r = Math.floor(f / d);
          break;
        case "days":
          r = Math.floor(f / a);
          break;
        case "hours":
          r = Math.floor(f / s);
          break;
        case "minutes":
          r = Math.floor(f / u);
          break;
        case "seconds":
          r = Math.floor(f / l);
          break;
        default:
          r = "falta um desses argumentos dessa funcao diferencaEntreDatas(data_menor, data_maior, interval)"
      }
      return -1 * r
    }, this.multiplicar = function(e, t) {
      return e = dinheiro_bd(e), t = dinheiro_bd(t), parseFloat((e * t).toFixed(2), 10)
    }, this.dividir = function(e, t) {
      return e = dinheiro_bd(e), t = dinheiro_bd(t), parseFloat((e / t).toFixed(2), 10)
    }, this.somar = function(e, t) {
      return e = dinheiro_bd(e), t = dinheiro_bd(t), parseFloat((e + t).toFixed(2), 10)
    }, this.subtrair = function(e, t) {
      return e = dinheiro_bd(e), t = dinheiro_bd(t), parseFloat((e - t).toFixed(2), 10)
    }, this.in_array = function(e, t, n) {
      var r, i;
      if (r = "", i = !!n) {
        for (r in t)
          if (t[r] === e) return !0
      } else
        for (r in t)
          if (t[r] === e) return !0; return !1
    }, this.pad = function(e, t) {
      var n, r;
      if (e = e.toString(), r = "", t > e.length)
        for (n = 0; n < t - e.length;) r += "0", n++;
      return r + e.toString()
    }, this.createAccentRegexp = function(e) {
      var t, n, r, i;
      return i = _deaccent(e), n = i.replace(/([|()[{.+*?^$\\])/g, "\\$1"), t = function(e) {
        return charToAccentedCharClassMap[e] || e
      }, r = n.replace(/\S/g, t), new RegExp(r, "g")
    }, this._deaccent = function(e) {
      var t, n;
      n = e;
      for (t in charToAccentedCharClassMap) n = n.replace(new RegExp(charToAccentedCharClassMap[t], "g"), t);
      return n
    }, this.MESES = ["Janeiro", "Fevereiro", "Mar\xe7o", "Abril", "Maio", "Junho", "Julho", "Agosto", "Setembro", "Outubro", "Novembro", "Dezembro"], this.viewport = {
      _width: function() {
        return $(window).width()
      },
      _height: function() {
        return $(window).height()
      }
    }, this.isTouchable = function() {
      return "ontouchstart" in document.documentElement ? !0 : !1
    }, this.myBrowser = {
      webkit: function() {
        return $.browser.webkit || !1
      },
      chrome: function() {
        return $.browser.chrome || !1
      },
      mozilla: function() {
        return $.browser.mozilla || !1
      },
      ie7: function() {
        return $.browser.msie && 7 === parseInt($.browser.version, 10) ? !0 : !1
      },
      ie8: function() {
        return $.browser.msie && 8 === parseInt($.browser.version, 10) ? !0 : !1
      },
      ie9: function() {
        return $.browser.msie && 9 === parseInt($.browser.version, 10) ? !0 : !1
      },
      ie10: function() {
        return $.browser.msie && 10 === parseInt($.browser.version, 10) ? !0 : !1
      },
      ie11: function() {
        var e, t;
        return t = !!navigator.userAgent.match(/Trident\/7.0/), e = !!navigator.userAgent.match(/.NET4.0E/), t && e
      },
      ie: function() {
        return myBrowser.ie7() || myBrowser.ie8() || myBrowser.ie9() || myBrowser.ie10() || myBrowser.ie11()
      },
      iPod: function() {
        return navigator.userAgent.match(/iPod/i) ? !0 : !1
      }
    }, this.isMobile = {
      Android: function() {
        return navigator.userAgent.match(/Android/i) ? !0 : !1
      },
      BlackBerry: function() {
        return navigator.userAgent.match(/BlackBerry/i) ? !0 : !1
      },
      iOS: function() {
        return navigator.userAgent.match(/iPhone|iPad|iPod/i) ? !0 : !1
      },
      iPad: function() {
        return navigator.userAgent.match(/iPad/i) ? !0 : !1
      },
      iPhone: function() {
        return navigator.userAgent.match(/iPhone/i) ? !0 : !1
      },
      iPod: function() {
        return navigator.userAgent.match(/iPod/i) ? !0 : !1
      },
      Windows: function() {
        return navigator.userAgent.match(/IEMobile/i) ? !0 : !1
      },
      any: function() {
        return isMobile.Android() || isMobile.BlackBerry() || isMobile.iOS() || isMobile.Windows()
      }
    }, this.String.prototype.presence = function() {
      var e;
      return e = this.trim(), "" === e ? null : e
    }, this.String.prototype.truncate = function(e) {
      var t;
      return t = this.replace("", ""), t.length < e ? t : t.substring(0, e - 3) + "..."
    }, this.String.prototype.dinheiroBd = function() {
      return dinheiro_bd(this)
    }, this.String.prototype.capitalize = function(e) {
      var t;
      return null == e && (e = !1), e ? (t = function(e) {
        return e.capitalize()
      }, this.split(" ").map(t).join(" ")) : this.charAt(0).toUpperCase() + this.slice(1)
    }, this.String.prototype.toCamel = function() {
      return this.replace(/(\-[a-z])/g, function(e) {
        return e.toUpperCase().replace("-", "")
      })
    }, this.String.prototype.toUnderscore = function() {
      return this.replace(/([A-Z])/g, function(e) {
        return "_" + e.toLowerCase()
      }).replace(/^_/g, "")
    }, this.String.prototype.toJson = function() {
      return JSON.parse(this)
    }, this.String.prototype.isValidHourMinute = function() {
      var e, t;
      return t = this.trim(), e = /^([0-1]?[0-9]|2[0-3]):([0-5][0-9])(:[0-5][0-9])?$/.test(t)
    }, this.String.prototype.isValidDate = function() {
      var e, t, n;
      return n = this.trim(), e = n.split("-"), t = scTimezone["new"](e[0], e[1] - 1, e[2]), t && t.getMonth() + 1 === Number(e[1]) && t.getDate() === Number(e[2])
    }, this.String.prototype.isValidDatePtBr = function() {
      var e, t, n;
      return n = this.trim(), e = n.split("/"), t = scTimezone["new"](e[2], e[1] - 1, e[0]), t && t.getMonth() + 1 === Number(e[1]) && t.getDate() === Number(e[0])
    }, this.String.prototype.isValidEmail = function() {
      var e, t;
      return t = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z0-9]+)$/i, e = this.trim(), t.test(e) === !1 ? !1 : !0
    }, this.String.prototype.toI = function() {
      return this.to_i()
    }, this.String.prototype.to_i = function() {
      return parseInt(this.replace(",", "."), 10)
    }, this.String.prototype.toNumber = function() {
      return parseFloat(this.replace(",", "."), 10)
    }, this.String.prototype.to_boolean = function() {
      var e;
      return e = this.trim(), "true" === e || "1" === e ? !0 : "false" === e || "0" === e ? !1 : void 0
    }, this.String.prototype.toBoolean = function() {
      return this.to_boolean()
    }, this.String.prototype.empty = function() {
      var e;
      return e = "" === this.trim() ? !0 : !1
    }, this.String.prototype.trim = function() {
      return this.replace(/^\s*/, "").replace(/\s*$/, "")
    }, this.String.prototype.onlyDate = function() {
      return this.split(" ")[0]
    }, this.String.prototype.toDateBdString = function() {
      var e, t, n, r;
      return r = this.substring(0, 10).split("/"), t = r[0], n = r[1], e = r[2], "" + e + "-" + n + "-" + t
    }, this.String.prototype.toDatePt = function() {
      var e, t, n, r, i;
      return i = this.substring(0, 10).split("-"), t = i[2], n = i[1], e = i[0], r = "undefined" != typeof scTimezone && null !== scTimezone ? scTimezone["new"](e, n - 1, t) : new Date(e, n - 1, t), dateToPt(r)
    }, this.String.prototype.addQueryString = function(e) {
      var t;
      return t = this, t += t.match(/\?/) ? "&" + e : "?" + e
    }, this.String.prototype.getUrlParam = function(e) {
      var t;
      return t = new RegExp("[?&]" + e + "=([^&#]*)").exec(this), null === t ? null : t[1] || 0
    }, this.String.prototype.removeQueryString = function() {
      var e;
      return e = this, e.match(/\?/) && (e = e.split("?")[0], e.match(/\/$/) || (e += "/")), e
    }, this.String.prototype.replaceQueryString = function(e, t) {
      var n, r;
      return r = this.trim(), n = new RegExp("([?|&])" + e + "=.*?(&|$)", "i"), r.match(n) ? r.replace(n, "$1" + e + "=" + t + "$2") : r
    }, this.String.prototype.extractHourMinutesFromDateTime = function() {
      var e, t, n;
      return n = /[0-9]{2}(\:)[0-9]{2}/g, e = this, n.test(e) ? (t = e.match(n), t[0]) : void 0
    }, this.hasText = function(e, t) {
      var n, r, i;
      return i = "", r = void 0, n = $(this), i = createAccentRegexp(t), r = e.search(i) >= 0, r ? !0 : !1
    }, this.String.prototype.hasText = function(e) {
      var t;
      return t = this.trim(), hasText(t, e)
    }, this.String.prototype.toDateTimePt = function() {
      var e, t, n, r, i, o, a, s, u, c, l, f, d;
      return "" !== this ? (c = this.split("-"), t = c[2].substring(0, 2).to_i(), a = c[1].to_i(), e = c[0].to_i(), i = this.extractHourMinutesFromDateTime(), l = i.split(":"), n = l[0].to_i(), o = l[1].to_i(), u = scTimezone["new"](e, a - 1, t, n, o), d = !1, this.match(":") && (d = !0), r = u.getHours(), s = u.getMinutes(), f = this.toDatePt(), d === !0 && (f += " \xe0s " + pad(r, 2) + ":" + pad(s, 2))) : f = "", f
    }, this.Date.prototype.toDatePt = function() {
      return dateToPt(this)
    }, this.Date.prototype.toDateTimePt = function() {
      var e, t, n;
      return e = this.getHours(), t = this.getMinutes(), n = this.toDatePt(), n += " \xe0s " + pad(e, 2) + ":" + pad(t, 2)
    }, this.dateToPt = function(e) {
      var t, n, r;
      return n = e.getDate(), r = e.getMonth() + 1, t = e.getFullYear(), pad(n, 2) + "/" + pad(r, 2) + "/" + t
    }, this.data_to_mes_ano = function(e) {
      var t, n, r, i;
      return n = e.split("/"), r = n[1], t = n[2], i = numero_to_mes_extenso(r), i + "/" + t
    }, this.mes_to_numero = function(e) {
      var t;
      for (e = e.capitalize(), t = 0; t < MESES.length;) {
        if (MESES[t] === e) return pad(t + 1, 2);
        t++
      }
      return !1
    }, this.numero_to_mes_extenso = function(e) {
      return "string" == typeof e && (e = e.to_i()), MESES[e - 1]
    }, this.hoje = function() {
      return scTimezone.now.format("DD/MM/YYYY")
    }, this.dias = function(e) {
      return e > 1 ? e + " dias" : e + " dia"
    }, this.meses = function(e) {
      return dias > 1 ? e + " meses" : e + " m\xeas"
    }, this.inverter_dia_mes_data = function(e) {
      var t;
      return t = e.split("/"), t[1] + "/" + t[0] + "/" + t[2]
    }, this.incrementar_mes = function(e) {
      var t, n, r, i, o;
      return "" !== e && void 0 !== e ? (n = e.split("/"), r = n[0].to_i(), i = n[1].to_i(), t = n[2].to_i(), i += 1, i > 12 && (i = 1, t += 1), o = arrumar_data_estourada(pad(r, 2) + "/" + pad(i, 2) + "/" + pad(t, 2))) : ""
    }, this.numberOfDaysInMonth = function(e, t) {
      return scTimezone["new"](t, e, 0).getDate()
    }, this.dayInWeek = function(e) {
      var t, n, r, i;
      return t = e.ano, i = e.mes, r = e.dia, n = scTimezone["new"](t, i - 1, r), n.getDay() + 1
    }, this.arrumar_data_estourada = function(e) {
      var t, n, r, i, o, a;
      return "" !== e && void 0 !== e ? (o = [4, 6, 9, 11], a = [1, 3, 5, 7, 8, 10, 12], n = e.split("/"), r = n[0].to_i(), i = n[1].to_i(), t = n[2].to_i(), i > 12 && (i = 12), 2 === i && (ano_bissexto(t) ? r > 29 && (r = 29) : r > 28 && (r = 28)), in_array(i, o) && r > 30 && (r = 30), in_array(i, a) && r > 31 && (r = 31), pad(r, 2) + "/" + pad(i, 2) + "/" + t) : ""
    }, this.Array.prototype.presence = function() {
      var e;
      return e = this, 0 === e.length ? null : e
    }, this.Array.prototype.unique = function() {
      var e, t, n, r, i, o;
      for (r = [], n = {}, e = 0; e < this.length;) {
        for (i = this[e], o = n[i] = n[i] || [], t = 0; t < o.length && o[t] !== this[e];) t++;
        t === o.length && r.push(o[t] = i), e++
      }
      return r
    }, this.Array.prototype.toSentence = function() {
      var e, t, n, r;
      return e = this, 0 === this.length ? "" : 1 === this.length ? this[0] : (r = this.length - 1, t = this[r], e.splice(r, 1), n = e.join(", "), [n, t].join(" e "))
    }, this.Array.prototype.compactFull = function() {
      var e, t;
      return e = void 0, t = this, compactFullArray(t)
    }, this.Array.prototype.removeElement = function() {
      var e, t, n, r;
      for (r = void 0, t = arguments, n = t.length, e = void 0; n && this.length;)
        for (r = t[--n]; - 1 !== (e = this.indexOf(r));) this.splice(e, 1);
      return this
    }, this.Array.prototype.ocorrencias = function(e) {
      var t, n, r, i;
      for (i = {}, t = 0; t < this.length;) n = this[t], i[n] = i[n] ? i[n] + 1 : 1, t++;
      return r = i[e], void 0 === r ? 0 : r
    }, this.Array.prototype.flatten = e = function() {
      var t, n, r, i;
      for (i = [], n = 0, r = this.length; r > n;) t = Object.prototype.toString.call(this[n]).split(" ").pop().split("]").shift().toLowerCase(), t && (i = i.concat(/^(array|collection|arguments|object)$/.test(t) ? e.call(this[n]) : this[n])), n++;
      return i
    }, this.Array.prototype.forEach || (this.Array.prototype.forEach = function(e) {
      var t, n, r, i;
      if (r = this.length, "function" != typeof e) throw new TypeError;
      for (t = arguments[1], n = 0, i = []; r > n;) n in this && e.call(t, this[n], n, this), i.push(n++);
      return i
    }), this.isMiddleButton = function(e) {
      return 1 === e.button
    }, this.isLeftButton = function(e) {
      return 0 === e.button
    }, this.isLeftOrMiddleButton = function(e) {
      return isLeftButton(e) || isMiddleButton(e)
    }, this.charToAccentedCharClassMap = {
      A: "[Aa\xaa\xc0-\xc5\xe0-\xe5\u0100-\u0105\u01cd\u01ce\u0200-\u0203\u0226\u0227\u1d2c\u1d43\u1e00\u1e01\u1e9a\u1ea0-\u1ea3\u2090\u2100\u2101\u213b\u249c\u24b6\u24d0\u3371-\u3374\u3380-\u3384\u3388\u3389\u33a9-\u33af\u33c2\u33ca\u33df\u33ff\uff21\uff41]",
      B: "[Bb\u1d2e\u1d47\u1e02-\u1e07\u212c\u249d\u24b7\u24d1\u3374\u3385-\u3387\u33c3\u33c8\u33d4\u33dd\uff22\uff42]",
      C: "[Cc\xc7\xe7\u0106-\u010d\u1d9c\u2100\u2102\u2103\u2105\u2106\u212d\u216d\u217d\u249e\u24b8\u24d2\u3376\u3388\u3389\u339d\u33a0\u33a4\u33c4-\u33c7\uff23\uff43]",
      D: "[Dd\u010e\u010f\u01c4-\u01c6\u01f1-\u01f3\u1d30\u1d48\u1e0a-\u1e13\u2145\u2146\u216e\u217e\u249f\u24b9\u24d3\u32cf\u3372\u3377-\u3379\u3397\u33ad-\u33af\u33c5\u33c8\uff24\uff44]",
      E: "[Ee\xc8-\xcb\xe8-\xeb\u0112-\u011b\u0204-\u0207\u0228\u0229\u1d31\u1d49\u1e18-\u1e1b\u1eb8-\u1ebd\u2091\u2121\u212f\u2130\u2147\u24a0\u24ba\u24d4\u3250\u32cd\u32ce\uff25\uff45]",
      F: "[Ff\u1da0\u1e1e\u1e1f\u2109\u2131\u213b\u24a1\u24bb\u24d5\u338a-\u338c\u3399\ufb00-\ufb04\uff26\uff46]",
      G: "[Gg\u011c-\u0123\u01e6\u01e7\u01f4\u01f5\u1d33\u1d4d\u1e20\u1e21\u210a\u24a2\u24bc\u24d6\u32cc\u32cd\u3387\u338d-\u338f\u3393\u33ac\u33c6\u33c9\u33d2\u33ff\uff27\uff47]",
      H: "[Hh\u0124\u0125\u021e\u021f\u02b0\u1d34\u1e22-\u1e2b\u1e96\u210b-\u210e\u24a3\u24bd\u24d7\u32cc\u3371\u3390-\u3394\u33ca\u33cb\u33d7\uff28\uff48]",
      I: "[Ii\xcc-\xcf\xec-\xef\u0128-\u0130\u0132\u0133\u01cf\u01d0\u0208-\u020b\u1d35\u1d62\u1e2c\u1e2d\u1ec8-\u1ecb\u2071\u2110\u2111\u2139\u2148\u2160-\u2163\u2165-\u2168\u216a\u216b\u2170-\u2173\u2175-\u2178\u217a\u217b\u24a4\u24be\u24d8\u337a\u33cc\u33d5\ufb01\ufb03\uff29\uff49]",
      J: "[Jj\u0132-\u0135\u01c7-\u01cc\u01f0\u02b2\u1d36\u2149\u24a5\u24bf\u24d9\u2c7c\uff2a\uff4a]",
      K: "[Kk\u0136\u0137\u01e8\u01e9\u1d37\u1d4f\u1e30-\u1e35\u212a\u24a6\u24c0\u24da\u3384\u3385\u3389\u338f\u3391\u3398\u339e\u33a2\u33a6\u33aa\u33b8\u33be\u33c0\u33c6\u33cd-\u33cf\uff2b\uff4b]",
      L: "[Ll\u0139-\u0140\u01c7-\u01c9\u02e1\u1d38\u1e36\u1e37\u1e3a-\u1e3d\u2112\u2113\u2121\u216c\u217c\u24a7\u24c1\u24db\u32cf\u3388\u3389\u33d0-\u33d3\u33d5\u33d6\u33ff\ufb02\ufb04\uff2c\uff4c]",
      M: "[Mm\u1d39\u1d50\u1e3e-\u1e43\u2120\u2122\u2133\u216f\u217f\u24a8\u24c2\u24dc\u3377-\u3379\u3383\u3386\u338e\u3392\u3396\u3399-\u33a8\u33ab\u33b3\u33b7\u33b9\u33bd\u33bf\u33c1\u33c2\u33ce\u33d0\u33d4-\u33d6\u33d8\u33d9\u33de\u33df\uff2d\uff4d]",
      N: "[Nn\xd1\xf1\u0143-\u0149\u01ca-\u01cc\u01f8\u01f9\u1d3a\u1e44-\u1e4b\u207f\u2115\u2116\u24a9\u24c3\u24dd\u3381\u338b\u339a\u33b1\u33b5\u33bb\u33cc\u33d1\uff2e\uff4e]",
      O: "[Oo\xba\xd2-\xd6\xf2-\xf6\u014c-\u0151\u01a0\u01a1\u01d1\u01d2\u01ea\u01eb\u020c-\u020f\u022e\u022f\u1d3c\u1d52\u1ecc-\u1ecf\u2092\u2105\u2116\u2134\u24aa\u24c4\u24de\u3375\u33c7\u33d2\u33d6\uff2f\uff4f]",
      P: "[Pp\u1d3e\u1d56\u1e54-\u1e57\u2119\u24ab\u24c5\u24df\u3250\u3371\u3376\u3380\u338a\u33a9-\u33ac\u33b0\u33b4\u33ba\u33cb\u33d7-\u33da\uff30\uff50]",
      Q: "[Qq\u211a\u24ac\u24c6\u24e0\u33c3\uff31\uff51]",
      R: "[Rr\u0154-\u0159\u0210-\u0213\u02b3\u1d3f\u1d63\u1e58-\u1e5b\u1e5e\u1e5f\u20a8\u211b-\u211d\u24ad\u24c7\u24e1\u32cd\u3374\u33ad-\u33af\u33da\u33db\uff32\uff52]",
      S: "[Ss\u015a-\u0161\u017f\u0218\u0219\u02e2\u1e60-\u1e63\u20a8\u2101\u2120\u24ae\u24c8\u24e2\u33a7\u33a8\u33ae-\u33b3\u33db\u33dc\ufb06\uff33\uff53]",
      T: "[Tt\u0162-\u0165\u021a\u021b\u1d40\u1d57\u1e6a-\u1e71\u1e97\u2121\u2122\u24af\u24c9\u24e3\u3250\u32cf\u3394\u33cf\ufb05\ufb06\uff34\uff54]",
      U: "[Uu\xd9-\xdc\xf9-\xfc\u0168-\u0173\u01af\u01b0\u01d3\u01d4\u0214-\u0217\u1d41\u1d58\u1d64\u1e72-\u1e77\u1ee4-\u1ee7\u2106\u24b0\u24ca\u24e4\u3373\u337a\uff35\uff55]",
      V: "[Vv\u1d5b\u1d65\u1e7c-\u1e7f\u2163-\u2167\u2173-\u2177\u24b1\u24cb\u24e5\u2c7d\u32ce\u3375\u33b4-\u33b9\u33dc\u33de\uff36\uff56]",
      W: "[Ww\u0174\u0175\u02b7\u1d42\u1e80-\u1e89\u1e98\u24b2\u24cc\u24e6\u33ba-\u33bf\u33dd\uff37\uff57]",
      X: "[Xx\u02e3\u1e8a-\u1e8d\u2093\u213b\u2168-\u216b\u2178-\u217b\u24b3\u24cd\u24e7\u33d3\uff38\uff58]",
      Y: "[Yy\xdd\xfd\xff\u0176-\u0178\u0232\u0233\u02b8\u1e8e\u1e8f\u1e99\u1ef2-\u1ef9\u24b4\u24ce\u24e8\u33c9\uff39\uff59]",
      Z: "[Zz\u0179-\u017e\u01f1-\u01f3\u1dbb\u1e90-\u1e95\u2124\u2128\u24b5\u24cf\u24e9\u3390-\u3394\uff3a\uff5a]"
    }, this.desabilitar = function(e) {
      return e.animate({
        opacity: .5
      }, 700, function() {
        return $(this).addClass("desabilitado")
      })
    }, this.parcelar = function(e, t) {
      var n, r, i, o, a;
      for (i = new Array, r = parseFloat((e / t).toFixed(2), 10), o = parseFloat((r * t).toFixed(2), 10), a = 0, e !== o && (a = parseFloat((e - o).toFixed(2), 10)), n = 0; t > n;) i[n] = n === t - 1 ? dinheiro(r + a, {
        prefixo: !1
      }) : dinheiro(r, {
        prefixo: !1
      }), n++;
      return i
    }, this.porcentagem_desconto = function() {
      var e;
      return e = {
        valor_total: null,
        desconto: null
      }, options ? $.extend(e, options) : void 0
    }, this.descontar = function(e) {
      var t, n, r;
      return n = {
        valor_total: null,
        desconto: null
      }, e && $.extend(n, e), r = n.valor_total, t = n.desconto / 100, subtrair(r, multiplicar(r, t))
    }, this.escurecerTela = function() {
      var e;
      return e = $("<div></div>").addClass("tela-escura").appendTo(document.body)
    }, this.clarearTela = function() {
      return $("body").find(".tela-escura").remove()
    }, t = function(e, t) {
      var n, r;
      return n = e.offsetX ? e.offsetX : e.pageX - t[0].offsetLeft, r = e.offsetY ? e.offsetY : e.pageY - t[0].offsetTop, [n, r]
    }, this.compactFullObject = function(e) {
      var t, n, r;
      r = void 0, t = e;
      for (n in t) Object.prototype.hasOwnProperty.call(t, n) && (r = t[n], ("null" === r || null === r || "" === r || "undefined" == typeof r) && delete t[n]);
      return t
    }, this.incrementar_mes_ano = function(e) {
      var t, n, r, i, o;
      return n = e.split("/"), r = n[0].trim(), t = n[1].to_i(), i = mes_to_numero(r).to_i(), 12 === i && t++, o = i % 12 + 1, numero_to_mes_extenso(o) + "/" + t
    }, this.token = function() {
      var e;
      return e = function() {
        return Math.random().toString(36).substr(2)
      }, e() + e()
    }
  }.call(this),
  function(e) {
    function t() {
      return {
        empty: !1,
        unusedTokens: [],
        unusedInput: [],
        overflow: -2,
        charsLeftOver: 0,
        nullInput: !1,
        invalidMonth: null,
        invalidFormat: !1,
        userInvalidated: !1,
        iso: !1
      }
    }

    function n(e, t) {
      function n() {
        ut.suppressDeprecationWarnings === !1 && "undefined" != typeof console && console.warn && console.warn("Deprecation warning: " + e)
      }
      var r = !0;
      return u(function() {
        return r && (n(), r = !1), t.apply(this, arguments)
      }, t)
    }

    function r(e, t) {
      return function(n) {
        return f(e.call(this, n), t)
      }
    }

    function i(e, t) {
      return function(n) {
        return this.lang().ordinal(e.call(this, n), t)
      }
    }

    function o() {}

    function a(e) {
      k(e), u(this, e)
    }

    function s(e) {
      var t = v(e),
        n = t.year || 0,
        r = t.quarter || 0,
        i = t.month || 0,
        o = t.week || 0,
        a = t.day || 0,
        s = t.hour || 0,
        u = t.minute || 0,
        c = t.second || 0,
        l = t.millisecond || 0;
      this._milliseconds = +l + 1e3 * c + 6e4 * u + 36e5 * s, this._days = +a + 7 * o, this._months = +i + 3 * r + 12 * n, this._data = {}, this._bubble()
    }

    function u(e, t) {
      for (var n in t) t.hasOwnProperty(n) && (e[n] = t[n]);
      return t.hasOwnProperty("toString") && (e.toString = t.toString), t.hasOwnProperty("valueOf") && (e.valueOf = t.valueOf), e
    }

    function c(e) {
      var t, n = {};
      for (t in e) e.hasOwnProperty(t) && xt.hasOwnProperty(t) && (n[t] = e[t]);
      return n
    }

    function l(e) {
      return 0 > e ? Math.ceil(e) : Math.floor(e)
    }

    function f(e, t, n) {
      for (var r = "" + Math.abs(e), i = e >= 0; r.length < t;) r = "0" + r;
      return (i ? n ? "+" : "" : "-") + r
    }

    function d(e, t, n, r) {
      var i = t._milliseconds,
        o = t._days,
        a = t._months;
      r = null == r ? !0 : r, i && e._d.setTime(+e._d + i * n), o && rt(e, "Date", nt(e, "Date") + o * n), a && tt(e, nt(e, "Month") + a * n), r && ut.updateOffset(e, o || a)
    }

    function h(e) {
      return "[object Array]" === Object.prototype.toString.call(e)
    }

    function p(e) {
      return "[object Date]" === Object.prototype.toString.call(e) || e instanceof Date
    }

    function m(e, t, n) {
      var r, i = Math.min(e.length, t.length),
        o = Math.abs(e.length - t.length),
        a = 0;
      for (r = 0; i > r; r++)(n && e[r] !== t[r] || !n && $(e[r]) !== $(t[r])) && a++;
      return a + o
    }

    function g(e) {
      if (e) {
        var t = e.toLowerCase().replace(/(.)s$/, "$1");
        e = Zt[e] || Kt[t] || t
      }
      return e
    }

    function v(e) {
      var t, n, r = {};
      for (n in e) e.hasOwnProperty(n) && (t = g(n), t && (r[t] = e[n]));
      return r
    }

    function y(t) {
      var n, r;
      if (0 === t.indexOf("week")) n = 7, r = "day";
      else {
        if (0 !== t.indexOf("month")) return;
        n = 12, r = "month"
      }
      ut[t] = function(i, o) {
        var a, s, u = ut.fn._lang[t],
          c = [];
        if ("number" == typeof i && (o = i, i = e), s = function(e) {
            var t = ut().utc().set(r, e);
            return u.call(ut.fn._lang, t, i || "")
          }, null != o) return s(o);
        for (a = 0; n > a; a++) c.push(s(a));
        return c
      }
    }

    function $(e) {
      var t = +e,
        n = 0;
      return 0 !== t && isFinite(t) && (n = t >= 0 ? Math.floor(t) : Math.ceil(t)), n
    }

    function b(e, t) {
      return new Date(Date.UTC(e, t + 1, 0)).getUTCDate()
    }

    function w(e, t, n) {
      return K(ut([e, 11, 31 + t - n]), t, n).week
    }

    function x(e) {
      return _(e) ? 366 : 365
    }

    function _(e) {
      return e % 4 === 0 && e % 100 !== 0 || e % 400 === 0
    }

    function k(e) {
      var t;
      e._a && -2 === e._pf.overflow && (t = e._a[mt] < 0 || e._a[mt] > 11 ? mt : e._a[gt] < 1 || e._a[gt] > b(e._a[pt], e._a[mt]) ? gt : e._a[vt] < 0 || e._a[vt] > 23 ? vt : e._a[yt] < 0 || e._a[yt] > 59 ? yt : e._a[$t] < 0 || e._a[$t] > 59 ? $t : e._a[bt] < 0 || e._a[bt] > 999 ? bt : -1, e._pf._overflowDayOfYear && (pt > t || t > gt) && (t = gt), e._pf.overflow = t)
    }

    function S(e) {
      return null == e._isValid && (e._isValid = !isNaN(e._d.getTime()) && e._pf.overflow < 0 && !e._pf.empty && !e._pf.invalidMonth && !e._pf.nullInput && !e._pf.invalidFormat && !e._pf.userInvalidated, e._strict && (e._isValid = e._isValid && 0 === e._pf.charsLeftOver && 0 === e._pf.unusedTokens.length)), e._isValid
    }

    function C(e) {
      return e ? e.toLowerCase().replace("_", "-") : e
    }

    function T(e, t) {
      return t._isUTC ? ut(e).zone(t._offset || 0) : ut(e).local()
    }

    function M(e, t) {
      return t.abbr = e, wt[e] || (wt[e] = new o), wt[e].set(t), wt[e]
    }

    function A(e) {
      delete wt[e]
    }

    function E(e) {
      var t, n, r, i, o = 0,
        a = function(e) {
          if (!wt[e] && _t) try {
            require("./lang/" + e)
          } catch (t) {}
          return wt[e]
        };
      if (!e) return ut.fn._lang;
      if (!h(e)) {
        if (n = a(e)) return n;
        e = [e]
      }
      for (; o < e.length;) {
        for (i = C(e[o]).split("-"), t = i.length, r = C(e[o + 1]), r = r ? r.split("-") : null; t > 0;) {
          if (n = a(i.slice(0, t).join("-"))) return n;
          if (r && r.length >= t && m(i, r, !0) >= t - 1) break;
          t--
        }
        o++
      }
      return ut.fn._lang
    }

    function D(e) {
      return e.match(/\[[\s\S]/) ? e.replace(/^\[|\]$/g, "") : e.replace(/\\/g, "")
    }

    function O(e) {
      var t, n, r = e.match(Tt);
      for (t = 0, n = r.length; n > t; t++) r[t] = nn[r[t]] ? nn[r[t]] : D(r[t]);
      return function(i) {
        var o = "";
        for (t = 0; n > t; t++) o += r[t] instanceof Function ? r[t].call(i, e) : r[t];
        return o
      }
    }

    function N(e, t) {
      return e.isValid() ? (t = P(t, e.lang()), Jt[t] || (Jt[t] = O(t)), Jt[t](e)) : e.lang().invalidDate()
    }

    function P(e, t) {
      function n(e) {
        return t.longDateFormat(e) || e
      }
      var r = 5;
      for (Mt.lastIndex = 0; r >= 0 && Mt.test(e);) e = e.replace(Mt, n), Mt.lastIndex = 0, r -= 1;
      return e
    }

    function j(e, t) {
      var n, r = t._strict;
      switch (e) {
        case "Q":
          return Rt;
        case "DDDD":
          return Ht;
        case "YYYY":
        case "GGGG":
        case "gggg":
          return r ? Ut : Dt;
        case "Y":
        case "G":
        case "g":
          return zt;
        case "YYYYYY":
        case "YYYYY":
        case "GGGGG":
        case "ggggg":
          return r ? Yt : Ot;
        case "S":
          if (r) return Rt;
        case "SS":
          if (r) return Lt;
        case "SSS":
          if (r) return Ht;
        case "DDD":
          return Et;
        case "MMM":
        case "MMMM":
        case "dd":
        case "ddd":
        case "dddd":
          return Pt;
        case "a":
        case "A":
          return E(t._l)._meridiemParse;
        case "X":
          return It;
        case "Z":
        case "ZZ":
          return jt;
        case "T":
          return Ft;
        case "SSSS":
          return Nt;
        case "MM":
        case "DD":
        case "YY":
        case "GG":
        case "gg":
        case "HH":
        case "hh":
        case "mm":
        case "ss":
        case "ww":
        case "WW":
          return r ? Lt : At;
        case "M":
        case "D":
        case "d":
        case "H":
        case "h":
        case "m":
        case "s":
        case "w":
        case "W":
        case "e":
        case "E":
          return At;
        case "Do":
          return qt;
        default:
          return n = new RegExp(Y(U(e.replace("\\", "")), "i"))
      }
    }

    function F(e) {
      e = e || "";
      var t = e.match(jt) || [],
        n = t[t.length - 1] || [],
        r = (n + "").match(Qt) || ["-", 0, 0],
        i = +(60 * r[1]) + $(r[2]);
      return "+" === r[0] ? -i : i
    }

    function I(e, t, n) {
      var r, i = n._a;
      switch (e) {
        case "Q":
          null != t && (i[mt] = 3 * ($(t) - 1));
          break;
        case "M":
        case "MM":
          null != t && (i[mt] = $(t) - 1);
          break;
        case "MMM":
        case "MMMM":
          r = E(n._l).monthsParse(t), null != r ? i[mt] = r : n._pf.invalidMonth = t;
          break;
        case "D":
        case "DD":
          null != t && (i[gt] = $(t));
          break;
        case "Do":
          null != t && (i[gt] = $(parseInt(t, 10)));
          break;
        case "DDD":
        case "DDDD":
          null != t && (n._dayOfYear = $(t));
          break;
        case "YY":
          i[pt] = ut.parseTwoDigitYear(t);
          break;
        case "YYYY":
        case "YYYYY":
        case "YYYYYY":
          i[pt] = $(t);
          break;
        case "a":
        case "A":
          n._isPm = E(n._l).isPM(t);
          break;
        case "H":
        case "HH":
        case "h":
        case "hh":
          i[vt] = $(t);
          break;
        case "m":
        case "mm":
          i[yt] = $(t);
          break;
        case "s":
        case "ss":
          i[$t] = $(t);
          break;
        case "S":
        case "SS":
        case "SSS":
        case "SSSS":
          i[bt] = $(1e3 * ("0." + t));
          break;
        case "X":
          n._d = new Date(1e3 * parseFloat(t));
          break;
        case "Z":
        case "ZZ":
          n._useUTC = !0, n._tzm = F(t);
          break;
        case "w":
        case "ww":
        case "W":
        case "WW":
        case "d":
        case "dd":
        case "ddd":
        case "dddd":
        case "e":
        case "E":
          e = e.substr(0, 1);
        case "gg":
        case "gggg":
        case "GG":
        case "GGGG":
        case "GGGGG":
          e = e.substr(0, 2), t && (n._w = n._w || {}, n._w[e] = t)
      }
    }

    function q(e) {
      var t, n, r, i, o, a, s, u, c, l, f = [];
      if (!e._d) {
        for (r = L(e), e._w && null == e._a[gt] && null == e._a[mt] && (o = function(t) {
            var n = parseInt(t, 10);
            return t ? t.length < 3 ? n > 68 ? 1900 + n : 2e3 + n : n : null == e._a[pt] ? ut().weekYear() : e._a[pt]
          }, a = e._w, null != a.GG || null != a.W || null != a.E ? s = J(o(a.GG), a.W || 1, a.E, 4, 1) : (u = E(e._l), c = null != a.d ? Q(a.d, u) : null != a.e ? parseInt(a.e, 10) + u._week.dow : 0, l = parseInt(a.w, 10) || 1, null != a.d && c < u._week.dow && l++, s = J(o(a.gg), l, c, u._week.doy, u._week.dow)), e._a[pt] = s.year, e._dayOfYear = s.dayOfYear), e._dayOfYear && (i = null == e._a[pt] ? r[pt] : e._a[pt], e._dayOfYear > x(i) && (e._pf._overflowDayOfYear = !0), n = G(i, 0, e._dayOfYear), e._a[mt] = n.getUTCMonth(), e._a[gt] = n.getUTCDate()), t = 0; 3 > t && null == e._a[t]; ++t) e._a[t] = f[t] = r[t];
        for (; 7 > t; t++) e._a[t] = f[t] = null == e._a[t] ? 2 === t ? 1 : 0 : e._a[t];
        f[vt] += $((e._tzm || 0) / 60), f[yt] += $((e._tzm || 0) % 60), e._d = (e._useUTC ? G : W).apply(null, f)
      }
    }

    function R(e) {
      var t;
      e._d || (t = v(e._i), e._a = [t.year, t.month, t.day, t.hour, t.minute, t.second, t.millisecond], q(e))
    }

    function L(e) {
      var t = new Date;
      return e._useUTC ? [t.getUTCFullYear(), t.getUTCMonth(), t.getUTCDate()] : [t.getFullYear(), t.getMonth(), t.getDate()]
    }

    function H(e) {
      e._a = [], e._pf.empty = !0;
      var t, n, r, i, o, a = E(e._l),
        s = "" + e._i,
        u = s.length,
        c = 0;
      for (r = P(e._f, a).match(Tt) || [], t = 0; t < r.length; t++) i = r[t], n = (s.match(j(i, e)) || [])[0], n && (o = s.substr(0, s.indexOf(n)), o.length > 0 && e._pf.unusedInput.push(o), s = s.slice(s.indexOf(n) + n.length), c += n.length), nn[i] ? (n ? e._pf.empty = !1 : e._pf.unusedTokens.push(i), I(i, n, e)) : e._strict && !n && e._pf.unusedTokens.push(i);
      e._pf.charsLeftOver = u - c, s.length > 0 && e._pf.unusedInput.push(s), e._isPm && e._a[vt] < 12 && (e._a[vt] += 12), e._isPm === !1 && 12 === e._a[vt] && (e._a[vt] = 0), q(e), k(e)
    }

    function U(e) {
      return e.replace(/\\(\[)|\\(\])|\[([^\]\[]*)\]|\\(.)/g, function(e, t, n, r, i) {
        return t || n || r || i
      })
    }

    function Y(e) {
      return e.replace(/[-\/\\^$*+?.()|[\]{}]/g, "\\$&")
    }

    function z(e) {
      var n, r, i, o, a;
      if (0 === e._f.length) return e._pf.invalidFormat = !0, void(e._d = new Date(0 / 0));
      for (o = 0; o < e._f.length; o++) a = 0, n = u({}, e), n._pf = t(), n._f = e._f[o], H(n), S(n) && (a += n._pf.charsLeftOver, a += 10 * n._pf.unusedTokens.length, n._pf.score = a, (null == i || i > a) && (i = a, r = n));
      u(e, r || n)
    }

    function B(e) {
      var t, n, r = e._i,
        i = Bt.exec(r);
      if (i) {
        for (e._pf.iso = !0, t = 0, n = Wt.length; n > t; t++)
          if (Wt[t][1].exec(r)) {
            e._f = Wt[t][0] + (i[6] || " ");
            break
          }
        for (t = 0, n = Gt.length; n > t; t++)
          if (Gt[t][1].exec(r)) {
            e._f += Gt[t][0];
            break
          }
        r.match(jt) && (e._f += "Z"), H(e)
      } else ut.createFromInputFallback(e)
    }

    function V(t) {
      var n = t._i,
        r = kt.exec(n);
      n === e ? t._d = new Date : r ? t._d = new Date(+r[1]) : "string" == typeof n ? B(t) : h(n) ? (t._a = n.slice(0), q(t)) : p(n) ? t._d = new Date(+n) : "object" == typeof n ? R(t) : "number" == typeof n ? t._d = new Date(n) : ut.createFromInputFallback(t)
    }

    function W(e, t, n, r, i, o, a) {
      var s = new Date(e, t, n, r, i, o, a);
      return 1970 > e && s.setFullYear(e), s
    }

    function G(e) {
      var t = new Date(Date.UTC.apply(null, arguments));
      return 1970 > e && t.setUTCFullYear(e), t
    }

    function Q(e, t) {
      if ("string" == typeof e)
        if (isNaN(e)) {
          if (e = t.weekdaysParse(e), "number" != typeof e) return null
        } else e = parseInt(e, 10);
      return e
    }

    function X(e, t, n, r, i) {
      return i.relativeTime(t || 1, !!n, e, r)
    }

    function Z(e, t, n) {
      var r = ht(Math.abs(e) / 1e3),
        i = ht(r / 60),
        o = ht(i / 60),
        a = ht(o / 24),
        s = ht(a / 365),
        u = 45 > r && ["s", r] || 1 === i && ["m"] || 45 > i && ["mm", i] || 1 === o && ["h"] || 22 > o && ["hh", o] || 1 === a && ["d"] || 25 >= a && ["dd", a] || 45 >= a && ["M"] || 345 > a && ["MM", ht(a / 30)] || 1 === s && ["y"] || ["yy", s];
      return u[2] = t, u[3] = e > 0, u[4] = n, X.apply({}, u)
    }

    function K(e, t, n) {
      var r, i = n - t,
        o = n - e.day();
      return o > i && (o -= 7), i - 7 > o && (o += 7), r = ut(e).add("d", o), {
        week: Math.ceil(r.dayOfYear() / 7),
        year: r.year()
      }
    }

    function J(e, t, n, r, i) {
      var o, a, s = G(e, 0, 1).getUTCDay();
      return n = null != n ? n : i, o = i - s + (s > r ? 7 : 0) - (i > s ? 7 : 0), a = 7 * (t - 1) + (n - i) + o + 1, {
        year: a > 0 ? e : e - 1,
        dayOfYear: a > 0 ? a : x(e - 1) + a
      }
    }

    function et(t) {
      var n = t._i,
        r = t._f;
      return null === n || r === e && "" === n ? ut.invalid({
        nullInput: !0
      }) : ("string" == typeof n && (t._i = n = E().preparse(n)), ut.isMoment(n) ? (t = c(n), t._d = new Date(+n._d)) : r ? h(r) ? z(t) : H(t) : V(t), new a(t))
    }

    function tt(e, t) {
      var n;
      return "string" == typeof t && (t = e.lang().monthsParse(t), "number" != typeof t) ? e : (n = Math.min(e.date(), b(e.year(), t)), e._d["set" + (e._isUTC ? "UTC" : "") + "Month"](t, n), e)
    }

    function nt(e, t) {
      return e._d["get" + (e._isUTC ? "UTC" : "") + t]()
    }

    function rt(e, t, n) {
      return "Month" === t ? tt(e, n) : e._d["set" + (e._isUTC ? "UTC" : "") + t](n)
    }

    function it(e, t) {
      return function(n) {
        return null != n ? (rt(this, e, n), ut.updateOffset(this, t), this) : nt(this, e)
      }
    }

    function ot(e) {
      ut.duration.fn[e] = function() {
        return this._data[e]
      }
    }

    function at(e, t) {
      ut.duration.fn["as" + e] = function() {
        return +this / t
      }
    }

    function st(e) {
      "undefined" == typeof ender && (ct = dt.moment, dt.moment = e ? n("Accessing Moment through the global scope is deprecated, and will be removed in an upcoming release.", ut) : ut)
    }
    for (var ut, ct, lt, ft = "2.6.0", dt = "undefined" != typeof global ? global : this, ht = Math.round, pt = 0, mt = 1, gt = 2, vt = 3, yt = 4, $t = 5, bt = 6, wt = {}, xt = {
        _isAMomentObject: null,
        _i: null,
        _f: null,
        _l: null,
        _strict: null,
        _isUTC: null,
        _offset: null,
        _pf: null,
        _lang: null
      }, _t = "undefined" != typeof module && module.exports, kt = /^\/?Date\((\-?\d+)/i, St = /(\-)?(?:(\d*)\.)?(\d+)\:(\d+)(?:\:(\d+)\.?(\d{3})?)?/, Ct = /^(-)?P(?:(?:([0-9,.]*)Y)?(?:([0-9,.]*)M)?(?:([0-9,.]*)D)?(?:T(?:([0-9,.]*)H)?(?:([0-9,.]*)M)?(?:([0-9,.]*)S)?)?|([0-9,.]*)W)$/, Tt = /(\[[^\[]*\])|(\\)?(Mo|MM?M?M?|Do|DDDo|DD?D?D?|ddd?d?|do?|w[o|w]?|W[o|W]?|Q|YYYYYY|YYYYY|YYYY|YY|gg(ggg?)?|GG(GGG?)?|e|E|a|A|hh?|HH?|mm?|ss?|S{1,4}|X|zz?|ZZ?|.)/g, Mt = /(\[[^\[]*\])|(\\)?(LT|LL?L?L?|l{1,4})/g, At = /\d\d?/, Et = /\d{1,3}/, Dt = /\d{1,4}/, Ot = /[+\-]?\d{1,6}/, Nt = /\d+/, Pt = /[0-9]*['a-z\u00A0-\u05FF\u0700-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]+|[\u0600-\u06FF\/]+(\s*?[\u0600-\u06FF]+){1,2}/i, jt = /Z|[\+\-]\d\d:?\d\d/gi, Ft = /T/i, It = /[\+\-]?\d+(\.\d{1,3})?/, qt = /\d{1,2}/, Rt = /\d/, Lt = /\d\d/, Ht = /\d{3}/, Ut = /\d{4}/, Yt = /[+-]?\d{6}/, zt = /[+-]?\d+/, Bt = /^\s*(?:[+-]\d{6}|\d{4})-(?:(\d\d-\d\d)|(W\d\d$)|(W\d\d-\d)|(\d\d\d))((T| )(\d\d(:\d\d(:\d\d(\.\d+)?)?)?)?([\+\-]\d\d(?::?\d\d)?|\s*Z)?)?$/, Vt = "YYYY-MM-DDTHH:mm:ssZ", Wt = [
        ["YYYYYY-MM-DD", /[+-]\d{6}-\d{2}-\d{2}/],
        ["YYYY-MM-DD", /\d{4}-\d{2}-\d{2}/],
        ["GGGG-[W]WW-E", /\d{4}-W\d{2}-\d/],
        ["GGGG-[W]WW", /\d{4}-W\d{2}/],
        ["YYYY-DDD", /\d{4}-\d{3}/]
      ], Gt = [
        ["HH:mm:ss.SSSS", /(T| )\d\d:\d\d:\d\d\.\d+/],
        ["HH:mm:ss", /(T| )\d\d:\d\d:\d\d/],
        ["HH:mm", /(T| )\d\d:\d\d/],
        ["HH", /(T| )\d\d/]
      ], Qt = /([\+\-]|\d\d)/gi, Xt = ("Date|Hours|Minutes|Seconds|Milliseconds".split("|"), {
        Milliseconds: 1,
        Seconds: 1e3,
        Minutes: 6e4,
        Hours: 36e5,
        Days: 864e5,
        Months: 2592e6,
        Years: 31536e6
      }), Zt = {
        ms: "millisecond",
        s: "second",
        m: "minute",
        h: "hour",
        d: "day",
        D: "date",
        w: "week",
        W: "isoWeek",
        M: "month",
        Q: "quarter",
        y: "year",
        DDD: "dayOfYear",
        e: "weekday",
        E: "isoWeekday",
        gg: "weekYear",
        GG: "isoWeekYear"
      }, Kt = {
        dayofyear: "dayOfYear",
        isoweekday: "isoWeekday",
        isoweek: "isoWeek",
        weekyear: "weekYear",
        isoweekyear: "isoWeekYear"
      }, Jt = {}, en = "DDD w W M D d".split(" "), tn = "M D H h m s w W".split(" "), nn = {
        M: function() {
          return this.month() + 1
        },
        MMM: function(e) {
          return this.lang().monthsShort(this, e)
        },
        MMMM: function(e) {
          return this.lang().months(this, e)
        },
        D: function() {
          return this.date()
        },
        DDD: function() {
          return this.dayOfYear()
        },
        d: function() {
          return this.day()
        },
        dd: function(e) {
          return this.lang().weekdaysMin(this, e)
        },
        ddd: function(e) {
          return this.lang().weekdaysShort(this, e)
        },
        dddd: function(e) {
          return this.lang().weekdays(this, e)
        },
        w: function() {
          return this.week()
        },
        W: function() {
          return this.isoWeek()
        },
        YY: function() {
          return f(this.year() % 100, 2)
        },
        YYYY: function() {
          return f(this.year(), 4)
        },
        YYYYY: function() {
          return f(this.year(), 5)
        },
        YYYYYY: function() {
          var e = this.year(),
            t = e >= 0 ? "+" : "-";
          return t + f(Math.abs(e), 6)
        },
        gg: function() {
          return f(this.weekYear() % 100, 2)
        },
        gggg: function() {
          return f(this.weekYear(), 4)
        },
        ggggg: function() {
          return f(this.weekYear(), 5)
        },
        GG: function() {
          return f(this.isoWeekYear() % 100, 2)
        },
        GGGG: function() {
          return f(this.isoWeekYear(), 4)
        },
        GGGGG: function() {
          return f(this.isoWeekYear(), 5)
        },
        e: function() {
          return this.weekday()
        },
        E: function() {
          return this.isoWeekday()
        },
        a: function() {
          return this.lang().meridiem(this.hours(), this.minutes(), !0)
        },
        A: function() {
          return this.lang().meridiem(this.hours(), this.minutes(), !1)
        },
        H: function() {
          return this.hours()
        },
        h: function() {
          return this.hours() % 12 || 12
        },
        m: function() {
          return this.minutes()
        },
        s: function() {
          return this.seconds()
        },
        S: function() {
          return $(this.milliseconds() / 100)
        },
        SS: function() {
          return f($(this.milliseconds() / 10), 2)
        },
        SSS: function() {
          return f(this.milliseconds(), 3)
        },
        SSSS: function() {
          return f(this.milliseconds(), 3)
        },
        Z: function() {
          var e = -this.zone(),
            t = "+";
          return 0 > e && (e = -e, t = "-"), t + f($(e / 60), 2) + ":" + f($(e) % 60, 2)
        },
        ZZ: function() {
          var e = -this.zone(),
            t = "+";
          return 0 > e && (e = -e, t = "-"), t + f($(e / 60), 2) + f($(e) % 60, 2)
        },
        z: function() {
          return this.zoneAbbr()
        },
        zz: function() {
          return this.zoneName()
        },
        X: function() {
          return this.unix()
        },
        Q: function() {
          return this.quarter()
        }
      }, rn = ["months", "monthsShort", "weekdays", "weekdaysShort", "weekdaysMin"]; en.length;) lt = en.pop(), nn[lt + "o"] = i(nn[lt], lt);
    for (; tn.length;) lt = tn.pop(), nn[lt + lt] = r(nn[lt], 2);
    for (nn.DDDD = r(nn.DDD, 3), u(o.prototype, {
        set: function(e) {
          var t, n;
          for (n in e) t = e[n], "function" == typeof t ? this[n] = t : this["_" + n] = t
        },
        _months: "January_February_March_April_May_June_July_August_September_October_November_December".split("_"),
        months: function(e) {
          return this._months[e.month()]
        },
        _monthsShort: "Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec".split("_"),
        monthsShort: function(e) {
          return this._monthsShort[e.month()]
        },
        monthsParse: function(e) {
          var t, n, r;
          for (this._monthsParse || (this._monthsParse = []), t = 0; 12 > t; t++)
            if (this._monthsParse[t] || (n = ut.utc([2e3, t]), r = "^" + this.months(n, "") + "|^" + this.monthsShort(n, ""), this._monthsParse[t] = new RegExp(r.replace(".", ""), "i")), this._monthsParse[t].test(e)) return t
        },
        _weekdays: "Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),
        weekdays: function(e) {
          return this._weekdays[e.day()]
        },
        _weekdaysShort: "Sun_Mon_Tue_Wed_Thu_Fri_Sat".split("_"),
        weekdaysShort: function(e) {
          return this._weekdaysShort[e.day()]
        },
        _weekdaysMin: "Su_Mo_Tu_We_Th_Fr_Sa".split("_"),
        weekdaysMin: function(e) {
          return this._weekdaysMin[e.day()]
        },
        weekdaysParse: function(e) {
          var t, n, r;
          for (this._weekdaysParse || (this._weekdaysParse = []), t = 0; 7 > t; t++)
            if (this._weekdaysParse[t] || (n = ut([2e3, 1]).day(t), r = "^" + this.weekdays(n, "") + "|^" + this.weekdaysShort(n, "") + "|^" + this.weekdaysMin(n, ""), this._weekdaysParse[t] = new RegExp(r.replace(".", ""), "i")), this._weekdaysParse[t].test(e)) return t
        },
        _longDateFormat: {
          LT: "h:mm A",
          L: "MM/DD/YYYY",
          LL: "MMMM D YYYY",
          LLL: "MMMM D YYYY LT",
          LLLL: "dddd, MMMM D YYYY LT"
        },
        longDateFormat: function(e) {
          var t = this._longDateFormat[e];
          return !t && this._longDateFormat[e.toUpperCase()] && (t = this._longDateFormat[e.toUpperCase()].replace(/MMMM|MM|DD|dddd/g, function(e) {
            return e.slice(1)
          }), this._longDateFormat[e] = t), t
        },
        isPM: function(e) {
          return "p" === (e + "").toLowerCase().charAt(0)
        },
        _meridiemParse: /[ap]\.?m?\.?/i,
        meridiem: function(e, t, n) {
          return e > 11 ? n ? "pm" : "PM" : n ? "am" : "AM"
        },
        _calendar: {
          sameDay: "[Today at] LT",
          nextDay: "[Tomorrow at] LT",
          nextWeek: "dddd [at] LT",
          lastDay: "[Yesterday at] LT",
          lastWeek: "[Last] dddd [at] LT",
          sameElse: "L"
        },
        calendar: function(e, t) {
          var n = this._calendar[e];
          return "function" == typeof n ? n.apply(t) : n
        },
        _relativeTime: {
          future: "in %s",
          past: "%s ago",
          s: "a few seconds",
          m: "a minute",
          mm: "%d minutes",
          h: "an hour",
          hh: "%d hours",
          d: "a day",
          dd: "%d days",
          M: "a month",
          MM: "%d months",
          y: "a year",
          yy: "%d years"
        },
        relativeTime: function(e, t, n, r) {
          var i = this._relativeTime[n];
          return "function" == typeof i ? i(e, t, n, r) : i.replace(/%d/i, e)
        },
        pastFuture: function(e, t) {
          var n = this._relativeTime[e > 0 ? "future" : "past"];
          return "function" == typeof n ? n(t) : n.replace(/%s/i, t)
        },
        ordinal: function(e) {
          return this._ordinal.replace("%d", e)
        },
        _ordinal: "%d",
        preparse: function(e) {
          return e
        },
        postformat: function(e) {
          return e
        },
        week: function(e) {
          return K(e, this._week.dow, this._week.doy).week
        },
        _week: {
          dow: 0,
          doy: 6
        },
        _invalidDate: "Invalid date",
        invalidDate: function() {
          return this._invalidDate
        }
      }), ut = function(n, r, i, o) {
        var a;
        return "boolean" == typeof i && (o = i, i = e), a = {}, a._isAMomentObject = !0, a._i = n, a._f = r, a._l = i, a._strict = o, a._isUTC = !1, a._pf = t(), et(a)
      }, ut.suppressDeprecationWarnings = !1, ut.createFromInputFallback = n("moment construction falls back to js Date. This is discouraged and will be removed in upcoming major release. Please refer to https://github.com/moment/moment/issues/1407 for more info.", function(e) {
        e._d = new Date(e._i)
      }), ut.utc = function(n, r, i, o) {
        var a;
        return "boolean" == typeof i && (o = i, i = e), a = {}, a._isAMomentObject = !0, a._useUTC = !0, a._isUTC = !0, a._l = i, a._i = n, a._f = r, a._strict = o, a._pf = t(), et(a).utc()
      }, ut.unix = function(e) {
        return ut(1e3 * e)
      }, ut.duration = function(e, t) {
        var n, r, i, o = e,
          a = null;
        return ut.isDuration(e) ? o = {
          ms: e._milliseconds,
          d: e._days,
          M: e._months
        } : "number" == typeof e ? (o = {}, t ? o[t] = e : o.milliseconds = e) : (a = St.exec(e)) ? (n = "-" === a[1] ? -1 : 1, o = {
          y: 0,
          d: $(a[gt]) * n,
          h: $(a[vt]) * n,
          m: $(a[yt]) * n,
          s: $(a[$t]) * n,
          ms: $(a[bt]) * n
        }) : (a = Ct.exec(e)) && (n = "-" === a[1] ? -1 : 1, i = function(e) {
          var t = e && parseFloat(e.replace(",", "."));
          return (isNaN(t) ? 0 : t) * n
        }, o = {
          y: i(a[2]),
          M: i(a[3]),
          d: i(a[4]),
          h: i(a[5]),
          m: i(a[6]),
          s: i(a[7]),
          w: i(a[8])
        }), r = new s(o), ut.isDuration(e) && e.hasOwnProperty("_lang") && (r._lang = e._lang), r
      }, ut.version = ft, ut.defaultFormat = Vt, ut.momentProperties = xt, ut.updateOffset = function() {}, ut.lang = function(e, t) {
        var n;
        return e ? (t ? M(C(e), t) : null === t ? (A(e), e = "en") : wt[e] || E(e), n = ut.duration.fn._lang = ut.fn._lang = E(e), n._abbr) : ut.fn._lang._abbr
      }, ut.langData = function(e) {
        return e && e._lang && e._lang._abbr && (e = e._lang._abbr), E(e)
      }, ut.isMoment = function(e) {
        return e instanceof a || null != e && e.hasOwnProperty("_isAMomentObject")
      }, ut.isDuration = function(e) {
        return e instanceof s
      }, lt = rn.length - 1; lt >= 0; --lt) y(rn[lt]);
    ut.normalizeUnits = function(e) {
      return g(e)
    }, ut.invalid = function(e) {
      var t = ut.utc(0 / 0);
      return null != e ? u(t._pf, e) : t._pf.userInvalidated = !0, t
    }, ut.parseZone = function() {
      return ut.apply(null, arguments).parseZone()
    }, ut.parseTwoDigitYear = function(e) {
      return $(e) + ($(e) > 68 ? 1900 : 2e3)
    }, u(ut.fn = a.prototype, {
      clone: function() {
        return ut(this)
      },
      valueOf: function() {
        return +this._d + 6e4 * (this._offset || 0)
      },
      unix: function() {
        return Math.floor(+this / 1e3)
      },
      toString: function() {
        return this.clone().lang("en").format("ddd MMM DD YYYY HH:mm:ss [GMT]ZZ")
      },
      toDate: function() {
        return this._offset ? new Date(+this) : this._d
      },
      toISOString: function() {
        var e = ut(this).utc();
        return 0 < e.year() && e.year() <= 9999 ? N(e, "YYYY-MM-DD[T]HH:mm:ss.SSS[Z]") : N(e, "YYYYYY-MM-DD[T]HH:mm:ss.SSS[Z]")
      },
      toArray: function() {
        var e = this;
        return [e.year(), e.month(), e.date(), e.hours(), e.minutes(), e.seconds(), e.milliseconds()]
      },
      isValid: function() {
        return S(this)
      },
      isDSTShifted: function() {
        return this._a ? this.isValid() && m(this._a, (this._isUTC ? ut.utc(this._a) : ut(this._a)).toArray()) > 0 : !1
      },
      parsingFlags: function() {
        return u({}, this._pf)
      },
      invalidAt: function() {
        return this._pf.overflow
      },
      utc: function() {
        return this.zone(0)
      },
      local: function() {
        return this.zone(0), this._isUTC = !1, this
      },
      format: function(e) {
        var t = N(this, e || ut.defaultFormat);
        return this.lang().postformat(t)
      },
      add: function(e, t) {
        var n;
        return n = "string" == typeof e ? ut.duration(+t, e) : ut.duration(e, t), d(this, n, 1), this
      },
      subtract: function(e, t) {
        var n;
        return n = "string" == typeof e ? ut.duration(+t, e) : ut.duration(e, t), d(this, n, -1), this
      },
      diff: function(e, t, n) {
        var r, i, o = T(e, this),
          a = 6e4 * (this.zone() - o.zone());
        return t = g(t), "year" === t || "month" === t ? (r = 432e5 * (this.daysInMonth() + o.daysInMonth()), i = 12 * (this.year() - o.year()) + (this.month() - o.month()), i += (this - ut(this).startOf("month") - (o - ut(o).startOf("month"))) / r, i -= 6e4 * (this.zone() - ut(this).startOf("month").zone() - (o.zone() - ut(o).startOf("month").zone())) / r, "year" === t && (i /= 12)) : (r = this - o, i = "second" === t ? r / 1e3 : "minute" === t ? r / 6e4 : "hour" === t ? r / 36e5 : "day" === t ? (r - a) / 864e5 : "week" === t ? (r - a) / 6048e5 : r), n ? i : l(i)
      },
      from: function(e, t) {
        return ut.duration(this.diff(e)).lang(this.lang()._abbr).humanize(!t)
      },
      fromNow: function(e) {
        return this.from(ut(), e)
      },
      calendar: function() {
        var e = T(ut(), this).startOf("day"),
          t = this.diff(e, "days", !0),
          n = -6 > t ? "sameElse" : -1 > t ? "lastWeek" : 0 > t ? "lastDay" : 1 > t ? "sameDay" : 2 > t ? "nextDay" : 7 > t ? "nextWeek" : "sameElse";
        return this.format(this.lang().calendar(n, this))
      },
      isLeapYear: function() {
        return _(this.year())
      },
      isDST: function() {
        return this.zone() < this.clone().month(0).zone() || this.zone() < this.clone().month(5).zone()
      },
      day: function(e) {
        var t = this._isUTC ? this._d.getUTCDay() : this._d.getDay();
        return null != e ? (e = Q(e, this.lang()), this.add({
          d: e - t
        })) : t
      },
      month: it("Month", !0),
      startOf: function(e) {
        switch (e = g(e)) {
          case "year":
            this.month(0);
          case "quarter":
          case "month":
            this.date(1);
          case "week":
          case "isoWeek":
          case "day":
            this.hours(0);
          case "hour":
            this.minutes(0);
          case "minute":
            this.seconds(0);
          case "second":
            this.milliseconds(0)
        }
        return "week" === e ? this.weekday(0) : "isoWeek" === e && this.isoWeekday(1), "quarter" === e && this.month(3 * Math.floor(this.month() / 3)), this
      },
      endOf: function(e) {
        return e = g(e), this.startOf(e).add("isoWeek" === e ? "week" : e, 1).subtract("ms", 1)
      },
      isAfter: function(e, t) {
        return t = "undefined" != typeof t ? t : "millisecond", +this.clone().startOf(t) > +ut(e).startOf(t)
      },
      isBefore: function(e, t) {
        return t = "undefined" != typeof t ? t : "millisecond", +this.clone().startOf(t) < +ut(e).startOf(t)
      },
      isSame: function(e, t) {
        return t = t || "ms", +this.clone().startOf(t) === +T(e, this).startOf(t)
      },
      min: function(e) {
        return e = ut.apply(null, arguments), this > e ? this : e
      },
      max: function(e) {
        return e = ut.apply(null, arguments), e > this ? this : e
      },
      zone: function(e, t) {
        var n = this._offset || 0;
        return null == e ? this._isUTC ? n : this._d.getTimezoneOffset() : ("string" == typeof e && (e = F(e)), Math.abs(e) < 16 && (e = 60 * e), this._offset = e, this._isUTC = !0, n !== e && (!t || this._changeInProgress ? d(this, ut.duration(n - e, "m"), 1, !1) : this._changeInProgress || (this._changeInProgress = !0, ut.updateOffset(this, !0), this._changeInProgress = null)), this)
      },
      zoneAbbr: function() {
        return this._isUTC ? "UTC" : ""
      },
      zoneName: function() {
        return this._isUTC ? "Coordinated Universal Time" : ""
      },
      parseZone: function() {
        return this._tzm ? this.zone(this._tzm) : "string" == typeof this._i && this.zone(this._i), this
      },
      hasAlignedHourOffset: function(e) {
        return e = e ? ut(e).zone() : 0, (this.zone() - e) % 60 === 0
      },
      daysInMonth: function() {
        return b(this.year(), this.month())
      },
      dayOfYear: function(e) {
        var t = ht((ut(this).startOf("day") - ut(this).startOf("year")) / 864e5) + 1;
        return null == e ? t : this.add("d", e - t)
      },
      quarter: function(e) {
        return null == e ? Math.ceil((this.month() + 1) / 3) : this.month(3 * (e - 1) + this.month() % 3)
      },
      weekYear: function(e) {
        var t = K(this, this.lang()._week.dow, this.lang()._week.doy).year;
        return null == e ? t : this.add("y", e - t)
      },
      isoWeekYear: function(e) {
        var t = K(this, 1, 4).year;
        return null == e ? t : this.add("y", e - t)
      },
      week: function(e) {
        var t = this.lang().week(this);
        return null == e ? t : this.add("d", 7 * (e - t))
      },
      isoWeek: function(e) {
        var t = K(this, 1, 4).week;
        return null == e ? t : this.add("d", 7 * (e - t))
      },
      weekday: function(e) {
        var t = (this.day() + 7 - this.lang()._week.dow) % 7;
        return null == e ? t : this.add("d", e - t)
      },
      isoWeekday: function(e) {
        return null == e ? this.day() || 7 : this.day(this.day() % 7 ? e : e - 7)
      },
      isoWeeksInYear: function() {
        return w(this.year(), 1, 4)
      },
      weeksInYear: function() {
        var e = this._lang._week;
        return w(this.year(), e.dow, e.doy)
      },
      get: function(e) {
        return e = g(e), this[e]()
      },
      set: function(e, t) {
        return e = g(e), "function" == typeof this[e] && this[e](t), this
      },
      lang: function(t) {
        return t === e ? this._lang : (this._lang = E(t), this)
      }
    }), ut.fn.millisecond = ut.fn.milliseconds = it("Milliseconds", !1), ut.fn.second = ut.fn.seconds = it("Seconds", !1), ut.fn.minute = ut.fn.minutes = it("Minutes", !1), ut.fn.hour = ut.fn.hours = it("Hours", !0), ut.fn.date = it("Date", !0), ut.fn.dates = n("dates accessor is deprecated. Use date instead.", it("Date", !0)), ut.fn.year = it("FullYear", !0), ut.fn.years = n("years accessor is deprecated. Use year instead.", it("FullYear", !0)), ut.fn.days = ut.fn.day, ut.fn.months = ut.fn.month, ut.fn.weeks = ut.fn.week, ut.fn.isoWeeks = ut.fn.isoWeek, ut.fn.quarters = ut.fn.quarter, ut.fn.toJSON = ut.fn.toISOString, u(ut.duration.fn = s.prototype, {
      _bubble: function() {
        var e, t, n, r, i = this._milliseconds,
          o = this._days,
          a = this._months,
          s = this._data;
        s.milliseconds = i % 1e3, e = l(i / 1e3), s.seconds = e % 60, t = l(e / 60), s.minutes = t % 60, n = l(t / 60), s.hours = n % 24, o += l(n / 24), s.days = o % 30, a += l(o / 30), s.months = a % 12, r = l(a / 12), s.years = r
      },
      weeks: function() {
        return l(this.days() / 7)
      },
      valueOf: function() {
        return this._milliseconds + 864e5 * this._days + this._months % 12 * 2592e6 + 31536e6 * $(this._months / 12)
      },
      humanize: function(e) {
        var t = +this,
          n = Z(t, !e, this.lang());
        return e && (n = this.lang().pastFuture(t, n)), this.lang().postformat(n)
      },
      add: function(e, t) {
        var n = ut.duration(e, t);
        return this._milliseconds += n._milliseconds, this._days += n._days, this._months += n._months, this._bubble(), this
      },
      subtract: function(e, t) {
        var n = ut.duration(e, t);
        return this._milliseconds -= n._milliseconds, this._days -= n._days, this._months -= n._months, this._bubble(), this
      },
      get: function(e) {
        return e = g(e), this[e.toLowerCase() + "s"]()
      },
      as: function(e) {
        return e = g(e), this["as" + e.charAt(0).toUpperCase() + e.slice(1) + "s"]()
      },
      lang: ut.fn.lang,
      toIsoString: function() {
        var e = Math.abs(this.years()),
          t = Math.abs(this.months()),
          n = Math.abs(this.days()),
          r = Math.abs(this.hours()),
          i = Math.abs(this.minutes()),
          o = Math.abs(this.seconds() + this.milliseconds() / 1e3);
        return this.asSeconds() ? (this.asSeconds() < 0 ? "-" : "") + "P" + (e ? e + "Y" : "") + (t ? t + "M" : "") + (n ? n + "D" : "") + (r || i || o ? "T" : "") + (r ? r + "H" : "") + (i ? i + "M" : "") + (o ? o + "S" : "") : "P0D"
      }
    });
    for (lt in Xt) Xt.hasOwnProperty(lt) && (at(lt, Xt[lt]), ot(lt.toLowerCase()));
    at("Weeks", 6048e5), ut.duration.fn.asMonths = function() {
        return (+this - 31536e6 * this.years()) / 2592e6 + 12 * this.years()
      }, ut.lang("en", {
        ordinal: function(e) {
          var t = e % 10,
            n = 1 === $(e % 100 / 10) ? "th" : 1 === t ? "st" : 2 === t ? "nd" : 3 === t ? "rd" : "th";
          return e + n
        }
      }),
      function(e) {
        e(ut)
      }(function(e) {
        return e.lang("pt-br", {
          months: "janeiro_fevereiro_mar\xe7o_abril_maio_junho_julho_agosto_setembro_outubro_novembro_dezembro".split("_"),
          monthsShort: "jan_fev_mar_abr_mai_jun_jul_ago_set_out_nov_dez".split("_"),
          weekdays: "domingo_segunda-feira_ter\xe7a-feira_quarta-feira_quinta-feira_sexta-feira_s\xe1bado".split("_"),
          weekdaysShort: "dom_seg_ter_qua_qui_sex_s\xe1b".split("_"),
          weekdaysMin: "dom_2\xaa_3\xaa_4\xaa_5\xaa_6\xaa_s\xe1b".split("_"),
          longDateFormat: {
            LT: "HH:mm",
            L: "DD/MM/YYYY",
            LL: "D [de] MMMM [de] YYYY",
            LLL: "D [de] MMMM [de] YYYY [\xe0s] LT",
            LLLL: "dddd, D [de] MMMM [de] YYYY [\xe0s] LT"
          },
          calendar: {
            sameDay: "[hoje \xe0s] LT",
            nextDay: "[amanh\xe3 \xe0s] LT",
            nextWeek: "dddd [\xe0s] LT",
            lastDay: "[ontem \xe0s] LT",
            lastWeek: function() {
              return 0 === this.day() || 6 === this.day() ? "[\xfaltimo] dddd [\xe0s] LT" : "[\xfaltima] dddd [\xe0s] LT"
            },
            sameElse: "L"
          },
          relativeTime: {
            future: "em %s",
            past: "%s atr\xe1s",
            s: "segundos",
            m: "um minuto",
            mm: "%d minutos",
            h: "uma hora",
            hh: "%d horas",
            d: "um dia",
            dd: "%d dias",
            M: "um m\xeas",
            MM: "%d meses",
            y: "um ano",
            yy: "%d anos"
          },
          ordinal: "%d\xba"
        })
      }), ut.lang("en"), _t ? module.exports = ut : "function" == typeof define && define.amd ? (define("moment", function(e, t, n) {
        return n.config && n.config() && n.config().noGlobal === !0 && (dt.moment = ct), ut
      }), st(!0)) : st()
  }.call(this),
  function() {
    this.scPageSystem = {
      init: function() {
        return this.timeOfUpdatedCurrentDateTime = scPageSystem.timezone["new"](), this.timezone.helpers.serverOffset.recalc()
      },
      updatePageSettingsFromServer: function(e, t) {
        var n;
        return n = baseUrlSystem.getParamsFromUrlBaseUrlSystem(e), e = "/get_body_settings", scPageSystem.reqGetBodySettings && scPageSystem.reqGetBodySettings.abort(), scPageSystem.reqGetBodySettings = $.ajax({
          type: "GET",
          dataType: "json",
          data: n,
          url: e,
          success: function(e) {
            return scPageSystem.timezone.updateBodySettings(e.timezone_settings), scPageSystem.cliente.updateBodySettings(e.cliente_settings), t ? t() : void 0
          },
          error: function(e, t) {
            return "abort" !== t ? alert("Erro ao carregar fuso hor\xe1rio") : void 0
          }
        })
      },
      cliente: {
        updateBodySettings: function(e) {
          return e ? $("body").attr("data-current_cliente", JSON.stringify(e)) : $("body").removeAttr("data-current_cliente")
        }
      },
      timezone: {
        "new": function() {
          var e, t, n;
          return n = function(e, t, n, r, i, o, a) {
            switch (arguments.length) {
              case 2:
                return new Date(e, t);
              case 3:
                return new Date(e, t, n);
              case 4:
                return new Date(e, t, n, r);
              case 5:
                return new Date(e, t, n, r, i);
              case 6:
                return new Date(e, t, n, r, i, o);
              case 7:
                return new Date(e, t, n, r, i, o, a)
            }
          }, 0 === arguments.length ? new Date : 1 === arguments.length ? (e = /^[0-9]{4}-([1-9]|0[1-9]|1[0-2])-([0-9]|0[1-9]|[1-2][0-9]|3[0-1])$/, arguments[0].match(e) ? (t = arguments[0] + " 1", new Date(t)) : new Date(arguments[0])) : 3 === arguments.length ? ([].push.call(arguments, 1), n.apply(null, arguments)) : n.apply(null, arguments)
        },
        now: {
          format: function(e) {
            var t;
            return e ? "iso" === e || "iso8601" === e ? this.iso8601() : (t = scTimezone.helpers.calcNowIgnoringOffsetBrowser(), moment(t).format(e)) : (alert("Give me a format like 'DD/MM/YYYY HH:mm:ss' or 'YYYY-MM-DD HH:mm:ss' or 'iso'"), null)
          },
          iso8601: function() {
            return this.format(scTimezone.serverISOFormat())
          },
          iso: function() {
            return this.iso8601()
          },
          toISODate: function() {
            return scPageSystem.timezone["new"](this.iso())
          }
        },
        serverISOFormat: function() {
          return this.helpers.serverOffset.recalc(), "YYYY-MM-DDTHH:mm:ss" + this.helpers.serverOffset.string
        },
        local: function(e, t) {
          var n;
          return e instanceof Date && (e = moment(e).format(this.serverISOFormat())), n = moment(e, "YYYY-MM-DDTHH:mm:ss"), n.isValid() ? null != t ? n.format(t) : n.toDate() : null
        },
        server: function(e, t) {
          var n;
          return e instanceof Date && (e = moment(e).format(this.serverISOFormat())), n = moment(this.local(e, this.serverISOFormat())), null != t ? n.format(t) : n.toDate()
        },
        fromString: function(e, t) {
          return null == t && (t = !0), moment(e, "YYYY-MM-DDTHH:mm:ss").toDate()
        },
        updateBodySettings: function(e) {
          return $("body").attr("data-utc-time-now", e.utc_time_now), $("body").attr("data-offset-from-utc", e.offset_from_utc), scPageSystem.timeOfUpdatedCurrentDateTime = scPageSystem.timezone["new"](), this.helpers.serverOffset.recalc(e.offset_from_utc)
        },
        helpers: {
          serverOffset: {
            amount: 0,
            hours: 0,
            minutes: 0,
            string: null,
            recalc: function(e) {
              var t, n, r, i;
              this.amount = +(null != e ? e : $("body").attr("data-offset-from-utc")), t = moment.duration(this.amount, "seconds"), this.hours = t.hours(), this.minutes = t.minutes(), this.minutes < 0 && (this.minutes = -this.minutes), i = this.hours > 0 ? ["+", this.hours] : ["-", -this.hours], r = i[0], n = i[1], this.string = "" + r + pad(n, 2) + ":00"
            }
          },
          offsetFromServer: function() {
            return this.serverOffset.amount
          },
          calcNowIgnoringOffsetBrowser: function() {
            var e, t, n, r, i;
            return e = scPageSystem.timezone["new"](), t = e.getTimezoneOffset(), r = e - scPageSystem.timeOfUpdatedCurrentDateTime, i = $("body").attr("data-utc-time-now"), n = $("body").attr("data-offset-from-utc"), scPageSystem.timezone["new"](i).addSeconds(n).addMilliseconds(r).addMinutes(t)
          }
        }
      }
    }, this.scTimezone = scPageSystem.timezone, scPageSystem.init()
  }.call(this),
  function() {
    var e = [].indexOf || function(e) {
      for (var t = 0, n = this.length; n > t; t++)
        if (t in this && this[t] === e) return t;
      return -1
    };
    this.Array.prototype.first = function() {
      return this[0]
    }, this.Array.prototype.last = function() {
      return this.slice(-1)[0]
    }, this.Array.prototype.inArray = function(t) {
      return e.call(this, t) >= 0
    }, this.Array.prototype.any = function() {
      return this.length > 0
    }, this.Array.prototype.many = function() {
      return this.length > 1
    }, this.Array.prototype.empty = function() {
      return !this.any()
    }, Array.prototype.find = function(e, t) {
      return this[this.index(e, t)]
    }, Array.prototype.index = function(e, t) {
      return this.transform(t).indexOf(e)
    }, Array.prototype.transform = function(e, t) {
      return null == t && (t = !1), null != e ? this.map(function(t) {
        return t[e]
      }) : t ? this.clone() : this
    }, this.Array.prototype.indexOfById = function(e) {
      var t, n, r, i;
      for (n = r = 0, i = this.length; i > r; n = ++r)
        if (t = this[n], t.id === e) return n;
      return -1
    }, this.Array.prototype.getById = function(e) {
      return e instanceof Array ? e.map(function(e) {
        return function(t) {
          return e.getById(t)
        }
      }(this)) : this[this.indexOfById(e)]
    }, this.Array.prototype.remove = function(e) {
      var t;
      return t = this.indexOf(e), t > -1 ? this.splice(t, 1) : void 0
    }, this.Array.prototype.removeAll = function(t) {
      var n;
      for (n = []; e.call(this, t) >= 0;) n.push(this.remove(t));
      return n
    }, this.Array.prototype.removeById = function(e) {
      return this.removeByField("id", e)
    }, this.Array.prototype.getIndexByField = function(e, t) {
      var n, r, i, o, a;
      for (void 0 === e && (e = "id"), i = null, r = o = 0, a = this.length; a > o; r = ++o) n = this[r], n[e] === t && (i = r);
      return i
    }, this.Array.prototype.removeByField = function(e, t) {
      var n, r, i, o, a, s;
      for (void 0 === e && (e = "id"), i = [], r = o = 0, a = this.length; a > o; r = ++o) n = this[r], n[e] === t && i.push(r);
      for (s = []; i.length > 0;) s.push(this.splice(i.pop(), 1)[0]);
      return s
    }, this.Array.prototype.extractFrom = function(e) {
      var t, n, r, i;
      for (n = e, r = 0, i = this.length; i > r; r++) t = this[r], n = null != n ? n[t] : void 0;
      return n
    }, this.Array.prototype.addOrExtend = function(e) {
      var t;
      return t = null != e.id ? this.indexOfById(e.id) : this.indexOf(e), -1 === t ? this.push(e) : angular.extend(this[t], e)
    }, this.Array.prototype.somar = function(e) {
      var t;
      return t = e ? this.map(function(t) {
        return t[e]
      }) : this, t.reduce(function(e, t) {
        return +e + +t
      })
    }, this.Array.prototype.chunk = function(e) {
      var t, n, r, i, o, a;
      for (n = [], t = [], r = o = 0, a = this.length; a > o; r = ++o) i = this[r], t.push(i), (r + 1) % e === 0 && (n.push(t), t = []);
      return t.length && n.push(t), n
    }, this.Array.prototype.diffById = function(e) {
      var t;
      return t = this.map(function(t) {
        return e.indexOfById(t.id) < 0 ? t : void 0
      }), t.removeAll(void 0), t
    }
  }.call(this),
  function() {
    this.Date.prototype.addMilliseconds = function(e) {
      return this.setMilliseconds(this.getMilliseconds() + e), this
    }, this.Date.prototype.addSeconds = function(e) {
      return this.addMilliseconds(1e3 * e)
    }, this.Date.prototype.addMinutes = function(e) {
      return this.addMilliseconds(6e4 * e)
    }, this.Date.prototype.addHours = function(e) {
      return this.addMilliseconds(36e5 * e)
    }, this.Date.prototype.addDays = function(e) {
      return this.addMilliseconds(864e5 * e)
    }, this.Date.prototype.addWeeks = function(e) {
      return this.addMilliseconds(6048e5 * e)
    }, this.Date.prototype.addMonths = function(e) {
      var t;
      return t = this.getDate(), this.setDate(1), this.setMonth(this.getMonth() + e), this.setDate(Math.min(t, this.getDaysInMonth())), this
    }, this.Date.prototype.addYears = function(e) {
      return this.addMonths(12 * e)
    }
  }.call(this),
  function() {
    Object.keys || (console.warn("Esse navegador n\xe3o implementou a fun\xe7\xe3o Object.keys(myObj). Podem ocasionar Bugs. Discuta com a equipe qual a\xe7\xe3o deve ser tomada."), Object.keys = function(e) {
      var t, n;
      n = [];
      for (t in e) e.hasOwnProperty(t) && n.push(t);
      return n
    }), Object.values ? console.warn("Esse navegador implementou a fun\xe7\xe3o Object.values(myObj), e est\xe1 sobrescrevendo a que foi implementada manualmente nesse sistema. Podem ocasionar Bugs. Discuta com a equipe qual a\xe7\xe3o deve ser tomada.") : Object.values = function(e) {
      return Object.keys(e).map(function(t) {
        return e[t]
      })
    }
  }.call(this),
  function() {
    var e = [].slice,
      t = [].indexOf || function(e) {
        for (var t = 0, n = this.length; n > t; t++)
          if (t in this && this[t] === e) return t;
        return -1
      };
    this.ScParser = function(e) {
      this.obj = e
    }, this.ScParser.prototype.except = function() {
      var n, r, i, o, a;
      r = 1 <= arguments.length ? e.call(arguments, 0) : [], r = r.flatten(), i = {}, a = this.obj;
      for (n in a) o = a[n], t.call(r, n) < 0 && (i[n] = o);
      return i
    }, this.ScParser.prototype.only = function() {
      var t, n, r, i, o;
      for (n = 1 <= arguments.length ? e.call(arguments, 0) : [], n = n.flatten(), r = {}, i = 0, o = n.length; o > i; i++) t = n[i], this.obj.hasOwnProperty(t) && (r[t] = this.obj[t]);
      return r
    }
  }.call(this),
  function() {
    this.String.prototype.camelCaseToHyphen = function() {
      return this.replace(/([a-z])([A-Z])/g, "$1-$2").toLowerCase()
    }, this.String.prototype.toPascalCase = function() {
      var e, t, n;
      for (e = this.split(/\s|_/), t = 0, n = e.length; n > t;) e[t] = e[t].substr(0, 1).toUpperCase() + (e[t].length > 1 ? e[t].substr(1).toLowerCase() : ""), t++;
      return e.join("")
    }, this.String.prototype.extractFrom = function(e) {
      return this.split(".").extractFrom(e)
    }, this.String.prototype.onlyNumbers = function() {
      return this.replace(/[^0-9]/g, "")
    }, this.String.prototype.contentTypeIsImage = function() {
      return !!this.match(/image\//)
    }, this.String.prototype.toSlug = function() {
      return _deaccent(this).replace(/\s+/g, "-").replace(/[^a-zA-Z0-9\-]/g, "").toLowerCase().replace(/\-{2,}/g, "-")
    }
  }.call(this),
  function(e, t, n) {
    "use strict";

    function r(e) {
      return function() {
        var t, n = arguments[0];
        for (t = "[" + (e ? e + ":" : "") + n + "] http://errors.angularjs.org/1.3.0-rc.1/" + (e ? e + "/" : "") + n, n = 1; n < arguments.length; n++) {
          t = t + (1 == n ? "?" : "&") + "p" + (n - 1) + "=";
          var r, i = encodeURIComponent;
          r = arguments[n], r = "function" == typeof r ? r.toString().replace(/ \{[\s\S]*$/, "") : "undefined" == typeof r ? "undefined" : "string" != typeof r ? JSON.stringify(r) : r, t += i(r)
        }
        return Error(t)
      }
    }

    function i(e) {
      if (null == e || S(e)) return !1;
      var t = e.length;
      return 1 === e.nodeType && t ? !0 : b(e) || _r(e) || 0 === t || "number" == typeof t && t > 0 && t - 1 in e
    }

    function o(e, t, n) {
      var r, a;
      if (e)
        if (_(e))
          for (r in e) "prototype" == r || "length" == r || "name" == r || e.hasOwnProperty && !e.hasOwnProperty(r) || t.call(n, e[r], r, e);
        else if (_r(e) || i(e)) {
        var s = "object" != typeof e;
        for (r = 0, a = e.length; a > r; r++)(s || r in e) && t.call(n, e[r], r, e)
      } else if (e.forEach && e.forEach !== o) e.forEach(t, n, e);
      else
        for (r in e) e.hasOwnProperty(r) && t.call(n, e[r], r, e);
      return e
    }

    function a(e) {
      var t, n = [];
      for (t in e) e.hasOwnProperty(t) && n.push(t);
      return n.sort()
    }

    function s(e, t, n) {
      for (var r = a(e), i = 0; i < r.length; i++) t.call(n, e[r[i]], r[i]);
      return r
    }

    function u(e) {
      return function(t, n) {
        e(n, t)
      }
    }

    function c() {
      return ++wr
    }

    function l(e, t) {
      t ? e.$$hashKey = t : delete e.$$hashKey
    }

    function f(e) {
      for (var t = e.$$hashKey, n = 1, r = arguments.length; r > n; n++) {
        var i = arguments[n];
        if (i)
          for (var o = Object.keys(i), a = 0, s = o.length; s > a; a++) {
            var u = o[a];
            e[u] = i[u]
          }
      }
      return l(e, t), e
    }

    function d(e) {
      return parseInt(e, 10)
    }

    function h(e, t) {
      return f(new(f(function() {}, {
        prototype: e
      })), t)
    }

    function p() {}

    function m(e) {
      return e
    }

    function g(e) {
      return function() {
        return e
      }
    }

    function v(e) {
      return "undefined" == typeof e
    }

    function y(e) {
      return "undefined" != typeof e
    }

    function $(e) {
      return null !== e && "object" == typeof e
    }

    function b(e) {
      return "string" == typeof e
    }

    function w(e) {
      return "number" == typeof e
    }

    function x(e) {
      return "[object Date]" === yr.call(e)
    }

    function _(e) {
      return "function" == typeof e
    }

    function k(e) {
      return "[object RegExp]" === yr.call(e)
    }

    function S(e) {
      return e && e.window === e
    }

    function C(e) {
      return e && e.$evalAsync && e.$watch
    }

    function T(e) {
      return !(!e || !(e.nodeName || e.prop && e.attr && e.find))
    }

    function M(e) {
      var t = {};
      e = e.split(",");
      var n;
      for (n = 0; n < e.length; n++) t[e[n]] = !0;
      return t
    }

    function A(e) {
      return hr(e.nodeName || e[0].nodeName)
    }

    function E(e, t, n) {
      var r = [];
      return o(e, function(e, i, o) {
        r.push(t.call(n, e, i, o))
      }), r
    }

    function D(e, t) {
      var n = e.indexOf(t);
      return n >= 0 && e.splice(n, 1), t
    }

    function O(e, t, n, r) {
      if (S(e) || C(e)) throw $r("cpws");
      if (t) {
        if (e === t) throw $r("cpi");
        if (n = n || [], r = r || [], $(e)) {
          var i = n.indexOf(e);
          if (-1 !== i) return r[i];
          n.push(e), r.push(t)
        }
        if (_r(e))
          for (var a = t.length = 0; a < e.length; a++) i = O(e[a], null, n, r), $(e[a]) && (n.push(e[a]), r.push(i)), t.push(i);
        else {
          var s = t.$$hashKey;
          _r(t) ? t.length = 0 : o(t, function(e, n) {
            delete t[n]
          });
          for (a in e) e.hasOwnProperty(a) && (i = O(e[a], null, n, r), $(e[a]) && (n.push(e[a]), r.push(i)), t[a] = i);
          l(t, s)
        }
      } else(t = e) && (_r(e) ? t = O(e, [], n, r) : x(e) ? t = new Date(e.getTime()) : k(e) ? (t = new RegExp(e.source, e.toString().match(/[^\/]*$/)[0]), t.lastIndex = e.lastIndex) : $(e) && (i = Object.create(Object.getPrototypeOf(e)), t = O(e, i, n, r)));
      return t
    }

    function N(e, t) {
      if (_r(e)) {
        t = t || [];
        for (var n = 0, r = e.length; r > n; n++) t[n] = e[n]
      } else if ($(e))
        for (n in t = t || {}, e)("$" !== n.charAt(0) || "$" !== n.charAt(1)) && (t[n] = e[n]);
      return t || e
    }

    function P(e, t) {
      if (e === t) return !0;
      if (null === e || null === t) return !1;
      if (e !== e && t !== t) return !0;
      var r, i = typeof e;
      if (i == typeof t && "object" == i) {
        if (!_r(e)) {
          if (x(e)) return x(t) ? P(e.getTime(), t.getTime()) : !1;
          if (k(e) && k(t)) return e.toString() == t.toString();
          if (C(e) || C(t) || S(e) || S(t) || _r(t)) return !1;
          i = {};
          for (r in e)
            if ("$" !== r.charAt(0) && !_(e[r])) {
              if (!P(e[r], t[r])) return !1;
              i[r] = !0
            }
          for (r in t)
            if (!i.hasOwnProperty(r) && "$" !== r.charAt(0) && t[r] !== n && !_(t[r])) return !1;
          return !0
        }
        if (!_r(t)) return !1;
        if ((i = e.length) == t.length) {
          for (r = 0; i > r; r++)
            if (!P(e[r], t[r])) return !1;
          return !0
        }
      }
      return !1
    }

    function j(e, t, n) {
      return e.concat(gr.call(t, n))
    }

    function F(e, t) {
      var n = 2 < arguments.length ? gr.call(arguments, 2) : [];
      return !_(t) || t instanceof RegExp ? t : n.length ? function() {
        return arguments.length ? t.apply(e, n.concat(gr.call(arguments, 0))) : t.apply(e, n)
      } : function() {
        return arguments.length ? t.apply(e, arguments) : t.call(e)
      }
    }

    function I(e, r) {
      var i = r;
      return "string" == typeof e && "$" === e.charAt(0) && "$" === e.charAt(1) ? i = n : S(r) ? i = "$WINDOW" : r && t === r ? i = "$DOCUMENT" : C(r) && (i = "$SCOPE"), i
    }

    function q(e, t) {
      return "undefined" == typeof e ? n : JSON.stringify(e, I, t ? "  " : null)
    }

    function R(e) {
      return b(e) ? JSON.parse(e) : e
    }

    function L(e) {
      e = cr(e).clone();
      try {
        e.empty()
      } catch (t) {}
      var n = cr("<div>").append(e).html();
      try {
        return 3 === e[0].nodeType ? hr(n) : n.match(/^(<[^>]+>)/)[1].replace(/^<([\w\-]+)/, function(e, t) {
          return "<" + hr(t)
        })
      } catch (r) {
        return hr(n)
      }
    }

    function H(e) {
      try {
        return decodeURIComponent(e)
      } catch (t) {}
    }

    function U(e) {
      var t, n, r = {};
      return o((e || "").split("&"), function(e) {
        e && (t = e.replace(/\+/g, "%20").split("="), n = H(t[0]), y(n) && (e = y(t[1]) ? H(t[1]) : !0, pr.call(r, n) ? _r(r[n]) ? r[n].push(e) : r[n] = [r[n], e] : r[n] = e))
      }), r
    }

    function Y(e) {
      var t = [];
      return o(e, function(e, n) {
        _r(e) ? o(e, function(e) {
          t.push(B(n, !0) + (!0 === e ? "" : "=" + B(e, !0)))
        }) : t.push(B(n, !0) + (!0 === e ? "" : "=" + B(e, !0)))
      }), t.length ? t.join("&") : ""
    }

    function z(e) {
      return B(e, !0).replace(/%26/gi, "&").replace(/%3D/gi, "=").replace(/%2B/gi, "+")
    }

    function B(e, t) {
      return encodeURIComponent(e).replace(/%40/gi, "@").replace(/%3A/gi, ":").replace(/%24/g, "$").replace(/%2C/gi, ",").replace(/%3B/gi, ";").replace(/%20/g, t ? "%20" : "+")
    }

    function V(e, t) {
      var n, r, i = Cr.length;
      for (e = cr(e), r = 0; i > r; ++r)
        if (n = Cr[r] + t, b(n = e.attr(n))) return n;
      return null
    }

    function W(e, t) {
      var n, r, i = {};
      o(Cr, function(t) {
        t += "app", !n && e.hasAttribute && e.hasAttribute(t) && (n = e, r = e.getAttribute(t))
      }), o(Cr, function(t) {
        t += "app";
        var i;
        !n && (i = e.querySelector("[" + t.replace(":", "\\:") + "]")) && (n = i, r = i.getAttribute(t))
      }), n && (i.strictDi = null !== V(n, "strict-di"), t(n, r ? [r] : [], i))
    }

    function G(n, r, i) {
      $(i) || (i = {}), i = f({
        strictDi: !1
      }, i);
      var a = function() {
          if (n = cr(n), n.injector()) {
            var e = n[0] === t ? "document" : L(n);
            throw $r("btstrpd", e.replace(/</, "&lt;").replace(/>/, "&gt;"))
          }
          return r = r || [], r.unshift(["$provide", function(e) {
            e.value("$rootElement", n)
          }]), i.debugInfoEnabled && r.push(["$compileProvider", function(e) {
            e.debugInfoEnabled(!0)
          }]), r.unshift("ng"), e = Dt(r, i.strictDi), e.invoke(["$rootScope", "$rootElement", "$compile", "$injector", function(e, t, n, r) {
            e.$apply(function() {
              t.data("$injector", r), n(t)(e)
            })
          }]), e
        },
        s = /^NG_ENABLE_DEBUG_INFO!/,
        u = /^NG_DEFER_BOOTSTRAP!/;
      return e && s.test(e.name) && (i.debugInfoEnabled = !0, e.name = e.name.replace(s, "")), e && !u.test(e.name) ? a() : (e.name = e.name.replace(u, ""), void(br.resumeBootstrap = function(e) {
        o(e, function(e) {
          r.push(e)
        }), a()
      }))
    }

    function Q() {
      e.name = "NG_ENABLE_DEBUG_INFO!" + e.name, e.location.reload()
    }

    function X(e) {
      return br.element(e).injector().get("$$testability")
    }

    function Z(e, t) {
      return t = t || "_", e.replace(Tr, function(e, n) {
        return (n ? t : "") + e.toLowerCase()
      })
    }

    function K() {
      var t;
      Mr || ((lr = e.jQuery) && lr.fn.on ? (cr = lr, f(lr.fn, {
        scope: Hr.scope,
        isolateScope: Hr.isolateScope,
        controller: Hr.controller,
        injector: Hr.injector,
        inheritedData: Hr.inheritedData
      }), t = lr.cleanData, lr.cleanData = function(e) {
        var n;
        if (xr) xr = !1;
        else
          for (var r, i = 0; null != (r = e[i]); i++)(n = lr._data(r, "events")) && n.$destroy && lr(r).triggerHandler("$destroy");
        t(e)
      }) : cr = ct, br.element = cr, Mr = !0)
    }

    function J(e, t, n) {
      if (!e) throw $r("areq", t || "?", n || "required");
      return e
    }

    function et(e, t, n) {
      return n && _r(e) && (e = e[e.length - 1]), J(_(e), t, "not a function, got " + (e && "object" == typeof e ? e.constructor.name || "Object" : typeof e)), e
    }

    function tt(e, t) {
      if ("hasOwnProperty" === e) throw $r("badname", t)
    }

    function nt(e, t, n) {
      if (!t) return e;
      t = t.split(".");
      for (var r, i = e, o = t.length, a = 0; o > a; a++) r = t[a], e && (e = (i = e)[r]);
      return !n && _(e) ? F(i, e) : e
    }

    function rt(e) {
      var t = e[0];
      e = e[e.length - 1];
      var n = [t];
      do {
        if (t = t.nextSibling, !t) break;
        n.push(t)
      } while (t !== e);
      return cr(n)
    }

    function it(e) {
      function t(e, t, n) {
        return e[t] || (e[t] = n())
      }
      var n = r("$injector"),
        i = r("ng");
      return e = t(e, "angular", Object), e.$$minErr = e.$$minErr || r, t(e, "module", function() {
        var e = {};
        return function(r, o, a) {
          if ("hasOwnProperty" === r) throw i("badname", "module");
          return o && e.hasOwnProperty(r) && (e[r] = null), t(e, r, function() {
            function e(e, n, r, i) {
              return i || (i = t),
                function() {
                  return i[r || "push"]([e, n, arguments]), c
                }
            }
            if (!o) throw n("nomod", r);
            var t = [],
              i = [],
              s = [],
              u = e("$injector", "invoke", "push", i),
              c = {
                _invokeQueue: t,
                _configBlocks: i,
                _runBlocks: s,
                requires: o,
                name: r,
                provider: e("$provide", "provider"),
                factory: e("$provide", "factory"),
                service: e("$provide", "service"),
                value: e("$provide", "value"),
                constant: e("$provide", "constant", "unshift"),
                animation: e("$animateProvider", "register"),
                filter: e("$filterProvider", "register"),
                controller: e("$controllerProvider", "register"),
                directive: e("$compileProvider", "directive"),
                config: u,
                run: function(e) {
                  return s.push(e), this
                }
              };
            return a && u(a), c
          })
        }
      })
    }

    function ot(t) {
      f(t, {
        bootstrap: G,
        copy: O,
        extend: f,
        equals: P,
        element: cr,
        forEach: o,
        injector: Dt,
        noop: p,
        bind: F,
        toJson: q,
        fromJson: R,
        identity: m,
        isUndefined: v,
        isDefined: y,
        isString: b,
        isFunction: _,
        isObject: $,
        isNumber: w,
        isElement: T,
        isArray: _r,
        version: Ar,
        isDate: x,
        lowercase: hr,
        uppercase: mr,
        callbacks: {
          counter: 0
        },
        getTestability: X,
        $$minErr: r,
        $$csp: Sr,
        reloadWithDebugInfo: Q,
        $$hasClass: gt
      }), fr = it(e);
      try {
        fr("ngLocale")
      } catch (n) {
        fr("ngLocale", []).provider("$locale", Jt)
      }
      fr("ng", ["ngLocale"], ["$provide", function(e) {
        e.provider({
          $$sanitizeUri: Sn
        }), e.provider("$compile", qt).directive({
          a: ki,
          input: Ui,
          textarea: Ui,
          form: Mi,
          script: Eo,
          select: No,
          style: jo,
          option: Po,
          ngBind: oo,
          ngBindHtml: so,
          ngBindTemplate: ao,
          ngClass: uo,
          ngClassEven: lo,
          ngClassOdd: co,
          ngCloak: fo,
          ngController: ho,
          ngForm: Ai,
          ngHide: ko,
          ngIf: go,
          ngInclude: vo,
          ngInit: $o,
          ngNonBindable: bo,
          ngPluralize: wo,
          ngRepeat: xo,
          ngShow: _o,
          ngStyle: So,
          ngSwitch: Co,
          ngSwitchWhen: To,
          ngSwitchDefault: Mo,
          ngOptions: Oo,
          ngTransclude: Ao,
          ngModel: Qi,
          ngList: to,
          ngChange: Xi,
          pattern: Ki,
          ngPattern: Ki,
          required: Zi,
          ngRequired: Zi,
          minlength: eo,
          ngMinlength: eo,
          maxlength: Ji,
          ngMaxlength: Ji,
          ngValue: ro,
          ngModelOptions: io
        }).directive({
          ngInclude: yo
        }).directive(Si).directive(po), e.provider({
          $anchorScroll: Ot,
          $animate: Zr,
          $browser: jt,
          $cacheFactory: Ft,
          $controller: Ht,
          $document: Ut,
          $exceptionHandler: Yt,
          $filter: In,
          $interpolate: Zt,
          $interval: Kt,
          $http: Wt,
          $httpBackend: Qt,
          $location: dn,
          $log: hn,
          $parse: $n,
          $rootScope: kn,
          $q: bn,
          $$q: wn,
          $sce: An,
          $sceDelegate: Mn,
          $sniffer: En,
          $templateCache: It,
          $templateRequest: Dn,
          $$testability: On,
          $timeout: Nn,
          $window: Fn,
          $$rAF: _n,
          $$asyncCallback: Nt
        })
      }])
    }

    function at(e) {
      return e.replace(Or, function(e, t, n, r) {
        return r ? n.toUpperCase() : n
      }).replace(Nr, "Moz$1")
    }

    function st(e) {
      return e = e.nodeType, 1 === e || !e || 9 === e
    }

    function ut(e, t) {
      var n, r, i = t.createDocumentFragment(),
        a = [];
      if (Ir.test(e)) {
        for (n = n || i.appendChild(t.createElement("div")), r = (qr.exec(e) || ["", ""])[1].toLowerCase(), r = Lr[r] || Lr._default, n.innerHTML = r[1] + e.replace(Rr, "<$1></$2>") + r[2], r = r[0]; r--;) n = n.lastChild;
        a = j(a, n.childNodes), n = i.firstChild, n.textContent = ""
      } else a.push(t.createTextNode(e));
      return i.textContent = "", i.innerHTML = "", o(a, function(e) {
        i.appendChild(e)
      }), i
    }

    function ct(e) {
      if (e instanceof ct) return e;
      var n;
      if (b(e) && (e = kr(e), n = !0), !(this instanceof ct)) {
        if (n && "<" != e.charAt(0)) throw jr("nosel");
        return new ct(e)
      }
      if (n) {
        n = t;
        var r;
        e = (r = Fr.exec(e)) ? [n.createElement(r[1])] : (r = ut(e, n)) ? r.childNodes : []
      }
      $t(this, e)
    }

    function lt(e) {
      return e.cloneNode(!0)
    }

    function ft(e, t) {
      if (t || ht(e), e.querySelectorAll)
        for (var n = e.querySelectorAll("*"), r = 0, i = n.length; i > r; r++) ht(n[r])
    }

    function dt(e, t, n, r) {
      if (y(r)) throw jr("offargs");
      var i = (r = pt(e)) && r.events;
      if (r && r.handle)
        if (t) o(t.split(" "), function(t) {
          v(n) ? (e.removeEventListener(t, i[t], !1), delete i[t]) : D(i[t] || [], n)
        });
        else
          for (t in i) "$destroy" !== t && e.removeEventListener(t, i[t], !1), delete i[t]
    }

    function ht(e, t) {
      var r = e.ng339,
        i = r && Er[r];
      i && (t ? delete i.data[t] : (i.handle && (i.events.$destroy && i.handle({}, "$destroy"), dt(e)), delete Er[r], e.ng339 = n))
    }

    function pt(e, t) {
      var r = e.ng339,
        r = r && Er[r];
      return t && !r && (e.ng339 = r = ++Dr, r = Er[r] = {
        events: {},
        data: {},
        handle: n
      }), r
    }

    function mt(e, t, n) {
      if (st(e)) {
        var r = y(n),
          i = !r && t && !$(t),
          o = !t;
        if (e = (e = pt(e, !i)) && e.data, r) e[t] = n;
        else {
          if (o) return e;
          if (i) return e && e[t];
          f(e, t)
        }
      }
    }

    function gt(e, t) {
      return e.getAttribute ? -1 < (" " + (e.getAttribute("class") || "") + " ").replace(/[\n\t]/g, " ").indexOf(" " + t + " ") : !1
    }

    function vt(e, t) {
      t && e.setAttribute && o(t.split(" "), function(t) {
        e.setAttribute("class", kr((" " + (e.getAttribute("class") || "") + " ").replace(/[\n\t]/g, " ").replace(" " + kr(t) + " ", " ")))
      })
    }

    function yt(e, t) {
      if (t && e.setAttribute) {
        var n = (" " + (e.getAttribute("class") || "") + " ").replace(/[\n\t]/g, " ");
        o(t.split(" "), function(e) {
          e = kr(e), -1 === n.indexOf(" " + e + " ") && (n += e + " ")
        }), e.setAttribute("class", kr(n))
      }
    }

    function $t(e, t) {
      if (t)
        if (t.nodeType) e[e.length++] = t;
        else {
          var n = t.length;
          if ("number" == typeof n && t.window !== t) {
            if (n)
              for (var r = 0; n > r; r++) e[e.length++] = t[r]
          } else e[e.length++] = t
        }
    }

    function bt(e, t) {
      return wt(e, "$" + (t || "ngController") + "Controller")
    }

    function wt(e, t, r) {
      for (9 == e.nodeType && (e = e.documentElement), t = _r(t) ? t : [t]; e;) {
        for (var i = 0, o = t.length; o > i; i++)
          if ((r = cr.data(e, t[i])) !== n) return r;
        e = e.parentNode || 11 === e.nodeType && e.host
      }
    }

    function xt(e) {
      for (ft(e, !0); e.firstChild;) e.removeChild(e.firstChild)
    }

    function _t(e, t) {
      t || ft(e);
      var n = e.parentNode;
      n && n.removeChild(e)
    }

    function kt(e, t) {
      var n = Ur[t.toLowerCase()];
      return n && Yr[A(e)] && n
    }

    function St(e, t) {
      var n = e.nodeName;
      return ("INPUT" === n || "TEXTAREA" === n) && zr[t]
    }

    function Ct(e, t) {
      var n = function(n, r) {
        n.isDefaultPrevented = function() {
          return n.defaultPrevented
        };
        var i = t[r || n.type],
          o = i ? i.length : 0;
        if (o) {
          o > 1 && (i = N(i));
          for (var a = 0; o > a; a++) i[a].call(e, n)
        }
      };
      return n.elem = e, n
    }

    function Tt(e, t) {
      var n = e && e.$$hashKey;
      return n ? ("function" == typeof n && (n = e.$$hashKey()), n) : (n = typeof e, n = "function" == n || "object" == n && null !== e ? e.$$hashKey = n + ":" + (t || c)() : n + ":" + e)
    }

    function Mt(e, t) {
      if (t) {
        var n = 0;
        this.nextUid = function() {
          return ++n
        }
      }
      o(e, this.put, this)
    }

    function At(e) {
      return (e = e.toString().replace(Gr, "").match(Br)) ? "function(" + (e[1] || "").replace(/[\s\r\n]+/, " ") + ")" : "fn"
    }

    function Et(e, t, n) {
      var r;
      if ("function" == typeof e) {
        if (!(r = e.$inject)) {
          if (r = [], e.length) {
            if (t) throw b(n) && n || (n = e.name || At(e)), Qr("strictdi", n);
            t = e.toString().replace(Gr, ""), t = t.match(Br), o(t[1].split(Vr), function(e) {
              e.replace(Wr, function(e, t, n) {
                r.push(n)
              })
            })
          }
          e.$inject = r
        }
      } else _r(e) ? (t = e.length - 1, et(e[t], "fn"), r = e.slice(0, t)) : et(e, "fn", !0);
      return r
    }

    function Dt(e, t) {
      function r(e) {
        return function(t, n) {
          return $(t) ? void o(t, u(e)) : e(t, n)
        }
      }

      function i(e, t) {
        if (tt(e, "service"), (_(t) || _r(t)) && (t = m.instantiate(t)), !t.$get) throw Qr("pget", e);
        return h[e + "Provider"] = t
      }

      function a(e, t) {
        return i(e, {
          $get: t
        })
      }

      function s(e) {
        var t, n = [];
        return o(e, function(e) {
          function r(e) {
            var t, n;
            for (t = 0, n = e.length; n > t; t++) {
              var r = e[t],
                i = m.get(r[0]);
              i[r[1]].apply(i, r[2])
            }
          }
          if (!d.get(e)) {
            d.put(e, !0);
            try {
              b(e) ? (t = fr(e), n = n.concat(s(t.requires)).concat(t._runBlocks), r(t._invokeQueue), r(t._configBlocks)) : _(e) ? n.push(m.invoke(e)) : _r(e) ? n.push(m.invoke(e)) : et(e, "module")
            } catch (i) {
              throw _r(e) && (e = e[e.length - 1]), i.message && i.stack && -1 == i.stack.indexOf(i.message) && (i = i.message + "\n" + i.stack), Qr("modulerr", e, i.stack || i.message || i)
            }
          }
        }), n
      }

      function c(e, n) {
        function r(t) {
          if (e.hasOwnProperty(t)) {
            if (e[t] === l) throw Qr("cdep", t + " <- " + f.join(" <- "));
            return e[t]
          }
          try {
            return f.unshift(t), e[t] = l, e[t] = n(t)
          } catch (r) {
            throw e[t] === l && delete e[t], r
          } finally {
            f.shift()
          }
        }

        function i(e, n, i, o) {
          "string" == typeof i && (o = i, i = null);
          var a = [];
          o = Et(e, t, o);
          var s, u, c;
          for (u = 0, s = o.length; s > u; u++) {
            if (c = o[u], "string" != typeof c) throw Qr("itkn", c);
            a.push(i && i.hasOwnProperty(c) ? i[c] : r(c))
          }
          return _r(e) && (e = e[s]), e.apply(n, a)
        }
        return {
          invoke: i,
          instantiate: function(e, t, n) {
            var r = function() {};
            return r.prototype = (_r(e) ? e[e.length - 1] : e).prototype, r = new r, e = i(e, r, t, n), $(e) || _(e) ? e : r
          },
          get: r,
          annotate: Et,
          has: function(t) {
            return h.hasOwnProperty(t + "Provider") || e.hasOwnProperty(t)
          }
        }
      }
      t = !0 === t;
      var l = {},
        f = [],
        d = new Mt([], !0),
        h = {
          $provide: {
            provider: r(i),
            factory: r(a),
            service: r(function(e, t) {
              return a(e, ["$injector", function(e) {
                return e.instantiate(t)
              }])
            }),
            value: r(function(e, t) {
              return a(e, g(t))
            }),
            constant: r(function(e, t) {
              tt(e, "constant"), h[e] = t, v[e] = t
            }),
            decorator: function(e, t) {
              var n = m.get(e + "Provider"),
                r = n.$get;
              n.$get = function() {
                var e = y.invoke(r, n);
                return y.invoke(t, null, {
                  $delegate: e
                })
              }
            }
          }
        },
        m = h.$injector = c(h, function() {
          throw Qr("unpr", f.join(" <- "))
        }),
        v = {},
        y = v.$injector = c(v, function(e) {
          var t = m.get(e + "Provider");
          return y.invoke(t.$get, t, n, e)
        });
      return o(s(e), function(e) {
        y.invoke(e || p)
      }), y
    }

    function Ot() {
      var e = !0;
      this.disableAutoScrolling = function() {
        e = !1
      }, this.$get = ["$window", "$location", "$rootScope", function(t, n, r) {
        function i(e) {
          var t = null;
          return o(e, function(e) {
            t || "a" !== A(e) || (t = e)
          }), t
        }

        function a() {
          var e, r = n.hash();
          r ? (e = s.getElementById(r)) ? e.scrollIntoView() : (e = i(s.getElementsByName(r))) ? e.scrollIntoView() : "top" === r && t.scrollTo(0, 0) : t.scrollTo(0, 0)
        }
        var s = t.document;
        return e && r.$watch(function() {
          return n.hash()
        }, function() {
          r.$evalAsync(a)
        }), a
      }]
    }

    function Nt() {
      this.$get = ["$$rAF", "$timeout", function(e, t) {
        return e.supported ? function(t) {
          return e(t)
        } : function(e) {
          return t(e, 0, !1)
        }
      }]
    }

    function Pt(e, t, r, i) {
      function a(e) {
        try {
          e.apply(null, gr.call(arguments, 1))
        } finally {
          if (y--, 0 === y)
            for (; $.length;) try {
              $.pop()()
            } catch (t) {
              r.error(t)
            }
        }
      }

      function s(e, t) {
        ! function n() {
          o(x, function(e) {
            e()
          }), w = t(n, e)
        }()
      }

      function u() {
        S = null, _ != c.url() && (_ = c.url(), o(C, function(e) {
          e(c.url())
        }))
      }
      var c = this,
        l = t[0],
        f = e.location,
        d = e.history,
        h = e.setTimeout,
        m = e.clearTimeout,
        g = {};
      c.isMock = !1;
      var y = 0,
        $ = [];
      c.$$completeOutstandingRequest = a, c.$$incOutstandingRequestCount = function() {
        y++
      }, c.notifyWhenNoOutstandingRequests = function(e) {
        o(x, function(e) {
          e()
        }), 0 === y ? e() : $.push(e)
      };
      var w, x = [];
      c.addPollFn = function(e) {
        return v(w) && s(100, h), x.push(e), e
      };
      var _ = f.href,
        k = t.find("base"),
        S = null;
      c.url = function(t, n) {
        return f !== e.location && (f = e.location), d !== e.history && (d = e.history), t ? _ != t ? (_ = t, i.history ? n ? d.replaceState(null, "", t) : (d.pushState(null, "", t), k.attr("href", k.attr("href"))) : (S = t, n ? f.replace(t) : f.href = t), c) : void 0 : S || f.href.replace(/%27/g, "'")
      };
      var C = [],
        T = !1;
      c.onUrlChange = function(t) {
        return T || (i.history && cr(e).on("popstate", u), i.hashchange ? cr(e).on("hashchange", u) : c.addPollFn(u), T = !0), C.push(t), t
      }, c.$$checkUrlChange = u, c.baseHref = function() {
        var e = k.attr("href");
        return e ? e.replace(/^(https?\:)?\/\/[^\/]*/, "") : ""
      };
      var M = {},
        A = "",
        E = c.baseHref();
      c.cookies = function(e, t) {
        var i, o, a, s;
        if (!e) {
          if (l.cookie !== A)
            for (A = l.cookie, i = A.split("; "), M = {}, a = 0; a < i.length; a++) o = i[a], s = o.indexOf("="), s > 0 && (e = decodeURIComponent(o.substring(0, s)), M[e] === n && (M[e] = decodeURIComponent(o.substring(s + 1))));
          return M
        }
        t === n ? l.cookie = encodeURIComponent(e) + "=;path=" + E + ";expires=Thu, 01 Jan 1970 00:00:00 GMT" : b(t) && (i = (l.cookie = encodeURIComponent(e) + "=" + encodeURIComponent(t) + ";path=" + E).length + 1, i > 4096 && r.warn("Cookie '" + e + "' possibly not set or overflowed because it was too large (" + i + " > 4096 bytes)!"))
      }, c.defer = function(e, t) {
        var n;
        return y++, n = h(function() {
          delete g[n], a(e)
        }, t || 0), g[n] = !0, n
      }, c.defer.cancel = function(e) {
        return g[e] ? (delete g[e], m(e), a(p), !0) : !1
      }
    }

    function jt() {
      this.$get = ["$window", "$log", "$sniffer", "$document", function(e, t, n, r) {
        return new Pt(e, r, t, n)
      }]
    }

    function Ft() {
      this.$get = function() {
        function e(e, n) {
          function i(e) {
            e != d && (h ? h == e && (h = e.n) : h = e, o(e.n, e.p), o(e, d), d = e, d.n = null)
          }

          function o(e, t) {
            e != t && (e && (e.p = t), t && (t.n = e))
          }
          if (e in t) throw r("$cacheFactory")("iid", e);
          var a = 0,
            s = f({}, n, {
              id: e
            }),
            u = {},
            c = n && n.capacity || Number.MAX_VALUE,
            l = {},
            d = null,
            h = null;
          return t[e] = {
            put: function(e, t) {
              if (c < Number.MAX_VALUE) {
                var n = l[e] || (l[e] = {
                  key: e
                });
                i(n)
              }
              return v(t) ? void 0 : (e in u || a++, u[e] = t, a > c && this.remove(h.key), t)
            },
            get: function(e) {
              if (c < Number.MAX_VALUE) {
                var t = l[e];
                if (!t) return;
                i(t)
              }
              return u[e]
            },
            remove: function(e) {
              if (c < Number.MAX_VALUE) {
                var t = l[e];
                if (!t) return;
                t == d && (d = t.p), t == h && (h = t.n), o(t.n, t.p), delete l[e]
              }
              delete u[e], a--
            },
            removeAll: function() {
              u = {}, a = 0, l = {}, d = h = null
            },
            destroy: function() {
              l = s = u = null, delete t[e]
            },
            info: function() {
              return f({}, s, {
                size: a
              })
            }
          }
        }
        var t = {};
        return e.info = function() {
          var e = {};
          return o(t, function(t, n) {
            e[n] = t.info()
          }), e
        }, e.get = function(e) {
          return t[e]
        }, e
      }
    }

    function It() {
      this.$get = ["$cacheFactory", function(e) {
        return e("templates")
      }]
    }

    function qt(e, r) {
      var i = {},
        a = /^\s*directive\:\s*([\d\w_\-]+)\s+(.*)$/,
        s = /(([\d\w_\-]+)(?:\:([^;]+))?;?)/,
        c = M("ngSrc,ngSrcset,src,srcset"),
        l = /^(on[a-z]+|formaction)$/;
      this.directive = function v(t, n) {
        return tt(t, "directive"), b(t) ? (J(n, "directiveFactory"), i.hasOwnProperty(t) || (i[t] = [], e.factory(t + "Directive", ["$injector", "$exceptionHandler", function(e, n) {
          var r = [];
          return o(i[t], function(i, o) {
            try {
              var a = e.invoke(i);
              _(a) ? a = {
                compile: g(a)
              } : !a.compile && a.link && (a.compile = g(a.link)), a.priority = a.priority || 0, a.index = o, a.name = a.name || t, a.require = a.require || a.controller && a.name, a.restrict = a.restrict || "EA", r.push(a)
            } catch (s) {
              n(s)
            }
          }), r
        }])), i[t].push(n)) : o(t, u(v)), this
      }, this.aHrefSanitizationWhitelist = function(e) {
        return y(e) ? (r.aHrefSanitizationWhitelist(e), this) : r.aHrefSanitizationWhitelist()
      }, this.imgSrcSanitizationWhitelist = function(e) {
        return y(e) ? (r.imgSrcSanitizationWhitelist(e), this) : r.imgSrcSanitizationWhitelist()
      };
      var d = !0;
      this.debugInfoEnabled = function(e) {
        return y(e) ? (d = e, this) : d
      }, this.$get = ["$injector", "$interpolate", "$exceptionHandler", "$templateRequest", "$parse", "$controller", "$rootScope", "$document", "$sce", "$animate", "$$sanitizeUri", function(e, r, u, g, v, y, w, x, k, S, T) {
        function M(e, t) {
          try {
            e.addClass(t)
          } catch (n) {}
        }

        function E(e, t, n, r, i) {
          e instanceof cr || (e = cr(e)), o(e, function(t, n) {
            3 == t.nodeType && t.nodeValue.match(/\S+/) && (e[n] = cr(t).wrap("<span></span>").parent()[0])
          });
          var a = O(e, t, e, n, r, i);
          E.$$addScopeClass(e);
          var s, u = null,
            c = e;
          return function(t, n, r, i, o) {
            if (J(t, "scope"), u || (u = (o = o && o[0]) && "foreignobject" !== A(o) && o.toString().match(/SVG/) ? "svg" : "html"), "html" !== u && e[0] !== s && (c = cr(W(u, cr("<div>").append(e).html()))), s = e[0], o = n ? Hr.clone.call(c) : c, r)
              for (var l in r) o.data("$" + l + "Controller", r[l].instance);
            return E.$$addScopeInfo(o, t), n && n(o, t), a && a(t, o, o, i), o
          }
        }

        function O(e, t, r, i, o, a) {
          function s(e, r, i, o) {
            var a, s, u, c, l, f, p;
            if (d)
              for (p = Array(r.length), c = 0; c < h.length; c += 3) a = h[c], p[a] = r[a];
            else p = r;
            for (c = 0, l = h.length; l > c;) s = p[h[c++]], r = h[c++], a = h[c++], r ? (r.scope ? (u = e.$new(), E.$$addScopeInfo(cr(s), u)) : u = e, f = r.transcludeOnThisElement ? N(e, r.transclude, o, r.elementTranscludeOnThisElement) : !r.templateOnThisElement && o ? o : !o && t ? N(e, t) : null, r(a, u, s, i, f)) : a && a(e, s.childNodes, n, o)
          }
          for (var u, c, l, f, d, h = [], p = 0; p < e.length; p++) u = new tt, c = j(e[p], [], u, 0 === p ? i : n, o), (a = c.length ? q(c, e[p], u, t, r, null, [], [], a) : null) && a.scope && E.$$addScopeClass(u.$$element), u = a && a.terminal || !(l = e[p].childNodes) || !l.length ? null : O(l, a ? (a.transcludeOnThisElement || !a.templateOnThisElement) && a.transclude : t), (a || u) && (h.push(p, a, u), f = !0, d = d || a), a = null;
          return f ? s : null
        }

        function N(e, t, n, r) {
          return function(i, o, a, s) {
            var u = !1;
            return i || (i = e.$new(), u = i.$$transcluded = !0), o = t(i, o, a, n, s), u && !r && o.on("$destroy", function() {
              i.$destroy()
            }), o
          }
        }

        function j(t, n, r, o, u) {
          var c, l = r.$attr;
          switch (t.nodeType) {
            case 1:
              H(n, Rt(A(t)), "E", o, u);
              for (var f, d, h, p = t.attributes, m = 0, g = p && p.length; g > m; m++) {
                var v = !1,
                  y = !1;
                if (f = p[m], !ur || ur >= 8 || f.specified) {
                  c = f.name, f = kr(f.value), d = Rt(c), (h = ot.test(d)) && (c = Z(d.substr(6), "-"));
                  var $, w = d.replace(/(Start|End)$/, "");
                  e: {
                    var x = w;
                    if (i.hasOwnProperty(x)) {
                      $ = void 0;
                      for (var x = e.get(x + "Directive"), _ = 0, k = x.length; k > _; _++)
                        if ($ = x[_], $.multiElement) {
                          $ = !0;
                          break e
                        }
                    }
                    $ = !1
                  }
                  $ && d === w + "Start" && (v = c, y = c.substr(0, c.length - 5) + "end", c = c.substr(0, c.length - 6)), d = Rt(c.toLowerCase()), l[d] = c, (h || !r.hasOwnProperty(d)) && (r[d] = f, kt(t, d) && (r[d] = !0)), Q(t, n, f, d, h), H(n, d, "A", o, u, v, y)
                }
              }
              if (t = t.className, b(t) && "" !== t)
                for (; c = s.exec(t);) d = Rt(c[2]), H(n, d, "C", o, u) && (r[d] = kr(c[3])), t = t.substr(c.index + c[0].length);
              break;
            case 3:
              V(n, t.nodeValue);
              break;
            case 8:
              try {
                (c = a.exec(t.nodeValue)) && (d = Rt(c[1]), H(n, d, "M", o, u) && (r[d] = kr(c[2])))
              } catch (S) {}
          }
          return n.sort(z), n
        }

        function F(e, t, n) {
          var r = [],
            i = 0;
          if (t && e.hasAttribute && e.hasAttribute(t)) {
            do {
              if (!e) throw Kr("uterdir", t, n);
              1 == e.nodeType && (e.hasAttribute(t) && i++, e.hasAttribute(n) && i--), r.push(e), e = e.nextSibling
            } while (i > 0)
          } else r.push(e);
          return cr(r)
        }

        function I(e, t, n) {
          return function(r, i, o, a, s) {
            return i = F(i[0], t, n), e(r, i, o, a, s)
          }
        }

        function q(e, i, a, s, c, l, f, d, h) {
          function p(e, t, n, r) {
            e && (n && (e = I(e, n, r)), e.require = k.require, e.directiveName = S, (O === k || k.$$isolateScope) && (e = K(e, {
              isolateScope: !0
            })), f.push(e)), t && (n && (t = I(t, n, r)), t.require = k.require, t.directiveName = S, (O === k || k.$$isolateScope) && (t = K(t, {
              isolateScope: !0
            })), d.push(t))
          }

          function m(e, t, n, r) {
            var i, a = "data",
              s = !1;
            if (b(t)) {
              for (;
                "^" == (i = t.charAt(0)) || "?" == i;) t = t.substr(1), "^" == i && (a = "inheritedData"), s = s || "?" == i;
              if (i = null, r && "data" === a && (i = r[t]) && (i = i.instance), i = i || n[a]("$" + t + "Controller"), !i && !s) throw Kr("ctreq", t, e)
            } else _r(t) && (i = [], o(t, function(t) {
              i.push(m(e, t, n, r))
            }));
            return i
          }

          function g(e, t, s, u, c) {
            function l(e, t, r) {
              var i;
              return C(e) || (r = t, t = e, e = n), V && (i = b), r || (r = V ? _.parent() : _), c(e, t, i, r)
            }
            var h, p, g, $, b, w, _, k;
            if (i === s ? (k = a, _ = a.$$element) : (_ = cr(s), k = new tt(_, a)), O && ($ = t.$new(!0)), w = c && l, D && (x = {}, b = {}, o(D, function(e) {
                var n = {
                  $scope: e === O || e.$$isolateScope ? $ : t,
                  $element: _,
                  $attrs: k,
                  $transclude: w
                };
                g = e.controller, "@" == g && (g = k[e.name]), n = y(g, n, !0, e.controllerAs), b[e.name] = n, V || _.data("$" + e.name + "Controller", n.instance), x[e.name] = n
              })), O) {
              var S = /^\s*([@=&])(\??)\s*(\w*)\s*$/;
              E.$$addScopeInfo(_, $, !0, !(N && (N === O || N === O.$$originalDirective))), E.$$addScopeClass(_, !0), u = x && x[O.name];
              var T = $;
              u && u.identifier && !0 === O.bindToController && (T = u.instance), o(O.scope, function(e, n) {
                var i, o, a, s, u = e.match(S) || [],
                  c = u[3] || n,
                  l = "?" == u[2],
                  u = u[1];
                switch ($.$$isolateBindings[n] = u + c, u) {
                  case "@":
                    k.$observe(c, function(e) {
                      $[n] = e
                    }), k.$$observers[c].$$scope = t, k[c] && (T[n] = r(k[c])(t));
                    break;
                  case "=":
                    if (l && !k[c]) break;
                    o = v(k[c]), s = o.literal ? P : function(e, t) {
                      return e === t || e !== e && t !== t
                    }, a = o.assign || function() {
                      throw i = T[n] = o(t), Kr("nonassign", k[c], O.name)
                    }, i = T[n] = o(t), l = t.$watch(v(k[c], function(e) {
                      return s(e, T[n]) || (s(e, i) ? a(t, e = T[n]) : T[n] = e), i = e
                    }), null, o.literal), $.$on("$destroy", l);
                    break;
                  case "&":
                    o = v(k[c]), T[n] = function(e) {
                      return o(t, e)
                    };
                    break;
                  default:
                    throw Kr("iscp", O.name, n, e)
                }
              })
            }
            for (x && (o(x, function(e) {
                e()
              }), x = null), u = 0, h = f.length; h > u; u++) p = f[u], et(p, p.isolateScope ? $ : t, _, k, p.require && m(p.directiveName, p.require, _, b), w);
            for (u = t, O && (O.template || null === O.templateUrl) && (u = $), e && e(u, s.childNodes, n, c), u = d.length - 1; u >= 0; u--) p = d[u], et(p, p.isolateScope ? $ : t, _, k, p.require && m(p.directiveName, p.require, _, b), w)
          }
          h = h || {};
          for (var w, x, k, S, T, M, A = -Number.MAX_VALUE, D = h.controllerDirectives, O = h.newIsolateScopeDirective, N = h.templateDirective, q = h.nonTlbTranscludeDirective, H = !1, z = !1, V = h.hasElementTranscludeDirective, G = a.$$element = cr(i), Q = s, Z = 0, J = e.length; J > Z; Z++) {
            k = e[Z];
            var nt = k.$$start,
              rt = k.$$end;
            if (nt && (G = F(i, nt, rt)), T = n, A > k.priority) break;
            if ((T = k.scope) && (k.templateUrl || ($(T) ? (B("new/isolated scope", O || w, k, G), O = k) : B("new/isolated scope", O, k, G)), w = w || k), S = k.name, !k.templateUrl && k.controller && (T = k.controller, D = D || {}, B("'" + S + "' controller", D[S], k, G), D[S] = k), (T = k.transclude) && (H = !0, k.$$tlb || (B("transclusion", q, k, G), q = k), "element" == T ? (V = !0, A = k.priority, T = G, G = a.$$element = cr(t.createComment(" " + S + ": " + a[S] + " ")), i = G[0], X(c, gr.call(T, 0), i), Q = E(T, s, A, l && l.name, {
                nonTlbTranscludeDirective: q
              })) : (T = cr(lt(i)).contents(), G.empty(), Q = E(T, s))), k.template)
              if (z = !0, B("template", N, k, G), N = k, T = _(k.template) ? k.template(G, a) : k.template, T = it(T), k.replace) {
                if (l = k, T = Ir.test(T) ? cr(W(k.templateNamespace, kr(T))) : [], i = T[0], 1 != T.length || 1 !== i.nodeType) throw Kr("tplrt", S, "");
                X(c, G, i), J = {
                  $attr: {}
                }, T = j(i, [], J);
                var ot = e.splice(Z + 1, e.length - (Z + 1));
                O && R(T), e = e.concat(T).concat(ot), U(a, J), J = e.length
              } else G.html(T);
            if (k.templateUrl) z = !0, B("template", N, k, G), N = k, k.replace && (l = k), g = Y(e.splice(Z, e.length - Z), G, a, c, H && Q, f, d, {
              controllerDirectives: D,
              newIsolateScopeDirective: O,
              templateDirective: N,
              nonTlbTranscludeDirective: q
            }), J = e.length;
            else if (k.compile) try {
              M = k.compile(G, a, Q), _(M) ? p(null, M, nt, rt) : M && p(M.pre, M.post, nt, rt)
            } catch (at) {
              u(at, L(G))
            }
            k.terminal && (g.terminal = !0, A = Math.max(A, k.priority))
          }
          return g.scope = w && !0 === w.scope, g.transcludeOnThisElement = H, g.elementTranscludeOnThisElement = V, g.templateOnThisElement = z, g.transclude = Q, h.hasElementTranscludeDirective = V, g
        }

        function R(e) {
          for (var t = 0, n = e.length; n > t; t++) e[t] = h(e[t], {
            $$isolateScope: !0
          })
        }

        function H(t, r, o, a, s, c, l) {
          if (r === s) return null;
          if (s = null, i.hasOwnProperty(r)) {
            var f;
            r = e.get(r + "Directive");
            for (var d = 0, p = r.length; p > d; d++) try {
              f = r[d], (a === n || a > f.priority) && -1 != f.restrict.indexOf(o) && (c && (f = h(f, {
                $$start: c,
                $$end: l
              })), t.push(f), s = f)
            } catch (m) {
              u(m)
            }
          }
          return s
        }

        function U(e, t) {
          var n = t.$attr,
            r = e.$attr,
            i = e.$$element;
          o(e, function(r, i) {
            "$" != i.charAt(0) && (t[i] && t[i] !== r && (r += ("style" === i ? ";" : " ") + t[i]), e.$set(i, r, !0, n[i]))
          }), o(t, function(t, o) {
            "class" == o ? (M(i, t), e["class"] = (e["class"] ? e["class"] + " " : "") + t) : "style" == o ? (i.attr("style", i.attr("style") + ";" + t), e.style = (e.style ? e.style + ";" : "") + t) : "$" == o.charAt(0) || e.hasOwnProperty(o) || (e[o] = t, r[o] = n[o])
          })
        }

        function Y(e, t, n, r, i, a, s, u) {
          var c, l, d = [],
            h = t[0],
            p = e.shift(),
            m = f({}, p, {
              templateUrl: null,
              transclude: null,
              replace: null,
              $$originalDirective: p
            }),
            v = _(p.templateUrl) ? p.templateUrl(t, n) : p.templateUrl,
            y = p.templateNamespace;
          return t.empty(), g(k.getTrustedResourceUrl(v)).then(function(f) {
              var g, b;
              if (f = it(f), p.replace) {
                if (f = Ir.test(f) ? cr(W(y, kr(f))) : [], g = f[0], 1 != f.length || 1 !== g.nodeType) throw Kr("tplrt", p.name, v);
                f = {
                  $attr: {}
                }, X(r, t, g);
                var w = j(g, [], f);
                $(p.scope) && R(w), e = w.concat(e), U(n, f)
              } else g = h, t.html(f);
              for (e.unshift(m), c = q(e, g, n, i, t, p, a, s, u), o(r, function(e, n) {
                  e == g && (r[n] = t[0])
                }), l = O(t[0].childNodes, i); d.length;) {
                f = d.shift(), b = d.shift();
                var x = d.shift(),
                  _ = d.shift(),
                  w = t[0];
                if (b !== h) {
                  var k = b.className;
                  u.hasElementTranscludeDirective && p.replace || (w = lt(g)), X(x, cr(b), w), M(cr(w), k)
                }
                b = c.transcludeOnThisElement ? N(f, c.transclude, _) : _, c(l, f, w, r, b)
              }
              d = null
            }),
            function(e, t, n, r, i) {
              e = i, d ? (d.push(t), d.push(n), d.push(r), d.push(e)) : (c.transcludeOnThisElement && (e = N(t, c.transclude, i)), c(l, t, n, r, e))
            }
        }

        function z(e, t) {
          var n = t.priority - e.priority;
          return 0 !== n ? n : e.name !== t.name ? e.name < t.name ? -1 : 1 : e.index - t.index
        }

        function B(e, t, n, r) {
          if (t) throw Kr("multidir", t.name, n.name, e, L(r))
        }

        function V(e, t) {
          var n = r(t, !0);
          n && e.push({
            priority: 0,
            compile: function(e) {
              e = e.parent();
              var t = !!e.length;
              return t && E.$$addBindingClass(e),
                function(e, r) {
                  var i = r.parent();
                  t || E.$$addBindingClass(i), E.$$addBindingInfo(i, n.expressions), e.$watch(n, function(e) {
                    r[0].nodeValue = e
                  })
                }
            }
          })
        }

        function W(e, n) {
          switch (e = hr(e || "html")) {
            case "svg":
            case "math":
              var r = t.createElement("div");
              return r.innerHTML = "<" + e + ">" + n + "</" + e + ">", r.childNodes[0].childNodes;
            default:
              return n
          }
        }

        function G(e, t) {
          if ("srcdoc" == t) return k.HTML;
          var n = A(e);
          return "xlinkHref" == t || "form" == n && "action" == t || "img" != n && ("src" == t || "ngSrc" == t) ? k.RESOURCE_URL : void 0
        }

        function Q(e, t, n, i, o) {
          var a = r(n, !0);
          if (a) {
            if ("multiple" === i && "select" === A(e)) throw Kr("selmulti", L(e));
            t.push({
              priority: 100,
              compile: function() {
                return {
                  pre: function(t, n, s) {
                    if (n = s.$$observers || (s.$$observers = {}), l.test(i)) throw Kr("nodomevents");
                    (a = r(s[i], !0, G(e, i), c[i] || o)) && (s[i] = a(t), (n[i] || (n[i] = [])).$$inter = !0, (s.$$observers && s.$$observers[i].$$scope || t).$watch(a, function(e, t) {
                      "class" === i && e != t ? s.$updateClass(e, t) : s.$set(i, e)
                    }))
                  }
                }
              }
            })
          }
        }

        function X(e, n, r) {
          var i, o, a = n[0],
            s = n.length,
            u = a.parentNode;
          if (e)
            for (i = 0, o = e.length; o > i; i++)
              if (e[i] == a) {
                e[i++] = r, o = i + s - 1;
                for (var c = e.length; c > i; i++, o++) c > o ? e[i] = e[o] : delete e[i];
                e.length -= s - 1, e.context === a && (e.context = r);
                break
              }
          for (u && u.replaceChild(r, a), e = t.createDocumentFragment(), e.appendChild(a), cr(r).data(cr(a).data()), lr ? (xr = !0, lr.cleanData([a])) : delete cr.cache[a[cr.expando]], a = 1, s = n.length; s > a; a++) u = n[a], cr(u).remove(), e.appendChild(u), delete n[a];
          n[0] = r, n.length = 1
        }

        function K(e, t) {
          return f(function() {
            return e.apply(null, arguments)
          }, e, t)
        }

        function et(e, t, n, r, i, o) {
          try {
            e(t, n, r, i, o)
          } catch (a) {
            u(a, L(n))
          }
        }
        var tt = function(e, t) {
          if (t) {
            var n, r, i, o = Object.keys(t);
            for (n = 0, r = o.length; r > n; n++) i = o[n], this[i] = t[i]
          } else this.$attr = {};
          this.$$element = e
        };
        tt.prototype = {
          $normalize: Rt,
          $addClass: function(e) {
            e && 0 < e.length && S.addClass(this.$$element, e)
          },
          $removeClass: function(e) {
            e && 0 < e.length && S.removeClass(this.$$element, e)
          },
          $updateClass: function(e, t) {
            var n = Lt(e, t);
            n && n.length && S.addClass(this.$$element, n), (n = Lt(t, e)) && n.length && S.removeClass(this.$$element, n)
          },
          $set: function(e, t, r, i) {
            var a = this.$$element[0],
              s = kt(a, e),
              c = St(a, e),
              a = e;
            s ? (this.$$element.prop(e, t), i = s) : c && (this[c] = t, a = c), this[e] = t, i ? this.$attr[e] = i : (i = this.$attr[e]) || (this.$attr[e] = i = Z(e, "-")), s = A(this.$$element), ("a" === s && "href" === e || "img" === s && "src" === e) && (this[e] = t = T(t, "src" === e)), !1 !== r && (null === t || t === n ? this.$$element.removeAttr(i) : this.$$element.attr(i, t)), (e = this.$$observers) && o(e[a], function(e) {
              try {
                e(t)
              } catch (n) {
                u(n)
              }
            })
          },
          $observe: function(e, t) {
            var n = this,
              r = n.$$observers || (n.$$observers = {}),
              i = r[e] || (r[e] = []);
            return i.push(t), w.$evalAsync(function() {
                i.$$inter || t(n[e])
              }),
              function() {
                D(i, t)
              }
          }
        };
        var nt = r.startSymbol(),
          rt = r.endSymbol(),
          it = "{{" == nt || "}}" == rt ? m : function(e) {
            return e.replace(/\{\{/g, nt).replace(/}}/g, rt)
          },
          ot = /^ngAttr[A-Z]/;
        return E.$$addBindingInfo = d ? function(e, t) {
          var n = e.data("$binding") || [];
          _r(t) ? n = n.concat(t) : n.push(t), e.data("$binding", n)
        } : p, E.$$addBindingClass = d ? function(e) {
          M(e, "ng-binding")
        } : p, E.$$addScopeInfo = d ? function(e, t, n, r) {
          e.data(n ? r ? "$isolateScopeNoTemplate" : "$isolateScope" : "$scope", t)
        } : p, E.$$addScopeClass = d ? function(e, t) {
          M(e, t ? "ng-isolate-scope" : "ng-scope")
        } : p, E
      }]
    }

    function Rt(e) {
      return at(e.replace(Jr, ""))
    }

    function Lt(e, t) {
      var n = "",
        r = e.split(/\s+/),
        i = t.split(/\s+/),
        o = 0;
      e: for (; o < r.length; o++) {
        for (var a = r[o], s = 0; s < i.length; s++)
          if (a == i[s]) continue e;
        n += (0 < n.length ? " " : "") + a
      }
      return n
    }

    function Ht() {
      var e = {},
        t = !1,
        i = /^(\S+)(\s+as\s+(\w+))?$/;
      this.register = function(t, n) {
        tt(t, "controller"), $(t) ? f(e, t) : e[t] = n
      }, this.allowGlobals = function() {
        t = !0
      }, this.$get = ["$injector", "$window", function(o, a) {
        function s(e, t, n, i) {
          if (!e || !$(e.$scope)) throw r("$controller")("noscp", i, t);
          e.$scope[t] = n
        }
        return function(r, u, c, l) {
          var d, h, p;
          return c = !0 === c, l && b(l) && (p = l), b(r) && (l = r.match(i), h = l[1], p = p || l[3], r = e.hasOwnProperty(h) ? e[h] : nt(u.$scope, h, !0) || (t ? nt(a, h, !0) : n), et(r, h, !0)), c ? (c = function() {}, c.prototype = (_r(r) ? r[r.length - 1] : r).prototype, d = new c, p && s(u, p, d, h || r.name), f(function() {
            return o.invoke(r, d, u, h), d
          }, {
            instance: d,
            identifier: p
          })) : (d = o.instantiate(r, u, h), p && s(u, p, d, h || r.name), d)
        }
      }]
    }

    function Ut() {
      this.$get = ["$window", function(e) {
        return cr(e.document)
      }]
    }

    function Yt() {
      this.$get = ["$log", function(e) {
        return function() {
          e.error.apply(e, arguments)
        }
      }]
    }

    function zt(e) {
      var t, n, r, i = {};
      return e ? (o(e.split("\n"), function(e) {
        r = e.indexOf(":"), t = hr(kr(e.substr(0, r))), n = kr(e.substr(r + 1)), t && (i[t] = i[t] ? i[t] + ", " + n : n)
      }), i) : i
    }

    function Bt(e) {
      var t = $(e) ? e : n;
      return function(n) {
        return t || (t = zt(e)), n ? t[hr(n)] || null : t
      }
    }

    function Vt(e, t, n) {
      return _(n) ? n(e, t) : (o(n, function(n) {
        e = n(e, t)
      }), e)
    }

    function Wt() {
      var e = /^\s*(\[|\{[^\{])/,
        t = /[\}\]]\s*$/,
        r = /^\)\]\}',?\n/,
        i = {
          "Content-Type": "application/json;charset=utf-8"
        },
        a = this.defaults = {
          transformResponse: [function(n) {
            return b(n) && (n = n.replace(r, ""), e.test(n) && t.test(n) && (n = R(n))), n
          }],
          transformRequest: [function(e) {
            return $(e) && "[object File]" !== yr.call(e) && "[object Blob]" !== yr.call(e) ? q(e) : e
          }],
          headers: {
            common: {
              Accept: "application/json, text/plain, */*"
            },
            post: N(i),
            put: N(i),
            patch: N(i)
          },
          xsrfCookieName: "XSRF-TOKEN",
          xsrfHeaderName: "X-XSRF-TOKEN"
        },
        u = !1;
      this.useApplyAsync = function(e) {
        return y(e) ? (u = !!e, this) : u
      };
      var c = this.interceptors = [];
      this.$get = ["$httpBackend", "$browser", "$cacheFactory", "$rootScope", "$q", "$injector", function(e, t, r, i, l, d) {
        function h(e) {
          function t(e) {
            var t = f({}, e, {
              data: Vt(e.data, e.headers, r.transformResponse)
            });
            return e = e.status, e >= 200 && 300 > e ? t : l.reject(t)
          }
          var r = {
              method: "get",
              transformRequest: a.transformRequest,
              transformResponse: a.transformResponse
            },
            i = function(e) {
              var t, n, r = a.headers,
                i = f({}, e.headers),
                r = f({}, r.common, r[hr(e.method)]);
              e: for (t in r) {
                e = hr(t);
                for (n in i)
                  if (hr(n) === e) continue e;
                i[t] = r[t]
              }
              return function(e) {
                var t;
                o(e, function(n, r) {
                  _(n) && (t = n(), null != t ? e[r] = t : delete e[r])
                })
              }(i), i
            }(e);
          f(r, e), r.headers = i, r.method = mr(r.method);
          var s = [function(e) {
              i = e.headers;
              var n = Vt(e.data, Bt(i), e.transformRequest);
              return v(n) && o(i, function(e, t) {
                "content-type" === hr(t) && delete i[t]
              }), v(e.withCredentials) && !v(a.withCredentials) && (e.withCredentials = a.withCredentials), p(e, n, i).then(t, t)
            }, n],
            u = l.when(r);
          for (o(w, function(e) {
              (e.request || e.requestError) && s.unshift(e.request, e.requestError), (e.response || e.responseError) && s.push(e.response, e.responseError)
            }); s.length;) {
            e = s.shift();
            var c = s.shift(),
              u = u.then(e, c)
          }
          return u.success = function(e) {
            return u.then(function(t) {
              e(t.data, t.status, t.headers, r)
            }), u
          }, u.error = function(e) {
            return u.then(null, function(t) {
              e(t.data, t.status, t.headers, r)
            }), u
          }, u
        }

        function p(r, o, s) {
          function c(e, t, n, r) {
            function o() {
              f(t, e, n, r)
            }
            p && (e >= 200 && 300 > e ? p.put(k, [e, t, zt(n), r]) : p.remove(k)), u ? i.$applyAsync(o) : (o(), i.$$phase || i.$apply())
          }

          function f(e, t, n, i) {
            t = Math.max(t, 0), (t >= 200 && 300 > t ? w.resolve : w.reject)({
              data: e,
              status: t,
              headers: Bt(n),
              config: r,
              statusText: i
            })
          }

          function d() {
            var e = h.pendingRequests.indexOf(r); - 1 !== e && h.pendingRequests.splice(e, 1)
          }
          var p, b, w = l.defer(),
            x = w.promise,
            k = m(r.url, r.params);
          if (h.pendingRequests.push(r), x.then(d, d), !r.cache && !a.cache || !1 === r.cache || "GET" !== r.method && "JSONP" !== r.method || (p = $(r.cache) ? r.cache : $(a.cache) ? a.cache : g), p)
            if (b = p.get(k), y(b)) {
              if (b && _(b.then)) return b.then(d, d), b;
              _r(b) ? f(b[1], b[0], N(b[2]), b[3]) : f(b, 200, {}, "OK")
            } else p.put(k, x);
          return v(b) && ((b = jn(r.url) ? t.cookies()[r.xsrfCookieName || a.xsrfCookieName] : n) && (s[r.xsrfHeaderName || a.xsrfHeaderName] = b), e(r.method, k, o, c, s, r.timeout, r.withCredentials, r.responseType)), x
        }

        function m(e, t) {
          if (!t) return e;
          var n = [];
          return s(t, function(e, t) {
            null === e || v(e) || (_r(e) || (e = [e]), o(e, function(e) {
              $(e) && (e = x(e) ? e.toISOString() : q(e)), n.push(B(t) + "=" + B(e))
            }))
          }), 0 < n.length && (e += (-1 == e.indexOf("?") ? "?" : "&") + n.join("&")), e
        }
        var g = r("$http"),
          w = [];
        return o(c, function(e) {
            w.unshift(b(e) ? d.get(e) : d.invoke(e))
          }), h.pendingRequests = [],
          function() {
            o(arguments, function(e) {
              h[e] = function(t, n) {
                return h(f(n || {}, {
                  method: e,
                  url: t
                }))
              }
            })
          }("get", "delete", "head", "jsonp"),
          function() {
            o(arguments, function(e) {
              h[e] = function(t, n, r) {
                return h(f(r || {}, {
                  method: e,
                  url: t,
                  data: n
                }))
              }
            })
          }("post", "put", "patch"), h.defaults = a, h
      }]
    }

    function Gt(t) {
      if (8 >= ur && (!t.match(/^(get|post|head|put|delete|options)$/i) || !e.XMLHttpRequest)) return new e.ActiveXObject("Microsoft.XMLHTTP");
      if (e.XMLHttpRequest) return new e.XMLHttpRequest;
      throw r("$httpBackend")("noxhr")
    }

    function Qt() {
      this.$get = ["$browser", "$window", "$document", function(e, t, n) {
        return Xt(e, Gt, e.defer, t.angular.callbacks, n[0])
      }]
    }

    function Xt(e, t, n, r, i) {
      function a(e, t, n) {
        var o = i.createElement("script"),
          a = null;
        return o.type = "text/javascript", o.src = e, o.async = !0, a = function(e) {
          o.removeEventListener("load", a, !1), o.removeEventListener("error", a, !1), i.body.removeChild(o), o = null;
          var s = -1,
            u = "unknown";
          e && ("load" !== e.type || r[t].called || (e = {
            type: "error"
          }), u = e.type, s = "error" === e.type ? 404 : 200), n && n(s, u)
        }, o.addEventListener("load", a, !1), o.addEventListener("error", a, !1), i.body.appendChild(o), a
      }
      return function(i, s, u, c, l, f, d, h) {
        function m() {
          v = -1, b && b(), w && w.abort()
        }

        function g(t, r, i, o, a) {
          k && n.cancel(k), b = w = null, 0 === r && (r = i ? 200 : "file" == Pn(s).protocol ? 404 : 0), t(1223 === r ? 204 : r, i, o, a || ""), e.$$completeOutstandingRequest(p)
        }
        var v;
        if (e.$$incOutstandingRequestCount(), s = s || e.url(), "jsonp" == hr(i)) {
          var $ = "_" + (r.counter++).toString(36);
          r[$] = function(e) {
            r[$].data = e, r[$].called = !0
          };
          var b = a(s.replace("JSON_CALLBACK", "angular.callbacks." + $), $, function(e, t) {
            g(c, e, r[$].data, "", t), r[$] = p
          })
        } else {
          var w = t(i);
          if (w.open(i, s, !0), o(l, function(e, t) {
              y(e) && w.setRequestHeader(t, e)
            }), w.onreadystatechange = function() {
              if (w && 4 == w.readyState) {
                var e = null,
                  t = null,
                  n = ""; - 1 !== v && (e = w.getAllResponseHeaders(), t = "response" in w ? w.response : w.responseText), -1 === v && 10 > ur || (n = w.statusText), g(c, v || w.status, t, e, n)
              }
            }, d && (w.withCredentials = !0), h) try {
            w.responseType = h
          } catch (x) {
            if ("json" !== h) throw x
          }
          w.send(u || null)
        }
        if (f > 0) var k = n(m, f);
        else f && _(f.then) && f.then(m)
      }
    }

    function Zt() {
      var e = "{{",
        t = "}}";
      this.startSymbol = function(t) {
        return t ? (e = t, this) : e
      }, this.endSymbol = function(e) {
        return e ? (t = e, this) : t
      }, this.$get = ["$parse", "$exceptionHandler", "$sce", function(n, r, i) {
        function o(e) {
          return "\\\\\\" + e
        }

        function a(o, a, d, h) {
          function p(n) {
            return n.replace(c, e).replace(l, t)
          }

          function m(e) {
            try {
              var t, n = d ? i.getTrusted(d, e) : i.valueOf(e);
              if (null == n) t = "";
              else {
                switch (typeof n) {
                  case "string":
                    break;
                  case "number":
                    n = "" + n;
                    break;
                  default:
                    n = q(n)
                }
                t = n
              }
              return t
            } catch (a) {
              e = ei("interr", o, a.toString()), r(e)
            }
          }
          h = !!h;
          for (var g, y, $ = 0, b = [], w = [], x = o.length, k = [], S = []; x > $;) {
            if (-1 == (g = o.indexOf(e, $)) || -1 == (y = o.indexOf(t, g + s))) {
              $ !== x && k.push(p(o.substring($)));
              break
            }
            $ !== g && k.push(p(o.substring($, g))), $ = o.substring(g + s, y), b.push($), w.push(n($, m)), $ = y + u, S.push(k.length), k.push("")
          }
          if (d && 1 < k.length) throw ei("noconcat", o);
          if (!a || b.length) {
            var C = function(e) {
              for (var t = 0, n = b.length; n > t; t++) {
                if (h && v(e[t])) return;
                k[S[t]] = e[t]
              }
              return k.join("")
            };
            return f(function(e) {
              var t = 0,
                n = b.length,
                i = Array(n);
              try {
                for (; n > t; t++) i[t] = w[t](e);
                return C(i)
              } catch (a) {
                e = ei("interr", o, a.toString()), r(e)
              }
            }, {
              exp: o,
              expressions: b,
              $$watchDelegate: function(e, t, n) {
                var r;
                return e.$watchGroup(w, function(n, i) {
                  var o = C(n);
                  _(t) && t.call(this, o, n !== i ? r : o, e), r = o
                }, n)
              }
            })
          }
        }
        var s = e.length,
          u = t.length,
          c = new RegExp(e.replace(/./g, o), "g"),
          l = new RegExp(t.replace(/./g, o), "g");
        return a.startSymbol = function() {
          return e
        }, a.endSymbol = function() {
          return t
        }, a
      }]
    }

    function Kt() {
      this.$get = ["$rootScope", "$window", "$q", "$$q", function(e, t, n, r) {
        function i(i, a, s, u) {
          var c = t.setInterval,
            l = t.clearInterval,
            f = 0,
            d = y(u) && !u,
            h = (d ? r : n).defer(),
            p = h.promise;
          return s = y(s) ? s : 0, p.then(null, null, i), p.$$intervalId = c(function() {
            h.notify(f++), s > 0 && f >= s && (h.resolve(f), l(p.$$intervalId), delete o[p.$$intervalId]), d || e.$apply()
          }, a), o[p.$$intervalId] = h, p
        }
        var o = {};
        return i.cancel = function(e) {
          return e && e.$$intervalId in o ? (o[e.$$intervalId].reject("canceled"), t.clearInterval(e.$$intervalId), delete o[e.$$intervalId], !0) : !1
        }, i
      }]
    }

    function Jt() {
      this.$get = function() {
        return {
          id: "en-us",
          NUMBER_FORMATS: {
            DECIMAL_SEP: ".",
            GROUP_SEP: ",",
            PATTERNS: [{
              minInt: 1,
              minFrac: 0,
              maxFrac: 3,
              posPre: "",
              posSuf: "",
              negPre: "-",
              negSuf: "",
              gSize: 3,
              lgSize: 3
            }, {
              minInt: 1,
              minFrac: 2,
              maxFrac: 2,
              posPre: "\xa4",
              posSuf: "",
              negPre: "(\xa4",
              negSuf: ")",
              gSize: 3,
              lgSize: 3
            }],
            CURRENCY_SYM: "$"
          },
          DATETIME_FORMATS: {
            MONTH: "January February March April May June July August September October November December".split(" "),
            SHORTMONTH: "Jan Feb Mar Apr May Jun Jul Aug Sep Oct Nov Dec".split(" "),
            DAY: "Sunday Monday Tuesday Wednesday Thursday Friday Saturday".split(" "),
            SHORTDAY: "Sun Mon Tue Wed Thu Fri Sat".split(" "),
            AMPMS: ["AM", "PM"],
            medium: "MMM d, y h:mm:ss a",
            "short": "M/d/yy h:mm a",
            fullDate: "EEEE, MMMM d, y",
            longDate: "MMMM d, y",
            mediumDate: "MMM d, y",
            shortDate: "M/d/yy",
            mediumTime: "h:mm:ss a",
            shortTime: "h:mm a"
          },
          pluralCat: function(e) {
            return 1 === e ? "one" : "other"
          }
        }
      }
    }

    function en(e) {
      e = e.split("/");
      for (var t = e.length; t--;) e[t] = z(e[t]);
      return e.join("/")
    }

    function tn(e, t, n) {
      e = Pn(e, n), t.$$protocol = e.protocol, t.$$host = e.hostname, t.$$port = d(e.port) || ni[e.protocol] || null
    }

    function nn(e, t, n) {
      var r = "/" !== e.charAt(0);
      r && (e = "/" + e), e = Pn(e, n), t.$$path = decodeURIComponent(r && "/" === e.pathname.charAt(0) ? e.pathname.substring(1) : e.pathname), t.$$search = U(e.search), t.$$hash = decodeURIComponent(e.hash), t.$$path && "/" != t.$$path.charAt(0) && (t.$$path = "/" + t.$$path)
    }

    function rn(e, t) {
      return 0 === t.indexOf(e) ? t.substr(e.length) : void 0
    }

    function on(e) {
      var t = e.indexOf("#");
      return -1 == t ? e : e.substr(0, t)
    }

    function an(e) {
      return e.substr(0, on(e).lastIndexOf("/") + 1)
    }

    function sn(e, t) {
      this.$$html5 = !0, t = t || "";
      var r = an(e);
      tn(e, this, e), this.$$parse = function(t) {
        var n = rn(r, t);
        if (!b(n)) throw ri("ipthprfx", t, r);
        nn(n, this, e), this.$$path || (this.$$path = "/"), this.$$compose()
      }, this.$$compose = function() {
        var e = Y(this.$$search),
          t = this.$$hash ? "#" + z(this.$$hash) : "";
        this.$$url = en(this.$$path) + (e ? "?" + e : "") + t, this.$$absUrl = r + this.$$url.substr(1)
      }, this.$$parseLinkUrl = function(i, o) {
        if (o && "#" === o[0]) return this.hash(o.slice(1)), !0;
        var a, s;
        return (a = rn(e, i)) !== n ? (s = a, s = (a = rn(t, a)) !== n ? r + (rn("/", a) || a) : e + s) : (a = rn(r, i)) !== n ? s = r + a : r == i + "/" && (s = r), s && this.$$parse(s), !!s
      }
    }

    function un(e, t) {
      var n = an(e);
      tn(e, this, e), this.$$parse = function(r) {
        var i = rn(e, r) || rn(n, r),
          i = "#" == i.charAt(0) ? rn(t, i) : this.$$html5 ? i : "";
        if (!b(i)) throw ri("ihshprfx", r, t);
        nn(i, this, e), r = this.$$path;
        var o = /^\/[A-Z]:(\/.*)/;
        0 === i.indexOf(e) && (i = i.replace(e, "")), o.exec(i) || (r = (i = o.exec(r)) ? i[1] : r), this.$$path = r, this.$$compose()
      }, this.$$compose = function() {
        var n = Y(this.$$search),
          r = this.$$hash ? "#" + z(this.$$hash) : "";
        this.$$url = en(this.$$path) + (n ? "?" + n : "") + r, this.$$absUrl = e + (this.$$url ? t + this.$$url : "")
      }, this.$$parseLinkUrl = function(t) {
        return on(e) == on(t) ? (this.$$parse(t), !0) : !1
      }
    }

    function cn(e, t) {
      this.$$html5 = !0, un.apply(this, arguments);
      var n = an(e);
      this.$$parseLinkUrl = function(r, i) {
        if (i && "#" === i[0]) return this.hash(i.slice(1)), !0;
        var o, a;
        return e == on(r) ? o = r : (a = rn(n, r)) ? o = e + t + a : n === r + "/" && (o = n), o && this.$$parse(o), !!o
      }, this.$$compose = function() {
        var n = Y(this.$$search),
          r = this.$$hash ? "#" + z(this.$$hash) : "";
        this.$$url = en(this.$$path) + (n ? "?" + n : "") + r, this.$$absUrl = e + t + this.$$url
      }
    }

    function ln(e) {
      return function() {
        return this[e]
      }
    }

    function fn(e, t) {
      return function(n) {
        return v(n) ? this[e] : (this[e] = t(n), this.$$compose(), this)
      }
    }

    function dn() {
      var t = "",
        n = !1;
      this.hashPrefix = function(e) {
        return y(e) ? (t = e, this) : t
      }, this.html5Mode = function(e) {
        return y(e) ? (n = e, this) : n
      }, this.$get = ["$rootScope", "$browser", "$sniffer", "$rootElement", function(r, i, o, a) {
        function s(e) {
          r.$broadcast("$locationChangeSuccess", u.absUrl(), e)
        }
        var u, c = i.baseHref(),
          l = i.url();
        if (n) {
          if (!c) throw ri("nobase");
          c = l.substring(0, l.indexOf("/", l.indexOf("//") + 2)) + (c || "/"), o = o.history ? sn : cn
        } else c = on(l), o = un;
        u = new o(c, "#" + t), u.$$parseLinkUrl(l, l);
        var f = /^\s*(javascript|mailto):/i;
        a.on("click", function(t) {
          if (!t.ctrlKey && !t.metaKey && 2 != t.which) {
            for (var n = cr(t.target);
              "a" !== A(n[0]);)
              if (n[0] === a[0] || !(n = n.parent())[0]) return;
            var o = n.prop("href"),
              s = n.attr("href") || n.attr("xlink:href");
            $(o) && "[object SVGAnimatedString]" === o.toString() && (o = Pn(o.animVal).href), f.test(o) || !o || n.attr("target") || t.isDefaultPrevented() || !u.$$parseLinkUrl(o, s) || (t.preventDefault(), u.absUrl() != i.url() && (r.$apply(), e.angular["ff-684208-preventDefault"] = !0))
          }
        }), u.absUrl() != l && i.url(u.absUrl(), !0), i.onUrlChange(function(e) {
          u.absUrl() != e && (r.$evalAsync(function() {
            var t = u.absUrl();
            u.$$parse(e), r.$broadcast("$locationChangeStart", e, t).defaultPrevented ? (u.$$parse(t), i.url(t)) : s(t)
          }), r.$$phase || r.$digest())
        });
        var d = 0;
        return r.$watch(function() {
          var e = i.url(),
            t = u.$$replace;
          return d && e == u.absUrl() || (d++, r.$evalAsync(function() {
            r.$broadcast("$locationChangeStart", u.absUrl(), e).defaultPrevented ? u.$$parse(e) : (i.url(u.absUrl(), t), s(e))
          })), u.$$replace = !1, d
        }), u
      }]
    }

    function hn() {
      var e = !0,
        t = this;
      this.debugEnabled = function(t) {
        return y(t) ? (e = t, this) : e
      }, this.$get = ["$window", function(n) {
        function r(e) {
          return e instanceof Error && (e.stack ? e = e.message && -1 === e.stack.indexOf(e.message) ? "Error: " + e.message + "\n" + e.stack : e.stack : e.sourceURL && (e = e.message + "\n" + e.sourceURL + ":" + e.line)), e
        }

        function i(e) {
          var t = n.console || {},
            i = t[e] || t.log || p;
          e = !1;
          try {
            e = !!i.apply
          } catch (a) {}
          return e ? function() {
            var e = [];
            return o(arguments, function(t) {
              e.push(r(t))
            }), i.apply(t, e)
          } : function(e, t) {
            i(e, null == t ? "" : t)
          }
        }
        return {
          log: i("log"),
          info: i("info"),
          warn: i("warn"),
          error: i("error"),
          debug: function() {
            var n = i("debug");
            return function() {
              e && n.apply(t, arguments)
            }
          }()
        }
      }]
    }

    function pn(e, t) {
      if ("__defineGetter__" === e || "__defineSetter__" === e || "__lookupGetter__" === e || "__lookupSetter__" === e || "__proto__" === e) throw ii("isecfld", t);
      return e
    }

    function mn(e, t) {
      if (e) {
        if (e.constructor === e) throw ii("isecfn", t);
        if (e.window === e) throw ii("isecwindow", t);
        if (e.children && (e.nodeName || e.prop && e.attr && e.find)) throw ii("isecdom", t);
        if (e === Object) throw ii("isecobj", t)
      }
      return e
    }

    function gn(e, t, n, r) {
      mn(e, r), t = t.split(".");
      for (var i, o = 0; 1 < t.length; o++) {
        i = pn(t.shift(), r);
        var a = mn(e[i], r);
        a || (a = {}, e[i] = a), e = a
      }
      return i = pn(t.shift(), r), mn(e[i], r), e[i] = n
    }

    function vn(e, t, r, i, o, a) {
      return pn(e, a), pn(t, a), pn(r, a), pn(i, a), pn(o, a),
        function(a, s) {
          var u = s && s.hasOwnProperty(e) ? s : a;
          return null == u ? u : (u = u[e], t ? null == u ? n : (u = u[t], r ? null == u ? n : (u = u[r], i ? null == u ? n : (u = u[i], o ? null == u ? n : u = u[o] : u) : u) : u) : u)
        }
    }

    function yn(e, t, r) {
      var i = hi[e];
      if (i) return i;
      var a = e.split("."),
        s = a.length;
      if (t.csp) i = 6 > s ? vn(a[0], a[1], a[2], a[3], a[4], r) : function(e, t) {
        var i, o = 0;
        do i = vn(a[o++], a[o++], a[o++], a[o++], a[o++], r)(e, t), t = n, e = i; while (s > o);
        return i
      };
      else {
        var u = "";
        o(a, function(e, t) {
          pn(e, r), u += "if(s == null) return undefined;\ns=" + (t ? "s" : '((l&&l.hasOwnProperty("' + e + '"))?l:s)') + "." + e + ";\n"
        }), u += "return s;", t = new Function("s", "l", u), t.toString = g(u), t.assign = function(t, n) {
          return gn(t, e, n, e)
        }, i = t
      }
      return i.sharedGetter = !0, hi[e] = i
    }

    function $n() {
      var e = Object.create(null),
        t = {
          csp: !1
        };
      this.$get = ["$filter", "$sniffer", function(n, r) {
        function i(e) {
          var t = e;
          return e.sharedGetter && (t = function(t, n) {
            return e(t, n)
          }, t.literal = e.literal, t.constant = e.constant, t.assign = e.assign), t
        }

        function a(e, t, n, r) {
          var i, o;
          return i = e.$watch(function(e) {
            return r(e)
          }, function(e, n, r) {
            o = e, _(t) && t.apply(this, arguments), y(e) && r.$$postDigest(function() {
              y(o) && i()
            })
          }, n)
        }

        function s(e, t, n, r) {
          function i(e) {
            var t = !0;
            return o(e, function(e) {
              y(e) || (t = !1)
            }), t
          }
          var a;
          return a = e.$watch(function(e) {
            return r(e)
          }, function(e, n, r) {
            _(t) && t.call(this, e, n, r), i(e) && r.$$postDigest(function() {
              i(e) && a()
            })
          }, n)
        }

        function u(e, t, n, r) {
          var i;
          return i = e.$watch(function(e) {
            return r(e)
          }, function() {
            _(t) && t.apply(this, arguments), i()
          }, n)
        }

        function c(e, t) {
          if (!t) return e;
          var n = function(n, r) {
            var i = e(n, r),
              o = t(i, n, r);
            return y(i) ? o : i
          };
          return n.$$watchDelegate = e.$$watchDelegate, n
        }
        return t.csp = r.csp,
          function(r, o) {
            var l, f, d;
            switch (typeof r) {
              case "string":
                return d = r = r.trim(), l = e[d], l || (":" === r.charAt(0) && ":" === r.charAt(1) && (f = !0, r = r.substring(2)), l = new fi(t), l = new di(l, n, t).parse(r), l.constant ? l.$$watchDelegate = u : f && (l = i(l), l.$$watchDelegate = l.literal ? s : a), e[d] = l), c(l, o);
              case "function":
                return c(r, o);
              default:
                return c(p, o)
            }
          }
      }]
    }

    function bn() {
      this.$get = ["$rootScope", "$exceptionHandler", function(e, t) {
        return xn(function(t) {
          e.$evalAsync(t)
        }, t)
      }]
    }

    function wn() {
      this.$get = ["$browser", "$exceptionHandler", function(e, t) {
        return xn(function(t) {
          e.defer(t)
        }, t)
      }]
    }

    function xn(e, t) {
      function i(e, t, n) {
        function r(t) {
          return function(n) {
            i || (i = !0, t.call(e, n))
          }
        }
        var i = !1;
        return [r(t), r(n)]
      }

      function a() {
        this.$$state = {
          status: 0
        }
      }

      function s(e, t) {
        return function(n) {
          t.call(e, n)
        }
      }

      function u(r) {
        !r.processScheduled && r.pending && (r.processScheduled = !0, e(function() {
          var e, i, o;
          o = r.pending, r.processScheduled = !1, r.pending = n;
          for (var a = 0, s = o.length; s > a; ++a) {
            i = o[a][0], e = o[a][r.status];
            try {
              _(e) ? i.resolve(e(r.value)) : 1 === r.status ? i.resolve(r.value) : i.reject(r.value)
            } catch (u) {
              i.reject(u), t(u)
            }
          }
        }))
      }

      function c() {
        this.promise = new a, this.resolve = s(this, this.resolve), this.reject = s(this, this.reject), this.notify = s(this, this.notify)
      }
      var l = r("$q", TypeError);
      a.prototype = {
        then: function(e, t, n) {
          var r = new c;
          return this.$$state.pending = this.$$state.pending || [], this.$$state.pending.push([r, e, t, n]), 0 < this.$$state.status && u(this.$$state), r.promise
        },
        "catch": function(e) {
          return this.then(null, e)
        },
        "finally": function(e, t) {
          return this.then(function(t) {
            return d(t, !0, e)
          }, function(t) {
            return d(t, !1, e)
          }, t)
        }
      }, c.prototype = {
        resolve: function(e) {
          this.promise.$$state.status || (e === this.promise ? this.$$reject(l("qcycle", e)) : this.$$resolve(e))
        },
        $$resolve: function(e) {
          var n, r;
          r = i(this, this.$$resolve, this.$$reject);
          try {
            ($(e) || _(e)) && (n = e && e.then), _(n) ? (this.promise.$$state.status = -1, n.call(e, r[0], r[1], this.notify)) : (this.promise.$$state.value = e, this.promise.$$state.status = 1, u(this.promise.$$state))
          } catch (o) {
            r[1](o), t(o)
          }
        },
        reject: function(e) {
          this.promise.$$state.status || this.$$reject(e)
        },
        $$reject: function(e) {
          this.promise.$$state.value = e, this.promise.$$state.status = 2, u(this.promise.$$state)
        },
        notify: function(n) {
          var r = this.promise.$$state.pending;
          0 >= this.promise.$$state.status && r && r.length && e(function() {
            for (var e, i, o = 0, a = r.length; a > o; o++) {
              i = r[o][0], e = r[o][3];
              try {
                i.notify(_(e) ? e(n) : n)
              } catch (s) {
                t(s)
              }
            }
          })
        }
      };
      var f = function(e, t) {
          var n = new c;
          return t ? n.resolve(e) : n.reject(e), n.promise
        },
        d = function(e, t, n) {
          var r = null;
          try {
            _(n) && (r = n())
          } catch (i) {
            return f(i, !1)
          }
          return r && _(r.then) ? r.then(function() {
            return f(e, t)
          }, function(e) {
            return f(e, !1)
          }) : f(e, t)
        },
        h = function(e, t, n, r) {
          var i = new c;
          return i.resolve(e), i.promise.then(t, n, r)
        },
        p = function m(e) {
          if (!_(e)) throw l("norslvr", e);
          if (!(this instanceof m)) return new m(e);
          var t = new c;
          return e(function(e) {
            t.resolve(e)
          }, function(e) {
            t.reject(e)
          }), t.promise
        };
      return p.defer = function() {
        return new c
      }, p.reject = function(e) {
        var t = new c;
        return t.reject(e), t.promise
      }, p.when = h, p.all = function(e) {
        var t = new c,
          n = 0,
          r = _r(e) ? [] : {};
        return o(e, function(e, i) {
          n++, h(e).then(function(e) {
            r.hasOwnProperty(i) || (r[i] = e, --n || t.resolve(r))
          }, function(e) {
            r.hasOwnProperty(i) || t.reject(e)
          })
        }), 0 === n && t.resolve(r), t.promise
      }, p
    }

    function _n() {
      this.$get = ["$window", "$timeout", function(e, t) {
        var n = e.requestAnimationFrame || e.webkitRequestAnimationFrame || e.mozRequestAnimationFrame,
          r = e.cancelAnimationFrame || e.webkitCancelAnimationFrame || e.mozCancelAnimationFrame || e.webkitCancelRequestAnimationFrame,
          i = !!n,
          o = i ? function(e) {
            var t = n(e);
            return function() {
              r(t)
            }
          } : function(e) {
            var n = t(e, 16.66, !1);
            return function() {
              t.cancel(n)
            }
          };
        return o.supported = i, o
      }]
    }

    function kn() {
      var e = 10,
        t = r("$rootScope"),
        n = null,
        a = null;
      this.digestTtl = function(t) {
        return arguments.length && (e = t), e
      }, this.$get = ["$injector", "$exceptionHandler", "$parse", "$browser", function(r, s, u, c) {
        function l() {
          this.$id = ++wr, this.$$phase = this.$parent = this.$$watchers = this.$$nextSibling = this.$$prevSibling = this.$$childHead = this.$$childTail = null, this["this"] = this.$root = this, this.$$destroyed = !1, this.$$asyncQueue = [], this.$$postDigestQueue = [], this.$$listeners = {}, this.$$listenerCount = {}, this.$$isolateBindings = {}, this.$$applyAsyncQueue = []
        }

        function f(e) {
          if (v.$$phase) throw t("inprog", v.$$phase);
          v.$$phase = e
        }

        function d(e, t, n) {
          do e.$$listenerCount[n] -= t, 0 === e.$$listenerCount[n] && delete e.$$listenerCount[n]; while (e = e.$parent)
        }

        function h() {}

        function m() {
          for (var e = v.$$applyAsyncQueue; e.length;) try {
            e.shift()()
          } catch (t) {
            s(t)
          }
          a = null
        }

        function g() {
          null === a && (a = c.defer(function() {
            v.$apply(m)
          }))
        }
        l.prototype = {
          constructor: l,
          $new: function(e) {
            return e ? (e = new l, e.$root = this.$root, e.$$asyncQueue = this.$$asyncQueue, e.$$postDigestQueue = this.$$postDigestQueue) : (this.$$ChildScope || (this.$$ChildScope = function() {
              this.$$watchers = this.$$nextSibling = this.$$childHead = this.$$childTail = null, this.$$listeners = {}, this.$$listenerCount = {}, this.$id = ++wr, this.$$ChildScope = null
            }, this.$$ChildScope.prototype = this), e = new this.$$ChildScope), e["this"] = e, e.$parent = this, e.$$prevSibling = this.$$childTail, this.$$childHead ? this.$$childTail = this.$$childTail.$$nextSibling = e : this.$$childHead = this.$$childTail = e, e
          },
          $watch: function(e, t, r) {
            var i = u(e);
            if (i.$$watchDelegate) return i.$$watchDelegate(this, t, r, i);
            var o = this.$$watchers,
              a = {
                fn: t,
                last: h,
                get: i,
                exp: e,
                eq: !!r
              };
            return n = null, _(t) || (a.fn = p), o || (o = this.$$watchers = []), o.unshift(a),
              function() {
                D(o, a), n = null
              }
          },
          $watchGroup: function(e, t) {
            function n() {
              u = !1, c ? (c = !1, t(i, i, s)) : t(i, r, s)
            }
            var r = Array(e.length),
              i = Array(e.length),
              a = [],
              s = this,
              u = !1,
              c = !0;
            if (!e.length) {
              var l = !0;
              return s.$evalAsync(function() {
                  l && t(i, i, s)
                }),
                function() {
                  l = !1
                }
            }
            return 1 === e.length ? this.$watch(e[0], function(e, n, o) {
              i[0] = e, r[0] = n, t(i, e === n ? i : r, o)
            }) : (o(e, function(e, t) {
              var o = s.$watch(e, function(e, o) {
                i[t] = e, r[t] = o, u || (u = !0, s.$evalAsync(n))
              });
              a.push(o)
            }), function() {
              for (; a.length;) a.shift()()
            })
          },
          $watchCollection: function(e, t) {
            var n, r, o, a = this,
              s = 1 < t.length,
              c = 0,
              l = u(e, function(e) {
                n = e;
                var t, o, a, s;
                if ($(n))
                  if (i(n))
                    for (r !== f && (r = f, p = r.length = 0, c++), e = n.length, p !== e && (c++, r.length = p = e), t = 0; e > t; t++) s = r[t], a = n[t], o = s !== s && a !== a, o || s === a || (c++, r[t] = a);
                  else {
                    r !== d && (r = d = {}, p = 0, c++), e = 0;
                    for (t in n) n.hasOwnProperty(t) && (e++, a = n[t], s = r[t], t in r ? (o = s !== s && a !== a, o || s === a || (c++, r[t] = a)) : (p++, r[t] = a, c++));
                    if (p > e)
                      for (t in c++, r) n.hasOwnProperty(t) || (p--, delete r[t])
                  } else r !== n && (r = n, c++);
                return c
              }),
              f = [],
              d = {},
              h = !0,
              p = 0;
            return this.$watch(l, function() {
              if (h ? (h = !1, t(n, n, a)) : t(n, o, a), s)
                if ($(n))
                  if (i(n)) {
                    o = Array(n.length);
                    for (var e = 0; e < n.length; e++) o[e] = n[e]
                  } else
                    for (e in o = {}, n) pr.call(n, e) && (o[e] = n[e]);
              else o = n
            })
          },
          $digest: function() {
            var r, i, o, u, l, d, p, g, y, $, b = this.$$asyncQueue,
              w = this.$$postDigestQueue,
              x = e,
              k = [];
            f("$digest"), c.$$checkUrlChange(), this === v && null !== a && (c.defer.cancel(a), m()), n = null;
            do {
              for (d = !1, p = this; b.length;) {
                try {
                  $ = b.shift(), $.scope.$eval($.expression)
                } catch (S) {
                  s(S)
                }
                n = null
              }
              e: do {
                if (u = p.$$watchers)
                  for (l = u.length; l--;) try {
                    if (r = u[l])
                      if ((i = r.get(p)) === (o = r.last) || (r.eq ? P(i, o) : "number" == typeof i && "number" == typeof o && isNaN(i) && isNaN(o))) {
                        if (r === n) {
                          d = !1;
                          break e
                        }
                      } else d = !0, n = r, r.last = r.eq ? O(i, null) : i, r.fn(i, o === h ? i : o, p), 5 > x && (g = 4 - x, k[g] || (k[g] = []), y = _(r.exp) ? "fn: " + (r.exp.name || r.exp.toString()) : r.exp, y += "; newVal: " + q(i) + "; oldVal: " + q(o), k[g].push(y))
                  } catch (C) {
                    s(C)
                  }
                if (!(u = p.$$childHead || p !== this && p.$$nextSibling))
                  for (; p !== this && !(u = p.$$nextSibling);) p = p.$parent
              } while (p = u);
              if ((d || b.length) && !x--) throw v.$$phase = null, t("infdig", e, q(k))
            } while (d || b.length);
            for (v.$$phase = null; w.length;) try {
              w.shift()()
            } catch (T) {
              s(T)
            }
          },
          $destroy: function() {
            if (!this.$$destroyed) {
              var e = this.$parent;
              if (this.$broadcast("$destroy"), this.$$destroyed = !0, this !== v) {
                for (var t in this.$$listenerCount) d(this, this.$$listenerCount[t], t);
                e.$$childHead == this && (e.$$childHead = this.$$nextSibling), e.$$childTail == this && (e.$$childTail = this.$$prevSibling), this.$$prevSibling && (this.$$prevSibling.$$nextSibling = this.$$nextSibling), this.$$nextSibling && (this.$$nextSibling.$$prevSibling = this.$$prevSibling), this.$parent = this.$$nextSibling = this.$$prevSibling = this.$$childHead = this.$$childTail = this.$root = null, this.$$listeners = {}, this.$$watchers = this.$$asyncQueue = this.$$postDigestQueue = [], this.$destroy = this.$digest = this.$apply = p, this.$on = this.$watch = this.$watchGroup = function() {
                  return p
                }
              }
            }
          },
          $eval: function(e, t) {
            return u(e)(this, t)
          },
          $evalAsync: function(e) {
            v.$$phase || v.$$asyncQueue.length || c.defer(function() {
              v.$$asyncQueue.length && v.$digest()
            }), this.$$asyncQueue.push({
              scope: this,
              expression: e
            })
          },
          $$postDigest: function(e) {
            this.$$postDigestQueue.push(e)
          },
          $apply: function(e) {
            try {
              return f("$apply"), this.$eval(e)
            } catch (t) {
              s(t)
            } finally {
              v.$$phase = null;
              try {
                v.$digest()
              } catch (n) {
                throw s(n), n
              }
            }
          },
          $applyAsync: function(e) {
            function t() {
              n.$eval(e)
            }
            var n = this;
            e && v.$$applyAsyncQueue.push(t), g()
          },
          $on: function(e, t) {
            var n = this.$$listeners[e];
            n || (this.$$listeners[e] = n = []), n.push(t);
            var r = this;
            do r.$$listenerCount[e] || (r.$$listenerCount[e] = 0), r.$$listenerCount[e]++; while (r = r.$parent);
            var i = this;
            return function() {
              n[n.indexOf(t)] = null, d(i, 1, e)
            }
          },
          $emit: function(e) {
            var t, n, r, i = [],
              o = this,
              a = !1,
              u = {
                name: e,
                targetScope: o,
                stopPropagation: function() {
                  a = !0
                },
                preventDefault: function() {
                  u.defaultPrevented = !0
                },
                defaultPrevented: !1
              },
              c = j([u], arguments, 1);
            do {
              for (t = o.$$listeners[e] || i, u.currentScope = o, n = 0, r = t.length; r > n; n++)
                if (t[n]) try {
                  t[n].apply(null, c)
                } catch (l) {
                  s(l)
                } else t.splice(n, 1), n--, r--;
              if (a) return u.currentScope = null, u;
              o = o.$parent
            } while (o);
            return u.currentScope = null, u
          },
          $broadcast: function(e) {
            var t = this,
              n = this,
              r = {
                name: e,
                targetScope: this,
                preventDefault: function() {
                  r.defaultPrevented = !0
                },
                defaultPrevented: !1
              };
            if (!this.$$listenerCount[e]) return r;
            for (var i, o, a = j([r], arguments, 1); t = n;) {
              for (r.currentScope = t, n = t.$$listeners[e] || [], i = 0, o = n.length; o > i; i++)
                if (n[i]) try {
                  n[i].apply(null, a)
                } catch (u) {
                  s(u)
                } else n.splice(i, 1), i--, o--;
              if (!(n = t.$$listenerCount[e] && t.$$childHead || t !== this && t.$$nextSibling))
                for (; t !== this && !(n = t.$$nextSibling);) t = t.$parent
            }
            return r.currentScope = null, r
          }
        };
        var v = new l;
        return v
      }]
    }

    function Sn() {
      var e = /^\s*(https?|ftp|mailto|tel|file):/,
        t = /^\s*((https?|ftp|file|blob):|data:image\/)/;
      this.aHrefSanitizationWhitelist = function(t) {
        return y(t) ? (e = t, this) : e
      }, this.imgSrcSanitizationWhitelist = function(e) {
        return y(e) ? (t = e, this) : t
      }, this.$get = function() {
        return function(n, r) {
          var i, o = r ? t : e;
          return ur && !(ur >= 8) || (i = Pn(n).href, "" === i || i.match(o)) ? n : "unsafe:" + i
        }
      }
    }

    function Cn(e) {
      if ("self" === e) return e;
      if (b(e)) {
        if (-1 < e.indexOf("***")) throw pi("iwcard", e);
        return e = e.replace(/([-()\[\]{}+?*.$\^|,:#<!\\])/g, "\\$1").replace(/\x08/g, "\\x08").replace("\\*\\*", ".*").replace("\\*", "[^:/.?&;]*"), new RegExp("^" + e + "$")
      }
      if (k(e)) return new RegExp("^" + e.source + "$");
      throw pi("imatcher")
    }

    function Tn(e) {
      var t = [];
      return y(e) && o(e, function(e) {
        t.push(Cn(e))
      }), t
    }

    function Mn() {
      this.SCE_CONTEXTS = mi;
      var e = ["self"],
        t = [];
      this.resourceUrlWhitelist = function(t) {
        return arguments.length && (e = Tn(t)), e
      }, this.resourceUrlBlacklist = function(e) {
        return arguments.length && (t = Tn(e)), t
      }, this.$get = ["$injector", function(r) {
        function i(e, t) {
          return "self" === e ? jn(t) : !!e.exec(t.href)
        }

        function o(e) {
          var t = function(e) {
            this.$$unwrapTrustedValue = function() {
              return e
            }
          };
          return e && (t.prototype = new e), t.prototype.valueOf = function() {
            return this.$$unwrapTrustedValue()
          }, t.prototype.toString = function() {
            return this.$$unwrapTrustedValue().toString()
          }, t
        }
        var a = function() {
          throw pi("unsafe")
        };
        r.has("$sanitize") && (a = r.get("$sanitize"));
        var s = o(),
          u = {};
        return u[mi.HTML] = o(s), u[mi.CSS] = o(s), u[mi.URL] = o(s), u[mi.JS] = o(s), u[mi.RESOURCE_URL] = o(u[mi.URL]), {
          trustAs: function(e, t) {
            var r = u.hasOwnProperty(e) ? u[e] : null;
            if (!r) throw pi("icontext", e, t);
            if (null === t || t === n || "" === t) return t;
            if ("string" != typeof t) throw pi("itype", e);
            return new r(t)
          },
          getTrusted: function(r, o) {
            if (null === o || o === n || "" === o) return o;
            var s = u.hasOwnProperty(r) ? u[r] : null;
            if (s && o instanceof s) return o.$$unwrapTrustedValue();
            if (r === mi.RESOURCE_URL) {
              var c, l, s = Pn(o.toString()),
                f = !1;
              for (c = 0, l = e.length; l > c; c++)
                if (i(e[c], s)) {
                  f = !0;
                  break
                }
              if (f)
                for (c = 0, l = t.length; l > c; c++)
                  if (i(t[c], s)) {
                    f = !1;
                    break
                  }
              if (f) return o;
              throw pi("insecurl", o.toString())
            }
            if (r === mi.HTML) return a(o);
            throw pi("unsafe")
          },
          valueOf: function(e) {
            return e instanceof s ? e.$$unwrapTrustedValue() : e
          }
        }
      }]
    }

    function An() {
      var e = !0;
      this.enabled = function(t) {
        return arguments.length && (e = !!t), e
      }, this.$get = ["$parse", "$sniffer", "$sceDelegate", function(t, n, r) {
        if (e && n.msie && 8 > n.msieDocumentMode) throw pi("iequirks");
        var i = N(mi);
        i.isEnabled = function() {
          return e
        }, i.trustAs = r.trustAs, i.getTrusted = r.getTrusted, i.valueOf = r.valueOf, e || (i.trustAs = i.getTrusted = function(e, t) {
          return t
        }, i.valueOf = m), i.parseAs = function(e, n) {
          var r = t(n);
          return r.literal && r.constant ? r : t(n, function(t) {
            return i.getTrusted(e, t)
          })
        };
        var a = i.parseAs,
          s = i.getTrusted,
          u = i.trustAs;
        return o(mi, function(e, t) {
          var n = hr(t);
          i[at("parse_as_" + n)] = function(t) {
            return a(e, t)
          }, i[at("get_trusted_" + n)] = function(t) {
            return s(e, t)
          }, i[at("trust_as_" + n)] = function(t) {
            return u(e, t)
          }
        }), i
      }]
    }

    function En() {
      this.$get = ["$window", "$document", function(e, t) {
        var n, r = {},
          i = d((/android (\d+)/.exec(hr((e.navigator || {}).userAgent)) || [])[1]),
          o = /Boxee/i.test((e.navigator || {}).userAgent),
          a = t[0] || {},
          s = a.documentMode,
          u = /^(Moz|webkit|O|ms)(?=[A-Z])/,
          c = a.body && a.body.style,
          l = !1,
          f = !1;
        if (c) {
          for (var h in c)
            if (l = u.exec(h)) {
              n = l[0], n = n.substr(0, 1).toUpperCase() + n.substr(1);
              break
            }
          n || (n = "WebkitOpacity" in c && "webkit"), l = !!("transition" in c || n + "Transition" in c), f = !!("animation" in c || n + "Animation" in c), !i || l && f || (l = b(a.body.style.webkitTransition), f = b(a.body.style.webkitAnimation))
        }
        return {
          history: !(!e.history || !e.history.pushState || 4 > i || o),
          hashchange: "onhashchange" in e && (!s || s > 7),
          hasEvent: function(e) {
            if ("input" == e && 9 == ur) return !1;
            if (v(r[e])) {
              var t = a.createElement("div");
              r[e] = "on" + e in t
            }
            return r[e]
          },
          csp: Sr(),
          vendorPrefix: n,
          transitions: l,
          animations: f,
          android: i,
          msie: ur,
          msieDocumentMode: s
        }
      }]
    }

    function Dn() {
      this.$get = ["$templateCache", "$http", "$q", function(e, t, n) {
        function r(i, o) {
          function a() {
            if (s.totalPendingRequests--, !o) throw Kr("tpload", i);
            return n.reject()
          }
          var s = r;
          return s.totalPendingRequests++, t.get(i, {
            cache: e
          }).then(function(t) {
            return t = t.data, t && 0 !== t.length ? (s.totalPendingRequests--, e.put(i, t), t) : a()
          }, a)
        }
        return r.totalPendingRequests = 0, r
      }]
    }

    function On() {
      this.$get = ["$rootScope", "$browser", "$location", function(e, t, n) {
        return {
          findBindings: function(e, t, n) {
            e = e.getElementsByClassName("ng-binding");
            var r = [];
            return o(e, function(e) {
              var i = br.element(e).data("$binding");
              i && o(i, function(i) {
                n ? new RegExp("(^|\\s)" + t + "(\\s|\\||$)").test(i) && r.push(e) : -1 != i.indexOf(t) && r.push(e)
              })
            }), r
          },
          findModels: function(e, t, n) {
            for (var r = ["ng-", "data-ng-", "ng\\:"], i = 0; i < r.length; ++i) {
              var o = e.querySelectorAll("[" + r[i] + "model" + (n ? "=" : "*=") + '"' + t + '"]');
              if (o.length) return o
            }
          },
          getLocation: function() {
            return n.url()
          },
          setLocation: function(t) {
            t !== n.url() && (n.url(t), e.$digest())
          },
          whenStable: function(e) {
            t.notifyWhenNoOutstandingRequests(e)
          }
        }
      }]
    }

    function Nn() {
      this.$get = ["$rootScope", "$browser", "$q", "$$q", "$exceptionHandler", function(e, t, n, r, i) {
        function o(o, s, u) {
          var c = y(u) && !u,
            l = (c ? r : n).defer(),
            f = l.promise;
          return s = t.defer(function() {
            try {
              l.resolve(o())
            } catch (t) {
              l.reject(t), i(t)
            } finally {
              delete a[f.$$timeoutId]
            }
            c || e.$apply()
          }, s), f.$$timeoutId = s, a[s] = l, f
        }
        var a = {};
        return o.cancel = function(e) {
          return e && e.$$timeoutId in a ? (a[e.$$timeoutId].reject("canceled"), delete a[e.$$timeoutId], t.defer.cancel(e.$$timeoutId)) : !1
        }, o
      }]
    }

    function Pn(e) {
      var t = e;
      return ur && (gi.setAttribute("href", t), t = gi.href), gi.setAttribute("href", t), {
        href: gi.href,
        protocol: gi.protocol ? gi.protocol.replace(/:$/, "") : "",
        host: gi.host,
        search: gi.search ? gi.search.replace(/^\?/, "") : "",
        hash: gi.hash ? gi.hash.replace(/^#/, "") : "",
        hostname: gi.hostname,
        port: gi.port,
        pathname: "/" === gi.pathname.charAt(0) ? gi.pathname : "/" + gi.pathname
      }
    }

    function jn(e) {
      return e = b(e) ? Pn(e) : e, e.protocol === vi.protocol && e.host === vi.host
    }

    function Fn() {
      this.$get = g(e)
    }

    function In(e) {
      function t(n, r) {
        if ($(n)) {
          var i = {};
          return o(n, function(e, n) {
            i[n] = t(n, e)
          }), i
        }
        return e.factory(n + "Filter", r)
      }
      this.register = t, this.$get = ["$injector", function(e) {
        return function(t) {
          return e.get(t + "Filter")
        }
      }], t("currency", Rn), t("date", Wn), t("filter", qn), t("json", Gn), t("limitTo", Qn), t("lowercase", xi), t("number", Ln), t("orderBy", Xn), t("uppercase", _i)
    }

    function qn() {
      return function(e, t, n) {
        if (!_r(e)) return e;
        var r = typeof n,
          i = [];
        i.check = function(e, t) {
          for (var n = 0; n < i.length; n++)
            if (!i[n](e, t)) return !1;
          return !0
        }, "function" !== r && (n = "boolean" === r && n ? function(e, t) {
          return br.equals(e, t)
        } : function(e, t) {
          if (e && t && "object" == typeof e && "object" == typeof t) {
            for (var r in e)
              if ("$" !== r.charAt(0) && pr.call(e, r) && n(e[r], t[r])) return !0;
            return !1
          }
          return t = ("" + t).toLowerCase(), -1 < ("" + e).toLowerCase().indexOf(t)
        });
        var o = function(e, t) {
          if ("string" == typeof t && "!" === t.charAt(0)) return !o(e, t.substr(1));
          switch (typeof e) {
            case "boolean":
            case "number":
            case "string":
              return n(e, t);
            case "object":
              switch (typeof t) {
                case "object":
                  return n(e, t);
                default:
                  for (var r in e)
                    if ("$" !== r.charAt(0) && o(e[r], t)) return !0
              }
              return !1;
            case "array":
              for (r = 0; r < e.length; r++)
                if (o(e[r], t)) return !0;
              return !1;
            default:
              return !1
          }
        };
        switch (typeof t) {
          case "boolean":
          case "number":
          case "string":
            t = {
              $: t
            };
          case "object":
            for (var a in t)(function(e) {
              "undefined" != typeof t[e] && i.push(function(n) {
                return o("$" == e ? n : n && n[e], t[e])
              })
            })(a);
            break;
          case "function":
            i.push(t);
            break;
          default:
            return e
        }
        for (r = [], a = 0; a < e.length; a++) {
          var s = e[a];
          i.check(s, a) && r.push(s)
        }
        return r
      }
    }

    function Rn(e) {
      var t = e.NUMBER_FORMATS;
      return function(e, n) {
        return v(n) && (n = t.CURRENCY_SYM), null == e ? e : Hn(e, t.PATTERNS[1], t.GROUP_SEP, t.DECIMAL_SEP, 2).replace(/\u00A4/g, n)
      }
    }

    function Ln(e) {
      var t = e.NUMBER_FORMATS;
      return function(e, n) {
        return null == e ? e : Hn(e, t.PATTERNS[0], t.GROUP_SEP, t.DECIMAL_SEP, n)
      }
    }

    function Hn(e, t, n, r, i) {
      if (!isFinite(e) || $(e)) return "";
      var o = 0 > e;
      e = Math.abs(e);
      var a = e + "",
        s = "",
        u = [],
        c = !1;
      if (-1 !== a.indexOf("e")) {
        var l = a.match(/([\d\.]+)e(-?)(\d+)/);
        l && "-" == l[2] && l[3] > i + 1 ? (a = "0", e = 0) : (s = a, c = !0)
      }
      if (c) i > 0 && e > -1 && 1 > e && (s = e.toFixed(i));
      else {
        a = (a.split(yi)[1] || "").length, v(i) && (i = Math.min(Math.max(t.minFrac, a), t.maxFrac)), e = +(Math.round(+(e.toString() + "e" + i)).toString() + "e" + -i), 0 === e && (o = !1), e = ("" + e).split(yi), a = e[0], e = e[1] || "";
        var l = 0,
          f = t.lgSize,
          d = t.gSize;
        if (a.length >= f + d)
          for (l = a.length - f, c = 0; l > c; c++) 0 === (l - c) % d && 0 !== c && (s += n), s += a.charAt(c);
        for (c = l; c < a.length; c++) 0 === (a.length - c) % f && 0 !== c && (s += n), s += a.charAt(c);
        for (; e.length < i;) e += "0";
        i && "0" !== i && (s += r + e.substr(0, i))
      }
      return u.push(o ? t.negPre : t.posPre), u.push(s), u.push(o ? t.negSuf : t.posSuf), u.join("")
    }

    function Un(e, t, n) {
      var r = "";
      for (0 > e && (r = "-", e = -e), e = "" + e; e.length < t;) e = "0" + e;
      return n && (e = e.substr(e.length - t)), r + e
    }

    function Yn(e, t, n, r) {
      return n = n || 0,
        function(i) {
          return i = i["get" + e](), (n > 0 || i > -n) && (i += n), 0 === i && -12 == n && (i = 12), Un(i, t, r)
        }
    }

    function zn(e, t) {
      return function(n, r) {
        var i = n["get" + e](),
          o = mr(t ? "SHORT" + e : e);
        return r[o][i]
      }
    }

    function Bn(e) {
      var t = new Date(e, 0, 1).getDay();
      return new Date(e, 0, (4 >= t ? 5 : 12) - t)
    }

    function Vn(e) {
      return function(t) {
        var n = Bn(t.getFullYear());
        return t = +new Date(t.getFullYear(), t.getMonth(), t.getDate() + (4 - t.getDay())) - +n, t = 1 + Math.round(t / 6048e5), Un(t, e)
      }
    }

    function Wn(e) {
      function t(e) {
        var t;
        if (t = e.match(n)) {
          e = new Date(0);
          var r = 0,
            i = 0,
            o = t[8] ? e.setUTCFullYear : e.setFullYear,
            a = t[8] ? e.setUTCHours : e.setHours;
          t[9] && (r = d(t[9] + t[10]), i = d(t[9] + t[11])), o.call(e, d(t[1]), d(t[2]) - 1, d(t[3])), r = d(t[4] || 0) - r, i = d(t[5] || 0) - i, o = d(t[6] || 0), t = Math.round(1e3 * parseFloat("0." + (t[7] || 0))), a.call(e, r, i, o, t)
        }
        return e
      }
      var n = /^(\d{4})-?(\d\d)-?(\d\d)(?:T(\d\d)(?::?(\d\d)(?::?(\d\d)(?:\.(\d+))?)?)?(Z|([+-])(\d\d):?(\d\d))?)?$/;
      return function(n, r, i) {
        var a, s, u = "",
          c = [];
        if (r = r || "mediumDate", r = e.DATETIME_FORMATS[r] || r, b(n) && (n = wi.test(n) ? d(n) : t(n)), w(n) && (n = new Date(n)), !x(n)) return n;
        for (; r;)(s = bi.exec(r)) ? (c = j(c, s, 1), r = c.pop()) : (c.push(r), r = null);
        return i && "UTC" === i && (n = new Date(n.getTime()), n.setMinutes(n.getMinutes() + n.getTimezoneOffset())), o(c, function(t) {
          a = $i[t], u += a ? a(n, e.DATETIME_FORMATS) : t.replace(/(^'|'$)/g, "").replace(/''/g, "'")
        }), u
      }
    }

    function Gn() {
      return function(e) {
        return q(e, !0)
      }
    }

    function Qn() {
      return function(e, t) {
        if (!_r(e) && !b(e)) return e;
        if (t = 1 / 0 === Math.abs(Number(t)) ? Number(t) : d(t), b(e)) return t ? t >= 0 ? e.slice(0, t) : e.slice(t, e.length) : "";
        var n, r, i = [];
        for (t > e.length ? t = e.length : t < -e.length && (t = -e.length), t > 0 ? (n = 0, r = t) : (n = e.length + t, r = e.length); r > n; n++) i.push(e[n]);
        return i
      }
    }

    function Xn(e) {
      return function(t, n, r) {
        function o(e, t) {
          return t ? function(t, n) {
            return e(n, t)
          } : e
        }

        function a(e, t) {
          var n = typeof e,
            r = typeof t;
          return n == r ? (x(e) && x(t) && (e = e.valueOf(), t = t.valueOf()), "string" == n && (e = e.toLowerCase(), t = t.toLowerCase()), e === t ? 0 : t > e ? -1 : 1) : r > n ? -1 : 1
        }
        if (!i(t) || !n) return t;
        n = _r(n) ? n : [n], n = E(n, function(t) {
          var n = !1,
            r = t || m;
          if (b(t) && (("+" == t.charAt(0) || "-" == t.charAt(0)) && (n = "-" == t.charAt(0), t = t.substring(1)), r = e(t), r.constant)) {
            var i = r();
            return o(function(e, t) {
              return a(e[i], t[i])
            }, n)
          }
          return o(function(e, t) {
            return a(r(e), r(t))
          }, n)
        });
        for (var s = [], u = 0; u < t.length; u++) s.push(t[u]);
        return s.sort(o(function(e, t) {
          for (var r = 0; r < n.length; r++) {
            var i = n[r](e, t);
            if (0 !== i) return i
          }
          return 0
        }, r))
      }
    }

    function Zn(e) {
      return _(e) && (e = {
        link: e
      }), e.restrict = e.restrict || "AC", g(e)
    }

    function Kn(e, t, r, i) {
      var a = this,
        s = e.parent().controller("form") || Ci,
        u = [];
      a.$error = {}, a.$$success = {}, a.$pending = n, a.$name = t.name || t.ngForm, a.$dirty = !1, a.$pristine = !0, a.$valid = !0, a.$invalid = !1, a.$submitted = !1, s.$addControl(a), e.addClass(Bi), a.$rollbackViewValue = function() {
        o(u, function(e) {
          e.$rollbackViewValue()
        })
      }, a.$commitViewValue = function() {
        o(u, function(e) {
          e.$commitViewValue()
        })
      }, a.$addControl = function(e) {
        tt(e.$name, "input"), u.push(e), e.$name && (a[e.$name] = e)
      }, a.$removeControl = function(e) {
        e.$name && a[e.$name] === e && delete a[e.$name], o(a.$pending, function(t, n) {
          a.$setValidity(n, null, e)
        }), o(a.$error, function(t, n) {
          a.$setValidity(n, null, e)
        }), D(u, e)
      }, or({
        ctrl: this,
        $element: e,
        set: function(e, t, n) {
          var r = e[t];
          r ? -1 === r.indexOf(n) && r.push(n) : e[t] = [n]
        },
        unset: function(e, t, n) {
          var r = e[t];
          r && (D(r, n), 0 === r.length && delete e[t])
        },
        parentForm: s,
        $animate: i
      }), a.$setDirty = function() {
        i.removeClass(e, Bi), i.addClass(e, Vi), a.$dirty = !0, a.$pristine = !1, s.$setDirty()
      }, a.$setPristine = function() {
        i.setClass(e, Bi, Vi + " ng-submitted"), a.$dirty = !1, a.$pristine = !0, a.$submitted = !1, o(u, function(e) {
          e.$setPristine()
        })
      }, a.$setSubmitted = function() {
        i.addClass(e, "ng-submitted"), a.$submitted = !0, s.$setSubmitted()
      }
    }

    function Jn(e) {
      e.$formatters.push(function(t) {
        return e.$isEmpty(t) ? t : t.toString()
      })
    }

    function er(e, t, n, r, i, o) {
      t.prop("validity");
      var a = t[0].placeholder,
        s = {},
        u = hr(t[0].type);
      if (!i.android) {
        var c = !1;
        t.on("compositionstart", function() {
          c = !0
        }), t.on("compositionend", function() {
          c = !1, l()
        })
      }
      var l = function(e) {
        if (!c) {
          var i = t.val(),
            o = e && e.type;
          ur && "input" === (e || s).type && t[0].placeholder !== a ? a = t[0].placeholder : ("password" === u || n.ngTrim && "false" === n.ngTrim || (i = kr(i)), (r.$viewValue !== i || "" === i && r.$$hasNativeValidators) && r.$setViewValue(i, o))
        }
      };
      if (i.hasEvent("input")) t.on("input", l);
      else {
        var f, d = function(e) {
          f || (f = o.defer(function() {
            l(e), f = null
          }))
        };
        t.on("keydown", function(e) {
          var t = e.keyCode;
          91 === t || t > 15 && 19 > t || t >= 37 && 40 >= t || d(e)
        }), i.hasEvent("paste") && t.on("paste cut", d)
      }
      t.on("change", l), r.$render = function() {
        t.val(r.$isEmpty(r.$viewValue) ? "" : r.$viewValue)
      }
    }

    function tr(e, t) {
      return function(n) {
        var r;
        if (x(n)) return n;
        if (b(n)) {
          if ('"' == n.charAt(0) && '"' == n.charAt(n.length - 1) && (n = n.substring(1, n.length - 1)), Ei.test(n)) return new Date(n);
          if (e.lastIndex = 0, n = e.exec(n)) return n.shift(), r = {
            yyyy: 1970,
            MM: 1,
            dd: 1,
            HH: 0,
            mm: 0,
            ss: 0
          }, o(n, function(e, n) {
            n < t.length && (r[t[n]] = +e)
          }), new Date(r.yyyy, r.MM - 1, r.dd, r.HH, r.mm, r.ss || 0)
        }
        return 0 / 0
      }
    }

    function nr(e, t, r, i) {
      return function(o, a, s, u, c, l, f) {
        function d(e) {
          return y(e) ? x(e) ? e : r(e) : n
        }
        rr(o, a, s, u), er(o, a, s, u, c, l);
        var h = u && u.$options && u.$options.timezone;
        if (u.$$parserName = e, u.$parsers.push(function(e) {
            return u.$isEmpty(e) ? null : t.test(e) ? (e = r(e), "UTC" === h && e.setMinutes(e.getMinutes() - e.getTimezoneOffset()), e) : n
          }), u.$formatters.push(function(e) {
            return x(e) ? f("date")(e, i, h) : ""
          }), y(s.min) || s.ngMin) {
          var p;
          u.$validators.min = function(e) {
            return u.$isEmpty(e) || v(p) || r(e) >= p
          }, s.$observe("min", function(e) {
            p = d(e), u.$validate()
          })
        }
        if (y(s.max) || s.ngMax) {
          var m;
          u.$validators.max = function(e) {
            return u.$isEmpty(e) || v(m) || r(e) <= m
          }, s.$observe("max", function(e) {
            m = d(e), u.$validate()
          })
        }
      }
    }

    function rr(e, t, r, i) {
      (i.$$hasNativeValidators = $(t[0].validity)) && i.$parsers.push(function(e) {
        var r = t.prop("validity") || {};
        return r.badInput && !r.typeMismatch ? n : e
      })
    }

    function ir(e, t, n, i, o) {
      if (y(i)) {
        if (e = e(i), !e.constant) throw r("ngModel")("constexpr", n, i);
        return e(t)
      }
      return o
    }

    function or(e) {
      function t(e, t) {
        t && !a[e] ? (l.addClass(o, e), a[e] = !0) : !t && a[e] && (l.removeClass(o, e), a[e] = !1)
      }

      function r(e, n) {
        e = e ? "-" + Z(e, "-") : "", t(Yi + e, !0 === n), t(zi + e, !1 === n)
      }
      var i = e.ctrl,
        o = e.$element,
        a = {},
        s = e.set,
        u = e.unset,
        c = e.parentForm,
        l = e.$animate;
      i.$setValidity = function(e, o, a) {
        o === n ? (i.$pending || (i.$pending = {}), s(i.$pending, e, a)) : (i.$pending && u(i.$pending, e, a), ar(i.$pending) && (i.$pending = n)), "boolean" != typeof o ? (u(i.$error, e, a), u(i.$$success, e, a)) : o ? (u(i.$error, e, a), s(i.$$success, e, a)) : (s(i.$error, e, a), u(i.$$success, e, a)), i.$pending ? (t(Wi, !0), i.$valid = i.$invalid = n, r("", null)) : (t(Wi, !1), i.$valid = ar(i.$error), i.$invalid = !i.$valid, r("", i.$valid)), o = i.$pending && i.$pending[e] ? n : i.$error[e] ? !1 : i.$$success[e] ? !0 : null, r(e, o), c.$setValidity(e, o, i)
      }, r("", !0)
    }

    function ar(e) {
      if (e)
        for (var t in e) return !1;
      return !0
    }

    function sr(e, t) {
      return e = "ngClass" + e, ["$animate", function(n) {
        function r(e, t) {
          var n = [],
            r = 0;
          e: for (; r < e.length; r++) {
            for (var i = e[r], o = 0; o < t.length; o++)
              if (i == t[o]) continue e;
            n.push(i)
          }
          return n
        }

        function i(e) {
          if (!_r(e)) {
            if (b(e)) return e.split(" ");
            if ($(e)) {
              var t = [];
              return o(e, function(e, n) {
                e && (t = t.concat(n.split(" ")))
              }), t
            }
          }
          return e
        }
        return {
          restrict: "AC",
          link: function(a, s, u) {
            function c(e, t) {
              var n = s.data("$classCounts") || {},
                r = [];
              return o(e, function(e) {
                (t > 0 || n[e]) && (n[e] = (n[e] || 0) + t, n[e] === +(t > 0) && r.push(e))
              }), s.data("$classCounts", n), r.join(" ")
            }

            function l(e) {
              if (!0 === t || a.$index % 2 === t) {
                var o = i(e || []);
                if (f) {
                  if (!P(e, f)) {
                    var l = i(f),
                      d = r(o, l),
                      o = r(l, o),
                      d = c(d, 1),
                      o = c(o, -1);
                    d && d.length && n.addClass(s, d), o && o.length && n.removeClass(s, o)
                  }
                } else {
                  var d = c(o, 1);
                  u.$addClass(d)
                }
              }
              f = N(e)
            }
            var f;
            a.$watch(u[e], l, !0), u.$observe("class", function() {
              l(a.$eval(u[e]))
            }), "ngClass" !== e && a.$watch("$index", function(n, r) {
              var o = 1 & n;
              if (o !== (1 & r)) {
                var s = i(a.$eval(u[e]));
                o === t ? (o = c(s, 1), u.$addClass(o)) : (o = c(s, -1), u.$removeClass(o))
              }
            })
          }
        }
      }]
    }
    var ur, cr, lr, fr, dr = /^\/(.+)\/([a-z]*)$/,
      hr = function(e) {
        return b(e) ? e.toLowerCase() : e
      },
      pr = Object.prototype.hasOwnProperty,
      mr = function(e) {
        return b(e) ? e.toUpperCase() : e
      },
      gr = [].slice,
      vr = [].push,
      yr = Object.prototype.toString,
      $r = r("ng"),
      br = e.angular || (e.angular = {}),
      wr = 0;
    ur = d((/msie (\d+)/.exec(hr(navigator.userAgent)) || [])[1]), isNaN(ur) && (ur = d((/trident\/.*; rv:(\d+)/.exec(hr(navigator.userAgent)) || [])[1])), p.$inject = [], m.$inject = [];
    var xr, _r = Array.isArray,
      kr = function(e) {
        return b(e) ? e.trim() : e
      },
      Sr = function() {
        if (y(Sr.isActive_)) return Sr.isActive_;
        var e = !(!t.querySelector("[ng-csp]") && !t.querySelector("[data-ng-csp]"));
        if (!e) try {
          new Function("")
        } catch (n) {
          e = !0
        }
        return Sr.isActive_ = e
      },
      Cr = ["ng-", "data-ng-", "ng:", "x-ng-"],
      Tr = /[A-Z]/g,
      Mr = !1,
      Ar = {
        full: "1.3.0-rc.1",
        major: 1,
        minor: 3,
        dot: 0,
        codeName: "backyard-atomicity"
      };
    ct.expando = "ng339";
    var Er = ct.cache = {},
      Dr = 1;
    ct._data = function(e) {
      return this.cache[e[this.expando]] || {}
    };
    var Or = /([\:\-\_]+(.))/g,
      Nr = /^moz([A-Z])/,
      Pr = {
        mouseleave: "mouseout",
        mouseenter: "mouseover"
      },
      jr = r("jqLite"),
      Fr = /^<(\w+)\s*\/?>(?:<\/\1>|)$/,
      Ir = /<|&#?\w+;/,
      qr = /<([\w:]+)/,
      Rr = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi,
      Lr = {
        option: [1, '<select multiple="multiple">', "</select>"],
        thead: [1, "<table>", "</table>"],
        col: [2, "<table><colgroup>", "</colgroup></table>"],
        tr: [2, "<table><tbody>", "</tbody></table>"],
        td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
        _default: [0, "", ""]
      };
    Lr.optgroup = Lr.option, Lr.tbody = Lr.tfoot = Lr.colgroup = Lr.caption = Lr.thead, Lr.th = Lr.td;
    var Hr = ct.prototype = {
        ready: function(n) {
          function r() {
            i || (i = !0, n())
          }
          var i = !1;
          "complete" === t.readyState ? setTimeout(r) : (this.on("DOMContentLoaded", r), ct(e).on("load", r), this.on("DOMContentLoaded", r))
        },
        toString: function() {
          var e = [];
          return o(this, function(t) {
            e.push("" + t)
          }), "[" + e.join(", ") + "]"
        },
        eq: function(e) {
          return cr(e >= 0 ? this[e] : this[this.length + e])
        },
        length: 0,
        push: vr,
        sort: [].sort,
        splice: [].splice
      },
      Ur = {};
    o("multiple selected checked disabled readOnly required open".split(" "), function(e) {
      Ur[hr(e)] = e
    });
    var Yr = {};
    o("input select option textarea button form details".split(" "), function(e) {
      Yr[e] = !0
    });
    var zr = {
      ngMinlength: "minlength",
      ngMaxlength: "maxlength",
      ngMin: "min",
      ngMax: "max",
      ngPattern: "pattern"
    };
    o({
      data: mt,
      removeData: ht
    }, function(e, t) {
      ct[t] = e
    }), o({
      data: mt,
      inheritedData: wt,
      scope: function(e) {
        return cr.data(e, "$scope") || wt(e.parentNode || e, ["$isolateScope", "$scope"])
      },
      isolateScope: function(e) {
        return cr.data(e, "$isolateScope") || cr.data(e, "$isolateScopeNoTemplate")
      },
      controller: bt,
      injector: function(e) {
        return wt(e, "$injector")
      },
      removeAttr: function(e, t) {
        e.removeAttribute(t)
      },
      hasClass: gt,
      css: function(e, t, n) {
        return t = at(t), y(n) ? void(e.style[t] = n) : e.style[t]
      },
      attr: function(e, t, r) {
        var i = hr(t);
        if (Ur[i]) {
          if (!y(r)) return e[t] || (e.attributes.getNamedItem(t) || p).specified ? i : n;
          r ? (e[t] = !0, e.setAttribute(t, i)) : (e[t] = !1, e.removeAttribute(i))
        } else if (y(r)) e.setAttribute(t, r);
        else if (e.getAttribute) return e = e.getAttribute(t, 2), null === e ? n : e
      },
      prop: function(e, t, n) {
        return y(n) ? void(e[t] = n) : e[t]
      },
      text: function() {
        function e(e, t) {
          if (v(t)) {
            var n = e.nodeType;
            return 1 === n || 3 === n ? e.textContent : ""
          }
          e.textContent = t
        }
        return e.$dv = "", e
      }(),
      val: function(e, t) {
        if (v(t)) {
          if (e.multiple && "select" === A(e)) {
            var n = [];
            return o(e.options, function(e) {
              e.selected && n.push(e.value || e.text)
            }), 0 === n.length ? null : n
          }
          return e.value
        }
        e.value = t
      },
      html: function(e, t) {
        return v(t) ? e.innerHTML : (ft(e, !0), void(e.innerHTML = t))
      },
      empty: xt
    }, function(e, t) {
      ct.prototype[t] = function(t, r) {
        var i, o, a = this.length;
        if (e !== xt && (2 == e.length && e !== gt && e !== bt ? t : r) === n) {
          if ($(t)) {
            for (i = 0; a > i; i++)
              if (e === mt) e(this[i], t);
              else
                for (o in t) e(this[i], o, t[o]);
            return this
          }
          for (i = e.$dv, a = i === n ? Math.min(a, 1) : a, o = 0; a > o; o++) {
            var s = e(this[o], t, r);
            i = i ? i + s : s
          }
          return i
        }
        for (i = 0; a > i; i++) e(this[i], t, r);
        return this
      }
    }), o({
      removeData: ht,
      on: function Fo(e, t, n, r) {
        if (y(r)) throw jr("onargs");
        if (st(e)) {
          var i = pt(e, !0);
          r = i.events;
          var o = i.handle;
          o || (o = i.handle = Ct(e, r));
          for (var i = 0 <= t.indexOf(" ") ? t.split(" ") : [t], a = i.length; a--;) {
            t = i[a];
            var s = r[t];
            s || (r[t] = [], "mouseenter" === t || "mouseleave" === t ? Fo(e, Pr[t], function(e) {
              var n = e.relatedTarget;
              n && (n === this || this.contains(n)) || o(e, t)
            }) : "$destroy" !== t && e.addEventListener(t, o, !1), s = r[t]), s.push(n)
          }
        }
      },
      off: dt,
      one: function(e, t, n) {
        e = cr(e), e.on(t, function r() {
          e.off(t, n), e.off(t, r)
        }), e.on(t, n)
      },
      replaceWith: function(e, t) {
        var n, r = e.parentNode;
        ft(e), o(new ct(t), function(t) {
          n ? r.insertBefore(t, n.nextSibling) : r.replaceChild(t, e), n = t
        })
      },
      children: function(e) {
        var t = [];
        return o(e.childNodes, function(e) {
          1 === e.nodeType && t.push(e)
        }), t
      },
      contents: function(e) {
        return e.contentDocument || e.childNodes || []
      },
      append: function(e, t) {
        var n = e.nodeType;
        if (1 === n || 11 === n) {
          t = new ct(t);
          for (var n = 0, r = t.length; r > n; n++) e.appendChild(t[n])
        }
      },
      prepend: function(e, t) {
        if (1 === e.nodeType) {
          var n = e.firstChild;
          o(new ct(t), function(t) {
            e.insertBefore(t, n)
          })
        }
      },
      wrap: function(e, t) {
        t = cr(t).eq(0).clone()[0];
        var n = e.parentNode;
        n && n.replaceChild(t, e), t.appendChild(e)
      },
      remove: _t,
      detach: function(e) {
        _t(e, !0)
      },
      after: function(e, t) {
        var n = e,
          r = e.parentNode;
        t = new ct(t);
        for (var i = 0, o = t.length; o > i; i++) {
          var a = t[i];
          r.insertBefore(a, n.nextSibling), n = a
        }
      },
      addClass: yt,
      removeClass: vt,
      toggleClass: function(e, t, n) {
        t && o(t.split(" "), function(t) {
          var r = n;
          v(r) && (r = !gt(e, t)), (r ? yt : vt)(e, t)
        })
      },
      parent: function(e) {
        return (e = e.parentNode) && 11 !== e.nodeType ? e : null
      },
      next: function(e) {
        return e.nextElementSibling
      },
      find: function(e, t) {
        return e.getElementsByTagName ? e.getElementsByTagName(t) : []
      },
      clone: lt,
      triggerHandler: function(e, t, n) {
        var r, i;
        r = t.type || t;
        var a = pt(e);
        (a = (a = a && a.events) && a[r]) && (r = {
          preventDefault: function() {
            this.defaultPrevented = !0
          },
          isDefaultPrevented: function() {
            return !0 === this.defaultPrevented
          },
          stopPropagation: p,
          type: r,
          target: e
        }, t.type && (r = f(r, t)), t = N(a), i = n ? [r].concat(n) : [r], o(t, function(t) {
          t.apply(e, i)
        }))
      }
    }, function(e, t) {
      ct.prototype[t] = function(t, n, r) {
        for (var i, o = 0, a = this.length; a > o; o++) v(i) ? (i = e(this[o], t, n, r), y(i) && (i = cr(i))) : $t(i, e(this[o], t, n, r));
        return y(i) ? i : this
      }, ct.prototype.bind = ct.prototype.on, ct.prototype.unbind = ct.prototype.off
    }), Mt.prototype = {
      put: function(e, t) {
        this[Tt(e, this.nextUid)] = t
      },
      get: function(e) {
        return this[Tt(e, this.nextUid)]
      },
      remove: function(e) {
        var t = this[e = Tt(e, this.nextUid)];
        return delete this[e], t
      }
    };
    var Br = /^function\s*[^\(]*\(\s*([^\)]*)\)/m,
      Vr = /,/,
      Wr = /^\s*(_?)(\S+?)\1\s*$/,
      Gr = /((\/\/.*$)|(\/\*[\s\S]*?\*\/))/gm,
      Qr = r("$injector");
    Dt.$$annotate = Et;
    var Xr = r("$animate"),
      Zr = ["$provide", function(e) {
        this.$$selectors = {}, this.register = function(t, n) {
          var r = t + "-animation";
          if (t && "." != t.charAt(0)) throw Xr("notcsel", t);
          this.$$selectors[t.substr(1)] = r, e.factory(r, n)
        }, this.classNameFilter = function(e) {
          return 1 === arguments.length && (this.$$classNameFilter = e instanceof RegExp ? e : null), this.$$classNameFilter
        }, this.$get = ["$$q", "$$asyncCallback", function(e, t) {
          function n() {
            return r || (r = e.defer(), t(function() {
              r.resolve(), r = null
            })), r.promise
          }
          var r;
          return {
            enter: function(e, t, r) {
              return r ? r.after(e) : t.prepend(e), n()
            },
            leave: function(e) {
              return e.remove(), n()
            },
            move: function(e, t, n) {
              return this.enter(e, t, n)
            },
            addClass: function(e, t) {
              return t = b(t) ? t : _r(t) ? t.join(" ") : "", o(e, function(e) {
                yt(e, t)
              }), n()
            },
            removeClass: function(e, t) {
              return t = b(t) ? t : _r(t) ? t.join(" ") : "", o(e, function(e) {
                vt(e, t)
              }), n()
            },
            setClass: function(e, t, r) {
              return this.addClass(e, t), this.removeClass(e, r), n()
            },
            enabled: p,
            cancel: p
          }
        }]
      }],
      Kr = r("$compile");
    qt.$inject = ["$provide", "$$sanitizeUriProvider"];
    var Jr = /^(x[\:\-_]|data[\:\-_])/i,
      ei = r("$interpolate"),
      ti = /^([^\?#]*)(\?([^#]*))?(#(.*))?$/,
      ni = {
        http: 80,
        https: 443,
        ftp: 21
      },
      ri = r("$location");
    cn.prototype = un.prototype = sn.prototype = {
      $$html5: !1,
      $$replace: !1,
      absUrl: ln("$$absUrl"),
      url: function(e) {
        return v(e) ? this.$$url : (e = ti.exec(e), e[1] && this.path(decodeURIComponent(e[1])), (e[2] || e[1]) && this.search(e[3] || ""), this.hash(e[5] || ""), this)
      },
      protocol: ln("$$protocol"),
      host: ln("$$host"),
      port: ln("$$port"),
      path: fn("$$path", function(e) {
        return e = e ? e.toString() : "", "/" == e.charAt(0) ? e : "/" + e
      }),
      search: function(e, t) {
        switch (arguments.length) {
          case 0:
            return this.$$search;
          case 1:
            if (b(e) || w(e)) e = e.toString(), this.$$search = U(e);
            else {
              if (!$(e)) throw ri("isrcharg");
              o(e, function(t, n) {
                null == t && delete e[n]
              }), this.$$search = e
            }
            break;
          default:
            v(t) || null === t ? delete this.$$search[e] : this.$$search[e] = t
        }
        return this.$$compose(), this
      },
      hash: fn("$$hash", function(e) {
        return e ? e.toString() : ""
      }),
      replace: function() {
        return this.$$replace = !0, this
      }
    };
    var ii = r("$parse"),
      oi = Function.prototype.call,
      ai = Function.prototype.apply,
      si = Function.prototype.bind,
      ui = Object.create(null);
    o({
      "null": function() {
        return null
      },
      "true": function() {
        return !0
      },
      "false": function() {
        return !1
      },
      undefined: function() {}
    }, function(e, t) {
      e.constant = e.literal = e.sharedGetter = !0, ui[t] = e
    });
    var ci = f(Object.create(null), {
        "+": function(e, t, r, i) {
          return r = r(e, t), i = i(e, t), y(r) ? y(i) ? r + i : r : y(i) ? i : n
        },
        "-": function(e, t, n, r) {
          return n = n(e, t), r = r(e, t), (y(n) ? n : 0) - (y(r) ? r : 0)
        },
        "*": function(e, t, n, r) {
          return n(e, t) * r(e, t)
        },
        "/": function(e, t, n, r) {
          return n(e, t) / r(e, t)
        },
        "%": function(e, t, n, r) {
          return n(e, t) % r(e, t)
        },
        "^": function(e, t, n, r) {
          return n(e, t) ^ r(e, t)
        },
        "=": p,
        "===": function(e, t, n, r) {
          return n(e, t) === r(e, t)
        },
        "!==": function(e, t, n, r) {
          return n(e, t) !== r(e, t)
        },
        "==": function(e, t, n, r) {
          return n(e, t) == r(e, t)
        },
        "!=": function(e, t, n, r) {
          return n(e, t) != r(e, t)
        },
        "<": function(e, t, n, r) {
          return n(e, t) < r(e, t)
        },
        ">": function(e, t, n, r) {
          return n(e, t) > r(e, t)
        },
        "<=": function(e, t, n, r) {
          return n(e, t) <= r(e, t)
        },
        ">=": function(e, t, n, r) {
          return n(e, t) >= r(e, t)
        },
        "&&": function(e, t, n, r) {
          return n(e, t) && r(e, t)
        },
        "||": function(e, t, n, r) {
          return n(e, t) || r(e, t)
        },
        "&": function(e, t, n, r) {
          return n(e, t) & r(e, t)
        },
        "|": function(e, t, n, r) {
          return r(e, t)(e, t, n(e, t))
        },
        "!": function(e, t, n) {
          return !n(e, t)
        }
      }),
      li = {
        n: "\n",
        f: "\f",
        r: "\r",
        t: "	",
        v: "",
        "'": "'",
        '"': '"'
      },
      fi = function(e) {
        this.options = e
      };
    fi.prototype = {
      constructor: fi,
      lex: function(e) {
        for (this.text = e, this.index = 0, this.ch = n, this.tokens = []; this.index < this.text.length;)
          if (this.ch = this.text.charAt(this.index), this.is("\"'")) this.readString(this.ch);
          else if (this.isNumber(this.ch) || this.is(".") && this.isNumber(this.peek())) this.readNumber();
        else if (this.isIdent(this.ch)) this.readIdent();
        else if (this.is("(){}[].,;:?")) this.tokens.push({
          index: this.index,
          text: this.ch
        }), this.index++;
        else if (this.isWhitespace(this.ch)) this.index++;
        else {
          e = this.ch + this.peek();
          var t = e + this.peek(2),
            r = ci[this.ch],
            i = ci[e],
            o = ci[t];
          o ? (this.tokens.push({
            index: this.index,
            text: t,
            fn: o
          }), this.index += 3) : i ? (this.tokens.push({
            index: this.index,
            text: e,
            fn: i
          }), this.index += 2) : r ? (this.tokens.push({
            index: this.index,
            text: this.ch,
            fn: r
          }), this.index += 1) : this.throwError("Unexpected next character ", this.index, this.index + 1)
        }
        return this.tokens
      },
      is: function(e) {
        return -1 !== e.indexOf(this.ch)
      },
      peek: function(e) {
        return e = e || 1, this.index + e < this.text.length ? this.text.charAt(this.index + e) : !1
      },
      isNumber: function(e) {
        return e >= "0" && "9" >= e
      },
      isWhitespace: function(e) {
        return " " === e || "\r" === e || "	" === e || "\n" === e || "" === e || "\xa0" === e
      },
      isIdent: function(e) {
        return e >= "a" && "z" >= e || e >= "A" && "Z" >= e || "_" === e || "$" === e
      },
      isExpOperator: function(e) {
        return "-" === e || "+" === e || this.isNumber(e)
      },
      throwError: function(e, t, n) {
        throw n = n || this.index, t = y(t) ? "s " + t + "-" + this.index + " [" + this.text.substring(t, n) + "]" : " " + n, ii("lexerr", e, t, this.text)
      },
      readNumber: function() {
        for (var e = "", t = this.index; this.index < this.text.length;) {
          var n = hr(this.text.charAt(this.index));
          if ("." == n || this.isNumber(n)) e += n;
          else {
            var r = this.peek();
            if ("e" == n && this.isExpOperator(r)) e += n;
            else if (this.isExpOperator(n) && r && this.isNumber(r) && "e" == e.charAt(e.length - 1)) e += n;
            else {
              if (!this.isExpOperator(n) || r && this.isNumber(r) || "e" != e.charAt(e.length - 1)) break;
              this.throwError("Invalid exponent")
            }
          }
          this.index++
        }
        e *= 1, this.tokens.push({
          index: t,
          text: e,
          constant: !0,
          fn: function() {
            return e
          }
        })
      },
      readIdent: function() {
        for (var e, t, r, i, o = this.text, a = "", s = this.index; this.index < this.text.length && (i = this.text.charAt(this.index), "." === i || this.isIdent(i) || this.isNumber(i));) "." === i && (e = this.index), a += i, this.index++;
        if (e && "." === a[a.length - 1] && (this.index--, a = a.slice(0, -1), e = a.lastIndexOf("."), -1 === e && (e = n)), e)
          for (t = this.index; t < this.text.length;) {
            if (i = this.text.charAt(t), "(" === i) {
              r = a.substr(e - s + 1), a = a.substr(0, e - s), this.index = t;
              break
            }
            if (!this.isWhitespace(i)) break;
            t++
          }
        this.tokens.push({
          index: s,
          text: a,
          fn: ui[a] || yn(a, this.options, o)
        }), r && (this.tokens.push({
          index: e,
          text: "."
        }), this.tokens.push({
          index: e + 1,
          text: r
        }))
      },
      readString: function(e) {
        var t = this.index;
        this.index++;
        for (var n = "", r = e, i = !1; this.index < this.text.length;) {
          var o = this.text.charAt(this.index),
            r = r + o;
          if (i) "u" === o ? (i = this.text.substring(this.index + 1, this.index + 5), i.match(/[\da-f]{4}/i) || this.throwError("Invalid unicode escape [\\u" + i + "]"), this.index += 4, n += String.fromCharCode(parseInt(i, 16))) : n += li[o] || o, i = !1;
          else if ("\\" === o) i = !0;
          else {
            if (o === e) return this.index++, void this.tokens.push({
              index: t,
              text: r,
              string: n,
              constant: !0,
              fn: function() {
                return n
              }
            });
            n += o
          }
          this.index++
        }
        this.throwError("Unterminated quote", t)
      }
    };
    var di = function(e, t, n) {
      this.lexer = e, this.$filter = t, this.options = n
    };
    di.ZERO = f(function() {
      return 0
    }, {
      sharedGetter: !0,
      constant: !0
    }), di.prototype = {
      constructor: di,
      parse: function(e) {
        return this.text = e, this.tokens = this.lexer.lex(e), e = this.statements(), 0 !== this.tokens.length && this.throwError("is an unexpected token", this.tokens[0]), e.literal = !!e.literal, e.constant = !!e.constant, e
      },
      primary: function() {
        var e;
        if (this.expect("(")) e = this.filterChain(), this.consume(")");
        else if (this.expect("[")) e = this.arrayDeclaration();
        else if (this.expect("{")) e = this.object();
        else {
          var t = this.expect();
          (e = t.fn) || this.throwError("not a primary expression", t), t.constant && (e.constant = !0, e.literal = !0)
        }
        for (var n; t = this.expect("(", "[", ".");) "(" === t.text ? (e = this.functionCall(e, n), n = null) : "[" === t.text ? (n = e, e = this.objectIndex(e)) : "." === t.text ? (n = e, e = this.fieldAccess(e)) : this.throwError("IMPOSSIBLE");
        return e
      },
      throwError: function(e, t) {
        throw ii("syntax", t.text, e, t.index + 1, this.text, this.text.substring(t.index))
      },
      peekToken: function() {
        if (0 === this.tokens.length) throw ii("ueoe", this.text);
        return this.tokens[0]
      },
      peek: function(e, t, n, r) {
        if (0 < this.tokens.length) {
          var i = this.tokens[0],
            o = i.text;
          if (o === e || o === t || o === n || o === r || !(e || t || n || r)) return i
        }
        return !1
      },
      expect: function(e, t, n, r) {
        return (e = this.peek(e, t, n, r)) ? (this.tokens.shift(), e) : !1
      },
      consume: function(e) {
        this.expect(e) || this.throwError("is unexpected, expecting [" + e + "]", this.peek())
      },
      unaryFn: function(e, t) {
        return f(function(n, r) {
          return e(n, r, t)
        }, {
          constant: t.constant
        })
      },
      ternaryFn: function(e, t, n) {
        return f(function(r, i) {
          return e(r, i) ? t(r, i) : n(r, i)
        }, {
          constant: e.constant && t.constant && n.constant
        })
      },
      binaryFn: function(e, t, n) {
        return f(function(r, i) {
          return t(r, i, e, n)
        }, {
          constant: e.constant && n.constant
        })
      },
      statements: function() {
        for (var e = [];;)
          if (0 < this.tokens.length && !this.peek("}", ")", ";", "]") && e.push(this.filterChain()), !this.expect(";")) return 1 === e.length ? e[0] : function(t, n) {
            for (var r, i = 0, o = e.length; o > i; i++) r = e[i](t, n);
            return r
          }
      },
      filterChain: function() {
        for (var e, t = this.expression(); e = this.expect("|");) t = this.binaryFn(t, e.fn, this.filter());
        return t
      },
      filter: function() {
        var e, t, r = this.expect(),
          i = this.$filter(r.text);
        if (this.peek(":"))
          for (e = [], t = []; this.expect(":");) e.push(this.expression());
        return g(function(r, o, a) {
          if (t) {
            for (t[0] = a, a = e.length; a--;) t[a + 1] = e[a](r, o);
            return i.apply(n, t)
          }
          return i(a)
        })
      },
      expression: function() {
        return this.assignment()
      },
      assignment: function() {
        var e, t, n = this.ternary();
        return (t = this.expect("=")) ? (n.assign || this.throwError("implies assignment but [" + this.text.substring(0, t.index) + "] can not be assigned to", t), e = this.ternary(), function(t, r) {
          return n.assign(t, e(t, r), r)
        }) : n
      },
      ternary: function() {
        var e, t, n = this.logicalOR();
        return this.expect("?") ? (e = this.assignment(), (t = this.expect(":")) ? this.ternaryFn(n, e, this.assignment()) : void this.throwError("expected :", t)) : n
      },
      logicalOR: function() {
        for (var e, t = this.logicalAND(); e = this.expect("||");) t = this.binaryFn(t, e.fn, this.logicalAND());
        return t
      },
      logicalAND: function() {
        var e, t = this.equality();
        return (e = this.expect("&&")) && (t = this.binaryFn(t, e.fn, this.logicalAND())), t
      },
      equality: function() {
        var e, t = this.relational();
        return (e = this.expect("==", "!=", "===", "!==")) && (t = this.binaryFn(t, e.fn, this.equality())), t
      },
      relational: function() {
        var e, t = this.additive();
        return (e = this.expect("<", ">", "<=", ">=")) && (t = this.binaryFn(t, e.fn, this.relational())), t
      },
      additive: function() {
        for (var e, t = this.multiplicative(); e = this.expect("+", "-");) t = this.binaryFn(t, e.fn, this.multiplicative());
        return t
      },
      multiplicative: function() {
        for (var e, t = this.unary(); e = this.expect("*", "/", "%");) t = this.binaryFn(t, e.fn, this.unary());
        return t
      },
      unary: function() {
        var e;
        return this.expect("+") ? this.primary() : (e = this.expect("-")) ? this.binaryFn(di.ZERO, e.fn, this.unary()) : (e = this.expect("!")) ? this.unaryFn(e.fn, this.unary()) : this.primary()
      },
      fieldAccess: function(e) {
        var t = this.text,
          n = this.expect().text,
          r = yn(n, this.options, t);
        return f(function(t, n, i) {
          return r(i || e(t, n))
        }, {
          assign: function(r, i, o) {
            return (o = e(r, o)) || e.assign(r, o = {}), gn(o, n, i, t)
          }
        })
      },
      objectIndex: function(e) {
        var t = this.text,
          r = this.expression();
        return this.consume("]"), f(function(i, o) {
          var a = e(i, o),
            s = r(i, o);
          return pn(s, t), a ? mn(a[s], t) : n
        }, {
          assign: function(n, i, o) {
            var a = pn(r(n, o), t);
            return (o = mn(e(n, o), t)) || e.assign(n, o = {}), o[a] = i
          }
        })
      },
      functionCall: function(e, t) {
        var n = [];
        if (")" !== this.peekToken().text)
          do n.push(this.expression()); while (this.expect(","));
        this.consume(")");
        var r = this.text,
          i = n.length ? [] : null;
        return function(o, a) {
          var s = t ? t(o, a) : o,
            u = e(o, a, s) || p;
          if (i)
            for (var c = n.length; c--;) i[c] = mn(n[c](o, a), r);
          if (mn(s, r), u) {
            if (u.constructor === u) throw ii("isecfn", r);
            if (u === oi || u === ai || u === si) throw ii("isecff", r)
          }
          return s = u.apply ? u.apply(s, i) : u(i[0], i[1], i[2], i[3], i[4]), mn(s, r)
        }
      },
      arrayDeclaration: function() {
        var e = [],
          t = !0;
        if ("]" !== this.peekToken().text)
          do {
            if (this.peek("]")) break;
            var n = this.expression();
            e.push(n), n.constant || (t = !1)
          } while (this.expect(","));
        return this.consume("]"), f(function(t, n) {
          for (var r = [], i = 0, o = e.length; o > i; i++) r.push(e[i](t, n));
          return r
        }, {
          literal: !0,
          constant: t
        })
      },
      object: function() {
        var e = [],
          t = !0;
        if ("}" !== this.peekToken().text)
          do {
            if (this.peek("}")) break;
            var n = this.expect(),
              n = n.string || n.text;
            this.consume(":");
            var r = this.expression();
            e.push({
              key: n,
              value: r
            }), r.constant || (t = !1)
          } while (this.expect(","));
        return this.consume("}"), f(function(t, n) {
          for (var r = {}, i = 0, o = e.length; o > i; i++) {
            var a = e[i];
            r[a.key] = a.value(t, n)
          }
          return r
        }, {
          literal: !0,
          constant: t
        })
      }
    };
    var hi = Object.create(null),
      pi = r("$sce"),
      mi = {
        HTML: "html",
        CSS: "css",
        URL: "url",
        RESOURCE_URL: "resourceUrl",
        JS: "js"
      },
      Kr = r("$compile"),
      gi = t.createElement("a"),
      vi = Pn(e.location.href, !0);
    In.$inject = ["$provide"], Rn.$inject = ["$locale"], Ln.$inject = ["$locale"];
    var yi = ".",
      $i = {
        yyyy: Yn("FullYear", 4),
        yy: Yn("FullYear", 2, 0, !0),
        y: Yn("FullYear", 1),
        MMMM: zn("Month"),
        MMM: zn("Month", !0),
        MM: Yn("Month", 2, 1),
        M: Yn("Month", 1, 1),
        dd: Yn("Date", 2),
        d: Yn("Date", 1),
        HH: Yn("Hours", 2),
        H: Yn("Hours", 1),
        hh: Yn("Hours", 2, -12),
        h: Yn("Hours", 1, -12),
        mm: Yn("Minutes", 2),
        m: Yn("Minutes", 1),
        ss: Yn("Seconds", 2),
        s: Yn("Seconds", 1),
        sss: Yn("Milliseconds", 3),
        EEEE: zn("Day"),
        EEE: zn("Day", !0),
        a: function(e, t) {
          return 12 > e.getHours() ? t.AMPMS[0] : t.AMPMS[1]
        },
        Z: function(e) {
          return e = -1 * e.getTimezoneOffset(), e = (e >= 0 ? "+" : "") + (Un(Math[e > 0 ? "floor" : "ceil"](e / 60), 2) + Un(Math.abs(e % 60), 2))
        },
        ww: Vn(2),
        w: Vn(1)
      },
      bi = /((?:[^yMdHhmsaZEw']+)|(?:'(?:[^']|'')*')|(?:E+|y+|M+|d+|H+|h+|m+|s+|a|Z|w+))(.*)/,
      wi = /^\-?\d+$/;
    Wn.$inject = ["$locale"];
    var xi = g(hr),
      _i = g(mr);
    Xn.$inject = ["$parse"];
    var ki = g({
        restrict: "E",
        compile: function(e, n) {
          return 8 >= ur && (n.href || n.name || n.$set("href", ""), e.append(t.createComment("IE fix"))), n.href || n.xlinkHref || n.name ? void 0 : function(e, t) {
            var n = "[object SVGAnimatedString]" === yr.call(t.prop("href")) ? "xlink:href" : "href";
            t.on("click", function(e) {
              t.attr(n) || e.preventDefault()
            })
          }
        }
      }),
      Si = {};
    o(Ur, function(e, t) {
      if ("multiple" != e) {
        var n = Rt("ng-" + t);
        Si[n] = function() {
          return {
            restrict: "A",
            priority: 100,
            link: function(e, r, i) {
              e.$watch(i[n], function(e) {
                i.$set(t, !!e)
              })
            }
          }
        }
      }
    }), o(zr, function(e, t) {
      Si[t] = function() {
        return {
          priority: 100,
          link: function(e, n, r) {
            return "ngPattern" === t && "/" == r.ngPattern.charAt(0) && (n = r.ngPattern.match(dr)) ? void r.$set("ngPattern", new RegExp(n[1], n[2])) : void e.$watch(r[t], function(e) {
              r.$set(t, e)
            })
          }
        }
      }
    }), o(["src", "srcset", "href"], function(e) {
      var t = Rt("ng-" + e);
      Si[t] = function() {
        return {
          priority: 99,
          link: function(n, r, i) {
            var o = e,
              a = e;
            "href" === e && "[object SVGAnimatedString]" === yr.call(r.prop("href")) && (a = "xlinkHref", i.$attr[a] = "xlink:href", o = null), i.$observe(t, function(t) {
              t ? (i.$set(a, t), ur && o && r.prop(o, i[a])) : "href" === e && i.$set(a, null)
            })
          }
        }
      }
    });
    var Ci = {
      $addControl: p,
      $removeControl: p,
      $setValidity: p,
      $$setPending: p,
      $setDirty: p,
      $setPristine: p,
      $setSubmitted: p,
      $$clearControlValidity: p
    };
    Kn.$inject = ["$element", "$attrs", "$scope", "$animate"];
    var Ti = function(e) {
        return ["$timeout", function(t) {
          return {
            name: "form",
            restrict: e ? "EAC" : "E",
            controller: Kn,
            compile: function() {
              return {
                pre: function(e, r, i, o) {
                  if (!i.action) {
                    var a = function(t) {
                      e.$apply(function() {
                        o.$commitViewValue(), o.$setSubmitted()
                      }), t.preventDefault ? t.preventDefault() : t.returnValue = !1
                    };
                    r[0].addEventListener("submit", a, !1), r.on("$destroy", function() {
                      t(function() {
                        r[0].removeEventListener("submit", a, !1)
                      }, 0, !1)
                    })
                  }
                  var s = r.parent().controller("form"),
                    u = i.name || i.ngForm;
                  u && gn(e, u, o, u), s && r.on("$destroy", function() {
                    s.$removeControl(o), u && gn(e, u, n, u), f(o, Ci)
                  })
                }
              }
            }
          }
        }]
      },
      Mi = Ti(),
      Ai = Ti(!0),
      Ei = /\d{4}-[01]\d-[0-3]\dT[0-2]\d:[0-5]\d:[0-5]\d\.\d+([+-][0-2]\d:[0-5]\d|Z)/,
      Di = /^(ftp|http|https):\/\/(\w+:{0,1}\w*@)?(\S+)(:[0-9]+)?(\/|\/([\w#!:.?+=&%@!\-\/]))?$/,
      Oi = /^[a-z0-9!#$%&'*+\/=?^_`{|}~.-]+@[a-z0-9]([a-z0-9-]*[a-z0-9])?(\.[a-z0-9]([a-z0-9-]*[a-z0-9])?)*$/i,
      Ni = /^\s*(\-|\+)?(\d+|(\d*(\.\d*)))\s*$/,
      Pi = /^(\d{4})-(\d{2})-(\d{2})$/,
      ji = /^(\d{4})-(\d\d)-(\d\d)T(\d\d):(\d\d)(?::(\d\d))?$/,
      Fi = /^(\d{4})-W(\d\d)$/,
      Ii = /^(\d{4})-(\d\d)$/,
      qi = /^(\d\d):(\d\d)(?::(\d\d))?$/,
      Ri = /(\s+|^)default(\s+|$)/,
      Li = new r("ngModel"),
      Hi = {
        text: function(e, t, n, r, i, o) {
          er(e, t, n, r, i, o), Jn(r)
        },
        date: nr("date", Pi, tr(Pi, ["yyyy", "MM", "dd"]), "yyyy-MM-dd"),
        "datetime-local": nr("datetimelocal", ji, tr(ji, "yyyy MM dd HH mm ss".split(" ")), "yyyy-MM-ddTHH:mm:ss"),
        time: nr("time", qi, tr(qi, ["HH", "mm", "ss"]), "HH:mm:ss"),
        week: nr("week", Fi, function(e) {
          if (x(e)) return e;
          if (b(e)) {
            Fi.lastIndex = 0;
            var t = Fi.exec(e);
            if (t) {
              e = +t[1];
              var n = +t[2],
                t = Bn(e),
                n = 7 * (n - 1);
              return new Date(e, 0, t.getDate() + n)
            }
          }
          return 0 / 0
        }, "yyyy-Www"),
        month: nr("month", Ii, tr(Ii, ["yyyy", "MM"]), "yyyy-MM"),
        number: function(e, t, r, i, o, a) {
          if (rr(e, t, r, i), er(e, t, r, i, o, a), i.$$parserName = "number", i.$parsers.push(function(e) {
              return i.$isEmpty(e) ? null : Ni.test(e) ? parseFloat(e) : n
            }), i.$formatters.push(function(e) {
              if (!i.$isEmpty(e)) {
                if (!w(e)) throw Li("numfmt", e);
                e = e.toString()
              }
              return e
            }), r.min || r.ngMin) {
            var s;
            i.$validators.min = function(e) {
              return i.$isEmpty(e) || v(s) || e >= s
            }, r.$observe("min", function(e) {
              y(e) && !w(e) && (e = parseFloat(e, 10)), s = w(e) && !isNaN(e) ? e : n, i.$validate()
            })
          }
          if (r.max || r.ngMax) {
            var u;
            i.$validators.max = function(e) {
              return i.$isEmpty(e) || v(u) || u >= e
            }, r.$observe("max", function(e) {
              y(e) && !w(e) && (e = parseFloat(e, 10)), u = w(e) && !isNaN(e) ? e : n, i.$validate()
            })
          }
        },
        url: function(e, t, n, r, i, o) {
          er(e, t, n, r, i, o), Jn(r), r.$$parserName = "url", r.$validators.url = function(e, t) {
            var n = e || t;
            return r.$isEmpty(n) || Di.test(n)
          }
        },
        email: function(e, t, n, r, i, o) {
          er(e, t, n, r, i, o), Jn(r), r.$$parserName = "email", r.$validators.email = function(e, t) {
            var n = e || t;
            return r.$isEmpty(n) || Oi.test(n)
          }
        },
        radio: function(e, t, n, r) {
          v(n.name) && t.attr("name", ++wr), t.on("click", function(e) {
            t[0].checked && r.$setViewValue(n.value, e && e.type)
          }), r.$render = function() {
            t[0].checked = n.value == r.$viewValue
          }, n.$observe("value", r.$render)
        },
        checkbox: function(e, t, n, r, i, o, a, s) {
          var u = ir(s, e, "ngTrueValue", n.ngTrueValue, !0),
            c = ir(s, e, "ngFalseValue", n.ngFalseValue, !1);
          t.on("click", function(e) {
            r.$setViewValue(t[0].checked, e && e.type)
          }), r.$render = function() {
            t[0].checked = r.$viewValue
          }, r.$isEmpty = function(e) {
            return e !== u
          }, r.$formatters.push(function(e) {
            return P(e, u)
          }), r.$parsers.push(function(e) {
            return e ? u : c
          })
        },
        hidden: p,
        button: p,
        submit: p,
        reset: p,
        file: p
      },
      Ui = ["$browser", "$sniffer", "$filter", "$parse", function(e, t, n, r) {
        return {
          restrict: "E",
          require: ["?ngModel"],
          link: function(i, o, a, s) {
            s[0] && (Hi[hr(a.type)] || Hi.text)(i, o, a, s[0], t, e, n, r)
          }
        }
      }],
      Yi = "ng-valid",
      zi = "ng-invalid",
      Bi = "ng-pristine",
      Vi = "ng-dirty",
      Wi = "ng-pending",
      Gi = ["$scope", "$exceptionHandler", "$attrs", "$element", "$parse", "$animate", "$timeout", "$rootScope", "$q", function(e, t, r, i, a, s, u, c, l) {
        this.$modelValue = this.$viewValue = Number.NaN, this.$validators = {}, this.$asyncValidators = {}, this.$parsers = [], this.$formatters = [], this.$viewChangeListeners = [], this.$untouched = !0, this.$touched = !1, this.$pristine = !0, this.$dirty = !1, this.$valid = !0, this.$invalid = !1, this.$error = {}, this.$$success = {}, this.$pending = n, this.$name = r.name;
        var f = a(r.ngModel),
          d = null,
          h = this,
          m = function() {
            var t = f(e);
            return h.$options && h.$options.getterSetter && _(t) && (t = t()), t
          },
          g = function() {
            var t;
            h.$options && h.$options.getterSetter && _(t = f(e)) ? t(h.$modelValue) : f.assign(e, h.$modelValue)
          };
        this.$$setOptions = function(e) {
          if (h.$options = e, !(f.assign || e && e.getterSetter)) throw Li("nonassign", r.ngModel, L(i))
        }, this.$render = p, this.$isEmpty = function(e) {
          return v(e) || "" === e || null === e || e !== e
        };
        var $ = i.inheritedData("$formController") || Ci,
          b = 0;
        i.addClass(Bi).addClass("ng-untouched"), or({
          ctrl: this,
          $element: i,
          set: function(e, t) {
            e[t] = !0
          },
          unset: function(e, t) {
            delete e[t]
          },
          parentForm: $,
          $animate: s
        }), this.$setPristine = function() {
          h.$dirty = !1, h.$pristine = !0, s.removeClass(i, Vi), s.addClass(i, Bi)
        }, this.$setUntouched = function() {
          h.$touched = !1, h.$untouched = !0, s.setClass(i, "ng-untouched", "ng-touched")
        }, this.$setTouched = function() {
          h.$touched = !0, h.$untouched = !1, s.setClass(i, "ng-touched", "ng-untouched")
        }, this.$rollbackViewValue = function() {
          u.cancel(d), h.$viewValue = h.$$lastCommittedViewValue, h.$render()
        }, this.$validate = function() {
          w(h.$modelValue) && isNaN(h.$modelValue) || this.$$parseAndValidate()
        }, this.$$runValidators = function(e, t, r, i) {
          function a() {
            var e = !0;
            return o(h.$validators, function(n, i) {
              var o = n(t, r);
              e = e && o, u(i, o)
            }), e ? !0 : (o(h.$asyncValidators, function(e, t) {
              u(t, null)
            }), c(), !1)
          }

          function s() {
            var e = [];
            o(h.$asyncValidators, function(i, o) {
              var a = i(t, r);
              if (!a || !_(a.then)) throw Li("$asyncValidators", a);
              u(o, n), e.push(a.then(function() {
                u(o, !0)
              }, function() {
                u(o, !1)
              }))
            }), e.length ? l.all(e).then(c) : c()
          }

          function u(e, t) {
            f === b && h.$setValidity(e, t)
          }

          function c() {
            f === b && i()
          }
          b++;
          var f = b;
          (function(e) {
            var t = h.$$parserName || "parse";
            if (e === n) u(t, null);
            else if (u(t, e), !e) return o(h.$validators, function(e, t) {
              u(t, null)
            }), o(h.$asyncValidators, function(e, t) {
              u(t, null)
            }), c(), !1;
            return !0
          })(e) && a() && s()
        }, this.$commitViewValue = function() {
          var e = h.$viewValue;
          u.cancel(d), (h.$$lastCommittedViewValue !== e || "" === e && h.$$hasNativeValidators) && (h.$$lastCommittedViewValue = e, h.$pristine && (h.$dirty = !0, h.$pristine = !1, s.removeClass(i, Bi), s.addClass(i, Vi), $.$setDirty()), this.$$parseAndValidate())
        }, this.$$parseAndValidate = function() {
          for (var e = !0, t = h.$$lastCommittedViewValue, r = t, i = 0; i < h.$parsers.length; i++)
            if (r = h.$parsers[i](r), v(r)) {
              e = !1;
              break
            }
          w(h.$modelValue) && isNaN(h.$modelValue) && (h.$modelValue = m());
          var o = h.$modelValue,
            a = h.$options && h.$options.allowInvalid;
          a && (h.$modelValue = r, h.$modelValue !== o && h.$$writeModelToScope()), h.$$runValidators(e, r, t, function() {
            a || (h.$modelValue = h.$valid ? r : n, h.$modelValue !== o && h.$$writeModelToScope())
          })
        }, this.$$writeModelToScope = function() {
          g(h.$modelValue), o(h.$viewChangeListeners, function(e) {
            try {
              e()
            } catch (n) {
              t(n)
            }
          })
        }, this.$setViewValue = function(e, t) {
          h.$viewValue = e, h.$options && !h.$options.updateOnDefault || h.$$debounceViewValueCommit(t)
        }, this.$$debounceViewValueCommit = function(t) {
          var n = 0,
            r = h.$options;
          r && y(r.debounce) && (r = r.debounce, w(r) ? n = r : w(r[t]) ? n = r[t] : w(r["default"]) && (n = r["default"])), u.cancel(d), n ? d = u(function() {
            h.$commitViewValue()
          }, n) : c.$$phase ? h.$commitViewValue() : e.$apply(function() {
            h.$commitViewValue()
          })
        }, e.$watch(function() {
          var e = m();
          if (e !== h.$modelValue) {
            h.$modelValue = e;
            for (var t = h.$formatters, r = t.length, i = e; r--;) i = t[r](i);
            h.$viewValue !== i && (h.$viewValue = h.$$lastCommittedViewValue = i, h.$render(), h.$$runValidators(n, e, i, p))
          }
          return e
        })
      }],
      Qi = function() {
        return {
          restrict: "A",
          require: ["ngModel", "^?form", "^?ngModelOptions"],
          controller: Gi,
          link: {
            pre: function(e, t, n, r) {
              var i = r[0],
                o = r[1] || Ci;
              i.$$setOptions(r[2] && r[2].$options), o.$addControl(i), e.$on("$destroy", function() {
                o.$removeControl(i)
              })
            },
            post: function(e, t, n, r) {
              var i = r[0];
              i.$options && i.$options.updateOn && t.on(i.$options.updateOn, function(e) {
                i.$$debounceViewValueCommit(e && e.type)
              }), t.on("blur", function() {
                i.$touched || e.$apply(function() {
                  i.$setTouched()
                })
              })
            }
          }
        }
      },
      Xi = g({
        restrict: "A",
        require: "ngModel",
        link: function(e, t, n, r) {
          r.$viewChangeListeners.push(function() {
            e.$eval(n.ngChange)
          })
        }
      }),
      Zi = function() {
        return {
          restrict: "A",
          require: "?ngModel",
          link: function(e, t, n, r) {
            r && (n.required = !0, r.$validators.required = function(e, t) {
              return !n.required || !r.$isEmpty(t)
            }, n.$observe("required", function() {
              r.$validate()
            }))
          }
        }
      },
      Ki = function() {
        return {
          restrict: "A",
          require: "?ngModel",
          link: function(e, t, i, o) {
            if (o) {
              var a, s = i.ngPattern || i.pattern;
              i.$observe("pattern", function(e) {
                if (b(e) && 0 < e.length && (e = new RegExp(e)), e && !e.test) throw r("ngPattern")("noregexp", s, e, L(t));
                a = e || n, o.$validate()
              }), o.$validators.pattern = function(e) {
                return o.$isEmpty(e) || v(a) || a.test(e)
              }
            }
          }
        }
      },
      Ji = function() {
        return {
          restrict: "A",
          require: "?ngModel",
          link: function(e, t, n, r) {
            if (r) {
              var i = 0;
              n.$observe("maxlength", function(e) {
                i = d(e) || 0, r.$validate()
              }), r.$validators.maxlength = function(e, t) {
                return r.$isEmpty(t) || t.length <= i
              }
            }
          }
        }
      },
      eo = function() {
        return {
          restrict: "A",
          require: "?ngModel",
          link: function(e, t, n, r) {
            if (r) {
              var i = 0;
              n.$observe("minlength", function(e) {
                i = d(e) || 0, r.$validate()
              }), r.$validators.minlength = function(e, t) {
                return r.$isEmpty(t) || t.length >= i
              }
            }
          }
        }
      },
      to = function() {
        return {
          restrict: "A",
          priority: 100,
          require: "ngModel",
          link: function(e, t, r, i) {
            var a = t.attr(r.$attr.ngList) || ", ",
              s = "false" !== r.ngTrim,
              u = s ? kr(a) : a;
            i.$parsers.push(function(e) {
              if (!v(e)) {
                var t = [];
                return e && o(e.split(u), function(e) {
                  e && t.push(s ? kr(e) : e)
                }), t
              }
            }), i.$formatters.push(function(e) {
              return _r(e) ? e.join(a) : n
            }), i.$isEmpty = function(e) {
              return !e || !e.length
            }
          }
        }
      },
      no = /^(true|false|\d+)$/,
      ro = function() {
        return {
          restrict: "A",
          priority: 100,
          compile: function(e, t) {
            return no.test(t.ngValue) ? function(e, t, n) {
              n.$set("value", e.$eval(n.ngValue))
            } : function(e, t, n) {
              e.$watch(n.ngValue, function(e) {
                n.$set("value", e)
              })
            }
          }
        }
      },
      io = function() {
        return {
          restrict: "A",
          controller: ["$scope", "$attrs", function(e, t) {
            var r = this;
            this.$options = e.$eval(t.ngModelOptions), this.$options.updateOn !== n ? (this.$options.updateOnDefault = !1, this.$options.updateOn = kr(this.$options.updateOn.replace(Ri, function() {
              return r.$options.updateOnDefault = !0, " "
            }))) : this.$options.updateOnDefault = !0
          }]
        }
      },
      oo = ["$compile", function(e) {
        return {
          restrict: "AC",
          compile: function(t) {
            return e.$$addBindingClass(t),
              function(t, r, i) {
                e.$$addBindingInfo(r, i.ngBind), t.$watch(i.ngBind, function(e) {
                  r.text(e == n ? "" : e)
                })
              }
          }
        }
      }],
      ao = ["$interpolate", "$compile", function(e, t) {
        return {
          compile: function(n) {
            return t.$$addBindingClass(n),
              function(n, r, i) {
                n = e(r.attr(i.$attr.ngBindTemplate)), t.$$addBindingInfo(r, n.expressions), i.$observe("ngBindTemplate", function(e) {
                  r.text(e)
                })
              }
          }
        }
      }],
      so = ["$sce", "$parse", "$compile", function(e, t, n) {
        return {
          restrict: "A",
          compile: function(r, i) {
            var o = t(i.ngBindHtml),
              a = t(i.ngBindHtml, function(e) {
                return (e || "").toString()
              });
            return n.$$addBindingClass(r),
              function(t, r, i) {
                n.$$addBindingInfo(r, i.ngBindHtml), t.$watch(a, function() {
                  r.html(e.getTrustedHtml(o(t)) || "")
                })
              }
          }
        }
      }],
      uo = sr("", !0),
      co = sr("Odd", 0),
      lo = sr("Even", 1),
      fo = Zn({
        compile: function(e, t) {
          t.$set("ngCloak", n), e.removeClass("ng-cloak")
        }
      }),
      ho = [function() {
        return {
          restrict: "A",
          scope: !0,
          controller: "@",
          priority: 500
        }
      }],
      po = {},
      mo = {
        blur: !0,
        focus: !0
      };
    o("click dblclick mousedown mouseup mouseover mouseout mousemove mouseenter mouseleave keydown keyup keypress submit focus blur copy cut paste".split(" "), function(e) {
      var t = Rt("ng-" + e);
      po[t] = ["$parse", "$rootScope", function(n, r) {
        return {
          restrict: "A",
          compile: function(i, o) {
            var a = n(o[t]);
            return function(t, n) {
              var i = hr(e);
              n.on(i, function(e) {
                var n = function() {
                  a(t, {
                    $event: e
                  })
                };
                mo[i] && r.$$phase ? t.$evalAsync(n) : t.$apply(n)
              })
            }
          }
        }
      }]
    });
    var go = ["$animate", function(e) {
        return {
          multiElement: !0,
          transclude: "element",
          priority: 600,
          terminal: !0,
          restrict: "A",
          $$tlb: !0,
          link: function(n, r, i, o, a) {
            var s, u, c;
            n.$watch(i.ngIf, function(n) {
              n ? u || a(function(n, o) {
                u = o, n[n.length++] = t.createComment(" end ngIf: " + i.ngIf + " "), s = {
                  clone: n
                }, e.enter(n, r.parent(), r)
              }) : (c && (c.remove(), c = null), u && (u.$destroy(), u = null), s && (c = rt(s.clone), e.leave(c).then(function() {
                c = null
              }), s = null))
            })
          }
        }
      }],
      vo = ["$templateRequest", "$anchorScroll", "$animate", "$sce", function(e, t, n, r) {
        return {
          restrict: "ECA",
          priority: 400,
          terminal: !0,
          transclude: "element",
          controller: br.noop,
          compile: function(i, o) {
            var a = o.ngInclude || o.src,
              s = o.onload || "",
              u = o.autoscroll;
            return function(i, o, c, l, f) {
              var d, h, p, m = 0,
                g = function() {
                  h && (h.remove(), h = null), d && (d.$destroy(), d = null), p && (n.leave(p).then(function() {
                    h = null
                  }), h = p, p = null)
                };
              i.$watch(r.parseAsResourceUrl(a), function(r) {
                var a = function() {
                    !y(u) || u && !i.$eval(u) || t()
                  },
                  c = ++m;
                r ? (e(r, !0).then(function(e) {
                  if (c === m) {
                    var t = i.$new();
                    l.template = e, e = f(t, function(e) {
                      g(), n.enter(e, null, o).then(a)
                    }), d = t, p = e, d.$emit("$includeContentLoaded"), i.$eval(s)
                  }
                }, function() {
                  c === m && (g(), i.$emit("$includeContentError"))
                }), i.$emit("$includeContentRequested")) : (g(), l.template = null)
              })
            }
          }
        }
      }],
      yo = ["$compile", function(e) {
        return {
          restrict: "ECA",
          priority: -400,
          require: "ngInclude",
          link: function(r, i, o, a) {
            /SVG/.test(i[0].toString()) ? (i.empty(), e(ut(a.template, t).childNodes)(r, function(e) {
              i.append(e)
            }, n, n, i)) : (i.html(a.template), e(i.contents())(r))
          }
        }
      }],
      $o = Zn({
        priority: 450,
        compile: function() {
          return {
            pre: function(e, t, n) {
              e.$eval(n.ngInit)
            }
          }
        }
      }),
      bo = Zn({
        terminal: !0,
        priority: 1e3
      }),
      wo = ["$locale", "$interpolate", function(e, t) {
        var n = /{}/g;
        return {
          restrict: "EA",
          link: function(r, i, a) {
            var s = a.count,
              u = a.$attr.when && i.attr(a.$attr.when),
              c = a.offset || 0,
              l = r.$eval(u) || {},
              f = {},
              d = t.startSymbol(),
              h = t.endSymbol(),
              p = /^when(Minus)?(.+)$/;
            o(a, function(e, t) {
              p.test(t) && (l[hr(t.replace("when", "").replace("Minus", "-"))] = i.attr(a.$attr[t]))
            }), o(l, function(e, r) {
              f[r] = t(e.replace(n, d + s + "-" + c + h))
            }), r.$watch(function() {
              var t = parseFloat(r.$eval(s));
              return isNaN(t) ? "" : (t in l || (t = e.pluralCat(t - c)), f[t](r))
            }, function(e) {
              i.text(e)
            })
          }
        }
      }],
      xo = ["$parse", "$animate", function(e, a) {
        var s = r("ngRepeat"),
          u = function(e, t, n, r, i, o, a) {
            e[n] = r, i && (e[i] = o), e.$index = t, e.$first = 0 === t, e.$last = t === a - 1, e.$middle = !(e.$first || e.$last), e.$odd = !(e.$even = 0 === (1 & t))
          };
        return {
          restrict: "A",
          multiElement: !0,
          transclude: "element",
          priority: 1e3,
          terminal: !0,
          $$tlb: !0,
          compile: function(r, c) {
            var l = c.ngRepeat,
              f = t.createComment(" end ngRepeat: " + l + " "),
              d = l.match(/^\s*([\s\S]+?)\s+in\s+([\s\S]+?)(?:\s+as\s+([\s\S]+?))?(?:\s+track\s+by\s+([\s\S]+?))?\s*$/);
            if (!d) throw s("iexp", l);
            var h = d[1],
              p = d[2],
              m = d[3],
              g = d[4],
              d = h.match(/^(?:([\$\w]+)|\(([\$\w]+)\s*,\s*([\$\w]+)\))$/);
            if (!d) throw s("iidexp", h);
            var v = d[3] || d[1],
              y = d[2];
            if (m && (!/^[$a-zA-Z_][$a-zA-Z0-9_]*$/.test(m) || /^(null|undefined|this|\$index|\$first|\$middle|\$last|\$even|\$odd|\$parent)$/.test(m))) throw s("badident", m);
            var $, b, w, x, _ = {
              $id: Tt
            };
            return g ? $ = e(g) : (w = function(e, t) {
                return Tt(t)
              }, x = function(e) {
                return e
              }),
              function(e, t, r, c, d) {
                $ && (b = function(t, n, r) {
                  return y && (_[y] = t), _[v] = n, _.$index = r, $(e, _)
                });
                var h = Object.create(null);
                e.$watchCollection(p, function(r) {
                  var c, p, g, $, _, k, S, C, T, M, A = t[0],
                    E = Object.create(null);
                  if (m && (e[m] = r), i(r)) C = r, p = b || w;
                  else {
                    p = b || x, C = [];
                    for (M in r) r.hasOwnProperty(M) && "$" != M.charAt(0) && C.push(M);
                    C.sort()
                  }
                  for ($ = C.length, M = Array($), c = 0; $ > c; c++)
                    if (_ = r === C ? c : C[c], k = r[_], S = p(_, k, c), h[S]) T = h[S], delete h[S], E[S] = T, M[c] = T;
                    else {
                      if (E[S]) throw o(M, function(e) {
                        e && e.scope && (h[e.id] = e)
                      }), s("dupes", l, S, q(k));
                      M[c] = {
                        id: S,
                        scope: n,
                        clone: n
                      }, E[S] = !0
                    }
                  for (g in h) {
                    if (T = h[g], S = rt(T.clone), a.leave(S), S[0].parentNode)
                      for (c = 0, p = S.length; p > c; c++) S[c].$$NG_REMOVED = !0;
                    T.scope.$destroy()
                  }
                  for (c = 0; $ > c; c++)
                    if (_ = r === C ? c : C[c], k = r[_], T = M[c], T.scope) {
                      g = A;
                      do g = g.nextSibling; while (g && g.$$NG_REMOVED);
                      T.clone[0] != g && a.move(rt(T.clone), null, cr(A)), A = T.clone[T.clone.length - 1], u(T.scope, c, v, k, y, _, $)
                    } else d(function(e, t) {
                      T.scope = t;
                      var n = f.cloneNode(!1);
                      e[e.length++] = n, a.enter(e, null, cr(A)), A = n, T.clone = e, E[T.id] = T, u(T.scope, c, v, k, y, _, $)
                    });
                  h = E
                })
              }
          }
        }
      }],
      _o = ["$animate", function(e) {
        return {
          restrict: "A",
          multiElement: !0,
          link: function(t, n, r) {
            t.$watch(r.ngShow, function(t) {
              e[t ? "removeClass" : "addClass"](n, "ng-hide")
            })
          }
        }
      }],
      ko = ["$animate", function(e) {
        return {
          restrict: "A",
          multiElement: !0,
          link: function(t, n, r) {
            t.$watch(r.ngHide, function(t) {
              e[t ? "addClass" : "removeClass"](n, "ng-hide")
            })
          }
        }
      }],
      So = Zn(function(e, t, n) {
        e.$watch(n.ngStyle, function(e, n) {
          n && e !== n && o(n, function(e, n) {
            t.css(n, "")
          }), e && t.css(e)
        }, !0)
      }),
      Co = ["$animate", function(e) {
        return {
          restrict: "EA",
          require: "ngSwitch",
          controller: ["$scope", function() {
            this.cases = {}
          }],
          link: function(n, r, i, a) {
            var s = [],
              u = [],
              c = [],
              l = [],
              f = function(e, t) {
                return function() {
                  e.splice(t, 1)
                }
              };
            n.$watch(i.ngSwitch || i.on, function(n) {
              var r, i;
              for (r = 0, i = c.length; i > r; ++r) e.cancel(c[r]);
              for (r = c.length = 0, i = l.length; i > r; ++r) {
                var d = rt(u[r].clone);
                l[r].$destroy(), (c[r] = e.leave(d)).then(f(c, r))
              }
              u.length = 0, l.length = 0, (s = a.cases["!" + n] || a.cases["?"]) && o(s, function(n) {
                n.transclude(function(r, i) {
                  l.push(i);
                  var o = n.element;
                  r[r.length++] = t.createComment(" end ngSwitchWhen: "), u.push({
                    clone: r
                  }), e.enter(r, o.parent(), o)
                })
              })
            })
          }
        }
      }],
      To = Zn({
        transclude: "element",
        priority: 1200,
        require: "^ngSwitch",
        multiElement: !0,
        link: function(e, t, n, r, i) {
          r.cases["!" + n.ngSwitchWhen] = r.cases["!" + n.ngSwitchWhen] || [], r.cases["!" + n.ngSwitchWhen].push({
            transclude: i,
            element: t
          })
        }
      }),
      Mo = Zn({
        transclude: "element",
        priority: 1200,
        require: "^ngSwitch",
        multiElement: !0,
        link: function(e, t, n, r, i) {
          r.cases["?"] = r.cases["?"] || [], r.cases["?"].push({
            transclude: i,
            element: t
          })
        }
      }),
      Ao = Zn({
        restrict: "EAC",
        link: function(e, t, n, i, o) {
          if (!o) throw r("ngTransclude")("orphan", L(t));
          o(function(e) {
            t.empty(), t.append(e)
          })
        }
      }),
      Eo = ["$templateCache", function(e) {
        return {
          restrict: "E",
          terminal: !0,
          compile: function(t, n) {
            "text/ng-template" == n.type && e.put(n.id, t[0].text)
          }
        }
      }],
      Do = r("ngOptions"),
      Oo = g({
        restrict: "A",
        terminal: !0
      }),
      No = ["$compile", "$parse", function(e, r) {
        var i = /^\s*([\s\S]+?)(?:\s+as\s+([\s\S]+?))?(?:\s+group\s+by\s+([\s\S]+?))?\s+for\s+(?:([\$\w][\$\w]*)|(?:\(\s*([\$\w][\$\w]*)\s*,\s*([\$\w][\$\w]*)\s*\)))\s+in\s+([\s\S]+?)(?:\s+track\s+by\s+([\s\S]+?))?$/,
          s = {
            $setViewValue: p
          };
        return {
          restrict: "E",
          require: ["select", "?ngModel"],
          controller: ["$element", "$scope", "$attrs", function(e, t, n) {
            var r, i = this,
              o = {},
              a = s;
            i.databound = n.ngModel, i.init = function(e, t, n) {
              a = e, r = n
            }, i.addOption = function(t, n) {
              tt(t, '"option value"'), o[t] = !0, a.$viewValue == t && (e.val(t), r.parent() && r.remove()), n[0].hasAttribute("selected") && (n[0].selected = !0)
            }, i.removeOption = function(e) {
              this.hasOption(e) && (delete o[e], a.$viewValue == e && this.renderUnknownOption(e))
            }, i.renderUnknownOption = function(t) {
              t = "? " + Tt(t) + " ?", r.val(t), e.prepend(r), e.val(t), r.prop("selected", !0)
            }, i.hasOption = function(e) {
              return o.hasOwnProperty(e)
            }, t.$on("$destroy", function() {
              i.renderUnknownOption = p
            })
          }],
          link: function(s, u, c, l) {
            function f(e, t, n, r) {
              n.$render = function() {
                var e = n.$viewValue;
                r.hasOption(e) ? (k.parent() && k.remove(), t.val(e), "" === e && m.prop("selected", !0)) : v(e) && m ? t.val("") : r.renderUnknownOption(e)
              }, t.on("change", function() {
                e.$apply(function() {
                  k.parent() && k.remove(), n.$setViewValue(t.val())
                })
              })
            }

            function d(e, t, n) {
              var r;
              n.$render = function() {
                var e = new Mt(n.$viewValue);
                o(t.find("option"), function(t) {
                  t.selected = y(e.get(t.value))
                })
              }, e.$watch(function() {
                P(r, n.$viewValue) || (r = N(n.$viewValue), n.$render())
              }), t.on("change", function() {
                e.$apply(function() {
                  var e = [];
                  o(t.find("option"), function(t) {
                    t.selected && e.push(t.value)
                  }), n.$setViewValue(e)
                })
              })
            }

            function h(t, o, s) {
              function u() {
                w || (t.$$postDigest(c), w = !0)
              }

              function c() {
                w = !1;
                var e, n, r, i, u, c = {
                    "": []
                  },
                  l = [""];
                r = s.$modelValue, i = v(t) || [];
                var $, C, T, M = h ? a(i) : i;
                if (C = {}, T = !1, g)
                  if (n = s.$modelValue, k && _r(n))
                    for (T = new Mt([]), e = {}, u = 0; u < n.length; u++) e[d] = n[u], T.put(k(t, e), n[u]);
                  else T = new Mt(n);
                u = T;
                var A, E;
                for (T = 0; $ = M.length, $ > T; T++) {
                  if (n = T, h) {
                    if (n = M[T], "$" === n.charAt(0)) continue;
                    C[h] = n
                  }
                  C[d] = i[n], e = p(t, C) || "", (n = c[e]) || (n = c[e] = [], l.push(e)), g ? e = y(u.remove(k ? k(t, C) : m(t, C))) : (k ? (e = {}, e[d] = r, e = k(t, e) === k(t, C)) : e = r === m(t, C), u = u || e), A = f(t, C), A = y(A) ? A : "", n.push({
                    id: k ? k(t, C) : h ? M[T] : T,
                    label: A,
                    selected: e
                  })
                }
                for (g || (b || null === r ? c[""].unshift({
                    id: "",
                    label: "",
                    selected: !u
                  }) : u || c[""].unshift({
                    id: "?",
                    label: "",
                    selected: !0
                  })), C = 0, M = l.length; M > C; C++) {
                  for (e = l[C], n = c[e], S.length <= C ? (r = {
                      element: _.clone().attr("label", e),
                      label: n.label
                    }, i = [r], S.push(i), o.append(r.element)) : (i = S[C], r = i[0], r.label != e && r.element.attr("label", r.label = e)), A = null, T = 0, $ = n.length; $ > T; T++) e = n[T], (u = i[T + 1]) ? (A = u.element, u.label !== e.label && A.text(u.label = e.label), u.id !== e.id && A.val(u.id = e.id), A[0].selected !== e.selected && (A.prop("selected", u.selected = e.selected), ur && A.prop("selected", u.selected))) : ("" === e.id && b ? E = b : (E = x.clone()).val(e.id).prop("selected", e.selected).attr("selected", e.selected).text(e.label), i.push({
                    element: E,
                    label: e.label,
                    id: e.id,
                    selected: e.selected
                  }), A ? A.after(E) : r.element.append(E), A = E);
                  for (T++; i.length > T;) i.pop().element.remove()
                }
                for (; S.length > C;) S.pop()[0].element.remove()
              }
              var l;
              if (!(l = $.match(i))) throw Do("iexp", $, L(o));
              var f = r(l[2] || l[1]),
                d = l[4] || l[6],
                h = l[5],
                p = r(l[3] || ""),
                m = r(l[2] ? l[1] : d),
                v = r(l[7]),
                k = l[8] ? r(l[8]) : null,
                S = [
                  [{
                    element: o,
                    label: ""
                  }]
                ];
              b && (e(b)(t), b.removeClass("ng-scope"), b.remove()), o.empty(), o.on("change", function() {
                t.$apply(function() {
                  var e, r, i, a, u, l, f, p, y = v(t) || [],
                    $ = {};
                  if (g) {
                    for (i = [], u = 0, f = S.length; f > u; u++)
                      for (e = S[u], a = 1, l = e.length; l > a; a++)
                        if ((r = e[a].element)[0].selected) {
                          if (r = r.val(), h && ($[h] = r), k)
                            for (p = 0; p < y.length && ($[d] = y[p], k(t, $) != r); p++);
                          else $[d] = y[r];
                          i.push(m(t, $))
                        }
                  } else if (r = o.val(), "?" == r) i = n;
                  else if ("" === r) i = null;
                  else if (k) {
                    for (p = 0; p < y.length; p++)
                      if ($[d] = y[p], k(t, $) == r) {
                        i = m(t, $);
                        break
                      }
                  } else $[d] = y[r], h && ($[h] = r), i = m(t, $);
                  s.$setViewValue(i), c()
                })
              }), s.$render = c, t.$watchCollection(v, u), g && t.$watchCollection(function() {
                return s.$modelValue
              }, u)
            }
            if (l[1]) {
              var p = l[0];
              l = l[1];
              var m, g = c.multiple,
                $ = c.ngOptions,
                b = !1,
                w = !1,
                x = cr(t.createElement("option")),
                _ = cr(t.createElement("optgroup")),
                k = x.clone();
              c = 0;
              for (var S = u.children(), C = S.length; C > c; c++)
                if ("" === S[c].value) {
                  m = b = S.eq(c);
                  break
                }
              p.init(l, b, k), g && (l.$isEmpty = function(e) {
                return !e || 0 === e.length
              }), $ ? h(s, u, l) : g ? d(s, u, l) : f(s, u, l, p)
            }
          }
        }
      }],
      Po = ["$interpolate", function(e) {
        var t = {
          addOption: p,
          removeOption: p
        };
        return {
          restrict: "E",
          priority: 100,
          compile: function(n, r) {
            if (v(r.value)) {
              var i = e(n.text(), !0);
              i || r.$set("value", n.text())
            }
            return function(e, n, r) {
              var o = n.parent(),
                a = o.data("$selectController") || o.parent().data("$selectController");
              a && a.databound ? n.prop("selected", !1) : a = t, i ? e.$watch(i, function(e, t) {
                r.$set("value", e), t !== e && a.removeOption(t), a.addOption(e, n)
              }) : a.addOption(r.value, n), n.on("$destroy", function() {
                a.removeOption(r.value)
              })
            }
          }
        }
      }],
      jo = g({
        restrict: "E",
        terminal: !1
      });
    e.angular.bootstrap ? console.log("WARNING: Tried to load angular more than once.") : (K(), ot(br), cr(t).ready(function() {
      W(t, G)
    }))
  }(window, document), !window.angular.$$csp() && window.angular.element(document).find("head").prepend('<style type="text/css">@charset "UTF-8";[ng\\:cloak],[ng-cloak],[data-ng-cloak],[x-ng-cloak],.ng-cloak,.x-ng-cloak,.ng-hide:not(.ng-animate){display:none !important;}ng\\:form{display:block;}</style>'),
  function(e, t, n) {
    "use strict";
    t.module("ngAnimate", ["ng"]).directive("ngAnimateChildren", function() {
      return function(e, n, r) {
        r = r.ngAnimateChildren, t.isString(r) && 0 === r.length ? n.data("$$ngAnimateChildren", !0) : e.$watch(r, function(e) {
          n.data("$$ngAnimateChildren", !!e)
        })
      }
    }).factory("$$animateReflow", ["$$rAF", "$document", function(e) {
      return function(t) {
        return e(function() {
          t()
        })
      }
    }]).config(["$provide", "$animateProvider", function(r, i) {
      function o(e) {
        for (var t = 0; t < e.length; t++) {
          var n = e[t];
          if (1 == n.nodeType) return n
        }
      }

      function a(e, t) {
        return o(e) == o(t)
      }
      var s = t.noop,
        u = t.forEach,
        c = i.$$selectors,
        l = t.isArray,
        f = {
          running: !0
        };
      r.decorator("$animate", ["$delegate", "$$q", "$injector", "$sniffer", "$rootElement", "$$asyncCallback", "$rootScope", "$document", "$templateRequest", function(e, n, r, d, h, p, m, g, v) {
        function y(e, t) {
          var n = e.data("$$ngAnimateState") || {};
          return t && (n.running = !0, n.structural = !0, e.data("$$ngAnimateState", n)), n.disabled || n.running && n.structural
        }

        function $(e) {
          var t, r = n.defer();
          return r.promise.$$cancelFn = function() {
            t && t()
          }, m.$$postDigest(function() {
            t = e(function() {
              r.resolve()
            })
          }), r.promise
        }

        function b(e, n, r) {
          r = r || {};
          var i = {};
          u(n.add, function(e) {
            e && e.length && (i[e] = i[e] || 0, i[e]++)
          }), u(n.remove, function(e) {
            e && e.length && (i[e] = i[e] || 0, i[e]--)
          });
          var o = [];
          u(r, function(e, t) {
            u(t.split(" "), function(t) {
              o[t] = e
            })
          });
          var a = [],
            s = [];
          return u(i, function(n, r) {
            var i = t.$$hasClass(e[0], r),
              u = o[r] || {};
            0 > n ? (i || "addClass" == u.event) && s.push(r) : n > 0 && (i && "removeClass" != u.event || a.push(r))
          }), 0 < a.length + s.length && [a.join(" "), s.join(" ")]
        }

        function w(e) {
          if (e) {
            var t = [],
              n = {};
            e = e.substr(1).split("."), (d.transitions || d.animations) && t.push(r.get(c[""]));
            for (var i = 0; i < e.length; i++) {
              var o = e[i],
                a = c[o];
              a && !n[o] && (t.push(r.get(a)), n[o] = !0)
            }
            return t
          }
        }

        function x(e, t, n) {
          function r(e, t) {
            var n = e[t],
              r = e["before" + t.charAt(0).toUpperCase() + t.substr(1)];
            return n || r ? ("leave" == t && (r = n, n = null), $.push({
              event: t,
              fn: n
            }), g.push({
              event: t,
              fn: r
            }), !0) : void 0
          }

          function i(t, r, i) {
            var o = [];
            u(t, function(e) {
              e.fn && o.push(e)
            });
            var l = 0;
            u(o, function(t, u) {
              var f = function() {
                e: {
                  if (r) {
                    if ((r[u] || s)(), ++l < o.length) break e;
                    r = null
                  }
                  i()
                }
              };
              switch (t.event) {
                case "setClass":
                  r.push(t.fn(e, a, c, f));
                  break;
                case "addClass":
                  r.push(t.fn(e, a || n, f));
                  break;
                case "removeClass":
                  r.push(t.fn(e, c || n, f));
                  break;
                default:
                  r.push(t.fn(e, f))
              }
            }), r && 0 === r.length && i()
          }
          var o = e[0];
          if (o) {
            var a, c;
            l(n) && (a = n[0], c = n[1], a ? c ? n = a + " " + c : (n = a, t = "addClass") : (n = c, t = "removeClass"));
            var f = "setClass" == t,
              d = f || "addClass" == t || "removeClass" == t,
              h = e.attr("class") + " " + n;
            if (E(h)) {
              var p = s,
                m = [],
                g = [],
                v = s,
                y = [],
                $ = [],
                h = (" " + h).replace(/\s+/g, ".");
              return u(w(h), function(e) {
                !r(e, t) && f && (r(e, "addClass"), r(e, "removeClass"))
              }), {
                node: o,
                event: t,
                className: n,
                isClassBased: d,
                isSetClassOperation: f,
                before: function(e) {
                  p = e, i(g, m, function() {
                    p = s, e()
                  })
                },
                after: function(e) {
                  v = e, i($, y, function() {
                    v = s, e()
                  })
                },
                cancel: function() {
                  m && (u(m, function(e) {
                    (e || s)(!0)
                  }), p(!0)), y && (u(y, function(e) {
                    (e || s)(!0)
                  }), v(!0))
                }
              }
            }
          }
        }

        function _(e, n, r, i, o, a, c) {
          function l(t) {
            var i = "$animate:" + t;
            v && v[i] && 0 < v[i].length && p(function() {
              r.triggerHandler(i, {
                event: e,
                className: n
              })
            })
          }

          function f() {
            l("before")
          }

          function d() {
            l("after")
          }

          function h() {
            h.hasBeenRun || (h.hasBeenRun = !0, a())
          }

          function m() {
            if (!m.hasBeenRun) {
              m.hasBeenRun = !0;
              var t = r.data("$$ngAnimateState");
              t && (g && g.isClassBased ? S(r, n) : (p(function() {
                var t = r.data("$$ngAnimateState") || {};
                _ == t.index && S(r, n, e)
              }), r.data("$$ngAnimateState", t))), l("close"), c()
            }
          }
          var g = x(r, e, n);
          if (!g) return h(), f(), d(), m(), s;
          e = g.event, n = g.className;
          var v = t.element._data(g.node),
            v = v && v.events;
          if (i || (i = o ? o.parent() : r.parent()), C(r, i)) return h(), f(), d(), m(), s;
          i = r.data("$$ngAnimateState") || {};
          var y = i.active || {},
            $ = i.totalActive || 0,
            b = i.last;
          if (o = !1, $ > 0) {
            if ($ = [], g.isClassBased) "setClass" == b.event ? ($.push(b), S(r, n)) : y[n] && (w = y[n], w.event == e ? o = !0 : ($.push(w), S(r, n)));
            else if ("leave" == e && y["ng-leave"]) o = !0;
            else {
              for (var w in y) $.push(y[w]);
              i = {}, S(r, !0)
            }
            0 < $.length && u($, function(e) {
              e.cancel()
            })
          }
          if (!g.isClassBased || g.isSetClassOperation || o || (o = "addClass" == e == r.hasClass(n)), o) return h(), f(), d(), l("close"), c(), s;
          y = i.active || {}, $ = i.totalActive || 0, "leave" == e && r.one("$destroy", function(e) {
            e = t.element(this);
            var n = e.data("$$ngAnimateState");
            n && (n = n.active["ng-leave"]) && (n.cancel(), S(e, "ng-leave"))
          }), r.addClass("ng-animate");
          var _ = M++;
          return $++, y[n] = g, r.data("$$ngAnimateState", {
            last: g,
            active: y,
            index: _,
            totalActive: $
          }), f(), g.before(function(t) {
            var i = r.data("$$ngAnimateState");
            t = t || !i || !i.active[n] || g.isClassBased && i.active[n].event != e, h(), !0 === t ? m() : (d(), g.after(m))
          }), g.cancel
        }

        function k(e) {
          (e = o(e)) && (e = t.isFunction(e.getElementsByClassName) ? e.getElementsByClassName("ng-animate") : e.querySelectorAll(".ng-animate"), u(e, function(e) {
            e = t.element(e), (e = e.data("$$ngAnimateState")) && e.active && u(e.active, function(e) {
              e.cancel()
            })
          }))
        }

        function S(e, t) {
          if (a(e, h)) f.disabled || (f.running = !1, f.structural = !1);
          else if (t) {
            var n = e.data("$$ngAnimateState") || {},
              r = !0 === t;
            !r && n.active && n.active[t] && (n.totalActive--, delete n.active[t]), (r || !n.totalActive) && (e.removeClass("ng-animate"), e.removeData("$$ngAnimateState"))
          }
        }

        function C(e, n) {
          if (f.disabled) return !0;
          if (a(e, h)) return f.running;
          var r, i, o;
          do {
            if (0 === n.length) break;
            var s = a(n, h),
              u = s ? f : n.data("$$ngAnimateState") || {};
            if (u.disabled) return !0;
            s && (o = !0), !1 !== r && (s = n.data("$$ngAnimateChildren"), t.isDefined(s) && (r = s)), i = i || u.running || u.last && !u.last.isClassBased
          } while (n = n.parent());
          return !o || !r && i
        }
        h.data("$$ngAnimateState", f);
        var T = m.$watch(function() {
            return v.totalPendingRequests
          }, function(e) {
            0 === e && (T(), m.$$postDigest(function() {
              m.$$postDigest(function() {
                f.running = !1
              })
            }))
          }),
          M = 0,
          A = i.classNameFilter(),
          E = A ? function(e) {
            return A.test(e)
          } : function() {
            return !0
          };
        return {
          enter: function(n, r, i) {
            return n = t.element(n), r = r && t.element(r), i = i && t.element(i), y(n, !0), e.enter(n, r, i), $(function(e) {
              return _("enter", "ng-enter", t.element(o(n)), r, i, s, e)
            })
          },
          leave: function(n) {
            return n = t.element(n), k(n), y(n, !0), this.enabled(!1, n), $(function(r) {
              return _("leave", "ng-leave", t.element(o(n)), null, null, function() {
                e.leave(n)
              }, r)
            })
          },
          move: function(n, r, i) {
            return n = t.element(n), r = r && t.element(r), i = i && t.element(i), k(n), y(n, !0), e.move(n, r, i), $(function(e) {
              return _("move", "ng-move", t.element(o(n)), r, i, s, e)
            })
          },
          addClass: function(e, t) {
            return this.setClass(e, t, [])
          },
          removeClass: function(e, t) {
            return this.setClass(e, [], t)
          },
          setClass: function(n, r, i) {
            if (n = t.element(n), n = t.element(o(n)), y(n)) return e.setClass(n, r, i);
            r = l(r) ? r : r.split(" "), i = l(i) ? i : i.split(" ");
            var a = n.data("$$animateClasses");
            return a ? (a.add = a.add.concat(r), a.remove = a.remove.concat(i), a.promise) : (n.data("$$animateClasses", a = {
              add: r,
              remove: i
            }), a.promise = $(function(t) {
              var r = n.data("$$animateClasses");
              n.removeData("$$animateClasses");
              var i = n.data("$$ngAnimateState") || {},
                o = b(n, r, i.active);
              return o ? _("setClass", o, n, null, null, function() {
                e.setClass(n, o[0], o[1])
              }, t) : t()
            }))
          },
          cancel: function(e) {
            e.$$cancelFn()
          },
          enabled: function(e, t) {
            switch (arguments.length) {
              case 2:
                if (e) S(t);
                else {
                  var n = t.data("$$ngAnimateState") || {};
                  n.disabled = !0, t.data("$$ngAnimateState", n)
                }
                break;
              case 1:
                f.disabled = !e;
                break;
              default:
                e = !f.disabled
            }
            return !!e
          }
        }
      }]), i.register("", ["$window", "$sniffer", "$timeout", "$$animateReflow", function(r, i, a, c) {
        function f(e, t) {
          M && M(), D.push(t), M = c(function() {
            u(D, function(e) {
              e()
            }), D = [], M = null, A = {}
          })
        }

        function d(e, n) {
          var r = o(e);
          e = t.element(r), P.push(e), r = Date.now() + n, N >= r || (a.cancel(O), N = r, O = a(function() {
            h(P), P = []
          }, n, !1))
        }

        function h(e) {
          u(e, function(e) {
            (e = e.data("$$ngAnimateCSS3Data")) && u(e.closeAnimationFns, function(e) {
              e()
            })
          })
        }

        function p(e, t) {
          var n = t ? A[t] : null;
          if (!n) {
            var i = 0,
              o = 0,
              a = 0,
              s = 0;
            u(e, function(e) {
              if (1 == e.nodeType) {
                e = r.getComputedStyle(e) || {}, i = Math.max(m(e[_ + "Duration"]), i), o = Math.max(m(e[_ + "Delay"]), o), s = Math.max(m(e[S + "Delay"]), s);
                var t = m(e[S + "Duration"]);
                t > 0 && (t *= parseInt(e[S + "IterationCount"], 10) || 1), a = Math.max(t, a)
              }
            }), n = {
              total: 0,
              transitionDelay: o,
              transitionDuration: i,
              animationDelay: s,
              animationDuration: a
            }, t && (A[t] = n)
          }
          return n
        }

        function m(e) {
          var n = 0;
          return e = t.isString(e) ? e.split(/\s*,\s*/) : [], u(e, function(e) {
            n = Math.max(parseFloat(e) || 0, n)
          }), n
        }

        function g(e, t, n) {
          e = 0 <= ["ng-enter", "ng-leave", "ng-move"].indexOf(n);
          var r, i = t.parent(),
            a = i.data("$$ngAnimateKey");
          a || (i.data("$$ngAnimateKey", ++E), a = E), r = a + "-" + o(t).getAttribute("class");
          var i = r + " " + n,
            a = A[i] ? ++A[i].total : 0,
            s = {};
          if (a > 0) {
            var u = n + "-stagger",
              s = r + " " + u;
            (r = !A[s]) && t.addClass(u), s = p(t, s), r && t.removeClass(u)
          }
          t.addClass(n);
          var u = t.data("$$ngAnimateCSS3Data") || {},
            c = p(t, i);
          return r = c.transitionDuration, c = c.animationDuration, e && 0 === r && 0 === c ? (t.removeClass(n), !1) : (n = e && r > 0, e = c > 0 && 0 < s.animationDelay && 0 === s.animationDuration, t.data("$$ngAnimateCSS3Data", {
            stagger: s,
            cacheKey: i,
            running: u.running || 0,
            itemIndex: a,
            blockTransition: n,
            closeAnimationFns: u.closeAnimationFns || []
          }), t = o(t), n && (t.style[_ + "Property"] = "none"), e && (t.style[S + "PlayState"] = "paused"), !0)
        }

        function v(e, t, n, r) {
          function i(e) {
            t.off(E, s), t.removeClass(l), t.removeClass(f), M && a.cancel(M), w(t, n), e = o(t);
            for (var r in h) e.style.removeProperty(h[r])
          }

          function s(e) {
            e.stopPropagation();
            var t = e.originalEvent || e;
            e = t.$manualTimeStamp || t.timeStamp || Date.now(), t = parseFloat(t.elapsedTime.toFixed(3)), Math.max(e - A, 0) >= x && t >= b && r()
          }
          var c = o(t);
          if (e = t.data("$$ngAnimateCSS3Data"), -1 != c.getAttribute("class").indexOf(n) && e) {
            e.blockTransition && (c.style[_ + "Property"] = "");
            var l = "",
              f = "";
            u(n.split(" "), function(e, t) {
              var n = (t > 0 ? " " : "") + e;
              l += n + "-active", f += n + "-pending"
            });
            var h = [],
              m = e.itemIndex,
              g = e.stagger,
              v = 0;
            if (m > 0) {
              v = 0, 0 < g.transitionDelay && 0 === g.transitionDuration && (v = g.transitionDelay * m);
              var y = 0;
              0 < g.animationDelay && 0 === g.animationDuration && (y = g.animationDelay * m, h.push(T + "animation-play-state")), v = Math.round(100 * Math.max(v, y)) / 100
            }
            v || t.addClass(l);
            var $ = p(t, e.cacheKey + " " + l),
              b = Math.max($.transitionDuration, $.animationDuration);
            if (0 !== b) {
              var m = Math.max($.transitionDelay, $.animationDelay),
                x = 1e3 * m;
              0 < h.length && (g = c.getAttribute("style") || "", ";" !== g.charAt(g.length - 1) && (g += ";"), c.setAttribute("style", g + " "));
              var M, A = Date.now(),
                E = C + " " + k,
                m = 1e3 * (v + 1.5 * (m + b));
              return v > 0 && (t.addClass(f), M = a(function() {
                M = null, t.addClass(l), t.removeClass(f), 0 < $.animationDuration && (c.style[S + "PlayState"] = "")
              }, 1e3 * v, !1)), t.on(E, s), e.closeAnimationFns.push(function() {
                i(), r()
              }), e.running++, d(t, m), i
            }
            t.removeClass(l), w(t, n), r()
          } else r()
        }

        function y(e, t, n, r) {
          return g(e, t, n, r) ? function(e) {
            e && w(t, n)
          } : void 0
        }

        function $(e, t, n, r) {
          return t.data("$$ngAnimateCSS3Data") ? v(e, t, n, r) : (w(t, n), void r())
        }

        function b(e, t, n, r) {
          var i = y(e, t, n);
          if (i) {
            var o = i;
            return f(t, function() {
                o = $(e, t, n, r)
              }),
              function(e) {
                (o || s)(e)
              }
          }
          r()
        }

        function w(e, t) {
          e.removeClass(t);
          var n = e.data("$$ngAnimateCSS3Data");
          n && (n.running && n.running--, n.running && 0 !== n.running || e.removeData("$$ngAnimateCSS3Data"))
        }

        function x(e, t) {
          var n = "";
          return e = l(e) ? e : e.split(/\s+/), u(e, function(e, r) {
            e && 0 < e.length && (n += (r > 0 ? " " : "") + e + t)
          }), n
        }
        var _, k, S, C, T = "";
        e.ontransitionend === n && e.onwebkittransitionend !== n ? (T = "-webkit-", _ = "WebkitTransition", k = "webkitTransitionEnd transitionend") : (_ = "transition", k = "transitionend"), e.onanimationend === n && e.onwebkitanimationend !== n ? (T = "-webkit-", S = "WebkitAnimation", C = "webkitAnimationEnd animationend") : (S = "animation", C = "animationend");
        var M, A = {},
          E = 0,
          D = [],
          O = null,
          N = 0,
          P = [];
        return {
          enter: function(e, t) {
            return b("enter", e, "ng-enter", t)
          },
          leave: function(e, t) {
            return b("leave", e, "ng-leave", t)
          },
          move: function(e, t) {
            return b("move", e, "ng-move", t)
          },
          beforeSetClass: function(e, t, n, r) {
            return t = x(n, "-remove") + " " + x(t, "-add"), (t = y("setClass", e, t)) ? (f(e, r), t) : void r()
          },
          beforeAddClass: function(e, t, n) {
            return (t = y("addClass", e, x(t, "-add"))) ? (f(e, n), t) : void n()
          },
          beforeRemoveClass: function(e, t, n) {
            return (t = y("removeClass", e, x(t, "-remove"))) ? (f(e, n), t) : void n()
          },
          setClass: function(e, t, n, r) {
            return n = x(n, "-remove"), t = x(t, "-add"), $("setClass", e, n + " " + t, r)
          },
          addClass: function(e, t, n) {
            return $("addClass", e, x(t, "-add"), n)
          },
          removeClass: function(e, t, n) {
            return $("removeClass", e, x(t, "-remove"), n)
          }
        }
      }])
    }])
  }(window, window.angular),
  function(e, t, n) {
    "use strict";

    function r(e) {
      var n = [];
      return u(n, t.noop).chars(e), n.join("")
    }

    function i(e) {
      var t = {};
      e = e.split(",");
      var n;
      for (n = 0; n < e.length; n++) t[e[n]] = !0;
      return t
    }

    function o(e, n) {
      function r(e, r, o, s) {
        if (r = t.lowercase(r), x[r])
          for (; y.last() && _[y.last()];) i("", y.last());
        w[r] && y.last() == r && i("", r), (s = b[r] || !!s) || y.push(r);
        var u = {};
        o.replace(d, function(e, t, n, r, i) {
          u[t] = a(n || r || i || "")
        }), n.start && n.start(r, u, s)
      }

      function i(e, r) {
        var i, o = 0;
        if (r = t.lowercase(r))
          for (o = y.length - 1; o >= 0 && y[o] != r; o--);
        if (o >= 0) {
          for (i = y.length - 1; i >= o; i--) n.end && n.end(y[i]);
          y.length = o
        }
      }
      "string" != typeof e && (e = null === e || "undefined" == typeof e ? "" : "" + e);
      var o, s, u, y = [],
        $ = e;
      for (y.last = function() {
          return y[y.length - 1]
        }; e;) {
        if (u = "", s = !0, y.last() && k[y.last()] ? (e = e.replace(new RegExp("(.*)<\\s*\\/\\s*" + y.last() + "[^>]*>", "i"), function(e, t) {
            return t = t.replace(m, "$1").replace(v, "$1"), n.chars && n.chars(a(t)), ""
          }), i("", y.last())) : (0 === e.indexOf("<!--") ? (o = e.indexOf("--", 4), o >= 0 && e.lastIndexOf("-->", o) === o && (n.comment && n.comment(e.substring(4, o)), e = e.substring(o + 3), s = !1)) : g.test(e) ? (o = e.match(g)) && (e = e.replace(o[0], ""), s = !1) : p.test(e) ? (o = e.match(f)) && (e = e.substring(o[0].length), o[0].replace(f, i), s = !1) : h.test(e) && ((o = e.match(l)) ? (o[4] && (e = e.substring(o[0].length), o[0].replace(l, r)), s = !1) : (u += "<", e = e.substring(1))), s && (o = e.indexOf("<"), u += 0 > o ? e : e.substring(0, o), e = 0 > o ? "" : e.substring(o), n.chars && n.chars(a(u)))), e == $) throw c("badparse", e);
        $ = e
      }
      i()
    }

    function a(e) {
      if (!e) return "";
      var t = A.exec(e);
      e = t[1];
      var n = t[3];
      return (t = t[2]) && (M.innerHTML = t.replace(/</g, "&lt;"), t = "textContent" in M ? M.textContent : M.innerText), e + t + n
    }

    function s(e) {
      return e.replace(/&/g, "&amp;").replace(y, function(e) {
        var t = e.charCodeAt(0);
        return e = e.charCodeAt(1), "&#" + (1024 * (t - 55296) + (e - 56320) + 65536) + ";"
      }).replace($, function(e) {
        return "&#" + e.charCodeAt(0) + ";"
      }).replace(/</g, "&lt;").replace(/>/g, "&gt;")
    }

    function u(e, n) {
      var r = !1,
        i = t.bind(e, e.push);
      return {
        start: function(e, o, a) {
          e = t.lowercase(e), !r && k[e] && (r = e), r || !0 !== S[e] || (i("<"), i(e), t.forEach(o, function(r, o) {
            var a = t.lowercase(o),
              u = "img" === e && "src" === a || "background" === a;
            !0 !== T[a] || !0 === C[a] && !n(r, u) || (i(" "), i(o), i('="'), i(s(r)), i('"'))
          }), i(a ? "/>" : ">"))
        },
        end: function(e) {
          e = t.lowercase(e), r || !0 !== S[e] || (i("</"), i(e), i(">")), e == r && (r = !1)
        },
        chars: function(e) {
          r || i(s(e))
        }
      }
    }
    var c = t.$$minErr("$sanitize"),
      l = /^<((?:[a-zA-Z])[\w:-]*)((?:\s+[\w:-]+(?:\s*=\s*(?:(?:"[^"]*")|(?:'[^']*')|[^>\s]+))?)*)\s*(\/?)\s*(>?)/,
      f = /^<\/\s*([\w:-]+)[^>]*>/,
      d = /([\w:-]+)(?:\s*=\s*(?:(?:"((?:[^"])*)")|(?:'((?:[^'])*)')|([^>\s]+)))?/g,
      h = /^</,
      p = /^<\//,
      m = /\x3c!--(.*?)--\x3e/g,
      g = /<!DOCTYPE([^>]*?)>/i,
      v = /<!\[CDATA\[(.*?)]]\x3e/g,
      y = /[\uD800-\uDBFF][\uDC00-\uDFFF]/g,
      $ = /([^\#-~| |!])/g,
      b = i("area,br,col,hr,img,wbr");
    e = i("colgroup,dd,dt,li,p,tbody,td,tfoot,th,thead,tr"), n = i("rp,rt");
    var w = t.extend({}, n, e),
      x = t.extend({}, e, i("address,article,aside,blockquote,caption,center,del,dir,div,dl,figure,figcaption,footer,h1,h2,h3,h4,h5,h6,header,hgroup,hr,ins,map,menu,nav,ol,pre,script,section,table,ul")),
      _ = t.extend({}, n, i("a,abbr,acronym,b,bdi,bdo,big,br,cite,code,del,dfn,em,font,i,img,ins,kbd,label,map,mark,q,ruby,rp,rt,s,samp,small,span,strike,strong,sub,sup,time,tt,u,var")),
      k = i("script,style"),
      S = t.extend({}, b, x, _, w),
      C = i("background,cite,href,longdesc,src,usemap"),
      T = t.extend({}, C, i("abbr,align,alt,axis,bgcolor,border,cellpadding,cellspacing,class,clear,color,cols,colspan,compact,coords,dir,face,headers,height,hreflang,hspace,ismap,lang,language,nohref,nowrap,rel,rev,rows,rowspan,rules,scope,scrolling,shape,size,span,start,summary,target,title,type,valign,value,vspace,width")),
      M = document.createElement("pre"),
      A = /^(\s*)([\s\S]*?)(\s*)$/;
    t.module("ngSanitize", []).provider("$sanitize", function() {
      this.$get = ["$$sanitizeUri", function(e) {
        return function(t) {
          var n = [];
          return o(t, u(n, function(t, n) {
            return !/^unsafe/.test(e(t, n))
          })), n.join("")
        }
      }]
    }), t.module("ngSanitize").filter("linky", ["$sanitize", function(e) {
      var n = /((ftp|https?):\/\/|(mailto:)?[A-Za-z0-9._%+-]+@)\S*[^\s.;,(){}<>"]/,
        i = /^mailto:/;
      return function(o, a) {
        function s(e) {
          e && h.push(r(e))
        }

        function u(e, n) {
          h.push("<a "), t.isDefined(a) && (h.push('target="'), h.push(a), h.push('" ')), h.push('href="'), h.push(e), h.push('">'), s(n), h.push("</a>")
        }
        if (!o) return o;
        for (var c, l, f, d = o, h = []; c = d.match(n);) l = c[0], c[2] == c[3] && (l = "mailto:" + l), f = c.index, s(d.substr(0, f)), u(l, c[0].replace(i, "")), d = d.substring(f + c[0].length);
        return s(d), e(h.join(""))
      }
    }])
  }(window, window.angular),
  function(e, t) {
    "use strict";

    function n(e, t, n) {
      r.directive(e, ["$parse", "$swipe", function(r, i) {
        var o = 75,
          a = .3,
          s = 30;
        return function(u, c, l) {
          function f(e) {
            if (!d) return !1;
            var n = Math.abs(e.y - d.y);
            return e = (e.x - d.x) * t, h && o > n && e > 0 && e > s && a > n / e
          }
          var d, h, p = r(l[e]);
          i.bind(c, {
            start: function(e) {
              d = e, h = !0
            },
            cancel: function() {
              h = !1
            },
            end: function(e, t) {
              f(e) && u.$apply(function() {
                c.triggerHandler(n), p(u, {
                  $event: t
                })
              })
            }
          })
        }
      }])
    }
    var r = t.module("ngTouch", []);
    r.factory("$swipe", [function() {
      function e(e) {
        var t = e.touches && e.touches.length ? e.touches : [e];
        return e = e.changedTouches && e.changedTouches[0] || e.originalEvent && e.originalEvent.changedTouches && e.originalEvent.changedTouches[0] || t[0].originalEvent || t[0], {
          x: e.clientX,
          y: e.clientY
        }
      }
      return {
        bind: function(t, n) {
          var r, i, o, a, s = !1;
          t.on("touchstart mousedown", function(t) {
            o = e(t), s = !0, i = r = 0, a = o, n.start && n.start(o, t)
          }), t.on("touchcancel", function(e) {
            s = !1, n.cancel && n.cancel(e)
          }), t.on("touchmove mousemove", function(t) {
            if (s && o) {
              var u = e(t);
              r += Math.abs(u.x - a.x), i += Math.abs(u.y - a.y), a = u, 10 > r && 10 > i || (i > r ? (s = !1, n.cancel && n.cancel(t)) : (t.preventDefault(), n.move && n.move(u, t)))
            }
          }), t.on("touchend mouseup", function(t) {
            s && (s = !1, n.end && n.end(e(t), t))
          })
        }
      }
    }]), r.config(["$provide", function(e) {
      e.decorator("ngClickDirective", ["$delegate", function(e) {
        return e.shift(), e
      }])
    }]), r.directive("ngClick", ["$parse", "$timeout", "$rootElement", function(e, n, r) {
      function i(e, t, n) {
        for (var r = 0; r < e.length; r += 2)
          if (Math.abs(e[r] - t) < f && Math.abs(e[r + 1] - n) < f) return e.splice(r, r + 2), !0;
        return !1
      }

      function o(e) {
        if (!(Date.now() - s > l)) {
          var t = e.touches && e.touches.length ? e.touches : [e],
            n = t[0].clientX,
            t = t[0].clientY;
          1 > n && 1 > t || c && c[0] === n && c[1] === t || (c && (c = null), "label" === e.target.tagName.toLowerCase() && (c = [n, t]), i(u, n, t) || (e.stopPropagation(), e.preventDefault(), e.target && e.target.blur()))
        }
      }

      function a(e) {
        e = e.touches && e.touches.length ? e.touches : [e];
        var t = e[0].clientX,
          r = e[0].clientY;
        u.push(t, r), n(function() {
          for (var e = 0; e < u.length; e += 2)
            if (u[e] == t && u[e + 1] == r) {
              u.splice(e, e + 2);
              break
            }
        }, l, !1)
      }
      var s, u, c, l = 2500,
        f = 25,
        d = "ng-click-active";
      return function(n, c, l) {
        function f() {
          y = !1, c.removeClass(d)
        }
        var h, p, m, g, v = e(l.ngClick),
          y = !1;
        c.on("touchstart", function(e) {
          y = !0, h = e.target ? e.target : e.srcElement, 3 == h.nodeType && (h = h.parentNode), c.addClass(d), p = Date.now(), e = e.touches && e.touches.length ? e.touches : [e], e = e[0].originalEvent || e[0], m = e.clientX, g = e.clientY
        }), c.on("touchmove", function() {
          f()
        }), c.on("touchcancel", function() {
          f()
        }), c.on("touchend", function(e) {
          var n = Date.now() - p,
            d = e.changedTouches && e.changedTouches.length ? e.changedTouches : e.touches && e.touches.length ? e.touches : [e],
            v = d[0].originalEvent || d[0],
            d = v.clientX,
            v = v.clientY,
            $ = Math.sqrt(Math.pow(d - m, 2) + Math.pow(v - g, 2));
          y && 750 > n && 12 > $ && (u || (r[0].addEventListener("click", o, !0), r[0].addEventListener("touchstart", a, !0), u = []), s = Date.now(), i(u, d, v), h && h.blur(), t.isDefined(l.disabled) && !1 !== l.disabled || c.triggerHandler("click", [e])), f()
        }), c.onclick = function() {}, c.on("click", function(e, t) {
          n.$apply(function() {
            v(n, {
              $event: t || e
            })
          })
        }), c.on("mousedown", function() {
          c.addClass(d)
        }), c.on("mousemove mouseup", function() {
          c.removeClass(d)
        })
      }
    }]), n("ngSwipeLeft", -1, "swipeleft"), n("ngSwipeRight", 1, "swiperight")
  }(window, window.angular), angular.module("ngLocale", [], ["$provide", function(e) {
    function t(e) {
      e += "";
      var t = e.indexOf(".");
      return -1 == t ? 0 : e.length - t - 1
    }

    function n(e, n) {
      var r = n;
      void 0 === r && (r = Math.min(t(e), 3));
      var i = Math.pow(10, r),
        o = (e * i | 0) % i;
      return {
        v: r,
        f: o
      }
    }

    function r(e, t) {
      if (0 === t) return {
        w: 0,
        t: 0
      };
      for (; t % 10 === 0;) t /= 10, e--;
      return {
        w: e,
        t: t
      }
    }
    var i = {
      ZERO: "zero",
      ONE: "one",
      TWO: "two",
      FEW: "few",
      MANY: "many",
      OTHER: "other"
    };
    e.value("$locale", {
      TELAS: {
        eventos: {
          confirm: {
            conflito_data: {
              autorizar: "Autorizar mesmo assim. Cuidado! Haver\xe1 mais de uma reserva no mesmo local, data e hor\xe1rio",
              lista_espera: "Colocar Reserva na Lista de Espera",
              clone: "Reservar \xe1reas dispon\xedvels, e inserir na lista de espera as indispon\xedveis (em outra reserva)",
              cancelar: "Cancelar o evento e liberar todas as \xe1reas",
              cancelar_parcial: "Cancelar o evento parcialmente, mantendo apenas as areas que n\xe3o podem mais serem canceladas"
            }
          }
        },
        votacoes: {
          form: {
            placeholders: {
              pergunta_titulo: "Ex.: Cor do Blindex",
              pergunta_descricao: "Ex.: Definir a cor do Blindex para...",
              opcoes: ["Ex.: Branco", "Ex.: Azul", "Ex.: Verde", "Ex.: Preto", "Ex.: Dourado", "Ex.: Marrom", "Ex.: Roxo"]
            }
          }
        },
        ocorrencia: {
          timeline: {
            entry_remove_messages: {
              destroying: "removendo",
              destroyed: "removido"
            }
          }
        }
      },
      MODELS: {
        evento: {
          solicitacao: {
            humanized_tipo: {
              autorizacao: "autoriza\xe7\xe3o",
              alteracao: "altera\xe7\xe3o",
              cancelamento: "cancelamento"
            }
          }
        },
        ocorrencia: {
          notificacao: {
            estado: {
              waiting_to_send: "Aguardando envio",
              sended: "Enviado",
              readed: "Lido"
            }
          },
          registro: {
            estado: {
              pending: "pendente",
              closed: "resolvida"
            },
            tipo: {
              complain: "reclama\xe7\xe3o",
              suggestion: "sugest\xe3o",
              compliment: "elogio",
              request: "requisi\xe7\xe3o",
              safety: "seguran\xe7a",
              lost_found: "achados e perdidos",
              other: "outros"
            }
          }
        }
      },
      DATETIME_FORMATS: {
        AMPMS: ["AM", "PM"],
        DAY: ["domingo", "segunda-feira", "ter\xe7a-feira", "quarta-feira", "quinta-feira", "sexta-feira", "s\xe1bado"],
        MONTH: ["janeiro", "fevereiro", "mar\xe7o", "abril", "maio", "junho", "julho", "agosto", "setembro", "outubro", "novembro", "dezembro"],
        SHORTDAY: ["dom", "seg", "ter", "qua", "qui", "sex", "s\xe1b"],
        SHORTMONTH: ["jan", "fev", "mar", "abr", "mai", "jun", "jul", "ago", "set", "out", "nov", "dez"],
        fullDate: "EEEE, d 'de' MMMM 'de' y",
        longDate: "d 'de' MMMM 'de' y",
        medium: "dd/MM/y HH:mm:ss",
        mediumDate: "dd/MM/y",
        mediumTime: "HH:mm:ss",
        "short": "dd/MM/yy HH:mm",
        shortDate: "dd/MM/yy",
        shortTime: "HH:mm",
        day_month: "dd/MM"
      },
      NUMBER_FORMATS: {
        CURRENCY_SYM: "R$",
        DECIMAL_SEP: ",",
        GROUP_SEP: ".",
        PATTERNS: [{
          gSize: 3,
          lgSize: 3,
          macFrac: 0,
          maxFrac: 3,
          minFrac: 0,
          minInt: 1,
          negPre: "-",
          negSuf: "",
          posPre: "",
          posSuf: ""
        }, {
          gSize: 3,
          lgSize: 3,
          macFrac: 0,
          maxFrac: 2,
          minFrac: 2,
          minInt: 1,
          negPre: "\xa4-",
          negSuf: "",
          posPre: "\xa4",
          posSuf: ""
        }]
      },
      id: "pt-br",
      pluralCat: function(e, t) {
        var o = 0 | e,
          a = n(e, t),
          s = r(a.v, a.f);
        return 1 == o && 0 == a.v || 0 == o && 1 == s.t ? i.ONE : i.OTHER
      }
    })
  }]), ! function() {
    "use strict";

    function e(e, t) {
      return e.module("angularMoment", []).constant("angularMomentConfig", {
        preprocess: null,
        timezone: "",
        format: null
      }).constant("moment", t).constant("amTimeAgoConfig", {
        withoutSuffix: !1,
        serverTime: null,
        titleFormat: null
      }).directive("amTimeAgo", ["$window", "moment", "amMoment", "amTimeAgoConfig", "angularMomentConfig", function(t, n, r, i, o) {
        return function(a, s, u) {
          function c() {
            var e;
            if (i.serverTime) {
              var t = (new Date).getTime(),
                r = t - b + i.serverTime;
              e = n(r)
            } else e = n();
            return e
          }

          function l() {
            g && (t.clearTimeout(g), g = null)
          }

          function f(e) {
            if (s.text(e.from(c(), y)), $ && !s.attr("title") && s.attr("title", e.local().format($)), !_) {
              var n = Math.abs(c().diff(e, "minute")),
                r = 3600;
              1 > n ? r = 1 : 60 > n ? r = 30 : 180 > n && (r = 300), g = t.setTimeout(function() {
                f(e)
              }, 1e3 * r)
            }
          }

          function d(e) {
            k && s.attr("datetime", e)
          }

          function h() {
            if (l(), p) {
              var e = r.preprocessDate(p, w, v);
              f(e), d(e.toISOString())
            }
          }
          var p, m, g = null,
            v = o.format,
            y = i.withoutSuffix,
            $ = i.titleFormat,
            b = (new Date).getTime(),
            w = o.preprocess,
            x = u.amTimeAgo.replace(/^::/, ""),
            _ = 0 === u.amTimeAgo.indexOf("::"),
            k = "TIME" === s[0].nodeName.toUpperCase();
          m = a.$watch(x, function(e) {
            return "undefined" == typeof e || null === e || "" === e ? (l(), void(p && (s.text(""), d(""), p = null))) : (p = e, h(), void(void 0 !== e && _ && m()))
          }), e.isDefined(u.amWithoutSuffix) && a.$watch(u.amWithoutSuffix, function(e) {
            "boolean" == typeof e ? (y = e, h()) : y = i.withoutSuffix
          }), u.$observe("amFormat", function(e) {
            "undefined" != typeof e && (v = e, h())
          }), u.$observe("amPreprocess", function(e) {
            w = e, h()
          }), a.$on("$destroy", function() {
            l()
          }), a.$on("amMoment:localeChanged", function() {
            h()
          })
        }
      }]).service("amMoment", ["moment", "$rootScope", "$log", "angularMomentConfig", function(t, n, r, i) {
        var o = this;
        this.preprocessors = {
          utc: t.utc,
          unix: t.unix
        }, this.changeLocale = function(r) {
          var i = (t.locale || t.lang)(r);
          return e.isDefined(r) && (n.$broadcast("amMoment:localeChanged"), n.$broadcast("amMoment:languageChange")), i
        }, this.changeLanguage = function(e) {
          return r.warn("angular-moment: Usage of amMoment.changeLanguage() is deprecated. Please use changeLocale()"), o.changeLocale(e)
        }, this.preprocessDate = function(n, o, a) {
          return e.isUndefined(o) && (o = i.preprocess), this.preprocessors[o] ? this.preprocessors[o](n, a) : (o && r.warn("angular-moment: Ignoring unsupported value for preprocess: " + o), !isNaN(parseFloat(n)) && isFinite(n) ? t(parseInt(n, 10)) : t(n, a))
        }, this.applyTimezone = function(e) {
          var t = i.timezone;
          return e && t && (e.tz ? e = e.tz(t) : r.warn("angular-moment: timezone specified but moment.tz() is undefined. Did you forget to include moment-timezone.js?")), e
        }
      }]).filter("amCalendar", ["moment", "amMoment", function(e, t) {
        return function(n, r) {
          if ("undefined" == typeof n || null === n) return "";
          n = t.preprocessDate(n, r);
          var i = e(n);
          return i.isValid() ? t.applyTimezone(i).calendar() : ""
        }
      }]).filter("amDateFormat", ["moment", "amMoment", function(e, t) {
        return function(n, r, i) {
          if ("undefined" == typeof n || null === n) return "";
          n = t.preprocessDate(n, i);
          var o = e(n);
          return o.isValid() ? t.applyTimezone(o).format(r) : ""
        }
      }]).filter("amDurationFormat", ["moment", function(e) {
        return function(t, n, r) {
          return "undefined" == typeof t || null === t ? "" : e.duration(t, n).humanize(r)
        }
      }])
    }
    "function" == typeof define && define.amd ? define("angular-moment", ["angular", "moment"], e) : e(angular, window.moment)
  }(), angular.module("angular-carousel", ["ngTouch", "angular-carousel.shifty"]), angular.module("angular-carousel").directive("rnCarouselAutoSlide", ["$timeout", function(e) {
    return {
      restrict: "A",
      link: function(t, n, r) {
        var i = Math.round(1e3 * parseFloat(r.rnCarouselAutoSlide)),
          o = increment = !1,
          a = n.children().length;
        t.carouselExposedIndex || (t.carouselExposedIndex = 0), stopAutoplay = function() {
          angular.isDefined(o) && e.cancel(o), o = void 0
        }, increment = function() {
          t.carouselExposedIndex = t.carouselExposedIndex < a - 1 ? t.carouselExposedIndex + 1 : 0
        }, restartTimer = function() {
          stopAutoplay(), o = e(increment, i)
        }, t.$watch("carouselIndex", function() {
          restartTimer()
        }), restartTimer(), r.rnCarouselPauseOnHover && "false" != r.rnCarouselPauseOnHover && (n.on("mouseenter", stopAutoplay), n.on("mouseleave", restartTimer)), t.$on("$destroy", function() {
          stopAutoplay(), n.off("mouseenter", stopAutoplay), n.off("mouseleave", restartTimer)
        })
      }
    }
  }]), angular.module("angular-carousel").directive("rnCarouselIndicators", ["$parse", function(e) {
    return {
      restrict: "A",
      scope: {
        slides: "=",
        index: "=rnCarouselIndex"
      },
      templateUrl: "carousel-indicators.html",
      link: function(t, n, r) {
        var i = e(r.rnCarouselIndex);
        t.goToSlide = function(e) {
          i.assign(t.$parent.$parent, e)
        }
      }
    }
  }]), angular.module("angular-carousel").run(["$templateCache", function(e) {
    e.put("carousel-indicators.html", '<div class="rn-carousel-indicator">\n<span ng-repeat="slide in slides" ng-class="{active: $index==index}" ng-click="goToSlide($index)">\u25cf</span></div>')
  }]),
  function() {
    "use strict";
    angular.module("angular-carousel").service("DeviceCapabilities", function() {
      function e() {
        var e = "transform",
          t = "webkitTransform";
        return "undefined" != typeof document.body.style[e] ? ["webkit", "moz", "o", "ms"].every(function(t) {
          var n = "-" + t + "-transform";
          return "undefined" != typeof document.body.style[n] ? (e = n, !1) : !0
        }) : e = "undefined" != typeof document.body.style[t] ? "-webkit-transform" : void 0, e
      }

      function t() {
        var e, t = document.createElement("p"),
          n = {
            webkitTransform: "-webkit-transform",
            msTransform: "-ms-transform",
            transform: "transform"
          };
        document.body.insertBefore(t, null);
        for (var r in n) void 0 !== t.style[r] && (t.style[r] = "translate3d(1px,1px,1px)", e = window.getComputedStyle(t).getPropertyValue(n[r]));
        return document.body.removeChild(t), void 0 !== e && e.length > 0 && "none" !== e
      }
      return {
        has3d: t(),
        transformProperty: e()
      }
    }).service("computeCarouselSlideStyle", ["DeviceCapabilities", function(e) {
      return function(t, n, r) {
        var i, o = {
            display: "inline-block"
          },
          a = 100 * t + n,
          s = e.has3d ? "translate3d(" + a + "%, 0, 0)" : "translate3d(" + a + "%, 0)",
          u = (100 - Math.abs(a)) / 100;
        if (e.transformProperty)
          if ("fadeAndSlide" == r) o[e.transformProperty] = s, i = 0, Math.abs(a) < 100 && (i = .3 + .7 * u), o.opacity = i;
          else if ("hexagon" == r) {
          var c = 100,
            l = 0,
            f = 60 * (u - 1);
          c = -100 * t > n ? 100 : 0, l = -100 * t > n ? f : -f, o[e.transformProperty] = s + " rotateY(" + l + "deg)", o[e.transformProperty + "-origin"] = c + "% 50%"
        } else if ("zoom" == r) {
          o[e.transformProperty] = s;
          var d = 1;
          Math.abs(a) < 100 && (d = 1 + 2 * (1 - u)), o[e.transformProperty] += " scale(" + d + ")", o[e.transformProperty + "-origin"] = "50% 50%", i = 0, Math.abs(a) < 100 && (i = .3 + .7 * u), o.opacity = i
        } else o[e.transformProperty] = s;
        else o["margin-left"] = a + "%";
        return o
      }
    }]).service("createStyleString", function() {
      return function(e) {
        var t = [];
        return angular.forEach(e, function(e, n) {
          t.push(n + ":" + e)
        }), t.join(";")
      }
    }).directive("rnCarousel", ["$swipe", "$window", "$document", "$parse", "$compile", "$timeout", "$interval", "computeCarouselSlideStyle", "createStyleString", "Tweenable", function(e, t, n, r, i, o, a, s, u, c) {
      function l(e, t, n) {
        var r = n;
        return e.every(function(e, n) {
          return angular.equals(e, t) ? (r = n, !1) : !0
        }), r
      }
      var f = 0;
      return t.requestAnimationFrame || t.webkitRequestAnimationFrame || t.mozRequestAnimationFrame, {
        restrict: "A",
        scope: !0,
        compile: function(d, h) {
          var p, m, g = d[0].querySelector("li"),
            v = g ? g.attributes : [],
            y = !1,
            $ = !1;
          return ["ng-repeat", "data-ng-repeat", "ng:repeat", "x-ng-repeat"].every(function(e) {
              var t = v[e];
              if (angular.isDefined(t)) {
                var n = t.value.match(/^\s*([\s\S]+?)\s+in\s+([\s\S]+?)(?:\s+track\s+by\s+([\s\S]+?))?\s*$/),
                  r = n[3];
                if (p = n[1], m = n[2], p) return angular.isDefined(h.rnCarouselBuffered) && ($ = !0, t.value = p + " in " + m + "|carouselSlice:carouselBufferIndex:carouselBufferSize", r && (t.value += " track by " + r)), y = !0, !1
              }
              return !0
            }),
            function(d, h, p) {
              function g() {
                return h[0].querySelectorAll("ul[rn-carousel] > li")
              }

              function v(e) {
                I = !0, C({
                  x: e.clientX,
                  y: e.clientY
                }, e)
              }

              function b(e) {
                var t = 100 * d.carouselBufferIndex + e;
                angular.forEach(g(), function(e, n) {
                  e.style.cssText = u(s(n, t, P.transitionType))
                })
              }

              function w(e, t) {
                if (void 0 === e && (e = d.carouselIndex), t = t || {}, t.animate === !1 || "none" === P.transitionType) return L = !1, F = -100 * e, d.carouselIndex = e, void T();
                L = !0;
                var n = new c;
                n.tween({
                  from: {
                    x: F
                  },
                  to: {
                    x: -100 * e
                  },
                  duration: P.transitionDuration,
                  easing: P.transitionEasing,
                  step: function(e) {
                    b(e.x)
                  },
                  finish: function() {
                    L = !1, d.$apply(function() {
                      d.carouselIndex = e, F = -100 * e, T()
                    })
                  }
                })
              }

              function x() {
                var e = h[0].getBoundingClientRect();
                return e.width ? e.width : e.right - e.left
              }

              function _() {
                q = x()
              }

              function k(e) {
                return n.bind("mouseup", v), _(), R = h[0].querySelector("li").getBoundingClientRect().left, A = !0, E = e.x, !1
              }

              function S(e) {
                if (!L) {
                  var t, n;
                  if (A && (t = e.x, n = E - t, n > 2 || -2 > n)) {
                    I = !0;
                    var r = F + 100 * -n / q;
                    b(r)
                  }
                  return !1
                }
              }

              function C(e, t) {
                if ((!t || I) && (n.unbind("mouseup", v), A = !1, I = !1, D = E - e.x, 0 !== D && !L))
                  if (F += 100 * -D / q, P.isSequential) {
                    var r = P.moveTreshold * q,
                      i = -D,
                      o = -Math[i >= 0 ? "ceil" : "floor"](i / q),
                      a = Math.abs(i) > r;
                    O && o + d.carouselIndex >= O.length && (o = O.length - 1 - d.carouselIndex), o + d.carouselIndex < 0 && (o = -d.carouselIndex);
                    var s = a ? o : 0;
                    D = d.carouselIndex + s, w(D)
                  } else d.$apply(function() {
                    d.carouselIndex = parseInt(-F / 100, 10), T()
                  })
              }

              function T() {
                var e = 0,
                  t = (d.carouselBufferSize - 1) / 2;
                $ ? (e = d.carouselIndex <= t ? 0 : O && O.length < d.carouselBufferSize ? 0 : O && d.carouselIndex > O.length - d.carouselBufferSize ? O.length - d.carouselBufferSize : d.carouselIndex - t, d.carouselBufferIndex = e, o(function() {
                  b(F)
                }, 0, !1)) : o(function() {
                  b(F)
                }, 0, !1)
              }

              function M() {
                _(), w()
              }
              f++;
              var A, E, D, O, N = {
                  transitionType: p.rnCarouselTransition || "slide",
                  transitionEasing: "easeTo",
                  transitionDuration: 300,
                  isSequential: !0,
                  autoSlideDuration: 3,
                  bufferSize: 5,
                  moveTreshold: .1
                },
                P = angular.extend({}, N),
                j = !1,
                F = 0,
                I = !1,
                q = null,
                R = null,
                L = !1;
              if (void 0 !== p.rnCarouselControls) {
                var H = '<div class="rn-carousel-controls">\n  <span class="rn-carousel-control rn-carousel-control-prev" ng-click="prevSlide()" ng-if="carouselIndex > 0"></span>\n  <span class="rn-carousel-control rn-carousel-control-next" ng-click="nextSlide()" ng-if="carouselIndex < ' + m + '.length - 1"></span>\n</div>';
                h.append(i(angular.element(H))(d))
              }
              e.bind(h, {
                start: k,
                move: S,
                end: C,
                cancel: function(e) {
                  C({}, e)
                }
              }), d.nextSlide = function(e) {
                var t = d.carouselIndex + 1;
                t > O.length - 1 && (t = 0), L || w(t, e)
              }, d.prevSlide = function(e) {
                var t = d.carouselIndex - 1;
                0 > t && (t = O.length - 1), w(t, e)
              };
              var U = !0;
              d.carouselIndex = 0, y || (O = [], angular.forEach(g(), function(e, t) {
                O.push({
                  id: t
                })
              }));
              var Y;
              if (void 0 !== p.rnCarouselAutoSlide) {
                var z = parseInt(p.rnCarouselAutoSlide, 10) || P.autoSlideDuration;
                Y = a(function() {
                  L || A || d.nextSlide()
                }, 1e3 * z)
              }
              if (p.rnCarouselIndex) {
                var B = function(e) {
                    V.assign(d.$parent, e)
                  },
                  V = r(p.rnCarouselIndex);
                angular.isFunction(V.assign) ? (d.$watch("carouselIndex", function(e) {
                  L || B(e)
                }), d.$parent.$watch(V, function(e) {
                  void 0 !== e && null !== e && (O && e >= O.length ? (e = O.length - 1, B(e)) : O && 0 > e && (e = 0, B(e)), L || w(e, {
                    animate: !U
                  }), U = !1)
                }), j = !0) : isNaN(p.rnCarouselIndex) || w(parseInt(p.rnCarouselIndex, 10), {
                  animate: !1
                })
              } else w(0, {
                animate: !U
              }), U = !1;
              if (p.rnCarouselLocked && d.$watch(p.rnCarouselLocked, function(e) {
                  L = e === !0 ? !0 : !1
                }), y) {
                var W = void 0 !== p.rnCarouselDeepWatch;
                d[W ? "$watch" : "$watchCollection"](m, function(e, t) {
                  if ((O || e).slice(), O = e, W && angular.isArray(e)) {
                    var n = t[d.carouselIndex],
                      r = l(e, n, d.carouselIndex);
                    w(r, {
                      animate: !1
                    })
                  } else w(d.carouselIndex, {
                    animate: !1
                  })
                }, !0)
              }
              d.$on("$destroy", function() {
                n.unbind("mouseup", v)
              }), d.carouselBufferIndex = 0, d.carouselBufferSize = P.bufferSize;
              var G = angular.element(t);
              G.bind("orientationchange", M), G.bind("resize", M), d.$on("$destroy", function() {
                n.unbind("mouseup", v), G.unbind("orientationchange", M), G.unbind("resize", M)
              })
            }
        }
      }
    }])
  }(), angular.module("angular-carousel.shifty", []).factory("Tweenable", function() {
    return function(e) {
      var t = function() {
        "use strict";

        function t() {}

        function n(e, t) {
          var n;
          for (n in e) Object.hasOwnProperty.call(e, n) && t(n)
        }

        function r(e, t) {
          return n(t, function(n) {
            e[n] = t[n]
          }), e
        }

        function i(e, t) {
          n(t, function(n) {
            "undefined" == typeof e[n] && (e[n] = t[n])
          })
        }

        function o(e, t, n, r, i, o, s) {
          var u, c = (e - o) / i;
          for (u in t) t.hasOwnProperty(u) && (t[u] = a(n[u], r[u], f[s[u]], c));
          return t
        }

        function a(e, t, n, r) {
          return e + (t - e) * n(r)
        }

        function s(e, t) {
          var r = l.prototype.filter,
            i = e._filterArgs;
          n(r, function(n) {
            "undefined" != typeof r[n][t] && r[n][t].apply(e, i)
          })
        }

        function u(e, t, n, r, i, a, u, c, l) {
          y = t + n, $ = Math.min(v(), y), b = $ >= y, w = n - (y - $), e.isPlaying() && !b ? (e._scheduleId = l(e._timeoutHandler, m), s(e, "beforeTween"), o($, r, i, a, n, t, u), s(e, "afterTween"), c(r, e._attachment, w)) : b && (c(a, e._attachment, w), e.stop(!0))
        }

        function c(e, t) {
          var r = {};
          return "string" == typeof t ? n(e, function(e) {
            r[e] = t
          }) : n(e, function(e) {
            r[e] || (r[e] = t[e] || h)
          }), r
        }

        function l(e, t) {
          this._currentState = e || {}, this._configured = !1, this._scheduleFunction = d, "undefined" != typeof t && this.setConfig(t)
        }
        var f, d, h = "linear",
          p = 500,
          m = 1e3 / 60,
          g = Date.now ? Date.now : function() {
            return +new Date
          },
          v = "undefined" != typeof SHIFTY_DEBUG_NOW ? SHIFTY_DEBUG_NOW : g;
        d = "undefined" != typeof window ? window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.oRequestAnimationFrame || window.msRequestAnimationFrame || window.mozCancelRequestAnimationFrame && window.mozRequestAnimationFrame || setTimeout : setTimeout;
        var y, $, b, w;
        return l.prototype.tween = function(e) {
          return this._isTweening ? this : (void 0 === e && this._configured || this.setConfig(e), this._timestamp = v(), this._start(this.get(), this._attachment), this.resume())
        }, l.prototype.setConfig = function(e) {
          e = e || {}, this._configured = !0, this._attachment = e.attachment, this._pausedAtTime = null, this._scheduleId = null, this._start = e.start || t, this._step = e.step || t, this._finish = e.finish || t, this._duration = e.duration || p, this._currentState = e.from || this.get(), this._originalState = this.get(), this._targetState = e.to || this.get();
          var n = this._currentState,
            r = this._targetState;
          return i(r, n), this._easing = c(n, e.easing || h), this._filterArgs = [n, this._originalState, r, this._easing], s(this, "tweenCreated"), this
        }, l.prototype.get = function() {
          return r({}, this._currentState)
        }, l.prototype.set = function(e) {
          this._currentState = e
        }, l.prototype.pause = function() {
          return this._pausedAtTime = v(), this._isPaused = !0, this
        }, l.prototype.resume = function() {
          this._isPaused && (this._timestamp += v() - this._pausedAtTime), this._isPaused = !1, this._isTweening = !0;
          var e = this;
          return this._timeoutHandler = function() {
            u(e, e._timestamp, e._duration, e._currentState, e._originalState, e._targetState, e._easing, e._step, e._scheduleFunction)
          }, this._timeoutHandler(), this
        }, l.prototype.seek = function(e) {
          return this._timestamp = v() - e, this.isPlaying() || (this._isTweening = !0, this._isPaused = !1, u(this, this._timestamp, this._duration, this._currentState, this._originalState, this._targetState, this._easing, this._step, this._scheduleFunction), this._timeoutHandler(), this.pause()), this
        }, l.prototype.stop = function(n) {
          return this._isTweening = !1, this._isPaused = !1, this._timeoutHandler = t, (e.cancelAnimationFrame || e.webkitCancelAnimationFrame || e.oCancelAnimationFrame || e.msCancelAnimationFrame || e.mozCancelRequestAnimationFrame || e.clearTimeout)(this._scheduleId), n && (r(this._currentState, this._targetState), s(this, "afterTweenEnd"), this._finish.call(this, this._currentState, this._attachment)), this
        }, l.prototype.isPlaying = function() {
          return this._isTweening && !this._isPaused
        }, l.prototype.setScheduleFunction = function(e) {
          this._scheduleFunction = e
        }, l.prototype.dispose = function() {
          var e;
          for (e in this) this.hasOwnProperty(e) && delete this[e]
        }, l.prototype.filter = {}, l.prototype.formula = {
          linear: function(e) {
            return e
          }
        }, f = l.prototype.formula, r(l, {
          now: v,
          each: n,
          tweenProps: o,
          tweenProp: a,
          applyFilter: s,
          shallowCopy: r,
          defaults: i,
          composeEasingObject: c
        }), "function" == typeof SHIFTY_DEBUG_NOW && (e.timeoutHandler = u), "object" == typeof exports ? module.exports = l : "function" == typeof define && define.amd ? define(function() {
          return l
        }) : "undefined" == typeof e.Tweenable && (e.Tweenable = l), l
      }();
      ! function() {
        t.shallowCopy(t.prototype.formula, {
          easeInQuad: function(e) {
            return Math.pow(e, 2)
          },
          easeOutQuad: function(e) {
            return -(Math.pow(e - 1, 2) - 1)
          },
          easeInOutQuad: function(e) {
            return (e /= .5) < 1 ? .5 * Math.pow(e, 2) : -.5 * ((e -= 2) * e - 2)
          },
          easeInCubic: function(e) {
            return Math.pow(e, 3)
          },
          easeOutCubic: function(e) {
            return Math.pow(e - 1, 3) + 1
          },
          easeInOutCubic: function(e) {
            return (e /= .5) < 1 ? .5 * Math.pow(e, 3) : .5 * (Math.pow(e - 2, 3) + 2)
          },
          easeInQuart: function(e) {
            return Math.pow(e, 4)
          },
          easeOutQuart: function(e) {
            return -(Math.pow(e - 1, 4) - 1)
          },
          easeInOutQuart: function(e) {
            return (e /= .5) < 1 ? .5 * Math.pow(e, 4) : -.5 * ((e -= 2) * Math.pow(e, 3) - 2)
          },
          easeInQuint: function(e) {
            return Math.pow(e, 5)
          },
          easeOutQuint: function(e) {
            return Math.pow(e - 1, 5) + 1
          },
          easeInOutQuint: function(e) {
            return (e /= .5) < 1 ? .5 * Math.pow(e, 5) : .5 * (Math.pow(e - 2, 5) + 2)
          },
          easeInSine: function(e) {
            return -Math.cos(e * (Math.PI / 2)) + 1
          },
          easeOutSine: function(e) {
            return Math.sin(e * (Math.PI / 2))
          },
          easeInOutSine: function(e) {
            return -.5 * (Math.cos(Math.PI * e) - 1)
          },
          easeInExpo: function(e) {
            return 0 === e ? 0 : Math.pow(2, 10 * (e - 1))
          },
          easeOutExpo: function(e) {
            return 1 === e ? 1 : -Math.pow(2, -10 * e) + 1
          },
          easeInOutExpo: function(e) {
            return 0 === e ? 0 : 1 === e ? 1 : (e /= .5) < 1 ? .5 * Math.pow(2, 10 * (e - 1)) : .5 * (-Math.pow(2, -10 * --e) + 2)
          },
          easeInCirc: function(e) {
            return -(Math.sqrt(1 - e * e) - 1)
          },
          easeOutCirc: function(e) {
            return Math.sqrt(1 - Math.pow(e - 1, 2))
          },
          easeInOutCirc: function(e) {
            return (e /= .5) < 1 ? -.5 * (Math.sqrt(1 - e * e) - 1) : .5 * (Math.sqrt(1 - (e -= 2) * e) + 1)
          },
          easeOutBounce: function(e) {
            return 1 / 2.75 > e ? 7.5625 * e * e : 2 / 2.75 > e ? 7.5625 * (e -= 1.5 / 2.75) * e + .75 : 2.5 / 2.75 > e ? 7.5625 * (e -= 2.25 / 2.75) * e + .9375 : 7.5625 * (e -= 2.625 / 2.75) * e + .984375
          },
          easeInBack: function(e) {
            var t = 1.70158;
            return e * e * ((t + 1) * e - t)
          },
          easeOutBack: function(e) {
            var t = 1.70158;
            return (e -= 1) * e * ((t + 1) * e + t) + 1
          },
          easeInOutBack: function(e) {
            var t = 1.70158;
            return (e /= .5) < 1 ? .5 * e * e * (((t *= 1.525) + 1) * e - t) : .5 * ((e -= 2) * e * (((t *= 1.525) + 1) * e + t) + 2)
          },
          elastic: function(e) {
            return -1 * Math.pow(4, -8 * e) * Math.sin(2 * (6 * e - 1) * Math.PI / 2) + 1
          },
          swingFromTo: function(e) {
            var t = 1.70158;
            return (e /= .5) < 1 ? .5 * e * e * (((t *= 1.525) + 1) * e - t) : .5 * ((e -= 2) * e * (((t *= 1.525) + 1) * e + t) + 2)
          },
          swingFrom: function(e) {
            var t = 1.70158;
            return e * e * ((t + 1) * e - t)
          },
          swingTo: function(e) {
            var t = 1.70158;
            return (e -= 1) * e * ((t + 1) * e + t) + 1
          },
          bounce: function(e) {
            return 1 / 2.75 > e ? 7.5625 * e * e : 2 / 2.75 > e ? 7.5625 * (e -= 1.5 / 2.75) * e + .75 : 2.5 / 2.75 > e ? 7.5625 * (e -= 2.25 / 2.75) * e + .9375 : 7.5625 * (e -= 2.625 / 2.75) * e + .984375
          },
          bouncePast: function(e) {
            return 1 / 2.75 > e ? 7.5625 * e * e : 2 / 2.75 > e ? 2 - (7.5625 * (e -= 1.5 / 2.75) * e + .75) : 2.5 / 2.75 > e ? 2 - (7.5625 * (e -= 2.25 / 2.75) * e + .9375) : 2 - (7.5625 * (e -= 2.625 / 2.75) * e + .984375)
          },
          easeFromTo: function(e) {
            return (e /= .5) < 1 ? .5 * Math.pow(e, 4) : -.5 * ((e -= 2) * Math.pow(e, 3) - 2)
          },
          easeFrom: function(e) {
            return Math.pow(e, 4)
          },
          easeTo: function(e) {
            return Math.pow(e, .25)
          }
        })
      }(),
      function() {
        function e(e, t, n, r, i, o) {
          function a(e) {
            return ((h * e + p) * e + m) * e
          }

          function s(e) {
            return ((g * e + v) * e + y) * e
          }

          function u(e) {
            return (3 * h * e + 2 * p) * e + m
          }

          function c(e) {
            return 1 / (200 * e)
          }

          function l(e, t) {
            return s(d(e, t))
          }

          function f(e) {
            return e >= 0 ? e : 0 - e
          }

          function d(e, t) {
            var n, r, i, o, s, c;
            for (i = e, c = 0; 8 > c; c++) {
              if (o = a(i) - e, f(o) < t) return i;
              if (s = u(i), f(s) < 1e-6) break;
              i -= o / s
            }
            if (n = 0, r = 1, i = e, n > i) return n;
            if (i > r) return r;
            for (; r > n;) {
              if (o = a(i), f(o - e) < t) return i;
              e > o ? n = i : r = i, i = .5 * (r - n) + n
            }
            return i
          }
          var h = 0,
            p = 0,
            m = 0,
            g = 0,
            v = 0,
            y = 0;
          return m = 3 * t, p = 3 * (r - t) - m, h = 1 - m - p, y = 3 * n, v = 3 * (i - n) - y, g = 1 - y - v, l(e, c(o))
        }

        function n(t, n, r, i) {
          return function(o) {
            return e(o, t, n, r, i, 1)
          }
        }
        t.setBezierFunction = function(e, r, i, o, a) {
          var s = n(r, i, o, a);
          return s.x1 = r, s.y1 = i, s.x2 = o, s.y2 = a, t.prototype.formula[e] = s
        }, t.unsetBezierFunction = function(e) {
          delete t.prototype.formula[e]
        }
      }(),
      function() {
        function e(e, n, r, i, o) {
          return t.tweenProps(i, n, e, r, 1, 0, o)
        }
        var n = new t;
        n._filterArgs = [], t.interpolate = function(r, i, o, a) {
          var s = t.shallowCopy({}, r),
            u = t.composeEasingObject(r, a || "linear");
          n.set({});
          var c = n._filterArgs;
          c.length = 0, c[0] = s, c[1] = r, c[2] = i, c[3] = u, t.applyFilter(n, "tweenCreated"), t.applyFilter(n, "beforeTween");
          var l = e(r, s, i, o, u);
          return t.applyFilter(n, "afterTween"), l
        }
      }(),
      function(e) {
        function t(e, t) {
          T.length = 0;
          var n, r = e.length;
          for (n = 0; r > n; n++) T.push("_" + t + "_" + n);
          return T
        }

        function n(e) {
          var t = e.match(w);
          return t ? (1 === t.length || e[0].match(b)) && t.unshift("") : t = ["", ""], t.join(C)
        }

        function r(t) {
          e.each(t, function(e) {
            var n = t[e];
            "string" == typeof n && n.match(S) && (t[e] = i(n))
          })
        }

        function i(e) {
          return u(S, e, o)
        }

        function o(e) {
          var t = a(e);
          return "rgb(" + t[0] + "," + t[1] + "," + t[2] + ")"
        }

        function a(e) {
          return e = e.replace(/#/, ""), 3 === e.length && (e = e.split(""), e = e[0] + e[0] + e[1] + e[1] + e[2] + e[2]), M[0] = s(e.substr(0, 2)), M[1] = s(e.substr(2, 2)), M[2] = s(e.substr(4, 2)), M
        }

        function s(e) {
          return parseInt(e, 16)
        }

        function u(e, t, n) {
          var r = t.match(e),
            i = t.replace(e, C);
          if (r)
            for (var o, a = r.length, s = 0; a > s; s++) o = r.shift(), i = i.replace(C, n(o));
          return i
        }

        function c(e) {
          return u(_, e, l)
        }

        function l(e) {
          for (var t = e.match(x), n = t.length, r = e.match(k)[0], i = 0; n > i; i++) r += parseInt(t[i], 10) + ",";
          return r = r.slice(0, -1) + ")"
        }

        function f(r) {
          var i = {};
          return e.each(r, function(e) {
            var o = r[e];
            if ("string" == typeof o) {
              var a = v(o);
              i[e] = {
                formatString: n(o),
                chunkNames: t(a, e)
              }
            }
          }), i
        }

        function d(t, n) {
          e.each(n, function(e) {
            for (var r = t[e], i = v(r), o = i.length, a = 0; o > a; a++) t[n[e].chunkNames[a]] = +i[a];
            delete t[e]
          })
        }

        function h(t, n) {
          e.each(n, function(e) {
            var r = t[e],
              i = p(t, n[e].chunkNames),
              o = m(i, n[e].chunkNames);
            r = g(n[e].formatString, o), t[e] = c(r)
          })
        }

        function p(e, t) {
          for (var n, r = {}, i = t.length, o = 0; i > o; o++) n = t[o], r[n] = e[n], delete e[n];
          return r
        }

        function m(e, t) {
          A.length = 0;
          for (var n = t.length, r = 0; n > r; r++) A.push(e[t[r]]);
          return A
        }

        function g(e, t) {
          for (var n = e, r = t.length, i = 0; r > i; i++) n = n.replace(C, +t[i].toFixed(4));
          return n
        }

        function v(e) {
          return e.match(x)
        }

        function y(t, n) {
          e.each(n, function(e) {
            for (var r = n[e], i = r.chunkNames, o = i.length, a = t[e].split(" "), s = a[a.length - 1], u = 0; o > u; u++) t[i[u]] = a[u] || s;
            delete t[e]
          })
        }

        function $(t, n) {
          e.each(n, function(e) {
            for (var r = n[e], i = r.chunkNames, o = i.length, a = "", s = 0; o > s; s++) a += " " + t[i[s]], delete t[i[s]];
            t[e] = a.substr(1)
          })
        }
        var b = /(\d|\-|\.)/,
          w = /([^\-0-9\.]+)/g,
          x = /[0-9.\-]+/g,
          _ = new RegExp("rgb\\(" + x.source + /,\s*/.source + x.source + /,\s*/.source + x.source + "\\)", "g"),
          k = /^.*\(/,
          S = /#([0-9]|[a-f]){3,6}/gi,
          C = "VAL",
          T = [],
          M = [],
          A = [];
        e.prototype.filter.token = {
          tweenCreated: function(e, t, n) {
            r(e), r(t), r(n), this._tokenData = f(e)
          },
          beforeTween: function(e, t, n, r) {
            y(r, this._tokenData), d(e, this._tokenData), d(t, this._tokenData), d(n, this._tokenData)
          },
          afterTween: function(e, t, n, r) {
            h(e, this._tokenData), h(t, this._tokenData), h(n, this._tokenData), $(r, this._tokenData)
          }
        }
      }(t)
    }(window), window.Tweenable
  }),
  function() {
    "use strict";
    angular.module("angular-carousel").filter("carouselSlice", function() {
      return function(e, t, n) {
        return angular.isArray(e) ? e.slice(t, t + n) : angular.isObject(e) ? e : void 0
      }
    })
  }(),
  function(e, t) {
    "function" == typeof define && define.amd ? define(t) : "object" == typeof exports ? module.exports = t() : e.returnExports = t()
  }(this, function() {
    function e(e) {
      return e = +e, e !== e ? e = 0 : 0 !== e && e !== 1 / 0 && e !== -(1 / 0) && (e = (e > 0 || -1) * Math.floor(Math.abs(e))), e
    }

    function t(e) {
      var t = typeof e;
      return null === e || "undefined" === t || "boolean" === t || "number" === t || "string" === t
    }

    function n(e) {
      var n, r, i;
      if (t(e)) return e;
      if (r = e.valueOf, m(r) && (n = r.call(e), t(n))) return n;
      if (i = e.toString, m(i) && (n = i.call(e), t(n))) return n;
      throw new TypeError
    }

    function r() {}
    var i, o = Array.prototype,
      a = Object.prototype,
      s = Function.prototype,
      u = String.prototype,
      c = Number.prototype,
      l = o.slice,
      f = o.splice,
      d = (o.push, o.unshift),
      h = s.call,
      p = a.toString,
      m = function(e) {
        return "[object Function]" === a.toString.call(e)
      },
      g = function(e) {
        return "[object RegExp]" === a.toString.call(e)
      },
      v = function(e) {
        return "[object Array]" === p.call(e)
      },
      y = function(e) {
        return "[object String]" === p.call(e)
      },
      $ = function(e) {
        var t = p.call(e),
          n = "[object Arguments]" === t;
        return n || (n = !v(e) && null !== e && "object" == typeof e && "number" == typeof e.length && e.length >= 0 && m(e.callee)), n
      },
      b = Object.defineProperty && function() {
        try {
          return Object.defineProperty({}, "x", {}), !0
        } catch (e) {
          return !1
        }
      }();
    i = b ? function(e, t, n, r) {
      !r && t in e || Object.defineProperty(e, t, {
        configurable: !0,
        enumerable: !1,
        writable: !0,
        value: n
      })
    } : function(e, t, n, r) {
      !r && t in e || (e[t] = n)
    };
    var w = function(e, t, n) {
        for (var r in t) a.hasOwnProperty.call(t, r) && i(e, r, t[r], n)
      },
      x = function(e) {
        if (null == e) throw new TypeError("can't convert " + e + " to object");
        return Object(e)
      },
      _ = function(e) {
        return e >>> 0
      };
    w(s, {
      bind: function(e) {
        var t = this;
        if (!m(t)) throw new TypeError("Function.prototype.bind called on incompatible " + t);
        for (var n = l.call(arguments, 1), i = function() {
            if (this instanceof u) {
              var r = t.apply(this, n.concat(l.call(arguments)));
              return Object(r) === r ? r : this
            }
            return t.apply(e, n.concat(l.call(arguments)))
          }, o = Math.max(0, t.length - n.length), a = [], s = 0; o > s; s++) a.push("$" + s);
        var u = Function("binder", "return function (" + a.join(",") + "){return binder.apply(this,arguments)}")(i);
        return t.prototype && (r.prototype = t.prototype, u.prototype = new r, r.prototype = null), u
      }
    });
    var k, S, C, T, M, A = h.bind(a.hasOwnProperty);
    (M = A(a, "__defineGetter__")) && (k = h.bind(a.__defineGetter__), S = h.bind(a.__defineSetter__), C = h.bind(a.__lookupGetter__), T = h.bind(a.__lookupSetter__));
    var E = function() {
      var e = [1, 2],
        t = e.splice();
      return 2 === e.length && v(t) && 0 === t.length
    }();
    w(o, {
      splice: function() {
        return 0 === arguments.length ? [] : f.apply(this, arguments)
      }
    }, E);
    var D = function() {
      var e = {};
      return o.splice.call(e, 0, 0, 1), 1 === e.length
    }();
    w(o, {
      splice: function(t, n) {
        if (0 === arguments.length) return [];
        var r = arguments;
        return this.length = Math.max(e(this.length), 0), arguments.length > 0 && "number" != typeof n && (r = l.call(arguments), r.length < 2 ? r.push(this.length - t) : r[1] = e(n)), f.apply(this, r)
      }
    }, !D);
    var O = 1 !== [].unshift(0);
    w(o, {
      unshift: function() {
        return d.apply(this, arguments), this.length
      }
    }, O), w(Array, {
      isArray: v
    });
    var N = Object("a"),
      P = "a" !== N[0] || !(0 in N),
      j = function(e) {
        var t = !0,
          n = !0;
        return e && (e.call("foo", function(e, n, r) {
          "object" != typeof r && (t = !1)
        }), e.call([1], function() {
          "use strict";
          n = "string" == typeof this
        }, "x")), !!e && t && n
      };
    w(o, {
      forEach: function(e) {
        var t = x(this),
          n = P && y(this) ? this.split("") : t,
          r = arguments[1],
          i = -1,
          o = n.length >>> 0;
        if (!m(e)) throw new TypeError;
        for (; ++i < o;) i in n && e.call(r, n[i], i, t)
      }
    }, !j(o.forEach)), w(o, {
      map: function(e) {
        var t = x(this),
          n = P && y(this) ? this.split("") : t,
          r = n.length >>> 0,
          i = Array(r),
          o = arguments[1];
        if (!m(e)) throw new TypeError(e + " is not a function");
        for (var a = 0; r > a; a++) a in n && (i[a] = e.call(o, n[a], a, t));
        return i
      }
    }, !j(o.map)), w(o, {
      filter: function(e) {
        var t, n = x(this),
          r = P && y(this) ? this.split("") : n,
          i = r.length >>> 0,
          o = [],
          a = arguments[1];
        if (!m(e)) throw new TypeError(e + " is not a function");
        for (var s = 0; i > s; s++) s in r && (t = r[s], e.call(a, t, s, n) && o.push(t));
        return o
      }
    }, !j(o.filter)), w(o, {
      every: function(e) {
        var t = x(this),
          n = P && y(this) ? this.split("") : t,
          r = n.length >>> 0,
          i = arguments[1];
        if (!m(e)) throw new TypeError(e + " is not a function");
        for (var o = 0; r > o; o++)
          if (o in n && !e.call(i, n[o], o, t)) return !1;
        return !0
      }
    }, !j(o.every)), w(o, {
      some: function(e) {
        var t = x(this),
          n = P && y(this) ? this.split("") : t,
          r = n.length >>> 0,
          i = arguments[1];
        if (!m(e)) throw new TypeError(e + " is not a function");
        for (var o = 0; r > o; o++)
          if (o in n && e.call(i, n[o], o, t)) return !0;
        return !1
      }
    }, !j(o.some));
    var F = !1;
    o.reduce && (F = "object" == typeof o.reduce.call("es5", function(e, t, n, r) {
      return r
    })), w(o, {
      reduce: function(e) {
        var t = x(this),
          n = P && y(this) ? this.split("") : t,
          r = n.length >>> 0;
        if (!m(e)) throw new TypeError(e + " is not a function");
        if (!r && 1 === arguments.length) throw new TypeError("reduce of empty array with no initial value");
        var i, o = 0;
        if (arguments.length >= 2) i = arguments[1];
        else
          for (;;) {
            if (o in n) {
              i = n[o++];
              break
            }
            if (++o >= r) throw new TypeError("reduce of empty array with no initial value")
          }
        for (; r > o; o++) o in n && (i = e.call(void 0, i, n[o], o, t));
        return i
      }
    }, !F);
    var I = !1;
    o.reduceRight && (I = "object" == typeof o.reduceRight.call("es5", function(e, t, n, r) {
      return r
    })), w(o, {
      reduceRight: function(e) {
        var t = x(this),
          n = P && y(this) ? this.split("") : t,
          r = n.length >>> 0;
        if (!m(e)) throw new TypeError(e + " is not a function");
        if (!r && 1 === arguments.length) throw new TypeError("reduceRight of empty array with no initial value");
        var i, o = r - 1;
        if (arguments.length >= 2) i = arguments[1];
        else
          for (;;) {
            if (o in n) {
              i = n[o--];
              break
            }
            if (--o < 0) throw new TypeError("reduceRight of empty array with no initial value")
          }
        if (0 > o) return i;
        do o in n && (i = e.call(void 0, i, n[o], o, t)); while (o--);
        return i
      }
    }, !I);
    var q = Array.prototype.indexOf && -1 !== [0, 1].indexOf(1, 2);
    w(o, {
      indexOf: function(t) {
        var n = P && y(this) ? this.split("") : x(this),
          r = n.length >>> 0;
        if (!r) return -1;
        var i = 0;
        for (arguments.length > 1 && (i = e(arguments[1])), i = i >= 0 ? i : Math.max(0, r + i); r > i; i++)
          if (i in n && n[i] === t) return i;
        return -1
      }
    }, q);
    var R = Array.prototype.lastIndexOf && -1 !== [0, 1].lastIndexOf(0, -3);
    w(o, {
      lastIndexOf: function(t) {
        var n = P && y(this) ? this.split("") : x(this),
          r = n.length >>> 0;
        if (!r) return -1;
        var i = r - 1;
        for (arguments.length > 1 && (i = Math.min(i, e(arguments[1]))), i = i >= 0 ? i : r - Math.abs(i); i >= 0; i--)
          if (i in n && t === n[i]) return i;
        return -1
      }
    }, R);
    var L = !{
        toString: null
      }.propertyIsEnumerable("toString"),
      H = function() {}.propertyIsEnumerable("prototype"),
      U = ["toString", "toLocaleString", "valueOf", "hasOwnProperty", "isPrototypeOf", "propertyIsEnumerable", "constructor"],
      Y = U.length;
    w(Object, {
      keys: function(e) {
        var t = m(e),
          n = $(e),
          r = null !== e && "object" == typeof e,
          i = r && y(e);
        if (!r && !t && !n) throw new TypeError("Object.keys called on a non-object");
        var o = [],
          a = H && t;
        if (i || n)
          for (var s = 0; s < e.length; ++s) o.push(String(s));
        else
          for (var u in e) a && "prototype" === u || !A(e, u) || o.push(String(u));
        if (L)
          for (var c = e.constructor, l = c && c.prototype === e, f = 0; Y > f; f++) {
            var d = U[f];
            l && "constructor" === d || !A(e, d) || o.push(d)
          }
        return o
      }
    });
    var z = Object.keys && function() {
        return 2 === Object.keys(arguments).length
      }(1, 2),
      B = Object.keys;
    w(Object, {
      keys: function(e) {
        return B($(e) ? o.slice.call(e) : e)
      }
    }, !z);
    var V = -621987552e5,
      W = "-000001",
      G = Date.prototype.toISOString && -1 === new Date(V).toISOString().indexOf(W);
    w(Date.prototype, {
      toISOString: function() {
        var e, t, n, r, i;
        if (!isFinite(this)) throw new RangeError("Date.prototype.toISOString called on non-finite value.");
        for (r = this.getUTCFullYear(), i = this.getUTCMonth(), r += Math.floor(i / 12), i = (i % 12 + 12) % 12, e = [i + 1, this.getUTCDate(), this.getUTCHours(), this.getUTCMinutes(), this.getUTCSeconds()], r = (0 > r ? "-" : r > 9999 ? "+" : "") + ("00000" + Math.abs(r)).slice(r >= 0 && 9999 >= r ? -4 : -6), t = e.length; t--;) n = e[t], 10 > n && (e[t] = "0" + n);
        return r + "-" + e.slice(0, 2).join("-") + "T" + e.slice(2).join(":") + "." + ("000" + this.getUTCMilliseconds()).slice(-3) + "Z"
      }
    }, G);
    var Q = !1;
    try {
      Q = Date.prototype.toJSON && null === new Date(0 / 0).toJSON() && -1 !== new Date(V).toJSON().indexOf(W) && Date.prototype.toJSON.call({
        toISOString: function() {
          return !0
        }
      })
    } catch (X) {}
    Q || (Date.prototype.toJSON = function() {
      var e, t = Object(this),
        r = n(t);
      if ("number" == typeof r && !isFinite(r)) return null;
      if (e = t.toISOString, "function" != typeof e) throw new TypeError("toISOString property is not callable");
      return e.call(t)
    });
    var Z = 1e15 === Date.parse("+033658-09-27T01:46:40.000Z"),
      K = !isNaN(Date.parse("2012-04-04T24:00:00.500Z")) || !isNaN(Date.parse("2012-11-31T23:59:59.000Z")),
      J = isNaN(Date.parse("2000-01-01T00:00:00.000Z"));
    (!Date.parse || J || K || !Z) && (Date = function(e) {
      function t(n, r, i, o, a, s, u) {
        var c = arguments.length;
        if (this instanceof e) {
          var l = 1 === c && String(n) === n ? new e(t.parse(n)) : c >= 7 ? new e(n, r, i, o, a, s, u) : c >= 6 ? new e(n, r, i, o, a, s) : c >= 5 ? new e(n, r, i, o, a) : c >= 4 ? new e(n, r, i, o) : c >= 3 ? new e(n, r, i) : c >= 2 ? new e(n, r) : c >= 1 ? new e(n) : new e;
          return l.constructor = t, l
        }
        return e.apply(this, arguments)
      }

      function n(e, t) {
        var n = t > 1 ? 1 : 0;
        return o[t] + Math.floor((e - 1969 + n) / 4) - Math.floor((e - 1901 + n) / 100) + Math.floor((e - 1601 + n) / 400) + 365 * (e - 1970)
      }

      function r(t) {
        return Number(new e(1970, 0, 1, 0, 0, 0, t))
      }
      var i = new RegExp("^(\\d{4}|[+-]\\d{6})(?:-(\\d{2})(?:-(\\d{2})(?:T(\\d{2}):(\\d{2})(?::(\\d{2})(?:(\\.\\d{1,}))?)?(Z|(?:([-+])(\\d{2}):(\\d{2})))?)?)?)?$"),
        o = [0, 31, 59, 90, 120, 151, 181, 212, 243, 273, 304, 334, 365];
      for (var a in e) t[a] = e[a];
      return t.now = e.now, t.UTC = e.UTC, t.prototype = e.prototype, t.prototype.constructor = t, t.parse = function s(t) {
        var o = i.exec(t);
        if (o) {
          var a, u = Number(o[1]),
            s = Number(o[2] || 1) - 1,
            c = Number(o[3] || 1) - 1,
            l = Number(o[4] || 0),
            f = Number(o[5] || 0),
            d = Number(o[6] || 0),
            h = Math.floor(1e3 * Number(o[7] || 0)),
            p = Boolean(o[4] && !o[8]),
            m = "-" === o[9] ? 1 : -1,
            g = Number(o[10] || 0),
            v = Number(o[11] || 0);
          return (f > 0 || d > 0 || h > 0 ? 24 : 25) > l && 60 > f && 60 > d && 1e3 > h && s > -1 && 12 > s && 24 > g && 60 > v && c > -1 && c < n(u, s + 1) - n(u, s) && (a = 60 * (24 * (n(u, s) + c) + l + g * m), a = 1e3 * (60 * (a + f + v * m) + d) + h, p && (a = r(a)), a >= -864e13 && 864e13 >= a) ? a : 0 / 0
        }
        return e.parse.apply(this, arguments)
      }, t
    }(Date)), Date.now || (Date.now = function() {
      return (new Date).getTime()
    });
    var et = c.toFixed && ("0.000" !== 8e-5.toFixed(3) || "1" !== .9. toFixed(0) || "1.25" !== 1.255.toFixed(2) || "1000000000000000128" !== 0xde0b6b3a7640080.toFixed(0)),
      tt = {
        base: 1e7,
        size: 6,
        data: [0, 0, 0, 0, 0, 0],
        multiply: function(e, t) {
          for (var n = -1; ++n < tt.size;) t += e * tt.data[n], tt.data[n] = t % tt.base, t = Math.floor(t / tt.base)
        },
        divide: function(e) {
          for (var t = tt.size, n = 0; --t >= 0;) n += tt.data[t], tt.data[t] = Math.floor(n / e), n = n % e * tt.base
        },
        numToString: function() {
          for (var e = tt.size, t = ""; --e >= 0;)
            if ("" !== t || 0 === e || 0 !== tt.data[e]) {
              var n = String(tt.data[e]);
              "" === t ? t = n : t += "0000000".slice(0, 7 - n.length) + n
            }
          return t
        },
        pow: function ht(e, t, n) {
          return 0 === t ? n : t % 2 === 1 ? ht(e, t - 1, n * e) : ht(e * e, t / 2, n)
        },
        log: function(e) {
          for (var t = 0; e >= 4096;) t += 12, e /= 4096;
          for (; e >= 2;) t += 1, e /= 2;
          return t
        }
      };
    w(c, {
      toFixed: function(e) {
        var t, n, r, i, o, a, s, u;
        if (t = Number(e), t = t !== t ? 0 : Math.floor(t), 0 > t || t > 20) throw new RangeError("Number.toFixed called with invalid number of decimals");
        if (n = Number(this), n !== n) return "NaN";
        if (-1e21 >= n || n >= 1e21) return String(n);
        if (r = "", 0 > n && (r = "-", n = -n), i = "0", n > 1e-21)
          if (o = tt.log(n * tt.pow(2, 69, 1)) - 69, a = 0 > o ? n * tt.pow(2, -o, 1) : n / tt.pow(2, o, 1), a *= 4503599627370496, o = 52 - o, o > 0) {
            for (tt.multiply(0, a), s = t; s >= 7;) tt.multiply(1e7, 0), s -= 7;
            for (tt.multiply(tt.pow(10, s, 1), 0), s = o - 1; s >= 23;) tt.divide(1 << 23), s -= 23;
            tt.divide(1 << s), tt.multiply(1, 1), tt.divide(2), i = tt.numToString()
          } else tt.multiply(0, a), tt.multiply(1 << -o, 0), i = tt.numToString() + "0.00000000000000000000".slice(2, 2 + t);
        return t > 0 ? (u = i.length, i = t >= u ? r + "0.0000000000000000000".slice(0, t - u + 2) + i : r + i.slice(0, u - t) + "." + i.slice(u - t)) : i = r + i, i
      }
    }, et);
    var nt = u.split;
    2 !== "ab".split(/(?:ab)*/).length || 4 !== ".".split(/(.?)(.?)/).length || "t" === "tesst".split(/(s)*/)[1] || 4 !== "test".split(/(?:)/, -1).length || "".split(/.?/).length || ".".split(/()()/).length > 1 ? ! function() {
      var e = void 0 === /()??/.exec("")[1];
      u.split = function(t, n) {
        var r = this;
        if (void 0 === t && 0 === n) return [];
        if ("[object RegExp]" !== p.call(t)) return nt.call(this, t, n);
        var i, a, s, u, c = [],
          l = (t.ignoreCase ? "i" : "") + (t.multiline ? "m" : "") + (t.extended ? "x" : "") + (t.sticky ? "y" : ""),
          f = 0;
        for (t = new RegExp(t.source, l + "g"), r += "", e || (i = new RegExp("^" + t.source + "$(?!\\s)", l)), n = void 0 === n ? -1 >>> 0 : _(n);
          (a = t.exec(r)) && (s = a.index + a[0].length, !(s > f && (c.push(r.slice(f, a.index)), !e && a.length > 1 && a[0].replace(i, function() {
            for (var e = 1; e < arguments.length - 2; e++) void 0 === arguments[e] && (a[e] = void 0)
          }), a.length > 1 && a.index < r.length && o.push.apply(c, a.slice(1)), u = a[0].length, f = s, c.length >= n)));) t.lastIndex === a.index && t.lastIndex++;
        return f === r.length ? (u || !t.test("")) && c.push("") : c.push(r.slice(f)), c.length > n ? c.slice(0, n) : c
      }
    }() : "0".split(void 0, 0).length && (u.split = function(e, t) {
      return void 0 === e && 0 === t ? [] : nt.call(this, e, t)
    });
    var rt = u.replace,
      it = function() {
        var e = [];
        return "x".replace(/x(.)?/g, function(t, n) {
          e.push(n)
        }), 1 === e.length && "undefined" == typeof e[0]
      }();
    it || (u.replace = function(e, t) {
      var n = m(t),
        r = g(e) && /\)[*?]/.test(e.source);
      if (n && r) {
        var i = function(n) {
          var r = arguments.length,
            i = e.lastIndex;
          e.lastIndex = 0;
          var o = e.exec(n);
          return e.lastIndex = i, o.push(arguments[r - 2], arguments[r - 1]), t.apply(this, o)
        };
        return rt.call(this, e, i)
      }
      return rt.call(this, e, t)
    });
    var ot = u.substr,
      at = "".substr && "b" !== "0b".substr(-1);
    w(u, {
      substr: function(e, t) {
        return ot.call(this, 0 > e && (e = this.length + e) < 0 ? 0 : e, t)
      }
    }, at);
    var st = "	\n\f\r \xa0\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000\u2028\u2029\ufeff",
      ut = "\u200b",
      ct = "[" + st + "]",
      lt = new RegExp("^" + ct + ct + "*"),
      ft = new RegExp(ct + ct + "*$"),
      dt = u.trim && (st.trim() || !ut.trim());
    w(u, {
      trim: function() {
        if (void 0 === this || null === this) throw new TypeError("can't convert " + this + " to object");
        return String(this).replace(lt, "").replace(ft, "")
      }
    }, dt), (8 !== parseInt(st + "08") || 22 !== parseInt(st + "0x16")) && (parseInt = function(e) {
      var t = /^0[xX]/;
      return function(n, r) {
        return n = String(n).trim(), Number(r) || (r = t.test(n) ? 16 : 10), e(n, r)
      }
    }(parseInt))
  }),
  function(e, t) {
    "function" == typeof define && define.amd ? define(t) : "object" == typeof exports ? module.exports = t() : e.returnExports = t()
  }(this, function() {
    function e(e) {
      try {
        return e.sentinel = 0, 0 === Object.getOwnPropertyDescriptor(e, "sentinel").value
      } catch (t) {}
    }

    function t(e) {
      try {
        return Object.defineProperty(e, "sentinel", {}), "sentinel" in e
      } catch (t) {}
    }
    var n, r, i, o, a = Function.prototype.call,
      s = Object.prototype,
      u = a.bind(s.hasOwnProperty),
      c = u(s, "__defineGetter__");
    if (c && (n = a.bind(s.__defineGetter__), r = a.bind(s.__defineSetter__), i = a.bind(s.__lookupGetter__), o = a.bind(s.__lookupSetter__)), Object.getPrototypeOf || (Object.getPrototypeOf = function(e) {
        var t = e.__proto__;
        return t || null === t ? t : e.constructor ? e.constructor.prototype : s
      }), Object.defineProperty) {
      var l = e({}),
        f = "undefined" == typeof document || e(document.createElement("div"));
      if (!f || !l) var d = Object.getOwnPropertyDescriptor
    }
    if (!Object.getOwnPropertyDescriptor || d) {
      var h = "Object.getOwnPropertyDescriptor called on a non-object: ";
      Object.getOwnPropertyDescriptor = function(e, t) {
        if ("object" != typeof e && "function" != typeof e || null === e) throw new TypeError(h + e);
        if (d) try {
          return d.call(Object, e, t)
        } catch (n) {}
        if (u(e, t)) {
          var r = {
            enumerable: !0,
            configurable: !0
          };
          if (c) {
            var a = e.__proto__,
              l = e !== s;
            l && (e.__proto__ = s);
            var f = i(e, t),
              p = o(e, t);
            if (l && (e.__proto__ = a), f || p) return f && (r.get = f), p && (r.set = p), r
          }
          return r.value = e[t], r.writable = !0, r
        }
      }
    }
    if (Object.getOwnPropertyNames || (Object.getOwnPropertyNames = function(e) {
        return Object.keys(e)
      }), !Object.create) {
      var p, m = !({
          __proto__: null
        }
        instanceof Object);
      p = m || "undefined" == typeof document ? function() {
        return {
          __proto__: null
        }
      } : function() {
        function e() {}
        var t = document.createElement("iframe"),
          n = document.body || document.documentElement;
        t.style.display = "none", n.appendChild(t), t.src = "javascript:";
        var r = t.contentWindow.Object.prototype;
        return n.removeChild(t), t = null, delete r.constructor, delete r.hasOwnProperty, delete r.propertyIsEnumerable, delete r.isPrototypeOf, delete r.toLocaleString, delete r.toString, delete r.valueOf, r.__proto__ = null, e.prototype = r, p = function() {
          return new e
        }, new e
      }, Object.create = function(e, t) {
        function n() {}
        var r;
        if (null === e) r = p();
        else {
          if ("object" != typeof e && "function" != typeof e) throw new TypeError("Object prototype may only be an Object or null");
          n.prototype = e, r = new n, r.__proto__ = e
        }
        return void 0 !== t && Object.defineProperties(r, t), r
      }
    }
    if (Object.defineProperty) {
      var g = t({}),
        v = "undefined" == typeof document || t(document.createElement("div"));
      if (!g || !v) var y = Object.defineProperty,
        $ = Object.defineProperties
    }
    if (!Object.defineProperty || y) {
      var b = "Property description must be an object: ",
        w = "Object.defineProperty called on non-object: ",
        x = "getters & setters can not be defined on this javascript engine";
      Object.defineProperty = function(e, t, a) {
        if ("object" != typeof e && "function" != typeof e || null === e) throw new TypeError(w + e);
        if ("object" != typeof a && "function" != typeof a || null === a) throw new TypeError(b + a);
        if (y) try {
          return y.call(Object, e, t, a)
        } catch (l) {}
        if (u(a, "value"))
          if (c && (i(e, t) || o(e, t))) {
            var f = e.__proto__;
            e.__proto__ = s, delete e[t], e[t] = a.value, e.__proto__ = f
          } else e[t] = a.value;
        else {
          if (!c) throw new TypeError(x);
          u(a, "get") && n(e, t, a.get), u(a, "set") && r(e, t, a.set)
        }
        return e
      }
    }(!Object.defineProperties || $) && (Object.defineProperties = function(e, t) {
      if ($) try {
        return $.call(Object, e, t)
      } catch (n) {}
      for (var r in t) u(t, r) && "__proto__" !== r && Object.defineProperty(e, r, t[r]);
      return e
    }), Object.seal || (Object.seal = function(e) {
      return e
    }), Object.freeze || (Object.freeze = function(e) {
      return e
    });
    try {
      Object.freeze(function() {})
    } catch (_) {
      Object.freeze = function(e) {
        return function(t) {
          return "function" == typeof t ? t : e(t)
        }
      }(Object.freeze)
    }
    Object.preventExtensions || (Object.preventExtensions = function(e) {
      return e
    }), Object.isSealed || (Object.isSealed = function() {
      return !1
    }), Object.isFrozen || (Object.isFrozen = function() {
      return !1
    }), Object.isExtensible || (Object.isExtensible = function(e) {
      if (Object(e) !== e) throw new TypeError;
      for (var t = ""; u(e, t);) t += "?";
      e[t] = !0;
      var n = u(e, t);
      return delete e[t], n
    })
  }), ! function(e, t) {
    return "function" == typeof define && define.amd ? void define("angular-file-upload", ["angular"], function(e) {
      return t(e)
    }) : t(e)
  }("undefined" == typeof angular ? null : angular, function(e) {
    var t = e.module("angularFileUpload", []);
    return t.value("fileUploaderOptions", {
      url: "/",
      alias: "file",
      headers: {},
      queue: [],
      progress: 0,
      autoUpload: !1,
      removeAfterUpload: !1,
      method: "POST",
      filters: [],
      formData: [],
      queueLimit: Number.MAX_VALUE,
      withCredentials: !1
    }).factory("FileUploader", ["fileUploaderOptions", "$rootScope", "$http", "$window", "$compile", function(t, n, r, i, o) {
      function a(n) {
        var r = e.copy(t);
        e.extend(this, r, n, {
          isUploading: !1,
          _nextIndex: 0,
          _failFilterIndex: -1,
          _directives: {
            select: [],
            drop: [],
            over: []
          }
        }), this.filters.unshift({
          name: "queueLimit",
          fn: this._queueLimitFilter
        }), this.filters.unshift({
          name: "folder",
          fn: this._folderFilter
        })
      }

      function s(t) {
        var n = e.isElement(t),
          r = n ? t.value : t,
          i = e.isString(r) ? "FakePath" : "Object",
          o = "_createFrom" + i;
        this[o](r)
      }

      function u(t, n, r) {
        var i = e.isElement(n),
          o = i ? e.element(n) : null,
          s = i ? null : n;
        e.extend(this, {
          url: t.url,
          alias: t.alias,
          headers: e.copy(t.headers),
          formData: e.copy(t.formData),
          removeAfterUpload: t.removeAfterUpload,
          withCredentials: t.withCredentials,
          method: t.method
        }, r, {
          uploader: t,
          file: new a.FileLikeObject(n),
          isReady: !1,
          isUploading: !1,
          isUploaded: !1,
          isSuccess: !1,
          isCancel: !1,
          isError: !1,
          progress: 0,
          index: null,
          _file: s,
          _input: o
        }), o && this._replaceNode(o)
      }

      function c(t) {
        e.extend(this, t), this.uploader._directives[this.prop].push(this), this._saveLinks(), this.bind()
      }

      function l() {
        l.super_.apply(this, arguments), this.uploader.isHTML5 || this.element.removeAttr("multiple"), this.element.prop("value", null)
      }

      function f() {
        f.super_.apply(this, arguments)
      }

      function d() {
        d.super_.apply(this, arguments)
      }
      return a.prototype.isHTML5 = !(!i.File || !i.FormData), a.prototype.addToQueue = function(t, n, r) {
        var i = this.isArrayLikeObject(t) ? t : [t],
          o = this._getFilters(r),
          s = this.queue.length,
          u = [];
        e.forEach(i, function(e) {
          var t = new a.FileLikeObject(e);
          if (this._isValidFile(t, o, n)) {
            var r = new a.FileItem(this, e, n);
            u.push(r), this.queue.push(r), this._onAfterAddingFile(r)
          } else {
            var i = this.filters[this._failFilterIndex];
            this._onWhenAddingFileFailed(t, i, n)
          }
        }, this), this.queue.length !== s && (this._onAfterAddingAll(u), this.progress = this._getTotalProgress()), this._render(), this.autoUpload && this.uploadAll()
      }, a.prototype.removeFromQueue = function(e) {
        var t = this.getIndexOfItem(e),
          n = this.queue[t];
        n.isUploading && n.cancel(), this.queue.splice(t, 1), n._destroy(), this.progress = this._getTotalProgress()
      }, a.prototype.clearQueue = function() {
        for (; this.queue.length;) this.queue[0].remove();
        this.progress = 0
      }, a.prototype.uploadItem = function(e) {
        var t = this.getIndexOfItem(e),
          n = this.queue[t],
          r = this.isHTML5 ? "_xhrTransport" : "_iframeTransport";
        n._prepareToUploading(), this.isUploading || (this.isUploading = !0, this[r](n))
      }, a.prototype.cancelItem = function(e) {
        var t = this.getIndexOfItem(e),
          n = this.queue[t],
          r = this.isHTML5 ? "_xhr" : "_form";
        n && n.isUploading && n[r].abort()
      }, a.prototype.uploadAll = function() {
        var t = this.getNotUploadedItems().filter(function(e) {
          return !e.isUploading
        });
        t.length && (e.forEach(t, function(e) {
          e._prepareToUploading()
        }), t[0].upload())
      }, a.prototype.cancelAll = function() {
        var t = this.getNotUploadedItems();
        e.forEach(t, function(e) {
          e.cancel()
        })
      }, a.prototype.isFile = function(e) {
        var t = i.File;
        return t && e instanceof t
      }, a.prototype.isFileLikeObject = function(e) {
        return e instanceof a.FileLikeObject
      }, a.prototype.isArrayLikeObject = function(t) {
        return e.isObject(t) && "length" in t
      }, a.prototype.getIndexOfItem = function(t) {
        return e.isNumber(t) ? t : this.queue.indexOf(t)
      }, a.prototype.getNotUploadedItems = function() {
        return this.queue.filter(function(e) {
          return !e.isUploaded
        })
      }, a.prototype.getReadyItems = function() {
        return this.queue.filter(function(e) {
          return e.isReady && !e.isUploading
        }).sort(function(e, t) {
          return e.index - t.index
        })
      }, a.prototype.destroy = function() {
        e.forEach(this._directives, function(t) {
          e.forEach(this._directives[t], function(e) {
            e.destroy()
          }, this)
        }, this)
      }, a.prototype.onAfterAddingAll = function() {}, a.prototype.onAfterAddingFile = function() {}, a.prototype.onWhenAddingFileFailed = function() {}, a.prototype.onBeforeUploadItem = function() {}, a.prototype.onProgressItem = function() {}, a.prototype.onProgressAll = function() {}, a.prototype.onSuccessItem = function() {}, a.prototype.onErrorItem = function() {}, a.prototype.onCancelItem = function() {}, a.prototype.onCompleteItem = function() {}, a.prototype.onCompleteAll = function() {}, a.prototype._getTotalProgress = function(e) {
        if (this.removeAfterUpload) return e || 0;
        var t = this.getNotUploadedItems().length,
          n = t ? this.queue.length - t : this.queue.length,
          r = 100 / this.queue.length,
          i = (e || 0) * r / 100;
        return Math.round(n * r + i)
      }, a.prototype._getFilters = function(t) {
        if (e.isUndefined(t)) return this.filters;
        if (e.isArray(t)) return t;
        var n = t.match(/[^\s,]+/g);
        return this.filters.filter(function(e) {
          return -1 !== n.indexOf(e.name)
        }, this)
      }, a.prototype._render = function() {
        n.$$phase || n.$apply()
      }, a.prototype._folderFilter = function(e) {
        return !(!e.size && !e.type)
      }, a.prototype._queueLimitFilter = function() {
        return this.queue.length < this.queueLimit
      }, a.prototype._isValidFile = function(e, t, n) {
        return this._failFilterIndex = -1, t.length ? t.every(function(t) {
          return this._failFilterIndex++, t.fn.call(this, e, n)
        }, this) : !0
      }, a.prototype._isSuccessCode = function(e) {
        return e >= 200 && 300 > e || 304 === e
      }, a.prototype._transformResponse = function(t, n) {
        var i = this._headersGetter(n);
        return e.forEach(r.defaults.transformResponse, function(e) {
          t = e(t, i)
        }), t
      }, a.prototype._parseHeaders = function(t) {
        var n, r, i, o = {};
        return t ? (e.forEach(t.split("\n"), function(e) {
          i = e.indexOf(":"), n = e.slice(0, i).trim().toLowerCase(), r = e.slice(i + 1).trim(), n && (o[n] = o[n] ? o[n] + ", " + r : r)
        }), o) : o
      }, a.prototype._headersGetter = function(e) {
        return function(t) {
          return t ? e[t.toLowerCase()] || null : e
        }
      }, a.prototype._xhrTransport = function(t) {
        var n = t._xhr = new XMLHttpRequest,
          r = new FormData,
          i = this;
        i._onBeforeUploadItem(t), e.forEach(t.formData, function(t) {
          e.forEach(t, function(e, t) {
            r.append(t, e)
          })
        }), r.append(t.alias, t._file, t.file.name), n.upload.onprogress = function(e) {
          var n = Math.round(e.lengthComputable ? 100 * e.loaded / e.total : 0);
          i._onProgressItem(t, n)
        }, n.onload = function() {
          var e = i._parseHeaders(n.getAllResponseHeaders()),
            r = i._transformResponse(n.response, e),
            o = i._isSuccessCode(n.status) ? "Success" : "Error",
            a = "_on" + o + "Item";
          i[a](t, r, n.status, e), i._onCompleteItem(t, r, n.status, e)
        }, n.onerror = function() {
          var e = i._parseHeaders(n.getAllResponseHeaders()),
            r = i._transformResponse(n.response, e);
          i._onErrorItem(t, r, n.status, e), i._onCompleteItem(t, r, n.status, e)
        }, n.onabort = function() {
          var e = i._parseHeaders(n.getAllResponseHeaders()),
            r = i._transformResponse(n.response, e);
          i._onCancelItem(t, r, n.status, e), i._onCompleteItem(t, r, n.status, e)
        }, n.open(t.method, t.url, !0), n.withCredentials = t.withCredentials, e.forEach(t.headers, function(e, t) {
          n.setRequestHeader(t, e)
        }), n.send(r), this._render()
      }, a.prototype._iframeTransport = function(t) {
        var n = e.element('<form style="display: none;" />'),
          r = e.element('<iframe name="iframeTransport' + Date.now() + '">'),
          i = t._input,
          o = this;
        t._form && t._form.replaceWith(i), t._form = n, o._onBeforeUploadItem(t), i.prop("name", t.alias), e.forEach(t.formData, function(t) {
          e.forEach(t, function(t, r) {
            var i = e.element('<input type="hidden" name="' + r + '" />');
            i.val(t), n.append(i)
          })
        }), n.prop({
          action: t.url,
          method: "POST",
          target: r.prop("name"),
          enctype: "multipart/form-data",
          encoding: "multipart/form-data"
        }), r.bind("load", function() {
          try {
            var e = r[0].contentDocument.body.innerHTML
          } catch (n) {}
          var i = {
              response: e,
              status: 200,
              dummy: !0
            },
            a = {},
            s = o._transformResponse(i.response, a);
          o._onSuccessItem(t, s, i.status, a), o._onCompleteItem(t, s, i.status, a)
        }), n.abort = function() {
          var e, a = {
              status: 0,
              dummy: !0
            },
            s = {};
          r.unbind("load").prop("src", "javascript:false;"), n.replaceWith(i), o._onCancelItem(t, e, a.status, s), o._onCompleteItem(t, e, a.status, s)
        }, i.after(n), n.append(i).append(r), n[0].submit(), this._render()
      }, a.prototype._onWhenAddingFileFailed = function(e, t, n) {
        this.onWhenAddingFileFailed(e, t, n)
      }, a.prototype._onAfterAddingFile = function(e) {
        this.onAfterAddingFile(e)
      }, a.prototype._onAfterAddingAll = function(e) {
        this.onAfterAddingAll(e)
      }, a.prototype._onBeforeUploadItem = function(e) {
        e._onBeforeUpload(), this.onBeforeUploadItem(e)
      }, a.prototype._onProgressItem = function(e, t) {
        var n = this._getTotalProgress(t);
        this.progress = n, e._onProgress(t), this.onProgressItem(e, t), this.onProgressAll(n), this._render()
      }, a.prototype._onSuccessItem = function(e, t, n, r) {
        e._onSuccess(t, n, r), this.onSuccessItem(e, t, n, r)
      }, a.prototype._onErrorItem = function(e, t, n, r) {
        e._onError(t, n, r), this.onErrorItem(e, t, n, r)
      }, a.prototype._onCancelItem = function(e, t, n, r) {
        e._onCancel(t, n, r), this.onCancelItem(e, t, n, r)
      }, a.prototype._onCompleteItem = function(t, n, r, i) {
        t._onComplete(n, r, i), this.onCompleteItem(t, n, r, i);
        var o = this.getReadyItems()[0];
        return this.isUploading = !1, e.isDefined(o) ? void o.upload() : (this.onCompleteAll(), this.progress = this._getTotalProgress(), void this._render())
      }, a.isFile = a.prototype.isFile, a.isFileLikeObject = a.prototype.isFileLikeObject, a.isArrayLikeObject = a.prototype.isArrayLikeObject, a.isHTML5 = a.prototype.isHTML5, a.inherit = function(e, t) {
        e.prototype = Object.create(t.prototype), e.prototype.constructor = e, e.super_ = t
      }, a.FileLikeObject = s, a.FileItem = u, a.FileDirective = c, a.FileSelect = l, a.FileDrop = f, a.FileOver = d, s.prototype._createFromFakePath = function(e) {
        this.lastModifiedDate = null, this.size = null, this.type = "like/" + e.slice(e.lastIndexOf(".") + 1).toLowerCase(), this.name = e.slice(e.lastIndexOf("/") + e.lastIndexOf("\\") + 2)
      }, s.prototype._createFromObject = function(t) {
        this.lastModifiedDate = e.copy(t.lastModifiedDate), this.size = t.size, this.type = t.type, this.name = t.name
      }, u.prototype.upload = function() {
        this.uploader.uploadItem(this)
      }, u.prototype.cancel = function() {
        this.uploader.cancelItem(this)
      }, u.prototype.remove = function() {
        this.uploader.removeFromQueue(this)
      }, u.prototype.onBeforeUpload = function() {}, u.prototype.onProgress = function() {}, u.prototype.onSuccess = function() {}, u.prototype.onError = function() {}, u.prototype.onCancel = function() {}, u.prototype.onComplete = function() {}, u.prototype._onBeforeUpload = function() {
        this.isReady = !0, this.isUploading = !0, this.isUploaded = !1, this.isSuccess = !1, this.isCancel = !1, this.isError = !1, this.progress = 0, this.onBeforeUpload()
      }, u.prototype._onProgress = function(e) {
        this.progress = e, this.onProgress(e)
      }, u.prototype._onSuccess = function(e, t, n) {
        this.isReady = !1, this.isUploading = !1, this.isUploaded = !0, this.isSuccess = !0, this.isCancel = !1, this.isError = !1, this.progress = 100, this.index = null, this.onSuccess(e, t, n)
      }, u.prototype._onError = function(e, t, n) {
        this.isReady = !1, this.isUploading = !1, this.isUploaded = !0, this.isSuccess = !1, this.isCancel = !1, this.isError = !0, this.progress = 0, this.index = null, this.onError(e, t, n)
      }, u.prototype._onCancel = function(e, t, n) {
        this.isReady = !1, this.isUploading = !1, this.isUploaded = !1, this.isSuccess = !1, this.isCancel = !0, this.isError = !1, this.progress = 0, this.index = null, this.onCancel(e, t, n)
      }, u.prototype._onComplete = function(e, t, n) {
        this.onComplete(e, t, n), this.removeAfterUpload && this.remove()
      }, u.prototype._destroy = function() {
        this._input && this._input.remove(), this._form && this._form.remove(), delete this._form, delete this._input
      }, u.prototype._prepareToUploading = function() {
        this.index = this.index || ++this.uploader._nextIndex, this.isReady = !0
      }, u.prototype._replaceNode = function(e) {
        var t = o(e.clone())(e.scope());
        t.prop("value", null), e.css("display", "none"), e.after(t)
      }, c.prototype.events = {}, c.prototype.bind = function() {
        for (var e in this.events) {
          var t = this.events[e];
          this.element.bind(e, this[t])
        }
      }, c.prototype.unbind = function() {
        for (var e in this.events) this.element.unbind(e, this.events[e])
      }, c.prototype.destroy = function() {
        var e = this.uploader._directives[this.prop].indexOf(this);
        this.uploader._directives[this.prop].splice(e, 1), this.unbind()
      }, c.prototype._saveLinks = function() {
        for (var e in this.events) {
          var t = this.events[e];
          this[t] = this[t].bind(this)
        }
      }, a.inherit(l, c), l.prototype.events = {
        $destroy: "destroy",
        change: "onChange"
      }, l.prototype.prop = "select", l.prototype.getOptions = function() {}, l.prototype.getFilters = function() {}, l.prototype.isEmptyAfterSelection = function() {
        return !!this.element.attr("multiple")
      }, l.prototype.onChange = function() {
        var e = this.uploader.isHTML5 ? this.element[0].files : this.element[0],
          t = this.getOptions(),
          n = this.getFilters();
        this.uploader.isHTML5 || this.destroy(), this.uploader.addToQueue(e, t, n), this.isEmptyAfterSelection() && this.element.prop("value", null)
      }, a.inherit(f, c), f.prototype.events = {
        $destroy: "destroy",
        drop: "onDrop",
        dragover: "onDragOver",
        dragleave: "onDragLeave"
      }, f.prototype.prop = "drop", f.prototype.getOptions = function() {}, f.prototype.getFilters = function() {}, f.prototype.onDrop = function(t) {
        var n = this._getTransfer(t);
        if (n) {
          var r = this.getOptions(),
            i = this.getFilters();
          this._preventAndStop(t), e.forEach(this.uploader._directives.over, this._removeOverClass, this), this.uploader.addToQueue(n.files, r, i)
        }
      }, f.prototype.onDragOver = function(t) {
        var n = this._getTransfer(t);
        this._haveFiles(n.types) && (n.dropEffect = "copy", this._preventAndStop(t), e.forEach(this.uploader._directives.over, this._addOverClass, this))
      }, f.prototype.onDragLeave = function(t) {
        t.currentTarget === this.element[0] && (this._preventAndStop(t), e.forEach(this.uploader._directives.over, this._removeOverClass, this))
      }, f.prototype._getTransfer = function(e) {
        return e.dataTransfer ? e.dataTransfer : e.originalEvent.dataTransfer
      }, f.prototype._preventAndStop = function(e) {
        e.preventDefault(), e.stopPropagation()
      }, f.prototype._haveFiles = function(e) {
        return e ? e.indexOf ? -1 !== e.indexOf("Files") : e.contains ? e.contains("Files") : !1 : !1
      }, f.prototype._addOverClass = function(e) {
        e.addOverClass()
      }, f.prototype._removeOverClass = function(e) {
        e.removeOverClass()
      }, a.inherit(d, c), d.prototype.events = {
        $destroy: "destroy"
      }, d.prototype.prop = "over", d.prototype.overClass = "nv-file-over", d.prototype.addOverClass = function() {
        this.element.addClass(this.getOverClass())
      }, d.prototype.removeOverClass = function() {
        this.element.removeClass(this.getOverClass())
      }, d.prototype.getOverClass = function() {
        return this.overClass
      }, a
    }]).directive("nvFileSelect", ["$parse", "FileUploader", function(e, t) {
      return {
        link: function(n, r, i) {
          var o = n.$eval(i.uploader);
          if (!(o instanceof t)) throw new TypeError('"Uploader" must be an instance of FileUploader');
          var a = new t.FileSelect({
            uploader: o,
            element: r
          });
          a.getOptions = e(i.options).bind(a, n), a.getFilters = function() {
            return i.filters
          }
        }
      }
    }]).directive("nvFileDrop", ["$parse", "FileUploader", function(e, t) {
      return {
        link: function(n, r, i) {
          var o = n.$eval(i.uploader);
          if (!(o instanceof t)) throw new TypeError('"Uploader" must be an instance of FileUploader');
          if (o.isHTML5) {
            var a = new t.FileDrop({
              uploader: o,
              element: r
            });
            a.getOptions = e(i.options).bind(a, n), a.getFilters = function() {
              return i.filters
            }
          }
        }
      }
    }]).directive("nvFileOver", ["FileUploader", function(e) {
      return {
        link: function(t, n, r) {
          var i = t.$eval(r.uploader);
          if (!(i instanceof e)) throw new TypeError('"Uploader" must be an instance of FileUploader');
          var o = new e.FileOver({
            uploader: i,
            element: n
          });
          o.getOverClass = function() {
            return r.overClass || this.overClass
          }
        }
      }
    }]), t
  });
var Showdown = {
    extensions: {}
  },
  forEach = Showdown.forEach = function(e, t) {
    if ("function" == typeof e.forEach) e.forEach(t);
    else {
      var n, r = e.length;
      for (n = 0; r > n; n++) t(e[n], n, e)
    }
  },
  stdExtName = function(e) {
    return e.replace(/[_-]||\s/g, "").toLowerCase()
  };
Showdown.converter = function(e) {
    var t, n, r, i = 0,
      o = [],
      a = [];
    if ("undefind" != typeof module && "undefined" != typeof exports && "undefind" != typeof require) {
      var s = require("fs");
      if (s) {
        var u = s.readdirSync((__dirname || ".") + "/extensions").filter(function(e) {
          return ~e.indexOf(".js")
        }).map(function(e) {
          return e.replace(/\.js$/, "")
        });
        Showdown.forEach(u, function(e) {
          var t = stdExtName(e);
          Showdown.extensions[t] = require("./extensions/" + e)
        })
      }
    }
    if (this.makeHtml = function(e) {
        return t = {}, n = {}, r = [], e = e.replace(/~/g, "~T"), e = e.replace(/\$/g, "~D"), e = e.replace(/\r\n/g, "\n"), e = e.replace(/\r/g, "\n"), e = "\n\n" + e + "\n\n", e = q(e), e = e.replace(/^[ \t]+$/gm, ""), Showdown.forEach(o, function(t) {
          e = f(t, e)
        }), e = S(e), e = h(e), e = d(e), e = m(e), e = F(e), e = e.replace(/~D/g, "$$"), e = e.replace(/~T/g, "~"), Showdown.forEach(a, function(t) {
          e = f(t, e)
        }), e
      }, e && e.extensions) {
      var c = this;
      Showdown.forEach(e.extensions, function(e) {
        if ("string" == typeof e && (e = Showdown.extensions[stdExtName(e)]), "function" != typeof e) throw "Extension '" + e + "' could not be loaded.  It was either not found or is not a valid extension.";
        Showdown.forEach(e(c), function(e) {
          e.type ? "language" === e.type || "lang" === e.type ? o.push(e) : ("output" === e.type || "html" === e.type) && a.push(e) : a.push(e)
        })
      })
    }
    var l, f = function(e, t) {
        if (e.regex) {
          var n = new RegExp(e.regex, "g");
          return t.replace(n, e.replace)
        }
        return e.filter ? e.filter(t) : void 0
      },
      d = function(e) {
        return e += "~0", e = e.replace(/^[ ]{0,3}\[(.+)\]:[ \t]*\n?[ \t]*<?(\S+?)>?[ \t]*\n?[ \t]*(?:(\n*)["(](.+?)[")][ \t]*)?(?:\n+|(?=~0))/gm, function(e, r, i, o, a) {
          return r = r.toLowerCase(), t[r] = O(i), o ? o + a : (a && (n[r] = a.replace(/"/g, "&quot;")), "")
        }), e = e.replace(/~0/, "")
      },
      h = function(e) {
        e = e.replace(/\n/g, "\n\n");
        return e = e.replace(/^(<(p|div|h[1-6]|blockquote|pre|table|dl|ol|ul|script|noscript|form|fieldset|iframe|math|ins|del)\b[^\r]*?\n<\/\2>[ \t]*(?=\n+))/gm, p), e = e.replace(/^(<(p|div|h[1-6]|blockquote|pre|table|dl|ol|ul|script|noscript|form|fieldset|iframe|math|style|section|header|footer|nav|article|aside)\b[^\r]*?<\/\2>[ \t]*(?=\n+)\n)/gm, p), e = e.replace(/(\n[ ]{0,3}(<(hr)\b([^<>])*?\/?>)[ \t]*(?=\n{2,}))/g, p), e = e.replace(/(\n\n[ ]{0,3}<!(--[^\r]*?--\s*)+>[ \t]*(?=\n{2,}))/g, p), e = e.replace(/(?:\n\n)([ ]{0,3}(?:<([?%])[^\r]*?\2>)[ \t]*(?=\n{2,}))/g, p), e = e.replace(/\n\n/g, "\n")
      },
      p = function(e, t) {
        var n = t;
        return n = n.replace(/\n\n/g, "\n"), n = n.replace(/^\n/, ""), n = n.replace(/\n+$/g, ""), n = "\n\n~K" + (r.push(n) - 1) + "K\n\n"
      },
      m = function(e) {
        e = x(e);
        var t = C("<hr />");
        return e = e.replace(/^[ ]{0,2}([ ]?\*[ ]?){3,}[ \t]*$/gm, t), e = e.replace(/^[ ]{0,2}([ ]?\-[ ]?){3,}[ \t]*$/gm, t), e = e.replace(/^[ ]{0,2}([ ]?\_[ ]?){3,}[ \t]*$/gm, t), e = _(e), e = k(e), e = E(e), e = h(e), e = D(e)
      },
      g = function(e) {
        return e = T(e), e = v(e), e = N(e), e = b(e), e = y(e), e = P(e), e = O(e), e = A(e), e = e.replace(/  +\n/g, " <br />\n")
      },
      v = function(e) {
        var t = /(<[a-z\/!$]("[^"]*"|'[^']*'|[^'">])*>|<!(--.*?--\s*)+>)/gi;
        return e = e.replace(t, function(e) {
          var t = e.replace(/(.)<\/?code>(?=.)/g, "$1`");
          return t = R(t, "\\`*_")
        })
      },
      y = function(e) {
        return e = e.replace(/(\[((?:\[[^\]]*\]|[^\[\]])*)\][ ]?(?:\n[ ]*)?\[(.*?)\])()()()()/g, $), e = e.replace(/(\[((?:\[[^\]]*\]|[^\[\]])*)\]\([ \t]*()<?(.*?(?:\(.*?\).*?)?)>?[ \t]*((['"])(.*?)\6[ \t]*)?\))/g, $), e = e.replace(/(\[([^\[\]]+)\])()()()()()/g, $)
      },
      $ = function(e, r, i, o, a, s, u, c) {
        void 0 == c && (c = "");
        var l = r,
          f = i,
          d = o.toLowerCase(),
          h = a,
          p = c;
        if ("" == h)
          if ("" == d && (d = f.toLowerCase().replace(/ ?\n/g, " ")), h = "#" + d, void 0 != t[d]) h = t[d], void 0 != n[d] && (p = n[d]);
          else {
            if (!(l.search(/\(\s*\)$/m) > -1)) return l;
            h = ""
          }
        h = R(h, "*_");
        var m = '<a href="' + h + '"';
        return "" != p && (p = p.replace(/"/g, "&quot;"), p = R(p, "*_"), m += ' title="' + p + '"'), m += ">" + f + "</a>"
      },
      b = function(e) {
        return e = e.replace(/(!\[(.*?)\][ ]?(?:\n[ ]*)?\[(.*?)\])()()()()/g, w), e = e.replace(/(!\[(.*?)\]\s?\([ \t]*()<?(\S+?)>?[ \t]*((['"])(.*?)\6[ \t]*)?\))/g, w)
      },
      w = function(e, r, i, o, a, s, u, c) {
        var l = r,
          f = i,
          d = o.toLowerCase(),
          h = a,
          p = c;
        if (p || (p = ""), "" == h) {
          if ("" == d && (d = f.toLowerCase().replace(/ ?\n/g, " ")), h = "#" + d, void 0 == t[d]) return l;
          h = t[d], void 0 != n[d] && (p = n[d])
        }
        f = f.replace(/"/g, "&quot;"), h = R(h, "*_");
        var m = '<img src="' + h + '" alt="' + f + '"';
        return p = p.replace(/"/g, "&quot;"), p = R(p, "*_"), m += ' title="' + p + '"', m += " />"
      },
      x = function(e) {
        function t(e) {
          return e.replace(/[^\w]/g, "").toLowerCase()
        }
        return e = e.replace(/^(.+)[ \t]*\n=+[ \t]*\n+/gm, function(e, n) {
          return C('<h1 id="' + t(n) + '">' + g(n) + "</h1>")
        }), e = e.replace(/^(.+)[ \t]*\n-+[ \t]*\n+/gm, function(e, n) {
          return C('<h2 id="' + t(n) + '">' + g(n) + "</h2>")
        }), e = e.replace(/^(\#{1,6})[ \t]*(.+?)[ \t]*\#*\n+/gm, function(e, n, r) {
          var i = n.length;
          return C("<h" + i + ' id="' + t(r) + '">' + g(r) + "</h" + i + ">")
        })
      },
      _ = function(e) {
        e += "~0";
        var t = /^(([ ]{0,3}([*+-]|\d+[.])[ \t]+)[^\r]+?(~0|\n{2,}(?=\S)(?![ \t]*(?:[*+-]|\d+[.])[ \t]+)))/gm;
        return i ? e = e.replace(t, function(e, t, n) {
          var r = t,
            i = n.search(/[*+-]/g) > -1 ? "ul" : "ol";
          r = r.replace(/\n{2,}/g, "\n\n\n");
          var o = l(r);
          return o = o.replace(/\s+$/, ""), o = "<" + i + ">" + o + "</" + i + ">\n"
        }) : (t = /(\n\n|^\n?)(([ ]{0,3}([*+-]|\d+[.])[ \t]+)[^\r]+?(~0|\n{2,}(?=\S)(?![ \t]*(?:[*+-]|\d+[.])[ \t]+)))/g, e = e.replace(t, function(e, t, n, r) {
          var i = t,
            o = n,
            a = r.search(/[*+-]/g) > -1 ? "ul" : "ol",
            o = o.replace(/\n{2,}/g, "\n\n\n"),
            s = l(o);
          return s = i + "<" + a + ">\n" + s + "</" + a + ">\n"
        })), e = e.replace(/~0/, "")
      };
    l = function(e) {
      return i++, e = e.replace(/\n{2,}$/, "\n"), e += "~0", e = e.replace(/(\n)?(^[ \t]*)([*+-]|\d+[.])[ \t]+([^\r]+?(\n{1,2}))(?=\n*(~0|\2([*+-]|\d+[.])[ \t]+))/gm, function(e, t, n, r, i) {
        var o = i,
          a = t;
        return a || o.search(/\n{2,}/) > -1 ? o = m(I(o)) : (o = _(I(o)), o = o.replace(/\n$/, ""), o = g(o)), "<li>" + o + "</li>\n"
      }), e = e.replace(/~0/g, ""), i--, e
    };
    var k = function(e) {
        return e += "~0", e = e.replace(/(?:\n\n|^)((?:(?:[ ]{4}|\t).*\n+)+)(\n*[ ]{0,3}[^ \t\n]|(?=~0))/g, function(e, t, n) {
          var r = t,
            i = n;
          return r = M(I(r)), r = q(r), r = r.replace(/^\n+/g, ""), r = r.replace(/\n+$/g, ""), r = "<pre><code>" + r + "\n</code></pre>", C(r) + i
        }), e = e.replace(/~0/, "")
      },
      S = function(e) {
        return e += "~0", e = e.replace(/(?:^|\n)```(.*)\n([\s\S]*?)\n```/g, function(e, t, n) {
          var r = t,
            i = n;
          return i = M(i), i = q(i), i = i.replace(/^\n+/g, ""), i = i.replace(/\n+$/g, ""), i = "<pre><code" + (r ? ' class="' + r + '"' : "") + ">" + i + "\n</code></pre>", C(i)
        }), e = e.replace(/~0/, "")
      },
      C = function(e) {
        return e = e.replace(/(^\n+|\n+$)/g, ""), "\n\n~K" + (r.push(e) - 1) + "K\n\n"
      },
      T = function(e) {
        return e = e.replace(/(^|[^\\])(`+)([^\r]*?[^`])\2(?!`)/gm, function(e, t, n, r) {
          var i = r;
          return i = i.replace(/^([ \t]*)/g, ""), i = i.replace(/[ \t]*$/g, ""), i = M(i), t + "<code>" + i + "</code>"
        })
      },
      M = function(e) {
        return e = e.replace(/&/g, "&amp;"), e = e.replace(/</g, "&lt;"), e = e.replace(/>/g, "&gt;"), e = R(e, "*_{}[]\\", !1)
      },
      A = function(e) {
        return e = e.replace(/(\*\*|__)(?=\S)([^\r]*?\S[*_]*)\1/g, "<strong>$2</strong>"), e = e.replace(/(\*|_)(?=\S)([^\r]*?\S)\1/g, "<em>$2</em>")
      },
      E = function(e) {
        return e = e.replace(/((^[ \t]*>[ \t]?.+\n(.+\n)*\n*)+)/gm, function(e, t) {
          var n = t;
          return n = n.replace(/^[ \t]*>[ \t]?/gm, "~0"), n = n.replace(/~0/g, ""), n = n.replace(/^[ \t]+$/gm, ""), n = m(n), n = n.replace(/(^|\n)/g, "$1  "), n = n.replace(/(\s*<pre>[^\r]+?<\/pre>)/gm, function(e, t) {
            var n = t;
            return n = n.replace(/^  /gm, "~0"), n = n.replace(/~0/g, "")
          }), C("<blockquote>\n" + n + "\n</blockquote>")
        })
      },
      D = function(e) {
        e = e.replace(/^\n+/g, ""), e = e.replace(/\n+$/g, "");
        for (var t = e.split(/\n{2,}/g), n = [], i = t.length, o = 0; i > o; o++) {
          var a = t[o];
          a.search(/~K(\d+)K/g) >= 0 ? n.push(a) : a.search(/\S/) >= 0 && (a = g(a), a = a.replace(/^([ \t]*)/g, "<p>"), a += "</p>", n.push(a))
        }
        i = n.length;
        for (var o = 0; i > o; o++)
          for (; n[o].search(/~K(\d+)K/) >= 0;) {
            var s = r[RegExp.$1];
            s = s.replace(/\$/g, "$$$$"), n[o] = n[o].replace(/~K\d+K/, s)
          }
        return n.join("\n\n")
      },
      O = function(e) {
        return e = e.replace(/&(?!#?[xX]?(?:[0-9a-fA-F]+|\w+);)/g, "&amp;"), e = e.replace(/<(?![a-z\/?\$!])/gi, "&lt;")
      },
      N = function(e) {
        return e = e.replace(/\\(\\)/g, L), e = e.replace(/\\([`*_{}\[\]()>#+-.!])/g, L)
      },
      P = function(e) {
        return e = e.replace(/<((https?|ftp|dict):[^'">\s]+)>/gi, '<a href="$1">$1</a>'), e = e.replace(/<(?:mailto:)?([-.\w]+\@[-a-z0-9]+(\.[-a-z0-9]+)*\.[a-z]+)>/gi, function(e, t) {
          return j(F(t))
        })
      },
      j = function(e) {
        var t = [function(e) {
          return "&#" + e.charCodeAt(0) + ";"
        }, function(e) {
          return "&#x" + e.charCodeAt(0).toString(16) + ";"
        }, function(e) {
          return e
        }];
        return e = "mailto:" + e, e = e.replace(/./g, function(e) {
          if ("@" == e) e = t[Math.floor(2 * Math.random())](e);
          else if (":" != e) {
            var n = Math.random();
            e = n > .9 ? t[2](e) : n > .45 ? t[1](e) : t[0](e)
          }
          return e
        }), e = '<a href="' + e + '">' + e + "</a>", e = e.replace(/">.+:/g, '">')
      },
      F = function(e) {
        return e = e.replace(/~E(\d+)E/g, function(e, t) {
          var n = parseInt(t);
          return String.fromCharCode(n)
        })
      },
      I = function(e) {
        return e = e.replace(/^(\t|[ ]{1,4})/gm, "~0"), e = e.replace(/~0/g, "")
      },
      q = function(e) {
        return e = e.replace(/\t(?=\t)/g, "    "), e = e.replace(/\t/g, "~A~B"), e = e.replace(/~B(.+?)~A/g, function(e, t) {
          for (var n = t, r = 4 - n.length % 4, i = 0; r > i; i++) n += " ";
          return n
        }), e = e.replace(/~A/g, "    "), e = e.replace(/~B/g, "")
      },
      R = function(e, t, n) {
        var r = "([" + t.replace(/([\[\]\\])/g, "\\$1") + "])";
        n && (r = "\\\\" + r);
        var i = new RegExp(r, "g");
        return e = e.replace(i, L)
      },
      L = function(e, t) {
        var n = t.charCodeAt(0);
        return "~E" + n + "E"
      }
  }, "undefined" != typeof module && (module.exports = Showdown), "function" == typeof define && define.amd && define("showdown", function() {
    return Showdown
  }),
  function() {
    angular.module("sc.noticias", [])
  }.call(this),
  function() {
    angular.module("sc.commons.app-notifications", ["sc.commons.factories.resourceList", "sc.websocket"]).service("$scAppNotifications", ["$rootScope", "ResourceList", "Sistema::NotificacaoResource", "$scWebSocket", function(e, t, n, r) {
      var i, o;
      return o = {
        pendentes: [],
        nao_lidas: [],
        resource: new t(n, "$scAppNotifications.notificacao"),
        checkData: function(e) {
          return e.lido ? this.nao_lidas.removeById(e.id) : this.pendentes.getById(e.id) || this.nao_lidas.push(e), e.created_at = new Date(e.created_at), !this.checked_at || e.created_at > this.checked_at ? this.pendentes.getById(e.id) ? void 0 : this.pendentes.push(e) : this.pendentes.removeById(e.id)
        },
        ler: function() {
          return this.reler = !0, !this.lendo && this.nao_lidas.length ? (this.reler = !1, this.lendo = !0, n.lerTodas({
            ids: this.nao_lidas.map(function(e) {
              return e.id
            })
          }, function(e) {
            return function() {
              var t, n, r, i;
              for (e.lendo = !1, i = e.nao_lidas, n = 0, r = i.length; r > n; n++) t = i[n], t.lido = !0;
              return e.nao_lidas = [], e.reler ? e.ler() : void 0
            }
          }(this), function(e) {
            return function() {
              return e.lendo = !1
            }
          }(this))) : void 0
        },
        buscar: function() {
          return this.resource.load(function(e) {
            return function(t, n) {
              var r, i, o, a, s;
              for (e.pendentes = [], e.nao_lidas = [], e.checked_at = new Date(n.checked_at), e.user_id = n.user_id, a = t.list, s = [], i = 0, o = a.length; o > i; i++) r = a[i], s.push(e.checkData(r));
              return s
            }
          }(this))
        },
        touch: function() {
          var e;
          return this.retouch = !0, this.touching ? void 0 : (this.retouch = !1, this.touching = !0, this.checked_at = new Date, this.pendentes = [], e = function(e) {
            return function() {
              return e.touching = !1, e.retouch ? e.touch() : void 0
            }
          }(this), n.touch({}, e, e))
        }
      }, e.$on("$scAppNotifications.notificacao.setted", function(e, t) {
        return o.checkData(t)
      }), i = function(e) {
        return e.destinatario_id.toString() === o.user_id.toString() ? o.resource.set(e, !0) : void 0
      }, r.scope(e).subscribe("sistema-notificacao").on("atualizada", i).on("nova", i), o.buscar(), o
    }]).factory("Sistema::NotificacaoResource", ["$resource", function(e) {
      return e("sistema/notificacoes/:id", {
        id: "@id"
      }, {
        list: {
          method: "GET"
        },
        update: {
          method: "PUT"
        },
        touch: {
          url: "sistema/notificacoes/touch",
          method: "PUT"
        },
        lerTodas: {
          url: "sistema/notificacoes/ler_todas",
          method: "PUT"
        }
      })
    }]).controller("SC::Menu::Notificacoes", ["$scope", "$routeParams", "scToggle", "$scAppNotifications", "$location", "Sistema::NotificacaoResource", function(e, t, n, r, i, o) {
      return e.init = function() {
        return e.notificacoes = r, e.boxMessages = new n({
          onOpen: function() {
            return r.touch()
          }
        })
      }, e.boxColorDefault = "sc-bg-gray-lighter", e.params = t, e.$watch("params._notificacao_id", function(e) {
        return e ? o.update({
          id: e
        }, function() {
          return i.search("_notificacao_id", null)
        }, angular.noop) : void 0
      }), e.template = {
        hrItem: function(e) {
          return e.lido ? "sc-hr-gray-light" : "sc-hr-blue-light"
        },
        button: function() {
          return e.adding ? "sc-bg-white sc-text-blue-dark sc-text-shadow-none" : e.boxMessages.opened ? "" + e.boxColorDefault + " sc-text-blue sc-text-shadow-none" : "sc-text-blue-lighter"
        }
      }
    }])
  }.call(this),
  function() {
    angular.module("sc.commons.components.currencyInput", []).directive("scCurrencyInput", function() {
      return {
        require: "ngModel",
        scope: {
          myModel: "=ngModel"
        },
        link: function(e, t) {
          var n;
          return t.toInputMoneyPtBr(), n = function() {
            e.myModel = dinheiro_bd(t.val())
          }, t.bind("keyup change", function() {
            return e.$apply(n)
          }), e.$watch("myModel", function(n) {
            return "string" == typeof n ? e.myModel = dinheiro_bd(n) : t.val(dinheiro(n || 0))
          })
        }
      }
    })
  }.call(this),
  function() {
    angular.module("sc.login", []).factory("fbScript", function() {
      var e, t;
      return t = function(e, t, n) {
        var r, i;
        return r = e.getElementsByTagName(t)[0], e.getElementById(n) ? void 0 : (i = e.createElement(t), i.id = n, i.src = "//connect.facebook.net/en_US/sdk.js", r.parentNode.insertBefore(i, r))
      }, e = function() {
        return window.fbAsyncInit = function() {
          return FB.init({
            appId: angular.element("body").attr("data-facebook-app"),
            status: !0,
            cookie: !0,
            xfbml: !0,
            version: "v2.3"
          })
        }
      }, {
        injected: !1,
        inject: function() {
          return this.injected ? void 0 : (this.injected = !0, e(), t(document, "script", "facebook-jssdk"))
        }
      }
    }).directive("fbLogin", ["LoginService", "fbScript", function(e, t) {
      return {
        scope: {
          callback: "=fbLogin"
        },
        link: function(e, n) {
          var r;
          return t.inject(), r = function(t) {
            return t.preventDefault(), FB.login(function(t) {
              return t.authResponse ? e.callback(t.authResponse.accessToken) : void 0
            }, {
              scope: "email"
            })
          }, n.bind("click", r), e.$on("$destroy", function() {
            return n.unbind("click", r)
          })
        }
      }
    }]).service("LoginService", ["$resource", "$http", function(e, t) {
      var n, r;
      return n = function(e) {
        return JSON.stringify({
          session: e
        })
      }, r = {
        me: void 0,
        removeProvider: function(e) {
          var t;
          return (null != (t = this.me) ? t.providers || (t.providers = []) : void 0).remove(e)
        },
        addProvider: function(e) {
          var t;
          return (null != (t = this.me) ? t.providers || (t.providers = []) : void 0).push(e)
        },
        hasProvider: function(e) {
          var t, n;
          return null != (t = this.me) && null != (n = t.providers) ? n.inArray(e) : void 0
        },
        errors: {},
        working: !1,
        disconnecting: {},
        connecting: {},
        redirect: void 0,
        resource: e("session", {}, {
          create: {
            method: "POST",
            transformRequest: n
          },
          destroy: {
            method: "GET",
            url: "/sair"
          },
          show: {
            method: "GET"
          }
        }),
        disconnectFrom: function(e) {
          return this.working ? void 0 : (this.working = this.disconnecting[e] = !0, this.errors = [], t["delete"]("/auth/" + e).success(function(t) {
            return function() {
              return t.working = t.disconnecting[e] = !1, t.removeProvider(e)
            }
          }(this)).error(function(t) {
            return function(n) {
              return t.working = t.disconnecting[e] = !1, t.errors = n.errors
            }
          }(this)))
        },
        connectToFacebook: function(e, n, r) {
          var i;
          if (null != e && !this.working) return this.working = this.connecting.facebook = !0, n || (n = angular.noop), r || (r = angular.noop), i = "/auth/facebook_access_token/callback?access_token=" + e, t.post(i).success(function(e) {
            return function(t) {
              return e.working = e.connecting.facebook = !1, e.errors = {}, t ? (e.redirect = t.redirect_url, e.me = t) : e.addProvider("facebook"), n(t)
            }
          }(this)).error(function(e) {
            return function(t) {
              return e.working = e.connecting.facebook = !1, e.errors = t.errors, r(t)
            }
          }(this))
        },
        create: function(e, t, n) {
          var r, i;
          return n || (n = angular.noop), t || (t = angular.noop), i = function(e) {
            return function(n) {
              return e.redirect = n.redirect_url, e.errors = {}, e.me = n, t(n)
            }
          }(this), r = function(e) {
            return function(t) {
              var r;
              return e.redirect = "", e.errors = (null != (r = t.data) ? r.errors : void 0) || {}, e.me = void 0, n(t)
            }
          }(this), this.resource.create(e, i, r)
        },
        destroy: function(e, t) {
          var n, r;
          return t || (t = angular.noop), e || (e = angular.noop), r = function(t) {
            return function(n) {
              return t.redirect = "", t.errors = {}, t.me = void 0, e(n)
            }
          }(this), n = function() {
            return function(e) {
              return t(e)
            }
          }(this), this.resource.destroy({}, r, n)
        },
        show: function(e, t) {
          var n, r;
          if (!this.working) return this.working = !0, t || (t = angular.noop), e || (e = angular.noop), r = function(t) {
            return function(n) {
              return t.redirect = n.redirect_url, t.working = !1, t.errors = {}, t.me = n, e(n)
            }
          }(this), n = function(e) {
            return function(n) {
              var r;
              return e.redirect = "", e.working = !1, e.errors = (null != (r = n.data) ? r.errors : void 0) || {}, e.me = void 0, t(n)
            }
          }(this), this.resource.show({}, r, n)
        }
      }, r.show(), r
    }])
  }.call(this),
  function() {
    angular.module("sc.commons.components.monthPicker", []).directive("scMonthPicker", ["$compile", "$scTimezone", "$document", "$locale", function(e, t, n, r) {
      return {
        restrict: "A",
        require: "ngModel",
        replace: !0,
        scope: {
          myModel: "=ngModel",
          ngDisable: "=ngDisable"
        },
        link: function(e, i, o) {
          var a, s, u, c;
          o.tabindex || i.prop("tabindex", "0"), c = e.myModel, u = function() {
            return "" + t.now.format("YYYY-MM")
          }, c || (c = u()), e.handleKeyDown = function(t) {
            return e.ngDisable ? void 0 : (t.keyCode === keyMap.ARROW.RIGHT && e.incMonth(), t.keyCode === keyMap.ARROW.LEFT && e.decMonth(), t.keyCode === keyMap.ARROW.DOWN && (e.openedDropDown = !0), t.keyCode === keyMap.ARROW.UP ? e.openedDropDown = !1 : void 0)
          }, e.pressedEnterOnDate = function(t, n, r) {
            return t.keyCode === keyMap.ENTER ? (e.setMonth(n, r), i[0].focus()) : void 0
          }, e.getYear = function() {
            return e.year
          }, e.setMonthYear = function(n) {
            var r;
            if (!e.ngDisable) return n !== !0 && n || (n = u()), e.month = n.split("-")[1].toI(), e.year = n.split("-")[0].toI(), r = s[e.month - 1].capitalize(), e.monthYearString = "" + r + " / " + e.year, e.myModel = moment(t["new"](e.year, e.month - 1, 1)).format("YYYY-MM-DD")
          }, e.openDropdown = function() {
            return e.ngDisable ? void 0 : e.openedDropDown = !e.openedDropDown
          }, e.setMonth = function(t, n) {
            return e.setMonthYear("" + n + "-" + t), e.openedDropDown = !1
          }, e.decYear = function() {
            return e.year--
          }, e.incYear = function() {
            return e.year++
          }, e.decMonth = function() {
            return e.ngDisable ? void 0 : (e.month--, 0 === e.month && (e.year--, e.month = 12), e.setMonth(e.month, e.year))
          }, e.incMonth = function() {
            return e.ngDisable ? void 0 : (e.month = (e.month + 1) % 13, e.month || (e.year++, e.month = 1), e.setMonth(e.month, e.year))
          }, s = r.DATETIME_FORMATS.MONTH, e.monthsShortName = r.DATETIME_FORMATS.SHORTMONTH, e.setMonthYear(c), e.$watch("ngDisable", function(e, t, n) {
            return void 0 !== e ? (i.attr("disabled", e), e ? (n.tabindex = i.attr("tabindex"), i.removeAttr("tabindex")) : i.attr("tabindex", n.tabindex)) : void 0
          }), e.$watch("myModel", function(e, t, n) {
            return n.setMonthYear ? n.setMonthYear(e) : void 0
          }), a = function(t) {
            return e.$apply(function() {
              var n, r, i;
              i = t.target, n = $(i), r = n.closest(".sc-month-picker"), 0 === r.length && (e.openedDropDown = !1)
            })
          }, n.bind("click", a), e.$on("$destroy", function() {
            return n.unbind("click", a)
          })
        },
        template: '<div class="sc-month-picker" ng-keydown="handleKeyDown($event)"> <div class="box-label"> <div class="sc-arrow-dec-month" ng-click="decMonth()"></div> <div class="sc-arrow-inc-month" ng-click="incMonth()"></div> <div class="sc-current-month" ng-click="openDropdown()"> <span>{{monthYearString}}</span> </div> </div> <div style="position: relative"> <div class="sc-month-picker-dropdown ng-animation-slider" ng-if="openedDropDown" > <div class="sc-year-box"> <a class="sc-arrow-year left" ng-click="decYear()"></a> <!-- <input type="text" ng-model="getYear()" class="sc-input-year numerico" maxlength="4" /> --> <span class="sc-input-year">{{year}}</span> <a class="sc-arrow-year right" ng-click="incYear()"></a> </div> <div class="sc-months-mini-calendar"> <a ng-keydown="pressedEnterOnDate($event, $index+1, year)" tabindex="0" ng-click="setMonth($index+1, year)" ng-repeat="monthShortName in monthsShortName" ng-class="{\'active\': ($index + 1) === month}">{{monthShortName}}</a> </div> </div> </div> </div>'
      }
    }])
  }.call(this),
  function() {
    angular.module("sc.commons.components.typeahead", ["sc.commons.factories.position"]).factory("typeaheadParser", ["$parse", function(e) {
      var t;
      return t = /^\s*([\s\S]+?)(?:\s+as\s+([\s\S]+?))?(?:\s+group by\s+([\s\S]+?))?\s+for\s+(?:([\$\w][\$\w\d]*))\s+in\s+([\s\S]+?)$/, {
        parse: function(n) {
          var r;
          if (r = n.match(t), !r) throw new Error('Expected typeahead specification in form of "_modelValue_ (as _label_)? for _item_ in _collection_" but got "' + n + '".');
          return {
            itemName: r[4],
            source: e(r[5]),
            groupMapper: r[3] && e(r[3]),
            viewMapper: e(r[2] || r[1]),
            modelMapper: e(r[1])
          }
        }
      }
    }]).directive("typeahead", ["$compile", "$parse", "$q", "$timeout", "$document", "$position", "typeaheadParser", function(e, t, n, r, i, o, a) {
      var s;
      return s = [8, 9, 13, 27, 38, 40], {
        require: "ngModel",
        priority: 99,
        link: function(u, c, l, f) {
          var d, h, p, m, g, v, y, b, w, x, _, k, S, C, T, M, A, E, D, O, N, P, j, F, I, q, R, L, H, U, Y, z, B;
          M = u.$eval(l.typeaheadMultiple) || !1, T = u.$eval(l.typeaheadMinLength) || 1, z = u.$eval(l.typeaheadWaitMs) || 0, k = void 0 === l.typeaheadEditable ? !1 : u.$eval(l.typeaheadEditable) !== !1, _ = !!u.$eval(l.typeaheadCombo), C = t(l.typeaheadLoading).assign || angular.noop, O = t(l.typeaheadOnSelect), D = t(l.typeaheadOnBackspace) || angular.noop, x = void 0, p = !0, A = l.typeaheadNoRecordText ? l.typeaheadNoRecordText : "Nenhum resultado encontrado", h = t(l.ngModel).assign, P = a.parse(l.typeahead), S = !!P.groupMapper, w = void 0, U = u.$new(), u.$on("$destroy", function() {
            return d.remove(), U.$destroy()
          }), c.addClass(_ ? "typeahead-combo" : "typeahead-search"), F = "typeahead-" + U.$id + "-" + Math.floor(1e4 * Math.random()), c.attr({
            "aria-autocomplete": "list",
            "aria-expanded": !1,
            "aria-owns": F
          }), j = angular.element("<div typeahead-popup></div>"), j.attr({
            id: F,
            matches: "matches",
            groups: "groups",
            active: "activeIdx",
            select: "select(activeIdx)",
            query: "query",
            position: "position"
          }), angular.isDefined(l.typeaheadTemplateUrl) && j.attr("template-url", l.typeaheadTemplateUrl), R = function() {
            return U.matches = [], U.activeIdx = -1, c.attr("aria-expanded", !1)
          }, L = function(e) {
            return null == e && (e = !1), e || (R(), t(l.ngModel)(U)) ? void 0 : (c.val(""), f.$setViewValue(void 0))
          }, E = function() {
            return R(), k ? void 0 : (U.matches.push({
              model: void 0,
              label: A,
              type: "no-records"
            }), S && (U.groups = {
              "": [0]
            }), U.activeIdx = 0, c.attr("aria-expanded", !0))
          }, y = function(e) {
            return "" + F + "-option-" + e
          }, N = function() {
            return w = !0, f.$openCombo = !0, f.$setViewValue(void 0)
          }, q = function() {
            U.position = p ? o.offset(c) : o.position(c), U.position.top = U.position.top + c.prop("offsetHeight"), U.position.width = c.prop("offsetWidth")
          }, U.$watch("activeIdx", function(e) {
            return 0 > e ? c.removeAttr("aria-activedescendant") : c.attr("aria-activedescendant", y(e))
          }), b = function(e) {
            var t;
            return t = {
              $viewValue: e
            }, C(u, !0), n.when(P.source(u, t)).then(function(n) {
              var i, o, a, s, l, d, h, p, m;
              if (l = e === f.$viewValue, l && w) {
                if (i = k && e, s = n.map(function(n) {
                    var r, o, a;
                    return t[P.itemName] = n, o = P.viewMapper(U, t), S && (r = P.groupMapper(U, t)), i && ("" + o).toUpperCase() === ("" + e).toUpperCase() && (i = !1), a = {
                      label: o,
                      model: n
                    }, S && (a.group = r, a.group_label = r || ""), a
                  }), i && s.unshift({
                    label: e,
                    model: e,
                    group_label: "",
                    type: "new-record"
                  }), S && (U.groups = {}, s = s.sort(function(e, t) {
                    return e.group_label > t.group_label ? 1 : -1
                  })), s.length > 0) {
                  for (U.activeIdx = 0, U.matches.length = 0, o = h = 0, p = s.length; p > h; o = ++h) a = s[o], a.id = y(o), U.matches.push(a), S && ((d = U.groups)[m = a.group_label] || (d[m] = []), U.groups[a.group_label].push(o));
                  U.query = e, v(U.activeIdx), c.attr("aria-expanded", !0)
                } else E();
                r(q, 0)
              }
              l && C(u, !1)
            }, function() {
              L(), C(u, !1)
            })
          }, L(), U.query = void 0, Y = void 0, H = function(e) {
            Y = r(function() {
              return b(e)
            }, z)
          }, m = function() {
            Y && r.cancel(Y)
          }, f.$parsers.unshift(function(e) {
            return w = !0, f.$openCombo ? (f.$openCombo = !1, m(), b(f.$viewValue), U.$eval(l.ngModel) || e) : (e && e.length >= T ? z > 0 ? (m(), H(e)) : b(e) : _ && U.matches.length > 0 ? H(e) : (C(u, !1), m(), L()), k ? e : (f.$setValidity("editable", !e), null))
          }), f.$formatters.push(function(e) {
            var t, n, r;
            return t = n = void 0, r = {}, x ? (r.$model = e, x(u, r)) : (r[P.itemName] = e, t = P.viewMapper(u, r), r[P.itemName] = void 0, n = P.viewMapper(u, r), t !== n ? t : e)
          }), U.select = function(e) {
            var t, n, i, o;
            o = t = void 0, i = {}, t = U.matches[e], i[P.itemName] = U.matches[e].model, o = P.modelMapper(u, i), n = k && !o ? o = t.label : P.viewMapper(u, i), h(u, o), f.$setValidity("editable", !0), O(u, {
              $item: t,
              $model: o,
              $label: n
            }), L(M), r(function() {
              return c[0].focus()
            }, 0, !1)
          }, U.triggerBackspace = function() {
            return U.$apply(function() {
              return D(u, {
                $viewValue: null != f.$viewValue ? f.$viewValue : void 0
              }), r(q, 0)
            })
          }, U.keyboardNav = !1, I = void 0, v = function(e) {
            var t, n;
            return I && r.cancel(I), t = function() {
              I = r(function() {
                U.keyboardNav = !1
              }, 100)
            }, n = angular.element("#" + U.matches[e].id).prop("offsetTop") - 5, j.scrollTo(n, t)
          }, c.bind("keydown", function(e) {
            var t; - 1 !== s.indexOf(e.which) && (t = U.matches.length > 0, 8 === e.which ? U.triggerBackspace() : t ? (e.preventDefault(), 40 === e.which ? (U.keyboardNav = !0, U.activeIdx = (U.activeIdx + 1) % U.matches.length, v(U.activeIdx), U.$digest()) : 38 === e.which ? (U.keyboardNav = !0, U.activeIdx = (U.activeIdx ? U.activeIdx : U.matches.length) - 1, v(U.activeIdx), U.$digest()) : 13 === e.which ? (e.stopPropagation(), U.$apply(function() {
              U.select(U.activeIdx)
            })) : (27 === e.which || 9 === e.which) && (e.stopPropagation(), L(), U.$digest())) : !_ || 40 !== e.which && 38 !== e.which || (N(), b(f.$viewValue)))
          }), c.bind("blur", function() {
            null == f.$modelValue && 0 === U.matches.length && (f.$setViewValue(void 0), L()), w = !1
          }), c.bind("click", function(e) {
            return _ ? (w = void 0, U.matches.length > 0 ? (w = !1, L()) : (N(), b(f.$viewValue)), e.stopPropagation(), U.$digest()) : void 0
          }), g = function(e) {
            return !c.isParentOf(e.target) && (c[0].blur(), w = !1, U.matches.length > 0) ? (L(), U.$digest()) : void 0
          }, B = function() {
            return q(), U.$digest()
          }, $(window).resize(B), i.bind("click", g), u.$on("$destroy", function() {
            return $(window).unbind("resize", B), i.unbind("click", g)
          }), d = e(j)(U), p ? i.find("body").append(d) : c.after(d)
        }
      }
    }]).directive("typeaheadPreventScroll", ["$position", function() {
      return {
        restrict: "EA",
        link: function(e, t) {
          return t.bind("DOMMouseScroll mousewheel", function(e) {
            var n, r, i, o;
            return r = e.originalEvent, n = r.wheelDelta || -r.detail, i = 0 > n ? 1 : -1, o = t.scrollTop() + 40 * i, t.scrollTop(o), e.preventDefault()
          })
        }
      }
    }]).directive("typeaheadPopup", function() {
      return {
        restrict: "EA",
        scope: {
          matches: "=",
          groups: "=",
          query: "=",
          active: "=",
          position: "=",
          select: "&"
        },
        replace: !0,
        templateUrl: "/assets/typeahead/list-36e9b8b793ccd8caa5090ae3c10f438c.html",
        link: function(e, t, n) {
          e.templateUrl = n.templateUrl, e.isOpen = function() {
            return e.matches.length > 0
          }, e.isActive = function(t) {
            return e.active === t
          }, e.selectActive = function(t) {
            e.$parent.keyboardNav || (e.active = t)
          }, e.selectMatch = function(t) {
            e.select({
              activeIdx: t
            })
          }
        }
      }
    }).directive("typeaheadMatch", ["$http", "$templateCache", "$compile", "$parse", function(e, t, n, r) {
      return {
        restrict: "EA",
        scope: {
          index: "=",
          match: "=",
          query: "="
        },
        link: function(i, o, a) {
          var s, u, c;
          u = "/assets/typeahead/list-content-87a4999c528764d6e4e431b9ca10fe1c.html", s = function(e) {
            o.replaceWith(n(e.trim())(i))
          }, (c = r(a.templateUrl)(i.$parent) || u) && e.get(c, {
            cache: t
          }).success(function(e) {
            return s(e)
          })
        }
      }
    }])
  }.call(this),
  function() {
    angular.module("sc.commons.directives.breadcrumbs", ["sc.commons.services.breadcrumbs"]).directive("breadcrumbs", ["$scBreadcrumbs", function(e) {
      return {
        restrict: "A",
        replace: !0,
        templateUrl: "/assets/components/breadcrumbs-74ac7ca179a2ccefb7b8e12566e228aa.html",
        compile: function() {
          return function(t, n, r) {
            var i, o;
            i = r.id, o = function() {
              t.breadcrumbs = [], angular.forEach(e.get(i), function(e) {
                t.breadcrumbs.push(e)
              })
            }, o(), t.unregisterBreadCrumb = function(t) {
              e.setLastIndex(i, t), o()
            }, t.$on("breadcrumbsRefresh", function() {
              o()
            })
          }
        }
      }
    }])
  }.call(this),
  function() {
    angular.module("sc.commons.directives.dateInput", []).directive("scDateInput", ["dateFilter", function() {
      return {
        restrict: "A",
        require: "ngModel",
        template: "<input></input>",
        replace: !0,
        link: function(e, t, n, r) {
          Modernizr.inputtypes.date ? t.prop("type", "date") : (t.bind("keyup change", function() {
            var e;
            return e = t.val(), e && e.match(/^(0[1-9]|1\d|2\d|3[01])\/(0[1-9]|1[0-2])\/(19|20)\d{2}$/) ? r.$setViewValue(e.toDateBdString()) : void 0
          }), t.prop("type", "text"), $(t).mask("99/99/9999"), t.addClass("sc-input-date"), t.addClass("data"), e.$watch(n.ngModel, function(e) {
            var n;
            return n = e, n && n.match(/^(19|20)\d{2}\-(0[1-9]|1[0-2])\-(0[1-9]|1\d|2\d|3[01])$/) ? t.val(n.toDatePt()) : void 0
          }))
        }
      }
    }]).directive("dateInput", ["dateFilter", "$html5support", function(e, t) {
      return {
        restrict: "A",
        require: "ngModel",
        template: "<input></input>",
        priority: 1,
        replace: !0,
        link: function(n, r, i, o) {
          t.input.date ? r.prop("type", "date") : (r.prop("type", "text"), $(r).mask("99/99/9999"), r.addClass("sc-input-date"), r.addClass("data")), r.on("blur keyup change", function() {
            return o.$setViewValue(r.val(), o.$validate)
          }), o.$validators.datePattern = function(e, t) {
            var n;
            return n = e || t, n instanceof Date ? !0 : void 0 === n || null === n || "" === n || moment(n, "DD/MM/YYYY", !0).isValid() || moment(n, "YYYY-MM-DD", !0).isValid()
          }, o.$formatters.push(function(n) {
            return t.input.date ? e(n, "yyyy-MM-dd") : e(n, "dd/MM/yyyy")
          }), o.$parsers.push(function(e) {
            var t, n;
            return e ? (e.match(/^(\d{4})-(\d{2})-(\d{2})$/) && (t = "IsoFormat"), e.match(/^(\d{2})\/(\d{2})\/(\d{4})$/) && (t = "BrFormat"), n = function() {
              switch (t) {
                case "IsoFormat":
                  return moment(e, moment.ISO_8601);
                case "BrFormat":
                  return moment(e, "DD/MM/YYYY")
              }
            }(), n && n.isValid() ? n.toDate() : null) : null
          })
        }
      }
    }])
  }.call(this),
  function() {
    angular.module("sc.commons.directives.durationInput", []).directive("durationInput", ["$parse", function(e) {
      return {
        restrict: "A",
        require: "ngModel",
        template: "<input></input>",
        priority: 101,
        replace: !0,
        link: function(t, n, r, i) {
          var o, a, s, u, c, l, f;
          s = "HH:MM", u = null != (f = r["in"]) ? f : "hours", o = e(r.ngModel).assign, l = function(e) {
            var t;
            if (null == e && (e = 0), t = +i.$modelValue, t = function() {
                switch (u) {
                  case "hours":
                    return e + 60 * t;
                  case "minutes":
                    return e + t;
                  default:
                    return e + t / 60
                }
              }(), 0 > t) return 0;
            switch (u) {
              case "hours":
                return t / 60;
              case "minutes":
                return t;
              default:
                return 60 * t
            }
          }, a = function(e) {
            var t, n, r, i, o, a, s;
            for (e = parseFloat(e) || 0, o = function() {
                switch (u) {
                  case "hours":
                    return 3600 * e;
                  case "minutes":
                    return 60 * e;
                  default:
                    return e
                }
              }(), a = [Math.floor(o / 3600), Math.floor(o % 3600 / 60)], t = a[0], i = a[1], r = t.toString().length, 2 > r && (r = 2), n = ""; n.length < r;) n += "0";
            return s = [("" + n + t).slice(-r), ("00" + i).slice(-2)], t = s[0], i = s[1], "" + t + ":" + i
          }, i.$formatters.push(a), i.$parsers.push(function(e) {
            var t, n, r, o, s;
            return e.match(/\:/) || (e = "" + e + ":"), o = e.split(":").map(function(e) {
              return parseFloat(e) || 0
            }), t = o[0], n = o[1], r = 3600 * t + 60 * n, s = function() {
              switch (u) {
                case "hours":
                  return r / 3600;
                case "minutes":
                  return r / 60;
                default:
                  return r
              }
            }(), n >= 60 && (i.$setViewValue(a(s)), i.$render()), s
          }), c = function(e) {
            return t.$apply(function() {
              var n;
              switch (n = e.which || e.keyCode) {
                case keyMap.ARROW.UP:
                  return o(t, l(1)), e.preventDefault();
                case keyMap.ARROW.DOWN:
                  return o(t, l(-1)), e.preventDefault()
              }
            })
          }, n.bind("keydown", c), t.$on("$destroy", function() {
            return n.unbind("keydown", c)
          })
        }
      }
    }])
  }.call(this),
  function() {
    angular.module("sc.commons.directives.integerInput", []).directive("scIntegerInput", function() {
      return {
        require: "ngModel",
        link: function(e, t, n, r) {
          return r.$parsers.unshift(function(e) {
            var n;
            return e.length < 15 ? (n = parseInt(e, 10), isNaN(n) && (n = 0)) : n = r.$modelValue, t.val(n), n
          })
        }
      }
    })
  }.call(this), angular.module("sc.commons.directives.mask", []).value("uiMaskConfig", {
    maskDefinitions: {
      9: /\d/,
      A: /[a-zA-Z]/,
      "*": /[a-zA-Z0-9]/
    }
  }).directive("scMask", ["uiMaskConfig", "$parse", function(e, t) {
    return {
      priority: 100,
      require: "ngModel",
      restrict: "A",
      compile: function() {
        var n = e;
        return function(e, r, i, o) {
          function a(e) {
            return angular.isDefined(e) ? (y(e), R ? (l(), f(), !0) : c()) : c()
          }

          function s(e) {
            var t = m(p(e));
            if (!R) return t;
            var n = h(t);
            return o.$setValidity("mask", n), n && t.length ? t : void 0
          }

          function u(t) {
            var n = m(p(t)),
              r = h(n);
            return r && (o.$viewValue = n.length ? n : "", o.$setValidity("mask", !0), n != j && i.scMaskOnComplete && $timeout(function() {
              e.$apply(i.scMaskOnComplete)
            })), O = p(n), 0 == O.length ? O : n
          }

          function c() {
            return R = !1, d(), angular.isDefined(H) ? r.attr("placeholder", H) : r.removeAttr("placeholder"), angular.isDefined(U) ? r.attr("maxlength", U) : r.removeAttr("maxlength"), r.val(o.$modelValue), o.$viewValue = o.$modelValue, !1
          }

          function l() {
            O = F = p(o.$modelValue || ""), N = j = m(O), P = h(N);
            var e = P && O.length ? N : "";
            i.maxlength && r.attr("maxlength", 2 * T[T.length - 1]), r.val(e), o.$viewValue = e
          }

          function f() {
            L || (r.bind("blur", $), r.bind("mousedown mouseup", b), r.bind("input keyup click focus", x), L = !0)
          }

          function d() {
            L && (r.unbind("blur", $), r.unbind("mousedown", b), r.unbind("mouseup", b), r.unbind("input", x), r.unbind("keyup", x), r.unbind("click", x), r.unbind("focus", x), L = !1)
          }

          function h(e) {
            var t = m(p(e));
            return t && t.replace(/_/g, "").length === t.length ? !0 : !1
          }

          function p(e) {
            var t = "",
              n = M.slice();
            return e = e || "", e = e.toString(), angular.forEach(E, function(t) {
              e = e.replace(t, "")
            }), angular.forEach(e.split(""), function(e) {
              n.length && n[0].test(e) && (t += e, n.shift())
            }), t
          }

          function m(e) {
            var t = "",
              n = T.slice();
            return angular.forEach(A.split(""), function(r, i) {
              e.length && i === n[0] ? (t += e.charAt(0) || "_", e = e.substr(1), n.shift()) : t += r
            }), t
          }

          function g() {
            return "_"
          }

          function v() {
            return A.replace(/[_]+/g, "_").replace(/([^_]+)([a-zA-Z0-9])([^_])/g, "$1$2_$3").split("_")
          }

          function y(e) {
            var t = 0;
            if (T = [], M = [], A = "", "string" == typeof e) {
              D = 0;
              var n = !1,
                r = e.split("");
              angular.forEach(r, function(e, r) {
                Y.maskDefinitions[e] ? (T.push(t), A += g(r), M.push(Y.maskDefinitions[e]), t++, n || D++) : "?" === e ? n = !0 : (A += e, t++)
              })
            }
            T.push(T.slice().pop() + 1), E = v(), R = T.length > 1 ? !0 : !1
          }

          function $() {}

          function b(e) {
            "mousedown" === e.type ? r.bind("mouseout", w) : r.unbind("mouseout", w)
          }

          function w() {
            q = C(this), r.unbind("mouseout", w)
          }

          function x(t) {
            t = t || {};
            var n = t.which,
              i = t.type;
            if (16 !== n && 91 !== n) {
              var a, s = r.val(),
                u = j,
                c = p(s),
                l = F,
                f = !1,
                d = k(this) || 0,
                h = I || 0,
                g = d - h,
                v = T[0],
                y = T[c.length] || T.slice().shift(),
                $ = q || 0,
                b = C(this) > 0,
                w = $ > 0,
                x = s.length > u.length || $ && s.length > u.length - $,
                M = s.length < u.length || $ && s.length === u.length - $,
                A = n >= 37 && 40 >= n && t.shiftKey,
                E = 37 === n,
                D = 8 === n || "keyup" !== i && M && -1 === g,
                O = 46 === n || "keyup" !== i && M && 0 === g && !w,
                N = (E || D || "click" === i) && d > v;
              if (q = C(this), !A && (!b || "click" !== i && "keyup" !== i)) {
                if ("input" === i && M && !w && c === l) {
                  for (; D && d > v && !_(d);) d--;
                  for (; O && y > d && -1 === T.indexOf(d);) d++;
                  var P = T.indexOf(d);
                  c = c.substring(0, P) + c.substring(P + 1), f = !0
                }
                for (a = m(c), j = a, F = c, r.val(a), f && e.$apply(function() {
                    o.$setViewValue(c)
                  }), x && v >= d && (d = v + 1), N && d--, d = d > y ? y : v > d ? v : d; !_(d) && d > v && y > d;) d += N ? -1 : 1;
                (N && y > d || x && !_(h)) && d++, I = d, S(this, d)
              }
            }
          }

          function _(e) {
            return T.indexOf(e) > -1
          }

          function k(e) {
            if (!e) return 0;
            if (void 0 !== e.selectionStart) return e.selectionStart;
            if (document.selection) {
              e.focus();
              var t = document.selection.createRange();
              return t.moveStart("character", e.value ? -e.value.length : 0), t.text.length
            }
            return 0
          }

          function S(e, t) {
            if (!e) return 0;
            if (0 !== e.offsetWidth && 0 !== e.offsetHeight)
              if (e.setSelectionRange) e.focus(), e.setSelectionRange(t, t);
              else if (e.createTextRange) {
              var n = e.createTextRange();
              n.collapse(!0), n.moveEnd("character", t), n.moveStart("character", t), n.select()
            }
          }

          function C(e) {
            return e ? void 0 !== e.selectionStart ? e.selectionEnd - e.selectionStart : document.selection ? document.selection.createRange().text.length : 0 : 0
          }
          var T, M, A, E, D, O, N, P, j, F, I, q, R = !1,
            L = !1,
            H = i.placeholder,
            U = i.maxlength,
            Y = {};
          i.uiOptions ? (Y = e.$eval("[" + i.uiOptions + "]"), angular.isObject(Y[0]) && (Y = function(e, t) {
            for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && (t[n] ? angular.extend(t[n], e[n]) : t[n] = angular.copy(e[n]));
            return t
          }(n, Y[0]))) : Y = n, i.$observe("scMask", a);
          var z = !1;
          i.$observe("modelViewValue", function(e) {
            "true" === e && (z = !0)
          }), e.$watch(i.ngModel, function(n) {
            if (z && n) {
              var r = t(i.ngModel);
              r.assign(e, o.$viewValue)
            }
          }), o.$formatters.push(s), o.$parsers.push(u), r.bind("mousedown mouseup", b), Array.prototype.indexOf || (Array.prototype.indexOf = function(e) {
            if (null === this) throw new TypeError;
            var t = Object(this),
              n = t.length >>> 0;
            if (0 === n) return -1;
            var r = 0;
            if (arguments.length > 1 && (r = Number(arguments[1]), r !== r ? r = 0 : 0 !== r && 1 / 0 !== r && r !== -1 / 0 && (r = (r > 0 || -1) * Math.floor(Math.abs(r)))), r >= n) return -1;
            for (var i = r >= 0 ? r : Math.max(n - Math.abs(r), 0); n > i; i++)
              if (i in t && t[i] === e) return i;
            return -1
          })
        }
      }
    }
  }]),
  function() {
    angular.module("sc.commons.directives.notifications", ["sc.commons.services.notifications"]).directive("notifications", ["$scNotifications", function(e) {
      return {
        restrict: "A",
        replace: !0,
        templateUrl: "/assets/components/notifications-2b3344ede5f966f033fe0bad23cf4f1b.html",
        link: function(t) {
          return t.scNotifications = e
        }
      }
    }])
  }.call(this), angular.module("ngPagination", []).controller("PaginationController", ["$scope", "$attrs", "$parse", function(e, t, n) {
    var r = this,
      i = {
        $setViewValue: angular.noop
      },
      o = t.numPages ? n(t.numPages).assign : angular.noop;
    this.init = function(a, s) {
      i = a, this.config = s, i.$render = function() {
        r.render()
      }, t.itemsPerPage ? e.$parent.$watch(n(t.itemsPerPage), function(t) {
        r.itemsPerPage = parseInt(t, 10), e.totalPages = r.calculateTotalPages()
      }) : this.itemsPerPage = s.itemsPerPage, e.$watch("totalItems", function() {
        e.totalPages = r.calculateTotalPages()
      }), e.$watch("totalPages", function(t) {
        o(e.$parent, t), e.page > t ? e.selectPage(t) : i.$render()
      })
    }, this.calculateTotalPages = function() {
      var t = this.itemsPerPage < 1 ? 1 : Math.ceil(e.totalItems / this.itemsPerPage);
      return Math.max(t || 0, 1)
    }, this.render = function() {
      e.page = parseInt(i.$viewValue, 10) || 1
    }, e.selectPage = function(t, n) {
      e.page !== t && t > 0 && t <= e.totalPages && (n && n.target && n.target.blur(), i.$setViewValue(t), i.$render())
    }, e.getText = function(t) {
      return e[t + "Text"] || r.config[t + "Text"]
    }, e.noPrevious = function() {
      return 1 === e.page
    }, e.noNext = function() {
      return e.page === e.totalPages
    }
  }]).constant("paginationConfig", {
    itemsPerPage: 10,
    boundaryLinks: !1,
    directionLinks: !0,
    firstText: "Primeira",
    previousText: "Anterior",
    nextText: "Pr\xf3xima",
    lastText: "\xdaltima",
    rotate: !0
  }).directive("pagination", ["$parse", "paginationConfig", function(e, t) {
    return {
      restrict: "A",
      scope: {
        totalItems: "=",
        firstText: "@",
        previousText: "@",
        nextText: "@",
        lastText: "@"
      },
      require: ["pagination", "?ngModel"],
      controller: "PaginationController",
      template: '<ul class="pagination"><li ng-if="boundaryLinks" ng-class="{disabled: noPrevious()}"><a href ng-click="selectPage(1, $event)">{{getText(\'first\')}}</a></li><li ng-if="directionLinks" ng-class="{disabled: noPrevious()}"><a href ng-click="selectPage(page - 1, $event)">{{getText(\'previous\')}}</a></li><li ng-repeat="page in pages track by $index" ng-class="{active: page.active}"><a href ng-click="selectPage(page.number, $event)">{{page.text}}</a></li><li ng-if="directionLinks" ng-class="{disabled: noNext()}"><a href ng-click="selectPage(page + 1, $event)">{{getText(\'next\')}}</a></li><li ng-if="boundaryLinks" ng-class="{disabled: noNext()}"><a href ng-click="selectPage(totalPages, $event)">{{getText(\'last\')}}</a></li></ul>',
      replace: !0,
      link: function(n, r, i, o) {
        function a(e, t, n) {
          return {
            number: e,
            text: t,
            active: n
          }
        }

        function s(e, t) {
          var n = [],
            r = 1,
            i = t,
            o = angular.isDefined(l) && t > l;
          o && (f ? (r = Math.max(e - Math.floor(l / 2), 1), i = r + l - 1, i > t && (i = t, r = i - l + 1)) : (r = (Math.ceil(e / l) - 1) * l + 1, i = Math.min(r + l - 1, t)));
          for (var s = r; i >= s; s++) {
            var u = a(s, s, s === e);
            n.push(u)
          }
          if (o && !f) {
            if (r > 1) {
              var c = a(r - 1, "...", !1);
              n.unshift(c)
            }
            if (t > i) {
              var d = a(i + 1, "...", !1);
              n.push(d)
            }
          }
          return n
        }
        var u = o[0],
          c = o[1];
        if (c) {
          var l = angular.isDefined(i.maxSize) ? n.$parent.$eval(i.maxSize) : t.maxSize,
            f = angular.isDefined(i.rotate) ? n.$parent.$eval(i.rotate) : t.rotate;
          n.boundaryLinks = angular.isDefined(i.boundaryLinks) ? n.$parent.$eval(i.boundaryLinks) : t.boundaryLinks, n.directionLinks = angular.isDefined(i.directionLinks) ? n.$parent.$eval(i.directionLinks) : t.directionLinks, u.init(c, t), i.maxSize && n.$parent.$watch(e(i.maxSize), function(e) {
            l = parseInt(e, 10), u.render()
          });
          var d = u.render;
          u.render = function() {
            d(), n.page > 0 && n.page <= n.totalPages && (n.pages = s(n.page, n.totalPages))
          }
        }
      }
    }
  }]).constant("pagerConfig", {
    itemsPerPage: 10,
    previousText: "\xab Previous",
    nextText: "Next \xbb",
    align: !0
  }).directive("pager", ["pagerConfig", function(e) {
    return {
      restrict: "EA",
      scope: {
        totalItems: "=",
        previousText: "@",
        nextText: "@"
      },
      require: ["pager", "?ngModel"],
      controller: "PaginationController",
      template: '<ul class="pager"><li ng-class="{disabled: noPrevious(), previous: align}"><a href ng-click="selectPage(page - 1, $event)">{{getText(\'previous\')}}</a></li><li ng-class="{disabled: noNext(), next: align}"><a href ng-click="selectPage(page + 1, $event)">{{getText(\'next\')}}</a></li></ul>',
      replace: !0,
      link: function(t, n, r, i) {
        var o = i[0],
          a = i[1];
        a && (t.align = angular.isDefined(r.align) ? t.$parent.$eval(r.align) : e.align, o.init(a, e))
      }
    }
  }]),
  function() {
    "use strict";
    angular.module("sc.commons.directives.redactor", []).directive("redactor", ["$timeout", function(e) {
      return {
        restrict: "A",
        require: "?ngModel",
        link: function(t, n, r, i) {
          return n = $(n), i.$render = function() {
            return n.redactor({
              keyupCallback: function() {
                return t.$apply(i.$setViewValue(n.getCode()))
              },
              execCommandCallback: function() {
                return t.$apply(i.$setViewValue(n.getCode()))
              },
              buttons: t.$eval(r.redactorButtons),
              imageUpload: r.redactorImageUploadUrl,
              fileUpload: r.redactorFileUploadUrl,
              fixed: r.redactorFixToolbar,
              wym: !1
            }), e(function() {
              return n.setCode(i.$viewValue)
            }, 200)
          }
        }
      }
    }])
  }.call(this),
  function() {
    angular.module("sc.commons.directives.input.dismiss.click", []).directive("scDismissClick", ["$document", function(e) {
      return {
        link: function(t, n, r) {
          var i;
          if (!r.scDismissClick) throw "scDismissClick args is missing";
          i = function(e) {
            n.isParentOf(e.target) || t.$apply(r.scDismissClick)
          }, e.bind("click", i), t.$on("$destroy", function() {
            return e.unbind("click", i)
          })
        }
      }
    }])
  }.call(this),
  function() {
    angular.module("sc.commons.directives.dropdown", ["sc.commons.factories.position", "sc.commons.directives.target", "sc.commons.factories.toggle"]).directive("scDropdownMenu", ["$rootScope", "scToggle", "$document", function(e, t, n) {
      return {
        scope: !0,
        link: function(r, i) {
          var o, a;
          return r.needDropback = isMobile.iOS(), r.dropback = angular.element('<div class="sc-dropback" />'), r.dropback.bind("click", function() {
            return r.$apply(function() {
              return r.menu.close()
            })
          }), r.menu = new t({
            beforeOpen: function() {
              return e.$broadcast("sc.commons.directives.dropdown.menu.close.others", this), r.needDropback ? i.before(r.dropback) : void 0
            },
            beforeClose: function() {
              return r.dropback.detach()
            }
          }), r.$on("sc.commons.directives.dropdown.menu.close.others", function(e, t) {
            return r.menu !== t ? r.menu.close() : void 0
          }), a = function(e) {
            return r.menu.closed || i.isParentOf(e.target) ? void 0 : r.$apply(function() {
              return r.menu.close()
            })
          }, o = function(e) {
            var t;
            return t = e.which || e.keyCode, r.menu.enabled && t === keyMap.ESC ? (e.preventDefault(), e.stopPropagation(), r.$apply(function() {
              return r.menu.close()
            })) : void 0
          }, n.bind("keydown", o), n.bind("click", a), r.$on("$destroy", function() {
            return n.unbind("keydown", o), n.unbind("click", a)
          })
        }
      }
    }]).directive("scDropdown", ["$compile", "$parse", "$q", "$timeout", "$document", "$position", "$scTarget", function(e, t, n, r, i, o, a) {
      var s;
      return s = [8, 9, 13, 27, 38, 40], {
        scope: {
          isFixed: "&",
          targetObject: "&"
        },
        link: function(e, t, n) {
          var s, u, c, l, f, d, h, p, m, g, v, y;
          if (h = n.scDropdown, l = void 0, g = n.scDropdownTrigger || h, p = n.scDropdown.split(".").shift(), v = g.split(".").shift(), p !== v) throw "Invalid trigger name";
          m = e.targetObject(), u = !!n.scDropdownFocus, u && (f = n.scDropdownFocus, d = e.$eval(f.split(".").shift())), c = e.$new(), c.$on("sc-dropdown.relocate", function(e, t, n) {
            return t === m && n === h ? (c.relocatePromisse && r.cancel(c.relocatePromisse), c.relocatePromisse = r(function() {
              return c.relocate()
            }, 300)) : void 0
          }), c.elementFocus = function() {
            return r(function() {
              return t[0].focus()
            }, 0, !1)
          }, a.elementReady(m, h).then(function() {
            return l = a.getElements(m, h)[0], l.addClass("typeahead-dropdown-menu"), c.relocate(), c.closeDropbox()
          }), c.relocate = function() {
            var e;
            c.position = o.offset(t), c.position.top = c.position.top + t.prop("offsetHeight"), c.position.width = t.prop("offsetWidth"), l && (l[0].style.position = "absolute", c.isFixed() && (e = t[0].getBoundingClientRect(), c.position.top = e.top + e.height, l[0].style.position = "fixed"), l[0].style.top = "" + c.position.top + "px", l[0].style.width = "" + c.position.width + "px", l[0].style.left = "" + c.position.left + "px")
          }, c.openDropbox = function() {
            return l ? (l.show(), u && a.focus(d, f, !1, 0), c.relocate()) : void 0
          }, c.closeDropbox = function() {
            return l ? l.hide() : void 0
          }, c.keydownHandler = function(e) {
            var t, n, i, o;
            if (i = e.which || e.keyCode, i === keyMap.KEYDOWN) return !0;
            switch (t = !!e.altKey, n = !!e.ctrlKey, o = !!e.shiftKey, i) {
              case keyMap.ESC:
                return c.closeDropbox(), e.stopPropagation();
              case keyMap.ARROW.UP:
              case keyMap.ARROW.DOWN:
              case keyMap.ARROW.LEFT:
              case keyMap.ARROW.RIGHT:
                return c.openDropbox();
              case keyMap.TAB:
                return c.blurPromisse && r.cancel(c.blurPromisse), c.blurPromisse = r(function() {
                  return c.closeDropbox()
                }, 200)
            }
          }, c.clickHandler = function(e) {
            return e.stopPropagation(), c.openDropbox(), c.$digest()
          }, c.focusHandler = function(e) {
            return e.stopPropagation(), c.openDropbox(), c.$digest()
          }, n.scDropdownTrigger ? (a.addEvent("keydown", m, g, c.keydownHandler), a.addEvent("click", m, g, c.clickHandler), a.addEvent("focus", m, g, c.focusHandler)) : (t.bind("keydown", c.keydownHandler), t.bind("click", c.clickHandler), t.bind("focus", c.focusHandler)), a.addEvent("keydown", m, h, function(e) {
            var t;
            if (t = e.which || e.keyCode, t === keyMap.KEYDOWN) return !0;
            switch (t) {
              case keyMap.ESC:
                return c.closeDropbox(), e.stopPropagation()
            }
          }), a.addEvent("click", m, h, function(e) {
            return c.blurPromisse && r.cancel(c.blurPromisse), e.stopPropagation(), c.elementFocus(), c.$digest()
          }), s = function(e) {
            var t;
            return t = e.target, c.blurPromisse && r.cancel(c.blurPromisse), c.closeDropbox()
          }, y = function() {
            return c.relocate(), c.$digest()
          }, $(window).resize(y), i.bind("click", s), n.scDropdownDismiss && a.addEvent("click", m, n.scDropdownDismiss, s), e.$on("$destroy", function() {
            return c.$destroy(), $(window).unbind("resize", y), i.unbind("click", s)
          })
        }
      }
    }]).directive("scDropdownClose", function() {
      return function(e, t) {
        return t.bind("click", function() {
          return $(this).closest(".typeahead-dropdown-menu").hide()
        })
      }
    })
  }.call(this),
  function() {
    angular.module("sc.commons.directives.modal", []).directive("scModal", ["$scModalService", function(e) {
      return {
        restrict: "A",
        replace: !0,
        transclude: !0,
        scope: {
          modal: "=scModal"
        },
        link: function(t) {
          return t.$on("$destroy", function() {
            return e.modalAtiva === t.modal ? e.close() : void 0
          })
        },
        template: '<div class="sc-modal" ng-class="{\'active\': modal.active}" ng-show="modal.active" ng-transclude></div>'
      }
    }]).service("$scModalService", ["$timeout", function(e) {
      var t;
      return t = angular.element(document.querySelector("body")), {
        modalAtiva: void 0,
        escurecerTela: function() {
          return $("<div></div>").addClass("tela-escura").appendTo(t)
        },
        clarearTela: function() {
          return t.find(".tela-escura").remove()
        },
        open: function(n) {
          return n !== this.modalAtiva ? (this.modalAtiva ? (this.modalAtiva.close(!1), e(function() {
            return n.active = !0
          }, 200)) : (n.active = !0, e(function(e) {
            return function() {
              return e.escurecerTela(), t.css("overflow", "hidden")
            }
          }(this), 0)), this.modalAtiva = n) : void 0
        },
        close: function(n) {
          return null == n && (n = !0), this.modalAtiva && (this.modalAtiva.active = !1, this.modalAtiva = void 0), n ? e(function(e) {
            return function() {
              return e.clarearTela(), t.css("overflow", "auto")
            }
          }(this), 0) : void 0
        }
      }
    }]).factory("$scModal", ["$scModalService", function(e) {
      return function() {
        function t(e) {
          null == e && (e = {}), this.active = !1, null != e.onOpen && this.onOpen(e.onOpen), null != e.onClose && this.onClose(e.onClose)
        }
        return t.prototype.callbackStack = {
          onOpen: [],
          onClose: []
        }, t.prototype.open = function() {
          var t, n, r, i, o;
          for (e.open(this), i = this.callbackStack.onOpen, o = [], n = 0, r = i.length; r > n; n++) t = i[n], o.push(t());
          return o
        }, t.prototype.close = function(t) {
          var n, r, i, o, a;
          for (null == t && (t = !0), e.close(t), o = this.callbackStack.onClose, a = [], r = 0, i = o.length; i > r; r++) n = o[r], a.push(n());
          return a
        }, t.prototype.toggle = function() {
          return this.active ? this.close() : this.open()
        }, t.prototype.onOpen = function(e) {
          return this.callbackStack.onOpen.push(e)
        }, t.prototype.onClose = function(e) {
          return this.callbackStack.onClose.push(e)
        }, t
      }()
    }])
  }.call(this),
  function() {
    angular.module("sc.commons.directives.redirectFocusTo", ["sc.commons.directives.target"]).directive("scRedirectFocus", ["$scTarget", function(e) {
      return {
        restrict: "AE",
        link: function(t, n, r) {
          var i, o;
          return i = t[r.to.split(".").shift()], o = r.to, n.attr("tabindex", "0"), n.bind("focus", function() {
            return e.focus(i, o, !1, 0)
          })
        }
      }
    }])
  }.call(this),
  function() {
    angular.module("sc.commons.directives.scroller", []).directive("scScroll", function() {
      return {
        link: function(e, t, n) {
          var r, i;
          i = 50, r = {
            bind: function() {
              return angular.element(r.box).bind("scroll", r.trigger)
            },
            unbind: function() {
              return angular.element(r.box).unbind("scroll", r.trigger)
            },
            trigger: function() {
              return function() {
                r.bottomReached() && e.$apply(n.scScroll)
              }
            }(this)
          }, n.scScrollOnElement ? (r.box = t, r.bottomReached = function() {
            return r.box.prop("scrollHeight") - r.box.scrollTop() <= r.box.height() + i
          }) : (r.box = window, r.bottomReached = function() {
            var e, n;
            return n = r.box.scrollY + r.box.innerHeight, e = t[0].offsetTop + t[0].offsetHeight, n + i > e
          }), n.scScrollEnabled ? e.$watch(n.scScrollEnabled, function(e) {
            return e ? r.bind() : r.unbind()
          }) : r.bind(), e.$on("$destroy", function() {
            return r.unbind()
          })
        }
      }
    })
  }.call(this),
  function() {
    angular.module("sc.commons.directives.sticker", []).directive("scSticker", function() {
      return {
        scope: {
          topOffset: "&",
          bottomOffset: "&",
          minContentHeight: "&",
          enabled: "=scStickerEnabled"
        },
        controller: ["$scope", "$window", "$timeout", function(e, t, n) {
          var r, i, o, a, s, u, c, l, f, d;
          t = angular.element(t), u = void 0, s = void 0, o = void 0, a = void 0, f = e.stickerContainer, c = 0, void 0 === e.enabled && (e.enabled = !0), e.$watch(function() {
            return f ? (c !== f.height() && (c = f.height(), e.resizeGhosts(), e.handleScroll()), c = f.height()) : void 0
          }), e.$watch("enabled", function() {
            return n(function() {
              return e.resizeGhosts(), e.handleScroll()
            }, 10)
          }), r = function(e, t) {
            return function() {
              var n;
              return n = e(), n ? n : t
            }
          }, d = r(e.topOffset, 0), i = r(e.bottomOffset, 0), l = r(e.minContentHeight, 0), this.setHeader = function(e) {
            return u = e
          }, this.setGhostHeader = function(e) {
            return s = e
          }, this.setFooter = function(e) {
            return o = e
          }, this.setGhostFooter = function(e) {
            return a = e
          }, e.setContainer = function(e) {
            return f = e
          }, e.stick = function() {
            e.resizeGhosts(), f.css("position", "relative"), t.on("scroll", function() {
              e.handleScroll()
            }), t.on("touchmove", function() {
              e.handleScroll()
            }), e.handleScroll()
          }, e.handleScroll = function() {
            u && (e.enabled && e.isContainerVisible() && e.isHeaderHidden() && !e.hasOverlap() ? (u.css("position", "fixed"), u.css("zIndex", 99), u.css("top", d() + "px")) : (u.css("position", "absolute"), u.css("zIndex", 0), u.css("top", 0), u.css("left", 0))), o && (e.enabled && e.isContainerVisible() && e.isFooterHidden() && !e.hasOverlap() ? (o.css("position", "fixed"), o.css("zIndex", 99), o.css("bottom", i() + "px")) : (o.css("position", "absolute"), o.css("zIndex", 0), o.css("bottom", 0), o.css("left", 0)))
          }, e.isHeaderHidden = function() {
            return window.scrollY + d() > f[0].offsetTop
          }, e.isFooterHidden = function() {
            var e;
            return e = window.scrollY + window.innerHeight, e < a[0].offsetTop + a.outerHeight() + f[0].offsetTop
          }, e.hasOverlap = function() {
            var e, t, n, r, c, h;
            return u && o ? (r = window.scrollY + d() + s[0].offsetHeight, n = f[0].offsetTop + a[0].offsetTop, h = r > n - l(), t = window.scrollY + window.innerHeight - i() - a[0].offsetHeight, c = f[0].offsetTop + s[0].offsetHeight, e = t < c + l(), e || h) : !1
          }, e.isContainerVisible = function() {
            var e, t, n, r, o, a;
            return a = f[0].offsetTop, e = f[0].offsetTop + f[0].offsetHeight, r = window.scrollY + d(), o = window.scrollY - i() + window.innerHeight, n = r > e, t = o > a, n && !t || t && !n
          }, e.resizeGhosts = function() {
            var e, t;
            t = angular.element('<div class="sc-system"></div>'), t.css("position", "absolute"), t.css("top", "-10000px"), angular.element("body").prepend(t), s && (e = u.clone(), t.append(e), s.css("height", angular.element(e)[0].clientHeight + "px")), a && (e = o.clone(), t.append(e), a.css("height", angular.element(e)[0].clientHeight + "px")), t.remove()
          }
        }],
        link: function(e, t) {
          return e.setContainer(t), e.stick()
        }
      }
    }).directive("scStickyHeader", function() {
      return {
        require: "^scSticker",
        transclude: !0,
        template: "<div sc-sticky-header-ghost></div><div ng-transclude />",
        link: function(e, t, n, r) {
          var i;
          i = angular.element(t[0].lastChild), i.attr("class", t.attr("class")), i.attr("style", t.attr("style")), t.removeAttr("class"), r.setHeader(i)
        }
      }
    }).directive("scStickyFooter", function() {
      return {
        require: "^scSticker",
        transclude: !0,
        template: "<div sc-sticky-footer-ghost></div><div ng-transclude />",
        link: function(e, t, n, r) {
          var i;
          i = angular.element(t[0].lastChild), i.attr("class", t.attr("class")), i.attr("style", t.attr("style")), t.removeAttr("class"), r.setFooter(i)
        }
      }
    }).directive("scStickyHeaderGhost", function() {
      return {
        require: "^scSticker",
        link: function(e, t, n, r) {
          return r.setGhostHeader(t)
        }
      }
    }).directive("scStickyFooterGhost", function() {
      return {
        require: "^scSticker",
        link: function(e, t, n, r) {
          return r.setGhostFooter(t)
        }
      }
    })
  }.call(this),
  function() {
    angular.module("sc.commons.directives.scStopClick", []).directive("scStopClick", function() {
      return {
        link: function(e, t) {
          var n;
          return n = function(e) {
            return e.stopPropagation()
          }, t.bind("click", n), e.$on("$destroy", function() {
            return t.unbind("click", n)
          })
        }
      }
    })
  }.call(this),
  function() {
    angular.module("sc.commons.directives.target", []).service("$scTarget", ["$rootScope", "$timeout", "$q", function(e, t, n) {
      var r, i;
      return i = {}, r = {}, {
        focus: function(n, r, i, o) {
          return null == i && (i = !0), null == o && (o = 400), t(function() {
            return e.$broadcast("scFocusOn", n, r), i ? e.$broadcast("scScrollOn", n, r, o) : void 0
          }, o)
        },
        scroll: function(n, r, i) {
          return null == i && (i = 400), t(function() {
            return e.$broadcast("scScrollOn", n, r)
          }, i)
        },
        ping: function(n, r) {
          return t(function() {
            return e.$broadcast("scTargetPing", n, r)
          }, 0)
        },
        elementReady: function(t, r) {
          var o;
          return t.$id || (t.$id = guid()), o = n.defer(), i[t.$id] && i[t.$id][r] ? o.resolve() : e.$on("scTargetReady", function(e, n, i) {
            return t === n && r === i ? o.resolve() : void 0
          }), o.promise
        },
        destroyObject: function(e) {
          return e.$id || (e.$id = guid()), i[e.$id] = {}
        },
        addElement: function(e, t, n) {
          var r, o;
          return e.$id || (e.$id = guid()), i[o = e.$id] || (i[o] = {}), (r = i[e.$id])[t] || (r[t] = []), i[e.$id][t].push(n), this.bindActions(e, t, n)
        },
        getElements: function(e, t) {
          var n, r;
          return e.$id || (e.$id = guid()), i[r = e.$id] || (i[r] = {}), (n = i[e.$id])[t] || (n[t] = []), i[e.$id][t]
        },
        addEvent: function(e, t, n, i) {
          var o, a, s, u, c, l, f;
          for (t.$id || (t.$id = guid()), r[c = t.$id] || (r[c] = {}), (a = r[t.$id])[n] || (a[n] = []), r[t.$id][n].push({
              event: e,
              callback: i
            }), l = this.getElements(t, n), f = [], s = 0, u = l.length; u > s; s++) o = l[s], f.push(this.bindActions(t, n, o));
          return f
        },
        bindActions: function(e, t, n) {
          var i, o, a, s, u;
          for (e.$id || (e.$id = guid()), o = r[e.$id] || {}, o = o[t] || [], u = [], a = 0, s = o.length; s > a; a++) i = o[a], u.push(n.bind(i.event, i.callback));
          return u
        }
      }
    }]).directive("scTarget", ["$rootScope", "$scTarget", function(e, t) {
      return {
        link: function(n, r, i) {
          var o, a, s;
          s = i.scTarget || i.ngModel, o = s.split(".").shift(), a = n[o], t.addElement(a, s, r), r.attr("tabindex", "0"), n.$on("$destroy", function() {
            return t.destroyObject(a)
          }), n.$on("scDropdown", function(e, t, n, i) {
            return t === a && n === s && $(r).offset() ? i.setElement(r) : void 0
          }), n.$on("scTargetPing", function(e, t, n) {
            return t === a && n === s && $(r).offset() ? console.log("pong", r[0]) : void 0
          }), n.$on("scFocusOn", function(e, t, n) {
            return t === a && n === s ? r[0].focus() : void 0
          }), n.$on("scScrollOn", function(e, t, n) {
            var o, u, c, l, f, d, h;
            if (t === a && n === s && $(r).offset()) {
              for (o = 0, h = $(".topo-fixo-sistema, .sc-fixed-element"), f = 0, d = h.length; d > f; f++) u = h[f], o += $(u).outerHeight();
              return o += 60, c = i.scTargetOffset ? parseInt(i.scTargetOffset) : 0, l = $(r).offset().top - o - c, $("html, body").stop().animate({
                scrollTop: l
              })
            }
          }), e.$broadcast("scTargetReady", a, s)
        }
      }
    }]), this.guid = function() {
      var e;
      return e = function() {
          return Math.floor(65536 * (1 + Math.random())).toString(16).substring(1)
        },
        function() {
          return [e() + e(), e(), e(), e(), e() + e() + e()].join("-")
        }
    }()
  }.call(this),
  function() {
    angular.module("sc.commons.directives.thumb", []).directive("scThumb", ["$window", function(e) {
      var t;
      return t = {
        support: !(!e.FileReader || !e.CanvasRenderingContext2D),
        isFile: function(t) {
          return angular.isObject(t) && t instanceof e.File
        },
        isImage: function(e) {
          var t;
          return t = "|" + e.type.slice(e.type.lastIndexOf("/") + 1) + "|", -1 !== "|jpg|png|jpeg|bmp|gif|".indexOf(t)
        }
      }, {
        restrict: "A",
        template: "<canvas/>",
        link: function(e, n, r) {
          var i, o, a, s, u;
          if (t.support && (o = function(e) {
              var t;
              return t = new Image, t.onload = a, t.src = e.target.result
            }, a = function() {
              var e, t, n, r, o, a, u, c, l;
              return u = s.width || this.width / this.height * s.height, t = s.height || this.height / this.width * s.width, i.attr({
                width: u,
                height: t
              }), e = i[0].getContext("2d"), void 0 !== s.width && void 0 !== s.height ? (l = u / t * this.height, c = t / u * this.width, l > this.width ? (r = this.width, n = c) : (r = l, n = this.height), o = (this.width - r) / 2, a = (this.height - n) / 2, e.drawImage(this, o, a, r, n, 0, 0, u, t)) : e.drawImage(this, 0, 0, u, t)
            }, s = e.$eval(r.scThumb), t.isFile(s.file) && t.isImage(s.file))) return i = n.find("canvas"), u = new FileReader, u.onload = o, u.readAsDataURL(s.file)
        }
      }
    }])
  }.call(this),
  function() {
    angular.module("sc.commons.directives.scrollTo", []).directive("scrollTo", function() {
      return {
        restrict: "A",
        link: function(e, t, n) {
          var r, i;
          r = n.href, i = 30, t.on("click", function() {
            var e;
            e = void 0, e = r ? $(r) : t, $("body").animate({
              scrollTop: e.offset().top - i
            }, "slow")
          })
        }
      }
    })
  }.call(this),
  function() {
    angular.module("sc.commons.directives.slidedown", []).directive("slidedown", function() {
      return {
        restrict: "C",
        link: function(e, t) {
          var n, r;
          n = t.find("section"), r = n[0].offsetHeight, n.css("height", "0"), t.on("mouseenter", function() {
            return n.css("height", r + "px")
          }), t.on("mouseleave", function() {
            return n.css("height", "0")
          })
        }
      }
    })
  }.call(this),
  function() {
    angular.module("sc.commons.directives.timeInput", []).directive("timeInput", ["dateFilter", "$parse", "$filter", "$html5support", function(e, t, n, r) {
      return {
        restrict: "A",
        require: "ngModel",
        template: "<input></input>",
        priority: 1,
        replace: !0,
        link: function(n, i, o, a) {
          var s;
          s = t(o.ngModel).assign, r.input.time ? i.prop("type", "time") : (i.prop("type", "text"), $(i).mask("99:99"), i.addClass("sc-input-time")), i.on("blur keyup change", function() {
            return a.$setViewValue(i.val(), a.$validate)
          }), a.$validators.timePattern = function(e, t) {
            var n;
            return n = e || t, void 0 === n || null === n || "" === n || "__:__" === n || moment(n, "HH:mm", !0).isValid() || moment(n).isValid()
          }, a.$formatters.push(function(t) {
            var r;
            return r = moment(t), moment(t).isValid() || s(n, void 0), e(t, "HH:mm")
          }), a.$parsers.push(function(e) {
            var t;
            return t = moment(e, "HH:mm", !0), t.isValid() ? t.toDate() : null
          })
        }
      }
    }])
  }.call(this),
  function() {
    angular.element.prototype.isParentOf = function(e) {
      for (; null != e;) {
        if (e === this[0]) return !0;
        e = e.parentNode
      }
      return !1
    }, angular.element.prototype.scrollTo = function(e, t) {
      return null == t && (t = angular.noop), $(this).stop().animate({
        scrollTop: e
      }, t)
    }
  }.call(this),
  function() {
    angular.module("sc.commons.factories.icons", []).factory("FaIcons", [function() {
      return ["fa-adjust", "fa-adn", "fa-align-center", "fa-align-justify", "fa-align-left", "fa-align-right", "fa-ambulance", "fa-anchor", "fa-android", "fa-angle-double-down", "fa-angle-double-left", "fa-angle-double-right", "fa-angle-double-up", "fa-angle-down", "fa-angle-left", "fa-angle-right", "fa-angle-up", "fa-apple", "fa-archive", "fa-arrow-circle-down", "fa-arrow-circle-left", "fa-arrow-circle-o-down", "fa-arrow-circle-o-left", "fa-arrow-circle-o-right", "fa-arrow-circle-o-up", "fa-arrow-circle-right", "fa-arrow-circle-up", "fa-arrow-down", "fa-arrow-left", "fa-arrow-right", "fa-arrow-up", "fa-arrows", "fa-arrows-alt", "fa-arrows-h", "fa-arrows-v", "fa-asterisk", "fa-automobile", "fa-backward", "fa-ban", "fa-bank", "fa-bar-chart-o", "fa-barcode", "fa-bars", "fa-beer", "fa-behance", "fa-behance-square", "fa-bell", "fa-bell-o", "fa-bitbucket", "fa-bitbucket-square", "fa-bitcoin", "fa-bold", "fa-bolt", "fa-bomb", "fa-book", "fa-bookmark", "fa-bookmark-o", "fa-briefcase", "fa-btc", "fa-bug", "fa-building", "fa-building-o", "fa-bullhorn", "fa-bullseye", "fa-cab", "fa-calendar", "fa-calendar-o", "fa-camera", "fa-camera-retro", "fa-car", "fa-caret-down", "fa-caret-left", "fa-caret-right", "fa-caret-square-o-down", "fa-caret-square-o-left", "fa-caret-square-o-right", "fa-caret-square-o-up", "fa-caret-up", "fa-certificate", "fa-chain", "fa-chain-broken", "fa-check", "fa-check-circle", "fa-check-circle-o", "fa-check-square", "fa-check-square-o", "fa-chevron-circle-down", "fa-chevron-circle-left", "fa-chevron-circle-right", "fa-chevron-circle-up", "fa-chevron-down", "fa-chevron-left", "fa-chevron-right", "fa-chevron-up", "fa-child", "fa-circle", "fa-circle-o", "fa-circle-o-notch", "fa-circle-thin", "fa-clipboard", "fa-clock-o", "fa-cloud", "fa-cloud-download", "fa-cloud-upload", "fa-cny", "fa-code", "fa-code-fork", "fa-codepen", "fa-coffee", "fa-cog", "fa-cogs", "fa-columns", "fa-comment", "fa-comment-o", "fa-comments", "fa-comments-o", "fa-compass", "fa-compress", "fa-copy", "fa-credit-card", "fa-crop", "fa-crosshairs", "fa-css3", "fa-cube", "fa-cubes", "fa-cut", "fa-cutlery", "fa-dashboard", "fa-database", "fa-dedent", "fa-delicious", "fa-desktop", "fa-deviantart", "fa-digg", "fa-dollar", "fa-dot-circle-o", "fa-download", "fa-dribbble", "fa-dropbox", "fa-drupal", "fa-edit", "fa-eject", "fa-ellipsis-h", "fa-ellipsis-v", "fa-empire", "fa-envelope", "fa-envelope-o", "fa-envelope-square", "fa-eraser", "fa-eur", "fa-euro", "fa-exchange", "fa-exclamation", "fa-exclamation-circle", "fa-exclamation-triangle", "fa-expand", "fa-external-link", "fa-external-link-square", "fa-eye", "fa-eye-slash", "fa-facebook", "fa-facebook-square", "fa-fast-backward", "fa-fast-forward", "fa-fax", "fa-female", "fa-fighter-jet", "fa-file", "fa-file-archive-o", "fa-file-audio-o", "fa-file-code-o", "fa-file-excel-o", "fa-file-image-o", "fa-file-movie-o", "fa-file-o", "fa-file-pdf-o", "fa-file-photo-o", "fa-file-picture-o", "fa-file-powerpoint-o", "fa-file-sound-o", "fa-file-text", "fa-file-text-o", "fa-file-video-o", "fa-file-word-o", "fa-file-zip-o", "fa-files-o", "fa-film", "fa-filter", "fa-fire", "fa-fire-extinguisher", "fa-flag", "fa-flag-checkered", "fa-flag-o", "fa-flash", "fa-flask", "fa-flickr", "fa-floppy-o", "fa-folder", "fa-folder-o", "fa-folder-open", "fa-folder-open-o", "fa-font", "fa-forward", "fa-foursquare", "fa-frown-o", "fa-gamepad", "fa-gavel", "fa-gbp", "fa-ge", "fa-gear", "fa-gears", "fa-gift", "fa-git", "fa-git-square", "fa-github", "fa-github-alt", "fa-github-square", "fa-gittip", "fa-glass", "fa-globe", "fa-google", "fa-google-plus", "fa-google-plus-square", "fa-graduation-cap", "fa-group", "fa-h-square", "fa-hacker-news", "fa-hand-o-down", "fa-hand-o-left", "fa-hand-o-right", "fa-hand-o-up", "fa-hdd-o", "fa-header", "fa-headphones", "fa-heart", "fa-heart-o", "fa-history", "fa-home", "fa-hospital-o", "fa-html5", "fa-image", "fa-inbox", "fa-indent", "fa-info", "fa-info-circle", "fa-inr", "fa-instagram", "fa-institution", "fa-italic", "fa-joomla", "fa-jpy", "fa-jsfiddle", "fa-key", "fa-keyboard-o", "fa-krw", "fa-language", "fa-laptop", "fa-leaf", "fa-legal", "fa-lemon-o", "fa-level-down", "fa-level-up", "fa-life-bouy", "fa-life-ring", "fa-life-saver", "fa-lightbulb-o", "fa-link", "fa-linkedin", "fa-linkedin-square", "fa-linux", "fa-list", "fa-list-alt", "fa-list-ol", "fa-list-ul", "fa-location-arrow", "fa-lock", "fa-long-arrow-down", "fa-long-arrow-left", "fa-long-arrow-right", "fa-long-arrow-up", "fa-magic", "fa-magnet", "fa-mail-forward", "fa-mail-reply", "fa-mail-reply-all", "fa-male", "fa-map-marker", "fa-maxcdn", "fa-medkit", "fa-meh-o", "fa-microphone", "fa-microphone-slash", "fa-minus", "fa-minus-circle", "fa-minus-square", "fa-minus-square-o", "fa-mobile", "fa-mobile-phone", "fa-money", "fa-moon-o", "fa-mortar-board", "fa-music", "fa-navicon", "fa-openid", "fa-outdent", "fa-pagelines", "fa-paper-plane", "fa-paper-plane-o", "fa-paperclip", "fa-paragraph", "fa-paste", "fa-pause", "fa-paw", "fa-pencil", "fa-pencil-square", "fa-pencil-square-o", "fa-phone", "fa-phone-square", "fa-photo", "fa-picture-o", "fa-pied-piper", "fa-pied-piper-alt", "fa-pied-piper-square", "fa-pinterest", "fa-pinterest-square", "fa-plane", "fa-play", "fa-play-circle", "fa-play-circle-o", "fa-plus", "fa-plus-circle", "fa-plus-square", "fa-plus-square-o", "fa-power-off", "fa-print", "fa-puzzle-piece", "fa-qq", "fa-qrcode", "fa-question", "fa-question-circle", "fa-quote-left", "fa-quote-right", "fa-ra", "fa-random", "fa-rebel", "fa-recycle", "fa-reddit", "fa-reddit-square", "fa-refresh", "fa-renren", "fa-reorder", "fa-repeat", "fa-reply", "fa-reply-all", "fa-retweet", "fa-rmb", "fa-road", "fa-rocket", "fa-rotate-left", "fa-rotate-right", "fa-rouble", "fa-rss", "fa-rss-square", "fa-rub", "fa-ruble", "fa-rupee", "fa-save", "fa-scissors", "fa-search", "fa-search-minus", "fa-search-plus", "fa-send", "fa-send-o", "fa-share", "fa-share-alt", "fa-share-alt-square", "fa-share-square", "fa-share-square-o", "fa-shield", "fa-shopping-cart", "fa-sign-in", "fa-sign-out", "fa-signal", "fa-sitemap", "fa-skype", "fa-slack", "fa-sliders", "fa-smile-o", "fa-sort", "fa-sort-alpha-asc", "fa-sort-alpha-desc", "fa-sort-amount-asc", "fa-sort-amount-desc", "fa-sort-asc", "fa-sort-desc", "fa-sort-down", "fa-sort-numeric-asc", "fa-sort-numeric-desc", "fa-sort-up", "fa-soundcloud", "fa-space-shuttle", "fa-spinner", "fa-spoon", "fa-spotify", "fa-square", "fa-square-o", "fa-stack-exchange", "fa-stack-overflow", "fa-star", "fa-star-half", "fa-star-half-empty", "fa-star-half-full", "fa-star-half-o", "fa-star-o", "fa-steam", "fa-steam-square", "fa-step-backward", "fa-step-forward", "fa-stethoscope", "fa-stop", "fa-strikethrough", "fa-stumbleupon", "fa-stumbleupon-circle", "fa-subscript", "fa-suitcase", "fa-sun-o", "fa-superscript", "fa-support", "fa-table", "fa-tablet", "fa-tachometer", "fa-tag", "fa-tags", "fa-tasks", "fa-taxi", "fa-tencent-weibo", "fa-terminal", "fa-text-height", "fa-text-width", "fa-th", "fa-th-large", "fa-th-list", "fa-thumb-tack", "fa-thumbs-down", "fa-thumbs-o-down", "fa-thumbs-o-up", "fa-thumbs-up", "fa-ticket", "fa-times", "fa-times-circle", "fa-times-circle-o", "fa-tint", "fa-toggle-down", "fa-toggle-left", "fa-toggle-right", "fa-toggle-up", "fa-trash-o", "fa-tree", "fa-trello", "fa-trophy", "fa-truck", "fa-try", "fa-tumblr", "fa-tumblr-square", "fa-turkish-lira", "fa-twitter", "fa-twitter-square", "fa-umbrella", "fa-underline", "fa-undo", "fa-university", "fa-unlink", "fa-unlock", "fa-unlock-alt", "fa-unsorted", "fa-upload", "fa-usd", "fa-user", "fa-user-md", "fa-users", "fa-video-camera", "fa-vimeo-square", "fa-vine", "fa-vk", "fa-volume-down", "fa-volume-off", "fa-volume-up", "fa-warning", "fa-wechat", "fa-weibo", "fa-weixin", "fa-wheelchair", "fa-windows", "fa-won", "fa-wordpress", "fa-wrench", "fa-xing", "fa-xing-square", "fa-yahoo", "fa-yen", "fa-youtube", "fa-youtube-play", "fa-youtube-square"]
    }])
  }.call(this),
  function() {
    angular.module("sc.commons.factories.resourceList", []).factory("ResourceList", ["$rootScope", function(e) {
      return function() {
        function t(e, t, n) {
          this.resource = e, this.cast = t, null == n && (n = {}), this.transformResponse = n.transformResponse
        }
        return t.prototype.init = function(e, t) {
          return null == t && (t = angular.noop), this.collection(e, t), this
        }, t.prototype.initialized = !1, t.prototype.loading = !1, t.prototype.list = [], t.prototype.collection = function(e, t) {
          return null == t && (t = angular.noop), null != e ? (this.list = e, this.initialized = !0, t(this)) : this.initialized ? t(this) : this.load(t), this.list
        }, t.prototype.findIdx = function(e) {
          return this.list.indexOfById(e)
        }, t.prototype.find = function(e, t) {
          var n;
          return null != (n = this.list.getById(e)) ? n : t
        }, t.prototype.remove = function(t) {
          return this.list.removeById(t), this.cast ? e.$broadcast("" + this.cast + ".removed", t) : void 0
        }, t.prototype.set = function(t, n, r) {
          var i, o, a;
          return null == n && (n = !1), null == r && (r = !0), null != t.id && (o = this.findIdx(t.id)) >= 0 ? (i = n ? this.list[o] : {}, a = this.list[o] = angular.extend(i, t), this.cast && e.$broadcast("" + this.cast + ".updated", a)) : (r ? this.list.push(t) : this.list.unshift(t), a = t, this.cast && e.$broadcast("" + this.cast + ".added", a)), this.cast && e.$broadcast("" + this.cast + ".setted", a), a
        }, t.prototype.load = function(t) {
          null == t && (t = angular.noop), this.loading || (this.loading = !0, this.index(function(n) {
            return function(r) {
              return n.initialized = !0, n.loading = !1, n.list = null != n.transformResponse ? n.transformResponse(r) : r.lista, t(n, r), n.cast ? e.$broadcast("" + n.cast + ".loaded") : void 0
            }
          }(this), function(e) {
            return function() {
              return e.initialized = !1, e.loading = !1, e.list = []
            }
          }(this)))
        }, t.prototype.save = function(e, t, n) {
          return null != e.id ? this.resource.update(e, t, n) : this.resource.create(e, t, n)
        }, t.prototype.index = function() {
          var e;
          return (e = this.resource).list.apply(e, arguments)
        }, t.prototype.create = function() {
          var e;
          return (e = this.resource).create.apply(e, arguments)
        }, t.prototype.update = function() {
          var e;
          return (e = this.resource).update.apply(e, arguments)
        }, t.prototype.destroy = function() {
          var e;
          return (e = this.resource).destroy.apply(e, arguments)
        }, t
      }()
    }])
  }.call(this), angular.module("sc.commons.factories.position", []).factory("$position", ["$document", "$window", function(e, t) {
    function n(e, n) {
      return e.currentStyle ? e.currentStyle[n] : t.getComputedStyle ? t.getComputedStyle(e)[n] : e.style[n]
    }

    function r(e) {
      return "static" === (n(e, "position") || "static")
    }
    var i = function(t) {
      for (var n = e[0], i = t.offsetParent || n; i && i !== n && r(i);) i = i.offsetParent;
      return i || n
    };
    return {
      position: function(t) {
        var n = this.offset(t),
          r = {
            top: 0,
            left: 0
          },
          o = i(t[0]);
        o != e[0] && (r = this.offset(angular.element(o)), r.top += o.clientTop - o.scrollTop, r.left += o.clientLeft - o.scrollLeft);
        var a = t[0].getBoundingClientRect();
        return {
          width: a.width || t.prop("offsetWidth"),
          height: a.height || t.prop("offsetHeight"),
          top: n.top - r.top,
          left: n.left - r.left
        }
      },
      offset: function(n) {
        var r = n[0].getBoundingClientRect();
        return {
          width: r.width || n.prop("offsetWidth"),
          height: r.height || n.prop("offsetHeight"),
          top: r.top + (t.pageYOffset || e[0].documentElement.scrollTop),
          left: r.left + (t.pageXOffset || e[0].documentElement.scrollLeft)
        }
      },
      positionElements: function(e, t, n, r) {
        var i, o, a, s, u = n.split("-"),
          c = u[0],
          l = u[1] || "center";
        i = r ? this.offset(e) : this.position(e), o = t.prop("offsetWidth"), a = t.prop("offsetHeight");
        var f = {
            center: function() {
              return i.left + i.width / 2 - o / 2
            },
            left: function() {
              return i.left
            },
            right: function() {
              return i.left + i.width
            }
          },
          d = {
            center: function() {
              return i.top + i.height / 2 - a / 2
            },
            top: function() {
              return i.top
            },
            bottom: function() {
              return i.top + i.height
            }
          };
        switch (c) {
          case "right":
            s = {
              top: d[l](),
              left: f[c]()
            };
            break;
          case "left":
            s = {
              top: d[l](),
              left: i.left - o
            };
            break;
          case "bottom":
            s = {
              top: d[c](),
              left: f[l]()
            };
            break;
          default:
            s = {
              top: i.top - a,
              left: f[l]()
            }
        }
        return s
      }
    }
  }]),
  function() {
    var e = [].slice,
      t = [].indexOf || function(e) {
        for (var t = 0, n = this.length; n > t; t++)
          if (t in this && this[t] === e) return t;
        return -1
      };
    angular.module("sc.commons.factories.states", []).factory("scStates", ["$timeout", function(n) {
      return function() {
        function r(e) {
          if (null == e && (e = {}), this.states = e.states, this.select = e.select, this.delay = e.delay, this.callbacks = {
              before: {},
              after: {}
            }, this.states || (this.states = []), this.states.length < 2) throw "Inform at least two states to constructor. ex.: new scStates states: ['idle', 'loading', 'destroying']";
          this.select || (this.select = this.states[0]), null == this.delay && (this.delay = 2200), this.is = {}, this.active = void 0, this.set(this.select)
        }
        return r.prototype.temp = function(e, t, r) {
          return this.set(e), t || (t = this.states[0]), null == r && (r = this.delay), this.promisse = n(function(e) {
            return function() {
              return e.set(t), e.promisse = void 0
            }
          }(this), r)
        }, r.prototype.set = function(e) {
          var t, r, i, o, a, s, u, c, l, f, d, h, p;
          for (null != this.promisse && n.cancel(this.promisse), l = (null != (c = this.callbacks.before) ? c[e] : void 0) || [], r = 0, a = l.length; a > r; r++)
            if (t = l[r], !t.apply(null, arguments)) return !1;
          for (f = this.states, i = 0, s = f.length; s > i; i++) p = f[i], this.is[p] = !1;
          for (this.is[e] = !0, this.active = e, h = (null != (d = this.callbacks.after) ? d[e] : void 0) || [], o = 0, u = h.length; u > o; o++) t = h[o], t.apply(null, arguments);
          return this
        }, r.prototype.toggle = function() {
          var t, n;
          return n = 1 <= arguments.length ? e.call(arguments, 0) : [], n.length || (n = this.states), t = n.indexOf(this.active), t = -1 === t ? 0 : (t + 1) % n.length, this.set(n[t])
        }, r.prototype.bind = function(e, n, r) {
          var i;
          if (null == r && (r = "after"), t.call(this.states, e) < 0) throw "State " + e + " not defined!";
          if ("after" !== r && "before" !== r) throw "On action must be before or after you passed " + r;
          return (i = this.callbacks[r])[e] || (i[e] = []), this.callbacks[r][e].push(n), this
        }, r.prototype.before = function() {
          return this.bind.apply(this, e.call(arguments).concat(["before"]))
        }, r.prototype.after = function() {
          return this.bind.apply(this, e.call(arguments).concat(["after"]))
        }, r.prototype.unbind = function(e, t, n) {
          var r, i;
          return null == n && (n = "after"), r = null != (null != (i = this.callbacks[n]) ? i[e] : void 0) || [], r.remove(t), this
        }, r
      }()
    }])
  }.call(this),
  function() {
    angular.module("sc.commons.factories.toggle", []).factory("scToggle", [function() {
      return function() {
        function e(e) {
          null == e && (e = {}), this.opened = e.opened, this.beforeClose = e.beforeClose, this.beforeOpen = e.beforeOpen, this.onClose = e.onClose, this.onOpen = e.onOpen, this.opened = !!this.opened, this.closed = !this.opened, this.normalize(), this.beforeClose || (this.beforeClose = angular.noop), this.beforeOpen || (this.beforeOpen = angular.noop), this.onClose || (this.onClose = angular.noop), this.onOpen || (this.onOpen = angular.noop)
        }
        return e.prototype.normalize = function() {
          return this.isOn = this.active = this.enabled = this.opened, this.isOff = this.inative = this.disabled = this.closed
        }, e.prototype.open = function() {
          var e;
          return this.beforeOpen.apply(this, arguments), this.opened ? void 0 : (e = [!1, !0], this.closed = e[0], this.opened = e[1], this.normalize(), this.onOpen.apply(this, arguments))
        }, e.prototype.close = function() {
          var e;
          return this.beforeClose.apply(this, arguments), this.closed ? void 0 : (e = [!0, !1], this.closed = e[0], this.opened = e[1], this.normalize(), this.onClose.apply(this, arguments))
        }, e.prototype.toggle = function() {
          return this.closed ? this.open.apply(this, arguments) : this.close.apply(this, arguments)
        }, e
      }()
    }])
  }.call(this),
  function() {
    angular.module("sc.commons.filters.array", []).filter("toSentence", function() {
      return function(e, t) {
        return e || (e = []), (t && e.map(function(e) {
          return e[t]
        }) || e).toSentence()
      }
    })
  }.call(this),
  function() {
    angular.module("sc.commons.filters.i18n", []).filter("i18n", ["$locale", function(e) {
      return function(t, n) {
        if ("string" == typeof n && (n = n.split(".")), !(n instanceof Array)) throw "invalid scope type";
        return null != t && n.push(t), null == e[n[0]] && n.unshift("MODELS"), n.extractFrom(e)
      }
    }])
  }.call(this),
  function() {
    angular.module("sc.commons.filters.sc.dinheiro", []).filter("dinheiro", function() {
      return function(e) {
        return null != e && (e = dinheiro(e)), e
      }
    }).filter("moedaContabil", function() {
      return function(e) {
        return 0 > e ? "(" + dinheiro(Math.abs(e)) + ")" : dinheiro(e)
      }
    })
  }.call(this),
  function() {
    angular.module("sc.commons.filters.highlight", []).filter("scHighlight", ["$sce", function(e) {
      return function(t, n) {
        var r;
        return r = n ? ("" + t).replace(createAccentRegexp(n), '<b class="highlight">$&</b>') : t, e.trustAsHtml(r)
      }
    }])
  }.call(this),
  function() {
    angular.module("sc.commons.filters.nl2br", []).filter("nl2br", ["$sce", function(e) {
      return function(t) {
        var n;
        return n = t.replace(/\n/g, "<br/>"), e.trustAsHtml(n)
      }
    }])
  }.call(this),
  function() {
    angular.module("sc.commons.filters.sc.queryString", []).filter("scQueryString", function() {
      return function(e) {
        var t, n, r, i;
        t = [], n = encodeURIComponent;
        for (r in e) i = e[r], e.hasOwnProperty(r) && i && t.push("" + n(r) + "=" + n(i || ""));
        return t.join("&").replace(/%20/g, "+")
      }
    })
  }.call(this),
  function() {
    angular.module("sc.commons.filters.showdown", ["ngSanitize"]).filter("showdown", ["$sce", function(e) {
      var t;
      return t = new Showdown.converter,
        function(n) {
          return e.trustAsHtml(t.makeHtml(n))
        }
    }])
  }.call(this),
  function() {
    angular.module("sc.commons.filters.sc.time", []).filter("scHora", function() {
      return function(e, t) {
        var n, r, i, o;
        return null == t && (t = "hours"), i = function() {
          switch (t) {
            case "hours":
              return 60 * e;
            case "minutes":
              return e;
            case "seconds":
              return e / 60
          }
        }(), o = [Math.floor(i / 60), i % 60], n = o[0], r = o[1], r = ("00" + r).slice(-2), "" + n + "h" + r + "min"
      }
    })
  }.call(this),
  function() {
    angular.module("sc.commons.filters.string", []).filter("capitalize", function() {
      return function(e) {
        return null !== e && (e = e.toLowerCase(), e = e.substring(0, 1).toUpperCase() + e.substring(1)), e
      }
    }).filter("upcase", function() {
      return function(e) {
        return null != e && (e = e.toUpperCase()), e
      }
    }).filter("ano_mes_para_pt", function() {
      return function(e) {
        return e.split("-").reverse().join("/")
      }
    }).filter("notimezone", function() {
      return function(e) {
        return null != e && (e = scTimezone.fromString(e)), e
      }
    })
  }.call(this),
  function() {}.call(this),
  function() {
    angular.module("sc.commons.helpers.crud.methods", ["ngRoute", "sc.commons.services.notifications"]).factory("$scCrudListMethods", ["$location", "$routeParams", "$scNotifications", function(e, t, n) {
      return function(r, i, o, a, s) {
        var u, c, l;
        return l = {}, c = {
          resourceTitle: {
            singular: "Registro",
            plural: "Registros"
          },
          deletionConfirmationMessage: "Tem certeza que deseja remover o registro?",
          deletionMessage: "Registro removido com sucesso",
          noEntries: "Nenhum registro encontrado"
        }, u = {
          "new": !0,
          show: !0,
          edit: !0,
          "delete": !0
        }, l["new"] = function() {
          if (!r.accepts["new"]) throw "Method new is not allowed";
          return this.clearQuerySearch(), e.path(i + "/new")
        }, l.show = function(t) {
          if (!r.accepts.show) throw "Method show is not allowed";
          return this.clearQuerySearch(), e.path(i + "/" + t)
        }, l.edit = function(t) {
          if (!r.accepts.edit) throw "Method edit is not allowed";
          return this.clearQuerySearch(), e.path(i + "/" + t + "/edit")
        }, l.clearQuerySearch = function() {
          return e.url(e.path())
        }, l["delete"] = function(e) {
          var t;
          if (!r.accepts["delete"]) throw "Method delete is not allowed";
          return t = r.entries[e], confirm(r.messages.deletionConfirmationMessage) ? r.resource["delete"]({
            id: t.id
          }, function() {
            return n.removeAll(), n.pushForCurrentRoute({
              type: "success",
              message: r.messages.deletionMessage
            }), r.listEntries()
          }) : void 0
        }, l.listEntries = function(e, t) {
          return r.carregando ? void 0 : r.ensureValidPage(function() {
            return r.carregando = !0, r.resource.list(r.getSearchParams(), function(t) {
              return r.carregando = !1, r.totalPages = t.total_pages, r.entries = t[o], e ? e(t) : void 0
            }, function(e) {
              return r.carregando = !1, t ? t(e) : void 0
            })
          })
        }, l.searchEntries = function(t, n) {
          return r.currentPage = 1, r.listEntries(function() {
            return e.search(r.getSearchParams()), t ? t() : void 0
          }, n)
        }, l.ensureValidPage = function(t, i) {
          var o;
          if (o = !1, r.currentPage < 1 && (r.currentPage = 1, o = !0), r.currentPage > r.totalPages && (r.currentPage = r.totalPages, o = !0), o) {
            if (angular.forEach(n.getCurrent(), function(e) {
                return n.pushForNextRoute(e)
              }), e.search(r.getSearchParams()), i) return i()
          } else if (t) return t()
        }, l.getSearchParams = function() {
          var e;
          return e = {}, r.query && (e.query = r.query), e.page = r.currentPage, e
        }, l.nextPage = function() {
          return r.currentPage >= r.totalPages ? void 0 : (r.currentPage += 1, e.search(r.getSearchParams()))
        }, l.previousPage = function() {
          return r.currentPage <= 1 ? void 0 : (r.currentPage -= 1, e.search(r.getSearchParams()))
        }, l.setup = function() {
          return r.entries = [], r.accepts = u, s && angular.extend(r.accepts, s.accepts), r.messages = c, s && angular.extend(r.messages, s.messages), r.resource = a, r.currentPage = parseInt(t.page) || 0, r.query = t.query || null
        }, l.setup(), l
      }
    }]).factory("$scCrudEditMethods", ["$location", "$routeParams", "$scNotifications", function(e, t, n) {
      return function(r, i, o, a, s) {
        var u, c;
        return u = {
          resourceTitle: {
            singular: "Registro",
            plural: "Registros"
          },
          editResource: "Editar Registro",
          newResource: "Novo Registro",
          savingError: "Erro ao salvar registro",
          savingSuccess: "Registro salvo com sucesso"
        }, c = {}, c.getEntry = function(e, n) {
          return t && t.id ? r.resource.get({
            id: t.id
          }, function(t) {
            r.entry = t[o], e && e(t)
          }, function(e) {
            return n ? n(e) : void 0
          }) : null
        }, c.isEdit = function() {
          return e.path().search("\\A*\\/edit$") > 0
        }, c.edit = function() {
          return t && t.id ? e.path(i + "/" + t.id + "/edit") : void 0
        }, c.save = function(e, t) {
          var i, o, a;
          if (!r.entry.saving) return a = this, r.entry.errors = {}, r.entry.saving = !0, o = function() {
            return r.entry.saving = !1, r.onSaveRedirectTo ? (n.pushForNextRoute({
              type: "success",
              message: r.messages.savingSuccess
            }), r.redirectTo(r.onSaveRedirectTo)) : n.pushForCurrentRoute({
              type: "success",
              message: r.messages.savingSuccess
            }), e ? e() : void 0
          }, i = function(e) {
            return r.entry.saving = !1, r.entry.errors = e.data.errors, n.removeAll(), n.pushForCurrentRoute({
              type: "error",
              message: r.messages.savingError
            }), t ? t() : void 0
          }, r.entry.id ? r.resource.update(r.entry, o, i) : r.resource.create(r.entry, o, i)
        }, c.setup = function() {
          return r.entry = {}, r.messages = u, s && s.messages && (r.messages = angular.extend(u, s.messages)), r.resource = a, s ? r.onSaveRedirectTo = s.onSaveRedirectTo : void 0
        }, c.redirectTo = function(t) {
          var n;
          return n = function() {
            switch (t) {
              case "index":
                return i;
              case "new":
                return "" + i + "/new";
              case "edit":
                return "" + i + "/" + response.id + "/edit";
              case "show":
                return "" + i + "/" + response.id;
              default:
                return t
            }
          }(), e.path(n)
        }, c.setup(), c
      }
    }])
  }.call(this),
  function() {
    angular.module("sc.commons.helpers.crud.routes", ["ngRoute"]).provider("$scCrudRoute", ["$routeProvider", function(e) {
      var t;
      return t = {}, t.$get = angular.noop, t.addCrudRoutesFor = function(t, n, r) {
        var i, o, a, s, u, c;
        for (r || (r = {}), r.only || (r.only = ["index", "edit", "new", "show"]), r.except || (r.except = []), c = r.except, s = 0, u = c.length; u > s; s++) o = c[s], r.only.remove(o);
        i = "/", n && (i += n + "/"), i += t, a = function(e) {
          var r;
          return r = "/assets/", n && (r += n + "/"), r += t + "/" + t, e && (r += "." + e), r += ".html"
        }, r.only.indexOf("index") > -1 && e.when(i, {
          templateUrl: a(),
          controller: t.toPascalCase() + "Ctrl"
        }), r.only.indexOf("new") > -1 && e.when(i + "/new", {
          templateUrl: a("edit"),
          controller: t.toPascalCase() + "EditCtrl"
        }), r.only.indexOf("show") > -1 && e.when(i + "/:id", {
          templateUrl: a("show"),
          controller: t.toPascalCase() + "EditCtrl"
        }), r.only.indexOf("edit") > -1 && e.when(i + "/:id/edit", {
          templateUrl: a("edit"),
          controller: t.toPascalCase() + "EditCtrl"
        })
      }, t
    }])
  }.call(this),
  function() {
    this.keyMap = {
      KEYDOWN: 229,
      ARROW: {
        LEFT: 37,
        UP: 38,
        RIGHT: 39,
        DOWN: 40
      },
      SPACE: 32,
      BACKSPACE: 8,
      TAB: 9,
      ENTER: 13,
      SHIFT: 16,
      CTRL: 17,
      ALT: 18,
      PAUSE_BREAK: 19,
      PAUSE: 19,
      BREAK: 19,
      CAPSLOCK: 20,
      CAPS_LOCK: 20,
      CAPS: 20,
      ESCAPE: 27,
      ESC: 27,
      PAGE_UP: 33,
      PAGE_DOWN: 34,
      END: 35,
      HOME: 36,
      INSERT: 45,
      DELETE: 46,
      DEL: 46,
      SCROLLLOCK: 145,
      SCROLL_LOCK: 145,
      SCROLL: 145,
      NUMLOCK: 144,
      NUM_LOCK: 144,
      NUM: 144,
      PRINT_SCREEN: 42,
      F1: 112,
      F2: 113,
      F3: 114,
      F4: 115,
      F5: 116,
      F6: 117,
      F7: 118,
      F8: 119,
      F9: 120,
      F10: 121,
      F11: 122,
      F12: 123,
      NUMBERS: {
        0: 48,
        1: 49,
        2: 50,
        3: 51,
        4: 52,
        5: 53,
        6: 54,
        7: 55,
        8: 56,
        9: 57
      },
      LETTERS: {
        A: 65,
        B: 66,
        C: 67,
        D: 68,
        E: 69,
        F: 70,
        G: 71,
        H: 72,
        I: 73,
        J: 74,
        K: 75,
        L: 76,
        M: 77,
        N: 78,
        O: 79,
        P: 80,
        Q: 81,
        R: 82,
        S: 83,
        T: 84,
        U: 85,
        V: 86,
        W: 87,
        X: 88,
        Y: 89,
        Z: 90
      }
    }
  }.call(this),
  function() {
    angular.module("sc.noticias").factory("NoticiaResource", ["$resource", function(e) {
      return e("/noticias/:slug.json", {
        slug: "@slug",
        pagina_atual: "@pagina_atual"
      }, {
        list: {
          method: "GET",
          isArray: !1
        },
        show: {
          method: "GET"
        }
      })
    }])
  }.call(this),
  function() {
    angular.module("sc.animations", ["ngAnimate"]).animation(".ng-animation-slider-fader", function() {
      return {
        enter: function(e, t) {
          return jQuery(e).stop().hide().css("opacity", 0).slideDown("fast", t).animate({
              opacity: 1
            }, {
              queue: !1,
              duration: "fast"
            }, t),
            function(t) {
              return t ? jQuery(e).stop() : void 0
            }
        },
        leave: function(e, t) {
          return jQuery(e).stop().show().css("opacity", 1).slideUp("fast", t).animate({
              opacity: 0
            }, {
              queue: !1,
              duration: "fast"
            }),
            function(t) {
              return t ? jQuery(e).stop() : void 0
            }
        },
        beforeAddClass: function(e, t, n) {
          return "ng-hide" === t ? jQuery(e).stop().show().css("opacity", 1).slideUp("fast", n).animate({
              opacity: 0
            }, {
              queue: !1,
              duration: "fast"
            }) : n(),
            function(t) {
              return t ? jQuery(e).stop() : void 0
            }
        },
        removeClass: function(e, t, n) {
          return "ng-hide" === t ? jQuery(e).stop().hide().css("opacity", 0).slideDown("fast", n).animate({
              opacity: 1
            }, {
              queue: !1,
              duration: "fast"
            }) : n(),
            function(t) {
              return t ? jQuery(e).stop() : void 0
            }
        }
      }
    }).animation(".ng-animation-slider", function() {
      return {
        enter: function(e, t) {
          return jQuery(e).hide().slideDown("fast", t),
            function(t) {
              return t ? jQuery(e).stop() : void 0
            }
        },
        leave: function(e, t) {
          return jQuery(e).slideUp("fast", t),
            function(t) {
              return t ? jQuery(e).stop() : void 0
            }
        },
        beforeAddClass: function(e, t, n) {
          return "ng-hide" === t ? jQuery(e).slideUp("fast", n) : n(),
            function(t) {
              return t ? jQuery(e).stop() : void 0
            }
        },
        removeClass: function(e, t, n) {
          return "ng-hide" === t ? jQuery(e).hide().slideDown("fast", n) : n(),
            function(t) {
              return t ? jQuery(e).stop() : void 0
            }
        }
      }
    }).animation(".ng-animation-show", function() {
      return {
        enter: function(e, t) {
          return jQuery(e).hide().show("fast", t),
            function(t) {
              return t ? jQuery(e).stop() : void 0
            }
        },
        leave: function(e, t) {
          return jQuery(e).hide("fast", t),
            function(t) {
              return t ? jQuery(e).stop() : void 0
            }
        },
        beforeAddClass: function(e, t, n) {
          return "ng-hide" === t ? jQuery(e).hide("fast", n) : n(),
            function(t) {
              return t ? jQuery(e).stop() : void 0
            }
        },
        removeClass: function(e, t, n) {
          return "ng-hide" === t ? jQuery(e).hide().show("fast", n) : n(),
            function(t) {
              return t ? jQuery(e).stop() : void 0
            }
        }
      }
    }).animation(".ng-animation-fader", function() {
      return {
        enter: function(e, t) {
          return jQuery(e).hide().fadeIn("fast", t),
            function(t) {
              return t ? jQuery(e).stop() : void 0
            }
        },
        leave: function(e, t) {
          return jQuery(e).fadeOut("fast", t),
            function(t) {
              return t ? jQuery(e).stop() : void 0
            }
        },
        beforeAddClass: function(e, t, n) {
          return "ng-hide" === t ? jQuery(e).fadeOut("fast", n) : n(),
            function(t) {
              return t ? jQuery(e).stop() : void 0
            }
        },
        removeClass: function(e, t, n) {
          return "ng-hide" === t ? jQuery(e).hide().fadeIn("fast", n) : n(),
            function(t) {
              return t ? jQuery(e).stop() : void 0
            }
        }
      }
    })
  }.call(this),
  function() {
    angular.module("sc.app.config", []).constant("ENV", {
      production: {
        requests: {
          alert: {
            on500: !1
          }
        },
        cdn: {
          whitelist: ["self", "http://*.seucondominio.com.br/**", "https://*.seucondominio.com.br/**"]
        }
      },
      local_staging: {
        requests: {
          alert: {
            on500: !0
          }
        },
        cdn: {
          whitelist: ["self"]
        }
      },
      staging: {
        requests: {
          alert: {
            on500: !0
          }
        },
        cdn: {
          whitelist: ["self", "http://*.seucondominio.com.br/**", "https://*.seucondominio.com.br/**", "http://*.stagingsc.com.br/**", "https://*.stagingsc.com.br/**"]
        }
      },
      development: {
        requests: {
          alert: {
            on500: !0
          }
        },
        cdn: {
          whitelist: ["self"]
        }
      },
      local_staging: {
        requests: {
          alert: {
            on500: !0
          }
        },
        cdn: {
          whitelist: ["self"]
        }
      }
    })
  }.call(this),
  function() {
    angular.module("sc.app.helpers", ["sc.commons.app-notifications", "sc.commons.components.typeahead", "sc.commons.components.monthPicker", "sc.commons.directives.dropdown", "sc.commons.directives.redirectFocusTo", "sc.commons.components.currencyInput", "sc.commons.directives.dateInput", "sc.commons.directives.integerInput", "sc.commons.directives.timeInput", "sc.commons.directives.durationInput", "sc.commons.directives.target", "sc.commons.directives.sticker", "sc.commons.directives.scroller", "sc.commons.directives.scrollTo", "sc.commons.directives.scStopClick", "sc.commons.directives.modal", "sc.commons.directives.thumb", "sc.commons.directives.redactor", "sc.commons.directives.input.dismiss.click", "sc.commons.filters.highlight", "sc.commons.filters.nl2br", "sc.commons.filters.sc.time", "sc.commons.filters.sc.dinheiro", "sc.commons.filters.sc.queryString", "sc.commons.filters.showdown", "sc.commons.filters.i18n", "sc.commons.filters.string", "sc.commons.filters.array", "sc.commons.services.html5support", "sc.commons.factories.resourceList", "sc.commons.factories.toggle", "sc.commons.factories.states", "sc.commons.factories.icons", "sc.commons.carousel", "sc.commons.scTopMessages", "sc.animations", "sc.page.settings", "sc.timezone", "sc.commons.directives.mask"])
  }.call(this),
  function() {
    $(document).ready(function() {
      "use strict";
      var e, t;
      return e = ".sc-btn, .sc-ripples-dark, .sc-ripples-light", t = isTouchable() ? "touchstart" : "click", $("body").on(t, e, function(e) {
        var t, n, r, i, o, a, s, u;
        return a = $(this), a.is(":visible") ? (o = $('<div class="sc-ripples-box"> <span class="sc-ripples-circle"></span> </div>').appendTo(a), n = o.parent().offset(), t = o.find(".sc-ripples-circle"), isTouchable() ? (r = e.originalEvent.touches[0].pageX, i = e.originalEvent.touches[0].pageY) : (r = e.pageX, i = e.pageY), s = r - n.left, u = i - n.top, t.css({
          top: u + "px",
          left: s + "px"
        }), o.addClass("is-active"), o.on("animationend webkitAnimationEnd oanimationend MSAnimationEnd", function() {
          return a.find(".sc-ripples-box").remove(), $(this).removeClass("is-active")
        })) : void 0
      })
    })
  }.call(this),
  function() {
    angular.module("sc.commons.services.breadcrumbs", []).service("$scBreadcrumbs", ["$rootScope", function(e) {
      var t, n;
      return t = {}, n = function(e) {
        angular.isUndefined(t[e]) && (t[e] = [])
      }, {
        reset: function(r) {
          n(r), t[r] = [], e.$broadcast("breadcrumbsRefresh")
        },
        set: function(r, i) {
          n(r), t[r] = i, e.$broadcast("breadcrumbsRefresh")
        },
        push: function(r, i) {
          n(r), t[r].push(i), e.$broadcast("breadcrumbsRefresh")
        },
        get: function(e) {
          return n(e), angular.copy(t[e])
        },
        setLastIndex: function(e, r) {
          n(e), t[e].length > 1 + r && t[e].splice(1 + r, t[e].length - r)
        }
      }
    }])
  }.call(this),
  function() {
    angular.module("sc.ganalytics", []).service("SCGoogleAnalyticsService", function() {
      return {
        registerPageChange: function() {
          return "undefined" != typeof _gaq && null !== _gaq ? _gaq.push(arguments[0] ? ["_trackPageview", arguments[0]] : ["_trackPageview"]) : void 0
        }
      }
    })
  }.call(this),
  function() {
    angular.module("sc.commons.services.html5support", []).service("$html5support", [function() {
      var e, t, n, r, i;
      for (this.input = {}, e = document.createElement("input"), i = ["search", "number", "range", "color", "tel", "url", "email", "date", "month", "week", "time", "datetime", "datetime-local"], n = 0, r = i.length; r > n; n++) t = i[n], e.setAttribute("type", t), this.input[t] = e.type === t;
      return this
    }])
  }.call(this),
  function() {
    angular.module("sc.noticias").factory("NoticiaService", ["NoticiaResource", function(e) {
      var t;
      return t = {
        perPage: 5,
        pagina: 1,
        totalItens: null,
        loading: !1,
        loaded: !1,
        lista: [],
        carregarPagina: function(e) {
          return this.pagina = e, this.list()
        },
        list: function() {
          return this.loading ? void 0 : (this.loading = !0, e.list({
            pagina: this.pagina
          }, function(e) {
            return function(t) {
              return e.loaded = !0, e.loading = !1, e.totalItens = t.total_itens, e.pagina = t.pagina, e.perPage = t.per_page, e.lista = t.noticias
            }
          }(this), function(e) {
            return function() {
              return e.loading = !1
            }
          }(this)))
        },
        show: function(t, n, r) {
          var i, o;
          return r || (r = angular.noop), n || (n = angular.noop), this.loading ? void 0 : (o = function(e) {
            return function(t) {
              return e.loading = !1, n(t)
            }
          }(this), i = function(e) {
            return function(t) {
              return e.loading = !1, r(t)
            }
          }(this), this.loading = !0, e.show(t, o, i))
        }
      }, t.list(), t
    }])
  }.call(this),
  function() {
    angular.module("sc.commons.services.notifications", []).factory("$scNotifications", ["$rootScope", function(e) {
      var t, n, r;
      return n = {
        STICKY: [],
        ROUTE_CURRENT: [],
        ROUTE_NEXT: []
      }, r = {}, t = function(e, t) {
        if (!angular.isObject(t)) throw new Error("Only object can be added to the notification service");
        return e.push(t), t
      }, e.$on("$routeChangeStart", function() {
        n.ROUTE_CURRENT.length = 0, n.ROUTE_CURRENT = angular.copy(n.ROUTE_NEXT), n.ROUTE_NEXT.length = 0
      }), r.getCurrent = function() {
        return [].concat(n.STICKY, n.ROUTE_CURRENT)
      }, r.pushSticky = function(e) {
        return t(n.STICKY, e)
      }, r.pushForCurrentRoute = function(e) {
        return t(n.ROUTE_CURRENT, e)
      }, r.pushForNextRoute = function(e) {
        return t(n.ROUTE_NEXT, e)
      }, r.remove = function(e) {
        angular.forEach(n, function(t) {
          var n;
          n = t.indexOf(e), n > -1 && t.splice(n, 1)
        })
      }, r.removeAll = function() {
        angular.forEach(n, function(e) {
          e.length = 0
        })
      }, r
    }])
  }.call(this),
  function() {
    var e = [].slice;
    angular.module("sc.commons.carousel", ["sc.commons.factories.toggle"]).service("$scCarousel", ["scToggle", "$filter", "$scTarget", function(t, n, r) {
      var i;
      return i = {}, i.orderBy = n("orderBy"), i.list = [], i.activeIdx = null, i.toggler = new t({
        onOpen: function() {
          var t;
          escurecerTela(), "function" == typeof removerBarraDeRolagemDoBody && removerBarraDeRolagemDoBody(), t = [this.closed, this.opened].concat(e.call(arguments)), i.closed = t[0], i.opened = t[1], i.list = t[2], i.activeIdx = t[3], r.focus(i, "carousel.navBoard", !1, 0)
        },
        onClose: function() {
          var e;
          clarearTela(), devolverBarraDeRolagemDoBody(), e = [this.closed, this.opened, [], null], i.closed = e[0], i.opened = e[1], i.list = e[2], i.activeIdx = e[3]
        }
      }), i.open = function() {
        var e;
        return (e = i.toggler).open.apply(e, arguments)
      }, i.close = function() {
        return i.toggler.close()
      }, i.getActive = function() {
        return i.list[i.activeIdx]
      }, i.getWidth = function(e) {
        return null == e.image && i.loadImage(e), e.image.width ? e.image.width + "px" : "auto"
      }, i.loadImage = function(e) {
        return null == e.image ? (e.image = new Image, e.image.src = e.url) : void 0
      }, i
    }]).directive("scCarousel", ["$scCarousel", function(e) {
      return {
        link: function(t, n) {
          t.carousel = e, t.navigate = function(e) {
            var n, r, i;
            switch (r = e.which || e.keyCode, n = t.carousel.activeIdx, i = t.carousel.list.length, r) {
              case keyMap.ARROW.LEFT:
                return t.carousel.activeIdx = (n ? n : i) - 1;
              case keyMap.ARROW.RIGHT:
                return t.carousel.activeIdx = (n + 1) % i;
              case keyMap.ESC:
                return t.carousel.close(), e.stopPropagation()
            }
          }, n.show()
        }
      }
    }])
  }.call(this),
  function() {
    angular.module("sc.page.settings", []).provider("$scPageSettings", [function() {
      var e;
      return e = {
        $get: [function() {
          return {
            updateFromUrlParams: function(e, t) {
              return scPageSystem.updatePageSettingsFromServer(e, t)
            }
          }
        }]
      }
    }])
  }.call(this),
  function() {
    angular.module("sc.timezone", []).provider("$scTimezone", [function() {
      var e;
      return e = {
        $get: [function() {
          return scTimezone
        }]
      }
    }])
  }.call(this),
  function() {
    angular.module("sc.commons.scTopMessages", ["sc.commons.factories.toggle"]).service("scTopMessages", ["scToggle", function(e) {
      var t;
      return t = {}, t.toggler = new e, t.messages = [], t.close = function() {
        return t.messages = [], t.toggler.close()
      }, t.open = function(e) {
        return "string" == typeof e && (e = [e]), t.messages = e, t.toggler.open()
      }, t
    }])
  }.call(this),
  function() {
    angular.module("sc.websocket", []).provider("$scWebSocket", function() {
      return this.$get = function() {
        var e, t, n;
        return e = {}, t = function(e, t, n) {
          return {
            scope: function(t) {
              return e.scope(t)
            },
            subscribe: function(n) {
              if (t && n) return e.subscribe(t, n);
              throw new Error("Wrong number of arguments")
            },
            on: function() {
              if (t && n && (2 === arguments.length || 3 === arguments.length)) return e.on(t, n, arguments[0], arguments[1], arguments[2]);
              throw new Error("Wrong number of arguments")
            },
            talk: function() {
              if (t && n && (2 === arguments.length || 3 === arguments.length)) return e.talk(t, n, arguments[0], arguments[1], arguments[2]);
              throw new Error("Wrong number of arguments")
            }
          }
        }, n = function(e, t) {
          return "" + e + "-" + t
        }, {
          scope: function(n) {
            return e[n.$id] || (e[n.$id] = {
              obj: n,
              channels: []
            }, n.$on("$destroy", function() {
              var t, r, i, o;
              for (o = e[n.$id].channels, r = 0, i = o.length; i > r; r++) t = o[r], channelStopListen(t);
              return delete e[n.$id]
            })), t(this, n)
          },
          subscribe: function(e, n) {
            return this.scope(e), t(this, e, n)
          },
          on: function(r, i, o, a, s) {
            var u, c, l;
            return this.subscribe(r, i), c = n(i, o), -1 === e[r.$id].channels.indexOf(c) && (e[r.$id].channels.push(c), u = function(e) {
              var t, n;
              try {
                n = JSON.parse(e)
              } catch (i) {
                t = i, n = e
              }
              return r.$apply(function() {
                return a(n)
              })
            }, s && (l = function(e) {
              var t, n;
              try {
                n = JSON.parse(e)
              } catch (i) {
                t = i, n = e
              }
              return r.$apply(function() {
                return s(n)
              })
            }), channelListen(c, {
              onData: u,
              onReconnect: l
            })), t(this, r, i)
          },
          talk: function(e, r, i, o, a) {
            var s;
            return s = a ? channelTalkInclusiveMe : channelTalk, s(n(r, i), o), t(this, e, r)
          }
        }
      }, this
    })
  }.call(this),
  function() {
    angular.module("sc.seo", []).provider("$seo", function() {
      return {
        $get: function() {
          return this
        },
        data: {},
        update: function(e) {
          return null == e && (e = {}), this.data = {}, e.title && (this.data.title = e.title), e.description && (this.data.description = e.description), e.image && (this.data.image = e.image), e.url ? this.data.url = e.url : void 0
        }
      }
    })
  }.call(this);
