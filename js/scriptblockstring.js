$(document).ready(function() {

 $("#style1").click(function(){
 	$(".block").css( {"display":"block"} );
	$(".string").css( {"display":"none"} );
	$("#style1").parent().addClass('active');
	$("#style2").parent().removeClass('active');
	});

 $("#style2").click(function (){
	$(".string").css( {"display":"block"} );
	$(".block").css( {"display":"none"} );
	$("#style2").parent().addClass('active');
	$("#style1").parent().removeClass('active');
	});
	
});