var option= {
	Auto: false,
	Autotime: 1000,
	// callback: function (){
	// 	console.log('callback');
	// }
	pageBtn: true,
	arrowBtn: false,
	// images: imgs,
};
var slide= new Slider(option);//slide 선언

function Slider (option){
	console.log(option);
	/* options */
	this.Auto= option.Auto? option.Auto: false;
	this.Autotime= option.Autotime != undefined? option.Autotime: null;
	this.callback= option.callback != undefined? option.callback: function(){};
	this.pageBtn= option.pageBtn != undefined? option.pageBtn: false;
	this.arrowBtn= option.arrowBtn != undefined? option.arrowBtn: false;
	/* //options */

	this.images;//slide iamge list
	this.canvas;//canvas
	this.ctx;//ctx
	this.W;//canvas width
	this.H;//canvas height
	this.S= 150;//clip short
	this.L= 300;//clip long
	this.FPS= 60;//frame
	this.isAnimated= false;//is animate
	this.len= 0;// image length
	this.idx= 0;// show image index
	this.cnt= [0, 0, 0];//image slide index
	this.timeline=[
		0.00000,
       -0.00004,
       -0.00018,
       -0.00046,
       -0.00086,
       -0.00136,
       -0.00200,
       -0.00275,
       -0.00368,
       -0.00471,
       -0.00589,
       -0.00725,
       -0.00875,
       -0.01046,
       -0.01232,
       -0.01436,
       -0.01664,
       -0.01911,
       -0.02179,
       -0.02471,
       -0.02789,
       -0.03132,
       -0.03504,
       -0.03904,
       -0.04339,
       -0.04807,
       -0.05314,
       -0.05857,
       -0.06446,
       -0.07082,
       -0.07764,
       -0.08507,
       -0.09307,
       -0.10171,
       -0.11111,
       -0.12132,
       -0.13243,
       -0.14450,
       -0.15775,
       -0.17225,
       -0.18821,
       -0.20582,
       -0.22529,
       -0.24689,
       -0.27089,
       -0.29757,
       -0.32707,
       -0.35939,
       -0.39425,
       -0.43086,
       -0.46814,
       -0.50486,
       -0.53993,
       -0.57271,
       -0.60289,
       -0.63050,
       -0.65571,
       -0.67871,
       -0.69975,
       -0.71904,
       -0.73679,
       -0.75318,
       -0.76832,
       -0.78239,
       -0.79546,
       -0.80768,
       -0.81907,
       -0.82979,
       -0.83982,
       -0.84925,
       -0.85814,
       -0.86650,
       -0.87439,
       -0.88186,
       -0.88893,
       -0.89561,
       -0.90193,
       -0.90793,
       -0.91361,
       -0.91900,
       -0.92411,
       -0.92896,
       -0.93357,
       -0.93793,
       -0.94207,
       -0.94604,
       -0.94975,
       -0.95332,
       -0.95668,
       -0.95986,
       -0.96289,
       -0.96575,
       -0.96846,
       -0.97104,
       -0.97343,
       -0.97571,
       -0.97789,
       -0.97993,
       -0.98182,
       -0.98361,
       -0.98529,
       -0.98686,
       -0.98832,
       -0.98971,
       -0.99096,
       -0.99214,
       -0.99321,
       -0.99421,
       -0.99511,
       -0.99593,
       -0.99664,
       -0.99732,
       -0.99789,
       -0.99839,
       -0.99882,
       -0.99918,
       -0.99946,
       -0.99971,
       -0.99986,
       -0.99996,
       -1.00000
	];
	this.original_timeline= [//x 좌표값 timeline
  		// 5599.9,
		// 5599.4,
		// 5598.7,
		// 5597.6,
		// 5596.2,
		// 5594.4,
		// 5592.3,
		// 5589.8,
		// 5586.9,
		// 5583.6,
		// 5579.9,
		// 5575.7,
		// 5571,
		// 5565.8,
		// 5560.2,
		// 5553.9,
		// 5547.1,
		// 5539.7,
		// 5531.6,
		// 5522.8,
		// 5513.3,
		// 5503,
		// 5491.9,
		// 5479.9,
		// 5467,
		// 5453,
		// 5437.9,
		// 5421.7,
		// 5404.2,
		// 5385.3,
		// 5364.9,
		// 5342.8,
		// 5318.9,
		// 5293,
		// 5264.9,
		// 5234.3,
		// 5200.9,
		// 5164.5,
		// 5124.5,
		// 5080.6,
		// 5032.1,
		// 4978.5,
		// 4919,
		// 4852.8,
		// 4779.2,
		// 4697.5,
		// 4607.7,
		// 4510.4,
		// 4407.6,
		// 4302.3,
		// 4198.2,
		// 4098.4,
		// 4005,
		// 3919.1,
		// 3840.5,
		// 3768.8,
		// 3703.5,
		// 3643.9,
		// 3589.3,
		// 3539.2,
		// 3492.9,
		// 3450.2,
		// 3410.5,
		// 3373.6,
		// 3339.3,
		// 3307.2,
		// 3277.1,
		// 3248.9,
		// 3222.4,
		// 3197.4,
		// 3173.9,
		// 3151.7,
		// 3130.8,
		// 3111,
		// 3092.3,
		// 3074.5,
		// 3057.7,
		// 3041.8,
		// 3026.7,
		// 3012.4,
		// 2998.8,
		// 2985.9,
		// 2973.7,
		// 2962,
		// 2951,
		// 2940.5,
		// 2930.6,
		// 2921.2,
		// 2912.3,
		// 2903.8,
		// 2895.8,
		// 2888.2,
		// 2881,
		// 2874.3,
		// 2867.9,
		// 2861.8,
		// 2856.2,
		// 2850.8,
		// 2845.8,
		// 2841.1,
		// 2836.7,
		// 2832.6,
		// 2828.8,
		// 2825.3,
		// 2822,
		// 2819,
		// 2816.2,
		// 2813.7,
		// 2811.4,
		// 2809.3,
		// 2807.5,
		// 2805.9,
		// 2804.5,
		// 2803.3,
		// 2802.3,
		// 2801.5,
		// 2800.8,
		// 2800.4,
		// 2800.1,
		// 2800,
		// 2799.9,
		// 2799.5,
		// 2798.7,
		// 2797.6,
		// 2796.2,
		// 2794.5,
		// 2792.4,
		// 2789.9,
		// 2787,
		// 2783.7,
		// 2780,
		// 2775.8,
		// 2771.2,
		// 2766.1,
		// 2760.4,
		// 2754.2,
		// 2747.4,
		// 2740,
		// 2732,
		// 2723.2,
		// 2713.8,
		// 2703.6,
		// 2692.5,
		// 2680.6,
		// 2667.7,
		// 2653.9,
		// 2638.9,
		// 2622.8,
		// 2605.4,
		// 2586.6,
		// 2566.4,
		// 2544.5,
		// 2520.8,
		// 2495.1,
		// 2467.3,
		// 2437,
		// 2404,
		// 2367.9,
		// 2328.4,
		// 2285,
		// 2237.1,
		// 2184.2,
		// 2125.5,
		// 2060.3,
		// 1987.7,
		// 1907.2,
		// 1818.5,
		// 1722.2,
		// 1620.1,
		// 1515.1,
		// 1410.7,
		// 1310.2,
		// 1216,
		// 1129,
		// 1049.5,
		// 976.9,
		// 910.8,
		// 850.5,
		// 795.3,
		// 744.5,
		// 697.8,
		// 654.6,
		// 614.6,
		// 577.3,
		// 542.7,
		// 510.3,
		// 479.9,
		// 451.5,
		// 424.8,
		// 399.6,
		// 376,
		// 353.6,
		// 332.5,
		// 312.6,
		// 293.8,
		// 275.9,
		// 259,
		// 243,
		// 227.8,
		// 213.4,
		// 199.7,
		// 186.7,
		// 174.4,
		// 162.7,
		// 151.7,
		// 141.1,
		// 131.2,
		// 121.7,
		// 112.7,
		// 104.2,
		// 96.2,
		// 88.6,
		// 81.4,
		// 74.6,
		// 68.1,
		// 62.1,
		// 56.4,
		// 51,
		// 46,
		// 41.3,
		// 36.8,
		// 32.7,
		// 28.9,
		// 25.3,
		// 22.1,
		// 19,
		// 16.3,
		// 13.7,
		// 11.4,
		// 9.4,
		// 7.5,
		// 5.9,
		// 4.5,
		// 3.3,
		// 2.3,
		// 1.5,
		// .8,
		// .4,
		// .1,
		0,
		-.1,
		-.5,
		-1.3,
		-2.4,
		-3.8,
		-5.6,
		-7.7,
		-10.3,
		-13.2,
		-16.5,
		-20.3,
		-24.5,
		-29.3,
		-34.5,
		-40.2,
		-46.6,
		-53.5,
		-61,
		-69.2,
		-78.1,
		-87.7,
		-98.1,
		-109.3,
		-121.5,
		-134.6,
		-148.8,
		-164,
		-180.5,
		-198.3,
		-217.4,
		-238.2,
		-260.6,
		-284.8,
		-311.1,
		-339.7,
		-370.8,
		-404.6,
		-441.7,
		-482.3,
		-527,
		-576.3,
		-630.8,
		-691.3,
		-758.5,
		-833.2,
		-915.8,
		-1006.3,
		-1103.9,
		-1206.4,
		-1310.8,
		-1413.6,
		-1511.8,
		-1603.6,
		-1688.1,
		-1765.4,
		-1836,
		-1900.4,
		-1959.3,
		-2013.3,
		-2063,
		-2108.9,
		-2151.3,
		-2190.7,
		-2227.3,
		-2261.5,
		-2293.4,
		-2323.4,
		-2351.5,
		-2377.9,
		-2402.8,
		-2426.2,
		-2448.3,
		-2469.2,
		-2489,
		-2507.7,
		-2525.4,
		-2542.2,
		-2558.1,
		-2573.2,
		-2587.5,
		-2601.1,
		-2614,
		-2626.2,
		-2637.8,
		-2648.9,
		-2659.3,
		-2669.3,
		-2678.7,
		-2687.6,
		-2696.1,
		-2704.1,
		-2711.7,
		-2718.9,
		-2725.6,
		-2732,
		-2738.1,
		-2743.8,
		-2749.1,
		-2754.1,
		-2758.8,
		-2763.2,
		-2767.3,
		-2771.2,
		-2774.7,
		-2778,
		-2781,
		-2783.8,
		-2786.3,
		-2788.6,
		-2790.6,
		-2792.5,
		-2794.1,
		-2795.5,
		-2796.7,
		-2797.7,
		-2798.5,
		-2799.2,
		-2799.6,
		-2799.9,
		-2800,
	];
}
Slider.prototype.PrevImage= function (prev_idx ,count1= 0, count2= 0, count3= 0){
	for(var i=0; i<9; i++){// cliping, drawing
		var j= i%3;
		
		this.ctx.save();
	    this.ctx.beginPath();
	    switch(j){
	    	case 0:
			    this.ctx.moveTo(0, 0);
			    this.ctx.lineTo(slide.W, 0);
			    this.ctx.lineTo(slide.W, slide.S);
			    this.ctx.lineTo(0, slide.L);
			    this.ctx.closePath();
			    this.ctx.clip();
			    this.ctx.drawImage(
			    	this.images[this.idx], 
			    	0, 0, this.images[this.idx].width, this.images[this.idx].height,//image의 위치
			    	(slide.timeline[count1]*slide.W), 0, 1200, 857,//canvas의 위치
			    );
			    this.ctx.drawImage(
			    	this.images[prev_idx], 
			    	0, 0, this.images[prev_idx].width, this.images[prev_idx].height,//image의 위치
			    	(slide.timeline[count1]*slide.W)+slide.W, 0, 1200, 857,//canvas의 위치
			    );
	    		break;
	    	case 1:
	    		this.ctx.moveTo(0, slide.L);
			    this.ctx.lineTo(slide.W, slide.S);
			    this.ctx.lineTo(slide.W, slide.L+200);
			    this.ctx.lineTo(0, slide.S+500);
			    this.ctx.closePath();
			    this.ctx.clip();
			    this.ctx.drawImage(
			    	this.images[this.idx], 
			    	0, 0, this.images[this.idx].width, this.images[this.idx].height,//image의 위치
			    	(slide.timeline[count2]*slide.W), 0, 1200, 857,//canvas의 위치
			    );
			    this.ctx.drawImage(
			    	this.images[prev_idx], 
			    	0, 0, this.images[prev_idx].width, this.images[prev_idx].height,//image의 위치
			    	(slide.timeline[count2]*slide.W)+slide.W, 0, 1200, 857,//canvas의 위치
			    );
	    		break;
	    	case 2:
	    		this.ctx.moveTo(0, slide.S+500);
			    this.ctx.lineTo(slide.W, slide.L+200);
			    this.ctx.lineTo(slide.W, slide.H);
			    this.ctx.lineTo(0, slide.H);
			    this.ctx.closePath();
			    this.ctx.clip();
			    this.ctx.drawImage(
			    	this.images[this.idx], 
			    	0, 0, this.images[this.idx].width, this.images[this.idx].height,//image의 위치
			    	(slide.timeline[count3]*slide.W), 0, 1200, 857,//canvas의 위치
			    );
			    this.ctx.drawImage(
			    	this.images[prev_idx], 
			    	0, 0, this.images[prev_idx].width, this.images[prev_idx].height,//image의 위치
			    	(slide.timeline[count3]*slide.W)+slide.W, 0, 1200, 857,//canvas의 위치
			    );
	    		break;
	    }
	    
	    this.ctx.restore();
	}
	var self= this;
	if(count3<120){
		setTimeout(function (){
			self.PrevImage(
				prev_idx, 
				count1<120? ++count1: count1, 
				count1>12&&count2<120? ++count2: count2, 
				count1>24? ++count3: count3
			);
		}, 1000/this.FPS);
	}else{
		this.isAnimated= false;
		this.idx= this.idx > 0 ? this.idx - 1 : this.len -1;
	}

}
Slider.prototype.NextImage= function (count1= 0, count2= 0, count3= 0){

	console.log("next");
	this.isAnimated= false;
}
Slider.prototype.MoveImage = function(tg, count1= 0, count2= 0, count3= 0) {
	console.log(`${this.idx} ~ ${tg}`);
	this.isAnimated= false;
};
Slider.prototype.thumbnail= function (){
	this.ctx.drawImage(
    	this.images[0], 
    	0, 0, this.images[0].width, this.images[0].height,//image의 위치
    	// (this.timeline[0])/2800*this.W, 0, 1200, 857,//canvas의 위치 /2800*canvas.W= 2800단위로 쪼개진걸 1200단위로 만들려고
    	this.timeline[0]*this.W, 0, 1200, 857,//canvas의 위치 /timeline을 이미 2800으로 나눠서 그냥 canvas.w곱해줌
    );
}

