# JM

[![NPM version](https://img.shields.io/npm/v/jetmovement.svg?style=flat-square)](https://www.npmjs.com/package/jetmovement)
[![NPM download](https://img.shields.io/npm/dm/jetmovement.svg?style=flat-square)](https://www.npmjs.com/package/jetmovement)
[![David Status](https://img.shields.io/david/egoist/jetmovement.svg?style=flat-square)](https://david-dm.org/egoist/jetmovement)

Jet Movement detects scrollUp and scrollDown movement for you.

## Introduction

```javascript
// when you scroll the page up it excutes the function `fn`
jm.scrollUp(fn)

// when you scroll the page down it excutes the function `fn`
jm.scrollDown(fn)
```

## A real-world example

Auto hiding website's Navbar when scroll down and show when scroll up, [see it alive](https://egoist.github.io/jm).

**HTML**:

```html
<header class="header">
  <h1>Jet Movement</h1>
</header>
```

**CSS**:

```css
.header {
  height: 50px;
  background-color: #fff;
  border-bottom: 1px solid #e2e2e2;
  line-height: 50px;
  text-align: center;
  transform: translateY(0);
  transition: transform .3s ease;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
}
.hidden-header {
  transform: translateY(-100%);
}
```

**JavaScript**:

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