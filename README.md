# Boilerplate

A professional front-end template for building bootstrap web apps or sites.

* Source: [https://github.com/lucasfercunha/boilerplate](https://github.com/lucasfercunha/boilerplate)
* Homepage: [http://lucasfercunha.com/boilerplate](http://lucasfercunha.com/boilerplate)
* Facebook: [http://fb.me/lucasfercunha](http://fb.me/lucasfercunha)

## Requirements

* [NodeJS](http://nodejs.org) with npm
* [Bower](http://bower.io): run ```npm install -g bower```
* [GulpJS](http://gulpjs.com): run ```npm install -g gulp```

## Quick Start

1. Install node dependencies ```npm install```
2. Install front-end dependencies ```bower install```
3. **Start developing**

## Gulp Tasks

```gulp dev``` - Compile CoffeeScript (application/scripts/src) to Javascript, compile SASS (application/css/src) to CSS, compress your images (application/img/src), starts a server and watch for changes.

```gulp coffee:compile``` - Compile [CoffeeScript](http://coffeescript.org) from folder _application/scripts/src_.

```gulp images:compress``` - Compress Images from folder _application/images/src_.

```gulp sass:compile``` - Compile [SASS](http://sass-lang.com) from folder _application/styles/src_.

## Application Directory

```
boilerplate
    |- application
    |----- images       # compressed images (or images you don't want to compress)
    |----- scripts      # compiled coffeescript (or vanilla javascript)
    |----- styles       # compiled sass (or vanilla css)
    |- assets
    |----- images       # images to be compressed
    |----- scripts      # coffescript to be compiled
    |----- styles       # scss files to be compiled
```

## Features

* HTML5 Ready. Use new elements with confidence.
* Cross-browser compatible (Chrome, Firefox, IE8+, Opera, Safari).
* Includes the latest [jQuery](http://jquery.com/).
* The latest Modernizr build for feature detection.
* Includes the latest [Bootstrap](http://getbootstrap.com) and [Bootswatch Themes](http://bootswatch.com)
* Glyphicons and FontAwesome