function initSlider (){
	var src= ["./images/index_1_180918.jpg", "./images/index_2_180918.jpg", "./images/index_3_180918.jpg", "./images/index_2_180918.jpg", "./images/index_1_180918.jpg"];//image src

	var nb= 0;
	var loaded= 0;
	var imgs= [];
	for(var i in src){
		nb++;
		imgs[i] = new Image();
		imgs[i].src = src[i];
		imgs[i].onload = function(){
			if(++loaded == nb){//all images onload
				slide.images=imgs;//images
				slide.canvas= document.getElementById("canvas");//canvas
				slide.ctx= slide.canvas.getContext("2d");//ctx
				slide.W= slide.canvas.width;//canvas Width
				slide.H= slide.canvas.height;//canvas Height
				slide.len= src.length;//slide image length

				slide.thumbnail();//show first image
				for(i of slide.timeline){
					console.log(i);
				}
				if(slide.Auto)//if option.auto== true
					setInterval(function (){slide.nextImage()}, 3000);//autoslide
			}
		}
	}
}
function initEvents (){
	$(".btn-prev").on("click", function (){
		if(slide.isAnimated)
			return;
		slide.isAnimated= true;
		var prev_idx= slide.idx > 0 ? slide.idx - 1 : slide.len -1;
		console.log(prev_idx);
		slide.PrevImage(prev_idx, 0, 0, 0)
	});
	$(".btn-next").on("click", function (){
		if(slide.isAnimated)
			return;
		slide.isAnimated= true;
		var next_idx= slide.idx < slide.len-1 ? slide.idx + 1 : 0
		slide.NextImage(next_idx)
	});
	$("nav.link-list>ul>li").on("click", function (){
		if(slide.isAnimated)
			return;
		slide.isAnimated= true;
		slide.MoveImage($(this).index());
	});
}
// function hideItems (num, count1, count2, count3){
// 	var num2 = num > 0 ? num - 1 : len - 1;

