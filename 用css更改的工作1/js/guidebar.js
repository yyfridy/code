var OYbar = {
	init:function (){
		this.reset();
		$('#naso-switch').on('click',this.toggleArrow);
		this.showTips();
	},
	reset:function (){
		$('.guide-bar').find('li:gt(3):not(:last)').hide();
	},
	toggleArrow:function (){
		flag = $('#naso-switch').hasClass('guide-item-down');
		if (flag) {
			$('#naso-switch').removeClass('guide-item-down').addClass('guide-item-up').text("收起");
			$('.guide-bar li').show();
		}else{
			$('#naso-switch').removeClass('guide-item-up').addClass('guide-item-down').text("展开");
			OYbar.reset()
		}
	},
	showTips:function (){
		$('.guide-item').mouseover(function() {
			var   self = $(this),
			 	  top  = self.offset().top,
			      left = self.offset().left,
				current = $(this).index(),
				layerW = $('.naso-layer').eq(current).outerWidth();
			self.addClass('on').siblings('.guide-item').removeClass('on');	
			$('.naso-layer').hide().eq(current).css({
				left:left - layerW,
				top: top	
			}).toggle();
		});
		$('.guide-wrapper').mouseleave(function (){
			$('.naso-layer').hide();
			$('.guide-item').removeClass('on');
		})

	}
};
var	oyjr = {
	init:function (){
		this.slide();
	},
	slide:function (){
		// var sliderPage = $('.pages'),
		// 	pages = sliderPage.find('.page'),
		// 	pageWidth = pages.width(), 
		// 	pageLen = pages.size(), 
		// 	current = 1,
		// 	totalpageWidth = pageLen * pageWidth; 
			
		// $('#naso-slider-nav').find('a').on('click', function() {
		// 	var direction = $(this).data('dir'),
		// 		loc = pageWidth; 

		// 	// update current value
		// 	( direction === 'next' ) ? ++current : --current;

		// 	if ( current === 0 ) {
		// 		current = pageLen;
		// 		loc = totalpageWidth - pageWidth; 
		// 		direction = 'next';
		// 	} else if ( current - 1 === pageLen ) { 
		// 		current = 1;
		// 		loc = 0;
		// 	}

		// 	transition(sliderPage, loc, direction);
		// });

		// function transition( container, loc, direction ) {
		// 	var unit; // -= +=

		// 	if ( direction && loc !== 0 ) {
		// 		unit = ( direction === 'next' ) ? '-=' : '+=';
		// 	}

		// 	container.animate({
		// 		'margin-left': unit ? (unit + loc) : loc
		// 	});
		// }
		var w=280,
		    l=0,
		    timer=null,
		    page = $(".naso-page"),
		    pages = $(".naso-pages"),
		    len=page.size()*2; 

		pages.prepend(pages.html()).css({'width':len*w, 'left': -len*w/2});

		timer=setInterval(init,3000);	

		function init(){
			$(".naso-next-btn").trigger('click'); 	
		}

		$('#naso-slide-wrapper').hover(function(){
			clearInterval(timer);
		},function(){
			timer=setInterval(init,3000);
		});
		$(".naso-prev-btn").click(function(){
			l=parseInt(pages.css("left"))+w;
		 	showCurrent(l); 
		});

		$(".naso-next-btn").click(function(){
			l=parseInt(pages.css("left"))-w;
			showCurrent(l);
		});
		function showCurrent(l){     
			if(pages.is(':animated')){ 
				return;
			}
			pages.animate({"left":l},500,function(){
				if(l==0){ 
			   		pages.css("left",-len*w/2);     
			 	}else if(l==(1-len)*w){ 
					pages.css('left',(1-len/2)*w); 
				}
			}); 	  
		}




		      
		            


	}
};
// var	oywl = {
// 	init:function (){
		
// 	}
// };
// var	oyjg = {
// 	init:function (){
		
// 	}
// };
// var	oyjs = {
// 	init:function (){
		
// 	}
// };
$(function (){
	OYbar.init();
	oyjr.init();
	// oywl.init()
	// oyjg.init()
	// oyjs.init()
})