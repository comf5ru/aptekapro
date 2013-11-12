$(document).ready(function() {

$('.carousel').carousel();


$(".row.tovari .tovarcol").hover(function() {
	$(this).find(".animate-btn").stop(true).animate({"bottom":"0"},"default")
	$(this).find(".animate-btn-gradient").stop(true).show("default");

}, function() {
	$(this).find(".animate-btn").stop(true).animate({"bottom":"-68px"},"default")
	$(this).find(".animate-btn-gradient").stop(true).hide("default");
});



$(".poisk input").focus(function(){
	$(".vipod").show();
})

$(".poisk input").blur(function(){
	$(".vipod").hide();
})

	
	
});