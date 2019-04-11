# [slide](https://github.com/pyjun01/SlideJS)

간단한 슬라이드 플러그인.

- [Demo](https://pyjun01.github.io/SlideJS/)

## Main

```
js/
└── slide.js     (16.6 KB)
```



## Getting started

### Quick start

Two quick start options are available:

- [Download the latest release](https://github.com/pyjun01/SlideJS/archive/master.zip).
- Clone the repository: `git clone https://github.com/pyjun01/SlideJS.git`.


### Installation

Include files:

```html
<script src="/path/to/Slide.js"></script>
```


### Usage

```js
  var Slider1= new Slider({
    slideWrap:'.slider1',  //slide wrap
	  Canvas: "#canvas",// canvas name
	  Auto: false,
	  Autotime: 3000,// auto slide delay
	  Slidetime: 	1000,// duration
	  pageBtn: ".link-list",// page btn wrap name
	  PrevArrowBtn: ".btn-prev",
	  NextArrowBtn: ".btn-next",
	  setSlides:{
		  wrap: '.slide-list',// wrap
		  list: '.slide-list li',// wrap list
		  viewClass : 'active'// focus class
	  },
	  progress_bar:".slide-progress>.progress",//progressbar
	  S: 200,// clip short
	  L: 400,// clip long
  }, {//callback
    onInit: function (){}, // Slide Ready
    onSlideStart: function (){}, // Slide start
    onSlideChanged: function (){}, // Slide end
  });
```
