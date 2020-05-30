backgrounds_array = ['images/main_banner_images/bedroom.png','images/main_banner_images/bedroom_1.jpg', 'images/main_banner_images/bedroom_2.jpg', 'images/main_banner_images/bedroom_3.jpg']
slider_button_array = ['slider-button-1','slider-button-2','slider-button-3','slider-button-4']
// setInterval(change_background, 2000);
// for(let i = 0; i < backgrounds_array.length; i++){
    // $('.banner').css('background-image', 'none');
    // setInterval(() => {
    //     $('.banner').css('background-image', 'url(images/main_banner_images/bedroom_2.jpg )');
    // }, 2000);
        
    // }
    function Rotator_cont() {

        var s = 5000;  // Время отображения

        var N= backgrounds_array.length;

        // var i=Math.round(Math.random()*(N));
        var i =-1;
        Rotator(i);

        function Rotator(i){
        i++; if( i > N - 1){i=0};//alert(i);
        $('.banner').css('background-image', 'url('+ backgrounds_array[i] +')');
        $('#'+slider_button_array[i] +'').css('opacity','1');
        $('#'+slider_button_array[i+1] +'').css('opacity','.5');
        $('#'+slider_button_array[i-1] +'').css('opacity','.5');
        $('#'+slider_button_array[slider_button_array.length-1] +'').css('opacity','.5');
        timerId01=setTimeout(function(){Rotator(i)},s);return;}
        }
        Rotator_cont()
        

