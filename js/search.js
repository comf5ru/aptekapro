$(document).ready(function() {
	$("ul.search-titles li a").click(function(e) {
		e.preventDefault;
		var clicked = $(this).parent();
		var index = clicked.index()+2;
		console.log(index);

		if(!clicked.hasClass("active")){
			$("ul.search-titles li.active").removeClass("active");
			clicked.addClass("active");
			$(".search-set.active").removeClass("active");
			$(".search-set:nth-child(" + index + ")").addClass("active");
		};
	});
});