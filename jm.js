'use strict';

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

(function (W, D) {
  var $ = D.querySelector.bind(D);

  var JM = (function () {
    function JM() {
      var _this = this;

      _classCallCheck(this, JM);

      this.didScroll = false;
      this.lastScrollTop = 0;
      this.delta = 5;
      this.navbarHeight = 0;
      this.scrollDownFn = null;
      this.scrollUpFn = null;

      W.addEventListener('scroll', function () {
        _this.didScroll = true;
      }, false);

      setInterval(function () {
        if (_this.didScroll) {
          _this.hasScrolled();
          _this.didScroll = false;
        }
      }, 250);
    }

    _createClass(JM, [{
      key: 'hasScrolled',
      value: function hasScrolled() {
        var st = this.getScrollTop();
        // Make sure they scroll more than delta
        if (Math.abs(this.lastScrollTop - st) <= this.delta) return;

        if (st > this.lastScrollTop && st > this.navbarHeight) {
          this.scrollDownFn();
        } else {
          if (st + W.innerHeight < this.getDocHeight()) {
            this.scrollUpFn();
          }
        }

        this.lastScrollTop = st;
      }
    }, {
      key: 'scrollUp',
      value: function scrollUp(fn) {
        this.scrollUpFn = fn;
        return this;
      }
    }, {
      key: 'scrollDown',
      value: function scrollDown(fn) {
        this.scrollDownFn = fn;
        return this;
      }
    }, {
      key: 'getScrollTop',
      value: function getScrollTop() {
        return W.pageYOffset != 'undefined' ? W.pageYOffset : (D.documentElement || D.body.parentNode || D.body).scrollTop;
      }
    }, {
      key: 'getDocHeight',
      value: function getDocHeight() {
        var body = D.body,
            html = D.documentElement;
        return Math.max(body.scrollHeight, body.offsetHeight, html.clientHeight, html.scrollHeight, html.offsetHeight);
      }
    }]);

    return JM;
  })();

  var definition = function definition() {
    return new JM();
  };

  if (typeof W !== 'undefined') {
    W.jm = definition();
  } else if (typeof module !== 'undefined') {
    module.exports = definition();
  }
})(window, document);