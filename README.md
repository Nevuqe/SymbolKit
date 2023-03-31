What is SymbolKit?
==================

<img align="right" width="400" height="400" src="assets/icon.png">

SymbolKit, an open-source library of over 1300+ SVG icons that you can use in your own projects. These icons are intended for the usage of UI elements in the Enso Operating System. However, these can be used for designing apps, or creating marketing materials. SymbolKit has the icons you need to make your designs stand out.

For more information and resources on SymbolKit, you can read through our Human Interface Guidelines at [developer.nevuqe.com](https://developer.nevuqe.com).

If you have any questions or need support with SymbolKit, you can contact Nevuqe at [hello@nevuqe.com](mailto:hello@nevuqe.com).

For security-related enquiries, it is required that you encrypt your email using Nevuqe's PGP key, which can be found at [developer.nevuqe.com](https://developer.nevuqe.com/keys/signing-key.asc), and please contact us at [security@nevuqe.com](mailto:security@nevuqe.com).

CSS
---

To use SymbolKit in a web project, import our CSS File:

```html
<link rel="stylesheet" href="https://raw.githubusercontent.com/Nevuqe/SymbolKit/main/css/symbolkit.css">
```

Here is an example in HTML:

```html
<i class="symbolkit-hand-brake"></i>
```
The class must always be "symbolkit-" and then the name of the icon.

The icons are `display: inline-block` and default to the current font size. You can control this
by adjusting the `::before` styles of the element (which is where the icons are added as a mask).

Figma
-----

The library is available in the Figma community [here](https://www.figma.com/community/file/1223220311556704784).

License
-------

This icon library is licensed under the Apache-2.0 license, to see the full license, read [here](LICENSE).

Credits
-------

SymbolKit is a fork of an icon library named [Iconoir](https://iconoir.com), all credits go to [Luca Burgio](https://lucaburgio.com/), and all Iconoir [contributors](https://github.com/iconoir-icons/iconoir/graphs/contributors).

Links:

https://iconoir.com/
https://lucaburgio.com/
https://github.com/iconoir-icons/iconoir/graphs/contributors
