((W, D) => {
  const $ = D.querySelector.bind(D)

  class JM {
    constructor() {
      this.didScroll = false
      this.lastScrollTop = 0
      this.delta = 5
      this.navbarHeight = 0
      this.scrollDownFn = null
      this.scrollUpFn = null

      W.addEventListener('scroll', () => {
        this.didScroll = true
      }, false)

      setInterval(() => {
        if (this.didScroll) {
          this.hasScrolled()
          this.didScroll = false
        }
      }, 250)
    }
    hasScrolled() {
      const st = this.getScrollTop()
      // Make sure they scroll more than delta
      if (Math.abs(this.lastScrollTop - st) <= this.delta)
        return

      if (st > this.lastScrollTop && st > this.navbarHeight) {
        this.scrollDownFn()
      } else {
        if (st + W.innerHeight < this.getDocHeight()) {
          this.scrollUpFn()
        }
      }

      this.lastScrollTop = st
    }
    scrollUp(fn) {
      this.scrollUpFn = fn
      return this
    }
    scrollDown(fn) {
      this.scrollDownFn = fn
      return this
    }
    getScrollTop() {
      return (W.pageYOffset != 'undefined') ? W.pageYOffset : (D.documentElement || D.body.parentNode || D.body).scrollTop
    }
    getDocHeight() {
      const body = D.body,
        html = D.documentElement
      return Math.max(body.scrollHeight, body.offsetHeight,
        html.clientHeight, html.scrollHeight, html.offsetHeight)
    }
  }
  const definition = () => {
    return new JM()
  }

  if (typeof W !== 'undefined') {
    W.jm = definition()
  } else if (typeof module !== 'undefined') {
    module.exports = definition()
  }
})(window, document);
