ViewJS
=============

ViewJS - is a HTML5 & JavaScript is a web presentation plugin, that is a light weight.

Usage
=============

  * Include `css/content.css` and `layout.css` to your html file.
  * Include at the end of `body` section `<script src='js/view.min.js'></script>` file.
  * Create `div` tag with `class="slide"`. `div` will be indexed in the file.

Create presentation in your js file:

```javascript
ViewJs(options);
```

Where options:

```javascript
ViewJS(options = {
  slide_show : true, 
  slide_show_timeout: 10000
});
```

Features
=============

  * Lightweight library for building web presentations.
  * Move slides with up/down key.
  * Slide show with configurable timeout.
  * Full screenmode - double click anywhere to toggle on or off.

TODO
=============

  * Thumbnails list.
  * Effects.
  * Plugins.
  * Progress bar.
  * Improve scrolling for MAC OS X
  * Play button (automatically play presentation added)

Contribute
============

  * Fork main viewjs repository (https://github.com/0xAX/view.js).
  * Make your changes in your clone of view.js.
  * Test it.
  * Send pull request.

Contributors
==============

  * Brandon Davis - [@_voidPirate](https://twitter.com/_voidPirate)

Author
=============

[@0xAX](https://twitter.com/0xAX).
