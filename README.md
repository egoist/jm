# JM

Jet Movement detects scrollUp and scrollDown movement for you.

## Introduction

```javascript
// when you scroll the page up it excutes the function `fn`
jm.scrollUp(fn)

// when you scroll the page down it excutes the function `fn`
jm.scrollDown(fn)
```

**A real-world example:**

Auto hiding website's Navbar when scroll down and show when scroll up.

```javascript
const header = document.querySelector('.header')
jm.navbarHeight = header.clientHeight

jm.scrollDown(() => {
  header.classList.add('hidden-header')
})

jm.scrollUp(() => {
  header.classList.remove('hidden-header')
})
```

Inspired by [Hide header on scroll down, show on scroll up](https://medium.com/@mariusc23/hide-header-on-scroll-down-show-on-scroll-up-67bbaae9a78c).

## License

MIT.