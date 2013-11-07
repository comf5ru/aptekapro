$(document).ready(function() {
  ymaps.ready(init);
  var myMap, myMap2, myPlacemark;

  function init(){     
    myMap = new ymaps.Map ("map", {
      center: [55.76, 37.64],
      zoom: 12
    });
    myMap.controls.add('mapTools')
                  .add('typeSelector')
                  .add('zoomControl');
    myPlacemark = new ymaps.Placemark([55.76, 37.64], { 
      hintContent: 'Москва!', 
      balloonContent: 'Столица России' 
    }, {
      iconImageHref: 'img/yamap-icon.png',
      iconImageSize: [24, 33],
      iconImageOffset: [-14, -32]
    });

    myMap.geoObjects.add(myPlacemark);



    myMap2 = new ymaps.Map ("map2", {
      center: [55.76, 37.64],
      zoom: 14
    });
    myMap2.controls.add('mapTools')
                  .add('typeSelector')
                  .add('zoomControl');
    myPlacemark2 = new ymaps.Placemark([55.76, 37.64], { 
      hintContent: 'Москва!', 
      balloonContent: 'Столица России' 
    }, {
      iconImageHref: 'img/yamap-icon.png',
      iconImageSize: [24, 33],
      iconImageOffset: [-14, -32]
    });
    myMap2.geoObjects.add(myPlacemark2);
  }
});