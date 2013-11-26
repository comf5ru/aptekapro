$(function() {
    $( "#slider-range" ).slider({
      range: true,
      min: 0,
      max: 150000 ,
      values: [ 700, 123700 ],
      
      slide: function( event, ui ) {

  
        $( "#minCost" ).val(ui.values[ 0 ]);
        $( "#maxCost" ).val(ui.values[ 1 ]);
        $( "#minUP" ).text(ui.values[ 0 ]);
        $( "#maxUP" ).text(ui.values[ 1 ]);

     
        minT= $(".ui-slider-handle").eq(0).css('left');
        maxT= $(".ui-slider-handle").eq(1).css('left');

        $( "#minUP" ).css( {"left":minT});
        $( "#maxUP" ).css( {"left":maxT});


      }
    });
    $( "#minCost" ).val( $( "#slider-range" ).slider( "values", 0));
    $( "#maxCost" ).val( $( "#slider-range" ).slider( "values", 1));
    $( "#minUP" ).text( $( "#slider-range" ).slider( "values", 0));
    $( "#maxUP" ).text( $( "#slider-range" ).slider( "values", 1));

    $("#minCost").change(function(){
      var value1=$("#minCost").val();
      var value2=$("#maxCost").val();

    if(parseInt(value1) > parseInt(value2)){
    value1 = value2;
    $("#minCost").val(value1);
  }
  $("#slider-range").slider("values",0,value1);  
});

     $("#maxCost").change(function(){
       var value1=$("#minCost").val();
       var value2=$("#maxCost").val();
    if (value2 > 150000) { value2 = 150000; $("#maxCost").val(150000)}
    if(parseInt(value1) > parseInt(value2)){
    value2 = value1;
    $("#maxCost").val(value2);
  }
  $("#slider-range").slider("values",1,value2);
});



    
  });