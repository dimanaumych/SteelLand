$('.menu-btn').on('click', function(e) {
    e.preventDefault();
    $('.left_sidebar').toggleClass('menu_active');
    $('.main_content').toggleClass('content_active');
    $('.menu-btn').css("display","none");
})
$('.cancel-btn').on('click', function(e) {
    e.preventDefault();
    $('.left_sidebar').toggleClass('menu_active');
    $('.main_content').toggleClass('content_active');
    setTimeout(()=>{
        $('.menu-btn').css("display","flex");
    }, 280)

});