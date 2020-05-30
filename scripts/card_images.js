$('.down_images img').click(function(){
    var src = $(this).attr('src');
    // console.log(src);
    $('.item_main_image').attr('src', src);
});    
