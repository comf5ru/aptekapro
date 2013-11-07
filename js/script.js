$(document).ready(function() {

$('.carousel').carousel();


$(".row.tovari .col-md-2").hover(function() {
	$(this).find(".animate-btn").stop(true).animate({"bottom":"0"})
}, function() {
	$(this).find(".animate-btn").stop(true).animate({"bottom":"-68px"})
});
	
	
});