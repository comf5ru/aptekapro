$(document).ready(function() {

$('.carousel').carousel();


$(".row.tovari .tovarcol").hover(function() {
	$(this).find(".animate-btn").stop(true).animate({"bottom":"0"})
}, function() {
	$(this).find(".animate-btn").stop(true).animate({"bottom":"-68px"})
});

console.log('123');


$(".poisk input").focus(function(){
console.log('23');
	$(".vipod").show();
})

$(".poisk input").blur(function(){
	$(".vipod").hide();
})

	
	
});