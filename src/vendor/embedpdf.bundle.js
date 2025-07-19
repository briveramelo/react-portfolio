var __defProp = Object.defineProperty;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __esm = (fn2, res) => function __init() {
  return fn2 && (res = (0, fn2[__getOwnPropNames(fn2)[0]])(fn2 = 0)), res;
};
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};

// src/vendor/embedpdf/hammer-d68c853c.js
var hammer_d68c853c_exports = {};
__export(hammer_d68c853c_exports, {
  h: () => r
});
function t(t3) {
  return t3 && t3.__esModule && Object.prototype.hasOwnProperty.call(t3, "default") ? t3.default : t3;
}
var e, i, n, r;
var init_hammer_d68c853c = __esm({
  "src/vendor/embedpdf/hammer-d68c853c.js"() {
    i = { exports: {} };
    e = i, function(t3, i4, n3, r4) {
      var s3, o3 = ["", "webkit", "Moz", "MS", "ms", "o"], a3 = i4.createElement("div"), h2 = Math.round, u2 = Math.abs, c2 = Date.now;
      function l2(t4, e5, i5) {
        return setTimeout(T3(t4, i5), e5);
      }
      function p2(t4, e5, i5) {
        return !!Array.isArray(t4) && (f2(t4, i5[e5], i5), true);
      }
      function f2(t4, e5, i5) {
        var n4;
        if (t4) if (t4.forEach) t4.forEach(e5, i5);
        else if (t4.length !== r4) for (n4 = 0; n4 < t4.length; ) e5.call(i5, t4[n4], n4, t4), n4++;
        else for (n4 in t4) t4.hasOwnProperty(n4) && e5.call(i5, t4[n4], n4, t4);
      }
      function v3(e5, i5, n4) {
        var r5 = "DEPRECATED METHOD: " + i5 + "\n" + n4 + " AT \n";
        return function() {
          var i6 = new Error("get-stack-trace"), n5 = i6 && i6.stack ? i6.stack.replace(/^[^\(]+?[\n$]/gm, "").replace(/^\s+at\s+/gm, "").replace(/^Object.<anonymous>\s*\(/gm, "{anonymous}()@") : "Unknown Stack Trace", s4 = t3.console && (t3.console.warn || t3.console.log);
          return s4 && s4.call(t3.console, r5, n5), e5.apply(this, arguments);
        };
      }
      s3 = "function" != typeof Object.assign ? function(t4) {
        if (t4 === r4 || null === t4) throw new TypeError("Cannot convert undefined or null to object");
        for (var e5 = Object(t4), i5 = 1; i5 < arguments.length; i5++) {
          var n4 = arguments[i5];
          if (n4 !== r4 && null !== n4) for (var s4 in n4) n4.hasOwnProperty(s4) && (e5[s4] = n4[s4]);
        }
        return e5;
      } : Object.assign;
      var d2 = v3(function(t4, e5, i5) {
        for (var n4 = Object.keys(e5), s4 = 0; s4 < n4.length; ) (!i5 || i5 && t4[n4[s4]] === r4) && (t4[n4[s4]] = e5[n4[s4]]), s4++;
        return t4;
      }, "extend", "Use `assign`."), m2 = v3(function(t4, e5) {
        return d2(t4, e5, true);
      }, "merge", "Use `assign`.");
      function g2(t4, e5, i5) {
        var n4, r5 = e5.prototype;
        (n4 = t4.prototype = Object.create(r5)).constructor = t4, n4._super = r5, i5 && s3(n4, i5);
      }
      function T3(t4, e5) {
        return function() {
          return t4.apply(e5, arguments);
        };
      }
      function y3(t4, e5) {
        return "function" == typeof t4 ? t4.apply(e5 && e5[0] || r4, e5) : t4;
      }
      function E2(t4, e5) {
        return t4 === r4 ? e5 : t4;
      }
      function I3(t4, e5, i5) {
        f2(C3(e5), function(e6) {
          t4.addEventListener(e6, i5, false);
        });
      }
      function _2(t4, e5, i5) {
        f2(C3(e5), function(e6) {
          t4.removeEventListener(e6, i5, false);
        });
      }
      function A2(t4, e5) {
        for (; t4; ) {
          if (t4 == e5) return true;
          t4 = t4.parentNode;
        }
        return false;
      }
      function b2(t4, e5) {
        return t4.indexOf(e5) > -1;
      }
      function C3(t4) {
        return t4.trim().split(/\s+/g);
      }
      function P2(t4, e5, i5) {
        if (t4.indexOf && !i5) return t4.indexOf(e5);
        for (var n4 = 0; n4 < t4.length; ) {
          if (i5 && t4[n4][i5] == e5 || !i5 && t4[n4] === e5) return n4;
          n4++;
        }
        return -1;
      }
      function S2(t4) {
        return Array.prototype.slice.call(t4, 0);
      }
      function x3(t4, e5, i5) {
        for (var n4 = [], r5 = [], s4 = 0; s4 < t4.length; ) {
          var o4 = e5 ? t4[s4][e5] : t4[s4];
          P2(r5, o4) < 0 && n4.push(t4[s4]), r5[s4] = o4, s4++;
        }
        return i5 && (n4 = e5 ? n4.sort(function(t5, i6) {
          return t5[e5] > i6[e5];
        }) : n4.sort()), n4;
      }
      function D2(t4, e5) {
        for (var i5, n4, s4 = e5[0].toUpperCase() + e5.slice(1), a4 = 0; a4 < o3.length; ) {
          if ((n4 = (i5 = o3[a4]) ? i5 + s4 : e5) in t4) return n4;
          a4++;
        }
        return r4;
      }
      var w3 = 1;
      function O3(e5) {
        var i5 = e5.ownerDocument || e5;
        return i5.defaultView || i5.parentWindow || t3;
      }
      var M2 = "ontouchstart" in t3, R3 = D2(t3, "PointerEvent") !== r4, z3 = M2 && /mobile|tablet|ip(ad|hone|od)|android/i.test(navigator.userAgent), N3 = "touch", X2 = "mouse", Y2 = 24, F2 = ["x", "y"], W3 = ["clientX", "clientY"];
      function q2(t4, e5) {
        var i5 = this;
        this.manager = t4, this.callback = e5, this.element = t4.element, this.target = t4.options.inputTarget, this.domHandler = function(e6) {
          y3(t4.options.enable, [t4]) && i5.handler(e6);
        }, this.init();
      }
      function k3(t4, e5, i5) {
        var n4 = i5.pointers.length, s4 = i5.changedPointers.length, o4 = 1 & e5 && n4 - s4 == 0, a4 = 12 & e5 && n4 - s4 == 0;
        i5.isFirst = !!o4, i5.isFinal = !!a4, o4 && (t4.session = {}), i5.eventType = e5, function(t5, e6) {
          var i6 = t5.session, n5 = e6.pointers, s5 = n5.length;
          i6.firstInput || (i6.firstInput = H2(e6)), s5 > 1 && !i6.firstMultiple ? i6.firstMultiple = H2(e6) : 1 === s5 && (i6.firstMultiple = false);
          var o5 = i6.firstInput, a5 = i6.firstMultiple, h3 = a5 ? a5.center : o5.center, l3 = e6.center = L3(n5);
          e6.timeStamp = c2(), e6.deltaTime = e6.timeStamp - o5.timeStamp, e6.angle = G2(h3, l3), e6.distance = V3(h3, l3), function(t6, e7) {
            var i7 = e7.center, n6 = t6.offsetDelta || {}, r5 = t6.prevDelta || {}, s6 = t6.prevInput || {};
            1 !== e7.eventType && 4 !== s6.eventType || (r5 = t6.prevDelta = { x: s6.deltaX || 0, y: s6.deltaY || 0 }, n6 = t6.offsetDelta = { x: i7.x, y: i7.y }), e7.deltaX = r5.x + (i7.x - n6.x), e7.deltaY = r5.y + (i7.y - n6.y);
          }(i6, e6), e6.offsetDirection = U3(e6.deltaX, e6.deltaY);
          var p3, f3, v4 = j3(e6.deltaTime, e6.deltaX, e6.deltaY);
          e6.overallVelocityX = v4.x, e6.overallVelocityY = v4.y, e6.overallVelocity = u2(v4.x) > u2(v4.y) ? v4.x : v4.y, e6.scale = a5 ? (p3 = a5.pointers, V3((f3 = n5)[0], f3[1], W3) / V3(p3[0], p3[1], W3)) : 1, e6.rotation = a5 ? function(t6, e7) {
            return G2(e7[1], e7[0], W3) + G2(t6[1], t6[0], W3);
          }(a5.pointers, n5) : 0, e6.maxPointers = i6.prevInput ? e6.pointers.length > i6.prevInput.maxPointers ? e6.pointers.length : i6.prevInput.maxPointers : e6.pointers.length, function(t6, e7) {
            var i7, n6, s6, o6, a6 = t6.lastInterval || e7, h4 = e7.timeStamp - a6.timeStamp;
            if (8 != e7.eventType && (h4 > 25 || a6.velocity === r4)) {
              var c3 = e7.deltaX - a6.deltaX, l4 = e7.deltaY - a6.deltaY, p4 = j3(h4, c3, l4);
              n6 = p4.x, s6 = p4.y, i7 = u2(p4.x) > u2(p4.y) ? p4.x : p4.y, o6 = U3(c3, l4), t6.lastInterval = e7;
            } else i7 = a6.velocity, n6 = a6.velocityX, s6 = a6.velocityY, o6 = a6.direction;
            e7.velocity = i7, e7.velocityX = n6, e7.velocityY = s6, e7.direction = o6;
          }(i6, e6);
          var d3 = t5.element;
          A2(e6.srcEvent.target, d3) && (d3 = e6.srcEvent.target), e6.target = d3;
        }(t4, i5), t4.emit("hammer.input", i5), t4.recognize(i5), t4.session.prevInput = i5;
      }
      function H2(t4) {
        for (var e5 = [], i5 = 0; i5 < t4.pointers.length; ) e5[i5] = { clientX: h2(t4.pointers[i5].clientX), clientY: h2(t4.pointers[i5].clientY) }, i5++;
        return { timeStamp: c2(), pointers: e5, center: L3(e5), deltaX: t4.deltaX, deltaY: t4.deltaY };
      }
      function L3(t4) {
        var e5 = t4.length;
        if (1 === e5) return { x: h2(t4[0].clientX), y: h2(t4[0].clientY) };
        for (var i5 = 0, n4 = 0, r5 = 0; r5 < e5; ) i5 += t4[r5].clientX, n4 += t4[r5].clientY, r5++;
        return { x: h2(i5 / e5), y: h2(n4 / e5) };
      }
      function j3(t4, e5, i5) {
        return { x: e5 / t4 || 0, y: i5 / t4 || 0 };
      }
      function U3(t4, e5) {
        return t4 === e5 ? 1 : u2(t4) >= u2(e5) ? t4 < 0 ? 2 : 4 : e5 < 0 ? 8 : 16;
      }
      function V3(t4, e5, i5) {
        i5 || (i5 = F2);
        var n4 = e5[i5[0]] - t4[i5[0]], r5 = e5[i5[1]] - t4[i5[1]];
        return Math.sqrt(n4 * n4 + r5 * r5);
      }
      function G2(t4, e5, i5) {
        i5 || (i5 = F2);
        var n4 = e5[i5[0]] - t4[i5[0]], r5 = e5[i5[1]] - t4[i5[1]];
        return 180 * Math.atan2(r5, n4) / Math.PI;
      }
      q2.prototype = { handler: function() {
      }, init: function() {
        this.evEl && I3(this.element, this.evEl, this.domHandler), this.evTarget && I3(this.target, this.evTarget, this.domHandler), this.evWin && I3(O3(this.element), this.evWin, this.domHandler);
      }, destroy: function() {
        this.evEl && _2(this.element, this.evEl, this.domHandler), this.evTarget && _2(this.target, this.evTarget, this.domHandler), this.evWin && _2(O3(this.element), this.evWin, this.domHandler);
      } };
      var Z2 = { mousedown: 1, mousemove: 2, mouseup: 4 }, B3 = "mousedown", $2 = "mousemove mouseup";
      function J2() {
        this.evEl = B3, this.evWin = $2, this.pressed = false, q2.apply(this, arguments);
      }
      g2(J2, q2, { handler: function(t4) {
        var e5 = Z2[t4.type];
        1 & e5 && 0 === t4.button && (this.pressed = true), 2 & e5 && 1 !== t4.which && (e5 = 4), this.pressed && (4 & e5 && (this.pressed = false), this.callback(this.manager, e5, { pointers: [t4], changedPointers: [t4], pointerType: X2, srcEvent: t4 }));
      } });
      var K2 = { pointerdown: 1, pointermove: 2, pointerup: 4, pointercancel: 8, pointerout: 8 }, Q2 = { 2: N3, 3: "pen", 4: X2, 5: "kinect" }, tt2 = "pointerdown", et2 = "pointermove pointerup pointercancel";
      function it2() {
        this.evEl = tt2, this.evWin = et2, q2.apply(this, arguments), this.store = this.manager.session.pointerEvents = [];
      }
      t3.MSPointerEvent && !t3.PointerEvent && (tt2 = "MSPointerDown", et2 = "MSPointerMove MSPointerUp MSPointerCancel"), g2(it2, q2, { handler: function(t4) {
        var e5 = this.store, i5 = false, n4 = t4.type.toLowerCase().replace("ms", ""), r5 = K2[n4], s4 = Q2[t4.pointerType] || t4.pointerType, o4 = s4 == N3, a4 = P2(e5, t4.pointerId, "pointerId");
        1 & r5 && (0 === t4.button || o4) ? a4 < 0 && (e5.push(t4), a4 = e5.length - 1) : 12 & r5 && (i5 = true), a4 < 0 || (e5[a4] = t4, this.callback(this.manager, r5, { pointers: e5, changedPointers: [t4], pointerType: s4, srcEvent: t4 }), i5 && e5.splice(a4, 1));
      } });
      var nt2 = { touchstart: 1, touchmove: 2, touchend: 4, touchcancel: 8 };
      function rt2() {
        this.evTarget = "touchstart", this.evWin = "touchstart touchmove touchend touchcancel", this.started = false, q2.apply(this, arguments);
      }
      function st2(t4, e5) {
        var i5 = S2(t4.touches), n4 = S2(t4.changedTouches);
        return 12 & e5 && (i5 = x3(i5.concat(n4), "identifier", true)), [i5, n4];
      }
      g2(rt2, q2, { handler: function(t4) {
        var e5 = nt2[t4.type];
        if (1 === e5 && (this.started = true), this.started) {
          var i5 = st2.call(this, t4, e5);
          12 & e5 && i5[0].length - i5[1].length == 0 && (this.started = false), this.callback(this.manager, e5, { pointers: i5[0], changedPointers: i5[1], pointerType: N3, srcEvent: t4 });
        }
      } });
      var ot2 = { touchstart: 1, touchmove: 2, touchend: 4, touchcancel: 8 }, at2 = "touchstart touchmove touchend touchcancel";
      function ht2() {
        this.evTarget = at2, this.targetIds = {}, q2.apply(this, arguments);
      }
      function ut2(t4, e5) {
        var i5 = S2(t4.touches), n4 = this.targetIds;
        if (3 & e5 && 1 === i5.length) return n4[i5[0].identifier] = true, [i5, i5];
        var r5, s4, o4 = S2(t4.changedTouches), a4 = [], h3 = this.target;
        if (s4 = i5.filter(function(t5) {
          return A2(t5.target, h3);
        }), 1 === e5) for (r5 = 0; r5 < s4.length; ) n4[s4[r5].identifier] = true, r5++;
        for (r5 = 0; r5 < o4.length; ) n4[o4[r5].identifier] && a4.push(o4[r5]), 12 & e5 && delete n4[o4[r5].identifier], r5++;
        return a4.length ? [x3(s4.concat(a4), "identifier", true), a4] : void 0;
      }
      function ct2() {
        q2.apply(this, arguments);
        var t4 = T3(this.handler, this);
        this.touch = new ht2(this.manager, t4), this.mouse = new J2(this.manager, t4), this.primaryTouch = null, this.lastTouches = [];
      }
      function lt2(t4, e5) {
        1 & t4 ? (this.primaryTouch = e5.changedPointers[0].identifier, pt2.call(this, e5)) : 12 & t4 && pt2.call(this, e5);
      }
      function pt2(t4) {
        var e5 = t4.changedPointers[0];
        if (e5.identifier === this.primaryTouch) {
          var i5 = { x: e5.clientX, y: e5.clientY };
          this.lastTouches.push(i5);
          var n4 = this.lastTouches;
          setTimeout(function() {
            var t5 = n4.indexOf(i5);
            t5 > -1 && n4.splice(t5, 1);
          }, 2500);
        }
      }
      function ft2(t4) {
        for (var e5 = t4.srcEvent.clientX, i5 = t4.srcEvent.clientY, n4 = 0; n4 < this.lastTouches.length; n4++) {
          var r5 = this.lastTouches[n4], s4 = Math.abs(e5 - r5.x), o4 = Math.abs(i5 - r5.y);
          if (s4 <= 25 && o4 <= 25) return true;
        }
        return false;
      }
      g2(ht2, q2, { handler: function(t4) {
        var e5 = ot2[t4.type], i5 = ut2.call(this, t4, e5);
        i5 && this.callback(this.manager, e5, { pointers: i5[0], changedPointers: i5[1], pointerType: N3, srcEvent: t4 });
      } }), g2(ct2, q2, { handler: function(t4, e5, i5) {
        var n4 = i5.pointerType == N3, r5 = i5.pointerType == X2;
        if (!(r5 && i5.sourceCapabilities && i5.sourceCapabilities.firesTouchEvents)) {
          if (n4) lt2.call(this, e5, i5);
          else if (r5 && ft2.call(this, i5)) return;
          this.callback(t4, e5, i5);
        }
      }, destroy: function() {
        this.touch.destroy(), this.mouse.destroy();
      } });
      var vt2 = D2(a3.style, "touchAction"), dt2 = vt2 !== r4, mt2 = "compute", gt2 = "auto", Tt2 = "manipulation", yt2 = "none", Et2 = "pan-x", It2 = "pan-y", _t2 = function() {
        if (!dt2) return false;
        var e5 = {}, i5 = t3.CSS && t3.CSS.supports;
        return ["auto", "manipulation", "pan-y", "pan-x", "pan-x pan-y", "none"].forEach(function(n4) {
          e5[n4] = !i5 || t3.CSS.supports("touch-action", n4);
        }), e5;
      }();
      function At2(t4, e5) {
        this.manager = t4, this.set(e5);
      }
      At2.prototype = { set: function(t4) {
        t4 == mt2 && (t4 = this.compute()), dt2 && this.manager.element.style && _t2[t4] && (this.manager.element.style[vt2] = t4), this.actions = t4.toLowerCase().trim();
      }, update: function() {
        this.set(this.manager.options.touchAction);
      }, compute: function() {
        var t4 = [];
        return f2(this.manager.recognizers, function(e5) {
          y3(e5.options.enable, [e5]) && (t4 = t4.concat(e5.getTouchAction()));
        }), function(t5) {
          if (b2(t5, yt2)) return yt2;
          var e5 = b2(t5, Et2), i5 = b2(t5, It2);
          return e5 && i5 ? yt2 : e5 || i5 ? e5 ? Et2 : It2 : b2(t5, Tt2) ? Tt2 : gt2;
        }(t4.join(" "));
      }, preventDefaults: function(t4) {
        var e5 = t4.srcEvent, i5 = t4.offsetDirection;
        if (this.manager.session.prevented) e5.preventDefault();
        else {
          var n4 = this.actions, r5 = b2(n4, yt2) && !_t2[yt2], s4 = b2(n4, It2) && !_t2[It2], o4 = b2(n4, Et2) && !_t2[Et2];
          if (r5) {
            var a4 = 1 === t4.pointers.length, h3 = t4.distance < 2, u3 = t4.deltaTime < 250;
            if (a4 && h3 && u3) return;
          }
          if (!o4 || !s4) return r5 || s4 && 6 & i5 || o4 && i5 & Y2 ? this.preventSrc(e5) : void 0;
        }
      }, preventSrc: function(t4) {
        this.manager.session.prevented = true, t4.preventDefault();
      } };
      var bt2 = 32;
      function Ct2(t4) {
        this.options = s3({}, this.defaults, t4 || {}), this.id = w3++, this.manager = null, this.options.enable = E2(this.options.enable, true), this.state = 1, this.simultaneous = {}, this.requireFail = [];
      }
      function Pt2(t4) {
        return 16 & t4 ? "cancel" : 8 & t4 ? "end" : 4 & t4 ? "move" : 2 & t4 ? "start" : "";
      }
      function St2(t4) {
        return 16 == t4 ? "down" : 8 == t4 ? "up" : 2 == t4 ? "left" : 4 == t4 ? "right" : "";
      }
      function xt2(t4, e5) {
        var i5 = e5.manager;
        return i5 ? i5.get(t4) : t4;
      }
      function Dt2() {
        Ct2.apply(this, arguments);
      }
      function wt2() {
        Dt2.apply(this, arguments), this.pX = null, this.pY = null;
      }
      function Ot2() {
        Dt2.apply(this, arguments);
      }
      function Mt2() {
        Ct2.apply(this, arguments), this._timer = null, this._input = null;
      }
      function Rt2() {
        Dt2.apply(this, arguments);
      }
      function zt2() {
        Dt2.apply(this, arguments);
      }
      function Nt2() {
        Ct2.apply(this, arguments), this.pTime = false, this.pCenter = false, this._timer = null, this._input = null, this.count = 0;
      }
      function Xt2(t4, e5) {
        return (e5 = e5 || {}).recognizers = E2(e5.recognizers, Xt2.defaults.preset), new Yt2(t4, e5);
      }
      function Yt2(t4, e5) {
        var i5;
        this.options = s3({}, Xt2.defaults, e5 || {}), this.options.inputTarget = this.options.inputTarget || t4, this.handlers = {}, this.session = {}, this.recognizers = [], this.oldCssProps = {}, this.element = t4, this.input = new ((i5 = this).options.inputClass || (R3 ? it2 : z3 ? ht2 : M2 ? ct2 : J2))(i5, k3), this.touchAction = new At2(this, this.options.touchAction), Ft2(this, true), f2(this.options.recognizers, function(t5) {
          var e6 = this.add(new t5[0](t5[1]));
          t5[2] && e6.recognizeWith(t5[2]), t5[3] && e6.requireFailure(t5[3]);
        }, this);
      }
      function Ft2(t4, e5) {
        var i5, n4 = t4.element;
        n4.style && (f2(t4.options.cssProps, function(r5, s4) {
          i5 = D2(n4.style, s4), e5 ? (t4.oldCssProps[i5] = n4.style[i5], n4.style[i5] = r5) : n4.style[i5] = t4.oldCssProps[i5] || "";
        }), e5 || (t4.oldCssProps = {}));
      }
      Ct2.prototype = { defaults: {}, set: function(t4) {
        return s3(this.options, t4), this.manager && this.manager.touchAction.update(), this;
      }, recognizeWith: function(t4) {
        if (p2(t4, "recognizeWith", this)) return this;
        var e5 = this.simultaneous;
        return e5[(t4 = xt2(t4, this)).id] || (e5[t4.id] = t4, t4.recognizeWith(this)), this;
      }, dropRecognizeWith: function(t4) {
        return p2(t4, "dropRecognizeWith", this) || (t4 = xt2(t4, this), delete this.simultaneous[t4.id]), this;
      }, requireFailure: function(t4) {
        if (p2(t4, "requireFailure", this)) return this;
        var e5 = this.requireFail;
        return -1 === P2(e5, t4 = xt2(t4, this)) && (e5.push(t4), t4.requireFailure(this)), this;
      }, dropRequireFailure: function(t4) {
        if (p2(t4, "dropRequireFailure", this)) return this;
        t4 = xt2(t4, this);
        var e5 = P2(this.requireFail, t4);
        return e5 > -1 && this.requireFail.splice(e5, 1), this;
      }, hasRequireFailures: function() {
        return this.requireFail.length > 0;
      }, canRecognizeWith: function(t4) {
        return !!this.simultaneous[t4.id];
      }, emit: function(t4) {
        var e5 = this, i5 = this.state;
        function n4(i6) {
          e5.manager.emit(i6, t4);
        }
        i5 < 8 && n4(e5.options.event + Pt2(i5)), n4(e5.options.event), t4.additionalEvent && n4(t4.additionalEvent), i5 >= 8 && n4(e5.options.event + Pt2(i5));
      }, tryEmit: function(t4) {
        if (this.canEmit()) return this.emit(t4);
        this.state = bt2;
      }, canEmit: function() {
        for (var t4 = 0; t4 < this.requireFail.length; ) {
          if (!(33 & this.requireFail[t4].state)) return false;
          t4++;
        }
        return true;
      }, recognize: function(t4) {
        var e5 = s3({}, t4);
        if (!y3(this.options.enable, [this, e5])) return this.reset(), void (this.state = bt2);
        56 & this.state && (this.state = 1), this.state = this.process(e5), 30 & this.state && this.tryEmit(e5);
      }, process: function(t4) {
      }, getTouchAction: function() {
      }, reset: function() {
      } }, g2(Dt2, Ct2, { defaults: { pointers: 1 }, attrTest: function(t4) {
        var e5 = this.options.pointers;
        return 0 === e5 || t4.pointers.length === e5;
      }, process: function(t4) {
        var e5 = this.state, i5 = t4.eventType, n4 = 6 & e5, r5 = this.attrTest(t4);
        return n4 && (8 & i5 || !r5) ? 16 | e5 : n4 || r5 ? 4 & i5 ? 8 | e5 : 2 & e5 ? 4 | e5 : 2 : bt2;
      } }), g2(wt2, Dt2, { defaults: { event: "pan", threshold: 10, pointers: 1, direction: 30 }, getTouchAction: function() {
        var t4 = this.options.direction, e5 = [];
        return 6 & t4 && e5.push(It2), t4 & Y2 && e5.push(Et2), e5;
      }, directionTest: function(t4) {
        var e5 = this.options, i5 = true, n4 = t4.distance, r5 = t4.direction, s4 = t4.deltaX, o4 = t4.deltaY;
        return r5 & e5.direction || (6 & e5.direction ? (r5 = 0 === s4 ? 1 : s4 < 0 ? 2 : 4, i5 = s4 != this.pX, n4 = Math.abs(t4.deltaX)) : (r5 = 0 === o4 ? 1 : o4 < 0 ? 8 : 16, i5 = o4 != this.pY, n4 = Math.abs(t4.deltaY))), t4.direction = r5, i5 && n4 > e5.threshold && r5 & e5.direction;
      }, attrTest: function(t4) {
        return Dt2.prototype.attrTest.call(this, t4) && (2 & this.state || !(2 & this.state) && this.directionTest(t4));
      }, emit: function(t4) {
        this.pX = t4.deltaX, this.pY = t4.deltaY;
        var e5 = St2(t4.direction);
        e5 && (t4.additionalEvent = this.options.event + e5), this._super.emit.call(this, t4);
      } }), g2(Ot2, Dt2, { defaults: { event: "pinch", threshold: 0, pointers: 2 }, getTouchAction: function() {
        return [yt2];
      }, attrTest: function(t4) {
        return this._super.attrTest.call(this, t4) && (Math.abs(t4.scale - 1) > this.options.threshold || 2 & this.state);
      }, emit: function(t4) {
        if (1 !== t4.scale) {
          var e5 = t4.scale < 1 ? "in" : "out";
          t4.additionalEvent = this.options.event + e5;
        }
        this._super.emit.call(this, t4);
      } }), g2(Mt2, Ct2, { defaults: { event: "press", pointers: 1, time: 251, threshold: 9 }, getTouchAction: function() {
        return [gt2];
      }, process: function(t4) {
        var e5 = this.options, i5 = t4.pointers.length === e5.pointers, n4 = t4.distance < e5.threshold, r5 = t4.deltaTime > e5.time;
        if (this._input = t4, !n4 || !i5 || 12 & t4.eventType && !r5) this.reset();
        else if (1 & t4.eventType) this.reset(), this._timer = l2(function() {
          this.state = 8, this.tryEmit();
        }, e5.time, this);
        else if (4 & t4.eventType) return 8;
        return bt2;
      }, reset: function() {
        clearTimeout(this._timer);
      }, emit: function(t4) {
        8 === this.state && (t4 && 4 & t4.eventType ? this.manager.emit(this.options.event + "up", t4) : (this._input.timeStamp = c2(), this.manager.emit(this.options.event, this._input)));
      } }), g2(Rt2, Dt2, { defaults: { event: "rotate", threshold: 0, pointers: 2 }, getTouchAction: function() {
        return [yt2];
      }, attrTest: function(t4) {
        return this._super.attrTest.call(this, t4) && (Math.abs(t4.rotation) > this.options.threshold || 2 & this.state);
      } }), g2(zt2, Dt2, { defaults: { event: "swipe", threshold: 10, velocity: 0.3, direction: 30, pointers: 1 }, getTouchAction: function() {
        return wt2.prototype.getTouchAction.call(this);
      }, attrTest: function(t4) {
        var e5, i5 = this.options.direction;
        return 30 & i5 ? e5 = t4.overallVelocity : 6 & i5 ? e5 = t4.overallVelocityX : i5 & Y2 && (e5 = t4.overallVelocityY), this._super.attrTest.call(this, t4) && i5 & t4.offsetDirection && t4.distance > this.options.threshold && t4.maxPointers == this.options.pointers && u2(e5) > this.options.velocity && 4 & t4.eventType;
      }, emit: function(t4) {
        var e5 = St2(t4.offsetDirection);
        e5 && this.manager.emit(this.options.event + e5, t4), this.manager.emit(this.options.event, t4);
      } }), g2(Nt2, Ct2, { defaults: { event: "tap", pointers: 1, taps: 1, interval: 300, time: 250, threshold: 9, posThreshold: 10 }, getTouchAction: function() {
        return [Tt2];
      }, process: function(t4) {
        var e5 = this.options, i5 = t4.pointers.length === e5.pointers, n4 = t4.distance < e5.threshold, r5 = t4.deltaTime < e5.time;
        if (this.reset(), 1 & t4.eventType && 0 === this.count) return this.failTimeout();
        if (n4 && r5 && i5) {
          if (4 != t4.eventType) return this.failTimeout();
          var s4 = !this.pTime || t4.timeStamp - this.pTime < e5.interval, o4 = !this.pCenter || V3(this.pCenter, t4.center) < e5.posThreshold;
          if (this.pTime = t4.timeStamp, this.pCenter = t4.center, o4 && s4 ? this.count += 1 : this.count = 1, this._input = t4, 0 == this.count % e5.taps) return this.hasRequireFailures() ? (this._timer = l2(function() {
            this.state = 8, this.tryEmit();
          }, e5.interval, this), 2) : 8;
        }
        return bt2;
      }, failTimeout: function() {
        return this._timer = l2(function() {
          this.state = bt2;
        }, this.options.interval, this), bt2;
      }, reset: function() {
        clearTimeout(this._timer);
      }, emit: function() {
        8 == this.state && (this._input.tapCount = this.count, this.manager.emit(this.options.event, this._input));
      } }), Xt2.VERSION = "2.0.7", Xt2.defaults = { domEvents: false, touchAction: mt2, enable: true, inputTarget: null, inputClass: null, preset: [[Rt2, { enable: false }], [Ot2, { enable: false }, ["rotate"]], [zt2, { direction: 6 }], [wt2, { direction: 6 }, ["swipe"]], [Nt2], [Nt2, { event: "doubletap", taps: 2 }, ["tap"]], [Mt2]], cssProps: { userSelect: "none", touchSelect: "none", touchCallout: "none", contentZooming: "none", userDrag: "none", tapHighlightColor: "rgba(0,0,0,0)" } }, Yt2.prototype = { set: function(t4) {
        return s3(this.options, t4), t4.touchAction && this.touchAction.update(), t4.inputTarget && (this.input.destroy(), this.input.target = t4.inputTarget, this.input.init()), this;
      }, stop: function(t4) {
        this.session.stopped = t4 ? 2 : 1;
      }, recognize: function(t4) {
        var e5 = this.session;
        if (!e5.stopped) {
          var i5;
          this.touchAction.preventDefaults(t4);
          var n4 = this.recognizers, r5 = e5.curRecognizer;
          (!r5 || r5 && 8 & r5.state) && (r5 = e5.curRecognizer = null);
          for (var s4 = 0; s4 < n4.length; ) i5 = n4[s4], 2 === e5.stopped || r5 && i5 != r5 && !i5.canRecognizeWith(r5) ? i5.reset() : i5.recognize(t4), !r5 && 14 & i5.state && (r5 = e5.curRecognizer = i5), s4++;
        }
      }, get: function(t4) {
        if (t4 instanceof Ct2) return t4;
        for (var e5 = this.recognizers, i5 = 0; i5 < e5.length; i5++) if (e5[i5].options.event == t4) return e5[i5];
        return null;
      }, add: function(t4) {
        if (p2(t4, "add", this)) return this;
        var e5 = this.get(t4.options.event);
        return e5 && this.remove(e5), this.recognizers.push(t4), t4.manager = this, this.touchAction.update(), t4;
      }, remove: function(t4) {
        if (p2(t4, "remove", this)) return this;
        if (t4 = this.get(t4)) {
          var e5 = this.recognizers, i5 = P2(e5, t4);
          -1 !== i5 && (e5.splice(i5, 1), this.touchAction.update());
        }
        return this;
      }, on: function(t4, e5) {
        if (t4 !== r4 && e5 !== r4) {
          var i5 = this.handlers;
          return f2(C3(t4), function(t5) {
            i5[t5] = i5[t5] || [], i5[t5].push(e5);
          }), this;
        }
      }, off: function(t4, e5) {
        if (t4 !== r4) {
          var i5 = this.handlers;
          return f2(C3(t4), function(t5) {
            e5 ? i5[t5] && i5[t5].splice(P2(i5[t5], e5), 1) : delete i5[t5];
          }), this;
        }
      }, emit: function(t4, e5) {
        this.options.domEvents && function(t5, e6) {
          var n5 = i4.createEvent("Event");
          n5.initEvent(t5, true, true), n5.gesture = e6, e6.target.dispatchEvent(n5);
        }(t4, e5);
        var n4 = this.handlers[t4] && this.handlers[t4].slice();
        if (n4 && n4.length) {
          e5.type = t4, e5.preventDefault = function() {
            e5.srcEvent.preventDefault();
          };
          for (var r5 = 0; r5 < n4.length; ) n4[r5](e5), r5++;
        }
      }, destroy: function() {
        this.element && Ft2(this, false), this.handlers = {}, this.session = {}, this.input.destroy(), this.element = null;
      } }, s3(Xt2, { INPUT_START: 1, INPUT_MOVE: 2, INPUT_END: 4, INPUT_CANCEL: 8, STATE_POSSIBLE: 1, STATE_BEGAN: 2, STATE_CHANGED: 4, STATE_ENDED: 8, STATE_RECOGNIZED: 8, STATE_CANCELLED: 16, STATE_FAILED: bt2, DIRECTION_NONE: 1, DIRECTION_LEFT: 2, DIRECTION_RIGHT: 4, DIRECTION_UP: 8, DIRECTION_DOWN: 16, DIRECTION_HORIZONTAL: 6, DIRECTION_VERTICAL: Y2, DIRECTION_ALL: 30, Manager: Yt2, Input: q2, TouchAction: At2, TouchInput: ht2, MouseInput: J2, PointerEventInput: it2, TouchMouseInput: ct2, SingleTouchInput: rt2, Recognizer: Ct2, AttrRecognizer: Dt2, Tap: Nt2, Pan: wt2, Swipe: zt2, Pinch: Ot2, Rotate: Rt2, Press: Mt2, on: I3, off: _2, each: f2, merge: m2, extend: d2, assign: s3, inherit: g2, bindFn: T3, prefixed: D2 }), (void 0 !== t3 ? t3 : "undefined" != typeof self ? self : {}).Hammer = Xt2, e.exports ? e.exports = Xt2 : t3.Hammer = Xt2;
    }(window, document);
    n = t(i.exports);
    r = Object.freeze({ __proto__: null, default: n });
  }
});

// src/vendor/embedpdf/pdfium-worker-engine-26d56d7d.js
var pdfium_worker_engine_26d56d7d_exports = {};
__export(pdfium_worker_engine_26d56d7d_exports, {
  createPdfiumEngine: () => s
});
function s(e5, t3) {
  const n3 = new Worker(URL.createObjectURL(new Blob(['var e,t=(e=import.meta.url,async function(t={}){var n,r,o,i=t,a=new Promise(((e,t)=>{r=e,o=t}));["_EPDF_RenderAnnotBitmap","_EPDFAnnot_GenerateAppearance","_EPDFAnnot_GetBorderDashPattern","_EPDFAnnot_GetBorderDashPatternCount","_EPDFAnnot_GetBorderEffect","_EPDFAnnot_GetBorderStyle","_EPDFAnnot_GetColor","_EPDFAnnot_GetRectangleDifferences","_EPDFAnnot_SetBorderStyle","_EPDFAnnot_SetColor","_FORM_CanRedo","_FORM_CanUndo","_FORM_DoDocumentAAction","_FORM_DoDocumentJSAction","_FORM_DoDocumentOpenAction","_FORM_DoPageAAction","_FORM_ForceToKillFocus","_FORM_GetFocusedAnnot","_FORM_GetFocusedText","_FORM_GetSelectedText","_FORM_IsIndexSelected","_FORM_OnAfterLoadPage","_FORM_OnBeforeClosePage","_FORM_OnChar","_FORM_OnFocus","_FORM_OnKeyDown","_FORM_OnKeyUp","_FORM_OnLButtonDoubleClick","_FORM_OnLButtonDown","_FORM_OnLButtonUp","_FORM_OnMouseMove","_FORM_OnMouseWheel","_FORM_OnRButtonDown","_FORM_OnRButtonUp","_FORM_Redo","_FORM_ReplaceAndKeepSelection","_FORM_ReplaceSelection","_FORM_SelectAllText","_FORM_SetFocusedAnnot","_FORM_SetIndexSelected","_FORM_Undo","_FPDF_AddInstalledFont","_FPDF_CloseDocument","_FPDF_ClosePage","_FPDF_CloseXObject","_FPDF_CopyViewerPreferences","_FPDF_CountNamedDests","_FPDF_CreateClipPath","_FPDF_CreateNewDocument","_FPDF_DestroyClipPath","_FPDF_DestroyLibrary","_FPDF_DeviceToPage","_FPDF_DocumentHasValidCrossReferenceTable","_FPDF_FFLDraw","_FPDF_FreeDefaultSystemFontInfo","_FPDF_GetDefaultSystemFontInfo","_FPDF_GetDefaultTTFMap","_FPDF_GetDefaultTTFMapCount","_FPDF_GetDefaultTTFMapEntry","_FPDF_GetDocPermissions","_FPDF_GetDocUserPermissions","_FPDF_GetFileIdentifier","_FPDF_GetFileVersion","_FPDF_GetFormType","_FPDF_GetLastError","_FPDF_GetMetaText","_FPDF_GetNamedDest","_FPDF_GetNamedDestByName","_FPDF_GetPageAAction","_FPDF_GetPageBoundingBox","_FPDF_GetPageCount","_FPDF_GetPageHeight","_FPDF_GetPageHeightF","_FPDF_GetPageLabel","_FPDF_GetPageSizeByIndex","_FPDF_GetPageSizeByIndexF","_FPDF_GetPageWidth","_FPDF_GetPageWidthF","_FPDF_GetSecurityHandlerRevision","_FPDF_GetSignatureCount","_FPDF_GetSignatureObject","_FPDF_GetTrailerEnds","_FPDF_GetXFAPacketContent","_FPDF_GetXFAPacketCount","_FPDF_GetXFAPacketName","_FPDF_ImportNPagesToOne","_FPDF_ImportPages","_FPDF_ImportPagesByIndex","_FPDF_InitLibrary","_FPDF_InitLibraryWithConfig","_FPDF_LoadCustomDocument","_FPDF_LoadDocument","_FPDF_LoadMemDocument","_FPDF_LoadMemDocument64","_FPDF_LoadPage","_FPDF_LoadXFA","_FPDF_MovePages","_FPDF_NewFormObjectFromXObject","_FPDF_NewXObjectFromPage","_FPDF_PageToDevice","_FPDF_RemoveFormFieldHighlight","_FPDF_RenderPage_Close","_FPDF_RenderPage_Continue","_FPDF_RenderPageBitmap","_FPDF_RenderPageBitmap_Start","_FPDF_RenderPageBitmapWithColorScheme_Start","_FPDF_RenderPageBitmapWithMatrix","_FPDF_SaveAsCopy","_FPDF_SaveWithVersion","_FPDF_SetFormFieldHighlightAlpha","_FPDF_SetFormFieldHighlightColor","_FPDF_SetSandBoxPolicy","_FPDF_SetSystemFontInfo","_FPDF_StructElement_Attr_CountChildren","_FPDF_StructElement_Attr_GetBlobValue","_FPDF_StructElement_Attr_GetBooleanValue","_FPDF_StructElement_Attr_GetChildAtIndex","_FPDF_StructElement_Attr_GetCount","_FPDF_StructElement_Attr_GetName","_FPDF_StructElement_Attr_GetNumberValue","_FPDF_StructElement_Attr_GetStringValue","_FPDF_StructElement_Attr_GetType","_FPDF_StructElement_Attr_GetValue","_FPDF_StructElement_CountChildren","_FPDF_StructElement_GetActualText","_FPDF_StructElement_GetAltText","_FPDF_StructElement_GetAttributeAtIndex","_FPDF_StructElement_GetAttributeCount","_FPDF_StructElement_GetChildAtIndex","_FPDF_StructElement_GetChildMarkedContentID","_FPDF_StructElement_GetID","_FPDF_StructElement_GetLang","_FPDF_StructElement_GetMarkedContentID","_FPDF_StructElement_GetMarkedContentIdAtIndex","_FPDF_StructElement_GetMarkedContentIdCount","_FPDF_StructElement_GetObjType","_FPDF_StructElement_GetParent","_FPDF_StructElement_GetStringAttribute","_FPDF_StructElement_GetTitle","_FPDF_StructElement_GetType","_FPDF_StructTree_Close","_FPDF_StructTree_CountChildren","_FPDF_StructTree_GetChildAtIndex","_FPDF_StructTree_GetForPage","_FPDF_VIEWERREF_GetDuplex","_FPDF_VIEWERREF_GetName","_FPDF_VIEWERREF_GetNumCopies","_FPDF_VIEWERREF_GetPrintPageRange","_FPDF_VIEWERREF_GetPrintPageRangeCount","_FPDF_VIEWERREF_GetPrintPageRangeElement","_FPDF_VIEWERREF_GetPrintScaling","_FPDFAction_GetDest","_FPDFAction_GetFilePath","_FPDFAction_GetType","_FPDFAction_GetURIPath","_FPDFAnnot_AddFileAttachment","_FPDFAnnot_AddInkStroke","_FPDFAnnot_AppendAttachmentPoints","_FPDFAnnot_AppendObject","_FPDFAnnot_CountAttachmentPoints","_FPDFAnnot_GetAP","_FPDFAnnot_GetAttachmentPoints","_FPDFAnnot_GetBorder","_FPDFAnnot_GetColor","_FPDFAnnot_GetFileAttachment","_FPDFAnnot_GetFlags","_FPDFAnnot_GetFocusableSubtypes","_FPDFAnnot_GetFocusableSubtypesCount","_FPDFAnnot_GetFontColor","_FPDFAnnot_GetFontSize","_FPDFAnnot_GetFormAdditionalActionJavaScript","_FPDFAnnot_GetFormControlCount","_FPDFAnnot_GetFormControlIndex","_FPDFAnnot_GetFormFieldAlternateName","_FPDFAnnot_GetFormFieldAtPoint","_FPDFAnnot_GetFormFieldExportValue","_FPDFAnnot_GetFormFieldFlags","_FPDFAnnot_GetFormFieldName","_FPDFAnnot_GetFormFieldType","_FPDFAnnot_GetFormFieldValue","_FPDFAnnot_GetInkListCount","_FPDFAnnot_GetInkListPath","_FPDFAnnot_GetLine","_FPDFAnnot_GetLink","_FPDFAnnot_GetLinkedAnnot","_FPDFAnnot_GetNumberValue","_FPDFAnnot_GetObject","_FPDFAnnot_GetObjectCount","_FPDFAnnot_GetOptionCount","_FPDFAnnot_GetOptionLabel","_FPDFAnnot_GetRect","_FPDFAnnot_GetStringValue","_FPDFAnnot_GetSubtype","_FPDFAnnot_GetValueType","_FPDFAnnot_GetVertices","_FPDFAnnot_HasAttachmentPoints","_FPDFAnnot_HasKey","_FPDFAnnot_IsChecked","_FPDFAnnot_IsObjectSupportedSubtype","_FPDFAnnot_IsOptionSelected","_FPDFAnnot_IsSupportedSubtype","_FPDFAnnot_RemoveInkList","_FPDFAnnot_RemoveObject","_FPDFAnnot_SetAP","_FPDFAnnot_SetAttachmentPoints","_FPDFAnnot_SetBorder","_FPDFAnnot_SetColor","_FPDFAnnot_SetFlags","_FPDFAnnot_SetFocusableSubtypes","_FPDFAnnot_SetFontColor","_FPDFAnnot_SetFormFieldFlags","_FPDFAnnot_SetRect","_FPDFAnnot_SetStringValue","_FPDFAnnot_SetURI","_FPDFAnnot_UpdateObject","_FPDFAttachment_GetFile","_FPDFAttachment_GetName","_FPDFAttachment_GetStringValue","_FPDFAttachment_GetSubtype","_FPDFAttachment_GetValueType","_FPDFAttachment_HasKey","_FPDFAttachment_SetFile","_FPDFAttachment_SetStringValue","_FPDFAvail_Create","_FPDFAvail_Destroy","_FPDFAvail_GetDocument","_FPDFAvail_GetFirstPageNum","_FPDFAvail_IsDocAvail","_FPDFAvail_IsFormAvail","_FPDFAvail_IsLinearized","_FPDFAvail_IsPageAvail","_FPDFBitmap_Create","_FPDFBitmap_CreateEx","_FPDFBitmap_Destroy","_FPDFBitmap_FillRect","_FPDFBitmap_GetBuffer","_FPDFBitmap_GetFormat","_FPDFBitmap_GetHeight","_FPDFBitmap_GetStride","_FPDFBitmap_GetWidth","_FPDFBookmark_Find","_FPDFBookmark_GetAction","_FPDFBookmark_GetCount","_FPDFBookmark_GetDest","_FPDFBookmark_GetFirstChild","_FPDFBookmark_GetNextSibling","_FPDFBookmark_GetTitle","_FPDFCatalog_IsTagged","_FPDFCatalog_SetLanguage","_FPDFClipPath_CountPaths","_FPDFClipPath_CountPathSegments","_FPDFClipPath_GetPathSegment","_FPDFDest_GetDestPageIndex","_FPDFDest_GetLocationInPage","_FPDFDest_GetView","_FPDFDoc_AddAttachment","_FPDFDoc_CloseJavaScriptAction","_FPDFDoc_DeleteAttachment","_FPDFDOC_ExitFormFillEnvironment","_FPDFDoc_GetAttachment","_FPDFDoc_GetAttachmentCount","_FPDFDoc_GetJavaScriptAction","_FPDFDoc_GetJavaScriptActionCount","_FPDFDoc_GetPageMode","_FPDFDOC_InitFormFillEnvironment","_FPDFFont_Close","_FPDFFont_GetAscent","_FPDFFont_GetBaseFontName","_FPDFFont_GetDescent","_FPDFFont_GetFamilyName","_FPDFFont_GetFlags","_FPDFFont_GetFontData","_FPDFFont_GetGlyphPath","_FPDFFont_GetGlyphWidth","_FPDFFont_GetIsEmbedded","_FPDFFont_GetItalicAngle","_FPDFFont_GetWeight","_FPDFFormObj_CountObjects","_FPDFFormObj_GetObject","_FPDFFormObj_RemoveObject","_FPDFGlyphPath_CountGlyphSegments","_FPDFGlyphPath_GetGlyphPathSegment","_FPDFImageObj_GetBitmap","_FPDFImageObj_GetIccProfileDataDecoded","_FPDFImageObj_GetImageDataDecoded","_FPDFImageObj_GetImageDataRaw","_FPDFImageObj_GetImageFilter","_FPDFImageObj_GetImageFilterCount","_FPDFImageObj_GetImageMetadata","_FPDFImageObj_GetImagePixelSize","_FPDFImageObj_GetRenderedBitmap","_FPDFImageObj_LoadJpegFile","_FPDFImageObj_LoadJpegFileInline","_FPDFImageObj_SetBitmap","_FPDFImageObj_SetMatrix","_FPDFJavaScriptAction_GetName","_FPDFJavaScriptAction_GetScript","_FPDFLink_CloseWebLinks","_FPDFLink_CountQuadPoints","_FPDFLink_CountRects","_FPDFLink_CountWebLinks","_FPDFLink_Enumerate","_FPDFLink_GetAction","_FPDFLink_GetAnnot","_FPDFLink_GetAnnotRect","_FPDFLink_GetDest","_FPDFLink_GetLinkAtPoint","_FPDFLink_GetLinkZOrderAtPoint","_FPDFLink_GetQuadPoints","_FPDFLink_GetRect","_FPDFLink_GetTextRange","_FPDFLink_GetURL","_FPDFLink_LoadWebLinks","_FPDFPage_CloseAnnot","_FPDFPage_CountObjects","_FPDFPage_CreateAnnot","_FPDFPage_Delete","_FPDFPage_Flatten","_FPDFPage_FormFieldZOrderAtPoint","_FPDFPage_GenerateContent","_FPDFPage_GetAnnot","_FPDFPage_GetAnnotCount","_FPDFPage_GetAnnotIndex","_FPDFPage_GetArtBox","_FPDFPage_GetBleedBox","_FPDFPage_GetCropBox","_FPDFPage_GetDecodedThumbnailData","_FPDFPage_GetMediaBox","_FPDFPage_GetObject","_FPDFPage_GetRawThumbnailData","_FPDFPage_GetRotation","_FPDFPage_GetThumbnailAsBitmap","_FPDFPage_GetTrimBox","_FPDFPage_HasFormFieldAtPoint","_FPDFPage_HasTransparency","_FPDFPage_InsertClipPath","_FPDFPage_InsertObject","_FPDFPage_InsertObjectAtIndex","_FPDFPage_New","_FPDFPage_RemoveAnnot","_FPDFPage_RemoveObject","_FPDFPage_SetArtBox","_FPDFPage_SetBleedBox","_FPDFPage_SetCropBox","_FPDFPage_SetMediaBox","_FPDFPage_SetRotation","_FPDFPage_SetTrimBox","_FPDFPage_TransformAnnots","_FPDFPage_TransFormWithClip","_FPDFPageObj_AddMark","_FPDFPageObj_CountMarks","_FPDFPageObj_CreateNewPath","_FPDFPageObj_CreateNewRect","_FPDFPageObj_CreateTextObj","_FPDFPageObj_Destroy","_FPDFPageObj_GetBounds","_FPDFPageObj_GetClipPath","_FPDFPageObj_GetDashArray","_FPDFPageObj_GetDashCount","_FPDFPageObj_GetDashPhase","_FPDFPageObj_GetFillColor","_FPDFPageObj_GetIsActive","_FPDFPageObj_GetLineCap","_FPDFPageObj_GetLineJoin","_FPDFPageObj_GetMark","_FPDFPageObj_GetMarkedContentID","_FPDFPageObj_GetMatrix","_FPDFPageObj_GetRotatedBounds","_FPDFPageObj_GetStrokeColor","_FPDFPageObj_GetStrokeWidth","_FPDFPageObj_GetType","_FPDFPageObj_HasTransparency","_FPDFPageObj_NewImageObj","_FPDFPageObj_NewTextObj","_FPDFPageObj_RemoveMark","_FPDFPageObj_SetBlendMode","_FPDFPageObj_SetDashArray","_FPDFPageObj_SetDashPhase","_FPDFPageObj_SetFillColor","_FPDFPageObj_SetIsActive","_FPDFPageObj_SetLineCap","_FPDFPageObj_SetLineJoin","_FPDFPageObj_SetMatrix","_FPDFPageObj_SetStrokeColor","_FPDFPageObj_SetStrokeWidth","_FPDFPageObj_Transform","_FPDFPageObj_TransformClipPath","_FPDFPageObj_TransformF","_FPDFPageObjMark_CountParams","_FPDFPageObjMark_GetName","_FPDFPageObjMark_GetParamBlobValue","_FPDFPageObjMark_GetParamIntValue","_FPDFPageObjMark_GetParamKey","_FPDFPageObjMark_GetParamStringValue","_FPDFPageObjMark_GetParamValueType","_FPDFPageObjMark_RemoveParam","_FPDFPageObjMark_SetBlobParam","_FPDFPageObjMark_SetIntParam","_FPDFPageObjMark_SetStringParam","_FPDFPath_BezierTo","_FPDFPath_Close","_FPDFPath_CountSegments","_FPDFPath_GetDrawMode","_FPDFPath_GetPathSegment","_FPDFPath_LineTo","_FPDFPath_MoveTo","_FPDFPath_SetDrawMode","_FPDFPathSegment_GetClose","_FPDFPathSegment_GetPoint","_FPDFPathSegment_GetType","_FPDFSignatureObj_GetByteRange","_FPDFSignatureObj_GetContents","_FPDFSignatureObj_GetDocMDPPermission","_FPDFSignatureObj_GetReason","_FPDFSignatureObj_GetSubFilter","_FPDFSignatureObj_GetTime","_FPDFText_ClosePage","_FPDFText_CountChars","_FPDFText_CountRects","_FPDFText_FindClose","_FPDFText_FindNext","_FPDFText_FindPrev","_FPDFText_FindStart","_FPDFText_GetBoundedText","_FPDFText_GetCharAngle","_FPDFText_GetCharBox","_FPDFText_GetCharIndexAtPos","_FPDFText_GetCharIndexFromTextIndex","_FPDFText_GetCharOrigin","_FPDFText_GetFillColor","_FPDFText_GetFontInfo","_FPDFText_GetFontSize","_FPDFText_GetFontWeight","_FPDFText_GetLooseCharBox","_FPDFText_GetMatrix","_FPDFText_GetRect","_FPDFText_GetSchCount","_FPDFText_GetSchResultIndex","_FPDFText_GetStrokeColor","_FPDFText_GetText","_FPDFText_GetTextIndexFromCharIndex","_FPDFText_GetTextObject","_FPDFText_GetUnicode","_FPDFText_HasUnicodeMapError","_FPDFText_IsGenerated","_FPDFText_IsHyphen","_FPDFText_LoadCidType2Font","_FPDFText_LoadFont","_FPDFText_LoadPage","_FPDFText_LoadStandardFont","_FPDFText_SetCharcodes","_FPDFText_SetText","_FPDFTextObj_GetFont","_FPDFTextObj_GetFontSize","_FPDFTextObj_GetRenderedBitmap","_FPDFTextObj_GetText","_FPDFTextObj_GetTextRenderMode","_FPDFTextObj_SetTextRenderMode","_PDFiumExt_CloseFileWriter","_PDFiumExt_CloseFormFillInfo","_PDFiumExt_ExitFormFillEnvironment","_PDFiumExt_GetFileWriterData","_PDFiumExt_GetFileWriterSize","_PDFiumExt_Init","_PDFiumExt_InitFormFillEnvironment","_PDFiumExt_OpenFileWriter","_PDFiumExt_OpenFormFillInfo","_PDFiumExt_SaveAsCopy","_malloc","_free","_memory","___indirect_function_table","onRuntimeInitialized"].forEach((e=>{Object.getOwnPropertyDescriptor(a,e)||Object.defineProperty(a,e,{get:()=>q("You are getting "+e+" on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js"),set:()=>q("You are setting "+e+" on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js")})}));var s="object"==typeof window,u="function"==typeof importScripts,F="object"==typeof process&&"object"==typeof process.versions&&"string"==typeof process.versions.node&&"renderer"!=process.type,m=!s&&!F&&!u;if(F){const{createRequire:e}=await import("module");let t=import.meta.url;t.startsWith("data:")&&(t="/");var l=e(t)}var d,_,P=Object.assign({},i),c="./this.program",g="";if(F){if("undefined"==typeof process||!process.release||"node"!==process.release.name)throw new Error("not compiled for this environment (did you build to HTML and try to run it not on the web, or set ENVIRONMENT to something - like node - and run it someplace else - like on the web?)");var h=process.versions.node,D=h.split(".").slice(0,3);if((D=1e4*D[0]+100*D[1]+1*D[2].split("-")[0])<16e4)throw new Error("This emscripten-generated code requires node v16.0.0 (detected v"+h+")");var b=l("fs"),p=l("path");import.meta.url.startsWith("data:")||(g=p.dirname(l("url").fileURLToPath(import.meta.url))+"/"),_=e=>{e=ne(e)?new URL(e):p.normalize(e);var t=b.readFileSync(e);return I(t.buffer),t},d=(e,t=!0)=>(e=ne(e)?new URL(e):p.normalize(e),new Promise(((n,r)=>{b.readFile(e,t?void 0:"utf8",((e,o)=>{e?r(e):n(t?o.buffer:o)}))}))),!i.thisProgram&&process.argv.length>1&&(c=process.argv[1].replace(/\\\\/g,"/")),process.argv.slice(2)}else if(m){if("object"==typeof process&&"function"==typeof l||"object"==typeof window||"function"==typeof importScripts)throw new Error("not compiled for this environment (did you build to HTML and try to run it not on the web, or set ENVIRONMENT to something - like node - and run it someplace else - like on the web?)");_=e=>{if("function"==typeof readbuffer)return new Uint8Array(readbuffer(e));let t=read(e,"binary");return I("object"==typeof t),t},d=e=>new Promise(((t,n)=>{setTimeout((()=>t(_(e))))})),globalThis.clearTimeout??=e=>{},globalThis.setTimeout??=e=>"function"==typeof e?e():q(),"undefined"!=typeof print&&(globalThis.console??={},console.log=print,console.warn=console.error=globalThis.printErr??print)}else{if(!s&&!u)throw new Error("environment detection error");if(u?g=self.location.href:"undefined"!=typeof document&&document.currentScript&&(g=document.currentScript.src),e&&(g=e),g=g.startsWith("blob:")?"":g.substr(0,g.replace(/[?#].*/,"").lastIndexOf("/")+1),"object"!=typeof window&&"function"!=typeof importScripts)throw new Error("not compiled for this environment (did you build to HTML and try to run it not on the web, or set ENVIRONMENT to something - like node - and run it someplace else - like on the web?)");u&&(_=e=>{var t=new XMLHttpRequest;return t.open("GET",e,!1),t.responseType="arraybuffer",t.send(null),new Uint8Array(t.response)}),d=e=>(I(!ne(e),"readAsync does not work with file:// URLs"),fetch(e,{credentials:"same-origin"}).then((e=>e.ok?e.arrayBuffer():Promise.reject(new Error(e.status+" : "+e.url)))))}var f,A=i.print||console.log.bind(console),E=i.printErr||console.error.bind(console);Object.assign(i,P),P=null,f="fetchSettings",Object.getOwnPropertyDescriptor(i,f)&&q(`\\`Module.${f}\\` was supplied but \\`${f}\\` not included in INCOMING_MODULE_JS_API`),i.arguments&&i.arguments,se("arguments","arguments_"),i.thisProgram&&(c=i.thisProgram),se("thisProgram","thisProgram"),I(void 0===i.memoryInitializerPrefixURL,"Module.memoryInitializerPrefixURL option was removed, use Module.locateFile instead"),I(void 0===i.pthreadMainPrefixURL,"Module.pthreadMainPrefixURL option was removed, use Module.locateFile instead"),I(void 0===i.cdInitializerPrefixURL,"Module.cdInitializerPrefixURL option was removed, use Module.locateFile instead"),I(void 0===i.filePackagePrefixURL,"Module.filePackagePrefixURL option was removed, use Module.locateFile instead"),I(void 0===i.read,"Module.read option was removed"),I(void 0===i.readAsync,"Module.readAsync option was removed (modify readAsync in JS)"),I(void 0===i.readBinary,"Module.readBinary option was removed (modify readBinary in JS)"),I(void 0===i.setWindowTitle,"Module.setWindowTitle option was removed (modify emscripten_set_window_title in JS)"),I(void 0===i.TOTAL_MEMORY,"Module.TOTAL_MEMORY has been renamed Module.INITIAL_MEMORY"),se("asm","wasmExports"),se("readAsync","readAsync"),se("readBinary","readBinary"),se("setWindowTitle","setWindowTitle");var G,S=i.wasmBinary;se("wasmBinary","wasmBinary"),"object"!=typeof WebAssembly&&E("no native wasm support detected");var C,y,T,M,O,v,x,w,R=!1;function I(e,t){e||q("Assertion failed"+(t?": "+t:""))}function k(){var e=G.buffer;i.HEAP8=C=new Int8Array(e),i.HEAP16=T=new Int16Array(e),i.HEAPU8=y=new Uint8Array(e),i.HEAPU16=M=new Uint16Array(e),i.HEAP32=O=new Int32Array(e),i.HEAPU32=v=new Uint32Array(e),i.HEAPF32=x=new Float32Array(e),i.HEAPF64=w=new Float64Array(e)}function j(){if(!R){var e=dt();0==e&&(e+=4);var t=v[e>>2],n=v[e+4>>2];34821223==t&&2310721022==n||q(`Stack overflow! Stack cookie has been overwritten at ${_e(e)}, expected hex dwords 0x89BACDFE and 0x2135467, but received ${_e(n)} ${_e(t)}`),1668509029!=v[0]&&q("Runtime error: The application has corrupted its heap memory area (address zero)!")}}I(!i.STACK_SIZE,"STACK_SIZE can no longer be set at runtime.  Use -sSTACK_SIZE at link time"),I("undefined"!=typeof Int32Array&&"undefined"!=typeof Float64Array&&null!=Int32Array.prototype.subarray&&null!=Int32Array.prototype.set,"JS engine does not provide full typed array support"),I(!i.wasmMemory,"Use of `wasmMemory` detected.  Use -sIMPORTED_MEMORY to define wasmMemory externally"),I(!i.INITIAL_MEMORY,"Detected runtime INITIAL_MEMORY setting.  Use -sIMPORTED_MEMORY to define wasmMemory dynamically");var L=[],B=[],N=[],U=!1;function V(e){L.unshift(e)}function z(e){N.unshift(e)}I(Math.imul,"This browser does not support Math.imul(), build with LEGACY_VM_SUPPORT or POLYFILL_OLD_MATH_FUNCTIONS to add in a polyfill"),I(Math.fround,"This browser does not support Math.fround(), build with LEGACY_VM_SUPPORT or POLYFILL_OLD_MATH_FUNCTIONS to add in a polyfill"),I(Math.clz32,"This browser does not support Math.clz32(), build with LEGACY_VM_SUPPORT or POLYFILL_OLD_MATH_FUNCTIONS to add in a polyfill"),I(Math.trunc,"This browser does not support Math.trunc(), build with LEGACY_VM_SUPPORT or POLYFILL_OLD_MATH_FUNCTIONS to add in a polyfill");var W=0,H=null,$=null,X={};function K(e){for(var t=e;;){if(!X[e])return e;e=t+Math.random()}}function Y(e){W++,i.monitorRunDependencies?.(W),e?(I(!X[e]),X[e]=1,null===H&&"undefined"!=typeof setInterval&&(H=setInterval((()=>{if(R)return clearInterval(H),void(H=null);var e=!1;for(var t in X)e||(e=!0,E("still waiting on run dependencies:")),E(`dependency: ${t}`);e&&E("(end of list)")}),1e4))):E("warning: run dependency added without ID")}function J(e){if(W--,i.monitorRunDependencies?.(W),e?(I(X[e]),delete X[e]):E("warning: run dependency removed without ID"),0==W&&(null!==H&&(clearInterval(H),H=null),$)){var t=$;$=null,t()}}function q(e){i.onAbort?.(e),E(e="Aborted("+e+")"),R=!0;var t=new WebAssembly.RuntimeError(e);throw o(t),t}var Q,Z,ee,te=e=>e.startsWith("data:application/octet-stream;base64,"),ne=e=>e.startsWith("file://");function re(e,t){return(...n)=>{I(U,`native function \\`${e}\\` called before runtime initialization`);var r=ot[e];return I(r,`exported native function \\`${e}\\` not found`),I(n.length<=t,`native function \\`${e}\\` called with ${n.length} args but expects ${t}`),r(...n)}}function oe(){if(i.locateFile){var e="pdfium.wasm";return te(e)?e:(t=e,i.locateFile?i.locateFile(t,g):g+t)}var t;return m?"pdfium.wasm":"pdfium.wasm"}function ie(e){if(e==Q&&S)return new Uint8Array(S);if(_)return _(e);throw"both async and sync fetching of the wasm failed"}function ae(e,t,n){return function(e){return S?Promise.resolve().then((()=>ie(e))):d(e).then((e=>new Uint8Array(e)),(()=>ie(e)))}(e).then((e=>WebAssembly.instantiate(e,t))).then(n,(e=>{E(`failed to asynchronously prepare wasm: ${e}`),ne(Q)&&E(`warning: Loading from a file URI (${Q}) is not supported in most browsers. See https://emscripten.org/docs/getting_started/FAQ.html#how-do-i-run-a-local-webserver-for-testing-why-does-my-program-stall-in-downloading-or-preparing`),q(e)}))}if((()=>{var e=new Int16Array(1),t=new Int8Array(e.buffer);if(e[0]=25459,115!==t[0]||99!==t[1])throw"Runtime error: expected the system to be little-endian! (Run with -sSUPPORT_BIG_ENDIAN to bypass)"})(),i.ENVIRONMENT)throw new Error("Module.ENVIRONMENT has been deprecated. To force the environment, use the ENVIRONMENT compile-time option (for example, -sENVIRONMENT=web or -sENVIRONMENT=node)");function se(e,t,n=!0){Object.getOwnPropertyDescriptor(i,e)||Object.defineProperty(i,e,{configurable:!0,get(){q(`\\`Module.${e}\\` has been replaced by \\`${t}\\``+(n?" (the initial value can be provided on Module, but after startup the value is only looked for on a local variable of that name)":""))}})}function ue(e){return"FS_createPath"===e||"FS_createDataFile"===e||"FS_createPreloadedFile"===e||"FS_unlink"===e||"addRunDependency"===e||"FS_createLazyFile"===e||"FS_createDevice"===e||"removeRunDependency"===e}function Fe(e,t){"undefined"==typeof globalThis||Object.getOwnPropertyDescriptor(globalThis,e)||Object.defineProperty(globalThis,e,{configurable:!0,get(){t()}})}function me(e,t){Fe(e,(()=>{ge(`\\`${e}\\` is not longer defined by emscripten. ${t}`)}))}function le(e){Object.getOwnPropertyDescriptor(i,e)||Object.defineProperty(i,e,{configurable:!0,get(){var t=`\'${e}\' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the Emscripten FAQ)`;ue(e)&&(t+=". Alternatively, forcing filesystem support (-sFORCE_FILESYSTEM) can export this for you"),q(t)}})}me("buffer","Please use HEAP8.buffer or wasmMemory.buffer"),me("asm","Please use wasmExports instead");var de=e=>{e.forEach((e=>e(i)))};i.noExitRuntime;var _e=e=>(I("number"==typeof e),"0x"+(e>>>=0).toString(16).padStart(8,"0")),Pe=e=>_t(e),ce=()=>ct(),ge=e=>{ge.shown||={},ge.shown[e]||(ge.shown[e]=1,F&&(e="warning: "+e),E(e))},he="undefined"!=typeof TextDecoder?new TextDecoder:void 0,De=(e,t=0,n=NaN)=>{for(var r=t+n,o=t;e[o]&&!(o>=r);)++o;if(o-t>16&&e.buffer&&he)return he.decode(e.subarray(t,o));for(var i="";t<o;){var a=e[t++];if(128&a){var s=63&e[t++];if(192!=(224&a)){var u=63&e[t++];if(224==(240&a)?a=(15&a)<<12|s<<6|u:(240!=(248&a)&&ge("Invalid UTF-8 leading byte "+_e(a)+" encountered when deserializing a UTF-8 string in wasm memory to a JS string!"),a=(7&a)<<18|s<<12|u<<6|63&e[t++]),a<65536)i+=String.fromCharCode(a);else{var F=a-65536;i+=String.fromCharCode(55296|F>>10,56320|1023&F)}}else i+=String.fromCharCode((31&a)<<6|s)}else i+=String.fromCharCode(a)}return i},be=(e,t)=>(I("number"==typeof e,`UTF8ToString expects a number (got ${typeof e})`),e?De(y,e,t):"");function pe(){I(null!=Be.varargs);var e=O[+Be.varargs>>2];return Be.varargs+=4,e}var fe=pe,Ae={isAbs:e=>"/"===e.charAt(0),splitPath:e=>/^(\\/?|)([\\s\\S]*?)((?:\\.{1,2}|[^\\/]+?|)(\\.[^.\\/]*|))(?:[\\/]*)$/.exec(e).slice(1),normalizeArray:(e,t)=>{for(var n=0,r=e.length-1;r>=0;r--){var o=e[r];"."===o?e.splice(r,1):".."===o?(e.splice(r,1),n++):n&&(e.splice(r,1),n--)}if(t)for(;n;n--)e.unshift("..");return e},normalize:e=>{var t=Ae.isAbs(e),n="/"===e.substr(-1);return(e=Ae.normalizeArray(e.split("/").filter((e=>!!e)),!t).join("/"))||t||(e="."),e&&n&&(e+="/"),(t?"/":"")+e},dirname:e=>{var t=Ae.splitPath(e),n=t[0],r=t[1];return n||r?(r&&(r=r.substr(0,r.length-1)),n+r):"."},basename:e=>{if("/"===e)return"/";var t=(e=(e=Ae.normalize(e)).replace(/\\/$/,"")).lastIndexOf("/");return-1===t?e:e.substr(t+1)},join:(...e)=>Ae.normalize(e.join("/")),join2:(e,t)=>Ae.normalize(e+"/"+t)},Ee=e=>(Ee=(()=>{if("object"==typeof crypto&&"function"==typeof crypto.getRandomValues)return e=>crypto.getRandomValues(e);if(F)try{var e=l("crypto");if(e.randomFillSync)return t=>e.randomFillSync(t);var t=e.randomBytes;return e=>(e.set(t(e.byteLength)),e)}catch(e){}q("no cryptographic support found for randomDevice. consider polyfilling it if you want to use something insecure like Math.random(), e.g. put this in a --pre-js: var crypto = { getRandomValues: (array) => { for (var i = 0; i < array.length; i++) array[i] = (Math.random()*256)|0 } };")})())(e),Ge={resolve:(...e)=>{for(var t="",n=!1,r=e.length-1;r>=-1&&!n;r--){var o=r>=0?e[r]:Le.cwd();if("string"!=typeof o)throw new TypeError("Arguments to path.resolve must be strings");if(!o)return"";t=o+"/"+t,n=Ae.isAbs(o)}return(n?"/":"")+(t=Ae.normalizeArray(t.split("/").filter((e=>!!e)),!n).join("/"))||"."},relative:(e,t)=>{function n(e){for(var t=0;t<e.length&&""===e[t];t++);for(var n=e.length-1;n>=0&&""===e[n];n--);return t>n?[]:e.slice(t,n-t+1)}e=Ge.resolve(e).substr(1),t=Ge.resolve(t).substr(1);for(var r=n(e.split("/")),o=n(t.split("/")),i=Math.min(r.length,o.length),a=i,s=0;s<i;s++)if(r[s]!==o[s]){a=s;break}var u=[];for(s=a;s<r.length;s++)u.push("..");return(u=u.concat(o.slice(a))).join("/")}},Se=[],Ce=e=>{for(var t=0,n=0;n<e.length;++n){var r=e.charCodeAt(n);r<=127?t++:r<=2047?t+=2:r>=55296&&r<=57343?(t+=4,++n):t+=3}return t},ye=(e,t,n,r)=>{if(I("string"==typeof e,`stringToUTF8Array expects a string (got ${typeof e})`),!(r>0))return 0;for(var o=n,i=n+r-1,a=0;a<e.length;++a){var s=e.charCodeAt(a);if(s>=55296&&s<=57343&&(s=65536+((1023&s)<<10)|1023&e.charCodeAt(++a)),s<=127){if(n>=i)break;t[n++]=s}else if(s<=2047){if(n+1>=i)break;t[n++]=192|s>>6,t[n++]=128|63&s}else if(s<=65535){if(n+2>=i)break;t[n++]=224|s>>12,t[n++]=128|s>>6&63,t[n++]=128|63&s}else{if(n+3>=i)break;s>1114111&&ge("Invalid Unicode code point "+_e(s)+" encountered when serializing a JS string to a UTF-8 string in wasm memory! (Valid unicode code points should be in range 0-0x10FFFF)."),t[n++]=240|s>>18,t[n++]=128|s>>12&63,t[n++]=128|s>>6&63,t[n++]=128|63&s}}return t[n]=0,n-o};function Te(e,t,n){var r=n>0?n:Ce(e)+1,o=new Array(r),i=ye(e,o,0,o.length);return t&&(o.length=i),o}var Me,Oe,ve={ttys:[],init(){},shutdown(){},register(e,t){ve.ttys[e]={input:[],output:[],ops:t},Le.registerDevice(e,ve.stream_ops)},stream_ops:{open(e){var t=ve.ttys[e.node.rdev];if(!t)throw new Le.ErrnoError(43);e.tty=t,e.seekable=!1},close(e){e.tty.ops.fsync(e.tty)},fsync(e){e.tty.ops.fsync(e.tty)},read(e,t,n,r,o){if(!e.tty||!e.tty.ops.get_char)throw new Le.ErrnoError(60);for(var i=0,a=0;a<r;a++){var s;try{s=e.tty.ops.get_char(e.tty)}catch(e){throw new Le.ErrnoError(29)}if(void 0===s&&0===i)throw new Le.ErrnoError(6);if(null==s)break;i++,t[n+a]=s}return i&&(e.node.timestamp=Date.now()),i},write(e,t,n,r,o){if(!e.tty||!e.tty.ops.put_char)throw new Le.ErrnoError(60);try{for(var i=0;i<r;i++)e.tty.ops.put_char(e.tty,t[n+i])}catch(e){throw new Le.ErrnoError(29)}return r&&(e.node.timestamp=Date.now()),i}},default_tty_ops:{get_char:e=>(()=>{if(!Se.length){var e=null;if(F){var t=Buffer.alloc(256),n=0,r=process.stdin.fd;try{n=b.readSync(r,t,0,256)}catch(e){if(!e.toString().includes("EOF"))throw e;n=0}n>0&&(e=t.slice(0,n).toString("utf-8"))}else"undefined"!=typeof window&&"function"==typeof window.prompt?null!==(e=window.prompt("Input: "))&&(e+="\\n"):"function"==typeof readline&&(e=readline())&&(e+="\\n");if(!e)return null;Se=Te(e,!0)}return Se.shift()})(),put_char(e,t){null===t||10===t?(A(De(e.output)),e.output=[]):0!=t&&e.output.push(t)},fsync(e){e.output&&e.output.length>0&&(A(De(e.output)),e.output=[])},ioctl_tcgets:e=>({c_iflag:25856,c_oflag:5,c_cflag:191,c_lflag:35387,c_cc:[3,28,127,21,4,0,1,0,17,19,26,0,18,15,23,22,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]}),ioctl_tcsets:(e,t,n)=>0,ioctl_tiocgwinsz:e=>[24,80]},default_tty1_ops:{put_char(e,t){null===t||10===t?(E(De(e.output)),e.output=[]):0!=t&&e.output.push(t)},fsync(e){e.output&&e.output.length>0&&(E(De(e.output)),e.output=[])}}},xe=(e,t)=>(I(t,"alignment argument is required"),Math.ceil(e/t)*t),we=e=>{e=xe(e,65536);var t=ut(65536,e);return t&&((e,t)=>{y.fill(0,e,e+t)})(t,e),t},Re={ops_table:null,mount:e=>Re.createNode(null,"/",16895,0),createNode(e,t,n,r){if(Le.isBlkdev(n)||Le.isFIFO(n))throw new Le.ErrnoError(63);Re.ops_table||={dir:{node:{getattr:Re.node_ops.getattr,setattr:Re.node_ops.setattr,lookup:Re.node_ops.lookup,mknod:Re.node_ops.mknod,rename:Re.node_ops.rename,unlink:Re.node_ops.unlink,rmdir:Re.node_ops.rmdir,readdir:Re.node_ops.readdir,symlink:Re.node_ops.symlink},stream:{llseek:Re.stream_ops.llseek}},file:{node:{getattr:Re.node_ops.getattr,setattr:Re.node_ops.setattr},stream:{llseek:Re.stream_ops.llseek,read:Re.stream_ops.read,write:Re.stream_ops.write,allocate:Re.stream_ops.allocate,mmap:Re.stream_ops.mmap,msync:Re.stream_ops.msync}},link:{node:{getattr:Re.node_ops.getattr,setattr:Re.node_ops.setattr,readlink:Re.node_ops.readlink},stream:{}},chrdev:{node:{getattr:Re.node_ops.getattr,setattr:Re.node_ops.setattr},stream:Le.chrdev_stream_ops}};var o=Le.createNode(e,t,n,r);return Le.isDir(o.mode)?(o.node_ops=Re.ops_table.dir.node,o.stream_ops=Re.ops_table.dir.stream,o.contents={}):Le.isFile(o.mode)?(o.node_ops=Re.ops_table.file.node,o.stream_ops=Re.ops_table.file.stream,o.usedBytes=0,o.contents=null):Le.isLink(o.mode)?(o.node_ops=Re.ops_table.link.node,o.stream_ops=Re.ops_table.link.stream):Le.isChrdev(o.mode)&&(o.node_ops=Re.ops_table.chrdev.node,o.stream_ops=Re.ops_table.chrdev.stream),o.timestamp=Date.now(),e&&(e.contents[t]=o,e.timestamp=o.timestamp),o},getFileDataAsTypedArray:e=>e.contents?e.contents.subarray?e.contents.subarray(0,e.usedBytes):new Uint8Array(e.contents):new Uint8Array(0),expandFileStorage(e,t){var n=e.contents?e.contents.length:0;if(!(n>=t)){t=Math.max(t,n*(n<1048576?2:1.125)>>>0),0!=n&&(t=Math.max(t,256));var r=e.contents;e.contents=new Uint8Array(t),e.usedBytes>0&&e.contents.set(r.subarray(0,e.usedBytes),0)}},resizeFileStorage(e,t){if(e.usedBytes!=t)if(0==t)e.contents=null,e.usedBytes=0;else{var n=e.contents;e.contents=new Uint8Array(t),n&&e.contents.set(n.subarray(0,Math.min(t,e.usedBytes))),e.usedBytes=t}},node_ops:{getattr(e){var t={};return t.dev=Le.isChrdev(e.mode)?e.id:1,t.ino=e.id,t.mode=e.mode,t.nlink=1,t.uid=0,t.gid=0,t.rdev=e.rdev,Le.isDir(e.mode)?t.size=4096:Le.isFile(e.mode)?t.size=e.usedBytes:Le.isLink(e.mode)?t.size=e.link.length:t.size=0,t.atime=new Date(e.timestamp),t.mtime=new Date(e.timestamp),t.ctime=new Date(e.timestamp),t.blksize=4096,t.blocks=Math.ceil(t.size/t.blksize),t},setattr(e,t){void 0!==t.mode&&(e.mode=t.mode),void 0!==t.timestamp&&(e.timestamp=t.timestamp),void 0!==t.size&&Re.resizeFileStorage(e,t.size)},lookup(e,t){throw Le.genericErrors[44]},mknod:(e,t,n,r)=>Re.createNode(e,t,n,r),rename(e,t,n){if(Le.isDir(e.mode)){var r;try{r=Le.lookupNode(t,n)}catch(e){}if(r)for(var o in r.contents)throw new Le.ErrnoError(55)}delete e.parent.contents[e.name],e.parent.timestamp=Date.now(),e.name=n,t.contents[n]=e,t.timestamp=e.parent.timestamp},unlink(e,t){delete e.contents[t],e.timestamp=Date.now()},rmdir(e,t){var n=Le.lookupNode(e,t);for(var r in n.contents)throw new Le.ErrnoError(55);delete e.contents[t],e.timestamp=Date.now()},readdir(e){var t=[".",".."];for(var n of Object.keys(e.contents))t.push(n);return t},symlink(e,t,n){var r=Re.createNode(e,t,41471,0);return r.link=n,r},readlink(e){if(!Le.isLink(e.mode))throw new Le.ErrnoError(28);return e.link}},stream_ops:{read(e,t,n,r,o){var i=e.node.contents;if(o>=e.node.usedBytes)return 0;var a=Math.min(e.node.usedBytes-o,r);if(I(a>=0),a>8&&i.subarray)t.set(i.subarray(o,o+a),n);else for(var s=0;s<a;s++)t[n+s]=i[o+s];return a},write(e,t,n,r,o,i){if(I(!(t instanceof ArrayBuffer)),t.buffer===C.buffer&&(i=!1),!r)return 0;var a=e.node;if(a.timestamp=Date.now(),t.subarray&&(!a.contents||a.contents.subarray)){if(i)return I(0===o,"canOwn must imply no weird position inside the file"),a.contents=t.subarray(n,n+r),a.usedBytes=r,r;if(0===a.usedBytes&&0===o)return a.contents=t.slice(n,n+r),a.usedBytes=r,r;if(o+r<=a.usedBytes)return a.contents.set(t.subarray(n,n+r),o),r}if(Re.expandFileStorage(a,o+r),a.contents.subarray&&t.subarray)a.contents.set(t.subarray(n,n+r),o);else for(var s=0;s<r;s++)a.contents[o+s]=t[n+s];return a.usedBytes=Math.max(a.usedBytes,o+r),r},llseek(e,t,n){var r=t;if(1===n?r+=e.position:2===n&&Le.isFile(e.node.mode)&&(r+=e.node.usedBytes),r<0)throw new Le.ErrnoError(28);return r},allocate(e,t,n){Re.expandFileStorage(e.node,t+n),e.node.usedBytes=Math.max(e.node.usedBytes,t+n)},mmap(e,t,n,r,o){if(!Le.isFile(e.node.mode))throw new Le.ErrnoError(43);var i,a,s=e.node.contents;if(2&o||!s||s.buffer!==C.buffer){if(a=!0,!(i=we(t)))throw new Le.ErrnoError(48);s&&((n>0||n+t<s.length)&&(s=s.subarray?s.subarray(n,n+t):Array.prototype.slice.call(s,n,n+t)),C.set(s,i))}else a=!1,i=s.byteOffset;return{ptr:i,allocated:a}},msync:(e,t,n,r,o)=>(Re.stream_ops.write(e,t,0,r,n,!1),0)}},Ie=i.preloadPlugins||[],ke=(e,t)=>{var n=0;return e&&(n|=365),t&&(n|=146),n},je={EPERM:63,ENOENT:44,ESRCH:71,EINTR:27,EIO:29,ENXIO:60,E2BIG:1,ENOEXEC:45,EBADF:8,ECHILD:12,EAGAIN:6,EWOULDBLOCK:6,ENOMEM:48,EACCES:2,EFAULT:21,ENOTBLK:105,EBUSY:10,EEXIST:20,EXDEV:75,ENODEV:43,ENOTDIR:54,EISDIR:31,EINVAL:28,ENFILE:41,EMFILE:33,ENOTTY:59,ETXTBSY:74,EFBIG:22,ENOSPC:51,ESPIPE:70,EROFS:69,EMLINK:34,EPIPE:64,EDOM:18,ERANGE:68,ENOMSG:49,EIDRM:24,ECHRNG:106,EL2NSYNC:156,EL3HLT:107,EL3RST:108,ELNRNG:109,EUNATCH:110,ENOCSI:111,EL2HLT:112,EDEADLK:16,ENOLCK:46,EBADE:113,EBADR:114,EXFULL:115,ENOANO:104,EBADRQC:103,EBADSLT:102,EDEADLOCK:16,EBFONT:101,ENOSTR:100,ENODATA:116,ETIME:117,ENOSR:118,ENONET:119,ENOPKG:120,EREMOTE:121,ENOLINK:47,EADV:122,ESRMNT:123,ECOMM:124,EPROTO:65,EMULTIHOP:36,EDOTDOT:125,EBADMSG:9,ENOTUNIQ:126,EBADFD:127,EREMCHG:128,ELIBACC:129,ELIBBAD:130,ELIBSCN:131,ELIBMAX:132,ELIBEXEC:133,ENOSYS:52,ENOTEMPTY:55,ENAMETOOLONG:37,ELOOP:32,EOPNOTSUPP:138,EPFNOSUPPORT:139,ECONNRESET:15,ENOBUFS:42,EAFNOSUPPORT:5,EPROTOTYPE:67,ENOTSOCK:57,ENOPROTOOPT:50,ESHUTDOWN:140,ECONNREFUSED:14,EADDRINUSE:3,ECONNABORTED:13,ENETUNREACH:40,ENETDOWN:38,ETIMEDOUT:73,EHOSTDOWN:142,EHOSTUNREACH:23,EINPROGRESS:26,EALREADY:7,EDESTADDRREQ:17,EMSGSIZE:35,EPROTONOSUPPORT:66,ESOCKTNOSUPPORT:137,EADDRNOTAVAIL:4,ENETRESET:39,EISCONN:30,ENOTCONN:53,ETOOMANYREFS:141,EUSERS:136,EDQUOT:19,ESTALE:72,ENOTSUP:138,ENOMEDIUM:148,EILSEQ:25,EOVERFLOW:61,ECANCELED:11,ENOTRECOVERABLE:56,EOWNERDEAD:62,ESTRPIPE:135},Le={root:null,mounts:[],devices:{},streams:[],nextInode:1,nameTable:null,currentPath:"/",initialized:!1,ignorePermissions:!0,ErrnoError:class extends Error{constructor(e){for(var t in super(U?(e=>be(Ft(e)))(e):""),this.name="ErrnoError",this.errno=e,je)if(je[t]===e){this.code=t;break}}},genericErrors:{},filesystems:null,syncFSRequests:0,readFiles:{},FSStream:class{constructor(){this.shared={}}get object(){return this.node}set object(e){this.node=e}get isRead(){return 1!=(2097155&this.flags)}get isWrite(){return!!(2097155&this.flags)}get isAppend(){return 1024&this.flags}get flags(){return this.shared.flags}set flags(e){this.shared.flags=e}get position(){return this.shared.position}set position(e){this.shared.position=e}},FSNode:class{constructor(e,t,n,r){e||(e=this),this.parent=e,this.mount=e.mount,this.mounted=null,this.id=Le.nextInode++,this.name=t,this.mode=n,this.node_ops={},this.stream_ops={},this.rdev=r,this.readMode=365,this.writeMode=146}get read(){return(this.mode&this.readMode)===this.readMode}set read(e){e?this.mode|=this.readMode:this.mode&=~this.readMode}get write(){return(this.mode&this.writeMode)===this.writeMode}set write(e){e?this.mode|=this.writeMode:this.mode&=~this.writeMode}get isFolder(){return Le.isDir(this.mode)}get isDevice(){return Le.isChrdev(this.mode)}},lookupPath(e,t={}){if(!(e=Ge.resolve(e)))return{path:"",node:null};if((t=Object.assign({follow_mount:!0,recurse_count:0},t)).recurse_count>8)throw new Le.ErrnoError(32);for(var n=e.split("/").filter((e=>!!e)),r=Le.root,o="/",i=0;i<n.length;i++){var a=i===n.length-1;if(a&&t.parent)break;if(r=Le.lookupNode(r,n[i]),o=Ae.join2(o,n[i]),Le.isMountpoint(r)&&(!a||a&&t.follow_mount)&&(r=r.mounted.root),!a||t.follow)for(var s=0;Le.isLink(r.mode);){var u=Le.readlink(o);if(o=Ge.resolve(Ae.dirname(o),u),r=Le.lookupPath(o,{recurse_count:t.recurse_count+1}).node,s++>40)throw new Le.ErrnoError(32)}}return{path:o,node:r}},getPath(e){for(var t;;){if(Le.isRoot(e)){var n=e.mount.mountpoint;return t?"/"!==n[n.length-1]?`${n}/${t}`:n+t:n}t=t?`${e.name}/${t}`:e.name,e=e.parent}},hashName(e,t){for(var n=0,r=0;r<t.length;r++)n=(n<<5)-n+t.charCodeAt(r)|0;return(e+n>>>0)%Le.nameTable.length},hashAddNode(e){var t=Le.hashName(e.parent.id,e.name);e.name_next=Le.nameTable[t],Le.nameTable[t]=e},hashRemoveNode(e){var t=Le.hashName(e.parent.id,e.name);if(Le.nameTable[t]===e)Le.nameTable[t]=e.name_next;else for(var n=Le.nameTable[t];n;){if(n.name_next===e){n.name_next=e.name_next;break}n=n.name_next}},lookupNode(e,t){var n=Le.mayLookup(e);if(n)throw new Le.ErrnoError(n);for(var r=Le.hashName(e.id,t),o=Le.nameTable[r];o;o=o.name_next){var i=o.name;if(o.parent.id===e.id&&i===t)return o}return Le.lookup(e,t)},createNode(e,t,n,r){I("object"==typeof e);var o=new Le.FSNode(e,t,n,r);return Le.hashAddNode(o),o},destroyNode(e){Le.hashRemoveNode(e)},isRoot:e=>e===e.parent,isMountpoint:e=>!!e.mounted,isFile:e=>32768==(61440&e),isDir:e=>16384==(61440&e),isLink:e=>40960==(61440&e),isChrdev:e=>8192==(61440&e),isBlkdev:e=>24576==(61440&e),isFIFO:e=>4096==(61440&e),isSocket:e=>!(49152&~e),flagsToPermissionString(e){var t=["r","w","rw"][3&e];return 512&e&&(t+="w"),t},nodePermissions:(e,t)=>Le.ignorePermissions||(!t.includes("r")||292&e.mode)&&(!t.includes("w")||146&e.mode)&&(!t.includes("x")||73&e.mode)?0:2,mayLookup(e){if(!Le.isDir(e.mode))return 54;var t=Le.nodePermissions(e,"x");return t||(e.node_ops.lookup?0:2)},mayCreate(e,t){try{return Le.lookupNode(e,t),20}catch(e){}return Le.nodePermissions(e,"wx")},mayDelete(e,t,n){var r;try{r=Le.lookupNode(e,t)}catch(e){return e.errno}var o=Le.nodePermissions(e,"wx");if(o)return o;if(n){if(!Le.isDir(r.mode))return 54;if(Le.isRoot(r)||Le.getPath(r)===Le.cwd())return 10}else if(Le.isDir(r.mode))return 31;return 0},mayOpen:(e,t)=>e?Le.isLink(e.mode)?32:Le.isDir(e.mode)&&("r"!==Le.flagsToPermissionString(t)||512&t)?31:Le.nodePermissions(e,Le.flagsToPermissionString(t)):44,MAX_OPEN_FDS:4096,nextfd(){for(var e=0;e<=Le.MAX_OPEN_FDS;e++)if(!Le.streams[e])return e;throw new Le.ErrnoError(33)},getStreamChecked(e){var t=Le.getStream(e);if(!t)throw new Le.ErrnoError(8);return t},getStream:e=>Le.streams[e],createStream:(e,t=-1)=>(I(t>=-1),e=Object.assign(new Le.FSStream,e),-1==t&&(t=Le.nextfd()),e.fd=t,Le.streams[t]=e,e),closeStream(e){Le.streams[e]=null},dupStream(e,t=-1){var n=Le.createStream(e,t);return n.stream_ops?.dup?.(n),n},chrdev_stream_ops:{open(e){var t=Le.getDevice(e.node.rdev);e.stream_ops=t.stream_ops,e.stream_ops.open?.(e)},llseek(){throw new Le.ErrnoError(70)}},major:e=>e>>8,minor:e=>255&e,makedev:(e,t)=>e<<8|t,registerDevice(e,t){Le.devices[e]={stream_ops:t}},getDevice:e=>Le.devices[e],getMounts(e){for(var t=[],n=[e];n.length;){var r=n.pop();t.push(r),n.push(...r.mounts)}return t},syncfs(e,t){"function"==typeof e&&(t=e,e=!1),Le.syncFSRequests++,Le.syncFSRequests>1&&E(`warning: ${Le.syncFSRequests} FS.syncfs operations in flight at once, probably just doing extra work`);var n=Le.getMounts(Le.root.mount),r=0;function o(e){return I(Le.syncFSRequests>0),Le.syncFSRequests--,t(e)}function i(e){if(e)return i.errored?void 0:(i.errored=!0,o(e));++r>=n.length&&o(null)}n.forEach((t=>{if(!t.type.syncfs)return i(null);t.type.syncfs(t,e,i)}))},mount(e,t,n){if("string"==typeof e)throw e;var r,o="/"===n,i=!n;if(o&&Le.root)throw new Le.ErrnoError(10);if(!o&&!i){var a=Le.lookupPath(n,{follow_mount:!1});if(n=a.path,r=a.node,Le.isMountpoint(r))throw new Le.ErrnoError(10);if(!Le.isDir(r.mode))throw new Le.ErrnoError(54)}var s={type:e,opts:t,mountpoint:n,mounts:[]},u=e.mount(s);return u.mount=s,s.root=u,o?Le.root=u:r&&(r.mounted=s,r.mount&&r.mount.mounts.push(s)),u},unmount(e){var t=Le.lookupPath(e,{follow_mount:!1});if(!Le.isMountpoint(t.node))throw new Le.ErrnoError(28);var n=t.node,r=n.mounted,o=Le.getMounts(r);Object.keys(Le.nameTable).forEach((e=>{for(var t=Le.nameTable[e];t;){var n=t.name_next;o.includes(t.mount)&&Le.destroyNode(t),t=n}})),n.mounted=null;var i=n.mount.mounts.indexOf(r);I(-1!==i),n.mount.mounts.splice(i,1)},lookup:(e,t)=>e.node_ops.lookup(e,t),mknod(e,t,n){var r=Le.lookupPath(e,{parent:!0}).node,o=Ae.basename(e);if(!o||"."===o||".."===o)throw new Le.ErrnoError(28);var i=Le.mayCreate(r,o);if(i)throw new Le.ErrnoError(i);if(!r.node_ops.mknod)throw new Le.ErrnoError(63);return r.node_ops.mknod(r,o,t,n)},create:(e,t)=>(t=void 0!==t?t:438,t&=4095,t|=32768,Le.mknod(e,t,0)),mkdir:(e,t)=>(t=void 0!==t?t:511,t&=1023,t|=16384,Le.mknod(e,t,0)),mkdirTree(e,t){for(var n=e.split("/"),r="",o=0;o<n.length;++o)if(n[o]){r+="/"+n[o];try{Le.mkdir(r,t)}catch(e){if(20!=e.errno)throw e}}},mkdev:(e,t,n)=>(void 0===n&&(n=t,t=438),t|=8192,Le.mknod(e,t,n)),symlink(e,t){if(!Ge.resolve(e))throw new Le.ErrnoError(44);var n=Le.lookupPath(t,{parent:!0}).node;if(!n)throw new Le.ErrnoError(44);var r=Ae.basename(t),o=Le.mayCreate(n,r);if(o)throw new Le.ErrnoError(o);if(!n.node_ops.symlink)throw new Le.ErrnoError(63);return n.node_ops.symlink(n,r,e)},rename(e,t){var n,r,o=Ae.dirname(e),i=Ae.dirname(t),a=Ae.basename(e),s=Ae.basename(t);if(n=Le.lookupPath(e,{parent:!0}).node,r=Le.lookupPath(t,{parent:!0}).node,!n||!r)throw new Le.ErrnoError(44);if(n.mount!==r.mount)throw new Le.ErrnoError(75);var u,F=Le.lookupNode(n,a),m=Ge.relative(e,i);if("."!==m.charAt(0))throw new Le.ErrnoError(28);if("."!==(m=Ge.relative(t,o)).charAt(0))throw new Le.ErrnoError(55);try{u=Le.lookupNode(r,s)}catch(e){}if(F!==u){var l=Le.isDir(F.mode),d=Le.mayDelete(n,a,l);if(d)throw new Le.ErrnoError(d);if(d=u?Le.mayDelete(r,s,l):Le.mayCreate(r,s))throw new Le.ErrnoError(d);if(!n.node_ops.rename)throw new Le.ErrnoError(63);if(Le.isMountpoint(F)||u&&Le.isMountpoint(u))throw new Le.ErrnoError(10);if(r!==n&&(d=Le.nodePermissions(n,"w")))throw new Le.ErrnoError(d);Le.hashRemoveNode(F);try{n.node_ops.rename(F,r,s),F.parent=r}catch(e){throw e}finally{Le.hashAddNode(F)}}},rmdir(e){var t=Le.lookupPath(e,{parent:!0}).node,n=Ae.basename(e),r=Le.lookupNode(t,n),o=Le.mayDelete(t,n,!0);if(o)throw new Le.ErrnoError(o);if(!t.node_ops.rmdir)throw new Le.ErrnoError(63);if(Le.isMountpoint(r))throw new Le.ErrnoError(10);t.node_ops.rmdir(t,n),Le.destroyNode(r)},readdir(e){var t=Le.lookupPath(e,{follow:!0}).node;if(!t.node_ops.readdir)throw new Le.ErrnoError(54);return t.node_ops.readdir(t)},unlink(e){var t=Le.lookupPath(e,{parent:!0}).node;if(!t)throw new Le.ErrnoError(44);var n=Ae.basename(e),r=Le.lookupNode(t,n),o=Le.mayDelete(t,n,!1);if(o)throw new Le.ErrnoError(o);if(!t.node_ops.unlink)throw new Le.ErrnoError(63);if(Le.isMountpoint(r))throw new Le.ErrnoError(10);t.node_ops.unlink(t,n),Le.destroyNode(r)},readlink(e){var t=Le.lookupPath(e).node;if(!t)throw new Le.ErrnoError(44);if(!t.node_ops.readlink)throw new Le.ErrnoError(28);return Ge.resolve(Le.getPath(t.parent),t.node_ops.readlink(t))},stat(e,t){var n=Le.lookupPath(e,{follow:!t}).node;if(!n)throw new Le.ErrnoError(44);if(!n.node_ops.getattr)throw new Le.ErrnoError(63);return n.node_ops.getattr(n)},lstat:e=>Le.stat(e,!0),chmod(e,t,n){var r;if(!(r="string"==typeof e?Le.lookupPath(e,{follow:!n}).node:e).node_ops.setattr)throw new Le.ErrnoError(63);r.node_ops.setattr(r,{mode:4095&t|-4096&r.mode,timestamp:Date.now()})},lchmod(e,t){Le.chmod(e,t,!0)},fchmod(e,t){var n=Le.getStreamChecked(e);Le.chmod(n.node,t)},chown(e,t,n,r){var o;if(!(o="string"==typeof e?Le.lookupPath(e,{follow:!r}).node:e).node_ops.setattr)throw new Le.ErrnoError(63);o.node_ops.setattr(o,{timestamp:Date.now()})},lchown(e,t,n){Le.chown(e,t,n,!0)},fchown(e,t,n){var r=Le.getStreamChecked(e);Le.chown(r.node,t,n)},truncate(e,t){if(t<0)throw new Le.ErrnoError(28);var n;if(!(n="string"==typeof e?Le.lookupPath(e,{follow:!0}).node:e).node_ops.setattr)throw new Le.ErrnoError(63);if(Le.isDir(n.mode))throw new Le.ErrnoError(31);if(!Le.isFile(n.mode))throw new Le.ErrnoError(28);var r=Le.nodePermissions(n,"w");if(r)throw new Le.ErrnoError(r);n.node_ops.setattr(n,{size:t,timestamp:Date.now()})},ftruncate(e,t){var n=Le.getStreamChecked(e);if(!(2097155&n.flags))throw new Le.ErrnoError(28);Le.truncate(n.node,t)},utime(e,t,n){var r=Le.lookupPath(e,{follow:!0}).node;r.node_ops.setattr(r,{timestamp:Math.max(t,n)})},open(e,t,n){if(""===e)throw new Le.ErrnoError(44);var r;if(n=64&(t="string"==typeof t?(e=>{var t={r:0,"r+":2,w:577,"w+":578,a:1089,"a+":1090}[e];if(void 0===t)throw new Error(`Unknown file open mode: ${e}`);return t})(t):t)?4095&(n=void 0===n?438:n)|32768:0,"object"==typeof e)r=e;else{e=Ae.normalize(e);try{r=Le.lookupPath(e,{follow:!(131072&t)}).node}catch(e){}}var o=!1;if(64&t)if(r){if(128&t)throw new Le.ErrnoError(20)}else r=Le.mknod(e,n,0),o=!0;if(!r)throw new Le.ErrnoError(44);if(Le.isChrdev(r.mode)&&(t&=-513),65536&t&&!Le.isDir(r.mode))throw new Le.ErrnoError(54);if(!o){var a=Le.mayOpen(r,t);if(a)throw new Le.ErrnoError(a)}512&t&&!o&&Le.truncate(r,0),t&=-131713;var s=Le.createStream({node:r,path:Le.getPath(r),flags:t,seekable:!0,position:0,stream_ops:r.stream_ops,ungotten:[],error:!1});return s.stream_ops.open&&s.stream_ops.open(s),!i.logReadFiles||1&t||e in Le.readFiles||(Le.readFiles[e]=1),s},close(e){if(Le.isClosed(e))throw new Le.ErrnoError(8);e.getdents&&(e.getdents=null);try{e.stream_ops.close&&e.stream_ops.close(e)}catch(e){throw e}finally{Le.closeStream(e.fd)}e.fd=null},isClosed:e=>null===e.fd,llseek(e,t,n){if(Le.isClosed(e))throw new Le.ErrnoError(8);if(!e.seekable||!e.stream_ops.llseek)throw new Le.ErrnoError(70);if(0!=n&&1!=n&&2!=n)throw new Le.ErrnoError(28);return e.position=e.stream_ops.llseek(e,t,n),e.ungotten=[],e.position},read(e,t,n,r,o){if(I(n>=0),r<0||o<0)throw new Le.ErrnoError(28);if(Le.isClosed(e))throw new Le.ErrnoError(8);if(1==(2097155&e.flags))throw new Le.ErrnoError(8);if(Le.isDir(e.node.mode))throw new Le.ErrnoError(31);if(!e.stream_ops.read)throw new Le.ErrnoError(28);var i=void 0!==o;if(i){if(!e.seekable)throw new Le.ErrnoError(70)}else o=e.position;var a=e.stream_ops.read(e,t,n,r,o);return i||(e.position+=a),a},write(e,t,n,r,o,i){if(I(n>=0),r<0||o<0)throw new Le.ErrnoError(28);if(Le.isClosed(e))throw new Le.ErrnoError(8);if(!(2097155&e.flags))throw new Le.ErrnoError(8);if(Le.isDir(e.node.mode))throw new Le.ErrnoError(31);if(!e.stream_ops.write)throw new Le.ErrnoError(28);e.seekable&&1024&e.flags&&Le.llseek(e,0,2);var a=void 0!==o;if(a){if(!e.seekable)throw new Le.ErrnoError(70)}else o=e.position;var s=e.stream_ops.write(e,t,n,r,o,i);return a||(e.position+=s),s},allocate(e,t,n){if(Le.isClosed(e))throw new Le.ErrnoError(8);if(t<0||n<=0)throw new Le.ErrnoError(28);if(!(2097155&e.flags))throw new Le.ErrnoError(8);if(!Le.isFile(e.node.mode)&&!Le.isDir(e.node.mode))throw new Le.ErrnoError(43);if(!e.stream_ops.allocate)throw new Le.ErrnoError(138);e.stream_ops.allocate(e,t,n)},mmap(e,t,n,r,o){if(2&r&&!(2&o)&&2!=(2097155&e.flags))throw new Le.ErrnoError(2);if(1==(2097155&e.flags))throw new Le.ErrnoError(2);if(!e.stream_ops.mmap)throw new Le.ErrnoError(43);if(!t)throw new Le.ErrnoError(28);return e.stream_ops.mmap(e,t,n,r,o)},msync:(e,t,n,r,o)=>(I(n>=0),e.stream_ops.msync?e.stream_ops.msync(e,t,n,r,o):0),ioctl(e,t,n){if(!e.stream_ops.ioctl)throw new Le.ErrnoError(59);return e.stream_ops.ioctl(e,t,n)},readFile(e,t={}){if(t.flags=t.flags||0,t.encoding=t.encoding||"binary","utf8"!==t.encoding&&"binary"!==t.encoding)throw new Error(`Invalid encoding type "${t.encoding}"`);var n,r=Le.open(e,t.flags),o=Le.stat(e).size,i=new Uint8Array(o);return Le.read(r,i,0,o,0),"utf8"===t.encoding?n=De(i):"binary"===t.encoding&&(n=i),Le.close(r),n},writeFile(e,t,n={}){n.flags=n.flags||577;var r=Le.open(e,n.flags,n.mode);if("string"==typeof t){var o=new Uint8Array(Ce(t)+1),i=ye(t,o,0,o.length);Le.write(r,o,0,i,void 0,n.canOwn)}else{if(!ArrayBuffer.isView(t))throw new Error("Unsupported data type");Le.write(r,t,0,t.byteLength,void 0,n.canOwn)}Le.close(r)},cwd:()=>Le.currentPath,chdir(e){var t=Le.lookupPath(e,{follow:!0});if(null===t.node)throw new Le.ErrnoError(44);if(!Le.isDir(t.node.mode))throw new Le.ErrnoError(54);var n=Le.nodePermissions(t.node,"x");if(n)throw new Le.ErrnoError(n);Le.currentPath=t.path},createDefaultDirectories(){Le.mkdir("/tmp"),Le.mkdir("/home"),Le.mkdir("/home/web_user")},createDefaultDevices(){Le.mkdir("/dev"),Le.registerDevice(Le.makedev(1,3),{read:()=>0,write:(e,t,n,r,o)=>r}),Le.mkdev("/dev/null",Le.makedev(1,3)),ve.register(Le.makedev(5,0),ve.default_tty_ops),ve.register(Le.makedev(6,0),ve.default_tty1_ops),Le.mkdev("/dev/tty",Le.makedev(5,0)),Le.mkdev("/dev/tty1",Le.makedev(6,0));var e=new Uint8Array(1024),t=0,n=()=>(0===t&&(t=Ee(e).byteLength),e[--t]);Le.createDevice("/dev","random",n),Le.createDevice("/dev","urandom",n),Le.mkdir("/dev/shm"),Le.mkdir("/dev/shm/tmp")},createSpecialDirectories(){Le.mkdir("/proc");var e=Le.mkdir("/proc/self");Le.mkdir("/proc/self/fd"),Le.mount({mount(){var t=Le.createNode(e,"fd",16895,73);return t.node_ops={lookup(e,t){var n=+t,r=Le.getStreamChecked(n),o={parent:null,mount:{mountpoint:"fake"},node_ops:{readlink:()=>r.path}};return o.parent=o,o}},t}},{},"/proc/self/fd")},createStandardStreams(e,t,n){e?Le.createDevice("/dev","stdin",e):Le.symlink("/dev/tty","/dev/stdin"),t?Le.createDevice("/dev","stdout",null,t):Le.symlink("/dev/tty","/dev/stdout"),n?Le.createDevice("/dev","stderr",null,n):Le.symlink("/dev/tty1","/dev/stderr");var r=Le.open("/dev/stdin",0),o=Le.open("/dev/stdout",1),i=Le.open("/dev/stderr",1);I(0===r.fd,`invalid handle for stdin (${r.fd})`),I(1===o.fd,`invalid handle for stdout (${o.fd})`),I(2===i.fd,`invalid handle for stderr (${i.fd})`)},staticInit(){[44].forEach((e=>{Le.genericErrors[e]=new Le.ErrnoError(e),Le.genericErrors[e].stack="<generic error, no stack>"})),Le.nameTable=new Array(4096),Le.mount(Re,{},"/"),Le.createDefaultDirectories(),Le.createDefaultDevices(),Le.createSpecialDirectories(),Le.filesystems={MEMFS:Re}},init(e,t,n){I(!Le.initialized,"FS.init was previously called. If you want to initialize later with custom parameters, remove any earlier calls (note that one is automatically added to the generated code)"),Le.initialized=!0,e??=i.stdin,t??=i.stdout,n??=i.stderr,Le.createStandardStreams(e,t,n)},quit(){Le.initialized=!1,st(0);for(var e=0;e<Le.streams.length;e++){var t=Le.streams[e];t&&Le.close(t)}},findObject(e,t){var n=Le.analyzePath(e,t);return n.exists?n.object:null},analyzePath(e,t){try{e=(r=Le.lookupPath(e,{follow:!t})).path}catch(e){}var n={isRoot:!1,exists:!1,error:0,name:null,path:null,object:null,parentExists:!1,parentPath:null,parentObject:null};try{var r=Le.lookupPath(e,{parent:!0});n.parentExists=!0,n.parentPath=r.path,n.parentObject=r.node,n.name=Ae.basename(e),r=Le.lookupPath(e,{follow:!t}),n.exists=!0,n.path=r.path,n.object=r.node,n.name=r.node.name,n.isRoot="/"===r.path}catch(e){n.error=e.errno}return n},createPath(e,t,n,r){e="string"==typeof e?e:Le.getPath(e);for(var o=t.split("/").reverse();o.length;){var i=o.pop();if(i){var a=Ae.join2(e,i);try{Le.mkdir(a)}catch(e){}e=a}}return a},createFile(e,t,n,r,o){var i=Ae.join2("string"==typeof e?e:Le.getPath(e),t),a=ke(r,o);return Le.create(i,a)},createDataFile(e,t,n,r,o,i){var a=t;e&&(e="string"==typeof e?e:Le.getPath(e),a=t?Ae.join2(e,t):e);var s=ke(r,o),u=Le.create(a,s);if(n){if("string"==typeof n){for(var F=new Array(n.length),m=0,l=n.length;m<l;++m)F[m]=n.charCodeAt(m);n=F}Le.chmod(u,146|s);var d=Le.open(u,577);Le.write(d,n,0,n.length,0,i),Le.close(d),Le.chmod(u,s)}},createDevice(e,t,n,r){var o=Ae.join2("string"==typeof e?e:Le.getPath(e),t),i=ke(!!n,!!r);Le.createDevice.major??=64;var a=Le.makedev(Le.createDevice.major++,0);return Le.registerDevice(a,{open(e){e.seekable=!1},close(e){r?.buffer?.length&&r(10)},read(e,t,r,o,i){for(var a=0,s=0;s<o;s++){var u;try{u=n()}catch(e){throw new Le.ErrnoError(29)}if(void 0===u&&0===a)throw new Le.ErrnoError(6);if(null==u)break;a++,t[r+s]=u}return a&&(e.node.timestamp=Date.now()),a},write(e,t,n,o,i){for(var a=0;a<o;a++)try{r(t[n+a])}catch(e){throw new Le.ErrnoError(29)}return o&&(e.node.timestamp=Date.now()),a}}),Le.mkdev(o,i,a)},forceLoadFile(e){if(e.isDevice||e.isFolder||e.link||e.contents)return!0;if("undefined"!=typeof XMLHttpRequest)throw new Error("Lazy loading should have been performed (contents set) in createLazyFile, but it was not. Lazy loading only works in web workers. Use --embed-file or --preload-file in emcc on the main thread.");try{e.contents=_(e.url),e.usedBytes=e.contents.length}catch(e){throw new Le.ErrnoError(29)}},createLazyFile(e,t,n,r,o){class i{constructor(){this.lengthKnown=!1,this.chunks=[]}get(e){if(!(e>this.length-1||e<0)){var t=e%this.chunkSize,n=e/this.chunkSize|0;return this.getter(n)[t]}}setDataGetter(e){this.getter=e}cacheLength(){var e=new XMLHttpRequest;if(e.open("HEAD",n,!1),e.send(null),!(e.status>=200&&e.status<300||304===e.status))throw new Error("Couldn\'t load "+n+". Status: "+e.status);var t,r=Number(e.getResponseHeader("Content-length")),o=(t=e.getResponseHeader("Accept-Ranges"))&&"bytes"===t,i=(t=e.getResponseHeader("Content-Encoding"))&&"gzip"===t,a=1048576;o||(a=r);var s=this;s.setDataGetter((e=>{var t=e*a,o=(e+1)*a-1;if(o=Math.min(o,r-1),void 0===s.chunks[e]&&(s.chunks[e]=((e,t)=>{if(e>t)throw new Error("invalid range ("+e+", "+t+") or no bytes requested!");if(t>r-1)throw new Error("only "+r+" bytes available! programmer error!");var o=new XMLHttpRequest;if(o.open("GET",n,!1),r!==a&&o.setRequestHeader("Range","bytes="+e+"-"+t),o.responseType="arraybuffer",o.overrideMimeType&&o.overrideMimeType("text/plain; charset=x-user-defined"),o.send(null),!(o.status>=200&&o.status<300||304===o.status))throw new Error("Couldn\'t load "+n+". Status: "+o.status);return void 0!==o.response?new Uint8Array(o.response||[]):Te(o.responseText||"",!0)})(t,o)),void 0===s.chunks[e])throw new Error("doXHR failed!");return s.chunks[e]})),!i&&r||(a=r=1,r=this.getter(0).length,a=r,A("LazyFiles on gzip forces download of the whole file when length is accessed")),this._length=r,this._chunkSize=a,this.lengthKnown=!0}get length(){return this.lengthKnown||this.cacheLength(),this._length}get chunkSize(){return this.lengthKnown||this.cacheLength(),this._chunkSize}}if("undefined"!=typeof XMLHttpRequest){if(!u)throw"Cannot do synchronous binary XHRs outside webworkers in modern browsers. Use --embed-file or --preload-file in emcc";var a={isDevice:!1,contents:new i}}else a={isDevice:!1,url:n};var s=Le.createFile(e,t,a,r,o);a.contents?s.contents=a.contents:a.url&&(s.contents=null,s.url=a.url),Object.defineProperties(s,{usedBytes:{get:function(){return this.contents.length}}});var F={};function m(e,t,n,r,o){var i=e.node.contents;if(o>=i.length)return 0;var a=Math.min(i.length-o,r);if(I(a>=0),i.slice)for(var s=0;s<a;s++)t[n+s]=i[o+s];else for(s=0;s<a;s++)t[n+s]=i.get(o+s);return a}return Object.keys(s.stream_ops).forEach((e=>{var t=s.stream_ops[e];F[e]=(...e)=>(Le.forceLoadFile(s),t(...e))})),F.read=(e,t,n,r,o)=>(Le.forceLoadFile(s),m(e,t,n,r,o)),F.mmap=(e,t,n,r,o)=>{Le.forceLoadFile(s);var i=we(t);if(!i)throw new Le.ErrnoError(48);return m(e,C,i,t,n),{ptr:i,allocated:!0}},s.stream_ops=F,s},absolutePath(){q("FS.absolutePath has been removed; use PATH_FS.resolve instead")},createFolder(){q("FS.createFolder has been removed; use FS.mkdir instead")},createLink(){q("FS.createLink has been removed; use FS.symlink instead")},joinPath(){q("FS.joinPath has been removed; use PATH.join instead")},mmapAlloc(){q("FS.mmapAlloc has been replaced by the top level function mmapAlloc")},standardizePath(){q("FS.standardizePath has been removed; use PATH.normalize instead")}},Be={DEFAULT_POLLMASK:5,calculateAt(e,t,n){if(Ae.isAbs(t))return t;var r;if(r=-100===e?Le.cwd():Be.getStreamFromFD(e).path,0==t.length){if(!n)throw new Le.ErrnoError(44);return r}return Ae.join2(r,t)},doStat(e,t,n){var r=e(t);O[n>>2]=r.dev,O[n+4>>2]=r.mode,v[n+8>>2]=r.nlink,O[n+12>>2]=r.uid,O[n+16>>2]=r.gid,O[n+20>>2]=r.rdev,ee=[r.size>>>0,(Z=r.size,+Math.abs(Z)>=1?Z>0?+Math.floor(Z/4294967296)>>>0:~~+Math.ceil((Z-+(~~Z>>>0))/4294967296)>>>0:0)],O[n+24>>2]=ee[0],O[n+28>>2]=ee[1],O[n+32>>2]=4096,O[n+36>>2]=r.blocks;var o=r.atime.getTime(),i=r.mtime.getTime(),a=r.ctime.getTime();return ee=[Math.floor(o/1e3)>>>0,(Z=Math.floor(o/1e3),+Math.abs(Z)>=1?Z>0?+Math.floor(Z/4294967296)>>>0:~~+Math.ceil((Z-+(~~Z>>>0))/4294967296)>>>0:0)],O[n+40>>2]=ee[0],O[n+44>>2]=ee[1],v[n+48>>2]=o%1e3*1e3*1e3,ee=[Math.floor(i/1e3)>>>0,(Z=Math.floor(i/1e3),+Math.abs(Z)>=1?Z>0?+Math.floor(Z/4294967296)>>>0:~~+Math.ceil((Z-+(~~Z>>>0))/4294967296)>>>0:0)],O[n+56>>2]=ee[0],O[n+60>>2]=ee[1],v[n+64>>2]=i%1e3*1e3*1e3,ee=[Math.floor(a/1e3)>>>0,(Z=Math.floor(a/1e3),+Math.abs(Z)>=1?Z>0?+Math.floor(Z/4294967296)>>>0:~~+Math.ceil((Z-+(~~Z>>>0))/4294967296)>>>0:0)],O[n+72>>2]=ee[0],O[n+76>>2]=ee[1],v[n+80>>2]=a%1e3*1e3*1e3,ee=[r.ino>>>0,(Z=r.ino,+Math.abs(Z)>=1?Z>0?+Math.floor(Z/4294967296)>>>0:~~+Math.ceil((Z-+(~~Z>>>0))/4294967296)>>>0:0)],O[n+88>>2]=ee[0],O[n+92>>2]=ee[1],0},doMsync(e,t,n,r,o){if(!Le.isFile(t.node.mode))throw new Le.ErrnoError(43);if(2&r)return 0;var i=y.slice(e,e+n);Le.msync(t,i,o,n,r)},getStreamFromFD:e=>Le.getStreamChecked(e),varargs:void 0,getStr:e=>be(e)},Ne=(e,t)=>(I(e==e>>>0||e==(0|e)),I(t===(0|t)),t+2097152>>>0<4194305-!!e?(e>>>0)+4294967296*t:NaN),Ue=(e,t,n)=>(I("number"==typeof n,"stringToUTF8(str, outPtr, maxBytesToWrite) is missing the third parameter that specifies the length of the output buffer!"),ye(e,y,t,n)),Ve=[0,31,60,91,121,152,182,213,244,274,305,335],ze=[0,31,59,90,120,151,181,212,243,273,304,334],We=e=>{var t=G.buffer,n=(e-t.byteLength+65535)/65536|0;try{return G.grow(n),k(),1}catch(n){E(`growMemory: Attempted to grow heap from ${t.byteLength} bytes to ${e} bytes, but got error: ${n}`)}},He={},$e=()=>{if(!$e.strings){var e={USER:"web_user",LOGNAME:"web_user",PATH:"/",PWD:"/",HOME:"/home/web_user",LANG:("object"==typeof navigator&&navigator.languages&&navigator.languages[0]||"C").replace("-","_")+".UTF-8",_:c||"./this.program"};for(var t in He)void 0===He[t]?delete e[t]:e[t]=He[t];var n=[];for(var t in e)n.push(`${t}=${e[t]}`);$e.strings=n}return $e.strings},Xe=[],Ke=e=>{var t=Xe[e];return t||(e>=Xe.length&&(Xe.length=e+1),Xe[e]=t=Me.get(e)),I(Me.get(e)==t,"JavaScript-side Wasm function table mirror is out of date!"),t},Ye="undefined"!=typeof TextDecoder?new TextDecoder("utf-16le"):void 0,Je=(e,t)=>{I(e<16384),e<128?t.push(e):t.push(e%128|128,e>>7)},qe=(e,t)=>{if(I(!t.includes("j"),"i64 not permitted in function signatures when WASM_BIGINT is disabled"),"function"==typeof WebAssembly.Function)return new WebAssembly.Function((e=>{I(!e.includes("j"),"i64 not permitted in function signatures when WASM_BIGINT is disabled");for(var t={i:"i32",j:"i64",f:"f32",d:"f64",e:"externref",p:"i32"},n={parameters:[],results:"v"==e[0]?[]:[t[e[0]]]},r=1;r<e.length;++r)I(e[r]in t,"invalid signature char: "+e[r]),n.parameters.push(t[e[r]]);return n})(t),e);var n=[1];((e,t)=>{var n=e.slice(0,1),r=e.slice(1),o={i:127,p:127,j:126,f:125,d:124,e:111};t.push(96),Je(r.length,t);for(var i=0;i<r.length;++i)I(r[i]in o,"invalid signature char: "+r[i]),t.push(o[r[i]]);"v"==n?t.push(0):t.push(1,o[n])})(t,n);var r=[0,97,115,109,1,0,0,0,1];Je(n.length,r),r.push(...n),r.push(2,7,1,1,101,1,102,0,0,7,5,1,1,102,0,0);var o=new WebAssembly.Module(new Uint8Array(r));return new WebAssembly.Instance(o,{e:{f:e}}).exports.f},Qe=e=>(Oe||(Oe=new WeakMap,((e,t)=>{if(Oe)for(var n=e;n<e+t;n++){var r=Ke(n);r&&Oe.set(r,n)}})(0,Me.length)),Oe.get(e)||0),Ze=[],et=(e,t)=>{Me.set(e,t),Xe[e]=Me.get(e)},tt=e=>Pt(e),nt=(e,t,n,r,o)=>{var a={string:e=>{var t=0;return null!=e&&0!==e&&(t=(e=>{var t=Ce(e)+1,n=tt(t);return Ue(e,n,t),n})(e)),t},array:e=>{var t,n,r=tt(e.length);return n=r,I((t=e).length>=0,"writeArrayToMemory array must have a length (should be an array or typed array)"),C.set(t,n),r}},s=(e=>{var t=i["_"+e];return I(t,"Cannot call unknown function "+e+", make sure it is exported"),t})(e),u=[],F=0;if(I("array"!==t,\'Return type should not be "array".\'),r)for(var m=0;m<r.length;m++){var l=a[n[m]];l?(0===F&&(F=ce()),u[m]=l(r[m])):u[m]=r[m]}var d=s(...u);return d=function(e){return 0!==F&&Pe(F),function(e){return"string"===t?be(e):"boolean"===t?Boolean(e):e}(e)}(d)};Le.createPreloadedFile=(e,t,n,r,o,i,a,s,u,F)=>{var m=t?Ge.resolve(Ae.join2(e,t)):e,l=K(`cp ${m}`);function _(n){function d(n){F?.(),s||((e,t,n,r,o,i)=>{Le.createDataFile(e,t,n,r,o,i)})(e,t,n,r,o,u),i?.(),J(l)}((e,t,n,r)=>{"undefined"!=typeof Browser&&Browser.init();var o=!1;return Ie.forEach((i=>{o||i.canHandle(t)&&(i.handle(e,t,n,r),o=!0)})),o})(n,m,d,(()=>{a?.(),J(l)}))||d(n)}Y(l),"string"==typeof n?((e,t,n,r)=>{var o=r?"":K(`al ${e}`);d(e).then((n=>{I(n,`Loading data file "${e}" failed (no arrayBuffer).`),t(new Uint8Array(n)),o&&J(o)}),(t=>{if(!n)throw`Loading data file "${e}" failed.`;n()})),o&&Y(o)})(n,_,a):_(n)},Le.staticInit();var rt={__assert_fail:(e,t,n,r)=>{q(`Assertion failed: ${be(e)}, at: `+[t?be(t):"unknown filename",n,r?be(r):"unknown function"])},__syscall_fcntl64:function(e,t,n){Be.varargs=n;try{var r=Be.getStreamFromFD(e);switch(t){case 0:if((o=pe())<0)return-28;for(;Le.streams[o];)o++;return Le.dupStream(r,o).fd;case 1:case 2:case 13:case 14:return 0;case 3:return r.flags;case 4:var o=pe();return r.flags|=o,0;case 12:return o=fe(),T[o+0>>1]=2,0}return-28}catch(e){if(void 0===Le||"ErrnoError"!==e.name)throw e;return-e.errno}},__syscall_fstat64:function(e,t){try{var n=Be.getStreamFromFD(e);return Be.doStat(Le.stat,n.path,t)}catch(e){if(void 0===Le||"ErrnoError"!==e.name)throw e;return-e.errno}},__syscall_ftruncate64:function(e,t,n){var r=Ne(t,n);try{return isNaN(r)?61:(Le.ftruncate(e,r),0)}catch(e){if(void 0===Le||"ErrnoError"!==e.name)throw e;return-e.errno}},__syscall_getdents64:function(e,t,n){try{var r=Be.getStreamFromFD(e);r.getdents||=Le.readdir(r.path);for(var o=280,i=0,a=Le.llseek(r,0,1),s=Math.floor(a/o);s<r.getdents.length&&i+o<=n;){var u,F,m=r.getdents[s];if("."===m)u=r.node.id,F=4;else if(".."===m)u=Le.lookupPath(r.path,{parent:!0}).node.id,F=4;else{var l=Le.lookupNode(r.node,m);u=l.id,F=Le.isChrdev(l.mode)?2:Le.isDir(l.mode)?4:Le.isLink(l.mode)?10:8}I(u),ee=[u>>>0,(Z=u,+Math.abs(Z)>=1?Z>0?+Math.floor(Z/4294967296)>>>0:~~+Math.ceil((Z-+(~~Z>>>0))/4294967296)>>>0:0)],O[t+i>>2]=ee[0],O[t+i+4>>2]=ee[1],ee=[(s+1)*o>>>0,(Z=(s+1)*o,+Math.abs(Z)>=1?Z>0?+Math.floor(Z/4294967296)>>>0:~~+Math.ceil((Z-+(~~Z>>>0))/4294967296)>>>0:0)],O[t+i+8>>2]=ee[0],O[t+i+12>>2]=ee[1],T[t+i+16>>1]=280,C[t+i+18]=F,Ue(m,t+i+19,256),i+=o,s+=1}return Le.llseek(r,s*o,0),i}catch(e){if(void 0===Le||"ErrnoError"!==e.name)throw e;return-e.errno}},__syscall_ioctl:function(e,t,n){Be.varargs=n;try{var r=Be.getStreamFromFD(e);switch(t){case 21509:case 21510:case 21511:case 21512:case 21524:case 21515:return r.tty?0:-59;case 21505:if(!r.tty)return-59;if(r.tty.ops.ioctl_tcgets){var o=r.tty.ops.ioctl_tcgets(r),i=fe();O[i>>2]=o.c_iflag||0,O[i+4>>2]=o.c_oflag||0,O[i+8>>2]=o.c_cflag||0,O[i+12>>2]=o.c_lflag||0;for(var a=0;a<32;a++)C[i+a+17]=o.c_cc[a]||0;return 0}return 0;case 21506:case 21507:case 21508:if(!r.tty)return-59;if(r.tty.ops.ioctl_tcsets){i=fe();var s=O[i>>2],u=O[i+4>>2],F=O[i+8>>2],m=O[i+12>>2],l=[];for(a=0;a<32;a++)l.push(C[i+a+17]);return r.tty.ops.ioctl_tcsets(r.tty,t,{c_iflag:s,c_oflag:u,c_cflag:F,c_lflag:m,c_cc:l})}return 0;case 21519:return r.tty?(i=fe(),O[i>>2]=0,0):-59;case 21520:return r.tty?-28:-59;case 21531:return i=fe(),Le.ioctl(r,t,i);case 21523:if(!r.tty)return-59;if(r.tty.ops.ioctl_tiocgwinsz){var d=r.tty.ops.ioctl_tiocgwinsz(r.tty);i=fe(),T[i>>1]=d[0],T[i+2>>1]=d[1]}return 0;default:return-28}}catch(e){if(void 0===Le||"ErrnoError"!==e.name)throw e;return-e.errno}},__syscall_lstat64:function(e,t){try{return e=Be.getStr(e),Be.doStat(Le.lstat,e,t)}catch(e){if(void 0===Le||"ErrnoError"!==e.name)throw e;return-e.errno}},__syscall_newfstatat:function(e,t,n,r){try{t=Be.getStr(t);var o=256&r,i=4096&r;return I(!(r&=-6401),`unknown flags in __syscall_newfstatat: ${r}`),t=Be.calculateAt(e,t,i),Be.doStat(o?Le.lstat:Le.stat,t,n)}catch(e){if(void 0===Le||"ErrnoError"!==e.name)throw e;return-e.errno}},__syscall_openat:function(e,t,n,r){Be.varargs=r;try{t=Be.getStr(t),t=Be.calculateAt(e,t);var o=r?pe():0;return Le.open(t,n,o).fd}catch(e){if(void 0===Le||"ErrnoError"!==e.name)throw e;return-e.errno}},__syscall_rmdir:function(e){try{return e=Be.getStr(e),Le.rmdir(e),0}catch(e){if(void 0===Le||"ErrnoError"!==e.name)throw e;return-e.errno}},__syscall_stat64:function(e,t){try{return e=Be.getStr(e),Be.doStat(Le.stat,e,t)}catch(e){if(void 0===Le||"ErrnoError"!==e.name)throw e;return-e.errno}},__syscall_unlinkat:function(e,t,n){try{return t=Be.getStr(t),t=Be.calculateAt(e,t),0===n?Le.unlink(t):512===n?Le.rmdir(t):q("Invalid flags passed to unlinkat"),0}catch(e){if(void 0===Le||"ErrnoError"!==e.name)throw e;return-e.errno}},_abort_js:()=>{q("native code called abort()")},_emscripten_memcpy_js:(e,t,n)=>y.copyWithin(e,t,t+n),_emscripten_throw_longjmp:()=>{throw 1/0},_gmtime_js:function(e,t,n){var r=Ne(e,t),o=new Date(1e3*r);O[n>>2]=o.getUTCSeconds(),O[n+4>>2]=o.getUTCMinutes(),O[n+8>>2]=o.getUTCHours(),O[n+12>>2]=o.getUTCDate(),O[n+16>>2]=o.getUTCMonth(),O[n+20>>2]=o.getUTCFullYear()-1900,O[n+24>>2]=o.getUTCDay();var i=Date.UTC(o.getUTCFullYear(),0,1,0,0,0,0),a=(o.getTime()-i)/864e5|0;O[n+28>>2]=a},_localtime_js:function(e,t,n){var r=Ne(e,t),o=new Date(1e3*r);O[n>>2]=o.getSeconds(),O[n+4>>2]=o.getMinutes(),O[n+8>>2]=o.getHours(),O[n+12>>2]=o.getDate(),O[n+16>>2]=o.getMonth(),O[n+20>>2]=o.getFullYear()-1900,O[n+24>>2]=o.getDay();var i=0|(e=>{var t;return((t=e.getFullYear())%4!=0||t%100==0&&t%400!=0?ze:Ve)[e.getMonth()]+e.getDate()-1})(o);O[n+28>>2]=i,O[n+36>>2]=-60*o.getTimezoneOffset();var a=new Date(o.getFullYear(),0,1),s=new Date(o.getFullYear(),6,1).getTimezoneOffset(),u=a.getTimezoneOffset(),F=0|(s!=u&&o.getTimezoneOffset()==Math.min(u,s));O[n+32>>2]=F},_tzset_js:(e,t,n,r)=>{var o=(new Date).getFullYear(),i=new Date(o,0,1),a=new Date(o,6,1),s=i.getTimezoneOffset(),u=a.getTimezoneOffset(),F=Math.max(s,u);v[e>>2]=60*F,O[t>>2]=Number(s!=u);var m=e=>{var t=e>=0?"-":"+",n=Math.abs(e);return`UTC${t}${String(Math.floor(n/60)).padStart(2,"0")}${String(n%60).padStart(2,"0")}`},l=m(s),d=m(u);I(l),I(d),I(Ce(l)<=16,`timezone name truncated to fit in TZNAME_MAX (${l})`),I(Ce(d)<=16,`timezone name truncated to fit in TZNAME_MAX (${d})`),u<s?(Ue(l,n,17),Ue(d,r,17)):(Ue(l,r,17),Ue(d,n,17))},emscripten_date_now:()=>Date.now(),emscripten_resize_heap:e=>{var t=y.length;I((e>>>=0)>t);var n=2147483648;if(e>n)return E(`Cannot enlarge memory, requested ${e} bytes, but the limit is 2147483648 bytes!`),!1;for(var r=1;r<=4;r*=2){var o=t*(1+.2/r);o=Math.min(o,e+100663296);var i=Math.min(n,xe(Math.max(e,o),65536));if(We(i))return!0}return E(`Failed to grow the heap from ${t} bytes to ${i} bytes, not enough memory!`),!1},environ_get:(e,t)=>{var n=0;return $e().forEach(((r,o)=>{var i=t+n;v[e+4*o>>2]=i,((e,t)=>{for(var n=0;n<e.length;++n)I(e.charCodeAt(n)===(255&e.charCodeAt(n))),C[t++]=e.charCodeAt(n);C[t]=0})(r,i),n+=r.length+1})),0},environ_sizes_get:(e,t)=>{var n=$e();v[e>>2]=n.length;var r=0;return n.forEach((e=>r+=e.length+1)),v[t>>2]=r,0},fd_close:function(e){try{var t=Be.getStreamFromFD(e);return Le.close(t),0}catch(e){if(void 0===Le||"ErrnoError"!==e.name)throw e;return e.errno}},fd_read:function(e,t,n,r){try{var o=((e,t,n,r)=>{for(var o=0,i=0;i<n;i++){var a=v[t>>2],s=v[t+4>>2];t+=8;var u=Le.read(e,C,a,s,r);if(u<0)return-1;if(o+=u,u<s)break;void 0!==r&&(r+=u)}return o})(Be.getStreamFromFD(e),t,n);return v[r>>2]=o,0}catch(e){if(void 0===Le||"ErrnoError"!==e.name)throw e;return e.errno}},fd_seek:function(e,t,n,r,o){var i=Ne(t,n);try{if(isNaN(i))return 61;var a=Be.getStreamFromFD(e);return Le.llseek(a,i,r),ee=[a.position>>>0,(Z=a.position,+Math.abs(Z)>=1?Z>0?+Math.floor(Z/4294967296)>>>0:~~+Math.ceil((Z-+(~~Z>>>0))/4294967296)>>>0:0)],O[o>>2]=ee[0],O[o+4>>2]=ee[1],a.getdents&&0===i&&0===r&&(a.getdents=null),0}catch(e){if(void 0===Le||"ErrnoError"!==e.name)throw e;return e.errno}},fd_sync:function(e){try{var t=Be.getStreamFromFD(e);return t.stream_ops?.fsync?t.stream_ops.fsync(t):0}catch(e){if(void 0===Le||"ErrnoError"!==e.name)throw e;return e.errno}},fd_write:function(e,t,n,r){try{var o=((e,t,n,r)=>{for(var o=0,i=0;i<n;i++){var a=v[t>>2],s=v[t+4>>2];t+=8;var u=Le.write(e,C,a,s,r);if(u<0)return-1;if(o+=u,u<s)break;void 0!==r&&(r+=u)}return o})(Be.getStreamFromFD(e),t,n);return v[r>>2]=o,0}catch(e){if(void 0===Le||"ErrnoError"!==e.name)throw e;return e.errno}},invoke_ii:function(e,t){var n=ce();try{return Ke(e)(t)}catch(e){if(Pe(n),e!==e+0)throw e;mt(1,0)}},invoke_iii:function(e,t,n){var r=ce();try{return Ke(e)(t,n)}catch(e){if(Pe(r),e!==e+0)throw e;mt(1,0)}},invoke_iiii:function(e,t,n,r){var o=ce();try{return Ke(e)(t,n,r)}catch(e){if(Pe(o),e!==e+0)throw e;mt(1,0)}},invoke_iiiii:function(e,t,n,r,o){var i=ce();try{return Ke(e)(t,n,r,o)}catch(e){if(Pe(i),e!==e+0)throw e;mt(1,0)}},invoke_v:function(e){var t=ce();try{Ke(e)()}catch(e){if(Pe(t),e!==e+0)throw e;mt(1,0)}},invoke_viii:function(e,t,n,r){var o=ce();try{Ke(e)(t,n,r)}catch(e){if(Pe(o),e!==e+0)throw e;mt(1,0)}},invoke_viiii:function(e,t,n,r,o){var i=ce();try{Ke(e)(t,n,r,o)}catch(e){if(Pe(i),e!==e+0)throw e;mt(1,0)}}},ot=function(){var e={env:rt,wasi_snapshot_preview1:rt};function t(e,t){var n;return ot=e.exports,i.wasmExports=ot,I(G=ot.memory,"memory not found in wasm exports"),k(),I(Me=ot.__indirect_function_table,"table not found in wasm exports"),n=ot.__wasm_call_ctors,B.unshift(n),J("wasm-instantiate"),ot}Y("wasm-instantiate");var n,r,a,s,u=i;if(i.instantiateWasm)try{return i.instantiateWasm(e,t)}catch(e){E(`Module.instantiateWasm callback failed with error: ${e}`),o(e)}return Q??=oe(),(n=S,r=Q,a=e,s=function(e){I(i===u,"the Module object should not be replaced during async compilation - perhaps the order of HTML elements is wrong?"),u=null,t(e.instance)},n||"function"!=typeof WebAssembly.instantiateStreaming||te(r)||F||"function"!=typeof fetch?ae(r,a,s):fetch(r,{credentials:"same-origin"}).then((e=>WebAssembly.instantiateStreaming(e,a).then(s,(function(e){return E(`wasm streaming compile failed: ${e}`),E("falling back to ArrayBuffer instantiation"),ae(r,a,s)}))))).catch(o),{}}();i._PDFiumExt_Init=re("PDFiumExt_Init",0),i._FPDF_InitLibraryWithConfig=re("FPDF_InitLibraryWithConfig",1),i._PDFiumExt_OpenFileWriter=re("PDFiumExt_OpenFileWriter",0),i._PDFiumExt_GetFileWriterSize=re("PDFiumExt_GetFileWriterSize",1),i._PDFiumExt_GetFileWriterData=re("PDFiumExt_GetFileWriterData",3),i._PDFiumExt_CloseFileWriter=re("PDFiumExt_CloseFileWriter",1),i._PDFiumExt_SaveAsCopy=re("PDFiumExt_SaveAsCopy",2),i._FPDF_SaveAsCopy=re("FPDF_SaveAsCopy",3),i._PDFiumExt_OpenFormFillInfo=re("PDFiumExt_OpenFormFillInfo",0),i._PDFiumExt_CloseFormFillInfo=re("PDFiumExt_CloseFormFillInfo",1),i._PDFiumExt_InitFormFillEnvironment=re("PDFiumExt_InitFormFillEnvironment",2),i._FPDFDOC_InitFormFillEnvironment=re("FPDFDOC_InitFormFillEnvironment",2),i._PDFiumExt_ExitFormFillEnvironment=re("PDFiumExt_ExitFormFillEnvironment",1),i._FPDFDOC_ExitFormFillEnvironment=re("FPDFDOC_ExitFormFillEnvironment",1),i._FPDFAnnot_IsSupportedSubtype=re("FPDFAnnot_IsSupportedSubtype",1),i._FPDFPage_CreateAnnot=re("FPDFPage_CreateAnnot",2),i._FPDFPage_GetAnnotCount=re("FPDFPage_GetAnnotCount",1),i._FPDFPage_GetAnnot=re("FPDFPage_GetAnnot",2),i._FPDFPage_GetAnnotIndex=re("FPDFPage_GetAnnotIndex",2),i._FPDFPage_CloseAnnot=re("FPDFPage_CloseAnnot",1),i._FPDFPage_RemoveAnnot=re("FPDFPage_RemoveAnnot",2),i._FPDFAnnot_GetSubtype=re("FPDFAnnot_GetSubtype",1),i._FPDFAnnot_IsObjectSupportedSubtype=re("FPDFAnnot_IsObjectSupportedSubtype",1),i._FPDFAnnot_UpdateObject=re("FPDFAnnot_UpdateObject",2),i._FPDFAnnot_AddInkStroke=re("FPDFAnnot_AddInkStroke",3),i._FPDFAnnot_RemoveInkList=re("FPDFAnnot_RemoveInkList",1),i._FPDFAnnot_AppendObject=re("FPDFAnnot_AppendObject",2),i._FPDFAnnot_GetObjectCount=re("FPDFAnnot_GetObjectCount",1),i._FPDFAnnot_GetObject=re("FPDFAnnot_GetObject",2),i._FPDFAnnot_RemoveObject=re("FPDFAnnot_RemoveObject",2),i._FPDFAnnot_SetColor=re("FPDFAnnot_SetColor",6),i._FPDFAnnot_GetColor=re("FPDFAnnot_GetColor",6),i._FPDFAnnot_HasAttachmentPoints=re("FPDFAnnot_HasAttachmentPoints",1),i._FPDFAnnot_SetAttachmentPoints=re("FPDFAnnot_SetAttachmentPoints",3),i._FPDFAnnot_AppendAttachmentPoints=re("FPDFAnnot_AppendAttachmentPoints",2),i._FPDFAnnot_CountAttachmentPoints=re("FPDFAnnot_CountAttachmentPoints",1),i._FPDFAnnot_GetAttachmentPoints=re("FPDFAnnot_GetAttachmentPoints",3),i._FPDFAnnot_SetRect=re("FPDFAnnot_SetRect",2),i._FPDFAnnot_GetRect=re("FPDFAnnot_GetRect",2),i._FPDFAnnot_GetVertices=re("FPDFAnnot_GetVertices",3),i._FPDFAnnot_GetInkListCount=re("FPDFAnnot_GetInkListCount",1),i._FPDFAnnot_GetInkListPath=re("FPDFAnnot_GetInkListPath",4),i._FPDFAnnot_GetLine=re("FPDFAnnot_GetLine",3),i._FPDFAnnot_SetBorder=re("FPDFAnnot_SetBorder",4),i._FPDFAnnot_GetBorder=re("FPDFAnnot_GetBorder",4),i._FPDFAnnot_HasKey=re("FPDFAnnot_HasKey",2),i._FPDFAnnot_GetValueType=re("FPDFAnnot_GetValueType",2),i._FPDFAnnot_SetStringValue=re("FPDFAnnot_SetStringValue",3),i._FPDFAnnot_GetStringValue=re("FPDFAnnot_GetStringValue",4),i._FPDFAnnot_GetNumberValue=re("FPDFAnnot_GetNumberValue",3),i._FPDFAnnot_SetAP=re("FPDFAnnot_SetAP",3),i._FPDFAnnot_GetAP=re("FPDFAnnot_GetAP",4),i._FPDFAnnot_GetLinkedAnnot=re("FPDFAnnot_GetLinkedAnnot",2),i._FPDFAnnot_GetFlags=re("FPDFAnnot_GetFlags",1),i._FPDFAnnot_SetFlags=re("FPDFAnnot_SetFlags",2),i._FPDFAnnot_GetFormFieldFlags=re("FPDFAnnot_GetFormFieldFlags",2),i._FPDFAnnot_SetFormFieldFlags=re("FPDFAnnot_SetFormFieldFlags",3),i._FPDFAnnot_GetFormFieldAtPoint=re("FPDFAnnot_GetFormFieldAtPoint",3),i._FPDFAnnot_GetFormFieldName=re("FPDFAnnot_GetFormFieldName",4),i._FPDFAnnot_GetFormFieldType=re("FPDFAnnot_GetFormFieldType",2),i._FPDFAnnot_GetFormAdditionalActionJavaScript=re("FPDFAnnot_GetFormAdditionalActionJavaScript",5),i._FPDFAnnot_GetFormFieldAlternateName=re("FPDFAnnot_GetFormFieldAlternateName",4),i._FPDFAnnot_GetFormFieldValue=re("FPDFAnnot_GetFormFieldValue",4),i._FPDFAnnot_GetOptionCount=re("FPDFAnnot_GetOptionCount",2),i._FPDFAnnot_GetOptionLabel=re("FPDFAnnot_GetOptionLabel",5),i._FPDFAnnot_IsOptionSelected=re("FPDFAnnot_IsOptionSelected",3),i._FPDFAnnot_GetFontSize=re("FPDFAnnot_GetFontSize",3),i._FPDFAnnot_SetFontColor=re("FPDFAnnot_SetFontColor",5),i._FPDFAnnot_GetFontColor=re("FPDFAnnot_GetFontColor",5),i._FPDFAnnot_IsChecked=re("FPDFAnnot_IsChecked",2),i._FPDFAnnot_SetFocusableSubtypes=re("FPDFAnnot_SetFocusableSubtypes",3),i._FPDFAnnot_GetFocusableSubtypesCount=re("FPDFAnnot_GetFocusableSubtypesCount",1),i._FPDFAnnot_GetFocusableSubtypes=re("FPDFAnnot_GetFocusableSubtypes",3),i._FPDFAnnot_GetLink=re("FPDFAnnot_GetLink",1),i._FPDFAnnot_GetFormControlCount=re("FPDFAnnot_GetFormControlCount",2),i._FPDFAnnot_GetFormControlIndex=re("FPDFAnnot_GetFormControlIndex",2),i._FPDFAnnot_GetFormFieldExportValue=re("FPDFAnnot_GetFormFieldExportValue",4),i._FPDFAnnot_SetURI=re("FPDFAnnot_SetURI",2),i._FPDFAnnot_GetFileAttachment=re("FPDFAnnot_GetFileAttachment",1),i._FPDFAnnot_AddFileAttachment=re("FPDFAnnot_AddFileAttachment",2),i._EPDFAnnot_SetColor=re("EPDFAnnot_SetColor",6),i._EPDFAnnot_GetColor=re("EPDFAnnot_GetColor",6),i._EPDFAnnot_GetBorderEffect=re("EPDFAnnot_GetBorderEffect",2),i._EPDFAnnot_GetRectangleDifferences=re("EPDFAnnot_GetRectangleDifferences",5),i._EPDFAnnot_GetBorderDashPatternCount=re("EPDFAnnot_GetBorderDashPatternCount",1),i._EPDFAnnot_GetBorderDashPattern=re("EPDFAnnot_GetBorderDashPattern",3),i._EPDFAnnot_GetBorderStyle=re("EPDFAnnot_GetBorderStyle",2),i._EPDFAnnot_SetBorderStyle=re("EPDFAnnot_SetBorderStyle",3),i._EPDFAnnot_GenerateAppearance=re("EPDFAnnot_GenerateAppearance",1),i._FPDFDoc_GetAttachmentCount=re("FPDFDoc_GetAttachmentCount",1),i._FPDFDoc_AddAttachment=re("FPDFDoc_AddAttachment",2),i._FPDFDoc_GetAttachment=re("FPDFDoc_GetAttachment",2),i._FPDFDoc_DeleteAttachment=re("FPDFDoc_DeleteAttachment",2),i._FPDFAttachment_GetName=re("FPDFAttachment_GetName",3),i._FPDFAttachment_HasKey=re("FPDFAttachment_HasKey",2),i._FPDFAttachment_GetValueType=re("FPDFAttachment_GetValueType",2),i._FPDFAttachment_SetStringValue=re("FPDFAttachment_SetStringValue",3),i._FPDFAttachment_GetStringValue=re("FPDFAttachment_GetStringValue",4),i._FPDFAttachment_SetFile=re("FPDFAttachment_SetFile",4),i._FPDFAttachment_GetFile=re("FPDFAttachment_GetFile",4),i._FPDFAttachment_GetSubtype=re("FPDFAttachment_GetSubtype",3),i._FPDFCatalog_IsTagged=re("FPDFCatalog_IsTagged",1),i._FPDFCatalog_SetLanguage=re("FPDFCatalog_SetLanguage",2),i._FPDFAvail_Create=re("FPDFAvail_Create",2),i._FPDFAvail_Destroy=re("FPDFAvail_Destroy",1),i._FPDFAvail_IsDocAvail=re("FPDFAvail_IsDocAvail",2),i._FPDFAvail_GetDocument=re("FPDFAvail_GetDocument",2),i._FPDFAvail_GetFirstPageNum=re("FPDFAvail_GetFirstPageNum",1),i._FPDFAvail_IsPageAvail=re("FPDFAvail_IsPageAvail",3),i._FPDFAvail_IsFormAvail=re("FPDFAvail_IsFormAvail",2),i._FPDFAvail_IsLinearized=re("FPDFAvail_IsLinearized",1),i._FPDFBookmark_GetFirstChild=re("FPDFBookmark_GetFirstChild",2),i._FPDFBookmark_GetNextSibling=re("FPDFBookmark_GetNextSibling",2),i._FPDFBookmark_GetTitle=re("FPDFBookmark_GetTitle",3),i._FPDFBookmark_GetCount=re("FPDFBookmark_GetCount",1),i._FPDFBookmark_Find=re("FPDFBookmark_Find",2),i._FPDFBookmark_GetDest=re("FPDFBookmark_GetDest",2),i._FPDFBookmark_GetAction=re("FPDFBookmark_GetAction",1),i._FPDFAction_GetType=re("FPDFAction_GetType",1),i._FPDFAction_GetDest=re("FPDFAction_GetDest",2),i._FPDFAction_GetFilePath=re("FPDFAction_GetFilePath",3),i._FPDFAction_GetURIPath=re("FPDFAction_GetURIPath",4),i._FPDFDest_GetDestPageIndex=re("FPDFDest_GetDestPageIndex",2),i._FPDFDest_GetView=re("FPDFDest_GetView",3),i._FPDFDest_GetLocationInPage=re("FPDFDest_GetLocationInPage",7),i._FPDFLink_GetLinkAtPoint=re("FPDFLink_GetLinkAtPoint",3),i._FPDFLink_GetLinkZOrderAtPoint=re("FPDFLink_GetLinkZOrderAtPoint",3),i._FPDFLink_GetDest=re("FPDFLink_GetDest",2),i._FPDFLink_GetAction=re("FPDFLink_GetAction",1),i._FPDFLink_Enumerate=re("FPDFLink_Enumerate",3),i._FPDFLink_GetAnnot=re("FPDFLink_GetAnnot",2),i._FPDFLink_GetAnnotRect=re("FPDFLink_GetAnnotRect",2),i._FPDFLink_CountQuadPoints=re("FPDFLink_CountQuadPoints",1),i._FPDFLink_GetQuadPoints=re("FPDFLink_GetQuadPoints",3),i._FPDF_GetPageAAction=re("FPDF_GetPageAAction",2),i._FPDF_GetFileIdentifier=re("FPDF_GetFileIdentifier",4),i._FPDF_GetMetaText=re("FPDF_GetMetaText",4),i._FPDF_GetPageLabel=re("FPDF_GetPageLabel",4),i._FPDFPageObj_NewImageObj=re("FPDFPageObj_NewImageObj",1),i._FPDFImageObj_LoadJpegFile=re("FPDFImageObj_LoadJpegFile",4),i._FPDFImageObj_LoadJpegFileInline=re("FPDFImageObj_LoadJpegFileInline",4),i._FPDFImageObj_SetMatrix=re("FPDFImageObj_SetMatrix",7),i._FPDFImageObj_SetBitmap=re("FPDFImageObj_SetBitmap",4),i._FPDFImageObj_GetBitmap=re("FPDFImageObj_GetBitmap",1),i._FPDFImageObj_GetRenderedBitmap=re("FPDFImageObj_GetRenderedBitmap",3),i._FPDFImageObj_GetImageDataDecoded=re("FPDFImageObj_GetImageDataDecoded",3),i._FPDFImageObj_GetImageDataRaw=re("FPDFImageObj_GetImageDataRaw",3),i._FPDFImageObj_GetImageFilterCount=re("FPDFImageObj_GetImageFilterCount",1),i._FPDFImageObj_GetImageFilter=re("FPDFImageObj_GetImageFilter",4),i._FPDFImageObj_GetImageMetadata=re("FPDFImageObj_GetImageMetadata",3),i._FPDFImageObj_GetImagePixelSize=re("FPDFImageObj_GetImagePixelSize",3),i._FPDFImageObj_GetIccProfileDataDecoded=re("FPDFImageObj_GetIccProfileDataDecoded",5),i._FPDF_CreateNewDocument=re("FPDF_CreateNewDocument",0),i._FPDFPage_Delete=re("FPDFPage_Delete",2),i._FPDF_MovePages=re("FPDF_MovePages",4),i._FPDFPage_New=re("FPDFPage_New",4),i._FPDFPage_GetRotation=re("FPDFPage_GetRotation",1),i._FPDFPage_InsertObject=re("FPDFPage_InsertObject",2),i._FPDFPage_InsertObjectAtIndex=re("FPDFPage_InsertObjectAtIndex",3),i._FPDFPage_RemoveObject=re("FPDFPage_RemoveObject",2),i._FPDFPage_CountObjects=re("FPDFPage_CountObjects",1),i._FPDFPage_GetObject=re("FPDFPage_GetObject",2),i._FPDFPage_HasTransparency=re("FPDFPage_HasTransparency",1),i._FPDFPageObj_Destroy=re("FPDFPageObj_Destroy",1),i._FPDFPageObj_GetMarkedContentID=re("FPDFPageObj_GetMarkedContentID",1),i._FPDFPageObj_CountMarks=re("FPDFPageObj_CountMarks",1),i._FPDFPageObj_GetMark=re("FPDFPageObj_GetMark",2),i._FPDFPageObj_AddMark=re("FPDFPageObj_AddMark",2),i._FPDFPageObj_RemoveMark=re("FPDFPageObj_RemoveMark",2),i._FPDFPageObjMark_GetName=re("FPDFPageObjMark_GetName",4),i._FPDFPageObjMark_CountParams=re("FPDFPageObjMark_CountParams",1),i._FPDFPageObjMark_GetParamKey=re("FPDFPageObjMark_GetParamKey",5),i._FPDFPageObjMark_GetParamValueType=re("FPDFPageObjMark_GetParamValueType",2),i._FPDFPageObjMark_GetParamIntValue=re("FPDFPageObjMark_GetParamIntValue",3),i._FPDFPageObjMark_GetParamStringValue=re("FPDFPageObjMark_GetParamStringValue",5),i._FPDFPageObjMark_GetParamBlobValue=re("FPDFPageObjMark_GetParamBlobValue",5),i._FPDFPageObj_HasTransparency=re("FPDFPageObj_HasTransparency",1),i._FPDFPageObjMark_SetIntParam=re("FPDFPageObjMark_SetIntParam",5),i._FPDFPageObjMark_SetStringParam=re("FPDFPageObjMark_SetStringParam",5),i._FPDFPageObjMark_SetBlobParam=re("FPDFPageObjMark_SetBlobParam",6),i._FPDFPageObjMark_RemoveParam=re("FPDFPageObjMark_RemoveParam",3),i._FPDFPageObj_GetType=re("FPDFPageObj_GetType",1),i._FPDFPageObj_GetIsActive=re("FPDFPageObj_GetIsActive",2),i._FPDFPageObj_SetIsActive=re("FPDFPageObj_SetIsActive",2),i._FPDFPage_GenerateContent=re("FPDFPage_GenerateContent",1),i._FPDFPageObj_Transform=re("FPDFPageObj_Transform",7),i._FPDFPageObj_TransformF=re("FPDFPageObj_TransformF",2),i._FPDFPageObj_GetMatrix=re("FPDFPageObj_GetMatrix",2),i._FPDFPageObj_SetMatrix=re("FPDFPageObj_SetMatrix",2),i._FPDFPageObj_SetBlendMode=re("FPDFPageObj_SetBlendMode",2),i._FPDFPage_TransformAnnots=re("FPDFPage_TransformAnnots",7),i._FPDFPage_SetRotation=re("FPDFPage_SetRotation",2),i._FPDFPageObj_SetFillColor=re("FPDFPageObj_SetFillColor",5),i._FPDFPageObj_GetFillColor=re("FPDFPageObj_GetFillColor",5),i._FPDFPageObj_GetBounds=re("FPDFPageObj_GetBounds",5),i._FPDFPageObj_GetRotatedBounds=re("FPDFPageObj_GetRotatedBounds",2),i._FPDFPageObj_SetStrokeColor=re("FPDFPageObj_SetStrokeColor",5),i._FPDFPageObj_GetStrokeColor=re("FPDFPageObj_GetStrokeColor",5),i._FPDFPageObj_SetStrokeWidth=re("FPDFPageObj_SetStrokeWidth",2),i._FPDFPageObj_GetStrokeWidth=re("FPDFPageObj_GetStrokeWidth",2),i._FPDFPageObj_GetLineJoin=re("FPDFPageObj_GetLineJoin",1),i._FPDFPageObj_SetLineJoin=re("FPDFPageObj_SetLineJoin",2),i._FPDFPageObj_GetLineCap=re("FPDFPageObj_GetLineCap",1),i._FPDFPageObj_SetLineCap=re("FPDFPageObj_SetLineCap",2),i._FPDFPageObj_GetDashPhase=re("FPDFPageObj_GetDashPhase",2),i._FPDFPageObj_SetDashPhase=re("FPDFPageObj_SetDashPhase",2),i._FPDFPageObj_GetDashCount=re("FPDFPageObj_GetDashCount",1),i._FPDFPageObj_GetDashArray=re("FPDFPageObj_GetDashArray",3),i._FPDFPageObj_SetDashArray=re("FPDFPageObj_SetDashArray",4),i._FPDFFormObj_CountObjects=re("FPDFFormObj_CountObjects",1),i._FPDFFormObj_GetObject=re("FPDFFormObj_GetObject",2),i._FPDFFormObj_RemoveObject=re("FPDFFormObj_RemoveObject",2),i._FPDFPageObj_CreateNewPath=re("FPDFPageObj_CreateNewPath",2),i._FPDFPageObj_CreateNewRect=re("FPDFPageObj_CreateNewRect",4),i._FPDFPath_CountSegments=re("FPDFPath_CountSegments",1),i._FPDFPath_GetPathSegment=re("FPDFPath_GetPathSegment",2),i._FPDFPath_MoveTo=re("FPDFPath_MoveTo",3),i._FPDFPath_LineTo=re("FPDFPath_LineTo",3),i._FPDFPath_BezierTo=re("FPDFPath_BezierTo",7),i._FPDFPath_Close=re("FPDFPath_Close",1),i._FPDFPath_SetDrawMode=re("FPDFPath_SetDrawMode",3),i._FPDFPath_GetDrawMode=re("FPDFPath_GetDrawMode",3),i._FPDFPathSegment_GetPoint=re("FPDFPathSegment_GetPoint",3),i._FPDFPathSegment_GetType=re("FPDFPathSegment_GetType",1),i._FPDFPathSegment_GetClose=re("FPDFPathSegment_GetClose",1),i._FPDFPageObj_NewTextObj=re("FPDFPageObj_NewTextObj",3),i._FPDFText_SetText=re("FPDFText_SetText",2),i._FPDFText_SetCharcodes=re("FPDFText_SetCharcodes",3),i._FPDFText_LoadFont=re("FPDFText_LoadFont",5),i._FPDFText_LoadStandardFont=re("FPDFText_LoadStandardFont",2),i._FPDFText_LoadCidType2Font=re("FPDFText_LoadCidType2Font",6),i._FPDFTextObj_GetFontSize=re("FPDFTextObj_GetFontSize",2),i._FPDFTextObj_GetText=re("FPDFTextObj_GetText",4),i._FPDFTextObj_GetRenderedBitmap=re("FPDFTextObj_GetRenderedBitmap",4),i._FPDFFont_Close=re("FPDFFont_Close",1),i._FPDFPageObj_CreateTextObj=re("FPDFPageObj_CreateTextObj",3),i._FPDFTextObj_GetTextRenderMode=re("FPDFTextObj_GetTextRenderMode",1),i._FPDFTextObj_SetTextRenderMode=re("FPDFTextObj_SetTextRenderMode",2),i._FPDFTextObj_GetFont=re("FPDFTextObj_GetFont",1),i._FPDFFont_GetBaseFontName=re("FPDFFont_GetBaseFontName",3),i._FPDFFont_GetFamilyName=re("FPDFFont_GetFamilyName",3),i._FPDFFont_GetFontData=re("FPDFFont_GetFontData",4),i._FPDFFont_GetIsEmbedded=re("FPDFFont_GetIsEmbedded",1),i._FPDFFont_GetFlags=re("FPDFFont_GetFlags",1),i._FPDFFont_GetWeight=re("FPDFFont_GetWeight",1),i._FPDFFont_GetItalicAngle=re("FPDFFont_GetItalicAngle",2),i._FPDFFont_GetAscent=re("FPDFFont_GetAscent",3),i._FPDFFont_GetDescent=re("FPDFFont_GetDescent",3),i._FPDFFont_GetGlyphWidth=re("FPDFFont_GetGlyphWidth",4),i._FPDFFont_GetGlyphPath=re("FPDFFont_GetGlyphPath",3),i._FPDFGlyphPath_CountGlyphSegments=re("FPDFGlyphPath_CountGlyphSegments",1),i._FPDFGlyphPath_GetGlyphPathSegment=re("FPDFGlyphPath_GetGlyphPathSegment",2),i._FPDFDoc_GetPageMode=re("FPDFDoc_GetPageMode",1),i._FPDFPage_Flatten=re("FPDFPage_Flatten",2),i._FPDFPage_HasFormFieldAtPoint=re("FPDFPage_HasFormFieldAtPoint",4),i._FPDFPage_FormFieldZOrderAtPoint=re("FPDFPage_FormFieldZOrderAtPoint",4),i._malloc=re("malloc",1),i._free=re("free",1),i._FORM_OnMouseMove=re("FORM_OnMouseMove",5),i._FORM_OnMouseWheel=re("FORM_OnMouseWheel",6),i._FORM_OnFocus=re("FORM_OnFocus",5),i._FORM_OnLButtonDown=re("FORM_OnLButtonDown",5),i._FORM_OnLButtonUp=re("FORM_OnLButtonUp",5),i._FORM_OnLButtonDoubleClick=re("FORM_OnLButtonDoubleClick",5),i._FORM_OnRButtonDown=re("FORM_OnRButtonDown",5),i._FORM_OnRButtonUp=re("FORM_OnRButtonUp",5),i._FORM_OnKeyDown=re("FORM_OnKeyDown",4),i._FORM_OnKeyUp=re("FORM_OnKeyUp",4),i._FORM_OnChar=re("FORM_OnChar",4),i._FORM_GetFocusedText=re("FORM_GetFocusedText",4),i._FORM_GetSelectedText=re("FORM_GetSelectedText",4),i._FORM_ReplaceAndKeepSelection=re("FORM_ReplaceAndKeepSelection",3),i._FORM_ReplaceSelection=re("FORM_ReplaceSelection",3),i._FORM_SelectAllText=re("FORM_SelectAllText",2),i._FORM_CanUndo=re("FORM_CanUndo",2),i._FORM_CanRedo=re("FORM_CanRedo",2),i._FORM_Undo=re("FORM_Undo",2),i._FORM_Redo=re("FORM_Redo",2),i._FORM_ForceToKillFocus=re("FORM_ForceToKillFocus",1),i._FORM_GetFocusedAnnot=re("FORM_GetFocusedAnnot",3),i._FORM_SetFocusedAnnot=re("FORM_SetFocusedAnnot",2),i._FPDF_FFLDraw=re("FPDF_FFLDraw",9),i._FPDF_SetFormFieldHighlightColor=re("FPDF_SetFormFieldHighlightColor",3),i._FPDF_SetFormFieldHighlightAlpha=re("FPDF_SetFormFieldHighlightAlpha",2),i._FPDF_RemoveFormFieldHighlight=re("FPDF_RemoveFormFieldHighlight",1),i._FORM_OnAfterLoadPage=re("FORM_OnAfterLoadPage",2),i._FORM_OnBeforeClosePage=re("FORM_OnBeforeClosePage",2),i._FORM_DoDocumentJSAction=re("FORM_DoDocumentJSAction",1),i._FORM_DoDocumentOpenAction=re("FORM_DoDocumentOpenAction",1),i._FORM_DoDocumentAAction=re("FORM_DoDocumentAAction",2),i._FORM_DoPageAAction=re("FORM_DoPageAAction",3),i._FORM_SetIndexSelected=re("FORM_SetIndexSelected",4),i._FORM_IsIndexSelected=re("FORM_IsIndexSelected",3),i._FPDFDoc_GetJavaScriptActionCount=re("FPDFDoc_GetJavaScriptActionCount",1),i._FPDFDoc_GetJavaScriptAction=re("FPDFDoc_GetJavaScriptAction",2),i._FPDFDoc_CloseJavaScriptAction=re("FPDFDoc_CloseJavaScriptAction",1),i._FPDFJavaScriptAction_GetName=re("FPDFJavaScriptAction_GetName",3),i._FPDFJavaScriptAction_GetScript=re("FPDFJavaScriptAction_GetScript",3),i._FPDF_ImportPagesByIndex=re("FPDF_ImportPagesByIndex",5),i._FPDF_ImportPages=re("FPDF_ImportPages",4),i._FPDF_ImportNPagesToOne=re("FPDF_ImportNPagesToOne",5),i._FPDF_NewXObjectFromPage=re("FPDF_NewXObjectFromPage",3),i._FPDF_CloseXObject=re("FPDF_CloseXObject",1),i._FPDF_NewFormObjectFromXObject=re("FPDF_NewFormObjectFromXObject",1),i._FPDF_CopyViewerPreferences=re("FPDF_CopyViewerPreferences",2),i._FPDF_RenderPageBitmapWithColorScheme_Start=re("FPDF_RenderPageBitmapWithColorScheme_Start",10),i._FPDF_RenderPageBitmap_Start=re("FPDF_RenderPageBitmap_Start",9),i._FPDF_RenderPage_Continue=re("FPDF_RenderPage_Continue",2),i._FPDF_RenderPage_Close=re("FPDF_RenderPage_Close",1),i._FPDF_SaveWithVersion=re("FPDF_SaveWithVersion",4),i._FPDFText_GetCharIndexFromTextIndex=re("FPDFText_GetCharIndexFromTextIndex",2),i._FPDFText_GetTextIndexFromCharIndex=re("FPDFText_GetTextIndexFromCharIndex",2),i._FPDF_GetSignatureCount=re("FPDF_GetSignatureCount",1),i._FPDF_GetSignatureObject=re("FPDF_GetSignatureObject",2),i._FPDFSignatureObj_GetContents=re("FPDFSignatureObj_GetContents",3),i._FPDFSignatureObj_GetByteRange=re("FPDFSignatureObj_GetByteRange",3),i._FPDFSignatureObj_GetSubFilter=re("FPDFSignatureObj_GetSubFilter",3),i._FPDFSignatureObj_GetReason=re("FPDFSignatureObj_GetReason",3),i._FPDFSignatureObj_GetTime=re("FPDFSignatureObj_GetTime",3),i._FPDFSignatureObj_GetDocMDPPermission=re("FPDFSignatureObj_GetDocMDPPermission",1),i._FPDF_StructTree_GetForPage=re("FPDF_StructTree_GetForPage",1),i._FPDF_StructTree_Close=re("FPDF_StructTree_Close",1),i._FPDF_StructTree_CountChildren=re("FPDF_StructTree_CountChildren",1),i._FPDF_StructTree_GetChildAtIndex=re("FPDF_StructTree_GetChildAtIndex",2),i._FPDF_StructElement_GetAltText=re("FPDF_StructElement_GetAltText",3),i._FPDF_StructElement_GetActualText=re("FPDF_StructElement_GetActualText",3),i._FPDF_StructElement_GetID=re("FPDF_StructElement_GetID",3),i._FPDF_StructElement_GetLang=re("FPDF_StructElement_GetLang",3),i._FPDF_StructElement_GetAttributeCount=re("FPDF_StructElement_GetAttributeCount",1),i._FPDF_StructElement_GetAttributeAtIndex=re("FPDF_StructElement_GetAttributeAtIndex",2),i._FPDF_StructElement_GetStringAttribute=re("FPDF_StructElement_GetStringAttribute",4),i._FPDF_StructElement_GetMarkedContentID=re("FPDF_StructElement_GetMarkedContentID",1),i._FPDF_StructElement_GetType=re("FPDF_StructElement_GetType",3),i._FPDF_StructElement_GetObjType=re("FPDF_StructElement_GetObjType",3),i._FPDF_StructElement_GetTitle=re("FPDF_StructElement_GetTitle",3),i._FPDF_StructElement_CountChildren=re("FPDF_StructElement_CountChildren",1),i._FPDF_StructElement_GetChildAtIndex=re("FPDF_StructElement_GetChildAtIndex",2),i._FPDF_StructElement_GetChildMarkedContentID=re("FPDF_StructElement_GetChildMarkedContentID",2),i._FPDF_StructElement_GetParent=re("FPDF_StructElement_GetParent",1),i._FPDF_StructElement_Attr_GetCount=re("FPDF_StructElement_Attr_GetCount",1),i._FPDF_StructElement_Attr_GetName=re("FPDF_StructElement_Attr_GetName",5),i._FPDF_StructElement_Attr_GetValue=re("FPDF_StructElement_Attr_GetValue",2),i._FPDF_StructElement_Attr_GetType=re("FPDF_StructElement_Attr_GetType",1),i._FPDF_StructElement_Attr_GetBooleanValue=re("FPDF_StructElement_Attr_GetBooleanValue",2),i._FPDF_StructElement_Attr_GetNumberValue=re("FPDF_StructElement_Attr_GetNumberValue",2),i._FPDF_StructElement_Attr_GetStringValue=re("FPDF_StructElement_Attr_GetStringValue",4),i._FPDF_StructElement_Attr_GetBlobValue=re("FPDF_StructElement_Attr_GetBlobValue",4),i._FPDF_StructElement_Attr_CountChildren=re("FPDF_StructElement_Attr_CountChildren",1),i._FPDF_StructElement_Attr_GetChildAtIndex=re("FPDF_StructElement_Attr_GetChildAtIndex",2),i._FPDF_StructElement_GetMarkedContentIdCount=re("FPDF_StructElement_GetMarkedContentIdCount",1),i._FPDF_StructElement_GetMarkedContentIdAtIndex=re("FPDF_StructElement_GetMarkedContentIdAtIndex",2),i._FPDF_AddInstalledFont=re("FPDF_AddInstalledFont",3),i._FPDF_SetSystemFontInfo=re("FPDF_SetSystemFontInfo",1),i._FPDF_GetDefaultTTFMap=re("FPDF_GetDefaultTTFMap",0),i._FPDF_GetDefaultTTFMapCount=re("FPDF_GetDefaultTTFMapCount",0),i._FPDF_GetDefaultTTFMapEntry=re("FPDF_GetDefaultTTFMapEntry",1),i._FPDF_GetDefaultSystemFontInfo=re("FPDF_GetDefaultSystemFontInfo",0),i._FPDF_FreeDefaultSystemFontInfo=re("FPDF_FreeDefaultSystemFontInfo",1),i._FPDFText_LoadPage=re("FPDFText_LoadPage",1),i._FPDFText_ClosePage=re("FPDFText_ClosePage",1),i._FPDFText_CountChars=re("FPDFText_CountChars",1),i._FPDFText_GetUnicode=re("FPDFText_GetUnicode",2),i._FPDFText_GetTextObject=re("FPDFText_GetTextObject",2),i._FPDFText_IsGenerated=re("FPDFText_IsGenerated",2),i._FPDFText_IsHyphen=re("FPDFText_IsHyphen",2),i._FPDFText_HasUnicodeMapError=re("FPDFText_HasUnicodeMapError",2),i._FPDFText_GetFontSize=re("FPDFText_GetFontSize",2),i._FPDFText_GetFontInfo=re("FPDFText_GetFontInfo",5),i._FPDFText_GetFontWeight=re("FPDFText_GetFontWeight",2),i._FPDFText_GetFillColor=re("FPDFText_GetFillColor",6),i._FPDFText_GetStrokeColor=re("FPDFText_GetStrokeColor",6),i._FPDFText_GetCharAngle=re("FPDFText_GetCharAngle",2),i._FPDFText_GetCharBox=re("FPDFText_GetCharBox",6),i._FPDFText_GetLooseCharBox=re("FPDFText_GetLooseCharBox",3),i._FPDFText_GetMatrix=re("FPDFText_GetMatrix",3),i._FPDFText_GetCharOrigin=re("FPDFText_GetCharOrigin",4),i._FPDFText_GetCharIndexAtPos=re("FPDFText_GetCharIndexAtPos",5),i._FPDFText_GetText=re("FPDFText_GetText",4),i._FPDFText_CountRects=re("FPDFText_CountRects",3),i._FPDFText_GetRect=re("FPDFText_GetRect",6),i._FPDFText_GetBoundedText=re("FPDFText_GetBoundedText",7),i._FPDFText_FindStart=re("FPDFText_FindStart",4),i._FPDFText_FindNext=re("FPDFText_FindNext",1),i._FPDFText_FindPrev=re("FPDFText_FindPrev",1),i._FPDFText_GetSchResultIndex=re("FPDFText_GetSchResultIndex",1),i._FPDFText_GetSchCount=re("FPDFText_GetSchCount",1),i._FPDFText_FindClose=re("FPDFText_FindClose",1),i._FPDFLink_LoadWebLinks=re("FPDFLink_LoadWebLinks",1),i._FPDFLink_CountWebLinks=re("FPDFLink_CountWebLinks",1),i._FPDFLink_GetURL=re("FPDFLink_GetURL",4),i._FPDFLink_CountRects=re("FPDFLink_CountRects",2),i._FPDFLink_GetRect=re("FPDFLink_GetRect",7),i._FPDFLink_GetTextRange=re("FPDFLink_GetTextRange",4),i._FPDFLink_CloseWebLinks=re("FPDFLink_CloseWebLinks",1),i._FPDFPage_GetDecodedThumbnailData=re("FPDFPage_GetDecodedThumbnailData",3),i._FPDFPage_GetRawThumbnailData=re("FPDFPage_GetRawThumbnailData",3),i._FPDFPage_GetThumbnailAsBitmap=re("FPDFPage_GetThumbnailAsBitmap",1),i._FPDFPage_SetMediaBox=re("FPDFPage_SetMediaBox",5),i._FPDFPage_SetCropBox=re("FPDFPage_SetCropBox",5),i._FPDFPage_SetBleedBox=re("FPDFPage_SetBleedBox",5),i._FPDFPage_SetTrimBox=re("FPDFPage_SetTrimBox",5),i._FPDFPage_SetArtBox=re("FPDFPage_SetArtBox",5),i._FPDFPage_GetMediaBox=re("FPDFPage_GetMediaBox",5),i._FPDFPage_GetCropBox=re("FPDFPage_GetCropBox",5),i._FPDFPage_GetBleedBox=re("FPDFPage_GetBleedBox",5),i._FPDFPage_GetTrimBox=re("FPDFPage_GetTrimBox",5),i._FPDFPage_GetArtBox=re("FPDFPage_GetArtBox",5),i._FPDFPage_TransFormWithClip=re("FPDFPage_TransFormWithClip",3),i._FPDFPageObj_TransformClipPath=re("FPDFPageObj_TransformClipPath",7),i._FPDFPageObj_GetClipPath=re("FPDFPageObj_GetClipPath",1),i._FPDFClipPath_CountPaths=re("FPDFClipPath_CountPaths",1),i._FPDFClipPath_CountPathSegments=re("FPDFClipPath_CountPathSegments",2),i._FPDFClipPath_GetPathSegment=re("FPDFClipPath_GetPathSegment",3),i._FPDF_CreateClipPath=re("FPDF_CreateClipPath",4),i._FPDF_DestroyClipPath=re("FPDF_DestroyClipPath",1),i._FPDFPage_InsertClipPath=re("FPDFPage_InsertClipPath",2),i._FPDF_InitLibrary=re("FPDF_InitLibrary",0),i._FPDF_DestroyLibrary=re("FPDF_DestroyLibrary",0),i._FPDF_SetSandBoxPolicy=re("FPDF_SetSandBoxPolicy",2),i._FPDF_LoadDocument=re("FPDF_LoadDocument",2),i._FPDF_GetFormType=re("FPDF_GetFormType",1),i._FPDF_LoadXFA=re("FPDF_LoadXFA",1),i._FPDF_LoadMemDocument=re("FPDF_LoadMemDocument",3),i._FPDF_LoadMemDocument64=re("FPDF_LoadMemDocument64",3),i._FPDF_LoadCustomDocument=re("FPDF_LoadCustomDocument",2),i._FPDF_GetFileVersion=re("FPDF_GetFileVersion",2),i._FPDF_DocumentHasValidCrossReferenceTable=re("FPDF_DocumentHasValidCrossReferenceTable",1),i._FPDF_GetDocPermissions=re("FPDF_GetDocPermissions",1),i._FPDF_GetDocUserPermissions=re("FPDF_GetDocUserPermissions",1),i._FPDF_GetSecurityHandlerRevision=re("FPDF_GetSecurityHandlerRevision",1),i._FPDF_GetPageCount=re("FPDF_GetPageCount",1),i._FPDF_LoadPage=re("FPDF_LoadPage",2),i._FPDF_GetPageWidthF=re("FPDF_GetPageWidthF",1),i._FPDF_GetPageWidth=re("FPDF_GetPageWidth",1),i._FPDF_GetPageHeightF=re("FPDF_GetPageHeightF",1),i._FPDF_GetPageHeight=re("FPDF_GetPageHeight",1),i._FPDF_GetPageBoundingBox=re("FPDF_GetPageBoundingBox",2),i._FPDF_RenderPageBitmap=re("FPDF_RenderPageBitmap",8),i._FPDF_RenderPageBitmapWithMatrix=re("FPDF_RenderPageBitmapWithMatrix",5),i._EPDF_RenderAnnotBitmap=re("EPDF_RenderAnnotBitmap",6),i._FPDF_ClosePage=re("FPDF_ClosePage",1),i._FPDF_CloseDocument=re("FPDF_CloseDocument",1),i._FPDF_GetLastError=re("FPDF_GetLastError",0),i._FPDF_DeviceToPage=re("FPDF_DeviceToPage",10),i._FPDF_PageToDevice=re("FPDF_PageToDevice",10),i._FPDFBitmap_Create=re("FPDFBitmap_Create",3),i._FPDFBitmap_CreateEx=re("FPDFBitmap_CreateEx",5),i._FPDFBitmap_GetFormat=re("FPDFBitmap_GetFormat",1),i._FPDFBitmap_FillRect=re("FPDFBitmap_FillRect",6),i._FPDFBitmap_GetBuffer=re("FPDFBitmap_GetBuffer",1),i._FPDFBitmap_GetWidth=re("FPDFBitmap_GetWidth",1),i._FPDFBitmap_GetHeight=re("FPDFBitmap_GetHeight",1),i._FPDFBitmap_GetStride=re("FPDFBitmap_GetStride",1),i._FPDFBitmap_Destroy=re("FPDFBitmap_Destroy",1),i._FPDF_GetPageSizeByIndexF=re("FPDF_GetPageSizeByIndexF",3),i._FPDF_GetPageSizeByIndex=re("FPDF_GetPageSizeByIndex",4),i._FPDF_VIEWERREF_GetPrintScaling=re("FPDF_VIEWERREF_GetPrintScaling",1),i._FPDF_VIEWERREF_GetNumCopies=re("FPDF_VIEWERREF_GetNumCopies",1),i._FPDF_VIEWERREF_GetPrintPageRange=re("FPDF_VIEWERREF_GetPrintPageRange",1),i._FPDF_VIEWERREF_GetPrintPageRangeCount=re("FPDF_VIEWERREF_GetPrintPageRangeCount",1),i._FPDF_VIEWERREF_GetPrintPageRangeElement=re("FPDF_VIEWERREF_GetPrintPageRangeElement",2),i._FPDF_VIEWERREF_GetDuplex=re("FPDF_VIEWERREF_GetDuplex",1),i._FPDF_VIEWERREF_GetName=re("FPDF_VIEWERREF_GetName",4),i._FPDF_CountNamedDests=re("FPDF_CountNamedDests",1),i._FPDF_GetNamedDestByName=re("FPDF_GetNamedDestByName",2),i._FPDF_GetNamedDest=re("FPDF_GetNamedDest",4),i._FPDF_GetXFAPacketCount=re("FPDF_GetXFAPacketCount",1),i._FPDF_GetXFAPacketName=re("FPDF_GetXFAPacketName",4),i._FPDF_GetXFAPacketContent=re("FPDF_GetXFAPacketContent",5),i._FPDF_GetTrailerEnds=re("FPDF_GetTrailerEnds",3);var it,at,st=re("fflush",1),ut=re("emscripten_builtin_memalign",2),Ft=re("strerror",1),mt=re("setThrew",2),lt=()=>(lt=ot.emscripten_stack_init)(),dt=()=>(dt=ot.emscripten_stack_get_end)(),_t=e=>(_t=ot._emscripten_stack_restore)(e),Pt=e=>(Pt=ot._emscripten_stack_alloc)(e),ct=()=>(ct=ot.emscripten_stack_get_current)();function gt(){var e;lt(),I(!(3&(e=dt()))),0==e&&(e+=4),v[e>>2]=34821223,v[e+4>>2]=2310721022,v[0]=1668509029}function ht(){var e;function t(){it||(it=1,i.calledRun=1,R||(I(!U),U=!0,j(),i.noFSInit||Le.initialized||Le.init(),Le.ignorePermissions=!1,de(B),r(i),i.onRuntimeInitialized?.(),I(!i._main,\'compiled without a main, but one is present. if you added it from JS, use Module["onRuntimeInitialized"]\'),function(){j();var e=i.postRun;e&&("function"==typeof e&&(e=[e]),e.forEach(z)),de(N)}()))}W>0||(gt(),!at&&(at=1,(e=i.preRun)&&("function"==typeof e&&(e=[e]),e.forEach(V)),de(L),W>0)||(i.setStatus?(i.setStatus("Running..."),setTimeout((()=>{setTimeout((()=>i.setStatus("")),1),t()}),1)):t(),j()))}if(i.dynCall_ji=re("dynCall_ji",2),i.dynCall_jij=re("dynCall_jij",4),i.dynCall_iiij=re("dynCall_iiij",5),i.dynCall_iij=re("dynCall_iij",4),i.dynCall_j=re("dynCall_j",1),i.dynCall_jji=re("dynCall_jji",4),i.dynCall_iji=re("dynCall_iji",4),i.dynCall_viijii=re("dynCall_viijii",7),i.dynCall_iiji=re("dynCall_iiji",5),i.dynCall_jiji=re("dynCall_jiji",5),i.dynCall_iiiiij=re("dynCall_iiiiij",7),i.dynCall_iiiiijj=re("dynCall_iiiiijj",9),i.dynCall_iiiiiijj=re("dynCall_iiiiiijj",10),i.dynCall_viji=re("dynCall_viji",5),i.wasmExports=ot,i.ccall=nt,i.cwrap=(e,t,n,r)=>(...r)=>nt(e,t,n,r),i.addFunction=(e,t)=>{I(void 0!==e);var n=Qe(e);if(n)return n;var r=(()=>{if(Ze.length)return Ze.pop();try{Me.grow(1)}catch(e){if(!(e instanceof RangeError))throw e;throw"Unable to grow wasm table. Set ALLOW_TABLE_GROWTH."}return Me.length-1})();try{et(r,e)}catch(n){if(!(n instanceof TypeError))throw n;I(void 0!==t,"Missing signature argument to addFunction: "+e);var o=qe(e,t);et(r,o)}return Oe.set(e,r),r},i.removeFunction=e=>{Oe.delete(Ke(e)),et(e,null),Ze.push(e)},i.setValue=function(e,t,n="i8"){switch(n.endsWith("*")&&(n="*"),n){case"i1":case"i8":C[e]=t;break;case"i16":T[e>>1]=t;break;case"i32":O[e>>2]=t;break;case"i64":q("to do setValue(i64) use WASM_BIGINT");case"float":x[e>>2]=t;break;case"double":w[e>>3]=t;break;case"*":v[e>>2]=t;break;default:q(`invalid type for setValue: ${n}`)}},i.getValue=function(e,t="i8"){switch(t.endsWith("*")&&(t="*"),t){case"i1":case"i8":return C[e];case"i16":return T[e>>1];case"i32":return O[e>>2];case"i64":q("to do getValue(i64) use WASM_BIGINT");case"float":return x[e>>2];case"double":return w[e>>3];case"*":return v[e>>2];default:q(`invalid type for getValue: ${t}`)}},i.UTF8ToString=be,i.stringToUTF8=Ue,i.UTF16ToString=(e,t)=>{I(e%2==0,"Pointer passed to UTF16ToString must be aligned to two bytes!");for(var n=e,r=n>>1,o=r+t/2;!(r>=o)&&M[r];)++r;if((n=r<<1)-e>32&&Ye)return Ye.decode(y.subarray(e,n));for(var i="",a=0;!(a>=t/2);++a){var s=T[e+2*a>>1];if(0==s)break;i+=String.fromCharCode(s)}return i},i.stringToUTF16=(e,t,n)=>{if(I(t%2==0,"Pointer passed to stringToUTF16 must be aligned to two bytes!"),I("number"==typeof n,"stringToUTF16(str, outPtr, maxBytesToWrite) is missing the third parameter that specifies the length of the output buffer!"),n??=2147483647,n<2)return 0;for(var r=t,o=(n-=2)<2*e.length?n/2:e.length,i=0;i<o;++i){var a=e.charCodeAt(i);T[t>>1]=a,t+=2}return T[t>>1]=0,t-r},["writeI53ToI64","writeI53ToI64Clamped","writeI53ToI64Signaling","writeI53ToU64Clamped","writeI53ToU64Signaling","readI53FromI64","readI53FromU64","convertI32PairToI53","convertU32PairToI53","getTempRet0","setTempRet0","exitJS","inetPton4","inetNtop4","inetPton6","inetNtop6","readSockaddr","writeSockaddr","emscriptenLog","readEmAsmArgs","jstoi_q","listenOnce","autoResumeAudioContext","dynCallLegacy","getDynCaller","dynCall","handleException","keepRuntimeAlive","runtimeKeepalivePush","runtimeKeepalivePop","callUserCallback","maybeExit","asmjsMangle","HandleAllocator","getNativeTypeSize","STACK_SIZE","STACK_ALIGN","POINTER_SIZE","ASSERTIONS","reallyNegative","unSign","strLen","reSign","formatString","intArrayToString","AsciiToString","lengthBytesUTF16","UTF32ToString","stringToUTF32","lengthBytesUTF32","stringToNewUTF8","registerKeyEventCallback","maybeCStringToJsString","findEventTarget","getBoundingClientRect","fillMouseEventData","registerMouseEventCallback","registerWheelEventCallback","registerUiEventCallback","registerFocusEventCallback","fillDeviceOrientationEventData","registerDeviceOrientationEventCallback","fillDeviceMotionEventData","registerDeviceMotionEventCallback","screenOrientation","fillOrientationChangeEventData","registerOrientationChangeEventCallback","fillFullscreenChangeEventData","registerFullscreenChangeEventCallback","JSEvents_requestFullscreen","JSEvents_resizeCanvasForFullscreen","registerRestoreOldStyle","hideEverythingExceptGivenElement","restoreHiddenElements","setLetterbox","softFullscreenResizeWebGLRenderTarget","doRequestFullscreen","fillPointerlockChangeEventData","registerPointerlockChangeEventCallback","registerPointerlockErrorEventCallback","requestPointerLock","fillVisibilityChangeEventData","registerVisibilityChangeEventCallback","registerTouchEventCallback","fillGamepadEventData","registerGamepadEventCallback","registerBeforeUnloadEventCallback","fillBatteryEventData","battery","registerBatteryEventCallback","setCanvasElementSize","getCanvasElementSize","jsStackTrace","getCallstack","convertPCtoSourceLocation","checkWasiClock","wasiRightsToMuslOFlags","wasiOFlagsToMuslOFlags","createDyncallWrapper","safeSetTimeout","setImmediateWrapped","clearImmediateWrapped","polyfillSetImmediate","registerPostMainLoop","registerPreMainLoop","getPromise","makePromise","idsToPromises","makePromiseCallback","ExceptionInfo","findMatchingCatch","Browser_asyncPrepareDataCounter","safeRequestAnimationFrame","arraySum","addDays","getSocketFromFD","getSocketAddress","FS_unlink","FS_mkdirTree","_setNetworkCallback","heapObjectForWebGLType","toTypedArrayIndex","webgl_enable_ANGLE_instanced_arrays","webgl_enable_OES_vertex_array_object","webgl_enable_WEBGL_draw_buffers","webgl_enable_WEBGL_multi_draw","webgl_enable_EXT_polygon_offset_clamp","webgl_enable_EXT_clip_control","webgl_enable_WEBGL_polygon_mode","emscriptenWebGLGet","computeUnpackAlignedImageSize","colorChannelsInGlTextureFormat","emscriptenWebGLGetTexPixelData","emscriptenWebGLGetUniform","webglGetUniformLocation","webglPrepareUniformLocationsBeforeFirstUse","webglGetLeftBracePos","emscriptenWebGLGetVertexAttrib","__glGetActiveAttribOrUniform","writeGLArray","registerWebGlEventCallback","runAndAbortIfError","ALLOC_NORMAL","ALLOC_STACK","allocate","writeStringToMemory","writeAsciiToMemory","setErrNo","demangle","stackTrace"].forEach((function(e){Fe(e,(()=>{var t=`\\`${e}\\` is a library symbol and not included by default; add it to your library.js __deps or to DEFAULT_LIBRARY_FUNCS_TO_INCLUDE on the command line`,n=e;n.startsWith("_")||(n="$"+e),t+=` (e.g. -sDEFAULT_LIBRARY_FUNCS_TO_INCLUDE=\'${n}\')`,ue(e)&&(t+=". Alternatively, forcing filesystem support (-sFORCE_FILESYSTEM) can export this for you"),ge(t)})),le(e)})),["run","addOnPreRun","addOnInit","addOnPreMain","addOnExit","addOnPostRun","addRunDependency","removeRunDependency","out","err","callMain","abort","wasmMemory","writeStackCookie","checkStackCookie","convertI32PairToI53Checked","stackSave","stackRestore","stackAlloc","ptrToString","zeroMemory","getHeapMax","growMemory","ENV","ERRNO_CODES","strError","DNS","Protocols","Sockets","initRandomFill","randomFill","timers","warnOnce","readEmAsmArgsArray","jstoi_s","getExecutableName","asyncLoad","alignMemory","mmapAlloc","wasmTable","noExitRuntime","getCFunc","uleb128Encode","sigToWasmTypes","generateFuncType","convertJsFunctionToWasm","freeTableIndexes","functionsInTableMap","getEmptyTableSlot","updateTableMap","getFunctionAddress","PATH","PATH_FS","UTF8Decoder","UTF8ArrayToString","stringToUTF8Array","lengthBytesUTF8","intArrayFromString","stringToAscii","UTF16Decoder","stringToUTF8OnStack","writeArrayToMemory","JSEvents","specialHTMLTargets","findCanvasEventTarget","currentFullscreenStrategy","restoreOldWindowedStyle","UNWIND_CACHE","ExitStatus","getEnvStrings","doReadv","doWritev","promiseMap","uncaughtExceptionCount","exceptionLast","exceptionCaught","Browser","getPreloadedImageData__data","wget","MONTH_DAYS_REGULAR","MONTH_DAYS_LEAP","MONTH_DAYS_REGULAR_CUMULATIVE","MONTH_DAYS_LEAP_CUMULATIVE","isLeapYear","ydayFromDate","SYSCALLS","preloadPlugins","FS_createPreloadedFile","FS_modeStringToFlags","FS_getMode","FS_stdin_getChar_buffer","FS_stdin_getChar","FS_createPath","FS_createDevice","FS_readFile","FS","FS_createDataFile","FS_createLazyFile","MEMFS","TTY","PIPEFS","SOCKFS","tempFixedLengthArray","miniTempWebGLFloatBuffers","miniTempWebGLIntBuffers","GL","AL","GLUT","EGL","GLEW","IDBStore","SDL","SDL_gfx","allocateUTF8","allocateUTF8OnStack","print","printErr"].forEach(le),$=function e(){it||ht(),it||($=e)},i.preInit)for("function"==typeof i.preInit&&(i.preInit=[i.preInit]);i.preInit.length>0;)i.preInit.pop()();ht(),n=a;for(const e of Object.keys(i))e in t||Object.defineProperty(t,e,{configurable:!0,get(){q(`Access to module property (\'${e}\') is no longer possible via the module constructor argument; Instead, use the result of the module constructor.`)}});return n});const n={EPDF_RenderAnnotBitmap:[["number","number","number","number","number","number"],"boolean"],EPDFAnnot_GenerateAppearance:[["number"],"boolean"],EPDFAnnot_GetBorderDashPattern:[["number","number","number"],"boolean"],EPDFAnnot_GetBorderDashPatternCount:[["number"],"number"],EPDFAnnot_GetBorderEffect:[["number","number"],"boolean"],EPDFAnnot_GetBorderStyle:[["number","number"],"number"],EPDFAnnot_GetColor:[["number","number","number","number","number","number"],"boolean"],EPDFAnnot_GetRectangleDifferences:[["number","number","number","number","number"],"boolean"],EPDFAnnot_SetBorderStyle:[["number","number","number"],"boolean"],EPDFAnnot_SetColor:[["number","number","number","number","number","number"],"boolean"],FORM_CanRedo:[["number","number"],"boolean"],FORM_CanUndo:[["number","number"],"boolean"],FORM_DoDocumentAAction:[["number","number"],null],FORM_DoDocumentJSAction:[["number"],null],FORM_DoDocumentOpenAction:[["number"],null],FORM_DoPageAAction:[["number","number","number"],null],FORM_ForceToKillFocus:[["number"],"boolean"],FORM_GetFocusedAnnot:[["number","number","number"],"boolean"],FORM_GetFocusedText:[["number","number","number","number"],"number"],FORM_GetSelectedText:[["number","number","number","number"],"number"],FORM_IsIndexSelected:[["number","number","number"],"boolean"],FORM_OnAfterLoadPage:[["number","number"],null],FORM_OnBeforeClosePage:[["number","number"],null],FORM_OnChar:[["number","number","number","number"],"boolean"],FORM_OnFocus:[["number","number","number","number","number"],"boolean"],FORM_OnKeyDown:[["number","number","number","number"],"boolean"],FORM_OnKeyUp:[["number","number","number","number"],"boolean"],FORM_OnLButtonDoubleClick:[["number","number","number","number","number"],"boolean"],FORM_OnLButtonDown:[["number","number","number","number","number"],"boolean"],FORM_OnLButtonUp:[["number","number","number","number","number"],"boolean"],FORM_OnMouseMove:[["number","number","number","number","number"],"boolean"],FORM_OnMouseWheel:[["number","number","number","number","number","number"],"boolean"],FORM_OnRButtonDown:[["number","number","number","number","number"],"boolean"],FORM_OnRButtonUp:[["number","number","number","number","number"],"boolean"],FORM_Redo:[["number","number"],"boolean"],FORM_ReplaceAndKeepSelection:[["number","number","number"],null],FORM_ReplaceSelection:[["number","number","number"],null],FORM_SelectAllText:[["number","number"],"boolean"],FORM_SetFocusedAnnot:[["number","number"],"boolean"],FORM_SetIndexSelected:[["number","number","number","boolean"],"boolean"],FORM_Undo:[["number","number"],"boolean"],FPDF_AddInstalledFont:[["number","number","number"],null],FPDF_CloseDocument:[["number"],null],FPDF_ClosePage:[["number"],null],FPDF_CloseXObject:[["number"],null],FPDF_CopyViewerPreferences:[["number","number"],"boolean"],FPDF_CountNamedDests:[["number"],"number"],FPDF_CreateClipPath:[["number","number","number","number"],"number"],FPDF_CreateNewDocument:[[],"number"],FPDF_DestroyClipPath:[["number"],null],FPDF_DestroyLibrary:[[],null],FPDF_DeviceToPage:[["number","number","number","number","number","number","number","number","number","number"],"boolean"],FPDF_DocumentHasValidCrossReferenceTable:[["number"],"boolean"],FPDF_FFLDraw:[["number","number","number","number","number","number","number","number","number"],null],FPDF_FreeDefaultSystemFontInfo:[["number"],null],FPDF_GetDefaultSystemFontInfo:[[],"number"],FPDF_GetDefaultTTFMap:[[],"number"],FPDF_GetDefaultTTFMapCount:[[],"number"],FPDF_GetDefaultTTFMapEntry:[["number"],"number"],FPDF_GetDocPermissions:[["number"],"number"],FPDF_GetDocUserPermissions:[["number"],"number"],FPDF_GetFileIdentifier:[["number","number","number","number"],"number"],FPDF_GetFileVersion:[["number","number"],"boolean"],FPDF_GetFormType:[["number"],"number"],FPDF_GetLastError:[[],"number"],FPDF_GetMetaText:[["number","string","number","number"],"number"],FPDF_GetNamedDest:[["number","number","number","number"],"number"],FPDF_GetNamedDestByName:[["number","string"],"number"],FPDF_GetPageAAction:[["number","number"],"number"],FPDF_GetPageBoundingBox:[["number","number"],"boolean"],FPDF_GetPageCount:[["number"],"number"],FPDF_GetPageHeight:[["number"],"number"],FPDF_GetPageHeightF:[["number"],"number"],FPDF_GetPageLabel:[["number","number","number","number"],"number"],FPDF_GetPageSizeByIndex:[["number","number","number","number"],"number"],FPDF_GetPageSizeByIndexF:[["number","number","number"],"boolean"],FPDF_GetPageWidth:[["number"],"number"],FPDF_GetPageWidthF:[["number"],"number"],FPDF_GetSecurityHandlerRevision:[["number"],"number"],FPDF_GetSignatureCount:[["number"],"number"],FPDF_GetSignatureObject:[["number","number"],"number"],FPDF_GetTrailerEnds:[["number","number","number"],"number"],FPDF_GetXFAPacketContent:[["number","number","number","number","number"],"boolean"],FPDF_GetXFAPacketCount:[["number"],"number"],FPDF_GetXFAPacketName:[["number","number","number","number"],"number"],FPDF_ImportNPagesToOne:[["number","number","number","number","number"],"number"],FPDF_ImportPages:[["number","number","string","number"],"boolean"],FPDF_ImportPagesByIndex:[["number","number","number","number","number"],"boolean"],FPDF_InitLibrary:[[],null],FPDF_InitLibraryWithConfig:[["number"],null],FPDF_LoadCustomDocument:[["number","string"],"number"],FPDF_LoadDocument:[["number","string"],"number"],FPDF_LoadMemDocument:[["number","number","string"],"number"],FPDF_LoadMemDocument64:[["number","number","string"],"number"],FPDF_LoadPage:[["number","number"],"number"],FPDF_LoadXFA:[["number"],"boolean"],FPDF_MovePages:[["number","number","number","number"],"boolean"],FPDF_NewFormObjectFromXObject:[["number"],"number"],FPDF_NewXObjectFromPage:[["number","number","number"],"number"],FPDF_PageToDevice:[["number","number","number","number","number","number","number","number","number","number"],"boolean"],FPDF_RemoveFormFieldHighlight:[["number"],null],FPDF_RenderPage_Close:[["number"],null],FPDF_RenderPage_Continue:[["number","number"],"number"],FPDF_RenderPageBitmap:[["number","number","number","number","number","number","number","number"],null],FPDF_RenderPageBitmap_Start:[["number","number","number","number","number","number","number","number","number"],"number"],FPDF_RenderPageBitmapWithColorScheme_Start:[["number","number","number","number","number","number","number","number","number","number"],"number"],FPDF_RenderPageBitmapWithMatrix:[["number","number","number","number","number"],null],FPDF_SaveAsCopy:[["number","number","number"],"boolean"],FPDF_SaveWithVersion:[["number","number","number","number"],"boolean"],FPDF_SetFormFieldHighlightAlpha:[["number","number"],null],FPDF_SetFormFieldHighlightColor:[["number","number","number"],null],FPDF_SetSandBoxPolicy:[["number","boolean"],null],FPDF_SetSystemFontInfo:[["number"],null],FPDF_StructElement_Attr_CountChildren:[["number"],"number"],FPDF_StructElement_Attr_GetBlobValue:[["number","number","number","number"],"boolean"],FPDF_StructElement_Attr_GetBooleanValue:[["number","number"],"boolean"],FPDF_StructElement_Attr_GetChildAtIndex:[["number","number"],"number"],FPDF_StructElement_Attr_GetCount:[["number"],"number"],FPDF_StructElement_Attr_GetName:[["number","number","number","number","number"],"boolean"],FPDF_StructElement_Attr_GetNumberValue:[["number","number"],"boolean"],FPDF_StructElement_Attr_GetStringValue:[["number","number","number","number"],"boolean"],FPDF_StructElement_Attr_GetType:[["number"],"number"],FPDF_StructElement_Attr_GetValue:[["number","string"],"number"],FPDF_StructElement_CountChildren:[["number"],"number"],FPDF_StructElement_GetActualText:[["number","number","number"],"number"],FPDF_StructElement_GetAltText:[["number","number","number"],"number"],FPDF_StructElement_GetAttributeAtIndex:[["number","number"],"number"],FPDF_StructElement_GetAttributeCount:[["number"],"number"],FPDF_StructElement_GetChildAtIndex:[["number","number"],"number"],FPDF_StructElement_GetChildMarkedContentID:[["number","number"],"number"],FPDF_StructElement_GetID:[["number","number","number"],"number"],FPDF_StructElement_GetLang:[["number","number","number"],"number"],FPDF_StructElement_GetMarkedContentID:[["number"],"number"],FPDF_StructElement_GetMarkedContentIdAtIndex:[["number","number"],"number"],FPDF_StructElement_GetMarkedContentIdCount:[["number"],"number"],FPDF_StructElement_GetObjType:[["number","number","number"],"number"],FPDF_StructElement_GetParent:[["number"],"number"],FPDF_StructElement_GetStringAttribute:[["number","string","number","number"],"number"],FPDF_StructElement_GetTitle:[["number","number","number"],"number"],FPDF_StructElement_GetType:[["number","number","number"],"number"],FPDF_StructTree_Close:[["number"],null],FPDF_StructTree_CountChildren:[["number"],"number"],FPDF_StructTree_GetChildAtIndex:[["number","number"],"number"],FPDF_StructTree_GetForPage:[["number"],"number"],FPDF_VIEWERREF_GetDuplex:[["number"],"number"],FPDF_VIEWERREF_GetName:[["number","string","number","number"],"number"],FPDF_VIEWERREF_GetNumCopies:[["number"],"number"],FPDF_VIEWERREF_GetPrintPageRange:[["number"],"number"],FPDF_VIEWERREF_GetPrintPageRangeCount:[["number"],"number"],FPDF_VIEWERREF_GetPrintPageRangeElement:[["number","number"],"number"],FPDF_VIEWERREF_GetPrintScaling:[["number"],"boolean"],FPDFAction_GetDest:[["number","number"],"number"],FPDFAction_GetFilePath:[["number","number","number"],"number"],FPDFAction_GetType:[["number"],"number"],FPDFAction_GetURIPath:[["number","number","number","number"],"number"],FPDFAnnot_AddFileAttachment:[["number","number"],"number"],FPDFAnnot_AddInkStroke:[["number","number","number"],"number"],FPDFAnnot_AppendAttachmentPoints:[["number","number"],"boolean"],FPDFAnnot_AppendObject:[["number","number"],"boolean"],FPDFAnnot_CountAttachmentPoints:[["number"],"number"],FPDFAnnot_GetAP:[["number","number","number","number"],"number"],FPDFAnnot_GetAttachmentPoints:[["number","number","number"],"boolean"],FPDFAnnot_GetBorder:[["number","number","number","number"],"boolean"],FPDFAnnot_GetColor:[["number","number","number","number","number","number"],"boolean"],FPDFAnnot_GetFileAttachment:[["number"],"number"],FPDFAnnot_GetFlags:[["number"],"number"],FPDFAnnot_GetFocusableSubtypes:[["number","number","number"],"boolean"],FPDFAnnot_GetFocusableSubtypesCount:[["number"],"number"],FPDFAnnot_GetFontColor:[["number","number","number","number","number"],"boolean"],FPDFAnnot_GetFontSize:[["number","number","number"],"boolean"],FPDFAnnot_GetFormAdditionalActionJavaScript:[["number","number","number","number","number"],"number"],FPDFAnnot_GetFormControlCount:[["number","number"],"number"],FPDFAnnot_GetFormControlIndex:[["number","number"],"number"],FPDFAnnot_GetFormFieldAlternateName:[["number","number","number","number"],"number"],FPDFAnnot_GetFormFieldAtPoint:[["number","number","number"],"number"],FPDFAnnot_GetFormFieldExportValue:[["number","number","number","number"],"number"],FPDFAnnot_GetFormFieldFlags:[["number","number"],"number"],FPDFAnnot_GetFormFieldName:[["number","number","number","number"],"number"],FPDFAnnot_GetFormFieldType:[["number","number"],"number"],FPDFAnnot_GetFormFieldValue:[["number","number","number","number"],"number"],FPDFAnnot_GetInkListCount:[["number"],"number"],FPDFAnnot_GetInkListPath:[["number","number","number","number"],"number"],FPDFAnnot_GetLine:[["number","number","number"],"boolean"],FPDFAnnot_GetLink:[["number"],"number"],FPDFAnnot_GetLinkedAnnot:[["number","string"],"number"],FPDFAnnot_GetNumberValue:[["number","string","number"],"boolean"],FPDFAnnot_GetObject:[["number","number"],"number"],FPDFAnnot_GetObjectCount:[["number"],"number"],FPDFAnnot_GetOptionCount:[["number","number"],"number"],FPDFAnnot_GetOptionLabel:[["number","number","number","number","number"],"number"],FPDFAnnot_GetRect:[["number","number"],"boolean"],FPDFAnnot_GetStringValue:[["number","string","number","number"],"number"],FPDFAnnot_GetSubtype:[["number"],"number"],FPDFAnnot_GetValueType:[["number","string"],"number"],FPDFAnnot_GetVertices:[["number","number","number"],"number"],FPDFAnnot_HasAttachmentPoints:[["number"],"boolean"],FPDFAnnot_HasKey:[["number","string"],"boolean"],FPDFAnnot_IsChecked:[["number","number"],"boolean"],FPDFAnnot_IsObjectSupportedSubtype:[["number"],"boolean"],FPDFAnnot_IsOptionSelected:[["number","number","number"],"boolean"],FPDFAnnot_IsSupportedSubtype:[["number"],"boolean"],FPDFAnnot_RemoveInkList:[["number"],"boolean"],FPDFAnnot_RemoveObject:[["number","number"],"boolean"],FPDFAnnot_SetAP:[["number","number","number"],"boolean"],FPDFAnnot_SetAttachmentPoints:[["number","number","number"],"boolean"],FPDFAnnot_SetBorder:[["number","number","number","number"],"boolean"],FPDFAnnot_SetColor:[["number","number","number","number","number","number"],"boolean"],FPDFAnnot_SetFlags:[["number","number"],"boolean"],FPDFAnnot_SetFocusableSubtypes:[["number","number","number"],"boolean"],FPDFAnnot_SetFontColor:[["number","number","number","number","number"],"boolean"],FPDFAnnot_SetFormFieldFlags:[["number","number","number"],"boolean"],FPDFAnnot_SetRect:[["number","number"],"boolean"],FPDFAnnot_SetStringValue:[["number","string","number"],"boolean"],FPDFAnnot_SetURI:[["number","number"],"boolean"],FPDFAnnot_UpdateObject:[["number","number"],"boolean"],FPDFAttachment_GetFile:[["number","number","number","number"],"boolean"],FPDFAttachment_GetName:[["number","number","number"],"number"],FPDFAttachment_GetStringValue:[["number","string","number","number"],"number"],FPDFAttachment_GetSubtype:[["number","number","number"],"number"],FPDFAttachment_GetValueType:[["number","string"],"number"],FPDFAttachment_HasKey:[["number","string"],"boolean"],FPDFAttachment_SetFile:[["number","number","number","number"],"boolean"],FPDFAttachment_SetStringValue:[["number","string","number"],"boolean"],FPDFAvail_Create:[["number","number"],"number"],FPDFAvail_Destroy:[["number"],null],FPDFAvail_GetDocument:[["number","string"],"number"],FPDFAvail_GetFirstPageNum:[["number"],"number"],FPDFAvail_IsDocAvail:[["number","number"],"number"],FPDFAvail_IsFormAvail:[["number","number"],"number"],FPDFAvail_IsLinearized:[["number"],"number"],FPDFAvail_IsPageAvail:[["number","number","number"],"number"],FPDFBitmap_Create:[["number","number","number"],"number"],FPDFBitmap_CreateEx:[["number","number","number","number","number"],"number"],FPDFBitmap_Destroy:[["number"],null],FPDFBitmap_FillRect:[["number","number","number","number","number","number"],"boolean"],FPDFBitmap_GetBuffer:[["number"],"number"],FPDFBitmap_GetFormat:[["number"],"number"],FPDFBitmap_GetHeight:[["number"],"number"],FPDFBitmap_GetStride:[["number"],"number"],FPDFBitmap_GetWidth:[["number"],"number"],FPDFBookmark_Find:[["number","number"],"number"],FPDFBookmark_GetAction:[["number"],"number"],FPDFBookmark_GetCount:[["number"],"number"],FPDFBookmark_GetDest:[["number","number"],"number"],FPDFBookmark_GetFirstChild:[["number","number"],"number"],FPDFBookmark_GetNextSibling:[["number","number"],"number"],FPDFBookmark_GetTitle:[["number","number","number"],"number"],FPDFCatalog_IsTagged:[["number"],"boolean"],FPDFCatalog_SetLanguage:[["number","string"],"boolean"],FPDFClipPath_CountPaths:[["number"],"number"],FPDFClipPath_CountPathSegments:[["number","number"],"number"],FPDFClipPath_GetPathSegment:[["number","number","number"],"number"],FPDFDest_GetDestPageIndex:[["number","number"],"number"],FPDFDest_GetLocationInPage:[["number","number","number","number","number","number","number"],"boolean"],FPDFDest_GetView:[["number","number","number"],"number"],FPDFDoc_AddAttachment:[["number","number"],"number"],FPDFDoc_CloseJavaScriptAction:[["number"],null],FPDFDoc_DeleteAttachment:[["number","number"],"boolean"],FPDFDOC_ExitFormFillEnvironment:[["number"],null],FPDFDoc_GetAttachment:[["number","number"],"number"],FPDFDoc_GetAttachmentCount:[["number"],"number"],FPDFDoc_GetJavaScriptAction:[["number","number"],"number"],FPDFDoc_GetJavaScriptActionCount:[["number"],"number"],FPDFDoc_GetPageMode:[["number"],"number"],FPDFDOC_InitFormFillEnvironment:[["number","number"],"number"],FPDFFont_Close:[["number"],null],FPDFFont_GetAscent:[["number","number","number"],"boolean"],FPDFFont_GetBaseFontName:[["number","number","number"],"number"],FPDFFont_GetDescent:[["number","number","number"],"boolean"],FPDFFont_GetFamilyName:[["number","number","number"],"number"],FPDFFont_GetFlags:[["number"],"number"],FPDFFont_GetFontData:[["number","number","number","number"],"boolean"],FPDFFont_GetGlyphPath:[["number","number","number"],"number"],FPDFFont_GetGlyphWidth:[["number","number","number","number"],"boolean"],FPDFFont_GetIsEmbedded:[["number"],"number"],FPDFFont_GetItalicAngle:[["number","number"],"boolean"],FPDFFont_GetWeight:[["number"],"number"],FPDFFormObj_CountObjects:[["number"],"number"],FPDFFormObj_GetObject:[["number","number"],"number"],FPDFFormObj_RemoveObject:[["number","number"],"boolean"],FPDFGlyphPath_CountGlyphSegments:[["number"],"number"],FPDFGlyphPath_GetGlyphPathSegment:[["number","number"],"number"],FPDFImageObj_GetBitmap:[["number"],"number"],FPDFImageObj_GetIccProfileDataDecoded:[["number","number","number","number","number"],"boolean"],FPDFImageObj_GetImageDataDecoded:[["number","number","number"],"number"],FPDFImageObj_GetImageDataRaw:[["number","number","number"],"number"],FPDFImageObj_GetImageFilter:[["number","number","number","number"],"number"],FPDFImageObj_GetImageFilterCount:[["number"],"number"],FPDFImageObj_GetImageMetadata:[["number","number","number"],"boolean"],FPDFImageObj_GetImagePixelSize:[["number","number","number"],"boolean"],FPDFImageObj_GetRenderedBitmap:[["number","number","number"],"number"],FPDFImageObj_LoadJpegFile:[["number","number","number","number"],"boolean"],FPDFImageObj_LoadJpegFileInline:[["number","number","number","number"],"boolean"],FPDFImageObj_SetBitmap:[["number","number","number","number"],"boolean"],FPDFImageObj_SetMatrix:[["number","number","number","number","number","number","number"],"boolean"],FPDFJavaScriptAction_GetName:[["number","number","number"],"number"],FPDFJavaScriptAction_GetScript:[["number","number","number"],"number"],FPDFLink_CloseWebLinks:[["number"],null],FPDFLink_CountQuadPoints:[["number"],"number"],FPDFLink_CountRects:[["number","number"],"number"],FPDFLink_CountWebLinks:[["number"],"number"],FPDFLink_Enumerate:[["number","number","number"],"boolean"],FPDFLink_GetAction:[["number"],"number"],FPDFLink_GetAnnot:[["number","number"],"number"],FPDFLink_GetAnnotRect:[["number","number"],"boolean"],FPDFLink_GetDest:[["number","number"],"number"],FPDFLink_GetLinkAtPoint:[["number","number","number"],"number"],FPDFLink_GetLinkZOrderAtPoint:[["number","number","number"],"number"],FPDFLink_GetQuadPoints:[["number","number","number"],"boolean"],FPDFLink_GetRect:[["number","number","number","number","number","number","number"],"boolean"],FPDFLink_GetTextRange:[["number","number","number","number"],"boolean"],FPDFLink_GetURL:[["number","number","number","number"],"number"],FPDFLink_LoadWebLinks:[["number"],"number"],FPDFPage_CloseAnnot:[["number"],null],FPDFPage_CountObjects:[["number"],"number"],FPDFPage_CreateAnnot:[["number","number"],"number"],FPDFPage_Delete:[["number","number"],null],FPDFPage_Flatten:[["number","number"],"number"],FPDFPage_FormFieldZOrderAtPoint:[["number","number","number","number"],"number"],FPDFPage_GenerateContent:[["number"],"boolean"],FPDFPage_GetAnnot:[["number","number"],"number"],FPDFPage_GetAnnotCount:[["number"],"number"],FPDFPage_GetAnnotIndex:[["number","number"],"number"],FPDFPage_GetArtBox:[["number","number","number","number","number"],"boolean"],FPDFPage_GetBleedBox:[["number","number","number","number","number"],"boolean"],FPDFPage_GetCropBox:[["number","number","number","number","number"],"boolean"],FPDFPage_GetDecodedThumbnailData:[["number","number","number"],"number"],FPDFPage_GetMediaBox:[["number","number","number","number","number"],"boolean"],FPDFPage_GetObject:[["number","number"],"number"],FPDFPage_GetRawThumbnailData:[["number","number","number"],"number"],FPDFPage_GetRotation:[["number"],"number"],FPDFPage_GetThumbnailAsBitmap:[["number"],"number"],FPDFPage_GetTrimBox:[["number","number","number","number","number"],"boolean"],FPDFPage_HasFormFieldAtPoint:[["number","number","number","number"],"number"],FPDFPage_HasTransparency:[["number"],"boolean"],FPDFPage_InsertClipPath:[["number","number"],null],FPDFPage_InsertObject:[["number","number"],null],FPDFPage_InsertObjectAtIndex:[["number","number","number"],"boolean"],FPDFPage_New:[["number","number","number","number"],"number"],FPDFPage_RemoveAnnot:[["number","number"],"boolean"],FPDFPage_RemoveObject:[["number","number"],"boolean"],FPDFPage_SetArtBox:[["number","number","number","number","number"],null],FPDFPage_SetBleedBox:[["number","number","number","number","number"],null],FPDFPage_SetCropBox:[["number","number","number","number","number"],null],FPDFPage_SetMediaBox:[["number","number","number","number","number"],null],FPDFPage_SetRotation:[["number","number"],null],FPDFPage_SetTrimBox:[["number","number","number","number","number"],null],FPDFPage_TransformAnnots:[["number","number","number","number","number","number","number"],null],FPDFPage_TransFormWithClip:[["number","number","number"],"boolean"],FPDFPageObj_AddMark:[["number","string"],"number"],FPDFPageObj_CountMarks:[["number"],"number"],FPDFPageObj_CreateNewPath:[["number","number"],"number"],FPDFPageObj_CreateNewRect:[["number","number","number","number"],"number"],FPDFPageObj_CreateTextObj:[["number","number","number"],"number"],FPDFPageObj_Destroy:[["number"],null],FPDFPageObj_GetBounds:[["number","number","number","number","number"],"boolean"],FPDFPageObj_GetClipPath:[["number"],"number"],FPDFPageObj_GetDashArray:[["number","number","number"],"boolean"],FPDFPageObj_GetDashCount:[["number"],"number"],FPDFPageObj_GetDashPhase:[["number","number"],"boolean"],FPDFPageObj_GetFillColor:[["number","number","number","number","number"],"boolean"],FPDFPageObj_GetIsActive:[["number","number"],"boolean"],FPDFPageObj_GetLineCap:[["number"],"number"],FPDFPageObj_GetLineJoin:[["number"],"number"],FPDFPageObj_GetMark:[["number","number"],"number"],FPDFPageObj_GetMarkedContentID:[["number"],"number"],FPDFPageObj_GetMatrix:[["number","number"],"boolean"],FPDFPageObj_GetRotatedBounds:[["number","number"],"boolean"],FPDFPageObj_GetStrokeColor:[["number","number","number","number","number"],"boolean"],FPDFPageObj_GetStrokeWidth:[["number","number"],"boolean"],FPDFPageObj_GetType:[["number"],"number"],FPDFPageObj_HasTransparency:[["number"],"boolean"],FPDFPageObj_NewImageObj:[["number"],"number"],FPDFPageObj_NewTextObj:[["number","string","number"],"number"],FPDFPageObj_RemoveMark:[["number","number"],"boolean"],FPDFPageObj_SetBlendMode:[["number","string"],null],FPDFPageObj_SetDashArray:[["number","number","number","number"],"boolean"],FPDFPageObj_SetDashPhase:[["number","number"],"boolean"],FPDFPageObj_SetFillColor:[["number","number","number","number","number"],"boolean"],FPDFPageObj_SetIsActive:[["number","boolean"],"boolean"],FPDFPageObj_SetLineCap:[["number","number"],"boolean"],FPDFPageObj_SetLineJoin:[["number","number"],"boolean"],FPDFPageObj_SetMatrix:[["number","number"],"boolean"],FPDFPageObj_SetStrokeColor:[["number","number","number","number","number"],"boolean"],FPDFPageObj_SetStrokeWidth:[["number","number"],"boolean"],FPDFPageObj_Transform:[["number","number","number","number","number","number","number"],null],FPDFPageObj_TransformClipPath:[["number","number","number","number","number","number","number"],null],FPDFPageObj_TransformF:[["number","number"],"boolean"],FPDFPageObjMark_CountParams:[["number"],"number"],FPDFPageObjMark_GetName:[["number","number","number","number"],"boolean"],FPDFPageObjMark_GetParamBlobValue:[["number","string","number","number","number"],"boolean"],FPDFPageObjMark_GetParamIntValue:[["number","string","number"],"boolean"],FPDFPageObjMark_GetParamKey:[["number","number","number","number","number"],"boolean"],FPDFPageObjMark_GetParamStringValue:[["number","string","number","number","number"],"boolean"],FPDFPageObjMark_GetParamValueType:[["number","string"],"number"],FPDFPageObjMark_RemoveParam:[["number","number","string"],"boolean"],FPDFPageObjMark_SetBlobParam:[["number","number","number","string","number","number"],"boolean"],FPDFPageObjMark_SetIntParam:[["number","number","number","string","number"],"boolean"],FPDFPageObjMark_SetStringParam:[["number","number","number","string","string"],"boolean"],FPDFPath_BezierTo:[["number","number","number","number","number","number","number"],"boolean"],FPDFPath_Close:[["number"],"boolean"],FPDFPath_CountSegments:[["number"],"number"],FPDFPath_GetDrawMode:[["number","number","number"],"boolean"],FPDFPath_GetPathSegment:[["number","number"],"number"],FPDFPath_LineTo:[["number","number","number"],"boolean"],FPDFPath_MoveTo:[["number","number","number"],"boolean"],FPDFPath_SetDrawMode:[["number","number","boolean"],"boolean"],FPDFPathSegment_GetClose:[["number"],"boolean"],FPDFPathSegment_GetPoint:[["number","number","number"],"boolean"],FPDFPathSegment_GetType:[["number"],"number"],FPDFSignatureObj_GetByteRange:[["number","number","number"],"number"],FPDFSignatureObj_GetContents:[["number","number","number"],"number"],FPDFSignatureObj_GetDocMDPPermission:[["number"],"number"],FPDFSignatureObj_GetReason:[["number","number","number"],"number"],FPDFSignatureObj_GetSubFilter:[["number","number","number"],"number"],FPDFSignatureObj_GetTime:[["number","number","number"],"number"],FPDFText_ClosePage:[["number"],null],FPDFText_CountChars:[["number"],"number"],FPDFText_CountRects:[["number","number","number"],"number"],FPDFText_FindClose:[["number"],null],FPDFText_FindNext:[["number"],"boolean"],FPDFText_FindPrev:[["number"],"boolean"],FPDFText_FindStart:[["number","number","number","number"],"number"],FPDFText_GetBoundedText:[["number","number","number","number","number","number","number"],"number"],FPDFText_GetCharAngle:[["number","number"],"number"],FPDFText_GetCharBox:[["number","number","number","number","number","number"],"boolean"],FPDFText_GetCharIndexAtPos:[["number","number","number","number","number"],"number"],FPDFText_GetCharIndexFromTextIndex:[["number","number"],"number"],FPDFText_GetCharOrigin:[["number","number","number","number"],"boolean"],FPDFText_GetFillColor:[["number","number","number","number","number","number"],"boolean"],FPDFText_GetFontInfo:[["number","number","number","number","number"],"number"],FPDFText_GetFontSize:[["number","number"],"number"],FPDFText_GetFontWeight:[["number","number"],"number"],FPDFText_GetLooseCharBox:[["number","number","number"],"boolean"],FPDFText_GetMatrix:[["number","number","number"],"boolean"],FPDFText_GetRect:[["number","number","number","number","number","number"],"boolean"],FPDFText_GetSchCount:[["number"],"number"],FPDFText_GetSchResultIndex:[["number"],"number"],FPDFText_GetStrokeColor:[["number","number","number","number","number","number"],"boolean"],FPDFText_GetText:[["number","number","number","number"],"number"],FPDFText_GetTextIndexFromCharIndex:[["number","number"],"number"],FPDFText_GetTextObject:[["number","number"],"number"],FPDFText_GetUnicode:[["number","number"],"number"],FPDFText_HasUnicodeMapError:[["number","number"],"number"],FPDFText_IsGenerated:[["number","number"],"number"],FPDFText_IsHyphen:[["number","number"],"number"],FPDFText_LoadCidType2Font:[["number","number","number","string","number","number"],"number"],FPDFText_LoadFont:[["number","number","number","number","boolean"],"number"],FPDFText_LoadPage:[["number"],"number"],FPDFText_LoadStandardFont:[["number","string"],"number"],FPDFText_SetCharcodes:[["number","number","number"],"boolean"],FPDFText_SetText:[["number","number"],"boolean"],FPDFTextObj_GetFont:[["number"],"number"],FPDFTextObj_GetFontSize:[["number","number"],"boolean"],FPDFTextObj_GetRenderedBitmap:[["number","number","number","number"],"number"],FPDFTextObj_GetText:[["number","number","number","number"],"number"],FPDFTextObj_GetTextRenderMode:[["number"],"number"],FPDFTextObj_SetTextRenderMode:[["number","number"],"boolean"],PDFiumExt_CloseFileWriter:[["number"],null],PDFiumExt_CloseFormFillInfo:[["number"],null],PDFiumExt_ExitFormFillEnvironment:[["number"],null],PDFiumExt_GetFileWriterData:[["number","number","number"],"number"],PDFiumExt_GetFileWriterSize:[["number"],"number"],PDFiumExt_Init:[[],null],PDFiumExt_InitFormFillEnvironment:[["number","number"],"number"],PDFiumExt_OpenFileWriter:[[],"number"],PDFiumExt_OpenFormFillInfo:[[],"number"],PDFiumExt_SaveAsCopy:[["number","number"],"number"]};async function r(e){return async function(e){const t={pdfium:e};for(const r in n){const o=r,i=n[o][0],a=n[o][1];t[o]=e.cwrap(r,a,i)}return t}(await t(e))}var o=(e=>(e[e.Degree0=0]="Degree0",e[e.Degree90=1]="Degree90",e[e.Degree180=2]="Degree180",e[e.Degree270=3]="Degree270",e))(o||{});function i(e){return{width:Math.ceil(e.width),height:Math.ceil(e.height)}}function a(e){return{origin:(t=e.origin,{x:Math.floor(t.x),y:Math.floor(t.y)}),size:i(e.size)};var t}function s(e){const{width:t,height:n}=e;return{width:n,height:t}}function u(e){const t=[e.p1.x,e.p2.x,e.p3.x,e.p4.x],n=[e.p1.y,e.p2.y,e.p3.y,e.p4.y];return{origin:{x:Math.min(...t),y:Math.min(...n)},size:{width:Math.max(...t)-Math.min(...t),height:Math.max(...n)-Math.min(...n)}}}function F(e,t,n,r){return function(e,t){return{origin:{x:e.origin.x*t,y:e.origin.y*t},size:{width:e.size.width*t,height:e.size.height*t}}}(function(e,t,n){let r=t.origin.x,o=t.origin.y,i=t.size;switch(n){case 0:break;case 1:r=e.height-t.origin.y-t.size.height,o=t.origin.x,i=s(t.size);break;case 2:r=e.width-t.origin.x-t.size.width,o=e.height-t.origin.y-t.size.height;break;case 3:r=t.origin.y,o=e.width-t.origin.x-t.size.width,i=s(t.size)}return{origin:{x:r,y:o},size:{width:i.width,height:i.height}}}(e,t,n),r)}var m=class{debug(){}info(){}warn(){}error(){}perf(){}},l=class extends Error{constructor(e){super(`Task aborted: ${JSON.stringify(e)}`),this.name="TaskAbortedError"}},d=class extends Error{constructor(e){super(`Task rejected: ${JSON.stringify(e)}`),this.name="TaskRejectedError"}},_=class e{constructor(){this.state={stage:0},this.resolvedCallbacks=[],this.rejectedCallbacks=[],this._promise=null}toPromise(){return this._promise||(this._promise=new Promise(((e,t)=>{this.wait((t=>e(t)),(e=>{"abort"===e.type?t(new l(e.reason)):t(new d(e.reason))}))}))),this._promise}wait(e,t){switch(this.state.stage){case 0:this.resolvedCallbacks.push(e),this.rejectedCallbacks.push(t);break;case 1:e(this.state.result);break;case 2:t({type:"reject",reason:this.state.reason});break;case 3:t({type:"abort",reason:this.state.reason})}}resolve(e){if(0===this.state.stage){this.state={stage:1,result:e};for(const t of this.resolvedCallbacks)try{t(e)}catch(e){}this.resolvedCallbacks=[],this.rejectedCallbacks=[]}}reject(e){if(0===this.state.stage){this.state={stage:2,reason:e};for(const t of this.rejectedCallbacks)try{t({type:"reject",reason:e})}catch(e){}this.resolvedCallbacks=[],this.rejectedCallbacks=[]}}abort(e){if(0===this.state.stage){this.state={stage:3,reason:e};for(const t of this.rejectedCallbacks)try{t({type:"abort",reason:e})}catch(e){}this.resolvedCallbacks=[],this.rejectedCallbacks=[]}}fail(e){"abort"===e.type?this.abort(e.reason):this.reject(e.reason)}static all(t){const n=new e;if(0===t.length)return n.resolve([]),n;const r=new Array(t.length);let o=0,i=!1;return t.forEach(((e,a)=>{e.wait((e=>{i||(r[a]=e,o++,o===t.length&&(i=!0,n.resolve(r)))}),(e=>{i||(i=!0,"abort"===e.type?n.abort(e.reason):n.reject(e.reason))}))})),n}static allSettled(t){const n=new e;if(0===t.length)return n.resolve([]),n;const r=new Array(t.length);let o=0;return t.forEach(((e,i)=>{e.wait((e=>{r[i]={status:"resolved",value:e},o++,o===t.length&&n.resolve(r)}),(e=>{r[i]={status:"abort"===e.type?"aborted":"rejected",reason:e.reason},o++,o===t.length&&n.resolve(r)}))})),n}static race(t){const n=new e;if(0===t.length)return n.reject("No tasks provided"),n;let r=!1;return t.forEach((e=>{e.wait((e=>{r||(r=!0,n.resolve(e))}),(e=>{r||(r=!0,"abort"===e.type?n.abort(e.reason):n.reject(e.reason))}))})),n}static withProgress(t,n){const r=e.all(t);if(n){let e=0;t.forEach((r=>{r.wait((()=>{e++,n(e,t.length)}),(()=>{e++,n(e,t.length)}))}))}return r}},P=Object.freeze(["\xAD","\u200B","\u2060","\\ufeff","\uFFFE","\uFFFF"]),c=new RegExp(`[${P.join("")}]`,"g");var g=(e=>(e[e.Unknown=0]="Unknown",e[e.XYZ=1]="XYZ",e[e.FitPage=2]="FitPage",e[e.FitHorizontal=3]="FitHorizontal",e[e.FitVertical=4]="FitVertical",e[e.FitRectangle=5]="FitRectangle",e))(g||{}),h=(e=>(e[e.Unsupported=0]="Unsupported",e[e.Goto=1]="Goto",e[e.RemoteGoto=2]="RemoteGoto",e[e.URI=3]="URI",e[e.LaunchAppOrOpenFile=4]="LaunchAppOrOpenFile",e))(h||{}),D=(e=>(e[e.UNKNOWN=0]="UNKNOWN",e[e.TEXT=1]="TEXT",e[e.LINK=2]="LINK",e[e.FREETEXT=3]="FREETEXT",e[e.LINE=4]="LINE",e[e.SQUARE=5]="SQUARE",e[e.CIRCLE=6]="CIRCLE",e[e.POLYGON=7]="POLYGON",e[e.POLYLINE=8]="POLYLINE",e[e.HIGHLIGHT=9]="HIGHLIGHT",e[e.UNDERLINE=10]="UNDERLINE",e[e.SQUIGGLY=11]="SQUIGGLY",e[e.STRIKEOUT=12]="STRIKEOUT",e[e.STAMP=13]="STAMP",e[e.CARET=14]="CARET",e[e.INK=15]="INK",e[e.POPUP=16]="POPUP",e[e.FILEATTACHMENT=17]="FILEATTACHMENT",e[e.SOUND=18]="SOUND",e[e.MOVIE=19]="MOVIE",e[e.WIDGET=20]="WIDGET",e[e.SCREEN=21]="SCREEN",e[e.PRINTERMARK=22]="PRINTERMARK",e[e.TRAPNET=23]="TRAPNET",e[e.WATERMARK=24]="WATERMARK",e[e.THREED=25]="THREED",e[e.RICHMEDIA=26]="RICHMEDIA",e[e.XFAWIDGET=27]="XFAWIDGET",e[e.REDACT=28]="REDACT",e))(D||{}),b=(e=>(e[e.Normal=0]="Normal",e[e.Rollover=1]="Rollover",e[e.Down=2]="Down",e))(b||{}),p=(e=>(e[e.UNKNOWN=0]="UNKNOWN",e[e.PUSHBUTTON=1]="PUSHBUTTON",e[e.CHECKBOX=2]="CHECKBOX",e[e.RADIOBUTTON=3]="RADIOBUTTON",e[e.COMBOBOX=4]="COMBOBOX",e[e.LISTBOX=5]="LISTBOX",e[e.TEXTFIELD=6]="TEXTFIELD",e[e.SIGNATURE=7]="SIGNATURE",e[e.XFA=8]="XFA",e[e.XFA_CHECKBOX=9]="XFA_CHECKBOX",e[e.XFA_COMBOBOX=10]="XFA_COMBOBOX",e[e.XFA_IMAGEFIELD=11]="XFA_IMAGEFIELD",e[e.XFA_LISTBOX=12]="XFA_LISTBOX",e[e.XFA_PUSHBUTTON=13]="XFA_PUSHBUTTON",e[e.XFA_SIGNATURE=14]="XFA_SIGNATURE",e[e.XFA_TEXTFIELD=15]="XFA_TEXTFIELD",e))(p||{}),f=(e=>(e[e.Color=0]="Color",e[e.InteriorColor=1]="InteriorColor",e))(f||{}),A=(e=>(e[e.UNKNOWN=0]="UNKNOWN",e[e.SOLID=1]="SOLID",e[e.DASHED=2]="DASHED",e[e.BEVELED=3]="BEVELED",e[e.INSET=4]="INSET",e[e.UNDERLINE=5]="UNDERLINE",e[e.CLOUDY=6]="CLOUDY",e))(A||{}),E=(e=>(e[e.UNKNOWN=0]="UNKNOWN",e[e.TEXT=1]="TEXT",e[e.PATH=2]="PATH",e[e.IMAGE=3]="IMAGE",e[e.SHADING=4]="SHADING",e[e.FORM=5]="FORM",e))(E||{}),G=Object.freeze({1:"invisible",2:"hidden",4:"print",8:"noZoom",16:"noRotate",32:"noView",64:"readOnly",128:"locked",256:"toggleNoView"});Object.entries(G).reduce(((e,[t,n])=>(e[n]=Number(t),e)),{});var S=(e=>(e[e.None=0]="None",e[e.MatchCase=1]="MatchCase",e[e.MatchWholeWord=2]="MatchWholeWord",e[e.MatchConsecutive=4]="MatchConsecutive",e))(S||{}),C=(e=>(e[e.Ok=0]="Ok",e[e.Unknown=1]="Unknown",e[e.NotFound=2]="NotFound",e[e.WrongFormat=3]="WrongFormat",e[e.Password=4]="Password",e[e.Security=5]="Security",e[e.PageError=6]="PageError",e[e.XFALoad=7]="XFALoad",e[e.XFALayout=8]="XFALayout",e[e.Cancelled=9]="Cancelled",e[e.Initialization=10]="Initialization",e[e.NotReady=11]="NotReady",e[e.NotSupport=12]="NotSupport",e[e.LoadDoc=13]="LoadDoc",e[e.DocNotOpen=14]="DocNotOpen",e[e.CantCloseDoc=15]="CantCloseDoc",e[e.CantCreateNewDoc=16]="CantCreateNewDoc",e[e.CantImportPages=17]="CantImportPages",e[e.CantCreateAnnot=18]="CantCreateAnnot",e[e.CantSetAnnotRect=19]="CantSetAnnotRect",e[e.CantSetAnnotContent=20]="CantSetAnnotContent",e[e.CantRemoveInkList=21]="CantRemoveInkList",e[e.CantAddInkStoke=22]="CantAddInkStoke",e[e.CantReadAttachmentSize=23]="CantReadAttachmentSize",e[e.CantReadAttachmentContent=24]="CantReadAttachmentContent",e[e.CantFocusAnnot=25]="CantFocusAnnot",e[e.CantSelectText=26]="CantSelectText",e[e.CantSelectOption=27]="CantSelectOption",e[e.CantCheckField=28]="CantCheckField",e))(C||{}),y=class{static create(){return new _}static resolve(e){const t=new _;return t.resolve(e),t}static reject(e){const t=new _;return t.reject(e),t}static abort(e){const t=new _;return t.reject(e),t}};function T(e){if(!e?.startsWith("D:")||e.length<16)return;const t=+e.slice(2,6),n=+e.slice(6,8)-1,r=+e.slice(8,10),o=+e.slice(10,12),i=+e.slice(12,14),a=+e.slice(14,16);return new Date(Date.UTC(t,n,r,o,i,a))}function M(e=new Date){const t=(e,t=2)=>e.toString().padStart(t,"0");return`D:${e.getUTCFullYear()}${t(e.getUTCMonth()+1)}${t(e.getUTCDate())}${t(e.getUTCHours())}${t(e.getUTCMinutes())}${t(e.getUTCSeconds())}`}const O="WebWorkerEngineRunner",v="Engine";class x{constructor(e=new m){this.logger=e,this.execute=e=>{if(this.logger.debug(O,v,"runner start exeucte request"),!this.engine){const t={type:"reject",reason:{code:C.NotReady,message:"engine has not started yet"}},n={id:e.id,type:"ExecuteResponse",data:{type:"error",value:t}};return void this.respond(n)}const t=this.engine,{name:n,args:r}=e.data;if(!t[n]){const t={type:"reject",reason:{code:C.NotSupport,message:`engine method ${n} is not supported yet`}},r={id:e.id,type:"ExecuteResponse",data:{type:"error",value:t}};return void this.respond(r)}let o;switch(n){case"isSupport":case"initialize":case"destroy":case"openDocumentUrl":case"openDocumentFromBuffer":case"openDocumentFromLoader":case"getDocPermissions":case"getDocUserPermissions":case"getMetadata":case"getBookmarks":case"getSignatures":case"renderPage":case"renderPageRect":case"renderAnnotation":case"renderThumbnail":case"getAllAnnotations":case"getPageAnnotations":case"createPageAnnotation":case"updatePageAnnotation":case"removePageAnnotation":case"updateAnnotationColor":case"getPageTextRects":case"searchAllPages":case"closeDocument":case"saveAsCopy":case"getAttachments":case"readAttachmentContent":case"setFormFieldValue":case"flattenPage":case"extractPages":case"extractText":case"getTextSlices":case"getPageGlyphs":case"getPageGeometry":case"merge":case"mergePages":o=this.engine[n](...r)}o.wait((t=>{const n={id:e.id,type:"ExecuteResponse",data:{type:"result",value:t}};this.respond(n)}),(t=>{const n={id:e.id,type:"ExecuteResponse",data:{type:"error",value:t}};this.respond(n)}))}}listen(){self.onmessage=e=>this.handle(e)}handle(e){this.logger.debug(O,v,"webworker receive message event: ",e.data);try{const t=e.data;if("ExecuteRequest"===t.type)this.execute(t)}catch(e){this.logger.info(O,v,"webworker met error when processing message event:",e)}}ready(){this.listen(),this.respond({id:"0",type:"ReadyResponse"}),this.logger.debug(O,v,"runner is ready")}respond(e){this.logger.debug(O,v,"runner respond: ",e),self.postMessage(e)}}function w(e,t,n,r=100){let o=e.wasmExports.malloc(r);for(let t=0;t<r;t++)e.HEAP8[o+t]=0;const i=t(o,r);let a;if(i>r){e.wasmExports.free(o),o=e.wasmExports.malloc(i);for(let t=0;t<i;t++)e.HEAP8[o+t]=0;t(o,i),a=n(o)}else a=n(o);return e.wasmExports.free(o),a}function R(e,t){const n=t(0,0),r=e.wasmExports.malloc(n);t(r,n);const o=new ArrayBuffer(n),i=new DataView(o);for(let t=0;t<n;t++)i.setInt8(t,e.getValue(r+t,"i8"));return e.wasmExports.free(r),o}class I{constructor(e){this.pdfium=e,this.docs=new Map}setDocument(e,t,n){let r=this.docs.get(e);r||(r=new k(t,n,this.pdfium),this.docs.set(e,r))}getContext(e){return this.docs.get(e)}closeDocument(e){const t=this.docs.get(e);return!!t&&(t.dispose(),this.docs.delete(e),!0)}}class k{constructor(e,t,n){this.filePtr=e,this.docPtr=t,this.pageCache=new j(n,t)}acquirePage(e){return this.pageCache.acquire(e)}dispose(){this.pageCache.forceReleaseAll(),this.pageCache.pdf.FPDF_CloseDocument(this.docPtr),this.pageCache.pdf.pdfium.wasmExports.free(this.filePtr)}}class j{constructor(e,t){this.pdf=e,this.docPtr=t,this.cache=new Map}acquire(e){let t=this.cache.get(e);if(!t){const n=this.pdf.FPDF_LoadPage(this.docPtr,e);t=new L(this.pdf,this.docPtr,e,n,(()=>{this.cache.delete(e)})),this.cache.set(e,t)}return t.clearExpiryTimer(),t.bumpRefCount(),t}forceReleaseAll(){for(const e of this.cache.values())e.disposeImmediate();this.cache.clear()}}class L{constructor(e,t,n,r,o){this.pdf=e,this.docPtr=t,this.pageIdx=n,this.pagePtr=r,this.onFinalDispose=o,this.refCount=0,this.disposed=!1}bumpRefCount(){if(this.disposed)throw new Error("Context already disposed");this.refCount++}clearExpiryTimer(){this.expiryTimer&&(clearTimeout(this.expiryTimer),this.expiryTimer=void 0)}release(){this.disposed||(this.refCount--,0===this.refCount&&(this.expiryTimer=setTimeout((()=>this.disposeImmediate()),5e3)))}disposeImmediate(){this.disposed||(this.disposed=!0,void 0!==this.textPagePtr&&this.pdf.FPDFText_ClosePage(this.textPagePtr),void 0!==this.formHandle&&(this.pdf.FORM_OnBeforeClosePage(this.pagePtr,this.formHandle),this.pdf.PDFiumExt_ExitFormFillEnvironment(this.formHandle)),void 0!==this.formInfoPtr&&this.pdf.PDFiumExt_CloseFormFillInfo(this.formInfoPtr),this.pdf.FPDF_ClosePage(this.pagePtr),this.onFinalDispose())}getTextPage(){return this.ensureAlive(),void 0===this.textPagePtr&&(this.textPagePtr=this.pdf.FPDFText_LoadPage(this.pagePtr)),this.textPagePtr}getFormHandle(){return this.ensureAlive(),void 0===this.formHandle&&(this.formInfoPtr=this.pdf.PDFiumExt_OpenFormFillInfo(),this.formHandle=this.pdf.PDFiumExt_InitFormFillEnvironment(this.docPtr,this.formInfoPtr),this.pdf.FORM_OnAfterLoadPage(this.pagePtr,this.formHandle)),this.formHandle}withAnnotation(e,t){this.ensureAlive();const n=this.pdf.FPDFPage_GetAnnot(this.pagePtr,e);try{return t(n)}finally{this.pdf.FPDFPage_CloseAnnot(n)}}ensureAlive(){if(this.disposed)throw new Error("PageContext already disposed")}}var B,N;!function(e){e[e.Bitmap_Gray=1]="Bitmap_Gray",e[e.Bitmap_BGR=2]="Bitmap_BGR",e[e.Bitmap_BGRx=3]="Bitmap_BGRx",e[e.Bitmap_BGRA=4]="Bitmap_BGRA"}(B||(B={})),function(e){e[e.ANNOT=1]="ANNOT",e[e.LCD_TEXT=2]="LCD_TEXT",e[e.NO_NATIVETEXT=4]="NO_NATIVETEXT",e[e.GRAYSCALE=8]="GRAYSCALE",e[e.DEBUG_INFO=128]="DEBUG_INFO",e[e.NO_CATCH=256]="NO_CATCH",e[e.RENDER_LIMITEDIMAGECACHE=512]="RENDER_LIMITEDIMAGECACHE",e[e.RENDER_FORCEHALFTONE=1024]="RENDER_FORCEHALFTONE",e[e.PRINTING=2048]="PRINTING",e[e.REVERSE_BYTE_ORDER=16]="REVERSE_BYTE_ORDER"}(N||(N={}));const U="PDFiumEngine",V="Engine";var z;!function(e){e[e.Success=0]="Success",e[e.Unknown=1]="Unknown",e[e.File=2]="File",e[e.Format=3]="Format",e[e.Password=4]="Password",e[e.Security=5]="Security",e[e.Page=6]="Page",e[e.XFALoad=7]="XFALoad",e[e.XFALayout=8]="XFALayout"}(z||(z={}));const W=(e,t="image/webp")=>{if("undefined"==typeof OffscreenCanvas)throw new Error("OffscreenCanvas is not available in this environment. This converter is intended for browser use only. Please use createNodeImageDataToBlobConverter() or createNodeCanvasImageDataToBlobConverter() for Node.js.");const n=new ImageData(e.data,e.width,e.height),r=new OffscreenCanvas(n.width,n.height);return r.getContext("2d").putImageData(n,0,0),r.convertToBlob({type:t})};class H{constructor(e,t=new m,n=W){this.pdfiumModule=e,this.logger=t,this.imageDataConverter=n,this.cache=new I(this.pdfiumModule)}initialize(){return this.logger.debug(U,V,"initialize"),this.logger.perf(U,V,"Initialize","Begin","General"),this.pdfiumModule.PDFiumExt_Init(),this.logger.perf(U,V,"Initialize","End","General"),y.resolve(!0)}destroy(){return this.logger.debug(U,V,"destroy"),this.logger.perf(U,V,"Destroy","Begin","General"),this.pdfiumModule.FPDF_DestroyLibrary(),this.logger.perf(U,V,"Destroy","End","General"),y.resolve(!0)}openDocumentUrl(e,t){const n=t?.mode??"auto",r=t?.password??"";this.logger.debug(U,V,"openDocumentUrl called",e.url,n);const o=y.create();return(async()=>{try{if("full-fetch"===n){(await this.fetchFullAndOpen(e,r)).wait((e=>o.resolve(e)),(e=>o.reject(e.reason)))}else if("range-request"===n){(await this.openDocumentWithRangeRequest(e,r)).wait((e=>o.resolve(e)),(e=>o.reject(e.reason)))}else{const{supportsRanges:t,fileLength:n,content:i}=await this.checkRangeSupport(e.url);if(t){(await this.openDocumentWithRangeRequest(e,r,n)).wait((e=>o.resolve(e)),(e=>o.reject(e.reason)))}else if(i){const t={id:e.id,content:i};this.openDocumentFromBuffer(t,r).wait((e=>o.resolve(e)),(e=>o.reject(e.reason)))}else{(await this.fetchFullAndOpen(e,r)).wait((e=>o.resolve(e)),(e=>o.reject(e.reason)))}}}catch(e){this.logger.error(U,V,"openDocumentUrl error",e),o.reject({code:C.Unknown,message:String(e)})}})(),o}async checkRangeSupport(e){try{this.logger.debug(U,V,"checkRangeSupport",e);const t=await fetch(e,{method:"HEAD"}),n=t.headers.get("Content-Length");if("bytes"===t.headers.get("Accept-Ranges"))return{supportsRanges:!0,fileLength:parseInt(n??"0"),content:null};const r=await fetch(e,{headers:{Range:"bytes=0-1"}});if(200===r.status){const e=await r.arrayBuffer();return{supportsRanges:!1,fileLength:parseInt(n??"0"),content:e}}return{supportsRanges:206===r.status,fileLength:parseInt(n??"0"),content:null}}catch(e){throw this.logger.error(U,V,"checkRangeSupport failed",e),new Error("Failed to check range support: "+e)}}async fetchFullAndOpen(e,t){this.logger.debug(U,V,"fetchFullAndOpen",e.url);const n=await fetch(e.url);if(!n.ok)throw new Error(`Could not fetch PDF: ${n.statusText}`);const r=await n.arrayBuffer(),o={id:e.id,content:r};return this.openDocumentFromBuffer(o,t)}async openDocumentWithRangeRequest(e,t,n){this.logger.debug(U,V,"openDocumentWithRangeRequest",e.url);const r=n??(await this.retrieveFileLength(e.url)).fileLength;return this.openDocumentFromLoader({id:e.id,fileLength:r,callback:(t,n)=>{const r=new XMLHttpRequest;if(r.open("GET",e.url,!1),r.overrideMimeType("text/plain; charset=x-user-defined"),r.setRequestHeader("Range",`bytes=${t}-${t+n-1}`),r.send(null),206===r.status||200===r.status)return this.convertResponseToUint8Array(r.responseText);throw new Error(`Range request failed with status ${r.status}`)}},t)}async retrieveFileLength(e){this.logger.debug(U,V,"retrieveFileLength",e);const t=await fetch(e,{method:"HEAD"});if(!t.ok)throw new Error(`Failed HEAD request for file length: ${t.statusText}`);const n=t.headers.get("Content-Length")||"0",r=parseInt(n,10)||0;if(!r)throw new Error("Content-Length not found or zero.");return{fileLength:r}}convertResponseToUint8Array(e){const t=new Uint8Array(e.length);for(let n=0;n<e.length;n++)t[n]=255&e.charCodeAt(n);return t}openDocumentFromBuffer(e,t=""){this.logger.debug(U,V,"openDocumentFromBuffer",e,t),this.logger.perf(U,V,"OpenDocumentFromBuffer","Begin",e.id);const n=new Uint8Array(e.content),r=n.length,o=this.malloc(r);this.pdfiumModule.pdfium.HEAPU8.set(n,o);const i=this.pdfiumModule.FPDF_LoadMemDocument(o,r,t);if(!i){const t=this.pdfiumModule.FPDF_GetLastError();return this.logger.error(U,V,`FPDF_LoadMemDocument failed with ${t}`),this.free(o),this.logger.perf(U,V,"OpenDocumentFromBuffer","End",e.id),y.reject({code:t,message:"FPDF_LoadMemDocument failed"})}const a=this.pdfiumModule.FPDF_GetPageCount(i),s=[],u=this.malloc(8);for(let t=0;t<a;t++){if(!this.pdfiumModule.FPDF_GetPageSizeByIndexF(i,t,u)){const t=this.pdfiumModule.FPDF_GetLastError();return this.logger.error(U,V,`FPDF_GetPageSizeByIndexF failed with ${t}`),this.free(u),this.pdfiumModule.FPDF_CloseDocument(i),this.free(o),this.logger.perf(U,V,"OpenDocumentFromBuffer","End",e.id),y.reject({code:t,message:"FPDF_GetPageSizeByIndexF failed"})}const n={index:t,size:{width:this.pdfiumModule.pdfium.getValue(u,"float"),height:this.pdfiumModule.pdfium.getValue(u+4,"float")}};s.push(n)}this.free(u);const F={id:e.id,pageCount:a,pages:s};return this.cache.setDocument(e.id,o,i),this.logger.perf(U,V,"OpenDocumentFromBuffer","End",e.id),y.resolve(F)}openDocumentFromLoader(e,t=""){const{fileLength:n,callback:r,...o}=e;this.logger.debug(U,V,"openDocumentFromLoader",o,t),this.logger.perf(U,V,"OpenDocumentFromLoader","Begin",o.id);const i=this.pdfiumModule.pdfium.addFunction(((e,t,o,i)=>{try{if(this.logger.debug(U,V,"readBlock",t,i,o),t<0||t>=n)return this.logger.error(U,V,"Offset out of bounds:",t),0;const e=r(t,i);return new Uint8Array(this.pdfiumModule.pdfium.HEAPU8.buffer,o,e.length).set(e),e.length}catch(e){return this.logger.error(U,V,"ReadBlock error:",e),0}}),"iiiii"),a=this.malloc(12);this.pdfiumModule.pdfium.setValue(a,n,"i32"),this.pdfiumModule.pdfium.setValue(a+4,i,"i32"),this.pdfiumModule.pdfium.setValue(a+8,0,"i32");const s=this.pdfiumModule.FPDF_LoadCustomDocument(a,t);if(!s){const e=this.pdfiumModule.FPDF_GetLastError();return this.logger.error(U,V,`FPDF_LoadCustomDocument failed with ${e}`),this.free(a),this.logger.perf(U,V,"OpenDocumentFromLoader","End",o.id),y.reject({code:e,message:"FPDF_LoadCustomDocument failed"})}const u=this.pdfiumModule.FPDF_GetPageCount(s),F=[],m=this.malloc(8);for(let e=0;e<u;e++){if(!this.pdfiumModule.FPDF_GetPageSizeByIndexF(s,e,m)){const e=this.pdfiumModule.FPDF_GetLastError();return this.logger.error(U,V,`FPDF_GetPageSizeByIndexF failed with ${e}`),this.free(m),this.pdfiumModule.FPDF_CloseDocument(s),this.free(a),this.logger.perf(U,V,"OpenDocumentFromLoader","End",o.id),y.reject({code:e,message:"FPDF_GetPageSizeByIndexF failed"})}const t={index:e,size:{width:this.pdfiumModule.pdfium.getValue(m,"float"),height:this.pdfiumModule.pdfium.getValue(m+4,"float")}};F.push(t)}this.free(m);const l={id:o.id,pageCount:u,pages:F};return this.cache.setDocument(o.id,a,s),this.logger.perf(U,V,"OpenDocumentFromLoader","End",o.id),y.resolve(l)}getMetadata(e){this.logger.debug(U,V,"getMetadata",e),this.logger.perf(U,V,"GetMetadata","Begin",e.id);const t=this.cache.getContext(e.id);if(!t)return this.logger.perf(U,V,"GetMetadata","End",e.id),y.reject({code:C.DocNotOpen,message:"document does not open"});const n={title:this.readMetaText(t.docPtr,"Title"),author:this.readMetaText(t.docPtr,"Author"),subject:this.readMetaText(t.docPtr,"Subject"),keywords:this.readMetaText(t.docPtr,"Keywords"),producer:this.readMetaText(t.docPtr,"Producer"),creator:this.readMetaText(t.docPtr,"Creator"),creationDate:this.readMetaText(t.docPtr,"CreationDate"),modificationDate:this.readMetaText(t.docPtr,"ModDate")};return this.logger.perf(U,V,"GetMetadata","End",e.id),y.resolve(n)}getDocPermissions(e){this.logger.debug(U,V,"getDocPermissions",e),this.logger.perf(U,V,"getDocPermissions","Begin",e.id);const t=this.cache.getContext(e.id);if(!t)return this.logger.perf(U,V,"getDocPermissions","End",e.id),y.reject({code:C.DocNotOpen,message:"document does not open"});const n=this.pdfiumModule.FPDF_GetDocPermissions(t.docPtr);return y.resolve(n)}getDocUserPermissions(e){this.logger.debug(U,V,"getDocUserPermissions",e),this.logger.perf(U,V,"getDocUserPermissions","Begin",e.id);const t=this.cache.getContext(e.id);if(!t)return this.logger.perf(U,V,"getDocUserPermissions","End",e.id),y.reject({code:C.DocNotOpen,message:"document does not open"});const n=this.pdfiumModule.FPDF_GetDocUserPermissions(t.docPtr);return y.resolve(n)}getSignatures(e){this.logger.debug(U,V,"getSignatures",e),this.logger.perf(U,V,"GetSignatures","Begin",e.id);const t=this.cache.getContext(e.id);if(!t)return this.logger.perf(U,V,"GetSignatures","End",e.id),y.reject({code:C.DocNotOpen,message:"document does not open"});const n=[],r=this.pdfiumModule.FPDF_GetSignatureCount(t.docPtr);for(let e=0;e<r;e++){const r=this.pdfiumModule.FPDF_GetSignatureObject(t.docPtr,e),o=R(this.pdfiumModule.pdfium,((e,t)=>this.pdfiumModule.FPDFSignatureObj_GetContents(r,e,t))),i=R(this.pdfiumModule.pdfium,((e,t)=>4*this.pdfiumModule.FPDFSignatureObj_GetByteRange(r,e,t))),a=R(this.pdfiumModule.pdfium,((e,t)=>this.pdfiumModule.FPDFSignatureObj_GetSubFilter(r,e,t))),s=w(this.pdfiumModule.pdfium,((e,t)=>this.pdfiumModule.FPDFSignatureObj_GetReason(r,e,t)),this.pdfiumModule.pdfium.UTF16ToString),u=w(this.pdfiumModule.pdfium,((e,t)=>this.pdfiumModule.FPDFSignatureObj_GetTime(r,e,t)),this.pdfiumModule.pdfium.UTF8ToString),F=this.pdfiumModule.FPDFSignatureObj_GetDocMDPPermission(r);n.push({contents:o,byteRange:i,subFilter:a,reason:s,time:u,docMDP:F})}return this.logger.perf(U,V,"GetSignatures","End",e.id),y.resolve(n)}getBookmarks(e){this.logger.debug(U,V,"getBookmarks",e),this.logger.perf(U,V,"GetBookmarks","Begin",e.id);const t=this.cache.getContext(e.id);if(!t)return this.logger.perf(U,V,"getBookmarks","End",e.id),y.reject({code:C.DocNotOpen,message:"document does not open"});const n=this.readPdfBookmarks(t.docPtr,0);return this.logger.perf(U,V,"GetBookmarks","End",e.id),y.resolve({bookmarks:n})}renderPage(e,t,n=1,r=o.Degree0,i=1,a={withAnnotations:!1},s="image/webp"){const u=new _;this.logger.debug(U,V,"renderPage",e,t,n,r,i,a),this.logger.perf(U,V,"RenderPage","Begin",`${e.id}-${t.index}`);const F=this.cache.getContext(e.id);if(!F)return this.logger.perf(U,V,"RenderPage","End",`${e.id}-${t.index}`),y.reject({code:C.DocNotOpen,message:"document does not open"});const m=this.renderPageRectToImageData(F,t,{origin:{x:0,y:0},size:t.size},n,r,i,a);return this.logger.perf(U,V,"RenderPage","End",`${e.id}-${t.index}`),this.imageDataConverter(m,s).then((e=>u.resolve(e))),u}renderPageRect(e,t,n,r,o,i,a,s="image/webp"){const u=new _;this.logger.debug(U,V,"renderPageRect",e,t,n,r,o,i,a),this.logger.perf(U,V,"RenderPageRect","Begin",`${e.id}-${t.index}`);const F=this.cache.getContext(e.id);if(!F)return this.logger.perf(U,V,"RenderPageRect","End",`${e.id}-${t.index}`),y.reject({code:C.DocNotOpen,message:"document does not open"});const m=this.renderPageRectToImageData(F,t,i,n,r,o,a);return this.logger.perf(U,V,"RenderPageRect","End",`${e.id}-${t.index}`),this.imageDataConverter(m,s).then((e=>u.resolve(e))),u}getAllAnnotations(e){this.logger.debug(U,V,"getAllAnnotations",e),this.logger.perf(U,V,"GetAllAnnotations","Begin",e.id);const t=this.cache.getContext(e.id);if(!t)return this.logger.perf(U,V,"GetAllAnnotations","End",e.id),y.reject({code:C.DocNotOpen,message:"document does not open"});const n=this.readAllAnnotations(e,t);return this.logger.perf(U,V,"GetAllAnnotations","End",e.id),y.resolve(n)}readAllAnnotations(e,t){const n={};for(let r=0;r<e.pageCount;r++){const o=this.readPageAnnotations(t,e.pages[r]);n[r]=o}return n}getPageAnnotations(e,t){this.logger.debug(U,V,"getPageAnnotations",e,t),this.logger.perf(U,V,"GetPageAnnotations","Begin",`${e.id}-${t.index}`);const n=this.cache.getContext(e.id);if(!n)return this.logger.perf(U,V,"GetPageAnnotations","End",`${e.id}-${t.index}`),y.reject({code:C.DocNotOpen,message:"document does not open"});const r=this.readPageAnnotations(n,t);return this.logger.perf(U,V,"GetPageAnnotations","End",`${e.id}-${t.index}`),this.logger.debug(U,V,"GetPageAnnotations",`${e.id}-${t.index}`,r),y.resolve(r)}createPageAnnotation(e,t,n){this.logger.debug(U,V,"createPageAnnotation",e,t,n),this.logger.perf(U,V,"CreatePageAnnotation","Begin",`${e.id}-${t.index}`);const r=this.cache.getContext(e.id);if(!r)return this.logger.perf(U,V,"CreatePageAnnotation","End",`${e.id}-${t.index}`),y.reject({code:C.DocNotOpen,message:"document does not open"});const o=r.acquirePage(t.index),i=this.pdfiumModule.FPDFPage_CreateAnnot(o.pagePtr,n.type);if(!i)return this.logger.perf(U,V,"CreatePageAnnotation","End",`${e.id}-${t.index}`),o.release(),y.reject({code:C.CantCreateAnnot,message:"can not create annotation with specified type"});if(!this.setPageAnnoRect(t,o.pagePtr,i,n.rect))return this.pdfiumModule.FPDFPage_CloseAnnot(i),o.release(),this.logger.perf(U,V,"CreatePageAnnotation","End",`${e.id}-${t.index}`),y.reject({code:C.CantSetAnnotRect,message:"can not set the rect of the annotation"});let a=!1;switch(n.type){case D.INK:a=this.addInkStroke(t,o.pagePtr,i,n);break;case D.STAMP:a=this.addStampContent(r.docPtr,t,o.pagePtr,i,n.rect,n.contents);break;case D.UNDERLINE:case D.STRIKEOUT:case D.SQUIGGLY:case D.HIGHLIGHT:a=this.addTextMarkupContent(t,o.pagePtr,i,n)}if(!a)return this.pdfiumModule.FPDFPage_RemoveAnnot(o.pagePtr,i),o.release(),this.logger.perf(U,V,"CreatePageAnnotation","End",`${e.id}-${t.index}`),y.reject({code:C.CantSetAnnotContent,message:"can not add content of the annotation"});this.pdfiumModule.EPDFAnnot_GenerateAppearance(i),this.pdfiumModule.FPDFPage_GenerateContent(o.pagePtr);const s=this.pdfiumModule.FPDFPage_GetAnnotIndex(o.pagePtr,i);return this.pdfiumModule.FPDFPage_CloseAnnot(i),o.release(),this.logger.perf(U,V,"CreatePageAnnotation","End",`${e.id}-${t.index}`),s>=0?y.resolve(s):y.reject({code:C.CantCreateAnnot,message:"annotation created but index could not be determined"})}updatePageAnnotation(e,t,n){this.logger.debug(U,V,"updatePageAnnotation",e,t,n),this.logger.perf(U,V,"UpdatePageAnnotation","Begin",`${e.id}-${t.index}`);const r=this.cache.getContext(e.id);if(!r)return this.logger.perf(U,V,"UpdatePageAnnotation","End",`${e.id}-${t.index}`),y.reject({code:C.DocNotOpen,message:"document does not open"});const o=r.acquirePage(t.index),i=this.pdfiumModule.FPDFPage_GetAnnot(o.pagePtr,n.id);if(!i)return o.release(),this.logger.perf(U,V,"UpdatePageAnnotation","End",`${e.id}-${t.index}`),y.reject({code:C.NotFound,message:"annotation not found"});if(!this.setPageAnnoRect(t,o.pagePtr,i,n.rect))return this.pdfiumModule.FPDFPage_CloseAnnot(i),o.release(),this.logger.perf(U,V,"UpdatePageAnnotation","End",`${e.id}-${t.index}`),y.reject({code:C.CantSetAnnotRect,message:"failed to move annotation"});let a=!1;switch(n.type){case D.INK:if(!this.pdfiumModule.FPDFAnnot_RemoveInkList(i))break;a=this.addInkStroke(t,o.pagePtr,i,n);break;case D.STAMP:for(let e=this.pdfiumModule.FPDFAnnot_GetObjectCount(i)-1;e>=0;e--)this.pdfiumModule.FPDFAnnot_RemoveObject(i,e);a=this.addStampContent(r.docPtr,t,o.pagePtr,i,n.rect,n.contents);break;case D.HIGHLIGHT:case D.UNDERLINE:case D.STRIKEOUT:case D.SQUIGGLY:a=this.addTextMarkupContent(t,o.pagePtr,i,n);break;default:a=!1}return a&&(this.pdfiumModule.EPDFAnnot_GenerateAppearance(i),this.pdfiumModule.FPDFPage_GenerateContent(o.pagePtr)),this.pdfiumModule.FPDFPage_CloseAnnot(i),o.release(),this.logger.perf(U,V,"UpdatePageAnnotation","End",`${e.id}-${t.index}`),a?y.resolve(!0):y.reject({code:C.CantSetAnnotContent,message:"failed to update annotation"})}removePageAnnotation(e,t,n){this.logger.debug(U,V,"removePageAnnotation",e,t,n),this.logger.perf(U,V,"RemovePageAnnotation","Begin",`${e.id}-${t.index}`);const r=this.cache.getContext(e.id);if(!r)return this.logger.perf(U,V,"RemovePageAnnotation","End",`${e.id}-${t.index}`),y.reject({code:C.DocNotOpen,message:"document does not open"});const o=r.acquirePage(t.index);let i=!1;return i=this.pdfiumModule.FPDFPage_RemoveAnnot(o.pagePtr,n.id),i?(i=this.pdfiumModule.FPDFPage_GenerateContent(o.pagePtr),i||this.logger.error(U,V,"FPDFPage_GenerateContent Failed",`${e.id}-${t.index}`)):this.logger.error(U,V,"FPDFPage_RemoveAnnot Failed",`${e.id}-${t.index}`),o.release(),this.logger.perf(U,V,"RemovePageAnnotation","End",`${e.id}-${t.index}`),y.resolve(i)}getPageTextRects(e,t,n,r){this.logger.debug(U,V,"getPageTextRects",e,t,n,r),this.logger.perf(U,V,"GetPageTextRects","Begin",`${e.id}-${t.index}`);const o=this.cache.getContext(e.id);if(!o)return this.logger.perf(U,V,"GetPageTextRects","End",`${e.id}-${t.index}`),y.reject({code:C.DocNotOpen,message:"document does not open"});const i=o.acquirePage(t.index),a=this.pdfiumModule.FPDFText_LoadPage(i.pagePtr),s=this.readPageTextRects(t,i.docPtr,i.pagePtr,a);return this.pdfiumModule.FPDFText_ClosePage(a),i.release(),this.logger.perf(U,V,"GetPageTextRects","End",`${e.id}-${t.index}`),y.resolve(s)}renderThumbnail(e,t,n,r,o){this.logger.debug(U,V,"renderThumbnail",e,t,n,r,o),this.logger.perf(U,V,"RenderThumbnail","Begin",`${e.id}-${t.index}`);if(!this.cache.getContext(e.id))return this.logger.perf(U,V,"RenderThumbnail","End",`${e.id}-${t.index}`),y.reject({code:C.DocNotOpen,message:"document does not open"});n=Math.max(n,.5);const i=this.renderPage(e,t,n,r,o,{withAnnotations:!0});return this.logger.perf(U,V,"RenderThumbnail","End",`${e.id}-${t.index}`),i}getAttachments(e){this.logger.debug(U,V,"getAttachments",e),this.logger.perf(U,V,"GetAttachments","Begin",e.id);const t=this.cache.getContext(e.id);if(!t)return this.logger.perf(U,V,"GetAttachments","End",e.id),y.reject({code:C.DocNotOpen,message:"document does not open"});const n=[],r=this.pdfiumModule.FPDFDoc_GetAttachmentCount(t.docPtr);for(let e=0;e<r;e++){const r=this.readPdfAttachment(t.docPtr,e);n.push(r)}return this.logger.perf(U,V,"GetAttachments","End",e.id),y.resolve(n)}readAttachmentContent(e,t){this.logger.debug(U,V,"readAttachmentContent",e,t),this.logger.perf(U,V,"ReadAttachmentContent","Begin",e.id);const n=this.cache.getContext(e.id);if(!n)return this.logger.perf(U,V,"ReadAttachmentContent","End",e.id),y.reject({code:C.DocNotOpen,message:"document does not open"});const r=this.pdfiumModule.FPDFDoc_GetAttachment(n.docPtr,t.index),o=this.malloc(8);if(!this.pdfiumModule.FPDFAttachment_GetFile(r,0,0,o))return this.free(o),this.logger.perf(U,V,"ReadAttachmentContent","End",e.id),y.reject({code:C.CantReadAttachmentSize,message:"can not read attachment size"});const i=this.pdfiumModule.pdfium.getValue(o,"i64"),a=this.malloc(i);if(!this.pdfiumModule.FPDFAttachment_GetFile(r,a,i,o))return this.free(o),this.free(a),this.logger.perf(U,V,"ReadAttachmentContent","End",e.id),y.reject({code:C.CantReadAttachmentContent,message:"can not read attachment content"});const s=new ArrayBuffer(i),u=new DataView(s);for(let e=0;e<i;e++)u.setInt8(e,this.pdfiumModule.pdfium.getValue(a+e,"i8"));return this.free(o),this.free(a),this.logger.perf(U,V,"ReadAttachmentContent","End",e.id),y.resolve(s)}setFormFieldValue(e,t,n,r){this.logger.debug(U,V,"SetFormFieldValue",e,n,r),this.logger.perf(U,V,"SetFormFieldValue","Begin",`${e.id}-${n.id}`);const o=this.cache.getContext(e.id);if(!o)return this.logger.debug(U,V,"SetFormFieldValue","document is not opened"),this.logger.perf(U,V,"SetFormFieldValue","End",`${e.id}-${n.id}`),y.reject({code:C.DocNotOpen,message:"document does not open"});const i=this.pdfiumModule.PDFiumExt_OpenFormFillInfo(),a=this.pdfiumModule.PDFiumExt_InitFormFillEnvironment(o.docPtr,i),s=o.acquirePage(t.index);this.pdfiumModule.FORM_OnAfterLoadPage(s.pagePtr,a);const u=this.pdfiumModule.FPDFPage_GetAnnot(s.pagePtr,n.id);if(!this.pdfiumModule.FORM_SetFocusedAnnot(a,u))return this.logger.debug(U,V,"SetFormFieldValue","failed to set focused annotation"),this.logger.perf(U,V,"SetFormFieldValue","End",`${e.id}-${n.id}`),this.pdfiumModule.FPDFPage_CloseAnnot(u),this.pdfiumModule.FORM_OnBeforeClosePage(s.pagePtr,a),s.release(),this.pdfiumModule.PDFiumExt_ExitFormFillEnvironment(a),this.pdfiumModule.PDFiumExt_CloseFormFillInfo(i),y.reject({code:C.CantFocusAnnot,message:"failed to set focused annotation"});switch(r.kind){case"text":{if(!this.pdfiumModule.FORM_SelectAllText(a,s.pagePtr))return this.logger.debug(U,V,"SetFormFieldValue","failed to select all text"),this.logger.perf(U,V,"SetFormFieldValue","End",`${e.id}-${n.id}`),this.pdfiumModule.FORM_ForceToKillFocus(a),this.pdfiumModule.FPDFPage_CloseAnnot(u),this.pdfiumModule.FORM_OnBeforeClosePage(s.pagePtr,a),s.release(),this.pdfiumModule.PDFiumExt_ExitFormFillEnvironment(a),this.pdfiumModule.PDFiumExt_CloseFormFillInfo(i),y.reject({code:C.CantSelectText,message:"failed to select all text"});const t=2*(r.text.length+1),o=this.malloc(t);this.pdfiumModule.pdfium.stringToUTF16(r.text,o,t),this.pdfiumModule.FORM_ReplaceSelection(a,s.pagePtr,o),this.free(o)}break;case"selection":if(!this.pdfiumModule.FORM_SetIndexSelected(a,s.pagePtr,r.index,r.isSelected))return this.logger.debug(U,V,"SetFormFieldValue","failed to set index selected"),this.logger.perf(U,V,"SetFormFieldValue","End",`${e.id}-${n.id}`),this.pdfiumModule.FORM_ForceToKillFocus(a),this.pdfiumModule.FPDFPage_CloseAnnot(u),this.pdfiumModule.FORM_OnBeforeClosePage(s.pagePtr,a),s.release(),this.pdfiumModule.PDFiumExt_ExitFormFillEnvironment(a),this.pdfiumModule.PDFiumExt_CloseFormFillInfo(i),y.reject({code:C.CantSelectOption,message:"failed to set index selected"});break;case"checked":{const t=13;if(!this.pdfiumModule.FORM_OnChar(a,s.pagePtr,t,0))return this.logger.debug(U,V,"SetFormFieldValue","failed to set field checked"),this.logger.perf(U,V,"SetFormFieldValue","End",`${e.id}-${n.id}`),this.pdfiumModule.FORM_ForceToKillFocus(a),this.pdfiumModule.FPDFPage_CloseAnnot(u),this.pdfiumModule.FORM_OnBeforeClosePage(s.pagePtr,a),s.release(),this.pdfiumModule.PDFiumExt_ExitFormFillEnvironment(a),this.pdfiumModule.PDFiumExt_CloseFormFillInfo(i),y.reject({code:C.CantCheckField,message:"failed to set field checked"})}}return this.pdfiumModule.FORM_ForceToKillFocus(a),this.pdfiumModule.FPDFPage_CloseAnnot(u),this.pdfiumModule.FORM_OnBeforeClosePage(s.pagePtr,a),s.release(),this.pdfiumModule.PDFiumExt_ExitFormFillEnvironment(a),this.pdfiumModule.PDFiumExt_CloseFormFillInfo(i),y.resolve(!0)}flattenPage(e,t,n){this.logger.debug(U,V,"flattenPage",e,t,n),this.logger.perf(U,V,"flattenPage","Begin",e.id);const r=this.cache.getContext(e.id);if(!r)return this.logger.perf(U,V,"flattenPage","End",e.id),y.reject({code:C.DocNotOpen,message:"document does not open"});const o=r.acquirePage(t.index),i=this.pdfiumModule.FPDFPage_Flatten(o.pagePtr,n);return o.release(),this.logger.perf(U,V,"flattenPage","End",e.id),y.resolve(i)}extractPages(e,t){this.logger.debug(U,V,"extractPages",e,t),this.logger.perf(U,V,"ExtractPages","Begin",e.id);const n=this.cache.getContext(e.id);if(!n)return this.logger.perf(U,V,"ExtractPages","End",e.id),y.reject({code:C.DocNotOpen,message:"document does not open"});const r=this.pdfiumModule.FPDF_CreateNewDocument();if(!r)return this.logger.perf(U,V,"ExtractPages","End",e.id),y.reject({code:C.CantCreateNewDoc,message:"can not create new document"});const o=this.malloc(4*t.length);for(let e=0;e<t.length;e++)this.pdfiumModule.pdfium.setValue(o+4*e,t[e],"i32");if(!this.pdfiumModule.FPDF_ImportPagesByIndex(r,n.docPtr,o,t.length,0))return this.pdfiumModule.FPDF_CloseDocument(r),this.logger.perf(U,V,"ExtractPages","End",e.id),y.reject({code:C.CantImportPages,message:"can not import pages to new document"});const i=this.saveDocument(r);return this.pdfiumModule.FPDF_CloseDocument(r),this.logger.perf(U,V,"ExtractPages","End",e.id),y.resolve(i)}extractText(e,t){this.logger.debug(U,V,"extractText",e,t),this.logger.perf(U,V,"ExtractText","Begin",e.id);const n=this.cache.getContext(e.id);if(!n)return this.logger.perf(U,V,"ExtractText","End",e.id),y.reject({code:C.DocNotOpen,message:"document does not open"});const r=[];for(let e=0;e<t.length;e++){const o=n.acquirePage(t[e]),i=this.pdfiumModule.FPDFText_LoadPage(o.pagePtr),a=this.pdfiumModule.FPDFText_CountChars(i),s=this.malloc(2*(a+1));this.pdfiumModule.FPDFText_GetText(i,0,a,s);const u=this.pdfiumModule.pdfium.UTF16ToString(s);this.free(s),r.push(u),this.pdfiumModule.FPDFText_ClosePage(i),o.release()}const o=r.join("\\n\\n");return this.logger.perf(U,V,"ExtractText","End",e.id),y.resolve(o)}getTextSlices(e,t){if(this.logger.debug(U,V,"getTextSlices",e,t),this.logger.perf(U,V,"GetTextSlices","Begin",e.id),0===t.length)return this.logger.perf(U,V,"GetTextSlices","End",e.id),y.resolve([]);const n=this.cache.getContext(e.id);if(!n)return this.logger.perf(U,V,"GetTextSlices","End",e.id),y.reject({code:C.DocNotOpen,message:"document does not open"});try{const r=new Array(t.length),o=new Map;t.forEach(((e,t)=>{(o.get(e.pageIndex)??o.set(e.pageIndex,[]).get(e.pageIndex)).push({slice:e,pos:t})}));for(const[e,t]of o){const o=n.acquirePage(e),i=o.getTextPage();for(const{slice:e,pos:n}of t){const t=this.malloc(2*(e.charCount+1));this.pdfiumModule.FPDFText_GetText(i,e.charIndex,e.charCount,t),r[n]=this.pdfiumModule.pdfium.UTF16ToString(t).replace(c,""),this.free(t)}o.release()}return this.logger.perf(U,V,"GetTextSlices","End",e.id),y.resolve(r)}catch(t){return this.logger.error(U,V,"getTextSlices error",t),this.logger.perf(U,V,"GetTextSlices","End",e.id),y.reject({code:C.Unknown,message:String(t)})}}merge(e){this.logger.debug(U,V,"merge",e);const t=e.map((e=>e.id)).join(".");this.logger.perf(U,V,"Merge","Begin",t);const n=this.pdfiumModule.FPDF_CreateNewDocument();if(!n)return this.logger.perf(U,V,"Merge","End",t),y.reject({code:C.CantCreateNewDoc,message:"can not create new document"});const r=[];for(const o of e.reverse()){const e=new Uint8Array(o.content),i=e.length,a=this.malloc(i);this.pdfiumModule.pdfium.HEAPU8.set(e,a);const s=this.pdfiumModule.FPDF_LoadMemDocument(a,i,"");if(!s){const e=this.pdfiumModule.FPDF_GetLastError();this.logger.error(U,V,`FPDF_LoadMemDocument failed with ${e}`),this.free(a);for(const e of r)this.pdfiumModule.FPDF_CloseDocument(e.docPtr),this.free(e.filePtr);return this.logger.perf(U,V,"Merge","End",t),y.reject({code:e,message:"FPDF_LoadMemDocument failed"})}if(r.push({filePtr:a,docPtr:s}),!this.pdfiumModule.FPDF_ImportPages(n,s,"",0)){this.pdfiumModule.FPDF_CloseDocument(n);for(const e of r)this.pdfiumModule.FPDF_CloseDocument(e.docPtr),this.free(e.filePtr);return this.logger.perf(U,V,"Merge","End",t),y.reject({code:C.CantImportPages,message:"can not import pages to new document"})}}const o=this.saveDocument(n);this.pdfiumModule.FPDF_CloseDocument(n);for(const e of r)this.pdfiumModule.FPDF_CloseDocument(e.docPtr),this.free(e.filePtr);const i={id:`${Math.random()}`,content:o};return this.logger.perf(U,V,"Merge","End",t),y.resolve(i)}mergePages(e){const t=e.map((e=>`${e.docId}:${e.pageIndices.join(",")}`)).join("|");this.logger.debug(U,V,"mergePages",e),this.logger.perf(U,V,"MergePages","Begin",t);const n=this.pdfiumModule.FPDF_CreateNewDocument();if(!n)return this.logger.perf(U,V,"MergePages","End",t),y.reject({code:C.CantCreateNewDoc,message:"Cannot create new document"});try{for(const t of[...e].reverse()){const e=this.cache.getContext(t.docId);if(!e){this.logger.warn(U,V,`Document ${t.docId} is not open, skipping`);continue}const r=this.pdfiumModule.FPDF_GetPageCount(e.docPtr),o=t.pageIndices.filter((e=>e>=0&&e<r));if(0===o.length)continue;const i=o.map((e=>e+1)).join(",");try{if(!this.pdfiumModule.FPDF_ImportPages(n,e.docPtr,i,0))throw new Error(`Failed to import pages ${i} from document ${t.docId}`)}finally{}}const r=this.saveDocument(n),o={id:`${Math.random()}`,content:r};return this.logger.perf(U,V,"MergePages","End",t),y.resolve(o)}catch(e){return this.logger.error(U,V,"mergePages failed",e),this.logger.perf(U,V,"MergePages","End",t),y.reject({code:C.CantImportPages,message:e instanceof Error?e.message:"Failed to merge pages"})}finally{n&&this.pdfiumModule.FPDF_CloseDocument(n)}}saveAsCopy(e){this.logger.debug(U,V,"saveAsCopy",e),this.logger.perf(U,V,"SaveAsCopy","Begin",e.id);const t=this.cache.getContext(e.id);if(!t)return this.logger.perf(U,V,"SaveAsCopy","End",e.id),y.reject({code:C.DocNotOpen,message:"document does not open"});const n=this.saveDocument(t.docPtr);return this.logger.perf(U,V,"SaveAsCopy","End",e.id),y.resolve(n)}closeDocument(e){this.logger.debug(U,V,"closeDocument",e),this.logger.perf(U,V,"CloseDocument","Begin",e.id);const t=this.cache.getContext(e.id);return t?(t.dispose(),this.logger.perf(U,V,"CloseDocument","End",e.id),y.resolve(!0)):(this.logger.perf(U,V,"CloseDocument","End",e.id),y.reject({code:C.DocNotOpen,message:"document does not open"}))}malloc(e){const t=this.pdfiumModule.pdfium.wasmExports.malloc(e);for(let n=0;n<e;n++)this.pdfiumModule.pdfium.HEAP8[t+n]=0;return t}free(e){this.pdfiumModule.pdfium.wasmExports.free(e)}addInkStroke(e,t,n,r){return!!this.setBorderStyle(n,A.SOLID,r.strokeWidth)&&(!!this.setPageAnnoRect(e,t,n,r.rect)&&(!!this.setInkList(e,n,r.inkList)&&(!!this.setAnnotString(n,"T",r.author||"")&&(!!this.setAnnotString(n,"M",M(r.modified))&&!!this.setAnnotationColor(n,{color:r.color??"#FFFF00",opacity:r.opacity??1},f.Color)))))}addTextMarkupContent(e,t,n,r){return!!this.setPageAnnoRect(e,t,n,r.rect)&&(!!this.syncQuadPointsAnno(e,n,r.segmentRects)&&(!!this.setAnnotString(n,"Contents",r.contents??"")&&(!!this.setAnnotString(n,"T",r.author||"")&&(!!this.setAnnotString(n,"M",M(r.modified))&&!!this.setAnnotationColor(n,{color:r.color??"#FFFF00",opacity:r.opacity??1},f.Color)))))}addStampContent(e,t,n,r,o,i){for(const a of i)if(a.type===E.IMAGE)return this.addImageObject(e,t,n,r,o.origin,a.imageData);return!1}addImageObject(e,t,n,r,o,i){const a=i.width*i.height,s=this.malloc(4*a);if(!s)return!1;for(let e=0;e<a;e++){const t=i.data[4*e],n=i.data[4*e+1],r=i.data[4*e+2],o=i.data[4*e+3];this.pdfiumModule.pdfium.setValue(s+4*e,r,"i8"),this.pdfiumModule.pdfium.setValue(s+4*e+1,n,"i8"),this.pdfiumModule.pdfium.setValue(s+4*e+2,t,"i8"),this.pdfiumModule.pdfium.setValue(s+4*e+3,o,"i8")}const u=B.Bitmap_BGRA,F=this.pdfiumModule.FPDFBitmap_CreateEx(i.width,i.height,u,s,0);if(!F)return this.free(s),!1;const m=this.pdfiumModule.FPDFPageObj_NewImageObj(e);if(!m)return this.pdfiumModule.FPDFBitmap_Destroy(F),this.free(s),!1;if(!this.pdfiumModule.FPDFImageObj_SetBitmap(n,0,m,F))return this.pdfiumModule.FPDFBitmap_Destroy(F),this.pdfiumModule.FPDFPageObj_Destroy(m),this.free(s),!1;const l=this.malloc(24);return this.pdfiumModule.pdfium.setValue(l,i.width,"float"),this.pdfiumModule.pdfium.setValue(l+4,0,"float"),this.pdfiumModule.pdfium.setValue(l+8,0,"float"),this.pdfiumModule.pdfium.setValue(l+12,i.height,"float"),this.pdfiumModule.pdfium.setValue(l+16,0,"float"),this.pdfiumModule.pdfium.setValue(l+20,0,"float"),this.pdfiumModule.FPDFPageObj_SetMatrix(m,l)?(this.free(l),this.pdfiumModule.FPDFPageObj_Transform(m,1,0,0,1,o.x,o.y),this.pdfiumModule.FPDFAnnot_AppendObject(r,m)?(this.pdfiumModule.FPDFPage_GenerateContent(n),this.pdfiumModule.FPDFBitmap_Destroy(F),this.free(s),!0):(this.pdfiumModule.FPDFBitmap_Destroy(F),this.pdfiumModule.FPDFPageObj_Destroy(m),this.free(s),!1)):(this.free(l),this.pdfiumModule.FPDFBitmap_Destroy(F),this.pdfiumModule.FPDFPageObj_Destroy(m),this.free(s),!1)}saveDocument(e){const t=this.pdfiumModule.PDFiumExt_OpenFileWriter();this.pdfiumModule.PDFiumExt_SaveAsCopy(e,t);const n=this.pdfiumModule.PDFiumExt_GetFileWriterSize(t),r=this.malloc(n);this.pdfiumModule.PDFiumExt_GetFileWriterData(t,r,n);const o=new ArrayBuffer(n),i=new DataView(o);for(let e=0;e<n;e++)i.setInt8(e,this.pdfiumModule.pdfium.getValue(r+e,"i8"));return this.free(r),this.pdfiumModule.PDFiumExt_CloseFileWriter(t),o}readMetaText(e,t){return w(this.pdfiumModule.pdfium,((n,r)=>this.pdfiumModule.FPDF_GetMetaText(e,t,n,r)),this.pdfiumModule.pdfium.UTF16ToString)}readPdfBookmarks(e,t=0){let n=this.pdfiumModule.FPDFBookmark_GetFirstChild(e,t);const r=[];for(;n;){const t=this.readPdfBookmark(e,n);r.push(t);n=this.pdfiumModule.FPDFBookmark_GetNextSibling(e,n)}return r}readPdfBookmark(e,t){const n=w(this.pdfiumModule.pdfium,((e,n)=>this.pdfiumModule.FPDFBookmark_GetTitle(t,e,n)),this.pdfiumModule.pdfium.UTF16ToString),r=this.readPdfBookmarks(e,t);return{title:n,target:this.readPdfBookmarkTarget(e,(()=>this.pdfiumModule.FPDFBookmark_GetAction(t)),(()=>this.pdfiumModule.FPDFBookmark_GetDest(e,t))),children:r}}readPageTextRects(e,t,n,r){const o=this.pdfiumModule.FPDFText_CountRects(r,0,-1),i=[];for(let t=0;t<o;t++){const o=this.malloc(8),a=this.malloc(8),s=this.malloc(8),u=this.malloc(8);if(!this.pdfiumModule.FPDFText_GetRect(r,t,a,o,s,u)){this.free(a),this.free(o),this.free(s),this.free(u);continue}const F=this.pdfiumModule.pdfium.getValue(a,"double"),m=this.pdfiumModule.pdfium.getValue(o,"double"),l=this.pdfiumModule.pdfium.getValue(s,"double"),d=this.pdfiumModule.pdfium.getValue(u,"double");this.free(a),this.free(o),this.free(s),this.free(u);const _=this.malloc(4),P=this.malloc(4);this.pdfiumModule.FPDF_PageToDevice(n,0,0,e.size.width,e.size.height,0,F,m,_,P);const c=this.pdfiumModule.pdfium.getValue(_,"i32"),g=this.pdfiumModule.pdfium.getValue(P,"i32");this.free(_),this.free(P);const h={origin:{x:c,y:g},size:{width:Math.ceil(Math.abs(l-F)),height:Math.ceil(Math.abs(m-d))}},D=this.pdfiumModule.FPDFText_GetBoundedText(r,F,m,l,d,0,0),b=2*(D+1),p=this.malloc(b);this.pdfiumModule.FPDFText_GetBoundedText(r,F,m,l,d,p,D);const f=this.pdfiumModule.pdfium.UTF16ToString(p);this.free(p);const A=this.pdfiumModule.FPDFText_GetCharIndexAtPos(r,F,m,2,2);let E="",G=h.size.height;if(A>=0){G=this.pdfiumModule.FPDFText_GetFontSize(r,A);const e=this.pdfiumModule.FPDFText_GetFontInfo(r,A,0,0,0)+1,t=this.malloc(e),n=this.malloc(4);this.pdfiumModule.FPDFText_GetFontInfo(r,A,t,e,n),E=this.pdfiumModule.pdfium.UTF8ToString(t),this.free(t),this.free(n)}const S={content:f,rect:h,font:{family:E,size:G}};i.push(S)}return i}getPageGeometry(e,t){const n="getPageGeometry";this.logger.perf(U,V,n,"Begin",e.id);const r=this.cache.getContext(e.id);if(!r)return this.logger.perf(U,V,n,"End",e.id),y.reject({code:C.DocNotOpen,message:"document does not open"});const o=r.acquirePage(t.index),i=o.getTextPage(),a=this.pdfiumModule.FPDFText_CountChars(i),s=[];for(let e=0;e<a;e++){const n=this.readGlyphInfo(t,o.pagePtr,i,e);s.push(n)}const u=this.buildRunsFromGlyphs(s,i);return o.release(),this.logger.perf(U,V,n,"End",e.id),y.resolve({runs:u})}buildRunsFromGlyphs(e,t){const n=[];let r=null,o=null,i=null;for(let a=0;a<e.length;a++){const s=e[a],u=this.pdfiumModule.FPDFText_GetTextObject(t,a);if(u!==o&&(o=u,r={rect:{x:s.origin.x,y:s.origin.y,width:s.size.width,height:s.size.height},charStart:a,glyphs:[]},i={minX:s.origin.x,minY:s.origin.y,maxX:s.origin.x+s.size.width,maxY:s.origin.y+s.size.height},n.push(r)),r.glyphs.push({x:s.origin.x,y:s.origin.y,width:s.size.width,height:s.size.height,flags:s.isEmpty?2:s.isSpace?1:0}),s.isEmpty)continue;const F=s.origin.x+s.size.width,m=s.origin.y+s.size.height;i.minX=Math.min(i.minX,s.origin.x),i.minY=Math.min(i.minY,s.origin.y),i.maxX=Math.max(i.maxX,F),i.maxY=Math.max(i.maxY,m),r.rect.x=i.minX,r.rect.y=i.minY,r.rect.width=i.maxX-i.minX,r.rect.height=i.maxY-i.minY}return n}readGlyphInfo(e,t,n,r){const o=this.malloc(4),i=this.malloc(4),a=this.malloc(4),s=this.malloc(4),u=this.malloc(16);let F=0,m=0,l=0,d=0,_=!1;if(this.pdfiumModule.FPDFText_GetLooseCharBox(n,r,u)){const P=this.pdfiumModule.pdfium.getValue(u,"float"),c=this.pdfiumModule.pdfium.getValue(u+4,"float"),g=this.pdfiumModule.pdfium.getValue(u+8,"float"),h=this.pdfiumModule.pdfium.getValue(u+12,"float");if(P===g||c===h)return{origin:{x:0,y:0},size:{width:0,height:0},isEmpty:!0};this.pdfiumModule.FPDF_PageToDevice(t,0,0,e.size.width,e.size.height,0,P,c,o,i),this.pdfiumModule.FPDF_PageToDevice(t,0,0,e.size.width,e.size.height,0,g,h,a,s);const D=this.pdfiumModule.pdfium.getValue(o,"i32"),b=this.pdfiumModule.pdfium.getValue(i,"i32"),p=this.pdfiumModule.pdfium.getValue(a,"i32"),f=this.pdfiumModule.pdfium.getValue(s,"i32");F=Math.min(D,p),m=Math.min(b,f),l=Math.max(1,Math.abs(p-D)),d=Math.max(1,Math.abs(f-b));_=32===this.pdfiumModule.FPDFText_GetUnicode(n,r)}return[u,o,i,a,s].forEach((e=>this.free(e))),{origin:{x:F,y:m},size:{width:l,height:d},..._&&{isSpace:_}}}getPageGlyphs(e,t){this.logger.debug(U,V,"getPageGlyphs",e,t),this.logger.perf(U,V,"getPageGlyphs","Begin",e.id);const n=this.cache.getContext(e.id);if(!n)return this.logger.perf(U,V,"getPageGlyphs","End",e.id),y.reject({code:C.DocNotOpen,message:"document does not open"});const r=n.acquirePage(t.index),o=r.getTextPage(),i=this.pdfiumModule.FPDFText_CountChars(o),a=new Array(i);for(let e=0;e<i;e++){const n=this.readGlyphInfo(t,r.pagePtr,o,e);n.isEmpty||(a[e]={...n})}return r.release(),this.logger.perf(U,V,"getPageGlyphs","End",e.id),y.resolve(a)}readCharBox(e,t,n,r){const o=this.malloc(8),i=this.malloc(8),a=this.malloc(8),s=this.malloc(8);let u=0,F=0,m=0,l=0;if(this.pdfiumModule.FPDFText_GetCharBox(n,r,i,s,a,o)){const n=this.pdfiumModule.pdfium.getValue(o,"double"),r=this.pdfiumModule.pdfium.getValue(i,"double"),d=this.pdfiumModule.pdfium.getValue(a,"double"),_=this.pdfiumModule.pdfium.getValue(s,"double"),P=this.malloc(4),c=this.malloc(4);this.pdfiumModule.FPDF_PageToDevice(t,0,0,e.size.width,e.size.height,0,r,n,P,c),u=this.pdfiumModule.pdfium.getValue(P,"i32"),F=this.pdfiumModule.pdfium.getValue(c,"i32"),this.free(P),this.free(c),m=Math.ceil(Math.abs(_-r)),l=Math.ceil(Math.abs(n-d))}return this.free(o),this.free(i),this.free(a),this.free(s),{origin:{x:u,y:F},size:{width:m,height:l}}}readPageAnnotations(e,t){const n=e.acquirePage(t.index),r=this.pdfiumModule.FPDFPage_GetAnnotCount(n.pagePtr),o=[];for(let e=0;e<r;e++)n.withAnnotation(e,(r=>{const i=this.readPageAnnotation(t,n,r,e);i&&o.push(i)}));return o}readPageAnnotation(e,t,n,r){const o=this.pdfiumModule.FPDFAnnot_GetSubtype(n);let i;switch(o){case D.TEXT:i=this.readPdfTextAnno(e,t.pagePtr,n,r);break;case D.FREETEXT:i=this.readPdfFreeTextAnno(e,t.pagePtr,n,r);break;case D.LINK:i=this.readPdfLinkAnno(e,t.docPtr,t.pagePtr,t.getTextPage(),n,r);break;case D.WIDGET:i=this.readPdfWidgetAnno(e,t.pagePtr,n,t.getFormHandle(),r);break;case D.FILEATTACHMENT:i=this.readPdfFileAttachmentAnno(e,t.pagePtr,n,r);break;case D.INK:i=this.readPdfInkAnno(e,t.pagePtr,n,r);break;case D.POLYGON:i=this.readPdfPolygonAnno(e,t.pagePtr,n,r);break;case D.POLYLINE:i=this.readPdfPolylineAnno(e,t.pagePtr,n,r);break;case D.LINE:i=this.readPdfLineAnno(e,t.pagePtr,n,r);break;case D.HIGHLIGHT:i=this.readPdfHighlightAnno(e,t.pagePtr,n,r);break;case D.STAMP:i=this.readPdfStampAnno(t.docPtr,e,t.pagePtr,n,r);break;case D.SQUARE:i=this.readPdfSquareAnno(e,t.pagePtr,n,r);break;case D.CIRCLE:i=this.readPdfCircleAnno(e,t.pagePtr,n,r);break;case D.UNDERLINE:i=this.readPdfUnderlineAnno(e,t.pagePtr,n,r);break;case D.SQUIGGLY:i=this.readPdfSquigglyAnno(e,t.pagePtr,n,r);break;case D.STRIKEOUT:i=this.readPdfStrikeOutAnno(e,t.pagePtr,n,r);break;case D.CARET:i=this.readPdfCaretAnno(e,t.pagePtr,n,r);break;default:i=this.readPdfAnno(e,t.pagePtr,o,n,r)}return i}readAnnotationColor(e,t=f.Color){const n=this.malloc(4),r=this.malloc(4),o=this.malloc(4),i=this.malloc(4);let a;return this.pdfiumModule.EPDFAnnot_GetColor(e,t,n,r,o,i)&&(a={red:255&this.pdfiumModule.pdfium.getValue(n,"i32"),green:255&this.pdfiumModule.pdfium.getValue(r,"i32"),blue:255&this.pdfiumModule.pdfium.getValue(o,"i32"),alpha:255&this.pdfiumModule.pdfium.getValue(i,"i32")}),this.free(n),this.free(r),this.free(o),this.free(i),a}resolveAnnotationColor(e,t=f.Color,n={red:255,green:245,blue:155,alpha:255}){return function(e){const t=e=>Math.max(0,Math.min(255,e)),n=e=>t(e).toString(16).padStart(2,"0");return{color:`#${n(e.red)}${n(e.green)}${n(e.blue)}`,opacity:t(e.alpha)/255}}(this.readAnnotationColor(e,t)??n)}setAnnotationColor(e,t,n=f.Color){const r=function({color:e,opacity:t}){/^#?[0-9a-f]{3}$/i.test(e)&&(e=e.replace(/^#?([0-9a-f])([0-9a-f])([0-9a-f])$/i,"#$1$1$2$2$3$3").toLowerCase());const[,n,r,o]=/^#?([0-9a-f]{2})([0-9a-f]{2})([0-9a-f]{2})$/i.exec(e)??(()=>{throw new Error(`Invalid hex colour: \u201C${e}\u201D`)})();return{red:parseInt(n,16),green:parseInt(r,16),blue:parseInt(o,16),alpha:((e,t=255)=>Math.max(0,Math.min(t,e)))(Math.round(255*t))}}(t);return this.pdfiumModule.EPDFAnnot_SetColor(e,n,255&r.red,255&r.green,255&r.blue,255&(r.alpha??255))}getBorderStyle(e){const t=this.malloc(4);let n=0,r=A.UNKNOWN,o=!1;return r=this.pdfiumModule.EPDFAnnot_GetBorderStyle(e,t),n=this.pdfiumModule.pdfium.getValue(t,"float"),o=r!==A.UNKNOWN,this.free(t),{ok:o,style:r,width:n}}setBorderStyle(e,t,n){return this.pdfiumModule.EPDFAnnot_SetBorderStyle(e,t,n)}getBorderEffect(e){const t=this.malloc(4),n=!!this.pdfiumModule.EPDFAnnot_GetBorderEffect(e,t),r=n?this.pdfiumModule.pdfium.getValue(t,"float"):0;return this.free(t),{ok:n,intensity:r}}getRectangleDifferences(e){const t=this.malloc(4),n=this.malloc(4),r=this.malloc(4),o=this.malloc(4),i=!!this.pdfiumModule.EPDFAnnot_GetRectangleDifferences(e,t,n,r,o),a=this.pdfiumModule.pdfium,s=a.getValue(t,"float"),u=a.getValue(n,"float"),F=a.getValue(r,"float"),m=a.getValue(o,"float");return this.free(t),this.free(n),this.free(r),this.free(o),{ok:i,left:s,top:u,right:F,bottom:m}}getBorderDashPattern(e){const t=this.pdfiumModule.EPDFAnnot_GetBorderDashPatternCount(e);if(0===t)return{ok:!1,pattern:[]};const n=this.malloc(4*t),r=!!this.pdfiumModule.EPDFAnnot_GetBorderDashPattern(e,n,t),o=[];if(r){const e=this.pdfiumModule.pdfium;for(let r=0;r<t;r++)o.push(e.getValue(n+4*r,"float"))}return this.free(n),{ok:r,pattern:o}}getQuadPointsAnno(e,t){const n=this.pdfiumModule.FPDFAnnot_CountAttachmentPoints(t);if(0===n)return[];const r=[];for(let o=0;o<n;o++){const n=this.malloc(32);if(this.pdfiumModule.FPDFAnnot_GetAttachmentPoints(t,o,n)){const t=[],o=[];for(let e=0;e<4;e++){const r=n+8*e;t.push(this.pdfiumModule.pdfium.getValue(r,"float")),o.push(this.pdfiumModule.pdfium.getValue(r+4,"float"))}const i=this.convertPagePointToDevicePoint(e,{x:t[0],y:o[0]}),a=this.convertPagePointToDevicePoint(e,{x:t[1],y:o[1]}),s=this.convertPagePointToDevicePoint(e,{x:t[2],y:o[2]}),u=this.convertPagePointToDevicePoint(e,{x:t[3],y:o[3]});r.push({p1:i,p2:a,p3:s,p4:u})}this.free(n)}return r.map(u)}syncQuadPointsAnno(e,t,n){const r=this.pdfiumModule.pdfium,o=this.pdfiumModule.FPDFAnnot_CountAttachmentPoints(t),i=this.malloc(32),a=t=>{const n=function(e){return{p1:{x:e.origin.x,y:e.origin.y},p2:{x:e.origin.x+e.size.width,y:e.origin.y},p3:{x:e.origin.x+e.size.width,y:e.origin.y+e.size.height},p4:{x:e.origin.x,y:e.origin.y+e.size.height}}}(t),o=this.convertDevicePointToPagePoint(e,n.p1),a=this.convertDevicePointToPagePoint(e,n.p2),s=this.convertDevicePointToPagePoint(e,n.p3),u=this.convertDevicePointToPagePoint(e,n.p4);r.setValue(i+0,o.x,"float"),r.setValue(i+4,o.y,"float"),r.setValue(i+8,a.x,"float"),r.setValue(i+12,a.y,"float"),r.setValue(i+16,u.x,"float"),r.setValue(i+20,u.y,"float"),r.setValue(i+24,s.x,"float"),r.setValue(i+28,s.y,"float")},s=Math.min(o,n.length);for(let e=0;e<s;e++)if(a(n[e]),!this.pdfiumModule.FPDFAnnot_SetAttachmentPoints(t,e,i))return this.free(i),!1;for(let e=o;e<n.length;e++)if(a(n[e]),!this.pdfiumModule.FPDFAnnot_AppendAttachmentPoints(t,i))return this.free(i),!1;return this.free(i),!0}getInkList(e,t){const n=[],r=this.pdfiumModule.FPDFAnnot_GetInkListCount(t);for(let o=0;o<r;o++){const r=[],i=this.pdfiumModule.FPDFAnnot_GetInkListPath(t,o,0,0);if(i>0){const n=8,a=this.malloc(i*n);this.pdfiumModule.FPDFAnnot_GetInkListPath(t,o,a,i);for(let t=0;t<i;t++){const n=this.pdfiumModule.pdfium.getValue(a+8*t,"float"),o=this.pdfiumModule.pdfium.getValue(a+8*t+4,"float"),{x:i,y:s}=this.convertPagePointToDevicePoint(e,{x:n,y:o});r.push({x:i,y:s})}this.free(a)}n.push({points:r})}return n}setInkList(e,t,n){for(const r of n){const n=r.points.length,o=this.malloc(8*n);for(let t=0;t<n;t++){const n=r.points[t],{x:i,y:a}=this.convertDevicePointToPagePoint(e,n);this.pdfiumModule.pdfium.setValue(o+8*t,i,"float"),this.pdfiumModule.pdfium.setValue(o+8*t+4,a,"float")}if(-1===this.pdfiumModule.FPDFAnnot_AddInkStroke(t,o,n))return this.free(o),!1;this.free(o)}return!0}readPdfTextAnno(e,t,n,r){const o=this.readPageAnnoRect(n),i=this.convertPageRectToDeviceRect(e,t,o),a=this.getAnnotString(n,"T"),s=T(this.getAnnotString(n,"M")),u=this.getAnnotString(n,"Contents")||"",F=this.getAnnotString(n,"State"),m=this.getAnnotString(n,"StateModel"),l=this.resolveAnnotationColor(n),d=this.getInReplyToId(t,n);return{pageIndex:e.index,id:r,type:D.TEXT,contents:u,...l,rect:i,inReplyToId:d,author:a,modified:s,state:F,stateModel:m}}readPdfFreeTextAnno(e,t,n,r){const o=this.readPageAnnoRect(n),i=this.convertPageRectToDeviceRect(e,t,o),a=this.getAnnotString(n,"Contents")||"",s=this.getAnnotString(n,"T"),u=T(this.getAnnotString(n,"M"));return{pageIndex:e.index,id:r,type:D.FREETEXT,contents:a,author:s,modified:u,rect:i}}readPdfLinkAnno(e,t,n,r,o,i){const a=this.pdfiumModule.FPDFAnnot_GetLink(o);if(!a)return;const s=this.readPageAnnoRect(o),{left:u,top:F,right:m,bottom:l}=s,d=this.convertPageRectToDeviceRect(e,n,s),_=this.getAnnotString(o,"T"),P=T(this.getAnnotString(o,"M")),c=this.pdfiumModule.FPDFText_GetBoundedText(r,u,F,m,l,0,0),g=2*(c+1),h=this.malloc(g);this.pdfiumModule.FPDFText_GetBoundedText(r,u,F,m,l,h,c);const b=this.pdfiumModule.pdfium.UTF16ToString(h);this.free(h);const p=this.readPdfLinkAnnoTarget(t,(()=>this.pdfiumModule.FPDFLink_GetAction(a)),(()=>this.pdfiumModule.FPDFLink_GetDest(t,a)));return{pageIndex:e.index,id:i,type:D.LINK,text:b,target:p,rect:d,author:_,modified:P}}readPdfWidgetAnno(e,t,n,r,o){const i=this.readPageAnnoRect(n),a=this.convertPageRectToDeviceRect(e,t,i),s=this.getAnnotString(n,"T"),u=T(this.getAnnotString(n,"M")),F=this.readPdfWidgetAnnoField(r,n);return{pageIndex:e.index,id:o,type:D.WIDGET,rect:a,field:F,author:s,modified:u}}readPdfFileAttachmentAnno(e,t,n,r){const o=this.readPageAnnoRect(n),i=this.convertPageRectToDeviceRect(e,t,o),a=this.getAnnotString(n,"T"),s=T(this.getAnnotString(n,"M"));return{pageIndex:e.index,id:r,type:D.FILEATTACHMENT,rect:i,author:a,modified:s}}readPdfInkAnno(e,t,n,r){const o=this.readPageAnnoRect(n),i=this.convertPageRectToDeviceRect(e,t,o),a=this.getAnnotString(n,"T"),s=T(this.getAnnotString(n,"M")),u=this.resolveAnnotationColor(n),{width:F}=this.getBorderStyle(n),m=this.getInkList(e,n);return{pageIndex:e.index,id:r,type:D.INK,...u,strokeWidth:F,rect:i,inkList:m,author:a,modified:s}}readPdfPolygonAnno(e,t,n,r){const o=this.readPageAnnoRect(n),i=this.convertPageRectToDeviceRect(e,t,o),a=this.getAnnotString(n,"T"),s=T(this.getAnnotString(n,"M")),u=this.readPdfAnnoVertices(e,t,n);return{pageIndex:e.index,id:r,type:D.POLYGON,rect:i,vertices:u,author:a,modified:s}}readPdfPolylineAnno(e,t,n,r){const o=this.readPageAnnoRect(n),i=this.convertPageRectToDeviceRect(e,t,o),a=this.getAnnotString(n,"T"),s=T(this.getAnnotString(n,"M")),u=this.readPdfAnnoVertices(e,t,n);return{pageIndex:e.index,id:r,type:D.POLYLINE,rect:i,vertices:u,author:a,modified:s}}readPdfLineAnno(e,t,n,r){const o=this.readPageAnnoRect(n),i=this.convertPageRectToDeviceRect(e,t,o),a=this.getAnnotString(n,"T"),s=T(this.getAnnotString(n,"M")),u=this.malloc(8),F=this.malloc(8);this.pdfiumModule.FPDFAnnot_GetLine(n,u,F);const m=this.pdfiumModule.pdfium.getValue(u,"float"),l=this.pdfiumModule.pdfium.getValue(u+4,"float"),d=this.convertPagePointToDevicePoint(e,{x:m,y:l}),_=this.pdfiumModule.pdfium.getValue(F,"float"),P=this.pdfiumModule.pdfium.getValue(F+4,"float"),c=this.convertPagePointToDevicePoint(e,{x:_,y:P});return this.free(u),this.free(F),{pageIndex:e.index,id:r,type:D.LINE,rect:i,startPoint:d,endPoint:c,author:a,modified:s}}readPdfHighlightAnno(e,t,n,r){const o=this.readPageAnnoRect(n),i=this.convertPageRectToDeviceRect(e,t,o),a=this.getQuadPointsAnno(e,n),s=this.resolveAnnotationColor(n),u=this.getAnnotString(n,"T"),F=T(this.getAnnotString(n,"M")),m=this.getAnnotString(n,"Contents")||"";return{pageIndex:e.index,id:r,type:D.HIGHLIGHT,rect:i,contents:m,segmentRects:a,...s,author:u,modified:F}}readPdfUnderlineAnno(e,t,n,r){const o=this.readPageAnnoRect(n),i=this.convertPageRectToDeviceRect(e,t,o),a=this.getAnnotString(n,"T"),s=T(this.getAnnotString(n,"M")),u=this.getQuadPointsAnno(e,n),F=this.getAnnotString(n,"Contents")||"",m=this.resolveAnnotationColor(n);return{pageIndex:e.index,id:r,type:D.UNDERLINE,rect:i,contents:F,segmentRects:u,...m,author:a,modified:s}}readPdfStrikeOutAnno(e,t,n,r){const o=this.readPageAnnoRect(n),i=this.convertPageRectToDeviceRect(e,t,o),a=this.getAnnotString(n,"T"),s=T(this.getAnnotString(n,"M")),u=this.getQuadPointsAnno(e,n),F=this.getAnnotString(n,"Contents")||"",m=this.resolveAnnotationColor(n);return{pageIndex:e.index,id:r,type:D.STRIKEOUT,rect:i,contents:F,segmentRects:u,...m,author:a,modified:s}}readPdfSquigglyAnno(e,t,n,r){const o=this.readPageAnnoRect(n),i=this.convertPageRectToDeviceRect(e,t,o),a=this.getAnnotString(n,"T"),s=T(this.getAnnotString(n,"M")),u=this.getQuadPointsAnno(e,n),F=this.getAnnotString(n,"Contents")||"",m=this.resolveAnnotationColor(n);return{pageIndex:e.index,id:r,type:D.SQUIGGLY,rect:i,contents:F,segmentRects:u,...m,author:a,modified:s}}readPdfCaretAnno(e,t,n,r){const o=this.readPageAnnoRect(n),i=this.convertPageRectToDeviceRect(e,t,o),a=this.getAnnotString(n,"T"),s=T(this.getAnnotString(n,"M"));return{pageIndex:e.index,id:r,type:D.CARET,rect:i,author:a,modified:s}}readPdfStampAnno(e,t,n,r,o){const i=this.readPageAnnoRect(r),a=this.convertPageRectToDeviceRect(t,n,i),s=this.getAnnotString(r,"T"),u=T(this.getAnnotString(r,"M")),F=[],m=this.pdfiumModule.FPDFAnnot_GetObjectCount(r);for(let e=0;e<m;e++){const t=this.pdfiumModule.FPDFAnnot_GetObject(r,e),n=this.readPdfPageObject(t);n&&F.push(n)}return{pageIndex:t.index,id:o,type:D.STAMP,rect:a,contents:F,author:s,modified:u}}readPdfPageObject(e){switch(this.pdfiumModule.FPDFPageObj_GetType(e)){case E.PATH:return this.readPathObject(e);case E.IMAGE:return this.readImageObject(e);case E.FORM:return this.readFormObject(e)}}readPathObject(e){const t=this.pdfiumModule.FPDFPath_CountSegments(e),n=this.malloc(4),r=this.malloc(4),o=this.malloc(4),i=this.malloc(4);this.pdfiumModule.FPDFPageObj_GetBounds(e,n,r,o,i);const a={left:this.pdfiumModule.pdfium.getValue(n,"float"),bottom:this.pdfiumModule.pdfium.getValue(r,"float"),right:this.pdfiumModule.pdfium.getValue(o,"float"),top:this.pdfiumModule.pdfium.getValue(i,"float")};this.free(n),this.free(r),this.free(o),this.free(i);const s=[];for(let n=0;n<t;n++){const t=this.readPdfSegment(e,n);s.push(t)}const u=this.readPdfPageObjectTransformMatrix(e);return{type:E.PATH,bounds:a,segments:s,matrix:u}}readPdfSegment(e,t){const n=this.pdfiumModule.FPDFPath_GetPathSegment(e,t),r=this.pdfiumModule.FPDFPathSegment_GetType(n),o=this.pdfiumModule.FPDFPathSegment_GetClose(n),i=this.malloc(4),a=this.malloc(4);this.pdfiumModule.FPDFPathSegment_GetPoint(n,i,a);const s=this.pdfiumModule.pdfium.getValue(i,"float"),u=this.pdfiumModule.pdfium.getValue(a,"float");return this.free(i),this.free(a),{type:r,point:{x:s,y:u},isClosed:o}}readImageObject(e){const t=this.pdfiumModule.FPDFImageObj_GetBitmap(e),n=this.pdfiumModule.FPDFBitmap_GetBuffer(t),r=this.pdfiumModule.FPDFBitmap_GetWidth(t),o=this.pdfiumModule.FPDFBitmap_GetHeight(t),i=this.pdfiumModule.FPDFBitmap_GetFormat(t),a=r*o,s=new Uint8ClampedArray(4*a);for(let e=0;e<a;e++)if(i===B.Bitmap_BGR){const t=this.pdfiumModule.pdfium.getValue(n+3*e,"i8"),r=this.pdfiumModule.pdfium.getValue(n+3*e+1,"i8"),o=this.pdfiumModule.pdfium.getValue(n+3*e+2,"i8");s[4*e]=o,s[4*e+1]=r,s[4*e+2]=t,s[4*e+3]=100}const u=new ImageData(s,r,o),F=this.readPdfPageObjectTransformMatrix(e);return{type:E.IMAGE,imageData:u,matrix:F}}readFormObject(e){const t=this.pdfiumModule.FPDFFormObj_CountObjects(e),n=[];for(let r=0;r<t;r++){const t=this.pdfiumModule.FPDFFormObj_GetObject(e,r),o=this.readPdfPageObject(t);o&&n.push(o)}const r=this.readPdfPageObjectTransformMatrix(e);return{type:E.FORM,objects:n,matrix:r}}readPdfPageObjectTransformMatrix(e){const t=this.malloc(24);if(this.pdfiumModule.FPDFPageObj_GetMatrix(e,t)){const e=this.pdfiumModule.pdfium.getValue(t,"float"),n=this.pdfiumModule.pdfium.getValue(t+4,"float"),r=this.pdfiumModule.pdfium.getValue(t+8,"float"),o=this.pdfiumModule.pdfium.getValue(t+12,"float"),i=this.pdfiumModule.pdfium.getValue(t+16,"float"),a=this.pdfiumModule.pdfium.getValue(t+20,"float");return this.free(t),{a:e,b:n,c:r,d:o,e:i,f:a}}return this.free(t),{a:1,b:0,c:0,d:1,e:0,f:0}}getStrokeWidth(e){const t=this.malloc(4),n=this.malloc(4),r=this.malloc(4),o=this.pdfiumModule.FPDFAnnot_GetBorder(e,t,n,r)?this.pdfiumModule.pdfium.getValue(r,"float"):1;return this.free(t),this.free(n),this.free(r),o}getAnnotationFlags(e){const t=this.pdfiumModule.FPDFAnnot_GetFlags(e);return n=t,Object.keys(G).filter((e=>!!(n&e))).map((e=>G[e]));var n}readPdfCircleAnno(e,t,n,r){const o=this.getAnnotationFlags(n),i=this.readPageAnnoRect(n),a=this.convertPageRectToDeviceRect(e,t,i),s=this.getAnnotString(n,"T"),u=T(this.getAnnotString(n,"M")),{color:F,opacity:m}=this.resolveAnnotationColor(n,f.InteriorColor),{color:l}=this.resolveAnnotationColor(n);let d,_,P,{style:c,width:g}=this.getBorderStyle(n);if(c===A.CLOUDY||c===A.UNKNOWN){const{ok:e,intensity:t}=this.getBorderEffect(n);if(e){d=t,c=A.CLOUDY;const{ok:e,left:r,top:o,right:i,bottom:a}=this.getRectangleDifferences(n);e&&(_=[r,o,i,a])}}if(c===A.DASHED){const{ok:e,pattern:t}=this.getBorderDashPattern(n);e&&(P=t)}return{pageIndex:e.index,id:r,type:D.CIRCLE,flags:o,color:F,opacity:m,strokeWidth:g,strokeColor:l,strokeStyle:c,rect:a,author:s,modified:u,...void 0!==d&&{cloudyBorderIntensity:d},...void 0!==_&&{cloudyBorderInset:_},...void 0!==P&&{strokeDashArray:P}}}readPdfSquareAnno(e,t,n,r){const o=this.getAnnotationFlags(n),i=this.readPageAnnoRect(n),a=this.convertPageRectToDeviceRect(e,t,i),s=this.getAnnotString(n,"T"),u=T(this.getAnnotString(n,"M")),{color:F,opacity:m}=this.resolveAnnotationColor(n,f.InteriorColor),{color:l}=this.resolveAnnotationColor(n);let d,_,P,{style:c,width:g}=this.getBorderStyle(n);if(c===A.CLOUDY||c===A.UNKNOWN){const{ok:e,intensity:t}=this.getBorderEffect(n);if(e){d=t,c=A.CLOUDY;const{ok:e,left:r,top:o,right:i,bottom:a}=this.getRectangleDifferences(n);e&&(_=[r,o,i,a])}}if(c===A.DASHED){const{ok:e,pattern:t}=this.getBorderDashPattern(n);e&&(P=t)}return{pageIndex:e.index,id:r,type:D.SQUARE,flags:o,color:F,opacity:m,strokeColor:l,strokeWidth:g,strokeStyle:c,rect:a,author:s,modified:u,...void 0!==d&&{cloudyBorderIntensity:d},...void 0!==_&&{cloudyBorderInset:_},...void 0!==P&&{strokeDashArray:P}}}readPdfAnno(e,t,n,r,o){const i=this.readPageAnnoRect(r),a=this.convertPageRectToDeviceRect(e,t,i),s=this.getAnnotString(r,"T"),u=T(this.getAnnotString(r,"M"));return{pageIndex:e.index,id:o,type:n,rect:a,author:s,modified:u}}getInReplyToId(e,t){const n=this.pdfiumModule.FPDFAnnot_GetLinkedAnnot(t,"IRT");if(!n)return;const r=this.pdfiumModule.FPDFPage_GetAnnotIndex(e,n);return r>=0?r:void 0}getAnnotString(e,t){const n=this.pdfiumModule.FPDFAnnot_GetStringValue(e,t,0,0);if(0===n)return;const r=2*(n+1),o=this.malloc(r);this.pdfiumModule.FPDFAnnot_GetStringValue(e,t,o,r);const i=this.pdfiumModule.pdfium.UTF16ToString(o);return this.free(o),i||void 0}setAnnotString(e,t,n){const r=2*(n.length+1),o=this.malloc(r);this.pdfiumModule.pdfium.stringToUTF16(n,o,r);const i=this.pdfiumModule.FPDFAnnot_SetStringValue(e,t,o);return this.free(o),i}readPdfAnnoVertices(e,t,n){const r=[],o=this.pdfiumModule.FPDFAnnot_GetVertices(n,0,0),i=this.malloc(8*o);this.pdfiumModule.FPDFAnnot_GetVertices(n,i,o);for(let t=0;t<o;t++){const n=this.pdfiumModule.pdfium.getValue(i+8*t,"float"),o=this.pdfiumModule.pdfium.getValue(i+8*t+4,"float"),{x:a,y:s}=this.convertPagePointToDevicePoint(e,{x:n,y:o});r.push({x:a,y:s})}return this.free(i),r}readPdfBookmarkTarget(e,t,n){const r=t();if(r){return{type:"action",action:this.readPdfAction(e,r)}}{const t=n();if(t){return{type:"destination",destination:this.readPdfDestination(e,t)}}}}readPdfWidgetAnnoField(e,t){const n=this.pdfiumModule.FPDFAnnot_GetFormFieldFlags(e,t),r=this.pdfiumModule.FPDFAnnot_GetFormFieldType(e,t),o=w(this.pdfiumModule.pdfium,((n,r)=>this.pdfiumModule.FPDFAnnot_GetFormFieldName(e,t,n,r)),this.pdfiumModule.pdfium.UTF16ToString),i=w(this.pdfiumModule.pdfium,((n,r)=>this.pdfiumModule.FPDFAnnot_GetFormFieldAlternateName(e,t,n,r)),this.pdfiumModule.pdfium.UTF16ToString),a=w(this.pdfiumModule.pdfium,((n,r)=>this.pdfiumModule.FPDFAnnot_GetFormFieldValue(e,t,n,r)),this.pdfiumModule.pdfium.UTF16ToString),s=[];if(r===p.COMBOBOX||r===p.LISTBOX){const n=this.pdfiumModule.FPDFAnnot_GetOptionCount(e,t);for(let r=0;r<n;r++){const n=w(this.pdfiumModule.pdfium,((n,o)=>this.pdfiumModule.FPDFAnnot_GetOptionLabel(e,t,r,n,o)),this.pdfiumModule.pdfium.UTF16ToString),o=this.pdfiumModule.FPDFAnnot_IsOptionSelected(e,t,r);s.push({label:n,isSelected:o})}}let u=!1;return r!==p.CHECKBOX&&r!==p.RADIOBUTTON||(u=this.pdfiumModule.FPDFAnnot_IsChecked(e,t)),{flag:n,type:r,name:o,alternateName:i,value:a,isChecked:u,options:s}}renderAnnotation(e,t,n,r,o,i=1,s=b.Normal,u="image/webp"){this.logger.debug(U,V,"renderAnnotation",e,t,n,r,o,i,s,u),this.logger.perf(U,V,"RenderAnnotation","Begin",`${e.id}-${t.index}-${n.id}`);const m=new _,l=this.cache.getContext(e.id);if(!l)return this.logger.perf(U,V,"RenderAnnotation","End",`${e.id}-${t.index}-${n.id}`),y.reject({code:C.DocNotOpen,message:"document does not open"});const d=l.acquirePage(t.index),P=this.pdfiumModule.FPDFPage_GetAnnot(d.pagePtr,n.id);if(!P)return d.release(),this.logger.perf(U,V,"RenderAnnotation","End",`${e.id}-${t.index}-${n.id}`),y.reject({code:C.NotFound,message:"annotation not found"});const c=r*i,g=n.rect,h=a(F(t.size,g,o,c)),D=B.Bitmap_BGRA,p=h.size.width*h.size.height*4,f=this.malloc(p),A=this.pdfiumModule.FPDFBitmap_CreateEx(h.size.width,h.size.height,D,f,4*h.size.width);this.pdfiumModule.FPDFBitmap_FillRect(A,0,0,h.size.width,h.size.height,0);const E=((e,t,n)=>{const{width:r,height:o}=e.size;switch(t){case 0:return{a:n,b:0,c:0,d:-n,e:0,f:o*n};case 1:return{a:0,b:n,c:n,d:0,e:0,f:0};case 2:return{a:-n,b:0,c:0,d:n,e:r*n,f:0};case 3:return{a:0,b:-n,c:-n,d:0,e:o*n,f:r*n}}})(n.rect,o,c),G=this.malloc(24);new Float32Array(this.pdfiumModule.pdfium.HEAPF32.buffer,G,6).set([E.a,E.b,E.c,E.d,E.e,E.f]);const S=N.REVERSE_BYTE_ORDER,T=!!this.pdfiumModule.EPDF_RenderAnnotBitmap(A,d.pagePtr,P,s,G,S);if(this.free(G),this.pdfiumModule.FPDFBitmap_Destroy(A),this.pdfiumModule.FPDFPage_CloseAnnot(P),d.release(),!T)return this.free(f),this.logger.perf(U,V,"RenderAnnotation","End",`${e.id}-${t.index}-${n.id}`),y.reject({code:C.Unknown,message:"EPDF_RenderAnnotBitmap failed"});const M=this.pdfiumModule.pdfium.HEAPU8.subarray(f,f+p),O={data:new Uint8ClampedArray(M),width:h.size.width,height:h.size.height};return this.free(f),this.logger.perf(U,V,"RenderAnnotation","End",`${e.id}-${t.index}-${n.id}`),this.imageDataConverter(O,u).then((e=>m.resolve(e))).catch((e=>m.reject({code:C.Unknown,message:String(e)}))),m}renderPageRectToImageData(e,t,n,r,o,u,m){const l=B.Bitmap_BGRA,d=a(F(t.size,n,o,r*u)),_=i(function(e,t,n){return{width:(e=t%2==0?e:s(e)).width*n,height:e.height*n}}(t.size,o,r*u)),P=d.size.width*d.size.height*4,c=this.malloc(P),g=this.pdfiumModule.FPDFBitmap_CreateEx(d.size.width,d.size.height,l,c,4*d.size.width);this.pdfiumModule.FPDFBitmap_FillRect(g,0,0,d.size.width,d.size.height,4294967295);let h=N.REVERSE_BYTE_ORDER;m?.withAnnotations&&(h|=N.ANNOT);const D=e.acquirePage(t.index);this.pdfiumModule.FPDF_RenderPageBitmap(g,D.pagePtr,-d.origin.x,-d.origin.y,_.width,_.height,o,h),this.pdfiumModule.FPDFBitmap_Destroy(g),D.release();const b=this.pdfiumModule.pdfium.HEAPU8.subarray(c,c+P),p={data:new Uint8ClampedArray(b),width:d.size.width,height:d.size.height};return this.free(c),p}readPdfLinkAnnoTarget(e,t,n){const r=n();if(r){return{type:"destination",destination:this.readPdfDestination(e,r)}}{const n=t();if(n){return{type:"action",action:this.readPdfAction(e,n)}}}}readPdfAction(e,t){let n;switch(this.pdfiumModule.FPDFAction_GetType(t)){case h.Unsupported:n={type:h.Unsupported};break;case h.Goto:{const r=this.pdfiumModule.FPDFAction_GetDest(e,t);if(r){const t=this.readPdfDestination(e,r);n={type:h.Goto,destination:t}}else n={type:h.Unsupported}}break;case h.RemoteGoto:n={type:h.Unsupported};break;case h.URI:{const r=w(this.pdfiumModule.pdfium,((n,r)=>this.pdfiumModule.FPDFAction_GetURIPath(e,t,n,r)),this.pdfiumModule.pdfium.UTF8ToString);n={type:h.URI,uri:r}}break;case h.LaunchAppOrOpenFile:{const e=w(this.pdfiumModule.pdfium,((e,n)=>this.pdfiumModule.FPDFAction_GetFilePath(t,e,n)),this.pdfiumModule.pdfium.UTF8ToString);n={type:h.LaunchAppOrOpenFile,path:e}}}return n}readPdfDestination(e,t){const n=this.pdfiumModule.FPDFDest_GetDestPageIndex(e,t),r=this.malloc(4),o=this.malloc(16),i=this.pdfiumModule.FPDFDest_GetView(t,r,o),a=this.pdfiumModule.pdfium.getValue(r,"i32"),s=[];for(let e=0;e<a;e++){const t=o+4*e;s.push(this.pdfiumModule.pdfium.getValue(t,"float"))}if(this.free(r),this.free(o),i===g.XYZ){const e=this.malloc(1),r=this.malloc(1),o=this.malloc(1),a=this.malloc(4),u=this.malloc(4),F=this.malloc(4);if(this.pdfiumModule.FPDFDest_GetLocationInPage(t,e,r,o,a,u,F)){const t=this.pdfiumModule.pdfium.getValue(e,"i8"),m=this.pdfiumModule.pdfium.getValue(r,"i8"),l=this.pdfiumModule.pdfium.getValue(o,"i8"),d=t?this.pdfiumModule.pdfium.getValue(a,"float"):0,_=m?this.pdfiumModule.pdfium.getValue(u,"float"):0,P=l?this.pdfiumModule.pdfium.getValue(F,"float"):0;return this.free(e),this.free(r),this.free(o),this.free(a),this.free(u),this.free(F),{pageIndex:n,zoom:{mode:i,params:{x:d,y:_,zoom:P}},view:s}}return this.free(e),this.free(r),this.free(o),this.free(a),this.free(u),this.free(F),{pageIndex:n,zoom:{mode:i,params:{x:0,y:0,zoom:0}},view:s}}return{pageIndex:n,zoom:{mode:i},view:s}}readPdfAttachment(e,t){const n=this.pdfiumModule.FPDFDoc_GetAttachment(e,t);return{index:t,name:w(this.pdfiumModule.pdfium,((e,t)=>this.pdfiumModule.FPDFAttachment_GetName(n,e,t)),this.pdfiumModule.pdfium.UTF16ToString),creationDate:w(this.pdfiumModule.pdfium,((e,t)=>this.pdfiumModule.FPDFAttachment_GetStringValue(n,"CreationDate",e,t)),this.pdfiumModule.pdfium.UTF16ToString),checksum:w(this.pdfiumModule.pdfium,((e,t)=>this.pdfiumModule.FPDFAttachment_GetStringValue(n,"Checksum",e,t)),this.pdfiumModule.pdfium.UTF16ToString)}}convertDevicePointToPagePoint(e,t){return{x:t.x,y:e.size.height-t.y}}convertPagePointToDevicePoint(e,t){return{x:t.x,y:e.size.height-t.y}}convertPageRectToDeviceRect(e,t,n){const{x:r,y:o}=this.convertPagePointToDevicePoint(e,{x:n.left,y:n.top});return{origin:{x:r,y:o},size:{width:Math.abs(n.right-n.left),height:Math.abs(n.top-n.bottom)}}}readPageAnnoAppearanceStreams(e){return{normal:this.readPageAnnoAppearanceStream(e,b.Normal),rollover:this.readPageAnnoAppearanceStream(e,b.Rollover),down:this.readPageAnnoAppearanceStream(e,b.Down)}}readPageAnnoAppearanceStream(e,t=b.Normal){const n=2*(this.pdfiumModule.FPDFAnnot_GetAP(e,t,0,0)+1),r=this.malloc(n);this.pdfiumModule.FPDFAnnot_GetAP(e,t,r,n);const o=this.pdfiumModule.pdfium.UTF16ToString(r);return this.free(r),o}updateAnnotationColor(e,t,n,r,o=0){this.logger.debug(U,V,"setAnnotationColor",e,t,n,r,o),this.logger.perf(U,V,"setAnnotationColor","Begin",e.id);const i=y.create();try{const a=this.cache.getContext(e.id);if(!a)return this.logger.perf(U,V,"setAnnotationColor","End",e.id),this.logger.warn(U,V,"setAnnotationColor: doc closed"),i.resolve(!1),i;const s=a.acquirePage(t.index),u=this.pdfiumModule.FPDFPage_GetAnnot(s.pagePtr,n.id);if(!u)return this.logger.perf(U,V,"setAnnotationColor","End",e.id),this.logger.warn(U,V,"setAnnotationColor: annot not found"),s.release(),i.resolve(!1),i;const F=this.setAnnotationColor(u,r,o);F&&this.pdfiumModule.FPDFPage_GenerateContent(s.pagePtr),this.pdfiumModule.FPDFPage_CloseAnnot(u),s.release(),this.logger.perf(U,V,"setAnnotationColor","End",e.id),i.resolve(!!F)}catch(t){this.logger.perf(U,V,"setAnnotationColor","End",e.id),this.logger.error(U,V,"setAnnotationColor: error",t),i.reject({code:C.Unknown,message:`Failed to set annotation color: ${t instanceof Error?t.message:String(t)}`})}return i}setPageAnnoRect(e,t,n,r){const o=this.malloc(8),i=this.malloc(8);if(!this.pdfiumModule.FPDF_DeviceToPage(t,0,0,e.size.width,e.size.height,0,r.origin.x,r.origin.y,o,i))return this.free(o),this.free(i),!1;const a=this.pdfiumModule.pdfium.getValue(o,"double"),s=this.pdfiumModule.pdfium.getValue(i,"double");this.free(o),this.free(i);const u=this.malloc(16);return this.pdfiumModule.pdfium.setValue(u,a,"float"),this.pdfiumModule.pdfium.setValue(u+4,s,"float"),this.pdfiumModule.pdfium.setValue(u+8,a+r.size.width,"float"),this.pdfiumModule.pdfium.setValue(u+12,s-r.size.height,"float"),this.pdfiumModule.FPDFAnnot_SetRect(n,u)?(this.free(u),!0):(this.free(u),!1)}readPageAnnoRect(e){const t=this.malloc(16),n={left:0,top:0,right:0,bottom:0};return this.pdfiumModule.FPDFAnnot_GetRect(e,t)&&(n.left=this.pdfiumModule.pdfium.getValue(t,"float"),n.top=this.pdfiumModule.pdfium.getValue(t+4,"float"),n.right=this.pdfiumModule.pdfium.getValue(t+8,"float"),n.bottom=this.pdfiumModule.pdfium.getValue(t+12,"float")),this.free(t),n}getHighlightRects(e,t,n,r,o){const i=this.pdfiumModule.FPDFText_CountRects(n,r,o),a=[];for(let r=0;r<i;r++){const o=this.malloc(8),i=this.malloc(8),s=this.malloc(8),u=this.malloc(8);if(!this.pdfiumModule.FPDFText_GetRect(n,r,i,o,s,u)){this.free(i),this.free(o),this.free(s),this.free(u);continue}const F=this.pdfiumModule.pdfium.getValue(i,"double"),m=this.pdfiumModule.pdfium.getValue(o,"double"),l=this.pdfiumModule.pdfium.getValue(s,"double"),d=this.pdfiumModule.pdfium.getValue(u,"double");this.free(i),this.free(o),this.free(s),this.free(u);const _=this.malloc(4),P=this.malloc(4);this.pdfiumModule.FPDF_PageToDevice(t,0,0,e.size.width,e.size.height,0,F,m,_,P);const c=this.pdfiumModule.pdfium.getValue(_,"i32"),g=this.pdfiumModule.pdfium.getValue(P,"i32");this.free(_),this.free(P);const h=Math.ceil(Math.abs(l-F)),D=Math.ceil(Math.abs(m-d));a.push({origin:{x:c,y:g},size:{width:h,height:D}})}return a}searchAllPages(e,t,n=[]){this.logger.debug(U,V,"searchAllPages",e,t,n),this.logger.perf(U,V,"SearchAllPages","Begin",e.id);const r=this.cache.getContext(e.id);if(!r)return this.logger.perf(U,V,"SearchAllPages","End",e.id),y.resolve({results:[],total:0});const o=2*(t.length+1),i=this.malloc(o);this.pdfiumModule.pdfium.stringToUTF16(t,i,o);const a=n.reduce(((e,t)=>e|t),S.None),s=[],u=y.create();return(async()=>{for(let t=0;t<e.pageCount;t++){const n=this.searchAllInPage(r,e.pages[t],i,a);s.push(...n)}this.free(i),this.logger.perf(U,V,"SearchAllPages","End",e.id),u.resolve({results:s,total:s.length})})().catch((t=>{this.free(i),this.logger.perf(U,V,"SearchAllPages","End",e.id),u.reject({code:C.Unknown,message:`Error searching document: ${t}`})})),u}buildContext(e,t,n,r=30){const o=/[\\s\\u00A0.,;:!?()\\[\\]{}<>/\\\\\\-"\'`"\u201D\\u2013\\u2014]/;let i=t;for(;i>0&&o.test(e[i-1]);)i--;let a=0;for(;i>0&&a<r;)i--,o.test(e[i])||a++;i=(t=>{for(;t>0&&!o.test(e[t-1]);)t--;return t})(i);let s=t+n;for(;s<e.length&&o.test(e[s]);)s++;for(a=0;s<e.length&&a<r;)o.test(e[s])||a++,s++;s=(t=>{for(;t<e.length&&!o.test(e[t]);)t++;return t})(s);const u=e.slice(i,t).replace(/\\s+/g," ").trimStart(),F=e.slice(t,t+n),m=e.slice(t+n,s).replace(/\\s+/g," ").trimEnd();return{before:this.tidy(u),match:this.tidy(F),after:this.tidy(m),truncatedLeft:i>0,truncatedRight:s<e.length}}tidy(e){return e.replace(/-\\uFFFE\\s*/g,"").replace(/[\\uFFFE\\u00AD\\u200B\\u2060\\uFEFF]/g,"").replace(/\\s+/g," ")}searchAllInPage(e,t,n,r){const o=t.index,i=e.acquirePage(o),a=i.getTextPage(),s=this.pdfiumModule.FPDFText_CountChars(a),u=this.malloc(2*(s+1));this.pdfiumModule.FPDFText_GetText(a,0,s,u);const F=this.pdfiumModule.pdfium.UTF16ToString(u);this.free(u);const m=[],l=this.pdfiumModule.FPDFText_FindStart(a,n,r,0);for(;this.pdfiumModule.FPDFText_FindNext(l);){const e=this.pdfiumModule.FPDFText_GetSchResultIndex(l),n=this.pdfiumModule.FPDFText_GetSchCount(l),r=this.getHighlightRects(t,i.pagePtr,a,e,n),s=this.buildContext(F,e,n);m.push({pageIndex:o,charIndex:e,charCount:n,rects:r,context:s})}return this.pdfiumModule.FPDFText_FindClose(l),i.release(),m}}class $ extends x{constructor(e){super(),this.wasmBinary=e}async prepare(){const e=this.wasmBinary,t=await r({wasmBinary:e});this.engine=new H(t),this.ready()}}let X=null;self.onmessage=async e=>{const{type:t,wasmUrl:n}=e.data;if("wasmInit"===t&&n&&!X)try{const e=await fetch(n),t=await e.arrayBuffer();X=new $(t),await X.prepare()}catch(e){const t=e instanceof Error?e.message:String(e);self.postMessage({type:"wasmError",error:t})}};\n'], { type: "application/javascript" })), { type: "module" });
  return n3.postMessage({ type: "wasmInit", wasmUrl: e5 }), new a(n3, t3);
}
var r2, o, i2, a;
var init_pdfium_worker_engine_26d56d7d = __esm({
  "src/vendor/embedpdf/pdfium-worker-engine-26d56d7d.js"() {
    init_embedpdf_2704eb24();
    r2 = "WebWorkerEngine";
    o = "Engine";
    i2 = class extends it {
      constructor(e5, t3) {
        super(), this.worker = e5, this.messageId = t3;
      }
      abort(e5) {
        super.abort(e5), this.worker.postMessage({ type: "AbortRequest", data: { messageId: this.messageId } });
      }
    };
    a = class _a2 {
      constructor(t3, n3 = new tt()) {
        this.worker = t3, this.logger = n3, this.tasks = /* @__PURE__ */ new Map(), this.handle = (e5) => {
          this.logger.debug(r2, o, "webworker engine start handling message: ", e5.data);
          try {
            const t4 = e5.data, n4 = this.tasks.get(t4.id);
            if (!n4) return;
            switch (t4.type) {
              case "ReadyResponse":
                this.readyTask.resolve(true);
                break;
              case "ExecuteResponse":
                switch (t4.data.type) {
                  case "result":
                    n4.resolve(t4.data.value);
                    break;
                  case "error":
                    n4.reject(t4.data.value.reason);
                }
                this.tasks.delete(t4.id);
            }
          } catch (e6) {
            this.logger.error(r2, o, "webworker met error when handling message: ", e6);
          }
        }, this.worker.addEventListener("message", this.handle), this.readyTask = new i2(this.worker, _a2.readyTaskId), this.tasks.set(_a2.readyTaskId, this.readyTask);
      }
      generateRequestId(e5) {
        return `${e5}.${Date.now()}.${Math.random()}`;
      }
      initialize() {
        this.logger.debug(r2, o, "initialize");
        const e5 = this.generateRequestId("General"), t3 = new i2(this.worker, e5), n3 = { id: e5, type: "ExecuteRequest", data: { name: "initialize", args: [] } };
        return this.proxy(t3, n3), t3;
      }
      destroy() {
        this.logger.debug(r2, o, "destroy");
        const e5 = this.generateRequestId("General"), t3 = new i2(this.worker, e5), n3 = () => {
          this.worker.removeEventListener("message", this.handle), this.worker.terminate();
        };
        t3.wait(n3, n3);
        const a3 = { id: e5, type: "ExecuteRequest", data: { name: "destroy", args: [] } };
        return this.proxy(t3, a3), t3;
      }
      openDocumentUrl(e5, t3) {
        this.logger.debug(r2, o, "openDocumentUrl", e5.url, t3);
        const n3 = this.generateRequestId(e5.id), a3 = new i2(this.worker, n3), s3 = { id: n3, type: "ExecuteRequest", data: { name: "openDocumentUrl", args: [e5, t3] } };
        return this.proxy(a3, s3), a3;
      }
      openDocumentFromBuffer(e5, t3) {
        this.logger.debug(r2, o, "openDocumentFromBuffer", e5, t3);
        const n3 = this.generateRequestId(e5.id), a3 = new i2(this.worker, n3), s3 = { id: n3, type: "ExecuteRequest", data: { name: "openDocumentFromBuffer", args: [e5, t3] } };
        return this.proxy(a3, s3), a3;
      }
      openDocumentFromLoader(e5, t3) {
        this.logger.debug(r2, o, "openDocumentFromLoader", e5, t3);
        const n3 = this.generateRequestId(e5.id), a3 = new i2(this.worker, n3), s3 = { id: n3, type: "ExecuteRequest", data: { name: "openDocumentFromLoader", args: [e5, t3] } };
        return this.proxy(a3, s3), a3;
      }
      getMetadata(e5) {
        this.logger.debug(r2, o, "getMetadata", e5);
        const t3 = this.generateRequestId(e5.id), n3 = new i2(this.worker, t3), a3 = { id: t3, type: "ExecuteRequest", data: { name: "getMetadata", args: [e5] } };
        return this.proxy(n3, a3), n3;
      }
      updateAnnotationColor(e5, t3, n3, a3, s3 = 0) {
        this.logger.debug(r2, o, "setAnnotationColor", e5, t3, n3, a3);
        const u2 = this.generateRequestId(e5.id), F2 = new i2(this.worker, u2), m2 = { id: u2, type: "ExecuteRequest", data: { name: "updateAnnotationColor", args: [e5, t3, n3, a3, s3] } };
        return this.proxy(F2, m2), F2;
      }
      getDocPermissions(e5) {
        this.logger.debug(r2, o, "getDocPermissions", e5);
        const t3 = this.generateRequestId(e5.id), n3 = new i2(this.worker, t3), a3 = { id: t3, type: "ExecuteRequest", data: { name: "getDocPermissions", args: [e5] } };
        return this.proxy(n3, a3), n3;
      }
      getDocUserPermissions(e5) {
        this.logger.debug(r2, o, "getDocUserPermissions", e5);
        const t3 = this.generateRequestId(e5.id), n3 = new i2(this.worker, t3), a3 = { id: t3, type: "ExecuteRequest", data: { name: "getDocUserPermissions", args: [e5] } };
        return this.proxy(n3, a3), n3;
      }
      getBookmarks(e5) {
        this.logger.debug(r2, o, "getBookmarks", e5);
        const t3 = this.generateRequestId(e5.id), n3 = new i2(this.worker, t3), a3 = { id: t3, type: "ExecuteRequest", data: { name: "getBookmarks", args: [e5] } };
        return this.proxy(n3, a3), n3;
      }
      getSignatures(e5) {
        this.logger.debug(r2, o, "getSignatures", e5);
        const t3 = this.generateRequestId(e5.id), n3 = new i2(this.worker, t3), a3 = { id: t3, type: "ExecuteRequest", data: { name: "getSignatures", args: [e5] } };
        return this.proxy(n3, a3), n3;
      }
      renderPage(e5, t3, n3, a3, s3, u2, F2 = "image/webp") {
        this.logger.debug(r2, o, "renderPage", e5, t3, n3, a3, s3, u2);
        const m2 = this.generateRequestId(e5.id), d2 = new i2(this.worker, m2), l2 = { id: m2, type: "ExecuteRequest", data: { name: "renderPage", args: [e5, t3, n3, a3, s3, u2, F2] } };
        return this.proxy(d2, l2), d2;
      }
      renderPageRect(e5, t3, n3, a3, s3, u2, F2, m2 = "image/webp") {
        this.logger.debug(r2, o, "renderPageRect", e5, t3, n3, a3, s3, u2, F2);
        const d2 = this.generateRequestId(e5.id), l2 = new i2(this.worker, d2), _2 = { id: d2, type: "ExecuteRequest", data: { name: "renderPageRect", args: [e5, t3, n3, a3, s3, u2, F2, m2] } };
        return this.proxy(l2, _2), l2;
      }
      renderAnnotation(e5, t3, n3, a3, s3, u2, F2, m2) {
        this.logger.debug(r2, o, "renderAnnotation", e5, t3, n3, a3, s3, u2, F2, m2);
        const d2 = this.generateRequestId(e5.id), l2 = new i2(this.worker, d2), _2 = { id: d2, type: "ExecuteRequest", data: { name: "renderAnnotation", args: [e5, t3, n3, a3, s3, u2, F2, m2] } };
        return this.proxy(l2, _2), l2;
      }
      getAllAnnotations(e5) {
        this.logger.debug(r2, o, "getAllAnnotations", e5);
        const t3 = this.generateRequestId(e5.id), n3 = new i2(this.worker, t3), a3 = { id: t3, type: "ExecuteRequest", data: { name: "getAllAnnotations", args: [e5] } };
        return this.proxy(n3, a3), n3;
      }
      getPageAnnotations(e5, t3) {
        this.logger.debug(r2, o, "getPageAnnotations", e5, t3);
        const n3 = this.generateRequestId(e5.id), a3 = new i2(this.worker, n3), s3 = { id: n3, type: "ExecuteRequest", data: { name: "getPageAnnotations", args: [e5, t3] } };
        return this.proxy(a3, s3), a3;
      }
      createPageAnnotation(e5, t3, n3) {
        this.logger.debug(r2, o, "createPageAnnotations", e5, t3, n3);
        const a3 = this.generateRequestId(e5.id), s3 = new i2(this.worker, a3), u2 = { id: a3, type: "ExecuteRequest", data: { name: "createPageAnnotation", args: [e5, t3, n3] } };
        return this.proxy(s3, u2), s3;
      }
      updatePageAnnotation(e5, t3, n3) {
        this.logger.debug(r2, o, "updatePageAnnotation", e5, t3, n3);
        const a3 = this.generateRequestId(e5.id), s3 = new i2(this.worker, a3), u2 = { id: a3, type: "ExecuteRequest", data: { name: "updatePageAnnotation", args: [e5, t3, n3] } };
        return this.proxy(s3, u2), s3;
      }
      removePageAnnotation(e5, t3, n3) {
        this.logger.debug(r2, o, "removePageAnnotations", e5, t3, n3);
        const a3 = this.generateRequestId(e5.id), s3 = new i2(this.worker, a3), u2 = { id: a3, type: "ExecuteRequest", data: { name: "removePageAnnotation", args: [e5, t3, n3] } };
        return this.proxy(s3, u2), s3;
      }
      getPageTextRects(e5, t3, n3, a3) {
        this.logger.debug(r2, o, "getPageTextRects", e5, t3, n3, a3);
        const s3 = this.generateRequestId(e5.id), u2 = new i2(this.worker, s3), F2 = { id: s3, type: "ExecuteRequest", data: { name: "getPageTextRects", args: [e5, t3, n3, a3] } };
        return this.proxy(u2, F2), u2;
      }
      renderThumbnail(e5, t3, n3, a3, s3) {
        this.logger.debug(r2, o, "renderThumbnail", e5, t3, n3, a3, s3);
        const u2 = this.generateRequestId(e5.id), F2 = new i2(this.worker, u2), m2 = { id: u2, type: "ExecuteRequest", data: { name: "renderThumbnail", args: [e5, t3, n3, a3, s3] } };
        return this.proxy(F2, m2), F2;
      }
      searchAllPages(e5, t3, n3 = []) {
        this.logger.debug(r2, o, "searchAllPages 123", e5, t3, n3);
        const a3 = this.generateRequestId(e5.id), s3 = new i2(this.worker, a3), u2 = { id: a3, type: "ExecuteRequest", data: { name: "searchAllPages", args: [e5, t3, n3] } };
        return this.proxy(s3, u2), s3;
      }
      saveAsCopy(e5) {
        this.logger.debug(r2, o, "saveAsCopy", e5);
        const t3 = this.generateRequestId(e5.id), n3 = new i2(this.worker, t3), a3 = { id: t3, type: "ExecuteRequest", data: { name: "saveAsCopy", args: [e5] } };
        return this.proxy(n3, a3), n3;
      }
      getAttachments(e5) {
        this.logger.debug(r2, o, "getAttachments", e5);
        const t3 = this.generateRequestId(e5.id), n3 = new i2(this.worker, t3), a3 = { id: t3, type: "ExecuteRequest", data: { name: "getAttachments", args: [e5] } };
        return this.proxy(n3, a3), n3;
      }
      readAttachmentContent(e5, t3) {
        this.logger.debug(r2, o, "readAttachmentContent", e5, t3);
        const n3 = this.generateRequestId(e5.id), a3 = new i2(this.worker, n3), s3 = { id: n3, type: "ExecuteRequest", data: { name: "readAttachmentContent", args: [e5, t3] } };
        return this.proxy(a3, s3), a3;
      }
      setFormFieldValue(e5, t3, n3, a3) {
        this.logger.debug(r2, o, "setFormFieldValue", e5, n3, a3);
        const s3 = this.generateRequestId(e5.id), u2 = new i2(this.worker, s3), F2 = { id: s3, type: "ExecuteRequest", data: { name: "setFormFieldValue", args: [e5, t3, n3, a3] } };
        return this.proxy(u2, F2), u2;
      }
      flattenPage(e5, t3, n3) {
        this.logger.debug(r2, o, "flattenPage", e5, t3, n3);
        const a3 = this.generateRequestId(e5.id), s3 = new i2(this.worker, a3), u2 = { id: a3, type: "ExecuteRequest", data: { name: "flattenPage", args: [e5, t3, n3] } };
        return this.proxy(s3, u2), s3;
      }
      extractPages(e5, t3) {
        this.logger.debug(r2, o, "extractPages", e5);
        const n3 = this.generateRequestId(e5.id), a3 = new i2(this.worker, n3), s3 = { id: n3, type: "ExecuteRequest", data: { name: "extractPages", args: [e5, t3] } };
        return this.proxy(a3, s3), a3;
      }
      extractText(e5, t3) {
        this.logger.debug(r2, o, "extractText", e5);
        const n3 = this.generateRequestId(e5.id), a3 = new i2(this.worker, n3), s3 = { id: n3, type: "ExecuteRequest", data: { name: "extractText", args: [e5, t3] } };
        return this.proxy(a3, s3), a3;
      }
      getTextSlices(e5, t3) {
        this.logger.debug(r2, o, "getTextSlices", e5, t3);
        const n3 = this.generateRequestId(e5.id), a3 = new i2(this.worker, n3), s3 = { id: n3, type: "ExecuteRequest", data: { name: "getTextSlices", args: [e5, t3] } };
        return this.proxy(a3, s3), a3;
      }
      getPageGlyphs(e5, t3) {
        this.logger.debug(r2, o, "getPageGlyphs", e5, t3);
        const n3 = this.generateRequestId(e5.id), a3 = new i2(this.worker, n3), s3 = { id: n3, type: "ExecuteRequest", data: { name: "getPageGlyphs", args: [e5, t3] } };
        return this.proxy(a3, s3), a3;
      }
      getPageGeometry(e5, t3) {
        this.logger.debug(r2, o, "getPageGeometry", e5, t3);
        const n3 = this.generateRequestId(e5.id), a3 = new i2(this.worker, n3), s3 = { id: n3, type: "ExecuteRequest", data: { name: "getPageGeometry", args: [e5, t3] } };
        return this.proxy(a3, s3), a3;
      }
      merge(e5) {
        this.logger.debug(r2, o, "merge", e5);
        const t3 = e5.map((e6) => e6.id).join("."), n3 = this.generateRequestId(t3), a3 = new i2(this.worker, n3), s3 = { id: n3, type: "ExecuteRequest", data: { name: "merge", args: [e5] } };
        return this.proxy(a3, s3), a3;
      }
      mergePages(e5) {
        this.logger.debug(r2, o, "mergePages", e5);
        const t3 = this.generateRequestId(e5.map((e6) => e6.docId).join(".")), n3 = new i2(this.worker, t3), a3 = { id: t3, type: "ExecuteRequest", data: { name: "mergePages", args: [e5] } };
        return this.proxy(n3, a3), n3;
      }
      closeDocument(e5) {
        this.logger.debug(r2, o, "closeDocument", e5);
        const t3 = this.generateRequestId(e5.id), n3 = new i2(this.worker, t3), a3 = { id: t3, type: "ExecuteRequest", data: { name: "closeDocument", args: [e5] } };
        return this.proxy(n3, a3), n3;
      }
      proxy(e5, n3, i4 = []) {
        this.logger.debug(r2, o, "send request to worker", e5, n3, i4), this.logger.perf(r2, o, `${n3.data.name}`, "Begin", n3.id), this.readyTask.wait(() => {
          this.worker.postMessage(n3, i4), e5.wait(() => {
            this.logger.perf(r2, o, `${n3.data.name}`, "End", n3.id);
          }, () => {
            this.logger.perf(r2, o, `${n3.data.name}`, "End", n3.id);
          }), this.tasks.set(n3.id, e5);
        }, () => {
          this.logger.perf(r2, o, `${n3.data.name}`, "End", n3.id), e5.reject({ code: bt.Initialization, message: "worker initialization failed" });
        });
      }
    };
    a.readyTaskId = "0";
  }
});

// src/vendor/embedpdf/pdfium-direct-engine-aedff17f.js
var pdfium_direct_engine_aedff17f_exports = {};
__export(pdfium_direct_engine_aedff17f_exports, {
  createPdfiumEngine: () => z
});
async function O(e5) {
  return async function(e6) {
    const t3 = { pdfium: e6 };
    for (const n3 in T) {
      const r4 = n3, o3 = T[r4][0], i4 = T[r4][1];
      t3[r4] = e6.cwrap(n3, i4, o3);
    }
    return t3;
  }(await C(e5));
}
function x(e5, t3, n3, r4 = 100) {
  let o3 = e5.wasmExports.malloc(r4);
  for (let t4 = 0; t4 < r4; t4++) e5.HEAP8[o3 + t4] = 0;
  const i4 = t3(o3, r4);
  let a3;
  if (i4 > r4) {
    e5.wasmExports.free(o3), o3 = e5.wasmExports.malloc(i4);
    for (let t4 = 0; t4 < i4; t4++) e5.HEAP8[o3 + t4] = 0;
    t3(o3, i4), a3 = n3(o3);
  } else a3 = n3(o3);
  return e5.wasmExports.free(o3), a3;
}
function v(e5, t3) {
  const n3 = t3(0, 0), r4 = e5.wasmExports.malloc(n3);
  t3(r4, n3);
  const o3 = new ArrayBuffer(n3), i4 = new DataView(o3);
  for (let t4 = 0; t4 < n3; t4++) i4.setInt8(t4, e5.getValue(r4 + t4, "i8"));
  return e5.wasmExports.free(r4), o3;
}
async function z(e5, t3) {
  const n3 = await fetch(e5), r4 = await n3.arrayBuffer(), o3 = await O({ wasmBinary: r4 });
  return new W(o3, t3);
}
var y, C, T, w, R, I, k, j, B, L, N, V, U, W;
var init_pdfium_direct_engine_aedff17f = __esm({
  "src/vendor/embedpdf/pdfium-direct-engine-aedff17f.js"() {
    init_embedpdf_2704eb24();
    C = (y = import.meta.url, async function(e5 = {}) {
      var t3, n3, r4, o3 = e5, i4 = new Promise((e6, t4) => {
        n3 = e6, r4 = t4;
      });
      ["_EPDF_RenderAnnotBitmap", "_EPDFAnnot_GenerateAppearance", "_EPDFAnnot_GetBorderDashPattern", "_EPDFAnnot_GetBorderDashPatternCount", "_EPDFAnnot_GetBorderEffect", "_EPDFAnnot_GetBorderStyle", "_EPDFAnnot_GetColor", "_EPDFAnnot_GetRectangleDifferences", "_EPDFAnnot_SetBorderStyle", "_EPDFAnnot_SetColor", "_FORM_CanRedo", "_FORM_CanUndo", "_FORM_DoDocumentAAction", "_FORM_DoDocumentJSAction", "_FORM_DoDocumentOpenAction", "_FORM_DoPageAAction", "_FORM_ForceToKillFocus", "_FORM_GetFocusedAnnot", "_FORM_GetFocusedText", "_FORM_GetSelectedText", "_FORM_IsIndexSelected", "_FORM_OnAfterLoadPage", "_FORM_OnBeforeClosePage", "_FORM_OnChar", "_FORM_OnFocus", "_FORM_OnKeyDown", "_FORM_OnKeyUp", "_FORM_OnLButtonDoubleClick", "_FORM_OnLButtonDown", "_FORM_OnLButtonUp", "_FORM_OnMouseMove", "_FORM_OnMouseWheel", "_FORM_OnRButtonDown", "_FORM_OnRButtonUp", "_FORM_Redo", "_FORM_ReplaceAndKeepSelection", "_FORM_ReplaceSelection", "_FORM_SelectAllText", "_FORM_SetFocusedAnnot", "_FORM_SetIndexSelected", "_FORM_Undo", "_FPDF_AddInstalledFont", "_FPDF_CloseDocument", "_FPDF_ClosePage", "_FPDF_CloseXObject", "_FPDF_CopyViewerPreferences", "_FPDF_CountNamedDests", "_FPDF_CreateClipPath", "_FPDF_CreateNewDocument", "_FPDF_DestroyClipPath", "_FPDF_DestroyLibrary", "_FPDF_DeviceToPage", "_FPDF_DocumentHasValidCrossReferenceTable", "_FPDF_FFLDraw", "_FPDF_FreeDefaultSystemFontInfo", "_FPDF_GetDefaultSystemFontInfo", "_FPDF_GetDefaultTTFMap", "_FPDF_GetDefaultTTFMapCount", "_FPDF_GetDefaultTTFMapEntry", "_FPDF_GetDocPermissions", "_FPDF_GetDocUserPermissions", "_FPDF_GetFileIdentifier", "_FPDF_GetFileVersion", "_FPDF_GetFormType", "_FPDF_GetLastError", "_FPDF_GetMetaText", "_FPDF_GetNamedDest", "_FPDF_GetNamedDestByName", "_FPDF_GetPageAAction", "_FPDF_GetPageBoundingBox", "_FPDF_GetPageCount", "_FPDF_GetPageHeight", "_FPDF_GetPageHeightF", "_FPDF_GetPageLabel", "_FPDF_GetPageSizeByIndex", "_FPDF_GetPageSizeByIndexF", "_FPDF_GetPageWidth", "_FPDF_GetPageWidthF", "_FPDF_GetSecurityHandlerRevision", "_FPDF_GetSignatureCount", "_FPDF_GetSignatureObject", "_FPDF_GetTrailerEnds", "_FPDF_GetXFAPacketContent", "_FPDF_GetXFAPacketCount", "_FPDF_GetXFAPacketName", "_FPDF_ImportNPagesToOne", "_FPDF_ImportPages", "_FPDF_ImportPagesByIndex", "_FPDF_InitLibrary", "_FPDF_InitLibraryWithConfig", "_FPDF_LoadCustomDocument", "_FPDF_LoadDocument", "_FPDF_LoadMemDocument", "_FPDF_LoadMemDocument64", "_FPDF_LoadPage", "_FPDF_LoadXFA", "_FPDF_MovePages", "_FPDF_NewFormObjectFromXObject", "_FPDF_NewXObjectFromPage", "_FPDF_PageToDevice", "_FPDF_RemoveFormFieldHighlight", "_FPDF_RenderPage_Close", "_FPDF_RenderPage_Continue", "_FPDF_RenderPageBitmap", "_FPDF_RenderPageBitmap_Start", "_FPDF_RenderPageBitmapWithColorScheme_Start", "_FPDF_RenderPageBitmapWithMatrix", "_FPDF_SaveAsCopy", "_FPDF_SaveWithVersion", "_FPDF_SetFormFieldHighlightAlpha", "_FPDF_SetFormFieldHighlightColor", "_FPDF_SetSandBoxPolicy", "_FPDF_SetSystemFontInfo", "_FPDF_StructElement_Attr_CountChildren", "_FPDF_StructElement_Attr_GetBlobValue", "_FPDF_StructElement_Attr_GetBooleanValue", "_FPDF_StructElement_Attr_GetChildAtIndex", "_FPDF_StructElement_Attr_GetCount", "_FPDF_StructElement_Attr_GetName", "_FPDF_StructElement_Attr_GetNumberValue", "_FPDF_StructElement_Attr_GetStringValue", "_FPDF_StructElement_Attr_GetType", "_FPDF_StructElement_Attr_GetValue", "_FPDF_StructElement_CountChildren", "_FPDF_StructElement_GetActualText", "_FPDF_StructElement_GetAltText", "_FPDF_StructElement_GetAttributeAtIndex", "_FPDF_StructElement_GetAttributeCount", "_FPDF_StructElement_GetChildAtIndex", "_FPDF_StructElement_GetChildMarkedContentID", "_FPDF_StructElement_GetID", "_FPDF_StructElement_GetLang", "_FPDF_StructElement_GetMarkedContentID", "_FPDF_StructElement_GetMarkedContentIdAtIndex", "_FPDF_StructElement_GetMarkedContentIdCount", "_FPDF_StructElement_GetObjType", "_FPDF_StructElement_GetParent", "_FPDF_StructElement_GetStringAttribute", "_FPDF_StructElement_GetTitle", "_FPDF_StructElement_GetType", "_FPDF_StructTree_Close", "_FPDF_StructTree_CountChildren", "_FPDF_StructTree_GetChildAtIndex", "_FPDF_StructTree_GetForPage", "_FPDF_VIEWERREF_GetDuplex", "_FPDF_VIEWERREF_GetName", "_FPDF_VIEWERREF_GetNumCopies", "_FPDF_VIEWERREF_GetPrintPageRange", "_FPDF_VIEWERREF_GetPrintPageRangeCount", "_FPDF_VIEWERREF_GetPrintPageRangeElement", "_FPDF_VIEWERREF_GetPrintScaling", "_FPDFAction_GetDest", "_FPDFAction_GetFilePath", "_FPDFAction_GetType", "_FPDFAction_GetURIPath", "_FPDFAnnot_AddFileAttachment", "_FPDFAnnot_AddInkStroke", "_FPDFAnnot_AppendAttachmentPoints", "_FPDFAnnot_AppendObject", "_FPDFAnnot_CountAttachmentPoints", "_FPDFAnnot_GetAP", "_FPDFAnnot_GetAttachmentPoints", "_FPDFAnnot_GetBorder", "_FPDFAnnot_GetColor", "_FPDFAnnot_GetFileAttachment", "_FPDFAnnot_GetFlags", "_FPDFAnnot_GetFocusableSubtypes", "_FPDFAnnot_GetFocusableSubtypesCount", "_FPDFAnnot_GetFontColor", "_FPDFAnnot_GetFontSize", "_FPDFAnnot_GetFormAdditionalActionJavaScript", "_FPDFAnnot_GetFormControlCount", "_FPDFAnnot_GetFormControlIndex", "_FPDFAnnot_GetFormFieldAlternateName", "_FPDFAnnot_GetFormFieldAtPoint", "_FPDFAnnot_GetFormFieldExportValue", "_FPDFAnnot_GetFormFieldFlags", "_FPDFAnnot_GetFormFieldName", "_FPDFAnnot_GetFormFieldType", "_FPDFAnnot_GetFormFieldValue", "_FPDFAnnot_GetInkListCount", "_FPDFAnnot_GetInkListPath", "_FPDFAnnot_GetLine", "_FPDFAnnot_GetLink", "_FPDFAnnot_GetLinkedAnnot", "_FPDFAnnot_GetNumberValue", "_FPDFAnnot_GetObject", "_FPDFAnnot_GetObjectCount", "_FPDFAnnot_GetOptionCount", "_FPDFAnnot_GetOptionLabel", "_FPDFAnnot_GetRect", "_FPDFAnnot_GetStringValue", "_FPDFAnnot_GetSubtype", "_FPDFAnnot_GetValueType", "_FPDFAnnot_GetVertices", "_FPDFAnnot_HasAttachmentPoints", "_FPDFAnnot_HasKey", "_FPDFAnnot_IsChecked", "_FPDFAnnot_IsObjectSupportedSubtype", "_FPDFAnnot_IsOptionSelected", "_FPDFAnnot_IsSupportedSubtype", "_FPDFAnnot_RemoveInkList", "_FPDFAnnot_RemoveObject", "_FPDFAnnot_SetAP", "_FPDFAnnot_SetAttachmentPoints", "_FPDFAnnot_SetBorder", "_FPDFAnnot_SetColor", "_FPDFAnnot_SetFlags", "_FPDFAnnot_SetFocusableSubtypes", "_FPDFAnnot_SetFontColor", "_FPDFAnnot_SetFormFieldFlags", "_FPDFAnnot_SetRect", "_FPDFAnnot_SetStringValue", "_FPDFAnnot_SetURI", "_FPDFAnnot_UpdateObject", "_FPDFAttachment_GetFile", "_FPDFAttachment_GetName", "_FPDFAttachment_GetStringValue", "_FPDFAttachment_GetSubtype", "_FPDFAttachment_GetValueType", "_FPDFAttachment_HasKey", "_FPDFAttachment_SetFile", "_FPDFAttachment_SetStringValue", "_FPDFAvail_Create", "_FPDFAvail_Destroy", "_FPDFAvail_GetDocument", "_FPDFAvail_GetFirstPageNum", "_FPDFAvail_IsDocAvail", "_FPDFAvail_IsFormAvail", "_FPDFAvail_IsLinearized", "_FPDFAvail_IsPageAvail", "_FPDFBitmap_Create", "_FPDFBitmap_CreateEx", "_FPDFBitmap_Destroy", "_FPDFBitmap_FillRect", "_FPDFBitmap_GetBuffer", "_FPDFBitmap_GetFormat", "_FPDFBitmap_GetHeight", "_FPDFBitmap_GetStride", "_FPDFBitmap_GetWidth", "_FPDFBookmark_Find", "_FPDFBookmark_GetAction", "_FPDFBookmark_GetCount", "_FPDFBookmark_GetDest", "_FPDFBookmark_GetFirstChild", "_FPDFBookmark_GetNextSibling", "_FPDFBookmark_GetTitle", "_FPDFCatalog_IsTagged", "_FPDFCatalog_SetLanguage", "_FPDFClipPath_CountPaths", "_FPDFClipPath_CountPathSegments", "_FPDFClipPath_GetPathSegment", "_FPDFDest_GetDestPageIndex", "_FPDFDest_GetLocationInPage", "_FPDFDest_GetView", "_FPDFDoc_AddAttachment", "_FPDFDoc_CloseJavaScriptAction", "_FPDFDoc_DeleteAttachment", "_FPDFDOC_ExitFormFillEnvironment", "_FPDFDoc_GetAttachment", "_FPDFDoc_GetAttachmentCount", "_FPDFDoc_GetJavaScriptAction", "_FPDFDoc_GetJavaScriptActionCount", "_FPDFDoc_GetPageMode", "_FPDFDOC_InitFormFillEnvironment", "_FPDFFont_Close", "_FPDFFont_GetAscent", "_FPDFFont_GetBaseFontName", "_FPDFFont_GetDescent", "_FPDFFont_GetFamilyName", "_FPDFFont_GetFlags", "_FPDFFont_GetFontData", "_FPDFFont_GetGlyphPath", "_FPDFFont_GetGlyphWidth", "_FPDFFont_GetIsEmbedded", "_FPDFFont_GetItalicAngle", "_FPDFFont_GetWeight", "_FPDFFormObj_CountObjects", "_FPDFFormObj_GetObject", "_FPDFFormObj_RemoveObject", "_FPDFGlyphPath_CountGlyphSegments", "_FPDFGlyphPath_GetGlyphPathSegment", "_FPDFImageObj_GetBitmap", "_FPDFImageObj_GetIccProfileDataDecoded", "_FPDFImageObj_GetImageDataDecoded", "_FPDFImageObj_GetImageDataRaw", "_FPDFImageObj_GetImageFilter", "_FPDFImageObj_GetImageFilterCount", "_FPDFImageObj_GetImageMetadata", "_FPDFImageObj_GetImagePixelSize", "_FPDFImageObj_GetRenderedBitmap", "_FPDFImageObj_LoadJpegFile", "_FPDFImageObj_LoadJpegFileInline", "_FPDFImageObj_SetBitmap", "_FPDFImageObj_SetMatrix", "_FPDFJavaScriptAction_GetName", "_FPDFJavaScriptAction_GetScript", "_FPDFLink_CloseWebLinks", "_FPDFLink_CountQuadPoints", "_FPDFLink_CountRects", "_FPDFLink_CountWebLinks", "_FPDFLink_Enumerate", "_FPDFLink_GetAction", "_FPDFLink_GetAnnot", "_FPDFLink_GetAnnotRect", "_FPDFLink_GetDest", "_FPDFLink_GetLinkAtPoint", "_FPDFLink_GetLinkZOrderAtPoint", "_FPDFLink_GetQuadPoints", "_FPDFLink_GetRect", "_FPDFLink_GetTextRange", "_FPDFLink_GetURL", "_FPDFLink_LoadWebLinks", "_FPDFPage_CloseAnnot", "_FPDFPage_CountObjects", "_FPDFPage_CreateAnnot", "_FPDFPage_Delete", "_FPDFPage_Flatten", "_FPDFPage_FormFieldZOrderAtPoint", "_FPDFPage_GenerateContent", "_FPDFPage_GetAnnot", "_FPDFPage_GetAnnotCount", "_FPDFPage_GetAnnotIndex", "_FPDFPage_GetArtBox", "_FPDFPage_GetBleedBox", "_FPDFPage_GetCropBox", "_FPDFPage_GetDecodedThumbnailData", "_FPDFPage_GetMediaBox", "_FPDFPage_GetObject", "_FPDFPage_GetRawThumbnailData", "_FPDFPage_GetRotation", "_FPDFPage_GetThumbnailAsBitmap", "_FPDFPage_GetTrimBox", "_FPDFPage_HasFormFieldAtPoint", "_FPDFPage_HasTransparency", "_FPDFPage_InsertClipPath", "_FPDFPage_InsertObject", "_FPDFPage_InsertObjectAtIndex", "_FPDFPage_New", "_FPDFPage_RemoveAnnot", "_FPDFPage_RemoveObject", "_FPDFPage_SetArtBox", "_FPDFPage_SetBleedBox", "_FPDFPage_SetCropBox", "_FPDFPage_SetMediaBox", "_FPDFPage_SetRotation", "_FPDFPage_SetTrimBox", "_FPDFPage_TransformAnnots", "_FPDFPage_TransFormWithClip", "_FPDFPageObj_AddMark", "_FPDFPageObj_CountMarks", "_FPDFPageObj_CreateNewPath", "_FPDFPageObj_CreateNewRect", "_FPDFPageObj_CreateTextObj", "_FPDFPageObj_Destroy", "_FPDFPageObj_GetBounds", "_FPDFPageObj_GetClipPath", "_FPDFPageObj_GetDashArray", "_FPDFPageObj_GetDashCount", "_FPDFPageObj_GetDashPhase", "_FPDFPageObj_GetFillColor", "_FPDFPageObj_GetIsActive", "_FPDFPageObj_GetLineCap", "_FPDFPageObj_GetLineJoin", "_FPDFPageObj_GetMark", "_FPDFPageObj_GetMarkedContentID", "_FPDFPageObj_GetMatrix", "_FPDFPageObj_GetRotatedBounds", "_FPDFPageObj_GetStrokeColor", "_FPDFPageObj_GetStrokeWidth", "_FPDFPageObj_GetType", "_FPDFPageObj_HasTransparency", "_FPDFPageObj_NewImageObj", "_FPDFPageObj_NewTextObj", "_FPDFPageObj_RemoveMark", "_FPDFPageObj_SetBlendMode", "_FPDFPageObj_SetDashArray", "_FPDFPageObj_SetDashPhase", "_FPDFPageObj_SetFillColor", "_FPDFPageObj_SetIsActive", "_FPDFPageObj_SetLineCap", "_FPDFPageObj_SetLineJoin", "_FPDFPageObj_SetMatrix", "_FPDFPageObj_SetStrokeColor", "_FPDFPageObj_SetStrokeWidth", "_FPDFPageObj_Transform", "_FPDFPageObj_TransformClipPath", "_FPDFPageObj_TransformF", "_FPDFPageObjMark_CountParams", "_FPDFPageObjMark_GetName", "_FPDFPageObjMark_GetParamBlobValue", "_FPDFPageObjMark_GetParamIntValue", "_FPDFPageObjMark_GetParamKey", "_FPDFPageObjMark_GetParamStringValue", "_FPDFPageObjMark_GetParamValueType", "_FPDFPageObjMark_RemoveParam", "_FPDFPageObjMark_SetBlobParam", "_FPDFPageObjMark_SetIntParam", "_FPDFPageObjMark_SetStringParam", "_FPDFPath_BezierTo", "_FPDFPath_Close", "_FPDFPath_CountSegments", "_FPDFPath_GetDrawMode", "_FPDFPath_GetPathSegment", "_FPDFPath_LineTo", "_FPDFPath_MoveTo", "_FPDFPath_SetDrawMode", "_FPDFPathSegment_GetClose", "_FPDFPathSegment_GetPoint", "_FPDFPathSegment_GetType", "_FPDFSignatureObj_GetByteRange", "_FPDFSignatureObj_GetContents", "_FPDFSignatureObj_GetDocMDPPermission", "_FPDFSignatureObj_GetReason", "_FPDFSignatureObj_GetSubFilter", "_FPDFSignatureObj_GetTime", "_FPDFText_ClosePage", "_FPDFText_CountChars", "_FPDFText_CountRects", "_FPDFText_FindClose", "_FPDFText_FindNext", "_FPDFText_FindPrev", "_FPDFText_FindStart", "_FPDFText_GetBoundedText", "_FPDFText_GetCharAngle", "_FPDFText_GetCharBox", "_FPDFText_GetCharIndexAtPos", "_FPDFText_GetCharIndexFromTextIndex", "_FPDFText_GetCharOrigin", "_FPDFText_GetFillColor", "_FPDFText_GetFontInfo", "_FPDFText_GetFontSize", "_FPDFText_GetFontWeight", "_FPDFText_GetLooseCharBox", "_FPDFText_GetMatrix", "_FPDFText_GetRect", "_FPDFText_GetSchCount", "_FPDFText_GetSchResultIndex", "_FPDFText_GetStrokeColor", "_FPDFText_GetText", "_FPDFText_GetTextIndexFromCharIndex", "_FPDFText_GetTextObject", "_FPDFText_GetUnicode", "_FPDFText_HasUnicodeMapError", "_FPDFText_IsGenerated", "_FPDFText_IsHyphen", "_FPDFText_LoadCidType2Font", "_FPDFText_LoadFont", "_FPDFText_LoadPage", "_FPDFText_LoadStandardFont", "_FPDFText_SetCharcodes", "_FPDFText_SetText", "_FPDFTextObj_GetFont", "_FPDFTextObj_GetFontSize", "_FPDFTextObj_GetRenderedBitmap", "_FPDFTextObj_GetText", "_FPDFTextObj_GetTextRenderMode", "_FPDFTextObj_SetTextRenderMode", "_PDFiumExt_CloseFileWriter", "_PDFiumExt_CloseFormFillInfo", "_PDFiumExt_ExitFormFillEnvironment", "_PDFiumExt_GetFileWriterData", "_PDFiumExt_GetFileWriterSize", "_PDFiumExt_Init", "_PDFiumExt_InitFormFillEnvironment", "_PDFiumExt_OpenFileWriter", "_PDFiumExt_OpenFormFillInfo", "_PDFiumExt_SaveAsCopy", "_malloc", "_free", "_memory", "___indirect_function_table", "onRuntimeInitialized"].forEach((e6) => {
        Object.getOwnPropertyDescriptor(i4, e6) || Object.defineProperty(i4, e6, { get: () => H2("You are getting " + e6 + " on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js"), set: () => H2("You are setting " + e6 + " on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js") });
      });
      var a3 = "object" == typeof window, F2 = "function" == typeof importScripts;
      "object" == typeof process && "object" == typeof process.versions && "string" == typeof process.versions.node && process.type;
      var s3, u2, m2 = !a3 && !F2, l2 = Object.assign({}, o3), d2 = "./this.program", _2 = "";
      if (m2) {
        if ("object" == typeof window || "function" == typeof importScripts) throw new Error("not compiled for this environment (did you build to HTML and try to run it not on the web, or set ENVIRONMENT to something - like node - and run it someplace else - like on the web?)");
        u2 = (e6) => {
          if ("function" == typeof readbuffer) return new Uint8Array(readbuffer(e6));
          let t4 = read(e6, "binary");
          return T3("object" == typeof t4), t4;
        }, s3 = (e6) => new Promise((t4, n4) => {
          setTimeout(() => t4(u2(e6)));
        }), globalThis.clearTimeout ??= (e6) => {
        }, globalThis.setTimeout ??= (e6) => "function" == typeof e6 ? e6() : H2(), "undefined" != typeof print && (globalThis.console ??= {}, console.log = print, console.warn = console.error = globalThis.printErr ?? print);
      } else {
        if (!a3 && !F2) throw new Error("environment detection error");
        if (F2 ? _2 = self.location.href : "undefined" != typeof document && document.currentScript && (_2 = document.currentScript.src), y && (_2 = y), _2 = _2.startsWith("blob:") ? "" : _2.substr(0, _2.replace(/[?#].*/, "").lastIndexOf("/") + 1), "object" != typeof window && "function" != typeof importScripts) throw new Error("not compiled for this environment (did you build to HTML and try to run it not on the web, or set ENVIRONMENT to something - like node - and run it someplace else - like on the web?)");
        F2 && (u2 = (e6) => {
          var t4 = new XMLHttpRequest();
          return t4.open("GET", e6, false), t4.responseType = "arraybuffer", t4.send(null), new Uint8Array(t4.response);
        }), s3 = (e6) => (T3(!J2(e6), "readAsync does not work with file:// URLs"), fetch(e6, { credentials: "same-origin" }).then((e7) => e7.ok ? e7.arrayBuffer() : Promise.reject(new Error(e7.status + " : " + e7.url))));
      }
      var P2, c2 = o3.print || console.log.bind(console), g2 = o3.printErr || console.error.bind(console);
      Object.assign(o3, l2), l2 = null, P2 = "fetchSettings", Object.getOwnPropertyDescriptor(o3, P2) && H2(`\`Module.${P2}\` was supplied but \`${P2}\` not included in INCOMING_MODULE_JS_API`), o3.arguments && o3.arguments, te2("arguments", "arguments_"), o3.thisProgram && (d2 = o3.thisProgram), te2("thisProgram", "thisProgram"), T3(void 0 === o3.memoryInitializerPrefixURL, "Module.memoryInitializerPrefixURL option was removed, use Module.locateFile instead"), T3(void 0 === o3.pthreadMainPrefixURL, "Module.pthreadMainPrefixURL option was removed, use Module.locateFile instead"), T3(void 0 === o3.cdInitializerPrefixURL, "Module.cdInitializerPrefixURL option was removed, use Module.locateFile instead"), T3(void 0 === o3.filePackagePrefixURL, "Module.filePackagePrefixURL option was removed, use Module.locateFile instead"), T3(void 0 === o3.read, "Module.read option was removed"), T3(void 0 === o3.readAsync, "Module.readAsync option was removed (modify readAsync in JS)"), T3(void 0 === o3.readBinary, "Module.readBinary option was removed (modify readBinary in JS)"), T3(void 0 === o3.setWindowTitle, "Module.setWindowTitle option was removed (modify emscripten_set_window_title in JS)"), T3(void 0 === o3.TOTAL_MEMORY, "Module.TOTAL_MEMORY has been renamed Module.INITIAL_MEMORY"), te2("asm", "wasmExports"), te2("readAsync", "readAsync"), te2("readBinary", "readBinary"), te2("setWindowTitle", "setWindowTitle");
      var h2, D2 = o3.wasmBinary;
      te2("wasmBinary", "wasmBinary"), "object" != typeof WebAssembly && g2("no native wasm support detected");
      var b2, p2, f2, A2, G2, E2, S2, M2, C3 = false;
      function T3(e6, t4) {
        e6 || H2("Assertion failed" + (t4 ? ": " + t4 : ""));
      }
      function O3() {
        var e6 = h2.buffer;
        o3.HEAP8 = b2 = new Int8Array(e6), o3.HEAP16 = f2 = new Int16Array(e6), o3.HEAPU8 = p2 = new Uint8Array(e6), o3.HEAPU16 = A2 = new Uint16Array(e6), o3.HEAP32 = G2 = new Int32Array(e6), o3.HEAPU32 = E2 = new Uint32Array(e6), o3.HEAPF32 = S2 = new Float32Array(e6), o3.HEAPF64 = M2 = new Float64Array(e6);
      }
      function x3() {
        if (!C3) {
          var e6 = at2();
          0 == e6 && (e6 += 4);
          var t4 = E2[e6 >> 2], n4 = E2[e6 + 4 >> 2];
          34821223 == t4 && 2310721022 == n4 || H2(`Stack overflow! Stack cookie has been overwritten at ${Fe2(e6)}, expected hex dwords 0x89BACDFE and 0x2135467, but received ${Fe2(n4)} ${Fe2(t4)}`), 1668509029 != E2[0] && H2("Runtime error: The application has corrupted its heap memory area (address zero)!");
        }
      }
      T3(!o3.STACK_SIZE, "STACK_SIZE can no longer be set at runtime.  Use -sSTACK_SIZE at link time"), T3("undefined" != typeof Int32Array && "undefined" != typeof Float64Array && null != Int32Array.prototype.subarray && null != Int32Array.prototype.set, "JS engine does not provide full typed array support"), T3(!o3.wasmMemory, "Use of `wasmMemory` detected.  Use -sIMPORTED_MEMORY to define wasmMemory externally"), T3(!o3.INITIAL_MEMORY, "Detected runtime INITIAL_MEMORY setting.  Use -sIMPORTED_MEMORY to define wasmMemory dynamically");
      var v3 = [], w3 = [], R3 = [], I3 = false;
      function k3(e6) {
        v3.unshift(e6);
      }
      function j3(e6) {
        R3.unshift(e6);
      }
      T3(Math.imul, "This browser does not support Math.imul(), build with LEGACY_VM_SUPPORT or POLYFILL_OLD_MATH_FUNCTIONS to add in a polyfill"), T3(Math.fround, "This browser does not support Math.fround(), build with LEGACY_VM_SUPPORT or POLYFILL_OLD_MATH_FUNCTIONS to add in a polyfill"), T3(Math.clz32, "This browser does not support Math.clz32(), build with LEGACY_VM_SUPPORT or POLYFILL_OLD_MATH_FUNCTIONS to add in a polyfill"), T3(Math.trunc, "This browser does not support Math.trunc(), build with LEGACY_VM_SUPPORT or POLYFILL_OLD_MATH_FUNCTIONS to add in a polyfill");
      var B3 = 0, L3 = null, N3 = null, V3 = {};
      function U3(e6) {
        for (var t4 = e6; ; ) {
          if (!V3[e6]) return e6;
          e6 = t4 + Math.random();
        }
      }
      function W3(e6) {
        B3++, o3.monitorRunDependencies?.(B3), e6 ? (T3(!V3[e6]), V3[e6] = 1, null === L3 && "undefined" != typeof setInterval && (L3 = setInterval(() => {
          if (C3) return clearInterval(L3), void (L3 = null);
          var e7 = false;
          for (var t4 in V3) e7 || (e7 = true, g2("still waiting on run dependencies:")), g2(`dependency: ${t4}`);
          e7 && g2("(end of list)");
        }, 1e4))) : g2("warning: run dependency added without ID");
      }
      function z3(e6) {
        if (B3--, o3.monitorRunDependencies?.(B3), e6 ? (T3(V3[e6]), delete V3[e6]) : g2("warning: run dependency removed without ID"), 0 == B3 && (null !== L3 && (clearInterval(L3), L3 = null), N3)) {
          var t4 = N3;
          N3 = null, t4();
        }
      }
      function H2(e6) {
        o3.onAbort?.(e6), g2(e6 = "Aborted(" + e6 + ")"), C3 = true;
        var t4 = new WebAssembly.RuntimeError(e6);
        throw r4(t4), t4;
      }
      var $2, X2, K2, Y2 = (e6) => e6.startsWith("data:application/octet-stream;base64,"), J2 = (e6) => e6.startsWith("file://");
      function q2(e6, t4) {
        return (...n4) => {
          T3(I3, `native function \`${e6}\` called before runtime initialization`);
          var r5 = Qe2[e6];
          return T3(r5, `exported native function \`${e6}\` not found`), T3(n4.length <= t4, `native function \`${e6}\` called with ${n4.length} args but expects ${t4}`), r5(...n4);
        };
      }
      function Q2() {
        if (o3.locateFile) {
          var e6 = "pdfium.wasm";
          return Y2(e6) ? e6 : (t4 = e6, o3.locateFile ? o3.locateFile(t4, _2) : _2 + t4);
        }
        var t4;
        return m2 ? "pdfium.wasm" : new URL("pdfium.wasm", import.meta.url).href;
      }
      function Z2(e6) {
        if (e6 == $2 && D2) return new Uint8Array(D2);
        if (u2) return u2(e6);
        throw "both async and sync fetching of the wasm failed";
      }
      function ee2(e6, t4, n4) {
        return function(e7) {
          return D2 ? Promise.resolve().then(() => Z2(e7)) : s3(e7).then((e8) => new Uint8Array(e8), () => Z2(e7));
        }(e6).then((e7) => WebAssembly.instantiate(e7, t4)).then(n4, (e7) => {
          g2(`failed to asynchronously prepare wasm: ${e7}`), J2($2) && g2(`warning: Loading from a file URI (${$2}) is not supported in most browsers. See https://emscripten.org/docs/getting_started/FAQ.html#how-do-i-run-a-local-webserver-for-testing-why-does-my-program-stall-in-downloading-or-preparing`), H2(e7);
        });
      }
      if ((() => {
        var e6 = new Int16Array(1), t4 = new Int8Array(e6.buffer);
        if (e6[0] = 25459, 115 !== t4[0] || 99 !== t4[1]) throw "Runtime error: expected the system to be little-endian! (Run with -sSUPPORT_BIG_ENDIAN to bypass)";
      })(), o3.ENVIRONMENT) throw new Error("Module.ENVIRONMENT has been deprecated. To force the environment, use the ENVIRONMENT compile-time option (for example, -sENVIRONMENT=web or -sENVIRONMENT=node)");
      function te2(e6, t4, n4 = true) {
        Object.getOwnPropertyDescriptor(o3, e6) || Object.defineProperty(o3, e6, { configurable: true, get() {
          H2(`\`Module.${e6}\` has been replaced by \`${t4}\`` + (n4 ? " (the initial value can be provided on Module, but after startup the value is only looked for on a local variable of that name)" : ""));
        } });
      }
      function ne2(e6) {
        return "FS_createPath" === e6 || "FS_createDataFile" === e6 || "FS_createPreloadedFile" === e6 || "FS_unlink" === e6 || "addRunDependency" === e6 || "FS_createLazyFile" === e6 || "FS_createDevice" === e6 || "removeRunDependency" === e6;
      }
      function re2(e6, t4) {
        "undefined" == typeof globalThis || Object.getOwnPropertyDescriptor(globalThis, e6) || Object.defineProperty(globalThis, e6, { configurable: true, get() {
          t4();
        } });
      }
      function oe2(e6, t4) {
        re2(e6, () => {
          me2(`\`${e6}\` is not longer defined by emscripten. ${t4}`);
        });
      }
      function ie2(e6) {
        Object.getOwnPropertyDescriptor(o3, e6) || Object.defineProperty(o3, e6, { configurable: true, get() {
          var t4 = `'${e6}' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the Emscripten FAQ)`;
          ne2(e6) && (t4 += ". Alternatively, forcing filesystem support (-sFORCE_FILESYSTEM) can export this for you"), H2(t4);
        } });
      }
      oe2("buffer", "Please use HEAP8.buffer or wasmMemory.buffer"), oe2("asm", "Please use wasmExports instead");
      var ae2 = (e6) => {
        e6.forEach((e7) => e7(o3));
      };
      o3.noExitRuntime;
      var Fe2 = (e6) => (T3("number" == typeof e6), "0x" + (e6 >>>= 0).toString(16).padStart(8, "0")), se2 = (e6) => Ft2(e6), ue2 = () => ut2(), me2 = (e6) => {
        me2.shown ||= {}, me2.shown[e6] || (me2.shown[e6] = 1, g2(e6));
      }, le2 = "undefined" != typeof TextDecoder ? new TextDecoder() : void 0, de2 = (e6, t4 = 0, n4 = NaN) => {
        for (var r5 = t4 + n4, o4 = t4; e6[o4] && !(o4 >= r5); ) ++o4;
        if (o4 - t4 > 16 && e6.buffer && le2) return le2.decode(e6.subarray(t4, o4));
        for (var i5 = ""; t4 < o4; ) {
          var a4 = e6[t4++];
          if (128 & a4) {
            var F3 = 63 & e6[t4++];
            if (192 != (224 & a4)) {
              var s4 = 63 & e6[t4++];
              if (224 == (240 & a4) ? a4 = (15 & a4) << 12 | F3 << 6 | s4 : (240 != (248 & a4) && me2("Invalid UTF-8 leading byte " + Fe2(a4) + " encountered when deserializing a UTF-8 string in wasm memory to a JS string!"), a4 = (7 & a4) << 18 | F3 << 12 | s4 << 6 | 63 & e6[t4++]), a4 < 65536) i5 += String.fromCharCode(a4);
              else {
                var u3 = a4 - 65536;
                i5 += String.fromCharCode(55296 | u3 >> 10, 56320 | 1023 & u3);
              }
            } else i5 += String.fromCharCode((31 & a4) << 6 | F3);
          } else i5 += String.fromCharCode(a4);
        }
        return i5;
      }, _e2 = (e6, t4) => (T3("number" == typeof e6, `UTF8ToString expects a number (got ${typeof e6})`), e6 ? de2(p2, e6, t4) : "");
      function Pe2() {
        T3(null != we2.varargs);
        var e6 = G2[+we2.varargs >> 2];
        return we2.varargs += 4, e6;
      }
      var ce2 = Pe2, ge2 = { isAbs: (e6) => "/" === e6.charAt(0), splitPath: (e6) => /^(\/?|)([\s\S]*?)((?:\.{1,2}|[^\/]+?|)(\.[^.\/]*|))(?:[\/]*)$/.exec(e6).slice(1), normalizeArray: (e6, t4) => {
        for (var n4 = 0, r5 = e6.length - 1; r5 >= 0; r5--) {
          var o4 = e6[r5];
          "." === o4 ? e6.splice(r5, 1) : ".." === o4 ? (e6.splice(r5, 1), n4++) : n4 && (e6.splice(r5, 1), n4--);
        }
        if (t4) for (; n4; n4--) e6.unshift("..");
        return e6;
      }, normalize: (e6) => {
        var t4 = ge2.isAbs(e6), n4 = "/" === e6.substr(-1);
        return (e6 = ge2.normalizeArray(e6.split("/").filter((e7) => !!e7), !t4).join("/")) || t4 || (e6 = "."), e6 && n4 && (e6 += "/"), (t4 ? "/" : "") + e6;
      }, dirname: (e6) => {
        var t4 = ge2.splitPath(e6), n4 = t4[0], r5 = t4[1];
        return n4 || r5 ? (r5 && (r5 = r5.substr(0, r5.length - 1)), n4 + r5) : ".";
      }, basename: (e6) => {
        if ("/" === e6) return "/";
        var t4 = (e6 = (e6 = ge2.normalize(e6)).replace(/\/$/, "")).lastIndexOf("/");
        return -1 === t4 ? e6 : e6.substr(t4 + 1);
      }, join: (...e6) => ge2.normalize(e6.join("/")), join2: (e6, t4) => ge2.normalize(e6 + "/" + t4) }, he2 = (e6) => (he2 = (() => {
        if ("object" == typeof crypto && "function" == typeof crypto.getRandomValues) return (e7) => crypto.getRandomValues(e7);
        H2("no cryptographic support found for randomDevice. consider polyfilling it if you want to use something insecure like Math.random(), e.g. put this in a --pre-js: var crypto = { getRandomValues: (array) => { for (var i = 0; i < array.length; i++) array[i] = (Math.random()*256)|0 } };");
      })())(e6), De2 = { resolve: (...e6) => {
        for (var t4 = "", n4 = false, r5 = e6.length - 1; r5 >= -1 && !n4; r5--) {
          var o4 = r5 >= 0 ? e6[r5] : ve2.cwd();
          if ("string" != typeof o4) throw new TypeError("Arguments to path.resolve must be strings");
          if (!o4) return "";
          t4 = o4 + "/" + t4, n4 = ge2.isAbs(o4);
        }
        return (n4 ? "/" : "") + (t4 = ge2.normalizeArray(t4.split("/").filter((e7) => !!e7), !n4).join("/")) || ".";
      }, relative: (e6, t4) => {
        function n4(e7) {
          for (var t5 = 0; t5 < e7.length && "" === e7[t5]; t5++) ;
          for (var n5 = e7.length - 1; n5 >= 0 && "" === e7[n5]; n5--) ;
          return t5 > n5 ? [] : e7.slice(t5, n5 - t5 + 1);
        }
        e6 = De2.resolve(e6).substr(1), t4 = De2.resolve(t4).substr(1);
        for (var r5 = n4(e6.split("/")), o4 = n4(t4.split("/")), i5 = Math.min(r5.length, o4.length), a4 = i5, F3 = 0; F3 < i5; F3++) if (r5[F3] !== o4[F3]) {
          a4 = F3;
          break;
        }
        var s4 = [];
        for (F3 = a4; F3 < r5.length; F3++) s4.push("..");
        return (s4 = s4.concat(o4.slice(a4))).join("/");
      } }, be2 = [], pe2 = (e6) => {
        for (var t4 = 0, n4 = 0; n4 < e6.length; ++n4) {
          var r5 = e6.charCodeAt(n4);
          r5 <= 127 ? t4++ : r5 <= 2047 ? t4 += 2 : r5 >= 55296 && r5 <= 57343 ? (t4 += 4, ++n4) : t4 += 3;
        }
        return t4;
      }, fe2 = (e6, t4, n4, r5) => {
        if (T3("string" == typeof e6, `stringToUTF8Array expects a string (got ${typeof e6})`), !(r5 > 0)) return 0;
        for (var o4 = n4, i5 = n4 + r5 - 1, a4 = 0; a4 < e6.length; ++a4) {
          var F3 = e6.charCodeAt(a4);
          if (F3 >= 55296 && F3 <= 57343 && (F3 = 65536 + ((1023 & F3) << 10) | 1023 & e6.charCodeAt(++a4)), F3 <= 127) {
            if (n4 >= i5) break;
            t4[n4++] = F3;
          } else if (F3 <= 2047) {
            if (n4 + 1 >= i5) break;
            t4[n4++] = 192 | F3 >> 6, t4[n4++] = 128 | 63 & F3;
          } else if (F3 <= 65535) {
            if (n4 + 2 >= i5) break;
            t4[n4++] = 224 | F3 >> 12, t4[n4++] = 128 | F3 >> 6 & 63, t4[n4++] = 128 | 63 & F3;
          } else {
            if (n4 + 3 >= i5) break;
            F3 > 1114111 && me2("Invalid Unicode code point " + Fe2(F3) + " encountered when serializing a JS string to a UTF-8 string in wasm memory! (Valid unicode code points should be in range 0-0x10FFFF)."), t4[n4++] = 240 | F3 >> 18, t4[n4++] = 128 | F3 >> 12 & 63, t4[n4++] = 128 | F3 >> 6 & 63, t4[n4++] = 128 | 63 & F3;
          }
        }
        return t4[n4] = 0, n4 - o4;
      };
      function Ae2(e6, t4, n4) {
        var r5 = n4 > 0 ? n4 : pe2(e6) + 1, o4 = new Array(r5), i5 = fe2(e6, o4, 0, o4.length);
        return t4 && (o4.length = i5), o4;
      }
      var Ge2, Ee2, Se2 = { ttys: [], init() {
      }, shutdown() {
      }, register(e6, t4) {
        Se2.ttys[e6] = { input: [], output: [], ops: t4 }, ve2.registerDevice(e6, Se2.stream_ops);
      }, stream_ops: { open(e6) {
        var t4 = Se2.ttys[e6.node.rdev];
        if (!t4) throw new ve2.ErrnoError(43);
        e6.tty = t4, e6.seekable = false;
      }, close(e6) {
        e6.tty.ops.fsync(e6.tty);
      }, fsync(e6) {
        e6.tty.ops.fsync(e6.tty);
      }, read(e6, t4, n4, r5, o4) {
        if (!e6.tty || !e6.tty.ops.get_char) throw new ve2.ErrnoError(60);
        for (var i5 = 0, a4 = 0; a4 < r5; a4++) {
          var F3;
          try {
            F3 = e6.tty.ops.get_char(e6.tty);
          } catch (e7) {
            throw new ve2.ErrnoError(29);
          }
          if (void 0 === F3 && 0 === i5) throw new ve2.ErrnoError(6);
          if (null == F3) break;
          i5++, t4[n4 + a4] = F3;
        }
        return i5 && (e6.node.timestamp = Date.now()), i5;
      }, write(e6, t4, n4, r5, o4) {
        if (!e6.tty || !e6.tty.ops.put_char) throw new ve2.ErrnoError(60);
        try {
          for (var i5 = 0; i5 < r5; i5++) e6.tty.ops.put_char(e6.tty, t4[n4 + i5]);
        } catch (e7) {
          throw new ve2.ErrnoError(29);
        }
        return r5 && (e6.node.timestamp = Date.now()), i5;
      } }, default_tty_ops: { get_char: (e6) => (() => {
        if (!be2.length) {
          var e7 = null;
          if ("undefined" != typeof window && "function" == typeof window.prompt ? null !== (e7 = window.prompt("Input: ")) && (e7 += "\n") : "function" == typeof readline && (e7 = readline()) && (e7 += "\n"), !e7) return null;
          be2 = Ae2(e7, true);
        }
        return be2.shift();
      })(), put_char(e6, t4) {
        null === t4 || 10 === t4 ? (c2(de2(e6.output)), e6.output = []) : 0 != t4 && e6.output.push(t4);
      }, fsync(e6) {
        e6.output && e6.output.length > 0 && (c2(de2(e6.output)), e6.output = []);
      }, ioctl_tcgets: (e6) => ({ c_iflag: 25856, c_oflag: 5, c_cflag: 191, c_lflag: 35387, c_cc: [3, 28, 127, 21, 4, 0, 1, 0, 17, 19, 26, 0, 18, 15, 23, 22, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] }), ioctl_tcsets: (e6, t4, n4) => 0, ioctl_tiocgwinsz: (e6) => [24, 80] }, default_tty1_ops: { put_char(e6, t4) {
        null === t4 || 10 === t4 ? (g2(de2(e6.output)), e6.output = []) : 0 != t4 && e6.output.push(t4);
      }, fsync(e6) {
        e6.output && e6.output.length > 0 && (g2(de2(e6.output)), e6.output = []);
      } } }, Me2 = (e6, t4) => (T3(t4, "alignment argument is required"), Math.ceil(e6 / t4) * t4), ye2 = (e6) => {
        e6 = Me2(e6, 65536);
        var t4 = nt2(65536, e6);
        return t4 && ((e7, t5) => {
          p2.fill(0, e7, e7 + t5);
        })(t4, e6), t4;
      }, Ce2 = { ops_table: null, mount: (e6) => Ce2.createNode(null, "/", 16895, 0), createNode(e6, t4, n4, r5) {
        if (ve2.isBlkdev(n4) || ve2.isFIFO(n4)) throw new ve2.ErrnoError(63);
        Ce2.ops_table ||= { dir: { node: { getattr: Ce2.node_ops.getattr, setattr: Ce2.node_ops.setattr, lookup: Ce2.node_ops.lookup, mknod: Ce2.node_ops.mknod, rename: Ce2.node_ops.rename, unlink: Ce2.node_ops.unlink, rmdir: Ce2.node_ops.rmdir, readdir: Ce2.node_ops.readdir, symlink: Ce2.node_ops.symlink }, stream: { llseek: Ce2.stream_ops.llseek } }, file: { node: { getattr: Ce2.node_ops.getattr, setattr: Ce2.node_ops.setattr }, stream: { llseek: Ce2.stream_ops.llseek, read: Ce2.stream_ops.read, write: Ce2.stream_ops.write, allocate: Ce2.stream_ops.allocate, mmap: Ce2.stream_ops.mmap, msync: Ce2.stream_ops.msync } }, link: { node: { getattr: Ce2.node_ops.getattr, setattr: Ce2.node_ops.setattr, readlink: Ce2.node_ops.readlink }, stream: {} }, chrdev: { node: { getattr: Ce2.node_ops.getattr, setattr: Ce2.node_ops.setattr }, stream: ve2.chrdev_stream_ops } };
        var o4 = ve2.createNode(e6, t4, n4, r5);
        return ve2.isDir(o4.mode) ? (o4.node_ops = Ce2.ops_table.dir.node, o4.stream_ops = Ce2.ops_table.dir.stream, o4.contents = {}) : ve2.isFile(o4.mode) ? (o4.node_ops = Ce2.ops_table.file.node, o4.stream_ops = Ce2.ops_table.file.stream, o4.usedBytes = 0, o4.contents = null) : ve2.isLink(o4.mode) ? (o4.node_ops = Ce2.ops_table.link.node, o4.stream_ops = Ce2.ops_table.link.stream) : ve2.isChrdev(o4.mode) && (o4.node_ops = Ce2.ops_table.chrdev.node, o4.stream_ops = Ce2.ops_table.chrdev.stream), o4.timestamp = Date.now(), e6 && (e6.contents[t4] = o4, e6.timestamp = o4.timestamp), o4;
      }, getFileDataAsTypedArray: (e6) => e6.contents ? e6.contents.subarray ? e6.contents.subarray(0, e6.usedBytes) : new Uint8Array(e6.contents) : new Uint8Array(0), expandFileStorage(e6, t4) {
        var n4 = e6.contents ? e6.contents.length : 0;
        if (!(n4 >= t4)) {
          t4 = Math.max(t4, n4 * (n4 < 1048576 ? 2 : 1.125) >>> 0), 0 != n4 && (t4 = Math.max(t4, 256));
          var r5 = e6.contents;
          e6.contents = new Uint8Array(t4), e6.usedBytes > 0 && e6.contents.set(r5.subarray(0, e6.usedBytes), 0);
        }
      }, resizeFileStorage(e6, t4) {
        if (e6.usedBytes != t4) if (0 == t4) e6.contents = null, e6.usedBytes = 0;
        else {
          var n4 = e6.contents;
          e6.contents = new Uint8Array(t4), n4 && e6.contents.set(n4.subarray(0, Math.min(t4, e6.usedBytes))), e6.usedBytes = t4;
        }
      }, node_ops: { getattr(e6) {
        var t4 = {};
        return t4.dev = ve2.isChrdev(e6.mode) ? e6.id : 1, t4.ino = e6.id, t4.mode = e6.mode, t4.nlink = 1, t4.uid = 0, t4.gid = 0, t4.rdev = e6.rdev, ve2.isDir(e6.mode) ? t4.size = 4096 : ve2.isFile(e6.mode) ? t4.size = e6.usedBytes : ve2.isLink(e6.mode) ? t4.size = e6.link.length : t4.size = 0, t4.atime = new Date(e6.timestamp), t4.mtime = new Date(e6.timestamp), t4.ctime = new Date(e6.timestamp), t4.blksize = 4096, t4.blocks = Math.ceil(t4.size / t4.blksize), t4;
      }, setattr(e6, t4) {
        void 0 !== t4.mode && (e6.mode = t4.mode), void 0 !== t4.timestamp && (e6.timestamp = t4.timestamp), void 0 !== t4.size && Ce2.resizeFileStorage(e6, t4.size);
      }, lookup(e6, t4) {
        throw ve2.genericErrors[44];
      }, mknod: (e6, t4, n4, r5) => Ce2.createNode(e6, t4, n4, r5), rename(e6, t4, n4) {
        if (ve2.isDir(e6.mode)) {
          var r5;
          try {
            r5 = ve2.lookupNode(t4, n4);
          } catch (e7) {
          }
          if (r5) for (var o4 in r5.contents) throw new ve2.ErrnoError(55);
        }
        delete e6.parent.contents[e6.name], e6.parent.timestamp = Date.now(), e6.name = n4, t4.contents[n4] = e6, t4.timestamp = e6.parent.timestamp;
      }, unlink(e6, t4) {
        delete e6.contents[t4], e6.timestamp = Date.now();
      }, rmdir(e6, t4) {
        var n4 = ve2.lookupNode(e6, t4);
        for (var r5 in n4.contents) throw new ve2.ErrnoError(55);
        delete e6.contents[t4], e6.timestamp = Date.now();
      }, readdir(e6) {
        var t4 = [".", ".."];
        for (var n4 of Object.keys(e6.contents)) t4.push(n4);
        return t4;
      }, symlink(e6, t4, n4) {
        var r5 = Ce2.createNode(e6, t4, 41471, 0);
        return r5.link = n4, r5;
      }, readlink(e6) {
        if (!ve2.isLink(e6.mode)) throw new ve2.ErrnoError(28);
        return e6.link;
      } }, stream_ops: { read(e6, t4, n4, r5, o4) {
        var i5 = e6.node.contents;
        if (o4 >= e6.node.usedBytes) return 0;
        var a4 = Math.min(e6.node.usedBytes - o4, r5);
        if (T3(a4 >= 0), a4 > 8 && i5.subarray) t4.set(i5.subarray(o4, o4 + a4), n4);
        else for (var F3 = 0; F3 < a4; F3++) t4[n4 + F3] = i5[o4 + F3];
        return a4;
      }, write(e6, t4, n4, r5, o4, i5) {
        if (T3(!(t4 instanceof ArrayBuffer)), t4.buffer === b2.buffer && (i5 = false), !r5) return 0;
        var a4 = e6.node;
        if (a4.timestamp = Date.now(), t4.subarray && (!a4.contents || a4.contents.subarray)) {
          if (i5) return T3(0 === o4, "canOwn must imply no weird position inside the file"), a4.contents = t4.subarray(n4, n4 + r5), a4.usedBytes = r5, r5;
          if (0 === a4.usedBytes && 0 === o4) return a4.contents = t4.slice(n4, n4 + r5), a4.usedBytes = r5, r5;
          if (o4 + r5 <= a4.usedBytes) return a4.contents.set(t4.subarray(n4, n4 + r5), o4), r5;
        }
        if (Ce2.expandFileStorage(a4, o4 + r5), a4.contents.subarray && t4.subarray) a4.contents.set(t4.subarray(n4, n4 + r5), o4);
        else for (var F3 = 0; F3 < r5; F3++) a4.contents[o4 + F3] = t4[n4 + F3];
        return a4.usedBytes = Math.max(a4.usedBytes, o4 + r5), r5;
      }, llseek(e6, t4, n4) {
        var r5 = t4;
        if (1 === n4 ? r5 += e6.position : 2 === n4 && ve2.isFile(e6.node.mode) && (r5 += e6.node.usedBytes), r5 < 0) throw new ve2.ErrnoError(28);
        return r5;
      }, allocate(e6, t4, n4) {
        Ce2.expandFileStorage(e6.node, t4 + n4), e6.node.usedBytes = Math.max(e6.node.usedBytes, t4 + n4);
      }, mmap(e6, t4, n4, r5, o4) {
        if (!ve2.isFile(e6.node.mode)) throw new ve2.ErrnoError(43);
        var i5, a4, F3 = e6.node.contents;
        if (2 & o4 || !F3 || F3.buffer !== b2.buffer) {
          if (a4 = true, !(i5 = ye2(t4))) throw new ve2.ErrnoError(48);
          F3 && ((n4 > 0 || n4 + t4 < F3.length) && (F3 = F3.subarray ? F3.subarray(n4, n4 + t4) : Array.prototype.slice.call(F3, n4, n4 + t4)), b2.set(F3, i5));
        } else a4 = false, i5 = F3.byteOffset;
        return { ptr: i5, allocated: a4 };
      }, msync: (e6, t4, n4, r5, o4) => (Ce2.stream_ops.write(e6, t4, 0, r5, n4, false), 0) } }, Te2 = o3.preloadPlugins || [], Oe2 = (e6, t4) => {
        var n4 = 0;
        return e6 && (n4 |= 365), t4 && (n4 |= 146), n4;
      }, xe2 = { EPERM: 63, ENOENT: 44, ESRCH: 71, EINTR: 27, EIO: 29, ENXIO: 60, E2BIG: 1, ENOEXEC: 45, EBADF: 8, ECHILD: 12, EAGAIN: 6, EWOULDBLOCK: 6, ENOMEM: 48, EACCES: 2, EFAULT: 21, ENOTBLK: 105, EBUSY: 10, EEXIST: 20, EXDEV: 75, ENODEV: 43, ENOTDIR: 54, EISDIR: 31, EINVAL: 28, ENFILE: 41, EMFILE: 33, ENOTTY: 59, ETXTBSY: 74, EFBIG: 22, ENOSPC: 51, ESPIPE: 70, EROFS: 69, EMLINK: 34, EPIPE: 64, EDOM: 18, ERANGE: 68, ENOMSG: 49, EIDRM: 24, ECHRNG: 106, EL2NSYNC: 156, EL3HLT: 107, EL3RST: 108, ELNRNG: 109, EUNATCH: 110, ENOCSI: 111, EL2HLT: 112, EDEADLK: 16, ENOLCK: 46, EBADE: 113, EBADR: 114, EXFULL: 115, ENOANO: 104, EBADRQC: 103, EBADSLT: 102, EDEADLOCK: 16, EBFONT: 101, ENOSTR: 100, ENODATA: 116, ETIME: 117, ENOSR: 118, ENONET: 119, ENOPKG: 120, EREMOTE: 121, ENOLINK: 47, EADV: 122, ESRMNT: 123, ECOMM: 124, EPROTO: 65, EMULTIHOP: 36, EDOTDOT: 125, EBADMSG: 9, ENOTUNIQ: 126, EBADFD: 127, EREMCHG: 128, ELIBACC: 129, ELIBBAD: 130, ELIBSCN: 131, ELIBMAX: 132, ELIBEXEC: 133, ENOSYS: 52, ENOTEMPTY: 55, ENAMETOOLONG: 37, ELOOP: 32, EOPNOTSUPP: 138, EPFNOSUPPORT: 139, ECONNRESET: 15, ENOBUFS: 42, EAFNOSUPPORT: 5, EPROTOTYPE: 67, ENOTSOCK: 57, ENOPROTOOPT: 50, ESHUTDOWN: 140, ECONNREFUSED: 14, EADDRINUSE: 3, ECONNABORTED: 13, ENETUNREACH: 40, ENETDOWN: 38, ETIMEDOUT: 73, EHOSTDOWN: 142, EHOSTUNREACH: 23, EINPROGRESS: 26, EALREADY: 7, EDESTADDRREQ: 17, EMSGSIZE: 35, EPROTONOSUPPORT: 66, ESOCKTNOSUPPORT: 137, EADDRNOTAVAIL: 4, ENETRESET: 39, EISCONN: 30, ENOTCONN: 53, ETOOMANYREFS: 141, EUSERS: 136, EDQUOT: 19, ESTALE: 72, ENOTSUP: 138, ENOMEDIUM: 148, EILSEQ: 25, EOVERFLOW: 61, ECANCELED: 11, ENOTRECOVERABLE: 56, EOWNERDEAD: 62, ESTRPIPE: 135 }, ve2 = { root: null, mounts: [], devices: {}, streams: [], nextInode: 1, nameTable: null, currentPath: "/", initialized: false, ignorePermissions: true, ErrnoError: class extends Error {
        constructor(e6) {
          for (var t4 in super(I3 ? ((e7) => _e2(rt2(e7)))(e6) : ""), this.name = "ErrnoError", this.errno = e6, xe2) if (xe2[t4] === e6) {
            this.code = t4;
            break;
          }
        }
      }, genericErrors: {}, filesystems: null, syncFSRequests: 0, readFiles: {}, FSStream: class {
        constructor() {
          this.shared = {};
        }
        get object() {
          return this.node;
        }
        set object(e6) {
          this.node = e6;
        }
        get isRead() {
          return 1 != (2097155 & this.flags);
        }
        get isWrite() {
          return !!(2097155 & this.flags);
        }
        get isAppend() {
          return 1024 & this.flags;
        }
        get flags() {
          return this.shared.flags;
        }
        set flags(e6) {
          this.shared.flags = e6;
        }
        get position() {
          return this.shared.position;
        }
        set position(e6) {
          this.shared.position = e6;
        }
      }, FSNode: class {
        constructor(e6, t4, n4, r5) {
          e6 || (e6 = this), this.parent = e6, this.mount = e6.mount, this.mounted = null, this.id = ve2.nextInode++, this.name = t4, this.mode = n4, this.node_ops = {}, this.stream_ops = {}, this.rdev = r5, this.readMode = 365, this.writeMode = 146;
        }
        get read() {
          return (this.mode & this.readMode) === this.readMode;
        }
        set read(e6) {
          e6 ? this.mode |= this.readMode : this.mode &= ~this.readMode;
        }
        get write() {
          return (this.mode & this.writeMode) === this.writeMode;
        }
        set write(e6) {
          e6 ? this.mode |= this.writeMode : this.mode &= ~this.writeMode;
        }
        get isFolder() {
          return ve2.isDir(this.mode);
        }
        get isDevice() {
          return ve2.isChrdev(this.mode);
        }
      }, lookupPath(e6, t4 = {}) {
        if (!(e6 = De2.resolve(e6))) return { path: "", node: null };
        if ((t4 = Object.assign({ follow_mount: true, recurse_count: 0 }, t4)).recurse_count > 8) throw new ve2.ErrnoError(32);
        for (var n4 = e6.split("/").filter((e7) => !!e7), r5 = ve2.root, o4 = "/", i5 = 0; i5 < n4.length; i5++) {
          var a4 = i5 === n4.length - 1;
          if (a4 && t4.parent) break;
          if (r5 = ve2.lookupNode(r5, n4[i5]), o4 = ge2.join2(o4, n4[i5]), ve2.isMountpoint(r5) && (!a4 || a4 && t4.follow_mount) && (r5 = r5.mounted.root), !a4 || t4.follow) for (var F3 = 0; ve2.isLink(r5.mode); ) {
            var s4 = ve2.readlink(o4);
            if (o4 = De2.resolve(ge2.dirname(o4), s4), r5 = ve2.lookupPath(o4, { recurse_count: t4.recurse_count + 1 }).node, F3++ > 40) throw new ve2.ErrnoError(32);
          }
        }
        return { path: o4, node: r5 };
      }, getPath(e6) {
        for (var t4; ; ) {
          if (ve2.isRoot(e6)) {
            var n4 = e6.mount.mountpoint;
            return t4 ? "/" !== n4[n4.length - 1] ? `${n4}/${t4}` : n4 + t4 : n4;
          }
          t4 = t4 ? `${e6.name}/${t4}` : e6.name, e6 = e6.parent;
        }
      }, hashName(e6, t4) {
        for (var n4 = 0, r5 = 0; r5 < t4.length; r5++) n4 = (n4 << 5) - n4 + t4.charCodeAt(r5) | 0;
        return (e6 + n4 >>> 0) % ve2.nameTable.length;
      }, hashAddNode(e6) {
        var t4 = ve2.hashName(e6.parent.id, e6.name);
        e6.name_next = ve2.nameTable[t4], ve2.nameTable[t4] = e6;
      }, hashRemoveNode(e6) {
        var t4 = ve2.hashName(e6.parent.id, e6.name);
        if (ve2.nameTable[t4] === e6) ve2.nameTable[t4] = e6.name_next;
        else for (var n4 = ve2.nameTable[t4]; n4; ) {
          if (n4.name_next === e6) {
            n4.name_next = e6.name_next;
            break;
          }
          n4 = n4.name_next;
        }
      }, lookupNode(e6, t4) {
        var n4 = ve2.mayLookup(e6);
        if (n4) throw new ve2.ErrnoError(n4);
        for (var r5 = ve2.hashName(e6.id, t4), o4 = ve2.nameTable[r5]; o4; o4 = o4.name_next) {
          var i5 = o4.name;
          if (o4.parent.id === e6.id && i5 === t4) return o4;
        }
        return ve2.lookup(e6, t4);
      }, createNode(e6, t4, n4, r5) {
        T3("object" == typeof e6);
        var o4 = new ve2.FSNode(e6, t4, n4, r5);
        return ve2.hashAddNode(o4), o4;
      }, destroyNode(e6) {
        ve2.hashRemoveNode(e6);
      }, isRoot: (e6) => e6 === e6.parent, isMountpoint: (e6) => !!e6.mounted, isFile: (e6) => 32768 == (61440 & e6), isDir: (e6) => 16384 == (61440 & e6), isLink: (e6) => 40960 == (61440 & e6), isChrdev: (e6) => 8192 == (61440 & e6), isBlkdev: (e6) => 24576 == (61440 & e6), isFIFO: (e6) => 4096 == (61440 & e6), isSocket: (e6) => !(49152 & ~e6), flagsToPermissionString(e6) {
        var t4 = ["r", "w", "rw"][3 & e6];
        return 512 & e6 && (t4 += "w"), t4;
      }, nodePermissions: (e6, t4) => ve2.ignorePermissions || (!t4.includes("r") || 292 & e6.mode) && (!t4.includes("w") || 146 & e6.mode) && (!t4.includes("x") || 73 & e6.mode) ? 0 : 2, mayLookup(e6) {
        if (!ve2.isDir(e6.mode)) return 54;
        var t4 = ve2.nodePermissions(e6, "x");
        return t4 || (e6.node_ops.lookup ? 0 : 2);
      }, mayCreate(e6, t4) {
        try {
          return ve2.lookupNode(e6, t4), 20;
        } catch (e7) {
        }
        return ve2.nodePermissions(e6, "wx");
      }, mayDelete(e6, t4, n4) {
        var r5;
        try {
          r5 = ve2.lookupNode(e6, t4);
        } catch (e7) {
          return e7.errno;
        }
        var o4 = ve2.nodePermissions(e6, "wx");
        if (o4) return o4;
        if (n4) {
          if (!ve2.isDir(r5.mode)) return 54;
          if (ve2.isRoot(r5) || ve2.getPath(r5) === ve2.cwd()) return 10;
        } else if (ve2.isDir(r5.mode)) return 31;
        return 0;
      }, mayOpen: (e6, t4) => e6 ? ve2.isLink(e6.mode) ? 32 : ve2.isDir(e6.mode) && ("r" !== ve2.flagsToPermissionString(t4) || 512 & t4) ? 31 : ve2.nodePermissions(e6, ve2.flagsToPermissionString(t4)) : 44, MAX_OPEN_FDS: 4096, nextfd() {
        for (var e6 = 0; e6 <= ve2.MAX_OPEN_FDS; e6++) if (!ve2.streams[e6]) return e6;
        throw new ve2.ErrnoError(33);
      }, getStreamChecked(e6) {
        var t4 = ve2.getStream(e6);
        if (!t4) throw new ve2.ErrnoError(8);
        return t4;
      }, getStream: (e6) => ve2.streams[e6], createStream: (e6, t4 = -1) => (T3(t4 >= -1), e6 = Object.assign(new ve2.FSStream(), e6), -1 == t4 && (t4 = ve2.nextfd()), e6.fd = t4, ve2.streams[t4] = e6, e6), closeStream(e6) {
        ve2.streams[e6] = null;
      }, dupStream(e6, t4 = -1) {
        var n4 = ve2.createStream(e6, t4);
        return n4.stream_ops?.dup?.(n4), n4;
      }, chrdev_stream_ops: { open(e6) {
        var t4 = ve2.getDevice(e6.node.rdev);
        e6.stream_ops = t4.stream_ops, e6.stream_ops.open?.(e6);
      }, llseek() {
        throw new ve2.ErrnoError(70);
      } }, major: (e6) => e6 >> 8, minor: (e6) => 255 & e6, makedev: (e6, t4) => e6 << 8 | t4, registerDevice(e6, t4) {
        ve2.devices[e6] = { stream_ops: t4 };
      }, getDevice: (e6) => ve2.devices[e6], getMounts(e6) {
        for (var t4 = [], n4 = [e6]; n4.length; ) {
          var r5 = n4.pop();
          t4.push(r5), n4.push(...r5.mounts);
        }
        return t4;
      }, syncfs(e6, t4) {
        "function" == typeof e6 && (t4 = e6, e6 = false), ve2.syncFSRequests++, ve2.syncFSRequests > 1 && g2(`warning: ${ve2.syncFSRequests} FS.syncfs operations in flight at once, probably just doing extra work`);
        var n4 = ve2.getMounts(ve2.root.mount), r5 = 0;
        function o4(e7) {
          return T3(ve2.syncFSRequests > 0), ve2.syncFSRequests--, t4(e7);
        }
        function i5(e7) {
          if (e7) return i5.errored ? void 0 : (i5.errored = true, o4(e7));
          ++r5 >= n4.length && o4(null);
        }
        n4.forEach((t5) => {
          if (!t5.type.syncfs) return i5(null);
          t5.type.syncfs(t5, e6, i5);
        });
      }, mount(e6, t4, n4) {
        if ("string" == typeof e6) throw e6;
        var r5, o4 = "/" === n4, i5 = !n4;
        if (o4 && ve2.root) throw new ve2.ErrnoError(10);
        if (!o4 && !i5) {
          var a4 = ve2.lookupPath(n4, { follow_mount: false });
          if (n4 = a4.path, r5 = a4.node, ve2.isMountpoint(r5)) throw new ve2.ErrnoError(10);
          if (!ve2.isDir(r5.mode)) throw new ve2.ErrnoError(54);
        }
        var F3 = { type: e6, opts: t4, mountpoint: n4, mounts: [] }, s4 = e6.mount(F3);
        return s4.mount = F3, F3.root = s4, o4 ? ve2.root = s4 : r5 && (r5.mounted = F3, r5.mount && r5.mount.mounts.push(F3)), s4;
      }, unmount(e6) {
        var t4 = ve2.lookupPath(e6, { follow_mount: false });
        if (!ve2.isMountpoint(t4.node)) throw new ve2.ErrnoError(28);
        var n4 = t4.node, r5 = n4.mounted, o4 = ve2.getMounts(r5);
        Object.keys(ve2.nameTable).forEach((e7) => {
          for (var t5 = ve2.nameTable[e7]; t5; ) {
            var n5 = t5.name_next;
            o4.includes(t5.mount) && ve2.destroyNode(t5), t5 = n5;
          }
        }), n4.mounted = null;
        var i5 = n4.mount.mounts.indexOf(r5);
        T3(-1 !== i5), n4.mount.mounts.splice(i5, 1);
      }, lookup: (e6, t4) => e6.node_ops.lookup(e6, t4), mknod(e6, t4, n4) {
        var r5 = ve2.lookupPath(e6, { parent: true }).node, o4 = ge2.basename(e6);
        if (!o4 || "." === o4 || ".." === o4) throw new ve2.ErrnoError(28);
        var i5 = ve2.mayCreate(r5, o4);
        if (i5) throw new ve2.ErrnoError(i5);
        if (!r5.node_ops.mknod) throw new ve2.ErrnoError(63);
        return r5.node_ops.mknod(r5, o4, t4, n4);
      }, create: (e6, t4) => (t4 = void 0 !== t4 ? t4 : 438, t4 &= 4095, t4 |= 32768, ve2.mknod(e6, t4, 0)), mkdir: (e6, t4) => (t4 = void 0 !== t4 ? t4 : 511, t4 &= 1023, t4 |= 16384, ve2.mknod(e6, t4, 0)), mkdirTree(e6, t4) {
        for (var n4 = e6.split("/"), r5 = "", o4 = 0; o4 < n4.length; ++o4) if (n4[o4]) {
          r5 += "/" + n4[o4];
          try {
            ve2.mkdir(r5, t4);
          } catch (e7) {
            if (20 != e7.errno) throw e7;
          }
        }
      }, mkdev: (e6, t4, n4) => (void 0 === n4 && (n4 = t4, t4 = 438), t4 |= 8192, ve2.mknod(e6, t4, n4)), symlink(e6, t4) {
        if (!De2.resolve(e6)) throw new ve2.ErrnoError(44);
        var n4 = ve2.lookupPath(t4, { parent: true }).node;
        if (!n4) throw new ve2.ErrnoError(44);
        var r5 = ge2.basename(t4), o4 = ve2.mayCreate(n4, r5);
        if (o4) throw new ve2.ErrnoError(o4);
        if (!n4.node_ops.symlink) throw new ve2.ErrnoError(63);
        return n4.node_ops.symlink(n4, r5, e6);
      }, rename(e6, t4) {
        var n4, r5, o4 = ge2.dirname(e6), i5 = ge2.dirname(t4), a4 = ge2.basename(e6), F3 = ge2.basename(t4);
        if (n4 = ve2.lookupPath(e6, { parent: true }).node, r5 = ve2.lookupPath(t4, { parent: true }).node, !n4 || !r5) throw new ve2.ErrnoError(44);
        if (n4.mount !== r5.mount) throw new ve2.ErrnoError(75);
        var s4, u3 = ve2.lookupNode(n4, a4), m3 = De2.relative(e6, i5);
        if ("." !== m3.charAt(0)) throw new ve2.ErrnoError(28);
        if ("." !== (m3 = De2.relative(t4, o4)).charAt(0)) throw new ve2.ErrnoError(55);
        try {
          s4 = ve2.lookupNode(r5, F3);
        } catch (e7) {
        }
        if (u3 !== s4) {
          var l3 = ve2.isDir(u3.mode), d3 = ve2.mayDelete(n4, a4, l3);
          if (d3) throw new ve2.ErrnoError(d3);
          if (d3 = s4 ? ve2.mayDelete(r5, F3, l3) : ve2.mayCreate(r5, F3)) throw new ve2.ErrnoError(d3);
          if (!n4.node_ops.rename) throw new ve2.ErrnoError(63);
          if (ve2.isMountpoint(u3) || s4 && ve2.isMountpoint(s4)) throw new ve2.ErrnoError(10);
          if (r5 !== n4 && (d3 = ve2.nodePermissions(n4, "w"))) throw new ve2.ErrnoError(d3);
          ve2.hashRemoveNode(u3);
          try {
            n4.node_ops.rename(u3, r5, F3), u3.parent = r5;
          } catch (e7) {
            throw e7;
          } finally {
            ve2.hashAddNode(u3);
          }
        }
      }, rmdir(e6) {
        var t4 = ve2.lookupPath(e6, { parent: true }).node, n4 = ge2.basename(e6), r5 = ve2.lookupNode(t4, n4), o4 = ve2.mayDelete(t4, n4, true);
        if (o4) throw new ve2.ErrnoError(o4);
        if (!t4.node_ops.rmdir) throw new ve2.ErrnoError(63);
        if (ve2.isMountpoint(r5)) throw new ve2.ErrnoError(10);
        t4.node_ops.rmdir(t4, n4), ve2.destroyNode(r5);
      }, readdir(e6) {
        var t4 = ve2.lookupPath(e6, { follow: true }).node;
        if (!t4.node_ops.readdir) throw new ve2.ErrnoError(54);
        return t4.node_ops.readdir(t4);
      }, unlink(e6) {
        var t4 = ve2.lookupPath(e6, { parent: true }).node;
        if (!t4) throw new ve2.ErrnoError(44);
        var n4 = ge2.basename(e6), r5 = ve2.lookupNode(t4, n4), o4 = ve2.mayDelete(t4, n4, false);
        if (o4) throw new ve2.ErrnoError(o4);
        if (!t4.node_ops.unlink) throw new ve2.ErrnoError(63);
        if (ve2.isMountpoint(r5)) throw new ve2.ErrnoError(10);
        t4.node_ops.unlink(t4, n4), ve2.destroyNode(r5);
      }, readlink(e6) {
        var t4 = ve2.lookupPath(e6).node;
        if (!t4) throw new ve2.ErrnoError(44);
        if (!t4.node_ops.readlink) throw new ve2.ErrnoError(28);
        return De2.resolve(ve2.getPath(t4.parent), t4.node_ops.readlink(t4));
      }, stat(e6, t4) {
        var n4 = ve2.lookupPath(e6, { follow: !t4 }).node;
        if (!n4) throw new ve2.ErrnoError(44);
        if (!n4.node_ops.getattr) throw new ve2.ErrnoError(63);
        return n4.node_ops.getattr(n4);
      }, lstat: (e6) => ve2.stat(e6, true), chmod(e6, t4, n4) {
        var r5;
        if (!(r5 = "string" == typeof e6 ? ve2.lookupPath(e6, { follow: !n4 }).node : e6).node_ops.setattr) throw new ve2.ErrnoError(63);
        r5.node_ops.setattr(r5, { mode: 4095 & t4 | -4096 & r5.mode, timestamp: Date.now() });
      }, lchmod(e6, t4) {
        ve2.chmod(e6, t4, true);
      }, fchmod(e6, t4) {
        var n4 = ve2.getStreamChecked(e6);
        ve2.chmod(n4.node, t4);
      }, chown(e6, t4, n4, r5) {
        var o4;
        if (!(o4 = "string" == typeof e6 ? ve2.lookupPath(e6, { follow: !r5 }).node : e6).node_ops.setattr) throw new ve2.ErrnoError(63);
        o4.node_ops.setattr(o4, { timestamp: Date.now() });
      }, lchown(e6, t4, n4) {
        ve2.chown(e6, t4, n4, true);
      }, fchown(e6, t4, n4) {
        var r5 = ve2.getStreamChecked(e6);
        ve2.chown(r5.node, t4, n4);
      }, truncate(e6, t4) {
        if (t4 < 0) throw new ve2.ErrnoError(28);
        var n4;
        if (!(n4 = "string" == typeof e6 ? ve2.lookupPath(e6, { follow: true }).node : e6).node_ops.setattr) throw new ve2.ErrnoError(63);
        if (ve2.isDir(n4.mode)) throw new ve2.ErrnoError(31);
        if (!ve2.isFile(n4.mode)) throw new ve2.ErrnoError(28);
        var r5 = ve2.nodePermissions(n4, "w");
        if (r5) throw new ve2.ErrnoError(r5);
        n4.node_ops.setattr(n4, { size: t4, timestamp: Date.now() });
      }, ftruncate(e6, t4) {
        var n4 = ve2.getStreamChecked(e6);
        if (!(2097155 & n4.flags)) throw new ve2.ErrnoError(28);
        ve2.truncate(n4.node, t4);
      }, utime(e6, t4, n4) {
        var r5 = ve2.lookupPath(e6, { follow: true }).node;
        r5.node_ops.setattr(r5, { timestamp: Math.max(t4, n4) });
      }, open(e6, t4, n4) {
        if ("" === e6) throw new ve2.ErrnoError(44);
        var r5;
        if (n4 = 64 & (t4 = "string" == typeof t4 ? ((e7) => {
          var t5 = { r: 0, "r+": 2, w: 577, "w+": 578, a: 1089, "a+": 1090 }[e7];
          if (void 0 === t5) throw new Error(`Unknown file open mode: ${e7}`);
          return t5;
        })(t4) : t4) ? 4095 & (n4 = void 0 === n4 ? 438 : n4) | 32768 : 0, "object" == typeof e6) r5 = e6;
        else {
          e6 = ge2.normalize(e6);
          try {
            r5 = ve2.lookupPath(e6, { follow: !(131072 & t4) }).node;
          } catch (e7) {
          }
        }
        var i5 = false;
        if (64 & t4) if (r5) {
          if (128 & t4) throw new ve2.ErrnoError(20);
        } else r5 = ve2.mknod(e6, n4, 0), i5 = true;
        if (!r5) throw new ve2.ErrnoError(44);
        if (ve2.isChrdev(r5.mode) && (t4 &= -513), 65536 & t4 && !ve2.isDir(r5.mode)) throw new ve2.ErrnoError(54);
        if (!i5) {
          var a4 = ve2.mayOpen(r5, t4);
          if (a4) throw new ve2.ErrnoError(a4);
        }
        512 & t4 && !i5 && ve2.truncate(r5, 0), t4 &= -131713;
        var F3 = ve2.createStream({ node: r5, path: ve2.getPath(r5), flags: t4, seekable: true, position: 0, stream_ops: r5.stream_ops, ungotten: [], error: false });
        return F3.stream_ops.open && F3.stream_ops.open(F3), !o3.logReadFiles || 1 & t4 || e6 in ve2.readFiles || (ve2.readFiles[e6] = 1), F3;
      }, close(e6) {
        if (ve2.isClosed(e6)) throw new ve2.ErrnoError(8);
        e6.getdents && (e6.getdents = null);
        try {
          e6.stream_ops.close && e6.stream_ops.close(e6);
        } catch (e7) {
          throw e7;
        } finally {
          ve2.closeStream(e6.fd);
        }
        e6.fd = null;
      }, isClosed: (e6) => null === e6.fd, llseek(e6, t4, n4) {
        if (ve2.isClosed(e6)) throw new ve2.ErrnoError(8);
        if (!e6.seekable || !e6.stream_ops.llseek) throw new ve2.ErrnoError(70);
        if (0 != n4 && 1 != n4 && 2 != n4) throw new ve2.ErrnoError(28);
        return e6.position = e6.stream_ops.llseek(e6, t4, n4), e6.ungotten = [], e6.position;
      }, read(e6, t4, n4, r5, o4) {
        if (T3(n4 >= 0), r5 < 0 || o4 < 0) throw new ve2.ErrnoError(28);
        if (ve2.isClosed(e6)) throw new ve2.ErrnoError(8);
        if (1 == (2097155 & e6.flags)) throw new ve2.ErrnoError(8);
        if (ve2.isDir(e6.node.mode)) throw new ve2.ErrnoError(31);
        if (!e6.stream_ops.read) throw new ve2.ErrnoError(28);
        var i5 = void 0 !== o4;
        if (i5) {
          if (!e6.seekable) throw new ve2.ErrnoError(70);
        } else o4 = e6.position;
        var a4 = e6.stream_ops.read(e6, t4, n4, r5, o4);
        return i5 || (e6.position += a4), a4;
      }, write(e6, t4, n4, r5, o4, i5) {
        if (T3(n4 >= 0), r5 < 0 || o4 < 0) throw new ve2.ErrnoError(28);
        if (ve2.isClosed(e6)) throw new ve2.ErrnoError(8);
        if (!(2097155 & e6.flags)) throw new ve2.ErrnoError(8);
        if (ve2.isDir(e6.node.mode)) throw new ve2.ErrnoError(31);
        if (!e6.stream_ops.write) throw new ve2.ErrnoError(28);
        e6.seekable && 1024 & e6.flags && ve2.llseek(e6, 0, 2);
        var a4 = void 0 !== o4;
        if (a4) {
          if (!e6.seekable) throw new ve2.ErrnoError(70);
        } else o4 = e6.position;
        var F3 = e6.stream_ops.write(e6, t4, n4, r5, o4, i5);
        return a4 || (e6.position += F3), F3;
      }, allocate(e6, t4, n4) {
        if (ve2.isClosed(e6)) throw new ve2.ErrnoError(8);
        if (t4 < 0 || n4 <= 0) throw new ve2.ErrnoError(28);
        if (!(2097155 & e6.flags)) throw new ve2.ErrnoError(8);
        if (!ve2.isFile(e6.node.mode) && !ve2.isDir(e6.node.mode)) throw new ve2.ErrnoError(43);
        if (!e6.stream_ops.allocate) throw new ve2.ErrnoError(138);
        e6.stream_ops.allocate(e6, t4, n4);
      }, mmap(e6, t4, n4, r5, o4) {
        if (2 & r5 && !(2 & o4) && 2 != (2097155 & e6.flags)) throw new ve2.ErrnoError(2);
        if (1 == (2097155 & e6.flags)) throw new ve2.ErrnoError(2);
        if (!e6.stream_ops.mmap) throw new ve2.ErrnoError(43);
        if (!t4) throw new ve2.ErrnoError(28);
        return e6.stream_ops.mmap(e6, t4, n4, r5, o4);
      }, msync: (e6, t4, n4, r5, o4) => (T3(n4 >= 0), e6.stream_ops.msync ? e6.stream_ops.msync(e6, t4, n4, r5, o4) : 0), ioctl(e6, t4, n4) {
        if (!e6.stream_ops.ioctl) throw new ve2.ErrnoError(59);
        return e6.stream_ops.ioctl(e6, t4, n4);
      }, readFile(e6, t4 = {}) {
        if (t4.flags = t4.flags || 0, t4.encoding = t4.encoding || "binary", "utf8" !== t4.encoding && "binary" !== t4.encoding) throw new Error(`Invalid encoding type "${t4.encoding}"`);
        var n4, r5 = ve2.open(e6, t4.flags), o4 = ve2.stat(e6).size, i5 = new Uint8Array(o4);
        return ve2.read(r5, i5, 0, o4, 0), "utf8" === t4.encoding ? n4 = de2(i5) : "binary" === t4.encoding && (n4 = i5), ve2.close(r5), n4;
      }, writeFile(e6, t4, n4 = {}) {
        n4.flags = n4.flags || 577;
        var r5 = ve2.open(e6, n4.flags, n4.mode);
        if ("string" == typeof t4) {
          var o4 = new Uint8Array(pe2(t4) + 1), i5 = fe2(t4, o4, 0, o4.length);
          ve2.write(r5, o4, 0, i5, void 0, n4.canOwn);
        } else {
          if (!ArrayBuffer.isView(t4)) throw new Error("Unsupported data type");
          ve2.write(r5, t4, 0, t4.byteLength, void 0, n4.canOwn);
        }
        ve2.close(r5);
      }, cwd: () => ve2.currentPath, chdir(e6) {
        var t4 = ve2.lookupPath(e6, { follow: true });
        if (null === t4.node) throw new ve2.ErrnoError(44);
        if (!ve2.isDir(t4.node.mode)) throw new ve2.ErrnoError(54);
        var n4 = ve2.nodePermissions(t4.node, "x");
        if (n4) throw new ve2.ErrnoError(n4);
        ve2.currentPath = t4.path;
      }, createDefaultDirectories() {
        ve2.mkdir("/tmp"), ve2.mkdir("/home"), ve2.mkdir("/home/web_user");
      }, createDefaultDevices() {
        ve2.mkdir("/dev"), ve2.registerDevice(ve2.makedev(1, 3), { read: () => 0, write: (e7, t5, n5, r5, o4) => r5 }), ve2.mkdev("/dev/null", ve2.makedev(1, 3)), Se2.register(ve2.makedev(5, 0), Se2.default_tty_ops), Se2.register(ve2.makedev(6, 0), Se2.default_tty1_ops), ve2.mkdev("/dev/tty", ve2.makedev(5, 0)), ve2.mkdev("/dev/tty1", ve2.makedev(6, 0));
        var e6 = new Uint8Array(1024), t4 = 0, n4 = () => (0 === t4 && (t4 = he2(e6).byteLength), e6[--t4]);
        ve2.createDevice("/dev", "random", n4), ve2.createDevice("/dev", "urandom", n4), ve2.mkdir("/dev/shm"), ve2.mkdir("/dev/shm/tmp");
      }, createSpecialDirectories() {
        ve2.mkdir("/proc");
        var e6 = ve2.mkdir("/proc/self");
        ve2.mkdir("/proc/self/fd"), ve2.mount({ mount() {
          var t4 = ve2.createNode(e6, "fd", 16895, 73);
          return t4.node_ops = { lookup(e7, t5) {
            var n4 = +t5, r5 = ve2.getStreamChecked(n4), o4 = { parent: null, mount: { mountpoint: "fake" }, node_ops: { readlink: () => r5.path } };
            return o4.parent = o4, o4;
          } }, t4;
        } }, {}, "/proc/self/fd");
      }, createStandardStreams(e6, t4, n4) {
        e6 ? ve2.createDevice("/dev", "stdin", e6) : ve2.symlink("/dev/tty", "/dev/stdin"), t4 ? ve2.createDevice("/dev", "stdout", null, t4) : ve2.symlink("/dev/tty", "/dev/stdout"), n4 ? ve2.createDevice("/dev", "stderr", null, n4) : ve2.symlink("/dev/tty1", "/dev/stderr");
        var r5 = ve2.open("/dev/stdin", 0), o4 = ve2.open("/dev/stdout", 1), i5 = ve2.open("/dev/stderr", 1);
        T3(0 === r5.fd, `invalid handle for stdin (${r5.fd})`), T3(1 === o4.fd, `invalid handle for stdout (${o4.fd})`), T3(2 === i5.fd, `invalid handle for stderr (${i5.fd})`);
      }, staticInit() {
        [44].forEach((e6) => {
          ve2.genericErrors[e6] = new ve2.ErrnoError(e6), ve2.genericErrors[e6].stack = "<generic error, no stack>";
        }), ve2.nameTable = new Array(4096), ve2.mount(Ce2, {}, "/"), ve2.createDefaultDirectories(), ve2.createDefaultDevices(), ve2.createSpecialDirectories(), ve2.filesystems = { MEMFS: Ce2 };
      }, init(e6, t4, n4) {
        T3(!ve2.initialized, "FS.init was previously called. If you want to initialize later with custom parameters, remove any earlier calls (note that one is automatically added to the generated code)"), ve2.initialized = true, e6 ??= o3.stdin, t4 ??= o3.stdout, n4 ??= o3.stderr, ve2.createStandardStreams(e6, t4, n4);
      }, quit() {
        ve2.initialized = false, tt2(0);
        for (var e6 = 0; e6 < ve2.streams.length; e6++) {
          var t4 = ve2.streams[e6];
          t4 && ve2.close(t4);
        }
      }, findObject(e6, t4) {
        var n4 = ve2.analyzePath(e6, t4);
        return n4.exists ? n4.object : null;
      }, analyzePath(e6, t4) {
        try {
          e6 = (r5 = ve2.lookupPath(e6, { follow: !t4 })).path;
        } catch (e7) {
        }
        var n4 = { isRoot: false, exists: false, error: 0, name: null, path: null, object: null, parentExists: false, parentPath: null, parentObject: null };
        try {
          var r5 = ve2.lookupPath(e6, { parent: true });
          n4.parentExists = true, n4.parentPath = r5.path, n4.parentObject = r5.node, n4.name = ge2.basename(e6), r5 = ve2.lookupPath(e6, { follow: !t4 }), n4.exists = true, n4.path = r5.path, n4.object = r5.node, n4.name = r5.node.name, n4.isRoot = "/" === r5.path;
        } catch (e7) {
          n4.error = e7.errno;
        }
        return n4;
      }, createPath(e6, t4, n4, r5) {
        e6 = "string" == typeof e6 ? e6 : ve2.getPath(e6);
        for (var o4 = t4.split("/").reverse(); o4.length; ) {
          var i5 = o4.pop();
          if (i5) {
            var a4 = ge2.join2(e6, i5);
            try {
              ve2.mkdir(a4);
            } catch (e7) {
            }
            e6 = a4;
          }
        }
        return a4;
      }, createFile(e6, t4, n4, r5, o4) {
        var i5 = ge2.join2("string" == typeof e6 ? e6 : ve2.getPath(e6), t4), a4 = Oe2(r5, o4);
        return ve2.create(i5, a4);
      }, createDataFile(e6, t4, n4, r5, o4, i5) {
        var a4 = t4;
        e6 && (e6 = "string" == typeof e6 ? e6 : ve2.getPath(e6), a4 = t4 ? ge2.join2(e6, t4) : e6);
        var F3 = Oe2(r5, o4), s4 = ve2.create(a4, F3);
        if (n4) {
          if ("string" == typeof n4) {
            for (var u3 = new Array(n4.length), m3 = 0, l3 = n4.length; m3 < l3; ++m3) u3[m3] = n4.charCodeAt(m3);
            n4 = u3;
          }
          ve2.chmod(s4, 146 | F3);
          var d3 = ve2.open(s4, 577);
          ve2.write(d3, n4, 0, n4.length, 0, i5), ve2.close(d3), ve2.chmod(s4, F3);
        }
      }, createDevice(e6, t4, n4, r5) {
        var o4 = ge2.join2("string" == typeof e6 ? e6 : ve2.getPath(e6), t4), i5 = Oe2(!!n4, !!r5);
        ve2.createDevice.major ??= 64;
        var a4 = ve2.makedev(ve2.createDevice.major++, 0);
        return ve2.registerDevice(a4, { open(e7) {
          e7.seekable = false;
        }, close(e7) {
          r5?.buffer?.length && r5(10);
        }, read(e7, t5, r6, o5, i6) {
          for (var a5 = 0, F3 = 0; F3 < o5; F3++) {
            var s4;
            try {
              s4 = n4();
            } catch (e8) {
              throw new ve2.ErrnoError(29);
            }
            if (void 0 === s4 && 0 === a5) throw new ve2.ErrnoError(6);
            if (null == s4) break;
            a5++, t5[r6 + F3] = s4;
          }
          return a5 && (e7.node.timestamp = Date.now()), a5;
        }, write(e7, t5, n5, o5, i6) {
          for (var a5 = 0; a5 < o5; a5++) try {
            r5(t5[n5 + a5]);
          } catch (e8) {
            throw new ve2.ErrnoError(29);
          }
          return o5 && (e7.node.timestamp = Date.now()), a5;
        } }), ve2.mkdev(o4, i5, a4);
      }, forceLoadFile(e6) {
        if (e6.isDevice || e6.isFolder || e6.link || e6.contents) return true;
        if ("undefined" != typeof XMLHttpRequest) throw new Error("Lazy loading should have been performed (contents set) in createLazyFile, but it was not. Lazy loading only works in web workers. Use --embed-file or --preload-file in emcc on the main thread.");
        try {
          e6.contents = u2(e6.url), e6.usedBytes = e6.contents.length;
        } catch (e7) {
          throw new ve2.ErrnoError(29);
        }
      }, createLazyFile(e6, t4, n4, r5, o4) {
        class i5 {
          constructor() {
            this.lengthKnown = false, this.chunks = [];
          }
          get(e7) {
            if (!(e7 > this.length - 1 || e7 < 0)) {
              var t5 = e7 % this.chunkSize, n5 = e7 / this.chunkSize | 0;
              return this.getter(n5)[t5];
            }
          }
          setDataGetter(e7) {
            this.getter = e7;
          }
          cacheLength() {
            var e7 = new XMLHttpRequest();
            if (e7.open("HEAD", n4, false), e7.send(null), !(e7.status >= 200 && e7.status < 300 || 304 === e7.status)) throw new Error("Couldn't load " + n4 + ". Status: " + e7.status);
            var t5, r6 = Number(e7.getResponseHeader("Content-length")), o5 = (t5 = e7.getResponseHeader("Accept-Ranges")) && "bytes" === t5, i6 = (t5 = e7.getResponseHeader("Content-Encoding")) && "gzip" === t5, a5 = 1048576;
            o5 || (a5 = r6);
            var F3 = this;
            F3.setDataGetter((e8) => {
              var t6 = e8 * a5, o6 = (e8 + 1) * a5 - 1;
              if (o6 = Math.min(o6, r6 - 1), void 0 === F3.chunks[e8] && (F3.chunks[e8] = ((e9, t7) => {
                if (e9 > t7) throw new Error("invalid range (" + e9 + ", " + t7 + ") or no bytes requested!");
                if (t7 > r6 - 1) throw new Error("only " + r6 + " bytes available! programmer error!");
                var o7 = new XMLHttpRequest();
                if (o7.open("GET", n4, false), r6 !== a5 && o7.setRequestHeader("Range", "bytes=" + e9 + "-" + t7), o7.responseType = "arraybuffer", o7.overrideMimeType && o7.overrideMimeType("text/plain; charset=x-user-defined"), o7.send(null), !(o7.status >= 200 && o7.status < 300 || 304 === o7.status)) throw new Error("Couldn't load " + n4 + ". Status: " + o7.status);
                return void 0 !== o7.response ? new Uint8Array(o7.response || []) : Ae2(o7.responseText || "", true);
              })(t6, o6)), void 0 === F3.chunks[e8]) throw new Error("doXHR failed!");
              return F3.chunks[e8];
            }), !i6 && r6 || (a5 = r6 = 1, r6 = this.getter(0).length, a5 = r6, c2("LazyFiles on gzip forces download of the whole file when length is accessed")), this._length = r6, this._chunkSize = a5, this.lengthKnown = true;
          }
          get length() {
            return this.lengthKnown || this.cacheLength(), this._length;
          }
          get chunkSize() {
            return this.lengthKnown || this.cacheLength(), this._chunkSize;
          }
        }
        if ("undefined" != typeof XMLHttpRequest) {
          if (!F2) throw "Cannot do synchronous binary XHRs outside webworkers in modern browsers. Use --embed-file or --preload-file in emcc";
          var a4 = { isDevice: false, contents: new i5() };
        } else a4 = { isDevice: false, url: n4 };
        var s4 = ve2.createFile(e6, t4, a4, r5, o4);
        a4.contents ? s4.contents = a4.contents : a4.url && (s4.contents = null, s4.url = a4.url), Object.defineProperties(s4, { usedBytes: { get: function() {
          return this.contents.length;
        } } });
        var u3 = {};
        function m3(e7, t5, n5, r6, o5) {
          var i6 = e7.node.contents;
          if (o5 >= i6.length) return 0;
          var a5 = Math.min(i6.length - o5, r6);
          if (T3(a5 >= 0), i6.slice) for (var F3 = 0; F3 < a5; F3++) t5[n5 + F3] = i6[o5 + F3];
          else for (F3 = 0; F3 < a5; F3++) t5[n5 + F3] = i6.get(o5 + F3);
          return a5;
        }
        return Object.keys(s4.stream_ops).forEach((e7) => {
          var t5 = s4.stream_ops[e7];
          u3[e7] = (...e8) => (ve2.forceLoadFile(s4), t5(...e8));
        }), u3.read = (e7, t5, n5, r6, o5) => (ve2.forceLoadFile(s4), m3(e7, t5, n5, r6, o5)), u3.mmap = (e7, t5, n5, r6, o5) => {
          ve2.forceLoadFile(s4);
          var i6 = ye2(t5);
          if (!i6) throw new ve2.ErrnoError(48);
          return m3(e7, b2, i6, t5, n5), { ptr: i6, allocated: true };
        }, s4.stream_ops = u3, s4;
      }, absolutePath() {
        H2("FS.absolutePath has been removed; use PATH_FS.resolve instead");
      }, createFolder() {
        H2("FS.createFolder has been removed; use FS.mkdir instead");
      }, createLink() {
        H2("FS.createLink has been removed; use FS.symlink instead");
      }, joinPath() {
        H2("FS.joinPath has been removed; use PATH.join instead");
      }, mmapAlloc() {
        H2("FS.mmapAlloc has been replaced by the top level function mmapAlloc");
      }, standardizePath() {
        H2("FS.standardizePath has been removed; use PATH.normalize instead");
      } }, we2 = { DEFAULT_POLLMASK: 5, calculateAt(e6, t4, n4) {
        if (ge2.isAbs(t4)) return t4;
        var r5;
        if (r5 = -100 === e6 ? ve2.cwd() : we2.getStreamFromFD(e6).path, 0 == t4.length) {
          if (!n4) throw new ve2.ErrnoError(44);
          return r5;
        }
        return ge2.join2(r5, t4);
      }, doStat(e6, t4, n4) {
        var r5 = e6(t4);
        G2[n4 >> 2] = r5.dev, G2[n4 + 4 >> 2] = r5.mode, E2[n4 + 8 >> 2] = r5.nlink, G2[n4 + 12 >> 2] = r5.uid, G2[n4 + 16 >> 2] = r5.gid, G2[n4 + 20 >> 2] = r5.rdev, K2 = [r5.size >>> 0, (X2 = r5.size, +Math.abs(X2) >= 1 ? X2 > 0 ? +Math.floor(X2 / 4294967296) >>> 0 : ~~+Math.ceil((X2 - +(~~X2 >>> 0)) / 4294967296) >>> 0 : 0)], G2[n4 + 24 >> 2] = K2[0], G2[n4 + 28 >> 2] = K2[1], G2[n4 + 32 >> 2] = 4096, G2[n4 + 36 >> 2] = r5.blocks;
        var o4 = r5.atime.getTime(), i5 = r5.mtime.getTime(), a4 = r5.ctime.getTime();
        return K2 = [Math.floor(o4 / 1e3) >>> 0, (X2 = Math.floor(o4 / 1e3), +Math.abs(X2) >= 1 ? X2 > 0 ? +Math.floor(X2 / 4294967296) >>> 0 : ~~+Math.ceil((X2 - +(~~X2 >>> 0)) / 4294967296) >>> 0 : 0)], G2[n4 + 40 >> 2] = K2[0], G2[n4 + 44 >> 2] = K2[1], E2[n4 + 48 >> 2] = o4 % 1e3 * 1e3 * 1e3, K2 = [Math.floor(i5 / 1e3) >>> 0, (X2 = Math.floor(i5 / 1e3), +Math.abs(X2) >= 1 ? X2 > 0 ? +Math.floor(X2 / 4294967296) >>> 0 : ~~+Math.ceil((X2 - +(~~X2 >>> 0)) / 4294967296) >>> 0 : 0)], G2[n4 + 56 >> 2] = K2[0], G2[n4 + 60 >> 2] = K2[1], E2[n4 + 64 >> 2] = i5 % 1e3 * 1e3 * 1e3, K2 = [Math.floor(a4 / 1e3) >>> 0, (X2 = Math.floor(a4 / 1e3), +Math.abs(X2) >= 1 ? X2 > 0 ? +Math.floor(X2 / 4294967296) >>> 0 : ~~+Math.ceil((X2 - +(~~X2 >>> 0)) / 4294967296) >>> 0 : 0)], G2[n4 + 72 >> 2] = K2[0], G2[n4 + 76 >> 2] = K2[1], E2[n4 + 80 >> 2] = a4 % 1e3 * 1e3 * 1e3, K2 = [r5.ino >>> 0, (X2 = r5.ino, +Math.abs(X2) >= 1 ? X2 > 0 ? +Math.floor(X2 / 4294967296) >>> 0 : ~~+Math.ceil((X2 - +(~~X2 >>> 0)) / 4294967296) >>> 0 : 0)], G2[n4 + 88 >> 2] = K2[0], G2[n4 + 92 >> 2] = K2[1], 0;
      }, doMsync(e6, t4, n4, r5, o4) {
        if (!ve2.isFile(t4.node.mode)) throw new ve2.ErrnoError(43);
        if (2 & r5) return 0;
        var i5 = p2.slice(e6, e6 + n4);
        ve2.msync(t4, i5, o4, n4, r5);
      }, getStreamFromFD: (e6) => ve2.getStreamChecked(e6), varargs: void 0, getStr: (e6) => _e2(e6) }, Re2 = (e6, t4) => (T3(e6 == e6 >>> 0 || e6 == (0 | e6)), T3(t4 === (0 | t4)), t4 + 2097152 >>> 0 < 4194305 - !!e6 ? (e6 >>> 0) + 4294967296 * t4 : NaN), Ie2 = (e6, t4, n4) => (T3("number" == typeof n4, "stringToUTF8(str, outPtr, maxBytesToWrite) is missing the third parameter that specifies the length of the output buffer!"), fe2(e6, p2, t4, n4)), ke2 = [0, 31, 60, 91, 121, 152, 182, 213, 244, 274, 305, 335], je2 = [0, 31, 59, 90, 120, 151, 181, 212, 243, 273, 304, 334], Be2 = (e6) => {
        var t4 = h2.buffer, n4 = (e6 - t4.byteLength + 65535) / 65536 | 0;
        try {
          return h2.grow(n4), O3(), 1;
        } catch (n5) {
          g2(`growMemory: Attempted to grow heap from ${t4.byteLength} bytes to ${e6} bytes, but got error: ${n5}`);
        }
      }, Le2 = {}, Ne2 = () => {
        if (!Ne2.strings) {
          var e6 = { USER: "web_user", LOGNAME: "web_user", PATH: "/", PWD: "/", HOME: "/home/web_user", LANG: ("object" == typeof navigator && navigator.languages && navigator.languages[0] || "C").replace("-", "_") + ".UTF-8", _: d2 || "./this.program" };
          for (var t4 in Le2) void 0 === Le2[t4] ? delete e6[t4] : e6[t4] = Le2[t4];
          var n4 = [];
          for (var t4 in e6) n4.push(`${t4}=${e6[t4]}`);
          Ne2.strings = n4;
        }
        return Ne2.strings;
      }, Ve2 = [], Ue2 = (e6) => {
        var t4 = Ve2[e6];
        return t4 || (e6 >= Ve2.length && (Ve2.length = e6 + 1), Ve2[e6] = t4 = Ge2.get(e6)), T3(Ge2.get(e6) == t4, "JavaScript-side Wasm function table mirror is out of date!"), t4;
      }, We2 = "undefined" != typeof TextDecoder ? new TextDecoder("utf-16le") : void 0, ze2 = (e6, t4) => {
        T3(e6 < 16384), e6 < 128 ? t4.push(e6) : t4.push(e6 % 128 | 128, e6 >> 7);
      }, He2 = (e6, t4) => {
        if (T3(!t4.includes("j"), "i64 not permitted in function signatures when WASM_BIGINT is disabled"), "function" == typeof WebAssembly.Function) return new WebAssembly.Function(((e7) => {
          T3(!e7.includes("j"), "i64 not permitted in function signatures when WASM_BIGINT is disabled");
          for (var t5 = { i: "i32", j: "i64", f: "f32", d: "f64", e: "externref", p: "i32" }, n5 = { parameters: [], results: "v" == e7[0] ? [] : [t5[e7[0]]] }, r6 = 1; r6 < e7.length; ++r6) T3(e7[r6] in t5, "invalid signature char: " + e7[r6]), n5.parameters.push(t5[e7[r6]]);
          return n5;
        })(t4), e6);
        var n4 = [1];
        ((e7, t5) => {
          var n5 = e7.slice(0, 1), r6 = e7.slice(1), o5 = { i: 127, p: 127, j: 126, f: 125, d: 124, e: 111 };
          t5.push(96), ze2(r6.length, t5);
          for (var i5 = 0; i5 < r6.length; ++i5) T3(r6[i5] in o5, "invalid signature char: " + r6[i5]), t5.push(o5[r6[i5]]);
          "v" == n5 ? t5.push(0) : t5.push(1, o5[n5]);
        })(t4, n4);
        var r5 = [0, 97, 115, 109, 1, 0, 0, 0, 1];
        ze2(n4.length, r5), r5.push(...n4), r5.push(2, 7, 1, 1, 101, 1, 102, 0, 0, 7, 5, 1, 1, 102, 0, 0);
        var o4 = new WebAssembly.Module(new Uint8Array(r5));
        return new WebAssembly.Instance(o4, { e: { f: e6 } }).exports.f;
      }, $e2 = (e6) => (Ee2 || (Ee2 = /* @__PURE__ */ new WeakMap(), ((e7, t4) => {
        if (Ee2) for (var n4 = e7; n4 < e7 + t4; n4++) {
          var r5 = Ue2(n4);
          r5 && Ee2.set(r5, n4);
        }
      })(0, Ge2.length)), Ee2.get(e6) || 0), Xe2 = [], Ke2 = (e6, t4) => {
        Ge2.set(e6, t4), Ve2[e6] = Ge2.get(e6);
      }, Ye2 = (e6) => st2(e6), Je2 = (e6, t4, n4, r5, i5) => {
        var a4 = { string: (e7) => {
          var t5 = 0;
          return null != e7 && 0 !== e7 && (t5 = ((e8) => {
            var t6 = pe2(e8) + 1, n5 = Ye2(t6);
            return Ie2(e8, n5, t6), n5;
          })(e7)), t5;
        }, array: (e7) => {
          var t5, n5, r6 = Ye2(e7.length);
          return n5 = r6, T3((t5 = e7).length >= 0, "writeArrayToMemory array must have a length (should be an array or typed array)"), b2.set(t5, n5), r6;
        } }, F3 = ((e7) => {
          var t5 = o3["_" + e7];
          return T3(t5, "Cannot call unknown function " + e7 + ", make sure it is exported"), t5;
        })(e6), s4 = [], u3 = 0;
        if (T3("array" !== t4, 'Return type should not be "array".'), r5) for (var m3 = 0; m3 < r5.length; m3++) {
          var l3 = a4[n4[m3]];
          l3 ? (0 === u3 && (u3 = ue2()), s4[m3] = l3(r5[m3])) : s4[m3] = r5[m3];
        }
        var d3 = F3(...s4);
        return d3 = function(e7) {
          return 0 !== u3 && se2(u3), function(e8) {
            return "string" === t4 ? _e2(e8) : "boolean" === t4 ? Boolean(e8) : e8;
          }(e7);
        }(d3);
      };
      ve2.createPreloadedFile = (e6, t4, n4, r5, o4, i5, a4, F3, u3, m3) => {
        var l3 = t4 ? De2.resolve(ge2.join2(e6, t4)) : e6, d3 = U3(`cp ${l3}`);
        function _3(n5) {
          function s4(n6) {
            m3?.(), F3 || ((e7, t5, n7, r6, o5, i6) => {
              ve2.createDataFile(e7, t5, n7, r6, o5, i6);
            })(e6, t4, n6, r5, o4, u3), i5?.(), z3(d3);
          }
          ((e7, t5, n6, r6) => {
            "undefined" != typeof Browser && Browser.init();
            var o5 = false;
            return Te2.forEach((i6) => {
              o5 || i6.canHandle(t5) && (i6.handle(e7, t5, n6, r6), o5 = true);
            }), o5;
          })(n5, l3, s4, () => {
            a4?.(), z3(d3);
          }) || s4(n5);
        }
        W3(d3), "string" == typeof n4 ? ((e7, t5, n5, r6) => {
          var o5 = r6 ? "" : U3(`al ${e7}`);
          s3(e7).then((n6) => {
            T3(n6, `Loading data file "${e7}" failed (no arrayBuffer).`), t5(new Uint8Array(n6)), o5 && z3(o5);
          }, (t6) => {
            if (!n5) throw `Loading data file "${e7}" failed.`;
            n5();
          }), o5 && W3(o5);
        })(n4, _3, a4) : _3(n4);
      }, ve2.staticInit();
      var qe2 = { __assert_fail: (e6, t4, n4, r5) => {
        H2(`Assertion failed: ${_e2(e6)}, at: ` + [t4 ? _e2(t4) : "unknown filename", n4, r5 ? _e2(r5) : "unknown function"]);
      }, __syscall_fcntl64: function(e6, t4, n4) {
        we2.varargs = n4;
        try {
          var r5 = we2.getStreamFromFD(e6);
          switch (t4) {
            case 0:
              if ((o4 = Pe2()) < 0) return -28;
              for (; ve2.streams[o4]; ) o4++;
              return ve2.dupStream(r5, o4).fd;
            case 1:
            case 2:
            case 13:
            case 14:
              return 0;
            case 3:
              return r5.flags;
            case 4:
              var o4 = Pe2();
              return r5.flags |= o4, 0;
            case 12:
              return o4 = ce2(), f2[o4 + 0 >> 1] = 2, 0;
          }
          return -28;
        } catch (e7) {
          if (void 0 === ve2 || "ErrnoError" !== e7.name) throw e7;
          return -e7.errno;
        }
      }, __syscall_fstat64: function(e6, t4) {
        try {
          var n4 = we2.getStreamFromFD(e6);
          return we2.doStat(ve2.stat, n4.path, t4);
        } catch (e7) {
          if (void 0 === ve2 || "ErrnoError" !== e7.name) throw e7;
          return -e7.errno;
        }
      }, __syscall_ftruncate64: function(e6, t4, n4) {
        var r5 = Re2(t4, n4);
        try {
          return isNaN(r5) ? 61 : (ve2.ftruncate(e6, r5), 0);
        } catch (e7) {
          if (void 0 === ve2 || "ErrnoError" !== e7.name) throw e7;
          return -e7.errno;
        }
      }, __syscall_getdents64: function(e6, t4, n4) {
        try {
          var r5 = we2.getStreamFromFD(e6);
          r5.getdents ||= ve2.readdir(r5.path);
          for (var o4 = 280, i5 = 0, a4 = ve2.llseek(r5, 0, 1), F3 = Math.floor(a4 / o4); F3 < r5.getdents.length && i5 + o4 <= n4; ) {
            var s4, u3, m3 = r5.getdents[F3];
            if ("." === m3) s4 = r5.node.id, u3 = 4;
            else if (".." === m3) s4 = ve2.lookupPath(r5.path, { parent: true }).node.id, u3 = 4;
            else {
              var l3 = ve2.lookupNode(r5.node, m3);
              s4 = l3.id, u3 = ve2.isChrdev(l3.mode) ? 2 : ve2.isDir(l3.mode) ? 4 : ve2.isLink(l3.mode) ? 10 : 8;
            }
            T3(s4), K2 = [s4 >>> 0, (X2 = s4, +Math.abs(X2) >= 1 ? X2 > 0 ? +Math.floor(X2 / 4294967296) >>> 0 : ~~+Math.ceil((X2 - +(~~X2 >>> 0)) / 4294967296) >>> 0 : 0)], G2[t4 + i5 >> 2] = K2[0], G2[t4 + i5 + 4 >> 2] = K2[1], K2 = [(F3 + 1) * o4 >>> 0, (X2 = (F3 + 1) * o4, +Math.abs(X2) >= 1 ? X2 > 0 ? +Math.floor(X2 / 4294967296) >>> 0 : ~~+Math.ceil((X2 - +(~~X2 >>> 0)) / 4294967296) >>> 0 : 0)], G2[t4 + i5 + 8 >> 2] = K2[0], G2[t4 + i5 + 12 >> 2] = K2[1], f2[t4 + i5 + 16 >> 1] = 280, b2[t4 + i5 + 18] = u3, Ie2(m3, t4 + i5 + 19, 256), i5 += o4, F3 += 1;
          }
          return ve2.llseek(r5, F3 * o4, 0), i5;
        } catch (e7) {
          if (void 0 === ve2 || "ErrnoError" !== e7.name) throw e7;
          return -e7.errno;
        }
      }, __syscall_ioctl: function(e6, t4, n4) {
        we2.varargs = n4;
        try {
          var r5 = we2.getStreamFromFD(e6);
          switch (t4) {
            case 21509:
            case 21510:
            case 21511:
            case 21512:
            case 21524:
            case 21515:
              return r5.tty ? 0 : -59;
            case 21505:
              if (!r5.tty) return -59;
              if (r5.tty.ops.ioctl_tcgets) {
                var o4 = r5.tty.ops.ioctl_tcgets(r5), i5 = ce2();
                G2[i5 >> 2] = o4.c_iflag || 0, G2[i5 + 4 >> 2] = o4.c_oflag || 0, G2[i5 + 8 >> 2] = o4.c_cflag || 0, G2[i5 + 12 >> 2] = o4.c_lflag || 0;
                for (var a4 = 0; a4 < 32; a4++) b2[i5 + a4 + 17] = o4.c_cc[a4] || 0;
                return 0;
              }
              return 0;
            case 21506:
            case 21507:
            case 21508:
              if (!r5.tty) return -59;
              if (r5.tty.ops.ioctl_tcsets) {
                i5 = ce2();
                var F3 = G2[i5 >> 2], s4 = G2[i5 + 4 >> 2], u3 = G2[i5 + 8 >> 2], m3 = G2[i5 + 12 >> 2], l3 = [];
                for (a4 = 0; a4 < 32; a4++) l3.push(b2[i5 + a4 + 17]);
                return r5.tty.ops.ioctl_tcsets(r5.tty, t4, { c_iflag: F3, c_oflag: s4, c_cflag: u3, c_lflag: m3, c_cc: l3 });
              }
              return 0;
            case 21519:
              return r5.tty ? (i5 = ce2(), G2[i5 >> 2] = 0, 0) : -59;
            case 21520:
              return r5.tty ? -28 : -59;
            case 21531:
              return i5 = ce2(), ve2.ioctl(r5, t4, i5);
            case 21523:
              if (!r5.tty) return -59;
              if (r5.tty.ops.ioctl_tiocgwinsz) {
                var d3 = r5.tty.ops.ioctl_tiocgwinsz(r5.tty);
                i5 = ce2(), f2[i5 >> 1] = d3[0], f2[i5 + 2 >> 1] = d3[1];
              }
              return 0;
            default:
              return -28;
          }
        } catch (e7) {
          if (void 0 === ve2 || "ErrnoError" !== e7.name) throw e7;
          return -e7.errno;
        }
      }, __syscall_lstat64: function(e6, t4) {
        try {
          return e6 = we2.getStr(e6), we2.doStat(ve2.lstat, e6, t4);
        } catch (e7) {
          if (void 0 === ve2 || "ErrnoError" !== e7.name) throw e7;
          return -e7.errno;
        }
      }, __syscall_newfstatat: function(e6, t4, n4, r5) {
        try {
          t4 = we2.getStr(t4);
          var o4 = 256 & r5, i5 = 4096 & r5;
          return T3(!(r5 &= -6401), `unknown flags in __syscall_newfstatat: ${r5}`), t4 = we2.calculateAt(e6, t4, i5), we2.doStat(o4 ? ve2.lstat : ve2.stat, t4, n4);
        } catch (e7) {
          if (void 0 === ve2 || "ErrnoError" !== e7.name) throw e7;
          return -e7.errno;
        }
      }, __syscall_openat: function(e6, t4, n4, r5) {
        we2.varargs = r5;
        try {
          t4 = we2.getStr(t4), t4 = we2.calculateAt(e6, t4);
          var o4 = r5 ? Pe2() : 0;
          return ve2.open(t4, n4, o4).fd;
        } catch (e7) {
          if (void 0 === ve2 || "ErrnoError" !== e7.name) throw e7;
          return -e7.errno;
        }
      }, __syscall_rmdir: function(e6) {
        try {
          return e6 = we2.getStr(e6), ve2.rmdir(e6), 0;
        } catch (e7) {
          if (void 0 === ve2 || "ErrnoError" !== e7.name) throw e7;
          return -e7.errno;
        }
      }, __syscall_stat64: function(e6, t4) {
        try {
          return e6 = we2.getStr(e6), we2.doStat(ve2.stat, e6, t4);
        } catch (e7) {
          if (void 0 === ve2 || "ErrnoError" !== e7.name) throw e7;
          return -e7.errno;
        }
      }, __syscall_unlinkat: function(e6, t4, n4) {
        try {
          return t4 = we2.getStr(t4), t4 = we2.calculateAt(e6, t4), 0 === n4 ? ve2.unlink(t4) : 512 === n4 ? ve2.rmdir(t4) : H2("Invalid flags passed to unlinkat"), 0;
        } catch (e7) {
          if (void 0 === ve2 || "ErrnoError" !== e7.name) throw e7;
          return -e7.errno;
        }
      }, _abort_js: () => {
        H2("native code called abort()");
      }, _emscripten_memcpy_js: (e6, t4, n4) => p2.copyWithin(e6, t4, t4 + n4), _emscripten_throw_longjmp: () => {
        throw 1 / 0;
      }, _gmtime_js: function(e6, t4, n4) {
        var r5 = Re2(e6, t4), o4 = new Date(1e3 * r5);
        G2[n4 >> 2] = o4.getUTCSeconds(), G2[n4 + 4 >> 2] = o4.getUTCMinutes(), G2[n4 + 8 >> 2] = o4.getUTCHours(), G2[n4 + 12 >> 2] = o4.getUTCDate(), G2[n4 + 16 >> 2] = o4.getUTCMonth(), G2[n4 + 20 >> 2] = o4.getUTCFullYear() - 1900, G2[n4 + 24 >> 2] = o4.getUTCDay();
        var i5 = Date.UTC(o4.getUTCFullYear(), 0, 1, 0, 0, 0, 0), a4 = (o4.getTime() - i5) / 864e5 | 0;
        G2[n4 + 28 >> 2] = a4;
      }, _localtime_js: function(e6, t4, n4) {
        var r5 = Re2(e6, t4), o4 = new Date(1e3 * r5);
        G2[n4 >> 2] = o4.getSeconds(), G2[n4 + 4 >> 2] = o4.getMinutes(), G2[n4 + 8 >> 2] = o4.getHours(), G2[n4 + 12 >> 2] = o4.getDate(), G2[n4 + 16 >> 2] = o4.getMonth(), G2[n4 + 20 >> 2] = o4.getFullYear() - 1900, G2[n4 + 24 >> 2] = o4.getDay();
        var i5 = 0 | ((e7) => {
          var t5;
          return ((t5 = e7.getFullYear()) % 4 != 0 || t5 % 100 == 0 && t5 % 400 != 0 ? je2 : ke2)[e7.getMonth()] + e7.getDate() - 1;
        })(o4);
        G2[n4 + 28 >> 2] = i5, G2[n4 + 36 >> 2] = -60 * o4.getTimezoneOffset();
        var a4 = new Date(o4.getFullYear(), 0, 1), F3 = new Date(o4.getFullYear(), 6, 1).getTimezoneOffset(), s4 = a4.getTimezoneOffset(), u3 = 0 | (F3 != s4 && o4.getTimezoneOffset() == Math.min(s4, F3));
        G2[n4 + 32 >> 2] = u3;
      }, _tzset_js: (e6, t4, n4, r5) => {
        var o4 = (/* @__PURE__ */ new Date()).getFullYear(), i5 = new Date(o4, 0, 1), a4 = new Date(o4, 6, 1), F3 = i5.getTimezoneOffset(), s4 = a4.getTimezoneOffset(), u3 = Math.max(F3, s4);
        E2[e6 >> 2] = 60 * u3, G2[t4 >> 2] = Number(F3 != s4);
        var m3 = (e7) => {
          var t5 = e7 >= 0 ? "-" : "+", n5 = Math.abs(e7);
          return `UTC${t5}${String(Math.floor(n5 / 60)).padStart(2, "0")}${String(n5 % 60).padStart(2, "0")}`;
        }, l3 = m3(F3), d3 = m3(s4);
        T3(l3), T3(d3), T3(pe2(l3) <= 16, `timezone name truncated to fit in TZNAME_MAX (${l3})`), T3(pe2(d3) <= 16, `timezone name truncated to fit in TZNAME_MAX (${d3})`), s4 < F3 ? (Ie2(l3, n4, 17), Ie2(d3, r5, 17)) : (Ie2(l3, r5, 17), Ie2(d3, n4, 17));
      }, emscripten_date_now: () => Date.now(), emscripten_resize_heap: (e6) => {
        var t4 = p2.length;
        T3((e6 >>>= 0) > t4);
        var n4 = 2147483648;
        if (e6 > n4) return g2(`Cannot enlarge memory, requested ${e6} bytes, but the limit is 2147483648 bytes!`), false;
        for (var r5 = 1; r5 <= 4; r5 *= 2) {
          var o4 = t4 * (1 + 0.2 / r5);
          o4 = Math.min(o4, e6 + 100663296);
          var i5 = Math.min(n4, Me2(Math.max(e6, o4), 65536));
          if (Be2(i5)) return true;
        }
        return g2(`Failed to grow the heap from ${t4} bytes to ${i5} bytes, not enough memory!`), false;
      }, environ_get: (e6, t4) => {
        var n4 = 0;
        return Ne2().forEach((r5, o4) => {
          var i5 = t4 + n4;
          E2[e6 + 4 * o4 >> 2] = i5, ((e7, t5) => {
            for (var n5 = 0; n5 < e7.length; ++n5) T3(e7.charCodeAt(n5) === (255 & e7.charCodeAt(n5))), b2[t5++] = e7.charCodeAt(n5);
            b2[t5] = 0;
          })(r5, i5), n4 += r5.length + 1;
        }), 0;
      }, environ_sizes_get: (e6, t4) => {
        var n4 = Ne2();
        E2[e6 >> 2] = n4.length;
        var r5 = 0;
        return n4.forEach((e7) => r5 += e7.length + 1), E2[t4 >> 2] = r5, 0;
      }, fd_close: function(e6) {
        try {
          var t4 = we2.getStreamFromFD(e6);
          return ve2.close(t4), 0;
        } catch (e7) {
          if (void 0 === ve2 || "ErrnoError" !== e7.name) throw e7;
          return e7.errno;
        }
      }, fd_read: function(e6, t4, n4, r5) {
        try {
          var o4 = ((e7, t5, n5, r6) => {
            for (var o5 = 0, i5 = 0; i5 < n5; i5++) {
              var a4 = E2[t5 >> 2], F3 = E2[t5 + 4 >> 2];
              t5 += 8;
              var s4 = ve2.read(e7, b2, a4, F3, r6);
              if (s4 < 0) return -1;
              if (o5 += s4, s4 < F3) break;
              void 0 !== r6 && (r6 += s4);
            }
            return o5;
          })(we2.getStreamFromFD(e6), t4, n4);
          return E2[r5 >> 2] = o4, 0;
        } catch (e7) {
          if (void 0 === ve2 || "ErrnoError" !== e7.name) throw e7;
          return e7.errno;
        }
      }, fd_seek: function(e6, t4, n4, r5, o4) {
        var i5 = Re2(t4, n4);
        try {
          if (isNaN(i5)) return 61;
          var a4 = we2.getStreamFromFD(e6);
          return ve2.llseek(a4, i5, r5), K2 = [a4.position >>> 0, (X2 = a4.position, +Math.abs(X2) >= 1 ? X2 > 0 ? +Math.floor(X2 / 4294967296) >>> 0 : ~~+Math.ceil((X2 - +(~~X2 >>> 0)) / 4294967296) >>> 0 : 0)], G2[o4 >> 2] = K2[0], G2[o4 + 4 >> 2] = K2[1], a4.getdents && 0 === i5 && 0 === r5 && (a4.getdents = null), 0;
        } catch (e7) {
          if (void 0 === ve2 || "ErrnoError" !== e7.name) throw e7;
          return e7.errno;
        }
      }, fd_sync: function(e6) {
        try {
          var t4 = we2.getStreamFromFD(e6);
          return t4.stream_ops?.fsync ? t4.stream_ops.fsync(t4) : 0;
        } catch (e7) {
          if (void 0 === ve2 || "ErrnoError" !== e7.name) throw e7;
          return e7.errno;
        }
      }, fd_write: function(e6, t4, n4, r5) {
        try {
          var o4 = ((e7, t5, n5, r6) => {
            for (var o5 = 0, i5 = 0; i5 < n5; i5++) {
              var a4 = E2[t5 >> 2], F3 = E2[t5 + 4 >> 2];
              t5 += 8;
              var s4 = ve2.write(e7, b2, a4, F3, r6);
              if (s4 < 0) return -1;
              if (o5 += s4, s4 < F3) break;
              void 0 !== r6 && (r6 += s4);
            }
            return o5;
          })(we2.getStreamFromFD(e6), t4, n4);
          return E2[r5 >> 2] = o4, 0;
        } catch (e7) {
          if (void 0 === ve2 || "ErrnoError" !== e7.name) throw e7;
          return e7.errno;
        }
      }, invoke_ii: function(e6, t4) {
        var n4 = ue2();
        try {
          return Ue2(e6)(t4);
        } catch (e7) {
          if (se2(n4), e7 !== e7 + 0) throw e7;
          ot2(1, 0);
        }
      }, invoke_iii: function(e6, t4, n4) {
        var r5 = ue2();
        try {
          return Ue2(e6)(t4, n4);
        } catch (e7) {
          if (se2(r5), e7 !== e7 + 0) throw e7;
          ot2(1, 0);
        }
      }, invoke_iiii: function(e6, t4, n4, r5) {
        var o4 = ue2();
        try {
          return Ue2(e6)(t4, n4, r5);
        } catch (e7) {
          if (se2(o4), e7 !== e7 + 0) throw e7;
          ot2(1, 0);
        }
      }, invoke_iiiii: function(e6, t4, n4, r5, o4) {
        var i5 = ue2();
        try {
          return Ue2(e6)(t4, n4, r5, o4);
        } catch (e7) {
          if (se2(i5), e7 !== e7 + 0) throw e7;
          ot2(1, 0);
        }
      }, invoke_v: function(e6) {
        var t4 = ue2();
        try {
          Ue2(e6)();
        } catch (e7) {
          if (se2(t4), e7 !== e7 + 0) throw e7;
          ot2(1, 0);
        }
      }, invoke_viii: function(e6, t4, n4, r5) {
        var o4 = ue2();
        try {
          Ue2(e6)(t4, n4, r5);
        } catch (e7) {
          if (se2(o4), e7 !== e7 + 0) throw e7;
          ot2(1, 0);
        }
      }, invoke_viiii: function(e6, t4, n4, r5, o4) {
        var i5 = ue2();
        try {
          Ue2(e6)(t4, n4, r5, o4);
        } catch (e7) {
          if (se2(i5), e7 !== e7 + 0) throw e7;
          ot2(1, 0);
        }
      } }, Qe2 = function() {
        var e6 = { env: qe2, wasi_snapshot_preview1: qe2 };
        function t4(e7, t5) {
          var n5;
          return Qe2 = e7.exports, o3.wasmExports = Qe2, T3(h2 = Qe2.memory, "memory not found in wasm exports"), O3(), T3(Ge2 = Qe2.__indirect_function_table, "table not found in wasm exports"), n5 = Qe2.__wasm_call_ctors, w3.unshift(n5), z3("wasm-instantiate"), Qe2;
        }
        W3("wasm-instantiate");
        var n4, i5, a4, F3, s4 = o3;
        if (o3.instantiateWasm) try {
          return o3.instantiateWasm(e6, t4);
        } catch (e7) {
          g2(`Module.instantiateWasm callback failed with error: ${e7}`), r4(e7);
        }
        return $2 ??= Q2(), (n4 = D2, i5 = $2, a4 = e6, F3 = function(e7) {
          T3(o3 === s4, "the Module object should not be replaced during async compilation - perhaps the order of HTML elements is wrong?"), s4 = null, t4(e7.instance);
        }, n4 || "function" != typeof WebAssembly.instantiateStreaming || Y2(i5) || "function" != typeof fetch ? ee2(i5, a4, F3) : fetch(i5, { credentials: "same-origin" }).then((e7) => WebAssembly.instantiateStreaming(e7, a4).then(F3, function(e8) {
          return g2(`wasm streaming compile failed: ${e8}`), g2("falling back to ArrayBuffer instantiation"), ee2(i5, a4, F3);
        }))).catch(r4), {};
      }();
      o3._PDFiumExt_Init = q2("PDFiumExt_Init", 0), o3._FPDF_InitLibraryWithConfig = q2("FPDF_InitLibraryWithConfig", 1), o3._PDFiumExt_OpenFileWriter = q2("PDFiumExt_OpenFileWriter", 0), o3._PDFiumExt_GetFileWriterSize = q2("PDFiumExt_GetFileWriterSize", 1), o3._PDFiumExt_GetFileWriterData = q2("PDFiumExt_GetFileWriterData", 3), o3._PDFiumExt_CloseFileWriter = q2("PDFiumExt_CloseFileWriter", 1), o3._PDFiumExt_SaveAsCopy = q2("PDFiumExt_SaveAsCopy", 2), o3._FPDF_SaveAsCopy = q2("FPDF_SaveAsCopy", 3), o3._PDFiumExt_OpenFormFillInfo = q2("PDFiumExt_OpenFormFillInfo", 0), o3._PDFiumExt_CloseFormFillInfo = q2("PDFiumExt_CloseFormFillInfo", 1), o3._PDFiumExt_InitFormFillEnvironment = q2("PDFiumExt_InitFormFillEnvironment", 2), o3._FPDFDOC_InitFormFillEnvironment = q2("FPDFDOC_InitFormFillEnvironment", 2), o3._PDFiumExt_ExitFormFillEnvironment = q2("PDFiumExt_ExitFormFillEnvironment", 1), o3._FPDFDOC_ExitFormFillEnvironment = q2("FPDFDOC_ExitFormFillEnvironment", 1), o3._FPDFAnnot_IsSupportedSubtype = q2("FPDFAnnot_IsSupportedSubtype", 1), o3._FPDFPage_CreateAnnot = q2("FPDFPage_CreateAnnot", 2), o3._FPDFPage_GetAnnotCount = q2("FPDFPage_GetAnnotCount", 1), o3._FPDFPage_GetAnnot = q2("FPDFPage_GetAnnot", 2), o3._FPDFPage_GetAnnotIndex = q2("FPDFPage_GetAnnotIndex", 2), o3._FPDFPage_CloseAnnot = q2("FPDFPage_CloseAnnot", 1), o3._FPDFPage_RemoveAnnot = q2("FPDFPage_RemoveAnnot", 2), o3._FPDFAnnot_GetSubtype = q2("FPDFAnnot_GetSubtype", 1), o3._FPDFAnnot_IsObjectSupportedSubtype = q2("FPDFAnnot_IsObjectSupportedSubtype", 1), o3._FPDFAnnot_UpdateObject = q2("FPDFAnnot_UpdateObject", 2), o3._FPDFAnnot_AddInkStroke = q2("FPDFAnnot_AddInkStroke", 3), o3._FPDFAnnot_RemoveInkList = q2("FPDFAnnot_RemoveInkList", 1), o3._FPDFAnnot_AppendObject = q2("FPDFAnnot_AppendObject", 2), o3._FPDFAnnot_GetObjectCount = q2("FPDFAnnot_GetObjectCount", 1), o3._FPDFAnnot_GetObject = q2("FPDFAnnot_GetObject", 2), o3._FPDFAnnot_RemoveObject = q2("FPDFAnnot_RemoveObject", 2), o3._FPDFAnnot_SetColor = q2("FPDFAnnot_SetColor", 6), o3._FPDFAnnot_GetColor = q2("FPDFAnnot_GetColor", 6), o3._FPDFAnnot_HasAttachmentPoints = q2("FPDFAnnot_HasAttachmentPoints", 1), o3._FPDFAnnot_SetAttachmentPoints = q2("FPDFAnnot_SetAttachmentPoints", 3), o3._FPDFAnnot_AppendAttachmentPoints = q2("FPDFAnnot_AppendAttachmentPoints", 2), o3._FPDFAnnot_CountAttachmentPoints = q2("FPDFAnnot_CountAttachmentPoints", 1), o3._FPDFAnnot_GetAttachmentPoints = q2("FPDFAnnot_GetAttachmentPoints", 3), o3._FPDFAnnot_SetRect = q2("FPDFAnnot_SetRect", 2), o3._FPDFAnnot_GetRect = q2("FPDFAnnot_GetRect", 2), o3._FPDFAnnot_GetVertices = q2("FPDFAnnot_GetVertices", 3), o3._FPDFAnnot_GetInkListCount = q2("FPDFAnnot_GetInkListCount", 1), o3._FPDFAnnot_GetInkListPath = q2("FPDFAnnot_GetInkListPath", 4), o3._FPDFAnnot_GetLine = q2("FPDFAnnot_GetLine", 3), o3._FPDFAnnot_SetBorder = q2("FPDFAnnot_SetBorder", 4), o3._FPDFAnnot_GetBorder = q2("FPDFAnnot_GetBorder", 4), o3._FPDFAnnot_HasKey = q2("FPDFAnnot_HasKey", 2), o3._FPDFAnnot_GetValueType = q2("FPDFAnnot_GetValueType", 2), o3._FPDFAnnot_SetStringValue = q2("FPDFAnnot_SetStringValue", 3), o3._FPDFAnnot_GetStringValue = q2("FPDFAnnot_GetStringValue", 4), o3._FPDFAnnot_GetNumberValue = q2("FPDFAnnot_GetNumberValue", 3), o3._FPDFAnnot_SetAP = q2("FPDFAnnot_SetAP", 3), o3._FPDFAnnot_GetAP = q2("FPDFAnnot_GetAP", 4), o3._FPDFAnnot_GetLinkedAnnot = q2("FPDFAnnot_GetLinkedAnnot", 2), o3._FPDFAnnot_GetFlags = q2("FPDFAnnot_GetFlags", 1), o3._FPDFAnnot_SetFlags = q2("FPDFAnnot_SetFlags", 2), o3._FPDFAnnot_GetFormFieldFlags = q2("FPDFAnnot_GetFormFieldFlags", 2), o3._FPDFAnnot_SetFormFieldFlags = q2("FPDFAnnot_SetFormFieldFlags", 3), o3._FPDFAnnot_GetFormFieldAtPoint = q2("FPDFAnnot_GetFormFieldAtPoint", 3), o3._FPDFAnnot_GetFormFieldName = q2("FPDFAnnot_GetFormFieldName", 4), o3._FPDFAnnot_GetFormFieldType = q2("FPDFAnnot_GetFormFieldType", 2), o3._FPDFAnnot_GetFormAdditionalActionJavaScript = q2("FPDFAnnot_GetFormAdditionalActionJavaScript", 5), o3._FPDFAnnot_GetFormFieldAlternateName = q2("FPDFAnnot_GetFormFieldAlternateName", 4), o3._FPDFAnnot_GetFormFieldValue = q2("FPDFAnnot_GetFormFieldValue", 4), o3._FPDFAnnot_GetOptionCount = q2("FPDFAnnot_GetOptionCount", 2), o3._FPDFAnnot_GetOptionLabel = q2("FPDFAnnot_GetOptionLabel", 5), o3._FPDFAnnot_IsOptionSelected = q2("FPDFAnnot_IsOptionSelected", 3), o3._FPDFAnnot_GetFontSize = q2("FPDFAnnot_GetFontSize", 3), o3._FPDFAnnot_SetFontColor = q2("FPDFAnnot_SetFontColor", 5), o3._FPDFAnnot_GetFontColor = q2("FPDFAnnot_GetFontColor", 5), o3._FPDFAnnot_IsChecked = q2("FPDFAnnot_IsChecked", 2), o3._FPDFAnnot_SetFocusableSubtypes = q2("FPDFAnnot_SetFocusableSubtypes", 3), o3._FPDFAnnot_GetFocusableSubtypesCount = q2("FPDFAnnot_GetFocusableSubtypesCount", 1), o3._FPDFAnnot_GetFocusableSubtypes = q2("FPDFAnnot_GetFocusableSubtypes", 3), o3._FPDFAnnot_GetLink = q2("FPDFAnnot_GetLink", 1), o3._FPDFAnnot_GetFormControlCount = q2("FPDFAnnot_GetFormControlCount", 2), o3._FPDFAnnot_GetFormControlIndex = q2("FPDFAnnot_GetFormControlIndex", 2), o3._FPDFAnnot_GetFormFieldExportValue = q2("FPDFAnnot_GetFormFieldExportValue", 4), o3._FPDFAnnot_SetURI = q2("FPDFAnnot_SetURI", 2), o3._FPDFAnnot_GetFileAttachment = q2("FPDFAnnot_GetFileAttachment", 1), o3._FPDFAnnot_AddFileAttachment = q2("FPDFAnnot_AddFileAttachment", 2), o3._EPDFAnnot_SetColor = q2("EPDFAnnot_SetColor", 6), o3._EPDFAnnot_GetColor = q2("EPDFAnnot_GetColor", 6), o3._EPDFAnnot_GetBorderEffect = q2("EPDFAnnot_GetBorderEffect", 2), o3._EPDFAnnot_GetRectangleDifferences = q2("EPDFAnnot_GetRectangleDifferences", 5), o3._EPDFAnnot_GetBorderDashPatternCount = q2("EPDFAnnot_GetBorderDashPatternCount", 1), o3._EPDFAnnot_GetBorderDashPattern = q2("EPDFAnnot_GetBorderDashPattern", 3), o3._EPDFAnnot_GetBorderStyle = q2("EPDFAnnot_GetBorderStyle", 2), o3._EPDFAnnot_SetBorderStyle = q2("EPDFAnnot_SetBorderStyle", 3), o3._EPDFAnnot_GenerateAppearance = q2("EPDFAnnot_GenerateAppearance", 1), o3._FPDFDoc_GetAttachmentCount = q2("FPDFDoc_GetAttachmentCount", 1), o3._FPDFDoc_AddAttachment = q2("FPDFDoc_AddAttachment", 2), o3._FPDFDoc_GetAttachment = q2("FPDFDoc_GetAttachment", 2), o3._FPDFDoc_DeleteAttachment = q2("FPDFDoc_DeleteAttachment", 2), o3._FPDFAttachment_GetName = q2("FPDFAttachment_GetName", 3), o3._FPDFAttachment_HasKey = q2("FPDFAttachment_HasKey", 2), o3._FPDFAttachment_GetValueType = q2("FPDFAttachment_GetValueType", 2), o3._FPDFAttachment_SetStringValue = q2("FPDFAttachment_SetStringValue", 3), o3._FPDFAttachment_GetStringValue = q2("FPDFAttachment_GetStringValue", 4), o3._FPDFAttachment_SetFile = q2("FPDFAttachment_SetFile", 4), o3._FPDFAttachment_GetFile = q2("FPDFAttachment_GetFile", 4), o3._FPDFAttachment_GetSubtype = q2("FPDFAttachment_GetSubtype", 3), o3._FPDFCatalog_IsTagged = q2("FPDFCatalog_IsTagged", 1), o3._FPDFCatalog_SetLanguage = q2("FPDFCatalog_SetLanguage", 2), o3._FPDFAvail_Create = q2("FPDFAvail_Create", 2), o3._FPDFAvail_Destroy = q2("FPDFAvail_Destroy", 1), o3._FPDFAvail_IsDocAvail = q2("FPDFAvail_IsDocAvail", 2), o3._FPDFAvail_GetDocument = q2("FPDFAvail_GetDocument", 2), o3._FPDFAvail_GetFirstPageNum = q2("FPDFAvail_GetFirstPageNum", 1), o3._FPDFAvail_IsPageAvail = q2("FPDFAvail_IsPageAvail", 3), o3._FPDFAvail_IsFormAvail = q2("FPDFAvail_IsFormAvail", 2), o3._FPDFAvail_IsLinearized = q2("FPDFAvail_IsLinearized", 1), o3._FPDFBookmark_GetFirstChild = q2("FPDFBookmark_GetFirstChild", 2), o3._FPDFBookmark_GetNextSibling = q2("FPDFBookmark_GetNextSibling", 2), o3._FPDFBookmark_GetTitle = q2("FPDFBookmark_GetTitle", 3), o3._FPDFBookmark_GetCount = q2("FPDFBookmark_GetCount", 1), o3._FPDFBookmark_Find = q2("FPDFBookmark_Find", 2), o3._FPDFBookmark_GetDest = q2("FPDFBookmark_GetDest", 2), o3._FPDFBookmark_GetAction = q2("FPDFBookmark_GetAction", 1), o3._FPDFAction_GetType = q2("FPDFAction_GetType", 1), o3._FPDFAction_GetDest = q2("FPDFAction_GetDest", 2), o3._FPDFAction_GetFilePath = q2("FPDFAction_GetFilePath", 3), o3._FPDFAction_GetURIPath = q2("FPDFAction_GetURIPath", 4), o3._FPDFDest_GetDestPageIndex = q2("FPDFDest_GetDestPageIndex", 2), o3._FPDFDest_GetView = q2("FPDFDest_GetView", 3), o3._FPDFDest_GetLocationInPage = q2("FPDFDest_GetLocationInPage", 7), o3._FPDFLink_GetLinkAtPoint = q2("FPDFLink_GetLinkAtPoint", 3), o3._FPDFLink_GetLinkZOrderAtPoint = q2("FPDFLink_GetLinkZOrderAtPoint", 3), o3._FPDFLink_GetDest = q2("FPDFLink_GetDest", 2), o3._FPDFLink_GetAction = q2("FPDFLink_GetAction", 1), o3._FPDFLink_Enumerate = q2("FPDFLink_Enumerate", 3), o3._FPDFLink_GetAnnot = q2("FPDFLink_GetAnnot", 2), o3._FPDFLink_GetAnnotRect = q2("FPDFLink_GetAnnotRect", 2), o3._FPDFLink_CountQuadPoints = q2("FPDFLink_CountQuadPoints", 1), o3._FPDFLink_GetQuadPoints = q2("FPDFLink_GetQuadPoints", 3), o3._FPDF_GetPageAAction = q2("FPDF_GetPageAAction", 2), o3._FPDF_GetFileIdentifier = q2("FPDF_GetFileIdentifier", 4), o3._FPDF_GetMetaText = q2("FPDF_GetMetaText", 4), o3._FPDF_GetPageLabel = q2("FPDF_GetPageLabel", 4), o3._FPDFPageObj_NewImageObj = q2("FPDFPageObj_NewImageObj", 1), o3._FPDFImageObj_LoadJpegFile = q2("FPDFImageObj_LoadJpegFile", 4), o3._FPDFImageObj_LoadJpegFileInline = q2("FPDFImageObj_LoadJpegFileInline", 4), o3._FPDFImageObj_SetMatrix = q2("FPDFImageObj_SetMatrix", 7), o3._FPDFImageObj_SetBitmap = q2("FPDFImageObj_SetBitmap", 4), o3._FPDFImageObj_GetBitmap = q2("FPDFImageObj_GetBitmap", 1), o3._FPDFImageObj_GetRenderedBitmap = q2("FPDFImageObj_GetRenderedBitmap", 3), o3._FPDFImageObj_GetImageDataDecoded = q2("FPDFImageObj_GetImageDataDecoded", 3), o3._FPDFImageObj_GetImageDataRaw = q2("FPDFImageObj_GetImageDataRaw", 3), o3._FPDFImageObj_GetImageFilterCount = q2("FPDFImageObj_GetImageFilterCount", 1), o3._FPDFImageObj_GetImageFilter = q2("FPDFImageObj_GetImageFilter", 4), o3._FPDFImageObj_GetImageMetadata = q2("FPDFImageObj_GetImageMetadata", 3), o3._FPDFImageObj_GetImagePixelSize = q2("FPDFImageObj_GetImagePixelSize", 3), o3._FPDFImageObj_GetIccProfileDataDecoded = q2("FPDFImageObj_GetIccProfileDataDecoded", 5), o3._FPDF_CreateNewDocument = q2("FPDF_CreateNewDocument", 0), o3._FPDFPage_Delete = q2("FPDFPage_Delete", 2), o3._FPDF_MovePages = q2("FPDF_MovePages", 4), o3._FPDFPage_New = q2("FPDFPage_New", 4), o3._FPDFPage_GetRotation = q2("FPDFPage_GetRotation", 1), o3._FPDFPage_InsertObject = q2("FPDFPage_InsertObject", 2), o3._FPDFPage_InsertObjectAtIndex = q2("FPDFPage_InsertObjectAtIndex", 3), o3._FPDFPage_RemoveObject = q2("FPDFPage_RemoveObject", 2), o3._FPDFPage_CountObjects = q2("FPDFPage_CountObjects", 1), o3._FPDFPage_GetObject = q2("FPDFPage_GetObject", 2), o3._FPDFPage_HasTransparency = q2("FPDFPage_HasTransparency", 1), o3._FPDFPageObj_Destroy = q2("FPDFPageObj_Destroy", 1), o3._FPDFPageObj_GetMarkedContentID = q2("FPDFPageObj_GetMarkedContentID", 1), o3._FPDFPageObj_CountMarks = q2("FPDFPageObj_CountMarks", 1), o3._FPDFPageObj_GetMark = q2("FPDFPageObj_GetMark", 2), o3._FPDFPageObj_AddMark = q2("FPDFPageObj_AddMark", 2), o3._FPDFPageObj_RemoveMark = q2("FPDFPageObj_RemoveMark", 2), o3._FPDFPageObjMark_GetName = q2("FPDFPageObjMark_GetName", 4), o3._FPDFPageObjMark_CountParams = q2("FPDFPageObjMark_CountParams", 1), o3._FPDFPageObjMark_GetParamKey = q2("FPDFPageObjMark_GetParamKey", 5), o3._FPDFPageObjMark_GetParamValueType = q2("FPDFPageObjMark_GetParamValueType", 2), o3._FPDFPageObjMark_GetParamIntValue = q2("FPDFPageObjMark_GetParamIntValue", 3), o3._FPDFPageObjMark_GetParamStringValue = q2("FPDFPageObjMark_GetParamStringValue", 5), o3._FPDFPageObjMark_GetParamBlobValue = q2("FPDFPageObjMark_GetParamBlobValue", 5), o3._FPDFPageObj_HasTransparency = q2("FPDFPageObj_HasTransparency", 1), o3._FPDFPageObjMark_SetIntParam = q2("FPDFPageObjMark_SetIntParam", 5), o3._FPDFPageObjMark_SetStringParam = q2("FPDFPageObjMark_SetStringParam", 5), o3._FPDFPageObjMark_SetBlobParam = q2("FPDFPageObjMark_SetBlobParam", 6), o3._FPDFPageObjMark_RemoveParam = q2("FPDFPageObjMark_RemoveParam", 3), o3._FPDFPageObj_GetType = q2("FPDFPageObj_GetType", 1), o3._FPDFPageObj_GetIsActive = q2("FPDFPageObj_GetIsActive", 2), o3._FPDFPageObj_SetIsActive = q2("FPDFPageObj_SetIsActive", 2), o3._FPDFPage_GenerateContent = q2("FPDFPage_GenerateContent", 1), o3._FPDFPageObj_Transform = q2("FPDFPageObj_Transform", 7), o3._FPDFPageObj_TransformF = q2("FPDFPageObj_TransformF", 2), o3._FPDFPageObj_GetMatrix = q2("FPDFPageObj_GetMatrix", 2), o3._FPDFPageObj_SetMatrix = q2("FPDFPageObj_SetMatrix", 2), o3._FPDFPageObj_SetBlendMode = q2("FPDFPageObj_SetBlendMode", 2), o3._FPDFPage_TransformAnnots = q2("FPDFPage_TransformAnnots", 7), o3._FPDFPage_SetRotation = q2("FPDFPage_SetRotation", 2), o3._FPDFPageObj_SetFillColor = q2("FPDFPageObj_SetFillColor", 5), o3._FPDFPageObj_GetFillColor = q2("FPDFPageObj_GetFillColor", 5), o3._FPDFPageObj_GetBounds = q2("FPDFPageObj_GetBounds", 5), o3._FPDFPageObj_GetRotatedBounds = q2("FPDFPageObj_GetRotatedBounds", 2), o3._FPDFPageObj_SetStrokeColor = q2("FPDFPageObj_SetStrokeColor", 5), o3._FPDFPageObj_GetStrokeColor = q2("FPDFPageObj_GetStrokeColor", 5), o3._FPDFPageObj_SetStrokeWidth = q2("FPDFPageObj_SetStrokeWidth", 2), o3._FPDFPageObj_GetStrokeWidth = q2("FPDFPageObj_GetStrokeWidth", 2), o3._FPDFPageObj_GetLineJoin = q2("FPDFPageObj_GetLineJoin", 1), o3._FPDFPageObj_SetLineJoin = q2("FPDFPageObj_SetLineJoin", 2), o3._FPDFPageObj_GetLineCap = q2("FPDFPageObj_GetLineCap", 1), o3._FPDFPageObj_SetLineCap = q2("FPDFPageObj_SetLineCap", 2), o3._FPDFPageObj_GetDashPhase = q2("FPDFPageObj_GetDashPhase", 2), o3._FPDFPageObj_SetDashPhase = q2("FPDFPageObj_SetDashPhase", 2), o3._FPDFPageObj_GetDashCount = q2("FPDFPageObj_GetDashCount", 1), o3._FPDFPageObj_GetDashArray = q2("FPDFPageObj_GetDashArray", 3), o3._FPDFPageObj_SetDashArray = q2("FPDFPageObj_SetDashArray", 4), o3._FPDFFormObj_CountObjects = q2("FPDFFormObj_CountObjects", 1), o3._FPDFFormObj_GetObject = q2("FPDFFormObj_GetObject", 2), o3._FPDFFormObj_RemoveObject = q2("FPDFFormObj_RemoveObject", 2), o3._FPDFPageObj_CreateNewPath = q2("FPDFPageObj_CreateNewPath", 2), o3._FPDFPageObj_CreateNewRect = q2("FPDFPageObj_CreateNewRect", 4), o3._FPDFPath_CountSegments = q2("FPDFPath_CountSegments", 1), o3._FPDFPath_GetPathSegment = q2("FPDFPath_GetPathSegment", 2), o3._FPDFPath_MoveTo = q2("FPDFPath_MoveTo", 3), o3._FPDFPath_LineTo = q2("FPDFPath_LineTo", 3), o3._FPDFPath_BezierTo = q2("FPDFPath_BezierTo", 7), o3._FPDFPath_Close = q2("FPDFPath_Close", 1), o3._FPDFPath_SetDrawMode = q2("FPDFPath_SetDrawMode", 3), o3._FPDFPath_GetDrawMode = q2("FPDFPath_GetDrawMode", 3), o3._FPDFPathSegment_GetPoint = q2("FPDFPathSegment_GetPoint", 3), o3._FPDFPathSegment_GetType = q2("FPDFPathSegment_GetType", 1), o3._FPDFPathSegment_GetClose = q2("FPDFPathSegment_GetClose", 1), o3._FPDFPageObj_NewTextObj = q2("FPDFPageObj_NewTextObj", 3), o3._FPDFText_SetText = q2("FPDFText_SetText", 2), o3._FPDFText_SetCharcodes = q2("FPDFText_SetCharcodes", 3), o3._FPDFText_LoadFont = q2("FPDFText_LoadFont", 5), o3._FPDFText_LoadStandardFont = q2("FPDFText_LoadStandardFont", 2), o3._FPDFText_LoadCidType2Font = q2("FPDFText_LoadCidType2Font", 6), o3._FPDFTextObj_GetFontSize = q2("FPDFTextObj_GetFontSize", 2), o3._FPDFTextObj_GetText = q2("FPDFTextObj_GetText", 4), o3._FPDFTextObj_GetRenderedBitmap = q2("FPDFTextObj_GetRenderedBitmap", 4), o3._FPDFFont_Close = q2("FPDFFont_Close", 1), o3._FPDFPageObj_CreateTextObj = q2("FPDFPageObj_CreateTextObj", 3), o3._FPDFTextObj_GetTextRenderMode = q2("FPDFTextObj_GetTextRenderMode", 1), o3._FPDFTextObj_SetTextRenderMode = q2("FPDFTextObj_SetTextRenderMode", 2), o3._FPDFTextObj_GetFont = q2("FPDFTextObj_GetFont", 1), o3._FPDFFont_GetBaseFontName = q2("FPDFFont_GetBaseFontName", 3), o3._FPDFFont_GetFamilyName = q2("FPDFFont_GetFamilyName", 3), o3._FPDFFont_GetFontData = q2("FPDFFont_GetFontData", 4), o3._FPDFFont_GetIsEmbedded = q2("FPDFFont_GetIsEmbedded", 1), o3._FPDFFont_GetFlags = q2("FPDFFont_GetFlags", 1), o3._FPDFFont_GetWeight = q2("FPDFFont_GetWeight", 1), o3._FPDFFont_GetItalicAngle = q2("FPDFFont_GetItalicAngle", 2), o3._FPDFFont_GetAscent = q2("FPDFFont_GetAscent", 3), o3._FPDFFont_GetDescent = q2("FPDFFont_GetDescent", 3), o3._FPDFFont_GetGlyphWidth = q2("FPDFFont_GetGlyphWidth", 4), o3._FPDFFont_GetGlyphPath = q2("FPDFFont_GetGlyphPath", 3), o3._FPDFGlyphPath_CountGlyphSegments = q2("FPDFGlyphPath_CountGlyphSegments", 1), o3._FPDFGlyphPath_GetGlyphPathSegment = q2("FPDFGlyphPath_GetGlyphPathSegment", 2), o3._FPDFDoc_GetPageMode = q2("FPDFDoc_GetPageMode", 1), o3._FPDFPage_Flatten = q2("FPDFPage_Flatten", 2), o3._FPDFPage_HasFormFieldAtPoint = q2("FPDFPage_HasFormFieldAtPoint", 4), o3._FPDFPage_FormFieldZOrderAtPoint = q2("FPDFPage_FormFieldZOrderAtPoint", 4), o3._malloc = q2("malloc", 1), o3._free = q2("free", 1), o3._FORM_OnMouseMove = q2("FORM_OnMouseMove", 5), o3._FORM_OnMouseWheel = q2("FORM_OnMouseWheel", 6), o3._FORM_OnFocus = q2("FORM_OnFocus", 5), o3._FORM_OnLButtonDown = q2("FORM_OnLButtonDown", 5), o3._FORM_OnLButtonUp = q2("FORM_OnLButtonUp", 5), o3._FORM_OnLButtonDoubleClick = q2("FORM_OnLButtonDoubleClick", 5), o3._FORM_OnRButtonDown = q2("FORM_OnRButtonDown", 5), o3._FORM_OnRButtonUp = q2("FORM_OnRButtonUp", 5), o3._FORM_OnKeyDown = q2("FORM_OnKeyDown", 4), o3._FORM_OnKeyUp = q2("FORM_OnKeyUp", 4), o3._FORM_OnChar = q2("FORM_OnChar", 4), o3._FORM_GetFocusedText = q2("FORM_GetFocusedText", 4), o3._FORM_GetSelectedText = q2("FORM_GetSelectedText", 4), o3._FORM_ReplaceAndKeepSelection = q2("FORM_ReplaceAndKeepSelection", 3), o3._FORM_ReplaceSelection = q2("FORM_ReplaceSelection", 3), o3._FORM_SelectAllText = q2("FORM_SelectAllText", 2), o3._FORM_CanUndo = q2("FORM_CanUndo", 2), o3._FORM_CanRedo = q2("FORM_CanRedo", 2), o3._FORM_Undo = q2("FORM_Undo", 2), o3._FORM_Redo = q2("FORM_Redo", 2), o3._FORM_ForceToKillFocus = q2("FORM_ForceToKillFocus", 1), o3._FORM_GetFocusedAnnot = q2("FORM_GetFocusedAnnot", 3), o3._FORM_SetFocusedAnnot = q2("FORM_SetFocusedAnnot", 2), o3._FPDF_FFLDraw = q2("FPDF_FFLDraw", 9), o3._FPDF_SetFormFieldHighlightColor = q2("FPDF_SetFormFieldHighlightColor", 3), o3._FPDF_SetFormFieldHighlightAlpha = q2("FPDF_SetFormFieldHighlightAlpha", 2), o3._FPDF_RemoveFormFieldHighlight = q2("FPDF_RemoveFormFieldHighlight", 1), o3._FORM_OnAfterLoadPage = q2("FORM_OnAfterLoadPage", 2), o3._FORM_OnBeforeClosePage = q2("FORM_OnBeforeClosePage", 2), o3._FORM_DoDocumentJSAction = q2("FORM_DoDocumentJSAction", 1), o3._FORM_DoDocumentOpenAction = q2("FORM_DoDocumentOpenAction", 1), o3._FORM_DoDocumentAAction = q2("FORM_DoDocumentAAction", 2), o3._FORM_DoPageAAction = q2("FORM_DoPageAAction", 3), o3._FORM_SetIndexSelected = q2("FORM_SetIndexSelected", 4), o3._FORM_IsIndexSelected = q2("FORM_IsIndexSelected", 3), o3._FPDFDoc_GetJavaScriptActionCount = q2("FPDFDoc_GetJavaScriptActionCount", 1), o3._FPDFDoc_GetJavaScriptAction = q2("FPDFDoc_GetJavaScriptAction", 2), o3._FPDFDoc_CloseJavaScriptAction = q2("FPDFDoc_CloseJavaScriptAction", 1), o3._FPDFJavaScriptAction_GetName = q2("FPDFJavaScriptAction_GetName", 3), o3._FPDFJavaScriptAction_GetScript = q2("FPDFJavaScriptAction_GetScript", 3), o3._FPDF_ImportPagesByIndex = q2("FPDF_ImportPagesByIndex", 5), o3._FPDF_ImportPages = q2("FPDF_ImportPages", 4), o3._FPDF_ImportNPagesToOne = q2("FPDF_ImportNPagesToOne", 5), o3._FPDF_NewXObjectFromPage = q2("FPDF_NewXObjectFromPage", 3), o3._FPDF_CloseXObject = q2("FPDF_CloseXObject", 1), o3._FPDF_NewFormObjectFromXObject = q2("FPDF_NewFormObjectFromXObject", 1), o3._FPDF_CopyViewerPreferences = q2("FPDF_CopyViewerPreferences", 2), o3._FPDF_RenderPageBitmapWithColorScheme_Start = q2("FPDF_RenderPageBitmapWithColorScheme_Start", 10), o3._FPDF_RenderPageBitmap_Start = q2("FPDF_RenderPageBitmap_Start", 9), o3._FPDF_RenderPage_Continue = q2("FPDF_RenderPage_Continue", 2), o3._FPDF_RenderPage_Close = q2("FPDF_RenderPage_Close", 1), o3._FPDF_SaveWithVersion = q2("FPDF_SaveWithVersion", 4), o3._FPDFText_GetCharIndexFromTextIndex = q2("FPDFText_GetCharIndexFromTextIndex", 2), o3._FPDFText_GetTextIndexFromCharIndex = q2("FPDFText_GetTextIndexFromCharIndex", 2), o3._FPDF_GetSignatureCount = q2("FPDF_GetSignatureCount", 1), o3._FPDF_GetSignatureObject = q2("FPDF_GetSignatureObject", 2), o3._FPDFSignatureObj_GetContents = q2("FPDFSignatureObj_GetContents", 3), o3._FPDFSignatureObj_GetByteRange = q2("FPDFSignatureObj_GetByteRange", 3), o3._FPDFSignatureObj_GetSubFilter = q2("FPDFSignatureObj_GetSubFilter", 3), o3._FPDFSignatureObj_GetReason = q2("FPDFSignatureObj_GetReason", 3), o3._FPDFSignatureObj_GetTime = q2("FPDFSignatureObj_GetTime", 3), o3._FPDFSignatureObj_GetDocMDPPermission = q2("FPDFSignatureObj_GetDocMDPPermission", 1), o3._FPDF_StructTree_GetForPage = q2("FPDF_StructTree_GetForPage", 1), o3._FPDF_StructTree_Close = q2("FPDF_StructTree_Close", 1), o3._FPDF_StructTree_CountChildren = q2("FPDF_StructTree_CountChildren", 1), o3._FPDF_StructTree_GetChildAtIndex = q2("FPDF_StructTree_GetChildAtIndex", 2), o3._FPDF_StructElement_GetAltText = q2("FPDF_StructElement_GetAltText", 3), o3._FPDF_StructElement_GetActualText = q2("FPDF_StructElement_GetActualText", 3), o3._FPDF_StructElement_GetID = q2("FPDF_StructElement_GetID", 3), o3._FPDF_StructElement_GetLang = q2("FPDF_StructElement_GetLang", 3), o3._FPDF_StructElement_GetAttributeCount = q2("FPDF_StructElement_GetAttributeCount", 1), o3._FPDF_StructElement_GetAttributeAtIndex = q2("FPDF_StructElement_GetAttributeAtIndex", 2), o3._FPDF_StructElement_GetStringAttribute = q2("FPDF_StructElement_GetStringAttribute", 4), o3._FPDF_StructElement_GetMarkedContentID = q2("FPDF_StructElement_GetMarkedContentID", 1), o3._FPDF_StructElement_GetType = q2("FPDF_StructElement_GetType", 3), o3._FPDF_StructElement_GetObjType = q2("FPDF_StructElement_GetObjType", 3), o3._FPDF_StructElement_GetTitle = q2("FPDF_StructElement_GetTitle", 3), o3._FPDF_StructElement_CountChildren = q2("FPDF_StructElement_CountChildren", 1), o3._FPDF_StructElement_GetChildAtIndex = q2("FPDF_StructElement_GetChildAtIndex", 2), o3._FPDF_StructElement_GetChildMarkedContentID = q2("FPDF_StructElement_GetChildMarkedContentID", 2), o3._FPDF_StructElement_GetParent = q2("FPDF_StructElement_GetParent", 1), o3._FPDF_StructElement_Attr_GetCount = q2("FPDF_StructElement_Attr_GetCount", 1), o3._FPDF_StructElement_Attr_GetName = q2("FPDF_StructElement_Attr_GetName", 5), o3._FPDF_StructElement_Attr_GetValue = q2("FPDF_StructElement_Attr_GetValue", 2), o3._FPDF_StructElement_Attr_GetType = q2("FPDF_StructElement_Attr_GetType", 1), o3._FPDF_StructElement_Attr_GetBooleanValue = q2("FPDF_StructElement_Attr_GetBooleanValue", 2), o3._FPDF_StructElement_Attr_GetNumberValue = q2("FPDF_StructElement_Attr_GetNumberValue", 2), o3._FPDF_StructElement_Attr_GetStringValue = q2("FPDF_StructElement_Attr_GetStringValue", 4), o3._FPDF_StructElement_Attr_GetBlobValue = q2("FPDF_StructElement_Attr_GetBlobValue", 4), o3._FPDF_StructElement_Attr_CountChildren = q2("FPDF_StructElement_Attr_CountChildren", 1), o3._FPDF_StructElement_Attr_GetChildAtIndex = q2("FPDF_StructElement_Attr_GetChildAtIndex", 2), o3._FPDF_StructElement_GetMarkedContentIdCount = q2("FPDF_StructElement_GetMarkedContentIdCount", 1), o3._FPDF_StructElement_GetMarkedContentIdAtIndex = q2("FPDF_StructElement_GetMarkedContentIdAtIndex", 2), o3._FPDF_AddInstalledFont = q2("FPDF_AddInstalledFont", 3), o3._FPDF_SetSystemFontInfo = q2("FPDF_SetSystemFontInfo", 1), o3._FPDF_GetDefaultTTFMap = q2("FPDF_GetDefaultTTFMap", 0), o3._FPDF_GetDefaultTTFMapCount = q2("FPDF_GetDefaultTTFMapCount", 0), o3._FPDF_GetDefaultTTFMapEntry = q2("FPDF_GetDefaultTTFMapEntry", 1), o3._FPDF_GetDefaultSystemFontInfo = q2("FPDF_GetDefaultSystemFontInfo", 0), o3._FPDF_FreeDefaultSystemFontInfo = q2("FPDF_FreeDefaultSystemFontInfo", 1), o3._FPDFText_LoadPage = q2("FPDFText_LoadPage", 1), o3._FPDFText_ClosePage = q2("FPDFText_ClosePage", 1), o3._FPDFText_CountChars = q2("FPDFText_CountChars", 1), o3._FPDFText_GetUnicode = q2("FPDFText_GetUnicode", 2), o3._FPDFText_GetTextObject = q2("FPDFText_GetTextObject", 2), o3._FPDFText_IsGenerated = q2("FPDFText_IsGenerated", 2), o3._FPDFText_IsHyphen = q2("FPDFText_IsHyphen", 2), o3._FPDFText_HasUnicodeMapError = q2("FPDFText_HasUnicodeMapError", 2), o3._FPDFText_GetFontSize = q2("FPDFText_GetFontSize", 2), o3._FPDFText_GetFontInfo = q2("FPDFText_GetFontInfo", 5), o3._FPDFText_GetFontWeight = q2("FPDFText_GetFontWeight", 2), o3._FPDFText_GetFillColor = q2("FPDFText_GetFillColor", 6), o3._FPDFText_GetStrokeColor = q2("FPDFText_GetStrokeColor", 6), o3._FPDFText_GetCharAngle = q2("FPDFText_GetCharAngle", 2), o3._FPDFText_GetCharBox = q2("FPDFText_GetCharBox", 6), o3._FPDFText_GetLooseCharBox = q2("FPDFText_GetLooseCharBox", 3), o3._FPDFText_GetMatrix = q2("FPDFText_GetMatrix", 3), o3._FPDFText_GetCharOrigin = q2("FPDFText_GetCharOrigin", 4), o3._FPDFText_GetCharIndexAtPos = q2("FPDFText_GetCharIndexAtPos", 5), o3._FPDFText_GetText = q2("FPDFText_GetText", 4), o3._FPDFText_CountRects = q2("FPDFText_CountRects", 3), o3._FPDFText_GetRect = q2("FPDFText_GetRect", 6), o3._FPDFText_GetBoundedText = q2("FPDFText_GetBoundedText", 7), o3._FPDFText_FindStart = q2("FPDFText_FindStart", 4), o3._FPDFText_FindNext = q2("FPDFText_FindNext", 1), o3._FPDFText_FindPrev = q2("FPDFText_FindPrev", 1), o3._FPDFText_GetSchResultIndex = q2("FPDFText_GetSchResultIndex", 1), o3._FPDFText_GetSchCount = q2("FPDFText_GetSchCount", 1), o3._FPDFText_FindClose = q2("FPDFText_FindClose", 1), o3._FPDFLink_LoadWebLinks = q2("FPDFLink_LoadWebLinks", 1), o3._FPDFLink_CountWebLinks = q2("FPDFLink_CountWebLinks", 1), o3._FPDFLink_GetURL = q2("FPDFLink_GetURL", 4), o3._FPDFLink_CountRects = q2("FPDFLink_CountRects", 2), o3._FPDFLink_GetRect = q2("FPDFLink_GetRect", 7), o3._FPDFLink_GetTextRange = q2("FPDFLink_GetTextRange", 4), o3._FPDFLink_CloseWebLinks = q2("FPDFLink_CloseWebLinks", 1), o3._FPDFPage_GetDecodedThumbnailData = q2("FPDFPage_GetDecodedThumbnailData", 3), o3._FPDFPage_GetRawThumbnailData = q2("FPDFPage_GetRawThumbnailData", 3), o3._FPDFPage_GetThumbnailAsBitmap = q2("FPDFPage_GetThumbnailAsBitmap", 1), o3._FPDFPage_SetMediaBox = q2("FPDFPage_SetMediaBox", 5), o3._FPDFPage_SetCropBox = q2("FPDFPage_SetCropBox", 5), o3._FPDFPage_SetBleedBox = q2("FPDFPage_SetBleedBox", 5), o3._FPDFPage_SetTrimBox = q2("FPDFPage_SetTrimBox", 5), o3._FPDFPage_SetArtBox = q2("FPDFPage_SetArtBox", 5), o3._FPDFPage_GetMediaBox = q2("FPDFPage_GetMediaBox", 5), o3._FPDFPage_GetCropBox = q2("FPDFPage_GetCropBox", 5), o3._FPDFPage_GetBleedBox = q2("FPDFPage_GetBleedBox", 5), o3._FPDFPage_GetTrimBox = q2("FPDFPage_GetTrimBox", 5), o3._FPDFPage_GetArtBox = q2("FPDFPage_GetArtBox", 5), o3._FPDFPage_TransFormWithClip = q2("FPDFPage_TransFormWithClip", 3), o3._FPDFPageObj_TransformClipPath = q2("FPDFPageObj_TransformClipPath", 7), o3._FPDFPageObj_GetClipPath = q2("FPDFPageObj_GetClipPath", 1), o3._FPDFClipPath_CountPaths = q2("FPDFClipPath_CountPaths", 1), o3._FPDFClipPath_CountPathSegments = q2("FPDFClipPath_CountPathSegments", 2), o3._FPDFClipPath_GetPathSegment = q2("FPDFClipPath_GetPathSegment", 3), o3._FPDF_CreateClipPath = q2("FPDF_CreateClipPath", 4), o3._FPDF_DestroyClipPath = q2("FPDF_DestroyClipPath", 1), o3._FPDFPage_InsertClipPath = q2("FPDFPage_InsertClipPath", 2), o3._FPDF_InitLibrary = q2("FPDF_InitLibrary", 0), o3._FPDF_DestroyLibrary = q2("FPDF_DestroyLibrary", 0), o3._FPDF_SetSandBoxPolicy = q2("FPDF_SetSandBoxPolicy", 2), o3._FPDF_LoadDocument = q2("FPDF_LoadDocument", 2), o3._FPDF_GetFormType = q2("FPDF_GetFormType", 1), o3._FPDF_LoadXFA = q2("FPDF_LoadXFA", 1), o3._FPDF_LoadMemDocument = q2("FPDF_LoadMemDocument", 3), o3._FPDF_LoadMemDocument64 = q2("FPDF_LoadMemDocument64", 3), o3._FPDF_LoadCustomDocument = q2("FPDF_LoadCustomDocument", 2), o3._FPDF_GetFileVersion = q2("FPDF_GetFileVersion", 2), o3._FPDF_DocumentHasValidCrossReferenceTable = q2("FPDF_DocumentHasValidCrossReferenceTable", 1), o3._FPDF_GetDocPermissions = q2("FPDF_GetDocPermissions", 1), o3._FPDF_GetDocUserPermissions = q2("FPDF_GetDocUserPermissions", 1), o3._FPDF_GetSecurityHandlerRevision = q2("FPDF_GetSecurityHandlerRevision", 1), o3._FPDF_GetPageCount = q2("FPDF_GetPageCount", 1), o3._FPDF_LoadPage = q2("FPDF_LoadPage", 2), o3._FPDF_GetPageWidthF = q2("FPDF_GetPageWidthF", 1), o3._FPDF_GetPageWidth = q2("FPDF_GetPageWidth", 1), o3._FPDF_GetPageHeightF = q2("FPDF_GetPageHeightF", 1), o3._FPDF_GetPageHeight = q2("FPDF_GetPageHeight", 1), o3._FPDF_GetPageBoundingBox = q2("FPDF_GetPageBoundingBox", 2), o3._FPDF_RenderPageBitmap = q2("FPDF_RenderPageBitmap", 8), o3._FPDF_RenderPageBitmapWithMatrix = q2("FPDF_RenderPageBitmapWithMatrix", 5), o3._EPDF_RenderAnnotBitmap = q2("EPDF_RenderAnnotBitmap", 6), o3._FPDF_ClosePage = q2("FPDF_ClosePage", 1), o3._FPDF_CloseDocument = q2("FPDF_CloseDocument", 1), o3._FPDF_GetLastError = q2("FPDF_GetLastError", 0), o3._FPDF_DeviceToPage = q2("FPDF_DeviceToPage", 10), o3._FPDF_PageToDevice = q2("FPDF_PageToDevice", 10), o3._FPDFBitmap_Create = q2("FPDFBitmap_Create", 3), o3._FPDFBitmap_CreateEx = q2("FPDFBitmap_CreateEx", 5), o3._FPDFBitmap_GetFormat = q2("FPDFBitmap_GetFormat", 1), o3._FPDFBitmap_FillRect = q2("FPDFBitmap_FillRect", 6), o3._FPDFBitmap_GetBuffer = q2("FPDFBitmap_GetBuffer", 1), o3._FPDFBitmap_GetWidth = q2("FPDFBitmap_GetWidth", 1), o3._FPDFBitmap_GetHeight = q2("FPDFBitmap_GetHeight", 1), o3._FPDFBitmap_GetStride = q2("FPDFBitmap_GetStride", 1), o3._FPDFBitmap_Destroy = q2("FPDFBitmap_Destroy", 1), o3._FPDF_GetPageSizeByIndexF = q2("FPDF_GetPageSizeByIndexF", 3), o3._FPDF_GetPageSizeByIndex = q2("FPDF_GetPageSizeByIndex", 4), o3._FPDF_VIEWERREF_GetPrintScaling = q2("FPDF_VIEWERREF_GetPrintScaling", 1), o3._FPDF_VIEWERREF_GetNumCopies = q2("FPDF_VIEWERREF_GetNumCopies", 1), o3._FPDF_VIEWERREF_GetPrintPageRange = q2("FPDF_VIEWERREF_GetPrintPageRange", 1), o3._FPDF_VIEWERREF_GetPrintPageRangeCount = q2("FPDF_VIEWERREF_GetPrintPageRangeCount", 1), o3._FPDF_VIEWERREF_GetPrintPageRangeElement = q2("FPDF_VIEWERREF_GetPrintPageRangeElement", 2), o3._FPDF_VIEWERREF_GetDuplex = q2("FPDF_VIEWERREF_GetDuplex", 1), o3._FPDF_VIEWERREF_GetName = q2("FPDF_VIEWERREF_GetName", 4), o3._FPDF_CountNamedDests = q2("FPDF_CountNamedDests", 1), o3._FPDF_GetNamedDestByName = q2("FPDF_GetNamedDestByName", 2), o3._FPDF_GetNamedDest = q2("FPDF_GetNamedDest", 4), o3._FPDF_GetXFAPacketCount = q2("FPDF_GetXFAPacketCount", 1), o3._FPDF_GetXFAPacketName = q2("FPDF_GetXFAPacketName", 4), o3._FPDF_GetXFAPacketContent = q2("FPDF_GetXFAPacketContent", 5), o3._FPDF_GetTrailerEnds = q2("FPDF_GetTrailerEnds", 3);
      var Ze2, et2, tt2 = q2("fflush", 1), nt2 = q2("emscripten_builtin_memalign", 2), rt2 = q2("strerror", 1), ot2 = q2("setThrew", 2), it2 = () => (it2 = Qe2.emscripten_stack_init)(), at2 = () => (at2 = Qe2.emscripten_stack_get_end)(), Ft2 = (e6) => (Ft2 = Qe2._emscripten_stack_restore)(e6), st2 = (e6) => (st2 = Qe2._emscripten_stack_alloc)(e6), ut2 = () => (ut2 = Qe2.emscripten_stack_get_current)();
      function mt2() {
        var e6;
        it2(), T3(!(3 & (e6 = at2()))), 0 == e6 && (e6 += 4), E2[e6 >> 2] = 34821223, E2[e6 + 4 >> 2] = 2310721022, E2[0] = 1668509029;
      }
      function lt2() {
        var e6;
        function t4() {
          Ze2 || (Ze2 = 1, o3.calledRun = 1, C3 || (T3(!I3), I3 = true, x3(), o3.noFSInit || ve2.initialized || ve2.init(), ve2.ignorePermissions = false, ae2(w3), n3(o3), o3.onRuntimeInitialized?.(), T3(!o3._main, 'compiled without a main, but one is present. if you added it from JS, use Module["onRuntimeInitialized"]'), function() {
            x3();
            var e7 = o3.postRun;
            e7 && ("function" == typeof e7 && (e7 = [e7]), e7.forEach(j3)), ae2(R3);
          }()));
        }
        B3 > 0 || (mt2(), !et2 && (et2 = 1, (e6 = o3.preRun) && ("function" == typeof e6 && (e6 = [e6]), e6.forEach(k3)), ae2(v3), B3 > 0) || (o3.setStatus ? (o3.setStatus("Running..."), setTimeout(() => {
          setTimeout(() => o3.setStatus(""), 1), t4();
        }, 1)) : t4(), x3()));
      }
      if (o3.dynCall_ji = q2("dynCall_ji", 2), o3.dynCall_jij = q2("dynCall_jij", 4), o3.dynCall_iiij = q2("dynCall_iiij", 5), o3.dynCall_iij = q2("dynCall_iij", 4), o3.dynCall_j = q2("dynCall_j", 1), o3.dynCall_jji = q2("dynCall_jji", 4), o3.dynCall_iji = q2("dynCall_iji", 4), o3.dynCall_viijii = q2("dynCall_viijii", 7), o3.dynCall_iiji = q2("dynCall_iiji", 5), o3.dynCall_jiji = q2("dynCall_jiji", 5), o3.dynCall_iiiiij = q2("dynCall_iiiiij", 7), o3.dynCall_iiiiijj = q2("dynCall_iiiiijj", 9), o3.dynCall_iiiiiijj = q2("dynCall_iiiiiijj", 10), o3.dynCall_viji = q2("dynCall_viji", 5), o3.wasmExports = Qe2, o3.ccall = Je2, o3.cwrap = (e6, t4, n4, r5) => (...r6) => Je2(e6, t4, n4, r6), o3.addFunction = (e6, t4) => {
        T3(void 0 !== e6);
        var n4 = $e2(e6);
        if (n4) return n4;
        var r5 = (() => {
          if (Xe2.length) return Xe2.pop();
          try {
            Ge2.grow(1);
          } catch (e7) {
            if (!(e7 instanceof RangeError)) throw e7;
            throw "Unable to grow wasm table. Set ALLOW_TABLE_GROWTH.";
          }
          return Ge2.length - 1;
        })();
        try {
          Ke2(r5, e6);
        } catch (n5) {
          if (!(n5 instanceof TypeError)) throw n5;
          T3(void 0 !== t4, "Missing signature argument to addFunction: " + e6);
          var o4 = He2(e6, t4);
          Ke2(r5, o4);
        }
        return Ee2.set(e6, r5), r5;
      }, o3.removeFunction = (e6) => {
        Ee2.delete(Ue2(e6)), Ke2(e6, null), Xe2.push(e6);
      }, o3.setValue = function(e6, t4, n4 = "i8") {
        switch (n4.endsWith("*") && (n4 = "*"), n4) {
          case "i1":
          case "i8":
            b2[e6] = t4;
            break;
          case "i16":
            f2[e6 >> 1] = t4;
            break;
          case "i32":
            G2[e6 >> 2] = t4;
            break;
          case "i64":
            H2("to do setValue(i64) use WASM_BIGINT");
          case "float":
            S2[e6 >> 2] = t4;
            break;
          case "double":
            M2[e6 >> 3] = t4;
            break;
          case "*":
            E2[e6 >> 2] = t4;
            break;
          default:
            H2(`invalid type for setValue: ${n4}`);
        }
      }, o3.getValue = function(e6, t4 = "i8") {
        switch (t4.endsWith("*") && (t4 = "*"), t4) {
          case "i1":
          case "i8":
            return b2[e6];
          case "i16":
            return f2[e6 >> 1];
          case "i32":
            return G2[e6 >> 2];
          case "i64":
            H2("to do getValue(i64) use WASM_BIGINT");
          case "float":
            return S2[e6 >> 2];
          case "double":
            return M2[e6 >> 3];
          case "*":
            return E2[e6 >> 2];
          default:
            H2(`invalid type for getValue: ${t4}`);
        }
      }, o3.UTF8ToString = _e2, o3.stringToUTF8 = Ie2, o3.UTF16ToString = (e6, t4) => {
        T3(e6 % 2 == 0, "Pointer passed to UTF16ToString must be aligned to two bytes!");
        for (var n4 = e6, r5 = n4 >> 1, o4 = r5 + t4 / 2; !(r5 >= o4) && A2[r5]; ) ++r5;
        if ((n4 = r5 << 1) - e6 > 32 && We2) return We2.decode(p2.subarray(e6, n4));
        for (var i5 = "", a4 = 0; !(a4 >= t4 / 2); ++a4) {
          var F3 = f2[e6 + 2 * a4 >> 1];
          if (0 == F3) break;
          i5 += String.fromCharCode(F3);
        }
        return i5;
      }, o3.stringToUTF16 = (e6, t4, n4) => {
        if (T3(t4 % 2 == 0, "Pointer passed to stringToUTF16 must be aligned to two bytes!"), T3("number" == typeof n4, "stringToUTF16(str, outPtr, maxBytesToWrite) is missing the third parameter that specifies the length of the output buffer!"), n4 ??= 2147483647, n4 < 2) return 0;
        for (var r5 = t4, o4 = (n4 -= 2) < 2 * e6.length ? n4 / 2 : e6.length, i5 = 0; i5 < o4; ++i5) {
          var a4 = e6.charCodeAt(i5);
          f2[t4 >> 1] = a4, t4 += 2;
        }
        return f2[t4 >> 1] = 0, t4 - r5;
      }, ["writeI53ToI64", "writeI53ToI64Clamped", "writeI53ToI64Signaling", "writeI53ToU64Clamped", "writeI53ToU64Signaling", "readI53FromI64", "readI53FromU64", "convertI32PairToI53", "convertU32PairToI53", "getTempRet0", "setTempRet0", "exitJS", "inetPton4", "inetNtop4", "inetPton6", "inetNtop6", "readSockaddr", "writeSockaddr", "emscriptenLog", "readEmAsmArgs", "jstoi_q", "listenOnce", "autoResumeAudioContext", "dynCallLegacy", "getDynCaller", "dynCall", "handleException", "keepRuntimeAlive", "runtimeKeepalivePush", "runtimeKeepalivePop", "callUserCallback", "maybeExit", "asmjsMangle", "HandleAllocator", "getNativeTypeSize", "STACK_SIZE", "STACK_ALIGN", "POINTER_SIZE", "ASSERTIONS", "reallyNegative", "unSign", "strLen", "reSign", "formatString", "intArrayToString", "AsciiToString", "lengthBytesUTF16", "UTF32ToString", "stringToUTF32", "lengthBytesUTF32", "stringToNewUTF8", "registerKeyEventCallback", "maybeCStringToJsString", "findEventTarget", "getBoundingClientRect", "fillMouseEventData", "registerMouseEventCallback", "registerWheelEventCallback", "registerUiEventCallback", "registerFocusEventCallback", "fillDeviceOrientationEventData", "registerDeviceOrientationEventCallback", "fillDeviceMotionEventData", "registerDeviceMotionEventCallback", "screenOrientation", "fillOrientationChangeEventData", "registerOrientationChangeEventCallback", "fillFullscreenChangeEventData", "registerFullscreenChangeEventCallback", "JSEvents_requestFullscreen", "JSEvents_resizeCanvasForFullscreen", "registerRestoreOldStyle", "hideEverythingExceptGivenElement", "restoreHiddenElements", "setLetterbox", "softFullscreenResizeWebGLRenderTarget", "doRequestFullscreen", "fillPointerlockChangeEventData", "registerPointerlockChangeEventCallback", "registerPointerlockErrorEventCallback", "requestPointerLock", "fillVisibilityChangeEventData", "registerVisibilityChangeEventCallback", "registerTouchEventCallback", "fillGamepadEventData", "registerGamepadEventCallback", "registerBeforeUnloadEventCallback", "fillBatteryEventData", "battery", "registerBatteryEventCallback", "setCanvasElementSize", "getCanvasElementSize", "jsStackTrace", "getCallstack", "convertPCtoSourceLocation", "checkWasiClock", "wasiRightsToMuslOFlags", "wasiOFlagsToMuslOFlags", "createDyncallWrapper", "safeSetTimeout", "setImmediateWrapped", "clearImmediateWrapped", "polyfillSetImmediate", "registerPostMainLoop", "registerPreMainLoop", "getPromise", "makePromise", "idsToPromises", "makePromiseCallback", "ExceptionInfo", "findMatchingCatch", "Browser_asyncPrepareDataCounter", "safeRequestAnimationFrame", "arraySum", "addDays", "getSocketFromFD", "getSocketAddress", "FS_unlink", "FS_mkdirTree", "_setNetworkCallback", "heapObjectForWebGLType", "toTypedArrayIndex", "webgl_enable_ANGLE_instanced_arrays", "webgl_enable_OES_vertex_array_object", "webgl_enable_WEBGL_draw_buffers", "webgl_enable_WEBGL_multi_draw", "webgl_enable_EXT_polygon_offset_clamp", "webgl_enable_EXT_clip_control", "webgl_enable_WEBGL_polygon_mode", "emscriptenWebGLGet", "computeUnpackAlignedImageSize", "colorChannelsInGlTextureFormat", "emscriptenWebGLGetTexPixelData", "emscriptenWebGLGetUniform", "webglGetUniformLocation", "webglPrepareUniformLocationsBeforeFirstUse", "webglGetLeftBracePos", "emscriptenWebGLGetVertexAttrib", "__glGetActiveAttribOrUniform", "writeGLArray", "registerWebGlEventCallback", "runAndAbortIfError", "ALLOC_NORMAL", "ALLOC_STACK", "allocate", "writeStringToMemory", "writeAsciiToMemory", "setErrNo", "demangle", "stackTrace"].forEach(function(e6) {
        re2(e6, () => {
          var t4 = `\`${e6}\` is a library symbol and not included by default; add it to your library.js __deps or to DEFAULT_LIBRARY_FUNCS_TO_INCLUDE on the command line`, n4 = e6;
          n4.startsWith("_") || (n4 = "$" + e6), t4 += ` (e.g. -sDEFAULT_LIBRARY_FUNCS_TO_INCLUDE='${n4}')`, ne2(e6) && (t4 += ". Alternatively, forcing filesystem support (-sFORCE_FILESYSTEM) can export this for you"), me2(t4);
        }), ie2(e6);
      }), ["run", "addOnPreRun", "addOnInit", "addOnPreMain", "addOnExit", "addOnPostRun", "addRunDependency", "removeRunDependency", "out", "err", "callMain", "abort", "wasmMemory", "writeStackCookie", "checkStackCookie", "convertI32PairToI53Checked", "stackSave", "stackRestore", "stackAlloc", "ptrToString", "zeroMemory", "getHeapMax", "growMemory", "ENV", "ERRNO_CODES", "strError", "DNS", "Protocols", "Sockets", "initRandomFill", "randomFill", "timers", "warnOnce", "readEmAsmArgsArray", "jstoi_s", "getExecutableName", "asyncLoad", "alignMemory", "mmapAlloc", "wasmTable", "noExitRuntime", "getCFunc", "uleb128Encode", "sigToWasmTypes", "generateFuncType", "convertJsFunctionToWasm", "freeTableIndexes", "functionsInTableMap", "getEmptyTableSlot", "updateTableMap", "getFunctionAddress", "PATH", "PATH_FS", "UTF8Decoder", "UTF8ArrayToString", "stringToUTF8Array", "lengthBytesUTF8", "intArrayFromString", "stringToAscii", "UTF16Decoder", "stringToUTF8OnStack", "writeArrayToMemory", "JSEvents", "specialHTMLTargets", "findCanvasEventTarget", "currentFullscreenStrategy", "restoreOldWindowedStyle", "UNWIND_CACHE", "ExitStatus", "getEnvStrings", "doReadv", "doWritev", "promiseMap", "uncaughtExceptionCount", "exceptionLast", "exceptionCaught", "Browser", "getPreloadedImageData__data", "wget", "MONTH_DAYS_REGULAR", "MONTH_DAYS_LEAP", "MONTH_DAYS_REGULAR_CUMULATIVE", "MONTH_DAYS_LEAP_CUMULATIVE", "isLeapYear", "ydayFromDate", "SYSCALLS", "preloadPlugins", "FS_createPreloadedFile", "FS_modeStringToFlags", "FS_getMode", "FS_stdin_getChar_buffer", "FS_stdin_getChar", "FS_createPath", "FS_createDevice", "FS_readFile", "FS", "FS_createDataFile", "FS_createLazyFile", "MEMFS", "TTY", "PIPEFS", "SOCKFS", "tempFixedLengthArray", "miniTempWebGLFloatBuffers", "miniTempWebGLIntBuffers", "GL", "AL", "GLUT", "EGL", "GLEW", "IDBStore", "SDL", "SDL_gfx", "allocateUTF8", "allocateUTF8OnStack", "print", "printErr"].forEach(ie2), N3 = function e6() {
        Ze2 || lt2(), Ze2 || (N3 = e6);
      }, o3.preInit) for ("function" == typeof o3.preInit && (o3.preInit = [o3.preInit]); o3.preInit.length > 0; ) o3.preInit.pop()();
      lt2(), t3 = i4;
      for (const t4 of Object.keys(o3)) t4 in e5 || Object.defineProperty(e5, t4, { configurable: true, get() {
        H2(`Access to module property ('${t4}') is no longer possible via the module constructor argument; Instead, use the result of the module constructor.`);
      } });
      return t3;
    });
    T = { EPDF_RenderAnnotBitmap: [["number", "number", "number", "number", "number", "number"], "boolean"], EPDFAnnot_GenerateAppearance: [["number"], "boolean"], EPDFAnnot_GetBorderDashPattern: [["number", "number", "number"], "boolean"], EPDFAnnot_GetBorderDashPatternCount: [["number"], "number"], EPDFAnnot_GetBorderEffect: [["number", "number"], "boolean"], EPDFAnnot_GetBorderStyle: [["number", "number"], "number"], EPDFAnnot_GetColor: [["number", "number", "number", "number", "number", "number"], "boolean"], EPDFAnnot_GetRectangleDifferences: [["number", "number", "number", "number", "number"], "boolean"], EPDFAnnot_SetBorderStyle: [["number", "number", "number"], "boolean"], EPDFAnnot_SetColor: [["number", "number", "number", "number", "number", "number"], "boolean"], FORM_CanRedo: [["number", "number"], "boolean"], FORM_CanUndo: [["number", "number"], "boolean"], FORM_DoDocumentAAction: [["number", "number"], null], FORM_DoDocumentJSAction: [["number"], null], FORM_DoDocumentOpenAction: [["number"], null], FORM_DoPageAAction: [["number", "number", "number"], null], FORM_ForceToKillFocus: [["number"], "boolean"], FORM_GetFocusedAnnot: [["number", "number", "number"], "boolean"], FORM_GetFocusedText: [["number", "number", "number", "number"], "number"], FORM_GetSelectedText: [["number", "number", "number", "number"], "number"], FORM_IsIndexSelected: [["number", "number", "number"], "boolean"], FORM_OnAfterLoadPage: [["number", "number"], null], FORM_OnBeforeClosePage: [["number", "number"], null], FORM_OnChar: [["number", "number", "number", "number"], "boolean"], FORM_OnFocus: [["number", "number", "number", "number", "number"], "boolean"], FORM_OnKeyDown: [["number", "number", "number", "number"], "boolean"], FORM_OnKeyUp: [["number", "number", "number", "number"], "boolean"], FORM_OnLButtonDoubleClick: [["number", "number", "number", "number", "number"], "boolean"], FORM_OnLButtonDown: [["number", "number", "number", "number", "number"], "boolean"], FORM_OnLButtonUp: [["number", "number", "number", "number", "number"], "boolean"], FORM_OnMouseMove: [["number", "number", "number", "number", "number"], "boolean"], FORM_OnMouseWheel: [["number", "number", "number", "number", "number", "number"], "boolean"], FORM_OnRButtonDown: [["number", "number", "number", "number", "number"], "boolean"], FORM_OnRButtonUp: [["number", "number", "number", "number", "number"], "boolean"], FORM_Redo: [["number", "number"], "boolean"], FORM_ReplaceAndKeepSelection: [["number", "number", "number"], null], FORM_ReplaceSelection: [["number", "number", "number"], null], FORM_SelectAllText: [["number", "number"], "boolean"], FORM_SetFocusedAnnot: [["number", "number"], "boolean"], FORM_SetIndexSelected: [["number", "number", "number", "boolean"], "boolean"], FORM_Undo: [["number", "number"], "boolean"], FPDF_AddInstalledFont: [["number", "number", "number"], null], FPDF_CloseDocument: [["number"], null], FPDF_ClosePage: [["number"], null], FPDF_CloseXObject: [["number"], null], FPDF_CopyViewerPreferences: [["number", "number"], "boolean"], FPDF_CountNamedDests: [["number"], "number"], FPDF_CreateClipPath: [["number", "number", "number", "number"], "number"], FPDF_CreateNewDocument: [[], "number"], FPDF_DestroyClipPath: [["number"], null], FPDF_DestroyLibrary: [[], null], FPDF_DeviceToPage: [["number", "number", "number", "number", "number", "number", "number", "number", "number", "number"], "boolean"], FPDF_DocumentHasValidCrossReferenceTable: [["number"], "boolean"], FPDF_FFLDraw: [["number", "number", "number", "number", "number", "number", "number", "number", "number"], null], FPDF_FreeDefaultSystemFontInfo: [["number"], null], FPDF_GetDefaultSystemFontInfo: [[], "number"], FPDF_GetDefaultTTFMap: [[], "number"], FPDF_GetDefaultTTFMapCount: [[], "number"], FPDF_GetDefaultTTFMapEntry: [["number"], "number"], FPDF_GetDocPermissions: [["number"], "number"], FPDF_GetDocUserPermissions: [["number"], "number"], FPDF_GetFileIdentifier: [["number", "number", "number", "number"], "number"], FPDF_GetFileVersion: [["number", "number"], "boolean"], FPDF_GetFormType: [["number"], "number"], FPDF_GetLastError: [[], "number"], FPDF_GetMetaText: [["number", "string", "number", "number"], "number"], FPDF_GetNamedDest: [["number", "number", "number", "number"], "number"], FPDF_GetNamedDestByName: [["number", "string"], "number"], FPDF_GetPageAAction: [["number", "number"], "number"], FPDF_GetPageBoundingBox: [["number", "number"], "boolean"], FPDF_GetPageCount: [["number"], "number"], FPDF_GetPageHeight: [["number"], "number"], FPDF_GetPageHeightF: [["number"], "number"], FPDF_GetPageLabel: [["number", "number", "number", "number"], "number"], FPDF_GetPageSizeByIndex: [["number", "number", "number", "number"], "number"], FPDF_GetPageSizeByIndexF: [["number", "number", "number"], "boolean"], FPDF_GetPageWidth: [["number"], "number"], FPDF_GetPageWidthF: [["number"], "number"], FPDF_GetSecurityHandlerRevision: [["number"], "number"], FPDF_GetSignatureCount: [["number"], "number"], FPDF_GetSignatureObject: [["number", "number"], "number"], FPDF_GetTrailerEnds: [["number", "number", "number"], "number"], FPDF_GetXFAPacketContent: [["number", "number", "number", "number", "number"], "boolean"], FPDF_GetXFAPacketCount: [["number"], "number"], FPDF_GetXFAPacketName: [["number", "number", "number", "number"], "number"], FPDF_ImportNPagesToOne: [["number", "number", "number", "number", "number"], "number"], FPDF_ImportPages: [["number", "number", "string", "number"], "boolean"], FPDF_ImportPagesByIndex: [["number", "number", "number", "number", "number"], "boolean"], FPDF_InitLibrary: [[], null], FPDF_InitLibraryWithConfig: [["number"], null], FPDF_LoadCustomDocument: [["number", "string"], "number"], FPDF_LoadDocument: [["number", "string"], "number"], FPDF_LoadMemDocument: [["number", "number", "string"], "number"], FPDF_LoadMemDocument64: [["number", "number", "string"], "number"], FPDF_LoadPage: [["number", "number"], "number"], FPDF_LoadXFA: [["number"], "boolean"], FPDF_MovePages: [["number", "number", "number", "number"], "boolean"], FPDF_NewFormObjectFromXObject: [["number"], "number"], FPDF_NewXObjectFromPage: [["number", "number", "number"], "number"], FPDF_PageToDevice: [["number", "number", "number", "number", "number", "number", "number", "number", "number", "number"], "boolean"], FPDF_RemoveFormFieldHighlight: [["number"], null], FPDF_RenderPage_Close: [["number"], null], FPDF_RenderPage_Continue: [["number", "number"], "number"], FPDF_RenderPageBitmap: [["number", "number", "number", "number", "number", "number", "number", "number"], null], FPDF_RenderPageBitmap_Start: [["number", "number", "number", "number", "number", "number", "number", "number", "number"], "number"], FPDF_RenderPageBitmapWithColorScheme_Start: [["number", "number", "number", "number", "number", "number", "number", "number", "number", "number"], "number"], FPDF_RenderPageBitmapWithMatrix: [["number", "number", "number", "number", "number"], null], FPDF_SaveAsCopy: [["number", "number", "number"], "boolean"], FPDF_SaveWithVersion: [["number", "number", "number", "number"], "boolean"], FPDF_SetFormFieldHighlightAlpha: [["number", "number"], null], FPDF_SetFormFieldHighlightColor: [["number", "number", "number"], null], FPDF_SetSandBoxPolicy: [["number", "boolean"], null], FPDF_SetSystemFontInfo: [["number"], null], FPDF_StructElement_Attr_CountChildren: [["number"], "number"], FPDF_StructElement_Attr_GetBlobValue: [["number", "number", "number", "number"], "boolean"], FPDF_StructElement_Attr_GetBooleanValue: [["number", "number"], "boolean"], FPDF_StructElement_Attr_GetChildAtIndex: [["number", "number"], "number"], FPDF_StructElement_Attr_GetCount: [["number"], "number"], FPDF_StructElement_Attr_GetName: [["number", "number", "number", "number", "number"], "boolean"], FPDF_StructElement_Attr_GetNumberValue: [["number", "number"], "boolean"], FPDF_StructElement_Attr_GetStringValue: [["number", "number", "number", "number"], "boolean"], FPDF_StructElement_Attr_GetType: [["number"], "number"], FPDF_StructElement_Attr_GetValue: [["number", "string"], "number"], FPDF_StructElement_CountChildren: [["number"], "number"], FPDF_StructElement_GetActualText: [["number", "number", "number"], "number"], FPDF_StructElement_GetAltText: [["number", "number", "number"], "number"], FPDF_StructElement_GetAttributeAtIndex: [["number", "number"], "number"], FPDF_StructElement_GetAttributeCount: [["number"], "number"], FPDF_StructElement_GetChildAtIndex: [["number", "number"], "number"], FPDF_StructElement_GetChildMarkedContentID: [["number", "number"], "number"], FPDF_StructElement_GetID: [["number", "number", "number"], "number"], FPDF_StructElement_GetLang: [["number", "number", "number"], "number"], FPDF_StructElement_GetMarkedContentID: [["number"], "number"], FPDF_StructElement_GetMarkedContentIdAtIndex: [["number", "number"], "number"], FPDF_StructElement_GetMarkedContentIdCount: [["number"], "number"], FPDF_StructElement_GetObjType: [["number", "number", "number"], "number"], FPDF_StructElement_GetParent: [["number"], "number"], FPDF_StructElement_GetStringAttribute: [["number", "string", "number", "number"], "number"], FPDF_StructElement_GetTitle: [["number", "number", "number"], "number"], FPDF_StructElement_GetType: [["number", "number", "number"], "number"], FPDF_StructTree_Close: [["number"], null], FPDF_StructTree_CountChildren: [["number"], "number"], FPDF_StructTree_GetChildAtIndex: [["number", "number"], "number"], FPDF_StructTree_GetForPage: [["number"], "number"], FPDF_VIEWERREF_GetDuplex: [["number"], "number"], FPDF_VIEWERREF_GetName: [["number", "string", "number", "number"], "number"], FPDF_VIEWERREF_GetNumCopies: [["number"], "number"], FPDF_VIEWERREF_GetPrintPageRange: [["number"], "number"], FPDF_VIEWERREF_GetPrintPageRangeCount: [["number"], "number"], FPDF_VIEWERREF_GetPrintPageRangeElement: [["number", "number"], "number"], FPDF_VIEWERREF_GetPrintScaling: [["number"], "boolean"], FPDFAction_GetDest: [["number", "number"], "number"], FPDFAction_GetFilePath: [["number", "number", "number"], "number"], FPDFAction_GetType: [["number"], "number"], FPDFAction_GetURIPath: [["number", "number", "number", "number"], "number"], FPDFAnnot_AddFileAttachment: [["number", "number"], "number"], FPDFAnnot_AddInkStroke: [["number", "number", "number"], "number"], FPDFAnnot_AppendAttachmentPoints: [["number", "number"], "boolean"], FPDFAnnot_AppendObject: [["number", "number"], "boolean"], FPDFAnnot_CountAttachmentPoints: [["number"], "number"], FPDFAnnot_GetAP: [["number", "number", "number", "number"], "number"], FPDFAnnot_GetAttachmentPoints: [["number", "number", "number"], "boolean"], FPDFAnnot_GetBorder: [["number", "number", "number", "number"], "boolean"], FPDFAnnot_GetColor: [["number", "number", "number", "number", "number", "number"], "boolean"], FPDFAnnot_GetFileAttachment: [["number"], "number"], FPDFAnnot_GetFlags: [["number"], "number"], FPDFAnnot_GetFocusableSubtypes: [["number", "number", "number"], "boolean"], FPDFAnnot_GetFocusableSubtypesCount: [["number"], "number"], FPDFAnnot_GetFontColor: [["number", "number", "number", "number", "number"], "boolean"], FPDFAnnot_GetFontSize: [["number", "number", "number"], "boolean"], FPDFAnnot_GetFormAdditionalActionJavaScript: [["number", "number", "number", "number", "number"], "number"], FPDFAnnot_GetFormControlCount: [["number", "number"], "number"], FPDFAnnot_GetFormControlIndex: [["number", "number"], "number"], FPDFAnnot_GetFormFieldAlternateName: [["number", "number", "number", "number"], "number"], FPDFAnnot_GetFormFieldAtPoint: [["number", "number", "number"], "number"], FPDFAnnot_GetFormFieldExportValue: [["number", "number", "number", "number"], "number"], FPDFAnnot_GetFormFieldFlags: [["number", "number"], "number"], FPDFAnnot_GetFormFieldName: [["number", "number", "number", "number"], "number"], FPDFAnnot_GetFormFieldType: [["number", "number"], "number"], FPDFAnnot_GetFormFieldValue: [["number", "number", "number", "number"], "number"], FPDFAnnot_GetInkListCount: [["number"], "number"], FPDFAnnot_GetInkListPath: [["number", "number", "number", "number"], "number"], FPDFAnnot_GetLine: [["number", "number", "number"], "boolean"], FPDFAnnot_GetLink: [["number"], "number"], FPDFAnnot_GetLinkedAnnot: [["number", "string"], "number"], FPDFAnnot_GetNumberValue: [["number", "string", "number"], "boolean"], FPDFAnnot_GetObject: [["number", "number"], "number"], FPDFAnnot_GetObjectCount: [["number"], "number"], FPDFAnnot_GetOptionCount: [["number", "number"], "number"], FPDFAnnot_GetOptionLabel: [["number", "number", "number", "number", "number"], "number"], FPDFAnnot_GetRect: [["number", "number"], "boolean"], FPDFAnnot_GetStringValue: [["number", "string", "number", "number"], "number"], FPDFAnnot_GetSubtype: [["number"], "number"], FPDFAnnot_GetValueType: [["number", "string"], "number"], FPDFAnnot_GetVertices: [["number", "number", "number"], "number"], FPDFAnnot_HasAttachmentPoints: [["number"], "boolean"], FPDFAnnot_HasKey: [["number", "string"], "boolean"], FPDFAnnot_IsChecked: [["number", "number"], "boolean"], FPDFAnnot_IsObjectSupportedSubtype: [["number"], "boolean"], FPDFAnnot_IsOptionSelected: [["number", "number", "number"], "boolean"], FPDFAnnot_IsSupportedSubtype: [["number"], "boolean"], FPDFAnnot_RemoveInkList: [["number"], "boolean"], FPDFAnnot_RemoveObject: [["number", "number"], "boolean"], FPDFAnnot_SetAP: [["number", "number", "number"], "boolean"], FPDFAnnot_SetAttachmentPoints: [["number", "number", "number"], "boolean"], FPDFAnnot_SetBorder: [["number", "number", "number", "number"], "boolean"], FPDFAnnot_SetColor: [["number", "number", "number", "number", "number", "number"], "boolean"], FPDFAnnot_SetFlags: [["number", "number"], "boolean"], FPDFAnnot_SetFocusableSubtypes: [["number", "number", "number"], "boolean"], FPDFAnnot_SetFontColor: [["number", "number", "number", "number", "number"], "boolean"], FPDFAnnot_SetFormFieldFlags: [["number", "number", "number"], "boolean"], FPDFAnnot_SetRect: [["number", "number"], "boolean"], FPDFAnnot_SetStringValue: [["number", "string", "number"], "boolean"], FPDFAnnot_SetURI: [["number", "number"], "boolean"], FPDFAnnot_UpdateObject: [["number", "number"], "boolean"], FPDFAttachment_GetFile: [["number", "number", "number", "number"], "boolean"], FPDFAttachment_GetName: [["number", "number", "number"], "number"], FPDFAttachment_GetStringValue: [["number", "string", "number", "number"], "number"], FPDFAttachment_GetSubtype: [["number", "number", "number"], "number"], FPDFAttachment_GetValueType: [["number", "string"], "number"], FPDFAttachment_HasKey: [["number", "string"], "boolean"], FPDFAttachment_SetFile: [["number", "number", "number", "number"], "boolean"], FPDFAttachment_SetStringValue: [["number", "string", "number"], "boolean"], FPDFAvail_Create: [["number", "number"], "number"], FPDFAvail_Destroy: [["number"], null], FPDFAvail_GetDocument: [["number", "string"], "number"], FPDFAvail_GetFirstPageNum: [["number"], "number"], FPDFAvail_IsDocAvail: [["number", "number"], "number"], FPDFAvail_IsFormAvail: [["number", "number"], "number"], FPDFAvail_IsLinearized: [["number"], "number"], FPDFAvail_IsPageAvail: [["number", "number", "number"], "number"], FPDFBitmap_Create: [["number", "number", "number"], "number"], FPDFBitmap_CreateEx: [["number", "number", "number", "number", "number"], "number"], FPDFBitmap_Destroy: [["number"], null], FPDFBitmap_FillRect: [["number", "number", "number", "number", "number", "number"], "boolean"], FPDFBitmap_GetBuffer: [["number"], "number"], FPDFBitmap_GetFormat: [["number"], "number"], FPDFBitmap_GetHeight: [["number"], "number"], FPDFBitmap_GetStride: [["number"], "number"], FPDFBitmap_GetWidth: [["number"], "number"], FPDFBookmark_Find: [["number", "number"], "number"], FPDFBookmark_GetAction: [["number"], "number"], FPDFBookmark_GetCount: [["number"], "number"], FPDFBookmark_GetDest: [["number", "number"], "number"], FPDFBookmark_GetFirstChild: [["number", "number"], "number"], FPDFBookmark_GetNextSibling: [["number", "number"], "number"], FPDFBookmark_GetTitle: [["number", "number", "number"], "number"], FPDFCatalog_IsTagged: [["number"], "boolean"], FPDFCatalog_SetLanguage: [["number", "string"], "boolean"], FPDFClipPath_CountPaths: [["number"], "number"], FPDFClipPath_CountPathSegments: [["number", "number"], "number"], FPDFClipPath_GetPathSegment: [["number", "number", "number"], "number"], FPDFDest_GetDestPageIndex: [["number", "number"], "number"], FPDFDest_GetLocationInPage: [["number", "number", "number", "number", "number", "number", "number"], "boolean"], FPDFDest_GetView: [["number", "number", "number"], "number"], FPDFDoc_AddAttachment: [["number", "number"], "number"], FPDFDoc_CloseJavaScriptAction: [["number"], null], FPDFDoc_DeleteAttachment: [["number", "number"], "boolean"], FPDFDOC_ExitFormFillEnvironment: [["number"], null], FPDFDoc_GetAttachment: [["number", "number"], "number"], FPDFDoc_GetAttachmentCount: [["number"], "number"], FPDFDoc_GetJavaScriptAction: [["number", "number"], "number"], FPDFDoc_GetJavaScriptActionCount: [["number"], "number"], FPDFDoc_GetPageMode: [["number"], "number"], FPDFDOC_InitFormFillEnvironment: [["number", "number"], "number"], FPDFFont_Close: [["number"], null], FPDFFont_GetAscent: [["number", "number", "number"], "boolean"], FPDFFont_GetBaseFontName: [["number", "number", "number"], "number"], FPDFFont_GetDescent: [["number", "number", "number"], "boolean"], FPDFFont_GetFamilyName: [["number", "number", "number"], "number"], FPDFFont_GetFlags: [["number"], "number"], FPDFFont_GetFontData: [["number", "number", "number", "number"], "boolean"], FPDFFont_GetGlyphPath: [["number", "number", "number"], "number"], FPDFFont_GetGlyphWidth: [["number", "number", "number", "number"], "boolean"], FPDFFont_GetIsEmbedded: [["number"], "number"], FPDFFont_GetItalicAngle: [["number", "number"], "boolean"], FPDFFont_GetWeight: [["number"], "number"], FPDFFormObj_CountObjects: [["number"], "number"], FPDFFormObj_GetObject: [["number", "number"], "number"], FPDFFormObj_RemoveObject: [["number", "number"], "boolean"], FPDFGlyphPath_CountGlyphSegments: [["number"], "number"], FPDFGlyphPath_GetGlyphPathSegment: [["number", "number"], "number"], FPDFImageObj_GetBitmap: [["number"], "number"], FPDFImageObj_GetIccProfileDataDecoded: [["number", "number", "number", "number", "number"], "boolean"], FPDFImageObj_GetImageDataDecoded: [["number", "number", "number"], "number"], FPDFImageObj_GetImageDataRaw: [["number", "number", "number"], "number"], FPDFImageObj_GetImageFilter: [["number", "number", "number", "number"], "number"], FPDFImageObj_GetImageFilterCount: [["number"], "number"], FPDFImageObj_GetImageMetadata: [["number", "number", "number"], "boolean"], FPDFImageObj_GetImagePixelSize: [["number", "number", "number"], "boolean"], FPDFImageObj_GetRenderedBitmap: [["number", "number", "number"], "number"], FPDFImageObj_LoadJpegFile: [["number", "number", "number", "number"], "boolean"], FPDFImageObj_LoadJpegFileInline: [["number", "number", "number", "number"], "boolean"], FPDFImageObj_SetBitmap: [["number", "number", "number", "number"], "boolean"], FPDFImageObj_SetMatrix: [["number", "number", "number", "number", "number", "number", "number"], "boolean"], FPDFJavaScriptAction_GetName: [["number", "number", "number"], "number"], FPDFJavaScriptAction_GetScript: [["number", "number", "number"], "number"], FPDFLink_CloseWebLinks: [["number"], null], FPDFLink_CountQuadPoints: [["number"], "number"], FPDFLink_CountRects: [["number", "number"], "number"], FPDFLink_CountWebLinks: [["number"], "number"], FPDFLink_Enumerate: [["number", "number", "number"], "boolean"], FPDFLink_GetAction: [["number"], "number"], FPDFLink_GetAnnot: [["number", "number"], "number"], FPDFLink_GetAnnotRect: [["number", "number"], "boolean"], FPDFLink_GetDest: [["number", "number"], "number"], FPDFLink_GetLinkAtPoint: [["number", "number", "number"], "number"], FPDFLink_GetLinkZOrderAtPoint: [["number", "number", "number"], "number"], FPDFLink_GetQuadPoints: [["number", "number", "number"], "boolean"], FPDFLink_GetRect: [["number", "number", "number", "number", "number", "number", "number"], "boolean"], FPDFLink_GetTextRange: [["number", "number", "number", "number"], "boolean"], FPDFLink_GetURL: [["number", "number", "number", "number"], "number"], FPDFLink_LoadWebLinks: [["number"], "number"], FPDFPage_CloseAnnot: [["number"], null], FPDFPage_CountObjects: [["number"], "number"], FPDFPage_CreateAnnot: [["number", "number"], "number"], FPDFPage_Delete: [["number", "number"], null], FPDFPage_Flatten: [["number", "number"], "number"], FPDFPage_FormFieldZOrderAtPoint: [["number", "number", "number", "number"], "number"], FPDFPage_GenerateContent: [["number"], "boolean"], FPDFPage_GetAnnot: [["number", "number"], "number"], FPDFPage_GetAnnotCount: [["number"], "number"], FPDFPage_GetAnnotIndex: [["number", "number"], "number"], FPDFPage_GetArtBox: [["number", "number", "number", "number", "number"], "boolean"], FPDFPage_GetBleedBox: [["number", "number", "number", "number", "number"], "boolean"], FPDFPage_GetCropBox: [["number", "number", "number", "number", "number"], "boolean"], FPDFPage_GetDecodedThumbnailData: [["number", "number", "number"], "number"], FPDFPage_GetMediaBox: [["number", "number", "number", "number", "number"], "boolean"], FPDFPage_GetObject: [["number", "number"], "number"], FPDFPage_GetRawThumbnailData: [["number", "number", "number"], "number"], FPDFPage_GetRotation: [["number"], "number"], FPDFPage_GetThumbnailAsBitmap: [["number"], "number"], FPDFPage_GetTrimBox: [["number", "number", "number", "number", "number"], "boolean"], FPDFPage_HasFormFieldAtPoint: [["number", "number", "number", "number"], "number"], FPDFPage_HasTransparency: [["number"], "boolean"], FPDFPage_InsertClipPath: [["number", "number"], null], FPDFPage_InsertObject: [["number", "number"], null], FPDFPage_InsertObjectAtIndex: [["number", "number", "number"], "boolean"], FPDFPage_New: [["number", "number", "number", "number"], "number"], FPDFPage_RemoveAnnot: [["number", "number"], "boolean"], FPDFPage_RemoveObject: [["number", "number"], "boolean"], FPDFPage_SetArtBox: [["number", "number", "number", "number", "number"], null], FPDFPage_SetBleedBox: [["number", "number", "number", "number", "number"], null], FPDFPage_SetCropBox: [["number", "number", "number", "number", "number"], null], FPDFPage_SetMediaBox: [["number", "number", "number", "number", "number"], null], FPDFPage_SetRotation: [["number", "number"], null], FPDFPage_SetTrimBox: [["number", "number", "number", "number", "number"], null], FPDFPage_TransformAnnots: [["number", "number", "number", "number", "number", "number", "number"], null], FPDFPage_TransFormWithClip: [["number", "number", "number"], "boolean"], FPDFPageObj_AddMark: [["number", "string"], "number"], FPDFPageObj_CountMarks: [["number"], "number"], FPDFPageObj_CreateNewPath: [["number", "number"], "number"], FPDFPageObj_CreateNewRect: [["number", "number", "number", "number"], "number"], FPDFPageObj_CreateTextObj: [["number", "number", "number"], "number"], FPDFPageObj_Destroy: [["number"], null], FPDFPageObj_GetBounds: [["number", "number", "number", "number", "number"], "boolean"], FPDFPageObj_GetClipPath: [["number"], "number"], FPDFPageObj_GetDashArray: [["number", "number", "number"], "boolean"], FPDFPageObj_GetDashCount: [["number"], "number"], FPDFPageObj_GetDashPhase: [["number", "number"], "boolean"], FPDFPageObj_GetFillColor: [["number", "number", "number", "number", "number"], "boolean"], FPDFPageObj_GetIsActive: [["number", "number"], "boolean"], FPDFPageObj_GetLineCap: [["number"], "number"], FPDFPageObj_GetLineJoin: [["number"], "number"], FPDFPageObj_GetMark: [["number", "number"], "number"], FPDFPageObj_GetMarkedContentID: [["number"], "number"], FPDFPageObj_GetMatrix: [["number", "number"], "boolean"], FPDFPageObj_GetRotatedBounds: [["number", "number"], "boolean"], FPDFPageObj_GetStrokeColor: [["number", "number", "number", "number", "number"], "boolean"], FPDFPageObj_GetStrokeWidth: [["number", "number"], "boolean"], FPDFPageObj_GetType: [["number"], "number"], FPDFPageObj_HasTransparency: [["number"], "boolean"], FPDFPageObj_NewImageObj: [["number"], "number"], FPDFPageObj_NewTextObj: [["number", "string", "number"], "number"], FPDFPageObj_RemoveMark: [["number", "number"], "boolean"], FPDFPageObj_SetBlendMode: [["number", "string"], null], FPDFPageObj_SetDashArray: [["number", "number", "number", "number"], "boolean"], FPDFPageObj_SetDashPhase: [["number", "number"], "boolean"], FPDFPageObj_SetFillColor: [["number", "number", "number", "number", "number"], "boolean"], FPDFPageObj_SetIsActive: [["number", "boolean"], "boolean"], FPDFPageObj_SetLineCap: [["number", "number"], "boolean"], FPDFPageObj_SetLineJoin: [["number", "number"], "boolean"], FPDFPageObj_SetMatrix: [["number", "number"], "boolean"], FPDFPageObj_SetStrokeColor: [["number", "number", "number", "number", "number"], "boolean"], FPDFPageObj_SetStrokeWidth: [["number", "number"], "boolean"], FPDFPageObj_Transform: [["number", "number", "number", "number", "number", "number", "number"], null], FPDFPageObj_TransformClipPath: [["number", "number", "number", "number", "number", "number", "number"], null], FPDFPageObj_TransformF: [["number", "number"], "boolean"], FPDFPageObjMark_CountParams: [["number"], "number"], FPDFPageObjMark_GetName: [["number", "number", "number", "number"], "boolean"], FPDFPageObjMark_GetParamBlobValue: [["number", "string", "number", "number", "number"], "boolean"], FPDFPageObjMark_GetParamIntValue: [["number", "string", "number"], "boolean"], FPDFPageObjMark_GetParamKey: [["number", "number", "number", "number", "number"], "boolean"], FPDFPageObjMark_GetParamStringValue: [["number", "string", "number", "number", "number"], "boolean"], FPDFPageObjMark_GetParamValueType: [["number", "string"], "number"], FPDFPageObjMark_RemoveParam: [["number", "number", "string"], "boolean"], FPDFPageObjMark_SetBlobParam: [["number", "number", "number", "string", "number", "number"], "boolean"], FPDFPageObjMark_SetIntParam: [["number", "number", "number", "string", "number"], "boolean"], FPDFPageObjMark_SetStringParam: [["number", "number", "number", "string", "string"], "boolean"], FPDFPath_BezierTo: [["number", "number", "number", "number", "number", "number", "number"], "boolean"], FPDFPath_Close: [["number"], "boolean"], FPDFPath_CountSegments: [["number"], "number"], FPDFPath_GetDrawMode: [["number", "number", "number"], "boolean"], FPDFPath_GetPathSegment: [["number", "number"], "number"], FPDFPath_LineTo: [["number", "number", "number"], "boolean"], FPDFPath_MoveTo: [["number", "number", "number"], "boolean"], FPDFPath_SetDrawMode: [["number", "number", "boolean"], "boolean"], FPDFPathSegment_GetClose: [["number"], "boolean"], FPDFPathSegment_GetPoint: [["number", "number", "number"], "boolean"], FPDFPathSegment_GetType: [["number"], "number"], FPDFSignatureObj_GetByteRange: [["number", "number", "number"], "number"], FPDFSignatureObj_GetContents: [["number", "number", "number"], "number"], FPDFSignatureObj_GetDocMDPPermission: [["number"], "number"], FPDFSignatureObj_GetReason: [["number", "number", "number"], "number"], FPDFSignatureObj_GetSubFilter: [["number", "number", "number"], "number"], FPDFSignatureObj_GetTime: [["number", "number", "number"], "number"], FPDFText_ClosePage: [["number"], null], FPDFText_CountChars: [["number"], "number"], FPDFText_CountRects: [["number", "number", "number"], "number"], FPDFText_FindClose: [["number"], null], FPDFText_FindNext: [["number"], "boolean"], FPDFText_FindPrev: [["number"], "boolean"], FPDFText_FindStart: [["number", "number", "number", "number"], "number"], FPDFText_GetBoundedText: [["number", "number", "number", "number", "number", "number", "number"], "number"], FPDFText_GetCharAngle: [["number", "number"], "number"], FPDFText_GetCharBox: [["number", "number", "number", "number", "number", "number"], "boolean"], FPDFText_GetCharIndexAtPos: [["number", "number", "number", "number", "number"], "number"], FPDFText_GetCharIndexFromTextIndex: [["number", "number"], "number"], FPDFText_GetCharOrigin: [["number", "number", "number", "number"], "boolean"], FPDFText_GetFillColor: [["number", "number", "number", "number", "number", "number"], "boolean"], FPDFText_GetFontInfo: [["number", "number", "number", "number", "number"], "number"], FPDFText_GetFontSize: [["number", "number"], "number"], FPDFText_GetFontWeight: [["number", "number"], "number"], FPDFText_GetLooseCharBox: [["number", "number", "number"], "boolean"], FPDFText_GetMatrix: [["number", "number", "number"], "boolean"], FPDFText_GetRect: [["number", "number", "number", "number", "number", "number"], "boolean"], FPDFText_GetSchCount: [["number"], "number"], FPDFText_GetSchResultIndex: [["number"], "number"], FPDFText_GetStrokeColor: [["number", "number", "number", "number", "number", "number"], "boolean"], FPDFText_GetText: [["number", "number", "number", "number"], "number"], FPDFText_GetTextIndexFromCharIndex: [["number", "number"], "number"], FPDFText_GetTextObject: [["number", "number"], "number"], FPDFText_GetUnicode: [["number", "number"], "number"], FPDFText_HasUnicodeMapError: [["number", "number"], "number"], FPDFText_IsGenerated: [["number", "number"], "number"], FPDFText_IsHyphen: [["number", "number"], "number"], FPDFText_LoadCidType2Font: [["number", "number", "number", "string", "number", "number"], "number"], FPDFText_LoadFont: [["number", "number", "number", "number", "boolean"], "number"], FPDFText_LoadPage: [["number"], "number"], FPDFText_LoadStandardFont: [["number", "string"], "number"], FPDFText_SetCharcodes: [["number", "number", "number"], "boolean"], FPDFText_SetText: [["number", "number"], "boolean"], FPDFTextObj_GetFont: [["number"], "number"], FPDFTextObj_GetFontSize: [["number", "number"], "boolean"], FPDFTextObj_GetRenderedBitmap: [["number", "number", "number", "number"], "number"], FPDFTextObj_GetText: [["number", "number", "number", "number"], "number"], FPDFTextObj_GetTextRenderMode: [["number"], "number"], FPDFTextObj_SetTextRenderMode: [["number", "number"], "boolean"], PDFiumExt_CloseFileWriter: [["number"], null], PDFiumExt_CloseFormFillInfo: [["number"], null], PDFiumExt_ExitFormFillEnvironment: [["number"], null], PDFiumExt_GetFileWriterData: [["number", "number", "number"], "number"], PDFiumExt_GetFileWriterSize: [["number"], "number"], PDFiumExt_Init: [[], null], PDFiumExt_InitFormFillEnvironment: [["number", "number"], "number"], PDFiumExt_OpenFileWriter: [[], "number"], PDFiumExt_OpenFormFillInfo: [[], "number"], PDFiumExt_SaveAsCopy: [["number", "number"], "number"] };
    w = class {
      constructor(e5) {
        this.pdfium = e5, this.docs = /* @__PURE__ */ new Map();
      }
      setDocument(e5, t3, n3) {
        let r4 = this.docs.get(e5);
        r4 || (r4 = new R(t3, n3, this.pdfium), this.docs.set(e5, r4));
      }
      getContext(e5) {
        return this.docs.get(e5);
      }
      closeDocument(e5) {
        const t3 = this.docs.get(e5);
        return !!t3 && (t3.dispose(), this.docs.delete(e5), true);
      }
    };
    R = class {
      constructor(e5, t3, n3) {
        this.filePtr = e5, this.docPtr = t3, this.pageCache = new I(n3, t3);
      }
      acquirePage(e5) {
        return this.pageCache.acquire(e5);
      }
      dispose() {
        this.pageCache.forceReleaseAll(), this.pageCache.pdf.FPDF_CloseDocument(this.docPtr), this.pageCache.pdf.pdfium.wasmExports.free(this.filePtr);
      }
    };
    I = class {
      constructor(e5, t3) {
        this.pdf = e5, this.docPtr = t3, this.cache = /* @__PURE__ */ new Map();
      }
      acquire(e5) {
        let t3 = this.cache.get(e5);
        if (!t3) {
          const n3 = this.pdf.FPDF_LoadPage(this.docPtr, e5);
          t3 = new k(this.pdf, this.docPtr, e5, n3, () => {
            this.cache.delete(e5);
          }), this.cache.set(e5, t3);
        }
        return t3.clearExpiryTimer(), t3.bumpRefCount(), t3;
      }
      forceReleaseAll() {
        for (const e5 of this.cache.values()) e5.disposeImmediate();
        this.cache.clear();
      }
    };
    k = class {
      constructor(e5, t3, n3, r4, o3) {
        this.pdf = e5, this.docPtr = t3, this.pageIdx = n3, this.pagePtr = r4, this.onFinalDispose = o3, this.refCount = 0, this.disposed = false;
      }
      bumpRefCount() {
        if (this.disposed) throw new Error("Context already disposed");
        this.refCount++;
      }
      clearExpiryTimer() {
        this.expiryTimer && (clearTimeout(this.expiryTimer), this.expiryTimer = void 0);
      }
      release() {
        this.disposed || (this.refCount--, 0 === this.refCount && (this.expiryTimer = setTimeout(() => this.disposeImmediate(), 5e3)));
      }
      disposeImmediate() {
        this.disposed || (this.disposed = true, void 0 !== this.textPagePtr && this.pdf.FPDFText_ClosePage(this.textPagePtr), void 0 !== this.formHandle && (this.pdf.FORM_OnBeforeClosePage(this.pagePtr, this.formHandle), this.pdf.PDFiumExt_ExitFormFillEnvironment(this.formHandle)), void 0 !== this.formInfoPtr && this.pdf.PDFiumExt_CloseFormFillInfo(this.formInfoPtr), this.pdf.FPDF_ClosePage(this.pagePtr), this.onFinalDispose());
      }
      getTextPage() {
        return this.ensureAlive(), void 0 === this.textPagePtr && (this.textPagePtr = this.pdf.FPDFText_LoadPage(this.pagePtr)), this.textPagePtr;
      }
      getFormHandle() {
        return this.ensureAlive(), void 0 === this.formHandle && (this.formInfoPtr = this.pdf.PDFiumExt_OpenFormFillInfo(), this.formHandle = this.pdf.PDFiumExt_InitFormFillEnvironment(this.docPtr, this.formInfoPtr), this.pdf.FORM_OnAfterLoadPage(this.pagePtr, this.formHandle)), this.formHandle;
      }
      withAnnotation(e5, t3) {
        this.ensureAlive();
        const n3 = this.pdf.FPDFPage_GetAnnot(this.pagePtr, e5);
        try {
          return t3(n3);
        } finally {
          this.pdf.FPDFPage_CloseAnnot(n3);
        }
      }
      ensureAlive() {
        if (this.disposed) throw new Error("PageContext already disposed");
      }
    };
    !function(e5) {
      e5[e5.Bitmap_Gray = 1] = "Bitmap_Gray", e5[e5.Bitmap_BGR = 2] = "Bitmap_BGR", e5[e5.Bitmap_BGRx = 3] = "Bitmap_BGRx", e5[e5.Bitmap_BGRA = 4] = "Bitmap_BGRA";
    }(j || (j = {})), function(e5) {
      e5[e5.ANNOT = 1] = "ANNOT", e5[e5.LCD_TEXT = 2] = "LCD_TEXT", e5[e5.NO_NATIVETEXT = 4] = "NO_NATIVETEXT", e5[e5.GRAYSCALE = 8] = "GRAYSCALE", e5[e5.DEBUG_INFO = 128] = "DEBUG_INFO", e5[e5.NO_CATCH = 256] = "NO_CATCH", e5[e5.RENDER_LIMITEDIMAGECACHE = 512] = "RENDER_LIMITEDIMAGECACHE", e5[e5.RENDER_FORCEHALFTONE = 1024] = "RENDER_FORCEHALFTONE", e5[e5.PRINTING = 2048] = "PRINTING", e5[e5.REVERSE_BYTE_ORDER = 16] = "REVERSE_BYTE_ORDER";
    }(B || (B = {}));
    L = "PDFiumEngine";
    N = "Engine";
    !function(e5) {
      e5[e5.Success = 0] = "Success", e5[e5.Unknown = 1] = "Unknown", e5[e5.File = 2] = "File", e5[e5.Format = 3] = "Format", e5[e5.Password = 4] = "Password", e5[e5.Security = 5] = "Security", e5[e5.Page = 6] = "Page", e5[e5.XFALoad = 7] = "XFALoad", e5[e5.XFALayout = 8] = "XFALayout";
    }(V || (V = {}));
    U = (e5, t3 = "image/webp") => {
      if ("undefined" == typeof OffscreenCanvas) throw new Error("OffscreenCanvas is not available in this environment. This converter is intended for browser use only. Please use createNodeImageDataToBlobConverter() or createNodeCanvasImageDataToBlobConverter() for Node.js.");
      const n3 = new ImageData(e5.data, e5.width, e5.height), r4 = new OffscreenCanvas(n3.width, n3.height);
      return r4.getContext("2d").putImageData(n3, 0, 0), r4.convertToBlob({ type: t3 });
    };
    W = class {
      constructor(t3, n3 = new tt(), r4 = U) {
        this.pdfiumModule = t3, this.logger = n3, this.imageDataConverter = r4, this.cache = new w(this.pdfiumModule);
      }
      initialize() {
        return this.logger.debug(L, N, "initialize"), this.logger.perf(L, N, "Initialize", "Begin", "General"), this.pdfiumModule.PDFiumExt_Init(), this.logger.perf(L, N, "Initialize", "End", "General"), wt.resolve(true);
      }
      destroy() {
        return this.logger.debug(L, N, "destroy"), this.logger.perf(L, N, "Destroy", "Begin", "General"), this.pdfiumModule.FPDF_DestroyLibrary(), this.logger.perf(L, N, "Destroy", "End", "General"), wt.resolve(true);
      }
      openDocumentUrl(e5, r4) {
        const o3 = r4?.mode ?? "auto", i4 = r4?.password ?? "";
        this.logger.debug(L, N, "openDocumentUrl called", e5.url, o3);
        const a3 = wt.create();
        return (async () => {
          try {
            if ("full-fetch" === o3) {
              (await this.fetchFullAndOpen(e5, i4)).wait((e6) => a3.resolve(e6), (e6) => a3.reject(e6.reason));
            } else if ("range-request" === o3) {
              (await this.openDocumentWithRangeRequest(e5, i4)).wait((e6) => a3.resolve(e6), (e6) => a3.reject(e6.reason));
            } else {
              const { supportsRanges: t3, fileLength: n3, content: r5 } = await this.checkRangeSupport(e5.url);
              if (t3) {
                (await this.openDocumentWithRangeRequest(e5, i4, n3)).wait((e6) => a3.resolve(e6), (e6) => a3.reject(e6.reason));
              } else if (r5) {
                const t4 = { id: e5.id, content: r5 };
                this.openDocumentFromBuffer(t4, i4).wait((e6) => a3.resolve(e6), (e6) => a3.reject(e6.reason));
              } else {
                (await this.fetchFullAndOpen(e5, i4)).wait((e6) => a3.resolve(e6), (e6) => a3.reject(e6.reason));
              }
            }
          } catch (e6) {
            this.logger.error(L, N, "openDocumentUrl error", e6), a3.reject({ code: bt.Unknown, message: String(e6) });
          }
        })(), a3;
      }
      async checkRangeSupport(e5) {
        try {
          this.logger.debug(L, N, "checkRangeSupport", e5);
          const t3 = await fetch(e5, { method: "HEAD" }), n3 = t3.headers.get("Content-Length");
          if ("bytes" === t3.headers.get("Accept-Ranges")) return { supportsRanges: true, fileLength: parseInt(n3 ?? "0"), content: null };
          const r4 = await fetch(e5, { headers: { Range: "bytes=0-1" } });
          if (200 === r4.status) {
            const e6 = await r4.arrayBuffer();
            return { supportsRanges: false, fileLength: parseInt(n3 ?? "0"), content: e6 };
          }
          return { supportsRanges: 206 === r4.status, fileLength: parseInt(n3 ?? "0"), content: null };
        } catch (e6) {
          throw this.logger.error(L, N, "checkRangeSupport failed", e6), new Error("Failed to check range support: " + e6);
        }
      }
      async fetchFullAndOpen(e5, t3) {
        this.logger.debug(L, N, "fetchFullAndOpen", e5.url);
        const n3 = await fetch(e5.url);
        if (!n3.ok) throw new Error(`Could not fetch PDF: ${n3.statusText}`);
        const r4 = await n3.arrayBuffer(), o3 = { id: e5.id, content: r4 };
        return this.openDocumentFromBuffer(o3, t3);
      }
      async openDocumentWithRangeRequest(e5, t3, n3) {
        this.logger.debug(L, N, "openDocumentWithRangeRequest", e5.url);
        const r4 = n3 ?? (await this.retrieveFileLength(e5.url)).fileLength;
        return this.openDocumentFromLoader({ id: e5.id, fileLength: r4, callback: (t4, n4) => {
          const r5 = new XMLHttpRequest();
          if (r5.open("GET", e5.url, false), r5.overrideMimeType("text/plain; charset=x-user-defined"), r5.setRequestHeader("Range", `bytes=${t4}-${t4 + n4 - 1}`), r5.send(null), 206 === r5.status || 200 === r5.status) return this.convertResponseToUint8Array(r5.responseText);
          throw new Error(`Range request failed with status ${r5.status}`);
        } }, t3);
      }
      async retrieveFileLength(e5) {
        this.logger.debug(L, N, "retrieveFileLength", e5);
        const t3 = await fetch(e5, { method: "HEAD" });
        if (!t3.ok) throw new Error(`Failed HEAD request for file length: ${t3.statusText}`);
        const n3 = t3.headers.get("Content-Length") || "0", r4 = parseInt(n3, 10) || 0;
        if (!r4) throw new Error("Content-Length not found or zero.");
        return { fileLength: r4 };
      }
      convertResponseToUint8Array(e5) {
        const t3 = new Uint8Array(e5.length);
        for (let n3 = 0; n3 < e5.length; n3++) t3[n3] = 255 & e5.charCodeAt(n3);
        return t3;
      }
      openDocumentFromBuffer(e5, n3 = "") {
        this.logger.debug(L, N, "openDocumentFromBuffer", e5, n3), this.logger.perf(L, N, "OpenDocumentFromBuffer", "Begin", e5.id);
        const r4 = new Uint8Array(e5.content), o3 = r4.length, i4 = this.malloc(o3);
        this.pdfiumModule.pdfium.HEAPU8.set(r4, i4);
        const a3 = this.pdfiumModule.FPDF_LoadMemDocument(i4, o3, n3);
        if (!a3) {
          const n4 = this.pdfiumModule.FPDF_GetLastError();
          return this.logger.error(L, N, `FPDF_LoadMemDocument failed with ${n4}`), this.free(i4), this.logger.perf(L, N, "OpenDocumentFromBuffer", "End", e5.id), wt.reject({ code: n4, message: "FPDF_LoadMemDocument failed" });
        }
        const F2 = this.pdfiumModule.FPDF_GetPageCount(a3), s3 = [], u2 = this.malloc(8);
        for (let n4 = 0; n4 < F2; n4++) {
          if (!this.pdfiumModule.FPDF_GetPageSizeByIndexF(a3, n4, u2)) {
            const n5 = this.pdfiumModule.FPDF_GetLastError();
            return this.logger.error(L, N, `FPDF_GetPageSizeByIndexF failed with ${n5}`), this.free(u2), this.pdfiumModule.FPDF_CloseDocument(a3), this.free(i4), this.logger.perf(L, N, "OpenDocumentFromBuffer", "End", e5.id), wt.reject({ code: n5, message: "FPDF_GetPageSizeByIndexF failed" });
          }
          const r5 = { index: n4, size: { width: this.pdfiumModule.pdfium.getValue(u2, "float"), height: this.pdfiumModule.pdfium.getValue(u2 + 4, "float") } };
          s3.push(r5);
        }
        this.free(u2);
        const m2 = { id: e5.id, pageCount: F2, pages: s3 };
        return this.cache.setDocument(e5.id, i4, a3), this.logger.perf(L, N, "OpenDocumentFromBuffer", "End", e5.id), wt.resolve(m2);
      }
      openDocumentFromLoader(e5, n3 = "") {
        const { fileLength: r4, callback: o3, ...i4 } = e5;
        this.logger.debug(L, N, "openDocumentFromLoader", i4, n3), this.logger.perf(L, N, "OpenDocumentFromLoader", "Begin", i4.id);
        const a3 = this.pdfiumModule.pdfium.addFunction((e6, t3, n4, i5) => {
          try {
            if (this.logger.debug(L, N, "readBlock", t3, i5, n4), t3 < 0 || t3 >= r4) return this.logger.error(L, N, "Offset out of bounds:", t3), 0;
            const e7 = o3(t3, i5);
            return new Uint8Array(this.pdfiumModule.pdfium.HEAPU8.buffer, n4, e7.length).set(e7), e7.length;
          } catch (e7) {
            return this.logger.error(L, N, "ReadBlock error:", e7), 0;
          }
        }, "iiiii"), F2 = this.malloc(12);
        this.pdfiumModule.pdfium.setValue(F2, r4, "i32"), this.pdfiumModule.pdfium.setValue(F2 + 4, a3, "i32"), this.pdfiumModule.pdfium.setValue(F2 + 8, 0, "i32");
        const s3 = this.pdfiumModule.FPDF_LoadCustomDocument(F2, n3);
        if (!s3) {
          const e6 = this.pdfiumModule.FPDF_GetLastError();
          return this.logger.error(L, N, `FPDF_LoadCustomDocument failed with ${e6}`), this.free(F2), this.logger.perf(L, N, "OpenDocumentFromLoader", "End", i4.id), wt.reject({ code: e6, message: "FPDF_LoadCustomDocument failed" });
        }
        const u2 = this.pdfiumModule.FPDF_GetPageCount(s3), m2 = [], l2 = this.malloc(8);
        for (let e6 = 0; e6 < u2; e6++) {
          if (!this.pdfiumModule.FPDF_GetPageSizeByIndexF(s3, e6, l2)) {
            const e7 = this.pdfiumModule.FPDF_GetLastError();
            return this.logger.error(L, N, `FPDF_GetPageSizeByIndexF failed with ${e7}`), this.free(l2), this.pdfiumModule.FPDF_CloseDocument(s3), this.free(F2), this.logger.perf(L, N, "OpenDocumentFromLoader", "End", i4.id), wt.reject({ code: e7, message: "FPDF_GetPageSizeByIndexF failed" });
          }
          const n4 = { index: e6, size: { width: this.pdfiumModule.pdfium.getValue(l2, "float"), height: this.pdfiumModule.pdfium.getValue(l2 + 4, "float") } };
          m2.push(n4);
        }
        this.free(l2);
        const d2 = { id: i4.id, pageCount: u2, pages: m2 };
        return this.cache.setDocument(i4.id, F2, s3), this.logger.perf(L, N, "OpenDocumentFromLoader", "End", i4.id), wt.resolve(d2);
      }
      getMetadata(e5) {
        this.logger.debug(L, N, "getMetadata", e5), this.logger.perf(L, N, "GetMetadata", "Begin", e5.id);
        const r4 = this.cache.getContext(e5.id);
        if (!r4) return this.logger.perf(L, N, "GetMetadata", "End", e5.id), wt.reject({ code: bt.DocNotOpen, message: "document does not open" });
        const o3 = { title: this.readMetaText(r4.docPtr, "Title"), author: this.readMetaText(r4.docPtr, "Author"), subject: this.readMetaText(r4.docPtr, "Subject"), keywords: this.readMetaText(r4.docPtr, "Keywords"), producer: this.readMetaText(r4.docPtr, "Producer"), creator: this.readMetaText(r4.docPtr, "Creator"), creationDate: this.readMetaText(r4.docPtr, "CreationDate"), modificationDate: this.readMetaText(r4.docPtr, "ModDate") };
        return this.logger.perf(L, N, "GetMetadata", "End", e5.id), wt.resolve(o3);
      }
      getDocPermissions(e5) {
        this.logger.debug(L, N, "getDocPermissions", e5), this.logger.perf(L, N, "getDocPermissions", "Begin", e5.id);
        const r4 = this.cache.getContext(e5.id);
        if (!r4) return this.logger.perf(L, N, "getDocPermissions", "End", e5.id), wt.reject({ code: bt.DocNotOpen, message: "document does not open" });
        const o3 = this.pdfiumModule.FPDF_GetDocPermissions(r4.docPtr);
        return wt.resolve(o3);
      }
      getDocUserPermissions(e5) {
        this.logger.debug(L, N, "getDocUserPermissions", e5), this.logger.perf(L, N, "getDocUserPermissions", "Begin", e5.id);
        const r4 = this.cache.getContext(e5.id);
        if (!r4) return this.logger.perf(L, N, "getDocUserPermissions", "End", e5.id), wt.reject({ code: bt.DocNotOpen, message: "document does not open" });
        const o3 = this.pdfiumModule.FPDF_GetDocUserPermissions(r4.docPtr);
        return wt.resolve(o3);
      }
      getSignatures(e5) {
        this.logger.debug(L, N, "getSignatures", e5), this.logger.perf(L, N, "GetSignatures", "Begin", e5.id);
        const r4 = this.cache.getContext(e5.id);
        if (!r4) return this.logger.perf(L, N, "GetSignatures", "End", e5.id), wt.reject({ code: bt.DocNotOpen, message: "document does not open" });
        const o3 = [], i4 = this.pdfiumModule.FPDF_GetSignatureCount(r4.docPtr);
        for (let e6 = 0; e6 < i4; e6++) {
          const t3 = this.pdfiumModule.FPDF_GetSignatureObject(r4.docPtr, e6), n3 = v(this.pdfiumModule.pdfium, (e7, n4) => this.pdfiumModule.FPDFSignatureObj_GetContents(t3, e7, n4)), i5 = v(this.pdfiumModule.pdfium, (e7, n4) => 4 * this.pdfiumModule.FPDFSignatureObj_GetByteRange(t3, e7, n4)), a3 = v(this.pdfiumModule.pdfium, (e7, n4) => this.pdfiumModule.FPDFSignatureObj_GetSubFilter(t3, e7, n4)), F2 = x(this.pdfiumModule.pdfium, (e7, n4) => this.pdfiumModule.FPDFSignatureObj_GetReason(t3, e7, n4), this.pdfiumModule.pdfium.UTF16ToString), s3 = x(this.pdfiumModule.pdfium, (e7, n4) => this.pdfiumModule.FPDFSignatureObj_GetTime(t3, e7, n4), this.pdfiumModule.pdfium.UTF8ToString), u2 = this.pdfiumModule.FPDFSignatureObj_GetDocMDPPermission(t3);
          o3.push({ contents: n3, byteRange: i5, subFilter: a3, reason: F2, time: s3, docMDP: u2 });
        }
        return this.logger.perf(L, N, "GetSignatures", "End", e5.id), wt.resolve(o3);
      }
      getBookmarks(e5) {
        this.logger.debug(L, N, "getBookmarks", e5), this.logger.perf(L, N, "GetBookmarks", "Begin", e5.id);
        const r4 = this.cache.getContext(e5.id);
        if (!r4) return this.logger.perf(L, N, "getBookmarks", "End", e5.id), wt.reject({ code: bt.DocNotOpen, message: "document does not open" });
        const o3 = this.readPdfBookmarks(r4.docPtr, 0);
        return this.logger.perf(L, N, "GetBookmarks", "End", e5.id), wt.resolve({ bookmarks: o3 });
      }
      renderPage(e5, o3, i4 = 1, a3 = Ue.Degree0, F2 = 1, s3 = { withAnnotations: false }, u2 = "image/webp") {
        const m2 = new it();
        this.logger.debug(L, N, "renderPage", e5, o3, i4, a3, F2, s3), this.logger.perf(L, N, "RenderPage", "Begin", `${e5.id}-${o3.index}`);
        const l2 = this.cache.getContext(e5.id);
        if (!l2) return this.logger.perf(L, N, "RenderPage", "End", `${e5.id}-${o3.index}`), wt.reject({ code: bt.DocNotOpen, message: "document does not open" });
        const d2 = this.renderPageRectToImageData(l2, o3, { origin: { x: 0, y: 0 }, size: o3.size }, i4, a3, F2, s3);
        return this.logger.perf(L, N, "RenderPage", "End", `${e5.id}-${o3.index}`), this.imageDataConverter(d2, u2).then((e6) => m2.resolve(e6)), m2;
      }
      renderPageRect(e5, r4, o3, i4, a3, F2, s3, u2 = "image/webp") {
        const m2 = new it();
        this.logger.debug(L, N, "renderPageRect", e5, r4, o3, i4, a3, F2, s3), this.logger.perf(L, N, "RenderPageRect", "Begin", `${e5.id}-${r4.index}`);
        const l2 = this.cache.getContext(e5.id);
        if (!l2) return this.logger.perf(L, N, "RenderPageRect", "End", `${e5.id}-${r4.index}`), wt.reject({ code: bt.DocNotOpen, message: "document does not open" });
        const d2 = this.renderPageRectToImageData(l2, r4, F2, o3, i4, a3, s3);
        return this.logger.perf(L, N, "RenderPageRect", "End", `${e5.id}-${r4.index}`), this.imageDataConverter(d2, u2).then((e6) => m2.resolve(e6)), m2;
      }
      getAllAnnotations(e5) {
        this.logger.debug(L, N, "getAllAnnotations", e5), this.logger.perf(L, N, "GetAllAnnotations", "Begin", e5.id);
        const r4 = this.cache.getContext(e5.id);
        if (!r4) return this.logger.perf(L, N, "GetAllAnnotations", "End", e5.id), wt.reject({ code: bt.DocNotOpen, message: "document does not open" });
        const o3 = this.readAllAnnotations(e5, r4);
        return this.logger.perf(L, N, "GetAllAnnotations", "End", e5.id), wt.resolve(o3);
      }
      readAllAnnotations(e5, t3) {
        const n3 = {};
        for (let r4 = 0; r4 < e5.pageCount; r4++) {
          const o3 = this.readPageAnnotations(t3, e5.pages[r4]);
          n3[r4] = o3;
        }
        return n3;
      }
      getPageAnnotations(e5, r4) {
        this.logger.debug(L, N, "getPageAnnotations", e5, r4), this.logger.perf(L, N, "GetPageAnnotations", "Begin", `${e5.id}-${r4.index}`);
        const o3 = this.cache.getContext(e5.id);
        if (!o3) return this.logger.perf(L, N, "GetPageAnnotations", "End", `${e5.id}-${r4.index}`), wt.reject({ code: bt.DocNotOpen, message: "document does not open" });
        const i4 = this.readPageAnnotations(o3, r4);
        return this.logger.perf(L, N, "GetPageAnnotations", "End", `${e5.id}-${r4.index}`), this.logger.debug(L, N, "GetPageAnnotations", `${e5.id}-${r4.index}`, i4), wt.resolve(i4);
      }
      createPageAnnotation(e5, r4, i4) {
        this.logger.debug(L, N, "createPageAnnotation", e5, r4, i4), this.logger.perf(L, N, "CreatePageAnnotation", "Begin", `${e5.id}-${r4.index}`);
        const a3 = this.cache.getContext(e5.id);
        if (!a3) return this.logger.perf(L, N, "CreatePageAnnotation", "End", `${e5.id}-${r4.index}`), wt.reject({ code: bt.DocNotOpen, message: "document does not open" });
        const F2 = a3.acquirePage(r4.index), s3 = this.pdfiumModule.FPDFPage_CreateAnnot(F2.pagePtr, i4.type);
        if (!s3) return this.logger.perf(L, N, "CreatePageAnnotation", "End", `${e5.id}-${r4.index}`), F2.release(), wt.reject({ code: bt.CantCreateAnnot, message: "can not create annotation with specified type" });
        if (!this.setPageAnnoRect(r4, F2.pagePtr, s3, i4.rect)) return this.pdfiumModule.FPDFPage_CloseAnnot(s3), F2.release(), this.logger.perf(L, N, "CreatePageAnnotation", "End", `${e5.id}-${r4.index}`), wt.reject({ code: bt.CantSetAnnotRect, message: "can not set the rect of the annotation" });
        let u2 = false;
        switch (i4.type) {
          case dt.INK:
            u2 = this.addInkStroke(r4, F2.pagePtr, s3, i4);
            break;
          case dt.STAMP:
            u2 = this.addStampContent(a3.docPtr, r4, F2.pagePtr, s3, i4.rect, i4.contents);
            break;
          case dt.UNDERLINE:
          case dt.STRIKEOUT:
          case dt.SQUIGGLY:
          case dt.HIGHLIGHT:
            u2 = this.addTextMarkupContent(r4, F2.pagePtr, s3, i4);
        }
        if (!u2) return this.pdfiumModule.FPDFPage_RemoveAnnot(F2.pagePtr, s3), F2.release(), this.logger.perf(L, N, "CreatePageAnnotation", "End", `${e5.id}-${r4.index}`), wt.reject({ code: bt.CantSetAnnotContent, message: "can not add content of the annotation" });
        this.pdfiumModule.EPDFAnnot_GenerateAppearance(s3), this.pdfiumModule.FPDFPage_GenerateContent(F2.pagePtr);
        const m2 = this.pdfiumModule.FPDFPage_GetAnnotIndex(F2.pagePtr, s3);
        return this.pdfiumModule.FPDFPage_CloseAnnot(s3), F2.release(), this.logger.perf(L, N, "CreatePageAnnotation", "End", `${e5.id}-${r4.index}`), m2 >= 0 ? wt.resolve(m2) : wt.reject({ code: bt.CantCreateAnnot, message: "annotation created but index could not be determined" });
      }
      updatePageAnnotation(e5, r4, i4) {
        this.logger.debug(L, N, "updatePageAnnotation", e5, r4, i4), this.logger.perf(L, N, "UpdatePageAnnotation", "Begin", `${e5.id}-${r4.index}`);
        const a3 = this.cache.getContext(e5.id);
        if (!a3) return this.logger.perf(L, N, "UpdatePageAnnotation", "End", `${e5.id}-${r4.index}`), wt.reject({ code: bt.DocNotOpen, message: "document does not open" });
        const F2 = a3.acquirePage(r4.index), s3 = this.pdfiumModule.FPDFPage_GetAnnot(F2.pagePtr, i4.id);
        if (!s3) return F2.release(), this.logger.perf(L, N, "UpdatePageAnnotation", "End", `${e5.id}-${r4.index}`), wt.reject({ code: bt.NotFound, message: "annotation not found" });
        if (!this.setPageAnnoRect(r4, F2.pagePtr, s3, i4.rect)) return this.pdfiumModule.FPDFPage_CloseAnnot(s3), F2.release(), this.logger.perf(L, N, "UpdatePageAnnotation", "End", `${e5.id}-${r4.index}`), wt.reject({ code: bt.CantSetAnnotRect, message: "failed to move annotation" });
        let u2 = false;
        switch (i4.type) {
          case dt.INK:
            if (!this.pdfiumModule.FPDFAnnot_RemoveInkList(s3)) break;
            u2 = this.addInkStroke(r4, F2.pagePtr, s3, i4);
            break;
          case dt.STAMP:
            for (let e6 = this.pdfiumModule.FPDFAnnot_GetObjectCount(s3) - 1; e6 >= 0; e6--) this.pdfiumModule.FPDFAnnot_RemoveObject(s3, e6);
            u2 = this.addStampContent(a3.docPtr, r4, F2.pagePtr, s3, i4.rect, i4.contents);
            break;
          case dt.HIGHLIGHT:
          case dt.UNDERLINE:
          case dt.STRIKEOUT:
          case dt.SQUIGGLY:
            u2 = this.addTextMarkupContent(r4, F2.pagePtr, s3, i4);
            break;
          default:
            u2 = false;
        }
        return u2 && (this.pdfiumModule.EPDFAnnot_GenerateAppearance(s3), this.pdfiumModule.FPDFPage_GenerateContent(F2.pagePtr)), this.pdfiumModule.FPDFPage_CloseAnnot(s3), F2.release(), this.logger.perf(L, N, "UpdatePageAnnotation", "End", `${e5.id}-${r4.index}`), u2 ? wt.resolve(true) : wt.reject({ code: bt.CantSetAnnotContent, message: "failed to update annotation" });
      }
      removePageAnnotation(e5, r4, o3) {
        this.logger.debug(L, N, "removePageAnnotation", e5, r4, o3), this.logger.perf(L, N, "RemovePageAnnotation", "Begin", `${e5.id}-${r4.index}`);
        const i4 = this.cache.getContext(e5.id);
        if (!i4) return this.logger.perf(L, N, "RemovePageAnnotation", "End", `${e5.id}-${r4.index}`), wt.reject({ code: bt.DocNotOpen, message: "document does not open" });
        const a3 = i4.acquirePage(r4.index);
        let F2 = false;
        return F2 = this.pdfiumModule.FPDFPage_RemoveAnnot(a3.pagePtr, o3.id), F2 ? (F2 = this.pdfiumModule.FPDFPage_GenerateContent(a3.pagePtr), F2 || this.logger.error(L, N, "FPDFPage_GenerateContent Failed", `${e5.id}-${r4.index}`)) : this.logger.error(L, N, "FPDFPage_RemoveAnnot Failed", `${e5.id}-${r4.index}`), a3.release(), this.logger.perf(L, N, "RemovePageAnnotation", "End", `${e5.id}-${r4.index}`), wt.resolve(F2);
      }
      getPageTextRects(e5, r4, o3, i4) {
        this.logger.debug(L, N, "getPageTextRects", e5, r4, o3, i4), this.logger.perf(L, N, "GetPageTextRects", "Begin", `${e5.id}-${r4.index}`);
        const a3 = this.cache.getContext(e5.id);
        if (!a3) return this.logger.perf(L, N, "GetPageTextRects", "End", `${e5.id}-${r4.index}`), wt.reject({ code: bt.DocNotOpen, message: "document does not open" });
        const F2 = a3.acquirePage(r4.index), s3 = this.pdfiumModule.FPDFText_LoadPage(F2.pagePtr), u2 = this.readPageTextRects(r4, F2.docPtr, F2.pagePtr, s3);
        return this.pdfiumModule.FPDFText_ClosePage(s3), F2.release(), this.logger.perf(L, N, "GetPageTextRects", "End", `${e5.id}-${r4.index}`), wt.resolve(u2);
      }
      renderThumbnail(e5, r4, o3, i4, a3) {
        this.logger.debug(L, N, "renderThumbnail", e5, r4, o3, i4, a3), this.logger.perf(L, N, "RenderThumbnail", "Begin", `${e5.id}-${r4.index}`);
        if (!this.cache.getContext(e5.id)) return this.logger.perf(L, N, "RenderThumbnail", "End", `${e5.id}-${r4.index}`), wt.reject({ code: bt.DocNotOpen, message: "document does not open" });
        o3 = Math.max(o3, 0.5);
        const F2 = this.renderPage(e5, r4, o3, i4, a3, { withAnnotations: true });
        return this.logger.perf(L, N, "RenderThumbnail", "End", `${e5.id}-${r4.index}`), F2;
      }
      getAttachments(e5) {
        this.logger.debug(L, N, "getAttachments", e5), this.logger.perf(L, N, "GetAttachments", "Begin", e5.id);
        const r4 = this.cache.getContext(e5.id);
        if (!r4) return this.logger.perf(L, N, "GetAttachments", "End", e5.id), wt.reject({ code: bt.DocNotOpen, message: "document does not open" });
        const o3 = [], i4 = this.pdfiumModule.FPDFDoc_GetAttachmentCount(r4.docPtr);
        for (let e6 = 0; e6 < i4; e6++) {
          const t3 = this.readPdfAttachment(r4.docPtr, e6);
          o3.push(t3);
        }
        return this.logger.perf(L, N, "GetAttachments", "End", e5.id), wt.resolve(o3);
      }
      readAttachmentContent(e5, r4) {
        this.logger.debug(L, N, "readAttachmentContent", e5, r4), this.logger.perf(L, N, "ReadAttachmentContent", "Begin", e5.id);
        const o3 = this.cache.getContext(e5.id);
        if (!o3) return this.logger.perf(L, N, "ReadAttachmentContent", "End", e5.id), wt.reject({ code: bt.DocNotOpen, message: "document does not open" });
        const i4 = this.pdfiumModule.FPDFDoc_GetAttachment(o3.docPtr, r4.index), a3 = this.malloc(8);
        if (!this.pdfiumModule.FPDFAttachment_GetFile(i4, 0, 0, a3)) return this.free(a3), this.logger.perf(L, N, "ReadAttachmentContent", "End", e5.id), wt.reject({ code: bt.CantReadAttachmentSize, message: "can not read attachment size" });
        const F2 = this.pdfiumModule.pdfium.getValue(a3, "i64"), s3 = this.malloc(F2);
        if (!this.pdfiumModule.FPDFAttachment_GetFile(i4, s3, F2, a3)) return this.free(a3), this.free(s3), this.logger.perf(L, N, "ReadAttachmentContent", "End", e5.id), wt.reject({ code: bt.CantReadAttachmentContent, message: "can not read attachment content" });
        const u2 = new ArrayBuffer(F2), m2 = new DataView(u2);
        for (let e6 = 0; e6 < F2; e6++) m2.setInt8(e6, this.pdfiumModule.pdfium.getValue(s3 + e6, "i8"));
        return this.free(a3), this.free(s3), this.logger.perf(L, N, "ReadAttachmentContent", "End", e5.id), wt.resolve(u2);
      }
      setFormFieldValue(e5, r4, o3, i4) {
        this.logger.debug(L, N, "SetFormFieldValue", e5, o3, i4), this.logger.perf(L, N, "SetFormFieldValue", "Begin", `${e5.id}-${o3.id}`);
        const a3 = this.cache.getContext(e5.id);
        if (!a3) return this.logger.debug(L, N, "SetFormFieldValue", "document is not opened"), this.logger.perf(L, N, "SetFormFieldValue", "End", `${e5.id}-${o3.id}`), wt.reject({ code: bt.DocNotOpen, message: "document does not open" });
        const F2 = this.pdfiumModule.PDFiumExt_OpenFormFillInfo(), s3 = this.pdfiumModule.PDFiumExt_InitFormFillEnvironment(a3.docPtr, F2), u2 = a3.acquirePage(r4.index);
        this.pdfiumModule.FORM_OnAfterLoadPage(u2.pagePtr, s3);
        const m2 = this.pdfiumModule.FPDFPage_GetAnnot(u2.pagePtr, o3.id);
        if (!this.pdfiumModule.FORM_SetFocusedAnnot(s3, m2)) return this.logger.debug(L, N, "SetFormFieldValue", "failed to set focused annotation"), this.logger.perf(L, N, "SetFormFieldValue", "End", `${e5.id}-${o3.id}`), this.pdfiumModule.FPDFPage_CloseAnnot(m2), this.pdfiumModule.FORM_OnBeforeClosePage(u2.pagePtr, s3), u2.release(), this.pdfiumModule.PDFiumExt_ExitFormFillEnvironment(s3), this.pdfiumModule.PDFiumExt_CloseFormFillInfo(F2), wt.reject({ code: bt.CantFocusAnnot, message: "failed to set focused annotation" });
        switch (i4.kind) {
          case "text":
            {
              if (!this.pdfiumModule.FORM_SelectAllText(s3, u2.pagePtr)) return this.logger.debug(L, N, "SetFormFieldValue", "failed to select all text"), this.logger.perf(L, N, "SetFormFieldValue", "End", `${e5.id}-${o3.id}`), this.pdfiumModule.FORM_ForceToKillFocus(s3), this.pdfiumModule.FPDFPage_CloseAnnot(m2), this.pdfiumModule.FORM_OnBeforeClosePage(u2.pagePtr, s3), u2.release(), this.pdfiumModule.PDFiumExt_ExitFormFillEnvironment(s3), this.pdfiumModule.PDFiumExt_CloseFormFillInfo(F2), wt.reject({ code: bt.CantSelectText, message: "failed to select all text" });
              const r5 = 2 * (i4.text.length + 1), a4 = this.malloc(r5);
              this.pdfiumModule.pdfium.stringToUTF16(i4.text, a4, r5), this.pdfiumModule.FORM_ReplaceSelection(s3, u2.pagePtr, a4), this.free(a4);
            }
            break;
          case "selection":
            if (!this.pdfiumModule.FORM_SetIndexSelected(s3, u2.pagePtr, i4.index, i4.isSelected)) return this.logger.debug(L, N, "SetFormFieldValue", "failed to set index selected"), this.logger.perf(L, N, "SetFormFieldValue", "End", `${e5.id}-${o3.id}`), this.pdfiumModule.FORM_ForceToKillFocus(s3), this.pdfiumModule.FPDFPage_CloseAnnot(m2), this.pdfiumModule.FORM_OnBeforeClosePage(u2.pagePtr, s3), u2.release(), this.pdfiumModule.PDFiumExt_ExitFormFillEnvironment(s3), this.pdfiumModule.PDFiumExt_CloseFormFillInfo(F2), wt.reject({ code: bt.CantSelectOption, message: "failed to set index selected" });
            break;
          case "checked": {
            const r5 = 13;
            if (!this.pdfiumModule.FORM_OnChar(s3, u2.pagePtr, r5, 0)) return this.logger.debug(L, N, "SetFormFieldValue", "failed to set field checked"), this.logger.perf(L, N, "SetFormFieldValue", "End", `${e5.id}-${o3.id}`), this.pdfiumModule.FORM_ForceToKillFocus(s3), this.pdfiumModule.FPDFPage_CloseAnnot(m2), this.pdfiumModule.FORM_OnBeforeClosePage(u2.pagePtr, s3), u2.release(), this.pdfiumModule.PDFiumExt_ExitFormFillEnvironment(s3), this.pdfiumModule.PDFiumExt_CloseFormFillInfo(F2), wt.reject({ code: bt.CantCheckField, message: "failed to set field checked" });
          }
        }
        return this.pdfiumModule.FORM_ForceToKillFocus(s3), this.pdfiumModule.FPDFPage_CloseAnnot(m2), this.pdfiumModule.FORM_OnBeforeClosePage(u2.pagePtr, s3), u2.release(), this.pdfiumModule.PDFiumExt_ExitFormFillEnvironment(s3), this.pdfiumModule.PDFiumExt_CloseFormFillInfo(F2), wt.resolve(true);
      }
      flattenPage(e5, r4, o3) {
        this.logger.debug(L, N, "flattenPage", e5, r4, o3), this.logger.perf(L, N, "flattenPage", "Begin", e5.id);
        const i4 = this.cache.getContext(e5.id);
        if (!i4) return this.logger.perf(L, N, "flattenPage", "End", e5.id), wt.reject({ code: bt.DocNotOpen, message: "document does not open" });
        const a3 = i4.acquirePage(r4.index), F2 = this.pdfiumModule.FPDFPage_Flatten(a3.pagePtr, o3);
        return a3.release(), this.logger.perf(L, N, "flattenPage", "End", e5.id), wt.resolve(F2);
      }
      extractPages(e5, r4) {
        this.logger.debug(L, N, "extractPages", e5, r4), this.logger.perf(L, N, "ExtractPages", "Begin", e5.id);
        const o3 = this.cache.getContext(e5.id);
        if (!o3) return this.logger.perf(L, N, "ExtractPages", "End", e5.id), wt.reject({ code: bt.DocNotOpen, message: "document does not open" });
        const i4 = this.pdfiumModule.FPDF_CreateNewDocument();
        if (!i4) return this.logger.perf(L, N, "ExtractPages", "End", e5.id), wt.reject({ code: bt.CantCreateNewDoc, message: "can not create new document" });
        const a3 = this.malloc(4 * r4.length);
        for (let e6 = 0; e6 < r4.length; e6++) this.pdfiumModule.pdfium.setValue(a3 + 4 * e6, r4[e6], "i32");
        if (!this.pdfiumModule.FPDF_ImportPagesByIndex(i4, o3.docPtr, a3, r4.length, 0)) return this.pdfiumModule.FPDF_CloseDocument(i4), this.logger.perf(L, N, "ExtractPages", "End", e5.id), wt.reject({ code: bt.CantImportPages, message: "can not import pages to new document" });
        const F2 = this.saveDocument(i4);
        return this.pdfiumModule.FPDF_CloseDocument(i4), this.logger.perf(L, N, "ExtractPages", "End", e5.id), wt.resolve(F2);
      }
      extractText(e5, r4) {
        this.logger.debug(L, N, "extractText", e5, r4), this.logger.perf(L, N, "ExtractText", "Begin", e5.id);
        const o3 = this.cache.getContext(e5.id);
        if (!o3) return this.logger.perf(L, N, "ExtractText", "End", e5.id), wt.reject({ code: bt.DocNotOpen, message: "document does not open" });
        const i4 = [];
        for (let e6 = 0; e6 < r4.length; e6++) {
          const t3 = o3.acquirePage(r4[e6]), n3 = this.pdfiumModule.FPDFText_LoadPage(t3.pagePtr), a4 = this.pdfiumModule.FPDFText_CountChars(n3), F2 = this.malloc(2 * (a4 + 1));
          this.pdfiumModule.FPDFText_GetText(n3, 0, a4, F2);
          const s3 = this.pdfiumModule.pdfium.UTF16ToString(F2);
          this.free(F2), i4.push(s3), this.pdfiumModule.FPDFText_ClosePage(n3), t3.release();
        }
        const a3 = i4.join("\n\n");
        return this.logger.perf(L, N, "ExtractText", "End", e5.id), wt.resolve(a3);
      }
      getTextSlices(e5, r4) {
        if (this.logger.debug(L, N, "getTextSlices", e5, r4), this.logger.perf(L, N, "GetTextSlices", "Begin", e5.id), 0 === r4.length) return this.logger.perf(L, N, "GetTextSlices", "End", e5.id), wt.resolve([]);
        const o3 = this.cache.getContext(e5.id);
        if (!o3) return this.logger.perf(L, N, "GetTextSlices", "End", e5.id), wt.reject({ code: bt.DocNotOpen, message: "document does not open" });
        try {
          const n3 = new Array(r4.length), a3 = /* @__PURE__ */ new Map();
          r4.forEach((e6, t3) => {
            (a3.get(e6.pageIndex) ?? a3.set(e6.pageIndex, []).get(e6.pageIndex)).push({ slice: e6, pos: t3 });
          });
          for (const [e6, t3] of a3) {
            const r5 = o3.acquirePage(e6), a4 = r5.getTextPage();
            for (const { slice: e7, pos: r6 } of t3) {
              const t4 = this.malloc(2 * (e7.charCount + 1));
              this.pdfiumModule.FPDFText_GetText(a4, e7.charIndex, e7.charCount, t4), n3[r6] = st(this.pdfiumModule.pdfium.UTF16ToString(t4)), this.free(t4);
            }
            r5.release();
          }
          return this.logger.perf(L, N, "GetTextSlices", "End", e5.id), wt.resolve(n3);
        } catch (r5) {
          return this.logger.error(L, N, "getTextSlices error", r5), this.logger.perf(L, N, "GetTextSlices", "End", e5.id), wt.reject({ code: bt.Unknown, message: String(r5) });
        }
      }
      merge(e5) {
        this.logger.debug(L, N, "merge", e5);
        const r4 = e5.map((e6) => e6.id).join(".");
        this.logger.perf(L, N, "Merge", "Begin", r4);
        const o3 = this.pdfiumModule.FPDF_CreateNewDocument();
        if (!o3) return this.logger.perf(L, N, "Merge", "End", r4), wt.reject({ code: bt.CantCreateNewDoc, message: "can not create new document" });
        const i4 = [];
        for (const a4 of e5.reverse()) {
          const e6 = new Uint8Array(a4.content), F3 = e6.length, s3 = this.malloc(F3);
          this.pdfiumModule.pdfium.HEAPU8.set(e6, s3);
          const u2 = this.pdfiumModule.FPDF_LoadMemDocument(s3, F3, "");
          if (!u2) {
            const e7 = this.pdfiumModule.FPDF_GetLastError();
            this.logger.error(L, N, `FPDF_LoadMemDocument failed with ${e7}`), this.free(s3);
            for (const e8 of i4) this.pdfiumModule.FPDF_CloseDocument(e8.docPtr), this.free(e8.filePtr);
            return this.logger.perf(L, N, "Merge", "End", r4), wt.reject({ code: e7, message: "FPDF_LoadMemDocument failed" });
          }
          if (i4.push({ filePtr: s3, docPtr: u2 }), !this.pdfiumModule.FPDF_ImportPages(o3, u2, "", 0)) {
            this.pdfiumModule.FPDF_CloseDocument(o3);
            for (const e7 of i4) this.pdfiumModule.FPDF_CloseDocument(e7.docPtr), this.free(e7.filePtr);
            return this.logger.perf(L, N, "Merge", "End", r4), wt.reject({ code: bt.CantImportPages, message: "can not import pages to new document" });
          }
        }
        const a3 = this.saveDocument(o3);
        this.pdfiumModule.FPDF_CloseDocument(o3);
        for (const e6 of i4) this.pdfiumModule.FPDF_CloseDocument(e6.docPtr), this.free(e6.filePtr);
        const F2 = { id: `${Math.random()}`, content: a3 };
        return this.logger.perf(L, N, "Merge", "End", r4), wt.resolve(F2);
      }
      mergePages(e5) {
        const r4 = e5.map((e6) => `${e6.docId}:${e6.pageIndices.join(",")}`).join("|");
        this.logger.debug(L, N, "mergePages", e5), this.logger.perf(L, N, "MergePages", "Begin", r4);
        const o3 = this.pdfiumModule.FPDF_CreateNewDocument();
        if (!o3) return this.logger.perf(L, N, "MergePages", "End", r4), wt.reject({ code: bt.CantCreateNewDoc, message: "Cannot create new document" });
        try {
          for (const t3 of [...e5].reverse()) {
            const e6 = this.cache.getContext(t3.docId);
            if (!e6) {
              this.logger.warn(L, N, `Document ${t3.docId} is not open, skipping`);
              continue;
            }
            const n4 = this.pdfiumModule.FPDF_GetPageCount(e6.docPtr), r5 = t3.pageIndices.filter((e7) => e7 >= 0 && e7 < n4);
            if (0 === r5.length) continue;
            const i5 = r5.map((e7) => e7 + 1).join(",");
            try {
              if (!this.pdfiumModule.FPDF_ImportPages(o3, e6.docPtr, i5, 0)) throw new Error(`Failed to import pages ${i5} from document ${t3.docId}`);
            } finally {
            }
          }
          const n3 = this.saveDocument(o3), i4 = { id: `${Math.random()}`, content: n3 };
          return this.logger.perf(L, N, "MergePages", "End", r4), wt.resolve(i4);
        } catch (e6) {
          return this.logger.error(L, N, "mergePages failed", e6), this.logger.perf(L, N, "MergePages", "End", r4), wt.reject({ code: bt.CantImportPages, message: e6 instanceof Error ? e6.message : "Failed to merge pages" });
        } finally {
          o3 && this.pdfiumModule.FPDF_CloseDocument(o3);
        }
      }
      saveAsCopy(e5) {
        this.logger.debug(L, N, "saveAsCopy", e5), this.logger.perf(L, N, "SaveAsCopy", "Begin", e5.id);
        const r4 = this.cache.getContext(e5.id);
        if (!r4) return this.logger.perf(L, N, "SaveAsCopy", "End", e5.id), wt.reject({ code: bt.DocNotOpen, message: "document does not open" });
        const o3 = this.saveDocument(r4.docPtr);
        return this.logger.perf(L, N, "SaveAsCopy", "End", e5.id), wt.resolve(o3);
      }
      closeDocument(e5) {
        this.logger.debug(L, N, "closeDocument", e5), this.logger.perf(L, N, "CloseDocument", "Begin", e5.id);
        const r4 = this.cache.getContext(e5.id);
        return r4 ? (r4.dispose(), this.logger.perf(L, N, "CloseDocument", "End", e5.id), wt.resolve(true)) : (this.logger.perf(L, N, "CloseDocument", "End", e5.id), wt.reject({ code: bt.DocNotOpen, message: "document does not open" }));
      }
      malloc(e5) {
        const t3 = this.pdfiumModule.pdfium.wasmExports.malloc(e5);
        for (let n3 = 0; n3 < e5; n3++) this.pdfiumModule.pdfium.HEAP8[t3 + n3] = 0;
        return t3;
      }
      free(e5) {
        this.pdfiumModule.pdfium.wasmExports.free(e5);
      }
      addInkStroke(e5, t3, n3, r4) {
        return !!this.setBorderStyle(n3, gt.SOLID, r4.strokeWidth) && (!!this.setPageAnnoRect(e5, t3, n3, r4.rect) && (!!this.setInkList(e5, n3, r4.inkList) && (!!this.setAnnotString(n3, "T", r4.author || "") && (!!this.setAnnotString(n3, "M", St(r4.modified)) && !!this.setAnnotationColor(n3, { color: r4.color ?? "#FFFF00", opacity: r4.opacity ?? 1 }, pt.Color)))));
      }
      addTextMarkupContent(e5, t3, n3, r4) {
        return !!this.setPageAnnoRect(e5, t3, n3, r4.rect) && (!!this.syncQuadPointsAnno(e5, n3, r4.segmentRects) && (!!this.setAnnotString(n3, "Contents", r4.contents ?? "") && (!!this.setAnnotString(n3, "T", r4.author || "") && (!!this.setAnnotString(n3, "M", St(r4.modified)) && !!this.setAnnotationColor(n3, { color: r4.color ?? "#FFFF00", opacity: r4.opacity ?? 1 }, pt.Color)))));
      }
      addStampContent(e5, t3, n3, r4, o3, i4) {
        for (const a3 of i4) if (a3.type === mt.IMAGE) return this.addImageObject(e5, t3, n3, r4, o3.origin, a3.imageData);
        return false;
      }
      addImageObject(e5, t3, n3, r4, o3, i4) {
        const a3 = i4.width * i4.height, F2 = this.malloc(4 * a3);
        if (!F2) return false;
        for (let e6 = 0; e6 < a3; e6++) {
          const t4 = i4.data[4 * e6], n4 = i4.data[4 * e6 + 1], r5 = i4.data[4 * e6 + 2], o4 = i4.data[4 * e6 + 3];
          this.pdfiumModule.pdfium.setValue(F2 + 4 * e6, r5, "i8"), this.pdfiumModule.pdfium.setValue(F2 + 4 * e6 + 1, n4, "i8"), this.pdfiumModule.pdfium.setValue(F2 + 4 * e6 + 2, t4, "i8"), this.pdfiumModule.pdfium.setValue(F2 + 4 * e6 + 3, o4, "i8");
        }
        const s3 = j.Bitmap_BGRA, u2 = this.pdfiumModule.FPDFBitmap_CreateEx(i4.width, i4.height, s3, F2, 0);
        if (!u2) return this.free(F2), false;
        const m2 = this.pdfiumModule.FPDFPageObj_NewImageObj(e5);
        if (!m2) return this.pdfiumModule.FPDFBitmap_Destroy(u2), this.free(F2), false;
        if (!this.pdfiumModule.FPDFImageObj_SetBitmap(n3, 0, m2, u2)) return this.pdfiumModule.FPDFBitmap_Destroy(u2), this.pdfiumModule.FPDFPageObj_Destroy(m2), this.free(F2), false;
        const l2 = this.malloc(24);
        return this.pdfiumModule.pdfium.setValue(l2, i4.width, "float"), this.pdfiumModule.pdfium.setValue(l2 + 4, 0, "float"), this.pdfiumModule.pdfium.setValue(l2 + 8, 0, "float"), this.pdfiumModule.pdfium.setValue(l2 + 12, i4.height, "float"), this.pdfiumModule.pdfium.setValue(l2 + 16, 0, "float"), this.pdfiumModule.pdfium.setValue(l2 + 20, 0, "float"), this.pdfiumModule.FPDFPageObj_SetMatrix(m2, l2) ? (this.free(l2), this.pdfiumModule.FPDFPageObj_Transform(m2, 1, 0, 0, 1, o3.x, o3.y), this.pdfiumModule.FPDFAnnot_AppendObject(r4, m2) ? (this.pdfiumModule.FPDFPage_GenerateContent(n3), this.pdfiumModule.FPDFBitmap_Destroy(u2), this.free(F2), true) : (this.pdfiumModule.FPDFBitmap_Destroy(u2), this.pdfiumModule.FPDFPageObj_Destroy(m2), this.free(F2), false)) : (this.free(l2), this.pdfiumModule.FPDFBitmap_Destroy(u2), this.pdfiumModule.FPDFPageObj_Destroy(m2), this.free(F2), false);
      }
      saveDocument(e5) {
        const t3 = this.pdfiumModule.PDFiumExt_OpenFileWriter();
        this.pdfiumModule.PDFiumExt_SaveAsCopy(e5, t3);
        const n3 = this.pdfiumModule.PDFiumExt_GetFileWriterSize(t3), r4 = this.malloc(n3);
        this.pdfiumModule.PDFiumExt_GetFileWriterData(t3, r4, n3);
        const o3 = new ArrayBuffer(n3), i4 = new DataView(o3);
        for (let e6 = 0; e6 < n3; e6++) i4.setInt8(e6, this.pdfiumModule.pdfium.getValue(r4 + e6, "i8"));
        return this.free(r4), this.pdfiumModule.PDFiumExt_CloseFileWriter(t3), o3;
      }
      readMetaText(e5, t3) {
        return x(this.pdfiumModule.pdfium, (n3, r4) => this.pdfiumModule.FPDF_GetMetaText(e5, t3, n3, r4), this.pdfiumModule.pdfium.UTF16ToString);
      }
      readPdfBookmarks(e5, t3 = 0) {
        let n3 = this.pdfiumModule.FPDFBookmark_GetFirstChild(e5, t3);
        const r4 = [];
        for (; n3; ) {
          const t4 = this.readPdfBookmark(e5, n3);
          r4.push(t4);
          n3 = this.pdfiumModule.FPDFBookmark_GetNextSibling(e5, n3);
        }
        return r4;
      }
      readPdfBookmark(e5, t3) {
        const n3 = x(this.pdfiumModule.pdfium, (e6, n4) => this.pdfiumModule.FPDFBookmark_GetTitle(t3, e6, n4), this.pdfiumModule.pdfium.UTF16ToString), r4 = this.readPdfBookmarks(e5, t3);
        return { title: n3, target: this.readPdfBookmarkTarget(e5, () => this.pdfiumModule.FPDFBookmark_GetAction(t3), () => this.pdfiumModule.FPDFBookmark_GetDest(e5, t3)), children: r4 };
      }
      readPageTextRects(e5, t3, n3, r4) {
        const o3 = this.pdfiumModule.FPDFText_CountRects(r4, 0, -1), i4 = [];
        for (let t4 = 0; t4 < o3; t4++) {
          const o4 = this.malloc(8), a3 = this.malloc(8), F2 = this.malloc(8), s3 = this.malloc(8);
          if (!this.pdfiumModule.FPDFText_GetRect(r4, t4, a3, o4, F2, s3)) {
            this.free(a3), this.free(o4), this.free(F2), this.free(s3);
            continue;
          }
          const u2 = this.pdfiumModule.pdfium.getValue(a3, "double"), m2 = this.pdfiumModule.pdfium.getValue(o4, "double"), l2 = this.pdfiumModule.pdfium.getValue(F2, "double"), d2 = this.pdfiumModule.pdfium.getValue(s3, "double");
          this.free(a3), this.free(o4), this.free(F2), this.free(s3);
          const _2 = this.malloc(4), P2 = this.malloc(4);
          this.pdfiumModule.FPDF_PageToDevice(n3, 0, 0, e5.size.width, e5.size.height, 0, u2, m2, _2, P2);
          const c2 = this.pdfiumModule.pdfium.getValue(_2, "i32"), g2 = this.pdfiumModule.pdfium.getValue(P2, "i32");
          this.free(_2), this.free(P2);
          const h2 = { origin: { x: c2, y: g2 }, size: { width: Math.ceil(Math.abs(l2 - u2)), height: Math.ceil(Math.abs(m2 - d2)) } }, D2 = this.pdfiumModule.FPDFText_GetBoundedText(r4, u2, m2, l2, d2, 0, 0), b2 = 2 * (D2 + 1), p2 = this.malloc(b2);
          this.pdfiumModule.FPDFText_GetBoundedText(r4, u2, m2, l2, d2, p2, D2);
          const f2 = this.pdfiumModule.pdfium.UTF16ToString(p2);
          this.free(p2);
          const A2 = this.pdfiumModule.FPDFText_GetCharIndexAtPos(r4, u2, m2, 2, 2);
          let G2 = "", E2 = h2.size.height;
          if (A2 >= 0) {
            E2 = this.pdfiumModule.FPDFText_GetFontSize(r4, A2);
            const e6 = this.pdfiumModule.FPDFText_GetFontInfo(r4, A2, 0, 0, 0) + 1, t5 = this.malloc(e6), n4 = this.malloc(4);
            this.pdfiumModule.FPDFText_GetFontInfo(r4, A2, t5, e6, n4), G2 = this.pdfiumModule.pdfium.UTF8ToString(t5), this.free(t5), this.free(n4);
          }
          const S2 = { content: f2, rect: h2, font: { family: G2, size: E2 } };
          i4.push(S2);
        }
        return i4;
      }
      getPageGeometry(e5, r4) {
        const o3 = "getPageGeometry";
        this.logger.perf(L, N, o3, "Begin", e5.id);
        const i4 = this.cache.getContext(e5.id);
        if (!i4) return this.logger.perf(L, N, o3, "End", e5.id), wt.reject({ code: bt.DocNotOpen, message: "document does not open" });
        const a3 = i4.acquirePage(r4.index), F2 = a3.getTextPage(), s3 = this.pdfiumModule.FPDFText_CountChars(F2), u2 = [];
        for (let e6 = 0; e6 < s3; e6++) {
          const t3 = this.readGlyphInfo(r4, a3.pagePtr, F2, e6);
          u2.push(t3);
        }
        const m2 = this.buildRunsFromGlyphs(u2, F2);
        return a3.release(), this.logger.perf(L, N, o3, "End", e5.id), wt.resolve({ runs: m2 });
      }
      buildRunsFromGlyphs(e5, t3) {
        const n3 = [];
        let r4 = null, o3 = null, i4 = null;
        for (let a3 = 0; a3 < e5.length; a3++) {
          const F2 = e5[a3], s3 = this.pdfiumModule.FPDFText_GetTextObject(t3, a3);
          if (s3 !== o3 && (o3 = s3, r4 = { rect: { x: F2.origin.x, y: F2.origin.y, width: F2.size.width, height: F2.size.height }, charStart: a3, glyphs: [] }, i4 = { minX: F2.origin.x, minY: F2.origin.y, maxX: F2.origin.x + F2.size.width, maxY: F2.origin.y + F2.size.height }, n3.push(r4)), r4.glyphs.push({ x: F2.origin.x, y: F2.origin.y, width: F2.size.width, height: F2.size.height, flags: F2.isEmpty ? 2 : F2.isSpace ? 1 : 0 }), F2.isEmpty) continue;
          const u2 = F2.origin.x + F2.size.width, m2 = F2.origin.y + F2.size.height;
          i4.minX = Math.min(i4.minX, F2.origin.x), i4.minY = Math.min(i4.minY, F2.origin.y), i4.maxX = Math.max(i4.maxX, u2), i4.maxY = Math.max(i4.maxY, m2), r4.rect.x = i4.minX, r4.rect.y = i4.minY, r4.rect.width = i4.maxX - i4.minX, r4.rect.height = i4.maxY - i4.minY;
        }
        return n3;
      }
      readGlyphInfo(e5, t3, n3, r4) {
        const o3 = this.malloc(4), i4 = this.malloc(4), a3 = this.malloc(4), F2 = this.malloc(4), s3 = this.malloc(16);
        let u2 = 0, m2 = 0, l2 = 0, d2 = 0, _2 = false;
        if (this.pdfiumModule.FPDFText_GetLooseCharBox(n3, r4, s3)) {
          const P2 = this.pdfiumModule.pdfium.getValue(s3, "float"), c2 = this.pdfiumModule.pdfium.getValue(s3 + 4, "float"), g2 = this.pdfiumModule.pdfium.getValue(s3 + 8, "float"), h2 = this.pdfiumModule.pdfium.getValue(s3 + 12, "float");
          if (P2 === g2 || c2 === h2) return { origin: { x: 0, y: 0 }, size: { width: 0, height: 0 }, isEmpty: true };
          this.pdfiumModule.FPDF_PageToDevice(t3, 0, 0, e5.size.width, e5.size.height, 0, P2, c2, o3, i4), this.pdfiumModule.FPDF_PageToDevice(t3, 0, 0, e5.size.width, e5.size.height, 0, g2, h2, a3, F2);
          const D2 = this.pdfiumModule.pdfium.getValue(o3, "i32"), b2 = this.pdfiumModule.pdfium.getValue(i4, "i32"), p2 = this.pdfiumModule.pdfium.getValue(a3, "i32"), f2 = this.pdfiumModule.pdfium.getValue(F2, "i32");
          u2 = Math.min(D2, p2), m2 = Math.min(b2, f2), l2 = Math.max(1, Math.abs(p2 - D2)), d2 = Math.max(1, Math.abs(f2 - b2));
          _2 = 32 === this.pdfiumModule.FPDFText_GetUnicode(n3, r4);
        }
        return [s3, o3, i4, a3, F2].forEach((e6) => this.free(e6)), { origin: { x: u2, y: m2 }, size: { width: l2, height: d2 }, ..._2 && { isSpace: _2 } };
      }
      getPageGlyphs(e5, r4) {
        this.logger.debug(L, N, "getPageGlyphs", e5, r4), this.logger.perf(L, N, "getPageGlyphs", "Begin", e5.id);
        const o3 = this.cache.getContext(e5.id);
        if (!o3) return this.logger.perf(L, N, "getPageGlyphs", "End", e5.id), wt.reject({ code: bt.DocNotOpen, message: "document does not open" });
        const i4 = o3.acquirePage(r4.index), a3 = i4.getTextPage(), F2 = this.pdfiumModule.FPDFText_CountChars(a3), s3 = new Array(F2);
        for (let e6 = 0; e6 < F2; e6++) {
          const t3 = this.readGlyphInfo(r4, i4.pagePtr, a3, e6);
          t3.isEmpty || (s3[e6] = { ...t3 });
        }
        return i4.release(), this.logger.perf(L, N, "getPageGlyphs", "End", e5.id), wt.resolve(s3);
      }
      readCharBox(e5, t3, n3, r4) {
        const o3 = this.malloc(8), i4 = this.malloc(8), a3 = this.malloc(8), F2 = this.malloc(8);
        let s3 = 0, u2 = 0, m2 = 0, l2 = 0;
        if (this.pdfiumModule.FPDFText_GetCharBox(n3, r4, i4, F2, a3, o3)) {
          const n4 = this.pdfiumModule.pdfium.getValue(o3, "double"), r5 = this.pdfiumModule.pdfium.getValue(i4, "double"), d2 = this.pdfiumModule.pdfium.getValue(a3, "double"), _2 = this.pdfiumModule.pdfium.getValue(F2, "double"), P2 = this.malloc(4), c2 = this.malloc(4);
          this.pdfiumModule.FPDF_PageToDevice(t3, 0, 0, e5.size.width, e5.size.height, 0, r5, n4, P2, c2), s3 = this.pdfiumModule.pdfium.getValue(P2, "i32"), u2 = this.pdfiumModule.pdfium.getValue(c2, "i32"), this.free(P2), this.free(c2), m2 = Math.ceil(Math.abs(_2 - r5)), l2 = Math.ceil(Math.abs(n4 - d2));
        }
        return this.free(o3), this.free(i4), this.free(a3), this.free(F2), { origin: { x: s3, y: u2 }, size: { width: m2, height: l2 } };
      }
      readPageAnnotations(e5, t3) {
        const n3 = e5.acquirePage(t3.index), r4 = this.pdfiumModule.FPDFPage_GetAnnotCount(n3.pagePtr), o3 = [];
        for (let e6 = 0; e6 < r4; e6++) n3.withAnnotation(e6, (r5) => {
          const i4 = this.readPageAnnotation(t3, n3, r5, e6);
          i4 && o3.push(i4);
        });
        return o3;
      }
      readPageAnnotation(e5, t3, n3, r4) {
        const i4 = this.pdfiumModule.FPDFAnnot_GetSubtype(n3);
        let a3;
        switch (i4) {
          case dt.TEXT:
            a3 = this.readPdfTextAnno(e5, t3.pagePtr, n3, r4);
            break;
          case dt.FREETEXT:
            a3 = this.readPdfFreeTextAnno(e5, t3.pagePtr, n3, r4);
            break;
          case dt.LINK:
            a3 = this.readPdfLinkAnno(e5, t3.docPtr, t3.pagePtr, t3.getTextPage(), n3, r4);
            break;
          case dt.WIDGET:
            a3 = this.readPdfWidgetAnno(e5, t3.pagePtr, n3, t3.getFormHandle(), r4);
            break;
          case dt.FILEATTACHMENT:
            a3 = this.readPdfFileAttachmentAnno(e5, t3.pagePtr, n3, r4);
            break;
          case dt.INK:
            a3 = this.readPdfInkAnno(e5, t3.pagePtr, n3, r4);
            break;
          case dt.POLYGON:
            a3 = this.readPdfPolygonAnno(e5, t3.pagePtr, n3, r4);
            break;
          case dt.POLYLINE:
            a3 = this.readPdfPolylineAnno(e5, t3.pagePtr, n3, r4);
            break;
          case dt.LINE:
            a3 = this.readPdfLineAnno(e5, t3.pagePtr, n3, r4);
            break;
          case dt.HIGHLIGHT:
            a3 = this.readPdfHighlightAnno(e5, t3.pagePtr, n3, r4);
            break;
          case dt.STAMP:
            a3 = this.readPdfStampAnno(t3.docPtr, e5, t3.pagePtr, n3, r4);
            break;
          case dt.SQUARE:
            a3 = this.readPdfSquareAnno(e5, t3.pagePtr, n3, r4);
            break;
          case dt.CIRCLE:
            a3 = this.readPdfCircleAnno(e5, t3.pagePtr, n3, r4);
            break;
          case dt.UNDERLINE:
            a3 = this.readPdfUnderlineAnno(e5, t3.pagePtr, n3, r4);
            break;
          case dt.SQUIGGLY:
            a3 = this.readPdfSquigglyAnno(e5, t3.pagePtr, n3, r4);
            break;
          case dt.STRIKEOUT:
            a3 = this.readPdfStrikeOutAnno(e5, t3.pagePtr, n3, r4);
            break;
          case dt.CARET:
            a3 = this.readPdfCaretAnno(e5, t3.pagePtr, n3, r4);
            break;
          default:
            a3 = this.readPdfAnno(e5, t3.pagePtr, i4, n3, r4);
        }
        return a3;
      }
      readAnnotationColor(e5, t3 = pt.Color) {
        const n3 = this.malloc(4), r4 = this.malloc(4), o3 = this.malloc(4), i4 = this.malloc(4);
        let a3;
        return this.pdfiumModule.EPDFAnnot_GetColor(e5, t3, n3, r4, o3, i4) && (a3 = { red: 255 & this.pdfiumModule.pdfium.getValue(n3, "i32"), green: 255 & this.pdfiumModule.pdfium.getValue(r4, "i32"), blue: 255 & this.pdfiumModule.pdfium.getValue(o3, "i32"), alpha: 255 & this.pdfiumModule.pdfium.getValue(i4, "i32") }), this.free(n3), this.free(r4), this.free(o3), this.free(i4), a3;
      }
      resolveAnnotationColor(e5, t3 = pt.Color, n3 = { red: 255, green: 245, blue: 155, alpha: 255 }) {
        const r4 = this.readAnnotationColor(e5, t3) ?? n3;
        return xt(r4);
      }
      setAnnotationColor(e5, t3, n3 = pt.Color) {
        const r4 = kt(t3);
        return this.pdfiumModule.EPDFAnnot_SetColor(e5, n3, 255 & r4.red, 255 & r4.green, 255 & r4.blue, 255 & (r4.alpha ?? 255));
      }
      getBorderStyle(e5) {
        const t3 = this.malloc(4);
        let n3 = 0, r4 = gt.UNKNOWN, o3 = false;
        return r4 = this.pdfiumModule.EPDFAnnot_GetBorderStyle(e5, t3), n3 = this.pdfiumModule.pdfium.getValue(t3, "float"), o3 = r4 !== gt.UNKNOWN, this.free(t3), { ok: o3, style: r4, width: n3 };
      }
      setBorderStyle(e5, t3, n3) {
        return this.pdfiumModule.EPDFAnnot_SetBorderStyle(e5, t3, n3);
      }
      getBorderEffect(e5) {
        const t3 = this.malloc(4), n3 = !!this.pdfiumModule.EPDFAnnot_GetBorderEffect(e5, t3), r4 = n3 ? this.pdfiumModule.pdfium.getValue(t3, "float") : 0;
        return this.free(t3), { ok: n3, intensity: r4 };
      }
      getRectangleDifferences(e5) {
        const t3 = this.malloc(4), n3 = this.malloc(4), r4 = this.malloc(4), o3 = this.malloc(4), i4 = !!this.pdfiumModule.EPDFAnnot_GetRectangleDifferences(e5, t3, n3, r4, o3), a3 = this.pdfiumModule.pdfium, F2 = a3.getValue(t3, "float"), s3 = a3.getValue(n3, "float"), u2 = a3.getValue(r4, "float"), m2 = a3.getValue(o3, "float");
        return this.free(t3), this.free(n3), this.free(r4), this.free(o3), { ok: i4, left: F2, top: s3, right: u2, bottom: m2 };
      }
      getBorderDashPattern(e5) {
        const t3 = this.pdfiumModule.EPDFAnnot_GetBorderDashPatternCount(e5);
        if (0 === t3) return { ok: false, pattern: [] };
        const n3 = this.malloc(4 * t3), r4 = !!this.pdfiumModule.EPDFAnnot_GetBorderDashPattern(e5, n3, t3), o3 = [];
        if (r4) {
          const e6 = this.pdfiumModule.pdfium;
          for (let r5 = 0; r5 < t3; r5++) o3.push(e6.getValue(n3 + 4 * r5, "float"));
        }
        return this.free(n3), { ok: r4, pattern: o3 };
      }
      getQuadPointsAnno(e5, t3) {
        const n3 = this.pdfiumModule.FPDFAnnot_CountAttachmentPoints(t3);
        if (0 === n3) return [];
        const r4 = [];
        for (let o3 = 0; o3 < n3; o3++) {
          const n4 = this.malloc(32);
          if (this.pdfiumModule.FPDFAnnot_GetAttachmentPoints(t3, o3, n4)) {
            const t4 = [], o4 = [];
            for (let e6 = 0; e6 < 4; e6++) {
              const r5 = n4 + 8 * e6;
              t4.push(this.pdfiumModule.pdfium.getValue(r5, "float")), o4.push(this.pdfiumModule.pdfium.getValue(r5 + 4, "float"));
            }
            const i4 = this.convertPagePointToDevicePoint(e5, { x: t4[0], y: o4[0] }), a3 = this.convertPagePointToDevicePoint(e5, { x: t4[1], y: o4[1] }), F2 = this.convertPagePointToDevicePoint(e5, { x: t4[2], y: o4[2] }), s3 = this.convertPagePointToDevicePoint(e5, { x: t4[3], y: o4[3] });
            r4.push({ p1: i4, p2: a3, p3: F2, p4: s3 });
          }
          this.free(n4);
        }
        return r4.map(Ze);
      }
      syncQuadPointsAnno(e5, t3, n3) {
        const r4 = this.pdfiumModule.pdfium, o3 = this.pdfiumModule.FPDFAnnot_CountAttachmentPoints(t3), i4 = this.malloc(32), a3 = (t4) => {
          const n4 = qe(t4), o4 = this.convertDevicePointToPagePoint(e5, n4.p1), a4 = this.convertDevicePointToPagePoint(e5, n4.p2), F3 = this.convertDevicePointToPagePoint(e5, n4.p3), s3 = this.convertDevicePointToPagePoint(e5, n4.p4);
          r4.setValue(i4 + 0, o4.x, "float"), r4.setValue(i4 + 4, o4.y, "float"), r4.setValue(i4 + 8, a4.x, "float"), r4.setValue(i4 + 12, a4.y, "float"), r4.setValue(i4 + 16, s3.x, "float"), r4.setValue(i4 + 20, s3.y, "float"), r4.setValue(i4 + 24, F3.x, "float"), r4.setValue(i4 + 28, F3.y, "float");
        }, F2 = Math.min(o3, n3.length);
        for (let e6 = 0; e6 < F2; e6++) if (a3(n3[e6]), !this.pdfiumModule.FPDFAnnot_SetAttachmentPoints(t3, e6, i4)) return this.free(i4), false;
        for (let e6 = o3; e6 < n3.length; e6++) if (a3(n3[e6]), !this.pdfiumModule.FPDFAnnot_AppendAttachmentPoints(t3, i4)) return this.free(i4), false;
        return this.free(i4), true;
      }
      getInkList(e5, t3) {
        const n3 = [], r4 = this.pdfiumModule.FPDFAnnot_GetInkListCount(t3);
        for (let o3 = 0; o3 < r4; o3++) {
          const r5 = [], i4 = this.pdfiumModule.FPDFAnnot_GetInkListPath(t3, o3, 0, 0);
          if (i4 > 0) {
            const n4 = 8, a3 = this.malloc(i4 * n4);
            this.pdfiumModule.FPDFAnnot_GetInkListPath(t3, o3, a3, i4);
            for (let t4 = 0; t4 < i4; t4++) {
              const n5 = this.pdfiumModule.pdfium.getValue(a3 + 8 * t4, "float"), o4 = this.pdfiumModule.pdfium.getValue(a3 + 8 * t4 + 4, "float"), { x: i5, y: F2 } = this.convertPagePointToDevicePoint(e5, { x: n5, y: o4 });
              r5.push({ x: i5, y: F2 });
            }
            this.free(a3);
          }
          n3.push({ points: r5 });
        }
        return n3;
      }
      setInkList(e5, t3, n3) {
        for (const r4 of n3) {
          const n4 = r4.points.length, o3 = this.malloc(8 * n4);
          for (let t4 = 0; t4 < n4; t4++) {
            const n5 = r4.points[t4], { x: i4, y: a3 } = this.convertDevicePointToPagePoint(e5, n5);
            this.pdfiumModule.pdfium.setValue(o3 + 8 * t4, i4, "float"), this.pdfiumModule.pdfium.setValue(o3 + 8 * t4 + 4, a3, "float");
          }
          if (-1 === this.pdfiumModule.FPDFAnnot_AddInkStroke(t3, o3, n4)) return this.free(o3), false;
          this.free(o3);
        }
        return true;
      }
      readPdfTextAnno(e5, t3, n3, r4) {
        const i4 = this.readPageAnnoRect(n3), a3 = this.convertPageRectToDeviceRect(e5, t3, i4), F2 = this.getAnnotString(n3, "T"), s3 = this.getAnnotString(n3, "M"), u2 = Ct(s3), m2 = this.getAnnotString(n3, "Contents") || "", l2 = this.getAnnotString(n3, "State"), d2 = this.getAnnotString(n3, "StateModel"), P2 = this.resolveAnnotationColor(n3), c2 = this.getInReplyToId(t3, n3);
        return { pageIndex: e5.index, id: r4, type: dt.TEXT, contents: m2, ...P2, rect: a3, inReplyToId: c2, author: F2, modified: u2, state: l2, stateModel: d2 };
      }
      readPdfFreeTextAnno(e5, t3, n3, r4) {
        const i4 = this.readPageAnnoRect(n3), a3 = this.convertPageRectToDeviceRect(e5, t3, i4), F2 = this.getAnnotString(n3, "Contents") || "", s3 = this.getAnnotString(n3, "T"), u2 = this.getAnnotString(n3, "M"), m2 = Ct(u2);
        return { pageIndex: e5.index, id: r4, type: dt.FREETEXT, contents: F2, author: s3, modified: m2, rect: a3 };
      }
      readPdfLinkAnno(e5, t3, n3, r4, i4, a3) {
        const F2 = this.pdfiumModule.FPDFAnnot_GetLink(i4);
        if (!F2) return;
        const s3 = this.readPageAnnoRect(i4), { left: u2, top: m2, right: l2, bottom: d2 } = s3, P2 = this.convertPageRectToDeviceRect(e5, n3, s3), c2 = this.getAnnotString(i4, "T"), g2 = this.getAnnotString(i4, "M"), h2 = Ct(g2), D2 = this.pdfiumModule.FPDFText_GetBoundedText(r4, u2, m2, l2, d2, 0, 0), b2 = 2 * (D2 + 1), p2 = this.malloc(b2);
        this.pdfiumModule.FPDFText_GetBoundedText(r4, u2, m2, l2, d2, p2, D2);
        const f2 = this.pdfiumModule.pdfium.UTF16ToString(p2);
        this.free(p2);
        const A2 = this.readPdfLinkAnnoTarget(t3, () => this.pdfiumModule.FPDFLink_GetAction(F2), () => this.pdfiumModule.FPDFLink_GetDest(t3, F2));
        return { pageIndex: e5.index, id: a3, type: dt.LINK, text: f2, target: A2, rect: P2, author: c2, modified: h2 };
      }
      readPdfWidgetAnno(e5, t3, n3, r4, i4) {
        const a3 = this.readPageAnnoRect(n3), F2 = this.convertPageRectToDeviceRect(e5, t3, a3), s3 = this.getAnnotString(n3, "T"), u2 = this.getAnnotString(n3, "M"), m2 = Ct(u2), l2 = this.readPdfWidgetAnnoField(r4, n3);
        return { pageIndex: e5.index, id: i4, type: dt.WIDGET, rect: F2, field: l2, author: s3, modified: m2 };
      }
      readPdfFileAttachmentAnno(e5, t3, n3, r4) {
        const i4 = this.readPageAnnoRect(n3), a3 = this.convertPageRectToDeviceRect(e5, t3, i4), F2 = this.getAnnotString(n3, "T"), s3 = this.getAnnotString(n3, "M"), u2 = Ct(s3);
        return { pageIndex: e5.index, id: r4, type: dt.FILEATTACHMENT, rect: a3, author: F2, modified: u2 };
      }
      readPdfInkAnno(e5, t3, n3, r4) {
        const i4 = this.readPageAnnoRect(n3), a3 = this.convertPageRectToDeviceRect(e5, t3, i4), F2 = this.getAnnotString(n3, "T"), s3 = this.getAnnotString(n3, "M"), u2 = Ct(s3), m2 = this.resolveAnnotationColor(n3), { width: l2 } = this.getBorderStyle(n3), d2 = this.getInkList(e5, n3);
        return { pageIndex: e5.index, id: r4, type: dt.INK, ...m2, strokeWidth: l2, rect: a3, inkList: d2, author: F2, modified: u2 };
      }
      readPdfPolygonAnno(e5, t3, n3, r4) {
        const i4 = this.readPageAnnoRect(n3), a3 = this.convertPageRectToDeviceRect(e5, t3, i4), F2 = this.getAnnotString(n3, "T"), s3 = this.getAnnotString(n3, "M"), u2 = Ct(s3), m2 = this.readPdfAnnoVertices(e5, t3, n3);
        return { pageIndex: e5.index, id: r4, type: dt.POLYGON, rect: a3, vertices: m2, author: F2, modified: u2 };
      }
      readPdfPolylineAnno(e5, t3, n3, r4) {
        const i4 = this.readPageAnnoRect(n3), a3 = this.convertPageRectToDeviceRect(e5, t3, i4), F2 = this.getAnnotString(n3, "T"), s3 = this.getAnnotString(n3, "M"), u2 = Ct(s3), m2 = this.readPdfAnnoVertices(e5, t3, n3);
        return { pageIndex: e5.index, id: r4, type: dt.POLYLINE, rect: a3, vertices: m2, author: F2, modified: u2 };
      }
      readPdfLineAnno(e5, t3, n3, r4) {
        const i4 = this.readPageAnnoRect(n3), a3 = this.convertPageRectToDeviceRect(e5, t3, i4), F2 = this.getAnnotString(n3, "T"), s3 = this.getAnnotString(n3, "M"), u2 = Ct(s3), m2 = this.malloc(8), l2 = this.malloc(8);
        this.pdfiumModule.FPDFAnnot_GetLine(n3, m2, l2);
        const d2 = this.pdfiumModule.pdfium.getValue(m2, "float"), P2 = this.pdfiumModule.pdfium.getValue(m2 + 4, "float"), c2 = this.convertPagePointToDevicePoint(e5, { x: d2, y: P2 }), g2 = this.pdfiumModule.pdfium.getValue(l2, "float"), h2 = this.pdfiumModule.pdfium.getValue(l2 + 4, "float"), D2 = this.convertPagePointToDevicePoint(e5, { x: g2, y: h2 });
        return this.free(m2), this.free(l2), { pageIndex: e5.index, id: r4, type: dt.LINE, rect: a3, startPoint: c2, endPoint: D2, author: F2, modified: u2 };
      }
      readPdfHighlightAnno(e5, t3, n3, r4) {
        const i4 = this.readPageAnnoRect(n3), a3 = this.convertPageRectToDeviceRect(e5, t3, i4), F2 = this.getQuadPointsAnno(e5, n3), s3 = this.resolveAnnotationColor(n3), u2 = this.getAnnotString(n3, "T"), m2 = this.getAnnotString(n3, "M"), l2 = Ct(m2), d2 = this.getAnnotString(n3, "Contents") || "";
        return { pageIndex: e5.index, id: r4, type: dt.HIGHLIGHT, rect: a3, contents: d2, segmentRects: F2, ...s3, author: u2, modified: l2 };
      }
      readPdfUnderlineAnno(e5, t3, n3, r4) {
        const i4 = this.readPageAnnoRect(n3), a3 = this.convertPageRectToDeviceRect(e5, t3, i4), F2 = this.getAnnotString(n3, "T"), s3 = this.getAnnotString(n3, "M"), u2 = Ct(s3), m2 = this.getQuadPointsAnno(e5, n3), l2 = this.getAnnotString(n3, "Contents") || "", d2 = this.resolveAnnotationColor(n3);
        return { pageIndex: e5.index, id: r4, type: dt.UNDERLINE, rect: a3, contents: l2, segmentRects: m2, ...d2, author: F2, modified: u2 };
      }
      readPdfStrikeOutAnno(e5, t3, n3, r4) {
        const i4 = this.readPageAnnoRect(n3), a3 = this.convertPageRectToDeviceRect(e5, t3, i4), F2 = this.getAnnotString(n3, "T"), s3 = this.getAnnotString(n3, "M"), u2 = Ct(s3), m2 = this.getQuadPointsAnno(e5, n3), l2 = this.getAnnotString(n3, "Contents") || "", d2 = this.resolveAnnotationColor(n3);
        return { pageIndex: e5.index, id: r4, type: dt.STRIKEOUT, rect: a3, contents: l2, segmentRects: m2, ...d2, author: F2, modified: u2 };
      }
      readPdfSquigglyAnno(e5, t3, n3, r4) {
        const i4 = this.readPageAnnoRect(n3), a3 = this.convertPageRectToDeviceRect(e5, t3, i4), F2 = this.getAnnotString(n3, "T"), s3 = this.getAnnotString(n3, "M"), u2 = Ct(s3), m2 = this.getQuadPointsAnno(e5, n3), l2 = this.getAnnotString(n3, "Contents") || "", d2 = this.resolveAnnotationColor(n3);
        return { pageIndex: e5.index, id: r4, type: dt.SQUIGGLY, rect: a3, contents: l2, segmentRects: m2, ...d2, author: F2, modified: u2 };
      }
      readPdfCaretAnno(e5, t3, n3, r4) {
        const i4 = this.readPageAnnoRect(n3), a3 = this.convertPageRectToDeviceRect(e5, t3, i4), F2 = this.getAnnotString(n3, "T"), s3 = this.getAnnotString(n3, "M"), u2 = Ct(s3);
        return { pageIndex: e5.index, id: r4, type: dt.CARET, rect: a3, author: F2, modified: u2 };
      }
      readPdfStampAnno(e5, t3, n3, r4, i4) {
        const a3 = this.readPageAnnoRect(r4), F2 = this.convertPageRectToDeviceRect(t3, n3, a3), s3 = this.getAnnotString(r4, "T"), u2 = this.getAnnotString(r4, "M"), m2 = Ct(u2), l2 = [], d2 = this.pdfiumModule.FPDFAnnot_GetObjectCount(r4);
        for (let e6 = 0; e6 < d2; e6++) {
          const t4 = this.pdfiumModule.FPDFAnnot_GetObject(r4, e6), n4 = this.readPdfPageObject(t4);
          n4 && l2.push(n4);
        }
        return { pageIndex: t3.index, id: i4, type: dt.STAMP, rect: F2, contents: l2, author: s3, modified: m2 };
      }
      readPdfPageObject(e5) {
        switch (this.pdfiumModule.FPDFPageObj_GetType(e5)) {
          case mt.PATH:
            return this.readPathObject(e5);
          case mt.IMAGE:
            return this.readImageObject(e5);
          case mt.FORM:
            return this.readFormObject(e5);
        }
      }
      readPathObject(e5) {
        const t3 = this.pdfiumModule.FPDFPath_CountSegments(e5), n3 = this.malloc(4), r4 = this.malloc(4), o3 = this.malloc(4), i4 = this.malloc(4);
        this.pdfiumModule.FPDFPageObj_GetBounds(e5, n3, r4, o3, i4);
        const a3 = { left: this.pdfiumModule.pdfium.getValue(n3, "float"), bottom: this.pdfiumModule.pdfium.getValue(r4, "float"), right: this.pdfiumModule.pdfium.getValue(o3, "float"), top: this.pdfiumModule.pdfium.getValue(i4, "float") };
        this.free(n3), this.free(r4), this.free(o3), this.free(i4);
        const F2 = [];
        for (let n4 = 0; n4 < t3; n4++) {
          const t4 = this.readPdfSegment(e5, n4);
          F2.push(t4);
        }
        const s3 = this.readPdfPageObjectTransformMatrix(e5);
        return { type: mt.PATH, bounds: a3, segments: F2, matrix: s3 };
      }
      readPdfSegment(e5, t3) {
        const n3 = this.pdfiumModule.FPDFPath_GetPathSegment(e5, t3), r4 = this.pdfiumModule.FPDFPathSegment_GetType(n3), o3 = this.pdfiumModule.FPDFPathSegment_GetClose(n3), i4 = this.malloc(4), a3 = this.malloc(4);
        this.pdfiumModule.FPDFPathSegment_GetPoint(n3, i4, a3);
        const F2 = this.pdfiumModule.pdfium.getValue(i4, "float"), s3 = this.pdfiumModule.pdfium.getValue(a3, "float");
        return this.free(i4), this.free(a3), { type: r4, point: { x: F2, y: s3 }, isClosed: o3 };
      }
      readImageObject(e5) {
        const t3 = this.pdfiumModule.FPDFImageObj_GetBitmap(e5), n3 = this.pdfiumModule.FPDFBitmap_GetBuffer(t3), r4 = this.pdfiumModule.FPDFBitmap_GetWidth(t3), o3 = this.pdfiumModule.FPDFBitmap_GetHeight(t3), i4 = this.pdfiumModule.FPDFBitmap_GetFormat(t3), a3 = r4 * o3, F2 = new Uint8ClampedArray(4 * a3);
        for (let e6 = 0; e6 < a3; e6++) if (i4 === j.Bitmap_BGR) {
          const t4 = this.pdfiumModule.pdfium.getValue(n3 + 3 * e6, "i8"), r5 = this.pdfiumModule.pdfium.getValue(n3 + 3 * e6 + 1, "i8"), o4 = this.pdfiumModule.pdfium.getValue(n3 + 3 * e6 + 2, "i8");
          F2[4 * e6] = o4, F2[4 * e6 + 1] = r5, F2[4 * e6 + 2] = t4, F2[4 * e6 + 3] = 100;
        }
        const s3 = new ImageData(F2, r4, o3), m2 = this.readPdfPageObjectTransformMatrix(e5);
        return { type: mt.IMAGE, imageData: s3, matrix: m2 };
      }
      readFormObject(e5) {
        const t3 = this.pdfiumModule.FPDFFormObj_CountObjects(e5), n3 = [];
        for (let r5 = 0; r5 < t3; r5++) {
          const t4 = this.pdfiumModule.FPDFFormObj_GetObject(e5, r5), o3 = this.readPdfPageObject(t4);
          o3 && n3.push(o3);
        }
        const r4 = this.readPdfPageObjectTransformMatrix(e5);
        return { type: mt.FORM, objects: n3, matrix: r4 };
      }
      readPdfPageObjectTransformMatrix(e5) {
        const t3 = this.malloc(24);
        if (this.pdfiumModule.FPDFPageObj_GetMatrix(e5, t3)) {
          const e6 = this.pdfiumModule.pdfium.getValue(t3, "float"), n3 = this.pdfiumModule.pdfium.getValue(t3 + 4, "float"), r4 = this.pdfiumModule.pdfium.getValue(t3 + 8, "float"), o3 = this.pdfiumModule.pdfium.getValue(t3 + 12, "float"), i4 = this.pdfiumModule.pdfium.getValue(t3 + 16, "float"), a3 = this.pdfiumModule.pdfium.getValue(t3 + 20, "float");
          return this.free(t3), { a: e6, b: n3, c: r4, d: o3, e: i4, f: a3 };
        }
        return this.free(t3), { a: 1, b: 0, c: 0, d: 1, e: 0, f: 0 };
      }
      getStrokeWidth(e5) {
        const t3 = this.malloc(4), n3 = this.malloc(4), r4 = this.malloc(4), o3 = this.pdfiumModule.FPDFAnnot_GetBorder(e5, t3, n3, r4) ? this.pdfiumModule.pdfium.getValue(r4, "float") : 1;
        return this.free(t3), this.free(n3), this.free(r4), o3;
      }
      getAnnotationFlags(e5) {
        const t3 = this.pdfiumModule.FPDFAnnot_GetFlags(e5);
        return vt(t3);
      }
      readPdfCircleAnno(e5, t3, n3, r4) {
        const i4 = this.getAnnotationFlags(n3), F2 = this.readPageAnnoRect(n3), u2 = this.convertPageRectToDeviceRect(e5, t3, F2), m2 = this.getAnnotString(n3, "T"), l2 = this.getAnnotString(n3, "M"), d2 = Ct(l2), { color: P2, opacity: c2 } = this.resolveAnnotationColor(n3, pt.InteriorColor), { color: g2 } = this.resolveAnnotationColor(n3);
        let h2, D2, b2, { style: p2, width: f2 } = this.getBorderStyle(n3);
        if (p2 === gt.CLOUDY || p2 === gt.UNKNOWN) {
          const { ok: e6, intensity: t4 } = this.getBorderEffect(n3);
          if (e6) {
            h2 = t4, p2 = gt.CLOUDY;
            const { ok: e7, left: r5, top: o3, right: i5, bottom: F3 } = this.getRectangleDifferences(n3);
            e7 && (D2 = [r5, o3, i5, F3]);
          }
        }
        if (p2 === gt.DASHED) {
          const { ok: e6, pattern: t4 } = this.getBorderDashPattern(n3);
          e6 && (b2 = t4);
        }
        return { pageIndex: e5.index, id: r4, type: dt.CIRCLE, flags: i4, color: P2, opacity: c2, strokeWidth: f2, strokeColor: g2, strokeStyle: p2, rect: u2, author: m2, modified: d2, ...void 0 !== h2 && { cloudyBorderIntensity: h2 }, ...void 0 !== D2 && { cloudyBorderInset: D2 }, ...void 0 !== b2 && { strokeDashArray: b2 } };
      }
      readPdfSquareAnno(e5, t3, n3, r4) {
        const i4 = this.getAnnotationFlags(n3), F2 = this.readPageAnnoRect(n3), u2 = this.convertPageRectToDeviceRect(e5, t3, F2), m2 = this.getAnnotString(n3, "T"), l2 = this.getAnnotString(n3, "M"), d2 = Ct(l2), { color: P2, opacity: c2 } = this.resolveAnnotationColor(n3, pt.InteriorColor), { color: g2 } = this.resolveAnnotationColor(n3);
        let h2, D2, b2, { style: p2, width: f2 } = this.getBorderStyle(n3);
        if (p2 === gt.CLOUDY || p2 === gt.UNKNOWN) {
          const { ok: e6, intensity: t4 } = this.getBorderEffect(n3);
          if (e6) {
            h2 = t4, p2 = gt.CLOUDY;
            const { ok: e7, left: r5, top: o3, right: i5, bottom: F3 } = this.getRectangleDifferences(n3);
            e7 && (D2 = [r5, o3, i5, F3]);
          }
        }
        if (p2 === gt.DASHED) {
          const { ok: e6, pattern: t4 } = this.getBorderDashPattern(n3);
          e6 && (b2 = t4);
        }
        return { pageIndex: e5.index, id: r4, type: dt.SQUARE, flags: i4, color: P2, opacity: c2, strokeColor: g2, strokeWidth: f2, strokeStyle: p2, rect: u2, author: m2, modified: d2, ...void 0 !== h2 && { cloudyBorderIntensity: h2 }, ...void 0 !== D2 && { cloudyBorderInset: D2 }, ...void 0 !== b2 && { strokeDashArray: b2 } };
      }
      readPdfAnno(e5, t3, n3, r4, o3) {
        const i4 = this.readPageAnnoRect(r4), a3 = this.convertPageRectToDeviceRect(e5, t3, i4), F2 = this.getAnnotString(r4, "T"), s3 = this.getAnnotString(r4, "M"), u2 = Ct(s3);
        return { pageIndex: e5.index, id: o3, type: n3, rect: a3, author: F2, modified: u2 };
      }
      getInReplyToId(e5, t3) {
        const n3 = this.pdfiumModule.FPDFAnnot_GetLinkedAnnot(t3, "IRT");
        if (!n3) return;
        const r4 = this.pdfiumModule.FPDFPage_GetAnnotIndex(e5, n3);
        return r4 >= 0 ? r4 : void 0;
      }
      getAnnotString(e5, t3) {
        const n3 = this.pdfiumModule.FPDFAnnot_GetStringValue(e5, t3, 0, 0);
        if (0 === n3) return;
        const r4 = 2 * (n3 + 1), o3 = this.malloc(r4);
        this.pdfiumModule.FPDFAnnot_GetStringValue(e5, t3, o3, r4);
        const i4 = this.pdfiumModule.pdfium.UTF16ToString(o3);
        return this.free(o3), i4 || void 0;
      }
      setAnnotString(e5, t3, n3) {
        const r4 = 2 * (n3.length + 1), o3 = this.malloc(r4);
        this.pdfiumModule.pdfium.stringToUTF16(n3, o3, r4);
        const i4 = this.pdfiumModule.FPDFAnnot_SetStringValue(e5, t3, o3);
        return this.free(o3), i4;
      }
      readPdfAnnoVertices(e5, t3, n3) {
        const r4 = [], o3 = this.pdfiumModule.FPDFAnnot_GetVertices(n3, 0, 0), i4 = this.malloc(8 * o3);
        this.pdfiumModule.FPDFAnnot_GetVertices(n3, i4, o3);
        for (let t4 = 0; t4 < o3; t4++) {
          const n4 = this.pdfiumModule.pdfium.getValue(i4 + 8 * t4, "float"), o4 = this.pdfiumModule.pdfium.getValue(i4 + 8 * t4 + 4, "float"), { x: a3, y: F2 } = this.convertPagePointToDevicePoint(e5, { x: n4, y: o4 });
          r4.push({ x: a3, y: F2 });
        }
        return this.free(i4), r4;
      }
      readPdfBookmarkTarget(e5, t3, n3) {
        const r4 = t3();
        if (r4) {
          return { type: "action", action: this.readPdfAction(e5, r4) };
        }
        {
          const t4 = n3();
          if (t4) {
            return { type: "destination", destination: this.readPdfDestination(e5, t4) };
          }
        }
      }
      readPdfWidgetAnnoField(e5, t3) {
        const n3 = this.pdfiumModule.FPDFAnnot_GetFormFieldFlags(e5, t3), r4 = this.pdfiumModule.FPDFAnnot_GetFormFieldType(e5, t3), o3 = x(this.pdfiumModule.pdfium, (n4, r5) => this.pdfiumModule.FPDFAnnot_GetFormFieldName(e5, t3, n4, r5), this.pdfiumModule.pdfium.UTF16ToString), i4 = x(this.pdfiumModule.pdfium, (n4, r5) => this.pdfiumModule.FPDFAnnot_GetFormFieldAlternateName(e5, t3, n4, r5), this.pdfiumModule.pdfium.UTF16ToString), a3 = x(this.pdfiumModule.pdfium, (n4, r5) => this.pdfiumModule.FPDFAnnot_GetFormFieldValue(e5, t3, n4, r5), this.pdfiumModule.pdfium.UTF16ToString), F2 = [];
        if (r4 === ht.COMBOBOX || r4 === ht.LISTBOX) {
          const n4 = this.pdfiumModule.FPDFAnnot_GetOptionCount(e5, t3);
          for (let r5 = 0; r5 < n4; r5++) {
            const n5 = x(this.pdfiumModule.pdfium, (n6, o5) => this.pdfiumModule.FPDFAnnot_GetOptionLabel(e5, t3, r5, n6, o5), this.pdfiumModule.pdfium.UTF16ToString), o4 = this.pdfiumModule.FPDFAnnot_IsOptionSelected(e5, t3, r5);
            F2.push({ label: n5, isSelected: o4 });
          }
        }
        let s3 = false;
        return r4 !== ht.CHECKBOX && r4 !== ht.RADIOBUTTON || (s3 = this.pdfiumModule.FPDFAnnot_IsChecked(e5, t3)), { flag: n3, type: r4, name: o3, alternateName: i4, value: a3, isChecked: s3, options: F2 };
      }
      renderAnnotation(e5, r4, o3, i4, a3, F2 = 1, s3 = ut.Normal, u2 = "image/webp") {
        this.logger.debug(L, N, "renderAnnotation", e5, r4, o3, i4, a3, F2, s3, u2), this.logger.perf(L, N, "RenderAnnotation", "Begin", `${e5.id}-${r4.index}-${o3.id}`);
        const m2 = new it(), l2 = this.cache.getContext(e5.id);
        if (!l2) return this.logger.perf(L, N, "RenderAnnotation", "End", `${e5.id}-${r4.index}-${o3.id}`), wt.reject({ code: bt.DocNotOpen, message: "document does not open" });
        const d2 = l2.acquirePage(r4.index), _2 = this.pdfiumModule.FPDFPage_GetAnnot(d2.pagePtr, o3.id);
        if (!_2) return d2.release(), this.logger.perf(L, N, "RenderAnnotation", "End", `${e5.id}-${r4.index}-${o3.id}`), wt.reject({ code: bt.NotFound, message: "annotation not found" });
        const P2 = i4 * F2, c2 = o3.rect, p2 = Be(Je(r4.size, c2, a3, P2)), f2 = j.Bitmap_BGRA, A2 = p2.size.width * p2.size.height * 4, G2 = this.malloc(A2), E2 = this.pdfiumModule.FPDFBitmap_CreateEx(p2.size.width, p2.size.height, f2, G2, 4 * p2.size.width);
        this.pdfiumModule.FPDFBitmap_FillRect(E2, 0, 0, p2.size.width, p2.size.height, 0);
        const M2 = et(o3.rect, a3, P2), y3 = this.malloc(24);
        new Float32Array(this.pdfiumModule.pdfium.HEAPF32.buffer, y3, 6).set([M2.a, M2.b, M2.c, M2.d, M2.e, M2.f]);
        const C3 = B.REVERSE_BYTE_ORDER, T3 = !!this.pdfiumModule.EPDF_RenderAnnotBitmap(E2, d2.pagePtr, _2, s3, y3, C3);
        if (this.free(y3), this.pdfiumModule.FPDFBitmap_Destroy(E2), this.pdfiumModule.FPDFPage_CloseAnnot(_2), d2.release(), !T3) return this.free(G2), this.logger.perf(L, N, "RenderAnnotation", "End", `${e5.id}-${r4.index}-${o3.id}`), wt.reject({ code: bt.Unknown, message: "EPDF_RenderAnnotBitmap failed" });
        const O3 = this.pdfiumModule.pdfium.HEAPU8.subarray(G2, G2 + A2), x3 = { data: new Uint8ClampedArray(O3), width: p2.size.width, height: p2.size.height };
        return this.free(G2), this.logger.perf(L, N, "RenderAnnotation", "End", `${e5.id}-${r4.index}-${o3.id}`), this.imageDataConverter(x3, u2).then((e6) => m2.resolve(e6)).catch((e6) => m2.reject({ code: bt.Unknown, message: String(e6) })), m2;
      }
      renderPageRectToImageData(e5, t3, n3, r4, o3, i4, a3) {
        const F2 = j.Bitmap_BGRA, s3 = Be(Je(t3.size, n3, o3, r4 * i4)), u2 = je(We(t3.size, o3, r4 * i4)), m2 = s3.size.width * s3.size.height * 4, l2 = this.malloc(m2), d2 = this.pdfiumModule.FPDFBitmap_CreateEx(s3.size.width, s3.size.height, F2, l2, 4 * s3.size.width);
        this.pdfiumModule.FPDFBitmap_FillRect(d2, 0, 0, s3.size.width, s3.size.height, 4294967295);
        let _2 = B.REVERSE_BYTE_ORDER;
        a3?.withAnnotations && (_2 |= B.ANNOT);
        const P2 = e5.acquirePage(t3.index);
        this.pdfiumModule.FPDF_RenderPageBitmap(d2, P2.pagePtr, -s3.origin.x, -s3.origin.y, u2.width, u2.height, o3, _2), this.pdfiumModule.FPDFBitmap_Destroy(d2), P2.release();
        const c2 = this.pdfiumModule.pdfium.HEAPU8.subarray(l2, l2 + m2), D2 = { data: new Uint8ClampedArray(c2), width: s3.size.width, height: s3.size.height };
        return this.free(l2), D2;
      }
      readPdfLinkAnnoTarget(e5, t3, n3) {
        const r4 = n3();
        if (r4) {
          return { type: "destination", destination: this.readPdfDestination(e5, r4) };
        }
        {
          const n4 = t3();
          if (n4) {
            return { type: "action", action: this.readPdfAction(e5, n4) };
          }
        }
      }
      readPdfAction(e5, t3) {
        let n3;
        switch (this.pdfiumModule.FPDFAction_GetType(t3)) {
          case ct.Unsupported:
            n3 = { type: ct.Unsupported };
            break;
          case ct.Goto:
            {
              const r4 = this.pdfiumModule.FPDFAction_GetDest(e5, t3);
              if (r4) {
                const t4 = this.readPdfDestination(e5, r4);
                n3 = { type: ct.Goto, destination: t4 };
              } else n3 = { type: ct.Unsupported };
            }
            break;
          case ct.RemoteGoto:
            n3 = { type: ct.Unsupported };
            break;
          case ct.URI:
            {
              const r4 = x(this.pdfiumModule.pdfium, (n4, r5) => this.pdfiumModule.FPDFAction_GetURIPath(e5, t3, n4, r5), this.pdfiumModule.pdfium.UTF8ToString);
              n3 = { type: ct.URI, uri: r4 };
            }
            break;
          case ct.LaunchAppOrOpenFile: {
            const e6 = x(this.pdfiumModule.pdfium, (e7, n4) => this.pdfiumModule.FPDFAction_GetFilePath(t3, e7, n4), this.pdfiumModule.pdfium.UTF8ToString);
            n3 = { type: ct.LaunchAppOrOpenFile, path: e6 };
          }
        }
        return n3;
      }
      readPdfDestination(e5, t3) {
        const n3 = this.pdfiumModule.FPDFDest_GetDestPageIndex(e5, t3), r4 = this.malloc(4), o3 = this.malloc(16), i4 = this.pdfiumModule.FPDFDest_GetView(t3, r4, o3), a3 = this.pdfiumModule.pdfium.getValue(r4, "i32"), F2 = [];
        for (let e6 = 0; e6 < a3; e6++) {
          const t4 = o3 + 4 * e6;
          F2.push(this.pdfiumModule.pdfium.getValue(t4, "float"));
        }
        if (this.free(r4), this.free(o3), i4 === lt.XYZ) {
          const e6 = this.malloc(1), r5 = this.malloc(1), o4 = this.malloc(1), a4 = this.malloc(4), s3 = this.malloc(4), u2 = this.malloc(4);
          if (this.pdfiumModule.FPDFDest_GetLocationInPage(t3, e6, r5, o4, a4, s3, u2)) {
            const t4 = this.pdfiumModule.pdfium.getValue(e6, "i8"), m2 = this.pdfiumModule.pdfium.getValue(r5, "i8"), l2 = this.pdfiumModule.pdfium.getValue(o4, "i8"), d2 = t4 ? this.pdfiumModule.pdfium.getValue(a4, "float") : 0, _2 = m2 ? this.pdfiumModule.pdfium.getValue(s3, "float") : 0, P2 = l2 ? this.pdfiumModule.pdfium.getValue(u2, "float") : 0;
            return this.free(e6), this.free(r5), this.free(o4), this.free(a4), this.free(s3), this.free(u2), { pageIndex: n3, zoom: { mode: i4, params: { x: d2, y: _2, zoom: P2 } }, view: F2 };
          }
          return this.free(e6), this.free(r5), this.free(o4), this.free(a4), this.free(s3), this.free(u2), { pageIndex: n3, zoom: { mode: i4, params: { x: 0, y: 0, zoom: 0 } }, view: F2 };
        }
        return { pageIndex: n3, zoom: { mode: i4 }, view: F2 };
      }
      readPdfAttachment(e5, t3) {
        const n3 = this.pdfiumModule.FPDFDoc_GetAttachment(e5, t3);
        return { index: t3, name: x(this.pdfiumModule.pdfium, (e6, t4) => this.pdfiumModule.FPDFAttachment_GetName(n3, e6, t4), this.pdfiumModule.pdfium.UTF16ToString), creationDate: x(this.pdfiumModule.pdfium, (e6, t4) => this.pdfiumModule.FPDFAttachment_GetStringValue(n3, "CreationDate", e6, t4), this.pdfiumModule.pdfium.UTF16ToString), checksum: x(this.pdfiumModule.pdfium, (e6, t4) => this.pdfiumModule.FPDFAttachment_GetStringValue(n3, "Checksum", e6, t4), this.pdfiumModule.pdfium.UTF16ToString) };
      }
      convertDevicePointToPagePoint(e5, t3) {
        return { x: t3.x, y: e5.size.height - t3.y };
      }
      convertPagePointToDevicePoint(e5, t3) {
        return { x: t3.x, y: e5.size.height - t3.y };
      }
      convertPageRectToDeviceRect(e5, t3, n3) {
        const { x: r4, y: o3 } = this.convertPagePointToDevicePoint(e5, { x: n3.left, y: n3.top });
        return { origin: { x: r4, y: o3 }, size: { width: Math.abs(n3.right - n3.left), height: Math.abs(n3.top - n3.bottom) } };
      }
      readPageAnnoAppearanceStreams(e5) {
        return { normal: this.readPageAnnoAppearanceStream(e5, ut.Normal), rollover: this.readPageAnnoAppearanceStream(e5, ut.Rollover), down: this.readPageAnnoAppearanceStream(e5, ut.Down) };
      }
      readPageAnnoAppearanceStream(e5, t3 = ut.Normal) {
        const n3 = 2 * (this.pdfiumModule.FPDFAnnot_GetAP(e5, t3, 0, 0) + 1), r4 = this.malloc(n3);
        this.pdfiumModule.FPDFAnnot_GetAP(e5, t3, r4, n3);
        const o3 = this.pdfiumModule.pdfium.UTF16ToString(r4);
        return this.free(r4), o3;
      }
      updateAnnotationColor(e5, r4, o3, i4, a3 = 0) {
        this.logger.debug(L, N, "setAnnotationColor", e5, r4, o3, i4, a3), this.logger.perf(L, N, "setAnnotationColor", "Begin", e5.id);
        const F2 = wt.create();
        try {
          const t3 = this.cache.getContext(e5.id);
          if (!t3) return this.logger.perf(L, N, "setAnnotationColor", "End", e5.id), this.logger.warn(L, N, "setAnnotationColor: doc closed"), F2.resolve(false), F2;
          const n3 = t3.acquirePage(r4.index), s3 = this.pdfiumModule.FPDFPage_GetAnnot(n3.pagePtr, o3.id);
          if (!s3) return this.logger.perf(L, N, "setAnnotationColor", "End", e5.id), this.logger.warn(L, N, "setAnnotationColor: annot not found"), n3.release(), F2.resolve(false), F2;
          const u2 = this.setAnnotationColor(s3, i4, a3);
          u2 && this.pdfiumModule.FPDFPage_GenerateContent(n3.pagePtr), this.pdfiumModule.FPDFPage_CloseAnnot(s3), n3.release(), this.logger.perf(L, N, "setAnnotationColor", "End", e5.id), F2.resolve(!!u2);
        } catch (t3) {
          this.logger.perf(L, N, "setAnnotationColor", "End", e5.id), this.logger.error(L, N, "setAnnotationColor: error", t3), F2.reject({ code: bt.Unknown, message: `Failed to set annotation color: ${t3 instanceof Error ? t3.message : String(t3)}` });
        }
        return F2;
      }
      setPageAnnoRect(e5, t3, n3, r4) {
        const o3 = this.malloc(8), i4 = this.malloc(8);
        if (!this.pdfiumModule.FPDF_DeviceToPage(t3, 0, 0, e5.size.width, e5.size.height, 0, r4.origin.x, r4.origin.y, o3, i4)) return this.free(o3), this.free(i4), false;
        const a3 = this.pdfiumModule.pdfium.getValue(o3, "double"), F2 = this.pdfiumModule.pdfium.getValue(i4, "double");
        this.free(o3), this.free(i4);
        const s3 = this.malloc(16);
        return this.pdfiumModule.pdfium.setValue(s3, a3, "float"), this.pdfiumModule.pdfium.setValue(s3 + 4, F2, "float"), this.pdfiumModule.pdfium.setValue(s3 + 8, a3 + r4.size.width, "float"), this.pdfiumModule.pdfium.setValue(s3 + 12, F2 - r4.size.height, "float"), this.pdfiumModule.FPDFAnnot_SetRect(n3, s3) ? (this.free(s3), true) : (this.free(s3), false);
      }
      readPageAnnoRect(e5) {
        const t3 = this.malloc(16), n3 = { left: 0, top: 0, right: 0, bottom: 0 };
        return this.pdfiumModule.FPDFAnnot_GetRect(e5, t3) && (n3.left = this.pdfiumModule.pdfium.getValue(t3, "float"), n3.top = this.pdfiumModule.pdfium.getValue(t3 + 4, "float"), n3.right = this.pdfiumModule.pdfium.getValue(t3 + 8, "float"), n3.bottom = this.pdfiumModule.pdfium.getValue(t3 + 12, "float")), this.free(t3), n3;
      }
      getHighlightRects(e5, t3, n3, r4, o3) {
        const i4 = this.pdfiumModule.FPDFText_CountRects(n3, r4, o3), a3 = [];
        for (let r5 = 0; r5 < i4; r5++) {
          const o4 = this.malloc(8), i5 = this.malloc(8), F2 = this.malloc(8), s3 = this.malloc(8);
          if (!this.pdfiumModule.FPDFText_GetRect(n3, r5, i5, o4, F2, s3)) {
            this.free(i5), this.free(o4), this.free(F2), this.free(s3);
            continue;
          }
          const u2 = this.pdfiumModule.pdfium.getValue(i5, "double"), m2 = this.pdfiumModule.pdfium.getValue(o4, "double"), l2 = this.pdfiumModule.pdfium.getValue(F2, "double"), d2 = this.pdfiumModule.pdfium.getValue(s3, "double");
          this.free(i5), this.free(o4), this.free(F2), this.free(s3);
          const _2 = this.malloc(4), P2 = this.malloc(4);
          this.pdfiumModule.FPDF_PageToDevice(t3, 0, 0, e5.size.width, e5.size.height, 0, u2, m2, _2, P2);
          const c2 = this.pdfiumModule.pdfium.getValue(_2, "i32"), g2 = this.pdfiumModule.pdfium.getValue(P2, "i32");
          this.free(_2), this.free(P2);
          const h2 = Math.ceil(Math.abs(l2 - u2)), D2 = Math.ceil(Math.abs(m2 - d2));
          a3.push({ origin: { x: c2, y: g2 }, size: { width: h2, height: D2 } });
        }
        return a3;
      }
      searchAllPages(e5, r4, o3 = []) {
        this.logger.debug(L, N, "searchAllPages", e5, r4, o3), this.logger.perf(L, N, "SearchAllPages", "Begin", e5.id);
        const i4 = this.cache.getContext(e5.id);
        if (!i4) return this.logger.perf(L, N, "SearchAllPages", "End", e5.id), wt.resolve({ results: [], total: 0 });
        const a3 = 2 * (r4.length + 1), F2 = this.malloc(a3);
        this.pdfiumModule.pdfium.stringToUTF16(r4, F2, a3);
        const s3 = o3.reduce((e6, t3) => e6 | t3, yt.None), u2 = [], m2 = wt.create();
        return (async () => {
          for (let t3 = 0; t3 < e5.pageCount; t3++) {
            const n3 = this.searchAllInPage(i4, e5.pages[t3], F2, s3);
            u2.push(...n3);
          }
          this.free(F2), this.logger.perf(L, N, "SearchAllPages", "End", e5.id), m2.resolve({ results: u2, total: u2.length });
        })().catch((t3) => {
          this.free(F2), this.logger.perf(L, N, "SearchAllPages", "End", e5.id), m2.reject({ code: bt.Unknown, message: `Error searching document: ${t3}` });
        }), m2;
      }
      buildContext(e5, t3, n3, r4 = 30) {
        const o3 = /[\s\u00A0.,;:!?()\[\]{}<>/\\\-"'`"”\u2013\u2014]/;
        let i4 = t3;
        for (; i4 > 0 && o3.test(e5[i4 - 1]); ) i4--;
        let a3 = 0;
        for (; i4 > 0 && a3 < r4; ) i4--, o3.test(e5[i4]) || a3++;
        i4 = ((t4) => {
          for (; t4 > 0 && !o3.test(e5[t4 - 1]); ) t4--;
          return t4;
        })(i4);
        let F2 = t3 + n3;
        for (; F2 < e5.length && o3.test(e5[F2]); ) F2++;
        for (a3 = 0; F2 < e5.length && a3 < r4; ) o3.test(e5[F2]) || a3++, F2++;
        F2 = ((t4) => {
          for (; t4 < e5.length && !o3.test(e5[t4]); ) t4++;
          return t4;
        })(F2);
        const s3 = e5.slice(i4, t3).replace(/\s+/g, " ").trimStart(), u2 = e5.slice(t3, t3 + n3), m2 = e5.slice(t3 + n3, F2).replace(/\s+/g, " ").trimEnd();
        return { before: this.tidy(s3), match: this.tidy(u2), after: this.tidy(m2), truncatedLeft: i4 > 0, truncatedRight: F2 < e5.length };
      }
      tidy(e5) {
        return e5.replace(/-\uFFFE\s*/g, "").replace(/[\uFFFE\u00AD\u200B\u2060\uFEFF]/g, "").replace(/\s+/g, " ");
      }
      searchAllInPage(e5, t3, n3, r4) {
        const o3 = t3.index, i4 = e5.acquirePage(o3), a3 = i4.getTextPage(), F2 = this.pdfiumModule.FPDFText_CountChars(a3), s3 = this.malloc(2 * (F2 + 1));
        this.pdfiumModule.FPDFText_GetText(a3, 0, F2, s3);
        const u2 = this.pdfiumModule.pdfium.UTF16ToString(s3);
        this.free(s3);
        const m2 = [], l2 = this.pdfiumModule.FPDFText_FindStart(a3, n3, r4, 0);
        for (; this.pdfiumModule.FPDFText_FindNext(l2); ) {
          const e6 = this.pdfiumModule.FPDFText_GetSchResultIndex(l2), n4 = this.pdfiumModule.FPDFText_GetSchCount(l2), r5 = this.getHighlightRects(t3, i4.pagePtr, a3, e6, n4), F3 = this.buildContext(u2, e6, n4);
          m2.push({ pageIndex: o3, charIndex: e6, charCount: n4, rects: r5, context: F3 });
        }
        return this.pdfiumModule.FPDFText_FindClose(l2), i4.release(), m2;
      }
    };
  }
});

// src/vendor/embedpdf/embedpdf-2704eb24.js
function e2(e5, t3) {
  (null == t3 || t3 > e5.length) && (t3 = e5.length);
  for (var n3 = 0, o3 = Array(t3); n3 < t3; n3++) o3[n3] = e5[n3];
  return o3;
}
function t2(e5, t3, n3, o3, i4, r4, a3) {
  try {
    var s3 = e5[r4](a3), l2 = s3.value;
  } catch (e6) {
    return void n3(e6);
  }
  s3.done ? t3(l2) : Promise.resolve(l2).then(o3, i4);
}
function n2(e5) {
  return function() {
    var n3 = this, o3 = arguments;
    return new Promise(function(i4, r4) {
      var a3 = e5.apply(n3, o3);
      function s3(e6) {
        t2(a3, i4, r4, s3, l2, "next", e6);
      }
      function l2(e6) {
        t2(a3, i4, r4, s3, l2, "throw", e6);
      }
      s3(void 0);
    });
  };
}
function o2(e5, t3, n3) {
  return t3 = c(t3), function(e6, t4) {
    if (t4 && ("object" == typeof t4 || "function" == typeof t4)) return t4;
    if (void 0 !== t4) throw new TypeError("Derived constructors may only return object or undefined");
    return function(e7) {
      if (void 0 === e7) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
      return e7;
    }(e6);
  }(e5, u() ? Reflect.construct(t3, n3 || [], c(e5).constructor) : t3.apply(e5, n3));
}
function i3(e5, t3) {
  if (!(e5 instanceof t3)) throw new TypeError("Cannot call a class as a function");
}
function r3(e5, t3) {
  for (var n3 = 0; n3 < t3.length; n3++) {
    var o3 = t3[n3];
    o3.enumerable = o3.enumerable || false, o3.configurable = true, "value" in o3 && (o3.writable = true), Object.defineProperty(e5, b(o3.key), o3);
  }
}
function a2(e5, t3, n3) {
  return t3 && r3(e5.prototype, t3), n3 && r3(e5, n3), Object.defineProperty(e5, "prototype", { writable: false }), e5;
}
function s2(e5, t3) {
  var n3 = "undefined" != typeof Symbol && e5[Symbol.iterator] || e5["@@iterator"];
  if (!n3) {
    if (Array.isArray(e5) || (n3 = w2(e5)) || t3 && e5 && "number" == typeof e5.length) {
      n3 && (e5 = n3);
      var o3 = 0, i4 = function() {
      };
      return { s: i4, n: function() {
        return o3 >= e5.length ? { done: true } : { done: false, value: e5[o3++] };
      }, e: function(e6) {
        throw e6;
      }, f: i4 };
    }
    throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
  }
  var r4, a3 = true, s3 = false;
  return { s: function() {
    n3 = n3.call(e5);
  }, n: function() {
    var e6 = n3.next();
    return a3 = e6.done, e6;
  }, e: function(e6) {
    s3 = true, r4 = e6;
  }, f: function() {
    try {
      a3 || null == n3.return || n3.return();
    } finally {
      if (s3) throw r4;
    }
  } };
}
function l(e5, t3, n3) {
  return (t3 = b(t3)) in e5 ? Object.defineProperty(e5, t3, { value: n3, enumerable: true, configurable: true, writable: true }) : e5[t3] = n3, e5;
}
function c(e5) {
  return c = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(e6) {
    return e6.__proto__ || Object.getPrototypeOf(e6);
  }, c(e5);
}
function d(e5, t3) {
  if ("function" != typeof t3 && null !== t3) throw new TypeError("Super expression must either be null or a function");
  e5.prototype = Object.create(t3 && t3.prototype, { constructor: { value: e5, writable: true, configurable: true } }), Object.defineProperty(e5, "prototype", { writable: false }), t3 && f(e5, t3);
}
function u() {
  try {
    var e5 = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
    }));
  } catch (e6) {
  }
  return (u = function() {
    return !!e5;
  })();
}
function h(e5, t3) {
  var n3 = Object.keys(e5);
  if (Object.getOwnPropertySymbols) {
    var o3 = Object.getOwnPropertySymbols(e5);
    t3 && (o3 = o3.filter(function(t4) {
      return Object.getOwnPropertyDescriptor(e5, t4).enumerable;
    })), n3.push.apply(n3, o3);
  }
  return n3;
}
function p(e5) {
  for (var t3 = 1; t3 < arguments.length; t3++) {
    var n3 = null != arguments[t3] ? arguments[t3] : {};
    t3 % 2 ? h(Object(n3), true).forEach(function(t4) {
      l(e5, t4, n3[t4]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e5, Object.getOwnPropertyDescriptors(n3)) : h(Object(n3)).forEach(function(t4) {
      Object.defineProperty(e5, t4, Object.getOwnPropertyDescriptor(n3, t4));
    });
  }
  return e5;
}
function g(e5, t3) {
  if (null == e5) return {};
  var n3, o3, i4 = function(e6, t4) {
    if (null == e6) return {};
    var n4 = {};
    for (var o4 in e6) if ({}.hasOwnProperty.call(e6, o4)) {
      if (-1 !== t4.indexOf(o4)) continue;
      n4[o4] = e6[o4];
    }
    return n4;
  }(e5, t3);
  if (Object.getOwnPropertySymbols) {
    var r4 = Object.getOwnPropertySymbols(e5);
    for (o3 = 0; o3 < r4.length; o3++) n3 = r4[o3], -1 === t3.indexOf(n3) && {}.propertyIsEnumerable.call(e5, n3) && (i4[n3] = e5[n3]);
  }
  return i4;
}
function m() {
  m = function() {
    return t3;
  };
  var e5, t3 = {}, n3 = Object.prototype, o3 = n3.hasOwnProperty, i4 = Object.defineProperty || function(e6, t4, n4) {
    e6[t4] = n4.value;
  }, r4 = "function" == typeof Symbol ? Symbol : {}, a3 = r4.iterator || "@@iterator", s3 = r4.asyncIterator || "@@asyncIterator", l2 = r4.toStringTag || "@@toStringTag";
  function c2(e6, t4, n4) {
    return Object.defineProperty(e6, t4, { value: n4, enumerable: true, configurable: true, writable: true }), e6[t4];
  }
  try {
    c2({}, "");
  } catch (e6) {
    c2 = function(e7, t4, n4) {
      return e7[t4] = n4;
    };
  }
  function d2(e6, t4, n4, o4) {
    var r5 = t4 && t4.prototype instanceof y3 ? t4 : y3, a4 = Object.create(r5.prototype), s4 = new A2(o4 || []);
    return i4(a4, "_invoke", { value: M2(e6, n4, s4) }), a4;
  }
  function u2(e6, t4, n4) {
    try {
      return { type: "normal", arg: e6.call(t4, n4) };
    } catch (e7) {
      return { type: "throw", arg: e7 };
    }
  }
  t3.wrap = d2;
  var h2 = "suspendedStart", p2 = "suspendedYield", g2 = "executing", f2 = "completed", v3 = {};
  function y3() {
  }
  function b2() {
  }
  function w3() {
  }
  var x3 = {};
  c2(x3, a3, function() {
    return this;
  });
  var k3 = Object.getPrototypeOf, C3 = k3 && k3(k3(z3([])));
  C3 && C3 !== n3 && o3.call(C3, a3) && (x3 = C3);
  var S2 = w3.prototype = y3.prototype = Object.create(x3);
  function _2(e6) {
    ["next", "throw", "return"].forEach(function(t4) {
      c2(e6, t4, function(e7) {
        return this._invoke(t4, e7);
      });
    });
  }
  function I3(e6, t4) {
    function n4(i5, r6, a4, s4) {
      var l3 = u2(e6[i5], e6, r6);
      if ("throw" !== l3.type) {
        var c3 = l3.arg, d3 = c3.value;
        return d3 && "object" == typeof d3 && o3.call(d3, "__await") ? t4.resolve(d3.__await).then(function(e7) {
          n4("next", e7, a4, s4);
        }, function(e7) {
          n4("throw", e7, a4, s4);
        }) : t4.resolve(d3).then(function(e7) {
          c3.value = e7, a4(c3);
        }, function(e7) {
          return n4("throw", e7, a4, s4);
        });
      }
      s4(l3.arg);
    }
    var r5;
    i4(this, "_invoke", { value: function(e7, o4) {
      function i5() {
        return new t4(function(t5, i6) {
          n4(e7, o4, t5, i6);
        });
      }
      return r5 = r5 ? r5.then(i5, i5) : i5();
    } });
  }
  function M2(t4, n4, o4) {
    var i5 = h2;
    return function(r5, a4) {
      if (i5 === g2) throw Error("Generator is already running");
      if (i5 === f2) {
        if ("throw" === r5) throw a4;
        return { value: e5, done: true };
      }
      for (o4.method = r5, o4.arg = a4; ; ) {
        var s4 = o4.delegate;
        if (s4) {
          var l3 = P2(s4, o4);
          if (l3) {
            if (l3 === v3) continue;
            return l3;
          }
        }
        if ("next" === o4.method) o4.sent = o4._sent = o4.arg;
        else if ("throw" === o4.method) {
          if (i5 === h2) throw i5 = f2, o4.arg;
          o4.dispatchException(o4.arg);
        } else "return" === o4.method && o4.abrupt("return", o4.arg);
        i5 = g2;
        var c3 = u2(t4, n4, o4);
        if ("normal" === c3.type) {
          if (i5 = o4.done ? f2 : p2, c3.arg === v3) continue;
          return { value: c3.arg, done: o4.done };
        }
        "throw" === c3.type && (i5 = f2, o4.method = "throw", o4.arg = c3.arg);
      }
    };
  }
  function P2(t4, n4) {
    var o4 = n4.method, i5 = t4.iterator[o4];
    if (i5 === e5) return n4.delegate = null, "throw" === o4 && t4.iterator.return && (n4.method = "return", n4.arg = e5, P2(t4, n4), "throw" === n4.method) || "return" !== o4 && (n4.method = "throw", n4.arg = new TypeError("The iterator does not provide a '" + o4 + "' method")), v3;
    var r5 = u2(i5, t4.iterator, n4.arg);
    if ("throw" === r5.type) return n4.method = "throw", n4.arg = r5.arg, n4.delegate = null, v3;
    var a4 = r5.arg;
    return a4 ? a4.done ? (n4[t4.resultName] = a4.value, n4.next = t4.nextLoc, "return" !== n4.method && (n4.method = "next", n4.arg = e5), n4.delegate = null, v3) : a4 : (n4.method = "throw", n4.arg = new TypeError("iterator result is not an object"), n4.delegate = null, v3);
  }
  function T3(e6) {
    var t4 = { tryLoc: e6[0] };
    1 in e6 && (t4.catchLoc = e6[1]), 2 in e6 && (t4.finallyLoc = e6[2], t4.afterLoc = e6[3]), this.tryEntries.push(t4);
  }
  function E2(e6) {
    var t4 = e6.completion || {};
    t4.type = "normal", delete t4.arg, e6.completion = t4;
  }
  function A2(e6) {
    this.tryEntries = [{ tryLoc: "root" }], e6.forEach(T3, this), this.reset(true);
  }
  function z3(t4) {
    if (t4 || "" === t4) {
      var n4 = t4[a3];
      if (n4) return n4.call(t4);
      if ("function" == typeof t4.next) return t4;
      if (!isNaN(t4.length)) {
        var i5 = -1, r5 = function n5() {
          for (; ++i5 < t4.length; ) if (o3.call(t4, i5)) return n5.value = t4[i5], n5.done = false, n5;
          return n5.value = e5, n5.done = true, n5;
        };
        return r5.next = r5;
      }
    }
    throw new TypeError(typeof t4 + " is not iterable");
  }
  return b2.prototype = w3, i4(S2, "constructor", { value: w3, configurable: true }), i4(w3, "constructor", { value: b2, configurable: true }), b2.displayName = c2(w3, l2, "GeneratorFunction"), t3.isGeneratorFunction = function(e6) {
    var t4 = "function" == typeof e6 && e6.constructor;
    return !!t4 && (t4 === b2 || "GeneratorFunction" === (t4.displayName || t4.name));
  }, t3.mark = function(e6) {
    return Object.setPrototypeOf ? Object.setPrototypeOf(e6, w3) : (e6.__proto__ = w3, c2(e6, l2, "GeneratorFunction")), e6.prototype = Object.create(S2), e6;
  }, t3.awrap = function(e6) {
    return { __await: e6 };
  }, _2(I3.prototype), c2(I3.prototype, s3, function() {
    return this;
  }), t3.AsyncIterator = I3, t3.async = function(e6, n4, o4, i5, r5) {
    void 0 === r5 && (r5 = Promise);
    var a4 = new I3(d2(e6, n4, o4, i5), r5);
    return t3.isGeneratorFunction(n4) ? a4 : a4.next().then(function(e7) {
      return e7.done ? e7.value : a4.next();
    });
  }, _2(S2), c2(S2, l2, "Generator"), c2(S2, a3, function() {
    return this;
  }), c2(S2, "toString", function() {
    return "[object Generator]";
  }), t3.keys = function(e6) {
    var t4 = Object(e6), n4 = [];
    for (var o4 in t4) n4.push(o4);
    return n4.reverse(), function e7() {
      for (; n4.length; ) {
        var o5 = n4.pop();
        if (o5 in t4) return e7.value = o5, e7.done = false, e7;
      }
      return e7.done = true, e7;
    };
  }, t3.values = z3, A2.prototype = { constructor: A2, reset: function(t4) {
    if (this.prev = 0, this.next = 0, this.sent = this._sent = e5, this.done = false, this.delegate = null, this.method = "next", this.arg = e5, this.tryEntries.forEach(E2), !t4) for (var n4 in this) "t" === n4.charAt(0) && o3.call(this, n4) && !isNaN(+n4.slice(1)) && (this[n4] = e5);
  }, stop: function() {
    this.done = true;
    var e6 = this.tryEntries[0].completion;
    if ("throw" === e6.type) throw e6.arg;
    return this.rval;
  }, dispatchException: function(t4) {
    if (this.done) throw t4;
    var n4 = this;
    function i5(o4, i6) {
      return s4.type = "throw", s4.arg = t4, n4.next = o4, i6 && (n4.method = "next", n4.arg = e5), !!i6;
    }
    for (var r5 = this.tryEntries.length - 1; r5 >= 0; --r5) {
      var a4 = this.tryEntries[r5], s4 = a4.completion;
      if ("root" === a4.tryLoc) return i5("end");
      if (a4.tryLoc <= this.prev) {
        var l3 = o3.call(a4, "catchLoc"), c3 = o3.call(a4, "finallyLoc");
        if (l3 && c3) {
          if (this.prev < a4.catchLoc) return i5(a4.catchLoc, true);
          if (this.prev < a4.finallyLoc) return i5(a4.finallyLoc);
        } else if (l3) {
          if (this.prev < a4.catchLoc) return i5(a4.catchLoc, true);
        } else {
          if (!c3) throw Error("try statement without catch or finally");
          if (this.prev < a4.finallyLoc) return i5(a4.finallyLoc);
        }
      }
    }
  }, abrupt: function(e6, t4) {
    for (var n4 = this.tryEntries.length - 1; n4 >= 0; --n4) {
      var i5 = this.tryEntries[n4];
      if (i5.tryLoc <= this.prev && o3.call(i5, "finallyLoc") && this.prev < i5.finallyLoc) {
        var r5 = i5;
        break;
      }
    }
    r5 && ("break" === e6 || "continue" === e6) && r5.tryLoc <= t4 && t4 <= r5.finallyLoc && (r5 = null);
    var a4 = r5 ? r5.completion : {};
    return a4.type = e6, a4.arg = t4, r5 ? (this.method = "next", this.next = r5.finallyLoc, v3) : this.complete(a4);
  }, complete: function(e6, t4) {
    if ("throw" === e6.type) throw e6.arg;
    return "break" === e6.type || "continue" === e6.type ? this.next = e6.arg : "return" === e6.type ? (this.rval = this.arg = e6.arg, this.method = "return", this.next = "end") : "normal" === e6.type && t4 && (this.next = t4), v3;
  }, finish: function(e6) {
    for (var t4 = this.tryEntries.length - 1; t4 >= 0; --t4) {
      var n4 = this.tryEntries[t4];
      if (n4.finallyLoc === e6) return this.complete(n4.completion, n4.afterLoc), E2(n4), v3;
    }
  }, catch: function(e6) {
    for (var t4 = this.tryEntries.length - 1; t4 >= 0; --t4) {
      var n4 = this.tryEntries[t4];
      if (n4.tryLoc === e6) {
        var o4 = n4.completion;
        if ("throw" === o4.type) {
          var i5 = o4.arg;
          E2(n4);
        }
        return i5;
      }
    }
    throw Error("illegal catch attempt");
  }, delegateYield: function(t4, n4, o4) {
    return this.delegate = { iterator: z3(t4), resultName: n4, nextLoc: o4 }, "next" === this.method && (this.arg = e5), v3;
  } }, t3;
}
function f(e5, t3) {
  return f = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(e6, t4) {
    return e6.__proto__ = t4, e6;
  }, f(e5, t3);
}
function v2(e5, t3) {
  return function(e6) {
    if (Array.isArray(e6)) return e6;
  }(e5) || function(e6, t4) {
    var n3 = null == e6 ? null : "undefined" != typeof Symbol && e6[Symbol.iterator] || e6["@@iterator"];
    if (null != n3) {
      var o3, i4, r4, a3, s3 = [], l2 = true, c2 = false;
      try {
        if (r4 = (n3 = n3.call(e6)).next, 0 === t4) {
          if (Object(n3) !== n3) return;
          l2 = false;
        } else for (; !(l2 = (o3 = r4.call(n3)).done) && (s3.push(o3.value), s3.length !== t4); l2 = true) ;
      } catch (e7) {
        c2 = true, i4 = e7;
      } finally {
        try {
          if (!l2 && null != n3.return && (a3 = n3.return(), Object(a3) !== a3)) return;
        } finally {
          if (c2) throw i4;
        }
      }
      return s3;
    }
  }(e5, t3) || w2(e5, t3) || function() {
    throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
  }();
}
function y2(t3) {
  return function(t4) {
    if (Array.isArray(t4)) return e2(t4);
  }(t3) || function(e5) {
    if ("undefined" != typeof Symbol && null != e5[Symbol.iterator] || null != e5["@@iterator"]) return Array.from(e5);
  }(t3) || w2(t3) || function() {
    throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
  }();
}
function b(e5) {
  var t3 = function(e6, t4) {
    if ("object" != typeof e6 || !e6) return e6;
    var n3 = e6[Symbol.toPrimitive];
    if (void 0 !== n3) {
      var o3 = n3.call(e6, t4 || "default");
      if ("object" != typeof o3) return o3;
      throw new TypeError("@@toPrimitive must return a primitive value.");
    }
    return ("string" === t4 ? String : Number)(e6);
  }(e5, "string");
  return "symbol" == typeof t3 ? t3 : t3 + "";
}
function w2(t3, n3) {
  if (t3) {
    if ("string" == typeof t3) return e2(t3, n3);
    var o3 = {}.toString.call(t3).slice(8, -1);
    return "Object" === o3 && t3.constructor && (o3 = t3.constructor.name), "Map" === o3 || "Set" === o3 ? Array.from(t3) : "Arguments" === o3 || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(o3) ? e2(t3, n3) : void 0;
  }
}
function x2(e5) {
  var t3 = "function" == typeof Map ? /* @__PURE__ */ new Map() : void 0;
  return x2 = function(e6) {
    if (null === e6 || !function(e7) {
      try {
        return -1 !== Function.toString.call(e7).indexOf("[native code]");
      } catch (t4) {
        return "function" == typeof e7;
      }
    }(e6)) return e6;
    if ("function" != typeof e6) throw new TypeError("Super expression must either be null or a function");
    if (void 0 !== t3) {
      if (t3.has(e6)) return t3.get(e6);
      t3.set(e6, n3);
    }
    function n3() {
      return function(e7, t4, n4) {
        if (u()) return Reflect.construct.apply(null, arguments);
        var o3 = [null];
        o3.push.apply(o3, t4);
        var i4 = new (e7.bind.apply(e7, o3))();
        return n4 && f(i4, n4.prototype), i4;
      }(e6, arguments, c(this).constructor);
    }
    return n3.prototype = Object.create(e6.prototype, { constructor: { value: n3, enumerable: false, writable: true, configurable: true } }), f(n3, e6);
  }, x2(e5);
}
function D(e5, t3) {
  for (var n3 in t3) e5[n3] = t3[n3];
  return e5;
}
function F(e5) {
  e5 && e5.parentNode && e5.parentNode.removeChild(e5);
}
function U2(e5, t3, n3) {
  var o3, i4, r4, a3 = {};
  for (r4 in t3) "key" == r4 ? o3 = t3[r4] : "ref" == r4 ? i4 = t3[r4] : a3[r4] = t3[r4];
  if (arguments.length > 2 && (a3.children = arguments.length > 3 ? k2.call(arguments, 2) : n3), "function" == typeof e5 && null != e5.defaultProps) for (r4 in e5.defaultProps) void 0 === a3[r4] && (a3[r4] = e5.defaultProps[r4]);
  return $(e5, a3, o3, i4, null);
}
function $(e5, t3, n3, o3, i4) {
  var r4 = { type: e5, props: t3, key: n3, ref: o3, __k: null, __: null, __b: 0, __e: null, __c: null, constructor: void 0, __v: null == i4 ? ++S : i4, __i: -1, __u: 0 };
  return null == i4 && null != C2.vnode && C2.vnode(r4), r4;
}
function j2(e5) {
  return e5.children;
}
function B2(e5, t3) {
  this.props = e5, this.context = t3;
}
function G(e5, t3) {
  if (null == t3) return e5.__ ? G(e5.__, e5.__i + 1) : null;
  for (var n3; t3 < e5.__k.length; t3++) if (null != (n3 = e5.__k[t3]) && null != n3.__e) return n3.__e;
  return "function" == typeof e5.type ? G(e5) : null;
}
function W2(e5) {
  var t3, n3;
  if (null != (e5 = e5.__) && null != e5.__c) {
    for (e5.__e = e5.__c.base = null, t3 = 0; t3 < e5.__k.length; t3++) if (null != (n3 = e5.__k[t3]) && null != n3.__e) {
      e5.__e = e5.__c.base = n3.__e;
      break;
    }
    return W2(e5);
  }
}
function Z(e5) {
  (!e5.__d && (e5.__d = true) && _.push(e5) && !q.__r++ || I2 !== C2.debounceRendering) && ((I2 = C2.debounceRendering) || M)(q);
}
function q() {
  for (var e5, t3, n3, o3, i4, r4, a3, s3 = 1; _.length; ) _.length > s3 && _.sort(P), e5 = _.shift(), s3 = _.length, e5.__d && (n3 = void 0, i4 = (o3 = (t3 = e5).__v).__e, r4 = [], a3 = [], t3.__P && ((n3 = D({}, o3)).__v = o3.__v + 1, C2.vnode && C2.vnode(n3), te(t3.__P, n3, o3, t3.__n, t3.__P.namespaceURI, 32 & o3.__u ? [i4] : null, r4, null == i4 ? G(o3) : i4, !!(32 & o3.__u), a3), n3.__v = o3.__v, n3.__.__k[n3.__i] = n3, ne(r4, n3, a3), n3.__e != i4 && W2(n3)));
  q.__r = 0;
}
function V2(e5, t3, n3, o3, i4, r4, a3, s3, l2, c2, d2) {
  var u2, h2, p2, g2, m2, f2, v3 = o3 && o3.__k || L2, y3 = t3.length;
  for (l2 = function(e6, t4, n4, o4, i5) {
    var r5, a4, s4, l3, c3, d3 = n4.length, u3 = d3, h3 = 0;
    for (e6.__k = new Array(i5), r5 = 0; r5 < i5; r5++) null != (a4 = t4[r5]) && "boolean" != typeof a4 && "function" != typeof a4 ? (l3 = r5 + h3, (a4 = e6.__k[r5] = "string" == typeof a4 || "number" == typeof a4 || "bigint" == typeof a4 || a4.constructor == String ? $(null, a4, null, null, null) : H(a4) ? $(j2, { children: a4 }, null, null, null) : void 0 === a4.constructor && a4.__b > 0 ? $(a4.type, a4.props, a4.key, a4.ref ? a4.ref : null, a4.__v) : a4).__ = e6, a4.__b = e6.__b + 1, s4 = null, -1 !== (c3 = a4.__i = K(a4, n4, l3, u3)) && (u3--, (s4 = n4[c3]) && (s4.__u |= 2)), null == s4 || null === s4.__v ? (-1 == c3 && (i5 > d3 ? h3-- : i5 < d3 && h3++), "function" != typeof a4.type && (a4.__u |= 4)) : c3 != l3 && (c3 == l3 - 1 ? h3-- : c3 == l3 + 1 ? h3++ : (c3 > l3 ? h3-- : h3++, a4.__u |= 4))) : e6.__k[r5] = null;
    if (u3) for (r5 = 0; r5 < d3; r5++) null != (s4 = n4[r5]) && !(2 & s4.__u) && (s4.__e == o4 && (o4 = G(s4)), re(s4, s4));
    return o4;
  }(n3, t3, v3, l2, y3), u2 = 0; u2 < y3; u2++) null != (p2 = n3.__k[u2]) && (h2 = -1 === p2.__i ? N2 : v3[p2.__i] || N2, p2.__i = u2, f2 = te(e5, p2, h2, i4, r4, a3, s3, l2, c2, d2), g2 = p2.__e, p2.ref && h2.ref != p2.ref && (h2.ref && ie(h2.ref, null, p2), d2.push(p2.ref, p2.__c || g2, p2)), null == m2 && null != g2 && (m2 = g2), 4 & p2.__u || h2.__k === p2.__k ? l2 = Y(p2, l2, e5) : "function" == typeof p2.type && void 0 !== f2 ? l2 = f2 : g2 && (l2 = g2.nextSibling), p2.__u &= -7);
  return n3.__e = m2, l2;
}
function Y(e5, t3, n3) {
  var o3, i4;
  if ("function" == typeof e5.type) {
    for (o3 = e5.__k, i4 = 0; o3 && i4 < o3.length; i4++) o3[i4] && (o3[i4].__ = e5, t3 = Y(o3[i4], t3, n3));
    return t3;
  }
  e5.__e != t3 && (t3 && e5.type && !n3.contains(t3) && (t3 = G(e5)), n3.insertBefore(e5.__e, t3 || null), t3 = e5.__e);
  do {
    t3 = t3 && t3.nextSibling;
  } while (null != t3 && 8 == t3.nodeType);
  return t3;
}
function X(e5, t3) {
  return t3 = t3 || [], null == e5 || "boolean" == typeof e5 || (H(e5) ? e5.some(function(e6) {
    X(e6, t3);
  }) : t3.push(e5)), t3;
}
function K(e5, t3, n3, o3) {
  var i4, r4, a3 = e5.key, s3 = e5.type, l2 = t3[n3];
  if (null === l2 && null == e5.key || l2 && a3 == l2.key && s3 === l2.type && !(2 & l2.__u)) return n3;
  if (o3 > (null == l2 || 2 & l2.__u ? 0 : 1)) for (i4 = n3 - 1, r4 = n3 + 1; i4 >= 0 || r4 < t3.length; ) {
    if (i4 >= 0) {
      if ((l2 = t3[i4]) && !(2 & l2.__u) && a3 == l2.key && s3 === l2.type) return i4;
      i4--;
    }
    if (r4 < t3.length) {
      if ((l2 = t3[r4]) && !(2 & l2.__u) && a3 == l2.key && s3 === l2.type) return r4;
      r4++;
    }
  }
  return -1;
}
function J(e5, t3, n3) {
  "-" == t3[0] ? e5.setProperty(t3, null == n3 ? "" : n3) : e5[t3] = null == n3 ? "" : "number" != typeof n3 || O2.test(t3) ? n3 : n3 + "px";
}
function Q(e5, t3, n3, o3, i4) {
  var r4;
  e: if ("style" == t3) if ("string" == typeof n3) e5.style.cssText = n3;
  else {
    if ("string" == typeof o3 && (e5.style.cssText = o3 = ""), o3) for (t3 in o3) n3 && t3 in n3 || J(e5.style, t3, "");
    if (n3) for (t3 in n3) o3 && n3[t3] === o3[t3] || J(e5.style, t3, n3[t3]);
  }
  else if ("o" == t3[0] && "n" == t3[1]) r4 = t3 != (t3 = t3.replace(T2, "$1")), t3 = t3.toLowerCase() in e5 || "onFocusOut" == t3 || "onFocusIn" == t3 ? t3.toLowerCase().slice(2) : t3.slice(2), e5.l || (e5.l = {}), e5.l[t3 + r4] = n3, n3 ? o3 ? n3.t = o3.t : (n3.t = E, e5.addEventListener(t3, r4 ? z2 : A, r4)) : e5.removeEventListener(t3, r4 ? z2 : A, r4);
  else {
    if ("http://www.w3.org/2000/svg" == i4) t3 = t3.replace(/xlink(H|:h)/, "h").replace(/sName$/, "s");
    else if ("width" != t3 && "height" != t3 && "href" != t3 && "list" != t3 && "form" != t3 && "tabIndex" != t3 && "download" != t3 && "rowSpan" != t3 && "colSpan" != t3 && "role" != t3 && "popover" != t3 && t3 in e5) try {
      e5[t3] = null == n3 ? "" : n3;
      break e;
    } catch (e6) {
    }
    "function" == typeof n3 || (null == n3 || false === n3 && "-" != t3[4] ? e5.removeAttribute(t3) : e5.setAttribute(t3, "popover" == t3 && 1 == n3 ? "" : n3));
  }
}
function ee(e5) {
  return function(t3) {
    if (this.l) {
      var n3 = this.l[t3.type + e5];
      if (null == t3.u) t3.u = E++;
      else if (t3.u < n3.t) return;
      return n3(C2.event ? C2.event(t3) : t3);
    }
  };
}
function te(e5, t3, n3, o3, i4, r4, a3, s3, l2, c2) {
  var d2, u2, h2, p2, g2, m2, f2, v3, y3, b2, w3, x3, S2, _2, I3, M2, P2, T3 = t3.type;
  if (void 0 !== t3.constructor) return null;
  128 & n3.__u && (l2 = !!(32 & n3.__u), r4 = [s3 = t3.__e = n3.__e]), (d2 = C2.__b) && d2(t3);
  e: if ("function" == typeof T3) try {
    if (v3 = t3.props, y3 = "prototype" in T3 && T3.prototype.render, b2 = (d2 = T3.contextType) && o3[d2.__c], w3 = d2 ? b2 ? b2.props.value : d2.__ : o3, n3.__c ? f2 = (u2 = t3.__c = n3.__c).__ = u2.__E : (y3 ? t3.__c = u2 = new T3(v3, w3) : (t3.__c = u2 = new B2(v3, w3), u2.constructor = T3, u2.render = ae), b2 && b2.sub(u2), u2.props = v3, u2.state || (u2.state = {}), u2.context = w3, u2.__n = o3, h2 = u2.__d = true, u2.__h = [], u2._sb = []), y3 && null == u2.__s && (u2.__s = u2.state), y3 && null != T3.getDerivedStateFromProps && (u2.__s == u2.state && (u2.__s = D({}, u2.__s)), D(u2.__s, T3.getDerivedStateFromProps(v3, u2.__s))), p2 = u2.props, g2 = u2.state, u2.__v = t3, h2) y3 && null == T3.getDerivedStateFromProps && null != u2.componentWillMount && u2.componentWillMount(), y3 && null != u2.componentDidMount && u2.__h.push(u2.componentDidMount);
    else {
      if (y3 && null == T3.getDerivedStateFromProps && v3 !== p2 && null != u2.componentWillReceiveProps && u2.componentWillReceiveProps(v3, w3), !u2.__e && (null != u2.shouldComponentUpdate && false === u2.shouldComponentUpdate(v3, u2.__s, w3) || t3.__v == n3.__v)) {
        for (t3.__v != n3.__v && (u2.props = v3, u2.state = u2.__s, u2.__d = false), t3.__e = n3.__e, t3.__k = n3.__k, t3.__k.some(function(e6) {
          e6 && (e6.__ = t3);
        }), x3 = 0; x3 < u2._sb.length; x3++) u2.__h.push(u2._sb[x3]);
        u2._sb = [], u2.__h.length && a3.push(u2);
        break e;
      }
      null != u2.componentWillUpdate && u2.componentWillUpdate(v3, u2.__s, w3), y3 && null != u2.componentDidUpdate && u2.__h.push(function() {
        u2.componentDidUpdate(p2, g2, m2);
      });
    }
    if (u2.context = w3, u2.props = v3, u2.__P = e5, u2.__e = false, S2 = C2.__r, _2 = 0, y3) {
      for (u2.state = u2.__s, u2.__d = false, S2 && S2(t3), d2 = u2.render(u2.props, u2.state, u2.context), I3 = 0; I3 < u2._sb.length; I3++) u2.__h.push(u2._sb[I3]);
      u2._sb = [];
    } else do {
      u2.__d = false, S2 && S2(t3), d2 = u2.render(u2.props, u2.state, u2.context), u2.state = u2.__s;
    } while (u2.__d && ++_2 < 25);
    u2.state = u2.__s, null != u2.getChildContext && (o3 = D(D({}, o3), u2.getChildContext())), y3 && !h2 && null != u2.getSnapshotBeforeUpdate && (m2 = u2.getSnapshotBeforeUpdate(p2, g2)), M2 = d2, null != d2 && d2.type === j2 && null == d2.key && (M2 = oe(d2.props.children)), s3 = V2(e5, H(M2) ? M2 : [M2], t3, n3, o3, i4, r4, a3, s3, l2, c2), u2.base = t3.__e, t3.__u &= -161, u2.__h.length && a3.push(u2), f2 && (u2.__E = u2.__ = null);
  } catch (e6) {
    if (t3.__v = null, l2 || null != r4) if (e6.then) {
      for (t3.__u |= l2 ? 160 : 128; s3 && 8 == s3.nodeType && s3.nextSibling; ) s3 = s3.nextSibling;
      r4[r4.indexOf(s3)] = null, t3.__e = s3;
    } else for (P2 = r4.length; P2--; ) F(r4[P2]);
    else t3.__e = n3.__e, t3.__k = n3.__k;
    C2.__e(e6, t3, n3);
  }
  else null == r4 && t3.__v == n3.__v ? (t3.__k = n3.__k, t3.__e = n3.__e) : s3 = t3.__e = function(e6, t4, n4, o4, i5, r5, a4, s4, l3) {
    var c3, d3, u3, h3, p3, g3, m3, f3 = n4.props, v4 = t4.props, y4 = t4.type;
    if ("svg" == y4 ? i5 = "http://www.w3.org/2000/svg" : "math" == y4 ? i5 = "http://www.w3.org/1998/Math/MathML" : i5 || (i5 = "http://www.w3.org/1999/xhtml"), null != r5) {
      for (c3 = 0; c3 < r5.length; c3++) if ((p3 = r5[c3]) && "setAttribute" in p3 == !!y4 && (y4 ? p3.localName == y4 : 3 == p3.nodeType)) {
        e6 = p3, r5[c3] = null;
        break;
      }
    }
    if (null == e6) {
      if (null == y4) return document.createTextNode(v4);
      e6 = document.createElementNS(i5, y4, v4.is && v4), s4 && (C2.__m && C2.__m(t4, r5), s4 = false), r5 = null;
    }
    if (null === y4) f3 === v4 || s4 && e6.data === v4 || (e6.data = v4);
    else {
      if (r5 = r5 && k2.call(e6.childNodes), f3 = n4.props || N2, !s4 && null != r5) for (f3 = {}, c3 = 0; c3 < e6.attributes.length; c3++) f3[(p3 = e6.attributes[c3]).name] = p3.value;
      for (c3 in f3) if (p3 = f3[c3], "children" == c3) ;
      else if ("dangerouslySetInnerHTML" == c3) u3 = p3;
      else if (!(c3 in v4)) {
        if ("value" == c3 && "defaultValue" in v4 || "checked" == c3 && "defaultChecked" in v4) continue;
        Q(e6, c3, null, p3, i5);
      }
      for (c3 in v4) p3 = v4[c3], "children" == c3 ? h3 = p3 : "dangerouslySetInnerHTML" == c3 ? d3 = p3 : "value" == c3 ? g3 = p3 : "checked" == c3 ? m3 = p3 : s4 && "function" != typeof p3 || f3[c3] === p3 || Q(e6, c3, p3, f3[c3], i5);
      if (d3) s4 || u3 && (d3.__html === u3.__html || d3.__html === e6.innerHTML) || (e6.innerHTML = d3.__html), t4.__k = [];
      else if (u3 && (e6.innerHTML = ""), V2("template" === t4.type ? e6.content : e6, H(h3) ? h3 : [h3], t4, n4, o4, "foreignObject" == y4 ? "http://www.w3.org/1999/xhtml" : i5, r5, a4, r5 ? r5[0] : n4.__k && G(n4, 0), s4, l3), null != r5) for (c3 = r5.length; c3--; ) F(r5[c3]);
      s4 || (c3 = "value", "progress" == y4 && null == g3 ? e6.removeAttribute("value") : void 0 !== g3 && (g3 !== e6[c3] || "progress" == y4 && !g3 || "option" == y4 && g3 !== f3[c3]) && Q(e6, c3, g3, f3[c3], i5), c3 = "checked", void 0 !== m3 && m3 !== e6[c3] && Q(e6, c3, m3, f3[c3], i5));
    }
    return e6;
  }(n3.__e, t3, n3, o3, i4, r4, a3, l2, c2);
  return (d2 = C2.diffed) && d2(t3), 128 & t3.__u ? void 0 : s3;
}
function ne(e5, t3, n3) {
  for (var o3 = 0; o3 < n3.length; o3++) ie(n3[o3], n3[++o3], n3[++o3]);
  C2.__c && C2.__c(t3, e5), e5.some(function(t4) {
    try {
      e5 = t4.__h, t4.__h = [], e5.some(function(e6) {
        e6.call(t4);
      });
    } catch (e6) {
      C2.__e(e6, t4.__v);
    }
  });
}
function oe(e5) {
  return "object" != typeof e5 || null == e5 ? e5 : H(e5) ? e5.map(oe) : D({}, e5);
}
function ie(e5, t3, n3) {
  try {
    if ("function" == typeof e5) {
      var o3 = "function" == typeof e5.__u;
      o3 && e5.__u(), o3 && null == t3 || (e5.__u = e5(t3));
    } else e5.current = t3;
  } catch (e6) {
    C2.__e(e6, n3);
  }
}
function re(e5, t3, n3) {
  var o3, i4;
  if (C2.unmount && C2.unmount(e5), (o3 = e5.ref) && (o3.current && o3.current !== e5.__e || ie(o3, null, t3)), null != (o3 = e5.__c)) {
    if (o3.componentWillUnmount) try {
      o3.componentWillUnmount();
    } catch (e6) {
      C2.__e(e6, t3);
    }
    o3.base = o3.__P = null;
  }
  if (o3 = e5.__k) for (i4 = 0; i4 < o3.length; i4++) o3[i4] && re(o3[i4], t3, n3 || "function" != typeof e5.type);
  n3 || F(e5.__e), e5.__c = e5.__ = e5.__e = void 0;
}
function ae(e5, t3, n3) {
  return this.constructor(e5, n3);
}
function se(e5, t3, n3) {
  var o3, i4, r4, a3;
  t3 == document && (t3 = document.documentElement), C2.__ && C2.__(e5, t3), i4 = (o3 = "function" == typeof n3) ? null : n3 && n3.__k || t3.__k, r4 = [], a3 = [], te(t3, e5 = (!o3 && n3 || t3).__k = U2(j2, null, [e5]), i4 || N2, N2, t3.namespaceURI, !o3 && n3 ? [n3] : i4 ? null : t3.firstChild ? k2.call(t3.childNodes) : null, r4, !o3 && n3 ? n3 : i4 ? i4.__e : t3.firstChild, o3, a3), ne(r4, e5, a3);
}
function le(e5) {
  function t3(e6) {
    var n3, o3;
    return this.getChildContext || (n3 = /* @__PURE__ */ new Set(), (o3 = {})[t3.__c] = this, this.getChildContext = function() {
      return o3;
    }, this.componentWillUnmount = function() {
      n3 = null;
    }, this.shouldComponentUpdate = function(e7) {
      this.props.value !== e7.value && n3.forEach(function(e8) {
        e8.__e = true, Z(e8);
      });
    }, this.sub = function(e7) {
      n3.add(e7);
      var t4 = e7.componentWillUnmount;
      e7.componentWillUnmount = function() {
        n3 && n3.delete(e7), t4 && t4.call(e7);
      };
    }), e6.children;
  }
  return t3.__c = "__cC" + R2++, t3.__ = e5, t3.Provider = t3.__l = (t3.Consumer = function(e6, t4) {
    return e6.children(t4);
  }).contextType = t3, t3;
}
function ue(e5, t3, n3, o3, i4, r4) {
  t3 || (t3 = {});
  var a3, s3, l2 = t3;
  if ("ref" in l2) for (s3 in l2 = {}, t3) "ref" == s3 ? a3 = t3[s3] : l2[s3] = t3[s3];
  var c2 = { type: e5, props: l2, key: n3, ref: a3, __k: null, __: null, __b: 0, __e: null, __c: null, constructor: void 0, __v: --de, __i: -1, __u: 0, __source: i4, __self: r4 };
  if ("function" == typeof e5 && (a3 = e5.defaultProps)) for (s3 in a3) void 0 === l2[s3] && (l2[s3] = a3[s3]);
  return C2.vnode && C2.vnode(c2), c2;
}
function _e(e5, t3) {
  ye.__h && ye.__h(pe, e5, fe || t3), fe = 0;
  var n3 = pe.__H || (pe.__H = { __: [], __h: [] });
  return e5 >= n3.__.length && n3.__.push({}), n3.__[e5];
}
function Ie(e5) {
  return fe = 1, function(e6, t3, n3) {
    var o3 = _e(he++, 2);
    if (o3.t = e6, !o3.__c && (o3.__ = [n3 ? n3(t3) : Fe(void 0, t3), function(e7) {
      var t4 = o3.__N ? o3.__N[0] : o3.__[0], n4 = o3.t(t4, e7);
      t4 !== n4 && (o3.__N = [n4, o3.__[1]], o3.__c.setState({}));
    }], o3.__c = pe, !pe.__f)) {
      var i4 = function(e7, t4, n4) {
        if (!o3.__c.__H) return true;
        var i5 = o3.__c.__H.__.filter(function(e8) {
          return !!e8.__c;
        });
        if (i5.every(function(e8) {
          return !e8.__N;
        })) return !r4 || r4.call(this, e7, t4, n4);
        var a4 = o3.__c.props !== e7;
        return i5.forEach(function(e8) {
          if (e8.__N) {
            var t5 = e8.__[0];
            e8.__ = e8.__N, e8.__N = void 0, t5 !== e8.__[0] && (a4 = true);
          }
        }), r4 && r4.call(this, e7, t4, n4) || a4;
      };
      pe.__f = true;
      var r4 = pe.shouldComponentUpdate, a3 = pe.componentWillUpdate;
      pe.componentWillUpdate = function(e7, t4, n4) {
        if (this.__e) {
          var o4 = r4;
          r4 = void 0, i4(e7, t4, n4), r4 = o4;
        }
        a3 && a3.call(this, e7, t4, n4);
      }, pe.shouldComponentUpdate = i4;
    }
    return o3.__N || o3.__;
  }(Fe, e5);
}
function Me(e5, t3) {
  var n3 = _e(he++, 3);
  !ye.__s && De(n3.__H, t3) && (n3.__ = e5, n3.u = t3, pe.__H.__h.push(n3));
}
function Pe(e5, t3) {
  var n3 = _e(he++, 4);
  !ye.__s && De(n3.__H, t3) && (n3.__ = e5, n3.u = t3, pe.__h.push(n3));
}
function Te(e5) {
  return fe = 5, Ee(function() {
    return { current: e5 };
  }, []);
}
function Ee(e5, t3) {
  var n3 = _e(he++, 7);
  return De(n3.__H, t3) && (n3.__ = e5(), n3.__H = t3, n3.__h = e5), n3.__;
}
function Ae(e5, t3) {
  return fe = 8, Ee(function() {
    return e5;
  }, t3);
}
function ze(e5) {
  var t3 = pe.context[e5.__c], n3 = _e(he++, 9);
  return n3.c = e5, t3 ? (null == n3.__ && (n3.__ = true, t3.sub(pe)), t3.props.value) : e5.__;
}
function Re() {
  for (var e5; e5 = ve.shift(); ) if (e5.__P && e5.__H) try {
    e5.__H.__h.forEach(Oe), e5.__H.__h.forEach(He), e5.__H.__h = [];
  } catch (t3) {
    e5.__H.__h = [], ye.__e(t3, e5.__v);
  }
}
function Le(e5) {
  var t3, n3 = function() {
    clearTimeout(o3), Ne && cancelAnimationFrame(t3), setTimeout(e5);
  }, o3 = setTimeout(n3, 100);
  Ne && (t3 = requestAnimationFrame(n3));
}
function Oe(e5) {
  var t3 = pe, n3 = e5.__c;
  "function" == typeof n3 && (e5.__c = void 0, n3()), pe = t3;
}
function He(e5) {
  var t3 = pe;
  e5.__c = e5.__(), pe = t3;
}
function De(e5, t3) {
  return !e5 || e5.length !== t3.length || t3.some(function(t4, n3) {
    return t4 !== e5[n3];
  });
}
function Fe(e5, t3) {
  return "function" == typeof t3 ? t3(e5) : t3;
}
function $e(e5) {
  return { x: Math.floor(e5.x), y: Math.floor(e5.y) };
}
function je(e5) {
  return { width: Math.ceil(e5.width), height: Math.ceil(e5.height) };
}
function Be(e5) {
  return { origin: $e(e5.origin), size: je(e5.size) };
}
function Ge(e5) {
  const { width: t3, height: n3 } = e5;
  return { width: n3, height: t3 };
}
function We(e5, t3, n3) {
  return { width: (e5 = t3 % 2 == 0 ? e5 : Ge(e5)).width * n3, height: e5.height * n3 };
}
function Ze(e5) {
  const t3 = [e5.p1.x, e5.p2.x, e5.p3.x, e5.p4.x], n3 = [e5.p1.y, e5.p2.y, e5.p3.y, e5.p4.y];
  return { origin: { x: Math.min(...t3), y: Math.min(...n3) }, size: { width: Math.max(...t3) - Math.min(...t3), height: Math.max(...n3) - Math.min(...n3) } };
}
function qe(e5) {
  return { p1: { x: e5.origin.x, y: e5.origin.y }, p2: { x: e5.origin.x + e5.size.width, y: e5.origin.y }, p3: { x: e5.origin.x + e5.size.width, y: e5.origin.y + e5.size.height }, p4: { x: e5.origin.x, y: e5.origin.y + e5.size.height } };
}
function Ve(e5, t3, n3) {
  let o3 = t3.x, i4 = t3.y;
  switch (n3) {
    case 0:
      o3 = t3.x, i4 = t3.y;
      break;
    case 1:
      o3 = e5.height - t3.y, i4 = t3.x;
      break;
    case 2:
      o3 = e5.width - t3.x, i4 = e5.height - t3.y;
      break;
    case 3:
      o3 = t3.y, i4 = e5.width - t3.x;
  }
  return { x: o3, y: i4 };
}
function Ye(e5, t3) {
  return { x: e5.x * t3, y: e5.y * t3 };
}
function Xe(e5, t3, n3) {
  let o3 = t3.origin.x, i4 = t3.origin.y, r4 = t3.size;
  switch (n3) {
    case 0:
      break;
    case 1:
      o3 = e5.height - t3.origin.y - t3.size.height, i4 = t3.origin.x, r4 = Ge(t3.size);
      break;
    case 2:
      o3 = e5.width - t3.origin.x - t3.size.width, i4 = e5.height - t3.origin.y - t3.size.height;
      break;
    case 3:
      o3 = t3.origin.y, i4 = e5.width - t3.origin.x - t3.size.width, r4 = Ge(t3.size);
  }
  return { origin: { x: o3, y: i4 }, size: { width: r4.width, height: r4.height } };
}
function Ke(e5, t3) {
  return { origin: { x: e5.origin.x * t3, y: e5.origin.y * t3 }, size: { width: e5.size.width * t3, height: e5.size.height * t3 } };
}
function Je(e5, t3, n3, o3) {
  return Ke(Xe(e5, t3, n3), o3);
}
function Qe(e5) {
  if (0 === e5.length) return null;
  let t3 = e5[0].origin.x, n3 = e5[0].origin.y, o3 = e5[0].origin.x + e5[0].size.width, i4 = e5[0].origin.y + e5[0].size.height;
  for (const r4 of e5) t3 = Math.min(t3, r4.origin.x), n3 = Math.min(n3, r4.origin.y), o3 = Math.max(o3, r4.origin.x + r4.size.width), i4 = Math.max(i4, r4.origin.y + r4.size.height);
  return { origin: { x: t3, y: n3 }, size: { width: o3 - t3, height: i4 - n3 } };
}
function st(e5) {
  return e5.replace(at, "");
}
function vt(e5) {
  return Object.keys(ft).filter((t3) => !!(e5 & t3)).map((e6) => ft[e6]);
}
function xt(e5) {
  const t3 = (e6) => Math.max(0, Math.min(255, e6)), n3 = (e6) => t3(e6).toString(16).padStart(2, "0");
  return { color: `#${n3(e5.red)}${n3(e5.green)}${n3(e5.blue)}`, opacity: t3(e5.alpha) / 255 };
}
function kt({ color: e5, opacity: t3 }) {
  /^#?[0-9a-f]{3}$/i.test(e5) && (e5 = e5.replace(/^#?([0-9a-f])([0-9a-f])([0-9a-f])$/i, "#$1$1$2$2$3$3").toLowerCase());
  const [, n3, o3, i4] = /^#?([0-9a-f]{2})([0-9a-f]{2})([0-9a-f]{2})$/i.exec(e5) ?? (() => {
    throw new Error(`Invalid hex colour: \u201C${e5}\u201D`);
  })();
  return { red: parseInt(n3, 16), green: parseInt(o3, 16), blue: parseInt(i4, 16), alpha: ((e6, t4 = 255) => Math.max(0, Math.min(t4, e6)))(Math.round(255 * t3)) };
}
function Ct(e5) {
  if (!e5?.startsWith("D:") || e5.length < 16) return;
  const t3 = +e5.slice(2, 6), n3 = +e5.slice(6, 8) - 1, o3 = +e5.slice(8, 10), i4 = +e5.slice(10, 12), r4 = +e5.slice(12, 14), a3 = +e5.slice(14, 16);
  return new Date(Date.UTC(t3, n3, o3, i4, r4, a3));
}
function St(e5 = /* @__PURE__ */ new Date()) {
  const t3 = (e6, t4 = 2) => e6.toString().padStart(t4, "0");
  return `D:${e5.getUTCFullYear()}${t3(e5.getUTCMonth() + 1)}${t3(e5.getUTCDate())}${t3(e5.getUTCHours())}${t3(e5.getUTCMinutes())}${t3(e5.getUTCSeconds())}`;
}
function _t() {
}
function Gt(e5, t3) {
  return { package: e5, config: t3 };
}
function qt(e5, t3, n3) {
  return e5 < t3 ? t3 : e5 > n3 ? n3 : e5;
}
function Vt(e5, t3, n3) {
  if (e5 === t3) return true;
  if (null == e5 || null == t3) return e5 === t3;
  const o3 = typeof e5;
  if (o3 !== typeof t3) return false;
  if ("object" === o3) {
    n3 || (n3 = /* @__PURE__ */ new Set());
    const o4 = function(e6, t4) {
      return `${Kt(e6)}__${Kt(t4)}`;
    }(e5, t3);
    if (n3.has(o4)) return true;
    n3.add(o4);
    const i4 = Array.isArray(e5), r4 = Array.isArray(t3);
    return i4 && r4 ? function(e6, t4, n4) {
      if (e6.length !== t4.length) return false;
      const o5 = new Array(t4.length).fill(false);
      e: for (let i5 = 0; i5 < e6.length; i5++) {
        const r5 = e6[i5];
        for (let e7 = 0; e7 < t4.length; e7++) if (!o5[e7] && Vt(r5, t4[e7], n4)) {
          o5[e7] = true;
          continue e;
        }
        return false;
      }
      return true;
    }(e5, t3, n3) : !i4 && !r4 && function(e6, t4, n4) {
      const o5 = Object.keys(e6).sort(), i5 = Object.keys(t4).sort();
      if (o5.length !== i5.length) return false;
      for (let e7 = 0; e7 < o5.length; e7++) if (o5[e7] !== i5[e7]) return false;
      for (const i6 of o5) {
        if (!Vt(e6[i6], t4[i6], n4)) return false;
      }
      return true;
    }(e5, t3, n3);
  }
  return false;
}
function Kt(e5) {
  return Xt.has(e5) || Xt.set(e5, ++Yt), Xt.get(e5);
}
function Jt() {
  const e5 = /* @__PURE__ */ new Set();
  return { emit: (t3 = void 0) => e5.forEach((e6) => e6(t3)), on: (t3) => (e5.add(t3), () => e5.delete(t3)), off: (t3) => e5.delete(t3), clear: () => e5.clear() };
}
function Qt(e5, t3 = Vt) {
  const n3 = /* @__PURE__ */ new Set(), o3 = /* @__PURE__ */ new Map();
  let i4 = e5;
  const r4 = (e6, t4) => {
    let r5 = e6, a3 = () => {
    };
    if (t4) {
      const n4 = new Zt(e6, t4);
      r5 = n4.handle, a3 = () => n4.destroy(), o3.set(e6, { wrapped: r5, destroy: a3 });
    }
    return void 0 !== i4 && r5(i4), n3.add(r5), () => {
      n3.delete(r5), a3(), o3.delete(e6);
    };
  };
  return { get value() {
    return i4;
  }, emit(e6 = void 0) {
    (void 0 === i4 || !t3(i4, e6)) && (i4 = e6, ((e7) => {
      n3.forEach((t4) => t4(e7));
    })(e6));
  }, on: r4, off(e6) {
    const t4 = o3.get(e6);
    t4 ? (n3.delete(t4.wrapped), t4.destroy(), o3.delete(e6)) : n3.delete(e6);
  }, clear() {
    n3.clear(), o3.forEach((e6) => e6.destroy()), o3.clear();
  }, select: (e6, t4 = Vt) => (n4, o4) => {
    let a3;
    if (void 0 !== i4) {
      const t5 = e6(i4);
      a3 = t5, n4(t5);
    }
    return r4((o5) => {
      const i5 = e6(o5);
      (void 0 === a3 || !t4(a3, i5)) && (a3 = i5, n4(i5));
    }, o4);
  } };
}
function tn({ engine: e5, onInitialized: t3, plugins: n3, children: o3 }) {
  const [i4, r4] = Ie(null), [a3, s3] = Ie(true), [l2, c2] = Ie(false), d2 = Te(t3);
  return Me(() => {
    d2.current = t3;
  }, [t3]), Me(() => {
    const t4 = new Bt(e5);
    return t4.registerPluginBatch(n3), (async () => {
      var e6;
      await t4.initialize(), !t4.isDestroyed() && (await (null == (e6 = d2.current) ? void 0 : e6.call(d2, t4)), !t4.isDestroyed() && (t4.pluginsReady().then(() => {
        t4.isDestroyed() || c2(true);
      }), r4(t4), s3(false)));
    })().catch(console.error), () => {
      t4.destroy(), r4(null), s3(true), c2(false);
    };
  }, [e5, n3]), ue(en.Provider, { value: { registry: i4, isInitializing: a3, pluginsReady: l2 }, children: "function" == typeof o3 ? o3({ registry: i4, isInitializing: a3, pluginsReady: l2 }) : o3 });
}
function nn() {
  const e5 = ze(en);
  if (void 0 === e5) throw new Error("useCapability must be used within a PDFContext.Provider");
  const { registry: t3, isInitializing: n3 } = e5;
  if (n3) return e5;
  if (null === t3) throw new Error("PDF registry failed to initialize properly");
  return e5;
}
function on(e5) {
  const { registry: t3 } = nn();
  if (null === t3) return { plugin: null, isLoading: true, ready: new Promise(() => {
  }) };
  const n3 = t3.getPlugin(e5);
  if (!n3) throw new Error(`Plugin ${e5} not found`);
  return { plugin: n3, isLoading: false, ready: n3.ready() };
}
function rn(e5) {
  const { plugin: t3, isLoading: n3, ready: o3 } = on(e5);
  if (!t3) return { provides: null, isLoading: n3, ready: o3 };
  if (!t3.provides) throw new Error(`Plugin ${e5} does not provide a capability`);
  return { provides: t3.provides(), isLoading: n3, ready: o3 };
}
function yn() {
  const { plugin: e5 } = on(mn.id), t3 = Te(null);
  return Pe(() => {
    if (!e5) return;
    const n3 = t3.current;
    if (!n3) return;
    e5.registerBoundingRectProvider(() => {
      const e6 = n3.getBoundingClientRect();
      return { origin: { x: e6.left, y: e6.top }, size: { width: e6.width, height: e6.height } };
    });
    const o3 = () => {
      e5.setViewportScrollMetrics({ scrollTop: n3.scrollTop, scrollLeft: n3.scrollLeft });
    };
    n3.addEventListener("scroll", o3);
    const i4 = new ResizeObserver(() => {
      e5.setViewportResizeMetrics({ width: n3.offsetWidth, height: n3.offsetHeight, clientWidth: n3.clientWidth, clientHeight: n3.clientHeight, scrollTop: n3.scrollTop, scrollLeft: n3.scrollLeft, scrollWidth: n3.scrollWidth, scrollHeight: n3.scrollHeight });
    });
    i4.observe(n3);
    const r4 = e5.onScrollRequest(({ x: e6, y: t4, behavior: o4 = "auto" }) => {
      requestAnimationFrame(() => {
        n3.scrollTo({ left: e6, top: t4, behavior: o4 });
      });
    });
    return () => {
      e5.registerBoundingRectProvider(null), n3.removeEventListener("scroll", o3), i4.disconnect(), r4();
    };
  }, [e5]), t3;
}
function bn({ children: e5, ...t3 }) {
  const [n3, o3] = Ie(0), i4 = yn(), { provides: r4 } = vn();
  Me(() => {
    r4 && o3(r4.getViewportGap());
  }, [r4]);
  const { style: a3, ...s3 } = t3;
  return ue("div", { ...s3, ref: i4, style: { ..."object" == typeof a3 ? a3 : {}, padding: `${n3}px` }, children: e5 });
}
function In(e5) {
  return { type: Sn, payload: e5 };
}
function Rn({ renderPage: e5, overlayElements: t3, ...n3 }) {
  const { provides: o3 } = zn(), { plugin: i4 } = on(Pn.id), { registry: r4 } = nn(), [a3, s3] = Ie(() => (null == o3 ? void 0 : o3.getScrollerLayout()) ?? null);
  if (Me(() => {
    if (o3) return o3.onScrollerData(s3);
  }, [o3]), Me(() => {
    i4 && i4.setLayoutReady();
  }, [i4]), !a3 || !r4) return null;
  const l2 = r4.getStore().getState();
  return ue("div", { ...n3, style: { width: `${a3.totalWidth}px`, height: `${a3.totalHeight}px`, position: "relative", boxSizing: "border-box", margin: "0 auto", ...a3.strategy === wn.Horizontal && { display: "flex", flexDirection: "row" } }, children: [ue("div", { style: { ...a3.strategy === wn.Horizontal ? { width: a3.startSpacing, height: "100%", flexShrink: 0 } : { height: a3.startSpacing, width: "100%" } } }), ue("div", { style: { gap: a3.pageGap, display: "flex", alignItems: "center", position: "relative", boxSizing: "border-box", ...a3.strategy === wn.Horizontal ? { flexDirection: "row", minHeight: "100%" } : { flexDirection: "column", minWidth: "fit-content" } }, children: a3.items.map((t4) => ue("div", { style: { display: "flex", justifyContent: "center", gap: a3.pageGap }, children: t4.pageLayouts.map((t5) => ue("div", { style: { width: `${t5.rotatedWidth}px`, height: `${t5.rotatedHeight}px` }, children: e5({ ...t5, rotation: l2.core.rotation, scale: l2.core.scale, document: l2.core.document }) }, t5.pageNumber)) }, t4.pageNumbers[0])) }), ue("div", { style: { ...a3.strategy === wn.Horizontal ? { width: a3.endSpacing, height: "100%", flexShrink: 0 } : { height: a3.endSpacing, width: "100%" } } }), t3] });
}
function On(e5) {
  return { type: Ln, payload: e5 };
}
function Vn() {
  const { provides: e5 } = rn(Wn.id), t3 = Te(null);
  return Me(() => e5 ? e5.onOpenFileRequest((e6) => {
    "open" === e6 && t3.current && t3.current.click();
  }) : void 0, [e5]), ue(j2, { children: ue("input", { ref: t3, type: "file", accept: "application/pdf", style: { display: "none" }, onChange: async (t4) => {
    var n3;
    const o3 = null == (n3 = t4.currentTarget.files) ? void 0 : n3[0];
    o3 && e5 && await e5.loadDocument({ type: "buffer", pdfFile: { id: Math.random().toString(36).substring(2, 15), content: await o3.arrayBuffer() } });
  } }) });
}
function io(e5, t3) {
  const n3 = (e6) => "function" == typeof e6 ? e6(t3) : e6;
  return "group" === e5.type ? { ...e5, label: n3(e5.label) ?? "" } : { ...e5, icon: n3(e5.icon) ?? "", label: n3(e5.label) ?? "", visible: n3(e5.visible) ?? true, active: n3(e5.active) ?? false, disabled: n3(e5.disabled) ?? false };
}
function ro(e5, t3) {
  const n3 = io(e5, t3);
  return "group" !== n3.type && !!n3.active;
}
function ao(e5, t3) {
  const n3 = io(e5, t3);
  return "group" !== n3.type && !!n3.disabled;
}
function ho(e5) {
  return function(e6) {
    return "groupedItems" === e6.type;
  }(e5) || po(e5) || go(e5) || mo(e5) || function(e6) {
    return "custom" === e6.type;
  }(e5);
}
function po(e5) {
  return "header" === e5.type;
}
function go(e5) {
  return "panel" === e5.type;
}
function mo(e5) {
  return "floating" === e5.type;
}
function bo(e5) {
  var t3 = e5.id, n3 = e5.children, o3 = e5.onClick, i4 = e5.active, r4 = void 0 !== i4 && i4, a3 = e5.disabled, s3 = void 0 !== a3 && a3, l2 = e5.className, c2 = void 0 === l2 ? "" : l2, d2 = e5.tooltip, u2 = e5.ref, h2 = g(e5, yo);
  return U2("button", p({ id: t3, ref: u2, onClick: o3, className: "flex h-[32px] w-auto min-w-[32px] items-center justify-center rounded-md p-[5px] transition-colors ".concat(r4 ? "border-none bg-blue-50 text-blue-500 shadow ring ring-blue-500" : "hover:bg-gray-100 hover:ring hover:ring-[#1a466b]", " ").concat(s3 ? "cursor-not-allowed opacity-50 hover:bg-transparent hover:ring-0" : "cursor-pointer", " ").concat(c2, " "), title: d2 }, h2), n3);
}
function Mo(e5, t3, n3) {
  return xo(e5, wo(t3, n3));
}
function Po(e5, t3) {
  return "function" == typeof e5 ? e5(t3) : e5;
}
function To(e5) {
  return e5.split("-")[0];
}
function Eo(e5) {
  return e5.split("-")[1];
}
function Ao(e5) {
  return "x" === e5 ? "y" : "x";
}
function zo(e5) {
  return "y" === e5 ? "height" : "width";
}
function Ro(e5) {
  return ["top", "bottom"].includes(To(e5)) ? "y" : "x";
}
function No(e5) {
  return Ao(Ro(e5));
}
function Lo(e5) {
  return e5.replace(/start|end/g, (e6) => Io[e6]);
}
function Oo(e5) {
  return e5.replace(/left|right|bottom|top/g, (e6) => _o[e6]);
}
function Ho(e5) {
  return "number" != typeof e5 ? function(e6) {
    return { top: 0, right: 0, bottom: 0, left: 0, ...e6 };
  }(e5) : { top: e5, right: e5, bottom: e5, left: e5 };
}
function Do(e5) {
  const { x: t3, y: n3, width: o3, height: i4 } = e5;
  return { width: o3, height: i4, top: n3, left: t3, right: t3 + o3, bottom: n3 + i4, x: t3, y: n3 };
}
function Fo(e5, t3, n3) {
  let { reference: o3, floating: i4 } = e5;
  const r4 = Ro(t3), a3 = No(t3), s3 = zo(a3), l2 = To(t3), c2 = "y" === r4, d2 = o3.x + o3.width / 2 - i4.width / 2, u2 = o3.y + o3.height / 2 - i4.height / 2, h2 = o3[s3] / 2 - i4[s3] / 2;
  let p2;
  switch (l2) {
    case "top":
      p2 = { x: d2, y: o3.y - i4.height };
      break;
    case "bottom":
      p2 = { x: d2, y: o3.y + o3.height };
      break;
    case "right":
      p2 = { x: o3.x + o3.width, y: u2 };
      break;
    case "left":
      p2 = { x: o3.x - i4.width, y: u2 };
      break;
    default:
      p2 = { x: o3.x, y: o3.y };
  }
  switch (Eo(t3)) {
    case "start":
      p2[a3] -= h2 * (n3 && c2 ? -1 : 1);
      break;
    case "end":
      p2[a3] += h2 * (n3 && c2 ? -1 : 1);
  }
  return p2;
}
async function Uo(e5, t3) {
  var n3;
  void 0 === t3 && (t3 = {});
  const { x: o3, y: i4, platform: r4, rects: a3, elements: s3, strategy: l2 } = e5, { boundary: c2 = "clippingAncestors", rootBoundary: d2 = "viewport", elementContext: u2 = "floating", altBoundary: h2 = false, padding: p2 = 0 } = Po(t3, e5), g2 = Ho(p2), m2 = s3[h2 ? "floating" === u2 ? "reference" : "floating" : u2], f2 = Do(await r4.getClippingRect({ element: null == (n3 = await (null == r4.isElement ? void 0 : r4.isElement(m2))) || n3 ? m2 : m2.contextElement || await (null == r4.getDocumentElement ? void 0 : r4.getDocumentElement(s3.floating)), boundary: c2, rootBoundary: d2, strategy: l2 })), v3 = "floating" === u2 ? { x: o3, y: i4, width: a3.floating.width, height: a3.floating.height } : a3.reference, y3 = await (null == r4.getOffsetParent ? void 0 : r4.getOffsetParent(s3.floating)), b2 = await (null == r4.isElement ? void 0 : r4.isElement(y3)) && await (null == r4.getScale ? void 0 : r4.getScale(y3)) || { x: 1, y: 1 }, w3 = Do(r4.convertOffsetParentRelativeRectToViewportRelativeRect ? await r4.convertOffsetParentRelativeRectToViewportRelativeRect({ elements: s3, rect: v3, offsetParent: y3, strategy: l2 }) : v3);
  return { top: (f2.top - w3.top + g2.top) / b2.y, bottom: (w3.bottom - f2.bottom + g2.bottom) / b2.y, left: (f2.left - w3.left + g2.left) / b2.x, right: (w3.right - f2.right + g2.right) / b2.x };
}
function $o() {
  return "undefined" != typeof window;
}
function jo(e5) {
  return Wo(e5) ? (e5.nodeName || "").toLowerCase() : "#document";
}
function Bo(e5) {
  var t3;
  return (null == e5 || null == (t3 = e5.ownerDocument) ? void 0 : t3.defaultView) || window;
}
function Go(e5) {
  var t3;
  return null == (t3 = (Wo(e5) ? e5.ownerDocument : e5.document) || window.document) ? void 0 : t3.documentElement;
}
function Wo(e5) {
  return !!$o() && (e5 instanceof Node || e5 instanceof Bo(e5).Node);
}
function Zo(e5) {
  return !!$o() && (e5 instanceof Element || e5 instanceof Bo(e5).Element);
}
function qo(e5) {
  return !!$o() && (e5 instanceof HTMLElement || e5 instanceof Bo(e5).HTMLElement);
}
function Vo(e5) {
  return !(!$o() || "undefined" == typeof ShadowRoot) && (e5 instanceof ShadowRoot || e5 instanceof Bo(e5).ShadowRoot);
}
function Yo(e5) {
  const { overflow: t3, overflowX: n3, overflowY: o3, display: i4 } = ti(e5);
  return /auto|scroll|overlay|hidden|clip/.test(t3 + o3 + n3) && !["inline", "contents"].includes(i4);
}
function Xo(e5) {
  return ["table", "td", "th"].includes(jo(e5));
}
function Ko(e5) {
  return [":popover-open", ":modal"].some((t3) => {
    try {
      return e5.matches(t3);
    } catch (e6) {
      return false;
    }
  });
}
function Jo(e5) {
  const t3 = Qo(), n3 = Zo(e5) ? ti(e5) : e5;
  return ["transform", "translate", "scale", "rotate", "perspective"].some((e6) => !!n3[e6] && "none" !== n3[e6]) || !!n3.containerType && "normal" !== n3.containerType || !t3 && !!n3.backdropFilter && "none" !== n3.backdropFilter || !t3 && !!n3.filter && "none" !== n3.filter || ["transform", "translate", "scale", "rotate", "perspective", "filter"].some((e6) => (n3.willChange || "").includes(e6)) || ["paint", "layout", "strict", "content"].some((e6) => (n3.contain || "").includes(e6));
}
function Qo() {
  return !("undefined" == typeof CSS || !CSS.supports) && CSS.supports("-webkit-backdrop-filter", "none");
}
function ei(e5) {
  return ["html", "body", "#document"].includes(jo(e5));
}
function ti(e5) {
  return Bo(e5).getComputedStyle(e5);
}
function ni(e5) {
  return Zo(e5) ? { scrollLeft: e5.scrollLeft, scrollTop: e5.scrollTop } : { scrollLeft: e5.scrollX, scrollTop: e5.scrollY };
}
function oi(e5) {
  if ("html" === jo(e5)) return e5;
  const t3 = e5.assignedSlot || e5.parentNode || Vo(e5) && e5.host || Go(e5);
  return Vo(t3) ? t3.host : t3;
}
function ii(e5) {
  const t3 = oi(e5);
  return ei(t3) ? e5.ownerDocument ? e5.ownerDocument.body : e5.body : qo(t3) && Yo(t3) ? t3 : ii(t3);
}
function ri(e5, t3, n3) {
  var o3;
  void 0 === t3 && (t3 = []), void 0 === n3 && (n3 = true);
  const i4 = ii(e5), r4 = i4 === (null == (o3 = e5.ownerDocument) ? void 0 : o3.body), a3 = Bo(i4);
  if (r4) {
    const e6 = ai(a3);
    return t3.concat(a3, a3.visualViewport || [], Yo(i4) ? i4 : [], e6 && n3 ? ri(e6) : []);
  }
  return t3.concat(i4, ri(i4, [], n3));
}
function ai(e5) {
  return e5.parent && Object.getPrototypeOf(e5.parent) ? e5.frameElement : null;
}
function si(e5) {
  const t3 = ti(e5);
  let n3 = parseFloat(t3.width) || 0, o3 = parseFloat(t3.height) || 0;
  const i4 = qo(e5), r4 = i4 ? e5.offsetWidth : n3, a3 = i4 ? e5.offsetHeight : o3, s3 = ko(n3) !== r4 || ko(o3) !== a3;
  return s3 && (n3 = r4, o3 = a3), { width: n3, height: o3, $: s3 };
}
function li(e5) {
  return Zo(e5) ? e5 : e5.contextElement;
}
function ci(e5) {
  const t3 = li(e5);
  if (!qo(t3)) return So(1);
  const n3 = t3.getBoundingClientRect(), { width: o3, height: i4, $: r4 } = si(t3);
  let a3 = (r4 ? ko(n3.width) : n3.width) / o3, s3 = (r4 ? ko(n3.height) : n3.height) / i4;
  return a3 && Number.isFinite(a3) || (a3 = 1), s3 && Number.isFinite(s3) || (s3 = 1), { x: a3, y: s3 };
}
function ui(e5) {
  const t3 = Bo(e5);
  return Qo() && t3.visualViewport ? { x: t3.visualViewport.offsetLeft, y: t3.visualViewport.offsetTop } : di;
}
function hi(e5, t3, n3, o3) {
  void 0 === t3 && (t3 = false), void 0 === n3 && (n3 = false);
  const i4 = e5.getBoundingClientRect(), r4 = li(e5);
  let a3 = So(1);
  t3 && (o3 ? Zo(o3) && (a3 = ci(o3)) : a3 = ci(e5));
  const s3 = function(e6, t4, n4) {
    return void 0 === t4 && (t4 = false), !(!n4 || t4 && n4 !== Bo(e6)) && t4;
  }(r4, n3, o3) ? ui(r4) : So(0);
  let l2 = (i4.left + s3.x) / a3.x, c2 = (i4.top + s3.y) / a3.y, d2 = i4.width / a3.x, u2 = i4.height / a3.y;
  if (r4) {
    const e6 = Bo(r4), t4 = o3 && Zo(o3) ? Bo(o3) : o3;
    let n4 = e6, i5 = ai(n4);
    for (; i5 && o3 && t4 !== n4; ) {
      const e7 = ci(i5), t5 = i5.getBoundingClientRect(), o4 = ti(i5), r5 = t5.left + (i5.clientLeft + parseFloat(o4.paddingLeft)) * e7.x, a4 = t5.top + (i5.clientTop + parseFloat(o4.paddingTop)) * e7.y;
      l2 *= e7.x, c2 *= e7.y, d2 *= e7.x, u2 *= e7.y, l2 += r5, c2 += a4, n4 = Bo(i5), i5 = ai(n4);
    }
  }
  return Do({ width: d2, height: u2, x: l2, y: c2 });
}
function pi(e5, t3) {
  const n3 = ni(e5).scrollLeft;
  return t3 ? t3.left + n3 : hi(Go(e5)).left + n3;
}
function gi(e5, t3, n3) {
  void 0 === n3 && (n3 = false);
  const o3 = e5.getBoundingClientRect();
  return { x: o3.left + t3.scrollLeft - (n3 ? 0 : pi(e5, o3)), y: o3.top + t3.scrollTop };
}
function mi(e5, t3, n3) {
  let o3;
  if ("viewport" === t3) o3 = function(e6, t4) {
    const n4 = Bo(e6), o4 = Go(e6), i4 = n4.visualViewport;
    let r4 = o4.clientWidth, a3 = o4.clientHeight, s3 = 0, l2 = 0;
    if (i4) {
      r4 = i4.width, a3 = i4.height;
      const e7 = Qo();
      (!e7 || e7 && "fixed" === t4) && (s3 = i4.offsetLeft, l2 = i4.offsetTop);
    }
    return { width: r4, height: a3, x: s3, y: l2 };
  }(e5, n3);
  else if ("document" === t3) o3 = function(e6) {
    const t4 = Go(e6), n4 = ni(e6), o4 = e6.ownerDocument.body, i4 = xo(t4.scrollWidth, t4.clientWidth, o4.scrollWidth, o4.clientWidth), r4 = xo(t4.scrollHeight, t4.clientHeight, o4.scrollHeight, o4.clientHeight);
    let a3 = -n4.scrollLeft + pi(e6);
    const s3 = -n4.scrollTop;
    return "rtl" === ti(o4).direction && (a3 += xo(t4.clientWidth, o4.clientWidth) - i4), { width: i4, height: r4, x: a3, y: s3 };
  }(Go(e5));
  else if (Zo(t3)) o3 = function(e6, t4) {
    const n4 = hi(e6, true, "fixed" === t4), o4 = n4.top + e6.clientTop, i4 = n4.left + e6.clientLeft, r4 = qo(e6) ? ci(e6) : So(1);
    return { width: e6.clientWidth * r4.x, height: e6.clientHeight * r4.y, x: i4 * r4.x, y: o4 * r4.y };
  }(t3, n3);
  else {
    const n4 = ui(e5);
    o3 = { x: t3.x - n4.x, y: t3.y - n4.y, width: t3.width, height: t3.height };
  }
  return Do(o3);
}
function fi(e5, t3) {
  const n3 = oi(e5);
  return !(n3 === t3 || !Zo(n3) || ei(n3)) && ("fixed" === ti(n3).position || fi(n3, t3));
}
function vi(e5, t3, n3) {
  const o3 = qo(t3), i4 = Go(t3), r4 = "fixed" === n3, a3 = hi(e5, true, r4, t3);
  let s3 = { scrollLeft: 0, scrollTop: 0 };
  const l2 = So(0);
  if (o3 || !o3 && !r4) if (("body" !== jo(t3) || Yo(i4)) && (s3 = ni(t3)), o3) {
    const e6 = hi(t3, true, r4, t3);
    l2.x = e6.x + t3.clientLeft, l2.y = e6.y + t3.clientTop;
  } else i4 && (l2.x = pi(i4));
  const c2 = !i4 || o3 || r4 ? So(0) : gi(i4, s3);
  return { x: a3.left + s3.scrollLeft - l2.x - c2.x, y: a3.top + s3.scrollTop - l2.y - c2.y, width: a3.width, height: a3.height };
}
function yi(e5) {
  return "static" === ti(e5).position;
}
function bi(e5, t3) {
  if (!qo(e5) || "fixed" === ti(e5).position) return null;
  if (t3) return t3(e5);
  let n3 = e5.offsetParent;
  return Go(e5) === n3 && (n3 = n3.ownerDocument.body), n3;
}
function wi(e5, t3) {
  const n3 = Bo(e5);
  if (Ko(e5)) return n3;
  if (!qo(e5)) {
    let t4 = oi(e5);
    for (; t4 && !ei(t4); ) {
      if (Zo(t4) && !yi(t4)) return t4;
      t4 = oi(t4);
    }
    return n3;
  }
  let o3 = bi(e5, t3);
  for (; o3 && Xo(o3) && yi(o3); ) o3 = bi(o3, t3);
  return o3 && ei(o3) && yi(o3) && !Jo(o3) ? n3 : o3 || function(e6) {
    let t4 = oi(e6);
    for (; qo(t4) && !ei(t4); ) {
      if (Jo(t4)) return t4;
      if (Ko(t4)) return null;
      t4 = oi(t4);
    }
    return null;
  }(e5) || n3;
}
function ki(e5, t3) {
  return e5.x === t3.x && e5.y === t3.y && e5.width === t3.width && e5.height === t3.height;
}
function Ci(e5, t3, n3, o3) {
  void 0 === o3 && (o3 = {});
  const { ancestorScroll: i4 = true, ancestorResize: r4 = true, elementResize: a3 = "function" == typeof ResizeObserver, layoutShift: s3 = "function" == typeof IntersectionObserver, animationFrame: l2 = false } = o3, c2 = li(e5), d2 = i4 || r4 ? [...c2 ? ri(c2) : [], ...ri(t3)] : [];
  d2.forEach((e6) => {
    i4 && e6.addEventListener("scroll", n3, { passive: true }), r4 && e6.addEventListener("resize", n3);
  });
  const u2 = c2 && s3 ? function(e6, t4) {
    let n4, o4 = null;
    const i5 = Go(e6);
    function r5() {
      var e7;
      clearTimeout(n4), null == (e7 = o4) || e7.disconnect(), o4 = null;
    }
    return function a4(s4, l3) {
      void 0 === s4 && (s4 = false), void 0 === l3 && (l3 = 1), r5();
      const c3 = e6.getBoundingClientRect(), { left: d3, top: u3, width: h3, height: p3 } = c3;
      if (s4 || t4(), !h3 || !p3) return;
      const g3 = { rootMargin: -Co(u3) + "px " + -Co(i5.clientWidth - (d3 + h3)) + "px " + -Co(i5.clientHeight - (u3 + p3)) + "px " + -Co(d3) + "px", threshold: xo(0, wo(1, l3)) || 1 };
      let m3 = true;
      function f2(t5) {
        const o5 = t5[0].intersectionRatio;
        if (o5 !== l3) {
          if (!m3) return a4();
          o5 ? a4(false, o5) : n4 = setTimeout(() => {
            a4(false, 1e-7);
          }, 1e3);
        }
        1 !== o5 || ki(c3, e6.getBoundingClientRect()) || a4(), m3 = false;
      }
      try {
        o4 = new IntersectionObserver(f2, { ...g3, root: i5.ownerDocument });
      } catch (e7) {
        o4 = new IntersectionObserver(f2, g3);
      }
      o4.observe(e6);
    }(true), r5;
  }(c2, n3) : null;
  let h2, p2 = -1, g2 = null;
  a3 && (g2 = new ResizeObserver((e6) => {
    let [o4] = e6;
    o4 && o4.target === c2 && g2 && (g2.unobserve(t3), cancelAnimationFrame(p2), p2 = requestAnimationFrame(() => {
      var e7;
      null == (e7 = g2) || e7.observe(t3);
    })), n3();
  }), c2 && !l2 && g2.observe(c2), g2.observe(t3));
  let m2 = l2 ? hi(e5) : null;
  return l2 && function t4() {
    const o4 = hi(e5);
    m2 && !ki(m2, o4) && n3();
    m2 = o4, h2 = requestAnimationFrame(t4);
  }(), n3(), () => {
    var e6;
    d2.forEach((e7) => {
      i4 && e7.removeEventListener("scroll", n3), r4 && e7.removeEventListener("resize", n3);
    }), null == u2 || u2(), null == (e6 = g2) || e6.disconnect(), g2 = null, l2 && cancelAnimationFrame(h2);
  };
}
function Ei(e5) {
  var t3 = e5.children, n3 = e5.content, o3 = e5.position, i4 = void 0 === o3 ? "top" : o3, r4 = e5.className, a3 = void 0 === r4 ? "" : r4, s3 = e5.delay, c2 = void 0 === s3 ? 200 : s3, d2 = e5.style, u2 = void 0 === d2 ? "dark" : d2, h2 = e5.trigger, p2 = void 0 === h2 ? "hover" : h2, g2 = Te(null), m2 = Te(null), f2 = Te(null), y3 = v2(Ie(false), 2), b2 = y3[0], w3 = y3[1], x3 = Te(null);
  return Me(function() {
    var e6;
    if (null !== (e6 = g2.current) && void 0 !== e6 && e6.base && m2.current) return Ci(g2.current.base, m2.current, function() {
      Pi(g2.current.base, m2.current, { placement: i4, middleware: [Si(8), Ii(), _i({ padding: 8 }), Mi({ element: f2.current, padding: 6 })] }).then(function(e7) {
        var t4, n4 = e7.x, o4 = e7.y, i5 = e7.placement, r5 = e7.middlewareData;
        Object.assign(m2.current.style, { left: "".concat(n4, "px"), top: "".concat(o4, "px") });
        var a4 = null !== (t4 = r5.arrow) && void 0 !== t4 ? t4 : {}, s4 = a4.x, c3 = a4.y, d3 = { top: "bottom", bottom: "top", left: "right", right: "left" }[i5.split("-")[0]];
        Object.assign(f2.current.style, l({ left: null != s4 ? "".concat(s4, "px") : "", top: null != c3 ? "".concat(c3, "px") : "", right: "", bottom: "" }, d3, "-4px"));
      });
    });
  }, [i4, b2]), Me(function() {
    var e6, t4 = null === (e6 = g2.current) || void 0 === e6 ? void 0 : e6.base, n4 = m2.current;
    if (t4 && n4) {
      var o4 = function() {
        x3.current && clearTimeout(x3.current);
      }, i5 = function() {
        o4(), x3.current = setTimeout(function() {
          return w3(true);
        }, c2);
      }, r5 = function() {
        o4(), w3(false);
      }, a4 = function() {
        return w3(function(e7) {
          return !e7;
        });
      };
      return "hover" === p2 ? (t4.addEventListener("mouseenter", i5), t4.addEventListener("mouseleave", r5), n4.addEventListener("mouseenter", i5), n4.addEventListener("mouseleave", r5), t4.addEventListener("pointerdown", r5)) : "click" === p2 && t4.addEventListener("click", a4), "none" === p2 && (x3.current && clearTimeout(x3.current), w3(false)), function() {
        o4(), "hover" === p2 ? (t4.removeEventListener("mouseenter", i5), t4.removeEventListener("mouseleave", r5), n4.removeEventListener("mouseenter", i5), n4.removeEventListener("mouseleave", r5), t4.removeEventListener("pointerdown", r5)) : "click" === p2 && t4.removeEventListener("click", a4);
      };
    }
  }, [p2, c2]), U2(j2, null, U2("div", { ref: m2, role: "tooltip", className: "z-100 pointer-events-none absolute select-none whitespace-nowrap rounded-lg px-3 py-2 text-sm shadow-md transition-opacity duration-150 ".concat("dark" === u2 ? "bg-gray-900 text-white" : "border border-gray-200 bg-white text-gray-900", " ").concat(b2 ? "opacity-100" : "opacity-0", " ").concat(a3, " "), style: { visibility: b2 ? "visible" : "hidden" } }, n3, U2("div", { ref: f2, className: "absolute h-2 w-2 rotate-45 bg-inherit ".concat("light" === u2 ? "border border-gray-200" : "", " ") })), U2(Ti, { ref: g2 }, t3));
}
function Ai(e5, t3) {
  for (var n3 in e5) if ("__source" !== n3 && !(n3 in t3)) return true;
  for (var o3 in t3) if ("__source" !== o3 && e5[o3] !== t3[o3]) return true;
  return false;
}
function zi(e5, t3) {
  this.props = e5, this.context = t3;
}
function Oi(e5, t3, n3) {
  return e5 && (e5.__c && e5.__c.__H && (e5.__c.__H.__.forEach(function(e6) {
    "function" == typeof e6.__c && e6.__c();
  }), e5.__c.__H = null), null != (e5 = function(e6, t4) {
    for (var n4 in t4) e6[n4] = t4[n4];
    return e6;
  }({}, e5)).__c && (e5.__c.__P === n3 && (e5.__c.__P = t3), e5.__c = null), e5.__k = e5.__k && e5.__k.map(function(e6) {
    return Oi(e6, t3, n3);
  })), e5;
}
function Hi(e5, t3, n3) {
  return e5 && n3 && (e5.__v = null, e5.__k = e5.__k && e5.__k.map(function(e6) {
    return Hi(e6, t3, n3);
  }), e5.__c && e5.__c.__P === t3 && (e5.__e && n3.appendChild(e5.__e), e5.__c.__e = true, e5.__c.__P = n3)), e5;
}
function Di() {
  this.__u = 0, this.o = null, this.__b = null;
}
function Fi(e5) {
  var t3 = e5.__.__c;
  return t3 && t3.__a && t3.__a(e5);
}
function Ui() {
  this.i = null, this.l = null;
}
function Yi() {
}
function Xi() {
  return this.cancelBubble;
}
function Ki() {
  return this.defaultPrevented;
}
function or({ component: e5, parentContext: t3 = {} }) {
  const [n3, o3] = Ie({});
  Me(() => {
    const t4 = () => o3({});
    return e5.onUpdate(t4) && o3({}), () => e5.offUpdate(t4);
  }, [e5]);
  const i4 = e5.getChildContext(t3), r4 = e5.getRenderer();
  if (!r4) throw new Error(`No renderer for type: ${e5.getRenderType}`);
  return r4(e5.props, function(t4) {
    const n4 = t4?.context ? { ...i4, ...t4.context } : i4;
    return e5.getChildren().filter(({ id: e6 }) => !t4?.filter || t4.filter(e6)).map(({ component: e6, id: t5, className: o4 }) => o4 ? ue("div", { className: o4, children: ue(or, { component: e6, parentContext: n4 }, t5) }) : ue(or, { component: e6, parentContext: n4 }, t5));
  }, i4);
}
function ir({ children: e5 }) {
  const { provides: t3 } = nr(), n3 = (e6) => e6.map((e7) => ue(or, { component: e7 }, e7.props.id));
  return e5({ headers: { top: n3(t3?.getHeadersByPlacement("top") || []), bottom: n3(t3?.getHeadersByPlacement("bottom") || []), left: n3(t3?.getHeadersByPlacement("left") || []), right: n3(t3?.getHeadersByPlacement("right") || []) }, panels: { left: n3(t3?.getPanelsByLocation("left") || []), right: n3(t3?.getPanelsByLocation("right") || []) }, floating: { insideScroller: n3(t3?.getFloatingComponents("inside") || []), outsideScroller: n3(t3?.getFloatingComponents("outside") || []) }, commandMenu: t3?.getCommandMenu() ? ue(or, { component: t3.getCommandMenu() }) : null });
}
function rr(e5) {
  var t3 = e5.open, n3 = e5.trigger, o3 = e5.children, i4 = e5.placement, r4 = void 0 === i4 ? "bottom-start" : i4, a3 = e5.offsetSkidding, s3 = void 0 === a3 ? -2 : a3, l2 = e5.offsetDistance, c2 = void 0 === l2 ? 5 : l2, d2 = e5.delay, u2 = void 0 === d2 ? 0 : d2, h2 = e5.onShow, g2 = e5.onHide, m2 = e5.className, f2 = Te(null), y3 = v2(Ie({ x: 0, y: 0 }), 2), b2 = y3[0], w3 = y3[1], x3 = function(e6) {
    return e6 && { top: "top-start", bottom: "bottom-start", left: "left-start", right: "right-start" }[e6] || e6 || "bottom-start";
  }(r4);
  return Me(function() {
    var e6 = n3, o4 = f2.current;
    if (o4 && (t3 ? (o4.style.display = "block", null == h2 || h2()) : (u2 ? setTimeout(function() {
      return o4.style.display = "none";
    }, u2) : o4.style.display = "none", null == g2 || g2()), e6 && t3)) {
      var i5 = Ci(e6, o4, function() {
        Pi(e6, o4, { placement: x3, strategy: "absolute", middleware: [Si({ mainAxis: c2, crossAxis: s3 }), Ii(), _i({ padding: 8 })] }).then(function(e7) {
          var t4 = e7.x, n4 = e7.y;
          w3({ x: t4, y: n4 });
        });
      });
      return function() {
        return i5();
      };
    }
  }, [t3, n3, r4, s3, c2, u2]), Me(function() {
    if (t3) {
      var e6 = f2.current;
      if (e6) {
        var o4 = function(t4) {
          var o5, i5, r5 = null !== (o5 = null === (i5 = t4.composedPath) || void 0 === i5 ? void 0 : i5.call(t4)) && void 0 !== o5 ? o5 : [t4.target];
          n3 && r5.includes(n3) || r5.includes(e6) || null == g2 || g2();
        };
        return window.addEventListener("pointerdown", o4, true), function() {
          return window.removeEventListener("pointerdown", o4, true);
        };
      }
    }
  }, [t3, n3, g2]), U2("div", { ref: f2, style: p({}, n3 && { display: "none", left: "".concat(b2.x, "px"), top: "".concat(b2.y, "px") }), className: "absolute z-50 min-w-[8rem] divide-y divide-gray-100 rounded-lg border border-[#cfd4da] bg-white shadow-sm transition-opacity duration-150 focus:outline-none ".concat(t3 ? "opacity-100" : "opacity-0", " ").concat(!n3 && "bottom-0 left-0 right-0", " ").concat(m2, " ") }, U2("div", { className: "flex flex-col py-2" }, o3));
}
function gr(e5, t3, n3, o3) {
  let i4 = e5.getHandlersForScope(t3);
  const r4 = e5.onModeChange(() => {
    if ("global" === t3.type) {
      const t4 = e5.getActiveInteractionMode();
      n3.style.cursor = "global" === (null == t4 ? void 0 : t4.scope) ? t4.cursor ?? "auto" : "auto";
    }
    i4 = e5.getHandlersForScope(t3);
  }), a3 = e5.onHandlerChange(() => {
    i4 = e5.getHandlersForScope(t3);
  }), s3 = e5.getActiveInteractionMode(), l2 = e5.getCurrentCursor();
  "global" === t3.type ? n3.style.cursor = "global" === (null == s3 ? void 0 : s3.scope) ? l2 : "auto" : n3.style.cursor = l2;
  const c2 = e5.onCursorChange((o4) => {
    var i5;
    "global" === t3.type && "global" !== (null == (i5 = e5.getActiveInteractionMode()) ? void 0 : i5.scope) || (n3.style.cursor = o4);
  }), d2 = { onPointerDown: "pointerdown", onPointerUp: "pointerup", onPointerMove: "pointermove", onPointerEnter: "pointerenter", onPointerLeave: "pointerleave", onPointerCancel: "pointercancel" }, u2 = {};
  return Object.keys(d2).forEach((t4) => {
    u2[t4] = (r5) => {
      var a4;
      if (e5.isPaused()) return;
      const s4 = r5, l3 = e5.getActiveMode();
      null == (a4 = null == i4 ? void 0 : i4[t4]) || a4.call(i4, ((e6, t5) => {
        if (o3) return o3(e6, t5);
        const n4 = t5.getBoundingClientRect();
        return { x: e6.clientX - n4.left, y: e6.clientY - n4.top };
      })(s4, n3), s4, l3);
    }, n3.addEventListener(d2[t4], u2[t4]);
  }), () => {
    Object.keys(d2).forEach((e6) => n3.removeEventListener(d2[e6], u2[e6])), r4(), c2(), a3();
  };
}
function _r() {
  const { provides: e5 } = Sr();
  return { setCursor: (t3, n3, o3 = 0) => {
    null == e5 || e5.setCursor(t3, n3, o3);
  }, removeCursor: (t3) => {
    null == e5 || e5.removeCursor(t3);
  } };
}
function Ir({ modeId: e5, pageIndex: t3 }) {
  const { provides: n3 } = Sr();
  return { register: (o3, i4) => {
    const r4 = (null == i4 ? void 0 : i4.modeId) ?? e5, a3 = (null == i4 ? void 0 : i4.pageIndex) ?? t3;
    return r4 ? null == n3 ? void 0 : n3.registerHandlers({ modeId: r4, handlers: o3, pageIndex: a3 }) : null == n3 ? void 0 : n3.registerAlways({ scope: void 0 !== a3 ? { type: "page", pageIndex: a3 } : { type: "global" }, handlers: o3 });
  } };
}
function Er() {
  const { provides: e5 } = rn("viewport"), { provides: t3 } = Tr(), n3 = Te(null);
  return Me(() => {
    const o3 = n3.current;
    if (!o3 || !e5 || !t3) return;
    if ("undefined" == typeof window) return;
    let i4, r4 = 0, a3 = { x: 0, y: 0 };
    const s3 = () => {
      o3.style.transform = "none", o3.style.transformOrigin = "0 0";
    }, l2 = (n4) => {
      r4 = t3.getState().currentZoomLevel;
      const i5 = e5.getBoundingRect();
      a3 = { x: n4.center.x - i5.origin.x, y: n4.center.y - i5.origin.y };
      const s4 = o3.getBoundingClientRect();
      o3.style.transformOrigin = `${n4.center.x - s4.left}px ${n4.center.y - s4.top}px`, n4.srcEvent?.cancelable && (n4.srcEvent.preventDefault(), n4.srcEvent.stopPropagation());
    }, c2 = (e6) => {
      var t4;
      t4 = e6.scale, o3.style.transform = `scale(${t4})`, e6.srcEvent?.cancelable && (e6.srcEvent.preventDefault(), e6.srcEvent.stopPropagation());
    }, d2 = (e6) => {
      const n4 = (e6.scale - 1) * r4;
      t3.requestZoomBy(n4, { vx: a3.x, vy: a3.y }), s3(), r4 = 0;
    };
    return (async () => {
      try {
        const e6 = (await Promise.resolve().then(() => (init_hammer_d68c853c(), hammer_d68c853c_exports)).then(function(e7) {
          return e7.h;
        })).default, t4 = (() => {
          const t5 = "ontouchstart" in window || navigator.maxTouchPoints > 0;
          return t5 && /mobile|tablet|ip(ad|hone|od)|android/i.test(navigator.userAgent) ? e6.TouchInput : t5 ? e6.TouchMouseInput : e6.MouseInput;
        })();
        i4 = new e6(o3, { touchAction: "pan-x pan-y", inputClass: t4 }), i4.get("pinch").set({ enable: true, pointers: 2, threshold: 0.1 }), i4.on("pinchstart", l2), i4.on("pinchmove", c2), i4.on("pinchend", d2);
      } catch (e6) {
        console.warn("Failed to load HammerJS:", e6);
      }
    })(), () => {
      i4?.destroy(), s3();
    };
  }, [e5, t3]), { elementRef: n3 };
}
function Ar({ children: e5, style: t3, ...n3 }) {
  const { elementRef: o3 } = Er();
  return ue("div", { ref: o3, ...n3, style: { ...t3, display: "block", width: "fit-content", overflow: "visible", boxSizing: "border-box", margin: "0px auto" }, children: e5 });
}
function Nr(e5) {
  var t3, n3 = e5.icon, o3 = e5.title, i4 = g(e5, Rr), r4 = function() {
    const { provides: e6 } = nr();
    if (!e6) throw new Error("useIcon must be used within a UI context");
    const { registerIcon: t4, registerIcons: n4, getIcon: o4, getAllIcons: i5, getSvgString: r5, isSvgString: a4, isSvgDataUri: s3, dataUriToSvgString: l2, svgStringToDataUri: c2 } = e6;
    return { registerIcon: t4, registerIcons: n4, getIcon: o4, getAllIcons: i5, getSvgString: r5, isSvgString: a4, isSvgDataUri: s3, dataUriToSvgString: l2, svgStringToDataUri: c2 };
  }();
  if (!(t3 = r4.isSvgDataUri(n3) ? r4.dataUriToSvgString(n3) : r4.getSvgString(n3))) return console.warn("Icon not found: ".concat(n3)), null;
  var a3 = U2("span", p(p({}, i4), {}, { dangerouslySetInnerHTML: { __html: t3 } }));
  return o3 ? U2("span", p({ title: o3 }, i4), a3) : a3;
}
function jr(e5) {
  return { type: Hr, payload: e5 };
}
function Br(e5) {
  return { type: Dr, payload: e5 };
}
function Gr(e5, t3, n3) {
  return { type: Ur, payload: { results: e5, total: t3, activeResultIndex: n3 } };
}
function Xr({ pageIndex: e5, scale: t3, style: n3, highlightColor: o3 = "#FFFF00", activeHighlightColor: i4 = "#FFBF00", ...r4 }) {
  const { provides: a3 } = Yr(), [s3, l2] = Ie(null);
  if (Me(() => a3?.onSearchResultStateChange((e6) => {
    l2(e6);
  }), [a3]), !s3) return null;
  return ue("div", { style: { ...n3 }, ...r4, children: s3.results.map((e6, t4) => ({ result: e6, originalIndex: t4 })).filter(({ result: t4 }) => t4.pageIndex === e5).map(({ result: e6, originalIndex: n4 }) => e6.rects.map((e7) => ue("div", { style: { position: "absolute", top: e7.origin.y * t3, left: e7.origin.x * t3, width: e7.size.width * t3, height: e7.size.height * t3, backgroundColor: n4 === s3.activeResultIndex ? i4 : o3, mixBlendMode: "multiply", transform: "scale(1.02)", transformOrigin: "center", transition: "opacity .3s ease-in-out", opacity: 1 } }))) });
}
function na({ style: e5, selectedPage: t3, scrollOptions: n3 = { behavior: "smooth", block: "nearest", inline: "nearest" }, ...o3 }) {
  const { provides: i4 } = ta(), r4 = Te(null), [a3, s3] = Ie(null);
  return Me(() => i4?.onWindow(s3), [i4]), Me(() => {
    const e6 = r4.current;
    if (!e6) return;
    const t4 = () => i4?.setViewport(e6.scrollTop, e6.clientHeight);
    return e6.addEventListener("scroll", t4), () => e6.removeEventListener("scroll", t4);
  }, [i4]), Me(() => {
    const e6 = r4.current;
    e6 && i4 && 0 === a3?.items.length && i4.setViewport(e6.scrollTop, e6.clientHeight);
  }, [a3, i4]), Me(() => {
    if (!t3 || !a3) return;
    const e6 = a3.items.find((e7) => e7.pageIndex + 1 === t3);
    if (!e6) return;
    const o4 = r4.current;
    if (!o4) return;
    e6.top < o4.scrollTop + 8 ? o4.scrollTo({ top: e6.top, ...n3 }) : e6.top + e6.wrapperHeight + e6.labelHeight > o4.scrollTop + o4.clientHeight - 8 && o4.scrollTo({ top: e6.top + e6.wrapperHeight + e6.labelHeight - o4.clientHeight, ...n3 });
  }, [t3, a3, n3]), ue("div", { ref: r4, style: { overflowY: "auto", position: "relative", ...e5 }, ...o3, children: ue("div", { style: { height: a3?.totalHeight ?? 0, position: "relative" }, children: a3?.items.map((e6) => o3.children(e6)) }) });
}
function oa({ meta: e5, style: t3, ...n3 }) {
  const { provides: o3 } = ta(), [i4, r4] = Ie(), a3 = Te(null);
  Me(() => {
    const t4 = o3?.renderThumb(e5.pageIndex, window.devicePixelRatio);
    return t4?.wait((e6) => {
      const t5 = URL.createObjectURL(e6);
      a3.current = t5, r4(t5);
    }, _t), () => {
      a3.current ? (URL.revokeObjectURL(a3.current), a3.current = null) : t4?.abort({ code: bt.Cancelled, message: "canceled render task" });
    };
  }, [e5.pageIndex]);
  return i4 ? ue("img", { src: i4, onLoad: () => {
    a3.current && (URL.revokeObjectURL(a3.current), a3.current = null);
  }, style: t3, ...n3 }) : null;
}
function ia(e5) {
  var t3 = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 300, n3 = v2(Ie(e5), 2), o3 = n3[0], i4 = n3[1];
  return Me(function() {
    var n4 = window.setTimeout(function() {
      return i4(e5);
    }, t3);
    return function() {
      return clearTimeout(n4);
    };
  }, [e5, t3]), o3;
}
function fa(e5, t3) {
  return e5.rects[t3] ?? [];
}
function va(e5, t3) {
  return Qe(fa(e5, t3));
}
function ya(e5, t3) {
  for (const n3 of e5.runs) {
    if (!(t3.y >= n3.rect.y && t3.y <= n3.rect.y + n3.rect.height && t3.x >= n3.rect.x && t3.x <= n3.rect.x + n3.rect.width)) continue;
    const e6 = n3.glyphs.findIndex((e7) => t3.x >= e7.x && t3.x <= e7.x + e7.width && t3.y >= e7.y && t3.y <= e7.y + e7.height);
    if (-1 !== e6) return n3.charStart + e6;
  }
  return -1;
}
function ba(e5, t3, n3) {
  if (!e5 || !t3 || n3 < e5.start.page || n3 > e5.end.page) return null;
  const o3 = n3 === e5.start.page ? e5.start.index : 0, i4 = t3.runs[t3.runs.length - 1], r4 = i4.charStart + i4.glyphs.length - 1;
  return { from: o3, to: n3 === e5.end.page ? e5.end.index : r4 };
}
function wa(e5, t3, n3, o3 = true) {
  const i4 = [];
  for (const o4 of e5.runs) {
    const e6 = o4.charStart, r4 = e6 + o4.glyphs.length - 1;
    if (r4 < t3 || e6 > n3) continue;
    const a3 = Math.max(t3, e6) - e6, s3 = Math.min(n3, r4) - e6;
    let l2 = 1 / 0, c2 = -1 / 0, d2 = 1 / 0, u2 = -1 / 0, h2 = 0;
    for (let e7 = a3; e7 <= s3; e7++) {
      const t4 = o4.glyphs[e7];
      2 !== t4.flags && (l2 = Math.min(l2, t4.x), c2 = Math.max(c2, t4.x + t4.width), d2 = Math.min(d2, t4.y), u2 = Math.max(u2, t4.y + t4.height), h2++);
    }
    l2 !== 1 / 0 && h2 > 0 && i4.push({ rect: { origin: { x: l2, y: d2 }, size: { width: c2 - l2, height: u2 - d2 } }, charCount: h2 });
  }
  return o3 ? function(e6) {
    const t4 = [];
    let n4 = null, o4 = null;
    for (const i5 of e6) n4 && o4 ? Sa(n4, i5) ? o4 = xa(o4, i5.rect) : (t4.push(o4), o4 = i5.rect) : o4 = i5.rect, n4 = i5;
    return o4 && !ka(o4) && t4.push(o4), t4;
  }(i4) : i4.map((e6) => e6.rect);
}
function xa(e5, t3) {
  const n3 = Math.min(e5.origin.x, t3.origin.x), o3 = Math.min(e5.origin.y, t3.origin.y);
  return { origin: { x: n3, y: o3 }, size: { width: Math.max(e5.origin.x + e5.size.width, t3.origin.x + t3.size.width) - n3, height: Math.max(e5.origin.y + e5.size.height, t3.origin.y + t3.size.height) - o3 } };
}
function ka(e5) {
  return e5.size.width <= 0 || e5.size.height <= 0;
}
function Ca(e5, t3) {
  if (ka(e5) || ka(t3)) return 0;
  const n3 = xa(e5, t3);
  return n3.size.height === e5.size.height || n3.size.height === t3.size.height ? 1 : function(e6, t4) {
    const n4 = Math.max(e6.origin.x, t4.origin.x), o3 = Math.max(e6.origin.y, t4.origin.y), i4 = Math.min(e6.origin.x + e6.size.width, t4.origin.x + t4.size.width), r4 = Math.min(e6.origin.y + e6.size.height, t4.origin.y + t4.size.height);
    return { origin: { x: n4, y: o3 }, size: { width: Math.max(0, i4 - n4), height: Math.max(0, r4 - o3) } };
  }(e5, t3).size.height / n3.size.height;
}
function Sa(e5, t3) {
  const n3 = e5.rect, o3 = t3.rect;
  if (Ca(n3, o3) < 0.8) return false;
  const i4 = 1 * n3.size.width / e5.charCount, r4 = 1 * o3.size.width / t3.charCount, a3 = n3.origin.x - i4, s3 = n3.origin.x + n3.size.width + i4, l2 = o3.origin.x - r4;
  return a3 < o3.origin.x + o3.size.width + r4 && s3 > l2;
}
function Ea({ pageIndex: e5, scale: t3, background: n3 = "rgba(33,150,243)" }) {
  const { provides: o3 } = Ta(), { provides: i4 } = Sr(), { register: r4 } = Ir({ pageIndex: e5 }), [a3, s3] = Ie([]), [l2, c2] = Ie(null), { setCursor: d2, removeCursor: u2 } = _r(), h2 = Te(null);
  Me(() => {
    if (o3) return o3.onSelectionChange(() => {
      "default" === (null == i4 ? void 0 : i4.getActiveMode()) ? (s3(o3.getHighlightRectsForPage(e5)), c2(o3.getBoundingRectForPage(e5))) : (s3([]), c2(null));
    });
  }, [o3, e5]);
  const p2 = Ae((e6) => {
    const t4 = h2.current;
    return t4 ? ya(t4, e6) : -1;
  }, []);
  Me(() => {
    if (!o3) return;
    const t4 = o3.getGeometry(e5);
    return t4.wait((e6) => h2.current = e6, _t), () => {
      t4.abort({ code: bt.Cancelled, message: "Cancelled" }), h2.current = null;
    };
  }, [o3, e5]);
  const g2 = Ee(() => ({ onPointerDown: (t4, n4, i5) => {
    o3 && o3.isEnabledForMode(i5) && (o3.clear(), o3.getGeometry(e5).wait((n5) => {
      const i6 = ya(n5, t4);
      -1 !== i6 && o3.begin(e5, i6);
    }, _t));
  }, onPointerMove: (t4, n4, i5) => {
    if (!o3 || !o3.isEnabledForMode(i5)) return;
    const r5 = p2(t4);
    -1 !== r5 ? d2("selection-text", "text", 10) : u2("selection-text"), -1 !== r5 && o3.update(e5, r5);
  }, onPointerUp: (e6, t4, n4) => {
    o3 && o3.isEnabledForMode(n4) && o3.end();
  }, onHandlerActiveEnd(e6) {
    o3 && o3.isEnabledForMode(e6) && o3.clear();
  } }), [o3, e5, p2]);
  return Me(() => {
    if (r4) return r4(g2);
  }, [r4, g2]), l2 ? ue("div", { style: { position: "absolute", left: l2.origin.x * t3, top: l2.origin.y * t3, width: l2.size.width * t3, height: l2.size.height * t3, mixBlendMode: "multiply", isolation: "isolate" }, children: a3.map((e6, o4) => ue("div", { style: { position: "absolute", left: (e6.origin.x - l2.origin.x) * t3, top: (e6.origin.y - l2.origin.y) * t3, width: e6.size.width * t3, height: e6.size.height * t3, background: n3, pointerEvents: "none" } }, o4)) }) : null;
}
function Aa() {
  const { provides: e5 } = Ta();
  return Me(() => {
    if (e5) return e5.onCopyToClipboard((e6) => {
      navigator.clipboard.writeText(e6);
    });
  }, [e5]), null;
}
function za(e5, t3, n3, o3, i4, r4) {
  return r4 ? e5.origin.y + i4 >= n3 + o3 : e5.origin.y + i4 + e5.size.height + n3 + o3 <= t3.scrollTop + t3.clientHeight;
}
function Ra(e5, t3, n3) {
  var o3 = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 8, i4 = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 40;
  if (!e5.length) return null;
  var r4 = n3.getMetrics(), a3 = n3.getViewportGap(), s3 = 1 === e5.length ? { first: e5[0], last: e5[0] } : { first: e5[0], last: e5[e5.length - 1] }, l2 = t3.getRectPositionForPage(s3.first.page, s3.first.rect), c2 = t3.getRectPositionForPage(s3.last.page, s3.last.rect);
  if (!l2 || !c2) return null;
  var d2 = za(c2, r4, i4, o3, a3, false), u2 = za(l2, r4, i4, o3, a3, true);
  return d2 ? { left: c2.origin.x + c2.size.width / 2, top: c2.origin.y + c2.size.height + o3 } : u2 ? { left: l2.origin.x + l2.size.width / 2, top: l2.origin.y - o3 - i4 } : null;
}
function Na(e5) {
  var t3 = e5.open, n3 = e5.title, o3 = e5.children, i4 = e5.onClose, r4 = e5.className, a3 = e5.showCloseButton, s3 = void 0 === a3 || a3;
  e5.maxWidth;
  var l2 = Te(null);
  Me(function() {
    if (t3) {
      var e6 = function(e7) {
        "Escape" === e7.key && (null == i4 || i4());
      };
      return document.addEventListener("keydown", e6), function() {
        return document.removeEventListener("keydown", e6);
      };
    }
  }, [t3, i4]);
  return Me(function() {
    return document.body.style.overflow = t3 ? "hidden" : "", function() {
      document.body.style.overflow = "";
    };
  }, [t3]), t3 ? ue("div", { ref: l2, className: "fixed inset-0 z-50 bg-black/50 md:flex md:items-center md:justify-center", onClick: function(e6) {
    e6.target === l2.current && (null == i4 || i4());
  }, children: ue("div", { className: "relative flex h-full w-full flex-col bg-white md:h-auto md:w-[28rem] md:max-w-[90vw] md:rounded-lg md:border md:border-gray-200 md:shadow-lg ".concat(r4), onClick: function(e6) {
    return e6.stopPropagation();
  }, children: [(n3 || s3) && ue("div", { className: "flex flex-shrink-0 items-center justify-between border-b border-gray-200 px-6 py-4", children: [n3 && ue("h2", { className: "text-lg font-semibold text-gray-900", children: n3 }), s3 && ue(bo, { onClick: i4, className: "p-1 hover:bg-gray-100", children: ue(Nr, { icon: "x", className: "h-5 w-5" }) })] }), ue("div", { className: "flex-1 overflow-y-auto px-6 py-4 md:max-h-[80vh] md:flex-none", children: o3 })] }) }) : null;
}
function Ya({ children: e5 }) {
  const { provides: t3 } = rn(Ga.id), n3 = Te(null), [o3, i4] = Ie(null), [r4, a3] = Ie(false), [s3, l2] = Ie(false), [c2, d2] = Ie([]);
  Me(() => {
    const e6 = n3.current, t4 = e6?.contentWindow?.document?.body;
    if (t4 && c2.length > 0) return se(ue(Va, { pages: c2 }), t4), a3(true), () => {
      t4 && se(null, t4);
    };
  }, [c2]);
  const u2 = { parsePageRange: t3?.parsePageRange || (() => ({ pages: [], isValid: false })), executePrint: async (e6) => {
    if (!t3) throw new Error("Print capability not available");
    if (!n3.current?.contentWindow) throw new Error("Print iframe not ready");
    l2(true), i4(null), d2([]), a3(false);
    try {
      const r5 = [];
      await t3.preparePrint(e6, (e7) => {
        i4(e7);
      }, (e7) => {
        r5.push(e7), d2([...r5]);
      }), await new Promise((e7) => setTimeout(e7, 500));
      const a4 = n3.current.contentWindow;
      a4.focus(), a4.print(), i4({ current: o3?.total || 0, total: o3?.total || 0, status: "complete", message: "Print dialog opened" });
    } catch (e7) {
      throw i4({ current: 0, total: 0, status: "error", message: `Print failed: ${e7 instanceof Error ? e7.message : "Unknown error"}` }), e7;
    } finally {
      l2(false);
    }
  }, progress: o3, isReady: r4, isPrinting: s3 };
  return ue(Za.Provider, { value: u2, children: [e5, ue("iframe", { ref: n3, style: { display: "none", width: "210mm", height: "297mm" }, title: "Print Preview" })] });
}
function Es({ scale: e5, pageIndex: t3, rotation: n3, trackedAnnotation: o3, children: i4, style: r4, outlineOffset: a3 = 1, isSelected: s3 = false, isDraggable: l2 = true, isResizable: c2 = true, computeResizePatch: d2, ...u2 }) {
  const { provides: h2 } = Ts(), p2 = Te(null), [g2, m2] = Ie("idle"), [f2, v3] = Ie(null), [y3, b2] = Ie(null), [w3, x3] = Ie(null), [k3, C3] = Ie(o3.object.rect), [S2, _2] = Ie(null);
  Me(() => {
    C3(o3.object.rect), _2(null);
  }, [o3]);
  const I3 = S2 ? { ...o3.object, ...S2 } : o3.object;
  return ue("div", { ref: p2, onPointerDown: (e6) => {
    if (!s3) return;
    e6.stopPropagation(), e6.preventDefault();
    const t4 = e6.target;
    if (c2 && t4.classList.contains("resize-handle")) m2("resizing"), v3(t4.dataset.direction);
    else {
      if (!l2) return;
      m2("dragging");
    }
    b2({ x: e6.clientX, y: e6.clientY }), x3(k3), p2.current?.setPointerCapture(e6.pointerId);
  }, onPointerMove: (t4) => {
    if ("idle" === g2 || !y3 || !w3) return;
    const i5 = { x: t4.clientX - y3.x, y: t4.clientY - y3.y }, { x: r5, y: a4 } = function(e6, t5, n4) {
      let o4 = e6.x, i6 = e6.y;
      switch (t5) {
        case 0:
          o4 = e6.x / n4, i6 = e6.y / n4;
          break;
        case 1:
          o4 = e6.y / n4, i6 = -e6.x / n4;
          break;
        case 2:
          o4 = -e6.x / n4, i6 = -e6.y / n4;
          break;
        case 3:
          o4 = -e6.y / n4, i6 = e6.x / n4;
      }
      return { x: o4, y: i6 };
    }(i5, n3, e5);
    let s4 = w3.origin.x, l3 = w3.origin.y, c3 = w3.size.width, u3 = w3.size.height;
    if ("dragging" === g2) s4 += r5, l3 += a4;
    else if ("resizing" === g2 && f2 && (f2.includes("right") ? c3 += r5 : f2.includes("left") && (s4 += r5, c3 -= r5), f2.includes("bottom") ? u3 += a4 : f2.includes("top") && (l3 += a4, u3 -= a4), c3 < 1 || u3 < 1)) return;
    const h3 = { origin: { x: s4, y: l3 }, size: { width: c3, height: u3 } };
    let p3 = { rect: h3 };
    if (d2) {
      const e6 = "resizing" === g2 ? f2 : "bottom-right";
      e6 && (p3 = d2(o3.object, h3, e6));
    }
    C3(p3.rect || h3), _2(p3);
  }, onPointerUp: (e6) => {
    if ("idle" === g2) return;
    const n4 = f2 || "bottom-right";
    if (m2("idle"), v3(null), p2.current?.releasePointerCapture(e6.pointerId), h2 && o3) {
      let e7 = { rect: k3 };
      d2 && n4 && (e7 = d2(o3.object, k3, n4)), h2.updateAnnotation(t3, o3.localId, e7);
    }
    b2(null), x3(null), _2(null);
  }, style: { position: "absolute", outline: s3 ? "1px solid #007ACC" : "none", outlineOffset: s3 ? `${a3}px` : "0px", left: k3.origin.x * e5 + "px", top: k3.origin.y * e5 + "px", width: k3.size.width * e5 + "px", height: k3.size.height * e5 + "px", pointerEvents: s3 ? "auto" : "none", cursor: s3 && l2 ? "move" : "default", ...r4 }, ...u2, children: ["function" == typeof i4 ? i4(I3) : i4, s3 && c2 && ue(j2, { children: [ue("div", { className: "resize-handle", "data-direction": "top-left", style: { position: "absolute", top: -7 - a3, left: -7 - a3, width: 13, height: 13, background: "blue", borderRadius: "50%", cursor: n3 % 2 ? "nesw-resize" : "nwse-resize" } }), ue("div", { className: "resize-handle", "data-direction": "top-right", style: { position: "absolute", top: -7 - a3, right: -7 - a3, width: 13, height: 13, background: "blue", borderRadius: "50%", cursor: n3 % 2 ? "nwse-resize" : "nesw-resize" } }), ue("div", { className: "resize-handle", "data-direction": "bottom-left", style: { position: "absolute", bottom: -7 - a3, left: -7 - a3, width: 13, height: 13, background: "blue", borderRadius: "50%", cursor: n3 % 2 ? "nwse-resize" : "nesw-resize" } }), ue("div", { className: "resize-handle", "data-direction": "bottom-right", style: { position: "absolute", bottom: -7 - a3, right: -7 - a3, width: 13, height: 13, background: "blue", borderRadius: "50%", cursor: n3 % 2 ? "nesw-resize" : "nwse-resize" } })] })] });
}
function As({ color: e5 = "#FFFF00", opacity: t3 = 0.5, rects: n3, rect: o3, scale: i4, onClick: r4, style: a3, ...s3 }) {
  return ue(j2, { children: n3.map((n4, l2) => ue("div", { onMouseDown: r4, style: { position: "absolute", left: (o3 ? n4.origin.x - o3.origin.x : n4.origin.x) * i4, top: (o3 ? n4.origin.y - o3.origin.y : n4.origin.y) * i4, width: n4.size.width * i4, height: n4.size.height * i4, background: e5, opacity: t3, pointerEvents: r4 ? "auto" : "none", cursor: r4 ? "pointer" : "default", zIndex: r4 ? 1 : null, ...a3 }, ...s3 }, l2)) });
}
function zs({ color: e5 = "#FFFF00", opacity: t3 = 0.5, rects: n3, rect: o3, scale: i4, onClick: r4, style: a3, ...s3 }) {
  const l2 = 2 * i4;
  return ue(j2, { children: n3.map((n4, c2) => ue("div", { onMouseDown: r4, style: { position: "absolute", left: (o3 ? n4.origin.x - o3.origin.x : n4.origin.x) * i4, top: (o3 ? n4.origin.y - o3.origin.y : n4.origin.y) * i4, width: n4.size.width * i4, height: n4.size.height * i4, background: "transparent", pointerEvents: r4 ? "auto" : "none", cursor: r4 ? "pointer" : "default", zIndex: r4 ? 1 : 0, ...a3 }, ...s3, children: ue("div", { style: { position: "absolute", left: 0, bottom: 0, width: "100%", height: l2, background: e5, opacity: t3, pointerEvents: "none" } }) }, c2)) });
}
function Rs({ color: e5 = "#FFFF00", opacity: t3 = 0.5, rects: n3, rect: o3, scale: i4, onClick: r4, style: a3, ...s3 }) {
  const l2 = 2 * i4;
  return ue(j2, { children: n3.map((n4, c2) => ue("div", { onMouseDown: r4, style: { position: "absolute", left: (o3 ? n4.origin.x - o3.origin.x : n4.origin.x) * i4, top: (o3 ? n4.origin.y - o3.origin.y : n4.origin.y) * i4, width: n4.size.width * i4, height: n4.size.height * i4, background: "transparent", pointerEvents: r4 ? "auto" : "none", cursor: r4 ? "pointer" : "default", zIndex: r4 ? 1 : 0, ...a3 }, ...s3, children: ue("div", { style: { position: "absolute", left: 0, top: "50%", width: "100%", height: l2, background: e5, opacity: t3, transform: "translateY(-50%)", pointerEvents: "none" } }) }, c2)) });
}
function Ns({ color: e5 = "#FFFF00", opacity: t3 = 0.5, rects: n3, rect: o3, scale: i4, onClick: r4, style: a3, ...s3 }) {
  const l2 = 2 * i4, c2 = 6 * i4, d2 = `url("data:image/svg+xml;utf8,${encodeURIComponent(`<svg xmlns="http://www.w3.org/2000/svg" width="${c2}" height="${2 * l2}" viewBox="0 0 ${c2} ${2 * l2}">
      <path d="M0 ${l2} Q ${c2 / 4} 0 ${c2 / 2} ${l2} T ${c2} ${l2}"
            fill="none" stroke="${e5}" stroke-width="${l2}" stroke-linecap="round"/>
    </svg>`)}")`;
  return ue(j2, { children: n3.map((e6, n4) => ue("div", { onMouseDown: r4, style: { position: "absolute", left: (o3 ? e6.origin.x - o3.origin.x : e6.origin.x) * i4, top: (o3 ? e6.origin.y - o3.origin.y : e6.origin.y) * i4, width: e6.size.width * i4, height: e6.size.height * i4, background: "transparent", pointerEvents: r4 ? "auto" : "none", cursor: r4 ? "pointer" : "default", zIndex: r4 ? 1 : 0, ...a3 }, ...s3, children: ue("div", { style: { position: "absolute", left: 0, bottom: 0, width: "100%", height: 2 * l2, backgroundImage: d2, backgroundRepeat: "repeat-x", backgroundSize: `${c2}px ${2 * l2}px`, opacity: t3, pointerEvents: "none" } }) }, n4)) });
}
function Ls({ color: e5 = "#000000", opacity: t3 = 1, strokeWidth: n3, inkList: o3, rect: i4, scale: r4, onClick: a3 }) {
  const s3 = Ee(() => o3.map(({ points: e6 }) => {
    let t4 = "";
    return e6.forEach(({ x: e7, y: n4 }, o4) => {
      const r5 = e7 - i4.origin.x, a4 = n4 - i4.origin.y;
      t4 += (0 === o4 ? "M" : "L") + r5 + " " + a4 + " ";
    }), t4.trim();
  }), [o3, i4]), l2 = i4.size.width * r4, c2 = i4.size.height * r4;
  return ue("svg", { style: { position: "absolute", width: l2, height: c2, pointerEvents: "none", zIndex: 2 }, width: l2, height: c2, viewBox: `0 0 ${i4.size.width} ${i4.size.height}`, children: s3.map((o4, i5) => ue("path", { d: o4, fill: "none", stroke: e5, strokeWidth: n3, strokeLinecap: "round", strokeLinejoin: "round", opacity: t3, pointerEvents: "visibleStroke", onMouseDown: a3, style: { cursor: "pointer" } }, i5)) });
}
function Os(e5, t3, n3, o3 = false) {
  if (e5.type !== dt.INK) throw new Error("resizeInkAnnotation: original is not an ink annotation");
  const i4 = e5.rect;
  let r4 = t3.size.width / i4.size.width, a3 = t3.size.height / i4.size.height;
  if ((t3.size.width < 10 || t3.size.height < 10) && (r4 = Math.max(r4, 10 / i4.size.width), a3 = Math.max(a3, 10 / i4.size.height), t3 = { origin: t3.origin, size: { width: i4.size.width * r4, height: i4.size.height * a3 } }), o3) {
    const e6 = Math.min(r4, a3);
    r4 = e6, a3 = e6, t3.size = { width: i4.size.width * e6, height: i4.size.height * e6 };
  }
  const s3 = e5.inkList.map((e6) => ({ points: e6.points.map((e7) => ({ x: t3.origin.x + (e7.x - i4.origin.x) * r4, y: t3.origin.y + (e7.y - i4.origin.y) * a3 })) })), l2 = (r4 + a3) / 2, c2 = e5.strokeWidth * l2;
  return { rect: t3, inkList: s3, strokeWidth: c2 };
}
function Hs(e5) {
  const { pageIndex: t3, scale: n3 } = e5, { provides: o3 } = Ts(), { provides: i4 } = Ta(), [r4, a3] = Ie([]), { register: s3 } = Ir({ pageIndex: t3 }), [l2, c2] = Ie(null);
  Me(() => {
    o3 && o3.onStateChange((e6) => {
      a3(((e7, t4) => (e7.pages[t4] ?? []).map((t5) => e7.byUid[t5]))(e6, t3)), c2(((e7, t4) => e7.selectedUid && (e7.pages[t4] ?? []).includes(e7.selectedUid) ? e7.byUid[e7.selectedUid] : null)(e6, t3));
    });
  }, [o3]);
  const d2 = Ee(() => ({ onPointerDown: (e6, t4) => {
    t4.target === t4.currentTarget && o3 && o3.deselectAnnotation();
  } }), [o3]), u2 = Ae((e6, n4) => {
    e6.stopPropagation(), o3 && i4 && (o3.selectAnnotation(t3, n4.localId), i4.clear());
  }, [o3, i4, t3]);
  return Me(() => s3(d2), [s3, d2]), ue(j2, { children: r4.map((t4) => {
    const o4 = l2?.localId === t4.localId;
    switch (t4.object.type) {
      case dt.UNDERLINE:
        return ue(Es, { trackedAnnotation: t4, isSelected: o4, isDraggable: false, isResizable: false, style: { mixBlendMode: "multiply" }, ...e5, children: ue(zs, { rect: t4.object.rect, color: t4.object.color, opacity: t4.object.opacity, rects: t4.object.segmentRects, scale: n3, onClick: (e6) => u2(e6, t4) }) }, t4.localId);
      case dt.STRIKEOUT:
        return ue(Es, { trackedAnnotation: t4, isSelected: o4, isDraggable: false, isResizable: false, style: { mixBlendMode: "multiply" }, ...e5, children: ue(Rs, { rect: t4.object.rect, color: t4.object.color, opacity: t4.object.opacity, rects: t4.object.segmentRects, scale: n3, onClick: (e6) => u2(e6, t4) }) }, t4.localId);
      case dt.SQUIGGLY:
        return ue(Es, { trackedAnnotation: t4, isSelected: o4, isDraggable: false, isResizable: false, style: { mixBlendMode: "multiply" }, ...e5, children: ue(Ns, { color: t4.object.color, opacity: t4.object.opacity, rects: t4.object.segmentRects, rect: t4.object.rect, scale: n3, onClick: (e6) => u2(e6, t4) }) }, t4.localId);
      case dt.HIGHLIGHT:
        return ue(Es, { trackedAnnotation: t4, isSelected: o4, isDraggable: false, isResizable: false, style: { mixBlendMode: "multiply" }, ...e5, children: ue(As, { color: t4.object.color, opacity: t4.object.opacity, rects: t4.object.segmentRects, scale: n3, rect: t4.object.rect, onClick: (e6) => u2(e6, t4) }) }, t4.localId);
      case dt.INK:
        return ue(Es, { isSelected: o4, trackedAnnotation: t4, outlineOffset: 6, computeResizePatch: Os, ...e5, children: (e6) => ue(Ls, { color: e6.color, opacity: e6.opacity, strokeWidth: e6.strokeWidth, inkList: e6.inkList, rect: e6.rect, scale: n3, onClick: (e7) => u2(e7, t4) }) }, t4.localId);
      default:
        return null;
    }
  }) });
}
function Ds({ pageIndex: e5, scale: t3 }) {
  const { provides: n3 } = Ta(), { provides: o3 } = Ts(), [i4, r4] = Ie([]), [a3, s3] = Ie(null), [l2, c2] = Ie({ mode: null, defaults: null });
  if (Me(() => {
    if (!n3) return;
    return n3.onSelectionChange(() => {
      r4(n3.getHighlightRectsForPage(e5)), s3(n3.getBoundingRectForPage(e5));
    });
  }, [n3, e5]), Me(() => {
    if (!o3) return;
    return o3.onActiveToolChange(c2);
  }, [o3]), !a3) return null;
  switch (l2.mode) {
    case dt.UNDERLINE:
      return ue("div", { style: { mixBlendMode: "multiply", pointerEvents: "none", position: "absolute", inset: 0 }, children: ue(zs, { color: l2.defaults?.color, opacity: l2.defaults?.opacity, rects: i4, scale: t3 }) });
    case dt.HIGHLIGHT:
      return ue("div", { style: { mixBlendMode: "multiply", pointerEvents: "none", position: "absolute", inset: 0 }, children: ue(As, { color: l2.defaults?.color, opacity: l2.defaults?.opacity, rects: i4, scale: t3 }) });
    case dt.STRIKEOUT:
      return ue("div", { style: { mixBlendMode: "multiply", pointerEvents: "none", position: "absolute", inset: 0 }, children: ue(Rs, { color: l2.defaults?.color, opacity: l2.defaults?.opacity, rects: i4, scale: t3 }) });
    case dt.SQUIGGLY:
      return ue("div", { style: { mixBlendMode: "multiply", pointerEvents: "none", position: "absolute", inset: 0 }, children: ue(Ns, { color: l2.defaults?.color, opacity: l2.defaults?.opacity, rects: i4, scale: t3 }) });
    default:
      return null;
  }
}
function Us({ pageIndex: e5, scale: t3, pageWidth: n3, pageHeight: o3, rotation: i4, style: r4, ...a3 }) {
  return ue("div", { style: { ...r4 }, ...a3, children: [ue(Hs, { pageIndex: e5, scale: t3, rotation: i4 }), ue(Ds, { pageIndex: e5, scale: t3 }), ue(Fs, { pageIndex: e5, scale: t3, pageWidth: n3, pageHeight: o3 })] });
}
function Xs(e5) {
  var t3 = e5.hit, n3 = e5.onClick, o3 = e5.active, i4 = t3.context, r4 = i4.before, a3 = i4.match, s3 = i4.after, l2 = i4.truncatedLeft, c2 = i4.truncatedRight, d2 = Te(null);
  return Me(function() {
    o3 && d2.current && d2.current.scrollIntoView({ behavior: "smooth", block: "nearest" });
  }, [o3]), U2("button", { ref: d2, onClick: function() {
    return n3(t3);
  }, className: "shadow-xs w-full cursor-pointer rounded border border-[#cfd4da] p-3 text-left text-xs leading-tight text-gray-600 ".concat(o3 ? "border-blue-500 bg-blue-50" : "hover:border-[#1a466b] hover:bg-gray-100") }, l2 && "\u2026 ", r4, U2("span", { className: "font-bold text-blue-500" }, a3), s3, c2 && " \u2026");
}
function yl({ pageIndex: e5, scaleFactor: t3 = 1, dpr: n3 = 1, style: o3, ...i4 }) {
  const { provides: r4 } = rn(ml.id), [a3, s3] = Ie(null), l2 = Te(null);
  return Me(() => {
    if (r4) {
      const o4 = r4.renderPage({ pageIndex: e5, scaleFactor: t3, dpr: n3 });
      return o4.wait((e6) => {
        const t4 = URL.createObjectURL(e6);
        s3(t4), l2.current = t4;
      }, _t), () => {
        l2.current ? (URL.revokeObjectURL(l2.current), l2.current = null) : o4.abort({ code: bt.Cancelled, message: "canceled render task" });
      };
    }
  }, [e5, t3, n3, r4]), ue(j2, { children: a3 && ue("img", { src: a3, onLoad: () => {
    l2.current && (URL.revokeObjectURL(l2.current), l2.current = null);
  }, ...i4, style: { width: "100%", height: "100%", ...o3 || {} } }) });
}
function Sl({ children: e5, pageSize: t3, ...n3 }) {
  const { provides: o3 } = rn(kl.id);
  return ue("div", { ...n3, style: { position: "absolute", transformOrigin: "0 0", transform: (null == o3 ? void 0 : o3.getMatrix({ w: t3.width, h: t3.height })) || "matrix(1, 0, 0, 1, 0, 0)" }, children: e5 });
}
function Al({ tileSize: e5 = 768, overlapPx: t3 = 2.5, extraRings: n3 = 0, scale: o3, rotation: i4, page: r4, metric: a3 }) {
  const s3 = r4.size.width * o3, l2 = r4.size.height * o3, c2 = e5 - t3, d2 = We(r4.size, i4, o3), u2 = { origin: { x: a3.scaled.pageX, y: a3.scaled.pageY }, size: { width: a3.scaled.visibleWidth, height: a3.scaled.visibleHeight } }, h2 = (S2 = 1, Ke(Xe(d2, u2, (4 - i4) % 4), 1 / S2)), p2 = h2.origin.x, g2 = h2.origin.y, m2 = p2 + h2.size.width, f2 = g2 + h2.size.height, v3 = Math.floor((s3 - 1) / c2), y3 = Math.floor((l2 - 1) / c2), b2 = Math.max(0, Math.floor(p2 / c2) - n3), w3 = Math.min(v3, Math.floor((m2 - 1) / c2) + n3), x3 = Math.max(0, Math.floor(g2 / c2) - n3), k3 = Math.min(y3, Math.floor((f2 - 1) / c2) + n3), C3 = [];
  var S2;
  for (let t4 = b2; t4 <= w3; t4++) {
    const n4 = t4 * c2, i5 = Math.min(e5, s3 - n4), a4 = n4 / o3, d3 = i5 / o3;
    for (let s4 = x3; s4 <= k3; s4++) {
      const u3 = s4 * c2, h3 = Math.min(e5, l2 - u3), p3 = u3 / o3, g3 = h3 / o3;
      C3.push({ id: `p${r4.index}-${o3}-x${n4}-y${u3}-w${i5}-h${h3}`, col: t4, row: s4, pageRect: { origin: { x: a4, y: p3 }, size: { width: d3, height: g3 } }, screenRect: { origin: { x: n4, y: u3 }, size: { width: i5, height: h3 } }, status: "queued", srcScale: o3, isFallback: false });
    }
  }
  return C3;
}
function Ol({ pageIndex: e5, tile: t3, dpr: n3, scale: o3 }) {
  const { provides: i4 } = Ll(), [r4, a3] = Ie(), s3 = Te(null), l2 = o3 / t3.srcScale;
  Me(() => {
    if ("ready" === t3.status && s3.current || !i4) return;
    const o4 = i4.renderTile({ pageIndex: e5, tile: t3, dpr: n3 });
    return o4.wait((e6) => {
      const t4 = URL.createObjectURL(e6);
      s3.current = t4, a3(t4);
    }, _t), () => {
      s3.current ? (URL.revokeObjectURL(s3.current), s3.current = null) : o4.abort({ code: bt.Cancelled, message: "canceled render task" });
    };
  }, [e5, t3.id]);
  return r4 ? ue("img", { src: r4, onLoad: () => {
    s3.current && (URL.revokeObjectURL(s3.current), s3.current = null);
  }, style: { position: "absolute", left: t3.screenRect.origin.x * l2, top: t3.screenRect.origin.y * l2, width: t3.screenRect.size.width * l2, height: t3.screenRect.size.height * l2, display: "block" } }) : null;
}
function Hl({ pageIndex: e5, scale: t3, style: n3, ...o3 }) {
  const { provides: i4 } = Ll(), [r4, a3] = Ie([]);
  return Me(() => {
    if (i4) return i4.onTileRendering((t4) => a3(t4[e5]));
  }, [i4]), ue("div", { style: { ...n3 }, ...o3, children: null == r4 ? void 0 : r4.map((n4) => ue(Ol, { pageIndex: e5, tile: n4, dpr: window.devicePixelRatio, scale: t3 }, n4.id)) });
}
function Dl(e5) {
  var t3 = e5.size, n3 = void 0 === t3 ? "md" : t3, o3 = e5.className, i4 = void 0 === o3 ? "" : o3, r4 = e5.text, a3 = void 0 === r4 ? "Loading..." : r4, s3 = { sm: "w-4 h-4", md: "w-8 h-8", lg: "w-12 h-12" };
  return U2("div", { className: "flex flex-col items-center justify-center gap-3 ".concat(i4) }, U2("div", { className: "relative" }, U2("div", { className: "".concat(s3[n3], " animate-spin rounded-full border-4 border-gray-200") }), U2("div", { className: "".concat(s3[n3], " absolute left-0 top-0 animate-spin rounded-full border-4 border-transparent border-r-blue-500 border-t-blue-500") })), a3 && U2("p", { className: "".concat({ sm: "text-sm", md: "text-base", lg: "text-lg" }[n3], " animate-pulse font-medium text-gray-600") }, a3));
}
function Gl({ children: e5, ...t3 }) {
  const { provides: n3 } = rn(jl.id), { plugin: o3 } = on(jl.id), i4 = Te(null);
  return Me(() => {
    if (!n3) return;
    return n3.onRequest(async (e6) => {
      if ("enter" === e6) {
        const e7 = i4.current;
        e7 && !document.fullscreenElement && await e7.requestFullscreen();
      } else document.fullscreenElement && await document.exitFullscreen();
    });
  }, [n3]), Me(() => {
    if (!o3) return;
    const e6 = () => o3.setFullscreenState(!!document.fullscreenElement);
    return document.addEventListener("fullscreenchange", e6), () => document.removeEventListener("fullscreenchange", e6);
  }, [o3]), ue("div", { ...t3, style: { position: "relative", width: "100%", height: "100%", ...t3.style }, ref: i4, children: e5 });
}
function Vl() {
  const { provides: e5 } = rn(Wl.id), t3 = Te(null);
  return Me(() => {
    if (!e5) return;
    return e5.onRequest(async (n3) => {
      if ("download" === n3) {
        const n4 = t3.current;
        if (!n4) return;
        e5.saveAsCopy().wait((e6) => {
          const t4 = URL.createObjectURL(new Blob([e6]));
          n4.href = t4, n4.download = "document.pdf", n4.click(), URL.revokeObjectURL(t4);
        }, _t);
      }
    });
  }, [e5]), ue("a", { style: { display: "none" }, ref: t3 });
}
function dc() {
  var e5 = nc().provides, t3 = v2(Ie(false), 2), n3 = t3[0], o3 = t3[1], i4 = v2(Ie(null), 2), r4 = i4[0], a3 = i4[1], s3 = v2(Ie(null), 2), l2 = s3[0], c2 = s3[1], d2 = v2(Ie(null), 2), u2 = d2[0], h2 = d2[1], p2 = Te(null), g2 = Te(null), m2 = function() {
    p2.current && (URL.revokeObjectURL(p2.current), p2.current = null), u2 && (URL.revokeObjectURL(u2), h2(null)), o3(false), a3(null), c2(null);
  };
  Me(function() {
    if (e5) return e5.onCaptureArea(function(e6) {
      var t4 = e6.pageIndex, n4 = e6.rect, i5 = e6.blob;
      a3({ pageIndex: t4, rect: n4, blob: i5 });
      var r5 = URL.createObjectURL(i5);
      p2.current = r5, c2(r5), o3(true);
    });
  }, [e5]);
  return U2(j2, null, U2(Na, { open: n3, onClose: m2, title: "Capture PDF Area" }, U2("div", { className: "space-y-6" }, U2("div", { className: "flex justify-center" }, l2 && U2("img", { src: l2, onLoad: function() {
    p2.current && (URL.revokeObjectURL(p2.current), p2.current = null);
  }, alt: "Captured PDF area", style: { maxWidth: "100%", maxHeight: "400px", border: "1px solid #e5e7eb", borderRadius: "4px", display: "block" } })), U2("div", { className: "flex justify-end space-x-3 border-t border-gray-200 pt-4" }, U2(bo, { onClick: m2, className: "rounded-md border border-gray-300 bg-white px-4 py-2 text-sm text-gray-700 hover:bg-gray-50" }, "Cancel"), U2(bo, { onClick: function() {
    if (r4 && g2.current) {
      var e6 = URL.createObjectURL(r4.blob);
      h2(e6), g2.current.href = e6, g2.current.download = "pdf-capture-page-".concat(r4.pageIndex + 1, ".png"), g2.current.click(), m2();
    }
  }, disabled: !r4, className: "rounded-md border border-transparent bg-blue-600 px-4 py-2 text-sm text-white hover:!bg-blue-700 disabled:cursor-not-allowed disabled:opacity-50" }, "Download")))), U2("a", { ref: g2, style: { display: "none" }, href: "", download: "" }));
}
function vc(e5) {
  var t3, o3 = e5.config, i4 = function(e6) {
    const { wasmUrl: t4 = an, worker: n3 = true, logger: o4 } = e6 ?? {}, [i5, r5] = Ie(null), [a4, s4] = Ie(true), [l2, c2] = Ie(null), d2 = Te(null);
    return Me(() => {
      let e7 = false;
      return (async () => {
        try {
          const { createPdfiumEngine: e8 } = n3 ? await Promise.resolve().then(() => (init_pdfium_worker_engine_26d56d7d(), pdfium_worker_engine_26d56d7d_exports)) : await Promise.resolve().then(() => (init_pdfium_direct_engine_aedff17f(), pdfium_direct_engine_aedff17f_exports)), i6 = await e8(t4, o4);
          d2.current = i6, r5(i6), s4(false);
        } catch (t5) {
          e7 || (c2(t5), s4(false));
        }
      })(), () => {
        e7 = true, d2.current?.destroy(), d2.current = null;
      };
    }, [t4, n3, o4]), { engine: i5, isLoading: a4, error: l2 };
  }(p(p({}, o3.wasmUrl && { wasmUrl: o3.wasmUrl }), {}, { worker: o3.worker, logger: o3.log ? fc : void 0 })), r4 = i4.engine, a3 = i4.isLoading, s3 = function() {
    var e6 = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
    return { viewport: p(p({}, hc.viewport), e6.viewport), scroll: p(p({}, hc.scroll), e6.scroll), zoom: p(p({}, hc.zoom), e6.zoom), spread: p(p({}, hc.spread), e6.spread), rotate: p(p({}, hc.rotate), e6.rotate), tiling: p(p({}, hc.tiling), e6.tiling), thumbnail: p(p({}, hc.thumbnail), e6.thumbnail), print: p(p({}, hc.print), e6.print) };
  }(o3.plugins);
  return U2(j2, null, U2("style", null, ce), !r4 || a3 ? U2("div", { className: "flex h-full w-full items-center justify-center" }, U2(Dl, { size: "lg", text: "Initializing PDF engine..." })) : U2(tn, { engine: r4, onInitialized: (t3 = n2(m().mark(function e6(t4) {
    var n3, o4;
    return m().wrap(function(e7) {
      for (; ; ) switch (e7.prev = e7.next) {
        case 0:
          (o4 = null === (n3 = t4.getPlugin("ui")) || void 0 === n3 ? void 0 : n3.provides()) && (o4.registerComponentRenderer("groupedItems", Zs), o4.registerComponentRenderer("iconButton", Bs), o4.registerComponentRenderer("tabButton", Gs), o4.registerComponentRenderer("header", qs), o4.registerComponentRenderer("divider", Ws), o4.registerComponentRenderer("panel", Ys), o4.registerComponentRenderer("search", Ks), o4.registerComponentRenderer("zoom", Js), o4.registerComponentRenderer("pageControlsContainer", tl), o4.registerComponentRenderer("pageControls", nl), o4.registerComponentRenderer("commandMenu", ol), o4.registerComponentRenderer("comment", il), o4.registerComponentRenderer("thumbnails", rl), o4.registerComponentRenderer("outline", al), o4.registerComponentRenderer("attachments", sl), o4.registerComponentRenderer("selectButton", ll), o4.registerComponentRenderer("textSelectionMenu", el), o4.registerComponentRenderer("annotationSelectionMenu", Qs), o4.registerComponentRenderer("leftPanelMain", Vs), o4.registerComponentRenderer("printModal", cl), o4.registerComponentRenderer("leftPanelAnnotationStyle", pl));
        case 2:
        case "end":
          return e7.stop();
      }
    }, e6);
  })), function(e6) {
    return t3.apply(this, arguments);
  }), plugins: [Gt(vo, mc), Gt(qn, { loadingOptions: { type: "url", pdfFile: { id: "pdf", url: o3.src }, options: { mode: "full-fetch" } } }), Gt(fn, s3.viewport), Gt(An, s3.scroll), Gt(pr, s3.zoom), Gt(Un, s3.spread), Gt(vl, {}), Gt(Cl, s3.rotate), Gt(Vr, {}), Gt(Pa, {}), Gt(Nl, s3.tiling), Gt(ea, s3.thumbnail), Gt(Ps, {}), Gt(Wa, s3.print), Gt(Bl, {}), Gt(es, {}), Gt(ql, {}), Gt(Cr, {}), Gt(Xl, {}), Gt(tc, { scale: 2, imageType: "image/png" }), Gt(cc, {})] }, function(e6) {
    var t4 = e6.pluginsReady;
    return U2(ir, null, function(e7) {
      var n3 = e7.headers, o4 = e7.panels, i5 = e7.floating, r5 = e7.commandMenu;
      return U2(Gl, null, U2(Ya, null, U2("div", { className: "@container relative flex h-full w-full select-none flex-col" }, n3.top.length > 0 && U2("div", null, n3.top), U2("div", { className: "flex flex-1 flex-row overflow-hidden" }, U2("div", { className: "flex flex-col" }, n3.left), U2("div", { className: "flex flex-1 flex-col overflow-hidden md:flex-row" }, o4.left.length > 0 && U2(j2, null, o4.left), U2("div", { className: "relative flex w-full flex-1 overflow-hidden" }, U2(Mr, null, U2(Kl, null), U2(bn, { style: { width: "100%", height: "100%", flexGrow: 1, backgroundColor: "#f1f3f5", overflow: "auto" } }, !t4 && U2("div", { className: "flex h-full w-full items-center justify-center" }, U2(Dl, { size: "lg", text: "Loading PDF document..." })), t4 && U2(Ar, null, U2(Rn, { renderPage: function(e8) {
        var t5 = e8.pageIndex, n4 = e8.scale, o5 = e8.rotation, i6 = e8.width, r6 = e8.height, a4 = e8.rotatedHeight, s4 = e8.rotatedWidth, l2 = e8.document;
        return U2(Sl, { key: null == l2 ? void 0 : l2.id, pageSize: { width: i6, height: r6 } }, U2(Pr, { rotation: o5, scale: n4, pageWidth: s4, pageHeight: a4, pageIndex: t5, style: { width: i6, height: r6 } }, U2(yl, { pageIndex: t5, className: "pointer-events-none" }), U2(Hl, { pageIndex: t5, scale: n4, className: "pointer-events-none" }), U2(Xr, { pageIndex: t5, scale: n4, className: "pointer-events-none" }), U2(uc, null), U2(Us, { pageIndex: t5, scale: n4, pageWidth: i6, pageHeight: r6, rotation: o5 }), U2(zr, { pageIndex: t5, scale: n4, pageWidth: i6, pageHeight: r6 }), U2(oc, { pageIndex: t5, scale: n4, pageWidth: i6, pageHeight: r6 }), U2(Ea, { pageIndex: t5, scale: n4 })));
      }, overlayElements: i5.insideScroller })), i5.outsideScroller))), o4.right.length > 0 && U2(j2, null, o4.right)), U2("div", { className: "flex flex-col" }, n3.right)), n3.bottom.length > 0 && U2("div", null, n3.bottom), r5), U2(Vn, null), U2(Vl, null), U2(dc, null), U2(Aa, null)));
    });
  }));
}
var k2, C2, S, _, I2, M, P, T2, E, A, z2, R2, N2, L2, O2, H, ce, de, he, pe, ge, me, fe, ve, ye, be, we, xe, ke, Ce, Se, Ne, Ue, et, tt, nt, ot, it, rt, at, lt, ct, dt, ut, ht, pt, gt, mt, ft, yt, bt, wt, It, Mt, Pt, Tt, Et, At, zt, Rt, Nt, Lt, Ot, Ht, Dt, Ft, Ut, $t, jt, Bt, Wt, Zt, Yt, Xt, en, an, sn, ln, cn, dn, un, hn, pn, gn, mn, fn, vn, wn, xn, kn, Cn, Sn, _n, Mn, Pn, Tn, En, An, zn, Nn, Ln, Hn, Dn, Fn, Un, $n, jn, Bn, Gn, Wn, Zn, qn, Yn, Xn, Kn, Jn, Qn, eo, to, no, oo, so, lo, co, uo, fo, vo, yo, wo, xo, ko, Co, So, _o, Io, di, xi, Si, _i, Ii, Mi, Pi, Ti, Ri, Ni, Li, $i, ji, Bi, Gi, Wi, Zi, qi, Vi, Ji, Qi, er, tr, nr, ar, sr, lr, cr, dr, ur, hr, pr, mr, fr, vr, yr, br, wr, xr, kr, Cr, Sr, Mr, Pr, Tr, zr, Rr, Lr, Or, Hr, Dr, Fr, Ur, $r, Wr, Zr, qr, Vr, Yr, Kr, Jr, Qr, ea, ta, ra, aa, sa, la, ca, da, ua, ha, pa, ga, ma, _a, Ia, Ma, Pa, Ta, La, Oa, Ha, Da, Fa, Ua, $a, ja, Ba, Ga, Wa, Za, qa, Va, Xa, Ka, Ja, Qa, es, ts, ns, os, is, rs, as, ss, ls, cs, ds, us, hs, ps, gs, ms, fs, vs, ys, bs, ws, xs, ks, Cs, Ss, _s, Is, Ms, Ps, Ts, Fs, $s, js, Bs, Gs, Ws, Zs, qs, Vs, Ys, Ks, Js, Qs, el, tl, nl, ol, il, rl, al, sl, ll, cl, dl, ul, hl, pl, gl, ml, fl, vl, bl, wl, xl, kl, Cl, _l, Il, Ml, Pl, Tl, El, zl, Rl, Nl, Ll, Fl, Ul, $l, jl, Bl, Wl, Zl, ql, Yl, Xl, Kl, Jl, Ql, ec, tc, nc, oc, ic, rc, ac, sc, lc, cc, uc, hc, pc, gc, mc, fc, yc, bc, wc;
var init_embedpdf_2704eb24 = __esm({
  "src/vendor/embedpdf/embedpdf-2704eb24.js"() {
    N2 = {};
    L2 = [];
    O2 = /acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i;
    H = Array.isArray;
    k2 = L2.slice, C2 = { __e: function(e5, t3, n3, o3) {
      for (var i4, r4, a3; t3 = t3.__; ) if ((i4 = t3.__c) && !i4.__) try {
        if ((r4 = i4.constructor) && null != r4.getDerivedStateFromError && (i4.setState(r4.getDerivedStateFromError(e5)), a3 = i4.__d), null != i4.componentDidCatch && (i4.componentDidCatch(e5, o3 || {}), a3 = i4.__d), a3) return i4.__E = i4;
      } catch (t4) {
        e5 = t4;
      }
      throw e5;
    } }, S = 0, B2.prototype.setState = function(e5, t3) {
      var n3;
      n3 = null != this.__s && this.__s !== this.state ? this.__s : this.__s = D({}, this.state), "function" == typeof e5 && (e5 = e5(D({}, n3), this.props)), e5 && D(n3, e5), null != e5 && this.__v && (t3 && this._sb.push(t3), Z(this));
    }, B2.prototype.forceUpdate = function(e5) {
      this.__v && (this.__e = true, e5 && this.__h.push(e5), Z(this));
    }, B2.prototype.render = j2, _ = [], M = "function" == typeof Promise ? Promise.prototype.then.bind(Promise.resolve()) : setTimeout, P = function(e5, t3) {
      return e5.__v.__b - t3.__v.__b;
    }, q.__r = 0, T2 = /(PointerCapture)$|Capture$/i, E = 0, A = ee(false), z2 = ee(true), R2 = 0;
    ce = `/*! tailwindcss v4.0.6 | MIT License | https://tailwindcss.com */
@layer theme, base, components, utilities;
@layer theme {
  :root, :host {
    --font-sans: ui-sans-serif, system-ui, sans-serif, "Apple Color Emoji",
      "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji";
    --font-serif: ui-serif, Georgia, Cambria, "Times New Roman", Times, serif;
    --font-mono: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono",
      "Courier New", monospace;
    --color-red-50: oklch(97.1% 0.013 17.38);
    --color-red-100: oklch(93.6% 0.032 17.717);
    --color-red-200: oklch(88.5% 0.062 18.334);
    --color-red-300: oklch(80.8% 0.114 19.571);
    --color-red-400: oklch(70.4% 0.191 22.216);
    --color-red-500: oklch(63.7% 0.237 25.331);
    --color-red-600: oklch(57.7% 0.245 27.325);
    --color-red-700: oklch(50.5% 0.213 27.518);
    --color-red-800: oklch(44.4% 0.177 26.899);
    --color-red-900: oklch(39.6% 0.141 25.723);
    --color-red-950: oklch(25.8% 0.092 26.042);
    --color-orange-50: oklch(98% 0.016 73.684);
    --color-orange-100: oklch(95.4% 0.038 75.164);
    --color-orange-200: oklch(90.1% 0.076 70.697);
    --color-orange-300: oklch(83.7% 0.128 66.29);
    --color-orange-400: oklch(75% 0.183 55.934);
    --color-orange-500: oklch(70.5% 0.213 47.604);
    --color-orange-600: oklch(64.6% 0.222 41.116);
    --color-orange-700: oklch(55.3% 0.195 38.402);
    --color-orange-800: oklch(47% 0.157 37.304);
    --color-orange-900: oklch(40.8% 0.123 38.172);
    --color-orange-950: oklch(26.6% 0.079 36.259);
    --color-amber-50: oklch(98.7% 0.022 95.277);
    --color-amber-100: oklch(96.2% 0.059 95.617);
    --color-amber-200: oklch(92.4% 0.12 95.746);
    --color-amber-300: oklch(87.9% 0.169 91.605);
    --color-amber-400: oklch(82.8% 0.189 84.429);
    --color-amber-500: oklch(76.9% 0.188 70.08);
    --color-amber-600: oklch(66.6% 0.179 58.318);
    --color-amber-700: oklch(55.5% 0.163 48.998);
    --color-amber-800: oklch(47.3% 0.137 46.201);
    --color-amber-900: oklch(41.4% 0.112 45.904);
    --color-amber-950: oklch(27.9% 0.077 45.635);
    --color-yellow-50: oklch(98.7% 0.026 102.212);
    --color-yellow-100: oklch(97.3% 0.071 103.193);
    --color-yellow-200: oklch(94.5% 0.129 101.54);
    --color-yellow-300: oklch(90.5% 0.182 98.111);
    --color-yellow-400: oklch(85.2% 0.199 91.936);
    --color-yellow-500: oklch(79.5% 0.184 86.047);
    --color-yellow-600: oklch(68.1% 0.162 75.834);
    --color-yellow-700: oklch(55.4% 0.135 66.442);
    --color-yellow-800: oklch(47.6% 0.114 61.907);
    --color-yellow-900: oklch(42.1% 0.095 57.708);
    --color-yellow-950: oklch(28.6% 0.066 53.813);
    --color-lime-50: oklch(98.6% 0.031 120.757);
    --color-lime-100: oklch(96.7% 0.067 122.328);
    --color-lime-200: oklch(93.8% 0.127 124.321);
    --color-lime-300: oklch(89.7% 0.196 126.665);
    --color-lime-400: oklch(84.1% 0.238 128.85);
    --color-lime-500: oklch(76.8% 0.233 130.85);
    --color-lime-600: oklch(64.8% 0.2 131.684);
    --color-lime-700: oklch(53.2% 0.157 131.589);
    --color-lime-800: oklch(45.3% 0.124 130.933);
    --color-lime-900: oklch(40.5% 0.101 131.063);
    --color-lime-950: oklch(27.4% 0.072 132.109);
    --color-green-50: oklch(98.2% 0.018 155.826);
    --color-green-100: oklch(96.2% 0.044 156.743);
    --color-green-200: oklch(92.5% 0.084 155.995);
    --color-green-300: oklch(87.1% 0.15 154.449);
    --color-green-400: oklch(79.2% 0.209 151.711);
    --color-green-500: oklch(72.3% 0.219 149.579);
    --color-green-600: oklch(62.7% 0.194 149.214);
    --color-green-700: oklch(52.7% 0.154 150.069);
    --color-green-800: oklch(44.8% 0.119 151.328);
    --color-green-900: oklch(39.3% 0.095 152.535);
    --color-green-950: oklch(26.6% 0.065 152.934);
    --color-emerald-50: oklch(97.9% 0.021 166.113);
    --color-emerald-100: oklch(95% 0.052 163.051);
    --color-emerald-200: oklch(90.5% 0.093 164.15);
    --color-emerald-300: oklch(84.5% 0.143 164.978);
    --color-emerald-400: oklch(76.5% 0.177 163.223);
    --color-emerald-500: oklch(69.6% 0.17 162.48);
    --color-emerald-600: oklch(59.6% 0.145 163.225);
    --color-emerald-700: oklch(50.8% 0.118 165.612);
    --color-emerald-800: oklch(43.2% 0.095 166.913);
    --color-emerald-900: oklch(37.8% 0.077 168.94);
    --color-emerald-950: oklch(26.2% 0.051 172.552);
    --color-teal-50: oklch(98.4% 0.014 180.72);
    --color-teal-100: oklch(95.3% 0.051 180.801);
    --color-teal-200: oklch(91% 0.096 180.426);
    --color-teal-300: oklch(85.5% 0.138 181.071);
    --color-teal-400: oklch(77.7% 0.152 181.912);
    --color-teal-500: oklch(70.4% 0.14 182.503);
    --color-teal-600: oklch(60% 0.118 184.704);
    --color-teal-700: oklch(51.1% 0.096 186.391);
    --color-teal-800: oklch(43.7% 0.078 188.216);
    --color-teal-900: oklch(38.6% 0.063 188.416);
    --color-teal-950: oklch(27.7% 0.046 192.524);
    --color-cyan-50: oklch(98.4% 0.019 200.873);
    --color-cyan-100: oklch(95.6% 0.045 203.388);
    --color-cyan-200: oklch(91.7% 0.08 205.041);
    --color-cyan-300: oklch(86.5% 0.127 207.078);
    --color-cyan-400: oklch(78.9% 0.154 211.53);
    --color-cyan-500: oklch(71.5% 0.143 215.221);
    --color-cyan-600: oklch(60.9% 0.126 221.723);
    --color-cyan-700: oklch(52% 0.105 223.128);
    --color-cyan-800: oklch(45% 0.085 224.283);
    --color-cyan-900: oklch(39.8% 0.07 227.392);
    --color-cyan-950: oklch(30.2% 0.056 229.695);
    --color-sky-50: oklch(97.7% 0.013 236.62);
    --color-sky-100: oklch(95.1% 0.026 236.824);
    --color-sky-200: oklch(90.1% 0.058 230.902);
    --color-sky-300: oklch(82.8% 0.111 230.318);
    --color-sky-400: oklch(74.6% 0.16 232.661);
    --color-sky-500: oklch(68.5% 0.169 237.323);
    --color-sky-600: oklch(58.8% 0.158 241.966);
    --color-sky-700: oklch(50% 0.134 242.749);
    --color-sky-800: oklch(44.3% 0.11 240.79);
    --color-sky-900: oklch(39.1% 0.09 240.876);
    --color-sky-950: oklch(29.3% 0.066 243.157);
    --color-blue-50: oklch(97% 0.014 254.604);
    --color-blue-100: oklch(93.2% 0.032 255.585);
    --color-blue-200: oklch(88.2% 0.059 254.128);
    --color-blue-300: oklch(80.9% 0.105 251.813);
    --color-blue-400: oklch(70.7% 0.165 254.624);
    --color-blue-500: oklch(62.3% 0.214 259.815);
    --color-blue-600: oklch(54.6% 0.245 262.881);
    --color-blue-700: oklch(48.8% 0.243 264.376);
    --color-blue-800: oklch(42.4% 0.199 265.638);
    --color-blue-900: oklch(37.9% 0.146 265.522);
    --color-blue-950: oklch(28.2% 0.091 267.935);
    --color-indigo-50: oklch(96.2% 0.018 272.314);
    --color-indigo-100: oklch(93% 0.034 272.788);
    --color-indigo-200: oklch(87% 0.065 274.039);
    --color-indigo-300: oklch(78.5% 0.115 274.713);
    --color-indigo-400: oklch(67.3% 0.182 276.935);
    --color-indigo-500: oklch(58.5% 0.233 277.117);
    --color-indigo-600: oklch(51.1% 0.262 276.966);
    --color-indigo-700: oklch(45.7% 0.24 277.023);
    --color-indigo-800: oklch(39.8% 0.195 277.366);
    --color-indigo-900: oklch(35.9% 0.144 278.697);
    --color-indigo-950: oklch(25.7% 0.09 281.288);
    --color-violet-50: oklch(96.9% 0.016 293.756);
    --color-violet-100: oklch(94.3% 0.029 294.588);
    --color-violet-200: oklch(89.4% 0.057 293.283);
    --color-violet-300: oklch(81.1% 0.111 293.571);
    --color-violet-400: oklch(70.2% 0.183 293.541);
    --color-violet-500: oklch(60.6% 0.25 292.717);
    --color-violet-600: oklch(54.1% 0.281 293.009);
    --color-violet-700: oklch(49.1% 0.27 292.581);
    --color-violet-800: oklch(43.2% 0.232 292.759);
    --color-violet-900: oklch(38% 0.189 293.745);
    --color-violet-950: oklch(28.3% 0.141 291.089);
    --color-purple-50: oklch(97.7% 0.014 308.299);
    --color-purple-100: oklch(94.6% 0.033 307.174);
    --color-purple-200: oklch(90.2% 0.063 306.703);
    --color-purple-300: oklch(82.7% 0.119 306.383);
    --color-purple-400: oklch(71.4% 0.203 305.504);
    --color-purple-500: oklch(62.7% 0.265 303.9);
    --color-purple-600: oklch(55.8% 0.288 302.321);
    --color-purple-700: oklch(49.6% 0.265 301.924);
    --color-purple-800: oklch(43.8% 0.218 303.724);
    --color-purple-900: oklch(38.1% 0.176 304.987);
    --color-purple-950: oklch(29.1% 0.149 302.717);
    --color-fuchsia-50: oklch(97.7% 0.017 320.058);
    --color-fuchsia-100: oklch(95.2% 0.037 318.852);
    --color-fuchsia-200: oklch(90.3% 0.076 319.62);
    --color-fuchsia-300: oklch(83.3% 0.145 321.434);
    --color-fuchsia-400: oklch(74% 0.238 322.16);
    --color-fuchsia-500: oklch(66.7% 0.295 322.15);
    --color-fuchsia-600: oklch(59.1% 0.293 322.896);
    --color-fuchsia-700: oklch(51.8% 0.253 323.949);
    --color-fuchsia-800: oklch(45.2% 0.211 324.591);
    --color-fuchsia-900: oklch(40.1% 0.17 325.612);
    --color-fuchsia-950: oklch(29.3% 0.136 325.661);
    --color-pink-50: oklch(97.1% 0.014 343.198);
    --color-pink-100: oklch(94.8% 0.028 342.258);
    --color-pink-200: oklch(89.9% 0.061 343.231);
    --color-pink-300: oklch(82.3% 0.12 346.018);
    --color-pink-400: oklch(71.8% 0.202 349.761);
    --color-pink-500: oklch(65.6% 0.241 354.308);
    --color-pink-600: oklch(59.2% 0.249 0.584);
    --color-pink-700: oklch(52.5% 0.223 3.958);
    --color-pink-800: oklch(45.9% 0.187 3.815);
    --color-pink-900: oklch(40.8% 0.153 2.432);
    --color-pink-950: oklch(28.4% 0.109 3.907);
    --color-rose-50: oklch(96.9% 0.015 12.422);
    --color-rose-100: oklch(94.1% 0.03 12.58);
    --color-rose-200: oklch(89.2% 0.058 10.001);
    --color-rose-300: oklch(81% 0.117 11.638);
    --color-rose-400: oklch(71.2% 0.194 13.428);
    --color-rose-500: oklch(64.5% 0.246 16.439);
    --color-rose-600: oklch(58.6% 0.253 17.585);
    --color-rose-700: oklch(51.4% 0.222 16.935);
    --color-rose-800: oklch(45.5% 0.188 13.697);
    --color-rose-900: oklch(41% 0.159 10.272);
    --color-rose-950: oklch(27.1% 0.105 12.094);
    --color-slate-50: oklch(98.4% 0.003 247.858);
    --color-slate-100: oklch(96.8% 0.007 247.896);
    --color-slate-200: oklch(92.9% 0.013 255.508);
    --color-slate-300: oklch(86.9% 0.022 252.894);
    --color-slate-400: oklch(70.4% 0.04 256.788);
    --color-slate-500: oklch(55.4% 0.046 257.417);
    --color-slate-600: oklch(44.6% 0.043 257.281);
    --color-slate-700: oklch(37.2% 0.044 257.287);
    --color-slate-800: oklch(27.9% 0.041 260.031);
    --color-slate-900: oklch(20.8% 0.042 265.755);
    --color-slate-950: oklch(12.9% 0.042 264.695);
    --color-gray-50: oklch(98.5% 0.002 247.839);
    --color-gray-100: oklch(96.7% 0.003 264.542);
    --color-gray-200: oklch(92.8% 0.006 264.531);
    --color-gray-300: oklch(87.2% 0.01 258.338);
    --color-gray-400: oklch(70.7% 0.022 261.325);
    --color-gray-500: oklch(55.1% 0.027 264.364);
    --color-gray-600: oklch(44.6% 0.03 256.802);
    --color-gray-700: oklch(37.3% 0.034 259.733);
    --color-gray-800: oklch(27.8% 0.033 256.848);
    --color-gray-900: oklch(21% 0.034 264.665);
    --color-gray-950: oklch(13% 0.028 261.692);
    --color-zinc-50: oklch(98.5% 0 0);
    --color-zinc-100: oklch(96.7% 0.001 286.375);
    --color-zinc-200: oklch(92% 0.004 286.32);
    --color-zinc-300: oklch(87.1% 0.006 286.286);
    --color-zinc-400: oklch(70.5% 0.015 286.067);
    --color-zinc-500: oklch(55.2% 0.016 285.938);
    --color-zinc-600: oklch(44.2% 0.017 285.786);
    --color-zinc-700: oklch(37% 0.013 285.805);
    --color-zinc-800: oklch(27.4% 0.006 286.033);
    --color-zinc-900: oklch(21% 0.006 285.885);
    --color-zinc-950: oklch(14.1% 0.005 285.823);
    --color-neutral-50: oklch(98.5% 0 0);
    --color-neutral-100: oklch(97% 0 0);
    --color-neutral-200: oklch(92.2% 0 0);
    --color-neutral-300: oklch(87% 0 0);
    --color-neutral-400: oklch(70.8% 0 0);
    --color-neutral-500: oklch(55.6% 0 0);
    --color-neutral-600: oklch(43.9% 0 0);
    --color-neutral-700: oklch(37.1% 0 0);
    --color-neutral-800: oklch(26.9% 0 0);
    --color-neutral-900: oklch(20.5% 0 0);
    --color-neutral-950: oklch(14.5% 0 0);
    --color-stone-50: oklch(98.5% 0.001 106.423);
    --color-stone-100: oklch(97% 0.001 106.424);
    --color-stone-200: oklch(92.3% 0.003 48.717);
    --color-stone-300: oklch(86.9% 0.005 56.366);
    --color-stone-400: oklch(70.9% 0.01 56.259);
    --color-stone-500: oklch(55.3% 0.013 58.071);
    --color-stone-600: oklch(44.4% 0.011 73.639);
    --color-stone-700: oklch(37.4% 0.01 67.558);
    --color-stone-800: oklch(26.8% 0.007 34.298);
    --color-stone-900: oklch(21.6% 0.006 56.043);
    --color-stone-950: oklch(14.7% 0.004 49.25);
    --color-black: #000;
    --color-white: #fff;
    --spacing: 0.25rem;
    --breakpoint-sm: 40rem;
    --breakpoint-md: 48rem;
    --breakpoint-lg: 64rem;
    --breakpoint-xl: 80rem;
    --breakpoint-2xl: 96rem;
    --container-3xs: 16rem;
    --container-2xs: 18rem;
    --container-xs: 20rem;
    --container-sm: 24rem;
    --container-md: 28rem;
    --container-lg: 32rem;
    --container-xl: 36rem;
    --container-2xl: 42rem;
    --container-3xl: 48rem;
    --container-4xl: 56rem;
    --container-5xl: 64rem;
    --container-6xl: 72rem;
    --container-7xl: 80rem;
    --text-xs: 0.75rem;
    --text-xs--line-height: calc(1 / 0.75);
    --text-sm: 0.875rem;
    --text-sm--line-height: calc(1.25 / 0.875);
    --text-base: 1rem;
    --text-base--line-height: calc(1.5 / 1);
    --text-lg: 1.125rem;
    --text-lg--line-height: calc(1.75 / 1.125);
    --text-xl: 1.25rem;
    --text-xl--line-height: calc(1.75 / 1.25);
    --text-2xl: 1.5rem;
    --text-2xl--line-height: calc(2 / 1.5);
    --text-3xl: 1.875rem;
    --text-3xl--line-height: calc(2.25 / 1.875);
    --text-4xl: 2.25rem;
    --text-4xl--line-height: calc(2.5 / 2.25);
    --text-5xl: 3rem;
    --text-5xl--line-height: 1;
    --text-6xl: 3.75rem;
    --text-6xl--line-height: 1;
    --text-7xl: 4.5rem;
    --text-7xl--line-height: 1;
    --text-8xl: 6rem;
    --text-8xl--line-height: 1;
    --text-9xl: 8rem;
    --text-9xl--line-height: 1;
    --font-weight-thin: 100;
    --font-weight-extralight: 200;
    --font-weight-light: 300;
    --font-weight-normal: 400;
    --font-weight-medium: 500;
    --font-weight-semibold: 600;
    --font-weight-bold: 700;
    --font-weight-extrabold: 800;
    --font-weight-black: 900;
    --tracking-tighter: -0.05em;
    --tracking-tight: -0.025em;
    --tracking-normal: 0em;
    --tracking-wide: 0.025em;
    --tracking-wider: 0.05em;
    --tracking-widest: 0.1em;
    --leading-tight: 1.25;
    --leading-snug: 1.375;
    --leading-normal: 1.5;
    --leading-relaxed: 1.625;
    --leading-loose: 2;
    --radius-xs: 0.125rem;
    --radius-sm: 0.25rem;
    --radius-md: 0.375rem;
    --radius-lg: 0.5rem;
    --radius-xl: 0.75rem;
    --radius-2xl: 1rem;
    --radius-3xl: 1.5rem;
    --radius-4xl: 2rem;
    --shadow-2xs: 0 1px rgb(0 0 0 / 0.05);
    --shadow-xs: 0 1px 2px 0 rgb(0 0 0 / 0.05);
    --shadow-sm: 0 1px 3px 0 rgb(0 0 0 / 0.1), 0 1px 2px -1px rgb(0 0 0 / 0.1);
    --shadow-md: 0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1);
    --shadow-lg: 0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1);
    --shadow-xl: 0 20px 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.1);
    --shadow-2xl: 0 25px 50px -12px rgb(0 0 0 / 0.25);
    --inset-shadow-2xs: inset 0 1px rgb(0 0 0 / 0.05);
    --inset-shadow-xs: inset 0 1px 1px rgb(0 0 0 / 0.05);
    --inset-shadow-sm: inset 0 2px 4px rgb(0 0 0 / 0.05);
    --drop-shadow-xs: 0 1px 1px rgb(0 0 0 / 0.05);
    --drop-shadow-sm: 0 1px 2px rgb(0 0 0 / 0.15);
    --drop-shadow-md: 0 3px 3px rgb(0 0 0 / 0.12);
    --drop-shadow-lg: 0 4px 4px rgb(0 0 0 / 0.15);
    --drop-shadow-xl: 0 9px 7px rgb(0 0 0 / 0.1);
    --drop-shadow-2xl: 0 25px 25px rgb(0 0 0 / 0.15);
    --text-shadow-2xs: 0px 1px 0px rgb(0 0 0 / 0.15);
    --text-shadow-xs: 0px 1px 1px rgb(0 0 0 / 0.2);
    --text-shadow-sm: 0px 1px 0px rgb(0 0 0 / 0.075), 0px 1px 1px rgb(0 0 0 / 0.075),
      0px 2px 2px rgb(0 0 0 / 0.075);
    --text-shadow-md: 0px 1px 1px rgb(0 0 0 / 0.1), 0px 1px 2px rgb(0 0 0 / 0.1),
      0px 2px 4px rgb(0 0 0 / 0.1);
    --text-shadow-lg: 0px 1px 2px rgb(0 0 0 / 0.1), 0px 3px 2px rgb(0 0 0 / 0.1),
      0px 4px 8px rgb(0 0 0 / 0.1);
    --ease-in: cubic-bezier(0.4, 0, 1, 1);
    --ease-out: cubic-bezier(0, 0, 0.2, 1);
    --ease-in-out: cubic-bezier(0.4, 0, 0.2, 1);
    --animate-spin: spin 1s linear infinite;
    --animate-ping: ping 1s cubic-bezier(0, 0, 0.2, 1) infinite;
    --animate-pulse: pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite;
    --animate-bounce: bounce 1s infinite;
    --blur-xs: 4px;
    --blur-sm: 8px;
    --blur-md: 12px;
    --blur-lg: 16px;
    --blur-xl: 24px;
    --blur-2xl: 40px;
    --blur-3xl: 64px;
    --perspective-dramatic: 100px;
    --perspective-near: 300px;
    --perspective-normal: 500px;
    --perspective-midrange: 800px;
    --perspective-distant: 1200px;
    --aspect-video: 16 / 9;
    --default-transition-duration: 150ms;
    --default-transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
    --default-font-family: ui-sans-serif, system-ui, sans-serif, "Apple Color Emoji",
      "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji";
    --default-font-feature-settings: initial;
    --default-font-variation-settings: initial;
    --default-mono-font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono",
      "Courier New", monospace;
    --default-mono-font-feature-settings: initial;
    --default-mono-font-variation-settings: initial;
  }
}
@layer base {
  *, ::after, ::before, ::backdrop, ::file-selector-button {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    border: 0 solid;
  }
  html, :host {
    line-height: 1.5;
    -webkit-text-size-adjust: 100%;
    -moz-tab-size: 4;
      -o-tab-size: 4;
         tab-size: 4;
    font-family: ui-sans-serif, system-ui, sans-serif, "Apple Color Emoji",
      "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji";
    font-feature-settings: initial;
    font-variation-settings: initial;
    -webkit-tap-highlight-color: transparent;
  }
  hr {
    height: 0;
    color: inherit;
    border-top-width: 1px;
  }
  abbr:where([title]) {
    -webkit-text-decoration: underline dotted;
    text-decoration: underline dotted;
  }
  h1, h2, h3, h4, h5, h6 {
    font-size: inherit;
    font-weight: inherit;
  }
  a {
    color: inherit;
    -webkit-text-decoration: inherit;
    text-decoration: inherit;
  }
  b, strong {
    font-weight: bolder;
  }
  code, kbd, samp, pre {
    font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono",
      "Courier New", monospace;
    font-feature-settings: initial;
    font-variation-settings: initial;
    font-size: 1em;
  }
  small {
    font-size: 80%;
  }
  sub, sup {
    font-size: 75%;
    line-height: 0;
    position: relative;
    vertical-align: baseline;
  }
  sub {
    bottom: -0.25em;
  }
  sup {
    top: -0.5em;
  }
  table {
    text-indent: 0;
    border-color: inherit;
    border-collapse: collapse;
  }
  :-moz-focusring {
    outline: auto;
  }
  progress {
    vertical-align: baseline;
  }
  summary {
    display: list-item;
  }
  ol, ul, menu {
    list-style: none;
  }
  img, svg, video, canvas, audio, iframe, embed, object {
    display: block;
    vertical-align: middle;
  }
  img, video {
    max-width: 100%;
    height: auto;
  }
  button, input, select, optgroup, textarea, ::file-selector-button {
    font: inherit;
    font-feature-settings: inherit;
    font-variation-settings: inherit;
    letter-spacing: inherit;
    color: inherit;
    border-radius: 0;
    background-color: transparent;
    opacity: 1;
  }
  :where(select:is([multiple], [size])) optgroup {
    font-weight: bolder;
  }
  :where(select:is([multiple], [size])) optgroup option {
    padding-inline-start: 20px;
  }
  ::file-selector-button {
    margin-inline-end: 4px;
  }
  ::-moz-placeholder {
    opacity: 1;
  }
  ::placeholder {
    opacity: 1;
  }
  @supports (not (-webkit-appearance: -apple-pay-button))  or (contain-intrinsic-size: 1px) {
    ::-moz-placeholder {
      color: color-mix(in oklab, currentcolor 50%, transparent);
    }
    ::placeholder {
      color: color-mix(in oklab, currentcolor 50%, transparent);
    }
  }
  textarea {
    resize: vertical;
  }
  ::-webkit-search-decoration {
    -webkit-appearance: none;
  }
  ::-webkit-date-and-time-value {
    min-height: 1lh;
    text-align: inherit;
  }
  ::-webkit-datetime-edit {
    display: inline-flex;
  }
  ::-webkit-datetime-edit-fields-wrapper {
    padding: 0;
  }
  ::-webkit-datetime-edit, ::-webkit-datetime-edit-year-field, ::-webkit-datetime-edit-month-field, ::-webkit-datetime-edit-day-field, ::-webkit-datetime-edit-hour-field, ::-webkit-datetime-edit-minute-field, ::-webkit-datetime-edit-second-field, ::-webkit-datetime-edit-millisecond-field, ::-webkit-datetime-edit-meridiem-field {
    padding-block: 0;
  }
  :-moz-ui-invalid {
    box-shadow: none;
  }
  button, input:where([type="button"], [type="reset"], [type="submit"]), ::file-selector-button {
    -webkit-appearance: button;
       -moz-appearance: button;
            appearance: button;
  }
  ::-webkit-inner-spin-button, ::-webkit-outer-spin-button {
    height: auto;
  }
  [hidden]:where(:not([hidden="until-found"])) {
    display: none !important;
  }
}
@layer utilities {
  .\\@container {
    container-type: inline-size;
  }
  .pointer-events-none {
    pointer-events: none;
  }
  .visible {
    visibility: visible;
  }
  .absolute {
    position: absolute;
  }
  .fixed {
    position: fixed;
  }
  .relative {
    position: relative;
  }
  .static {
    position: static;
  }
  .inset-0 {
    inset: calc(var(--spacing) * 0);
  }
  .inset-y-0 {
    inset-block: calc(var(--spacing) * 0);
  }
  .top-0 {
    top: calc(var(--spacing) * 0);
  }
  .right-0 {
    right: calc(var(--spacing) * 0);
  }
  .right-3 {
    right: calc(var(--spacing) * 3);
  }
  .bottom-0 {
    bottom: calc(var(--spacing) * 0);
  }
  .bottom-4 {
    bottom: calc(var(--spacing) * 4);
  }
  .left-0 {
    left: calc(var(--spacing) * 0);
  }
  .left-1\\/2 {
    left: calc(1/2 * 100%);
  }
  .z-10 {
    z-index: 10;
  }
  .z-50 {
    z-index: 50;
  }
  .z-100 {
    z-index: 100;
  }
  .col-start-1 {
    grid-column-start: 1;
  }
  .row-start-1 {
    grid-row-start: 1;
  }
  .container {
    width: 100%;
    @media (width >= 40rem) {
      max-width: 40rem;
    }
    @media (width >= 48rem) {
      max-width: 48rem;
    }
    @media (width >= 64rem) {
      max-width: 64rem;
    }
    @media (width >= 80rem) {
      max-width: 80rem;
    }
    @media (width >= 96rem) {
      max-width: 96rem;
    }
  }
  .mx-4 {
    margin-inline: calc(var(--spacing) * 4);
  }
  .my-2 {
    margin-block: calc(var(--spacing) * 2);
  }
  .my-4 {
    margin-block: calc(var(--spacing) * 4);
  }
  .mt-0\\.5 {
    margin-top: calc(var(--spacing) * 0.5);
  }
  .mt-1 {
    margin-top: calc(var(--spacing) * 1);
  }
  .mt-2 {
    margin-top: calc(var(--spacing) * 2);
  }
  .mt-3 {
    margin-top: calc(var(--spacing) * 3);
  }
  .mt-5 {
    margin-top: calc(var(--spacing) * 5);
  }
  .mr-1 {
    margin-right: calc(var(--spacing) * 1);
  }
  .mr-2 {
    margin-right: calc(var(--spacing) * 2);
  }
  .mr-5 {
    margin-right: calc(var(--spacing) * 5);
  }
  .mb-1 {
    margin-bottom: calc(var(--spacing) * 1);
  }
  .mb-2 {
    margin-bottom: calc(var(--spacing) * 2);
  }
  .mb-3 {
    margin-bottom: calc(var(--spacing) * 3);
  }
  .mb-4 {
    margin-bottom: calc(var(--spacing) * 4);
  }
  .mb-6 {
    margin-bottom: calc(var(--spacing) * 6);
  }
  .block {
    display: block;
  }
  .flex {
    display: flex;
  }
  .hidden {
    display: none;
  }
  .inline-flex {
    display: inline-flex;
  }
  .h-1 {
    height: calc(var(--spacing) * 1);
  }
  .h-1\\/2 {
    height: calc(1/2 * 100%);
  }
  .h-2 {
    height: calc(var(--spacing) * 2);
  }
  .h-3 {
    height: calc(var(--spacing) * 3);
  }
  .h-3\\.5 {
    height: calc(var(--spacing) * 3.5);
  }
  .h-4 {
    height: calc(var(--spacing) * 4);
  }
  .h-5 {
    height: calc(var(--spacing) * 5);
  }
  .h-6 {
    height: calc(var(--spacing) * 6);
  }
  .h-7 {
    height: calc(var(--spacing) * 7);
  }
  .h-8 {
    height: calc(var(--spacing) * 8);
  }
  .h-12 {
    height: calc(var(--spacing) * 12);
  }
  .h-18 {
    height: calc(var(--spacing) * 18);
  }
  .h-\\[1px\\] {
    height: 1px;
  }
  .h-\\[32px\\] {
    height: 32px;
  }
  .h-full {
    height: 100%;
  }
  .min-h-0 {
    min-height: calc(var(--spacing) * 0);
  }
  .\\!w-full {
    width: 100% !important;
  }
  .w-2 {
    width: calc(var(--spacing) * 2);
  }
  .w-3 {
    width: calc(var(--spacing) * 3);
  }
  .w-3\\.5 {
    width: calc(var(--spacing) * 3.5);
  }
  .w-4 {
    width: calc(var(--spacing) * 4);
  }
  .w-5 {
    width: calc(var(--spacing) * 5);
  }
  .w-6 {
    width: calc(var(--spacing) * 6);
  }
  .w-8 {
    width: calc(var(--spacing) * 8);
  }
  .w-12 {
    width: calc(var(--spacing) * 12);
  }
  .w-18 {
    width: calc(var(--spacing) * 18);
  }
  .w-\\[1px\\] {
    width: 1px;
  }
  .w-auto {
    width: auto;
  }
  .w-full {
    width: 100%;
  }
  .max-w-\\[150px\\] {
    max-width: 150px;
  }
  .min-w-0 {
    min-width: calc(var(--spacing) * 0);
  }
  .min-w-\\[8rem\\] {
    min-width: 8rem;
  }
  .min-w-\\[32px\\] {
    min-width: 32px;
  }
  .flex-1 {
    flex: 1;
  }
  .flex-none {
    flex: none;
  }
  .flex-shrink-0 {
    flex-shrink: 0;
  }
  .shrink-0 {
    flex-shrink: 0;
  }
  .-translate-x-1\\/2 {
    --tw-translate-x: calc(calc(1/2 * 100%) * -1);
    translate: var(--tw-translate-x) var(--tw-translate-y);
  }
  .translate-x-\\[1px\\] {
    --tw-translate-x: 1px;
    translate: var(--tw-translate-x) var(--tw-translate-y);
  }
  .translate-y-\\[1px\\] {
    --tw-translate-y: 1px;
    translate: var(--tw-translate-x) var(--tw-translate-y);
  }
  .rotate-45 {
    rotate: 45deg;
  }
  .transform {
    transform: var(--tw-rotate-x) var(--tw-rotate-y) var(--tw-rotate-z) var(--tw-skew-x) var(--tw-skew-y);
  }
  .animate-pulse {
    animation: var(--animate-pulse);
  }
  .animate-spin {
    animation: var(--animate-spin);
  }
  .cursor-grab {
    cursor: grab;
  }
  .cursor-not-allowed {
    cursor: not-allowed;
  }
  .cursor-pointer {
    cursor: pointer;
  }
  .touch-pan-y {
    --tw-pan-y: pan-y;
    touch-action: var(--tw-pan-x,) var(--tw-pan-y,) var(--tw-pinch-zoom,);
  }
  .appearance-none {
    -webkit-appearance: none;
       -moz-appearance: none;
            appearance: none;
  }
  .flex-col {
    flex-direction: column;
  }
  .flex-row {
    flex-direction: row;
  }
  .items-center {
    align-items: center;
  }
  .items-start {
    align-items: flex-start;
  }
  .justify-between {
    justify-content: space-between;
  }
  .justify-center {
    justify-content: center;
  }
  .justify-end {
    justify-content: flex-end;
  }
  .gap-1 {
    gap: calc(var(--spacing) * 1);
  }
  .gap-2 {
    gap: calc(var(--spacing) * 2);
  }
  .gap-3 {
    gap: calc(var(--spacing) * 3);
  }
  .gap-4 {
    gap: calc(var(--spacing) * 4);
  }
  .space-y-2 {
    :where(& > :not(:last-child)) {
      --tw-space-y-reverse: 0;
      margin-block-start: calc(calc(var(--spacing) * 2) * var(--tw-space-y-reverse));
      margin-block-end: calc(calc(var(--spacing) * 2) * calc(1 - var(--tw-space-y-reverse)));
    }
  }
  .space-y-6 {
    :where(& > :not(:last-child)) {
      --tw-space-y-reverse: 0;
      margin-block-start: calc(calc(var(--spacing) * 6) * var(--tw-space-y-reverse));
      margin-block-end: calc(calc(var(--spacing) * 6) * calc(1 - var(--tw-space-y-reverse)));
    }
  }
  .space-x-3 {
    :where(& > :not(:last-child)) {
      --tw-space-x-reverse: 0;
      margin-inline-start: calc(calc(var(--spacing) * 3) * var(--tw-space-x-reverse));
      margin-inline-end: calc(calc(var(--spacing) * 3) * calc(1 - var(--tw-space-x-reverse)));
    }
  }
  .divide-y {
    :where(& > :not(:last-child)) {
      --tw-divide-y-reverse: 0;
      border-bottom-style: var(--tw-border-style);
      border-top-style: var(--tw-border-style);
      border-top-width: calc(1px * var(--tw-divide-y-reverse));
      border-bottom-width: calc(1px * calc(1 - var(--tw-divide-y-reverse)));
    }
  }
  .divide-gray-100 {
    :where(& > :not(:last-child)) {
      border-color: var(--color-gray-100);
    }
  }
  .self-center {
    align-self: center;
  }
  .truncate {
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }
  .overflow-hidden {
    overflow: hidden;
  }
  .overflow-y-auto {
    overflow-y: auto;
  }
  .rounded {
    border-radius: 0.25rem;
  }
  .rounded-\\[3px\\] {
    border-radius: 3px;
  }
  .rounded-full {
    border-radius: calc(infinity * 1px);
  }
  .rounded-lg {
    border-radius: var(--radius-lg);
  }
  .rounded-md {
    border-radius: var(--radius-md);
  }
  .rounded-none {
    border-radius: 0;
  }
  .rounded-l-md {
    border-top-left-radius: var(--radius-md);
    border-bottom-left-radius: var(--radius-md);
  }
  .rounded-r-md {
    border-top-right-radius: var(--radius-md);
    border-bottom-right-radius: var(--radius-md);
  }
  .border {
    border-style: var(--tw-border-style);
    border-width: 1px;
  }
  .border-0 {
    border-style: var(--tw-border-style);
    border-width: 0px;
  }
  .border-1 {
    border-style: var(--tw-border-style);
    border-width: 1px;
  }
  .border-2 {
    border-style: var(--tw-border-style);
    border-width: 2px;
  }
  .border-3 {
    border-style: var(--tw-border-style);
    border-width: 3px;
  }
  .border-4 {
    border-style: var(--tw-border-style);
    border-width: 4px;
  }
  .border-t {
    border-top-style: var(--tw-border-style);
    border-top-width: 1px;
  }
  .border-r-0 {
    border-right-style: var(--tw-border-style);
    border-right-width: 0px;
  }
  .border-b {
    border-bottom-style: var(--tw-border-style);
    border-bottom-width: 1px;
  }
  .border-b-2 {
    border-bottom-style: var(--tw-border-style);
    border-bottom-width: 2px;
  }
  .border-none {
    --tw-border-style: none;
    border-style: none;
  }
  .border-\\[\\#cfd4da\\] {
    border-color: #cfd4da;
  }
  .border-blue-200 {
    border-color: var(--color-blue-200);
  }
  .border-blue-500 {
    border-color: var(--color-blue-500);
  }
  .border-blue-600 {
    border-color: var(--color-blue-600);
  }
  .border-gray-200 {
    border-color: var(--color-gray-200);
  }
  .border-gray-300 {
    border-color: var(--color-gray-300);
  }
  .border-gray-400 {
    border-color: var(--color-gray-400);
  }
  .border-gray-600 {
    border-color: var(--color-gray-600);
  }
  .border-red-500 {
    border-color: var(--color-red-500);
  }
  .border-transparent {
    border-color: transparent;
  }
  .border-t-blue-500 {
    border-top-color: var(--color-blue-500);
  }
  .border-r-blue-500 {
    border-right-color: var(--color-blue-500);
  }
  .border-b-blue-500 {
    border-bottom-color: var(--color-blue-500);
  }
  .border-b-transparent {
    border-bottom-color: transparent;
  }
  .bg-\\[\\#f1f3f5\\] {
    background-color: #f1f3f5;
  }
  .bg-\\[\\#f8f9fa\\] {
    background-color: #f8f9fa;
  }
  .bg-black\\/50 {
    background-color: color-mix(in oklab, var(--color-black) 50%, transparent);
  }
  .bg-blue-50 {
    background-color: var(--color-blue-50);
  }
  .bg-blue-200 {
    background-color: var(--color-blue-200);
  }
  .bg-blue-500 {
    background-color: var(--color-blue-500);
  }
  .bg-blue-600 {
    background-color: var(--color-blue-600);
  }
  .bg-gray-100 {
    background-color: var(--color-gray-100);
  }
  .bg-gray-200 {
    background-color: var(--color-gray-200);
  }
  .bg-gray-300 {
    background-color: var(--color-gray-300);
  }
  .bg-gray-900 {
    background-color: var(--color-gray-900);
  }
  .bg-inherit {
    background-color: inherit;
  }
  .bg-transparent {
    background-color: transparent;
  }
  .bg-white {
    background-color: var(--color-white);
  }
  .bg-white\\/80 {
    background-color: color-mix(in oklab, var(--color-white) 80%, transparent);
  }
  .object-contain {
    -o-object-fit: contain;
       object-fit: contain;
  }
  .p-0 {
    padding: calc(var(--spacing) * 0);
  }
  .p-1 {
    padding: calc(var(--spacing) * 1);
  }
  .p-3 {
    padding: calc(var(--spacing) * 3);
  }
  .p-4 {
    padding: calc(var(--spacing) * 4);
  }
  .p-6 {
    padding: calc(var(--spacing) * 6);
  }
  .p-\\[5px\\] {
    padding: 5px;
  }
  .px-2 {
    padding-inline: calc(var(--spacing) * 2);
  }
  .px-3 {
    padding-inline: calc(var(--spacing) * 3);
  }
  .px-4 {
    padding-inline: calc(var(--spacing) * 4);
  }
  .px-6 {
    padding-inline: calc(var(--spacing) * 6);
  }
  .py-1 {
    padding-block: calc(var(--spacing) * 1);
  }
  .py-1\\.5 {
    padding-block: calc(var(--spacing) * 1.5);
  }
  .py-2 {
    padding-block: calc(var(--spacing) * 2);
  }
  .py-3 {
    padding-block: calc(var(--spacing) * 3);
  }
  .py-4 {
    padding-block: calc(var(--spacing) * 4);
  }
  .pt-4 {
    padding-top: calc(var(--spacing) * 4);
  }
  .pr-2 {
    padding-right: calc(var(--spacing) * 2);
  }
  .pr-3 {
    padding-right: calc(var(--spacing) * 3);
  }
  .pr-4 {
    padding-right: calc(var(--spacing) * 4);
  }
  .pr-8 {
    padding-right: calc(var(--spacing) * 8);
  }
  .pr-9 {
    padding-right: calc(var(--spacing) * 9);
  }
  .pb-2 {
    padding-bottom: calc(var(--spacing) * 2);
  }
  .pl-2 {
    padding-left: calc(var(--spacing) * 2);
  }
  .pl-3 {
    padding-left: calc(var(--spacing) * 3);
  }
  .pl-8 {
    padding-left: calc(var(--spacing) * 8);
  }
  .text-center {
    text-align: center;
  }
  .text-left {
    text-align: left;
  }
  .text-right {
    text-align: right;
  }
  .text-base {
    font-size: var(--text-base);
    line-height: var(--tw-leading, var(--text-base--line-height));
  }
  .text-lg {
    font-size: var(--text-lg);
    line-height: var(--tw-leading, var(--text-lg--line-height));
  }
  .text-sm {
    font-size: var(--text-sm);
    line-height: var(--tw-leading, var(--text-sm--line-height));
  }
  .text-xs {
    font-size: var(--text-xs);
    line-height: var(--tw-leading, var(--text-xs--line-height));
  }
  .text-\\[13px\\] {
    font-size: 13px;
  }
  .leading-tight {
    --tw-leading: var(--leading-tight);
    line-height: var(--leading-tight);
  }
  .font-bold {
    --tw-font-weight: var(--font-weight-bold);
    font-weight: var(--font-weight-bold);
  }
  .font-medium {
    --tw-font-weight: var(--font-weight-medium);
    font-weight: var(--font-weight-medium);
  }
  .font-semibold {
    --tw-font-weight: var(--font-weight-semibold);
    font-weight: var(--font-weight-semibold);
  }
  .whitespace-nowrap {
    white-space: nowrap;
  }
  .text-blue-500 {
    color: var(--color-blue-500);
  }
  .text-blue-700 {
    color: var(--color-blue-700);
  }
  .text-blue-900 {
    color: var(--color-blue-900);
  }
  .text-gray-400 {
    color: var(--color-gray-400);
  }
  .text-gray-500 {
    color: var(--color-gray-500);
  }
  .text-gray-600 {
    color: var(--color-gray-600);
  }
  .text-gray-700 {
    color: var(--color-gray-700);
  }
  .text-gray-900 {
    color: var(--color-gray-900);
  }
  .text-red-500 {
    color: var(--color-red-500);
  }
  .text-white {
    color: var(--color-white);
  }
  .uppercase {
    text-transform: uppercase;
  }
  .underline {
    text-decoration-line: underline;
  }
  .opacity-0 {
    opacity: 0%;
  }
  .opacity-50 {
    opacity: 50%;
  }
  .opacity-100 {
    opacity: 100%;
  }
  .ring {
    --tw-ring-shadow: var(--tw-ring-inset,) 0 0 0 calc(1px + var(--tw-ring-offset-width)) var(--tw-ring-color, currentColor);
    box-shadow: var(--tw-inset-shadow), var(--tw-inset-ring-shadow), var(--tw-ring-offset-shadow), var(--tw-ring-shadow), var(--tw-shadow);
  }
  .shadow {
    --tw-shadow: 0 1px 3px 0 var(--tw-shadow-color, rgb(0 0 0 / 0.1)), 0 1px 2px -1px var(--tw-shadow-color, rgb(0 0 0 / 0.1));
    box-shadow: var(--tw-inset-shadow), var(--tw-inset-ring-shadow), var(--tw-ring-offset-shadow), var(--tw-ring-shadow), var(--tw-shadow);
  }
  .shadow-md {
    --tw-shadow: 0 4px 6px -1px var(--tw-shadow-color, rgb(0 0 0 / 0.1)), 0 2px 4px -2px var(--tw-shadow-color, rgb(0 0 0 / 0.1));
    box-shadow: var(--tw-inset-shadow), var(--tw-inset-ring-shadow), var(--tw-ring-offset-shadow), var(--tw-ring-shadow), var(--tw-shadow);
  }
  .shadow-sm {
    --tw-shadow: 0 1px 3px 0 var(--tw-shadow-color, rgb(0 0 0 / 0.1)), 0 1px 2px -1px var(--tw-shadow-color, rgb(0 0 0 / 0.1));
    box-shadow: var(--tw-inset-shadow), var(--tw-inset-ring-shadow), var(--tw-ring-offset-shadow), var(--tw-ring-shadow), var(--tw-shadow);
  }
  .shadow-xs {
    --tw-shadow: 0 1px 2px 0 var(--tw-shadow-color, rgb(0 0 0 / 0.05));
    box-shadow: var(--tw-inset-shadow), var(--tw-inset-ring-shadow), var(--tw-ring-offset-shadow), var(--tw-ring-shadow), var(--tw-shadow);
  }
  .ring-blue-500 {
    --tw-ring-color: var(--color-blue-500);
  }
  .outline {
    outline-style: var(--tw-outline-style);
    outline-width: 1px;
  }
  .outline-1 {
    outline-style: var(--tw-outline-style);
    outline-width: 1px;
  }
  .outline-2 {
    outline-style: var(--tw-outline-style);
    outline-width: 2px;
  }
  .-outline-offset-1 {
    outline-offset: calc(1px * -1);
  }
  .-outline-offset-2 {
    outline-offset: calc(2px * -1);
  }
  .outline-offset-2 {
    outline-offset: 2px;
  }
  .outline-blue-500 {
    outline-color: var(--color-blue-500);
  }
  .outline-gray-300 {
    outline-color: var(--color-gray-300);
  }
  .filter {
    filter: var(--tw-blur,) var(--tw-brightness,) var(--tw-contrast,) var(--tw-grayscale,) var(--tw-hue-rotate,) var(--tw-invert,) var(--tw-saturate,) var(--tw-sepia,) var(--tw-drop-shadow,);
  }
  .backdrop-blur {
    --tw-backdrop-blur: blur(8px);
    -webkit-backdrop-filter: var(--tw-backdrop-blur,) var(--tw-backdrop-brightness,) var(--tw-backdrop-contrast,) var(--tw-backdrop-grayscale,) var(--tw-backdrop-hue-rotate,) var(--tw-backdrop-invert,) var(--tw-backdrop-opacity,) var(--tw-backdrop-saturate,) var(--tw-backdrop-sepia,);
    backdrop-filter: var(--tw-backdrop-blur,) var(--tw-backdrop-brightness,) var(--tw-backdrop-contrast,) var(--tw-backdrop-grayscale,) var(--tw-backdrop-hue-rotate,) var(--tw-backdrop-invert,) var(--tw-backdrop-opacity,) var(--tw-backdrop-saturate,) var(--tw-backdrop-sepia,);
  }
  .transition-all {
    transition-property: all;
    transition-timing-function: var(--tw-ease, var(--default-transition-timing-function));
    transition-duration: var(--tw-duration, var(--default-transition-duration));
  }
  .transition-colors {
    transition-property: color, background-color, border-color, outline-color, text-decoration-color, fill, stroke, --tw-gradient-from, --tw-gradient-via, --tw-gradient-to;
    transition-timing-function: var(--tw-ease, var(--default-transition-timing-function));
    transition-duration: var(--tw-duration, var(--default-transition-duration));
  }
  .transition-opacity {
    transition-property: opacity;
    transition-timing-function: var(--tw-ease, var(--default-transition-timing-function));
    transition-duration: var(--tw-duration, var(--default-transition-duration));
  }
  .duration-150 {
    --tw-duration: 150ms;
    transition-duration: 150ms;
  }
  .duration-200 {
    --tw-duration: 200ms;
    transition-duration: 200ms;
  }
  .duration-300 {
    --tw-duration: 300ms;
    transition-duration: 300ms;
  }
  .ease-in-out {
    --tw-ease: var(--ease-in-out);
    transition-timing-function: var(--ease-in-out);
  }
  .outline-none {
    --tw-outline-style: none;
    outline-style: none;
  }
  .select-none {
    -webkit-user-select: none;
    -moz-user-select: none;
         user-select: none;
  }
  .peer-checked\\:opacity-100 {
    &:is(:where(.peer):checked ~ *) {
      opacity: 100%;
    }
  }
  .first\\:mt-0 {
    &:first-child {
      margin-top: calc(var(--spacing) * 0);
    }
  }
  .checked\\:border-blue-600 {
    &:checked {
      border-color: var(--color-blue-600);
    }
  }
  .checked\\:bg-blue-600 {
    &:checked {
      background-color: var(--color-blue-600);
    }
  }
  .hover\\:border-\\[\\#1a466b\\] {
    &:hover {
      @media (hover: hover) {
        border-color: #1a466b;
      }
    }
  }
  .hover\\:border-b-gray-500 {
    &:hover {
      @media (hover: hover) {
        border-bottom-color: var(--color-gray-500);
      }
    }
  }
  .hover\\:\\!bg-blue-700 {
    &:hover {
      @media (hover: hover) {
        background-color: var(--color-blue-700) !important;
      }
    }
  }
  .hover\\:bg-blue-900 {
    &:hover {
      @media (hover: hover) {
        background-color: var(--color-blue-900);
      }
    }
  }
  .hover\\:bg-gray-50 {
    &:hover {
      @media (hover: hover) {
        background-color: var(--color-gray-50);
      }
    }
  }
  .hover\\:bg-gray-100 {
    &:hover {
      @media (hover: hover) {
        background-color: var(--color-gray-100);
      }
    }
  }
  .hover\\:bg-gray-200 {
    &:hover {
      @media (hover: hover) {
        background-color: var(--color-gray-200);
      }
    }
  }
  .hover\\:bg-transparent {
    &:hover {
      @media (hover: hover) {
        background-color: transparent;
      }
    }
  }
  .hover\\:text-gray-700 {
    &:hover {
      @media (hover: hover) {
        color: var(--color-gray-700);
      }
    }
  }
  .hover\\:text-white {
    &:hover {
      @media (hover: hover) {
        color: var(--color-white);
      }
    }
  }
  .hover\\:ring {
    &:hover {
      @media (hover: hover) {
        --tw-ring-shadow: var(--tw-ring-inset,) 0 0 0 calc(1px + var(--tw-ring-offset-width)) var(--tw-ring-color, currentColor);
        box-shadow: var(--tw-inset-shadow), var(--tw-inset-ring-shadow), var(--tw-ring-offset-shadow), var(--tw-ring-shadow), var(--tw-shadow);
      }
    }
  }
  .hover\\:ring-0 {
    &:hover {
      @media (hover: hover) {
        --tw-ring-shadow: var(--tw-ring-inset,) 0 0 0 calc(0px + var(--tw-ring-offset-width)) var(--tw-ring-color, currentColor);
        box-shadow: var(--tw-inset-shadow), var(--tw-inset-ring-shadow), var(--tw-ring-offset-shadow), var(--tw-ring-shadow), var(--tw-shadow);
      }
    }
  }
  .hover\\:ring-\\[\\#1a466b\\] {
    &:hover {
      @media (hover: hover) {
        --tw-ring-color: #1a466b;
      }
    }
  }
  .hover\\:ring-transparent {
    &:hover {
      @media (hover: hover) {
        --tw-ring-color: transparent;
      }
    }
  }
  .focus\\:border-blue-500 {
    &:focus {
      border-color: var(--color-blue-500);
    }
  }
  .focus\\:border-red-500 {
    &:focus {
      border-color: var(--color-red-500);
    }
  }
  .focus\\:ring-1 {
    &:focus {
      --tw-ring-shadow: var(--tw-ring-inset,) 0 0 0 calc(1px + var(--tw-ring-offset-width)) var(--tw-ring-color, currentColor);
      box-shadow: var(--tw-inset-shadow), var(--tw-inset-ring-shadow), var(--tw-ring-offset-shadow), var(--tw-ring-shadow), var(--tw-shadow);
    }
  }
  .focus\\:ring-blue-500 {
    &:focus {
      --tw-ring-color: var(--color-blue-500);
    }
  }
  .focus\\:ring-red-500 {
    &:focus {
      --tw-ring-color: var(--color-red-500);
    }
  }
  .focus\\:outline-none {
    &:focus {
      --tw-outline-style: none;
      outline-style: none;
    }
  }
  .active\\:cursor-grabbing {
    &:active {
      cursor: grabbing;
    }
  }
  .disabled\\:cursor-not-allowed {
    &:disabled {
      cursor: not-allowed;
    }
  }
  .disabled\\:opacity-50 {
    &:disabled {
      opacity: 50%;
    }
  }
  .md\\:static {
    @media (width >= 48rem) {
      position: static;
    }
  }
  .md\\:flex {
    @media (width >= 48rem) {
      display: flex;
    }
  }
  .md\\:hidden {
    @media (width >= 48rem) {
      display: none;
    }
  }
  .md\\:h-auto {
    @media (width >= 48rem) {
      height: auto;
    }
  }
  .md\\:h-full {
    @media (width >= 48rem) {
      height: 100%;
    }
  }
  .md\\:max-h-\\[80vh\\] {
    @media (width >= 48rem) {
      max-height: 80vh;
    }
  }
  .md\\:w-\\[28rem\\] {
    @media (width >= 48rem) {
      width: 28rem;
    }
  }
  .md\\:w-\\[275px\\] {
    @media (width >= 48rem) {
      width: 275px;
    }
  }
  .md\\:max-w-\\[90vw\\] {
    @media (width >= 48rem) {
      max-width: 90vw;
    }
  }
  .md\\:min-w-\\[275px\\] {
    @media (width >= 48rem) {
      min-width: 275px;
    }
  }
  .md\\:flex-none {
    @media (width >= 48rem) {
      flex: none;
    }
  }
  .md\\:flex-row {
    @media (width >= 48rem) {
      flex-direction: row;
    }
  }
  .md\\:items-center {
    @media (width >= 48rem) {
      align-items: center;
    }
  }
  .md\\:justify-center {
    @media (width >= 48rem) {
      justify-content: center;
    }
  }
  .md\\:rounded-lg {
    @media (width >= 48rem) {
      border-radius: var(--radius-lg);
    }
  }
  .md\\:border {
    @media (width >= 48rem) {
      border-style: var(--tw-border-style);
      border-width: 1px;
    }
  }
  .md\\:border-t-0 {
    @media (width >= 48rem) {
      border-top-style: var(--tw-border-style);
      border-top-width: 0px;
    }
  }
  .md\\:border-r {
    @media (width >= 48rem) {
      border-right-style: var(--tw-border-style);
      border-right-width: 1px;
    }
  }
  .md\\:border-l {
    @media (width >= 48rem) {
      border-left-style: var(--tw-border-style);
      border-left-width: 1px;
    }
  }
  .md\\:border-gray-200 {
    @media (width >= 48rem) {
      border-color: var(--color-gray-200);
    }
  }
  .md\\:shadow-lg {
    @media (width >= 48rem) {
      --tw-shadow: 0 10px 15px -3px var(--tw-shadow-color, rgb(0 0 0 / 0.1)), 0 4px 6px -4px var(--tw-shadow-color, rgb(0 0 0 / 0.1));
      box-shadow: var(--tw-inset-shadow), var(--tw-inset-ring-shadow), var(--tw-ring-offset-shadow), var(--tw-ring-shadow), var(--tw-shadow);
    }
  }
  .\\@max-\\[600px\\]\\:\\!top-auto {
    @container (width < 600px) {
      top: auto !important;
    }
  }
  .\\@max-\\[600px\\]\\:\\!right-0 {
    @container (width < 600px) {
      right: calc(var(--spacing) * 0) !important;
    }
  }
  .\\@max-\\[600px\\]\\:\\!bottom-0 {
    @container (width < 600px) {
      bottom: calc(var(--spacing) * 0) !important;
    }
  }
  .\\@max-\\[600px\\]\\:\\!left-0 {
    @container (width < 600px) {
      left: calc(var(--spacing) * 0) !important;
    }
  }
  .\\@min-\\[400px\\]\\:block {
    @container (width >= 400px) {
      display: block;
    }
  }
  .\\@min-\\[400px\\]\\:flex {
    @container (width >= 400px) {
      display: flex;
    }
  }
  .\\@min-\\[400px\\]\\:hidden {
    @container (width >= 400px) {
      display: none;
    }
  }
  .\\@min-\\[500px\\]\\:block {
    @container (width >= 500px) {
      display: block;
    }
  }
  .\\@min-\\[500px\\]\\:hidden {
    @container (width >= 500px) {
      display: none;
    }
  }
  .\\@min-\\[600px\\]\\:block {
    @container (width >= 600px) {
      display: block;
    }
  }
  .\\@min-\\[600px\\]\\:flex {
    @container (width >= 600px) {
      display: flex;
    }
  }
  .\\@min-\\[600px\\]\\:hidden {
    @container (width >= 600px) {
      display: none;
    }
  }
  .dark\\:bg-gray-700 {
    @media (prefers-color-scheme: dark) {
      background-color: var(--color-gray-700);
    }
  }
  .dark\\:text-white {
    @media (prefers-color-scheme: dark) {
      color: var(--color-white);
    }
  }
}
@import url('https://fonts.googleapis.com/css2?family=Open Sans:wght@400;600&amp;display=swap');
:host {
  --tw-translate-x: 0;
  --tw-translate-y: 0;
  --tw-translate-z: 0;
  --tw-rotate-x: rotateX(0);
  --tw-rotate-y: rotateY(0);
  --tw-rotate-z: rotateZ(0);
  --tw-skew-x: skewX(0);
  --tw-skew-y: skewY(0);
  --tw-border-style: solid;
  --tw-gradient-from: #0000;
  --tw-gradient-via: #0000;
  --tw-gradient-to: #0000;
  --tw-gradient-from-position: 0%;
  --tw-gradient-via-position: 50%;
  --tw-gradient-to-position: 100%;
  --tw-shadow: 0 0 #0000;
  --tw-inset-shadow: 0 0 #0000;
  --tw-ring-shadow: 0 0 #0000;
  --tw-inset-ring-shadow: 0 0 #0000;
  --tw-ring-offset-width: 0px;
  --tw-ring-offset-color: #fff;
  --tw-ring-offset-shadow: 0 0 #0000;
  --tw-outline-style: solid;
  display: flex;
  flex-direction: column;
  overflow: hidden;
  width: 100%;
  height: 100%;
}
@keyframes spin {
  to {
    transform: rotate(360deg);
  }
}
@keyframes ping {
  75%, 100% {
    transform: scale(2);
    opacity: 0;
  }
}
@keyframes pulse {
  50% {
    opacity: 0.5;
  }
}
@keyframes bounce {
  0%, 100% {
    transform: translateY(-25%);
    animation-timing-function: cubic-bezier(0.8, 0, 1, 1);
  }
  50% {
    transform: none;
    animation-timing-function: cubic-bezier(0, 0, 0.2, 1);
  }
}
@property --tw-translate-x {
  syntax: "*";
  inherits: false;
  initial-value: 0;
}
@property --tw-translate-y {
  syntax: "*";
  inherits: false;
  initial-value: 0;
}
@property --tw-translate-z {
  syntax: "*";
  inherits: false;
  initial-value: 0;
}
@property --tw-rotate-x {
  syntax: "*";
  inherits: false;
  initial-value: rotateX(0);
}
@property --tw-rotate-y {
  syntax: "*";
  inherits: false;
  initial-value: rotateY(0);
}
@property --tw-rotate-z {
  syntax: "*";
  inherits: false;
  initial-value: rotateZ(0);
}
@property --tw-skew-x {
  syntax: "*";
  inherits: false;
  initial-value: skewX(0);
}
@property --tw-skew-y {
  syntax: "*";
  inherits: false;
  initial-value: skewY(0);
}
@property --tw-pan-x {
  syntax: "*";
  inherits: false;
}
@property --tw-pan-y {
  syntax: "*";
  inherits: false;
}
@property --tw-pinch-zoom {
  syntax: "*";
  inherits: false;
}
@property --tw-space-y-reverse {
  syntax: "*";
  inherits: false;
  initial-value: 0;
}
@property --tw-space-x-reverse {
  syntax: "*";
  inherits: false;
  initial-value: 0;
}
@property --tw-divide-y-reverse {
  syntax: "*";
  inherits: false;
  initial-value: 0;
}
@property --tw-border-style {
  syntax: "*";
  inherits: false;
  initial-value: solid;
}
@property --tw-leading {
  syntax: "*";
  inherits: false;
}
@property --tw-font-weight {
  syntax: "*";
  inherits: false;
}
@property --tw-shadow {
  syntax: "*";
  inherits: false;
  initial-value: 0 0 #0000;
}
@property --tw-shadow-color {
  syntax: "*";
  inherits: false;
}
@property --tw-inset-shadow {
  syntax: "*";
  inherits: false;
  initial-value: 0 0 #0000;
}
@property --tw-inset-shadow-color {
  syntax: "*";
  inherits: false;
}
@property --tw-ring-color {
  syntax: "*";
  inherits: false;
}
@property --tw-ring-shadow {
  syntax: "*";
  inherits: false;
  initial-value: 0 0 #0000;
}
@property --tw-inset-ring-color {
  syntax: "*";
  inherits: false;
}
@property --tw-inset-ring-shadow {
  syntax: "*";
  inherits: false;
  initial-value: 0 0 #0000;
}
@property --tw-ring-inset {
  syntax: "*";
  inherits: false;
}
@property --tw-ring-offset-width {
  syntax: "<length>";
  inherits: false;
  initial-value: 0px;
}
@property --tw-ring-offset-color {
  syntax: "*";
  inherits: false;
  initial-value: #fff;
}
@property --tw-ring-offset-shadow {
  syntax: "*";
  inherits: false;
  initial-value: 0 0 #0000;
}
@property --tw-outline-style {
  syntax: "*";
  inherits: false;
  initial-value: solid;
}
@property --tw-blur {
  syntax: "*";
  inherits: false;
}
@property --tw-brightness {
  syntax: "*";
  inherits: false;
}
@property --tw-contrast {
  syntax: "*";
  inherits: false;
}
@property --tw-grayscale {
  syntax: "*";
  inherits: false;
}
@property --tw-hue-rotate {
  syntax: "*";
  inherits: false;
}
@property --tw-invert {
  syntax: "*";
  inherits: false;
}
@property --tw-opacity {
  syntax: "*";
  inherits: false;
}
@property --tw-saturate {
  syntax: "*";
  inherits: false;
}
@property --tw-sepia {
  syntax: "*";
  inherits: false;
}
@property --tw-backdrop-blur {
  syntax: "*";
  inherits: false;
}
@property --tw-backdrop-brightness {
  syntax: "*";
  inherits: false;
}
@property --tw-backdrop-contrast {
  syntax: "*";
  inherits: false;
}
@property --tw-backdrop-grayscale {
  syntax: "*";
  inherits: false;
}
@property --tw-backdrop-hue-rotate {
  syntax: "*";
  inherits: false;
}
@property --tw-backdrop-invert {
  syntax: "*";
  inherits: false;
}
@property --tw-backdrop-opacity {
  syntax: "*";
  inherits: false;
}
@property --tw-backdrop-saturate {
  syntax: "*";
  inherits: false;
}
@property --tw-backdrop-sepia {
  syntax: "*";
  inherits: false;
}
@property --tw-duration {
  syntax: "*";
  inherits: false;
}
@property --tw-ease {
  syntax: "*";
  inherits: false;
}
`;
    de = 0;
    fe = 0;
    ve = [];
    ye = C2;
    be = ye.__b;
    we = ye.__r;
    xe = ye.diffed;
    ke = ye.__c;
    Ce = ye.unmount;
    Se = ye.__;
    ye.__b = function(e5) {
      pe = null, be && be(e5);
    }, ye.__ = function(e5, t3) {
      e5 && t3.__k && t3.__k.__m && (e5.__m = t3.__k.__m), Se && Se(e5, t3);
    }, ye.__r = function(e5) {
      we && we(e5), he = 0;
      var t3 = (pe = e5.__c).__H;
      t3 && (ge === pe ? (t3.__h = [], pe.__h = [], t3.__.forEach(function(e6) {
        e6.__N && (e6.__ = e6.__N), e6.u = e6.__N = void 0;
      })) : (t3.__h.forEach(Oe), t3.__h.forEach(He), t3.__h = [], he = 0)), ge = pe;
    }, ye.diffed = function(e5) {
      xe && xe(e5);
      var t3 = e5.__c;
      t3 && t3.__H && (t3.__H.__h.length && (1 !== ve.push(t3) && me === ye.requestAnimationFrame || ((me = ye.requestAnimationFrame) || Le)(Re)), t3.__H.__.forEach(function(e6) {
        e6.u && (e6.__H = e6.u), e6.u = void 0;
      })), ge = pe = null;
    }, ye.__c = function(e5, t3) {
      t3.some(function(e6) {
        try {
          e6.__h.forEach(Oe), e6.__h = e6.__h.filter(function(e7) {
            return !e7.__ || He(e7);
          });
        } catch (n3) {
          t3.some(function(e7) {
            e7.__h && (e7.__h = []);
          }), t3 = [], ye.__e(n3, e6.__v);
        }
      }), ke && ke(e5, t3);
    }, ye.unmount = function(e5) {
      Ce && Ce(e5);
      var t3, n3 = e5.__c;
      n3 && n3.__H && (n3.__H.__.forEach(function(e6) {
        try {
          Oe(e6);
        } catch (e7) {
          t3 = e7;
        }
      }), n3.__H = void 0, t3 && ye.__e(t3, n3.__v));
    };
    Ne = "function" == typeof requestAnimationFrame;
    Ue = ((e5) => (e5[e5.Degree0 = 0] = "Degree0", e5[e5.Degree90 = 1] = "Degree90", e5[e5.Degree180 = 2] = "Degree180", e5[e5.Degree270 = 3] = "Degree270", e5))(Ue || {});
    et = (e5, t3, n3) => {
      const { width: o3, height: i4 } = e5.size;
      switch (t3) {
        case 0:
          return { a: n3, b: 0, c: 0, d: -n3, e: 0, f: i4 * n3 };
        case 1:
          return { a: 0, b: n3, c: n3, d: 0, e: 0, f: 0 };
        case 2:
          return { a: -n3, b: 0, c: 0, d: n3, e: o3 * n3, f: 0 };
        case 3:
          return { a: 0, b: -n3, c: -n3, d: 0, e: i4 * n3, f: o3 * n3 };
      }
    };
    tt = class {
      debug() {
      }
      info() {
      }
      warn() {
      }
      error() {
      }
      perf() {
      }
    };
    nt = class extends Error {
      constructor(e5) {
        super(`Task aborted: ${JSON.stringify(e5)}`), this.name = "TaskAbortedError";
      }
    };
    ot = class extends Error {
      constructor(e5) {
        super(`Task rejected: ${JSON.stringify(e5)}`), this.name = "TaskRejectedError";
      }
    };
    it = class e3 {
      constructor() {
        this.state = { stage: 0 }, this.resolvedCallbacks = [], this.rejectedCallbacks = [], this._promise = null;
      }
      toPromise() {
        return this._promise || (this._promise = new Promise((e5, t3) => {
          this.wait((t4) => e5(t4), (e6) => {
            "abort" === e6.type ? t3(new nt(e6.reason)) : t3(new ot(e6.reason));
          });
        })), this._promise;
      }
      wait(e5, t3) {
        switch (this.state.stage) {
          case 0:
            this.resolvedCallbacks.push(e5), this.rejectedCallbacks.push(t3);
            break;
          case 1:
            e5(this.state.result);
            break;
          case 2:
            t3({ type: "reject", reason: this.state.reason });
            break;
          case 3:
            t3({ type: "abort", reason: this.state.reason });
        }
      }
      resolve(e5) {
        if (0 === this.state.stage) {
          this.state = { stage: 1, result: e5 };
          for (const t3 of this.resolvedCallbacks) try {
            t3(e5);
          } catch (e6) {
          }
          this.resolvedCallbacks = [], this.rejectedCallbacks = [];
        }
      }
      reject(e5) {
        if (0 === this.state.stage) {
          this.state = { stage: 2, reason: e5 };
          for (const t3 of this.rejectedCallbacks) try {
            t3({ type: "reject", reason: e5 });
          } catch (e6) {
          }
          this.resolvedCallbacks = [], this.rejectedCallbacks = [];
        }
      }
      abort(e5) {
        if (0 === this.state.stage) {
          this.state = { stage: 3, reason: e5 };
          for (const t3 of this.rejectedCallbacks) try {
            t3({ type: "abort", reason: e5 });
          } catch (e6) {
          }
          this.resolvedCallbacks = [], this.rejectedCallbacks = [];
        }
      }
      fail(e5) {
        "abort" === e5.type ? this.abort(e5.reason) : this.reject(e5.reason);
      }
      static all(t3) {
        const n3 = new e3();
        if (0 === t3.length) return n3.resolve([]), n3;
        const o3 = new Array(t3.length);
        let i4 = 0, r4 = false;
        return t3.forEach((e5, a3) => {
          e5.wait((e6) => {
            r4 || (o3[a3] = e6, i4++, i4 === t3.length && (r4 = true, n3.resolve(o3)));
          }, (e6) => {
            r4 || (r4 = true, "abort" === e6.type ? n3.abort(e6.reason) : n3.reject(e6.reason));
          });
        }), n3;
      }
      static allSettled(t3) {
        const n3 = new e3();
        if (0 === t3.length) return n3.resolve([]), n3;
        const o3 = new Array(t3.length);
        let i4 = 0;
        return t3.forEach((e5, r4) => {
          e5.wait((e6) => {
            o3[r4] = { status: "resolved", value: e6 }, i4++, i4 === t3.length && n3.resolve(o3);
          }, (e6) => {
            o3[r4] = { status: "abort" === e6.type ? "aborted" : "rejected", reason: e6.reason }, i4++, i4 === t3.length && n3.resolve(o3);
          });
        }), n3;
      }
      static race(t3) {
        const n3 = new e3();
        if (0 === t3.length) return n3.reject("No tasks provided"), n3;
        let o3 = false;
        return t3.forEach((e5) => {
          e5.wait((e6) => {
            o3 || (o3 = true, n3.resolve(e6));
          }, (e6) => {
            o3 || (o3 = true, "abort" === e6.type ? n3.abort(e6.reason) : n3.reject(e6.reason));
          });
        }), n3;
      }
      static withProgress(t3, n3) {
        const o3 = e3.all(t3);
        if (n3) {
          let e5 = 0;
          t3.forEach((o4) => {
            o4.wait(() => {
              e5++, n3(e5, t3.length);
            }, () => {
              e5++, n3(e5, t3.length);
            });
          });
        }
        return o3;
      }
    };
    rt = Object.freeze(["\xAD", "\u200B", "\u2060", "\uFEFF", "\uFFFE", "\uFFFF"]);
    at = new RegExp(`[${rt.join("")}]`, "g");
    lt = ((e5) => (e5[e5.Unknown = 0] = "Unknown", e5[e5.XYZ = 1] = "XYZ", e5[e5.FitPage = 2] = "FitPage", e5[e5.FitHorizontal = 3] = "FitHorizontal", e5[e5.FitVertical = 4] = "FitVertical", e5[e5.FitRectangle = 5] = "FitRectangle", e5))(lt || {});
    ct = ((e5) => (e5[e5.Unsupported = 0] = "Unsupported", e5[e5.Goto = 1] = "Goto", e5[e5.RemoteGoto = 2] = "RemoteGoto", e5[e5.URI = 3] = "URI", e5[e5.LaunchAppOrOpenFile = 4] = "LaunchAppOrOpenFile", e5))(ct || {});
    dt = ((e5) => (e5[e5.UNKNOWN = 0] = "UNKNOWN", e5[e5.TEXT = 1] = "TEXT", e5[e5.LINK = 2] = "LINK", e5[e5.FREETEXT = 3] = "FREETEXT", e5[e5.LINE = 4] = "LINE", e5[e5.SQUARE = 5] = "SQUARE", e5[e5.CIRCLE = 6] = "CIRCLE", e5[e5.POLYGON = 7] = "POLYGON", e5[e5.POLYLINE = 8] = "POLYLINE", e5[e5.HIGHLIGHT = 9] = "HIGHLIGHT", e5[e5.UNDERLINE = 10] = "UNDERLINE", e5[e5.SQUIGGLY = 11] = "SQUIGGLY", e5[e5.STRIKEOUT = 12] = "STRIKEOUT", e5[e5.STAMP = 13] = "STAMP", e5[e5.CARET = 14] = "CARET", e5[e5.INK = 15] = "INK", e5[e5.POPUP = 16] = "POPUP", e5[e5.FILEATTACHMENT = 17] = "FILEATTACHMENT", e5[e5.SOUND = 18] = "SOUND", e5[e5.MOVIE = 19] = "MOVIE", e5[e5.WIDGET = 20] = "WIDGET", e5[e5.SCREEN = 21] = "SCREEN", e5[e5.PRINTERMARK = 22] = "PRINTERMARK", e5[e5.TRAPNET = 23] = "TRAPNET", e5[e5.WATERMARK = 24] = "WATERMARK", e5[e5.THREED = 25] = "THREED", e5[e5.RICHMEDIA = 26] = "RICHMEDIA", e5[e5.XFAWIDGET = 27] = "XFAWIDGET", e5[e5.REDACT = 28] = "REDACT", e5))(dt || {});
    ut = ((e5) => (e5[e5.Normal = 0] = "Normal", e5[e5.Rollover = 1] = "Rollover", e5[e5.Down = 2] = "Down", e5))(ut || {});
    ht = ((e5) => (e5[e5.UNKNOWN = 0] = "UNKNOWN", e5[e5.PUSHBUTTON = 1] = "PUSHBUTTON", e5[e5.CHECKBOX = 2] = "CHECKBOX", e5[e5.RADIOBUTTON = 3] = "RADIOBUTTON", e5[e5.COMBOBOX = 4] = "COMBOBOX", e5[e5.LISTBOX = 5] = "LISTBOX", e5[e5.TEXTFIELD = 6] = "TEXTFIELD", e5[e5.SIGNATURE = 7] = "SIGNATURE", e5[e5.XFA = 8] = "XFA", e5[e5.XFA_CHECKBOX = 9] = "XFA_CHECKBOX", e5[e5.XFA_COMBOBOX = 10] = "XFA_COMBOBOX", e5[e5.XFA_IMAGEFIELD = 11] = "XFA_IMAGEFIELD", e5[e5.XFA_LISTBOX = 12] = "XFA_LISTBOX", e5[e5.XFA_PUSHBUTTON = 13] = "XFA_PUSHBUTTON", e5[e5.XFA_SIGNATURE = 14] = "XFA_SIGNATURE", e5[e5.XFA_TEXTFIELD = 15] = "XFA_TEXTFIELD", e5))(ht || {});
    pt = ((e5) => (e5[e5.Color = 0] = "Color", e5[e5.InteriorColor = 1] = "InteriorColor", e5))(pt || {});
    gt = ((e5) => (e5[e5.UNKNOWN = 0] = "UNKNOWN", e5[e5.SOLID = 1] = "SOLID", e5[e5.DASHED = 2] = "DASHED", e5[e5.BEVELED = 3] = "BEVELED", e5[e5.INSET = 4] = "INSET", e5[e5.UNDERLINE = 5] = "UNDERLINE", e5[e5.CLOUDY = 6] = "CLOUDY", e5))(gt || {});
    mt = ((e5) => (e5[e5.UNKNOWN = 0] = "UNKNOWN", e5[e5.TEXT = 1] = "TEXT", e5[e5.PATH = 2] = "PATH", e5[e5.IMAGE = 3] = "IMAGE", e5[e5.SHADING = 4] = "SHADING", e5[e5.FORM = 5] = "FORM", e5))(mt || {});
    ft = Object.freeze({ 1: "invisible", 2: "hidden", 4: "print", 8: "noZoom", 16: "noRotate", 32: "noView", 64: "readOnly", 128: "locked", 256: "toggleNoView" });
    Object.entries(ft).reduce((e5, [t3, n3]) => (e5[n3] = Number(t3), e5), {});
    yt = ((e5) => (e5[e5.None = 0] = "None", e5[e5.MatchCase = 1] = "MatchCase", e5[e5.MatchWholeWord = 2] = "MatchWholeWord", e5[e5.MatchConsecutive = 4] = "MatchConsecutive", e5))(yt || {});
    bt = ((e5) => (e5[e5.Ok = 0] = "Ok", e5[e5.Unknown = 1] = "Unknown", e5[e5.NotFound = 2] = "NotFound", e5[e5.WrongFormat = 3] = "WrongFormat", e5[e5.Password = 4] = "Password", e5[e5.Security = 5] = "Security", e5[e5.PageError = 6] = "PageError", e5[e5.XFALoad = 7] = "XFALoad", e5[e5.XFALayout = 8] = "XFALayout", e5[e5.Cancelled = 9] = "Cancelled", e5[e5.Initialization = 10] = "Initialization", e5[e5.NotReady = 11] = "NotReady", e5[e5.NotSupport = 12] = "NotSupport", e5[e5.LoadDoc = 13] = "LoadDoc", e5[e5.DocNotOpen = 14] = "DocNotOpen", e5[e5.CantCloseDoc = 15] = "CantCloseDoc", e5[e5.CantCreateNewDoc = 16] = "CantCreateNewDoc", e5[e5.CantImportPages = 17] = "CantImportPages", e5[e5.CantCreateAnnot = 18] = "CantCreateAnnot", e5[e5.CantSetAnnotRect = 19] = "CantSetAnnotRect", e5[e5.CantSetAnnotContent = 20] = "CantSetAnnotContent", e5[e5.CantRemoveInkList = 21] = "CantRemoveInkList", e5[e5.CantAddInkStoke = 22] = "CantAddInkStoke", e5[e5.CantReadAttachmentSize = 23] = "CantReadAttachmentSize", e5[e5.CantReadAttachmentContent = 24] = "CantReadAttachmentContent", e5[e5.CantFocusAnnot = 25] = "CantFocusAnnot", e5[e5.CantSelectText = 26] = "CantSelectText", e5[e5.CantSelectOption = 27] = "CantSelectOption", e5[e5.CantCheckField = 28] = "CantCheckField", e5))(bt || {});
    wt = class {
      static create() {
        return new it();
      }
      static resolve(e5) {
        const t3 = new it();
        return t3.resolve(e5), t3;
      }
      static reject(e5) {
        const t3 = new it();
        return t3.reject(e5), t3;
      }
      static abort(e5) {
        const t3 = new it();
        return t3.reject(e5), t3;
      }
    };
    It = class {
      constructor() {
        this.dependencyGraph = /* @__PURE__ */ new Map();
      }
      addNode(e5, t3 = []) {
        this.dependencyGraph.set(e5, new Set(t3));
      }
      hasCircularDependencies() {
        const e5 = /* @__PURE__ */ new Set(), t3 = /* @__PURE__ */ new Set(), n3 = (o3) => {
          e5.add(o3), t3.add(o3);
          const i4 = this.dependencyGraph.get(o3) || /* @__PURE__ */ new Set();
          for (const o4 of i4) if (e5.has(o4)) {
            if (t3.has(o4)) return true;
          } else if (n3(o4)) return true;
          return t3.delete(o3), false;
        };
        for (const t4 of this.dependencyGraph.keys()) if (!e5.has(t4) && n3(t4)) return true;
        return false;
      }
      resolveLoadOrder() {
        if (this.hasCircularDependencies()) throw new Error("Circular dependencies detected");
        const e5 = [], t3 = /* @__PURE__ */ new Set(), n3 = /* @__PURE__ */ new Set(), o3 = (i4) => {
          if (n3.has(i4)) throw new Error("Circular dependency");
          if (t3.has(i4)) return;
          n3.add(i4);
          const r4 = this.dependencyGraph.get(i4) || /* @__PURE__ */ new Set();
          for (const e6 of r4) o3(e6);
          n3.delete(i4), t3.add(i4), e5.push(i4);
        };
        for (const e6 of this.dependencyGraph.keys()) t3.has(e6) || o3(e6);
        return e5;
      }
    };
    Mt = class extends Error {
      constructor(e5) {
        super(e5), this.name = "PluginRegistrationError";
      }
    };
    Pt = class extends Error {
      constructor(e5) {
        super(e5), this.name = "PluginNotFoundError";
      }
    };
    Tt = class extends Error {
      constructor(e5) {
        super(e5), this.name = "CircularDependencyError";
      }
    };
    Et = class extends Error {
      constructor(e5) {
        super(e5), this.name = "PluginConfigurationError";
      }
    };
    At = class {
      constructor(e5, t3) {
        this.store = e5, this.pluginId = t3;
      }
      getState() {
        return this.store.getState().plugins[this.pluginId];
      }
      dispatch(e5) {
        return this.store.dispatchToPlugin(this.pluginId, e5);
      }
      subscribeToState(e5) {
        return this.store.subscribeToPlugin(this.pluginId, (t3, n3, o3) => {
          e5(t3, n3, o3);
        });
      }
      onAction(e5, t3) {
        return this.store.onAction(e5, (e6, n3, o3) => {
          t3(e6, n3.plugins[this.pluginId], o3.plugins[this.pluginId]);
        });
      }
    };
    zt = "LOAD_DOCUMENT";
    Rt = "SET_DOCUMENT";
    Nt = "SET_DOCUMENT_ERROR";
    Lt = "SET_SCALE";
    Ot = "SET_ROTATION";
    Ht = "SET_PAGES";
    Dt = [zt, Rt, Nt, Lt, Ot, Ht];
    Ft = (e5) => ({ type: Ht, payload: e5 });
    Ut = class {
      constructor(e5, t3) {
        this.initialCoreState = t3, this.pluginReducers = {}, this.listeners = [], this.pluginListeners = {}, this.state = { core: t3, plugins: {} }, this.coreReducer = e5;
      }
      addPluginReducer(e5, t3, n3) {
        this.state.plugins[e5] = n3, this.pluginReducers[e5] = t3;
      }
      dispatchToCore(e5) {
        if (!this.coreReducer) return this.getState();
        const t3 = this.getState();
        this.state.core = this.coreReducer(this.state.core, e5);
        const n3 = this.getState();
        return this.listeners.forEach((o3) => o3(e5, n3, t3)), n3;
      }
      dispatchToPlugin(e5, t3, n3 = true) {
        const o3 = this.getState(), i4 = this.pluginReducers[e5];
        if (!i4) return o3;
        const r4 = o3.plugins[e5], a3 = i4(r4, t3);
        this.state.plugins[e5] = a3;
        const s3 = this.getState();
        return n3 && this.listeners.forEach((e6) => e6(t3, s3, o3)), this.pluginListeners[e5] && this.pluginListeners[e5].forEach((e6) => {
          e6(t3, a3, r4);
        }), a3;
      }
      dispatch(e5) {
        const t3 = this.getState();
        this.isCoreAction(e5) && (this.state.core = this.coreReducer(this.state.core, e5));
        for (const n4 in this.pluginReducers) {
          const o3 = this.pluginReducers[n4], i4 = t3.plugins[n4];
          o3 && (this.state.plugins[n4] = o3(i4, e5));
        }
        const n3 = this.getState();
        return this.listeners.forEach((o3) => o3(e5, n3, t3)), n3;
      }
      getState() {
        return { core: { ...this.state.core }, plugins: { ...this.state.plugins } };
      }
      subscribe(e5) {
        return this.listeners.push(e5), () => {
          this.listeners = this.listeners.filter((t3) => t3 !== e5);
        };
      }
      subscribeToPlugin(e5, t3) {
        if (!(e5 in this.state.plugins)) throw new Error(`Plugin state not found for plugin "${e5}". Did you forget to call addPluginReducer?`);
        return this.pluginListeners[e5] || (this.pluginListeners[e5] = []), this.pluginListeners[e5].push(t3), () => {
          this.pluginListeners[e5] = this.pluginListeners[e5].filter((e6) => e6 !== t3), 0 === this.pluginListeners[e5].length && delete this.pluginListeners[e5];
        };
      }
      onAction(e5, t3) {
        return this.subscribe((n3, o3, i4) => {
          n3.type === e5 && t3(n3, o3, i4);
        });
      }
      getPluginStore(e5) {
        if (!(e5 in this.state.plugins)) throw new Error(`Plugin state not found for plugin "${e5}". Did you forget to call addPluginReducer?`);
        return new At(this, e5);
      }
      isCoreAction(e5) {
        return Dt.includes(e5.type);
      }
      destroy() {
        var e5, t3;
        this.listeners.length = 0;
        for (const n3 in this.pluginListeners) null == (t3 = null == (e5 = this.pluginListeners[n3]) ? void 0 : e5.splice) || t3.call(e5, 0);
        this.pluginListeners = {}, this.pluginReducers = {}, this.state.plugins = {}, this.state.core = { ...this.initialCoreState };
      }
    };
    $t = (e5) => e5.pages.map((t3) => t3.map((t4) => ({ ...t4, rotatedSize: We(t4.size, e5.rotation, 1) })));
    jt = (e5, t3) => {
      switch (t3.type) {
        case zt:
          return { ...e5, loading: true, error: null };
        case Rt:
          return { ...e5, document: t3.payload, pages: t3.payload.pages.map((e6) => [e6]), loading: false, error: null };
        case Ot:
          return { ...e5, rotation: t3.payload };
        case Ht:
          return { ...e5, pages: t3.payload };
        case Nt:
          return { ...e5, loading: false, error: t3.payload };
        case Lt:
          return { ...e5, scale: t3.payload };
        default:
          return e5;
      }
    };
    Bt = class {
      constructor(e5, t3) {
        this.plugins = /* @__PURE__ */ new Map(), this.manifests = /* @__PURE__ */ new Map(), this.capabilities = /* @__PURE__ */ new Map(), this.status = /* @__PURE__ */ new Map(), this.configurations = /* @__PURE__ */ new Map(), this.engineInitialized = false, this.initPromise = null, this.pendingRegistrations = [], this.processingRegistrations = [], this.initialized = false, this.isInitializing = false, this.pluginsReadyPromise = null, this.destroyed = false, this.resolver = new It(), this.engine = e5, this.initialCoreState = ((e6) => ({ scale: (null == e6 ? void 0 : e6.scale) ?? 1, rotation: (null == e6 ? void 0 : e6.rotation) ?? Ue.Degree0, document: null, pages: [], loading: false, error: null }))(t3), this.store = new Ut(jt, this.initialCoreState);
      }
      async ensureEngineInitialized() {
        this.engineInitialized || (this.engine.initialize ? (await this.engine.initialize().toPromise(), this.engineInitialized = true) : this.engineInitialized = true);
      }
      registerPlugin(e5, t3) {
        if (this.initialized && !this.isInitializing) throw new Mt("Cannot register plugins after initialization");
        this.validateManifest(e5.manifest), this.store.addPluginReducer(e5.manifest.id, e5.reducer, "function" == typeof e5.initialState ? e5.initialState(this.initialCoreState, { ...e5.manifest.defaultConfig, ...t3 }) : e5.initialState), this.pendingRegistrations.push({ package: e5, config: t3 });
      }
      getStore() {
        return this.store;
      }
      getEngine() {
        return this.engine;
      }
      pluginsReady() {
        return this.pluginsReadyPromise || (this.pluginsReadyPromise = (async () => {
          this.initialized || await this.initialize();
          const e5 = Array.from(this.plugins.values()).map((e6) => "function" == typeof e6.ready ? e6.ready() : Promise.resolve());
          await Promise.all(e5);
        })()), this.pluginsReadyPromise;
      }
      async initialize() {
        if (this.destroyed) throw new Mt("Registry has been destroyed");
        return this.initPromise || (this.initPromise = (async () => {
          var e5;
          if (this.initialized) throw new Mt("Registry is already initialized");
          this.isInitializing = true;
          try {
            if (await this.ensureEngineInitialized(), this.destroyed) return;
            for (; this.pendingRegistrations.length > 0; ) {
              if (this.destroyed) return;
              this.processingRegistrations = [...this.pendingRegistrations], this.pendingRegistrations = [];
              for (const e7 of this.processingRegistrations) {
                const t3 = /* @__PURE__ */ new Set(), n3 = [...e7.package.manifest.requires, ...e7.package.manifest.optional];
                for (const e8 of n3) {
                  const n4 = this.processingRegistrations.find((t4) => t4.package.manifest.provides.includes(e8));
                  n4 && t3.add(n4.package.manifest.id);
                }
                this.resolver.addNode(e7.package.manifest.id, [...t3]);
              }
              const e6 = this.resolver.resolveLoadOrder();
              for (const t3 of e6) {
                const e7 = this.processingRegistrations.find((e8) => e8.package.manifest.id === t3);
                await this.initializePlugin(e7.package.manifest, e7.package.create, e7.config);
              }
              this.processingRegistrations = [], this.resolver = new It();
            }
            for (const t3 of this.plugins.values()) await (null == (e5 = t3.postInitialize) ? void 0 : e5.call(t3).catch((e6) => {
              console.error(`Error in postInitialize for plugin ${t3.id}`, e6), this.status.set(t3.id, "error");
            }));
            this.initialized = true;
          } catch (e6) {
            throw e6 instanceof Error ? new Tt(`Failed to resolve plugin dependencies: ${e6.message}`) : e6;
          } finally {
            this.isInitializing = false;
          }
        })()), this.initPromise;
      }
      async initializePlugin(e5, t3, n3) {
        const o3 = { ...e5.defaultConfig, ...n3 };
        this.validateConfig(e5.id, o3, e5.defaultConfig);
        const i4 = t3(this, this.engine, o3);
        this.validatePlugin(i4);
        for (const t4 of e5.requires) if (!this.capabilities.has(t4)) throw new Mt(`Missing required capability: ${t4} for plugin ${e5.id}`);
        for (const t4 of e5.optional) this.capabilities.has(t4) && console.debug(`Optional capability ${t4} is available for plugin ${e5.id}`);
        console.log("initializePlugin", e5.id, e5.provides);
        for (const t4 of e5.provides) {
          if (this.capabilities.has(t4)) throw new Mt(`Capability ${t4} is already provided by plugin ${this.capabilities.get(t4)}`);
          this.capabilities.set(t4, e5.id);
        }
        this.plugins.set(e5.id, i4), this.manifests.set(e5.id, e5), this.status.set(e5.id, "registered"), this.configurations.set(e5.id, o3);
        try {
          i4.initialize && await i4.initialize(o3), this.status.set(e5.id, "active");
        } catch (t4) {
          throw this.plugins.delete(e5.id), this.manifests.delete(e5.id), console.log("initializePlugin failed", e5.id, e5.provides), e5.provides.forEach((e6) => this.capabilities.delete(e6)), t4;
        }
      }
      getPluginConfig(e5) {
        const t3 = this.configurations.get(e5);
        if (!t3) throw new Pt(`Configuration for plugin ${e5} not found`);
        return t3;
      }
      validateConfig(e5, t3, n3) {
        const o3 = Object.keys(n3).filter((e6) => !t3.hasOwnProperty(e6));
        if (o3.length > 0) throw new Et(`Missing required configuration keys for plugin ${e5}: ${o3.join(", ")}`);
      }
      async updatePluginConfig(e5, t3) {
        const n3 = this.getPlugin(e5);
        if (!n3) throw new Pt(`Plugin ${e5} not found`);
        const o3 = this.manifests.get(e5), i4 = this.configurations.get(e5);
        if (!o3 || !i4) throw new Pt(`Plugin ${e5} not found`);
        const r4 = { ...i4, ...t3 };
        this.validateConfig(e5, r4, o3.defaultConfig), this.configurations.set(e5, r4), n3.initialize && await n3.initialize(r4);
      }
      registerPluginBatch(e5) {
        for (const t3 of e5) this.registerPlugin(t3.package, t3.config);
      }
      async unregisterPlugin(e5) {
        const t3 = this.plugins.get(e5);
        if (!t3) throw new Pt(`Plugin ${e5} is not registered`);
        const n3 = this.manifests.get(e5);
        if (!n3) throw new Pt(`Manifest for plugin ${e5} not found`);
        for (const [t4, o3] of this.manifests.entries()) if (t4 !== e5 && [...o3.requires, ...o3.optional].some((e6) => n3.provides.includes(e6))) throw new Mt(`Cannot unregister plugin ${e5}: plugin ${t4} depends on it`);
        try {
          t3.destroy && await t3.destroy();
          for (const e6 of n3.provides) this.capabilities.delete(e6);
          this.plugins.delete(e5), this.manifests.delete(e5), this.status.delete(e5);
        } catch (t4) {
          throw t4 instanceof Error ? new Error(`Failed to unregister plugin ${e5}: ${t4.message}`) : t4;
        }
      }
      getPlugin(e5) {
        return this.plugins.get(e5) || null;
      }
      getCapabilityProvider(e5) {
        const t3 = this.capabilities.get(e5);
        return t3 ? this.getPlugin(t3) : null;
      }
      hasCapability(e5) {
        return this.capabilities.has(e5);
      }
      getAllPlugins() {
        return Array.from(this.plugins.values());
      }
      getPluginStatus(e5) {
        const t3 = this.status.get(e5);
        if (!t3) throw new Pt(`Plugin ${e5} not found`);
        return t3;
      }
      validatePlugin(e5) {
        if (!e5.id) throw new Mt("Plugin must have an id");
      }
      validateManifest(e5) {
        if (!e5.id) throw new Mt("Manifest must have an id");
        if (!e5.name) throw new Mt("Manifest must have a name");
        if (!e5.version) throw new Mt("Manifest must have a version");
        if (!Array.isArray(e5.provides)) throw new Mt("Manifest must have a provides array");
        if (!Array.isArray(e5.requires)) throw new Mt("Manifest must have a requires array");
        if (!Array.isArray(e5.optional)) throw new Mt("Manifest must have an optional array");
      }
      isDestroyed() {
        return this.destroyed;
      }
      async destroy() {
        var e5;
        if (this.destroyed) throw new Mt("Registry has already been destroyed");
        this.destroyed = true;
        try {
          await this.initPromise;
        } catch {
        }
        for (const t3 of Array.from(this.plugins.values()).reverse()) await (null == (e5 = t3.destroy) ? void 0 : e5.call(t3));
        this.store.destroy(), this.plugins.clear(), this.manifests.clear(), this.capabilities.clear(), this.status.clear(), this.pendingRegistrations.length = 0, this.processingRegistrations.length = 0;
      }
    };
    Wt = class {
      constructor(e5, t3) {
        if (this.id = e5, this.registry = t3, this.debouncedActions = {}, this.unsubscribeFromState = null, this.unsubscribeFromCoreStore = null, e5 !== this.constructor.id) throw new Error(`Plugin ID mismatch: ${e5} !== ${this.constructor.id}`);
        this.coreStore = this.registry.getStore(), this.pluginStore = this.coreStore.getPluginStore(this.id), this.unsubscribeFromState = this.pluginStore.subscribeToState((e6, t4, n3) => {
          this.onStoreUpdated(n3, t4);
        }), this.unsubscribeFromCoreStore = this.coreStore.subscribe((e6, t4, n3) => {
          this.onCoreStoreUpdated(n3, t4);
        }), this.readyPromise = new Promise((e6) => {
          this.readyResolve = e6;
        }), this.readyResolve();
      }
      provides() {
        if (!this._capability) {
          const e5 = this.buildCapability();
          this._capability = Object.freeze(e5);
        }
        return this._capability;
      }
      get state() {
        return this.pluginStore.getState();
      }
      get coreState() {
        return this.coreStore.getState();
      }
      getState() {
        return this.pluginStore.getState();
      }
      getCoreState() {
        return this.coreStore.getState();
      }
      dispatchCoreAction(e5) {
        return this.coreStore.dispatchToCore(e5);
      }
      dispatchToAllPlugins(e5) {
        return this.coreStore.dispatch(e5);
      }
      dispatch(e5) {
        return this.pluginStore.dispatch(e5);
      }
      debouncedDispatch(e5, t3 = 100) {
        const n3 = Date.now();
        return n3 - (this.debouncedActions[e5.type] || 0) >= t3 && (this.debouncedActions[e5.type] = n3, this.dispatch(e5), true);
      }
      subscribe(e5) {
        return this.pluginStore.subscribeToState(e5);
      }
      subscribeToCoreStore(e5) {
        return this.coreStore.subscribe(e5);
      }
      onStoreUpdated(e5, t3) {
      }
      onCoreStoreUpdated(e5, t3) {
      }
      destroy() {
        this.unsubscribeFromState && (this.unsubscribeFromState(), this.unsubscribeFromState = null), this.unsubscribeFromCoreStore && (this.unsubscribeFromCoreStore(), this.unsubscribeFromCoreStore = null);
      }
      ready() {
        return this.readyPromise;
      }
      markReady() {
        this.readyResolve();
      }
      resetReady() {
        this.readyPromise = new Promise((e5) => {
          this.readyResolve = e5;
        });
      }
    };
    Zt = class {
      constructor(e5, t3) {
        this.handler = e5, this.options = t3, this.lastRun = 0, this.handle = (e6) => {
          "debounce" === this.options.mode ? this.debounce(e6) : this.throttle(e6);
        };
      }
      debounce(e5) {
        this.timeoutId && window.clearTimeout(this.timeoutId), this.timeoutId = window.setTimeout(() => {
          this.handler(e5), this.timeoutId = void 0;
        }, this.options.wait);
      }
      throttle(e5) {
        if ("debounce" === this.options.mode) return;
        const t3 = Date.now(), n3 = this.options.throttleMode || "leading-trailing";
        t3 - this.lastRun >= this.options.wait && ("leading-trailing" === n3 && this.handler(e5), this.lastRun = t3), this.timeoutId && window.clearTimeout(this.timeoutId), this.timeoutId = window.setTimeout(() => {
          this.handler(e5), this.lastRun = Date.now(), this.timeoutId = void 0;
        }, this.options.wait - (t3 - this.lastRun));
      }
      destroy() {
        this.timeoutId && window.clearTimeout(this.timeoutId);
      }
    };
    Yt = 0;
    Xt = /* @__PURE__ */ new WeakMap();
    en = le({ registry: null, isInitializing: true, pluginsReady: false });
    an = "https://cdn.jsdelivr.net/npm/@embedpdf/pdfium@1.0.11/dist/pdfium.wasm";
    sn = "viewport";
    ln = { id: sn, name: "Viewport Plugin", version: "1.0.0", provides: ["viewport"], requires: [], optional: [], defaultConfig: { enabled: true, viewportGap: 10, scrollEndDelay: 300 } };
    cn = "SET_VIEWPORT_METRICS";
    dn = "SET_VIEWPORT_SCROLL_METRICS";
    un = "SET_VIEWPORT_GAP";
    hn = "SET_SCROLL_ACTIVITY";
    pn = { viewportGap: 0, viewportMetrics: { width: 0, height: 0, scrollTop: 0, scrollLeft: 0, clientWidth: 0, clientHeight: 0, scrollWidth: 0, scrollHeight: 0, relativePosition: { x: 0, y: 0 } }, isScrolling: false };
    gn = class extends Wt {
      constructor(e5, t3, n3) {
        super(e5, t3), this.id = e5, this.viewportResize$ = Qt(), this.viewportMetrics$ = Qt(), this.scrollMetrics$ = Qt(), this.scrollReq$ = Jt(), this.scrollActivity$ = Qt(), this.rectProvider = null, n3.viewportGap && this.dispatch(/* @__PURE__ */ function(e6) {
          return { type: un, payload: e6 };
        }(n3.viewportGap)), this.scrollEndDelay = n3.scrollEndDelay || 300;
      }
      buildCapability() {
        return { getViewportGap: () => this.state.viewportGap, getMetrics: () => this.state.viewportMetrics, getBoundingRect: () => {
          var e5;
          return (null == (e5 = this.rectProvider) ? void 0 : e5.call(this)) ?? { origin: { x: 0, y: 0 }, size: { width: 0, height: 0 } };
        }, scrollTo: (e5) => this.scrollTo(e5), isScrolling: () => this.state.isScrolling, onScrollChange: this.scrollMetrics$.on, onViewportChange: this.viewportMetrics$.on, onViewportResize: this.viewportResize$.on, onScrollActivity: this.scrollActivity$.on };
      }
      setViewportResizeMetrics(e5) {
        this.dispatch(/* @__PURE__ */ function(e6) {
          return { type: cn, payload: e6 };
        }(e5)), this.viewportResize$.emit(this.state.viewportMetrics);
      }
      setViewportScrollMetrics(e5) {
        (e5.scrollTop !== this.state.viewportMetrics.scrollTop || e5.scrollLeft !== this.state.viewportMetrics.scrollLeft) && (this.dispatch(/* @__PURE__ */ function(e6) {
          return { type: dn, payload: e6 };
        }(e5)), this.bumpScrollActivity(), this.scrollMetrics$.emit({ scrollTop: e5.scrollTop, scrollLeft: e5.scrollLeft }));
      }
      onScrollRequest(e5) {
        return this.scrollReq$.on(e5);
      }
      registerBoundingRectProvider(e5) {
        this.rectProvider = e5;
      }
      bumpScrollActivity() {
        this.debouncedDispatch(/* @__PURE__ */ function(e5) {
          return { type: hn, payload: e5 };
        }(false), this.scrollEndDelay);
      }
      scrollTo(e5) {
        const { x: t3, y: n3, center: o3, behavior: i4 = "auto" } = e5;
        if (o3) {
          const e6 = this.state.viewportMetrics, o4 = t3 - e6.clientWidth / 2, r4 = n3 - e6.clientHeight / 2;
          this.scrollReq$.emit({ x: o4, y: r4, behavior: i4 });
        } else this.scrollReq$.emit({ x: t3, y: n3, behavior: i4 });
      }
      onStoreUpdated(e5, t3) {
        e5 !== t3 && (this.viewportMetrics$.emit(t3.viewportMetrics), e5.isScrolling !== t3.isScrolling && this.scrollActivity$.emit(t3.isScrolling));
      }
      async initialize(e5) {
      }
      async destroy() {
        super.destroy(), this.viewportMetrics$.clear(), this.viewportResize$.clear(), this.scrollMetrics$.clear(), this.scrollReq$.clear(), this.scrollActivity$.clear(), this.rectProvider = null, this.scrollEndTimer && clearTimeout(this.scrollEndTimer);
      }
    };
    gn.id = "viewport";
    mn = gn;
    fn = { manifest: ln, create: (e5, t3, n3) => new mn(sn, e5, n3), reducer: (e5 = pn, t3) => {
      switch (t3.type) {
        case un:
          return { ...e5, viewportGap: t3.payload };
        case cn:
          return { ...e5, viewportMetrics: { width: t3.payload.width, height: t3.payload.height, scrollTop: t3.payload.scrollTop, scrollLeft: t3.payload.scrollLeft, clientWidth: t3.payload.clientWidth, clientHeight: t3.payload.clientHeight, scrollWidth: t3.payload.scrollWidth, scrollHeight: t3.payload.scrollHeight, relativePosition: { x: t3.payload.scrollWidth <= t3.payload.clientWidth ? 0 : t3.payload.scrollLeft / (t3.payload.scrollWidth - t3.payload.clientWidth), y: t3.payload.scrollHeight <= t3.payload.clientHeight ? 0 : t3.payload.scrollTop / (t3.payload.scrollHeight - t3.payload.clientHeight) } } };
        case dn:
          return { ...e5, viewportMetrics: { ...e5.viewportMetrics, scrollTop: t3.payload.scrollTop, scrollLeft: t3.payload.scrollLeft }, isScrolling: true };
        case hn:
          return { ...e5, isScrolling: t3.payload };
        default:
          return e5;
      }
    }, initialState: pn };
    vn = () => rn(mn.id);
    wn = ((e5) => (e5.Vertical = "vertical", e5.Horizontal = "horizontal", e5))(wn || {});
    xn = class {
      constructor(e5) {
        this.pageGap = e5.pageGap ?? 20, this.viewportGap = e5.viewportGap ?? 20, this.bufferSize = e5.bufferSize ?? 2;
      }
      getVisibleRange(e5, t3, n3) {
        const o3 = this.getScrollOffset(e5), i4 = o3, r4 = o3 + this.getClientSize(e5);
        let a3 = 0;
        for (; a3 < t3.length && (t3[a3].offset + t3[a3].height) * n3 <= i4; ) a3++;
        let s3 = a3;
        for (; s3 < t3.length && t3[s3].offset * n3 <= r4; ) s3++;
        return { start: Math.max(0, a3 - this.bufferSize), end: Math.min(t3.length - 1, s3 + this.bufferSize - 1) };
      }
      handleScroll(e5, t3, n3) {
        const o3 = this.getVisibleRange(e5, t3, n3), i4 = t3.slice(o3.start, o3.end + 1), r4 = this.calculatePageVisibility(i4, e5, n3), a3 = r4.map((e6) => e6.pageNumber), s3 = t3.slice(o3.start, o3.end + 1).flatMap((e6) => e6.index), l2 = this.determineCurrentPage(r4), c2 = t3[o3.start], d2 = t3[o3.end], u2 = c2 ? c2.offset * n3 : 0, h2 = d2 ? (t3[t3.length - 1].offset + t3[t3.length - 1].height) * n3 - (d2.offset + d2.height) * n3 : 0;
        return { currentPage: l2, visiblePages: a3, pageVisibilityMetrics: r4, renderedPageIndexes: s3, scrollOffset: { x: e5.scrollLeft, y: e5.scrollTop }, startSpacing: u2, endSpacing: h2 };
      }
      calculatePageVisibility(e5, t3, n3) {
        const o3 = [];
        return e5.forEach((e6) => {
          e6.pageLayouts.forEach((i4) => {
            const r4 = e6.x * n3, a3 = e6.y * n3, s3 = r4 + i4.x * n3, l2 = a3 + i4.y * n3, c2 = i4.rotatedWidth * n3, d2 = i4.rotatedHeight * n3, u2 = t3.scrollLeft, h2 = t3.scrollTop, p2 = u2 + t3.clientWidth, g2 = h2 + t3.clientHeight, m2 = Math.max(s3, u2), f2 = Math.max(l2, h2), v3 = Math.min(s3 + c2, p2), y3 = Math.min(l2 + d2, g2);
            if (m2 < v3 && f2 < y3) {
              const e7 = v3 - m2, t4 = y3 - f2, r5 = c2 * d2, a4 = e7 * t4;
              o3.push({ pageNumber: i4.pageNumber, viewportX: m2 - u2, viewportY: f2 - h2, visiblePercentage: a4 / r5 * 100, original: { pageX: (m2 - s3) / n3, pageY: (f2 - l2) / n3, visibleWidth: e7 / n3, visibleHeight: t4 / n3, scale: 1 }, scaled: { pageX: m2 - s3, pageY: f2 - l2, visibleWidth: e7, visibleHeight: t4, scale: n3 } });
            }
          });
        }), o3;
      }
      determineCurrentPage(e5) {
        if (0 === e5.length) return 1;
        const t3 = Math.max(...e5.map((e6) => e6.visiblePercentage)), n3 = e5.filter((e6) => e6.visiblePercentage === t3);
        return 1 === n3.length ? n3[0].pageNumber : n3.sort((e6, t4) => e6.pageNumber - t4.pageNumber)[0].pageNumber;
      }
      getRectLocationForPage(e5, t3) {
        const n3 = t3.find((t4) => t4.pageNumbers.includes(e5));
        if (!n3) return null;
        const o3 = n3.pageLayouts.find((t4) => t4.pageNumber === e5);
        return o3 ? { origin: { x: n3.x + o3.x, y: n3.y + o3.y }, size: { width: o3.width, height: o3.height } } : null;
      }
      getScrollPositionForPage(e5, t3, n3, o3, i4) {
        const r4 = this.getRectLocationForPage(e5, t3);
        if (!r4) return null;
        const a3 = Ye(r4.origin, n3);
        if (i4) {
          const e6 = (s3 = { width: r4.size.width, height: r4.size.height }, l2 = { x: i4.x, y: i4.y }, c2 = n3, Ye(Ve(s3, l2, o3), c2));
          return { x: a3.x + e6.x + this.viewportGap, y: a3.y + e6.y + this.viewportGap };
        }
        var s3, l2, c2;
        return { x: a3.x + this.viewportGap, y: a3.y + this.viewportGap };
      }
      getRectPositionForPage(e5, t3, n3, o3, i4) {
        const r4 = this.getRectLocationForPage(e5, t3);
        if (!r4) return null;
        const a3 = Ye(r4.origin, n3), s3 = Je({ width: r4.size.width, height: r4.size.height }, i4, o3, n3);
        return { origin: { x: a3.x + s3.origin.x, y: a3.y + s3.origin.y }, size: s3.size };
      }
    };
    kn = class extends xn {
      constructor(e5) {
        super(e5);
      }
      createVirtualItems(e5) {
        let t3 = 0;
        return e5.map((e6, n3) => {
          let o3 = 0;
          const i4 = e6.map((e7) => {
            const t4 = { pageNumber: e7.index + 1, pageIndex: e7.index, x: o3, y: 0, width: e7.size.width, height: e7.size.height, rotatedWidth: e7.rotatedSize.width, rotatedHeight: e7.rotatedSize.height };
            return o3 += e7.rotatedSize.width + this.pageGap, t4;
          }), r4 = e6.reduce((t4, n4, o4) => t4 + n4.rotatedSize.width + (o4 < e6.length - 1 ? this.pageGap : 0), 0), a3 = Math.max(...e6.map((e7) => e7.rotatedSize.height)), s3 = { id: `item-${n3}`, x: 0, y: t3, offset: t3, width: r4, height: a3, pageLayouts: i4, pageNumbers: e6.map((e7) => e7.index + 1), index: n3 };
          return t3 += a3 + this.pageGap, s3;
        });
      }
      getTotalContentSize(e5) {
        if (0 === e5.length) return { width: 0, height: 0 };
        const t3 = Math.max(...e5.map((e6) => e6.width));
        return { width: t3, height: e5[e5.length - 1].y + e5[e5.length - 1].height };
      }
      getScrollOffset(e5) {
        return e5.scrollTop;
      }
      getClientSize(e5) {
        return e5.clientHeight;
      }
    };
    Cn = class extends xn {
      constructor(e5) {
        super(e5);
      }
      createVirtualItems(e5) {
        let t3 = 0;
        return e5.map((e6, n3) => {
          let o3 = 0;
          const i4 = e6.map((e7) => {
            const t4 = { pageNumber: e7.index + 1, pageIndex: e7.index, x: o3, y: 0, width: e7.size.width, height: e7.size.height, rotatedWidth: e7.rotatedSize.width, rotatedHeight: e7.rotatedSize.height };
            return o3 += e7.rotatedSize.width + this.pageGap, t4;
          }), r4 = e6.reduce((t4, n4, o4) => t4 + n4.rotatedSize.width + (o4 < e6.length - 1 ? this.pageGap : 0), 0), a3 = Math.max(...e6.map((e7) => e7.rotatedSize.height)), s3 = { id: `item-${n3}`, x: t3, y: 0, offset: t3, width: r4, height: a3, pageLayouts: i4, pageNumbers: e6.map((e7) => e7.index + 1), index: n3 };
          return t3 += r4 + this.pageGap, s3;
        });
      }
      getTotalContentSize(e5) {
        if (0 === e5.length) return { width: 0, height: 0 };
        const t3 = e5[e5.length - 1].x + e5[e5.length - 1].width, n3 = Math.max(...e5.map((e6) => e6.height));
        return { width: t3, height: n3 };
      }
      getScrollOffset(e5) {
        return e5.scrollLeft;
      }
      getClientSize(e5) {
        return e5.clientWidth;
      }
    };
    Sn = "UPDATE_SCROLL_STATE";
    _n = "UPDATE_TOTAL_PAGES";
    Mn = class extends Wt {
      constructor(e5, t3, n3) {
        var o3, i4, r4, a3;
        super(e5, t3), this.id = e5, this.config = n3, this.currentScale = 1, this.currentRotation = Ue.Degree0, this.currentPage = 1, this.layoutReady = false, this.layout$ = Qt(), this.scroll$ = Qt(), this.state$ = Qt(), this.scrollerLayout$ = Qt(), this.pageChange$ = Qt(), this.layoutReady$ = Qt(), this.viewport = this.registry.getPlugin("viewport").provides(), this.strategyConfig = { pageGap: (null == (o3 = this.config) ? void 0 : o3.pageGap) ?? 10, viewportGap: this.viewport.getViewportGap(), bufferSize: (null == (i4 = this.config) ? void 0 : i4.bufferSize) ?? 2 }, this.strategy = (null == (r4 = this.config) ? void 0 : r4.strategy) === wn.Horizontal ? new Cn(this.strategyConfig) : new kn(this.strategyConfig), this.initialPage = null == (a3 = this.config) ? void 0 : a3.initialPage, this.currentScale = this.coreState.core.scale, this.currentRotation = this.coreState.core.rotation, this.viewport.onViewportChange((e6) => this.commitMetrics(this.computeMetrics(e6)), { mode: "throttle", wait: 250 }), this.coreStore.onAction(Rt, (e6, t4) => {
          const n4 = t4.core.pages.length;
          this.dispatch(/* @__PURE__ */ function(e7) {
            return { type: _n, payload: e7 };
          }(n4)), this.pageChange$.emit({ pageNumber: this.currentPage, totalPages: n4 }), this.refreshAll($t(t4.core), this.viewport.getMetrics());
        }), this.coreStore.onAction(Ot, (e6, t4) => this.refreshAll($t(t4.core), this.viewport.getMetrics())), this.coreStore.onAction(Ht, (e6, t4) => this.refreshAll($t(t4.core), this.viewport.getMetrics()));
      }
      computeLayout(e5) {
        const t3 = this.strategy.createVirtualItems(e5);
        return { virtualItems: t3, totalContentSize: this.strategy.getTotalContentSize(t3) };
      }
      computeMetrics(e5, t3 = this.state.virtualItems) {
        return this.strategy.handleScroll(e5, t3, this.currentScale);
      }
      commit(e5, t3) {
        this.dispatch(In(e5)), null != t3 && t3.layout && this.layout$.emit(t3.layout), null != t3 && t3.metrics && (this.scroll$.emit(t3.metrics), t3.metrics.currentPage !== this.currentPage && (this.currentPage = t3.metrics.currentPage, this.pageChange$.emit({ pageNumber: this.currentPage, totalPages: this.state.totalPages }))), this.scrollerLayout$.emit(this.getScrollerLayoutFromState());
      }
      commitMetrics(e5) {
        this.commit(e5, { metrics: e5 });
      }
      refreshAll(e5, t3) {
        const n3 = this.computeLayout(e5), o3 = this.computeMetrics(t3, n3.virtualItems);
        this.commit({ ...n3, ...o3 }, { layout: n3, metrics: o3 });
      }
      getVirtualItemsFromState() {
        return this.state.virtualItems || [];
      }
      getScrollerLayoutFromState() {
        const e5 = this.coreState.core.scale;
        return ((e6, t3) => ({ startSpacing: e6.startSpacing, endSpacing: e6.endSpacing, totalWidth: e6.totalContentSize.width * t3, totalHeight: e6.totalContentSize.height * t3, pageGap: e6.pageGap * t3, strategy: e6.strategy, items: e6.renderedPageIndexes.map((n3) => ({ ...e6.virtualItems[n3], pageLayouts: e6.virtualItems[n3].pageLayouts.map((e7) => ({ ...e7, rotatedWidth: e7.rotatedWidth * t3, rotatedHeight: e7.rotatedHeight * t3, width: e7.width * t3, height: e7.height * t3 })) })) }))(this.state, e5);
      }
      pushScrollLayout() {
        this.scrollerLayout$.emit(this.getScrollerLayoutFromState());
      }
      onStoreUpdated(e5, t3) {
        this.pushScrollLayout();
      }
      onCoreStoreUpdated(e5, t3) {
        e5.core.scale !== t3.core.scale && (this.currentScale = t3.core.scale, this.commitMetrics(this.computeMetrics(this.viewport.getMetrics()))), e5.core.rotation !== t3.core.rotation && (this.currentRotation = t3.core.rotation);
      }
      setScrollStrategy(e5) {
        if (e5 === wn.Horizontal && this.strategy instanceof Cn || e5 === wn.Vertical && this.strategy instanceof kn) return;
        this.strategy = e5 === wn.Horizontal ? new Cn(this.strategyConfig) : new kn(this.strategyConfig), this.dispatch(In({ strategy: e5 }));
        const t3 = $t(this.coreState.core);
        this.refreshAll(t3, this.viewport.getMetrics());
      }
      setLayoutReady() {
        this.layoutReady || (this.layoutReady = true, this.layoutReady$.emit(true));
      }
      buildCapability() {
        return { onStateChange: this.state$.on, onLayoutChange: this.layout$.on, onScroll: this.scroll$.on, onPageChange: this.pageChange$.on, onScrollerData: this.scrollerLayout$.on, onLayoutReady: this.layoutReady$.on, getCurrentPage: () => this.currentPage, getTotalPages: () => this.state.totalPages, scrollToPage: (e5) => {
          const { pageNumber: t3, behavior: n3 = "smooth", pageCoordinates: o3, center: i4 = false } = e5, r4 = this.getVirtualItemsFromState(), a3 = this.strategy.getScrollPositionForPage(t3, r4, this.currentScale, this.currentRotation, o3);
          a3 && this.viewport.scrollTo({ ...a3, behavior: n3, center: i4 });
        }, scrollToNextPage: (e5 = "smooth") => {
          const t3 = this.getVirtualItemsFromState(), n3 = t3.findIndex((e6) => e6.pageNumbers.includes(this.currentPage));
          if (n3 >= 0 && n3 < t3.length - 1) {
            const o3 = t3[n3 + 1], i4 = this.strategy.getScrollPositionForPage(o3.pageNumbers[0], t3, this.currentScale, this.currentRotation);
            i4 && this.viewport.scrollTo({ ...i4, behavior: e5 });
          }
        }, scrollToPreviousPage: (e5 = "smooth") => {
          const t3 = this.getVirtualItemsFromState(), n3 = t3.findIndex((e6) => e6.pageNumbers.includes(this.currentPage));
          if (n3 > 0) {
            const o3 = t3[n3 - 1], i4 = this.strategy.getScrollPositionForPage(o3.pageNumbers[0], t3, this.currentScale, this.currentRotation);
            i4 && this.viewport.scrollTo({ ...i4, behavior: e5 });
          }
        }, getMetrics: this.getMetrics.bind(this), getLayout: this.getLayout.bind(this), getRectPositionForPage: this.getRectPositionForPage.bind(this), getPageGap: () => this.state.pageGap, getScrollerLayout: () => this.getScrollerLayoutFromState(), setScrollStrategy: (e5) => this.setScrollStrategy(e5) };
      }
      getMetrics(e5) {
        const t3 = e5 || this.viewport.getMetrics(), n3 = this.getVirtualItemsFromState();
        return this.strategy.handleScroll(t3, n3, this.currentScale);
      }
      getLayout() {
        return { virtualItems: this.state.virtualItems, totalContentSize: this.state.totalContentSize };
      }
      getRectPositionForPage(e5, t3, n3, o3) {
        return this.strategy.getRectPositionForPage(e5 + 1, this.state.virtualItems, n3 ?? this.currentScale, o3 ?? this.currentRotation, t3);
      }
      async initialize() {
      }
      async destroy() {
        this.layout$.clear(), this.scroll$.clear(), this.pageChange$.clear(), this.state$.clear(), this.scrollerLayout$.clear(), this.layoutReady$.clear(), super.destroy();
      }
    };
    Mn.id = "scroll";
    Pn = Mn;
    Tn = "scroll";
    En = { currentPage: 1, visiblePages: [], pageVisibilityMetrics: [], renderedPageIndexes: [], scrollOffset: { x: 0, y: 0 }, startSpacing: 0, endSpacing: 0 };
    An = { manifest: { id: Tn, name: "Scroll Plugin", version: "1.0.0", provides: ["scroll"], requires: ["viewport"], optional: [], defaultConfig: { enabled: true, pageGap: 10 } }, create: (e5, t3, n3) => new Pn(Tn, e5, n3), reducer: (e5, t3) => {
      switch (t3.type) {
        case _n:
          return { ...e5, totalPages: t3.payload };
        case Lt:
          return { ...e5, scale: t3.payload };
        case Sn:
          return { ...e5, ...t3.payload };
        case "SET_DESIRED_SCROLL_POSITION":
          return { ...e5, desiredScrollPosition: t3.payload };
        default:
          return e5;
      }
    }, initialState: (e5, t3) => ((e6, t4) => ({ virtualItems: [], totalPages: e6.pages.length, totalContentSize: { width: 0, height: 0 }, desiredScrollPosition: { x: 0, y: 0 }, strategy: t4.strategy ?? wn.Vertical, pageGap: t4.pageGap ?? 10, scale: e6.scale, ...En }))(e5, t3) };
    zn = () => rn(Pn.id);
    Nn = ((e5) => (e5.None = "none", e5.Odd = "odd", e5.Even = "even", e5))(Nn || {});
    Ln = "SET_SPREAD_MODE";
    Hn = class extends Wt {
      constructor(e5, t3, n3) {
        super(e5, t3), this.spreadEmitter$ = Jt(), this.resetReady(), this.dispatch(On(n3.defaultSpreadMode ?? "none"));
        t3.getPlugin("loader").provides().onDocumentLoaded((e6) => this.documentLoaded(e6));
      }
      async initialize(e5) {
        e5.defaultSpreadMode && this.dispatch(On(e5.defaultSpreadMode));
      }
      documentLoaded(e5) {
        this.dispatchCoreAction(Ft(this.getSpreadPagesObjects(e5.pages))), this.markReady();
      }
      getSpreadPagesObjects(e5) {
        if (!e5.length) return [];
        switch (this.state.spreadMode) {
          case "none":
          default:
            return e5.map((e6) => [e6]);
          case "odd":
            return Array.from({ length: Math.ceil(e5.length / 2) }, (t3, n3) => e5.slice(2 * n3, 2 * n3 + 2));
          case "even":
            return [[e5[0]], ...Array.from({ length: Math.ceil((e5.length - 1) / 2) }, (t3, n3) => e5.slice(1 + 2 * n3, 1 + 2 * n3 + 2))];
        }
      }
      setSpreadMode(e5) {
        const t3 = this.state.spreadMode, n3 = this.coreState.core.document;
        if (!n3) throw new Error("Document not loaded");
        t3 !== e5 && (this.dispatch(On(e5)), this.dispatchCoreAction(Ft(this.getSpreadPagesObjects(n3.pages))), this.notifySpreadChange(e5));
      }
      notifySpreadChange(e5) {
        this.spreadEmitter$.emit(e5);
      }
      buildCapability() {
        return { onSpreadChange: this.spreadEmitter$.on, setSpreadMode: (e5) => this.setSpreadMode(e5), getSpreadMode: () => this.state.spreadMode, getSpreadPagesObjects: (e5) => this.getSpreadPagesObjects(e5) };
      }
      async destroy() {
        this.spreadEmitter$.clear();
      }
    };
    Hn.id = "spread";
    Dn = "spread";
    Fn = { spreadMode: "none" };
    Un = { manifest: { id: Dn, name: "Spread Plugin", version: "1.0.0", provides: ["spread"], requires: ["loader"], optional: [], defaultConfig: { enabled: true } }, create: (e5, t3, n3) => new Hn(Dn, e5, n3), reducer: (e5 = Fn, t3) => t3.type === Ln ? { ...e5, spreadMode: t3.payload } : e5, initialState: Fn };
    $n = class {
      async load(e5) {
        const { pdfFile: t3, options: n3, engine: o3 } = e5, i4 = o3.openDocumentUrl(t3, n3);
        return new Promise((e6, t4) => {
          i4.wait((t5) => e6(t5), (e7) => {
            "abort" === e7.type ? t4(new Error(`PDF loading aborted: ${e7.reason}`)) : t4(new Error(`PDF loading failed: ${e7.reason}`));
          });
        });
      }
    };
    jn = class {
      async load(e5) {
        const { pdfFile: t3, options: n3, engine: o3 } = e5, i4 = o3.openDocumentFromBuffer(t3, (null == n3 ? void 0 : n3.password) || "");
        return new Promise((e6, t4) => {
          i4.wait((t5) => e6(t5), (e7) => {
            "abort" === e7.type ? t4(new Error(`PDF loading aborted: ${e7.reason}`)) : t4(new Error(`PDF loading failed: ${e7.reason}`));
          });
        });
      }
    };
    Bn = class {
      constructor() {
        this.strategies = /* @__PURE__ */ new Map(), this.strategyResolvers = [];
        const e5 = new jn();
        this.registerStrategy("url", new $n()), this.registerStrategy("buffer", e5), this.addStrategyResolver((e6) => function(e7) {
          return "url" === e7.type;
        }(e6) ? this.strategies.get("url") : this.strategies.get("buffer"));
      }
      registerStrategy(e5, t3) {
        this.strategies.set(e5, t3);
      }
      getStrategy(e5) {
        return this.strategies.get(e5);
      }
      addStrategyResolver(e5) {
        this.strategyResolvers.push(e5);
      }
      async loadDocument(e5) {
        try {
          const t3 = this.resolveStrategy(e5);
          if (!t3) throw new Error("No suitable strategy found for the given options");
          return await t3.load(e5);
        } catch (e6) {
          throw console.error("Error loading document:", e6), e6;
        }
      }
      resolveStrategy(e5) {
        for (const t3 of this.strategyResolvers) {
          const n3 = t3(e5);
          if (n3) return n3;
        }
      }
    };
    Gn = class extends Wt {
      constructor(e5, t3, n3) {
        super(e5, t3), this.id = e5, this.engine = n3, this.loaderHandlers$ = Qt(), this.documentLoadedHandlers$ = Qt(), this.openFileRequest$ = Jt(), this.documentLoader = new Bn();
      }
      buildCapability() {
        return { onLoaderEvent: this.loaderHandlers$.on, onDocumentLoaded: this.documentLoadedHandlers$.on, onOpenFileRequest: this.openFileRequest$.on, openFileDialog: () => this.openFileRequest$.emit("open"), loadDocument: (e5) => this.loadDocument(e5), registerStrategy: (e5, t3) => this.documentLoader.registerStrategy(e5, t3), getDocument: () => this.loadedDocument, addStrategyResolver: (e5) => this.documentLoader.addStrategyResolver(e5) };
      }
      async initialize(e5) {
        e5.defaultStrategies && Object.entries(e5.defaultStrategies).forEach(([e6, t3]) => {
          this.documentLoader.registerStrategy(e6, t3);
        }), e5.loadingOptions && (this.loadingOptions = e5.loadingOptions);
      }
      async postInitialize() {
        this.loadingOptions && await this.loadDocument(this.loadingOptions);
      }
      async loadDocument(e5) {
        try {
          this.loaderHandlers$.emit({ type: "start", documentId: e5.pdfFile.id }), this.dispatchCoreAction({ type: zt });
          const t3 = await this.documentLoader.loadDocument({ ...e5, engine: this.engine });
          return this.dispatchCoreAction(/* @__PURE__ */ ((e6) => ({ type: Rt, payload: e6 }))(t3)), this.loadedDocument = t3, this.loaderHandlers$.emit({ type: "complete", documentId: e5.pdfFile.id }), this.documentLoadedHandlers$.emit(t3), t3;
        } catch (t3) {
          const n3 = { type: "error", documentId: e5.pdfFile.id, error: t3 instanceof Error ? t3 : new Error(String(t3)) };
          throw this.loaderHandlers$.emit(n3), t3;
        }
      }
      async destroy() {
        this.loaderHandlers$.clear(), this.documentLoadedHandlers$.clear(), this.openFileRequest$.clear(), super.destroy();
      }
    };
    Gn.id = "loader";
    Wn = Gn;
    Zn = "loader";
    qn = { manifest: { id: Zn, name: "Loader Plugin", version: "1.0.0", provides: ["loader"], requires: [], optional: [], metadata: { name: "Loader Plugin", description: "A plugin for loading PDF documents", version: "1.0.0", author: "EmbedPDF", license: "MIT" }, defaultConfig: { enabled: true } }, create: (e5, t3) => new Wn(Zn, e5, t3), reducer: () => {
    }, initialState: {} };
    Yn = class {
      constructor(e5, t3) {
        this.children = [], this.updateCallbacks = [], this.hadUpdateBeforeListeners = false, this.componentConfig = e5;
        const n3 = e5.props || {};
        if ("function" == typeof n3) {
          const t4 = n3(e5.initialState);
          this.props = { ...t4, id: e5.id };
        } else this.props = { ...n3, id: e5.id };
        this.type = e5.type, this.registry = t3;
      }
      addChild(e5, t3, n3 = 0, o3) {
        this.children.push({ id: e5, component: t3, priority: n3, className: o3 }), this.sortChildren();
      }
      sortChildren() {
        this.children.sort((e5, t3) => e5.priority - t3.priority);
      }
      removeChild(e5) {
        this.children = this.children.filter((t3) => t3.component !== e5);
      }
      clearChildren() {
        this.children = [];
      }
      get getRenderType() {
        return this.componentConfig.render || this.type;
      }
      getRenderer() {
        return this.registry[this.getRenderType];
      }
      getChildren() {
        return this.children;
      }
      getChildContext(e5) {
        const t3 = this.componentConfig.getChildContext;
        return "function" == typeof t3 ? { ...e5, ...t3(this.props) } : t3 && "object" == typeof t3 ? { ...e5, ...t3 } : e5;
      }
      update(e5) {
        const { id: t3, ...n3 } = e5;
        this.props = { ...this.props, ...n3 }, 0 === this.updateCallbacks.length && (this.hadUpdateBeforeListeners = true), this.notifyUpdate();
      }
      onUpdate(e5) {
        return this.updateCallbacks.push(e5), this.hadUpdateBeforeListeners;
      }
      offUpdate(e5) {
        this.updateCallbacks = this.updateCallbacks.filter((t3) => t3 !== e5);
      }
      notifyUpdate() {
        this.updateCallbacks.forEach((e5) => e5());
      }
    };
    Xn = "UI_INIT_COMPONENTS";
    Kn = "UI_SET_HEADER_VISIBLE";
    Jn = "UI_TOGGLE_PANEL";
    Qn = "UI_SHOW_COMMAND_MENU";
    eo = "UI_HIDE_COMMAND_MENU";
    to = "UI_UPDATE_COMPONENT_STATE";
    no = (e5) => ({ type: eo, payload: e5 });
    oo = { panel: {}, header: {}, groupedItems: {}, divider: {}, iconButton: {}, tabButton: {}, selectButton: {}, custom: {}, floating: {}, commandMenu: {} };
    so = class e4 {
      constructor(e5 = {}, t3) {
        this.registry = {}, this.shortcutMap = {}, this.eventController = /* @__PURE__ */ function() {
          const e6 = /* @__PURE__ */ new Map();
          return { emit(t4, n3) {
            const o3 = e6.get(t4);
            o3 && o3.forEach((e7) => e7(n3));
          }, on(t4, n3) {
            return e6.has(t4) || e6.set(t4, /* @__PURE__ */ new Set()), e6.get(t4).add(n3), () => this.off(t4, n3);
          }, off(t4, n3) {
            const o3 = e6.get(t4);
            o3 && (o3.delete(n3), 0 === o3.size && e6.delete(t4));
          } };
        }(), this.pluginRegistry = t3, this.registerItems(e5), this.setupKeyboardListeners();
      }
      get state() {
        return this.pluginRegistry.getStore().getState();
      }
      registerItem(e5) {
        this.registry[e5.id] && console.warn(`Menu item with ID ${e5.id} already exists and will be overwritten`), this.registry[e5.id] = e5, "shortcut" in e5 && e5.shortcut && (this.shortcutMap[this.normalizeShortcut(e5.shortcut)] = e5.id);
      }
      registerItems(e5) {
        Object.values(e5).forEach((e6) => {
          this.registerItem(e6);
        });
      }
      resolve(e5) {
        return io(this.registry[e5], this.state);
      }
      getMenuItem(e5) {
        const t3 = this.resolve(e5);
        if (t3) return { item: t3, isGroup: "group" === t3.type, isMenu: "menu" === t3.type, isAction: "action" === t3.type };
      }
      getAction(e5) {
        const t3 = this.getMenuItem(e5);
        if (t3 && t3.isAction) return t3.item;
      }
      getMenuOrAction(e5) {
        const t3 = this.getMenuItem(e5);
        if (t3) return t3.item;
      }
      getAllItems() {
        return { ...this.registry };
      }
      getItemsByIds(e5) {
        return e5.map((e6) => this.resolve(e6)).filter((e6) => void 0 !== e6);
      }
      getChildItems(e5, t3 = {}) {
        const n3 = this.resolve(e5);
        if (!n3 || !("children" in n3) || !n3.children?.length) return [];
        const o3 = this.getItemsByIds(n3.children);
        if (!t3.flatten) return o3;
        const i4 = [];
        for (const e6 of o3) if ("group" === e6.type) i4.push(e6);
        else if ("menu" === e6.type) {
          const t4 = this.getChildItems(e6.id, { flatten: true });
          i4.push(...t4);
        } else i4.push(e6);
        return i4;
      }
      executeCommand(t3, n3 = {}) {
        const o3 = this.getMenuItem(t3);
        if (!o3) return void console.warn(`Menu item '${t3}' not found`);
        if ("group" === o3.item.type) return void console.warn(`Cannot execute group '${t3}'`);
        const { item: i4 } = o3;
        i4.disabled ? console.warn(`Menu item '${t3}' is disabled`) : o3.isAction ? (i4.action(this.pluginRegistry, this.state), this.eventController.emit(e4.EVENTS.COMMAND_EXECUTED, { command: i4, source: n3.source || "api" })) : "children" in i4 && i4.children?.length && this.handleSubmenu(i4, n3);
      }
      executeShortcut(t3) {
        const n3 = this.normalizeShortcut(t3), o3 = this.shortcutMap[n3];
        return !!o3 && (this.executeCommand(o3, { source: "shortcut" }), this.eventController.emit(e4.EVENTS.SHORTCUT_EXECUTED, { shortcut: n3, itemId: o3 }), true);
      }
      on(e5, t3) {
        return this.eventController.on(e5, t3);
      }
      off(e5, t3) {
        this.eventController.off(e5, t3);
      }
      handleSubmenu(t3, n3) {
        this.eventController.emit(e4.EVENTS.MENU_REQUESTED, { menuId: t3.id, triggerElement: n3.triggerElement, position: n3.position, flatten: n3.flatten || false });
      }
      setupKeyboardListeners() {
        if ("undefined" == typeof window) return;
        document.addEventListener("keydown", (e5) => {
          const t3 = e5.target;
          if ("INPUT" === t3.tagName || "TEXTAREA" === t3.tagName || t3.isContentEditable) return;
          const n3 = this.buildShortcutString(e5);
          n3 && this.executeShortcut(n3) && e5.preventDefault();
        });
      }
      buildShortcutString(e5) {
        const t3 = [];
        e5.ctrlKey && t3.push("Ctrl"), e5.shiftKey && t3.push("Shift"), e5.altKey && t3.push("Alt"), e5.metaKey && t3.push("Meta");
        const n3 = e5.key;
        if (!["Control", "Shift", "Alt", "Meta"].includes(n3)) {
          const e6 = 1 === n3.length ? n3.toUpperCase() : n3;
          return [...t3, e6].join("+");
        }
        return null;
      }
      normalizeShortcut(e5) {
        return e5.split("+").map((e6) => e6.trim()).join("+");
      }
      capabilities() {
        return { registerItem: this.registerItem.bind(this), registerItems: this.registerItems.bind(this), executeCommand: this.executeCommand.bind(this), getAction: this.getAction.bind(this), getMenuOrAction: this.getMenuOrAction.bind(this), getChildItems: this.getChildItems.bind(this), getItemsByIds: this.getItemsByIds.bind(this), getAllItems: this.getAllItems.bind(this) };
      }
    };
    so.EVENTS = { COMMAND_EXECUTED: "menu:command_executed", MENU_REQUESTED: "menu:requested", SHORTCUT_EXECUTED: "menu:shortcut_executed" };
    lo = so;
    co = class {
      constructor(e5) {
        this.icons = {}, this.registerIcons(e5);
      }
      registerIcon(e5) {
        this.icons[e5.id] && console.warn(`Icon with ID ${e5.id} already exists and will be overwritten`), this.icons[e5.id] = e5;
      }
      registerIcons(e5) {
        Array.isArray(e5) ? e5.forEach((e6) => this.registerIcon(e6)) : Object.entries(e5).forEach(([e6, t3]) => this.registerIcon(t3));
      }
      getAllIcons() {
        return { ...this.icons };
      }
      getIcon(e5) {
        return this.icons[e5];
      }
      isSvgString(e5) {
        return e5.trim().startsWith("<svg") && e5.includes("</svg>");
      }
      isSvgDataUri(e5) {
        return e5.startsWith("data:image/svg+xml;base64,");
      }
      getSvgString(e5) {
        return this.isSvgString(e5) ? e5 : this.isSvgDataUri(e5) ? this.dataUriToSvgString(e5) : this.getIcon(e5)?.svg;
      }
      dataUriToSvgString(e5) {
        const t3 = e5.substring(26);
        return atob(t3);
      }
      svgStringToDataUri(e5) {
        return `data:image/svg+xml;base64,${btoa(e5)}`;
      }
      capabilities() {
        return { registerIcon: this.registerIcon.bind(this), registerIcons: this.registerIcons.bind(this), getIcon: this.getIcon.bind(this), getAllIcons: this.getAllIcons.bind(this), getSvgString: this.getSvgString.bind(this), isSvgString: this.isSvgString.bind(this), isSvgDataUri: this.isSvgDataUri.bind(this), dataUriToSvgString: this.dataUriToSvgString.bind(this), svgStringToDataUri: this.svgStringToDataUri.bind(this) };
      }
    };
    uo = class extends Wt {
      constructor(e5, t3, n3) {
        super(e5, t3), this.componentRenderers = {}, this.components = {}, this.mapStateCallbacks = {}, this.globalStoreSubscription = () => {
        }, this.config = n3, this.menuManager = new lo(n3.menuItems || {}, this.registry), this.iconManager = new co(n3.icons || []), this.setupCommandEventHandlers(), this.globalStoreSubscription = this.registry.getStore().subscribe((e6, t4) => {
          this.onGlobalStoreChange(t4);
        });
      }
      async initialize() {
        this.buildComponents(), this.linkGroupedItems(), this.setInitialStateUIComponents();
      }
      setupCommandEventHandlers() {
        this.menuManager.on(lo.EVENTS.MENU_REQUESTED, (e5) => {
          const { menuId: t3, triggerElement: n3, position: o3, flatten: i4 } = e5;
          if (this.state.commandMenu.commandMenu?.activeCommand === t3) return this.dispatch(no({ id: "commandMenu" }));
          this.dispatch({ type: Qn, payload: { id: "commandMenu", commandId: t3, triggerElement: n3, position: o3, flatten: i4 } });
        }), this.menuManager.on(lo.EVENTS.COMMAND_EXECUTED, (e5) => {
          console.log("Command executed:", e5.command.id, "source:", e5.source);
        });
      }
      addComponent(e5, t3) {
        this.components[e5] && console.warn(`Component with ID ${e5} already exists and will be overwritten`);
        const n3 = new Yn(t3, this.componentRenderers);
        return this.components[e5] = n3, "function" == typeof t3.mapStateToProps && (this.mapStateCallbacks[e5] = t3.mapStateToProps), n3;
      }
      buildComponents() {
        Object.entries(this.config.components).forEach(([e5, t3]) => {
          this.addComponent(e5, t3);
        });
      }
      linkGroupedItems() {
        Object.values(this.components).forEach((e5) => {
          if (ho(e5)) {
            const t3 = e5.componentConfig;
            t3.slots?.forEach((n3) => {
              const o3 = this.components[n3.componentId];
              o3 ? e5.addChild(n3.componentId, o3, n3.priority, n3.className) : console.warn(`Child component ${n3.componentId} not found for GroupedItems ${t3.id}`);
            });
          }
        });
      }
      setInitialStateUIComponents() {
        const e5 = oo;
        Object.entries(this.config.components).forEach(([t3, n3]) => {
          n3.initialState ? e5[n3.type][t3] = n3.initialState : e5[n3.type][t3] = {};
        }), this.dispatch({ type: Xn, payload: e5 });
      }
      onGlobalStoreChange(e5) {
        for (const [t3, n3] of Object.entries(this.components)) {
          const o3 = this.mapStateCallbacks[t3];
          if (!o3) continue;
          const { id: i4, ...r4 } = n3.props, a3 = o3(e5, r4);
          Vt(r4, { ...r4, ...a3 }) || n3.update(a3);
        }
      }
      addSlot(e5, t3, n3, o3) {
        const i4 = this.components[e5];
        if (!i4) return void console.error(`Parent component ${e5} not found`);
        if (!ho(i4)) return void console.error(`Parent component ${e5} does not support slots`);
        const r4 = this.components[t3];
        if (!r4) return void console.error(`Child component ${t3} not found`);
        const a3 = i4.getChildren();
        let s3 = n3;
        if (void 0 === s3) {
          s3 = (a3.length > 0 ? Math.max(...a3.map((e6) => e6.priority)) : 0) + 10;
        }
        i4.addChild(t3, r4, s3, o3);
      }
      buildCapability() {
        return { registerComponentRenderer: (e5, t3) => {
          this.componentRenderers[e5] = t3;
        }, getComponent: (e5) => this.components[e5], registerComponent: this.addComponent.bind(this), getCommandMenu: () => Object.values(this.components).find((e5) => function(e6) {
          return "commandMenu" === e6.type;
        }(e5)), hideCommandMenu: () => this.debouncedDispatch(no({ id: "commandMenu" }), 100), getFloatingComponents: (e5) => Object.values(this.components).filter((e6) => mo(e6)).filter((t3) => !e5 || t3.props.scrollerPosition === e5), getHeadersByPlacement: (e5) => Object.values(this.components).filter((e6) => po(e6)).filter((t3) => t3.props.placement === e5), getPanelsByLocation: (e5) => Object.values(this.components).filter((e6) => go(e6)).filter((t3) => t3.props.location === e5), addSlot: this.addSlot.bind(this), togglePanel: (e5) => {
          this.dispatch(/* @__PURE__ */ ((e6) => ({ type: Jn, payload: e6 }))(e5));
        }, setHeaderVisible: (e5) => {
          this.dispatch(/* @__PURE__ */ ((e6) => ({ type: Kn, payload: e6 }))(e5));
        }, updateComponentState: (e5) => {
          this.dispatch(/* @__PURE__ */ ((e6) => ({ type: to, payload: e6 }))(e5));
        }, ...this.iconManager.capabilities(), ...this.menuManager.capabilities() };
      }
      async destroy() {
        this.globalStoreSubscription(), this.components = {}, this.componentRenderers = {}, this.mapStateCallbacks = {};
      }
    };
    uo.id = "ui";
    fo = "ui";
    vo = { manifest: { id: fo, name: "UI Plugin", version: "1.0.0", provides: ["ui"], requires: [], optional: [], defaultConfig: { enabled: true, components: {} } }, create: (e5, t3, n3) => new uo(fo, e5, n3), reducer: (e5 = oo, t3) => {
      switch (t3.type) {
        case Xn:
          return { ...e5, ...t3.payload };
        case Jn: {
          const n3 = e5.panel[t3.payload.id] || {}, { open: o3, visibleChild: i4 } = t3.payload, r4 = n3.visibleChild;
          let a3 = n3.open, s3 = n3.visibleChild;
          return i4 === r4 ? a3 = void 0 !== o3 ? o3 : !n3.open : (s3 = i4, a3 = true), { ...e5, panel: { ...e5.panel, [t3.payload.id]: { ...n3, open: a3, visibleChild: s3 } } };
        }
        case Kn:
          return { ...e5, header: { ...e5.header, [t3.payload.id]: { ...e5.header[t3.payload.id], visible: t3.payload.visible, visibleChild: t3.payload.visibleChild } } };
        case Qn:
          return { ...e5, commandMenu: { ...e5.commandMenu, [t3.payload.id]: { activeCommand: t3.payload.commandId, triggerElement: t3.payload.triggerElement, position: t3.payload.position, open: true, flatten: t3.payload.flatten } } };
        case eo:
          return { ...e5, commandMenu: { ...e5.commandMenu, [t3.payload.id]: { ...e5.commandMenu[t3.payload.id], open: false, activeCommand: null, triggerElement: void 0, position: void 0, flatten: false } } };
        case to: {
          const { componentType: n3, componentId: o3, patch: i4 } = t3.payload;
          if (!e5[n3] || !e5[n3][o3]) return e5;
          const r4 = e5[n3][o3], a3 = Object.fromEntries(Object.entries(i4).filter(([e6]) => e6 in r4));
          return 0 === Object.keys(a3).length ? e5 : { ...e5, [n3]: { ...e5[n3], [o3]: { ...r4, ...a3 } } };
        }
        default:
          return e5;
      }
    }, initialState: oo };
    yo = ["id", "children", "onClick", "active", "disabled", "className", "tooltip", "ref"];
    wo = Math.min;
    xo = Math.max;
    ko = Math.round;
    Co = Math.floor;
    So = (e5) => ({ x: e5, y: e5 });
    _o = { left: "right", right: "left", bottom: "top", top: "bottom" };
    Io = { start: "end", end: "start" };
    di = So(0);
    xi = { convertOffsetParentRelativeRectToViewportRelativeRect: function(e5) {
      let { elements: t3, rect: n3, offsetParent: o3, strategy: i4 } = e5;
      const r4 = "fixed" === i4, a3 = Go(o3), s3 = !!t3 && Ko(t3.floating);
      if (o3 === a3 || s3 && r4) return n3;
      let l2 = { scrollLeft: 0, scrollTop: 0 }, c2 = So(1);
      const d2 = So(0), u2 = qo(o3);
      if ((u2 || !u2 && !r4) && (("body" !== jo(o3) || Yo(a3)) && (l2 = ni(o3)), qo(o3))) {
        const e6 = hi(o3);
        c2 = ci(o3), d2.x = e6.x + o3.clientLeft, d2.y = e6.y + o3.clientTop;
      }
      const h2 = !a3 || u2 || r4 ? So(0) : gi(a3, l2, true);
      return { width: n3.width * c2.x, height: n3.height * c2.y, x: n3.x * c2.x - l2.scrollLeft * c2.x + d2.x + h2.x, y: n3.y * c2.y - l2.scrollTop * c2.y + d2.y + h2.y };
    }, getDocumentElement: Go, getClippingRect: function(e5) {
      let { element: t3, boundary: n3, rootBoundary: o3, strategy: i4 } = e5;
      const r4 = [..."clippingAncestors" === n3 ? Ko(t3) ? [] : function(e6, t4) {
        const n4 = t4.get(e6);
        if (n4) return n4;
        let o4 = ri(e6, [], false).filter((e7) => Zo(e7) && "body" !== jo(e7)), i5 = null;
        const r5 = "fixed" === ti(e6).position;
        let a4 = r5 ? oi(e6) : e6;
        for (; Zo(a4) && !ei(a4); ) {
          const t5 = ti(a4), n5 = Jo(a4);
          n5 || "fixed" !== t5.position || (i5 = null), (r5 ? !n5 && !i5 : !n5 && "static" === t5.position && i5 && ["absolute", "fixed"].includes(i5.position) || Yo(a4) && !n5 && fi(e6, a4)) ? o4 = o4.filter((e7) => e7 !== a4) : i5 = t5, a4 = oi(a4);
        }
        return t4.set(e6, o4), o4;
      }(t3, this._c) : [].concat(n3), o3], a3 = r4[0], s3 = r4.reduce((e6, n4) => {
        const o4 = mi(t3, n4, i4);
        return e6.top = xo(o4.top, e6.top), e6.right = wo(o4.right, e6.right), e6.bottom = wo(o4.bottom, e6.bottom), e6.left = xo(o4.left, e6.left), e6;
      }, mi(t3, a3, i4));
      return { width: s3.right - s3.left, height: s3.bottom - s3.top, x: s3.left, y: s3.top };
    }, getOffsetParent: wi, getElementRects: async function(e5) {
      const t3 = this.getOffsetParent || wi, n3 = this.getDimensions, o3 = await n3(e5.floating);
      return { reference: vi(e5.reference, await t3(e5.floating), e5.strategy), floating: { x: 0, y: 0, width: o3.width, height: o3.height } };
    }, getClientRects: function(e5) {
      return Array.from(e5.getClientRects());
    }, getDimensions: function(e5) {
      const { width: t3, height: n3 } = si(e5);
      return { width: t3, height: n3 };
    }, getScale: ci, isElement: Zo, isRTL: function(e5) {
      return "rtl" === ti(e5).direction;
    } };
    Si = function(e5) {
      return void 0 === e5 && (e5 = 0), { name: "offset", options: e5, async fn(t3) {
        var n3, o3;
        const { x: i4, y: r4, placement: a3, middlewareData: s3 } = t3, l2 = await async function(e6, t4) {
          const { placement: n4, platform: o4, elements: i5 } = e6, r5 = await (null == o4.isRTL ? void 0 : o4.isRTL(i5.floating)), a4 = To(n4), s4 = Eo(n4), l3 = "y" === Ro(n4), c2 = ["left", "top"].includes(a4) ? -1 : 1, d2 = r5 && l3 ? -1 : 1, u2 = Po(t4, e6);
          let { mainAxis: h2, crossAxis: p2, alignmentAxis: g2 } = "number" == typeof u2 ? { mainAxis: u2, crossAxis: 0, alignmentAxis: null } : { mainAxis: u2.mainAxis || 0, crossAxis: u2.crossAxis || 0, alignmentAxis: u2.alignmentAxis };
          return s4 && "number" == typeof g2 && (p2 = "end" === s4 ? -1 * g2 : g2), l3 ? { x: p2 * d2, y: h2 * c2 } : { x: h2 * c2, y: p2 * d2 };
        }(t3, e5);
        return a3 === (null == (n3 = s3.offset) ? void 0 : n3.placement) && null != (o3 = s3.arrow) && o3.alignmentOffset ? {} : { x: i4 + l2.x, y: r4 + l2.y, data: { ...l2, placement: a3 } };
      } };
    };
    _i = function(e5) {
      return void 0 === e5 && (e5 = {}), { name: "shift", options: e5, async fn(t3) {
        const { x: n3, y: o3, placement: i4 } = t3, { mainAxis: r4 = true, crossAxis: a3 = false, limiter: s3 = { fn: (e6) => {
          let { x: t4, y: n4 } = e6;
          return { x: t4, y: n4 };
        } }, ...l2 } = Po(e5, t3), c2 = { x: n3, y: o3 }, d2 = await Uo(t3, l2), u2 = Ro(To(i4)), h2 = Ao(u2);
        let p2 = c2[h2], g2 = c2[u2];
        if (r4) {
          const e6 = "y" === h2 ? "bottom" : "right";
          p2 = Mo(p2 + d2["y" === h2 ? "top" : "left"], p2, p2 - d2[e6]);
        }
        if (a3) {
          const e6 = "y" === u2 ? "bottom" : "right";
          g2 = Mo(g2 + d2["y" === u2 ? "top" : "left"], g2, g2 - d2[e6]);
        }
        const m2 = s3.fn({ ...t3, [h2]: p2, [u2]: g2 });
        return { ...m2, data: { x: m2.x - n3, y: m2.y - o3, enabled: { [h2]: r4, [u2]: a3 } } };
      } };
    };
    Ii = function(e5) {
      return void 0 === e5 && (e5 = {}), { name: "flip", options: e5, async fn(t3) {
        var n3, o3;
        const { placement: i4, middlewareData: r4, rects: a3, initialPlacement: s3, platform: l2, elements: c2 } = t3, { mainAxis: d2 = true, crossAxis: u2 = true, fallbackPlacements: h2, fallbackStrategy: p2 = "bestFit", fallbackAxisSideDirection: g2 = "none", flipAlignment: m2 = true, ...f2 } = Po(e5, t3);
        if (null != (n3 = r4.arrow) && n3.alignmentOffset) return {};
        const v3 = To(i4), y3 = Ro(s3), b2 = To(s3) === s3, w3 = await (null == l2.isRTL ? void 0 : l2.isRTL(c2.floating)), x3 = h2 || (b2 || !m2 ? [Oo(s3)] : function(e6) {
          const t4 = Oo(e6);
          return [Lo(e6), t4, Lo(t4)];
        }(s3)), k3 = "none" !== g2;
        !h2 && k3 && x3.push(...function(e6, t4, n4, o4) {
          const i5 = Eo(e6);
          let r5 = function(e7, t5, n5) {
            const o5 = ["left", "right"], i6 = ["right", "left"], r6 = ["top", "bottom"], a4 = ["bottom", "top"];
            switch (e7) {
              case "top":
              case "bottom":
                return n5 ? t5 ? i6 : o5 : t5 ? o5 : i6;
              case "left":
              case "right":
                return t5 ? r6 : a4;
              default:
                return [];
            }
          }(To(e6), "start" === n4, o4);
          return i5 && (r5 = r5.map((e7) => e7 + "-" + i5), t4 && (r5 = r5.concat(r5.map(Lo)))), r5;
        }(s3, m2, g2, w3));
        const C3 = [s3, ...x3], S2 = await Uo(t3, f2), _2 = [];
        let I3 = (null == (o3 = r4.flip) ? void 0 : o3.overflows) || [];
        if (d2 && _2.push(S2[v3]), u2) {
          const e6 = function(e7, t4, n4) {
            void 0 === n4 && (n4 = false);
            const o4 = Eo(e7), i5 = No(e7), r5 = zo(i5);
            let a4 = "x" === i5 ? o4 === (n4 ? "end" : "start") ? "right" : "left" : "start" === o4 ? "bottom" : "top";
            return t4.reference[r5] > t4.floating[r5] && (a4 = Oo(a4)), [a4, Oo(a4)];
          }(i4, a3, w3);
          _2.push(S2[e6[0]], S2[e6[1]]);
        }
        if (I3 = [...I3, { placement: i4, overflows: _2 }], !_2.every((e6) => e6 <= 0)) {
          var M2, P2;
          const e6 = ((null == (M2 = r4.flip) ? void 0 : M2.index) || 0) + 1, t4 = C3[e6];
          if (t4) return { data: { index: e6, overflows: I3 }, reset: { placement: t4 } };
          let n4 = null == (P2 = I3.filter((e7) => e7.overflows[0] <= 0).sort((e7, t5) => e7.overflows[1] - t5.overflows[1])[0]) ? void 0 : P2.placement;
          if (!n4) switch (p2) {
            case "bestFit": {
              var T3;
              const e7 = null == (T3 = I3.filter((e8) => {
                if (k3) {
                  const t5 = Ro(e8.placement);
                  return t5 === y3 || "y" === t5;
                }
                return true;
              }).map((e8) => [e8.placement, e8.overflows.filter((e9) => e9 > 0).reduce((e9, t5) => e9 + t5, 0)]).sort((e8, t5) => e8[1] - t5[1])[0]) ? void 0 : T3[0];
              e7 && (n4 = e7);
              break;
            }
            case "initialPlacement":
              n4 = s3;
          }
          if (i4 !== n4) return { reset: { placement: n4 } };
        }
        return {};
      } };
    };
    Mi = (e5) => ({ name: "arrow", options: e5, async fn(t3) {
      const { x: n3, y: o3, placement: i4, rects: r4, platform: a3, elements: s3, middlewareData: l2 } = t3, { element: c2, padding: d2 = 0 } = Po(e5, t3) || {};
      if (null == c2) return {};
      const u2 = Ho(d2), h2 = { x: n3, y: o3 }, p2 = No(i4), g2 = zo(p2), m2 = await a3.getDimensions(c2), f2 = "y" === p2, v3 = f2 ? "top" : "left", y3 = f2 ? "bottom" : "right", b2 = f2 ? "clientHeight" : "clientWidth", w3 = r4.reference[g2] + r4.reference[p2] - h2[p2] - r4.floating[g2], x3 = h2[p2] - r4.reference[p2], k3 = await (null == a3.getOffsetParent ? void 0 : a3.getOffsetParent(c2));
      let C3 = k3 ? k3[b2] : 0;
      C3 && await (null == a3.isElement ? void 0 : a3.isElement(k3)) || (C3 = s3.floating[b2] || r4.floating[g2]);
      const S2 = w3 / 2 - x3 / 2, _2 = C3 / 2 - m2[g2] / 2 - 1, I3 = wo(u2[v3], _2), M2 = wo(u2[y3], _2), P2 = I3, T3 = C3 - m2[g2] - M2, E2 = C3 / 2 - m2[g2] / 2 + S2, A2 = Mo(P2, E2, T3), z3 = !l2.arrow && null != Eo(i4) && E2 !== A2 && r4.reference[g2] / 2 - (E2 < P2 ? I3 : M2) - m2[g2] / 2 < 0, R3 = z3 ? E2 < P2 ? E2 - P2 : E2 - T3 : 0;
      return { [p2]: h2[p2] + R3, data: { [p2]: A2, centerOffset: E2 - A2 - R3, ...z3 && { alignmentOffset: R3 } }, reset: z3 };
    } });
    Pi = (e5, t3, n3) => {
      const o3 = /* @__PURE__ */ new Map(), i4 = { platform: xi, ...n3 }, r4 = { ...i4.platform, _c: o3 };
      return (async (e6, t4, n4) => {
        const { placement: o4 = "bottom", strategy: i5 = "absolute", middleware: r5 = [], platform: a3 } = n4, s3 = r5.filter(Boolean), l2 = await (null == a3.isRTL ? void 0 : a3.isRTL(t4));
        let c2 = await a3.getElementRects({ reference: e6, floating: t4, strategy: i5 }), { x: d2, y: u2 } = Fo(c2, o4, l2), h2 = o4, p2 = {}, g2 = 0;
        for (let n5 = 0; n5 < s3.length; n5++) {
          const { name: r6, fn: m2 } = s3[n5], { x: f2, y: v3, data: y3, reset: b2 } = await m2({ x: d2, y: u2, initialPlacement: o4, placement: h2, strategy: i5, middlewareData: p2, rects: c2, platform: a3, elements: { reference: e6, floating: t4 } });
          d2 = null != f2 ? f2 : d2, u2 = null != v3 ? v3 : u2, p2 = { ...p2, [r6]: { ...p2[r6], ...y3 } }, b2 && g2 <= 50 && (g2++, "object" == typeof b2 && (b2.placement && (h2 = b2.placement), b2.rects && (c2 = true === b2.rects ? await a3.getElementRects({ reference: e6, floating: t4, strategy: i5 }) : b2.rects), { x: d2, y: u2 } = Fo(c2, h2, l2)), n5 = -1);
        }
        return { x: d2, y: u2, placement: h2, strategy: i5, middlewareData: p2 };
      })(e5, t3, { ...i4, platform: r4 });
    };
    Ti = function() {
      function e5() {
        return i3(this, e5), o2(this, e5, arguments);
      }
      return d(e5, B2), a2(e5, [{ key: "render", value: function() {
        return this.props.children;
      } }]);
    }();
    (zi.prototype = new B2()).isPureReactComponent = true, zi.prototype.shouldComponentUpdate = function(e5, t3) {
      return Ai(this.props, e5) || Ai(this.state, t3);
    };
    Ri = C2.__b;
    C2.__b = function(e5) {
      e5.type && e5.type.__f && e5.ref && (e5.props.ref = e5.ref, e5.ref = null), Ri && Ri(e5);
    };
    Ni = C2.__e;
    C2.__e = function(e5, t3, n3, o3) {
      if (e5.then) {
        for (var i4, r4 = t3; r4 = r4.__; ) if ((i4 = r4.__c) && i4.__c) return null == t3.__e && (t3.__e = n3.__e, t3.__k = n3.__k), i4.__c(e5, t3);
      }
      Ni(e5, t3, n3, o3);
    };
    Li = C2.unmount;
    C2.unmount = function(e5) {
      var t3 = e5.__c;
      t3 && t3.__R && t3.__R(), t3 && 32 & e5.__u && (e5.type = null), Li && Li(e5);
    }, (Di.prototype = new B2()).__c = function(e5, t3) {
      var n3 = t3.__c, o3 = this;
      null == o3.o && (o3.o = []), o3.o.push(n3);
      var i4 = Fi(o3.__v), r4 = false, a3 = function() {
        r4 || (r4 = true, n3.__R = null, i4 ? i4(s3) : s3());
      };
      n3.__R = a3;
      var s3 = function() {
        if (!--o3.__u) {
          if (o3.state.__a) {
            var e6 = o3.state.__a;
            o3.__v.__k[0] = Hi(e6, e6.__c.__P, e6.__c.__O);
          }
          var t4;
          for (o3.setState({ __a: o3.__b = null }); t4 = o3.o.pop(); ) t4.forceUpdate();
        }
      };
      o3.__u++ || 32 & t3.__u || o3.setState({ __a: o3.__b = o3.__v.__k[0] }), e5.then(a3, a3);
    }, Di.prototype.componentWillUnmount = function() {
      this.o = [];
    }, Di.prototype.render = function(e5, t3) {
      if (this.__b) {
        if (this.__v.__k) {
          var n3 = document.createElement("div"), o3 = this.__v.__k[0].__c;
          this.__v.__k[0] = Oi(this.__b, n3, o3.__O = o3.__P);
        }
        this.__b = null;
      }
      var i4 = t3.__a && U2(j2, null, e5.fallback);
      return i4 && (i4.__u &= -33), [U2(j2, null, t3.__a ? null : e5.children), i4];
    };
    $i = function(e5, t3, n3) {
      if (++n3[1] === n3[0] && e5.l.delete(t3), e5.props.revealOrder && ("t" !== e5.props.revealOrder[0] || !e5.l.size)) for (n3 = e5.i; n3; ) {
        for (; n3.length > 3; ) n3.pop()();
        if (n3[1] < n3[0]) break;
        e5.i = n3 = n3[2];
      }
    };
    (Ui.prototype = new B2()).__a = function(e5) {
      var t3 = this, n3 = Fi(t3.__v), o3 = t3.l.get(e5);
      return o3[0]++, function(i4) {
        var r4 = function() {
          t3.props.revealOrder ? (o3.push(i4), $i(t3, e5, o3)) : i4();
        };
        n3 ? n3(r4) : r4();
      };
    }, Ui.prototype.render = function(e5) {
      this.i = null, this.l = /* @__PURE__ */ new Map();
      var t3 = X(e5.children);
      e5.revealOrder && "b" === e5.revealOrder[0] && t3.reverse();
      for (var n3 = t3.length; n3--; ) this.l.set(t3[n3], this.i = [1, 0, this.i]);
      return e5.children;
    }, Ui.prototype.componentDidUpdate = Ui.prototype.componentDidMount = function() {
      var e5 = this;
      this.l.forEach(function(t3, n3) {
        $i(e5, n3, t3);
      });
    };
    ji = "undefined" != typeof Symbol && Symbol.for && Symbol.for("react.element") || 60103;
    Bi = /^(?:accent|alignment|arabic|baseline|cap|clip(?!PathU)|color|dominant|fill|flood|font|glyph(?!R)|horiz|image(!S)|letter|lighting|marker(?!H|W|U)|overline|paint|pointer|shape|stop|strikethrough|stroke|text(?!L)|transform|underline|unicode|units|v|vector|vert|word|writing|x(?!C))[A-Z]/;
    Gi = /^on(Ani|Tra|Tou|BeforeInp|Compo)/;
    Wi = /[A-Z0-9]/g;
    Zi = "undefined" != typeof document;
    qi = function(e5) {
      return ("undefined" != typeof Symbol && "symbol" == typeof Symbol() ? /fil|che|rad/ : /fil|che|ra/).test(e5);
    };
    B2.prototype.isReactComponent = {}, ["componentWillMount", "componentWillReceiveProps", "componentWillUpdate"].forEach(function(e5) {
      Object.defineProperty(B2.prototype, e5, { configurable: true, get: function() {
        return this["UNSAFE_" + e5];
      }, set: function(t3) {
        Object.defineProperty(this, e5, { configurable: true, writable: true, value: t3 });
      } });
    });
    Vi = C2.event;
    C2.event = function(e5) {
      return Vi && (e5 = Vi(e5)), e5.persist = Yi, e5.isPropagationStopped = Xi, e5.isDefaultPrevented = Ki, e5.nativeEvent = e5;
    };
    Ji = { enumerable: false, configurable: true, get: function() {
      return this.class;
    } };
    Qi = C2.vnode;
    C2.vnode = function(e5) {
      "string" == typeof e5.type && function(e6) {
        var t3 = e6.props, n3 = e6.type, o3 = {}, i4 = -1 === n3.indexOf("-");
        for (var r4 in t3) {
          var a3 = t3[r4];
          if (!("value" === r4 && "defaultValue" in t3 && null == a3 || Zi && "children" === r4 && "noscript" === n3 || "class" === r4 || "className" === r4)) {
            var s3 = r4.toLowerCase();
            "defaultValue" === r4 && "value" in t3 && null == t3.value ? r4 = "value" : "download" === r4 && true === a3 ? a3 = "" : "translate" === s3 && "no" === a3 ? a3 = false : "o" === s3[0] && "n" === s3[1] ? "ondoubleclick" === s3 ? r4 = "ondblclick" : "onchange" !== s3 || "input" !== n3 && "textarea" !== n3 || qi(t3.type) ? "onfocus" === s3 ? r4 = "onfocusin" : "onblur" === s3 ? r4 = "onfocusout" : Gi.test(r4) && (r4 = s3) : s3 = r4 = "oninput" : i4 && Bi.test(r4) ? r4 = r4.replace(Wi, "-$&").toLowerCase() : null === a3 && (a3 = void 0), "oninput" === s3 && o3[r4 = s3] && (r4 = "oninputCapture"), o3[r4] = a3;
          }
        }
        "select" == n3 && o3.multiple && Array.isArray(o3.value) && (o3.value = X(t3.children).forEach(function(e7) {
          e7.props.selected = -1 != o3.value.indexOf(e7.props.value);
        })), "select" == n3 && null != o3.defaultValue && (o3.value = X(t3.children).forEach(function(e7) {
          e7.props.selected = o3.multiple ? -1 != o3.defaultValue.indexOf(e7.props.value) : o3.defaultValue == e7.props.value;
        })), t3.class && !t3.className ? (o3.class = t3.class, Object.defineProperty(o3, "className", Ji)) : (t3.className && !t3.class || t3.class && t3.className) && (o3.class = o3.className = t3.className), e6.props = o3;
      }(e5), e5.$$typeof = ji, Qi && Qi(e5);
    };
    er = C2.__r;
    C2.__r = function(e5) {
      er && er(e5), e5.__c;
    };
    tr = C2.diffed;
    C2.diffed = function(e5) {
      tr && tr(e5);
      var t3 = e5.props, n3 = e5.__e;
      null != n3 && "textarea" === e5.type && "value" in t3 && t3.value !== n3.value && (n3.value = null == t3.value ? "" : t3.value);
    };
    nr = () => rn(uo.id);
    ar = ((e5) => (e5.Automatic = "automatic", e5.FitPage = "fit-page", e5.FitWidth = "fit-width", e5))(ar || {});
    sr = "zoom";
    lr = { id: sr, name: "Zoom Plugin", version: "1.0.0", provides: ["zoom"], requires: ["viewport", "scroll"], optional: ["interaction-manager"], defaultConfig: { enabled: true, defaultZoomLevel: "automatic", minZoom: 0.2, maxZoom: 60, zoomStep: 0.1, zoomRanges: [{ min: 0.2, max: 0.5, step: 0.05 }, { min: 0.5, max: 1, step: 0.1 }, { min: 1, max: 2, step: 0.2 }, { min: 2, max: 4, step: 0.4 }, { min: 4, max: 10, step: 0.8 }, { min: 10, max: 20, step: 1.6 }, { min: 20, max: 40, step: 3.2 }, { min: 40, max: 60, step: 6.4 }], presets: [{ name: "Fit Page", value: "fit-page" }, { name: "Fit Width", value: "fit-width" }, { name: "Automatic", value: "automatic" }, { name: "25%", value: 0.25 }, { name: "50%", value: 0.5 }, { name: "100%", value: 1 }, { name: "125%", value: 1.25 }, { name: "150%", value: 1.5 }, { name: "200%", value: 2 }, { name: "400%", value: 4 }, { name: "800%", value: 8 }, { name: "1600%", value: 16 }] } };
    cr = "SET_ZOOM_LEVEL";
    dr = "SET_INITIAL_ZOOM_LEVEL";
    ur = { zoomLevel: "automatic", currentZoomLevel: 1 };
    hr = class extends Wt {
      constructor(e5, t3, n3) {
        super(e5, t3), this.zoom$ = Jt(), this.state$ = Qt(), this.viewportPlugin = t3.getPlugin("viewport"), this.viewport = this.viewportPlugin.provides(), this.scroll = t3.getPlugin("scroll").provides();
        const o3 = t3.getPlugin("interaction-manager");
        var i4;
        this.interactionManager = o3?.provides() ?? null, this.minZoom = n3.minZoom ?? 0.25, this.maxZoom = n3.maxZoom ?? 10, this.zoomStep = n3.zoomStep ?? 0.1, this.presets = n3.presets ?? [], this.zoomRanges = this.normalizeRanges(n3.zoomRanges ?? []), this.dispatch((i4 = n3.defaultZoomLevel, { type: dr, payload: { zoomLevel: i4 } })), this.viewport.onViewportResize(() => this.recalcAuto(1), { mode: "debounce", wait: 150 }), this.coreStore.onAction(Ot, () => this.recalcAuto(1)), this.coreStore.onAction(Ht, () => this.recalcAuto(1)), this.coreStore.onAction(Rt, () => this.recalcAuto(1)), this.interactionManager?.registerMode({ id: "marqueeZoom", scope: "page", exclusive: true, cursor: "zoom-in" }), this.resetReady();
      }
      buildCapability() {
        return { onZoomChange: this.zoom$.on, onStateChange: this.state$.on, zoomIn: () => {
          const e5 = this.state.currentZoomLevel;
          return this.handleRequest({ level: e5, delta: this.stepFor(e5) });
        }, zoomOut: () => {
          const e5 = this.state.currentZoomLevel;
          return this.handleRequest({ level: e5, delta: -this.stepFor(e5) });
        }, zoomToArea: (e5, t3) => this.handleZoomToArea(e5, t3), requestZoom: (e5, t3) => this.handleRequest({ level: e5, center: t3 }), requestZoomBy: (e5, t3) => {
          const n3 = this.state.currentZoomLevel, o3 = this.toZoom(n3 + e5);
          return this.handleRequest({ level: o3, center: t3 });
        }, enableMarqueeZoom: () => {
          this.interactionManager?.activate("marqueeZoom");
        }, disableMarqueeZoom: () => {
          this.interactionManager?.activate("default");
        }, toggleMarqueeZoom: () => {
          "marqueeZoom" === this.interactionManager?.getActiveMode() ? this.interactionManager?.activate("default") : this.interactionManager?.activate("marqueeZoom");
        }, isMarqueeZoomActive: () => "marqueeZoom" === this.interactionManager?.getActiveMode(), getState: () => this.state, getPresets: () => this.presets };
      }
      async initialize() {
      }
      async destroy() {
        this.zoom$.clear();
      }
      normalizeRanges(e5) {
        return [...e5].filter((e6) => e6.step > 0 && e6.max > e6.min).sort((e6, t3) => e6.min - t3.min);
      }
      stepFor(e5) {
        const t3 = this.zoomRanges.find((t4) => e5 >= t4.min && e5 < t4.max);
        return t3 ? t3.step : this.zoomStep;
      }
      toZoom(e5) {
        return parseFloat(qt(e5, this.minZoom, this.maxZoom).toFixed(2));
      }
      handleRequest({ level: e5, delta: t3 = 0, center: n3, focus: o3 = 0, align: i4 = "keep" }) {
        const r4 = this.viewport.getMetrics(), a3 = this.state.currentZoomLevel;
        if (0 === r4.clientWidth || 0 === r4.clientHeight) return;
        const s3 = "number" == typeof e5 ? e5 : this.computeZoomForMode(e5, r4);
        if (false === s3) return;
        const l2 = qt(s3 + t3, this.minZoom, this.maxZoom), c2 = Math.floor(100 * l2) / 100, d2 = n3 ?? { vx: r4.clientWidth / 2, vy: 1 === o3 ? 0 : r4.clientHeight / 2 }, { desiredScrollLeft: u2, desiredScrollTop: h2 } = this.computeScrollForZoomChange(r4, a3, c2, d2, i4);
        isNaN(u2) || isNaN(h2) || this.viewportPlugin.setViewportScrollMetrics({ scrollLeft: u2, scrollTop: h2 }), this.dispatch({ type: cr, payload: { zoomLevel: "number" == typeof e5 ? c2 : e5, currentZoomLevel: c2 } }), this.dispatchCoreAction(/* @__PURE__ */ ((e6) => ({ type: Lt, payload: e6 }))(c2)), this.markReady(), this.viewport.scrollTo({ x: u2, y: h2, behavior: "instant" });
        const p2 = { oldZoom: a3, newZoom: c2, level: e5, center: d2, desiredScrollLeft: u2, desiredScrollTop: h2, viewport: r4 };
        this.zoom$.emit(p2);
      }
      computeZoomForMode(e5, t3) {
        const n3 = $t(this.coreState.core);
        if (!n3.length) return false;
        const o3 = this.scroll.getPageGap(), i4 = this.viewport.getViewportGap();
        if (0 === t3.clientWidth || 0 === t3.clientHeight) return false;
        const r4 = t3.clientWidth - 2 * i4, a3 = t3.clientHeight - 2 * i4;
        if (r4 <= 0 || a3 <= 0) return false;
        let s3 = 0, l2 = 0;
        switch (n3.forEach((e6) => {
          const t4 = e6.reduce((e7, t5, n5) => e7 + t5.rotatedSize.width + (n5 ? o3 : 0), 0), n4 = Math.max(...e6.map((e7) => e7.rotatedSize.height));
          s3 = Math.max(s3, t4), l2 = Math.max(l2, n4);
        }), e5) {
          case "fit-width":
            return r4 / s3;
          case "fit-page":
            return Math.min(r4 / s3, a3 / l2);
          case "automatic":
            return Math.min(r4 / s3, 1);
          default:
            return 1;
        }
      }
      computeScrollForZoomChange(e5, t3, n3, o3, i4 = "keep") {
        const r4 = this.scroll.getLayout(), a3 = this.viewport.getViewportGap(), s3 = r4.totalContentSize.width, l2 = r4.totalContentSize.height, c2 = e5.clientWidth - 2 * a3, d2 = e5.clientHeight - 2 * a3, u2 = (e6, t4, n4) => t4 * n4 < e6 ? (e6 - t4 * n4) / 2 : 0, h2 = u2(c2, s3, t3), p2 = u2(d2, l2, t3), g2 = u2(c2, s3, n3), m2 = u2(d2, l2, n3), f2 = (e5.scrollLeft + o3.vx - a3 - h2) / t3 * n3 + a3 + g2, v3 = (e5.scrollTop + o3.vy - a3 - p2) / t3 * n3 + a3 + m2, y3 = "center" === i4 ? f2 - e5.clientWidth / 2 : f2 - o3.vx, b2 = "center" === i4 ? v3 - e5.clientHeight / 2 : v3 - o3.vy;
        return { desiredScrollLeft: Math.max(0, y3), desiredScrollTop: Math.max(0, b2) };
      }
      handleZoomToArea(e5, t3) {
        const n3 = this.coreState.core.rotation, o3 = this.viewport.getMetrics(), i4 = this.viewport.getViewportGap(), r4 = this.state.currentZoomLevel, a3 = o3.clientWidth - 2 * i4, s3 = o3.clientHeight - 2 * i4, l2 = this.scroll.getLayout(), c2 = l2.virtualItems.find((t4) => t4.pageLayouts.some((t5) => t5.pageIndex === e5));
        if (!c2) return;
        const d2 = c2.pageLayouts.find((t4) => t4.pageIndex === e5), u2 = Xe({ width: d2.width, height: d2.height }, t3, n3), h2 = this.toZoom(Math.min(a3 / u2.size.width, s3 / u2.size.height)), p2 = c2.x + d2.x, g2 = c2.y + d2.y, m2 = p2 + u2.origin.x + u2.size.width / 2, f2 = g2 + u2.origin.y + u2.size.height / 2, v3 = (e6, t4, n4) => t4 * n4 < e6 ? (e6 - t4 * n4) / 2 : 0, y3 = v3(a3, l2.totalContentSize.width, r4), b2 = v3(s3, l2.totalContentSize.height, r4), w3 = i4 + y3 + m2 * r4 - o3.scrollLeft, x3 = i4 + b2 + f2 * r4 - o3.scrollTop;
        this.handleRequest({ level: h2, center: { vx: w3, vy: x3 }, align: "center" });
      }
      recalcAuto(e5) {
        const t3 = this.state;
        "automatic" !== t3.zoomLevel && "fit-page" !== t3.zoomLevel && "fit-width" !== t3.zoomLevel || this.handleRequest({ level: t3.zoomLevel, focus: e5 });
      }
      onStoreUpdated(e5, t3) {
        this.state$.emit(t3);
      }
    };
    hr.id = "zoom";
    pr = { manifest: lr, create: (e5, t3, n3) => new hr(sr, e5, n3), reducer: (e5 = ur, t3) => {
      switch (t3.type) {
        case cr:
          return { ...e5, zoomLevel: t3.payload.zoomLevel, currentZoomLevel: t3.payload.currentZoomLevel };
        case dr:
          return { ...e5, zoomLevel: t3.payload.zoomLevel };
        default:
          return e5;
      }
    }, initialState: ur };
    mr = "INTERACTION/ACTIVATE_MODE";
    fr = "INTERACTION/PAUSE";
    vr = "INTERACTION/RESUME";
    yr = "INTERACTION/SET_CURSOR";
    br = class extends Wt {
      constructor(e5, t3) {
        super(e5, t3), this.modes = /* @__PURE__ */ new Map(), this.cursorClaims = /* @__PURE__ */ new Map(), this.buckets = /* @__PURE__ */ new Map(), this.alwaysGlobal = /* @__PURE__ */ new Set(), this.alwaysPage = /* @__PURE__ */ new Map(), this.onModeChange$ = Jt(), this.onHandlerChange$ = Jt(), this.onCursorChange$ = Jt(), this.onStateChange$ = Qt(), this.registerMode({ id: "default", scope: "page", exclusive: false, cursor: "auto" });
      }
      async initialize(e5) {
      }
      buildCapability() {
        return { activate: (e5) => this.activate(e5), onModeChange: this.onModeChange$.on, onCursorChange: this.onCursorChange$.on, onHandlerChange: this.onHandlerChange$.on, onStateChange: this.onStateChange$.on, getActiveMode: () => this.state.activeMode, getActiveInteractionMode: () => this.getActiveInteractionMode(), finish: () => this.activate("default"), registerMode: (e5) => this.registerMode(e5), registerHandlers: (e5) => this.registerHandlers(e5), registerAlways: (e5) => this.registerAlways(e5), setCursor: (e5, t3, n3 = 0) => this.setCursor(e5, t3, n3), removeCursor: (e5) => this.removeCursor(e5), getCurrentCursor: () => this.state.cursor, getHandlersForScope: (e5) => this.getHandlersForScope(e5), activeModeIsExclusive: () => this.activeModeIsExclusive(), pause: () => this.dispatch({ type: fr }), resume: () => this.dispatch({ type: vr }), isPaused: () => this.state.paused };
      }
      activate(e5) {
        if (!this.modes.has(e5)) throw new Error(`[interaction] unknown mode '${e5}'`);
        if (e5 === this.state.activeMode) return;
        const t3 = this.state.activeMode;
        this.cursorClaims.clear(), this.notifyHandlersInactive(t3), this.dispatch(/* @__PURE__ */ ((e6) => ({ type: mr, payload: { mode: e6 } }))(e5)), this.emitCursor(), this.notifyHandlersActive(e5), this.onModeChange$.emit({ ...this.state, activeMode: e5 });
      }
      notifyHandlersActive(e5) {
        this.alwaysGlobal.forEach((t4) => {
          var n4;
          null == (n4 = t4.onHandlerActiveStart) || n4.call(t4, e5);
        }), this.alwaysPage.forEach((t4) => {
          t4.forEach((t5) => {
            var n4;
            null == (n4 = t5.onHandlerActiveStart) || n4.call(t5, e5);
          });
        });
        const t3 = this.modes.get(e5);
        if (!t3) return;
        const n3 = this.buckets.get(e5);
        n3 && ("global" === t3.scope && n3.global.forEach((t4) => {
          var n4;
          null == (n4 = t4.onHandlerActiveStart) || n4.call(t4, e5);
        }), "page" === t3.scope && n3.page.forEach((t4, n4) => {
          t4.forEach((t5) => {
            var n5;
            null == (n5 = t5.onHandlerActiveStart) || n5.call(t5, e5);
          });
        }));
      }
      notifyHandlersInactive(e5) {
        this.alwaysGlobal.forEach((t4) => {
          var n4;
          null == (n4 = t4.onHandlerActiveEnd) || n4.call(t4, e5);
        }), this.alwaysPage.forEach((t4) => {
          t4.forEach((t5) => {
            var n4;
            null == (n4 = t5.onHandlerActiveEnd) || n4.call(t5, e5);
          });
        });
        const t3 = this.modes.get(e5);
        if (!t3) return;
        const n3 = this.buckets.get(e5);
        n3 && ("global" === t3.scope && n3.global.forEach((t4) => {
          var n4;
          null == (n4 = t4.onHandlerActiveEnd) || n4.call(t4, e5);
        }), "page" === t3.scope && n3.page.forEach((t4, n4) => {
          t4.forEach((t5) => {
            var n5;
            null == (n5 = t5.onHandlerActiveEnd) || n5.call(t5, e5);
          });
        }));
      }
      registerMode(e5) {
        this.modes.set(e5.id, e5), this.buckets.has(e5.id) || this.buckets.set(e5.id, { global: /* @__PURE__ */ new Set(), page: /* @__PURE__ */ new Map() });
      }
      registerHandlers({ modeId: e5, handlers: t3, pageIndex: n3 }) {
        const o3 = Array.isArray(e5) ? e5 : [e5], i4 = [];
        for (const e6 of o3) {
          const o4 = this.buckets.get(e6);
          if (!o4) throw new Error(`unknown mode '${e6}'`);
          if (null == n3) o4.global.add(t3);
          else {
            const e7 = o4.page.get(n3) ?? /* @__PURE__ */ new Set();
            e7.add(t3), o4.page.set(n3, e7);
          }
          i4.push(() => {
            if (null == n3) o4.global.delete(t3);
            else {
              const e7 = o4.page.get(n3);
              e7 && (e7.delete(t3), 0 === e7.size && o4.page.delete(n3));
            }
          });
        }
        return this.onHandlerChange$.emit({ ...this.state }), () => {
          i4.forEach((e6) => e6()), this.onHandlerChange$.emit({ ...this.state });
        };
      }
      registerAlways({ scope: e5, handlers: t3 }) {
        if ("global" === e5.type) return this.alwaysGlobal.add(t3), this.onHandlerChange$.emit({ ...this.state }), () => this.alwaysGlobal.delete(t3);
        const n3 = this.alwaysPage.get(e5.pageIndex) ?? /* @__PURE__ */ new Set();
        return n3.add(t3), this.alwaysPage.set(e5.pageIndex, n3), this.onHandlerChange$.emit({ ...this.state }), () => {
          n3.delete(t3), this.onHandlerChange$.emit({ ...this.state });
        };
      }
      getHandlersForScope(e5) {
        if (!this.state) return null;
        const t3 = this.modes.get(this.state.activeMode);
        if (!t3) return null;
        const n3 = this.buckets.get(t3.id);
        if (!n3) return null;
        const o3 = (e6, t4) => e6.size || t4.size ? function(e7) {
          const t5 = ["onPointerDown", "onPointerUp", "onPointerMove", "onPointerEnter", "onPointerLeave", "onPointerCancel"], n4 = {};
          for (const o4 of t5) n4[o4] = (t6, n5, i4) => {
            var r4;
            for (const a3 of e7) null == (r4 = a3[o4]) || r4.call(a3, t6, n5, i4);
          };
          return n4;
        }([...e6, ...t4]) : null;
        if ("global" === e5.type) {
          const e6 = "global" === t3.scope ? n3.global : /* @__PURE__ */ new Set();
          return o3(this.alwaysGlobal, e6);
        }
        return o3(this.alwaysPage.get(e5.pageIndex) ?? /* @__PURE__ */ new Set(), "page" === t3.scope ? n3.page.get(e5.pageIndex) ?? /* @__PURE__ */ new Set() : /* @__PURE__ */ new Set());
      }
      setCursor(e5, t3, n3 = 0) {
        this.cursorClaims.set(e5, { cursor: t3, priority: n3 }), this.emitCursor();
      }
      removeCursor(e5) {
        this.cursorClaims.delete(e5), this.emitCursor();
      }
      emitCursor() {
        var e5;
        const t3 = [...this.cursorClaims.values()].sort((e6, t4) => t4.priority - e6.priority)[0] ?? { cursor: (null == (e5 = this.modes.get(this.state.activeMode)) ? void 0 : e5.cursor) ?? "auto" };
        t3.cursor !== this.state.cursor && (this.dispatch(/* @__PURE__ */ ((e6) => ({ type: yr, payload: { cursor: e6 } }))(t3.cursor)), this.onCursorChange$.emit(t3.cursor));
      }
      onStoreUpdated(e5, t3) {
        this.onStateChange$.emit(t3);
      }
      activeModeIsExclusive() {
        const e5 = this.modes.get(this.state.activeMode);
        return !(null == e5 || !e5.exclusive);
      }
      getActiveInteractionMode() {
        return this.modes.get(this.state.activeMode) ?? null;
      }
      async destroy() {
        this.onModeChange$.clear(), this.onCursorChange$.clear(), await super.destroy();
      }
    };
    br.id = "interaction-manager";
    wr = br;
    xr = "interaction-manager";
    kr = { activeMode: "default", cursor: "auto", paused: false };
    Cr = { manifest: { id: xr, name: "Interaction Manager Plugin", version: "1.0.0", provides: ["interaction-manager"], requires: [], optional: [], defaultConfig: { enabled: true } }, create: (e5) => new wr(xr, e5), reducer: (e5, t3) => {
      switch (t3.type) {
        case mr:
          return { ...e5, activeMode: t3.payload.mode };
        case yr:
          return { ...e5, cursor: t3.payload.cursor };
        case fr:
          return { ...e5, paused: true };
        case vr:
          return { ...e5, paused: false };
        default:
          return e5;
      }
    }, initialState: kr };
    Sr = () => rn(wr.id);
    Mr = ({ children: e5, style: t3, ...n3 }) => {
      const o3 = Te(null), { provides: i4 } = Sr();
      return Me(() => {
        if (i4 && o3.current) return gr(i4, { type: "global" }, o3.current);
      }, [i4]), ue("div", { ref: o3, style: { width: "100%", height: "100%", ...t3 }, ...n3, children: e5 });
    };
    Pr = ({ pageIndex: e5, children: t3, pageWidth: n3, pageHeight: o3, rotation: i4, scale: r4, convertEventToPoint: a3, style: s3, ...l2 }) => {
      const c2 = Te(null), { provides: d2 } = Sr(), u2 = function() {
        const { provides: e6 } = Sr(), [t4, n4] = Ie(() => {
          const t5 = null == e6 ? void 0 : e6.getActiveInteractionMode();
          return "page" === (null == t5 ? void 0 : t5.scope) && !!t5.exclusive;
        });
        return Me(() => {
          if (e6) return e6.onModeChange(() => {
            const t5 = e6.getActiveInteractionMode();
            n4("page" === (null == t5 ? void 0 : t5.scope) && !(null == t5 || !t5.exclusive));
          });
        }, [e6]), t4;
      }(), h2 = Ae((e6, t4) => {
        const a4 = t4.getBoundingClientRect(), s4 = { x: e6.clientX - a4.left, y: e6.clientY - a4.top };
        return l3 = r4, Ye(Ve({ width: n3, height: o3 }, s4, (4 - i4) % 4), 1 / l3);
        var l3;
      }, [n3, o3, i4, r4]);
      return Me(() => {
        if (d2 && c2.current) return gr(d2, { type: "page", pageIndex: e5 }, c2.current, a3 || h2);
      }, [d2, e5, a3, h2]), ue("div", { ref: c2, style: { ...s3 }, ...l2, children: [t3, u2 && ue("div", { style: { position: "absolute", top: 0, left: 0, right: 0, bottom: 0, zIndex: 10 } })] });
    };
    Tr = () => rn(hr.id);
    zr = ({ pageIndex: e5, scale: t3, pageWidth: n3, pageHeight: o3, className: i4, stroke: r4 = "rgba(33,150,243,0.8)", fill: a3 = "rgba(33,150,243,0.15)" }) => {
      const { provides: s3 } = Tr(), { register: l2 } = Ir({ modeId: "marqueeZoom", pageIndex: e5 }), c2 = (e6, t4, n4) => Math.max(t4, Math.min(n4, e6)), d2 = Te(null), [u2, h2] = Ie(null), p2 = n3 / t3, g2 = o3 / t3, m2 = Ee(() => ({ onPointerDown: (e6, t4) => {
        d2.current = e6, h2({ origin: { x: e6.x, y: e6.y }, size: { width: 0, height: 0 } }), t4.target?.setPointerCapture?.(t4.pointerId);
      }, onPointerMove: (e6) => {
        if (!d2.current) return;
        const t4 = c2(e6.x, 0, p2), n4 = c2(e6.y, 0, g2), { x: o4, y: i5 } = d2.current, r5 = Math.min(o4, t4), a4 = Math.min(i5, n4), s4 = Math.abs(t4 - o4), l3 = Math.abs(n4 - i5);
        h2({ origin: { x: r5, y: a4 }, size: { width: s4, height: l3 } });
      }, onPointerUp: (n4, o4) => {
        if (u2 && s3) {
          Math.max(u2.size.width, u2.size.height) * t3 > 5 ? s3.zoomToArea(e5, u2) : s3.zoomIn();
        }
        d2.current = null, h2(null), o4.target?.releasePointerCapture?.(o4.pointerId);
      }, onPointerCancel: (e6, t4) => {
        d2.current = null, h2(null), t4.target?.releasePointerCapture?.(t4.pointerId);
      } }), [p2, p2, s3, t3, u2, e5]);
      return Me(() => {
        if (l2) return l2(m2);
      }, [l2, m2]), u2 ? ue("div", { style: { position: "absolute", pointerEvents: "none", left: u2.origin.x * t3, top: u2.origin.y * t3, width: u2.size.width * t3, height: u2.size.height * t3, border: `1px solid ${r4}`, background: a3, boxSizing: "border-box" }, className: i4 }) : null;
    };
    Rr = ["icon", "title"];
    Lr = "START_SEARCH_SESSION";
    Or = "STOP_SEARCH_SESSION";
    Hr = "SET_SEARCH_FLAGS";
    Dr = "SET_SHOW_ALL_RESULTS";
    Fr = "START_SEARCH";
    Ur = "SET_SEARCH_RESULTS";
    $r = "SET_ACTIVE_RESULT_INDEX";
    Wr = class extends Wt {
      constructor(e5, t3, n3) {
        super(e5, t3), this.searchStop$ = Qt(), this.searchStart$ = Qt(), this.searchResult$ = Qt(), this.searchActiveResultChange$ = Qt(), this.searchResultState$ = Qt(), this.searchState$ = Qt(), this.engine = n3, this.loader = this.registry.getPlugin("loader").provides(), this.loader.onDocumentLoaded(this.handleDocumentLoaded.bind(this)), this.loader.onLoaderEvent(this.handleLoaderEvent.bind(this));
      }
      handleDocumentLoaded(e5) {
        this.currentDocument = e5, this.state.active && this.startSearchSession();
      }
      handleLoaderEvent(e5) {
        ("error" === e5.type || "start" === e5.type && this.currentDocument) && (this.state.active && this.stopSearchSession(), this.currentDocument = void 0);
      }
      async initialize(e5) {
        this.dispatch(jr(e5.flags || [])), this.dispatch(Br(void 0 === e5.showAllResults || e5.showAllResults));
      }
      onStoreUpdated(e5, t3) {
        this.searchResultState$.emit({ results: t3.results, activeResultIndex: t3.activeResultIndex, showAllResults: t3.showAllResults, active: t3.active }), this.searchState$.emit(t3);
      }
      buildCapability() {
        return { startSearch: this.startSearchSession.bind(this), stopSearch: this.stopSearchSession.bind(this), searchAllPages: this.searchAllPages.bind(this), nextResult: this.nextResult.bind(this), previousResult: this.previousResult.bind(this), goToResult: this.goToResult.bind(this), setShowAllResults: (e5) => this.dispatch(Br(e5)), getShowAllResults: () => this.state.showAllResults, onSearchResult: this.searchResult$.on, onSearchStart: this.searchStart$.on, onSearchStop: this.searchStop$.on, onActiveResultChange: this.searchActiveResultChange$.on, onSearchResultStateChange: this.searchResultState$.on, onStateChange: this.searchState$.on, getFlags: () => this.state.flags, setFlags: (e5) => this.setFlags(e5), getState: () => this.state };
      }
      setFlags(e5) {
        this.dispatch(jr(e5)), this.state.active && this.searchAllPages(this.state.query, true);
      }
      notifySearchStart() {
        this.searchStart$.emit();
      }
      notifySearchStop() {
        this.searchStop$.emit();
      }
      notifyActiveResultChange(e5) {
        this.searchActiveResultChange$.emit(e5);
      }
      startSearchSession() {
        this.currentDocument && (this.dispatch({ type: Lr }), this.notifySearchStart());
      }
      stopSearchSession() {
        this.currentDocument && this.getState().active && (this.dispatch({ type: Or }), this.notifySearchStop());
      }
      async searchAllPages(e5, t3 = false) {
        const n3 = e5.trim();
        return this.state.query !== n3 || t3 ? (this.dispatch({ type: Fr, payload: n3 }), n3 && this.currentDocument ? (this.state.active || this.startSearchSession(), new Promise((e6) => {
          this.engine.searchAllPages(this.currentDocument, n3, this.state.flags).wait((t4) => {
            const n4 = t4.total > 0 ? 0 : -1;
            this.dispatch(Gr(t4.results, t4.total, n4)), this.searchResult$.emit(t4), t4.total > 0 && this.notifyActiveResultChange(0), e6(t4);
          }, (t4) => {
            console.error("Error during search:", t4), this.dispatch(Gr([], 0, -1)), e6({ results: [], total: 0 });
          });
        })) : (this.dispatch(Gr([], 0, -1)), { results: [], total: 0 })) : { results: this.state.results, total: this.state.total };
      }
      nextResult() {
        if (0 === this.state.results.length) return -1;
        const e5 = this.state.activeResultIndex >= this.state.results.length - 1 ? 0 : this.state.activeResultIndex + 1;
        return this.goToResult(e5);
      }
      previousResult() {
        if (0 === this.state.results.length) return -1;
        const e5 = this.state.activeResultIndex <= 0 ? this.state.results.length - 1 : this.state.activeResultIndex - 1;
        return this.goToResult(e5);
      }
      goToResult(e5) {
        return 0 === this.state.results.length || e5 < 0 || e5 >= this.state.results.length ? -1 : (this.dispatch(/* @__PURE__ */ function(e6) {
          return { type: $r, payload: e6 };
        }(e5)), this.notifyActiveResultChange(e5), e5);
      }
      async destroy() {
        this.state.active && this.currentDocument && this.stopSearchSession(), this.searchResult$.clear(), this.searchStart$.clear(), this.searchStop$.clear(), this.searchActiveResultChange$.clear(), this.searchResultState$.clear(), this.searchState$.clear();
      }
    };
    Wr.id = "search";
    Zr = "search";
    qr = { flags: [], results: [], total: 0, activeResultIndex: -1, showAllResults: true, query: "", loading: false, active: false };
    Vr = { manifest: { id: Zr, name: "Search Plugin", version: "1.0.0", provides: ["search"], requires: ["loader"], optional: [], defaultConfig: { enabled: true, flags: [] } }, create: (e5, t3) => new Wr(Zr, e5, t3), reducer: (e5 = qr, t3) => {
      switch (t3.type) {
        case Lr:
          return { ...e5, active: true };
        case Or:
          return { ...e5, results: [], total: 0, activeResultIndex: -1, query: "", loading: false, active: false };
        case Hr:
          return { ...e5, flags: t3.payload };
        case Dr:
          return { ...e5, showAllResults: t3.payload };
        case Fr:
          return { ...e5, loading: true, query: t3.payload };
        case Ur:
          return { ...e5, results: t3.payload.results, total: t3.payload.total, activeResultIndex: t3.payload.activeResultIndex, loading: false };
        case $r:
          return { ...e5, activeResultIndex: t3.payload };
        default:
          return e5;
      }
    }, initialState: qr };
    Yr = () => rn(Wr.id);
    Kr = "thumbnail";
    Jr = { id: Kr, name: "Thumbnail Plugin", version: "1.0.0", provides: ["thumbnail"], requires: ["render"], optional: [], defaultConfig: { enabled: true, width: 150, gap: 10, buffer: 3, labelHeight: 16 } };
    Qr = class extends Wt {
      constructor(e5, t3, n3) {
        super(e5, t3), this.cfg = n3, this.thumbs = [], this.window = null, this.emitWindow = Qt(), this.taskCache = /* @__PURE__ */ new Map(), this.renderCapability = this.registry.getPlugin("render").provides(), this.coreStore.onAction(Rt, (e6, t4) => {
          this.taskCache.clear(), this.setWindowState(t4);
        });
      }
      async initialize() {
      }
      setWindowState(e5) {
        const t3 = e5.core;
        if (!t3.document) return;
        const n3 = this.cfg.width ?? 120, o3 = this.cfg.labelHeight ?? 16, i4 = this.cfg.gap ?? 8;
        let r4 = 0;
        this.thumbs = t3.document.pages.map((e6) => {
          const t4 = e6.size.height / e6.size.width, a3 = Math.round(n3 * t4), s3 = a3 + o3, l2 = { pageIndex: e6.index, width: n3, height: a3, wrapperHeight: s3, top: r4, labelHeight: o3 };
          return r4 += s3 + i4, l2;
        }), this.window = { start: -1, end: -1, items: [], totalHeight: r4 - i4 }, this.emitWindow.emit(this.window);
      }
      buildCapability() {
        return { onWindow: this.emitWindow.on, setViewport: (e5, t3) => this.updateWindow(e5, t3), renderThumb: (e5, t3) => this.renderThumb(e5, t3) };
      }
      updateWindow(e5, t3) {
        const n3 = this.cfg.buffer ?? 3;
        let o3 = 0, i4 = this.thumbs.length - 1, r4 = 0;
        for (; o3 <= i4; ) {
          const t4 = o3 + i4 >> 1, n4 = this.thumbs[t4];
          n4.top + n4.wrapperHeight < e5 ? o3 = t4 + 1 : (r4 = t4, i4 = t4 - 1);
        }
        let a3 = r4;
        const s3 = e5 + t3;
        for (; a3 + 1 < this.thumbs.length && this.thumbs[a3].top < s3; ) a3++;
        a3 = Math.min(this.thumbs.length - 1, a3 + n3);
        const l2 = Math.max(0, r4 - n3);
        this.window && l2 === this.window.start && a3 === this.window.end || (this.window = { start: l2, end: a3, items: this.thumbs.slice(l2, a3 + 1), totalHeight: this.window.totalHeight }, this.emitWindow.emit(this.window));
      }
      renderThumb(e5, t3) {
        if (this.taskCache.has(e5)) return this.taskCache.get(e5);
        const n3 = this.coreState.core.document.pages[e5], o3 = (this.cfg.width ?? 120) / n3.size.width, i4 = this.renderCapability.renderPageRect({ pageIndex: e5, rect: { origin: { x: 0, y: 0 }, size: n3.size }, scaleFactor: o3, dpr: t3 });
        return this.taskCache.set(e5, i4), i4.wait(_t, () => {
          this.taskCache.delete(e5);
        }), i4;
      }
    };
    Qr.id = "thumbnail";
    ea = { manifest: Jr, create: (e5, t3, n3) => new Qr(Kr, e5, n3), reducer: () => {
    }, initialState: {} };
    ta = () => rn(Qr.id);
    ra = function(e5) {
      var t3 = e5.label, n3 = e5.checked, o3 = e5.onChange;
      return U2("label", { className: "inline-flex cursor-pointer select-none items-center gap-2 text-xs font-medium text-gray-700" }, U2("input", { type: "checkbox", checked: n3, onChange: function(e6) {
        return o3(e6.target.checked);
      }, className: "peer h-4 w-4 shrink-0 appearance-none rounded-[3px] border border-gray-300 bg-white transition-all checked:border-blue-600 checked:bg-blue-600" }), U2("svg", { viewBox: "0 0 24 24", className: "/* fine-tune centering */ pointer-events-none absolute h-3.5 w-3.5 translate-x-[1px] translate-y-[1px] text-white opacity-0 peer-checked:opacity-100", fill: "none", stroke: "currentColor", strokeWidth: 3, strokeLinecap: "round", strokeLinejoin: "round" }, U2("polyline", { points: "20 6 9 17 4 12" })), t3);
    };
    aa = "selection";
    sa = { id: aa, name: "Selection Plugin", version: "1.0.0", provides: ["selection"], requires: ["interaction-manager"], optional: [], defaultConfig: { enabled: true } };
    la = "CACHE_PAGE_GEOMETRY";
    ca = "SET_SELECTION";
    da = "START_SELECTION";
    ua = "END_SELECTION";
    ha = "CLEAR_SELECTION";
    pa = "SET_RECTS";
    ga = "SET_SLICES";
    ma = "RESET";
    _a = class extends Wt {
      constructor(e5, t3, n3) {
        super(e5, t3), this.engine = n3, this.enabledModes = /* @__PURE__ */ new Set(["default"]), this.selecting = false, this.selChange$ = Qt(), this.textRetrieved$ = Qt(), this.copyToClipboard$ = Jt(), this.beginSelection$ = Jt(), this.endSelection$ = Jt(), this.coreStore.onAction(Rt, (e6) => {
          this.dispatch({ type: ma });
        });
      }
      async initialize() {
      }
      async destroy() {
        this.selChange$.clear();
      }
      buildCapability() {
        return { getGeometry: (e5) => this.getOrLoadGeometry(e5), getFormattedSelection: () => function(e5) {
          const t3 = [], n3 = Object.keys(e5.rects).map(Number);
          for (const o3 of n3) {
            const n4 = e5.rects[o3] || [];
            if (0 === n4.length) continue;
            const i4 = va(e5, o3);
            i4 && t3.push({ pageIndex: o3, rect: i4, segmentRects: n4 });
          }
          return t3;
        }(this.state), getFormattedSelectionForPage: (e5) => function(e6, t3) {
          const n3 = e6.rects[t3] || [];
          if (0 === n3.length) return null;
          const o3 = va(e6, t3);
          return o3 ? { pageIndex: t3, rect: o3, segmentRects: n3 } : null;
        }(this.state, e5), getHighlightRectsForPage: (e5) => fa(this.state, e5), getHighlightRects: () => this.state.rects, getBoundingRectForPage: (e5) => va(this.state, e5), getBoundingRects: () => function(e5) {
          const t3 = [], n3 = e5.rects;
          for (const e6 in n3) {
            const o3 = Number(e6), i4 = Qe(n3[o3]);
            i4 && t3.push({ page: o3, rect: i4 });
          }
          return t3;
        }(this.state), begin: (e5, t3) => this.beginSelection(e5, t3), update: (e5, t3) => this.updateSelection(e5, t3), end: () => this.endSelection(), clear: () => this.clearSelection(), onCopyToClipboard: this.copyToClipboard$.on, onSelectionChange: this.selChange$.on, onTextRetrieved: this.textRetrieved$.on, onBeginSelection: this.beginSelection$.on, onEndSelection: this.endSelection$.on, getSelectedText: () => this.getSelectedText(), copyToClipboard: () => this.copyToClipboard(), enableForMode: (e5) => this.enabledModes.add(e5), isEnabledForMode: (e5) => this.enabledModes.has(e5), getState: () => this.state };
      }
      getOrLoadGeometry(e5) {
        const t3 = this.state.geometry[e5];
        if (t3) return wt.resolve(t3);
        if (!this.coreState.core.document) return wt.reject({ code: bt.NotFound, message: "Doc Not Found" });
        const n3 = this.coreState.core.document.pages.find((t4) => t4.index === e5), o3 = this.engine.getPageGeometry(this.coreState.core.document, n3);
        return o3.wait((t4) => {
          this.dispatch(/* @__PURE__ */ ((e6, t5) => ({ type: la, payload: { page: e6, geo: t5 } }))(e5, t4));
        }, _t), o3;
      }
      beginSelection(e5, t3) {
        this.selecting = true, this.anchor = { page: e5, index: t3 }, this.dispatch({ type: da }), this.beginSelection$.emit({ page: e5, index: t3 });
      }
      endSelection() {
        this.selecting = false, this.anchor = void 0, this.dispatch({ type: ua }), this.endSelection$.emit();
      }
      clearSelection() {
        this.selecting = false, this.anchor = void 0, this.dispatch({ type: ha }), this.selChange$.emit(null);
      }
      updateSelection(e5, t3) {
        if (!this.selecting || !this.anchor) return;
        const n3 = this.anchor, o3 = e5 > n3.page || e5 === n3.page && t3 >= n3.index, i4 = { start: o3 ? n3 : { page: e5, index: t3 }, end: o3 ? { page: e5, index: t3 } : n3 };
        this.dispatch(/* @__PURE__ */ ((e6) => ({ type: ca, payload: e6 }))(i4)), this.updateRectsAndSlices(i4), this.selChange$.emit(i4);
      }
      updateRectsAndSlices(e5) {
        const t3 = {}, n3 = {};
        for (let o3 = e5.start.page; o3 <= e5.end.page; o3++) {
          const i4 = this.state.geometry[o3], r4 = ba(e5, i4, o3);
          r4 && (t3[o3] = wa(i4, r4.from, r4.to), n3[o3] = { start: r4.from, count: r4.to - r4.from + 1 });
        }
        this.dispatch(/* @__PURE__ */ ((e6) => ({ type: pa, payload: e6 }))(t3)), this.dispatch(/* @__PURE__ */ ((e6) => ({ type: ga, payload: e6 }))(n3));
      }
      getSelectedText() {
        if (!this.coreState.core.document || !this.state.selection) return wt.reject({ code: bt.NotFound, message: "Doc Not Found or No Selection" });
        const e5 = this.state.selection, t3 = [];
        for (let n4 = e5.start.page; n4 <= e5.end.page; n4++) {
          const e6 = this.state.slices[n4];
          e6 && t3.push({ pageIndex: n4, charIndex: e6.start, charCount: e6.count });
        }
        if (0 === t3.length) return wt.resolve([]);
        const n3 = this.engine.getTextSlices(this.coreState.core.document, t3);
        return n3.wait((e6) => {
          this.textRetrieved$.emit(e6);
        }, _t), n3;
      }
      copyToClipboard() {
        this.getSelectedText().wait((e5) => {
          this.copyToClipboard$.emit(e5.join("\n"));
        }, _t);
      }
    };
    _a.id = "selection";
    Ia = _a;
    Ma = { geometry: {}, rects: {}, slices: {}, selection: null, active: false, selecting: false };
    Pa = { manifest: sa, create: (e5, t3) => new Ia(aa, e5, t3), reducer: (e5 = Ma, t3) => {
      switch (t3.type) {
        case la: {
          const { page: n3, geo: o3 } = t3.payload;
          return { ...e5, geometry: { ...e5.geometry, [n3]: o3 } };
        }
        case ca:
          return { ...e5, selection: t3.payload, active: true };
        case da:
          return { ...e5, selecting: true, selection: null, rects: {} };
        case ua:
          return { ...e5, selecting: false };
        case ha:
          return { ...e5, selecting: false, selection: null, rects: {}, active: false };
        case pa:
          return { ...e5, rects: t3.payload };
        case ga:
          return { ...e5, slices: t3.payload };
        case ma:
          return Ma;
        default:
          return e5;
      }
    }, initialState: Ma };
    Ta = () => rn(Ia.id);
    La = "print";
    Oa = { id: La, name: "Print Plugin", version: "1.0.0", provides: ["print"], requires: ["render"], optional: [], defaultConfig: { enabled: true } };
    Ha = ((e5) => (e5[e5.Degree0 = 0] = "Degree0", e5[e5.Degree90 = 1] = "Degree90", e5[e5.Degree180 = 2] = "Degree180", e5[e5.Degree270 = 3] = "Degree270", e5))(Ha || {});
    Da = Object.freeze(["\xAD", "\u200B", "\u2060", "\uFEFF", "\uFFFE", "\uFFFF"]);
    new RegExp(`[${Da.join("")}]`, "g");
    Fa = Object.freeze({ 1: "invisible", 2: "hidden", 4: "print", 8: "noZoom", 16: "noRotate", 32: "noView", 64: "readOnly", 128: "locked", 256: "toggleNoView" });
    Object.entries(Fa).reduce((e5, [t3, n3]) => (e5[n3] = Number(t3), e5), {});
    Ua = class extends Wt {
      constructor(e5, t3, n3) {
        super(e5, t3), this.engine = n3;
      }
      async initialize(e5) {
      }
      buildCapability() {
        return { renderPage: this.renderPage.bind(this), renderPageRect: this.renderPageRect.bind(this) };
      }
      renderPage({ pageIndex: e5, scaleFactor: t3 = 1, dpr: n3 = 1, rotation: o3 = Ha.Degree0, options: i4 = { withAnnotations: false }, imageType: r4 = "image/webp" }) {
        const a3 = this.coreState.core;
        if (!a3.document) throw new Error("document does not open");
        const s3 = a3.document.pages.find((t4) => t4.index === e5);
        if (!s3) throw new Error("page does not exist");
        return this.engine.renderPage(a3.document, s3, t3, o3, n3, i4, r4);
      }
      renderPageRect({ pageIndex: e5, scaleFactor: t3 = 1, dpr: n3 = 1, rect: o3, rotation: i4 = Ha.Degree0, options: r4 = { withAnnotations: false }, imageType: a3 = "image/webp" }) {
        const s3 = this.coreState.core;
        if (!s3.document) throw new Error("document does not open");
        const l2 = s3.document.pages.find((t4) => t4.index === e5);
        if (!l2) throw new Error("page does not exist");
        return this.engine.renderPageRect(s3.document, l2, t3, i4, n3, o3, r4, a3);
      }
    };
    Ua.id = "render";
    $a = Ua;
    ja = ((e5) => (e5.Normal = "normal", e5.High = "high", e5))(ja || {});
    Ba = ((e5) => (e5.Current = "current", e5.All = "all", e5.Custom = "custom", e5))(Ba || {});
    Ga = class extends Wt {
      constructor(e5, t3, n3) {
        super(e5, t3), this.config = n3, this.renderCapability = this.registry.getPlugin($a.id)?.provides();
      }
      async initialize(e5) {
      }
      buildCapability() {
        return { preparePrint: this.preparePrint.bind(this), parsePageRange: this.parsePageRange.bind(this) };
      }
      async preparePrint(e5, t3, n3) {
        const o3 = this.coreState.core;
        if (!o3.document) throw new Error("No document loaded");
        const i4 = this.getPagesToPrint(e5, o3.document.pages.length), r4 = i4.length, a3 = this.config?.batchSize || 3;
        t3?.({ current: 0, total: r4, status: "preparing", message: `Preparing to render ${r4} page${1 !== r4 ? "s" : ""}...` });
        const s3 = this.getScaleFactor(e5.quality);
        for (let o4 = 0; o4 < i4.length; o4 += a3) {
          const l2 = Math.min(o4 + a3, i4.length), c2 = i4.slice(o4, l2).map(async (i5, a4) => {
            const l3 = o4 + a4;
            t3?.({ current: l3, total: r4, status: "rendering", message: `Rendering page ${i5 + 1}...` });
            const c3 = await this.renderPage(i5, s3, 1, e5.includeAnnotations);
            n3?.({ pageIndex: i5, blob: c3 });
          });
          await Promise.all(c2);
        }
        t3?.({ current: r4, total: r4, status: "complete", message: "All pages rendered successfully" });
      }
      async renderPage(e5, t3, n3, o3) {
        return new Promise((i4, r4) => {
          this.renderCapability.renderPage({ pageIndex: e5, scaleFactor: t3, dpr: n3, rotation: Ha.Degree0, options: { withAnnotations: o3 } }).wait((e6) => i4(e6), (t4) => r4(new Error(`Failed to render page ${e5 + 1}: ${t4.reason.message || "Unknown error"}`)));
        });
      }
      getScaleFactor(e5) {
        return "high" === e5 ? 1.5 : 1;
      }
      getPagesToPrint(e5, t3) {
        const { pageRange: n3 } = e5;
        switch (n3.type) {
          case "current":
            return void 0 !== n3.currentPage ? [n3.currentPage] : [0];
          case "all":
            return Array.from({ length: t3 }, (e6, t4) => t4);
          case "custom":
            return n3.pages ? n3.pages.filter((e6) => e6 >= 0 && e6 < t3).sort((e6, t4) => e6 - t4) : [0];
          default:
            return [0];
        }
      }
      parsePageRange(e5) {
        try {
          const t3 = this.coreState.core.document?.pages.length || 0, n3 = [], o3 = e5.split(",").map((e6) => e6.trim());
          for (const e6 of o3) if (e6.includes("-")) {
            const [o4, i5] = e6.split("-").map((e7) => parseInt(e7.trim()));
            if (isNaN(o4) || isNaN(i5)) return { pages: [], isValid: false, error: `Invalid range: ${e6}` };
            if (o4 > i5) return { pages: [], isValid: false, error: `Invalid range: ${e6} (start > end)` };
            for (let e7 = o4; e7 <= i5; e7++) e7 >= 1 && e7 <= t3 && n3.push(e7 - 1);
          } else {
            const o4 = parseInt(e6);
            if (isNaN(o4)) return { pages: [], isValid: false, error: `Invalid page number: ${e6}` };
            o4 >= 1 && o4 <= t3 && n3.push(o4 - 1);
          }
          const i4 = [...new Set(n3)].sort((e6, t4) => e6 - t4);
          return { pages: i4, isValid: true };
        } catch (e6) {
          return { pages: [], isValid: false, error: `Parsing error: ${e6 instanceof Error ? e6.message : "Unknown error"}` };
        }
      }
    };
    Ga.id = "print";
    Wa = { manifest: Oa, create: (e5, t3, n3) => new Ga(La, e5, n3), reducer: () => {
    }, initialState: {} };
    Za = le(null);
    qa = ({ pageResult: e5 }) => {
      const [t3, n3] = Ie("");
      Me(() => {
        const t4 = URL.createObjectURL(e5.blob);
        return n3(t4), () => {
          URL.revokeObjectURL(t4);
        };
      }, [e5.blob]);
      return ue("div", { style: { pageBreakAfter: "always", width: "210mm", minHeight: "297mm", margin: "0 auto", background: "white", position: "relative" }, children: ue("img", { src: t3, onLoad: () => {
        t3 && URL.revokeObjectURL(t3);
      }, alt: `Page ${e5.pageIndex + 1}`, style: { width: "100%", height: "auto", display: "block", objectFit: "contain" } }) });
    };
    Va = ({ pages: e5 }) => ue("div", { style: { fontFamily: "Arial, sans-serif", fontSize: "12px", lineHeight: "1.4", color: "#000", backgroundColor: "#fff" }, children: [ue("style", { children: "\n        @media print {\n          body { margin: 0; padding: 0; }\n        }\n      " }), e5.map((e6) => ue("div", { children: ue(qa, { pageResult: e6 }) }, e6.pageIndex))] });
    Xa = () => {
      const { executePrint: e5, progress: t3, isReady: n3, isPrinting: o3, parsePageRange: i4 } = function() {
        const e6 = ze(Za);
        if (!e6) throw new Error("usePrintContext must be used within a PrintProvider");
        return e6;
      }();
      return { executePrint: e5, progress: t3, isReady: n3, isPrinting: o3, parsePageRange: i4 };
    };
    Ka = "bookmark";
    Ja = { id: Ka, name: "Bookmark Plugin", version: "1.0.0", provides: ["bookmark"], requires: [], optional: [], defaultConfig: { enabled: true } };
    Qa = class extends Wt {
      constructor(e5, t3, n3) {
        super(e5, t3), this.engine = n3;
      }
      async initialize(e5) {
      }
      buildCapability() {
        return { getBookmarks: this.getBookmarks.bind(this) };
      }
      getBookmarks() {
        const e5 = this.coreState.core.document;
        if (!e5) throw new Error("Document not open");
        return this.engine.getBookmarks(e5);
      }
    };
    Qa.id = "bookmark";
    es = { manifest: Ja, create: (e5, t3) => new Qa(Ka, e5, t3), reducer: () => {
    }, initialState: {} };
    ts = "annotation";
    ns = { id: ts, name: "Annotation Plugin", version: "1.0.0", provides: ["annotation"], requires: ["interaction-manager", "selection"], optional: ["history"], defaultConfig: { enabled: true, autoCommit: true } };
    os = "ANNOTATION/SET_ANNOTATIONS";
    is = "ANNOTATION/REINDEX_PAGE";
    rs = "ANNOTATION/SELECT_ANNOTATION";
    as = "ANNOTATION/DESELECT_ANNOTATION";
    ss = "ANNOTATION/SET_ANNOTATION_MODE";
    ls = "ANNOTATION/UPDATE_TOOL_DEFAULTS";
    cs = "ANNOTATION/ADD_COLOR_PRESET";
    ds = "ANNOTATION/CREATE_ANNOTATION";
    us = "ANNOTATION/PATCH_ANNOTATION";
    hs = "ANNOTATION/DELETE_ANNOTATION";
    ps = "ANNOTATION/COMMIT";
    gs = "ANNOTATION/STORE_PDF_ID";
    ms = "ANNOTATION/PURGE_ANNOTATION";
    fs = (e5) => ({ type: is, payload: { pageIndex: e5 } });
    vs = () => ({ type: as });
    ys = (e5, t3, n3) => ({ type: ds, payload: { pageIndex: e5, localId: t3, annotation: n3 } });
    bs = (e5, t3, n3) => ({ type: us, payload: { pageIndex: e5, localId: t3, patch: n3 } });
    ws = (e5, t3) => ({ type: hs, payload: { pageIndex: e5, localId: t3 } });
    xs = (e5, t3) => ({ type: gs, payload: { uid: e5, pdfId: t3 } });
    ks = (e5) => ({ type: ms, payload: { uid: e5 } });
    Cs = (e5, t3) => `p${e5}#${t3}`;
    Ss = (e5) => {
      const [t3, n3] = e5.slice(1).split("#");
      return { pageIndex: Number(t3), localId: Number(n3) };
    };
    _s = (e5) => {
      if (!e5.selectedUid) return null;
      const { pageIndex: t3, localId: n3 } = Ss(e5.selectedUid);
      return { pageIndex: t3, localId: n3, annotation: e5.byUid[e5.selectedUid].object };
    };
    Is = class extends Wt {
      constructor(e5, t3, n3, o3) {
        super(e5, t3), this.ANNOTATION_HISTORY_TOPIC = "annotations", this.state$ = Qt(), this.modeBySubtype = /* @__PURE__ */ new Map(), this.subtypeByMode = /* @__PURE__ */ new Map(), this.modeChange$ = Qt(), this.activeTool$ = Qt({ mode: null, defaults: null }), this.engine = n3, this.config = o3;
        const i4 = t3.getPlugin("selection");
        this.selection = i4?.provides() ?? null;
        const r4 = t3.getPlugin("history");
        this.history = r4?.provides() ?? null;
        const a3 = t3.getPlugin("interaction-manager");
        this.interactionManager = a3?.provides() ?? null, this.coreStore.onAction(Rt, (e6, t4) => {
          const n4 = t4.core.document;
          n4 && this.getAllAnnotations(n4);
        });
      }
      async initialize() {
        for (const [e5, t3] of function(e6) {
          return Object.entries(e6).map(([e7, t4]) => {
            const n3 = Number(e7);
            return [Number.isFinite(n3) && "" !== e7.trim() ? n3 : e7, t4];
          });
        }(this.state.toolDefaults)) this.registerTool(e5, t3);
        this.history?.onHistoryChange((e5) => {
          e5 === this.ANNOTATION_HISTORY_TOPIC && false !== this.config.autoCommit && this.commit();
        }), this.interactionManager?.onModeChange((e5) => {
          const t3 = this.subtypeByMode.get(e5.activeMode) ?? null;
          t3 !== this.state.annotationMode && (this.dispatch(/* @__PURE__ */ ((e6) => ({ type: ss, payload: e6 }))(t3)), this.modeChange$.emit(t3));
        }), this.selection?.onEndSelection(() => {
          if (!this.state.annotationMode) return;
          if (this.state.annotationMode !== dt.HIGHLIGHT && this.state.annotationMode !== dt.UNDERLINE && this.state.annotationMode !== dt.STRIKEOUT && this.state.annotationMode !== dt.SQUIGGLY) return;
          const e5 = this.selection?.getFormattedSelection();
          if (e5) {
            for (const t3 of e5) {
              const e6 = t3.rect, n3 = t3.segmentRects, o3 = this.state.annotationMode, i4 = this.state.toolDefaults[o3].color, r4 = this.state.toolDefaults[o3].opacity;
              this.createAnnotation(t3.pageIndex, { type: o3, rect: e6, segmentRects: n3, color: i4, opacity: r4, pageIndex: t3.pageIndex, id: Date.now() + Math.random() });
            }
            this.selection?.clear();
          }
        });
      }
      registerTool(e5, t3) {
        const n3 = t3.interaction.mode, o3 = { id: n3, scope: "page", exclusive: t3.interaction.exclusive, cursor: t3.interaction.cursor };
        this.interactionManager?.registerMode(o3), t3.textSelection && this.selection?.enableForMode(n3), this.modeBySubtype.set(e5, n3), this.subtypeByMode.set(n3, e5);
      }
      buildCapability() {
        return { getPageAnnotations: (e5) => this.getPageAnnotations(e5), getSelectedAnnotation: () => ((e5) => e5.selectedUid ? e5.byUid[e5.selectedUid] : null)(this.state), selectAnnotation: (e5, t3) => {
          this.selectAnnotation(e5, t3);
        }, deselectAnnotation: () => {
          this.dispatch(vs());
        }, getAnnotationMode: () => this.state.annotationMode, setAnnotationMode: (e5) => {
          if (e5 !== this.state.annotationMode) if (e5) {
            const t3 = this.modeBySubtype.get(e5);
            if (!t3) throw new Error(`Mode missing for subtype ${e5}`);
            this.interactionManager?.activate(t3);
          } else this.interactionManager?.activate("default");
        }, getToolDefaults: (e5) => {
          const t3 = this.state.toolDefaults[e5];
          if (!t3) throw new Error(`No defaults found for subtype: ${e5}`);
          return t3;
        }, setToolDefaults: (e5, t3) => {
          this.dispatch(/* @__PURE__ */ ((e6, t4) => ({ type: ls, payload: { subtype: e6, patch: t4 } }))(e5, t3));
        }, getColorPresets: () => [...this.state.colorPresets], addColorPreset: (e5) => this.dispatch(/* @__PURE__ */ ((e6) => ({ type: cs, payload: e6 }))(e5)), createAnnotation: (e5, t3) => this.createAnnotation(e5, t3), updateAnnotation: (e5, t3, n3) => this.updateAnnotation(e5, t3, n3), deleteAnnotation: (e5, t3) => this.deleteAnnotation(e5, t3), renderAnnotation: (e5) => this.renderAnnotation(e5), onStateChange: this.state$.on, onModeChange: this.modeChange$.on, onActiveToolChange: this.activeTool$.on, commit: () => this.commit() };
      }
      createActiveTool(e5, t3) {
        return null === e5 ? { mode: null, defaults: null } : { mode: e5, defaults: t3[e5] };
      }
      emitActiveTool(e5) {
        const t3 = this.createActiveTool(e5.annotationMode, e5.toolDefaults);
        this.activeTool$.emit(t3);
      }
      onStoreUpdated(e5, t3) {
        this.state$.emit(t3), e5.annotationMode === t3.annotationMode && e5.toolDefaults[e5.annotationMode ?? dt.HIGHLIGHT] === t3.toolDefaults[t3.annotationMode ?? dt.HIGHLIGHT] || this.emitActiveTool(t3);
      }
      getAllAnnotations(e5) {
        this.engine.getAllAnnotations(e5).wait((e6) => this.dispatch(/* @__PURE__ */ ((e7) => ({ type: os, payload: e7 }))(e6)), _t);
      }
      getPageAnnotations(e5) {
        const { pageIndex: t3 } = e5, n3 = this.coreState.core.document;
        if (!n3) return wt.reject({ code: bt.NotFound, message: "Document not found" });
        const o3 = n3.pages.find((e6) => e6.index === t3);
        return o3 ? this.engine.getPageAnnotations(n3, o3) : wt.reject({ code: bt.NotFound, message: "Page not found" });
      }
      renderAnnotation({ pageIndex: e5, annotation: t3, scaleFactor: n3 = 1, rotation: o3 = Ue.Degree0, dpr: i4 = 1, mode: r4 = ut.Normal, imageType: a3 = "image/webp" }) {
        const s3 = this.coreState.core;
        if (!s3.document) throw new Error("document does not open");
        const l2 = s3.document.pages.find((t4) => t4.index === e5);
        if (!l2) throw new Error("page does not exist");
        return this.engine.renderAnnotation(s3.document, l2, t3, n3, o3, i4, r4, a3);
      }
      selectAnnotation(e5, t3) {
        this.dispatch(/* @__PURE__ */ ((e6, t4) => ({ type: rs, payload: { pageIndex: e6, localId: t4 } }))(e5, t3));
      }
      createAnnotation(e5, t3) {
        const n3 = t3.id, o3 = () => this.dispatch(ys(e5, n3, t3));
        if (!this.history) return o3(), void (this.config.autoCommit && this.commit());
        const i4 = { execute: o3, undo: () => {
          this.dispatch(vs()), this.dispatch(ws(e5, n3));
        } };
        this.history.register(i4, this.ANNOTATION_HISTORY_TOPIC);
      }
      updateAnnotation(e5, t3, n3) {
        if (!this.history) return this.dispatch(bs(e5, t3, n3)), void (false !== this.config.autoCommit && this.commit());
        const o3 = this.state.byUid[Cs(e5, t3)].object, i4 = Object.fromEntries(Object.keys(n3).map((e6) => [e6, o3[e6]])), r4 = { execute: () => this.dispatch(bs(e5, t3, n3)), undo: () => this.dispatch(bs(e5, t3, i4)) };
        this.history.register(r4, this.ANNOTATION_HISTORY_TOPIC);
      }
      deleteAnnotation(e5, t3) {
        if (!this.history) return this.dispatch(vs()), this.dispatch(ws(e5, t3)), void (false !== this.config.autoCommit && this.commit());
        const n3 = this.state.byUid[Cs(e5, t3)].object, o3 = { execute: () => {
          this.dispatch(vs()), this.dispatch(ws(e5, t3));
        }, undo: () => this.dispatch(ys(e5, t3, n3)) };
        this.history.register(o3, this.ANNOTATION_HISTORY_TOPIC);
      }
      commit() {
        const e5 = new it();
        if (!this.state.hasPendingChanges) return wt.resolve(true);
        const t3 = this.coreState.core.document;
        if (!t3) return wt.reject({ code: bt.NotFound, message: "Document not found" });
        const n3 = [], o3 = [], i4 = /* @__PURE__ */ new Map(), r4 = /* @__PURE__ */ new Set();
        for (const [e6, a4] of Object.entries(this.state.byUid)) {
          if ("synced" === a4.commitState) continue;
          const { pageIndex: s4 } = Ss(e6), l2 = t3.pages.find((e7) => e7.index === s4);
          if (l2) switch (r4.add(s4), a4.commitState) {
            case "new":
              const r5 = this.engine.createPageAnnotation(t3, l2, a4.object);
              r5.wait((t4) => this.dispatch(xs(e6, t4)), _t), n3.push(r5);
              break;
            case "dirty":
              o3.push(this.engine.updatePageAnnotation(t3, l2, { ...a4.object, id: a4.pdfId }));
              break;
            case "deleted":
              i4.has(s4) || i4.set(s4, []), i4.get(s4).push({ ta: a4, uid: e6 });
          }
        }
        const a3 = [];
        for (const [e6, n4] of i4.entries()) {
          const o4 = t3.pages.find((t4) => t4.index === e6);
          n4.sort((e7, t4) => (t4.ta.pdfId ?? -1) - (e7.ta.pdfId ?? -1));
          for (const { ta: e7, uid: i5 } of n4) if (void 0 !== e7.pdfId) {
            const n5 = new it();
            this.engine.removePageAnnotation(t3, o4, { ...e7.object, id: e7.pdfId }).wait(() => {
              this.dispatch(ks(i5)), n5.resolve(true);
            }, n5.fail), a3.push(n5);
          } else this.dispatch(ks(i5));
        }
        const s3 = [...n3, ...o3, ...a3];
        return it.allSettled(s3).wait(() => {
          for (const e6 of r4) this.dispatch(fs(e6));
          this.dispatch({ type: ps }), e5.resolve(true);
        }, e5.fail), e5;
      }
    };
    Is.id = "annotation";
    Ms = ["#E44234", "#FF8D00", "#FFCD45", "#5CC96E", "#25D2D1", "#597CE2", "#C544CE", "#7D2E25"];
    Ps = { manifest: ns, create: (e5, t3, n3) => new Is(ts, e5, t3, n3), reducer: (e5, t3) => {
      switch (t3.type) {
        case os: {
          const n3 = { ...e5.pages }, o3 = { ...e5.byUid };
          for (const [i4, r4] of Object.entries(t3.payload)) {
            const t4 = Number(i4), a3 = e5.pages[t4] || [];
            for (const e6 of a3) delete o3[e6];
            const s3 = r4.map((e6, n4) => {
              const i5 = Date.now() + Math.random() + n4, r5 = Cs(t4, i5);
              return o3[r5] = { localId: i5, pdfId: e6.id, commitState: "synced", object: e6 }, r5;
            });
            n3[t4] = s3;
          }
          return { ...e5, pages: n3, byUid: o3 };
        }
        case ss:
          return { ...e5, annotationMode: t3.payload };
        case rs:
          return { ...e5, selectedUid: Cs(t3.payload.pageIndex, t3.payload.localId) };
        case as:
          return { ...e5, selectedUid: null };
        case cs:
          return e5.colorPresets.includes(t3.payload) ? e5 : { ...e5, colorPresets: [...e5.colorPresets, t3.payload] };
        case ls: {
          const { subtype: n3, patch: o3 } = t3.payload;
          return { ...e5, toolDefaults: { ...e5.toolDefaults, [n3]: { ...e5.toolDefaults[n3], ...o3 } } };
        }
        case ds: {
          const { pageIndex: n3, localId: o3, annotation: i4 } = t3.payload, r4 = Cs(n3, o3);
          return { ...e5, pages: { ...e5.pages, [n3]: [...e5.pages[n3] ?? [], r4] }, byUid: { ...e5.byUid, [r4]: { localId: o3, pdfId: void 0, commitState: "new", object: i4 } }, hasPendingChanges: true };
        }
        case hs: {
          const { pageIndex: n3, localId: o3 } = t3.payload, i4 = Cs(n3, o3);
          return e5.byUid[i4] ? { ...e5, pages: { ...e5.pages, [n3]: (e5.pages[n3] ?? []).filter((e6) => e6 !== i4) }, byUid: { ...e5.byUid, [i4]: { ...e5.byUid[i4], commitState: "deleted" } }, hasPendingChanges: true } : e5;
        }
        case us: {
          const n3 = Cs(t3.payload.pageIndex, t3.payload.localId);
          return ((e6, t4, n4) => {
            const o3 = e6.byUid[t4];
            return o3 ? { ...e6, byUid: { ...e6.byUid, [t4]: { ...o3, commitState: "synced" === o3.commitState ? "dirty" : o3.commitState, object: { ...o3.object, ...n4 } } }, hasPendingChanges: true } : e6;
          })(e5, n3, t3.payload.patch);
        }
        case ps: {
          const t4 = {};
          for (const [n3, o3] of Object.entries(e5.byUid)) t4[n3] = { ...o3, commitState: "dirty" === o3.commitState || "new" === o3.commitState ? "synced" : o3.commitState };
          return { ...e5, byUid: t4, hasPendingChanges: false };
        }
        case is: {
          const { pageIndex: n3 } = t3.payload, o3 = { ...e5.byUid }, i4 = (e5.pages[n3] || []).map((t4) => e5.byUid[t4]).filter((e6) => e6 && "deleted" !== e6.commitState);
          return i4.sort((e6, t4) => (e6.pdfId ?? 1 / 0) - (t4.pdfId ?? 1 / 0)), i4.forEach((e6, t4) => {
            const i5 = Cs(n3, e6.localId);
            o3[i5] = { ...o3[i5], pdfId: t4 };
          }), { ...e5, byUid: o3 };
        }
        case gs: {
          const { uid: n3, pdfId: o3 } = t3.payload, i4 = e5.byUid[n3];
          return i4 ? { ...e5, byUid: { ...e5.byUid, [n3]: { ...i4, pdfId: o3, commitState: "synced" } } } : e5;
        }
        case ms: {
          const { uid: n3 } = t3.payload, { [n3]: o3, ...i4 } = e5.byUid;
          return { ...e5, byUid: i4 };
        }
        default:
          return e5;
      }
    }, initialState: (e5, t3) => {
      return n3 = t3, { pages: {}, byUid: {}, selectedUid: null, annotationMode: null, toolDefaults: { [dt.HIGHLIGHT]: { name: "Highlight", color: "#FFCD45", opacity: 1, interaction: { mode: "highlight", exclusive: false }, textSelection: true }, [dt.UNDERLINE]: { name: "Underline", color: "#E44234", opacity: 1, interaction: { mode: "underline", exclusive: false }, textSelection: true }, [dt.STRIKEOUT]: { name: "Strikeout", color: "#E44234", opacity: 1, interaction: { mode: "strikeout", exclusive: false }, textSelection: true }, [dt.SQUIGGLY]: { name: "Squiggly", color: "#E44234", opacity: 1, interaction: { mode: "squiggly", exclusive: false }, textSelection: true }, [dt.INK]: { name: "Ink", color: "#E44234", opacity: 1, strokeWidth: 11, interaction: { mode: "ink", exclusive: true, cursor: "crosshair" }, textSelection: false }, ...n3.toolDefaults }, colorPresets: n3.colorPresets ?? Ms, hasPendingChanges: false };
      var n3;
    } };
    Ts = () => rn(Is.id);
    Fs = ({ pageIndex: e5, scale: t3, pageWidth: n3, pageHeight: o3 }) => {
      const { provides: i4 } = Ts(), [r4, a3] = Ie({ mode: null, defaults: null });
      if (Me(() => {
        if (!i4) return;
        return i4.onActiveToolChange(a3);
      }, [i4]), r4.mode !== dt.INK) return null;
      const s3 = r4.defaults?.color ?? "#000000", l2 = r4.defaults?.opacity ?? 1, c2 = r4.defaults?.strokeWidth ?? 2, { register: d2 } = Ir({ modeId: "ink", pageIndex: e5 }), u2 = (e6, t4, n4) => Math.max(t4, Math.min(n4, e6)), [h2, p2] = Ie([]), [g2, m2] = Ie(false), f2 = Te(null), v3 = n3 / t3, y3 = o3 / t3, b2 = Ee(() => ({ onPointerDown: (e6, t4) => {
        const n4 = u2(e6.x, 0, v3), o4 = u2(e6.y, 0, y3);
        m2(true), f2.current ? (clearTimeout(f2.current), f2.current = null, p2((e7) => [...e7, { points: [{ x: n4, y: o4 }] }])) : p2([{ points: [{ x: n4, y: o4 }] }]), t4.target?.setPointerCapture?.(t4.pointerId);
      }, onPointerMove: (e6) => {
        if (!g2) return;
        const t4 = u2(e6.x, 0, v3), n4 = u2(e6.y, 0, y3);
        p2((e7) => {
          if (!e7.length) return e7;
          const o4 = { points: [...e7[e7.length - 1].points, { x: t4, y: n4 }] };
          return [...e7.slice(0, -1), o4];
        });
      }, onPointerUp: (t4, n4) => {
        m2(false), n4.target?.releasePointerCapture?.(n4.pointerId), f2.current && clearTimeout(f2.current), f2.current = setTimeout(() => {
          if (h2.length && i4) {
            const t5 = h2.flatMap((e6) => e6.points);
            if (!t5.length) return;
            const n5 = Math.min(...t5.map((e6) => e6.x)), o4 = Math.min(...t5.map((e6) => e6.y)), r5 = Math.max(...t5.map((e6) => e6.x)), a4 = Math.max(...t5.map((e6) => e6.y)), d3 = 15, u3 = n5 - d3, p3 = o4 - d3, g3 = r5 + d3, m3 = a4 + d3;
            if (g3 - u3 < 1 || m3 - p3 < 1) return;
            const f3 = { origin: { x: u3, y: p3 }, size: { width: g3 - u3, height: m3 - p3 } }, v4 = { type: dt.INK, rect: f3, inkList: h2, color: s3, opacity: l2, strokeWidth: c2, pageIndex: e5, id: Date.now() + Math.random() };
            i4.createAnnotation(e5, v4), i4.setAnnotationMode(null), i4.selectAnnotation(e5, v4.id);
          }
          p2([]), f2.current = null;
        }, 3e3);
      }, onPointerCancel: (e6, t4) => {
        m2(false), t4.target?.releasePointerCapture?.(t4.pointerId), p2([]), f2.current && (clearTimeout(f2.current), f2.current = null);
      } }), [v3, y3, h2, i4, e5, s3, l2, c2, g2]);
      if (Me(() => {
        if (d2) return d2(b2);
      }, [d2, b2]), Me(() => () => {
        f2.current && clearTimeout(f2.current);
      }, []), !h2.length) return null;
      const w3 = h2.flatMap((e6) => e6.points);
      if (!w3.length) return null;
      const x3 = Math.min(...w3.map((e6) => e6.x)), k3 = Math.min(...w3.map((e6) => e6.y)), C3 = Math.max(...w3.map((e6) => e6.x)), S2 = Math.max(...w3.map((e6) => e6.y)), _2 = x3 - 15, I3 = k3 - 15, M2 = C3 + 15 - _2, P2 = S2 + 15 - I3, T3 = h2.map(({ points: e6 }) => {
        let t4 = "";
        return e6.forEach(({ x: e7, y: n4 }, o4) => {
          t4 += (0 === o4 ? "M" : "L") + (e7 - _2) + " " + (n4 - I3) + " ";
        }), t4.trim();
      });
      return ue("svg", { style: { position: "absolute", left: _2 * t3, top: I3 * t3, width: M2 * t3, height: P2 * t3, pointerEvents: "none", zIndex: 2 }, width: M2 * t3, height: P2 * t3, viewBox: `0 0 ${M2} ${P2}`, children: T3.map((e6, t4) => ue("path", { d: e6, fill: "none", stroke: s3, strokeWidth: c2, strokeLinecap: "round", strokeLinejoin: "round", opacity: l2 }, t4)) });
    };
    $s = ["commandId", "onClick", "active", "color", "disabled"];
    js = ["commandId", "onClick", "active"];
    Bs = function(e5, t3, n3) {
      var o3 = e5.commandId, i4 = e5.onClick, r4 = e5.active, a3 = e5.color, s3 = e5.disabled, l2 = void 0 !== s3 && s3, c2 = g(e5, $s), d2 = nr().provides, u2 = o3 ? null == d2 ? void 0 : d2.getMenuOrAction(o3) : null, h2 = Ae(function(e6) {
        if (e6.preventDefault(), e6.stopPropagation(), i4) i4();
        else if (o3 && d2 && u2) {
          var t4 = e6.currentTarget;
          d2.executeCommand(o3, { source: "click", triggerElement: t4, position: "horizontal" === (null == n3 ? void 0 : n3.direction) ? "bottom" : "right" });
        }
      }, [u2, o3, d2, i4]);
      return U2(Ei, { position: "horizontal" === (null == n3 ? void 0 : n3.direction) ? "bottom" : "right", content: c2.label || (null == u2 ? void 0 : u2.label) || "", trigger: r4 ? "none" : "hover", delay: 500 }, U2(bo, { active: r4, onClick: h2, disabled: l2, className: " ".concat("flyout" === (null == n3 ? void 0 : n3.variant) ? "w-full rounded-none px-2" : "", " ") }, !(null != u2 && u2.icon) && c2.img && U2("img", { src: c2.img, alt: c2.label, className: "h-5 w-5" }), (null == u2 ? void 0 : u2.icon) && U2(Nr, { icon: u2.icon, className: "h-5 w-5", style: { color: a3 } })));
    };
    Gs = function(e5, t3) {
      var n3 = e5.commandId, o3 = e5.onClick, i4 = e5.active, r4 = g(e5, js), a3 = nr().provides, s3 = n3 ? null == a3 ? void 0 : a3.getMenuOrAction(n3) : null, l2 = Ae(function(e6) {
        e6.preventDefault(), e6.stopPropagation(), o3 ? o3() : n3 && a3 && s3 && a3.executeCommand(n3, { source: "click" });
      }, [s3, n3, a3, o3]);
      return U2(bo, { key: r4.id, className: "rounded-none px-2 py-1 text-sm hover:bg-transparent ".concat(i4 ? "border-b-2 border-b-blue-500 text-blue-500" : "border-b-2 border-b-transparent hover:border-b-gray-500", " hover:ring-transparent"), onClick: l2 }, r4.label);
    };
    Ws = function(e5, t3, n3) {
      return U2("div", { className: "horizontal" === (null == n3 ? void 0 : n3.direction) ? "h-6 w-[1px] bg-gray-300 self-center" : "h-[1px] w-6 bg-gray-300 self-center" });
    };
    Zs = function(e5, t3, n3) {
      return U2("div", { style: { display: "flex", flexDirection: "horizontal" === (null == n3 ? void 0 : n3.direction) ? "row" : "column", justifyContent: e5.justifyContent || "start", gap: "".concat(e5.gap || 0, "px") } }, t3());
    };
    qs = function(e5, t3) {
      var n3 = p(p(p({}, "top" === e5.placement ? { borderBottom: "1px solid #cfd4da" } : "bottom" === e5.placement ? { borderTop: "1px solid #cfd4da" } : "left" === e5.placement ? { borderRight: "1px solid #cfd4da" } : { borderLeft: "1px solid #cfd4da" }), {}, { width: "top" === e5.placement || "bottom" === e5.placement ? "100%" : "auto", height: "left" === e5.placement || "right" === e5.placement ? "100%" : "auto", zIndex: 10, justifyContent: "space-between", display: "flex", flexDirection: "top" === e5.placement || "bottom" === e5.placement ? "row" : "column" }, "top" === e5.placement || "bottom" === e5.placement ? { paddingTop: "8px", paddingBottom: "8px", paddingLeft: "16px", paddingRight: "16px" } : { paddingLeft: "8px", paddingRight: "8px", paddingTop: "16px", paddingBottom: "16px" }), e5.style);
      return void 0 === e5.visible || e5.visible ? U2("div", { style: n3, className: "header" }, t3(p({}, e5.visibleChild && { filter: function(t4) {
        return t4 === e5.visibleChild;
      } }))) : null;
    };
    Vs = function(e5, t3) {
      var n3 = nr().provides, o3 = e5.tabsCommandId ? null == n3 ? void 0 : n3.getMenuOrAction(e5.tabsCommandId) : null, i4 = o3 && "menu" === o3.type ? null == n3 ? void 0 : n3.getItemsByIds(o3.children) : null;
      return U2(j2, null, o3 && i4 && U2("div", { role: "tablist", className: "mx-4 my-4 flex flex-shrink-0 overflow-hidden bg-white" }, i4.filter(function(e6) {
        return "action" === e6.type;
      }).map(function(e6, t4, o4) {
        var i5 = !!e6.active, r4 = 0 === t4, a3 = t4 === o4.length - 1;
        return U2(Ei, { key: e6.id, content: e6.label, trigger: "hover", position: "bottom" }, U2("button", { role: "tab", "aria-selected": i5, tabIndex: i5 ? 0 : -1, onClick: function(t5) {
          return null == n3 ? void 0 : n3.executeCommand(e6.id, { source: "click", triggerElement: t5.currentTarget, position: "bottom" });
        }, className: "relative flex h-7 flex-1 cursor-pointer items-center justify-center border outline-none transition-colors ".concat(r4 ? "rounded-l-md" : "", " ").concat(a3 ? "rounded-r-md" : "", " ").concat(a3 ? "" : "border-r-0", " ").concat(i5 ? "border-blue-600 bg-blue-600 text-white" : "border-gray-300 text-gray-600 hover:bg-gray-50", " ") }, e6.icon && U2(Nr, { icon: e6.icon, className: "pointer-events-none block h-5 w-5" })));
      })), t3(p({}, e5.visibleChild && { filter: function(t4) {
        return t4 === e5.visibleChild;
      } })));
    };
    Ys = function(e5, t3) {
      var n3 = function(e6) {
        var t4 = v2(Ie(false), 2), n4 = t4[0], o4 = t4[1], i5 = Te(0), r5 = Te(0), a4 = Te(null), s3 = Te(false);
        return Me(function() {
          e6 || (o4(false), s3.current = false);
        }, [e6]), Me(function() {
          if (e6) {
            var t5 = a4.current;
            if (t5) {
              var l2 = function(e7) {
                s3.current = true, i5.current = "touches" in e7 ? e7.touches[0].clientY : e7.clientY, r5.current = i5.current;
              }, c2 = function(e7) {
                if (s3.current) {
                  r5.current = "touches" in e7 ? e7.touches[0].clientY : e7.clientY;
                  var t6 = r5.current - i5.current;
                  t6 < -2 && !n4 ? (o4(true), s3.current = false) : t6 > 2 && n4 && (o4(false), s3.current = false);
                }
              }, d2 = function() {
                s3.current = false;
              };
              return t5.addEventListener("touchstart", l2), t5.addEventListener("touchmove", c2), t5.addEventListener("touchend", d2), t5.addEventListener("touchcancel", d2), t5.addEventListener("mousedown", l2), t5.addEventListener("mousemove", c2), t5.addEventListener("mouseup", d2), t5.addEventListener("mouseleave", d2), function() {
                t5.removeEventListener("touchstart", l2), t5.removeEventListener("touchmove", c2), t5.removeEventListener("touchend", d2), t5.removeEventListener("touchcancel", d2), t5.removeEventListener("mousedown", l2), t5.removeEventListener("mousemove", c2), t5.removeEventListener("mouseup", d2), t5.removeEventListener("mouseleave", d2);
              };
            }
          }
        }, [e6, n4]), { elementRef: a4, isFullscreen: n4 };
      }(e5.open), o3 = n3.elementRef, i4 = n3.isFullscreen, r4 = nr().provides;
      if (!e5.open) return null;
      var a3 = "left" === e5.location ? "md:border-r" : "md:border-l";
      return U2("div", { className: "flex w-full flex-none shrink-0 flex-col border-t bg-white md:w-[275px] md:min-w-[275px] md:border-t-0 ".concat(a3, " absolute bottom-0 left-0 right-0 z-10 touch-pan-y border-[#cfd4da] transition-all duration-300 ease-in-out md:static md:h-full ").concat(i4 ? "h-full" : "h-1/2") }, U2("div", { className: "flex h-6 w-full cursor-grab items-center justify-center active:cursor-grabbing md:hidden", ref: o3 }, U2("div", { className: "h-1 w-12 rounded-full bg-gray-300" })), U2("div", { className: "flex flex-row justify-end md:hidden" }, U2(Nr, { icon: "x", className: "mr-5 h-5 w-5 cursor-pointer", onClick: function() {
        null == r4 || r4.togglePanel({ id: e5.id, visibleChild: e5.visibleChild || "leftPanelMain", open: !e5.open });
      } })), U2("div", { className: "flex min-h-0 flex-1 flex-col" }, t3(p({}, e5.visibleChild && { filter: function(t4) {
        return t4 === e5.visibleChild;
      } }))));
    };
    Ks = function(e5) {
      var t3 = Te(null), n3 = v2(Ie(e5.query || ""), 2), o3 = n3[0], i4 = n3[1], r4 = Yr().provides, a3 = zn().provides, s3 = ia(o3, 400);
      Me(function() {
        t3.current && t3.current.focus();
      }, [r4]), Me(function() {
        "" === s3 ? null == r4 || r4.stopSearch() : null == r4 || r4.searchAllPages(s3);
      }, [s3, r4]), Me(function() {
        void 0 === e5.activeResultIndex || e5.loading || c2(e5.activeResultIndex);
      }, [e5.activeResultIndex, e5.loading, e5.query, e5.flags]);
      var l2 = function(t4, n4) {
        n4 ? null == r4 || r4.setFlags([].concat(y2(e5.flags), [t4])) : null == r4 || r4.setFlags(e5.flags.filter(function(e6) {
          return e6 !== t4;
        }));
      }, c2 = function(t4) {
        var n4 = e5.results[t4];
        if (n4) {
          var o4 = n4.rects.reduce(function(e6, t5) {
            return { x: Math.min(e6.x, t5.origin.x), y: Math.min(e6.y, t5.origin.y) };
          }, { x: 1 / 0, y: 1 / 0 });
          null == a3 || a3.scrollToPage({ pageNumber: n4.pageIndex + 1, pageCoordinates: o4, center: true });
        }
      }, d2 = e5.results.reduce(function(e6, t4, n4) {
        var o4, i5;
        return (null !== (i5 = e6[o4 = t4.pageIndex]) && void 0 !== i5 ? i5 : e6[o4] = []).push({ hit: t4, index: n4 }), e6;
      }, {});
      return U2("div", { className: "flex h-full flex-col bg-white" }, U2("div", { className: "p-4" }, U2("div", { className: "relative" }, U2("div", { className: "pointer-events-none absolute inset-y-0 left-0 flex items-center pl-2" }, U2("svg", { className: "h-4 w-4 text-gray-500", xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 20 20", fill: "currentColor" }, U2("path", { fillRule: "evenodd", d: "M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z", clipRule: "evenodd" }))), U2("input", { ref: t3, type: "text", placeholder: "Search", autoFocus: true, value: o3, onInput: function(e6) {
        var t4 = e6.target;
        i4(t4.value);
      }, className: "w-full rounded-md border border-gray-300 py-1 pl-8 pr-9 text-sm focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500" }), o3 && U2("div", { className: "absolute inset-y-0 right-0 flex cursor-pointer items-center pr-3", onClick: function() {
        i4(""), t3.current && t3.current.focus();
      } }, U2("svg", { className: "h-4 w-4 text-gray-500 hover:text-gray-700", xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 20 20", fill: "currentColor" }, U2("path", { fillRule: "evenodd", d: "M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z", clipRule: "evenodd" })))), U2("div", { className: "mt-3 flex flex-row gap-4" }, U2(ra, { label: "Case sensitive", checked: e5.flags.includes(yt.MatchCase), onChange: function(e6) {
        return l2(yt.MatchCase, e6);
      } }), U2(ra, { label: "Whole word", checked: e5.flags.includes(yt.MatchWholeWord), onChange: function(e6) {
        return l2(yt.MatchWholeWord, e6);
      } })), U2("hr", { className: "mb-2 mt-5 border-gray-200" }), e5.active && !e5.loading && U2("div", { className: "flex h-[32px] flex-row items-center justify-between" }, U2("div", { className: "text-xs text-gray-500" }, e5.total, " results found"), e5.total > 1 && U2("div", { className: "flex flex-row" }, U2(bo, { onClick: function() {
        null == r4 || r4.previousResult();
      } }, U2(Nr, { icon: "chevronLeft", className: "h-4 w-4" })), U2(bo, { onClick: function() {
        null == r4 || r4.nextResult();
      } }, U2(Nr, { icon: "chevronRight", className: "h-4 w-4" }))))), U2("div", { className: "flex min-h-0 flex-1 flex-col gap-2 overflow-y-auto px-4" }, e5.loading && U2("div", { className: "flex h-full flex-row items-center justify-center" }, U2("div", { className: "text-xs text-gray-500" }, "Loading...")), !e5.loading && Object.entries(d2).map(function(t4) {
        var n4 = v2(t4, 2), o4 = n4[0], i5 = n4[1];
        return U2("div", { key: o4, className: "mt-2 first:mt-0" }, U2("div", { className: "bg-white/80 py-2 text-xs text-gray-500 backdrop-blur" }, "Page ", Number(o4) + 1), U2("div", { className: "flex flex-col gap-2" }, i5.map(function(t5) {
          var n5 = t5.hit, o5 = t5.index;
          return U2(Xs, { key: o5, hit: n5, active: o5 === e5.activeResultIndex, onClick: function() {
            null == r4 || r4.goToResult(o5);
          } });
        })));
      }), U2("div", null)));
    };
    Js = function(e5, t3, n3) {
      var o3 = Tr().provides, i4 = nr().provides;
      if (!i4) return null;
      var r4 = e5.commandZoomMenu ? i4.getMenuOrAction(e5.commandZoomMenu) : null, a3 = e5.commandZoomIn ? i4.getMenuOrAction(e5.commandZoomIn) : null, s3 = e5.commandZoomOut ? i4.getMenuOrAction(e5.commandZoomOut) : null, l2 = v2(Ie(false), 2);
      l2[0], l2[1];
      var c2 = Te(null), d2 = Math.round(100 * e5.zoomLevel), u2 = function(e6, t4) {
        t4 && i4.executeCommand(t4.id, { source: "click", triggerElement: e6.currentTarget, position: "horizontal" === (null == n3 ? void 0 : n3.direction) ? "bottom" : "right", flatten: true });
      };
      return Me(function() {
        c2.current && console.log(c2.current);
      }, [c2.current]), U2("div", { className: "flex flex-row items-center rounded-md bg-[#f1f3f5]" }, U2("form", { onSubmit: function(e6) {
        e6.preventDefault();
        var t4 = e6.target, n4 = new FormData(t4).get("zoom");
        null == o3 || o3.requestZoom(parseFloat(n4) / 100);
      }, className: "block" }, U2("input", { name: "zoom", type: "text", inputMode: "numeric", pattern: "\\d*", className: "h-6 w-8 border-0 bg-transparent p-0 text-right text-sm", "aria-label": "Set zoom", autoFocus: false, value: d2, onInput: function(e6) {
        var t4 = e6.target;
        t4.value = t4.value.replace(/[^0-9]/g, "");
      } }), U2("span", { className: "text-sm" }, "%")), U2(Ei, { position: "horizontal" === (null == n3 ? void 0 : n3.direction) ? "bottom" : "right", content: "Zoom Options", trigger: e5.zoomMenuActive ? "none" : "hover" }, U2(bo, { className: "p-1", onClick: function(e6) {
        return u2(e6, r4);
      }, active: e5.zoomMenuActive }, U2("svg", { xmlns: "http://www.w3.org/2000/svg", width: "14", height: "14", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round", class: "icon icon-tabler icons-tabler-outline icon-tabler-chevron-down" }, U2("path", { stroke: "none", d: "M0 0h24v24H0z", fill: "none" }), U2("path", { d: "M6 9l6 6l6 -6" })))), U2(Ei, { position: "horizontal" === (null == n3 ? void 0 : n3.direction) ? "bottom" : "right", content: "Zoom Out", trigger: "hover" }, U2(bo, { className: "p-1", onClick: function(e6) {
        return u2(e6, s3);
      } }, (null == s3 ? void 0 : s3.icon) && U2(Nr, { icon: s3.icon, className: "h-5 w-5" }))), U2(Ei, { position: "horizontal" === (null == n3 ? void 0 : n3.direction) ? "bottom" : "right", content: "Zoom In", trigger: "hover" }, U2(bo, { className: "p-1", onClick: function(e6) {
        return u2(e6, a3);
      } }, (null == a3 ? void 0 : a3.icon) && U2(Nr, { icon: a3.icon, className: "h-5 w-5" }))));
    };
    Qs = function(e5, t3) {
      var n3 = Ts().provides, o3 = zn().provides, i4 = vn().provides;
      if (!(e5.open && n3 && o3 && i4)) return null;
      var r4 = n3.getSelectedAnnotation();
      if (!r4) return null;
      var a3 = Ra([{ page: r4.object.pageIndex, rect: r4.object.rect }], o3, i4, 10, 42);
      return a3 ? U2("div", { style: { left: "".concat(a3.left, "px"), top: "".concat(a3.top, "px"), transform: "translate(-50%, 0%)", zIndex: 2e3 }, className: "absolute rounded-md border border-[#cfd4da] bg-[#f8f9fa] p-1" }, t3()) : null;
    };
    el = function(e5, t3) {
      var n3 = Ta().provides, o3 = zn().provides, i4 = vn().provides;
      if (!(e5.open && n3 && o3 && i4)) return null;
      var r4 = Ra(n3.getBoundingRects(), o3, i4, 10, 42);
      return r4 ? U2("div", { style: { left: "".concat(r4.left, "px"), top: "".concat(r4.top, "px"), transform: "translate(-50%, 0%)", zIndex: 2e3 }, className: "absolute rounded-md border border-[#cfd4da] bg-[#f8f9fa] p-1" }, t3()) : null;
    };
    tl = function(e5, t3) {
      var n3 = vn().provides, o3 = v2(Ie(false), 2), i4 = o3[0], r4 = o3[1], a3 = v2(Ie(false), 2), s3 = a3[0], l2 = a3[1], c2 = Te(), d2 = Ae(function() {
        c2.current && clearTimeout(c2.current), c2.current = setTimeout(function() {
          s3 || r4(false);
        }, 4e3);
      }, [s3]);
      Me(function() {
        if (n3) return n3.onScrollChange(function(e6) {
          (e6.scrollTop > 0 || e6.scrollLeft > 0) && (r4(true), d2());
        });
      }, [n3, d2]), Me(function() {
        return function() {
          c2.current && clearTimeout(c2.current);
        };
      }, []);
      return U2("div", { className: "absolute bottom-4 left-1/2 -translate-x-1/2", onMouseEnter: function() {
        l2(true), r4(true);
      }, onMouseLeave: function() {
        l2(false), d2();
      } }, U2("div", { className: "rounded-md border border-[#cfd4da] bg-[#f8f9fa] p-1 transition-opacity duration-200 ".concat(i4 ? "opacity-100" : "opacity-0") }, t3()));
    };
    nl = function(e5) {
      var t3 = zn().provides, n3 = nr().provides, o3 = 1 === e5.currentPage, i4 = e5.currentPage === e5.pageCount, r4 = e5.nextPageCommandId ? null == n3 ? void 0 : n3.getMenuOrAction(e5.nextPageCommandId) : null, a3 = e5.previousPageCommandId ? null == n3 ? void 0 : n3.getMenuOrAction(e5.previousPageCommandId) : null, s3 = function(e6, t4) {
        t4 && n3 && n3.executeCommand(t4.id, { source: "click", triggerElement: e6.currentTarget });
      };
      return U2("div", { className: "flex flex-row items-center justify-between gap-3 rounded-md" }, U2(Ei, { position: "top", content: "Previous Page", trigger: o3 ? "none" : "hover" }, U2(bo, { className: "p-1 ".concat(o3 ? "cursor-not-allowed opacity-50 hover:ring-0" : ""), onClick: function(e6) {
        return s3(e6, a3);
      }, disabled: o3 }, (null == a3 ? void 0 : a3.icon) && U2(Nr, { icon: a3.icon, className: "h-5 w-5" }))), U2("form", { className: "flex flex-row items-center gap-3", onSubmit: function(e6) {
        e6.preventDefault();
        var n4 = e6.target, o4 = new FormData(n4).get("page"), i5 = parseInt(o4);
        !isNaN(i5) && i5 >= 1 && (null == t3 || t3.scrollToPage({ pageNumber: i5 }));
      } }, U2("input", { name: "page", type: "text", inputMode: "numeric", pattern: "\\d*", className: "border-1 h-8 w-8 rounded-md border-gray-600 bg-white p-0 text-center text-sm", "aria-label": "Set page", value: e5.currentPage, onInput: function(e6) {
        var t4 = e6.target;
        t4.value = t4.value.replace(/[^0-9]/g, "");
      } }), U2("span", { className: "text-sm" }, e5.pageCount)), U2(Ei, { position: "top", content: "Next Page", trigger: i4 ? "none" : "hover" }, U2(bo, { className: "p-1 ".concat(i4 ? "cursor-not-allowed opacity-50 hover:ring-0" : ""), onClick: function(e6) {
        return s3(e6, r4);
      }, disabled: i4 }, (null == r4 ? void 0 : r4.icon) && U2(Nr, { icon: r4.icon, className: "h-5 w-5" }))));
    };
    ol = function(e5) {
      var t3 = e5.activeCommand, n3 = e5.open, o3 = e5.position, i4 = e5.triggerElement, r4 = e5.flatten, a3 = nr().provides, s3 = v2(Ie([]), 2), l2 = s3[0], c2 = s3[1], d2 = Te(null);
      if (Me(function() {
        n3 || c2([]);
      }, [n3]), Me(function() {
        t3 && (d2.current !== t3 ? c2([]) : d2.current = null);
      }, [t3]), !a3) return null;
      var u2 = t3 ? null == a3 ? void 0 : a3.getChildItems(t3, { flatten: r4 }) : null, h2 = l2.length > 0 && t3 ? a3.getMenuOrAction(t3) : void 0, p2 = function(e6) {
        t3 && c2(function(e7) {
          return [].concat(y2(e7), [t3]);
        }), d2.current = e6, a3.executeCommand(e6, { triggerElement: i4, position: o3 });
      }, g2 = function(e6, t4) {
        if ("group" === e6.type) {
          var n4 = e6, o4 = a3.getItemsByIds(n4.children);
          return U2(j2, { key: e6.id }, U2("div", { className: "px-4 py-3 text-xs font-medium uppercase text-gray-600" }, n4.label), o4.map(function(e7, t5) {
            return U2(j2, { key: e7.id }, g2(e7, t5));
          }), U2("hr", { className: "my-2 border-gray-200" }));
        }
        var i5 = e6.dividerBefore && 0 !== t4 ? U2("hr", { className: "my-2 border-gray-200" }) : null;
        return U2(j2, { key: e6.id }, i5, U2("button", { disabled: !!e6.disabled, onClick: function() {
          return function(e7) {
            "action" === e7.type ? (a3.hideCommandMenu(), a3.executeCommand(e7.id)) : "menu" === e7.type && p2(e7.id);
          }(e6);
        }, className: "flex cursor-pointer flex-row items-center justify-between gap-2 px-4 py-1 ".concat("menu" === e6.type ? "menu-item" : "", " ").concat(e6.active && !e6.disabled ? "bg-blue-500 text-white" : "text-gray-500 hover:bg-blue-900 hover:text-white", " ").concat(e6.disabled ? "pointer-events-none cursor-not-allowed opacity-50" : "", " ") }, U2("div", { className: "flex flex-row items-center gap-2" }, U2("div", { className: "flex h-6 w-6 items-center justify-center" }, e6.icon && U2(Nr, { icon: e6.icon, className: "h-6 w-6" })), U2("div", { className: "text-sm" }, e6.label)), U2("div", { className: "flex items-center" }, e6.shortcutLabel && U2("div", { className: "mr-2 text-sm" }, "(", e6.shortcutLabel, ")"), "menu" === e6.type && U2(Nr, { icon: "chevronRight", className: "h-6 w-6" }))));
      }, m2 = U2(j2, null, l2.length > 0 && U2("div", { onClick: function() {
        if (0 !== l2.length) {
          var e6 = l2[l2.length - 1];
          c2(function(e7) {
            return e7.slice(0, -1);
          }), d2.current = e6, a3.executeCommand(e6, { triggerElement: i4, position: o3 });
        }
      }, className: "flex cursor-pointer flex-row items-center gap-2 px-4 py-1 pb-2 text-sm font-medium text-gray-500 hover:bg-gray-100" }, U2(Nr, { icon: "chevronLeft", className: "h-6 w-6 text-gray-500" }), " ", null == h2 ? void 0 : h2.label), null == u2 ? void 0 : u2.map(function(e6, t4) {
        return g2(e6, t4);
      }));
      return n3 ? U2(rr, { trigger: i4, open: n3, placement: o3 || "bottom", className: "@max-[600px]:!bottom-0 @max-[600px]:!top-auto @max-[600px]:!left-0 @max-[600px]:!right-0", onShow: function() {
      }, onHide: function() {
        a3.hideCommandMenu();
      } }, m2) : null;
    };
    il = function(e5, t3) {
      return U2("div", null, "Comments");
    };
    rl = function(e5, t3) {
      var n3 = zn().provides;
      return U2(na, { className: "flex-1", selectedPage: e5.currentPage }, function(t4) {
        return U2("div", { key: t4.pageIndex, className: "absolute flex w-full cursor-pointer flex-col items-center", style: { height: t4.wrapperHeight, top: t4.top }, onClick: function() {
          null == n3 || n3.scrollToPage({ pageNumber: t4.pageIndex + 1 });
        } }, U2("div", { style: { width: t4.width, height: t4.height }, className: "outline outline-2 -outline-offset-2 ".concat(e5.currentPage === t4.pageIndex + 1 ? "outline-blue-500" : "outline-gray-300") }, U2(oa, { meta: t4, className: "h-full w-full object-contain" })), U2("div", { className: "flex items-center justify-center text-xs text-gray-500", style: { height: t4.labelHeight } }, t4.pageIndex + 1));
      });
    };
    al = function(e5, t3) {
      var n3 = rn(Qa.id).provides, o3 = zn().provides, i4 = v2(Ie([]), 2), r4 = i4[0], a3 = i4[1], s3 = v2(Ie(/* @__PURE__ */ new Set()), 2), l2 = s3[0], c2 = s3[1];
      Me(function() {
        if (n3) {
          var e6 = n3.getBookmarks();
          return e6.wait(function(e7) {
            var t4 = e7.bookmarks;
            a3(t4);
            var n4 = t4.map(function(e8, t5) {
              return "bookmark-".concat(t5);
            });
            c2(new Set(n4));
          }, _t), function() {
            e6.abort({ code: bt.Cancelled, message: "Bookmark task cancelled" });
          };
        }
      }, [n3, e5.document]);
      var d2 = function(t4, n4) {
        var i5, r5 = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0, a4 = "bookmark-".concat(n4), s4 = t4.children && t4.children.length > 0, u2 = l2.has(a4);
        return U2("div", { key: a4, className: "outline-item" }, U2("div", { className: "flex cursor-pointer items-center py-1 pr-4 text-sm text-gray-700 hover:bg-gray-100", style: { paddingLeft: "".concat(16 * r5 + 8, "px") }, onClick: function() {
          return function(t5) {
            if (o3 && t5.target && "action" === t5.target.type) {
              var n5 = t5.target.action;
              if (1 === n5.type && n5.destination) {
                var i6 = n5.destination;
                if (i6.zoom.mode === lt.XYZ) {
                  var r6, a5 = null === (r6 = e5.document) || void 0 === r6 ? void 0 : r6.pages.find(function(e6) {
                    return e6.index === i6.pageIndex;
                  });
                  if (!a5) return;
                  o3.scrollToPage({ pageNumber: i6.pageIndex + 1, pageCoordinates: i6.zoom.params ? { x: i6.zoom.params.x, y: a5.size.height - i6.zoom.params.y } : void 0, behavior: "smooth" });
                } else i6.zoom.mode === lt.FitPage && o3.scrollToPage({ pageNumber: i6.pageIndex + 1, behavior: "smooth" });
              }
            }
          }(t4);
        } }, s4 && U2("button", { className: "mr-1 flex h-4 w-4 items-center justify-center rounded hover:bg-gray-200", onClick: function(e6) {
          e6.stopPropagation(), function(e7) {
            c2(function(t5) {
              var n5 = new Set(t5);
              return n5.has(e7) ? n5.delete(e7) : n5.add(e7), n5;
            });
          }(a4);
        } }, U2(Nr, { icon: u2 ? "chevronDown" : "chevronRight", className: "h-3 w-3 text-gray-500" })), !s4 && U2("div", { className: "mr-1 w-4" }), U2("span", { className: "flex-1 truncate", title: t4.title }, t4.title)), s4 && u2 && U2("div", { className: "outline-children" }, null === (i5 = t4.children) || void 0 === i5 ? void 0 : i5.map(function(e6, t5) {
          return d2(e6, "".concat(n4, "-").concat(t5), r5 + 1);
        })));
      };
      return 0 === r4.length ? U2("div", { className: "flex h-full items-center justify-center p-6" }, U2("div", { className: "text-center text-gray-500" }, U2("div", { className: "text-sm" }, "No outline available"), U2("div", { className: "mt-1 text-xs" }, "This document doesn't contain bookmarks"))) : U2("div", { className: "flex h-full flex-col bg-white" }, U2("div", { className: "flex-1 overflow-y-auto" }, U2("div", { className: "outline-tree" }, r4.map(function(e6, t4) {
        return d2(e6, t4);
      }))));
    };
    sl = function(e5, t3) {
      return U2("div", null, "Attachments");
    };
    ll = function(e5, t3) {
      var n3 = e5.activeCommandId, o3 = e5.menuCommandId, i4 = e5.active, r4 = nr().provides;
      if (!r4) return null;
      var a3 = r4.getMenuOrAction(n3), s3 = Ae(function(e6) {
        if (e6.preventDefault(), e6.stopPropagation(), r4 && o3) {
          var t4 = e6.currentTarget;
          r4.executeCommand(o3, { source: "click", triggerElement: t4 });
        }
      }, [o3, r4]);
      return U2("div", { style: { maxWidth: "100px", width: "100px" } }, U2(bo, { className: "col-start-1 row-start-1 !w-full appearance-none rounded-md bg-white py-1.5 pl-3 pr-2 text-[13px] text-gray-900 ".concat(i4 ? "text-blue-500 outline outline-2 -outline-offset-2 outline-blue-500" : "outline outline-1 -outline-offset-1 outline-gray-300", " flex flex-row items-center justify-between gap-2 hover:ring-transparent"), onClick: s3 }, U2("span", { className: "min-w-0 flex-1 truncate text-left" }, null == a3 ? void 0 : a3.label), U2(Nr, { icon: "chevronDown", className: "h-4 w-4 text-gray-500" })));
    };
    cl = function(e5, t3) {
      var o3, i4 = nr().provides, r4 = zn().provides, a3 = Xa(), s3 = a3.executePrint, l2 = a3.parsePageRange, c2 = a3.progress, d2 = a3.isPrinting, u2 = v2(Ie(Ba.All), 2), h2 = u2[0], p2 = u2[1], g2 = v2(Ie(""), 2), f2 = g2[0], y3 = g2[1], b2 = v2(Ie(true), 2), w3 = b2[0], x3 = b2[1], k3 = v2(Ie(ja.Normal), 2), C3 = k3[0], S2 = k3[1], _2 = v2(Ie(""), 2), I3 = _2[0], M2 = _2[1];
      if (!i4) return null;
      if (!e5.open) return null;
      var P2 = null == r4 ? void 0 : r4.getMetrics(), T3 = (null == P2 ? void 0 : P2.currentPage) || 1, E2 = (null == P2 || null === (o3 = P2.pageVisibilityMetrics) || void 0 === o3 ? void 0 : o3.length) || 0, A2 = function() {
        i4.updateComponentState({ componentType: "floating", componentId: "printModal", patch: { open: false } });
      }, z3 = function(e6) {
        p2(e6), M2("");
      }, R3 = function() {
        var e6 = n2(m().mark(function e7() {
          var t4, n3, o4;
          return m().wrap(function(e8) {
            for (; ; ) switch (e8.prev = e8.next) {
              case 0:
                e8.t0 = h2, e8.next = e8.t0 === Ba.Current ? 3 : e8.t0 === Ba.All ? 5 : e8.t0 === Ba.Custom ? 7 : 16;
                break;
              case 3:
                return t4 = { type: Ba.Current, currentPage: T3 - 1 }, e8.abrupt("break", 17);
              case 5:
                return t4 = { type: Ba.All }, e8.abrupt("break", 17);
              case 7:
                if (f2.trim()) {
                  e8.next = 10;
                  break;
                }
                return M2("Please enter page numbers"), e8.abrupt("return");
              case 10:
                if ((n3 = l2(f2)).isValid) {
                  e8.next = 14;
                  break;
                }
                return M2(n3.error || "Invalid page range"), e8.abrupt("return");
              case 14:
                return t4 = { type: Ba.Custom, pages: n3.pages }, e8.abrupt("break", 17);
              case 16:
                return e8.abrupt("return");
              case 17:
                return o4 = { pageRange: t4, includeAnnotations: w3, quality: C3 }, e8.prev = 18, e8.next = 21, s3(o4);
              case 21:
                A2(), e8.next = 27;
                break;
              case 24:
                e8.prev = 24, e8.t1 = e8.catch(18), console.error("Print failed:", e8.t1);
              case 27:
              case "end":
                return e8.stop();
            }
          }, e7, null, [[18, 24]]);
        }));
        return function() {
          return e6.apply(this, arguments);
        };
      }(), N3 = h2 !== Ba.Custom || f2.trim() && !I3;
      return U2(Na, { open: e5.open, title: "Print Settings", onClose: A2, maxWidth: "28rem" }, U2("div", { className: "space-y-6" }, U2("div", null, U2("label", { className: "mb-3 block text-sm font-medium text-gray-700" }, "Pages to print"), U2("div", { className: "space-y-2" }, U2("label", { className: "flex items-center" }, U2("input", { type: "radio", name: "pageRange", value: "all", checked: h2 === Ba.All, onChange: function() {
        return z3(Ba.All);
      }, className: "mr-2" }), U2("span", { className: "text-sm" }, "All pages")), U2("label", { className: "flex items-center" }, U2("input", { type: "radio", name: "pageRange", value: "current", checked: h2 === Ba.Current, onChange: function() {
        return z3(Ba.Current);
      }, className: "mr-2" }), U2("span", { className: "text-sm" }, "Current page (", T3, ")")), U2("label", { className: "flex items-start" }, U2("input", { type: "radio", name: "pageRange", value: "custom", checked: h2 === Ba.Custom, onChange: function() {
        return z3(Ba.Custom);
      }, className: "mr-2 mt-0.5" }), U2("div", { className: "flex-1" }, U2("span", { className: "mb-1 block text-sm" }, "Specify pages"), U2("input", { type: "text", placeholder: "e.g., 1-3, 5, 8-10", value: f2, onInput: function(e6) {
        var t4 = e6.target.value;
        if (y3(t4), t4.trim()) {
          var n3 = l2(t4);
          n3.isValid ? M2("") : M2(n3.error || "Invalid page range");
        } else M2("");
      }, disabled: h2 !== Ba.Custom, className: "w-full rounded-md border px-3 py-1 text-sm ".concat(h2 !== Ba.Custom ? "bg-gray-100 text-gray-500" : I3 ? "border-red-500 focus:border-red-500 focus:ring-red-500" : "border-gray-300 focus:border-blue-500 focus:ring-blue-500", " focus:outline-none focus:ring-1") }), I3 && U2("p", { className: "mt-1 text-xs text-red-500" }, I3), h2 === Ba.Custom && !I3 && f2.trim() && U2("p", { className: "mt-1 text-xs text-gray-500" }, "Total pages: ", E2))))), U2("div", null, U2("label", { className: "flex items-center" }, U2("input", { type: "checkbox", checked: w3, onChange: function(e6) {
        return x3(e6.target.checked);
      }, className: "mr-2" }), U2("span", { className: "text-sm font-medium text-gray-700" }, "Include annotations"))), U2("div", null, U2("label", { className: "mb-2 block text-sm font-medium text-gray-700" }, "Print Quality"), U2("div", { className: "relative" }, U2("select", { value: C3, onChange: function(e6) {
        return S2(e6.target.value);
      }, className: "w-full appearance-none rounded-md border border-gray-300 bg-white px-3 py-2 pr-8 text-sm focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500" }, U2("option", { value: ja.Normal }, "Normal"), U2("option", { value: ja.High }, "High")), U2("div", { className: "pointer-events-none absolute inset-y-0 right-3 flex items-center" }, U2("svg", { className: "h-4 w-4 text-gray-400", fill: "none", stroke: "currentColor", viewBox: "0 0 24 24" }, U2("path", { strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: 2, d: "M19 9l-7 7-7-7" }))))), d2 && c2 && U2("div", { className: "rounded-md border border-blue-200 bg-blue-50 p-3" }, U2("div", { className: "mb-2 flex items-center justify-between" }, U2("span", { className: "text-sm font-medium text-blue-900" }, "preparing" === c2.status && "Preparing...", "rendering" === c2.status && "Rendering pages...", "complete" === c2.status && "Complete!", "error" === c2.status && "Error"), U2("span", { className: "text-sm text-blue-700" }, c2.current, "/", c2.total)), U2("div", { className: "h-2 w-full rounded-full bg-blue-200" }, U2("div", { className: "h-2 rounded-full bg-blue-600 transition-all duration-300", style: { width: "".concat(c2.current / c2.total * 100, "%") } })), c2.message && U2("p", { className: "mt-2 text-sm text-blue-700" }, c2.message)), U2("div", { className: "flex justify-end space-x-3 border-t border-gray-200 pt-4" }, U2(bo, { onClick: A2, className: "rounded-md border border-gray-300 bg-white px-4 py-2 text-sm text-gray-700 hover:bg-gray-50", disabled: d2 }, "Cancel"), U2(bo, { onClick: R3, disabled: d2 || !N3, className: "rounded-md border border-transparent bg-blue-600 px-4 py-2 text-sm text-white hover:!bg-blue-700 disabled:cursor-not-allowed disabled:opacity-50" }, d2 ? "Printing..." : "Print"))));
    };
    dl = l(l(l(l(l({}, dt.HIGHLIGHT, [{ id: "color", label: "Color" }, { id: "opacity", label: "Opacity", min: 0.1, max: 1, step: 0.05 }]), dt.UNDERLINE, [{ id: "color", label: "Color" }, { id: "opacity", label: "Opacity", min: 0.1, max: 1, step: 0.05 }]), dt.STRIKEOUT, [{ id: "color", label: "Color" }, { id: "opacity", label: "Opacity", min: 0.1, max: 1, step: 0.05 }]), dt.SQUIGGLY, [{ id: "color", label: "Color" }, { id: "opacity", label: "Opacity", min: 0.1, max: 1, step: 0.05 }]), dt.INK, [{ id: "color", label: "Color" }, { id: "opacity", label: "Opacity", min: 0.1, max: 1, step: 0.05 }, { id: "strokeWidth", label: "Stroke width", min: 1, max: 30, step: 1 }]);
    ul = function(e5) {
      var t3 = e5.value, n3 = e5.min, o3 = void 0 === n3 ? 0 : n3, i4 = e5.max, r4 = void 0 === i4 ? 1 : i4, a3 = e5.step, s3 = void 0 === a3 ? 0.1 : a3, l2 = e5.onChange;
      return ue("input", { type: "range", class: "range-sm mb-2 h-1 w-full cursor-pointer appearance-none rounded-lg bg-gray-200 dark:bg-gray-700", value: t3, min: o3, max: r4, step: s3, onInput: function(e6) {
        return l2(parseFloat(e6.target.value));
      } });
    };
    hl = function(e5) {
      var t3 = e5.color, n3 = e5.active, o3 = e5.onSelect;
      return ue("button", { title: t3, class: "h-5 w-5 rounded-full border border-gray-400 ".concat(n3 ? "outline outline-2 outline-offset-2 outline-blue-500" : ""), style: { backgroundColor: t3 }, onClick: function() {
        return o3(t3);
      } });
    };
    pl = function(e5) {
      var t3, n3, o3, i4 = e5.selectedAnnotation, r4 = e5.annotationMode, a3 = e5.colorPresets, s3 = Ts().provides, l2 = null !== (t3 = null !== (n3 = null == i4 ? void 0 : i4.annotation.type) && void 0 !== n3 ? n3 : r4) && void 0 !== t3 ? t3 : null;
      if (!l2 || !s3) return ue("div", { class: "flex flex-col items-center gap-2 p-4 text-gray-500", children: [ue(Nr, { icon: "palette", className: "h-18 w-18 text-gray-500" }), ue("div", { className: "max-w-[150px] text-center text-sm text-gray-500", children: "Select an annotation to see styles" })] });
      var c2 = null !== (o3 = dl[l2]) && void 0 !== o3 ? o3 : [], d2 = s3.getToolDefaults(l2), u2 = i4 ? function(e6) {
        switch (e6.type) {
          case dt.HIGHLIGHT:
          case dt.UNDERLINE:
          case dt.STRIKEOUT:
          case dt.SQUIGGLY:
          case dt.INK:
            return { color: e6.color, opacity: e6.opacity };
          default:
            return { color: "#FFFF00", opacity: 1 };
        }
      }(i4.annotation) : { color: d2.color, opacity: d2.opacity }, h2 = v2(Ie(u2.color), 2), p2 = h2[0], g2 = h2[1];
      Me(function() {
        return g2(u2.color);
      }, [u2.color]);
      var m2 = function(e6) {
        g2(e6), _2({ color: e6 });
      }, f2 = v2(Ie(u2.opacity), 2), y3 = f2[0], b2 = f2[1];
      Me(function() {
        return b2(u2.opacity);
      }, [u2.opacity]);
      var w3 = ia(y3, 300);
      Me(function() {
        return _2({ opacity: w3 });
      }, [w3]);
      var x3 = v2(Ie(l2 !== dt.INK ? 1 : (null == i4 ? void 0 : i4.annotation.type) === dt.INK ? i4.annotation.strokeWidth : d2.strokeWidth), 2), k3 = x3[0], C3 = x3[1], S2 = ia(k3, 300);
      function _2(e6) {
        i4 ? null == s3 || s3.updateAnnotation(i4.pageIndex, i4.localId, e6) : null == s3 || s3.setToolDefaults(l2, e6);
      }
      return Me(function() {
        l2 === dt.INK && _2({ strokeWidth: S2 });
      }, [S2]), ue("div", { class: "p-4", children: [ue("h2", { class: "text-md mb-4 font-medium", children: i4 ? "Annotation styles" : "Tool defaults" }), c2.map(function(e6) {
        switch (e6.id) {
          case "color":
            return ue("section", { class: "mb-6", children: [ue("label", { class: "mb-2 block text-sm font-medium text-gray-900 dark:text-white", children: e6.label }), ue("div", { class: "flex justify-between gap-1", children: a3.map(function(e7) {
              return ue(hl, { color: e7, active: e7 === p2, onSelect: m2 }, e7);
            }) })] }, "color");
          case "opacity":
            return ue("section", { class: "mb-6", children: [ue("label", { class: "mb-1 block text-sm font-medium text-gray-900 dark:text-white", children: e6.label }), ue(ul, { value: y3, min: e6.min, max: e6.max, step: e6.step, onChange: b2 }), ue("span", { class: "text-xs text-gray-500", children: [Math.round(100 * y3), "%"] })] }, "opacity");
          case "strokeWidth":
            return l2 !== dt.INK ? null : ue("section", { class: "mb-6", children: [ue("label", { class: "mb-1 block text-sm font-medium text-gray-900 dark:text-white", children: e6.label }), ue(ul, { value: k3, min: e6.min, max: e6.max, step: e6.step, onChange: C3 }), ue("span", { class: "text-xs text-gray-500", children: [k3, "px"] })] }, "strokeWidth");
          default:
            return null;
        }
      })] });
    };
    gl = class extends Wt {
      constructor(e5, t3, n3) {
        super(e5, t3), this.engine = n3;
      }
      async initialize(e5) {
      }
      buildCapability() {
        return { renderPage: this.renderPage.bind(this), renderPageRect: this.renderPageRect.bind(this) };
      }
      renderPage({ pageIndex: e5, scaleFactor: t3 = 1, dpr: n3 = 1, rotation: o3 = Ue.Degree0, options: i4 = { withAnnotations: false }, imageType: r4 = "image/webp" }) {
        const a3 = this.coreState.core;
        if (!a3.document) throw new Error("document does not open");
        const s3 = a3.document.pages.find((t4) => t4.index === e5);
        if (!s3) throw new Error("page does not exist");
        return this.engine.renderPage(a3.document, s3, t3, o3, n3, i4, r4);
      }
      renderPageRect({ pageIndex: e5, scaleFactor: t3 = 1, dpr: n3 = 1, rect: o3, rotation: i4 = Ue.Degree0, options: r4 = { withAnnotations: false }, imageType: a3 = "image/webp" }) {
        const s3 = this.coreState.core;
        if (!s3.document) throw new Error("document does not open");
        const l2 = s3.document.pages.find((t4) => t4.index === e5);
        if (!l2) throw new Error("page does not exist");
        return this.engine.renderPageRect(s3.document, l2, t3, i4, n3, o3, r4, a3);
      }
    };
    gl.id = "render";
    ml = gl;
    fl = "render";
    vl = { manifest: { id: fl, name: "Render Plugin", version: "1.0.0", provides: ["render"], requires: [], optional: [], defaultConfig: { enabled: true } }, create: (e5, t3) => new ml(fl, e5, t3), reducer: () => {
    }, initialState: {} };
    bl = "rotate";
    wl = { id: bl, name: "Rotate Plugin", version: "1.0.0", provides: ["rotate"], requires: ["loader"], optional: ["spread"], defaultConfig: { enabled: true } };
    xl = class extends Wt {
      constructor(e5, t3, n3) {
        super(e5, t3), this.rotate$ = Qt(), this.resetReady();
        const o3 = n3.defaultRotation ?? this.coreState.core.rotation;
        this.setRotation(o3), this.markReady();
      }
      async initialize(e5) {
      }
      setRotation(e5) {
        if (!this.coreState.core.pages) throw new Error("Pages not loaded");
        this.dispatchCoreAction(/* @__PURE__ */ ((e6) => ({ type: Ot, payload: e6 }))(e5));
      }
      rotateForward() {
        const e5 = function(e6) {
          return (e6 + 1) % 4;
        }(this.coreState.core.rotation);
        this.setRotation(e5);
      }
      rotateBackward() {
        const e5 = function(e6) {
          return (e6 + 3) % 4;
        }(this.coreState.core.rotation);
        this.setRotation(e5);
      }
      buildCapability() {
        return { onRotateChange: this.rotate$.on, setRotation: (e5) => this.setRotation(e5), getRotation: () => this.coreState.core.rotation, rotateForward: () => this.rotateForward(), rotateBackward: () => this.rotateBackward(), getMatrix: ({ w: e5 = 0, h: t3 = 0, asString: n3 = true } = {}) => function(e6, t4, n4, o3 = true) {
          let i4 = 1, r4 = 0, a3 = 0, s3 = 1, l2 = 0, c2 = 0;
          switch (e6) {
            case 1:
              i4 = 0, r4 = 1, a3 = -1, s3 = 0, l2 = n4;
              break;
            case 2:
              i4 = -1, r4 = 0, a3 = 0, s3 = -1, l2 = t4, c2 = n4;
              break;
            case 3:
              i4 = 0, r4 = -1, a3 = 1, s3 = 0, c2 = t4;
          }
          return o3 ? `matrix(${i4},${r4},${a3},${s3},${l2},${c2})` : [i4, r4, a3, s3, l2, c2];
        }(this.coreState.core.rotation, e5, t3, n3) };
      }
      async destroy() {
        this.rotate$.clear(), super.destroy();
      }
    };
    xl.id = "rotate";
    kl = xl;
    Cl = { manifest: wl, create: (e5, t3, n3) => new kl(bl, e5, n3), reducer: () => {
    }, initialState: {} };
    _l = "tiling";
    Il = { id: _l, name: "Tiling Plugin", version: "1.0.0", provides: ["tiling"], requires: ["render", "scroll", "viewport"], optional: [], defaultConfig: { enabled: true, tileSize: 768, overlapPx: 2.5, extraRings: 0 } };
    Ml = "UPDATE_VISIBLE_TILES";
    Pl = "MARK_TILE_STATUS";
    Tl = (e5) => ({ type: Ml, payload: e5 });
    El = (e5, t3, n3) => ({ type: Pl, payload: { pageIndex: e5, tileId: t3, status: n3 } });
    zl = class extends Wt {
      constructor(e5, t3, n3) {
        super(e5, t3), this.tileRendering$ = Qt(), this.config = n3, this.renderCapability = this.registry.getPlugin("render").provides(), this.scrollCapability = this.registry.getPlugin("scroll").provides(), this.viewportCapability = this.registry.getPlugin("viewport").provides(), this.scrollCapability.onScroll((e6) => this.calculateVisibleTiles(e6), { mode: "throttle", wait: 500, throttleMode: "trailing" });
      }
      async initialize() {
      }
      onCoreStoreUpdated(e5, t3) {
        e5.core.scale !== t3.core.scale && this.calculateVisibleTiles(this.scrollCapability.getMetrics(this.viewportCapability.getMetrics()));
      }
      calculateVisibleTiles(e5) {
        var t3;
        if (!this.config.enabled) return void this.dispatch(Tl([]));
        const n3 = this.coreState.core.scale, o3 = this.coreState.core.rotation, i4 = {};
        for (const r4 of e5.pageVisibilityMetrics) {
          const e6 = r4.pageNumber - 1, a3 = null == (t3 = this.coreState.core.document) ? void 0 : t3.pages[e6];
          if (!a3) continue;
          const s3 = Al({ page: a3, metric: r4, scale: n3, rotation: o3, tileSize: this.config.tileSize, overlapPx: this.config.overlapPx, extraRings: this.config.extraRings });
          i4[e6] = s3;
        }
        this.dispatch(Tl(i4));
      }
      onStoreUpdated(e5, t3) {
        this.tileRendering$.emit(t3.visibleTiles);
      }
      buildCapability() {
        return { renderTile: this.renderTile.bind(this), onTileRendering: this.tileRendering$.on };
      }
      renderTile(e5) {
        if (!this.renderCapability) throw new Error("Render capability not available.");
        this.dispatch(El(e5.pageIndex, e5.tile.id, "rendering"));
        const t3 = this.renderCapability.renderPageRect({ pageIndex: e5.pageIndex, rect: e5.tile.pageRect, scaleFactor: e5.tile.srcScale, dpr: e5.dpr });
        return t3.wait(() => {
          this.dispatch(El(e5.pageIndex, e5.tile.id, "ready"));
        }, _t), t3;
      }
    };
    zl.id = "tiling";
    Rl = zl;
    Nl = { manifest: Il, create: (e5, t3, n3) => new Rl(_l, e5, n3), reducer: (e5, t3) => ((e6, t4) => {
      var n3, o3;
      switch (t4.type) {
        case Ml: {
          const o4 = t4.payload, i4 = { ...e6.visibleTiles };
          for (const e7 in o4) {
            const t5 = Number(e7), r4 = o4[t5], a3 = i4[t5] ?? [], s3 = null == (n3 = a3.find((e8) => !e8.isFallback)) ? void 0 : n3.srcScale, l2 = r4[0].srcScale;
            if (void 0 !== s3 && s3 !== l2) {
              const e8 = a3.filter((e9) => !e9.isFallback && "ready" === e9.status).map((e9) => ({ ...e9, isFallback: true })), n4 = e8.length > 0 ? [] : a3.filter((e9) => e9.isFallback);
              i4[t5] = [...n4, ...e8, ...r4];
            } else {
              const e8 = new Set(r4.map((e9) => e9.id)), n4 = [], o5 = /* @__PURE__ */ new Set();
              for (const t6 of a3) (t6.isFallback || e8.has(t6.id)) && (n4.push(t6), o5.add(t6.id));
              for (const e9 of r4) o5.has(e9.id) || n4.push(e9);
              i4[t5] = n4;
            }
          }
          return { ...e6, visibleTiles: i4 };
        }
        case Pl: {
          const { pageIndex: n4, tileId: i4, status: r4 } = t4.payload, a3 = (null == (o3 = e6.visibleTiles[n4]) ? void 0 : o3.map((e7) => e7.id === i4 ? { ...e7, status: r4 } : e7)) ?? [], s3 = a3.filter((e7) => !e7.isFallback), l2 = s3.every((e7) => "ready" === e7.status) ? s3 : a3;
          return { ...e6, visibleTiles: { ...e6.visibleTiles, [n4]: l2 } };
        }
        default:
          return e6;
      }
    })(e5, t3), initialState: { visibleTiles: {} } };
    Ll = () => rn(Rl.id);
    Fl = "fullscreen";
    Ul = { id: Fl, name: "Fullscreen Plugin", version: "1.0.0", provides: ["fullscreen"], requires: [], optional: [], defaultConfig: { enabled: true } };
    $l = "SET_FULLSCREEN";
    jl = class extends Wt {
      constructor(e5, t3) {
        super(e5, t3), this.onStateChange$ = Qt(), this.fullscreenRequest$ = Jt();
      }
      async initialize(e5) {
      }
      buildCapability() {
        return { isFullscreen: () => this.state.isFullscreen, enableFullscreen: () => this.enableFullscreen(), exitFullscreen: () => this.exitFullscreen(), toggleFullscreen: () => this.toggleFullscreen(), onRequest: this.fullscreenRequest$.on, onStateChange: this.onStateChange$.on };
      }
      toggleFullscreen() {
        this.state.isFullscreen ? this.exitFullscreen() : this.enableFullscreen();
      }
      enableFullscreen() {
        this.fullscreenRequest$.emit("enter");
      }
      exitFullscreen() {
        this.fullscreenRequest$.emit("exit");
      }
      onStoreUpdated(e5, t3) {
        this.onStateChange$.emit(t3);
      }
      setFullscreenState(e5) {
        this.dispatch({ type: $l, payload: e5 });
      }
      async destroy() {
        this.fullscreenRequest$.clear(), super.destroy();
      }
    };
    jl.id = "fullscreen";
    Bl = { manifest: Ul, create: (e5) => new jl(Fl, e5), reducer: (e5, t3) => t3.type === $l ? { ...e5, isFullscreen: t3.payload } : e5, initialState: { isFullscreen: false } };
    Wl = class extends Wt {
      constructor(e5, t3, n3) {
        super(e5, t3), this.downloadRequest$ = Jt(), this.engine = n3;
      }
      async initialize(e5) {
      }
      buildCapability() {
        return { saveAsCopy: this.saveAsCopy.bind(this), download: this.download.bind(this), onRequest: this.downloadRequest$.on };
      }
      download() {
        this.downloadRequest$.emit("download");
      }
      saveAsCopy() {
        const e5 = this.coreState.core.document;
        return e5 ? this.engine.saveAsCopy(e5) : wt.reject({ code: bt.DocNotOpen, message: "Document not found" });
      }
    };
    Wl.id = "export";
    Zl = "export";
    ql = { manifest: { id: Zl, name: "Export Plugin", version: "1.0.0", provides: ["export"], requires: [], optional: [], defaultConfig: { enabled: true } }, create: (e5, t3) => new Wl(Zl, e5, t3), reducer: () => {
    }, initialState: {} };
    Yl = class extends Wt {
      constructor(e5, t3) {
        super(e5, t3), this.interactionManager = t3.getPlugin(wr.id)?.provides(), this.interactionManager.registerMode({ id: "panMode", scope: "global", exclusive: false, cursor: "grab" });
      }
      async initialize(e5) {
      }
      buildCapability() {
        return { enablePan: () => this.interactionManager.activate("panMode"), disablePan: () => this.interactionManager.activate("default"), togglePan: () => {
          "panMode" === this.interactionManager.getActiveMode() ? this.interactionManager.activate("default") : this.interactionManager.activate("panMode");
        } };
      }
    };
    Yl.id = "pan";
    Xl = { manifest: { id: "pan", name: "Pan Plugin", version: "1.0.0", provides: ["pan"], requires: ["interaction-manager"], optional: [], defaultConfig: { enabled: true } }, create: (e5) => new Yl("pan", e5), reducer: () => {
    }, initialState: {} };
    Kl = () => {
      const { register: e5 } = Ir({ modeId: "panMode" }), { setCursor: t3, removeCursor: n3 } = _r(), { provides: o3 } = vn(), i4 = Te(null), r4 = Ee(() => ({ onPointerDown: (e6, n4) => {
        if (!o3) return;
        const r5 = o3.getMetrics();
        i4.current = { startX: n4.clientX, startY: n4.clientY, startLeft: r5.scrollLeft, startTop: r5.scrollTop }, t3("panMode", "grabbing", 10);
      }, onPointerMove: (e6, t4) => {
        const n4 = i4.current;
        if (!n4 || !o3) return;
        const r5 = t4.clientX - n4.startX, a3 = t4.clientY - n4.startY;
        o3.scrollTo({ x: n4.startLeft - r5, y: n4.startTop - a3 });
      }, onPointerUp: () => {
        i4.current && (i4.current = null, n3("panMode"));
      }, onPointerLeave: () => {
        i4.current && (i4.current = null, n3("panMode"));
      }, onPointerCancel: () => {
        i4.current && (i4.current = null, n3("panMode"));
      } }), [o3, t3, n3]);
      return Me(() => {
        if (e5) return e5(r4);
      }, [e5, r4]), ue(j2, {});
    };
    Jl = "capture";
    Ql = { id: Jl, name: "Capture Plugin", version: "1.0.0", provides: ["capture"], requires: ["render", "interaction-manager"], optional: [], defaultConfig: { enabled: true, scale: 1, imageType: "image/png", withAnnotations: false } };
    ec = class extends Wt {
      constructor(e5, t3, n3) {
        super(e5, t3), this.captureArea$ = Jt(), this.config = n3, this.renderCapability = this.registry.getPlugin("render").provides(), this.interactionManagerCapability = this.registry.getPlugin("interaction-manager").provides(), this.interactionManagerCapability.registerMode({ id: "marqueeCapture", scope: "page", exclusive: true, cursor: "crosshair" });
      }
      async initialize(e5) {
      }
      buildCapability() {
        return { onCaptureArea: this.captureArea$.on, captureArea: this.captureArea.bind(this), enableMarqueeCapture: this.enableMarqueeCapture.bind(this), disableMarqueeCapture: this.disableMarqueeCapture.bind(this), toggleMarqueeCapture: this.toggleMarqueeCapture.bind(this), isMarqueeCaptureActive: () => "marqueeCapture" === this.interactionManagerCapability?.getActiveMode() };
      }
      captureArea(e5, t3) {
        this.disableMarqueeCapture();
        this.renderCapability.renderPageRect({ pageIndex: e5, rect: t3, imageType: this.config.imageType, scaleFactor: this.config.scale, options: { withAnnotations: this.config.withAnnotations || false } }).wait((n3) => {
          this.captureArea$.emit({ pageIndex: e5, rect: t3, blob: n3, imageType: this.config.imageType || "image/png", scale: this.config.scale || 1, withAnnotations: this.config.withAnnotations || false });
        }, _t);
      }
      enableMarqueeCapture() {
        this.interactionManagerCapability?.activate("marqueeCapture");
      }
      disableMarqueeCapture() {
        this.interactionManagerCapability?.activate("default");
      }
      toggleMarqueeCapture() {
        "marqueeCapture" === this.interactionManagerCapability?.getActiveMode() ? this.interactionManagerCapability?.activate("default") : this.interactionManagerCapability?.activate("marqueeCapture");
      }
    };
    ec.id = "capture";
    tc = { manifest: Ql, create: (e5, t3, n3) => new ec(Jl, e5, n3), reducer: () => {
    }, initialState: {} };
    nc = () => rn(ec.id);
    oc = ({ pageIndex: e5, scale: t3, pageWidth: n3, pageHeight: o3, className: i4, stroke: r4 = "rgba(33,150,243,0.8)", fill: a3 = "rgba(33,150,243,0.15)" }) => {
      const { provides: s3 } = nc(), { register: l2 } = Ir({ modeId: "marqueeCapture", pageIndex: e5 }), c2 = (e6, t4, n4) => Math.max(t4, Math.min(n4, e6)), d2 = Te(null), [u2, h2] = Ie(null), p2 = n3 / t3, g2 = o3 / t3, m2 = Ee(() => ({ onPointerDown: (e6, t4) => {
        d2.current = e6, h2({ origin: { x: e6.x, y: e6.y }, size: { width: 0, height: 0 } }), t4.target?.setPointerCapture?.(t4.pointerId);
      }, onPointerMove: (e6) => {
        if (!d2.current) return;
        const t4 = c2(e6.x, 0, p2), n4 = c2(e6.y, 0, g2), { x: o4, y: i5 } = d2.current, r5 = Math.min(o4, t4), a4 = Math.min(i5, n4), s4 = Math.abs(t4 - o4), l3 = Math.abs(n4 - i5);
        h2({ origin: { x: r5, y: a4 }, size: { width: s4, height: l3 } });
      }, onPointerUp: (n4, o4) => {
        if (u2 && s3) {
          Math.max(u2.size.width, u2.size.height) * t3 > 5 && s3.captureArea(e5, u2);
        }
        d2.current = null, h2(null), o4.target?.releasePointerCapture?.(o4.pointerId);
      }, onPointerCancel: (e6, t4) => {
        d2.current = null, h2(null), t4.target?.releasePointerCapture?.(t4.pointerId);
      } }), [p2, p2, s3, t3, u2, e5]);
      return Me(() => {
        if (l2) return l2(m2);
      }, [l2, m2]), u2 ? ue("div", { style: { position: "absolute", pointerEvents: "none", left: u2.origin.x * t3, top: u2.origin.y * t3, width: u2.size.width * t3, height: u2.size.height * t3, border: `1px solid ${r4}`, background: a3, boxSizing: "border-box" }, className: i4 }) : null;
    };
    ic = "history";
    rc = { id: ic, name: "History Plugin", version: "1.0.0", provides: ["history"], requires: [], optional: [], defaultConfig: { enabled: true } };
    ac = "HISTORY/SET_STATE";
    sc = class extends Wt {
      constructor(e5, t3) {
        super(e5, t3), this.topicHistories = /* @__PURE__ */ new Map(), this.globalTimeline = [], this.globalIndex = -1, this.historyChange$ = Jt();
      }
      async initialize(e5) {
      }
      getHistoryState() {
        const e5 = {};
        return Array.from(this.topicHistories.entries()).forEach(([t3, n3]) => {
          e5[t3] = { canUndo: n3.currentIndex > -1, canRedo: n3.currentIndex < n3.commands.length - 1 };
        }), { global: { canUndo: this.globalIndex > -1, canRedo: this.globalIndex < this.globalTimeline.length - 1 }, topics: e5 };
      }
      emitHistoryChange(e5) {
        var t3;
        this.dispatch((t3 = this.getHistoryState(), { type: ac, payload: t3 })), this.historyChange$.emit(e5);
      }
      buildCapability() {
        return { getHistoryState: () => this.state, onHistoryChange: this.historyChange$.on, register: (e5, t3) => {
          this.topicHistories.has(t3) || this.topicHistories.set(t3, { commands: [], currentIndex: -1 });
          const n3 = this.topicHistories.get(t3);
          n3.commands.splice(n3.currentIndex + 1), n3.commands.push(e5), n3.currentIndex++;
          const o3 = { command: e5, topic: t3 };
          this.globalTimeline.splice(this.globalIndex + 1), this.globalTimeline.push(o3), this.globalIndex++, e5.execute(), this.emitHistoryChange(t3);
        }, undo: (e5) => {
          let t3;
          if (e5) {
            const n3 = this.topicHistories.get(e5);
            n3 && n3.currentIndex > -1 && (n3.commands[n3.currentIndex].undo(), n3.currentIndex--, t3 = e5);
          } else if (this.globalIndex > -1) {
            const e6 = this.globalTimeline[this.globalIndex];
            e6.command.undo(), this.topicHistories.get(e6.topic).currentIndex--, this.globalIndex--, t3 = e6.topic;
          }
          t3 && this.emitHistoryChange(t3);
        }, redo: (e5) => {
          let t3;
          if (e5) {
            const n3 = this.topicHistories.get(e5);
            n3 && n3.currentIndex < n3.commands.length - 1 && (n3.currentIndex++, n3.commands[n3.currentIndex].execute(), t3 = e5);
          } else if (this.globalIndex < this.globalTimeline.length - 1) {
            this.globalIndex++;
            const e6 = this.globalTimeline[this.globalIndex];
            e6.command.execute(), this.topicHistories.get(e6.topic).currentIndex++, t3 = e6.topic;
          }
          t3 && this.emitHistoryChange(t3);
        }, canUndo: (e5) => {
          if (e5) {
            const t3 = this.topicHistories.get(e5);
            return !!t3 && t3.currentIndex > -1;
          }
          return this.globalIndex > -1;
        }, canRedo: (e5) => {
          if (e5) {
            const t3 = this.topicHistories.get(e5);
            return !!t3 && t3.currentIndex < t3.commands.length - 1;
          }
          return this.globalIndex < this.globalTimeline.length - 1;
        } };
      }
    };
    sc.id = "history";
    lc = { global: { canUndo: false, canRedo: false }, topics: {} };
    cc = { manifest: rc, create: (e5, t3) => new sc(ic, e5), reducer: (e5 = lc, t3) => t3.type === ac ? { ...e5, ...t3.payload } : e5, initialState: lc };
    uc = function() {
      var e5 = function() {
        const { provides: e6 } = Sr(), [t4, n4] = Ie(kr);
        return Me(() => {
          if (e6) return e6.onStateChange((e7) => {
            n4(e7);
          });
        }, [e6]), { provides: e6, state: t4 };
      }(), t3 = e5.provides, n3 = v2(Ie({ show: false, mode: null, isAnimating: false }), 2), o3 = n3[0], i4 = n3[1];
      Me(function() {
        if (t3) return t3.onModeChange(function(e6) {
          var t4 = e6.activeMode;
          if ("marqueeZoom" === t4 || "marqueeCapture" === t4) {
            i4({ show: true, mode: t4, isAnimating: true });
            var n4 = setTimeout(function() {
              i4(function(e7) {
                return p(p({}, e7), {}, { show: false });
              });
            }, 3e3);
            return function() {
              return clearTimeout(n4);
            };
          }
          i4({ show: false, mode: null, isAnimating: false });
        });
      }, [t3]);
      if (!o3.show && !o3.isAnimating) return null;
      var r4 = "marqueeZoom" === o3.mode ? "Drag to select area to zoom" : "Drag to select area to capture", a3 = "marqueeZoom" === o3.mode ? "rgba(33,150,243,0.8)" : "rgba(76,175,80,0.8)";
      return U2("div", { className: "hint-overlay ".concat(o3.show ? "hint-show" : "hint-hide"), onAnimationEnd: function() {
        o3.show || i4(function(e6) {
          return p(p({}, e6), {}, { isAnimating: false, mode: null });
        });
      }, style: { position: "absolute", top: 0, left: 0, right: 0, bottom: 0, pointerEvents: "none", zIndex: 1e3, display: "flex", alignItems: "center", justifyContent: "center", flexDirection: "column", gap: "20px" } }, U2("div", { className: "hint-text", style: { background: "rgba(0, 0, 0, 0.8)", color: "white", padding: "12px 20px", borderRadius: "8px", fontSize: "14px", fontWeight: "500", textAlign: "center", maxWidth: "250px" } }, r4), U2("div", { className: "drag-demo", style: { position: "relative", width: "150px", height: "100px" } }, U2("div", { style: { position: "absolute", top: "20px", left: "20px", width: "110px", height: "60px", border: "2px dashed ".concat(a3), borderRadius: "4px", opacity: 0.6 } }), U2("div", { className: "animated-rect", style: { position: "absolute", top: "20px", left: "20px", border: "2px solid ".concat(a3), backgroundColor: "".concat(a3.replace("0.8", "0.15")), borderRadius: "4px" } }), U2("div", { className: "cursor-demo", style: { position: "absolute", width: "20px", height: "20px" } }, U2("svg", { width: "20", height: "20", viewBox: "0 0 20 20", fill: "none", xmlns: "http://www.w3.org/2000/svg" }, U2("path", { d: "M3.5 2.5L16.5 10L10 11.5L7.5 16.5L3.5 2.5Z", fill: "rgba(0,0,0,0.3)", transform: "translate(1,1)" }), U2("path", { d: "M3 2L16 10L10 11.5L7.5 16L3 2Z", fill: "white", stroke: "black", strokeWidth: "1" }), U2("path", { d: "M4 3.5L13.5 9.5L9.5 10.5L7.5 14L4 3.5Z", fill: "rgba(255,255,255,0.8)" })))), U2("style", { jsx: true }, "\n        .hint-overlay {\n          animation-duration: 0.3s;\n          animation-fill-mode: both;\n        }\n\n        .hint-show {\n          animation-name: hintFadeIn;\n        }\n\n        .hint-hide {\n          animation-name: hintFadeOut;\n        }\n\n        @keyframes hintFadeIn {\n          from {\n            opacity: 0;\n            transform: translateY(10px);\n          }\n          to {\n            opacity: 1;\n            transform: translateY(0);\n          }\n        }\n\n        @keyframes hintFadeOut {\n          from {\n            opacity: 1;\n            transform: translateY(0);\n          }\n          to {\n            opacity: 0;\n            transform: translateY(-10px);\n          }\n        }\n\n        .animated-rect {\n          animation: rectGrow 2s ease-in-out infinite;\n        }\n\n        @keyframes rectGrow {\n          0% {\n            width: 0;\n            height: 0;\n          }\n          50% {\n            width: 110px;\n            height: 60px;\n          }\n          100% {\n            width: 110px;\n            height: 60px;\n            opacity: 0.7;\n          }\n        }\n\n        .cursor-demo {\n          animation: cursorMove 2s ease-in-out infinite;\n        }\n\n        @keyframes cursorMove {\n          0% {\n            top: 20px;\n            left: 20px;\n          }\n          50% {\n            top: 50px;\n            left: 80px;\n          }\n          100% {\n            top: 80px;\n            left: 130px;\n          }\n        }\n\n        .hint-text {\n          animation: textPulse 0.6s ease-in-out;\n        }\n\n        @keyframes textPulse {\n          0% {\n            transform: scale(0.9);\n          }\n          50% {\n            transform: scale(1.05);\n          }\n          100% {\n            transform: scale(1);\n          }\n        }\n      "));
    };
    hc = { viewport: { viewportGap: 10 }, scroll: { strategy: wn.Vertical }, zoom: { defaultZoomLevel: ar.FitPage }, spread: { defaultSpreadMode: Nn.None }, rotate: { defaultRotation: Ue.Degree0 }, tiling: { tileSize: 768, overlapPx: 2.5, extraRings: 0 }, thumbnail: { width: 150, gap: 10, buffer: 3, labelHeight: 30 }, print: { batchSize: 3 } };
    pc = { menuCtr: { id: "menuCtr", icon: "menu", label: "Menu", type: "menu", children: ["openFile", "download", "enterFS", "screenshot", "print"], active: function(e5) {
      return "menuCtr" === e5.plugins.ui.commandMenu.commandMenu.activeCommand;
    } }, download: { id: "download", icon: "download", label: "Download", type: "action", action: function(e5) {
      var t3, n3 = null === (t3 = e5.getPlugin(Zl)) || void 0 === t3 ? void 0 : t3.provides();
      n3 && n3.download();
    } }, openFile: { id: "openFile", icon: "fileImport", label: "Open PDF", type: "action", action: function(e5) {
      var t3, n3 = null === (t3 = e5.getPlugin(Zn)) || void 0 === t3 ? void 0 : t3.provides();
      n3 && n3.openFileDialog();
    } }, enterFS: { id: "enterFS", icon: function(e5) {
      return e5.plugins.fullscreen.isFullscreen ? "fullscreenExit" : "fullscreen";
    }, label: function(e5) {
      return e5.plugins.fullscreen.isFullscreen ? "Exit full screen" : "Enter full screen";
    }, type: "action", action: function(e5) {
      var t3, n3 = null === (t3 = e5.getPlugin(Fl)) || void 0 === t3 ? void 0 : t3.provides();
      n3 && (n3.isFullscreen() ? n3.exitFullscreen() : n3.enableFullscreen());
    } }, screenshot: { id: "screenshot", icon: "screenshot", label: "Screenshot", type: "action", action: function(e5) {
      var t3, n3 = null === (t3 = e5.getPlugin(Jl)) || void 0 === t3 ? void 0 : t3.provides();
      n3 && (n3.isMarqueeCaptureActive() ? n3.disableMarqueeCapture() : n3.enableMarqueeCapture());
    }, active: function(e5) {
      return "marqueeCapture" === e5.plugins[xr].activeMode;
    } }, save: { id: "save", icon: "save", label: "Save", type: "action", action: function() {
      console.log("save");
    } }, print: { id: "print", icon: "print", label: "Print", type: "action", action: function(e5, t3) {
      var n3, o3 = null === (n3 = e5.getPlugin(fo)) || void 0 === n3 ? void 0 : n3.provides();
      o3 && o3.updateComponentState({ componentType: "floating", componentId: "printModal", patch: { open: true } });
    } }, settings: { id: "settings", icon: "settings", label: "Settings", dividerBefore: true, type: "action", action: function() {
      console.log("settings");
    } }, viewCtr: { id: "viewCtr", icon: "viewSettings", label: "View controls", type: "menu", children: ["pageOrientation", "scrollLayout", "pageLayout", "enterFS"], active: function(e5) {
      return "viewCtr" === e5.plugins.ui.commandMenu.commandMenu.activeCommand;
    } }, pageOrientation: { id: "pageOrientation", label: "Page orientation", type: "group", children: ["rotateClockwise", "rotateCounterClockwise"] }, rotateClockwise: { id: "rotateClockwise", label: "Rotate clockwise", icon: "rotateClockwise", type: "action", action: function(e5) {
      var t3, n3 = null === (t3 = e5.getPlugin(bl)) || void 0 === t3 ? void 0 : t3.provides();
      n3 && n3.rotateForward();
    } }, rotateCounterClockwise: { id: "rotateCounterClockwise", label: "Rotate counter clockwise", icon: "rotateCounterClockwise", type: "action", action: function(e5) {
      var t3, n3 = null === (t3 = e5.getPlugin(bl)) || void 0 === t3 ? void 0 : t3.provides();
      n3 && n3.rotateBackward();
    } }, scrollLayout: { id: "scrollLayout", label: "Scroll layout", type: "group", children: ["vertical", "horizontal"] }, vertical: { id: "vertical", label: "Vertical", icon: "vertical", type: "action", active: function(e5) {
      return e5.plugins.scroll.strategy === wn.Vertical;
    }, action: function(e5) {
      var t3, n3 = null === (t3 = e5.getPlugin(Tn)) || void 0 === t3 ? void 0 : t3.provides();
      n3 && n3.setScrollStrategy(wn.Vertical);
    } }, horizontal: { id: "horizontal", label: "Horizontal", icon: "horizontal", type: "action", active: function(e5) {
      return e5.plugins.scroll.strategy === wn.Horizontal;
    }, action: function(e5) {
      var t3, n3 = null === (t3 = e5.getPlugin(Tn)) || void 0 === t3 ? void 0 : t3.provides();
      n3 && n3.setScrollStrategy(wn.Horizontal);
    } }, pageLayout: { id: "pageLayout", label: "Page layout", type: "group", children: ["singlePage", "doublePage", "coverFacingPage"] }, singlePage: { id: "singlePage", label: "Single page", icon: "singlePage", type: "action", disabled: function(e5) {
      return e5.plugins.scroll.strategy === wn.Horizontal;
    }, active: function(e5) {
      return e5.plugins.spread.spreadMode === Nn.None;
    }, action: function(e5) {
      var t3, n3 = null === (t3 = e5.getPlugin(Dn)) || void 0 === t3 ? void 0 : t3.provides();
      n3 && n3.setSpreadMode(Nn.None);
    } }, doublePage: { id: "doublePage", label: "Double page", icon: "book", type: "action", disabled: function(e5) {
      return e5.plugins.scroll.strategy === wn.Horizontal;
    }, active: function(e5) {
      return e5.plugins.spread.spreadMode === Nn.Odd;
    }, action: function(e5) {
      var t3, n3 = null === (t3 = e5.getPlugin(Dn)) || void 0 === t3 ? void 0 : t3.provides();
      n3 && n3.setSpreadMode(Nn.Odd);
    } }, coverFacingPage: { id: "coverFacingPage", label: "Cover facing page", icon: "book2", type: "action", disabled: function(e5) {
      return e5.plugins.scroll.strategy === wn.Horizontal;
    }, active: function(e5) {
      return e5.plugins.spread.spreadMode === Nn.Even;
    }, action: function(e5) {
      var t3, n3 = null === (t3 = e5.getPlugin(Dn)) || void 0 === t3 ? void 0 : t3.provides();
      n3 && n3.setSpreadMode(Nn.Even);
    } }, leftAction: { id: "leftAction", label: "Left action", type: "menu", icon: "dots", children: ["viewCtr", "zoom"], active: function(e5) {
      return "leftAction" === e5.plugins.ui.commandMenu.commandMenu.activeCommand || "zoom" === e5.plugins.ui.commandMenu.commandMenu.activeCommand || "changeZoomLevel" === e5.plugins.ui.commandMenu.commandMenu.activeCommand || "viewCtr" === e5.plugins.ui.commandMenu.commandMenu.activeCommand;
    } }, zoom: { id: "zoom", icon: "zoomIn", label: "Zoom Controls", type: "menu", children: ["changeZoomLevel", "zoomIn", "zoomOut", "fitToWidth", "fitToPage", "zoomInArea"], active: function(e5) {
      return "zoom" === e5.plugins.ui.commandMenu.commandMenu.activeCommand;
    } }, zoomInArea: { id: "zoomInArea", label: "Zoom in area", icon: "zoomInArea", type: "action", dividerBefore: true, action: function(e5) {
      var t3, n3 = null === (t3 = e5.getPlugin(sr)) || void 0 === t3 ? void 0 : t3.provides();
      n3 && (n3.isMarqueeZoomActive() ? n3.disableMarqueeZoom() : n3.enableMarqueeZoom());
    }, active: function(e5) {
      return "marqueeZoom" === e5.plugins[xr].activeMode;
    } }, changeZoomLevel: { id: "changeZoomLevel", label: function(e5) {
      return "Zoom level (".concat((100 * e5.plugins.zoom.currentZoomLevel).toFixed(0), "%)");
    }, type: "menu", children: ["zoom25", "zoom50", "zoom100", "zoom125", "zoom150", "zoom200", "zoom400", "zoom800", "zoom1600"], active: function(e5) {
      return "changeZoomLevel" === e5.plugins.ui.commandMenu.commandMenu.activeCommand;
    } }, zoom25: { id: "zoom25", label: "25%", type: "action", active: function(e5) {
      return 0.25 === e5.plugins.zoom.currentZoomLevel;
    }, action: function(e5) {
      var t3, n3 = null === (t3 = e5.getPlugin(sr)) || void 0 === t3 ? void 0 : t3.provides();
      n3 && n3.requestZoom(0.25);
    } }, zoom50: { id: "zoom50", label: "50%", type: "action", active: function(e5) {
      return 0.5 === e5.plugins.zoom.currentZoomLevel;
    }, action: function(e5) {
      var t3, n3 = null === (t3 = e5.getPlugin(sr)) || void 0 === t3 ? void 0 : t3.provides();
      n3 && n3.requestZoom(0.5);
    } }, zoom100: { id: "zoom100", label: "100%", type: "action", active: function(e5) {
      return 1 === e5.plugins.zoom.currentZoomLevel;
    }, action: function(e5) {
      var t3, n3 = null === (t3 = e5.getPlugin(sr)) || void 0 === t3 ? void 0 : t3.provides();
      n3 && n3.requestZoom(1);
    } }, zoom125: { id: "zoom125", label: "125%", type: "action", active: function(e5) {
      return 1.25 === e5.plugins.zoom.currentZoomLevel;
    }, action: function(e5) {
      var t3, n3 = null === (t3 = e5.getPlugin(sr)) || void 0 === t3 ? void 0 : t3.provides();
      n3 && n3.requestZoom(1.25);
    } }, zoom150: { id: "zoom150", label: "150%", type: "action", active: function(e5) {
      return 1.5 === e5.plugins.zoom.currentZoomLevel;
    }, action: function(e5) {
      var t3, n3 = null === (t3 = e5.getPlugin(sr)) || void 0 === t3 ? void 0 : t3.provides();
      n3 && n3.requestZoom(1.5);
    } }, zoom200: { id: "zoom200", label: "200%", type: "action", active: function(e5) {
      return 2 === e5.plugins.zoom.currentZoomLevel;
    }, action: function(e5) {
      var t3, n3 = null === (t3 = e5.getPlugin(sr)) || void 0 === t3 ? void 0 : t3.provides();
      n3 && n3.requestZoom(2);
    } }, zoom400: { id: "zoom400", label: "400%", type: "action", active: function(e5) {
      return 4 === e5.plugins.zoom.currentZoomLevel;
    }, action: function(e5) {
      var t3, n3 = null === (t3 = e5.getPlugin(sr)) || void 0 === t3 ? void 0 : t3.provides();
      n3 && n3.requestZoom(4);
    } }, zoom800: { id: "zoom800", label: "800%", type: "action", active: function(e5) {
      return 8 === e5.plugins.zoom.currentZoomLevel;
    }, action: function(e5) {
      var t3, n3 = null === (t3 = e5.getPlugin(sr)) || void 0 === t3 ? void 0 : t3.provides();
      n3 && n3.requestZoom(8);
    } }, zoom1600: { id: "zoom1600", label: "1600%", type: "action", active: function(e5) {
      return 16 === e5.plugins.zoom.currentZoomLevel;
    }, action: function(e5) {
      var t3, n3 = null === (t3 = e5.getPlugin(sr)) || void 0 === t3 ? void 0 : t3.provides();
      n3 && n3.requestZoom(16);
    } }, zoomIn: { id: "zoomIn", label: "Zoom in", icon: "zoomIn", type: "action", action: function(e5) {
      var t3, n3 = null === (t3 = e5.getPlugin(sr)) || void 0 === t3 ? void 0 : t3.provides();
      n3 && n3.zoomIn();
    } }, zoomOut: { id: "zoomOut", label: "Zoom out", icon: "zoomOut", type: "action", action: function(e5) {
      var t3, n3 = null === (t3 = e5.getPlugin(sr)) || void 0 === t3 ? void 0 : t3.provides();
      n3 && n3.zoomOut();
    } }, search: { id: "search", label: "Search", icon: "search", type: "action", action: function(e5) {
      var t3, n3 = null === (t3 = e5.getPlugin(fo)) || void 0 === t3 ? void 0 : t3.provides();
      n3 && n3.togglePanel({ id: "rightPanel", visibleChild: "search" });
    }, active: function(e5) {
      return true === e5.plugins.ui.panel.rightPanel.open && "search" === e5.plugins.ui.panel.rightPanel.visibleChild;
    } }, comment: { id: "comment", label: "Comment", icon: "comment", type: "action", action: function(e5) {
      var t3, n3 = null === (t3 = e5.getPlugin(fo)) || void 0 === t3 ? void 0 : t3.provides();
      n3 && n3.togglePanel({ id: "rightPanel", visibleChild: "comment" });
    }, active: function(e5) {
      return true === e5.plugins.ui.panel.rightPanel.open && "comment" === e5.plugins.ui.panel.rightPanel.visibleChild;
    } }, fitToWidth: { id: "fitToWidth", label: "Fit to width", icon: "fitToWidth", type: "action", active: function(e5) {
      return e5.plugins.zoom.zoomLevel === ar.FitWidth;
    }, action: function(e5) {
      var t3, n3 = null === (t3 = e5.getPlugin(sr)) || void 0 === t3 ? void 0 : t3.provides();
      n3 && n3.requestZoom(ar.FitWidth);
    } }, fitToPage: { id: "fitToPage", label: "Fit to page", icon: "fitToPage", type: "action", active: function(e5) {
      return e5.plugins.zoom.zoomLevel === ar.FitPage;
    }, action: function(e5) {
      var t3, n3 = null === (t3 = e5.getPlugin(sr)) || void 0 === t3 ? void 0 : t3.provides();
      n3 && n3.requestZoom(ar.FitPage);
    } }, sidebar: { id: "sidebar", label: "Sidebar", icon: "sidebar", type: "action", action: function(e5, t3) {
      var n3, o3 = null === (n3 = e5.getPlugin(fo)) || void 0 === n3 ? void 0 : n3.provides();
      o3 && o3.togglePanel({ id: "leftPanel", visibleChild: "leftPanelMain", open: true !== t3.plugins.ui.panel.leftPanel.open || "leftPanelMain" !== t3.plugins.ui.panel.leftPanel.visibleChild });
    }, active: function(e5) {
      return true === e5.plugins.ui.panel.leftPanel.open && "leftPanelMain" === e5.plugins.ui.panel.leftPanel.visibleChild;
    } }, sidebarMenu: { id: "sidebarMenu", label: "Sidebar Menu", type: "menu", children: ["thumbnails", "outline"] }, thumbnails: { id: "thumbnails", label: "Thumbnails", icon: "squares", type: "action", action: function(e5) {
      var t3, n3 = null === (t3 = e5.getPlugin(fo)) || void 0 === t3 ? void 0 : t3.provides();
      n3 && (n3.togglePanel({ id: "leftPanel", visibleChild: "leftPanelMain", open: true }), n3.updateComponentState({ componentType: "custom", componentId: "leftPanelMain", patch: { visibleChild: "thumbnails" } }));
    }, active: function(e5) {
      return "thumbnails" === e5.plugins.ui.custom.leftPanelMain.visibleChild;
    } }, outline: { id: "outline", label: "Outline", icon: "listTree", type: "action", action: function(e5) {
      var t3, n3 = null === (t3 = e5.getPlugin(fo)) || void 0 === t3 ? void 0 : t3.provides();
      n3 && (n3.togglePanel({ id: "leftPanel", visibleChild: "leftPanelMain", open: true }), n3.updateComponentState({ componentType: "custom", componentId: "leftPanelMain", patch: { visibleChild: "outline" } }));
    }, active: function(e5) {
      return "outline" === e5.plugins.ui.custom.leftPanelMain.visibleChild;
    } }, attachments: { id: "attachments", label: "Attachments", icon: "paperclip", type: "action", action: function(e5) {
      var t3, n3 = null === (t3 = e5.getPlugin(fo)) || void 0 === t3 ? void 0 : t3.provides();
      n3 && (n3.togglePanel({ id: "leftPanel", visibleChild: "leftPanelMain", open: true }), n3.updateComponentState({ componentType: "custom", componentId: "leftPanelMain", patch: { visibleChild: "attachments" } }));
    }, active: function(e5) {
      return "attachments" === e5.plugins.ui.custom.leftPanelMain.visibleChild;
    } }, view: { id: "view", label: "View", type: "action", action: function(e5) {
      var t3, n3, o3 = null === (t3 = e5.getPlugin(fo)) || void 0 === t3 ? void 0 : t3.provides(), i4 = null === (n3 = e5.getPlugin(ts)) || void 0 === n3 ? void 0 : n3.provides();
      o3 && (o3.setHeaderVisible({ id: "toolsHeader", visible: false }), null == i4 || i4.setAnnotationMode(null));
    }, active: function(e5) {
      return false === e5.plugins.ui.header.toolsHeader.visible;
    } }, annotate: { id: "annotate", label: "Annotate", type: "action", action: function(e5) {
      var t3, n3 = null === (t3 = e5.getPlugin(fo)) || void 0 === t3 ? void 0 : t3.provides();
      n3 && n3.setHeaderVisible({ id: "toolsHeader", visible: true, visibleChild: "annotationTools" });
    }, active: function(e5) {
      return true === e5.plugins.ui.header.toolsHeader.visible && "annotationTools" === e5.plugins.ui.header.toolsHeader.visibleChild;
    } }, shapes: { id: "shapes", label: "Shapes", type: "action", action: function(e5) {
      var t3, n3 = null === (t3 = e5.getPlugin(fo)) || void 0 === t3 ? void 0 : t3.provides();
      n3 && n3.setHeaderVisible({ id: "toolsHeader", visible: true, visibleChild: "shapeTools" });
    }, active: function(e5) {
      return true === e5.plugins.ui.header.toolsHeader.visible && "shapeTools" === e5.plugins.ui.header.toolsHeader.visibleChild;
    } }, fillAndSign: { id: "fillAndSign", label: "Fill and Sign", type: "action", action: function(e5) {
      var t3, n3 = null === (t3 = e5.getPlugin(fo)) || void 0 === t3 ? void 0 : t3.provides();
      n3 && n3.setHeaderVisible({ id: "toolsHeader", visible: true, visibleChild: "fillAndSignTools" });
    }, active: function(e5) {
      return true === e5.plugins.ui.header.toolsHeader.visible && "fillAndSignTools" === e5.plugins.ui.header.toolsHeader.visibleChild;
    } }, form: { id: "form", label: "Form", type: "action", action: function(e5) {
      var t3, n3 = null === (t3 = e5.getPlugin(fo)) || void 0 === t3 ? void 0 : t3.provides();
      n3 && n3.setHeaderVisible({ id: "toolsHeader", visible: true, visibleChild: "formTools" });
    }, active: function(e5) {
      return true === e5.plugins.ui.header.toolsHeader.visible && "formTools" === e5.plugins.ui.header.toolsHeader.visibleChild;
    } }, tabOverflow: { id: "tabOverflow", label: "More", icon: "dots", type: "menu", children: ["view", "annotate"], active: function(e5) {
      return "tabOverflow" === e5.plugins.ui.commandMenu.commandMenu.activeCommand;
    } }, nextPage: { id: "nextPage", label: "Next page", icon: "chevronRight", shortcut: "ArrowRight", shortcutLabel: "Arrow Right", type: "action", action: function(e5) {
      var t3, n3 = null === (t3 = e5.getPlugin(Tn)) || void 0 === t3 ? void 0 : t3.provides();
      n3 && n3.scrollToNextPage();
    } }, previousPage: { id: "previousPage", label: "Previous page", icon: "chevronLeft", type: "action", shortcut: "ArrowLeft", shortcutLabel: "Arrow Left", action: function(e5) {
      var t3, n3 = null === (t3 = e5.getPlugin(Tn)) || void 0 === t3 ? void 0 : t3.provides();
      n3 && n3.scrollToPreviousPage();
    } }, copy: { id: "copy", label: "Copy", icon: "copy", type: "action", shortcut: "Meta+C", shortcutLabel: "Cmd+C", action: function(e5) {
      var t3, n3 = null === (t3 = e5.getPlugin(aa)) || void 0 === t3 ? void 0 : t3.provides();
      n3 && (n3.copyToClipboard(), n3.clear());
    } }, underline: { id: "underline", label: "Underline", type: "action", icon: "underline", action: function(e5, t3) {
      var n3, o3 = null === (n3 = e5.getPlugin(ts)) || void 0 === n3 ? void 0 : n3.provides();
      o3 && (t3.plugins.annotation.annotationMode === dt.UNDERLINE ? o3.setAnnotationMode(null) : o3.setAnnotationMode(dt.UNDERLINE));
    }, active: function(e5) {
      return e5.plugins.annotation.annotationMode === dt.UNDERLINE;
    } }, squiggly: { id: "squiggly", label: "Squiggly", type: "action", icon: "squiggly", action: function(e5, t3) {
      var n3, o3 = null === (n3 = e5.getPlugin(ts)) || void 0 === n3 ? void 0 : n3.provides();
      o3 && (t3.plugins.annotation.annotationMode === dt.SQUIGGLY ? o3.setAnnotationMode(null) : o3.setAnnotationMode(dt.SQUIGGLY));
    }, active: function(e5) {
      return e5.plugins.annotation.annotationMode === dt.SQUIGGLY;
    } }, strikethrough: { id: "strikethrough", label: "Strikethrough", type: "action", icon: "strikethrough", action: function(e5, t3) {
      var n3, o3 = null === (n3 = e5.getPlugin(ts)) || void 0 === n3 ? void 0 : n3.provides();
      o3 && (t3.plugins.annotation.annotationMode === dt.STRIKEOUT ? o3.setAnnotationMode(null) : o3.setAnnotationMode(dt.STRIKEOUT));
    }, active: function(e5) {
      return e5.plugins.annotation.annotationMode === dt.STRIKEOUT;
    } }, highlight: { id: "highlight", label: "Highlight", type: "action", icon: "highlight", action: function(e5, t3) {
      var n3, o3 = null === (n3 = e5.getPlugin(ts)) || void 0 === n3 ? void 0 : n3.provides();
      o3 && (t3.plugins.annotation.annotationMode === dt.HIGHLIGHT ? o3.setAnnotationMode(null) : o3.setAnnotationMode(dt.HIGHLIGHT));
    }, active: function(e5) {
      return e5.plugins.annotation.annotationMode === dt.HIGHLIGHT;
    } }, freehand: { id: "freehand", label: "Freehand", type: "action", icon: "pencilMarker", action: function(e5, t3) {
      var n3, o3 = null === (n3 = e5.getPlugin(ts)) || void 0 === n3 ? void 0 : n3.provides();
      o3 && (t3.plugins.annotation.annotationMode === dt.INK ? o3.setAnnotationMode(null) : (o3.deselectAnnotation(), o3.setAnnotationMode(dt.INK)));
    }, active: function(e5) {
      return e5.plugins.annotation.annotationMode === dt.INK;
    } }, squigglySelection: { id: "squigglySelection", label: "Squiggly Selection", type: "action", icon: "squiggly", action: function(e5) {
      var t3, n3, o3 = null === (t3 = e5.getPlugin(ts)) || void 0 === t3 ? void 0 : t3.provides(), i4 = null === (n3 = e5.getPlugin(aa)) || void 0 === n3 ? void 0 : n3.provides();
      if (i4 && o3) {
        var r4, a3 = o3.getToolDefaults(dt.SQUIGGLY), l2 = s2(i4.getFormattedSelection());
        try {
          for (l2.s(); !(r4 = l2.n()).done; ) {
            var c2 = r4.value;
            o3.createAnnotation(c2.pageIndex, { id: Date.now() + Math.random(), type: dt.SQUIGGLY, color: a3.color, opacity: a3.opacity, pageIndex: c2.pageIndex, rect: c2.rect, segmentRects: c2.segmentRects });
          }
        } catch (e6) {
          l2.e(e6);
        } finally {
          l2.f();
        }
        i4.clear();
      }
    } }, underlineSelection: { id: "underlineSelection", label: "Underline Selection", type: "action", icon: "underline", action: function(e5) {
      var t3, n3, o3 = null === (t3 = e5.getPlugin(ts)) || void 0 === t3 ? void 0 : t3.provides(), i4 = null === (n3 = e5.getPlugin(aa)) || void 0 === n3 ? void 0 : n3.provides();
      if (i4 && o3) {
        var r4, a3 = o3.getToolDefaults(dt.UNDERLINE), l2 = s2(i4.getFormattedSelection());
        try {
          for (l2.s(); !(r4 = l2.n()).done; ) {
            var c2 = r4.value;
            o3.createAnnotation(c2.pageIndex, { id: Date.now() + Math.random(), type: dt.UNDERLINE, color: a3.color, opacity: a3.opacity, pageIndex: c2.pageIndex, rect: c2.rect, segmentRects: c2.segmentRects });
          }
        } catch (e6) {
          l2.e(e6);
        } finally {
          l2.f();
        }
        i4.clear();
      }
    } }, strikethroughSelection: { id: "strikethroughSelection", label: "Strikethrough Selection", type: "action", icon: "strikethrough", action: function(e5) {
      var t3, n3, o3 = null === (t3 = e5.getPlugin(ts)) || void 0 === t3 ? void 0 : t3.provides(), i4 = null === (n3 = e5.getPlugin(aa)) || void 0 === n3 ? void 0 : n3.provides();
      if (i4 && o3) {
        var r4, a3 = o3.getToolDefaults(dt.STRIKEOUT), l2 = s2(i4.getFormattedSelection());
        try {
          for (l2.s(); !(r4 = l2.n()).done; ) {
            var c2 = r4.value;
            o3.createAnnotation(c2.pageIndex, { id: Date.now() + Math.random(), type: dt.STRIKEOUT, color: a3.color, opacity: a3.opacity, pageIndex: c2.pageIndex, rect: c2.rect, segmentRects: c2.segmentRects });
          }
        } catch (e6) {
          l2.e(e6);
        } finally {
          l2.f();
        }
        i4.clear();
      }
    } }, highlightSelection: { id: "highlightSelection", label: "Highlight Selection", type: "action", icon: "highlight", action: function(e5) {
      var t3, n3, o3 = null === (t3 = e5.getPlugin(ts)) || void 0 === t3 ? void 0 : t3.provides(), i4 = null === (n3 = e5.getPlugin(aa)) || void 0 === n3 ? void 0 : n3.provides();
      if (i4 && o3) {
        var r4, a3 = o3.getToolDefaults(dt.HIGHLIGHT), l2 = s2(i4.getFormattedSelection());
        try {
          for (l2.s(); !(r4 = l2.n()).done; ) {
            var c2 = r4.value;
            o3.createAnnotation(c2.pageIndex, { id: Date.now() + Math.random(), type: dt.HIGHLIGHT, color: a3.color, opacity: a3.opacity, pageIndex: c2.pageIndex, rect: c2.rect, segmentRects: c2.segmentRects });
          }
        } catch (e6) {
          l2.e(e6);
        } finally {
          l2.f();
        }
        i4.clear();
      }
    } }, styleAnnotation: { id: "styleAnnotation", label: "Style", type: "action", icon: "palette", action: function(e5, t3) {
      var n3, o3 = null === (n3 = e5.getPlugin(fo)) || void 0 === n3 ? void 0 : n3.provides();
      o3 && o3.togglePanel({ id: "leftPanel", visibleChild: "leftPanelAnnotationStyle", open: true !== t3.plugins.ui.panel.leftPanel.open || "leftPanelAnnotationStyle" !== t3.plugins.ui.panel.leftPanel.visibleChild });
    }, active: function(e5) {
      return true === e5.plugins.ui.panel.leftPanel.open && "leftPanelAnnotationStyle" === e5.plugins.ui.panel.leftPanel.visibleChild;
    } }, deleteAnnotation: { id: "deleteAnnotation", label: "Delete", type: "action", icon: "trash", action: function(e5) {
      var t3, n3 = null === (t3 = e5.getPlugin(ts)) || void 0 === t3 ? void 0 : t3.provides();
      if (n3) {
        var o3 = n3.getSelectedAnnotation();
        o3 && n3.deleteAnnotation(o3.object.pageIndex, o3.localId);
      }
    } }, panMode: { id: "panMode", label: "Pan", type: "action", icon: "hand", action: function(e5) {
      var t3, n3 = null === (t3 = e5.getPlugin(xr)) || void 0 === t3 ? void 0 : t3.provides();
      n3 && ("panMode" === n3.getActiveMode() ? n3.activate("default") : n3.activate("panMode"));
    }, active: function(e5) {
      return "panMode" === e5.plugins[xr].activeMode;
    } }, undo: { id: "undo", label: "Undo", type: "action", icon: "arrowBackUp", action: function(e5) {
      var t3, n3 = null === (t3 = e5.getPlugin(ic)) || void 0 === t3 ? void 0 : t3.provides();
      n3 && n3.undo();
    }, disabled: function(e5) {
      return !e5.plugins[ic].global.canUndo;
    } }, redo: { id: "redo", label: "Redo", type: "action", icon: "arrowForwardUp", action: function(e5) {
      var t3, n3 = null === (t3 = e5.getPlugin(ic)) || void 0 === t3 ? void 0 : t3.provides();
      n3 && n3.redo();
    }, disabled: function(e5) {
      return !e5.plugins[ic].global.canRedo;
    } }, commitAnnotations: { id: "commitAnnotations", label: "Commit", type: "action", icon: "deviceFloppy", action: function(e5) {
      var t3, n3 = null === (t3 = e5.getPlugin(ts)) || void 0 === t3 ? void 0 : t3.provides();
      n3 && n3.commit();
    } } };
    gc = { menuButton: { type: "iconButton", id: "menuButton", props: { commandId: "menuCtr", active: false, label: "Menu" }, mapStateToProps: function(e5, t3) {
      return p(p({}, t3), {}, { active: ro(pc.menuCtr, e5) });
    } }, deleteAnnotationButton: { type: "iconButton", id: "deleteAnnotationButton", props: { commandId: "deleteAnnotation", active: false, label: "Delete" } }, styleButton: { type: "iconButton", id: "styleButton", props: { commandId: "styleAnnotation", active: false, label: "Style" }, mapStateToProps: function(e5, t3) {
      return p(p({}, t3), {}, { active: ro(pc.styleAnnotation, e5) });
    } }, undoButton: { type: "iconButton", id: "undoButton", props: { commandId: "undo", disabled: false, label: "Undo" }, mapStateToProps: function(e5, t3) {
      return p(p({}, t3), {}, { disabled: ao(pc.undo, e5) });
    } }, redoButton: { type: "iconButton", id: "redoButton", props: { commandId: "redo", disabled: false, label: "Redo" }, mapStateToProps: function(e5, t3) {
      return p(p({}, t3), {}, { disabled: ao(pc.redo, e5) });
    } }, commitAnnotationsButton: { type: "iconButton", id: "commitAnnotationsButton", props: { commandId: "commitAnnotations", active: false, label: "Commit" } }, copyButton: { type: "iconButton", id: "copyButton", props: { commandId: "copy", active: false, label: "Copy" }, mapStateToProps: function(e5, t3) {
      return p(p({}, t3), {}, { active: ro(pc.copy, e5) });
    } }, panModeButton: { type: "iconButton", id: "panModeButton", props: { commandId: "panMode", active: false, label: "Pan" }, mapStateToProps: function(e5, t3) {
      return p(p({}, t3), {}, { active: ro(pc.panMode, e5) });
    } }, underlineButton: { type: "iconButton", id: "underlineButton", props: { commandId: "underline", active: false, label: "Underline", color: "#e44234" }, mapStateToProps: function(e5, t3) {
      return p(p({}, t3), {}, { active: ro(pc.underline, e5), color: e5.plugins.annotation.toolDefaults[dt.UNDERLINE].color });
    } }, squigglyButton: { type: "iconButton", id: "squigglyButton", props: { commandId: "squiggly", active: false, label: "Squiggly", color: "#e44234" }, mapStateToProps: function(e5, t3) {
      return p(p({}, t3), {}, { active: ro(pc.squiggly, e5), color: e5.plugins.annotation.toolDefaults[dt.SQUIGGLY].color });
    } }, strikethroughButton: { type: "iconButton", id: "strikethroughButton", props: { commandId: "strikethrough", active: false, label: "Strikethrough", color: "#e44234" }, mapStateToProps: function(e5, t3) {
      return p(p({}, t3), {}, { active: ro(pc.strikethrough, e5), color: e5.plugins.annotation.toolDefaults[dt.STRIKEOUT].color });
    } }, highlightButton: { type: "iconButton", id: "highlightButton", props: { commandId: "highlight", active: false, label: "Highlight", color: "#ffcd45" }, mapStateToProps: function(e5, t3) {
      return p(p({}, t3), {}, { active: ro(pc.highlight, e5), color: e5.plugins.annotation.toolDefaults[dt.HIGHLIGHT].color });
    } }, freehandButton: { type: "iconButton", id: "freehandButton", props: { commandId: "freehand", active: false, label: "Freehand", color: "#e44234" }, mapStateToProps: function(e5, t3) {
      return p(p({}, t3), {}, { active: ro(pc.freehand, e5), color: e5.plugins.annotation.toolDefaults[dt.INK].color });
    } }, highlightSelectionButton: { type: "iconButton", id: "highlightSelectionButton", props: { commandId: "highlightSelection", color: "#ffcd45" }, mapStateToProps: function(e5, t3) {
      return p(p({}, t3), {}, { color: e5.plugins.annotation.toolDefaults[dt.HIGHLIGHT].color });
    } }, underlineSelectionButton: { type: "iconButton", id: "underlineSelectionButton", props: { commandId: "underlineSelection", color: "#e44234" }, mapStateToProps: function(e5, t3) {
      return p(p({}, t3), {}, { color: e5.plugins.annotation.toolDefaults[dt.UNDERLINE].color });
    } }, strikethroughSelectionButton: { type: "iconButton", id: "strikethroughSelectionButton", props: { commandId: "strikethroughSelection", color: "#e44234" }, mapStateToProps: function(e5, t3) {
      return p(p({}, t3), {}, { color: e5.plugins.annotation.toolDefaults[dt.STRIKEOUT].color });
    } }, squigglySelectionButton: { type: "iconButton", id: "squigglySelectionButton", props: { commandId: "squigglySelection", color: "#e44234" }, mapStateToProps: function(e5, t3) {
      return p(p({}, t3), {}, { color: e5.plugins.annotation.toolDefaults[dt.SQUIGGLY].color });
    } }, viewCtrButton: { type: "iconButton", id: "viewCtrButton", props: { commandId: "viewCtr", active: false, label: "View settings" }, mapStateToProps: function(e5, t3) {
      return p(p({}, t3), {}, { active: ro(pc.viewCtr, e5) });
    } }, commentButton: { type: "iconButton", id: "commentButton", props: { active: false, commandId: "comment", label: "Comment" }, mapStateToProps: function(e5, t3) {
      return p(p({}, t3), {}, { active: ro(pc.comment, e5) });
    } }, searchButton: { type: "iconButton", id: "searchButton", props: { active: false, commandId: "search", label: "Search" }, mapStateToProps: function(e5, t3) {
      return p(p({}, t3), {}, { active: ro(pc.search, e5) });
    } }, filePickerButton: { type: "iconButton", id: "filePickerButton", props: { label: "Open File", img: "data:image/svg+xml;base64,PHN2ZyAgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiAgd2lkdGg9IjI0IiAgaGVpZ2h0PSIyNCIgIHZpZXdCb3g9IjAgMCAyNCAyNCIgIGZpbGw9Im5vbmUiICBzdHJva2U9IiMzNDNhNDAiICBzdHJva2Utd2lkdGg9IjIiICBzdHJva2UtbGluZWNhcD0icm91bmQiICBzdHJva2UtbGluZWpvaW49InJvdW5kIiAgY2xhc3M9Imljb24gaWNvbi10YWJsZXIgaWNvbi10YWJsZXItb3V0bGluZSBpY29uLXRhYmxlci1maWxlLWltcG9ydCI+PHBhdGggc3Ryb2tlPSJub25lIiBkPSJNIDAgMGgyNHYyNEgweiIgZmlsbD0ibm9uZSIvPjxwYXRoIGQ9Ik0xNCAzdjRhMSAxIDAgMCAwIDEgMWg0IiAvPjxwYXRoIGQ9Ik01IDEzdi04YTIgMiAwIDAgMSAyIC0yaDdsNSA1djExYTIgMiAwIDAgMSAtMiAyaC01LjVtLTkuNSAtMmg3bS0zIC0zbDMgM2wtMyAzIiAvPjwvc3ZnPg==" } }, downloadButton: { type: "iconButton", id: "downloadButton", props: { label: "Download", img: "data:image/svg+xml;base64,PHN2ZyAgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiAgd2lkdGg9IjI0IiAgaGVpZ2h0PSIyNCIgIHZpZXdCb3g9IjAgMCAyNCAyNCIgIGZpbGw9Im5vbmUiICBzdHJva2U9IiMzNDNhNDAiICBzdHJva2Utd2lkdGg9IjIiICBzdHJva2UtbGluZWNhcD0icm91bmQiICBzdHJva2UtbGluZWpvaW49InJvdW5kIiAgY2xhc3M9Imljb24gaWNvbi10YWJsZXIgaWNvbnMtdGFibGVyLW91dGxpbmUgaWNvbi10YWJsZXItZG93bmxvYWQiPjxwYXRoIHN0cm9rZT0ibm9uZSIgZD0iTTAgMGgyNHYyNEgweiIgZmlsbD0ibm9uZSIvPjxwYXRoIGQ9Ik00IDE3djJhMiAyIDAgMCAwIDIgMmgxMmEyIDIgMCAwIDAgMiAtMnYtMiIgLz48cGF0aCBkPSJNNyAxMWw1IDVsNSAtNSIgLz48cGF0aCBkPSJNMTIgNGwwIDEyIiAvPjwvc3ZnPg==" } }, zoomButton: { type: "iconButton", id: "zoomButton", props: { commandId: "zoom", label: "Zoom", img: "data:image/svg+xml;base64,PHN2ZyAgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiAgd2lkdGg9IjI0IiAgaGVpZ2h0PSIyNCIgIHZpZXdCb3g9IjAgMCAyNCAyNCIgIGZpbGw9Im5vbmUiICBzdHJva2U9IiMzNDNhNDAiICBzdHJva2Utd2lkdGg9IjIiICBzdHJva2UtbGluZWNhcD0icm91bmQiICBzdHJva2UtbGluZWpvaW49InJvdW5kIiAgY2xhc3M9Imljb24gaWNvbi10YWJsZXIgaWNvbnMtdGFibGVyLW91dGxpbmUgaWNvbi10YWJsZXItY2lyY2xlLXBsdXMiPjxwYXRoIHN0cm9rZT0ibm9uZSIgZD0iTTAgMGgyNHYyNEgweiIgZmlsbD0ibm9uZSIvPjxwYXRoIGQ9Ik0zIDEyYTkgOSAwIDEgMCAxOCAwYTkgOSAwIDAgMCAtMTggMCIgLz48cGF0aCBkPSJNOSAxMmg2IiAvPjxwYXRoIGQ9Ik0xMiA5djYiIC8+PC9zdmc+" }, mapStateToProps: function(e5, t3) {
      return p(p({}, t3), {}, { active: ro(pc.zoom, e5) || ro(pc.changeZoomLevel, e5) });
    } }, sidebarButton: { type: "iconButton", id: "sidebarButton", props: { commandId: "sidebar", label: "Sidebar", active: false }, mapStateToProps: function(e5, t3) {
      return p(p({}, t3), {}, { active: ro(pc.sidebar, e5) });
    } }, divider1: { type: "divider", id: "divider1" }, expandLeftActionsButton: { type: "iconButton", id: "expandLeftActionsButton", props: { commandId: "leftAction", label: "Left Panel Actions" }, mapStateToProps: function(e5, t3) {
      return p(p({}, t3), {}, { active: ro(pc.leftAction, e5) });
    } }, headerStart: { id: "headerStart", type: "groupedItems", slots: [{ componentId: "menuButton", priority: 0 }, { componentId: "divider1", priority: 1, className: "flex" }, { componentId: "sidebarButton", priority: 2 }, { componentId: "expandLeftActionsButton", priority: 3, className: "@min-[400px]:hidden" }, { componentId: "viewCtrButton", priority: 4, className: "hidden @min-[400px]:block" }, { componentId: "divider1", priority: 6, className: "hidden @min-[400px]:flex" }, { componentId: "zoomButton", priority: 7, className: "hidden @min-[400px]:block @min-[600px]:hidden" }, { componentId: "zoom", priority: 8, className: "hidden @min-[600px]:block" }, { componentId: "divider1", priority: 9, className: "hidden @min-[600px]:flex" }, { componentId: "panModeButton", priority: 10, className: "hidden @min-[600px]:block" }], props: { gap: 10 } }, viewTab: { type: "tabButton", id: "viewTab", props: { label: "View", commandId: "view", active: false }, mapStateToProps: function(e5, t3) {
      return p(p({}, t3), {}, { active: ro(pc.view, e5) });
    } }, annotateTab: { type: "tabButton", id: "annotateTab", props: { label: "Annotate", commandId: "annotate", active: false }, mapStateToProps: function(e5, t3) {
      return p(p({}, t3), {}, { active: ro(pc.annotate, e5) });
    } }, shapesTab: { type: "tabButton", id: "shapesTab", props: { label: "Shapes", commandId: "shapes", active: false }, mapStateToProps: function(e5, t3) {
      return p(p({}, t3), {}, { active: ro(pc.shapes, e5) });
    } }, fillAndSignTab: { type: "tabButton", id: "fillAndSignTab", props: { label: "Fill and Sign", commandId: "fillAndSign", active: false }, mapStateToProps: function(e5, t3) {
      return p(p({}, t3), {}, { active: ro(pc.fillAndSign, e5) });
    } }, formTab: { type: "tabButton", id: "formTab", props: { label: "Form", commandId: "form", active: false }, mapStateToProps: function(e5, t3) {
      return p(p({}, t3), {}, { active: ro(pc.form, e5) });
    } }, tabOverflowButton: { type: "iconButton", id: "tabOverflowButton", props: { label: "More", commandId: "tabOverflow", active: false }, mapStateToProps: function(e5, t3) {
      return p(p({}, t3), {}, { active: ro(pc.tabOverflow, e5) });
    } }, selectButton: { type: "selectButton", id: "selectButton", props: { menuCommandId: "tabOverflow", commandIds: ["view", "annotate"], activeCommandId: "view", active: false }, mapStateToProps: function(e5, t3) {
      var n3;
      return p(p({}, t3), {}, { activeCommandId: null !== (n3 = t3.commandIds.find(function(t4) {
        return ro(pc[t4], e5);
      })) && void 0 !== n3 ? n3 : t3.commandIds[0], active: ro(pc.tabOverflow, e5) });
    } }, headerCenter: { id: "headerCenter", type: "groupedItems", slots: [{ componentId: "selectButton", priority: 0, className: "block @min-[500px]:hidden" }, { componentId: "viewTab", priority: 1, className: "hidden @min-[500px]:block" }, { componentId: "annotateTab", priority: 2, className: "hidden @min-[500px]:block" }], props: { gap: 10 } }, headerEnd: { id: "headerEnd", type: "groupedItems", slots: [{ componentId: "searchButton", priority: 1 }], props: { gap: 10 } }, pageControls: { id: "pageControls", type: "custom", render: "pageControls", initialState: { currentPage: 1, pageCount: 1 }, props: function(e5) {
      return { currentPage: e5.currentPage, pageCount: e5.pageCount, nextPageCommandId: "nextPage", previousPageCommandId: "previousPage" };
    }, mapStateToProps: function(e5, t3) {
      var n3, o3;
      return p(p({}, t3), {}, { currentPage: e5.plugins.scroll.currentPage, pageCount: null !== (n3 = null === (o3 = e5.core.document) || void 0 === o3 ? void 0 : o3.pageCount) && void 0 !== n3 ? n3 : 1 });
    } }, pageControlsContainer: { id: "pageControlsContainer", type: "floating", props: { scrollerPosition: "outside" }, render: "pageControlsContainer", slots: [{ componentId: "pageControls", priority: 0 }] }, textSelectionMenuButtons: { id: "textSelectionMenuButtons", type: "groupedItems", slots: [{ componentId: "copyButton", priority: 0 }, { componentId: "highlightSelectionButton", priority: 1 }, { componentId: "underlineSelectionButton", priority: 2 }, { componentId: "strikethroughSelectionButton", priority: 3 }, { componentId: "squigglySelectionButton", priority: 4 }], props: { gap: 10 } }, printModal: { id: "printModal", type: "floating", render: "printModal", initialState: { open: false }, props: function(e5) {
      return { open: e5.open, scrollerPosition: "outside" };
    }, mapStateToProps: function(e5, t3) {
      return p(p({}, t3), {}, { open: e5.plugins.ui.floating.printModal.open });
    } }, textSelectionMenu: { id: "textSelectionMenu", type: "floating", render: "textSelectionMenu", props: { open: false, scrollerPosition: "inside" }, mapStateToProps: function(e5, t3) {
      return p(p({}, t3), {}, { isScolling: e5.plugins.viewport.isScrolling, scale: e5.core.scale, rotation: e5.core.rotation, spread: e5.plugins[Dn].spreadMode, open: e5.plugins[aa].active && !e5.plugins[aa].selecting });
    }, slots: [{ componentId: "textSelectionMenuButtons", priority: 0 }], getChildContext: { direction: "horizontal" } }, annotationSelectionMenuButtons: { id: "annotationSelectionMenuButtons", type: "groupedItems", slots: [{ componentId: "deleteAnnotationButton", priority: 0 }, { componentId: "styleButton", priority: 1 }], props: { gap: 10 } }, annotationSelectionMenu: { id: "annotationSelectionMenu", type: "floating", render: "annotationSelectionMenu", props: { open: false, scrollerPosition: "inside" }, mapStateToProps: function(e5, t3) {
      return p(p({}, t3), {}, { isScolling: e5.plugins.viewport.isScrolling, scale: e5.core.scale, rotation: e5.core.rotation, selectedUid: e5.plugins[ts].selectedUid, open: null !== e5.plugins[ts].selectedUid });
    }, slots: [{ componentId: "annotationSelectionMenuButtons", priority: 0 }], getChildContext: { direction: "horizontal" } }, topHeader: { type: "header", id: "topHeader", slots: [{ componentId: "headerStart", priority: 0 }, { componentId: "headerCenter", priority: 1 }, { componentId: "headerEnd", priority: 2 }], getChildContext: function(e5) {
      return { direction: "top" === e5.placement || "bottom" === e5.placement ? "horizontal" : "vertical" };
    }, props: { placement: "top", style: { backgroundColor: "#ffffff", gap: "10px" } } }, annotationTools: { id: "annotationTools", type: "groupedItems", slots: [{ componentId: "highlightButton", priority: 1 }, { componentId: "underlineButton", priority: 2 }, { componentId: "strikethroughButton", priority: 3 }, { componentId: "squigglyButton", priority: 4 }, { componentId: "freehandButton", priority: 5 }, { componentId: "divider1", priority: 6 }, { componentId: "styleButton", priority: 7 }, { componentId: "divider1", priority: 8 }, { componentId: "undoButton", priority: 9 }, { componentId: "redoButton", priority: 10 }], props: { gap: 10 } }, toolsHeader: { type: "header", id: "toolsHeader", initialState: { visible: false, visibleChild: null }, props: function(e5) {
      return { placement: "top", visible: e5.visible, visibleChild: e5.visibleChild, style: { backgroundColor: "#f1f3f5", justifyContent: "center" } };
    }, mapStateToProps: function(e5, t3) {
      return p(p({}, t3), {}, { visible: e5.plugins.ui.header.toolsHeader.visible, visibleChild: e5.plugins.ui.header.toolsHeader.visibleChild });
    }, slots: [{ componentId: "annotationTools", priority: 0 }], getChildContext: function(e5) {
      return { direction: "top" === e5.placement || "bottom" === e5.placement ? "horizontal" : "vertical" };
    } }, leftPanelAnnotationStyle: { id: "leftPanelAnnotationStyle", type: "custom", render: "leftPanelAnnotationStyle", mapStateToProps: function(e5, t3) {
      return p(p({}, t3), {}, { selectedAnnotation: _s(e5.plugins[ts]), annotationMode: e5.plugins[ts].annotationMode, colorPresets: e5.plugins[ts].colorPresets, toolDefaults: e5.plugins[ts].toolDefaults });
    } }, leftPanelMain: { id: "leftPanelMain", type: "custom", render: "leftPanelMain", initialState: { visibleChild: "thumbnails" }, props: function(e5) {
      return { visibleChild: e5.visibleChild, tabsCommandId: "sidebarMenu" };
    }, mapStateToProps: function(e5, t3) {
      return p(p({}, t3), {}, { visibleChild: e5.plugins.ui.custom.leftPanelMain.visibleChild });
    }, slots: [{ componentId: "thumbnails", priority: 0 }, { componentId: "outline", priority: 1 }, { componentId: "attachments", priority: 2 }] }, leftPanel: { id: "leftPanel", type: "panel", initialState: { open: false, visibleChild: "leftPanelMain" }, props: function(e5) {
      return { open: e5.open, visibleChild: e5.visibleChild, location: "left" };
    }, mapStateToProps: function(e5, t3) {
      return p(p({}, t3), {}, { open: e5.plugins.ui.panel.leftPanel.open, visibleChild: e5.plugins.ui.panel.leftPanel.visibleChild });
    }, slots: [{ componentId: "leftPanelMain", priority: 0 }, { componentId: "leftPanelAnnotationStyle", priority: 1 }] }, thumbnails: { id: "thumbnails", type: "custom", render: "thumbnails", mapStateToProps: function(e5, t3) {
      return p(p({}, t3), {}, { currentPage: e5.plugins.scroll.currentPage });
    } }, outline: { id: "outline", type: "custom", render: "outline", props: { document: null }, mapStateToProps: function(e5, t3) {
      return p(p({}, t3), {}, { document: e5.core.document });
    } }, attachments: { id: "attachments", type: "custom", render: "attachments" }, search: { id: "search", type: "custom", render: "search", mapStateToProps: function(e5, t3) {
      return p(p({}, t3), {}, { flags: e5.plugins.search.flags, results: e5.plugins.search.results, total: e5.plugins.search.total, activeResultIndex: e5.plugins.search.activeResultIndex, active: e5.plugins.search.active, query: e5.plugins.search.query, loading: e5.plugins.search.loading });
    } }, comment: { id: "comment", type: "custom", render: "comment" }, commandMenu: { id: "commandMenu", type: "commandMenu", initialState: { open: false, activeCommand: null, triggerElement: void 0, position: void 0, flatten: false }, props: function(e5) {
      return { open: e5.open, activeCommand: e5.activeCommand, triggerElement: e5.triggerElement, position: e5.position, flatten: e5.flatten };
    }, mapStateToProps: function(e5, t3) {
      return p(p({}, t3), {}, { open: e5.plugins.ui.commandMenu.commandMenu.open, activeCommand: e5.plugins.ui.commandMenu.commandMenu.activeCommand, triggerElement: e5.plugins.ui.commandMenu.commandMenu.triggerElement, position: e5.plugins.ui.commandMenu.commandMenu.position, flatten: e5.plugins.ui.commandMenu.commandMenu.flatten });
    } }, zoom: { id: "zoom", type: "custom", render: "zoom", initialState: { zoomLevel: 1 }, props: function(e5) {
      return { zoomLevel: e5.zoomLevel, commandZoomIn: pc.zoomIn.id, commandZoomOut: pc.zoomOut.id, commandZoomMenu: pc.zoom.id, zoomMenuActive: false };
    }, mapStateToProps: function(e5, t3) {
      return p(p({}, t3), {}, { zoomLevel: e5.plugins.zoom.currentZoomLevel, zoomMenuActive: ro(pc.zoom, e5) || ro(pc.changeZoomLevel, e5) });
    } }, rightPanel: { id: "rightPanel", type: "panel", initialState: { open: false, visibleChild: null }, props: function(e5) {
      return { open: e5.open, visibleChild: e5.visibleChild, location: "right" };
    }, mapStateToProps: function(e5, t3) {
      return p(p({}, t3), {}, { open: e5.plugins.ui.panel.rightPanel.open, visibleChild: e5.plugins.ui.panel.rightPanel.visibleChild });
    }, slots: [{ componentId: "search", priority: 0 }, { componentId: "comment", priority: 1 }] } };
    mc = { enabled: true, components: gc, menuItems: pc, icons: { menu: { id: "menu", svg: '<svg  xmlns="http://www.w3.org/2000/svg"  width="100%"  height="100%"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  stroke-width="2"  stroke-linecap="round"  stroke-linejoin="round"  class="icon icon-tabler icons-tabler-outline icon-tabler-menu"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M4 8l16 0" /><path d="M4 16l16 0" /></svg>' }, download: { id: "download", svg: '<svg  xmlns="http://www.w3.org/2000/svg"  width="100%"  height="100%"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  stroke-width="2"  stroke-linecap="round"  stroke-linejoin="round"  class="icon icon-tabler icons-tabler-outline icon-tabler-download"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M4 17v2a2 2 0 0 0 2 2h12a2 2 0 0 0 2 -2v-2" /><path d="M7 11l5 5l5 -5" /><path d="M12 4l0 12" /></svg>' }, fullscreen: { id: "fullscreen", svg: '<svg  xmlns="http://www.w3.org/2000/svg"  width="100%"  height="100%"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  stroke-width="2"  stroke-linecap="round"  stroke-linejoin="round"  class="icon icon-tabler icons-tabler-outline icon-tabler-maximize"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M4 8v-2a2 2 0 0 1 2 -2h2" /><path d="M4 16v2a2 2 0 0 0 2 2h2" /><path d="M16 4h2a2 2 0 0 1 2 2v2" /><path d="M16 20h2a2 2 0 0 0 2 -2v-2" /></svg>' }, fullscreenExit: { id: "fullscreenExit", svg: '<svg  xmlns="http://www.w3.org/2000/svg"  width="100%"  height="100%"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  stroke-width="2"  stroke-linecap="round"  stroke-linejoin="round"  class="icon icon-tabler icons-tabler-outline icon-tabler-maximize-off"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M4 8v-2c0 -.551 .223 -1.05 .584 -1.412" /><path d="M4 16v2a2 2 0 0 0 2 2h2" /><path d="M16 4h2a2 2 0 0 1 2 2v2" /><path d="M16 20h2c.545 0 1.04 -.218 1.4 -.572" /><path d="M3 3l18 18" /></svg>' }, save: { id: "save", svg: '<svg  xmlns="http://www.w3.org/2000/svg"  width="100%"  height="100%"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  stroke-width="2"  stroke-linecap="round"  stroke-linejoin="round"  class="icon icon-tabler icons-tabler-outline icon-tabler-device-floppy"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M6 4h10l4 4v10a2 2 0 0 1 -2 2h-12a2 2 0 0 1 -2 -2v-12a2 2 0 0 1 2 -2" /><path d="M12 14m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" /><path d="M14 4l0 4l-6 0l0 -4" /></svg>' }, print: { id: "print", svg: '<svg  xmlns="http://www.w3.org/2000/svg"  width="100%"  height="100%"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  stroke-width="2"  stroke-linecap="round"  stroke-linejoin="round"  class="icon icon-tabler icons-tabler-outline icon-tabler-printer"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M17 17h2a2 2 0 0 0 2 -2v-4a2 2 0 0 0 -2 -2h-14a2 2 0 0 0 -2 2v4a2 2 0 0 0 2 2h2" /><path d="M17 9v-4a2 2 0 0 0 -2 -2h-6a2 2 0 0 0 -2 2v4" /><path d="M7 13m0 2a2 2 0 0 1 2 -2h6a2 2 0 0 1 2 2v4a2 2 0 0 1 -2 2h-6a2 2 0 0 1 -2 -2z" /></svg>' }, settings: { id: "settings", svg: '<svg  xmlns="http://www.w3.org/2000/svg"  width="100%"  height="100%"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  stroke-width="2"  stroke-linecap="round"  stroke-linejoin="round"  class="icon icon-tabler icons-tabler-outline icon-tabler-settings"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M10.325 4.317c.426 -1.756 2.924 -1.756 3.35 0a1.724 1.724 0 0 0 2.573 1.066c1.543 -.94 3.31 .826 2.37 2.37a1.724 1.724 0 0 0 1.065 2.572c1.756 .426 1.756 2.924 0 3.35a1.724 1.724 0 0 0 -1.066 2.573c.94 1.543 -.826 3.31 -2.37 2.37a1.724 1.724 0 0 0 -2.572 1.065c-.426 1.756 -2.924 1.756 -3.35 0a1.724 1.724 0 0 0 -2.573 -1.066c-1.543 .94 -3.31 -.826 -2.37 -2.37a1.724 1.724 0 0 0 -1.065 -2.572c-1.756 -.426 -1.756 -2.924 0 -3.35a1.724 1.724 0 0 0 1.066 -2.573c-.94 -1.543 .826 -3.31 2.37 -2.37c1 .608 2.296 .07 2.572 -1.065z" /><path d="M9 12a3 3 0 1 0 6 0a3 3 0 0 0 -6 0" /></svg>' }, viewSettings: { id: "viewSettings", svg: '<svg  xmlns="http://www.w3.org/2000/svg"  width="100%"  height="100%"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  stroke-width="2"  stroke-linecap="round"  stroke-linejoin="round"  class="icon icon-tabler icons-tabler-outline icon-tabler-file-settings"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M12 14m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" /><path d="M12 10.5v1.5" /><path d="M12 16v1.5" /><path d="M15.031 12.25l-1.299 .75" /><path d="M10.268 15l-1.3 .75" /><path d="M15 15.803l-1.285 -.773" /><path d="M10.285 12.97l-1.285 -.773" /><path d="M14 3v4a1 1 0 0 0 1 1h4" /><path d="M17 21h-10a2 2 0 0 1 -2 -2v-14a2 2 0 0 1 2 -2h7l5 5v11a2 2 0 0 1 -2 2z" /></svg>' }, rotateClockwise: { id: "rotateClockwise", svg: '<svg  xmlns="http://www.w3.org/2000/svg"  width="100%"  height="100%"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  stroke-width="2"  stroke-linecap="round"  stroke-linejoin="round"  class="icon icon-tabler icons-tabler-outline icon-tabler-rotate-clockwise"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M4.05 11a8 8 0 1 1 .5 4m-.5 5v-5h5" /></svg>' }, rotateCounterClockwise: { id: "rotateCounterClockwise", svg: '<svg  xmlns="http://www.w3.org/2000/svg"  width="100%"  height="100%"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  stroke-width="2"  stroke-linecap="round"  stroke-linejoin="round"  class="icon icon-tabler icons-tabler-outline icon-tabler-rotate"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M19.95 11a8 8 0 1 0 -.5 4m.5 5v-5h-5" /></svg>' }, singlePage: { id: "singlePage", svg: '<svg  xmlns="http://www.w3.org/2000/svg"  width="100%"  height="100%"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  stroke-width="2"  stroke-linecap="round"  stroke-linejoin="round"  class="icon icon-tabler icons-tabler-outline icon-tabler-columns-1"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M5 3m0 1a1 1 0 0 1 1 -1h12a1 1 0 0 1 1 1v16a1 1 0 0 1 -1 1h-12a1 1 0 0 1 -1 -1z" /></svg>' }, doublePage: { id: "doublePage", svg: '<svg  xmlns="http://www.w3.org/2000/svg"  width="100%"  height="100%"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  stroke-width="2"  stroke-linecap="round"  stroke-linejoin="round"  class="icon icon-tabler icons-tabler-outline icon-tabler-columns-2"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M3 3m0 1a1 1 0 0 1 1 -1h16a1 1 0 0 1 1 1v16a1 1 0 0 1 -1 1h-16a1 1 0 0 1 -1 -1zm9 -1v18" /></svg>' }, zoomIn: { id: "zoomIn", svg: '<svg  xmlns="http://www.w3.org/2000/svg"  width="100%"  height="100%"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  stroke-width="2"  stroke-linecap="round"  stroke-linejoin="round"  class="icon icon-tabler icons-tabler-outline icon-tabler-circle-plus"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M3 12a9 9 0 1 0 18 0a9 9 0 0 0 -18 0" /><path d="M9 12h6" /><path d="M12 9v6" /></svg>' }, zoomOut: { id: "zoomOut", svg: '<svg  xmlns="http://www.w3.org/2000/svg"  width="100%"  height="100%"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  stroke-width="2"  stroke-linecap="round"  stroke-linejoin="round"  class="icon icon-tabler icons-tabler-outline icon-tabler-circle-minus"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M12 12m-9 0a9 9 0 1 0 18 0a9 9 0 1 0 -18 0" /><path d="M9 12l6 0" /></svg>' }, fitToWidth: { id: "fitToWidth", svg: '<svg  xmlns="http://www.w3.org/2000/svg"  width="100%"  height="100%"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  stroke-width="2"  stroke-linecap="round"  stroke-linejoin="round"  class="icon icon-tabler icons-tabler-outline icon-tabler-arrow-autofit-width"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M4 12v-6a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2v6" /><path d="M10 18h-7" /><path d="M21 18h-7" /><path d="M6 15l-3 3l3 3" /><path d="M18 15l3 3l-3 3" /></svg>' }, fitToPage: { id: "fitToPage", svg: '<svg  xmlns="http://www.w3.org/2000/svg"  width="100%"  height="100%"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  stroke-width="2"  stroke-linecap="round"  stroke-linejoin="round"  class="icon icon-tabler icons-tabler-outline icon-tabler-arrow-autofit-height"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M12 20h-6a2 2 0 0 1 -2 -2v-12a2 2 0 0 1 2 -2h6" /><path d="M18 14v7" /><path d="M18 3v7" /><path d="M15 18l3 3l3 -3" /><path d="M15 6l3 -3l3 3" /></svg>' }, chevronRight: { id: "chevronRight", svg: '<svg  xmlns="http://www.w3.org/2000/svg"  width="100%"  height="100%"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  stroke-width="2"  stroke-linecap="round"  stroke-linejoin="round"  class="icon icon-tabler icons-tabler-outline icon-tabler-chevron-right"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M9 6l6 6l-6 6" /></svg>' }, chevronLeft: { id: "chevronLeft", svg: '<svg  xmlns="http://www.w3.org/2000/svg"  width="100%"  height="100%"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  stroke-width="2"  stroke-linecap="round"  stroke-linejoin="round"  class="icon icon-tabler icons-tabler-outline icon-tabler-chevron-left"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M15 6l-6 6l6 6" /></svg>' }, chevronDown: { id: "chevronDown", svg: '<svg  xmlns="http://www.w3.org/2000/svg"  width="100%"  height="100%"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  stroke-width="2"  stroke-linecap="round"  stroke-linejoin="round"  class="icon icon-tabler icons-tabler-outline icon-tabler-chevron-down"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M6 9l6 6l6 -6" /></svg>' }, search: { id: "search", svg: '<svg  xmlns="http://www.w3.org/2000/svg"  width="100%"  height="100%"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  stroke-width="2"  stroke-linecap="round"  stroke-linejoin="round"  class="icon icon-tabler icons-tabler-outline icon-tabler-search"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M10 10m-7 0a7 7 0 1 0 14 0a7 7 0 1 0 -14 0" /><path d="M21 21l-6 -6" /></svg>' }, comment: { id: "comment", svg: '<svg  xmlns="http://www.w3.org/2000/svg"  width="100%"  height="100%"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  stroke-width="2"  stroke-linecap="round"  stroke-linejoin="round"  class="icon icon-tabler icons-tabler-outline icon-tabler-message-dots"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M12 11v.01" /><path d="M8 11v.01" /><path d="M16 11v.01" /><path d="M18 4a3 3 0 0 1 3 3v8a3 3 0 0 1 -3 3h-5l-5 3v-3h-2a3 3 0 0 1 -3 -3v-8a3 3 0 0 1 3 -3z" /></svg>' }, sidebar: { id: "sidebar", svg: '<svg  xmlns="http://www.w3.org/2000/svg"  width="100%"  height="100%"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  stroke-width="2"  stroke-linecap="round"  stroke-linejoin="round"  class="icon icon-tabler icons-tabler-outline icon-tabler-sidebar-left"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M4 18v-12a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2v12a2 2 0 0 1 -2 2h-12a2 2 0 0 1 -2 -2z" /><path d="M14 18v-12a2 2 0 0 0 -2 -2h-6a2 2 0 0 0 -2 2v12a2 2 0 0 0 2 2h6a2 2 0 0 0 2 -2z" /></svg>' }, dots: { id: "dots", svg: '<svg  xmlns="http://www.w3.org/2000/svg"  width="100%"  height="100%"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  stroke-width="2"  stroke-linecap="round"  stroke-linejoin="round"  class="icon icon-tabler icons-tabler-outline icon-tabler-dots"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M5 12m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0" /><path d="M12 12m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0" /><path d="M19 12m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0" /></svg>' }, vertical: { id: "vertical", svg: '<svg  xmlns="http://www.w3.org/2000/svg"  width="100%"  height="100%"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  stroke-width="2"  stroke-linecap="round"  stroke-linejoin="round"  class="icon icon-tabler icons-tabler-outline icon-tabler-arrows-vertical"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M8 7l4 -4l4 4" /><path d="M8 17l4 4l4 -4" /><path d="M12 3l0 18" /></svg>' }, horizontal: { id: "horizontal", svg: '<svg  xmlns="http://www.w3.org/2000/svg"  width="100%"  height="100%"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  stroke-width="2"  stroke-linecap="round"  stroke-linejoin="round"  class="icon icon-tabler icons-tabler-outline icon-tabler-arrows-horizontal"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M7 8l-4 4l4 4" /><path d="M17 8l4 4l-4 4" /><path d="M3 12l18 0" /></svg>' }, book: { id: "book", svg: '<svg  xmlns="http://www.w3.org/2000/svg"  width="100%"  height="100%"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  stroke-width="2"  stroke-linecap="round"  stroke-linejoin="round"  class="icon icon-tabler icons-tabler-outline icon-tabler-book"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M3 19a9 9 0 0 1 9 0a9 9 0 0 1 9 0" /><path d="M3 6a9 9 0 0 1 9 0a9 9 0 0 1 9 0" /><path d="M3 6l0 13" /><path d="M12 6l0 13" /><path d="M21 6l0 13" /></svg>' }, book2: { id: "book2", svg: '<svg  xmlns="http://www.w3.org/2000/svg"  width="100%"  height="100%"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  stroke-width="2"  stroke-linecap="round"  stroke-linejoin="round"  class="icon icon-tabler icons-tabler-outline icon-tabler-book-2"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M19 4v16h-12a2 2 0 0 1 -2 -2v-12a2 2 0 0 1 2 -2h12z" /><path d="M19 16h-12a2 2 0 0 0 -2 2" /><path d="M9 8h6" /></svg>' }, squares: { id: "squares", svg: '<svg  xmlns="http://www.w3.org/2000/svg"  width="100%"  height="100%"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  stroke-width="2"  stroke-linecap="round"  stroke-linejoin="round"  class="icon icon-tabler icons-tabler-outline icon-tabler-squares"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M8 10a2 2 0 0 1 2 -2h9a2 2 0 0 1 2 2v9a2 2 0 0 1 -2 2h-9a2 2 0 0 1 -2 -2z" /><path d="M16 8v-3a2 2 0 0 0 -2 -2h-9a2 2 0 0 0 -2 2v9a2 2 0 0 0 2 2h3" /></svg>' }, listTree: { id: "listTree", svg: '<svg  xmlns="http://www.w3.org/2000/svg"  width="100%"  height="100%"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  stroke-width="2"  stroke-linecap="round"  stroke-linejoin="round"  class="icon icon-tabler icons-tabler-outline icon-tabler-list-tree"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M9 6h11" /><path d="M12 12h8" /><path d="M15 18h5" /><path d="M5 6v.01" /><path d="M8 12v.01" /><path d="M11 18v.01" /></svg>' }, paperclip: { id: "paperclip", svg: '<svg  xmlns="http://www.w3.org/2000/svg"  width="100%"  height="100%"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  stroke-width="2"  stroke-linecap="round"  stroke-linejoin="round"  class="icon icon-tabler icons-tabler-outline icon-tabler-paperclip"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M15 7l-6.5 6.5a1.5 1.5 0 0 0 3 3l6.5 -6.5a3 3 0 0 0 -6 -6l-6.5 6.5a4.5 4.5 0 0 0 9 9l6.5 -6.5" /></svg>' }, copy: { id: "copy", svg: '<svg  xmlns="http://www.w3.org/2000/svg"  width="100%"  height="100%"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  stroke-width="2"  stroke-linecap="round"  stroke-linejoin="round"  class="icon icon-tabler icons-tabler-outline icon-tabler-copy"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M7 7m0 2.667a2.667 2.667 0 0 1 2.667 -2.667h8.666a2.667 2.667 0 0 1 2.667 2.667v8.666a2.667 2.667 0 0 1 -2.667 2.667h-8.666a2.667 2.667 0 0 1 -2.667 -2.667z" /><path d="M4.012 16.737a2.005 2.005 0 0 1 -1.012 -1.737v-10c0 -1.1 .9 -2 2 -2h10c.75 0 1.158 .385 1.5 1" /></svg>' }, underline: { id: "underline", svg: '<svg xmlns="http://www.w3.org/2000/svg" width="100%"  height="100%" viewBox="0 0 24 24" fill="none" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="icon icon-tabler icons-tabler-outline icon-tabler-baseline"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M4 20h16" stroke="currentColor" /><path d="M8 16v-8a4 4 0 1 1 8 0v8" stroke="#000000" /><path d="M8 10h8" stroke="#000000" /></svg>' }, squiggly: { id: "squiggly", svg: '<svg xmlns="http://www.w3.org/2000/svg" width="100%"  height="100%" viewBox="0 0 24 24" fill="none" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="icon icon-tabler icons-tabler-outline icon-tabler-baseline-wavy"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M8 16v-8a4 4 0 1 1 8 0v8" stroke="#000000" /><path d="M8 10h8" stroke="#000000" /><path d="M4 20c1.5 -1.5 3.5 -1.5 5 0s3.5 1.5 5 0 3.5 -1.5 5 0" stroke="currentColor" /></svg>' }, strikethrough: { id: "strikethrough", svg: '<svg xmlns="http://www.w3.org/2000/svg" width="100%"  height="100%" viewBox="0 0 24 24" fill="none" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="icon icon-tabler icons-tabler-outline icon-tabler-baseline"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M8 16v-8a4 4 0 1 1 8 0v8" stroke="#000000" /><path d="M4 10h16" stroke="currentColor" /></svg>' }, highlight: { id: "highlight", svg: '<svg xmlns="http://www.w3.org/2000/svg" width="100%"  height="100%" viewBox="0 0 24 24" fill="none" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="icon icon-tabler icons-tabler-outline icon-tabler-baseline-highlight"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><rect x="2" y="6" width="20" height="16" rx="2" fill="currentColor" stroke="none" /><path d="M8 16v-8a4 4 0 1 1 8 0v8" stroke="#000000"/><path d="M8 10h8" stroke="#000000"/></svg>' }, palette: { id: "palette", svg: '<svg  xmlns="http://www.w3.org/2000/svg"  width="100%"  height="100%"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  stroke-width="2"  stroke-linecap="round"  stroke-linejoin="round"  class="icon icon-tabler icons-tabler-outline icon-tabler-palette"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M12 21a9 9 0 0 1 0 -18c4.97 0 9 3.582 9 8c0 1.06 -.474 2.078 -1.318 2.828c-.844 .75 -1.989 1.172 -3.182 1.172h-2.5a2 2 0 0 0 -1 3.75a1.3 1.3 0 0 1 -1 2.25" /><path d="M8.5 10.5m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0" /><path d="M12.5 7.5m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0" /><path d="M16.5 10.5m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0" /></svg>' }, x: { id: "x", svg: '<svg  xmlns="http://www.w3.org/2000/svg"  width="100%"  height="100%"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  stroke-width="2"  stroke-linecap="round"  stroke-linejoin="round"  class="icon icon-tabler icons-tabler-outline icon-tabler-x"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M18 6l-12 12" /><path d="M6 6l12 12" /></svg>' }, fileImport: { id: "fileImport", svg: '<svg  xmlns="http://www.w3.org/2000/svg"  width="100%"  height="100%"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  stroke-width="2"  stroke-linecap="round"  stroke-linejoin="round"  class="icon icon-tabler icons-tabler-outline icon-tabler-file-import"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M14 3v4a1 1 0 0 0 1 1h4" /><path d="M5 13v-8a2 2 0 0 1 2 -2h7l5 5v11a2 2 0 0 1 -2 2h-5.5m-9.5 -2h7m-3 -3l3 3l-3 3" /></svg>' }, hand: { id: "hand", svg: '<svg  xmlns="http://www.w3.org/2000/svg"  width="100%"  height="100%"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  stroke-width="2"  stroke-linecap="round"  stroke-linejoin="round"  class="icon icon-tabler icons-tabler-outline icon-tabler-hand-stop"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M8 13v-7.5a1.5 1.5 0 0 1 3 0v6.5" /><path d="M11 5.5v-2a1.5 1.5 0 1 1 3 0v8.5" /><path d="M14 5.5a1.5 1.5 0 0 1 3 0v6.5" /><path d="M17 7.5a1.5 1.5 0 0 1 3 0v8.5a6 6 0 0 1 -6 6h-2h.208a6 6 0 0 1 -5.012 -2.7a69.74 69.74 0 0 1 -.196 -.3c-.312 -.479 -1.407 -2.388 -3.286 -5.728a1.5 1.5 0 0 1 .536 -2.022a1.867 1.867 0 0 1 2.28 .28l1.47 1.47" /></svg>' }, zoomInArea: { id: "zoomInArea", svg: '<svg  xmlns="http://www.w3.org/2000/svg"  width="100%"  height="100%"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  stroke-width="2"  stroke-linecap="round"  stroke-linejoin="round"  class="icon icon-tabler icons-tabler-outline icon-tabler-zoom-in-area"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M15 13v4" /><path d="M13 15h4" /><path d="M15 15m-5 0a5 5 0 1 0 10 0a5 5 0 1 0 -10 0" /><path d="M22 22l-3 -3" /><path d="M6 18h-1a2 2 0 0 1 -2 -2v-1" /><path d="M3 11v-1" /><path d="M3 6v-1a2 2 0 0 1 2 -2h1" /><path d="M10 3h1" /><path d="M15 3h1a2 2 0 0 1 2 2v1" /></svg>' }, screenshot: { id: "screenshot", svg: '<svg  xmlns="http://www.w3.org/2000/svg"  width="100%"  height="100%"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  stroke-width="2"  stroke-linecap="round"  stroke-linejoin="round"  class="icon icon-tabler icons-tabler-outline icon-tabler-screenshot"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M7 19a2 2 0 0 1 -2 -2" /><path d="M5 13v-2" /><path d="M5 7a2 2 0 0 1 2 -2" /><path d="M11 5h2" /><path d="M17 5a2 2 0 0 1 2 2" /><path d="M19 11v2" /><path d="M19 17v4" /><path d="M21 19h-4" /><path d="M13 19h-2" /></svg>' }, arrowBackUp: { id: "arrowBackUp", svg: '<svg  xmlns="http://www.w3.org/2000/svg"  width="100%"  height="100%"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  stroke-width="2"  stroke-linecap="round"  stroke-linejoin="round"  class="icon icon-tabler icons-tabler-outline icon-tabler-arrow-back-up"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M9 14l-4 -4l4 -4" /><path d="M5 10h11a4 4 0 1 1 0 8h-1" /></svg>' }, arrowForwardUp: { id: "arrowForwardUp", svg: '<svg  xmlns="http://www.w3.org/2000/svg"  width="100%"  height="100%"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  stroke-width="2"  stroke-linecap="round"  stroke-linejoin="round"  class="icon icon-tabler icons-tabler-outline icon-tabler-arrow-forward-up"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M15 14l4 -4l-4 -4" /><path d="M19 10h-11a4 4 0 1 0 0 8h1" /></svg>' }, trash: { id: "trash", svg: '<svg  xmlns="http://www.w3.org/2000/svg"  width="100%"  height="100%"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  stroke-width="2"  stroke-linecap="round"  stroke-linejoin="round"  class="icon icon-tabler icons-tabler-outline icon-tabler-trash"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M4 7l16 0" /><path d="M10 11l0 6" /><path d="M14 11l0 6" /><path d="M5 7l1 12a2 2 0 0 0 2 2h8a2 2 0 0 0 2 -2l1 -12" /><path d="M9 7v-3a1 1 0 0 1 1 -1h4a1 1 0 0 1 1 1v3" /></svg>' }, deviceFloppy: { id: "deviceFloppy", svg: '<svg  xmlns="http://www.w3.org/2000/svg"  width="100%"  height="100%"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  stroke-width="2"  stroke-linecap="round"  stroke-linejoin="round"  class="icon icon-tabler icons-tabler-outline icon-tabler-device-floppy"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M6 4h10l4 4v10a2 2 0 0 1 -2 2h-12a2 2 0 0 1 -2 -2v-12a2 2 0 0 1 2 -2" /><path d="M12 14m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" /><path d="M14 4l0 4l-6 0l0 -4" /></svg>' }, pencilMarker: { id: "pencilMarker", svg: '<svg  xmlns="http://www.w3.org/2000/svg"  width="100%"  height="100%"  viewBox="0 0 24 24" class="icon icon-tabler icons-tabler-outline icon-tabler-writing-draw" stroke-linejoin="round" stroke-linecap="round" stroke-width="2" fill="none"><g transform="rotate(47.565 12.1875 10.75)"><path stroke="#000000" d="m14.18752,16.75l0,-12c0,-1.1 -0.9,-2 -2,-2s-2,0.9 -2,2l0,12l2,2l2,-2z"/><path stroke="#000000" d="m10.18752,6.75l4,0"/></g><path stroke="currentColor" d="m19.37499,20.125c0.56874,0.0625 -4.04999,-0.5625 -6.41249,-0.4375c-2.3625,0.125 -4.75833,1.22916 -6.85624,1.625c-1.76458,0.6875 -3.40416,-0.9375 -1.98125,-2.49999"/></svg>' } } };
    fc = new class {
      constructor(e5) {
        this.loggers = e5;
      }
      debug(e5, t3, ...n3) {
        for (const o3 of this.loggers) o3.debug(e5, t3, ...n3);
      }
      info(e5, t3, ...n3) {
        for (const o3 of this.loggers) o3.info(e5, t3, ...n3);
      }
      warn(e5, t3, ...n3) {
        for (const o3 of this.loggers) o3.warn(e5, t3, ...n3);
      }
      error(e5, t3, ...n3) {
        for (const o3 of this.loggers) o3.error(e5, t3, ...n3);
      }
      perf(e5, t3, n3, o3, ...i4) {
        for (const r4 of this.loggers) r4.perf(e5, t3, n3, o3, ...i4);
      }
    }([new class {
      debug(e5, t3, ...n3) {
        console.debug(`${e5}.${t3}`, ...n3);
      }
      info(e5, t3, ...n3) {
        console.info(`${e5}.${t3}`, ...n3);
      }
      warn(e5, t3, ...n3) {
        console.warn(`${e5}.${t3}`, ...n3);
      }
      error(e5, t3, ...n3) {
        console.error(`${e5}.${t3}`, ...n3);
      }
      perf(e5, t3, n3, o3, ...i4) {
        console.info(`${e5}.${t3}.${n3}.${o3}`, ...i4);
      }
    }(), new class {
      constructor() {
      }
      debug(e5, t3, ...n3) {
      }
      info(e5, t3, ...n3) {
      }
      warn(e5, t3, ...n3) {
      }
      error(e5, t3, ...n3) {
      }
      perf(e5, t3, n3, o3, i4, ...r4) {
        switch (o3) {
          case "Begin":
            window.performance.mark(`${e5}.${t3}.${n3}.${o3}.${i4}`, { detail: r4 });
            break;
          case "End":
            window.performance.mark(`${e5}.${t3}.${n3}.${o3}.${i4}`, { detail: r4 }), window.performance.measure(`${e5}.${t3}.${n3}.Measure.${i4}`, `${e5}.${t3}.${n3}.Begin.${i4}`, `${e5}.${t3}.${n3}.End.${i4}`);
        }
      }
    }()]);
    yc = function() {
      function e5() {
        var t3;
        return i3(this, e5), (t3 = o2(this, e5)).root = t3.attachShadow({ mode: "open" }), t3;
      }
      return d(e5, x2(HTMLElement)), a2(e5, [{ key: "connectedCallback", value: function() {
        this._config || (this._config = { src: this.getAttribute("src") || "/demo.pdf", worker: "false" !== this.getAttribute("worker") }), this.renderViewer();
      } }, { key: "config", get: function() {
        return this._config;
      }, set: function(e6) {
        this._config = e6, this.isConnected && this.renderViewer();
      } }, { key: "renderViewer", value: function() {
        this._config && se(U2(vc, { config: this._config }), this.root);
      } }]);
    }();
    bc = ["type", "target"];
    customElements.define("embedpdf-container", yc);
    wc = { init: function(e5) {
      if ("container" === e5.type) return function(e6) {
        e6.type, e6.target;
        var t3 = g(e6, bc), n3 = document.createElement("embedpdf-container");
        return n3.config = t3, e6.target.appendChild(n3), n3;
      }(e5);
    } };
  }
});

// src/vendor/embedpdf/embedpdf.js
init_embedpdf_2704eb24();
export {
  wc as default
};
/*! Hammer.JS - v2.0.7 - 2016-04-22
 * http://hammerjs.github.io/
 *
 * Copyright (c) 2016 Jorik Tangelder;
 * Licensed under the MIT license */
