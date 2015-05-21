$(document).ready(function() {

	var imageWidth = 200;
	var imageHeight = 200;
	
	$('#images span').css({'width' : imageWidth, 'height' : imageHeight});
	
	function imageNumber() { 
	
		$('.appended').remove();
		$('#images span').removeClass();
		
		$('.wrapper').each(function() {
		
			var wrapperContent = $(this).html();
			$(this).replaceWith(wrapperContent);
		
		});
		
		var windowWidth = $(window).width(); 
		var numberOfImages = ($("#images span").length);
		var imagesPerRow = Math.ceil(windowWidth / imageWidth);
		
		if(numberOfImages % imagesPerRow != 0) {
			
			var numberOnRow = Math.round((1 - (numberOfImages/imagesPerRow % 1)) * imagesPerRow); 
			var number = 0;
			
			while(number <= numberOnRow) { 
			
			 	$('#i'+number).clone(true).appendTo($('#images')).attr('class', 'appended');
			 	++number;
			
			}
			
			var nuAppended = $('.appended').length;
			var nextA = parseFloat(numberOfImages)+1;
			
			while(nuAppended > 0) {
				$('.appended').each(function() { 
					$(this).attr('id', 'i'+nextA);
					++nextA;
					--nuAppended;
				});
			}						
  		}
  		
  		var slices = $("#images span"); 
  		for(var i = 0; i < slices .length; i+=imagesPerRow) {
  			slices .slice(i, i+imagesPerRow).wrapAll("<div class='wrapper'></div>");
  		}
  		
	}
	
	function hovering() {
		$('#images .wrapper span img').hover(function() {
			$(this).css({
				'width' : '150%',
				'height' : '150%',
				'z-index' : '7000'
			});
		}, function() {
			$(this).css({
				'height' : '100%',
				'width' : '100%',
				'box-shadow' : 'inset 0px 0px 20px rgba(0,0,0,0.8)',
				'z-index' : '2000'
			});
		});
		
		$('#images .wrapper:not(:first, :last) span:not(:first-child) img').hover(function() {	
			$(this).css({
				'right' : '-25%',
				'bottom' : '-25%'
			});
		}, function() {
			$(this).css({
				'z-index' : '2000',
				'right' : '0',
				'bottom' : '0'
			});
		});
		
		$('#images .wrapper:first span:not(:first) img').hover(function() {
			$(this).css({
				'right' : '-25%',
				'top' : '0'
			});
		}, function() {
			$(this).css({
				'z-index' : '2000',
				'right' : '0',
				'bottom' : '0'
			});
		});
		
		$('#images .wrapper:first span:first-child img').hover(function() {
			$(this).css({
				'left' : '0',
				'top' : '0'
			});
		}, function() {	
			$(this).css({
				'left' : '0',
				'top' : '0'
			});
		});
		
		$('#images .wrapper:not(:first, :last) span:first-child img').hover(function() { 
			$(this).css({
				'left' : '0',
				'top' : '-25%'
			});
		}, function() {
			$(this).css({
				'left' : '0',
				'top' : '0'
			});	
		});
		
		$('#images .wrapper:last span img:not(:first)').hover(function() {
			$(this).css({
				'left' : '-25%',
				'top' : '-50%'
			});
		}, function() {
			$(this).css({
				'left' : '0',
				'top' : '0',
			});	
		});
		
		$('#images .wrapper:last span:first img').hover(function() {
			$(this).css({
				'left' : '0',
				'top' : '-50%'
			});
		}, function() {
			$(this).css({
				'left' : '0',
				'top' : '0'
			});		
		});
	}
	/* So the initial wall looks right */
	imageNumber();
	hovering();
	
	$(window).resize(function() {
		imageNumber();
		hovering();
	});
	
});