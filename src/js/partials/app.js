$(document).ready(function(){
	
	$('.nav-open-btn').on('click', function() {
		$('body').toggleClass('no-scroll');
		$('.nav-mob').addClass('active-nav');
	});

	$(document).keyup(function(e) {     
    if(e.keyCode== 27) {
			$('body').removeClass('no-scroll');
			$('.nav-mob').removeClass('active-nav');
    } 
	});

	$("body").click(function(e) {
		if(e.target.id !== 'nav-open-btn'){
			$('.nav-mob').removeClass('active-nav');
		}      
	});

	$('.close-btn').on('click', function() {
		$('body').removeClass('no-scroll');
		$('.nav-mob').removeClass('active-nav');
    });
    
    $(".nav-screen").hover(
        function(){
            $( this ).stop().css('left', '0');
            $('.container').stop().css('margin-left', '25rem');
        }, function() {
            $( this ).stop().css('left', '-18rem');
            $('.container').stop().css('margin-left', '8rem');
        }
    );

});

// Yandex Map
ymaps.ready(init);

function init() {

    ////YandexApi map
    var megobariMap = new ymaps.Map("map", {
            center: [55.689253, 37.294798], //megobari
            zoom: 17,

            //убрать кнопки управления
            controls: ['zoomControl']
        }),


        // Создаем геообъект с типом геометрии "Круг".
        megobariPlacemark = new ymaps.GeoObject({
            // Описание геометрии
            geometry: {
                type: "Point",
                coordinates: [55.689253, 37.294798]
            }
        });

    megobariMap.geoObjects.add(megobariPlacemark);


// отключается zoom при прокрутке страницы
    megobariMap.behaviors.disable('scrollZoom');
    // megobariMap.behaviors.disable('drag');
}