// 	for(var i=0; i<9; i++){// cliping, drawing
// 		var j= i%3;
		
// 		ctx.save();
// 	    ctx.beginPath();
// 	    switch(j){
// 	    	case 0:
// 			    ctx.moveTo(0, 0);
// 			    ctx.lineTo(slide.W, 0);
// 			    ctx.lineTo(slide.W, slide.S);
// 			    ctx.lineTo(0, slide.L);
// 			    ctx.closePath();
// 			    ctx.clip();
// 			    ctx.drawImage(
// 			    	images[num], 
// 			    	0, 0, images[num].width, images[num].height,//image의 위치
// 			    	-((slide.timeline[count1]-5599.9)/2800*slide.W), 0, 1200, 857,//canvas의 위치
// 			    );
// 			    ctx.drawImage(
// 			    	images[num2], 
// 			    	0, 0, images[num2].width, images[num2].height,//image의 위치
// 			    	-((slide.timeline[count1]-5599.9)/2800*slide.W)-1200, 0, 1200, 857,//canvas의 위치
// 			    );
// 	    		break;
// 	    	case 1:
// 	    		ctx.moveTo(0, slide.L);
// 			    ctx.lineTo(slide.W, slide.S);
// 			    ctx.lineTo(slide.W, slide.L+200);
// 			    ctx.lineTo(0, slide.S+500);
// 			    ctx.closePath();
// 			    ctx.clip();
// 			    ctx.drawImage(
// 			    	images[num], 
// 			    	0, 0, images[num].width, images[num].height,//image의 위치
// 			    	-((slide.timeline[count2]-5599.9)/2800*slide.W), 0, 1200, 857,//canvas의 위치
// 			    );
// 			    ctx.drawImage(
// 			    	images[num2], 
// 			    	0, 0, images[num2].width, images[num2].height,//image의 위치
// 			    	-((slide.timeline[count2]-5599.9)/2800*slide.W)-1200, 0, 1200, 857,//canvas의 위치
// 			    );
// 	    		break;
// 	    	case 2:
// 	    		ctx.moveTo(0, slide.S+500);
// 			    ctx.lineTo(slide.W, slide.L+200);
// 			    ctx.lineTo(slide.W, slide.H);
// 			    ctx.lineTo(0, slide.H);
// 			    ctx.closePath();
// 			    ctx.clip();
// 			    ctx.drawImage(
// 			    	images[num], 
// 			    	0, 0, images[num].width, images[num].height,//image의 위치
// 			    	-((slide.timeline[count3]-5599.9)/2800*slide.W), 0, 1200, 857,//canvas의 위치
// 			    );
// 			    ctx.drawImage(
// 			    	images[num2], 
// 			    	0, 0, images[num2].width, images[num2].height,//image의 위치
// 			    	-((slide.timeline[count3]-5599.9)/2800*slide.W)-1200, 0, 1200, 857,//canvas의 위치
// 			    );
// 	    		break;
// 	    }
	    
