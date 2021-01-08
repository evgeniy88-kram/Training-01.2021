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
            $('.menu_popup, .background').css('display', 'block');
            $('.menu-pop-up').css('display', 'none');
        });
        $('#close').on('click',function () {
            $('.menu_popup, .background').css('display','none');
            $('.menu-pop-up').css('display', 'block');
        });

///Гамбургер меню
        $('.menu-pop-up label').click(function() {
            var clicks = $(this).data('clicks');
            if (clicks) {
                $('.background').css('display', 'none');
            } else {
                $('.background').css('display', 'block');
            }
            $(this).data("clicks", !clicks);
        });

/////////////////////////////////////////////////////
        });
})(jQuery);

