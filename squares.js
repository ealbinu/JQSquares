/*
##	Squares.js -v1 alpha-.
##	//  www.dragonbarbudo.com // 
	
	jQuery plugin: Generates a grid based on squares.
	It can be defined a with and height, margin and background color for the squares.
	Creates <div class="squares"></div>, same that can be altered with CSS. It includes an <img /> that can be filled with some jQuery functions.
*/

(function( $ ){

	$.fn.squares = function(options) {
	
  	 var st = {
		sqHorizontal:	20,
		sqVertical:		16,
		sqMargin:		5,
		sqWidth:		130,
		sqHeight:		80,
		sqBg:			'#fff'
    };

	$.extend(st, options);

	var container = $(this);
	var className = '.squares';
	var totalSq=st.sqHorizontal*st.sqVertical;
	var containerWidth = (st.sqWidth*st.sqHorizontal) + ((st.sqMargin*2)*st.sqHorizontal);
	var containerHeight = (st.sqHeight*st.sqVertical) + ((st.sqMargin*2)*st.sqVertical);
	var cWidth2=containerWidth/2;
	var cHeight2=containerHeight/2;
	for(i=0; i<=totalSq; i++){
		var addDiv = '<div class="squares" id="'+i+'"><img /></div>';
		$(container).append(addDiv);
		
	}
	container.css({
		'position':'absolute',
		'left':'50%',
		'top':'50%',
		'overflow':'hidden',
		'width': containerWidth,
		'height': containerHeight,
		'margin-left': '-'+cWidth2+'px',
		'margin-top': '-'+cHeight2+'px'
	});
	$(className).css({
		'float':'left',
		'width':st.sqWidth+'px',
		'height':st.sqHeight+'px',
		'margin':st.sqMargin+'px',
		'background':st.sqBg,
		'cursor': 'pointer'
	});	
	
  };
})( jQuery );