// 	    ctx.restore();
// 	}
// 	if(count3<120){
// 		setTimeout(function (){
// 			hideItems(
// 				num, 
// 				count1<120? ++count1: count1, 
// 				count1>12&&count2<120? ++count2: count2, 
// 				count1>24? ++count3: count3
// 			);
// 		}, 1000/FPS);
// 	}else{
// 		isAnimated= false;
// 	}
// }
// function prevItem() {
// 	if(isAnimated)
// 		return
// 	isAnimated= true;
//     hideItems(idx, 0, 0, 0);//1
//     idx= idx > 0 ? idx - 1 : len -1
// }

function showItems (num, count1, count2, count3){
	num2 = num < len -1 ? num + 1 : 0;
	for(var i=0; i<9; i++){// cliping, drawing
		var j= i%3;
		
		ctx.save();
	    ctx.beginPath();
	    switch(j){
	    	case 0:
			    ctx.moveTo(0, 0);
			    ctx.lineTo(slide.W, 0);
			    ctx.lineTo(slide.W, slide.S);
			    ctx.lineTo(0, slide.L);
			    ctx.closePath();
			    ctx.clip();
			    ctx.drawImage(
			    	images[num], 
			    	0, 0, images[num].width, images[num].height,//image의 위치
			    	(slide.timeline[count1]-5599.9)/2800*slide.W, 0, 1200, 857,//canvas의 위치
			    );
			    ctx.drawImage(
			    	images[num2], 
			    	0, 0, images[num2].width, images[num2].height,//image의 위치
			    	(slide.timeline[count1]-5599.9)/2800*slide.W+1200, 0, 1200, 857,//canvas의 위치
			    );
	    		break;
	    	case 1:
	    		ctx.moveTo(0, slide.L);
			    ctx.lineTo(slide.W, slide.S);
			    ctx.lineTo(slide.W, slide.L+200);
			    ctx.lineTo(0, slide.S+500);
			    ctx.closePath();
			    ctx.clip();
			    ctx.drawImage(
			    	images[num], 
			    	0, 0, images[num].width, images[num].height,//image의 위치
			    	(slide.timeline[count2]-5599.9)/2800*slide.W, 0, 1200, 857,//canvas의 위치
			    );
			    ctx.drawImage(
			    	images[num2], 
			    	0, 0, images[num2].width, images[num2].height,//image의 위치
			    	(slide.timeline[count2]-5599.9)/2800*slide.W+1200, 0, 1200, 857,//canvas의 위치
			    );
	    		break;
	    	case 2:
	    		ctx.moveTo(0, slide.S+500);
			    ctx.lineTo(slide.W, slide.L+200);
			    ctx.lineTo(slide.W, slide.H);
			    ctx.lineTo(0, slide.H);
			    ctx.closePath();
			    ctx.clip();
			    ctx.drawImage(
			    	images[num], 
			    	0, 0, images[num].width, images[num].height,//image의 위치
			    	(slide.timeline[count3]-5599.9)/2800*slide.W, 0, 1200, 857,//canvas의 위치
			    );
			    ctx.drawImage(
			    	images[num2], 
			    	0, 0, images[num2].width, images[num2].height,//image의 위치
			    	(slide.timeline[count3]-5599.9)/2800*slide.W+1200, 0, 1200, 857,//canvas의 위치
			    );
	    		break;
	    }
	    ctx.restore();
	}
	if(count3<120){
		setTimeout(function (){
			showItems(
				num, 
				count1<120? ++count1: count1, 
				count1>12&&count2<120? ++count2: count2, 
				count1>24? ++count3: count3
			);
		}, 1000/FPS);
	}else{
		isAnimated= false;
	}
}
function nextItem() {
	if(slide.isAnimated)
		return
	slide.isAnimated= true;
    showItems(idx, 0, 0, 0);//1
    idx= idx < len -1 ? idx + 1 : 0
}

