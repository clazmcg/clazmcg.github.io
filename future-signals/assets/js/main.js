$ (document).ready(function(){
	console.log("The page is ready!");

	$(".research-item").click(function(){
		$(this).toggleClass('large');
	});

	$('.nav-item').click(function(){
		$('.nav-item').removeClass('active');
		$(this).addClass('active');
	})

	var hideAll = function() {
		$(".research-item").addClass('hide');
	}

	$('.btn-words').click(function(){
		hideAll();
		$('.words').removeClass('hide');
	});

	$('.btn-influencer').click(function(){
		hideAll();
		$('.influencer').removeClass('hide');
	});

	$('.btn-spon').click(function(){
		hideAll();
		$('.spon').removeClass('hide');
	});

	$('.btn-liked').click(function(){
		hideAll();
		$('.liked').removeClass('hide');
	});

	$('.btn-saved').click(function(){
		hideAll();
		$('.saved').removeClass('hide');
	});





});