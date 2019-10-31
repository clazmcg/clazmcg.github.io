$ (document).ready(function(){
	console.log("The page is ready!");

	// $(".research-item").click(function(){
	// 	$(this).toggleClass('large');
	// });

	$('.months').click(function(){
		$('.months').removeClass('active');
		$(this).addClass('active');
	})

	var hideAll = function() {
		$(".thumbnail").addClass('hide');
	}

	$('.btn-jan').click(function(){
		hideAll();
		$('.jan').removeClass('hide');
	});

	$('.btn-feb').click(function(){
		hideAll();
		$('.feb').removeClass('hide');
	});

	$('.btn-mar').click(function(){
		hideAll();
		$('.mar').removeClass('hide');
	});

	$('.btn-apr').click(function(){
		hideAll();
		$('.apr').removeClass('hide');
	});

	$('.btn-may').click(function(){
		hideAll();
		$('.may').removeClass('hide');
	});

	$('.btn-jun').click(function(){
		hideAll();
		$('.jun').removeClass('hide');
	});

	$('.btn-jul').click(function(){
		hideAll();
		$('.jul').removeClass('hide');
	});

	$('.btn-aug').click(function(){
		hideAll();
		$('.aug').removeClass('hide');
	});

	$('.btn-sep').click(function(){
		hideAll();
		$('.sep').removeClass('hide');
	});

	$('.btn-oct').click(function(){
		hideAll();
		$('.oct').removeClass('hide');
	});

	$('.btn-nov').click(function(){
		hideAll();
		$('.nov').removeClass('hide');
	});

	$('.btn-dec').click(function(){
		hideAll();
		$('.dec').removeClass('hide');
	});



});