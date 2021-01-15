"use strict";

(function () {
  "use strict";

  function e(e, t) {
    for (var n = 0; n < t.length; n++) {
      var i = t[n];
      i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(e, i.key, i);
    }
  }

  var t = function () {
    function t(e, n) {
      !function (e, t) {
        if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
      }(this, t), this.btn = document.querySelector(e);
    }

    var n, i;
    return n = t, (i = [{
      key: "scrollSuaveTop",
      value: function value(e) {
        e.preventDefault();
        var t = e.currentTarget.getAttribute("href");
        document.querySelector(t).scrollIntoView({
          block: "start",
          behavior: "smooth"
        });
      }
    }, {
      key: "addEvent",
      value: function value() {
        this.btn.addEventListener("click", this.scrollSuaveTop);
      }
    }, {
      key: "init",
      value: function value() {
        this.addEvent();
      }
    }]) && e(n.prototype, i), t;
  }();

  function n(e, t) {
    for (var n = 0; n < t.length; n++) {
      var i = t[n];
      i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(e, i.key, i);
    }
  }

  var i,
      o,
      a,
      r,
      c,
      l = function () {
    function e(t, n) {
      !function (e, t) {
        if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
      }(this, e), this.btn = document.querySelector(n), this.links = document.querySelectorAll(t), this.scrollSuave = this.scrollSuave.bind(this);
    }

    var t, i;
    return t = e, (i = [{
      key: "scrollSuave",
      value: function value(e) {
        e.preventDefault();
        var t = e.currentTarget.getAttribute("href");
        document.querySelector(t).scrollIntoView({
          block: "start",
          behavior: "smooth"
        });
      }
    }, {
      key: "addEvent",
      value: function value() {
        var e = this;
        this.links.forEach(function (t) {
          t.addEventListener("click", e.scrollSuave);
        }), this.btn.addEventListener("click", this.scrollSuave);
      }
    }, {
      key: "init",
      value: function value() {
        this.links.length && this.addEvent();
      }
    }]) && n(t.prototype, i), e;
  }();

  new t(".ceta").init(), new l('[data-menu="suave"] a[href^="#"]', ".btn").init(), i = document.querySelector(".ceta"), o = document.querySelector(".grid"), a = document.querySelectorAll('[data-anime="down"]'), r = document.querySelectorAll('[data-anime="up"]'), c = .8 * window.innerHeight, window.addEventListener("scroll", function () {
    o.classList.contains("ativo") ? i.classList.add("ativo") : i.classList.remove("ativo"), a.forEach(function (e) {
      e.getBoundingClientRect().top - c < 0 ? e.classList.add("ativo") : e.classList.remove("ativo");
    }), r.forEach(function (e) {
      e.getBoundingClientRect().top - c < 0 ? e.classList.add("ativo") : e.classList.remove("ativo");
    });
  });
})();