function moveItem(r, count1= 0, count2= 0, count3= 0) {
	if(idx==r)
		return isAnimated=false;
	var a= (idx>r);//false
	for(var i=0; i<9; i++){// cliping, drawing
		var j= i%3;
		
		ctx.save();
	    ctx.beginPath();
	    switch(j){
	    	case 0:
			    ctx.moveTo(0, 0);
			    ctx.lineTo(slide.W, 0);
			    ctx.lineTo(slide.W, slide.S);
			    ctx.lineTo(0, slide.L);
			    ctx.closePath();
			    ctx.clip();
			    var x= (slide.timeline[count1]-5599.9)/2800*slide.W;
			    ctx.drawImage(
			    	images[idx], 
			    	0, 0, images[idx].width, images[idx].height,//image의 위치
			    	a? -x :x, 0, 1200, 857,//canvas의 위치
			    );
			    ctx.drawImage(
			    	images[r], 
			    	0, 0, images[r].width, images[r].height,//image의 위치
			    	a? -x-1200 :x+1200, 0, 1200, 857,//canvas의 위치
			    );

	    		break;
	    	case 1:
	    		ctx.moveTo(0, slide.L);
			    ctx.lineTo(slide.W, slide.S);
			    ctx.lineTo(slide.W, slide.L+200);
			    ctx.lineTo(0, slide.S+500);
			    ctx.closePath();
			    ctx.clip();
			    var x= (slide.timeline[count2]-5599.9)/2800*slide.W;
			    ctx.drawImage(
			    	images[idx], 
			    	0, 0, images[idx].width, images[idx].height,//image의 위치
			    	a? -x: x, 0, 1200, 857,//canvas의 위치
			    );
			    ctx.drawImage(
			    	images[r], 
			    	0, 0, images[r].width, images[r].height,//image의 위치
			    	a? -x-1200: x+1200, 0, 1200, 857,//canvas의 위치
			    );
	    		break;
	    	case 2:
	    		ctx.moveTo(0, slide.S+500);
			    ctx.lineTo(slide.W, slide.L+200);
			    ctx.lineTo(slide.W, slide.H);
			    ctx.lineTo(0, slide.H);
			    ctx.closePath();
			    ctx.clip();
			    var x= (slide.timeline[count3]-5599.9)/2800*slide.W;
			    ctx.drawImage(
			    	images[idx], 
			    	0, 0, images[idx].width, images[idx].height,//image의 위치
			    	a? -x: x, 0, 1200, 857,//canvas의 위치
			    );
			    ctx.drawImage(
			    	images[r], 
			    	0, 0, images[r].width, images[r].height,//image의 위치
			    	a? -x-1200: x+1200, 0, 1200, 857,//canvas의 위치
			    );
	    		break;
	    }
	    ctx.restore();
	}
	if(count3<120){
		setTimeout(function (){
			moveItem(
				r, 
				count1<120? ++count1: count1, 
				count1>12&&count2<120? ++count2: count2, 
				count1>24? ++count3: count3
			);
		}, 1000/FPS);
	}else{
		isAnimated= false;
		idx= r;
	}
	// for(var i=0; i<9; i++){// cliping, drawing
	// 	var j= i%3;
		
	// 	ctx.save();
	//     ctx.beginPath();
	//     switch(j){
	//     	case 0:
	// 		    ctx.moveTo(0, 0);
	// 		    ctx.lineTo(slide.W, 0);
	// 		    ctx.lineTo(slide.W, slide.S);
	// 		    ctx.lineTo(0, slide.L);
	// 		    ctx.closePath();
	// 		    ctx.clip();
	// 		    for(var i=idx; idx>r? i>=r: i<=r; idx>r? i--: i++){
	// 		    	ctx.drawImage(
	// 			    	images[i], 
	// 			    	0, 0, images[i].width, images[i].height,//image의 위치
	// 			    	(slide.timeline[count1]-5599.9)/2800*slide.W+(Math.abs(idx-i)*1200), 0, 1200, 857,//canvas의 위치
	// 			    );
	// 			}
	//     		break;
	//     	case 1:
	//     		ctx.moveTo(0, slide.L);
	// 		    ctx.lineTo(slide.W, slide.S);
	// 		    ctx.lineTo(slide.W, slide.L+200);
	// 		    ctx.lineTo(0, slide.S+500);
	// 		    ctx.closePath();
	// 		    ctx.clip();
	// 		    for(var i=idx; idx>r? i>=r: i<=r; idx>r? i--: i++){
	// 		    	ctx.drawImage(
	// 			    	images[i], 
	// 			    	0, 0, images[i].width, images[i].height,//image의 위치
	// 			    	(slide.timeline[count2]-5599.9)/2800*slide.W+(Math.abs(idx-i)*1200), 0, 1200, 857,//canvas의 위치
	// 			    );
	// 			}
	//     		break;
	//     	case 2:
	//     		ctx.moveTo(0, slide.S+500);
	// 		    ctx.lineTo(slide.W, slide.L+200);
	// 		    ctx.lineTo(slide.W, slide.H);
	// 		    ctx.lineTo(0, slide.H);
	// 		    ctx.closePath();
	// 		    ctx.clip();
	// 		    for(var i=idx; idx>r? i>=r: i<=r; idx>r? i--: i++){
	// 		    	ctx.drawImage(
	// 			    	images[i], 
	// 			    	0, 0, images[i].width, images[i].height,//image의 위치
	// 			    	(slide.timeline[count3]-5599.9)/2800*slide.W+(Math.abs(idx-i)*1200), 0, 1200, 857,//canvas의 위치
	// 			    );
	// 			}
	//     		break;
	//     }
	//     ctx.restore();
	// }
	// if(count3<Math.abs(idx-r)*120){
	// 	setTimeout(function (){
	// 		moveItem(
	// 			r, 
	// 			count1<Math.abs(idx-r)*120? ++count1: count1, 
	// 			count1>12&&count2<Math.abs(idx-r)*120? ++count2: count2, 
	// 			count1>24? ++count3: count3
	// 		);
	// 	}, 1000/FPS);
	// }else{
	// 	isAnimated= false;
	// }
}
window.onload= function (){
	var canvas= document.getElementById("canvas");
	var ctx= canvas.getContext("2d");
	var isAnimated= false;

	
	
    initSlider();
    initEvents();
}