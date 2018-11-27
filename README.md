# [Slider](https://github.com/pyjun01/Slider)

간단한 슬라이드 플러그인.

- [Demo](https://pyjun01.github.io/slide/)

## Main

```
js/
└── slider.js     (16.6 KB)
```



## Getting started

### Quick start

Two quick start options are available:

- [Download the latest release](https://github.com/pyjun01/Slider/archive/master.zip).
- Clone the repository: `git clone https://github.com/pyjun01/Slider.git`.


### Installation

Include files:

```html
<script src="/path/to/Slider.js"></script>
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
<<<<<<< HEAD
	  progress_bar:".slide-progress>.progress",//progressbar
=======
>>>>>>> 8bdc7fd70b68b378d0afc36e49e25a9ba10db651
	  S: 200,// clip short
	  L: 400,// clip long
  }, function (){//callback
    onInit: function (){}// Slide Ready
    onSlideStart: function (){}// Slide start
    onSlideChanged: function (){}// Slide end
  });
```
