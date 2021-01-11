;(function($){
    $(function (){
///Плавная прокрутка переходов о ссылкам
        $("body").on('click', '[href*="#"]', function(e){
            let fixed_offset = 100;
            $('html,body').stop().animate({ scrollTop: $(this.hash).offset().top - fixed_offset }, 1000);
            e.preventDefault();
        });
///Модальное окно
        $('.button-hire').on('click', function () {
            $('.menu_popup, .background').show();
            $('.menu-pop-up').hide();
        });
        $('#close').on('click',function () {
            $('.menu_popup, .background').hide();
            $('.menu-pop-up').show();
        });

///Гамбургер меню
        $('.menu-pop-up label').click(function() {
            var clicks = $(this).data('clicks');
            if (clicks) {
                $('.background').css('display', 'none');
                $('.menu-pop-up').css('background', 'none');
            } else {
                $('.background').css('display', 'block');
                $('.menu-pop-up').css('background', 'white');
            }
            $(this).data("clicks", !clicks);
        });

/////////////////////////////////////////////////////
        });
})(jQuery);

