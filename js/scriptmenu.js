$(document).ready(function() {

 $(".nav>li>a").hover(function(){

forme=$(this).attr("for");
    $(".nav>li .active").removeClass('active');

    $(".menu-foot.active").hide().removeClass('active');

 	$("#"+forme).show().addClass('active');

 	$(this).addClass('active');



	
});

$(document).click( function(event){
	if( $(event.target).closest(".menu-foot.active").length ) 
	return;
	$(".menu-foot.active").hide().removeClass('active');
	$(".nav>li .active").removeClass('active');
	event.stopPropagation();
});


});
